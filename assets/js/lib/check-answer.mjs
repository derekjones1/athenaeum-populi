/**
 * Pure answer-checking logic, shared by interactive components.
 * No React here — just math.
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
 * (Node 22+ — the Compute Engine's floor). Next.js imports it fine.
 */

import { ComputeEngine } from '@cortex-js/compute-engine';

// One engine for the whole page. FillIn hands this same instance to
// MathLive (MathfieldElement.computeEngine) so the field and the grader
// never disagree about parsing.
export const ce = new ComputeEngine();

/**
 * Normalize student LaTeX before parsing.
 *  - collapses a doubled backslash before a LaTeX command letter
 *    ("\\frac{5}{6}" → "\frac{5}{6}"). Content authors write
 *    answer="\\frac{5}{6}" in .mdx files (per the authoring playbook), but
 *    JSX/MDX string attributes do NOT process backslash escapes, so the
 *    prop reaches the component with two literal backslashes — which made
 *    every fraction-based answer unparsable (silently graded "incorrect").
 *    Both "\\frac" and "\frac" in MDX now grade identically. A real LaTeX
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
  return (raw ?? '')
    .replace(/\\\\(?=[a-zA-Z])/g, '\\')
    .replace(/(\d)\{,\}(?=\d{3})/g, '$1')
    .replace(/(\d),(?=\d{3}(?:\D|$))/g, '$1')
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

export function checkAnswer(studentRaw, answerRaw) {
  const student = preprocess(studentRaw);
  if (!student) return 'empty';

  // An unfilled box in a fraction/exponent shows up as \placeholder{}.
  if (student.includes('\\placeholder')) return 'invalid';

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

  try {
    if (studentExpr.isSame(answerExpr)) return 'correct';
    if (studentExpr.isEqual(answerExpr) === true) return 'correct';
    const diff = ce.box(['Subtract', studentExpr, answerExpr]).simplify();
    if (diff.isSame(ce.number(0))) return 'correct';
  } catch {
    /* fall through */
  }
  return 'incorrect';
}
