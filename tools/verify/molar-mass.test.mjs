import test from 'node:test';
import assert from 'node:assert/strict';
import { loadElements } from '../lib/elements.mjs';
import { asksMassAlone, calculationTable, massAsk, molarMass, pageMasses, statesNoNumber } from './molar-mass.mjs';

const elements = loadElements();

test('a subtotal keeps its mass’s decimal places and the sum rounds to the coarsest subtotal', () => {
  const pentane = molarMass('C5H12', elements);
  assert.deepEqual(pentane.terms, [
    { symbol: 'C', count: 5, mass: '12.011', subtotal: '60.055' },
    { symbol: 'H', count: 12, mass: '1.0080', subtotal: '12.0960' },
  ]);
  assert.equal(pentane.exact, '72.1510');
  assert.equal(pentane.sum, '72.151');
  // Chlorine and sulfur print two places, so a sum that holds one has two.
  assert.equal(molarMass('Si2H2Cl4', elements).sum, '199.99');
  assert.equal(molarMass('Sc2(SO4)3', elements).sum, '378.08');
  assert.equal(molarMass('S8', elements).sum, '256.48');
  assert.equal(molarMass('P4', elements).sum, '123.896');
});

test('groups, hydrates, and typed or printed subscripts are one formula', () => {
  assert.equal(molarMass('Ca(NO3)2', elements).sum, '164.086');
  assert.equal(molarMass('Ca(NO₃)₂', elements).sum, '164.086');
  assert.equal(molarMass('CuSO4·5H2O', elements).sum, '249.68');
  assert.deepEqual(molarMass('CH3CO2H', elements).terms.map((term) => `${term.symbol}${term.count}`), ['C2', 'H4', 'O2']);
});

test('what is not one formula of elements with standard atomic weights is refused, with the reason', () => {
  assert.throws(() => molarMass('water', elements), /not a formula/);
  assert.throws(() => molarMass('SO42-', elements), /more than one way/);
  assert.throws(() => molarMass('Tc2O7', elements), /technetium has no standard atomic weight/);
  assert.throws(() => molarMass('^14CO2', elements), /one isotope/);
});

test('the calculation table lists each element once and bolds the total', () => {
  assert.equal(calculationTable(molarMass('NaCl', elements)), [
    '| Element | Quantity | Average atomic mass (amu) | Subtotal (amu) |',
    '|---|---|---|---|',
    '| Na | 1 | 22.990 | 22.990 |',
    '| Cl | 1 | 35.45 | 35.45 |',
    '| | | **Total** | **58.44** |',
  ].join('\n'));
  assert.match(calculationTable(molarMass('NaCl', elements), { unit: 'g/mol' }), /Subtotal \(g\/mol\)/);
  const worded = calculationTable(molarMass('NaCl', elements), { label: 'Formula mass', headers: ['Element', 'Quantity', 'Molar mass (g/mol element)', 'Subtotal (g/mol compound)'] });
  assert.match(worded, /^\| Element \| Quantity \| Molar mass \(g\/mol element\) \| Subtotal \(g\/mol compound\) \|/);
  assert.match(worded, /\| \| \| \*\*Formula mass\*\* \| \*\*58\.44\*\* \|$/);
  assert.throws(() => calculationTable(molarMass('NaCl', elements), { headers: ['a', 'b'] }), /four columns/);
});

test('massAsk reads a question that asks the mass of one formula and gives no other number', () => {
  assert.equal(massAsk('Calculate the molecular or formula mass of the following: Ca(NO₃)₂. Enter the formula mass in amu.', elements), 'Ca(NO₃)₂');
  assert.equal(massAsk('Calculate the molar mass of the following: the anesthetic halothane, C₂HBrClF₃. Enter the molar mass in g/mol.', elements), 'C₂HBrClF₃');
  assert.equal(massAsk('Calculate the molar mass of the following: S₈. Enter the molar mass in g/mol.', elements), 'S₈');
  // No formula on the page to read: the item names a drawing.
  assert.equal(massAsk('Determine the molecular mass of the following compound, shown in the figure above. Enter the molecular mass in amu.', elements), null);
  // A sample size makes it a calculation, not a formula mass.
  assert.equal(massAsk('What is the molar mass of a compound if 0.3384 mol of ZrSiO₄ weighs 62.03 g?', elements), null);
  // Not a mass ask at all.
  assert.equal(massAsk('How many moles of H₂O are in the sample?', elements), null);
  // English words that are also symbols are not formulas.
  assert.equal(massAsk('In the figure, what is the molar mass? He says No.', elements), null);
  // Two formulas: which one is asked is a judgment.
  assert.equal(massAsk('Which has the greater molar mass, CO₂ or SO₂?', elements), null);
});

test('pageMasses sets the table’s value beside each key it can read', () => {
  const page = [
    '{{< fillin',
    '  question="Calculate the molar mass of the following: C₅H₁₂. Enter the molar mass in g/mol."',
    '  answer="72.150"',
    '>}}',
    '',
    '{{< fillin question="Calculate the molecular mass of the following: H₂O. Enter the molecular mass in amu." answer="18.015" >}}',
    '{{< fillin question="How many grams are in 2.00 mol of H₂O?" answer="36.0" >}}',
  ].join('\n');
  assert.deepEqual(pageMasses(page, elements), [
    { line: 1, formula: 'C₅H₁₂', key: '72.150', table: '72.151', agrees: false, tie: false },
    { line: 6, formula: 'H₂O', key: '18.015', table: '18.015', agrees: true, tie: false },
  ]);
});

test('asksMassAlone is true of a mass asked for itself, drawn or written, and false once the question gives a number', () => {
  assert.equal(asksMassAlone('Determine the molecular mass of the following compound, shown in the figure above. Enter the molecular mass in amu.'), true);
  assert.equal(asksMassAlone('Calculate the molar mass of the following: C₅H₁₂. Enter the molar mass in g/mol.'), true);
  assert.equal(asksMassAlone('What is the molar mass of a compound if 0.3384 mol of it weighs 62.03 g?'), false);
  assert.equal(asksMassAlone('How many moles of H₂O are in the sample?'), false);
  // No number of its own, though it asks another mass: every digit of the answer is the table's.
  assert.equal(statesNoNumber('What is the total mass (amu) of carbon in the following molecule? CH₃CH₂CH₂CH₂CH₃.'), true);
  assert.equal(statesNoNumber('What is the total mass (amu) of carbon in 2 molecules of CH₄?'), false);
});
