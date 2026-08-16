/**
 * Mechanical authoring lints — Hugo/shortcode edition.
 *
 * Mechanical checks for the repository's current Hugo Markdown and shortcode
 * authoring format. Math, table, exercise, and inline-SVG rules scan the raw
 * source before the production build.
 *
 * lintHugo(src, filename?) → { errors }
 *
 * Every rule is an error — there is no warning level. The last warning-level
 * rules (missing hints, multipart-looking questions, an empty worked
 * Solution, all-same graph answer positions) were promoted on August 10,
 * 2026, when the corpus carried zero of each; a rule that would need a
 * non-blocking tier is a rule that needs narrowing instead.
 */

import { parseGraphPlotConfig } from '../assets/js/lib/graph-plot-config.mjs';
// The real figure builders, so every authored apfigure spec is proven to
// build at lint time — the browser can then only ever be handed a spec the
// engine has already accepted.
import { buildFigure, buildGraph, buildNumberLine } from '../assets/js/lib/graph-core.mjs';

const APFIGURE_BUILDERS = Object.freeze({
  graph: buildGraph, numberline: buildNumberLine, figure: buildFigure,
});

/**
 * Validate one figure spec — an apfigure body, or a spec-JSON graph option in
 * a multiplechoice. One implementation for both callers, so the two rules can
 * never drift (lib-content is the precedent: one shortcode grammar per
 * repository). `kindFromParam` is the apfigure shortcode's kind= param; a
 * multiplechoice option carries its kind INSIDE the JSON instead. Returns
 * error strings, empty when the spec is sound.
 */
function figureSpecErrors(rawJson, kindFromParam) {
  let spec;
  try {
    spec = JSON.parse(rawJson);
  } catch {
    return ['spec is not valid JSON'];
  }
  if (!spec || typeof spec !== 'object' || Array.isArray(spec)) {
    return ['spec must be a JSON object of graph-core props'];
  }
  const errors = [];
  const kind = kindFromParam ?? spec.kind ?? 'graph';
  if (!APFIGURE_BUILDERS[kind]) {
    return [`kind must be graph, numberline, or figure — got ${JSON.stringify(kind)}`];
  }
  if (!String(spec.ariaLabel || '').trim()) {
    errors.push("spec needs a non-empty ariaLabel — it is the figure's accessible name");
  }
  try {
    APFIGURE_BUILDERS[kind](spec);
  } catch (error) {
    errors.push(`spec does not build — ${error.message}`);
  }
  return errors;
}
// The grader's own list-splitting rules, so the lint reasons about authored
// comma answers exactly the way checkAnswer() will grade them — and the
// grader itself, so the trivially-satisfiable-prompt check grades a printed
// value exactly the way a learner's submission would be graded.
import {
  ANSWER_FORM_TOKENS, ce, checkAnswer, checkFormAsGraded, parseAnswerForm, preprocess,
  splitTopLevelCommas, stripGroupingCommas,
} from '../assets/js/lib/check-answer.mjs';
// The shared content primitives: one shortcode grammar, one math-span escape
// strategy, and one set of HTML readers, so this lint and the verifiers can
// never disagree about what a page says.
import {
  malformedShortcodeParams, mathSpans, PAIRED_SHORTCODES, shortcodes,
} from './lib-content.mjs';
import { hasFileBackedCssImage, htmlAttribute, openTagRe } from './lib-html.mjs';
// The one objectives-callout parser, shared with the structure validator and
// the source audit so the three tools never diagnose the callout differently.
import { parseObjectivesCallout } from './lib-openstax-source.mjs';

/**
 * Does the question tell the learner what order to enter a comma-separated
 * answer in? Matches explicit order words ("least to greatest", "first…then",
 * "increasing", "row 1") and the naming pattern "Enter/Find the X and Y …
 * comma" — an instruction sentence that fixes the order by naming the
 * quantities. A false positive here only silences the lint; a bare list whose
 * question gives NO order is the hazard, because the default grading is
 * positional and a learner who enters the members in another order is marked
 * wrong.
 */
const ORDER_CUE_RE = /least to greatest|greatest to least|smallest|smaller|largest|larger|increasing|decreasing|ascending|descending|order|first\b|then\b|respectively|followed by|\brow\b|\b(?:enter|find|give|list)\b[^.?!]*?\band\b[^.?!]*?comma/i;

const lineOf = (src, index) => src.slice(0, index).split('\n').length;

/**
 * Blank every `\macro{…}` match and its balanced brace group, preserving the
 * source offsets every diagnostic in this file reports against.
 */
function blankBalancedMacro(source, macroRe, blank) {
  let out = source;
  const re = new RegExp(macroRe.source, macroRe.flags.includes('g') ? macroRe.flags : `${macroRe.flags}g`);
  let m;
  while ((m = re.exec(out)) !== null) {
    let depth = 1;
    let end = m.index + m[0].length;
    while (end < out.length && depth > 0) {
      if (out[end] === '{') depth += 1;
      else if (out[end] === '}') depth -= 1;
      end += 1;
    }
    out = out.slice(0, m.index) + blank(out.slice(m.index, end)) + out.slice(end);
    re.lastIndex = end;
  }
  return out;
}

/**
 * Does the prompt ask the learner to RE-EXPRESS a value the question prints —
 * to restate it in another form without changing what it is worth? That shape
 * is the whole hazard: simplifying a fraction, converting a percent to a
 * decimal, or writing a prime factorization all have answers that are
 * value-equal to the printed subject *by construction*, so no choice of
 * numbers can stop a learner from passing by retyping the prompt. Only the
 * response mode can (see answerForm).
 *
 * Prompts outside this shape are excluded even when the answer does collide
 * with a printed value, because there the collision is incidental and the
 * exercise is sound: the mode of a data set is necessarily one of the numbers
 * printed in it, the answer to "One angle of a right triangle measures 45
 * degrees" is legitimately 45, and "Divide: $\tfrac{91{,}881}{9}$" prints a
 * division, not a value. A learner facing those cannot know which printed
 * number to copy — the same reasoning that already exempts "Add: $3+5$".
 */
const REEXPRESSION_RE = new RegExp([
  String.raw`\bsimplify\b`,
  String.raw`\bconvert\b`,
  String.raw`\brewrite\b`,
  String.raw`\breduce\b`,
  String.raw`\bexpress\b`,
  String.raw`\bwrite\b[^.?!]*?\bas\b`,
  String.raw`\bprime factorization\b`,
  String.raw`\bequivalent\b`,
  String.raw`\bin (?:simplest|lowest) (?:form|terms)\b`,
  String.raw`\bscientific notation\b`,
  String.raw`\bratio of two integers\b`,
  String.raw`\b(?:improper fraction|mixed number)\b`,
  String.raw`\bas a (?:decimal|fraction|percent)\b`,
  String.raw`\bdenominator of\b`,
].join('|'), 'i');

/**
 * Does the prompt IMPERATIVELY ask the learner to factor? Factoring is the
 * re-expression hazard over an algebraic subject: "Factor: $x^2+6x+8$" prints
 * a polynomial that *is* its own factorization by value, so no choice of
 * coefficients stops a learner from passing by retyping the prompt.
 *
 * The word alone is far too broad — a third of the questions containing
 * "factor" use it as a noun ("Find the greatest common factor of $12$ and
 * $18$", "List all the factors of 96", "A factor of $-1$ appears from opposite
 * binomials"). What separates the instruction from the noun is that the
 * instruction OPENS with the verb, so the match is anchored to the start of the
 * question or of a sentence within it. Singular only: every noun use in the
 * corpus that could begin a sentence is plural.
 */
const FACTORING_PROMPT_RE = /(?:^|[.?!]\s+)\s*factor\b/i;

/**
 * Does the prompt ask the learner to EVALUATE printed arithmetic? "Add: $3+5$"
 * prints an expression worth exactly its own answer, so retyping it grades
 * correct — the same hazard as the numeral re-expressions above, reached by a
 * different verb.
 *
 * Anchored to the start of the question or of a sentence within it, for the
 * same reason as factoring: "Divide" opening an instruction is an ask, while
 * "divide" inside prose ("…then divide both sides") is not. `evaluate` is
 * included because "Evaluate $9+5^3$" is the same shape; an "Evaluate $3ab^2$
 * when $a=…$" prompt prints no bare-arithmetic span and so contributes no
 * candidate.
 */
const ARITHMETIC_PROMPT_RE = /(?:^|[.?!]\s+)\s*(?:add|subtract|multiply|divide|simplify|evaluate|find the (?:sum|difference|product|quotient|value))\b/i;

/**
 * Does the prompt ask for the VALUE of printed trigonometry? "Find the exact
 * value of $\cos\left(\tfrac{\pi}{4}\right)$" keys $\tfrac{\sqrt2}{2}$, which
 * is what the printed subject evaluates to — the arithmetic hazard again,
 * over a function the numeric extractor deliberately skips.
 *
 * "find the exact value" is why this needs its own verb at all:
 * ARITHMETIC_PROMPT_RE matches "find the value" but not the adjective between,
 * and widening that regex would pull `\pi`-carrying spans into a numeric path
 * written to exclude them. The verb has to reach the trig function in the same
 * sentence, so a later mention ("Find the period. Then sketch $y=\sin x$.")
 * does not conscript the span.
 */
const TRIG_VALUE_PROMPT_RE = new RegExp(
  String.raw`(?:^|[.?!]\s+)\s*(?:evaluate|compute|find|determine|give|state|what)\b[^.?!]*`
  + String.raw`\\(?:arc)?(?:sin|cos|tan|csc|sec|cot)\b`,
  'i',
);

/**
 * Does the prompt ask for an angle converted between degrees and radians?
 * The engine reads `^\circ` as an exact conversion, so the two spellings of
 * one angle are the same value to it and the printed subject grades correct.
 * The `degrees`/`radians` tokens grade the written unit the value cannot see.
 */
const ANGLE_CONVERSION_PROMPT_RE = /\b(?:convert|express|rewrite|write|give|state|find)\b[^.?!]*\b(?:in|to|into|as)\s+(?:degrees?|radians?)\b/i;

/**
 * Does the prompt ask the learner to carry out an ALGEBRAIC multiplication or
 * division? "Multiply: $(w+5)(w+7)$" prints a product worth exactly its own
 * expansion — the arithmetic hazard again, one rung up.
 *
 * Separate from ARITHMETIC_PROMPT_RE because the subjects differ: this path
 * feeds the printed *polynomial* spans, and the tokens that answer it
 * (`expanded`, `single-term`, `single-fraction`) are shape tests over algebra
 * rather than over numerals.
 */
const ALGEBRAIC_PRODUCT_PROMPT_RE = /(?:^|[.?!]\s+)\s*(?:multiply|divide|find the (?:product|quotient))\b/i;

/**
 * Does the prompt ask the learner to SIMPLIFY or COMBINE an algebraic
 * expression? "Simplify: $3x^2+7x+9+7x^2+9x+8$" prints a sum worth exactly its
 * own combined form. Answered by `no-like-terms`, `polynomial` and
 * `single-fraction`.
 */
const ALGEBRAIC_SIMPLIFY_PROMPT_RE = /(?:^|[.?!]\s+)\s*(?:simplify|add|subtract|combine|perform the indicated operation|find the (?:sum|difference))\b/i;

/**
 * Does the prompt ask for a STANDARD (or vertex) form of a printed equation?
 * "Write $y=-x^2+2x-4$ in standard form" answers $y=-(x-1)^2-3$, and
 * completing the square changes the shape, not the value — the §6 "standard
 * form" class, answered by `vertex-form`, `conic-standard-form` and
 * `circle-standard-form`. The $f(x)=a(x-h)^2+k$ alternation matches the
 * quadratic-functions sections, which spell the same ask as its template.
 *
 * Deliberately loose about surrounding words ("in standard form", "use
 * properties of standard form", "enter the function in vertex form"): the
 * candidates are gated to printed EQUATION spans below, so a prompt that
 * merely mentions the words but prints no equation contributes nothing.
 */
const STANDARD_FORM_PROMPT_RE = /\b(?:standard|vertex) form\b|\bin (?:the )?\$f\(x\)=a\(x-h\)\^2\+k\$ form\b/i;

/**
 * Does the prompt ask to CONVERT a printed logarithmic equation? "Convert the
 * equation from logarithmic to exponential form: $3=\log_7 343$" answers
 * $343=7^3$ — two true statements the grader accepts as equal, so retyping
 * the printed equation passes. Answered by `exponential-form`.
 */
const EXPONENTIAL_FORM_PROMPT_RE = /\b(?:to|in) exponential form\b/i;

/**
 * Does the prompt ask to EXPAND a printed logarithm? "Use properties of
 * logarithms to write $\log_5 25ab$ as a sum of logarithms" answers
 * $2+\log_5 a+\log_5 b$, value-equal to the printed subject by construction.
 * Answered by `expanded-logarithms`.
 */
const LOG_EXPANSION_PROMPT_RE = /\bas a sum\b[^.?!]*\blogarithms\b/i;

/**
 * Prompts that ask for a NAMED form, paired with the answerForm token(s) that
 * grade it. These prompts usually print nothing to retype — the two-points
 * point-slope ask prints only coordinates — so the passable-by-retyping check
 * above never sees them; the hazard is the learner's own correct VALUE in a
 * shape the ask exists to rule out (distributed, scaled, or a different named
 * form entirely), which value grading accepts. The ask names the form, so the
 * exercise must grade it.
 *
 * Each ask requires ANY of its tokens, because one phrase can name different
 * shapes: "exponential form" is the log conversion (`exponential-form`), the
 * repeated multiplication $x\cdot x\cdot x$ (`single-power`), and the prime
 * factorization $2^4\cdot 5$ (`prime-product`).
 *
 * The ask patterns demand a producing verb (write/rewrite/enter/…) or an
 * "equation … in <name> form" clause in the same sentence, so a prompt that
 * merely mentions the form ("What is the slope of the line given in
 * slope-intercept form $y=3x+4$?") is not conscripted into grading a shape
 * its answer does not have.
 */
export const NAMED_FORM_ASKS = [
  {
    ask: /\b(?:write|rewrite|express|enter|give|convert)\b[^.?!]*\bpoint-slope form\b|\bequation\b[^.?!]*\b(?:in|to) (?:the )?point-slope form\b/i,
    name: 'point-slope form',
    tokens: ['point-slope-form'],
  },
  {
    ask: /\b(?:write|rewrite|express|enter|give|convert)\b[^.?!]*\bslope-intercept form\b|\bequation\b[^.?!]*\b(?:in|to) (?:the )?slope-intercept form\b/i,
    name: 'slope-intercept form',
    tokens: ['slope-intercept-form'],
  },
  {
    ask: /\b(?:convert|write|rewrite|express|enter|give)\b[^.?!]*\b(?:(?:to|in) decimal form|as a decimal)\b/i,
    name: 'decimal form',
    tokens: ['decimal'],
  },
  {
    ask: /\b(?:write|rewrite|express|enter|give|convert)\b[^.?!]*\brational exponents?\b/i,
    name: 'a rational exponent',
    tokens: ['rational-exponent'],
  },
  {
    // The mirror conversion: "Write as a radical expression: $t^{1/2}$" is
    // passable by retyping the printed exponent form without this.
    ask: /\b(?:write|rewrite|express|enter|give|convert)\b[^.?!]*\bas a radical\b/i,
    name: 'a radical expression',
    tokens: ['radical'],
  },
  {
    // "as a fraction, fully simplified" / "as a fully simplified fraction":
    // value grading accepts the decimal AND the unreduced fraction, so the
    // annotation needs BOTH fraction and lowest-terms; the fully-simplified
    // rule below requires the lowest-terms half.
    ask: /\b(?:write|rewrite|express|enter|give|convert)\b[^.?!]*(?:\b(?:fully )?simplified fraction\b|\bfraction,? fully simplified\b)/i,
    name: 'a fully simplified fraction',
    tokens: ['fraction'],
  },
  {
    // Two shapes: "…as an improper fraction" and "Name the improper
    // fraction modeled by…". The naming verb list deliberately excludes
    // "convert": "Convert the improper fraction to a mixed number" asks for
    // the OPPOSITE shape and is owned by the mixed-number ask above.
    ask: /\b(?:write|rewrite|express|enter|give|convert|answer)\b[^.?!]*\bas an improper fraction\b|\b(?:name|give)\b[^.?!]*\bthe improper fraction\b/i,
    name: 'an improper fraction',
    tokens: ['improper-fraction'],
  },
  {
    // Generic "as a fraction" (any fraction-shaped token satisfies it —
    // "as a fraction or mixed number" declares fraction-or-mixed-number).
    // "as a fraction of" is prose ("expressed as a fraction of the total"),
    // not a shape ask.
    ask: /\b(?:write|rewrite|express|enter|give|convert)\b[^.?!]*\bas a fraction\b(?!\s+of\b)/i,
    name: 'a fraction',
    tokens: ['fraction', 'improper-fraction', 'fraction-or-mixed-number', 'reduced-fraction', 'single-fraction'],
  },
  {
    // "Write … as a whole number using digits": the words-to-numeral
    // exercise is value-passable with arithmetic ("205000+617") or
    // scientific notation without a numeral-shape token.
    ask: /\b(?:write|enter|give)\b[^.?!]*\busing digits\b/i,
    name: 'a plain numeral (digits)',
    tokens: ['decimal'],
  },
  {
    // Scoped to the explicit INCLUSIVE sign clause ("Enter the percent,
    // including the % sign"). Prompts that ask for the percent AS A NUMBER
    // ("enter 40 for 40%", "Enter just the number, without the percent
    // sign") are a units convention, not a shape requirement — a broader
    // verb+percent+sign pattern conscripted the "without" phrasing too and
    // forced a % sign onto a number-only answer.
    ask: /\bincluding the (?:\$?\\%\$?|%|percent) sign\b/i,
    name: 'percent notation (with the % sign)',
    tokens: ['percent'],
  },
  {
    ask: /\b(?:leave|write|give|enter)\b[^.?!]*\bin factored form\b/i,
    name: 'factored form',
    tokens: ['factored'],
  },
  {
    ask: /\bas a mixed number\b/i,
    name: 'a mixed number',
    tokens: ['mixed-number', 'fraction-or-mixed-number'],
  },
  {
    ask: /\b(?:in|to) exponential form\b/i,
    name: 'exponential form',
    tokens: ['exponential-form', 'single-power', 'prime-product'],
  },
  {
    // "Enter the exact answer" / "Give the exact answer" / "Enter the exact
    // form": the exercise pairs its key with a decimal approximation, so
    // value grading alone accepts the approximation the ask exists to rule
    // out. "Find the exact value" is deliberately NOT matched: that is an
    // evaluation ask ("Find the exact value of $\log_6 36$" keys the
    // rational 2), not a shape requirement. A fraction-family token
    // satisfies the ask too — "Give the exact answer as a fraction" keys a
    // rational, and the fraction shape is what separates it from 1.5.
    ask: /\b(?:enter|give|write|leave|find)\b[^.?!]*\bexact (?:answer|form)\b/i,
    name: 'the exact (non-approximate) form',
    tokens: ['exact-log', 'exact-radical', 'simplified-radical', 'radical', 'fraction',
      'mixed-number', 'improper-fraction', 'fraction-or-mixed-number'],
  },
  {
    // "Write the sum using summation notation": the printed expanded sum is
    // value-equal to the sigma form by construction.
    ask: /\b(?:write|rewrite|express)\b[^.?!]*\bsummation notation\b/i,
    name: 'summation notation',
    tokens: ['summation'],
  },
  {
    // "Condense … to one logarithm" / "to a single logarithm": the printed
    // multi-log expression is value-equal to the condensed form.
    ask: /\bcondense\b[^.?!]*\blogarithm\b/i,
    name: 'a single condensed logarithm',
    tokens: ['single-logarithm'],
  },
  {
    // "Write the percent as a ratio" / "Enter the ratio" / "Write this as a
    // ratio": the printed percent is value-equal to the ratio. Deliberately
    // NOT a generic "as a ratio" match: "Write as a ratio and then as a
    // percent … Enter the percent" names the ratio only as a worked step,
    // and its %-shaped key is owned by the percent rules.
    ask: /\bthe percent as a ratio\b|\benter the ratio\b|\bwrite this as a ratio\b/i,
    name: 'a ratio (fraction)',
    tokens: ['fraction', 'improper-fraction', 'fraction-or-mixed-number', 'reduced-fraction'],
  },
];

/**
 * An answer that is one written numeral fraction or mixed number — the
 * subjects of the "in simplified/simplest form" ask below. Digits only: a
 * variable fraction's simplified form is `reduced-fraction` territory with
 * its own verb, and conscripting it here would force a token whose numeral
 * gcd test cannot read it. Each operand may be braced or a bare single digit
 * — TeX reads `\frac68` as 6/8, and the grader's asFraction() does too.
 */
const NUMERAL_FRACTION_ANSWER_RE = /^\s*-?\s*(?:\d+\s*)?\\[tdc]?frac\s*(?:\{\s*-?\d+\s*\}|\d)\s*(?:\{\s*-?\d+\s*\}|\d)\s*$/;

/**
 * A categorical response encoded as a number: "Answer 1 for yes or 0 for no",
 * "Enter 1 if rational, 0 if irrational", "Enter the quadrant number as a
 * digit". The learner is choosing among named alternatives, so a free-response
 * math field is the wrong component — it grades a code rather than the choice,
 * accepts a coin-flip guess, and forces the reader to hold a legend in mind.
 * `multiplechoice` states the alternatives as the options they already are.
 *
 * Two code clauses are required, each mapping a SINGLE-DIGIT code to a WORD,
 * because one clause naming a number is a units convention rather than a
 * legend: "Give the percent as a number (e.g. enter 40 for 40%)" tells the
 * learner what to type, and the answer is still theirs to compute. Escaped
 * money is excluded outright — "\$525 for airfare, \$780 for food" is a word
 * problem's price list, not a pair of answer codes.
 */
const CODE_CLAUSE_RE = /(?<!\\\$)\$?(?<!\d)[0-4]\$?\s+(?:for|if)\s+(?!\d)[A-Za-z]/gi;
const codesACategoricalAnswer = (question) => (
  /\bquadrant number\b/i.test(question)
  || (question.match(CODE_CLAUSE_RE) || []).length >= 2
);

const NUMBER_TOKEN = String.raw`\d+(?:(?:,|\{,\})\d{3})*(?:\.\d+)?`;
const FRACTION_TOKEN = String.raw`\\[tdc]?frac\s*\{\s*[−-]?\s*${NUMBER_TOKEN}\s*\}\s*\{\s*[−-]?\s*${NUMBER_TOKEN}\s*\}`;
const VALUE_SPAN_RE = new RegExp(
  String.raw`^\s*[−-]?\s*(?:\\\$)?\s*[−-]?\s*(?:${NUMBER_TOKEN}(?:\s*${FRACTION_TOKEN})?|${FRACTION_TOKEN})\s*(?:\\%)?\s*$`,
);
// A prose number may end a sentence ("of 80.") but must not be the front of a
// longer decimal, the tail of one, or part of a word ("3-digit" still yields 3).
const PROSE_NUMBER_RE = new RegExp(String.raw`(?<![\w.,−-])[−-]?${NUMBER_TOKEN}(?!\.?\d|\w)`, 'g');

/**
 * Standalone values printed in a fillin question, for the trivial-answer
 * check. Grading is value-based, so a prompt whose target value appears in
 * the question is trivially satisfiable: typing 86 passes "Find the prime
 * factorization of $86$", and retyping the printed fraction passes "Simplify
 * $-\tfrac{40}{88}$". A candidate is a whole $…$ span that is one (possibly
 * signed) number, fraction, mixed number, money amount, or percentage — plus
 * every bare number in the prose ("Find the prime factorization of 80").
 * Compound expressions are deliberately not candidates: "Add: $3+5$" is
 * value-equal to its own answer in every CAS-graded arithmetic prompt, which
 * no prompt rewrite can avoid, so flagging it would only bury the fixable
 * cases.
 */
function printedQuestionValues(question) {
  const values = [];
  let prose = question;
  for (const span of mathSpans(question, { allowNewlines: true })) {
    if (VALUE_SPAN_RE.test(span.tex)) values.push(span.tex.replace(/\\\$/g, '').trim());
    // Blank the span in place so the prose scan below cannot read a digit out
    // of math it has already accounted for, and so offsets stay comparable.
    prose = prose.slice(0, span.index) + ' '.repeat(span.length) + prose.slice(span.index + span.length);
  }
  for (const m of prose.matchAll(PROSE_NUMBER_RE)) values.push(m[0]);
  return values;
}

/**
 * The algebraic subjects a question prints — every whole $…$ span that is a
 * bare expression in at least one variable.
 *
 * Kept separate from printedQuestionValues() and reached only through
 * FACTORING_PROMPT_RE. Widening the shared numeric candidate list instead would
 * put every "Simplify: $…$" prompt in scope in the same commit; those need
 * their own form tokens and their own retrofit (playbook §6), and a rule that
 * fires on a thousand sound-but-untagged exercises cannot land at all.
 *
 * Backslash macros are stripped before the letter test so `\tfrac`, `\cdot` and
 * `\left` do not read as variables. A span carrying a relation, a list comma or
 * `\text` is a statement or an enumeration, not a subject to re-express.
 */
// Does a LaTeX span contain a variable once backslash macros (`\tfrac`,
// `\cdot`, `\left`) are stripped, so command letters do not read as one?
const spanHasVariable = (value) => /[A-Za-z]/.test(value.replace(/\\[a-zA-Z]+/g, ' '));

/**
 * Do two LaTeX strings parse to the SAME expression tree? Structural, not
 * value: the engine's canonical form regroups and reorders, but it does not
 * expand, factor, or otherwise change shape — so redundant grouping parens
 * compare equal while `2(3x+5)^2+1` and `18x^2+60x+51` do not. Anything that
 * fails to parse compares unequal, which leaves the caller's rule firing
 * rather than silently suppressed.
 */
function isSameExpression(a, b) {
  if (!a || !b) return false;
  try {
    const left = ce.parse(preprocess(a));
    const right = ce.parse(preprocess(b));
    return left.isValid && right.isValid && left.isSame(right);
  } catch {
    return false;
  }
}

/**
 * A printed span that STATES something (a relation) or ENUMERATES (a comma) is
 * not a subject to re-express, so every span extractor below skips one.
 *
 * The `\b` is load-bearing, and was missing until August 15, 2026: without it
 * the `le` alternative matches the opening of `\left`, so every
 * `\left(…\right)`-fenced span — the fencing MathLive emits and the corpus
 * writes by default — read as a relation and was silently exempt from every
 * extractor here. `\leq`/`\geq` are listed beside `\le`/`\ge` because the
 * boundary that fixes that would otherwise drop the longer spellings.
 */
const RELATION_MACROS = String.raw`\\(?:lt|gt|le|leq|ge|geq|ne|neq|text|begin|dots|ldots)\b`;
const STATES_OR_ENUMERATES_RE = new RegExp(String.raw`[=<>,]|${RELATION_MACROS}`);
const ENUMERATES_OR_COMPARES_RE = new RegExp(String.raw`[<>,]|${RELATION_MACROS}`);
const NOT_BARE_ARITHMETIC_RE = new RegExp(String.raw`[=<>,]|\\(?:sqrt|pi)\b|${RELATION_MACROS}`);

function printedPolynomialSubjects(question) {
  const subjects = [];
  for (const span of mathSpans(question, { allowNewlines: true })) {
    const inner = span.tex.trim();
    // A sigma's bounds are structure, not a statement: the `=` and any comma
    // inside `\sum_{i=1}^{40}` must not read as a relation or an enumeration,
    // so the header is blanked for the tests below while the whole span stays
    // the subject — "Find the sum: $\sum_{i=1}^{40}(5i-21)$" prints a span
    // worth exactly its own value.
    const scan = inner.replace(/\\sum\s*(?:_\{[^{}]*\})?\s*(?:\^(?:\{[^{}]*\}|\S))?/g, ' ');
    if (STATES_OR_ENUMERATES_RE.test(scan)) continue;
    // A numeral radical is an algebraic subject too: "Simplify:
    // $(4-3\sqrt{3})(5+2\sqrt{3})$" has no variable, but its printed span is
    // worth exactly its own answer the same way a polynomial product is.
    if (!spanHasVariable(scan) && !/\\sqrt/.test(scan)) continue;
    subjects.push(inner);
  }
  return subjects;
}

/**
 * The equations a question prints — every whole $…$ span with exactly one
 * `=`, for a rewrite-this-equation prompt (standard form, exponential form).
 * The mirror of printedPolynomialSubjects(), which deliberately EXCLUDES
 * relation spans; this one exists so the standard-form and conversion verbs
 * can see them, and like every extractor it is reached only through its own
 * prompt gates. No variable requirement: the logarithmic conversion's printed
 * equation ($3=\log_7 343$) has none once macros are stripped.
 *
 * A definition span (`y=RHS`, `f(x)=RHS`) also contributes its bare
 * right-hand side: the learner answers those prompts without the label, and
 * the labelled span itself does not grade as an f(x) equation.
 */
function printedEquationSubjects(question) {
  const subjects = [];
  for (const span of mathSpans(question, { allowNewlines: true })) {
    const inner = span.tex.trim();
    if (ENUMERATES_OR_COMPARES_RE.test(inner)) continue;
    const sides = inner.split('=');
    if (sides.length !== 2) continue;
    subjects.push(inner);
    if (/^\s*[a-zA-Z]\s*(?:\(\s*[a-zA-Z]\s*\))?\s*$/.test(sides[0]) && spanHasVariable(sides[1])) {
      subjects.push(sides[1].trim());
    }
  }
  return subjects;
}

/**
 * The arithmetic a question prints — every whole $…$ span with no variable in
 * it, for an evaluate-this prompt. The mirror of printedPolynomialSubjects()
 * and, like it, gated on its own verb rather than folded into the shared
 * numeric candidate list.
 *
 * Radicals stay out of this numeric path — a printed `\sqrt` is an algebraic
 * subject, and `simplified-radical` answers it through the simplify path below.
 */
function printedArithmeticSubjects(question) {
  const subjects = [];
  for (const span of mathSpans(question, { allowNewlines: true })) {
    const inner = span.tex.trim();
    // `{,}` is digit grouping, not a list separator: `\tfrac{91{,}881}{9}` is
    // one quotient, and reading its comma as an enumeration would silently
    // exempt every grouped number in the corpus from this rule.
    const separators = inner.replace(/\{\s*,\s*\}/g, '');
    if (NOT_BARE_ARITHMETIC_RE.test(separators)) continue;
    if (spanHasVariable(inner)) continue;
    subjects.push(inner);
  }
  return subjects;
}

/** Every spelling of an unevaluated trigonometric application. */
const TRIG_APPLICATION_RE = /\\(?:arc)?(?:sin|cos|tan|csc|sec|cot)\b/;

/**
 * The unevaluated trigonometry a question prints — every whole $…$ span
 * holding a trigonometric application over a constant argument, for an
 * exact-value prompt.
 *
 * printedArithmeticSubjects() cannot serve this class: it skips any span
 * carrying `\pi`, because a printed $\pi$ is not the bare arithmetic that
 * extractor is about. But $\cos\left(\tfrac{\pi}{4}\right)$ is exactly the
 * hazard — the engine evaluates it to $\tfrac{\sqrt2}{2}$, so the printed
 * subject of "find the exact value" IS its own answer and retyping the prompt
 * grades correct.
 *
 * Constant arguments only. A span in a variable ($y=\sin(2x)$, $\sin^2
 * x+\cos^2 x$) can never grade equal to a numeric key, so including it would
 * only spend engine time; and the asks that print one — amplitude, period,
 * verify-this-identity — are sound content this rule must stay off.
 */
function printedTrigSubjects(question) {
  const subjects = [];
  for (const span of mathSpans(question, { allowNewlines: true })) {
    const inner = span.tex.trim();
    if (!TRIG_APPLICATION_RE.test(inner)) continue;
    if (STATES_OR_ENUMERATES_RE.test(inner)) continue;
    if (spanHasVariable(inner)) continue;
    subjects.push(inner);
  }
  return subjects;
}

/**
 * The angle measures a question prints, for a degree/radian conversion ask.
 *
 * `^\circ` is an exact operator to the Compute Engine, not decoration: it
 * grades $225^\circ$ and $\tfrac{5\pi}{4}$ as the same value in both
 * directions. So "Convert $\tfrac{5\pi}{4}$ radians to degrees" is passable
 * by retyping the prompt, and so is its mirror — and neither span reaches
 * printedQuestionValues(), which admits only bare numerals and fractions.
 *
 * An angle is written one of two ways, and both are collected: a numeral
 * wearing the degree symbol, or a constant multiple of $\pi$.
 */
function printedAngleSubjects(question) {
  const subjects = [];
  for (const span of mathSpans(question, { allowNewlines: true })) {
    const inner = span.tex.trim();
    if (STATES_OR_ENUMERATES_RE.test(inner)) continue;
    if (spanHasVariable(inner)) continue;
    if (!/\\circ\b/.test(inner) && !/\\pi\b/.test(inner)) continue;
    subjects.push(inner);
  }
  return subjects;
}

/**
 * Composed subjects: the restatement a prompt invites when the hazard is not
 * any single printed span but a COMBINATION of two of them.
 *
 * Every extractor above answers "is some span printed here also the answer?".
 * That question misses a whole family: "For $f(x)=2x^2-4x+1$ and
 * $g(x)=5x^2+8x+3$, find $(f+g)(x)$" prints neither $7x^2+4x+4$ nor anything
 * value-equal to it, yet `(2x^2-4x+1)+(5x^2+8x+3)` — the prompt restated with
 * the operation written but not performed — grades `correct`. The learner
 * types what the question already told them and never combines a like term.
 *
 * So these build the candidate instead of finding it. Each is gated on its own
 * phrasing for the same reason the span extractors are (playbook §6: widening
 * a shared extractor puts a thousand sound-but-untagged exercises in scope at
 * once), and each returns at most one candidate — the single restatement the
 * wording actually invites, not every rearrangement of the printed parts.
 *
 * All three require exactly the operands the phrasing names. A prompt that
 * prints a third polynomial is some other exercise, and guessing at it would
 * be the kind of over-reach that makes a rule fire on sound content.
 */
// Wrap an operand only when it needs it. A subject printed as `(9x^2+2)` is
// already parenthesized, and `((9x^2+2))` in a diagnostic is noise the author
// has to read past to see what the rule actually caught.
const asOperand = (tex) => {
  const t = tex.trim();
  if (!/[+\-]/.test(t.replace(/^[+-]/, ''))) return t;
  if (/^\((?:[^()]|\([^()]*\))*\)$/.test(t)) return t;
  return `(${t})`;
};

// Any single-letter function name and variable, exactly as
// tools/verify-answers.mjs's DEFINITION_RE reads printed definitions — the
// sections name pairs $p$/$q$ and variables $t$ as readily as $f$/$g$ of $x$,
// and a hardcoded pair would silently drop those exercises from the rule.
// Every ask is gated on a printed definition existing for each captured name,
// so the wider classes cannot conscript prose coincidences.
const FUNCTION_DEF_RE = /^\s*([a-zA-Z])\s*\(\s*([a-zA-Z])\s*\)\s*=\s*([\s\S]+?)\s*$/;
// The operator may be absent: `(fg)(x)` is the product ask written by
// juxtaposition, exactly as the precalculus sections print it.
const FUNCTION_SUM_ASK_RE = /\(\s*([a-zA-Z])\s*(\+|-|\\cdot|·)?\s*([a-zA-Z])\s*\)\s*\(\s*[a-zA-Z]\s*\)/;
const FUNCTION_QUOTIENT_ASK_RE = /\\[tdc]?frac\s*\{\s*([a-zA-Z])\s*\}\s*\{\s*([a-zA-Z])\s*\}\s*\)?\s*\(\s*[a-zA-Z]\s*\)/;
const FUNCTION_COMPOSE_ASK_RE = /\(\s*([a-zA-Z])\s*\\circ\s*([a-zA-Z])\s*\)\s*\(\s*[a-zA-Z]\s*\)/;
// The same composition written as a nested application — `f(g(x))`, which is
// how the precalculus sections phrase it at least as often as `(f\circ g)(x)`.
// The inner argument must be a variable: `f(g(5))` answers with a number that
// no restatement of the definitions equals, so it is not a hazard.
const FUNCTION_NESTED_ASK_RE = /([a-zA-Z])\s*\(\s*([a-zA-Z])\s*\(\s*[a-zA-Z]\s*\)\s*\)/;

/**
 * "For $f(x)=A$ and $g(x)=B$, find $(f\pm g)(x)$" → `(A)+(B)` / `(A)-(B)`,
 * and likewise for the product, quotient, and composition asks. Composition
 * substitutes the written inner definition for every standalone `x` in the
 * outer one — `(f\circ g)(x)` with $f(x)=6x+1$, $g(x)=8x-3$ builds
 * `6(8x-3)+1`, the composition written but not carried out.
 *
 * Only an ask evaluated at `(x)` yields a candidate. `(f+g)(2)` answers with a
 * number that no restatement of the two definitions equals, so it is not a
 * hazard and must not be treated as one.
 *
 * `fallbackDefs` carries definitions printed on the page BEFORE the exercise
 * ("For the next three questions, use $f(x)=6x+1$ and $g(x)=8x-3$" — prose
 * the question extractor cannot see). In-question definitions override. A
 * stale fallback pairing is safe by construction: a candidate built from the
 * wrong definitions does not grade equal to the answer, and the rule only
 * fires on a candidate that grades `correct`.
 */
function printedFunctionCombinations(question, fallbackDefs = new Map()) {
  const defs = new Map(fallbackDefs);
  let ask = null;
  for (const span of mathSpans(question, { allowNewlines: true })) {
    const inner = span.tex.trim();
    const def = inner.match(FUNCTION_DEF_RE);
    if (def) { defs.set(def[1], { variable: def[2], rhs: def[3] }); continue; }
    const flat = inner.replace(/\\left|\\right/g, '');
    const quotient = flat.match(FUNCTION_QUOTIENT_ASK_RE);
    if (quotient) { ask = { op: '/', names: [quotient[1], quotient[2]] }; continue; }
    const compose = flat.match(FUNCTION_COMPOSE_ASK_RE) ?? flat.match(FUNCTION_NESTED_ASK_RE);
    if (compose) { ask = { op: 'circ', names: [compose[1], compose[2]] }; continue; }
    const sum = flat.match(FUNCTION_SUM_ASK_RE);
    if (sum) ask = { op: (sum[2] === '+' || sum[2] === '-') ? sum[2] : '*', names: [sum[1], sum[3]] };
  }
  if (!ask || !ask.names.every((name) => defs.has(name))) return [];
  const [first, second] = ask.names.map((name) => defs.get(name));
  if (ask.op === 'circ') {
    // Substitute the written inner definition for every standalone instance
    // of the OUTER definition's own variable.
    const variable = new RegExp(String.raw`(?<![a-zA-Z\\])${first.variable}(?![a-zA-Z])`, 'g');
    return [first.rhs.replace(variable, `(${second.rhs})`)];
  }
  if (ask.op === '+') return [`${asOperand(first.rhs)}+${asOperand(second.rhs)}`];
  if (ask.op === '-') return [`${asOperand(first.rhs)}-${asOperand(second.rhs)}`];
  if (ask.op === '*') return [`${asOperand(first.rhs)}${asOperand(second.rhs)}`];
  return [`\\frac{${first.rhs}}{${second.rhs}}`];
}

/**
 * "Subtract $X$ from $Y$" → `(Y)-(X)`.
 *
 * The order is the whole point: the exercise's one conceptual step is knowing
 * that "subtract X from Y" means Y-X, and its arithmetic step is combining the
 * result. Writing the difference without combining passes on value alone.
 */
function printedSubtractFromSubjects(question) {
  if (!/\bsubtract\b[\s\S]*\bfrom\b/i.test(question)) return [];
  const subjects = printedPolynomialSubjects(question);
  if (subjects.length !== 2) return [];
  return [`${asOperand(subjects[1])}-${asOperand(subjects[0])}`];
}

/**
 * "…find the quotient when $A$ is divided by $B$" → `\frac{A}{B}`.
 *
 * Requires the word "quotient": "find the REMAINDER when $A$ is divided by
 * $B$" answers with a number, which no quotient restatement equals, so it is
 * sound content this must not touch. A division that leaves a nonzero
 * remainder is likewise safe on its own — the fraction is not equal to the
 * quotient — but it costs nothing to offer the candidate and let the grader
 * decide, which is what keeps the rule honest about the exact-division case.
 */
function printedDivisionQuotients(question) {
  if (!/\bquotient\b/i.test(question)) return [];
  if (!/\bdivided by\b/i.test(question)) return [];
  const subjects = printedPolynomialSubjects(question);
  if (subjects.length !== 2) return [];
  return [`\\frac{${subjects[0]}}{${subjects[1]}}`];
}

const groupDigits = (n) => n.replace(/\B(?=(\d{3})+$)/g, '{,}');

/**
 * Blank fenced/inline code and HTML comments — documentation, not authored
 * page content — without changing string offsets, so a diagnostic still points
 * at the right source line.
 *
 * These three (`groupDigits`, `maskDocumentation`, `ungroupedDigitRuns`) were
 * exported for a digit-grouping fixer that was never written, and nothing
 * outside this file has ever imported them. An export is a promise about an
 * API; keeping one for a hypothetical caller means every future change here
 * has to think about a caller that does not exist. If the fixer is ever built,
 * export them again then — that is one line, and it will be a real decision.
 */
function maskDocumentation(src) {
  const blank = (s) => s.replace(/[^\n]/g, ' ');
  return maskMarkdownCodeBlocks(src.replace(/<!--[\s\S]*?-->/g, blank), blank)
    .replace(/(`+)([\s\S]*?)\1/g, blank)
    .replace(/<!--[\s\S]*?-->/g, blank);
}

/**
 * Every four-or-more-digit run inside a math span that the corpus would write
 * grouped, with its offset in `source`. The masking is subtle — a near-miss
 * would report text no reader sees — which is why it is one function rather
 * than rules re-derived at the call site.
 */
function ungroupedDigitRuns(source, blank) {
  const runs = [];
  const spans = mathSpans(source)
    .map(({ tex, display, index }) => [index + (display ? 2 : 1), tex]);
  for (const [offset, span] of spans) {
    // \text{…} is prose, and an already-grouped number is correct as written.
    // \phantom{…} is invisible spacing, not a number: long-division layouts
    // align columns with runs like \phantom{0000}, and grouping those digits
    // would both misreport a number the reader never sees and shift the
    // alignment they exist to produce. Its group nests (\phantom{22\,\overline
    // {\smash{)}\,}}), so it needs brace matching rather than [^{}]*.
    const scan = blankBalancedMacro(span, /\\[hv]?phantom\s*\{/g, blank)
      .replace(/\\text(?:it|bf)?\{[^{}]*\}/g, blank)
      .replace(/\d[\d{,}]*\{,\}[\d{,}]*\d/g, blank);
    for (const m of scan.matchAll(/(?<![\d.])\d{4,}(?![\d.])/g)) {
      const value = m[0];
      if (value.length === 4 && +value >= 1000 && +value <= 2099) continue;
      runs.push({ index: offset + m.index, value, grouped: groupDigits(value) });
    }
  }
  return runs.sort((a, b) => a.index - b.index);
}

function isEscaped(src, index) {
  let slashes = 0;
  while (index - slashes - 1 >= 0 && src[index - slashes - 1] === '\\') slashes += 1;
  return slashes % 2 === 1;
}

function closingBracket(src, start) {
  let depth = 1;
  for (let i = start; i < src.length; i += 1) {
    if (isEscaped(src, i)) continue;
    if (src[i] === '[') depth += 1;
    if (src[i] === ']' && --depth === 0) return i;
  }
  return -1;
}

const normalizeReferenceLabel = (label) => label
  .replace(/\\([!"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~-])/g, '$1')
  .trim()
  .replace(/\s+/g, ' ')
  .toLowerCase();

/** Mask fenced (including unclosed) and, optionally, indented CommonMark code blocks. */
function maskMarkdownCodeBlocks(src, blank, maskIndented = true) {
  let fence = null;
  let listIndent = null;
  return (src.match(/[^\n]*(?:\n|$)/g) || [])
    .filter((line) => line.length)
    .map((line) => {
      const body = line.endsWith('\n') ? line.slice(0, -1) : line;
      if (fence) {
        const closes = new RegExp(`^ {0,3}${fence.char}{${fence.length},}[ \\t]*$`).test(body);
        if (closes) fence = null;
        return blank(line);
      }
      const opening = body.match(/^ {0,3}(`{3,}|~{3,})/);
      if (opening) {
        fence = { char: opening[1][0], length: opening[1].length };
        return blank(line);
      }
      if (!maskIndented) return line;
      if (!body.trim()) return line;

      const indentation = body.match(/^[ \t]*/)[0]
        .replace(/\t/g, '    ')
        .length;
      const listItem = body.match(/^([ \t]*)([-+*]|\d{1,9}[.)])([ \t]+)/);
      if (listItem) {
        const prefix = listItem[1].replace(/\t/g, '    ').length;
        const spacing = listItem[3].replace(/\t/g, '    ').length;
        if (prefix <= 3 || (listIndent !== null && prefix >= listIndent)) {
          listIndent = prefix + listItem[2].length + spacing;
          return line;
        }
      }
      if (listIndent !== null && indentation >= listIndent) {
        return indentation >= listIndent + 4 ? blank(line) : line;
      }
      if (listIndent !== null && indentation < listIndent) listIndent = null;
      return indentation >= 4 ? blank(line) : line;
    })
    .join('');
}

function elementSuppliesName(block, id) {
  for (const match of block.matchAll(/<([A-Za-z][\w:.-]*)\b[^>]*>/g)) {
    if (htmlAttribute(match[0], 'id') !== id) continue;
    if (htmlAttribute(match[0], 'aria-label').trim()) return true;
    if (/\/\s*>$/.test(match[0])) return false;
    const end = block.indexOf(`</${match[1]}>`, match.index + match[0].length);
    if (end === -1) return false;
    const inner = block.slice(match.index + match[0].length, end);
    return Boolean(inner.replace(/<[^>]*>/g, '').trim());
  }
  return false;
}

export function lintHugo(src, filename = '') {
  const errors = [];
  const err = (i, msg) => errors.push(`L${lineOf(src, i)}: ${msg}`);
  // Hugo expands shortcode syntax even when Markdown presents it as code.
  // Documentation must use Hugo's comment-escaped form (`{{</* name */>}}`)
  // or the example can execute and fail the build.
  for (const code of src.matchAll(/(`+|~{3,})[\s\S]*?\1/g)) {
    const active = /\{\{[<%]\s*(?!\/\*)/.exec(code[0]);
    if (active) {
      err(code.index + active.index, 'active Hugo shortcode syntax inside a code example — use the comment-escaped `{{</* name */>}}` form');
    }
  }
  // Media examples in fenced/inline code and HTML comments are documentation,
  // not authored page content. Mask them without changing string offsets so
  // diagnostics still report the correct source line.
  const blank = (s) => s.replace(/[^\n]/g, ' ');
  const uncommented = src.replace(/<!--[\s\S]*?-->/g, blank);
  const mediaSrc = maskDocumentation(src);
  // Raw HTML remains active inside <pre>/<code>. Mask Markdown fences and
  // spans, but retain indented tags for the HTML-specific checks below.
  const htmlMediaSrc = maskMarkdownCodeBlocks(uncommented, blank, false)
    .replace(/(`+)([\s\S]*?)\1/g, blank);
  const isKnowledgeCheck = /knowledge-check-\d+-\d+\.md$/.test(filename);
  const isRegularSection = /[/\\]content[/\\]math[/\\][^/\\]+[/\\]\d{2}-[^/\\]+[/\\]\d{2}-[^/\\]+\.md$/i
    .test(filename.replace(/^\.?[/\\]?/, '/'));

  // ---- section objectives --------------------------------------------------
  // The opening callout states the section's objectives as a Markdown list,
  // one item per objective. That list is the anchor for the `## Practice`
  // block below: every objective gets its own `### ` group. Prose objectives
  // cannot be split reliably (an objective may contain a comma), so the list
  // form is required rather than parsed for.
  // `validate-content` is what requires every section to carry the list — it
  // sees whole files, where this lint also runs over authoring fragments.
  const objectives = parseObjectivesCallout(mediaSrc) ?? [];

  // ---- Math / array rules --------------------------------------------------

  // \dfrac forces displaystyle sizing and crowds adjacent rows.
  for (const m of mediaSrc.matchAll(/\\dfrac/g)) {
    err(m.index, '\\dfrac is banned — use \\tfrac (or \\cfrac for nested display fractions)');
  }
  // plain \frac inside a $$ array renders full-height too.
  for (const m of src.matchAll(/\\begin\{array\}[\s\S]*?\\end\{array\}/g)) {
    const inner = m[0].match(/(?<![tcd])\\frac/);
    if (inner) err(m.index + inner.index, '\\frac inside \\begin{array} — use \\tfrac so rows stay compact');
  }
  // KaTeX rejects the array-package @{…} column separator.
  for (const m of src.matchAll(/\\begin\{array\}\{[^}]*@[^}]*\}/g)) {
    err(m.index, 'array column spec uses @{…} — KaTeX does not support it; use a plain spec like {rl} or {rrl}');
  }
  // {lrcl} step arrays need \\[4pt]+ between steps.
  for (const m of src.matchAll(/\\begin\{array\}\{lrcl\}([\s\S]*?)\\end\{array\}/g)) {
    for (const s of m[1].matchAll(/\\\\(\[([\d.]+)pt\])?/g)) {
      if (!m[1].slice(s.index + s[0].length).trim()) continue; // trailing \\
      if (!s[1] || +s[2] < 4) {
        err(m.index + s.index, `{lrcl} step array row separator ${JSON.stringify(s[0])} — use \\\\[4pt] (or more)`);
      }
    }
  }
  // An array row may not carry more cells than its spec declares columns.
  //
  // Hugo renders math with KaTeX in strict mode, where this is a hard build
  // failure ("Too few columns specified in the {array} column argument"). The
  // section verifier renders with `strict: 'ignore'`, which lets it through —
  // so eight of these shipped through a green `npm test` on August 15, 2026
  // and only surfaced at `npm run build`. Every one was a step array that had
  // grown a column the spec never gained: three parallel `\text{or}` solution
  // chains under `{lrcl}`, a chained `A &=& LW &=& L(80-2L)`, and an
  // explanation column written last instead of first.
  //
  // The check is structural rather than a stricter KaTeX pass, deliberately.
  // Raising the verifier to `strict: 'error'` fires on sound content: the math
  // extractor also yields a handful of prose gaps between adjacent `$…$` runs
  // ("— the product of any number and "), which Hugo never renders as math but
  // strict KaTeX rejects for their em-dash. Counting columns has no such
  // ambiguity — measured against this corpus it agrees with KaTeX exactly, on
  // all eight failures and all 58,633 other spans.
  for (const m of src.matchAll(/\\begin\{array\}\{([^}]*)\}([\s\S]*?)\\end\{array\}/g)) {
    const declared = (m[1].replace(/[|@]\{[^{}]*\}|[\s|]/g, '').match(/[lcr]/g) ?? []).length;
    if (!declared) continue;
    let widest = 0;
    for (const row of m[2].split(/\\\\(?:\[[^\]]*\])?/)) {
      let depth = 0;
      let cells = 1;
      for (let i = 0; i < row.length; i += 1) {
        const ch = row[i];
        if (ch === '\\') { i += 1; continue; } // a control sequence, never a cell break
        if (ch === '{') depth += 1;
        else if (ch === '}') depth -= 1;
        else if (ch === '&' && depth === 0) cells += 1;
      }
      widest = Math.max(widest, cells);
    }
    if (widest > declared) {
      err(m.index, `array row has ${widest} cells but the spec {${m[1]}} declares ${declared} column(s) — KaTeX fails the production build on this ("Too few columns"); widen the spec to match the widest row`);
    }
  }
  // Unicode superscript minus can't parse as an exponent.
  for (const m of src.matchAll(/⁻/g)) {
    err(m.index, 'unicode superscript minus — write a braced exponent like 10^{-3}');
  }
  // Digit grouping. The corpus groups every number of four or more digits as
  // `1{,}000`. Four-digit calendar years are the one exception and stay bare
  // (`$2012-2009$`) — the same reason figure axes take `xTickGrouping: false`.
  // Nothing in the source distinguishes a year from a quantity, so four-digit
  // values in the 1000–2099 band are skipped rather than risk flagging a year.
  for (const { index, value, grouped } of ungroupedDigitRuns(mediaSrc, blank)) {
    err(index, `ungrouped ${value.length}-digit number ${value} in math — write it as ${grouped} (four-digit years are the exception)`);
  }
  // TeX discards ordinary source whitespace in math mode. Catch the
  // high-confidence prose joins that caused visible "Ifn" / "squareof"
  // regressions, while leaving compact operator and unit notation to visual
  // review. An explicit `\ ` prevents each pattern from matching.
  for (const m of mediaSrc.matchAll(/\\(text|textit|textbf)\{([^{}\n]*[A-Za-z0-9])\}[ \t]*\\(text|textit|textbf)\{([A-Za-z0-9][^{}\n]*)\}/g)) {
    const styledInitial = m[1] === 'textbf' && /^[A-Za-z]$/.test(m[2]) && /^[a-z]/.test(m[4]);
    const hyphenJoin = /-$/.test(m[2]);
    if (!styledInitial && !hyphenJoin) {
      err(m.index, 'adjacent TeX prose commands have no rendered space — add `\\ ` or put the space inside \\text{…}');
    }
  }
  for (const m of mediaSrc.matchAll(/\\(?:text|textit|textbf)\{(?:if|then|since|for|of|with|where|when|and|or)\}[ \t]*[A-Za-z0-9]/gi)) {
    err(m.index, 'TeX prose touches the following math atom — ordinary source spaces do not render; add `\\ ` or a space inside \\text{…}');
  }
  // <br/>-joined math spans in a table cell wrap mid-equation.
  {
    let offset = 0;
    for (const line of src.split('\n')) {
      if (line.includes('|') && /<br\s*\/?>/.test(line) && /\$[^$]/.test(line)) {
        err(offset, 'table cell joins math spans with <br/> — use one $\\begin{aligned}…\\end{aligned}$ span');
      }
      offset += line.length + 1;
    }
  }
  // Goldmark splits a table row into cells on `|` before any inline math is
  // parsed, so a `|` written as an absolute-value bar ends the cell instead.
  // The row gains phantom columns and its math spans are cut in half; when the
  // header row is the one that splits, it no longer matches its delimiter row
  // and the whole table degrades to a paragraph of raw pipes. Detect the cut
  // directly: a cell holding a `$` that opens a span the cell never closes.
  // A lone `$` used as a currency sign (`Value ($)`) opens nothing and stays
  // silent. `\lvert`/`\rvert` and `\left\lvert`/`\right\rvert` render
  // identically in KaTeX without the pipe.
  {
    // An opening `$` is followed by its content; a currency `$` is followed by
    // a space or by closing punctuation. End of cell counts as opening, since
    // that is exactly the content a cell boundary cut away.
    const opensMath = (line, index) => {
      const next = line[index + 1];
      return next === undefined || !/[)\]},.;:!?\s]/.test(next);
    };
    let offset = 0;
    for (const line of maskMarkdownCodeBlocks(uncommented, blank).split('\n')) {
      if (line.trimStart().startsWith('|')) {
        // Walk the row once, tracking cell boundaries and `$` pairing together.
        let open = -1;
        for (let i = 0; i <= line.length; i += 1) {
          const ch = line[i];
          if (ch === '\\') { i += 1; continue; }
          if (ch === '$') open = open >= 0 ? -1 : i;
          else if (ch === '|' || i === line.length) {
            if (open >= 0 && opensMath(line, open)) {
              err(offset + open, 'math span cut by a table cell boundary — a literal `|` inside `$…$` is a cell separator to Goldmark; use \\lvert/\\rvert (or \\left\\lvert/\\right\\rvert)');
              break;
            }
            open = -1;
          }
        }
      }
      offset += line.length + 1;
    }
  }
  // File-backed images are not an authoring format. Textbook equation
  // screenshots are illegible in dark mode, do not scale like KaTeX, and
  // duplicate content that should remain semantic. Ban every Markdown/HTML
  // embedding form—not just one extension—so renaming a raster or wrapping it
  // in <picture>, an SVG <image>, or a Hugo figure shortcode cannot bypass the
  // rule. Accessible SVG markup embedded directly in the page remains valid.
  const imageMessage = 'file-backed image — recreate it with KaTeX, a Markdown table, prose, or an accessible inline SVG';
  const referenceLabels = new Set();
  for (const m of mediaSrc.matchAll(/^[ \t]{0,3}\[([^\]\n]+)\]:[ \t]*\S+/gm)) {
    referenceLabels.add(normalizeReferenceLabel(m[1]));
  }

  // Parse the balanced alt-text brackets so nested CommonMark labels work.
  // An unresolved reference is text, not an embedded image, and an escaped
  // `\![…]` is a literal, so neither should be rejected.
  for (let index = mediaSrc.indexOf('!['); index !== -1; index = mediaSrc.indexOf('![', index + 2)) {
    if (isEscaped(mediaSrc, index)) continue;
    const altEnd = closingBracket(mediaSrc, index + 2);
    if (altEnd === -1) continue;
    const alt = mediaSrc.slice(index + 2, altEnd);
    const next = mediaSrc[altEnd + 1];
    if (next === '(') {
      err(index, imageMessage);
      continue;
    }
    if (next === '[') {
      const labelEnd = closingBracket(mediaSrc, altEnd + 2);
      if (labelEnd === -1) continue;
      const rawLabel = mediaSrc.slice(altEnd + 2, labelEnd) || alt;
      if (referenceLabels.has(normalizeReferenceLabel(rawLabel))) err(index, imageMessage);
      continue;
    }
    if (referenceLabels.has(normalizeReferenceLabel(alt))) err(index, imageMessage);
  }
  for (const m of htmlMediaSrc.matchAll(/<(?:img|picture|object|embed)\b[^>]*>|<source\b[^>]*\bsrcset\s*=[^>]*>|<image\b[^>]*>/gi)) {
    err(m.index, imageMessage);
  }
  for (const m of htmlMediaSrc.matchAll(/<(?:input|video)\b[^>]*>/gi)) {
    if (htmlAttribute(m[0], 'type').toLowerCase() === 'image' || htmlAttribute(m[0], 'poster')) {
      err(m.index, imageMessage);
    }
  }
  for (const m of htmlMediaSrc.matchAll(/<[^>]+>/g)) {
    if (hasFileBackedCssImage(htmlAttribute(m[0], 'style'))) err(m.index, imageMessage);
  }
  for (const m of htmlMediaSrc.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
    if (hasFileBackedCssImage(m[1])) err(m.index, imageMessage);
  }
  for (const m of mediaSrc.matchAll(/\{\{[<%]\s*figure\b[\s\S]*?[>%]\}\}/gi)) err(m.index, imageMessage);
  for (const m of mediaSrc.matchAll(/data:image\//gi)) err(m.index, imageMessage);
  if (hasFileBackedCssImage(mediaSrc)) {
    const match = /(?:-webkit-)?image-set\s*\(|url\(/i.exec(mediaSrc);
    err(match?.index ?? 0, imageMessage);
  }
  for (const m of htmlMediaSrc.matchAll(/<(?:use|feImage)\b[^>]*>/gi)) {
    const target = htmlAttribute(m[0], 'href') || htmlAttribute(m[0], 'xlink:href');
    if (target && !target.trim().startsWith('#')) err(m.index, imageMessage);
  }

  for (const m of htmlMediaSrc.matchAll(openTagRe('svg'))) {
    const role = htmlAttribute(m[0], 'role').trim().toLowerCase();
    const ariaLabel = htmlAttribute(m[0], 'aria-label').trim();
    const labelledBy = htmlAttribute(m[0], 'aria-labelledby').trim().split(/\s+/).filter(Boolean);
    const close = htmlMediaSrc.indexOf('</svg>', m.index + m[0].length);
    const block = close === -1 ? m[0] : htmlMediaSrc.slice(m.index, close + 6);
    const hasName = Boolean(ariaLabel)
      || (labelledBy.length > 0 && labelledBy.every((id) => elementSuppliesName(block, id)));
    if (role !== 'img' || !hasName) {
      err(m.index, 'inline SVG needs role="img" and a non-empty aria-label or aria-labelledby');
    }
  }
  for (const m of htmlMediaSrc.matchAll(/<svg\b[\s\S]*?<\/svg>/gi)) {
    const svg = m[0];
    if (/\bstyle\s*=\s*\{\{/i.test(svg)) {
      err(m.index, 'inline SVG contains React `style={{…}}` syntax — use ordinary SVG attributes');
    }
    if (/\{\s*[\w$.]+\s*\.map\s*\(|\{\s*[\s\S]*?=>[\s\S]*?\}/.test(svg)) {
      err(m.index, 'inline SVG contains an unevaluated JSX expression — render explicit SVG elements');
    }
    const jsxAttribute = /\b(?:strokeWidth|strokeDasharray|strokeLinecap|strokeLinejoin|fontSize|fontStyle|fontWeight|textAnchor|fillRule|clipRule)\s*=/i.exec(svg);
    if (jsxAttribute) {
      err(m.index + jsxAttribute.index, `inline SVG uses JSX attribute ${JSON.stringify(jsxAttribute[0].replace(/\s*=.*/, ''))} — use its kebab-case SVG spelling`);
    }
  }

  // ---- figure curve precision ----------------------------------------------
  // Figures rendered by tools/render-figure.mjs carry their generating JSON in
  // a data-spec attribute. When present it must parse, and any smoothCurves
  // use must carry the explicit freeform acknowledgment.
  const decodeEntities = (value) => value
    .replace(/&quot;/g, '"').replace(/&#0*39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  // Where an author HAS acknowledged source art with no formula, the spline it
  // produces is the correct output, so the bezier check below must not fire on
  // it. Anything else — a hand-pasted spline with no spec at all — still does.
  const acknowledgedFreeform = [];
  const isApFigure = (tag) => /\bclass\s*=\s*(?:"[^"]*\bap-figure\b[^"]*"|'[^']*\bap-figure\b[^']*')/i.test(tag);
  for (const m of htmlMediaSrc.matchAll(openTagRe('div'))) {
    if (!isApFigure(m[0])) continue;
    const raw = htmlAttribute(m[0], 'data-spec');
    if (!raw) continue;
    let spec;
    try {
      spec = JSON.parse(decodeEntities(raw));
    } catch {
      err(m.index, 'ap-figure data-spec is not valid JSON — regenerate the figure with tools/render-figure.mjs and paste its output verbatim');
      continue;
    }
    const curves = Array.isArray(spec.smoothCurves) ? spec.smoothCurves : [];
    for (const curve of curves) {
      if (curve && curve.freeform !== true) {
        err(m.index, 'ap-figure data-spec uses smoothCurves without freeform: true — model the curve with an analytic primitive (fit a polynomial or sinusoid through the labeled points) instead of spline interpolation');
      }
    }
    if (curves.length && curves.every((curve) => curve && curve.freeform === true)) {
      const close = htmlMediaSrc.indexOf('</div>', m.index);
      acknowledgedFreeform.push([m.index, close === -1 ? htmlMediaSrc.length : close]);
    }
  }
  // A cubic-bezier <path> inside a figure is the smoothCurves spline output:
  // C¹ knots and zero-slope extrema render visible flat plateaus — the
  // "hand-drawn" look. Only the spline interpolator emits C commands; every
  // analytic primitive emits polylines, lines, or ellipses.
  for (const m of htmlMediaSrc.matchAll(openTagRe('path'))) {
    if (!/(?:^|[\s\d.])C[\s\d.]/.test(htmlAttribute(m[0], 'd'))) continue;
    if (acknowledgedFreeform.some(([from, to]) => m.index > from && m.index < to)) continue;
    err(m.index, 'figure curve is spline-interpolated (smoothCurves output) — regenerate it from an analytic primitive (quadratics, cubics, circles, polylines, or curves kind sqrt/cbrt/reciprocal/reciprocal-squared/sine/exp/log); reserve smoothCurves (freeform: true) for source art with no formula, declared in a data-spec');
  }

  for (const m of mediaSrc.matchAll(/\*\*Solution\.\*\*[ \t]*(?:\r?\n[ \t]*)+(?=(?:\{\{<\s*(?:fillin|multiplechoice|graphplot)\b|#{1,6}\s|---[ \t]*$|(?![\s\S])))/gm)) {
    err(m.index, 'worked example appears to have an empty Solution block — confirm that no source solution was dropped');
  }
  // Read through the same shared iterator and the same masked source as every
  // other shortcode rule. Its own regex used `[^>]*` for the opening tag where
  // everything else uses `[\s\S]*?`, and it scanned the RAW source, so a
  // fenced callout example was documentation to every rule but this one.
  for (const { inner, index, closed } of shortcodes(mediaSrc, 'callout')) {
    if (!closed) continue; // reported by the unclosed-shortcode rule below
    const meaningful = inner.replace(/\*\*[^*]+[.:]?\*\*/g, '').trim();
    if (!meaningful) err(index, 'callout has a heading but no explanatory content');
  }

  // A chapter landing is a reader-facing map, not a copied print outline.
  // Keep every entry consistent: bold title, em dash, concise description.
  if (/[/\\]_index\.md$/.test(filename) && /^source_chapter:\s*\S/m.test(src)) {
    // A chapter whose pages are not written yet declares itself; its Sections
    // overview is legitimately empty until the first section page lands.
    const scaffolded = /^authoring_status:\s*["']?(?:scaffolded|in-progress)["']?[ \t]*$/m.test(src);
    const heading = /^## Sections[ \t]*$/m.exec(src);
    if (!heading) {
      err(0, 'chapter landing is missing a `## Sections` overview');
    } else {
      const blockStart = heading.index + heading[0].length;
      const tail = src.slice(blockStart);
      const blockEndMatch = /^(?:##\s|---[ \t]*$)/m.exec(tail);
      const block = tail.slice(0, blockEndMatch?.index ?? tail.length);
      const starts = [...block.matchAll(/^- /gm)].map((match) => match.index);
      if (!starts.length && !scaffolded) err(heading.index, 'chapter `## Sections` overview has no section bullets');
      for (let i = 0; i < starts.length; i += 1) {
        const item = block
          .slice(starts[i], starts[i + 1] ?? block.length)
          .replace(/\r?\n[ \t]+/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        const parts = /^- \*\*([^*]+)\*\*\s+—\s+(\S[\s\S]*)$/.exec(item);
        if (!parts) {
          err(blockStart + starts[i], 'chapter section bullet must be `- **Title** — concise description`');
        } else if (/^\d+(?:\.\d+)+\s/.test(parts[1])) {
          err(blockStart + starts[i], 'chapter section title includes a print section number — remove the visible numeric prefix');
        }
      }
    }
  }

  // Static answer reveals were an interim migration format. Authored practice
  // must use a real graded component so the learner can submit an answer.
  for (const m of mediaSrc.matchAll(/<details\b[^>]*>[\s\S]*?<summary\b[^>]*>\s*check answer\b[\s\S]*?<\/summary>/gi)) {
    err(m.index, 'legacy “Check answer” details block — use fillin, multiplechoice, or graphplot');
  }

  // ---- shortcode structure -------------------------------------------------
  // Two defects that used to be invisible or misattributed.
  //
  // An opening tag with no closing tag produced an empty body, so the body
  // rules diagnosed the body: an unclosed `{{< multiplechoice >}}` reported
  // "at least two non-empty options are required", which names the wrong
  // problem and sends the author to the wrong line. Report the real one, and
  // skip the body rules for that shortcode (below) so only one error lands.
  //
  // A param the canonical grammar cannot read is worse than wrong, because it
  // is silent: Hugo's own parser accepts `hint='…'`, so the template renders
  // the hint while this lint, the verifiers, and the answer cross-check all
  // see an exercise with no hint at all. Anything `shortcodeParams` drops is
  // an error here rather than a difference of opinion between tools.
  for (const name of Object.keys(PAIRED_SHORTCODES)) {
    for (const { index, closed, open } of shortcodes(mediaSrc, name)) {
      if (!closed) {
        err(index, `{{< ${name} … >}} is never closed — add a {{< /${name} >}} tag (an unclosed shortcode swallows the rest of the page)`);
      }
      for (const fragment of malformedShortcodeParams(open)) {
        err(index, `${name}: parameter ${JSON.stringify(fragment)} is not \`name="value"\` — Hugo reads it but every tool here drops it, so the value would be graded by nothing`);
      }
    }
  }

  // ---- interactive practice-set size rule ----------------------------------
  const fillins = [...shortcodes(mediaSrc, 'fillin')];
  const multiplechoices = [...shortcodes(mediaSrc, 'multiplechoice')];
  const graphplots = [...shortcodes(mediaSrc, 'graphplot')];
  const practiceQuestions = [...fillins, ...multiplechoices, ...graphplots]
    .sort((a, b) => a.index - b.index);

  // ---- section-final Practice block ----------------------------------------
  // Every numbered section closes with a `## Practice` heading — the last
  // heading before the attribution footer, after the end-matter headings
  // (`## Key equations`, `## Key concepts`, `## Key terms`, or any other
  // `## Key …` summary block), so a reader reviews the key terms and
  // concepts before attempting the practice. Inside it, one `### ` group per section
  // objective — matching the objectives callout in order — each holding at
  // least two sourced exercises, with at least five in the block overall.
  // Sizing scales with the section instead of a flat count, because a
  // six-objective section cannot cover its objectives in five questions and a
  // multipart source item expands into one exercise per part.
  // A missing block is an error, as is a present-but-malformed one. It warned
  // while the retrofit ran; the last of the 212 mapped sections landed on
  // August 9, 2026, so there is no longer a section the warning could name.
  // See docs/authoring-playbook.md, "The section-final Practice block".
  const MIN_PER_OBJECTIVE = 2;
  const MIN_PER_SECTION = 5;
  const headings = [...mediaSrc.matchAll(/^## +(.+?)[ \t]*$/gm)]
    .map((m) => ({ index: m.index, end: m.index + m[0].length, title: m[1].trim() }));
  // Case-insensitive: a title-case `## Key Concepts` must not slip out of
  // the ordering rule.
  const endMatterHeadings = headings.filter((h) => /^Key [a-z]/i.test(h.title));
  const lastEndMatter = endMatterHeadings.length
    ? endMatterHeadings[endMatterHeadings.length - 1]
    : undefined;
  // End matter must be a heading, never a bold prose paragraph — a
  // `**Key terms.** …` line hides the summary from the ordering rule and
  // from readers scanning the heading outline.
  for (const m of mediaSrc.matchAll(/^\*\*Key [a-z][a-z ]*[.:]?\*\*/gim)) {
    err(m.index, `${JSON.stringify(m[0])} is a bold prose paragraph — end matter must be a \`## Key …\` heading (drop the bold prefix, keep the content) placed before \`## Practice\``);
  }
  // Compare group titles to objectives loosely: the author copies the callout
  // item, so only case, spacing, and trailing punctuation should vary.
  const normalizeTitle = (t) => t.toLowerCase().replace(/\s+/g, ' ').replace(/[.:;,]+$/, '').trim();
  let practiceRange = null;
  if (isRegularSection) {
    const practiceHeadings = headings.filter((h) => h.title === 'Practice');
    const required = Math.max(MIN_PER_SECTION, MIN_PER_OBJECTIVE * objectives.length);
    // "This section has no Practice block" is a claim about a whole PAGE, so
    // it is only made about one. This lint also runs over authoring fragments
    // — a snippet under review, a test case for another rule — and a fragment
    // genuinely has no Practice block without that being a defect. Leading
    // frontmatter is what separates the two, and no real section can dodge the
    // rule by dropping it: `validate-content` errors on missing frontmatter
    // before this lint's opinion matters. Every other Practice rule below
    // needs a block to be present, so none of them need this guard.
    const isWholePage = /^---\r?\n/.test(src);
    if (!practiceHeadings.length) {
      if (isWholePage) {
        err(0, `section has no \`## Practice\` block — add a \`### \` group per objective with at least ${MIN_PER_OBJECTIVE} sourced, hinted exercises each (at least ${required} in total) after the end matter, last before the attribution footer`);
      }
    } else if (practiceHeadings.length > 1) {
      err(practiceHeadings[1].index, 'more than one `## Practice` heading — a section has exactly one Practice block');
    } else {
      const practice = practiceHeadings[0];
      const next = headings.find((h) => h.index > practice.index);
      practiceRange = [practice.end, next ? next.index : mediaSrc.length];
      if (lastEndMatter && practice.index < lastEndMatter.index) {
        err(practice.index, `\`## Practice\` appears before the end matter — place it after the last \`## Key …\` heading (\`## ${lastEndMatter.title}\`), last before the attribution footer`);
      } else if (next) {
        err(practice.index, '`## Practice` must be the last heading before the attribution footer — no heading may follow it');
      }

      const inRange = ({ index }) => index >= practiceRange[0] && index < practiceRange[1];
      const blockQuestions = practiceQuestions.filter(inRange);
      const groups = [...mediaSrc.matchAll(/^### +(.+?)[ \t]*$/gm)]
        .map((m) => ({ index: m.index, end: m.index + m[0].length, title: m[1].trim() }))
        .filter(inRange)
        .map((group, i, all) => ({
          ...group,
          limit: i + 1 < all.length ? all[i + 1].index : practiceRange[1],
        }));

      if (!groups.length) {
        err(practice.index, 'Practice block has no `### ` objective groups — give each section objective its own group');
      } else {
        const loose = blockQuestions.find(({ index }) => index < groups[0].index);
        if (loose) {
          err(loose.index, 'Practice exercise sits above the first `### ` group — every Practice exercise belongs to an objective group');
        }
        if (!objectives.length) {
          err(practice.index, 'Practice block cannot be checked against the section objectives — the objectives callout must list one objective per Markdown list item');
        } else {
          const wanted = objectives.map(normalizeTitle);
          const found = groups.map((g) => normalizeTitle(g.title));
          const at = wanted.findIndex((t, i) => t !== found[i]);
          if (at !== -1) {
            err(
              at < groups.length ? groups[at].index : practice.index,
              `Practice group ${at + 1} is \`### ${groups[at]?.title ?? '(missing)'}\` — it must be \`### ${objectives[at]}\`, matching the objectives callout in order`,
            );
          } else if (groups.length > wanted.length) {
            err(groups[wanted.length].index, `\`### ${groups[wanted.length].title}\` is not a section objective — the Practice block has one group per objective`);
          }
        }
        for (const group of groups) {
          const count = blockQuestions
            .filter(({ index }) => index >= group.end && index < group.limit)
            .length;
          if (count < MIN_PER_OBJECTIVE) {
            err(group.index, `Practice group \`### ${group.title}\` has ${count} interactive exercise(s) — at least ${MIN_PER_OBJECTIVE} are required`);
          }
        }
      }
      if (blockQuestions.length < required) {
        err(practice.index, `Practice block has ${blockQuestions.length} interactive exercise(s) — at least ${required} are required (${MIN_PER_OBJECTIVE} per objective, minimum ${MIN_PER_SECTION})`);
      }
    }
  }

  const inPracticeBlock = (index) => practiceRange !== null
    && index >= practiceRange[0] && index < practiceRange[1];
  let previousQuestionEnd = -1;
  let consecutiveQuestions = 0;
  for (const { index, end } of practiceQuestions) {
    consecutiveQuestions = previousQuestionEnd >= 0
      && src.slice(previousQuestionEnd, index).trim() === ''
      ? consecutiveQuestions + 1
      : 1;
    if (!isKnowledgeCheck && consecutiveQuestions === 4 && !inPracticeBlock(index)) {
      err(index, 'more than three consecutive interactive questions — keep each practice set to 2–3 questions');
    }
    previousQuestionEnd = end;
  }

  // ---- fillin shortcode rules ----------------------------------------------
  // Function definitions printed anywhere on the page, in order, so the
  // combination extractor can see "For the next three questions, use
  // $f(x)=6x+1$ and $g(x)=8x-3$" — prose outside any one question. For each
  // exercise the nearest PRECEDING definition of each name wins.
  const pageFunctionDefs = [];
  for (const span of mathSpans(mediaSrc, { allowNewlines: true })) {
    const def = span.tex.trim().match(FUNCTION_DEF_RE);
    if (def) pageFunctionDefs.push({ index: span.index, name: def[1], def: { variable: def[2], rhs: def[3] } });
  }
  for (const { params, index } of fillins) {
    const fallbackDefs = new Map();
    for (const def of pageFunctionDefs) {
      if (def.index < index) fallbackDefs.set(def.name, def.def);
    }
    const where = `fillin (${(params.question || '?').slice(0, 40)}…)`;
    const q = params.question || '';
    if (!q.trim()) err(index, 'fillin: missing non-empty question');
    if (!(params.answer || '').trim()) err(index, `${where}: missing non-empty answer`);
    if (params.answerMode && !['expression', 'unordered'].includes(params.answerMode)) {
      err(index, `${where}: answerMode must be "expression" or "unordered"`);
    }
    if (params.answerMode === 'unordered' && !(params.answer || '').includes(',')) {
      err(index, `${where}: unordered answer needs at least two comma-separated members`);
    }
    // ---- comma-list answers: the ordered/unordered choice must be deliberate.
    // The grader's default is positional, so a bare list is only fair when the
    // question prescribes the order; a solution set never has one.
    const answerParts = splitTopLevelCommas(params.answer || '');
    if (answerParts.length > 1 && params.answerMode !== 'unordered') {
      if (splitTopLevelCommas(stripGroupingCommas(params.answer)).length === 1) {
        err(index, `${where}: answer ${JSON.stringify(params.answer)} reads as ONE digit-grouped number, not a list — write the scalar without commas (answerDisplay can show the grouped form) or add answerMode="unordered" for a true list`);
      } else if (answerParts.every((part) => /^\s*[A-Za-z]\s*=/.test(part))) {
        err(index, `${where}: answer is a comma-separated list of variable equations — a solution set has no order, so add answerMode="unordered"`);
      } else if (!ORDER_CUE_RE.test(q)) {
        err(index, `${where}: multi-member answer is graded positionally, but the question never tells the learner the order — prescribe it ("least to greatest", "Enter the length and width…") or add answerMode="unordered"`);
      }
    }
    // ---- categorical answer encoded as a number — the wrong component.
    if (codesACategoricalAnswer(q)) {
      err(index, `${where}: the question encodes a categorical answer as a number ("answer 1 for yes") — use multiplechoice with the alternatives as its options, so the learner picks the choice instead of a code and cannot pass by guessing a digit`);
    }
    // ---- trivially satisfiable re-expression prompt.
    // A prompt that asks the learner to restate a printed value in another
    // form has an answer that is value-equal to that value by construction,
    // so value-based grading alone accepts the prompt retyped back. Grade
    // every standalone printed value exactly as a submission; if one is
    // accepted, `answerForm` is what makes the exercise gradeable. An error,
    // not a warning: the corpus carries none of these, so the next one is new
    // work rather than a backlog entry.
    if (params.answerForm !== undefined) {
      const { unknown } = parseAnswerForm(params.answerForm);
      if (unknown.length) {
        err(index, `${where}: answerForm token(s) ${unknown.map((t) => JSON.stringify(t)).join(', ')} name no form — use ${ANSWER_FORM_TOKENS.join(', ')}`);
      }
      // The grader returns from its list paths before the form is ever checked,
      // so a form declared beside a comma answer grades nothing at all. Silent
      // no-ops are worse than errors: the exercise looks guarded and is not.
      if (params.answerMode === 'unordered' || answerParts.length > 1) {
        err(index, `${where}: answerForm is not applied to a comma-separated answer — list grading returns before the form check, so the declared form ${JSON.stringify(params.answerForm)} silently grades nothing`);
      }
    }
    // ---- prompt asks for a NAMED form the value check cannot see.
    // Scoped to scalar answers: the form check never runs on list answers
    // (see the rule above), so a list ask cannot be conscripted into one.
    if (answerParts.length === 1 && params.answerMode !== 'unordered') {
      const declared = parseAnswerForm(params.answerForm ?? '').tokens;
      for (const { ask, name, tokens } of NAMED_FORM_ASKS) {
        if (ask.test(q) && !tokens.some((token) => declared.includes(token))) {
          err(index, `${where}: the question asks for ${name}, but value grading accepts a right value in any shape — add answerForm ${tokens.map((t) => JSON.stringify(t)).join(' or ')} so the wrong form reports 'form' instead of 'correct'`);
        }
      }
      // "…as a fraction in simplest form" on a numeral answer: value grading
      // accepts the unreduced $\frac{6}{8}$ the ask exists to rule out.
      if (/\bsimpl(?:est|ified) form\b|\bfully simplified\b/i.test(q) && NUMERAL_FRACTION_ANSWER_RE.test(params.answer || '')
        && !parseAnswerForm(params.answerForm ?? '').tokens.includes('lowest-terms')) {
        err(index, `${where}: the question asks for simplest form and the answer is a numeral fraction, but value grading accepts the unreduced equivalents — add "lowest-terms" to answerForm`);
      }
    }
    // ---- prompt asks for a percent and the KEY is %-shaped. Keyed on the
    // answer's own shape so number-only percent prompts ("enter 40 for
    // 40%", "without the percent sign") can never be conscripted: when the
    // authored key ends in \%, the value check reads 9.3% and 0.093 as
    // equal, so the sign IS the exercise.
    if (answerParts.length === 1 && params.answerMode !== 'unordered'
      && /\b(?:enter|write|give|express|convert)\b[^.?!]*\bpercent\b/i.test(q)
      && /\\%\s*$/.test((params.answer || '').trim())
      && !parseAnswerForm(params.answerForm ?? '').tokens.includes('percent')) {
      err(index, `${where}: the question asks for a percent and the answer is %-shaped, but value grading accepts the bare decimal — add "percent" to answerForm`);
    }
    // ---- prompt asks for interval notation: the authored answer must BE one.
    // The engine grades an inequality and an interval unequal in BOTH
    // directions, so "write the solution in interval notation" answered by
    // `u>10` marks the learner who does exactly what the prompt says and
    // types `(10,\infty)` incorrect. Self-grading cannot catch it: the
    // authored inequality is only ever compared against itself.
    if (/\binterval notation\b/i.test(q) && (params.answer || '').trim()) {
      // No filter(Boolean): an empty part IS the defect — a truncated union
      // (`(-\infty,3)\cup`) or a bare `\cup` splits into empty halves, and
      // dropping them would leave `.every()` to pass the surviving half.
      const intervalParts = splitTopLevelCommas(params.answer)
        .flatMap((part) => part.split(/\\cup/))
        .map((part) => part.trim());
      if (!intervalParts.every((part) => /^(?:\\left\s*)?[[(]/.test(part))) {
        err(index, `${where}: the question asks for interval notation, but the answer ${JSON.stringify(params.answer)} is not written as an interval — a learner who answers in interval notation as instructed is graded incorrect; author the answer as the interval`);
      }
    }
    if ((params.answer || '').trim() && q.trim()) {
      // Grade each printed subject under the exercise's own answerForm, exactly
      // as a submission would be. A missing form leaves the prompt passable by
      // retyping it — and so does a declared form too weak to rule the printed
      // value out ("fraction" on a simplification prompt), so the form is
      // exercised rather than trusted.
      //
      // Two candidate paths, each gated on the prompt that makes it a hazard:
      // printed numerals for a re-expression ask, printed polynomials for a
      // factoring ask. They stay separate so widening one cannot silently
      // enlarge the other.
      // Composed candidates: the hazard is the operation written but not
      // carried out, so these build the restatement rather than find it. Kept
      // in their own list because the diagnostic differs — telling an author
      // to go find `(2x^2-4x+1)+(5x^2+8x+3)` "printed in the question" sends
      // them looking for text that is not there.
      const composed = [
        ...printedFunctionCombinations(q, fallbackDefs),
        ...printedSubtractFromSubjects(q),
        ...printedDivisionQuotients(q),
      ];
      const candidates = [
        ...(REEXPRESSION_RE.test(q) ? printedQuestionValues(q) : []),
        ...(FACTORING_PROMPT_RE.test(q) ? printedPolynomialSubjects(q) : []),
        ...(ARITHMETIC_PROMPT_RE.test(q) ? printedArithmeticSubjects(q) : []),
        ...(TRIG_VALUE_PROMPT_RE.test(q) ? printedTrigSubjects(q) : []),
        ...(ANGLE_CONVERSION_PROMPT_RE.test(q) ? printedAngleSubjects(q) : []),
        ...(ALGEBRAIC_PRODUCT_PROMPT_RE.test(q) ? printedPolynomialSubjects(q) : []),
        ...(ALGEBRAIC_SIMPLIFY_PROMPT_RE.test(q) ? printedPolynomialSubjects(q) : []),
        ...(STANDARD_FORM_PROMPT_RE.test(q) || EXPONENTIAL_FORM_PROMPT_RE.test(q)
          ? printedEquationSubjects(q) : []),
        // An equation-shaped ANSWER states a condition, and equation
        // equivalence accepts every restatement whose moved-to-one-side form
        // is proportional — so with such an answer, every printed equation is
        // a retype hazard whatever the ask: "Solve $7x+y=11$ for $y$" prints
        // the very equation its key restates.
        ...((params.answer || '').includes('=') ? printedEquationSubjects(q) : []),
        ...(LOG_EXPANSION_PROMPT_RE.test(q) ? printedPolynomialSubjects(q) : []),
        ...composed,
      ]
        // "Add: $5a+7b$" answers with `5a+7b`: the exercise asks the learner to
        // recognize that the terms do NOT combine, so retyping the prompt is
        // the correct response and no form should reject it. Sound content, not
        // a defect — and a rule that fires on sound content is a bug in the
        // rule. Scoped to spans WITH a variable: only unlike algebraic terms
        // can legitimately refuse to combine, while a numeral prompt always
        // has a re-expression to perform, so a numeral answer identical to its
        // prompt ("Simplify: $\tfrac{40}{88}$" answered with itself) is the
        // exact author error this rule exists to catch.
        .filter((value) => !(spanHasVariable(value)
          && value.replace(/\s+/g, '') === (params.answer || '').replace(/\s+/g, '')))
        // The same "retyping IS the correct response" case, one step removed:
        // a BUILT candidate that is structurally the authored answer means the
        // ask left no operation to carry out. "For $f(x)=\sqrt{x}+2$ and
        // $g(x)=x^2+3$, find and simplify $f(g(x))$" answers
        // $\sqrt{x^2+3}+2$ — the substitution itself, with nothing to
        // simplify — and the built candidate differs from it only by the
        // grouping parentheses substitution introduces. Structural, never
        // value, equality: `2(3x+5)^2+1` and `18x^2+60x+51` are equal in value
        // and different in shape, which is exactly the hazard this rule fires
        // on, so a value comparison here would silence the whole class.
        .filter((value) => !(composed.includes(value) && isSameExpression(value, params.answer)));
      // The cheap shape check runs before the engine ever sees the span:
      // grading is value-then-form, so a span the declared form already rules
      // out can never grade 'correct', and skipping it changes nothing but
      // wall-clock. This matters, not merely helps — the equivalence ladder's
      // simplify() effectively never returns on a conjugate radical quotient
      // ("$\tfrac{\sqrt{5}}{\sqrt{x}+\sqrt{2}}$" against its rationalized
      // answer), and every such exercise declares the very form that rejects
      // its printed span without parsing at all. checkFormAsGraded, not
      // checkForm: the grader normalizes function notation before its own
      // form check, and a pre-filter reading the raw span would disagree
      // with it on every function-shaped candidate.
      const printed = candidates
        .find((value) => checkFormAsGraded(value, params.answerForm)
          && checkAnswer(value, params.answer, { mode: params.answerMode, form: params.answerForm }) === 'correct');
      if (printed !== undefined) {
        const remedy = parseAnswerForm(params.answerForm).valid
          ? `the declared answerForm ${JSON.stringify(params.answerForm)} does not rule that value out — tighten it`
          : 'add answerForm so the response is graded on its form (or use multiplechoice)';
        const source = composed.includes(printed)
          ? 'the question restated with the operation written but not carried out'
          : 'printed in the question';
        err(index, `${where}: answer grades equal to ${JSON.stringify(printed)}, ${source} — a learner passes by retyping the prompt; ${remedy}, since value-based grading alone cannot tell the two forms apart`);
      }
    }
    if (isRegularSection && !(params.hint || '').trim()) {
      err(index, `${where}: regular-section exercise is missing a hint`);
    }
    if (params.answer && /\^-/.test(params.answer)) {
      err(index, `${where}: answer has an unbraced negative exponent — write 10^{-3}, never 10^-3`);
    }
    // ---- slash quotient followed by juxtaposition: grades as a different value.
    // The engine reads `1/20(x-20)^2` as `1/(20(x-20)^2)` and `1/2x` as
    // `1/(2x)`, so the authored value is not the intended one — and a learner
    // who types the intended answer is marked wrong, because MathLive turns a
    // typed `/` into `\frac{1}{20}(x-20)^2`, which multiplies. Self-grading
    // cannot catch this: the answer is compared against itself, and both
    // sides mis-parse identically.
    if (params.answer && /\/\s*\d+\s*(?:[a-zA-Z(]|\\[a-zA-Z])/.test(params.answer)) {
      const shown = params.answer.match(/\S*\/\s*\d+\s*\S*/)[0];
      err(index, `${where}: answer ${JSON.stringify(shown)} has a slash quotient followed by a juxtaposed factor — the engine reads \`1/20(…)\` as \`1/(20(…))\`, so the intended answer grades incorrect; write the coefficient as an explicit \\frac{}{}`);
    }
    // ---- unbraced multi-digit exponent: silently grades as a different value.
    // `y^10` is `y^1` followed by a literal `0`, so the answer evaluates to
    // zero and the learner who types the correct `y^{10}` is marked wrong.
    // Self-grading cannot catch this — the answer is compared against itself,
    // and a correct `answerDisplay` hides it from visual review too.
    if (params.answer && /\^\d{2,}/.test(params.answer)) {
      const shown = params.answer.match(/\S*\^\d{2,}\S*/)[0];
      err(index, `${where}: answer ${JSON.stringify(shown)} has an unbraced multi-digit exponent — TeX reads \`^10\` as \`^1\` followed by \`0\`, so it grades as a different value; write y^{10}`);
    }
    if (/\\ne(?:q)?\b/.test(params.answer || '')) {
      err(index, `${where}: answer is a true/false statement (contains \\neq) — ungradeable; ask for a value or use multiplechoice`);
    }
    for (const name of ['question', 'answerDisplay', 'hint']) {
      if (/\bTry\s+It(?:s)?\s+\d+(?:\.\d+)+(?:\s*\([a-z]\))?[.:]?/i.test(params[name] || '')) {
        err(index, `${where}: ${name} contains a print-source “Try It” label — keep the source number in working notes, not the learner-facing component`);
      }
    }
    if (/\bsimplif(?:y|ied)(?:\s+if\s+possible)?\s*[:;,.-]?\s*(?:\([abc]\)|[abc]\)|[ⓐⓑⓒ])/iu.test(q)) {
      err(index, `${where}: standalone fill-in retains a print part label after “Simplify” — remove the label or split a true multipart exercise`);
    }
    if (/\(a\)/.test(q) && /\(b\)/.test(q)) err(index, `${where}: question looks multi-part ("(a)…(b)") — split into one exercise per part`);
  }

  // ---- multiplechoice shortcode rules --------------------------------------
  const graphAnswerIndexes = [];
  for (const { params, inner, index, closed } of multiplechoices) {
    if (!closed) continue; // the unclosed-shortcode rule above already named it
    const q = params.question || '';
    if (!q.trim()) err(index, 'multiplechoice: missing non-empty question');
    if (isRegularSection && !(params.hint || '').trim()) {
      err(index, `multiplechoice (${q.slice(0, 40)}…): regular-section exercise is missing a hint`);
    }
    // `answerDisplay` is not a multiplechoice parameter. The template never
    // rendered it and no page has ever used it, so an author who reached for
    // the fillin habit would have had it silently swallowed — and this loop
    // was the only thing in the repository that made it look supported.
    if (params.answerDisplay !== undefined) {
      err(index, 'multiplechoice: answerDisplay is not supported — the chosen option is already the answer on screen');
    }
    for (const name of ['question', 'hint']) {
      if (/\bTry\s+It(?:s)?\s+\d+(?:\.\d+)+(?:\s*\([a-z]\))?[.:]?/i.test(params[name] || '')) {
        err(index, `multiplechoice (${q.slice(0, 40)}…): ${name} contains a print-source “Try It” label — keep the source number in working notes`);
      }
    }
    if (params.mode === 'graph') {
      if (params.answerIndex == null || params.answerIndex === '') {
        err(index, 'multiplechoice(graph): missing answerIndex');
      } else if (!/^\d+$/.test(params.answerIndex)) {
        err(index, `multiplechoice(graph): answerIndex must be a nonnegative integer, got ${JSON.stringify(params.answerIndex)}`);
      } else {
        const opts = inner.split('===OPT===').filter((s) => s.trim());
        if (opts.length < 2) err(index, 'multiplechoice(graph): at least two options are required');
        if (Number(params.answerIndex) >= opts.length) err(index, `multiplechoice(graph): answerIndex ${params.answerIndex} but only ${opts.length} option(s)`);
        graphAnswerIndexes.push({ index, n: Number(params.answerIndex) });
        // A spec-JSON option (block starting with `{`) is validated exactly
        // like an apfigure body; its kind rides inside the JSON. Prerendered
        // <svg> options stay covered by the inline-SVG accessibility rule.
        opts.forEach((opt, optIndex) => {
          const block = opt.trim();
          if (!block.startsWith('{')) return;
          for (const problem of figureSpecErrors(block, undefined)) {
            err(index, `multiplechoice(graph) option ${optIndex}: ${problem}`);
          }
        });
      }
    } else {
      const opts = inner.split('\n').map((s) => s.trim()).filter(Boolean);
      if (opts.length < 2) err(index, 'multiplechoice: at least two non-empty options are required');
      if (new Set(opts).size !== opts.length) err(index, 'multiplechoice: duplicate options are not allowed');
      if (!(params.answer || '').trim()) {
        err(index, 'multiplechoice: missing non-empty answer');
      } else if (opts.length && !opts.includes(params.answer)) {
        err(index, `multiplechoice: answer ${JSON.stringify(params.answer.slice(0, 40))} is not one of the options (exact string match required)`);
      }
    }
    if (/\(a\)/.test(q) && /\(b\)/.test(q)) err(index, `multiplechoice (${q.slice(0, 40)}…): question looks multi-part — split it`);
  }
  if (graphAnswerIndexes.length >= 2 && new Set(graphAnswerIndexes.map((x) => x.n)).size === 1) {
    err(graphAnswerIndexes[0].index, `all ${graphAnswerIndexes.length} graph multiplechoice(s) use answerIndex=${graphAnswerIndexes[0].n} — vary the correct position`);
  }

  // ---- graphplot shortcode rules -------------------------------------------
  for (const { params, inner, index, closed } of graphplots) {
    if (!closed) continue; // the unclosed-shortcode rule above already named it
    for (const name of ['question', 'answerDisplay', 'hint']) {
      if (/\bTry\s+It(?:s)?\s+\d+(?:\.\d+)+(?:\s*\([a-z]\))?[.:]?/i.test(params[name] || '')) {
        err(index, `graphplot: ${name} contains a print-source “Try It” label — keep the source number in working notes`);
      }
    }
    if (!(params.question || '').trim()) err(index, 'graphplot: missing non-empty question');
    if (isRegularSection && !(params.hint || '').trim()) {
      err(index, 'graphplot: regular-section exercise is missing a hint');
    }
    if (!params.ariaLabel) err(index, 'graphplot: missing ariaLabel — describe the empty grid in prose');
    try {
      parseGraphPlotConfig(inner.trim(), params.snap || 1);
    } catch (error) {
      err(index, `graphplot: ${error.message}`);
    }
  }

  // ---- apfigure shortcode rules --------------------------------------------
  // Spec-first static figures. The shortcode ships the spec JSON to the
  // <ap-figure> renderer verbatim, so the lint builds every spec through the
  // REAL geometry engine: a spec the browser would reject (bad bounds, an
  // unknown curve kind, a zero radius) fails here, not on the reader's
  // screen. smoothCurves carries the same freeform acknowledgment the
  // data-spec rule demands of pasted figures — the engine enforces it, and
  // the catch below names the fix.
  for (const { params, inner, index, closed } of shortcodes(mediaSrc, 'apfigure')) {
    if (!closed) continue; // the unclosed-shortcode rule above already named it
    for (const problem of figureSpecErrors(inner.trim(), params.kind || 'graph')) {
      err(index, `apfigure: ${problem}`);
    }
  }

  // ---- Knowledge Check page rule -------------------------------------------
  if (isKnowledgeCheck) {
    for (const m of src.matchAll(/\bhint="/g)) {
      err(m.index, 'hint on a Knowledge Check — quizzes never have hints; delete the attribute');
    }
  }

  return { errors };
}
