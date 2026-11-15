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
// The multiplication sign of scientific notation, as it reaches the reader:
// MathLive's `\times` and `\cdot`, a typed `*`, and the LETTER x — what a
// plain keyboard has for "×", and what a learner types first (`7.04 x 10^2`
// arrives as `7.04x10^2`). A measured-number response holds no variable, so
// an x between a numeral and a power of ten can be nothing else; until
// November 14, 2026 it was read as a unit and the answer marked wrong with
// no reason, on every scientific-notation item of Chemistry (55 of them).
const TIMES = String.raw`(?:\\times|\\cdot|\*|[xX])`;
const POWER_OF_TEN = String.raw`\s*${TIMES}\s*10\s*\^\s*(?:\{\s*([+-]?\d+)\s*\}|(\d))`;
// A calculator readout, `4.585e22` or `4.585E-3`. preprocess() braces the
// letter of a whole-number mantissa before a sign (`3{e}-2`, so that a
// variable `e` keeps its reading in algebra); in a measured-number response
// there is no variable, so both spellings are the power of ten.
const E_NOTATION = String.raw`\s*(?:[eE]|\{[eE]\})\s*([+-]?\s*\d+)`;
const NUMERAL = new RegExp(String.raw`^([+-]?)\s*(${DECIMAL})(?:${POWER_OF_TEN}|${E_NOTATION})?`);
// A bare power of ten, `10^{12}`: the coefficient 1 left unwritten. It is
// the number 1 × 10¹² showing one significant figure — a learner asked for a
// one-figure answer who types it has the value and the count right, and
// whether the coefficient must be WRITTEN is the `scientific-notation`
// token's question, not this reader's (Chemistry 2e 1.6, the pilot).
// A leading multiplication sign is the same unwritten 1: the book prints an
// SI prefix's factor as "× 10⁻²", and a learner copies it (1.4, the pilot).
const BARE_POWER_OF_TEN = new RegExp(String.raw`^([+-]?)\s*(?:${TIMES}\s*)?10\s*\^\s*(?:\{\s*([+-]?\d+)\s*\}|(\d))`);

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
  const bare = source.match(BARE_POWER_OF_TEN);
  if (bare) {
    return {
      negative: bare[1] === '-',
      mantissa: 1n,
      exponent: Number(bare[2] ?? bare[3]),
      sigMin: 1,
      sigMax: 1,
      scientific: true,
      bare: true,
      written: bare[0].replace(/[xX](?=\s*10\s*\^)/, '\\times'),
      rest: source.slice(bare[0].length),
    };
  }
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
    // The form predicates read `written` (is it scientific notation?), and
    // they know one multiplication sign: a typed letter x is handed on as it.
    written: whole.replace(/[xX](?=\s*10\s*\^)/, '\\times'),
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

/** True when two numerals are the same number, however many zeros each was written with. */
export function sameNumber(a, b) {
  if (a.negative !== b.negative) return false;
  const low = Math.min(a.exponent, b.exponent);
  return a.mantissa * pow10(a.exponent - low) === b.mantissa * pow10(b.exponent - low);
}
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
 * Is |a − b| at most `percent` percent of |b| — plus, where given, `units` ·
 * 10^unitExponent? Exact: `percent` is itself a numeral (`0.1`), so the test
 * is one integer comparison and a value sitting on the edge is on it, not
 * beside it. The source-key gate reads this to tell a key that parts from
 * the source's print by the atomic masses behind it from a wrong key
 * (tools/verify/verify-source-keys.mjs, `dataDifference`); no response is
 * graded by a percent.
 */
export function withinPercent(a, b, percent, { units = 0, unitExponent = 0 } = {}) {
  const to = Math.min(a.exponent, b.exponent, unitExponent);
  const difference = scaled(a, to) - scaled(b, to);
  const distance = difference < 0n ? -difference : difference;
  const size = b.mantissa * pow10(b.exponent - to);
  // distance · 100 ≤ percent · size + units · 100, with percent = mantissa · 10^exponent.
  const lift = percent.exponent < 0 ? pow10(-percent.exponent) : 1n;
  const scale = percent.exponent > 0 ? pow10(percent.exponent) : 1n;
  const spare = BigInt(units) * pow10(unitExponent - to) * 100n * lift;
  return distance * 100n * lift <= percent.mantissa * scale * size + spare;
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
 * The key is ONE value. (A relative band in percent, and then a second
 * "worked" value per item with everything between the two graded right,
 * stood here until November 12 and 13, 2026; both are gone — see "Measured
 * quantities" in check-answer.mjs.)
 *
 *   { verdict: 'correct' }
 *   { verdict: 'form', reason: 'too-many' | 'too-few' }
 *   { verdict: 'incorrect' }
 *
 * `correct` — the response shows `figures` significant figures and sits
 * within the allowance. `too-many` — it shows more, and rounded to `figures`
 * (by either rounding rule) it sits within the allowance: the unrounded
 * readout of a right calculation. `too-few` — it shows ONE figure fewer, and
 * it is what the key rounds to at that count: right as
 * far as it goes. Everything else is `incorrect`; the allowance is never
 * widened for a response written to fewer figures, or `0.6` would stand for
 * `0.674`. A response two or more figures short is `incorrect` as well: at
 * one figure the round numbers a stem prints start to "agree" — typing the
 * stem's own class limit, 90, against the key 89.4 was told it "agrees as
 * far as it goes" (Chemistry 2e 1.6, the pilot) — and the sentence would be
 * a hint. The one exception is the key's own number written short: `8` for
 * `8.00` IS the answer, lacking only its zeros, and is `too-few` at any
 * count (Chemistry 2e 4.3) — exact equality, so 90 against 89.4 is still
 * refused.
 *
 * An `incorrect` verdict carries `reason: 'near'` when the response is
 * written to the right count of figures (or is an unrounded readout that
 * rounds to one) and misses the allowance by at most nearUnits(figures)
 * units of the last figure. That is where rounding at each step of a
 * calculation lands: every such miss measured in Chemistry 2e chapter 4 is
 * one unit outside at two or three figures (3.5 × 10⁻³ for 3.4 × 10⁻³, 34.9
 * for 35.0, 73.5 for 73.3 ± 1) and two at four (86.53 for 86.56 ± 1). One
 * unit of a two-figure key is already one to ten percent of it, so the zone
 * is not wider there, and a one-figure key has none (a unit of it is the
 * whole number: 10¹¹ is not "close" to 10¹²). The verdict is still
 * `incorrect` — no allowance is widened — and the caller only says why a
 * close answer is not the answer. Under an allowance of a unit or more (a
 * factor is looked up) the same is said of a response of four or more
 * figures written ONE figure short and within two units of what the key
 * rounds to there: the answer a table of coarser values gives.
 *
 * A key that does not itself show `figures` significant figures is an
 * authoring error, reported as `form` against itself by the caller's
 * self-grade — this function assumes nothing about it beyond a nonzero value.
 */
/** Units of the last figure, beyond the allowance, that still count as a near miss. */
export const nearUnits = (figures) => (figures <= 1 ? 0 : figures === 2 ? 1 : 2);

/**
 * Two more reasons an `incorrect` verdict may carry (Chemistry 2e chapter 5,
 * November 14, 2026), asked only of a response that is neither right nor a
 * near miss, and never changing the verdict:
 *
 *   'sign'      the response with its sign flipped is right — `802` for a key
 *               of `-802`, `-265` for `265` (an enthalpy change of the wrong
 *               direction). Right means `correct`, or the unrounded readout
 *               of a right value (`too-many`).
 *   'thousand'  the response times 10³ or 10⁻³ is right — `1.31` for 1310 J
 *               (an answer in kJ where J is asked), `1310` for 1.31. Exactly a
 *               thousand: 10¹, 10², and 10⁶ are not a unit's prefix step a
 *               learner takes between J and kJ, g and kg, mL and L, and a value
 *               merely NEAR a thousandfold one is not the key's digits.
 *
 * A response both a thousand off and of the wrong sign (`0.802` for −802) is
 * 'thousand': every word of that sentence is true of it ("the digits are
 * right, the value is a thousand times off"), while the sign sentence would
 * say "the size is right", which it is not. Once the unit is fixed the sign
 * sentence follows.
 */
export function compareMeasured(response, key, spec) {
  const compared = compareAtKeyPrecision(response, key, spec);
  if (compared.verdict !== 'incorrect' || compared.reason || response.mantissa === 0n || key.mantissa === 0n) return compared;
  const right = (numeral) => {
    const verdict = compareAtKeyPrecision(numeral, key, spec);
    return verdict.verdict === 'correct' || (verdict.verdict === 'form' && verdict.reason === 'too-many');
  };
  const flipped = { ...response, negative: !response.negative };
  if (right(flipped)) return { verdict: 'incorrect', reason: 'sign' };
  const thousandfold = (numeral) => [3, -3].some((step) => right({ ...numeral, exponent: numeral.exponent + step }));
  if (thousandfold(response) || thousandfold(flipped)) return { verdict: 'incorrect', reason: 'thousand' };
  return compared;
}

function compareAtKeyPrecision(response, key, { figures, lastDigit = 0 }) {
  if (key.mantissa === 0n || response.mantissa === 0n) return { verdict: 'incorrect' };
  const rules = [false, true];

  const place = lastFigureExponent(key, figures);
  // Within the allowance: `lastDigit` units of the key's last figure.
  const near = (numeral) => within(numeral, key, lastDigit, place);
  // Just outside it: see nearUnits. Only ever asked of a response that
  // `near` has already refused.
  const close = (numeral) => within(numeral, key, lastDigit + nearUnits(figures), place);
  const miss = (numerals) => (numerals.some(close) ? { verdict: 'incorrect', reason: 'near' } : { verdict: 'incorrect' });

  // Written to the key's count of figures — or to the key's own last decimal
  // place, which is the same precision on the other side of a power of ten
  // (0.99 against 1.00 shows two figures and is written to hundredths, as
  // the key is).
  const rightCount = (response.sigMin <= figures && figures <= response.sigMax) || response.exponent === place;
  if (rightCount && near(response)) return { verdict: 'correct' };
  if (response.sigMin > figures) {
    const rounded = rules.map((halfEven) => ({ ...response, ...roundToFigures(response, figures, { halfEven }) }));
    return rounded.some(near) ? { verdict: 'form', reason: 'too-many' } : miss(rounded);
  }
  // One figure fewer than asked: the response must be exactly what the KEY
  // rounds to at that count, by either rounding rule.
  // The last-digit allowance is not carried down — an allowed neighbour of
  // 89.4 is 89.5, which rounds to 90, and 90 is the round number the stem
  // itself prints.
  const shown = figures - 1;
  if (shown >= 1 && response.sigMin <= shown && shown <= response.sigMax) {
    for (const halfEven of rules) {
      const rounded = { ...key, ...roundToFigures(key, shown, { halfEven }) };
      if (within(response, rounded, 0, Math.min(response.exponent, rounded.exponent))) {
        return { verdict: 'form', reason: 'too-few' };
      }
    }
  }
  // One figure short and a unit or two off at its own place: what a table of
  // coarser values gives — 123.88 from four-figure atomic masses, against
  // 123.896 from the periodic table's five. Still `incorrect`; the caller
  // says why. Only from four figures shown (below that a stem's round number
  // is "close" to everything: 90 against 89.4), and only where the form says
  // a factor is looked up.
  if (shown >= 4 && lastDigit >= 1 && response.sigMin <= shown && shown <= response.sigMax) {
    const coarse = rules.some((halfEven) => {
      const rounded = { ...key, ...roundToFigures(key, shown, { halfEven }) };
      return within(response, rounded, nearUnits(shown), Math.min(response.exponent, rounded.exponent));
    });
    if (coarse) return { verdict: 'incorrect', reason: 'near' };
  }
  // The key's own number with its trailing zeros left off, however many:
  // `8` for `8.00`. Exactly the key, so nothing a stem's round number can
  // reach unless that number is the answer.
  if (response.sigMax < figures && sameNumber(response, key)) return { verdict: 'form', reason: 'too-few' };
  return rightCount ? miss([response]) : { verdict: 'incorrect' };
}
