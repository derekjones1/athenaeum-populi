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
