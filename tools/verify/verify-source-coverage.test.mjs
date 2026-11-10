import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import {
  COVERAGE_SHELVES, KEYED_ONLY_BOOKS, LISTED_EXERCISES, askSentences, checkCoverage, coverage, interactiveTally, plain,
  runCoverage, sequentialParts, sourceExercises, stemParts, summaryLine, tight,
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

test('the corpus walk reads every page of the covered shelves and no LISTED entry is stale', {
  skip: absentBundles.length > 0 && `pinned checkout(s) absent: ${absentBundles.join(', ')} — run npm run source:fetch`,
}, () => {
  const result = checkCoverage(repositoryRoot);
  const mapped = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-map.json'), 'utf8'))
    .sections.filter((section) => COVERAGE_SHELVES.some((shelf) => section.localPath.startsWith(shelf)));
  assert.equal(new Set(result.results.map((row) => row.page)).size, mapped.length);
  // The life-sciences shelf is read whole, as before the gate learned a second shelf.
  assert.ok(mapped.filter((section) => section.localPath.startsWith('content/life-health-sciences/')).length >= 504);
  // A keyed-only book's omitted exercises are tallied and owed by nobody.
  const omitted = result.results.filter((row) => row.status === 'omitted');
  assert.ok(omitted.every((row) => row.page.startsWith('content/physical-sciences/chemistry/')));
  assert.equal(result.total, result.results.length - omitted.length);
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

/* ---- Chemistry 2e: keyed-only, lettered parts, Check Your Learning ---------- */

// A Chemistry exercise: lettered parts are paragraphs, and only the odd
// exercises carry a <solution>.
const chemExercise = (id, paragraphs, solution) => `<exercise id="${id}"><problem>${
  paragraphs.map((text) => `<para>${text}</para>`).join('')}</problem>${
  solution ? `<solution><para>${solution}</para></solution>` : ''}</exercise>`;
const chemExample = (id, question, answer) => `<example id="${id}"><para><title>Title</title>Problem.</para><para><title>Solution</title>Worked.</para>`
  + `<para><title>Check Your Learning</title>${question}</para><note><title>Answer:</title><para>${answer}</para></note></example>`;
const fillin = (question, answer = '1') => `{{< fillin question="${question}" answer="${answer}" answerForm="decimal" hint="h" >}}\n`;
const twoOption = (question, options) => mc(question, options);
const LEAD = 'Classify each of the following changes as physical or chemical:';
const classify = cnxml(section('exercises',
  chemExercise('e1', [LEAD, '(a) condensation of steam', '(b) burning of gasoline', '(c) souring of milk'], '(a) physical; (b) chemical; (c) chemical'),
  chemExercise('e2', ['Classify each of the following changes as physical or chemical:', '(a) coal burning', '(b) ice melting'], null),
  chemExercise('e3', ['Explain the difference between extensive properties and intensive properties.'], 'An extensive property depends on amount.'),
));

test('the gate reads the physical-sciences shelf, and Chemistry is a keyed-only book', () => {
  assert.ok(COVERAGE_SHELVES.includes('content/physical-sciences/'));
  assert.ok(COVERAGE_SHELVES.includes('content/life-health-sciences/'));
  assert.deepEqual([...KEYED_ONLY_BOOKS], ['chemistry']);
});

test('sequentialParts reads lettered parts in order and is not cut by a state symbol', () => {
  const lettered = sequentialParts(`${LEAD} (a) condensation of steam (b) burning of gasoline (c) souring of milk`);
  assert.equal(lettered.lead, LEAD);
  assert.deepEqual(lettered.parts, [
    { label: 'a', text: 'condensation of steam', media: [] },
    { label: 'b', text: 'burning of gasoline', media: [] },
    { label: 'c', text: 'souring of milk', media: [] },
  ]);
  // Nine parts and more: the life-sciences splitter stops at (h).
  const nine = sequentialParts(`Convert: ${'abcdefghij'.split('').map((letter, i) => `(${letter}) ${i + 1} g`).join(' ')}`);
  assert.equal(nine.parts.length, 10);
  assert.equal(nine.parts[9].text, '10 g');
  // "(g)" is a state symbol, not part g, until parts a–f have come first;
  // and one glued to its formula is never a label.
  assert.equal(sequentialParts('Water vapor, H2O (g) , condenses to H2O (l) on a cold surface.'), null);
  const reaction = sequentialParts('Balance: (a) H2(g) + O2(g) forms water (b) N2(g) + H2(g) forms ammonia');
  assert.deepEqual(reaction.parts.map((part) => part.label), ['a', 'b']);
  assert.equal(sequentialParts('What is the mass of (a) the sample?'), null, 'one label is not a multi-part stem');
});

test('sourceExercises reads Chemistry exercises with their keyed flag, and each Check Your Learning', () => {
  const { exercises } = sourceExercises(cnxml(
    chemExample('x1', 'Convert a volume of 9.345 qt to liters.', '8.844 L')
    + section('exercises',
      chemExercise('e1', ['How many milliliters of a soft drink are contained in a 12.0-oz can?'], '355 mL'),
      chemExercise('e2', ['A barrel of oil is exactly 42 gal. How many liters of oil are in a barrel?'], null)),
  ));
  assert.deepEqual(exercises.map((exercise) => [exercise.id, exercise.cls, exercise.keyed]), [
    ['e1', 'exercises', true],
    ['e2', 'exercises', false],
    ['x1#check', 'check-your-learning', true],
  ]);
  assert.equal(exercises[2].stem, 'Convert a volume of 9.345 qt to liters.');
});

test('in a keyed-only book every lettered part of a keyed exercise must be rendered', () => {
  const source = sourceExercises(classify);
  const part = (text) => twoOption(`${LEAD} ${text}`, ['physical', 'chemical']);
  const whole = part('condensation of steam') + part('burning of gasoline') + part('souring of milk')
    + selfcheck('Explain the difference between extensive properties and intensive properties.');
  const all = coverage(whole, source, { keyedOnly: true });
  assert.deepEqual(all.map((verdict) => [verdict.id, verdict.status]), [
    ['e1(a)', 'rendered'], ['e1(b)', 'rendered'], ['e1(c)', 'rendered'],
    ['e2(a)', 'omitted'], ['e2(b)', 'omitted'],
    ['e3', 'rendered'],
  ]);
  // Part (b) dropped: the two remaining items do not cover it.
  const dropped = coverage(part('condensation of steam') + part('souring of milk')
    + selfcheck('Explain the difference between extensive properties and intensive properties.'), source, { keyedOnly: true });
  assert.equal(statusOf(dropped, 'e1(b)'), 'missing');
  assert.equal(statusOf(dropped, 'e1(a)'), 'rendered');
  assert.equal(statusOf(dropped, 'e1(c)'), 'rendered');
});

test('a short part is matched by its own words: "iron" does not take the item for "iron oxide"', () => {
  const lead = 'Classify each of the following as an element, a compound, or a mixture:';
  const source = sourceExercises(cnxml(section('exercises',
    chemExercise('e1', [lead, '(a) iron', '(b) iron oxide', '(c) oxygen'], '(a) element; (b) compound; (c) element'))));
  const item = (text) => mc(`${lead} ${text}`, ['element', 'compound', 'mixture']);
  const verdicts = coverage(item('iron oxide') + item('oxygen'), source, { keyedOnly: true });
  assert.equal(statusOf(verdicts, 'e1(b)'), 'rendered');
  assert.equal(statusOf(verdicts, 'e1(c)'), 'rendered');
  assert.equal(statusOf(verdicts, 'e1(a)'), 'missing', 'the item for iron oxide is not also the item for iron');
});

test('a keyed-only book may not render an unkeyed exercise', () => {
  const source = sourceExercises(cnxml(section('exercises',
    chemExercise('e1', ['How many milliliters of a soft drink are contained in a 12.0-oz can?'], '355 mL'),
    chemExercise('e2', ['A barrel of oil is exactly 42 gal. How many liters of oil are in a barrel?'], null))));
  const keyed = fillin('How many milliliters of a soft drink are contained in a 12.0-oz can? Enter the volume in milliliters.', '355');
  const unkeyed = fillin('A barrel of oil is exactly 42 gal. How many liters of oil are in a barrel? Enter the volume in liters.', '159');
  assert.equal(statusOf(coverage(keyed, source, { keyedOnly: true }), 'e2'), 'omitted');
  const rendered = coverage(keyed + unkeyed, source, { keyedOnly: true });
  assert.equal(statusOf(rendered, 'e1'), 'rendered');
  assert.equal(statusOf(rendered, 'e2'), 'unkeyed-rendered');
  // The same page in a book that keys everything: the unkeyed one is simply an exercise.
  assert.equal(statusOf(coverage(keyed, source), 'e2'), 'missing');
  assert.equal(statusOf(coverage(keyed + unkeyed, source), 'e2'), 'rendered');
});

test('a keyed exercise split into two items is not its unkeyed twin rendered', () => {
  // Chemistry 1.6: the soft-drink exercise (keyed) and the cereal-box
  // exercise (unkeyed) close on the same question over different data, and
  // the page asks the keyed one as two items.
  const ask = 'Use this information to derive a conversion factor between the English and metric units. How many significant figures can you justify in your conversion factor?';
  const source = sourceExercises(cnxml(section('exercises',
    chemExercise('e3', [`The label on a soft drink bottle gives the volume in two units: 2.0 L and 67.6 fl oz. ${ask}`], '0.030 L/1 fl oz; two significant figures'),
    chemExercise('e4', [`The label on a box of cereal gives the mass of cereal in two units: 978 grams and 34.5 oz. ${ask}`], null))));
  const keyedStem = `The label on a soft drink bottle gives the volume in two units: 2.0 L and 67.6 fl oz. ${ask}`;
  const page = fillin(`${keyedStem} Enter the number of liters in 1 fl oz.`, '0.030') + fillin(`${keyedStem} Enter the number of significant figures.`, '2');
  const verdicts = coverage(page, source, { keyedOnly: true });
  assert.equal(statusOf(verdicts, 'e3'), 'rendered');
  assert.equal(statusOf(verdicts, 'e4'), 'omitted');
  // The twin itself, transcribed, is still caught.
  const twin = fillin(`The label on a box of cereal gives the mass of cereal in two units: 978 grams and 34.5 oz. ${ask} Enter the number of grams in 1 oz.`, '28.3');
  assert.equal(statusOf(coverage(page + twin, source, { keyedOnly: true }), 'e4'), 'unkeyed-rendered');
});

test('a Check Your Learning must be rendered, part by part', () => {
  const source = sourceExercises(cnxml(
    chemExample('x1', 'Convert a volume of 9.345 qt to liters.', '8.844 L')
    + chemExample('x2', '(a) Add 2.334 mL and 0.31 mL. (b) Subtract 55.8752 m from 56.533 m.', '(a) 2.64 mL; (b) 0.658 m')));
  const first = fillin('Convert a volume of 9.345 qt to liters. Enter the volume in liters.', '8.844');
  const a = fillin('Add 2.334 mL and 0.31 mL. Enter the sum in milliliters.', '2.64');
  const b = fillin('Subtract 55.8752 m from 56.533 m. Enter the difference in meters.', '0.658');
  assert.deepEqual(coverage(first + a + b, source, { keyedOnly: true }).map((verdict) => verdict.status), ['rendered', 'rendered', 'rendered']);
  const missing = coverage(first + a, source, { keyedOnly: true });
  assert.equal(statusOf(missing, 'x2#check(b)'), 'missing');
  assert.equal(statusOf(coverage(a + b, source, { keyedOnly: true }), 'x1#check'), 'missing');
});
