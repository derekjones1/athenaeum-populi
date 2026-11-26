// Chemistry 2e Sections 12.1–12.2, read by both source gates against the
// pinned CNXML itself (docs/briefs/chemistry/run.md §1 step 6a, the hand
// probe): a chain of rate expressions carried as ONE multiple choice whose
// options are whole chains in math (the source's chain the key, the
// confusions the distractors), the source's "CIF₃" misprint keyed as ClF₃
// under a disclosed deviation; a units question as a multiple choice whose
// options are units; and three parts answered with several NAMED quantities
// — an interval in each heading, a heading word, a formula after each
// number — each fill-in held to its own, and the coverage gate rendering
// the part only when each quantity has its item (a fill-in, or a self-check
// that prints it). Skipped where the bundle is not checked out (CI fetches it).
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DISCLOSED_DEVIATIONS, judgeKeyedUnit, rateChain, sameChain, unitPowers } from './verify-source-keys.mjs';
import { coverage, sourceExercises } from './verify-source-coverage.mjs';
import { askedQuantity, keyedUnits, labelledQuantities } from '../lib/keyed-units.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const MODULES = { 12.1: 'm68786', 12.2: 'm68787' };
const file = (id) => path.join(root, 'sources/openstax/osbooks-chemistry-bundle/modules', id, 'index.cnxml');
const skip = !Object.values(MODULES).every((id) => existsSync(file(id)));
const M = skip ? {} : Object.fromEntries(Object.entries(MODULES).map(([key, id]) => [key, readFileSync(file(id), 'utf8')]));
const units = skip ? {} : Object.fromEntries(Object.entries(M).map(([key, xml]) => [key, keyedUnits(xml)]));
const read = (section, item) => {
  const verdict = judgeKeyedUnit(item, units[section]);
  return verdict ? [verdict.exercise.id, verdict.status] : null;
};
const fillin = (question, answer, form = 'sig-figs:3 last-digit:0') => ({ type: 'fillin', question, answer, form });
const choice = (question, options, answer) => ({ type: 'multiplechoice', question, options, answer });
const escaped = (text) => text.replace(/"/g, '\\"');
const shortcode = (item) => (item.type === 'fillin'
  ? `{{< fillin question="${escaped(item.question)}" answer="${item.answer}" answerForm="${item.form}" hint="h" >}}\n`
  : `{{< selfcheck question="${escaped(item.question)}" hint="h" >}}\n${item.model}\n===CHECKS===\n${item.model}\n{{< /selfcheck >}}\n`);
const rendered = (section, items, id) => coverage(items.map(shortcode).join('\n'), sourceExercises(M[section]), { keyedOnly: true })
  .find((verdict) => verdict.id === id)?.status;

const CLF3 = 'In the nuclear industry, chlorine trifluoride is used to prepare uranium hexafluoride, a volatile compound of uranium used in the separation of uranium isotopes. Chlorine trifluoride is prepared by the reaction $\\ce{Cl2(g) + 3F2(g) -> 2ClF3(g)}$. Write the equation that relates the rate expressions for this reaction in terms of the disappearance of Cl₂ and F₂ and the formation of ClF₃. Which equation relates them?';
const term = (coefficient, species) => `${coefficient}\\frac{\\Delta[\\ce{${species}}]}{\\Delta t}`;
const CLF3_KEY = `$\\text{rate} = ${term('+\\frac{1}{2}', 'ClF3')} = ${term('-', 'Cl2')} = ${term('-\\frac{1}{3}', 'F2')}$`;
const CLF3_OPTIONS = [
  `$\\text{rate} = ${term('+2', 'ClF3')} = ${term('-', 'Cl2')} = ${term('-3', 'F2')}$`, // coefficients as multipliers
  `$\\text{rate} = ${term('+\\frac{1}{2}', 'ClF3')} = ${term('', 'Cl2')} = ${term('\\frac{1}{3}', 'F2')}$`, // the reactants' minus signs left out
  CLF3_KEY,
  `$\\text{rate} = ${term('+', 'ClF3')} = ${term('-', 'Cl2')} = ${term('-', 'F2')}$`, // no coefficients
];
const BROMATE = 'The rate of formation of Br₂ is $6.0 \\times 10^{-6}$ mol/L/s in a reaction described by the following net ionic equation: $\\ce{5Br- + BrO3- + 6H+ ->}$ $\\ce{3Br2 + 3H2O}$. Write the equations that relate the rates of consumption of the reactants and the rates of formation of the products. Which equations relate them?';
const BROMATE_KEY = `$${term('-\\frac{1}{5}', 'Br-')} = ${term('-', 'BrO3-')} = ${term('-\\frac{1}{6}', 'H+')} = ${term('\\frac{1}{3}', 'Br2')} = ${term('\\frac{1}{3}', 'H2O')}$`;
const BROMATE_OPTIONS = [
  `$${term('-5', 'Br-')} = ${term('-', 'BrO3-')} = ${term('-6', 'H+')} = ${term('3', 'Br2')} = ${term('3', 'H2O')}$`,
  BROMATE_KEY,
  `$${term('\\frac{1}{5}', 'Br-')} = ${term('', 'BrO3-')} = ${term('\\frac{1}{6}', 'H+')} = ${term('\\frac{1}{3}', 'Br2')} = ${term('\\frac{1}{3}', 'H2O')}$`, // the reactants' minus signs left out
  `$${term('-', 'Br-')} = ${term('-', 'BrO3-')} = ${term('-', 'H+')} = ${term('', 'Br2')} = ${term('', 'H2O')}$`,
];

test('a rate chain reads the same from the page\'s TeX and the source\'s MathML', () => {
  const printed = rateChain('rate = + ( 1 )/( 2 ) ( Δ [ ClF 3 ] )/( Δ t ) = − ( Δ [ Cl 2 ] )/( Δ t ) = − ( 1 )/( 3 ) ( Δ [ F 2 ] )/( Δ t )');
  assert.ok(sameChain(rateChain(CLF3_KEY), printed));
  for (const distractor of CLF3_OPTIONS.filter((option) => option !== CLF3_KEY)) assert.ok(!sameChain(rateChain(distractor), printed), distractor);
  assert.deepEqual(rateChain(BROMATE_KEY).map((entry) => entry.species), ['Br^-', 'BrO3^-', 'H^+', 'Br2', 'H2O']);
  assert.equal(rateChain('$\\Delta H = -92.2\\ \\text{kJ}$'), null, 'no chain, no reading');
  // The order is the source's: the same terms in another order are another chain.
  assert.ok(!sameChain(rateChain(`$${term('-', 'Cl2')} = ${term('+\\frac{1}{2}', 'ClF3')} = ${term('-\\frac{1}{3}', 'F2')}$`), printed));
});

test('12.1: the rate-chain multiple choice is held to the source\'s chain; a distractor keyed is wrong-option', { skip }, () => {
  assert.deepEqual(read(12.1, choice(BROMATE, BROMATE_OPTIONS, BROMATE_KEY)), ['fs-idp40614224#check', 'confirmed']);
  for (const distractor of BROMATE_OPTIONS.filter((option) => option !== BROMATE_KEY)) {
    assert.deepEqual(read(12.1, choice(BROMATE, BROMATE_OPTIONS, distractor)), ['fs-idp40614224#check', 'wrong-option'], distractor);
  }
  // The source prints "Δ[CIF 3]": the corrected chain keyed is a correction (a `key`
  // deviation discloses it, erratum 3548); a distractor keyed is never one.
  assert.deepEqual(read(12.1, choice(CLF3, CLF3_OPTIONS, CLF3_KEY)), ['fs-idm82430624', 'key-differs']);
  for (const distractor of CLF3_OPTIONS.filter((option) => option !== CLF3_KEY)) {
    assert.deepEqual(read(12.1, choice(CLF3, CLF3_OPTIONS, distractor)), ['fs-idm82430624', 'wrong-option'], distractor);
  }
  // The key with EVERY sign exchanged is the same equation times −1 (a second right
  // answer where no "rate =" leads), and two options that are one chain are two right
  // answers: either refuses the item, whatever its key (12.1's checker).
  const negated = `$${term('\\frac{1}{5}', 'Br-')} = ${term('', 'BrO3-')} = ${term('\\frac{1}{6}', 'H+')} = ${term('-\\frac{1}{3}', 'Br2')} = ${term('-\\frac{1}{3}', 'H2O')}$`;
  assert.deepEqual(read(12.1, choice(BROMATE, [BROMATE_OPTIONS[0], BROMATE_KEY, negated, BROMATE_OPTIONS[3]], BROMATE_KEY)), ['fs-idp40614224#check', 'wrong-option']);
  const twin = BROMATE_OPTIONS[3].replace('$-\\frac', '$-1\\frac');
  assert.notEqual(twin, BROMATE_OPTIONS[3]);
  assert.deepEqual(read(12.1, choice(BROMATE, [BROMATE_OPTIONS[0], BROMATE_KEY, BROMATE_OPTIONS[3], twin], BROMATE_KEY)), ['fs-idp40614224#check', 'wrong-option']);
  const filed = DISCLOSED_DEVIATIONS.find((entry) => entry.exercise === 'fs-idm82430624');
  assert.deepEqual([filed.page, filed.kind, filed.erratum], ['content/physical-sciences/chemistry/12-kinetics/01-chemical-reaction-rates.md', 'key', 3548]);
});

test('units read as symbols and powers', () => {
  const rate = unitPowers('mol L^{−1} s^{−1}');
  for (const same of ['mol/L/s', 'mol/(L s)', 'mol L⁻¹ s⁻¹', '$\\text{mol/L/s}$']) assert.equal(unitPowers(same), rate, same);
  for (const other of ['L s/mol', 'mol L s', 'mol/L', 'mol/L/s²']) assert.notEqual(unitPowers(other), rate, other);
  assert.equal(unitPowers('dispersion forces'), null);
  assert.equal(unitPowers('meters/second'), null, 'a unit spelled out is no symbol: 1.4\'s options are read as words');
});

const TABLE = 'A study of the rate of the reaction represented as $\\ce{2A -> B}$ gave the following data, shown in the table above.';
const PART_A = `${TABLE} Determine the average rate of disappearance of *A* between 0.0 s and 10.0 s, and between 10.0 s and 20.0 s.`;
const PART_B = `${TABLE} Estimate the instantaneous rate of disappearance of *A* at 15.0 s from a graph of time versus [*A*]. What are the units of this rate?`;
const PART_C = `${TABLE} Use the rates found in the previous items to determine the average rate of formation of *B* between 0.00 s and 10.0 s, and the instantaneous rate of formation of *B* at 15.0 s.`;
const AMMONIA = 'If the rate of decomposition of ammonia, NH₃, at 1150 K is $2.10 \\times 10^{-6}$ mol/L/s, what is the rate of production of nitrogen and hydrogen?';

test('12.1: part (b) is one self-check carrying the estimate with its unit; dropping it leaves (b) missing', { skip }, () => {
  const estimate = { type: 'selfcheck', question: PART_B, model: 'Instantaneous rate, 15 s = 0.023 mol/L/s.' };
  assert.deepEqual(read(12.1, estimate), ['fs-idm57147216(b)', 'verbatim']);
  const a1 = fillin(`${PART_A} Enter the average rate between 0.0 s and 10.0 s in mol/L/s.`, '0.0375');
  const a2 = fillin(`${PART_A} Enter the average rate between 10.0 s and 20.0 s in mol/L/s.`, '0.0265');
  const c1 = fillin(`${PART_C} Enter the average rate of formation of *B* between 0.00 s and 10.0 s in mol/L/s.`, '0.0188');
  const c2 = { type: 'selfcheck', question: PART_C, model: 'Instantaneous rate for B formation = 0.012 mol/L/s.' };
  assert.equal(rendered(12.1, [a1, a2, estimate, c1, c2], 'fs-idm57147216(b)'), 'rendered');
  assert.equal(rendered(12.1, [a1, a2, c1, c2], 'fs-idm57147216(b)'), 'missing');
});

test('12.1: a units question as a multiple choice of units (the form is retired on this page; the reader stays)', { skip }, () => {
  const options = ['mol/L', 'mol/L/s', 'L s/mol', 'mol L s'];
  assert.deepEqual(read(12.1, choice(PART_B, options, 'mol/L/s')), ['fs-idm57147216(b)', 'confirmed']);
  for (const wrong of ['mol/L', 'L s/mol', 'mol L s']) assert.deepEqual(read(12.1, choice(PART_B, options, wrong)), ['fs-idm57147216(b)', 'key-differs'], wrong);
});

test('named quantities: an interval, a heading word, a formula after the number', () => {
  const intervals = labelledQuantities('average rate, 0 − 10 s = 0.0375 mol L^{−1} s^{−1} ; average rate, 10 − 20 s = 0.0265 mol L^{−1} s^{−1} ');
  assert.equal(askedQuantity(intervals, 'Enter the average rate between 10.0 s and 20.0 s in mol/L/s.').numeral.printed, '0.0265');
  assert.equal(askedQuantity(intervals, 'Enter the average rate in mol/L/s.'), null);
  const words = labelledQuantities('average rate for B formation = 0.0188 mol L^{−1} s^{−1} ; instantaneous rate for B formation = 0.012 mol L^{−1} s^{−1}');
  assert.equal(askedQuantity(words, 'Enter the instantaneous rate of formation of *B* at 15.0 s in mol/L/s.').numeral.printed, '0.012');
  const formulas = labelledQuantities('1.05 × 10^{−6} mol/L/s, N _2 and 3.15 × 10^{−6} mol/L/s, H _2 .');
  assert.equal(askedQuantity(formulas, 'Enter the rate of production of H₂ in mol/L/s.').numeral.printed, '3.15 × 10^{−6}');
  // A heading that is only a symbol is the mole-fraction reader's (11.4), and one quantity is no set.
  assert.deepEqual(labelledQuantities('X CH 3 OH = 0.590 ; X C 2 H 5 OH = 0.410'), []);
  assert.deepEqual(labelledQuantities('instantaneous rate, 15 s = 0.023 mol L^{−1} s^{−1} '), []);
});

test('12.1: each fill-in is held to the quantity its closing names', { skip }, () => {
  const held = (question, right, wrong, id) => {
    assert.deepEqual(read(12.1, fillin(question, right)), [id, 'confirmed'], question);
    assert.deepEqual(read(12.1, fillin(question, wrong)), [id, 'key-differs'], `${question} keyed ${wrong}`);
  };
  held(`${PART_A} Enter the average rate between 0.0 s and 10.0 s in mol/L/s.`, '0.0375', '0.0265', 'fs-idm57147216(a)');
  held(`${PART_A} Enter the average rate between 10.0 s and 20.0 s in mol/L/s.`, '0.0265', '0.0375', 'fs-idm57147216(a)');
  held(`${PART_C} Enter the average rate of formation of *B* between 0.00 s and 10.0 s in mol/L/s.`, '0.0188', '0.012', 'fs-idm57147216(c)');
  held(`${AMMONIA} Enter the rate of production of N₂ in mol/L/s.`, '1.05\\times10^{-6}', '3.15\\times10^{-6}', 'fs-idm24260800#check');
  held(`${AMMONIA} Enter the rate of production of H₂ in mol/L/s.`, '3.15\\times10^{-6}', '1.05\\times10^{-6}', 'fs-idm24260800#check');
  // A closing that names none of the quantities is refused.
  assert.deepEqual(read(12.1, fillin(`${PART_A} Enter the average rate in mol/L/s.`, '0.0375')), ['fs-idm57147216(a)', 'key-differs']);
});

test('12.1: a part with named quantities is rendered only when each has its item', { skip }, () => {
  const a1 = fillin(`${PART_A} Enter the average rate between 0.0 s and 10.0 s in mol/L/s.`, '0.0375');
  const a2 = fillin(`${PART_A} Enter the average rate between 10.0 s and 20.0 s in mol/L/s.`, '0.0265');
  const c1 = fillin(`${PART_C} Enter the average rate of formation of *B* between 0.00 s and 10.0 s in mol/L/s.`, '0.0188');
  const c2 = { type: 'selfcheck', question: PART_C, model: 'Instantaneous rate for B formation = 0.012 mol/L/s.' };
  const n2 = fillin(`${AMMONIA} Enter the rate of production of N₂ in mol/L/s.`, '1.05\\times10^{-6}');
  const h2 = fillin(`${AMMONIA} Enter the rate of production of H₂ in mol/L/s.`, '3.15\\times10^{-6}');
  const page = [a1, a2, c1, c2, n2, h2];
  for (const id of ['fs-idm57147216(a)', 'fs-idm57147216(c)', 'fs-idm24260800#check']) assert.equal(rendered(12.1, page, id), 'rendered', id);
  assert.equal(rendered(12.1, [a1, c1, c2, n2, h2], 'fs-idm57147216(a)'), 'missing', 'the second interval has no fill-in');
  assert.equal(rendered(12.1, [a1, a2, c1, n2, h2], 'fs-idm57147216(c)'), 'missing', 'the instantaneous rate of B has no self-check');
  assert.equal(rendered(12.1, [a1, a2, c1, { ...c2, model: 'Average rate for B formation = 0.0188 mol/L/s.' }, n2, h2], 'fs-idm57147216(c)'), 'missing', 'the self-check prints the fill-in\'s quantity, not the second');
  assert.equal(rendered(12.1, [a1, a2, c1, c2, n2], 'fs-idm24260800#check'), 'missing', 'H₂ has no fill-in');
});

test('12.2: a simulation part keyed with a word is a self-check, held to the word', { skip }, () => {
  const lead = 'In the [PhET Reactions & Rates](http://openstax.org/l/16PHETreaction) interactive, on the Many Collisions tab, set up a simulation with 15 molecules of A and 10 molecules of BC. Select “Show Bonds” under Options.';
  const question = `${lead} Leave the Initial Temperature at the default setting. Observe the reaction. Is the rate of reaction fast or slow?`;
  assert.deepEqual(read(12.2, { type: 'selfcheck', question, model: 'The rate of reaction is very slow.' }), ['fs-idm49710224(a)', 'reworded']);
  assert.deepEqual(read(12.2, { type: 'selfcheck', question, model: 'The rate of reaction is fast.' }), ['fs-idm49710224(a)', 'diverges']);
  assert.equal(rendered(12.2, [{ type: 'selfcheck', question, model: 'The rate of reaction is very slow.' }], 'fs-idm49710224(a)'), 'rendered');
});
