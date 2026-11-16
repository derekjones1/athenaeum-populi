import test from 'node:test';
import assert from 'node:assert/strict';
import { amountHintProblem, heatAsk, isNegativeKey } from './heat-ask.mjs';

test('"how much heat is produced / released / evolved / given off" asks an amount', () => {
  for (const question of [
    'How much heat was produced by the combustion of the benzene sample? Enter the heat in kilojoules.',
    'How much heat is produced by this precipitation reaction? What assumptions did you make to determine your value?',
    'How many kilojoules of heat will be released when exactly 1 mole of manganese, Mn, is burned to form Mn₃O₄(*s*) at standard state conditions?',
    'Using the data in [Appendix G](/physical-sciences/chemistry/appendices/g-standard-thermodynamic-properties-for-selected-substances/), determine how much heat is produced by the decomposition of exactly 1 mole of H₂O₂ under standard conditions.',
    'How much heat is evolved in the production of exactly 1 mole of TiO₂(*s*) under standard state conditions?',
    'How much heat, in kilojoules, is given off when 2.00 g of the fuel burns?',
    'Calculate the heat released when 25.0 g of the solid dissolves.',
  ]) assert.equal(heatAsk(question), 'amount', question);
});

test('q, ΔH, an enthalpy change, and the heat involved are signed; a heat the stem states is not what it asks', () => {
  for (const question of [
    // 5.3: the stem states its heat and asks the enthalpy change.
    'When 1.34 g Zn(*s*) reacts with 60.0 mL of 0.750 M HCl(*aq*), 3.14 kJ of heat are produced. Determine the enthalpy change per mole of zinc reacting for the reaction: $\\ce{Zn(s) + 2HCl(aq) -> ZnCl2(aq) + H2(g)}$.',
    'What is the approximate amount of heat involved in the dissolution, assuming the specific heat of the resulting solution is 4.18 J/g °C? Enter the heat, $q$, in kilojoules.',
    'How much heat is involved in the dissolution of the KCl?',
    'What is the enthalpy of combustion per mole of methane under these conditions?',
    'Calculate $\\Delta H$ for the reaction.',
    // A source stem prints q plain.
    'What is q for the dissolution of 3.00 g of the salt?',
    // Two asks in one source stem: the closing a page adds says which this item is.
    'How much heat is produced by the reaction, and what is its enthalpy change? Enter the enthalpy change in kJ/mol.',
  ]) assert.equal(heatAsk(question), 'signed', question);
  for (const question of [
    // A photon is produced; its energy is not "energy produced".
    'What is the energy in joules and the wavelength in meters of the photon produced when an electron falls from the $n = 5$ to the $n = 3$ level in a He⁺ ion?',
    'How much heat, in joules and in calories, is required to heat a 28.4-g (1-oz) ice cube from −23.0 °C to −1.0 °C?',
    'What is the molar mass of the gas?',
    '',
  ]) assert.equal(heatAsk(question), null, question);
});

test('a key is negative as a page or a source solution writes it', () => {
  for (const key of ['-39.0', '−54.04', '-6.25\\times10^{3}', ' −0.5', '-.5']) assert.equal(isNegativeKey(key), true, key);
  for (const key of ['39.0', '6.25\\times10^{-3}', '+143', 'x-2', '']) assert.equal(isNegativeKey(key), false, key);
});

test('an amount item\'s hint with a negative relation says the heat is the size of it, and never ends at a negative number', () => {
  // 5.2's two positive items: a learner who followed the hint typed −1.34 and was marked wrong.
  assert.match(amountHintProblem('Use $q = c \\times m \\times \\Delta T$ and $q_\\text{reaction} = -q_\\text{solution}$, as in the example above.'), /comes out negative/);
  assert.match(amountHintProblem('Use $q_\\text{rxn} = -(q_\\text{water} + q_\\text{bomb})$, with the bomb’s heat capacity for its share.'), /comes out negative/);
  // The ruling's form.
  assert.equal(amountHintProblem('Use $q_\\text{rxn} = -(q_\\text{water} + q_\\text{bomb})$, with the bomb’s heat capacity for its share; the heat produced is the size of $q_\\text{rxn}$.'), null);
  assert.equal(amountHintProblem('Convert grams to moles to kilojoules with the enthalpy of combustion from the table above; the heat produced is the size of that enthalpy change.'), null);
  // A relation with no negative side, and a minus that is a subtraction.
  assert.equal(amountHintProblem('Use $q = c \\times m \\times \\Delta T$ for the solution.'), null);
  assert.equal(amountHintProblem('Use $\\Delta T = T_\\text{final} - T_\\text{initial}$.'), null);
  assert.match(amountHintProblem('The enthalpy of combustion is −1301.1 kJ/mol.'), /ends at a negative number/);
  assert.match(amountHintProblem('Scale $\\Delta H = -1301.1$'), /comes out negative|ends at a negative number/);
  assert.equal(amountHintProblem(''), null);
});
