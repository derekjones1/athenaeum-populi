/**
 * Run with:  node --test assets/js/lib/math/significant-figures.test.mjs
 *
 * The arithmetic under `sig-figs:<n> last-digit:<k>`. Each table row is a
 * named subtest, as in check-answer.test.mjs.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  compareMeasured, lastFigureExponent, numeralFromNumber, readNumeral, roundToFigures,
} from './significant-figures.mjs';

test('readNumeral counts the significant figures a writing shows', async (t) => {
  // [written, sigMin, sigMax]
  const rows = [
    ['0.674', 3, 3],
    ['0.0045600', 5, 5],        // leading zeros never count, trailing ones after a point always do
    ['.50', 2, 2],
    ['4.50', 3, 3],
    ['100.', 3, 3],             // a written point makes the zeros significant
    ['350', 2, 3],              // a whole number ending in zeros is ambiguous
    ['27440', 4, 5],
    ['1000', 1, 4],
    ['1001', 4, 4],
    ['-494', 3, 3],
    ['4.585\\times10^{22}', 4, 4],
    ['1.0\\times 10^{-3}', 2, 2],
    ['2.15\\times10^5', 3, 3],   // MathLive leaves a one-digit exponent unbraced
    ['35\\cdot10^{1}', 2, 2],
    ['4.585e22', 4, 4],
    ['4.585E-3', 4, 4],
    ['3{e}-2', 1, 1],           // preprocess() braces the e of a whole-number mantissa
    ['0', 0, 0],
    ['0.00', 0, 0],
  ];
  for (const [written, sigMin, sigMax] of rows) {
    await t.test(written, () => {
      const numeral = readNumeral(written);
      assert.ok(numeral, 'reads as a numeral');
      assert.equal(numeral.rest, '', 'the whole writing is the numeral');
      assert.deepEqual([numeral.sigMin, numeral.sigMax], [sigMin, sigMax]);
    });
  }
});

test('readNumeral keeps the value exact and returns what follows the numeral', () => {
  assert.deepEqual(
    (({ negative, mantissa, exponent }) => ({ negative, mantissa, exponent }))(readNumeral('-0.0450')),
    { negative: true, mantissa: 450n, exponent: -4 },
  );
  assert.deepEqual(
    (({ mantissa, exponent, scientific }) => ({ mantissa, exponent, scientific }))(readNumeral('4.585\\times10^{22}')),
    { mantissa: 4585n, exponent: 19, scientific: true },
  );
  assert.equal(readNumeral('0.24g').rest, 'g');
  assert.equal(readNumeral('5eV').rest, 'eV', 'an e with no digits after it is not a power of ten');
  assert.equal(readNumeral('48.3\\%').rest, '\\%');
  assert.equal(readNumeral('6.52/128.9').rest, '/128.9');
  assert.equal(readNumeral('x=3'), null);
  assert.equal(readNumeral('\\frac{1}{2}'), null);
  assert.equal(readNumeral(''), null);
});

test('roundToFigures rounds exactly, by either rule for a dropped 5', async (t) => {
  // [written, figures, half-up, half-even]
  const rows = [
    ['31.57', 3, '316e-1', '316e-1'],
    ['31.65', 3, '317e-1', '316e-1'],     // the boundary a binary double cannot hold
    ['31.75', 3, '318e-1', '318e-1'],
    ['214776', 3, '215e3', '215e3'],
    ['0.67442', 3, '674e-3', '674e-3'],
    ['9.996', 3, '1000e-2', '1000e-2'],   // carries into a new leading digit
    ['2.5', 1, '3e0', '2e0'],
    ['0.674', 5, '674e-3', '674e-3'],     // fewer digits than asked: unchanged
  ];
  for (const [written, figures, halfUp, halfEven] of rows) {
    await t.test(`${written} to ${figures}`, () => {
      const show = ({ mantissa, exponent }) => `${mantissa}e${exponent}`;
      const numeral = readNumeral(written);
      assert.equal(show(roundToFigures(numeral, figures)), halfUp);
      assert.equal(show(roundToFigures(numeral, figures, { halfEven: true })), halfEven);
    });
  }
});

test('lastFigureExponent is the place of the key\'s last significant figure', () => {
  assert.equal(lastFigureExponent(readNumeral('0.674'), 3), -3);
  assert.equal(lastFigureExponent(readNumeral('350'), 2), 1);
  assert.equal(lastFigureExponent(readNumeral('350'), 3), 0);
  assert.equal(lastFigureExponent(readNumeral('4.585\\times10^{22}'), 4), 19);
});

test('compareMeasured grades value and figures together', async (t) => {
  // [response, key, figures, lastDigit, verdict, reason]
  const rows = [
    // the key itself, and the last-digit allowance
    ['0.674', '0.674', 3, 1, 'correct'],
    ['0.675', '0.674', 3, 1, 'correct'],
    ['0.673', '0.674', 3, 1, 'correct'],
    ['0.676', '0.674', 3, 1, 'incorrect'],
    ['0.675', '0.674', 3, 0, 'incorrect'],
    ['0.676', '0.674', 3, 2, 'correct'],
    // the same value in another notation
    ['6.74\\times10^{-1}', '0.674', 3, 1, 'correct'],
    ['674e-3', '0.674', 3, 1, 'correct'],
    // too many figures: the readout of a right calculation
    ['0.67442', '0.674', 3, 1, 'form', 'too-many'],
    ['0.6746', '0.674', 3, 1, 'form', 'too-many'],     // rounds to 0.675, inside the allowance
    ['0.6756', '0.674', 3, 1, 'incorrect'],            // rounds to 0.676
    ['0.6746', '0.674', 3, 0, 'incorrect'],            // rounds to 0.675, and none is allowed
    ['31.57', '31.6', 3, 0, 'form', 'too-many'],
    ['31.65', '31.6', 3, 0, 'form', 'too-many'],       // half to even reaches the key
    ['31.65', '31.7', 3, 0, 'form', 'too-many'],       // and half up reaches this one
    // too few figures: right as far as it goes, and only then
    ['0.67', '0.674', 3, 1, 'form', 'too-few'],
    ['0.7', '0.674', 3, 1, 'form', 'too-few'],
    ['0.68', '0.674', 3, 1, 'form', 'too-few'],        // what the allowed 0.675 rounds to
    ['0.68', '0.674', 3, 0, 'incorrect'],
    ['0.6', '0.674', 3, 1, 'incorrect'],               // the allowance is never one unit of a coarser digit
    ['0.66', '0.674', 3, 1, 'incorrect'],
    // whole numbers ending in zeros
    ['350', '350', 2, 1, 'correct'],
    ['3.5\\times10^{2}', '350', 2, 1, 'correct'],
    ['340', '350', 2, 1, 'correct'],
    ['370', '350', 2, 1, 'incorrect'],
    ['355', '350', 2, 1, 'form', 'too-many'],
    ['350.', '350', 2, 1, 'form', 'too-many'],
    ['350', '350', 3, 0, 'correct'],
    ['1300', '1250', 4, 0, 'form', 'too-few'],         // half up of 1250 at two figures
    ['1200', '1250', 4, 0, 'form', 'too-few'],         // half to even of the same
    ['1400', '1250', 4, 0, 'incorrect'],
    // a power-of-ten boundary inside the allowance
    ['10.0', '9.99', 3, 1, 'correct'],
    ['1.00\\times10^{1}', '9.99', 3, 1, 'correct'],
    ['0.990', '1.00', 3, 1, 'correct'],
    ['0.99', '1.00', 3, 1, 'form', 'too-few'],
    // sign, scientific notation, zero
    ['-494', '-494', 3, 1, 'correct'],
    ['494', '-494', 3, 1, 'incorrect'],
    ['-493', '-494', 3, 1, 'correct'],
    ['4.586\\times10^{22}', '4.585\\times10^{22}', 4, 1, 'correct'],
    ['4.585\\times10^{21}', '4.585\\times10^{22}', 4, 1, 'incorrect'],
    ['4.5857\\times10^{22}', '4.585\\times10^{22}', 4, 1, 'form', 'too-many'],
    ['4.6\\times10^{22}', '4.585\\times10^{22}', 4, 1, 'form', 'too-few'],
    ['0', '0.674', 3, 1, 'incorrect'],
    ['0.000', '0.674', 3, 1, 'incorrect'],
  ];
  for (const [response, key, figures, lastDigit, verdict, reason] of rows) {
    await t.test(`${response} against ${key} (${figures} figures, ±${lastDigit})`, () => {
      const result = compareMeasured(readNumeral(response), readNumeral(key), { figures, lastDigit });
      assert.equal(result.verdict, verdict);
      assert.equal(result.reason, reason);
    });
  }
});

test('numeralFromNumber gives an evaluated value its exact-decimal reading', () => {
  const show = ({ negative, mantissa, exponent }) => `${negative ? '-' : ''}${mantissa}e${exponent}`;
  assert.equal(show(numeralFromNumber(0.674)), '674e-3');
  assert.equal(show(numeralFromNumber(0.1 + 0.2)), '3e-1', 'binary noise below fifteen digits is not a digit');
  assert.equal(show(numeralFromNumber(-4.585e22)), '-4585e19');
  assert.equal(show(numeralFromNumber(214776)), '214776e0');
  assert.equal(numeralFromNumber(Infinity), null);
  assert.equal(numeralFromNumber(NaN), null);
});
