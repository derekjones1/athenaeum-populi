/**
 * Run with:  node lib/check-answer.test.mjs   (needs Node 22+)
 * Exits 0 if all pass.
 *
 * Inputs are LaTeX — what a MathLive <math-field> emits.
 */

import {
  ANSWER_FORM_TOKENS, checkAnswer, describeAnswerForm, parseAnswerForm,
} from './check-answer.mjs';

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
  ['(8,125,2)', '(8,125,2)', 'correct'], // tuple commas are not digit grouping
  ['(8,125, 2)', '(8,125,2)', 'correct'], // whitespace does not turn tuple coordinates into grouping
  ['(8125,2)', '(8,125,2)', 'incorrect'],
  ['(8125, 2)', '(8,125,2)', 'incorrect'],
  ['(8, 125, 2)', '(8,125,2)', 'correct'],
  ['(8,125)', '(8,125)', 'correct'], // ambiguous two-value tuple stays ordered
  ['(8125)', '(8,125)', 'incorrect'],
  ['100+70+6', '176', 'correct'],
  ['400,000 + 25', '400025', 'correct'], // grouping still works in scalar expressions
  // Doubled backslashes can arrive in copied or machine-generated answer data;
  // preprocess() collapses them so the fraction remains gradeable.
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
  // A lone `d` numerator is Leibniz derivative notation to the Compute Engine,
  // so \frac{d}{t} boxed as D(missing, t) and graded *invalid* — and MathLive
  // turns a typed "/" into a \frac, so every distance/rate/time answer a
  // student entered was marked wrong. preprocess() rewrites it to {d}/{t}.
  ['\\frac{d}{t}', 'd/t', 'correct'],
  ['\\frac{d}{r}', '\\frac{d}{r}', 'correct'],
  ['r=\\frac{d}{t}', 'r=d/t', 'correct'],
  ['t=\\frac{d}{r}', '\\frac{d}{r}', 'correct'],
  ['\\tfrac{d}{r}', 'd/r', 'correct'],
  ['\\frac{d}{t}', 'd/r', 'incorrect'], // wrong denominator still wrong
  ['\\frac{r}{t}', 'd/t', 'incorrect'], // wrong numerator still wrong
  ['\\frac{d}{t+1}', 'd/(t+1)', 'correct'], // braces keep a compound denominator grouped
  ['x+\\frac{d}{t}+y', 'x+d/t+y', 'correct'], // and do not disturb precedence in a sum
  ['\\frac{d}{9}', 'd/9', 'correct'], // numeric denominator was already fine — stays fine
  // The rewritten quotient is brace-wrapped, so a postfix operator binds to
  // the whole fraction: \frac{d}{t}^2 is (d/t)^2, not d/(t^2).
  ['\\frac{d}{t}^2', '\\frac{d^2}{t^2}', 'correct'],
  ['\\frac{d}{t}^2', '\\frac{d}{t^2}', 'incorrect'],
  // The rewrite runs after the spacing strip, so spacing-polluted and variant
  // forms of the same defect (virtual keyboard, pasted content, \cfrac) are
  // still recognized rather than graded 'invalid'.
  ['\\frac{\\,d}{t}', 'd/t', 'correct'],
  ['\\frac{d\\,}{t}', 'd/t', 'correct'],
  ['\\frac~{d}{t}', 'd/t', 'correct'],
  ['\\frac{ d }{t}', 'd/t', 'correct'],
  ['\\cfrac{d}{t}', 'd/t', 'correct'],
  // Bare comma lists are split before preprocess(), so a grouping-shaped tail
  // ("-64,125") is no longer spliced into one number. Without this, five
  // sequence terms silently became four and a learner typing the natural
  // spacing was graded wrong.
  ['1,-8,27,-64,125', '1,-8,27,-64,125', 'correct'],
  ['1, -8, 27, -64, 125', '1,-8,27,-64,125', 'correct'],
  ['7, -21, 63, -189, 567', '7,-21,63,-189,567', 'correct'],
  ['1,-8,27,-64,126', '1,-8,27,-64,125', 'incorrect'],
  ['1,-8,27,125,-64', '1,-8,27,-64,125', 'incorrect'], // order still matters
  ['1,-8,27,-64', '1,-8,27,-64,125', 'incorrect'], // a missing term is not a pass
  // A student who drops a term is no longer accepted because the authored
  // answer happened to mangle into the same shape. This was the reachable
  // false accept: four terms graded correct against a five-term answer.
  ['1,-8,27,-64125', '1,-8,27,-64,125', 'incorrect'],
  // An answer that is ENTIRELY one grouped integer keeps the scalar reading —
  // "40,100" is genuinely indistinguishable from forty thousand one hundred,
  // so authors must not write a bare ambiguous list. Parenthesise the pair,
  // drop the commas for a scalar, or split the parts into separate exercises.
  ['40100', '40,100', 'correct'],
  ['(40, 100)', '(40,100)', 'correct'],
  // A student may group a member of a list, and the answerDisplay often shows
  // exactly that form ("$6,-24,96,-384,1{,}536$"), so a grouping comma inside
  // a list must not count as an extra member.
  ['6,-24,96,-384,1,536', '6,-24,96,-384,1536', 'correct'],
  ['6, -24, 96, -384, 1,536', '6,-24,96,-384,1536', 'correct'],
  ['6,-24,96,-384,1536', '6,-24,96,-384,1536', 'correct'],
  ['6,-24,96,-384,1,537', '6,-24,96,-384,1536', 'incorrect'], // regrouping is not a free pass
  // A member may carry SEVERAL grouping commas ("1,048,576") — the merge
  // delegates to stripGroupingCommas, so it rejoins as many commas as the
  // grouping rule collapses, not just one.
  ['262,144, 1,048,576', '262144,1048576', 'correct'],
  ['262144, 1,048,576', '262144,1048576', 'correct'],
  ['262,144, 1,048,577', '262144,1048576', 'incorrect'],
  // A decimal tail is never grouping: "1.5,300" is the list 1.5 , 300 — the
  // old reading spliced it into the scalar 1.5300.
  ['1.5, 300', '1.5,300', 'correct'],
  ['1.5300', '1.5,300', 'incorrect'],
  // List members written as same-variable equations must agree with the
  // authored variable (the ordered path shares the scalar path's equation
  // unwrap), and a bare-value list is accepted against an equation-form
  // answer just as it is for a single root.
  ['y=5, y=6', 'y = 5 , y = 6', 'correct'],
  ['x=5, x=6', 'y = 5 , y = 6', 'incorrect'], // wrong variable is not a pass
  ['5, 6', 'y = 5 , y = 6', 'correct'], // bare values vs authored equations
  ['x=2, x=3', '2,3', 'correct'], // authored bare values, student equations
  // The scalar reading must survive a sign, a decimal tail, or a currency
  // prefix — commasAreAllGrouping() asks the grouping rule rather than
  // pattern-matching a bare integer.
  ['-1000', '-1,000', 'correct'],
  ['1234.5', '1,234.5', 'correct'],
  ['1200.50', '1{,}200.50', 'correct'],
  ['1,\\frac{\\placeholder{}}{2}', '1,2', 'invalid'], // unfilled box inside a list
];
for (const [student, answer, expected] of extra) {
  const got = checkAnswer(student, answer);
  const ok = got === expected;
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  "${student}" vs "${answer}" -> ${got} (expected ${expected})`);
}

const unordered = [
  // Root/solution collections accept any order when the author opts in.
  ['-4\\sqrt{3},4\\sqrt{3}', '4\\sqrt{3},-4\\sqrt{3}', 'correct'],
  ['5,-3', '-3,5', 'correct'],
  ['1,1,2', '2,1,1', 'correct'], // multiset semantics preserve duplicates
  ['1,2', '1,3', 'incorrect'],
  ['1', '1,2', 'incorrect'],
  // The unordered path shares the ordered path's grouping-comma
  // reconciliation ("1,536" is one member, not two) …
  ['6, -24, 96, -384, 1,536', '6,-24,96,-384,1536', 'correct'],
  ['1,536, -24', '-24,1536', 'correct'],
  // … and its equation unwrap, with the same variable-name guard.
  ['x=3, x=-5', 'x = -5 , x = 3', 'correct'],
  ['y=3, y=-5', 'x = -5 , x = 3', 'incorrect'],
  ['3, -5', 'x = -5 , x = 3', 'correct'],
];
for (const [student, answer, expected] of unordered) {
  const got = checkAnswer(student, answer, { mode: 'unordered' });
  const ok = got === expected;
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  unordered "${student}" vs "${answer}" -> ${got} (expected ${expected})`);
}

// The default remains ordered, protecting coordinate tuples, application
// answers, and sequence terms from accidental permutation acceptance.
for (const [student, answer] of [
  ['2,1', '1,2'],
  ['1,4,9,16', '1,9,4,16'],
  ['(2,1)', '(1,2)'],
]) {
  const got = checkAnswer(student, answer);
  const ok = got === 'incorrect';
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ordered "${student}" vs "${answer}" -> ${got} (expected incorrect)`);
}

// ---- answerForm: the shape of a right value ------------------------------
// A re-expression prompt ("Simplify $-\tfrac{40}{88}$") has the printed
// subject as a correct value, so value grading alone accepts the prompt
// retyped back. These check that the shape is graded too — and that a wrong
// value is still reported as wrong rather than as a form complaint.
for (const [student, answer, form, expected] of [
  // lowest terms
  ['-\\tfrac{5}{11}', '-\\tfrac{5}{11}', 'lowest-terms', 'correct'],
  ['-\\tfrac{40}{88}', '-\\tfrac{5}{11}', 'lowest-terms', 'form'],
  ['-\\tfrac{20}{44}', '-\\tfrac{5}{11}', 'lowest-terms', 'form'],
  ['-\\tfrac{5}{12}', '-\\tfrac{5}{11}', 'lowest-terms', 'incorrect'],
  ['0', '\\frac{0}{6}', 'lowest-terms', 'correct'],
  // fraction / decimal, the two directions of a conversion prompt
  ['\\frac{3}{8}', '\\frac{3}{8}', 'fraction lowest-terms', 'correct'],
  ['0.375', '\\frac{3}{8}', 'fraction lowest-terms', 'form'],
  ['\\frac{6}{16}', '\\frac{3}{8}', 'fraction lowest-terms', 'form'],
  ['-0.875', '-0.875', 'decimal', 'correct'],
  ['-\\frac{7}{8}', '-0.875', 'decimal', 'form'],
  // mixed vs improper
  ['4\\frac{1}{2}', '4\\frac{1}{2}', 'mixed-number', 'correct'],
  ['\\frac{9}{2}', '4\\frac{1}{2}', 'mixed-number', 'form'],
  ['\\frac{8}{3}', '\\frac{8}{3}', 'improper-fraction lowest-terms', 'correct'],
  ['2\\frac{2}{3}', '\\frac{8}{3}', 'improper-fraction lowest-terms', 'form'],
  ['\\frac{24}{9}', '\\frac{8}{3}', 'improper-fraction lowest-terms', 'form'],
  // scientific notation — the coefficient must be normalized
  ['9.6\\times10^4', '9.6\\times10^4', 'scientific-notation', 'correct'],
  ['96000', '9.6\\times10^4', 'scientific-notation', 'form'],
  ['96\\times10^3', '9.6\\times10^4', 'scientific-notation', 'form'],
  ['1.03\\times10^{-5}', '1.03\\times10^{-5}', 'scientific-notation', 'correct'],
  // prime factorization — every base must be prime
  ['2\\cdot43', '2\\cdot43', 'prime-product', 'correct'],
  ['86', '2\\cdot43', 'prime-product', 'form'],
  ['2^4\\cdot5', '2^4\\cdot5', 'prime-product', 'correct'],
  ['4\\cdot20', '2^4\\cdot5', 'prime-product', 'form'],
  // an equivalent fraction with a prescribed denominator is NOT reduced
  ['\\frac{75}{100}', '\\frac{75}{100}', 'denominator:100', 'correct'],
  ['\\frac{3}{4}', '\\frac{75}{100}', 'denominator:100', 'form'],
  // A MathLive field emits TeX's brace-less single-token argument for a
  // one-digit fraction, so `-7/9` typed by a learner arrives as `-\frac79`.
  // A braces-only predicate rejected every single-digit fraction.
  ['-\\frac79', '-\\frac{7}{9}', 'lowest-terms', 'correct'],
  // Other shapes a learner really produces: a leading-dot decimal, and the
  // whole response wrapped in parentheses.
  ['.375', '0.375', 'decimal', 'correct'],
  ['\\left(-\\frac{5}{11}\\right)', '-\\frac{5}{11}', 'lowest-terms', 'correct'],
  ['(-\\frac{5}{11})', '-\\frac{5}{11}', 'fraction lowest-terms', 'correct'],
  ['\\frac68', '\\frac{3}{4}', 'lowest-terms', 'form'],
  ['2\\frac23', '\\frac{8}{3}', 'improper-fraction lowest-terms', 'form'],
  ['\\frac83', '2\\frac{2}{3}', 'improper-fraction lowest-terms', 'correct'],
  // expanded / single-term / single-fraction — the Multiply and Divide asks.
  ['w^2+12w+35', 'w^2+12w+35', 'expanded', 'correct'],
  ['(w+5)(w+7)', 'w^2+12w+35', 'expanded', 'form'],
  ['(x+2)^2', 'x^2+4x+4', 'expanded', 'form'],
  ['x+2', 'x+2', 'expanded', 'correct'],
  ['\\frac{x^2-4}{x-2}', 'x+2', 'expanded', 'form'],
  ['12+20i', '12+20i', 'expanded', 'correct'],   // a complex literal is expanded
  ['4i(5-3i)', '12+20i', 'expanded', 'form'],
  // a monomial product: both sides are products, so the term structure decides
  ['-35y^{11}', '-35y^{11}', 'single-term', 'correct'],
  ['(5y^7)(-7y^4)', '-35y^{11}', 'single-term', 'form'],
  ['6a^5 b^6', '6a^5b^6', 'single-term', 'correct'],
  ['(\\tfrac{2}{5} a^4 b^3)(15ab^3)', '6a^5b^6', 'single-term', 'form'],
  // the engine folds the numbers here, so the written \cdot is what is left
  ['9n', '9n', 'single-term', 'correct'],
  ['\\tfrac{3}{7} \\cdot 21n', '9n', 'single-term', 'form'],
  // one quotient, and — when both halves are monomials — a reduced one
  ['\\frac{x+3}{3x}', '\\frac{x+3}{3x}', 'single-fraction', 'correct'],
  ['\\frac{4x}{x+2}\\cdot\\frac{x^2+5x+6}{12x^2}', '\\frac{x+3}{3x}', 'single-fraction', 'form'],
  ['-\\frac{1}{c-3}', '-\\frac{1}{c-3}', 'single-fraction', 'correct'],
  ['\\frac{c+3}{5-c} \\div \\frac{c^2-9}{c-5}', '-\\frac{1}{c-3}', 'single-fraction', 'form'],
  ['-\\frac{12y}{x^2}', '-\\frac{12y}{x^2}', 'single-fraction', 'correct'],
  ['\\tfrac{-84x^8 y^3}{7x^{10} y^2}', '-\\frac{12y}{x^2}', 'single-fraction', 'form'],
  // wrong values stay wrong
  ['w^2+12w+30', 'w^2+12w+35', 'expanded', 'incorrect'],
  ['-35y^{10}', '-35y^{11}', 'single-term', 'incorrect'],
  // simplified-radical — read entirely off the LaTeX, because the engine
  // evaluates radical arithmetic and hands back the answer itself.
  ['\\sqrt{2}', '\\sqrt{2}', 'simplified-radical', 'correct'],
  ['\\sqrt{32}-\\sqrt{18}', '\\sqrt{2}', 'simplified-radical', 'form'],
  ['-\\sqrt{2}', '-\\sqrt{2}', 'simplified-radical', 'correct'],
  ['8\\sqrt{2}-9\\sqrt{2}', '-\\sqrt{2}', 'simplified-radical', 'form'],
  ['8x', '8x', 'simplified-radical', 'correct'],
  ['\\sqrt{64x^2}', '8x', 'simplified-radical', 'form'],
  // nested braces in the radicand must still be read — a radical that never
  // matches is a radical never checked
  // An odd root, deliberately: the engine will not equate `\sqrt[4]{u^{12}}`
  // with `u^3` at all (that is $\lvert u\rvert^3$ without a non-negativity
  // assumption), so an even root would be `incorrect` rather than `form` and
  // would test nothing about the shape.
  ['v^5', 'v^5', 'simplified-radical', 'correct'],
  ['\\sqrt[3]{v^{15}}', 'v^5', 'simplified-radical', 'form'],
  ['3p^2\\sqrt[3]{2p}', '3p^2\\sqrt[3]{2p}', 'simplified-radical', 'correct'],
  // rationalizing: a radical under the bar is not finished
  ['\\frac{\\sqrt{3}}{3}', '\\frac{\\sqrt{3}}{3}', 'simplified-radical', 'correct'],
  ['\\frac{1}{\\sqrt{3}}', '\\frac{\\sqrt{3}}{3}', 'simplified-radical', 'form'],
  // no-like-terms / polynomial / distributed — the Simplify and Combine asks.
  // Every one of these prompts canonicalizes to its own answer, so each
  // predicate has to read something the engine has already folded away.
  ['10x^2+16x+17', '10x^2+16x+17', 'no-like-terms', 'correct'],
  ['3x^2+7x+9+7x^2+9x+8', '10x^2+16x+17', 'no-like-terms', 'form'],
  ['-3a+5b', '-3a+5b', 'no-like-terms', 'correct'],
  ['5a+7b-8a-2b', '-3a+5b', 'no-like-terms', 'form'],
  ['n+3', 'n+3', 'polynomial', 'correct'],
  ['\\tfrac{n^2}{n-4} - \\tfrac{n+12}{n-4}', 'n+3', 'polynomial', 'form'],
  ['3-3x', '3-3x', 'distributed', 'correct'],
  ['9 - 3(x + 2)', '3-3x', 'distributed', 'form'],
  ['y+40', 'y+40', 'distributed', 'correct'],
  ['(y + 12) + 28', 'y+40', 'distributed', 'form'],   // engine folds it; parens remain
  ['31s', '31s', 'single-term', 'correct'],
  ['92 + 31s - 92', '31s', 'single-term', 'form'],    // a written sum is not one term
  ['7x^2', '7x^2', 'single-term', 'correct'],
  ['7x^2 y^0', '7x^2', 'single-term', 'form'],        // a ^0 factor is a written 1
  ['b^{35}', 'b^{35}', 'single-power', 'correct'],
  ['(b^7)^5', 'b^{35}', 'single-power', 'form'],      // variable base
  // `expanded` still permits a remainder term; `polynomial` and `distributed`
  // do not. Asserted so the three are not collapsed into one by a later edit.
  ['x+5+\\frac{3}{x-2}', 'x+5+\\frac{3}{x-2}', 'expanded', 'correct'],
  ['x+5+\\frac{3}{x-2}', 'x+5+\\frac{3}{x-2}', 'polynomial', 'form'],
  // single-power — "Simplify: $(3^8)^2$. Write the answer as a power of 3."
  // `lowest-terms` also rejects the printed nested power, but its feedback
  // would name a reduction step the exercise never asks for.
  ['3^{16}', '3^{16}', 'single-power', 'correct'],
  ['(3^8)^2', '3^{16}', 'single-power', 'form'],
  ['7^{14}', '7^{14}', 'single-power', 'correct'],
  ['7^6\\cdot7^8', '7^{14}', 'single-power', 'form'],
  ['6^9', '6^9', 'single-power', 'correct'],
  ['6^{14}/6^5', '6^9', 'single-power', 'form'],
  ['5^6', '5^6', 'single-power', 'correct'],
  ['5\\cdot5^5', '5^6', 'single-power', 'form'],
  // a wrong value stays wrong
  ['3^{15}', '3^{16}', 'single-power', 'incorrect'],
  // factored — the first SYMBOLIC form. `(x+2)(x+4)` and `x^2+6x+8` are the
  // same value, so only the shape can separate a factorization from the
  // polynomial the prompt printed.
  ['(x+2)(x+4)', '(x+2)(x+4)', 'factored', 'correct'],
  ['(x+4)(x+2)', '(x+2)(x+4)', 'factored', 'correct'],
  ['x^2+6x+8', '(x+2)(x+4)', 'factored', 'form'],
  ['6(a+4)', '6(a+4)', 'factored', 'correct'],
  ['6a+24', '6(a+4)', 'factored', 'form'],
  // a monomial GCF, a leading unary minus, and a trinomial second factor
  ['-6x(x+5)', '-6x(x+5)', 'factored', 'correct'],
  ['-6x^2-30x', '-6x(x+5)', 'factored', 'form'],
  ['3y^2(3x+2x^2+7y)', '3y^2(3x+2x^2+7y)', 'factored', 'correct'],
  ['(x+5)(x^2-5x+25)', '(x+5)(x^2-5x+25)', 'factored', 'correct'],
  ['x^3+125', '(x+5)(x^2-5x+25)', 'factored', 'form'],
  // a perfect square is two copies of one factor, so `^2` satisfies the
  // two-factor minimum
  ['(4y+3)^2', '(4y+3)^2', 'factored', 'correct'],
  ['16y^2+24y+9', '(4y+3)^2', 'factored', 'form'],
  ['(2z-1)(2z+1)(4z^2+1)', '(2z-1)(2z+1)(4z^2+1)', 'factored', 'correct'],
  // shapes a learner (or MathLive) really emits
  ['\\left(x+2\\right)\\left(x+4\\right)', '(x+2)(x+4)', 'factored', 'correct'],
  ['(x+2)\\cdot(x+4)', '(x+2)(x+4)', 'factored', 'correct'],
  ['3u{(5u - v)}^2', '3u(5u-v)^2', 'factored', 'correct'],
  // Multiplying by something equal to 1 is not factoring. Most of these never
  // reach the predicate — the engine folds them back to a plain sum — but a
  // literal unit factor does survive the parse, so it is skipped rather than
  // counted.
  ['1(x^2+6x+8)', '(x+2)(x+4)', 'factored', 'form'],
  ['(x^2+6x+8)\\cdot1', '(x+2)(x+4)', 'factored', 'form'],
  ['\\frac{x}{x}(x^2+6x+8)', '(x+2)(x+4)', 'factored', 'form'],
  ['-(x^2+6x+8)', '-(x+2)(x+4)', 'factored', 'form'],
  // a wrong value is wrong, not a form complaint
  ['(x+2)(x+5)', '(x+2)(x+4)', 'factored', 'incorrect'],
  ['(x+1)(x+8)', '(x+2)(x+4)', 'factored', 'incorrect'],
  // no answerForm — grading is exactly what it was
  ['0.5', '\\frac{1}{2}', undefined, 'correct'],
  ['\\frac{2}{4}', '\\frac{1}{2}', undefined, 'correct'],
  ['\\frac{2}{4}', '\\frac{1}{2}', '', 'correct'],
]) {
  const got = checkAnswer(student, answer, { form });
  const ok = got === expected;
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  form "${student}" vs "${answer}" [${form ?? 'none'}] -> ${got} (expected ${expected})`);
}

{
  const unknown = parseAnswerForm('lowest-terms lowset-terms');
  const ok = unknown.unknown.length === 1 && !unknown.valid;
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  a misspelled answerForm token is reported, not silently ignored`);

  const message = describeAnswerForm('improper-fraction lowest-terms');
  const named = message.includes('improper fraction') && message.includes('lowest terms');
  if (!named) failures++;
  console.log(`${named ? 'PASS' : 'FAIL'}  form feedback names the shape asked for ("${message}")`);

  // Every predicate needs a phrase. A token added to FORM_PREDICATES but not to
  // FORM_PHRASES is still `valid`, so the learner is told to "write it
  // undefined" — a defect only a reader of the rendered page would ever catch.
  for (const token of ANSWER_FORM_TOKENS) {
    const spec = token === 'denominator:<n>' ? 'denominator:7' : token;
    const phrased = describeAnswerForm(spec);
    const ok = phrased !== '' && !phrased.includes('undefined');
    if (!ok) failures++;
    console.log(`${ok ? 'PASS' : 'FAIL'}  the ${token} token has feedback wording ("${phrased}")`);
  }

  const factoredPhrase = describeAnswerForm('factored');
  const saysFactored = factoredPhrase.includes('factored form');
  if (!saysFactored) failures++;
  console.log(`${saysFactored ? 'PASS' : 'FAIL'}  factored feedback names factored form ("${factoredPhrase}")`);
}

// Diagnostic only — printed but never fails the suite. These probe how far
// the Compute Engine's simplifier reaches; promote to `extra` once green.
const diagnostic = [
  ['\\sin^2(x)+\\cos^2(x)', '1', 'correct'],
  ['e^x', '\\exp(x)', 'correct'],
  ['1,23', '123', 'incorrect'], // not a grouping comma — not silently fixed
  // `D` and `N` are reserved function symbols in the Compute Engine, so they
  // are unusable as bare variables even in slash form. No authored answer uses
  // them; recorded here so the limitation is visible if one ever does.
  ['\\frac{D}{t}', 'D/t', 'correct'],
  ['\\frac{N}{t}', 'N/t', 'correct'],
];
for (const [student, answer, expected] of diagnostic) {
  const got = checkAnswer(student, answer);
  console.log(`${got === expected ? 'info' : 'INFO'}  (diagnostic) "${student}" vs "${answer}" -> ${got} (hoped ${expected})`);
}

console.log(failures === 0 ? '\nALL TESTS PASSED' : `\n${failures} FAILURES`);
process.exit(failures === 0 ? 0 : 1);
