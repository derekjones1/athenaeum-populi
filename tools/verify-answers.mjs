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
 * Usage: node tools/verify-answers.mjs [content-root]
 */

import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
} from 'node:fs';
import { join } from 'node:path';
import { ce, preprocess, splitTopLevelCommas } from '../assets/js/lib/check-answer.mjs';

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
    const expr = ce.parse(prepared);
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
  let valid = 0;
  for (let s = 0; s < SAMPLE_BASES.length && valid < 3; s += 1) {
    const assignment = {};
    names.forEach((name, i) => {
      const base = SAMPLE_BASES[(s + 2 * i) % SAMPLE_BASES.length];
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
  return valid >= 2 ? { equal: true } : { equal: null };
}

/* ------------------------------------------------------------- classifiers */

const SPAN_RE = /(?<!\\)\$([^$]+?)(?<!\\)\$/g;
// A span introduced as an example of the ANSWER's shape ("… in exponential
// form, e.g. $2^3 \cdot 5$") is not part of the exercise's mathematics.
const EXAMPLE_LEAD_RE = /(?:e\.g\.|for example|such as|like|format)[,:]?\s*$/i;
const questionSpans = (question) => [...question.matchAll(SPAN_RE)]
  .filter((m) => !EXAMPLE_LEAD_RE.test(question.slice(Math.max(0, m.index - 24), m.index)))
  .map((m) => m[1]);

const SOLVE_RE = /(?:^|[.?!]\s)\s*solve\b/i;
const SOLVE_FOR_RE = /\bsolve[^.?!$]*?\bfor\s+\$([a-zA-Z])\$/i;
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
  String.raw`\bfind the (?:sum|difference|product|quotient|value)\b`,
  String.raw`\bprime factorization\b`,
  String.raw`\bin (?:simplest|lowest) (?:form|terms)\b`,
  String.raw`\bin scientific notation\b`,
  // "(?!…your answer)" keeps a word problem's FORMAT instruction ("Write your
  // answer as an improper fraction") from reading as a re-expression ask.
  String.raw`\b(?:convert|write|rewrite|express)\b(?!\s+(?:your|the)\s+answer\b)[^.?!]*\b(?:to|as|in)\b[^.?!]*\b(?:decimal|fraction|mixed number|scientific notation|power)\b`,
].join('|'), 'i');

const pass = (rule) => ({ rule, status: 'pass' });
const fail = (rule, detail) => ({ rule, status: 'fail', detail });
const skip = (rule, reason) => ({ rule, status: 'skip', reason });

const describePoint = (witness) => {
  const at = Object.entries(witness.assignment).map(([k, v]) => `${k}=${v}`).join(', ');
  return `${at ? `at ${at}: ` : ''}${witness.left} vs ${witness.right}`;
};

function checkSolve(question, answer) {
  const spans = questionSpans(question).map(parseMath);
  const equations = spans.filter((expr) => expr?.operator === 'Equal');
  if (equations.length === 0) return skip('solve', 'no printed equation (word problem, inequality, or system notation)');
  if (equations.length > 1) return skip('solve', 'several printed equations');
  const equation = equations[0];

  const parts = splitTopLevelCommas(answer).map((part) => ({ raw: part, expr: parseMath(part) }));
  if (parts.some((part) => !part.expr)) return skip('solve', 'unparseable answer (e.g. "no solution")');

  const explicit = question.match(SOLVE_FOR_RE)?.[1];
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

  const { equal, witness } = equivalentNumerically(candidates[0].expr, answerExpr);
  if (equal === false) {
    return fail('re-expression', `answer is not equivalent to the printed subject (${describePoint(witness)})`);
  }
  if (equal === null) return skip('re-expression', 'not numerically checkable');
  return pass('re-expression');
}

/** Classify one fill-in and cross-check its answer. */
export function analyzeFillin({ question = '', answer, answerMode }) {
  if (answer == null) return skip('none', 'no authored answer');
  if (APPROXIMATION_RE.test(question)) return skip('none', 'rounding/approximation ask');
  if (SOLVE_RE.test(question)) return checkSolve(question, answer);
  if (EVALUATE_RE.test(question)) {
    const result = checkEvaluateAt(question, answer);
    // "Evaluate: $9+5^3$" carries no given values — that is a plain
    // re-expression of printed arithmetic, which the third class covers.
    if (!(result.status === 'skip' && result.reason === 'no given values')) return result;
  }
  if (REEXPRESSION_RE.test(question)) return checkReexpression(question, answer, answerMode);
  return skip('none', 'prompt class not mechanically checkable');
}

/* ------------------------------------------------------------------ driver */

const shortcodeParams = (body) => {
  const params = {};
  for (const m of body.matchAll(/(\w+)="([^"]*)"/g)) params[m[1]] = m[2];
  return params;
};

/** Every fill-in in a Markdown source, with its 1-based line number. */
export function extractFillins(source) {
  // Blank out code fences and inline code in place (newlines kept) so the
  // reported line numbers stay true to the file.
  const cleaned = source
    .replace(/```[\s\S]*?```/g, (block) => block.replace(/[^\n]/g, ' '))
    .replace(/`[^`\n]*`/g, (span) => ' '.repeat(span.length));
  const fillins = [];
  for (const m of cleaned.matchAll(/\{\{<\s*fillin\b([\s\S]*?)>\}\}/g)) {
    fillins.push({
      line: cleaned.slice(0, m.index).split('\n').length,
      params: shortcodeParams(m[1]),
    });
  }
  return fillins;
}

function markdownFiles(dir) {
  const found = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) found.push(...markdownFiles(path));
    else if (entry.endsWith('.md')) found.push(path);
  }
  return found;
}

function main() {
  const root = process.argv[2] || 'content';
  if (!existsSync(root)) throw new Error(`Content root not found: ${root}`);

  const passes = { solve: 0, 'evaluate-at': 0, 're-expression': 0 };
  const skips = new Map();
  const failures = [];
  let total = 0;

  for (const file of markdownFiles(root).sort()) {
    for (const { line, params } of extractFillins(readFileSync(file, 'utf8'))) {
      total += 1;
      const result = analyzeFillin(params);
      if (result.status === 'pass') passes[result.rule] += 1;
      else if (result.status === 'skip') skips.set(result.reason, (skips.get(result.reason) ?? 0) + 1);
      else {
        failures.push({ file, line, params, result });
      }
    }
  }

  for (const { file, line, params, result } of failures) {
    console.log(`✗ ${file}:${line} [${result.rule}]`);
    console.log(`    question: ${JSON.stringify(params.question?.slice(0, 100))}`);
    console.log(`    answer:   ${JSON.stringify(params.answer)}`);
    console.log(`    ${result.detail}`);
  }

  const verified = Object.values(passes).reduce((a, b) => a + b, 0);
  const outOfScope = [...skips.values()].reduce((a, b) => a + b, 0);
  console.log(`${failures.length ? '✖' : '✓'} answer cross-check: ${verified}/${total} fill-ins mathematically verified `
    + `(solve ${passes.solve}, evaluate ${passes['evaluate-at']}, re-expression ${passes['re-expression']}); `
    + `${outOfScope} out of scope; ${failures.length} failure(s)`);
  for (const [reason, count] of [...skips.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`    · out of scope (${count}): ${reason}`);
  }
  process.exit(failures.length ? 1 : 0);
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())) {
  main();
}
