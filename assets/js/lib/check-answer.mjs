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
const PARSE_CACHE_LIMIT = 256;
const parseCache = new Map();
function parseLatex(source) {
  if (parseCache.has(source)) return parseCache.get(source);
  const expr = ce.parse(source);
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
function writtenFractionHalves(bare) {
  const opener = bare.match(/^\\[tdc]?frac\s*\{/);
  if (!opener) return null;
  const numeratorGroup = readBalancedGroup(bare, opener[0].length - 1);
  const between = numeratorGroup && bare.slice(numeratorGroup[1]).match(/^\s*\{/);
  const denominatorGroup = between
    && readBalancedGroup(bare, numeratorGroup[1] + between[0].length - 1);
  if (!denominatorGroup || bare.slice(denominatorGroup[1]).trim() !== '') return null;
  return [numeratorGroup[0], denominatorGroup[0]];
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
 * The coefficient-1 requirement is the point: `9x^2` and `\frac{9x^2}{144}`
 * are the general form's terms, and accepting them would accept the very
 * restatement the standard-form predicates exist to reject.
 */
const isSquaredConicUnit = (term) => /^(?:[a-zA-Z]|\([a-zA-Z][+-]\d+\))\^\{?2\}?$/.test(term);

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
 */
export function preprocess(raw) {
  const despaced = stripGroupingCommas(raw ?? '')
    .replace(/\\\\(?=[a-zA-Z])/g, '\\')
    .replace(/\\[,;:!]/g, '')
    .replace(/~/g, ' ');
  return fixLoneDifferentialNumerator(despaced)
    .replace(/(^|[^\d.\w])(\d+) +(\d+)\/(\d+)/g, '$1$2\\frac{$3}{$4}')
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
    if (!sampleIsZero(value)) return false;
    agreed += 1;
  }
  return agreed >= SAMPLES_REQUIRED;
}

function equivalent(studentExpr, answerExpr) {
  try {
    if (studentExpr.isSame(answerExpr)) return true;
    // `isEqual` must never see a radical-denominator quotient — its hang
    // class (see the guards' banner). Only sampling provably returns there.
    if (radicalDenominator(studentExpr) || radicalDenominator(answerExpr)) {
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
 * Every grading path — scalar, ordered list member, unordered list member —
 * compares through this one function so the unwrap and the variable-name
 * guard can never diverge between them.
 */
function equivalentAllowingVariableEquation(studentExpr, answerExpr) {
  const studentEq = asVariableEquation(studentExpr);
  const answerEq = asVariableEquation(answerExpr);
  if (studentEq && answerEq) {
    if (studentEq.variable !== answerEq.variable) return false;
    return equivalent(studentEq.value, answerEq.value);
  }
  if (studentEq) return equivalent(studentEq.value, answerExpr);
  if (answerEq) return equivalent(studentExpr, answerEq.value);
  return equivalent(studentExpr, answerExpr);
}

function parseValid(raw) {
  try {
    const expression = ce.parse(preprocess(raw));
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
 * Rejoin student parts that a digit-grouping comma split apart, so a learner
 * who writes "1,536" inside a list is not counted as supplying two members.
 * Only ever used to reconcile a count mismatch — never to override a split
 * that already matches, because "…,-64,125" must stay two members when the
 * answer has five.
 *
 * Whether a comma is grouping is decided by stripGroupingCommas() itself —
 * rejoin the parts and merge exactly when the comma collapses — so this stays
 * in step with the one grouping rule and a number with several grouping
 * commas ("1,048,576") rejoins comma by comma.
 */
function mergeGroupedNumbers(parts) {
  const merged = [];
  for (const part of parts) {
    const previous = merged.at(-1);
    if (previous !== undefined) {
      const joined = `${previous},${part}`;
      if (splitTopLevelCommas(stripGroupingCommas(joined)).length === 1) {
        merged[merged.length - 1] = joined;
        continue;
      }
    }
    merged.push(part);
  }
  return merged;
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
  // first, though: a student may legitimately group a member ("1,536"), and
  // the answerDisplay often shows exactly that form.
  let studentParts = splitTopLevelCommas(studentRaw ?? '');
  if (studentParts.length !== answerParts.length) {
    studentParts = mergeGroupedNumbers(studentParts);
  }
  if (studentParts.length !== answerParts.length) return 'incorrect';

  const students = studentParts.map(parseValid);
  if (students.some((part) => !part)) return 'invalid';

  return students.every((student, i) => equivalentAllowingVariableEquation(student, answers[i]))
    ? 'correct'
    : 'incorrect';
}

function checkUnordered(studentRaw, answerRaw) {
  let studentParts = splitTopLevelCommas(studentRaw);
  const answerParts = splitTopLevelCommas(answerRaw);
  // Same reconciliation the ordered path applies: a digit-grouping comma
  // inside a member ("1,536") must not count as an extra member.
  if (studentParts.length !== answerParts.length) {
    studentParts = mergeGroupedNumbers(studentParts);
  }
  if (studentParts.length < 2 || studentParts.length !== answerParts.length) return 'incorrect';

  const students = studentParts.map(parseValid);
  const answers = answerParts.map(parseValid);
  if (students.some((part) => !part)) return 'invalid';
  if (answers.some((part) => !part)) {
    console.warn(`FillIn: unordered answer prop is not valid LaTeX math: ${answerRaw}`);
    return 'incorrect';
  }

  const unused = [...students];
  for (const expected of answers) {
    const match = unused.findIndex((candidate) => equivalentAllowingVariableEquation(candidate, expected));
    if (match === -1) return 'incorrect';
    unused.splice(match, 1);
  }
  return 'correct';
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

function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
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
function factorCounts(expr) {
  if (expr.operator === 'Negate') return factorCounts(expr.ops[0]);
  // `(x+2)^3` is three copies of one multi-term factor, so a perfect square
  // like `(4y+3)^2` satisfies "at least two factors" the way it should.
  if (expr.operator === 'Power') {
    const [base, exponent] = expr.ops;
    const power = exponent.re;
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
const FORM_PREDICATES = {
  fraction: (latex) => asFraction(latex) !== null,
  decimal: (latex) => asDecimal(latex) !== null,
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
    // A PRODUCT of same-index numeral radicals in one term is the product
    // property left unapplied: `\sqrt{3}\cdot\sqrt{6}` is worth `3\sqrt{2}`,
    // and the multiplication was the exercise. Numeral radicands only — the
    // corpus's own worked answers keep `\sqrt{10}\sqrt{y}` as a product, so a
    // variable radicand must not count toward the pair.
    for (const piece of splitTopLevelTerms(bare)) {
      const numericByIndex = new Map();
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
        const group = readBalancedGroup(piece, opener.index + opener[0].length - 1);
        if (!group || !radicandIsNumeric(group[0])) continue;
        const index = opener[1] ?? '2';
        numericByIndex.set(index, (numericByIndex.get(index) ?? 0) + 1);
        if (numericByIndex.get(index) >= 2) return false;
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
  expanded: (latex) => {
    try {
      const expr = parseLatex(preprocess(latex));
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
    const halves = writtenFractionHalves(bare);
    if (halves) {
      const [numerator, denominator] = halves.map((half) => {
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
    // A shape this predicate cannot read off the LaTeX (unbraced arguments,
    // trailing factors): fall back to the parsed structure.
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
    const bare = bareLatex(latex);
    // The label is written, not parsed: `f(x)=…` boxes as an equation on a
    // function application, which no equation unwrap in the grader reads.
    const label = bare.match(/^[a-zA-Z]\s*(?:\(\s*[a-zA-Z]\s*\))?\s*=/);
    let expr;
    try {
      expr = parseLatex(preprocess(label ? bare.slice(label[0].length) : bare));
    } catch {
      return false;
    }
    if (!expr.isValid) return false;
    const isConstant = (e) => {
      const symbols = new Set();
      collectSymbols(e, symbols);
      return symbols.size === 0;
    };
    const isSquaredBinomialTerm = (e) => {
      if (e.operator === 'Negate') return isSquaredBinomialTerm(e.ops[0]);
      if (e.operator === 'Multiply') {
        const compound = e.ops.filter((op) => !isConstant(op));
        return compound.length === 1 && isSquaredBinomialTerm(compound[0]);
      }
      return e.operator === 'Power'
        && e.ops[0].operator === 'Add' && !isConstant(e.ops[0])
        && e.ops[1].isNumberLiteral && e.ops[1].re === 2;
    };
    const terms = expr.operator === 'Add' ? expr.ops : [expr];
    return terms.length <= 2
      && terms.filter(isSquaredBinomialTerm).length === 1
      && terms.every((term) => isSquaredBinomialTerm(term) || isConstant(term));
  },
  // The conic half of the same class: "Write $25x^2+9y^2-100x-54y-44=0$ in
  // standard form" answers $\tfrac{(x-2)^2}{9}+\tfrac{(y-3)^2}{25}=1$, again
  // value-equal to the printed subject by construction. The response must be
  // an equation whose one side is exactly `1` and whose other side is a sum
  // or difference of at least two fractions, each a coefficient-1 squared
  // term ($x^2$, $y^2$, or a squared binomial) over a positive integer. A
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
    const terms = splitTopLevelTerms(body).map((term) => term.trim());
    if (terms.length < 2) return false;
    return terms.every((term) => {
      const halves = writtenFractionHalves(term)
        ?? term.match(/^([^/]+)\/(\d+)$/)?.slice(1);
      if (!halves) return false;
      const [numerator, denominator] = halves.map((half) => half.replace(/\s+/g, ''));
      return isSquaredConicUnit(numerator) && /^\d+$/.test(denominator) && Number(denominator) > 0;
    });
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
  // "Convert the equation from logarithmic to exponential form: $3=\log_7
  // 343$" answers $343=7^3$ — two true statements the engine grades equal, so
  // only the written notation separates them. The conversion is complete
  // exactly when no logarithm is left.
  'exponential-form': (latex) => !/\\log|\\ln\b/.test(bareLatex(latex)),
  // "Use properties of logarithms to write $\log_5 25ab$ as a sum of
  // logarithms" answers $2+\log_5 a+\log_5 b$. Every written `\log` must take
  // a single atom — one number or one variable — so the printed compound
  // argument (`25ab`, a radical, a quotient) is what fails. A response with
  // no logarithm at all passes: a fully-simplified expansion can evaluate
  // every term away, and there is nothing left unexpanded to reject.
  'expanded-logarithms': (latex) => {
    const bare = bareLatex(latex);
    const opener = /\\log(?:_(?:\{[^{}]*\}|[0-9a-zA-Z]))?\s*/g;
    let match;
    while ((match = opener.exec(bare)) !== null) {
      const rest = bare.slice(match.index + match[0].length);
      let argument;
      if (rest[0] === '{') {
        argument = readBalancedGroup(rest, 0)?.[0] ?? '';
      } else if (rest[0] === '(') {
        const close = rest.indexOf(')');
        argument = close === -1 ? '' : rest.slice(1, close);
      } else if (rest[0] === '\\') {
        return false; // \sqrt, \frac — a compound argument however it is read
      } else {
        argument = rest.match(/^[0-9a-zA-Z.]+/)?.[0] ?? '';
      }
      if (!/^(?:\d+(?:\.\d+)?|[a-zA-Z])$/.test(argument.replace(/\s+/g, ''))) return false;
    }
    return true;
  },
};

const DENOMINATOR_TOKEN = /^denominator:(\d+)$/;

/**
 * Split an `answerForm` spec into its tokens, reporting any that name no
 * predicate. Exported so the shortcode and the content lint reject a typo
 * during authoring rather than silently grading nothing.
 */
export function parseAnswerForm(spec) {
  const tokens = String(spec ?? '').trim().split(/\s+/).filter(Boolean);
  const unknown = tokens.filter((token) => !(token in FORM_PREDICATES) && !DENOMINATOR_TOKEN.test(token));
  return { tokens, unknown, valid: tokens.length > 0 && unknown.length === 0 };
}

export const ANSWER_FORM_TOKENS = Object.freeze([...Object.keys(FORM_PREDICATES), 'denominator:<n>']);

/**
 * Feedback for a right value in the wrong shape. It names the shape rather
 * than the error ("Write the answer as a decimal", not "wrong form"), because
 * the learner's arithmetic was correct and only the last step is missing.
 */
const FORM_PHRASES = {
  fraction: 'as a fraction',
  decimal: 'as a decimal',
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
  'vertex-form': 'in vertex form, with the square completed',
  'conic-standard-form': 'in standard form, with each squared term over its denominator and the right side equal to 1',
  'circle-standard-form': 'in standard form, with the squared binomials on the left and the squared radius on the right',
  'exponential-form': 'in exponential form, with no logarithm left',
  'expanded-logarithms': 'as a sum of logarithms of single numbers and variables',
};

export function describeAnswerForm(spec) {
  const { tokens, valid } = parseAnswerForm(spec);
  if (!valid) return '';
  const phrases = tokens.map((token) => {
    const denominator = token.match(DENOMINATOR_TOKEN);
    return denominator ? `with a denominator of ${denominator[1]}` : FORM_PHRASES[token];
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
    return FORM_PREDICATES[token](studentRaw);
  });
}

export function checkAnswer(studentRaw, answerRaw, options = {}) {
  const student = preprocess(studentRaw);
  if (!student) return 'empty';

  // An unfilled box in a fraction/exponent shows up as \placeholder{}.
  if (student.includes('\\placeholder')) return 'invalid';

  if (options.unordered === true || options.mode === 'unordered') {
    return checkUnordered(studentRaw, answerRaw);
  }

  const asList = checkOrderedList(studentRaw, answerRaw);
  if (asList !== null) return asList;

  let studentExpr;
  try {
    studentExpr = parseLatex(student);
  } catch {
    return 'invalid';
  }
  if (!studentExpr.isValid) return 'invalid';

  let answerExpr;
  try {
    answerExpr = parseLatex(preprocess(answerRaw));
  } catch {
    return 'incorrect';
  }
  if (!answerExpr.isValid) {
    // Author error, not student error — surface it during authoring.
    console.warn(`FillIn: answer prop is not valid LaTeX math: ${answerRaw}`);
    return 'incorrect';
  }

  if (!equivalentAllowingVariableEquation(studentExpr, answerExpr)) return 'incorrect';
  // Right value, wrong shape: report the form so the feedback names what to
  // change. Checked last so a learner whose value is wrong is never told to
  // reduce a fraction that was not the answer anyway.
  return checkForm(studentRaw, options.form) ? 'correct' : 'form';
}
