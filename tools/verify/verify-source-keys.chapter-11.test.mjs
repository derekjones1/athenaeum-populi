// Chemistry 2e chapter 11's new shapes, read by both source gates against the
// pinned CNXML itself (docs/briefs/chemistry/run.md §1 step 6a, the hand
// probe): two options one of which repeats a word the other holds once
// ("ion-dipole forces" beside "dipole-dipole forces"), a yes or no changed at
// the start of a model answer, one figure label for another in a model
// answer, an equation key with a state the source prints otherwise, and a
// lettered answer carried whole by a self-check that asks the lead-in alone.
// Each is held to the key the source prints and refuses a wrong one.
// Skipped where the bundle is not checked out (CI fetches it).
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { judgeKeyedUnit, judgeSelfcheck, leadInExercise, optionsNamedIn, readModule, swappedWords } from './verify-source-keys.mjs';
import { coverage, sourceExercises } from './verify-source-coverage.mjs';
import { keyedUnits } from '../lib/keyed-units.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const MODULES = { 1: 'm68778', 2: 'm68781' };
const file = (id) => path.join(root, 'sources/openstax/osbooks-chemistry-bundle/modules', id, 'index.cnxml');
const skip = !Object.values(MODULES).every((id) => existsSync(file(id)));
const M = skip ? {} : Object.fromEntries(Object.entries(MODULES).map(([key, id]) => [key, readFileSync(file(id), 'utf8')]));
const units = skip ? {} : Object.fromEntries(Object.entries(M).map(([key, xml]) => [key, keyedUnits(xml)]));
const judge = (section, item) => judgeKeyedUnit(item, units[section]);
const status = (section, item) => judge(section, item)?.status;
const mc = (question, answer, options) => ({ type: 'multiplechoice', question, answer, options });

test('an option that repeats a word is named only where the answer repeats it', () => {
  const forces = ['dispersion forces', 'dipole-dipole forces', 'hydrogen bonding', 'ion-dipole forces'];
  assert.deepEqual(optionsNamedIn(' ion dipole forces ', forces), ['ion-dipole forces']);
  assert.deepEqual(optionsNamedIn(' dipole dipole forces ', forces), ['dipole-dipole forces']);
  // The scattered reading still holds a word printed twice apart.
  assert.deepEqual(optionsNamedIn(' the dipole of one and the dipole of the other give forces ', ['dipole-dipole forces']), ['dipole-dipole forces']);
});

test('a word changed at the edge of a model answer, or one label for another, is a swap', () => {
  const ideal = 'No, an ideal solution is formed with no appreciable heat release or consumption.';
  assert.deepEqual(swappedWords(`Yes, ${ideal.slice(4)}`, ideal), [['no', 'yes']]);
  assert.deepEqual(swappedWords(ideal, ideal), []);
  assert.deepEqual(swappedWords('The process is endothermic as the solution is consuming cold.', 'The process is endothermic as the solution is consuming heat.'), [['heat', 'cold']]);
  const sketch = 'Fe(NO₃)₃ is a strong electrolyte, thus it should completely dissociate into Fe³⁺ and NO₃⁻ ions. Therefore, (z) best represents the solution.';
  assert.deepEqual(swappedWords(sketch.replace('(z)', '(y)'), sketch), [['z', 'y']], 'one letter for another is no typo');
  assert.deepEqual(swappedWords('so the gas was a weak and diffuse blue cloud', 'so the gas was an weak and diffuse blue cloud'), [], 'a function word set right is still a typo');
});

test('11.1: the force exercise keeps ion-dipole apart from dipole-dipole, and the KNO₃ choices hold their keys', { skip }, () => {
  const forces = ['dispersion forces', 'dipole-dipole forces', 'hydrogen bonding', 'ion-dipole forces'];
  const lead = 'Indicate the most important types of intermolecular attractions in the following solution:';
  const first = `${lead} The solution in the figure of potassium dichromate mixed with water above.`;
  const read = judge(1, mc(first, 'ion-dipole forces', forces));
  assert.deepEqual([read?.exercise.id, read?.status], ['fs-idm6481344(a)', 'confirmed']);
  assert.equal(status(1, mc(first, 'dipole-dipole forces', forces)), 'key-differs');
  assert.equal(status(1, mc(`${lead} Cl₂(*g*) in Br₂(*l*).`, 'dispersion forces', forces)), 'confirmed');
  assert.equal(status(1, mc(`${lead} Cl₂(*g*) in Br₂(*l*).`, 'dipole-dipole forces', forces)), 'key-differs');
  assert.equal(status(1, mc(`${lead} NO(*l*) in CO(*l*).`, 'ion-dipole forces', forces)), 'key-differs');
  const page = `{{< multiplechoice question="${first}" answer="ion-dipole forces" hint="h" >}}\n${forces.join('\n')}\n{{< /multiplechoice >}}\n`;
  assert.equal(coverage(page, sourceExercises(M[1]), { keyedOnly: true }).find((verdict) => verdict.id === 'fs-idm6481344(a)')?.status, 'rendered');
  const kno3 = 'When KNO₃ is dissolved in water, the resulting solution is significantly colder than the water was originally.';
  assert.equal(status(1, mc(`${kno3} Is the dissolution of KNO₃ an endothermic or an exothermic process?`, 'endothermic', ['endothermic', 'exothermic'])), 'confirmed');
  assert.equal(status(1, mc(`${kno3} Is the dissolution of KNO₃ an endothermic or an exothermic process?`, 'exothermic', ['endothermic', 'exothermic'])), 'key-differs');
  assert.equal(status(1, mc(`${kno3} Is the resulting solution an ideal solution?`, 'no', ['yes', 'no'])), 'confirmed');
  assert.equal(status(1, mc(`${kno3} Is the resulting solution an ideal solution?`, 'yes', ['yes', 'no'])), 'key-differs');
  const ideal = { type: 'selfcheck', question: `${kno3} Is the resulting solution an ideal solution?`, model: 'Yes, an ideal solution is formed with no appreciable heat release or consumption.' };
  assert.deepEqual(judge(1, ideal)?.swaps, [['no', 'yes']], 'the changed yes or no rides on the verdict, and verify:source-keys fails it');
});

test('11.2: an equation key with a state the source prints otherwise is refused', { skip }, () => {
  const question = 'Consider the solutions presented in the figure above: Write a balanced chemical equation showing the products of the dissolution of Fe(NO₃)₃.';
  const equation = (answer) => ({ type: 'textin', question, answer, form: 'equation' });
  assert.equal(status(2, equation('Fe(NO₃)₃(s) ⟶ Fe³⁺(aq) + 3NO₃⁻(aq)')), 'confirmed');
  assert.equal(status(2, equation('Fe(NO₃)₃ ⟶ Fe³⁺ + 3NO₃⁻')), 'confirmed', 'a key without states is no state that differs');
  assert.equal(status(2, equation('Fe(NO₃)₃(s) ⟶ Fe³⁺(aq) + 3NO₃⁻(s)')), 'key-differs');
  assert.equal(status(2, equation('Fe(NO₃)₃(s) ⟶ Fe³⁺(aq) + 2NO₃⁻(aq)')), 'key-differs');
  const sketches = ['(x)', '(y)', '(z)'];
  const which = 'Consider the solutions presented in the figure above: Which of the following sketches best represents the ions in a solution of Fe(NO₃)₃(*aq*)?';
  assert.equal(status(2, mc(which, '(z)', sketches)), 'confirmed');
  assert.equal(status(2, mc(which, '(y)', sketches)), 'key-differs');
});

test('11.2: a lettered answer carried whole under the lead-in alone is read against the whole exercise', { skip }, () => {
  const source = readModule(M[2]);
  const lead = 'What is the expected electrical conductivity of the following solutions?';
  assert.equal(leadInExercise(lead, source.exercises)?.id, 'fs-idp40604768');
  assert.equal(leadInExercise(`${lead} (The four solutions of the items above.)`, source.exercises)?.id, 'fs-idp40604768');
  assert.equal(judgeSelfcheck({ question: lead, model: 'x' }, source).status, 'unmatched', 'only a keyed-only book reads the lead-in');
  const model = 'The first solution: high conductivity (solute is an ionic compound that will dissociate when dissolved); the second: high conductivity (solute is a strong acid and will ionize completely when dissolved); the third: nonconductive (solute is a covalent compound, neither acid nor base, unreactive towards water); the fourth: low conductivity (solute is a weak base and will partially ionize when dissolved).';
  const item = { type: 'selfcheck', question: `${lead} (The four solutions of the items above.)`, model };
  assert.equal(judgeKeyedUnit(item, units[2]), null, 'no one part: the item falls through to the whole exercise');
  const read = judgeSelfcheck(item, source, { leadIn: true });
  assert.deepEqual([read.exercise.id, read.status], ['fs-idp40604768', 'reworded']);
  assert.deepEqual(swappedWords(model, read.exercise.solution), [], 'the parts named by position');
  const wrong = model.replace('the fourth: low', 'the fourth: high');
  assert.equal(swappedWords(wrong, read.exercise.solution).length, 1, 'a changed conductivity is a swap verify:source-keys fails');
  const conductivity = ['high conductivity', 'low conductivity', 'nonconductive'];
  assert.equal(status(2, mc(`${lead.replace('solutions?', 'solution?')} NH₃(*aq*).`, 'low conductivity', conductivity)), 'confirmed');
  assert.equal(status(2, mc(`${lead.replace('solutions?', 'solution?')} NH₃(*aq*).`, 'high conductivity', conductivity)), 'key-differs');
});
