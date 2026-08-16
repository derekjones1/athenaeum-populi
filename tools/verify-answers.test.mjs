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

/* ---- function-evaluate: a printed definition evaluated at a number */

assert.equal(analyze('Given the function $g(m)=\\sqrt{m-4}$, evaluate $g(5)$.', '1').status, 'pass');
assert.equal(analyze('Given the function $g(m)=\\sqrt{m-4}$, evaluate $g(5)$.', '2').status, 'fail');
assert.equal(analyze('For the linear function $f(x)=-2x-10$, what is $f(9)$?', '-28').status, 'pass');

// nested applications compose through the printed definitions
assert.equal(analyze('Given $f(t)=t^2-t$ and $h(x)=3x+2$, evaluate $h(f(2))$.', '8').status, 'pass');
assert.equal(analyze('Given $f(t)=t^2-t$ and $h(x)=3x+2$, evaluate $h(f(2))$.', '9').status, 'fail');

// a table function is not printed, so nothing here is checkable — and a
// definition that references one must not sample it as a free variable
assert.equal(analyze('Using the table above, evaluate $g(1)$.', '8').status, 'skip');
assert.equal(analyze('With $f$ as in the table above and $g(x)=-f(x)$, find $g(2)$.', '-15').status, 'skip');

/* ---- function-solve: every root satisfies the printed target */

assert.equal(analyze('For $f(x)=x^2-3x$, solve $f(x)=4$. Enter both solutions, separated by a comma.', '-1,4').status, 'pass');
assert.equal(analyze('For $f(x)=x^2-3x$, solve $f(x)=4$. Enter both solutions, separated by a comma.', '-1,5').status, 'fail');
assert.equal(analyze('Given the function $g(m)=\\sqrt{m-4}$, solve $g(m)=2$.', '8').status, 'pass');
assert.equal(
  analyze('For the function $f(x)=\\lvert 2x-1\\rvert-3$, find the values of $x$ such that $f(x)=0$. Enter both solutions, separated by a comma.', '-1,2').status,
  'pass',
);

/* ---- intercepts: roots and values of the printed definition */

assert.equal(analyze('Find the $x$-intercept of $f(x)=\\tfrac{1}{4}x-4$. Enter its $x$-coordinate.', '16').status, 'pass');
assert.equal(analyze('Find the $x$-intercept of $f(x)=\\tfrac{1}{4}x-4$. Enter its $x$-coordinate.', '15').status, 'fail');
assert.equal(analyze('The graph of $f(x)=-\\lvert x+2\\rvert+3$ crosses the vertical axis at $(0,b)$. Find $b$.', '1').status, 'pass');
// ordered-pair intercepts are points that must lie on the graph, whichever
// intercept each one is
assert.equal(
  analyze('Find the $y$-intercept and both $x$-intercepts of $f(x)=2\\lvert x+1\\rvert-10$. Enter the $y$-intercept first, then the $x$-intercepts in increasing order.', '(0,-8),(-6,0),(4,0)').status,
  'pass',
);
assert.equal(
  analyze('Find the $y$-intercept and both $x$-intercepts of $f(x)=2\\lvert x+1\\rvert-10$. Enter the $y$-intercept first, then the $x$-intercepts in increasing order.', '(0,-8),(-6,0),(5,0)').status,
  'fail',
);

/* ---- average-rate: (f(b) - f(a)) / (b - a), symbolic endpoints included */

assert.equal(analyze('Find the average rate of change of $f(x)=x-2\\sqrt{x}$ on the interval $[1,9]$.', '\\frac{1}{2}').status, 'pass');
assert.equal(analyze('Find the average rate of change of $f(x)=x-2\\sqrt{x}$ on the interval $[1,9]$.', '\\frac{1}{3}').status, 'fail');
assert.equal(analyze('Find and simplify the average rate of change of $f(x)=2x^2+1$ on the interval $[x, x+h]$.', '4x+2h').status, 'pass');
// smart fences around the interval must not silently disable the check
assert.equal(analyze('Find the average rate of change of $f(x)=x-2\\sqrt{x}$ on the interval $\\left[1,9\\right]$.', '\\frac{1}{3}').status, 'fail');
// "find the number b such that the rate is …" reverses the ask — not this class
assert.equal(
  analyze('Let $f(x)=\\tfrac{1}{x}$. Find the number $b$ such that the average rate of change of $f$ on the interval $(2,b)$ is $-\\tfrac{1}{10}$.', '5').status,
  'skip',
);

/* ---- function-combination: built from the printed definitions */

assert.equal(analyze('Given $f(x)=x-1$ and $g(x)=x^2-1$, find and simplify $(fg)(x)$.', 'x^3-x^2-x+1').status, 'pass');
assert.equal(analyze('Given $f(x)=x-1$ and $g(x)=x^2-1$, find and simplify $(fg)(x)$.', 'x^3-x^2-x-1').status, 'fail');
// the product ask written with its operator — $(f\cdot g)(x)$ — is the same ask
assert.equal(analyze('Given $f(x)=x-1$ and $g(x)=x^2-1$, find and simplify $(f\\cdot g)(x)$.', 'x^3-x^2-x-1').status, 'fail');
assert.equal(analyze('Given the same $f$ and $g$, find and simplify $(f-g)(x)$.', 'x-x^2').status, 'skip'); // definitions live in the previous exercise
assert.equal(analyze('Given $f(x)=2x^2+1$ and $g(x)=3x+5$, find and simplify $f(g(x))$.', '18x^2+60x+51').status, 'pass');
assert.equal(analyze('Given $f(x)=3x^2$ and $g(x)=\\sqrt{x-5}$, find $\\left(\\tfrac{f}{g}\\right)(x)$.', '\\frac{3x^2}{\\sqrt{x-5}}').status, 'pass');

/* ---- inverse-formula: composing with the definition gives the identity */

assert.equal(analyze('Find $f^{-1}(x)$ for $f(x)=x+3$.', 'x-3').status, 'pass');
assert.equal(analyze('Find $f^{-1}(x)$ for $f(x)=x+3$.', 'x+3').status, 'fail');
assert.equal(analyze('Find $f^{-1}(x)$ for $f(x)=\\tfrac{x}{x+2}$.', '-\\tfrac{2x}{x-1}').status, 'pass');
// a restricted-domain inverse verifies through the answer∘definition direction
assert.equal(analyze('What is the inverse of the function $f(x)=2-\\sqrt{x}$?', '(2-x)^2').status, 'pass');

/* ---- inverse-swap: pure notation, no computation */

assert.equal(analyze('Given that $h^{-1}(6)=2$, find $h(2)$.', '6').status, 'pass');
assert.equal(analyze('Given that $h^{-1}(6)=2$, find $h(2)$.', '2').status, 'fail');
assert.equal(analyze('If $f(6)=7$ for a one-to-one function $f$, find $f^{-1}(7)$.', '6').status, 'pass');
assert.equal(analyze('If $f^{-1}(-4)=-8$ for a one-to-one function $f$, find $f(-8)$.', '-4').status, 'pass');

/* ---- slope: two printed points, or a printed linear definition */

assert.equal(analyze('Find the slope of the line through $(2,4)$ and $(4,10)$.', '3').status, 'pass');
assert.equal(analyze('Find the slope of the line through $(2,4)$ and $(4,10)$.', '4').status, 'fail');
assert.equal(analyze('If $f(x)$ is a linear function, and $(2,3)$ and $(0,4)$ are points on the line, find the slope.', '-\\frac{1}{2}').status, 'pass');
assert.equal(analyze('Find the slope of $j(t)=5-t$.', '-1').status, 'pass');
// prose data (units conversions lurk) stays manual
assert.equal(analyze('The population increased from 1,442 to 1,868 between 2009 and 2012. Find the slope.', '142').status, 'skip');

/* ---- intersection: the answered pair satisfies both printed lines */

assert.equal(analyze('Find the point of intersection of the lines $f(x)=2x+5$ and $g(x)=-3x-5$. Enter your answer as an ordered pair.', '(-2,1)').status, 'pass');
assert.equal(analyze('Find the point of intersection of the lines $f(x)=2x+5$ and $g(x)=-3x-5$. Enter your answer as an ordered pair.', '(-2,2)').status, 'fail');
assert.equal(analyze('Find the point of intersection of the lines $2x=y-3$ and $y+4x=15$. Enter your answer as an ordered pair.', '(2,7)').status, 'pass');
assert.equal(analyze('Find the point of intersection of the lines $5x+3y=-65$ and $x-y=-5$. Enter your answer as an ordered pair.', '(-10,-5)').status, 'pass');

/* ---- line-equation: the answered line matches the printed data */

// slope + point, answered in point-slope form
assert.equal(analyze('Write the point-slope form of an equation of a line with a slope of $-2$ that passes through the point $(-2,2)$.', 'y-2=-2(x+2)').status, 'pass');
assert.equal(analyze('Write the point-slope form of an equation of a line with a slope of $-2$ that passes through the point $(-2,2)$.', 'y-2=-3(x+2)').status, 'fail');
assert.equal(analyze('Write the point-slope form of an equation of a line with a slope of $-2$ that passes through the point $(-2,2)$.', 'y-2=-2(x-2)').status, 'fail');
// two points
assert.equal(analyze('Write the point-slope form of an equation of a line that passes through the points $(1,5)$ and $(4,11)$, using $(1,5)$ as $(x_1,y_1)$.', 'y-5=2(x-1)').status, 'pass');
// f(a)=b facts are points
assert.equal(analyze('If $f(x)$ is a linear function, with $f(2)=-11$ and $f(4)=-25$, find an equation for the function in slope-intercept form.', 'y=-7x+3').status, 'pass');
assert.equal(analyze('If $f(x)$ is a linear function, with $f(2)=-11$ and $f(4)=-25$, find an equation for the function in slope-intercept form.', 'y=-7x+4').status, 'fail');
// the bare expression after $y=$, with an $m=…$ span
assert.equal(analyze('Find the equation of a line with slope $4$ and $y$-intercept $(0,1)$. Write it in slope-intercept form, and enter the expression that follows $y=$.', '4x+1').status, 'pass');
assert.equal(analyze('Find the equation of a line with slope $4$ and $y$-intercept $(0,1)$. Write it in slope-intercept form, and enter the expression that follows $y=$.', '4x+2').status, 'fail');
// parallel / perpendicular to a printed definition or line
assert.equal(analyze('Write an equation for a line parallel to $g(x)=3x-1$ and passing through the point $(4,9)$. Enter the expression that $y$ equals.', '3x-3').status, 'pass');
assert.equal(analyze('Write an equation for a line perpendicular to $p(t)=3t+4$ and passing through the point $(3,1)$. Enter the expression that $y$ equals.', '-\\tfrac{1}{3}t+2').status, 'pass');
assert.equal(analyze('Write an equation for a line perpendicular to $p(t)=3t+4$ and passing through the point $(3,1)$. Enter the expression that $y$ equals.', '\\tfrac{1}{3}t+2').status, 'fail');
assert.equal(analyze('Find an equation of a line parallel to the line $y = 3x + 1$ that contains the point $(4, 2)$. Write the equation in slope-intercept form.', '3x-10').status, 'pass');
// reference points vs the target point
assert.equal(
  analyze('A line passes through the points $(-2,-15)$ and $(2,-3)$. Find the equation of a perpendicular line that passes through the point $(6,4)$. Enter the expression that $y$ equals.', '-\\frac{1}{3}x+6').status,
  'pass',
);
// …and the same exercise printed with MathLive's smart fences still verifies
assert.equal(
  analyze('A line passes through the points $\\left(-2,-15\\right)$ and $\\left(2,-3\\right)$. Find the equation of a perpendicular line that passes through the point $\\left(6,4\\right)$. Enter the expression that $y$ equals.', '-\\frac{1}{3}x+6').status,
  'pass',
);
// two different printed m= spans make the requirement ambiguous — skip, never
// let the last span overwrite the relevant one and fail a sound answer
assert.equal(analyze('The line $q$ has slope $m=5$. A second line has slope $m=-2$ and passes through the point $(-2,2)$. Write the point-slope form of an equation of the second line.', 'y-2=-2(x+2)').status, 'skip');
// two m= spans printing the SAME slope stay verifiable
assert.equal(analyze('Both lines have slope $m=-2$. One passes through the point $(-2,2)$; write its equation in point-slope form.', 'y-2=-2(x+2)').status, 'pass');
// vertical line through points sharing an x
assert.equal(analyze('Find the equation of a line containing the points $(5,1)$ and $(5,-4)$.', 'x=5').status, 'pass');
assert.equal(analyze('Find the equation of a line containing the points $(5,1)$ and $(6,-4)$.', 'x=5').status, 'fail');
// a table or graph line prints no data — stays manual
assert.equal(analyze('Using the table above, write a linear function $H(x)$. Enter the rule for $H(x)$.', '0.5x+12.5').status, 'skip');

/* ---- express y as a function of x routes through the solve identity */

assert.equal(analyze('If $x-8y^3=0$, express $y$ as a function of $x$.', '\\frac{\\sqrt[3]{x}}{2}').status, 'pass');
assert.equal(analyze('If $x-8y^3=0$, express $y$ as a function of $x$.', '\\frac{\\sqrt[3]{x}}{4}').status, 'fail');

/* ---- circle-equation: five known points of the printed circle */

assert.equal(
  analyze('Write the standard form of the equation of the circle with center $(2,1)$ that also contains the point $(-2,-2)$.', '(x-2)^2+(y-1)^2=25').status,
  'pass',
);
assert.equal(
  analyze('Write the standard form of the equation of the circle with center $(2,1)$ that also contains the point $(-2,-2)$.', '(x-2)^2+(y-1)^2=24').status,
  'fail',
);
assert.equal(
  analyze('Write the standard form of the equation of the circle with center $(2,1)$ that also contains the point $(-2,-2)$.', '(x+2)^2+(y-1)^2=25').status,
  'fail',
);
// a center printed with MathLive's smart fences still classifies the exercise
assert.equal(
  analyze('Write the standard form of the equation of the circle with center $\\left(2,1\\right)$ that also contains the point $\\left(-2,-2\\right)$.', '(x-2)^2+(y-1)^2=25').status,
  'pass',
);

/* ---- extraction: line numbers survive code-fence blanking */

/* ---- fenced definitions, labelled answers, radius+center, rewrites ------- */

// MathLive smart fences in the printed definition and an `f(6) = 4` label on
// the authored answer both read away (the 08-roots-and-radicals class); a
// corrupted key must FAIL, not slip back to a skip.
assert.equal(analyze('For the function $f \\left(x\\right) = \\sqrt{3 x - 2},$ find $f \\left(6\\right)$', 'f \\left(6\\right) = 4').status, 'pass');
assert.equal(analyze('For the function $f \\left(x\\right) = \\sqrt{3 x - 2},$ find $f \\left(6\\right)$', 'f \\left(6\\right) = 5').status, 'fail');

// a fenced inverse ask still classifies
assert.equal(analyze('For $f \\left(x\\right) = 2x-3$, find $f^{-1}\\left(x\\right)$.', '\\frac{x+3}{2}').status, 'pass');
assert.equal(analyze('For $f \\left(x\\right) = 2x-3$, find $f^{-1}\\left(x\\right)$.', '\\frac{x-3}{2}').status, 'fail');

// the radius-and-center phrasing of the circle ask verifies like the
// contains-point phrasing — r² corrupted to r is the classic slip
assert.equal(analyze('Write the standard form of the equation of the circle with radius $7$ and center $(2,-4)$.', '(x-2)^2+(y+4)^2=49').status, 'pass');
assert.equal(analyze('Write the standard form of the equation of the circle with radius $7$ and center $(2,-4)$.', '(x-2)^2+(y+4)^2=7').status, 'fail');
assert.equal(analyze('Write the standard form of the equation of the circle with radius $\\sqrt{2}$ and center $(0,0)$.', 'x^2+y^2=2').status, 'pass');

// completing-the-square rewrites value-check against the printed subject;
// the template span ($f(x)=a(x-h)^2+k$) is not a second subject
assert.equal(analyze('Write $y=2x^2+4x+5$ in standard form.', 'y=2(x+1)^2+3').status, 'pass');
assert.equal(analyze('Write $y=2x^2+4x+5$ in standard form.', '2(x+1)^2+3').status, 'pass');
assert.equal(analyze('Write $y=2x^2+4x+5$ in standard form.', 'y=2(x-1)^2+3').status, 'fail');
assert.equal(analyze('Rewrite $f(x)=2x^2-8x+3$ in the $f(x)=a(x-h)^2+k$ form by completing the square.', 'f(x)=2(x-2)^2-5').status, 'pass');
assert.equal(analyze('Rewrite $f(x)=2x^2-8x+3$ in the $f(x)=a(x-h)^2+k$ form by completing the square.', 'f(x)=2(x+2)^2-5').status, 'fail');

/* ---- the two complex-argument narrowings (August 15, 2026) ----------------
 * Both were found by this checker reporting three CORRECT Precalculus §3.1
 * answers as failures. A correctness check that rejects sound content is a
 * bug in the check, so each class is skipped — counted out of scope, never
 * silently dropped — and pinned here with the case it got wrong.
 */

// Compute Engine 0.58.0 evaluates `Multiply(3, Complex(2,1))` as 3i, dropping
// the real part, and the corruption happens inside subs(): substituting 2+i
// into x^2+3x+5 folds to 5+3i+... and yields 8+7i for a value that is 14+7i.
assert.equal(
  analyze('If $f(x)=x^2+3x+5$, evaluate $f(2+i)$.', '14+7i').status,
  'skip',
  'an argument with imaginary part +1 is the shape subs() gets wrong',
);
// Everything one step away still evaluates correctly, and stays checked:
// imaginary part -1, and any other imaginary magnitude.
assert.equal(analyze('If $f(x)=2x^2-3x$, evaluate $f(8-i)$.', '102-29i').status, 'pass');
assert.equal(analyze('If $f(x)=2x^2-3x$, evaluate $f(8-i)$.', '102-30i').status, 'fail');
assert.equal(analyze('If $f(x)=x^2+3x+5$, evaluate $f(2+5i)$.', '-10+35i').status, 'pass');
assert.equal(analyze('If $f(x)=x^2+3x+5$, evaluate $f(2+5i)$.', '-4+35i').status, 'fail');
// …and a real argument is untouched by any of this.
assert.equal(analyze('If $f(x)=x^2+3x+5$, evaluate $f(2)$.', '15').status, 'pass');
assert.equal(analyze('If $f(x)=x^2+3x+5$, evaluate $f(2)$.', '16').status, 'fail');

// The re-expression class read `f(8-i)` as a product of a free symbol f with
// its argument and sampled f at 1.3178, manufacturing a disagreement with the
// right answer. An application of a name the question DEFINES is
// function-evaluate's to check, never re-expression's.
assert.equal(
  analyze('Let $f(x)=\\tfrac{x+1}{x-4}$. Evaluate $f(-i)$.', '-\\frac{3}{17}+\\frac{5}{17}i').status,
  'skip',
  'a defined function name must not be sampled as a free variable',
);
// The guard is keyed on the question defining that name — an application of
// an UNdefined function still falls through as it always did.
assert.equal(analyze('Simplify: $2(x+3)$.', '2x+6').status, 'pass');
assert.equal(analyze('Simplify: $2(x+3)$.', '2x+5').status, 'fail');

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
