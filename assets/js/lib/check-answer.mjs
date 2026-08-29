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

const PARSE_CACHE_LIMIT = 256;
const parseCache = new Map();
function parseLatex(source) {
  if (parseCache.has(source)) return parseCache.get(source);
  const expr = ce.parse(spellDegreesAsQuantity(source));
  if (parseCache.size >= PARSE_CACHE_LIMIT) parseCache.clear();
  parseCache.set(source, expr);
  return expr;
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

export function stripGroupingCommas(value) {
  return value.replace(/\d+(?:(?:,|\{,\})\d+)*/g, (token, offset, source) => {
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
 */
const isSquaredConicUnit = (term) => /^(?:[a-zA-Z](?:_\{p+\})?|\([a-zA-Z](?:_\{p+\})?[+-]\d+\))\^\{?2\}?$/.test(term);

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
function numericallyEquivalent(studentExpr, answerExpr) {
  const diff = ce.box(['Subtract', studentExpr, answerExpr]);
  const vars = diff.unknowns;
  if (vars.length === 0) return sampleIsZero(diff.N());
  let agreed = 0;
  for (let i = 0; i < SAMPLE_POINTS.length && agreed < SAMPLES_REQUIRED; i += 1) {
    const assignment = {};
    vars.forEach((name, j) => {
      assignment[name] = SAMPLE_POINTS[(i + 2 * j) % SAMPLE_POINTS.length];
    });
    const value = diff.subs(assignment).N();
    if (!Number.isFinite(value.re) || !Number.isFinite(value.im)) continue; // singularity — try another point
    if (!sampleIsZero(value)) {
      // A disagreement at a point where either side is non-real is a point
      // OUTSIDE the expressions' common real domain, and the pinned engine's
      // complex arithmetic is known-wrong there (division by |b| rather than
      // |b|², see tools/verify-answers.mjs `hasComplexDivision`): the
      // rationalized derivative \frac{\sqrt{x-1}}{2(x-1)} "disagreed" with
      // the keyed \frac{1}{2\sqrt{x-1}} at x = 0.61 and graded incorrect.
      // Equality is decided on the real domain the exercise is about, so such
      // a point is skipped like a singularity; the SAMPLES_REQUIRED floor
      // still fails safe when too few real-domain points remain.
      const nonReal = [studentExpr, answerExpr].some((side) => {
        const v = side.subs(assignment).N();
        return !Number.isFinite(v.re) || !Number.isFinite(v.im) || Math.abs(v.im) > SAMPLE_TOLERANCE;
      });
      if (nonReal) continue;
      return false;
    }
    agreed += 1;
  }
  return agreed >= SAMPLES_REQUIRED;
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
    // `isEqual` must never see a radical-denominator quotient, or a logarithm
    // sharing an operand with a symbolic denominator — its two hang classes
    // (see the guards' banner). Only sampling provably returns there. The
    // logarithm class takes `simplify` down too, so routing it here covers
    // both entry points at once.
    if (radicalDenominator(studentExpr) || radicalDenominator(answerExpr)
      || logarithmOverSymbolDenominator(studentExpr)
      || logarithmOverSymbolDenominator(answerExpr)) {
      return numericallyEquivalent(studentExpr, answerExpr);
    }
    if (studentExpr.isEqual(answerExpr) === true) return true;
    // `simplify` has its own hang class — differences of variable-radical
    // expressions — so any radical over a symbol takes sampling instead. The
    // step is load-bearing: `isEqual` misses identities `simplify` catches
    // (`\sqrt{64x^2}` vs `8x`), so the replacement must decide, not just
    // fail closed. Sampling is also more complete than the engine was — it
    // proves equalities `isEqual` false-negatives on (a retyped
    // `\sqrt[3]{32y^5}-\sqrt[3]{-108y^8}` prompt) — which is why every
    // radical re-expression exercise MUST carry an answerForm: the lint's
    // passable-by-retyping rule now sees those pastes grade as value-equal.
    if (radicalOverSymbol(studentExpr) || radicalOverSymbol(answerExpr)) {
      return numericallyEquivalent(studentExpr, answerExpr);
    }
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
  if (studentEq) {
    return answerExpr.operator === 'Equal'
      ? equivalent(studentExpr, answerExpr)
      : equivalent(studentEq.value, answerExpr);
  }
  if (answerEq) {
    return studentExpr.operator === 'Equal'
      ? equivalent(studentExpr, answerExpr)
      : equivalent(studentExpr, answerEq.value);
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
  const readings = rawParts.length === answerParts.length
    ? [rawParts]
    : groupedReadings(rawParts, answerParts.length);
  if (readings.length === 0) return { verdict: 'incorrect', members: null };

  let sawParseable = false;
  for (const reading of readings) {
    const students = reading.map(parseValid);
    if (students.some((part) => !part)) continue;
    sawParseable = true;
    if (students.every((student, i) => equivalentAllowingVariableEquation(student, answers[i]))) {
      return { verdict: 'correct', members: reading };
    }
  }
  return { verdict: sawParseable ? 'incorrect' : 'invalid', members: null };
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
  const readings = rawParts.length === answerParts.length
    ? [rawParts]
    : groupedReadings(rawParts, answerParts.length);

  let sawParseable = false;
  let sawCountable = false;
  for (const reading of readings) {
    if (reading.length < 2) continue;
    sawCountable = true;
    const students = reading.map(parseValid);
    if (students.some((part) => !part)) continue;
    sawParseable = true;
    const unused = [...students];
    let matched = true;
    for (const expected of answers) {
      const match = unused.findIndex((candidate) => equivalentAllowingVariableEquation(candidate, expected));
      if (match === -1) { matched = false; break; }
      unused.splice(match, 1);
    }
    if (matched) return { verdict: 'correct', members: reading };
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
 * Strip a written `y=`/`x=`/`f(x)=` label off bareLatex() output. The label
 * is written, not parsed: `f(x)=…` boxes as an equation on a function
 * application, which no equation unwrap in the grader reads.
 */
function stripWrittenLabel(bare) {
  const label = bare.match(/^[a-zA-Z](?:_\{p+\})?\s*(?:\(\s*(?:[a-zA-Z]|-?\d+(?:\.\d+)?)\s*\))?\s*=/);
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
  return { numerator: Math.abs(numerator), denominator: Math.abs(denominator), negative };
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
      coefficient *= Math.abs(factor.re);
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

/** `\log 43`, `\ln 8`, `\log_2 x` — a logarithm of ONE numeral or variable. */
function isLogarithmOfAnAtom(factor) {
  if (!factor || factor.exponent !== null || factor.atom.kind !== 'log') return false;
  const argument = factor.atom.argument.trim();
  return /^\d+$/.test(argument) || /^[a-zA-Z]$/.test(argument);
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

const FORM_PREDICATES = {
  fraction: (latex) => asFraction(latex) !== null,
  decimal: (latex) => asDecimal(latex) !== null,
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
    if (factor.atom.kind === 'symbol') return true;
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
    return hasVariableLetter(radicand);
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
    // `\ln 9+2` — a plain integer is the only company a logarithm may keep.
    if (shape.terms.length === 2) {
      const trailing = shape.terms[1].factors;
      if (trailing.length !== 1 || !isIntegerFactor(trailing[0])) return false;
    }
    const factors = shape.terms[0].factors;
    if (factors.length > 2) return false;
    if (factors.length === 2 && !isExactScalarFactor(factors[0])) return false;
    const carrying = factors.at(-1);
    if (isLogarithmOfAnAtom(carrying)) return true;
    if (carrying.exponent !== null || carrying.atom.kind !== 'frac') return false;
    const numerator = loneFactor(carrying.atom.numerator);
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
    if (/\\cdot|\\times/.test(terms[0])) return false;
    return /^\s*-?\s*\\(?:log|ln)(?![a-zA-Z])/.test(terms[0]);
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
  'lowest-terms': (latex) => {
    const fraction = asFraction(latex) ?? asMixedNumber(latex);
    if (!fraction) return asDecimal(latex) !== null || asProductOfPowers(latex) !== null;
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
    return reciprocal !== null && isOnePower(reciprocal[1]);
  },
  // "Simplify: $\sqrt{32}-\sqrt{18}$" answers with `\sqrt{2}`. This one is read
  // entirely off the LaTeX and never parsed: the engine evaluates radical
  // arithmetic, so prompt and answer arrive as the *same* expression, and
  // parsing radicals is also where the Compute Engine is slow enough to stall a
  // corpus-wide check.
  //
  // A radical response is simplified when three things hold — the three steps
  // the source teaches:
  //   1. no radicand keeps a perfect-square (or perfect-nth-power) factor,
  //      so `\sqrt{32}` and `\sqrt{64x^2}` are not simplified;
  //   2. no two top-level terms share a radicand, so `8\sqrt2-9\sqrt2` is not
  //      combined yet; and
  //   3. no radical is left in a denominator — the rationalizing step.
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
    // factors): the corpus legitimately writes rationalized numerators as
    // bare juxtapositions like `\sqrt{10}\sqrt{y}`, which stay accepted.
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
      // Unevaluated ARITHMETIC under the radical is never simplified when the
      // radicand is all numerals: `\sqrt{64+225}` is a sum the learner was
      // asked to evaluate, and `\sqrt{\tfrac{25}{16}}` keeps the fraction the
      // quotient property removes. Scoped to numeral-only radicands, because
      // a variable sum (`\sqrt{4+x}`) is irreducible and a variable quotient
      // is the prompt's shape, not necessarily the answer's defect.
      if (radicandIsNumeric(radicand)
        && (/\\[tdc]?frac|\/|\\cdot|\\times/.test(radicand) || splitTopLevelTerms(radicand).length > 1)) {
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
      // to the like-radicals and rationalizing tests alone.
      if (splitTopLevelTerms(radicand).length > 1) continue;
      // `\sqrt{1}`, `\sqrt{0}` and `\sqrt{-1}` are written-out numbers (1, 0,
      // i); the factor loop below starts at 2 and cannot see them.
      if (/^\s*-?\s*[01]\s*$/.test(radicand)) return false;
      const root = Number(indexArg ?? 2);
      // The sign is carried by the root (or by `i`), not by the factor test:
      // `\sqrt[3]{-108}` still holds the perfect cube 27, and `\sqrt{-8}`
      // still holds the perfect square 4.
      const numeral = radicand.match(/^\s*-?\s*(\d+)/);
      if (numeral) {
        const value = Number(numeral[1]);
        for (let factor = 2; factor ** root <= value; factor += 1) {
          if (value % factor ** root === 0) return false;
        }
      }
      // A variable power at or above the root index still comes out: \sqrt{x^2}.
      for (const [, exponent] of radicand.matchAll(/\^\s*\{?\s*(\d+)\s*\}?/g)) {
        if (Number(exponent) >= root) return false;
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
    // just as readily. The corpus's legitimate `\sqrt{10}\sqrt{y}` products
    // live inside rationalized-fraction numerators, whose brace groups sit
    // below the top level this scan reads — so they stay accepted.
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
    if (/[()]/.test(bareLatex(latex))) return false;
    let expr;
    try {
      expr = parseLatex(preprocess(latex));
    } catch {
      return false;
    }
    if (!expr.isValid) return false;
    const holdsASum = (e) => {
      if (e.operator === 'Add') return true;
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
  // `7x^2` as distinct terms of the sum, which is what makes this checkable;
  // it does fold bare constants, so a repeated *number* is already gone by the
  // time the predicate runs and cannot be required.
  'no-like-terms': (latex) => {
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
        else if (!e.isNumberLiteral) {
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
  expanded: (latex) => {
    const bare = bareLatex(latex);
    const terms = loadBearingTerms(bare);
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
    // A factor raised to the zero power is a written-out `1` the learner was
    // asked to remove ("Simplify: $7x^2y^0$" → `7x^2`); the engine folds it, so
    // it too has to be caught on the LaTeX.
    if (/\^\s*\{?\s*0\s*\}?/.test(bare)) return false;
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
      return parts !== null && parts.bases.size >= 1;
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
  'reduced-fraction': (latex) => {
    const bare = bareLatex(latex).replace(/^[-−]\s*/, '');
    const halves = writtenFractionHalves(bare);
    // A plain `/` counts as a fraction bar here: `\tfrac{p/2}{q/5}` is a
    // complex fraction however its inner quotients are written.
    if (!halves) return !/\\[tdc]?frac|\\div|\//.test(bare);
    if (halves.some((half) => /\\[tdc]?frac|\\div|\//.test(half))) return false;
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
  factored: (latex) => {
    const product = asFactoredProduct(latex);
    return product !== null && product.compound >= 1 && product.count >= 2;
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
    return terms.length <= 2
      && terms.filter(isSquaredBinomialTerm).length === 1
      && terms.every((term) => isSquaredBinomialTerm(term) || isConstantExpr(term));
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
    const shifted = String.raw`(?:${variable}|\(${variable}[+-]\d+\))`;
    const squaredUnit = new RegExp(String.raw`^${shifted}\^\{?2\}?$`);
    // The 4p may be irrational — a focus at $(\sqrt2,0)$ gives $y^2=4\sqrt2x$ —
    // so a coefficient is an integer/decimal, a written fraction, a radical,
    // or an integer times a radical.
    const radical = String.raw`\\sqrt(?:\{\d+\}|\d)`;
    const coefficient = String.raw`(?:\d+(?:\.\d+)?|\\[tdc]?frac\{[+-]?\d+\}\{\d+\}|\\[tdc]?frac\d\d|\d*${radical})?`;
    const linearTerm = new RegExp(String.raw`^[+-]?${coefficient}(?:\\cdot)?${shifted}$`);
    const linearOverInteger = new RegExp(String.raw`^[+-]?\\[tdc]?frac\{\(?${variable}(?:[+-]\d+)?\)?\}\{\d+\}$`);
    // The same quotient written with a slash, $(x-2)^2=(y-1)/2$ — the
    // sibling `conic-standard-form` reads both spellings, and a value-equal
    // response in the very shape the ask names must never report 'form'.
    const linearOverIntegerSlash = new RegExp(String.raw`^[+-]?\(?${variable}(?:[+-]\d+)?\)?/\d+$`);
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
  'point-slope-form': (latex) => {
    const sides = splitEquationSides(latex);
    if (!sides) return false;
    const parsed = sides.map((side) => {
      let expr;
      try {
        expr = parseLatex(preprocess(side));
      } catch {
        return null;
      }
      return expr.isValid ? expr : null;
    });
    if (parsed.some((expr) => expr === null)) return false;
    // The bare variable, or variable ± constant with coefficient 1 — the
    // $y-y_1$ side, and equally the binomial inside the slope side's parens.
    const shiftedVariable = (e) => {
      if (e.symbol) return e.symbol;
      if (e.operator !== 'Add' || e.ops.length !== 2) return null;
      const compound = e.ops.filter((op) => !isConstantExpr(op));
      return compound.length === 1 && compound[0].symbol ? compound[0].symbol : null;
    };
    // One $m(x-x_1)$ term: sign and constant factors peeled off a shifted
    // variable. An Add here is the distributed form — exactly what fails.
    const slopeProduct = (e) => {
      if (e.operator === 'Negate') return slopeProduct(e.ops[0]);
      if (e.operator === 'Multiply') {
        const compound = e.ops.filter((op) => !isConstantExpr(op));
        return compound.length === 1 ? slopeProduct(compound[0]) : null;
      }
      if (e.operator === 'Divide') {
        return isConstantExpr(e.ops[1]) ? slopeProduct(e.ops[0]) : null;
      }
      return shiftedVariable(e);
    };
    const pointSlope = (pointSide, slopeSide) => {
      const output = shiftedVariable(pointSide);
      const input = slopeProduct(slopeSide);
      return output !== null && input !== null && output !== input;
    };
    return pointSlope(parsed[0], parsed[1]) || pointSlope(parsed[1], parsed[0]);
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
  'slope-intercept-form': (latex) => {
    const bare = stripWrittenLabel(bareLatex(latex));
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
    return terms.length <= 2
      && terms.filter((term) => isLinearMonomial(term)).length <= 1
      && terms.every((term) => isLinearMonomial(term) || isConstantExpr(term));
  },
  // "Convert the equation from logarithmic to exponential form: $3=\log_7
  // 343$" answers $343=7^3$ — two true statements the engine grades equal, so
  // only the written notation separates them. The conversion is complete
  // exactly when no logarithm is left.
  'exponential-form': (latex) => !/\\log|\\ln\b/.test(bareLatex(latex)),
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
  'expanded-logarithms': (latex) => {
    const bare = bareLatex(latex);
    const opener = /\\(?:log(?:_(?:\{[^{}]*\}|[0-9a-zA-Z]))?|ln)\s*/g;
    let match;
    while ((match = opener.exec(bare)) !== null) {
      const rest = bare.slice(match.index + match[0].length);
      let argument;
      if (rest[0] === '{') {
        argument = readBalancedGroup(rest, 0)?.[0] ?? '';
      } else if (rest[0] === '(') {
        const close = matchingParenIndex(rest, 0);
        argument = close === -1 ? '' : rest.slice(1, close);
      } else if (rest[0] === '\\') {
        return false; // \sqrt, \frac — a compound argument however it is read
      } else {
        argument = rest.match(/^[0-9a-zA-Z.]+/)?.[0] ?? '';
      }
      if (!irreducibleLogArgument(argument)) return false;
    }
    return true;
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
  'evaluated-trig': (latex) => !/\\(?:arc)?(?:sin|cos|tan|csc|sec|cot)\b/
    .test(bareLatex(latex)),
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
  'single-trig-function': (latex) => (
    (bareLatex(latex).match(/\\(?:arc)?(?:sin|cos|tan|csc|sec|cot)\b/g) || []).length === 1
  ),
  // "Evaluate $\log_2 8$" answers 3, the same hazard one function over. The
  // predicate is `exponential-form`'s, and the duplication is deliberate:
  // §6's rule is that the feedback has to name the step the exercise asks
  // for, and "write it in exponential form, with no logarithm left" describes
  // a conversion the learner was never asked to make. The phrase is the
  // difference, exactly as `single-power` exists apart from `lowest-terms`.
  'evaluated-logarithm': (latex) => !/\\log|\\ln\b/.test(bareLatex(latex)),
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
    return asDecimal(value) !== null || asFraction(value) !== null
      || asMixedNumber(value) !== null;
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
  const sides = splitEquationSides(latex);
  if (!sides) return false;
  const isolated = (lone, rest) => lone === variable
    && !rest.replace(/\\[a-zA-Z]+/g, ' ').includes(variable);
  return isolated(sides[0], sides[1]) || isolated(sides[1], sides[0]);
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
  'rational-exponent': 'with a rational exponent, not a radical',
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
  'simplified-radical': 'as a simplified radical',
  'single-term': 'as a single term',
  'single-fraction': 'as a single fraction',
  'reduced-fraction': 'as a single fraction with all common factors cancelled',
  factored: 'in factored form',
  'point-slope-form': 'in point-slope form, y − y₁ = m(x − x₁), with the slope multiplying the parenthesized difference',
  'slope-intercept-form': 'in slope-intercept form, y = mx + b',
  'vertex-form': 'in vertex form, with the square completed',
  'conic-standard-form': 'in standard form, with each squared term over its denominator and the right side equal to 1',
  'parabola-standard-form': 'in standard form, with the squared term alone on one side and a single multiple of the other variable (or its shifted binomial) on the other',
  'circle-standard-form': 'in standard form, with the squared binomials on the left and the squared radius on the right',
  'exponential-form': 'in exponential form, with no logarithm left',
  'base-e': 'with $e$ as the base',
  'expanded-logarithms': 'as a sum of logarithms of single numbers and variables',
  'evaluated-trig': 'as an exact value, with the trigonometric function evaluated',
  'single-trig-function': 'as a single trigonometric function',
  'evaluated-logarithm': 'as a number, with the logarithm evaluated',
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

/**
 * Is `studentRaw` written in every form its exercise requires? Value equality
 * is checked separately — this only reads the shape.
 */
export function checkForm(studentRaw, spec) {
  const { tokens, valid } = parseAnswerForm(spec);
  if (!valid) return true;
  return tokens.every((token) => {
    const denominator = token.match(DENOMINATOR_TOKEN);
    if (denominator) {
      const fraction = asFraction(studentRaw);
      return fraction !== null && fraction.denominator === Number(denominator[1]);
    }
    const solved = token.match(SOLVED_TOKEN);
    if (solved) return writtenSolvedFor(studentRaw, solved[1]);
    return FORM_PREDICATES[token](studentRaw);
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
 * (tools/verify-section.mjs) relies on.
 */
/**
 * The name may carry the `_{p…}` subscript foldPrimes() writes for a prime —
 * chapter 12's derivative asks invite `f'(x)=2x+3` (MathLive: `f^{\prime}(x)=`),
 * which folds to `f_{p}(x)=…` before this reads it — and the argument may be
 * a numeral (`f'(3)=6`, `f(2)=5`) for the LABEL reading only: an application
 * at a number is a value, never the output quantity `y` of an equation.
 */
const FUNCTION_APPLICATION_RE = /^[a-zA-Z](?:_\{p+\})?\s*(?:\\left\s*)?\(\s*([a-zA-Z]|-?\d+(?:\.\d+)?)\s*(?:\\right\s*)?\)\s*/;
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
 * function-notation-normalized writing, with the labelled-equation reading
 * accepted too. Exported so the content lint's cheap shape pre-filter can
 * never disagree with the grader about the same text.
 */
function formAcceptedAsWritten(preprocessed, spec) {
  if (checkForm(readFunctionNotation(preprocessed), spec)) return true;
  const equation = functionLabelEquation(preprocessed);
  return equation !== null && checkForm(equation, spec);
}

export function checkFormAsGraded(raw, spec) {
  return formAcceptedAsWritten(preprocess(raw ?? ''), spec);
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
 * because the list grader never asked. tools/verify-replay.mjs documented the
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

export function checkAnswer(studentRaw, answerRaw, options = {}) {
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
  student = readFunctionNotation(student);
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

  if (!equivalentAllowingVariableEquation(studentExpr, answerExpr)) {
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
  return formAcceptedAsWritten(written, options.form) ? 'correct' : 'form';
}
