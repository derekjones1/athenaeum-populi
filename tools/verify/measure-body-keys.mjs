/**
 * MEASUREMENT (non-gating): how often a page `textin` keyed to a source Fill
 * in the Blank exercise names a word the module's BODY prose never prints —
 * only the exercise's own `<solution>` does. A learner reading only the page
 * body (never the source CNXML) has no way to recover such a key.
 *
 * Example that motivated this script: Microbiology m58945 (§25.1) keys "the
 * subclavian veins" in its Fill in the Blank `<solution>`, but the module
 * body says only "veins just above the heart" — "subclavian" is not printed
 * anywhere outside that `<solution>`. (That particular page has since been
 * corrected — the item is now a `multiplechoice` — so it will not appear in
 * this run's hit list; it is kept here only as the defect shape to look for.)
 *
 * This is deliberately NOT wired into `npm test` or `verify-source-keys.mjs`'s
 * failure list: it is a first measurement of how common the pattern is
 * corpus-wide, so a maintainer can judge real defects from false positives
 * before promoting any of it to a gate.
 *
 * Matching reuses `verify-source-keys.mjs`: `readModule` for the source
 * (module CNXML, including the `isFillInTheBlank` exercise flag and
 * `bodyProse`/`bodyText` — the module's prose with every exercise's
 * `<problem>` and `<solution>` removed), `pageItems` for the page's `textin`
 * shortcodes (question, answer, and now `accept`), and `bestExercise` (the
 * same token-similarity stem match every other judgment in that file uses,
 * MATCH_FLOOR = 0.5) restricted to the module's Fill in the Blank exercises.
 *
 * The presence test is `keyPrintedInBody` (verify-source-keys.mjs): the
 * compact key or an `accept` alternate as a substring of the compact body
 * (after the runtime grader's plural fold), OR every word of a multi-word
 * key present somewhere in the body, OR a body word sharing the key's first
 * (length-2, minimum 6) characters — see that function's own comment for the
 * three cases each rule exists for (LD50/LD 50 markup splitting,
 * "chlorophylls and carotenoids" printed as two separate unordered mentions,
 * and bacilli/bacillus-style same-root inflection).
 *
 * Usage: node tools/verify/measure-body-keys.mjs [--out FILE]
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { bestExercise, keyPrintedInBody, pageItems, readModule } from './verify-source-keys.mjs';
import { bundleSourceDirectory, loadSourceLock, normalizeText, tokenSimilarity } from '../lib/openstax-source.mjs';
import { parseCliArgs } from '../lib/cli.mjs';

const repositoryRoot = process.cwd();
const lock = loadSourceLock(repositoryRoot);
const map = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-map.json'), 'utf8'));

// Life-sciences only (biology + microbiology); every math book's content
// lives under content/math/ and never matches this prefix.
const LIFE_SCIENCES_PREFIX = 'content/life-health-sciences/';
const sections = map.sections.filter((section) => section.localPath.startsWith(LIFE_SCIENCES_PREFIX));

/** Body prose split into sentences, for reporting the one closest to a key
 * that the body never actually states. A crude splitter (CNXML prose has no
 * abbreviations that defeat it in practice) — good enough for a human to
 * skim, not a grading input. */
function sentencesOf(prose) {
  return prose.split(/(?<=[.!?])\s+(?=[A-Z(])/).map((s) => s.trim()).filter(Boolean);
}

/** The body sentence whose vocabulary overlaps the key most, or null when no
 * sentence shares any significant word with it at all. */
function closestSentence(key, sentences) {
  let best = null;
  for (const sentence of sentences) {
    const score = tokenSimilarity(key, sentence);
    if (score > 0 && (!best || score > best.score)) best = { score, sentence };
  }
  return best ? best.sentence : null;
}

let checkedTextins = 0;
let matchedToFillInTheBlank = 0;
const hits = [];
const skippedBundles = new Set();

for (const section of sections) {
  const bundleDir = bundleSourceDirectory(repositoryRoot, lock, section.bundle);
  if (!existsSync(bundleDir)) { skippedBundles.add(section.bundle); continue; }
  const pagePath = path.join(repositoryRoot, section.localPath);
  const modulePath = path.join(bundleDir, 'modules', section.moduleId, 'index.cnxml');
  if (!existsSync(pagePath) || !existsSync(modulePath)) continue;

  const source = readModule(readFileSync(modulePath, 'utf8'));
  const fillInTheBlankExercises = source.exercises.filter((exercise) => exercise.isFillInTheBlank);
  if (!fillInTheBlankExercises.length) continue;

  const markdown = readFileSync(pagePath, 'utf8');
  for (const item of pageItems(markdown)) {
    if (item.type !== 'textin') continue;
    checkedTextins += 1;
    const exercise = bestExercise(item.question, fillInTheBlankExercises);
    if (!exercise) continue;
    matchedToFillInTheBlank += 1;

    if (keyPrintedInBody(item.answer, item.accept, source)) continue;

    hits.push({
      page: section.localPath,
      line: item.line,
      key: item.answer,
      accept: item.accept || '',
      moduleId: section.moduleId,
      exercise: exercise.id,
      solution: exercise.solution,
      closest: closestSentence(normalizeText(item.answer), sentencesOf(source.bodyProse)),
    });
  }
}

const cli = parseCliArgs(process.argv.slice(2), { valueFlags: ['out'] });
const outPath = cli.flag('out')
  || '/private/tmp/claude-501/-Users-derek-GolandProjects-athenaeum-populi/4dc633e5-1138-4411-bc3f-41410914c8a1/scratchpad/body-keys-measure.txt';

const lines = [];
lines.push('MEASUREMENT (non-gating): textin keyed to a source Fill in the Blank exercise');
lines.push('whose key (and every accept alternate) is absent from the module BODY prose');
lines.push('(excluding <problem>/<solution>), compared whitespace-stripped (compact()).');
lines.push('');
lines.push(`textins checked: ${checkedTextins}`);
lines.push(`matched to a source Fill in the Blank exercise: ${matchedToFillInTheBlank}`);
lines.push(`hits (key and accept alternates absent from body): ${hits.length}`);
if (skippedBundles.size) {
  lines.push(`bundles skipped (no checkout): ${[...skippedBundles].sort().join(', ')}`);
}
lines.push('');
for (const hit of hits) {
  lines.push(`${hit.page}:${hit.line}  key=${JSON.stringify(hit.key)}${hit.accept ? `  accept=${JSON.stringify(hit.accept)}` : ''}  module=${hit.moduleId}  exercise=${hit.exercise}`);
  lines.push(`    source solution: ${JSON.stringify(hit.solution)}`);
  lines.push(`    closest body sentence: ${hit.closest ? JSON.stringify(hit.closest) : '(none found)'}`);
}

mkdirSync(path.dirname(outPath), { recursive: true });
writeFileSync(outPath, lines.join('\n') + '\n', 'utf8');

console.log(`textins checked: ${checkedTextins}`);
console.log(`matched to a source Fill in the Blank exercise: ${matchedToFillInTheBlank}`);
console.log(`hits (key and accept alternates absent from body): ${hits.length}`);
console.log(`written to ${outPath}`);
