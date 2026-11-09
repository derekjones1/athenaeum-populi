/**
 * Significant figures: reading a numeral as it is WRITTEN, rounding it, and
 * comparing a typed numeral with a measured-quantity key.
 *
 * A measured or computed quantity in a science book is keyed with the digits
 * its data support ("0.674 M", "4.585 × 10²² atoms"), and the digits are part
 * of the answer: `0.67442` is the calculator readout, not the result. Value
 * grading alone cannot say so — it either compares at 1e-9, which refuses the
 * learner whose molar mass came from another table and ended one digit off, or
 * it would need a tolerance that also waves through the unrounded readout.
 * So the comparison here is made at the key's own precision:
 *
 *   - the response is rounded to the key's N significant figures and compared
 *     with the key, allowing K units in the Nth digit (K = 0 for a rounding
 *     drill, whose last digit is determined; K = 1 for a result computed from
 *     measured data, whose last digit is the uncertain one);
 *   - a response whose value agrees but which is written with more or fewer
 *     significant figures than N is `form`, never `correct` — and never
 *     `incorrect`, because the chemistry was right.
 *
 * Everything is exact. A numeral is held as sign · mantissa · 10^exponent with
 * a BigInt mantissa, read off the typed digits, so `31.65` is exactly on the
 * rounding boundary instead of whichever side its binary double fell on.
 *
 * Framework-independent and engine-free: check-answer.mjs supplies the
 * preprocessed writing and decides everything that is not arithmetic (labels,
 * units, the other form tokens).
 */

const DECIMAL = String.raw`(?:\d+\.\d*|\.\d+|\d+)`;
const POWER_OF_TEN = String.raw`\s*(?:\\times|\\cdot|\*)\s*10\s*\^\s*(?:\{\s*([+-]?\d+)\s*\}|(\d))`;
// A calculator readout, `4.585e22` or `4.585E-3`. preprocess() braces the
// letter of a whole-number mantissa before a sign (`3{e}-2`, so that a
// variable `e` keeps its reading in algebra); in a measured-number response
// there is no variable, so both spellings are the power of ten.
const E_NOTATION = String.raw`\s*(?:[eE]|\{[eE]\})\s*([+-]?\s*\d+)`;
const NUMERAL = new RegExp(String.raw`^([+-]?)\s*(${DECIMAL})(?:${POWER_OF_TEN}|${E_NOTATION})?`);

/**
 * Read the numeral that OPENS `text` — a plain decimal, scientific notation
 * (`a\times10^{n}`), or a calculator's E-notation — and return it with
 * whatever follows:
 *
 *   { negative, mantissa, exponent, sigMin, sigMax, scientific, written, rest }
 *
 * `mantissa · 10^exponent` is the magnitude, exactly as typed. `sigMin` and
 * `sigMax` bound the number of significant figures the writing shows: they
 * differ only for a whole number ending in zeros with no decimal point
 * (`350` shows two or three; `350.` shows three), which is the one writing
 * the significant-figure rules themselves call ambiguous. A zero value shows
 * none. Null when `text` does not open with a numeral.
 */
export function readNumeral(text) {
  const source = String(text ?? '').trim();
  const match = source.match(NUMERAL);
  if (!match) return null;
  const [whole, sign, decimal, bracedPower, barePower, ePower] = match;
  const power = bracedPower ?? barePower ?? ePower;
  const [integerPart, fractionPart = ''] = decimal.split('.');
  const hasPoint = decimal.includes('.');
  const digits = (integerPart + fractionPart).replace(/^0+/, '');
  let sigMax = digits.length;
  let sigMin = hasPoint ? sigMax : digits.replace(/0+$/, '').length;
  if (digits === '') { sigMin = 0; sigMax = 0; }
  return {
    negative: sign === '-',
    mantissa: BigInt(digits || '0'),
    exponent: -fractionPart.length + (power === undefined ? 0 : Number(power.replace(/\s+/g, ''))),
    sigMin,
    sigMax,
    scientific: power !== undefined,
    written: whole,
    rest: source.slice(whole.length),
  };
}

/** A JS number as an exact-decimal numeral (15 significant digits), or null. */
export function numeralFromNumber(value) {
  if (!Number.isFinite(value)) return null;
  const [coefficient, power] = Math.abs(value).toExponential(14).split('e');
  const numeral = readNumeral(`${value < 0 ? '-' : ''}${coefficient}e${Number(power)}`);
  // The padded zeros of toExponential are not digits anyone wrote.
  let { mantissa, exponent } = numeral;
  while (mantissa !== 0n && mantissa % 10n === 0n) { mantissa /= 10n; exponent += 1; }
  const length = mantissa === 0n ? 0 : mantissa.toString().length;
  return { ...numeral, mantissa, exponent, sigMin: length, sigMax: length };
}

const pow10 = (n) => 10n ** BigInt(n);
const digitCount = (mantissa) => (mantissa === 0n ? 0 : mantissa.toString().length);

/**
 * The magnitude rounded to `figures` significant figures. Two rounding rules
 * are in use for a dropped 5 with nothing after it: round half up (most
 * calculators and most courses) and round half to even (what OpenStax
 * Chemistry 2e section 1.5 teaches). `halfEven` picks; a caller that only
 * asks "does this round to the key?" tries both.
 */
export function roundToFigures({ mantissa, exponent }, figures, { halfEven = false } = {}) {
  const length = digitCount(mantissa);
  if (length <= figures) return { mantissa, exponent };
  const cut = length - figures;
  const unit = pow10(cut);
  const quotient = mantissa / unit;
  const remainder = mantissa % unit;
  const half = unit / 2n;
  const up = halfEven
    ? remainder > half || (remainder === half && quotient % 2n === 1n)
    : remainder >= half;
  return { mantissa: quotient + (up ? 1n : 0n), exponent: exponent + cut };
}

/** sign · mantissa scaled to the power of ten `to` (which must not exceed the exponent). */
const scaled = (numeral, to) => (numeral.negative ? -1n : 1n) * numeral.mantissa * pow10(numeral.exponent - to);

/** Is |a − b| at most `units` · 10^unitExponent? Exact. */
function within(a, b, units, unitExponent) {
  const to = Math.min(a.exponent, b.exponent, unitExponent);
  const difference = scaled(a, to) - scaled(b, to);
  return (difference < 0n ? -difference : difference) <= BigInt(units) * pow10(unitExponent - to);
}

/**
 * The power of ten of the key's Nth significant figure: the place the
 * comparison is made at, and the unit the last-digit allowance counts in.
 */
export function lastFigureExponent(key, figures) {
  return key.exponent + digitCount(key.mantissa) - figures;
}

/**
 * Grade a numeral response against a numeral key under `figures`
 * significant figures and an allowance of `lastDigit` units in the last one.
 *
 *   { verdict: 'correct' }
 *   { verdict: 'form', reason: 'too-many' | 'too-few' }
 *   { verdict: 'incorrect' }
 *
 * `correct` — the response shows `figures` significant figures and sits
 * within the allowance. `too-many` — it shows more, and rounded to `figures`
 * (by either rounding rule) it sits within the allowance: the unrounded
 * readout of a right calculation. `too-few` — it shows fewer, and it is what
 * an allowed value rounds to at the figures it does show: right as far as it
 * goes. Everything else is `incorrect`; the allowance is never widened for a
 * response written to fewer figures, or `0.6` would stand for `0.674`.
 *
 * A key that does not itself show `figures` significant figures is an
 * authoring error, reported as `form` against itself by the caller's
 * self-grade — this function assumes nothing about it beyond a nonzero value.
 */
export function compareMeasured(response, key, { figures, lastDigit = 0 }) {
  if (key.mantissa === 0n || response.mantissa === 0n) return { verdict: 'incorrect' };
  const place = lastFigureExponent(key, figures);
  const near = (numeral) => within(numeral, key, lastDigit, place);

  if (response.sigMin <= figures && figures <= response.sigMax) {
    if (near(response)) return { verdict: 'correct' };
  }
  if (response.sigMin > figures) {
    const rounded = [false, true].map((halfEven) => ({ ...response, ...roundToFigures(response, figures, { halfEven }) }));
    return rounded.some(near) ? { verdict: 'form', reason: 'too-many' } : { verdict: 'incorrect' };
  }
  // Fewer figures than asked: the response must be exactly what an allowed
  // value rounds to at each count the writing could be showing.
  const allowed = [];
  for (let step = -lastDigit; step <= lastDigit; step += 1) {
    const to = Math.min(key.exponent, place);
    const value = scaled(key, to) + BigInt(step) * pow10(place - to);
    allowed.push({ negative: value < 0n, mantissa: value < 0n ? -value : value, exponent: to });
  }
  for (let shown = response.sigMin; shown <= Math.min(response.sigMax, figures - 1); shown += 1) {
    if (shown < 1) continue;
    for (const value of allowed) {
      for (const halfEven of [false, true]) {
        const rounded = { ...value, ...roundToFigures(value, shown, { halfEven }) };
        if (within(response, rounded, 0, Math.min(response.exponent, rounded.exponent))) {
          return { verdict: 'form', reason: 'too-few' };
        }
      }
    }
  }
  return { verdict: 'incorrect' };
}
