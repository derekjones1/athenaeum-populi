// The Chemistry lints of November 16, 2026, read through lintLeaks: each
// incident of chapters 5 and 6 as it stood on its page, the form the page has
// now, and another book, which is not held to them. The readings themselves
// are tested in chemistry-readings.test.mjs and tools/lib.
import test from 'node:test';
import assert from 'node:assert/strict';
import { lintLeaks } from './lints-leaks.mjs';

const CHEM = 'content/physical-sciences/chemistry/05-thermochemistry/02-calorimetry.md';
const BIO = 'content/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology.md';
const rule = (pattern) => (src, file = CHEM) => lintLeaks(src, file).errors.filter((error) => pattern.test(error));

const fillin = ({ question, answer, display, hint = 'Use the equation for heat.' }) => `{{< fillin\n  question="${question}"\n  answer="${answer}"\n  answerForm="sig-figs:3 last-digit:1"${display ? `\n  answerDisplay="${display}"` : ''}\n  hint="${hint}"\n>}}\n`;
const selfcheck = (question, model, clauses) => `{{< selfcheck question="${question}" hint="Place the line on the scale of the emission-spectra figure." >}}\n${model}\n===CHECKS===\n${clauses.join('\n')}\n{{< /selfcheck >}}\n`;

test('a negative key under "how much heat was produced" is refused (5.2\'s benzene); a signed ask keeps its sign', () => {
  const negative = rule(/a negative number, under a question that asks how much heat/);
  const benzene = 'A 0.500-g sample of benzene is burned in a bomb calorimeter. How much heat was produced by the combustion of the benzene sample? Enter the heat in kilojoules.';
  assert.equal(negative(fillin({ question: benzene, answer: '-39.0', display: '$-39.0\\ \\text{kJ}$' })).length, 1);
  assert.equal(negative(fillin({ question: benzene, answer: '−39.0' })).length, 1, 'the minus sign U+2212');
  assert.deepEqual(negative(fillin({ question: benzene, answer: '39.0', display: '$39.0\\ \\text{kJ}$' })), []);
  // 5.3: the stem states a heat and asks the enthalpy change.
  assert.deepEqual(negative(fillin({ question: 'When 1.34 g Zn(*s*) reacts, 3.14 kJ of heat are produced. Determine the enthalpy change per mole of zinc reacting. Enter the enthalpy change in kJ/mol.', answer: '-153' })), []);
  assert.deepEqual(negative(fillin({ question: 'What is the approximate amount of heat involved in the dissolution? Enter the heat, $q$, in kilojoules.', answer: '-2.2' })), []);
  assert.deepEqual(negative(fillin({ question: benzene, answer: '-39.0' }), BIO), [], 'Chemistry only');
});

test('a hint on an amount item that leads to a negative number is refused; the ruling\'s closing passes', () => {
  const leads = rule(/its hint leads to a negative one/);
  const question = 'How much heat is produced by this precipitation reaction? Enter the heat in kilojoules.';
  // 5.2 line 174 before the fix: the learner who followed it typed −1.34.
  assert.equal(leads(fillin({ question, answer: '1.3', hint: 'Use $q = c \\times m \\times \\Delta T$ and $q_\\text{reaction} = -q_\\text{solution}$, as in the example above.' })).length, 1);
  assert.deepEqual(leads(fillin({ question, answer: '1.3', hint: 'Use $q = c \\times m \\times \\Delta T$ and $q_\\text{reaction} = -q_\\text{solution}$, as in the example above; the heat produced is the size of $q_\\text{reaction}$.' })), []);
  // The same hint under a signed ask says what the item wants.
  assert.deepEqual(leads(fillin({ question: 'How much heat is involved in the dissolution of the KCl? Enter the heat, $q$, in kilojoules.', answer: '1.33', hint: 'Use $q_\\text{rxn} = -q_\\text{soln}$.' })), []);
});

test('an answer display shows the unit its closing asks for (1.6\'s feet over ft/cubit, 5.1\'s cal/°C over cal °C⁻¹)', () => {
  const unit = rule(/the closing asks for the answer in/);
  assert.match(unit(fillin({ question: 'How long is one cubit in meters and in feet? Enter the length of one cubit in feet.', answer: '1.5', display: '$1.5\\ \\text{ft/cubit}$' }))[0], /in ft, and the answer display shows ft\/cubit/);
  assert.equal(unit(fillin({ question: 'Enter the heat capacity in cal/°C.', answer: '11.4', display: '$11.4\\ \\text{cal}\\ {}^\\circ\\text{C}^{-1}$' })).length, 1);
  for (const [question, display] of [
    ['Enter the length of one cubit in feet.', '$1.5\\ \\text{ft}$'],
    ['Enter the heat capacity in cal/°C.', '$11.4\\ \\text{cal/}{}^\\circ\\text{C}$'],
    ['Enter the mass of oxygen in grams.', '$12.0\\ \\text{g}\\ \\ce{O2}$'],
    ['Enter the concentration in mol/L.', '$0.250\\ M$'],
    ['Enter the number of protons in an atom of cobalt–60.', '$27$'],
    ['How many grams of oxygen form?', '$12.0\\ \\text{kg}$'],
  ]) assert.deepEqual(unit(fillin({ question, answer: '1.5', display })), [], question);
  assert.deepEqual(unit(fillin({ question: 'Enter the length in feet.', answer: '1.5', display: '$1.5\\ \\text{ft/cubit}$' }), BIO), [], 'Chemistry only');
});

test('a colour keyed to infrared light is refused in whatever kind of item keys it (6.1\'s cesium line)', () => {
  const colour = rule(/outside the visible range/);
  const cesium = 'The emission spectrum of cesium contains a line whose frequency is $3.45 \\times 10^{14}$ Hz. What color is the line?';
  assert.equal(colour(selfcheck(cesium, 'The color of the line is red.', ['the color of the line', 'is red'])).length, 1);
  assert.equal(colour('{{< textin question="What color does cesium give a flame?" answer="violet" hint="Use the table of flame colors." >}}\n').length, 0, 'a stem that states no light is not judged');
  assert.equal(colour(`{{< textin question="A line has a wavelength of 869 nm. What color is the line?" answer="red" hint="Use the spectrum." >}}\n`).length, 1);
  // The page as it stands: the answer names the region, and the blue line is visible.
  assert.deepEqual(colour(selfcheck(cesium, 'The line is in the infrared, so it is not seen as a color.', ['the line is in the infrared', 'it is not seen as a color'])), []);
  assert.deepEqual(colour(selfcheck(cesium.replace('3.45', '6.53'), 'The color of the line is blue.', ['the color of the line', 'is blue'])), []);
});

test('notation: an italic shell number, an italic f or i subscript, a dash-hyphen, and a source table number are each refused', () => {
  const page = (sentence) => `## Electron Configurations\n\n${sentence}\n`;
  const subshell = rule(/sets the shell number italic/);
  assert.equal(subshell(page('The highest $n$s electrons are lost, and then the $(n - 1)$d electrons.')).length, 2);
  assert.deepEqual(subshell(page('The highest ns electrons are lost, and then the (n − 1)d electrons; $n$ is the shell.')), []);
  assert.deepEqual(subshell(page('The highest $n$s electrons are lost.'), BIO), [], 'Chemistry only');

  const subscript = rule(/is an italic subscript/);
  assert.equal(subscript(page('The photon carries $\\Delta E = E_f - E_i$.')).length, 2);
  assert.deepEqual(subscript(page('The photon carries $\\Delta E = E_\\text{f} - E_\\text{i}$, and $\\sum_i m_i$ is the mass.')), []);

  const dash = rule(/the source's hyphen where it means a dash/);
  assert.equal(dash(page('The particles do not travel with the wave-they stay in place, and AM radio uses 540-1700 kHz.')).length, 2);
  assert.deepEqual(dash(page('The particles do not travel with the wave—they stay in place over half-wavelengths, and AM radio uses 540–1700 kHz.')), []);
  assert.deepEqual(dash(page('The particles do not travel with the wave-they stay.'), BIO), [], 'Chemistry only');

  const number = rule(/is the source's number/);
  assert.equal(number(fillin({ question: 'Find the heat. (Specific heats are in Table 5.1.) Enter the heat in joules.', answer: '209' })).length, 1);
  assert.equal(number(page('As Figure 6.13 shows, the lines converge.')).length, 1);
  assert.deepEqual(number(page('Text.\n\n*Source note:* the Energy Information Administration’s Table 1.3 counts natural gas.\n\n<small>Changes: references to Table 5.1 written as “the table of specific heats”.</small>')), []);
});

test('a figure description\'s configuration holds its element\'s electrons, unless a Source note quotes the source\'s own misprint (6.4)', () => {
  const count = rule(/which holds \d+ electrons where/);
  const figure = (longdesc) => `{{< mediafigure src="chemistry/CNX_Chem_06_04_Ptableconf" kind="diagram" alt="A periodic table." longdesc="${longdesc}" >}}\nCaption.\n{{< /mediafigure >}}\n`;
  assert.match(count(figure('95 Am 7s²5f⁷; 96 Cm 7s²5f⁹; 97 Bk 7s²5f⁸6d¹.'))[0], /`96 Cm 7s²5f⁹`, which holds 97 electrons where Cm has 96/);
  assert.deepEqual(count(`${figure('95 Am 7s²5f⁷; 96 Cm 7s²5f⁹; 97 Bk 7s²5f⁸6d¹.')}\n*Source note:* the table prints curium as 7s²5f⁹, where the database gives [Rn]7s²5f⁷6d¹.\n`), []);
  assert.deepEqual(count(figure('95 Am 7s²5f⁷; 96 Cm 7s²5f⁷6d¹.')), []);
});

test('the footer and a Source note do not repeat a point of a self-check\'s rubric (6.1: "outside the visible range")', () => {
  const repeats = rule(/repeats "[^"]+", a point of the rubric/);
  const item = selfcheck('What color is the cesium line?', 'The line is in the infrared, outside the visible range, so it is not seen as a color.', ['the line is in the infrared', 'outside the visible range']);
  const footer = (clause) => `\n---\n\n<small>This section is adapted from Chemistry 2e. Changes: ${clause}.</small>\n`;
  // The footer chapter 6's render reading caught.
  assert.match(repeats(`${item}${footer('the model answer for the color of the cesium line written from the scale, which places that line outside the visible range, where the source names a visible color')}`)[0], /the footer repeats "outside the visible range"/);
  assert.match(repeats(`${item}\n*Source note:* the source’s answer names a color; the line is in the infrared.\n`)[0], /a Source note repeats "the line is in the infrared"/);
  // What the page says now: that the answers differ, not what the answer is.
  assert.deepEqual(repeats(`${item}\n*Source note:* the source’s answer to the color differs from the one the figure’s scale gives.\n${footer('the model answer for the color of the lower-frequency cesium line written from the wavelength scale of the emission-spectra figure, where the source’s differs, with a Source note')}`), []);
  // A two-word clause is in any sentence about its item.
  const short = selfcheck('What is conserved?', 'The volume is conserved.', ['the volume', 'is conserved']);
  assert.deepEqual(repeats(`${short}${footer('the volume of the cylinder restated in the stem')}`), []);
  assert.deepEqual(repeats(`${item}${footer('which places that line outside the visible range')}`, BIO), [], 'Chemistry only');
});

test('a multiple choice keyed to a unit is refused under sibling closings that print it (12.1\'s mol/L/s)', () => {
  const units = rule(/the sibling items' closings print this unit/);
  const KIN = 'content/physical-sciences/chemistry/12-kinetics/01-chemical-reaction-rates.md';
  const stem = 'If the rate of decomposition of ammonia, NH₃, at 1150 K is $2.10 \\times 10^{-6}$ mol/L/s, what is the rate of production of nitrogen and hydrogen?';
  const choice = (question) => `{{< multiplechoice\n  question="${question}"\n  answer="mol/L/s"\n  hint="Reread the subsection on reaction rates."\n>}}\nmol/L/s\nmol/L\nL/mol/s\n{{< /multiplechoice >}}\n`;
  const parts = fillin({ question: `${stem} Enter the rate of production of N₂ in mol/L/s.`, answer: '1.05e-6' })
    + fillin({ question: `${stem} Enter the rate of production of H₂ in mol/L/s.`, answer: '3.15e-6' });
  const failing = parts + choice(`${stem} In what unit is a rate of production expressed?`);
  assert.equal(units(failing, KIN).length, 1);
  // The same choice as its own exercise passes: no sibling closing prints its key.
  const passing = parts + choice('A reaction rate is a change in concentration per unit time. In what unit is it expressed?');
  assert.deepEqual(units(passing, KIN), []);
  assert.deepEqual(units(failing, BIO), [], 'Chemistry only');
});

test('a hint that names a subsection by another item\'s key is refused (2.7\'s binary acids, 12.2\'s catalyst)', () => {
  const named = rule(/names a subsection by the words of another item's key/);
  const NOM = 'content/physical-sciences/chemistry/02-atoms-molecules-and-ions/07-chemical-nomenclature.md';
  const name = (hint) => `{{< textin\n  question="Name the following compound: HBr."\n  answer="hydrogen bromide"\n  hint="${hint}"\n>}}\n\n`;
  const recall = '{{< textin\n  question="What is the term for a compound that contains hydrogen and one other element, bonded in a way that imparts acidic properties?"\n  answer="binary acid"\n  hint="Reread the last two subsections of the body, on naming acids."\n>}}\n';
  assert.equal(named(name('Name the element written first. For a compound of hydrogen, recall from the subsection on binary acids when an acid’s name is used.') + recall, NOM).length, 1);
  assert.deepEqual(named(name('Name the element written first. For a compound of hydrogen, recall from the next-to-last subsection of the body when an acid’s name is used.') + recall, NOM), []);
  // The key in another clause of the hint is not the subsection's name.
  assert.deepEqual(named(name('A binary acid is named from its anion; reread the last subsection of the body.') + recall, NOM), []);
  assert.deepEqual(named(name('Recall from the subsection on binary acids when an acid’s name is used.') + recall, BIO), [], 'Chemistry only');
});
