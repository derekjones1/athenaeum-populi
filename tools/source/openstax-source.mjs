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
  collectionModuleIds,
  formatBookSummaryLine,
  formatTriesCoverage,
  loadSourceLock,
  parseLocalSection,
  parseModuleXml,
  resolveSourceDirectories,
  sha256,
  verifyCommittedSourceMap,
} from '../lib/openstax-source.mjs';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const lock = loadSourceLock(repositoryRoot);

function bundleSummaryLines() {
  return lock.bundleKeys.map((bundleKey) => {
    const bundle = lock.bundles[bundleKey];
    const books = Object.keys(bundle.books).join(', ');
    return `  ${bundleKey}: ${bundle.sourceDir} @ ${bundle.commit.slice(0, 12)} (${books})`;
  }).join('\n');
}

function usage() {
  console.log(`OpenStax source reconciliation (report-only for existing content)

Usage:
  node tools/source/openstax-source.mjs fetch [--bundle KEY] [--source-dir PATH] [--latest]
  node tools/source/openstax-source.mjs build-map [--source-dir PATH]
  node tools/source/openstax-source.mjs verify-map
  node tools/source/openstax-source.mjs audit [--bundle KEY] [--source-dir PATH] [--output PATH] [--format markdown|json]
  node tools/source/openstax-source.mjs history [--bundle KEY] [--source-dir PATH] [--output PATH] [--format markdown|json]
  node tools/source/openstax-source.mjs status [--bundle KEY]

Bundles (one pinned upstream repository each):
${bundleSummaryLines()}

--bundle may be repeated and defaults to every bundle. --source-dir overrides a
checkout location and therefore needs exactly one --bundle.

The audit never rewrites content pages. The build-map command only refreshes
data/openstax/source-map.json and is intended for reviewed source-lock
updates and for authoring that adds mapped sections; it always rebuilds every
bundle so the committed map stays complete. With every book complete, a run
is a no-op unless the map is stale — verify-map (npm run source:verify) is
the routine check.`);
}

function parseArguments(argv) {
  const command = argv[0] || 'help';
  const options = { bundles: [], sourceDirectory: null, output: null, format: null, latest: false };
  for (let index = 1; index < argv.length; index++) {
    const argument = argv[index];
    if (argument === '--bundle') {
      if (!argv[index + 1]) throw new Error('--bundle needs a bundle key');
      const bundleKey = argv[++index];
      if (!lock.bundles[bundleKey]) {
        throw new Error(`unknown bundle ${JSON.stringify(bundleKey)}; known bundles: ${lock.bundleKeys.join(', ')}`);
      }
      if (!options.bundles.includes(bundleKey)) options.bundles.push(bundleKey);
    } else if (argument === '--source-dir') {
      if (!argv[index + 1]) throw new Error('--source-dir needs a path');
      options.sourceDirectory = argv[++index];
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
  if (!options.bundles.length) options.bundles = [...lock.bundleKeys];
  if (options.sourceDirectory && options.bundles.length !== 1) {
    throw new Error('--source-dir applies to a single bundle; pass exactly one --bundle with it');
  }
  options.overrides = options.sourceDirectory ? { [options.bundles[0]]: options.sourceDirectory } : {};
  return { command, options };
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

function sourceDirectoriesFor(options, { bundles = options.bundles, requireCheckout = true } = {}) {
  const directories = resolveSourceDirectories(repositoryRoot, lock, {
    bundles,
    overrides: options.overrides,
  });
  if (requireCheckout) for (const directory of Object.values(directories)) requireSource(directory);
  return directories;
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

/**
 * Sparse paths for one bundle at its currently checked-out commit. A bundle
 * whose moduleScope is `mapped-collections` also ships books this project does
 * not use, so only the modules its mapped collections reference are
 * materialized.
 */
function sparsePathsFor(bundleKey, sourceDirectory) {
  const bundle = lock.bundles[bundleKey];
  if (bundle.moduleScope === 'bundle') return ['META-INF', 'collections', 'modules'];
  const moduleIds = new Set();
  for (const [bookKey, book] of Object.entries(bundle.books)) {
    const collectionPath = path.join(sourceDirectory, book.collectionPath);
    if (!existsSync(collectionPath)) {
      throw new Error(`${bundleKey}/${bookKey}: ${book.collectionPath} is not checked out yet`);
    }
    for (const moduleId of collectionModuleIds(readFileSync(collectionPath, 'utf8'))) moduleIds.add(moduleId);
  }
  return ['META-INF', 'collections', ...[...moduleIds].sort().map((moduleId) => `modules/${moduleId}`)];
}

function fetchBundle(bundleKey, sourceDirectory, latest) {
  const bundle = lock.bundles[bundleKey];
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
      bundle.gitUrl,
      sourceDirectory,
    ]);
    git(sourceDirectory, ['sparse-checkout', 'init', '--cone']);
    git(sourceDirectory, ['sparse-checkout', 'set', 'META-INF', 'collections']);
  }

  const origin = git(sourceDirectory, ['remote', 'get-url', 'origin'], { capture: true });
  if (normalizedGitUrl(origin) !== normalizedGitUrl(bundle.gitUrl)) {
    throw new Error(`${sourceDirectory} origin ${JSON.stringify(origin)} is not the ${bundleKey} OpenStax repository`);
  }
  // A brand-new --no-checkout clone appears dirty because its tracked files
  // are intentionally absent. Existing caches, however, must never be changed
  // while they contain local work.
  if (sourceExists) {
    const dirty = git(sourceDirectory, ['status', '--porcelain'], { capture: true });
    if (dirty) throw new Error(`${sourceDirectory} has local changes; refusing to change its checkout`);
  }

  const requested = latest ? bundle.branch : bundle.commit;
  git(sourceDirectory, ['fetch', '--depth', '1', 'origin', requested]);
  const commit = git(sourceDirectory, ['rev-parse', 'FETCH_HEAD'], { capture: true });
  const baselines = [...new Set(Object.values(bundle.books).map((book) => book.authoredBaselineCommit))]
    .filter((baseline) => baseline && baseline !== commit);
  const sparse = new Set();

  // Baselines first so HEAD ends on the requested commit. Materializing the
  // sparse CNXML/collection blobs while the fetch command is online keeps the
  // later history audit genuinely offline: a blobless partial clone would
  // otherwise defer them until `git show` needs the network.
  for (const target of [...baselines, commit]) {
    if (target !== commit) git(sourceDirectory, ['fetch', '--depth', '1', 'origin', target]);
    git(sourceDirectory, ['sparse-checkout', 'set', 'META-INF', 'collections']);
    git(sourceDirectory, ['checkout', '--detach', target]);
    for (const sparsePath of sparsePathsFor(bundleKey, sourceDirectory)) sparse.add(sparsePath);
    git(sourceDirectory, ['sparse-checkout', 'set', ...sparse]);
  }

  console.log(`\n${bundleKey} source ready at ${path.relative(repositoryRoot, sourceDirectory)}`);
  console.log(`commit ${commit}${latest ? ` (latest ${bundle.branch})` : ' (pinned)'}`);
  if (bundle.moduleScope === 'mapped-collections') {
    const modules = [...sparse].filter((entry) => entry.startsWith('modules/')).length;
    console.log(`scoped to ${modules} modules for ${Object.keys(bundle.books).join(', ')}`);
  }
}

function fetchSource(options) {
  const directories = sourceDirectoriesFor(options, { requireCheckout: false });
  for (const [bundleKey, sourceDirectory] of Object.entries(directories)) {
    fetchBundle(bundleKey, sourceDirectory, options.latest);
  }
}

function buildMap(options) {
  const directories = sourceDirectoriesFor(options, { bundles: lock.bundleKeys });
  const result = buildSourceMap(repositoryRoot, directories, lock);
  if (result.errors.length) {
    for (const error of result.errors) console.error(`✗ ${error}`);
    throw new Error(`source mapping failed with ${result.errors.length} structural problem(s)`);
  }
  const target = path.join(repositoryRoot, 'data/openstax/source-map.json');
  writeFileSync(target, `${JSON.stringify(result.map, null, 2)}\n`);
  console.log(`Mapped ${result.map.sections.length} sections at ${path.relative(repositoryRoot, target)}.`);
  for (const [book, summary] of Object.entries(result.map.books)) {
    console.log(`  ${formatBookSummaryLine(book, summary)}`);
  }
}

function verifyMap() {
  const result = verifyCommittedSourceMap(repositoryRoot, lock);
  if (result.errors.length) {
    for (const error of result.errors) console.error(`✗ ${error}`);
    throw new Error(`source map verification failed with ${result.errors.length} problem(s)`);
  }
  console.log(`OpenStax source map: ${result.actualCount} local sections mapped to pinned CNXML modules.`);
  for (const [book, summary] of Object.entries(result.map.books || {})) {
    console.log(`  ${formatBookSummaryLine(book, summary)}`);
  }
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

function formatMarkdown(audit, sourceCommits, output) {
  const { summary, sections, books } = audit;
  const lines = [
    '# Existing Content ↔ OpenStax Source Audit',
    '',
    '> This is a report-only triage artifact. “Metadata matched” means that the',
    '> local section maps to the expected module and its title, objectives, and',
    '> instructional headings were found. It does not certify every equation,',
    '> answer, or figure; those remain explicit review lanes.',
    '>',
    '> Generated by `npm run source:check`; do not hand-edit this report.',
    '',
    '## Pinned sources',
    '',
  ];
  for (const bundleKey of Object.keys(sourceCommits)) {
    const bundle = lock.bundles[bundleKey];
    lines.push(
      `- \`${bundleKey}\` — [${bundle.repository}](${bundle.repository}), `
      + `pinned \`${bundle.commit}\`, audited checkout \`${sourceCommits[bundleKey] || 'not a Git checkout'}\``,
    );
  }
  lines.push(
    '',
    '## Coverage',
    '',
    `- Books with mapped sections: ${summary.mappedBooks}`,
    `- Numbered sections mapped: ${summary.sections}`,
    `- Metadata matched without a flag: ${summary.metadataMatched}`,
    `- Intentional adaptations adjudicated: ${summary.adaptationsAdjudicated}`,
    `- Unresolved sections needing review: ${summary.needsReview}`,
    `- Modules differing from the committed map: ${summary.changedUpstream}`,
    `- Objectives automatically located: ${summary.objectivesMatched}/${summary.objectivesTotal}`,
    `- Core instructional headings automatically located: ${summary.headingsMatched}/${summary.headingsTotal}`,
    `- Local interactive questions inventoried: ${summary.localInteractions}`,
    `- Upstream Try It prompts with a likely local prompt match: ${formatTriesCoverage(summary.sourceTriesLikelyMatched, summary.sourceTriesTotal)}`,
    '',
    '| Book | Bundle | Authoring status | Chapters | Sections mapped |',
    '|---|---|---|---:|---:|',
  );
  for (const book of books) {
    lines.push(
      `| ${markdownCell(book.book)} | \`${book.bundle}\` | ${book.authoringStatus} | `
      + `${book.localChapters}/${book.upstreamChapters} | ${book.mappedSections}/${book.upstreamSections} |`,
    );
  }
  lines.push(
    '',
    'The prose percentage is five-word source-shingle traceability, not a quality',
    'score. Low values can reflect disclosed condensation, reformatted mathematics,',
    'or intentionally omitted print material.',
    '',
    '## Section matrix',
    '',
    '| Local section | Module | Status | Objectives | Headings | Prose trace | Try Its likely | Local interactions |',
    '|---|---|---|---:|---:|---:|---:|---:|',
  );
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

function printAuditSummary(audit, sourceCommits) {
  const summary = audit.summary;
  for (const [bundleKey, commit] of Object.entries(sourceCommits)) {
    console.log(`OpenStax audit checkout (${bundleKey}): ${commit || 'not a Git checkout'}`);
  }
  console.log(`Mapped sections: ${summary.sections}`);
  console.log(`Metadata matched: ${summary.metadataMatched}`);
  console.log(`Intentional adaptations adjudicated: ${summary.adaptationsAdjudicated}`);
  console.log(`Unresolved review items: ${summary.needsReview}`);
  console.log(`Objectives located: ${summary.objectivesMatched}/${summary.objectivesTotal}`);
  console.log(`Headings located: ${summary.headingsMatched}/${summary.headingsTotal}`);
  console.log(`Likely Try It prompt matches: ${formatTriesCoverage(summary.sourceTriesLikelyMatched, summary.sourceTriesTotal)}`);
  console.log(`Local interactions inventoried: ${summary.localInteractions}`);
  if (summary.changedUpstream) console.log(`Changed upstream modules: ${summary.changedUpstream}`);
  for (const book of audit.books) {
    console.log(`  ${formatBookSummaryLine(book.book, book)}`);
  }

  const flagged = audit.sections.filter((section) => section.reviewFlags.length);
  if (flagged.length) {
    console.log('\nReview queue:');
    for (const section of flagged.slice(0, 30)) {
      console.log(`  ${section.localPath}: ${section.reviewFlags.join(', ')}`);
    }
    if (flagged.length > 30) console.log(`  …and ${flagged.length - 30} more (write a report with --output)`);
  }
}

function auditSource(options) {
  const directories = sourceDirectoriesFor(options);
  const sourceCommits = Object.fromEntries(
    Object.entries(directories).map(([bundleKey, directory]) => [bundleKey, checkoutCommit(directory)]),
  );
  const audit = auditExistingMath(repositoryRoot, directories, lock);
  if (audit.structuralErrors.length) {
    for (const error of audit.structuralErrors) console.error(`✗ ${error}`);
    throw new Error(`audit stopped on ${audit.structuralErrors.length} structural problem(s)`);
  }
  printAuditSummary(audit, sourceCommits);

  if (options.output) {
    const output = options.output;
    const format = options.format || (output.endsWith('.json') ? 'json' : 'markdown');
    const lockCommits = Object.fromEntries(
      Object.keys(directories).map((bundleKey) => [bundleKey, lock.bundles[bundleKey].commit]),
    );
    const rendered = format === 'json'
      ? `${JSON.stringify({ ...audit, sourceCommits, lockCommits }, null, 2)}\n`
      : formatMarkdown(audit, sourceCommits, output);
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

function historyAudit(directories) {
  const auditedBundles = new Set(Object.keys(directories));
  for (const [bundleKey, sourceDirectory] of Object.entries(directories)) {
    if (!existsSync(path.join(sourceDirectory, '.git'))) {
      throw new Error(`history audit requires the Git checkout created by npm run source:fetch (${bundleKey})`);
    }
    const needed = new Set([lock.bundles[bundleKey].commit]);
    for (const book of Object.values(lock.bundles[bundleKey].books)) needed.add(book.authoredBaselineCommit);
    const missing = [...needed].filter((commit) => !hasGitCommit(sourceDirectory, commit));
    if (missing.length) {
      throw new Error(`${bundleKey} checkout lacks locked historical commit(s): ${missing.join(', ')}; rerun npm run source:fetch`);
    }
  }

  const sourceMap = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-map.json'), 'utf8'));
  const decisionData = JSON.parse(readFileSync(
    path.join(repositoryRoot, 'data/openstax/reconciliation-decisions.json'),
    'utf8',
  ));
  for (const bundleKey of auditedBundles) {
    const target = (decisionData.targetCommits || {})[bundleKey];
    if (target && target !== lock.bundles[bundleKey].commit) {
      throw new Error(`reconciliation decisions target ${target} for ${bundleKey} does not match source lock ${lock.bundles[bundleKey].commit}`);
    }
  }
  const driftDecisionByPath = new Map(
    (decisionData.upstreamDriftDecisions || []).map((decision) => [decision.localPath, decision]),
  );
  const sections = [];
  for (const entry of sourceMap.sections) {
    if (!auditedBundles.has(entry.bundle)) continue;
    const sourceDirectory = directories[entry.bundle];
    const targetCommit = lock.bundles[entry.bundle].commit;
    const baselineCommit = lock.books.get(entry.book).authoredBaselineCommit;
    const modulePath = `modules/${entry.moduleId}/index.cnxml`;
    const beforeXml = gitFile(sourceDirectory, baselineCommit, modulePath);
    const afterXml = gitFile(sourceDirectory, targetCommit, modulePath);
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
      targetCommit,
      beforeSha256,
      afterSha256,
      classification,
      changes,
      changedTries: tries,
      decision: driftDecisionByPath.get(entry.localPath) || null,
    });
  }

  const baselines = [];
  for (const bundleKey of Object.keys(directories)) {
    for (const [bookKey, book] of Object.entries(lock.bundles[bundleKey].books)) {
      baselines.push({
        bundle: bundleKey,
        book: bookKey,
        commit: book.authoredBaselineCommit,
        confidence: book.authoredBaselineConfidence || 'unspecified',
        authoringStatus: book.authoringStatus,
        // Counted from the source map, so the report can state each book's
        // real coverage instead of assuming a non-complete book has none.
        mappedSections: sourceMap.sections.filter(
          (entry) => entry.bundle === bundleKey && entry.book === bookKey,
        ).length,
      });
    }
  }

  return {
    bundles: Object.fromEntries(Object.keys(directories).map((bundleKey) => [bundleKey, {
      repository: lock.bundles[bundleKey].repository,
      targetCommit: lock.bundles[bundleKey].commit,
    }])),
    baselineConfidence: 'inferred-from-local-pdf-metadata',
    baselines,
    summary: {
      mappedSections: sourceMap.sections.filter((entry) => auditedBundles.has(entry.bundle)).length,
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
    '## Pinned sources',
    '',
  ];
  for (const [bundleKey, bundle] of Object.entries(history.bundles)) {
    lines.push(`- \`${bundleKey}\` — [${bundle.repository}](${bundle.repository}), review target \`${bundle.targetCommit}\``);
  }
  lines.push(
    '',
    '## Coverage',
    '',
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
  );
  for (const baseline of history.baselines) {
    // State the book's actual mapped coverage. The old text hardcoded
    // "no sections mapped yet" for every non-complete book, so the report
    // called Precalculus unmapped while listing its mapped changes below.
    let suffix = '';
    if (baseline.authoringStatus !== 'complete') {
      const coverage = baseline.mappedSections > 0
        ? `${baseline.mappedSections} section${baseline.mappedSections === 1 ? '' : 's'} mapped`
        : 'no sections mapped yet';
      suffix = ` — ${baseline.authoringStatus}, ${coverage}`;
    }
    lines.push(`- ${baseline.book} (\`${baseline.bundle}\`): \`${baseline.commit}\`${suffix}`);
  }
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

function runHistory(options) {
  const directories = sourceDirectoriesFor(options);
  const history = historyAudit(directories);
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
  if (options.output) {
    const output = options.output;
    const format = options.format || (output.endsWith('.json') ? 'json' : 'markdown');
    const rendered = format === 'json'
      ? `${JSON.stringify(history, null, 2)}\n`
      : formatHistoryMarkdown(history, output);
    mkdirSync(path.dirname(output), { recursive: true });
    writeFileSync(output, rendered);
    console.log(`\nWrote ${format} history report to ${path.relative(repositoryRoot, output)}.`);
  }
}

function sourceStatus(options) {
  let behind = 0;
  for (const bundleKey of options.bundles) {
    const bundle = lock.bundles[bundleKey];
    const result = run('git', ['ls-remote', bundle.gitUrl, `refs/heads/${bundle.branch}`], { capture: true });
    const latest = result.split(/\s+/)[0];
    if (!/^[0-9a-f]{40}$/.test(latest || '')) {
      throw new Error(`could not read the latest upstream commit for ${bundleKey}`);
    }
    console.log(`\n${bundleKey} (${bundle.repository})`);
    console.log(`  Pinned: ${bundle.commit}`);
    console.log(`  Latest: ${latest}`);
    if (latest === bundle.commit) {
      console.log('  Status: pinned source is current.');
    } else {
      behind++;
      console.log('  Status: OpenStax has newer commits. No local content was changed.');
      console.log(
        `  Review with a separate checkout: npm run source:fetch -- --bundle ${bundleKey} --latest `
        + `--source-dir sources/openstax/${bundleKey}-latest`,
      );
    }
  }
  console.log(
    behind
      ? `\n${behind} of ${options.bundles.length} bundle(s) have upstream commits awaiting review.`
      : `\nAll ${options.bundles.length} pinned bundle(s) are current.`,
  );
}

try {
  const { command, options } = parseArguments(process.argv.slice(2));
  if (options.help || command === 'help') usage();
  else if (command === 'fetch') fetchSource(options);
  else if (command === 'build-map') buildMap(options);
  else if (command === 'verify-map') verifyMap();
  else if (command === 'audit') auditSource(options);
  else if (command === 'history') runHistory(options);
  else if (command === 'status') sourceStatus(options);
  else {
    usage();
    process.exitCode = 2;
  }
} catch (error) {
  console.error(`\nOpenStax source error: ${error.message}`);
  process.exitCode = 1;
}
