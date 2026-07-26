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

function stripGroupingCommas(value) {
  return value.replace(/\d+(?:(?:,|\{,\})\d+)*/g, (token, offset, source) => {
    if (!/^\d{1,3}(?:(?:,|\{,\})\d{3})+$/.test(token)) return token;
    if (insideTupleDelimiter(source, offset)) return token;
    return token.replace(/,|\{,\}/g, '');
  });
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
 *  - maps unicode math operators from pasted text to LaTeX
 *  - reads a plain-text mixed number ("2 6/9", pasted rather than typed
 *    into the field) as integer + fraction — the same convention the
 *    Compute Engine already applies to "2\frac{6}{9}". Only whole
 *    number, space(s), digits/digits qualifies, so "2 + 6/9" and
 *    "2x/9" are untouched.
 */
export function preprocess(raw) {
  return stripGroupingCommas(raw ?? '')
    .replace(/\\\\(?=[a-zA-Z])/g, '\\')
    .replace(/\\[,;:!]/g, '')
    .replace(/~/g, ' ')
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
 */
function splitTopLevelCommas(raw) {
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

function parseValid(raw) {
  try {
    const expression = ce.parse(preprocess(raw));
    return expression.isValid ? expression : null;
  } catch {
    return null;
  }
}

function checkUnordered(studentRaw, answerRaw) {
  const studentParts = splitTopLevelCommas(studentRaw);
  const answerParts = splitTopLevelCommas(answerRaw);
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
    const match = unused.findIndex((candidate) => equivalent(candidate, expected));
    if (match === -1) return 'incorrect';
    unused.splice(match, 1);
  }
  return 'correct';
}

export function checkAnswer(studentRaw, answerRaw, options = {}) {
  const student = preprocess(studentRaw);
  if (!student) return 'empty';

  // An unfilled box in a fraction/exponent shows up as \placeholder{}.
  if (student.includes('\\placeholder')) return 'invalid';

  if (options.unordered === true || options.mode === 'unordered') {
    return checkUnordered(studentRaw, answerRaw);
  }

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

  // Accept "x = value" for a bare-value answer (and vice versa): if exactly
  // one side is an equation whose left-hand side is a plain variable, grade
  // its right-hand side against the other side. Students solving "solve for
  // x" exercises naturally type "x=-3/2" even when the authored answer is
  // just "-3/2". When BOTH are variable equations, the variables must match
  // (an authored "x=5" rejects a student's "y=5" — the Compute Engine's
  // isEqual would otherwise treat the two equations as equivalent) and the
  // values are compared. Inequalities are not equations and are never
  // unwrapped.
  const studentEq = asVariableEquation(studentExpr);
  const answerEq = asVariableEquation(answerExpr);
  if (studentEq && answerEq) {
    if (studentEq.variable !== answerEq.variable) return 'incorrect';
    studentExpr = studentEq.value;
    answerExpr = answerEq.value;
  } else if (studentEq && !answerEq) {
    studentExpr = studentEq.value;
  } else if (answerEq && !studentEq) {
    answerExpr = answerEq.value;
  }

  return equivalent(studentExpr, answerExpr) ? 'correct' : 'incorrect';
}
