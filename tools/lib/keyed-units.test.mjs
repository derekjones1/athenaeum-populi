/**
 * Keyed units: how the two source gates read a book that renders only the
 * exercises its source keys (Chemistry 2e). The fixtures are the shapes of
 * chapter 1: lettered parts under a shared lead-in, one solution paragraph
 * answering every part, numbers written to their significant figures.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  KEYED_ONLY_BOOKS, answerText, dataRun, glossaryAliases, keyedUnits, plain, printedNumerals, sequentialParts, sortedExercise, unitFor, unitScore, unlinked,
  withoutCrossReference, workedExampleUnits, workedExamples,
} from './keyed-units.mjs';
import { parseXml } from './openstax-source.mjs';
import { answerEquations, conditionalUnwrapped, judgeKeyedSortbins, judgeKeyedUnit, pageItems } from '../verify/verify-source-keys.mjs';
import { coverage, sourceExercises } from '../verify/verify-source-coverage.mjs';
import { shapeOf } from '../source/chemistry-shapes.mjs';

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
  // A name cut short is another compound's name (2.7's hydrate), while a
  // name the answer lists beside a symbol, or with "the … ion", is whole.
  const named = keyedUnits(cnxml(exercises(
    exercise('h1', ['Name these compounds:', '(a) CoCl<sub>2</sub>·6H<sub>2</sub>O', '(b) TiCl<sub>4</sub>'], '(a) cobalt(II) chloride hexahydrate; (b) titanium(IV) chloride'),
    exercise('s1', ['Give the symbol and name for the ion with 34 protons and 36 electrons.'], 'Se<sup>2−</sup>, the selenide ion'),
  )));
  const judgeNamed = (item) => judgeKeyedUnit(item, named).status;
  assert.equal(judgeNamed(textin('Name this compound: CoCl₂·6H₂O', 'cobalt(II) chloride hexahydrate')), 'confirmed');
  assert.equal(judgeNamed(textin('Name this compound: CoCl₂·6H₂O', 'cobalt(II) chloride')), 'key-differs', 'the hydrate without its water');
  assert.equal(judgeNamed(textin('Name this compound: CoCl₂·6H₂O', 'chloride hexahydrate')), 'key-differs', 'the name without its metal');
  assert.equal(judgeNamed(textin('Name this compound: TiCl₄', 'titanium(IV) chloride')), 'confirmed');
  assert.equal(judgeNamed(textin('Give the symbol and name for the ion with 34 protons and 36 electrons. Enter the ion’s name.', 'selenide')), 'confirmed');
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

test('a solution\'s labels are read as loosely as solutions are typed', () => {
  // 8.4 and 13.3: a label after a semicolon with no space, a label followed
  // by a comma. Read strictly, each exercise lost its later parts and looked
  // half-keyed.
  const loose = keyedUnits(cnxml(exercises(
    exercise('l1', ['Determine the bond order of each member of the following groups:', '(a) H<sub>2</sub>', '(b) O<sub>2</sub>', '(c) Li<sub>2</sub>', '(d) F<sub>2</sub>'],
      '(a) bond order = 1; (b) bond order = 2 (c) bond order = 1;(d) bond order = 1'),
    exercise('l2', ['Methanol can be prepared from carbon monoxide and hydrogen.', '(a) What happens if more hydrogen is added?', '(b) What happens if carbon monoxide is removed?', '(c) What happens if more catalyst is added?'],
      '(a) [CO] decreases; (b), [CO] decreases; (c), no changes.'),
  )));
  assert.deepEqual(loose.map((part) => [part.id, part.answered]), [['l1(a)', true], ['l1(b)', true], ['l1(c)', true], ['l1(d)', true], ['l2(a)', true], ['l2(b)', true], ['l2(c)', true]]);
  assert.equal(loose[3].answer, 'bond order = 1');
  assert.equal(loose[6].answer, 'no changes.');
  // An answer that only lists labels answers the exercise whole (21.1).
  assert.equal(sequentialParts('(a), (b), (c), (d), and (e)', { answer: true }), null);
  // A stem is still read strictly: a state symbol after a comma is no label.
  assert.equal(sequentialParts('Water, (a) liquid, boils;(b) and freezes'), null);
});

test('a stem that asks about another exercise\'s parts is split by them', () => {
  // 4.3, 13.2, 17.2, 17.7, 19.2: "…each reaction in [the even exercise]",
  // answered "(a) …; (b) …". The page omits the even exercise, so each item
  // restates its part — and that restated part is what the gates match.
  const linked = keyedUnits(cnxml(exercises(
    exercise('r0', ['Write the balanced equation, then outline the steps necessary to determine the information requested in each of the following:', '(a) The number of moles and the mass of chlorine required to react with 10.0 g of sodium metal', '(b) The number of moles and the mass of oxygen formed by the decomposition of 1.252 g of mercury(II) oxide'], null),
    exercise('r1', ['Determine the number of moles and the mass requested for each reaction in <link target-id="r0"/>.'], '(a) 0.435 mol Na, 0.217 mol Cl<sub>2</sub>, 15.4 g Cl<sub>2</sub>; (b) 0.005780 mol HgO'),
    exercise('c0', ['Write the half-reactions for each cell:', '(a) a magnesium and copper cell', '(b) a nickel and silver cell'], null),
    exercise('c1', ['Write a balanced equation for the cell reaction of each cell in the previous exercise.'], '(a) Mg + Cu<sup>2+</sup> ⟶ Mg<sup>2+</sup> + Cu; (b) 2Ag<sup>+</sup> + Ni ⟶ Ni<sup>2+</sup> + 2Ag'),
    // No reference, or an unkeyed asker: nothing is borrowed.
    exercise('c2', ['Write a balanced equation for the cell reaction of each cell in the previous exercise.'], null),
  )));
  assert.deepEqual(linked.filter((part) => part.keyed).map((part) => part.id), ['r1(a)', 'r1(b)', 'c1(a)', 'c1(b)']);
  const moles = linked.find((part) => part.id === 'r1(b)');
  assert.equal(moles.lead, 'Determine the number of moles and the mass requested for each reaction in .');
  assert.match(moles.partText, /^The number of moles and the mass of oxygen formed/);
  assert.equal(moles.answer, '0.005780 mol HgO');
  assert.equal(linked.find((part) => part.id === 'c2').partText, null);
  const item = 'Determine the number of moles and the mass requested for the following reaction: The number of moles and the mass of oxygen formed by the decomposition of 1.252 g of mercury(II) oxide. Enter the number of moles of mercury(II) oxide.';
  assert.equal(unitFor(item, linked.filter((part) => part.keyed)).id, 'r1(b)');
  assert.equal(judgeKeyedUnit({ type: 'fillin', question: item, answer: '0.005780', form: 'sig-figs:4 last-digit:1' }, linked).status, 'confirmed');
});

test('an item that restates the exercise its stem refers to is still its own exercise', () => {
  // 2.3 and 2.4: a keyed exercise says "Repeat [the even exercise] using …",
  // and its answer is not lettered by the other's parts, so nothing is
  // borrowed. The page restates the omitted exercise's text — the learner
  // cannot repeat what the page does not print — and that text is most of
  // the item. It was read as the unkeyed exercise, and the item refused.
  const setup = 'Open the Isotopes and Atomic Mass simulator and select the Mixtures simulator, hide the “Percent Composition” and “Average Atomic Mass” boxes, and then select the element boron.';
  const parts = ['(a) Write the symbols of the isotopes of boron that are shown as naturally occurring in significant amounts.', '(b) Predict the relative amounts (percentages) of these boron isotopes found in nature. Explain the reasoning behind your choice.'];
  const build = 'Open the Build a Molecule simulation and select the “Playground” simulator. Select an appropriate atom’s “Kit” to build a molecule with two carbon and six hydrogen atoms.';
  const units = keyedUnits(cnxml(exercises(
    exercise('s0', [setup, ...parts], null),
    exercise('s1', ['Repeat <link target-id="s0"/> using an element that has three naturally occurring isotopes.'], 'Let us use neon as an example. The abundances are 90.48% Ne-20, 9.25% Ne-22, and 0.27% Ne-21.'),
    exercise('b0', [build, '(a) Draw the structural formula of this molecule and state its name.', '(b) Can you arrange these atoms in any way to make a different compound?'], null),
    exercise('b1', ['Use the Build a Molecule simulation to repeat <link target-id="b0"/>, but build a molecule with two carbons, six hydrogens, and one oxygen.', '(a) Draw the structural formula of this molecule and state its name.', '(b) Can you arrange these atoms to make a different molecule? If so, draw its structural formula and state its name.'], '(a) ethanol; (b) methoxymethane, more commonly known as dimethyl ether'),
  )));
  assert.equal(units.find((unit) => unit.id === 's1').refersTo, 's0');
  assert.equal(units.find((unit) => unit.id === 's0(a)').refersTo, undefined);
  const repeated = `Repeat the following exercise using an element that has three naturally occurring isotopes: ${setup} ${parts.join(' ')}`;
  assert.equal(unitFor(repeated, units).id, 's1');
  assert.equal(judgeKeyedUnit({ type: 'selfcheck', question: repeated, model: 'Let us use neon as an example. The abundances are 90.48% Ne-20, 9.25% Ne-22, and 0.27% Ne-21.' }, units).exercise.id, 's1');
  const lead = 'Use the Build a Molecule simulation to repeat the exercise described below, but build a molecule with two carbons, six hydrogens, and one oxygen.';
  const drawn = `${lead} Draw the structural formula of this molecule and state its name. (The exercise: ${build})`;
  assert.equal(unitFor(drawn, units).id, 'b1(a)');
  // The unkeyed exercise printed as itself is still the unkeyed exercise:
  // it prints none of the referring stem's own words.
  assert.equal(unitFor(`${setup} ${parts[0]}`, units).id, 's0(a)');
  assert.equal(unitFor(`${build} Draw the structural formula of this molecule and state its name.`, units).id, 'b0(a)');
});

test('a part of an exercise whose answers vary carries its own sample whole', () => {
  // 2.3's Build an Atom: the solution answers every part for carbon-12 and
  // says once, at its end, that other answers are possible.
  const atom = keyedUnits(cnxml(exercises(
    exercise('v1', ['Open the Build an Atom simulation and click on the Atom icon.', '(a) Pick any one of the first 10 elements that you would like to build and state its symbol.', '(b) Predict whether your atom will be stable or unstable. State your reasoning.'],
      '(a) Carbon-12, <sup>12</sup>C; (b) The atom will be stable since C-12 is a stable isotope of carbon. Other answers for this exercise are possible if a different element of isotope is chosen.'),
    exercise('v2', ['Open the Build an Atom simulation.', '(a) Make a neutral atom of Lithium-6 and say how many protons it has.', '(b) Predict whether your atom will be stable or unstable. State your reasoning.'],
      '(a) Lithium-6 contains three protons. (b) The atom will be stable since Li-6 is a stable isotope of lithium.'),
  )));
  const predict = (lead, model) => ({ type: 'selfcheck', question: `${lead} Predict whether your atom will be stable or unstable. State your reasoning.`, model });
  const varying = 'Open the Build an Atom simulation and click on the Atom icon.';
  const sample = 'A good answer predicts whether the atom will be stable or unstable and states a reason. Sample answer: The atom will be stable since C-12 is a stable isotope of carbon. Other answers for this exercise are possible if a different element or isotope is chosen.';
  assert.equal(judgeKeyedUnit(predict(varying, sample), atom).status, 'reworded');
  // The sample is the source's, whole — not the author's own.
  assert.equal(judgeKeyedUnit(predict(varying, 'A good answer predicts whether the atom will be stable or unstable and states a reason. Sample answer: Neon-20 has ten protons and ten neutrons, which makes it stable.'), atom).status, 'diverges');
  // An exercise that does not say its answers vary takes no such frame.
  assert.equal(judgeKeyedUnit(predict('Open the Build an Atom simulation.', 'A good answer predicts whether the atom will be stable or unstable and states a reason, naming the isotope and what is known of it. Sample answer: The atom will be stable since Li-6 is a stable isotope of lithium.'), atom).status, 'diverges');
});

test('a "write a set of" exercise carries the source\'s set whole as its sample', () => {
  // 6.3: the question asks for A set, the source answers with one of many
  // and says nothing of the others. (A solution of four words or fewer is
  // already read as carried whole; these are longer.)
  const answer = '3 0 0 +1/2 and 3 0 0 −1/2';
  const stated = 'State the quantum numbers of the two outermost electrons of a Mg atom, as the text assigns them.';
  const asks = 'Write a set of quantum numbers for each of the electrons with an n of 3 in a Mg atom.';
  const sets = keyedUnits(cnxml(exercises(exercise('q1', [asks], answer), exercise('q2', [stated], answer))));
  const item = (question, model) => ({ type: 'selfcheck', question, model });
  const criteria = 'A correct answer gives two sets, no two alike, each with a principal value of three, an angular momentum value and a magnetic value of zero, and one of the two spins, written in the order the section gives them.';
  assert.equal(judgeKeyedUnit(item(asks, `${criteria} Sample answer: ${answer}`), sets).status, 'reworded');
  // The sample is the source's set, not the author's own (the measure is
  // the source's tokens, so a set that differs only in a sign reads alike).
  assert.equal(judgeKeyedUnit(item(asks, `${criteria} Sample answer: 4 1 −1 +1/2 with 4 1 −1 −1/2`), sets).status, 'diverges');
  // A question that does not ask for "a set of" takes no such frame.
  assert.equal(judgeKeyedUnit(item(stated, `${criteria} Sample answer: ${answer}`), sets).status, 'diverges');
});

test('an answer that is only a drawing is confirmed by the selfcheck that shows the source\'s image', () => {
  const picture = (name) => `<media alt="a Lewis structure"><image mime-type="image/jpeg" src="../../media/${name}.jpg"/></media>`;
  const drawn = keyedUnits(cnxml(exercises(
    `<exercise id="w1"><problem><para>Write Lewis structures for the following:</para><para>(a) O<sub>2</sub></para><para>(b) AsF<sub>3</sub></para></problem>`
    + `<solution><para>(a)<newline/>${picture('Q7a')}<newline/> In this case, the Lewis structure is inadequate.<newline/> (b)<newline/>${picture('Q7b')}</para></solution></exercise>`,
  )));
  assert.deepEqual(drawn.map((part) => [part.id, part.answer, part.answerMedia]), [['w1(a)', 'In this case, the Lewis structure is inadequate.', ['Q7a']], ['w1(b)', '', ['Q7b']]]);
  const selfcheck = (image) => pageItems(`{{< selfcheck question="Write the Lewis structure for the following: AsF₃" hint="Count the valence electrons first." >}}\n`
    + `{{< mediafigure src="chemistry/${image}" kind="diagram" alt="A Lewis structure." >}}\n{{< /mediafigure >}}\n\nArsenic is the central atom.\n===CHECKS===\narsenic is the central atom\n{{< /selfcheck >}}\n`)[0];
  assert.equal(judgeKeyedUnit(selfcheck('Q7b'), drawn).status, 'confirmed');
  const wrong = judgeKeyedUnit(selfcheck('Q7a'), drawn);
  assert.equal(wrong.status, 'key-differs', 'the neighbouring part\'s drawing');
  assert.match(wrong.detail, /answers with a drawing \(Q7b\)/);
  // Words AND a drawing ("ethanol [structure]", 2.4): the image shown, the
  // source's words carried whole, and the author's sentences about the
  // drawing beside them — which no solution prints and which read, alone, as
  // a model answer that diverges.
  const named = keyedUnits(cnxml(exercises(
    `<exercise id="n1"><problem><para>Build a molecule with two carbons, six hydrogens, and one oxygen.</para><para>(a) Draw the structural formula of this molecule and state its name.</para><para>(b) Can you arrange these atoms to make a different molecule? If so, draw its structural formula and state its name.</para></problem>`
    + `<solution><para>(a) ethanol<newline/>${picture('Q9a')}<newline/> (b) methoxymethane, more commonly known as dimethyl ether<newline/>${picture('Q9b')}</para></solution></exercise>`,
  )));
  const ether = (image, words) => pageItems(`{{< selfcheck question="Build a molecule with two carbons, six hydrogens, and one oxygen. Can you arrange these atoms to make a different molecule? If so, draw its structural formula and state its name." hint="Try the oxygen between the carbons." >}}
`
    + `${words}

{{< mediafigure src="chemistry/${image}" kind="diagram" alt="A structural formula." >}}
{{< /mediafigure >}}

In the drawing, the oxygen atom sits between the two carbon atoms, and each carbon atom is bonded to three hydrogen atoms.
===CHECKS===
the oxygen atom sits between the two carbon atoms
{{< /selfcheck >}}
`)[0];
  const source = 'Methoxymethane, more commonly known as dimethyl ether.';
  assert.equal(judgeKeyedUnit(ether('Q9b', source), named).status, 'reworded');
  assert.equal(judgeKeyedUnit(ether('Q9a', source), named).status, 'key-differs', 'the sibling part\'s drawing');
  assert.equal(judgeKeyedUnit(ether('Q9b', 'Ethyl methyl ether.'), named).status, 'diverges', 'the source\'s name is not carried');
});

test('a link, a second name, and a glossary alias do not hide a unit or its key (2.5, 2.6)', () => {
  const glossary = '<glossary><definition id="g1"><term>covalent compound</term><meaning id="g1m">(also, molecular compound) composed of molecules</meaning></definition>'
    + '<definition id="g2"><term>main-group element</term><meaning id="g2m">(also, representative element) element in groups 1, 2, and 13–18</meaning></definition></glossary>';
  const xml = cnxml(exercises(
    exercise('k1', ['Using the periodic table, predict whether the following chlorides are ionic or covalent: KCl, NCl<sub>3</sub>, ICl, MgCl<sub>2</sub>, PCl<sub>5</sub>, and CCl<sub>4</sub>.'],
      'Ionic: KCl, MgCl<sub>2</sub>; Covalent: NCl<sub>3</sub>, ICl, PCl<sub>5</sub>, CCl<sub>4</sub>'),
    exercise('c1', ['Using the periodic table, classify each of the following elements as a metal or a nonmetal, and then further classify each as a main-group (representative) element, transition metal, or inner transition metal:', '(a) uranium', '(b) bromine'],
      '(a) metal, inner transition metal; (b) nonmetal, representative element'),
    exercise('m1', ['Using the periodic table, predict whether the following compounds are ionic or covalent:', '(a) SO<sub>2</sub>', '(b) CaF<sub>2</sub>'], '(a) molecular; (b) ionic'),
    exercise('a1', ['Aluminum and carbon react to form an ionic compound. Predict which forms an anion, which forms a cation, and the charges of each ion. Write the symbol for each ion and name them.'],
      'Al will form a cation with a charge of 3+: Al<sup>3+</sup>, an aluminum ion. Carbon will form an anion with a charge of 4−: C<sup>4−</sup>, a carbide ion.'),
  )).replace('</content>', `</content>${glossary}`);
  assert.ok(xml.includes('<glossary>'), 'the fixture carries its glossary');
  const units = keyedUnits(xml);
  const aliases = glossaryAliases(xml);
  assert.deepEqual(aliases, [['covalent', 'molecular'], ['main group', 'representative']]);
  const mc = (question, answer, options) => judgeKeyedUnit({ type: 'multiplechoice', question, answer, options }, units, { aliases }).status;
  // The link's path is not the stem's words: one chloride of six, linked, is still its exercise.
  const table = '[periodic table](/physical-sciences/chemistry/appendices/a-the-periodic-table/)';
  assert.equal(unlinked(`Using the ${table}, predict`), 'Using the periodic table, predict');
  assert.equal(mc(`Using the ${table}, predict whether the following chloride is ionic or covalent: KCl.`, 'ionic', ['ionic', 'covalent']), 'confirmed');
  assert.equal(mc(`Using the ${table}, predict whether the following chloride is ionic or covalent: CCl₄.`, 'ionic', ['ionic', 'covalent']), 'key-differs');
  const linkedPage = ['KCl', 'NCl₃', 'ICl', 'MgCl₂', 'PCl₅', 'CCl₄'].map((member) => `{{< multiplechoice question="Using the ${table}, predict whether the following chloride is ionic or covalent: ${member}." answer="ionic" hint="h" >}}\nionic\ncovalent\n{{< /multiplechoice >}}\n`).join('\n');
  assert.equal(coverage(linkedPage, sourceExercises(xml), { keyedOnly: true }).find((verdict) => verdict.id === 'k1').status, 'rendered', 'the coverage gate reads the linked stem too');
  // An option that prints its second name in parentheses is named by either name.
  const classify = 'Using the periodic table, classify the following element as a metal or a nonmetal, and then further classify it as a main-group (representative) element, transition metal, or inner transition metal:';
  const further = ['main-group (representative) element', 'transition metal', 'inner transition metal'];
  assert.equal(mc(`${classify} bromine. Select the further classification.`, 'main-group (representative) element', further), 'confirmed');
  assert.equal(mc(`${classify} bromine. Select the further classification.`, 'transition metal', further), 'key-differs');
  assert.equal(mc(`${classify} uranium. Select the further classification.`, 'inner transition metal', further), 'confirmed');
  assert.equal(mc(`${classify} uranium. Select the further classification.`, 'transition metal', further), 'key-differs');
  assert.equal(mc(`${classify} uranium. Select metal or nonmetal.`, 'metal', ['metal', 'nonmetal']), 'confirmed');
  assert.equal(mc(`${classify} bromine. Select metal or nonmetal.`, 'metal', ['metal', 'nonmetal']), 'key-differs');
  // An answer in the glossary's other word for an option: "molecular" keys "covalent".
  const predict = `Using the ${table}, predict whether the following compound is ionic or covalent:`;
  assert.equal(mc(`${predict} SO₂`, 'covalent', ['ionic', 'covalent']), 'confirmed');
  assert.equal(mc(`${predict} SO₂`, 'ionic', ['ionic', 'covalent']), 'key-differs');
  assert.equal(mc(`${predict} CaF₂`, 'ionic', ['ionic', 'covalent']), 'confirmed');
  assert.equal(judgeKeyedUnit({ type: 'multiplechoice', question: `${predict} SO₂`, answer: 'ionic', options: ['ionic', 'covalent'] }, units).status, 'prose-key',
    'without the glossary the word names no option');
  // A formula the answer introduces with a colon.
  const ions = 'Aluminum and carbon react to form an ionic compound. Predict which forms an anion, which forms a cation, and the charges of each ion. Write the symbol for each ion and name them.';
  const symbol = (question, answer) => judgeKeyedUnit({ type: 'textin', question, answer, form: 'formula' }, units).status;
  assert.equal(symbol(`${ions} Enter the symbol of the ion that aluminum forms.`, 'Al³⁺'), 'confirmed');
  assert.equal(symbol(`${ions} Enter the symbol of the ion that carbon forms.`, 'C⁴⁻'), 'confirmed');
  assert.equal(symbol(`${ions} Enter the symbol of the ion that carbon forms.`, 'C⁴⁺'), 'key-differs');
});

test('a sortbins whose labels are a lettered exercise\'s parts is held to each part\'s answer, and renders every part it labels (2.5)', () => {
  const glossary = '<glossary><definition id="g2"><term>main-group element</term><meaning id="g2m">(also, representative element) element in groups 1, 2, and 13–18</meaning></definition></glossary>';
  const lead = 'Using the periodic table, classify each of the following elements as a metal or a nonmetal, and then further classify each as a main-group (representative) element, transition metal, or inner transition metal:';
  const xml = cnxml(exercises(
    exercise('c1', [lead, '(a) uranium', '(b) bromine', '(c) strontium', '(d) gold'],
      '(a) metal, inner transition metal; (b) nonmetal, representative element; (c) metal, representative element; (d) metal, transition metal'),
    // The unkeyed twin: the same lead-in over other elements.
    exercise('c2', [lead, '(a) cobalt', '(b) europium', '(c) iodine', '(d) indium'], null),
  )).replace('</content>', `</content>${glossary}`);
  const units = keyedUnits(xml);
  const aliases = glossaryAliases(xml);
  const table = '[periodic table](/physical-sciences/chemistry/appendices/a-the-periodic-table/)';
  const question = (closing) => `${lead.replace('periodic table', table).replace(/:$/, '.')} ${closing}`;
  const metals = question('Sort the elements into metals and nonmetals.');
  const further = question('Sort the elements by the further classification.');
  const FURTHER = ['Main-group (representative) element', 'Transition metal', 'Inner transition metal'];
  const sort = (q, bins, entries) => ({ type: 'sortbins', question: q, bins, items: entries.map(([label, bin]) => ({ label, bin })) });
  const judge = (item) => judgeKeyedSortbins(item, units, { aliases });
  const good1 = sort(metals, ['Metal', 'Nonmetal'], [['Uranium', 0], ['Bromine', 1], ['Strontium', 0], ['Gold', 0]]);
  const good2 = sort(further, FURTHER, [['Uranium', 2], ['Bromine', 0], ['Strontium', 0], ['Gold', 1]]);
  // The keyed exercise, not its unkeyed twin, by the parts its labels are.
  assert.equal(sortedExercise(metals, units, { type: 'sortbins', labels: ['Uranium', 'Bromine', 'Strontium', 'Gold'] }).group, 'c1');
  assert.equal(judge(good1).status, 'confirmed', '"metal" is named, "nonmetal" is not printed in "metal, inner transition metal"');
  assert.equal(judge(good2).status, 'confirmed', '"representative element" names the stem\'s option by its second name; "inner transition metal" outranks "transition metal"');
  // A wrong bin: key-differs, naming the part and its answer.
  const wrong = judge(sort(further, FURTHER, [['Uranium', 1], ['Bromine', 0], ['Strontium', 0], ['Gold', 2]]));
  assert.equal(wrong.status, 'key-differs');
  assert.match(wrong.detail, /label "Uranium" is in bin "Transition metal", but source c1\(a\) answers "metal, inner transition metal"/);
  // A part dropped, or a label that is no part, is key-differs too.
  assert.match(judge(sort(metals, ['Metal', 'Nonmetal'], [['Uranium', 0], ['Bromine', 1], ['Strontium', 0]])).detail, /part \(d\) "gold" of source c1 is not a label/);
  assert.match(judge(sort(metals, ['Metal', 'Nonmetal'], [['Uranium', 0], ['Bromine', 1], ['Strontium', 0], ['Gold', 0], ['Iron', 0]])).detail, /label "Iron" is no part of source c1/);
  // The twin's parts as labels: the twin prints no answer.
  assert.equal(judge(sort(metals, ['Metal', 'Nonmetal'], [['Cobalt', 0], ['Europium', 0], ['Iodine', 1], ['Indium', 0]])).status, 'unkeyed-unit');
  // A sortbins that sorts no exercise's parts falls through to the table judge.
  assert.equal(judge(sort('Assign each property to the cell type it describes.', ['Prokaryotes', 'Eukaryotes'], [['Uranium', 0], ['Bromine', 1]])), null);
  // pageItems reads the shortcode as judgeKeyedSortbins takes it.
  const shortcode = (q, bins, entries) => `{{< sortbins question="${q}" hint="h" >}}\n${JSON.stringify({ bins, items: entries.map(([label, bin]) => ({ label, bin })) })}\n{{< /sortbins >}}\n`;
  const page = shortcode(metals, ['Metal', 'Nonmetal'], [['Uranium', 0], ['Bromine', 1], ['Strontium', 0], ['Gold', 0]])
    // (Bromine first: four labels in source order would read as grouped by bin to the interleave rule.)
    + '\n' + shortcode(further, FURTHER, [['Bromine', 0], ['Uranium', 2], ['Strontium', 0], ['Gold', 1]]);
  assert.deepEqual(pageItems(page).map((item) => judge(item).status), ['confirmed', 'confirmed']);
  // Coverage: one sortbins renders every part it labels; a part no sortbins labels is missing.
  const statuses = (markdown) => Object.fromEntries(coverage(markdown, sourceExercises(xml), { keyedOnly: true }).map((verdict) => [verdict.id, verdict.status]));
  assert.deepEqual(statuses(page), {
    'c1(a)': 'rendered', 'c1(b)': 'rendered', 'c1(c)': 'rendered', 'c1(d)': 'rendered',
    'c2(a)': 'omitted', 'c2(b)': 'omitted', 'c2(c)': 'omitted', 'c2(d)': 'omitted',
  });
  const short = shortcode(metals, ['Metal', 'Nonmetal'], [['Uranium', 0], ['Bromine', 1], ['Strontium', 0], ['Neon', 1]]);
  assert.equal(statuses(short)['c1(d)'], 'missing');
  assert.equal(statuses(short)['c1(a)'], 'rendered');
});

test('answers that hold several choices at once are read for the one a multiple choice asks', () => {
  const choices = keyedUnits(cnxml(exercises(
    // A list sorted into the stem's categories by one sentence (2.6).
    exercise('k1', ['Using the periodic table, predict whether the following chlorides are ionic or covalent: KCl, NCl<sub>3</sub>, ICl, MgCl<sub>2</sub>, PCl<sub>5</sub>, and CCl<sub>4</sub>.'],
      'Ionic: KCl, MgCl<sub>2</sub>; Covalent: NCl<sub>3</sub>, ICl, PCl<sub>5</sub>, CCl<sub>4</sub>'),
    // An answer that names parts (13.3, 21.1).
    exercise('y1', ['Will any of the following increase the percent of ammonia that is converted to the ammonium ion in water?', '(a) Addition of NaOH', '(b) Addition of HCl', '(c) Addition of NH<sub>4</sub>Cl'], 'Only (b)'),
    exercise('y2', ['Which of the following nuclei lie within the band of stability?', '(a) chlorine-37', '(b) calcium-40', '(c) carbon-14'], '(a) and (b)'),
    // An answer lettered by role first, under parts borrowed from the exercise before (17.1).
    exercise('o0', ['Balance the equations below assuming they occur in an acidic solution.', '(a) H<sub>2</sub>O<sub>2</sub> + Sn<sup>2+</sup> ⟶ H<sub>2</sub>O + Sn<sup>4+</sup>', '(b) PbO<sub>2</sub> + Hg ⟶ Hg<sub>2</sub><sup>2+</sup> + Pb<sup>2+</sup>'], null),
    exercise('o1', ['Identify the oxidant and reductant of each reaction of the previous exercise.'],
      'Oxidized: (a) Sn<sup>2+</sup>; (b) Hg; reduced: (a) H<sub>2</sub>O<sub>2</sub>; (b) PbO<sub>2</sub>; oxidizing agent: (a) H<sub>2</sub>O<sub>2</sub>; (b) PbO<sub>2</sub>; reducing agent: (a) Sn<sup>2+</sup>; (b) Hg'),
  )));
  const judge = (question, answer, options) => judgeKeyedUnit({ type: 'multiplechoice', question, answer, options }, choices).status;
  const chloride = 'Using the periodic table, predict whether the following chloride is ionic or covalent:';
  assert.equal(judge(`${chloride} KCl.`, 'ionic', ['ionic', 'covalent']), 'confirmed');
  assert.equal(judge(`${chloride} ICl.`, 'covalent', ['ionic', 'covalent']), 'confirmed');
  assert.equal(judge(`${chloride} ICl.`, 'ionic', ['ionic', 'covalent']), 'key-differs');
  assert.equal(judge(`${chloride} PCl₅.`, 'ionic', ['ionic', 'covalent']), 'key-differs');
  const ammonia = 'Will the following increase the percent of ammonia that is converted to the ammonium ion in water?';
  assert.equal(judge(`${ammonia} Addition of HCl`, 'yes', ['yes', 'no']), 'confirmed');
  assert.equal(judge(`${ammonia} Addition of NaOH`, 'no', ['yes', 'no']), 'confirmed');
  assert.equal(judge(`${ammonia} Addition of NaOH`, 'yes', ['yes', 'no']), 'key-differs');
  const band = 'Does the following nucleus lie within the band of stability?';
  assert.equal(judge(`${band} calcium-40`, 'yes', ['yes', 'no']), 'confirmed');
  assert.equal(judge(`${band} carbon-14`, 'yes', ['yes', 'no']), 'key-differs');
  const redox = 'Identify the oxidant and reductant of the following reaction:';
  assert.equal(choices.find((part) => part.id === 'o1(b)').answer, 'Oxidized: Hg; reduced: PbO _2; oxidizing agent: PbO _2; reducing agent: Hg');
  assert.equal(judge(`${redox} H₂O₂ + Sn²⁺ ⟶ H₂O + Sn⁴⁺. Which reactant is the oxidizing agent?`, 'H₂O₂', ['H₂O₂', 'Sn²⁺']), 'confirmed');
  assert.equal(judge(`${redox} H₂O₂ + Sn²⁺ ⟶ H₂O + Sn⁴⁺. Which reactant is the oxidizing agent?`, 'Sn²⁺', ['H₂O₂', 'Sn²⁺']), 'key-differs');
  assert.equal(judge(`${redox} PbO₂ + Hg ⟶ Hg₂²⁺ + Pb²⁺. Which reactant is the reducing agent?`, 'Hg', ['PbO₂', 'Hg']), 'confirmed');
});

test('two formulas each labelled AFTER it are keyed one per item, by the label its closing sentence names (3.2)', () => {
  // Chemistry 2e 3.2, exercise fs-idm149528800, as the CNXML prints it.
  const asbestos = keyedUnits(cnxml(exercises(
    exercise('fs-idm149528800', ['Determine the empirical and molecular formula for chrysotile asbestos. Chrysotile has the following percent composition: 28.03% Mg, 21.60% Si, 1.16% H, and 49.21% O. The molar mass for chrysotile is 520.8 g/mol.'],
      'Mg<sub>3</sub>Si<sub>2</sub>H<sub>3</sub>O<sub>8</sub> (empirical formula), Mg<sub>6</sub>Si<sub>4</sub>H<sub>6</sub>O<sub>16</sub> (molecular formula)'),
    // 2.4's label BEFORE the formula is held to the same rule.
    exercise('s1', ['Write the molecular and empirical formulas of the following compounds:', '(a) acetylene', '(b) ethylene'],
      '(a) molecular C<sub>2</sub>H<sub>2</sub>, empirical CH; (b) molecular C<sub>2</sub>H<sub>4</sub>, empirical CH<sub>2</sub>'),
  )));
  const stem = 'Determine the empirical and molecular formula for chrysotile asbestos. Chrysotile has the following percent composition: 28.03% Mg, 21.60% Si, 1.16% H, and 49.21% O. The molar mass for chrysotile is 520.8 g/mol.';
  const judge = (question, answer) => judgeKeyedUnit({ type: 'textin', question, answer, form: 'formula' }, asbestos);
  assert.equal(judge(`${stem} Enter the empirical formula.`, 'Mg₃Si₂H₃O₈').status, 'confirmed');
  assert.equal(judge(`${stem} Enter the molecular formula.`, 'Mg₆Si₄H₆O₁₆').status, 'confirmed');
  // A swapped pair: each formula is printed in the answer, under the other label.
  assert.equal(judge(`${stem} Enter the empirical formula.`, 'Mg₆Si₄H₆O₁₆').status, 'key-differs');
  assert.equal(judge(`${stem} Enter the molecular formula.`, 'Mg₃Si₂H₃O₈').status, 'key-differs');
  assert.match(judge(`${stem} Enter the molecular formula.`, 'Mg₃Si₂H₃O₈').detail, /for the molecular formula, which source fs-idm149528800 gives as "Mg _6 Si _4 H _6 O _16"/);
  assert.equal(judge(`${stem} Enter the molecular formula.`, 'Mg₆Si₄H₆O₈').status, 'key-differs', 'a formula the answer does not print');
  const lead = 'Write the molecular and empirical formulas of the following compound:';
  assert.equal(judge(`${lead} acetylene. Enter the molecular formula.`, 'C₂H₂').status, 'confirmed');
  assert.equal(judge(`${lead} acetylene. Enter the empirical formula.`, 'CH').status, 'confirmed');
  assert.equal(judge(`${lead} acetylene. Enter the molecular formula.`, 'CH').status, 'key-differs', 'the label-before pair swapped');
});

test('a Check Your Learning that restates the previous one\'s given data is read as the question it asks (3.3)', () => {
  // Chemistry 2e 3.3, examples fs-idm98982768 and fs-idm64107376, their Check Your Learning paragraphs as the CNXML prints them.
  const molarity = keyedUnits(cnxml('<example id="fs-idm98982768"><para id="fs-idm10181424"><title>Calculating Molar Concentrations</title>\nA 355-mL soft drink sample contains 0.133 mol of sucrose (table sugar). What is the molar concentration of sucrose in the beverage?</para>'
    + '<para id="fs-idm883648"><title>Check Your Learning</title>\nA teaspoon of table sugar contains about 0.01 mol sucrose. What is the molarity of sucrose if a teaspoon of sugar has been dissolved in a cup of tea with a volume of 200 mL?</para>'
    + '<note id="fs-idm62768528"><title>Answer:</title><para id="fs-idm62230608">0.05 <emphasis effect="italics">M</emphasis></para></note></example>'
    + '<example id="fs-idm64107376"><para id="fs-idm58170960"><title>Deriving Moles and Volumes from Molar Concentrations</title>\nHow much sugar (mol) is contained in a modest sip (~10 mL) of the soft drink from <link target-id="fs-idm98982768"/>?</para>'
    + '<para id="fs-idm97768960"><title>Check Your Learning</title>\nWhat volume (mL) of the sweetened tea described in <link target-id="fs-idm98982768"/> contains the same amount of sugar (mol) as 10 mL of the soft drink in this example?</para>'
    + '<note id="fs-idm58199648"><title>Answer:</title><para id="fs-idm89023504">80 mL</para></note></example>'));
  const above = 'A teaspoon of table sugar contains about 0.01 mol sucrose. What is the molarity of sucrose if a teaspoon of sugar has been dissolved in a cup of tea with a volume of 200 mL? Enter the molarity in mol/L.';
  const below = 'A teaspoon of table sugar containing about 0.01 mol sucrose has been dissolved in a cup of tea with a volume of 200 mL. What volume (mL) of the sweetened tea described above contains the same amount of sugar (mol) as 10 mL of the soft drink in this example?';
  const fill = (question, answer) => judgeKeyedUnit({ type: 'fillin', question, answer, form: '' }, molarity);
  assert.equal(fill(below, '80').exercise.id, 'fs-idm64107376#check', 'the question it asks, not the data it restates');
  assert.equal(fill(below, '80').status, 'confirmed');
  assert.equal(fill(below, '0.05').status, 'key-differs', 'the restated unit\'s key is a wrong key here');
  assert.equal(fill(above, '0.05').exercise.id, 'fs-idm98982768#check', 'the item above is still itself');
  assert.equal(fill(above, '0.05').status, 'confirmed');
  assert.equal(fill(above, '80').status, 'key-differs');

  // The coverage gate gives each item its own Check Your Learning.
  const module = cnxml('<example id="fs-idm98982768"><para><title>Check Your Learning</title>A teaspoon of table sugar contains about 0.01 mol sucrose. What is the molarity of sucrose if a teaspoon of sugar has been dissolved in a cup of tea with a volume of 200 mL?</para>'
    + '<note><title>Answer:</title><para>0.05 M</para></note></example>'
    + '<example id="fs-idm64107376"><para><title>Check Your Learning</title>What volume (mL) of the sweetened tea described in <link target-id="fs-idm98982768"/> contains the same amount of sugar (mol) as 10 mL of the soft drink in this example?</para>'
    + '<note><title>Answer:</title><para>80 mL</para></note></example>');
  const fillin = (question, answer) => `{{< fillin question="${question}" answer="${answer}" hint="h" >}}\n\n`;
  const verdicts = coverage(fillin(above, '0.05') + fillin(below, '80'), sourceExercises(module), { keyedOnly: true });
  assert.deepEqual(verdicts.map((verdict) => [verdict.id, verdict.status, verdict.line]),
    [['fs-idm98982768#check', 'rendered', 1], ['fs-idm64107376#check', 'rendered', 3]]);
});

test('a lettered exercise answered by naming one part is one multiple choice whose options are its parts (3.1)', () => {
  // Chemistry 2e 3.1, exercise fs-idp40890272, as the CNXML prints it.
  const module = cnxml(exercises(exercise('fs-idp40890272', [
    'Which of the following represents the least number of molecules?',
    '(a) 20.0 g of H<sub>2</sub>O (18.02 g/mol)', '(b) 77.0 g of CH<sub>4</sub> (16.06 g/mol)', '(c) 68.0 g of C<sub>3</sub>H<sub>6</sub> (42.08 g/mol)',
    '(d) 100.0 g of N<sub>2</sub>O (44.02 g/mol)', '(e) 84.0 g of HF (20.01 g/mol)',
  ], '20.0 g H<sub>2</sub>O represents the least number of molecules since it has the least number of moles.')));
  const units = keyedUnits(module);
  assert.deepEqual(units.map((unit) => [unit.id, unit.chosen, unit.choices.length]), [['fs-idp40890272', 'a', 5]]);
  // The page's options, (b) printed with the corrected molar mass beside a Source note.
  const options = ['20.0 g of H₂O (18.02 g/mol)', '77.0 g of CH₄ (16.04 g/mol)', '68.0 g of C₃H₆ (42.08 g/mol)', '100.0 g of N₂O (44.02 g/mol)', '84.0 g of HF (20.01 g/mol)'];
  const ask = 'Which of the following represents the least number of molecules?';
  const judge = (answer, offered = options) => judgeKeyedUnit({ type: 'multiplechoice', question: ask, answer, options: offered }, units);
  assert.equal(judge(options[0]).status, 'confirmed');
  assert.equal(judge(options[0]).exercise.id, 'fs-idp40890272');
  assert.equal(judge(options[1]).status, 'key-differs', 'another part as the key');
  assert.match(judge(options[4]).detail, /naming part \(a\).*part \(e\)/);
  assert.equal(judge(options[0], options.slice(0, 4)), null, 'a missing option: the item is not this exercise');

  const mc = (offered, answer = offered[0]) => `{{< multiplechoice\n  question="${ask}"\n  answer="${answer}"\n  hint="h"\n>}}\n${offered.join('\n')}\n{{< /multiplechoice >}}\n`;
  assert.deepEqual(coverage(mc(options), sourceExercises(module), { keyedOnly: true }).map((verdict) => [verdict.id, verdict.status, verdict.how]),
    [['fs-idp40890272', 'rendered', 'choices']]);
  assert.equal(coverage(mc(options.slice(0, 4)), sourceExercises(module), { keyedOnly: true })[0].status, 'missing', 'every part must be an option');
  assert.equal(coverage(mc([...options.slice(0, 4), '50.0 g of NH₃ (17.03 g/mol)']), sourceExercises(module), { keyedOnly: true })[0].status, 'missing', 'an option that is no part');

  // "Only (b)" and a lettered answer stay one item per part.
  const perPart = keyedUnits(cnxml(exercises(
    exercise('y1', ['Which of the following nuclei lie within the band of stability?', '(a) chlorine-37', '(b) calcium-40'], 'Only (b)'),
    exercise('y2', ['Which of the following are ionic?', '(a) KCl', '(b) ICl'], '(a) ionic; (b) covalent'),
  )));
  assert.deepEqual(perPart.map((unit) => unit.id), ['y1(a)', 'y1(b)', 'y2(a)', 'y2(b)']);
});

test('a worked example is read whole: its question up to the Solution, the Solution up to its Check Your Learning', () => {
  const xml = cnxml(
    '<example id="w1"><para><title>Calculating Molar Concentrations</title>A 355-mL soft drink sample contains 0.133 mol of sucrose. What is the molar concentration of sucrose in the beverage?</para>'
    + '<para><title>Solution</title>The volume must be converted from mL to L:</para><equation><m:math xmlns:m="http://www.w3.org/1998/Math/MathML"><m:mi>M</m:mi><m:mo>=</m:mo><m:mn>0.375</m:mn><m:mi>M</m:mi></m:math></equation>'
    + '<para><title>Check Your Learning</title>A teaspoon of sugar holds 0.01 mol sucrose. What is its molarity in 200 mL of tea?</para><note><title>Answer:</title><para>0.05 M</para></note></example>'
    + '<example id="w2"><para><title>Deriving Moles</title>How much sugar (mol) is contained in a sip (~10 mL) of the soft drink from <link target-id="w1"/>?</para>'
    + '<para><title>Solution</title>(a) first part gives 0.004 mol sugar</para></example>'
    // An example with no Solution paragraph (an appendix's table of rules) is not one a check can re-ask.
    + '<example id="w3"><para><title>Rules</title>Only a table.</para></example>',
  );
  const examples = workedExamples(xml);
  assert.deepEqual(examples.map((example) => [example.id, example.title, example.leansOn ?? null]), [
    ['w1', 'Calculating Molar Concentrations', null], ['w2', 'Deriving Moles', 'w1'],
  ]);
  assert.equal(examples[0].stem, 'A 355-mL soft drink sample contains 0.133 mol of sucrose. What is the molar concentration of sucrose in the beverage?', 'the example\'s title is not part of its question');
  assert.deepEqual(printedNumerals(examples[0].answer).map((numeral) => numeral.printed), ['0.375'], 'the Solution stops at the Check Your Learning: 0.05 is not its answer');
  // As units they are read by the same judge as an exercise — and are never among a section page's keyed units.
  const units = workedExampleUnits(xml);
  const item = { type: 'fillin', question: `${examples[0].stem} Enter the molarity in mol/L.`, answer: '0.375', form: 'sig-figs:3 last-digit:0' };
  assert.equal(judgeKeyedUnit(item, units).status, 'confirmed');
  assert.equal(judgeKeyedUnit({ ...item, answer: '0.05' }, units).status, 'key-differs');
  assert.ok(!keyedUnits(xml).some((unit) => unit.cls === 'worked-example'), 'a section page builds no item on a worked example');
  assert.deepEqual(keyedUnits(xml).map((unit) => unit.id), ['w1#check']);
});


/* ---- chapter 4: the shapes probed before the wave (docs/briefs/chemistry/run.md §1 step 6a) ---- */

// The source's MathML read as stemText and answerText read it: one
// identifier per symbol, the aqueous state "( a q )", mercury "H g".
const CH4 = cnxml(exercises(
  exercise('q3', ['Balance the following equations:', '(a) PCl 5 ( s ) + H 2 O ( l ) ⟶ POCl 3 ( l ) + HCl ( a q )', '(b) H 2 ( g ) + I 2 ( s ) ⟶ HI ( s )'],
    '(a) PCl 5 ( s ) + H 2 O ( l ) ⟶ POCl 3 ( l ) + 2 HCl ( a q ); (b) H 2 ( g ) + I 2 ( s ) ⟶ 2 HI ( s )'),
  exercise('q4', ['Balance the following equations:', '(a) Fe ( s ) + O 2 ( g ) ⟶ Fe 2 O 3 ( s )', '(b) Pb ( s ) + O 2 ( g ) ⟶ PbO ( s )'], null),
  exercise('q7', ['Colorful fireworks often involve the decomposition of barium nitrate and potassium chlorate and the reaction of the metals magnesium, aluminum, and iron with oxygen.',
    '(a) Write the formulas of barium nitrate and potassium chlorate.',
    '(b) Write separate equations for the reactions of the solid metals magnesium, aluminum, and iron with diatomic oxygen gas to yield the corresponding metal oxides. (Assume the iron oxide contains Fe<sup>3+</sup> ions.)'],
  '(a) Ba(NO<sub>3</sub>)<sub>2</sub>, KClO<sub>3</sub>; (b) 2 Mg ( s ) + O 2 ( g ) ⟶ 2 MgO ( s ) ; 4 Al ( s ) + 3 O 2 ( g ) ⟶ 2 Al 2 O 3 ( s ) ; 4 Fe ( s ) + 3 O 2 ( g ) ⟶ 2 Fe 2 O 3 ( s )'),
  exercise('q11', ['From the balanced molecular equations, write the complete ionic and net ionic equations for the following:',
    '(a) Pb ( N O 3 ) 2 ( a q ) + H 2 SO 4 ( a q ) ⟶ PbSO 4 ( s ) + 2 HNO 3 ( a q )',
    '(b) CaCO 3 ( s ) + H 2 SO 4 ( a q ) ⟶ CaSO 4 ( s ) + CO 2 ( g ) + H 2 O ( l )'],
  '(a) Pb<sup>2+</sup> ( a q ) + 2 NO 3<sup>−</sup> ( a q ) + 2 H<sup>+</sup> ( a q ) + SO 4<sup>2−</sup> ( a q ) ⟶ PbSO 4 ( s ) + 2 H<sup>+</sup> ( a q ) + 2 NO 3<sup>−</sup> ( a q ) (complete) Pb<sup>2+</sup> ( a q ) + SO 4<sup>2−</sup> ( a q ) ⟶ PbSO 4 ( s ) (net) '
    + '(b) CaCO 3 ( s ) + 2 H<sup>+</sup> ( a q ) + SO 4<sup>2−</sup> ( a q ) ⟶ CaSO 4 ( s ) + CO 2 ( g ) + H 2 O ( l ) (complete) CaCO 3 ( s ) + 2 H<sup>+</sup> ( a q ) + SO 4<sup>2−</sup> ( a q ) ⟶ CaSO 4 ( s ) + CO 2 ( g ) + H 2 O ( l ) (net)'),
  exercise('q28', ['Balance each of the following equations according to the half-reaction method:',
    '(a) H 2 S ( g ) + Hg 2<sup>2+</sup> ( a q ) ⟶ H g ( l ) + S ( s ) (in acid)', '(b) MnO 4<sup>2−</sup> ( a q ) ⟶ MnO 4<sup>−</sup> ( a q ) + MnO 2 ( s ) (in base)'],
  '(a) H 2 S ( g ) + Hg 2<sup>2+</sup> ( a q ) + 2 H 2 O ( l ) ⟶ 2 Hg ( l ) + S ( s ) + 2 H 3 O<sup>+</sup> ( a q ); (b) 3 MnO 4<sup>2−</sup> ( a q ) + 2 H 2 O ( l ) ⟶ 2 MnO 4<sup>−</sup> ( a q ) + 4 OH<sup>−</sup> ( a q ) + MnO 2 ( s ) (in base)'),
));
const ch4 = keyedUnits(CH4);
const equation = (question, answer) => judgeKeyedUnit({ type: 'textin', question, answer, form: 'equation' }, ch4);
const FIREWORKS = 'Colorful fireworks often involve the decomposition of barium nitrate and potassium chlorate and the reaction of the metals magnesium, aluminum, and iron with oxygen.';
const METALS = `${FIREWORKS} Write separate equations for the reactions of the solid metals magnesium, aluminum, and iron with diatomic oxygen gas to yield the corresponding metal oxides. (Assume the iron oxide contains Fe³⁺ ions.)`;
const ionic = (part, which) => `From the balanced molecular equation, write the complete ionic and net ionic equations for the following: ${part}. Enter the ${which} ionic equation.`;

test('an equation item reads in the book\'s print and is held to its own equation (4.1, 4.2)', () => {
  const balance = 'Balance the following equation: PCl₅(s) + H₂O(l) ⟶ POCl₃(l) + HCl(aq).';
  assert.equal(equation(balance, 'PCl₅(s) + H₂O(l) ⟶ POCl₃(l) + 2HCl(aq)').status, 'confirmed');
  assert.equal(equation(balance, 'PCl₅(s) + H₂O(l) ⟶ POCl₃(l) + 2HCl(aq)').exercise.id, 'q3(a)');
  assert.equal(equation(balance, 'PCl₅(s) + H₂O(l) ⟶ POCl₃(l) + 3HCl(aq)').status, 'key-differs', 'a coefficient changed');
  assert.equal(equation(balance, 'H₂(g) + I₂(s) ⟶ 2HI(s)').status, 'key-differs', 'the sibling part\'s equation');
  assert.equal(equation(balance, 'PCl₅(s) + H₂O(l) ⟶ POCl₃(l) + HCl(aq)').status, 'key-differs', 'the unbalanced stem equation');
  // "( a q )" and "H g ( l )" are the page's (aq) and Hg(l): before, these parts were no exercise at all.
  const half = 'Balance the following equation according to the half-reaction method:';
  assert.equal(equation(`${half} H₂S(g) + Hg₂²⁺(aq) ⟶ Hg(l) + S(s) (in acid).`, 'H₂S(g) + Hg₂²⁺(aq) + 2H₂O(l) ⟶ 2Hg(l) + S(s) + 2H₃O⁺(aq)').exercise.id, 'q28(a)');
  // The answer's trailing "(in base)" is the stem's condition, not a species.
  assert.equal(equation(`${half} MnO₄²⁻(aq) ⟶ MnO₄⁻(aq) + MnO₂(s) (in base).`, '3MnO₄²⁻(aq) + 2H₂O(l) ⟶ 2MnO₄⁻(aq) + 4OH⁻(aq) + MnO₂(s)').status, 'confirmed');
  assert.equal(equation(`${half} MnO₄²⁻(aq) ⟶ MnO₄⁻(aq) + MnO₂(s) (in base).`, '3MnO₄²⁻(aq) + 2H₂O(l) ⟶ 2MnO₄⁻(aq) + 2OH⁻(aq) + MnO₂(s)').status, 'key-differs');
});

test('several equations to one part: each item is held to the one its closing sentence asks (4.1)', () => {
  const eqs = { Mg: '2Mg(s) + O₂(g) ⟶ 2MgO(s)', Al: '4Al(s) + 3O₂(g) ⟶ 2Al₂O₃(s)', Fe: '4Fe(s) + 3O₂(g) ⟶ 2Fe₂O₃(s)' };
  for (const [symbol, name] of [['Mg', 'magnesium'], ['Al', 'aluminum'], ['Fe', 'iron']]) {
    const question = `${METALS} Enter the equation for the reaction of ${name}.`;
    assert.equal(equation(question, eqs[symbol]).status, 'confirmed', name);
    assert.equal(equation(question, eqs[symbol]).exercise.id, 'q7(b)');
    for (const other of Object.keys(eqs).filter((key) => key !== symbol)) assert.equal(equation(question, eqs[other]).status, 'key-differs', `${other} under ${name}`);
  }
  // Labelled after, with nothing between them: "… (complete) … (net)".
  assert.deepEqual(answerEquations(ch4.find((unit) => unit.id === 'q11(a)').answer).map((entry) => entry.label), ['complete', 'net']);
  const lead = 'Pb(NO₃)₂(aq) + H₂SO₄(aq) ⟶ PbSO₄(s) + 2HNO₃(aq)';
  const complete = 'Pb²⁺(aq) + 2NO₃⁻(aq) + 2H⁺(aq) + SO₄²⁻(aq) ⟶ PbSO₄(s) + 2H⁺(aq) + 2NO₃⁻(aq)';
  const net = 'Pb²⁺(aq) + SO₄²⁻(aq) ⟶ PbSO₄(s)';
  assert.equal(equation(ionic(lead, 'complete'), complete).status, 'confirmed');
  assert.equal(equation(ionic(lead, 'complete'), complete).exercise.id, 'q11(a)', 'the source\'s "N O 3" and the page\'s glued "2HNO₃" read as the part');
  assert.equal(equation(ionic(lead, 'net'), net).status, 'confirmed');
  assert.equal(equation(ionic(lead, 'complete'), net).status, 'key-differs', 'the net ionic key under the complete ionic stem');
  assert.equal(equation(ionic(lead, 'net'), complete).status, 'key-differs');
  // Two identical equations: both items keyed with it are right.
  const same = 'CaCO₃(s) + 2H⁺(aq) + SO₄²⁻(aq) ⟶ CaSO₄(s) + CO₂(g) + H₂O(l)';
  const carbonate = 'CaCO₃(s) + H₂SO₄(aq) ⟶ CaSO₄(s) + CO₂(g) + H₂O(l)';
  assert.equal(equation(ionic(carbonate, 'complete'), same).status, 'confirmed');
  assert.equal(equation(ionic(carbonate, 'net'), same).status, 'confirmed');
  // Two formulas listed bare: held by the element the closing sentence names.
  const formulas = `${FIREWORKS} Write the formulas of barium nitrate and potassium chlorate.`;
  const formula = (question, answer) => judgeKeyedUnit({ type: 'textin', question, answer, form: 'formula' }, ch4).status;
  assert.equal(formula(`${formulas} Enter the formula of barium nitrate.`, 'Ba(NO₃)₂'), 'confirmed');
  assert.equal(formula(`${formulas} Enter the formula of barium nitrate.`, 'KClO₃'), 'key-differs');
  assert.equal(formula(`${formulas} Enter the formula of potassium chlorate.`, 'KClO₃'), 'confirmed');
  assert.equal(formula(`${formulas} Enter the formula of potassium chlorate.`, 'Ba(NO₃)₂'), 'key-differs');
});

test('a part is required by an item of its own, never by a sibling\'s item that prints most of its words (4.1)', () => {
  const textin = (question, answer, form) => `{{< textin question="${question}" answer="${answer}" answerForm="${form}" hint="h" >}}\n\n`;
  const metals = ['magnesium', 'aluminum', 'iron'].map((name, index) => textin(`${METALS} Enter the equation for the reaction of ${name}.`,
    ['2Mg(s) + O₂(g) ⟶ 2MgO(s)', '4Al(s) + 3O₂(g) ⟶ 2Al₂O₃(s)', '4Fe(s) + 3O₂(g) ⟶ 2Fe₂O₃(s)'][index], 'equation')).join('');
  const formulas = textin(`${FIREWORKS} Write the formulas of barium nitrate and potassium chlorate. Enter the formula of barium nitrate.`, 'Ba(NO₃)₂', 'formula');
  const status = (page, id) => coverage(page, sourceExercises(CH4), { keyedOnly: true }).find((verdict) => verdict.id === id).status;
  assert.equal(status(formulas + metals, 'q7(a)'), 'rendered');
  assert.equal(status(formulas + metals, 'q7(b)'), 'rendered');
  assert.equal(status(metals, 'q7(a)'), 'missing', '(b)\'s three items print the lead-in that names both compounds; none of them is (a)');
});

test('a fill-in is held to the one number its closing sentence names: an element\'s oxidation state, an amount of a substance (4.2, 4.3)', () => {
  const module = cnxml(
    example('x3', 'Assign oxidation states to the elements whose atoms are underlined in each of the following compounds or ions: (a) K <emphasis effect="underline">N</emphasis> O<sub>3</sub> (b) N _ H<sub>4</sub><sup>+</sup>', '(a) N, +5; (b) N, −3')
    + exercises(
      exercise('o6', ['Determine the oxidation states of the elements in the compounds listed. None of the oxygen-containing compounds are peroxides or superoxides.', '(a) H<sub>3</sub>PO<sub>4</sub>', '(b) In<sub>2</sub>S<sub>3</sub>'],
        '(a) H +1, P +5, O −2; (b) In +3, S −2'),
      // An unkeyed exercise whose parts the next one borrows (4.3's (1) and (2)).
      exercise('m1', ['Write the balanced equation, then outline the steps necessary to determine the information requested in each of the following:',
        '(a) The number of moles and the mass of chlorine, Cl<sub>2</sub>, required to react with 10.0 g of sodium metal, Na, to produce sodium chloride, NaCl.',
        '(b) The number of moles and the mass of copper(II) carbonate needed to produce 1.500 kg of copper(II) oxide. (CO<sub>2</sub> is the other product.)'], null),
      exercise('m2', ['Determine the number of moles and the mass requested for each reaction in <link target-id="m1"/>.'],
        '(a) 0.435 mol Na, 0.217 mol Cl<sub>2</sub>, 15.4 g Cl<sub>2</sub>; (b) 18.86 mol CuO, 2.330 kg CuCO<sub>3</sub>'),
    ),
  );
  const units = keyedUnits(module);
  const fill = (question, answer, form = '') => judgeKeyedUnit({ type: 'fillin', question, answer, form }, units).status;
  const signed = 'as a signed number, the sign first, as +2 or −1.';
  const acid = `Determine the oxidation states of the elements in the following compound. None of the oxygen-containing compounds are peroxides or superoxides. H₃PO₄. Enter the oxidation state of P ${signed}`;
  assert.equal(fill(acid, '5', 'whole-number'), 'confirmed');
  assert.equal(fill(acid, '1', 'whole-number'), 'key-differs', 'H\'s number under P\'s closing sentence');
  const oxygen = acid.replace('of P', 'of O');
  assert.equal(fill(oxygen, '-2', 'whole-number'), 'confirmed');
  assert.equal(fill(oxygen, '−2', 'whole-number'), 'confirmed', 'a minus sign as the source prints it');
  assert.equal(fill(oxygen, '2', 'whole-number'), 'key-differs', 'the sign is part of the key');
  assert.equal(fill(acid.replace('H₃PO₄', 'In₂S₃').replace('of P', 'of In'), '3', 'whole-number'), 'confirmed', '"In" the symbol, not the word');
  assert.equal(fill(acid.replace('H₃PO₄', 'In₂S₃').replace('of P', 'of In'), '-2', 'whole-number'), 'key-differs');
  // The underlined atom: the page's <u>N</u> and the source's lone MathML underline both split nothing.
  const underlined = (formula) => `Assign the oxidation state to the element whose atom is underlined in the following compound or ion: ${formula}. Enter the oxidation state of N ${signed}`;
  assert.equal(fill(underlined('K<u>N</u>O₃'), '5', 'whole-number'), 'confirmed');
  assert.equal(fill(underlined('<u>N</u>H₄⁺'), '-3', 'whole-number'), 'confirmed');
  assert.equal(fill(underlined('<u>N</u>H₄⁺'), '3', 'whole-number'), 'key-differs');

  const chlorine = 'Determine the number of moles and the mass requested for the following reaction: The number of moles and the mass of chlorine, Cl₂, required to react with 10.0 g of sodium metal, Na, to produce sodium chloride, NaCl.';
  assert.equal(fill(`${chlorine} Enter the number of moles of Cl₂.`, '0.217'), 'confirmed');
  assert.equal(fill(`${chlorine} Enter the number of moles of Cl₂.`, '0.435'), 'key-differs', 'the sodium\'s amount, which the answer also prints');
  assert.equal(fill(`${chlorine} Enter the mass of Cl₂ in grams.`, '15.4'), 'confirmed');
  assert.equal(fill(`${chlorine} Enter the mass of Cl₂ in grams.`, '0.217'), 'key-differs');
  // The answer prints the moles of the oxide, equal 1:1 to the carbonate's asked: read by the unit alone.
  const copper = 'Determine the number of moles and the mass requested for the following reaction: The number of moles and the mass of copper(II) carbonate needed to produce 1.500 kg of copper(II) oxide. (CO₂ is the other product.)';
  assert.equal(fill(`${copper} Enter the number of moles of CuCO₃.`, '18.86'), 'confirmed');
  assert.equal(fill(`${copper} Enter the number of moles of CuCO₃.`, '2.330'), 'key-differs');
  assert.equal(fill(`${copper} Enter the mass of CuCO₃ in kilograms.`, '2.330'), 'confirmed');

  // Each borrowed part carried as two items: both are the keyed exercise's, and the unkeyed one is omitted.
  const fillin = (question, answer) => `{{< fillin question="${question}" answer="${answer}" hint="h" >}}\n\n`;
  const page = fillin(`${chlorine} Enter the number of moles of Cl₂.`, '0.217') + fillin(`${chlorine} Enter the mass of Cl₂ in grams.`, '15.4')
    + fillin(`${copper} Enter the number of moles of CuCO₃.`, '18.86') + fillin(`${copper} Enter the mass of CuCO₃ in kilograms.`, '2.330');
  assert.deepEqual(coverage(page, sourceExercises(module), { keyedOnly: true }).filter((verdict) => /^m/.test(verdict.id)).map((verdict) => [verdict.id, verdict.status]),
    [['m1(a)', 'omitted'], ['m1(b)', 'omitted'], ['m2(a)', 'rendered'], ['m2(b)', 'rendered']]);
});

test('roles said in sentences, a limiting reactant, and a role asked in a followup (4.2, 4.4)', () => {
  const module = cnxml(
    example('x4', 'This equation describes the production of tin(II) chloride: Sn ( s ) + 2 HCl ( g ) ⟶ SnCl 2 ( s ) + H 2 ( g ) Is this a redox reaction? If so, provide a more specific name for the reaction if appropriate, and identify the oxidant and reductant.',
      'Yes, a single-replacement reaction. Sn(<emphasis effect="italics">s</emphasis>) is the reductant, HCl(<emphasis effect="italics">g</emphasis>) is the oxidant.')
    + exercises(
      exercise('r8', ['Classify the following as acid-base reactions or oxidation-reduction reactions:', '(a) Na 2 S ( a q ) + 2 HCl ( a q ) ⟶ 2 NaCl ( a q ) + H 2 S ( g )', '(b) Mg ( s ) + Cl 2 ( g ) ⟶ MgCl 2 ( s )'],
        '(a) acid-base; (b) oxidation-reduction: Mg is oxidized, Cl<sub>2</sub> is reduced'),
      exercise('l2', ['What is the limiting reactant in a reaction that produces sodium chloride from 8 g of sodium and 8 g of diatomic chlorine?'], 'The limiting reactant is Cl2.'),
      exercise('l12', ['Outline the steps needed to determine the limiting reactant when 0.50 mol of Cr and 0.75 mol of H<sub>3</sub>PO<sub>4</sub> react according to the following chemical equation. 2 Cr + 2 H 3 PO 4 ⟶ 2 CrPO 4 + 3 H 2 Determine the limiting reactant.'],
        'The conversion needed is mol Cr ⟶ mol H 3 PO 4 . Then compare the amount of Cr to the amount of acid present. Cr is the limiting reactant.'),
    ),
  );
  const units = keyedUnits(module);
  const choose = (question, answer, options) => judgeKeyedUnit({ type: 'multiplechoice', question, answer, options }, units).status;
  const classify = 'Classify the following as an acid-base reaction or an oxidation-reduction reaction: Mg(s) + Cl₂(g) ⟶ MgCl₂(s).';
  assert.equal(choose(classify, 'oxidation-reduction', ['acid-base', 'oxidation-reduction']), 'confirmed');
  assert.equal(choose(`${classify} Which reactant is oxidized?`, 'Mg', ['Mg', 'Cl₂']), 'confirmed', 'the answer names both reactants, each with its role');
  assert.equal(choose(`${classify} Which reactant is oxidized?`, 'Cl₂', ['Mg', 'Cl₂']), 'key-differs');
  assert.equal(choose(`${classify} Which reactant is reduced?`, 'Cl₂', ['Mg', 'Cl₂']), 'confirmed');
  const tin = 'This equation describes the production of tin(II) chloride: Sn(s) + 2HCl(g) ⟶ SnCl₂(s) + H₂(g). Is this a redox reaction? If so, provide a more specific name for the reaction if appropriate, and identify the oxidant and reductant.';
  assert.equal(choose(`${tin} Which reactant is the oxidant?`, 'HCl', ['Sn', 'HCl']), 'confirmed');
  assert.equal(choose(`${tin} Which reactant is the oxidant?`, 'Sn', ['Sn', 'HCl']), 'key-differs');
  assert.equal(choose(tin, 'yes', ['yes', 'no']), 'confirmed');
  // The formula the answer prints names the option that holds its element's name.
  const sodium = 'What is the limiting reactant in a reaction that produces sodium chloride from 8 g of sodium and 8 g of diatomic chlorine?';
  assert.equal(choose(sodium, 'diatomic chlorine', ['sodium', 'diatomic chlorine']), 'confirmed');
  assert.equal(choose(sodium, 'sodium', ['sodium', 'diatomic chlorine']), 'key-differs');
  const chromium = 'Outline the steps needed to determine the limiting reactant when 0.50 mol of Cr and 0.75 mol of H₃PO₄ react according to the following chemical equation. 2Cr + 2H₃PO₄ ⟶ 2CrPO₄ + 3H₂. Determine the limiting reactant.';
  assert.equal(choose(chromium, 'Cr', ['Cr', 'H₃PO₄']), 'confirmed', '"Cr is the limiting reactant", the conversion before it aside');
  assert.equal(choose(chromium, 'H₃PO₄', ['Cr', 'H₃PO₄']), 'key-differs');

  // The role item stands under the redox part alone: it must be held in a followup, though it is a multiple choice itself.
  const mc = (question, answer, options) => `{{< multiplechoice question="${question}" answer="${answer}" hint="h" >}}\n${options.join('\n')}\n{{< /multiplechoice >}}\n\n`;
  const acidBase = mc('Classify the following as an acid-base reaction or an oxidation-reduction reaction: Na₂S(aq) + 2HCl(aq) ⟶ 2NaCl(aq) + H₂S(g).', 'acid-base', ['acid-base', 'oxidation-reduction']);
  const role = mc(`${classify} Which reactant is oxidized?`, 'Mg', ['Mg', 'Cl₂']);
  const records = (page) => pageItems(page).map((item) => {
    const verdict = judgeKeyedUnit(item, units);
    return { group: verdict.exercise.group, unit: verdict.exercise.id, type: item.type, line: item.line, options: item.options, followup: Boolean(item.followup) };
  });
  const redox = mc(classify, 'oxidation-reduction', ['acid-base', 'oxidation-reduction']);
  assert.deepEqual(conditionalUnwrapped(records(acidBase + redox + `{{< followup >}}\n${role}{{< /followup >}}\n`)), []);
  assert.deepEqual(conditionalUnwrapped(records(acidBase + redox + role)).map((offender) => offender.line), [records(acidBase + redox + role).at(-1).line]);
});

test('formulas said in sentences, and a selfcheck that prints the source\'s equations in the book\'s print (4.2, 4.5)', () => {
  const module = cnxml(exercises(
    exercise('s8', ['A 0.025-g sample of a compound composed of boron and hydrogen, with a molecular mass of ~28 amu, burns spontaneously when exposed to air, producing 0.063 g of B<sub>2</sub>O<sub>3</sub>. What are the empirical and molecular formulas of the compound?'],
      'The empirical formula is BH<sub>3</sub>. The molecular formula is B<sub>2</sub>H<sub>6</sub>.'),
    exercise('s14', ['Complete and balance the equations for the following acid-base neutralization reactions. In some cases, there may be more than one correct answer, depending on the amounts of reactants used.', '(a) Mg (OH) 2 ( s ) + HClO 4 ( a q ) ⟶', '(b) SrO ( s ) + H 2 SO 4 ( l ) ⟶'],
      '(a) Mg (OH) 2 ( s ) + 2 HClO 4 ( a q ) ⟶ Mg<sup>2+</sup> ( a q ) + 2 ClO 4<sup>−</sup> ( a q ) + 2 H 2 O ( l ) ; (b) SrO ( s ) + H 2 SO 4 ( l ) ⟶ SrSO 4 ( s ) + H 2 O'),
  ));
  const units = keyedUnits(module);
  const boron = 'A 0.025-g sample of a compound composed of boron and hydrogen, with a molecular mass of ~28 amu, burns spontaneously when exposed to air, producing 0.063 g of B₂O₃. What are the empirical and molecular formulas of the compound?';
  const formula = (question, answer) => judgeKeyedUnit({ type: 'textin', question, answer, form: 'formula' }, units).status;
  assert.equal(formula(`${boron} Enter the empirical formula.`, 'BH₃'), 'confirmed');
  assert.equal(formula(`${boron} Enter the molecular formula.`, 'B₂H₆'), 'confirmed');
  assert.equal(formula(`${boron} Enter the empirical formula.`, 'B₂H₆'), 'key-differs');
  const lead = 'Complete and balance the equation for the following acid-base neutralization reaction. In some cases, there may be more than one correct answer, depending on the amounts of reactants used.';
  const selfcheck = (question, model) => judgeKeyedUnit({ type: 'selfcheck', question, model }, units).status;
  assert.equal(selfcheck(`${lead} Mg(OH)₂(s) + HClO₄(aq) ⟶.`, 'Mg(OH)₂(s) + 2HClO₄(aq) ⟶ Mg²⁺(aq) + 2ClO₄⁻(aq) + 2H₂O(l)'), 'verbatim');
  assert.equal(selfcheck(`${lead} Mg(OH)₂(s) + HClO₄(aq) ⟶.`, 'SrO(s) + H₂SO₄(l) ⟶ SrSO₄(s) + H₂O'), 'diverges', 'another part\'s equation');
});

test('a reaction printed as $\\ce{…}$, whole or split after its arrow, reads as the same reaction in Unicode (chapter 4 stems)', () => {
  assert.equal(unlinked('$\\ce{Na2S(aq) + 2HCl(aq) ->}$ $\\ce{2NaCl(aq) + H2S(g)}$'), 'Na₂S(aq) + 2HCl(aq) ⟶ 2NaCl(aq) + H₂S(g)');
  assert.equal(unlinked('$\\ce{SO4^2- + Hg2^{2+} + Cl-(aq)}$'), 'SO₄²⁻ + Hg₂²⁺ + Cl⁻(aq)');
  assert.equal(unlinked('$\\ce{CuSO4*5H2O}$ and $\\ce{FeCl3.2H2O}$ and $\\ce{^{7}_{3}Li}$'), 'CuSO₄·5H₂O and FeCl₃·2H₂O and ⁷₃Li');
  // 4.2's classification exercise as the CNXML prints it, carried as the page now carries it.
  const module = cnxml(exercises(
    exercise('fs-idp153725776', ['Classify the following as acid-base reactions or oxidation-reduction reactions:',
      '(a) Na 2 S ( a q ) + 2 HCl ( a q ) ⟶ 2 NaCl ( a q ) + H 2 S ( g )', '(b) 2 Na ( s ) + 2 HCl ( a q ) ⟶ 2 NaCl ( a q ) + H 2 ( g )',
      '(c) Mg ( s ) + Cl 2 ( g ) ⟶ MgCl 2 ( s )'],
    '(a) acid-base; (b) oxidation-reduction: Na is oxidized, H<sup>+</sup> is reduced; (c) oxidation-reduction: Mg is oxidized, Cl<sub>2</sub> is reduced'),
    exercise('fs-idm9932800', ['The military has experimented with lasers that produce very intense light when fluorine combines explosively with hydrogen. What is the balanced equation for this reaction?'], 'H 2 ( g ) + F 2 ( g ) ⟶ 2HF ( g )'),
  ));
  const units = keyedUnits(module);
  const lead = 'Classify the following as an acid-base reaction or an oxidation-reduction reaction:';
  const parts = { a: '$\\ce{Na2S(aq) + 2HCl(aq) ->}$ $\\ce{2NaCl(aq) + H2S(g)}$', b: '$\\ce{2Na(s) + 2HCl(aq) ->}$ $\\ce{2NaCl(aq) + H2(g)}$', c: '$\\ce{Mg(s) + Cl2(g) ->}$ $\\ce{MgCl2(s)}$' };
  const choose = (question, answer, options = ['acid-base', 'oxidation-reduction']) => judgeKeyedUnit({ type: 'multiplechoice', question, answer, options }, units);
  assert.equal(choose(`${lead} ${parts.a}.`, 'acid-base').exercise.id, 'fs-idp153725776(a)');
  assert.equal(choose(`${lead} ${parts.a}.`, 'acid-base').status, 'confirmed');
  assert.equal(choose(`${lead} ${parts.a}.`, 'oxidation-reduction').status, 'key-differs');
  assert.equal(choose(`${lead} ${parts.b}.`, 'oxidation-reduction').exercise.id, 'fs-idp153725776(b)');
  assert.equal(choose(`${lead} ${parts.c}. Which reactant is oxidized?`, 'Mg', ['Mg', 'Cl₂']).status, 'confirmed');
  assert.equal(choose(`${lead} ${parts.c}. Which reactant is oxidized?`, 'Cl₂', ['Mg', 'Cl₂']).status, 'key-differs');
  assert.equal(choose(`${lead} ${parts.b}. Which reactant is oxidized?`, 'Na', ['Na', 'HCl']).exercise.id, 'fs-idp153725776(b)');
  // An unlettered stem and an equation key, the same.
  const laser = 'The military has experimented with lasers that produce very intense light when fluorine combines explosively with hydrogen. What is the balanced equation for this reaction?';
  assert.equal(judgeKeyedUnit({ type: 'textin', question: laser, answer: 'H₂(g) + F₂(g) ⟶ 2HF(g)', form: 'equation' }, units).status, 'confirmed');
  // Coverage: every part rendered by its own item, and a part whose equation is not printed is missing.
  const mc = (question, answer, options = ['acid-base', 'oxidation-reduction']) => `{{< multiplechoice\n  question="${question}"\n  answer="${answer}"\n  hint="h"\n>}}\n${options.join('\n')}\n{{< /multiplechoice >}}\n\n`;
  const page = mc(`${lead} ${parts.a}.`, 'acid-base') + mc(`${lead} ${parts.b}.`, 'oxidation-reduction')
    + `{{< followup >}}\n${mc(`${lead} ${parts.b}. Which reactant is oxidized?`, 'Na', ['Na', 'HCl'])}{{< /followup >}}\n\n`;
  const status = (markdown) => coverage(markdown, sourceExercises(module), { keyedOnly: true }).filter((verdict) => verdict.id.startsWith('fs-idp153725776')).map((verdict) => verdict.status);
  assert.deepEqual(status(page + mc(`${lead} ${parts.c}.`, 'oxidation-reduction')), ['rendered', 'rendered', 'rendered']);
  assert.deepEqual(status(page), ['rendered', 'rendered', 'missing']);
});

test('a selfcheck model answer that prints an equation the source does not is a correction, however many words it shares (4.2)', () => {
  const units = keyedUnits(cnxml(exercises(exercise('fs-idp89462576', ['Complete and balance the equations of the following reactions, each of which could be used to remove hydrogen sulfide from natural gas:',
    '(a) Ca ( OH ) 2 ( s ) + H 2 S ( g ) ⟶', '(b) Na 2 CO 3 ( a q ) + H 2 S ( g ) ⟶'],
  '(a) Ca (OH) 2 ( s ) + H 2 S ( g ) ⟶ CaS ( s ) + 2 H 2 O ( l ) ; (b) Na 2 CO 3 ( a q ) + H 2 S ( g ) ⟶ Na 2 S ( a q ) + CO 2 ( g ) + H 2 O ( l )'))));
  const question = 'Complete and balance the equation of the following reaction, which could be used to remove hydrogen sulfide from natural gas: Na₂CO₃(aq) + H₂S(g) ⟶.';
  const selfcheck = (model) => judgeKeyedUnit({ type: 'selfcheck', question, model }, units);
  assert.ok(['verbatim', 'reworded'].includes(selfcheck('Na₂CO₃(aq) + H₂S(g) ⟶ Na₂S(aq) + CO₂(g) + H₂O(l)').status), 'the source\'s own equation');
  assert.equal(selfcheck('Na₂CO₃(aq) + H₂S(g) ⟶ NaHS(aq) + NaHCO₃(aq).').status, 'diverges');
  assert.match(selfcheck('Na₂CO₃(aq) + H₂S(g) ⟶ NaHS(aq) + NaHCO₃(aq).').detail, /an equation source fs-idp89462576\(b\) does not print/);
});

/* ---- keys worked from this book's own atomic masses ----------------------- */

// Chemistry's periodic table is data/chemistry/elements.json (IUPAC's
// abridged standard atomic weights); the source's answer key was worked from
// other masses. A key is what the book's table gives (Derek, November 12,
// 2026), so it may stand a unit or two of its last place from the source's
// print — and only that far, only on an item whose form says a factor comes
// from a table, and for a formula mass only when it is the table's own sum.
test('a key a unit or two from the source’s print by its atomic masses is data-differs; farther, or graded to the digit, it is key-differs', async () => {
  const { loadElements } = await import('./elements.mjs');
  const { dataDifference, keyNumeral } = await import('../verify/verify-source-keys.mjs');
  const elements = loadElements();
  const masses = keyedUnits(cnxml(exercises(
    exercise('m1', ['Calculate the molar mass of each of the following:', '(a) S<sub>8</sub>', '(b) C<sub>5</sub>H<sub>12</sub>', '(c) Sc<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>'], '(a) 256.48 g/mol; (b) 72.150 g mol<sup>−1</sup>; (c) 378.103 g mol<sup>−1</sup>'),
    exercise('m2', ['What mass of oxygen is formed by the decomposition of 1.252 g of silver(I) oxide?'], '0.08644 g O<sub>2</sub>'),
    exercise('m3', ['What mass of zinc cyanide is produced by the reaction of 35.27 g of the silver complex?'], '10.41 g'),
  )));
  const ask = 'Calculate the molar mass of each of the following:';
  const judge = (item) => judgeKeyedUnit(item, masses, { elements });

  // The table's own sum, where the source prints the same number.
  assert.equal(judge(fillin(`${ask} S₈. Enter the molar mass in g/mol.`, '256.48', 'sig-figs:5 last-digit:1')).status, 'confirmed');
  // The table's sum one unit from the print, and two units at the coarser place (378.08 beside 378.103).
  const pentane = judge(fillin(`${ask} C₅H₁₂. Enter the molar mass in g/mol.`, '72.151', 'sig-figs:5 last-digit:1'));
  assert.deepEqual([pentane.status, pentane.sourcePrint, pentane.units], ['data-differs', '72.150', 1]);
  const scandium = judge(fillin(`${ask} Sc₂(SO₄)₃. Enter the molar mass in g/mol.`, '378.08', 'sig-figs:5 last-digit:1'));
  assert.deepEqual([scandium.status, scandium.sourcePrint, scandium.units], ['data-differs', '378.103', 2]);
  // A formula mass that is NOT the table's sum fails whatever the source prints — the source's own number included.
  const sourceKey = judge(fillin(`${ask} C₅H₁₂. Enter the molar mass in g/mol.`, '72.150', 'sig-figs:5 last-digit:1'));
  assert.equal(sourceKey.status, 'table-differs');
  assert.match(sourceKey.detail, /periodic table gives as 72\.151/);
  // ...and so does the table's value written to other places.
  assert.equal(judge(fillin(`${ask} S₈. Enter the molar mass in g/mol.`, '256.5', 'sig-figs:4 last-digit:1')).status, 'table-differs');

  // A calculation: one unit away under last-digit:1 is the data; three units is a wrong key.
  const oxygen = 'What mass of oxygen is formed by the decomposition of 1.252 g of silver(I) oxide? Enter the mass in grams.';
  assert.equal(judge(fillin(oxygen, '0.08644', 'sig-figs:4 last-digit:1')).status, 'confirmed');
  assert.equal(judge(fillin(oxygen, '0.08643', 'sig-figs:4 last-digit:1')).status, 'data-differs');
  assert.equal(judge(fillin(oxygen, '0.08647', 'sig-figs:4 last-digit:1')).status, 'key-differs');
  // No table factor declared: graded to the digit, so never the data.
  assert.equal(judge(fillin(oxygen, '0.08643', 'sig-figs:4 last-digit:0')).status, 'key-differs');
  // Another count of figures than the source prints is not the data either.
  assert.equal(judge(fillin(oxygen, '0.0864', 'sig-figs:3 last-digit:1')).status, 'key-differs');
  // Without element data (every other book) the status does not exist.
  assert.equal(judgeKeyedUnit(fillin(oxygen, '0.08643', 'sig-figs:4 last-digit:1'), masses).status, 'key-differs');

  // The distance is counted at the coarser last place, and a large value's two units are still within a tenth of a percent.
  const zinc = 'What mass of zinc cyanide is produced by the reaction of 35.27 g of the silver complex? Enter the mass in grams.';
  assert.deepEqual(judge(fillin(zinc, '10.40', 'sig-figs:4 last-digit:1')).units, 1);
  assert.equal(dataDifference(keyNumeral('199.99'), printedNumerals('199.9976 amu')).units, 1);
  assert.equal(dataDifference(keyNumeral('5.336\\times10^{22}'), printedNumerals('5.337 × 10^{22} molecules')).units, 1);
  assert.equal(dataDifference(keyNumeral('12.3'), printedNumerals('12.6 g')), null, 'three units');
  // A worked Solution prints counts beside its result; the result is the print read at the finest place.
  const glycine = printedNumerals('One mole of glycine contains 2 moles of carbon and 1 mole of nitrogen: 28.35 g glycine / 75.07 g = 0.3776 mol glycine');
  assert.deepEqual([dataDifference(keyNumeral('0.3777'), glycine).numeral.printed, dataDifference(keyNumeral('0.3777'), glycine).units], ['0.3776', 1]);
  assert.equal(dataDifference(keyNumeral('0.3777'), printedNumerals('1 mole of nitrogen')), null, 'a count the key has no figure of');
  assert.equal(dataDifference(keyNumeral('1.2'), printedNumerals('1.4 g')), null, 'two units of a two-figure number is more than a tenth of a percent and a unit');
});

test('an example that ends with two Check Your Learning items is two keyed units, and both gates require both (5.2)', () => {
  // Chemistry 2e 5.2, example fs-idp13199280, as the CNXML prints it: two
  // Check Your Learning paragraphs, each followed by its Answer note. Until
  // November 14, 2026 every reader took the first and lost the second.
  const first = 'A 248-g piece of copper is dropped into 390 mL of water at 22.6 °C. The final temperature of the water was measured as 39.9 °C. Calculate the initial temperature of the piece of copper. Assume that all heat transfer occurs between the copper and the water.';
  const second = 'A 248-g piece of copper initially at 314 °C is dropped into 390 mL of water initially at 22.6 °C. Assuming that all heat transfer occurs between the copper and the water, calculate the final temperature.';
  const module = cnxml('<example id="fs-idp13199280"><para><title>T</title>Problem.</para><para><title>Solution</title>Worked.</para>'
    + `<para><title>Check Your Learning</title>${first}</para><note><title>Answer:</title><para>The initial temperature of the copper was 335.6 °C.</para></note>`
    + `<para><title>Check Your Learning</title>${second}</para><note><title>Answer:</title><para>The final temperature (reached by both copper and water) is 38.7 °C.</para></note></example>`);
  const checks = keyedUnits(module);
  assert.deepEqual(checks.map((entry) => entry.id), ['fs-idp13199280#check', 'fs-idp13199280#check2'], 'the first keeps its id; the second is #check2');
  assert.match(checks[1].answer, /38\.7/);
  const one = fillin(`${first} Enter the temperature in degrees Celsius.`, '335.6', 'sig-figs:4 last-digit:1');
  const two = fillin(`${second} Enter the temperature in degrees Celsius.`, '38.7', 'sig-figs:3 last-digit:1');
  assert.equal(judgeKeyedUnit(one, checks).exercise.id, 'fs-idp13199280#check');
  assert.equal(judgeKeyedUnit(one, checks).status, 'confirmed');
  assert.equal(judgeKeyedUnit(two, checks).exercise.id, 'fs-idp13199280#check2');
  assert.equal(judgeKeyedUnit(two, checks).status, 'confirmed');
  assert.equal(judgeKeyedUnit({ ...two, answer: '335.6', form: 'sig-figs:4 last-digit:1' }, checks).status, 'key-differs', 'the second keyed with the first\'s answer');
  const page = (...items) => items.map((item) => `{{< fillin question="${item.question}" answer="${item.answer}" answerForm="${item.form}" hint="h" >}}\n`).join('\n');
  const statuses = (markdown) => coverage(markdown, sourceExercises(module), { keyedOnly: true }).map((verdict) => `${verdict.id} ${verdict.status}`);
  assert.deepEqual(statuses(page(one, two)), ['fs-idp13199280#check rendered', 'fs-idp13199280#check2 rendered']);
  assert.deepEqual(statuses(page(one)), ['fs-idp13199280#check rendered', 'fs-idp13199280#check2 missing'], 'a page without the second is refused');
});

test('one part asked and answered in two units: each item is held to the number under the unit its closing names, and coverage requires both (5.1)', () => {
  // Chemistry 2e 5.1, exercises fs-idm11773136 and fs-idm34686800, as the CNXML prints them.
  const module = cnxml(exercises(
    exercise('fs-idm11773136', ['Calculate the heat capacity, in joules and in calories per degree, of the following:', '(a) 45.8 g of nitrogen gas', '(b) 1.00 pound of aluminum metal'],
      '(a) 47.6 J/°C; 11.38 cal °C<sup>−1</sup> (b) 407 J/°C; 97.3 cal °C<sup>−1</sup>'),
    exercise('fs-idm34686800', ['How much heat, in joules and in calories, is required to heat a 28.4-g (1-oz) ice cube from −23.0 °C to −1.0 °C?'], '1310 J; 313 cal'),
  ));
  const parts = keyedUnits(module);
  const ice = 'How much heat, in joules and in calories, is required to heat a 28.4-g (1-oz) ice cube from −23.0 °C to −1.0 °C?';
  const judge = (question, answer, form = 'sig-figs:3 last-digit:1') => judgeKeyedUnit(fillin(question, answer, form), parts).status;
  assert.equal(judge(`${ice} Enter the heat in joules.`, '1310'), 'confirmed');
  assert.equal(judge(`${ice} Enter the heat in calories.`, '313'), 'confirmed');
  assert.equal(judge(`${ice} Enter the heat in joules.`, '313'), 'key-differs', 'the calories under "in joules"');
  assert.equal(judge(`${ice} Enter the heat in calories.`, '1310'), 'key-differs', 'the joules under "in calories"');
  assert.equal(judge(ice, '1310'), 'key-differs', 'a closing that names neither unit');
  const lead = 'Calculate the heat capacity, in joules and in calories per degree, of the following: 45.8 g of nitrogen gas.';
  assert.equal(judge(`${lead} Enter the heat capacity in J/°C.`, '47.6'), 'confirmed');
  assert.equal(judge(`${lead} Enter the heat capacity in cal/°C.`, '11.38', 'sig-figs:4 last-digit:1'), 'confirmed');
  assert.equal(judge(`${lead} Enter the heat capacity in cal/°C.`, '47.6'), 'key-differs');
  assert.equal(judge(`${lead} Enter the heat capacity in J/°C.`, '407'), 'key-differs', 'part (b)\'s joules under part (a)');
  // One value written twice under a stem that asks it once is either number (10.3's "41,360 J/mol or 41.4 kJ/mol").
  const once = keyedUnits(cnxml(exercises(exercise('x1', ['What is the enthalpy of vaporization of water?'], '41,360 J/mol or 41.4 kJ/mol'))));
  assert.equal(judgeKeyedUnit(fillin('What is the enthalpy of vaporization of water? Enter it in kJ/mol.', '41.4', 'sig-figs:3 last-digit:1'), once).status, 'confirmed');
  // Coverage: the part is rendered only when each unit has its item.
  const item = (question, answer) => `{{< fillin question="${question}" answer="${answer}" answerForm="sig-figs:3 last-digit:1" hint="h" >}}\n`;
  const status = (markdown, id) => coverage(markdown, sourceExercises(module), { keyedOnly: true }).find((verdict) => verdict.id === id);
  const both = [item(`${ice} Enter the heat in joules.`, '1310'), item(`${ice} Enter the heat in calories.`, '313')].join('\n');
  assert.equal(status(both, 'fs-idm34686800').status, 'rendered');
  const one = status(item(`${ice} Enter the heat in joules.`, '1310'), 'fs-idm34686800');
  assert.equal(one.status, 'missing');
  assert.match(one.detail, /no item for it closes naming cal/);
  assert.equal(status(item(ice, '1310'), 'fs-idm34686800').status, 'missing', 'one item naming no unit');
  const capacity = [item(`${lead} Enter the heat capacity in J/°C.`, '47.6'), item(`${lead} Enter the heat capacity in cal/°C.`, '11.38')].join('\n');
  assert.equal(status(capacity, 'fs-idm11773136(a)').status, 'rendered');
  assert.equal(status(item(`${lead} Enter the heat capacity in J/°C.`, '47.6'), 'fs-idm11773136(a)').status, 'missing');
});

test('an answer that prints a thermochemical equation and its ΔH under a stem that asks a number is one fill-in (5.3)', () => {
  const stem = 'Hydrogen gas, H₂, reacts explosively with gaseous chlorine, Cl₂, to form hydrogen chloride, HCl(g). What is the enthalpy change for the reaction of 1 mole of H₂(g) with 1 mole of Cl₂(g) if both the reactants and products are at standard state conditions? The standard enthalpy of formation of HCl(g) is −92.3 kJ/mol.';
  const module = cnxml(example('fs-idp167759616', stem, 'For the reaction H<sub>2</sub>(<emphasis effect="italics">g</emphasis>) + Cl<sub>2</sub>(<emphasis effect="italics">g</emphasis>) ⟶ 2HCl(<emphasis effect="italics">g</emphasis>) ΔH° = −184.6 kJ'));
  const checks = keyedUnits(module);
  const page = `${stem.replace('H₂(g) with', '$\\\\ce{H2(g)}$ with')} Enter the enthalpy change in kilojoules.`;
  assert.equal(judgeKeyedUnit(fillin(page, '-184.6', 'sig-figs:4 last-digit:0'), checks).status, 'confirmed');
  assert.equal(judgeKeyedUnit(fillin(page, '-92.3', 'sig-figs:3 last-digit:0'), checks).status, 'key-differs', 'the stem\'s own −92.3 is not the key');
  const markdown = `{{< fillin question="${page.replace(/\\/g, '\\\\')}" answer="-184.6" answerForm="sig-figs:4 last-digit:0" hint="h" >}}\n`;
  assert.deepEqual(coverage(markdown, sourceExercises(module), { keyedOnly: true }).map((verdict) => verdict.status), ['rendered']);
  // The shapes tool reads it as a number under this stem, and flags it as two items under one that asks the equation.
  assert.deepEqual(shapeOf(checks[0].answer, stem).shape, 'number');
  assert.match(shapeOf(checks[0].answer, stem).component, /fillin keyed -184\.6/);
  assert.match(shapeOf(checks[0].answer, 'Write the thermochemical equation for the reaction.').flag, /a thermochemical equation and its ΔH/);
});

test('a Check Your Learning whose reactions are display equations reads them as its stem (5.3, Hess\'s law)', () => {
  // Chemistry 2e 5.3, example fs-idp185548816's Check Your Learning: the
  // three reactions are <equation>s between the paragraphs, and an unkeyed
  // exercise (fs-idp149472576(a)) prints one of them. Read without them, the
  // stem was "Calculate ΔH for the process: from the following information:"
  // and the page's item was refused as that unkeyed exercise.
  const eq = (id, text) => `<equation id="${id}" class="unnumbered">${text}</equation>`;
  const module = cnxml(exercises(
    exercise('fs-idp149472576', ['Using the data in Appendix G, calculate the standard enthalpy change for each of the following reactions:', '(a) N<sub>2</sub>(g) + O<sub>2</sub>(g) ⟶ 2NO(g)', '(b) Si(s) + 2Cl<sub>2</sub>(g) ⟶ SiCl<sub>4</sub>(g)']),
  ) + '<example id="fs-idp185548816"><para><title>T</title>Problem.</para><para><title>Solution</title>Worked.</para>'
    + '<para><title>Check Your Learning</title>Calculate ΔH for the process:</para>' + eq('e1', 'N<sub>2</sub>(g) + 2O<sub>2</sub>(g) ⟶ 2NO<sub>2</sub>(g)')
    + '<para>from the following information:</para>' + eq('e2', 'N<sub>2</sub>(g) + O<sub>2</sub>(g) ⟶ 2NO(g) ΔH = 180.5 kJ') + eq('e3', 'NO(g) + 1/2O<sub>2</sub>(g) ⟶ NO<sub>2</sub>(g) ΔH = −57.06 kJ')
    + '<note><title>Answer:</title><para>66.4 kJ</para></note></example>');
  const units = keyedUnits(module);
  assert.match(units.find((entry) => entry.id === 'fs-idp185548816#check').stem, /180\.5 kJ/);
  const item = fillin('Calculate $\\Delta H$ for the process: $\\ce{N2(g) + 2O2(g) -> 2NO2(g)}$ from the following information: $\\ce{N2(g) + O2(g) -> 2NO(g)}$ $\\Delta H$ = 180.5 kJ; $\\ce{NO(g) + 1/2O2(g) -> NO2(g)}$ $\\Delta H$ = −57.06 kJ. Enter the enthalpy change in kilojoules.', '66.4', 'sig-figs:3 last-digit:0');
  const verdict = judgeKeyedUnit(item, units);
  assert.equal(verdict.exercise.id, 'fs-idp185548816#check');
  assert.equal(verdict.status, 'confirmed');
  assert.equal(judgeKeyedUnit({ ...item, answer: '180.5', form: 'sig-figs:4 last-digit:0' }, units).status, 'key-differs', 'a ΔH the stem gives is not the key');
});

test('a stem that names another section\'s example or exercise and restates its data is read as its own exercise (5.3, printed 39, 41, 43)', () => {
  // Chemistry 2e 5.3's three exercises as the CNXML prints them (their links
  // to 5.2's examples and exercise carry no text), and the three stems as
  // content/…/05-thermochemistry/03-enthalpy.md carries them under chapter 5's
  // run-facts decision 6: the reference named and linked, the given data
  // restated in "(In that example, …)", an "Enter …" sentence. Until November
  // 14, 2026 the added words left each under the match floor, and its key was
  // never compared.
  const link = (target) => `<link target-id="${target}" document="m68726"/>`;
  const module = cnxml(exercises(
    exercise('fs-idp167492016', [`Explain how the heat measured in ${link('fs-idm7765')} differs from the enthalpy change for the exothermic reaction described by the following equation:`, 'HCl(<emphasis effect="italics">aq</emphasis>) + NaOH(<emphasis effect="italics">aq</emphasis>) ⟶ NaCl(<emphasis effect="italics">aq</emphasis>) + H<sub>2</sub>O(<emphasis effect="italics">l</emphasis>)'],
      'The enthalpy change of the indicated reaction is for exactly 1 mol HCL and 1 mol NaOH; the heat in the example is produced by 0.0500 mol HCl and 0.0500 mol NaOH.'),
    exercise('fs-idp146867872', [`Calculate the enthalpy of solution (Δ<emphasis effect="italics">H</emphasis> for the dissolution) per mole of NH<sub>4</sub>NO<sub>3</sub> under the conditions described in ${link('fs-idp325184')}.`], '25 kJ mol<sup>−1</sup>'),
    exercise('fs-idp107667280', [`Calculate the enthalpy of solution (Δ<emphasis effect="italics">H</emphasis> for the dissolution) per mole of CaCl<sub>2</sub> (refer to ${link('fs-idm68277040')}).`], '81 kJ mol<sup>−1</sup>'),
  ));
  const units = keyedUnits(module);
  const ice = 'Calculate the enthalpy of solution ($\\Delta H$ for the dissolution) per mole of NH₄NO₃ under the conditions described in the example “Heat Flow in an Instant Ice Pack” in [Section 5.2](../02-calorimetry/). (In that example, 3.21 g of solid NH₄NO₃ dissolves in 50.0 g of water at 24.9 °C in a calorimeter, the temperature decreases to 20.3 °C, and the specific heat of the solution is taken to be that of water, 4.184 J/g °C.) Enter the enthalpy of solution in kJ/mol.';
  const chloride = 'Calculate the enthalpy of solution ($\\Delta H$ for the dissolution) per mole of CaCl₂ (refer to the calcium chloride calorimetry exercise in [Section 5.2](../02-calorimetry/)). (In that exercise, 3.0 g of CaCl₂(*s*) dissolves in 150.0 g of water in a calorimeter at 22.4 °C, the temperature rises to 25.8 °C, and the specific heat of the resulting solution is 4.18 J/g °C.) Enter the enthalpy of solution in kJ/mol.';
  const heat = 'Explain how the heat measured in the example “Heat Produced by an Exothermic Reaction” in [Section 5.2](../02-calorimetry/) differs from the enthalpy change for the exothermic reaction described by the following equation: $\\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)}$. (In that example, 50.0 mL of 1.00 *M* HCl(*aq*) and 50.0 mL of 1.00 *M* NaOH(*aq*), both at 22.0 °C, are added to a coffee cup calorimeter, and the temperature of the mixture reaches a maximum of 28.9 °C.)';
  const judged = (question, answer) => judgeKeyedUnit(fillin(question, answer, 'sig-figs:2 last-digit:0'), units);
  assert.equal(judged(ice, '25').exercise.id, 'fs-idp146867872');
  assert.equal(judged(ice, '25').status, 'confirmed');
  assert.equal(judged(ice, '81').status, 'key-differs', 'its sibling\'s key is refused: the key is now compared');
  assert.equal(judged(chloride, '81').exercise.id, 'fs-idp107667280');
  assert.equal(judged(chloride, '81').status, 'confirmed');
  assert.equal(judged(chloride, '25').status, 'key-differs');
  const explain = judgeKeyedUnit({ type: 'selfcheck', question: heat, model: 'The enthalpy change of the indicated reaction is for exactly 1 mol HCL and 1 mol NaOH; the heat in the example is produced by 0.0500 mol HCl and 0.0500 mol NaOH.' }, units);
  assert.equal(explain.exercise.id, 'fs-idp167492016');
  assert.equal(explain.status, 'verbatim');
  // Read so only where the question names another section's example or exercise.
  assert.equal(withoutCrossReference('Calculate the enthalpy of solution. Enter it in kJ/mol.'), null);
  // Coverage: each its own item.
  const page = [ice, chloride].map((question, at) => `{{< fillin question="${question.replace(/\\/g, '\\\\')}" answer="${['25', '81'][at]}" answerForm="sig-figs:2 last-digit:0" hint="h" >}}\n`).join('\n')
    + `\n{{< selfcheck question="${heat.replace(/\\/g, '\\\\')}" hint="h" >}}\nModel.\n{{< /selfcheck >}}\n`;
  const verdicts = coverage(page, sourceExercises(module), { keyedOnly: true });
  assert.deepEqual(verdicts.map((verdict) => `${verdict.id} ${verdict.status} ${verdict.line}`), ['fs-idp167492016 rendered 5', 'fs-idp146867872 rendered 1', 'fs-idp107667280 rendered 3']);
});

// ---- Chemistry chapter 6 (November 15, 2026) -------------------------------

const em = (letter) => `<emphasis effect="italics">${letter}</emphasis>`;
/** A configuration as the CNXML prints it: 1<em>s</em><sup>2</sup>2<em>s</em><sup>2</sup>… */
const printedConfiguration = (spaced) => spaced.split(' ').map((token) => token.replace(/^(\d)([spdf])(\d+)$/, (_, n, l, count) => `${n}${em(l)}<sup>${count}</sup>`)).join('');
// The source's spin: ½ in MathML, unsigned, with the separator inside the math (6.3, fs-idm139949520).
const HALF = (mark) => `<m:math><m:mrow><m:mspace width="0.2em"/><m:mfrac><m:mn>1</m:mn><m:mn>2</m:mn></m:mfrac><m:mo>${mark}</m:mo></m:mrow></m:math>`;
const CH6 = cnxml(
  example('q1', `Identify the subshell in which electrons with the following quantum numbers are found: (a) ${em('n')} = 3, ${em('l')} = 1; (b) ${em('n')} = 5, ${em('l')} = 3.`, `(a) 3${em('p')} (b) 5${em('f')}`)
  + example('q2', `If a shell contains a maximum of 32 electrons, what is the principal quantum number, ${em('n')}?`, `${em('n')} = 4`)
  + example('q3', `How many orbitals have ${em('l')} = 2 and ${em('n')} = 3?`, `The five degenerate 3${em('d')} orbitals`)
  + example('q4', `Which ion with a +2 charge has the electron configuration ${printedConfiguration('1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d5')}? Which ion with a +3 charge has this configuration?`, 'Tc<sup>2+</sup>, Ru<sup>3+</sup>')
  + exercises(
    exercise('c4', [`Using complete subshell notation (${printedConfiguration('1s2 2s2 2p6')}, and so forth), predict the electron configuration of each of the following atoms:`, '(a) N', '(b) Fe'],
      `(a) ${printedConfiguration('1s2 2s2 2p3')}; (b) ${printedConfiguration('1s2 2s2 2p6 3s2 3p6 4s2 3d6')}`),
    exercise('c20', ['Cobalt–60 and iodine–131 are radioactive isotopes commonly used in nuclear medicine. How many protons, neutrons, and electrons are in atoms of these isotopes? Write the complete electron configuration for each isotope.'],
      `Co has 27 protons, 27 electrons, and 33 neutrons: ${printedConfiguration('1s2 2s2 2p6 3s2 3p6 4s2 3d7')}. I has 53 protons, 53 electrons, and 78 neutrons: ${printedConfiguration('1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p5')}.`),
    exercise('c14', ['Which of the following has two unpaired electrons?', '(a) Mg', '(b) Si', '(c) S', '(d) Both Mg and S', '(e) Both Si and S.'], 'Although both (b) and (c) are correct, (e) encompasses both and is the best answer.'),
    exercise('c8', ['Use an orbital diagram to describe the electron configuration of the valence shell of each of the following atoms:', '(a) N', '(b) Si'],
      '(a) <media alt="N"><image src="../../media/Diagram_a.jpg"/></media> (b) <media alt="Si"><image src="../../media/Diagram_b.jpg"/></media>'),
    exercise('o11', ['Consider the orbitals shown here in outline.', '(a) What is the maximum number of electrons contained in an orbital of type (x)? Of type (y)? Of type (z)?', '(b) How many orbitals of type (x) are found in a shell with n = 2? How many of type (y)? How many of type (z)?', '(c) Write a set of quantum numbers for an electron in an orbital of type (x) in a shell with n = 4. Of an orbital of type (y) in a shell with n = 2. Of an orbital of type (z) in a shell with n = 3.'],
      `(a) x. 2, y. 2, z. 2; (b) x. 1, y. 3, z. 0; (c) x. 4 0 0 ${HALF(',')} y. 2 1 0 ${HALF(',')} z. 3 2 0 ${HALF(';')}`),
    exercise('r5', ['Based on their positions in the periodic table, rank the following atoms in order of increasing first ionization energy: F, Li, N, Rb'], 'Rb &lt; Li &lt; N &lt; F'),
    exercise('r11', ['Based on their positions in the periodic table, list the following ions in order of increasing radius: K<sup>+</sup>, Ca<sup>2+</sup>, Al<sup>3+</sup>, Si<sup>4+</sup>.'], 'Si<sup>4+</sup> &lt; Al<sup>3+</sup> &lt; Ca<sup>2+</sup> &lt; K<sup>+</sup>'),
    exercise('g7', [`Atoms of which group in the periodic table have a valence shell electron configuration of ${em('ns')}<sup>2</sup>${em('np')}<sup>3</sup>?`], '15 (5A)'),
    exercise('i13', ['Which atom and/or ion is (are) isoelectronic with Br<sup>+</sup>: Se<sup>2+</sup>, Se, As<sup>–</sup>, Kr, Ga<sup>3+</sup>, Cl<sup>–</sup>?'], 'Se, As<sup>−</sup>'),
    exercise('i14', ['Which of the following atoms and ions is (are) isoelectronic with S<sup>2+</sup>: Si<sup>4+</sup>, Cl<sup>3+</sup>, Ar, As<sup>3+</sup>, Si, Al<sup>3+</sup>?'], null),
    exercise('e17', ['Of the five elements Sn, Si, Sb, O, Te, which has the most endothermic reaction? (E represents an atom.) What name is given to the energy for the reaction?'], 'O, IE<sub>1</sub>'),
  )
  + '<para>The first ionization energy (IE<sub>1</sub>) of each element.</para>',
);

test('chapter 6\'s shapes read as units: a closed set chosen by letter, image parts, a subshell folded as the source prints it', () => {
  const units = keyedUnits(CH6);
  const closed = units.find((unit) => unit.group === 'c14');
  assert.equal(closed.chosen, 'e', '"(e) … is the best answer" chooses (e), not the (b) and (c) it also names');
  assert.equal(units.filter((unit) => unit.group === 'c14').length, 1);
  // "(a) (b)" with images between: parts with drawings, not a list of names.
  const drawn = units.filter((unit) => unit.group === 'c8');
  assert.deepEqual(drawn.map((unit) => [unit.answer, unit.answerMedia]), [['', ['Diagram_a']], ['', ['Diagram_b']]]);
  assert.equal(plain('1s²2s²2p⁶ and the 3d orbitals'), plain('1 s 2 2 s 2 2 p 6 and the 3 d orbitals'));
});

test('chapter 6\'s keys: configurations, orderings, subshells, counts, members, choices, and a name the module abbreviates', async () => {
  const { chosenLetter, listMembers, printedAbbreviations } = await import('./keyed-units.mjs');
  const units = keyedUnits(CH6);
  const abbreviations = printedAbbreviations(CH6);
  assert.deepEqual(abbreviations, [['first ionization energy', 'IE1']]);
  assert.equal(chosenLetter('Although both (b) and (c) are correct, (e) encompasses both and is the best answer.'), 'e');
  assert.deepEqual(listMembers('Which atom and/or ion is (are) isoelectronic with Br + : Se 2+ , Se, As – , Kr, Ga 3+ , Cl – ?'), ['Se 2+', 'Se', 'As –', 'Kr', 'Ga 3+', 'Cl –']);
  const judge = (item) => judgeKeyedUnit(item, units, { abbreviations })?.status;
  const textin = (question, answer, form = '', accept = '') => judge({ type: 'textin', question, answer, form, accept });
  const fillin = (question, answer) => judge({ type: 'fillin', question, answer, form: 'whole-number' });
  const TYPE = 'Type each subshell followed by its number of electrons, with a space between subshells.';
  const LEAD = 'Using complete subshell notation (1s²2s²2p⁶, and so forth), predict the electron configuration of the following atom:';
  // A: the source's spaced print and the key's Unicode, in either order of subshells.
  assert.equal(textin(`${LEAD} Fe. ${TYPE}`, '1s²2s²2p⁶3s²3p⁶4s²3d⁶', 'configuration'), 'confirmed');
  assert.equal(textin(`${LEAD} Fe. ${TYPE}`, '1s²2s²2p⁶3s²3p⁶3d⁶4s²', 'configuration'), 'confirmed');
  assert.equal(textin(`${LEAD} Fe. ${TYPE}`, '1s²2s²2p⁶3s²3p⁶4s²3d⁷', 'configuration'), 'key-differs');
  assert.equal(textin(`${LEAD} Fe. ${TYPE}`, '[Ar]4s²3d⁶', 'configuration'), 'key-differs', 'a core the source does not print');
  // …and each isotope's held to its own sentence by the element the closing names.
  const ISO = 'Cobalt–60 and iodine–131 are radioactive isotopes commonly used in nuclear medicine. How many protons, neutrons, and electrons are in atoms of these isotopes? Write the complete electron configuration for each isotope.';
  const COBALT = '1s²2s²2p⁶3s²3p⁶4s²3d⁷';
  const IODINE = '1s²2s²2p⁶3s²3p⁶3d¹⁰4s²4p⁶4d¹⁰5s²5p⁵';
  assert.equal(textin(`${ISO} Enter the electron configuration of cobalt-60. ${TYPE}`, COBALT, 'configuration'), 'confirmed');
  assert.equal(textin(`${ISO} Enter the electron configuration of iodine-131. ${TYPE}`, IODINE, 'configuration'), 'confirmed');
  assert.equal(textin(`${ISO} Enter the electron configuration of cobalt-60. ${TYPE}`, IODINE, 'configuration'), 'key-differs');
  assert.equal(fillin(`${ISO} Enter the number of neutrons in an atom of iodine-131.`, '78'), 'confirmed');
  assert.equal(fillin(`${ISO} Enter the number of neutrons in an atom of iodine-131.`, '33'), 'key-differs', 'cobalt\'s neutrons');
  // B: an ordering, by its members and their order.
  const ORDER = 'Type the symbols in the order you rank them, separated by <.';
  const RANK = 'Based on their positions in the periodic table, rank the following atoms in order of increasing first ionization energy: F, Li, N, Rb.';
  assert.equal(textin(`${RANK} ${ORDER}`, 'Rb < Li < N < F', 'ordering'), 'confirmed');
  assert.equal(textin(`${RANK} ${ORDER}`, 'F < N < Li < Rb', 'ordering'), 'key-differs');
  const IONS = 'Based on their positions in the periodic table, list the following ions in order of increasing radius: K⁺, Ca²⁺, Al³⁺, Si⁴⁺.';
  assert.equal(textin(`${IONS} ${ORDER}`, 'Si⁴⁺ < Al³⁺ < Ca²⁺ < K⁺', 'ordering'), 'confirmed');
  assert.equal(textin(`${IONS} ${ORDER}`, 'Al³⁺ < Si⁴⁺ < Ca²⁺ < K⁺', 'ordering'), 'key-differs');
  // C1: a subshell is a word, folded as the source spaces it.
  const SUB = 'Identify the subshell in which electrons with the following quantum numbers are found: n = 3, l = 1. Enter the subshell.';
  assert.equal(textin(SUB, '3p'), 'confirmed');
  assert.equal(textin(SUB, '3s'), 'key-differs');
  // C2: one count per label, held to the label the closing names.
  const ORB = 'Consider the orbitals shown here in outline. How many orbitals of type (x) are found in a shell with n = 2? How many of type (y)? How many of type (z)?';
  assert.equal(fillin(`${ORB} Enter the number of orbitals of type (y).`, '3'), 'confirmed');
  assert.equal(fillin(`${ORB} Enter the number of orbitals of type (z).`, '3'), 'key-differs', 'the y count under the z item');
  assert.equal(fillin(ORB, '3'), 'key-differs', 'a closing that names no label');
  // C2a: a set of quantum numbers per label (6.3's part (c), the spin printed ½ in MathML), held to
  // the label the closing names; the key is the source's set, not another possible one.
  const SETS = 'Consider the orbitals shown here in outline. Write a set of quantum numbers for an electron in an orbital of type (x) in a shell with n = 4. Of an orbital of type (y) in a shell with n = 2. Of an orbital of type (z) in a shell with n = 3.';
  const QN = 'Type the four values in the order n, l, mₗ, mₛ, separated by spaces.';
  const set = (type, key) => textin(`${SETS} Enter the set for the orbital of type (${type}) shown in the figure above. ${QN}`, key, 'quantum-numbers');
  assert.equal(set('x', '4 0 0 +1/2'), 'confirmed');
  assert.equal(set('y', '2 1 0 +1/2'), 'confirmed');
  assert.equal(set('z', '3 2 0 +1/2'), 'confirmed');
  assert.equal(set('y', '4 0 0 +1/2'), 'key-differs', 'the (x) set under the (y) item');
  assert.equal(set('y', '2 1 −1 +1/2'), 'key-differs', 'another possible set is not the source\'s');
  assert.equal(set('z', '3 2 0 −1/2'), 'key-differs', 'the other spin is not the source\'s');
  assert.equal(textin(`${SETS} ${QN}`, '4 0 0 +1/2', 'quantum-numbers'), 'key-differs', 'a closing that names no label');
  // C3, C4: a count beside labels that are no numbers.
  assert.equal(fillin('If a shell contains a maximum of 32 electrons, what is the principal quantum number, n?', '4'), 'confirmed');
  assert.equal(fillin('How many orbitals have l = 2 and n = 3?', '5'), 'confirmed');
  assert.equal(fillin('How many orbitals have l = 2 and n = 3?', '3'), 'key-differs', 'the 3 of "3d" is no count');
  assert.equal(fillin('Atoms of which group in the periodic table have a valence shell electron configuration of ns²np³? Enter the group number.', '15'), 'confirmed');
  assert.equal(fillin('Atoms of which group in the periodic table have a valence shell electron configuration of ns²np³? Enter the group number.', '5'), 'key-differs', '"(5A)" is a label');
  // C5: one multiple choice whose options are the lettered parts, keyed by the letter the answer chooses.
  const OPTIONS = ['Mg', 'Si', 'S', 'Both Mg and S', 'Both Si and S'];
  assert.equal(judge({ type: 'multiplechoice', question: 'Which of the following has two unpaired electrons?', options: OPTIONS, answer: 'Both Si and S' }), 'confirmed');
  assert.equal(judge({ type: 'multiplechoice', question: 'Which of the following has two unpaired electrons?', options: OPTIONS, answer: 'Si' }), 'key-differs');
  // C6: yes or no to each member of the stem's list.
  const member = (who, answer) => judge({ type: 'multiplechoice', question: `Is the following atom or ion isoelectronic with Br⁺? ${who}`, options: ['yes', 'no'], answer });
  assert.deepEqual(['Se²⁺', 'Se', 'As⁻', 'Kr', 'Ga³⁺', 'Cl⁻'].map((who) => member(who, ['Se', 'As⁻'].includes(who) ? 'yes' : 'no')), Array(6).fill('confirmed'));
  assert.equal(member('Kr', 'yes'), 'key-differs');
  assert.equal(member('As⁻', 'no'), 'key-differs');
  // C8: a formula, and the name the module abbreviates as the answer prints it.
  const ENDO = 'Of the five elements Sn, Si, Sb, O, Te, which has the most endothermic reaction? (E represents an atom.) What name is given to the energy for the reaction?';
  assert.equal(textin(`${ENDO} Enter the element’s symbol.`, 'O', 'formula'), 'confirmed');
  assert.equal(textin(`${ENDO} Enter the name of the energy.`, 'first ionization energy', '', 'IE1'), 'confirmed');
  assert.equal(textin(`${ENDO} Enter the name of the energy.`, 'second ionization energy', '', 'IE2'), 'key-differs');
  // C9: two ions told apart by the charge the closing names.
  const TC = 'Which ion with a +2 charge has the electron configuration 1s²2s²2p⁶3s²3p⁶4s²3d¹⁰4p⁶4d⁵? Which ion with a +3 charge has this configuration?';
  assert.equal(textin(`${TC} Enter the symbol of the ion with a +2 charge.`, 'Tc²⁺', 'formula'), 'confirmed');
  assert.equal(textin(`${TC} Enter the symbol of the ion with a +3 charge.`, 'Ru³⁺', 'formula'), 'confirmed');
  assert.equal(textin(`${TC} Enter the symbol of the ion with a +2 charge.`, 'Ru³⁺', 'formula'), 'key-differs');
  // C10: an image part's selfcheck shows its own drawing.
  const drawing = (who, file) => judge({ type: 'selfcheck', question: `Use an orbital diagram to describe the electron configuration of the valence shell of the following atom: ${who}.`, model: 'The diagram.', figures: [file] });
  assert.equal(drawing('Si', 'Diagram_b'), 'confirmed');
  assert.equal(drawing('Si', 'Diagram_a'), 'key-differs');
});

test('chapter 6\'s shapes, as chemistry-shapes reads them', () => {
  assert.equal(shapeOf('1 s^{2} 2 s^{2} 2 p^{3}').shape, 'configuration');
  assert.equal(shapeOf('Rb < Li < N < F').shape, 'ordering');
  assert.match(shapeOf('x. 4 0 0 ( 1 )/( 2 ) , y. 2 1 0 ( 1 )/( 2 ) , z. 3 2 0 ( 1 )/( 2 )').component, /one textin answerForm="quantum-numbers" per label \(\(x\), \(y\), \(z\)\)/);
  assert.equal(shapeOf('4 0 0 ( 1 )/( 2 )').shape, 'quantum-numbers');
  assert.match(shapeOf('n l m _l s 4 0 0 + ( 1 )/( 2 ) 4 0 0 − ( 1 )/( 2 ) 4 1 −1 + ( 1 )/( 2 )').component, /^selfcheck in the sample-answer form/);
  assert.deepEqual(shapeOf('2 p'), { shape: 'subshell', component: 'textin keyed 2p' });
  assert.match(shapeOf('x. 2, y. 2, z. 2').component, /one whole-number fillin per label \(\(x\), \(y\), \(z\)\)/);
  assert.equal(shapeOf('n = 4').key, 4);
  assert.equal(shapeOf('The five degenerate 3 d orbitals').key, 5);
  assert.equal(shapeOf('15 (5A)').shape, 'number');
  assert.match(shapeOf('Se, As^{−}', 'Which atom and/or ion is (are) isoelectronic with Br + : Se 2+ , Se, As – , Kr, Ga 3+ , Cl – ?').component, /yes or no\) per member/);
  assert.match(shapeOf('Ne or He').component, /keyed with the first, the others in accept/);
  assert.match(shapeOf('O, IE _1').component, /quantity's name, its symbol in accept/);
  assert.match(shapeOf('Co has 27 protons, 27 electrons, and 33 neutrons: 1 s^{2} 2 s^{2} 2 p^{6} 3 s^{2} 3 p^{6} 4 s^{2} 3 d^{7} . I has 53 protons, 53 electrons, and 78 neutrons: 1 s^{2} 2 s^{2} 2 p^{6} 3 s^{2} 3 p^{6} 3 d^{10} 4 s^{2} 4 p^{6} 4 d^{10} 5 s^{2} 5 p^{5}').component, /per configuration \(2\), and one whole-number fillin per count/);
  assert.match(shapeOf('3.233 × 10^{−19} J; 2.018 eV').component, /one fillin per quantity \(2\)/);
  assert.match(shapeOf('5.49 × 10^{14} s^{−1} ; no').component, /then a multiplechoice \(yes or no\)/);
  assert.equal(shapeOf('For example, Na^{+} : 1 s^{2} 2 s^{2} 2 p^{6} ; Ca^{2+} : 1 s^{2} 2 s^{2} 2 p^{6} 3 s^{2} 3 p^{6}').shape, 'sentence', 'an example answer varies');
});

test('chapter 6\'s landed pages: a configuration part is not read as a whole exercise, a datum part restated per line, and the word of a multi-quantity answer (6.1, 6.4)', () => {
  const sup = (spaced) => spaced.split(' ').map((token) => token.replace(/^(\d)([spdf])(\d+)$/, (_, n, l, count) => `${n}${em(l)}<sup>${count}</sup>`)).join('');
  const xml = cnxml(
    example('k1', `Identify the atoms from the electron configurations given: (a) [Ar]${sup('4s2 3d5')} (b) [Kr]${sup('5s2 4d10 5p6')}`, '(a) Mn (b) Xe')
    + exercises(
      exercise('z10', [`Which atom has the electron configuration ${sup('1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d2')}?`], 'Zr'),
      exercise('cs', ['The emission spectrum of cesium contains two lines whose frequencies are (a) 3.45 × 10<sup>14</sup> Hz and (b) 6.53 × 10<sup>14</sup> Hz. What are the wavelengths and energies per photon of the two lines? What color are the lines?'],
        '(a) λ = 8.69 × 10<sup>−7</sup> m; E = 2.29 × 10<sup>−19</sup> J; (b) λ = 4.59 × 10<sup>−7</sup> m; E = 4.33 × 10<sup>−19</sup> J; The color of (a) is red; (b) is blue.'),
      exercise('ls', ['A photon of light produced by a surgical laser has an energy of 3.027 × 10<sup>−19</sup> J. Calculate the frequency and wavelength of the photon. What is the total energy in 1 mole of photons? What is the color of the emitted light?'],
        'ν = 4.568 × 10<sup>14</sup> s<sup>−1</sup>; λ = 656.3 nm; Energy mol<sup>−1</sup> = 1.823 × 10<sup>5</sup> J mol<sup>−1</sup>; red'),
    ),
  );
  const units = keyedUnits(xml);
  const judge = (item) => judgeKeyedUnit(item, units);
  // 1. The part printed verbatim outranks a whole exercise read through `plain` (the Zr exercise shares "5s²4d").
  const xenon = judge({ type: 'textin', question: 'Identify the atom from the electron configuration given: [Kr]5s²4d¹⁰5p⁶. Enter the element’s symbol.', answer: 'Xe', form: 'formula' });
  assert.deepEqual([xenon.status, xenon.exercise.id], ['confirmed', 'k1#check(b)']);
  // 2. A datum part restated per line, in the singular.
  const line = (frequency, closing) => `The emission spectrum of cesium contains a line whose frequency is $${frequency} \\times 10^{14}$ Hz. What are the wavelength and energy per photon of the line? What color is the line?${closing}`;
  assert.equal(unitFor(line('3.45', ' Enter the wavelength in meters.'), units, { type: 'fillin' }).id, 'cs(a)');
  assert.equal(unitFor(line('6.53', ' Enter the wavelength in meters.'), units, { type: 'fillin' }).id, 'cs(b)');
  assert.equal(judge({ type: 'fillin', question: line('6.53', ' Enter the wavelength in meters.'), answer: '8.69\\times10^{-7}', form: '' }).status, 'key-differs');
  const page = ['3.45', '6.53'].map((frequency) => `{{< fillin question="${line(frequency, ' Enter the wavelength in meters.')}" answer="1" hint="h" >}}\n`).join('\n');
  const covered = coverage(page, sourceExercises(xml), { keyedOnly: true }).filter((verdict) => verdict.id.startsWith('cs('));
  assert.deepEqual(covered.map((verdict) => verdict.status), ['rendered', 'rendered']);
  // A formula's subscript is no datum: 2.6's "MgCl₂" part was read as one.
  assert.equal(dataRun('3.45 × 10 14 Hz and'), '3 45 10 14');
  assert.equal(dataRun('MgCl 2'), null);
  // 3. A selfcheck that carries the one word of a multi-quantity answer, held to its own part's word.
  const colour = (question, model) => judge({ type: 'selfcheck', question, model, figures: [] }).status;
  const LASER = 'A photon of light produced by a surgical laser has an energy of $3.027 \\times 10^{-19}$ J. Calculate the frequency and wavelength of the photon. What is the total energy in 1 mole of photons? What is the color of the emitted light?';
  assert.equal(colour(LASER, 'The color of the emitted light is red.'), 'reworded');
  assert.equal(colour(LASER, 'The color of the emitted light is blue.'), 'diverges');
  assert.equal(colour(line('3.45', ''), 'The color of the line is red.'), 'reworded', '(a)\'s colour, printed in (b)\'s segment');
  assert.equal(colour(line('3.45', ''), 'The color of the line is blue.'), 'diverges');
  assert.equal(colour(line('6.53', ''), 'The color of the line is blue.'), 'reworded');
  assert.equal(colour(line('6.53', ''), 'The color of the line is red.'), 'key-differs', 'the sibling\'s colour');
});

/* ---- chapter 7 (probed November 15, 2026, before the wave) ---------------- */

const config7 = (spaced) => spaced.split(' ').map((token) => token.replace(/^(\d)([spdf])(\d+)$/, (_, n, l, count) => `${n}${em(l)}<sup>${count}</sup>`)).join('');
const CH7 = cnxml(
  example('k7', 'Potassium and magnesium are required in our diet. Write the electron configurations of the ions expected from these elements.', 'K<sup>+</sup>: [Ar], Mg<sup>2+</sup>: [Ne]')
  + example('p7', 'Write the electron configurations of a phosphorus atom and its negative ion. Give the charge on the anion.', `P: [Ne]${config7('3s2 3p3')}; P<sup>3–</sup>: [Ne]${config7('3s2 3p6')}`)
  + exercises(
    exercise('a9', ['Write out the full electron configuration for each of the following atoms and for the monatomic ion found in binary ionic compounds containing the element:', '(a) Al', '(b) Br'],
      `(a) ${config7('1s2 2s2 2p6 3s2 3p1')}; Al<sup>3+</sup>: ${config7('1s2 2s2 2p6')}; (b) ${config7('1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p5')}; ${config7('1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6')}`),
  ),
);

test('chapter 7\'s configurations: an atom\'s and its ion\'s, two ions\' bare cores, each held to the one its closing names (7.1)', () => {
  const units = keyedUnits(CH7);
  const textin = (question, answer) => judgeKeyedUnit({ type: 'textin', question, answer, form: 'configuration' }, units)?.status;
  const TYPE = 'Type each subshell followed by its number of electrons, with a space between subshells.';
  const FULL = 'Write out the full electron configuration for the following atom and for the monatomic ion found in binary ionic compounds containing the element:';
  const atom = (symbol) => `${FULL} ${symbol}. Enter the electron configuration of the atom. ${TYPE}`;
  const ion = (symbol) => `${FULL} ${symbol}. Enter the electron configuration of the ion. ${TYPE}`;
  // The ion labelled ("Al³⁺: …"): each item its own, the swapped pair refused.
  assert.equal(textin(atom('Al'), '1s²2s²2p⁶3s²3p¹'), 'confirmed');
  assert.equal(textin(ion('Al'), '1s²2s²2p⁶'), 'confirmed');
  assert.equal(textin(ion('Al'), '1s²2s²2p⁶3s²3p¹'), 'key-differs', 'the atom\'s under the ion\'s closing');
  assert.equal(textin(atom('Al'), '1s²2s²2p⁶'), 'key-differs', 'the ion\'s under the atom\'s closing');
  // Neither labelled (bromine): the stem's order, the atom first.
  assert.equal(textin(atom('Br'), '1s²2s²2p⁶3s²3p⁶3d¹⁰4s²4p⁵'), 'confirmed');
  assert.equal(textin(ion('Br'), '1s²2s²2p⁶3s²3p⁶3d¹⁰4s²4p⁶'), 'confirmed');
  assert.equal(textin(ion('Br'), '1s²2s²2p⁶3s²3p⁶3d¹⁰4s²4p⁵'), 'key-differs');
  assert.equal(textin(`${FULL} Br. ${TYPE}`, '1s²2s²2p⁶3s²3p⁶3d¹⁰4s²4p⁵'), 'key-differs', 'a closing that names neither');
  // Two ions, each a bare noble-gas core, told apart by the element the closing names.
  const DIET = 'Potassium and magnesium are required in our diet. Write the electron configurations of the ions expected from these elements.';
  assert.equal(textin(`${DIET} Enter the electron configuration of the potassium ion. ${TYPE}`, '[Ar]'), 'confirmed');
  assert.equal(textin(`${DIET} Enter the electron configuration of the magnesium ion. ${TYPE}`, '[Ne]'), 'confirmed');
  assert.equal(textin(`${DIET} Enter the electron configuration of the magnesium ion. ${TYPE}`, '[Ar]'), 'key-differs');
  assert.equal(textin(`${DIET} Enter the electron configuration of the potassium ion. ${TYPE}`, '1s²2s²2p⁶3s²3p⁶'), 'key-differs', 'the expansion is right for a learner, not as the key');
  // An atom and its ion, both labelled with one symbol: "atom" and "ion" decide, by name or not.
  const P = 'Write the electron configurations of a phosphorus atom and its negative ion. Give the charge on the anion.';
  assert.equal(textin(`${P} Enter the electron configuration of the atom. ${TYPE}`, '[Ne]3s²3p³'), 'confirmed');
  assert.equal(textin(`${P} Enter the electron configuration of the phosphorus ion. ${TYPE}`, '[Ne]3s²3p⁶'), 'confirmed');
  assert.equal(textin(`${P} Enter the electron configuration of the ion. ${TYPE}`, '[Ne]3s²3p³'), 'key-differs');
});

test('chapter 7\'s charge: a fill-in "Enter the charge …" is held to the ion\'s superscript the answer prints, sign-last (7.1)', () => {
  const units = keyedUnits(CH7);
  const fillin = (answer) => judgeKeyedUnit({ type: 'fillin', question: 'Write the electron configurations of a phosphorus atom and its negative ion. Give the charge on the anion. Enter the charge as a signed number, the sign first, as +1 or −1.', answer, form: 'whole-number' }, units)?.status;
  assert.equal(fillin('-3'), 'confirmed');
  assert.equal(fillin('3'), 'key-differs', 'the sign is the answer\'s');
  assert.equal(fillin('-2'), 'key-differs');
});

const CH7_BONDS = cnxml(exercises(
  exercise('o7', ['From their positions in the periodic table, arrange the atoms in each of the following series in order of increasing electronegativity:', '(a) C, F, H, N, O', '(b) Al, H, Na, O, P'], '(a) H, C, N, O, F; (b) Na, Al, H, P, O'),
));

test('chapter 7\'s ordering printed with commas is read as the ordering the page keys with < (7.2)', () => {
  const units = keyedUnits(CH7_BONDS);
  const ORDER = 'Type the symbols in the order you rank them, separated by <.';
  const textin = (series, answer) => judgeKeyedUnit({ type: 'textin', question: `From their positions in the periodic table, arrange the atoms in the following series in order of increasing electronegativity: ${series}. ${ORDER}`, answer, form: 'ordering' }, units)?.status;
  assert.equal(textin('C, F, H, N, O', 'H < C < N < O < F'), 'confirmed');
  assert.equal(textin('C, F, H, N, O', 'F > O > N > C > H'), 'confirmed', 'the same order read from the other end');
  assert.equal(textin('C, F, H, N, O', 'F < O < N < C < H'), 'key-differs', 'reversed');
  assert.equal(textin('C, F, H, N, O', 'H < N < C < O < F'), 'key-differs', 'two members swapped');
  assert.equal(textin('Al, H, Na, O, P', 'Na < Al < H < P < O'), 'confirmed');
  assert.equal(textin('Al, H, Na, O, P', 'H < C < N < O < F'), 'key-differs', 'another part\'s ordering');
});

const CH7_FORMAL = cnxml(
  example('fc1', 'Calculate the formal charge for each atom in the carbon monoxide molecule:', 'C −1, O +1')
  + example('fc2', 'Determine the formal charge for each atom in NCl<sub>3</sub>.', 'N: 0; all three Cl atoms: 0')
  + exercises(exercise('fc8', ['Determine the formal charge of each element in the following:', '(a) HCl', '(b) PCl<sub>3</sub>'], '(a) H: 0, Cl: 0; (b) P: 0, Cl 0')),
);

test('chapter 7\'s formal charges: a short Check Your Learning is read past its closing, and each fill-in is held to its element\'s number (7.4)', () => {
  const units = keyedUnits(CH7_FORMAL);
  const close = (symbol) => `Enter the formal charge of ${symbol} as a signed number, the sign first, as +2 or −2.`;
  const fillin = (question, answer) => judgeKeyedUnit({ type: 'fillin', question, answer, form: 'whole-number' }, units);
  // Nine words of stem and fourteen of closing: read without the closing, the item is its Check Your Learning.
  const CO = 'Calculate the formal charge for each atom in the carbon monoxide molecule, shown in the figure above.';
  assert.equal(fillin(`${CO} ${close('C')}`, '-1').exercise.id, 'fc1#check');
  assert.equal(fillin(`${CO} ${close('C')}`, '-1').status, 'confirmed');
  assert.equal(fillin(`${CO} ${close('O')}`, '1').status, 'confirmed');
  assert.equal(fillin(`${CO} ${close('C')}`, '1').status, 'key-differs', 'O\'s charge under C\'s closing');
  assert.equal(fillin(`${CO} ${close('O')}`, '-1').status, 'key-differs');
  // "all three Cl atoms: 0" — the count is no charge.
  const N = 'Determine the formal charge for each atom in NCl₃.';
  assert.equal(fillin(`${N} ${close('Cl')}`, '0').status, 'confirmed');
  assert.equal(fillin(`${N} ${close('Cl')}`, '3').status, 'key-differs');
  // "H: 0, Cl: 0" and the source's "Cl 0" without its colon.
  const part = (formula, symbol) => `Determine the formal charge of each element in the following: ${formula}. ${close(symbol)}`;
  assert.equal(fillin(part('HCl', 'H'), '0').status, 'confirmed');
  assert.equal(fillin(part('HCl', 'Cl'), '-1').status, 'key-differs');
  assert.equal(fillin(part('PCl₃', 'Cl'), '0').status, 'confirmed');
  assert.equal(fillin(part('PCl₃', 'P'), '1').status, 'key-differs');
});

const CH7_SHAPES = cnxml(
  example('g3', 'The hydronium ion, H<sub>3</sub>O<sup>+</sup>, forms when acids are dissolved in water. Predict the electron-pair geometry and molecular structure of this cation.', 'electron pair geometry: tetrahedral; molecular structure: trigonal pyramidal')
  + example('g4', 'Predict the electron pair geometry and molecular structure for molecules of XeF<sub>2</sub>.', 'The electron-pair geometry is trigonal bipyramidal. The molecular structure is linear.')
  + exercises(
    exercise('g7', ['Predict the electron pair geometry and the molecular structure of each of the following molecules or ions:', '(a) SF<sub>6</sub>', '(b) PCl<sub>5</sub>'], '(a) Both the electron geometry and the molecular structure are octahedral. (b) Both the electron geometry and the molecular structure are trigonal bipyramid.'),
    exercise('g9', ['What are the electron-pair geometry and the molecular structure of each of the following molecules or ions?', '(a) ClF<sub>5</sub>', '(b) PH<sub>2</sub><sup>−</sup>'], '(a) electron-pair geometry: octahedral, molecular structure: square pyramidal; (b) electron-pair geometry: tetrahedral, molecular structure: bent (109°)'),
    exercise('g21', ['Describe the molecular structure around the indicated atom or atoms:', '(a) the oxygen atom in hydrogen peroxide, HOOH', '(b) the oxygen atom in the OH group in nitric acid, HNO<sub>3</sub> [HONO<sub>2</sub>]'], '(a) bent (109°); (b) bent (&lt;120°)'),
  ),
);

test('chapter 7\'s geometries: two names in one answer, each item held to the one its closing asks; an angle after a shape is no part of it (7.6)', () => {
  const units = keyedUnits(CH7_SHAPES);
  const textin = (question, answer) => judgeKeyedUnit({ type: 'textin', question, answer, form: '' }, units)?.status;
  const EP = 'Enter the electron-pair geometry.';
  const MS = 'Enter the molecular structure.';
  const ask = (lead, part, closing) => `${lead} ${part}. ${closing}`;
  const G9 = 'What are the electron-pair geometry and the molecular structure of the following molecule or ion?';
  assert.equal(textin(ask(G9, 'ClF₅', EP), 'octahedral'), 'confirmed');
  assert.equal(textin(ask(G9, 'ClF₅', MS), 'square pyramidal'), 'confirmed');
  assert.equal(textin(ask(G9, 'ClF₅', EP), 'square pyramidal'), 'key-differs', 'swapped');
  assert.equal(textin(ask(G9, 'ClF₅', MS), 'octahedral'), 'key-differs', 'swapped');
  assert.equal(textin(ask(G9, 'PH₂⁻', MS), 'bent'), 'confirmed', '"bent (109°)" keyed bent');
  // "…: X; …: Y" and two sentences, in a Check Your Learning.
  const H3O = 'The hydronium ion, H₃O⁺, forms when acids are dissolved in water. Predict the electron-pair geometry and molecular structure of this cation.';
  assert.equal(textin(`${H3O} ${MS}`, 'trigonal pyramidal'), 'confirmed');
  assert.equal(textin(`${H3O} ${MS}`, 'tetrahedral'), 'key-differs');
  const XE = 'Predict the electron pair geometry and molecular structure for molecules of XeF₂.';
  assert.equal(textin(`${XE} ${EP}`, 'trigonal bipyramidal'), 'confirmed');
  assert.equal(textin(`${XE} ${MS}`, 'linear'), 'confirmed');
  assert.equal(textin(`${XE} ${EP}`, 'linear'), 'key-differs');
  // "Both … are X": one value for both names.
  const G7 = 'Predict the electron pair geometry and the molecular structure of the following molecule or ion:';
  assert.equal(textin(ask(G7, 'SF₆', EP), 'octahedral'), 'confirmed');
  assert.equal(textin(ask(G7, 'SF₆', MS), 'octahedral'), 'confirmed');
  // The source's noun "trigonal bipyramid" is its key; the adjective is another key (a disclosed deviation, or the noun keyed).
  assert.equal(textin(ask(G7, 'PCl₅', MS), 'trigonal bipyramid'), 'confirmed');
  assert.equal(textin(ask(G7, 'PCl₅', MS), 'trigonal bipyramidal'), 'key-differs');
  // A one-name answer with an angle after it.
  const G21 = 'Describe the molecular structure around the indicated atom or atoms:';
  assert.equal(textin(`${G21} the oxygen atom in hydrogen peroxide, HOOH. ${MS}`, 'bent'), 'confirmed');
  assert.equal(textin(`${G21} the oxygen atom in the OH group in nitric acid, HNO₃ [HONO₂]. ${MS}`, 'bent'), 'confirmed', '"bent (<120°)"');
  assert.equal(textin(`${G21} the oxygen atom in hydrogen peroxide, HOOH. ${MS}`, 'linear'), 'key-differs');
});

test('a Check Your Learning carried as two items keeps both from an unkeyed twin that prints its formula as a part (7.6, coverage)', () => {
  const xml = cnxml(
    example('h3', 'The hydronium ion, H<sub>3</sub>O<sup>+</sup>, forms when acids are dissolved in water. Predict the electron-pair geometry and molecular structure of this cation.', 'electron pair geometry: tetrahedral; molecular structure: trigonal pyramidal')
    + exercises(exercise('t8', ['Predict the electron pair geometry and the molecular structure of each of the following ions:', '(a) H<sub>3</sub>O<sup>+</sup>', '(b) PCl<sub>4</sub><sup>−</sup>'], null)),
  );
  const ASK = 'The hydronium ion, H₃O⁺, forms when acids are dissolved in water. Predict the electron-pair geometry and molecular structure of this cation.';
  const page = ['Enter the electron-pair geometry.', 'Enter the molecular structure.']
    .map((closing, at) => `{{< textin question="${ASK} ${closing}" answer="${at ? 'trigonal pyramidal' : 'tetrahedral'}" hint="h" >}}\n`).join('\n');
  const verdicts = coverage(page, sourceExercises(xml), { keyedOnly: true });
  assert.deepEqual(verdicts.map((verdict) => [verdict.id, verdict.status]), [['t8(a)', 'omitted'], ['t8(b)', 'omitted'], ['h3#check', 'rendered']]);
  // The twin's part transcribed is still caught.
  const twin = '{{< textin question="Predict the electron pair geometry and the molecular structure of the following ion: H₃O⁺. Enter the molecular structure." answer="trigonal pyramidal" hint="h" >}}\n';
  assert.equal(coverage(page + twin, sourceExercises(xml), { keyedOnly: true }).find((verdict) => verdict.id === 't8(a)').status, 'unkeyed-rendered');
});

test('chapter 7\'s parts asked yes or no, where the answer lists the ones that are by formula in a sentence (7.6)', () => {
  const xml = cnxml(exercises(
    exercise('d13', ['Which of the following molecules and ions contain polar bonds? Which of these molecules and ions have dipole moments?', '(a) ClF<sub>5</sub>', '(b) ClO<sub>2</sub><sup>−</sup>', '(c) TeCl<sub>4</sub><sup>2−</sup>', '(d) XeF<sub>2</sub>'],
      'All of these molecules and ions contain polar bonds. Only ClF<sub>5</sub>, ClO<sub>2</sub><sup>−</sup>, and PCl<sub>3</sub> have dipole moments.'),
    exercise('d15', ['Which of the following molecules have dipole moments?', '(a) CS<sub>2</sub>', '(b) SeS<sub>2</sub>', '(c) PCl<sub>3</sub> (P is the central atom)', '(d) ClNO (N is the central atom)'], 'SeS<sub>2</sub>, PCl<sub>3</sub>, and ClNO all have dipole moments.'),
  ));
  const units = keyedUnits(xml);
  const mc = (question, answer) => judgeKeyedUnit({ type: 'multiplechoice', question, answer, options: ['yes', 'no'] }, units)?.status;
  const Q = 'Does the following molecule or ion have a dipole moment?';
  assert.equal(mc(`${Q} ClF₅`, 'yes'), 'confirmed');
  assert.equal(mc(`${Q} ClO₂⁻`, 'yes'), 'confirmed');
  assert.equal(mc(`${Q} TeCl₄²⁻`, 'no'), 'confirmed', 'every part has polar bonds; the dipole sentence is the one asked');
  assert.equal(mc(`${Q} XeF₂`, 'yes'), 'key-differs');
  assert.equal(mc(`${Q} ClF₅`, 'no'), 'key-differs');
  assert.equal(mc('Does the following molecule have a dipole moment? CS₂', 'no'), 'confirmed');
  assert.equal(mc('Does the following molecule have a dipole moment? PCl₃ (P is the central atom)', 'yes'), 'confirmed');
  assert.equal(mc('Does the following molecule have a dipole moment? PCl₃ (P is the central atom)', 'no'), 'key-differs');
});

test('chapter 7\'s list sorted into the stem\'s categories by sentences, its category words the module\'s other names for the options (7.1)', async () => {
  const { moduleAliases, printedGlosses } = await import('./keyed-units.mjs');
  const xml = cnxml(
    '<para>A cation (a positive ion) forms when a neutral atom loses one or more electrons from its valence shell, and an anion (a negative ion) forms when a neutral atom gains one or more electrons in its valence shell.</para>'
    + exercises(exercise('s3', ['Which of the following atoms would be expected to form negative ions in binary ionic compounds and which would be expected to form positive ions: P, I, Mg, Cl, In, Cs, O, Pb, Co?'],
      'P, I, Cl, and O would form anions because they are nonmetals. Mg, In, Cs, Pb, and Co would form cations because they are metals.')),
  );
  assert.deepEqual(printedGlosses(xml), [['cation', 'positive ion'], ['cations', 'positive ion'], ['anion', 'negative ion'], ['anions', 'negative ion']]);
  const units = keyedUnits(xml);
  const aliases = moduleAliases(xml);
  const mc = (member, answer, withAliases = aliases) => judgeKeyedUnit({ type: 'multiplechoice', question: `Would the following atom be expected to form a negative ion or a positive ion in binary ionic compounds: ${member}?`, answer, options: ['negative ion', 'positive ion'] }, units, { aliases: withAliases })?.status;
  assert.equal(mc('P', 'negative ion'), 'confirmed');
  assert.equal(mc('Mg', 'positive ion'), 'confirmed');
  assert.equal(mc('Co', 'positive ion'), 'confirmed');
  assert.equal(mc('Co', 'negative ion'), 'key-differs');
  assert.equal(mc('I', 'positive ion'), 'key-differs', 'the one-letter member read as a whole member, not a word');
  assert.equal(mc('P', 'negative ion', []), 'prose-key', 'without the module\'s own pairs the category words name no option');
});

test('chapter 7\'s parts sorted by letter under the stem\'s categories: each part\'s answer is its category, and one sortbins is held to it (7.2)', async () => {
  const { categoryLetterParts } = await import('./keyed-units.mjs');
  assert.deepEqual([...categoryLetterParts('ionic: (b), (d), and (e); covalent: (a), (c)')], [['b', 'ionic'], ['d', 'ionic'], ['e', 'ionic'], ['a', 'covalent'], ['c', 'covalent']]);
  assert.equal(categoryLetterParts('Oxidized: (a) Sn²⁺; (b) Hg'), null, 'values per part are roleFirstParts\' shape');
  assert.equal(categoryLetterParts('ionic: (b); covalent: (b)'), null, 'a part in two categories');
  const formulas = ['Cl<sub>2</sub>CO', 'MnO', 'NCl<sub>3</sub>', 'CoBr<sub>2</sub>', 'K<sub>2</sub>S', 'CO', 'CaF<sub>2</sub>', 'HI', 'CaO', 'IBr', 'CO<sub>2</sub>'];
  const xml = cnxml(exercises(exercise('b3', ['Predict which of the following compounds are ionic and which are covalent, based on the location of their constituent atoms in the periodic table:', ...formulas.map((formula, at) => `(${'abcdefghijk'[at]}) ${formula}`)],
    'ionic: (b), (d), (e), (g), and (i); covalent: (a), (c), (f), (h), (j), and (k)')));
  const units = keyedUnits(xml);
  assert.deepEqual(units.map((unit) => unit.answer), ['covalent', 'ionic', 'covalent', 'ionic', 'ionic', 'covalent', 'ionic', 'covalent', 'ionic', 'covalent', 'covalent']);
  const labels = ['Cl₂CO', 'MnO', 'NCl₃', 'CoBr₂', 'K₂S', 'CO', 'CaF₂', 'HI', 'CaO', 'IBr', 'CO₂'];
  const sort = (bins) => judgeKeyedSortbins({ type: 'sortbins', question: 'Predict which of the following compounds are ionic and which are covalent, based on the location of their constituent atoms in the periodic table. Sort the compounds into ionic and covalent.', bins: ['Ionic', 'Covalent'], items: labels.map((label, at) => ({ label, bin: bins[at] })) }, units).status;
  assert.equal(sort([1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1]), 'confirmed');
  assert.equal(sort([1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0]), 'key-differs', 'CO₂ sorted as ionic');
  // …and each part's own multiple choice, where a page carries fewer than ten.
  assert.equal(judgeKeyedUnit({ type: 'multiplechoice', question: 'Predict whether the following compound is ionic or covalent, based on the location of its constituent atoms in the periodic table: MnO.', answer: 'ionic', options: ['ionic', 'covalent'] }, units).status, 'confirmed');
});

test('chapter 7\'s drawings: a part\'s formula printed as its drawing\'s label is no word to carry; a Unicode formula reads as the source\'s spaced one (7.3)', () => {
  const image = (name) => `<media alt="a structure"><image mime-type="image/jpg" src="../../media/${name}.jpg"/></media>`;
  const xml = cnxml(exercises(
    exercise('w6', ['Write Lewis structures for the following:', '(a) H<sub>2</sub>', '(b) HBr'], null),
    exercise('w7', ['Write Lewis structures for the following:', '(a) O<sub>2</sub>', '(b) H<sub>2</sub>CO'], `(a) ${image('Q7a')} In this case, the Lewis structure is inadequate. (b) ${image('Q7b')}`),
    exercise('w9', ['Write Lewis structures for the following:', '(a) SeF<sub>6</sub>', '(b) Cl<sub>2</sub>BBCl<sub>2</sub> (contains a B–B bond)'], `(a) SeF<sub>6</sub>: ${image('Q9a')} (b) Cl<sub>2</sub>BBCl<sub>2</sub>: ${image('Q9b')}`),
  ));
  const units = keyedUnits(xml);
  const judge = (question, model, figures) => judgeKeyedUnit({ type: 'selfcheck', question, model, figures }, units);
  // "H₂CO" is the keyed (b), not the unkeyed twin's "H₂" read as a prefix.
  const h2co = judge('Write Lewis structures for the following: H₂CO.', 'Carbon is the central atom.', ['Q7b']);
  assert.deepEqual([h2co.exercise.id, h2co.status], ['w7(b)', 'confirmed']);
  assert.equal(judge('Write Lewis structures for the following: SeF₆.', 'Selenium is the central atom, bonded to six fluorine atoms.', ['Q9a']).status, 'confirmed', 'the label need not be repeated');
  assert.equal(judge('Write Lewis structures for the following: Cl₂BBCl₂ (contains a B–B bond).', 'Each boron atom is bonded to the other and to two chlorine atoms.', ['Q9b']).status, 'confirmed');
  assert.equal(judge('Write Lewis structures for the following: SeF₆.', 'Selenium is the central atom.', ['Q9b']).status, 'key-differs', 'a sibling\'s drawing');
  // Words beside a drawing are still carried: (a)'s sentence.
  assert.equal(judge('Write Lewis structures for the following: O₂.', 'The atoms share a double bond.', ['Q7a']).status, 'diverges');
});

test('chapter 7\'s pair of formulas with a reason: a formula option is not named by its pieces scattered through the reason (7.5)', () => {
  const xml = cnxml(exercises(exercise('l18', ['Which compound in each of the following pairs has the larger lattice energy? Note: Ba<sup>2+</sup> and K<sup>+</sup> have similar radii; S<sup>2–</sup> and Cl<sup>–</sup> have similar radii. Explain your choices.', '(a) K<sub>2</sub>O or Na<sub>2</sub>O', '(b) K<sub>2</sub>S or BaS'],
    '(a) Na<sub>2</sub>O; Na<sup>+</sup> has a smaller radius than K<sup>+</sup>; (b) BaS; Ba has a larger charge than K')));
  const units = keyedUnits(xml);
  const NOTE = 'Which compound in the following pair has the larger lattice energy? Note: Ba²⁺ and K⁺ have similar radii; S²⁻ and Cl⁻ have similar radii.';
  const mc = (pair, answer) => judgeKeyedUnit({ type: 'multiplechoice', question: `${NOTE} ${pair.join(' or ')}`, answer, options: pair }, units)?.status;
  assert.equal(mc(['K₂O', 'Na₂O'], 'Na₂O'), 'confirmed');
  assert.equal(mc(['K₂O', 'Na₂O'], 'K₂O'), 'key-differs');
  assert.equal(mc(['K₂S', 'BaS'], 'BaS'), 'confirmed');
});

test('chapter 7\'s lone letter under a lead-in that asks for the most or least is one closed choice; "Only (b)" stays yes or no (7.5)', () => {
  const xml = cnxml(exercises(
    exercise('q14', ['For which of the following substances is the least energy required to convert one mole of the solid into separate ions?', '(a) MgO', '(b) SrO', '(c) KF', '(d) CsF', '(e) MgF<sub>2</sub>'], '(d)'),
    exercise('q15', ['Which of the following will increase the percent of ammonia?', '(a) Addition of HCl', '(b) Removal of heat'], 'Only (b)'),
    exercise('q16', ['Which of the following lie within the band?', '(a) X', '(b) Y'], '(a)'),
  ));
  const units = keyedUnits(xml);
  const closed = units.find((unit) => unit.group === 'q14');
  assert.deepEqual([closed.chosen, closed.choices.length], ['d', 5]);
  assert.equal(units.filter((unit) => unit.group === 'q15').length, 2, '"Only (b)": a yes or no per part');
  assert.equal(units.filter((unit) => unit.group === 'q16').length, 2, 'a lone letter with no superlative: a yes or no per part');
  const mc = (answer) => judgeKeyedUnit({ type: 'multiplechoice', question: 'For which of the following substances is the least energy required to convert one mole of the solid into separate ions?', answer, options: ['MgO', 'SrO', 'KF', 'CsF', 'MgF₂'] }, units)?.status;
  assert.equal(mc('CsF'), 'confirmed');
  assert.equal(mc('KF'), 'key-differs');
});

test('chapter 7\'s list member asked after a colon is its exercise\'s, not an unkeyed twin\'s lettered part of the same symbol (7.1, both gates)', () => {
  const xml = cnxml(exercises(
    exercise('s3', ['Which of the following atoms would be expected to form negative ions in binary ionic compounds and which would be expected to form positive ions: P, I, Mg, Cl, In, Cs, O, Pb, Co?'],
      'P, I, Cl, and O would form anions because they are nonmetals. Mg, In, Cs, Pb, and Co would form cations because they are metals.'),
    exercise('s6', ['Predict the charge on the monatomic ions formed from the following atoms in binary ionic compounds:', '(a) I', '(b) Sr', '(c) In'], null),
  ));
  const units = keyedUnits(xml);
  const ask = (member) => `Would the following atom be expected to form a negative ion or a positive ion in binary ionic compounds: ${member}?`;
  for (const member of ['In', 'I']) {
    assert.equal(unitFor(ask(member), units, { type: 'multiplechoice', options: ['negative ion', 'positive ion'] }).id, 's3', member);
  }
  const page = ['P', 'I', 'In'].map((member) => `{{< multiplechoice question="${ask(member)}" answer="negative ion" hint="h" >}}\nnegative ion\npositive ion\n{{< /multiplechoice >}}\n`).join('\n');
  const verdicts = coverage(page, sourceExercises(xml), { keyedOnly: true });
  assert.deepEqual(verdicts.map((verdict) => verdict.status), ['rendered', 'omitted', 'omitted', 'omitted']);
});

test('chapter 7\'s shapes, as chemistry-shapes reads them: two ions\' bare cores, an atom and its ion, a comma-list ordering', () => {
  assert.match(shapeOf('K^{+} : [Ar], Mg^{2+} : [Ne]').component, /per configuration \(2\), each closing with the atom or ion it asks/);
  assert.equal(shapeOf('K^{+} : [Ar], Mg^{2+} : [Ne]').flag, undefined, 'a bare core reads; no unreadable-formula flag');
  assert.match(shapeOf('1 s^{2} 2 s^{1} ; Li^{+} : 1 s^{2}').component, /per configuration \(2\)/);
  const ordering = shapeOf('H, C, N, O, F', 'From their positions in the periodic table, arrange the atoms in each of the following series in order of increasing electronegativity: C, F, H, N, O');
  assert.equal(ordering.shape, 'ordering');
  assert.match(ordering.component, /key is written with <, first to last as printed\)$/);
  assert.doesNotMatch(ordering.component, /does not yet read/);
});

test('a selfcheck whose model answer is the source\'s derivation set as display math is read as what the math prints (7.5)', async () => {
  const { texAsText } = await import('./keyed-units.mjs');
  assert.equal(texAsText('$$\\begin{array}{ll}\\ce{HCl(g) -> H(g) + Cl(g)} & \\Delta H^\\circ_{\\text{f}} \\\\[4pt] \\hline x\\end{array}$$').replace(/\s+/g, ' ').trim(), 'HCl(g) ⟶ H(g) + Cl(g) Δ H°  f x'.replace(/\s+/g, ' '));
  const xml = cnxml(exercises(exercise('b6', ['Using the standard enthalpy of formation data in Appendix G, show how the standard enthalpy of formation of HCl(<emphasis effect="italics">g</emphasis>) can be used to determine the bond energy.'],
    'HCl(<emphasis effect="italics">g</emphasis>) ⟶ H(<emphasis effect="italics">g</emphasis>) + Cl(<emphasis effect="italics">g</emphasis>) Δ<emphasis effect="italics">H</emphasis>° = −(−92.307 kJ) + 217.97 kJ + 121.3 kJ = 431.6 kJ')));
  const units = keyedUnits(xml);
  const QUESTION = 'Using the standard enthalpy of formation data in Appendix G, show how the standard enthalpy of formation of HCl(*g*) can be used to determine the bond energy.';
  const MATH = '$$\\begin{array}{ll}\n\\ce{HCl(g) -> H(g) + Cl(g)} & \\Delta H^\\circ = -(-92.307\\ \\text{kJ}) + 217.97\\ \\text{kJ} + 121.3\\ \\text{kJ} \\\\[4pt] \\hline\n & = 431.6\\ \\text{kJ}\n\\end{array}$$';
  const judge = (model) => judgeKeyedUnit({ type: 'selfcheck', question: QUESTION, model, figures: [] }, units).status;
  assert.equal(judge(MATH), 'verbatim', 'the layout words (begin, array, hline, text, circ) are no words of the answer');
  assert.equal(judge(`${MATH}\n\nThe formation reaction is reversed and added to the formation reactions of the atoms; the sum breaks the bond, so its enthalpy change is the bond energy of HCl.`), 'diverges', 'a sentence the source does not print still diverges');
});

/*
 * 9.2's "Volume of a Gas Sample": a Check Your Learning lettered by paragraph,
 * (a)–(c), then a paragraph of its own that asks about all three, and an
 * Answer note that is one sentence; the chapter's unkeyed exercise 9 asks
 * the same syringe "using: (a) the appropriate graph (b) Boyle's law". The
 * CNXML is the pinned module's (m68751), its links and math as printed.
 */
const SYRINGE_CHECK = '<example id="fs-idp10418864"><para><title>Volume of a Gas Sample</title>Problem.</para><para><title>Solution</title>Worked.</para>'
  + '<para id="fs-idm111326864"><title>Check Your Learning</title>The sample of gas in <link target-id="CNX_Chem_09_03_BoylesLaw1"/> has a volume of 30.0 mL at a pressure of 6.5 psi. Determine the volume of the gas at a pressure of 11.0 psi, using:</para>'
  + '<para id="fs-idm161358576">(a) the <emphasis effect="italics">P</emphasis>-<emphasis effect="italics">V</emphasis> graph in <link target-id="CNX_Chem_09_03_BoylesLaw1"/></para>'
  + '<para id="fs-idm130543696">(b) the <m:math><m:mrow><m:mfrac><m:mn>1</m:mn><m:mi>P</m:mi></m:mfrac></m:mrow></m:math> vs. <emphasis effect="italics">V</emphasis> graph in <link target-id="CNX_Chem_09_03_BoylesLaw1"/></para>'
  + '<para id="fs-idm208892896">(c) the Boyle’s law equation</para>'
  + '<para id="fs-idm265464784">Comment on the likely accuracy of each method.</para>'
  + '<note id="fs-idp7933296"><title>Answer:</title><para id="fs-idm53855168">(a) about 17–18 mL; (b) ~18 mL; (c) 17.7 mL; it was more difficult to estimate well from the <emphasis effect="italics">P</emphasis>-<emphasis effect="italics">V</emphasis> graph, so (a) is likely more inaccurate than (b); the calculation will be as accurate as the equation and measurements allow</para></note></example>';
const SYRINGE_EXERCISE = '<exercise id="fs-idm179450656"><problem id="fs-idm235612144">'
  + '<para id="fs-idm118272896">Determine the pressure of the gas in the syringe shown in <link target-id="CNX_Chem_09_03_BoylesLaw1"/> when its volume is 12.5 mL, using:</para>'
  + '<para id="fs-idm163780992">(a) the appropriate graph</para><para id="fs-idm234849104">(b) Boyle’s law</para></problem></exercise>';
const SYRINGE = cnxml(SYRINGE_CHECK + exercises(SYRINGE_EXERCISE));
const SYRINGE_LEAD = 'The sample of gas in the figure of the syringe and its two graphs above has a volume of 30.0 mL at a pressure of 6.5 psi. Determine the volume of the gas at a pressure of 11.0 psi, using:';
const BOYLE_ITEM = `${SYRINGE_LEAD} the Boyle’s law equation. Enter the volume in milliliters.`;

test('a paragraph after the last lettered one closes the stem: it is no words of the last part (9.2)', async () => {
  const { markedParagraphs } = await import('./keyed-units.mjs');
  const syringe = keyedUnits(SYRINGE);
  const part = (id) => syringe.find((candidate) => candidate.id === id);
  assert.equal(part('fs-idp10418864#check(c)').partText, 'the Boyle’s law equation');
  assert.match(part('fs-idp10418864#check(c)').stem, /the Boyle’s law equation Comment on the likely accuracy of each method\.$/, 'the stem still runs on as the source prints it');
  assert.equal(part('fs-idp10418864#check(c)').answer, '17.7 mL; it was more difficult to estimate well from the P - V graph, so (a) is likely more inaccurate than (b); the calculation will be as accurate as the equation and measurements allow');
  assert.equal(part('fs-idm179450656(b)').partText, 'Boyle’s law', 'a stem that ends on its last lettered paragraph has no closing');
  // A stem lettered inside one paragraph is not split by paragraph.
  const inline = parseXml(cnxml('<para>(a) Add 2.334 mL and 0.31 mL. (b) Subtract 55.8752 m from 56.533 m.</para><para>Explain.</para>'));
  assert.doesNotMatch(markedParagraphs(inline.children[0].children[0].children.filter((child) => typeof child !== 'string')), /⟦closing⟧/);
  assert.equal(sequentialParts('Lead: (a) one (b) two ⟦closing⟧ Explain (c) nothing.').parts.length, 2, 'no label is looked for in a closing');
  assert.equal(sequentialParts('Lead: (a) one (b) two ⟦closing⟧ Explain.').closing, 'Explain.');
});

test('the item that asks a Check Your Learning\'s part (c) is that part, not the unkeyed exercise that shares "Boyle’s law" (9.2)', () => {
  const syringe = keyedUnits(SYRINGE);
  assert.equal(unitFor(BOYLE_ITEM, syringe, { type: 'fillin' }).id, 'fs-idp10418864#check(c)');
  assert.equal(unitFor(BOYLE_ITEM.replace('the figure of the syringe and its two graphs above', 'the figure above'), syringe, { type: 'fillin' }).id, 'fs-idp10418864#check(c)');
  // The exercise's own part still reads as itself.
  assert.equal(unitFor('Determine the pressure of the gas in the syringe shown in the figure above when its volume is 12.5 mL, using: Boyle’s law. Enter the pressure in psi.', syringe, { type: 'fillin' }).id, 'fs-idm179450656(b)');
});

test('the fill-in for part (c) is held to "(c) 17.7 mL", not to the "~18 mL" of part (b) (9.2)', () => {
  const syringe = keyedUnits(SYRINGE);
  const judge = (answer, form) => judgeKeyedUnit({ type: 'fillin', question: BOYLE_ITEM, answer, form }, syringe);
  assert.equal(judge('17.7', 'sig-figs:3 last-digit:1').status, 'confirmed');
  const corrected = judge('18', 'sig-figs:2 last-digit:0');
  assert.equal(corrected.status, 'key-differs', 'a key the source does not print for (c) needs its deviation entry');
  assert.equal(corrected.exercise.id, 'fs-idp10418864#check(c)', 'the entry it needs is the one filed: fs-idp10418864#check(c)');
});

test('coverage reads the page\'s three items and its comment as the Check Your Learning, never as unkeyed exercise 9 (9.2)', () => {
  const graph = (which) => `{{< selfcheck question="${SYRINGE_LEAD} ${which} in the figure of the syringe and its two graphs above." hint="h" >}}\nmodel\n{{< /selfcheck >}}\n`;
  const page = `${graph('the $P$-$V$ graph')}\n${graph('the $\\frac{1}{P}$ vs. $V$ graph')}\n`
    + `{{< fillin question="${BOYLE_ITEM}" answer="18" answerForm="sig-figs:2 last-digit:0" hint="h" >}}\n\n`
    + `{{< selfcheck question="${SYRINGE_LEAD.replace(/:$/, '')} the $P$-$V$ graph, the $\\frac{1}{P}$ vs. $V$ graph, and the Boyle’s law equation. Comment on the likely accuracy of each method." hint="h" >}}\nmodel\n{{< /selfcheck >}}\n`;
  const verdicts = coverage(page, sourceExercises(SYRINGE), { keyedOnly: true });
  const status = (id) => verdicts.find((verdict) => verdict.id === id)?.status;
  assert.equal(status('fs-idp10418864#check(c)'), 'rendered');
  assert.notEqual(status('fs-idm179450656(b)'), 'unkeyed-rendered');
  assert.notEqual(status('fs-idm179450656(a)'), 'unkeyed-rendered');
});

/* ---- chapter 9, Sections 9.3–9.6 (run B gate probe, November 17, 2026) -- */

const RUN_B = cnxml(
  example('x4', 'A 36.0-L cylinder contains 350 g CO<sub>2</sub>. What are the molar mass and molecular formula of phosphorus vapor?', '124 g/mol P<sub>4</sub>')
  + example('x2', 'Acetylene is composed of 92.3% C and 7.7% H by mass. Find the empirical formula. What is the molecular formula for acetylene?', 'Empirical formula, CH; Molecular formula, C<sub>2</sub>H<sub>2</sub>')
  + example('x7', 'An acetylene tank provides 9340 L of acetylene gas, C<sub>2</sub>H<sub>2</sub>, at 0 °C and 1 atm. How many tanks of oxygen, each providing 7.00 × 10<sup>3</sup> L of O<sub>2</sub> at 0 °C and 1 atm, will be required to burn the acetylene?', '3.34 tanks (2.34 × 10<sup>4</sup> L)')
  + '<example id="x9"><para><title>T</title>Problem.</para><para><title>Solution</title>Worked.</para>'
  + '<para><title>Check your Learning</title>A 560-mL flask contains 21.3 g N<sub>2</sub> at 145 °C. Calculate the pressure of N<sub>2</sub>:</para>'
  + '<para>(a) from the ideal gas law</para><para>(b) from the van der Waals equation</para><para>(c) Explain the reason(s) for the difference.</para>'
  + '<note><title>Answer:</title><para>(a) 46.562 atm; (b) 46.594 atm; (c) The van der Waals equation takes into account the volume of the gas molecules themselves as well as intermolecular attractions.</para></note></example>'
  + exercises(
    exercise('p10', ['A 36.0–L cylinder of a gas used for calibration of blood gas analyzers in medical laboratories contains 350 g CO<sub>2</sub>, 805 g O<sub>2</sub>, and 4,880 g N<sub>2</sub>. At 25 degrees C, what is the pressure in the cylinder in atmospheres?'], '141 atm, 107,000 torr, 14,300 kPa'),
    exercise('p12', ['A sample of gas isolated from unrefined petroleum contains 90.0% CH<sub>4</sub>, 8.9% C<sub>2</sub>H<sub>6</sub>, and 1.1% C<sub>3</sub>H<sub>8</sub> at a total pressure of 307.2 kPa. What is the partial pressure of each component of this gas?'], 'CH<sub>4</sub>: 276 kPa; C<sub>2</sub>H<sub>6</sub>: 27 kPa; C<sub>3</sub>H<sub>8</sub>: 3.4 kPa'),
    exercise('p18', ['Joseph Priestley first prepared pure oxygen by heating mercuric oxide, HgO.', '(a) Outline the steps necessary to answer the following question: What volume of O<sub>2</sub> at 23 °C and 0.975 atm is produced by the decomposition of 5.36 g of HgO?', '(b) Answer the question.'],
      '(a) Determine the moles of HgO that decompose; using the chemical equation, determine the moles of O<sub>2</sub> produced by decomposition of this amount of HgO; and determine the volume of O<sub>2</sub> from the moles of O<sub>2</sub>, temperature, and pressure. (b) 0.308 L'),
    exercise('d5', ['Which of the following gases diffuse more slowly than oxygen? F<sub>2</sub>, Ne, N<sub>2</sub>O, C<sub>2</sub>H<sub>2</sub>, NO, Cl<sub>2</sub>, H<sub>2</sub>S'], 'F<sub>2</sub>, N<sub>2</sub>O, Cl<sub>2</sub>, H<sub>2</sub>S'),
    exercise('k8', ['Answer the following questions:', '(a) Is the pressure of the gas in the hot-air balloon shown at the opening of this chapter greater than, less than, or equal to that of the atmosphere outside the balloon?', '(b) Is the density of the gas in the hot-air balloon shown at the opening of this chapter greater than, less than, or equal to that of the atmosphere outside the balloon?'], '(a) equal; (b) less than'),
    exercise('n1', ['Graphs showing the behavior of several different gases follow. Which of these gases exhibit behavior significantly different from that expected for ideal gases?'], 'Gases C, E, and F'),
    exercise('n3', ['Under which of the following sets of conditions does a real gas behave most like an ideal gas, and for which conditions is a real gas expected to deviate from ideal behavior? Explain.', '(a) high pressure, small volume', '(b) high temperature, low pressure', '(c) low temperature, high pressure'],
      'The gas behavior most like an ideal gas will occur under the conditions that minimize the chances of significant interactions between the gaseous atoms/molecules, namely, low pressures and high temperatures. The conditions described in (b), high temperature and low pressure, are therefore most likely to yield ideal gas behavior.'),
  ),
);
const runB = keyedUnits(RUN_B);
const judgeB = (item) => judgeKeyedUnit(item, runB);
const yesNo = (question, answer) => judgeB({ type: 'multiplechoice', question, answer, options: ['yes', 'no'] });

test('9.4: a member of a list printed AFTER the stem\'s question mark is asked yes or no, both gates', async () => {
  const { listMembers } = await import('./keyed-units.mjs');
  assert.deepEqual(listMembers(runB.find((unit) => unit.id === 'd5').stem), ['F 2', 'Ne', 'N 2 O', 'C 2 H 2', 'NO', 'Cl 2', 'H 2 S'], 'a formula\'s subscripts are no words of it');
  const ask = (member) => `Does the following gas diffuse more slowly than oxygen? ${member}`;
  assert.equal(yesNo(ask('F₂'), 'yes').status, 'confirmed');
  assert.equal(yesNo(ask('C₂H₂'), 'no').status, 'confirmed');
  assert.equal(yesNo(ask('Cl₂'), 'no').status, 'key-differs', 'a member the answer lists is yes');
  assert.equal(yesNo(ask('Ne'), 'yes').status, 'key-differs', 'a member it does not list is no');
  const page = ['F₂', 'Ne'].map((member) => `{{< multiplechoice question="${ask(member)}" answer="yes" hint="h" >}}\nyes\nno\n{{< /multiplechoice >}}\n`).join('\n');
  assert.equal(coverage(page, sourceExercises(RUN_B), { keyedOnly: true }).find((verdict) => verdict.id === 'd5')?.status, 'rendered');
});

test('9.6: a labelled panel of the stem\'s image asked yes or no is held to the labels the answer lists', () => {
  const ask = (label) => `Graphs showing the behavior of several different gases follow. Does the following gas, graphed in the figure above, exhibit behavior significantly different from that expected for ideal gases? ${label}`;
  assert.equal(yesNo(ask('Gas C'), 'yes').status, 'confirmed');
  assert.equal(yesNo(ask('Gas A'), 'no').status, 'confirmed');
  assert.equal(yesNo(ask('Gas E'), 'no').status, 'key-differs');
  assert.equal(yesNo(ask('Gas B'), 'yes').status, 'key-differs');
});

test('9.6: a lone letter in the sentence that answers the lead-in\'s "most" is one closed choice, and the reason\'s self-check is its own', () => {
  const unit = runB.find((candidate) => candidate.group === 'n3');
  assert.equal(unit.chosen, 'b');
  const options = ['high pressure, small volume', 'high temperature, low pressure', 'low temperature, high pressure'];
  const question = 'Under which of the following sets of conditions does a real gas behave most like an ideal gas, and for which conditions is a real gas expected to deviate from ideal behavior? Explain. Which set of conditions gives behavior most like an ideal gas?';
  assert.equal(judgeB({ type: 'multiplechoice', question, answer: options[1], options }).status, 'confirmed');
  assert.equal(judgeB({ type: 'multiplechoice', question, answer: options[2], options }).status, 'key-differs');
  const self = judgeB({ type: 'selfcheck', question: `${question.replace(/ Which set.*$/, '')} (a) high pressure, small volume (b) high temperature, low pressure (c) low temperature, high pressure`, model: unit.answer });
  assert.equal(self.exercise.id, 'n3');
  assert.equal(self.status, 'verbatim');
});

test('9.5: an option the stem prints with its joining word ("equal to") is named by the comparison alone ("equal")', () => {
  const options = ['greater than', 'less than', 'equal to'];
  const ask = 'Answer the following question: Is the pressure of the gas in the hot-air balloon shown at [the opening of this chapter](/physical-sciences/chemistry/09-gases/) greater than, less than, or equal to that of the atmosphere outside the balloon?';
  assert.equal(judgeB({ type: 'multiplechoice', question: ask, answer: 'equal to', options }).status, 'confirmed', 'the link is no word of the stem');
  assert.equal(judgeB({ type: 'multiplechoice', question: ask, answer: 'less than', options }).status, 'key-differs');
});

test('9.3: a formula after a number and its unit, and two formulas each after its label and a comma', () => {
  const textin = (question, answer) => judgeB({ type: 'textin', question, answer, form: 'formula' });
  const p4 = 'A 36.0-L cylinder contains 350 g CO₂. What are the molar mass and molecular formula of phosphorus vapor? Enter the molecular formula.';
  assert.equal(textin(p4, 'P₄').status, 'confirmed');
  assert.equal(textin(p4, 'P₂').status, 'key-differs');
  const lead = 'Acetylene is composed of 92.3% C and 7.7% H by mass. Find the empirical formula. What is the molecular formula for acetylene?';
  assert.equal(textin(`${lead} Enter the empirical formula.`, 'CH').status, 'confirmed');
  assert.equal(textin(`${lead} Enter the molecular formula.`, 'C₂H₂').status, 'confirmed');
  assert.equal(textin(`${lead} Enter the empirical formula.`, 'C₂H₂').status, 'key-differs', 'a swapped pair is refused');
  assert.equal(textin(`${lead} Enter the molecular formula.`, 'CH').status, 'key-differs');
});

test('9.3: a fill-in is held to its gas\'s value, to the unit its question asks, and to the count its closing names', () => {
  const fillin = (question, answer, form) => judgeB({ type: 'fillin', question, answer, form });
  const gas = (formula) => `A sample of gas isolated from unrefined petroleum contains 90.0% CH₄, 8.9% C₂H₆, and 1.1% C₃H₈ at a total pressure of 307.2 kPa. What is the partial pressure of each component of this gas? Enter the partial pressure of ${formula} in kilopascals.`;
  assert.equal(fillin(gas('CH₄'), '276', 'sig-figs:3 last-digit:0').status, 'confirmed');
  assert.equal(fillin(gas('C₂H₆'), '27', 'sig-figs:2 last-digit:0').status, 'confirmed');
  assert.equal(fillin(gas('CH₄'), '27', 'sig-figs:2 last-digit:0').status, 'key-differs', 'a swapped pair is refused, however the figures are declared');
  assert.equal(fillin(gas('C₂H₆'), '276', 'sig-figs:3 last-digit:0').status, 'key-differs');
  const cylinder = 'A 36.0-L cylinder of a gas used for calibration of blood gas analyzers in medical laboratories contains 350 g CO₂, 805 g O₂, and 4,880 g N₂. At 25 °C, what is the pressure in the cylinder in atmospheres?';
  for (const question of [cylinder, `${cylinder} Enter the pressure in atmospheres.`]) {
    assert.equal(fillin(question, '141', 'sig-figs:3 last-digit:1').status, 'confirmed');
    assert.equal(fillin(question, '1.07\\times10^{5}', 'sig-figs:3 last-digit:1').status, 'key-differs', 'the torr value is no key of a question that asks atmospheres');
  }
  const tanks = 'An acetylene tank provides 9340 L of acetylene gas, C₂H₂, at 0 °C and 1 atm. How many tanks of oxygen, each providing $7.00 \\times 10^{3}$ L of O₂ at 0 °C and 1 atm, will be required to burn the acetylene? Enter the number of tanks, to three significant figures.';
  assert.equal(fillin(tanks, '3.34', 'sig-figs:3 last-digit:0').status, 'confirmed');
  assert.equal(fillin(tanks, '2.34\\times10^{4}', 'sig-figs:3 last-digit:0').status, 'key-differs', 'the volume beside the count is no key');
});

test('9.3: the fill-in of an outline-then-answer exercise is part (b), which prints the number', () => {
  const lead = 'Joseph Priestley first prepared pure oxygen by heating mercuric oxide, HgO. Outline the steps necessary to answer the following question: What volume of O₂ at 23 °C and 0.975 atm is produced by the decomposition of 5.36 g of HgO?';
  const fill = judgeB({ type: 'fillin', question: `${lead} Answer the question. Enter the volume in liters.`, answer: '0.308', form: 'sig-figs:3 last-digit:1' });
  assert.equal(fill.exercise.id, 'p18(b)');
  assert.equal(fill.status, 'confirmed');
  assert.equal(unitFor(lead, runB, { type: 'selfcheck' }).id, 'p18(a)', 'the outline\'s self-check is still part (a)');
});

test('9.6: a "Check your Learning" in lower case is a lettered unit, two fill-ins of one key each held to its own part', () => {
  const lead = 'A 560-mL flask contains 21.3 g N₂ at 145 °C. Calculate the pressure of N₂:';
  const a = judgeB({ type: 'fillin', question: `${lead} from the ideal gas law. Enter the pressure in atmospheres.`, answer: '46.6', form: 'sig-figs:3 last-digit:1' });
  const b = judgeB({ type: 'fillin', question: `${lead} from the van der Waals equation. Enter the pressure in atmospheres.`, answer: '46.6', form: 'sig-figs:3 last-digit:1' });
  assert.deepEqual([a.exercise.id, a.status], ['x9#check(a)', 'key-differs'], 'the corrected key needs the deviation of (a)');
  assert.deepEqual([b.exercise.id, b.status], ['x9#check(b)', 'key-differs'], '…and the one of (b)');
  assert.equal(judgeB({ type: 'fillin', question: `${lead} from the van der Waals equation. Enter the pressure in atmospheres.`, answer: '46.594', form: 'sig-figs:5 last-digit:1' }).status, 'confirmed');
});
