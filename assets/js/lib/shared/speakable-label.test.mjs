/**
 * Run with:  node --test assets/js/lib/shared/speakable-label.test.mjs
 *
 * The accessible name of a fill-in field and of a multiple-choice option is
 * built here. The serializer is MathLive's in the browser; these tests hand
 * in a stand-in that marks what it was given, so they show exactly which
 * text reached it — and that a `\ce{…}` group never does.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { plainMathText, speakableMathText, splitChemistry } from './speakable-label.mjs';

const spoken = (latex) => `<${latex.trim()}>`;
const chemistry = (latex) => splitChemistry(latex).filter((piece) => piece.chemistry).map((piece) => piece.text);

test('a \\ce formula is spelled in the Unicode a prose formula uses', async (t) => {
  const rows = [
    ['\\ce{H2O}', 'H₂O'],
    ['\\ce{CoCl2}', 'CoCl₂'],
    ['\\ce{C6H12O6}', 'C₆H₁₂O₆'],
    ['\\ce{Ca3(PO4)2}', 'Ca₃(PO₄)₂'],
    ['\\ce{[Cu(NH3)4]^2+}', '[Cu(NH₃)₄]²⁺'],
    ['\\ce{SO4^2-}', 'SO₄²⁻'],
    ['\\ce{SO4^{2-}}', 'SO₄²⁻'],
    ['\\ce{Fe^3+}', 'Fe³⁺'],
    ['\\ce{H3O+}', 'H₃O⁺'],
    ['\\ce{Cl-}', 'Cl⁻'],
    ['\\ce{CuSO4*5H2O}', 'CuSO₄·5H₂O'],
    ['\\ce{^{14}_{6}C}', '¹⁴₆C'],
    ['\\ce{^{14}C}', '¹⁴C'],
    ['\\ce{CH3-CH3}', 'CH₃-CH₃'],     // a bond is not a charge
  ];
  for (const [latex, text] of rows) {
    await t.test(latex, () => assert.deepEqual(chemistry(latex), [text]));
  }
});

test('a \\ce reaction keeps its coefficients, states, charges, and arrow', async (t) => {
  const rows = [
    ['\\ce{2H2(g) + O2(g) -> 2H2O(l)}', '2H₂(g) + O₂(g) → 2H₂O(l)'],
    ['\\ce{N2(g) + 3H2(g) <=> 2NH3(g)}', 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)'],
    ['\\ce{CaCO3(s) ->[\\Delta] CaO(s) + CO2(g)}', 'CaCO₃(s) → (Δ) CaO(s) + CO₂(g)'],
    ['\\ce{Ag+(aq) + Cl-(aq) -> AgCl(s)}', 'Ag⁺(aq) + Cl⁻(aq) → AgCl(s)'],
    ['\\ce{MnO4-(aq) + 8H+(aq) + 5e- -> Mn^2+(aq) + 4H2O(l)}', 'MnO₄⁻(aq) + 8H⁺(aq) + 5e⁻ → Mn²⁺(aq) + 4H₂O(l)'],
    ['\\ce{CO2(g) -> CO(g) + 1/2 O2(g)}', 'CO₂(g) → CO(g) + 1/2 O₂(g)'],
    ['\\ce{^{238}_{92}U -> ^{234}_{90}Th + ^{4}_{2}He}', '²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He'],
    ['\\ce{CCl4 + 2HF -> CF2Cl2 + 2HCl}', 'CCl₄ + 2HF → CF₂Cl₂ + 2HCl'],
  ];
  for (const [latex, text] of rows) {
    await t.test(latex, () => assert.deepEqual(chemistry(latex), [text]));
  }
});

test('splitChemistry hands the serializer only what is not chemistry', () => {
  assert.deepEqual(splitChemistry('\\tfrac{1}{2}'), [{ chemistry: false, text: '\\tfrac{1}{2}' }]);
  assert.deepEqual(splitChemistry('\\ce{N2(g) + 3H2(g) <=> 2NH3(g)} \\qquad \\Delta H = -92.2\\ \\text{kJ}'), [
    { chemistry: true, text: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)' },
    { chemistry: false, text: ' \\qquad \\Delta H = -92.2\\ \\text{kJ}' },
  ]);
  assert.deepEqual(splitChemistry('1\\ \\text{mol}\\ \\ce{H2O}'), [
    { chemistry: false, text: '1\\ \\text{mol}\\ ' },
    { chemistry: true, text: 'H₂O' },
  ]);
  // An unclosed group is left for the serializer rather than guessed at.
  assert.deepEqual(splitChemistry('\\ce{H2O'), [{ chemistry: false, text: '\\ce{H2O' }]);
});

test('speakableMathText names a compound the serializer would have dropped', () => {
  // The Chemistry 2e 3.3 molarity stem: MathLive returned '' for the formula,
  // so the field was named "…of 6.52g of ( 128.9g/mol ) dissolved…".
  assert.equal(
    speakableMathText('Calculate the molarity of $6.52\\ \\text{g}$ of $\\ce{CoCl2}$ dissolved in water.', spoken),
    'Calculate the molarity of <6.52\\ \\text{g}> of CoCl₂ dissolved in water.',
  );
  assert.equal(speakableMathText('$\\ce{SO4^2-}$', spoken), 'SO₄²⁻');
  assert.equal(
    speakableMathText('What mass of $\\ce{CF2Cl2}$ forms by $\\ce{CCl4 + 2HF -> CF2Cl2 + 2HCl}$?', spoken),
    'What mass of CF₂Cl₂ forms by CCl₄ + 2HF → CF₂Cl₂ + 2HCl ?',
  );
  // Math with no chemistry in it is untouched, money included.
  assert.equal(speakableMathText('Simplify $\\tfrac{3}{4}$ for \\$5', spoken), 'Simplify <\\tfrac{3}{4}> for $5');
  assert.equal(plainMathText('Simplify $\\tfrac{3}{4}$ for \\$5'), 'Simplify \\tfrac{3}{4} for $5');
});

test('a linked stem is spoken as its words, never as brackets and a path', () => {
  // docs/subjects/chemistry.md, page skeleton rule 9: a stem that sends the
  // learner to an appendix links it. The page renders the link; the field's
  // accessible name is built from the raw prompt.
  const stem = 'Using the [periodic table](/physical-sciences/chemistry/appendices/a-the-periodic-table/), give the number of protons in an atom of tin.';
  const heard = 'Using the periodic table, give the number of protons in an atom of tin.';
  assert.equal(plainMathText(stem), heard);
  assert.equal(speakableMathText(stem, spoken), heard);
  assert.equal(plainMathText('Visit this [density simulation](http://openstax.org/l/16phetmasvolden) and weigh the block.'), 'Visit this density simulation and weigh the block.');
  // Math is untouched: brackets before a parenthesis are not a link without a destination.
  assert.equal(plainMathText('Evaluate $[2, 5](x)$ and $f[x](3)$.'), 'Evaluate [2, 5](x) and f[x](3).');
  assert.equal(speakableMathText('Find $\\ce{[Co(NH3)6]^3+}$ in [Appendix K](/physical-sciences/chemistry/appendices/k-formation-constants-for-complex-ions/).', spoken),
    speakableMathText('Find $\\ce{[Co(NH3)6]^3+}$ in Appendix K.', spoken));
});
