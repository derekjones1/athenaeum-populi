// Chemistry 2e chapter 10's new shapes, read by both source gates against the
// pinned CNXML itself (docs/briefs/chemistry/run.md §1 step 6a, the hand
// probe): an ordering's part re-listed, a choice said first and then
// reasoned, a choice among values weighed for plausibility, an enthalpy
// option written as its symbol, a graph reading restated in a second unit, a
// lettered choice answered by letter and words, one value per substance of a
// table ("X = ionic"), an oxidation number stated beside a percent, and a
// worked answer's steps under a closing that names the quotient unit asked.
// Each is held to the key the source prints and refuses a wrong one.
// Skipped where the bundle is not checked out (CI fetches it).
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DISCLOSED_DEVIATIONS, addedSentences, checkCorpus, judgeKeyedUnit, readingInAskedUnit, swappedWords } from './verify-source-keys.mjs';
import { coverage, sourceExercises } from './verify-source-coverage.mjs';
import { keyedUnits } from '../lib/keyed-units.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const MODULES = { 1: 'm68761', 2: 'm68764', 3: 'm68768', 4: 'm68769', 5: 'm68770', 6: 'm68773' };
const file = (id) => path.join(root, 'sources/openstax/osbooks-chemistry-bundle/modules', id, 'index.cnxml');
const skip = !Object.values(MODULES).every((id) => existsSync(file(id)));
const M = skip ? {} : Object.fromEntries(Object.entries(MODULES).map(([key, id]) => [key, readFileSync(file(id), 'utf8')]));
const units = skip ? {} : Object.fromEntries(Object.entries(M).map(([key, xml]) => [key, keyedUnits(xml)]));
const judge = (section, item) => judgeKeyedUnit(item, units[section]);
const status = (section, item) => judge(section, item)?.status;
const fillin = (question, answer, form = '') => ({ type: 'fillin', question, answer, form });
const mc = (question, answer, options) => ({ type: 'multiplechoice', question, answer, options });
const ORDER = 'Type the symbols in the order you rank them, separated by <.';

test('the reading of a graph drops a value the answer restates in another unit, and only that', () => {
  assert.equal(readingInAskedUnit('Approximately 40 kPa (0.4 atm)', '… Enter the pressure you read from the graph, in kilopascals.').trim(), 'Approximately 40 kPa');
  assert.equal(readingInAskedUnit('Approximately 40 kPa (0.4 atm)', '… Enter the pressure you read from the graph, in atmospheres.'), 'Approximately 40 kPa (0.4 atm)', 'the restated unit asked: nothing dropped, so 40 is outside a key of 0.4');
  assert.equal(readingInAskedUnit('about 17–18 mL', '… Enter the volume you read from the graph, in milliliters.'), 'about 17–18 mL');
});

test('10.1: an ordering part re-listed is its part, and a choice said first is the choice, both gates', { skip }, () => {
  const lead = 'Arrange the following set of compounds in order of increasing boiling point temperature:';
  const relisted = `${lead} C₂H₆, C₃H₈, CH₄. ${ORDER}`;
  const read = judge(1, { type: 'textin', question: relisted, answer: 'CH₄ < C₂H₆ < C₃H₈', form: 'ordering' });
  assert.deepEqual([read?.exercise.id, read?.status], ['fs-idm50276560(c)', 'confirmed'], 'not the Check Your Learning that shares C₂H₆ and C₃H₈');
  assert.equal(status(1, { type: 'textin', question: relisted, answer: 'C₂H₆ < C₃H₈ < CH₄', form: 'ordering' }), 'key-differs');
  const page = `{{< textin question="${relisted}" answer="CH₄ < C₂H₆ < C₃H₈" answerForm="ordering" hint="h" >}}\n`;
  assert.equal(coverage(page, sourceExercises(M[1]), { keyedOnly: true }).find((verdict) => verdict.id === 'fs-idm50276560(c)')?.status, 'rendered');
  // "ICl. ICl and Br₂ have similar masses …": the reason names both options.
  const icl = 'Predict which will have the higher boiling point: ICl or Br₂. Explain your reasoning.';
  assert.equal(status(1, mc(icl, 'ICl', ['ICl', 'Br₂'])), 'confirmed');
  assert.equal(status(1, mc(icl, 'Br₂', ['ICl', 'Br₂'])), 'key-differs');
  // The same three options on every part: "dispersion forces" is not the longer option that holds it.
  const forces = ['dispersion forces', 'dipole-dipole attraction and dispersion forces', 'hydrogen bonding, dipole-dipole attraction, and dispersion forces'];
  const solid = (formula) => `Identify the intermolecular forces present in the following solid: ${formula}.`;
  assert.equal(status(1, mc(solid('CH₃CH₂CH₃'), forces[0], forces)), 'confirmed');
  assert.equal(status(1, mc(solid('CH₃CH₂CH₃'), forces[1], forces)), 'key-differs');
  assert.equal(status(1, mc(solid('CH₃CH₂Cl'), forces[1], forces)), 'confirmed');
  assert.equal(status(1, mc(solid('CH₃CH₂Cl'), forces[0], forces)), 'key-differs');
});

test('10.3: plausibility weighed, an enthalpy option by its symbol, a reading in its asked unit, one value written twice', { skip }, () => {
  const values = ['28 kJ/mol', '9.8 kJ/mol', '−8.4 kJ/mol'];
  const cs2 = 'The enthalpy of vaporization of CO₂(*l*) is 9.8 kJ/mol. Would you expect the enthalpy of vaporization of CS₂(*l*) to be 28 kJ/mol, 9.8 kJ/mol, or −8.4 kJ/mol? Discuss the plausibility of each of these answers.';
  assert.equal(status(3, mc(cs2, values[0], values)), 'confirmed');
  assert.equal(status(3, mc(cs2, values[1], values)), 'key-differs');
  assert.equal(status(3, mc(cs2, values[2], values)), 'key-differs');
  const enthalpies = ['$\\Delta H_\\text{fusion}$', '$\\Delta H_\\text{vaporization}$'];
  const ticl4 = 'Titanium tetrachloride, TiCl₄, has a melting point of −23.2 °C and has a $\\Delta H_\\text{fusion}$ = 9.37 kJ/mol. For TiCl₄, which will likely have the larger magnitude: $\\Delta H_\\text{fusion}$ or $\\Delta H_\\text{vaporization}$? Explain your reasoning.';
  assert.equal(status(3, mc(ticl4, enthalpies[1], enthalpies)), 'confirmed', '"the heat of vaporization" names the symbol');
  assert.equal(status(3, mc(ticl4, enthalpies[0], enthalpies)), 'key-differs');
  const camp = 'The boiling point of ethyl ether was measured to be 10 °C at a base camp on the slopes of Mount Everest. Use the graph of the vapor pressures of four liquids above to determine the approximate atmospheric pressure at the camp. Enter the pressure you read from the graph, in kilopascals.';
  assert.equal(status(3, fillin(camp, '40', 'reading:20')), 'confirmed', 'the 0.4 atm beside it is the same reading');
  assert.equal(status(3, fillin(camp, '50', 'reading:20')), 'key-differs');
  const ethanol = 'At 20.0 °C, the vapor pressure of ethanol is 5.95 kPa, and at 63.5 °C, its vapor pressure is 53.3 kPa. Use this information to estimate the enthalpy of vaporization for ethanol.';
  assert.equal(status(3, fillin(`${ethanol} Enter the enthalpy of vaporization in kJ/mol.`, '41.4', 'sig-figs:3 last-digit:1')), 'confirmed');
  assert.equal(status(3, fillin(`${ethanol} Enter the enthalpy of vaporization in kJ/mol.`, '41360', 'sig-figs:4 last-digit:1')), 'key-differs', 'the J/mol number under a kJ/mol closing');
  assert.equal(status(3, fillin(`${ethanol} Enter the enthalpy of vaporization in kilojoules per mole.`, '41.4', 'sig-figs:3 last-digit:1')), 'confirmed');
});

test('10.5: a lettered choice answered by letter and words, and one value per substance of a table, both gates', { skip }, () => {
  const crystals = ['ionic', 'covalent network', 'metallic', 'amorphous', 'molecular crystals'];
  const o2 = 'At very low temperatures oxygen, O₂, freezes and forms a crystalline solid. Which best describes these crystals?';
  assert.equal(status(5, mc(o2, 'molecular crystals', crystals)), 'confirmed');
  assert.equal(status(5, mc(o2, 'covalent network', crystals)), 'key-differs');
  const solids = ['ionic solid', 'metallic solid', 'molecular solid', 'covalent network solid'];
  const a = 'Substance A is shiny, conducts electricity well, and melts at 975 °C. Substance A is likely a(n):';
  assert.equal(status(5, mc(a, 'metallic solid', solids)), 'confirmed');
  assert.equal(status(5, mc(a, 'ionic solid', solids)), 'key-differs');
  const types = ['metallic', 'ionic', 'molecular', 'covalent network'];
  const table = (substance) => `Classify the following substance in the table above as either a metallic, ionic, molecular, or covalent network solid: ${substance}.`;
  assert.equal(status(5, mc(table('X'), 'ionic', types)), 'confirmed');
  assert.equal(status(5, mc(table('Y'), 'metallic', types)), 'confirmed');
  assert.equal(status(5, mc(table('Z'), 'covalent network', types)), 'confirmed');
  assert.equal(status(5, mc(table('Y'), 'ionic', types)), 'key-differs', 'X\'s value under Y');
  // "network covalent" in the stem, "covalent network" in the key: one category.
  const sic = 'Identify the type of crystalline solid (metallic, network covalent, ionic, or molecular) formed by the following substance: SiC.';
  const stemTypes = ['metallic', 'network covalent', 'ionic', 'molecular'];
  assert.equal(status(5, mc(sic, 'network covalent', stemTypes)), 'confirmed');
  assert.equal(status(5, mc(sic, 'molecular', stemTypes)), 'key-differs');
  const page = [`{{< multiplechoice question="${o2}" answer="molecular crystals" hint="h" >}}\n${crystals.join('\n')}\n{{< /multiplechoice >}}`,
    `{{< multiplechoice question="${a}" answer="metallic solid" hint="h" >}}\n${solids.join('\n')}\n{{< /multiplechoice >}}`].join('\n\n');
  const verdicts = coverage(page, sourceExercises(M[5]), { keyedOnly: true });
  for (const id of ['fs-idm10952384', 'fs-idp33413008']) assert.equal(verdicts.find((verdict) => verdict.id === id)?.status, 'rendered', id);
});

test('10.6: an oxidation number stated beside a percent, and a worked answer held to the unit its closing asks', { skip }, () => {
  const rutile = 'What is the percent by mass of titanium in rutile, a mineral that contains titanium and oxygen, if structure can be described as a closest packed array of oxide ions with titanium ions in one-half of the octahedral holes? What is the oxidation number of titanium?';
  const percent = `${rutile} Enter the percent by mass of titanium.`;
  const oxidation = `${rutile} Enter the oxidation state of Ti as a signed number, the sign first, as +2 or −1.`;
  assert.equal(status(6, fillin(percent, '59.95', 'sig-figs:4 last-digit:1')), 'confirmed');
  assert.equal(status(6, fillin(oxidation, '4', 'whole-number')), 'confirmed');
  assert.equal(status(6, fillin(oxidation, '59.95', 'whole-number')), 'key-differs', 'the percent under the oxidation closing');
  assert.equal(status(6, fillin(percent, '4', 'whole-number')), 'key-differs', 'the oxidation number under the percent closing');
  const nickel = 'The edge length of the unit cell for nickel is 0.3524 nm. The density of Ni is 8.90 g/cm³. Does nickel crystallize in a simple cubic structure? Explain. Enter the density nickel would have if it crystallized in a simple cubic structure, in g/cm³.';
  assert.equal(status(6, fillin(nickel, '2.23', 'sig-figs:3 last-digit:1')), 'confirmed');
  assert.equal(status(6, fillin(nickel, '9.746\\times10^{-23}', 'sig-figs:4 last-digit:1')), 'key-differs', 'a step\'s mass is no density');
  assert.equal(status(6, fillin(nickel, '58.693', 'sig-figs:5 last-digit:1')), 'key-differs');
  const ni = 'The edge length of the unit cell for nickel is 0.3524 nm. The density of Ni is 8.90 g/cm³. Does nickel crystallize in a simple cubic structure? Explain.';
  assert.equal(status(6, mc(ni, 'no', ['yes', 'no'])), 'confirmed');
  assert.equal(status(6, mc(ni, 'yes', ['yes', 'no'])), 'key-differs');
});

test('a word of the source\'s answer changed is read: a swap, a number, and not a spacing, a typo, or a part named by position', () => {
  const source = 'The lower the temperature, the less the intermolecular forces are overcome, and so the less viscous the liquid.';
  assert.deepEqual(swappedWords('The lower the temperature, the less the intermolecular forces are overcome, and so the more viscous the liquid.', source), [['less', 'more']]);
  assert.deepEqual(swappedWords(source, source), []);
  assert.deepEqual(swappedWords('At 40 °C, water at low pressure is a vapor; at pressures higher than about 55 torr, it converts into a liquid.',
    'At 40 °C, water at low pressure is a vapor; at pressures higher than about 75 torr, it converts into a liquid.'), [['75', '55']], 'a number is substance');
  const typo = ['only one cubic hole can be occupied by a cation for each anion', 'only one cubic hole can be occupied be a cation for each anion'];
  assert.deepEqual(swappedWords(...typo), [], 'a typo set right needs no disclosure');
  assert.deepEqual(swappedWords(...typo, { all: true }), [['be', 'by']], '…but is an edit a filed solution deviation covers');
  assert.deepEqual(swappedWords('so the volume in the second graph is the larger one', 'so the volume in b graph is the larger one'), [], 'a part named by its position');
  assert.deepEqual(swappedWords('More words were added at the end of it all. A whole new sentence.', 'More words were added at the end of it all.'), [], 'an addition is no swap');
});

test('10.2, 10.4: a model answer that changes a word carries it; a drawing with words beside it says so', { skip }, () => {
  const molasses = 'You may have heard someone use the figure of speech “slower than molasses in winter” to describe a process that occurs slowly. Explain why this is an apt idiom, using concepts of molecular size and shape, molecular interactions, and the effect of changing temperature.';
  const said = 'Temperature has an effect on intermolecular forces: The higher the temperature, the greater the kinetic energies of the molecules and the greater the extent to which their intermolecular forces are overcome, and so the more fluid (less viscous) the liquid. The lower the temperature, the less the intermolecular forces are overcome, and so the ';
  const corrected = judge(2, { type: 'selfcheck', question: molasses, model: `${said}more viscous the liquid.`, figures: [] });
  assert.deepEqual([corrected.status, corrected.swaps], ['verbatim', [['less', 'more']]], 'verbatim by coverage, the swap carried for the deviation');
  assert.equal(judge(2, { type: 'selfcheck', question: molasses, model: `${said}less viscous the liquid.`, figures: [] }).swaps, undefined);
  const lead = 'Elemental carbon has one gas phase, one liquid phase, and two different solid phases, as shown in the phase diagram above: Circle each triple point on the phase diagram.';
  const image = '{{< mediafigure src="chemistry/CNX_Chem_10_04_Exercise10d_img" kind="diagram" alt="a" >}}\n{{< /mediafigure >}}';
  const bare = judge(4, { type: 'selfcheck', question: lead, model: image, figures: ['CNX_Chem_10_04_Exercise10d_img'] });
  assert.deepEqual([bare.status, bare.added], ['confirmed', undefined]);
  const worded = judge(4, { type: 'selfcheck', question: lead, model: `${image}\n\nA second triple point is where the diamond, graphite, and liquid regions meet.`, figures: ['CNX_Chem_10_04_Exercise10d_img'] });
  assert.deepEqual([worded.status, worded.added], ['confirmed', true]);
});

// The landed pages, read whole: each filed deviation is in use, and a key
// deviation filed on a Check Your Learning wins over the data-differs
// reading for its part (10.6's silver radius, 409 pm × √2 / 4, no atomic mass).
const landed = (page) => path.join(root, 'content/physical-sciences/chemistry/10-liquids-and-solids', page);
const pagesHere = !skip && ['02-properties-of-liquids.md', '04-phase-diagrams.md', '06-lattice-structures-in-crystalline-solids.md'].every((page) => existsSync(landed(page)));
test('10.2, 10.4, 10.6 as landed: no filed solution or key deviation reads stale, and the silver radius is no register row', { skip: !pagesHere }, () => {
  for (const [page, errata] of [['02-properties-of-liquids.md', [3288, 3289]], ['04-phase-diagrams.md', [3292, 3293, 3294, 3295]], ['06-lattice-structures-in-crystalline-solids.md', [3297, 3300]]]) {
    const { failures } = checkCorpus(root, { contentRoot: `content/physical-sciences/chemistry/10-liquids-and-solids/${page}`, register: 'check' });
    for (const erratum of errata) assert.ok(!failures.some((failure) => failure.detail.includes(`(erratum ${erratum}) but the page now agrees`)), `${page}: erratum ${erratum} in use`);
    assert.ok(!failures.some((failure) => /fs-idp79703472#check\(a\)/.test(failure.detail)), `${page}: the silver radius is a disclosed correction`);
  }
});

// A word of the source's answer changed with no `solution` deviation is a
// failure of the gate: 10.1's protein answer prints "principal" for the
// source's "principle" (erratum 3301). Read with its entry, the page is clean
// of it; read with the entry withheld, the swap fails at the item's line.
const intermolecular = 'content/physical-sciences/chemistry/10-liquids-and-solids/01-intermolecular-forces.md';
test('10.1: an undisclosed word change fails the gate, and its solution deviation clears it', { skip: skip || !existsSync(path.join(root, intermolecular)) }, () => {
  const filed = DISCLOSED_DEVIATIONS.find((entry) => entry.page === intermolecular && entry.erratum === 3301);
  assert.equal(filed?.kind, 'solution');
  const swap = (failure) => /changes a word of the source's answer \("principle" → "principal"\)/.test(failure.detail);
  const disclosed = checkCorpus(root, { contentRoot: intermolecular, register: 'check' });
  assert.ok(!disclosed.failures.some(swap), 'disclosed: no failure');
  assert.deepEqual(disclosed.undisclosed, []);
  const withheld = checkCorpus(root, { contentRoot: intermolecular, register: 'check', deviations: DISCLOSED_DEVIATIONS.filter((entry) => entry !== filed) });
  const failed = withheld.failures.filter(swap);
  assert.equal(failed.length, 1, 'withheld: one failure');
  assert.equal(failed[0].page, intermolecular);
  assert.match(failed[0].detail, /^fs-idp57460448: /);
  assert.ok(failed[0].line > 0);
});

test('10.1: a run of the source sentence\'s content words replaced is a change, not only a word or two (erratum 3302)', { skip }, () => {
  const question = 'On the basis of intermolecular attractions, explain the differences in the boiling points of *n*-butane (−1 °C) and chloroethane (12 °C), which have similar molar masses.';
  const rewritten = 'Only dispersion forces are available to hold *n*-butane, a nonpolar molecule, in the liquid state. Chloroethane, however, also has rather large dipole interactions because of the Cl–C bond; the interaction, therefore, is stronger, leading to a higher boiling point.';
  const verdict = judge(1, { type: 'selfcheck', question, model: rewritten, figures: [] });
  assert.ok(['verbatim', 'reworded'].includes(verdict.status), 'the coverage floor passes it');
  assert.ok(verdict.swaps?.some(([from, to]) => /dipole/.test(from) && /dispersion/.test(to)), 'the replaced run is carried for the deviation');
  assert.deepEqual(swappedWords('the cat sat on the mat today in the sun', 'the cat sat on the mat today in the sun'), []);
  assert.deepEqual(swappedWords('so the gas was a weak and diffuse blue cloud', 'so the gas was a weak and diffuse blue cloud indeed'), [], 'a word added at the end is no replacement');
});

test('10.2: an added sentence in a model answer is listed for the checker; a verbatim answer lists none; a drawing\'s words are their own kind', { skip }, () => {
  const question = 'The surface tension and viscosity of water at several different temperatures are given in the table above. As temperature increases, what happens to the viscosity of water? Explain why this occurs, in terms of molecular interactions and the effect of changing temperature.';
  const source = 'The same trend in viscosity is seen as in surface tension, and for the same reason.';
  const opened = judge(2, { type: 'selfcheck', question, model: `Viscosity also decreases as temperature increases. ${source}`, figures: [] });
  assert.equal(opened.status, 'reworded');
  assert.deepEqual(opened.addedSentences, ['Viscosity also decreases as temperature increases.']);
  assert.equal(judge(2, { type: 'selfcheck', question, model: source, figures: [] }).addedSentences, undefined);
  assert.deepEqual(addedSentences(source, source), []);
  const lead = 'Elemental carbon has one gas phase, one liquid phase, and two different solid phases, as shown in the phase diagram above: Circle each triple point on the phase diagram.';
  const image = '{{< mediafigure src="chemistry/CNX_Chem_10_04_Exercise10d_img" kind="diagram" alt="a" >}}\n{{< /mediafigure >}}';
  const drawn = judge(4, { type: 'selfcheck', question: lead, model: `${image}\n\nThe point where the graphite, liquid, and vapor regions meet is circled.`, figures: ['CNX_Chem_10_04_Exercise10d_img'] });
  assert.deepEqual([drawn.addedSentences, drawn.describing], [undefined, ['The point where the graphite, liquid, and vapor regions meet is circled.']]);
});

test('10.6 as landed: one exercise with a key entry and a solution entry (erratum 3304) — each item takes the entry of its own kind', { skip: !pagesHere }, () => {
  const page = 'content/physical-sciences/chemistry/10-liquids-and-solids/06-lattice-structures-in-crystalline-solids.md';
  const filed = DISCLOSED_DEVIATIONS.filter((entry) => entry.page === page && entry.exercise === 'fs-idm39353008#check');
  if (filed.length < 2) return; // the two entries are the shape under test
  const { failures, notes } = checkCorpus(root, { contentRoot: page, register: 'check', verbose: true });
  const nickel = failures.filter((failure) => /fs-idm39353008#check|erratum 3304|"23" → "227"/.test(failure.detail));
  assert.deepEqual(nickel, [], 'neither entry stale, the worked answer disclosed by its solution entry');
  assert.equal(notes.filter((note) => /on purpose \(erratum 3304\)/.test(note)).length >= 2, true, 'the fill-in by the key entry, the self-check by the solution entry');
});

test('an added sentence is not: the source\'s bare answer in the question\'s words, a short label, a "See" for a dropped figure link; a clause ending at a colon is still read', () => {
  // 1.4: the bare value set in a sentence in the question's own words.
  assert.deepEqual(addedSentences('The density of the foam sample is 0.230 g/mL.', '0.230 g/mL', 'Calculate the density of the foam sample. What is its density?'), []);
  // 6.3: math symbols read as words ("l", "m l").
  assert.deepEqual(addedSentences('For an orbital of type (x): $l = 0$, $m_l = 0$.', 'x. l = 0, m _l = 0', 'Identify the orbital type (x) and give its l and m l values.'), []);
  // 9.6: "See <link target-id=…/>." reads as "See".
  assert.deepEqual(addedSentences('See the graph of $Z$ against pressure above.', '(d) See .', 'Explain how the compressibility factor varies.'), []);
  // A page label before a sample claims nothing.
  assert.deepEqual(addedSentences('Sample answer:', 'Carbon-12, 12 C', 'Pick an element.'), []);
  // 7.4: a clause ending at a colon is joined to what follows, and read.
  assert.deepEqual(addedSentences('Worked from the drawing, every atom has a formal charge of zero: N 5 − 2 − 3 = 0, and each F 7 − 6 − 1 = 0.', 'NF _3 ;', 'Write the Lewis structure and determine the formal charge of each atom.'),
    ['Worked from the drawing, every atom has a formal charge of zero: N 5 − 2 − 3 = 0, and each F 7 − 6 − 1 = 0.']);
  // 10.2 27(b): a real addition stays listed.
  assert.deepEqual(addedSentences('Viscosity also decreases as temperature increases. The same trend in viscosity is seen as in surface tension, and for the same reason.',
    '(b) The same trend in viscosity is seen as in surface tension, and for the same reason.', 'As temperature increases, what happens to the viscosity of water? Explain why this occurs.'), ['Viscosity also decreases as temperature increases.']);
});

test('7.3: beside an image the source answers with as well as words, the first page sentence is the drawing\'s describing sentence, and the source\'s "Eight electrons:" label is not joined to it', { skip: !existsSync(path.join(root, 'sources/openstax/osbooks-chemistry-bundle/modules/m68739/index.cnxml')) }, () => {
  const units7 = keyedUnits(readFileSync(path.join(root, 'sources/openstax/osbooks-chemistry-bundle/modules/m68739/index.cnxml'), 'utf8'));
  const unit = units7.find((candidate) => /As 3/.test(candidate.partText ?? '') && (candidate.answerMedia || []).length);
  assert.ok(unit, 'the As³⁻ part with its image');
  const verdict = judgeKeyedUnit({ type: 'selfcheck', question: `${unit.lead} ${unit.partText}`, model: `Eight electrons:\n\n{{< mediafigure src="chemistry/${unit.answerMedia[0]}" kind="diagram" alt="a" >}}\n{{< /mediafigure >}}\n\nThe symbol As has four lone pairs around it, and the charge 3− is written at its upper right.`, figures: unit.answerMedia }, units7);
  assert.equal(verdict.addedSentences, undefined);
  assert.deepEqual(verdict.describing, ['The symbol As has four lone pairs around it, and the charge 3− is written at its upper right.']);
});
