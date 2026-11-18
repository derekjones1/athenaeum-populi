import test from 'node:test';
import assert from 'node:assert/strict';
import {
  colourOutsideVisible, dashHyphens, italicDescriptiveSubscripts, keyedColour, miscountedConfigurations, proseOnly,
  sourceNumberReferences, stemWavelengths, subshellLabelSlips,
} from './chemistry-readings.mjs';

const CESIUM = 'The emission spectrum of cesium contains a line whose frequency is $3.45 \\times 10^{14}$ Hz. What are the wavelength and energy per photon of the line? What color is the line?';

test('a stem\'s light is read as a wavelength, from a wavelength, a frequency, or a photon\'s energy', () => {
  const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1, `${actual} is not about ${expected}`);
  near(stemWavelengths(CESIUM)[0], 869);
  near(stemWavelengths(CESIUM.replace('3.45', '6.53'))[0], 459);
  near(stemWavelengths('A photon of light produced by a surgical laser has an energy of $3.027 \\times 10^{-19}$ J. What is the color of the emitted light?')[0], 656);
  near(stemWavelengths('A line at 589.0 nm is seen. What color is it?')[0], 589);
  near(stemWavelengths('A line at 5890 Å is seen.')[0], 589);
  near(stemWavelengths('A line of wavelength $4.59 \\times 10^{-7}$ m is seen.')[0], 459);
  near(stemWavelengths('Light of frequency $5.09 \\times 10^{14}\\ \\text{s}^{-1}$ is seen.')[0], 589);
  // An energy that is no photon's, and a number with no unit of light.
  assert.deepEqual(stemWavelengths('The reaction releases 55.8 kJ. What color is the flame?'), []);
  assert.deepEqual(stemWavelengths('Burning 2.50 g of the salt colors the flame. What color is it?'), []);
});

test('a colour keyed to light outside the visible range is refused (6.1\'s cesium line, "red" at 869 nm)', () => {
  assert.match(colourOutsideVisible(CESIUM, 'The color of the line is red.'), /keyed "red", and the stem's light is 869 nm, outside the visible range .* it is infrared/);
  assert.match(colourOutsideVisible('A line has a wavelength of 250 nm. What color is the line?', 'violet'), /250 nm.*ultraviolet/);
  // The ruled answer names no colour.
  assert.equal(colourOutsideVisible(CESIUM, 'The line is in the infrared, outside the visible range, so it is not seen as a color.'), null);
  // Visible light keyed a colour, whichever colour: band borders are a convention.
  assert.equal(colourOutsideVisible(CESIUM.replace('3.45', '6.53'), 'The color of the line is blue.'), null);
  assert.equal(colourOutsideVisible('A complex absorbs light of 510 nm. What color does the solution appear?', 'red'), null);
  // No light in the stem, or no colour asked: nothing to hold the key to.
  assert.equal(colourOutsideVisible('What color is a solution of copper(II) sulfate?', 'blue'), null);
  assert.equal(colourOutsideVisible('A line has a wavelength of 869 nm. Is it visible?', 'It is infrared.'), null);
  // A stem with a visible line beside an invisible one says nothing sure about the key.
  assert.equal(colourOutsideVisible('One line is at 869 nm and another at 656 nm. What color is the visible line?', 'red'), null);
});

test('keyedColour reads the colour a key names only when the item asks for one', () => {
  assert.equal(keyedColour('What color is the line?', 'The color of the line is blue.'), 'blue');
  assert.equal(keyedColour('What is the color of the emitted light?', 'Red'), 'red');
  assert.equal(keyedColour('What color is the line?', 'The line is in the infrared.'), null, '"infrared" is not "red"');
  assert.equal(keyedColour('Name the region of the spectrum.', 'red'), null);
});

test('a subshell label with an italic shell number is refused; the quantum number alone is math', () => {
  const written = (text) => subshellLabelSlips(text).map((hit) => hit.written);
  // 6.4, before the chapter 6 ruling.
  assert.deepEqual(written('the highest $n$s electrons are lost, and then the $(n - 1)$d or $(n - 2)$f electrons'), ['$n$s', '$(n - 1)$d', '$(n - 2)$f']);
  assert.deepEqual(written('a configuration of $n$s²$n$p³'), ['$n$s', '$n$p']);
  assert.deepEqual(written('the *n*s subshell'), ['*n*s']);
  assert.deepEqual(written('$n\\text{s}^2$ and $(n-1)\\mathrm{d}$'), ['n\\text{s}', '(n-1)\\mathrm{d}']);
  assert.equal(subshellLabelSlips('the $(n - 1)$d electrons')[0].upright, '(n − 1)d');
  for (const fine of ['the highest ns electrons, then the (n − 1)d electrons', 'the shell with $n = 4$', 'for $n$ shells', 'the value of $n$ determines', 'an *n*-fold axis', '$n$so', '$\\sin\\text{s}$']) {
    assert.deepEqual(written(fine), [], fine);
  }
});

test('a bare f or i subscript is refused; an index of a sum, and a word that starts with the letter, are not', () => {
  const written = (tex) => italicDescriptiveSubscripts(tex).map((hit) => hit.written);
  // 6.2 lines 87–89, before the ruling.
  assert.deepEqual(written('\\Delta E = E_f - E_i'), ['_f', '_i']);
  assert.deepEqual(written('\\frac{1}{n_{i}^2} - \\frac{1}{n_{f}^2}'), ['_{i', '_{f']);
  assert.deepEqual(written('T_{i,rebar}'), ['_{i']);
  assert.deepEqual(written('\\Delta H^\\circ_f'), ['_f']);
  assert.equal(italicDescriptiveSubscripts('E_f')[0].upright, '_\\text{f}');
  for (const fine of [
    'E_\\text{f} - E_\\text{i}', 'T_\\text{final}', 'c_\\text{iron}', 'q_\\text{in}', '\\Delta H^\\circ_\\text{f}', 'K_\\text{f}',
    '\\sum_i (\\text{fractional abundance} \\times \\text{isotopic mass})_i', '\\sum_{i} x_i', 'x_{fus}', 'n_{\\text{i}}', 'a_{ij}', 'm_l', 'p_x',
  ]) assert.deepEqual(written(fine), [], fine);
});

test('a hyphen where the source means a dash is refused; a compound word and a subtraction are not', () => {
  const written = (text) => dashHyphens(proseOnly(text)).map((hit) => hit.written);
  // 6.1's three sentences and its frequency ranges, as the source prints them.
  assert.deepEqual(written('The particles do not travel with the wave-they all stay in place.'), ['wave-they']);
  assert.deepEqual(written('They cannot be heated in a microwave oven-they do not contain water.'), ['oven-they']);
  assert.deepEqual(written('AM radio uses 540-1700 kHz, and all radio 3 kHz-300 GHz.'), ['540-1700 kHz', '3 kHz-300 GHz']);
  assert.equal(dashHyphens('with the wave-they stay')[0].dash, 'wave—they');
  assert.equal(dashHyphens('uses 540-1700 kHz')[0].dash, '540–1700 kHz');
  for (const fine of [
    'half-wavelengths of the string', 'a ball-and-stick model', 'a do-it-yourself kit', 'the wave—they all stay', '540–1700 kHz', 'carbon-14 and cobalt-60',
    '2-methylpropane and 1,2-dichloroethane', 'a 28.4-g ice cube', 'from −23.0 °C to −1.0 °C', 'the value $x-3 m$ and $10^{-3}$ m', 'see [the page](https://example.org/a-b/3-5-g) for more',
    'a state-of-the-art laser', 'the 2019-05-20 release', 'pages 12-15',
  ]) assert.deepEqual(written(fine), [], fine);
});

test('a table or figure cited by its source number is refused outside the footer and the Source notes', () => {
  const written = (text) => sourceNumberReferences(text).map((hit) => hit.written);
  // 5.2's stem, before the chapter 5 ruling.
  assert.deepEqual(written('(Specific heats are in Table 5.1 of [Section 5.1](/physical-sciences/chemistry/05-thermochemistry/01-energy-basics/).)'), ['Table 5.1']);
  assert.deepEqual(written('hint="Read the wavelength off Figure 6.13."'), ['Figure 6.13']);
  for (const fine of [
    '<small>This section is adapted from Chemistry 2e. Changes: references to Table 5.1 written as “the table of specific heats”.</small>',
    '*Source note:* in the US Energy Information Administration’s Table 1.3, natural gas supplies 32%.',
    'The item says so. *(Source note: the source cites Table 5.1.)*',
    'the table of specific heats of common substances in Section 5.1', 'a table of 5.1 g samples', 'Section 5.1', 'Appendix G', 'Tables 5 and 6',
  ]) assert.deepEqual(written(fine), [], fine);
});

test('a configuration in a figure description holds its element\'s electrons (6.4\'s curium, 97 for element 96)', () => {
  const wrong = (description, notes) => miscountedConfigurations(description, notes).map((hit) => [hit.written, hit.counted, hit.expected]);
  // The periodic table read out box by box: an outer configuration stands on the noble gas below.
  assert.deepEqual(wrong('Period 7: 95 Am 7s²5f⁷; 96 Cm 7s²5f⁹; 97 Bk 7s²5f⁸6d¹; 103 Lr 7s²5f¹⁴6d¹.'), [['96 Cm 7s²5f⁹', 97, 96]]);
  assert.deepEqual(wrong('1 H 1s¹; 2 He 1s²; 10 Ne 2s²2p⁶; 26 Fe 4s²3d⁶; 36 Kr 4s²3d¹⁰4p⁶; 58 Ce 6s²4f¹5d¹; 81 Tl 6s²4f¹⁴5d¹⁰6p¹; 104 Rf 7s²5f¹⁴6d².'), []);
  // A full configuration, a bracketed core, and the three ways a description attaches one.
  assert.deepEqual(wrong('N, 1s²2s²2p³; O, 1s²2s²2p⁴; F, 1s²2s²2p⁵'), []);
  assert.deepEqual(wrong('O, 1s²2s²2p⁵'), [['O 1s²2s²2p⁵', 9, 8]]);
  assert.deepEqual(wrong('the symbol P, the configuration 1s²2s²2p⁶3s²3p³, and five dots'), []);
  assert.deepEqual(wrong('the symbol O and the configuration 1s²2s²2p³'), [['O 1s²2s²2p³', 7, 8]]);
  assert.deepEqual(wrong('Na: [Ne]3s¹ and Na⁺: 1s²2s²2p⁶, beside Cl⁻: [Ne]3s²3p⁶'), []);
  assert.deepEqual(wrong('Na⁺: [Ne]3s¹'), [['Na⁺ [Ne]3s¹', 11, 10]]);
  // The box's atomic number is read against its symbol too.
  assert.equal(miscountedConfigurations('27 Fe 4s²3d⁶')[0].number, 26);
  // The source figure's own misprint, kept as printed and named in a Source note.
  const note = '*Source note:* The table prints curium as 7s²5f⁹, where the database gives [Rn]7s²5f⁷6d¹.';
  assert.deepEqual(wrong('96 Cm 7s²5f⁹', note), []);
  assert.deepEqual(wrong('96 Cm 7s²5f¹⁰', note).length, 1, 'a different miscount is not the one the note names');
  // A configuration no element is attached to is not judged.
  assert.deepEqual(wrong('the notation 1s¹, and the configuration 1s²2s²2p⁶3s¹ with its last part mauve'), []);
});

// ---- chapter 10's consistency readings ----------------------------------------
import { chapterLandingLinks, choiceSelfcheckStems, DATA_FIGURES_NOTE, dataFiguresNoteVariants, hintAppendixUnlinked, sharedStemPair } from './chemistry-readings.mjs';
import { lintLeaks } from './lints-leaks.mjs';

const CH10 = 'content/physical-sciences/chemistry/10-liquids-and-solids/04-phase-diagrams.md';
const LAUNDRY = 'If a severe storm results in the loss of electricity, it may be necessary to use a clothesline to dry laundry. If it does not snow, will they dry anyway?';
const mcItem = (question, hint, options = ['yes', 'no']) => `{{< multiplechoice question="${question}" answer="${options[0]}" hint="${hint}" >}}\n${options.join('\n')}\n{{< /multiplechoice >}}`;
const scItem = (question, hint) => `{{< selfcheck question="${question}" hint="${hint}" >}}\nModel.\n===CHECKS===\none\n{{< /selfcheck >}}`;

test('a choice and the self-check after it under one stem share every sentence and the hint (F4, 10.4\'s frozen laundry)', () => {
  const H = 'Ask which phase changes the phase diagram of water allows below 0 °C.';
  const pair = (mcq, mch, scq, sch, options) => choiceSelfcheckStems(`${mcItem(mcq, mch, options)}\n\n${scItem(scq, sch)}\n`);
  // The incident: the choice dropped "Explain your answer." and carried its own hint.
  const [hit] = pair(LAUNDRY, 'Reread the paragraph on the solid-vapor curve.', `${LAUNDRY} Explain your answer.`, H);
  assert.deepEqual(hit.dropped, ['Explain your answer.']);
  assert.equal(hit.hintDiffers, true);
  // The fix, and a choice that adds its own closing after the shared stem (4.2's "Which reactant is the oxidant?").
  assert.deepEqual(pair(`${LAUNDRY} Explain your answer.`, H, `${LAUNDRY} Explain your answer.`, H), []);
  assert.deepEqual(pair('Is this a redox reaction? Identify the oxidant. Which reactant is the oxidant?', H, 'Is this a redox reaction? Identify the oxidant.', H), []);
  assert.equal(pair('Is this a redox reaction? Which reactant is the oxidant?', 'Other.', 'Is this a redox reaction?', H).length, 1, 'a differing hint under an added closing');
  // "Explain your reasoning." in the middle (1.1), and the stem's lettered list its options carry (9.6).
  assert.deepEqual(pair('Identify the statement. The pressure rises.', H, 'Identify the statement. Explain your reasoning. The pressure rises.', H)[0].dropped, ['Explain your reasoning.']);
  const [gas] = pair('Under which conditions is a gas ideal? Which set gives ideal behavior?', H, 'Under which conditions is a gas ideal? Explain. (a) high pressure; (b) low pressure', H, ['high pressure', 'low pressure']);
  assert.deepEqual(gas.dropped, ['Explain.']);
  // Not one stem: two lettered parts of one lead-in (7.6), two questions after one opening (9.6), unrelated neighbours.
  assert.deepEqual(pair('Does the following molecule or ion have a dipole moment? XeF₂.', H, 'Does the following molecule or ion have a dipole moment? PH₂⁻.', 'Other.'), []);
  assert.deepEqual(pair('In the example above, a flask holds CO₂. Which equation gives the higher pressure?', H, 'In the example above, a flask holds CO₂. Why are the pressures not very different, and why do they differ at all?', 'Other.'), []);
  assert.deepEqual(pair('Which property does the statement describe?', H, 'Why would you not sit around a burning match?', 'Other.'), []);
  // Only a self-check DIRECTLY after the choice is its pair.
  const between = `${mcItem(LAUNDRY, 'Other.')}\n\n{{< textin question="Name it." answer="x" hint="h" >}}\n\n${scItem(`${LAUNDRY} Explain your answer.`, H)}\n`;
  assert.deepEqual(choiceSelfcheckStems(between), []);
  assert.equal(sharedStemPair({ question: 'A. B?', hint: H }, { question: 'C. D?', hint: H }), null);
  // The lint, on Chemistry only.
  const page = `Body.\n\n${mcItem(LAUNDRY, 'Other.')}\n\n${scItem(`${LAUNDRY} Explain your answer.`, H)}\n`;
  const errors = lintLeaks(page, CH10).errors;
  assert.ok(errors.some((error) => /the choice's question drops "Explain your answer\."/.test(error)));
  assert.ok(errors.some((error) => /its hint and the hint of the self-check after it, under the same stem, differ/.test(error)));
  assert.ok(!lintLeaks(page, 'content/life-health-sciences/biology/01-the-study-of-life/01-the-science-of-biology.md').errors.some((error) => /same stem/.test(error)));
});

test('a section page links a chapter reference to the section meant, not the chapter landing (F2, 10.1)', () => {
  const incident = 'Applying the skills acquired in the [chapter on chemical bonding and molecular geometry](/physical-sciences/chemistry/07-chemical-bonding-and-molecular-geometry/), all of these compounds';
  assert.deepEqual(chapterLandingLinks(incident).map((hit) => hit.target), ['/physical-sciences/chemistry/07-chemical-bonding-and-molecular-geometry/']);
  assert.deepEqual(chapterLandingLinks('the chapter on chemical bonding and molecular geometry ([Section 7.6 Molecular Structure and Polarity](/physical-sciences/chemistry/07-chemical-bonding-and-molecular-geometry/06-molecular-structure-and-polarity/))'), [], 'the section meant');
  assert.deepEqual(chapterLandingLinks('[Appendix E](/physical-sciences/chemistry/appendices/e-water-properties/) and [OpenStax](https://openstax.org/books/chemistry-2e/pages/10-1)'), []);
  assert.deepEqual(chapterLandingLinks('<small>Changes: [Chapter 7](/physical-sciences/chemistry/07-chemical-bonding-and-molecular-geometry/)</small>'), [], 'the footer');
  assert.deepEqual(chapterLandingLinks('the C₆₀ molecule (shown in the opening figure of [Chapter 7 Chemical Bonding and Molecular Geometry](/physical-sciences/chemistry/07-chemical-bonding-and-molecular-geometry/))'), [], '7.3: the opening figure is on the landing');
  assert.deepEqual(chapterLandingLinks('as in the [photograph of liquid oxygen held between the poles of a magnet](/physical-sciences/chemistry/08-advanced-theories-of-covalent-bonding/) that opens this chapter'), [], '8.4');
  // The lint reads section pages only: a landing's own links are its business.
  assert.ok(lintLeaks(`${incident}.\n`, 'content/physical-sciences/chemistry/10-liquids-and-solids/01-intermolecular-forces.md').errors.some((error) => /goes to a chapter's landing/.test(error)));
  assert.ok(!lintLeaks(`${incident}.\n`, 'content/physical-sciences/chemistry/10-liquids-and-solids/_index.md').errors.some((error) => /goes to a chapter's landing/.test(error)));
});

test('the "figures from the data" Source note is chapter 9\'s one sentence (F6, 10.6)', () => {
  assert.deepEqual(dataFiguresNoteVariants(`Text.\n\n${DATA_FIGURES_NOTE}\n`), []);
  const variant = '*Source note:* the answer graded here is written to the significant figures its data give.';
  assert.deepEqual(dataFiguresNoteVariants(`Text.\n\n${variant}\n`).map((hit) => hit.written), [variant]);
  assert.equal(dataFiguresNoteVariants(`${DATA_FIGURES_NOTE} The source rounds early.\n`).length, 1, 'one sentence, nothing after it');
  assert.equal(dataFiguresNoteVariants('*(Source note: the answer is written to the significant figures its data give.)*').length, 1, 'the parenthesis form');
  assert.deepEqual(dataFiguresNoteVariants('<small>Changes: the Check Your Learning keyed to the significant figures its data give, with a Source note</small>'), [], 'the footer');
  assert.deepEqual(dataFiguresNoteVariants('*Source note:* the answer graded for this exercise is not the one the source prints.'), [], 'another note');
  assert.ok(lintLeaks(`Text.\n\n${variant}\n`, CH10).errors.some((error) => /word for word/.test(error)));
});

test('an item whose hint names an appendix its question does not link is measured (F1)', () => {
  const t = (question, hint) => `{{< fillin question="${question}" answer="1" hint="${hint}" >}}`;
  assert.deepEqual(hintAppendixUnlinked(t('What is the vapor pressure of water at 40 °C?', 'Find the value in Appendix E.')).map((hit) => hit.appendix), ['E']);
  assert.deepEqual(hintAppendixUnlinked(t('(The properties of water are in [Appendix E](/physical-sciences/chemistry/appendices/e-water-properties/).)', 'Find the value in Appendix E.')), []);
  assert.deepEqual(hintAppendixUnlinked(t('Use [Appendix D](/physical-sciences/chemistry/appendices/d-fundamental-physical-constants/).', 'Appendix E and Appendix D.'))[0].linksOther, ['D']);
});
