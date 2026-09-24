import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import {
  LISTED_EXERCISES, askSentences, checkCoverage, coverage, interactiveTally, plain, runCoverage,
  sourceExercises, stemParts, summaryLine, tight,
} from './verify-source-coverage.mjs';
import { bundleSourceDirectory, loadSourceLock } from '../lib/openstax-source.mjs';

const TOOL = new URL('./verify-source-coverage.mjs', import.meta.url).pathname;
const repositoryRoot = new URL('../../', import.meta.url).pathname;
const lock = loadSourceLock(repositoryRoot);
const lifeSciencesBundles = ['anatomy-physiology', 'biology-bundle', 'microbiology'];
const absentBundles = lifeSciencesBundles.filter(
  (bundle) => lock.bundleKeys.includes(bundle) && !existsSync(bundleSourceDirectory(repositoryRoot, lock, bundle)),
);

/* ---- fixtures ------------------------------------------------------------- */

const cnxml = (body) => `<?xml version="1.0"?><document xmlns="http://cnx.rice.edu/cnxml"><content>${body}</content></document>`;
const exercise = (id, stem, options = []) => `<exercise id="${id}"><problem><para>${stem}</para>${
  options.length ? `<list list-type="enumerated">${options.map((option) => `<item>${option}</item>`).join('')}</list>` : ''
}</problem><solution><para>A</para></solution></exercise>`;
const section = (cls, ...exercises) => `<section class="${cls}"><title>x</title>${exercises.join('')}</section>`;

const mc = (question, options) => `{{< multiplechoice\n  question="${question}"\n  answer="${options[0]}"\n  hint="h"\n>}}\n${options.join('\n')}\n{{< /multiplechoice >}}\n`;
const selfcheck = (question) => `{{< selfcheck question="${question}" hint="h" >}}\nmodel\n{{< /selfcheck >}}\n`;
const footer = (text) => `\n---\n\n<small>This section is adapted from [X](https://openstax.org). Changes: ${text}</small>\n`;
const statusOf = (verdicts, id) => verdicts.find((verdict) => verdict.id === id).status;

/* ---- folding -------------------------------------------------------------- */

test('plain folds a Unicode sub/superscript run the way the source spaces <sub>/<sup>', () => {
  assert.equal(plain('C₆H₁₂O₆ is a hexose'), plain('C 6 H 12 O 6 is a hexose'));
  assert.equal(plain('10⁻⁷ M'), plain('10 −7 M'));
  assert.equal(plain('P<sub>O₂</sub> rises'), plain('P O 2 rises'));
  assert.equal(plain('see [the table](http://x.y/z) above'), plain('see the table above'));
});

test('tight compares options with spaces removed (G<sub>1</sub> vs G1)', () => {
  assert.equal(tight('G 1 checkpoint'), tight('G1 checkpoint'));
  assert.notEqual(tight('photosystem I'), tight('photosystem II'));
});

test('runCoverage credits verbatim runs of at least four words', () => {
  const stem = plain('Which of the following has the lowest energy?');
  assert.equal(runCoverage(stem, plain('Which of the following has the lowest energy?')), 1);
  // Six of eight words: enough to pass on its own, which is why the gate
  // assigns items one-to-one instead of trusting any score alone.
  assert.equal(runCoverage(stem, plain('Which of the following has the highest energy?')), 0.75);
  assert.equal(runCoverage(plain('Viruses'), plain('Viruses vary in shape')), 1);
  assert.equal(runCoverage(plain('a b c d e f'), plain('x y z')), 0);
});

test('askSentences keeps the question and drops the context sentence', () => {
  assert.deepEqual(
    askSentences('The figure depicts three sugars. What are such compounds called?'),
    ['What are such compounds called?'],
  );
  assert.deepEqual(askSentences('Cutibacterium belongs to ________ G+C bacteria. One species causes acne.'), [
    'Cutibacterium belongs to ________ G+C bacteria.',
  ]);
});

test('stemParts splits a lettered multi-part stem and drops the lead-in', () => {
  assert.deepEqual(stemParts('The image shows a tetrapeptide. (a) How many peptide bonds? (b) Identify the side groups.'), [
    { label: 'a', text: 'How many peptide bonds?' },
    { label: 'b', text: 'Identify the side groups.' },
  ]);
  assert.equal(stemParts('What is (a) the answer?'), null);
});

/* ---- source side ---------------------------------------------------------- */

test('sourceExercises reads end-of-section exercises, Matching pools, and CYU questions', () => {
  const source = sourceExercises(cnxml(`
    <note class="check-your-understanding"><list><item>What is a virion?</item></list></note>
    ${section('multiple-choice', exercise('mc1', 'Which gas is CO<sub>2</sub>?', ['carbon dioxide', 'oxygen']))}
    ${section('matching', `<exercise id="m1"><problem><para>Match each.</para><table><tgroup cols="2"><tbody>
      <row><entry>___chitin</entry><entry>A. plant storage</entry></row>
      <row><entry>___starch</entry><entry>B. fungal walls</entry></row>
    </tbody></tgroup></table></problem><solution><para>B, A</para></solution></exercise>`)}
    ${section('interactive-exercise', exercise('il1', 'Watch this video. What happens next?'))}
  `));
  assert.deepEqual(source.exercises.map((entry) => [entry.id, entry.cls]), [
    ['mc1', 'multiple-choice'], ['m1', 'matching'], ['il1', 'interactive-exercise'],
  ]);
  assert.equal(source.exercises[0].stem, 'Which gas is CO 2 ?');
  assert.deepEqual(source.exercises[0].options, ['carbon dioxide', 'oxygen']);
  assert.deepEqual(source.exercises[1].pools, [['chitin', 'starch'], ['plant storage', 'fungal walls']]);
  assert.deepEqual(source.checkQuestions, ['What is a virion?']);
});

test('a Matching column crammed into one CNXML cell is split on its own markers', () => {
  const source = sourceExercises(cnxml(section('matching', `<exercise id="m2"><problem><table><tgroup cols="2"><tbody>
    <row><entry>___tRNA ___rRNA ___mRNA</entry><entry>A. is a major component of ribosome B. is a copy of a gene C. carries an amino acid</entry></row>
  </tbody></tgroup></table></problem></exercise>`)));
  assert.deepEqual(source.exercises[0].pools, [
    ['tRNA', 'rRNA', 'mRNA'],
    ['is a major component of ribosome', 'is a copy of a gene', 'carries an amino acid'],
  ]);
});

/* ---- judging one page ----------------------------------------------------- */

const ENERGY = sourceExercises(cnxml(section(
  'multiple-choice',
  exercise('high', 'Which of the following has the highest energy?', ['X-rays', 'infrared']),
  exercise('low', 'Which of the following has the lowest energy?', ['X-rays', 'infrared']),
)));

test('a verbatim item renders its exercise; a deleted one is missing', () => {
  const page = mc('Which of the following has the highest energy?', ['X-rays', 'infrared'])
    + mc('Which of the following has the lowest energy?', ['X-rays', 'infrared']);
  assert.deepEqual(coverage(page, ENERGY).map((verdict) => verdict.status), ['rendered', 'rendered']);
});

test('items are assigned one-to-one: one item never stands for two exercises', () => {
  const page = mc('Which of the following has the highest energy?', ['X-rays', 'infrared']);
  const verdicts = coverage(page, ENERGY);
  assert.equal(statusOf(verdicts, 'high'), 'rendered');
  assert.equal(statusOf(verdicts, 'low'), 'missing');
});

test('a reworded stem over the source option list renders it; a shared list under another question does not', () => {
  const source = sourceExercises(cnxml(section('multiple-choice', exercise(
    'phylum', 'Members of which phylum establish a successful symbiotic relationship with the roots of trees?',
    ['Ascomycota', 'Deuteromycota', 'Basidiomycota', 'Glomeromycota'],
  ))));
  const options = ['Ascomycota', 'Deuteromycota', 'Basidiomycota', 'Glomeromycota'];
  assert.equal(statusOf(coverage(mc('Members of which phylum are all involved in close associations with the roots of trees?', options), source), 'phylum'), 'rendered');
  assert.equal(statusOf(coverage(mc('Which of these fungi reproduce with basidiospores in a club?', options), source), 'phylum'), 'missing');
});

test('a multiplechoice over a different option list is a different question', () => {
  const source = sourceExercises(cnxml(section('multiple-choice', exercise('v', 'Viruses_______.', ['vary in shape', 'are cells', 'have nuclei']))));
  assert.equal(statusOf(coverage(mc('Viruses infect which of the following?', ['bacteria', 'rocks', 'water']), source), 'v'), 'missing');
});

test('an ask sentence transcribed whole renders a stem whose context sentence the page dropped', () => {
  const source = sourceExercises(cnxml(section('fill-in-the-blank', exercise(
    'fib', 'Cutibacterium belongs to ________ G+C gram-positive bacteria. One of its species is used in the food industry and another causes acne.',
  ))));
  const page = '{{< textin question="Cutibacterium belongs to ________ G+C gram-positive bacteria." answer="high" hint="h" >}}\n';
  assert.equal(statusOf(coverage(page, source), 'fib'), 'rendered');
});

test('each lettered part must be rendered: (a) on the page does not cover a dropped (b)', () => {
  const source = sourceExercises(cnxml(section('critical-thinking', exercise(
    'ct', 'The figure depicts three sugars. (a) Identify each sugar as an aldose or a ketose. (b) The chemical formula of these compounds is the same, although the structural formula is different. What are such compounds called?',
  ))));
  const partial = coverage(selfcheck('Identify each sugar as an aldose or a ketose.'), source);
  assert.equal(statusOf(partial, 'ct(a)'), 'rendered');
  assert.equal(statusOf(partial, 'ct(b)'), 'missing');
  // The parts of one exercise may share one item (kept whole as a selfcheck).
  const whole = coverage(selfcheck('(a) Identify each sugar as an aldose or a ketose. (b) The chemical formula of these compounds is the same, although the structural formula is different. What are such compounds called?'), source);
  assert.deepEqual(whole.map((verdict) => verdict.status), ['rendered', 'rendered']);
});

test('a Matching set is read one entry per multiplechoice, whichever column the page asks', () => {
  const source = sourceExercises(cnxml(section('matching', `<exercise id="m"><problem><table><tgroup cols="2"><tbody>
    <row><entry>___chitin</entry><entry>A. energy storage polymer in plants</entry></row>
    <row><entry>___starch</entry><entry>B. structural polymer in fungal cell walls</entry></row>
  </tbody></tgroup></table></problem></exercise>`)));
  const terms = ['chitin', 'starch'];
  const byDescription = mc('Which polysaccharide is an energy storage polymer in plants?', terms)
    + mc('Which polysaccharide is a structural polymer in fungal cell walls?', terms);
  assert.deepEqual(coverage(byDescription, source).map((verdict) => verdict.status), ['rendered', 'rendered']);
  const oneRow = mc('Which polysaccharide is an energy storage polymer in plants?', terms);
  assert.deepEqual(coverage(oneRow, source).map((verdict) => verdict.status).sort(), ['missing', 'rendered']);
  const descriptions = ['energy storage polymer in plants', 'structural polymer in fungal cell walls'];
  const byTerm = mc('Which description matches chitin?', descriptions) + mc('Which description matches starch?', descriptions);
  assert.deepEqual(coverage(byTerm, source).map((verdict) => verdict.status), ['rendered', 'rendered']);
});

test('the footer is a disclosure, never a rendering', () => {
  const source = sourceExercises(cnxml(section('short-answer', exercise('sa', 'Why are Mycoplasma and Chlamydia classified as obligate intracellular pathogens?'))));
  const page = selfcheck('What is a bacterium?')
    + footer('the Short Answer "Why are Mycoplasma and Chlamydia classified as obligate intracellular pathogens?" is omitted because the module gives nothing to answer it with');
  assert.equal(statusOf(coverage(page, source), 'sa'), 'missing');
});

test('an Interactive Link Question may stand as a prompt in its callout, or be graded', () => {
  const source = sourceExercises(cnxml(section('interactive-exercise', exercise('il', 'Watch this video to learn more about PET. How is PET used in chemotherapy?'))));
  const prompt = '{{< callout type="info" >}}\nWatch [this video](http://x) to learn more. How is PET used in chemotherapy?\n{{< /callout >}}\n';
  assert.equal(statusOf(coverage(prompt, source), 'il'), 'prompt-il');
  assert.equal(statusOf(coverage(selfcheck('How is PET used in chemotherapy?'), source), 'il'), 'graded-il');
  assert.equal(statusOf(coverage('Nothing here.\n', source), 'il'), 'missing');
  // A callout is a counterpart for this class only.
  const other = sourceExercises(cnxml(section('short-answer', exercise('sa', 'How is PET used in chemotherapy?'))));
  assert.equal(statusOf(coverage(prompt, other), 'sa'), 'missing');
});

test('an exercise the matcher pairs with a body Check Your Understanding item is a fold', () => {
  const source = sourceExercises(cnxml(`
    <note class="check-your-understanding"><list><item>What evidence supports the endosymbiotic theory?</item></list></note>
    ${section('short-answer', exercise('sa', 'What evidence exists that supports the endosymbiotic theory?'))}`));
  const verdicts = coverage(selfcheck('What evidence supports the endosymbiotic theory?'), source);
  assert.equal(statusOf(verdicts, 'sa'), 'folded');
});

test('a LISTED_EXERCISES entry covers only what it names', () => {
  const source = sourceExercises(cnxml(section('critical-thinking', exercise(
    'ct', 'Structures are shown. (a) Circle the functional groups of each sugar. (b) What are such compounds called?',
  ))));
  const listed = [{ exercise: 'ct', kind: 'conversion', parts: ['(a)'], questions: [] }];
  const verdicts = coverage('No items.\n', source, { listed });
  assert.equal(statusOf(verdicts, 'ct(a)'), 'listed');
  assert.equal(statusOf(verdicts, 'ct(b)'), 'missing');
});

test('every LISTED_EXERCISES entry names a kind, a reason, and the page questions that carry it', () => {
  const kinds = new Set(['fold', 'conversion', 'omitted']);
  for (const entry of LISTED_EXERCISES) {
    assert.ok(kinds.has(entry.kind), `${entry.exercise}: kind ${entry.kind}`);
    assert.ok(entry.reason && entry.reason.length > 20, `${entry.exercise}: reason`);
    assert.ok(entry.page.startsWith('content/life-health-sciences/'), `${entry.exercise}: page`);
    if (entry.kind !== 'omitted') assert.ok(entry.questions.length > 0, `${entry.exercise}: questions`);
  }
  const keys = LISTED_EXERCISES.map((entry) => `${entry.page}#${entry.exercise}`);
  assert.equal(new Set(keys).size, keys.length, 'one entry per exercise');
});

/* ---- corpus --------------------------------------------------------------- */

test('the corpus walk reads every life-sciences page and no LISTED entry is stale', {
  skip: absentBundles.length > 0 && `pinned checkout(s) absent: ${absentBundles.join(', ')} — run npm run source:fetch`,
}, () => {
  const result = checkCoverage(repositoryRoot);
  const mapped = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-map.json'), 'utf8'))
    .sections.filter((section) => section.localPath.startsWith('content/life-health-sciences/'));
  assert.equal(new Set(result.results.map((row) => row.page)).size, mapped.length);
  assert.deepEqual(result.failures.filter((failure) => /LISTED_EXERCISES/.test(failure.detail)), []);
  assert.equal(result.results.filter((row) => row.status === 'listed').length > 0, true);
  assert.match(summaryLine(result), /source-exercise coverage: \d+ of \d+ source exercises rendered/);
  // Anatomy and Physiology: every stem verbatim (the kit review's 85/85).
  const ap = result.results.filter((row) => row.page.includes('/anatomy-physiology/'));
  assert.deepEqual(ap.filter((row) => row.status === 'missing'), []);
  for (const entry of interactiveTally(result.results)) assert.equal(entry.source, entry.graded + entry.prompts);
});

test('the CLI rejects an unknown flag with exit code 2', () => {
  const run = spawnSync(process.execPath, [TOOL, '--bogus'], { cwd: repositoryRoot, encoding: 'utf8' });
  assert.equal(run.status, 2);
  assert.match(run.stderr, /usage: node tools\/verify\/verify-source-coverage\.mjs/);
});
