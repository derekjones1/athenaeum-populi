/**
 * A rubric clause as a run of its model answer's words (Chemistry 2e). Each
 * fixture is a clause of the book as it stood on November 15, 2026: the ones
 * a literal comparison refused though they copy the model answer, and the
 * ones that reworded it.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { isWordRun, readPlain, readWords } from './rubric-run.mjs';

test('a clause copied from the model answer is a run, whatever its capitals and punctuation', () => {
  const model = 'This small, whole-number ratio supports the law of multiple proportions. This means that X and Y are different compounds.';
  assert(isWordRun('this small, whole-number ratio supports the law of multiple proportions', model));
  assert(isWordRun('this means that X and Y are different compounds', model));
  assert(isWordRun('whole number ratio', model), 'a hyphen is punctuation');
  assert(isWordRun('', model), 'an empty clause is the count rule’s to refuse');
});

test('a run starts and ends on a word of the model answer', () => {
  const model = 'Its ions are unable to flow.';
  assert(isWordRun('its ions are unable to flow', model));
  assert(!isWordRun('ions are able to flow', model), '"able" is not a word of "unable"');
  assert(!isWordRun('its ions are unable to flo', model), 'half a word is not a word');
});

test('a clause that leaves words out of the middle, or joins two runs, is not a run', () => {
  const worthless = 'This amount cannot be weighed by ordinary balances and is worthless.';
  assert(!isWordRun('this amount is worthless', worthless));
  assert(isWordRun('this amount cannot be weighed by ordinary balances', worthless));
  assert(isWordRun('is worthless', worthless));

  const softball = 'the particle’s momentum (mathematical product of mass and velocity) must be sufficiently small to yield a detectably large wavelength.';
  assert(!isWordRun('the particle’s momentum must be sufficiently small to yield a detectably large wavelength', softball), 'a parenthesis left out is a gap');
  assert(isWordRun('the particle’s momentum (mathematical product of mass and velocity) must be sufficiently small', softball));

  const criteria = 'A good answer states the numbers of protons, neutrons, and electrons in the atom, as well as its net charge and its mass number.';
  assert(!isWordRun('states its net charge', criteria), 'a verb carried over a list is a rewording');
  assert(isWordRun('its net charge', criteria));
});

test('TeX in the model answer and plain text in the clause are one reading', () => {
  assert(isWordRun('mₗ determines the orientation of the orbitals of the same l value', '$m_l$ determines the orientation of the orbitals of the same $l$ value with respect to one another.'));
  assert(isWordRun('mₛ determines the spin of an electron', '$m_s$ determines the spin of an electron.'));
  assert(isWordRun('ΔT for the water would be lesser', 'and so $\\Delta T$ for the water would be lesser and the calculated $q$ would be lesser.'));
  assert(isWordRun('its ΔH° is twice the standard enthalpy of formation of H₂O(g)', 'so its $\\Delta H^\\circ$ is twice the standard enthalpy of formation of H₂O(*g*).'));
  assert(isWordRun('for an orbital of type (y): l = 1, mₗ = −1, 0, or +1', 'For an orbital of type (y): $l = 1$, $m_l = -1, 0, \\text{ or } +1$.'));
  assert(isWordRun('the isotope symbol is ⁶Li or ⁶₃Li', 'The isotope symbol is ⁶Li or $\\ce{^{6}_{3}Li}$.'));
  assert(isWordRun('HCl(g) ⟶ H(g) + Cl(g)', '$$\\ce{HCl(g) -> H(g) + Cl(g)} \\\\ \\qquad \\Delta H^\\circ = \\Delta H^\\circ_1$$'));
});

test('a fraction reads top over bottom, a nested one whole', () => {
  const model = 'In compound X, the mass ratio of carbon to hydrogen is $\\frac{14.13\\ \\text{g C}}{2.96\\ \\text{g H}}$. The ratio of these ratios is\n\n$$\\begin{aligned} \\frac{\\frac{14.13\\ \\text{g C}}{2.96\\ \\text{g H}}}{\\frac{19.91\\ \\text{g C}}{3.34\\ \\text{g H}}} &= \\frac{4.77\\ \\text{g C/g H}}{5.96\\ \\text{g C/g H}} \\\\ &= 0.800 = \\frac{4}{5}. \\end{aligned}$$';
  assert(isWordRun('in compound X, the mass ratio of carbon to hydrogen is 14.13 g C/2.96 g H', model));
  assert(isWordRun('0.800 = 4/5', model));
  assert(!isWordRun('the ratio of these ratios is 0.800 = 4/5', model), 'the steps between are a gap');
  assert.deepEqual(readWords('$\\frac{\\frac{1}{2}}{\\frac{3}{4}}$'), ['1', '2', '3', '4']);
});

test('markup is not a word: emphasis, an underlined atom, a table’s bars, a shortcode’s tag', () => {
  assert(isWordRun('removal of the 4s electron in Ca requires more energy', 'Removal of the 4*s* electron in Ca requires more energy than removal of the 4*s* electron in K.'));
  assert(isWordRun('carbon (CO₂)—trigonal planar', 'carbon (<u>C</u>H₃)—tetrahedral; carbon (<u>C</u>O₂)—trigonal planar; oxygen (<u>O</u>H)—bent (109°).'));
  assert(!isWordRun('oxygen—bent (109°)', 'oxygen (<u>O</u>H)—bent (109°).'), 'the atom’s label left out is a gap');
  assert(isWordRun('Si–C 0.7, Si δ+, C δ−', '| C–H | 0.4 | $\\overset{\\delta-}{\\text{C}}{-}\\overset{\\delta+}{\\text{H}}$ |\n| Si–C | 0.7 | $\\overset{\\delta+}{\\text{Si}}{-}\\overset{\\delta-}{\\text{C}}$ |'));
  const drawing = '{{< mediafigure src="chemistry/x" kind="diagram" alt="Two rounded lobes along the y axis." >}}\n{{< /mediafigure >}}\n\nThe orbital is drawn as two lobes.';
  assert(isWordRun('the orbital is drawn as two lobes', drawing));
  assert(!isWordRun('two rounded lobes along the y axis', drawing), 'a drawing’s alt is not a sentence of the model answer');
  assert.equal(readPlain('See [Appendix G](/physical-sciences/chemistry/appendices/g/).').trim(), 'See Appendix G.');
});

test('a sign is read, so a clause cannot turn one', () => {
  const polarity = '| C–H | 0.4 | $\\overset{\\delta-}{\\text{C}}{-}\\overset{\\delta+}{\\text{H}}$ |';
  assert(isWordRun('C–H 0.4, C δ−, H δ+', polarity));
  assert(!isWordRun('C–H 0.4, C δ+, H δ−', polarity), 'the two partial charges exchanged');
  const values = 'four sets have $l = 1$ and an $m_l$ of −1, 0, or +1.';
  assert(isWordRun('four sets have l = 1 and an mₗ of −1, 0, or +1', values));
  assert(!isWordRun('four sets have l = 1 and an mₗ of +1, 0, or −1', values));
  assert(isWordRun('−(−92.307 kJ) + 217.97 kJ + 121.3 kJ = 431.6 kJ', '$$\\begin{aligned} D &= -(-92.307\\ \\text{kJ}) + 217.97\\ \\text{kJ} + 121.3\\ \\text{kJ} \\\\ &= 431.6\\ \\text{kJ} \\end{aligned}$$'));
  assert(isWordRun('⁶Li⁺ or ⁶₃Li⁺', 'The symbol for the ion you have created is ⁶Li⁺ or $\\ce{^{6}_{3}Li+}$.'));
  assert(!isWordRun('⁶Li⁻', 'The symbol is ⁶Li⁺.'));
});
