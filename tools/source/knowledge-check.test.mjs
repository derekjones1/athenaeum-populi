import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { assemble, bookSections, chapterBlocks, checkSources, findLeaks, plannedWeights, printedOrderings, proseConfigurations, proseQuantumSets, provenanceResults, solutionPrints } from './knowledge-check.mjs';
import { loadElements } from '../lib/elements.mjs';

// knowledge-check.mjs is the parent's kit for a Knowledge Check run
// (docs/briefs/anatomy-physiology/kc-run.md). Earlier runs rebuilt these
// scripts in their scratchpads; one of them shifted the wrong weight range.

const SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'knowledge-check.mjs');
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

const book = (chapters, checks, weights = {}) => {
  const dir = mkdtempSync(path.join(tmpdir(), 'kc-book-'));
  for (const n of chapters) {
    const name = `${String(n).padStart(2, '0')}-chapter-${n}`;
    mkdirSync(path.join(dir, name));
    writeFileSync(path.join(dir, name, '_index.md'), `---\ntitle: Chapter ${n}\nsource_chapter: "${n}"\nweight: ${weights[name] ?? n}\n---\n\nBody.\n`);
  }
  for (const [first, last, weight] of checks) {
    const name = `knowledge-check-${String(first).padStart(2, '0')}-${String(last).padStart(2, '0')}.md`;
    writeFileSync(path.join(dir, name), `---\ntitle: Check\nsource_chapters: "${first}-${last}"\nweight: ${weight}\n---\n`);
  }
  return dir;
};

test('weights are derived from what exists: a new check moves only the chapters after its last chapter', () => {
  // Unit 1 is chapters 1–2; its check lands with every chapter still at its number.
  const dir = book([1, 2, 3, 4], [[1, 2, 99]]);
  const plan = plannedWeights(dir).map((e) => [path.relative(dir, e.file).replace('/_index.md', ''), e.current, e.target]);
  assert.deepEqual(plan, [
    ['01-chapter-1', 1, 1], ['02-chapter-2', 2, 2], ['knowledge-check-01-02.md', 99, 3],
    ['03-chapter-3', 3, 4], ['04-chapter-4', 4, 5],
  ], 'the unit\'s own last chapter keeps its weight; the check and every later chapter move');
  // --write applies it and the book is then in order.
  const out = spawnSync(process.execPath, [SCRIPT, 'weights', dir], { encoding: 'utf8' });
  assert.equal(out.status, 1, 'a book out of order exits 1 without --write');
  execFileSync(process.execPath, [SCRIPT, 'weights', dir, '--write']);
  assert.match(readFileSync(path.join(dir, '03-chapter-3', '_index.md'), 'utf8'), /^weight: 4$/m);
  assert.equal(spawnSync(process.execPath, [SCRIPT, 'weights', dir], { encoding: 'utf8' }).status, 0);
});

test('a book\'s appendices take the last weight, after every chapter and check', () => {
  const dir = book([1, 2], [[1, 2, 3]]);
  mkdirSync(path.join(dir, 'appendices'));
  writeFileSync(path.join(dir, 'appendices', '_index.md'), '---\ntitle: Appendices\nweight: 2\n---\n');
  const plan = plannedWeights(dir).map((e) => [path.relative(dir, e.file).replace('/_index.md', ''), e.current, e.target]);
  assert.deepEqual(plan.at(-1), ['appendices', 2, 4], 'two chapters and a check come first');
  execFileSync(process.execPath, [SCRIPT, 'weights', dir, '--write']);
  assert.match(readFileSync(path.join(dir, 'appendices', '_index.md'), 'utf8'), /^weight: 4$/m);
});

test('a check whose last chapter is not authored yet is refused', () => {
  assert.throws(() => plannedWeights(book([1, 2], [[1, 4, 5]])), /no chapter ends where knowledge-check-01-04\.md does/);
});

test('every book in the tree already has its derived weights', () => {
  for (const shelf of ['math', 'life-health-sciences']) {
    const shelfDir = path.join(ROOT, 'content', shelf);
    for (const name of ['prealgebra', 'elementary-algebra', 'intermediate-algebra', 'precalculus', 'biology', 'microbiology', 'anatomy-physiology']) {
      const dir = path.join(shelfDir, name);
      let plan;
      try { plan = plannedWeights(dir); } catch (error) { if (error.code === 'ENOENT') continue; throw error; }
      const off = plan.filter((e) => e.current !== e.target);
      assert.deepEqual(off, [], `${shelf}/${name}`);
    }
  }
});

const HEAD = '---\ntitle: "Knowledge Check: Unit 1 — Chapters 1–2"\nsource_chapters: "1-2"\nweight: 3\n---\n\n{{< callout type="info" >}}\nCovers chapters 1–2.\n{{< /callout >}}\n';
const FOOT = '---\n\n<small>Adapted from OpenStax. Changes: every item is locally written.</small>\n';
const scratch = (n) => `---\ntitle: scratch\n---\n\n## Chapter ${n}: Title ${n}\n\n### ${n}.1 First\n\n{{< textin question="Q${n}?" answer="a${n}" >}}\n\n---\n\n<small>scratch footer</small>\n`;

test('assemble joins the head, the chapter blocks in order, and one footer last', () => {
  const page = assemble(HEAD, [scratch(1), scratch(2)], FOOT);
  assert.equal(page.match(/<small>/g).length, 1, 'the scratch footers are cut');
  assert.ok(page.indexOf('## Chapter 1') < page.indexOf('## Chapter 2'));
  assert.ok(page.trimEnd().endsWith('</small>'), 'the footer is the last element');
  assert.equal(chapterBlocks(scratch(1)).split('\n')[0], '## Chapter 1: Title 1');
  assert.throws(() => assemble(HEAD, [scratch(2), scratch(1)], FOOT), /out of order/);
  assert.throws(() => assemble(HEAD, [scratch(1)], FOOT), /source_chapters "1-2" does not match/);
  assert.throws(() => assemble(HEAD, [scratch(1), scratch(2).replace('### 2.1', '### 3.1')], FOOT), /sits under Chapter 2/);
});

test('notes match provenance by stem, keep the ledger\'s verdict and solve, and list gaps', () => {
  const solved = { by: 'orchestrator-solver', result: 'agrees' };
  const exercises = [
    { hash: 'a'.repeat(16), line: 5, kind: 'textin', params: { question: 'The <sub>2</sub> *italic* stem ________.' } },
    { hash: 'b'.repeat(16), line: 9, kind: 'multiplechoice', params: { question: 'An item nobody recorded?' } },
  ];
  const provenance = {
    'The 2 italic stem ________.': 'KC 1 1.1 § Membranes, m1',
    'A stem that is no longer on the page?': 'KC 1 1.2 § glossary cell (d1), m2',
  };
  const { results, missing, unused } = provenanceResults(exercises, provenance, { ['a'.repeat(16)]: { verdict: 'ok', note: 'orchestrator solve (solve-check.mjs)', solved } });
  assert.deepEqual(results, [{ hash: 'a'.repeat(16), verdict: 'ok', note: 'KC 1 1.1 § Membranes, m1', solved }]);
  assert.deepEqual(missing.map((m) => m.line), [9]);
  assert.deepEqual(unused, ['A stem that is no longer on the page?']);
  assert.throws(() => provenanceResults(exercises.slice(0, 1), { 'The 2 italic stem ________.': 'from the membranes section' }), /does not open "KC <n> <N\.M> § …"/);
});

test('leaks report a key printed by another item, through the plural fold, but not an item\'s own options or a count', () => {
  const page = [
    '{{< textin question="A structure that ________." answer="dermatophyte" >}}',
    '{{< multiplechoice question="Which fungi grow on skin, like dermatophytes?" answer="Trichophyton" >}}\nTrichophyton\nCandida\n{{< /multiplechoice >}}',
    '{{< multiplechoice question="How many?" answer="three" >}}\ntwo\nthree\n{{< /multiplechoice >}}',
    '{{< multiplechoice question="How many again?" answer="four" >}}\nthree\nfour\n{{< /multiplechoice >}}',
  ].join('\n\n');
  const leaks = findLeaks(page);
  assert.deepEqual(leaks.map((l) => [l.key, l.as, l.part, l.printedLine]), [['dermatophyte', 'dermatophytes', 'stem', 3]]);
});

test('leaks read a fill-in: its key as a number another item prints, however it is written', () => {
  // Chemistry 3.3 chains its worked examples: one answers 0.839 M and the
  // next takes 0.839 M as its given datum. Both on one check is a leak the
  // word-only reading never saw.
  const page = [
    '### 3.3 Molarity', '',
    '{{< fillin question="A 0.500-L vinegar solution contains 25.2 g of acetic acid. What is its molarity?" answer="0.839" answerForm="sig-figs:3 last-digit:1" >}}', '',
    '{{< fillin question="The concentration of acetic acid in white vinegar is 0.839 *M*. What volume of vinegar contains 75.6 g of acetic acid?" answer="1.50" answerForm="sig-figs:3 last-digit:1" >}}', '',
    '{{< fillin question="How many atoms are in the sample? It weighs $4.74\\times10^{22}$ times one atom." answer="5.00" answerForm="sig-figs:3 last-digit:0" >}}', '',
    '{{< fillin question="How many copper atoms are in 5.00 g of copper wire?" answer="4.74\\times10^{22}" answerForm="sig-figs:3 last-digit:1" >}}', '',
    '{{< fillin question="How many significant figures does 12 have?" answer="2" answerForm="whole-number" >}}', '',
  ].join('\n');
  const leaks = findLeaks(page).map((leak) => [leak.key, leak.keyLine, leak.printedLine, leak.part]);
  assert.deepEqual(leaks.filter(([key]) => key === '0.839'), [['0.839', 3, 5, 'stem']], 'the next example\'s datum');
  assert.ok(leaks.some(([key, , printedLine]) => key === '4.74\\times10^{22}' && printedLine === 7), 'a power of ten written in TeX is the same number');
  assert.ok(leaks.some(([key, , printedLine]) => key === '5.00' && printedLine === 9), 'and so is a datum printed to the same figures');
  assert.ok(!leaks.some(([key]) => key === '2'), 'a count is never reported: two digits or fewer recur by chance');
});

const cnxml = (body) => `<?xml version="1.0"?><document xmlns="http://cnx.rice.edu/cnxml"><content>${body}</content></document>`;
const worked = (id, title, question, solution, check = 'Another one?') => `<example id="${id}"><para><title>${title}</title>${question}</para>`
  + `<para><title>Solution</title>${solution}</para><para><title>Check Your Learning</title>${check}</para><note><title>Answer:</title><para>9.99 M</para></note></example>`;
const MOLARITY = cnxml(
  worked('ex1', 'Calculating Molar Concentrations', 'A 355-mL soft drink sample contains 0.133 mol of sucrose (table sugar). What is the molar concentration of sucrose in the beverage?',
    'The volume must be converted from mL to L: M = 0.133 mol / 0.355 L = 0.375 <emphasis effect="italics">M</emphasis>',
    'A teaspoon of table sugar contains about 0.01 mol sucrose. What is the molarity of sucrose if a teaspoon of sugar has been dissolved in a cup of tea with a volume of 200 mL?')
  + worked('ex2', 'Predicting the Formula of a Compound with a Polyatomic Anion', 'Baking powder contains calcium dihydrogen phosphate, an ionic compound composed of the ions Ca<sup>2+</sup> and H<sub>2</sub>PO<sub>4</sub><sup>−</sup>. What is the formula of this compound?',
    'This requires a ratio of one Ca<sup>2+</sup> ion to two dihydrogen phosphate ions. We designate this by enclosing the formula in parentheses and adding a subscript 2. The formula is Ca(H<sub>2</sub>PO<sub>4</sub>)<sub>2</sub>.'),
);
const check = (...items) => ['## Chapter 3: Composition', '', '### 3.3 Molarity', '', ...items.flatMap((item) => [item, ''])].join('\n');
const SOFT_DRINK = 'A 355-mL soft drink sample contains 0.133 mol of sucrose (table sugar). What is the molar concentration of sucrose in the beverage? Enter the molarity in mol/L.';
const BAKING = 'Baking powder contains calcium dihydrogen phosphate, an ionic compound composed of the ions Ca²⁺ and H₂PO₄⁻. What is the formula of this compound?';
const moduleOf = (section) => (section === '3.3' ? MOLARITY : null);

test('sources: a fill-in or a formula on a keyed-only book\'s check re-asks a worked example and keys what its Solution prints', () => {
  const good = checkSources(check(
    `{{< fillin question="${SOFT_DRINK}" answer="0.375" answerForm="sig-figs:3 last-digit:0" >}}`,
    `{{< textin question="${BAKING}" answer="Ca(H₂PO₄)₂" answerForm="formula" >}}`,
    // A recall item and a selfcheck are a reader's to check, not this gate's.
    '{{< textin question="A solution\'s concentration in moles of solute per liter of solution is its ________." answer="molarity" >}}',
  ), moduleOf);
  assert.deepEqual(good, { confirmed: 2, failures: [] });
});

test('sources refuse a key the Solution does not print, other figures than it shows, a datum of the question, and an item that is no worked example', () => {
  const lines = (page) => checkSources(page, moduleOf).failures.map((failure) => failure.detail);
  assert.match(lines(check(`{{< fillin question="${SOFT_DRINK}" answer="0.374" answerForm="sig-figs:3 last-digit:0" >}}`))[0], /keys "0\.374", which the Solution of worked example ex1 does not print/);
  assert.match(lines(check(`{{< fillin question="${SOFT_DRINK}" answer="0.375" answerForm="sig-figs:4 last-digit:0" >}}`))[0], /declares sig-figs:4/);
  assert.match(lines(check(`{{< fillin question="${SOFT_DRINK}" answer="0.133" answerForm="sig-figs:3 last-digit:0" >}}`))[0], /a number worked example ex1's own question prints/);
  assert.match(lines(check(`{{< textin question="${BAKING}" answer="CaH₂PO₄" answerForm="formula" >}}`))[0], /does not print as one formula/);
  // The example's own Check Your Learning is spent on the section page, and
  // an item written from nothing is an author-derived key.
  const spent = 'A teaspoon of table sugar contains about 0.01 mol sucrose. What is the molarity of sucrose if a teaspoon of sugar has been dissolved in a cup of tea with a volume of 200 mL?';
  assert.match(lines(check(`{{< fillin question="${spent}" answer="0.05" answerForm="sig-figs:1 last-digit:0" >}}`))[0], /is not the question of a worked example of Section 3\.3/);
  assert.match(lines(check('{{< fillin question="What is the molarity of 2.00 mol of salt in 4.00 L of solution?" answer="0.500" answerForm="sig-figs:3 last-digit:0" >}}'))[0], /is not the question of a worked example/);
  // An item above the first section heading, or under a section the map lacks, has no module to be read against.
  assert.match(checkSources(`{{< fillin question="${SOFT_DRINK}" answer="0.375" answerForm="sig-figs:3 last-digit:0" >}}\n`, moduleOf).failures[0].detail, /no "### N\.M" heading/);
  assert.match(lines(check(`{{< fillin question="${SOFT_DRINK}" answer="0.375" answerForm="sig-figs:3 last-digit:0" >}}`).replace('### 3.3', '### 9.9'))[0], /Section 9\.9, which the source map does not hold/);
});

test('sources: on a book with its own periodic table, a key near the source\'s print is confirmed only when the section page prints it', () => {
  const elements = loadElements();
  const item = `{{< fillin question="${SOFT_DRINK}" answer="0.376" answerForm="sig-figs:3 last-digit:1" >}}`;
  const section = (value) => () => `Dividing gives:\n\n$$\\frac{0.133}{0.355} = ${value}\\ M$$\n\n{{< fillin question="Another?" answer="0.376" answerForm="sig-figs:3 last-digit:1" >}}\n`;
  // The section's worked example was recomputed and prints the check's key.
  assert.deepEqual(checkSources(check(item), moduleOf, { elements, pageOf: section('0.376') }), { confirmed: 1, failures: [] });
  // The section still prints the source's number: the check and the section would give two answers.
  // (The section's own item keying 0.376 is a parameter, not its body.)
  assert.match(checkSources(check(item), moduleOf, { elements, pageOf: section('0.375') }).failures[0].detail,
    /keys "0\.376" where the source's Solution of worked example ex1 prints 0\.375, and the body of Section 3\.3's page does not print 0\.376/);
  // A book with no table of its own has no such reading, and neither has an item graded to the digit.
  assert.match(checkSources(check(item), moduleOf).failures[0].detail, /does not print \(key-differs\)/);
  assert.match(checkSources(check(item.replace('last-digit:1', 'last-digit:0')), moduleOf, { elements, pageOf: section('0.376') }).failures[0].detail, /does not print \(key-differs\)/);
  // A key three units away is a wrong key with any table.
  assert.match(checkSources(check(item.replace('0.376', '0.378')), moduleOf, { elements, pageOf: section('0.378') }).failures[0].detail, /does not print \(key-differs\)/);
});

test('a Solution is prose: a formula is found as any run of its words, in the source\'s spaced subscripts', () => {
  const solution = 'We designate this by adding a subscript 2. The formula is Ca(H _2 PO _4 ) _2 . Finally: (C 5 H 7 N) 2 = C 10 H 14 N 2';
  assert.equal(solutionPrints(solution, 'Ca(H₂PO₄)₂', 'formula'), true);
  assert.equal(solutionPrints(solution, 'C₁₀H₁₄N₂', 'formula'), true);
  assert.equal(solutionPrints(solution, 'CaH₂PO₄', 'formula'), false);
  assert.equal(solutionPrints('This is the aluminum cation, Al^{3+} .', 'Al³⁺', 'formula'), true);
  assert.equal(solutionPrints('This is the aluminum cation, Al^{3+} .', 'Al³⁻', 'formula'), false);
});

test('a scratch copy at a mirrored path is read as the book it mirrors', () => {
  const { book, sections } = bookSections(path.join(tmpdir(), 'kc', 'ch03', 'content', 'physical-sciences', 'chemistry'), ROOT);
  assert.equal(book, 'chemistry');
  assert.equal(sections.get('3.3').moduleId, 'm68703');
  assert.equal(bookSections(path.join(ROOT, 'content', 'life-health-sciences', 'biology'), ROOT).book, 'biology');
});

test('the committed checks pass the sources gate', () => {
  // Every keyed-only book's check under content/; the other books' checks are passed over.
  const out = spawnSync(process.execPath, [SCRIPT, 'sources', path.join(ROOT, 'content')], { encoding: 'utf8', cwd: ROOT });
  assert.equal(out.status, 0, out.stdout + out.stderr);
  assert.match(out.stdout, /failure\(s\)/);
});


test('a check\'s configuration or ordering is held to a worked Solution that prints it whole (Chemistry 2e chapter 6)', () => {
  const sulfur = 'The electron configuration is 1 s^{2} 2 s^{2} 2 p^{6} 3 s^{2} 3 p^{4} . This is sulfur.';
  assert.equal(solutionPrints(sulfur, '1s²2s²2p⁶3s²3p⁴', 'configuration'), true);
  assert.equal(solutionPrints(sulfur, '1s²2s²2p⁶3s²3p⁴'.replace('3s²3p⁴', '3p⁴3s²'), 'configuration'), true, 'in another order of subshells');
  assert.equal(solutionPrints(sulfur, '1s²2s²2p⁶3s²', 'configuration'), false, 'the first subshells of a longer configuration');
  assert.equal(solutionPrints(sulfur, '2s²2p⁶3s²3p⁴', 'configuration'), false, 'its last subshells');
  assert.equal(solutionPrints('so the order is Rb < Li < N < F here.', 'Rb < Li < N < F', 'ordering'), true);
  assert.equal(solutionPrints('so the order is Rb < Li < N < F here.', 'Li < N < F', 'ordering'), false);
  // A set of quantum numbers (6.3), bare or labelled, the spin in the source's MathML; a set read out of a longer run of numbers is not one.
  assert.equal(solutionPrints('One possible set is 4 0 0 ( 1 )/( 2 ) for that electron.', '4 0 0 +1/2', 'quantum-numbers'), true);
  assert.equal(solutionPrints('The set is n = 2, l = 1, m _l = −1, m _s = + ( 1 )/( 2 ) .', '2 1 −1 +1/2', 'quantum-numbers'), true);
  assert.equal(solutionPrints('n l m _l s 4 0 0 + ( 1 )/( 2 ) 4 1 −1 − ( 1 )/( 2 )', '4 1 −1 −1/2', 'quantum-numbers'), true, 'a row of the table');
  assert.equal(solutionPrints('One possible set is 4 0 0 ( 1 )/( 2 ) for that electron.', '4 0 0 −1/2', 'quantum-numbers'), false, 'the other spin');
  assert.equal(solutionPrints('The values 3 4 0 0 ( 1 )/( 2 ) run on.', '4 0 0 +1/2', 'quantum-numbers'), false, 'the last four of five values');
});


test('a worked Solution in prose: labelled configurations, the whole ranking, a set given label by label (Chemistry 2e chapters 6–7)', () => {
  const cations = 'First, write the electron configuration for the neutral atoms: Zn: [Ar]3 d^{10} 4 s^{2} Cr: [Ar]3 d^{5} 4 s^{1} Next, remove electrons from the highest energy orbital. Thus, we find the following electron configurations of the ions: Zn^{2+} : [Ar]3 d^{10} Cr^{3+} : [Ar]3 d^{3}';
  assert.deepEqual(proseConfigurations(cations).map((entry) => [entry.symbol, entry.charged, entry.printed]), [
    ['Zn', false, '[Ar]3 d^{10} 4 s^{2}'], ['Cr', false, '[Ar]3 d^{5} 4 s^{1}'], ['Zn', true, '[Ar]3 d^{10}'], ['Cr', true, '[Ar]3 d^{3}'],
  ]);
  assert.deepEqual(proseConfigurations('Se^{2–} : [Ar]3 d^{10} 4 s^{2} 4 p^{6} I^{–} : [Kr]4 d^{10} 5 s^{2} 5 p^{6}').map((entry) => entry.symbol), ['Se', 'I']);
  assert.deepEqual(proseConfigurations('The configuration is 1 s^{2} 2 s^{2} .'), [], 'one configuration is no list');
  const radii = 'Radius increases as we move down a group, so Ge < Fl (Note: Fl is the symbol for flerovium). Radius decreases as we move across a period, so Kr < Br < Ge. Putting the trends together, we obtain Kr < Br < Ge < Fl.';
  assert.equal(Math.max(...printedOrderings(radii).map((canon) => canon.split(' < ').length)), 4);
  const phosphorus = 'The last electron added is a 3 p electron. Therefore, n = 3 and, for a p -type orbital, l = 1. The m _l value could be –1, 0, or +1. The three p orbitals are degenerate, so any of these m _l values is correct. For unpaired electrons, convention assigns the value of + ( 1 )/( 2 ) for the spin quantum number; thus, m s = + ( 1 )/( 2 ) .';
  assert.deepEqual(proseQuantumSets(phosphorus), ['3 1 -1 +1/2', '3 1 0 +1/2', '3 1 1 +1/2']);
  assert.deepEqual(proseQuantumSets('Therefore, n = 3 and l = 1.'), [], 'a set needs all four labels');
});

{
  const CHEM = path.join(ROOT, 'sources/openstax/osbooks-chemistry-bundle/modules');
  const ids = { '6.4': 'm68734', '6.5': 'm68735', '7.1': 'm68737', '7.4': 'm68740', '8.4': 'm68747' };
  const skip = !Object.values(ids).every((id) => existsSync(path.join(CHEM, id, 'index.cnxml')));
  const realModule = (section) => (ids[section] ? readFileSync(path.join(CHEM, ids[section], 'index.cnxml'), 'utf8') : null);
  const heading = { '6.4': '### 6.4 Electronic Structure of Atoms', '6.5': '### 6.5 Periodic Variations', '7.1': '### 7.1 Ionic Bonding', '7.4': '### 7.4 Formal Charges', '8.4': '### 8.4 Molecular Orbital Theory' };
  const one = (section, item) => checkSources(['## Chapter N: Title', '', heading[section], '', item, ''].join('\n'), realModule);
  const TYPE_CONFIG = 'Type each subshell followed by its number of electrons, with a space between subshells.';
  const CATIONS = `There are at least 14 elements categorized as “essential trace elements” for the human body. They are called “essential” because they are required for healthy bodily functions, “trace” because they are required only in small amounts, and “elements” in spite of the fact that they are really ions. Two of these essential trace elements, chromium and zinc, are required as Cr³⁺ and Zn²⁺. Write the electron configurations of these cations. Enter the electron configuration of the chromium ion. ${TYPE_CONFIG}`;
  const ANIONS = `Selenium and iodine are two essential trace elements that form anions. Write the electron configurations of the anions. Enter the electron configuration of the selenium ion. ${TYPE_CONFIG}`;
  const RADII = 'Predict the order of increasing covalent radius for Ge, Fl, Br, Kr. Type the symbols in the order you rank them, separated by <.';
  const PHOSPHORUS = 'What is the electron configuration and orbital diagram for a phosphorus atom? What are the four quantum numbers for the last electron added? Enter the four quantum numbers. Type the four values in the order n, l, mₗ, mₛ, separated by spaces.';
  const ICL4 = 'Assign formal charges to each atom in the interhalogen ion ICl₄⁻. Enter the formal charge of I as a signed number, the sign first, as +2 or −2.';
  const O2 = 'Draw the molecular orbital diagram for the oxygen molecule, O₂. From this diagram, calculate the bond order for O₂. How does this diagram account for the paramagnetism of O₂? Enter the bond order.';
  const textin = (question, answer, form) => `{{< textin question="${question}" answer="${answer}" answerForm="${form}" >}}`;
  const fillin = (question, answer, form) => `{{< fillin question="${question}" answer="${answer}" answerForm="${form}" >}}`;

  test('sources read Knowledge Check block 3\'s shapes against the worked Solution, and refuse a sibling\'s key (Chemistry 2e chapters 6–8)', { skip }, () => {
    const ok = (section, item) => assert.deepEqual(one(section, item), { confirmed: 1, failures: [] }, item);
    const refused = (section, item, pattern) => assert.match(one(section, item).failures[0]?.detail ?? '(confirmed)', pattern, item);
    ok('7.1', textin(CATIONS, '[Ar]3d³', 'configuration'));
    refused('7.1', textin(CATIONS, '[Ar]3d¹⁰', 'configuration'), /for the configuration its closing sentence names/);
    refused('7.1', textin(CATIONS, '[Ar]3d⁵4s¹', 'configuration'), /for the configuration its closing sentence names/);
    ok('7.1', textin(ANIONS, '[Ar]3d¹⁰4s²4p⁶', 'configuration'));
    refused('7.1', textin(ANIONS, '[Kr]4d¹⁰5s²5p⁶', 'configuration'), /for the configuration its closing sentence names/);
    ok('6.5', textin(RADII, 'Kr < Br < Ge < Fl', 'ordering'));
    refused('6.5', textin(RADII, 'Ge < Fl', 'ordering'), /a step of the Solution/);
    refused('6.5', textin(RADII, 'Kr < Br < Ge', 'ordering'), /a step of the Solution/);
    ok('6.4', textin(PHOSPHORUS, '3 1 0 +1/2', 'quantum-numbers'));
    refused('6.4', textin(PHOSPHORUS, '3 0 0 +1/2', 'quantum-numbers'), /does not print as one quantum-numbers/);
    refused('6.4', textin(PHOSPHORUS, '3 1 0 -1/2', 'quantum-numbers'), /does not print as one quantum-numbers/);
    ok('7.4', fillin(ICL4, '-1', 'whole-number'));
    refused('7.4', fillin(ICL4, '0', 'whole-number'), /does not print/);
    // O₂'s subscript is no number the question gives; the 4 inside the fraction is no bond order.
    ok('8.4', fillin(O2, '2', 'decimal-or-fraction'));
    refused('8.4', fillin(O2, '4', 'decimal-or-fraction'), /does not print/);
  });
}

{
  const CHEM = path.join(ROOT, 'sources/openstax/osbooks-chemistry-bundle/modules');
  const ids = { '6.3': 'm68733', '6.4': 'm68734' };
  const skip = !Object.values(ids).every((id) => existsSync(path.join(CHEM, id, 'index.cnxml')));
  const realModule = (section) => (ids[section] ? readFileSync(path.join(CHEM, ids[section], 'index.cnxml'), 'utf8') : null);
  const one = (section, item) => checkSources(['## Chapter 6: Title', '', `### ${section} Title`, '', item, ''].join('\n'), realModule);
  const TYPE_CONFIG = 'Type each subshell followed by its number of electrons, with a space between subshells.';
  const ion = (symbol, answer) => `{{< textin question="What is the electron configuration of ${symbol}? ${TYPE_CONFIG}" answer="${answer}" answerForm="configuration" >}}`;
  const SHELL = 'Calculate the maximum number of electrons that can occupy a shell with $n = 5$. Note you are only looking at the orbitals with the specified $n$ value, not those at lower energies.';
  const shell = (answer) => `{{< fillin question="${SHELL}" answer="${answer}" answerForm="whole-number" >}}`;

  test('one part of a lettered worked example: its lead-in restated for the one, held to that part\'s answer (Chemistry 6.4\'s ions, 6.3\'s shells)', { skip }, () => {
    const ok = (section, item) => assert.deepEqual(one(section, item), { confirmed: 1, failures: [] }, item);
    const refused = (section, item, pattern) => assert.match(one(section, item).failures[0]?.detail ?? '(confirmed)', pattern, item);
    // (e) Sm³⁺ after the source's stray "(e).": the last form after "=", not the first, and no other part's.
    ok('6.4', ion('Sm³⁺', '1s²2s²2p⁶3s²3p⁶4s²3d¹⁰4p⁶5s²4d¹⁰5p⁶4f⁵'));
    refused('6.4', ion('Sm³⁺', '1s²2s²2p⁶3s²3p⁶4s²3d¹⁰4p⁶5s²4d¹⁰5p⁶6s²4f⁶'), /for the configuration its closing sentence names/);
    refused('6.4', ion('Sm³⁺', '1s²2s²2p⁶'), /does not print as one configuration/);
    refused('6.4', ion('Sm³⁺', '1s²2s²2p⁶3s²3p⁶3d⁶'), /does not print as one configuration/);
    ok('6.4', ion('Fe²⁺', '1s²2s²2p⁶3s²3p⁶3d⁶'));
    ok('6.4', ion('Al²⁺', '1s²2s²2p⁶3s¹'));
    // (b) n = 5 with the question's shared closing: 50 electrons, not (a)'s 8 or (b)'s 25 orbitals.
    ok('6.3', shell('50'));
    refused('6.3', shell('8'), /does not print/);
    refused('6.3', shell('25'), /does not print/);
  });
}
