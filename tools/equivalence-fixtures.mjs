/**
 * Shared equivalence fixtures — the differential table between the two graders.
 *
 * This repository grades answers twice, on purpose, with two comparators that
 * share nothing but `preprocess()`:
 *
 *   assets/js/lib/check-answer.mjs   the runtime grader a learner meets. Runs
 *                                    the Compute Engine's equivalence ladder
 *                                    (isSame → isEqual → simplify(diff)) with
 *                                    numeric sampling as the guarded fallback,
 *                                    absolute tolerance 1e-9.
 *   tools/verify-answers.mjs         the corpus oracle. Deliberately never
 *                                    calls simplify() or isEqual(); decides
 *                                    numerically at sampled points with a
 *                                    relative tolerance of 1e-8 and a
 *                                    three-valued verdict.
 *
 * The independence is the point — the oracle is only worth running because it
 * can disagree with the thing it checks. So the two comparators must NOT be
 * merged or shared. What they must not do is drift into disagreeing *silently*.
 * This table is the seam: every pair here is asserted through both engines by
 * tools/grader-differential.test.mjs, and only the verdicts are compared.
 * Neither module imports the other's comparator.
 *
 * Fields:
 *   a, b        LaTeX operands, in the roles the two tools use — `a` reads as
 *               the student response, `b` as the authored answer.
 *   equivalent  the mathematical truth. checkAnswer(a, b) must say
 *               'correct' when true and 'incorrect' when false.
 *   expectNull  the oracle cannot read this pair and must return
 *               `{ equal: null }` — out of scope, never a silent pass. Only
 *               `equivalent` is asserted against the runtime grader here.
 *   note        why the pair earns its place. Every fixture is a case one of
 *               the two engines got wrong once, or a guard against a class it
 *               could get wrong.
 *
 * ONE KNOWN, DELIBERATE DIVERGENCE, recorded here rather than asserted:
 * `checkAnswer('\\$5', '5')` is `invalid` while the oracle reads it as 5. That
 * is correct in both roles — a money glyph is not a well-formed learner
 * response, and `parseMath` strips `\$` because printed prompts are full of
 * prices. The operands mean different things to the two tools, so the pair is
 * not a differential fixture.
 */

export const EQUIVALENCE_FIXTURES = Object.freeze([
  /* ---- fraction / decimal / grouping -------------------------------- */
  { a: '\\frac{1}{2}', b: '0.5', equivalent: true, note: 'fraction vs decimal, the base case for value equality' },
  { a: '0.5', b: '\\frac{1}{2}', equivalent: true, note: 'and the same pair the other way round' },
  { a: '\\frac{1}{3}', b: '0.333', equivalent: false, note: 'a truncated decimal is not the fraction — 3.3e-4 apart, so it also pins the tolerance' },
  { a: '0.6667', b: '\\frac{2}{3}', equivalent: false, note: 'four-place rounding, 3.3e-5 apart — a looser tolerance would accept it' },
  { a: '\\frac{2}{3}', b: '0.6666666667', equivalent: true, note: 'ten places is inside both tolerances; the boundary is real and both must sit on the same side of it' },
  { a: '3.1416', b: '\\pi', equivalent: false, note: 'the classic near-miss constant, 7.3e-6 apart' },
  { a: '-\\frac{40}{88}', b: '-\\frac{5}{11}', equivalent: true, note: 'the playbook §6 reduce-this prompt: value-equal, which is exactly why it needs an answerForm' },
  { a: '-\\frac{40}{88}', b: '-\\frac{5}{12}', equivalent: false, note: 'one keystroke off the pair above' },
  { a: '400,000', b: '400000', equivalent: true, note: 'digit-grouping commas are stripped by the shared preprocess, not by either comparator' },
  { a: '400{,}000', b: '400000', equivalent: true, note: 'the LaTeX grouping spelling of the same number' },
  { a: '53,809,051', b: '53809051', equivalent: true, note: 'multiple grouped runs' },

  /* ---- radicals ------------------------------------------------------ */
  { a: '\\sqrt{9}', b: '3', equivalent: true, note: 'principal root' },
  { a: '\\sqrt{9}', b: '-3', equivalent: false, note: 'the negative root is not the principal one' },
  { a: '2\\sqrt{2}', b: '\\sqrt{8}', equivalent: true, note: 'simplified vs unsimplified radical — value-equal, shape-different' },
  { a: '\\sqrt[3]{27}', b: '3', equivalent: true, note: 'odd index' },
  { a: '\\sqrt[3]{27}', b: '9', equivalent: false, note: 'cube root confused with squaring' },
  { a: '8^{\\frac{2}{3}}', b: '4', equivalent: true, note: 'rational exponent reaches the same value by a different operator' },
  { a: '4x^3\\sqrt{x}', b: '\\sqrt{16x^7}', equivalent: true, note: 'even roots assume a nonnegative variable — both engines must sample positive' },
  { a: '4x^2\\sqrt{x}', b: '\\sqrt{16x^7}', equivalent: false, note: 'the wrong exponent in the same shape' },

  /* ---- conjugate radical quotients (the §6 non-termination class) ---- */
  {
    a: '\\frac{\\sqrt{2}}{\\sqrt{x}-\\sqrt{3}}',
    b: '\\frac{\\sqrt{2}(\\sqrt{x}+\\sqrt{3})}{x-3}',
    equivalent: true,
    note: 'rationalizing a two-term denominator: isEqual() never returns on the left operand, so the runtime grader must reach this through its sampling guard',
  },
  {
    a: '\\frac{\\sqrt{2}(\\sqrt{x}+3)}{x-3}',
    b: '\\frac{\\sqrt{2}(\\sqrt{x}+\\sqrt{3})}{x-3}',
    equivalent: false,
    note: 'one mistyped \\sqrt — the difference simplify() never returns on',
  },
  {
    a: '\\frac{\\sqrt{3}}{\\sqrt{y}+\\sqrt{5}}',
    b: '\\frac{\\sqrt{3}(\\sqrt{y}-\\sqrt{5})}{y-5}',
    equivalent: true,
    note: 'the same rationalization with the other sign, over a different variable',
  },
  {
    a: '\\frac{\\sqrt{3}}{\\sqrt{y}+\\sqrt{5}}',
    b: '\\frac{\\sqrt{3}(\\sqrt{y}+\\sqrt{5})}{y-5}',
    equivalent: false,
    note: 'the conjugate with the sign not flipped — the most plausible wrong answer to that prompt',
  },
  {
    a: '\\frac{\\sqrt{2}}{\\sqrt{x}-\\sqrt{3}}',
    b: 'x',
    equivalent: false,
    note: 'isEqual() hangs against ANY comparand once one operand is a radical-denominator quotient, including a bare symbol',
  },

  /* ---- removable holes ----------------------------------------------- */
  {
    a: '\\frac{x^2-x-2}{x^2-3x+2}',
    b: '\\frac{x+1}{x-1}',
    equivalent: true,
    note: 'equal except at x=2, where both sides are undefined — sampling must not land there',
  },
  { a: '\\frac{x^2-x-2}{x^2-3x+2}', b: '\\frac{x+1}{x+1}', equivalent: false, note: 'a reduction that cancelled the wrong factor' },
  { a: '\\frac{x^2-9}{x-3}', b: 'x+3', equivalent: true, note: 'the textbook removable hole' },
  { a: '\\frac{x^2-9}{x-3}', b: 'x-3', equivalent: false, note: 'the sign slip on that reduction' },
  { a: '\\frac{2x}{4}', b: '\\frac{x}{2}', equivalent: true, note: 'reduced rational expression, the class the reduced-fraction token grades' },
  { a: '\\frac{2x}{4}', b: '\\frac{x}{3}', equivalent: false, note: 'wrong denominator' },

  /* ---- mixed numbers -------------------------------------------------- */
  { a: '4\\frac{4}{11}', b: '\\frac{48}{11}', equivalent: true, note: 'a mixed number is a SUM; the engine has dropped the whole part before \\left( in the past' },
  { a: '\\frac{16}{11}', b: '4\\frac{4}{11}', equivalent: false, note: 'the misparse guard: 4 x (4/11) = 16/11 is what a juxtaposition reading would produce' },
  { a: '2 6/9', b: '2\\frac{6}{9}', equivalent: true, note: 'plain-text mixed number, as pasted rather than typed' },
  { a: '4/3', b: '2\\frac{6}{9}', equivalent: false, note: 'the same misparse guard on the plain-text spelling' },

  /* ---- the d/t rewrite (Leibniz-notation defect) ---------------------- */
  { a: '\\frac{d}{t}', b: 'd/t', equivalent: true, note: 'a lone d numerator boxes as a derivative unless preprocess rewrites it; every distance/rate/time answer once graded invalid' },
  { a: '\\frac{d}{t}', b: 'd/r', equivalent: false, note: 'wrong denominator still wrong after the rewrite' },
  { a: '\\frac{d}{t}^2', b: '\\frac{d^2}{t^2}', equivalent: true, note: 'the rewrite brace-wraps, so a postfix power binds to the whole quotient' },
  { a: '\\frac{d}{t}^2', b: '\\frac{d}{t^2}', equivalent: false, note: 'and must not bind to the denominator alone' },

  /* ---- polynomials ---------------------------------------------------- */
  { a: '(x+3)(x+2)', b: 'x^2+5x+6', equivalent: true, note: 'factored vs expanded' },
  { a: '(x+3)(x+2)', b: 'x^2+5x+5', equivalent: false, note: 'constant term off by one' },
  { a: '(x+1)^2', b: 'x^2+2x+1', equivalent: true, note: 'perfect square' },
  { a: '(a+b)^3', b: 'a^3+3a^2b+3ab^2+b^3', equivalent: true, note: 'two free variables, so the oracle samples a grid' },
  { a: '(a+b)^3', b: 'a^3+b^3', equivalent: false, note: "the freshman's-dream error" },
  { a: '3(x+4)', b: '3x+12', equivalent: true, note: 'distribution' },
  { a: '3(x+4)', b: '3x+7', equivalent: false, note: 'added instead of multiplied' },
  { a: 'y^2+5y+6', b: 'x^2+5x+6', equivalent: false, note: 'right shape, wrong variable — the free-variable sets differ' },
  { a: '\\frac{1}{x}+\\frac{1}{y}', b: '\\frac{x+y}{xy}', equivalent: true, note: 'common denominator over two variables' },
  { a: '\\frac{1}{x}+\\frac{1}{y}', b: '\\frac{1}{x+y}', equivalent: false, note: 'the reciprocal-of-sum error' },
  { a: '\\frac{5x+14}{30}', b: '\\frac{x}{6}+\\frac{7}{15}', equivalent: true, note: 'single fraction vs split terms' },

  /* ---- arithmetic, notation, magnitude -------------------------------- */
  { a: '100+70+6', b: '176', equivalent: true, note: 'expanded form' },
  { a: '4 + 10(3 + 9) - 5^2', b: '99', equivalent: true, note: 'order of operations' },
  { a: '9 + 5^3', b: '134', equivalent: true, note: 'the bare Evaluate class' },
  { a: '9 + 5^3', b: '133', equivalent: false, note: 'off by one' },
  { a: '2^3\\cdot5', b: '40', equivalent: true, note: 'prime factorization is value-equal to its product, which is why it needs a form token' },
  { a: '2^3\\cdot5', b: '41', equivalent: false, note: 'off by one' },
  { a: '1.5\\times10^{3}', b: '1500', equivalent: true, note: 'scientific notation' },
  { a: '1.5\\times10^{3}', b: '150', equivalent: false, note: 'the wrong exponent, an order of magnitude out' },
  { a: '0.00042', b: '4.2\\times10^{-4}', equivalent: true, note: 'negative exponent; the relative tolerance matters at this magnitude' },
  { a: '0.00042', b: '4.2\\times10^{-3}', equivalent: false, note: 'and the same magnitude slip must still fail there' },
  { a: '12\\%', b: '0.12', equivalent: true, note: 'percent to decimal' },
  { a: '|-7|', b: '7', equivalent: true, note: 'absolute value with bare pipes' },
  { a: '\\left|-7\\right|', b: '7', equivalent: true, note: 'and with smart fences' },
  { a: '\\lvert-7\\rvert', b: '-7', equivalent: false, note: 'the delimiter spelling the table lint requires, with the sign wrong' },
  { a: 'e^{\\ln 5}', b: '5', equivalent: true, note: 'transcendental round trip' },
  { a: '\\log_{2}8', b: '3', equivalent: true, note: 'logarithm evaluated' },
  { a: '\\sqrt{-4}', b: '2i', equivalent: true, note: 'complex result: the oracle compares re and im, not just re' },
  { a: '(2+3i)(2-3i)', b: '13', equivalent: true, note: 'a complex product that lands back on the real line' },

  /* ---- out of scope for the oracle ------------------------------------ */
  // The oracle must bow out rather than guess, and must never silently pass.
  // These are the shapes that carry no comparable value: lists, tuples, and
  // relations. The runtime grader handles all of them, by structure rather
  // than by value.
  { a: '(8,125,2)', b: '(8,125,2)', equivalent: true, expectNull: true, note: 'a tuple: commas are coordinates, not digit grouping' },
  { a: '(8125,2)', b: '(8,125,2)', equivalent: false, expectNull: true, note: 'and the grouping misread that changes the arity' },
  { a: '1,-8,27,-64,125', b: '1,-8,27,-64,125', equivalent: true, expectNull: true, note: 'a five-term sequence; a grouping-shaped tail must not splice two terms into one' },
  { a: 'x=-\\frac{3}{2}', b: '-\\frac{3}{2}', equivalent: true, expectNull: true, note: 'solve-for-x form accepted against a bare value' },
  { a: 'n=12', b: '12', equivalent: true, expectNull: true, note: 'the same, with a different variable' },
  { a: 'y=5', b: 'x=5', equivalent: false, expectNull: true, note: 'two equations: the variable has to match' },
  { a: 'y-2=3(x-4)', b: 'y=3x-10', equivalent: true, expectNull: true, note: 'a point-slope statement of a slope-intercept key — the eq-vs-eq path the bare-variable unwrap used to bypass' },
  { a: '2y=6x-20', b: 'y=3x-10', equivalent: true, expectNull: true, note: 'the same line, scaled: proportional moved-to-one-side forms' },
  { a: '3x-y=10', b: 'y=3x-10', equivalent: true, expectNull: true, note: 'and rearranged to general form' },
  { a: 'y=3x+1', b: 'y=3x-10', equivalent: false, expectNull: true, note: 'a parallel line differs only in the constant — one proportionality sample must catch it' },
  { a: 'x-4=0', b: 'x=4', equivalent: true, expectNull: true, note: 'a vertical line restated; a constant-value key still compares as an equation' },
  { a: 'x(x-2.47)(x-0.61)(x-7.83)(x-1.19)(x-4.52)(x-0.23)(x-9.41)=0', b: '(x-2.47)(x-0.61)(x-7.83)(x-1.19)(x-4.52)(x-0.23)(x-9.41)=0', equivalent: false, expectNull: true, note: 'sides vanish together at nearly every sample point, leaving proportionality nothing to check — fewer than two informative samples must fail safe, not pass vacuously' },
  { a: 'x<3', b: 'x<3', equivalent: true, expectNull: true, note: 'an inequality has no value to sample' },
  { a: '3x<9', b: 'x<3', equivalent: false, expectNull: true, note: 'and an unsolved inequality is not the solved one to the runtime grader' },
]);
