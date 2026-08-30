/**
 * Corpus-wide cross-check of authored answer keys against the pinned OpenStax
 * source — the third look at every keyed answer in a prose book.
 *
 * A math fill-in gets three independent readings: the author keys it, the
 * checker re-derives it, and `verify-answers` re-derives it AGAIN from the
 * printed question with no agent in the loop. A prose book's exercises have
 * no equation to substitute into, so until this tool the third reading was a
 * person re-reading the checker's report. This closes that gap for every
 * item that is mechanically comparable to the module the page transcribes:
 *
 *   multiplechoice  the keyed option must be the option the CNXML
 *                   `<solution>` names (a bare letter, "C. …" plus the option
 *                   text, or the option text itself), with the option list
 *                   unedited — an edited distractor changes what is gradable
 *   textin          the answer must be a glossary term (or complete one with
 *                   the words the prompt places around the blank: "________
 *                   reasoning" keys `deductive` for "deductive reasoning"),
 *                   a bolded `<term>`, or at least a phrase the module prints
 *   selfcheck       a model answer matched to a source exercise must be made
 *                   of the source solution's own words (token coverage ≥
 *                   MODEL_COVERAGE_FLOOR); a locally written self-check has no
 *                   source and is counted, not judged
 *
 * A page item whose question matches no source exercise is COUNTED as
 * unmatched, never failed and never silently dropped, exactly as
 * verify-answers counts a prompt class it cannot read: on a prose page that is
 * an author-written item (legitimate, disclosed in the ledger and the footer);
 * on a math page it is a multiplechoice converted from a source fill-in, whose
 * value verify-answers and the ledger already cover.
 *
 * A key the page changes ON PURPOSE (the module's own text contradicts the
 * source key; see docs/subjects/biology.md, "A source key that the module's
 * own text contradicts") is listed in DISCLOSED_DEVIATIONS with its erratum
 * number. Every entry must still be exercised — a listed deviation the corpus
 * no longer carries is a stale allowlist and fails the run — and every
 * deviation the corpus carries must be listed, so a re-keyed item can never
 * ship without an errata entry behind it.
 *
 * Usage: node tools/verify/verify-source-keys.mjs [content-root] [--min-confirmed N] [--verbose]
 *
 * `--min-confirmed N` fails the run when the confirmed count is not EXACTLY N
 * (the verify-answers ratchet: below is shrinking coverage, above is an
 * unrecorded gain; `npm run baseline:update` records either deliberately).
 */

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import {
  parseXml, descendants, elementChildren, firstElement, textContent, localName,
  normalizeText, normalizeWhitespace, tokenSimilarity, phraseCoverage,
  loadSourceLock, bundleSourceDirectory,
} from '../lib/openstax-source.mjs';
import { shortcodes } from '../lib/content.mjs';

/** A page question must share this much of a source problem's vocabulary to
 * count as a transcription of it; below this it is an author-written item. */
export const MATCH_FLOOR = 0.5;

/** The share of a self-check model answer's tokens that must come from the
 * source solution. A half of a two-part solution scores 1; the light
 * reformattings the biology playbook allows score ≥ 0.8; a model answer that
 * brings its own claims falls well under. */
export const MODEL_COVERAGE_FLOOR = 0.7;

/**
 * Keys the page deliberately changes from the pinned source, each backed by a
 * confirmed erratum (docs/openstax-errata.md) and named in the page footer.
 * `kind: 'key'` — the page keys a different option; `kind: 'options'` — an
 * option's wording differs from the source list.
 */
export const DISCLOSED_DEVIATIONS = Object.freeze([
  {
    page: 'content/life-health-sciences/biology/08-photosynthesis/02-the-light-dependent-reactions-of-photosynthesis.md',
    exercise: 'fs-idm144749168',
    kind: 'key',
    erratum: 115,
    reason: 'source keys photosystem II; the module credits PSII, the cytochrome complex, and ATP synthase with the proton gradient, so photosystem I is the complex not involved',
  },
  {
    page: 'content/life-health-sciences/biology/08-photosynthesis/03-using-light-energy-to-make-organic-molecules.md',
    exercise: 'fs-idm55613456',
    kind: 'options',
    erratum: 116,
    reason: 'distractor "the use of RuBisCO to form 3-PGA" is also true by the module ("This process is called carbon fixation"); the page reads "to form G3P", which the module assigns to the reduction stage',
  },
  {
    page: 'content/life-health-sciences/biology/09-cell-communication/01-signaling-molecules-and-cellular-receptors.md',
    exercise: 'fs-idp91702432',
    kind: 'options',
    erratum: 122,
    reason: 'source option d reads "downsteam"; the page spells it "downstream" (key unchanged)',
  },
  {
    page: 'content/life-health-sciences/biology/10-cell-reproduction/01-cell-division.md',
    exercise: 'fs-id1414909',
    kind: 'key',
    erratum: 120,
    reason: 'source keys "half"; a diploid cell (2n, 46) has twice the chromosomes of a haploid cell (n, 23)',
  },
  {
    page: 'content/life-health-sciences/biology/10-cell-reproduction/05-prokaryotic-cell-division.md',
    exercise: 'fs-id1466552',
    kind: 'key',
    erratum: 121,
    reason: 'source keys "cell plate", a plant-cell structure the module never mentions; the module says the FtsZ ring directs formation of a septum',
  },
]);

/* ---- source side ---------------------------------------------------------- */

/** Text of a node with its enumerated option lists left out (a problem's
 * stem), or included (a solution that is itself a list). */
function proseOf(node, { withLists }) {
  const parts = [];
  const visit = (candidate) => {
    if (typeof candidate === 'string') { parts.push(candidate); return; }
    if (!withLists && localName(candidate) === 'list') return;
    for (const child of candidate.children || []) visit(child);
  };
  visit(node);
  return normalizeWhitespace(parts.join(' '));
}

/** Option and key text compared with every space removed: the source writes
 * `G<sub>1</sub>` (read as "G 1") where the page writes `G₁`, and `cis-trans`
 * where the page keeps the hyphen. */
export const compact = (value) => normalizeText(value).replace(/\s+/g, '');

/**
 * Which option a source `<solution>` names, as a 0-based index, or null when
 * the solution is prose. Three forms occur in the corpus: a bare letter
 * ("A"), a letter plus the option text ("C. The downstream cellular response
 * would be inhibited."), and the option text alone. A prose solution that
 * happens to start with the word "A" is not a letter: the letter form needs
 * either nothing after it or a restatement of the option it names.
 */
export function keyedOptionIndex(solution, options) {
  const text = normalizeWhitespace(solution);
  const bare = text.match(/^([A-Ea-e])\s*[.:]?$/);
  if (bare) return bare[1].toUpperCase().charCodeAt(0) - 65;
  const byText = options.findIndex((option) => compact(option) === compact(text));
  if (byText !== -1) return byText;
  const lettered = text.match(/^([A-Ea-e])\s*[.:]\s+(.+)$/s);
  if (lettered) {
    const index = lettered[1].toUpperCase().charCodeAt(0) - 65;
    const option = options[index];
    if (option && tokenSimilarity(lettered[2], option) >= MATCH_FLOOR) return index;
  }
  return null;
}

/** A glossary `<term>` and the spellings it licenses: "triacylglycerol (also,
 * triglyceride)" → both; "deoxyribonucleic acid (DNA)" → both. */
export function termAlternates(term) {
  const alternates = [];
  const base = term.replace(/\s*\(([^)]*)\)\s*/g, (_, inner) => {
    alternates.push(inner.replace(/^\s*also,?\s*/i, ''));
    return ' ';
  });
  alternates.unshift(base);
  return alternates.map((value) => normalizeWhitespace(value)).filter(Boolean);
}

export function readModule(xml) {
  const document = parseXml(xml);
  const exercises = descendants(document, (node) => localName(node) === 'exercise').map((exercise) => {
    const problem = firstElement(exercise, 'problem');
    const solution = firstElement(exercise, 'solution');
    const list = problem ? descendants(problem, (node) => localName(node) === 'list')[0] : null;
    const options = list ? elementChildren(list, 'item').map((item) => normalizeWhitespace(textContent(item))) : [];
    const solutionText = solution ? proseOf(solution, { withLists: true }) : '';
    return {
      id: exercise.attributes.id || '',
      problem: problem ? proseOf(problem, { withLists: false }) : '',
      options,
      solution: solutionText,
      keyed: options.length ? keyedOptionIndex(solutionText, options) : null,
    };
  }).filter((exercise) => exercise.problem);
  const glossary = descendants(document, (node) => localName(node) === 'definition')
    .map((definition) => normalizeWhitespace(textContent(firstElement(definition, 'term') || '')))
    .filter(Boolean)
    .flatMap(termAlternates)
    .map(compact);
  const terms = descendants(document, (node) => localName(node) === 'term')
    .map((term) => compact(textContent(term)))
    .filter(Boolean);
  return {
    exercises,
    glossary: new Set(glossary),
    terms: new Set(terms),
    text: ` ${normalizeText(textContent(document))} `,
  };
}

/* ---- page side ------------------------------------------------------------ */

export function pageItems(markdown) {
  const items = [];
  for (const sc of shortcodes(markdown, 'multiplechoice')) {
    items.push({
      type: 'multiplechoice',
      line: lineOf(markdown, sc.index),
      question: sc.params.question || '',
      answer: sc.params.answer || '',
      options: sc.inner.split('\n').map((line) => line.trim()).filter(Boolean),
    });
  }
  for (const sc of shortcodes(markdown, 'textin')) {
    items.push({
      type: 'textin',
      line: lineOf(markdown, sc.index),
      question: sc.params.question || '',
      answer: sc.params.answer || '',
    });
  }
  for (const sc of shortcodes(markdown, 'selfcheck')) {
    items.push({
      type: 'selfcheck',
      line: lineOf(markdown, sc.index),
      question: sc.params.question || '',
      model: normalizeWhitespace(sc.inner),
    });
  }
  return items;
}

const lineOf = (text, index) => text.slice(0, index).split('\n').length;

function bestExercise(question, exercises) {
  let best = null;
  for (const exercise of exercises) {
    const score = tokenSimilarity(question, exercise.problem);
    if (!best || score > best.score) best = { score, exercise };
  }
  return best && best.score >= MATCH_FLOOR ? best.exercise : null;
}

/* ---- judgments ------------------------------------------------------------ */

/**
 * One multiplechoice against its source exercise. Returns
 *   { status: 'confirmed' }
 *   { status: 'unmatched' }                   no source exercise reads like it
 *                                             (an author-written item, or a
 *                                             math page's converted fill-in)
 *   { status: 'prose-key' }                   the source solution names no option
 *   { status: 'key-differs', detail }         page keys another option
 *   { status: 'options-differ', detail }      an option's wording differs
 */
export function judgeMultipleChoice(item, source) {
  const exercise = bestExercise(item.question, source.exercises);
  if (!exercise) return { status: 'unmatched' };
  if (exercise.keyed === null) return { status: 'prose-key', exercise };
  const sourceAnswer = exercise.options[exercise.keyed] || '';
  if (compact(sourceAnswer) !== compact(item.answer)) {
    return {
      status: 'key-differs',
      exercise,
      detail: `source ${exercise.id} keys ${String.fromCharCode(65 + exercise.keyed)} ${JSON.stringify(sourceAnswer)}; page keys ${JSON.stringify(item.answer)}`,
    };
  }
  // Order is free (a page may shuffle distractors); wording is not.
  const sorted = (options) => options.map(compact).sort();
  const pageOptions = sorted(item.options);
  const sourceOptions = sorted(exercise.options);
  const edited = pageOptions.length !== sourceOptions.length
    || pageOptions.some((option, index) => option !== sourceOptions[index]);
  if (edited) {
    return {
      status: 'options-differ',
      exercise,
      detail: `source ${exercise.id} options: ${exercise.options.join(' | ')}\n    page options:   ${item.options.join(' | ')}`,
    };
  }
  return { status: 'confirmed', exercise };
}

/**
 * Where a textin answer comes from: 'glossary' (a term or one of its
 * parenthetical spellings), 'glossary-completed' (the prompt's words around
 * the blank complete the term), 'term' (a bolded `<term>` in the body),
 * 'body' (a phrase the module prints), or 'unsourced'.
 */
export function judgeTextin(item, source) {
  const answer = compact(item.answer);
  if (!answer) return { status: 'unsourced', detail: 'empty answer' };
  if (source.glossary.has(answer)) return { status: 'glossary' };
  const filled = compact(item.question.replace(/_{3,}/, ` ${item.answer} `));
  for (const term of source.glossary) {
    if (term.length > answer.length && term.includes(answer) && filled.includes(term)) {
      return { status: 'glossary-completed' };
    }
  }
  if (source.terms.has(answer)) return { status: 'term' };
  if (source.text.includes(` ${normalizeText(item.answer)} `)) return { status: 'body' };
  return { status: 'unsourced', detail: `${JSON.stringify(item.answer)} is not a glossary term, a bolded term, or a phrase the module prints` };
}

/**
 * A selfcheck model answer against the source solution its question matches:
 * 'verbatim', 'reworded' (coverage ≥ MODEL_COVERAGE_FLOOR), 'diverges', or
 * 'unmatched' when no source exercise reads like the question.
 */
export function judgeSelfcheck(item, source) {
  const exercise = bestExercise(item.question, source.exercises);
  if (!exercise) return { status: 'unmatched' };
  const coverage = phraseCoverage(item.model, exercise.solution);
  if (coverage >= 0.95) return { status: 'verbatim', exercise, coverage };
  if (coverage >= MODEL_COVERAGE_FLOOR) return { status: 'reworded', exercise, coverage };
  return {
    status: 'diverges',
    exercise,
    coverage,
    detail: `only ${Math.round(coverage * 100)}% of the model answer's words come from source solution ${exercise.id}`,
  };
}

/* ---- corpus walk ---------------------------------------------------------- */

export function checkCorpus(repositoryRoot, { contentRoot = 'content', verbose = false } = {}) {
  const lock = loadSourceLock(repositoryRoot);
  const map = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-map.json'), 'utf8'));
  const prefix = contentRoot.replace(/\/+$/, '') + '/';
  const sections = map.sections.filter((section) => (section.localPath + '/').startsWith(prefix) || contentRoot === 'content');

  const counts = {
    multiplechoice: { confirmed: 0, disclosed: 0, unmatched: 0, 'prose-key': 0 },
    textin: { glossary: 0, 'glossary-completed': 0, term: 0, body: 0 },
    selfcheck: { verbatim: 0, reworded: 0, unmatched: 0 },
  };
  const failures = [];
  const notes = [];
  const used = new Set();
  const deviationFor = (page, exercise) => DISCLOSED_DEVIATIONS.find(
    (entry) => entry.page === page && entry.exercise === exercise,
  );

  for (const section of sections) {
    const pagePath = path.join(repositoryRoot, section.localPath);
    const modulePath = path.join(
      bundleSourceDirectory(repositoryRoot, lock, section.bundle),
      'modules', section.moduleId, 'index.cnxml',
    );
    if (!existsSync(pagePath)) {
      failures.push({ page: section.localPath, line: 0, detail: 'mapped page is missing' });
      continue;
    }
    if (!existsSync(modulePath)) {
      failures.push({ page: section.localPath, line: 0, detail: `pinned module ${section.moduleId} is not checked out at ${path.relative(repositoryRoot, modulePath)}` });
      continue;
    }
    const source = readModule(readFileSync(modulePath, 'utf8'));
    for (const item of pageItems(readFileSync(pagePath, 'utf8'))) {
      const where = `${section.localPath}:${item.line}`;
      if (item.type === 'multiplechoice') {
        const verdict = judgeMultipleChoice(item, source);
        if (verdict.status === 'key-differs' || verdict.status === 'options-differ') {
          const deviation = deviationFor(section.localPath, verdict.exercise.id);
          const wanted = verdict.status === 'key-differs' ? 'key' : 'options';
          if (deviation && deviation.kind === wanted) {
            used.add(deviation);
            counts.multiplechoice.disclosed += 1;
            notes.push(`${where} keys against the source on purpose (erratum ${deviation.erratum})`);
          } else {
            failures.push({
              page: section.localPath,
              line: item.line,
              detail: `${verdict.detail}\n    an intended correction needs an errata entry and a DISCLOSED_DEVIATIONS line (kind ${JSON.stringify(wanted)})`,
            });
          }
        } else {
          counts.multiplechoice[verdict.status] += 1;
          if (verdict.status !== 'confirmed') notes.push(`${where} multiplechoice ${verdict.status}: ${item.question.slice(0, 80)}`);
        }
      } else if (item.type === 'textin') {
        const verdict = judgeTextin(item, source);
        if (verdict.status === 'unsourced') failures.push({ page: section.localPath, line: item.line, detail: verdict.detail });
        else counts.textin[verdict.status] += 1;
      } else {
        const verdict = judgeSelfcheck(item, source);
        if (verdict.status === 'diverges') failures.push({ page: section.localPath, line: item.line, detail: verdict.detail });
        else {
          counts.selfcheck[verdict.status] += 1;
          if (verdict.status !== 'verbatim') notes.push(`${where} selfcheck ${verdict.status}${verdict.coverage != null ? ` (coverage ${verdict.coverage.toFixed(2)})` : ''}: ${item.question.slice(0, 80)}`);
        }
      }
    }
  }

  for (const deviation of DISCLOSED_DEVIATIONS) {
    if (!used.has(deviation) && sections.some((section) => section.localPath === deviation.page)) {
      failures.push({
        page: deviation.page,
        line: 0,
        detail: `DISCLOSED_DEVIATIONS lists ${deviation.exercise} (erratum ${deviation.erratum}) but the page now agrees with the source there — drop the stale entry`,
      });
    }
  }

  const confirmed = counts.multiplechoice.confirmed
    + Object.values(counts.textin).reduce((a, b) => a + b, 0)
    + counts.selfcheck.verbatim + counts.selfcheck.reworded;
  return { counts, confirmed, failures, notes: verbose ? notes : [], sections: sections.length };
}

/* ---- CLI ------------------------------------------------------------------ */

if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) {
  const args = process.argv.slice(2);
  const contentRoot = args.find((a) => !a.startsWith('--')) || 'content';
  const verbose = args.includes('--verbose');
  const minArg = args.find((a) => a.startsWith('--min-confirmed'));
  const minConfirmed = minArg
    ? Number(minArg.includes('=') ? minArg.split('=')[1] : args[args.indexOf(minArg) + 1])
    : null;
  if (minArg && (!Number.isInteger(minConfirmed) || minConfirmed < 0)) {
    console.error('usage: node tools/verify/verify-source-keys.mjs [content-root] [--min-confirmed N] [--verbose]');
    process.exit(2);
  }

  const { counts, confirmed, failures, notes, sections } = checkCorpus(process.cwd(), { contentRoot, verbose });

  for (const { page, line, detail } of failures) console.error(`✗ ${page}${line ? `:${line}` : ''}\n    ${detail}`);
  for (const note of notes) console.log(`    · ${note}`);

  const mc = counts.multiplechoice;
  const textin = Object.values(counts.textin).reduce((a, b) => a + b, 0);
  const selfcheck = counts.selfcheck.verbatim + counts.selfcheck.reworded;
  console.log(`${failures.length ? '✖' : '✓'} source-key cross-check: ${confirmed} keyed answers confirmed against the pinned CNXML `
    + `across ${sections} mapped sections (multiplechoice ${mc.confirmed}, textin ${textin}, selfcheck ${selfcheck}); `
    + `${mc.disclosed} disclosed correction(s); ${mc.unmatched + counts.selfcheck.unmatched} unmatched to any source exercise; `
    + `${mc['prose-key']} prose-keyed; ${failures.length} failure(s)`);

  if (minConfirmed !== null && confirmed < minConfirmed) {
    console.error(`✖ source-key cross-check confirmed ${confirmed} answers, below the --min-confirmed floor of ${minConfirmed}`);
    console.error('  · coverage shrank: a page or module this tool used to read is no longer matched');
    console.error('  · a deliberate drop? `npm run baseline:update -- --allow-decrease` moves the floor');
    process.exit(1);
  }
  if (minConfirmed !== null && confirmed > minConfirmed) {
    console.error(`✖ source-key cross-check confirmed ${confirmed} answers, above the recorded baseline of ${minConfirmed}`);
    console.error('  · coverage grew: record it with `npm run baseline:update` and commit the rewrite');
    process.exit(1);
  }
  process.exit(failures.length ? 1 : 0);
}
