/**
 * Pure answer-checking logic, shared by interactive components.
 * This module is framework-independent and contains only grading logic.
 *
 * Dependency: @cortex-js/compute-engine (the CAS that ships with MathLive).
 * Input is LaTeX — exactly what a MathLive <math-field> emits as its .value —
 * so authored answers are LaTeX too ("x^2+5x+6", "\\frac{1}{2}", "5000").
 *
 * checkAnswer(studentLatex, answerLatex) returns one of:
 *   'correct'   — mathematically equivalent to the answer
 *   'incorrect' — parses fine, but not equivalent
 *   'invalid'   — couldn't be read as math (parse errors, empty boxes)
 *   'empty'     — blank input
 *
 * Equivalence ladder (first hit wins):
 *   1. isSame()  — canonical/structural match ("2x" vs "2\times x",
 *      "6+5x+x^2" vs "x^2+5x+6").
 *   2. isEqual() — mathematical value equality; the Compute Engine
 *      evaluates both sides, falling back to numeric comparison
 *      ("\frac{1}{2}" vs "0.5", "\sqrt{9}" vs "3").
 *   3. simplify(student - answer) reduces to 0 — catches identities the
 *      first two miss.
 *
 * This file is .mjs so `node lib/check-answer.test.mjs` runs it directly
 * (Node 22+ — the Compute Engine's floor).
 */

import { ComputeEngine } from '@cortex-js/compute-engine';

// One engine for the whole page. FillIn hands this same instance to
// MathLive (MathfieldElement.computeEngine) so the field and the grader
// never disagree about parsing.
export const ce = new ComputeEngine();

// One grading parses the same student LaTeX several times over — checkAnswer
// once for the value, then every parsing form predicate again for the shape —
// and parsing is the engine's expensive step. Boxed expressions are immutable
// and nothing here declares or assumes engine state, so one box per source
// string is safe to share. The cap only bounds a corpus-wide lint run; a page
// grades a handful of strings.
/**
 * A degree measure, spelled as the plain quantity it is.
 *
 * The engine reads `^\circ` as an ANGLE and normalizes it onto one turn:
 * `1400^\circ` boxes to `16/9·pi` — the box for `320^\circ` — so
 * checkAnswer("1400^\circ", "320^\circ") graded **correct**. 1400 degrees is
 * not 320 degrees, and the exercise class that breaks on it is the one §5.1
 * is built from: "find an angle coterminal with $1400^\circ$" is passable by
 * retyping $1400^\circ$, and no answerForm can refuse it, because `degrees`
 * asks how the response is written and the response is written in degrees.
 * The reduction is asymmetric too (`-540^\circ` boxes to `-pi`, not `pi`), so
 * it cannot even be relied on as a coterminal check.
 *
 * Rewriting the mark as the literal conversion factor is the whole fix: the
 * value becomes ordinary arithmetic, which the engine does not fold onto a
 * circle. $30^\circ$ still boxes to $\tfrac{\pi}{6}$, so the documented
 * degree/radian equality survives untouched; $1400^\circ$ now boxes to
 * $\tfrac{70\pi}{9}$ and stops equalling $\tfrac{16\pi}{9}$.
 *
 * Applied on the PARSE path only. The `degrees` form predicate reads the
 * written LaTeX and must keep seeing the mark it exists to require, so
 * preprocess() — whose output is what the form check is handed — is left
 * alone. `\circ` without a superscript is function composition and is not
 * touched.
 *
 * The bare `°` GLYPH counts as a mark: the engine reads `1400°` as an angle
 * exactly as it reads `1400^\circ`, so leaving it out would have fixed the
 * spelling an author is told to use while leaving the one they reach for by
 * habit broken. (`^\circ` is still the spelling the content lint requires —
 * this is about what the grader must not be fooled by, not about what pages
 * are allowed to write.)
 *
 * One source string, three readings, because the `degrees`/`radians` form
 * predicates must agree with the parse path about what a degree mark IS. They
 * did not: both were written against the literal `^\circ` while the parse path
 * learned all three spellings, so `225\degree` — a degree measure by the
 * engine's own reading — was told "now write it in degrees", and `320°`
 * satisfied `radians`, waving through the printed-subject retype that token
 * exists to refuse. A spelling the grader folds into π/180 is a degree mark
 * everywhere or nowhere.
 */
const DEGREE_MARK_SOURCE = String.raw`\\degree(?![a-zA-Z])|\^\s*\{\s*\\circ\s*\}|\^\s*\\circ(?![a-zA-Z])|°`;
const DEGREE_MARK = new RegExp(DEGREE_MARK_SOURCE, 'g');
/** Does the writing wear a degree mark anywhere? */
const DEGREE_MARK_ANYWHERE = new RegExp(DEGREE_MARK_SOURCE);
/** `head` + a trailing degree mark, with nothing after it. */
const DEGREE_MARK_AT_END = new RegExp(String.raw`^([\s\S]*?)(?:${DEGREE_MARK_SOURCE})$`);
export const spellDegreesAsQuantity = (latex) => latex.replace(DEGREE_MARK, '\\cdot\\frac{\\pi}{180}');

// Compute Engine reads `\%` after a plain numeral only: `12.5\%` is 0.125,
// but `\frac{1}{3}\%` and `33\frac{1}{3}\%` — the fraction and mixed-number
// percents the `percent` form admits and Prealgebra's Answer Key prints —
// parse invalid, so a right answer was refused as unreadable. Spell such a
// head as the value it names times 1/100. Value path only: the `percent`
// form reads the raw sign through bareLatex.
const FRACTION_PERCENT = /(^|[^\d.\w^])(?:(\d+)\s*)?\\[tdc]?frac\s*\{(\d+)\}\s*\{(\d+)\}\s*\\%/g;
export const spellFractionPercents = (latex) => latex.replace(
  FRACTION_PERCENT,
  (match, lead, whole, numerator, denominator) =>
    `${lead}\\left(${whole ? `${whole}+` : ''}\\frac{${numerator}}{${denominator}}\\right)\\cdot\\frac{1}{100}`,
);

const PARSE_CACHE_LIMIT = 256;
const parseCache = new Map();
function parseLatex(source) {
  if (parseCache.has(source)) return parseCache.get(source);
  const latex = spellFractionPercents(spellDegreesAsQuantity(source));
  let expr = ce.parse(latex);
  if (holdsNaN(expr.json)) expr = splitComplexQuotients(latex) ?? expr;
  if (parseCache.size >= PARSE_CACHE_LIMIT) parseCache.clear();
  parseCache.set(source, expr);
  return expr;
}

const holdsNaN = (json) => json === 'NaN' || (Array.isArray(json) && json.some(holdsNaN));
const holdsSubscript = (json) => Array.isArray(json) && (json[0] === 'Subscript' || json.some(holdsSubscript));
const holdsImaginaryUnit = (json) => json === 'i' || json === 'ImaginaryUnit'
  || (Array.isArray(json) && json.some(holdsImaginaryUnit));

const holdsComplexValue = (json) => json === 'ImaginaryUnit'
  || (Array.isArray(json) && (json[0] === 'Complex' || json.some(holdsComplexValue)));

// The terms of a raw sum, through `Delimiter` groups and `Subtract`.
function rawSumTerms(json) {
  if (!Array.isArray(json)) return [json];
  if (json[0] === 'Delimiter' && json.length === 2) return rawSumTerms(json[1]);
  if (json[0] === 'Add') return json.slice(1).flatMap(rawSumTerms);
  if (json[0] === 'Subtract' && json.length === 3) {
    return [...rawSumTerms(json[1]), ...rawSumTerms(json[2]).map((term) => ['Negate', term])];
  }
  return [json];
}

/**
 * The pinned engine canonicalizes a quotient whose numerator is a SUM holding
 * a radical-times-i term to NaN: `\frac{1+\sqrt2 i}{3}` boxes as
 * Multiply(1/3, NaN), while `\frac{1+2i}{3}`, `\frac{\sqrt2 i}{3}` and
 * `1+\sqrt2 i` alone are read right. So the fully simplified
 * `\frac{-4\pm2\sqrt2 i}{3}` graded `incorrect` against its own value
 * (Intermediate Algebra 9.1, October 3, 2026). When the canonical parse holds
 * a NaN, the raw parse is rewritten term by term — `\frac{a+b}{d}` as
 * `\frac{a}{d}+\frac{b}{d}`, for a numerator holding `i` — and boxed again;
 * that is the same value, written the way the engine reads. Each term keeps
 * its own quotient rather than one `\frac{1}{d}` factor, so the documented
 * coefficient-times-`(a+i)` defect is never reached. null when the rewrite
 * changes nothing or still holds a NaN — the original parse then stands.
 */
function splitComplexQuotients(latex) {
  let changed = false;
  const rewrite = (json) => {
    if (!Array.isArray(json)) return json;
    const node = json.map(rewrite);
    if (node[0] === 'Divide' && node.length === 3 && holdsImaginaryUnit(node[1])) {
      const terms = rawSumTerms(node[1]);
      if (terms.length > 1) {
        changed = true;
        return ['Add', ...terms.map((term) => ['Divide', term, node[2]])];
      }
    }
    return node;
  };
  try {
    const json = rewrite(ce.parse(latex, { form: 'raw' }).json);
    if (!changed) return null;
    const expr = ce.box(json);
    return holdsNaN(expr.json) ? null : expr;
  } catch {
    return null;
  }
}

/**
 * Remove commas only when the whole numeric token is a conventionally
 * grouped integer. Looking at the maximal token is important: the old
 * character-at-a-time replacement turned `(8,125,2)` into `(8125,2)`.
 *
 * A token inside parentheses or square brackets is deliberately left alone
 * because its comma may be a tuple/list separator. This includes spaced
 * tuples such as `(8,125, 2)`, where a token-only check would otherwise turn
 * the first two coordinates into `8125`. Authors can still write a grouped
 * scalar outside tuple notation (`400,000`) or use `{,}` in display text.
 */
function insideTupleDelimiter(source, offset) {
  const stack = [];
  for (let index = 0; index < offset; index += 1) {
    if (source[index] === '\\') {
      index += 1;
      continue;
    }
    if (source[index] === '(' || source[index] === '[') {
      stack.push(source[index]);
    } else if (source[index] === ')' && stack.at(-1) === '(') {
      stack.pop();
    } else if (source[index] === ']' && stack.at(-1) === '[') {
      stack.pop();
    }
  }
  return stack.length > 0;
}

// A BRACED comma between digits, `5{,}250`, is TeX's digit-grouping spelling
// and never a separator — a separator is a bare comma — so it is grouping
// even inside a pair or interval, where a bare comma is not assumed to be:
// `(5{,}250,14{,}000)` parsed 'invalid' against `(5250,14000)` (Elementary
// Algebra 5.5, September 27, 2026). Only before exactly three digits, and
// never in a decimal tail.
const BRACED_GROUPING_COMMA = /(?<!\.\d*)(\d)\{,\}(?=\d{3}(?!\d))/g;

export function stripGroupingCommas(value) {
  return value.replace(BRACED_GROUPING_COMMA, '$1').replace(/\d+(?:(?:,|\{,\})\d+)*/g, (token, offset, source) => {
    if (!/^\d{1,3}(?:(?:,|\{,\})\d{3})+$/.test(token)) return token;
    // A grouped integer never starts right after a decimal point: in
    // "1.5,300" the "5,300" is a decimal tail followed by a list comma.
    if (offset > 0 && source[offset - 1] === '.') return token;
    if (insideTupleDelimiter(source, offset)) return token;
    return token.replace(/,|\{,\}/g, '');
  });
}

/**
 * Read the balanced brace group that starts at `openIndex` (which must point
 * at a `{`). Returns [innerText, indexAfterClosingBrace], or null if the group
 * is never closed. Escaped braces (`\{`) do not affect the depth.
 */
function readBalancedGroup(source, openIndex) {
  let depth = 0;
  for (let index = openIndex; index < source.length; index += 1) {
    if (source[index] === '\\') {
      index += 1;
      continue;
    }
    if (source[index] === '{') depth += 1;
    else if (source[index] === '}') {
      depth -= 1;
      if (depth === 0) return [source.slice(openIndex + 1, index), index + 1];
    }
  }
  return null;
}

/**
 * The two written halves of a response that is EXACTLY one `\frac{..}{..}`
 * (any sizing variant) with nothing before or after it — or null. Input is
 * bareLatex() output with any leading sign already stripped. Shared by
 * `single-fraction` and `reduced-fraction`, which both have to read the
 * WRITTEN halves because the engine folds a numeral quotient before any
 * predicate can see it.
 */
function leadingWrittenFraction(bare) {
  const opener = bare.match(/^\\[tdc]?frac\s*\{/);
  if (!opener) return null;
  const numeratorGroup = readBalancedGroup(bare, opener[0].length - 1);
  const between = numeratorGroup && bare.slice(numeratorGroup[1]).match(/^\s*\{/);
  const denominatorGroup = between
    && readBalancedGroup(bare, numeratorGroup[1] + between[0].length - 1);
  if (!denominatorGroup) return null;
  return {
    numerator: numeratorGroup[0],
    denominator: denominatorGroup[0],
    rest: bare.slice(denominatorGroup[1]).trim(),
  };
}

/** The writing with every `(…)`/`{…}` group's contents cut out. */
function withoutGroups(text) {
  let out = '';
  let depth = 0;
  for (const char of text) {
    if (char === '(' || char === '{') depth += 1;
    if (depth === 0) out += char;
    if (char === ')' || char === '}') depth = Math.max(0, depth - 1);
  }
  return out;
}

/** The writing with every exponent argument (`^{1/4}`, `^2`) cut out. */
function withoutExponents(text) {
  let out = '';
  let i = 0;
  while (i < text.length) {
    if (text[i] === '^') {
      const argument = readTexArgument(text, i + 1);
      if (argument) {
        i = argument[1];
        continue;
      }
    }
    out += text[i];
    i += 1;
  }
  return out;
}

function writtenFractionHalves(bare) {
  const fraction = leadingWrittenFraction(bare);
  return fraction && fraction.rest === '' ? [fraction.numerator, fraction.denominator] : null;
}

/**
 * The two written sides of a response that is EXACTLY one equation, whitespace
 * removed — or null. Input is raw student LaTeX; MathLive's `{(x+2)}^2` brace
 * wrap is unwrapped so the squared-unit patterns below read what the learner
 * sees. Shared by the standard-form predicates, which all grade equations and
 * all have to read the WRITTEN sides (the engine treats two true statements,
 * or two forms of one conic, as the same equation).
 */
function splitEquationSides(latex) {
  const bare = bareLatex(latex)
    .replace(/\s+/g, '')
    .replace(/\{(\((?:[^{}()]|\([^()]*\))*\))\}/g, '$1');
  const sides = bare.split('=');
  return sides.length === 2 && sides[0] && sides[1] ? sides : null;
}

/**
 * Is a written term a coefficient-1 squared conic unit — `x^2`, `y^2`, or a
 * squared binomial `(x-2)^2` / `(y+3)^2`? Whitespace must already be removed.
 * The variable may carry the `_{p…}` subscript that `foldPrimes()` writes for
 * a primed letter, so the rotated-axes conics of Precalculus §10.4
 * ($\tfrac{x'^2}{4}+\tfrac{y'^2}{9}=1$) read as the same shape.
 * The coefficient-1 requirement is the point: `9x^2` and `\frac{9x^2}{144}`
 * are the general form's terms, and accepting them would accept the very
 * restatement the standard-form predicates exist to reject.
 *
 * The shift is a NONZERO integer: a written-in zero, `(x-0)^2`, is the
 * centre substituted and not simplified — the same unfinished writing as
 * `(y-(-4))^2`, which already failed — and it graded `correct` against
 * `x^2+y^2=36` (Intermediate Algebra chapters 11–12 re-review, October 4,
 * 2026). The origin's unit is the bare `x^2`.
 */
const NONZERO_SHIFT = String.raw`[+-][1-9]\d*`;
const SQUARED_CONIC_UNIT = new RegExp(String.raw`^(?:[a-zA-Z](?:_\{p+\})?|\([a-zA-Z](?:_\{p+\})?${NONZERO_SHIFT}\))\^\{?2\}?$`);
const isSquaredConicUnit = (term) => SQUARED_CONIC_UNIT.test(term);

/**
 * The Compute Engine reads a `\frac` with a lone `d` numerator as Leibniz
 * derivative notation, so `\frac{d}{t}` boxes as `D(missing, t)` and is
 * *invalid* — not merely unequal. That silently marks a correct student wrong
 * in every distance/rate/time exercise, because MathLive turns a typed "/"
 * into a `\frac` (so `d/t`, which parses fine, becomes `\frac{d}{t}`, which
 * does not).
 *
 * Rewriting to `{{d}/{denominator}}` boxes as `["Divide","d",…]`, structurally
 * identical to what `d/t` already produces. The inner braces keep a compound
 * denominator grouped (`\frac{d}{t+1}` → `d/(t+1)`, not `d/t+1`); the outer
 * braces keep the whole quotient grouped against postfix operators, so
 * `\frac{d}{t}^2` stays `(d/t)^2` rather than becoming `d/(t^2)`.
 *
 * A denominator that begins with a differential (`dx`, `dt`) is left alone so
 * genuine calculus notation such as `\frac{d}{dx}f(x)` still reaches the
 * engine as a derivative.
 *
 * Known limitation, deliberately not worked around here: `D` and `N` are
 * reserved *function* symbols in the Compute Engine, so `D/t` and `N/t` are
 * invalid in slash form too. Renaming a student's symbol would be guesswork,
 * and no authored answer in this repository uses either as a variable.
 */
function fixLoneDifferentialNumerator(value) {
  const opener = /\\(?:frac|tfrac|dfrac|cfrac)\s*\{\s*d\s*\}\s*\{/g;
  let out = '';
  let copiedTo = 0;
  let match;
  while ((match = opener.exec(value)) !== null) {
    const group = readBalancedGroup(value, match.index + match[0].length - 1);
    if (!group) continue;
    const [denominator, afterIndex] = group;
    if (/^\s*d[a-zA-Z]/.test(denominator)) continue; // \frac{d}{dx} — a real derivative
    out += value.slice(copiedTo, match.index) + `{{d}/{${denominator}}}`;
    copiedTo = afterIndex;
    opener.lastIndex = afterIndex;
  }
  return out + value.slice(copiedTo);
}

/**
 * Normalize student LaTeX before parsing.
 *  - collapses a doubled backslash before a LaTeX command letter
 *    ("\\frac{5}{6}" → "\frac{5}{6}"). Legacy imported answers can contain
 *    two literal backslashes, which made every fraction-based answer
 *    unparsable (silently graded "incorrect"). Both "\\frac" and "\frac"
 *    now grade identically. A real LaTeX
 *    line break ("\\") is never meaningful in a single-line FillIn answer,
 *    so this is safe to normalize unconditionally.
 *  - strips digit-grouping commas ("400,000", "400{,}000" → "400000"),
 *    so students may type numbers with or without commas
 *  - strips LaTeX spacing commands (\, \; \: \! ~) the virtual keyboard
 *    or pasted content can introduce
 *  - rewrites a `\frac` with a lone `d` numerator so it is read as a
 *    fraction rather than as Leibniz derivative notation (see
 *    fixLoneDifferentialNumerator). This runs AFTER the spacing strip so
 *    spacing-polluted forms ("\frac{\,d}{t}", "\frac~{d}{t}") are still
 *    recognized as the defect they are.
 *  - maps unicode math operators from pasted text to LaTeX
 *  - reads a plain-text mixed number ("2 6/9", pasted rather than typed
 *    into the field) as integer + fraction — the same convention the
 *    Compute Engine already applies to "2\frac{6}{9}". Only whole
 *    number, space(s), digits/digits qualifies, so "2 + 6/9" and
 *    "2x/9" are untouched.
 *  - makes decimal-times-parenthesis multiplication explicit
 *    ("0.32(400)" → "0.32\cdot(400)"). The Compute Engine reads a decimal
 *    directly followed by a parenthesized group as REPEATING-DECIMAL
 *    notation (0.32(400) = 0.32400400…), so the exact expression the
 *    lessons teach ("compute $0.32(400) + 15$") graded incorrect.
 *    Integer-times-parenthesis ("3(4)") already parses as a product and is
 *    untouched. The corpus writes repeating decimals with \overline, never
 *    with parentheses, so nothing legitimate is lost.
 *  - groups a mixed number that is JUXTAPOSED with what follows
 *    ("2\frac{1}{2}(x-4)" → "\left(2+\frac{1}{2}\right)(x-4)"). Standing
 *    alone or before an explicit operator, CE 0.58.0 reads "2\frac{1}{2}"
 *    as the mixed number 2+1/2; but as soon as the next token multiplies by
 *    juxtaposition — "(", "\left(", a variable, a command, or a "^" — the
 *    whole part stops binding to the fraction and the value silently
 *    becomes 2·(1/2)·… . "2\frac{1}{2}(4)" evaluated to 4 instead of 10, so
 *    a learner writing the point-slope answer "y-3=2\frac{1}{2}(x-4)" was
 *    graded incorrect AND the wrong line "y=x-1" was accepted against it.
 *    The rewrite is deliberately NOT applied to a mixed number that ends
 *    the expression or is followed by an operator: those already parse
 *    correctly, and `asMixedNumber` anchors on the written shape, so
 *    rewriting them would break every `answerForm="mixed-number"` exercise.
 *    Only an all-digit numerator AND denominator qualify, so a genuine
 *    coefficient times a fraction ("2\frac{x}{2}(4)") is left alone.
 */
/**
 * A primed variable is one symbol to the learner and an invalid parse to the
 * Compute Engine: `x'` is rejected outright, and MathLive writes a typed
 * apostrophe as `x^{\prime}` (two as `x^{\doubleprime}`, a following
 * exponent inside the same group as `x^{\prime2}`), which the engine reads as
 * a power of a symbol it does not know. The rotated-axes conics of
 * Precalculus §10.4 are written entirely in $x'$ and $y'$, so every spelling
 * folds onto a subscripted symbol — `x'` → `x_{p}`, `x''` → `x_{pp}` — with
 * any trailing exponent lifted back out (`x^{\prime2}` → `x_{p}^{2}`).
 * The fold is applied to key and response alike, so the two only have to
 * agree after it; nothing in the corpus keys a genuine `_{p}` subscript.
 * Applied to a control word too (`\theta'` → `\theta_{p}`).
 */
const PRIME_MARK = /'|\\doubleprime(?![a-zA-Z])|\\prime(?![a-zA-Z])/g;
const primeSubscript = (marks) => {
  let count = 0;
  for (const mark of marks.match(PRIME_MARK) ?? []) count += mark === '\\doubleprime' ? 2 : 1;
  return `_{${'p'.repeat(count)}}`;
};
export function foldPrimes(raw) {
  const symbol = String.raw`((?:\\[a-zA-Z]+|[a-zA-Z]))`;
  return String(raw ?? '')
    // braced superscript that OPENS with prime marks: x^{\prime}, x^{\prime2}
    .replace(
      new RegExp(String.raw`${symbol}\s*\^\{((?:\s*(?:'|(?:\\doubleprime|\\prime)(?![a-zA-Z])))+)([^{}]*)\}`, 'g'),
      (m, v, marks, rest) => `${v}${primeSubscript(marks)}${rest.trim() ? `^{${rest.trim()}}` : ''}`,
    )
    // bare marks: x', x'', x\prime, x^\prime
    .replace(
      new RegExp(String.raw`${symbol}((?:\s*\^?(?:'|(?:\\doubleprime|\\prime)(?![a-zA-Z])))+)`, 'g'),
      (m, v, marks) => `${v}${primeSubscript(marks)}`,
    );
}

export function preprocess(raw) {
  const despaced = stripGroupingCommas(foldPrimes(raw ?? ''))
    .replace(/\\\\(?=[a-zA-Z])/g, '\\')
    .replace(/\\[,;:!]/g, '')
    // The rest of TeX's always-ignorable spacing, which `\,`/`\;`/`\:`/`\!`
    // above and `~` below already stand for: a control space and the named
    // quads carry no value, so a response may not be graded on whether it
    // wrote one. `9.3\ \%` is the percent `9.3\%`.
    //
    // To a SPACE, never to nothing, so a strip can never fuse two numerals
    // into a third ("9.3\ 5"); and behind a `(?<!\\)` guard, so the `\\` this
    // corpus writes as an escaped backslash is never eaten half at a time.
    // Named macros need the letter boundary or `\spacer` loses its head.
    //
    // Stripping is also what stops them counting as ink: `\quad` is a
    // `\[a-zA-Z]` control sequence, so `2.0794415416798357\quad` read as
    // symbolic — an `exact` answer — while saying the decimal that token
    // exists to refuse.
    .replace(/(?<!\\)\\(?:qquad|quad|thinspace|enspace|space| )(?![a-zA-Z])/g, ' ')
    .replace(/~/g, ' ');
  return fixLoneDifferentialNumerator(despaced)
    .replace(/(^|[^\d.\w])(\d+) +(\d+)\/(\d+)/g, '$1$2\\frac{$3}{$4}')
    // A mixed number that multiplies by juxtaposition loses its whole part in
    // CE 0.58.0 — group it explicitly. The leading boundary refuses a digit
    // that belongs to an exponent ("x^2\frac{1}{2}"); the lookahead fires only
    // on the juxtaposition/superscript tokens that trigger the defect.
    .replace(
      /(^|[^\d.\w^])(\d+)\s*\\[tdc]?frac\s*\{(\d+)\}\s*\{(\d+)\}(?=\s*(?:[A-Za-z(^]|\\[a-zA-Z]))/g,
      '$1\\left($2+\\frac{$3}{$4}\\right)',
    )
    .replace(/((?:\d+)?\.\d+)\s*(?=\(|\\left\()/g, '$1\\cdot ')
    // The engine reads a numeral, `e`/`E`, then a numeral as scientific
    // notation: `110e+360d` is 1.1×10³⁶³·d and `2+3e` never equals `3e+2`
    // (300). A whole-number coefficient, `e`, then a SIGN is algebra — the
    // variable `e` or Euler's number plus a term (Intermediate Algebra §4.7)
    // — so brace the letter and the engine reads the product. A decimal
    // mantissa or an unsigned exponent (`2.0794e0`, `1.5e-3`) is a
    // calculator readout and stays a number for the exact tokens to refuse.
    .replace(/(^|[^\d.])(\d+)\s*([eE])(?=\s*[+-]\s*\d)/g, '$1$2{$3}')
    .replace(/−/g, '-')
    .replace(/×/g, '\\times ')
    .replace(/÷/g, '\\div ')
    .replace(/·/g, '\\cdot ')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/⁴/g, '^4')
    .trim();
}

/**
 * If expr is an equation with a plain variable on one side ("x = -3/2" or
 * "-3/2 = x"), return { variable, value }; otherwise null.
 */
function asVariableEquation(expr) {
  if (expr.operator !== 'Equal' || expr.ops?.length !== 2) return null;
  const [lhs, rhs] = expr.ops;
  if (lhs.symbol) return { variable: lhs.symbol, value: rhs };
  if (rhs.symbol) return { variable: rhs.symbol, value: lhs };
  return null;
}

/**
 * Split a comma-delimited answer without splitting commas nested in ordered
 * pairs, intervals, function arguments, or TeX groups.
 *
 * Exported (with stripGroupingCommas) so the content lint reasons about
 * authored list answers with exactly the rules the grader applies.
 */
export function splitTopLevelCommas(raw) {
  const parts = [];
  let start = 0;
  const stack = [];
  let escaped = false;
  for (let i = 0; i < raw.length; i += 1) {
    const char = raw[i];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (char === '\\') {
      escaped = true;
      continue;
    }
    if (char === '{' || char === '(' || char === '[') stack.push(char);
    else if (char === '}' || char === ')' || char === ']') stack.pop();
    else if (char === ',' && stack.length === 0) {
      parts.push(raw.slice(start, i).trim());
      start = i + 1;
    }
  }
  parts.push(raw.slice(start).trim());
  return parts;
}

/* ---------------------------------------------------------------------------
 * Non-termination guards for the equivalence ladder
 *
 * Two Compute Engine entry points do not terminate on conjugate-radical
 * shapes — the exact shapes every "rationalize a two-term denominator"
 * prompt prints (Elementary Algebra §9.5), reachable at runtime by a learner
 * pasting the prompt back as the response. Measured against the pinned
 * 0.58.0:
 *
 * - `isEqual()` never returns once EITHER operand is a quotient whose
 *   denominator mixes a variable radicand with a numeric one
 *   (`\frac{\sqrt{2}}{\sqrt{x}-\sqrt{3}}`) — against ANY comparand,
 *   including a plain `x`.
 * - `simplify()` never returns on some differences of radical expressions
 *   with no radical denominator at all (`\frac{\sqrt{2}(\sqrt{x}+3)}{x-3}`
 *   minus `\frac{\sqrt{2}(\sqrt{x}+\sqrt{3})}{x-3}` — one mistyped `\sqrt`),
 *   which is the failure playbook §6 records.
 *
 * `ce.timeLimit` interrupts neither — the loops they are stuck in check no
 * deadline — and grading runs synchronously on the main thread, so a
 * wall-clock timeout cannot exist. The only safe move is to never hand
 * either entry point its hang class:
 *
 * - a radical-denominator operand skips `isEqual` entirely, and
 * - any operand with a radical over a symbol replaces the `simplify(diff)`
 *   step.
 *
 * Both fall back to bounded numeric sampling (`subs` + `N()`, measured
 * terminating on every hang shape): agreement within 1e-9 at three sample
 * points grades equivalent; anything else — disagreement, a singularity at
 * every point — fails safe to not equivalent. A pasted conjugate prompt
 * therefore grades `form` ("That value is right — now write it as a
 * simplified radical"), the outcome the answerForm was built to produce,
 * instead of freezing the page.
 *
 * Sampling decides where the engine either hung or false-negatived, so it is
 * MORE complete than what it replaces: pastes of radical prompts that used
 * to grade `incorrect` by engine failure now grade as the value-equal
 * responses they are. Every radical re-expression exercise must therefore
 * carry an `answerForm` — the passable-by-retyping lint enforces exactly
 * this, and the two §6 retrofits it newly surfaced are closed in content.
 * Comparisons with no variable radicand anywhere — the overwhelming bulk of
 * the corpus — never reach either guard and grade exactly as before.
 * ------------------------------------------------------------------------ */

const containsSymbol = (expr) => (
  expr.symbol ? true : (expr.ops ?? []).some(containsSymbol)
);

/** A power with a negative numeric exponent over a base holding a symbol, anywhere in the tree. */
function negativePowerOverSymbol(expr) {
  if (expr.operator === 'Power' && expr.ops?.[1]?.isNumberLiteral && expr.ops[1].re < 0
    && containsSymbol(expr.ops[0])) return true;
  return (expr.ops ?? []).some(negativePowerOverSymbol);
}

/** A square/nth root (or fractional power) with a symbol in its radicand. */
function radicalOverSymbol(expr) {
  if ((expr.operator === 'Sqrt' || expr.operator === 'Root') && containsSymbol(expr.ops[0])) {
    return true;
  }
  if (expr.operator === 'Power') {
    const exponent = expr.ops[1];
    if (exponent?.isNumberLiteral && !Number.isInteger(exponent.re)
      && containsSymbol(expr.ops[0])) return true;
  }
  return (expr.ops ?? []).some(radicalOverSymbol);
}

/**
 * True when the expression holds a denominator `isEqual` may never return
 * from: a `Divide` whose divisor — or a negative power whose base — contains
 * a radical over a symbol.
 */
function radicalDenominator(expr) {
  if (expr.operator === 'Divide' && radicalOverSymbol(expr.ops[1])) return true;
  if (expr.operator === 'Power') {
    const exponent = expr.ops[1];
    if (exponent?.isNumberLiteral && exponent.re < 0
      && radicalOverSymbol(expr.ops[0])) return true;
  }
  return (expr.ops ?? []).some(radicalDenominator);
}

/**
 * The THIRD non-termination class, found by the decoration sweep in
 * check-answer.test.mjs and measured against the pinned 0.58.0: neither
 * `isEqual` nor `simplify` returns once one operand holds a LOGARITHM
 * together with a symbolic denominator. No radical is involved.
 *
 *   `\frac{\log 7}{x}`                      vs `\frac{1}{x}`   — hangs
 *   `\frac{3}{x}\cdot\frac{\log 7}{\log 7}` vs `\frac{3}{x}`   — hangs
 *   `\frac{3}{x}\cdot\frac{\sqrt7}{\sqrt7}` vs `\frac{3}{x}`   — returns
 *   `\frac{3}{x}\cdot\frac{7}{7}`           vs `\frac{3}{x}`   — returns
 *   `3x\cdot\frac{\log 7}{\log 7}`          vs `3x`            — returns
 *
 * Both halves are required, in the SAME operand, which is what the pairs
 * above pin: a logarithm alone is fine, a symbolic denominator alone is fine.
 * `\pi` and `\sqrt{}` in the same position are fine too, so this is a
 * logarithm-specific defect and the guard says so rather than widening to
 * "any command", which would route sound comparisons to sampling for nothing.
 *
 * Reachable by ordinary typing: a learner answering any `\frac{a}{x}` key can
 * write a logarithm into it, and the page would freeze rather than grade —
 * the same availability failure the two guards above exist to prevent, and
 * fixed the same way, by never handing the entry point its hang class.
 */
const containsLogarithm = (expr) => (
  ['Log', 'Ln', 'Lb', 'Lg'].includes(expr.operator)
    ? true
    : (expr.ops ?? []).some(containsLogarithm)
);

/**
 * Does the expression apply a reciprocal trigonometric function? The pinned
 * engine cannot decide equality once `\sec` or `\csc` stands in a denominator:
 * `\frac{1}{\csc t}` against `\sin t`, `\frac{1}{\sec t}` against `\cos t`,
 * `\frac{\cot x}{\csc x}` against `\cos x` and `\frac{\sec t}{\csc t}`
 * against `\tan t` all graded `incorrect`, identically equal (found August
 * 27, 2026; Precalculus chapters 5–6 re-review, October 4, 2026, where the
 * retyped 5.3 prompt was told "wrong" instead of `form`). Such a pair is
 * decided by sampling, as a logarithm's is.
 */
const containsReciprocalTrig = (expr) => (
  ['Sec', 'Csc', 'Cot'].includes(expr.operator)
    ? true
    : (expr.ops ?? []).some(containsReciprocalTrig)
);

/**
 * The FOURTH class, found by the Prealgebra 4.2 re-review (September 26,
 * 2026): `isEqual` never returns once an operand multiplies a non-integer
 * number by a quotient with a symbolic divisor — the half-finished
 * `\frac{2}{5}\cdot\frac{9}{y}` a learner types on the way to
 * `\frac{18}{5y}`, against ANY comparand (`x` included). `simplify` and
 * `N()` return. Measured against the pinned engine:
 *
 *   `\frac{2}{5}\cdot\frac{9}{y}`   — hangs     `2\cdot\frac{9}{y}` — returns
 *   `0.4\cdot\frac{9}{y}`            — hangs     `\frac{2}{5}\cdot\frac{1}{y}` — returns
 *   `\frac{2}{5}\cdot\frac{9}{y+1}` — hangs     `\frac{2}{5}y` — returns
 */
function fractionTimesSymbolQuotient(expr) {
  if (expr.operator === 'Multiply') {
    const ops = expr.ops ?? [];
    const fractional = ops.some((op) => op.isNumberLiteral && !Number.isInteger(op.re));
    if (fractional && ops.some((op) => !op.isNumberLiteral && symbolDenominator(op))) return true;
  }
  return (expr.ops ?? []).some(fractionTimesSymbolQuotient);
}

/**
 * Numeral arithmetic left written out — the unfinished step a shape token
 * must refuse, which the engine folds before any parse-based predicate sees
 * it (found by the Prealgebra chapters 2–11 re-review, September 2026):
 *
 * - a product of two numerals: `6\cdot x+6\cdot 8`, `2\times(-3)y`;
 * - arithmetic inside an exponent: `x^{8-(-3)}`, `\frac{1}{y^{7-2}}`;
 * - a numeral raised to a power (not for `single-power`, whose base may be
 *   a numeral): `(-14)^2x^2` for `196x^2`.
 *
 * A numeral fraction counts as a numeral on either side of the product:
 * `\frac{1}{4}\cdot3q+\frac{1}{4}\cdot12` for `\frac{3}{4}q+3` and
 * `\frac{2}{5}\cdot\frac{5}{2}(20y+50)` (found by the Elementary Algebra
 * chapter 1 re-review, September 2026).
 */
const NUMERAL_PRODUCT = /\d\s*(?:\\cdot|\\times|\*)\s*\(?\s*-?\s*\d/;
const NUMERAL_FRACTION = /\\[tdc]?frac\s*\{\s*-?\s*\d+(?:\.\d+)?\s*\}\s*\{\s*\d+(?:\.\d+)?\s*\}/g;
const EXPONENT_ARITHMETIC = /\^\s*\{[^{}]*\d\s*(?:[-+*]|\\cdot|\\times)\s*\(?\s*-?\s*\d[^{}]*\}/;
const NUMERAL_POWER = /(?:^|[^\w\\}])(?:\(\s*-?\s*\d+(?:\.\d+)?\s*\)|\d+(?:\.\d+)?)\s*\^(?!\s*\{?\s*\\circ)/;
/** The braced numerator and denominator of a leading `\frac{…}{…}`, or []. */
function fracHalves(bare) {
  const head = bare.match(/^\\[tdc]?frac\s*/);
  if (!head) return [];
  const halves = [];
  let i = head[0].length;
  for (let k = 0; k < 2; k += 1) {
    while (bare[i] === ' ') i += 1;
    if (bare[i] !== '{') return [];
    let depth = 0;
    const start = i + 1;
    for (; i < bare.length; i += 1) {
      if (bare[i] === '{') depth += 1;
      else if (bare[i] === '}') { depth -= 1; if (depth === 0) break; }
    }
    if (depth !== 0) return [];
    halves.push(bare.slice(start, i));
    i += 1;
  }
  return halves;
}
// A lone numeral in parentheses multiplied by juxtaposition — `2(3)`,
// `(2)(3)`, `(-2)3` — is the same product as `2\cdot3`: `\frac{\pi}{2(3)}`
// graded `correct` against `\frac{\pi}{6}` under `single-term` where
// `\frac{\pi}{2\cdot3}` was refused (Precalculus chapters 5–6 re-review,
// October 4, 2026). A power of the group (`(-3)^2`) is writesNumeralPower's.
// A parenthesized numeral after a closing group, `(-\sqrt3)(1)`, is the same
// product (Precalculus chapters 7–8 re-review, October 5, 2026).
// A powered group is a base, not a factor: `10(0.85)^{t}` is the damped
// model's finished coefficient and base (same re-review).
const NUMERAL_GROUP_PRODUCT = /\d\s*\(\s*-?\s*\d+(?:\.\d+)?\s*\)(?!\s*\^)|\(\s*-?\s*\d+(?:\.\d+)?\s*\)\s*\(?\s*-?\s*\d|\)\s*\(\s*-?\s*\d+(?:\.\d+)?\s*\)/;
const writesNumeralProduct = (bare) => {
  const text = bare.replace(NUMERAL_FRACTION, '1');
  return NUMERAL_PRODUCT.test(text) || NUMERAL_GROUP_PRODUCT.test(text);
};
const writesExponentArithmetic = (bare) => EXPONENT_ARITHMETIC.test(bare);
const writesNumeralPower = (bare) => NUMERAL_POWER.test(bare);
// The imaginary unit written as a letter of its own — not inside a command
// name (`\pi`, `\infty`, `\sin`) and not the head of a longer word.
const IMAGINARY_LETTER = /(?<!\\[a-zA-Z]*)i(?![a-zA-Z])/g;
const IMAGINARY_LETTER_ONCE = /(?<!\\[a-zA-Z]*)i(?![a-zA-Z])/;
// A power of i left written — `20i-12i^2` for `12+20i`, `i^{35}` for `-i` —
// is numeral arithmetic left undone exactly as `(-14)^2` is: the engine folds
// `i^2` to −1 before any parse-based predicate sees it, so `expanded` and
// `no-like-terms` passed the unfinished product line (Intermediate Algebra
// 8.8, October 3, 2026). Not read inside a summation, whose index may be `i`.
const writesImaginaryPower = (bare) => !/\\sum(?![a-zA-Z])/.test(bare)
  && /(?<!\\[a-zA-Z]*)i\s*\^/.test(bare);
// The imaginary unit below a fraction bar is a division not yet carried out:
// `4+\frac{6}{i}` and `\frac{6}{i}+\frac{4i}{i}` passed against `4-6i` —
// standard form a+bi never divides by i (Precalculus 3.1, October 4, 2026).
// `6i^{-1}` is writesImaginaryPower's; a written `\div i` or `/i` is the same.
function writesImaginaryDenominator(bare) {
  if (/\\sum(?![a-zA-Z])/.test(bare)) return false;
  const imaginary = /(?<!\\[a-zA-Z]*)i(?![a-zA-Z])/;
  for (const divide of bare.matchAll(/(?:\\div(?![a-zA-Z])|\/)\s*/g)) {
    const at = divide.index + divide[0].length;
    const divisor = bare[at] === '(' || bare[at] === '{'
      ? readDelimitedGroup(bare, at)?.[0] : bare.slice(at).match(/^[\d.\s]*[a-zA-Z]?/)[0];
    if (divisor && imaginary.test(divisor)) return true;
  }
  for (const opener of bare.matchAll(/\\[tdc]?frac(?![a-zA-Z])/g)) {
    const numerator = readTexArgument(bare, opener.index + opener[0].length);
    const denominator = numerator && readTexArgument(bare, numerator[1]);
    if (denominator && imaginary.test(denominator[0])) return true;
  }
  return false;
}

/** A quotient whose divisor holds a symbol: `\frac{3}{x}`, `\frac{3}{x+1}`, `x^{-1}`. */
function symbolDenominator(expr) {
  if (expr.operator === 'Divide' && containsSymbol(expr.ops[1])) return true;
  if (expr.operator === 'Power') {
    const exponent = expr.ops[1];
    if (exponent?.isNumberLiteral && exponent.re < 0 && containsSymbol(expr.ops[0])) return true;
  }
  return (expr.ops ?? []).some(symbolDenominator);
}

const logarithmOverSymbolDenominator = (expr) => containsLogarithm(expr) && symbolDenominator(expr);

// Positive (the radicals chapter assumes variables ≥ 0), spread out, and away
// from the small integers the corpus uses in denominators like `x - 3`, so a
// singularity at one point cannot exhaust the sample set.
const SAMPLE_POINTS = [2.47, 0.61, 7.83, 1.19, 4.52, 0.23, 9.41];
const SAMPLE_TOLERANCE = 1e-9;
const SAMPLES_REQUIRED = 3;

const sampleIsZero = (value) => Number.isFinite(value.re) && Number.isFinite(value.im)
  && Math.abs(value.re) < SAMPLE_TOLERANCE && Math.abs(value.im) < SAMPLE_TOLERANCE;

/**
 * Value equality by evaluation at sample points — the guarded replacement for
 * `isEqual`/`simplify`. `unknowns` rather than a symbol walk, so a known
 * constant (π) is evaluated, never substituted. Every failure mode — too few
 * finite samples, any disagreement, an exception — is not-equivalent: for a
 * guarded (unrationalized) response that grades `incorrect`, which is the
 * safe side.
 */
/** Does a logarithm in `expr` take an argument holding an absolute value? */
const logOfAbsoluteValue = (expr) => (['Ln', 'Log', 'Lb', 'Lg'].includes(expr.operator)
  && containsOperator(expr.ops[0], 'Abs')) || (expr.ops ?? []).some(logOfAbsoluteValue);

function numericallyEquivalent(studentExpr, answerExpr) {
  const diff = ce.box(['Subtract', studentExpr, answerExpr]);
  const vars = diff.unknowns;
  if (vars.length === 0) return sampleIsZero(diff.N());
  const logarithms = containsLogarithm(studentExpr) || containsLogarithm(answerExpr);
  // An absolute value inside a logarithm on one side only extends that
  // side's domain to its mirror: `\ln|x|` against `\ln x`, `\log_2|x-1|`
  // against `\log_2(-(x-1))`, `2\ln|x+3|-1` against `2\ln(x+3)-1` agree on
  // the common domain and graded `correct` — the wrong graph. Such a pair is
  // read on the UNION of the two domains: a point where one side is real and
  // the other is not is a disagreement (Precalculus chapter 4 re-review,
  // round 2, October 4, 2026). A log property that moves the domain without
  // a bar (condense/expand) keeps the common-domain reading.
  const unionDomain = logarithms && logOfAbsoluteValue(studentExpr) !== logOfAbsoluteValue(answerExpr);
  const options = { commonDomain: logarithms, unionDomain };
  let agreed = 0;
  for (const shift of SAMPLE_SHIFTS) {
    for (let i = 0; i < SAMPLE_POINTS.length && agreed < SAMPLES_REQUIRED; i += 1) {
      const assignment = {};
      vars.forEach((name, j) => {
        assignment[name] = SAMPLE_POINTS[(i + 2 * j) % SAMPLE_POINTS.length] + shift;
      });
      const verdict = samplePointVerdict(studentExpr, answerExpr, assignment, options);
      if (verdict === 'disagree') return false;
      if (verdict === 'agree') agreed += 1;
    }
    if (agreed >= SAMPLES_REQUIRED) break;
  }
  // A logarithm's domain may lie wholly below zero — the key
  // `\log_2(-(x-1))` is real only for x < 1 — so the mirrored points are
  // read too, every one of them, and count toward the floor (Precalculus
  // 4.4, October 4, 2026). Wherever a logarithm is written, points are read
  // on the COMMON domain: a log property moves the domain
  // (`\log_2\frac{5x}{y}` is real at x, y < 0 where
  // `\log_2 5+\log_2 x-\log_2 y` is not; `\log_2(x^3(x-1)^2)` at x = 0.61
  // where `3\log_2 x+2\log_2(x-1)` is not), and the book grades the
  // condensed and expanded forms equal, leaving the writing to the form
  // tokens. Two logarithms with disjoint domains (`\ln x`, `\ln(-x)`) find
  // no common point and fall short of the floor.
  if (logarithms) {
    for (const shift of SAMPLE_SHIFTS) {
      for (let i = 0; i < SAMPLE_POINTS.length; i += 1) {
        const assignment = {};
        vars.forEach((name, j) => {
          assignment[name] = -(SAMPLE_POINTS[(i + 2 * j) % SAMPLE_POINTS.length] + shift);
        });
        const verdict = samplePointVerdict(studentExpr, answerExpr, assignment, options);
        if (verdict === 'disagree') return false;
        if (verdict === 'agree') agreed += 1;
      }
    }
  }
  if (agreed < SAMPLES_REQUIRED) return false;
  return !negativesInScope(answerExpr) || agreesAtNegativePoints(vars, studentExpr, answerExpr);
}

/**
 * One sample point of numericallyEquivalent(): 'agree', 'disagree', or
 * 'skip'. Equality is decided on the KEY's real domain, side by side, never
 * through the difference.
 *
 * - A point outside the key's real domain (a pole, or an even root of a
 *   negative) is skipped, whatever the response does there. The pinned
 *   engine's arithmetic is known-wrong off the real domain — complex division
 *   by |b| rather than |b|² (tools/verify/verify-answers.mjs
 *   `hasComplexDivision`), and `\frac{3x^2}{\sqrt{x-50}}` numericizes to the
 *   same −18.3i as `\frac{3x^2}{\sqrt{x-5}}` at x = 2.47, the radicand's value
 *   dropped — so neither an agreement nor a disagreement there means
 *   anything. The rationalized derivative `\frac{\sqrt{x-1}}{2(x-1)}` once
 *   "disagreed" with its key `\frac{1}{2\sqrt{x-1}}` at x = 0.61; and those
 *   off-domain "agreements" counted toward the floor, so
 *   `\frac{3x^2}{\sqrt{x-50}}` graded `correct` against
 *   `\frac{3x^2}{\sqrt{x-5}}` on four of them (Precalculus chapters 1–2
 *   re-review, October 4, 2026).
 * - A point inside the key's domain where the response is not defined is a
 *   disagreement: the response names a different function there.
 * - Otherwise the two values compare within a relative tolerance (the shifted
 *   points grow the values); a complex key compares both parts.
 */
function samplePointVerdict(studentExpr, answerExpr, assignment, { commonDomain = false, unionDomain = false } = {}) {
  const [student, answer] = [studentExpr, answerExpr].map((side) => sampleValue(side, assignment));
  const defined = (value, side) => Number.isFinite(value.re) && Number.isFinite(value.im)
    && !outsideRealDomain(side, assignment);
  if (!defined(answer, answerExpr)) return unionDomain && defined(student, studentExpr) ? 'disagree' : 'skip';
  if (!defined(student, studentExpr)) return commonDomain && !unionDomain ? 'skip' : 'disagree';
  const scale = Math.max(1, Math.abs(student.re), Math.abs(student.im), Math.abs(answer.re), Math.abs(answer.im));
  return Math.abs(student.re - answer.re) <= SAMPLE_TOLERANCE * scale
    && Math.abs(student.im - answer.im) <= SAMPLE_TOLERANCE * scale ? 'agree' : 'disagree';
}

/**
 * The fixed points sit in (0, 10), so a radicand whose real domain starts
 * further out left too few of them inside it: the composition key
 * `\frac{3x^2}{\sqrt{x-5}}` is real only at 7.83 and 9.41, and the correct
 * rationalized `\frac{3x^2\sqrt{x-5}}{x-5}` graded `incorrect` for want of a
 * third agreeing point (Precalculus chapters 1–2 re-review, October 4, 2026).
 * The same points shifted out by each later step are tried while too few
 * have agreed; the first step is the fixed points themselves.
 */
const SAMPLE_SHIFTS = [0, 10, 100];

/**
 * `side` numericized at `assignment`. The pinned engine THROWS (a BigInt
 * conversion of NaN) on a quotient of an odd root at a negative point when
 * the divisor holds a numeral root it boxed as `2\sqrt[3]{1}`: the half-worked
 * `\frac{\sqrt[3]{x}}{\sqrt[3]{8}}` threw at x = −2.47 in the negative-point
 * check, and graded `incorrect` against `\frac{\sqrt[3]{x}}{2}` where `form`
 * was due (Precalculus 1.1, October 4, 2026). On a throw the side is
 * evaluated again with every variable-free subexpression folded to its value
 * first — the same value, so nothing is widened; a second throw propagates
 * and fails the comparison as before.
 */
function sampleValue(side, assignment) {
  try {
    return side.subs(assignment).N();
  } catch {
    const fold = (e) => {
      if (e.isNumberLiteral || e.symbol) return e;
      if (e.unknowns.length === 0) {
        const value = e.N();
        if (Number.isFinite(value.re) && Number.isFinite(value.im)) return value;
      }
      return e.ops ? ce.box([e.operator, ...e.ops.map(fold)]) : e;
    };
    return fold(side).subs(assignment).N();
  }
}

/**
 * Is `expr` outside its real domain at `assignment` — a square root, an
 * even-index root, or an even-denominator rational power of a negative real
 * radicand, anywhere in the tree? (evenRootOfNegative() below misses `Sqrt`,
 * which it never needed: the engine numericizes `\sqrt{-2.47}` imaginary.)
 */
function outsideRealDomain(expr, assignment) {
  const exponent = expr.operator === 'Power' ? expr.ops[1]?.json : null;
  const evenRoot = expr.operator === 'Sqrt'
    || (expr.operator === 'Root' && expr.ops[1]?.isNumberLiteral && expr.ops[1].re % 2 === 0)
    || (Array.isArray(exponent) && exponent[0] === 'Rational' && exponent[2] % 2 === 0);
  if (evenRoot) {
    const radicand = expr.ops[0].subs(assignment).N();
    if (Number.isFinite(radicand.re) && Math.abs(radicand.im ?? 0) <= SAMPLE_TOLERANCE
      && radicand.re < 0) return true;
  }
  // A logarithm of a non-positive argument, or to a non-positive base or
  // base 1, is not real either — but the engine numericizes `\ln(-2.47)` as
  // the finite complex 0.904+πi, and its `isEqual` called `\ln(x)` equal to
  // `\ln(-x)` and `\log_2(x-1)` equal to the key `\log_2(-(x-1))`
  // (Precalculus 4.4, October 4, 2026).
  if (['Ln', 'Log', 'Lb', 'Lg'].includes(expr.operator)) {
    const real = (op) => {
      const value = op.subs(assignment).N();
      return Number.isFinite(value.re) && Math.abs(value.im ?? 0) <= SAMPLE_TOLERANCE ? value.re : null;
    };
    const argument = real(expr.ops[0]);
    if (argument === null || argument <= 0) return true;
    if (expr.operator === 'Log' && expr.ops[1]) {
      const base = real(expr.ops[1]);
      if (base === null || base <= 0 || base === 1) return true;
    }
  }
  return (expr.ops ?? []).some((op) => outsideRealDomain(op, assignment));
}

const containsOperator = (expr, operator) => expr.operator === operator
  || (expr.ops ?? []).some((op) => containsOperator(op, operator));
const oddRootOverSymbol = (expr) => (expr.operator === 'Root' && expr.ops[1]?.isNumberLiteral
  && Math.abs(expr.ops[1].re % 2) === 1 && containsSymbol(expr.ops[0]))
  || (expr.ops ?? []).some(oddRootOverSymbol);

/**
 * Does the KEY put negative variable values in scope? The square-root
 * sections assume every variable is nonnegative ("we will assume that each
 * variable in a square-root expression represents a non-negative number"),
 * so `\sqrt{x^2}` IS `x` there and the positive sample points decide. The
 * higher-roots section lifts that: "We must use the absolute value signs when
 * we take an even root of an expression with a variable in the radical", and
 * an odd root is real for every variable value. So a key that writes an
 * absolute value, or an odd root over a variable, is also sampled at
 * negative points — `2y\sqrt[4]{3y^2}` against `2|y|\sqrt[4]{3y^2}` and
 * `3|p^3|\sqrt[3]{2p}` against `3p^3\sqrt[3]{2p}` graded `correct` on the
 * positive points alone (Elementary Algebra 9.7, September 27, 2026). Read
 * off the key only, so a learner's `|x|` against a square-root key `x` keeps
 * the nonnegative convention.
 */
function negativesInScope(answerExpr) {
  return containsOperator(answerExpr, 'Abs') || oddRootOverSymbol(answerExpr);
}

/**
 * The negative-point half of numericallyEquivalent(): every point with at
 * least one variable negative where BOTH sides are real must agree; a point
 * where either side is non-real (an even root of a negative) is outside the
 * common domain and skipped. No minimum count — the positive points already
 * proved agreement; these can only refute it.
 */
function agreesAtNegativePoints(vars, studentExpr, answerExpr) {
  const patterns = 2 ** Math.min(vars.length, 3);
  for (let i = 0; i < SAMPLE_POINTS.length; i += 1) {
    for (let signs = 1; signs < patterns; signs += 1) {
      const assignment = {};
      vars.forEach((name, j) => {
        const negative = j < 3 && ((signs >> j) & 1) === 1;
        assignment[name] = (negative ? -1 : 1) * SAMPLE_POINTS[(i + 2 * j) % SAMPLE_POINTS.length];
      });
      // Each side is evaluated on its own: the engine may fold the
      // difference into one fractional power (`c^3\sqrt[3]{c}` → `c^{10/3}`)
      // that is non-real at a negative point where both sides are real.
      const values = [studentExpr, answerExpr].map((side) => sampleValue(side, assignment));
      if (!values.every((v) => Number.isFinite(v.re) && Number.isFinite(v.im)
        && Math.abs(v.im) <= SAMPLE_TOLERANCE)) continue;
      const [student, answer] = values.map((v) => v.re);
      if (Math.abs(student - answer) > SAMPLE_TOLERANCE * Math.max(1, Math.abs(student), Math.abs(answer))) {
        if ([studentExpr, answerExpr].some((side) => evenRootOfNegative(side, assignment))) continue;
        return false;
      }
    }
  }
  return true;
}

/**
 * Does `expr` take an even root (`\sqrt[4]{…}`, `\sqrt[6]{…}`, a power whose
 * exponent has an even denominator) of a radicand that is negative at
 * `assignment`? Such a point is outside the real domain, but the pinned
 * engine does not say so: `\sqrt{-2.47}` numericizes imaginary, as it
 * should, while `\sqrt[4]{-2.47}` numericizes to the REAL 1.2536 — the root of
 * the absolute value. So `x\sqrt[4]{x}` "disagreed" with the keyed
 * `|x|\sqrt[4]{x}` at x = −2.47 (−3.10 against 3.10) and graded
 * `incorrect`, where the square-root twin `x\sqrt{x}` against `|x|\sqrt{x}`
 * was skipped there and graded `correct` (Intermediate Algebra 8.2, October
 * 3, 2026). The radicand already forces x ≥ 0, so the bars are redundant and
 * the two are equal on the domain. Consulted only when a sample disagrees,
 * so it can skip a point, never fail one: where an even root's radicand is
 * a square (`\sqrt[4]{x^4}`, `\sqrt[4]{x^6}`) it is never negative and the
 * negative points still decide — `x` against `|x|` stays `incorrect`.
 */
function evenRootOfNegative(expr, assignment) {
  const index = expr.operator === 'Root' ? expr.ops[1]
    : expr.operator === 'Power' && expr.ops[1]?.operator === 'Rational' ? expr.ops[1].ops[1]
      : null;
  if (index?.isNumberLiteral && Number.isInteger(index.re) && index.re % 2 === 0) {
    const radicand = expr.ops[0].subs(assignment).N();
    if (Number.isFinite(radicand.re) && radicand.re < 0) return true;
  }
  return (expr.ops ?? []).some((op) => evenRootOfNegative(op, assignment));
}

/**
 * Two equations state the same condition exactly when their moved-to-one-side
 * forms are nonzero constant multiples of each other. The engine's `isEqual`
 * is not that check — on the pinned 0.58.0 it accepts equations that differ
 * in a symbol outright (`y-4=gx+2` vs `y-4=hx+2` → true), which
 * readFunctionNotation() makes reachable by ordinary typing
 * (`f(x)-4=g(x)+2` against an authored `y-4=h(x)+2`, where g and h are
 * different functions). Proportionality is decided by sampling (`subs` +
 * `N()`, the entry points the hang guards above already trust), and
 * cross-multiplied so no ratio is ever divided out: at every informative
 * sample point, student·answer₀ must agree with answer·student₀. The scaled
 * and rearranged restatements grading has always accepted stay equal; a
 * differing symbol, slope, or constant fails a sample. A side vanishing
 * where the other does not is already a decision.
 *
 * Two UNKNOWN-FREE equations are compared side by side, in either
 * orientation — never by whether each statement merely holds. Comparing
 * truth values makes every true equation equal to every other: `1+1=2`
 * graded `correct` against `5^2=25`, so any exercise keyed to a closed
 * numeric equation was passable by typing arithmetic unrelated to it, and no
 * `answerForm` could catch it (a bare true equation satisfies "no logarithm
 * left" just as the intended answer does). Ten exercises across four books
 * were exposed, all of them "write the equation/proportion" asks.
 *
 * This comparison stays permissive about restating the SAME relation, which
 * is what the equation path is for: the sides are compared by VALUE, so
 * `0.01=10^{-2}` still grades against an authored `10^{-2}=\frac{1}{100}`,
 * and the reversed orientation grades too. What it no longer accepts is a
 * DIFFERENT true statement — including the printed prompt of a conversion
 * ask, since `\log_5 25=2` has sides 2 and 2 where `5^2=25` has 25 and 25.
 * That makes the equation path reinforce `exponential-form` rather than
 * quietly undo it.
 */
/**
 * Index of the `)` closing the `(` at `open`, or -1. Depth-aware, so a nested
 * group does not end the argument early — `\log((x+1)(x+2))` must read its
 * whole argument, not stop at the first `)`.
 */
function matchingParenIndex(latex, open) {
  let depth = 0;
  for (let i = open; i < latex.length; i += 1) {
    if (latex[i] === '(') depth += 1;
    else if (latex[i] === ')') {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return -1;
}

/**
 * Can the logarithm rules still break this argument apart?
 *
 * They cannot when it is a single atom (one number or one variable), and they
 * cannot when it is a top-level SUM: there is no rule turning $\log(x+3)$ into
 * anything simpler, so `\ln(x+3)+\ln(x-1)` is a finished expansion. They still
 * can when the argument is a product, a quotient, a power, or a juxtaposition
 * — `25ab`, `\frac{a}{b}`, `x^2`, `(x+3)(x-1)` — which is what
 * `expanded-logarithms` exists to refuse.
 *
 * "Top level" means outside every bracket: the `+` in `(x+3)(x-1)` is nested,
 * so that argument is a product and stays rejected. A leading sign is not an
 * operator.
 */
function irreducibleLogArgument(argument) {
  const arg = argument.replace(/\s+/g, '');
  if (arg === '') return false;
  if (/^(?:\d+(?:\.\d+)?|[a-zA-Z])$/.test(arg)) return true;
  let depth = 0;
  for (let i = 0; i < arg.length; i += 1) {
    const char = arg[i];
    if (char === '(' || char === '{' || char === '[') depth += 1;
    else if (char === ')' || char === '}' || char === ']') depth -= 1;
    else if ((char === '+' || char === '-') && depth === 0 && i > 0) {
      // An exponent's own sign (`x^{-2}`) is nested; a caret immediately
      // before is not, so guard the one unbracketed spelling too.
      if (arg[i - 1] !== '^') return true;
    }
  }
  return false;
}

/**
 * The logarithms `bare` writes — each call's argument, the text after it,
 * and its base (`e` for `\ln`, `10` for an unsubscripted `\log`) — and
 * whether a parenthesized group that is no logarithm's own argument holds a
 * logarithm (`\frac12(3\log x-4\log y)`). null when an argument is a
 * compound command (`\log\sqrt{x}`, `\ln\frac{a}{b}`), however it is read.
 */
function logWriting(bare) {
  const opener = /\\(?:log(?:_(\{[^{}]*\}|[0-9a-zA-Z]))?|ln)\s*/g;
  const calls = [];
  const argumentParens = new Set();
  let match;
  while ((match = opener.exec(bare)) !== null) {
    const at = match.index + match[0].length;
    const rest = bare.slice(at);
    let argument;
    let after;
    if (rest[0] === '{') {
      const group = readBalancedGroup(rest, 0);
      argument = group?.[0] ?? '';
      after = group ? rest.slice(group[1]) : '';
    } else if (rest[0] === '(') {
      const close = matchingParenIndex(rest, 0);
      argument = close === -1 ? '' : rest.slice(1, close);
      after = close === -1 ? '' : rest.slice(close + 1);
      argumentParens.add(at);
    } else if (rest[0] === '\\') {
      return null;
    } else {
      argument = rest.match(/^[0-9a-zA-Z.]+/)?.[0] ?? '';
      after = rest.slice(argument.length);
    }
    const base = match[0].startsWith('\\ln') ? 'e' : (match[1] ?? '10').replace(/[{}\s]/g, '');
    calls.push({ argument, after, base });
  }
  let groupsOfLogarithms = false;
  for (let i = 0; i < bare.length; i += 1) {
    if (bare[i] !== '(' || argumentParens.has(i)) continue;
    const close = matchingParenIndex(bare, i);
    if (close !== -1 && /\\(?:log|ln)(?![a-zA-Z])/.test(bare.slice(i + 1, close))) groupsOfLogarithms = true;
  }
  return { calls, groupsOfLogarithms };
}

/**
 * Is a logarithm's sum argument a one-variable integer polynomial that
 * factors over the integers — a common integer factor (`2x+4`), a common
 * power of the variable (`x^2+3x`), or a rational root (`x^2-9`,
 * `x^2-3x+2`, `x^3-8`)? An irreducible quadratic or a factor pair with no
 * rational root (`x^4+4`) reads as finished: this can only refuse.
 */
function reduciblePolynomialArgument(argument) {
  let expr;
  try {
    expr = parseLatex(preprocess(argument));
  } catch {
    return false;
  }
  if (!expr.isValid || expr.operator !== 'Add' || expr.unknowns.length !== 1) return false;
  const poly = exprToPolynomial(expr, expr.unknowns);
  if (!poly || poly.length < 2) return false;
  const coefficients = poly.map((c) => Number(c));
  if (!coefficients.every(Number.isSafeInteger)) return false;
  const degree = coefficients.length - 1;
  if (coefficients.reduce((g, c) => gcd(g, Math.abs(c)), 0) > 1) return true;
  if (degree < 2) return false;
  if (coefficients[0] === 0) return true;
  const divisors = (n) => {
    const out = [];
    for (let d = 1; d <= Math.abs(n) && d <= 10000; d += 1) if (n % d === 0) out.push(d);
    return out;
  };
  const value = (x) => coefficients.reduceRight((sum, c) => sum * x + c, 0);
  for (const p of divisors(coefficients[0])) {
    for (const q of divisors(coefficients[degree])) {
      if (Math.abs(value(p / q)) < 1e-9 || Math.abs(value(-p / q)) < 1e-9) return true;
    }
  }
  return false;
}

/**
 * Is `\log_base argument`, both written, a rational number — `\log 10000`,
 * `\log_9 9`, `\log_4 2`, `\log 1`, `\ln e`, `\log_b b`? A numeral base and
 * argument are compared exactly: some power b^p equals n^q with q ≤ 12.
 */
function logEvaluatesRationally(base, argument) {
  if (argument === base) return true;
  if (!/^\d+$/.test(argument)) return false;
  const n = Number(argument);
  if (n === 1) return true;
  const b = base === 'e' ? Math.E : /^\d+$/.test(base) ? Number(base) : null;
  if (b === null || b <= 1 || base === 'e') return false;
  const value = Math.log(n) / Math.log(b);
  for (let q = 1; q <= 12; q += 1) {
    const p = Math.round(value * q);
    if (p > 0 && Math.abs(value * q - p) < 1e-9 && BigInt(b) ** BigInt(p) === BigInt(n) ** BigInt(q)) return true;
  }
  return false;
}

function equationsEquivalent(studentExpr, answerExpr) {
  if (studentExpr.ops?.length !== 2 || answerExpr.ops?.length !== 2) return false;
  const sides = [studentExpr, answerExpr]
    .map((expr) => ce.box(['Subtract', expr.ops[0], expr.ops[1]]));
  const vars = [...new Set(sides.flatMap((side) => side.unknowns))];
  if (vars.length === 0) {
    const written = [studentExpr, answerExpr].map((eq) => eq.ops.map((op) => op.N()));
    const finite = (v) => Number.isFinite(v?.re) && Number.isFinite(v?.im);
    if (!written.flat().every(finite)) return false;
    const same = (a, b) => Math.hypot(a.re - b.re, a.im - b.im)
      <= SAMPLE_TOLERANCE * Math.max(1, Math.hypot(a.re, a.im), Math.hypot(b.re, b.im));
    const [student, answer] = written;
    return (same(student[0], answer[0]) && same(student[1], answer[1]))
      || (same(student[0], answer[1]) && same(student[1], answer[0]));
  }
  if (proportionalSides(sides, vars)) return true;
  // Clearing a variable denominator restates the same relation: `xy=16` IS
  // `y=\frac{16}{x}` (Elementary Algebra 8.9's inverse-variation keys, which
  // graded the learner's `xy=16` and `vw=3` incorrect, September 27, 2026).
  // Only a side's OWN variable denominators are multiplied through — where
  // one vanishes the uncleared side is undefined, so no solution is gained —
  // and the result must still be a CONSTANT multiple of the other side, so
  // `x^2y=16x` (the extra factor x admits the whole line x=0) and a solve
  // step multiplied by a variable (`x^2-3x=0` for `x-3=0`) stay refused.
  const cleared = sides.map((side) => {
    const denominators = variableDenominators(side);
    return denominators.length ? ce.box(['Multiply', side, ...denominators]) : null;
  });
  return (cleared[0] !== null && proportionalSides([cleared[0], sides[1]], vars))
    || (cleared[1] !== null && proportionalSides([sides[0], cleared[1]], vars))
    || (cleared[0] !== null && cleared[1] !== null && proportionalSides(cleared, vars));
}

/**
 * The distinct denominators holding an unknown that an expression divides
 * by — a `Divide`'s divisor, or the base of a negative power (raised to the
 * matching positive power) — read off the boxed expression.
 */
function variableDenominators(expr) {
  const found = new Map();
  const visit = (e) => {
    if (e.operator === 'Divide' && e.ops[1].unknowns.length) {
      found.set(e.ops[1].toString(), e.ops[1]);
    } else if (e.operator === 'Power' && e.ops[1].isNumberLiteral && e.ops[1].re < 0 && e.ops[0].unknowns.length) {
      const denominator = ce.box(['Power', e.ops[0], -e.ops[1].re]);
      found.set(denominator.toString(), denominator);
    }
    (e.ops ?? []).forEach(visit);
  };
  visit(expr);
  return [...found.values()];
}

/**
 * Are two moved-to-one-side equation forms nonzero CONSTANT multiples of
 * each other? Decided by sampling; see equationsEquivalent().
 */
function proportionalSides(sides, vars) {
  const samples = [];
  let bothVanished = 0;
  for (let i = 0; i < SAMPLE_POINTS.length && samples.length < SAMPLES_REQUIRED; i += 1) {
    const assignment = {};
    vars.forEach((name, j) => {
      assignment[name] = SAMPLE_POINTS[(i + 2 * j) % SAMPLE_POINTS.length];
    });
    const values = sides.map((side) => side.subs(assignment).N());
    if (!values.every((v) => Number.isFinite(v.re) && Number.isFinite(v.im))) continue; // singularity — try another point
    const vanished = values.map(sampleIsZero);
    if (vanished[0] !== vanished[1]) return false;
    if (vanished[0]) { bothVanished += 1; continue; }
    samples.push(values);
  }
  // Too few decidable points — a singularity at every sample — fails safe.
  if (samples.length + bothVanished < SAMPLES_REQUIRED) return false;
  // The cross-multiplication below compares every sample against the first,
  // so it decides nothing with fewer than two informative samples — and
  // `rest.every` on an empty list would pass. Sides that vanish together at
  // nearly every sample point are exactly the case sampling cannot tell
  // apart, so it must fail safe, not open.
  if (samples.length < 2) return false;
  const mul = (a, b) => ({ re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re });
  const [first, ...rest] = samples;
  return rest.every((sample) => {
    const left = mul(sample[0], first[1]);
    const right = mul(sample[1], first[0]);
    const scale = Math.max(1, Math.hypot(left.re, left.im), Math.hypot(right.re, right.im));
    return Math.hypot(left.re - right.re, left.im - right.im) <= SAMPLE_TOLERANCE * scale;
  });
}

/**
 * The ordered containers a response can be, as the engine boxes them:
 * `(0,4/3)` is a Tuple, `[-1,1]` a List, `(2,3]` an Interval whose endpoints
 * wear an `Open` wrapper. All three are order-sensitive, so they compare
 * position by position — and `Open` joins them so an interval's endpoints are
 * compared through the same recursion rather than by identity.
 *
 * A `Set` is deliberately absent: `\{1,2\}` is unordered, and grading it
 * positionally would be a new wrong answer, not a fixed one.
 */
const ORDERED_CONTAINERS = new Set(['Tuple', 'List', 'Interval', 'Open']);
const orderedContainer = (expr) => (ORDERED_CONTAINERS.has(expr.operator) ? expr.ops ?? [] : null);

/**
 * The terms a finite sigma sum lists, in order: `\sum_{n=1}^{5}(-1)^{n+1}n^2`
 * is 1, −4, 9, −16, 25. A constant coefficient outside (`3\sum…`, `-\sum…`)
 * multiplies every term. null when the expression is not one sigma with
 * integer bounds and at most SIGMA_TERM_LIMIT terms (an infinite series is
 * read by its value).
 *
 * Two sigma sums are the same answer when they list the same terms, not when
 * their totals agree: "write $1-4+9-16+25$ in summation notation" accepted
 * `\sum_{n=1}^{5}n` (also 15), and `\sum_{n=1}^{3}(-2)` passed for
 * $-2+4-6+8-10$ (Intermediate Algebra chapters 11–12 re-review, October 4,
 * 2026). A renamed or shifted index lists the same terms and still passes; a
 * bare total or the written-out sum is not a sigma and keeps its value
 * reading, which the `summation` form then refuses.
 */
const SIGMA_TERM_LIMIT = 500;
function sigmaTerms(expr) {
  let coefficient = 1;
  let sum = expr;
  if (sum.operator === 'Negate') {
    coefficient = -1;
    sum = sum.ops[0];
  } else if (sum.operator === 'Multiply') {
    const sums = sum.ops.filter((op) => op.operator === 'Sum');
    if (sums.length !== 1 || !sum.ops.every((op) => op === sums[0] || isConstantExpr(op))) return null;
    coefficient = ce.box(['Multiply', ...sum.ops.filter((op) => op !== sums[0])]);
    sum = sums[0];
  }
  if (sum.operator !== 'Sum' || sum.ops?.length !== 2) return null;
  const [body, limits] = sum.ops;
  if (limits.operator !== 'Limits' || limits.ops?.length !== 3) return null;
  const [index, lower, upper] = limits.ops;
  const bound = (e) => (e.isNumberLiteral && e.im === 0 && Number.isInteger(e.re) ? e.re : null);
  const [from, to] = [bound(lower), bound(upper)];
  if (!index.symbol || from === null || to === null || to < from || to - from >= SIGMA_TERM_LIMIT) return null;
  const terms = [];
  for (let k = from; k <= to; k += 1) {
    terms.push(ce.box(['Multiply', coefficient, body.subs({ [index.symbol]: ce.number(k) })]).evaluate());
  }
  return terms;
}

/**
 * `expr` numericized without the engine's chop. N() flushes a value below
 * its tolerance (1e-10) to 0 for most constructions — `2^{-80}`, `e^{-50}`,
 * `\frac{1}{3}\times10^{-20}` all evaluate to 0, while the literal
 * `3.33\times10^{-21}` does not — so a tiny value can only be compared with
 * the tolerance lowered for the one evaluation, and restored whatever happens.
 */
function unchoppedValue(expr) {
  const saved = ce.tolerance;
  try {
    ce.tolerance = Number.MIN_VALUE;
    return expr.N();
  } finally {
    ce.tolerance = saved;
  }
}

/**
 * Does a constant real key smaller than 1 DISAGREE relatively with the
 * response? `isEqual` compares within the engine's absolute tolerance
 * (1e-10), and the constant branch of numericallyEquivalent() within the
 * absolute SAMPLE_TOLERANCE, so every value below them equalled every other:
 * against the radon-222 key `3.77\times10^{-26}`, `9.99\times10^{-12}`,
 * `1\times10^{-30}` and `5\times10^{-26}` graded `correct` and `0` reached
 * the form check (Precalculus 4.1, October 4, 2026). The tolerance is the
 * sampling one, 1e-9 of the larger magnitude — the same 1e-9·max(1,|v|) a key
 * of 1 or more already gets, without the floor. Only ever a refusal: a pair
 * that agrees relatively still has to pass the usual paths, so no key of
 * ordinary size grades anything new. A zero key, a complex value, and
 * anything holding a variable are not read.
 */
function tinyConstantsDisagree(studentExpr, answerExpr) {
  if (studentExpr.unknowns.length !== 0 || answerExpr.unknowns.length !== 0
    || holdsComplexValue(studentExpr.json) || holdsComplexValue(answerExpr.json)) return false;
  // An exact zero the engine numericizes as float noise (`\tan\pi`,
  // −3.8e-25) is a zero key. Read through simplify(): `is(0)` chops too, and
  // called `e^{-50}` zero.
  if (answerExpr.simplify().isSame(ce.number(0))) return false;
  const [student, answer] = [studentExpr, answerExpr].map(unchoppedValue);
  const real = (v) => Number.isFinite(v?.re) && Math.abs(v.im ?? 0) === 0;
  if (!real(answer) || !real(student) || answer.re === 0 || Math.abs(answer.re) >= 1) return false;
  return Math.abs(student.re - answer.re)
    > SAMPLE_TOLERANCE * Math.max(Math.abs(student.re), Math.abs(answer.re));
}

function equivalent(studentExpr, answerExpr) {
  try {
    if (studentExpr.isSame(answerExpr)) return true;
    // A container compares MEMBER BY MEMBER, through this same function.
    //
    // Nothing below can decide one. `isEqual` on two tuples only reports what
    // canonicalization already folded, and `Subtract` of two tuples is a type
    // error, so the final `simplify()` fallback is dead here — which left the
    // whole ordered-pair convention ("Enter your answer as an ordered pair")
    // grading on canonical identity alone. Members the engine happens to fold
    // passed; anything else did not. `\left(\tfrac12,-\tfrac{\sqrt3}{2}\right)`
    // — the answerDisplay of §5.2's own coordinate item, and what MathLive
    // emits — boxes its second member as Negate(Divide(√3,2)) where the key's
    // `-\sqrt3/2` boxes as Divide(Negate(√3),2), and a correct answer was
    // marked wrong. `(2,x+x)` against `(2,2x)` failed the same way.
    //
    // A container against a non-container is never equivalent: a pair is not
    // a scalar, and the bare-list reading of `a,b` belongs to the list graders
    // above, which split before anything is parsed.
    // A `\cup` of intervals compares interval by interval, in any order — the
    // same recursion, so an endpoint the engine did not fold
    // (`(-\infty,-\frac{2}{2}]\cup[2,\infty)` against `(-\infty,-1]\cup…`)
    // is compared by value and then reaches the per-endpoint value forms,
    // exactly as it does in a lone interval. `isSame` alone decided a union,
    // so a right set with an unreduced endpoint graded `incorrect` where the
    // same endpoint in one interval graded `form` (Intermediate Algebra 2.6,
    // September 27, 2026).
    //
    // The engine nests a union of three or more to the right —
    // `a\cup b\cup c` boxes as Union(a, Union(b, c)) — so the members are
    // read flattened: matched as a nested pair, a correct union typed in
    // another order (`(1,5)\cup(-\infty,1)\cup(5,\infty)`) graded
    // `incorrect` (Precalculus 3.7, October 4, 2026).
    if (studentExpr.operator === 'Union' || answerExpr.operator === 'Union') {
      if (studentExpr.operator !== answerExpr.operator) return false;
      const unionMembers = (e) => (e.operator === 'Union' ? (e.ops ?? []).flatMap(unionMembers) : [e]);
      const unused = unionMembers(answerExpr);
      const members = unionMembers(studentExpr);
      if (members.length !== unused.length) return false;
      return members.every((member) => {
        const match = unused.findIndex((candidate) => equivalent(member, candidate));
        if (match === -1) return false;
        unused.splice(match, 1);
        return true;
      });
    }
    // Two finite sigma sums compare term by term (sigmaTerms).
    const studentTerms = sigmaTerms(studentExpr);
    const answerTerms = studentTerms && sigmaTerms(answerExpr);
    if (studentTerms && answerTerms) {
      return studentTerms.length === answerTerms.length
        && studentTerms.every((term, i) => equivalent(term, answerTerms[i]));
    }
    const studentMembers = orderedContainer(studentExpr);
    const answerMembers = orderedContainer(answerExpr);
    if (studentMembers || answerMembers) {
      return studentMembers !== null && answerMembers !== null
        && studentExpr.operator === answerExpr.operator
        && studentMembers.length === answerMembers.length
        && studentMembers.every((member, i) => equivalent(member, answerMembers[i]));
    }
    // Equation-vs-equation takes the sound proportionality check; an
    // equation against anything else is never equivalent (the variable
    // equations worth unwrapping were unwrapped by the caller).
    if (studentExpr.operator === 'Equal' || answerExpr.operator === 'Equal') {
      return studentExpr.operator === 'Equal' && answerExpr.operator === 'Equal'
        && equationsEquivalent(studentExpr, answerExpr);
    }
    // A tiny constant key is compared relatively before any engine or sampling
    // path can call it equal to every other tiny value.
    if (tinyConstantsDisagree(studentExpr, answerExpr)) return false;
    // `isEqual` must never see a radical-denominator quotient, or a logarithm
    // sharing an operand with a symbolic denominator — its two hang classes
    // (see the guards' banner). Only sampling provably returns there. The
    // logarithm class takes `simplify` down too, so routing it here covers
    // both entry points at once.
    if (radicalDenominator(studentExpr) || radicalDenominator(answerExpr)
      || logarithmOverSymbolDenominator(studentExpr)
      || logarithmOverSymbolDenominator(answerExpr)
      || fractionTimesSymbolQuotient(studentExpr)
      || fractionTimesSymbolQuotient(answerExpr)) {
      return numericallyEquivalent(studentExpr, answerExpr);
    }
    // A radical (or fractional power) over a symbol is decided by sampling
    // ALONE, and before `isEqual` is ever asked. The pinned engine's `N()`
    // drops a square root over a symbol — `\sqrt{x}` numericizes to `x`,
    // `\sqrt{3p}` to `1.732p` — and `isEqual` numericizes both sides first,
    // so it returned TRUE for `9x` against `9\sqrt{x}`, `x` against
    // `\sqrt{x}`, `\sqrt{x}+1` against `x+1`, and `-p^2\sqrt3` against
    // `-p\sqrt{3p}` (Elementary Algebra 9 re-review, September 27, 2026): a
    // learner who dropped the radical was marked right. Sampling substitutes
    // BEFORE numericizing (`subs().N()`), which that bug cannot reach, at
    // positive points away from 0 and 1 — the radicals chapters assume
    // variables are nonnegative, so `\sqrt{x^2}` and `x` agree there.
    //
    // `simplify` has its own hang class too — differences of
    // variable-radical expressions — and the step is load-bearing: `isEqual`
    // misses identities `simplify` catches (`\sqrt{64x^2}` vs `8x`), so the
    // replacement must decide, not just fail closed. Sampling is also more
    // complete than the engine was — it proves equalities `isEqual`
    // false-negatives on (a retyped `\sqrt[3]{32y^5}-\sqrt[3]{-108y^8}`
    // prompt) — which is why every radical re-expression exercise MUST carry
    // an answerForm: the lint's passable-by-retyping rule now sees those
    // pastes grade as value-equal.
    if (radicalOverSymbol(studentExpr) || radicalOverSymbol(answerExpr)) {
      return numericallyEquivalent(studentExpr, answerExpr);
    }
    // A third `isEqual` hang class (Elementary Algebra knowledge check 6–10,
    // September 27, 2026): a negative power over a symbol times a rational
    // with no terminating decimal — `(6u)^{-3}` (canonically
    // `\frac{1}{216}u^{-3}`), `(3u)^{-2}`, `\frac13u^{-1}` — never returns,
    // against ANY comparand, so a learner typing the unworked negative
    // exponent froze the page. `(2u)^{-3}` and `0.5u^{-3}` return, but the
    // class is decided by sampling whole: termination is the point, and
    // sampling (`subs().N()`, measured terminating on every shape) decides
    // these value-equalities as well as the engine did.
    if (negativePowerOverSymbol(studentExpr) || negativePowerOverSymbol(answerExpr)) {
      return numericallyEquivalent(studentExpr, answerExpr);
    }
    // Two CONSTANT complex values compare by their numeric parts, within the
    // sampling tolerance. `isEqual` compared the engine's floats exactly, and
    // the same complex value reached by two orders of operation can differ
    // in the last bit: `\frac{3\sqrt3 i}{5}` (1.0392304845413265i) graded
    // `incorrect` against the keyed `\frac{3\sqrt3}{5}i` (…263i), and
    // `2\sqrt2i+4\sqrt2i` against `6\sqrt2 i` (Intermediate Algebra 8.8 and
    // 9.1, October 3, 2026). Each side is evaluated on its own, never as a
    // difference, so no complex division is added to what the sides wrote.
    if (studentExpr.unknowns.length === 0 && answerExpr.unknowns.length === 0
      && (holdsComplexValue(studentExpr.json) || holdsComplexValue(answerExpr.json))) {
      const [student, answer] = [studentExpr.N(), answerExpr.N()];
      if ([student, answer].every((v) => Number.isFinite(v.re) && Number.isFinite(v.im))) {
        const scale = Math.max(1, Math.abs(student.re), Math.abs(student.im), Math.abs(answer.re), Math.abs(answer.im));
        if (Math.abs(student.re - answer.re) <= SAMPLE_TOLERANCE * scale
          && Math.abs(student.im - answer.im) <= SAMPLE_TOLERANCE * scale) return true;
      }
    }
    // An indexed term, `a_{n-1}` (a `Subscript`), never reaches `isEqual`:
    // the pinned engine cannot compile it, and the compile fallback assigns
    // its sample points to the engine's own symbols inside a scope that does
    // not own them, so popScope() leaves `a` or `n` holding a number. Every
    // later grading on the page then read `n` as a constant — `n=2n+1`
    // stopped writing its label's variable (Intermediate Algebra chapters
    // 11–12 re-review, October 4, 2026). Such a pair is decided by the
    // simplified difference alone.
    // A logarithm over a variable is decided by sampling on the key's real
    // domain: `isEqual` reads a logarithm of a negative as real and called
    // `\ln(x)` equal to `\ln(-x)` (outsideRealDomain, Precalculus 4.4,
    // October 4, 2026).
    if ((containsLogarithm(studentExpr) || containsLogarithm(answerExpr))
      && (studentExpr.unknowns.length > 0 || answerExpr.unknowns.length > 0)) {
      return numericallyEquivalent(studentExpr, answerExpr);
    }
    // A reciprocal trigonometric function over a variable is decided by
    // sampling too: `isEqual` and `simplify` miss `\frac{1}{\csc t}` against
    // `\sin t` (containsReciprocalTrig, Precalculus chapters 5–6 re-review,
    // October 4, 2026). Only ever reached after the canonical forms differ.
    if ((containsReciprocalTrig(studentExpr) || containsReciprocalTrig(answerExpr))
      && (studentExpr.unknowns.length > 0 || answerExpr.unknowns.length > 0)) {
      return numericallyEquivalent(studentExpr, answerExpr);
    }
    if (!holdsSubscript(studentExpr.json) && !holdsSubscript(answerExpr.json)
      && studentExpr.isEqual(answerExpr) === true) return true;
    const diff = ce.box(['Subtract', studentExpr, answerExpr]).simplify();
    return diff.isSame(ce.number(0));
  } catch {
    return false;
  }
}

/**
 * equivalent(), but accepting "x = value" for a bare-value answer (and vice
 * versa): if exactly one side is an equation whose one side is a plain
 * variable, grade its value against the other side. Students solving "solve
 * for x" exercises naturally type "x=-3/2" even when the authored answer is
 * just "-3/2". When BOTH are variable equations, the variables must match (an
 * authored "x=5" rejects a student's "y=5" — the Compute Engine's isEqual
 * would otherwise treat the two equations as equivalent) and the values are
 * compared. Inequalities are not equations and are never unwrapped.
 *
 * A variable equation against a NON-variable equation is compared as two
 * equations, not unwrapped: "Find an equation of a line…" authored
 * `y=3x-10` must accept the point-slope `y-2=3(x-4)` and the rearranged
 * `3x-y=10` — the same condition, stated the way the ask permits. Unwrapping
 * here would grade a condition against a value, which is never equivalent,
 * and marked those correct answers wrong. The flip side — a prompt equation
 * proportional to the key now grades `correct` — is the passable-by-retyping
 * hazard, guarded by `answerForm` ("solved", the named line forms) and the
 * content lint that demands one wherever a printed equation grades equal.
 *
 * Every grading path — scalar, ordered list member, unordered list member —
 * compares through this one function so the unwrap and the variable-name
 * guard can never diverge between them.
 */
function equivalentAllowingVariableEquation(studentExpr, answerExpr) {
  const studentEq = asVariableEquation(studentExpr);
  const answerEq = asVariableEquation(answerExpr);
  if (studentEq && answerEq) {
    if (studentEq.variable === answerEq.variable) {
      return equivalent(studentEq.value, answerEq.value);
    }
    // Two different isolated variables can still state one condition —
    // `x=5y-10` against `y=(x+10)/5` — so they compare as equations.
    // Proportionality sampling is what rejects `y=5` against `x=5`; the
    // engine's isEqual, which accepted them, is never consulted here.
    return equivalent(studentExpr, answerExpr);
  }
  // A one-sided unwrap reads the variable as a LABEL, and a label is never
  // written on its own other side: `y=3(y+1)^2+4` is an equation in y, not
  // the bare key `3(y+1)^2+4` (the sideways parabola x=3(y+1)^2+4) labelled
  // `y`, and it graded `correct` (Intermediate Algebra chapters 11–12
  // re-review, October 4, 2026). The variable must not occur free in the
  // value; a recursive formula's `a_{n-1}` is a different symbol from its
  // `a_n` and is unaffected. Two variable equations still compare value to
  // value above, so `x=2x-5` against `x=5` stays `incorrect`.
  const labels = (equation) => !equation.value.unknowns.includes(equation.variable);
  if (studentEq) {
    if (answerExpr.operator === 'Equal') return equivalent(studentExpr, answerExpr);
    return labels(studentEq) && equivalent(studentEq.value, answerExpr);
  }
  if (answerEq) {
    if (studentExpr.operator === 'Equal') return equivalent(studentExpr, answerExpr);
    return labels(answerEq) && equivalent(studentExpr, answerEq.value);
  }
  return equivalent(studentExpr, answerExpr);
}

function parseValid(raw) {
  try {
    // Through parseLatex, so a list member's degree mark is spelled out the
    // same way a scalar's is — otherwise "1400^\circ,760^\circ" would keep
    // the reduction the scalar path no longer has. And through
    // readFunctionNotation, so a member's written function label is read
    // the way the scalar path reads one: "x(t)=-2+6t, y(t)=3+4t" answers a
    // parameterize-the-line ask in the notation the question itself uses,
    // and used to grade incorrect against the keyed "-2+6t,3+4t" while the
    // `x=…, y=…` spelling (an equation the member comparison unwraps) and a
    // lone "x(t)=-2+6t" scalar both graded correct.
    const expression = parseLatex(readFunctionNotation(preprocess(raw)));
    return expression.isValid ? expression : null;
  } catch {
    return null;
  }
}

/**
 * True when every top-level comma in the string is digit grouping, so the
 * whole thing is one scalar rather than a list ("400,000", "-1,000",
 * "1,234.5", "\$400,000"). Asking stripGroupingCommas() itself, rather than
 * pattern-matching a bare integer, keeps this in step with the grouping rule
 * and covers signs, decimal tails, and currency prefixes for free.
 */
function commasAreAllGrouping(value) {
  return splitTopLevelCommas(stripGroupingCommas(value ?? '')).length === 1;
}

/**
 * Every way to rejoin student parts that digit-grouping commas split apart,
 * such that exactly `targetCount` members remain — so a learner who writes
 * "750,000, 350,000" for a two-member answer is read as the two grouped
 * amounts, not as one four-comma scalar. Only ever used to reconcile a count
 * mismatch — never to override a split that already matches, because
 * "…,-64,125" must stay two members when the answer has five.
 *
 * The predecessor (`mergeGroupedNumbers`) merged greedily left to right,
 * which collapsed "750,000,350,000" — whitespace is gone by this point —
 * into ONE fully-grouped scalar and graded the correct answer `incorrect`.
 * Targeting the answer's member count instead enumerates the (bounded)
 * coalescings that could mean what the learner typed; the caller then grades
 * each reading and a correct answer under ANY reading is correct. A wrong
 * answer cannot become right this way: every reading still has to match the
 * key member for member.
 *
 * Whether a comma is grouping is still decided by stripGroupingCommas()
 * itself — a run of parts may join exactly when its rejoined commas all
 * collapse — so this stays in step with the one grouping rule and a number
 * with several grouping commas ("1,048,576") joins across them.
 */
function groupedReadings(parts, targetCount) {
  const readings = [];
  const seen = new Set();
  const joinable = (a, b) => splitTopLevelCommas(stripGroupingCommas(`${a},${b}`)).length === 1;
  const walk = (index, current) => {
    if (readings.length >= 64) return;
    const remaining = parts.length - index;
    // prune: even one-part-per-member cannot reach the target any more
    if (current.length + remaining < targetCount) return;
    if (index === parts.length) {
      if (current.length === targetCount) {
        const key = current.join('\x00');
        if (!seen.has(key)) {
          seen.add(key);
          readings.push([...current]);
        }
      }
      return;
    }
    const previous = current.at(-1);
    if (previous !== undefined && joinable(previous, parts[index])) {
      current[current.length - 1] = `${previous},${parts[index]}`;
      walk(index + 1, current);
      current[current.length - 1] = previous;
    }
    if (current.length < targetCount) {
      current.push(parts[index]);
      walk(index + 1, current);
      current.pop();
    }
  };
  walk(0, []);
  return readings;
}

/**
 * Candidate rewrites of a parenthesized tuple whose member count exceeds the
 * answer's because digit-grouping commas were read as separators —
 * "(x,x+4000,78,000-x)" typed against a keyed 3-tuple means the 78,000 was
 * one number. stripGroupingCommas() itself deliberately never strips inside
 * a delimiter pair (a tuple comma is a separator by default), so the
 * reconciliation lives here instead, and — like the list readers — it only
 * runs on a count mismatch and only proposes readings the answer's own arity
 * asks for; the caller still has to grade each candidate against the key, so
 * a wrong value cannot become right. Each merged member has its grouping
 * commas removed so the candidate parses at the target arity.
 */
function groupedTupleRewrites(studentRaw, answerRaw) {
  const normalize = (value) => String(value ?? '').trim().replace(/\\left\s*|\\right\s*/g, '');
  const tupleParts = (text) => {
    if (!text.startsWith('(') || !text.endsWith(')')) return null;
    const inner = text.slice(1, -1);
    const parts = [];
    let depth = 0;
    let start = 0;
    for (let k = 0; k < inner.length; k += 1) {
      const ch = inner[k];
      if (ch === '\\') { k += 1; continue; }
      if (ch === '(' || ch === '[' || ch === '{') depth += 1;
      else if (ch === ')' || ch === ']' || ch === '}') {
        depth -= 1;
        if (depth < 0) return null;
      } else if (ch === ',' && depth === 0) {
        parts.push(inner.slice(start, k));
        start = k + 1;
      }
    }
    if (depth !== 0) return null;
    parts.push(inner.slice(start));
    return parts.map((part) => part.trim());
  };
  const studentParts = tupleParts(normalize(studentRaw));
  const answerParts = tupleParts(normalize(answerRaw));
  if (!studentParts || !answerParts) return [];
  if (studentParts.length <= answerParts.length) return [];
  if (studentParts.length - answerParts.length > 6) return [];
  const original = normalize(studentRaw);
  return groupedReadings(studentParts, answerParts.length)
    .map((reading) => `(${reading.map((member) => stripGroupingCommas(member)).join(',')})`)
    .filter((candidate) => candidate !== original);
}

/**
 * Grade a bare comma-separated list positionally.
 *
 * Splitting happens on the RAW strings, before preprocess(), for the same
 * reason checkUnordered() does it. Otherwise stripGroupingCommas() reads the
 * grouping-shaped tail of a list such as "1,-8,27,-64,125" as one number
 * ("-64,125" → -64125), silently turning five terms into four — and because
 * the authored answer is mangled the same way, a student who types only four
 * terms ("1,-8,27,-64125") was graded **correct**. That false accept is the
 * defect this closes; it is reachable by ordinary typing.
 *
 * An authored answer that is entirely one grouped integer ("400,000") keeps
 * the scalar reading, because there the comma really is digit grouping. That
 * ambiguity is unresolvable in a bare list, which is why authors should write
 * a scalar without commas, parenthesise an ordered pair, or split the parts
 * into separate exercises.
 *
 * Returns null when the shape does not apply, so the caller continues.
 */
function checkOrderedList(studentRaw, answerRaw) {
  const answerParts = splitTopLevelCommas(answerRaw ?? '');
  if (answerParts.length < 2 || commasAreAllGrouping(answerRaw)) return null;

  const answers = answerParts.map(parseValid);
  if (answers.some((part) => !part)) return null; // not a list of expressions — let the scalar path decide

  // The answer IS a list, so a student who supplies a different number of
  // members is wrong — never fall through to a comparison of two strings that
  // digit-grouping has mangled into the same shape. Reconcile a mismatch
  // first, though: a student may legitimately group members ("1,536", or a
  // whole list of grouped amounts, "750,000, 350,000"), and the
  // answerDisplay often shows exactly that form. A split that already
  // matches the count is never re-read.
  const rawParts = splitTopLevelCommas(studentRaw ?? '');
  const plain = plainNumberMembers(answerParts);
  const readings = (rawParts.length === answerParts.length
    ? [rawParts]
    : groupedReadings(rawParts, answerParts.length)).map((reading) => unpricedMembers(reading, plain));
  if (readings.length === 0) return { verdict: 'incorrect', members: null };

  const matches = (students) => students.every((student, i) => equivalentAllowingVariableEquation(student, answers[i]));
  let sawParseable = false;
  for (const reading of readings) {
    const students = reading.map(parseValid);
    if (students.some((part) => !part)) continue;
    sawParseable = true;
    if (matches(students)) return { verdict: 'correct', members: reading };
  }
  if (plain && unitlessReadings(readings).some((reading) => matchesParsed(reading, matches))) {
    return { verdict: 'unit', members: null };
  }
  return { verdict: sawParseable ? 'incorrect' : 'invalid', members: null };
}

/**
 * Money and unit words on a LIST of bare numbers, read the way checkAnswer()
 * reads them on one bare number.
 *
 * Both list paths graded each member as written, so a leading `\$` — the
 * money sign the page itself prints — made `\$8000, \$17000` against the key
 * `8000,17000` `invalid` where `\$237,186` against `237186` grades `correct`,
 * and `75 mph, 60 mph` against `75,60` graded `incorrect` where `140 miles`
 * against `140` reports `unit` (Elementary Algebra 3, September 27, 2026).
 * The same rules now hold per member, and only when EVERY key member is one
 * bare number — anywhere else a letter is a variable:
 *
 * - a leading `\$` (before or after a minus) is dropped from each member,
 *   after the digit-group reconciliation, so `\$8,000, \$17,000` is still
 *   read as the two grouped amounts it is;
 * - when no reading is correct as typed, a reading with the unit words
 *   removed from the members that carry them is tried, and a match reports
 *   `unit` ("enter it without the unit"). Every member's NUMBER must be
 *   right: a wrong member keeps the verdict `incorrect`.
 */
function plainNumberMembers(answerParts) {
  return answerParts.every((part) => PLAIN_NUMBER_KEY.test(preprocess(part)));
}

function unpricedMembers(reading, plain) {
  return plain ? reading.map((member) => member.replace(CURRENCY_PREFIX, '$1')) : reading;
}

/** Each reading with its unit-carrying members cut to the number, if any carried one. */
function unitlessReadings(readings) {
  return readings.flatMap((reading) => {
    let stripped = false;
    const members = reading.map((member) => {
      const tail = preprocess(member).match(UNIT_TAIL);
      if (!tail) return member;
      stripped = true;
      return tail[1];
    });
    return stripped ? [members] : [];
  });
}

function matchesParsed(reading, matches) {
  const students = reading.map(parseValid);
  return !students.some((part) => !part) && matches(students);
}

function checkUnordered(studentRaw, answerRaw) {
  const answerParts = splitTopLevelCommas(answerRaw);
  const answers = answerParts.map(parseValid);
  if (answers.some((part) => !part)) {
    console.warn(`FillIn: unordered answer prop is not valid LaTeX math: ${answerRaw}`);
    return { verdict: 'incorrect', members: null };
  }

  // Same reconciliation the ordered path applies: digit-grouping commas
  // inside members must not count as extra members, and every reading that
  // could mean what the learner typed is graded.
  const rawParts = splitTopLevelCommas(studentRaw);
  const plain = plainNumberMembers(answerParts);
  const readings = (rawParts.length === answerParts.length
    ? [rawParts]
    : groupedReadings(rawParts, answerParts.length)).map((reading) => unpricedMembers(reading, plain));

  const matches = (students) => {
    const unused = [...students];
    for (const expected of answers) {
      const match = unused.findIndex((candidate) => equivalentAllowingVariableEquation(candidate, expected));
      if (match === -1) return false;
      unused.splice(match, 1);
    }
    return true;
  };
  let sawParseable = false;
  let sawCountable = false;
  for (const reading of readings) {
    if (reading.length < 2) continue;
    sawCountable = true;
    const students = reading.map(parseValid);
    if (students.some((part) => !part)) continue;
    sawParseable = true;
    if (matches(students)) return { verdict: 'correct', members: reading };
  }
  if (plain && unitlessReadings(readings.filter((reading) => reading.length >= 2))
    .some((reading) => matchesParsed(reading, matches))) {
    return { verdict: 'unit', members: null };
  }
  if (!sawCountable) return { verdict: 'incorrect', members: null };
  return { verdict: sawParseable ? 'incorrect' : 'invalid', members: null };
}

/* ---------------------------------------------------------------------------
 * Answer FORM
 *
 * Grading is value-based, which makes a re-expression prompt ungradeable on
 * its own: "Simplify $-\tfrac{40}{88}$" has the printed fraction as a correct
 * *value*, so a learner passes by retyping the prompt. The missing constraint
 * is the shape of the response, and these predicates supply it.
 *
 * Which evidence a predicate reads depends on what it is distinguishing, and
 * the split is not a style choice:
 *
 * - NUMERAL forms read the LaTeX, because the Compute Engine erases exactly
 *   the distinction being checked — it can *evaluate* the difference away.
 *   `\frac{40}{88}` parses to ["Rational",5,11], `2^4\cdot5` to 80 and
 *   `4.2\times10^4` to 42000, even with canonical:false.
 * - SYMBOLIC forms read the parse, because there the opposite holds: there is
 *   nothing to evaluate in `(x+2)(x+4)`, so the Multiply survives verbatim
 *   while the expanded `x^2+6x+8` stays an Add. Reading the LaTeX instead
 *   would mean re-deriving \left, \cdot vs juxtaposition, unary signs, brace
 *   grouping and exponent folding — all of which the engine already knows.
 *
 * Either way the value comparison stays with the CAS; only the written form is
 * read off the response.
 *
 * A spec is a space-separated set of tokens, all of which must hold, so an ask
 * like "convert to an improper fraction in lowest terms" composes from the two
 * independent requirements it names rather than needing its own predicate.
 * ------------------------------------------------------------------------ */

const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));

/**
 * Trial division, deliberately bounded. This runs synchronously on the main
 * thread from the Check button, so an unbounded √n loop is a freeze a learner
 * can trigger: a factor just under 2^53 costs ~9.5e7 iterations, measured at
 * ~2.5s. Prime factorization is taught on two- and three-digit composites, so
 * nothing legitimate is anywhere near the ceiling; a factor above it is
 * reported "not prime", which fails the form and asks for a product of primes
 * rather than hanging the tab.
 */
const PRIME_CHECK_CEILING = 1e12;

function isPrime(n) {
  if (!Number.isInteger(n) || n < 2 || n > PRIME_CHECK_CEILING) return false;
  for (let d = 2; d * d <= n; d += 1) if (n % d === 0) return false;
  return true;
}

/** Strip sizing/spacing wrappers a MathLive field may emit around a response. */
function bareLatex(latex) {
  let bare = preprocess(latex)
    .replace(/\\(?:left|right|!|;|:)/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  // A learner may wrap the whole response in parentheses ("(-5/11)"); the
  // shape inside is what the form describes. Only strip a pair that encloses
  // everything — "(1)(2)" keeps its parens.
  while (bare.startsWith('(') && bare.endsWith(')')) {
    let depth = 0;
    let wrapsAll = true;
    for (let i = 0; i < bare.length; i += 1) {
      if (bare[i] === '(') depth += 1;
      else if (bare[i] === ')') {
        depth -= 1;
        if (depth === 0 && i < bare.length - 1) { wrapsAll = false; break; }
      }
    }
    if (!wrapsAll) break;
    bare = bare.slice(1, -1).trim();
  }
  return bare;
}

/**
 * Strip a written `y=`/`x=`/`f(x)=`/`f^{-1}(x)=` label off bareLatex() output. The label
 * is written, not parsed: `f(x)=…` boxes as an equation on a function
 * application, which no equation unwrap in the grader reads.
 */
function stripWrittenLabel(bare) {
  // `f^{-1}(x)=` is a label too: an inverse-formula ask answered in the
  // notation the question used.
  const label = bare.match(/^[a-zA-Z](?:_\{p+\})?(?:\^\{-1\})?\s*(?:\(\s*(?:[a-zA-Z]|-?\d+(?:\.\d+)?)\s*\))?\s*=/);
  return label ? bare.slice(label[0].length) : bare;
}

/**
 * Split LaTeX on its top-level `+`/`-`, respecting `{}`/`()` groups. A leading
 * sign starts the first term rather than delimiting an empty one, so `-3x+5`
 * is two terms.
 */
function splitTopLevelTerms(latex) {
  const terms = [];
  let depth = 0;
  let term = '';
  for (let i = 0; i < latex.length; i += 1) {
    const char = latex[i];
    if (char === '{' || char === '(') depth += 1;
    else if (char === '}' || char === ')') depth -= 1;
    if (depth === 0 && (char === '+' || char === '-') && term.trim()) {
      terms.push(term);
      term = '';
      continue;
    }
    term += char;
  }
  terms.push(term);
  return terms;
}

// A TeX argument is a braced group OR a single token, so a MathLive field
// emits `\frac79` for 7/9 while `\frac{12}{5}` keeps its braces. Both are the
// same fraction; a braces-only pattern would reject every single-digit
// fraction a learner types.
const TEX_INT_ARG = String.raw`(?:\{\s*([+-]?\d+)\s*\}|(\d))`;
const argValue = (braced, bare) => Number(braced ?? bare);

/** `\frac{a}{b}` (any sizing variant), with the sign inside or outside. */
function asFraction(latex) {
  const match = bareLatex(latex)
    .match(new RegExp(String.raw`^([+-]?)\s*\\[tdc]?frac\s*${TEX_INT_ARG}\s*${TEX_INT_ARG}$`));
  if (!match) return null;
  const numerator = argValue(match[2], match[3]);
  const denominator = argValue(match[4], match[5]);
  if (!denominator) return null;
  const negative = (match[1] === '-') !== (numerator < 0) !== (denominator < 0);
  // How many minus signs the writing spends on the one sign it states:
  // `\frac{-23}{-4}` and `-\frac{-23}{4}` write two, `\frac{23}{-4}` puts its
  // one in the denominator — sign work `lowest-terms` refuses.
  const signs = (match[1] === '-') + (numerator < 0) + (denominator < 0);
  return {
    numerator: Math.abs(numerator), denominator: Math.abs(denominator), negative, signs,
    negativeDenominator: denominator < 0,
  };
}

/** An integer followed by a fraction: `2\frac{2}{3}`. */
function asMixedNumber(latex) {
  const match = bareLatex(latex)
    .match(new RegExp(String.raw`^([+-]?)\s*(\d+)\s*\\[tdc]?frac\s*${TEX_INT_ARG}\s*${TEX_INT_ARG}$`));
  if (!match) return null;
  const denominator = argValue(match[5], match[6]);
  if (!denominator) return null;
  return { whole: Number(match[2]), numerator: argValue(match[3], match[4]), denominator };
}

// A leading-dot decimal (".375") is a decimal a learner really types.
const asDecimal = (latex) => (/^[+-]?(?:\d+(?:\.\d+)?|\.\d+)$/.test(bareLatex(latex)) ? bareLatex(latex) : null);

/** `a \times 10^{n}` — the coefficient and exponent, unevaluated. */
function asScientific(latex) {
  const match = bareLatex(latex)
    .match(/^([+-]?\d+(?:\.\d+)?)\s*(?:\\times|\\cdot|\*)\s*10\s*\^\s*\{?\s*(-?\d+)\s*\}?$/);
  return match ? { coefficient: Number(match[1]), exponent: Number(match[2]) } : null;
}

/** `2^4 \cdot 5` — the integer bases of a product of powers, unevaluated. */
function asProductOfPowers(latex) {
  const bare = bareLatex(latex);
  if (!bare) return null;
  const factors = bare.split(/\\times|\\cdot|\*/);
  const bases = [];
  for (const factor of factors) {
    const match = factor.trim().match(/^(\d+)(?:\s*\^\s*\{?\s*(\d+)\s*\}?)?$/);
    if (!match) return null;
    // A zero exponent is decoration, not a factor: "k^0" is 1 whatever k is,
    // so appending it left the value untouched while smuggling k into the
    // base list. That made a padded response pass `prime-product` — and, with
    // k chosen large, made the primality loop below the slowest thing on the
    // page. A factorization does not carry a factor raised to the zero power.
    if (match[2] !== undefined && Number(match[2]) === 0) return null;
    bases.push(Number(match[1]));
  }
  return bases;
}

/**
 * The variable base of a power-like factor, for the two monomial readers below.
 *
 * A rational exponent has two spellings in the parse and only one of them is a
 * `Power`: the engine collapses a **unit** fraction to a root node, so
 * `a^{\frac12}` parses as `["Sqrt","a"]` and `a^{\frac13}` as
 * `["Root","a",3]`, while a non-unit `a^{\frac23}` stays
 * `["Power","a",["Rational",2,3]]`. Reading only `Power` therefore made
 * `a^{\frac12}b` — the correct, fully simplified answer to
 * $(a^{1/3}b^{2/3})^{3/2}$ — fail `single-term`, which is a rule firing on
 * sound content.
 *
 * Only a *symbolic* radicand unwraps. `\sqrt{2}` is a number in radical
 * clothing, not a variable base, and keeps failing exactly as before.
 */
function powerLikeBase(factor) {
  if (factor.operator === 'Power') return factor.ops[0];
  if (factor.operator === 'Sqrt' || factor.operator === 'Root') {
    const radicand = factor.ops[0];
    if (radicand && radicand.symbol) return radicand;
  }
  return factor;
}

/**
 * A monomial's numeric coefficient and its variable bases — or null when the
 * expression is not a single term. `Multiply` nests (`15a` inside a longer
 * product), so the factors are flattened before counting.
 *
 * "Single term" means what a learner means by it: one coefficient and each
 * variable appearing once. `(5y^7)(-7y^4)` fails on both counts, which is
 * exactly what separates it from its own product `-35y^{11}`.
 */
function monomialParts(expr) {
  const factors = [];
  const flatten = (e) => {
    if (e.operator === 'Multiply') e.ops.forEach(flatten);
    else if (e.operator === 'Negate') flatten(e.ops[0]);
    else factors.push(e);
  };
  flatten(expr);
  let coefficient = 1;
  let numerics = 0;
  const bases = new Set();
  for (const factor of factors) {
    if (factor.isNumberLiteral) {
      numerics += 1;
      coefficient *= Math.abs(factor.re);
      continue;
    }
    const base = powerLikeBase(factor);
    const name = base.symbol;
    if (!name || bases.has(name)) return null;
    bases.add(name);
  }
  return numerics <= 1 ? { coefficient, bases } : null;
}

/**
 * The same flattening, but *combining* repeats instead of rejecting them:
 * `(6m^2n)(5m^4n^3)` is one monomial worth `30m^6n^4`. Used for the
 * reduced-fraction test, where an unmultiplied numerator is still a monomial
 * and its coefficient still has to be compared against the denominator's.
 *
 * Kept separate from monomialParts() on purpose — `single-term` must *reject*
 * the unmultiplied form, which is the whole point of that token.
 */
function monomialMagnitude(expr) {
  const factors = [];
  const flatten = (e) => {
    if (e.operator === 'Multiply') e.ops.forEach(flatten);
    else if (e.operator === 'Negate') flatten(e.ops[0]);
    else factors.push(e);
  };
  flatten(expr);
  let coefficient = 1;
  const bases = new Set();
  for (const factor of factors) {
    if (factor.isNumberLiteral) {
      // A complex literal's size is its imaginary part when it is pure
      // imaginary (`16i` is 16 of the unit i), and the common factor of its
      // parts otherwise. Reading `.re` alone made `16i` worth 0, so
      // `\frac{16i}{17}` — gcd(0, 17) = 17 — was "unreduced" and the finished
      // `\frac{4}{17}+\frac{16i}{17}` graded `form` under `no-like-terms`
      // (Intermediate Algebra 8.8, October 3, 2026).
      const [re, im] = [Math.abs(factor.re), Math.abs(factor.im ?? 0)];
      if (im === 0) coefficient *= re;
      else if (re === 0) coefficient *= im;
      else if (Number.isInteger(re) && Number.isInteger(im)) coefficient *= gcd(re, im);
      else return null;
      continue;
    }
    // Deliberately *not* powerLikeBase(): `reduced-fraction` fails open on a
    // half it cannot read, so widening what counts as a base here would make it
    // start *rejecting* answers like `\frac{\sqrt{x}}{x}` that it currently
    // passes on value. Widening `single-term` fixes a false rejection;
    // widening this would create one.
    const base = factor.operator === 'Power' ? factor.ops[0] : factor;
    if (!base.symbol) return null;
    bases.add(base.symbol);
  }
  return Number.isFinite(coefficient) ? { coefficient, bases } : null;
}

/**
 * Is a quotient of two monomialMagnitude() results reduced? A missing side is
 * a polynomial part, where the shape alone is the test. gcd is an integer
 * notion, so a decimal coefficient (`\frac{1.5}{x}`) has nothing to cancel and
 * must not be fed to it — gcd(1.5, 1) walks to 0.5 and fails a reduced
 * fraction.
 */
function reducedMonomialQuotient(numerator, denominator) {
  if (!numerator || !denominator) return true;
  if ([...numerator.bases].some((name) => denominator.bases.has(name))) return false;
  return !(Number.isInteger(numerator.coefficient) && Number.isInteger(denominator.coefficient))
    || gcd(numerator.coefficient, denominator.coefficient) === 1;
}

// --------------------------------------------------------------------------
// Integer-coefficient polynomials, for `reduced-fraction`. "Simplify
// $\frac{x^2-x-2}{x^2-3x+2}$" is separated from its answer $\frac{x+1}{x-1}$
// by cancelling a common POLYNOMIAL factor, which is a gcd computation rather
// than a shape — the one thing the monomial test above cannot see. The
// corpus is integer coefficients, degree ≤ 3, at most two variables, but the
// gcd below is exact for any of it: BigInt arithmetic, primitive-PRS
// Euclidean in the first variable, contents handled by recursion.
//
// Representation: recursive dense. With `depth` variables remaining, a
// polynomial is an array of coefficients indexed by the exponent of the
// current variable, each itself a polynomial in the remaining `depth - 1`;
// at depth 0 it is a plain BigInt. Zero is the empty array (or 0n), and
// arrays are kept trimmed so the last entry is nonzero.
// --------------------------------------------------------------------------

const bigintGcd = (a, b) => {
  let x = a < 0n ? -a : a;
  let y = b < 0n ? -b : b;
  while (y) [x, y] = [y, x % y];
  return x;
};

const polyZero = (depth) => (depth === 0 ? 0n : []);
const polyIsZero = (value, depth) => (depth === 0 ? value === 0n : value.length === 0);

function polyTrim(coefficients, depth) {
  let length = coefficients.length;
  while (length > 0 && polyIsZero(coefficients[length - 1], depth - 1)) length -= 1;
  return coefficients.slice(0, length);
}

function polyConst(value, depth) {
  if (depth === 0) return value;
  return value === 0n ? [] : [polyConst(value, depth - 1)];
}

/** The polynomial `1 · v` where v is the variable `index` levels down. */
function polyVariable(index, depth) {
  if (index === 0) return [polyZero(depth - 1), polyConst(1n, depth - 1)];
  return [polyVariable(index - 1, depth - 1)];
}

function polyNeg(value, depth) {
  if (depth === 0) return -value;
  return value.map((coefficient) => polyNeg(coefficient, depth - 1));
}

function polyAdd(left, right, depth) {
  if (depth === 0) return left + right;
  const sum = [];
  for (let i = 0; i < Math.max(left.length, right.length); i += 1) {
    sum.push(polyAdd(left[i] ?? polyZero(depth - 1), right[i] ?? polyZero(depth - 1), depth - 1));
  }
  return polyTrim(sum, depth);
}

const polySub = (left, right, depth) => polyAdd(left, polyNeg(right, depth), depth);

function polyMul(left, right, depth) {
  if (depth === 0) return left * right;
  if (left.length === 0 || right.length === 0) return [];
  const product = Array.from({ length: left.length + right.length - 1 }, () => polyZero(depth - 1));
  for (let i = 0; i < left.length; i += 1) {
    for (let j = 0; j < right.length; j += 1) {
      product[i + j] = polyAdd(product[i + j], polyMul(left[i], right[j], depth - 1), depth - 1);
    }
  }
  return polyTrim(product, depth);
}

/** Multiply every coefficient by `scalar` (an element one level down). */
const polyScaleCoefficients = (value, scalar, depth) => polyTrim(
  value.map((coefficient) => polyMul(coefficient, scalar, depth - 1)),
  depth,
);

/**
 * Exact division, used only to divide a content out of its own polynomial —
 * every step divides evenly by construction, so an inexact step is an
 * internal bug and throws (the predicate catches and fails open).
 */
function polyDivExact(dividend, divisor, depth) {
  if (depth === 0) {
    if (divisor === 0n || dividend % divisor !== 0n) throw new Error('inexact polynomial division');
    return dividend / divisor;
  }
  if (dividend.length === 0) return [];
  if (divisor.length === 0) throw new Error('inexact polynomial division');
  let remainder = dividend;
  const quotient = Array.from(
    { length: dividend.length - divisor.length + 1 },
    () => polyZero(depth - 1),
  );
  const divisorLead = divisor[divisor.length - 1];
  while (remainder.length >= divisor.length) {
    const shift = remainder.length - divisor.length;
    const term = polyDivExact(remainder[remainder.length - 1], divisorLead, depth - 1);
    quotient[shift] = term;
    const subtrahend = [
      ...Array.from({ length: shift }, () => polyZero(depth - 1)),
      ...polyScaleCoefficients(divisor, term, depth),
    ];
    remainder = polySub(remainder, subtrahend, depth);
  }
  if (remainder.length !== 0) throw new Error('inexact polynomial division');
  return polyTrim(quotient, depth);
}

/** The bottom-level integer under the chain of leading coefficients. */
function polyLeadingInteger(value, depth) {
  if (depth === 0) return value;
  return polyLeadingInteger(value[value.length - 1], depth - 1);
}

/**
 * Flip the overall sign when the leading coefficient is negative, so `2 - x`
 * normalizes to the same primitive as `x - 2` and the PRS reports their
 * shared degree-1 factor — the "opposite binomials" prompts depend on it.
 */
function polyNormalizeSign(value, depth) {
  if (polyIsZero(value, depth)) return value;
  return polyLeadingInteger(value, depth) < 0n ? polyNeg(value, depth) : value;
}

/** gcd of all coefficients — an element one level down, sign-normalized. */
function polyContent(value, depth) {
  let content = polyZero(depth - 1);
  for (const coefficient of value) content = polyGcd(content, coefficient, depth - 1);
  return content;
}

const polyPrimitive = (value, depth) => polyNormalizeSign(
  polyScaleDown(value, polyContent(value, depth), depth),
  depth,
);

const polyScaleDown = (value, scalar, depth) => polyTrim(
  value.map((coefficient) => polyDivExact(coefficient, scalar, depth - 1)),
  depth,
);

/**
 * Pseudo-remainder: repeatedly scale by the divisor's leading coefficient so
 * every cancellation is exact. The stray `lc(divisor)^k` factor is harmless —
 * the caller re-primitivizes every remainder anyway.
 */
function polyPseudoRemainder(dividend, divisor, depth) {
  let remainder = dividend;
  const divisorDegree = divisor.length - 1;
  const divisorLead = divisor[divisor.length - 1];
  while (remainder.length - 1 >= divisorDegree && remainder.length > 0) {
    const shift = remainder.length - 1 - divisorDegree;
    const scaled = polyScaleCoefficients(remainder, divisorLead, depth);
    const subtrahend = [
      ...Array.from({ length: shift }, () => polyZero(depth - 1)),
      ...polyScaleCoefficients(divisor, remainder[remainder.length - 1], depth),
    ];
    remainder = polySub(scaled, subtrahend, depth);
  }
  return remainder;
}

/**
 * Exact multivariate gcd: Euclid on primitive parts in the current variable,
 * contents by recursion, BigInt at the bottom. Result is sign-normalized, so
 * the quotient is reduced exactly when this returns the constant 1.
 */
function polyGcd(left, right, depth) {
  if (depth === 0) return bigintGcd(left, right);
  if (polyIsZero(left, depth)) return polyNormalizeSign(right, depth);
  if (polyIsZero(right, depth)) return polyNormalizeSign(left, depth);
  const leftContent = polyContent(left, depth);
  const rightContent = polyContent(right, depth);
  let a = polyPrimitive(left, depth);
  let b = polyPrimitive(right, depth);
  if (a.length < b.length) [a, b] = [b, a];
  while (!polyIsZero(b, depth)) {
    const remainder = polyPseudoRemainder(a, b, depth);
    a = b;
    b = polyIsZero(remainder, depth) ? remainder : polyPrimitive(remainder, depth);
  }
  const contentGcd = polyGcd(leftContent, rightContent, depth - 1);
  return polyScaleCoefficients(a, contentGcd, depth);
}

/** The constant a polynomial is, or null when any variable survives. */
function polyConstantValue(value, depth) {
  if (depth === 0) return value;
  if (value.length === 0) return 0n;
  if (value.length > 1) return null;
  return polyConstantValue(value[0], depth - 1);
}

/** Every symbol in the tree — free variables for the polynomial reading. */
function collectSymbols(expr, out) {
  if (expr.symbol) out.add(expr.symbol);
  for (const op of expr.ops ?? []) collectSymbols(op, out);
}

/** No symbol anywhere in the parse — a numeric constant. */
function isConstantExpr(expr) {
  const symbols = new Set();
  collectSymbols(expr, symbols);
  return symbols.size === 0;
}

/**
 * A parsed half as an integer-coefficient polynomial over `vars`, or null
 * when it is not one — a decimal or Rational coefficient, a radical, an
 * absolute value, a quotient, a non-integer or out-of-range exponent. The
 * caller FAILS OPEN on null: a form check must never reject a correct answer
 * it cannot read. The `.im` guard matters — a complex literal like `4i`
 * reports `re: 0`, which would otherwise read as the integer 0.
 */
function exprToPolynomial(expr, vars) {
  const depth = vars.length;
  const convert = (e) => {
    if (e.isNumberLiteral) {
      if (e.im !== 0 || !Number.isInteger(e.re) || Math.abs(e.re) > Number.MAX_SAFE_INTEGER) {
        return null;
      }
      return polyConst(BigInt(e.re), depth);
    }
    if (e.symbol) {
      const index = vars.indexOf(e.symbol);
      return index === -1 ? null : polyVariable(index, depth);
    }
    const ops = e.ops ?? [];
    if (e.operator === 'Negate') {
      const operand = convert(ops[0]);
      return operand === null ? null : polyNeg(operand, depth);
    }
    if (e.operator === 'Add' || e.operator === 'Subtract') {
      let sum = null;
      for (const [i, op] of ops.entries()) {
        let term = convert(op);
        if (term === null) return null;
        if (e.operator === 'Subtract' && i > 0) term = polyNeg(term, depth);
        sum = sum === null ? term : polyAdd(sum, term, depth);
      }
      return sum;
    }
    if (e.operator === 'Multiply') {
      let product = polyConst(1n, depth);
      for (const op of ops) {
        const factor = convert(op);
        if (factor === null) return null;
        product = polyMul(product, factor, depth);
      }
      return product;
    }
    if (e.operator === 'Power') {
      const exponent = ops[1];
      if (!exponent?.isNumberLiteral || exponent.im !== 0 || !Number.isInteger(exponent.re)
        || exponent.re < 0 || exponent.re > 8) return null;
      const base = convert(ops[0]);
      if (base === null) return null;
      let power = polyConst(1n, depth);
      for (let i = 0; i < exponent.re; i += 1) power = polyMul(power, base, depth);
      return power;
    }
    return null;
  };
  return convert(expr);
}

/**
 * Is a quotient of two written polynomial halves reduced — no common integer
 * factor and no common polynomial factor? True (fail open) when either half
 * is not an integer-coefficient polynomial.
 */
function reducedPolynomialQuotient(numeratorExpr, denominatorExpr) {
  const vars = new Set();
  collectSymbols(numeratorExpr, vars);
  collectSymbols(denominatorExpr, vars);
  const sorted = [...vars].sort();
  const numerator = exprToPolynomial(numeratorExpr, sorted);
  const denominator = exprToPolynomial(denominatorExpr, sorted);
  if (numerator === null || denominator === null) return true;
  if (polyIsZero(numerator, sorted.length) || polyIsZero(denominator, sorted.length)) return true;
  try {
    const common = polyGcd(numerator, denominator, sorted.length);
    return polyConstantValue(common, sorted.length) === 1n;
  } catch {
    return true;
  }
}

/**
 * How many factors a response is written as, and how many of them are
 * multi-term — or null when it is not a product at all.
 *
 * This is the first predicate helper to read the PARSED expression rather than
 * the LaTeX; see the section banner for why symbolic structure survives where
 * numeral structure does not. Working from the parse means `\left(`, MathLive's
 * `{(5u-v)}^2`, `\cdot` versus juxtaposition and a leading unary minus all
 * arrive already normalized.
 *
 * A `\pm1` factor is skipped rather than counted, so `1(x^2+6x+8)` cannot buy
 * its way past the "two factors" test. (Most such dodges never even reach here
 * — the engine folds `1(x^2+6x+8)` and `\frac{x}{x}(x^2+6x+8)` back to a plain
 * Add on its own.)
 */
/** Is this factor worth exactly ±1 — however it is written? */
const isUnitFactor = (factor) => {
  try {
    return numericallyEquivalent(factor, ce.number(1))
      || numericallyEquivalent(factor, ce.number(-1));
  } catch {
    return false;
  }
};

function factorCounts(expr) {
  if (expr.operator === 'Negate') return factorCounts(expr.ops[0]);
  // `(x+2)^3` is three copies of one multi-term factor, so a perfect square
  // like `(4y+3)^2` satisfies "at least two factors" the way it should.
  if (expr.operator === 'Power') {
    const [base, exponent] = expr.ops;
    const power = exponent.re;
    // `y^0` is a written-out 1. It factors nothing, so it contributes no
    // factor — without this, appending `\cdot y^0` to the printed trinomial
    // supplied the second "factor" this predicate counts, and the response
    // the exercise exists to reject passed as factored.
    if (power === 0) return { count: 0, compound: 0 };
    return base.operator === 'Add' && Number.isInteger(power) && power >= 2
      ? { count: power, compound: 1 }
      : null;
  }
  if (expr.operator !== 'Multiply') return null;
  let count = 0;
  let compound = 0;
  for (const factor of expr.ops) {
    const nested = factorCounts(factor);
    if (nested) {
      count += nested.count;
      compound += nested.compound;
      continue;
    }
    if (factor.isNumberLiteral && (factor.re === 1 || factor.re === -1)) continue;
    // …and a factor that merely IS one without saying so. `\frac{\log 7}{\log 7}`,
    // `\sqrt[3]{1}` and `1+0\cdot x^{1/2}` each multiply by exactly 1 while
    // staying symbolic through canonicalization, so each supplied the second
    // "factor" this predicate counts and passed the printed trinomial off as
    // factored. Decided by sampling — the same bounded evaluation the hang
    // guards use — because a unit factor can be written any number of ways
    // and only its value is common to them.
    if (isUnitFactor(factor)) continue;
    count += 1;
    if (factor.operator === 'Add') compound += 1;
  }
  return { count, compound };
}

function asFactoredProduct(latex) {
  let expr;
  try {
    expr = parseLatex(preprocess(latex));
  } catch {
    return null;
  }
  return expr.isValid ? factorCounts(expr) : null;
}

// --------------------------------------------------------------------------
// Complete factorization, for `factored-completely`. `factored` reads only
// the shape, so on a "Factor completely" ask the half-finished `(2x+4)(x+2)`,
// `2(x^2+4x+4)` and `x(xy+y^2)` passed against `2(x+2)^2` and `xy(x+y)`.
//
// The response is read as a product over the integers: numeric constants,
// variable powers, and polynomial factors, each with a multiplicity. It is
// complete when
//   (a) every polynomial factor is PRIMITIVE — integer coefficients with gcd
//       1 and no variable common to all its terms — and
//   (b) the number of non-constant factors, counted with multiplicity (`x^3`
//       is 3, `(x+2)^2` is 2), is at least the key's count.
// Value equality is already established and the key is complete, so by
// unique factorization in Z[x,y,…] the two together say every factor is
// irreducible: a primitive factor carries no integer prime, each non-constant
// factor holds at least one irreducible, and the key's count IS the number of
// irreducibles — a response that reaches it with no factor left reducible
// has split every one. No polynomial factoring is needed, only counting.
//
// Constants are free: `2(x+2)^2`, `-2(x+2)^2`, `2\cdot1(x+2)^2` all pass,
// because with every polynomial factor primitive the constant can only be
// the content (Gauss's lemma). A sign-flipped factor, `-(2-x)` for `(x-2)`,
// is the same primitive up to a unit, so sign and order never matter.
//
// A factor with rational but non-integer coefficients — `4(\tfrac12x+1)(x+2)`,
// `(0.5x+1)` — is NOT primitive: the book factors over the integers, and the
// `\tfrac12` is exactly the common factor 2 left inside `(x+2)` unfactored
// (`4(\tfrac12x+1)` is `2x+4`). A factor the reader cannot read at all (a
// radical of a variable, an absolute value, a variable denominator) makes
// the profile null: the KEY then falls back to the shape check, the response
// fails (see the predicate for why the two directions differ). Constants
// inside a factor are EVALUATED, so `(2x+\sqrt{16})` reads as `(2x+4)` and
// an irrational constant (`x-\sqrt2`) makes the factor unreadable.
// --------------------------------------------------------------------------

/** A finite real value as an exact small-denominator fraction, or null. */
function rationalOfValue(value) {
  if (value?.isNumberLiteral !== true || value.im !== 0 || !Number.isFinite(value.re)
    || Math.abs(value.re) > Number.MAX_SAFE_INTEGER) return null;
  for (let d = 1; d <= 1000; d += 1) {
    const scaled = value.re * d;
    const rounded = Math.round(scaled);
    if (Math.abs(scaled - rounded) < 1e-9 * Math.max(1, Math.abs(scaled))) {
      const g = bigintGcd(BigInt(rounded), BigInt(d)) || 1n;
      return [BigInt(rounded) / g, BigInt(d) / g];
    }
  }
  return null;
}

const ratNormalize = ([n, d]) => {
  const g = bigintGcd(n, d) || 1n;
  const sign = d < 0n ? -1n : 1n;
  return [(sign * n) / g, (sign * d) / g];
};
const ratAdd = (a, b) => ratNormalize([a[0] * b[1] + b[0] * a[1], a[1] * b[1]]);
const ratMul = (a, b) => ratNormalize([a[0] * b[0], a[1] * b[1]]);

/**
 * A factor as a sparse rational-coefficient polynomial — a Map from the
 * exponent vector (joined) to a [numerator, denominator] BigInt pair — or null
 * when it is not a polynomial in `vars` with rational coefficients.
 */
function exprToRationalTerms(expr, vars) {
  const zeroKey = vars.map(() => 0).join(',');
  const constant = (rational) => (rational[0] === 0n ? new Map() : new Map([[zeroKey, rational]]));
  const add = (left, right) => {
    const sum = new Map(left);
    for (const [key, coefficient] of right) {
      const next = sum.has(key) ? ratAdd(sum.get(key), coefficient) : coefficient;
      if (next[0] === 0n) sum.delete(key);
      else sum.set(key, next);
    }
    return sum;
  };
  const mul = (left, right) => {
    let product = new Map();
    for (const [leftKey, leftCoefficient] of left) {
      const leftExponents = leftKey.split(',').map(Number);
      for (const [rightKey, rightCoefficient] of right) {
        const exponents = rightKey.split(',').map((e, i) => Number(e) + leftExponents[i]);
        product = add(product, new Map([[exponents.join(','), ratMul(leftCoefficient, rightCoefficient)]]));
      }
    }
    return product;
  };
  const convert = (e) => {
    if (e.symbol && vars.includes(e.symbol)) {
      return new Map([[vars.map((v) => (v === e.symbol ? 1 : 0)).join(','), [1n, 1n]]]);
    }
    if (isConstantExpr(e)) {
      let rational;
      try {
        rational = rationalOfValue(e.isNumberLiteral ? e : e.N());
      } catch {
        return null;
      }
      return rational === null ? null : constant(rational);
    }
    const ops = e.ops ?? [];
    if (e.operator === 'Negate') {
      const operand = convert(ops[0]);
      return operand === null ? null : mul(operand, constant([-1n, 1n]));
    }
    if (e.operator === 'Add' || e.operator === 'Subtract') {
      let sum = new Map();
      for (const [i, op] of ops.entries()) {
        let term = convert(op);
        if (term === null) return null;
        if (e.operator === 'Subtract' && i > 0) term = mul(term, constant([-1n, 1n]));
        sum = add(sum, term);
      }
      return sum;
    }
    if (e.operator === 'Multiply') {
      let product = constant([1n, 1n]);
      for (const op of ops) {
        const factor = convert(op);
        if (factor === null) return null;
        product = mul(product, factor);
      }
      return product;
    }
    if (e.operator === 'Divide' && isConstantExpr(ops[1])) {
      const numerator = convert(ops[0]);
      const denominator = convert(ops[1]);
      if (numerator === null || denominator === null || denominator.size !== 1) return null;
      const [n, d] = denominator.get(zeroKey) ?? [0n, 1n];
      return n === 0n ? null : mul(numerator, constant(ratNormalize([d, n])));
    }
    if (e.operator === 'Power') {
      const exponent = ops[1];
      if (!exponent?.isNumberLiteral || exponent.im !== 0 || !Number.isInteger(exponent.re)
        || exponent.re < 0 || exponent.re > 12) return null;
      const base = convert(ops[0]);
      if (base === null) return null;
      let power = constant([1n, 1n]);
      for (let i = 0; i < exponent.re; i += 1) power = mul(power, base);
      return power;
    }
    return null;
  };
  return convert(expr);
}

/**
 * The factor profile of a written product: how many non-constant factors it
 * has with multiplicity, whether every polynomial factor is primitive over
 * the integers, whether every coefficient it wrote was an integer, and the
 * sign of its monomial part (`negative`: the constants, minus signs, and
 * one-term factors written outside the polynomial factors multiply to a
 * negative) — or null when some factor cannot be read as a
 * rational-coefficient polynomial.
 */
function factorProfile(latex) {
  let expr;
  try {
    expr = parseLatex(preprocess(latex));
  } catch {
    return null;
  }
  if (!expr.isValid) return null;
  const symbols = new Set();
  collectSymbols(expr, symbols);
  const vars = [...symbols].sort();
  const profile = { count: 0, primitive: true, integral: true, negative: false };
  const flip = (multiplicity) => {
    if (multiplicity % 2 === 1) profile.negative = !profile.negative;
  };
  const negativeConstant = (e) => {
    try {
      const value = e.isNumberLiteral ? e : e.N();
      return value.im === 0 && value.re < 0;
    } catch {
      return false;
    }
  };
  const walk = (e, multiplicity) => {
    if (isConstantExpr(e)) {
      if (negativeConstant(e)) flip(multiplicity);
      return true;
    }
    const ops = e.ops ?? [];
    if (e.operator === 'Negate') {
      flip(multiplicity);
      return walk(ops[0], multiplicity);
    }
    if (e.operator === 'Multiply') return ops.every((op) => walk(op, multiplicity));
    if (e.operator === 'Divide' && isConstantExpr(ops[1])) {
      if (negativeConstant(ops[1])) flip(multiplicity);
      return walk(ops[0], multiplicity);
    }
    if (e.operator === 'Power') {
      const exponent = ops[1];
      if (!exponent?.isNumberLiteral || exponent.im !== 0 || !Number.isInteger(exponent.re)
        || exponent.re < 0 || exponent.re > 12) return false;
      return exponent.re === 0 || walk(ops[0], multiplicity * exponent.re);
    }
    if (e.symbol) {
      profile.count += multiplicity;
      return true;
    }
    const terms = exprToRationalTerms(e, vars);
    if (terms === null || terms.size === 0) return false;
    const entries = [...terms].map(([key, coefficient]) => [key.split(',').map(Number), coefficient]);
    if (entries.some(([, [, d]]) => d !== 1n)) profile.integral = false;
    if (entries.length === 1) {
      // A single term that stayed a sum in the parse (`(x+x)`): its constant
      // is free and its variables count like written powers.
      profile.count += multiplicity * entries[0][0].reduce((sum, e) => sum + e, 0);
      if (entries[0][1][0] < 0n) flip(multiplicity);
      return true;
    }
    const content = entries.reduce((g, [, [n]]) => bigintGcd(g, n), 0n);
    const integerCoefficients = entries.every(([, [, d]]) => d === 1n);
    const commonVariable = vars.some((_, i) => entries.every(([exponents]) => exponents[i] > 0));
    if (!integerCoefficients || content !== 1n || commonVariable) profile.primitive = false;
    profile.count += multiplicity;
    return true;
  };
  return walk(expr, 1) ? profile : null;
}

/**
 * One requirement each. A token holds when the response is written that way;
 * `lowest-terms` also holds for a response with no fraction to reduce, so it
 * composes with the shape tokens instead of contradicting them.
 */
/**
 * Does the writing carry a non-integer exponent — `^{\frac{1}{2}}`, `^{1/2}`,
 * `^{0.5}`? That notation spells a radical (or an approximation) as a power:
 * `exact` accepts it as exact ink, `simplified-radical` rejects it as not
 * being radical notation. One detector, so the two can never disagree about
 * the same writing.
 *
 * The exponent may be SIGNED: `3^{-\frac12}` is $\tfrac{1}{\sqrt3}$ — the same
 * rational-exponent notation with the reciprocal taken, and the same value as
 * the rationalized `\frac{\sqrt3}{3}` a `simplified-radical` exercise asks
 * for. A sign-blind detector read the negative spelling as an integer power
 * and let every "rationalize the denominator" key be answered in the notation
 * the exercise exists to convert away from. The `\frac` spellings need the
 * sign written out; `^{-1/2}`, `^{-0.5}` and `^{-.5}` already reach the
 * `[./]` alternative, whose `[^{}]*` swallows the sign.
 */
const NON_INTEGER_EXPONENT = /\^\s*(?:[+-]?\s*\\[tdc]?frac|\{\s*[+-]?\s*\\[tdc]?frac|\{[^{}]*[./])/;

/**
 * A written term worth exactly nothing: a literal `0` (`0.0`, `0\%`, `-0`) or
 * a zero coefficient multiplying anything — `0\cdot\sum_{n=1}^{1}n`,
 * `0\sqrt1`, `0x`, `0\,\log 7`. Such a term changes no value, so a response
 * can carry one for the sole purpose of showing a notation-reading predicate
 * the ink it looks for: `1.85+0\%` is 185% written as a decimal, and
 * `t^{1/2}+0\sqrt1` is the rational-exponent spelling a `radical` exercise
 * exists to convert.
 *
 * The zero has to be the WHOLE head numeral and the rest has to be something
 * it multiplies: `0.5\sqrt2` (the numeral continues), `0^{-1}` and `0!` (an
 * operator applies to the zero, and the result is not zero) are not this.
 *
 * The numeral is read through any redundant grouping it wears and through a
 * leading run of zeros, because the padding is chosen by whoever wants it to
 * pass: `+(0)\sqrt1`, `-(-0)\sqrt1`, `+{0}\sqrt1` and `+00\sqrt1` are the
 * same decorative zero as `+0\sqrt1`, and a detector that reads only the last
 * spelling refuses one keystroke rather than the technique. The group must
 * CLOSE around the numeral — `(0+x)` is x, not a zero, so its `(` opens
 * nothing here.
 */
const ZERO_NUMERAL = String.raw`(?:0+(?:\.0+)?|\.0+)`;
const ZERO_TERM_HEAD = new RegExp(
  String.raw`^\s*[+-]?\s*(?:\(\s*[+-]?\s*${ZERO_NUMERAL}\s*\)`
  + String.raw`|\{\s*[+-]?\s*${ZERO_NUMERAL}\s*\}|${ZERO_NUMERAL})`
  + String.raw`(?:\s*\^\s*\{?\s*[1-9]\d*\s*\}?)?`,
);
const NOT_MULTIPLICATION = /^(?:[0-9.!^_=]|[eE]\s*[+-]?\s*\d)/;

/**
 * …and a term worth nothing that does not SAY zero anywhere. `\log 1`,
 * `\sqrt0` and `\sum_{n=1}^{1}\log 1` are each worth exactly zero while
 * carrying no zero numeral for the pattern above to find, and each was a
 * live bypass: appending `+\sum_{n=1}^{1}\log 1` turned a printed product
 * into an `Add` and passed `expanded`.
 *
 * Decided by EVALUATION, because that is what "worth nothing" means and a
 * pattern can only ever know the spellings someone thought of. A term with a
 * free variable never evaluates to a literal, so it is kept — the safe
 * direction, since stripping a real term would reject a correct answer.
 * `N()` is used rather than `isEqual`/`simplify`: it is the entry point the
 * hang guards already trust to return.
 */
function evaluatesToZero(term) {
  try {
    const value = parseLatex(preprocess(term)).N();
    return value.isNumberLiteral === true && sampleIsZero(value);
  } catch {
    return false;
  }
}

/**
 * A written term worth one fixed rational number, however it is dressed: `8`,
 * `8\sqrt1`, `8\cdot x^0`. Decided by evaluation at sample points, like
 * evaluatesToZero; a term that cannot be evaluated is not a constant (the
 * safe direction — it never costs a correct answer its credit). Only a
 * RATIONAL real value counts: `2\sqrt3`, `\pi`, and the `-5i` of `2-5i` are
 * not like terms of a plain number, so `5+2\sqrt3` and `2-5i` stay combined.
 */
const isRationalValue = (value) => {
  if (value.isNumberLiteral !== true || !Number.isFinite(value.re) || value.im !== 0) return false;
  for (let d = 1; d <= 1000; d += 1) {
    const scaled = value.re * d;
    if (Math.abs(scaled - Math.round(scaled)) < 1e-9 * Math.max(1, Math.abs(scaled))) return true;
  }
  return false;
};
function isConstantTerm(term) {
  try {
    const expr = parseLatex(preprocess(term));
    if (!expr.isValid) return false;
    const vars = expr.unknowns;
    if (vars.length === 0) return isRationalValue(expr.N());
    const values = [];
    for (let i = 0; i < SAMPLE_POINTS.length && values.length < 3; i += 1) {
      const assignment = {};
      vars.forEach((name, j) => {
        assignment[name] = SAMPLE_POINTS[(i + 2 * j) % SAMPLE_POINTS.length];
      });
      const value = expr.subs(assignment).N();
      if (value.isNumberLiteral !== true || !Number.isFinite(value.re) || !Number.isFinite(value.im)) continue;
      values.push(value);
    }
    return values.length === 3 && isRationalValue(values[0])
      && values.every((value) => sampleIsZero(ce.box(['Subtract', value, values[0]]).N()));
  } catch {
    return false;
  }
}

// A written term worth a rational multiple of i, `5i`, `\frac{16i}{17}` —
// isConstantTerm's imaginary counterpart (constants only: no unknowns).
function isImaginaryRationalTerm(term) {
  try {
    const expr = parseLatex(preprocess(term));
    if (!expr.isValid || expr.unknowns.length > 0) return false;
    const value = expr.N();
    return value.isNumberLiteral === true && Number.isFinite(value.im) && Math.abs(value.re) < SAMPLE_TOLERANCE
      && value.im !== 0 && isRationalValue(ce.number(value.im));
  } catch {
    return false;
  }
}

/**
 * Does a written sum hold two variable-free like terms the engine folds before
 * any parse can show them — two rational constants (`16x+9+8`), or two
 * rational multiples of i (`5i+3i`)? Read on the top-level terms of `text`.
 */
//
// A term that writes a trigonometric function is never one of them: its value
// being rational is the angle's coincidence, not arithmetic left undone, and
// whether it should be evaluated is `evaluated-trig`'s question. The polar
// key `\frac34(\cos180^\circ+i\sin180^\circ)` read as the two constants −1
// and 0 and graded `form` against itself, where `120^\circ` passed
// (Precalculus chapters 7–8 re-review, October 5, 2026).
function writesNumeralLikeTerms(text) {
  const bodies = splitTopLevelTerms(text).map((term) => term.trim().replace(/^[+-]\s*/, ''))
    .filter((body) => body && !TRIG_NAME.test(body));
  return bodies.filter(isConstantTerm).length > 1 || bodies.filter(isImaginaryRationalTerm).length > 1;
}

/**
 * The contents of every `(…)` and `{…}` group the writing holds, at every
 * depth, outermost first. A command name is stepped over, so `\{` opens
 * nothing.
 */
function writtenGroups(text) {
  const groups = [];
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '\\') {
      i += text.slice(i).match(/^\\(?:[a-zA-Z]+|[\s\S])?/)[0].length - 1;
      continue;
    }
    if (text[i] !== '(' && text[i] !== '{') continue;
    const group = readDelimitedGroup(text, i);
    if (group) groups.push(group[0]);
  }
  return groups;
}

function isZeroTerm(term) {
  const head = ZERO_TERM_HEAD.exec(term);
  if (head) {
    const rest = term.slice(head[0].length).trim();
    if (rest === '' || !NOT_MULTIPLICATION.test(rest)) return true;
  }
  return evaluatesToZero(term);
}

/**
 * The top-level additive terms a response's value actually rests on — its
 * terms with the syntactic zeros dropped. A notation-reading predicate asks
 * its question of these rather than of the whole string, so decorative ink
 * cannot answer for a response that never uses it.
 *
 * Stripping every term leaves the response as written: `0\%` is a legitimate
 * percent answer and `0` a legitimate value, and a form check must never
 * reject a correct answer. Reads brace/paren depth through `splitTopLevelTerms`
 * (MathLive's `\left(`/`\right)` are already gone by way of `bareLatex`), and
 * a leading sign stays with the first term rather than opening an empty one.
 */
/**
 * Does one additive term write a multiplication out between factors? An
 * explicit `\cdot`/`\times`/`*` outside every group, two parenthesized groups
 * side by side (`(5x)(x)`), or a parenthesized group holding no sum next to
 * other ink (`5x(x)`, `(5x)x`) — a factor that could have been folded into
 * the monomial — or a parenthesized group raised to a power: the
 * special-products pattern step left unfinished, `(6x)^2-25` and
 * `(3x^2)^2-(4y^3)^2` for `36x^2-25` and `9x^4-16y^6` (Elementary Algebra
 * 6.4, September 27, 2026), and a binomial power `(x+5)^2` likewise. A
 * group holding a sum with no power (`x(x+5)`) is a binomial factor, not
 * this; a function's argument is not a factor; and the term's own leading
 * sign is not one either.
 */
function writesFactorProduct(term) {
  const text = term.trim().replace(/^[-+]\s*/, '');
  let depth = 0;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === '\\') {
      const command = text.slice(i).match(/^\\(?:[a-zA-Z]+|[\s\S])?/)[0];
      if (depth === 0 && /^\\(?:cdot|times)$/.test(command)) {
        // A lone numeral coefficient dotted onto a numeral-free monomial,
        // `6\cdot x`, has nothing left to fold — the dot is only notation
        // (the Prealgebra fixture `6\cdot x+48` stays correct). Anything else
        // written around the dot is a product still to be multiplied out.
        const coefficient = /^(?:\d+(?:\.\d+)?|\\[tdc]?frac\s*\{\s*\d+\s*\}\s*\{\s*\d+\s*\})\s*$/.test(text.slice(0, i));
        const rest = text.slice(i + command.length).replace(/\^\s*(?:\{[^{}]*\}|\S)/g, '');
        return !(coefficient && /^[\s\\a-zA-Z{}]+$/.test(rest) && !/\\(?:cdot|times|[tdc]?frac|sqrt)/.test(rest));
      }
      i += command.length - 1;
      continue;
    }
    if (char === '{' || char === '[') depth += 1;
    else if (char === '}' || char === ']') depth -= 1;
    else if (depth === 0 && char === '*') return true;
    else if (char === '(' && depth === 0) {
      const group = readDelimitedGroup(text, i);
      if (!group) return false;
      const [inner, after] = group;
      const rest = text.slice(after);
      // A function's argument, `\cos(6\theta)` or `\sin^2(x)`, is not a factor.
      if (/\\[a-zA-Z]+\s*(?:\^\s*(?:\{[^{}]*\}|\S))?\s*$/.test(text.slice(0, i))) {
        i = after - 1;
        continue;
      }
      if (/^\s*\(/.test(rest)) return true;
      if (/^\s*\^/.test(rest)) return true;
      const holdsSum = splitTopLevelTerms(inner.trim()).length > 1;
      if (!holdsSum && (i > 0 || rest.trim())) return true;
      i = after - 1;
    }
  }
  return false;
}

/**
 * The finished-writing rules `no-like-terms` holds a sum to, read off the
 * LaTeX because the engine folds every one of them away (Precalculus chapters
 * 5–6 re-review, October 4, 2026). `2\cdot2\tan(2x)`, `4\tan(2x)+0`,
 * `1\sin(x)+2` and `3\cos(x)+(-4)` graded `correct` against their finished
 * keys, as did `\frac{1}{4}(\frac{\pi}{2}-2)` and `\frac{\pi}{2\cdot4}-\frac12`
 * against `\frac{\pi}{8}-\frac12`:
 *
 * - a numeral product (writesNumeralProduct) — except a numeral times a
 *   numeral POWER, `5\cdot2^x`, the exponential model's coefficient;
 * - a written zero term beside the rest (`x-0`, `+0`);
 * - a coefficient of 1 on a letter, a radical or a function (`1x`,
 *   `-1\sin x`, `1\pi`);
 * - a sign on a parenthesized single term (`+(-4)`, writesSignedGroupTerm);
 * - a variable-free sum in parentheses multiplied by a numeral or a fraction
 *   standing before it (`\frac14(\frac{\pi}{2}-2)`, `2(1+\sqrt3)`) — the
 *   distribution of a number not yet done. A sum holding a letter
 *   (`\frac{\pi}{5}(x-1)`, a factored phase) is a factor a form may keep.
 */
/** The written argument of every trigonometric application, past a power on the name (`\\sin^2(…)`). */
function trigArguments(bare) {
  const found = [];
  for (const call of bare.matchAll(new RegExp(TRIG_NAME.source, 'g'))) {
    let at = call.index + call[0].length;
    while (bare[at] === ' ') at += 1;
    if (bare[at] === '^') at = readTexArgument(bare, at + 1)?.[1] ?? bare.length;
    const argument = readNotationArgument(bare, at);
    if (argument) found.push(argument[0]);
  }
  return found;
}
/** The trigonometric applications a parse holds (Sin, Arcsin, …), at any depth. */
const TRIG_OPERATORS = new Set(['Sin', 'Cos', 'Tan', 'Csc', 'Sec', 'Cot',
  'Arcsin', 'Arccos', 'Arctan', 'Arccsc', 'Arcsec', 'Arccot']);
function trigApplications(expr) {
  if (TRIG_OPERATORS.has(expr.operator)) return [expr];
  return (expr.ops ?? []).flatMap(trigApplications);
}
// A written multiplication by 1, either side: `\sin t\cdot1`, `1\times\sin t`.
const WRITES_TIMES_ONE = /(?:\\cdot|\\times|\*)\s*1(?![\d.])|(?<![\d.])1\s*(?:\\cdot|\\times|\*)/;
const COEFFICIENT_ONE = /(?:^|[+\-(,=])\s*1\s*(?=[a-zA-Z]|\\(?:sqrt|pi|ln|log|(?:arc)?(?:sin|cos|tan|csc|sec|cot)|theta|alpha|beta|phi)(?![a-zA-Z]))/;
const NUMERAL_PRODUCT_UNPOWERED = /\d\s*(?:\\cdot|\\times|\*)\s*\(?\s*-?\s*\d+(?:\.\d+)?(?![\d.]|\s*\^)/;
function writesUnfinishedTerms(bare) {
  // Read twice: as written, and with π read as a numeral, because an angular
  // frequency left as `2\pi\cdot3t`, `2\pi(3)t` or `2\pi\cdot\frac12t` splits
  // its numeral product with the π and passed against `6\pi t` and `\pi t`
  // (Precalculus chapters 7–8 re-review, October 5, 2026).
  for (const variant of [bare, bare.replace(/\\pi(?![a-zA-Z])/g, ' 1 ')]) {
    const text = variant.replace(NUMERAL_FRACTION, '1').replace(NUMERAL_FRACTION_ANY_BRACING, '1');
    if (NUMERAL_PRODUCT_UNPOWERED.test(text) || NUMERAL_GROUP_PRODUCT.test(text)) return true;
  }
  // …and a compound fraction is a division not yet done:
  // `5\cos(\frac{2\pi}{\frac13}t)` for `5\cos(6\pi t)` (same re-review).
  if (writesCompoundFraction(bare)) return true;
  if (writesNumeralTimesFraction(bare) || writesNumeralNumeralPower(bare)) return true;
  if (COEFFICIENT_ONE.test(bare) || writesSignedGroupTerm(bare)) return true;
  const terms = splitTopLevelTerms(bare).filter((term) => term.trim());
  // A term that writes a trigonometric function is zero only by its angle
  // (`i\sin180^\circ` in a polar form), which is no written zero: only a
  // literal zero coefficient counts there (Precalculus chapters 7–8 re-review).
  const zeroTerm = (body) => (TRIG_NAME.test(body) ? /^0(?![\d.])/.test(body) : isZeroTerm(body));
  if (terms.length > 1 && terms.some((term) => zeroTerm(term.trim().replace(/^[+-]\s*/, '')))) return true;
  for (let i = 0; i < bare.length; i += 1) {
    if (bare[i] === '\\') {
      i += bare.slice(i).match(/^\\(?:[a-zA-Z]+|[\s\S])?/)[0].length - 1;
      continue;
    }
    if (bare[i] !== '(') continue;
    const group = readDelimitedGroup(bare, i);
    if (!group) continue;
    const sum = splitTopLevelTerms(group[0]).filter((term) => term.trim()).length > 1;
    const variableFree = !/[a-zA-Z]/.test(group[0].replace(/\\[a-zA-Z]+/g, ' '));
    // A variable-free sum raised to a power is a square not yet multiplied
    // out: `\frac{(1-\sqrt3)^2}{-2}` passed against `\sqrt3-2` (Precalculus
    // chapters 7–8 re-review, October 5, 2026).
    if (sum && variableFree && /^\s*\^/.test(bare.slice(group[1]))) return true;
    const before = bare.slice(0, i).trimEnd();
    if (!/(?:\d|\})$/.test(before) || /(?:\^|_)\s*\{[^{}]*\}$/.test(before)) continue;
    // One term in parentheses after a numeral or a fraction is a product not
    // yet carried out — `2(\frac{\sqrt2}{2})\cos31^\circ`,
    // `\frac14(\frac{1-\cos(4x)}{2})` (same re-review).
    // A powered group is a base, not a factor (`10(0.85)^t`).
    if (!sum && !/^\s*\^/.test(bare.slice(group[1]))) return true;
    if (sum && variableFree) return true;
  }
  return false;
}

/**
 * A numeral (or numeral fraction) multiplied by a fraction with a `\cdot`,
 * `\times` or `*` written between them, either side: `2\cdot\frac{\sqrt2}{2}`,
 * `\frac14\cdot\frac{1-\cos(4x)}{2}`, `\sin(2\cdot\frac{\pi}{4})`. The
 * numeral-product rule saw only numerals on both sides, so the product of a
 * number and a fraction holding a radical, π or a variable passed
 * `no-like-terms` and `single-trig-function` (Precalculus chapters 7–8
 * re-review, October 5, 2026). A numeral power after the dot (`\cdot2^x`) is
 * a model's base, as in writesUnfinishedTerms.
 */
// A function name's parenthesized argument, `\cos(4x)`, `\sin^2(x)`, `\ln(x)`.
const FUNCTION_ARGUMENT_GROUP = /\\[a-zA-Z]+\s*(?:\^\s*(?:\{[^{}]*\}|\S))?\s*\([^()]*\)/g;
const NUMERAL_FRACTION_ANY_BRACING = /\\[tdc]?frac\s*(?:\{\s*-?\s*\d+(?:\.\d+)?\s*\}|\d)\s*(?:\{\s*\d+(?:\.\d+)?\s*\}|\d)/g;
function writesNumeralTimesFraction(bare) {
  const text = bare.replace(NUMERAL_FRACTION_ANY_BRACING, '1');
  if (/(?:^|[^\w^_{])\d+(?:\.\d+)?\s*(?:\\cdot|\\times|\*)\s*\(?\s*-?\s*\\[tdc]?frac(?![a-zA-Z])/.test(text)) return true;
  for (const opener of text.matchAll(/\\[tdc]?frac(?![a-zA-Z])/g)) {
    const numerator = readTexArgument(text, opener.index + opener[0].length);
    const denominator = numerator && readTexArgument(text, numerator[1]);
    if (denominator && /^\s*\)?\s*(?:\\cdot|\\times|\*)\s*\(?\s*-?\s*\d+(?:\.\d+)?(?![\d.]|\s*\^)/.test(text.slice(denominator[1]))) return true;
  }
  return false;
}

// A numeral raised to a numeral power, `5^3`, `(-2)^{4}` — a power left to
// work out (`5^3(\cos135^\circ+i\sin135^\circ)` for the modulus 125). Ten
// is exempt: `\times10^{-3}` is scientific notation's own writing.
const NUMERAL_NUMERAL_POWER = /(?:^|[^\w\\}^_.])(\(\s*-?\s*\d+(?:\.\d+)?\s*\)|\d+(?:\.\d+)?)\s*\^\s*(?:\{\s*-?\s*\d+(?:\.\d+)?\s*\}|\d)/g;
const writesNumeralNumeralPower = (bare) => [...bare.matchAll(NUMERAL_NUMERAL_POWER)]
  .some((match) => match[1].replace(/[()\s]/g, '') !== '10');

/**
 * Does a top-level term consist of a sign and then one parenthesized single
 * term, nothing else — `+(-9i)`, `-(9i)`? Read on the whole writing, because
 * splitTopLevelTerms drops the sign that delimits a term.
 */
function writesSignedGroupTerm(bare) {
  let depth = 0;
  for (let i = 0; i < bare.length; i += 1) {
    const char = bare[i];
    if (char === '{' || char === '(') depth += 1;
    else if (char === '}' || char === ')') depth -= 1;
    if (depth !== 0 || (char !== '+' && char !== '-')) continue;
    const open = bare.slice(i + 1).match(/^\s*\(/);
    if (!open) continue;
    const group = readDelimitedGroup(bare, i + open[0].length);
    if (!group || !/^\s*(?:[+-]|$)/.test(bare.slice(group[1]))) continue;
    if (splitTopLevelTerms(group[0]).filter((piece) => piece.trim()).length === 1) return true;
  }
  return false;
}

/**
 * A parenthesized MONOMIAL with a numeral coefficient, raised to a power —
 * `(2x^4)^5`, `(3y)^2`: the Power of a Product step left undone. The retyped
 * prompt of Elementary Algebra 6.5's `\frac{(2x^4)^5}{(4x^3)^2(x^3)^5}` graded
 * correct under `single-fraction` (September 27, 2026), which already refused
 * the numeral power `\frac{1}{2^3y^3}`. A group holding a sum (`(x+1)^2`) is
 * a factor a simplified rational expression keeps, and is not this.
 */
function writesNumeralGroupPower(bare) {
  for (let i = 0; i < bare.length; i += 1) {
    if (bare[i] === '\\') { i += 1; continue; }
    if (bare[i] !== '(') continue;
    const group = readDelimitedGroup(bare, i);
    if (!group) return false;
    const [inner, after] = group;
    if (!/^\s*\^/.test(bare.slice(after))) continue;
    const monomial = splitTopLevelTerms(inner.trim().replace(/^[-+]\s*/, '')).length === 1;
    if (monomial && /\d/.test(inner.replace(/\^\s*(?:\{[^{}]*\}|\S)/g, ''))) return true;
  }
  return false;
}

function loadBearingTerms(bare) {
  const terms = splitTopLevelTerms(bare);
  const carrying = terms.filter((term) => !isZeroTerm(term));
  return carrying.length > 0 ? carrying : terms;
}

/* ---------------------------------------------------------------------------
 * Expression SHAPE — the reader the closed-world notation grammars are built on
 *
 * `rational-exponent`, `radical`, `summation` and the two `exact-*` tokens each
 * name ONE way of writing an answer whose value the prompt already prints. A
 * predicate that asks "does some term contain a `\sqrt`?" is a
 * substring-existence test, and a substring test over a value-preserving
 * language is unwinnable: `\sqrt1`, `\cdot 1^{1/2}`, `+\log 1`, `+\sqrt4-2` and
 * `^{2/2}` all add the ink without moving the value, and the reader who
 * blocklists `\sqrt4-2` is handed `\sqrt9-3` next. `loadBearingTerms` is not a
 * defence either — it knows exactly one adversary, a literal-zero numeral at
 * the head of a top-level additive term, so every multiplicative identity and
 * everything below the top level walks past it.
 *
 * Only a grammar that accepts a CLOSED set of writings and rejects everything
 * else terminates that game. formShape() is its reader — deliberately
 * syntactic, with no evaluation and no Compute Engine, because the whole point
 * is to see what the learner wrote rather than what it is worth:
 *
 *   Shape  := Term (('+' | '-') Term)*
 *   Term   := Factor+            (juxtaposition, `\cdot`, `\times`, `*`)
 *   Factor := Atom ('^' Exponent)?
 *   Atom   := number | symbol | (…) | {…} | \frac{…}{…} | \sqrt[n]{…}
 *           | \log/\ln argument | \sum_{…}^{…} body | \command
 *
 * It returns null for writing it cannot read as that grammar, and every caller
 * treats null as "not this form" — the safe direction for a shape check, which
 * must never accept ink it did not understand.
 *
 * `loadBearingTerms`/`isZeroTerm` stay for the tokens that still read a
 * response term by term (`percent`, `expanded`); the grammars below do not use
 * them, because a grammar that requires ONE term has nothing to strip.
 * ------------------------------------------------------------------------ */

/**
 * The balanced group opening at `openIndex` — `{…}` or `(…)` — as
 * [innerText, indexAfterClose], or null when it never closes. Escaped
 * characters (`\{`, and every command name's letters) are stepped over, so
 * `(\tfrac{2m}{3n})` closes on its own paren.
 */
function readDelimitedGroup(source, openIndex) {
  const open = source[openIndex];
  const close = open === '{' ? '}' : ')';
  let depth = 0;
  for (let i = openIndex; i < source.length; i += 1) {
    if (source[i] === '\\') {
      i += 1;
      continue;
    }
    if (source[i] === open) depth += 1;
    else if (source[i] === close) {
      depth -= 1;
      if (depth === 0) return [source.slice(openIndex + 1, i), i + 1];
    }
  }
  return null;
}

/**
 * One TeX argument at `start`: a braced group, a command name, or the single
 * token TeX otherwise takes. Returns [text, indexAfter] or null.
 */
function readTexArgument(source, start) {
  let i = start;
  while (source[i] === ' ') i += 1;
  if (i >= source.length) return null;
  if (source[i] === '{') {
    const group = readDelimitedGroup(source, i);
    return group ? [group[0], group[1]] : null;
  }
  if (source[i] === '\\') {
    // A command brings its OWN arguments, so the single "token" TeX takes
    // here is the whole atom: `x^\frac12` is x to the one-half, and reading
    // just the command name would leave the exponent as the unreadable
    // string `\frac` — rejecting a spelling TeX (and a paste) really produces.
    const atom = readShapeAtom(source, i);
    return atom ? [source.slice(i, atom.next), atom.next] : null;
  }
  return [source[i], i + 1];
}

/** A logarithm's or radical's written argument: a group, a numeral run, or one letter. */
function readNotationArgument(source, start) {
  let i = start;
  while (source[i] === ' ') i += 1;
  if (i >= source.length) return null;
  if (source[i] === '{' || source[i] === '(') {
    const group = readDelimitedGroup(source, i);
    return group ? [group[0], group[1]] : null;
  }
  // A fraction or radical brings its own arguments, so it is read whole:
  // `\ln\frac{1}{\sqrt2}` takes the fraction, where reading the command name
  // alone left `{1}{\sqrt2}` as two stray factors (Precalculus 4.6, October
  // 4, 2026).
  if (/^\\(?:[tdc]?frac|sqrt)(?![a-zA-Z])/.test(source.slice(i))) {
    const atom = readShapeAtom(source, i);
    return atom ? [source.slice(i, atom.next), atom.next] : null;
  }
  const token = source.slice(i).match(/^(?:\d+(?:\.\d+)?|[a-zA-Z]|\\[a-zA-Z]+)/);
  return token ? [token[0], i + token[0].length] : null;
}

/**
 * The VALUE of a written exponent, or null when it is not a numeral at all
 * (`^{n+1}` inside a summation body).
 *
 * Classification has to be by VALUE, never by spelling: `^{2/2}` and
 * `^{\frac{4}{2}}` are integers wearing a fraction bar, and the spelling-based
 * NON_INTEGER_EXPONENT reads them as the rational-exponent notation — which is
 * how a decimal approximation used to pass `exact` by writing `^{2/2}`.
 */
const EXPONENT_NUMERAL = String.raw`(?:\{\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*\}|(\d))`;
const EXPONENT_FRACTION = new RegExp(
  String.raw`^([+-]?)\\[tdc]?frac\s*${EXPONENT_NUMERAL}\s*${EXPONENT_NUMERAL}$`,
);
const PLAIN_NUMERAL = /^[+-]?(?:\d+(?:\.\d+)?|\.\d+)$/;

function exponentValue(written) {
  const text = String(written ?? '').replace(/\s+/g, '');
  const fraction = text.match(EXPONENT_FRACTION);
  if (fraction) {
    const numerator = Number(fraction[2] ?? fraction[3]);
    const denominator = Number(fraction[4] ?? fraction[5]);
    if (!denominator) return null;
    return (fraction[1] === '-' ? -1 : 1) * (numerator / denominator);
  }
  const ratio = text.match(/^([+-]?(?:\d+(?:\.\d+)?|\.\d+))\/([+-]?(?:\d+(?:\.\d+)?|\.\d+))$/);
  if (ratio) {
    const denominator = Number(ratio[2]);
    return denominator ? Number(ratio[1]) / denominator : null;
  }
  return PLAIN_NUMERAL.test(text) ? Number(text) : null;
}

/** One atom at `start`, or null. See the grammar in the banner above. */
function readShapeAtom(term, start) {
  let i = start;
  while (term[i] === ' ') i += 1;
  if (i >= term.length) return null;
  const char = term[i];
  if (char === '(' || char === '{') {
    const group = readDelimitedGroup(term, i);
    return group ? { atom: { kind: 'group', text: group[0] }, next: group[1] } : null;
  }
  const numeral = term.slice(i).match(/^(?:\d+(?:\.\d+)?|\.\d+)/);
  if (numeral) return { atom: { kind: 'number', text: numeral[0] }, next: i + numeral[0].length };
  if (/[a-zA-Z]/.test(char)) return { atom: { kind: 'symbol', text: char }, next: i + 1 };
  if (char !== '\\') return null; // an operator where a factor was expected
  const named = term.slice(i).match(/^\\([a-zA-Z]+)/);
  if (!named) return null; // `\%`, `\{` — not a factor
  const name = named[1];
  let after = i + named[0].length;
  if (/^[tdc]?frac$/.test(name)) {
    const numerator = readTexArgument(term, after);
    if (!numerator) return null;
    const denominator = readTexArgument(term, numerator[1]);
    if (!denominator) return null;
    return {
      atom: { kind: 'frac', numerator: numerator[0], denominator: denominator[0] },
      next: denominator[1],
    };
  }
  if (name === 'sqrt') {
    let index = null;
    const bracket = term.slice(after).match(/^\s*\[([^\]]*)\]/);
    if (bracket) {
      index = bracket[1];
      after += bracket[0].length;
    }
    const radicand = readNotationArgument(term, after);
    if (!radicand) return null;
    return { atom: { kind: 'sqrt', index, radicand: radicand[0] }, next: radicand[1] };
  }
  if (name === 'log' || name === 'ln') {
    let base = null;
    const subscript = term.slice(after).match(/^\s*_/);
    if (subscript) {
      const read = readTexArgument(term, after + subscript[0].length);
      if (!read) return null;
      base = read[0];
      after = read[1];
    }
    const argument = readNotationArgument(term, after);
    if (!argument) return null;
    return { atom: { kind: 'log', name, base, argument: argument[0] }, next: argument[1] };
  }
  if (name === 'sum') {
    // The bounds may be written in either order, and the BODY is everything
    // left in the term — a sigma binds to its right, so the shape has exactly
    // one factor however many symbols the body spells.
    let lower = null;
    let upper = null;
    for (let bound = 0; bound < 2; bound += 1) {
      const marker = term.slice(after).match(/^\s*([_^])/);
      if (!marker) break;
      const read = readTexArgument(term, after + marker[0].length);
      if (!read) return null;
      if (marker[1] === '_') lower = read[0];
      else upper = read[0];
      after = read[1];
    }
    return { atom: { kind: 'sum', lower, upper, body: term.slice(after) }, next: term.length };
  }
  return { atom: { kind: 'command', text: name }, next: after };
}

/** The top-level multiplicative factors of one term, or null when unreadable. */
function parseShapeFactors(term) {
  const factors = [];
  let i = 0;
  for (;;) {
    for (;;) {
      const before = i;
      while (term[i] === ' ') i += 1;
      if (term.startsWith('\\cdot', i)) i += '\\cdot'.length;
      else if (term.startsWith('\\times', i)) i += '\\times'.length;
      else if (term[i] === '*') i += 1;
      if (i === before) break;
    }
    if (i >= term.length) break;
    const read = readShapeAtom(term, i);
    if (!read) return null;
    i = read.next;
    let exponent = null;
    let afterAtom = i;
    while (term[afterAtom] === ' ') afterAtom += 1;
    if (term[afterAtom] === '^') {
      const written = readTexArgument(term, afterAtom + 1);
      if (!written) return null;
      exponent = written[0];
      i = written[1];
    }
    factors.push({ atom: read.atom, exponent });
  }
  return factors.length > 0 ? factors : null;
}

/** The whole response as terms of factors, or null when unreadable. */
function formShape(bare) {
  const terms = [];
  for (const written of splitTopLevelTerms(bare)) {
    const body = written.trim().replace(/^[+-]\s*/, '').trim();
    if (!body) return null;
    const factors = parseShapeFactors(body);
    if (!factors) return null;
    terms.push({ text: body, factors });
  }
  return terms.length > 0 ? { terms } : null;
}

const isIntegerLiteral = (text) => /^\s*\d+\s*$/.test(String(text ?? ''));

/** Any variable letter, with command names (`\tfrac`, `\pi`) dropped first. */
const hasVariableLetter = (text) => /[a-zA-Z]/.test(String(text ?? '').replace(/\\[a-zA-Z]+/g, ' '));

/**
 * An EXACT scalar multiplier: a positive integer, or a fraction of integers.
 * Never a decimal — a decimal coefficient is an approximation, which is the
 * one thing every token here exists to refuse — and never zero, because a zero
 * coefficient is the oldest decoration of all.
 */
function isExactScalarFactor(factor) {
  if (factor.exponent !== null) return false;
  if (factor.atom.kind === 'number') {
    return isIntegerLiteral(factor.atom.text) && Number(factor.atom.text) !== 0;
  }
  if (factor.atom.kind === 'frac') {
    return isIntegerLiteral(factor.atom.numerator) && isIntegerLiteral(factor.atom.denominator)
      && Number(factor.atom.numerator) !== 0 && Number(factor.atom.denominator) !== 0;
  }
  return false;
}

/**
 * The one factor a single-term response rests on: `coefficient? factor`, where
 * the coefficient — when written at all — is an exact scalar. Null for
 * anything else, which is every decoration that works by ADDING a factor
 * (`t^{1/2}\sqrt1`), adding a term (`t^{1/2}+\sqrt4-2`), or burying the
 * notation below a fraction bar (`\frac{2}{1^{1/2}}`).
 */
function singleCarryingFactor(bare) {
  const shape = formShape(bare);
  if (!shape || shape.terms.length !== 1) return null;
  const { factors } = shape.terms[0];
  if (factors.length > 2) return null;
  if (factors.length === 2 && !isExactScalarFactor(factors[0])) return null;
  return factors.at(-1);
}

/**
 * `\log 43`, `\ln 8`, `\log_2 x` — a logarithm of ONE numeral or variable,
 * whose value is not rational: `\log 100` is the 2 it evaluates to, left
 * unevaluated. Or of one finished numeral FRACTION — integer halves in lowest
 * terms, or a simplified numeral root over an integer or the reverse — the
 * source's own `\ln\left(\frac{1}{\sqrt2}\right)` and
 * `\frac12\ln\frac12` for $-\tfrac12\ln 2$ (Precalculus 4.6, October 4,
 * 2026); `\ln\frac{2}{4}` and `\log_2\frac18` are still work to do.
 */
function isLogarithmOfAnAtom(factor) {
  if (!factor || factor.exponent !== null || factor.atom.kind !== 'log') return false;
  const argument = factor.atom.argument.trim();
  const base = factor.atom.name === 'ln' ? 'e' : (factor.atom.base ?? '10').replace(/[{}\s]/g, '');
  if (/^[a-zA-Z]$/.test(argument)) return true;
  if (/^\d+$/.test(argument)) return !logEvaluatesRationally(base, argument);
  const fraction = loneFactor(argument);
  if (!fraction || fraction.exponent !== null || fraction.atom.kind !== 'frac') return false;
  const halves = [fraction.atom.numerator, fraction.atom.denominator].map(loneFactor);
  if (!halves.every((half) => half && half.exponent === null
    && (half.atom.kind === 'number' || half.atom.kind === 'sqrt') && isFinishedModelNumeral(half))) return false;
  if (halves.every((half) => half.atom.kind === 'number')) {
    const [top, bottom] = halves.map((half) => Number(half.atom.text));
    if (bottom === 1 || gcd(top, bottom) !== 1) return false;
    if (/^\d+$/.test(base) && Number(base) > 1) {
      const value = Math.log(top / bottom) / Math.log(Number(base));
      for (let q = 1; q <= 12; q += 1) if (Math.abs(value * q - Math.round(value * q)) < 1e-9) return false;
    }
  }
  return true;
}

/** A plain positive integer factor — the `+2` of `\ln 9+2`, the `2` of `\frac{\ln 5}{2}`. */
const isIntegerFactor = (factor) => factor !== undefined && factor.exponent === null
  && factor.atom.kind === 'number' && isIntegerLiteral(factor.atom.text);

/** Exactly one factor, read from a fraction half or a term body. */
function loneFactor(text) {
  const factors = parseShapeFactors(String(text ?? ''));
  return factors && factors.length === 1 ? factors[0] : null;
}

/** A decimal point between digits, or opening/closing a numeral — anywhere at all. */
const WRITES_A_DECIMAL = /\d\s*\.|\.\s*\d/;

/**
 * Is every numeral-coefficient fraction the response writes in lowest terms,
 * with integer halves? Read per top-level term, on each `\frac{A}{B}` outside
 * every group whose halves are both monomials: no decimal point in either
 * half, and reducedMonomialQuotient() — no shared variable, no common
 * integer factor. A half that is not a monomial (`\frac{3}{x-2}`) is a
 * rational-expression remainder, read only for a common integer content.
 *
 * Elementary Algebra 6.6's quotient-with-remainder keys (`3c+1-\frac{3}{2c}`,
 * declared `expanded distributed no-like-terms`) accepted the unreduced
 * `3c+1-\frac{9}{6c}`, the decimal `3c+1-\frac{1.5}{c}`, and the split but
 * undivided `\frac{18c^2}{6c}+\frac{6c}{6c}-\frac{9}{6c}` (September 27,
 * 2026): none of those tokens looked inside a term's fraction. Required under
 * `distributed` and `no-like-terms`, the tokens those asks declare.
 */
function termFractionsReduced(latex) {
  for (const term of splitTopLevelTerms(bareLatex(latex))) {
    let depth = 0;
    for (let i = 0; i < term.length; i += 1) {
      const char = term[i];
      if (char === '{' || char === '(') { depth += 1; continue; }
      if (char === '}' || char === ')') { depth -= 1; continue; }
      if (char !== '\\') continue;
      const command = term.slice(i).match(/^\\[tdc]?frac(?![a-zA-Z])/);
      if (!command) {
        i += (term.slice(i).match(/^\\(?:[a-zA-Z]+|[\s\S])?/)[0].length - 1);
        continue;
      }
      if (depth !== 0) continue;
      const numerator = readTexArgument(term, i + command[0].length);
      const denominator = numerator && readTexArgument(term, numerator[1]);
      if (!denominator) return true;
      // A bar over 1 is a division left written whatever stands over it:
      // `\frac{2\pi}{1}` graded `correct` against `2\pi` under `single-term`,
      // where the numeral `\frac{5}{1}` was already refused (Precalculus
      // chapters 5–6 re-review, October 4, 2026).
      if (denominator[0].trim() === '1') return false;
      const halves = [numerator[0], denominator[0]];
      const magnitudes = halves.map((half) => {
        try {
          const expr = parseLatex(preprocess(half));
          return expr.isValid ? monomialMagnitude(expr) : null;
        } catch {
          return null;
        }
      });
      if (magnitudes.every(Boolean)) {
        if (halves.some((half) => WRITES_A_DECIMAL.test(half))) return false;
        if (!reducedMonomialQuotient(magnitudes[0], magnitudes[1])) return false;
      } else {
        // A remainder over a polynomial divisor still has its integer content
        // cancelled: `4x^2-8x+15-\frac{156}{8x+10}` passed against
        // `4x^2-8x+15-\frac{78}{4x+5}` (Precalculus 3.5, October 4, 2026).
        // The contents are the gcds of each half's terms' integer contents;
        // a decimal point in either half is the same unfinished division
        // (`\frac{39}{2x+2.5}`), as it is over a monomial.
        if (halves.some((half) => WRITES_A_DECIMAL.test(half))) return false;
        // …and so is a fraction written inside either half, the divisor's
        // factored-out leading coefficient left in place:
        // `\frac{78}{4(x+\frac54)}` for `\frac{78}{4x+5}` (Precalculus 3.5,
        // October 4, 2026, round 2).
        if (halves.some((half) => /\\[tdc]?frac(?![a-zA-Z])/.test(half))) return false;
        const contents = halves.map(integerContent);
        if (contents.every(Number.isInteger) && gcd(contents[0], contents[1]) > 1) return false;
      }
      i = denominator[1] - 1;
    }
  }
  return true;
}

/**
 * Is every numeral fraction the response writes — at ANY depth, inside a
 * factor or an exponent's base — reduced: integer halves sharing no factor,
 * and no denominator of 1? A half that is not an integer numeral is not read.
 *
 * `factored` is a shape check, and a binomial square with its constant left
 * unreduced passed it: `(p-\frac{2}{12})^2` graded `correct` against the
 * completed square `(p-\frac{1}{6})^2` (Elementary Algebra 10.2, September
 * 27, 2026), while no other token could refuse it — `reduced-fraction`
 * rejects the key itself, which is no fraction. A factor's numeral work is
 * part of writing it factored, so `factored` (and `factored-completely`,
 * which requires `factored`) requires it finished.
 */
function numeralFractionsReduced(latex) {
  const text = bareLatex(latex);
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] !== '\\') continue;
    const command = text.slice(i).match(/^\\[tdc]?frac(?![a-zA-Z])/);
    if (!command) {
      i += text.slice(i).match(/^\\(?:[a-zA-Z]+|[\s\S])?/)[0].length - 1;
      continue;
    }
    const numerator = readTexArgument(text, i + command[0].length);
    const denominator = numerator && readTexArgument(text, numerator[1]);
    if (!denominator) return true;
    const [top, bottom] = [numerator[0].trim(), denominator[0].trim()];
    // A numeral fraction over or under another is a division left written:
    // `(p+\frac{\frac{1}{4}}{2})^2`, the "half of ¼" line, for `(p+\frac18)^2`
    // (Intermediate Algebra 9.2, October 3, 2026).
    if ([top, bottom].some((half) => /\\[tdc]?frac(?![a-zA-Z])/.test(half))
      && [top, bottom].every(writesOnlyNumerals)) return false;
    if (/^[+-]?\d+$/.test(top) && /^\d+$/.test(bottom)) {
      const [a, b] = [Math.abs(Number(top)), Number(bottom)];
      if (b === 1 || (a !== 0 && gcd(a, b) !== 1)) return false;
    }
    i += command[0].length - 1;
  }
  return true;
}

/**
 * Is every parenthesized sum the response writes finished — expanded, with
 * like terms combined? A pattern applied but not simplified keeps the value
 * and the product shape, so `factored-completely` passed the substitution
 * left in place (`(x-5+2)(x-5+4)` for `(x-3)(x-1)`, `(3x+1-3)^2` for
 * `(3x-2)^2`), a cube pattern's factors unsquared (`(x+3)(x^2-3x+3^2)`,
 * `(2x-3y)((2x)^2+2x\cdot3y+(3y)^2)`), and `(y+1-3y)(…)` (Intermediate
 * Algebra 6.2–6.4, October 3, 2026). Simplifying inside the parentheses is
 * the step those sections end on, so `factored` requires it, as it requires
 * `numeralFractionsReduced`. A group that is one term (`(3y)`, `(-2)`) is
 * not read.
 */
function factorSumsFinished(latex) {
  const text = bareLatex(latex);
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] !== '(') continue;
    let depth = 0;
    let end = -1;
    for (let j = i; j < text.length; j += 1) {
      if (text[j] === '(') depth += 1;
      else if (text[j] === ')') {
        depth -= 1;
        if (depth === 0) { end = j; break; }
      }
    }
    if (end < 0) return true;
    const inner = text.slice(i + 1, end);
    const terms = splitTopLevelTerms(inner).filter((term) => term.trim());
    if (terms.length > 1
      && !(FORM_PREDICATES.expanded(inner) && FORM_PREDICATES['no-like-terms'](inner))) return false;
    // A signed term added in parentheses is a sign left unreduced:
    // `(a+(-10))^2` for `(a-10)^2` (Intermediate Algebra 9.2, October 3,
    // 2026). The leading term may be grouped (`((-3)+x)` reads as written).
    if (terms.slice(1).some((term) => /^\(\s*[+-][^()]*\)$/.test(term.trim()))) return false;
  }
  return true;
}

/** Writing that is numerals only: no letter outside `\frac`/`\cdot`/`\times`. */
const writesOnlyNumerals = (text) => /\d/.test(text)
  && !/[a-zA-Z]/.test(text.replace(/\\(?:[tdc]?frac|cdot|times)(?![a-zA-Z])/g, ' '));

/**
 * One finished numeral, in the sense `lowest-terms` enforces: a decimal, or a
 * fraction or mixed number with integer halves sharing no factor and its
 * sign reduced (at most one minus, never in the denominator).
 */
function isFinishedNumeral(text) {
  const bare = bareLatex(text);
  if (asDecimal(bare) !== null) return true;
  const fraction = asFraction(bare) ?? asMixedNumber(bare);
  if (!fraction) return false;
  if (fraction.negativeDenominator || fraction.signs > 1) return false;
  return gcd(fraction.numerator, fraction.denominator) === 1;
}

/**
 * One unsigned, nonzero, finished numeral FACTOR of an exponential model — its
 * coefficient, its base, or a constant term — read off a formShape() factor:
 * a decimal or integer, a fraction of integers in lowest terms over a
 * denominator other than 1, or a simplified root of an integer (the source's
 * own `\sqrt{2}(\sqrt{2})^x`), optionally in parentheses. Never a power, a
 * logarithm, a sign inside a group, or a fraction holding anything else:
 * `\frac{750}{125}`, `\sqrt[3]{125}`, `125^{\frac13}` and `\frac{\ln 0.5}{30}`
 * are arithmetic still to do.
 */
function isFinishedModelNumeral(factor) {
  if (!factor || factor.exponent !== null) return false;
  const { atom } = factor;
  if (atom.kind === 'number') return Number(atom.text) !== 0;
  if (atom.kind === 'frac') {
    if (!isIntegerLiteral(atom.numerator) || !isIntegerLiteral(atom.denominator)) return false;
    const [top, bottom] = [Number(atom.numerator), Number(atom.denominator)];
    return top !== 0 && bottom > 1 && gcd(top, bottom) === 1;
  }
  if (atom.kind === 'sqrt') {
    const index = atom.index === null ? 2 : Number(atom.index);
    if (atom.index !== null && !isIntegerLiteral(atom.index)) return false;
    if (!(index >= 2) || !isIntegerLiteral(atom.radicand)) return false;
    const radicand = Number(atom.radicand);
    if (radicand < 2 || !Number.isSafeInteger(radicand)) return false;
    for (let root = 2; root ** index <= radicand; root += 1) {
      if (radicand % root ** index === 0) return false;
    }
    return true;
  }
  if (atom.kind === 'group') return isFinishedModelNumeral(loneFactor(atom.text));
  return false;
}

/**
 * An EXACT continuous rate, the value of `\frac{\ln 2}{3}`, `(\ln 0.5)` or
 * `\ln(0.5)` as written in a model's exponent, or null: one natural
 * logarithm of a finished positive numeral other than 1, alone or over an
 * integer of at least 2. "Keep $k$ exact" asks for exactly this, so the key
 * `A_0e^{\frac{\ln2}{3}t}` is a finished model (Precalculus 4.7, October 4,
 * 2026); a decimal written in for the logarithm (`\frac{0.6931}{3}`) or a
 * slash (`\ln2/3`) is not this shape.
 */
function exactLogRate(text) {
  // `\frac{\ln 125}{3}` is `\ln 5` with the root left to take — the
  // `6\cdot125^{x/3}` of base e: a divided logarithm is finished only when
  // the argument is no perfect power of the divisor's degree.
  const rootIsRational = (written, degree) => {
    const call = written.match(/^\\ln(?:\((.+)\)|\{(.+)\}|(.+))$/);
    const argument = call && (call[1] ?? call[2] ?? call[3]);
    const fraction = argument && asFraction(argument);
    const decimal = !fraction && argument && /^\d*\.?\d+$/.test(argument.trim()) ? argument.trim() : null;
    const places = decimal ? (decimal.split('.')[1] ?? '').length : 0;
    const halves = fraction ? [fraction.numerator, fraction.denominator]
      : decimal ? [Math.round(Number(decimal) * 10 ** places), 10 ** places] : null;
    const common = halves ? gcd(halves[0], halves[1]) : 1;
    return halves !== null && halves.map((half) => half / common).every((half) => Math.round(half ** (1 / degree)) ** degree === half);
  };
  const logValue = (written) => {
    const call = written.match(/^\\ln(?:\((.+)\)|\{(.+)\}|(.+))$/);
    const argument = call && (call[1] ?? call[2] ?? call[3]);
    if (!argument || !isFinishedNumeral(argument) || /^[+-]/.test(argument.trim())) return null;
    const fraction = asFraction(argument);
    const value = fraction ? fraction.numerator / fraction.denominator : Number(bareLatex(argument));
    return value > 0 && value !== 1 ? Math.log(value) : null;
  };
  const quotient = text.match(/^\\[tdc]?frac\{(\\ln[^{}]*(?:\{[^{}]*\})?[^{}]*)\}(?:\{(\d+)\}|(\d))$/);
  if (quotient) {
    const divisor = Number(quotient[2] ?? quotient[3]);
    const value = logValue(quotient[1]);
    return value !== null && divisor >= 2 && !rootIsRational(quotient[1], divisor) ? value / divisor : null;
  }
  const grouped = text.match(/^\((\\ln.*)\)$/);
  if (grouped) return logValue(grouped[1]);
  // `\frac{1}{3}\ln(2)`, the unit fraction written before the logarithm
  // (Precalculus chapter 4 re-review, round 2, October 4, 2026).
  const scaled = text.match(/^\\[tdc]?frac(?:\{1\}|1)(?:\{(\d+)\}|(\d))(\\ln.*)$/);
  if (scaled) {
    const divisor = Number(scaled[1] ?? scaled[2]);
    const value = logValue(scaled[3]);
    return value !== null && divisor >= 2 && !rootIsRational(scaled[3], divisor) ? value / divisor : null;
  }
  return /^\\ln[({]/.test(text) ? logValue(text) : null;
}

/**
 * An exponent over $e$ written as an exact logarithm rate and its variable in
 * ANY order — `x\ln5`, `x\ln(5)`, `t\frac{\ln2}{3}`, `\frac{t\ln2}{3}`,
 * `\frac{1}{3}\ln(2)t` — as the rate's value, or null. The one variable
 * (and a `\cdot`/`\times` beside it) is taken out and the rest must be an
 * exactLogRate; a rate written with the variable last, `(\ln5)x`, was the
 * only order read, so the others graded `form` against keys they equal
 * (Precalculus chapter 4 re-review, round 2, October 4, 2026). With the
 * variable out of the way, a bare `\ln5` is unambiguous as the rate.
 */
function exactLogRateAnyOrder(text) {
  if (!/\\ln(?![a-zA-Z])/.test(text)) return null;
  const letters = [];
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '\\') {
      i += (text.slice(i).match(/^\\[a-zA-Z]*/)[0].length || 1) - 1;
      continue;
    }
    if (/[a-zA-Z]/.test(text[i])) letters.push(i);
  }
  if (letters.length !== 1 || text[letters[0]] === 'e') return null;
  const at = letters[0];
  const before = text.slice(0, at).replace(/(?:\\cdot|\\times|\*)$/, '');
  const after = text.slice(at + 1).replace(/^(?:\\cdot|\\times|\*)/, '');
  if (before !== text.slice(0, at) && after !== text.slice(at + 1)) return null;
  const rest = `${before}${after}`;
  if (!rest) return null;
  return exactLogRate(rest) ?? (/^\\ln[^({]/.test(rest) ? exactLogRate(`\\ln(${rest.slice(3)})`) : null);
}

/**
 * The rate a finished exponential model's exponent multiplies its variable
 * by, as `{ value, places }` (places null for an exact rate), or null when
 * the exponent is not finished. The exponent is the variable (any letter but
 * `e`) times an optional finished rate: a decimal (`0.5x`, `-0.0231t`,
 * `(-0.3038)x`), a decimal in scientific notation (`-8.7\times10^{-9}t`), a
 * lowest-terms fraction (`\frac{1}{3}x`, `\frac{t}{20}`, `t/20`,
 * `\frac{2x}{3}`), or — over $e$ only — an exact logarithm rate
 * (exactLogRate). Never other arithmetic: `e^{(\ln5)\cdot1x}`,
 * `e^{\frac{0.693}{30}t}`, `5^{-(-x)}`.
 */
function modelExponentRate(written, natural) {
  let text = String(written ?? '').replace(/\s+/g, '');
  let sign = 1;
  if (text.startsWith('-')) { sign = -1; text = text.slice(1); }
  if (/^[a-df-zA-Z]$/.test(text)) return { value: sign, places: null };
  const quotient = text.match(/^\\[tdc]?frac(?:\{(?<top>\d*)[a-df-zA-Z]\}|[a-df-zA-Z])(?:\{(?<bottom>\d+)\}|(?<digit>\d))$/)
    ?? text.match(/^(?<top>\d*)[a-df-zA-Z]\/(?<bottom>\d+)$/);
  if (quotient) {
    const { top, bottom, digit } = quotient.groups;
    const [a, b] = [Number(top || 1), Number(bottom ?? digit)];
    return a !== 0 && b >= 2 && gcd(a, b) === 1 ? { value: sign * a / b, places: null } : null;
  }
  const exact = natural ? exactLogRateAnyOrder(text) : null;
  if (exact !== null) return { value: sign * exact, places: null };
  const product = text.match(/^(.+?)(?:\\cdot|\\times|\*)?[a-df-zA-Z]$/);
  if (!product) return null;
  let rate = product[1];
  const grouped = rate.match(/^\((.*)\)$/);
  if (grouped) {
    rate = grouped[1];
    if (rate.startsWith('-')) {
      if (sign < 0) return null;
      sign = -1;
      rate = rate.slice(1);
    }
  }
  if (/^[+-]/.test(rate)) return null;
  // A written rate of 1 is the step left in place: `5^{1x}`,
  // `1.25^{-1\cdot x}` (Precalculus 4.2, October 4, 2026).
  if (asDecimal(rate) !== null) {
    return Number(rate) === 0 || Number(rate) === 1 ? null
      : { value: sign * Number(rate), places: (rate.split('.')[1] ?? '').length };
  }
  const scientific = asScientific(rate);
  if (scientific !== null) {
    const { coefficient, exponent } = scientific;
    return coefficient >= 1 && coefficient < 10
      ? { value: sign * Number(`${coefficient}e${exponent}`), places: null } : null;
  }
  const fraction = asFraction(rate);
  return fraction !== null && fraction.signs === 0 && fraction.numerator !== 0
    && fraction.denominator > 1 && gcd(fraction.numerator, fraction.denominator) === 1
    ? { value: sign * fraction.numerator / fraction.denominator, places: null } : null;
}

/**
 * Is a numeral base raised to `rate` a power still to take? Over a numeral
 * base the exponent is the variable alone or its negative (`4(3)^{-x}`); any
 * other multiple is finished only when the base to that multiple is
 * irrational (`2^{t/3}`, `2^{0.5x}`). A rational one is the power left
 * untaken: `6\cdot125^{x/3}` for `6(5)^x`, `4^{x/2}` for `2^x`,
 * `1.5^{2x}` for `2.25^x` (Precalculus chapter 4 re-review, October 4, 2026).
 */
function untakenPower(base, rate) {
  if (Math.abs(rate) === 1) return false;
  const power = base ** Math.abs(rate);
  if (!Number.isFinite(power)) return true;
  for (let denominator = 1; denominator <= 10000; denominator += 1) {
    const scaled = power * denominator;
    if (Math.abs(scaled - Math.round(scaled)) <= 1e-9 * Math.max(1, scaled)) return true;
  }
  return false;
}

/**
 * An exponential model read off the writing (the `exponential-model` grammar
 * documented at its predicate), or null: the parts the rounding comparison
 * pairs up — the model term's sign, its coefficient and base factors, whether
 * the base is $e$, the written exponent, and the constant term with its sign.
 */
const INITIAL_VALUE_SYMBOL = /(?<![\\a-zA-Z])[a-zA-Z]_(?:\{\s*0\s*\}|0)(?![0-9])/;

function readExponentialModel(latex) {
  let bare = stripWrittenLabel(bareLatex(latex));
  const label = bare.match(LEADING_VARIABLE_LABEL);
  if (label) bare = bare.slice(label[0].length);
  // An initial-value symbol, `A_0`/`P_{0}`, is the coefficient of a model
  // left general ("a function that gives the amount remaining"): read as one
  // opaque factor, the shape parser having no subscripts.
  bare = bareLatex(bare).replace(INITIAL_VALUE_SYMBOL, '\\initialvalue ');
  if (bare.includes('=')) return null;
  const shape = formShape(bare);
  if (!shape || shape.terms.length > 2) return null;
  // splitTopLevelTerms() drops the sign that splits two terms, so the signs
  // are read here: the leading one, then each top-level `+`/`-` after a term.
  const signs = [bare.startsWith('-')];
  for (let i = 0, depth = 0, seen = false; i < bare.length; i += 1) {
    const char = bare[i];
    if (char === '{' || char === '(') depth += 1;
    else if (char === '}' || char === ')') depth -= 1;
    if (depth === 0 && (char === '+' || char === '-') && seen) signs.push(char === '-');
    if (depth === 0 && (char === '+' || char === '-')) seen = false;
    else if (char.trim()) seen = true;
  }
  const isConstant = (term) => term.factors.length === 1 && isFinishedModelNumeral(term.factors[0]);
  const at = shape.terms.findIndex((term) => !isConstant(term));
  if (at === -1 || shape.terms.some((term, i) => i !== at && !isConstant(term))) return null;
  const factors = shape.terms[at].factors.map((factor) => {
    if (factor.atom.kind !== 'group' || factor.exponent !== null) return factor;
    const inner = loneFactor(factor.atom.text);
    return inner && inner.exponent !== null ? inner : factor;
  });
  const powers = factors.filter((factor) => factor.exponent !== null);
  if (factors.length > 2 || powers.length !== 1) return null;
  const coefficient = factors.find((factor) => factor.exponent === null) ?? null;
  const initialValue = coefficient?.atom.kind === 'command' && coefficient.atom.text === 'initialvalue';
  if (coefficient && !initialValue && !isFinishedModelNumeral(coefficient)) return null;
  // A written coefficient of 1 is the substitution left in place:
  // `-1\cdot10^x+7` for `-10^x+7` (Precalculus 4.2, October 4, 2026).
  if (coefficient && !initialValue && modelNumeralValue(coefficient).value === 1) return null;
  const [{ atom, exponent }] = powers;
  const natural = (atom.kind === 'symbol' || atom.kind === 'group') && atom.text.trim() === 'e';
  if (!natural && !isFinishedModelNumeral({ atom, exponent: null })) return null;
  const rate = modelExponentRate(exponent, natural);
  if (rate === null) return null;
  if (!natural && untakenPower(modelNumeralValue({ atom, exponent: null }).value, rate.value)) return null;
  const constantAt = shape.terms.length === 2 ? 1 - at : -1;
  return {
    negative: signs[at],
    coefficient,
    base: natural ? null : { atom, exponent: null },
    exponent,
    constant: constantAt === -1 ? null : { negative: signs[constantAt], factor: shape.terms[constantAt].factors[0] },
  };
}

/**
 * A finished model numeral's value, and how many decimal places it is
 * written to — null places for an exact one (a fraction, a root, an
 * implicit 1).
 */
function modelNumeralValue(factor) {
  if (factor === null) return { value: 1, places: null };
  const { atom } = factor;
  // An initial-value symbol pairs only with itself (overPreciseModel).
  if (atom.kind === 'command') return { value: Number.NaN, places: null, symbol: true };
  if (atom.kind === 'number') return { value: Number(atom.text), places: (atom.text.split('.')[1] ?? '').length };
  if (atom.kind === 'frac') return { value: Number(atom.numerator) / Number(atom.denominator), places: null };
  if (atom.kind === 'sqrt') return { value: Number(atom.radicand) ** (1 / Number(atom.index ?? 2)), places: null };
  return modelNumeralValue(loneFactor(atom.text));
}

/**
 * Is `studentRaw` the key's exponential model with its decimals carried
 * further than the key rounds them? A regression ask prints "round to four
 * decimal places", and the value check (1e-9) marked
 * `522.8858598(1.196452561)^x` `incorrect` against `522.8859(1.1965)^x`
 * (Precalculus 4.8, October 4, 2026) — the right model, under-rounded.
 * Every part is paired by role: the same signs, the same kind of base, and
 * each decimal of the key matched by a response decimal written to at least
 * as many places that rounds to it; an exact part must be the key's value.
 * An integer part of a key that rounds anything is rounded too ("round $a$
 * to the nearest whole number", `18\cdot1.025^x`).
 * The verdict this feeds is `form`, never `correct`.
 */
function overPreciseModel(studentRaw, answerRaw) {
  const [student, key] = [studentRaw, answerRaw].map(readExponentialModel);
  if (!student || !key || student.negative !== key.negative) return false;
  if ((student.base === null) !== (key.base === null)) return false;
  if ((student.constant === null) !== (key.constant === null)) return false;
  if (student.constant && student.constant.negative !== key.constant.negative) return false;
  const pairs = [
    [student.coefficient, key.coefficient].map(modelNumeralValue),
    [[student, student.exponent], [key, key.exponent]].map(([model, exponent]) => modelExponentRate(exponent, model.base === null)),
  ];
  if (key.base) pairs.push([student.base, key.base].map(modelNumeralValue));
  if (key.constant) pairs.push([student.constant.factor, key.constant.factor].map(modelNumeralValue));
  // Only a key written with a decimal is a rounded model: `6(5)^x` and
  // `-10^x+7` are exact, and `6.0001(5)^x` is just wrong.
  if (!pairs.some(([, theirs]) => theirs.places > 0)) return false;
  let carried = false;
  for (const [mine, theirs] of pairs) {
    if (mine.symbol || theirs.symbol) {
      if (!(mine.symbol && theirs.symbol)) return false;
      continue;
    }
    if (theirs.places === null || mine.places === null) {
      if (Math.abs(mine.value - theirs.value) > SAMPLE_TOLERANCE * Math.max(1, Math.abs(theirs.value))) return false;
      continue;
    }
    if (mine.places < theirs.places || mine.value.toFixed(theirs.places) !== theirs.value.toFixed(theirs.places)) return false;
    if (mine.places > theirs.places) carried = true;
  }
  return carried;
}

/**
 * Is every number a LINE's writing states finished — nothing a learner can
 * still work out? The line forms read their shape off the parse, which has
 * already evaluated `\frac{-3-1}{1-(-2)}` to $-\tfrac43$, `(2+1)` to 3 and
 * `\frac{4}{-3}` to $-\tfrac43$, so the slope formula typed unworked graded
 * `correct` under `slope-intercept-form` and `point-slope-form`
 * (Intermediate Algebra 3.3, September 28, 2026). Read off the writing, at
 * any depth:
 *   - a fraction half written in numerals alone is one integer, and the
 *     denominator carries no sign (`\frac{1+9}{3}`, `\frac{4}{-3}`,
 *     `\frac{-4}{-3}` fail; `\frac{-4}{3}` passes, as under `lowest-terms`),
 *     and a minus before a fraction whose numerator is negative is two signs
 *     for one (`-\frac{-4}{3}`);
 *   - a parenthesized group written in numerals alone is one finished
 *     numeral (`(2+1)x`, `\frac{1}{1-(-2)}` fail; `(-3)` passes — the point
 *     in `y-(-3)` and `(x-(-2))` is the book's own substitution step);
 *   - a sum holding a letter — the whole response, each group, each
 *     fraction half — writes at most one numeral term (`(x-3+1)`,
 *     `y+1+2`).
 * With `signs`, a sign directly before a parenthesized signed numeral is
 * sign work left undone too (`2x-(-3)`, `2x+(-3)`) — slope-intercept form
 * only: point-slope form's `y-(-3)` is the formula with the point
 * substituted, the shape the ask names.
 */
function lineNumeralsFinished(latex, { signs = false } = {}) {
  const text = bareLatex(latex);
  const oneNumeralTerm = (sum) => splitTopLevelTerms(sum)
    .filter((term) => term.trim() && writesOnlyNumerals(term)).length <= 1;
  if (!text.split(/=|<|>|\\[lg]eq?(?![a-zA-Z])|\\ne(?![a-zA-Z])/).every(oneNumeralTerm)) return false;
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '(') {
      let depth = 0;
      let close = -1;
      for (let j = i; j < text.length; j += 1) {
        if (text[j] === '(') depth += 1;
        else if (text[j] === ')') {
          depth -= 1;
          if (depth === 0) { close = j; break; }
        }
      }
      if (close === -1) return true;
      const content = text.slice(i + 1, close);
      if (writesOnlyNumerals(content)) {
        if (!isFinishedNumeral(content)) return false;
        if (signs && /[+-]\s*$/.test(text.slice(0, i)) && /^\s*[+-]/.test(content)) return false;
      } else if (!oneNumeralTerm(content)) {
        return false;
      }
      continue;
    }
    if (text[i] !== '\\') continue;
    const command = text.slice(i).match(/^\\[tdc]?frac(?![a-zA-Z])/);
    if (!command) {
      i += text.slice(i).match(/^\\(?:[a-zA-Z]+|[\s\S])?/)[0].length - 1;
      continue;
    }
    const numerator = readTexArgument(text, i + command[0].length);
    const denominator = numerator && readTexArgument(text, numerator[1]);
    if (!denominator) return true;
    const [top, bottom] = [numerator[0].trim(), denominator[0].trim()];
    if (writesOnlyNumerals(top) ? !/^[+-]?\d+$/.test(top) : !oneNumeralTerm(top)) return false;
    if (writesOnlyNumerals(bottom) ? !/^\d+$/.test(bottom) : !oneNumeralTerm(bottom)) return false;
    if (top.startsWith('-') && /-\s*$/.test(text.slice(0, i))) return false;
    i += command[0].length - 1;
  }
  return true;
}

/**
 * One additive term of a radical expression, read factor by factor off the
 * writing (the engine folds `\frac{6\sqrt2}{4}` and `\sqrt3\sqrt5` before any
 * parse could show them). Returns
 *   numerals  — how many numeral factors the term writes (a numeric
 *               `\frac{3}{2}` coefficient counts as one);
 *   indices   — the root index of every radical written at the term's own
 *               level;
 *   fractions — each `\frac`'s two halves, read at their own level later;
 *   nested    — each group holding a sum, likewise;
 *   content   — the term's integer content: the product of its numerals and
 *               of its groups' contents, or null when a factor's content is
 *               not an integer the writing states (a decimal, a fraction).
 * A parenthesized factor holding ONE term is the same product, so it is read
 * into the term (`2(3\sqrt2)` writes two numerals, `\sqrt3(\sqrt5)` two
 * radicals). Anything unrecognised — a letter, `|u|`, a command — counts as
 * content 1: underestimating content can only let a fraction pass, never
 * refuse one. null when the writing cannot be read at all.
 */
function readRadicalTerm(term) {
  const read = {
    numerals: 0, indices: [], fractions: [], nested: [], content: 1, letters: new Map(), unmerged: false,
  };
  const times = (content) => {
    read.content = read.content === null || content === null ? null : read.content * content;
  };
  let i = 0;
  while (i < term.length) {
    const rest = term.slice(i);
    const char = term[i];
    const numeral = rest.match(/^(?:\d+(?:\.\d+)?|\.\d+)/);
    if (numeral) {
      read.numerals += 1;
      times(numeral[0].includes('.') ? null : Number(numeral[0]));
      i += numeral[0].length;
      continue;
    }
    if (char === '^' || char === '_') {
      const argument = readTexArgument(term, i + 1);
      i = argument ? argument[1] : term.length;
      continue;
    }
    const radical = rest.match(/^\\sqrt\s*(?:\[\s*([^\]]*?)\s*\])?/);
    if (radical) {
      const radicand = readTexArgument(term, i + radical[0].length);
      if (!radicand) return null;
      read.indices.push(radical[1] || '2');
      i = radicand[1];
      continue;
    }
    const fraction = rest.match(/^\\[tdc]?frac(?![a-zA-Z])/);
    if (fraction) {
      const numerator = readTexArgument(term, i + fraction[0].length);
      const denominator = numerator && readTexArgument(term, numerator[1]);
      if (!denominator) return null;
      const halves = [numerator[0], denominator[0]];
      if (halves.every((half) => /^\s*[+-]?\s*\d+\s*$/.test(half))) read.numerals += 1;
      read.fractions.push(halves);
      times(null);
      i = denominator[1];
      continue;
    }
    if (char === '(' || char === '{') {
      const group = readDelimitedGroup(term, i);
      if (!group) return null;
      i = group[1];
      const single = splitTopLevelTerms(group[0]).filter((piece) => piece.trim()).length === 1;
      // A powered group is read inside, at its own level. Powering ONE term
      // is a power of a power or of a product left unmerged — `(z^3)^2` for
      // `z^6`; a powered SUM is a product still to expand, which the
      // top-level rules and `expanded` own.
      if (/^\s*\^/.test(term.slice(i))) {
        if (single) read.unmerged = true;
        read.nested.push(group[0]);
        continue;
      }
      if (single) {
        const inner = readRadicalTerm(group[0]);
        if (!inner) return null;
        read.numerals += inner.numerals;
        read.indices.push(...inner.indices);
        read.fractions.push(...inner.fractions);
        read.nested.push(...inner.nested);
        for (const [letter, count] of inner.letters) read.letters.set(letter, (read.letters.get(letter) ?? 0) + count);
        read.unmerged ||= inner.unmerged;
        times(inner.content);
      } else {
        read.nested.push(group[0]);
        times(integerContent(group[0]));
      }
      continue;
    }
    if (char === '|') {
      const close = term.indexOf('|', i + 1);
      i = close === -1 ? term.length : close + 1;
      continue;
    }
    if (/[a-zA-Z]/.test(char)) {
      read.letters.set(char, (read.letters.get(char) ?? 0) + 1);
      i += 1;
      continue;
    }
    // A function's argument is no factor of the term: the 4 in `\cos(4x)`
    // was read as integer content, so `\frac{\cos(4x)}{8}` was "unreduced"
    // and `\frac18-\frac{\cos(4x)}{8}` failed `no-like-terms` (Precalculus
    // chapters 5–6 re-review, round 2, October 4, 2026). The name, a power
    // or base on it, and its argument are stepped over whole.
    const call = rest.match(new RegExp(`^(?:${TRIG_NAME.source}|${LOG_NAME.source})`));
    if (call) {
      let at = i + call[0].length;
      while (term[at] === ' ') at += 1;
      while (term[at] === '^' || term[at] === '_') at = readTexArgument(term, at + 1)?.[1] ?? term.length;
      i = readNotationArgument(term, at)?.[1] ?? term.length;
      continue;
    }
    const command = rest.match(/^\\(?:[a-zA-Z]+|[\s\S])?/);
    i += command ? command[0].length : 1;
  }
  return read;
}

/**
 * Every radical a term writes, anywhere in it, as `index|radicand` with the
 * radicand's spaces removed — the radical part of a variable-free term.
 */
function writtenRadicals(term) {
  const radicals = [];
  for (const opener of term.matchAll(/\\sqrt\s*(?:\[\s*([^\]]*?)\s*\])?/g)) {
    const radicand = readTexArgument(term, opener.index + opener[0].length);
    if (radicand) radicals.push(`${opener[1] || '2'}|${radicand[0].replace(/\s+/g, '')}`);
  }
  return radicals.sort();
}

/**
 * The like-term signature of a VARIABLE-FREE term — `rational` for a plain
 * number (`3`, `\frac{3}{4}`), else its written radicals (`2|2` for
 * `2\sqrt2` and `\frac{\sqrt2}{2}` alike) — or null for a term that holds a
 * variable, whose likeness the engine's parse decides.
 */
function numericTermSignature(term) {
  if (/[a-zA-Z]/.test(term.replace(/\\[a-zA-Z]+/g, ' '))) return null;
  return writtenRadicals(term).join('*') || 'rational';
}

/**
 * The integer content of a written sum — the gcd of its terms' contents
 * (readRadicalTerm) — or null when some term's content cannot be read. The
 * sign never counts: `-\sqrt3` has content 1, `4+2\sqrt5` content 2.
 */
function integerContent(text) {
  let content = 0;
  for (const term of splitTopLevelTerms(text)) {
    if (!term.trim()) continue;
    const read = readRadicalTerm(term);
    if (!read || read.content === null) return null;
    content = gcd(content, read.content);
  }
  return content;
}

/**
 * Does a radical expression leave numeric work written out — at the top level
 * AND inside every fraction half and every sum-valued group, since a
 * rationalized key keeps its work below a fraction bar? Three defects, each
 * value-equal to its simplified form (Elementary Algebra 9, September 27,
 * 2026):
 *   - a fraction whose numerator's integer content shares a factor with its
 *     denominator's: `\frac{6\sqrt2}{4}`, `\frac{2\sqrt3}{6}`, and
 *     `\frac{4+2\sqrt5}{2}` — the printed prompt of a "simplify" ask — or a
 *     fraction over 1, the division by nothing left written;
 *   - two same-index radicals multiplied in one term, the Product Property
 *     left unapplied: `\frac{\sqrt3\sqrt5}{5}` for `\frac{\sqrt{15}}{5}`;
 *   - two numerals multiplied in one term (`2\sqrt2\cdot3` for `6\sqrt2`,
 *     `3\cdot5` for 15, `4\cdot2x` for `8x`), a variable written twice in
 *     one term (`z^3z^3` for `z^6`), or a powered single-term group
 *     (`(z^3)^2`) — the monomial and bare-number keys of 9.1–9.8 declare
 *     `simplified-radical` alone. A bare numeral power (`3^2`, `12^{-15}`)
 *     stays legal: the token's integer-exponent contract predates this;
 *   - two variable-free like terms side by side: `3+4` for 7, and
 *     `\frac{2\sqrt3+\sqrt3}{4}` below a bar the top-level like-radicals
 *     scan cannot see.
 * A sign in a numerator is never a defect (`\frac{-\sqrt3}{3}` =
 * `-\frac{\sqrt3}{3}`) — one in a one-term denominator is — and a term or
 * half the reader cannot state an integer content for fails open.
 */
function radicalWritingDefect(text) {
  const numericTerms = new Set();
  for (const term of splitTopLevelTerms(text)) {
    if (!term.trim()) continue;
    const signature = numericTermSignature(term);
    if (signature !== null) {
      if (numericTerms.has(signature)) return true;
      numericTerms.add(signature);
    }
    const read = readRadicalTerm(term);
    if (!read) continue;
    if (read.numerals > 1 || read.unmerged) return true;
    if ([...read.letters.values()].some((count) => count > 1)) return true;
    if (read.indices.length > new Set(read.indices).size) return true;
    for (const [numerator, denominator] of read.fractions) {
      if (/^\s*[+-]?\s*1\s*$/.test(denominator)) return true;
      const top = integerContent(numerator);
      const bottom = integerContent(denominator);
      if (top !== null && bottom !== null && gcd(top, bottom) > 1) return true;
      // The same reduction for a VARIABLE factor, and the sign: a letter
      // written outside every radical in both one-term halves still cancels
      // (`\frac{2x\sqrt{5x}}{x^2}` for `\frac{2\sqrt{5x}}{x}`), and a minus
      // standing in a one-term denominator is sign work left undone
      // (`\frac{3(1+\sqrt5)}{-4}`). Both graded `correct` (Intermediate
      // Algebra 8.5, October 3, 2026). A letter under a radical is not a
      // factor of the half, and a sum's letters are not read at all.
      const single = [numerator, denominator].map((half) => {
        const terms = splitTopLevelTerms(half).filter((piece) => piece.trim());
        return terms.length === 1 ? readRadicalTerm(terms[0]) : null;
      });
      if (single[1] && /^\s*-/.test(denominator)) return true;
      if (single.every(Boolean) && [...single[0].letters.keys()].some((letter) => single[1].letters.has(letter))) {
        return true;
      }
      if (radicalWritingDefect(numerator) || radicalWritingDefect(denominator)) return true;
    }
    if (read.nested.some(radicalWritingDefect)) return true;
  }
  return false;
}

/**
 * Does the writing divide by a quotient or divide a quotient — a compound
 * fraction left unworked? `\frac{2\pi}{\frac13}`, `\frac{2\pi}{1/3}`,
 * `2\pi\div\frac13` and `2\pi/(1/3)` — the period formula 2π/|B| half done —
 * graded `correct` against `6\pi` under `single-term`, and
 * `\frac{2\sqrt3}{\frac12}` against `4\sqrt3` under `simplified-radical`,
 * where `2\pi\cdot3` was already refused (Precalculus chapters 5–6 re-review,
 * October 4, 2026). Two readings: a division bar (`\frac`, `/`, `\div`)
 * inside either half of a `\frac`, or a `/` or `\div` in a top-level term
 * that writes a second bar (`\frac{\pi}{3}/2`). Exponents are stepped over —
 * a rational exponent's bar is no fraction bar of the expression — and a sum
 * of fractions (`\frac{\sqrt3}{2}+\frac12i`) is one bar per term.
 */
const DIVISION_BAR = /\\[tdc]?frac(?![a-zA-Z])|\\div(?![a-zA-Z])|\//g;
function writesCompoundFraction(latex) {
  const text = withoutExponents(bareLatex(latex));
  for (const opener of text.matchAll(/\\[tdc]?frac(?![a-zA-Z])/g)) {
    const numerator = readTexArgument(text, opener.index + opener[0].length);
    const denominator = numerator && readTexArgument(text, numerator[1]);
    if (denominator && [numerator[0], denominator[0]].some((half) => (half.match(DIVISION_BAR) ?? []).length)) return true;
  }
  return splitTopLevelTerms(text).some((term) => {
    const bars = term.match(DIVISION_BAR) ?? [];
    return bars.length > 1 && bars.some((bar) => !bar.includes('frac'));
  });
}

/**
 * Does the writing put a trigonometric application under a division — in a
 * `\frac`'s denominator, after a `/` or `\div`, or in a group raised to a
 * negative power (`(\cos t)^{-1}`; `\cos^{-1}t` is the inverse function and
 * is not read)? `single-trig-function` reads it (Precalculus chapters 5–6
 * re-review, October 4, 2026).
 */
const TRIG_NAME = /\\(?:arc)?(?:sin|cos|tan|csc|sec|cot)(?![a-zA-Z])/;
function writesTrigInDenominator(latex) {
  const text = bareLatex(latex);
  for (const opener of text.matchAll(/\\[tdc]?frac(?![a-zA-Z])/g)) {
    const numerator = readTexArgument(text, opener.index + opener[0].length);
    const denominator = numerator && readTexArgument(text, numerator[1]);
    if (denominator && TRIG_NAME.test(denominator[0])) return true;
  }
  if (/(?:\/|\\div(?![a-zA-Z]))\s*[({]?\s*[-+]?\s*[\d.]*\s*\\(?:arc)?(?:sin|cos|tan|csc|sec|cot)(?![a-zA-Z])/.test(text)) return true;
  return /\([^()]*\\(?:arc)?(?:sin|cos|tan|csc|sec|cot)(?![a-zA-Z])[^()]*\)\s*\^\s*\{?\s*-/.test(text);
}

/**
 * Does a radicand leave numeric work written? radicalWritingDefect() reads
 * a radical's surroundings and steps over its radicand, so a fraction under
 * the radical went unread: `\sqrt{\frac{2x-10}{6}}` passed `simplified-radical`
 * against `\sqrt{\frac{x-5}{3}}`, and `\sqrt[3]{\frac{V}{\frac43\pi}}` against
 * `\sqrt[3]{\frac{3V}{4\pi}}` (Precalculus 3.8, October 4, 2026). The same
 * defects are read inside it — content across the bar, a bar over 1, two
 * numerals in one term — and so is a fraction written inside a fraction's
 * half, the compound fraction the inverse-function solve leaves, a decimal
 * (`\sqrt{\frac{0.25V}{\pi}}`), and a written zero term.
 */
function radicandWritingDefect(radicand) {
  if (WRITES_A_DECIMAL.test(radicand)) return true;
  const terms = splitTopLevelTerms(radicand).filter((term) => term.trim());
  if (terms.length > 1 && terms.some((term) => isZeroTerm(term.trim().replace(/^[+-]\s*/, '')))) return true;
  for (const opener of radicand.matchAll(/\\[tdc]?frac(?![a-zA-Z])/g)) {
    const numerator = readTexArgument(radicand, opener.index + opener[0].length);
    const denominator = numerator && readTexArgument(radicand, numerator[1]);
    if (!denominator) continue;
    if ([numerator[0], denominator[0]].some((half) => /\\[tdc]?frac(?![a-zA-Z])/.test(half))) return true;
  }
  return radicalWritingDefect(radicand);
}

/**
 * Is a written numeral-fraction exponent in lowest terms? `x^{\frac{2}{4}}`
 * is `x^{\frac12}` with the exponent left unreduced — value-equal, so only
 * the writing can refuse it. An exponent that is not a numeral fraction has
 * nothing to reduce.
 */
function exponentInLowestTerms(written) {
  const text = String(written ?? '').replace(/\s+/g, '');
  const fraction = text.match(EXPONENT_FRACTION);
  const ratio = text.match(/^[+-]?(\d+)\/[+-]?(\d+)$/);
  const halves = fraction ? [fraction[2] ?? fraction[3], fraction[4] ?? fraction[5]]
    : ratio ? [ratio[1], ratio[2]] : null;
  if (!halves || !halves.every((half) => /^[+-]?\d+$/.test(half))) return true;
  return gcd(Math.abs(Number(halves[0])), Math.abs(Number(halves[1]))) === 1;
}

/**
 * The radical factors of a number literal's MathJSON, one signature each:
 * `["Multiply",2,["Sqrt",2]]` → `Sqrt(2)`. A rational literal has none, so
 * every plain number shares the empty radical part; a complex literal is
 * marked imaginary, so it is never mistaken for a plain number.
 */
function radicalParts(json) {
  const parts = [];
  const visit = (node) => {
    if (!Array.isArray(node)) return;
    if (node[0] === 'Sqrt' || node[0] === 'Root') {
      parts.push(`${node[0]}(${JSON.stringify(node.slice(1))})`);
      return;
    }
    node.slice(1).forEach(visit);
  };
  visit(json);
  if (Array.isArray(json) && json[0] === 'Complex') parts.push('ImaginaryUnit');
  return parts;
}

/**
 * Does the writing carry an exponent fraction left unfinished — not in lowest
 * terms (`x^{2/4}`), or a whole number wearing a fraction bar (`x^{6/3}`,
 * `\frac{1}{z^{6/3}}`)? The engine folds both before a parse could show them,
 * so `single-term` and `single-fraction` passed them against `x^{1/2}`,
 * `x^2` and `\frac{1}{z^2}` (Elementary Algebra 9.8, September 27, 2026).
 * `single-power` and `rational-exponent` already refuse both by their own
 * grammar; `reduced-fraction` did by refusing every `/`, and asks this since
 * a rational exponent's bar stopped counting as a fraction bar.
 */
//
// …nor one written as numeral arithmetic: `x^{\frac34\cdot\frac23}` for
// `x^{1/2}`, `n^{2\cdot\frac12}` for `n` — the Power Property applied but its
// product left unmultiplied. EXPONENT_ARITHMETIC reads only brace-free
// integer operands, so an exponent fraction's own braces hid the product from
// `single-term` and `single-fraction` (Intermediate Algebra 8.3, October 3,
// 2026). A numerals-only exponent that is not ONE number is work left undone.
function writesUnreducedExponent(bare) {
  for (const caret of bare.matchAll(/\^/g)) {
    const argument = readTexArgument(bare, caret.index + 1);
    if (!argument) continue;
    const written = argument[0].replace(/\s+/g, '');
    const value = exponentValue(written);
    if (value === null && writesOnlyNumerals(written)) return true;
    const isFraction = EXPONENT_FRACTION.test(written) || /^[+-]?\d+\/[+-]?\d+$/.test(written);
    if (!isFraction || value === null) continue;
    if (Number.isInteger(value) || !exponentInLowestTerms(written)) return true;
  }
  return false;
}

/**
 * Does the writing leave a root of a numeral perfect power unevaluated —
 * `\sqrt{25}` for 5, `\sqrt[3]{8}`, `\sqrt{1}`? The engine folds it, so
 * `single-fraction` passed `\frac{\sqrt{25}n}{m^{1/4}}` against
 * `\frac{5n}{m^{1/4}}` (Intermediate Algebra 8.3, October 3, 2026). Only an
 * integer radicand is read: `\sqrt{2}` is a finished radical.
 */
function writesPerfectNumeralRoot(bare) {
  for (const opener of bare.matchAll(/\\sqrt\s*(?:\[\s*(\d+)\s*\])?/g)) {
    const radicand = readTexArgument(bare, opener.index + opener[0].length);
    if (!radicand || !/^\s*\d+\s*$/.test(radicand[0])) continue;
    const [value, index] = [Number(radicand[0]), Number(opener[1] ?? 2)];
    const root = Math.round(value ** (1 / index));
    if (root ** index === value) return true;
  }
  return false;
}

/**
 * The degree of `e` in the variable `v`, or null when it is not a polynomial
 * the walk can read (a quotient by a non-numeral, a non-integer power).
 */
function polynomialDegree(e, v) {
  if (e.isNumberLiteral) return 0;
  if (e.symbol) return e.symbol === v ? 1 : 0;
  if (e.operator === 'Negate') return polynomialDegree(e.ops[0], v);
  if (e.operator === 'Add' || e.operator === 'Subtract') {
    const degrees = e.ops.map((op) => polynomialDegree(op, v));
    return degrees.includes(null) ? null : Math.max(...degrees);
  }
  if (e.operator === 'Multiply') {
    const degrees = e.ops.map((op) => polynomialDegree(op, v));
    return degrees.includes(null) ? null : degrees.reduce((a, b) => a + b, 0);
  }
  if (e.operator === 'Power' && Number.isInteger(e.ops[1].re) && e.ops[1].re >= 0) {
    const base = polynomialDegree(e.ops[0], v);
    return base === null ? null : base * e.ops[1].re;
  }
  if (e.operator === 'Divide' && e.ops[1].isNumberLiteral) return polynomialDegree(e.ops[0], v);
  return null;
}

/** A sum's term that is a polynomial quotient whose numerator's degree reaches its denominator's. */
function improperFractionTerm(term) {
  const e = term.operator === 'Negate' ? term.ops[0] : term;
  if (e.operator !== 'Divide' || e.ops[1].isNumberLiteral) return false;
  const free = [...new Set(e.ops[1].freeVariables ?? [])];
  if (free.length !== 1) return false;
  const top = polynomialDegree(e.ops[0], free[0]);
  const bottom = polynomialDegree(e.ops[1], free[0]);
  return top !== null && bottom !== null && bottom >= 1 && top >= bottom;
}

const FORM_PREDICATES = {
  fraction: (latex) => asFraction(latex) !== null,
  // An ordered pair keyed with numbers — "(-1,-6)" — is a decimal in each
  // coordinate: `(-1,2(-1)-4)` is the substitution left unworked.
  decimal: (latex) => {
    if (asDecimal(latex) !== null) return true;
    // bareLatex has already stripped the pair's enclosing parentheses.
    const members = splitTopLevelCommas(stripGroupingCommas(bareLatex(latex)));
    return members.length >= 2 && members.every((member) => asDecimal(member) !== null);
  },
  // "Enter the percent, including the % sign": value grading reads 62% and
  // 0.62 as the same number, so the shape IS the exercise.
  //
  // A trailing `\%` is not enough on its own — `1.85+0\%` ends in one while
  // saying 1.85 — so the response has to BE a percent: one load-bearing term,
  // ending in the sign, on a plain numeric head (an integer or decimal, or
  // the fraction or mixed number a percent is sometimes written with). That
  // also refuses `1.85\cdot100\%`, the same decimal wearing a conversion.
  percent: (latex) => {
    const terms = loadBearingTerms(bareLatex(latex));
    if (terms.length !== 1) return false;
    const head = terms[0].trim().match(/^([\s\S]*?)\\%$/);
    if (!head) return false;
    const value = head[1].trim();
    return asDecimal(value) !== null || asFraction(value) !== null
      || asMixedNumber(value) !== null;
  },
  // "Write $\sqrt[3]{p}$ with a rational exponent": the value is unchanged by
  // design, so the only thing to grade is the writing — and it is graded as a
  // WHOLE, because "some term carries a `^`" is answerable by any decoration
  // that costs nothing (`2^1`, `2x^0`, `2\cdot1^{1/2}`, `\frac{2}{1^{1/2}}`
  // and `2(1+\frac{0}{7}x^{1/2})` all graded correct against a key of 2).
  //
  //   response := exact-scalar-coefficient? base^rational
  //
  // One term, one carrying factor, an exponent that is a non-integer BY VALUE
  // (so `^{2/2}` is the integer 1 it evaluates to, not the fraction it is
  // spelled as), and a base that is a variable or a group holding one. The
  // variable requirement is what refuses `2\cdot1^{1/2}`: a numeral base under
  // a fractional exponent is arithmetic, not the conversion asked for. All 9
  // corpus fields convert a radical over a variable, and verify-section grades
  // every authored answer under its own answerForm — so a future numeric-base
  // field fails at authoring time rather than silently.
  //
  // A `\sqrt` anywhere still disqualifies, decorative or not: dropping ink may
  // only ever take evidence away, never a prohibition.
  'rational-exponent': (latex) => {
    const bare = bareLatex(latex);
    if (/\\sqrt/.test(bare)) return false;
    const factor = singleCarryingFactor(bare);
    if (!factor || factor.exponent === null) return false;
    const value = exponentValue(factor.exponent);
    if (value === null || Number.isInteger(value)) return false;
    // `x^{\frac{2}{4}}` is `x^{\frac12}` with the exponent left unreduced
    // (Elementary Algebra 9.8, September 27, 2026).
    if (!exponentInLowestTerms(factor.exponent)) return false;
    // A decimal exponent (`x^{2.5}`) is not the fraction the token names, and
    // a powered group that writes a power of its own is the Power Property
    // left unapplied — the retyped prompt `(32x^{\frac13})^{\frac35}` for
    // `8x^{1/5}`; nor may the exponent be arithmetic (writesUnreducedExponent)
    // (Intermediate Algebra 8.3, October 3, 2026). A group holding a sum
    // (`(x^2+1)^{\frac12}`) has nothing to merge and still passes.
    if (/\./.test(factor.exponent) || writesUnreducedExponent(bare)) return false;
    if (factor.atom.kind === 'symbol') return true;
    if (factor.atom.kind === 'group' && /\^/.test(factor.atom.text)
      && splitTopLevelTerms(factor.atom.text).filter((term) => term.trim()).length === 1) return false;
    return factor.atom.kind === 'group' && hasVariableLetter(factor.atom.text);
  },
  // The mirror-image conversion ("Write $t^{1/2}$ as a radical expression"),
  // read the same closed way:
  //
  //   response := exact-scalar-coefficient? \sqrt[n]{radicand}
  //
  // One term, one carrying factor, that factor a radical with no exponent of
  // its own, an integer index ≥ 2 when one is written, and a radicand holding
  // a variable — the conversion is always FROM a rational-exponent expression
  // over a variable, so a numeral radicand is decoration (`t^{1/2}\sqrt1`,
  // `t^{1/2}\cdot\frac{\sqrt2}{\sqrt2}`, `t^{1/2}+\sqrt4-2`) rather than the
  // answer.
  //
  // The token now says "the response IS a radical expression", not "a radical
  // appears somewhere in it". Exact radical VALUES — `1+\sqrt2`, `\sqrt{130}`
  // — are a different concept and belong to `simplified-radical` and
  // `exact-radical`; no corpus field keys them here.
  radical: (latex) => {
    const factor = singleCarryingFactor(bareLatex(latex));
    if (!factor || factor.exponent !== null || factor.atom.kind !== 'sqrt') return false;
    const { index, radicand } = factor.atom;
    if (index !== null && !(isIntegerLiteral(index) && Number(index) >= 2)) return false;
    // The radicand's numeric work is finished: `\sqrt{\frac{3V}{12\pi}}` and
    // `\sqrt{\frac{V}{\frac13\pi\cdot12}}` passed against the source's
    // `\sqrt{\frac{V}{4\pi}}` (Precalculus 3.8, October 4, 2026) — a key that
    // `simplified-radical` refuses for the square 4 the source leaves in its
    // denominator, so the token that keys it reads the radicand itself.
    return hasVariableLetter(radicand) && !radicandWritingDefect(radicand);
  },
  // "Solve $7^x=43$. Enter the exact answer": the exercise prints the decimal
  // approximation in its own feedback, and that approximation is value-equal
  // within the grader's tolerance, so the shape IS the exercise.
  //
  // A NEGATIVE ask ("not an approximation") can only be graded as an
  // ACCEPT-LIST of exact constructions. The single generic `exact` token this
  // replaces was the opposite — "does any term carry a command name or a
  // fractional-looking exponent?" — which a retyped decimal answers by holding
  // `\sqrt1`, `+\log 1`, `+\sqrt0`, `+\sqrt4-2`, `\cdot x^0`,
  // `\cdot\frac{\log 7}{\log 7}` or `^{2/2}`. No blocklist closes that: every
  // patch has a next spelling. So the ask is split into the two constructions
  // the corpus actually keys, each read as a closed grammar.
  //
  //   response := log-term ('+' | '-' integer)?
  //   log-term := integer? ( logcall | \frac{logcall}{logcall|integer} )
  //   logcall  := (\log|\ln) integer-or-variable
  //
  // …and no decimal point anywhere in the response. That last rule is what
  // refuses the whole `2.0794415416798357…` family in one stroke, whatever is
  // stapled to it: the decimal is still written, so the response still says
  // it. It also retires the calculator-`e` special case the old token needed
  // — `2.0794415416798357e0` carries a decimal point, and a decimal-free
  // `2e0` is not a logarithm construction at all.
  'exact-log': (latex) => {
    const bare = bareLatex(latex);
    if (WRITES_A_DECIMAL.test(bare)) return false;
    const shape = formShape(bare);
    if (!shape || shape.terms.length > 2) return false;
    // `\ln 9+2` — a plain integer is the only company a logarithm may keep,
    // on either side: term order is no part of exactness, and `2+\ln 9` (the
    // order a learner who moves the 2 last writes it in) graded `form`
    // against the key `\ln 9+2` (Intermediate Algebra 10.5, October 3, 2026).
    const leadingInteger = shape.terms.length === 2 && shape.terms[0].factors.length === 1
      && isIntegerFactor(shape.terms[0].factors[0]);
    if (shape.terms.length === 2) {
      const company = shape.terms[leadingInteger ? 0 : 1].factors;
      if (company.length !== 1 || !isIntegerFactor(company[0])) return false;
      // …never a written zero: `\ln\frac{1}{\sqrt2}+0` is the term alone.
      if (Number(company[0].atom.text) === 0) return false;
    }
    const factors = shape.terms[leadingInteger ? 1 : 0].factors;
    if (factors.length > 2) return false;
    if (factors.length === 2 && !isExactScalarFactor(factors[0])) return false;
    const carrying = factors.at(-1);
    if (isLogarithmOfAnAtom(carrying)) return true;
    if (carrying.exponent !== null || carrying.atom.kind !== 'frac') return false;
    // The minus may be written on the numerator's logarithm,
    // `\frac{-\ln 2}{2}` for $-\tfrac12\ln 2$ — once: not with a sign on
    // the term as well (Precalculus 4.6, October 4, 2026). A minus in the
    // denominator stays unreduced sign work.
    const signedTerm = splitTopLevelTerms(bare)[leadingInteger ? 1 : 0].trim().startsWith('-');
    const signedNumerator = /^\s*-/.test(carrying.atom.numerator);
    if (signedNumerator && signedTerm) return false;
    const numerator = loneFactor(carrying.atom.numerator.replace(/^\s*-/, ''));
    const denominator = loneFactor(carrying.atom.denominator);
    if (!isLogarithmOfAnAtom(numerator) || !denominator) return false;
    return isLogarithmOfAnAtom(denominator) || isIntegerFactor(denominator);
  },
  // The other half of the same ask, where the exact answer is a radical
  // ("Use the Distance Formula … Enter the exact distance in simplest radical
  // form", keyed $\sqrt{130}$):
  //
  //   response := exact-scalar-coefficient? \sqrt[n]{radicand}
  //
  // with no decimal point anywhere, AND simplified — the radical rules are
  // reused rather than restated, so "exact" and "simplified" can never drift
  // apart for the same writing.
  //
  // `simplified-radical` ALONE cannot serve this ask, which is why the token
  // exists: that predicate passes any response with no radical to inspect, so
  // the retyped calculator readout `\frac{1140175425099138}{100000000000000}`
  // — the same approximation wearing a fraction bar — sails straight through
  // it. Requiring the radical is what refuses that, and `130^{\frac12}` with
  // it: exact, but not the simplest radical form the exercise asks for.
  'exact-radical': (latex) => {
    const bare = bareLatex(latex);
    if (WRITES_A_DECIMAL.test(bare)) return false;
    const factor = singleCarryingFactor(bare);
    if (!factor || factor.exponent !== null || factor.atom.kind !== 'sqrt') return false;
    const { index } = factor.atom;
    if (index !== null && !(isIntegerLiteral(index) && Number(index) >= 2)) return false;
    return FORM_PREDICATES['simplified-radical'](latex);
  },
  // "…in exact form" where the response has no single shape to require.
  //
  // `exact-log` and `exact-radical` both answer that ask by demanding a
  // closed-world shape — one logarithm, one radical — which is right when the
  // response IS one value. It is not right for a response that is a
  // CONTAINER: "Solve … Enter both solutions in exact form" is keyed
  // `(-\sqrt3,0),(\sqrt3,0)`, and no shape token can describe an ordered pair
  // whose second member is `0`. Declaring `exact-radical` there would report
  // 'form' on the exact answer the exercise prints.
  //
  // So this is an ABSENCE test, the shape `radians` and `evaluated-logarithm`
  // already take: what "exact" rules out is the decimal approximation, and
  // nothing else. It refuses the 16-digit readout that the value check accepts
  // (`(-1.732050807568877,0),(1.732050807568877,0)` grades equal to the
  // radical), which is the whole hazard. Being one-way, it needs no grammar
  // and fails open on writing it cannot read; compose it with a shape token
  // when the response does have a shape worth naming.
  exact: (latex) => !WRITES_A_DECIMAL.test(bareLatex(latex)),
  // "Write the sum using summation notation": the expanded sum printed in
  // the question is value-equal to the sigma form, so the notation IS the
  // exercise.
  //
  //   response := exact-scalar-coefficient? \sum_{lower}^{upper} body
  //
  // One term, one carrying factor, both bounds written and a non-empty body,
  // so a sigma cannot be stapled onto the expanded sum it is meant to replace.
  summation: (latex) => {
    const factor = singleCarryingFactor(bareLatex(latex));
    if (!factor || factor.exponent !== null || factor.atom.kind !== 'sum') return false;
    const { lower, upper, body } = factor.atom;
    return Boolean(lower?.trim()) && Boolean(upper?.trim()) && Boolean(body.trim());
  },
  // "Condense … to one logarithm": the printed multi-log sum is value-equal
  // to the condensed form, so the response must be exactly one logarithm in
  // one term — and the term must BE the logarithm. A coefficient outside
  // (`2\log_2\sqrt{5x/y}`) is the Power Property left unapplied: it is
  // value-equal to the condensed key, so only the writing can refuse it.
  // The single term must start at \log/\ln (an optional sign allowed), and
  // no explicit multiplication may follow.
  'single-logarithm': (latex) => {
    const bare = bareLatex(latex).replace(/\\left\s*|\\right\s*/g, '');
    if ((bare.match(/\\log|\\ln/g) || []).length !== 1) return false;
    const terms = splitTopLevelTerms(bare);
    if (terms.length !== 1) return false;
    // Only an explicit product OUTSIDE every group: `\log_2(x^3\cdot(x-1)^2)`
    // writes its `\cdot` inside the condensed argument, the source's own
    // spelling, and graded `form` (Intermediate Algebra 10.4, October 3,
    // 2026); `2\cdot\log_2 x` still multiplies the logarithm.
    if (/\\cdot|\\times/.test(withoutGroups(terms[0]))) return false;
    if (!/^\s*-?\s*\\(?:log|ln)(?![a-zA-Z])/.test(terms[0])) return false;
    // …and the argument's numeral work is finished: `\ln\frac{6x^9}{3x^2}`
    // for `\ln(2x^7)`, `\log_b\frac{28}{7}` for `\log_b 4`, `\log_3(4^2)`
    // and `\log_3(4\cdot4)` for `\log_3 16` condensed the logarithms but
    // left the quotient, power or product unworked (Precalculus 4.5, October
    // 4, 2026). A numeral power or product, exponent arithmetic, and a
    // fraction whose monomial halves share a factor are refused; a fraction
    // over a polynomial keeps only its integer content to cancel.
    const call = terms[0].replace(/^\s*-?\s*/, '').match(/^\\(?:log|ln)(?![a-zA-Z])\s*/);
    let at = call[0].length;
    const body = terms[0].replace(/^\s*-?\s*/, '');
    if (body[at] === '_') at = readTexArgument(body, at + 1)?.[1] ?? body.length;
    const argument = readNotationArgument(body, at);
    const written = argument ? `${argument[0]}${body.slice(argument[1])}` : body.slice(at);
    return !writesNumeralPower(written) && !writesNumeralProduct(written)
      && !writesExponentArithmetic(written) && !writesUnreducedExponent(written)
      && termFractionsReduced(written) && numeralFractionsReduced(written);
  },
  'mixed-number': (latex) => {
    const mixed = asMixedNumber(latex);
    return mixed !== null && mixed.numerator < mixed.denominator;
  },
  'improper-fraction': (latex) => {
    const fraction = asFraction(latex);
    return fraction !== null && fraction.numerator >= fraction.denominator;
  },
  // "Write 6.07 as a fraction or mixed number" — the source offers the choice,
  // so the only thing to rule out is the decimal the question already prints.
  'fraction-or-mixed-number': (latex) => asFraction(latex) !== null || asMixedNumber(latex) !== null,
  // Lowest terms is also the sign reduced: at most one minus, never in the
  // denominator — `\frac{-23}{-4}` and `\frac{23}{-4}` are unfinished
  // (Intermediate Algebra 2.5, September 27, 2026), `\frac{-23}{4}` and
  // `-\frac{23}{4}` are not. Nor is a fraction over 1: `\frac{2}{1}` is the
  // integer 2 with the division left written, and it passed as a member of a
  // list keyed `\frac43, 2` (Intermediate Algebra 9.4, October 3, 2026) —
  // the refusal `simplified-radical` already makes.
  'lowest-terms': (latex) => {
    const fraction = asFraction(latex) ?? asMixedNumber(latex);
    if (!fraction) return asDecimal(latex) !== null || asProductOfPowers(latex) !== null;
    if (fraction.negativeDenominator || fraction.signs > 1 || fraction.denominator === 1) return false;
    return gcd(fraction.numerator, fraction.denominator) === 1;
  },
  'scientific-notation': (latex) => {
    const scientific = asScientific(latex);
    return scientific !== null
      && Math.abs(scientific.coefficient) >= 1 && Math.abs(scientific.coefficient) < 10;
  },
  'prime-product': (latex) => {
    const bases = asProductOfPowers(latex);
    return bases !== null && bases.length > 0 && bases.every(isPrime);
  },
  // "Simplify: $(3^8)^2$. Write the answer as a power of 3" — the printed
  // nested power is the same value as `3^{16}`, so only the shape separates
  // them. `lowest-terms` happens to reject these too (its fallback accepts a
  // product of powers), but it would tell the learner to "write it in lowest
  // terms", which names a step this exercise never asks for. A power gets its
  // own token so the feedback matches the ask.
  // A quotient of powers simplifies to one power, which the source writes as a
  // reciprocal when the exponent goes negative ("$12^{15}/12^{30}$" →
  // $\tfrac{1}{12^{15}}$), so that shape counts as a single power too. It is
  // not a `fraction`: asFraction takes integer arguments only, and no other
  // token accepts it at all.
  'single-power': (latex) => {
    // One base — a numeral or a variable ("$(b^7)^5$" answers with `b^{35}`,
    // and the engine folds the nested power away) — carrying at most one
    // integer exponent. The exponent may be negative on either kind of base:
    // "$12^{15}/12^{30}$" legitimately answers `12^{-15}`, and a predicate
    // that took `x^{-3}` but refused `2^{-3}` would be an asymmetry no
    // exercise chose.
    const isOnePower = (text) => /^(?:\d+|[A-Za-z])\s*(?:\^\s*\{?\s*-?\d+\s*\}?)?$/.test(bareLatex(text));
    if (isOnePower(latex)) return true;
    const reciprocal = bareLatex(latex)
      .match(/^\\[tdc]?frac\s*\{\s*1\s*\}\s*\{([\s\S]+)\}$/);
    // The reciprocal of a NEGATIVE power is a quotient still to simplify:
    // `\frac{1}{x^{-9}}` is the value of `x^9`, the step undone.
    return reciprocal !== null && isOnePower(reciprocal[1])
      && !/\^\s*\{?\s*-/.test(reciprocal[1]);
  },
  // "Simplify: $\sqrt{32}-\sqrt{18}$" answers with `\sqrt{2}`. This one is read
  // entirely off the LaTeX and never parsed: the engine evaluates radical
  // arithmetic, so prompt and answer arrive as the *same* expression, and
  // parsing radicals is also where the Compute Engine is slow enough to stall a
  // corpus-wide check.
  //
  // A radical response is simplified when four things hold — the steps the
  // source teaches:
  //   1. no radicand keeps a perfect-square (or perfect-nth-power) factor,
  //      so `\sqrt{32}` and `\sqrt{64x^2}` are not simplified;
  //   2. no two top-level terms share a radicand, so `8\sqrt2-9\sqrt2` is not
  //      combined yet;
  //   3. no radical is left in a denominator — the rationalizing step; and
  //   4. no numeric work is left written, at any level: a fraction's numeric
  //      content is reduced (`\frac{6\sqrt2}{4}`, `\frac{4+2\sqrt5}{2}`), no
  //      fraction stands over 1, and no term multiplies two same-index
  //      radicals (`\frac{\sqrt3\sqrt5}{5}`) or two numerals (`2\sqrt2\cdot3`)
  //      — radicalWritingDefect(), added by the Elementary Algebra 8–9
  //      re-review (September 27, 2026).
  'simplified-radical': (latex) => {
    // TeX's `\sqrt` takes one token, so a hand-typed `\sqrt2` carries no
    // braces — and every pattern below reads a braced radicand. Brace the
    // single-token form first, or those radicals skip every check.
    const bare = bareLatex(latex)
      .replace(/(\\sqrt)(\s*\[\s*\d+\s*\])?\s*([0-9A-Za-z])/g, '$1$2{$3}');
    // Radical NOTATION is the form: a fractional or decimal exponent
    // (`(-11)^{\frac12}`, `130^{0.5}`) spells the same value in the notation
    // the rational-exponent exercises own, and a decimal literal anywhere
    // (`3.3166i`) is an approximation — neither is a simplified radical.
    if (NON_INTEGER_EXPONENT.test(bare)) return false;
    if (/\d\.\d/.test(bare)) return false;
    // A compound fraction is a division not yet done: `\frac{2\sqrt3}{\frac12}`
    // for `4\sqrt3` (writesCompoundFraction).
    if (writesCompoundFraction(bare)) return false;
    // A written zero term is decoration, at the top level as inside a
    // radicand: `\sqrt[3]{\frac{3V}{4\pi}}+0` passed (Precalculus 3.8,
    // October 4, 2026, round 2). A lone `0` is a value, not decoration, and
    // so is the zero real part of a+bi written out — the source's own
    // standard form `0+2\sqrt{6}i` (Precalculus 3.1): a leading plain `0`
    // and one term carrying i.
    const topTerms = splitTopLevelTerms(bare).filter((term) => term.trim());
    const zeroRealPart = topTerms.length === 2 && /^\s*0\s*$/.test(topTerms[0])
      && IMAGINARY_LETTER_ONCE.test(topTerms[1]) && !isZeroTerm(topTerms[1].trim());
    if (topTerms.length > 1 && !zeroRealPart
      && topTerms.some((term) => isZeroTerm(term.trim().replace(/^[+-]\s*/, '')))) return false;
    // Read each radicand as a balanced group: `\sqrt[4]{u^{12}}` and
    // `\sqrt{\tfrac{75x^5}{3x}}` both carry braces inside the radicand, which a
    // flat `[^{}]*` pattern silently fails to match — and a radical that never
    // matches is a radical never checked.
    const radicands = [];
    for (const opener of bare.matchAll(/\\sqrt\s*(?:\[\s*(\d+)\s*\])?\s*\{/g)) {
      const group = readBalancedGroup(bare, opener.index + opener[0].length - 1);
      if (group) radicands.push([opener[1], group[0]]);
    }
    const radicandIsNumeric = (value) => !/[a-zA-Z]/.test(value.replace(/\\[a-zA-Z]+/g, ' '));
    // An EXPLICIT same-index product of radicals is never fully simplified —
    // the Product Property always combines it — so the copied prompt of a
    // "multiply radicals" exercise (`(\sqrt[3]{9y^2})(\sqrt[3]{6y})`, or the
    // same with \cdot) must not pass the form its own answer declares.
    // Scoped to explicit products (\cdot, \times, or parenthesized radical
    // factors); a bare juxtaposition anywhere, top level or inside a
    // fraction, is radicalWritingDefect()'s.
    for (const term of splitTopLevelTerms(bare)) {
      const flat = term.replace(/\\left\s*/g, '').replace(/\\right\s*/g, '');
      const indices = [...flat.matchAll(/\\sqrt\s*(?:\[\s*(\d+)\s*\])?\s*\{/g)].map((m) => m[1] ?? '2');
      const hasSameIndexPair = indices.length > new Set(indices).size;
      // Explicit same-index products always combine under the Product
      // Property: `(\sqrt[3]{9y^2})(\sqrt[3]{6y})` and the \cdot form must
      // not pass the form their own multiplied-out answers declare.
      if (hasSameIndexPair && (/\\cdot|\\times|\)\s*\(/.test(flat))) return false;
      // The conjugate-rationalization keys are the deliberate exception:
      // this corpus authors them factored — `\frac{\sqrt5(\sqrt x-\sqrt2)}{x-2}`,
      // even `\frac{(\sqrt p+\sqrt2)^2}{p-2}` — so the two distribute-me
      // shapes below are rejected only OUTSIDE a fraction term.
      if (/^\\[tdc]?frac/.test(flat.trim())) continue;
      // A radical multiplying a parenthesized group with a same-index
      // radical distributes: `\sqrt6(1+3\sqrt6)`.
      if (hasSameIndexPair && /[()]/.test(flat)) return false;
      // A parenthesized group containing a radical, raised to a power, is an
      // unexpanded product: `(6-\sqrt5)^2` must not pass the form its own
      // expanded answer (`41-12\sqrt5`) declares.
      for (const powered of flat.matchAll(/\(([^()]*)\)\s*\^/g)) {
        if (/\\sqrt/.test(powered[1])) return false;
      }
    }
    for (const [indexArg, radicand] of radicands) {
      // Numeric work left inside the radicand — `\sqrt{\frac{2x-10}{6}}`,
      // `\sqrt[3]{\frac{V}{\frac43\pi}}` (Precalculus 3.8, October 4, 2026).
      if (radicandWritingDefect(radicand)) return false;
      // Unevaluated ARITHMETIC under the radical is never simplified when the
      // radicand is all numerals: `\sqrt{64+225}` is a sum the learner was
      // asked to evaluate, and `\sqrt{\tfrac{25}{16}}` keeps the fraction the
      // quotient property removes. Scoped to numeral-only radicands, because
      // a variable sum (`\sqrt{4+x}`) is irreducible and a variable quotient
      // is the prompt's shape, not necessarily the answer's defect.
      // A sum holding a radical is no number to evaluate: the nested radical
      // `\frac{\sqrt{2-\sqrt2}}{2}` (the half-angle value of sin π/8) graded
      // `form` against itself (Precalculus chapters 7–8 re-review, October
      // 5, 2026). It is read as a sum below: like terms combined.
      if (radicandIsNumeric(radicand)
        && (/\\[tdc]?frac|\/|\\cdot|\\times/.test(radicand)
          || (splitTopLevelTerms(radicand).length > 1 && !/\\sqrt/.test(radicand)))) {
        return false;
      }
      // A NEGATIVE numeric radicand is never a simplified answer: in the
      // complex-number sections the imaginary unit is factored out first, so
      // `\sqrt{-11}` must not pass where the key is `i\sqrt{11}`.
      if (radicandIsNumeric(radicand) && /^\s*-/.test(radicand)) return false;
      // A SUM under the radical (`\sqrt{4+x}`, `\sqrt{x^2+y^2}`) is not a
      // product: the factor tests below would read its leading term ("4 holds
      // a square") and reject an irreducible radical forever. A form check
      // must never reject a correct answer, so a multi-term radicand is left
      // to the like-radicals and rationalizing tests alone — save its like
      // terms, which are arithmetic left undone exactly as the numeral sum
      // above is: `\sqrt{x^2+1+2}+2` passed against `\sqrt{x^2+3}+2`
      // (Precalculus chapters 1–2 re-review, October 4, 2026).
      if (splitTopLevelTerms(radicand).length > 1) {
        if (!FORM_PREDICATES['no-like-terms'](radicand)) return false;
        // …and a perfect power common to every term still comes out:
        // `\sqrt{4x+8}` for `2\sqrt{x+2}`, `\frac{\sqrt{8-4\sqrt2}}{4}` for
        // `\frac{\sqrt{2-\sqrt2}}{2}` (Precalculus chapters 7–8 re-review,
        // October 5, 2026). Read off each term's leading numeral (1 when it
        // has none).
        const common = splitTopLevelTerms(radicand).filter((term) => term.trim())
          .map((term) => Number(term.trim().replace(/^[+-]\s*/, '').match(/^\d+(?![.\d])/)?.[0] ?? 1))
          .reduce((a, b) => gcd(a, b));
        const index = Number(indexArg ?? 2);
        for (let factor = 2; factor ** index <= common; factor += 1) {
          if (common % factor ** index === 0) return false;
        }
        continue;
      }
      // `\sqrt{1}`, `\sqrt{0}` and `\sqrt{-1}` are written-out numbers (1, 0,
      // i); the factor loop below starts at 2 and cannot see them.
      if (/^\s*-?\s*[01]\s*$/.test(radicand)) return false;
      const root = Number(indexArg ?? 2);
      // The sign is carried by the root (or by `i`), not by the factor test:
      // `\sqrt[3]{-108}` still holds the perfect cube 27, and `\sqrt{-8}`
      // still holds the perfect square 4.
      // A fraction radicand over a variable (`\sqrt[6]{\tfrac{2u}{v^3}}`, a
      // 9.7 key) is legal, but each half is read like a whole radicand: a
      // perfect power left in either (`\sqrt[6]{\frac{128u}{v^3}}`, 128 =
      // 2^6·2) still comes out (Elementary Algebra 9.7, September 27, 2026).
      const halves = fracHalves(radicand.trim());
      for (const piece of halves.length === 2 ? halves : [radicand]) {
        // A half that is a sum is irreducible for the same reason a sum
        // radicand is: `\sqrt{\frac{x-5}{3}}` and `\sqrt{\frac{4+x}{3}}` are
        // not holding the square 4 (Precalculus 3.8, October 4, 2026).
        if (splitTopLevelTerms(piece).filter((term) => term.trim()).length > 1) continue;
        const numeral = piece.match(/^\s*-?\s*(\d+)/);
        if (numeral) {
          const value = Number(numeral[1]);
          for (let factor = 2; factor ** root <= value; factor += 1) {
            if (value % factor ** root === 0) return false;
          }
        }
        // A variable power at or above the root index still comes out: \sqrt{x^2}.
        for (const [, exponent] of piece.matchAll(/\^\s*\{?\s*(\d+)\s*\}?/g)) {
          if (Number(exponent) >= root) return false;
        }
      }
    }
    // A radical below a fraction bar has not been rationalized. The denominator
    // is read as a balanced group, because `\sqrt{3}` brings its own braces.
    for (const opener of bare.matchAll(/\\[tdc]?frac\s*\{/g)) {
      const numerator = readBalancedGroup(bare, opener.index + opener[0].length - 1);
      if (!numerator) continue;
      const afterNumerator = bare.slice(numerator[1]).match(/^\s*\{/);
      if (!afterNumerator) continue;
      const denominator = readBalancedGroup(bare, numerator[1] + afterNumerator[0].length - 1);
      if (denominator && /\\sqrt/.test(denominator[0])) return false;
    }
    // A PRODUCT of same-index radicals in one term is the product property
    // left unapplied: `\sqrt{3}\cdot\sqrt{6}` is worth `3\sqrt{2}`, and bare
    // juxtaposition spells the same product — `4\sqrt[4]{12y^3}\sqrt[4]{8y^3}`
    // is the multiplication exercise's own prompt, not its answer. Variable
    // radicands count toward the pair too: the Product Property combines them
    // just as readily. The same product inside a rationalized-fraction
    // numerator (`\frac{\sqrt{10}\sqrt{y}+\sqrt{30}}{y-3}`) sits below the top
    // level this scan reads; radicalWritingDefect() refuses it there.
    for (const piece of splitTopLevelTerms(bare)) {
      const countByIndex = new Map();
      for (const opener of piece.matchAll(/\\sqrt\s*(?:\[\s*(\d+)\s*\])?\s*\{/g)) {
        // Only radicals written at the top level of the term count: a radical
        // inside a group (`\frac{\sqrt{10}\sqrt{y}+\sqrt{30}}{y-3}` holds its
        // numerator's radicals in a brace group) belongs to a subterm this
        // top-level split cannot see, so it fails open — exactly like the
        // like-radicals scan below, which also reads only the top level.
        let depth = 0;
        for (let i = 0; i < opener.index; i += 1) {
          if (piece[i] === '{' || piece[i] === '(') depth += 1;
          else if (piece[i] === '}' || piece[i] === ')') depth -= 1;
        }
        if (depth !== 0) continue;
        const index = opener[1] ?? '2';
        countByIndex.set(index, (countByIndex.get(index) ?? 0) + 1);
        if (countByIndex.get(index) >= 2) return false;
      }
    }
    if (radicalWritingDefect(bare)) return false;
    // Like radicals must already be combined: split the top level on + and -
    // and require each (index, radicand, coefficient-shape) to appear once.
    // The coefficient's variable signature is part of the key because the
    // source combines like radicals only when their coefficients are like
    // TERMS: its own worked answer to `\sqrt[3]{24x^4}-\sqrt[3]{-81x^7}` is
    // `2x\sqrt[3]{3x} + 3x^2\sqrt[3]{3x}` — same index and radicand, kept
    // separate because `2x` and `3x^2` do not combine. A radicand-only key
    // rejected that final form forever, while `8\sqrt{2}-9\sqrt{2}` (both
    // coefficients constant) must still fail. The root index joins the key
    // so `\sqrt{2}+\sqrt[3]{2}` — different roots, nothing to combine — is
    // no longer read as a repeat.
    const seen = new Set();
    for (const piece of splitTopLevelTerms(bare)) {
      const opener = piece.match(/\\sqrt\s*(?:\[\s*(\d+)\s*\])?\s*\{/);
      if (!opener) continue;
      const group = readBalancedGroup(piece, opener.index + opener[0].length - 1);
      if (!group) continue;
      const radicand = group[0].replace(/\s+/g, '');
      // Everything around the radical is its coefficient; LaTeX commands are
      // dropped before scanning so `\cdot` never reads as variables c·d·o·t.
      const coefficient = (piece.slice(0, opener.index) + piece.slice(group[1]))
        .replace(/\\[a-zA-Z]+/g, ' ');
      const signature = [...coefficient.matchAll(/([a-zA-Z])\s*(?:\^\s*\{?\s*(-?\d+)\s*\}?)?/g)]
        // A zero power is a written-out 1, not part of the coefficient's
        // variable signature: `8\sqrt2-9\sqrt2\cdot x^0` is two LIKE radicals
        // with constant coefficients, and reading the `x^0` as a variable
        // made them look unlike enough to pass.
        .filter(([, , power]) => power !== '0')
        .map(([, name, power]) => `${name}^${power ?? '1'}`)
        .sort()
        .join('');
      const key = `${opener[1] ?? '2'}|${radicand}|${signature}`;
      if (seen.has(key)) return false;
      seen.add(key);
    }
    return true;
  },
  // "Simplify: $9-3(x+2)$" answers with `3-3x`. Both sides are top-level sums,
  // so `expanded` cannot separate them — what is left undone in the prompt is
  // the distribution, i.e. a term that still holds a sum inside a product.
  //
  // Stricter than `expanded`, which deliberately still allows a remainder term
  // like `x+5+\tfrac{3}{x-2}` (whose denominator is a sum). Use `distributed`
  // only where every term must be a bare monomial.
  distributed: (latex) => {
    // "Multiplied out" means no grouping left to multiply — and the engine
    // flattens `(y+12)+28` to `y+40`, its own answer, so the parenthesis has
    // to be read off the LaTeX rather than the parse.
    // A function's argument is no grouping (`\cos(80^\circ)`, `\sin(2x)`):
    // every trigonometric key graded `form` against itself (Precalculus
    // chapters 7–8 re-review, October 5, 2026).
    if (/[()]/.test(bareLatex(latex).replace(FUNCTION_ARGUMENT_GROUP, ''))) return false;
    if (!termFractionsReduced(latex)) return false;
    let expr;
    try {
      expr = parseLatex(preprocess(latex));
    } catch {
      return false;
    }
    if (!expr.isValid) return false;
    const holdsASum = (e) => {
      if (e.operator === 'Add') return true;
      if (TRIG_OPERATORS.has(e.operator)) return false;
      if (!e.ops || !e.ops.length) return false;
      return e.ops.some(holdsASum);
    };
    const terms = expr.operator === 'Add' ? expr.ops : [expr];
    return terms.every((term) => !holdsASum(term));
  },
  // "Subtract: $\tfrac{n^2}{n-4} - \tfrac{n+12}{n-4}$" answers with the plain
  // polynomial `n+3`. `expanded` cannot separate those — a difference of
  // fractions is a top-level sum too — and `single-fraction` does not apply,
  // because the answer is not a fraction at all. What is left is the fraction
  // bar itself: the prompt has one, the answer does not.
  //
  // Deliberately narrower than `expanded`, which still permits a remainder
  // term ("$x+5+\tfrac{3}{x-2}$"). Use this only where the ask is to clear the
  // denominator entirely.
  polynomial: (latex) => {
    const bare = bareLatex(latex);
    if (/\\[tdc]?frac|\\div|\//.test(bare)) return false;
    try {
      return parseLatex(preprocess(latex)).isValid;
    } catch {
      return false;
    }
  },
  // "Simplify: $3x^2+7x+9+7x^2+9x+8$" prints a sum worth exactly its own
  // combined form, so again only the shape separates them — here, whether two
  // terms share a variable-and-power signature. The engine keeps `3x^2` and
  // `7x^2` as distinct terms of the sum, which is what makes this checkable.
  // It does fold bare constants — `16x+9+8` parses to `16x+17`, its own
  // answer — so two written constant terms are read off the LaTeX instead.
  //
  // A term's signature is its variable monomial AND its radical part: the
  // engine boxes `2\sqrt2` as a number literal, and reading every literal as
  // "constant" made the simplified `3+2\sqrt2` two like terms of itself
  // (Elementary Algebra 9.4, September 27, 2026). `3`, `2\sqrt2`, `5\sqrt3`
  // and `x\sqrt2` are pairwise unlike; the radicand is compared as written
  // (the engine keeps `\sqrt8` apart from `\sqrt2`), since reducing it is
  // `simplified-radical`'s rule, not this one's.
  'no-like-terms': (latex) => {
    // Two written constants, and their imaginary twins: `i^2` left written is
    // a −1 not yet carried into the real part (`20i-12i^2` for `12+20i`), and
    // two written rational multiples of i (`5i+3i`, which parses to `8i`) are
    // like terms (Intermediate Algebra 8.8, October 3, 2026).
    if (writesNumeralLikeTerms(bareLatex(latex))) return false;
    if (writesImaginaryPower(bareLatex(latex)) || writesImaginaryDenominator(bareLatex(latex))) return false;
    // …and a numeral exponent still to work out is a term not yet combined:
    // `e^{\frac{10}{2}}-1` and `e^{10-5}-1` passed against `e^{5}-1`, where
    // `single-term` already refused `e^{10-6}` alone (Precalculus 4.6,
    // October 4, 2026).
    if (writesExponentArithmetic(bareLatex(latex)) || writesUnreducedExponent(bareLatex(latex))) return false;
    // …and numeral work the engine folds — a numeral product, a zero term, a
    // coefficient of 1, `+(-4)`, a number not yet distributed over a constant
    // sum (writesUnfinishedTerms, Precalculus chapters 5–6 re-review,
    // October 4, 2026).
    if (writesUnfinishedTerms(bareLatex(latex))) return false;
    // …and a trigonometric function's argument is a sum of terms too, held to
    // the same rules: `4\sin(\frac{2\pi}{10}x-\frac{\pi}{5})+4` and
    // `4\tan(\frac{\pi}{\frac{\pi}{2}}x)` passed against
    // `4\sin(\frac{\pi}{5}x-\frac{\pi}{5})+4` and `4\tan(2x)` — no rule looked
    // inside the parentheses (same re-review). A factored phase,
    // `\frac{\pi}{5}(x-1)`, is one term and passes.
    //
    // The argument is read with its degree marks taken off: `3\cdot45^\circ`
    // and `\frac{240^\circ}{3}` hid their numeral work behind the mark (a
    // numeral product is refused unless a power follows it, and the mark is
    // written as one), and passed against `135^\circ` and `80^\circ`
    // (Precalculus chapters 7–8 re-review, October 5, 2026).
    if (trigArguments(bareLatex(latex)).some((argument) => !FORM_PREDICATES['no-like-terms'](argument.replace(DEGREE_MARK, '')))) return false;
    // …and every group holding a sum is a sum held to the same rules, at any
    // depth: `\tan(\frac{15x-14x}{10})`, `\frac{3\theta+\theta}{2}` and the
    // denominator of `\frac{-\sqrt3+1}{1-(-\sqrt3)}` passed, because only the
    // top-level sum was read for like terms and unfinished numeral work
    // (same re-review). A comma-separated group is a list, not a sum.
    if (writtenGroups(bareLatex(latex)).some((group) => splitTopLevelTerms(group).filter((term) => term.trim()).length > 1
      && !withoutGroups(group).includes(',') && !FORM_PREDICATES['no-like-terms'](group))) return false;
    // …and so are two written inside a group: `(3-2)+(-4-5)i` for `1-9i`,
    // the "add the real parts, add the imaginary parts" line, passed — each
    // group was one constant term of the sum, and the engine folds what is
    // inside it (Precalculus 3.1, October 4, 2026). Every `(…)`/`{…}` group
    // at any depth is read (`\frac{3-2}{1}`, `x^{2+1}` alike), except a
    // comma-separated one, which is a list, not a sum.
    if (writtenGroups(bareLatex(latex)).some((group) => splitTopLevelTerms(group).filter((term) => term.trim()).length > 1
      && !withoutGroups(group).includes(',') && writesNumeralLikeTerms(group))) return false;
    // …and so does a sum of like radical constants (`\sqrt2+\sqrt2` parses to
    // `2\sqrt2`, `2\sqrt3+5\sqrt3` to `7\sqrt3`), so a variable-free term's
    // radical part is read off the LaTeX too.
    const radicalConstants = new Set();
    for (const term of splitTopLevelTerms(bareLatex(latex))) {
      const body = term.trim().replace(/^[+-]\s*/, '');
      const signature = body && /\\sqrt/.test(body) ? numericTermSignature(body) : null;
      if (signature === null) continue;
      if (radicalConstants.has(signature)) return false;
      radicalConstants.add(signature);
    }
    if (!termFractionsReduced(latex)) return false;
    let expr;
    try {
      expr = parseLatex(preprocess(latex));
    } catch {
      return false;
    }
    if (!expr.isValid) return false;
    if (expr.operator !== 'Add') return true; // a single term has nothing to combine
    const signatures = new Set();
    for (const term of expr.ops) {
      const parts = [];
      const walk = (e) => {
        if (e.operator === 'Multiply') e.ops.forEach(walk);
        else if (e.operator === 'Negate') walk(e.ops[0]);
        else if (e.isNumberLiteral) parts.push(...radicalParts(e.json));
        else if (e.operator === 'Divide' && e.ops[1].isNumberLiteral && radicalParts(e.ops[1].json).length === 0) {
          // A numeral denominator is part of the coefficient:
          // `\frac{\sqrt2}{2}` and `\frac{3\sqrt2}{4}` are like terms.
          walk(e.ops[0]);
        } else {
          const base = e.operator === 'Power' ? e.ops[0] : e;
          const power = e.operator === 'Power' ? e.ops[1].toString() : '1';
          parts.push(`${base.toString()}^${power}`);
        }
      };
      walk(term);
      const signature = parts.sort().join('*') || 'constant';
      if (signatures.has(signature)) return false;
      signatures.add(signature);
    }
    // A remainder term still improper — `x^3-3x^2+2x+\frac{x+6}{x+3}` for
    // `x^3-3x^2+2x+1+\frac{3}{x+3}` — holds a polynomial part not yet carried
    // into the quotient's terms, so the unfinished long division is uncombined
    // too (Intermediate Algebra 5.4, October 3, 2026). Read only on a sum, and
    // only for a one-variable denominator of degree one or more.
    if (expr.ops.some(improperFractionTerm)) return false;
    return true;
  },
  // "Multiply: $(w+5)(w+7)$" prints a product worth exactly its own expansion,
  // so the shape is again the only separator: the answer is a sum of terms
  // where the prompt is a product, a power, or a quotient.
  //
  // Like `factored`, a shape check and not a completeness check —
  // `x(x+5)+2(x+5)` is a top-level sum and passes. Ruling out the printed
  // product is the job.
  // `Complex` counts alongside `Add`: the engine folds `12+20i` into a complex
  // literal, and $a+bi$ is exactly the expanded form the prompt asks for.
  //
  // The one parse-shape predicate a decorative zero term can help: appending
  // `+0\cdot(x+2)` makes the engine read the printed `\frac{x^2-4}{x-2}` as an
  // Add. A padded response is judged on the term that carries it — and only
  // when stripping actually removed something, so an honest response is
  // parsed exactly as it was written.
  //
  // A term still written as a product of factors is not expanded either,
  // whatever the factors are: the worked example's own "Distribute." row,
  // `5x\cdot x+5x\cdot4y`, and `(5x)(x)+20xy` graded correct against
  // `5x^2+20xy` (Elementary Algebra 6.3, September 27, 2026) — the numeral
  // refusal (`6\cdot x+6\cdot8`) only saw numerals — and so is a power of a
  // parenthesized group, `(6x)^2-25` (6.4). writesFactorProduct reads each
  // load-bearing term; a plain monomial (`-\frac{1}{2}x^3y`) passes, and so
  // does a sum still holding a binomial factor (`x(x+5)+2(x+5)`), which
  // `distributed` owns. Uncombined like terms stay legal (`no-like-terms`
  // owns them), and so does an unreduced coefficient (`\frac{2}{72}xy`),
  // which `single-term` and `no-like-terms` refuse.
  expanded: (latex) => {
    const bare = bareLatex(latex);
    // A plain numeral is already in standard form, as a lone `i` (a Complex
    // literal) always was: `2` graded `form` against itself, so a complex-zero
    // list mixing a real member with a+bi members (`2,3+2i,3-2i`) refused its
    // own key (Precalculus 3.6, October 4, 2026). Only the bare numeral —
    // `3\cdot5`, `(2)(3)` and `2^3` still fail below.
    if (PLAIN_NUMERAL.test(bare)) return true;
    if (writesNumeralProduct(bare) || writesExponentArithmetic(bare) || writesNumeralPower(bare)) return false;
    if (writesImaginaryPower(bare)) return false;
    const terms = loadBearingTerms(bare);
    if (terms.length > 1 && terms.some(writesFactorProduct)) return false;
    // A sign stacked on a parenthesized single term is the sign not yet
    // distributed: `1+(-9i)`, `-(9i)+1` and `1-(9i)` passed against `1-9i`
    // where `-8+(-24)i` was already refused (Precalculus 3.1, October 4,
    // 2026, round 2) — slope-intercept form's `2x-(-3)` rule, here for every
    // term. A group holding a sum (`-(x+1)`) is not this.
    if (writesSignedGroupTerm(bare)) return false;
    const written = terms.length === 1 && terms[0] !== bare ? terms[0] : latex;
    try {
      const expr = parseLatex(preprocess(written));
      return expr.isValid && (expr.operator === 'Add' || expr.operator === 'Complex');
    } catch {
      return false;
    }
  },
  // The monomial case of the same ask: "Multiply: $(5y^7)(-7y^4)$" has the
  // single term `-35y^{11}` as its answer, and both sides parse as a product,
  // so `expanded` cannot separate them — the count of coefficients and repeated
  // bases can.
  // A written-out multiplication is not yet a single term, and the engine
  // folds the numbers before the parse can see it — `\tfrac{3}{7}\cdot 21n`
  // canonicalizes to `9n`, its own answer. So the top-level `\cdot` is read off
  // the LaTeX, and the term structure off the parse.
  'single-term': (latex) => {
    // A written sum is not one term, however it folds: "$92+31s-92$"
    // canonicalizes to `31s`, its own answer, so the `+` has to be read off
    // the LaTeX. The leading sign is stripped first — `-35y^{11}` is one term.
    const bare = bareLatex(latex).replace(/^[-−]\s*/, '');
    // A plain numeral is one finished term, as it is under `expanded`: the
    // keys `0` and `[0,1]` graded `form` against themselves, refused for
    // having no base, and an interval key's endpoints are now read one by one
    // (ENDPOINT_FORM_TOKENS) (Precalculus chapters 5–6 re-review, October 4,
    // 2026). A sign on zero, `-0`, is ink to remove.
    if (PLAIN_NUMERAL.test(bare)) return !/^[-−]\s*0*\.?0*$/.test(bareLatex(latex));
    // A factor raised to the zero power is a written-out `1` the learner was
    // asked to remove ("Simplify: $7x^2y^0$" → `7x^2`); the engine folds it, so
    // it too has to be caught on the LaTeX.
    if (/\^\s*\{?\s*0\s*\}?/.test(bare)) return false;
    if (writesNumeralProduct(bare) || writesExponentArithmetic(bare) || writesNumeralPower(bare)) return false;
    if (writesUnreducedExponent(bare) || writesImaginaryPower(bare) || writesPerfectNumeralRoot(bare)) return false;
    // A coefficient fraction left unreduced is a division left undone:
    // `y=\frac{20}{4}x^2`, `\frac{20x^2}{4}` and `\frac{5}{1}x^2` passed
    // against `y=5x^2`, the variation constant not yet divided out
    // (Precalculus 3.9, October 4, 2026). The rules `no-like-terms` and
    // `factored` already hold a term to; a reduced `\frac{3}{4}x^2` passes.
    if (!numeralFractionsReduced(bare) || !termFractionsReduced(bare)) return false;
    // …and a compound fraction is a division not yet done:
    // `\frac{2\pi}{\frac13}` for `6\pi` (writesCompoundFraction).
    if (writesCompoundFraction(bare)) return false;
    let depth = 0;
    for (let i = 0; i < bare.length; i += 1) {
      if (bare[i] === '{' || bare[i] === '(') depth += 1;
      else if (bare[i] === '}' || bare[i] === ')') depth -= 1;
      else if (depth === 0 && (bare[i] === '+' || bare[i] === '-'
        || bare.startsWith('\\cdot', i) || bare.startsWith('\\times', i))) return false;
    }
    try {
      const expr = parseLatex(preprocess(latex));
      if (!expr.isValid) return false;
      const parts = monomialParts(expr);
      if (parts === null) return false;
      // A pure imaginary term is one term — the unit i is its base — when the
      // i is written once: the keys `i` and `-i` graded `form` against
      // themselves, because the engine boxes `i` as a number literal and a
      // lone number has no base (Intermediate Algebra 8.8, October 3, 2026).
      // `i^{35}` is refused above, `i\cdot i\cdot i` at the `\cdot`.
      const value = expr.isNumberLiteral ? expr : null;
      if (parts.bases.size === 0 && value !== null && value.re === 0 && (value.im ?? 0) !== 0
        && (bare.match(IMAGINARY_LETTER) ?? []).length === 1) return true;
      return parts.bases.size >= 1;
    } catch {
      return false;
    }
  },
  // "Divide: $\tfrac{c+3}{5-c} \div \tfrac{c^2-9}{c-5}$" answers with one
  // reduced fraction. This one reads the LaTeX rather than the parse, because
  // the engine flattens `a/b ÷ c/d` into a single Divide — structurally
  // identical to the answer — while the written `\div` is still right there.
  //
  // When both halves are monomials the shape alone is not enough either
  // ($\tfrac{16a^7b^6}{24ab^8}$ is one fraction too), so those additionally
  // have to be reduced: no common numeric factor and no shared variable.
  'single-fraction': (latex) => {
    const bare = bareLatex(latex).replace(/^[-−]\s*/, '');
    if (/\\div/.test(bare) || !/^\\[tdc]?frac/.test(bare)) return false;
    if (writesNumeralProduct(bare) || writesExponentArithmetic(bare)) return false;
    if (writesUnreducedExponent(bare) || writesPerfectNumeralRoot(bare)) return false;
    // A numeral power (`\frac{1}{2^3y^3}`) is arithmetic left undone, and a
    // negative exponent (`\frac{1}{8}y^{-3}`) is the reciprocal the fraction
    // exists to write — neither is the one simplified fraction the ask names.
    if (writesNumeralPower(bare) || /\^\s*\{?\s*-/.test(bare)) return false;
    // `(2x^4)^5` is the same undone arithmetic behind a group.
    if (writesNumeralGroupPower(bare)) return false;
    // Each half has its like terms combined: `\frac{3p+6p}{8}` is the
    // half-worked `\frac{9p}{8}` (the engine folds the numerator first).
    if (fracHalves(bare).some((half) => !FORM_PREDICATES['no-like-terms'](half))) return false;
    // Each term of each half writes a variable once: `\frac{1}{q^4q^5}` is
    // the Product Property left unapplied to `\frac{1}{q^9}` (Elementary
    // Algebra knowledge check 6–10, September 27, 2026) — the refusal
    // `simplified-radical` makes of `z^3z^3`.
    if (fracHalves(bare).some((half) => splitTopLevelTerms(half).some((term) => {
      const read = term.trim() ? readRadicalTerm(term) : null;
      return Boolean(read) && [...read.letters.values()].some((count) => count > 1);
    }))) return false;
    // Each half is finished: one product of factors (`2(x-5)`, fully
    // factored) or a sum of plain terms (`3x+16`) — never a sum still holding
    // a grouped product, `3(x+5)+1` for `3x+16` (Elementary Algebra 8.5,
    // September 27, 2026), which the engine distributes before any parse
    // could show it.
    if (fracHalves(bare).some((half) => {
      const terms = splitTopLevelTerms(half).filter((term) => term.trim());
      // A function's argument is no grouped product: `\frac{1-\cos(4x)}{8}`
      // graded `form` against itself where `\cos4x` passed (Precalculus
      // chapters 7–8 re-review, October 5, 2026).
      return terms.length > 1 && terms.some((term) => /[()]/.test(term.replace(FUNCTION_ARGUMENT_GROUP, '')));
    })) return false;
    let depth = 0;
    for (let i = 0; i < bare.length; i += 1) {
      if (bare[i] === '{') depth += 1;
      else if (bare[i] === '}') depth -= 1;
      // A top-level `+` or `-` means a SUM of fractions, not one fraction —
      // `\frac{y}{6}+\frac{7}{9}` is the prompt, `\frac{3y+14}{18}` the answer.
      // The leading sign was stripped above, so anything left here is an
      // operator between terms.
      else if (depth === 0 && (bare[i] === '+' || bare[i] === '-'
        || bare.startsWith('\\cdot', i) || bare.startsWith('\\times', i))) return false;
    }
    // The reduced-ness test reads the WRITTEN halves, not the parse: the
    // engine folds `\frac{40}{88}` to the number 5/11 and `\frac{40x}{88}` to
    // a rational-coefficient product, so by the time it returns there is no
    // unreduced quotient left to inspect.
    const numeral = asFraction(latex);
    if (numeral) return gcd(numeral.numerator, numeral.denominator) === 1;
    // The LEADING fraction's written halves, whether or not anything trails
    // it. Requiring the fraction to be the whole response was the hole:
    // `\frac{40x}{88}\sqrt1` fell through to the parse below, where the
    // engine had already folded the unreduced quotient into
    // `\tfrac{5}{11}x` — a Multiply, not a Divide — and the fallback's
    // "not a quotient, nothing to reduce" branch passed the prompt this
    // exercise exists to reject. A trailing factor cannot make an unreduced
    // fraction reduced, so the written halves are still the test.
    const fraction = leadingWrittenFraction(bare);
    if (fraction) {
      const [numerator, denominator] = [fraction.numerator, fraction.denominator].map((half) => {
        let expr;
        try {
          expr = parseLatex(preprocess(half));
        } catch {
          return null;
        }
        return expr.isValid ? monomialMagnitude(expr) : null;
      });
      return reducedMonomialQuotient(numerator, denominator);
    }
    // A shape this predicate cannot read off the LaTeX (unbraced arguments):
    // fall back to the parsed structure.
    let expr;
    try {
      expr = parseLatex(preprocess(latex));
    } catch {
      return false;
    }
    if (!expr.isValid) return false;
    const quotient = expr.operator === 'Negate' ? expr.ops[0] : expr;
    if (quotient.operator !== 'Divide') return true;
    return reducedMonomialQuotient(...quotient.ops.map(monomialMagnitude));
  },
  // "Simplify: $\frac{x^2-x-2}{x^2-3x+2}$" answers with $\frac{x+1}{x-1}$ —
  // prompt and answer are BOTH one fraction, and what separates them is the
  // cancelled polynomial factor, which only a polynomial gcd can see. The
  // §6 class this token closes.
  //
  // Deliberately stricter in shape than `single-fraction`: the response must
  // be EXACTLY one written fraction. A fraction inside a bigger expression
  // (`\tfrac{a}{b}^5`, a sum of fractions) and a fraction inside either half
  // (the complex-fraction prompts, `\cfrac{\frac{2}{x^2-1}}{\frac{3}{x+1}}`)
  // both fail, so the lint can be silenced by this token on those prompts
  // too. A response with no fraction at all passes — the token composes the
  // way `lowest-terms` does, and in this class a non-fraction of the right
  // value was already fully cancelled.
  //
  // Everything the polynomial reader cannot digest — decimals, radicals,
  // absolute values — FAILS OPEN to the value check: a form check must never
  // reject a correct answer it cannot read.
  // "Enter your answer with a positive exponent" on a numeral power: the key
  // `\frac{1}{12^{15}}` is `single-power`, which by design also passes
  // `12^{-15}`, and `single-fraction` refuses the numeral power in the key
  // itself (Intermediate Algebra 5.2, October 3, 2026). Read off the writing:
  // no exponent opens with a minus sign. Composes with a shape token.
  'positive-exponents': (latex) => !/\^\s*\{?\s*(?:-|−|\\left\s*\(\s*-)/.test(bareLatex(latex)),
  'reduced-fraction': (latex) => {
    const bare = bareLatex(latex).replace(/^[-−]\s*/, '');
    const halves = writtenFractionHalves(bare);
    // A plain `/` counts as a fraction bar here: `\tfrac{p/2}{q/5}` is a
    // complex fraction however its inner quotients are written.
    if (!halves) return !/\\[tdc]?frac|\\div|\//.test(bare);
    // …but a rational EXPONENT's bar is no fraction bar of the expression:
    // the reduced monomial key `\frac{5n}{m^{1/4}}` graded `form` against
    // itself (Intermediate Algebra 8.3, October 3, 2026). The exponent is
    // still read: `\frac{1}{z^{6/3}}` keeps an exponent to finish.
    if (halves.some((half) => /\\[tdc]?frac|\\div|\//.test(withoutExponents(half)))) return false;
    if (writesUnreducedExponent(bare)) return false;
    // The polynomial reader fails open on such an exponent, so two one-term
    // halves are read off the writing instead: no common integer factor and
    // no letter outside a radical on both sides (`\frac{10n}{2m^{1/4}}`,
    // `\frac{n}{n^{1/4}}`). A half holding a radical fails it open the same
    // way, so `\frac{6x^2}{2\sqrt{x-5}}` — the numeral 2 left in both halves
    // — passed against the key `\frac{3x^2}{\sqrt{x-5}}` where
    // `\frac{6x^2}{2x}` grades `form` (Precalculus chapters 1–2 re-review,
    // October 4, 2026); it is read off the writing too.
    if (halves.some((half) => (half !== withoutExponents(half) && /\\[tdc]?frac|\//.test(half))
      || /\\sqrt(?![a-zA-Z])/.test(half))) {
      const reads = halves.map((half) => {
        const terms = splitTopLevelTerms(half).filter((piece) => piece.trim());
        return terms.length === 1 ? readRadicalTerm(terms[0]) : null;
      });
      if (reads.every(Boolean)) {
        if ([...reads[0].letters.keys()].some((letter) => reads[1].letters.has(letter))) return false;
        if (reads.every((read) => read.content !== null) && gcd(reads[0].content, reads[1].content) !== 1) return false;
      }
    }
    // `\frac{(2x^4)^5}{(4x^3)^2}` folds to a reduced quotient in the parse;
    // the powered numeral group is read off the writing (writesNumeralGroupPower).
    if (writesNumeralGroupPower(bare)) return false;
    const numeral = asFraction(latex);
    if (numeral) return gcd(numeral.numerator, numeral.denominator) === 1;
    const parsed = halves.map((half) => {
      let expr;
      try {
        expr = parseLatex(preprocess(half));
      } catch {
        return null;
      }
      return expr.isValid ? expr : null;
    });
    if (parsed.some((expr) => expr === null)) return true;
    return reducedPolynomialQuotient(parsed[0], parsed[1]);
  },
  // "Factor: $x^2+6x+8$" prints a polynomial that *is* its own factorization by
  // value, so only the shape separates `(x+2)(x+4)` from the prompt retyped.
  //
  // Deliberately a shape check, not a completeness check: `2(2x^2+8x+8)` passes
  // for `4x^2+16x+16`. Demanding full factorization would reject sound content
  // — the GCF-only exercises whose prompts say "by taking out the greatest
  // common factor" legitimately answer `-7a(a^2-3a+2)` — and a rule that fires
  // on correct content is a bug in the rule. Ruling out the printed polynomial
  // is the whole job here.
  // It does read one thing inside the factors: a numeral fraction left
  // unreduced (`(p-\frac{2}{12})^2`) is unfinished writing, not a shape
  // choice (numeralFractionsReduced).
  factored: (latex) => {
    const product = asFactoredProduct(latex);
    return product !== null && product.compound >= 1 && product.count >= 2 && numeralFractionsReduced(latex)
      && factorSumsFinished(latex);
  },
  // "Factor completely: $2x^2+8x+8$" answers `2(x+2)^2`, and `factored`
  // passes the half-done `(2x+4)(x+2)` and `2(x^2+4x+4)` too. This token is
  // `factored` plus completeness, read against the key (see factorProfile):
  // every polynomial factor primitive over the integers, and at least as many
  // non-constant factors, with multiplicity, as the key has. A key the reader
  // cannot take as an integer-coefficient product (a radical, a fraction
  // coefficient, a list) falls back to the shape check alone — the
  // `reduced-fraction` spirit. A RESPONSE factor it cannot read fails
  // instead: against an integer-coefficient key every correct complete
  // factorization is readable, and failing open let a cancelling pair
  // (`\cdot x\cdot\frac1x`, `(x+1)(x+1)^{-1}`, `|x|\frac{1}{|x|}`) buy the
  // unfinished `(x^2+4)(x^2-4)` the factor count it lacked.
  // Use it where the ask is "Factor" / "Factor completely" and the key is
  // complete; a GCF-only ask takes `gcf-factored`, composed with `factored`
  // when its key is not complete (see the ruling above).
  'factored-completely': (latex, answer) => {
    if (!FORM_PREDICATES.factored(latex)) return false;
    const key = answer ? factorProfile(answer) : null;
    if (key === null || !key.integral) return true;
    const response = factorProfile(latex);
    return response !== null && response.primitive && response.count >= key.count;
  },
  // "Factor the greatest common factor from $8a^3b+2a^2b^2-6ab^3$" answers
  // `2ab(4a^2+ab-3b^2)`, which is not complete, so it keeps `factored` — and
  // `factored` passed a common factor taken out only in part
  // (`2(4a^3b+a^2b^2-3ab^3)`, `-7(a^3-3a^2+2a)`), and on "factor out a
  // negative GCF" the positive one (`4b(-b^2+4b-2)` for `-4b(b^2-4b+2)`;
  // Intermediate Algebra 6.1, October 3, 2026). The GCF is all taken out
  // exactly when every polynomial factor left is primitive — no integer and
  // no variable common to its terms — and then, by Gauss's lemma, the
  // monomial outside is the key's up to sign; the sign is the book's rule
  // (a negative leading coefficient goes out with the GCF), so it is read
  // against the key's. Factoring further is allowed. A key the reader
  // cannot take as an integer-coefficient product falls back to `factored`.
  'gcf-factored': (latex, answer) => {
    if (!FORM_PREDICATES.factored(latex)) return false;
    const key = answer ? factorProfile(answer) : null;
    if (key === null || !key.integral) return true;
    const response = factorProfile(latex);
    return response !== null && response.primitive && response.negative === key.negative;
  },
  // "Write $y=-x^2+2x-4$ in standard form" answers $y=-(x-1)^2-3$ — completing
  // the square changes the shape, not the value, so the printed general form
  // grades `correct` by construction. The §6 "standard form" class, vertex
  // half: the response (after an optional written `y=` / `x=` / `f(x)=`
  // label) must be a single `a·(binomial)^2` term plus at most a constant.
  //
  // Read off the parse: a power of a sum survives canonicalization (that is
  // what `factored` already relies on), while the general form's `2x^2` is a
  // power of a bare symbol and can never satisfy the squared-binomial test.
  // Both orientations pass — $a(x-h)^2+k$ and the horizontal $a(y-k)^2+h$ are
  // the same shape in the other variable, and a predicate that took one and
  // refused the other would be an asymmetry no exercise chose.
  'vertex-form': (latex) => {
    let expr;
    try {
      expr = parseLatex(preprocess(stripWrittenLabel(bareLatex(latex))));
    } catch {
      return false;
    }
    if (!expr.isValid) return false;
    const isSquaredBinomialTerm = (e) => {
      if (e.operator === 'Negate') return isSquaredBinomialTerm(e.ops[0]);
      if (e.operator === 'Multiply') {
        const compound = e.ops.filter((op) => !isConstantExpr(op));
        return compound.length === 1 && isSquaredBinomialTerm(compound[0]);
      }
      return e.operator === 'Power'
        && e.ops[0].operator === 'Add' && !isConstantExpr(e.ops[0])
        && e.ops[1].isNumberLiteral && e.ops[1].re === 2;
    };
    const terms = expr.operator === 'Add' ? expr.ops : [expr];
    if (!(terms.length <= 2
      && terms.filter(isSquaredBinomialTerm).length === 1
      && terms.every((term) => isSquaredBinomialTerm(term) || isConstantExpr(term)))) return false;
    // The parse has already combined the constants, so the finished writing
    // is read off the LaTeX: the square completed but `+1+4` left for `+5`
    // (`-4(x+1)^2+1+4` graded `correct` against `-4(x+1)^2+5`), a numeral
    // product or power in front, a fraction unreduced or over 1, a sum inside
    // the square left unsimplified, or a written `+0` (Intermediate Algebra
    // 9.7, October 3, 2026). At most two written terms, at most one of them
    // variable-free and that one not zero.
    const bare = stripWrittenLabel(bareLatex(latex)).replace(/\\left\s*|\\right\s*/g, '');
    const written = splitTopLevelTerms(bare).map((term) => term.trim()).filter(Boolean);
    const constants = written.filter((term) => !hasVariableLetter(term));
    return written.length <= 2 && constants.length <= 1
      && !constants.some((term) => /^[+-]?\s*(?:0+(?:\.0*)?|\.0+)$/.test(term))
      && !written.some((term) => NUMERAL_PRODUCT.test(term) || NUMERAL_POWER.test(term))
      && numeralFractionsReduced(bare) && factorSumsFinished(bare);
  },
  // The conic half of the same class: "Write $25x^2+9y^2-100x-54y-44=0$ in
  // standard form" answers $\tfrac{(x-2)^2}{9}+\tfrac{(y-3)^2}{25}=1$, again
  // value-equal to the printed subject by construction. The response must be
  // an equation whose one side is exactly `1` and whose other side is a sum
  // or difference of at least two fractions, each a coefficient-1 squared
  // term ($x^2$, $y^2$, or a squared binomial) over a positive integer (a
  // bare squared term counts as over the unwritten 1). A
  // numerator that keeps its general-form coefficient (`\frac{9x^2}{144}`)
  // fails — that division was the step the exercise asks for.
  //
  // Read off the LaTeX like `single-fraction`, because the engine folds a
  // numeral quotient before any predicate can see it. A `/`-written quotient
  // (`x^2/16`) counts as a fraction too — MathLive converts a typed `/` to
  // `\frac`, but pasted text keeps the slash, and a correct answer must never
  // be rejected over the fraction notation it arrived in.
  'conic-standard-form': (latex) => {
    const sides = splitEquationSides(latex);
    if (!sides) return false;
    const [one, body] = sides[0] === '1' ? sides : [sides[1], sides[0]];
    if (one !== '1') return false;
    // splitTopLevelTerms keeps a LEADING sign on the first term (there is no
    // earlier term to split it from), and the shape test is sign-blind — a
    // hyperbola written with its negative term first,
    // $-\frac{x^2}{16}+\frac{y^2}{4}=1$, is the same standard form.
    const terms = splitTopLevelTerms(body).map((term) => term.trim().replace(/^[+-]\s*/, ''));
    if (terms.length < 2) return false;
    return terms.every((term) => {
      // A bare squared unit is the fraction over 1 with its denominator
      // unwritten — $(y-1)^2-\frac{x^2}{4}=1$ IS the standard form of a
      // hyperbola with $a=1$, and the source prints it that way rather than
      // as $\frac{(y-1)^2}{1}$. The general form still fails on its right
      // side or on a coefficient ($4(y-1)^2-x^2=4$).
      if (isSquaredConicUnit(term)) return true;
      const halves = writtenFractionHalves(term)
        ?? term.match(/^([^/]+)\/(\d+)$/)?.slice(1);
      if (!halves) return false;
      const [numerator, denominator] = halves.map((half) => half.replace(/\s+/g, ''));
      return isSquaredConicUnit(numerator) && /^\d+$/.test(denominator) && Number(denominator) > 0;
    });
  },
  // The parabola of the same class, in the conic chapter's own shape: "Write
  // $x^2-4x+8y+12=0$ in standard form" answers $(x-2)^2=-8(y+1)$, and the
  // origin cases $y^2=8x$ / $x^2=-6y$ are the same shape with both shifts
  // zero. `vertex-form` cannot serve it — that token wants $a(x-h)^2+k$ on
  // one side of a bare `y=` label, which is the FUNCTION reading the conic
  // chapter deliberately replaces with $(x-h)^2=4p(y-k)$. The response must
  // be an equation whose one side is a single coefficient-1 squared unit
  // ($x^2$, $y^2$, $(x-h)^2$, $(y-k)^2$) and whose other side is one term in
  // the OTHER variable: an optional numeric coefficient (integer, decimal, or
  // written fraction, or radical — the $4p$) on the bare variable or on its shifted
  // binomial, or that variable/binomial over an integer denominator. The
  // general form fails on its term count; $x=\frac{y^2}{8}$ fails because
  // neither side is a bare squared unit; the half-completed
  // $x^2=4x-8y-12$ fails on the sum. Both orientations pass.
  'parabola-standard-form': (latex) => {
    const sides = splitEquationSides(latex);
    if (!sides) return false;
    const variable = String.raw`([a-zA-Z])(?:_\{p+\})?`;
    // A shift is a nonzero integer, as in isSquaredConicUnit: `(y-0)^2=8x`
    // and `y^2=8(x-0)` leave the vertex substituted, not simplified
    // (Intermediate Algebra chapters 11–12 re-review, October 4, 2026).
    const shifted = String.raw`(?:${variable}|\(${variable}${NONZERO_SHIFT}\))`;
    const squaredUnit = new RegExp(String.raw`^${shifted}\^\{?2\}?$`);
    // The 4p may be irrational — a focus at $(\sqrt2,0)$ gives $y^2=4\sqrt2x$ —
    // so a coefficient is an integer/decimal, a written fraction, a radical,
    // or an integer times a radical.
    const radical = String.raw`\\sqrt(?:\{\d+\}|\d)`;
    const coefficient = String.raw`(?:\d+(?:\.\d+)?|\\[tdc]?frac\{[+-]?\d+\}\{\d+\}|\\[tdc]?frac\d\d|\d*${radical})?`;
    const linearTerm = new RegExp(String.raw`^[+-]?${coefficient}(?:\\cdot)?${shifted}$`);
    const linearOverInteger = new RegExp(String.raw`^[+-]?\\[tdc]?frac\{\(?${variable}(?:${NONZERO_SHIFT})?\)?\}\{\d+\}$`);
    // The same quotient written with a slash, $(x-2)^2=(y-1)/2$ — the
    // sibling `conic-standard-form` reads both spellings, and a value-equal
    // response in the very shape the ask names must never report 'form'.
    const linearOverIntegerSlash = new RegExp(String.raw`^[+-]?\(?${variable}(?:${NONZERO_SHIFT})?\)?/\d+$`);
    const letterOf = (match) => match.slice(1).find((group) => group !== undefined);
    const isParabola = (squared, linear) => {
      const unit = squared.match(squaredUnit);
      if (!unit) return false;
      const term = linear.match(linearTerm) ?? linear.match(linearOverInteger)
        ?? linear.match(linearOverIntegerSlash);
      return term !== null && letterOf(unit) !== letterOf(term);
    };
    return isParabola(sides[0], sides[1]) || isParabola(sides[1], sides[0]);
  },
  // The circle of the same class: "Write $x^2+y^2+10x+6y+30=0$ in standard
  // form" answers $(x+5)^2+(y+3)^2=4$. Standard form here is two coefficient-1
  // squared terms against a positive integer ($r^2$) — the printed general
  // form fails on its linear terms alone, and `…=0` fails on the right side.
  'circle-standard-form': (latex) => {
    const sides = splitEquationSides(latex);
    if (!sides) return false;
    const [radius, body] = /^\d+$/.test(sides[0]) ? sides : [sides[1], sides[0]];
    if (!/^\d+$/.test(radius) || Number(radius) === 0) return false;
    const terms = splitTopLevelTerms(body).map((term) => term.replace(/\s+/g, ''));
    return terms.length === 2 && terms.every(isSquaredConicUnit);
  },
  // "Write the point-slope form of an equation of a line with a slope of $-2$
  // that passes through $(-2,2)$" answers $y-2=-2(x+2)$. The prompt prints
  // nothing to retype, but the engine grades the distributed $y-2=-2x-4$ and
  // the scaled $2y-4=-4(x+2)$ equal to it — restatements the ask exists to
  // rule out (equation-equivalence grading accepts the slope-intercept
  // statement of the line too, so the shape is the whole test). One side
  // must be the bare output
  // variable plus at most a constant, coefficient 1; the other one single
  // term — a constant slope times the bare input variable or an
  // input-variable-plus-constant binomial. Both orientations pass, mirroring
  // `vertex-form`, and the collapsed origin case ($y=-3x$ through $(0,0)$) is
  // point-slope with both subtractions evaluated — rejecting it would reject
  // the authored answer of the degenerate exercise.
  //
  // That origin case is read against the key, though: `y=-3x` is also the
  // slope-intercept form of every line through the origin, and it graded
  // `correct` against `y-3=-3(x+1)`, whose ask names the point (−1, 3)
  // (Precalculus chapters 1–2 re-review, October 4, 2026). Both subtractions
  // left out stand for the point (0, 0), so they pass only where the key's own
  // point is the origin (`y-0=-3(x-0)`, which the parse folds to `y=-3x`).
  'point-slope-form': (latex, answer) => {
    // The bare variable, or variable ± constant with coefficient 1 — the
    // $y-y_1$ side, and equally the binomial inside the slope side's parens.
    const shiftedVariable = (e) => {
      if (e.symbol) return e.symbol;
      if (e.operator !== 'Add' || e.ops.length !== 2) return null;
      const compound = e.ops.filter((op) => !isConstantExpr(op));
      return compound.length === 1 && compound[0].symbol ? compound[0].symbol : null;
    };
    // One $m(x-x_1)$ term: sign and constant factors peeled off a shifted
    // variable, which is returned. An Add here is the distributed form —
    // exactly what fails.
    const slopeBinomial = (e) => {
      if (e.operator === 'Negate') return slopeBinomial(e.ops[0]);
      if (e.operator === 'Multiply') {
        const compound = e.ops.filter((op) => !isConstantExpr(op));
        return compound.length === 1 ? slopeBinomial(compound[0]) : null;
      }
      if (e.operator === 'Divide') {
        return isConstantExpr(e.ops[1]) ? slopeBinomial(e.ops[0]) : null;
      }
      return shiftedVariable(e) === null ? null : e;
    };
    // The point-slope reading of an equation, `{ origin }` (both shifts left
    // out), or null.
    const readPointSlope = (text) => {
      const sides = splitEquationSides(text);
      if (!sides) return null;
      const parsed = sides.map((side) => {
        let expr;
        try {
          expr = parseLatex(preprocess(side));
        } catch {
          return null;
        }
        return expr.isValid ? expr : null;
      });
      if (parsed.some((expr) => expr === null)) return null;
      const pointSlope = (pointSide, slopeSide) => {
        const output = shiftedVariable(pointSide);
        const binomial = slopeBinomial(slopeSide);
        const input = binomial && shiftedVariable(binomial);
        return output !== null && input && output !== input
          ? { origin: Boolean(pointSide.symbol && binomial.symbol) } : null;
      };
      return pointSlope(parsed[0], parsed[1]) ?? pointSlope(parsed[1], parsed[0]);
    };
    const read = readPointSlope(latex);
    if (!read) return false;
    if (read.origin && answer && readPointSlope(answer)?.origin === false) return false;
    const sides = splitEquationSides(latex);
    // The parse has evaluated the numbers, so their writing is read off the
    // LaTeX: the slope formula left unworked (`\frac{1-(-3)}{2}`), an
    // unreduced or sign-unfinished slope (`\frac{4}{2}`, `\frac{2}{-1}`), a
    // numeral product or power, and a point written as arithmetic
    // (`y-(1-4)`, `(x-3+1)`) fail; the substituted point `y-(-3)` passes
    // (Intermediate Algebra 3.3, September 28, 2026).
    return sides.every((side) => !splitTopLevelTerms(side)
      .some((term) => NUMERAL_PRODUCT.test(term) || NUMERAL_POWER.test(term)))
      && numeralFractionsReduced(latex) && lineNumeralsFinished(latex);
  },
  // "Rewrite that same line in slope-intercept form" answers $y=-2x-2$, and
  // the elementary-algebra phrasing "enter the expression that follows $y=$"
  // answers the bare $-2x-2$ — both value-equal to the undistributed
  // $-2(x+2)+2$ and the single fraction $\frac{-x-6}{3}$, which the engine
  // accepts and slope-intercept form is not. After an optional written
  // `y=`/`f(x)=` label (written, not parsed, exactly as in `vertex-form`),
  // the response is at most two terms: at most one linear monomial — a
  // constant coefficient on the bare input variable, nothing left to
  // distribute, no variable under a shared fraction bar — plus at most a
  // constant. A leftover non-label `=` (a point-slope response) fails.
  //
  // A one-letter label must be `y` (or the key's own label letter): the
  // label strip took any letter, so the line solved for x,
  // `x=-\frac{2}{3}y-\frac{2}{3}` — an equation the engine grades equal to
  // `y=-\frac{3}{2}x-1` — passed as slope-intercept form, which is y alone
  // on the left (Elementary Algebra 5, September 27, 2026). A function label
  // (`f(x)=`) still passes.
  //
  // Against a BARE key, though, the label is the quantity's own name: the
  // model `100-10t` answered `d=100-10t` graded `form` where `d(t)=` and `y=`
  // were `correct` (Precalculus chapters 1–2 re-review, October 4, 2026). A
  // letter that is a variable of neither the key nor the response's right
  // side is a label there, as the value grader already reads it; a letter
  // that is one (`t=100-10t`, or the solved-for-x line against a bare key in
  // x) still is not.
  'slope-intercept-form': (latex, answer) => {
    const letterLabel = (text) => bareLatex(text).match(/^([a-zA-Z])\s*=(?![=<>])/)?.[1];
    const writtenLetters = (text) => bareLatex(text).replace(/\\[a-zA-Z]+/g, ' ').match(/[a-zA-Z]/g) ?? [];
    const label = letterLabel(latex);
    const keyLabel = answer ? letterLabel(answer) : undefined;
    const bare = stripWrittenLabel(bareLatex(latex));
    const namesBareKey = answer !== undefined && answer !== null && keyLabel === undefined
      && !writtenLetters(bare).includes(label) && !writtenLetters(answer).includes(label);
    if (label !== undefined && label !== 'y' && label !== keyLabel && !namesBareKey) return false;
    if (bare.includes('=')) return false;
    let expr;
    try {
      expr = parseLatex(preprocess(bare));
    } catch {
      return false;
    }
    if (!expr.isValid) return false;
    const isLinearMonomial = (e) => {
      if (e.symbol) return true;
      if (e.operator === 'Negate') return isLinearMonomial(e.ops[0]);
      if (e.operator === 'Multiply') {
        const compound = e.ops.filter((op) => !isConstantExpr(op));
        return compound.length === 1 && Boolean(compound[0].symbol);
      }
      if (e.operator === 'Divide') {
        return isConstantExpr(e.ops[1]) && isLinearMonomial(e.ops[0]);
      }
      return false;
    };
    const terms = expr.operator === 'Add' ? expr.ops : [expr];
    if (!(terms.length <= 2
      && terms.filter((term) => isLinearMonomial(term)).length <= 1
      && terms.every((term) => isLinearMonomial(term) || isConstantExpr(term)))) return false;
    // The parse has already combined `1-5` and reduced `\frac{2}{4}`, so the
    // finished writing is read off the LaTeX: at most one written constant
    // term, at most two terms, no numeral product or power left, and every
    // fraction reduced — `y=\frac12x+1-5` and `y=\frac{2}{4}x-4` graded
    // `correct` (Elementary Algebra knowledge check 1–5, September 27, 2026).
    const written = splitTopLevelTerms(bare.replace(/\\left\s*|\\right\s*/g, ''))
      .map((term) => term.trim()).filter(Boolean);
    // A written zero term (`2x+0`) and a parenthesized sum (`2(x-0)`, the
    // point-slope product through the origin) are the unworked origin-point
    // forms the parse folds to `2x`: both graded `correct` against `2x` and
    // `y=2x` (Precalculus chapters 1–2 re-review, October 4, 2026). A lone
    // `0` (the line y = 0) is the answer, not decoration.
    if (written.length > 1 && written.some(isZeroTerm)) return false;
    if (written.some((term) => [...term.matchAll(/\(([^()]*)\)/g)]
      .some(([, inner]) => splitTopLevelTerms(inner).filter((piece) => piece.trim()).length > 1))) return false;
    return written.length <= 2
      && written.filter((term) => !hasVariableLetter(term)).length <= 1
      && !written.some((term) => NUMERAL_PRODUCT.test(term) || NUMERAL_POWER.test(term))
      && numeralFractionsReduced(bare) && termFractionsReduced(bare)
      // …and every number finished: the unworked slope formula
      // `y=\frac{-3-1}{1-(-2)}x`, `y=(2+1)x-4`, `y=\frac{4}{-3}x` and
      // `y=2x-(-3)` graded `correct` (Intermediate Algebra 3.3, September
      // 28, 2026).
      && lineNumeralsFinished(bare, { signs: true });
  },
  // "Convert the equation from logarithmic to exponential form: $3=\log_7
  // 343$" answers $343=7^3$ — two true statements the engine grades equal, so
  // only the written notation separates them. The conversion is complete
  // exactly when no logarithm is left.
  // "Write the inequality … with the boundary line $x+y=3$. Keep $x+y$ on the
  // left side, as the boundary line is written": every half-plane restatement
  // (`y\ge3-x`) grades equal in value, so the standard-form writing is a
  // shape — every variable term on one side (a numeral coefficient at most,
  // each letter once), one numeral on the other, either orientation, an `=`
  // or one order relation between them, fractions reduced.
  'line-standard-form': (latex) => {
    const text = bareLatex(latex).replace(/\\left\s*|\\right\s*/g, '');
    let sides = splitAtTopLevel(text, ORDER_RELATION);
    if (sides.length === 1) sides = splitAtTopLevel(text, /^=(?![=<>])/);
    if (sides.length !== 2 || sides.some((side) => !side)) return false;
    const at = sides.findIndex(hasVariableLetter);
    if (at === -1 || hasVariableLetter(sides[1 - at])) return false;
    const constant = sides[1 - at].trim();
    if (asDecimal(constant) === null && asFraction(constant) === null) return false;
    const letters = [];
    for (const term of splitTopLevelTerms(sides[at]).map((t) => t.trim()).filter(Boolean)) {
      const match = term.replace(/^[+-]\s*/, '').match(
        /^(?:(?:\d+(?:\.\d+)?|\\[tdc]?frac\s*(?:\{\s*\d+\s*\}|\d)\s*(?:\{\s*\d+\s*\}|\d))\s*(?:\\cdot\s*)?)?([a-zA-Z])$/,
      );
      if (!match) return false;
      letters.push(match[1]);
    }
    return letters.length >= 1 && new Set(letters).size === letters.length && numeralFractionsReduced(text)
      // `x+y\ge\frac{6}{-2}` and `\frac{-6}{-2}` are sign work left undone.
      && lineNumeralsFinished(text);
  },
  // With a conversion KEY the token reads the key, as `translation` does: the
  // value path compares an equation's sides by value, so `64=64`, `64=2^6`
  // and `64=8^2` all graded `correct` against `64=4^3` ("Convert to
  // exponential form: $3=\log_4 64$") — none of them the conversion. The
  // response must be one power equal to a log-free number with the key's
  // base, exponent and number (conversionTriples). A key that is no
  // conversion equation (`100` for an evaluate ask) keeps the absence test.
  'exponential-form': (latex, answer) => conversionFormHolds(latex, answer, 'power')
    ?? !LOG_NAME.test(bareLatex(latex)),
  // The mirror conversion, "Convert to logarithmic form: $3^2=9$", keyed
  // `\log_3 9=2`: the value path reads both sides as the number 2, so `2=2`
  // and `\log_2 4=2` graded `correct` (Intermediate Algebra 10.3, October 3,
  // 2026). One logarithm equal to a log-free exponent, with the key's base,
  // argument and value. With no conversion key it asks only for that shape.
  'logarithmic-form': (latex, answer) => conversionFormHolds(latex, answer, 'log')
    ?? conversionTriples(latex, 'log').length > 0,
  // "Change the function $y=3(0.5)^x$ to one having $e$ as the base" answers
  // $3e^{(\ln 0.5)x}$ — the SAME function, so the printed subject grades
  // `correct` by construction and only the written base can refuse it. The
  // conversion is finished exactly when no base other than $e$ is raised to
  // an exponent that involves the variable. A power with a numeric exponent
  // (`x^2`) is a power function, not an exponential, and is left alone.
  'base-e': (latex) => {
    const bare = bareLatex(latex).replace(/\\left\s*|\\right\s*/g, '');
    for (let i = bare.indexOf('^'); i !== -1; i = bare.indexOf('^', i + 1)) {
      const exponent = bare[i + 1] === '{'
        ? readBalancedGroup(bare.slice(i + 1), 0)?.[0] ?? ''
        : bare.slice(i + 1, i + 2);
      // Only an exponent carrying the variable makes this an exponential.
      if (!/[a-zA-Z]/.test(exponent.replace(/\\[a-zA-Z]+/g, ''))) continue;
      const before = bare.slice(0, i).replace(/\s+$/, '');
      const base = before.endsWith(')')
        ? before.slice(before.lastIndexOf('(') + 1, -1)
        : before.match(/(?:\\[a-zA-Z]+|[0-9.]+|[a-zA-Z])$/)?.[0] ?? '';
      if (base.replace(/\s+/g, '') !== 'e') return false;
    }
    return true;
  },
  // "Find the exponential function through these two points", "write the
  // model": no token pinned an exponential-model key, so the half-worked
  // `6\cdot125^{x/3}`, `6(\sqrt[3]{125})^x`, `\frac{750}{125}(5)^x` and
  // `6\cdot5^x\cdot1` graded `correct` against `6(5)^x` (Precalculus chapter
  // 4 re-review, October 4, 2026). Read off the writing, after any label:
  //
  //   response := model-term (± constant)?      (either order)
  //   model-term := coefficient? power | power coefficient?
  //   power := numeral-base ^ (-)?rate? variable | e ^ (-)?rate? variable
  //
  // Every coefficient, base, rate and constant a finished numeral
  // (isFinishedModelNumeral, modelExponentRate, untakenPower); `\cdot`,
  // `\times`, juxtaposition and parentheses all multiply; a power in
  // parentheses (`6(5^x)`) is read through them. The constant is the
  // vertical shift of `90e^{-0.008377t}+75` and `-10^x+7` (Precalculus 4.2);
  // the coefficient may be an initial-value symbol, `A_0e^{\frac{\ln2}{3}t}`
  // (4.7), whose exact rate is finished too. `(e^{0.5})^x` is the power left
  // to take: its base is no numeral.
  'exponential-model': (latex) => readExponentialModel(latex) !== null,
  // "Use properties of logarithms to write $\log_5 25ab$ as a sum of
  // logarithms" answers $2+\log_5 a+\log_5 b$. Every written logarithm must
  // take an argument the log rules cannot break apart, so the printed
  // compound argument (`25ab`, a radical, a quotient, a power) is what fails.
  // A response with no logarithm at all passes: a fully-simplified expansion
  // can evaluate every term away, and there is nothing left unexpanded to
  // reject.
  //
  // `\ln` counts. The opener used to match only `\log`, so a natural-log
  // expression entered the loop zero times and the predicate returned true
  // for EVERY input — it failed open on exactly the prompts §4.5 is built
  // from, and a learner could pass by retyping `\ln(3x^2y)`.
  //
  // An argument that is a top-level SUM is accepted, because no log rule
  // splits a sum: `\ln(x+3)+\ln(x-1)` is the fully expanded form of
  // `\ln((x+3)(x-1))`, and demanding a bare atom there would reject the
  // correct answer — a rule firing on sound content. Only a product,
  // quotient, power, or juxtaposition is still expandable.
  //
  // Two more refusals (Intermediate Algebra 10.4, October 3, 2026). An
  // unbraced argument was read only up to its caret, so `\log_2 x^4` — the
  // Power Property left unapplied — and the retyped prompt `\log_2 3^7`
  // passed: a `^` right after the argument makes it a power. And a logarithm
  // of a numeral whose value is rational (`\log 10000`, `\log_9 9`,
  // `\log_4 2`, `\log 1`) — or of its own base (`\ln e`, `\log_b b`) — is a
  // number left unevaluated on a "simplify, if possible" ask; an irrational
  // one (`\log_2 5`, `\ln 3`) is a finished term.
  //
  // Three more (Precalculus 4.5, October 4, 2026). A sum argument that is a
  // polynomial factoring over the integers is a product still to split:
  // `-\ln(x^2-9)` for `-\ln(x+3)-\ln(x-3)` (reduciblePolynomialArgument). A
  // composite whole-number argument is too, when the key writes every
  // whole-number argument prime — the How To "expresses each whole number
  // factor as a product of primes", so `\log_b(14)` for
  // `\log_b(2)+\log_b(7)`. And written numeral arithmetic on the
  // coefficients — `\frac13\cdot2\ln x`, or a coefficient on a parenthesized
  // group of logarithms, `\frac12(3\log x-4\log y)` — is the distribution
  // left undone, unless the key itself is written factored out that way
  // (Intermediate Algebra 10.4's `\frac{1}{5}(4\log_4 x-…)`).
  'expanded-logarithms': (latex, answer) => {
    const bare = bareLatex(latex);
    const writing = logWriting(bare);
    if (writing === null) return false;
    for (const { argument, after, base } of writing.calls) {
      if (!irreducibleLogArgument(argument) || /^\s*\^/.test(after)) return false;
      if (logEvaluatesRationally(base, argument.replace(/\s+/g, ''))) return false;
      if (reduciblePolynomialArgument(argument)) return false;
    }
    const key = answer === undefined ? null : logWriting(bareLatex(answer));
    if (key !== null) {
      const composite = (calls) => calls.some(({ argument }) => /^\d+$/.test(argument.trim())
        && Number(argument) > 3 && !isPrime(Number(argument)));
      if (composite(writing.calls) && !composite(key.calls)) return false;
      if (writing.groupsOfLogarithms && !key.groupsOfLogarithms) return false;
    }
    return !writesNumeralProduct(bare);
  },
  // "Rewrite $\log_{0.5}(8)$ as a quotient of natural logarithms" is keyed
  // `\frac{\ln(8)}{\ln(0.5)}`, and the common-log quotient
  // `\frac{\log 8}{\log 0.5}` is the same number, so only the written base
  // can refuse it (Precalculus 4.5, October 4, 2026). At least one
  // logarithm, every one of them natural: `\ln`, or `\log_e`.
  'natural-log': (latex) => {
    const bare = bareLatex(latex);
    const calls = [...bare.matchAll(/\\(ln|log)(?![a-zA-Z])\s*(?:_\s*(\{\s*e\s*\}|e))?/g)];
    return calls.length > 0 && calls.every((call) => call[1] === 'ln' || call[2] !== undefined);
  },
  // "Find the exact value of $\cos\left(\tfrac{\pi}{4}\right)$" answers
  // $\tfrac{\sqrt2}{2}$ — and the printed subject IS that value, so retyping
  // the prompt grades `correct`. The step the ask names is carrying the
  // evaluation out, and it is finished exactly when no trigonometric function
  // is left to evaluate. Same absence test as `exponential-form`, over the
  // trigonometric names instead of the logarithmic ones; `\sin^{-1}` and
  // `\arcsin` are both spellings of the same unevaluated application, so the
  // inverse asks of §6.3 are covered by the same predicate. An absence test
  // needs no closed-world grammar: no value-preserving decoration can REMOVE
  // ink, so nothing a learner appends can buy the shape.
  //
  // The name ends at the next non-letter, never at `\b`: a numeral run
  // straight on — `\cos45^\circ`, `\sin135^\circ` — leaves no word boundary
  // after the name, so the unspaced retype read as "no function left" and
  // graded `correct` while `\cos 45^\circ` was `form` (Precalculus chapters
  // 5–6 re-review, October 4, 2026). `TRIG_NAME`'s boundary; the value path
  // always read it right.
  'evaluated-trig': (latex) => !TRIG_NAME.test(bareLatex(latex)),
  // "Simplify $(\tan t)(\cos t)$" answers $\sin t$ — value-equal to the
  // printed product by the quotient identity, so the prompt retyped back
  // grades correct and only the writing separates them. `evaluated-trig`
  // cannot be the token here: the answer IS a trigonometric function, and
  // requiring none would refuse it. What the ask names is CONDENSING to one
  // function, so the test counts applications instead of forbidding them —
  // `single-logarithm`'s job, one function family over.
  //
  // Deliberately NOT `single-logarithm`'s stricter "the term IS the function"
  // rule: a simplification legitimately answers $2\sin t$ or $-\sqrt3\cos t$,
  // where the coefficient is part of the simplified result rather than an
  // unapplied step. Counting is still a one-way test — no value-preserving
  // rewrite removes an application it does not have — so it needs no
  // closed-world grammar and fails open on writing it cannot read.
  //
  // The one application is not written under a fraction bar unless the key
  // writes its own there: `\frac{1}{\cot t}` against `\tan t` and
  // `\frac{1}{\cos t}` against `\sec t` — the reciprocal identity half
  // applied — graded `correct` (Precalculus chapters 5–6 re-review, October
  // 4, 2026). A key such as 7.1's `\frac{1}{\sin x}` ("in terms of
  // $\sin x$") puts its function in a denominator on purpose, and with no key
  // the test is not read.
  //
  // …and the one application is the KEY's: the same function on an argument
  // of the same value. `\cos(\frac{\pi}{2}-t)` against `\sin t` (the
  // cofunction prompt retyped), `\sin(-t)` against `-\sin t` (the odd step
  // undone) and `\sin(t+2\pi)` each write one application and graded
  // `correct` (Precalculus chapters 5–6 re-review, round 2, October 4, 2026).
  // Read off the parse, which keeps the function and its argument as written
  // (`\cos2\theta` is Cos(2θ)); the argument is compared by value, so
  // `\tan(\frac{x}{10})` and `\tan(0.1x)` meet the key `\tan(x/10)`, and its
  // writing is held to `no-like-terms` (`\tan(\frac{3x}{2}-\frac{7x}{5})`).
  // The rest of the response is finished numeral work: no bar over 1, no
  // written ×1, no coefficient of 1, no zero term (`\frac{\sin t}{1}`,
  // `\sin t\cdot1`). A different function of the same value is the identity
  // the ask names left unapplied — `\csc x` against 7.1's "in terms of
  // $\sin x$" key `\frac{1}{\sin x}`, `1-\cos^2\theta` against `\sin^2\theta`.
  'single-trig-function': (latex, answer) => {
    const bare = bareLatex(latex);
    if ((bare.match(new RegExp(TRIG_NAME.source, 'g')) || []).length !== 1) return false;
    if (answer !== undefined && !writesTrigInDenominator(answer) && writesTrigInDenominator(latex)) return false;
    if (!termFractionsReduced(bare) || writesUnfinishedTerms(bare) || WRITES_TIMES_ONE.test(bare)) return false;
    if (trigArguments(bare).some((argument) => !FORM_PREDICATES['no-like-terms'](argument))) return false;
    if (answer === undefined) return true;
    try {
      const [mine, key] = [latex, answer].map((text) => trigApplications(parseLatex(preprocess(text))));
      if (key.length !== 1) return true;
      return mine.length === 1 && mine[0].operator === key[0].operator && equivalent(mine[0].ops[0], key[0].ops[0]);
    } catch {
      return true;
    }
  },
  // "Write $\sin x\cos y$ as a sum" (product-to-sum) and "rewrite with no
  // exponent higher than 1" (power reduction) answer with a sum of single
  // trigonometric applications, and the printed product or power is
  // value-equal to it: `\sin(x)\cos(x)+\sin(y)\cos(y)` passed
  // `expanded no-like-terms` against `\frac12\sin(2x)+\frac12\sin(2y)`, and
  // `\cos x\cos\frac{2\pi}{3}-\sin x\sin\frac{2\pi}{3}` (the sum formula
  // with its special-angle factors left unevaluated) against
  // `-\frac12\cos x-\frac{\sqrt3}{2}\sin x` (Precalculus chapters 7–8
  // re-review, October 5, 2026). Read off the parse, which keeps products and
  // powers as written: no product holds two factors that write a
  // trigonometric function, no power of a writing that holds one
  // (`\cos^2(2x)`, `(1-\cos(6x))^2`), and no function under a bar
  // (`\frac{\sin x}{\cos x}`). An argument is the function's own business;
  // compose `no-like-terms` for finished numerals.
  'no-trig-products': (latex) => {
    let expr;
    try {
      expr = parseLatex(preprocess(latex));
    } catch {
      return false;
    }
    if (!expr.isValid) return false;
    const holdsTrig = (e) => TRIG_OPERATORS.has(e.operator) || (e.ops ?? []).some(holdsTrig);
    const unfinished = (e) => {
      if (TRIG_OPERATORS.has(e.operator)) return false;
      if ((e.operator === 'Power' || e.operator === 'Square') && holdsTrig(e.ops[0])
        && !(e.operator === 'Power' && e.ops[1].isNumberLiteral && e.ops[1].re === 1)) return true;
      if (e.operator === 'Multiply' && e.ops.filter(holdsTrig).length > 1) return true;
      if (e.operator === 'Divide' && holdsTrig(e.ops[1])) return true;
      return (e.ops ?? []).some(unfinished);
    };
    return !unfinished(expr);
  },
  // Sum-to-product: "Write $\sin(3\theta)+\sin\theta$ as a product" answers
  // `2\sin(2\theta)\cos\theta`, and the printed sum is value-equal to it, so
  // the item sat as multiple choice — `single-term` and `factored` both
  // refused the key itself (Precalculus chapters 7–8 re-review, October 5,
  // 2026). The response is one product: an optional finished numeral
  // coefficient and trigonometric applications (a power of one allowed),
  // nothing added, every argument finished (`no-like-terms`, degree marks
  // off, so `\frac{3\theta+\theta}{2}` is refused). With a key, the
  // applications are the KEY's: the same functions on arguments of the same
  // values, in any order — `\cos(-\theta)` for `\cos\theta` is the even
  // identity left unapplied.
  'trig-product': (latex, answer) => {
    const bare = bareLatex(latex);
    if (!termFractionsReduced(bare) || writesUnfinishedTerms(bare) || writesNumeralProduct(bare)
      || WRITES_TIMES_ONE.test(bare)) return false;
    if (trigArguments(bare).some((argument) => !FORM_PREDICATES['no-like-terms'](argument.replace(DEGREE_MARK, '')))) return false;
    let expr;
    try {
      expr = parseLatex(preprocess(latex));
    } catch {
      return false;
    }
    if (!expr.isValid) return false;
    let product = expr.operator === 'Negate' ? expr.ops[0] : expr;
    if (product.operator === 'Divide' && product.ops[1].isNumberLiteral) product = product.ops[0];
    const factors = product.operator === 'Multiply' ? product.ops : [product];
    const isApplication = (e) => TRIG_OPERATORS.has(e.operator)
      || (e.operator === 'Power' && TRIG_OPERATORS.has(e.ops[0].operator) && e.ops[1].isNumberLiteral)
      || (e.operator === 'Square' && TRIG_OPERATORS.has(e.ops[0].operator));
    const isConstant = (e) => e.unknowns.length === 0 && trigApplications(e).length === 0;
    if (!factors.every((e) => isApplication(e) || isConstant(e))) return false;
    const mine = factors.filter(isApplication).flatMap(trigApplications);
    if (mine.length < 1) return false;
    if (answer === undefined) return true;
    try {
      const key = trigApplications(parseLatex(preprocess(answer)));
      if (key.length !== mine.length) return false;
      const left = [...mine];
      return key.every((wanted) => {
        const at = left.findIndex((have) => have.operator === wanted.operator && equivalent(have.ops[0], wanted.ops[0]));
        if (at === -1) return false;
        left.splice(at, 1);
        return true;
      });
    } catch {
      return true;
    }
  },
  // "Evaluate $\log_2 8$" answers 3, the same hazard one function over. The
  // predicate is `exponential-form`'s, and the duplication is deliberate:
  // §6's rule is that the feedback has to name the step the exercise asks
  // for, and "write it in exponential form, with no logarithm left" describes
  // a conversion the learner was never asked to make. The phrase is the
  // difference, exactly as `single-power` exists apart from `lowest-terms`.
  // `\ln1` ran the numeral on with no `\b` after the name and graded
  // `correct` against `0` — `evaluated-trig`'s unspaced hole, one family over
  // (Precalculus chapters 5–6 re-review, October 4, 2026).
  'evaluated-logarithm': (latex) => !LOG_NAME.test(bareLatex(latex)),
  // "Translate into an algebraic equation: The sum of $7$ and $6$ gives $13$"
  // is keyed `7+6=13`, and ANY true numeric equation — `13=13`, `10+3=13` —
  // is equivalent to it in value, as `y=12` is to `2(y-4)=16`. The ask is the
  // writing itself, so the response must be the key as written: the same
  // operands in the same order (a translation keeps the sentence's order),
  // up to spacing, multiplication and division spellings, implicit
  // multiplication, and which side of the `=` each half sits on. It reads
  // the key, as the two conversion forms do; with no key it admits nothing.
  translation: (latex, answer) => {
    if (answer === undefined) return false;
    const student = translationSides(latex);
    const key = translationSides(answer);
    if (!student || !key || student.length !== key.length) return false;
    if (student.join('=') === key.join('=')) return true;
    return key.length === 2 && student[0] === key[1] && student[1] === key[0];
  },
  // "Convert $\tfrac{5\pi}{4}$ radians to degrees" answers $225^\circ$, and
  // the engine converts `^\circ` as an exact operator — $225^\circ$ and
  // $\tfrac{5\pi}{4}$ are the SAME value to it, so the printed subject grades
  // correct and only the written unit separates the two.
  //
  // Presence of a degree symbol is not enough: `\frac{5\pi}{4}+0^\circ` wears
  // one without moving the value. So the response has to BE a degree measure
  // — one load-bearing term, ending in the symbol, on a plain numeric head —
  // the closed-world shape `percent` uses against the identical attack.
  //
  // The mark is DEGREE_MARK's, not a literal `^\circ`, so every spelling the
  // parse path folds into π/180 satisfies the token that names it.
  degrees: (latex) => {
    const terms = loadBearingTerms(bareLatex(latex));
    if (terms.length !== 1) return false;
    const head = terms[0].trim().match(DEGREE_MARK_AT_END);
    if (!head) return false;
    const value = head[1].trim();
    // The head is a FINISHED count: `\frac{720}{3}^\circ` graded `correct`
    // against `240^\circ`, the division written under the mark, while
    // `\frac{720^\circ}{3}` was already refused (Precalculus chapters 5–6
    // re-review, October 4, 2026). A fraction head is held to `lowest-terms`'s
    // rule — reduced, one sign, no bar over 1 — so `\frac{45}{2}^\circ` and
    // `22\frac12^\circ` still pass, and an integer is never a fraction. A
    // mixed number's fraction is proper. Sums and products under the mark
    // (`(600-360)^\circ`, `{240+0}^\circ`) were never a numeral head.
    const fraction = asFraction(value) ?? asMixedNumber(value);
    if (!fraction) return asDecimal(value) !== null;
    if (fraction.negativeDenominator || fraction.signs > 1 || fraction.denominator === 1) return false;
    if (fraction.whole !== undefined && fraction.numerator >= fraction.denominator) return false;
    return gcd(fraction.numerator, fraction.denominator) === 1;
  },
  // The mirror ask — "Convert $225^\circ$ to radians", keyed
  // $\tfrac{5\pi}{4}$ — needs the opposite test, and needs it to be an
  // ABSENCE: a radian measure has no notation of its own (2 radians is
  // written `2`), so there is no shape to require, only the degree symbol to
  // rule out. That refuses the printed subject retyped back, which is the
  // whole job — but only if it rules out every spelling of the symbol, so it
  // reads DEGREE_MARK too. Narrowing from the old `\circ` to the mark also
  // stops a bare `\circ` (function composition, which carries no angle) from
  // failing a form it never violated.
  radians: (latex) => !DEGREE_MARK_ANYWHERE.test(bareLatex(latex)),
};

/**
 * "Solve the formula $7x+y=11$ for $y$" answers $y=11-7x$ — the same
 * condition as the printed formula, so equation-equivalence grading accepts
 * the prompt retyped back and only the isolation separates the two. The
 * variable is named in the token (`solved:y`) because isolation alone cannot
 * be the test: "Solve $x=5y-10$ for $y$" prints an equation that is already
 * solved — for $x$ — and proportional to the key, so an unparameterized
 * shape check would pass the very retype the token exists to reject. The
 * named variable must be written alone on one side and be absent from the
 * other; command names are stripped before the absence check (the `t` of
 * `\tfrac` is not the variable `t`), exactly as readFunctionNotation's `y`
 * guard reads its remainder.
 */
function writtenSolvedFor(latex, variable) {
  return solvedForSide(latex, variable) !== null;
}

/** The side opposite the isolated `variable` (see writtenSolvedFor), or null when it is not isolated. */
function solvedForSide(latex, variable) {
  // An inequality solved for the variable counts too — `y\ge-2x+3` for an
  // ask that pins "solved for y" (Elementary Algebra 4.7, September 27, 2026).
  const relationSides = splitAtTopLevel(bareLatex(latex).replace(/\\left\s*|\\right\s*/g, ''), ORDER_RELATION)
    .map((side) => side.replace(/\s+/g, ''));
  const sides = splitEquationSides(latex)
    ?? (relationSides.length === 2 && relationSides.every(Boolean) ? relationSides : null);
  if (!sides) return null;
  const isolated = (lone, rest) => lone === variable
    && !rest.replace(/\\[a-zA-Z]+/g, ' ').includes(variable);
  if (isolated(sides[0], sides[1])) return sides[1];
  if (isolated(sides[1], sides[0])) return sides[0];
  return null;
}

/**
 * The written sides of an equation, normalized for the `translation` form:
 * spacing, `\cdot`/`\times`/`*`, `\div`/`/`/`\frac`, a parenthesized
 * single term, braces around one character, and implicit multiplication all
 * read alike, so `2(y-4)=16` and `2\cdot\left(y-4\right)=16` are one
 * writing. null when there is no `=` at all.
 */
function translationSides(latex) {
  let text = bareLatex(latex)
    .replace(/[−–]/g, '-')
    .replace(/\\(?:cdot|times|ast)|×|·/g, '*')
    .replace(/\\div|÷/g, '/')
    .replace(/(\d),(?=\d{3}\b)/g, '$1')
    .replace(/\\\$/g, '')
    .replace(/\s+/g, '')
    // `2.50` and `2.5` are one numeral: a price written either way.
    .replace(/(\d\.\d*?)0+(?!\d)/g, '$1')
    .replace(/(\d)\.(?!\d)/g, '$1');
  for (let i = 0; i < 4; i += 1) {
    text = text.replace(/\\[tdc]?frac(?:\{([^{}]*)\}|(\w))(?:\{([^{}]*)\}|(\w))/g,
      (_, a1, a2, b1, b2) => `(${a1 ?? a2})/(${b1 ?? b2})`);
  }
  text = text.replace(/\{(\w)\}/g, '$1');
  for (let i = 0; i < 4; i += 1) text = text.replace(/\(([\w.]+)\)/g, '$1');
  text = text
    .replace(/([\w.)])(?=\()/g, '$1*')
    .replace(/(\))(?=[\w])/g, '$1*')
    .replace(/(\d)(?=[a-zA-Z])/g, '$1*');
  const sides = text.split(/=/);
  return sides.length >= 2 && sides.every(Boolean) ? sides : null;
}

/* --------------------------------------------------------------------------
 * Conversions between exponential and logarithmic form
 *
 * `b^y=x` and `\log_b x=y` state one relation among three numbers — the base
 * b, the exponent y and the number x — and a conversion is right exactly when
 * it keeps all three. Reading them is the whole check: two true equations
 * with equal side values (`64=2^6` and `64=4^3`) are different conversions,
 * and an identity key (`1=x^0`, from $0=\log_x 1$) is the right answer even
 * though the equation path cannot compare two identities.
 * ------------------------------------------------------------------------ */

const LOG_NAME = /\\log|\\ln(?![a-zA-Z])/;

/**
 * A side written as ONE power `b^y` — read from the writing, because the
 * engine folds `4^3` to 64 even uncanonicalized. The base must be a single
 * atom (a numeral, a letter, `e`, or a bracketed group) and the exponent a
 * braced group or one character, ending the side. null otherwise.
 */
function writtenPower(side) {
  const text = side.trim();
  let depth = 0;
  let caret = -1;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if ('{(['.includes(ch)) depth += 1;
    else if ('})]'.includes(ch)) depth -= 1;
    else if (ch === '^' && depth === 0) {
      if (caret !== -1) return null;
      caret = i;
    }
  }
  if (caret <= 0) return null;
  const base = text.slice(0, caret).trim();
  const exponent = text.slice(caret + 1).trim();
  const wraps = (s, open, close) => s.startsWith(open) && s.endsWith(close)
    && splitAtTopLevel(s.slice(1, -1), /^[\])}]/).length === 1;
  const atomBase = /^(?:\d+(?:\.\d+)?|[a-zA-Z])$/.test(base)
    || wraps(base, '(', ')') || wraps(base, '{', '}') || wraps(base, '[', ']');
  const atomExponent = /^[0-9a-zA-Z]$/.test(exponent) || wraps(exponent, '{', '}');
  if (!atomBase || !atomExponent) return null;
  const unbrace = (s) => (wraps(s, '{', '}') ? s.slice(1, -1) : s);
  return { base: unbrace(base), exponent: unbrace(exponent) };
}

/** A side written as ONE logarithm, as {base, argument} engine boxes, or null. */
function writtenLogarithm(side) {
  let json;
  try {
    const expr = ce.parse(side, { canonical: false });
    if (!expr.isValid) return null;
    json = expr.json;
  } catch {
    return null;
  }
  while (Array.isArray(json) && json[0] === 'Delimiter' && json.length === 2) [, json] = json;
  if (!Array.isArray(json)) return null;
  if (json[0] === 'Ln' && json.length === 2) return { base: ce.box('ExponentialE'), argument: ce.box(json[1]) };
  if (json[0] === 'Log' && (json.length === 2 || json.length === 3)) {
    return { base: ce.box(json.length === 3 ? json[2] : 10), argument: ce.box(json[1]) };
  }
  return null;
}

/**
 * Every (base, exponent, number) reading of an equation in the given form:
 * `power` reads `b^y=x`, `log` reads `\log_b x=y`, either side of the `=`
 * holding the power or logarithm and the other side holding no logarithm.
 * Components are engine expressions. Empty when the writing is not that form.
 */
function conversionTriples(latex, kind) {
  const sides = splitAtTopLevel(bareLatex(latex), /^=/);
  if (sides.length !== 2 || sides.some((side) => !side)) return [];
  const triples = [];
  for (const [lead, other] of [sides, [sides[1], sides[0]]]) {
    if (LOG_NAME.test(other)) continue;
    const value = parseValid(other);
    if (!value) continue;
    if (kind === 'power') {
      const power = writtenPower(lead);
      const base = power && parseValid(power.base);
      const exponent = power && parseValid(power.exponent);
      if (base && exponent && !LOG_NAME.test(lead)) triples.push({ base, exponent, number: value });
    } else {
      const log = writtenLogarithm(lead);
      if (log) triples.push({ base: log.base, exponent: value, number: log.argument });
    }
  }
  return triples;
}

/**
 * Does the response keep the key's base, exponent and number? null when the
 * key itself is no conversion equation of this kind, so the caller falls
 * back to its key-free reading.
 */
function conversionFormHolds(latex, answer, kind) {
  if (answer === undefined) return null;
  const keyTriples = conversionTriples(answer, kind);
  if (keyTriples.length === 0) return null;
  const same = (a, b) => equivalent(a, b) || equivalent(a.canonical, b.canonical);
  return conversionTriples(latex, kind).some((triple) => keyTriples.some((key) => (
    same(triple.base, key.base) && same(triple.exponent, key.exponent) && same(triple.number, key.number))));
}

/**
 * The value step's escape for a conversion ask: a response that keeps the
 * key's three numbers IS the key's relation, whatever the equation path can
 * compare. Without it the identity key `1=x^0` graded its own answer `x^0=1`
 * `incorrect` — two identities are proportional nowhere the sampler looks.
 */
function conversionMatchesKey(written, answerRaw, spec) {
  const { tokens } = parseAnswerForm(spec);
  return (tokens.includes('exponential-form') && conversionFormHolds(written, answerRaw, 'power') === true)
    || (tokens.includes('logarithmic-form') && conversionFormHolds(written, answerRaw, 'log') === true);
}

const DENOMINATOR_TOKEN = /^denominator:(\d+)$/;
const SOLVED_TOKEN = /^solved:([a-zA-Z])$/;

/**
 * Split an `answerForm` spec into its tokens, reporting any that name no
 * predicate. Exported so the shortcode and the content lint reject a typo
 * during authoring rather than silently grading nothing.
 */
export function parseAnswerForm(spec) {
  const tokens = String(spec ?? '').trim().split(/\s+/).filter(Boolean);
  const unknown = tokens.filter((token) => !(token in FORM_PREDICATES)
    && !DENOMINATOR_TOKEN.test(token) && !SOLVED_TOKEN.test(token));
  return { tokens, unknown, valid: tokens.length > 0 && unknown.length === 0 };
}

export const ANSWER_FORM_TOKENS = Object.freeze([...Object.keys(FORM_PREDICATES), 'denominator:<n>', 'solved:<variable>']);

/**
 * Feedback for a right value in the wrong shape. It names the shape rather
 * than the error ("Write the answer as a decimal", not "wrong form"), because
 * the learner's arithmetic was correct and only the last step is missing.
 */
const FORM_PHRASES = {
  fraction: 'as a fraction',
  decimal: 'as a decimal',
  percent: 'as a percent, with the % sign',
  'rational-exponent': 'with a rational exponent in lowest terms, not a radical',
  radical: 'as a radical expression',
  'exact-log': 'in exact logarithmic form, not a decimal approximation',
  'exact-radical': 'in exact form, as a simplified radical rather than a decimal approximation',
  exact: 'in exact form, not as a decimal approximation',
  summation: 'in summation notation, with a Σ',
  'single-logarithm': 'condensed to one logarithm',
  'mixed-number': 'as a mixed number',
  'improper-fraction': 'as an improper fraction',
  'fraction-or-mixed-number': 'as a fraction or mixed number',
  'lowest-terms': 'in lowest terms',
  'scientific-notation': 'in scientific notation',
  'prime-product': 'as a product of prime factors',
  'single-power': 'as a single power',
  expanded: 'in expanded form',
  'no-like-terms': 'with like terms combined',
  polynomial: 'as a polynomial, with no fraction bar',
  distributed: 'with the parentheses multiplied out',
  'simplified-radical': 'as a simplified radical, with every product multiplied out and any fraction reduced',
  'single-term': 'as a single term',
  'single-fraction': 'as a single fraction',
  'positive-exponents': 'with positive exponents only',
  'reduced-fraction': 'as a single fraction with all common factors cancelled',
  factored: 'in factored form',
  'factored-completely': 'factored completely, with no factor that can be factored further',
  'gcf-factored': 'with the whole greatest common factor taken out, a negative one when the leading coefficient is negative',
  'point-slope-form': 'in point-slope form, y − y₁ = m(x − x₁), with the slope multiplying the parenthesized difference',
  'slope-intercept-form': 'in slope-intercept form, y = mx + b, with one constant term and every fraction reduced',
  'line-standard-form': 'in standard form, with the variable terms on one side and one number on the other',
  'vertex-form': 'in vertex form, with the square completed',
  'conic-standard-form': 'in standard form, with each squared term over its denominator and the right side equal to 1',
  'parabola-standard-form': 'in standard form, with the squared term alone on one side and a single multiple of the other variable (or its shifted binomial) on the other',
  'circle-standard-form': 'in standard form, with the squared binomials on the left and the squared radius on the right',
  'exponential-form': 'in exponential form, with no logarithm left: the logarithm\'s base, raised to its value, equals its argument',
  'logarithmic-form': 'in logarithmic form: the logarithm, to the power\'s base, of the number equals the exponent',
  'base-e': 'with $e$ as the base',
  'exponential-model': 'as one exponential model, $ab^x$ or $ae^{kx}$, with every number in it worked out',
  'expanded-logarithms': 'as a sum of logarithms of single numbers and variables',
  'natural-log': 'with natural logarithms ($\\ln$) only',
  'evaluated-trig': 'as an exact value, with the trigonometric function evaluated',
  'single-trig-function': 'as a single trigonometric function',
  'no-trig-products': 'as a sum of single trigonometric functions, with no product or power of them left',
  'trig-product': 'as a product of trigonometric functions',
  'evaluated-logarithm': 'as a number, with the logarithm evaluated',
  translation: 'as the sentence reads: the same numbers and operations, in the order the words give them',
  degrees: 'in degrees, with the degree symbol',
  radians: 'in radians, not degrees',
};

export function describeAnswerForm(spec) {
  const { tokens, valid } = parseAnswerForm(spec);
  if (!valid) return '';
  const phrases = tokens.map((token) => {
    const denominator = token.match(DENOMINATOR_TOKEN);
    if (denominator) return `with a denominator of ${denominator[1]}`;
    const solved = token.match(SOLVED_TOKEN);
    if (solved) return `solved for ${solved[1]}, with ${solved[1]} alone on one side`;
    return FORM_PHRASES[token];
  });
  return `That value is right — now write it ${phrases.join(' ')}.`;
}

// The sentence for the right solution set written in the other notation
// (notationMismatch), in the style of describeAnswerForm's.
const NOTATION_FEEDBACK = {
  interval: 'That solution set is right — now write it in interval notation.',
  inequality: 'That solution set is right — now write it as an inequality.',
};

// The tokens whose shape is a number: a response refused under only these,
// written with no letter in it, is arithmetic the learner left undone.
const NUMBER_SHAPE_TOKENS = new Set(['decimal', 'fraction', 'percent', 'lowest-terms', 'mixed-number',
  'improper-fraction', 'fraction-or-mixed-number']);

/**
 * The feedback for a 'form' verdict on THIS response. A right value typed as
 * the unworked calculation — `(9+(-16))+4` for −3, `2.58\cdot1000` for 2,580 —
 * is told to finish the calculation ("enter just the result"), not to "write
 * it as a decimal", which reads as if the number were already there in the
 * wrong notation. Every other shape miss gets describeAnswerForm's sentence.
 *
 * On an inequality or interval the numbers read are its bounds
 * (boundNumbers), the same ones checkForm read: `p\ge\frac34+\frac16` and
 * `(-\infty,62+45]` are told to finish the calculation, while
 * `(-\infty,-\frac12]` against a `decimal` key is one number in the wrong
 * notation and keeps the token's sentence.
 */
export function describeFormFeedback(studentRaw, spec, answerRaw) {
  // The right solution set in the other notation is told which notation the
  // key uses, before any token's sentence: with no answerForm declared this
  // is the only 'form' a response can earn.
  const notation = answerRaw === undefined ? null : notationMismatch(studentRaw, answerRaw);
  if (notation) return NOTATION_FEEDBACK[notation];
  // The right degree count with its mark left off (degreeMarksRestored) is
  // told to add the mark, with or without `degrees` declared — with none,
  // describeAnswerForm has no sentence at all (Precalculus chapters 5–6
  // re-review, October 4, 2026).
  if (answerRaw !== undefined && degreeMarksRestored(studentRaw, answerRaw) !== null) {
    return `That number is right — now write it ${FORM_PHRASES.degrees}.`;
  }
  const { tokens, valid } = parseAnswerForm(spec);
  const general = describeAnswerForm(spec);
  if (!valid || !tokens.length) return general;
  if (tokens.includes('exponential-model') && answerRaw !== undefined && overPreciseModel(studentRaw, answerRaw)) {
    return 'That model is right — now round each number in it to the places the question asks for.';
  }
  // A response already in factored form that missed only completeness is
  // told to keep going — "now write it factored completely" would read as
  // if the factoring it did had not registered.
  // A factored response whose only miss is a numeral fraction left unreduced
  // inside a factor is told exactly that.
  if (tokens.every((token) => token === 'factored' || token === 'factored-completely')
    && !numeralFractionsReduced(studentRaw)) {
    const product = asFactoredProduct(studentRaw);
    if (product !== null && product.compound >= 1 && product.count >= 2) {
      return 'That value is right and it is factored — now reduce each fraction in it to lowest terms.';
    }
  }
  // …and one that left a sum unsimplified inside a factor is told to finish it.
  if (tokens.every((token) => token === 'factored' || token === 'factored-completely' || token === 'gcf-factored')
    && numeralFractionsReduced(studentRaw) && !factorSumsFinished(studentRaw)) {
    const product = asFactoredProduct(studentRaw);
    if (product !== null && product.compound >= 1 && product.count >= 2) {
      return 'That value is right and it is factored — now simplify inside each set of parentheses.';
    }
  }
  if (tokens.length === 1 && tokens[0] === 'factored-completely' && checkFormAsGraded(studentRaw, 'factored')) {
    return 'That value is right and it is factored — now keep factoring: one of its factors can still be factored further.';
  }
  if (!tokens.every((token) => NUMBER_SHAPE_TOKENS.has(token) || DENOMINATOR_TOKEN.test(token))) return general;
  const unworked = (piece) => {
    const written = bareLatex(bracketsAsParentheses(piece)).replace(/^[a-zA-Z]\s*=\s*/, '');
    const ink = written.replace(/\\(?:[tdc]?frac|cdot|times|div|sqrt|%)/g, ' ');
    if (/[a-zA-Z]/.test(ink)) return false;
    return !(asDecimal(written) !== null || asFraction(written) !== null || asMixedNumber(written) !== null
      || /^[+-]?(?:\d+(?:\.\d+)?|\.\d+)\s*\\%$/.test(written));
  };
  // A list's members, and a ± response's branches, are each one number.
  const numbers = labelledCoordinates(studentRaw) ?? boundNumbers(studentRaw, answerRaw) ?? plusMinusExpansion(studentRaw)
    ?? (commasAreAllGrouping(studentRaw) ? [studentRaw] : splitTopLevelCommas(studentRaw));
  if (!numbers.some(unworked)) return general;
  const rest = tokens.filter((token) => token !== 'decimal').map((token) => {
    const denominator = token.match(DENOMINATOR_TOKEN);
    return denominator ? `with a denominator of ${denominator[1]}` : FORM_PHRASES[token];
  });
  return `That value is right — now finish the calculation and enter just the result${rest.length ? ` ${rest.join(' ')}` : ''}.`;
}

/**
 * The tokens that describe how ONE number is written, and so distribute over
 * the bounds of an inequality or interval (boundNumbers) the way a list form
 * distributes over members.
 */
const BOUND_FORM_TOKENS = new Set([...NUMBER_SHAPE_TOKENS, 'scientific-notation']);
const distributesOverBounds = (token) => BOUND_FORM_TOKENS.has(token) || DENOMINATOR_TOKEN.test(token);

/**
 * The tokens that describe how one exact ENDPOINT is written. Read whole, a
 * solution set's punctuation broke them: `simplified-radical`'s like-radicals
 * scan split `[1-\sqrt2,1+\sqrt2]` at the top-level signs and read the two
 * endpoints' `\sqrt2` as uncombined like terms, so the key failed itself on a
 * closed interval or a union while the open interval (a tuple) passed
 * (Intermediate Algebra 9.8, October 3, 2026). They distribute over the
 * endpoints of an interval or union and the numeric sides of an inequality
 * whose variable side is one letter (solutionSetEndpoints).
 */
// `single-term` joined them in the Precalculus chapters 5–6 re-review
// (October 4, 2026): read whole, the range key `[0,\pi]` was no single term
// and failed itself, while `evaluated-trig radians` alone passed the unworked
// `[1-1,\pi]` and `[0,\frac{2\pi}{2}]`.
const ENDPOINT_FORM_TOKENS = new Set(['simplified-radical', 'no-like-terms', 'exact-radical', 'exact', 'single-term']);

/**
 * boundNumbers() for a SOLUTION SET only — an interval, a union, or an
 * inequality whose every variable side is a lone letter — or null. A side
 * like `x^2+\sqrt8` is an expression the endpoint tokens read whole.
 */
function solutionSetEndpoints(latex, answerRaw) {
  const text = preprocess(latex ?? '').replace(/\\left\s*|\\right\s*/g, '').trim();
  const sides = splitAtTopLevel(text, ORDER_RELATION);
  if (sides.length >= 2 && sides.some((side) => hasVariableLetter(side) && !/^[a-zA-Z]$/.test(side))) return null;
  return boundNumbers(latex, answerRaw);
}

// A written order relation, in every spelling MathLive or a keyboard gives.
// The letter boundary keeps `\left` and `\leftarrow` from reading as `\le`.
const ORDER_RELATION = /^(?:\\(?:leqslant|geqslant|leq|geq|le|ge|lt|gt)(?![a-zA-Z])|<=|>=|[<>≤≥])/;
const INFINITE_BOUND = /^[+-]?\s*\\infty$/;

/**
 * Split `text` wherever `separator` (a `^`-anchored regex) matches outside
 * every `{}`/`()`/`[]` group. A control word is stepped over whole, so a
 * separator can match one (`\le`, `\cup`) but never the tail of another.
 */
function splitAtTopLevel(text, separator, separators = null) {
  const parts = [];
  let depth = 0;
  let start = 0;
  let i = 0;
  while (i < text.length) {
    if (depth === 0) {
      const match = text.slice(i).match(separator);
      if (match) {
        separators?.push(match[0]);
        parts.push(text.slice(start, i).trim());
        i += match[0].length;
        start = i;
        continue;
      }
    }
    const char = text[i];
    if (char === '\\') {
      i += text.slice(i).match(/^\\(?:[a-zA-Z]+|[\s\S])?/)[0].length;
      continue;
    }
    if (char === '{' || char === '(' || char === '[') depth += 1;
    else if (char === '}' || char === ')' || char === ']') depth -= 1;
    i += 1;
  }
  parts.push(text.slice(start).trim());
  return parts;
}

/**
 * `(a,b]`-shaped: one bracket pair enclosing everything, holding two or more
 * top-level members — an interval's endpoints, or an ordered pair's or
 * triple's coordinates. null for anything else.
 */
function delimitedMembers(piece) {
  if (!/^[([]/.test(piece) || !/[)\]]$/.test(piece)) return null;
  let depth = 0;
  for (let i = 0; i < piece.length; i += 1) {
    const char = piece[i];
    if (char === '\\') { i += 1; continue; }
    if (char === '{' || char === '(' || char === '[') depth += 1;
    else if (char === '}' || char === ')' || char === ']') {
      depth -= 1;
      if (depth === 0 && i < piece.length - 1) return null;
    }
  }
  if (depth !== 0) return null;
  const members = splitAtTopLevel(piece.slice(1, -1), /^,/);
  return members.length >= 2 && members.every(Boolean) ? members : null;
}

/**
 * The NUMBERS an inequality or interval response writes, or null when it is
 * neither.
 *
 * A value form was checked against the whole response, so on an inequality
 * or interval key it could not be declared at all — `decimal` read
 * `(-\infty,107]` as no decimal and failed the key itself — and without one
 * the retype hole the value forms close for a bare-number key stayed open:
 * Elementary Algebra 2.7's `p\ge\frac{11}{12}` accepted `p\ge\frac34+\frac16`
 * and `(-\infty,107]` accepted `(-\infty,62+45]`, and EA 3.6's `s\ge4000000`
 * accepted the unworked `s\ge\frac{80000}{0.02}` (September 27, 2026). A value
 * form describes how ONE number is written, so — like a list form over its
 * members (listFormAccepted) — it distributes over the numbers written:
 *
 * - an INEQUALITY (`x<5`, `5>x`, `-2\le x<7`, `0.42>0.4`): every side with no
 *   variable letter. The variable side is not a number and is not checked.
 * - an INTERVAL, or a `\cup` of them: every finite endpoint. `\infty` and
 *   `-\infty` always pass; an endpoint is checked even when it holds a
 *   letter.
 * - an ORDERED PAIR or triple, the same shape: every coordinate. `decimal`
 *   always read a pair this way (`(-1,2(-1)-4)` is unworked); now every value
 *   form does, so EA 5.2's `(2,\frac{3}{2})` can declare `lowest-terms` and
 *   refuse `(2,1+\frac12)`. A coordinate meets a form exactly as a bare
 *   number would: `2` fails `fraction` as it always has, so a pair mixing an
 *   integer and a fraction declares `lowest-terms`, not `fraction`.
 *
 * An inequality or interval with no finite numeric bound (`y<-2x+3`,
 * `(-\infty,\infty)`) passes a value form vacuously.
 *
 * The bounded quantity of an ESTIMATE chain is exempt the way a variable side
 * is: on "between which two consecutive whole numbers does $\sqrt{38}$ lie",
 * keyed `6<\sqrt{38}<7`, the middle side is the given number, not a bound,
 * so `decimal` failed the key itself, and with no form declared the unworked
 * `\sqrt{36}<\sqrt{38}<\sqrt{49}` graded `correct` (Intermediate Algebra 8.1,
 * October 3, 2026). Given the key, a side that is the key's own variable-free
 * middle (estimateQuantity) is not checked; every other side still is.
 */
function boundNumbers(latex, answerRaw) {
  const text = preprocess(latex ?? '').replace(/\\left\s*|\\right\s*/g, '').trim();
  const sides = splitAtTopLevel(text, ORDER_RELATION);
  if (sides.length >= 2) {
    if (sides.some((side) => !side)) return null;
    const given = answerRaw === undefined ? null : estimateQuantity(answerRaw);
    return sides.filter((side) => !hasVariableLetter(side) && !INFINITE_BOUND.test(side)
      && !(given !== null && sameWrittenQuantity(side, given)));
  }
  const endpoints = splitAtTopLevel(text, /^\\cup(?![a-zA-Z])/).map(delimitedMembers);
  if (endpoints.some((pair) => pair === null)) return null;
  return endpoints.flat().filter((bound) => !INFINITE_BOUND.test(bound));
}

/**
 * The middle side of a three-sided key chain whose middle holds no variable
 * letter — `\sqrt{38}` in `6<\sqrt{38}<7`, `\sqrt[3]{71}` in
 * `4<\sqrt[3]{71}<5` — or null. A chain bounds its middle, so a variable-free
 * middle is the quantity the exercise gave.
 */
function estimateQuantity(answerRaw) {
  const text = preprocess(answerRaw ?? '').replace(/\\left\s*|\\right\s*/g, '').trim();
  const sides = splitAtTopLevel(text, ORDER_RELATION);
  if (sides.length !== 3 || sides.some((side) => !side) || hasVariableLetter(sides[1])) return null;
  return sides[1];
}

// The same quantity, compared structurally on the parse (spacing and brace
// spelling aside), never by value: `\sqrt{36}` is not a given `6`.
function sameWrittenQuantity(side, given) {
  try {
    const [a, b] = [side, given].map((text) => parseLatex(text));
    return a.isValid && b.isValid && a.isSame(b);
  } catch {
    return false;
  }
}

const LABELLED_MEMBER = /^([a-zA-Z])\s*=(?![=<>])\s*([\s\S]+)$/;

/**
 * The coordinates of a solution typed as labelled equations — `x=6, y=1`, or
 * `(x=6, y=1)` — or null. A system's solution is keyed as the ordered pair
 * `(6,1)`, and the labelled spelling, the one a learner naturally types,
 * graded 'incorrect' (Elementary Algebra 5.2, September 27, 2026).
 *
 * The grader is not told the system's variables, so any distinct single
 * letters are accepted and read in the order typed — except that `x`, `y`,
 * `z` are always put in that order, the order every Cartesian pair is keyed
 * in, so `y=1, x=6` is the same pair. A repeated letter (`x=2, x=3`, a
 * solution SET) is never a pair. `arity`, when known, reconciles
 * digit-grouping commas the way the list graders do (`x=1,500, y=2`).
 */
function labelledCoordinates(raw, arity) {
  const text = String(raw ?? '').replace(/\\left\s*|\\right\s*/g, '').trim();
  if (!text.includes('=')) return null;
  const parts = (text.startsWith('(') && delimitedMembers(text)) || splitTopLevelCommas(text);
  const readings = arity === undefined || parts.length === arity ? [parts] : groupedReadings(parts, arity);
  for (const reading of readings) {
    const labelled = reading.map((part) => part.trim().match(LABELLED_MEMBER));
    if (reading.length < 2 || labelled.some((match) => !match)) continue;
    const letters = labelled.map((match) => match[1]);
    if (new Set(letters).size !== letters.length) continue;
    const ordered = letters.every((letter) => 'xyz'.includes(letter))
      ? [...labelled].sort((a, b) => a[1].localeCompare(b[1]))
      : labelled;
    return ordered.map((match) => stripGroupingCommas(match[2].trim()));
  }
  return null;
}

/** The members of a key written as one parenthesized tuple, `(6,1)`, or null. */
function tupleKeyMembers(answerRaw) {
  const text = preprocess(answerRaw ?? '').replace(/\\left\s*|\\right\s*/g, '').trim();
  return text.startsWith('(') && text.endsWith(')') ? delimitedMembers(text) : null;
}

/* ---------------------------------------------------------------------------
 * Solution SETS in inequality and interval notation
 *
 * Intermediate Algebra 2.5–2.7 ask for a solution "in interval notation", and
 * a learner who typed the right set as an inequality — `x\le-0.5` for
 * `(-\infty,-0.5]`, `-1\le x<4` for `[-1,4)` — was told `incorrect`: the
 * engine compares an inequality and an interval as two unrelated objects
 * (September 27, 2026). Both notations are read here into the same set — a
 * list of intervals, each endpoint a value (±Infinity) and a closedness — so
 * the right set in the other notation grades `form` ("now write it in
 * interval notation" / "as an inequality") and a wrong set stays `incorrect`.
 *
 * The same reading decides an inequality against an inequality key. The
 * engine drops the variable from the first link of a chain — `-1\le x<4`
 * boxes as `And(LessEqual(-1,4), Less(x,4))` — so `-2\le x<4` graded
 * `correct` against `-1\le x<4`; the set comparison sees the lower bound.
 *
 * Only the writing the sections teach is read: ONE variable letter standing
 * alone on its side, every other side a number with no letter in it (so
 * `y\ge-2x+3` and `x+y\ge3` keep the engine's equation-style comparison), a
 * simple (`x<5`, `5>x`) or chained (`-2\le x<7`, `7>x\ge-2`, one direction)
 * inequality, `\lor`/`\text{or}` joining pieces into a union and
 * `\land`/`\text{and}` intersecting them. MathLive's inline shortcuts type
 * "or" and "and" as `\lor` and `\land`. Anything else returns null and grades
 * exactly as before.
 * ------------------------------------------------------------------------ */

const OR_CONNECTIVE = /^(?:\\(?:lor|vee)(?![a-zA-Z])|\\(?:text|textrm|mathrm|operatorname)\s*\{\s*or\s*\})/;
const AND_CONNECTIVE = /^(?:\\(?:land|wedge)(?![a-zA-Z])|\\(?:text|textrm|mathrm|operatorname)\s*\{\s*and\s*\})/;
const NEGATIVE_INFINITY = /^-\s*\\infty$/;
const POSITIVE_INFINITY = /^\+?\s*\\infty$/;

function relationKind(written) {
  if (/^(?:<|\\lt)$/.test(written)) return 'lt';
  if (/^(?:>|\\gt)$/.test(written)) return 'gt';
  if (/^(?:<=|≤|\\leq?|\\leqslant)$/.test(written)) return 'le';
  if (/^(?:>=|≥|\\geq?|\\geqslant)$/.test(written)) return 'ge';
  return null;
}
const FLIPPED_RELATION = { lt: 'gt', le: 'ge', gt: 'lt', ge: 'le' };

function setWriting(latex) {
  return preprocess(String(latex ?? '').replace(BOUND_CURRENCY, '')).replace(/\\left\s*|\\right\s*/g, '').trim();
}

/** A finite numeric endpoint, `{ text, value }`, or null. */
function finiteBound(text) {
  if (!text || hasVariableLetter(text) || /\\infty/.test(text)) return null;
  try {
    const expr = parseLatex(text);
    if (!expr.isValid) return null;
    const value = expr.N();
    if (!Number.isFinite(value.re) || Math.abs(value.im ?? 0) > SAMPLE_TOLERANCE) return null;
    return { text, value: value.re };
  } catch {
    return null;
  }
}

/** The intervals an interval-notation response writes (`(a,b]`, `\cup` of them), or null. */
function intervalNotationSet(latex) {
  const text = setWriting(latex);
  if (!text) return null;
  const intervals = [];
  for (const piece of splitAtTopLevel(text, /^\\cup(?![a-zA-Z])/)) {
    const members = delimitedMembers(piece);
    if (!members || members.length !== 2) return null;
    const lo = NEGATIVE_INFINITY.test(members[0]) ? { value: -Infinity } : finiteBound(members[0]);
    const hi = POSITIVE_INFINITY.test(members[1]) ? { value: Infinity } : finiteBound(members[1]);
    // An ordered pair `(6,1)` is not an interval: an interval's ends ascend.
    if (!lo || !hi || !(lo.value < hi.value)) return null;
    intervals.push({ lo, hi, loClosed: piece[0] === '[', hiClosed: piece.at(-1) === ']' });
  }
  return intervals;
}

/**
 * The variable side of a one-variable inequality: a letter, or a function
 * label standing for one. The source writes a range as `f(x)\ge k`, and
 * `f(x)\ge\frac{8}{11}` graded `incorrect` against `[\frac{8}{11},\infty)`
 * where `y\ge\frac{8}{11}` got the interval-notation nudge (Precalculus 3.2,
 * October 4, 2026). The label is compared as written, spaces aside, so
 * `f(x)` and `y` are different variables.
 */
const INEQUALITY_VARIABLE = /^(?:[a-zA-Z]|[a-zA-Z](?:_\{p+\})?\s*\(\s*[a-zA-Z]\s*\))$/;

/** `{ variable, intervals }` for a one-variable inequality response, or null. */
function inequalitySet(latex) {
  const text = setWriting(latex);
  if (!text) return null;
  let variable = null;
  const intervals = [];
  for (const disjunct of splitAtTopLevel(text, OR_CONNECTIVE)) {
    let lo = { value: -Infinity };
    let hi = { value: Infinity };
    let loClosed = false;
    let hiClosed = false;
    for (const conjunct of splitAtTopLevel(disjunct, AND_CONNECTIVE)) {
      const relations = [];
      const sides = splitAtTopLevel(conjunct, ORDER_RELATION, relations);
      if (sides.length < 2 || sides.length > 3 || sides.some((side) => !side)) return null;
      const at = sides.findIndex((side) => INEQUALITY_VARIABLE.test(side));
      if (at === -1 || (sides.length === 3 && at !== 1)) return null;
      const written = sides[at].replace(/\s+/g, '');
      if (variable !== null && written !== variable) return null;
      variable = written;
      const kinds = relations.map(relationKind);
      if (kinds.some((kind) => kind === null)) return null;
      if (kinds.length === 2 && (kinds[0] === 'lt' || kinds[0] === 'le') !== (kinds[1] === 'lt' || kinds[1] === 'le')) {
        return null; // `-1\le x>4` states no interval
      }
      for (let r = 0; r < kinds.length; r += 1) {
        const variableOnLeft = r === at;
        const kind = variableOnLeft ? kinds[r] : FLIPPED_RELATION[kinds[r]];
        // A strict bound at infinity bounds nothing — `-\infty<x<\infty`
        // is every real, the interval `(-\infty,\infty)` written as an
        // inequality, and graded `incorrect` rather than the notation's
        // `form` (Precalculus 4.2, October 4, 2026). A closed one, or one
        // on the wrong side, states no interval.
        const boundText = (variableOnLeft ? sides[r + 1] : sides[r]).trim();
        if (INFINITE_BOUND.test(boundText)) {
          const positive = POSITIVE_INFINITY.test(boundText);
          if ((kind === 'lt' && positive) || (kind === 'gt' && !positive)) continue;
          return null;
        }
        const bound = finiteBound(boundText);
        if (!bound) return null;
        if (kind === 'lt' || kind === 'le') {
          if (bound.value < hi.value) { hi = bound; hiClosed = kind === 'le'; } else if (bound.value === hi.value) hiClosed &&= kind === 'le';
        } else if (bound.value > lo.value) {
          lo = bound; loClosed = kind === 'ge';
        } else if (bound.value === lo.value) loClosed &&= kind === 'ge';
      }
    }
    if (!(lo.value < hi.value)) return null;
    intervals.push({ lo, hi, loClosed, hiClosed });
  }
  return variable === null ? null : { variable, intervals };
}

function sameEndpoint(a, b) {
  if (!Number.isFinite(a.value) || !Number.isFinite(b.value)) return a.value === b.value;
  if (Math.abs(a.value - b.value) > 1e-9 * Math.max(1, Math.abs(a.value))) return false;
  return equivalent(parseLatex(a.text), parseLatex(b.text));
}

/** Do two interval lists describe the same set? Pieces match in any order. */
function sameSolutionSet(left, right) {
  if (left.length !== right.length) return false;
  const unused = [...right];
  return left.every((interval) => {
    const match = unused.findIndex((other) => sameEndpoint(interval.lo, other.lo)
      && sameEndpoint(interval.hi, other.hi)
      && (!Number.isFinite(interval.lo.value) || interval.loClosed === other.loClosed)
      && (!Number.isFinite(interval.hi.value) || interval.hiClosed === other.hiClosed));
    if (match === -1) return false;
    unused.splice(match, 1);
    return true;
  });
}

/**
 * 'interval' when the response writes the key's interval-notation set as an
 * inequality, 'inequality' when it writes the key's inequality as intervals,
 * else null. describeFormFeedback names the notation from this.
 */
function notationMismatch(studentRaw, answerRaw) {
  const keyInequality = inequalitySet(answerRaw);
  if (keyInequality) {
    const typed = intervalNotationSet(studentRaw);
    return typed && sameSolutionSet(typed, keyInequality.intervals) ? 'inequality' : null;
  }
  const keyIntervals = intervalNotationSet(answerRaw);
  if (!keyIntervals) return null;
  const typed = inequalitySet(bracketsAsParentheses(studentRaw));
  return typed && sameSolutionSet(typed.intervals, keyIntervals) ? 'interval' : null;
}

/**
 * The verdict on a solution-set response, or null to grade as before: an
 * inequality against an inequality key is decided by its set (the variable
 * must match), then by the declared form; the right set in the other
 * notation is 'form'.
 */
function solutionSetVerdict(studentRaw, answerRaw, options) {
  const keyInequality = inequalitySet(answerRaw);
  if (keyInequality) {
    const typed = inequalitySet(bracketsAsParentheses(studentRaw));
    if (typed) {
      if (typed.variable !== keyInequality.variable || !sameSolutionSet(typed.intervals, keyInequality.intervals)) {
        return 'incorrect';
      }
      return checkFormAsGraded(bracketsAsParentheses(studentRaw), options.form, answerRaw) ? 'correct' : 'form';
    }
  }
  return notationMismatch(studentRaw, answerRaw) ? 'form' : null;
}

/* ---------------------------------------------------------------------------
 * Inequalities in two or more variables: the same HALF-PLANE
 *
 * `x\ge2y+6` against `x-2y\geq6` and `3y\ge2x-9` against
 * `y\geq\frac{2}{3}x-3` graded `incorrect` (Elementary Algebra knowledge check
 * 1–5, September 27, 2026): the engine compares two inequalities only when
 * they are written alike. Each side pair is read as `D > 0` or `D \ge 0`
 * (a `<`/`\le` relation negates its difference), and two inequalities are the
 * same when they share the strictness and one D is a POSITIVE constant
 * multiple of the other — sampled at points as numericallyEquivalent does, so
 * scaling both sides by a negative number must flip the relation to count.
 *
 * Only a key naming two or more variable letters is read this way: a
 * one-variable key is a solution set (inequalitySet), and reading `2q>-8` as
 * the half-line `q>-4` would let a "Solve" prompt be retyped as its answer.
 * The written shape an ask pins ("solved for y", "keep x+y on the left") is
 * the answerForm's to grade: `solved:y`, `line-standard-form`.
 * ------------------------------------------------------------------------ */

function linearRelation(latex) {
  const text = setWriting(latex);
  const relations = [];
  const sides = splitAtTopLevel(text, ORDER_RELATION, relations);
  if (sides.length !== 2 || sides.some((side) => !side)) return null;
  const kind = relationKind(relations[0]);
  if (!kind) return null;
  let left;
  let right;
  try {
    left = parseLatex(sides[0]);
    right = parseLatex(sides[1]);
  } catch {
    return null;
  }
  if (!left.isValid || !right.isValid) return null;
  const greater = kind === 'gt' || kind === 'ge';
  const letters = new Set(text.replace(/\\[a-zA-Z]+/g, ' ').match(/[a-zA-Z]/g) ?? []);
  return {
    difference: ce.box(['Subtract', greater ? left : right, greater ? right : left]),
    strict: kind === 'gt' || kind === 'lt',
    letters,
  };
}

function positiveMultiple(student, key) {
  const vars = [...new Set([...student.unknowns, ...key.unknowns])];
  let ratio = null;
  let agreed = 0;
  for (let i = 0; i < SAMPLE_POINTS.length && agreed < 5; i += 1) {
    const assignment = {};
    vars.forEach((name, j) => { assignment[name] = SAMPLE_POINTS[(i + 3 * j) % SAMPLE_POINTS.length] - 3; });
    const s = student.subs(assignment).N();
    const k = key.subs(assignment).N();
    if (![s.re, s.im, k.re, k.im].every(Number.isFinite) || Math.abs(s.im) > SAMPLE_TOLERANCE
      || Math.abs(k.im) > SAMPLE_TOLERANCE) continue;
    if (Math.abs(k.re) < 1e-9) {
      if (Math.abs(s.re) > 1e-9) return false;
      continue;
    }
    const r = s.re / k.re;
    if (ratio === null) ratio = r;
    else if (Math.abs(r - ratio) > 1e-9 * Math.max(1, Math.abs(ratio))) return false;
    agreed += 1;
  }
  return agreed >= 3 && ratio > 0;
}

/** The verdict on an inequality against a two-or-more-variable inequality key, or null. */
function halfPlaneVerdict(studentRaw, answerRaw, options) {
  const key = linearRelation(answerRaw);
  if (!key || key.letters.size < 2) return null;
  const typed = linearRelation(bracketsAsParentheses(studentRaw));
  if (!typed) return null;
  let same;
  try {
    same = typed.strict === key.strict && positiveMultiple(typed.difference, key.difference);
  } catch {
    same = false;
  }
  if (!same) return 'incorrect';
  return checkFormAsGraded(bracketsAsParentheses(studentRaw), options.form, answerRaw) ? 'correct' : 'form';
}

/* ---------------------------------------------------------------------------
 * Plus-or-minus responses
 *
 * Chapter 10 of Elementary Algebra solves quadratics by the Square Root
 * Property, completing the square, and the Quadratic Formula, and writes
 * every pair of solutions with ±: `x=\pm4`, `x=-4\pm3\sqrt{3}`,
 * `x=\frac{-3\pm\sqrt{201}}{8}`. A learner who types them that way meant the
 * two-member set the key lists, and graded `incorrect` (the engine reads
 * `\pm4` as `PlusMinus(0,4)` and a ± inside a fraction as a parse error).
 * MathLive types ± as `\pm` (inline shortcut `+-`, the shifted minus key of
 * the virtual keyboard); `\mp`, `±`, `∓` are read the same way.
 *
 * Each comma-separated member holding exactly one ± becomes its minus and
 * plus branches (a `+` left unary — after `=`, an opening bracket, or at the
 * start — is dropped, so `x=\pm4` reads `x=-4` and `x=4`), and the expanded
 * list is graded against a list key of the same size AS A SET: the ± states
 * no order, so an ordered key's order is not required of it. The key's
 * answerForm reaches each expanded member exactly as it would a typed list.
 * A member with two ± is not expanded unless they sit in different
 * coordinates of a point (independentCoordinateSigns); a ± response against
 * any other key is 'incorrect'.
 * ------------------------------------------------------------------------ */

const PLUS_MINUS = /\\pm(?![a-zA-Z])|\\mp(?![a-zA-Z])|±|∓/g;

// A point with a ± in each of two or three coordinates, `(\pm3,\pm4)`, names
// every sign combination — the four vertices the source writes that way —
// and graded `incorrect` against the four-point key (Intermediate Algebra
// chapters 11–12 re-review, October 4, 2026). Expanded as the Cartesian
// product of its signs, one ± per coordinate and `\pm` only: a `\mp` beside
// a `\pm` pairs the signs, which this reading would get wrong, so that
// member is still not expanded. A key listing only correlated points
// (`(2,3),(-2,-3)`) has fewer members than the product and still refuses it.
function independentCoordinateSigns(member, marks) {
  if (marks.length > 3 || marks.some((mark) => mark === '\\mp' || mark === '∓')) return false;
  const point = member.replace(/\\left\s*|\\right\s*/g, '').trim().match(/^\((.*)\)$/s);
  if (!point) return false;
  const coordinates = splitTopLevelCommas(point[1]);
  return coordinates.length >= 2
    && coordinates.every((coordinate) => (coordinate.match(PLUS_MINUS) ?? []).length <= 1);
}

function plusMinusBranches(member) {
  const marks = member.match(PLUS_MINUS) ?? [];
  if (marks.length === 0) return [member];
  if (marks.length > 1) {
    if (!independentCoordinateSigns(member, marks)) return null;
    return firstSignBranches(member, marks[0]).flatMap(plusMinusBranches);
  }
  return firstSignBranches(member, marks[0]);
}

function firstSignBranches(member, mark) {
  const at = member.search(PLUS_MINUS);
  const before = member.slice(0, at);
  const after = member.slice(at + mark.length).replace(/^\s*\{\s*\}/, '');
  const plus = /(?:^|[=({[,<>])\s*$/.test(before) ? '' : '+';
  return [`${before}-${after}`, `${before}${plus}${after}`];
}

/** The members a response with a ± in it stands for, or null when it has none (or two in one member, outside a point's coordinates). */
function plusMinusExpansion(raw) {
  const text = String(raw ?? '');
  if (!text.match(PLUS_MINUS)) return null;
  const expanded = [];
  for (const member of splitTopLevelCommas(text)) {
    const branches = plusMinusBranches(member);
    if (!branches) return null;
    expanded.push(...branches);
  }
  return expanded;
}

function checkFormToken(studentRaw, token, answerRaw) {
  const denominator = token.match(DENOMINATOR_TOKEN);
  if (denominator) {
    const fraction = asFraction(studentRaw);
    return fraction !== null && fraction.denominator === Number(denominator[1]);
  }
  const solved = token.match(SOLVED_TOKEN);
  if (solved) return writtenSolvedFor(studentRaw, solved[1]);
  return FORM_PREDICATES[token](studentRaw, answerRaw);
}

/**
 * Is `studentRaw` written in every form its exercise requires? Value equality
 * is checked separately — this only reads the shape. A value form on an
 * inequality or interval is required of each number it bounds with
 * (boundNumbers); every other token reads the whole response.
 */
export function checkForm(studentRaw, spec, answerRaw) {
  const { tokens, valid } = parseAnswerForm(spec);
  if (!valid) return true;
  // `solved:<v>` with other tokens: the formula must be solved for v, and the
  // other tokens describe the side v equals — `a=\frac{b}{bc-1}` under
  // `solved:a single-fraction reduced-fraction` reads `\frac{b}{bc-1}`, so
  // `a=\frac{2b}{2bc-2}` and `a=\frac{1}{c-\frac1b}` are `form` (Intermediate
  // Algebra 7.4, October 3, 2026). Read whole, the equation was never a single
  // fraction, so the key itself failed and `solved:` stood alone, passing an
  // unfinished right side.
  const solvedToken = tokens.find((token) => SOLVED_TOKEN.test(token));
  if (solvedToken && tokens.length > 1) {
    const variable = solvedToken.match(SOLVED_TOKEN)[1];
    const side = solvedForSide(studentRaw, variable);
    if (side === null) return false;
    const keySide = solvedForSide(answerRaw ?? '', variable) ?? answerRaw;
    // An equation form (`slope-intercept-form`) still reads the whole equation.
    const whole = tokens.filter((token) => token !== solvedToken && EQUATION_FORM_TOKENS.has(token));
    const onSide = tokens.filter((token) => token !== solvedToken && !EQUATION_FORM_TOKENS.has(token));
    return (whole.length === 0 || checkForm(studentRaw, whole.join(' '), answerRaw))
      && (onSide.length === 0 || checkForm(side, onSide.join(' '), keySide));
  }
  const bounds = tokens.some(distributesOverBounds) ? boundNumbers(studentRaw, answerRaw) : null;
  // A SHAPE token on an ordered-pair or triple key describes each coordinate,
  // as a value form already does through boundNumbers: read whole, the
  // polynomial key `(15x+1,15x-9,15x^2-7x-2)` was no sum and failed
  // `expanded` against itself, while `polynomial` passed the unworked
  // `(3(5x+1)-2,5(3x-2)+1,(3x-2)(5x+1))` (Intermediate Algebra 10.1, October
  // 3, 2026). Coordinate i is checked against the key's coordinate i, and
  // only when the response is a tuple of the key's arity; an equation form or
  // `solved:` still reads the whole writing.
  const keyMembers = answerRaw === undefined ? null : tupleKeyMembers(answerRaw);
  const studentMembers = keyMembers ? tupleKeyMembers(studentRaw) : null;
  const coordinates = studentMembers?.length === keyMembers?.length ? studentMembers : null;
  const perCoordinate = (token) => coordinates !== null && !distributesOverBounds(token)
    && !EQUATION_FORM_TOKENS.has(token) && !SOLVED_TOKEN.test(token);
  const endpoints = coordinates === null && tokens.some((token) => ENDPOINT_FORM_TOKENS.has(token))
    ? solutionSetEndpoints(studentRaw, answerRaw) : null;
  return tokens.every((token) => {
    if (bounds !== null && distributesOverBounds(token)) {
      return bounds.every((bound) => checkFormToken(bound, token, answerRaw));
    }
    if (endpoints !== null && ENDPOINT_FORM_TOKENS.has(token)) {
      return endpoints.every((bound) => checkFormToken(bound, token, answerRaw));
    }
    if (perCoordinate(token)) {
      // A coordinate the key itself rounds to a decimal is a number, not a
      // shape: the polar key `(2\sqrt{5},0.464)` failed `simplified-radical`
      // against itself for its angle, so no token held the radius simplified
      // (Precalculus chapters 7–8 re-review, October 5, 2026). Its place
      // takes a bare number; the value grader judges the rounding.
      const roundedPlace = (member, i) => /\./.test(keyMembers[i])
        && PLAIN_NUMBER_KEY.test(preprocess(keyMembers[i]).trim()) && PLAIN_NUMBER_KEY.test(preprocess(member).trim());
      return coordinates.every((member, i) => roundedPlace(member, i) || checkFormToken(member, token, keyMembers[i]));
    }
    return checkFormToken(studentRaw, token, answerRaw);
  });
}

/**
 * Read a response written in function notation. `f(x)` cannot be unwrapped
 * from the parse: it boxes as `Multiply(f, x)` (or as an unknown function
 * application for a capital name), so a learner answering a prompt phrased
 * in function notation ("If $f(x)$ is a linear function…") with `f(x)=-7x+3`
 * was graded incorrect against the authored `y=-7x+3`. The application is
 * read off the writing — one letter applied to one letter at the start,
 * MathLive's smart fences (`f\left(x\right)`) included — two ways:
 *
 * - A LABEL, `f(x)=RHS` with no further `=`: stripped, so the value that
 *   follows is graded; asVariableEquation() then unwraps a `y=`-labelled
 *   string on the other side as it always has. Only when no further `=`
 *   remains, so a genuine equation response is never half-eaten.
 * - An OUTPUT QUANTITY inside an equation — `f(x)-4=-\tfrac12(x+1)`, the
 *   point-slope shape a function-notation prompt invites: read as `y`, the
 *   variable those answers are authored in. Only when the REMAINDER of the
 *   response writes no `y` of its own and the argument is not `y` itself, so
 *   the reading can never collide with a meaning the response already gave
 *   `y` — the application being replaced does not count against itself, or a
 *   learner naming their function `y` (`y(t)-4=…`) would be refused the very
 *   rewrite that reads their notation.
 *
 * Applied to the student and the authored answer alike, so grading an answer
 * against its own text stays reflexive — the invariant self-grading
 * (tools/verify/verify-section.mjs) relies on.
 */
/**
 * The name may carry the `_{p…}` subscript foldPrimes() writes for a prime —
 * chapter 12's derivative asks invite `f'(x)=2x+3` (MathLive: `f^{\prime}(x)=`),
 * which folds to `f_{p}(x)=…` before this reads it — and the argument may be
 * a numeral (`f'(3)=6`, `f(2)=5`) for the LABEL reading only: an application
 * at a number is a value, never the output quantity `y` of an equation.
 */
// `f^{-1}(x)` is an application too — an inverse-formula ask answered in
// the notation the question used.
const FUNCTION_APPLICATION_RE = /^[a-zA-Z](?:_\{p+\})?(?:\^\{-1\})?\s*(?:\\left\s*)?\(\s*([a-zA-Z]|-?\d+(?:\.\d+)?)\s*(?:\\right\s*)?\)\s*/;
/** A written Leibniz label, `\frac{dy}{dx}=…` — stripped the way `f'(x)=` is. */
const LEIBNIZ_LABEL_RE = /^\\[tdc]?frac\s*\{\s*d[a-zA-Z]?\s*\}\s*\{\s*d[a-zA-Z]\s*\}\s*=(?![=<>])/;

/**
 * Does the writing give `y` a meaning of its own? Variables here are single
 * letters, so any `y` outside a command name counts — including one inside
 * an implicit product (`xy`), which a letter-boundary regex misses. Command
 * names are stripped whole, and over-detecting (a `y` inside `\text{…}`)
 * merely refuses the rewrite — the safe direction: the response grades as
 * written.
 */
const writesY = (latex) => latex.replace(/\\[a-zA-Z]+/g, ' ').includes('y');

function readFunctionNotation(latex) {
  const leibniz = latex.match(LEIBNIZ_LABEL_RE);
  if (leibniz && !latex.slice(leibniz[0].length).includes('=')) {
    return latex.slice(leibniz[0].length).trim();
  }
  const application = latex.match(FUNCTION_APPLICATION_RE);
  if (!application) return latex;
  const rest = latex.slice(application[0].length);
  if (/^=(?![=<>])/.test(rest) && !rest.slice(1).includes('=')) {
    return rest.slice(1).trim();
  }
  if (/^[a-zA-Z]$/.test(application[1]) && rest.includes('=') && application[1] !== 'y' && !writesY(rest)) {
    return `y${rest}`;
  }
  return latex;
}

/**
 * A label whose argument is an expression — `g(m^2)=4m^2-7`, `f(x+2)=…`,
 * `h(f(-2))=…` — or which is itself an expression of applications —
 * `f(x)+f(2)=x^2+4`, `-f(x)=…`, `f(x)\cdot g(x)=…`: the quantity the ask
 * named ("find $g(m^2)$", "find $f(x)+f(2)$"), written before the answer
 * the way the book's worked examples write it. FUNCTION_APPLICATION_RE reads
 * only a letter or numeral argument, so these graded `incorrect` against a
 * right key (Intermediate Algebra 3.5, September 28, 2026). Stripped only
 * when the KEY writes no `=` (a key that is an equation — a polar
 * `r(1+\cos\theta)=5`, a translation `x(x+2)=15` — is compared as the
 * equation it is), when the response has exactly one `=` and no order
 * relation, and when the left side is nothing but applications joined by
 * `+`, `-`, `\cdot`, `\times` (one leading sign allowed) — `f(x)-4=…` keeps
 * its output-quantity reading. A name that appears inside its own argument
 * is a product, not an application (`x(x+2)=15`), and is left alone. A
 * single application at a letter or numeral is left to readFunctionNotation,
 * which already reads it. Not read: a quotient of applications (the
 * difference quotient `\frac{f(x+h)-f(x)}{h}=…`) and a coefficient
 * (`2f(x)=…`).
 */
// A combined function's name, `(f+g)`, `(f-g)`, `(f\cdot g)`, `(fg)`,
// `(f\circ g)`, `(\frac{f}{g})`, `(f/g)`, then the argument's opening
// parenthesis: the label the books print on every function-arithmetic answer
// (`(f+g)(x)=3x^2-6x-3`, `(f-g)(-2)=17`), which graded `incorrect` against a
// right key (Intermediate Algebra 5.1, October 3, 2026). Groups 1–2 (or 3–4
// for the fraction) are the two letters.
const COMBINED_FUNCTION_NAME_RE = /^\(\s*(?:([a-zA-Z])\s*(?:[+-]|\\cdot(?![a-zA-Z])|\\times(?![a-zA-Z])|\\circ(?![a-zA-Z])|\/)?\s*([a-zA-Z])|\\frac\{([a-zA-Z])\}\{([a-zA-Z])\})\s*\)\s*\(/;

/**
 * A CHAIN of two labels on a bare key — `y=f(x)=\frac{\sqrt[3]{x}}{2}`, the
 * source's own answer shape for "find a formula", or `f(x)=y=…` — read as the
 * function label alone, which the readers below already strip. The chain
 * graded `incorrect` (Precalculus 1.1, October 4, 2026). Exactly one letter
 * label and one function application, the letter neither the application's
 * argument nor written in the value: a letter on its own right side is an
 * equation, not a label (Intermediate Algebra chapters 11–12 re-review).
 */
const CHAIN_LETTER_LABEL = /^\s*([a-zA-Z])\s*=(?![=<>])/;
const CHAIN_APPLICATION_LABEL = /^\s*([a-zA-Z](?:_\{p+\})?(?:\^\{-1\})?\s*\(\s*([a-zA-Z])\s*\))\s*=(?![=<>])/;
function readLabelChain(latex, answerRaw) {
  if (answerRaw == null || preprocess(String(answerRaw)).includes('=')) return latex;
  const text = latex.replace(/\\(?:left|right)\s*/g, '');
  const letterFirst = text.match(CHAIN_LETTER_LABEL);
  const applicationAfter = letterFirst && text.slice(letterFirst[0].length).match(CHAIN_APPLICATION_LABEL);
  const applicationFirst = text.match(CHAIN_APPLICATION_LABEL);
  const letterAfter = applicationFirst && text.slice(applicationFirst[0].length).match(CHAIN_LETTER_LABEL);
  let letter;
  let application;
  let value;
  if (applicationAfter) {
    [letter, application] = [letterFirst[1], applicationAfter];
    value = text.slice(letterFirst[0].length + applicationAfter[0].length);
  } else if (letterAfter) {
    [letter, application] = [letterAfter[1], applicationFirst];
    value = text.slice(applicationFirst[0].length + letterAfter[0].length);
  } else {
    return latex;
  }
  if (!value.trim() || value.includes('=') || letter === application[2]) return latex;
  if (value.replace(/\\[a-zA-Z]+/g, ' ').includes(letter)) return latex;
  return `${application[1]}=${value}`;
}

function readExpressionLabel(latex, answerRaw) {
  if (answerRaw == null || preprocess(String(answerRaw)).includes('=')) return latex;
  const text = latex.replace(/\\(?:left|right)\s*/g, '');
  if ((text.match(/=/g) || []).length !== 1 || /[<>]|\\[lg]eq?(?![a-zA-Z])|\\ne(?![a-zA-Z])/.test(text)) return latex;
  const at = text.indexOf('=');
  const lhs = text.slice(0, at).trim();
  let i = 0;
  let applications = 0;
  let simple = true;
  if (lhs[i] === '-' || lhs[i] === '+') {
    i += 1;
    simple = false;
  }
  for (;;) {
    while (lhs[i] === ' ') i += 1;
    const name = lhs.slice(i).match(/^([a-zA-Z])(?:_\{p+\})?(?:\^\{-1\})?\s*\(/)
      || lhs.slice(i).match(COMBINED_FUNCTION_NAME_RE);
    if (!name) return latex;
    if (name.length > 2) simple = false;
    const open = i + name[0].length - 1;
    let depth = 0;
    let close = -1;
    for (let j = open; j < lhs.length; j += 1) {
      if (lhs[j] === '(') depth += 1;
      else if (lhs[j] === ')' && (depth -= 1) === 0) { close = j; break; }
    }
    if (close === -1) return latex;
    const argument = lhs.slice(open + 1, close).trim();
    const letters = name.length > 2 ? [name[1] || name[3], name[2] || name[4]] : [name[1]];
    if (!argument || letters.some((l) => argument.replace(/\\[a-zA-Z]+/g, ' ').includes(l))) return latex;
    if (!/^(?:[a-zA-Z]|-?\d+(?:\.\d+)?)$/.test(argument)) simple = false;
    applications += 1;
    i = close + 1;
    while (lhs[i] === ' ') i += 1;
    if (i >= lhs.length) break;
    const operator = lhs.slice(i).match(/^(?:[+-]|\\cdot(?![a-zA-Z])|\\times(?![a-zA-Z]))/);
    if (!operator) return latex;
    i += operator[0].length;
  }
  if (applications === 1 && simple) return latex;
  const value = text.slice(at + 1).trim();
  return value || latex;
}

/**
 * The equation reading of a LABELLED response, for the form check only.
 * `f(x)=5(x-3)` is the label reading `5(x-3)` for value grading — but as
 * writing it is also the collapsed-origin point-slope equation `y=5(x-3)`,
 * and an equation-shaped form predicate must be shown the equation, or a
 * correct value written in the very shape the ask names reports 'form'.
 * null when the response is not a labelled equation, or already gives `y` a
 * meaning of its own (as the argument or in the value).
 */
function functionLabelEquation(latex) {
  const application = latex.match(FUNCTION_APPLICATION_RE);
  if (!application || !/^[a-zA-Z]$/.test(application[1])) return null;
  const rest = latex.slice(application[0].length);
  if (!/^=(?![=<>])/.test(rest) || rest.slice(1).includes('=')) return null;
  if (application[1] === 'y' || writesY(rest)) return null;
  return `y${rest}`;
}

/**
 * The form check exactly as checkAnswer() applies it: on the
 * function-notation-normalized writing, a labelled value read as its value,
 * and the labelled-equation reading accepted too for a form that reads
 * equations. Exported so the content lint's cheap shape pre-filter can
 * never disagree with the grader about the same text.
 */
function formAcceptedAsWritten(written, spec, answerRaw) {
  const preprocessed = readExpressionLabel(readLabelChain(written, answerRaw), answerRaw);
  // A labelled VALUE is judged on the value alone. The whole equation was
  // read first, and a value form has no reading of an `=`: `no-like-terms`
  // and `simplified-radical` took `y=12q^2+9q^2`, `a_n=…` and
  // `y=8\sqrt2-9\sqrt2` as one unfinished term, so the printed prompt behind
  // any label graded `correct` where the bare prompt graded `form`
  // (Intermediate Algebra chapters 11–12 re-review, October 4, 2026). The
  // equation readings below stay for the forms that read equations. Read
  // after the function label is gone, so `f(x)=x` is never the trailing
  // label `=x` on the value `f(x)`.
  const normalized = readFunctionNotation(preprocessed);
  const value = variableLabelValue(normalized, spec);
  if (value !== null) return checkForm(value, spec, answerRaw);
  if (checkForm(normalized, spec, answerRaw)) return true;
  const equation = functionLabelEquation(preprocessed);
  return equation !== null && readsEquations(spec) && checkForm(equation, spec, answerRaw);
}

// Forms whose shape IS an equation: a `y=` on the response is part of what
// they read, never a label to strip.
const EQUATION_FORM_TOKENS = new Set([
  'point-slope-form', 'slope-intercept-form', 'vertex-form', 'conic-standard-form',
  'parabola-standard-form', 'circle-standard-form', 'line-standard-form', 'exponential-form', 'logarithmic-form', 'translation',
]);

/** Does the spec name a form that reads an equation (a named shape or `solved:`)? */
function readsEquations(spec) {
  const { tokens, valid } = parseAnswerForm(spec);
  return valid && tokens.some((token) => EQUATION_FORM_TOKENS.has(token) || SOLVED_TOKEN.test(token));
}

// The label may carry a subscript, `a_n=-3n+35`, `a_{n}=…`, `S_n=…`,
// `a_1=5`: a sequence's term or sum written before its formula the way the
// book's chapter 12 answers write it. The value grader already reads `a_n`
// as one variable, but the form check saw the whole equation, so the right
// formula graded `form` under `expanded`/`distributed` — and a key written
// `a_n=…` failed its own form (Intermediate Algebra chapters 11–12
// re-review, October 4, 2026). Only a letter or numeral index: a recursive
// formula's `a_{n-1}` is never a label.
// A lowercase Greek letter is a one-letter label too: a law-of-sines stem
// names its angles α, β, γ, and `\alpha=27.7^\circ` — value-graded as 27.7°
// like `A=27.7^\circ` — graded `form` under `degrees`, its label read as part
// of the writing (Precalculus chapters 7–8 re-review, October 5, 2026). Never
// `\pi`, which is a number, not a name.
const GREEK_LABEL_LETTER = String.raw`\\(?:alpha|beta|gamma|delta|epsilon|varepsilon|zeta|eta|theta|vartheta|iota|kappa|lambda|mu|nu|xi|rho|sigma|tau|upsilon|phi|varphi|chi|psi|omega)(?![a-zA-Z])`;
const LABEL_LETTER = String.raw`(?:[a-zA-Z]|${GREEK_LABEL_LETTER})`;
const SUBSCRIPTED_LETTER = String.raw`${LABEL_LETTER}(?:_(?:[a-zA-Z0-9]|\{\s*[a-zA-Z0-9]+\s*\}))?`;
const LEADING_VARIABLE_LABEL = new RegExp(String.raw`^\s*${SUBSCRIPTED_LETTER}\s*=(?![=<>])`);
const TRAILING_VARIABLE_LABEL = new RegExp(String.raw`(?<![=<>!])=\s*${SUBSCRIPTED_LETTER}\s*$`);

/**
 * The value side of a one-letter LABEL, `x=13`, for a form that describes a
 * value. The value grader already reads `x=13` as 13, so a Solve item keyed
 * `13` with `decimal` declared graded the learner's natural `x=13` as `form`
 * ("now write it as a decimal") — the form check read the raw writing. Only
 * the label is stripped: `x=7+6` is still the unevaluated `7+6`. The label
 * may trail, `-7=p`, the way the book's own worked examples end ("−3 = y").
 * null when there is no label, a further `=` follows, or the form reads
 * equations.
 */
function variableLabelValue(preprocessed, spec) {
  let rest;
  const label = preprocessed.match(LEADING_VARIABLE_LABEL);
  if (label) {
    rest = preprocessed.slice(label[0].length);
  } else {
    const trailing = preprocessed.match(TRAILING_VARIABLE_LABEL);
    if (!trailing) return null;
    rest = preprocessed.slice(0, trailing.index);
  }
  if (!rest.trim() || rest.includes('=')) return null;
  const { tokens, valid } = parseAnswerForm(spec);
  if (!valid || tokens.some((token) => EQUATION_FORM_TOKENS.has(token) || SOLVED_TOKEN.test(token))) return null;
  return rest;
}

export function checkFormAsGraded(raw, spec, answerRaw) {
  return formAcceptedAsWritten(preprocess(raw ?? ''), spec, answerRaw);
}

/**
 * The form check for a LIST answer, applied to each member.
 *
 * Both list paths return their verdict before the scalar path's form check
 * ever runs, so a declared `answerForm` was silently ignored the moment an
 * answer held a top-level comma. That is the retype hole the tokens exist to
 * close, reopened by punctuation: "Find $\cos t$ and $\sin t$, separated by a
 * comma" keyed `\frac{\sqrt3}{2},\frac12` accepted the printed
 * `\cos\frac{\pi}{6},\sin\frac{\pi}{6}` with `evaluated-trig` declared,
 * because the list grader never asked. tools/verify/verify-replay.mjs documented the
 * gap and skipped the whole class rather than reporting it, so 451 list-keyed
 * fillins sat outside the corpus gate.
 *
 * A form describes how ONE value is written, so the requirement distributes
 * over the members: every member of a `decimal` list is a decimal, every
 * member of an `evaluated-trig` list has no trigonometric function left.
 *
 * The members are the ones the VALUE grader used — split from the raw
 * response and then reconciled against the authored member count by
 * mergeGroupedNumbers, exactly as checkOrderedList/checkUnordered do it.
 * Splitting on raw commas alone was not the same reading: both value graders
 * rejoin a digit-grouped member ("1,536"), so `90^\circ, 1,536^\circ` graded
 * as the two members it is, while the form check saw three — the orphan "1"
 * being no degree measure at all. A fully correct answer was demoted to
 * `form` by the presence of a form token, and only ever for members that
 * reach 1,000. One splitting rule, threaded from the same answer, is the only
 * way the two cannot drift.
 */
function listFormAccepted(studentRaw, members, spec) {
  if (!members || members.length < 2) return checkFormAsGraded(studentRaw, spec);
  return members.every((member) => checkFormAsGraded(member, spec));
}

/**
 * A list verdict, with the declared form applied. Only a `correct` value can
 * become `form`: the same ordering the scalar path uses, so a learner whose
 * value is wrong is never told to rewrite it. The members checked are the
 * exact reading the value grader accepted — threading them from the grader
 * is the only way the two splits cannot drift.
 */
const withListForm = (result, studentRaw, spec) => (
  result.verdict === 'correct' && !listFormAccepted(studentRaw, result.members, spec)
    ? 'form'
    : result.verdict
);

// A key that is one bare number — the answer to a word problem, a count, a
// money amount — is the only place a currency sign or a unit word can mean
// "the same number, labelled". Anywhere else a letter is a variable.
const PLAIN_NUMBER_KEY = /^-?(?:\d+(?:\.\d*)?|\.\d+)$/;

// A leading dollar sign, before or after a minus: `\$237,186`, `-\$5`.
const CURRENCY_PREFIX = /^\s*(-?)\s*\\\$\s*/;
// A leading approximation sign, optionally behind a one-letter label:
// `\approx3.32`, `≈3.32`, `x\approx3.32`. A learner rounding a root to the
// hundredths the ask names types the sign the book prints beside the result,
// and it parsed 'invalid' (Intermediate Algebra 8.1, October 3, 2026). Read,
// like the `\$`, only on a bare-number key and only at the very start: the
// bare sign goes, a label keeps its `=` reading, and what follows is graded
// as typed — `\approx3.31` is still wrong, and a sign anywhere else
// (`3.32\approx`, `2\approx3.32`) is no reading of the answer at all.
//
// Since the Precalculus chapters 7–8 re-review (October 5, 2026) the label
// may be a Greek letter (`\alpha\approx27.7`), and the sign is read the same
// way on a key that is a bare number with a degree mark (`27.7^\circ`, a
// rounded angle) and at the start of each member of a list whose members are
// all such numbers (`\alpha\approx27.7^\circ,\beta\approx40.5^\circ`).
const APPROX_SIGN = String.raw`\s*(?:(${LABEL_LETTER})\s*)?(?:\\approx(?![a-zA-Z])|≈)\s*`;
const APPROX_PREFIX = new RegExp(String.raw`^${APPROX_SIGN}`);
const APPROX_MEMBER_PREFIX = new RegExp(String.raw`(^|,)${APPROX_SIGN}`, 'g');
/**
 * Is every top-level member of the key a bare number, with or without a
 * degree mark — so a leading `\approx` on a response member is a rounding
 * sign, never part of a value? A lone bare number takes the older scalar path.
 */
function approximableMembers(keyText) {
  const members = splitTopLevelCommas(keyText);
  return members.length > 0 && members.every((member) => {
    const text = member.trim();
    const head = text.match(DEGREE_MARK_AT_END);
    return PLAIN_NUMBER_KEY.test(head ? head[1].trim() : text);
  });
}
// A dollar sign directly before a numeral (or a minus and a numeral) anywhere
// in an inequality or interval response: `s\geq\$4,000,000`, `(-\infty,\$5]`.
const BOUND_CURRENCY = /\\\$\s*(?=-?\s*(?:\d|\.\d))/g;

// A number followed only by unit words: `140 miles`, `140\text{ miles}`,
// `74\mathrm{ft}`, `36ft^2`. Bare letters must run to two or more, so a
// single trailing letter (`140x`) is never read as a unit. A degree mark
// (`^\circ`, `°`, or MathLive's degree key `\degree`) counts too, with an optional `F`/`C` after it: `-6^\circ` or `96^\circ F`
// on a temperature key is the right number labelled, not a wrong one.
const UNIT_WORDS = String.raw`((?:\\(?:text|textrm|mathrm|operatorname)\s*\{[^{}]*\}|[A-Za-z]{2,}|\^\{?[23]\}?|(?:\^\s*\{?\s*\\circ\s*\}?|\\degree\b|°)(?:\s*[CF](?![A-Za-z]))?|\s)+)$`;
const UNIT_TAIL = new RegExp(String.raw`^(-?(?:\d+(?:\.\d*)?|\.\d+))\s*${UNIT_WORDS}`);

// The same unit words after a numeral fraction or mixed number, `\frac{1}{6}
// \text{ hours}`, `2\frac{1}{2}\text{ hours}` — read off the writing before
// preprocess() groups a mixed number that a letter follows. A key that is one
// numeral fraction or mixed number is a quantity exactly as a bare-number key
// is, and its right value with a unit graded 'incorrect' where `0.5\text{
// hours}` reported 'unit' (Elementary Algebra knowledge check 1–5, September
// 27, 2026).
const FRACTION_UNIT_TAIL = new RegExp(String.raw`^(-?\s*(?:\d+\s*)?\\[tdc]?frac\s*(?:\{\s*\d+\s*\}|\d)\s*(?:\{\s*\d+\s*\}|\d))\s*${UNIT_WORDS}`);

/**
 * A pair or interval of bare numbers with unit marks on its coordinates —
 * `(22^\circ,68^\circ)` against `(22,68)`, the two angles of a system
 * (Elementary Algebra 5.2, September 27, 2026). True when the key's members
 * are all bare numbers, at least one typed member carries a unit, and the
 * response with the units cut away grades 'correct': the scalar 'unit' rule,
 * per coordinate. A wrong coordinate keeps the response 'incorrect'.
 */
function unitCoordinates(studentRaw, answerRaw, options) {
  const keyText = preprocess(answerRaw ?? '').replace(/\\left\s*|\\right\s*/g, '').trim();
  const keyMembers = delimitedMembers(keyText);
  if (!keyMembers || !keyMembers.every((member) => PLAIN_NUMBER_KEY.test(member))) return false;
  const text = String(studentRaw ?? '').replace(/\\left\s*|\\right\s*/g, '').trim();
  const members = delimitedMembers(text);
  if (!members || members.length !== keyMembers.length) return false;
  let stripped = false;
  const numbers = members.map((member) => {
    const tail = preprocess(member).match(UNIT_TAIL);
    if (!tail) return member;
    stripped = true;
    return tail[1];
  });
  return stripped && gradeResponse(`${text[0]}${numbers.join(',')}${text.at(-1)}`, answerRaw, options) === 'correct';
}

/**
 * The response with the degree marks it left off put back, or null — the
 * mirror of the `unit` rule above. `240` against `240^\circ` graded
 * `incorrect`, with or without `degrees` (Precalculus chapters 5–6 re-review,
 * October 4, 2026): the right degree count, told it was wrong, where
 * `-6^\circ` against the bare key `-6` already hears `unit`. The verdict is
 * `form`, not `unit` — "enter it without the unit" is the opposite of what
 * the learner must do, and the mark is what the `degrees` sentence names.
 *
 * A mark goes back only where the key writes one on a bare number and the
 * response writes a bare number in the same place: a scalar, a list member,
 * or a pair's coordinate (`(22,68)` against `(22^\circ,68^\circ)`, the polar
 * `(9.8489,203.96)` against `(9.8489,203.96^\circ)`). An unordered key
 * restores only when EVERY member is marked, since its places are not fixed.
 * The caller grades the restored response, so a wrong count (`250`), the
 * key's radian value (`4.18879` reads 4.18879°), and written arithmetic
 * (`200+40` is no bare number) stay `incorrect`.
 */
function degreeMarksRestored(studentRaw, answerRaw, mode) {
  const keyText = preprocess(answerRaw ?? '').replace(/\\left\s*|\\right\s*/g, '').trim();
  const text = String(studentRaw ?? '').replace(/\\left\s*|\\right\s*/g, '').trim();
  const keyTuple = delimitedMembers(keyText);
  const keyMembers = keyTuple ?? splitTopLevelCommas(keyText);
  const markedNumber = (member) => {
    const head = member.trim().match(DEGREE_MARK_AT_END);
    return head !== null && PLAIN_NUMBER_KEY.test(head[1].trim());
  };
  const marked = keyMembers.map(markedNumber);
  if (!marked.some(Boolean) || (mode === 'unordered' && !marked.every(Boolean))) return null;
  const members = keyTuple ? delimitedMembers(text) : keyMembers.length === 1 ? [text] : splitTopLevelCommas(text);
  if (!members || members.length !== keyMembers.length) return null;
  let restored = false;
  const rebuilt = members.map((member, index) => {
    // A one-letter label may stand in front (`A=27.7`, `\alpha=27.7`): the
    // value grader reads it as the label it is, so the mark goes after the
    // number all the same.
    const written = preprocess(member).trim();
    const label = written.match(LEADING_VARIABLE_LABEL);
    if (!marked[index] || !PLAIN_NUMBER_KEY.test((label ? written.slice(label[0].length) : written).trim())) return member;
    restored = true;
    return `${member.trim()}^\\circ`;
  });
  if (!restored) return null;
  return keyTuple ? `${text[0]}${rebuilt.join(',')}${text.at(-1)}` : rebuilt.join(',');
}

/** Does the response grade `correct` once its missing degree marks are back? */
function degreeMarksDropped(studentRaw, answerRaw, options) {
  const restored = degreeMarksRestored(studentRaw, answerRaw, options.mode);
  return restored !== null && gradeResponse(restored, answerRaw, options) === 'correct';
}

/**
 * Grade a response against the authored answer.
 *
 * Returns 'correct', 'incorrect', 'invalid', 'empty', 'form' (right value,
 * wrong shape), or 'unit' (right number with a unit word attached).
 *
 * On an answer that is a single bare number, a leading `\$` is dropped
 * before grading: `\$237,186` is the number the question asks for, and the
 * page's own answerDisplay prints it that way. A trailing unit word is NOT
 * accepted — any rule loose enough to take "140 miles" takes "140 feet", and
 * MathLive delivers typed letters as variables — but when removing it leaves
 * the right number the learner hears 'unit' ("enter it without the unit")
 * instead of 'incorrect'. A wrong number with a unit is still 'incorrect'.
 * (Prealgebra re-review, September 26, 2026.) Percent is untouched: `62\%`
 * and `0.62` are different values, and the `percent` form owns that ask.
 * The same rules reach list members (plainNumberMembers), pair coordinates
 * (unitCoordinates), and inequality bounds (BOUND_CURRENCY); a pair key also
 * reads labelled coordinates, `x=6, y=1` (labelledCoordinates).
 */
/**
 * Square brackets a learner types as grouping — `[9+(-16)]+4`,
 * `9-2[3-8(-2)]`, `\left[…\right]` — read as parentheses. The engine reads
 * a bracket pair as a list, so the retyped expression graded 'incorrect' or
 * 'invalid' where its parenthesized twin graded 'form' (Elementary Algebra
 * 1.4, September 2026). Only a matched `[…]` with no top-level comma is
 * rewritten: an interval (`[2,5)`, `[-1,3]`) or a list keeps its brackets,
 * and so does a root index (`\sqrt[3]{x}`).
 */
export function bracketsAsParentheses(latex) {
  const text = String(latex ?? '');
  if (!text.includes('[')) return text;
  const chars = [...text];
  const stack = [];
  for (let i = 0; i < chars.length; i += 1) {
    const char = chars[i];
    if (char === '(' || char === '{' || char === '[') {
      const rootIndex = char === '[' && /\\sqrt\s*$/.test(text.slice(0, i));
      stack.push({ char, at: i, comma: false, rootIndex });
    } else if (char === ',' && stack.length) {
      stack[stack.length - 1].comma = true;
    } else if (char === ')' || char === '}' || char === ']') {
      const open = stack.pop();
      if (open && open.char === '[' && char === ']' && !open.comma && !open.rootIndex) {
        chars[open.at] = '(';
        chars[i] = ')';
      }
    }
  }
  return chars.join('');
}

// A percent key, `4.5\%`: the one place a bare `4.5` is the right number with
// the sign left off rather than a value a hundred times too large.
const PERCENT_KEY = /^(-?(?:\d+(?:\.\d*)?|\.\d+))\s*\\%$/;

/* ---------------------------------------------------------------------------
 * General solutions over every integer k
 *
 * A trigonometric equation's general solution is keyed `\frac{\pi}{3}+k\pi`,
 * k any integer — and the same set is written `\frac{\pi}{3}-k\pi` or, as the
 * source's own worked examples print it, `\frac{\pi}{3}\pm k\pi`. Both graded
 * `incorrect`: the engine compares the two as functions of k (Precalculus
 * chapters 7–8 re-review, October 5, 2026). When the key writes the letter k,
 * a response member's ± directly before its k term reads `+`, and a member
 * whose k coefficient is negative is graded with k read as −k. The form is
 * checked on the writing with the ± read as `+` and the sign of k as typed.
 * Only the coefficient's sign is free: `\frac{\pi}{3}+2k\pi` (half the set)
 * and another letter stay `incorrect`.
 * ------------------------------------------------------------------------ */
const INTEGER_PARAMETER = /(?<!\\[a-zA-Z]*)k(?![a-zA-Z])/;
const INTEGER_PARAMETER_ALL = new RegExp(INTEGER_PARAMETER.source, 'g');

/** The member with a ± before a term holding k read as `+`. */
function integerFamilyPlusMinus(member) {
  return member.replace(new RegExp(PLUS_MINUS.source, 'g'), (mark, at) => {
    const term = splitTopLevelTerms(member.slice(at + mark.length))[0] ?? '';
    return INTEGER_PARAMETER.test(term) ? '+' : mark;
  });
}

/** Is the member affine in k (past a one-letter label) with a negative coefficient? */
function negativeIntegerCoefficient(member) {
  try {
    const text = preprocess(member);
    const label = text.match(LEADING_VARIABLE_LABEL);
    const expr = parseLatex(label ? text.slice(label[0].length) : text);
    if (!expr.isValid || expr.unknowns.join() !== 'k') return false;
    const at = (k) => expr.subs({ k }).N();
    const step = ce.box(['Subtract', at(1), at(0)]).N();
    const twice = ce.box(['Subtract', at(2), at(0)]).N();
    if (step.isNumberLiteral !== true || twice.isNumberLiteral !== true
      || Math.abs(step.im ?? 0) > 1e-12 || Math.abs(twice.re - 2 * step.re) > 1e-9 * Math.max(1, Math.abs(twice.re))) return false;
    return step.re < 0;
  } catch {
    return false;
  }
}

// The key is a general solution only when it writes k beside an angle — π or
// a degree mark — and no summation index: `-k\ln(4)` and `\sum_{k=1}^{5}`
// are not families, and `3-k` against `k+3` stays `incorrect`.
function integerFamilyKey(answerRaw) {
  const key = preprocess(answerRaw ?? '');
  return INTEGER_PARAMETER.test(key) && !/\\sum(?![a-zA-Z])/.test(key)
    && (/\\pi(?![a-zA-Z])/.test(key) || DEGREE_MARK_ANYWHERE.test(key));
}

function integerFamilyVerdict(studentRaw, answerRaw, options) {
  if (!integerFamilyKey(answerRaw) || !INTEGER_PARAMETER.test(String(studentRaw ?? ''))) return null;
  const members = splitTopLevelCommas(String(studentRaw ?? ''));
  const written = members.map(integerFamilyPlusMinus);
  const reflected = written.map((member) => (negativeIntegerCoefficient(member)
    ? member.replace(INTEGER_PARAMETER_ALL, '(-k)') : member));
  if (reflected.every((member, i) => member === members[i])) return null;
  const verdict = checkAnswer(reflected.join(','), answerRaw, { ...options, form: undefined });
  if (verdict !== 'correct') return verdict;
  const formHolds = written.length === 1
    ? checkFormAsGraded(written[0], options.form, answerRaw)
    : written.every((member) => checkFormAsGraded(member, options.form));
  return formHolds ? 'correct' : 'form';
}

export function checkAnswer(studentRaw, answerRaw, options = {}) {
  const family = integerFamilyVerdict(studentRaw, answerRaw, options);
  if (family !== null) return family;
  // A ± response is the set of its two branches (plusMinusExpansion). A key
  // written with ± itself is not read this way — none is authored.
  const branches = plusMinusExpansion(studentRaw);
  if (branches && !String(answerRaw ?? '').match(PLUS_MINUS)) {
    const keyMembers = splitTopLevelCommas(answerRaw ?? '');
    if (keyMembers.length < 2 || keyMembers.length !== branches.length || commasAreAllGrouping(answerRaw)) {
      return 'incorrect';
    }
    return checkAnswer(branches.join(', '), answerRaw, { ...options, mode: 'unordered' });
  }
  const percentKey = preprocess(answerRaw ?? '').match(PERCENT_KEY);
  if (percentKey && parseAnswerForm(options.form).tokens.includes('percent')) {
    // Under `percent`, `4.5` against `4.5\%` is the form the ask names with
    // the sign missing: 'form' ("as a percent, with the % sign"), never
    // 'incorrect'. Only when the typed number IS the key's number.
    const verdict = gradeResponse(studentRaw, answerRaw, options);
    if (verdict !== 'incorrect') return verdict;
    return gradeResponse(studentRaw, percentKey[1], {}) === 'correct' ? 'form' : verdict;
  }
  const keyMembers = tupleKeyMembers(answerRaw);
  const coordinates = keyMembers && labelledCoordinates(studentRaw, keyMembers.length);
  if (coordinates) return checkAnswer(`(${coordinates.join(',')})`, answerRaw, options);
  if (boundNumbers(answerRaw) !== null) {
    // A money bound, `s\geq\$4,000,000` against `s\ge4000000` (Elementary
    // Algebra 3.6): the `\$` in front of a number in an inequality or interval
    // is the same currency label a bare-number key drops, and it parsed
    // 'invalid'. Only a `\$` directly before a numeral goes.
    const unpriced = String(studentRaw ?? '').replace(BOUND_CURRENCY, '');
    const setVerdict = solutionSetVerdict(unpriced, answerRaw, options) ?? halfPlaneVerdict(unpriced, answerRaw, options);
    if (setVerdict !== null) return setVerdict;
    const verdict = gradeResponse(unpriced, answerRaw, options);
    if (verdict !== 'incorrect' && verdict !== 'invalid') return verdict;
    if (degreeMarksDropped(unpriced, answerRaw, options)) return 'form';
    return unitCoordinates(unpriced, answerRaw, options) ? 'unit' : verdict;
  }
  const keyText = preprocess(answerRaw ?? '');
  if (!PLAIN_NUMBER_KEY.test(keyText)) {
    if (approximableMembers(keyText)) {
      studentRaw = String(studentRaw ?? '').replace(APPROX_MEMBER_PREFIX, (match, lead, label) => `${lead}${label ? `${label}=` : ''}`);
    }
    const verdict = gradeResponse(studentRaw, answerRaw, options);
    // The right exponential model with its decimals not yet rounded as the
    // key rounds them is `form` (overPreciseModel), never `correct`.
    if (verdict === 'incorrect' && parseAnswerForm(options.form).tokens.includes('exponential-model')
      && overPreciseModel(studentRaw, answerRaw)) return 'form';
    // The right degree count with the mark left off is `form`
    // (degreeMarksRestored).
    if ((verdict === 'incorrect' || verdict === 'invalid') && degreeMarksDropped(studentRaw, answerRaw, options)) return 'form';
    if ((verdict !== 'incorrect' && verdict !== 'invalid')
      || (asFraction(keyText) === null && asMixedNumber(keyText) === null)) return verdict;
    const tail = String(studentRaw ?? '').trim().match(FRACTION_UNIT_TAIL);
    return tail && gradeResponse(tail[1], answerRaw, options) === 'correct' ? 'unit' : verdict;
  }
  const unpriced = (studentRaw ?? '')
    .replace(APPROX_PREFIX, (match, label) => (label ? `${label}=` : ''))
    .replace(CURRENCY_PREFIX, '$1');
  const verdict = gradeResponse(unpriced, answerRaw, options);
  if (verdict !== 'incorrect' && verdict !== 'invalid') return verdict;
  const tail = preprocess(unpriced).match(UNIT_TAIL);
  if (tail && gradeResponse(tail[1], answerRaw, options) === 'correct') return 'unit';
  return verdict;
}

function gradeResponse(rawStudent, answerRaw, options = {}) {
  const studentRaw = bracketsAsParentheses(rawStudent);
  let student = preprocess(studentRaw);
  if (!student) return 'empty';

  // An unfilled box in a fraction/exponent shows up as \placeholder{}.
  if (student.includes('\\placeholder')) return 'invalid';

  if (options.unordered === true || options.mode === 'unordered') {
    return withListForm(checkUnordered(studentRaw, answerRaw), studentRaw, options.form);
  }

  const asList = checkOrderedList(studentRaw, answerRaw);
  if (asList !== null) return withListForm(asList, studentRaw, options.form);

  const written = student;
  student = readFunctionNotation(readExpressionLabel(readLabelChain(student, answerRaw), answerRaw));
  if (!student) return 'invalid';

  let studentExpr;
  try {
    studentExpr = parseLatex(student);
  } catch {
    return 'invalid';
  }
  if (!studentExpr.isValid) return 'invalid';

  let answerExpr;
  try {
    answerExpr = parseLatex(readFunctionNotation(preprocess(answerRaw)));
  } catch {
    return 'incorrect';
  }
  if (!answerExpr.isValid) {
    // Author error, not student error — surface it during authoring.
    console.warn(`FillIn: answer prop is not valid LaTeX math: ${answerRaw}`);
    return 'incorrect';
  }

  if (!equivalentAllowingVariableEquation(studentExpr, answerExpr)
    && !conversionMatchesKey(written, answerRaw, options.form)) {
    // A tuple with too many members may be a digit-grouping misread — retry
    // the arity-reconciled readings once. Each candidate has strictly fewer
    // commas than the response, so the recursion cannot loop.
    for (const candidate of groupedTupleRewrites(studentRaw, answerRaw)) {
      const verdict = checkAnswer(candidate, answerRaw, options);
      if (verdict === 'correct' || verdict === 'form') return verdict;
    }
    return 'incorrect';
  }
  // Right value, wrong shape: report the form so the feedback names what to
  // change. The form reads the same function-notation-normalized writing the
  // value was graded on — a label the value check ignored must not be the
  // shape the form check rejects, and a labelled equation keeps its equation
  // reading (formAcceptedAsWritten). Checked last so a learner whose value
  // is wrong is never told to reduce a fraction that was not the answer.
  return formAcceptedAsWritten(written, options.form, answerRaw) ? 'correct' : 'form';
}
