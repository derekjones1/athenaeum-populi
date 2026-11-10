/**
 * The gate probe: a chapter's keyed units run through the two source gates
 * before the chapter is authored. Fixtures are the shapes that had to be
 * fixed before chapter 2 and the one shape the probe can only report.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { probeModule } from './chemistry-gate-probe.mjs';

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
