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
    ['10^{12}', 1, 1],          // a bare power of ten: the coefficient 1, unwritten
    ['10^{-7}', 1, 1],
    ['-10^3', 1, 1],
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
    ['0.676', '0.674', 3, 1, 'incorrect', 'near'],
    ['0.675', '0.674', 3, 0, 'incorrect', 'near'],
    ['0.676', '0.674', 3, 2, 'correct'],
    // the same value in another notation
    ['6.74\\times10^{-1}', '0.674', 3, 1, 'correct'],
    ['674e-3', '0.674', 3, 1, 'correct'],
    // too many figures: the readout of a right calculation
    ['0.67442', '0.674', 3, 1, 'form', 'too-many'],
    ['0.6746', '0.674', 3, 1, 'form', 'too-many'],     // rounds to 0.675, inside the allowance
    ['0.6756', '0.674', 3, 1, 'incorrect', 'near'],            // rounds to 0.676
    ['0.6746', '0.674', 3, 0, 'incorrect', 'near'],            // rounds to 0.675, and none is allowed
    ['31.57', '31.6', 3, 0, 'form', 'too-many'],
    ['31.65', '31.6', 3, 0, 'form', 'too-many'],       // half to even reaches the key
    ['31.65', '31.7', 3, 0, 'form', 'too-many'],       // and half up reaches this one
    // too few figures: right as far as it goes, and only then
    ['0.67', '0.674', 3, 1, 'form', 'too-few'],
    ['0.7', '0.674', 3, 1, 'incorrect'],               // two figures short: a round number is no evidence
    ['0.68', '0.674', 3, 1, 'incorrect'],              // the allowance is not carried down to fewer figures
    ['0.68', '0.674', 3, 0, 'incorrect'],
    ['0.6', '0.674', 3, 1, 'incorrect'],               // the allowance is never one unit of a coarser digit
    ['0.66', '0.674', 3, 1, 'incorrect'],
    // whole numbers ending in zeros
    ['350', '350', 2, 1, 'correct'],
    ['3.5\\times10^{2}', '350', 2, 1, 'correct'],
    ['340', '350', 2, 1, 'correct'],
    ['370', '350', 2, 1, 'incorrect', 'near'],
    ['355', '350', 2, 1, 'form', 'too-many'],
    ['350.', '350', 2, 1, 'form', 'too-many'],
    ['350', '350', 3, 0, 'correct'],
    ['1300', '1250', 4, 0, 'incorrect'],               // 1250 at two figures: two short of four
    ['1200', '1250', 4, 0, 'incorrect'],
    ['1250', '1254', 4, 0, 'form', 'too-few'],         // one short, and what 1254 rounds to
    ['1260', '1255', 4, 0, 'form', 'too-few'],         // half up of 1255 at three figures
    ['1260', '1265', 4, 0, 'form', 'too-few'],         // half to even of 1265
    ['1400', '1250', 4, 0, 'incorrect'],
    // a power-of-ten boundary inside the allowance
    ['10.0', '9.99', 3, 1, 'correct'],
    ['1.00\\times10^{1}', '9.99', 3, 1, 'correct'],
    ['0.990', '1.00', 3, 1, 'correct'],
    ['0.99', '1.00', 3, 1, 'correct'],                 // two figures, but written to the key's own hundredths
    ['0.99', '1.00', 3, 0, 'incorrect', 'near'],
    ['10.00', '9.99', 3, 1, 'correct'],                // four figures, the same hundredths
    // sign, scientific notation, zero
    ['-494', '-494', 3, 1, 'correct'],
    ['494', '-494', 3, 1, 'incorrect'],
    ['-493', '-494', 3, 1, 'correct'],
    ['4.586\\times10^{22}', '4.585\\times10^{22}', 4, 1, 'correct'],
    ['4.585\\times10^{21}', '4.585\\times10^{22}', 4, 1, 'incorrect'],
    ['4.5857\\times10^{22}', '4.585\\times10^{22}', 4, 1, 'form', 'too-many'],
    ['4.6\\times10^{22}', '4.585\\times10^{22}', 4, 1, 'incorrect'],
    ['4.59\\times10^{22}', '4.585\\times10^{22}', 4, 1, 'form', 'too-few'],
    // the stem's own round number is not "right as far as it goes" (1.6: a 90 kg class limit, key 89.4)
    ['90', '89.4', 3, 1, 'incorrect'],
    ['89', '89.4', 3, 1, 'form', 'too-few'],
    // the key's own number with its zeros left off is the answer written short, at any count (4.3: 8.00 mol)
    ['8', '8.00', 3, 1, 'form', 'too-few'],
    ['8.', '8.00', 3, 1, 'form', 'too-few'],
    ['8.0', '8.00', 3, 1, 'form', 'too-few'],
    ['9', '8.00', 3, 1, 'incorrect'],
    ['0.05', '0.0500', 3, 0, 'form', 'too-few'],
    ['5\\times10^{-2}', '0.0500', 3, 0, 'form', 'too-few'],
    // a near miss is still incorrect, and says so: where rounding at each step lands (chapter 4)
    ['34.9', '35.0', 3, 0, 'incorrect', 'near'],
    ['34.8', '35.0', 3, 0, 'incorrect', 'near'],
    ['34.7', '35.0', 3, 0, 'incorrect'],
    ['34.93', '35.0', 3, 0, 'incorrect', 'near'],       // an unrounded readout of the same miss
    ['73.5', '73.3', 3, 1, 'incorrect', 'near'],
    ['86.53', '86.56', 4, 1, 'incorrect', 'near'],
    ['86.52', '86.56', 4, 1, 'incorrect'],
    ['3.5\\times10^{-3}', '3.4\\times10^{-3}', 2, 0, 'incorrect', 'near'],
    ['3.6\\times10^{-3}', '3.4\\times10^{-3}', 2, 0, 'incorrect'],   // two units of a two-figure key is no near miss
    ['2.4', '1.2', 2, 0, 'incorrect'],
    // written to the wrong count of figures and not the key's own number: nothing to say
    ['35', '35.4', 3, 0, 'form', 'too-few'],
    ['36', '35.4', 3, 0, 'incorrect'],
    // a bare power of ten is the coefficient 1, one figure
    ['10^{12}', '1\\times10^{12}', 1, 0, 'correct'],
    ['10^{11}', '1\\times10^{12}', 1, 0, 'incorrect'],
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

test('a worked value is the key\'s second right answer, with or without a count of figures', async (t) => {
  const { withinPercent } = await import('./significant-figures.mjs');
  // The lint's ceiling on how far the two values may part. Exactly on the
  // edge is inside: 0.05% of 2000 is 1.
  assert.equal(withinPercent(readNumeral('2001'), readNumeral('2000'), readNumeral('0.05')), true);
  assert.equal(withinPercent(readNumeral('2001.01'), readNumeral('2000'), readNumeral('0.05')), false);
  assert.equal(withinPercent(readNumeral('-123.88'), readNumeral('123.896'), readNumeral('0.05')), false, 'the sign is part of the number');
  const rows = [
    // [response, key, figures, lastDigit, worked, verdict, reason]
    // No count graded. Chemistry 2e 3.3(a): the source answers 123.896 amu
    // for P4; the book's table gives 4 × 30.97 = 123.88. Graded at the
    // worked value's last place, one unit of it to spare at each end.
    ['123.88', '123.896', null, 0, '123.88', 'correct'],
    ['123.896', '123.896', null, 0, '123.88', 'correct'],
    ['123.89', '123.896', null, 0, '123.88', 'correct'],        // between the two
    ['123.87', '123.896', null, 0, '123.88', 'correct'],        // one unit below the table's value
    ['123.906', '123.896', null, 0, '123.88', 'correct'],       // one unit above the source's
    ['1.2388\\times10^{2}', '123.896', null, 0, '123.88', 'correct'],
    ['123.86', '123.896', null, 0, '123.88', 'incorrect', 'near'],
    ['123.91', '123.896', null, 0, '123.88', 'incorrect', 'near'],
    ['123.84', '123.896', null, 0, '123.88', 'incorrect'],
    // one hydrogen miscounted (1.008 amu)
    ['122.888', '123.896', null, 0, '123.88', 'incorrect'],
    // written one place short: right when a value between the two rounds to it
    ['123.9', '123.896', null, 0, '123.88', 'correct'],          // 4 × 30.97 by the multiplication rule
    ['123.8', '123.896', null, 0, '123.88', 'incorrect'],
    ['256.5', '256.48', null, 0, '256.48', 'correct'],           // S8: the table reaches the key
    ['256.4', '256.48', null, 0, '256.48', 'incorrect'],
    ['256.50', '256.48', null, 0, '256.48', 'incorrect', 'near'], // a zero that claims the hundredths
    ['18.0', '18.015', null, 0, '18.02', 'correct'],
    // two places short and still what it rounds to: told to write its digits
    ['124', '123.896', null, 0, '123.88', 'form', 'too-few'],
    ['18', '18.015', null, 0, '18.02', 'form', 'too-few'],
    ['200', '199.9976', null, 0, '200.00', 'form', 'too-few'],
    ['123', '123.896', null, 0, '123.88', 'incorrect'],
    ['120', '123.896', null, 0, '123.88', 'incorrect'],
    ['100', '97.9950', null, 0, '97.99', 'incorrect'],            // three places short: a round number is no answer
    // Beside the count, the allowance runs from each end.
    // 4.45(b): the source answers 0.08644 g O2; Appendix A's silver gives 0.08642.
    ['0.08642', '0.08644', 4, 1, '0.08642', 'correct'],
    ['0.08643', '0.08644', 4, 1, '0.08642', 'correct'],
    ['0.08641', '0.08644', 4, 1, '0.08642', 'correct'],
    ['0.08645', '0.08644', 4, 1, '0.08642', 'correct'],
    ['0.08640', '0.08644', 4, 1, '0.08642', 'incorrect', 'near'],  // moles cut to three figures
    ['0.08647', '0.08644', 4, 1, '0.08642', 'incorrect', 'near'],
    ['0.08634', '0.08644', 4, 1, '0.08642', 'incorrect'],          // a molar mass rounded to 232
    ['0.086419', '0.08644', 4, 1, '0.08642', 'form', 'too-many'],
    ['0.0864', '0.08644', 4, 1, '0.08642', 'form', 'too-few'],
    // 3.33(a): the source answers 82.24% N for NH3; the book's table gives 82.27
    ['82.27', '82.24', 4, 1, '82.27', 'correct'],
    ['82.25', '82.24', 4, 1, '82.27', 'correct'],
    ['82.28', '82.24', 4, 1, '82.27', 'correct'],
    ['82.2665', '82.24', 4, 1, '82.27', 'form', 'too-many'],
    ['82.2', '82.24', 4, 1, '82.27', 'form', 'too-few'],
    ['82.3', '82.24', 4, 1, '82.27', 'form', 'too-few'],           // what the worked value rounds to
    ['82.29', '82.24', 4, 1, '82.27', 'incorrect', 'near'],
    ['82.31', '82.24', 4, 1, '82.27', 'incorrect'],
    // no allowance at all: every number is in the stem (3.59), and the two values are the whole window
    ['0.4999', '0.5000', 4, 0, '0.4999', 'correct'],
    ['0.5000', '0.5000', 4, 0, '0.4999', 'correct'],
    ['0.5001', '0.5000', 4, 0, '0.4999', 'incorrect', 'near'],
    // the worked value may be the larger of the two, and in scientific notation
    ['5.335\\times10^{22}', '5.337\\times10^{22}', 4, 1, '5.336\\times10^{22}', 'correct'],
    ['5.338\\times10^{22}', '5.337\\times10^{22}', 4, 1, '5.336\\times10^{22}', 'correct'],
    ['5.334\\times10^{22}', '5.337\\times10^{22}', 4, 1, '5.336\\times10^{22}', 'incorrect', 'near'],
    // with no worked value nothing changed
    ['0.08642', '0.08644', 4, 1, null, 'incorrect', 'near'],
  ];
  for (const [response, key, figures, lastDigit, worked, verdict, reason] of rows) {
    await t.test(`${response} against ${key} (${figures ?? 'no'} figures, ±${lastDigit}, worked ${worked})`, () => {
      const result = compareMeasured(readNumeral(response), readNumeral(key),
        { figures, lastDigit, worked: worked === null ? null : readNumeral(worked) });
      assert.equal(result.verdict, verdict);
      assert.equal(result.reason, reason);
    });
  }
});
