/**
 * Run with:  node --test assets/js/lib/check-answer.test.mjs   (needs Node 22+)
 *
 * Inputs are LaTeX — what a MathLive <math-field> emits.
 *
 * The case tables are the value here, so each table is a `test()` group and
 * each row a named subtest: a CI report names the exact pair that regressed,
 * and an engine error thrown on one row no longer takes the rest of the file
 * with it. The tables themselves are unchanged — do not reword a fixture to
 * make a failure go away.
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ANSWER_FORM_TOKENS, checkAnswer, checkFormAsGraded, describeAnswerForm, parseAnswerForm,
  preprocess,
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

test(`grading against ${ANSWER}`, async (t) => {
  for (const [input, expected] of cases) {
    await t.test(JSON.stringify(input), () => {
      assert.equal(checkAnswer(input, ANSWER), expected);
    });
  }
});

const extra = [
  // student, answer, expected
  ['\\frac{1}{2}', '0.5', 'correct'],
  ['0.5', '\\frac{1}{2}', 'correct'],
  // Decimal implicit multiplication: the engine reads "0.32(400)" as
  // repeating-decimal notation (0.32400400…) unless preprocess() makes the
  // product explicit. "compute $0.32(400) + 15$" is the lessons' own
  // notation (slope-intercept cost models), so the exact hint expression
  // must grade correct.
  ['0.32(400)+15', '143', 'correct'],
  ['0.32\\left(400\\right)+15', '143', 'correct'],
  ['17.5(25)', '437.5', 'correct'],
  ['.5(4)', '2', 'correct'],
  ['0.32(400)+15', '144', 'incorrect'], // the rewrite must not loosen grading
  ['1.5(x+2)', '1.5x+3', 'correct'],
  ['0.\\overline{3}', '\\frac{1}{3}', 'correct'], // real repeating decimals use \overline, untouched
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
  // A mixed number that multiplies by JUXTAPOSITION lost its whole part in
  // CE 0.58.0: "2\frac{1}{2}(4)" evaluated to 2·(1/2)·4 = 4 rather than 10.
  // The defect reached real grading through point-slope answers, in both
  // directions — the learner's correct form was refused and a wrong line was
  // accepted against a mixed-number key.
  ['2\\frac{1}{2}(4)', '10', 'correct'],
  ['2\\frac{1}{2}\\left(4\\right)', '10', 'correct'],
  ['2\\frac{1}{2}(4)', '4', 'incorrect'], // the old misparse must not be reachable
  ['y-3=2\\frac{1}{2}(x-4)', 'y=2.5x-7', 'correct'],
  ['y=x-1', 'y-3=2\\frac{1}{2}(x-4)', 'incorrect'], // the false accept
  ['12\\frac{3}{4}(2)', '25.5', 'correct'],
  ['2\\frac{1}{2}x', '2.5x', 'correct'], // juxtaposed variable, not just "("
  ['2\\frac{1}{2}\\sqrt{4}', '5', 'correct'], // juxtaposed command
  ['2\\frac{1}{2}^2', '6.25', 'correct'], // superscript binds the whole number
  // Untouched: already-correct shapes, and forms that are NOT mixed numbers.
  ['2\\frac{1}{2}', '2.5', 'correct'],
  ['2\\frac{1}{2}+1', '3.5', 'correct'],
  ['2\\frac{1}{2}\\cdot3', '7.5', 'correct'],
  ['\\frac{1}{2}(4)', '2', 'correct'], // no whole part — a plain coefficient
  ['2\\frac{x}{2}(4)', '4x', 'correct'], // non-numeric numerator stays a product
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
  // Two CLOSED equations compare side by side, not by truth value. Comparing
  // whether each statement merely holds made EVERY true equation equal to
  // every other, so any exercise keyed to a closed numeric equation — the
  // "write the equation/proportion" asks in four books — was passable by
  // typing unrelated arithmetic, and no answerForm could catch it.
  ['1+1=2', '5^2=25', 'incorrect'],
  ['0=0', '10^6=1{,}000{,}000', 'incorrect'],
  ['1+1=2', '343=7^3', 'incorrect'],
  ['1+1=2', '7 + 6 = 13', 'incorrect'],
  ['\\frac{1}{2}=\\frac{2}{4}', '\\frac{5}{9}=\\frac{20}{36}', 'incorrect'], // a different true proportion
  // The printed prompt of a conversion ask is now rejected on VALUE too, so
  // the equation path reinforces `exponential-form` instead of undoing it.
  ['\\log_5(25)=2', '5^2=25', 'incorrect'],
  // …while restating the SAME relation stays accepted, which is what the
  // equation path is for: either orientation, and sides compared by value.
  ['5^2=25', '5^2=25', 'correct'],
  ['25=5^2', '5^2=25', 'correct'], // reversed orientation
  ['0.01=10^{-2}', '10^{-2}=\\frac{1}{100}', 'correct'], // side written another way
  ['6 + 7 = 13', '7 + 6 = 13', 'correct'], // commuted
  ['\\frac{20}{36}=\\frac{5}{9}', '\\frac{5}{9}=\\frac{20}{36}', 'correct'],
  // A written `f(x)=` label cannot be unwrapped from the parse — `f(x)` boxes
  // as Multiply(f, x), so a learner answering a function-notation prompt with
  // `f(x)=-7x+3` was graded incorrect against the authored `y=-7x+3`. The
  // label is stripped textually, and the name guard does not apply to it:
  // the prompt said f(x), the author wrote y, and both mean the output.
  ['f(x)=-7x+3', 'y=-7x+3', 'correct'],
  ['f(x)=-7x+3', '-7x+3', 'correct'],
  ['f\\left(x\\right)=-7x+3', 'y=-7x+3', 'correct'], // MathLive smart fences around the argument
  ['f(x)=-7x+3', 'f(x)=-7x+3', 'correct'], // an author may write the label too — grading is reflexive
  ['C(n)=24+0.1n', '24+0.1n', 'correct'], // capital names box differently, same strip
  ['f(x)=-7x+4', 'y=-7x+3', 'incorrect'], // wrong value still wrong
  ['f(x)=', 'y=-7x+3', 'invalid'], // a label with nothing after it is no answer
  ['y-5=2(x-1)', 'y-5=2(x-1)', 'correct'], // a genuine equation is never half-eaten
  // The application as an OUTPUT QUANTITY inside an equation — the point-slope
  // response a function-notation prompt invites — reads as `y`.
  ['f(x)-4=-\\frac{1}{2}(x+1)', 'y-4=-\\frac{1}{2}(x+1)', 'correct'],
  ['f(x)-4=-\\frac{1}{2}(x+2)', 'y-4=-\\frac{1}{2}(x+1)', 'incorrect'], // wrong point still wrong
  // A learner may name the function y itself — the y in the application being
  // replaced must not read as a collision against its own rewrite.
  ['y\\left(t\\right)-4=2\\left(t+1\\right)', 'y-4=2(t+1)', 'correct'],
  // The rewrite must verify the WHOLE equation: a differing function symbol
  // on the other side is a different equation, not a notation variant. The
  // engine's own isEqual accepts these (equationsEquivalent guards it).
  ['f(x)-4=g(x)+2', 'y-4=h(x)+2', 'incorrect'],
  ['f(x)-4=g(x)+2', 'y-4=g(x)+2', 'correct'],
  ['y-4=gx+2', 'y-4=hx+2', 'incorrect'], // the raw engine defect, no rewrite involved
  // A non-variable equation against a bare-variable-equation key compares as
  // two equations, not value-vs-condition: "Find an equation of the line…"
  // authored `y=3x-10` accepts the same line however it is stated, and still
  // rejects every other line. The retype hazard this opens (a printed
  // formula proportional to its key) is answerForm's job — `solved:<v>` and
  // the named line forms — enforced by the content lint.
  ['y-2=3(x-4)', 'y=3x-10', 'correct'], // point-slope statement of the key
  ['3x-y=10', 'y=3x-10', 'correct'], // general form
  ['2y=6x-20', 'y=3x-10', 'correct'], // scaled
  ['y=3x+1', 'y=3x-10', 'incorrect'], // a parallel line is a different line
  ['y=-2x-2', 'y-2=-2(x+2)', 'correct'], // and the mirror: bare-variable student, point-slope key
  ['x-4=0', 'x=4', 'correct'], // vertical line restated against a constant-value key
  // `y` written into an implicit product is a meaning of its own — the
  // rewrite that would read `f(x)` as `y` must refuse, or the function
  // output and the `y` of `xy` collapse into one symbol.
  ['f(x)-4=xy', 'y-4=xy', 'incorrect'],
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
test('student response vs authored answer', async (t) => {
  for (const [student, answer, expected] of extra) {
    await t.test(`${student}  vs  ${answer}`, () => {
      assert.equal(checkAnswer(student, answer), expected);
    });
  }
});

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
test('answerMode="unordered"', async (t) => {
  for (const [student, answer, expected] of unordered) {
    await t.test(`${student}  vs  ${answer}`, () => {
      assert.equal(checkAnswer(student, answer, { mode: 'unordered' }), expected);
    });
  }
});

// The default remains ordered, protecting coordinate tuples, application
// answers, and sequence terms from accidental permutation acceptance.
test('the default mode stays ordered', async (t) => {
  for (const [student, answer] of [
    ['2,1', '1,2'],
    ['1,4,9,16', '1,9,4,16'],
    ['(2,1)', '(1,2)'],
  ]) {
    await t.test(`${student}  vs  ${answer}`, () => {
      assert.equal(checkAnswer(student, answer), 'incorrect');
    });
  }
});

// ---- answerForm: the shape of a right value ------------------------------
// A re-expression prompt ("Simplify $-\tfrac{40}{88}$") has the printed
// subject as a correct value, so value grading alone accepts the prompt
// retyped back. These check that the shape is graded too — and that a wrong
// value is still reported as wrong rather than as a form complaint.
const formCases = [
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
  // "Write 6.07 as a fraction or mixed number" — the source offers the
  // choice, so both writings pass and only the printed decimal fails
  ['6\\frac{7}{100}', '6\\frac{7}{100}', 'fraction-or-mixed-number', 'correct'],
  ['\\frac{607}{100}', '6\\frac{7}{100}', 'fraction-or-mixed-number', 'correct'],
  ['6.07', '6\\frac{7}{100}', 'fraction-or-mixed-number', 'form'],
  ['\\frac{8}{3}', '\\frac{8}{3}', 'improper-fraction lowest-terms', 'correct'],
  ['2\\frac{2}{3}', '\\frac{8}{3}', 'improper-fraction lowest-terms', 'form'],
  ['\\frac{24}{9}', '\\frac{8}{3}', 'improper-fraction lowest-terms', 'form'],
  // scientific notation — the coefficient must be normalized
  ['9.6\\times10^4', '9.6\\times10^4', 'scientific-notation', 'correct'],
  ['96000', '9.6\\times10^4', 'scientific-notation', 'form'],
  ['96\\times10^3', '9.6\\times10^4', 'scientific-notation', 'form'],
  ['1.03\\times10^{-5}', '1.03\\times10^{-5}', 'scientific-notation', 'correct'],
  // percent notation — 0.62 and 62% are the same VALUE, so the sign is the
  // whole exercise ("Enter the percent, including the % sign")
  ['62\\%', '62\\%', 'percent', 'correct'],
  ['0.62', '62\\%', 'percent', 'form'],
  ['\\frac{62}{100}', '62\\%', 'percent', 'form'],
  // …and the sign has to be the response's own: a decimal with a zero percent
  // term stapled on ends in `\%` while saying 1.85, and `1.85\cdot100\%` is
  // the same decimal wearing the conversion the question asked for.
  ['185\\%', '185\\%', 'percent', 'correct'],
  ['1.85+0\\%', '185\\%', 'percent', 'form'],
  ['1.85\\cdot100\\%', '185\\%', 'percent', 'form'],
  ['9.3\\%', '9.3\\%', 'percent', 'correct'],
  ['-30\\%', '-30\\%', 'percent', 'correct'],
  // …and the sign may be spaced off the numeral. TeX's ignorable spacing is
  // not a shape: a response is not a different answer for carrying a control
  // space or a quad, which preprocess() drops the way it already drops
  // `\,`/`\;`/`\:`/`\!` and `~`.
  ['9.3\\ \\%', '9.3\\%', 'percent', 'correct'],
  ['9.3\\quad\\%', '9.3\\%', 'percent', 'correct'],
  // The other half of dropping them: a spacing macro is spelled like a
  // control sequence, so a check that reads `\[a-zA-Z]` as symbolic ink
  // counted `\quad` as the symbol — and the decimal the exact tokens exist to
  // refuse passed by holding a space. Dropped, the logarithm still reads as
  // one and the decimal still reads as a decimal.
  ['2.0794415416798357\\quad', '\\ln 8', 'exact-log', 'form'],
  ['\\ln 8\\quad', '\\ln 8', 'exact-log', 'correct'],
  // A response that is ALL zero terms keeps its own writing: `0\%` is the
  // percent answer to a no-change question, and stripping it would leave the
  // token nothing to read.
  ['0\\%', '0\\%', 'percent', 'correct'],
  ['0', '0\\%', 'percent', 'form'],
  // ---- the closed-world notation grammars ---------------------------------
  // Each of these tokens names ONE way of writing an answer whose value the
  // prompt already prints, so each reads the WHOLE response as a grammar
  // (formShape) rather than asking whether some term contains a token. Every
  // authored corpus answer must self-grade, and the printed source notation
  // must not pass.
  //
  // radical ↔ rational-exponent conversions are value-identical by design;
  // each direction must reject the printed source notation
  ['p^{1/3}', 'p^{1/3}', 'rational-exponent', 'correct'],
  ['\\sqrt[3]{p}', 'p^{1/3}', 'rational-exponent', 'form'],
  // …with the coefficient and the compound bases the corpus authors
  ['3 \\left(6 y\\right)^{\\tfrac{1}{4}}', '3 \\left(6 y\\right)^{\\tfrac{1}{4}}', 'rational-exponent', 'correct'],
  ['\\left(\\tfrac{2 m}{3 n}\\right)^{\\tfrac{5}{2}}', '\\left(\\tfrac{2 m}{3 n}\\right)^{\\tfrac{5}{2}}', 'rational-exponent', 'correct'],
  ['\\sqrt{t}', '\\sqrt{t}', 'radical', 'correct'],
  ['\\sqrt[3]{m}', '\\sqrt[3]{m}', 'radical', 'correct'],
  ['t^{1/2}', '\\sqrt{t}', 'radical', 'form'],
  // …in every spelling of a zero coefficient, because a `+0\sqrt1` term is
  // the printed exponent notation with a radical stapled on: \cdot, \times,
  // juxtaposition, a spacing command, a subtracted zero and a decimal zero
  // all multiply out to nothing. A grammar that requires ONE term refuses
  // every one of them for the same reason — there are two.
  ['t^{1/2}+0\\sqrt1', '\\sqrt{t}', 'radical', 'form'],
  ['t^{1/2}+0\\cdot\\sqrt{t}', '\\sqrt{t}', 'radical', 'form'],
  ['t^{1/2}+0\\times\\sqrt{t}', '\\sqrt{t}', 'radical', 'form'],
  ['t^{1/2}+0\\,\\sqrt{t}', '\\sqrt{t}', 'radical', 'form'],
  ['t^{1/2}-0\\sqrt{t}', '\\sqrt{t}', 'radical', 'form'],
  ['t^{1/2}+0.0\\sqrt{t}', '\\sqrt{t}', 'radical', 'form'],
  // `1+\sqrt2` and `0.5\sqrt2` moved contracts. They say "the answer is an
  // exact radical expression", which is not the "write THIS as a radical"
  // conversion `radical` grades — no corpus field keys them there, and a
  // token that accepted both could not refuse `t^{1/2}\sqrt1`.
  // `simplified-radical` is where that concept lives, and its no-decimal rule
  // refuses the decimal coefficient outright.
  ['1+\\sqrt{2}', '1+\\sqrt{2}', 'simplified-radical', 'correct'],
  ['0.5\\sqrt{2}', '0.5\\sqrt{2}', 'simplified-radical', 'form'],
  // the mirror attack on the other direction: `8^{1/3}` is 2, and neither a
  // bare 2 nor 2 wearing an exponent that evaluates to an integer is
  // rational-exponent notation
  ['2+0\\cdot x^2', '8^{1/3}', 'rational-exponent', 'form'],
  ['2', '8^{1/3}', 'rational-exponent', 'form'],
  ['2^1', '8^{1/3}', 'rational-exponent', 'form'],
  ['2\\cdot1^{1/2}', '8^{1/3}', 'rational-exponent', 'form'],
  // exact form — a full-precision machine decimal is value-equal, so only
  // the shape can reject it
  ['\\sqrt{130}', '\\sqrt{130}', 'exact-radical', 'correct'],
  ['11.40175425099138', '\\sqrt{130}', 'exact-radical', 'form'],
  // …and so is the same approximation wearing a fraction bar. This fixture is
  // why `exact-radical` exists rather than plain `simplified-radical`: that
  // predicate PASSES this writing, because it holds no radical to inspect.
  ['\\frac{1140175425099138}{100000000000000}', '\\sqrt{130}', 'exact-radical', 'form'],
  // `130^{1/2}` is exact — and is not the simplest radical form the Distance
  // Formula exercise asks for. The narrowing is deliberate, and the prompt
  // now says so ("Enter the exact form, as a simplified radical").
  ['130^{\\frac{1}{2}}', '\\sqrt{130}', 'exact-radical', 'form'],
  ['\\ln 8+4', '\\ln 8+4', 'exact-log', 'correct'],
  ['\\ln 8', '\\ln 8', 'exact-log', 'correct'],
  ['\\ln 9+2', '\\ln 9+2', 'exact-log', 'correct'],
  ['\\frac{\\log 43}{\\log 7}', '\\frac{\\log 43}{\\log 7}', 'exact-log', 'correct'],
  ['\\frac{\\ln 5}{2}', '\\frac{\\ln 5}{2}', 'exact-log', 'correct'],
  // A calculator readout is refused however it is dressed — plain, retyped
  // WITH the machine's ×10⁰ exponent (which the Compute Engine reads as that
  // number, so the value ladder accepts it), or with a logarithm multiplied
  // by zero stapled on. One rule does all of it: the response writes a
  // decimal point, so the response is an approximation.
  ['2.0794415416798357', '\\ln 8', 'exact-log', 'form'],
  ['2.0794415416798357e0', '\\ln 8', 'exact-log', 'form'],
  ['2.0794415416798357E0', '\\ln 8', 'exact-log', 'form'],
  ['2.0794415416798357+0\\cdot\\log 7', '\\ln 8', 'exact-log', 'form'],
  // summation notation — the printed expanded sum is value-equal to sigma
  ['\\sum_{n=1}^{5}(-1)^{n+1}n^2', '\\sum_{n=1}^{5}(-1)^{n+1}n^2', 'summation', 'correct'],
  ['1-4+9-16+25', '\\sum_{n=1}^{5}(-1)^{n+1}n^2', 'summation', 'form'],
  // …and a sigma worth nothing does not make the expanded sum summation
  // notation, however the zero coefficient is spelled
  ['1-4+9-16+25+0\\cdot\\sum_{n=1}^{1}n', '\\sum_{n=1}^{5}(-1)^{n+1}n^2', 'summation', 'form'],
  ['1-4+9-16+25+0\\sum_{n=1}^{1}n', '\\sum_{n=1}^{5}(-1)^{n+1}n^2', 'summation', 'form'],
  ['\\sum_{n=1}^{5}\\frac{1}{2^n}', '\\sum_{n=1}^{5}\\frac{1}{2^n}', 'summation', 'correct'],
  ['\\sum_{n=1}^{5}(-1)^n2n', '\\sum_{n=1}^{5}(-1)^n2n', 'summation', 'correct'],
  // condense-to-one-logarithm — the printed multi-log sum is value-equal
  ['\\log_2\\frac{5x}{y}', '\\log_2\\frac{5x}{y}', 'single-logarithm', 'correct'],
  ['\\log_2 5+\\log_2 x-\\log_2 y', '\\log_2\\frac{5x}{y}', 'single-logarithm', 'form'],
  // a coefficient outside the logarithm is the Power Property left unapplied
  ['2\\log_2\\sqrt{5x/y}', '\\log_2\\frac{5x}{y}', 'single-logarithm', 'form'],
  ['\\frac{1}{2}\\log_2\\frac{25x^2}{y^2}', '\\log_2\\frac{5x}{y}', 'single-logarithm', 'form'],
  // simplified-radical rejects explicit same-index products, powered radical
  // groups, and negative numeric radicands — while conjugate-rationalized
  // fraction keys keep their authored factored shapes
  ['(\\sqrt[3]{9y^2})(\\sqrt[3]{6y})', '3y\\sqrt[3]{2}', 'simplified-radical', 'form'],
  ['\\left(6 - \\sqrt{5}\\right)^2', '41 - 12\\sqrt{5}', 'simplified-radical', 'form'],
  ['\\sqrt{6}\\left(1 + 3\\sqrt{6}\\right)', '\\sqrt{6}+18', 'simplified-radical', 'form'],
  ['\\sqrt{-11}', 'i\\sqrt{11}', 'simplified-radical', 'form'],
  // exponent notation spells the radical in the rational-exponent exercises'
  // notation, a decimal literal is an approximation, and a bare-juxtaposed
  // same-index pair is the Product Property left unapplied
  ['\\left(-11\\right)^{\\frac12}', 'i\\sqrt{11}', 'simplified-radical', 'form'],
  ['3.3166247903554i', 'i\\sqrt{11}', 'simplified-radical', 'form'],
  // A NEGATIVE fractional exponent is the same notation with the reciprocal
  // taken — and it is exactly how the rationalized keys can be retyped:
  // `3^{-\frac12}` IS `\frac{\sqrt3}{3}`. Every spelling MathLive emits for
  // the exponent has to be read, braced or not, `\frac` or `/` or a decimal.
  ['\\frac{\\sqrt{3}}{3}', '\\frac{\\sqrt{3}}{3}', 'simplified-radical', 'correct'],
  ['3^{-\\frac12}', '\\frac{\\sqrt{3}}{3}', 'simplified-radical', 'form'],
  ['3^{-\\frac{1}{2}}', '\\frac{\\sqrt{3}}{3}', 'simplified-radical', 'form'],
  ['3^{-\\tfrac12}', '\\frac{\\sqrt{3}}{3}', 'simplified-radical', 'form'],
  ['3^{-1/2}', '\\frac{\\sqrt{3}}{3}', 'simplified-radical', 'form'],
  ['3^{-0.5}', '\\frac{\\sqrt{3}}{3}', 'simplified-radical', 'form'],
  ['3^{-.5}', '\\frac{\\sqrt{3}}{3}', 'simplified-radical', 'form'],
  ['3^{+\\frac12}', '\\sqrt{3}', 'simplified-radical', 'form'],
  // …including with a coefficient in front, the shape a rationalized numerator
  // takes ($\frac{5\sqrt3}{3}$ is $5\cdot3^{-\frac12}$)
  ['\\frac{5\\sqrt{3}}{3}', '\\frac{5\\sqrt{3}}{3}', 'simplified-radical', 'correct'],
  ['5\\cdot3^{-\\frac12}', '\\frac{5\\sqrt{3}}{3}', 'simplified-radical', 'form'],
  ['4\\sqrt[4]{12y^3}\\sqrt[4]{8y^3}', '8y\\sqrt[4]{6y^2}', 'simplified-radical', 'form'],
  ['\\frac{\\sqrt{10}(\\sqrt{y} + \\sqrt{3})}{y - 3}', '\\frac{\\sqrt{10}(\\sqrt{y} + \\sqrt{3})}{y - 3}', 'simplified-radical', 'correct'],
  // prime factorization — every base must be prime
  ['2\\cdot43', '2\\cdot43', 'prime-product', 'correct'],
  ['86', '2\\cdot43', 'prime-product', 'form'],
  ['2^4\\cdot5', '2^4\\cdot5', 'prime-product', 'correct'],
  ['4\\cdot20', '2^4\\cdot5', 'prime-product', 'form'],
  // A zero exponent is worth 1, so padding a correct factorization with "k^0"
  // kept the value right while adding a base the form never checked. It was
  // accepted, and with k near 2^53 the primality loop froze the tab for ~2.5s.
  ['2^2\\times3\\times5\\times7^0', '2^2\\times3\\times5', 'prime-product', 'form'],
  ['2^2\\times3\\times5\\times9007199254740881^0', '2^2\\times3\\times5', 'prime-product', 'form'],
  ['2^2\\times3\\times5', '2^2\\times3\\times5', 'prime-product', 'correct'], // unpadded still passes
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
  // A unit-fraction exponent parses as Sqrt/Root, not Power — a monomial all
  // the same. `(a^{1/3}b^{2/3})^{3/2}` answers to `a^{1/2}b`, and the written
  // product still has to fail. Non-unit exponents stay Power and must keep
  // working; a numeric radicand is not a variable base and must keep failing.
  ['a^{\\tfrac{1}{2}}b', 'a^{\\tfrac{1}{2}}b', 'single-term', 'correct'],
  ['(a^{\\tfrac{1}{3}}b^{\\tfrac{2}{3}})^{\\tfrac{3}{2}}', 'a^{\\tfrac{1}{2}}b', 'single-term', 'form'],
  ['5m^{\\tfrac{1}{3}}', '5m^{\\tfrac{1}{3}}', 'single-term', 'correct'],
  ['x^{\\tfrac{2}{3}}y', 'x^{\\tfrac{2}{3}}y', 'single-term', 'correct'],
  ['3\\sqrt{2}', '3\\sqrt{2}', 'single-term', 'form'],
  // one quotient, and — when both halves are monomials — a reduced one
  ['\\frac{x+3}{3x}', '\\frac{x+3}{3x}', 'single-fraction', 'correct'],
  ['\\frac{4x}{x+2}\\cdot\\frac{x^2+5x+6}{12x^2}', '\\frac{x+3}{3x}', 'single-fraction', 'form'],
  ['-\\frac{1}{c-3}', '-\\frac{1}{c-3}', 'single-fraction', 'correct'],
  ['\\frac{c+3}{5-c} \\div \\frac{c^2-9}{c-5}', '-\\frac{1}{c-3}', 'single-fraction', 'form'],
  ['-\\frac{12y}{x^2}', '-\\frac{12y}{x^2}', 'single-fraction', 'correct'],
  ['\\tfrac{-84x^8 y^3}{7x^{10} y^2}', '-\\frac{12y}{x^2}', 'single-fraction', 'form'],
  // The engine folds a numeral fraction to one Rational literal (and
  // `\frac{40x}{88}` to a rational-coefficient product) before any structural
  // check can see the quotient, so reduced-ness is read off the WRITTEN
  // halves — an unreduced numeral fraction is a form miss, not a pass.
  ['\\frac{40x}{88}', '\\frac{5x}{11}', 'single-fraction', 'form'],
  // gcd is an integer notion: a reduced fraction with a decimal coefficient
  // has nothing to cancel and must not fail the form.
  ['\\frac{1.5}{x}', '\\frac{1.5}{x}', 'single-fraction', 'correct'],
  // reduced-fraction — the rational-expression reductions, where both sides
  // are one fraction and only a cancelled POLYNOMIAL factor separates them.
  // The reduced answers pass…
  ['\\frac{x+1}{x-1}', '\\frac{x+1}{x-1}', 'reduced-fraction', 'correct'],
  ['-\\frac{2}{y+5}', '-\\frac{2}{y+5}', 'reduced-fraction', 'correct'],
  ['\\frac{n}{2(n+1)}', '\\frac{n}{2(n+1)}', 'reduced-fraction', 'correct'],
  ['\\frac{(x+1)(x-3)}{2}', '\\frac{(x+1)(x-3)}{2}', 'reduced-fraction', 'correct'],
  ['\\tfrac{b(b+2)(b-5)}{3b-5}', 'b(b+2)(b-5)/(3b-5)', 'reduced-fraction', 'correct'],
  // …including the bivariate ones, whose common factor only a multivariate
  // gcd can rule out — and rule in for the factored-half answers.
  ['\\frac{2(x-3y)}{3(x+3y)}', '\\frac{2(x-3y)}{3(x+3y)}', 'reduced-fraction', 'correct'],
  ['\\tfrac{y+x}{y-x}', '\\frac{y+x}{y-x}', 'reduced-fraction', 'correct'],
  ['\\tfrac{b+a}{a^2+b^2}', '\\frac{b+a}{a^2+b^2}', 'reduced-fraction', 'correct'],
  // …while the printed prompts fail, each for the reason it teaches:
  ['\\frac{x^2-x-2}{x^2-3x+2}', '\\frac{x+1}{x-1}', 'reduced-fraction', 'form'],
  ['\\frac{x^3+8}{x^2-4}', '\\frac{x^2-2x+4}{x-2}', 'reduced-fraction', 'form'],
  ['\\frac{t^3-27}{t^2-9}', '\\frac{t^2+3t+9}{t+3}', 'reduced-fraction', 'form'],
  // an opposite-sign binomial is still a common factor: gcd(x−2, 2−x) has
  // degree 1, which the sign normalization in the PRS is responsible for
  ['\\frac{10-2y}{y^2-25}', '-\\frac{2}{y+5}', 'reduced-fraction', 'form'],
  ['\\frac{x^2-4x-5}{25-x^2}', '-\\frac{x+1}{x+5}', 'reduced-fraction', 'form'],
  // a common INTEGER factor is unreduced too, even with no polynomial one
  ['\\frac{2n^2-10n}{4n^2-16n-20}', '\\frac{n}{2(n+1)}', 'reduced-fraction', 'form'],
  ['\\frac{2x+2}{2x-2}', '\\frac{x+1}{x-1}', 'reduced-fraction', 'form'],
  ['\\tfrac{2x^2-12xy+18y^2}{3x^2-27y^2}', '\\frac{2(x-3y)}{3(x+3y)}', 'reduced-fraction', 'form'],
  // stricter shape gate than single-fraction: a complex fraction, a fraction
  // inside a bigger expression, and a sum of fractions are not ONE fraction
  ['\\cfrac{\\frac{2}{x^2 - 1}}{\\frac{3}{x + 1}}', '\\tfrac{2}{3(x - 1)}', 'reduced-fraction', 'form'],
  // a slash is a fraction bar too: a half holding one is a nested quotient
  ['\\tfrac{p/2}{q/5}', '\\frac{5p}{2q}', 'reduced-fraction', 'form'],
  ['\\tfrac{a}{b}^5', '\\frac{a^5}{b^5}', 'reduced-fraction', 'form'],
  ['\\frac{2}{x}+\\frac{3}{x}', '\\frac{5}{x}', 'reduced-fraction', 'form'],
  // numeral fractions take the same integer-gcd path as lowest-terms
  ['\\frac{40}{88}', '\\frac{5}{11}', 'reduced-fraction', 'form'],
  ['\\frac{5}{11}', '\\frac{5}{11}', 'reduced-fraction', 'correct'],
  // fail open: a half the polynomial reader cannot digest (a decimal, a
  // radical, an absolute value) must never reject a correct answer…
  ['\\frac{1.5}{x-1}', '\\frac{1.5}{x-1}', 'reduced-fraction', 'correct'],
  ['\\frac{7x^2\\sqrt{x}}{3\\left|y^3\\right|\\sqrt{y}}', '\\frac{7x^2\\sqrt{x}}{3\\left|y^3\\right|\\sqrt{y}}', 'reduced-fraction', 'correct'],
  // …and a non-fraction response composes the way lowest-terms does
  ['x+1', 'x+1', 'reduced-fraction', 'correct'],
  // value before form, pinned by an input that fails both checks
  ['\\frac{2x+2}{2x-4}', '\\frac{x+1}{x-1}', 'reduced-fraction', 'incorrect'],
  // grading is repeatable: the cached boxed halves are only read, never
  // mutated, so the same pair grades the same twice
  ['\\frac{x^2-x-2}{x^2-3x+2}', '\\frac{x+1}{x-1}', 'reduced-fraction', 'form'],
  // a single power — numeric bases take a negative exponent exactly as
  // variable bases do, and the source's reciprocal form counts too
  ['2^{-3}', '2^{-3}', 'single-power', 'correct'],
  ['\\tfrac{1}{2^3}', '2^{-3}', 'single-power', 'correct'],
  ['3^8 \\cdot 3^2', '3^{10}', 'single-power', 'form'],
  // Wrong values stay wrong — and stay 'incorrect' even when the response
  // ALSO violates the form. These inputs fail both checks, so they pin the
  // value-before-form order: a fast-path refactor that read the cheap shape
  // first would tell a learner with the wrong value "that value is right —
  // now write it in expanded form", the exact bug the form check was built
  // not to have. (The cases above all pair a wrong form with a RIGHT value,
  // so they cannot see the ordering.)
  ['w^2+12w+30', 'w^2+12w+35', 'expanded', 'incorrect'],
  ['-35y^{10}', '-35y^{11}', 'single-term', 'incorrect'],
  ['(w+5)(w+8)', 'w^2+12w+35', 'expanded', 'incorrect'],
  ['\\frac{6}{9}', '\\frac{3}{4}', 'lowest-terms', 'incorrect'],
  ['\\frac{34}{36}', '\\frac{17}{18}', 'single-fraction', 'form'],
  ['\\frac{34}{40}', '\\frac{17}{18}', 'single-fraction', 'incorrect'],
  ['\\sqrt{50}', '\\sqrt{2}', 'simplified-radical', 'incorrect'],
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
  // An irreducible SUM under the radical has no factor to pull out — the
  // perfect-power tests must not read its leading term and reject a correct
  // Pythagorean-style answer forever.
  ['\\sqrt{4+x}', '\\sqrt{4+x}', 'simplified-radical', 'correct'],
  ['\\sqrt{x^2+y^2}', '\\sqrt{x^2+y^2}', 'simplified-radical', 'correct'],
  // TeX's single-token argument again: hand-typed `\sqrt2` carries no braces,
  // and an unchecked radical must not become an unexamined one.
  ['\\sqrt2', '\\sqrt{2}', 'simplified-radical', 'correct'],
  ['8\\sqrt2-9\\sqrt2', '-\\sqrt{2}', 'simplified-radical', 'form'],
  // The non-termination guard (see equivalent()'s banner): the engine's
  // `isEqual` never returns on a quotient whose denominator mixes a variable
  // radicand with a numeric one — the shape every "rationalize a two-term
  // denominator" prompt prints, pasted by retyping the prompt. Before the
  // guard, each of the next five gradings froze the page; a run of this suite
  // that regresses the guard hangs here rather than failing politely.
  ['\\frac{\\sqrt{2}}{\\sqrt{x}-\\sqrt{3}}', '\\frac{\\sqrt{2}(\\sqrt{x}+\\sqrt{3})}{x-3}', 'simplified-radical', 'form'],
  ['\\frac{\\sqrt{5}}{\\sqrt{x}+\\sqrt{2}}', '\\frac{\\sqrt{5}(\\sqrt{x}-\\sqrt{2})}{x-2}', 'simplified-radical', 'form'],
  ['\\frac{\\sqrt{10}}{\\sqrt{y}-\\sqrt{3}}', '\\frac{\\sqrt{10}(\\sqrt{y}+\\sqrt{3})}{y-3}', 'simplified-radical', 'form'],
  // …and it hangs against ANY comparand once one side has the shape, so a
  // wrong answer must come back `incorrect`, not freeze.
  ['\\frac{\\sqrt{2}}{\\sqrt{x}-\\sqrt{3}}', 'x', 'simplified-radical', 'incorrect'],
  ['\\frac{\\sqrt{7}}{\\sqrt{x}-\\sqrt{3}}', '\\frac{\\sqrt{2}(\\sqrt{x}+\\sqrt{3})}{x-3}', 'simplified-radical', 'incorrect'],
  // The both-terms-radical prompts share the guarded shape without hanging;
  // numeric sampling upgrades their pasted prompt from a silent false
  // `incorrect` to the `form` message the answerForm was built to produce.
  ['\\frac{\\sqrt{p}+\\sqrt{2}}{\\sqrt{p}-\\sqrt{2}}', '\\frac{(\\sqrt{p}+\\sqrt{2})^2}{p-2}', 'simplified-radical', 'form'],
  ['\\frac{\\sqrt{12r^3}}{\\sqrt{6r}}', 'r\\sqrt{2}', 'simplified-radical', 'form'],
  // The guarded path must not touch what already worked: a correct answer
  // with its radicals in the NUMERATOR takes the unguarded ladder as before.
  ['\\frac{\\sqrt{10}\\sqrt{y}+\\sqrt{30}}{y-3}', '\\frac{\\sqrt{10}(\\sqrt{y}+\\sqrt{3})}{y-3}', 'simplified-radical', 'correct'],
  ['\\frac{\\sqrt{2}(\\sqrt{x}+3)}{x-3}', '\\frac{\\sqrt{2}(\\sqrt{x}+\\sqrt{3})}{x-3}', 'simplified-radical', 'incorrect'],
  // Sampling also decides where the engine merely false-negatived, so a
  // pasted higher-roots prompt is now recognized as value-equal — `form`,
  // not a silent (and wrong) `incorrect`. That recognition is what forces
  // the answerForm onto every radical re-expression exercise.
  ['\\sqrt[3]{32y^5} - \\sqrt[3]{-108y^8}', '2y\\sqrt[3]{4y^2} + 3y^2\\sqrt[3]{4y^2}', 'simplified-radical', 'form'],
  // …which in turn needs the like-radicals key to match the source's own
  // convention: same index and radicand stay SEPARATE terms when their
  // coefficients are unlike (`2y` vs `3y^2` — the worked answers keep them),
  // and still combine when the coefficients are like (`8` and `9`, tested
  // above). A different root index is never a repeat.
  ['2y\\sqrt[3]{4y^2} + 3y^2\\sqrt[3]{4y^2}', '2y\\sqrt[3]{4y^2} + 3y^2\\sqrt[3]{4y^2}', 'simplified-radical', 'correct'],
  ['3y^2\\sqrt[3]{4y^2} + 2y\\sqrt[3]{4y^2}', '2y\\sqrt[3]{4y^2} + 3y^2\\sqrt[3]{4y^2}', 'simplified-radical', 'correct'],
  ['2y\\sqrt[3]{4y^2} + 3y\\sqrt[3]{4y^2}', '2y\\sqrt[3]{4y^2} + 3y^2\\sqrt[3]{4y^2}', 'simplified-radical', 'incorrect'],
  ['\\sqrt{2}+\\sqrt[3]{2}', '\\sqrt{2}+\\sqrt[3]{2}', 'simplified-radical', 'correct'],
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
  // vertex-form — the §6 "standard form" class, parabola half. Completing the
  // square changes the shape, not the value, so the printed general form
  // grades equal to the answer and only the squared-binomial test separates
  // them. A written `y=`/`x=`/`f(x)=` label is stripped off the LaTeX.
  ['2(x+1)^2+3', '2(x+1)^2+3', 'vertex-form', 'correct'],
  ['y=2x^2+4x+5', '2(x+1)^2+3', 'vertex-form', 'form'],
  ['2x^2+4x+5', '2(x+1)^2+3', 'vertex-form', 'form'],
  ['y=2(x-1)^2-4', 'y=2(x-1)^2-4', 'vertex-form', 'correct'],
  ['y=2x^2-4x-2', 'y=2(x-1)^2-4', 'vertex-form', 'form'],
  // the horizontal orientation is the same shape in the other variable
  ['3(y+1)^2+4', '3(y+1)^2+4', 'vertex-form', 'correct'],
  ['x=3y^2+6y+7', '3(y+1)^2+4', 'vertex-form', 'form'],
  // k may be zero, and the coefficient may be a fraction
  ['-(x-4)^2', '-(x-4)^2', 'vertex-form', 'correct'],
  ['-x^2+8x-16', '-(x-4)^2', 'vertex-form', 'form'],
  // solved:<variable> — the solve-a-formula class. Equation-equivalence
  // grading accepts the printed formula retyped back (it is the same
  // condition), so the isolation is the form; the variable is named because
  // a formula can arrive already solved for the OTHER side ($x=5y-10$).
  ['y=11-7x', 'y=11-7x', 'solved:y', 'correct'],
  ['7x+y=11', 'y=11-7x', 'solved:y', 'form'], // the prompt retyped back
  ['11-7x=y', 'y=11-7x', 'solved:y', 'correct'], // isolated on the right is isolated
  ['y=\\frac{10-3x}{4}', 'y=(10-3x)/4', 'solved:y', 'correct'],
  ['3x+y=10', 'y=(10-3x)/4', 'solved:y', 'incorrect'], // wrong value stays wrong, not 'form'
  ['x=5y-10', 'y=\\frac{x+10}{5}', 'solved:y', 'form'], // solved for x is not solved for y
  ['t=\\frac{d}{r}', 't=\\frac{d}{r}', 'solved:t', 'correct'],
  ['d=rt', 't=\\frac{d}{r}', 'solved:t', 'incorrect'], // not proportional — value check already rejects
  ['-\\frac{1}{20}(x-20)^2+20', '-\\frac{1}{20}(x-20)^2+20', 'vertex-form', 'correct'],
  // a half-completed square is not vertex form, and neither is the expansion
  // of a vertex-from-a-point answer
  ['2(x^2+2x)+5', '2(x+1)^2+3', 'vertex-form', 'form'],
  ['x^2-6x+5', '(x-3)^2-4', 'vertex-form', 'form'],
  ['3(x-1)^2+1', '3(x-1)^2+2', 'vertex-form', 'incorrect'],
  // conic-standard-form — the ellipse/hyperbola half: coefficient-1 squared
  // terms over integers, against exactly 1. The general-form retype fails on
  // its right side; a numerator keeping its coefficient fails because that
  // division was the ask; a slash-written fraction still counts as one.
  ['\\frac{x^2}{16}+\\frac{y^2}{9}=1', '\\frac{x^2}{16}+\\frac{y^2}{9}=1', 'conic-standard-form', 'correct'],
  ['9x^2+16y^2=144', '\\frac{x^2}{16}+\\frac{y^2}{9}=1', 'conic-standard-form', 'form'],
  ['\\frac{9x^2}{144}+\\frac{16y^2}{144}=1', '\\frac{x^2}{16}+\\frac{y^2}{9}=1', 'conic-standard-form', 'form'],
  ['x^2/16+y^2/9=1', '\\frac{x^2}{16}+\\frac{y^2}{9}=1', 'conic-standard-form', 'correct'],
  ['1=\\frac{x^2}{16}+\\frac{y^2}{9}', '\\frac{x^2}{16}+\\frac{y^2}{9}=1', 'conic-standard-form', 'correct'],
  ['\\frac{(x+1)^2}{6}+\\frac{(y-4)^2}{9}=1', '\\frac{(x+1)^2}{6}+\\frac{(y-4)^2}{9}=1', 'conic-standard-form', 'correct'],
  ['6x^2+4y^2+12x-32y+34=0', '\\frac{(x+1)^2}{6}+\\frac{(y-4)^2}{9}=1', 'conic-standard-form', 'form'],
  ['4y^2-25x^2=100', '\\frac{y^2}{25}-\\frac{x^2}{4}=1', 'conic-standard-form', 'form'],
  // circle-standard-form — two coefficient-1 squared terms against r^2; the
  // general form fails on its linear terms and its zero right side
  ['(x+5)^2+(y+3)^2=4', '(x+5)^2+(y+3)^2=4', 'circle-standard-form', 'correct'],
  ['x^2+y^2+10x+6y+30=0', '(x+5)^2+(y+3)^2=4', 'circle-standard-form', 'form'],
  ['x^2+y^2=121', 'x^2+y^2=121', 'circle-standard-form', 'correct'],
  // point-slope-form — the prompt prints nothing to retype, but the engine
  // grades the distributed and the scaled restatements equal to the authored
  // equation, so only the m(x-x_1) shape separates them
  ['y-5=2(x-1)', 'y-5=2(x-1)', 'point-slope-form', 'correct'],
  ['y-5=2x-2', 'y-5=2(x-1)', 'point-slope-form', 'form'],
  ['2y-10=4(x-1)', 'y-5=2(x-1)', 'point-slope-form', 'form'],
  ['2(x-1)=y-5', 'y-5=2(x-1)', 'point-slope-form', 'correct'],
  ['y-4=-\\frac{1}{2}(x+1)', 'y-4=-\\frac{1}{2}(x+1)', 'point-slope-form', 'correct'],
  ['y-4=-0.5(x+1)', 'y-4=-\\frac{1}{2}(x+1)', 'point-slope-form', 'correct'],
  ['y-4=-\\frac{x+1}{2}', 'y-4=-\\frac{1}{2}(x+1)', 'point-slope-form', 'correct'],
  // function notation reads as y before the form check sees it
  ['f(x)-4=-\\frac{1}{2}(x+1)', 'y-4=-\\frac{1}{2}(x+1)', 'point-slope-form', 'correct'],
  // a labelled equation keeps its equation reading for the form check: the
  // collapsed-origin point-slope answer written as f(x)=m(x-x_1) is correct,
  // not 'form' — the label reading (bare RHS) has no equation to show
  ['f\\left(x\\right)=5\\left(x-3\\right)', 'y=5(x-3)', 'point-slope-form', 'correct'],
  // the collapsed origin case is point-slope with both subtractions evaluated
  ['y=-3x', 'y-0=-3(x-0)', 'point-slope-form', 'correct'],
  ['y-0=-3(x-0)', 'y-0=-3(x-0)', 'point-slope-form', 'correct'],
  // a slope-intercept response is the same line, so equation-equivalence
  // grades its value correct and the ask's shape is what rejects it
  ['y=2x+3', 'y-5=2(x-1)', 'point-slope-form', 'form'],
  ['y-3=2(x-1)', 'y-5=2(x-1)', 'point-slope-form', 'incorrect'], // wrong point — a different line
  // slope-intercept-form — the undistributed and single-fraction restatements
  // grade equal to the authored answer, equation and bare-expression alike
  ['y=-2x-2', 'y=-2x-2', 'slope-intercept-form', 'correct'],
  ['y=-2(x+2)+2', 'y=-2x-2', 'slope-intercept-form', 'form'],
  ['-2x-2', 'y=-2x-2', 'slope-intercept-form', 'correct'],
  ['-\\frac{1}{3}(x-6)-4', '-\\frac{1}{3}x-2', 'slope-intercept-form', 'form'],
  ['\\frac{-x-6}{3}', '-\\frac{1}{3}x-2', 'slope-intercept-form', 'form'],
  ['\\frac{-x}{3}-2', '-\\frac{1}{3}x-2', 'slope-intercept-form', 'correct'],
  ['y=-\\frac{1}{3}x-2', '-\\frac{1}{3}x-2', 'slope-intercept-form', 'correct'],
  ['f(x)=-7x+3', 'y=-7x+3', 'slope-intercept-form', 'correct'],
  ['f\\left(x\\right)=-7x+3', 'y=-7x+3', 'slope-intercept-form', 'correct'],
  ['x', 'x', 'slope-intercept-form', 'correct'],
  // the stripped label reaches EVERY form predicate, not just the two that
  // strip their own — a labelled factored answer is factored
  ['f\\left(x\\right)=\\left(x+2\\right)\\left(x+4\\right)', '(x+2)(x+4)', 'factored', 'correct'],
  // exponential-form — two TRUE statements grade equal, so only the written
  // notation separates the conversion from the prompt retyped
  ['343=7^3', '343=7^3', 'exponential-form', 'correct'],
  // Once the closed-equation path compared sides instead of truth values, the
  // printed prompt stopped being the right VALUE in the wrong shape and became
  // simply a different statement — so it is refused before the form check.
  ['3=\\log_7 343', '343=7^3', 'exponential-form', 'incorrect'],
  // The token still separates a value-equal response that has NOT finished the
  // conversion — a logarithm left standing in an otherwise correct value.
  ['10^{\\log 100}', '100', 'exponential-form', 'form'],
  ['100', '100', 'exponential-form', 'correct'],
  // base-e — "change this function to one having e as the base" answers the
  // SAME function, so the printed subject grades correct by construction and
  // only the written base can refuse it.
  ['3e^{(\\ln0.5)x}', '3e^{(\\ln0.5)x}', 'base-e', 'correct'],
  ['3(0.5)^x', '3e^{(\\ln0.5)x}', 'base-e', 'form'],
  ['x^2', 'x^2', 'base-e', 'correct'], // a numeric exponent is a power function, not an exponential
  // expanded-logarithms — every written log takes a single atom
  ['2+\\log_5 a+\\log_5 b', '2+\\log_5 a+\\log_5 b', 'expanded-logarithms', 'correct'],
  ['\\log_5 25ab', '2+\\log_5 a+\\log_5 b', 'expanded-logarithms', 'form'],
  ['\\frac{1}{4}(\\log_2 5+3\\log_2 x-4-2\\log_2 y-7\\log_2 z)',
    '\\frac{1}{4}(\\log_2 5+3\\log_2 x-4-2\\log_2 y-7\\log_2 z)', 'expanded-logarithms', 'correct'],
  ['\\log_2\\sqrt[4]{\\tfrac{5x^3}{16y^2z^7}}',
    '\\frac{1}{4}(\\log_2 5+3\\log_2 x-4-2\\log_2 y-7\\log_2 z)', 'expanded-logarithms', 'form'],
  // `\ln` is a logarithm. The opener matched only `\log`, so a natural-log
  // expression entered the scan zero times and the predicate passed EVERY
  // input — the form check failed open on precisely the §4.5 prompts, and a
  // learner could pass by retyping the printed expression.
  ['\\ln 3+2\\ln x+\\ln y', '\\ln 3+2\\ln x+\\ln y', 'expanded-logarithms', 'correct'],
  ['\\ln(3x^2y)', '\\ln 3+2\\ln x+\\ln y', 'expanded-logarithms', 'form'],
  ['\\ln a-\\ln b', '\\ln a-\\ln b', 'expanded-logarithms', 'correct'],
  ['\\ln\\frac{a}{b}', '\\ln a-\\ln b', 'expanded-logarithms', 'form'],
  // A top-level SUM inside the logarithm is already fully expanded — no log
  // rule splits a sum — so demanding a bare atom would reject the correct
  // answer. The nested sums of a PRODUCT of binomials are still expandable.
  ['\\ln(x+3)+\\ln(x-1)', '\\ln(x+3)+\\ln(x-1)', 'expanded-logarithms', 'correct'],
  ['\\ln((x+3)(x-1))', '\\ln(x+3)+\\ln(x-1)', 'expanded-logarithms', 'form'],
  ['\\log(x^2+1)', '\\log(x^2+1)', 'expanded-logarithms', 'correct'], // a power inside a sum is not a power rule
  ['\\log(x^2)', '2\\log x', 'expanded-logarithms', 'form'], // a bare power still is
  // evaluated-trig — the printed subject of an exact-value ask IS its answer
  ['\\frac{\\sqrt{2}}{2}', '\\frac{\\sqrt{2}}{2}', 'evaluated-trig', 'correct'],
  ['\\cos\\left(\\frac{\\pi}{4}\\right)', '\\frac{\\sqrt{2}}{2}', 'evaluated-trig', 'form'],
  ['\\sec\\left(\\frac{\\pi}{3}\\right)', '2', 'evaluated-trig', 'form'],
  // the two spellings of an inverse application are one unevaluated function
  ['\\frac{\\pi}{6}', '\\frac{\\pi}{6}', 'evaluated-trig', 'correct'],
  ['\\sin^{-1}\\left(\\frac{1}{2}\\right)', '\\frac{\\pi}{6}', 'evaluated-trig', 'form'],
  ['\\arcsin\\left(\\frac{1}{2}\\right)', '\\frac{\\pi}{6}', 'evaluated-trig', 'form'],
  // evaluated-logarithm — exponential-form's predicate, its own feedback
  ['3', '3', 'evaluated-logarithm', 'correct'],
  ['\\log_2 8', '3', 'evaluated-logarithm', 'form'],
  ['\\ln e^{3}', '3', 'evaluated-logarithm', 'form'],
  // degrees / radians — ^\circ is an exact operator, so the two spellings of
  // one angle grade equal and only the written unit separates them
  ['225^\\circ', '225^\\circ', 'degrees', 'correct'],
  ['\\frac{5\\pi}{4}', '225^\\circ', 'degrees', 'form'],
  // a degree symbol worn without being one: the value never moved
  ['\\frac{5\\pi}{4}+0^\\circ', '225^\\circ', 'degrees', 'form'],
  ['\\frac{5\\pi}{4}', '\\frac{5\\pi}{4}', 'radians', 'correct'],
  ['225^\\circ', '\\frac{5\\pi}{4}', 'radians', 'form'],
  ['2', '2', 'radians', 'correct'],
  // simplified-radical tightenings: unevaluated numeral arithmetic and
  // fractions under the root, signed perfect powers, written-out units, and
  // same-index numeral-radical products all reject now
  ['\\sqrt{64 + 225}', '17', 'simplified-radical', 'form'],
  ['\\sqrt{64 + 225}', '17', 'decimal', 'form'],
  ['\\sqrt{\\tfrac{25}{16}}', '\\tfrac{5}{4}', 'fraction lowest-terms', 'form'],
  ['\\sqrt{\\tfrac{19}{49}}', '\\tfrac{\\sqrt{19}}{7}', 'simplified-radical', 'form'],
  ['\\tfrac{\\sqrt{19}}{7}', '\\tfrac{\\sqrt{19}}{7}', 'simplified-radical', 'correct'],
  ['\\sqrt{3} \\cdot \\sqrt{6}', '3\\sqrt{2}', 'simplified-radical', 'form'],
  ['3\\sqrt{2}', '3\\sqrt{2}', 'simplified-radical', 'correct'],
  ['\\sqrt[3]{-108}', '-3\\sqrt[3]{4}', 'simplified-radical', 'form'],
  ['-3\\sqrt[3]{4}', '-3\\sqrt[3]{4}', 'simplified-radical', 'correct'],
  ['\\sqrt{-8} + \\sqrt{-32}', '6 \\sqrt{2} i', 'simplified-radical', 'form'],
  ['6 \\sqrt{2} i', '6 \\sqrt{2} i', 'simplified-radical', 'correct'],
  ['-\\sqrt{1}', '-1', 'decimal', 'form'],
  ['\\tfrac{\\sqrt[3]{90}}{6}', '\\tfrac{\\sqrt[3]{90}}{6}', 'simplified-radical', 'correct'],
  // …while the numeral-only scoping keeps the corpus's own worked shapes
  // correct: a variable radicand never counts toward the product pair
  ['\\frac{\\sqrt{10}\\sqrt{y}+\\sqrt{30}}{y-3}', '\\frac{\\sqrt{10}(\\sqrt{y}+\\sqrt{3})}{y-3}', 'simplified-radical', 'correct'],
  // no answerForm — grading is exactly what it was
  ['0.5', '\\frac{1}{2}', undefined, 'correct'],
  ['\\frac{2}{4}', '\\frac{1}{2}', undefined, 'correct'],
  ['\\frac{2}{4}', '\\frac{1}{2}', '', 'correct'],
];
test('answerForm grades the shape as well as the value', async (t) => {
  for (const [student, answer, form, expected] of formCases) {
    await t.test(`${student}  vs  ${answer}  [${form ?? 'none'}]`, () => {
      assert.equal(checkAnswer(student, answer, { form }), expected);
    });
  }
});

// ---- the decoration attack ------------------------------------------------
// Ink that changes no value is the universal attack on every predicate that
// reads a response for a notation TOKEN: the wrong shape keeps its value, the
// value ladder passes it, and the decoration shows the predicate the notation
// the response never used.
//
// This sweep used to carry only ONE family — a literal zero at the head of a
// top-level additive term — and that is exactly the family
// `loadBearingTerms`/`isZeroTerm` knows how to strip. A sweep whose whole
// contents are the one case the defence handles cannot find the next case, and
// it did not: 39 further bypasses of `rational-exponent`, `radical` and the old
// generic `exact` were reachable through the four families added below, the
// cheapest being two keystrokes (`2^1`).
//
// Every wrong-shape fixture in the table above is re-graded with each
// decoration. None may buy a `correct`. The sweep grows with the table, so a
// fixture added for a new predicate arrives already attacked.
const DECORATIONS = [
  // --- additive, worth a LITERAL zero (the original family) ---------------
  '+0',
  '+0\\cdot\\sqrt{2}',
  '+0\\sqrt{2}',
  '+0\\cdot\\log 7',
  '+0\\cdot\\sum_{n=1}^{1}n',
  '+0\\cdot x^{1/2}',
  '+0\\%',
  // …and the same zero wearing redundant grouping or a leading run of zeros.
  // The padding is chosen by whoever wants it to pass, so `+(0)\sqrt2` and
  // `+00\sqrt2` buy exactly what `+0\sqrt2` buys unless the detector reads
  // through the spelling — refusing one keystroke is not a defence.
  '+(0)\\sqrt{2}',
  '-(-0)\\sqrt{2}',
  '+{0}\\cdot\\log 7',
  '+00\\cdot\\sum_{n=1}^{1}n',
  // --- additive, worth zero but NOT literally zero ------------------------
  // A blocklist loses here by construction: `\sqrt4-2` is worth nothing and
  // is not syntactically trivial, and the next spelling is `\sqrt9-3`.
  '+\\log 1',
  '+\\sqrt0',
  '+\\sqrt4-2',
  '+\\sqrt9-3',
  '+\\sum_{n=1}^{1}\\log 1',
  // --- multiplicative identity, invisible to a top-level additive split ----
  '\\sqrt1',
  '\\cdot1^{1/2}',
  '\\cdot x^0',
  '\\cdot\\frac{\\log 7}{\\log 7}',
  '\\cdot(3^0)',
  '\\cdot\\sqrt[3]{1}',
  // --- nesting: the decoration below the top level ------------------------
  '\\cdot(1+\\frac{0}{7}\\sqrt{2})',
  '\\cdot(1+0\\cdot x^{1/2})',
  // --- exponent SPELLING, where the value is an integer -------------------
  // `^{2/2}` reads as a rational exponent to any detector that matches on
  // ink; by value it is 1.
  '^1',
  '^{1}',
  '^{2/2}',
  '^{\\frac{3}{3}}',
];
const wrongShapeCases = formCases.filter(([, , form, expected]) => form && expected === 'form');

test('no decoration ever buys the shape a fixture is missing', async (t) => {
  // A token with no wrong-shape fixture is a token this sweep cannot attack;
  // it has to be one whose predicate reads the WHOLE response (`solved:`,
  // `denominator:`), or the sweep has quietly stopped covering the map.
  await t.test('every predicate token in the map is swept', () => {
    const swept = new Set(wrongShapeCases.flatMap(([, , form]) => form.trim().split(/\s+/)));
    const unswept = ANSWER_FORM_TOKENS
      .filter((token) => !token.includes(':') && !swept.has(token));
    assert.deepEqual(unswept, [], `no wrong-shape fixture exercises: ${unswept.join(', ')}`);
  });

  for (const [student, answer, form] of wrongShapeCases) {
    for (const decoration of DECORATIONS) {
      await t.test(`${student}${decoration}  vs  ${answer}  [${form}]`, () => {
        assert.notEqual(checkAnswer(`${student}${decoration}`, answer, { form }), 'correct');
      });
    }
  }
});

// ---- the measured bypasses, as regression cases ---------------------------
// Every writing below was verified to grade `correct` against the predicates
// this file replaced — the notation predicates as substring-existence tests
// over top-level additive terms. They are pinned individually rather than
// left to the sweep because the sweep only ever appends: several of these
// wrap, nest, or divide the response instead, and the shape of the attack is
// the part worth keeping.
const MEASURED_BYPASSES = [
  // `rational-exponent`, keyed 8^{1/3} = 2 — 14 writings worth 2
  ['2^1', '8^{1/3}', 'rational-exponent'],
  ['2^{1}', '8^{1/3}', 'rational-exponent'],
  ['2x^0', '8^{1/3}', 'rational-exponent'],
  ['2(x^{1/2})^0', '8^{1/3}', 'rational-exponent'],
  ['2(1+\\frac{0}{7}x^{1/2})', '8^{1/3}', 'rational-exponent'],
  ['2\\cdot1^{1/2}', '8^{1/3}', 'rational-exponent'],
  ['2\\cdot 1^{0.5}', '8^{1/3}', 'rational-exponent'],
  ['\\frac{2}{1^{1/2}}', '8^{1/3}', 'rational-exponent'],
  ['2\\cdot(1+0\\cdot x^{1/2})', '8^{1/3}', 'rational-exponent'],
  ['2+(0\\cdot x^{1/2})', '8^{1/3}', 'rational-exponent'],
  ['2\\frac{x^{1/2}}{x^{1/2}}', '8^{1/3}', 'rational-exponent'],
  ['2^{1}\\cdot1', '8^{1/3}', 'rational-exponent'],
  ['\\frac{4}{2^1}', '8^{1/3}', 'rational-exponent'],
  ['2(3^0)', '8^{1/3}', 'rational-exponent'],
  // `radical`, keyed \sqrt{t} — 10 writings worth \sqrt{t}
  ['t^{1/2}\\sqrt1', '\\sqrt{t}', 'radical'],
  ['t^{1/2}\\cdot\\sqrt1', '\\sqrt{t}', 'radical'],
  ['t^{1/2}\\cdot\\sqrt{1}', '\\sqrt{t}', 'radical'],
  ['t^{1/2}+\\sqrt1-1', '\\sqrt{t}', 'radical'],
  ['t^{1/2}+\\sqrt4-2', '\\sqrt{t}', 'radical'],
  ['t^{1/2}(1+0\\sqrt2)', '\\sqrt{t}', 'radical'],
  ['t^{1/2}\\cdot\\frac{\\sqrt2}{\\sqrt2}', '\\sqrt{t}', 'radical'],
  ['\\frac{t^{1/2}}{\\sqrt1}', '\\sqrt{t}', 'radical'],
  ['t^{1/2}\\sqrt1^0', '\\sqrt{t}', 'radical'],
  ['t^{1/2}+\\sqrt1^0-1', '\\sqrt{t}', 'radical'],
  // the old generic `exact`, keyed \ln 8 — every one of these defeated the
  // token while writing the very decimal it existed to refuse
  ['2.0794415416798357\\sqrt1', '\\ln 8', 'exact-log'],
  ['2.0794415416798357+\\log 1', '\\ln 8', 'exact-log'],
  ['2.0794415416798357+\\sqrt0', '\\ln 8', 'exact-log'],
  ['2.0794415416798357+\\sqrt4-2', '\\ln 8', 'exact-log'],
  ['2.0794415416798357^{2/2}', '\\ln 8', 'exact-log'],
  ['2.0794415416798357\\cdot x^0', '\\ln 8', 'exact-log'],
  ['2.0794415416798357\\cdot\\frac{\\log 7}{\\log 7}', '\\ln 8', 'exact-log'],
  // …and keyed \sqrt{130}, where the same decimal wears the same decorations
  ['11.40175425099138(1+0\\pi)', '\\sqrt{130}', 'exact-radical'],
  ['\\frac{11.40175425099138\\sqrt4}{2}', '\\sqrt{130}', 'exact-radical'],
  ['11.40175425099138\\sqrt1', '\\sqrt{130}', 'exact-radical'],
  ['11.40175425099138+\\log 1', '\\sqrt{130}', 'exact-radical'],
  ['11.40175425099138+\\sqrt0', '\\sqrt{130}', 'exact-radical'],
  ['11.40175425099138+\\sqrt9-3', '\\sqrt{130}', 'exact-radical'],
  ['11.40175425099138^{2/2}', '\\sqrt{130}', 'exact-radical'],
  ['11.40175425099138\\cdot 1^{1/2}', '\\sqrt{130}', 'exact-radical'],
];

test('every measured bypass of the old notation predicates is closed', async (t) => {
  for (const [student, answer, form] of MEASURED_BYPASSES) {
    await t.test(`${student}  vs  ${answer}  [${form}]`, () => {
      assert.notEqual(checkAnswer(student, answer, { form }), 'correct');
    });
  }
});

// The shape checks the tools call directly (tools/verify-answers.mjs and
// tools/verify-replay.mjs read `checkFormAsGraded`), pinned on the writings
// where a notation predicate has to draw its line exactly.
test('the notation predicates draw their lines where the evaluator does', async (t) => {
  await t.test('ignorable spacing is dropped to a space, and only spacing is', () => {
    // Every always-ignorable spacer reads as nothing a form check may see…
    for (const spacer of ['\\ ', '\\quad', '\\qquad', '\\space', '\\thinspace', '\\enspace', '~']) {
      assert.equal(checkFormAsGraded(`9.3${spacer}\\%`, 'percent'), true, spacer);
      assert.equal(checkFormAsGraded(`2.0794415416798357${spacer}`, 'exact-log'), false, spacer);
      assert.equal(checkFormAsGraded(`\\ln 8${spacer}`, 'exact-log'), true, spacer);
    }
    // …to a SPACE and never to nothing, or dropping one would fuse two
    // numerals into a third the response never wrote.
    assert.equal(preprocess('9.\\ 3\\%'), '9. 3\\%');
    assert.equal(checkFormAsGraded('9.\\ 3\\%', 'percent'), false);
    // A name that merely STARTS with a spacer's name keeps its head, and the
    // `\\` this corpus writes as an escaped backslash is never eaten halfway.
    for (const kept of ['\\spacer', '\\quadratic', 'x\\\\ y', '2\\\\ 3']) {
      assert.equal(preprocess(kept), kept, kept);
    }
  });

  await t.test('a calculator readout is refused however its exponent is written', () => {
    // The engine reads each of these as a NUMBER (`ce.parse("2e0").json === 2`),
    // spaces and capital E included, so a machine readout retyped with its
    // ×10ⁿ exponent is value-equal to the exact answer and only the writing
    // can refuse it. The exact tokens refuse it on the decimal point, which is
    // present in every one — no `e`-notation special case is needed, and the
    // one the generic `exact` token used to carry retired with it.
    for (const numeral of ['2.0794415416798357e0', '2.0794415416798357E0',
      '1.5e-3', '2 . 0794415416798357', '.5e3']) {
      assert.equal(checkFormAsGraded(numeral, 'exact-log'), false, numeral);
      assert.equal(checkFormAsGraded(numeral, 'exact-radical'), false, numeral);
    }
    // A decimal-free numeral carries no decimal point to refuse — the grammar
    // is what refuses it, because a bare numeral is not a logarithm and not a
    // radical.
    for (const numeral of ['2e0', '3e2', '2', '\\frac{4}{2}']) {
      assert.equal(checkFormAsGraded(numeral, 'exact-log'), false, numeral);
      assert.equal(checkFormAsGraded(numeral, 'exact-radical'), false, numeral);
    }
  });

  await t.test('a signed fractional exponent is exponent notation, not a radical', () => {
    // `simplified-radical` rejects the notation the rational-exponent
    // exercises own, in every spelling MathLive emits for the exponent.
    for (const written of ['3^{-\\frac12}', '3^{-\\frac{1}{2}}', '3^{-\\tfrac12}',
      '3^{-1/2}', '3^{-0.5}', '3^{-.5}', '3^{+\\frac12}', '3^{\\frac12}']) {
      assert.equal(checkFormAsGraded(written, 'simplified-radical'), false, written);
      assert.equal(checkFormAsGraded(written, 'exact-radical'), false, written);
    }
    // An INTEGER exponent is not this notation, negative or not: `12^{-15}`
    // is the authored answer of a quotient-of-powers exercise.
    for (const written of ['3^{-1}', '3^2', '12^{-15}', 'x^{-3}']) {
      assert.equal(checkFormAsGraded(written, 'simplified-radical'), true, written);
    }
    // …and `rational-exponent` reads the exponent by VALUE, so a fraction
    // that reduces to an integer is the integer it is worth. This is the
    // half NON_INTEGER_EXPONENT cannot see: it matches on the fraction bar.
    for (const written of ['x^{1/2}', 'x^{\\frac{3}{4}}', '(3n)^{1/3}']) {
      assert.equal(checkFormAsGraded(written, 'rational-exponent'), true, written);
    }
    for (const written of ['x^{2/2}', 'x^{\\frac{4}{2}}', 'x^{1}', 'x^0']) {
      assert.equal(checkFormAsGraded(written, 'rational-exponent'), false, written);
    }
    // A TeX argument is a braced group OR one token, and a COMMAND brings its
    // own arguments — so `x^\frac12` is x to the one-half. Reading only the
    // command name leaves the exponent as the unreadable string `\frac`, and
    // the grammar would reject a spelling a paste really produces.
    for (const [written, token, expected] of [
      ['x^\\frac12', 'rational-exponent', true],
      ['x^\\tfrac{3}{4}', 'rational-exponent', true],
      ['x^\\frac22', 'rational-exponent', false],
      ['2\\cdot1^\\frac12', 'rational-exponent', false],
      ['\\sqrt[3]m', 'radical', true],
      ['\\sqrt t', 'radical', true],
    ]) {
      assert.equal(checkFormAsGraded(written, token), expected, written);
    }
  });

  await t.test('a percent is a numeral wearing the sign, not any writing ending in one', () => {
    for (const written of ['185\\%', '9.3\\%', '-30\\%', '\\frac{1}{2}\\%', '12\\frac{1}{2}\\%']) {
      assert.equal(checkFormAsGraded(written, 'percent'), true, written);
    }
    for (const written of ['1.85+0\\%', '1.85\\cdot100\\%', '0.62', 'x\\%', '1.85']) {
      assert.equal(checkFormAsGraded(written, 'percent'), false, written);
    }
    // A response that is nothing BUT zero terms is read as written — `0\%` is
    // an answer, and a form check must never reject a correct one.
    assert.equal(checkFormAsGraded('0\\%', 'percent'), true);
  });

  await t.test('only a term that really is zero is stripped', () => {
    // `loadBearingTerms`/`isZeroTerm` are what let a response carry a term
    // worth nothing without that term answering for the response. The
    // notation grammars no longer use them — a grammar that requires ONE term
    // has nothing to strip — so `percent` is the probe: it needs exactly one
    // load-bearing term, and its own term has to BE the percent.
    //
    // Each of these carries a second term worth nothing, so `1.85\%` is still
    // the whole of what the response says.
    for (const padded of ['1.85\\%+0\\sqrt{2}', '1.85\\%+0\\cdot\\sqrt{2}',
      '1.85\\%+0\\times\\sqrt{2}', '1.85\\%+0\\,\\sqrt{2}', '1.85\\%-0\\sqrt{2}',
      '1.85\\%+0.0\\sqrt{2}', '1.85\\%+.00\\sqrt{2}', '1.85\\%+0^{2}\\sqrt{2}',
      '1.85\\%+(0)\\sqrt{2}', '1.85\\%+00\\cdot\\log 7']) {
      assert.equal(checkFormAsGraded(padded, 'percent'), true, padded);
    }
    // …and each of these carries a term that is NOT zero: a coefficient the
    // zero only starts (`0.5`), and the two writings whose value is 1 rather
    // than 0 (`0^0`, `0!`). Stripping one of those would drop real value from
    // the reading, so the second term stands and the response is not a
    // percent.
    for (const real of ['1.85\\%+0.5\\sqrt{2}', '1.85\\%+0.05\\sqrt{2}',
      '1.85\\%+0.0001\\sqrt{2}', '1.85\\%+0^0\\sqrt{2}', '1.85\\%+0!\\sqrt{2}',
      '1.85\\%+\\sqrt{2}']) {
      assert.equal(checkFormAsGraded(real, 'percent'), false, real);
    }
  });
});

test('checkFormAsGraded reads function notation the way the grader does', () => {
  // The lint's shape pre-filter runs this before checkAnswer(); it must never
  // reject a writing whose normalized reading the grader's form check accepts.
  assert.equal(checkFormAsGraded('f\\left(x\\right)-4=2\\left(x+1\\right)', 'point-slope-form'), true);
  assert.equal(checkFormAsGraded('f\\left(x\\right)=5\\left(x-3\\right)', 'point-slope-form'), true);
  assert.equal(checkFormAsGraded('f\\left(x\\right)=-7x+3', 'slope-intercept-form'), true);
  assert.equal(checkFormAsGraded('y-4=2x+2', 'point-slope-form'), false);
});

test('answerForm parsing and feedback wording', async (t) => {
  await t.test('a misspelled token is reported, not silently ignored', () => {
    const unknown = parseAnswerForm('lowest-terms lowset-terms');
    assert.equal(unknown.unknown.length, 1);
    assert.equal(unknown.valid, false);
  });

  await t.test('feedback names the shape asked for', () => {
    const message = describeAnswerForm('improper-fraction lowest-terms');
    assert.ok(message.includes('improper fraction'), message);
    assert.ok(message.includes('lowest terms'), message);
  });

  // Every predicate needs a phrase. A token added to FORM_PREDICATES but not to
  // FORM_PHRASES is still `valid`, so the learner is told to "write it
  // undefined" — a defect only a reader of the rendered page would ever catch.
  for (const token of ANSWER_FORM_TOKENS) {
    await t.test(`the ${token} token has feedback wording`, () => {
      const spec = token === 'denominator:<n>' ? 'denominator:7'
        : token === 'solved:<variable>' ? 'solved:y' : token;
      const phrased = describeAnswerForm(spec);
      assert.notEqual(phrased, '');
      assert.ok(!phrased.includes('undefined'), phrased);
    });
  }

  await t.test('factored feedback names factored form', () => {
    const phrase = describeAnswerForm('factored');
    assert.ok(phrase.includes('factored form'), phrase);
  });

  // The reduction feedback must name the missing STEP — cancelling — not just
  // a shape; "in lowest terms" would send the learner hunting for a numeral
  // fraction that is not there (§6: the message has to match the ask).
  await t.test('reduced-fraction feedback names the cancellation', () => {
    const phrase = describeAnswerForm('reduced-fraction');
    assert.ok(phrase.includes('common factors cancelled'), phrase);
  });

  // The standard-form tokens each name their own target shape — vertex form
  // names the completed square, the conic form names the `=1`, the circle
  // form names the squared radius — because "standard form" alone would tell
  // the learner nothing the prompt had not already said (§6: the message has
  // to match the ask).
  await t.test('the standard-form feedback names each target shape', () => {
    assert.ok(describeAnswerForm('vertex-form').includes('square completed'));
    assert.ok(describeAnswerForm('conic-standard-form').includes('equal to 1'));
    assert.ok(describeAnswerForm('circle-standard-form').includes('squared radius'));
    assert.ok(describeAnswerForm('exponential-form').includes('no logarithm'));
    assert.ok(describeAnswerForm('expanded-logarithms').includes('sum of logarithms'));
  });
});

// Diagnostic only — reported but never failed. These probe how far the Compute
// Engine's simplifier reaches; promote a row into `extra` once it is green.
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
test('diagnostic: how far the engine reaches (never fails the suite)', async (t) => {
  for (const [student, answer, expected] of diagnostic) {
    await t.test(`${student}  vs  ${answer}`, (subtest) => {
      const got = checkAnswer(student, answer);
      subtest.diagnostic(`-> ${got} (hoped ${expected})`);
      // Reported as todo rather than asserted: these record engine reach, and
      // a red suite would tell the next reader to "fix" something that is not
      // this repository's to fix.
      if (got !== expected) subtest.todo(`the engine grades this ${got}`);
    });
  }
});
