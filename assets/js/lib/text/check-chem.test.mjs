import test from 'node:test';
import assert from 'node:assert/strict';
import {
  checkChem, checkEquation, checkFormula, chemCanon, chemKeyProblem, prettySpecies, previewChem, readSpecies,
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
  // An equilibrium arrow is an arrow.
  assert.equal(equation('N2 + 3H2 <=> 2NH3', 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)'), 'correct');
  // A fractional coefficient is the key's, when the key prints one.
  assert.equal(equation('H2 + 1/2O2 -> H2O', 'H₂(g) + 1/2O₂(g) ⟶ H₂O(l)'), 'correct');
  assert.equal(equation('2H2 + O2 -> 2H2O', 'H₂(g) + 1/2O₂(g) ⟶ H₂O(l)'), 'form');
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
