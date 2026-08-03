/**
 * Mechanical authoring lints — Hugo/shortcode edition.
 *
 * Mechanical checks for the repository's current Hugo Markdown and shortcode
 * authoring format. Math, table, exercise, and inline-SVG rules scan the raw
 * source before the production build.
 *
 * lintHugo(src, filename?) → { errors, warnings }
 */

import { parseGraphPlotConfig } from '../assets/js/lib/graph-plot-config.mjs';
// The grader's own list-splitting rules, so the lint reasons about authored
// comma answers exactly the way checkAnswer() will grade them — and the
// grader itself, so the trivially-satisfiable-prompt check grades a printed
// value exactly the way a learner's submission would be graded.
import {
  ANSWER_FORM_TOKENS, checkAnswer, checkForm, parseAnswerForm, splitTopLevelCommas, stripGroupingCommas,
} from '../assets/js/lib/check-answer.mjs';
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
const ALGEBRAIC_SIMPLIFY_PROMPT_RE = /(?:^|[.?!]\s+)\s*(?:simplify|add|subtract|combine|find the (?:sum|difference))\b/i;

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

function printedQuestionValues(question) {
  const values = [];
  const prose = question.replace(/(?<!\\)\$([^$]+?)(?<!\\)\$/g, (span, inner) => {
    if (VALUE_SPAN_RE.test(inner)) values.push(inner.replace(/\\\$/g, '').trim());
    return ' ';
  });
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

function printedPolynomialSubjects(question) {
  const subjects = [];
  for (const span of question.matchAll(/(?<!\\)\$([^$]+?)(?<!\\)\$/g)) {
    const inner = span[1].trim();
    if (/[=<>,]|\\(?:lt|gt|le|ge|ne|neq|text|begin|dots|ldots)/.test(inner)) continue;
    if (!spanHasVariable(inner)) continue;
    subjects.push(inner);
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
  for (const span of question.matchAll(/(?<!\\)\$([^$]+?)(?<!\\)\$/g)) {
    const inner = span[1].trim();
    // `{,}` is digit grouping, not a list separator: `\tfrac{91{,}881}{9}` is
    // one quotient, and reading its comma as an enumeration would silently
    // exempt every grouped number in the corpus from this rule.
    const separators = inner.replace(/\{\s*,\s*\}/g, '');
    if (/[=<>,]|\\(?:lt|gt|le|ge|ne|neq|text|begin|dots|ldots|sqrt|pi)/.test(separators)) continue;
    if (spanHasVariable(inner)) continue;
    subjects.push(inner);
  }
  return subjects;
}

export const groupDigits = (n) => n.replace(/\B(?=(\d{3})+$)/g, '{,}');

/**
 * Blank fenced/inline code and HTML comments — documentation, not authored
 * page content — without changing string offsets, so a diagnostic still points
 * at the right source line. Exported alongside `ungroupedDigitRuns` so a fixer
 * sees exactly the text the lint sees.
 */
export function maskDocumentation(src) {
  const blank = (s) => s.replace(/[^\n]/g, ' ');
  return maskMarkdownCodeBlocks(src.replace(/<!--[\s\S]*?-->/g, blank), blank)
    .replace(/(`+)([\s\S]*?)\1/g, blank)
    .replace(/<!--[\s\S]*?-->/g, blank);
}

/**
 * Every four-or-more-digit run inside a math span that the corpus would write
 * grouped, with its offset in `source`. Exported so a fixer rewrites exactly
 * what the lint reports, rather than re-deriving the rules and diverging: the
 * masking below is subtle, and a near-miss would edit text no reader sees.
 */
export function ungroupedDigitRuns(source, blank) {
  const runs = [];
  const spans = [];
  for (const m of source.matchAll(/\$\$([\s\S]*?)\$\$/g)) spans.push([m.index + 2, m[1]]);
  const inlineOnly = source.replace(/\$\$[\s\S]*?\$\$/g, blank);
  for (const m of inlineOnly.matchAll(/(?<!\\)\$([^$\n]+?)(?<!\\)\$/g)) spans.push([m.index + 1, m[1]]);
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

/** Return an exact HTML attribute value; do not confuse `role` with `data-role`. */
function htmlAttribute(tag, name) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = tag.match(new RegExp(
    `(?:^|\\s)${escapedName}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
    'i',
  ));
  return match ? (match[1] ?? match[2] ?? match[3]) : '';
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

function hasFileBackedCssImage(css) {
  if (/(?:-webkit-)?image-set\s*\(/i.test(css)) return true;
  for (const match of css.matchAll(/url\(\s*([^)]*?)\s*\)/gi)) {
    let target = match[1].trim();
    if ((target.startsWith('"') && target.endsWith('"')) || (target.startsWith("'") && target.endsWith("'"))) {
      target = target.slice(1, -1).trim();
    }
    if (target && !target.startsWith('#')) return true;
  }
  return false;
}

/** Parse the named params of a `{{< name … >}}` shortcode opening tag body. */
function shortcodeParams(body) {
  const p = {};
  for (const m of body.matchAll(/(\w+)="([^"]*)"/g)) p[m[1]] = m[2];
  return p;
}

/** Iterate every shortcode of `name`: yields { params, inner, index, end }. */
function* shortcodes(src, name, paired) {
  const openRe = new RegExp(`\\{\\{<\\s*${name}\\b([\\s\\S]*?)>\\}\\}`, 'g');
  let m;
  while ((m = openRe.exec(src)) !== null) {
    let inner = '';
    let end = openRe.lastIndex;
    if (paired) {
      const closeRe = new RegExp(`\\{\\{<\\s*/${name}\\s*>\\}\\}`, 'g');
      closeRe.lastIndex = openRe.lastIndex;
      const c = closeRe.exec(src);
      if (c) {
        inner = src.slice(openRe.lastIndex, c.index);
        end = closeRe.lastIndex;
        openRe.lastIndex = end;
      }
    }
    yield { params: shortcodeParams(m[1]), inner, index: m.index, end };
  }
}

export function lintHugo(src, filename = '') {
  const errors = [];
  const warnings = [];
  const err = (i, msg) => errors.push(`L${lineOf(src, i)}: ${msg}`);
  const wrn = (i, msg) => warnings.push(`L${lineOf(src, i)}: ${msg}`);
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

  for (const m of htmlMediaSrc.matchAll(/<svg\b[^>]*>/gi)) {
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
  for (const m of htmlMediaSrc.matchAll(/<div\b[^>]*\bclass\s*=\s*(?:"[^"]*\bap-figure\b[^"]*"|'[^']*\bap-figure\b[^']*')[^>]*>/gi)) {
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
  for (const m of htmlMediaSrc.matchAll(/<path\b[^>]*>/gi)) {
    if (!/(?:^|[\s\d.])C[\s\d.]/.test(htmlAttribute(m[0], 'd'))) continue;
    if (acknowledgedFreeform.some(([from, to]) => m.index > from && m.index < to)) continue;
    err(m.index, 'figure curve is spline-interpolated (smoothCurves output) — regenerate it from an analytic primitive (quadratics, cubics, circles, polylines, or curves kind sqrt/cbrt/reciprocal/reciprocal-squared/sine/exp/log); reserve smoothCurves (freeform: true) for source art with no formula, declared in a data-spec');
  }

  for (const m of mediaSrc.matchAll(/\*\*Solution\.\*\*[ \t]*(?:\r?\n[ \t]*)+(?=(?:\{\{<\s*(?:fillin|multiplechoice|graphplot)\b|#{1,6}\s|---[ \t]*$|(?![\s\S])))/gm)) {
    wrn(m.index, 'worked example appears to have an empty Solution block — confirm that no source solution was dropped');
  }
  for (const m of src.matchAll(/\{\{<\s*callout\b[^>]*>\}\}([\s\S]*?)\{\{<\s*\/callout\s*>\}\}/g)) {
    const meaningful = m[1].replace(/\*\*[^*]+[.:]?\*\*/g, '').trim();
    if (!meaningful) err(m.index, 'callout has a heading but no explanatory content');
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

  // ---- interactive practice-set size rule ----------------------------------
  const fillins = [...shortcodes(mediaSrc, 'fillin')];
  const multiplechoices = [...shortcodes(mediaSrc, 'multiplechoice', true)];
  const graphplots = [...shortcodes(mediaSrc, 'graphplot', true)];
  const practiceQuestions = [...fillins, ...multiplechoices, ...graphplots]
    .sort((a, b) => a.index - b.index);

  // ---- section-final Practice block ----------------------------------------
  // Every numbered section closes its instructional content with a
  // `## Practice` heading, immediately before the first end-matter heading
  // (`## Key equations`, `## Key concepts`, `## Key terms`, or any other
  // `## Key …` summary block). Inside it, one `### ` group per section
  // objective — matching the objectives callout in order — each holding at
  // least two sourced exercises, with at least five in the block overall.
  // Sizing scales with the section instead of a flat count, because a
  // six-objective section cannot cover its objectives in five questions and a
  // multipart source item expands into one exercise per part.
  // Sections authored before the rule warn until retrofitted — the warning
  // list is the retrofit worklist — while a present-but-malformed block is an
  // error. See docs/authoring-playbook.md, "The section-final Practice block".
  const MIN_PER_OBJECTIVE = 2;
  const MIN_PER_SECTION = 5;
  const headings = [...mediaSrc.matchAll(/^## +(.+?)[ \t]*$/gm)]
    .map((m) => ({ index: m.index, end: m.index + m[0].length, title: m[1].trim() }));
  const endMatter = headings.find((h) => /^Key [a-z]/.test(h.title));
  // Compare group titles to objectives loosely: the author copies the callout
  // item, so only case, spacing, and trailing punctuation should vary.
  const normalizeTitle = (t) => t.toLowerCase().replace(/\s+/g, ' ').replace(/[.:;,]+$/, '').trim();
  let practiceRange = null;
  if (isRegularSection) {
    const practiceHeadings = headings.filter((h) => h.title === 'Practice');
    const required = Math.max(MIN_PER_SECTION, MIN_PER_OBJECTIVE * objectives.length);
    if (!practiceHeadings.length) {
      wrn(0, `section has no \`## Practice\` block — add a \`### \` group per objective with at least ${MIN_PER_OBJECTIVE} sourced, hinted exercises each (at least ${required} in total) immediately before the end matter (retrofit pending)`);
    } else if (practiceHeadings.length > 1) {
      err(practiceHeadings[1].index, 'more than one `## Practice` heading — a section has exactly one Practice block');
    } else {
      const practice = practiceHeadings[0];
      const next = headings.find((h) => h.index > practice.index);
      practiceRange = [practice.end, next ? next.index : mediaSrc.length];
      if (endMatter && practice.index > endMatter.index) {
        err(practice.index, `\`## Practice\` appears after the end matter — place it immediately before the first \`## Key …\` heading (\`## ${endMatter.title}\`)`);
      } else if (endMatter && (!next || next.index !== endMatter.index)) {
        err(practice.index, `\`## Practice\` must be immediately before \`## ${endMatter.title}\` — no other heading may come between`);
      } else if (!endMatter && next) {
        err(practice.index, '`## Practice` must be the last heading before the attribution footer in a section without end matter');
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
  for (const { params, index } of fillins) {
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
      const candidates = [
        ...(REEXPRESSION_RE.test(q) ? printedQuestionValues(q) : []),
        ...(FACTORING_PROMPT_RE.test(q) ? printedPolynomialSubjects(q) : []),
        ...(ARITHMETIC_PROMPT_RE.test(q) ? printedArithmeticSubjects(q) : []),
        ...(ALGEBRAIC_PRODUCT_PROMPT_RE.test(q) ? printedPolynomialSubjects(q) : []),
        ...(ALGEBRAIC_SIMPLIFY_PROMPT_RE.test(q) ? printedPolynomialSubjects(q) : []),
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
        // Reducing a rational expression — "$\frac{x^2-x-2}{x^2-3x+2}$" to
        // "$\frac{x+1}{x-1}$" — is a real instance of this hazard that no form
        // token can currently express: prompt and answer are both a single
        // fraction, and what separates them is cancelling a common polynomial
        // factor, which is a CAS operation rather than a shape. Reporting it
        // would name a defect with no available fix, so the rule stays silent
        // on that one shape and the class is tracked in the playbook §6
        // worklist instead. Scoped to spans WITH a variable — numeral
        // fractions are fully covered by `lowest-terms`, and a reduced numeral
        // fraction equal to the answer IS the answer, so exempting them would
        // only hide defects. The moment a `reduced-fraction` predicate exists,
        // delete this filter.
        .filter((value) => !(spanHasVariable(value)
          && checkForm(value, 'single-fraction') && checkForm(params.answer, 'single-fraction')));
      const printed = candidates
        .find((value) => checkAnswer(value, params.answer, { mode: params.answerMode, form: params.answerForm }) === 'correct');
      if (printed !== undefined) {
        const remedy = parseAnswerForm(params.answerForm).valid
          ? `the declared answerForm ${JSON.stringify(params.answerForm)} does not rule that value out — tighten it`
          : 'add answerForm so the response is graded on its form (or use multiplechoice)';
        err(index, `${where}: answer grades equal to ${JSON.stringify(printed)} printed in the question — a learner passes by retyping the prompt; ${remedy}, since value-based grading alone cannot tell the two forms apart`);
      }
    }
    if (isRegularSection && !(params.hint || '').trim()) {
      wrn(index, `${where}: regular-section exercise is missing a hint`);
    }
    if (params.answer && /\^-/.test(params.answer)) {
      err(index, `${where}: answer has an unbraced negative exponent — write 10^{-3}, never 10^-3`);
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
    if (/\(a\)/.test(q) && /\(b\)/.test(q)) wrn(index, `${where}: question looks multi-part ("(a)…(b)") — split into one exercise per part`);
  }

  // ---- multiplechoice shortcode rules --------------------------------------
  const graphAnswerIndexes = [];
  for (const { params, inner, index } of multiplechoices) {
    const q = params.question || '';
    if (!q.trim()) err(index, 'multiplechoice: missing non-empty question');
    if (isRegularSection && !(params.hint || '').trim()) {
      wrn(index, `multiplechoice (${q.slice(0, 40)}…): regular-section exercise is missing a hint`);
    }
    for (const name of ['question', 'answerDisplay', 'hint']) {
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
        const nOpts = inner.split('===OPT===').filter((s) => s.trim()).length;
        if (nOpts < 2) err(index, 'multiplechoice(graph): at least two options are required');
        if (Number(params.answerIndex) >= nOpts) err(index, `multiplechoice(graph): answerIndex ${params.answerIndex} but only ${nOpts} option(s)`);
        graphAnswerIndexes.push({ index, n: Number(params.answerIndex) });
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
    if (/\(a\)/.test(q) && /\(b\)/.test(q)) wrn(index, `multiplechoice (${q.slice(0, 40)}…): question looks multi-part — split it`);
  }
  if (graphAnswerIndexes.length >= 2 && new Set(graphAnswerIndexes.map((x) => x.n)).size === 1) {
    wrn(graphAnswerIndexes[0].index, `all ${graphAnswerIndexes.length} graph multiplechoice(s) use answerIndex=${graphAnswerIndexes[0].n} — vary the correct position`);
  }

  // ---- graphplot shortcode rules -------------------------------------------
  for (const { params, inner, index } of graphplots) {
    for (const name of ['question', 'answerDisplay', 'hint']) {
      if (/\bTry\s+It(?:s)?\s+\d+(?:\.\d+)+(?:\s*\([a-z]\))?[.:]?/i.test(params[name] || '')) {
        err(index, `graphplot: ${name} contains a print-source “Try It” label — keep the source number in working notes`);
      }
    }
    if (!(params.question || '').trim()) err(index, 'graphplot: missing non-empty question');
    if (isRegularSection && !(params.hint || '').trim()) {
      wrn(index, 'graphplot: regular-section exercise is missing a hint');
    }
    if (!params.ariaLabel) err(index, 'graphplot: missing ariaLabel — describe the empty grid in prose');
    try {
      parseGraphPlotConfig(inner.trim(), params.snap || 1);
    } catch (error) {
      err(index, `graphplot: ${error.message}`);
    }
  }

  // ---- Knowledge Check page rule -------------------------------------------
  if (isKnowledgeCheck) {
    for (const m of src.matchAll(/\bhint="/g)) {
      err(m.index, 'hint on a Knowledge Check — quizzes never have hints; delete the attribute');
    }
  }

  return { errors, warnings };
}
