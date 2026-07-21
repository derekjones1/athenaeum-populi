/**
 * Run with:  node lib/check-answer.test.mjs   (needs Node 22+)
 * Exits 0 if all pass.
 *
 * Inputs are LaTeX — what a MathLive <math-field> emits.
 */

import { checkAnswer } from './check-answer.mjs';

const ANSWER = 'x^2 + 5x + 6';
const cases = [
  ['x^2+5x+6', 'correct'],
  ['x^{2}+5x+6', 'correct'], // MathLive brace-wraps exponents
  ['6+5x+x^2', 'correct'],
  ['x\\cdot x + 2x + 3x + 6', 'correct'],
  ['(x+3)(x+2)', 'correct'],
  ['\\left(x+3\\right)\\left(x+2\\right)', 'correct'], // smart fences
  ['x^2 + 5 x + 6', 'correct'],
  ['x^2+5x+5', 'incorrect'],
  ['x^2+6x+6', 'incorrect'],
  ['x^2-5x+6', 'incorrect'],
  ['y^2+5y+6', 'incorrect'],
  ['\\frac{\\placeholder{}}{2}', 'invalid'], // unfilled fraction box
  ['', 'empty'],
  ['   ', 'empty'],
];

let failures = 0;
for (const [input, expected] of cases) {
  const got = checkAnswer(input, ANSWER);
  const ok = got === expected;
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  "${input}" -> ${got} (expected ${expected})`);
}

const extra = [
  // student, answer, expected
  ['\\frac{1}{2}', '0.5', 'correct'],
  ['0.5', '\\frac{1}{2}', 'correct'],
  ['\\sqrt{9}', '3', 'correct'],
  ['2\\times x', 'x + x', 'correct'],
  ['(x+1)^2', 'x^2 + 2x + 1', 'correct'],
  ['400,000', '400000', 'correct'], // digit-grouping commas stripped
  ['400{,}000', '400000', 'correct'],
  ['53,809,051', '53809051', 'correct'],
  ['100+70+6', '176', 'correct'],
  // Doubled backslashes: MDX attributes like answer="\\frac{5}{6}" pass the
  // two backslashes through literally (JSX doesn't process string escapes),
  // so preprocess() must collapse them or every fraction answer fails.
  ['\\frac{5}{6}', '\\\\frac{5}{6}', 'correct'],
  ['\\frac56', '\\\\frac{5}{6}', 'correct'],
  ['\\frac{4}{6}', '\\\\frac{5}{6}', 'incorrect'], // wrong answer stays wrong
  ['-\\frac{5}{96}', '-\\\\frac{5}{96}', 'correct'],
  ['\\frac{5x+14}{30}', '\\\\frac{5x+14}{30}', 'correct'],
  ['4\\frac{4}{11}', '4\\\\frac{4}{11}', 'correct'], // mixed number
  ['\\frac{48}{11}', '4\\\\frac{4}{11}', 'correct'], // improper form of same
  ['\\frac{16}{11}', '4\\\\frac{4}{11}', 'incorrect'], // 4×(4/11) misparse guard
  // Plain-text mixed numbers (pasted, not typed — the field turns a typed
  // "/" into \frac): "N n/d" reads as N + n/d, matching the Compute
  // Engine's own convention for 2\frac{6}{9}.
  ['2 6/9', '2\\\\frac{6}{9}', 'correct'],
  ['2 2/3', '2\\\\frac{6}{9}', 'correct'],
  ['24/9', '2\\\\frac{6}{9}', 'correct'],
  ['2 5/9', '2\\\\frac{6}{9}', 'incorrect'],
  ['2 + 6/9', '2\\\\frac{6}{9}', 'correct'], // explicit sum untouched & equal
  ['4/3', '2\\\\frac{6}{9}', 'incorrect'], // NOT 2×(6/9)
  ['\\\\frac{5}{6}', '\\frac{5}{6}', 'correct'], // doubling on student side too
  // "x = value" is accepted for a bare-value answer (solve-for-x exercises),
  // and a bare value is accepted when the author wrote the answer as "x=…".
  ['x=-\\frac{3}{2}', '-\\\\frac{3}{2}', 'correct'],
  ['y=\\frac{1}{2}', '0.5', 'correct'],
  ['n=12', '12', 'correct'],
  ['-\\frac{3}{2}=x', '-\\\\frac{3}{2}', 'correct'], // variable on the right
  ['x=-\\frac{3}{2}', '\\\\frac{3}{2}', 'incorrect'], // wrong value still wrong
  ['x=5', 'x=5', 'correct'], // both equations: same variable, same value
  ['x=2+3', 'x=5', 'correct'], // both equations: equivalent values
  ['y=5', 'x=5', 'incorrect'], // both equations: variable must match
  ['5', 'x=5', 'correct'], // bare value vs authored equation
  ['x=-3', '-3>-7', 'incorrect'], // never unwrapped against an inequality
];
for (const [student, answer, expected] of extra) {
  const got = checkAnswer(student, answer);
  const ok = got === expected;
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  "${student}" vs "${answer}" -> ${got} (expected ${expected})`);
}

// Diagnostic only — printed but never fails the suite. These probe how far
// the Compute Engine's simplifier reaches; promote to `extra` once green.
const diagnostic = [
  ['\\sin^2(x)+\\cos^2(x)', '1', 'correct'],
  ['e^x', '\\exp(x)', 'correct'],
  ['1,23', '123', 'incorrect'], // not a grouping comma — not silently fixed
];
for (const [student, answer, expected] of diagnostic) {
  const got = checkAnswer(student, answer);
  console.log(`${got === expected ? 'info' : 'INFO'}  (diagnostic) "${student}" vs "${answer}" -> ${got} (hoped ${expected})`);
}

console.log(failures === 0 ? '\nALL TESTS PASSED' : `\n${failures} FAILURES`);
process.exit(failures === 0 ? 0 : 1);
