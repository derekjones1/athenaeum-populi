// Chemistry 2e Sections 11.3–11.5, read by both source gates against the
// pinned CNXML itself (docs/briefs/chemistry/run.md §1 step 6a, the hand
// probe): a Check Your Learning that leans on a worked example's QUESTION,
// not on its Check Your Learning (the automatic probe's "read as another");
// a figure of another section named by a describing phrase; a part answered
// with two quantities, each fill-in held to its own; a sentence answer that
// is one value printed twice; and a table answer with two cells traded.
// Each is held to the key the source prints and refuses a wrong one.
// Skipped where the bundle is not checked out (CI fetches it).
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { judgeKeyedUnit, swappedWords } from './verify-source-keys.mjs';
import { cancelShortfall, cancelSpans, coverage, sourceExercises, struckEquations } from './verify-source-coverage.mjs';
import { keyedUnits, withoutCrossReference } from '../lib/keyed-units.mjs';
import { probeModule } from '../source/chemistry-gate-probe.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const MODULES = { 3.3: 'm68703', 11.3: 'm68782', 11.4: 'm68783', 11.5: 'm68784' };
const file = (id) => path.join(root, 'sources/openstax/osbooks-chemistry-bundle/modules', id, 'index.cnxml');
const skip = !Object.values(MODULES).every((id) => existsSync(file(id)));
const M = skip ? {} : Object.fromEntries(Object.entries(MODULES).map(([key, id]) => [key, readFileSync(file(id), 'utf8')]));
const units = skip ? {} : Object.fromEntries(Object.entries(M).map(([key, xml]) => [key, keyedUnits(xml)]));
const judge = (section, item) => judgeKeyedUnit(item, units[section]);
const read = (section, item) => {
  const verdict = judge(section, item);
  return verdict ? [verdict.exercise.id, verdict.status] : null;
};
const fillin = (question, answer, form = 'sig-figs:3 last-digit:1') => ({ type: 'fillin', question, answer, form });
const shortcode = (item) => `{{< fillin question="${item.question.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}" answer="${item.answer}" answerForm="${item.form}" hint="h" >}}\n`;
const rendered = (section, items, id) => coverage(items.map(shortcode).join('\n'), sourceExercises(M[section]), { keyedOnly: true })
  .find((verdict) => verdict.id === id)?.status;

const AMMONIA = 'What are the mole fraction and molality of a solution that contains 0.850 g of ammonia, NH₃, dissolved in 125 g of water?';

test('a Check Your Learning leans on the part of the linked example that names its thing', { skip }, () => {
  const antifreeze = units[11.4].find((unit) => unit.id === 'fs-idp5504000#check');
  assert.equal(antifreeze.leansOn, 'fs-idp183990080', 'the antifreeze is in Example 1\'s question, not its ammonia Check Your Learning');
  const tea = units[3.3].find((unit) => unit.id === 'fs-idm64107376#check');
  assert.equal(tea.leansOn, 'fs-idm98982768#check', 'the sweetened tea is the linked example\'s Check Your Learning (3.3)');
  assert.deepEqual(probeModule(M[11.4]).findings, [], 'the probe no longer reads the antifreeze item as the ammonia one');
});

test('11.4: the antifreeze item, bare or with its data restated, is its own unit', { skip }, () => {
  const bare = 'Assuming ideal solution behavior, what is the boiling point of the antifreeze described in the example “Calculating Mole Fraction and Molality” above? Enter the boiling point in degrees Celsius.';
  const restated = 'Assuming ideal solution behavior, what is the boiling point of the antifreeze described in the example “Calculating Mole Fraction and Molality” above? (In that example, the antifreeze is a solution of 2.22 × 10³ g of ethylene glycol, C₂H₄(OH)₂, in 2.00 × 10³ g of water.) Enter the boiling point in degrees Celsius.';
  assert.notEqual(withoutCrossReference(restated), null, 'a same-page example is a reference the gate reads around');
  for (const question of [bare, restated]) {
    assert.deepEqual(read(11.4, fillin(question, '109.2', 'sig-figs:4 last-digit:1')), ['fs-idp5504000#check', 'confirmed']);
    assert.deepEqual(read(11.4, fillin(question, '100.12', 'sig-figs:5 last-digit:1')), ['fs-idp5504000#check', 'key-differs']);
    const page = [fillin(`${AMMONIA} Enter the molality in mol/kg.`, '0.399'), fillin(question, '109.2', 'sig-figs:4 last-digit:1')];
    assert.equal(rendered(11.4, page, 'fs-idp5504000#check'), 'rendered');
    assert.equal(rendered(11.4, page, 'fs-idp183990080#check'), 'rendered');
  }
});

test('11.4: a figure of another section named by a describing phrase is read around', { skip }, () => {
  const question = 'What is the microscopic explanation for the macroscopic behavior illustrated in the photograph of oil and water in a glass in [Section 11.3 Solubility](/physical-sciences/chemistry/11-solutions-and-colloids/03-solubility/)?';
  const model = 'The strength of the bonds between like molecules is stronger than the strength between unlike molecules. Therefore, some regions will exist in which the water molecules will exclude oil molecules and other regions will exist in which oil molecules will exclude water molecules, forming a heterogeneous region.';
  assert.deepEqual(read(11.4, { type: 'selfcheck', question, model }), ['fs-idp128725184', 'verbatim']);
});

test('11.4: each quantity of a two-quantity part is held to its own number', { skip }, () => {
  const held = (question, right, wrong, id, form = 'sig-figs:3 last-digit:1') => {
    assert.deepEqual(read(11.4, fillin(question, right, form)), [id, 'confirmed'], question);
    assert.deepEqual(read(11.4, fillin(question, wrong, form)), [id, 'key-differs'], `${question} keyed ${wrong}`);
  };
  // A mole fraction and a molality with no labels: "7.14 × 10⁻³; 0.399 m".
  held(`${AMMONIA} Enter the mole fraction of NH₃.`, '7.14\\times10^{-3}', '0.399', 'fs-idp183990080#check');
  held(`${AMMONIA} Enter the molality in mol/kg.`, '0.399', '7.14\\times10^{-3}', 'fs-idp183990080#check');
  // "The mole fraction of HNO₃ is 0.378. The mole fraction of H₂O is 0.622."
  const nitric = 'What are the mole fractions of HNO₃ and water in a concentrated solution of nitric acid (68.0% HNO₃ by mass)? Answer the question.';
  held(`${nitric} Enter the mole fraction of HNO₃.`, '0.378', '0.622', 'fs-idp169432880(b)');
  held(`${nitric} Enter the mole fraction of H₂O.`, '0.622', '0.378', 'fs-idp169432880(b)');
  // The source's MathML X with the formula as its subscript, and its "CH 2 CI 2" misprint.
  const lead = 'Calculate the mole fraction of the solute and the solvent:';
  held(`${lead} 0.710 kg of sodium carbonate (washing soda), Na₂CO₃, in 10.0 kg of water—a saturated solution at 0 °C. Enter the mole fraction of H₂O.`, '0.988', '0.0119', 'fs-idm61658912(a)');
  held(`${lead} 25 g of Cl₂ in 125 g of dichloromethane, CH₂Cl₂. Enter the mole fraction of Cl₂.`, '0.192', '0.808', 'fs-idm61658912(c)');
  held(`${lead} 25 g of Cl₂ in 125 g of dichloromethane, CH₂Cl₂. Enter the mole fraction of CH₂Cl₂.`, '0.808', '0.192', 'fs-idm61658912(c)');
  // A heading before the first formula-and-colon pair: "Vapor pressures are: CH₃OH: 55 torr; C₂H₅OH: 18 torr".
  const vapor = 'The vapor pressure of methanol, CH₃OH, is 94 torr at 20 °C. The vapor pressure of ethanol, C₂H₅OH, is 44 torr at the same temperature. Ethanol and methanol form a solution that behaves like an ideal solution. Calculate the vapor pressure of methanol and of ethanol above the solution at 20 °C.';
  held(`${vapor} Enter the vapor pressure of CH₃OH in torr.`, '55', '18', 'fs-idp241232(b)', 'sig-figs:2 last-digit:1');
  held(`${vapor} Enter the vapor pressure of C₂H₅OH in torr.`, '18', '55', 'fs-idp241232(b)', 'sig-figs:2 last-digit:1');
  const fractions = 'The vapor pressure of methanol, CH₃OH, is 94 torr at 20 °C. The vapor pressure of ethanol, C₂H₅OH, is 44 torr at the same temperature. Calculate the mole fraction of methanol and of ethanol in a solution of 50.0 g of methanol and 50.0 g of ethanol.';
  held(`${fractions} Enter the mole fraction of C₂H₅OH.`, '0.410', '0.590', 'fs-idp241232(a)');
  // A negative temperature keyed without its sign is refused.
  assert.deepEqual(read(11.4, fillin('Assuming complete dissociation and ideal solution behavior, calculate the freezing point of a solution of 0.724 g of CaCl₂ in 175 g of water. Enter the freezing point in degrees Celsius.', '0.208')), ['fs-idp86700768#check', 'key-differs']);
});

test('11.3: one value printed twice is one item, held under g/L to the g/L number', { skip }, () => {
  const question = 'Exposing a 100.0 mL sample of water at 0 °C to an atmosphere containing a gaseous solute at 152 torr resulted in the dissolution of $1.45 \\times 10^{-3}$ g of the solute. Use Henry’s law to determine the solubility of this gaseous solute when its pressure is 760 torr. Enter the solubility in g/L.';
  assert.deepEqual(read(11.3, fillin(question, '0.0725', 'sig-figs:3 last-digit:0')), ['fs-idp3359488#check', 'confirmed']);
  assert.deepEqual(read(11.3, fillin(question, '7.25\\times10^{-3}', 'sig-figs:3 last-digit:0')), ['fs-idp3359488#check', 'key-differs']);
  assert.deepEqual(read(11.3, fillin(question, '100.0', 'sig-figs:4 last-digit:0')), ['fs-idp3359488#check', 'key-differs']);
});

test('11.5: a table answer carried whole is the source\'s, and two cells traded are a swap', { skip }, () => {
  const rows = [['starch dispersion', 'starch', 'water'], ['smoke', 'solid particles', 'air'], ['fog', 'water', 'air'], ['pearl', 'water', 'calcium carbonate (CaCO₃)'],
    ['whipped cream', 'air', 'cream'], ['floating soap', 'air', 'soap'], ['jelly', 'fruit juice', 'pectin gel'], ['milk', 'butterfat', 'water'],
    ['ruby', 'chromium(III) oxide (Cr₂O₃)', 'aluminum oxide (Al₂O₃)']];
  const table = (body) => ['| Colloidal System | Dispersed Phase | Dispersion Medium |', '|---|---|---|', ...body.map((row) => `| ${row.join(' | ')} |`)].join(' ');
  const question = 'Identify the dispersed phase and the dispersion medium in each of the following colloidal systems: starch dispersion, smoke, fog, pearl, whipped cream, floating soap, jelly, milk, and ruby.';
  const right = judge(11.5, { type: 'selfcheck', question, model: table(rows) });
  assert.deepEqual([right.exercise.id, right.status, right.swaps], ['fs-idm110325696', 'verbatim', undefined]);
  const traded = rows.map((row) => (row[0] === 'milk' || row[0] === 'pearl' ? [row[0], row[2], row[1]] : row));
  const solution = units[11.5].find((unit) => unit.id === 'fs-idm110325696').answer;
  assert.deepEqual(swappedWords(table(traded), solution), [['water calcium carbonate caco 3', 'calcium carbonate caco 3 water'], ['butterfat water', 'water butterfat']]);
  assert.ok(judge(11.5, { type: 'selfcheck', question, model: table(traded) }).swaps, 'the verdict carries the swaps, and verify:source-keys fails them');
  // A word added or dropped alone is no trade.
  assert.deepEqual(swappedWords(table(rows).replace('| milk | butterfat | water |', '| milk | butterfat | water and |'), solution), []);
});

test('a unit-cancel stroke the source prints is kept on the page as \\cancel', { skip }, () => {
  assert.equal(struckEquations(M[11.4]), 3, '11.4 strikes units out in three math blocks');
  const one = '$$0.850\\ \\cancel{\\text{g}}\\ \\ce{NH3} \\times \\frac{1\\ \\text{mol}}{17.031\\ \\cancel{\\text{g}}} = 0.0499\\ \\text{mol}$$\n';
  assert.equal(cancelSpans(`${one}\n${one}\n${one}`), 3);
  assert.equal(cancelShortfall(M[11.4], `${one}\n${one}\n${one}`), null);
  assert.match(cancelShortfall(M[11.4], one.replace(/\\cancel\{(\\text\{g\})\}/g, '$1')), /strikes out units in 3 math block\(s\) and the page sets 0/);
  // A stroke inside an exercise the source keys nothing for is not owed: the page omits the exercise.
  const struck = '<m:math><m:menclose notation="horizontalstrike"><m:mi>g</m:mi></m:menclose></m:math>';
  assert.equal(struckEquations(`<exercise><problem><para>${struck}</para></problem></exercise>`), 0);
  assert.equal(struckEquations(`<exercise><problem><para>x</para></problem><solution><para>${struck}</para></solution></exercise>`), 1);
  assert.equal(struckEquations(`<equation>${struck}${struck}</equation>`), 1, 'one display, however many strokes');
});
