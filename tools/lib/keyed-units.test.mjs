/**
 * Keyed units: how the two source gates read a book that renders only the
 * exercises its source keys (Chemistry 2e). The fixtures are the shapes of
 * chapter 1: lettered parts under a shared lead-in, one solution paragraph
 * answering every part, numbers written to their significant figures.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  KEYED_ONLY_BOOKS, answerText, glossaryAliases, keyedUnits, plain, printedNumerals, sequentialParts, unitFor, unitScore, unlinked,
  workedExampleUnits, workedExamples,
} from './keyed-units.mjs';
import { parseXml } from './openstax-source.mjs';
import { answerEquations, conditionalUnwrapped, judgeKeyedUnit, pageItems } from '../verify/verify-source-keys.mjs';
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
