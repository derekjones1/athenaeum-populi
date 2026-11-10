/**
 * Keyed units: how the two source gates read a book that renders only the
 * exercises its source keys (Chemistry 2e). The fixtures are the shapes of
 * chapter 1: lettered parts under a shared lead-in, one solution paragraph
 * answering every part, numbers written to their significant figures.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  KEYED_ONLY_BOOKS, answerText, keyedUnits, plain, printedNumerals, sequentialParts, unitFor, unitScore,
} from './keyed-units.mjs';
import { parseXml } from './openstax-source.mjs';
import { judgeKeyedUnit, pageItems } from '../verify/verify-source-keys.mjs';
import { coverage, sourceExercises } from '../verify/verify-source-coverage.mjs';

const cnxml = (body) => `<?xml version="1.0"?><document xmlns="http://cnx.rice.edu/cnxml"><content>${body}</content></document>`;
const exercise = (id, paragraphs, solution) => `<exercise id="${id}"><problem>${
  paragraphs.map((text) => `<para>${text}</para>`).join('')}</problem>${
  solution ? `<solution><para>${solution}</para></solution>` : ''}</exercise>`;
const example = (id, question, answer) => `<example id="${id}"><para><title>T</title>Problem.</para><para><title>Solution</title>Worked.</para>`
  + `<para><title>Check Your Learning</title>${question}</para><note><title>Answer:</title><para>${answer}</para></note></example>`;
const exercises = (...list) => `<section class="exercises"><title>Exercises</title>${list.join('')}</section>`;

const MODULE = cnxml(
  example('x1', 'What is the volume in liters of 1.000 oz, given that 1 L = 1.0567 qt and 1 qt = 32 oz (exactly)?', '2.957 × 10<sup>−2</sup> L')
  + example('x2', '(a) Add 2.334 mL and 0.31 mL. (b) Subtract 55.8752 m from 56.533 m.', '(a) 2.64 mL; (b) 0.658 m')
  + exercises(
    exercise('e1', ['Classify each of the following changes as physical or chemical:', '(a) condensation of steam', '(b) burning of gasoline'], '(a) physical; (b) chemical'),
    exercise('e2', ['Classify each of the following changes as physical or chemical:', '(a) coal burning', '(b) ice melting'], null),
    exercise('e3', ['How many significant figures are contained in each of the following measurements?', '(a) 53 cm', '(b) 2.05 × 10<sup>8</sup> m'], '(a) two; (b) three'),
    exercise('e4', ['Make the conversion indicated in each of the following:', '(a) the length of a soccer field, 120 m (three significant figures), to feet', '(b) the mass of a bushel of rye, 32.0 lb, to kilograms'], '(a) 394 ft; (b) 14.5 kg'),
    exercise('e5', ['Convert the boiling temperature of gold, 2966 °C, into degrees Fahrenheit and kelvin.'], '5371 °F, 3239 K'),
    exercise('e6', ['Is a 197-lb weight lifter light enough to compete in a class limited to those weighing 90 kg or less?'], 'yes; weight = 89.4 kg'),
    exercise('e7', ['Identify each of the underlined items as a part of either the macroscopic domain, the microscopic domain, or the symbolic domain of chemistry.', '(a) The mass of a lead pipe is 14 lb.', '(b) The mass of a certain chlorine atom is 35 amu.'], '(a) symbolic, macroscopic; (b) microscopic'),
    exercise('e8', ['Explain the difference between extensive properties and intensive properties.'], 'The value of an extensive property depends upon the amount of matter being considered, whereas the value of an intensive property is the same regardless of the amount of matter being considered.'),
    exercise('e9', ['A long ton is defined as exactly 2240 lb. What is this mass in kilograms?'], '1.0160 × 10<sup>3</sup> kg'),
    exercise('e10', ['When 2.50 g of methane burns in oxygen, 125 kJ of heat is produced. What is the enthalpy of combustion per mole of methane under these conditions?'], '–802 kJ mol<sup>−1</sup>'),
  ),
);
const units = keyedUnits(MODULE);
const unit = (id) => units.find((candidate) => candidate.id === id);

test('Chemistry is the keyed-only book', () => {
  assert.deepEqual([...KEYED_ONLY_BOOKS], ['chemistry']);
});

test('keyedUnits reads each exercise part and each Check Your Learning with its own answer segment', () => {
  assert.deepEqual(units.map((candidate) => candidate.id), [
    'e1(a)', 'e1(b)', 'e2(a)', 'e2(b)', 'e3(a)', 'e3(b)', 'e4(a)', 'e4(b)', 'e5', 'e6', 'e7(a)', 'e7(b)', 'e8', 'e9', 'e10',
    'x1#check', 'x2#check(a)', 'x2#check(b)',
  ]);
  assert.equal(unit('e1(b)').answer, 'chemical');
  assert.equal(unit('e1(b)').lead, 'Classify each of the following changes as physical or chemical:');
  assert.equal(unit('e1(b)').partText, 'burning of gasoline');
  assert.equal(unit('e2(a)').keyed, false);
  assert.equal(unit('e4(a)').answer, '394 ft');
  assert.equal(unit('e4(b)').answer, '14.5 kg');
  assert.equal(unit('e5').answer, '5371 °F, 3239 K');
  assert.equal(unit('x1#check').answer, '2.957 × 10^{−2} L');
  assert.equal(unit('x2#check(b)').answer, '0.658 m');
  assert.equal(unit('x2#check(a)').cls, 'check-your-learning');
});

test('answerText writes an exponent where a numeral can be read, and printedNumerals reads it', () => {
  const node = parseXml('<para>(a) 2.15 × 10<sup>5</sup>; (b) 27,440; (c) 0.19; (d) −23 °C, 250 K; (e) 68–71 cm; (f) $62</para>');
  const text = answerText(node);
  assert.match(text, /2\.15 × 10\^\{5\}/);
  const show = (numeral) => `${numeral.negative ? '-' : ''}${numeral.mantissa}e${numeral.exponent} [${numeral.sigMin},${numeral.sigMax}]`;
  assert.deepEqual(printedNumerals(text).map(show), [
    '215e3 [3,3]', '27440e0 [4,5]', '19e-2 [2,2]', '-23e0 [2,2]', '250e0 [2,3]', '68e0 [2,2]', '71e0 [2,2]', '62e0 [2,2]',
  ]);
  // A range's dash is not a minus sign; an exponent's digits are not a numeral of their own.
  assert.deepEqual(printedNumerals('1.5 × 10^{−3} mol').map(show), ['15e-4 [2,2]']);
  // A leading en dash is a sign; a unit's own exponent is not a number the answer states.
  assert.deepEqual(printedNumerals('–802 kJ mol^{−1}').map(show), ['-802e0 [3,3]']);
  assert.deepEqual(printedNumerals('0.599 cm^{3}; 8.91 g/cm^{3}').map(show), ['599e-3 [3,3]', '891e-2 [3,3]']);
});

test('unitFor pairs a question with its own part, longest part first', () => {
  const lead = 'Classify each of the following changes as physical or chemical:';
  assert.equal(unitFor(`${lead} burning of gasoline`, units).id, 'e1(b)');
  assert.equal(unitFor('Subtract 55.8752 m from 56.533 m. Enter the difference in meters.', units).id, 'x2#check(b)');
  assert.equal(unitFor('A long ton is defined as exactly 2240 lb. What is this mass in kilograms? Enter the mass in kilograms, in scientific notation.', units).id, 'e9');
  assert.equal(unitFor('The value of an ________ property depends on the amount of matter.', units), null, 'a filler transcribes no unit');
  const iron = keyedUnits(cnxml(exercises(exercise('e1', ['Classify each of the following as an element, a compound, or a mixture:', '(a) iron', '(b) iron oxide'], '(a) element; (b) compound'))));
  assert.equal(unitFor('Classify each of the following as an element, a compound, or a mixture: iron oxide', iron).id, 'e1(b)');
  assert.equal(unitFor('Classify each of the following as an element, a compound, or a mixture: iron', iron).id, 'e1(a)');
  assert.equal(unitScore(iron[0], 'Which is denser, iron or lead?').score, 0, 'a part\'s word under another lead-in is not the part');
  assert.equal(plain('2.05 × 10⁸ m'), plain('2.05 × 10 8 m'));
  assert.equal(sequentialParts('one (a) two'), null);
});

const mc = (question, answer, options) => ({ type: 'multiplechoice', question, answer, options });
const fillin = (question, answer, form) => ({ type: 'fillin', question, answer, form });
const CLASSIFY = 'Classify each of the following changes as physical or chemical:';

test('a multiple choice is confirmed when its part\'s answer names the keyed option alone', () => {
  assert.equal(judgeKeyedUnit(mc(`${CLASSIFY} burning of gasoline`, 'chemical', ['physical', 'chemical']), units).status, 'confirmed');
  const wrong = judgeKeyedUnit(mc(`${CLASSIFY} burning of gasoline`, 'physical', ['physical', 'chemical']), units);
  assert.equal(wrong.status, 'key-differs');
  assert.match(wrong.detail, /source e1\(b\) answers "chemical"; page keys "physical"/);
  // The judgment a number supports: "yes; weight = 89.4 kg".
  const yes = 'Is a 197-lb weight lifter light enough to compete in a class limited to those weighing 90 kg or less?';
  assert.equal(judgeKeyedUnit(mc(yes, 'yes', ['yes', 'no']), units).status, 'confirmed');
  assert.equal(judgeKeyedUnit(mc(yes, 'no', ['yes', 'no']), units).status, 'key-differs');
  // A two-category answer is not one choice.
  const domains = judgeKeyedUnit(mc('Identify each of the underlined items as a part of either the macroscopic domain, the microscopic domain, or the symbolic domain of chemistry. The mass of a lead pipe is 14 lb.',
    'macroscopic', ['macroscopic', 'microscopic', 'symbolic']), units);
  assert.equal(domains.status, 'key-differs');
  assert.match(domains.detail, /names more than one of the options \(macroscopic, symbolic\)/);
  // …unless the item offers the compound answer as an option of its own:
  // the most specific option the answer names is the key (Chemistry 1.1).
  const four = ['macroscopic', 'microscopic', 'symbolic, macroscopic', 'symbolic, microscopic'];
  const pipe = 'Identify the underlined item as a part of either the macroscopic domain, the microscopic domain, or the symbolic domain of chemistry. The mass of a lead pipe is 14 lb.';
  const atom = 'Identify the underlined item as a part of either the macroscopic domain, the microscopic domain, or the symbolic domain of chemistry. The mass of a certain chlorine atom is 35 amu.';
  assert.equal(judgeKeyedUnit(mc(pipe, 'symbolic, macroscopic', four), units).status, 'confirmed');
  assert.equal(judgeKeyedUnit(mc(pipe, 'macroscopic', four), units).status, 'key-differs', 'the bare domain is the less specific reading');
  assert.equal(judgeKeyedUnit(mc(pipe, 'symbolic, microscopic', four), units).status, 'key-differs');
  assert.equal(judgeKeyedUnit(mc(atom, 'microscopic', four), units).status, 'confirmed', 'a one-domain answer keys the bare option');
  assert.equal(judgeKeyedUnit(mc(atom, 'symbolic, microscopic', four), units).status, 'key-differs');
  // An option written with its article still reads as the option.
  const yard = keyedUnits(cnxml(exercises(exercise('e1', ['Is a meter about an inch, a foot, a yard, or a mile?'], 'about a yard'))));
  assert.equal(judgeKeyedUnit(mc('Is a meter about an inch, a foot, a yard, or a mile?', 'a yard', ['an inch', 'a foot', 'a yard', 'a mile']), yard).status, 'confirmed');
});

test('a fill-in is confirmed when its part\'s answer prints the key, to the figures it declares', () => {
  const convert = 'Make the conversion indicated in each of the following:';
  const rye = `${convert} the mass of a bushel of rye, 32.0 lb, to kilograms Enter the mass in kilograms.`;
  assert.equal(judgeKeyedUnit(fillin(rye, '14.5', 'sig-figs:3 last-digit:1'), units).status, 'confirmed');
  const other = judgeKeyedUnit(fillin(rye, '394', 'sig-figs:3 last-digit:1'), units);
  assert.equal(other.status, 'key-differs', 'part (a)\'s answer is not part (b)\'s');
  const figures = judgeKeyedUnit(fillin(rye, '14.5', 'sig-figs:4 last-digit:1'), units);
  assert.equal(figures.status, 'figures-differ');
  assert.match(figures.detail, /declares sig-figs:4, but source e4\(b\) prints "14\.5", which shows 3 significant figure/);
  // Scientific notation, a negative quantity, and a key printed with a unit exponent after it.
  const ton = 'A long ton is defined as exactly 2240 lb. What is this mass in kilograms? Enter the mass in kilograms.';
  assert.equal(judgeKeyedUnit(fillin(ton, '1.0160\\times10^{3}', 'sig-figs:5 last-digit:1 scientific-notation'), units).status, 'confirmed');
  assert.equal(judgeKeyedUnit(fillin(ton, '1016.0', 'sig-figs:5 last-digit:1'), units).status, 'confirmed', 'the same number in the other notation');
  assert.equal(judgeKeyedUnit(fillin(ton, '1.016\\times10^{3}', 'sig-figs:4 last-digit:1'), units).status, 'figures-differ');
  const methane = 'When 2.50 g of methane burns in oxygen, 125 kJ of heat is produced. What is the enthalpy of combustion per mole of methane under these conditions? Enter the value in kJ/mol.';
  assert.equal(judgeKeyedUnit(fillin(methane, '-802', 'sig-figs:3 last-digit:1'), units).status, 'confirmed');
  assert.equal(judgeKeyedUnit(fillin(methane, '802', 'sig-figs:3 last-digit:1'), units).status, 'key-differs', 'the sign is part of the key');
  // Two quantities in one answer: each fill-in's key is one of them.
  const gold = 'Convert the boiling temperature of gold, 2966 °C, into degrees Fahrenheit and kelvin.';
  assert.equal(judgeKeyedUnit(fillin(`${gold} Enter the temperature in degrees Fahrenheit.`, '5371', 'sig-figs:4 last-digit:0'), units).status, 'confirmed');
  assert.equal(judgeKeyedUnit(fillin(`${gold} Enter the temperature in kelvin.`, '3239', 'sig-figs:4 last-digit:0'), units).status, 'confirmed');
  assert.equal(judgeKeyedUnit(fillin(`${gold} Enter the temperature in kelvin.`, '3240', 'sig-figs:4 last-digit:0'), units).status, 'key-differs');
  // A count the source spells as a word.
  const figuresAsk = 'How many significant figures are contained in each of the following measurements? 2.05 × 10⁸ m';
  assert.equal(judgeKeyedUnit(fillin(figuresAsk, '3', 'decimal'), units).status, 'confirmed');
  assert.equal(judgeKeyedUnit(fillin(figuresAsk, '2', 'decimal'), units).status, 'key-differs');
  // A Check Your Learning in scientific notation.
  const ounce = 'What is the volume in liters of 1.000 oz, given that 1 L = 1.0567 qt and 1 qt = 32 oz (exactly)? Enter the volume in liters.';
  assert.equal(judgeKeyedUnit(fillin(ounce, '2.957\\times10^{-2}', 'sig-figs:4 last-digit:0 scientific-notation'), units).status, 'confirmed');
});

test('a selfcheck is read against its unit\'s answer, and an item on an unkeyed unit is refused', () => {
  const model = 'The value of an extensive property depends upon the amount of matter being considered, whereas the value of an intensive property is the same regardless of the amount of matter being considered.';
  const item = { type: 'selfcheck', question: 'Explain the difference between extensive properties and intensive properties.', model };
  assert.equal(judgeKeyedUnit(item, units).status, 'verbatim');
  assert.equal(judgeKeyedUnit({ ...item, model: 'Extensive properties are large and intensive properties are small, and neither depends on temperature or pressure at all.' }, units).status, 'diverges');
  const unkeyed = judgeKeyedUnit(mc(`${CLASSIFY} ice melting`, 'physical', ['physical', 'chemical']), units);
  assert.equal(unkeyed.status, 'unkeyed-unit');
  assert.match(unkeyed.detail, /prints no answer, and this book renders only keyed exercises/);
  // An author-written filler transcribes no unit and is left to the ordinary judges.
  assert.equal(judgeKeyedUnit({ type: 'textin', question: 'Heat is an example of an ________ property.', answer: 'extensive' }, units), null);
  assert.equal(judgeKeyedUnit(mc('Which state of matter has a definite volume but no definite shape?', 'liquid', ['solid', 'liquid', 'gas']), units), null);
});

test('a power of ten printed with no coefficient is read as that power, not as the number ten', () => {
  const show = (numeral) => `${numeral.negative ? '-' : ''}${numeral.mantissa}e${numeral.exponent} [${numeral.sigMin},${numeral.sigMax}]`;
  assert.deepEqual(printedNumerals('centi-, × 10^{−2}').map(show), ['1e-2 [1,1]']);
  assert.deepEqual(printedNumerals('tera-, × 10^{12}; kilo-, 10^{3}').map(show), ['1e12 [1,1]', '1e3 [1,1]']);
  // A coefficient in front still makes it one numeral, and a unit's exponent is still not a number.
  assert.deepEqual(printedNumerals('2.15 × 10^{5} m^{2}').map(show), ['215e3 [3,3]']);
  const prefixes = keyedUnits(cnxml(exercises(exercise('e6',
    ['Give the name of the prefix and the quantity indicated by the following symbols that are used with SI base units.', '(a) c', '(b) T'],
    '(a) centi-, × 10<sup>−2</sup>; (b) tera-, × 10<sup>12</sup>'))));
  const lead = 'Give the name of the prefix and the quantity indicated by the following symbol that is used with SI base units.';
  const factor = (part, answer) => judgeKeyedUnit({ type: 'fillin', question: `${lead} ${part} Enter the quantity as a power of ten.`, answer, form: 'sig-figs:1 last-digit:0' }, prefixes).status;
  assert.equal(factor('c', '10^{-2}'), 'confirmed');
  assert.equal(factor('T', '10^{12}'), 'confirmed');
  assert.equal(factor('T', '10^{-2}'), 'key-differs');
});

test('a part the page restated is still its part, under its own lead-in only', () => {
  // Chemistry 1.4: two simulation exercises open with the same sentence. The
  // page replaces "from step (a)" with "you measured in the previous item".
  const open = 'Visit this density simulation and click the turn fluid into water button to adjust the density of liquid in the beaker to 1.00 g/mL.';
  const foam = `${open} Change the block material to foam, and then wait patiently until the foam block stops bobbing up and down in the water.`;
  const two = keyedUnits(cnxml(exercises(
    exercise('e8', [open, '(a) Use the water displacement approach to measure the mass and volume of the unknown material.',
      '(b) Use the measured mass and volume data from step (a) to calculate the density of the unknown material.'], '(a) m = 18.58 g, V = 5.7 mL; (b) d = 3.3 g/mL'),
    exercise('e10', [foam, '(a) The foam block should be floating on the surface of the water. What is the volume of water displaced?',
      '(b) Use the water volume from part (a) and the density of water (1.00 g/mL) to calculate the mass of water displaced.'], '(a) displaced water volume = 2.8 mL; (b) displaced water mass = 2.8 g'))));
  const restated = `${open} Use the mass and volume values you measured in the previous item to calculate the density of the unknown material.`;
  assert.equal(unitFor(restated, two).id, 'e8(b)');
  const foamRestated = `${foam} Use the water volume you measured in the previous item and the density of water (1.00 g/mL) to calculate the mass of water displaced.`;
  assert.equal(unitFor(foamRestated, two).id, 'e10(b)');
  // A verbatim part always outranks a restated one, and a short part is verbatim or nothing.
  assert.equal(unitScore(two[1], restated).score < 1, true);
  assert.equal(unitScore(two[0], `${open} Use the water displacement approach to measure the mass and volume of the unknown material.`).score, 1);
  // Digit grouping folds: the page's 8{,}119 is the source's 8119.
  assert.equal(plain('$8{,}119 \\times 0.000023$'), plain('8119 × 0.000023'));
  assert.equal(plain('14.98 + 27,340 + 84.7593'), plain('14.98 + 27340 + 84.7593'));
});

test('a text-in is confirmed when its part\'s answer prints the name, or reads as the same formula or equation', () => {
  // Chemistry 2e 2.7 and 4.1, as the CNXML prints them: subscripts in <sub>,
  // an equation in spaced MathML text.
  const chem = keyedUnits(cnxml(exercises(
    exercise('n1', ['Name the following compounds:', '(a) BaO', '(b) Cr<sub>2</sub>O<sub>3</sub>'], '(a) barium oxide; (b) chromium(III) oxide'),
    exercise('f1', ['Write the formulas of the following ionic compounds:', '(a) manganese(II) phosphate', '(b) iron(III) chloride dihydrate'],
      '(a) Mn<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>; (b) FeCl<sub>3</sub>·2H<sub>2</sub>O'),
    exercise('i1', ['For each of the following compounds, state whether it is ionic or covalent. If it is ionic, write the symbols for the ions involved:', '(a) BaO', '(b) IBr'],
      '(a) ionic, Ba<sup>2+</sup>, O<sup>2−</sup>; (b) covalent'),
    exercise('q1', ['Balance the following equation: Na(s) + H<sub>2</sub>O(l) ⟶ NaOH(aq) + H<sub>2</sub>(g)'],
      '2 Na ( s ) + 2 H 2 O ( l ) ⟶ 2 NaOH ( a q ) + H 2 ( g )'),
  )));
  const textin = (question, answer, form = '') => ({ type: 'textin', question, answer, form });
  const judge = (item) => judgeKeyedUnit(item, chem).status;
  assert.equal(judge(textin('Name the following compound: Cr₂O₃', 'chromium(III) oxide')), 'confirmed');
  assert.equal(judge(textin('Name the following compound: Cr₂O₃', 'chromium(II) oxide')), 'key-differs');
  assert.equal(judge(textin('Write the formula of the following ionic compound: manganese(II) phosphate', 'Mn₃(PO₄)₂', 'formula')), 'confirmed');
  assert.equal(judge(textin('Write the formula of the following ionic compound: iron(III) chloride dihydrate', 'FeCl₃·2H₂O', 'formula')), 'confirmed');
  assert.equal(judge(textin('Write the formula of the following ionic compound: iron(III) chloride dihydrate', 'FeCl₃', 'formula')), 'key-differs');
  // One piece of an answer that lists several things.
  const ions = 'For the following compound, state whether it is ionic or covalent. If it is ionic, write the symbols for the ions involved: BaO';
  assert.equal(judge(textin(`${ions} Enter the symbol of the cation.`, 'Ba²⁺', 'formula')), 'confirmed');
  assert.equal(judge(textin(`${ions} Enter the symbol of the anion.`, 'O²⁻', 'formula')), 'confirmed');
  assert.equal(judge(textin(`${ions} Enter the symbol of the anion.`, 'O⁻', 'formula')), 'key-differs');
  const balance = 'Balance the following equation: Na(s) + H₂O(l) ⟶ NaOH(aq) + H₂(g)';
  assert.equal(judge(textin(balance, '2Na(s) + 2H₂O(l) ⟶ 2NaOH(aq) + H₂(g)', 'equation')), 'confirmed');
  assert.equal(judge(textin(balance, '2Na(s) + H₂O(l) ⟶ 2NaOH(aq) + H₂(g)', 'equation')), 'key-differs');
});

test('a lettered part that is only an image is a part, told from its siblings by the figure its item is bound to', () => {
  // Chemistry 2e 2.4, as the CNXML prints it: each part is a label and a
  // <media>, and the last has nothing after its image.
  const image = (name) => `<media alt="a structure"><image mime-type="image/jpg" src="../../media/${name}.jpg"/></media>`;
  const module = cnxml(exercises(
    `<exercise id="s1"><problem><para>Write the molecular and empirical formulas of the following compounds:</para><para>(a)<newline/>${
      image('Q3a_img')}<newline/> (b)<newline/>${image('Q3b_img')}<newline/> (c)<newline/>${image('Q3c_img')}</para></problem>`
    + '<solution><para>(a) molecular CO<sub>2</sub>, empirical CO<sub>2</sub>; (b) molecular C<sub>2</sub>H<sub>2</sub>, empirical CH; '
    + '(c) molecular C<sub>2</sub>H<sub>4</sub>, empirical CH<sub>2</sub></para></solution></exercise>',
    `<exercise id="s2"><problem><para>Write the empirical formulas for the following compounds:</para><para>(a)<newline/>${
      image('Q7a_img')}<newline/> (b)<newline/>${image('Q7b_img')}</para></problem></exercise>`,
  ));
  const parts = keyedUnits(module);
  assert.deepEqual(parts.map((part) => part.id), ['s1(a)', 's1(b)', 's1(c)', 's2(a)', 's2(b)']);
  assert.deepEqual(parts.map((part) => part.media), [['Q3a_img'], ['Q3b_img'], ['Q3c_img'], ['Q7a_img'], ['Q7b_img']]);
  assert.equal(parts[2].partText, '');
  assert.equal(parts[2].answer, 'molecular C _2 H _4 , empirical CH _2');
  assert.equal(parts[0].stem, 'Write the molecular and empirical formulas of the following compounds:', 'no mark reaches a stem');

  const ask = 'Write the molecular and empirical formulas of the following compound, shown in the figure above.';
  assert.equal(unitFor(`${ask} Enter the molecular formula.`, parts, { figure: 'Q3b_img' }).id, 's1(b)');
  assert.equal(unitFor(`${ask} Enter the molecular formula.`, parts, {}), null, 'an item bound to no figure is no image part');
  assert.equal(unitFor('Which structure above is a compound?', parts, { figure: 'Q3b_img' }), null, 'another question under the same figure');

  // The page: a mediafigure, then the part's two items, each bound to it.
  const figure = (name) => `{{< mediafigure src="chemistry/${name}" kind="diagram" alt="A structure." >}}\n{{< /mediafigure >}}\n\n`;
  const textin = (question, answer) => `{{< textin question="${question}" answer="${answer}" answerForm="formula" hint="Count the atoms." >}}\n\n`;
  const page = (b) => figure('Q3a_img') + textin(`${ask} Enter the molecular formula.`, 'CO₂') + textin(`${ask} Enter the empirical formula.`, 'CO₂')
    + figure('Q3b_img') + textin(`${ask} Enter the molecular formula.`, b) + textin(`${ask} Enter the empirical formula.`, 'CH')
    + figure('Q3c_img') + textin(`${ask} Enter the molecular formula.`, 'C₂H₄') + textin(`${ask} Enter the empirical formula.`, 'CH₂');
  const items = pageItems(page('C₂H₂'));
  assert.deepEqual(items.map((item) => item.figure), ['Q3a_img', 'Q3a_img', 'Q3b_img', 'Q3b_img', 'Q3c_img', 'Q3c_img']);
  assert.deepEqual(items.map((item) => judgeKeyedUnit(item, parts).status), Array(6).fill('confirmed'));
  assert.equal(judgeKeyedUnit(pageItems(page('C₂H₄'))[2], parts).status, 'key-differs', 'part (b) keyed with part (c)\'s formula');

  const verdicts = coverage(page('C₂H₂'), sourceExercises(module), { keyedOnly: true });
  assert.deepEqual(verdicts.map((verdict) => [verdict.id, verdict.status]),
    [['s1(a)', 'rendered'], ['s1(b)', 'rendered'], ['s1(c)', 'rendered'], ['s2(a)', 'omitted'], ['s2(b)', 'omitted']]);
  // A page that leaves part (c) out fails, where the last image-only part was once not a part at all.
  const short = page('C₂H₂').split(figure('Q3c_img'))[0];
  assert.equal(coverage(short, sourceExercises(module), { keyedOnly: true }).find((verdict) => verdict.id === 's1(c)').status, 'missing');
});

test('a nuclide symbol is read in a stem as the page prints it and in an answer as the grader types it', () => {
  // Chemistry 2e 2.3 and 2.5: MathML prescripts on an empty base, and an
  // answer whose label stands directly before a superscript.
  const nuclide = (atomic, mass, symbol) => `<m:math xmlns:m="http://www.w3.org/1998/Math/MathML"><m:msubsup><m:mrow/><m:mn>${atomic}</m:mn><m:mn>${mass}</m:mn></m:msubsup><m:mtext>${symbol}</m:mtext></m:math>`;
  const atoms = keyedUnits(cnxml(exercises(
    exercise('c1', ['Give the number of protons, electrons, and neutrons in neutral atoms of each of the following isotopes:', `(a) ${nuclide(3, 7, 'Li')}`, `(b) ${nuclide(52, 125, 'Te')}`],
      '(a) 3 protons, 3 electrons, 4 neutrons; (b) 52 protons, 52 electrons, 73 neutrons'),
    exercise('y1', ['Write a symbol for each of the following neutral isotopes. Include the atomic number and mass number for each.', '(a) the alkali metal with 11 protons and a mass number of 23', '(b) the noble gas element with 75 neutrons in its nucleus and 54 electrons in the neutral atom'],
      `(a) ${nuclide(11, 23, 'Na')}; (b) ${nuclide(54, 129, 'Xe')}`),
    exercise('i1', ['Write the symbol for each of the following ions:', '(a) the ion with a 1+ charge, atomic number 55, and mass number 133', '(b) the ion with 54 electrons, 53 protons, and 74 neutrons'],
      '(a) <sup>133</sup>Cs<sup>+</sup>; (b) <sup>127</sup>I<sup>−</sup>'),
  )));
  const lead = 'Give the number of protons, electrons, and neutrons in neutral atoms of the following isotope:';
  const count = (question, answer) => judgeKeyedUnit({ type: 'fillin', question, answer, form: 'whole-number' }, atoms);
  assert.equal(count(`${lead} $\\ce{^{7}_{3}Li}$. Enter the number of neutrons.`, '4').exercise.id, 'c1(a)');
  assert.equal(count(`${lead} $\\ce{^{7}_{3}Li}$. Enter the number of neutrons.`, '4').status, 'confirmed');
  assert.equal(count(`${lead} $\\ce{^{125}_{52}Te}$. Enter the number of neutrons.`, '4').status, 'key-differs');
  // A swapped pair: 3 is printed in the segment (the protons), and is not the neutrons.
  assert.equal(count(`${lead} $\\ce{^{7}_{3}Li}$. Enter the number of neutrons.`, '3').status, 'key-differs');
  assert.equal(count(`${lead} $\\ce{^{7}_{3}Li}$. Enter the number of protons.`, '3').status, 'confirmed');
  assert.equal(count(`${lead} $\\ce{^{7}_{3}Li}$. Enter the number of electrons.`, '4').status, 'key-differs');
  assert.match(count(`${lead} $\\ce{^{7}_{3}Li}$. Enter the number of neutrons.`, '3').detail, /for the neutrons, which source c1\(a\) gives as 4/);
  const symbol = (question, answer) => judgeKeyedUnit({ type: 'textin', question, answer, form: 'formula' }, atoms).status;
  const write = 'Write a symbol for the following neutral isotope. Include the atomic number and mass number.';
  assert.equal(symbol(`${write} the alkali metal with 11 protons and a mass number of 23`, '²³₁₁Na'), 'confirmed');
  assert.equal(symbol(`${write} the alkali metal with 11 protons and a mass number of 23`, '²⁴₁₁Na'), 'key-differs');
  assert.equal(symbol('Write the symbol for the following ion: the ion with a 1+ charge, atomic number 55, and mass number 133', '¹³³Cs⁺'), 'confirmed');
  assert.equal(symbol('Write the symbol for the following ion: the ion with 54 electrons, 53 protons, and 74 neutrons', '¹²⁷I⁻'), 'confirmed');
  assert.equal(symbol('Write the symbol for the following ion: the ion with 54 electrons, 53 protons, and 74 neutrons', '¹³³Cs⁺'), 'key-differs');
});

test('of two units a question could be, it is the one whose whole stem it reads most like', () => {
  // The shapes the whole-book gate probe found (tools/source/chemistry-gate-probe.mjs):
  // chapter 1 had none of them, and about a hundred keyed parts of the book
  // were read as another exercise.
  const twins = keyedUnits(cnxml(exercises(
    // One part under two lead-ins, the second exercise unkeyed (7.1).
    exercise('p1', ['Predict the charge on the monatomic ions formed from the following atoms in binary ionic compounds:', '(a) P', '(b) In', '(c) Br'], null),
    exercise('p2', ['Write out the full electron configuration for each of the following atoms and for the monatomic ion found in binary ionic compounds containing the element:', '(a) Al', '(b) Br', '(c) In'],
      '(a) Al: 1s<sup>2</sup>2s<sup>2</sup>; (b) Br: 1s<sup>2</sup>; (c) In: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>'),
    // A lead-in that prints a sibling's whole part (9.1).
    exercise('m1', ['The pressure of a sample of gas is measured at sea level with an open-end mercury manometer, which reads 13.7 cm Hg, or 137 mm Hg. Determine the pressure of the gas in:', '(a) mm Hg', '(b) atm', '(c) kPa'],
      '(a) 897 mm Hg; (b) 1.18 atm; (c) 119.6 kPa'),
    // Parts that differ by a charge's sign, which the word fold drops (7.1).
    exercise('s1', ['Write the electron configuration for each of the following ions:', '(a) As<sup>3–</sup>', '(b) As<sup>3+</sup>', '(c) NO<sub>2</sub>', '(d) NO<sub>2</sub><sup>−</sup>'],
      '(a) [Ar]4s<sup>2</sup>; (b) [Ar]3d<sup>10</sup>; (c) seventeen; (d) eighteen'),
    // A generic part that stands in many exercises, beside a whole exercise that prints its words (12.3).
    exercise('g1', ['For the reaction A ⟶ B + C, the following data were obtained at 30 °C:', '(a) What is the order of the reaction with respect to [A]?', '(b) What is the rate constant?'], '(a) first; (b) 0.0113 s<sup>−1</sup>'),
    exercise('g2', ['The half-life of a first-order reaction is 12.0 min at 25 °C. What is the rate constant?'], '0.0578 min<sup>−1</sup>'),
    // A part the lead-in already prints twice, printed a third time (15.1).
    exercise('r1', ['What is the effect on the amount of solid NiCO<sub>3</sub> when each of the following is added to a saturated solution of NiCO<sub>3</sub>?', '(a) KClO<sub>4</sub>', '(b) NiCO<sub>3</sub>'], '(a) no effect; (b) more solid'),
  )));
  const is = (question, id) => assert.equal(unitFor(question, twins)?.id, id, question);
  const configuration = 'Write out the full electron configuration for the following atom and for the monatomic ion found in binary ionic compounds containing the element:';
  is(`${configuration} Br`, 'p2(b)');
  is(`${configuration} In`, 'p2(c)');
  is(`${configuration} Al`, 'p2(a)');
  const pressure = 'The pressure of a sample of gas is measured at sea level with an open-end mercury manometer, which reads 13.7 cm Hg, or 137 mm Hg. Determine the pressure of the gas in:';
  is(`${pressure} atm. Enter the pressure in atmospheres.`, 'm1(b)');
  is(`${pressure} kPa`, 'm1(c)');
  is(`${pressure} mm Hg`, 'm1(a)');
  const ion = 'Write the electron configuration for the following ion:';
  is(`${ion} As³⁺`, 's1(b)');
  is(`${ion} As³⁻`, 's1(a)');
  is(`${ion} $\\ce{As^3+}$`, 's1(b)');
  is(`${ion} NO₂⁻`, 's1(d)');
  is(`${ion} NO₂`, 's1(c)');
  is('The half-life of a first-order reaction is 12.0 min at 25 °C. What is the rate constant? Enter the rate constant in min⁻¹.', 'g2');
  is('For the reaction A ⟶ B + C, the following data were obtained at 30 °C: What is the rate constant?', 'g1(b)');
  const nickel = 'What is the effect on the amount of solid NiCO₃ when the following is added to a saturated solution of NiCO₃?';
  is(`${nickel} NiCO₃`, 'r1(b)');
  is(`${nickel} KClO₄`, 'r1(a)');
});
