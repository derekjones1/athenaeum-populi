#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  auditExistingMath,
  buildSourceMap,
  loadSourceLock,
  parseLocalSection,
  parseModuleXml,
  sha256,
  verifyCommittedSourceMap,
} from './lib-openstax-source.mjs';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const lock = loadSourceLock(repositoryRoot);
const defaultSourceDirectory = path.join(repositoryRoot, 'sources/openstax/osbooks-prealgebra-bundle');

function usage() {
  console.log(`OpenStax source reconciliation (report-only for existing content)

Usage:
  node tools/openstax-source.mjs fetch [--source-dir PATH] [--latest]
  node tools/openstax-source.mjs build-map [--source-dir PATH]
  node tools/openstax-source.mjs verify-map
  node tools/openstax-source.mjs audit [--source-dir PATH] [--output PATH] [--format markdown|json]
  node tools/openstax-source.mjs history [--source-dir PATH] [--output PATH] [--format markdown|json]
  node tools/openstax-source.mjs status

Defaults:
  source cache: ${path.relative(repositoryRoot, defaultSourceDirectory)}
  pinned commit: ${lock.commit}

The audit never rewrites content pages. The build-map command only refreshes
data/openstax/math-source-map.json and is intended for reviewed source-lock updates.`);
}

function parseArguments(argv) {
  const command = argv[0] || 'help';
  const options = { sourceDirectory: defaultSourceDirectory, output: null, format: null, latest: false };
  for (let index = 1; index < argv.length; index++) {
    const argument = argv[index];
    if (argument === '--source-dir') {
      if (!argv[index + 1]) throw new Error('--source-dir needs a path');
      options.sourceDirectory = path.resolve(repositoryRoot, argv[++index]);
    } else if (argument === '--output') {
      if (!argv[index + 1]) throw new Error('--output needs a path');
      options.output = path.resolve(repositoryRoot, argv[++index]);
    } else if (argument === '--format') {
      if (!argv[index + 1]) throw new Error('--format needs markdown or json');
      options.format = argv[++index];
      if (!['markdown', 'json'].includes(options.format)) throw new Error('--format must be markdown or json');
    } else if (argument === '--latest') {
      options.latest = true;
    } else if (argument === '--help' || argument === '-h') {
      options.help = true;
    } else {
      throw new Error(`unknown argument: ${argument}`);
    }
  }
  return { command, options };
}

function run(command, args, { capture = false, cwd = repositoryRoot } = {}) {
  const result = spawnSync(command, args, {
    cwd,
    encoding: 'utf8',
    stdio: capture ? ['ignore', 'pipe', 'pipe'] : 'inherit',
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    const detail = capture ? `\n${(result.stderr || result.stdout || '').trim()}` : '';
    throw new Error(`${command} ${args.join(' ')} failed with exit ${result.status}${detail}`);
  }
  return capture ? result.stdout.trim() : '';
}

function git(sourceDirectory, args, options = {}) {
  return run('git', ['-C', sourceDirectory, ...args], options);
}

function checkoutCommit(sourceDirectory) {
  if (!existsSync(path.join(sourceDirectory, '.git'))) return null;
  return git(sourceDirectory, ['rev-parse', 'HEAD'], { capture: true });
}

function normalizedGitUrl(value) {
  return String(value || '').trim().replace(/\/+$/, '').replace(/\.git$/, '');
}

function fetchSource(sourceDirectory, latest) {
  const parent = path.dirname(sourceDirectory);
  mkdirSync(parent, { recursive: true });
  const sourceExists = existsSync(sourceDirectory);
  if (sourceExists && !existsSync(path.join(sourceDirectory, '.git'))) {
    throw new Error(`${sourceDirectory} exists but is not a Git checkout; refusing to replace it`);
  }
  if (!sourceExists) {
    run('git', [
      'clone',
      '--filter=blob:none',
      '--no-checkout',
      '--depth', '1',
      lock.gitUrl,
      sourceDirectory,
    ]);
    git(sourceDirectory, ['sparse-checkout', 'init', '--cone']);
    git(sourceDirectory, ['sparse-checkout', 'set', 'META-INF', 'collections', 'modules']);
  }

  const origin = git(sourceDirectory, ['remote', 'get-url', 'origin'], { capture: true });
  if (normalizedGitUrl(origin) !== normalizedGitUrl(lock.gitUrl)) {
    throw new Error(`${sourceDirectory} origin ${JSON.stringify(origin)} is not the locked OpenStax repository`);
  }
  // A brand-new --no-checkout clone appears dirty because its tracked files
  // are intentionally absent. Existing caches, however, must never be changed
  // while they contain local work.
  if (sourceExists) {
    const dirty = git(sourceDirectory, ['status', '--porcelain'], { capture: true });
    if (dirty) throw new Error(`${sourceDirectory} has local changes; refusing to change its checkout`);
  }

  const requested = latest ? lock.branch : lock.commit;
  git(sourceDirectory, ['fetch', '--depth', '1', 'origin', requested]);
  const commit = git(sourceDirectory, ['rev-parse', 'FETCH_HEAD'], { capture: true });
  for (const baseline of new Set(Object.values(lock.books).map((book) => book.authoredBaselineCommit))) {
    if (!baseline || baseline === commit) continue;
    git(sourceDirectory, ['fetch', '--depth', '1', 'origin', baseline]);
    // Materialize the sparse CNXML/collection blobs while the fetch command is
    // online. A blobless partial clone otherwise defers them until history's
    // `git show`, unexpectedly making that supposedly offline audit use the
    // network.
    git(sourceDirectory, ['checkout', '--detach', baseline]);
  }
  git(sourceDirectory, ['checkout', '--detach', commit]);
  console.log(`\nOpenStax source ready at ${sourceDirectory}`);
  console.log(`commit ${commit}${latest ? ' (latest main)' : ' (pinned)'}`);
}

function requireSource(sourceDirectory) {
  for (const relativePath of ['META-INF/books.xml', 'collections', 'modules']) {
    if (!existsSync(path.join(sourceDirectory, relativePath))) {
      throw new Error(
        `OpenStax source is missing at ${sourceDirectory}. Run \`npm run source:fetch\` first, or pass --source-dir.`,
      );
    }
  }
}

function buildMap(sourceDirectory) {
  requireSource(sourceDirectory);
  const result = buildSourceMap(repositoryRoot, sourceDirectory, lock);
  if (result.errors.length) {
    for (const error of result.errors) console.error(`✗ ${error}`);
    throw new Error(`source mapping failed with ${result.errors.length} structural problem(s)`);
  }
  const target = path.join(repositoryRoot, 'data/openstax/math-source-map.json');
  writeFileSync(target, `${JSON.stringify(result.map, null, 2)}\n`);
  console.log(`Mapped ${result.map.sections.length} sections at ${path.relative(repositoryRoot, target)}.`);
}

function verifyMap() {
  const result = verifyCommittedSourceMap(repositoryRoot, lock);
  if (result.errors.length) {
    for (const error of result.errors) console.error(`✗ ${error}`);
    throw new Error(`source map verification failed with ${result.errors.length} problem(s)`);
  }
  console.log(`OpenStax source map: ${result.actualCount} local sections mapped to pinned CNXML modules.`);
}

function percentage(value) {
  return `${Math.round(value * 100)}%`;
}

function markdownCell(value) {
  return String(value ?? '').replaceAll('|', '\\|').replace(/\s+/g, ' ').trim();
}

function reportLink(output, localPath) {
  return path.relative(path.dirname(output), path.join(repositoryRoot, localPath)).split(path.sep).join('/');
}

function formatMarkdown(audit, sourceCommit, output) {
  const { summary, sections } = audit;
  const lines = [
    '# Existing Math ↔ OpenStax Source Audit',
    '',
    '> This is a report-only triage artifact. “Metadata matched” means that the',
    '> local section maps to the expected module and its title, objectives, and',
    '> instructional headings were found. It does not certify every equation,',
    '> answer, or figure; those remain explicit review lanes.',
    '>',
    '> Generated by `npm run source:check`; do not hand-edit this report.',
    '',
    `- OpenStax repository: [${lock.repository}](${lock.repository})`,
    `- Pinned review target: \`${lock.commit}\``,
    `- Audited checkout: \`${sourceCommit || 'not a Git checkout'}\``,
    `- Books: ${summary.mappedBooks}`,
    `- Numbered sections mapped: ${summary.sections}`,
    `- Metadata matched without a flag: ${summary.metadataMatched}`,
    `- Intentional adaptations adjudicated: ${summary.adaptationsAdjudicated}`,
    `- Unresolved sections needing review: ${summary.needsReview}`,
    `- Modules differing from the committed map: ${summary.changedUpstream}`,
    `- Objectives automatically located: ${summary.objectivesMatched}/${summary.objectivesTotal}`,
    `- Core instructional headings automatically located: ${summary.headingsMatched}/${summary.headingsTotal}`,
    `- Local interactive questions inventoried: ${summary.localInteractions}`,
    `- Upstream Try It prompts with a likely local prompt match: ${summary.sourceTriesLikelyMatched}/${summary.sourceTriesTotal}`,
    '',
    'The prose percentage is five-word source-shingle traceability, not a quality',
    'score. Low values can reflect disclosed condensation, reformatted mathematics,',
    'or intentionally omitted print material.',
    '',
    '## Section matrix',
    '',
    '| Local section | Module | Status | Objectives | Headings | Prose trace | Try Its likely | Local interactions |',
    '|---|---|---|---:|---:|---:|---:|---:|',
  ];
  for (const section of sections) {
    const status = section.reviewFlags.length
      ? section.reviewFlags.join(', ')
      : section.adjudications.length
        ? section.adjudications.map((decision) => decision.status).join(', ')
        : 'metadata matched';
    lines.push(
      `| [${markdownCell(`${section.book} ${section.sourceSection}`)}](${reportLink(output, section.localPath)}) | `
      + `\`${section.moduleId}\` | ${markdownCell(status)} | `
      + `${section.objectives.matched}/${section.objectives.total} | `
      + `${section.headings.matched}/${section.headings.total} | `
      + `${percentage(section.proseTraceability)} | `
      + `${section.tryMatches.likely}/${section.tryMatches.total} | `
      + `${section.localCounts.interactions} |`,
    );
  }

  const reviewSections = sections.filter((section) => section.reviewFlags.length);
  if (reviewSections.length) {
    lines.push('', '## Flag details', '');
    for (const section of reviewSections) {
      lines.push(`### ${section.book} ${section.sourceSection} — ${section.localTitle}`, '');
      lines.push(`Flags: ${section.reviewFlags.map((flag) => `\`${flag}\``).join(', ')}`, '');
      for (const objective of section.objectives.details.filter((item) => item.coverage < 0.82)) {
        lines.push(`- Objective (${percentage(objective.coverage)} token coverage): ${objective.objective}`);
      }
      for (const heading of section.headings.details.filter((item) => item.score < 0.60)) {
        lines.push(`- Source heading (${percentage(heading.score)} best title similarity): ${heading.sourceHeading}`);
      }
      lines.push('');
    }
  }
  const adjudicatedSections = sections.filter((section) => section.adjudications.length);
  if (adjudicatedSections.length) {
    lines.push('', '## Adjudicated intentional adaptations', '');
    for (const section of adjudicatedSections) {
      lines.push(`### ${section.book} ${section.sourceSection} — ${section.localTitle}`, '');
      for (const decision of section.adjudications) {
        lines.push(`- **${decision.status}:** ${decision.rationale}`);
      }
      lines.push('');
    }
  }
  return `${lines.join('\n')}\n`;
}

function printAuditSummary(audit, sourceCommit) {
  const summary = audit.summary;
  console.log(`OpenStax audit checkout: ${sourceCommit || 'not a Git checkout'}`);
  console.log(`Mapped sections: ${summary.sections}`);
  console.log(`Metadata matched: ${summary.metadataMatched}`);
  console.log(`Intentional adaptations adjudicated: ${summary.adaptationsAdjudicated}`);
  console.log(`Unresolved review items: ${summary.needsReview}`);
  console.log(`Objectives located: ${summary.objectivesMatched}/${summary.objectivesTotal}`);
  console.log(`Headings located: ${summary.headingsMatched}/${summary.headingsTotal}`);
  console.log(`Likely Try It prompt matches: ${summary.sourceTriesLikelyMatched}/${summary.sourceTriesTotal}`);
  console.log(`Local interactions inventoried: ${summary.localInteractions}`);
  if (summary.changedUpstream) console.log(`Changed upstream modules: ${summary.changedUpstream}`);

  const flagged = audit.sections.filter((section) => section.reviewFlags.length);
  if (flagged.length) {
    console.log('\nReview queue:');
    for (const section of flagged.slice(0, 30)) {
      console.log(`  ${section.localPath}: ${section.reviewFlags.join(', ')}`);
    }
    if (flagged.length > 30) console.log(`  …and ${flagged.length - 30} more (write a report with --output)`);
  }
}

function auditSource(sourceDirectory, output, requestedFormat) {
  requireSource(sourceDirectory);
  const sourceCommit = checkoutCommit(sourceDirectory);
  const audit = auditExistingMath(repositoryRoot, sourceDirectory, lock);
  if (audit.structuralErrors.length) {
    for (const error of audit.structuralErrors) console.error(`✗ ${error}`);
    throw new Error(`audit stopped on ${audit.structuralErrors.length} structural problem(s)`);
  }
  printAuditSummary(audit, sourceCommit);

  if (output) {
    const inferredFormat = output.endsWith('.json') ? 'json' : 'markdown';
    const format = requestedFormat || inferredFormat;
    const rendered = format === 'json'
      ? `${JSON.stringify({ ...audit, sourceCommit, lockCommit: lock.commit }, null, 2)}\n`
      : formatMarkdown(audit, sourceCommit, output);
    mkdirSync(path.dirname(output), { recursive: true });
    writeFileSync(output, rendered);
    console.log(`\nWrote ${format} report to ${path.relative(repositoryRoot, output)}.`);
  }
}

function hasGitCommit(sourceDirectory, commit) {
  const result = spawnSync('git', ['-C', sourceDirectory, 'cat-file', '-e', `${commit}^{commit}`], {
    encoding: 'utf8',
    stdio: 'ignore',
  });
  return result.status === 0;
}

function gitFile(sourceDirectory, commit, relativePath) {
  return git(sourceDirectory, ['show', `${commit}:${relativePath}`], { capture: true });
}

function sameJson(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function changedTries(before, after, local) {
  const beforeById = new Map(before.tries.map((item) => [item.id, item]));
  const afterById = new Map(after.tries.map((item) => [item.id, item]));
  const ids = [...new Set([...beforeById.keys(), ...afterById.keys()])].sort();
  const changes = [];

  for (const id of ids) {
    const oldTry = beforeById.get(id) || null;
    const newTry = afterById.get(id) || null;
    if (sameJson(oldTry, newTry)) continue;
    const oldMath = new Set(oldTry?.problemMath || []);
    const newMath = new Set(newTry?.problemMath || []);
    let localOld = false;
    let localNew = false;
    let localQuestion = '';
    for (const interaction of local.interactions) {
      const matchesOld = interaction.questionMath.some((signature) => oldMath.has(signature));
      const matchesNew = interaction.questionMath.some((signature) => newMath.has(signature));
      if (matchesOld || matchesNew) localQuestion ||= interaction.question;
      localOld ||= matchesOld;
      localNew ||= matchesNew;
    }
    let localVariant = 'not-retained-or-unresolved';
    if (localOld && !localNew) localVariant = 'authored-baseline';
    else if (localNew && !localOld) localVariant = 'current-upstream';
    else if (localOld && localNew) localVariant = 'math-unchanged-or-both';
    changes.push({
      id,
      problemChanged: oldTry?.problem !== newTry?.problem,
      solutionChanged: oldTry?.solution !== newTry?.solution,
      before: oldTry,
      after: newTry,
      localVariant,
      localQuestion,
    });
  }
  return changes;
}

function historyAudit(sourceDirectory) {
  if (!existsSync(path.join(sourceDirectory, '.git'))) {
    throw new Error('history audit requires the Git checkout created by npm run source:fetch');
  }
  const neededCommits = new Set([lock.commit]);
  for (const book of Object.values(lock.books)) neededCommits.add(book.authoredBaselineCommit);
  const missing = [...neededCommits].filter((commit) => !hasGitCommit(sourceDirectory, commit));
  if (missing.length) {
    throw new Error(`source checkout lacks locked historical commit(s): ${missing.join(', ')}; rerun npm run source:fetch`);
  }

  const sourceMap = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/math-source-map.json'), 'utf8'));
  const decisionData = JSON.parse(readFileSync(
    path.join(repositoryRoot, 'data/openstax/math-reconciliation-decisions.json'),
    'utf8',
  ));
  if (decisionData.targetCommit !== lock.commit) {
    throw new Error(`reconciliation decisions target ${decisionData.targetCommit} does not match source lock ${lock.commit}`);
  }
  const driftDecisionByPath = new Map(
    (decisionData.upstreamDriftDecisions || []).map((decision) => [decision.localPath, decision]),
  );
  const sections = [];
  for (const entry of sourceMap.sections) {
    const baselineCommit = lock.books[entry.book].authoredBaselineCommit;
    const modulePath = `modules/${entry.moduleId}/index.cnxml`;
    const beforeXml = gitFile(sourceDirectory, baselineCommit, modulePath);
    const afterXml = gitFile(sourceDirectory, lock.commit, modulePath);
    const beforeSha256 = sha256(beforeXml);
    const afterSha256 = sha256(afterXml);
    if (beforeSha256 === afterSha256) continue;

    const before = parseModuleXml(beforeXml);
    const after = parseModuleXml(afterXml);
    const local = parseLocalSection(readFileSync(path.join(repositoryRoot, entry.localPath), 'utf8'));
    const tries = changedTries(before, after, local);
    const changes = {
      title: before.title !== after.title,
      objectives: !sameJson(before.objectives, after.objectives),
      headings: !sameJson(before.coreHeadings, after.coreHeadings),
      instructionalText: before.instructionalText !== after.instructionalText,
      counts: !sameJson(before.counts, after.counts),
      tries: tries.length > 0,
    };
    const classification = Object.values(changes).some(Boolean) ? 'content-changed' : 'markup-or-metadata-only';
    sections.push({
      ...entry,
      baselineCommit,
      targetCommit: lock.commit,
      beforeSha256,
      afterSha256,
      classification,
      changes,
      changedTries: tries,
      decision: driftDecisionByPath.get(entry.localPath) || null,
    });
  }

  return {
    repository: lock.repository,
    targetCommit: lock.commit,
    baselineConfidence: 'inferred-from-local-pdf-metadata',
    baselines: Object.fromEntries(Object.entries(lock.books).map(([book, value]) => [book, value.authoredBaselineCommit])),
    summary: {
      mappedSections: sourceMap.sections.length,
      changedSections: sections.length,
      contentChanged: sections.filter((section) => section.classification === 'content-changed').length,
      markupOrMetadataOnly: sections.filter((section) => section.classification === 'markup-or-metadata-only').length,
      changedTryIts: sections.reduce((sum, section) => sum + section.changedTries.length, 0),
      locallyBaselineTryIts: sections.reduce(
        (sum, section) => sum + section.changedTries.filter((item) => item.localVariant === 'authored-baseline').length,
        0,
      ),
      adjudicatedLocalDrift: sections.filter((section) => section.decision).length,
    },
    sections,
  };
}

function formatHistoryMarkdown(history, output) {
  const lines = [
    '# OpenStax Changes Since the PDF-Era Baselines',
    '',
    '> The authored baseline commits are inferred from the local PDF metadata;',
    '> they are strong comparison candidates, not proven OpenStax build IDs.',
    '> This report detects upstream changes and never applies them automatically.',
    '>',
    '> Generated by `npm run source:history`; do not hand-edit this report.',
    '',
    `- Repository: [${history.repository}](${history.repository})`,
    `- Current review target: \`${history.targetCommit}\``,
    `- Mapped local sections: ${history.summary.mappedSections}`,
    `- Sections changed upstream: ${history.summary.changedSections}`,
    `- Content-level changes: ${history.summary.contentChanged}`,
    `- Markup/metadata-only changes: ${history.summary.markupOrMetadataOnly}`,
    `- Changed Try It records: ${history.summary.changedTryIts}`,
    `- Changed Try Its where local math matches the PDF-era form: ${history.summary.locallyBaselineTryIts}`,
    `- Local-impact drift decisions recorded: ${history.summary.adjudicatedLocalDrift}`,
    '',
    '## Baselines',
    '',
  ];
  for (const [book, commit] of Object.entries(history.baselines)) lines.push(`- ${book}: \`${commit}\``);
  lines.push('', '## Changed mapped sections', '');

  for (const section of history.sections) {
    lines.push(
      `### ${section.book} ${section.sourceSection} — [${section.localPath}](${reportLink(output, section.localPath)})`,
      '',
    );
    lines.push(
      `Module \`${section.moduleId}\`; ${section.classification}. `
      + `Changed lanes: ${Object.entries(section.changes).filter(([, changed]) => changed).map(([name]) => name).join(', ') || 'raw XML only'}.`,
      '',
    );
    if (section.decision) {
      lines.push(`Decision: **${section.decision.status}.** ${section.decision.rationale}`, '');
    }
    for (const changedTry of section.changedTries) {
      lines.push(`- Try It \`${changedTry.id}\` (${changedTry.localVariant})`);
      if (changedTry.problemChanged) {
        lines.push(`  - Before: ${markdownCell(changedTry.before?.problem || '[missing]')}`);
        lines.push(`  - Current: ${markdownCell(changedTry.after?.problem || '[missing]')}`);
      }
      if (changedTry.solutionChanged) {
        lines.push(`  - Before solution: ${markdownCell(changedTry.before?.solution || '[missing]')}`);
        lines.push(`  - Current solution: ${markdownCell(changedTry.after?.solution || '[missing]')}`);
      }
      if (changedTry.localQuestion) lines.push(`  - Local: ${markdownCell(changedTry.localQuestion)}`);
    }
    lines.push('');
  }
  return `${lines.join('\n')}\n`;
}

function runHistory(sourceDirectory, output, requestedFormat) {
  requireSource(sourceDirectory);
  const history = historyAudit(sourceDirectory);
  console.log(`Mapped sections: ${history.summary.mappedSections}`);
  console.log(`Changed upstream since inferred PDF baselines: ${history.summary.changedSections}`);
  console.log(`Content changes: ${history.summary.contentChanged}`);
  console.log(`Markup/metadata only: ${history.summary.markupOrMetadataOnly}`);
  console.log(`Changed Try Its: ${history.summary.changedTryIts}`);
  console.log(`Local Try Its still matching baseline math: ${history.summary.locallyBaselineTryIts}`);
  console.log(`Local-impact drift decisions recorded: ${history.summary.adjudicatedLocalDrift}`);
  for (const section of history.sections) {
    console.log(`  ${section.book} ${section.sourceSection} ${section.moduleId}: ${section.classification}`);
  }
  if (output) {
    const format = requestedFormat || (output.endsWith('.json') ? 'json' : 'markdown');
    const rendered = format === 'json'
      ? `${JSON.stringify(history, null, 2)}\n`
      : formatHistoryMarkdown(history, output);
    mkdirSync(path.dirname(output), { recursive: true });
    writeFileSync(output, rendered);
    console.log(`\nWrote ${format} history report to ${path.relative(repositoryRoot, output)}.`);
  }
}

function sourceStatus() {
  const result = run('git', ['ls-remote', lock.gitUrl, `refs/heads/${lock.branch}`], { capture: true });
  const latest = result.split(/\s+/)[0];
  if (!/^[0-9a-f]{40}$/.test(latest || '')) throw new Error('could not read the latest upstream commit');
  console.log(`Pinned: ${lock.commit}`);
  console.log(`Latest: ${latest}`);
  if (latest === lock.commit) {
    console.log('Status: pinned source is current.');
  } else {
    console.log('Status: OpenStax has newer commits. No local content was changed.');
    console.log('Review with a separate checkout: npm run source:fetch -- --latest --source-dir sources/openstax/math-latest');
  }
}

try {
  const { command, options } = parseArguments(process.argv.slice(2));
  if (options.help || command === 'help') usage();
  else if (command === 'fetch') fetchSource(options.sourceDirectory, options.latest);
  else if (command === 'build-map') buildMap(options.sourceDirectory);
  else if (command === 'verify-map') verifyMap();
  else if (command === 'audit') auditSource(options.sourceDirectory, options.output, options.format);
  else if (command === 'history') runHistory(options.sourceDirectory, options.output, options.format);
  else if (command === 'status') sourceStatus();
  else {
    usage();
    process.exitCode = 2;
  }
} catch (error) {
  console.error(`\nOpenStax source error: ${error.message}`);
  process.exitCode = 1;
}
