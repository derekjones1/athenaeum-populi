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

function equivalent(studentExpr, answerExpr) {
  try {
    if (studentExpr.isSame(answerExpr)) return true;
    if (studentExpr.isEqual(answerExpr) === true) return true;
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
 * They read the LaTeX, not the parsed expression, because the Compute Engine
 * deliberately erases exactly the distinction being checked: `\frac{40}{88}`
 * parses to ["Rational",5,11], `2^4\cdot5` to 80 and `4.2\times10^4` to 42000
 * — even with canonical:false. The value comparison stays with the CAS; only
 * the written form is read off the source.
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
    studentExpr = ce.parse(student);
  } catch {
    return 'invalid';
  }
  if (!studentExpr.isValid) return 'invalid';

  let answerExpr;
  try {
    answerExpr = ce.parse(preprocess(answerRaw));
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
