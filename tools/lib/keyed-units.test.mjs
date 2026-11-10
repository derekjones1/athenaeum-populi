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
import { judgeKeyedUnit } from '../verify/verify-source-keys.mjs';

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
