/**
 * Corpus-wide mathematical cross-check of authored fill-in answers.
 *
 * verify-section proves an answer parses and satisfies its own declared form;
 * the lint proves a prompt cannot be passed by retyping it. Neither proves the
 * answer is RIGHT. This tool closes that gap for every prompt class that is
 * mechanically checkable from the question text alone:
 *
 *   solve          "Solve: $3x+2=14$"           — every answered root must
 *                                                 satisfy the printed equation
 *   evaluate-at    "Evaluate $9x+7$ when $x=3$" — substituting the given
 *                                                 values must yield the answer
 *   re-expression  "Simplify/Factor/Multiply…"  — the answer must be value-
 *                                                 equivalent to the printed
 *                                                 subject expression
 *
 * plus the function-shaped classes the precalculus chapters ask (each reads
 * the printed $f(x)=…$ definitions off the WRITTEN spans, because the engine
 * parses `f(x)` as Multiply):
 *
 *   function-evaluate    "Given $g(m)=\sqrt{m-4}$, evaluate $g(5)$" (nested too)
 *   function-solve       "For $f(x)=8-3x$, solve $f(x)=-1$"
 *   intercepts           x-/y-intercepts of a printed definition
 *   average-rate         "…average rate of change of $f(x)=…$ on $[a,b]$"
 *   function-combination "find and simplify $(fg)(x)$ / $f(g(x))$ / …"
 *   inverse-formula      "Find $f^{-1}(x)$ for $f(x)=…$" (composes to identity)
 *   inverse-swap         "Given that $h^{-1}(6)=2$, find $h(2)$"
 *   slope                slope through two printed points / of a linear definition
 *   intersection         the answered pair satisfies both printed lines
 *   line-equation        the answered line (vertical included) passes through
 *                        the printed points with the stated / parallel /
 *                        perpendicular slope
 *   circle-equation      the answered equation contains five known points of
 *                        the circle named by the printed center and point
 *
 * Equivalence is decided numerically: deterministic sample points for every
 * free variable, complex-aware comparison, N() only. simplify()/isEqual() are
 * deliberately never called — the §6 form work established that the
 * equivalence ladder can hang on conjugate radical quotients. Sampling also
 * accepts removable holes ($\frac{x^2-x-2}{x^2-3x+2}$ vs $\frac{x+1}{x-1}$
 * differ only at points the non-integer samples avoid).
 *
 * A fill-in the checker cannot read — word problem, inequality, system,
 * rounding/estimation ask, several candidate spans — is COUNTED as out of
 * scope, never failed and never silently dropped: like the form predicates,
 * a correctness check must not reject sound content it cannot read. The
 * summary prints per-class coverage so the residual manual burden is visible.
 *
 * Usage: node tools/verify-answers.mjs [content-root] [--min-verified N]
 *
 * `--min-verified N` fails the run when the verified count is not EXACTLY N.
 * Below N is a ratchet against silent scope shrink, since 0 failures also
 * describes a checker that has stopped being able to read the corpus. Above
 * N is an unrecorded gain — a floor-only check let forgotten gains become
 * headroom a later checker regression could consume unnoticed. Either way,
 * `npm run baseline:update` records the new count deliberately.
 */

import { existsSync, readFileSync } from 'node:fs';
import {
  ce, preprocess, splitTopLevelCommas, spellDegreesAsQuantity,
} from '../assets/js/lib/check-answer.mjs';
import {
  blankPreservingOffsets, mathSpans, shortcodeParams, shortcodes, walkMarkdown,
} from './lib-content.mjs';

/* ------------------------------------------------------------------ parsing */

// Engine symbols that are values, not free variables to sample over.
const CONSTANT_SYMBOLS = new Set([
  'Pi', 'ExponentialE', 'ImaginaryUnit', 'CatalanConstant', 'EulerGamma',
  'GoldenRatio', 'MachineEpsilon', 'Degrees', 'Nothing', 'True', 'False',
  'NaN', 'PositiveInfinity', 'NegativeInfinity', 'ComplexInfinity', 'Half',
]);

/** Parse authored/printed LaTeX to a valid boxed expression, or null. */
export function parseMath(latex) {
  if (latex == null) return null;
  const prepared = preprocess(latex.replace(/\\\$/g, '').trim());
  if (!prepared) return null;
  try {
    // Through the grader's own degree spelling, or the two disagree about what
    // a degree measure IS: the engine folds `^\circ` onto one turn, so
    // `-540^\circ` boxes to `-pi` here while checkAnswer reads it as `-3pi`,
    // and "Convert $-540^\circ$ to radians" keyed `-3\pi` fails a cross-check
    // that is comparing two different readings of the same printed span.
    const expr = ce.parse(spellDegreesAsQuantity(prepared));
    return expr.isValid ? expr : null;
  } catch {
    return null;
  }
}

function freeVariables(expr, out = new Set()) {
  if (expr.symbol && !CONSTANT_SYMBOLS.has(expr.symbol)) out.add(expr.symbol);
  for (const op of expr.ops ?? []) freeVariables(op, out);
  return out;
}

/** `x = value` (either side), where the equated symbol is a real variable. */
function asAssignment(expr) {
  if (expr?.operator !== 'Equal' || expr.ops?.length !== 2) return null;
  const [lhs, rhs] = expr.ops;
  if (lhs.symbol && !CONSTANT_SYMBOLS.has(lhs.symbol)) return { variable: lhs.symbol, value: rhs };
  if (rhs.symbol && !CONSTANT_SYMBOLS.has(rhs.symbol)) return { variable: rhs.symbol, value: lhs };
  return null;
}

const RELATION_OPERATORS = new Set(['Equal', 'NotEqual', 'Less', 'LessEqual', 'Greater', 'GreaterEqual']);

/**
 * Even roots and fractional powers: the corpus convention (stated or implied
 * by every such source exercise) is that variables under them are nonnegative,
 * so $\sqrt{64x^2} = 8x$ is sound. Sample positive values when either side
 * carries one, or the checker would fail the whole radicals programme over a
 * sign the exercises define away.
 */
function needsPositiveDomain(expr) {
  // Logarithms carry the same domain restriction as even roots. Omitting them
  // let the sampler evaluate a log identity at a negative argument, where the
  // branch cut makes the two sides genuinely differ, and report a sound
  // re-expression ($\ln(x^2)$ vs $2\ln(x)$) as a FAILURE — the checker
  // contradicting the runtime grader, which accepts it.
  if (expr.operator === 'Ln' || expr.operator === 'Log') return true;
  if (expr.operator === 'Sqrt' || expr.operator === 'Root') return true;
  if (expr.operator === 'Power') {
    const exponent = expr.ops[1];
    if (exponent?.isNumberLiteral && !Number.isInteger(exponent.re)) return true;
  }
  return (expr.ops ?? []).some(needsPositiveDomain);
}

/**
 * Division by a complex value (and reciprocals of one): Compute Engine 0.58.0
 * evaluates these wrong — N() of $\frac{2+5i}{5-2i}$ returns $5.385i$, the
 * true quotient $i$ scaled by $|5-2i|$; it divides by the modulus instead of
 * the modulus squared. Anything containing one cannot be numerically checked
 * on this engine, so it is reported out of scope rather than risking a false
 * verdict either way.
 */
function hasComplexDivision(expr, assignment) {
  if (expr.operator === 'Divide') {
    try {
      const denominator = (assignment ? expr.ops[1].subs(assignment) : expr.ops[1]).N();
      if (Math.abs(denominator.im ?? 0) > 1e-12) return true;
    } catch { /* unevaluable denominator falls through to the walk */ }
  }
  if (expr.operator === 'Power') {
    const [base, exponent] = expr.ops;
    try {
      if (exponent.isNumberLiteral && exponent.re < 0) {
        const value = (assignment ? base.subs(assignment) : base).N();
        if (Math.abs(value.im ?? 0) > 1e-12) return true;
      }
    } catch { /* same */ }
  }
  return (expr.ops ?? []).some((op) => hasComplexDivision(op, assignment));
}

/**
 * A coefficient multiplying a complex value whose imaginary part is exactly
 * $+1$: Compute Engine 0.58.0 evaluates `Multiply(3, Complex(2, 1))` as
 * $3i$ — it drops the real part entirely and reads the operand as the bare
 * imaginary unit. Found August 15, 2026, authoring Precalculus §3.1, where
 * `3(2+i)` and $(2+i)^2+3(2+i)+5$ both came back short by their real terms.
 *
 * The bug is narrow and worth stating exactly, because everything one step
 * away from it is fine: `3(2-i)` (imaginary part $-1$), `3(2+5i)` (any other
 * coefficient), and `Multiply(Complex(2,1), 3)` (the same product with its
 * operands the other way round) all evaluate correctly. Only
 * coefficient-first times imaginary-part-exactly-$+1$ misfires.
 *
 * Detected structurally rather than by evaluating, since the whole problem is
 * that evaluating lies: walk for a Multiply whose non-leading operand carries
 * an imaginary part of 1 once the assignment is applied.
 */
function hasUnitImaginaryProduct(expr, assignment) {
  if (expr.operator === 'Multiply') {
    for (const op of expr.ops.slice(1)) {
      try {
        const value = (assignment ? op.subs(assignment) : op).N();
        if (Math.abs((value.im ?? 0) - 1) < 1e-12 && Math.abs(value.re ?? 0) > 1e-12) return true;
      } catch { /* unevaluable operand falls through to the walk */ }
    }
  }
  return (expr.ops ?? []).some((op) => hasUnitImaginaryProduct(op, assignment));
}

/**
 * A written mixed number multiplied by a parenthesized or \cdot factor:
 * the engine reads the mixed number's whole part as a coefficient there
 * ($2\tfrac{2}{5}(\dots)$ becomes $2 \cdot \tfrac{2}{5} \cdot \dots$), so the
 * printed subject cannot be trusted to parse as the exercise means it.
 */
const MIXED_NUMBER_PRODUCT_RE = /\d\s*\\[tdc]?frac\s*\{\s*\d+\s*\}\s*\{\s*\d+\s*\}[\s\S]*?(?:\(|\\left|\\cdot|\\times)|(?:\)|\\right|\\cdot|\\times)\s*\d+\s*\\[tdc]?frac\s*\{\s*\d+\s*\}\s*\{\s*\d+\s*\}/;

/* --------------------------------------------------- numerical equivalence */

// Non-integer, non-symmetric magnitudes: never a pole/hole of a textbook
// expression, small enough that degree-8 powers stay well inside float range.
const SAMPLE_BASES = [1.3178, -0.7351, 2.4189, 0.5417, -1.8323, 3.1029];

/** N() under an assignment → {re, im}, or null when not a finite number. */
function numericValue(expr, assignment) {
  let value;
  try {
    if (hasComplexDivision(expr, assignment)) return null;
    if (hasUnitImaginaryProduct(expr, assignment)) return null;
    value = (assignment ? expr.subs(assignment) : expr).N();
  } catch {
    return null;
  }
  const re = value.re;
  const im = value.im ?? 0;
  if (typeof re !== 'number' || Number.isNaN(re)) return null;
  if (!Number.isFinite(re) || !Number.isFinite(im)) return null;
  // Above ~1e12 float comparison noise swamps the tolerance; bow out.
  if (Math.abs(re) > 1e12 || Math.abs(im) > 1e12) return null;
  return { re, im };
}

const close = (a, b) => {
  const scale = Math.max(1, Math.abs(a.re), Math.abs(b.re), Math.abs(a.im), Math.abs(b.im));
  return Math.abs(a.re - b.re) <= 1e-8 * scale && Math.abs(a.im - b.im) <= 1e-8 * scale;
};

/**
 * Are two expressions numerically equivalent over their shared free
 * variables? Returns { equal: true | false | null, witness } — null means the
 * comparison could not be made (symbolic residue, domain trouble at every
 * sample, magnitude overflow), and the caller treats it as out of scope.
 * The witness carries the disagreeing point for the failure report.
 */
export function equivalentNumerically(left, right) {
  const vars = new Set();
  freeVariables(left, vars);
  freeVariables(right, vars);
  const names = [...vars].sort();
  const fmt = (v) => (Math.abs(v.im) > 1e-12 ? `${v.re}${v.im < 0 ? '' : '+'}${v.im}i` : `${v.re}`);

  if (names.length === 0) {
    const a = numericValue(left);
    const b = numericValue(right);
    if (!a || !b) return { equal: null };
    return { equal: close(a, b), witness: { assignment: {}, left: fmt(a), right: fmt(b) } };
  }

  const positive = needsPositiveDomain(left) || needsPositiveDomain(right);
  // Two magnifications: the base samples (≤ ~3.2) sit inside every textbook
  // pole gap, but a shifted radicand like $\sqrt{x-5}$ is undefined at all of
  // them. When the first sweep cannot collect two valid points, a ×7 sweep
  // (samples up to ~22, still safe under degree-8 powers) reaches those
  // domains; it only runs as the fallback so the well-behaved majority keeps
  // its small-sample behavior.
  for (const scale of [1, 7.13]) {
    let valid = 0;
    for (let s = 0; s < SAMPLE_BASES.length && valid < 3; s += 1) {
      const assignment = {};
      names.forEach((name, i) => {
        const base = SAMPLE_BASES[(s + 2 * i) % SAMPLE_BASES.length] * scale;
        assignment[name] = (positive ? Math.abs(base) : base) + 0.0917 * i;
      });
      const a = numericValue(left, assignment);
      const b = numericValue(right, assignment);
      if (!a || !b) continue;
      valid += 1;
      if (!close(a, b)) {
        return { equal: false, witness: { assignment, left: fmt(a), right: fmt(b) } };
      }
    }
    if (valid >= 2) return { equal: true };
  }
  return { equal: null };
}

/* ------------------------------------------------------------- classifiers */

// A span introduced as an example of the ANSWER's shape ("… in exponential
// form, e.g. $2^3 \cdot 5$") is not part of the exercise's mathematics.
const EXAMPLE_LEAD_RE = /(?:e\.g\.|for example|such as|like|format)[,:]?\s*$/i;
// A question is one logical line, so an inline span may cross a newline here.
const questionSpans = (question) => mathSpans(question, { allowNewlines: true })
  .filter((span) => !EXAMPLE_LEAD_RE.test(question.slice(Math.max(0, span.index - 24), span.index)))
  .map((span) => span.tex);

const SOLVE_RE = /(?:^|[.?!]\s)\s*solve\b/i;
// "Solve … for <var>". The `$` used to be excluded from the run between
// "solve" and "for", which meant the pattern could only match when the
// equation itself was NOT in math delimiters — i.e. almost never, silently
// dropping the whole solve-a-formula class into "cannot identify the
// solved-for variable". The delimiters around the target are optional
// ("for y, in general") and a subscript is part of the name: the engine reads
// `d_2` as one atomic symbol, so capturing only `d` names a variable that
// does not occur in the formula.
const SOLVE_FOR_RE = /\bsolve[^.?!]*?\bfor\s+\$?([a-zA-Z](?:_[a-zA-Z0-9]+)?)\$?(?![a-zA-Z0-9_])/i;
const EVALUATE_RE = /(?:^|[.?!]\s)\s*(?:evaluate|find the value of)\b/i;

// An ask whose printed subject is legitimately NOT value-equal to its answer:
// rounding, estimation, and "use 3.14 for pi" style approximation.
const APPROXIMATION_RE = /\bround(?:ed|ing)?\b|\bnearest\b|\bapproximat|\bestimat|\b3\.14\b/i;

// Value-preserving re-expression asks only. Deliberately absent: reciprocal /
// opposite / percent targets (percents are answered as bare numbers per the
// units convention, so 3/4 → 75 is not value-equal), unit conversion, and
// translate prompts.
const REEXPRESSION_RE = new RegExp([
  String.raw`(?:^|[.?!]\s)\s*(?:add|subtract|multiply|divide|simplify|factor|combine|expand|reduce|rationalize|evaluate)\b`,
  // "exact" between the article and the noun is what a trigonometry section
  // asks with — "Find the exact value of $\cos\left(\tfrac{\pi}{4}\right)$" is
  // the same substitution-free comparison as "Find the value of", and the
  // printed span IS the subject to compare against.
  String.raw`\bfind the (?:exact )?(?:sum|difference|product|quotient|value)\b`,
  String.raw`\bprime factorization\b`,
  String.raw`\bin (?:simplest|lowest) (?:form|terms)\b`,
  String.raw`\bin scientific notation\b`,
  // "(?!…your answer)" keeps a word problem's FORMAT instruction ("Write your
  // answer as an improper fraction") from reading as a re-expression ask.
  // Degrees and radians join that list because `^\circ` is an exact operator
  // to the engine, not a unit label: $225^\circ$ and $\tfrac{5\pi}{4}$ are the
  // same number, so an angle conversion is value-preserving and its answer is
  // comparable to its printed subject like any other re-expression.
  String.raw`\b(?:convert|write|rewrite|express)\b(?!\s+(?:your|the)\s+answer\b)[^.?!]*\b(?:to|as|in)\b[^.?!]*\b(?:decimal|fraction|mixed number|scientific notation|power|degrees?|radians?)\b`,
].join('|'), 'i');

// A question that points at a figure, graph, or table for the value of its
// own subject. The checker reads text; whatever such a question shows is
// outside what it can see, so a printed subject whose variable is pinned
// there is not comparable to the answer.
const EXTERNAL_REFERENT_RE = /\b(?:shown|given|pictured)\s+(?:below|above)\b|\b(?:in|from|using|on)\s+the\s+(?:figure|graph|table|diagram|triangle|circle)\b|\bthe\s+(?:figure|graph|table|diagram|triangle|circle)\s+shown\b/i;

const pass = (rule) => ({ rule, status: 'pass' });
const fail = (rule, detail) => ({ rule, status: 'fail', detail });
const skip = (rule, reason) => ({ rule, status: 'skip', reason });

const describePoint = (witness) => {
  const at = Object.entries(witness.assignment).map(([k, v]) => `${k}=${v}`).join(', ');
  return `${at ? `at ${at}: ` : ''}${witness.left} vs ${witness.right}`;
};

function checkSolve(question, answer, explicitTarget = null) {
  const spans = questionSpans(question).map(parseMath);
  const equations = spans.filter((expr) => expr?.operator === 'Equal');
  if (equations.length === 0) return skip('solve', 'no printed equation (word problem, inequality, or system notation)');
  if (equations.length > 1) return skip('solve', 'several printed equations');
  const equation = equations[0];

  const parts = splitTopLevelCommas(answer).map((part) => ({ raw: part, expr: parseMath(part) }));
  if (parts.some((part) => !part.expr)) return skip('solve', 'unparseable answer (e.g. "no solution")');

  const explicit = explicitTarget ?? question.match(SOLVE_FOR_RE)?.[1];
  const answered = parts.map((part) => asAssignment(part.expr));
  const answeredVariable = answered[0] && answered.every((a) => a?.variable === answered[0].variable)
    ? answered[0].variable
    : null;
  // The target must be a variable OF THE EQUATION (or the explicit "for $h$"):
  // deriving it from the answer would silently accept "y = 4" for an equation
  // in x by then treating x as a given.
  const equationVariables = [...freeVariables(equation)];
  const target = explicit
    ?? (equationVariables.length === 1 ? equationVariables[0] : null)
    ?? (answeredVariable && equationVariables.includes(answeredVariable) ? answeredVariable : null);
  if (!target) return skip('solve', 'cannot identify the solved-for variable');

  // "The temperature was 40° Celsius. Solve for F in $C=\frac{5}{9}(F-32)$"
  // answers with a number: the other variable's value is given in prose,
  // where this checker cannot see it. Only a formula-shaped answer (one that
  // still carries the other variables) is checkable as an identity.
  const residualVariables = equationVariables.filter((name) => name !== target);
  if (residualVariables.length > 0
    && parts.every((part, i) => freeVariables(answered[i]?.value ?? part.expr).size === 0)) {
    return skip('solve', 'formula with values given in prose');
  }

  for (const [i, part] of parts.entries()) {
    const assignment = answered[i];
    if (assignment && assignment.variable !== target) {
      return fail('solve', `answer ${JSON.stringify(part.raw)} solves for ${assignment.variable}, prompt asks for ${target}`);
    }
    const value = assignment ? assignment.value : part.expr;
    // subs() itself corrupts an imaginary-part-exactly-+1 root (see
    // substitutesUnsoundly), so the root must be screened before the
    // substitution exists — afterwards there is no Multiply node left for
    // numericValue's structural guards to find.
    if (substitutesUnsoundly(value)) {
      return skip('solve', 'complex root the engine substitutes wrong');
    }
    const { equal, witness } = equivalentNumerically(
      equation.ops[0].subs({ [target]: value }),
      equation.ops[1].subs({ [target]: value }),
    );
    if (equal === false) {
      return fail('solve', `root ${JSON.stringify(part.raw)} does not satisfy the printed equation (${describePoint(witness)})`);
    }
    if (equal === null) return skip('solve', 'equation not numerically checkable');
  }
  return pass('solve');
}

function checkEvaluateAt(question, answer) {
  const spans = questionSpans(question).map(parseMath);
  const assignments = spans.map(asAssignment)
    .filter((assignment) => assignment && freeVariables(assignment.value).size === 0);
  if (assignments.length === 0) return skip('evaluate-at', 'no given values');

  const subjects = spans.filter((expr) => expr && !RELATION_OPERATORS.has(expr.operator));
  if (subjects.length !== 1) return skip('evaluate-at', 'zero or several candidate subjects');

  if (splitTopLevelCommas(answer).length > 1) return skip('evaluate-at', 'list answer');
  const answerExpr = parseMath(answer);
  if (!answerExpr) return skip('evaluate-at', 'unparseable answer');
  const answerValue = asAssignment(answerExpr)?.value ?? answerExpr;

  const substitution = Object.fromEntries(
    assignments.map(({ variable, value }) => [variable, value]),
  );
  const substituted = subjects[0].subs(substitution);
  if (freeVariables(substituted).size > freeVariables(answerValue).size) {
    return skip('evaluate-at', 'variables left after substituting the given values');
  }
  const { equal, witness } = equivalentNumerically(substituted, answerValue);
  if (equal === false) {
    return fail('evaluate-at', `substituting the given values gives ${witness.left}, answer is ${witness.right}`);
  }
  if (equal === null) return skip('evaluate-at', 'not numerically checkable');
  return pass('evaluate-at');
}

function checkReexpression(question, answer, answerMode) {
  if (answerMode === 'unordered' || splitTopLevelCommas(answer).length > 1) {
    return skip('re-expression', 'list answer');
  }
  // "Enter the first factor", "Enter the exponent on 10": the answer is a
  // component of the re-expression, not the re-expressed value.
  if (/\benter (?:just )?the (?!answer\b)/i.test(question)) {
    return skip('re-expression', 'asks for a component of the answer');
  }

  const answerExpr = parseMath(answer);
  if (!answerExpr) return skip('re-expression', 'unparseable answer');

  // "Find the prime factorization of 1080" prints its subject as prose, and
  // the answer's product-of-powers form is directly comparable to it.
  const primeSubject = question.match(/prime factorization of (?:\$)?(\d[\d,]*)/i);
  if (primeSubject) {
    const subject = parseMath(primeSubject[1]);
    if (!subject) return skip('re-expression', 'unparseable prime-factorization subject');
    const { equal, witness } = equivalentNumerically(subject, answerExpr);
    if (equal === false) {
      return fail('re-expression', `factorization is not equal to the subject (${describePoint(witness)})`);
    }
    return equal ? pass('re-expression') : skip('re-expression', 'not numerically checkable');
  }

  const raw = questionSpans(question);
  const spans = raw.map(parseMath);
  // A printed given value ("… where $x = 3$ …") means the ask is a
  // substitution, not a re-expression; only checkEvaluateAt reads those.
  if (spans.some((expr) => asAssignment(expr))) return skip('re-expression', 'prompt carries given values');

  const candidates = spans
    .map((expr, i) => ({ expr, raw: raw[i] }))
    .filter(({ expr }) => expr
      && !RELATION_OPERATORS.has(expr.operator)
      && !expr.symbol); // a bare symbol names the unknown; it is not a subject
  if (candidates.length !== 1) {
    return skip('re-expression', candidates.length === 0 ? 'no printed subject expression' : 'several printed expressions');
  }
  if (MIXED_NUMBER_PRODUCT_RE.test(candidates[0].raw) || MIXED_NUMBER_PRODUCT_RE.test(answer)) {
    return skip('re-expression', 'mixed-number product (engine misparse)');
  }
  // "Let $f(x)=2x^2-3x$. Evaluate $f(8-i)$." prints its definition as a
  // relation, so only the APPLICATION survives the candidate filter — and the
  // engine parses `f(8-i)` as a product of a free symbol `f` with its
  // argument, which sampling then evaluates at f = 1.3178 and reports as a
  // disagreement with the right answer. An application of a name the question
  // itself defines belongs to checkFunctionEvaluate; here it can only
  // manufacture a false failure, which a correctness check must never do.
  const defined = printedDefinitions(question);
  if (defined.size > 0 && [...freeVariables(candidates[0].expr)].some((name) => defined.has(name))) {
    return skip('re-expression', 'applies a function the question defines');
  }
  // The same false-failure trap one step out: "Given the triangle shown below,
  // find the value of $\sin t$" prints a subject whose variable is pinned by
  // the FIGURE, not by the text, and answers it with a constant. Sampling t
  // then compares sin(1.3178) with 7/25 and reports a disagreement that says
  // nothing about the answer. Whenever the subject carries a variable the
  // answer does not, something the checker cannot read — a figure, a table, a
  // preceding sentence — supplies its value, so the comparison is not this
  // checker's to make. A variable on BOTH sides is a genuine re-expression
  // ("simplify $(\tan t)(\cos t)$" → $\sin t$) and stays in scope.
  // …and only when the question actually points OUTSIDE its own text for the
  // value. Skipping on the free variable alone costs 24 sound checks across
  // the corpus — "simplify $\frac{x}{x}$" answers 1 legitimately, and its
  // subject is identically constant — so the referent is the discriminator,
  // not the variable.
  const answerVariables = freeVariables(answerExpr);
  const unpinned = [...freeVariables(candidates[0].expr)].filter((name) => !answerVariables.has(name));
  if (unpinned.length > 0 && EXTERNAL_REFERENT_RE.test(question)) {
    return skip('re-expression', `printed subject reads ${unpinned.join(', ')} from a figure or table the checker cannot see`);
  }

  const { equal, witness } = equivalentNumerically(candidates[0].expr, answerExpr);
  if (equal === false) {
    return fail('re-expression', `answer is not equivalent to the printed subject (${describePoint(witness)})`);
  }
  if (equal === null) return skip('re-expression', 'not numerically checkable');
  return pass('re-expression');
}

/* --------------------------------------------- function-shaped classifiers */
/*
 * The precalculus chapters ask about FUNCTIONS: evaluate $f(2)$ for a printed
 * definition, solve $f(x)=4$, average rate of change over an interval,
 * combinations and compositions, inverses, slopes, and line equations from
 * points and slope constraints. None of that is readable through the engine's
 * parse — `f(x)` boxes as `Multiply(f, x)` — so the definitions and asks are
 * read off the WRITTEN spans, and only the resulting substituted expressions
 * go to the engine. Every checker returns null when its gate does not match,
 * a skip when it matched but could not fully read the exercise (table or
 * graph data, piecewise cases the engine cannot parse), and a fail only for
 * a concrete numeric disagreement.
 */

// `name(var) = RHS`, read from the written span.
const DEFINITION_RE = /^([a-zA-Z])\s*\(\s*([a-zA-Z])\s*\)\s*=\s*([\s\S]+)$/;

// MathLive smart fences appear in authored spans too (`f \left(x\right) =
// \sqrt{3x-2}`), and every written-shape reader must strip them or a fenced
// span silently fails its gate and drops the exercise from verification —
// exactly how 31 fill-ins went unread. Numeric-pair readers already strip;
// this is the same strip for the definition/application/inverse readers.
const unfenced = (raw) => raw.replace(/\\left|\\right/g, '');

/**
 * The function definitions a question prints. `f(x)=8-3x` defines f;
 * `f(x)=-1` beside it is that ask's TARGET, not a definition, so a constant
 * right side (no occurrence of the argument variable) never defines. A name
 * printed with two variable definitions is dropped as ambiguous.
 */
function printedDefinitions(question) {
  const defs = new Map();
  const ambiguous = new Set();
  for (const raw of questionSpans(question)) {
    const m = unfenced(raw).trim().match(DEFINITION_RE);
    if (!m) continue;
    const [, name, variable, rhsRaw] = m;
    // Sentence punctuation may sit inside the span ("…$f(x) = \sqrt{3x-2},$
    // find…") — a trailing comma parses the RHS as a sequence, which nulls
    // every numeric comparison downstream.
    const rhs = parseMath(rhsRaw.replace(/[\s.,;]+$/, ''));
    if (!rhs || !freeVariables(rhs).has(variable)) continue;
    if (defs.has(name)) ambiguous.add(name);
    else defs.set(name, { name, variable, rhs });
  }
  for (const name of ambiguous) defs.delete(name);
  return defs;
}

/**
 * The value of a written application chain — `g(5)`, `h(f(2))` — under the
 * printed definitions, or null when it is not one. The innermost argument
 * must be a closed numeral expression; the result may still carry free
 * symbols (a definition like $g(x)=\tfrac{3}{4}f(x)$ with $f$ known only
 * from a table), which the caller's numeric comparison reports unreadable.
 */
/**
 * Is this the argument the engine cannot substitute? Compute Engine 0.58.0
 * evaluates a coefficient times a complex value whose imaginary part is
 * exactly $+1$ as the bare imaginary unit — `Multiply(3, Complex(2,1))` is
 * $3i$, not $6+3i$ — and the corruption happens inside `subs()` itself:
 * substituting $2+i$ into $x^2+3x+5$ folds the $3x+5$ term straight to
 * `Complex(5,3)`, so by the time the result exists there is no `Multiply`
 * node left for a structural guard to find. The argument is the only place
 * this is still visible, so it is tested here, before substitution.
 *
 * Narrow on purpose: an imaginary part of $-1$, of any other magnitude, or a
 * real argument all substitute correctly, and are still checked.
 */
function substitutesUnsoundly(expr) {
  try {
    const value = expr.N();
    return Math.abs((value.im ?? 0) - 1) < 1e-12 && Math.abs(value.re ?? 0) > 1e-12;
  } catch {
    return false;
  }
}

function applicationValue(text, defs) {
  const m = unfenced(text).trim().match(/^([a-zA-Z])\s*\(\s*([\s\S]+?)\s*\)$/);
  if (!m || !defs.has(m[1])) return null;
  let inner = applicationValue(m[2], defs);
  if (!inner) {
    const expr = parseMath(m[2]);
    inner = expr && freeVariables(expr).size === 0 ? expr : null;
  }
  if (!inner) return null;
  if (substitutesUnsoundly(inner)) return UNSOUND_SUBSTITUTION;
  const def = defs.get(m[1]);
  return def.rhs.subs({ [def.variable]: inner });
}

/** Sentinel: an application this engine cannot evaluate soundly. */
const UNSOUND_SUBSTITUTION = Symbol('unsound-substitution');

/** A written `(a, b)` with numeric coordinates, as [a, b] — or null. */
function numericPair(raw) {
  const m = raw.trim().replace(/\\left|\\right/g, '')
    .match(/^\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)$/);
  return m ? [Number(m[1]), Number(m[2])] : null;
}

/** Numeric `(a, b)` pair spans and `f(2)=-11` fact spans, as [x, y] points. */
function printedPoints(question) {
  const points = [];
  for (const raw of questionSpans(question)) {
    const pair = numericPair(raw);
    if (pair) {
      points.push(pair);
      continue;
    }
    const fact = raw.trim().replace(/\\left|\\right/g, '')
      .match(/^[a-zA-Z]\s*\(\s*(-?[\d.]+)\s*\)\s*=\s*(-?[\d.]+)$/);
    if (fact) points.push([Number(fact[1]), Number(fact[2])]);
  }
  return points;
}

const closeNumbers = (a, b) => Math.abs(a - b) <= 1e-8 * Math.max(1, Math.abs(a), Math.abs(b));

/** A parsed expression as a plain real number, or null. */
function realValue(expr) {
  const value = expr && numericValue(expr);
  return value && Math.abs(value.im) < 1e-12 ? value.re : null;
}

/** A written scalar as a plain real number, or null. */
function numericAnswer(raw) {
  return realValue(parseMath(raw));
}

/** Evaluate a definition's RHS at a plain number, or null. */
function definitionAt(def, x) {
  return numericValue(def.rhs.subs({ [def.variable]: x }))?.re ?? null;
}

/** The slope of a LINEAR definition RHS, or null (three-point linearity check). */
function linearSlope(def) {
  const [y0, y1, y2] = [0, 1, 2].map((x) => definitionAt(def, x));
  if (y0 === null || y1 === null || y2 === null) return null;
  return closeNumbers(y2 - y1, y1 - y0) ? y1 - y0 : null;
}

/**
 * The answered line as a function x → y, or null when the answer is not a
 * line this checker can read. An equation answer (`y-5=2(x-1)`, either
 * orientation) is solved for the output variable numerically — the equation
 * is linear in y, so two samples pin the root. A bare expression (`3x-10`,
 * `-\tfrac{1}{3}t+2` — "enter the expression that $y$ equals") is evaluated
 * in its own variable, whatever the exercise calls it.
 */
function answeredLineAt(answer) {
  const expr = parseMath(answer);
  if (!expr) return null;
  if (expr.operator === 'Equal') {
    const vars = [...freeVariables(expr)];
    if (vars.length !== 2 || !vars.includes('y')) return null;
    const xName = vars.find((name) => name !== 'y');
    const diff = ce.box(['Subtract', expr.ops[0], expr.ops[1]]);
    return (x) => {
      const g0 = numericValue(diff.subs({ [xName]: x, y: 0 }))?.re;
      const g1 = numericValue(diff.subs({ [xName]: x, y: 1 }))?.re;
      if (g0 == null || g1 == null || Math.abs(g1 - g0) < 1e-12) return null;
      return -g0 / (g1 - g0);
    };
  }
  const vars = [...freeVariables(expr)];
  if (vars.length > 1) return null;
  return (x) => numericValue(expr, vars.length ? { [vars[0]]: x } : undefined)?.re ?? null;
}

/** "Given $g(m)=\sqrt{m-4}$, evaluate $g(5)$" — including nested $h(f(2))$. */
function checkFunctionEvaluate(question, answer) {
  const defs = printedDefinitions(question);
  if (defs.size === 0) return null;
  const asks = questionSpans(question)
    .filter((raw) => !DEFINITION_RE.test(unfenced(raw).trim()))
    .map((raw) => applicationValue(raw, defs))
    .filter(Boolean);
  if (asks.some((ask) => ask === UNSOUND_SUBSTITUTION)) {
    return skip('function-evaluate', 'complex argument the engine substitutes wrong');
  }
  if (asks.length !== 1 || splitTopLevelCommas(answer).length > 1) return null;
  // An evaluation must come out a closed number. A residual symbol means the
  // definition leans on a function the question does not print ($g(x)=-f(x)$
  // with $f$ known only from a table) — comparing would SAMPLE that symbol as
  // a free variable and manufacture a disagreement with the right answer.
  if (freeVariables(asks[0]).size > 0) {
    return skip('function-evaluate', 'definition references a function the question does not print');
  }
  // The authored answer may restate the ask as a label — `f(6) = 4` — which
  // does not parse as a value, so the label is stripped off the writing.
  const bareAnswer = unfenced(answer).replace(/^\s*[a-zA-Z]\s*\(\s*-?[\d.]+\s*\)\s*=\s*/, '');
  const answerExpr = parseMath(bareAnswer);
  if (!answerExpr) return skip('function-evaluate', 'unparseable answer');
  const { equal, witness } = equivalentNumerically(asks[0], answerExpr);
  if (equal === false) {
    return fail('function-evaluate', `the printed definition gives ${witness.left}, answer is ${witness.right}`);
  }
  if (equal === null) return skip('function-evaluate', 'not numerically checkable');
  return pass('function-evaluate');
}

/** "For $f(x)=8-3x$, solve $f(x)=-1$" — every root must satisfy the target. */
function checkFunctionSolve(question, answer) {
  if (!/\bsolve\b|\bsuch that\b/i.test(question)) return null;
  const defs = printedDefinitions(question);
  if (defs.size === 0) return null;
  const targets = [];
  for (const raw of questionSpans(question)) {
    const m = unfenced(raw).trim().match(DEFINITION_RE);
    if (!m || !defs.has(m[1]) || m[2] !== defs.get(m[1]).variable) continue;
    const k = parseMath(m[3].replace(/[\s.,;]+$/, ''));
    if (k && freeVariables(k).size === 0) targets.push({ def: defs.get(m[1]), k });
  }
  if (targets.length !== 1) return null;
  const { def, k } = targets[0];
  // The same residual-symbol hazard as function-evaluate: a definition that
  // references an unprinted function would sample it as a free variable.
  if ([...freeVariables(def.rhs)].some((name) => name !== def.variable)) {
    return skip('function-solve', 'definition references a function the question does not print');
  }
  const roots = splitTopLevelCommas(answer).map((part) => ({ raw: part, expr: parseMath(part) }));
  if (roots.some((root) => !root.expr)) return skip('function-solve', 'unparseable answer (e.g. "no solution")');
  for (const root of roots) {
    const value = asAssignment(root.expr)?.value ?? root.expr;
    // Same pre-substitution screen as checkSolve: subs() corrupts an
    // imaginary-part-exactly-+1 root before any later guard can see it.
    if (substitutesUnsoundly(value)) {
      return skip('function-solve', 'complex root the engine substitutes wrong');
    }
    const { equal, witness } = equivalentNumerically(def.rhs.subs({ [def.variable]: value }), k);
    if (equal === false) {
      return fail('function-solve', `root ${JSON.stringify(root.raw)} does not satisfy the target (${describePoint(witness)})`);
    }
    if (equal === null) return skip('function-solve', 'not numerically checkable');
  }
  return pass('function-solve');
}

/**
 * Intercept asks against a printed definition. An $x$-intercept answer is a
 * root of the RHS; a $y$-intercept (or "crosses the vertical axis") answer is
 * the RHS at 0; ordered-pair answers are points that must lie on the graph,
 * which covers the combined "y-intercept first, then both x-intercepts" ask
 * without caring which intercept each pair is.
 */
function checkIntercepts(question, answer) {
  const xAsk = /\$?x\$?-intercepts?|cross(?:es)?\b[^.?!]*horizontal axis/i.test(question);
  const yAsk = /\$?y\$?-intercepts?|cross(?:es)?\b[^.?!]*vertical axis/i.test(question);
  if (!xAsk && !yAsk) return null;
  const defs = printedDefinitions(question);
  if (defs.size !== 1) return null; // a graph or table intercept stays manual
  const def = [...defs.values()][0];
  const parts = splitTopLevelCommas(answer).map((part) => part.trim());
  const pairs = parts.map(numericPair);
  if (pairs.every(Boolean)) {
    for (const [px, py] of pairs) {
      const y = definitionAt(def, px);
      if (y === null) return skip('intercepts', 'not numerically checkable');
      if (!closeNumbers(y, py)) {
        return fail('intercepts', `(${px}, ${py}) is not on the graph: the definition gives ${y}`);
      }
    }
    return pass('intercepts');
  }
  if (xAsk && !yAsk) {
    for (const part of parts) {
      const root = numericAnswer(part);
      if (root === null) return skip('intercepts', 'unparseable answer');
      const y = definitionAt(def, root);
      if (y === null) return skip('intercepts', 'not numerically checkable');
      if (!closeNumbers(y, 0)) return fail('intercepts', `x-intercept ${part} is not a root: the definition gives ${y}`);
    }
    return pass('intercepts');
  }
  if (yAsk && !xAsk && parts.length === 1) {
    const y = definitionAt(def, 0);
    const value = numericAnswer(parts[0]);
    if (y === null || value === null) return skip('intercepts', 'not numerically checkable');
    if (!closeNumbers(y, value)) return fail('intercepts', `the definition gives ${y} at 0, answer is ${value}`);
    return pass('intercepts');
  }
  return null;
}

/** "Find the average rate of change of $f(x)=…$ on the interval $[a,b]$." */
function checkAverageRate(question, answer) {
  if (!/\bfind (?:and simplify )?the average rate of change\b/i.test(question)) return null;
  const defs = printedDefinitions(question);
  // \left/\right stripped before matching, as every sibling parser does — an
  // interval written $\left[a,b\right]$ must not silently disable the check.
  const interval = question.replace(/\\left|\\right/g, '')
    .match(/on the interval\s*\$\\?[[(]\s*([^,$]+?)\s*,\s*([^\])$]+?)\s*\\?[\])]\$/i);
  if (defs.size !== 1 || !interval) return null;
  const def = [...defs.values()][0];
  const [a, b] = [parseMath(interval[1]), parseMath(interval[2])];
  const answerExpr = parseMath(answer);
  if (!a || !b) return null;
  if (!answerExpr) return skip('average-rate', 'unparseable answer');
  const rate = ce.box(['Divide',
    ['Subtract', def.rhs.subs({ [def.variable]: b }), def.rhs.subs({ [def.variable]: a })],
    ['Subtract', b, a]]);
  const { equal, witness } = equivalentNumerically(rate, answerExpr);
  if (equal === false) {
    return fail('average-rate', `the definition gives ${witness.left}, answer is ${witness.right}`);
  }
  if (equal === null) return skip('average-rate', 'not numerically checkable');
  return pass('average-rate');
}

/**
 * "Given $f(x)=…$ and $g(x)=…$, find and simplify $(fg)(x)$ / $(f-g)(x)$ /
 * $\left(\tfrac{f}{g}\right)(x)$ / $f(g(x))$": build the combination from the
 * printed definitions and compare. The composed expression is written in the
 * ask's own variable, so definitions in $t$ compose cleanly with asks in $x$.
 */
function checkFunctionCombination(question, answer) {
  const defs = printedDefinitions(question);
  if (defs.size === 0 || !/\bfind\b/i.test(question)) return null;
  const at = (name, variable) => {
    const def = defs.get(name);
    return def ? def.rhs.subs({ [def.variable]: variable }) : null;
  };
  const built = [];
  for (const raw of questionSpans(question)) {
    const s = raw.trim().replace(/\\left|\\right/g, '').replace(/\s+/g, '');
    let m = s.match(/^([a-zA-Z])\(([a-zA-Z])\(([a-zA-Z])\)\)$/)
      ?? s.match(/^\(([a-zA-Z])\\circ([a-zA-Z])\)\(([a-zA-Z])\)$/);
    if (m) {
      const inner = at(m[2], parseMath(m[3]));
      const outer = inner && defs.has(m[1]) ? defs.get(m[1]).rhs.subs({ [defs.get(m[1]).variable]: inner }) : null;
      if (outer) built.push(outer);
      continue;
    }
    // The product ask may write its operator out — $(f\cdot g)(x)$ — or by
    // juxtaposition; either way a non-sum operator means Multiply.
    m = s.match(/^\(([a-zA-Z])(?:([+\-])|\\cdot|·)?([a-zA-Z])\)\(([a-zA-Z])\)$/);
    if (m) {
      const [left, right] = [at(m[1], parseMath(m[4])), at(m[3], parseMath(m[4]))];
      if (left && right) built.push(ce.box([m[2] === '+' ? 'Add' : m[2] === '-' ? 'Subtract' : 'Multiply', left, right]));
      continue;
    }
    m = s.match(/^\(?\\[tdc]?frac\{([a-zA-Z])\}\{([a-zA-Z])\}\)?\(([a-zA-Z])\)$/);
    if (m) {
      const [top, bottom] = [at(m[1], parseMath(m[3])), at(m[2], parseMath(m[3]))];
      if (top && bottom) built.push(ce.box(['Divide', top, bottom]));
    }
  }
  if (built.length !== 1 || splitTopLevelCommas(answer).length > 1) return null;
  const answerExpr = parseMath(answer);
  if (!answerExpr) return skip('function-combination', 'unparseable answer');
  const { equal, witness } = equivalentNumerically(built[0], answerExpr);
  if (equal === false) {
    return fail('function-combination', `the built combination gives ${witness.left}, answer is ${witness.right} (${describePoint(witness)})`);
  }
  if (equal === null) return skip('function-combination', 'not numerically checkable');
  return pass('function-combination');
}

/**
 * "Find $f^{-1}(x)$ for $f(x)=…$": the answer composed with the definition
 * must be the identity. The answer∘definition direction holds on the
 * definition's own domain even when the inverse's domain is restricted
 * ($f(x)=2-\sqrt{x}$ inverts to $(2-x)^2$ only for $x \le 2$, but
 * $(2-(2-\sqrt{x}))^2 = x$ for every sampled $x \ge 0$), so either direction
 * passing verifies; a wrong inverse fails both.
 */
function checkInverseFormula(question, answer) {
  if (!/\^\{?-1\}?\(\s*[a-zA-Z]\s*\)/.test(unfenced(question)) && !/\bthe inverse of\b/i.test(question)) return null;
  const defs = printedDefinitions(question);
  if (defs.size !== 1) return null;
  const def = [...defs.values()][0];
  const answerExpr = parseMath(answer);
  if (!answerExpr) return skip('inverse-formula', 'unparseable answer');
  const answerVars = [...freeVariables(answerExpr)];
  if (answerVars.length !== 1) return null;
  const identity = parseMath(def.variable);
  const outerFirst = equivalentNumerically(answerExpr.subs({ [answerVars[0]]: def.rhs }), identity);
  if (outerFirst.equal === true) return pass('inverse-formula');
  const innerFirst = equivalentNumerically(def.rhs.subs({ [def.variable]: answerExpr }), parseMath(answerVars[0]));
  if (innerFirst.equal === true) return pass('inverse-formula');
  if (outerFirst.equal === false && innerFirst.equal === false) {
    return fail('inverse-formula', `composing with the definition does not give the identity (${describePoint(outerFirst.witness)})`);
  }
  return skip('inverse-formula', 'not numerically checkable');
}

/**
 * "Given that $h^{-1}(6)=2$, find $h(2)$" (and the mirror): pure notation —
 * the fact's input is the ask's answer whenever the ask flips the inverse
 * and takes the fact's output as its input.
 */
function checkInverseSwap(question, answer) {
  const facts = [];
  for (const raw of questionSpans(question)) {
    const m = unfenced(raw).trim().match(/^([a-zA-Z])\s*(\^\{?-1\}?)?\s*\(\s*(-?[\d.]+)\s*\)\s*=\s*(-?[\d.]+)$/);
    if (m) facts.push({ name: m[1], inverse: Boolean(m[2]), input: Number(m[3]), output: Number(m[4]) });
  }
  const askMatch = unfenced(question).match(/\b(?:find|give|what is)\s+\$([a-zA-Z])\s*(\^\{?-1\}?)?\s*\(\s*(-?[\d.]+)\s*\)\$/i);
  if (facts.length === 0 || !askMatch) return null;
  const ask = { name: askMatch[1], inverse: Boolean(askMatch[2]), input: Number(askMatch[3]) };
  const fact = facts.find((f) => f.name === ask.name && f.inverse !== ask.inverse
    && closeNumbers(f.output, ask.input));
  if (!fact) return null;
  const value = numericAnswer(answer);
  if (value === null) return skip('inverse-swap', 'unparseable answer');
  if (!closeNumbers(value, fact.input)) {
    return fail('inverse-swap', `the printed fact swaps to ${fact.input}, answer is ${value}`);
  }
  return pass('inverse-swap');
}

/** "Find the slope of the line through $(2,4)$ and $(4,10)$" — or of a printed linear definition. */
function checkSlope(question, answer) {
  if (!/\bfind the slope\b/i.test(question) || splitTopLevelCommas(answer).length > 1) return null;
  const value = numericAnswer(answer);
  const points = printedPoints(question);
  const defs = printedDefinitions(question);
  let slope = null;
  if (points.length === 2 && points[0][0] !== points[1][0]) {
    slope = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0]);
  } else if (points.length === 0 && defs.size === 1) {
    slope = linearSlope([...defs.values()][0]);
  }
  if (slope === null) return null;
  if (value === null) return skip('slope', 'unparseable answer');
  if (!closeNumbers(value, slope)) {
    return fail('slope', `the printed data gives slope ${slope}, answer is ${value}`);
  }
  return pass('slope');
}

/** "Find the point of intersection of the lines …": the pair satisfies both. */
function checkIntersection(question, answer) {
  if (!/\bpoints? of intersection\b/i.test(question)) return null;
  const pair = answer.trim().replace(/\\left|\\right/g, '').match(/^\(\s*([^,]+)\s*,\s*([^)]+)\s*\)$/);
  if (!pair) return null;
  const [px, py] = [numericAnswer(pair[1]), numericAnswer(pair[2])];
  if (px === null || py === null) return skip('intersection', 'unparseable answer');
  const defs = printedDefinitions(question);
  const lines = [...defs.values()].map((def) => () => {
    const y = definitionAt(def, px);
    return y === null ? null : closeNumbers(y, py);
  });
  for (const raw of questionSpans(question)) {
    if (DEFINITION_RE.test(unfenced(raw).trim())) continue;
    const expr = parseMath(raw);
    if (expr?.operator !== 'Equal') continue;
    const vars = [...freeVariables(expr)];
    if (vars.length === 0 || vars.some((name) => !'xy'.includes(name))) continue;
    lines.push(() => {
      const [left, right] = expr.ops.map((side) => numericValue(side.subs({ x: px, y: py }))?.re);
      return left == null || right == null ? null : closeNumbers(left, right);
    });
  }
  if (lines.length !== 2) return null;
  for (const onLine of lines) {
    const satisfied = onLine();
    if (satisfied === null) return skip('intersection', 'not numerically checkable');
    if (!satisfied) return fail('intersection', `(${px}, ${py}) does not satisfy both printed lines`);
  }
  return pass('intersection');
}

/**
 * A line-equation ask with its data printed in the question: points (pair
 * spans and $f(2)=-11$ facts), a stated slope ("a slope of $-2$", "$m =
 * -\tfrac{3}{4}$"), or a parallel/perpendicular reference (a printed
 * definition, a printed $y=mx+b$ span, or "the points $P$ and $Q$" naming
 * the reference against "the point $R$" naming the target). The answered
 * line — point-slope, slope-intercept, or the bare expression after $y=$ —
 * must pass through every data point and carry the required slope. Two
 * constraints determine a line, so fewer (a table, a graph, prose data)
 * skips rather than guessing.
 */
function checkLineEquation(question, answer) {
  if (!/\b(?:write|find)\b[^.?!]*\b(?:equation|linear function|point-slope form|slope-intercept form)\b/i.test(question)
    && !/expression that \$y\$ equals/i.test(question)) return null;
  if (splitTopLevelCommas(answer).length > 1) return null;
  let points = printedPoints(question);
  let requiredSlope = null;
  const statedSlopes = [];
  for (const raw of questionSpans(question)) {
    const assignment = asAssignment(parseMath(raw));
    if (assignment?.variable !== 'm') continue;
    const value = numericValue(assignment.value)?.re;
    if (value != null) statedSlopes.push(value);
  }
  if (statedSlopes.length > 0) {
    // Two different printed `m=…` spans name two lines, and which one binds
    // the ask is prose the checker cannot read — skip rather than let the
    // last span silently overwrite the relevant one.
    if (statedSlopes.some((value) => !closeNumbers(value, statedSlopes[0]))) return null;
    requiredSlope = statedSlopes[0];
  }
  if (requiredSlope === null) {
    const stated = question.match(/slope(?: of)?\s*\$([^$]+)\$/i);
    if (stated) {
      const expr = parseMath(stated[1]);
      requiredSlope = realValue(expr && (asAssignment(expr)?.value ?? expr));
    }
  }
  const orientation = /perpendicular/i.test(question) ? 'perpendicular' : /parallel/i.test(question) ? 'parallel' : null;
  if (orientation) {
    let reference = null;
    const defs = printedDefinitions(question);
    if (defs.size === 1) reference = linearSlope([...defs.values()][0]);
    if (reference === null) {
      for (const raw of questionSpans(question)) {
        const expr = parseMath(raw);
        const line = asAssignment(expr);
        if (line?.variable === 'y') reference = linearSlope({ variable: 'x', rhs: line.value });
      }
    }
    if (reference === null && points.length === 3) {
      // "passes through the points $P$ and $Q$. Find the equation of a
      // perpendicular line that passes through the point $R$." Matched on the
      // \left/\right-stripped text, exactly as printedPoints() reads pairs,
      // so MathLive's smart-fence output does not lose the classification.
      const flat = question.replace(/\\left|\\right/g, '');
      const ref = flat.match(/the points\s*\$\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)\$\s*and\s*\$\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)\$/i);
      const target = flat.match(/the point\s*\$\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)\$/i);
      if (ref && target && Number(ref[1]) !== Number(ref[3])) {
        reference = (Number(ref[4]) - Number(ref[2])) / (Number(ref[3]) - Number(ref[1]));
        points = [[Number(target[1]), Number(target[2])]];
      }
    }
    if (reference === null || (orientation === 'perpendicular' && reference === 0)) return null;
    requiredSlope = orientation === 'parallel' ? reference : -1 / reference;
  }
  if (points.length + (requiredSlope !== null ? 1 : 0) < 2) return null;

  // `x = 5` — the vertical line through points that share an x-coordinate.
  // answeredLineAt cannot solve it for y, but the check is direct.
  const answerExpr = parseMath(answer);
  if (answerExpr?.operator === 'Equal' && !freeVariables(answerExpr).has('y')) {
    const vars = [...freeVariables(answerExpr)];
    if (vars.length !== 1 || requiredSlope !== null || points.length < 2) {
      return skip('line-equation', 'answer is not a line the checker can read');
    }
    const diff = ce.box(['Subtract', answerExpr.ops[0], answerExpr.ops[1]]);
    const g0 = numericValue(diff.subs({ [vars[0]]: 0 }))?.re;
    const g1 = numericValue(diff.subs({ [vars[0]]: 1 }))?.re;
    if (g0 == null || g1 == null || Math.abs(g1 - g0) < 1e-12) {
      return skip('line-equation', 'answer is not a line the checker can read');
    }
    const c = -g0 / (g1 - g0);
    for (const [px] of points) {
      if (!closeNumbers(px, c)) {
        return fail('line-equation', `the vertical line x=${c} misses the printed point with x=${px}`);
      }
    }
    return pass('line-equation');
  }

  const lineAt = answeredLineAt(answer);
  if (!lineAt) return skip('line-equation', 'answer is not a line the checker can read');
  const [y0, y1, y2] = [0, 1, 2].map(lineAt);
  if (y0 === null || y1 === null || y2 === null || !closeNumbers(y2 - y1, y1 - y0)) {
    return skip('line-equation', 'answer is not a line the checker can read');
  }
  const slope = y1 - y0;
  if (requiredSlope !== null && !closeNumbers(slope, requiredSlope)) {
    return fail('line-equation', `the answered line has slope ${slope}, the printed data requires ${requiredSlope}`);
  }
  for (const [px, py] of points) {
    const y = lineAt(px);
    if (y === null) return skip('line-equation', 'not numerically checkable');
    if (!closeNumbers(y, py)) {
      return fail('line-equation', `the answered line misses the printed point (${px}, ${py}): it gives y=${y}`);
    }
  }
  return pass('line-equation');
}

/** "If $x-8y^3=0$, express $y$ as a function of $x$" routes to the solve check. */
function checkExpressAsFunction(question, answer) {
  const m = question.match(/\bexpress\s+\$?([a-zA-Z])\$?\s+as a function of\b/i);
  return m ? checkSolve(question, answer, m[1]) : null;
}

/**
 * "Write the standard form of the equation of the circle with center $(h,k)$
 * that also contains the point $(a,b)$": the printed data names one circle,
 * and five of its points — the given point and the four compass points at
 * radius $r = \operatorname{dist}(center, point)$ — must all satisfy the
 * answered equation. Five points determine a conic, so no textual reading of
 * the answer's $h$, $k$, $r^2$ is needed, and any value-different center or
 * radius fails on at least one of them.
 *
 * The "with radius $r$ and center $(h,k)$" phrasing prints the radius instead
 * of a second point; the same five-point test applies, with a diagonal fifth
 * point standing in for the given one — the four compass points alone are
 * blind to a cross term, which every off-axis point sees.
 */
function checkCircleEquation(question, answer) {
  if (!/\bequation of the circle\b/i.test(question)) return null;
  // Stripped like printedPoints() reads pairs, so a center printed with
  // MathLive's smart fences still classifies the exercise.
  const center = unfenced(question)
    .match(/center\s*\$\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)\$/i);
  if (!center) return null;
  const h = Number(center[1]);
  const k = Number(center[2]);
  const others = printedPoints(question).filter(([x, y]) => !(closeNumbers(x, h) && closeNumbers(y, k)));
  let r;
  let onCircle;
  if (others.length === 1) {
    r = Math.hypot(others[0][0] - h, others[0][1] - k);
    onCircle = [others[0], [h + r, k], [h - r, k], [h, k + r], [h, k - r]];
  } else if (others.length === 0) {
    const radius = unfenced(question).match(/radius(?:\s+of)?\s*\$([^$]+)\$/i);
    r = radius ? numericAnswer(radius[1]) : null;
    if (r === null || !(r > 0)) return null;
    onCircle = [[h + r, k], [h - r, k], [h, k + r], [h, k - r],
      [h + r * Math.SQRT1_2, k + r * Math.SQRT1_2]];
  } else {
    return null;
  }
  const answerExpr = parseMath(answer);
  if (answerExpr?.operator !== 'Equal') return skip('circle-equation', 'answer is not an equation');
  if ([...freeVariables(answerExpr)].some((name) => !'xy'.includes(name))) return null;
  const diff = ce.box(['Subtract', answerExpr.ops[0], answerExpr.ops[1]]);
  for (const [x, y] of onCircle) {
    const value = numericValue(diff.subs({ x, y }))?.re;
    if (value == null) return skip('circle-equation', 'not numerically checkable');
    // The residual is compared against the equation's own scale (r^2), not
    // against 1, or a large circle's float noise would read as a miss.
    if (Math.abs(value) > 1e-8 * Math.max(1, r * r)) {
      return fail('circle-equation', `the answered equation misses (${x}, ${y}), a point of the printed circle`);
    }
  }
  return pass('circle-equation');
}

/**
 * "Write $y=2x^2+4x+5$ in standard form" answers $2(x+1)^2+3$ (or
 * $y=2(x+1)^2+3$, or $f(x)=…$): completing the square changes the shape, not
 * the value, so the answered right side must value-equal the printed one.
 * The SHAPE is answerForm's job (`vertex-form`); this pins the value, which
 * a corrupted vertex would break while still passing the shape predicate.
 * Gated on the re-expression ask plus exactly one printed `var = RHS`
 * subject span. A template span (`$f(x)=a(x-h)^2+k$`, printed to name the
 * target shape) is not a subject — its right side carries the shape's
 * letters, so requiring exactly one free variable in the RHS drops it. The
 * conic and circle standard-form asks print no bare-variable side and never
 * reach here.
 */
function checkStandardFormRewrite(question, answer) {
  if (!/\bstandard form\b|\bvertex form\b|\bcompleting the square\b/i.test(question)) return null;
  const subjects = [];
  for (const raw of questionSpans(question)) {
    if (/[<>]/.test(raw)) continue;
    const m = unfenced(raw).trim().match(/^([a-zA-Z])\s*(?:\(\s*[a-zA-Z]\s*\))?\s*=\s*([\s\S]+)$/);
    if (!m) continue;
    const rhs = parseMath(m[2].replace(/[\s.,;]+$/, ''));
    if (rhs && freeVariables(rhs).size === 1) subjects.push({ variable: m[1], rhs });
  }
  if (subjects.length !== 1) return null;
  const { variable, rhs: printed } = subjects[0];
  let answered = unfenced(answer).trim();
  const label = answered.match(/^([a-zA-Z])\s*(?:\(\s*[a-zA-Z]\s*\))?\s*=\s*([\s\S]+)$/);
  if (label) {
    if (label[1] !== variable) return skip('standard-form-rewrite', 'answer names a different output variable');
    answered = label[2];
  }
  const answerExpr = parseMath(answered);
  if (!answerExpr) return skip('standard-form-rewrite', 'unparseable answer');
  const { equal, witness } = equivalentNumerically(printed, answerExpr);
  if (equal === false) {
    return fail('standard-form-rewrite', `the printed subject gives ${witness.left}, answer is ${witness.right} (${describePoint(witness)})`);
  }
  if (equal === null) return skip('standard-form-rewrite', 'not numerically checkable');
  return pass('standard-form-rewrite');
}

const FUNCTION_CLASS_CHECKS = [
  checkInverseSwap, checkFunctionEvaluate, checkFunctionSolve, checkIntercepts,
  checkAverageRate, checkFunctionCombination, checkInverseFormula, checkSlope,
  checkIntersection, checkLineEquation, checkExpressAsFunction, checkCircleEquation,
  checkStandardFormRewrite,
];

/** Classify one fill-in and cross-check its answer. */
export function analyzeFillin({ question = '', answer, answerMode }) {
  if (answer == null) return skip('none', 'no authored answer');
  if (APPROXIMATION_RE.test(question)) return skip('none', 'rounding/approximation ask');
  let primary = null;
  if (SOLVE_RE.test(question)) primary = checkSolve(question, answer);
  else if (EVALUATE_RE.test(question)) {
    const result = checkEvaluateAt(question, answer);
    // "Evaluate: $9+5^3$" carries no given values — that is a plain
    // re-expression of printed arithmetic, which the third class covers.
    if (!(result.status === 'skip' && result.reason === 'no given values')) primary = result;
  }
  if (!primary && REEXPRESSION_RE.test(question)) primary = checkReexpression(question, answer, answerMode);
  if (primary && primary.status !== 'skip') return primary;
  // The function-shaped classes run on whatever the three primaries skipped.
  // A null gate falls through; the first decisive result wins; a gated skip
  // is kept as the reported reason only when the primaries had none.
  let gated = null;
  for (const check of FUNCTION_CLASS_CHECKS) {
    const result = check(question, answer, answerMode);
    if (result && result.status !== 'skip') return result;
    gated = gated ?? result;
  }
  return primary ?? gated ?? skip('none', 'prompt class not mechanically checkable');
}

/* ------------------------------------------------------------------ driver */

/** Every fill-in in a Markdown source, with its 1-based line number. */
export function extractFillins(source) {
  // Blank out code fences and inline code in place (newlines kept) so the
  // reported line numbers stay true to the file.
  const cleaned = source
    .replace(/```[\s\S]*?```/g, blankPreservingOffsets)
    .replace(/`[^`\n]*`/g, blankPreservingOffsets);
  const fillins = [];
  for (const { params, index } of shortcodes(cleaned, 'fillin')) {
    fillins.push({ line: cleaned.slice(0, index).split('\n').length, params });
  }
  return fillins;
}

function main() {
  const args = process.argv.slice(2);
  const root = args.find((a) => !a.startsWith('--')) || 'content';
  // Coverage ratchet. This tool reports 0 failures both when every answer is
  // right and when it has quietly stopped being able to READ them — a parser
  // change that pushes a class into "out of scope" shrinks the checked set
  // without changing a single line of the summary. `--min-verified N` turns
  // that into a failure. Wired into `npm test` via the `verify:answers`
  // script; `npm run baseline:update` recounts reality and rewrites the floor
  // after an authoring session, in the same commit as the content.
  const minVerifiedArg = args.find((a) => a.startsWith('--min-verified'));
  const minVerified = minVerifiedArg
    ? Number(minVerifiedArg.includes('=')
      ? minVerifiedArg.split('=')[1]
      : args[args.indexOf(minVerifiedArg) + 1])
    : null;
  if (minVerifiedArg && (!Number.isInteger(minVerified) || minVerified < 0)) {
    console.error('usage: node tools/verify-answers.mjs [content-root] [--min-verified N]');
    process.exit(2);
  }
  if (!existsSync(root)) throw new Error(`Content root not found: ${root}`);

  const passes = new Map();
  const skips = new Map();
  const failures = [];
  let total = 0;

  for (const file of walkMarkdown(root)) {
    for (const { line, params } of extractFillins(readFileSync(file, 'utf8'))) {
      total += 1;
      const result = analyzeFillin(params);
      if (result.status === 'pass') passes.set(result.rule, (passes.get(result.rule) ?? 0) + 1);
      else if (result.status === 'skip') skips.set(result.reason, (skips.get(result.reason) ?? 0) + 1);
      else {
        failures.push({ file, line, params, result });
      }
    }
  }

  // Failure detail to stderr, matching the other verifiers; the coverage
  // summary below stays on stdout because it is the tool's normal output.
  for (const { file, line, params, result } of failures) {
    console.error(`✗ ${file}:${line} [${result.rule}]`);
    console.error(`    question: ${JSON.stringify(params.question?.slice(0, 100))}`);
    console.error(`    answer:   ${JSON.stringify(params.answer)}`);
    console.error(`    ${result.detail}`);
  }

  const verified = [...passes.values()].reduce((a, b) => a + b, 0);
  const outOfScope = [...skips.values()].reduce((a, b) => a + b, 0);
  const byRule = [...passes.entries()].sort((a, b) => b[1] - a[1])
    .map(([rule, count]) => `${rule} ${count}`).join(', ');
  console.log(`${failures.length ? '✖' : '✓'} answer cross-check: ${verified}/${total} fill-ins mathematically verified `
    + `(${byRule}); ${outOfScope} out of scope; ${failures.length} failure(s)`);
  for (const [reason, count] of [...skips.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`    · out of scope (${count}): ${reason}`);
  }
  if (minVerified !== null && verified < minVerified) {
    console.error(`✖ answer cross-check verified ${verified} fill-ins, below the --min-verified floor of ${minVerified}`);
    console.error('  · coverage shrank: a prompt class this tool used to read is now out of scope');
    console.error('  · a deliberate drop? `npm run baseline:update -- --allow-decrease` moves the floor');
    process.exit(1);
  }
  if (minVerified !== null && verified > minVerified) {
    // The expectation is EXACT, not a floor. A floor lets unrecorded gains
    // accumulate silent headroom: authoring raises coverage, baseline:update
    // is forgotten, and a later checker regression consumes the gain without
    // ever failing CI. Every coverage change must be deliberate.
    console.error(`✖ answer cross-check verified ${verified} fill-ins, above the recorded baseline of ${minVerified}`);
    console.error('  · coverage grew: record it with `npm run baseline:update` and commit the rewrite');
    process.exit(1);
  }
  process.exit(failures.length ? 1 : 0);
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())) {
  main();
}
