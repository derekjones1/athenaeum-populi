/**
 * The --figures screen of chemistry-shapes.mjs: every numeric source key
 * beside the figures its stem's data carry and the heat its question asks,
 * before the wave. Fixtures are chapter 5's stems, the run whose hand-made
 * candidate list named 4 of the 13 keys that later moved
 * (docs/briefs/chemistry/run.md, "The run facts screen EVERY numeric key").
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { figureRows, stemData } from './chemistry-shapes.mjs';

const unit = (stem, answer) => ({ keyed: true, stem, answer });
const BENZENE = 'When 0.963 g of benzene, C 6 H 6 , is burned in a bomb calorimeter, the temperature of the calorimeter increases by 8.39 °C. The bomb has a heat capacity of 784 J/°C and is submerged in 925 mL of water.';

test('the benzene key, −39.0 kJ under "How much heat was produced", flags sign', () => {
  const [row] = figureRows(unit(`${BENZENE} How much heat was produced by the combustion of the benzene sample?`, '−39.0 kJ'));
  assert.equal(row.key, '−39.0');
  assert.equal(row.sign, '−');
  assert.equal(row.heat, 'amount');
  assert.deepEqual(row.flags, ['sign']);
  // The source prints it as q with its working, a sentence answer: still read.
  const [printed] = figureRows(unit(`${BENZENE} How much heat was produced by the combustion of the benzene sample?`, 'q _rx = –39.0 kJ (the reaction produced 39.0 kJ of heat)'));
  assert.equal(printed.key, '–39.0');
  assert.deepEqual(printed.flags, ['sign']);
});

test('a negative key under a signed ask, and a positive key under an amount, do not flag sign', () => {
  const [signed] = figureRows(unit(`${BENZENE} How much heat is involved in the reaction?`, '−39.0 kJ'));
  assert.equal(signed.heat, 'signed');
  assert.deepEqual(signed.flags, []);
  const [amount] = figureRows(unit(`${BENZENE} How much heat was produced by the combustion of the benzene sample?`, '39.0 kJ'));
  assert.equal(amount.sign, '+');
  assert.deepEqual(amount.flags, []);
});

test('a key with more figures than the fewest datum flags figures; one with as many does not', () => {
  const stem = 'Calculate the heat capacity, in joules and in calories per degree, of the following: 45.8 g of nitrogen gas';
  const [joules, calories] = figureRows(unit(stem, '47.6 J/°C; 11.38 cal °C^{−1}'));
  assert.deepEqual([joules.key, joules.figures, joules.flags], ['47.6', '3', []]);
  assert.deepEqual([calories.key, calories.figures, calories.flags], ['11.38', '4', ['figures']]);
  assert.deepEqual(calories.data, { figures: 3, printed: '45.8' });
});

test('a multi-quantity answer is one row per numeral, in order', () => {
  const rows = figureRows(unit('How much heat, in joules and in calories, is required to heat a 28.4-g (1-oz) ice cube from −23.0 °C to −1.0 °C?', '1310 J; 313 cal'));
  assert.deepEqual(rows.map((row) => row.key), ['1310', '313']);
});

test('a key whose trailing zeros make its count ambiguous flags zeros, never figures', () => {
  const [row] = figureRows(unit('Calculate the enthalpy of combustion of butane, C 4 H 10 ( g ) for the formation of H 2 O( g ) and CO 2 ( g ). The enthalpy of formation of butane is −126 kJ/mol.', '−2660 kJ mol^{−1}'));
  assert.equal(row.figures, '3–4');
  assert.equal(row.ambiguous, true);
  assert.deepEqual(row.flags, ['zeros']);
});

test('a stem with no measured data has no minimum and flags no figures', () => {
  const [row] = figureRows(unit('Calculate the enthalpy of solution (Δ H for the dissolution) per mole of CaCl 2 (refer to ).', '81 kJ mol^{−1}'));
  assert.equal(row.data, null);
  assert.deepEqual(row.flags, []);
  // "exactly 1 mole" is a count the question fixes, not a measurement.
  const [manganese] = figureRows(unit('How many kilojoules of heat will be released when exactly 1 mole of manganese, Mn, is burned to form Mn 3 O 4 ( s ) at standard state conditions?', '459.6 kJ'));
  assert.equal(manganese.data, null);
  assert.equal(manganese.heat, 'amount');
  assert.deepEqual(manganese.flags, []);
});

test('the stem data: decimals, scientific notation, and integers followed by a unit; not counts, labels, or "exactly"', () => {
  const read = (stem) => stemData(stem).map((datum) => `${datum.printed}:${datum.figures}`);
  // An integer's trailing zeros are counted; a formula's subscripts are no data.
  assert.deepEqual(read('The addition of 3.15 g of Ba(OH) 2 ·8H 2 O to a solution of 1.52 g of NH 4 SCN in 100 g of water'), ['3.15:3', '1.52:3', '100:3']);
  // A flattened power of ten ("10 5") is read whole.
  assert.deepEqual(read('that of gasoline, 1.28 × 10 5 kJ/gal'), ['1.28 × 10^{5}:3']);
  // A 1 (a per-one statement or a definition), a count of moles, and "exactly N" are left out.
  assert.deepEqual(read('less than 1 Calorie per can; 2 moles of NO; exactly 2240 lb; Example 5.3; 4.00 moles'), ['4.00:3']);
  // Potassium is not a kelvin.
  assert.deepEqual(read('2 K [ Ag ( CN ) 2 ] ( a q ) at 298 K'), ['298:3']);
});

test('a change of temperature the stem prints is a datum with the figures its last place gives', () => {
  const stem = 'When a 0.740-g sample of trinitrotoluene (TNT), C 7 H 5 N 2 O 6 , is burned in a bomb calorimeter, the temperature increases from 23.4 °C to 26.9 °C. The heat capacity of the calorimeter is 534 J/°C, and it contains 675 mL of water. How much heat was produced by the combustion of the TNT sample?';
  const [row] = figureRows(unit(stem, '11.7 kJ'));
  assert.deepEqual(row.data, { figures: 2, printed: '23.4 → 26.9' });
  assert.deepEqual(row.flags, ['figures']);
  // Two temperatures not joined by "to" are no change.
  const steam = stemData('What mass of water will provide the same amount of heat when cooled from 95.0 to 35.0 °C, as the heat provided when 100 g of steam is cooled from 110 °C to 100 °C?');
  assert.deepEqual(steam.filter((datum) => datum.printed.includes('→')).map((datum) => `${datum.printed}:${datum.figures}`), ['95.0 → 35.0:3', '110 → 100:2']);
});

test('a key a sentence answer states is read; a unit with no numeric key has no row', () => {
  const [copper] = figureRows(unit('A 248-g piece of copper is dropped into 390 mL of water at 22.6 °C. The final temperature of the water was measured as 39.9 °C. Calculate the initial temperature of the piece of copper.', 'The initial temperature of the copper was 335.6 °C.'));
  assert.deepEqual([copper.key, copper.sentence, copper.flags], ['335.6', true, ['figures']]);
  assert.deepEqual(figureRows(unit('What is the identity of the metal?', 'Copper is a likely candidate.')), []);
  assert.deepEqual(figureRows({ keyed: false, stem: 'How much heat is produced?', answer: '' }), []);
});
