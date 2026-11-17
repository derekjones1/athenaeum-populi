/**
 * The gate probe: a chapter's keyed units run through the two source gates
 * before the chapter is authored. Fixtures are the shapes that had to be
 * fixed before chapter 2 and the one shape the probe can only report.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { askOf, itemsFor, probeModule } from './chemistry-gate-probe.mjs';
import { keyedUnits } from '../lib/keyed-units.mjs';

const cnxml = (body) => `<?xml version="1.0"?><document xmlns="http://cnx.rice.edu/cnxml"><content><section class="exercises"><title>Exercises</title>${body}</section></content></document>`;
const exercise = (id, paragraphs, solution) => `<exercise id="${id}"><problem>${
  paragraphs.map((text) => `<para>${text}</para>`).join('')}</problem>${
  solution ? `<solution><para>${solution}</para></solution>` : ''}</exercise>`;
const image = (name) => `<media alt="a structure"><image mime-type="image/jpg" src="../../media/${name}.jpg"/></media>`;

test('a module the gates read whole has no finding', () => {
  const { findings, keyed } = probeModule(cnxml(
    exercise('a1', ['Write the formulas of the following compounds:', '(a) rubidium bromide', '(b) magnesium selenide'], '(a) RbBr; (b) MgSe')
    + exercise('a2', ['Write the formulas of the following compounds:', '(a) lithium carbonate', '(b) sodium perchlorate'], null)
    + exercise('a3', [`Write the empirical formulas for the following compounds:</para><para>(a)<newline/>${image('Q7a')}<newline/> (b)<newline/>${image('Q7b')}`], '(a) CH<sub>2</sub>O; (b) C<sub>2</sub>H<sub>4</sub>O')
    + exercise('a4', ['Write the electron configuration for each of the following ions:', '(a) As<sup>3–</sup>', '(b) As<sup>3+</sup>'], '(a) thirty-six electrons; (b) thirty electrons')
    + exercise('a5', ['A long ton is defined as exactly 2240 lb. What is this mass in kilograms?'], '1.0160 × 10<sup>3</sup> kg'),
  ));
  assert.equal(keyed, 7);
  assert.deepEqual(findings, []);
});

test('a keyed formula that does not read, and two exercises with one stem, are findings', () => {
  const { findings } = probeModule(cnxml(
    exercise('b1', ['Write the formulas of the following compounds:', '(a) aluminum fluoride trihydrate', '(b) silicon dioxide'], '(a) AIF<sub>3</sub>·3H<sub>2</sub>O; (b) SiO<sub>2</sub>')
    // An unkeyed twin with the keyed exercise's stem, word for word, is no finding: the item is the keyed one's.
    + exercise('b2', ['How would the graph change if the number of moles of gas in the sample were doubled?'], null)
    + exercise('b3', ['How would the graph change if the number of moles of gas in the sample were doubled?'], 'The curve would be farther to the right and higher up.')
    // Two KEYED exercises with one stem and two answers cannot be told apart by their words.
    + exercise('b4', ['Identify the oxidant and reductant of each reaction of the previous exercise.'], 'oxidant = Cl<sub>2</sub>')
    + exercise('b5', ['Identify the oxidant and reductant of each reaction of the previous exercise.'], 'oxidant = O<sub>2</sub>'),
  ));
  assert.deepEqual(findings.map((finding) => [finding.unit, finding.kind]), [['b1(a)', 'key not confirmed'], ['b5', 'read as another']]);
});

test('the probe builds chapter 3\'s three shapes as the page carries them', () => {
  // Labelled formulas (3.2), a closed set (3.1), and a Check Your Learning
  // that leans on the one before it (3.3): before the probe built them so it
  // printed no finding, and the gates failed all three on the real pages.
  const module = (body, examples = '') => `<?xml version="1.0"?><document xmlns="http://cnx.rice.edu/cnxml"><content>${examples}<section class="exercises"><title>Exercises</title>${body}</section></content></document>`;
  const xml = module(
    exercise('fs-idm149528800', ['Determine the empirical and molecular formula for chrysotile asbestos. Chrysotile has the following percent composition: 28.03% Mg, 21.60% Si, 1.16% H, and 49.21% O. The molar mass for chrysotile is 520.8 g/mol.'],
      'Mg<sub>3</sub>Si<sub>2</sub>H<sub>3</sub>O<sub>8</sub> (empirical formula), Mg<sub>6</sub>Si<sub>4</sub>H<sub>6</sub>O<sub>16</sub> (molecular formula)')
    + exercise('fs-idp40890272', ['Which of the following represents the least number of molecules?', '(a) 20.0 g of H<sub>2</sub>O (18.02 g/mol)', '(b) 77.0 g of CH<sub>4</sub> (16.06 g/mol)', '(c) 68.0 g of C<sub>3</sub>H<sub>6</sub> (42.08 g/mol)', '(d) 100.0 g of N<sub>2</sub>O (44.02 g/mol)', '(e) 84.0 g of HF (20.01 g/mol)'],
      '20.0 g H<sub>2</sub>O represents the least number of molecules since it has the least number of moles.'),
    '<example id="fs-idm98982768"><para><title>Check Your Learning</title>A teaspoon of table sugar contains about 0.01 mol sucrose. What is the molarity of sucrose if a teaspoon of sugar has been dissolved in a cup of tea with a volume of 200 mL?</para>'
    + '<note><title>Answer:</title><para>0.05 <emphasis effect="italics">M</emphasis></para></note></example>'
    + '<example id="fs-idm64107376"><para><title>Check Your Learning</title>What volume (mL) of the sweetened tea described in <link target-id="fs-idm98982768"/> contains the same amount of sugar (mol) as 10 mL of the soft drink in this example?</para>'
    + '<note><title>Answer:</title><para>80 mL</para></note></example>',
  );
  const result = probeModule(xml);
  assert.equal(result.keyed, 4, 'the closed set is ONE unit');
  const units = keyedUnits(xml);
  const unit = (id) => units.find((candidate) => candidate.id === id);
  assert.deepEqual(itemsFor(unit('fs-idm149528800'), units).map((item) => [item.type, item.answer, item.question.split('. ').pop()]),
    [['textin', 'Mg _3 Si _2 H _3 O _8', 'Enter the empirical formula.'], ['textin', 'Mg _6 Si _4 H _6 O _16', 'Enter the molecular formula.']]);
  const [choice] = itemsFor(unit('fs-idp40890272'), units);
  assert.deepEqual([choice.type, choice.question, choice.options.length, choice.answer], ['multiplechoice', 'Which of the following represents the least number of molecules?', 5, '20.0 g of H 2 O (18.02 g/mol)']);
  assert.match(askOf(unit('fs-idm64107376#check'), units), /^A teaspoon of table sugar contains about 0\.01 mol sucrose\. What is the molarity of sucrose if .* 200 mL\. What volume \(mL\) of the sweetened tea/);
  assert.deepEqual(result.findings, []);
});

test('the probe builds chapter 4\'s several-keys parts one item per key, and finds a sibling\'s key the gate would confirm', () => {
  const xml = cnxml(
    exercise('c7', ['Colorful fireworks often involve the reaction of the metals magnesium and aluminum with oxygen.', '(a) Write separate equations for the reactions of the solid metals magnesium and aluminum with diatomic oxygen gas.', '(b) Write the formula of potassium chlorate.'],
      '(a) 2 Mg ( s ) + O 2 ( g ) ⟶ 2 MgO ( s ) ; 4 Al ( s ) + 3 O 2 ( g ) ⟶ 2 Al 2 O 3 ( s ) ; (b) KClO<sub>3</sub>')
    + exercise('c9', ['Solid calcium fluoride can be prepared by the reaction of aqueous solutions of calcium chloride and sodium fluoride. Write complete and net ionic equations for this reaction.'],
      'complete ionic equation: 2 Na<sup>+</sup> ( a q ) + 2 F<sup>−</sup> ( a q ) + Ca<sup>2+</sup> ( a q ) + 2 Cl<sup>−</sup> ( a q ) ⟶ CaF 2 ( s ) + 2 Na<sup>+</sup> ( a q ) + 2 Cl<sup>−</sup> ( a q ), net ionic equation: 2 F<sup>−</sup> ( a q ) + Ca<sup>2+</sup> ( a q ) ⟶ CaF 2 ( s )')
    + exercise('c6', ['Determine the oxidation states of the elements in the compounds listed.', '(a) H<sub>3</sub>PO<sub>4</sub>', '(b) SeO<sub>2</sub>'], '(a) H +1, P +5, O −2; (b) Se +4, O −2')
    + exercise('c2', ['Determine the number of moles and the mass of chlorine, Cl<sub>2</sub>, required to react with 10.0 g of sodium metal, Na, to produce sodium chloride, NaCl.'],
      '0.435 mol Na, 0.217 mol Cl<sub>2</sub>, 15.4 g Cl<sub>2</sub>'),
  );
  const units = keyedUnits(xml);
  const built = (id) => itemsFor(units.find((unit) => unit.id === id), units).map((item) => [item.type, item.answer, item.question.split(/(?<=[.?!])\s+/).pop()]);
  assert.deepEqual(built('c7(a)').map(([, , closing]) => closing), ['Enter the equation for the reaction of magnesium.', 'Enter the equation for the reaction of aluminum.']);
  assert.deepEqual(built('c9').map(([, , closing]) => closing), ['Enter the complete ionic equation.', 'Enter the net ionic equation.']);
  assert.deepEqual(built('c6(a)'), [['fillin', '1', 'Enter the oxidation state of H as a signed number, the sign first, as +2 or −1.'],
    ['fillin', '5', 'Enter the oxidation state of P as a signed number, the sign first, as +2 or −1.'], ['fillin', '-2', 'Enter the oxidation state of O as a signed number, the sign first, as +2 or −1.']]);
  assert.deepEqual(built('c2'), [['fillin', '0.217', 'Enter the number of moles of Cl_2.'], ['fillin', '15.4', 'Enter the mass of Cl_2 in grams.']]);
  assert.deepEqual(probeModule(xml).findings, []);
  // 8.2 prints oxidation states AND formal charges by symbol, each list after
  // its heading: until chapter 8 the probe built all four as oxidation
  // states, and the gate confirmed O's formal charge −1 under "Enter the
  // oxidation state of O …" (a swap). Now one item per entry, each closing
  // with its own list's sentence, and every sibling's key refused.
  const both = cnxml(exercise('f1', ['Determine the oxidation states and formal charge of the atoms in the ClO<sub>3</sub><sup>–</sup> ion.'], 'Oxidation states Cl +5, O –2. Formal charges: Cl +2: O –1'));
  const f1 = keyedUnits(both);
  assert.deepEqual(itemsFor(f1[0], f1).map((item) => [item.answer, item.question.split(/(?<=[.?!])\s+/).pop()]), [
    ['5', 'Enter the oxidation state of Cl as a signed number, the sign first, as +3 or −3.'],
    ['-2', 'Enter the oxidation state of O as a signed number, the sign first, as +3 or −3.'],
    ['2', 'Enter the formal charge of Cl as a signed number, the sign first, as +3 or −3.'],
    ['-1', 'Enter the formal charge of O as a signed number, the sign first, as +3 or −3.'],
  ]);
  assert.deepEqual(probeModule(both).findings, []);
});

test('chapter 6\'s shapes are built as the page carries them, and the gates read every one (Chemistry 2e 6.3–6.5)', () => {
  const em = (letter) => `<emphasis effect="italics">${letter}</emphasis>`;
  const printed = (spaced) => spaced.split(' ').map((token) => token.replace(/^(\d)([spdf])(\d+)$/, (_, n, l, count) => `${n}${em(l)}<sup>${count}</sup>`)).join('');
  // 6.3's spin, ½ in MathML with the separator inside the math.
  const half = (mark) => `<m:math><m:mrow><m:mfrac><m:mn>1</m:mn><m:mn>2</m:mn></m:mfrac><m:mo>${mark}</m:mo></m:mrow></m:math>`;
  const xml = cnxml(
    exercise('c4', ['Predict the electron configuration of each of the following atoms:', '(a) N', '(b) Fe'], `(a) ${printed('1s2 2s2 2p3')}; (b) ${printed('1s2 2s2 2p6 3s2 3p6 4s2 3d6')}`)
    + exercise('c20', ['Cobalt–60 and iodine–131 are radioactive isotopes commonly used in nuclear medicine. How many protons, neutrons, and electrons are in atoms of these isotopes? Write the complete electron configuration for each isotope.'],
      `Co has 27 protons, 27 electrons, and 33 neutrons: ${printed('1s2 2s2 2p6 3s2 3p6 4s2 3d7')}. I has 53 protons, 53 electrons, and 78 neutrons: ${printed('1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p5')}.`)
    + exercise('r5', ['Based on their positions in the periodic table, rank the following atoms in order of increasing first ionization energy: F, Li, N, Rb'], 'Rb &lt; Li &lt; N &lt; F')
    + exercise('s5', [`Identify the subshell in which electrons with the following quantum numbers are found:`, `(a) ${em('n')} = 2, ${em('l')} = 1`, `(b) ${em('n')} = 4, ${em('l')} = 2`], `(a) 2${em('p')}; (b) 4${em('d')}`)
    + exercise('o11', ['Consider the orbitals shown here in outline.', '(a) What is the maximum number of electrons contained in an orbital of type (x)? Of type (y)? Of type (z)?', '(b) How many orbitals of type (x) are found in a shell with n = 2? How many of type (y)? How many of type (z)?', '(c) Write a set of quantum numbers for an electron in an orbital of type (x) in a shell with n = 4. Of an orbital of type (y) in a shell with n = 2. Of an orbital of type (z) in a shell with n = 3.'], `(a) x. 2, y. 2, z. 2; (b) x. 1, y. 3, z. 0; (c) x. 4 0 0 ${half(',')} y. 2 1 0 ${half(',')} z. 3 2 0 ${half(';')}`)
    + exercise('i13', ['Which atom and/or ion is (are) isoelectronic with Br<sup>+</sup>: Se<sup>2+</sup>, Se, As<sup>–</sup>, Kr, Ga<sup>3+</sup>, Cl<sup>–</sup>?'], 'Se, As<sup>−</sup>')
    + exercise('p12', [`Which ion with a +1 charge has the electron configuration ${printed('1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6')}? Which ion with a –2 charge has this configuration?`], 'Rb<sup>+</sup>, Se<sup>2−</sup>'),
  );
  const units = keyedUnits(xml);
  const built = (id) => itemsFor(units.find((unit) => unit.id === id), units);
  assert.deepEqual(built('c4(b)').map(({ type, form }) => [type, form]), [['textin', 'configuration']]);
  assert.match(built('c4(b)')[0].question, /Type each subshell followed by its number of electrons, with a space between subshells\.$/);
  assert.deepEqual(built('c20').map(({ type, form }) => `${type}:${form}`), [...Array(3).fill('fillin:whole-number'), 'textin:configuration', ...Array(3).fill('fillin:whole-number'), 'textin:configuration']);
  assert.match(built('r5')[0].question, /separated by <\.$/);
  assert.deepEqual(built('s5(a)').map(({ answer, form }) => [answer, form]), [['2p', '']]);
  assert.deepEqual(built('o11(b)').map(({ answer }) => answer), ['1', '3', '0']);
  // One set of quantum numbers per orbital type, keyed in the page's print, each closing with its type and how a set is typed.
  assert.deepEqual(built('o11(c)').map(({ answer, form }) => [answer, form]), [['4 0 0 +1/2', 'quantum-numbers'], ['2 1 0 +1/2', 'quantum-numbers'], ['3 2 0 +1/2', 'quantum-numbers']]);
  assert.match(built('o11(c)')[1].question, /Enter the set for the orbital of type \(y\) shown in the figure above\. Type the four values in the order n, l, mₗ, mₛ, separated by spaces\.$/);
  assert.deepEqual(built('i13').map(({ answer }) => answer), ['no', 'yes', 'yes', 'no', 'no', 'no']);
  assert.deepEqual(built('p12').map(({ question }) => question.split('? ').pop()), ['Enter the symbol of the ion with a +1 charge.', 'Enter the symbol of the ion with a –2 charge.']);
  assert.deepEqual(probeModule(xml).findings, []);
});

test('chapter 7\'s configuration pairs and comma-list orderings are built as the page carries them, and the gates read every one (7.1, 7.2)', () => {
  const em = (letter) => `<emphasis effect="italics">${letter}</emphasis>`;
  const printed = (spaced) => spaced.split(' ').map((token) => token.replace(/^(\d)([spdf])(\d+)$/, (_, n, l, count) => `${n}${em(l)}<sup>${count}</sup>`)).join('');
  const xml = cnxml(
    exercise('f9', ['Write out the full electron configuration for each of the following atoms and for the monatomic ion found in binary ionic compounds containing the element:', '(a) Al', '(b) Br'],
      `(a) ${printed('1s2 2s2 2p6 3s2 3p1')}; Al<sup>3+</sup>: ${printed('1s2 2s2 2p6')}; (b) ${printed('1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p5')}; ${printed('1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6')}`)
    + exercise('k1', ['Potassium and magnesium are required in our diet. Write the electron configurations of the ions expected from these elements.'], 'K<sup>+</sup>: [Ar], Mg<sup>2+</sup>: [Ne]')
    + exercise('n7', ['From their positions in the periodic table, arrange the atoms in each of the following series in order of increasing electronegativity:', '(a) C, F, H, N, O', '(b) Al, H, Na, O, P'], '(a) H, C, N, O, F; (b) Na, Al, H, P, O'),
  );
  const units = keyedUnits(xml);
  const built = (id) => itemsFor(units.find((unit) => unit.id === id), units);
  const closing = (item) => item.question.split(/(?<=\.)\s+(?=Enter)/).pop().replace(/ Type each.*$/, '');
  assert.deepEqual(built('f9(a)').map((item) => [closing(item), item.form]), [['Enter the electron configuration of the atom.', 'configuration'], ['Enter the electron configuration of the ion.', 'configuration']]);
  assert.deepEqual(built('f9(b)').map(closing), ['Enter the electron configuration of the atom.', 'Enter the electron configuration of the ion.']);
  assert.deepEqual(built('k1').map((item) => [closing(item), item.answer]), [['Enter the electron configuration of the potassium ion.', '[Ar]'], ['Enter the electron configuration of the magnesium ion.', '[Ne]']]);
  assert.deepEqual(built('n7(a)').map(({ answer, form }) => [answer, form]), [['H < C < N < O < F', 'ordering']]);
  // Every item confirmed, and every swapped sibling refused: no finding.
  assert.deepEqual(probeModule(xml).findings, []);
});
