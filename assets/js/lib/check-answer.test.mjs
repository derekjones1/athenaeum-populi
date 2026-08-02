/**
 * Run with:  node lib/check-answer.test.mjs   (needs Node 22+)
 * Exits 0 if all pass.
 *
 * Inputs are LaTeX — what a MathLive <math-field> emits.
 */

import { checkAnswer, describeAnswerForm, parseAnswerForm } from './check-answer.mjs';

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
