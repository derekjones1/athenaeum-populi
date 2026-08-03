import assert from 'node:assert/strict';
import { analyzeFillin, extractFillins } from './verify-answers.mjs';

const analyze = (question, answer, extra = {}) => analyzeFillin({ question, answer, ...extra });

/* ---- solve: substitute every answered root back into the printed equation */

assert.equal(analyze('Solve: $3x + 2 = 14$.', '4').status, 'pass');
assert.equal(analyze('Solve: $3x + 2 = 14$.', '5').status, 'fail');
assert.equal(analyze('Solve: $3x + 2 = 14$.', 'x=4').status, 'pass');
assert.equal(analyze('Solve: $3x + 2 = 14$.', 'y=4').status, 'fail');

// several roots, in either direction
assert.equal(analyze('Solve: $x^2 = 4$.', '2,-2').status, 'pass');
assert.equal(analyze('Solve: $x^2 = 4$.', '2,-3').status, 'fail');
assert.equal(analyze('Solve: $x^2 = 4$.', '2,-3', { answerMode: 'unordered' }).status, 'fail');

// radical roots check numerically, with no simplify() involved
assert.equal(analyze('Solve: $x^2 = 8$.', '2\\sqrt{2}, -2\\sqrt{2}').status, 'pass');

// solving a formula for one variable is an identity over the others
assert.equal(analyze('Solve $V = lwh$ for $h$.', 'h=\\frac{V}{lw}').status, 'pass');
assert.equal(analyze('Solve $V = lwh$ for $h$.', 'h=\\frac{V}{l}').status, 'fail');

// a numeric answer to a formula means the other variable's value lives in
// prose the checker cannot see
assert.equal(
  analyze('The temperature was $40°$ Celsius. Solve for $F$ in the formula $C = \\frac{5}{9}(F - 32)$.', '104').status,
  'skip',
);

// inequalities print no equation to substitute into
assert.equal(analyze('Solve: $3x < 9$.', 'x<3').status, 'skip');

/* ---- evaluate-at: substitute the printed given values */

assert.equal(analyze('Evaluate $9x + 7$ when $x = 3$.', '34').status, 'pass');
assert.equal(analyze('Evaluate $9x + 7$ when $x = 3$.', '35').status, 'fail');
assert.equal(analyze('Evaluate $2a + b^2$ when $a = 2$ and $b = 3$.', '13').status, 'pass');
assert.equal(analyze('Evaluate $-|x|$ when $x = -2$.', '-2').status, 'pass');

// bare "Evaluate: <arithmetic>" has no given values and falls through to the
// re-expression class instead of being dropped
assert.equal(analyze('Evaluate: $9 + 5^3$.', '134').status, 'pass');
assert.equal(analyze('Evaluate: $9 + 5^3$.', '133').status, 'fail');

/* ---- re-expression: the answer must be value-equivalent to the subject */

assert.equal(analyze('Simplify: $4 + 10(3 + 9) - 5^2$.', '99').status, 'pass');
assert.equal(analyze('Simplify: $4 + 10(3 + 9) - 5^2$.', '98').status, 'fail');
assert.equal(analyze('Factor: $x^2 + 6x + 8$.', '(x+2)(x+4)').status, 'pass');
assert.equal(analyze('Factor: $x^2 + 6x + 8$.', '(x+2)(x+3)').status, 'fail');
assert.equal(analyze('Multiply: $(w+5)(w+7)$.', 'w^2+12w+35').status, 'pass');
assert.equal(analyze('Add: $-\\frac{2}{5} + \\left(-\\frac{4}{9}\\right)$.', '-\\frac{38}{45}').status, 'pass');

// even roots assume nonnegative variables (the corpus convention), so the
// samples must stay positive
assert.equal(analyze('Simplify: $\\sqrt{64x^2}$', '8x').status, 'pass');
assert.equal(analyze('Simplify: $\\sqrt{16x^7}$.', '4x^3\\sqrt{x}').status, 'pass');
assert.equal(analyze('Simplify: $\\sqrt{16x^7}$.', '4x^2\\sqrt{x}').status, 'fail');

// removable holes are equivalence, not inequality — sampling avoids them
assert.equal(
  analyze('Simplify: $\\frac{x^2-x-2}{x^2-3x+2}$.', '\\frac{x+1}{x-1}').status,
  'pass',
);

// the malformed-grouping defect this tool caught in review: ^2 written on the
// whole fraction instead of the numerator is a DIFFERENT value and must fail
assert.equal(
  analyze(
    'Simplify: $\\tfrac{\\sqrt{p} + \\sqrt{2}}{\\sqrt{p} - \\sqrt{2}}$',
    '\\tfrac{\\left(\\sqrt{p} + \\sqrt{2}\\right)}{p - 2}^{2}',
  ).status,
  'fail',
);
assert.equal(
  analyze(
    'Simplify: $\\tfrac{\\sqrt{p} + \\sqrt{2}}{\\sqrt{p} - \\sqrt{2}}$',
    '\\tfrac{\\left(\\sqrt{p} + \\sqrt{2}\\right)^{2}}{p - 2}',
  ).status,
  'pass',
);

// prime factorization prompts print their subject as prose
assert.equal(
  analyze('Find the prime factorization of 80. Enter the answer in exponential form, e.g. $2^3 \\cdot 5$.', '2^4 \\cdot 5').status,
  'pass',
);
assert.equal(
  analyze('Find the prime factorization of 80. Enter the answer in exponential form, e.g. $2^3 \\cdot 5$.', '2^3 \\cdot 5').status,
  'fail',
);

/* ---- out-of-scope classes stay out of scope, never fail */

// Compute Engine 0.58.0 evaluates complex-denominator division wrong; these
// must be reported unverifiable rather than trusted either way
assert.equal(analyze('Divide: $\\tfrac{2 + 5 i}{5 - 2 i}$', 'i').status, 'skip');

// the engine reads a mixed number's whole part as a coefficient next to \left(
assert.equal(
  analyze('Multiply, and write the answer in simplified form: $2\\tfrac{2}{5}\\left(-2\\tfrac{2}{9}\\right)$', '-\\frac{16}{3}').status,
  'skip',
);

// a word problem's format instruction is not a re-expression ask
assert.equal(
  analyze(
    'A booth sells fudge with $2\\tfrac{2}{3}$ cups of chips per pound. How many cups are in a half-pound? Write your answer as an improper fraction.',
    '\\frac{4}{3}',
  ).status,
  'skip',
);

// rounding breaks value equivalence by design
assert.equal(analyze('Divide: $2 \\div 3$. Round to the nearest hundredth.', '0.67').status, 'skip');

// asks for one component of the re-expression, not its value
assert.equal(
  analyze('Write $96{,}000$ in scientific notation. Enter the first factor (the number between 1 and 10).', '9.6').status,
  'skip',
);

// no prompt verb the checker understands
assert.equal(analyze('Find the Least Common Multiple of 18 and 24.', '72').status, 'skip');

/* ---- extraction: line numbers survive code-fence blanking */

const doc = [
  '# Section',
  '',
  '```',
  '{{< fillin question="inside a fence" answer="1" >}}',
  '```',
  '',
  '{{< fillin',
  '  question="Solve: $x + 1 = 3$."',
  '  answer="2"',
  '>}}',
].join('\n');
const fillins = extractFillins(doc);
assert.equal(fillins.length, 1);
assert.equal(fillins[0].line, 7);
assert.equal(fillins[0].params.answer, '2');
assert.equal(analyzeFillin(fillins[0].params).status, 'pass');

console.log('verify-answers tests passed');
