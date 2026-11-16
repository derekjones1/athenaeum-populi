import test from 'node:test';
import assert from 'node:assert/strict';
import {
  checkChem, checkEquation, checkFormula, chemCanon, chemKeyProblem, fractionText, prettySpecies, previewChem, readSpecies, MULTIPLIED_FORMULA, ONE_MOLE, STATE_DIFFERS,
} from './check-chem.mjs';

const formula = (typed, key, accept = '') => checkFormula(typed, key, { accept }).status;
const equation = (typed, key) => checkEquation(typed, key).status;

test('a formula is read from plain digits, underscores, or Unicode subscripts', () => {
  // Chemistry 2e 2.7: "Write the formulas of the following ionic compounds".
  for (const typed of ['Mn3(PO4)2', 'Mn_3(PO_4)_2', 'Mn₃(PO₄)₂', ' Mn3 (PO4)2 ', 'Mn3[PO4]2']) {
    assert.equal(formula(typed, 'Mn₃(PO₄)₂'), 'correct', typed);
  }
  assert.equal(formula('(NH4)2SO4', '(NH₄)₂SO₄'), 'correct');
  assert.equal(formula('RbBr', 'RbBr'), 'correct');
  assert.equal(formula('Mn3(PO4)3', 'Mn₃(PO₄)₂'), 'incorrect');
  assert.equal(formula('Mn2(PO4)3', 'Mn₃(PO₄)₂'), 'incorrect');
});

test('capitals decide the element: Co is not CO, and the wrong capitals are named', () => {
  assert.equal(formula('CO', 'Co'), 'incorrect');
  assert.equal(formula('Co', 'CO'), 'incorrect');
  assert.equal(formula('No', 'NO'), 'incorrect');
  assert.equal(formula('HF', 'HF'), 'correct');
  assert.equal(formula('Hf', 'HF'), 'incorrect');
  // Letters right, capitals wrong, and the text does not read as a formula.
  const lower = checkFormula('nacl', 'NaCl');
  assert.equal(lower.status, 'form');
  assert.match(lower.message, /capitals/);
  assert.equal(formula('NACL', 'NaCl'), 'form', 'all capitals: the right letters still');
  assert.equal(formula('NAF', 'NaCl'), 'incorrect');
  assert.equal(checkFormula('sodium chloride', 'NaCl').status, 'incorrect');
  assert.match(checkFormula('sodium chloride', 'NaCl').message, /does not read as a formula/);
});

test('the same atoms in another order or grouping are right atoms in the wrong form', () => {
  const swapped = checkFormula('ClNa', 'NaCl');
  assert.equal(swapped.status, 'form');
  assert.match(swapped.message, /usual order and grouping/);
  assert.equal(formula('Mn3P2O8', 'Mn₃(PO₄)₂'), 'form');
  assert.equal(formula('OH', 'HO'), 'form');
  // An alternate the module prints is listed, and then it is simply right.
  assert.equal(formula('HC2H3O2', 'CH₃CO₂H', 'CH3COOH|HC2H3O2'), 'correct');
  assert.equal(formula('C2H4O2', 'CH₃CO₂H', 'CH3COOH|HC2H3O2'), 'form');
});

test('the right atoms without their charge or mass number are wrong, and told what is missing', () => {
  const noCharge = checkFormula('Se', 'Se²⁻');
  assert.equal(noCharge.status, 'incorrect');
  assert.match(noCharge.message, /ends with its charge/);
  assert.match(checkFormula('NH4', 'NH₄⁺').message, /ends with its charge/);
  assert.match(checkFormula('H2PO4', 'H₂PO₄⁻').message, /ends with its charge/);
  // A wrong charge, or other atoms, gets no message: nothing is confirmed.
  assert.equal(checkFormula('Se-', 'Se²⁻').message, undefined);
  assert.equal(checkFormula('Se2+', 'Se²⁻').message, undefined);
  assert.equal(checkFormula('S', 'Se²⁻').message, undefined);
  assert.equal(checkFormula('Na2S', 'Na₂S').status, 'correct');
  assert.equal(checkFormula('NaS', 'Na₂S').message, undefined);
  const noMass = checkFormula('Na', '²³₁₁Na');
  assert.equal(noMass.status, 'incorrect');
  assert.match(noMass.message, /mass number/);
  assert.match(checkFormula('Cs+', '¹³³Cs⁺').message, /mass number/);
  assert.match(checkFormula('133Cs', '¹³³Cs⁺').message, /ends with its charge/);
  assert.equal(checkFormula('K', '²³₁₁Na').message, undefined);
  assert.equal(checkFormula('24Na', '²³₁₁Na').message, undefined);
  for (const message of [noCharge.message, noMass.message]) assert.doesNotMatch(message, /\b(?:2|23|11)\b|Se|Na\b/, 'the message never prints the key');
});

test('a charge is read marked or bare, number first or sign first', () => {
  for (const typed of ['SO4^2-', 'SO₄²⁻', 'SO42-', 'SO4-2', 'SO4^-2', 'SO4 2-', 'SO4^{2-}', 'SO₄^2−']) {
    assert.equal(formula(typed, 'SO₄²⁻'), 'correct', typed);
  }
  for (const typed of ['Fe3+', 'Fe^3+', 'Fe³⁺', 'Fe+3']) assert.equal(formula(typed, 'Fe³⁺'), 'correct', typed);
  for (const typed of ['Cl-', 'Cl^-', 'Cl⁻', 'Cl−', 'Cl^1-']) assert.equal(formula(typed, 'Cl⁻'), 'correct', typed);
  assert.equal(formula('NH4+', 'NH₄⁺'), 'correct');
  assert.equal(formula('O22-', 'O₂²⁻'), 'correct', 'peroxide: two oxygens and 2−');
  assert.equal(formula('Hg22+', 'Hg₂²⁺'), 'correct');
  // The charge is part of the answer.
  assert.equal(formula('SO4', 'SO₄²⁻'), 'incorrect');
  assert.equal(formula('SO4^-', 'SO₄²⁻'), 'incorrect');
  assert.equal(formula('Fe2+', 'Fe³⁺'), 'incorrect');
  assert.equal(formula('Se2-', 'Se²⁻'), 'correct');
  assert.equal(formula('Se', 'Se²⁻'), 'incorrect');
  assert.equal(formula('SO3^2-', 'SO₄²⁻'), 'incorrect');
  // An explicit subscript is never a charge: Fe_3+ is three irons, 1+.
  assert.equal(formula('Fe_3+', 'Fe³⁺'), 'incorrect');
});

test('a hydrate keeps its water, and the dot is typed four ways', () => {
  for (const typed of ['FeCl3·2H2O', 'FeCl3.2H2O', 'FeCl3*2H2O', 'FeCl3•2H2O', 'FeCl₃·2H₂O']) {
    assert.equal(formula(typed, 'FeCl₃·2H₂O'), 'correct', typed);
  }
  assert.equal(formula('FeCl3', 'FeCl₃·2H₂O'), 'incorrect');
  assert.equal(formula('FeCl3·3H2O', 'FeCl₃·2H₂O'), 'incorrect');
  assert.equal(formula('CoCl2·6H2O', 'CoCl₂·6H₂O'), 'correct');
  // The source's own typo, 2.7: a capital I for the l of Al is another formula.
  assert.equal(formula('AIF3·3H2O', 'AlF₃·3H₂O'), 'incorrect');
});

test('a mass number before the symbol is part of a formula', () => {
  for (const typed of ['^14C', '¹⁴C', '14C']) assert.equal(formula(typed, '¹⁴C'), 'correct', typed);
  assert.equal(formula('C', '¹⁴C'), 'incorrect');
  assert.equal(formula('12C', '¹⁴C'), 'incorrect');
});

test('an empty response is empty, and state symbols on a formula are ignored', () => {
  assert.equal(formula('  ', 'NaCl'), 'empty');
  assert.equal(formula('NaCl(s)', 'NaCl'), 'correct');
});

test('an equation is right with the key\'s species and coefficients, in any order within a side', () => {
  const key = '2Na(s) + 2H₂O(l) ⟶ 2NaOH(aq) + H₂(g)';
  for (const typed of [
    '2Na + 2H2O -> 2NaOH + H2',
    '2 Na + 2 H2O --> 2 NaOH + H2',
    '2H2O + 2Na → H2 + 2NaOH',
    '2Na(s) + 2H2O(l) -> 2NaOH(aq) + H2(g)',
    '2Na + 2H2O = 2NaOH + H2',
    '2Na+2H2O->2NaOH+H2',
    '2Na + 2H₂O ⟶ 2NaOH + H₂',
  ]) assert.equal(equation(typed, key), 'correct', typed);
  // The stem's own unbalanced equation is not the answer.
  const unbalanced = checkEquation('Na + H2O -> NaOH + H2', key);
  assert.equal(unbalanced.status, 'incorrect');
  assert.match(unbalanced.message, /right substances, but the equation is not balanced/);
  // Doubled coefficients are balanced, and not yet the answer.
  const doubled = checkEquation('4Na + 4H2O -> 4NaOH + 2H2', key);
  assert.equal(doubled.status, 'form');
  assert.match(doubled.message, /smallest whole-number coefficients/);
  // Reversed, a wrong product, a missing species.
  assert.equal(equation('2NaOH + H2 -> 2Na + 2H2O', key), 'incorrect');
  assert.equal(equation('2Na + 2H2O -> Na2O + 2H2', key), 'incorrect');
  assert.equal(equation('2Na + 2H2O -> 2NaOH', key), 'incorrect');
  // A wrong state symbol the learner chose to type.
  const state = checkEquation('2Na(s) + 2H2O(g) -> 2NaOH(aq) + H2(g)', key);
  assert.equal(state.status, 'form');
  assert.match(state.message, /state symbols/);
  // The sentence says the rest is right and that a state may be left out,
  // and names no substance (November 14, 2026).
  assert.equal(state.message, STATE_DIFFERS);
  assert.match(STATE_DIFFERS, /substances and coefficients are right/);
  assert.match(STATE_DIFFERS, /state symbols are optional/);
  assert.doesNotMatch(STATE_DIFFERS, /H2O|H₂O|water|\(g\)|\(l\)/);
  // With the states left out, or typed as the key has them, it is correct.
  assert.equal(checkEquation('2Na + 2H2O -> 2NaOH + H2', key).status, 'correct');
  assert.equal(checkEquation('2Na(s) + 2H2O -> 2NaOH + H2(g)', key).status, 'correct', 'some typed, some not');
});

test('ions and electrons are read in an equation', () => {
  const half = '8H⁺(aq) + MnO₄⁻(aq) + 5e⁻ ⟶ Mn²⁺(aq) + 4H₂O(l)';
  for (const typed of [
    '8H+ + MnO4- + 5e- -> Mn2+ + 4H2O',
    'MnO4^- + 8H^+ + 5e^- -> Mn^2+ + 4H2O',
    '8H⁺ + MnO₄⁻ + 5e⁻ ⟶ Mn²⁺ + 4H₂O',
  ]) assert.equal(equation(typed, half), 'correct', typed);
  assert.equal(equation('8H+ + MnO4- + 4e- -> Mn2+ + 4H2O', half), 'incorrect');
  const netIonic = 'H₃O⁺(aq) + OH⁻(aq) ⟶ 2H₂O(l)';
  assert.equal(equation('H3O+ + OH- -> 2H2O', netIonic), 'correct');
  assert.equal(equation('H3O++OH-->2H2O', netIonic), 'correct', 'no spaces at all');
  assert.equal(equation('OH- + H3O+ -> 2H2O', netIonic), 'correct');
  // An equilibrium arrow is an arrow — the key's own (the next test has the other one).
  assert.equal(equation('N2 + 3H2 <=> 2NH3', 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)'), 'correct');
  assert.equal(equation('N2 + 3H2 ⇌ 2NH3', 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)'), 'correct');
  // A fractional coefficient is the key's, when the key prints one.
  assert.equal(equation('H2 + 1/2O2 -> H2O', 'H₂(g) + 1/2O₂(g) ⟶ H₂O(l)'), 'correct');
  assert.equal(equation('2H2 + O2 -> 2H2O', 'H₂(g) + 1/2O₂(g) ⟶ H₂O(l)'), 'form');
});

// Chemistry 2e 4.2: the half-reaction method balances hydrogen "by adding H⁺
// ions", and the answer key prints H₃O⁺ in some answers (4.39(b), (c), (e))
// and H⁺ in others (4.37(d), 4.41(c)). Either notation is the module's own.
test('H⁺ and H₃O⁺ are one hydrogen ion: H₃O⁺ is H⁺ + H₂O, and water on both sides cancels', () => {
  const hydronium = 'H₂S(g) + Hg₂²⁺(aq) + 2H₂O(l) ⟶ 2Hg(l) + S(s) + 2H₃O⁺(aq)';
  for (const typed of [
    'H2S + Hg2^2+ -> 2Hg + S + 2H+',
    'H2S + Hg2^2+ + 2H2O -> 2Hg + S + 2H3O+',
    'H2S(g) + Hg2^2+(aq) -> 2Hg(l) + S(s) + 2H+(aq)',
    'Hg2^2+ + H2S -> 2H+ + S + 2Hg',
  ]) assert.equal(equation(typed, hydronium), 'correct', typed);
  const proton = '2H₂O(l) ⟶ O₂(g) + 4H⁺(aq) + 4e⁻';
  for (const typed of ['6H2O -> O2 + 4H3O+ + 4e-', '2H2O -> O2 + 4H+ + 4e-', '6H2O(l) -> O2(g) + 4H3O+(aq) + 4e-']) {
    assert.equal(equation(typed, proton), 'correct', typed);
  }
  // 4.39(c), (e) and 4.41(c), each in the other notation.
  assert.equal(equation('5CN- + 2ClO2 + H2O -> 5CNO- + 2Cl- + 2H+', '5CN⁻(aq) + 2ClO₂(aq) + 3H₂O(l) ⟶ 5CNO⁻(aq) + 2Cl⁻(aq) + 2H₃O⁺(aq)'), 'correct');
  assert.equal(equation('2HBrO -> 2H+ + 2Br- + O2', '2HBrO(aq) + 2H₂O(l) ⟶ 2H₃O⁺(aq) + 2Br⁻(aq) + O₂(g)'), 'correct');
  assert.equal(equation('Br2 + SO2 + 6H2O -> 4H3O+ + 2Br- + SO4^2-', 'Br₂(l) + SO₂(g) + 2H₂O(l) ⟶ 4H⁺(aq) + 2Br⁻(aq) + SO₄²⁻(aq)'), 'correct');
  // Neutralization: H₃O⁺ + OH⁻ ⟶ 2H₂O is H⁺ + OH⁻ ⟶ H₂O.
  assert.equal(equation('H+ + OH- -> H2O', 'H₃O⁺(aq) + OH⁻(aq) ⟶ 2H₂O(l)'), 'correct');
  assert.equal(equation('H3O+ + OH- -> 2H2O', 'H⁺(aq) + OH⁻(aq) ⟶ H₂O(l)'), 'correct');
  // Balanced in either notation, not in lowest terms.
  for (const typed of ['12H2O -> 2O2 + 8H3O+ + 8e-', '4H2O -> 2O2 + 8H+ + 8e-']) {
    const doubled = checkEquation(typed, proton);
    assert.equal(doubled.status, 'form', typed);
    assert.match(doubled.message, /smallest whole-number coefficients/, typed);
  }
  // The right substances, not balanced, in either notation.
  for (const [typed, key] of [
    ['H2S + Hg2^2+ -> Hg + S + H+', hydronium],
    ['H2S + Hg2^2+ + H2O -> Hg + S + H3O+', hydronium],
    ['H2O -> O2 + H3O+ + e-', proton],
    ['H2O -> O2 + H+ + e-', proton],
  ]) {
    const unbalanced = checkEquation(typed, key);
    assert.equal(unbalanced.status, 'incorrect', typed);
    assert.match(unbalanced.message, /right substances, but the equation is not balanced/, typed);
  }
  // H₃O⁺ typed with the water left uncancelled on the other side is still
  // balanced only once: an equation not balanced is not made right by the rule.
  assert.equal(equation('2H2O -> O2 + 4H3O+ + 4e-', proton), 'incorrect');
  assert.equal(equation('H2S + Hg2^2+ -> 2Hg + S + 2H3O+', hydronium), 'incorrect');
  // A wrong state on the hydrogen ion is still a state the learner chose to type.
  assert.equal(equation('2H2O(l) -> O2(g) + 4H+(s) + 4e-', proton), 'form');
});

test('only water cancels: spectator ions stay, and a net ionic equation is not the complete one', () => {
  // Chemistry 2e 4.11(b): H⁺ is a spectator on both sides of the complete equation.
  const complete = 'Pb²⁺(aq) + 2NO₃⁻(aq) + 2H⁺(aq) + SO₄²⁻(aq) ⟶ PbSO₄(s) + 2H⁺(aq) + 2NO₃⁻(aq)';
  const net = 'Pb²⁺(aq) + SO₄²⁻(aq) ⟶ PbSO₄(s)';
  assert.equal(equation('Pb2+ + 2NO3- + 2H+ + SO4^2- -> PbSO4 + 2H+ + 2NO3-', complete), 'correct');
  assert.equal(equation('Pb2+ + 2NO3- + 2H3O+ + SO4^2- -> PbSO4 + 2H3O+ + 2NO3-', complete), 'correct');
  for (const [typed, key] of [['Pb2+ + SO4^2- -> PbSO4', complete], ['Pb2+ + 2NO3- + 2H+ + SO4^2- -> PbSO4 + 2H+ + 2NO3-', net]]) {
    const result = checkEquation(typed, key);
    assert.equal(result.status, 'incorrect', typed);
    assert.doesNotMatch(result.message ?? '', /not balanced/, 'a balanced response is never told it is not');
  }
  // With no hydrogen ion anywhere, water on both sides of a response is not cancelled.
  assert.equal(equation('2Na + 3H2O -> 2NaOH + H2 + H2O', '2Na(s) + 2H₂O(l) ⟶ 2NaOH(aq) + H₂(g)'), 'incorrect');
  // A formula is still a formula: H₃O⁺ asked as a formula is not H⁺.
  assert.equal(formula('H+', 'H₃O⁺'), 'incorrect');
  assert.equal(formula('H3O+', 'H⁺'), 'incorrect');
  // Every key keeps the notation it was printed in for the lint.
  assert.equal(chemKeyProblem('H₂S(g) + Hg₂²⁺(aq) + 2H₂O(l) ⟶ 2Hg(l) + S(s) + 2H₃O⁺(aq)', 'equation'), null);
  assert.equal(chemKeyProblem(complete, 'equation'), null);
});

// Chemistry 2e 4.2: the half-reaction method balances with H⁺ and converts to
// a basic solution in a last step, so a learner who stops early types the
// right reaction in acid against a key in base (and the reverse).
test('the right reaction balanced for the other solution is told to use the solution the question names', () => {
  const medium = /solution the question names/;
  const pairs = [
    // Base keys (4.37(e), (h); 4.41(a), (b); Check Your Learning) against their acid forms.
    ['6H₂O(l) + 2IO₃⁻(aq) + 10e⁻ ⟶ I₂(s) + 12OH⁻(aq)', '2IO3- + 12H+ + 10e- -> I2 + 6H2O'],
    ['Cl⁻(aq) + 6OH⁻(aq) ⟶ ClO₃⁻(aq) + 3H₂O(l) + 6e⁻', 'Cl- + 3H2O -> ClO3- + 6H+ + 6e-'],
    ['2MnO₄⁻(aq) + 3NO₂⁻(aq) + H₂O(l) ⟶ 2MnO₂(s) + 3NO₃⁻(aq) + 2OH⁻(aq)', '2MnO4- + 3NO2- + 2H+ -> 2MnO2 + 3NO3- + H2O'],
    ['3MnO₄²⁻(aq) + 2H₂O(l) ⟶ 2MnO₄⁻(aq) + 4OH⁻(aq) + MnO₂(s)', '3MnO4^2- + 4H+ -> 2MnO4- + MnO2 + 2H2O'],
    ['3Cl₂(aq) + 6OH⁻(aq) ⟶ 5Cl⁻(aq) + ClO₃⁻(aq) + 3H₂O(l)', '3Cl2 + 3H2O -> 5Cl- + ClO3- + 6H+'],
    ['3Cl₂(aq) + 6OH⁻(aq) ⟶ 5Cl⁻(aq) + ClO₃⁻(aq) + 3H₂O(l)', '3Cl2 + 9H2O -> 5Cl- + ClO3- + 6H3O+'],
    // Acid keys (4.37(d), (f), (g); 4.39(b), (c), (e); 4.41(c)) against their base forms.
    ['2H₂O(l) ⟶ O₂(g) + 4H⁺(aq) + 4e⁻', '4OH- -> O2 + 2H2O + 4e-'],
    ['H₂O(l) + SO₃²⁻(aq) ⟶ SO₄²⁻(aq) + 2H⁺(aq) + 2e⁻', 'SO3^2- + 2OH- -> SO4^2- + H2O + 2e-'],
    ['8H⁺(aq) + MnO₄⁻(aq) + 5e⁻ ⟶ Mn²⁺(aq) + 4H₂O(l)', 'MnO4- + 4H2O + 5e- -> Mn2+ + 8OH-'],
    ['H₂S(g) + Hg₂²⁺(aq) + 2H₂O(l) ⟶ 2Hg(l) + S(s) + 2H₃O⁺(aq)', 'H2S + Hg2^2+ + 2OH- -> 2Hg + S + 2H2O'],
    ['5CN⁻(aq) + 2ClO₂(aq) + 3H₂O(l) ⟶ 5CNO⁻(aq) + 2Cl⁻(aq) + 2H₃O⁺(aq)', '5CN- + 2ClO2 + 2OH- -> 5CNO- + 2Cl- + H2O'],
    ['2HBrO(aq) + 2H₂O(l) ⟶ 2H₃O⁺(aq) + 2Br⁻(aq) + O₂(g)', '2HBrO + 2OH- -> 2Br- + O2 + 2H2O'],
    ['Br₂(l) + SO₂(g) + 2H₂O(l) ⟶ 4H⁺(aq) + 2Br⁻(aq) + SO₄²⁻(aq)', 'Br2 + SO2 + 4OH- -> 2Br- + SO4^2- + 2H2O'],
  ];
  for (const [key, typed] of pairs) {
    const result = checkEquation(typed, key);
    assert.equal(result.status, 'form', `${typed} against ${key}`);
    assert.match(result.message, medium, typed);
    assert.equal(chemKeyProblem(key, 'equation'), null, key);
  }
  // Doubled in the other solution: still the solution first.
  assert.equal(checkEquation('4IO3- + 24H+ + 20e- -> 2I2 + 12H2O', pairs[0][0]).status, 'form');
  // Never for an unbalanced response, and never correct.
  const unbalanced = checkEquation('2IO3- + 12H+ + 10e- -> I2 + 5H2O', pairs[0][0]);
  assert.equal(unbalanced.status, 'incorrect');
  assert.doesNotMatch(unbalanced.message ?? '', medium);
  // The key's own solution is still simply right.
  assert.equal(equation('6H2O + 2IO3- + 10e- -> I2 + 12OH-', pairs[0][0]), 'correct');
  // Neutralization holds both ions: it stays one answer in either notation, and no medium message.
  assert.equal(equation('H+ + OH- -> H2O', 'H₃O⁺(aq) + OH⁻(aq) ⟶ 2H₂O(l)'), 'correct');
  // Degenerate and ion-free responses get no message.
  for (const typed of ['2H2O -> 2H2O', 'H2O -> H2O', '4OH- -> 4OH-', 'H+ -> H+']) {
    assert.doesNotMatch(checkEquation(typed, pairs[0][0]).message ?? '', medium, typed);
    assert.notEqual(checkEquation(typed, pairs[0][0]).status, 'correct', typed);
  }
  // A key with neither ion: an ionic response with OH⁻ is not a medium question.
  const sodium = checkEquation('2Na + 2H2O -> 2Na+ + 2OH- + H2', '2Na(s) + 2H₂O(l) ⟶ 2NaOH(aq) + H₂(g)');
  assert.equal(sodium.status, 'incorrect');
  assert.doesNotMatch(sodium.message ?? '', medium);
  // A net ionic equation in acid against a complete ionic key in base stays wrong, without the message:
  // spectator ions are never cancelled.
  const complete = '2Na⁺(aq) + 2Cl⁻(aq) + 2H₂O(l) ⟶ 2Na⁺(aq) + 2OH⁻(aq) + H₂(g) + Cl₂(g)';
  for (const typed of ['2Cl- + 2H+ -> H2 + Cl2', '2Cl- + 2H2O -> 2OH- + H2 + Cl2']) {
    const result = checkEquation(typed, complete);
    assert.equal(result.status, 'incorrect', typed);
    assert.doesNotMatch(result.message ?? '', medium, typed);
  }
  // H⁺ only a spectator in the key (4.11(b) complete): OH⁻ in its place is no medium question.
  const spectator = checkEquation('Pb2+ + 2NO3- + 2OH- + SO4^2- -> PbSO4 + 2OH- + 2NO3-', 'Pb²⁺(aq) + 2NO₃⁻(aq) + 2H⁺(aq) + SO₄²⁻(aq) ⟶ PbSO₄(s) + 2H⁺(aq) + 2NO₃⁻(aq)');
  assert.equal(spectator.status, 'incorrect');
  assert.doesNotMatch(spectator.message ?? '', medium);
  // Both ions in the response: no message.
  assert.doesNotMatch(checkEquation('2IO3- + 12H+ + 10e- + OH- -> I2 + 6H2O + OH-', pairs[0][0]).message ?? '', medium);
});

test('a balanced response with other ratios is not told it is unbalanced', () => {
  // Two ways to balance one set of substances (H₂O₂ is both oxidized and reduced).
  const key = '2MnO₄⁻(aq) + 5H₂O₂(aq) + 6H⁺(aq) ⟶ 2Mn²⁺(aq) + 5O₂(g) + 8H₂O(l)';
  const other = checkEquation('2MnO4- + 7H2O2 + 6H+ -> 2Mn2+ + 6O2 + 10H2O', key);
  assert.equal(other.status, 'incorrect');
  assert.doesNotMatch(other.message ?? '', /not balanced/);
});

// Chemistry 2e 4.37(b): the key prints the complex ion in square brackets, and
// the same ion is written without them as often as with.
test('brackets or parentheses around one unit of a formula are only grouping', () => {
  const key = '[Ag(NH₃)₂]⁺(aq) + e⁻ ⟶ Ag(s) + 2NH₃(aq)';
  for (const typed of ['[Ag(NH3)2]+ + e- -> Ag + 2NH3', 'Ag(NH3)2+ + e- -> Ag + 2NH3', 'Ag(NH3)2^+ + e- -> Ag + 2NH3', '(Ag(NH3)2)+ + e- -> Ag + 2NH3']) {
    assert.equal(equation(typed, key), 'correct', typed);
  }
  assert.equal(equation('(NH4)2(Cr2O7) -> Cr2O3 + N2 + 4H2O', '(NH₄)₂Cr₂O₇(s) ⟶ Cr₂O₃(s) + N₂(g) + 4H₂O(g)'), 'correct');
  // Only inside an equation: a formula item grades how the formula is
  // written, and the gates' canon keeps every group.
  assert.equal(formula('Ag(NH3)2+', '[Ag(NH₃)₂]⁺'), 'form');
  assert.equal(formula('[Ag(NH3)2]+', '[Ag(NH₃)₂]⁺'), 'correct');
  assert.equal(chemCanon('Ca(H2PO4)', 'formula'), 'Ca(H2PO4)');
  assert.notEqual(chemCanon('Ca(H _2 PO _4 )', 'formula'), chemCanon('CaH₂PO₄', 'formula'));
  assert.equal(chemCanon('[Ag(NH₃)₂]⁺', 'formula'), '(Ag(NH3)2)^+');
  assert.equal(chemCanon('(NH₄)₂(Cr₂O₇)', 'formula'), '(NH4)2(Cr2O7)');
  // A count on the group still multiplies it.
  assert.equal(formula('Ag(NH3)+', '[Ag(NH₃)₂]⁺'), 'incorrect');
  assert.equal(equation('[Ag(NH3)2]+ + e- -> Ag + NH3', key), 'incorrect');
  // The field shows the brackets the learner typed.
  assert.equal(previewChem('[Ag(NH3)2]+ + e- -> Ag + 2NH3', 'equation'), '[Ag(NH₃)₂]⁺ + e⁻ ⟶ Ag + 2NH₃');
  assert.equal(previewChem('Mn3[PO4]2', 'formula'), 'Mn₃[PO₄]₂');
  assert.equal(chemCanon('[ Ag ( NH 3 ) 2 ]^{+} ( a q ) + e^{−} ⟶ Ag ( s ) + 2 NH 3 ( a q )', 'equation'), chemCanon(key, 'equation'));
  assert.equal(chemKeyProblem(key, 'equation'), null);
});

test('a state symbol typed in capitals is still a state symbol', () => {
  const key = '2Na(s) + 2H₂O(l) ⟶ 2NaOH(aq) + H₂(g)';
  assert.equal(equation('2Na(S) + 2H2O(L) -> 2NaOH(AQ) + H2(G)', key), 'correct');
  assert.equal(equation('2Na(s) + 2H2O(l) -> 2NaOH(Aq) + H2(g)', key), 'correct');
  assert.equal(equation('2Na(S) + 2H2O(G) -> 2NaOH(aq) + H2(g)', key), 'form');
  assert.equal(previewChem('2Na(S) + 2H2O(L) -> 2NaOH(AQ) + H2(G)', 'equation'), '2Na(s) + 2H₂O(l) ⟶ 2NaOH(aq) + H₂(g)');
});

test('what is not an equation says how to type one', () => {
  const none = checkEquation('sodium plus water', '2Na(s) + 2H₂O(l) ⟶ 2NaOH(aq) + H₂(g)');
  assert.equal(none.status, 'incorrect');
  assert.match(none.message, /does not read as an equation/);
  assert.equal(checkEquation('', 'H₂ + Cl₂ ⟶ 2HCl').status, 'empty');
  assert.equal(equation('H2 + Cl2 -> 2HCl -> x', 'H₂ + Cl₂ ⟶ 2HCl'), 'incorrect');
});

test('checkChem dispatches on the form', () => {
  assert.equal(checkChem('H2O', 'H₂O', { form: 'formula' }).status, 'correct');
  assert.equal(checkChem('H2 + Cl2 -> 2HCl', 'H₂ + Cl₂ ⟶ 2HCl', { form: 'equation' }).status, 'correct');
});

test('a key must read one way, and an equation key must balance in lowest terms', () => {
  assert.equal(chemKeyProblem('Mn₃(PO₄)₂', 'formula'), null);
  assert.equal(chemKeyProblem('SO₄²⁻', 'formula'), null);
  assert.equal(chemKeyProblem('CH₃CO₂H', 'formula', 'CH3COOH|HC2H3O2'), null);
  assert.match(chemKeyProblem('SO42-', 'formula'), /reads two ways/);
  assert.match(chemKeyProblem('barium oxide', 'formula'), /does not read as a formula/);
  assert.match(chemKeyProblem('AIF₃·3H₂O', 'formula'), /does not read as a formula/, 'the source typo: "A" is no element');
  assert.match(chemKeyProblem('NaCl', 'formula', 'salt'), /"salt" does not read as a formula/);
  assert.equal(chemKeyProblem('2Na(s) + 2H₂O(l) ⟶ 2NaOH(aq) + H₂(g)', 'equation'), null);
  assert.equal(chemKeyProblem('8H⁺(aq) + MnO₄⁻(aq) + 5e⁻ ⟶ Mn²⁺(aq) + 4H₂O(l)', 'equation'), null);
  assert.match(chemKeyProblem('Na(s) + H₂O(l) ⟶ NaOH(aq) + H₂(g)', 'equation'), /not balanced/);
  assert.match(chemKeyProblem('8H⁺ + MnO₄⁻ + 4e⁻ ⟶ Mn²⁺ + 4H₂O', 'equation'), /not balanced/, 'charge counts');
  assert.match(chemKeyProblem('4Na + 4H₂O ⟶ 4NaOH + 2H₂', 'equation'), /lowest terms/);
  assert.match(chemKeyProblem('2Na + 2H₂O', 'equation'), /one arrow/);
  assert.match(chemKeyProblem('H₂ + Cl₂ ⟶ 2HCl', 'equation', 'x'), /no accept list/);
  assert.match(chemKeyProblem('H₂O', 'name'), /not a text form/);
});

test('the source\'s spaced MathML text canonicalizes to the page key', () => {
  // answerText() of the CNXML: subscripts as spaced digits, "( a q )".
  const source = '8 H^{+} ( a q ) + MnO 4^{−} ( a q ) + 5 e^{−} ⟶ Mn^{2+} ( a q ) + 4 H 2 O ( l ) ';
  assert.equal(chemCanon(source, 'equation'), chemCanon('8H⁺(aq) + MnO₄⁻(aq) + 5e⁻ ⟶ Mn²⁺(aq) + 4H₂O(l)', 'equation'));
  assert.equal(chemCanon('Mn _3 (PO _4 ) _2 ', 'formula'), chemCanon('Mn₃(PO₄)₂', 'formula'));
  assert.equal(chemCanon('FeCl _3 ·2H _2 O', 'formula'), 'FeCl3·2H2O');
  assert.equal(chemCanon('Se^{2−} ', 'formula'), 'Se^2-');
  assert.equal(chemCanon('sodium', 'formula'), null);
});

test('a reading is shown back in the book\'s print', () => {
  assert.equal(previewChem('Mn3(PO4)2', 'formula'), 'Mn₃(PO₄)₂');
  assert.equal(previewChem('SO42-', 'formula'), 'SO₄²⁻', 'the likelier reading of a bare tail');
  assert.equal(previewChem('MnO4-', 'formula'), 'MnO₄⁻');
  assert.equal(previewChem('Fe3+', 'formula'), 'Fe³⁺');
  assert.equal(previewChem('NH4+', 'formula'), 'NH₄⁺');
  assert.equal(previewChem('Hg22+', 'formula'), 'Hg₂²⁺');
  assert.equal(previewChem('FeCl3.2H2O', 'formula'), 'FeCl₃·2H₂O');
  assert.equal(previewChem('14C', 'formula'), '¹⁴C');
  assert.equal(previewChem('2Na + 2H2O -> 2NaOH + H2', 'equation'), '2Na + 2H₂O ⟶ 2NaOH + H₂');
  assert.equal(previewChem('8H+ + MnO4- + 5e- -> Mn2+ + 4H2O', 'equation'), '8H⁺ + MnO₄⁻ + 5e⁻ ⟶ Mn²⁺ + 4H₂O');
  assert.equal(previewChem('N2 + 3H2 <=> 2NH3', 'equation'), 'N₂ + 3H₂ ⇌ 2NH₃');
  assert.equal(previewChem('sodium', 'formula'), '');
  assert.equal(prettySpecies(readSpecies('Hg2Cl2(s)', { equation: true })[0]), 'Hg₂Cl₂(s)');
});

test('a nuclide\'s atomic number is its element\'s: read in a key, a response, and the gate\'s canon', async () => {
  const { checkFormula, chemKeyProblem, chemCanon, previewChem } = await import('./check-chem.mjs');
  // A key that prints both numbers asks for both.
  assert.equal(checkFormula('^23_11Na', '²³₁₁Na').status, 'correct');
  assert.equal(checkFormula('²³₁₁Na', '²³₁₁Na').status, 'correct');
  assert.equal(checkFormula('23Na', '²³₁₁Na').status, 'form');
  assert.match(checkFormula('23Na', '²³₁₁Na').message, /atomic number/);
  assert.equal(checkFormula('^23_12Na', '²³₁₁Na').status, 'incorrect');
  assert.equal(checkFormula('^24_11Na', '²³₁₁Na').status, 'incorrect');
  // A key that prints the mass number alone leaves the atomic number free — but never wrong.
  assert.equal(checkFormula('133Cs+', '¹³³Cs⁺').status, 'correct');
  assert.equal(checkFormula('^133_55Cs^+', '¹³³Cs⁺').status, 'correct');
  assert.equal(checkFormula('^133_56Cs^+', '¹³³Cs⁺').status, 'incorrect');
  // The lint refuses a key whose atomic number is another element's.
  assert.equal(chemKeyProblem('²³₁₁Na', 'formula'), null);
  assert.match(chemKeyProblem('²³₁₂Na', 'formula'), /atomic number 12, and Na is element 11/);
  assert.match(chemKeyProblem('¹²⁹₅₃Xe', 'formula'), /Xe is element 54/);
  // The gate's canon keeps a printed atomic number: two keys, one nuclide.
  assert.equal(chemCanon('²³₁₁Na', 'formula'), '^23_11Na');
  assert.equal(chemCanon('^{23}_{11} Na', 'formula'), '^23_11Na');
  assert.equal(chemCanon('²³Na', 'formula'), '^23Na');
  assert.match(JSON.stringify(previewChem('^23_11Na', 'formula')), /²³₁₁Na/);
});

// Every stem ends in a period and so does the typing guide's example, so a
// learner types "MgSe." — and a period is how a hydrate's dot is typed. The
// reader took the closing period for a dot and said "now fix the capitals"
// to a formula whose capitals were right (November 11, 2026).
test('sentence punctuation typed after a formula or an equation is not part of it', () => {
  for (const [typed, key] of [['MgSe.', 'MgSe'], ['IF7.', 'IF₇'], ['Se2-.', 'Se²⁻'], ['SO4^2-.', 'SO₄²⁻'], ['MgSe,', 'MgSe'], ['MgSe. ', 'MgSe'], ['AlF3.3H2O.', 'AlF₃·3H₂O']]) {
    assert.deepEqual(checkChem(typed, key, { form: 'formula' }), { status: 'correct' }, typed);
  }
  assert.equal(previewChem('MgSe.', 'formula'), 'MgSe');
  assert.equal(previewChem('AlF3.3H2O.', 'formula'), 'AlF₃·3H₂O');
  assert.equal(checkChem('2H2 + O2 -> 2H2O.', '2H₂(g) + O₂(g) ⟶ 2H₂O(l)', { form: 'equation' }).status, 'correct');
  // The period inside a hydrate still counts, and a wrong formula is still wrong.
  assert.equal(checkChem('AlF3.3H2O', 'AlF₃·3H₂O', { form: 'formula' }).status, 'correct');
  assert.notEqual(checkChem('AlF33H2O.', 'AlF₃·3H₂O', { form: 'formula' }).status, 'correct');
  assert.notEqual(checkChem('MgS.', 'MgSe', { form: 'formula' }).status, 'correct');
  assert.equal(checkChem('mgse.', 'MgSe', { form: 'formula' }).status, 'form', 'the capitals message is for capitals');
  assert.equal(checkChem('.', 'MgSe', { form: 'formula' }).status, 'empty');
});

// Decided after chapter 4 (November 12, 2026): `⇌` was graded correct against
// every `⟶` key, and the arrow is part of what an equation says.
test('the arrow is part of the equation: the other arrow is told which one, never correct', () => {
  const oneWay = 'P₄(s) + 5O₂(g) ⟶ P₄O₁₀(s)';
  for (const typed of ['P4 + 5O2 -> P4O10', 'P4 + 5O2 --> P4O10', 'P4 + 5O2 → P4O10', 'P4 + 5O2 ⟶ P4O10', 'P4 + 5O2 = P4O10', '5O2 + P4 -> P4O10(s)']) {
    assert.equal(equation(typed, oneWay), 'correct', typed);
  }
  for (const typed of ['P4 + 5O2 ⇌ P4O10', 'P4 + 5O2 <=> P4O10', 'P4 + 5O2 <-> P4O10', 'P4(s) + 5O2(g) ⇄ P4O10(s)']) {
    const result = checkEquation(typed, oneWay);
    assert.equal(result.status, 'form', typed);
    assert.match(result.message, /single arrow \(->\)/, typed);
    assert.doesNotMatch(result.message, /P4|P₄|O10|O₁₀/, 'names no substance');
  }
  const equilibrium = 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)';
  for (const typed of ['N2 + 3H2 -> 2NH3', 'N2 + 3H2 = 2NH3', 'N2 + 3H2 ⟶ 2NH3']) {
    const result = checkEquation(typed, equilibrium);
    assert.equal(result.status, 'form', typed);
    assert.match(result.message, /equilibrium arrow \(<=>\)/, typed);
  }
  // One thing at a time: a wrong state or a doubled equation is told that first, and a wrong equation is wrong.
  assert.match(checkEquation('P4(g) + 5O2 ⇌ P4O10', oneWay).message, /state symbols/);
  assert.match(checkEquation('2P4 + 10O2 ⇌ 2P4O10', oneWay).message, /smallest whole-number/);
  assert.equal(equation('P4 + 3O2 ⇌ P4O6', oneWay), 'incorrect');
  // The gate's canon tells the two apart, and a one-way key's canon is what it was.
  assert.equal(chemCanon(oneWay, 'equation'), '1P4 + 5O2 -> 1P4O10');
  assert.equal(chemCanon(equilibrium, 'equation'), '1N2 + 3H2 <=> 2NH3');
  assert.notEqual(chemCanon('N2 + 3H2 -> 2NH3', 'equation'), chemCanon(equilibrium, 'equation'));
  assert.equal(previewChem('N2 + 3H2 <=> 2NH3', 'equation'), 'N₂ + 3H₂ ⇌ 2NH₃');
});

// Chemistry 2e 4.2, the blind solve: P₄ + 5O₂ ⟶ 2P₂O₅ against the key's P₄O₁₀
// was plainly wrong. It balances; the formula is the empirical one.
test('a balanced response with a formula divided through is told to write the molecular formula', () => {
  const key = 'P₄(s) + 5O₂(g) ⟶ P₄O₁₀(s)';
  for (const typed of ['P4 + 5O2 -> 2P2O5', 'P4 + 5O2 -> 2P2O5(s)', '2P4 + 10O2 -> 4P2O5', '4P + 5O2 -> 2P2O5']) {
    const result = checkEquation(typed, key);
    assert.equal(result.status, 'form', typed);
    assert.match(result.message, /empirical formula/, typed);
    assert.doesNotMatch(result.message, /P4|P₄|O10|O₁₀|P2|O5/, 'names no substance');
  }
  // An element typed as separate atoms is the same slip, and is not called an empirical formula.
  for (const [typed, against] of [['4P + 5O2 -> P4O10', key], ['P4 + 10O -> P4O10', key], ['2H2 + 2O -> 2H2O', '2H₂(g) + O₂(g) ⟶ 2H₂O(l)']]) {
    const result = checkEquation(typed, against);
    assert.equal(result.status, 'form', typed);
    assert.match(result.message, /separate atoms/, typed);
  }
  // An ion divided through: atoms and charge alike.
  assert.match(checkEquation('2Hg+ + 2Cl- -> Hg2Cl2', 'Hg₂²⁺(aq) + 2Cl⁻(aq) ⟶ Hg₂Cl₂(s)').message, /empirical formula/);
  // Only for a response that balances, with every other species the key's.
  assert.equal(checkEquation('P4 + 5O2 -> P2O5', key).message, undefined);
  assert.equal(equation('P4 + 5O2 -> P2O5', key), 'incorrect');
  assert.equal(equation('P4 + 3O2 -> 2P2O3', key), 'incorrect');
  assert.equal(checkEquation('P4 + 3O2 -> 2P2O3', key).message, undefined);
  // A multiple of the key's formula is not this slip, and neither is another compound of the same elements.
  assert.equal(checkEquation('2Na + Cl2 -> Na2Cl2', '2Na(s) + Cl₂(g) ⟶ 2NaCl(s)').message, undefined);
  assert.equal(checkEquation('2H2 + 2O2 -> 2H2O2', '2H₂(g) + O₂(g) ⟶ 2H₂O(l)').message, undefined);
  // The key's own equation is still simply right.
  assert.equal(equation('P4 + 5O2 -> P4O10', key), 'correct');
});

test('an electron typed without its charge, or left out of a half-reaction, is told so', () => {
  const half = 'Cu(s) ⟶ Cu²⁺(aq) + 2e⁻';
  for (const typed of ['Cu -> Cu2+ + 2e', 'Cu -> Cu2+ + 2 e', 'Cu + 2e -> Cu2+', 'Cu -> Cu^2+ + e']) {
    const result = checkEquation(typed, half);
    assert.equal(result.status, 'incorrect', typed);
    assert.match(result.message, /type it as e-/, typed);
    assert.doesNotMatch(result.message, /arrow/, typed);
  }
  const none = checkEquation('Cu -> Cu2+', half);
  assert.equal(none.status, 'incorrect');
  assert.match(none.message, /half-reaction also shows the electrons/);
  assert.doesNotMatch(none.message, /\d/, 'names no count');
  // Other substances, or the wrong count of electrons, keep the sentences they had.
  assert.equal(checkEquation('Cu -> Cu+', half).message, undefined);
  assert.match(checkEquation('Cu -> Cu2+ + e-', half).message, /not balanced/);
  assert.equal(equation('Cu -> Cu2+ + 2e-', half), 'correct');
  // A key with no electrons never asks for them, and a line that is no equation still says how to type one.
  assert.equal(checkEquation('H2 + O2 -> H2O2', '2H₂(g) + O₂(g) ⟶ 2H₂O(l)').message, undefined);
  assert.match(checkEquation('hello', half).message, /does not read as an equation/);
  assert.match(checkEquation('Fe -> Fe3+ + 3e-', '8H⁺(aq) + MnO₄⁻(aq) + 5e⁻ ⟶ Mn²⁺(aq) + 4H₂O(l)').message ?? '', /^$/);
});

// A molecular formula typed where the empirical one is asked (Chemistry
// 2.4), or an ionic formula not reduced: the right elements in the right
// ratio. A bare "Not quite" until November 14, 2026.
test('a formula with every count multiplied up is told so, only against a key in lowest terms', () => {
  const multiplied = { status: 'incorrect', message: MULTIPLIED_FORMULA };
  assert.deepEqual(checkFormula('C2H2', 'CH'), multiplied);
  assert.deepEqual(checkFormula('C6H12O6', 'CH₂O'), multiplied);
  assert.deepEqual(checkFormula('C8H10N4O2', 'C₄H₅N₂O'), multiplied);
  assert.deepEqual(checkFormula('Na2Cl2', 'NaCl'), multiplied);
  // Not every count by the same factor, or a key that is not its simplest ratio: nothing is said.
  assert.deepEqual(checkFormula('C2H4', 'CH'), { status: 'incorrect' });
  assert.deepEqual(checkFormula('Li4O4', 'Li₂O₂'), { status: 'incorrect' }, 'a peroxide is not its simplest ratio');
  assert.deepEqual(checkFormula('LiO', 'Li₂O₂'), { status: 'incorrect' });
  assert.deepEqual(checkFormula('Hg4Cl4', 'Hg₂Cl₂'), { status: 'incorrect' });
  assert.deepEqual(checkFormula('S8', 'S'), { status: 'incorrect' }, 'one element has no ratio');
  assert.deepEqual(checkFormula('S2O8^4-', 'SO₄²⁻'), { status: 'incorrect' }, 'an ion is not read');
  assert.equal(checkFormula('CH', 'CH').status, 'correct');
  assert.doesNotMatch(MULTIPLIED_FORMULA, /empirical|molecular/, 'the reader does not know which the item asks');
});

test('a formation equation with a fractional coefficient is graded at the key\'s own scale (Chemistry 2e 5.3)', () => {
  // The two Check Your Learning keys of 5.3's formation-equation example, in the book's print.
  const ether = '4C(s, graphite) + 5H₂(g) + ½O₂(g) ⟶ C₂H₅OC₂H₅(l)';
  const soda = '2Na(s) + C(s, graphite) + 3⁄2O₂(g) ⟶ Na₂CO₃(s)';
  assert.equal(chemKeyProblem(ether, 'equation'), null, 'the lowest-terms lint admits a fractional key');
  assert.equal(chemKeyProblem(soda, 'equation'), null);
  // The learner types the fraction any way a keyboard gives.
  for (const typed of ['4C + 5H2 + 1/2O2 -> C2H5OC2H5', '4C + 5H2 + 1/2 O2 -> C2H5OC2H5', '4C + 5H2 + ½O2 -> C2H5OC2H5', '4C + 5H2 + 0.5O2 -> C2H5OC2H5',
    '4C + 5H2 + .5O2 -> C2H5OC2H5', '4C + 5H2 + 1⁄2O2 -> C2H5OC2H5', '5H2 + 1/2O2 + 4C -> C2H5OC2H5', '4C+5H2+1/2O2->C2H5OC2H5',
    '4C(s, graphite) + 5H2(g) + 1/2O2(g) -> C2H5OC2H5(l)']) {
    assert.equal(equation(typed, ether), 'correct', typed);
  }
  for (const typed of ['2Na + C + 3/2O2 -> Na2CO3', '2Na + C + 3/2 O2 -> Na2CO3', '2Na + C + 1.5O2 -> Na2CO3', '2Na + C + 1½O2 -> Na2CO3', '2Na + C + 1 1/2O2 -> Na2CO3'.replace('1 1/2', '3/2')]) {
    assert.equal(equation(typed, soda), 'correct', typed);
  }
  // The doubled whole-number equation balances: form, and told why a fraction is asked.
  for (const [typed, key] of [['8C + 10H2 + O2 -> 2C2H5OC2H5', ether], ['4Na + 2C + 3O2 -> 2Na2CO3', soda], ['4Na(s) + 2C(s) + 3O2(g) -> 2Na2CO3(s)', soda]]) {
    const graded = checkEquation(typed, key);
    assert.equal(graded.status, 'form', typed);
    assert.equal(graded.message, ONE_MOLE, typed);
  }
  assert.doesNotMatch(ONE_MOLE, /smallest whole-number/, 'never the whole-number advice');
  assert.doesNotMatch(ONE_MOLE, /[A-Z][a-z]?\d|ether|carbonate|product/i, 'names no substance');
  // A whole-number key keeps its own message.
  assert.match(checkEquation('4H2 + 2O2 -> 4H2O', '2H₂(g) + O₂(g) ⟶ 2H₂O(l)').message, /smallest whole-number coefficients/);
  // Unbalanced or another coefficient: not the key.
  assert.equal(equation('4C + 5H2 + O2 -> C2H5OC2H5', ether), 'incorrect');
  assert.equal(equation('2Na + C + 1/2O2 -> Na2CO3', soda), 'incorrect');
  // (s, graphite) is a state: optional; (s) typed for it is right (leaving every
  // state out is right, so typing the state without the allotrope cannot be
  // less right); an allotrope typed is compared.
  assert.equal(equation('2Na(s) + C(s) + 3/2O2(g) -> Na2CO3(s)', soda), 'correct');
  assert.equal(equation('2Na(s) + C(s, graphite) + 3/2O2(g) -> Na2CO3(s)', soda), 'correct');
  assert.equal(equation('2Na(s) + C(S, Graphite) + 3/2O2(g) -> Na2CO3(s)', soda), 'correct');
  assert.deepEqual(checkEquation('2Na(s) + C(s, diamond) + 3/2O2(g) -> Na2CO3(s)', soda), { status: 'form', message: STATE_DIFFERS });
  assert.deepEqual(checkEquation('2Na(s) + C(g) + 3/2O2(g) -> Na2CO3(s)', soda), { status: 'form', message: STATE_DIFFERS });
  // "Read as:" prints the fraction as the key does.
  assert.equal(previewChem('2Na + C(s, graphite) + 1.5O2 -> Na2CO3', 'equation'), '2Na + C(s, graphite) + 3⁄2O₂ ⟶ Na₂CO₃');
  assert.equal(previewChem('4C + 5H2 + 1/2O2 -> C2H5OC2H5', 'equation'), '4C + 5H₂ + ½O₂ ⟶ C₂H₅OC₂H₅');
  assert.deepEqual([0.5, 1.5, 0.25, 2.5, 1 / 3, 3].map(fractionText), ['½', '3⁄2', '¼', '5⁄2', '⅓', '3']);
  // The key's fraction is written one way (lint): the glyph, else digits around U+2044.
  for (const [key, wanted] of [['2Na(s) + C(s, graphite) + 3/2O₂(g) ⟶ Na₂CO₃(s)', '3⁄2'], ['4C(s, graphite) + 5H₂(g) + 0.5O₂(g) ⟶ C₂H₅OC₂H₅(l)', '½'],
    ['4C(s, graphite) + 5H₂(g) + 1⁄2O₂(g) ⟶ C₂H₅OC₂H₅(l)', '½'], ['2Na(s) + C(s, graphite) + 1½O₂(g) ⟶ Na₂CO₃(s)', '3⁄2']]) {
    assert.match(chemKeyProblem(key, 'equation') ?? '', new RegExp(`is written "${wanted}"`), key);
  }
  // The source's MathML print reads as the key (the source gates).
  assert.equal(chemCanon('4 C ( s , graphite ) + 5 H 2 ( g ) + ( 1 )/( 2 ) O 2 ( g ) ⟶ C 2 H 5 OC 2 H 5 ( l )', 'equation'), chemCanon(ether, 'equation'));
  assert.equal(chemCanon('2 Na ( s ) + C ( s , graphite ) + ( 3 )/( 2 ) O 2 ( g ) ⟶ Na 2 CO 3 ( s )', 'equation'), chemCanon(soda, 'equation'));
});

test('an ordering: members separated by <, or > from the other end', async () => {
  // Chemistry 2e 6.5, Exercises 5 and 11.
  const { checkOrdering } = await import('./check-chem.mjs');
  const atoms = 'Rb < Li < N < F';
  for (const typed of ['Rb < Li < N < F', 'Rb<Li<N<F', 'F > N > Li > Rb', 'Rb < Li < N < F.']) {
    assert.equal(checkChem(typed, atoms, { form: 'ordering' }).status, 'correct', typed);
  }
  const ions = 'Si⁴⁺ < Al³⁺ < Ca²⁺ < K⁺';
  for (const typed of ['Si4+ < Al3+ < Ca2+ < K+', 'Si^4+ < Al^3+ < Ca^2+ < K^+', 'Si⁴⁺ < Al³⁺ < Ca²⁺ < K⁺', 'K+ > Ca2+ > Al3+ > Si4+']) {
    assert.equal(checkChem(typed, ions, { form: 'ordering' }).status, 'correct', typed);
  }
  // The source prints a charge's minus as a hyphen-minus or an en dash (6.5, Exercise 15).
  assert.equal(checkOrdering('Mg2+ < K+ < Br- < As3-', 'Mg²⁺ < K⁺ < Br⁻ < As³⁻').status, 'correct');
});

test('a wrong ordering is told what is wrong, and never which member goes where', async () => {
  const { checkOrdering, ORDERING_REVERSED, ORDERING_MIXED, ORDERING_ORDER, ORDERING_CAPITALS, ORDERING_CHARGE, ORDERING_UNREAD, ORDERING_NO_SIGN } = await import('./check-chem.mjs');
  const atoms = 'Rb < Li < N < F';
  assert.deepEqual(checkOrdering('F < N < Li < Rb', atoms), { status: 'incorrect', message: ORDERING_REVERSED });
  // A list with no sign is refused, in any order (ruled November 15, 2026).
  assert.deepEqual(checkOrdering('Rb, Li, N, F', atoms), { status: 'incorrect', message: ORDERING_NO_SIGN });
  assert.deepEqual(checkOrdering('Rb Li N F', atoms), { status: 'incorrect', message: ORDERING_NO_SIGN });
  assert.deepEqual(checkOrdering('rubidium, lithium', atoms), { status: 'incorrect', message: ORDERING_UNREAD }, 'not a list of symbols');
  assert.deepEqual(checkOrdering('Rb > Li > N > F', atoms), { status: 'incorrect', message: ORDERING_REVERSED });
  assert.deepEqual(checkOrdering('Rb < N < Li < F', atoms), { status: 'incorrect', message: ORDERING_ORDER });
  assert.deepEqual(checkOrdering('Rb < Li > N < F', atoms), { status: 'incorrect', message: ORDERING_MIXED });
  const members = 'Use each of the 4 members the question lists, each once.';
  assert.deepEqual(checkOrdering('Rb < Li < N', atoms), { status: 'incorrect', message: members });
  assert.deepEqual(checkOrdering('Rb < Li < N < N', atoms), { status: 'incorrect', message: members });
  assert.deepEqual(checkOrdering('Rb < Li < N < O', atoms), { status: 'incorrect', message: members });
  assert.deepEqual(checkOrdering('rb < Li < N < F', atoms), { status: 'incorrect', message: ORDERING_CAPITALS });
  assert.deepEqual(checkOrdering('Si < Al < Ca < K', 'Si⁴⁺ < Al³⁺ < Ca²⁺ < K⁺'), { status: 'incorrect', message: ORDERING_CHARGE });
  assert.deepEqual(checkOrdering('<', atoms), { status: 'incorrect', message: ORDERING_UNREAD });
  assert.equal(checkOrdering('', atoms).status, 'empty');
  // No message prints a member (the formula field's charge sentence gives Ca2+, a member of 6.5's key).
  for (const message of [ORDERING_REVERSED, ORDERING_MIXED, ORDERING_ORDER, ORDERING_CAPITALS, ORDERING_CHARGE, ORDERING_UNREAD, ORDERING_NO_SIGN, members]) {
    assert.doesNotMatch(message, /\b(?:Rb|Li|N|F|Si|Al|Ca|K)\d*[+-]?(?=[\s,.]|$)/, message);
  }
});

test('an ordering\'s preview, canon, and key rules', () => {
  assert.equal(previewChem('F > N > Li > Rb', 'ordering'), 'F > N > Li > Rb');
  assert.equal(previewChem('Si4+ < Al3+', 'ordering'), 'Si⁴⁺ < Al³⁺');
  assert.equal(chemCanon('Mg^{2+} < K^{+} < Br^{–} < As^{3–}', 'ordering'), chemCanon('Mg²⁺ < K⁺ < Br⁻ < As³⁻', 'ordering'));
  assert.equal(chemCanon('F > N > Li > Rb', 'ordering'), chemCanon('Rb < Li < N < F', 'ordering'));
  assert.equal(chemCanon('Rb, Li, N, F', 'ordering'), null, 'a gate reads a sign, not a bare list');
  assert.equal(chemKeyProblem('Si⁴⁺ < Al³⁺ < Ca²⁺ < K⁺', 'ordering'), null);
  assert.match(chemKeyProblem('Rb<Li<N<F', 'ordering'), /not written in print/);
  assert.match(chemKeyProblem('F > N > Li > Rb', 'ordering'), /not written in print/);
  assert.match(chemKeyProblem('Rb < Li < Rb', 'ordering'), /twice/);
  assert.match(chemKeyProblem('Rb < sodium', 'ordering'), /does not read/);
  assert.match(chemKeyProblem('Rb < Li', 'ordering', 'Li < Na'), /does not list exactly the key's members/);
  assert.match(chemKeyProblem('Rb < Li < N < F', 'formula'), /declare answerForm="ordering"/);
});

test('no ion-form message prints the key or an element of it, over every ion key of the corpus; a charge typed without its sign is told so (Chemistry 7.1)', async () => {
  const { readdirSync, readFileSync, statSync } = await import('node:fs');
  const path = await import('node:path');
  const { checkFormula: grade, readSpecies: read, ionChargeMessage, UNSIGNED_CHARGE_MESSAGE } = await import('./check-chem.mjs');
  const root = new URL('../../../../content/physical-sciences/chemistry/', import.meta.url).pathname;
  const files = [];
  const walk = (dir) => { for (const name of readdirSync(dir)) { const full = path.join(dir, name); if (statSync(full).isDirectory()) walk(full); else if (name.endsWith('.md')) files.push(full); } };
  walk(root);
  const keys = new Set();
  for (const file of files) {
    for (const [, body] of readFileSync(file, 'utf8').matchAll(/\{\{< textin([\s\S]*?)>\}\}/g)) {
      if (!/answerForm="formula"/.test(body)) continue;
      const key = /answer="([^"]*)"/.exec(body)?.[1];
      const [reading] = read(key ?? '');
      if (reading?.charge && reading.mass === null) keys.add(key);
    }
  }
  assert(keys.size >= 15, `the corpus's ion keys were read (${keys.size})`);
  const ascii = (text) => text.normalize('NFKC').replace(/\s/g, '');
  for (const key of keys) {
    const [reading] = read(key);
    const bare = reading.canon.split('^')[0];
    const { message = '' } = grade(bare, key);
    assert.match(message, /^An ion’s symbol ends with its charge/, `${key}: ${bare} is told its charge is missing`);
    const examples = [...message.matchAll(/as in (\S+) or (\S+?)\.$/g)].flatMap((match) => [match[1], match[2]]);
    assert.equal(examples.length, 2, key);
    for (const example of examples) {
      assert.notEqual(ascii(example), ascii(key), `${key}: the example is the key`);
      for (const element of Object.keys(reading.atoms)) assert(!new RegExp(`${element}(?![a-z])`).test(example), `${key}: the example ${example} shares ${element}`);
    }
    // The key's atoms and its charge's size, no sign: told so, never the sign.
    const unsigned = `${bare}${Math.abs(reading.charge)}`;
    assert.deepEqual(grade(unsigned, key), { status: 'incorrect', message: UNSIGNED_CHARGE_MESSAGE }, `${key}: ${unsigned}`);
  }
  assert.doesNotMatch(UNSIGNED_CHARGE_MESSAGE, /\d/);
  assert.match(ionChargeMessage(read('Cl⁻')), /as in Mg2\+ or F-\.$/);
  assert.match(ionChargeMessage(read('Se²⁻')), /as in Ca2\+ or Cl-\.$/, 'the old pair where it shares nothing');
  // A neutral key is untouched: O2 against O₂ is right, against O²⁻ it is told the sign.
  assert.equal(grade('O2', 'O₂').status, 'correct');
  assert.equal(grade('O2-', 'O²⁻').status, 'correct');
  assert.equal(grade('O^2', 'O²⁻').message, UNSIGNED_CHARGE_MESSAGE);
});

test('a configuration takes as accept only its own whole key\'s core; an ordering, another full order of its members (Chemistry 7.1, 7.2)', async () => {
  const { checkChem: chem, chemKeyProblem: problem } = await import('./check-chem.mjs');
  const grade = (typed, answer, accept, form) => chem(typed, answer, { accept, form });
  // 7.1 printed 7(c), (g): Be²⁺ and Li⁺ keyed 1s² as the source prints them.
  assert.equal(problem('1s²', 'configuration', '[He]'), null);
  assert.equal(grade('[He]', '1s²', '[He]', 'configuration').status, 'correct');
  assert.equal(grade('1s2', '1s²', '[He]', 'configuration').status, 'correct');
  assert.equal(grade('[He]', '1s²', '', 'configuration').status, 'form', 'without the member, the full-configuration message stands');
  assert.equal(grade('[He]2s1', '1s²', '[He]', 'configuration').status, 'incorrect');
  assert.match(problem('1s²2s²2p⁶', 'configuration', '[He]'), /not the key's configuration/);
  assert.match(problem('[Ne]3s²', 'configuration', '[Ne]'), /only the noble-gas core|already prints a core/);
  assert.match(problem('1s²', 'configuration', '1s2'), /only the noble-gas core/);
  // 7.2 printed 17(c): H and P tie at 2.1 in the page's figure.
  const KEY = 'H < P < S < O < F';
  const TIE = 'P < H < S < O < F';
  assert.equal(problem(KEY, 'ordering', TIE), null);
  for (const typed of ['H < P < S < O < F', 'P < H < S < O < F', 'F > O > S > H > P']) assert.equal(grade(typed, KEY, TIE, 'ordering').status, 'correct', typed);
  assert.equal(grade('P < H < S < O < F', KEY, '', 'ordering').status, 'incorrect', 'without the member the tie is refused');
  assert.equal(grade('H < P < O < S < F', KEY, TIE, 'ordering').status, 'incorrect');
  assert.match(grade('H < P < O < S < F', KEY, TIE, 'ordering').message, /not in the right order/, 'the key\'s own message stands');
  assert.match(problem(KEY, 'ordering', 'P < H < S < O'), /exactly the key's members/);
  assert.match(problem(KEY, 'ordering', 'P<H<S<O<F'), /not written in print/);
  assert.match(problem(KEY, 'ordering', KEY), /the key itself/);
});

test('a charge typed alone against an ion\'s symbol is told the symbol is missing, never which (Chemistry 7.1)', async () => {
  const { checkFormula: grade, BARE_CHARGE_MESSAGE } = await import('./check-chem.mjs');
  for (const [typed, key] of [['3-', 'P³⁻'], ['-3', 'P³⁻'], ['3−', 'P³⁻'], ['2+', 'Mg²⁺'], ['+2', 'Mg²⁺'], ['+', 'Na⁺'], ['-', 'Cl⁻'], ['2-', 'SO₄²⁻']]) {
    assert.deepEqual(grade(typed, key), { status: 'incorrect', message: BARE_CHARGE_MESSAGE }, `${typed} against ${key}`);
  }
  assert.doesNotMatch(BARE_CHARGE_MESSAGE, /\d|[A-Z][a-z]?\d|\b(?:P|Mg|Na|Cl)\b/, 'no number, no element');
  // Not against a neutral key, and not for a number with no sign.
  assert.notEqual(grade('2-', 'CO₂').message, BARE_CHARGE_MESSAGE);
  assert.notEqual(grade('3', 'P³⁻').message, BARE_CHARGE_MESSAGE);
  assert.equal(grade('P3-', 'P³⁻').status, 'correct');
});
