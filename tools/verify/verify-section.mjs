/**
 * One-command verification for a section page (Hugo edition).
 *
 *   node tools/verify/verify-section.mjs [--skip-lint] content/<subject>/<book>/<ch>/<sec>.md [...]
 *
 * Runs, per file:
 *   1. mechanical lints (tools/lint/lints.mjs)
 *   2. KaTeX render of every $…$ / $$…$$ math run (catches broken LaTeX)
 *   3. every {{< fillin >}} answer through the REAL grader (check-answer.mjs):
 *      it must self-grade 'correct' under its own answerForm — a
 *      malformed, ungradeable, or mistagged answer fails here
 *   4. prop-math: question / hint / answerDisplay $…$ runs must render, no
 *      unpaired bare "$" (money must be \$)
 *   5. {{< multiplechoice >}} (text): answer must be one of the options
 *   6. {{< graphplot >}}: the config parses through the browser's own schema
 *   7. {{< textin >}}: answer and every accept member self-grade 'correct'
 *      through the word grader; {{< sortbins >}}: the config parses through
 *      the real parser and the keyed assignment grades 'correct'
 *   8. {{< selfcheck >}}: the inner model answer is present
 *   9. {{< mediafigure >}}: src resolves to a vendored manifest entry, alt
 *      is present
 *
 * After the checks, a section page (one with a `## Practice` heading) prints
 * an informational `facts:` panel — figure/selfcheck/practice-item/key-term/
 * cross-link counts — never a failure; compare it against the footer's
 * `Changes:` counts before reporting a discrepancy.
 *
 * Steps 1–2 are the pass `npm run lint` makes over the whole corpus;
 * verify-all passes `--skip-lint` so `npm test` runs them once, not twice.
 * An author's per-page run keeps them.
 *
 * Exit 1 on any ✗, else `✓ N section(s) verified.` — every finding fails;
 * there is no non-failing tier.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import katex from 'katex';
import { ce, checkAnswer, preprocess } from '../../assets/js/lib/math/check-answer.mjs';
import { parseGraphPlotConfig } from '../../assets/js/lib/math/graph-plot-config.mjs';
import { checkText } from '../../assets/js/lib/text/check-text.mjs';
import { checkSortbins, parseSortbinsConfig } from '../../assets/js/lib/text/check-sortbins.mjs';
import { lintHugo } from '../lint/lints.mjs';
import { parseCliArgs } from '../lib/cli.mjs';
import { hasUnpairedDollar, maskCode, mathSpans, shortcodes } from '../lib/content.mjs';
import { loadPracticeIndexForBook } from '../lib/practice-index.mjs';

const usage = (detail) => {
  if (detail) console.error(`verify-section: ${detail}`);
  console.error('usage: node tools/verify/verify-section.mjs [--skip-lint] <file.md> [...]');
  process.exit(2);
};
let cli;
try { cli = parseCliArgs(process.argv.slice(2), { boolFlags: ['skip-lint'], positional: { name: 'file' } }); } catch (error) { usage(error.message); }
const files = cli.positional;
const skipLint = cli.bool('skip-lint');
if (!files.length) usage();

let fail = 0;
// Failures go to stderr, like every other verifier in tools/: a caller that
// pipes stdout somewhere (or discards it) must still see why the run failed.
// Every message carries the CURRENT FILE: the `== file` headings go to
// stdout, so a caller that relays stdout and stderr separately (verify-all
// does) would otherwise detach errors from the file they belong to and send
// a maintainer to the wrong book.
let currentFile = '';
const bad = (m) => {
  fail++;
  console.error(`  ✗ ${m.includes(currentFile) ? m : `${currentFile}: ${m}`}`);
};

/**
 * Did the answer parse into something other than what it says?
 *
 * Self-grading catches an answer the engine calls INVALID. It cannot catch one
 * the engine calls valid after reading it as nonsense: the prescript notation
 * for permutations and combinations, `{}_5P_2`, parses as the product
 * `5 * "P_2" * _` — perfectly valid, and reflexively equal to itself, so it
 * sails through the self-grade. The exercise then ships accepting only that
 * literal spelling and marking the actual answer (20) wrong.
 *
 * The bare `_` symbol is the tell, and an unambiguous one: no legitimate
 * variable is named `_`, while genuine subscripted variables (`x_1`, `a_n`,
 * `v_0`) parse as single atomic symbols and never produce it. Verified across
 * all 6,016 authored fill-in answers, which yield zero bare-`_` parses.
 */
function parsedAsNonsense(latex) {
  let expr;
  try { expr = ce.parse(preprocess(latex)); } catch { return false; }
  let found = false;
  const walk = (node) => {
    if (!node || found) return;
    if (node.symbol === '_') { found = true; return; }
    (node.ops ?? []).forEach(walk);
  };
  walk(expr);
  return found;
}

function propMath(where, name, val) {
  if (val == null) return;
  if (hasUnpairedDollar(val)) {
    bad(`${where}: ${name} has an unpaired bare "$" — escape money as \\$: ${JSON.stringify(val.slice(0, 70))}`);
  }
  // A shortcode param is one logical line, so a span may cross a newline.
  for (const { tex } of mathSpans(val, { allowNewlines: true })) {
    try { katex.renderToString(tex, { throwOnError: true, strict: 'ignore' }); }
    catch (e) { bad(`${where}: ${name} math "$${tex.slice(0, 40)}$" fails KaTeX — ${e.message.slice(0, 60)}`); }
  }
}

/**
 * The informational `facts:` panel for one section page, or `null` when the
 * page has no `## Practice` heading (a math or index page). Splits the page
 * at that heading so a body selfcheck (a Check Your Understanding) is
 * counted separately from a Practice-block one; every other count reads the
 * whole page (a figure can appear anywhere).
 */
function factsPanel(src, interactiveSrc) {
  const practiceIndex = src.search(/^##[ \t]+Practice\b/m);
  if (practiceIndex === -1) return null;
  const bodySrc = interactiveSrc.slice(0, practiceIndex);
  const practiceSrc = interactiveSrc.slice(practiceIndex);

  const figures = [...shortcodes(interactiveSrc, 'mediafigure')];
  const byKind = new Map();
  const longdescStems = [];
  for (const { params: p } of figures) {
    const kind = p.kind || 'unspecified';
    byKind.set(kind, (byKind.get(kind) || 0) + 1);
    if ((p.longdesc || '').trim()) {
      const stem = (p.src || '').split('/').pop();
      if (stem) longdescStems.push(stem);
    }
  }
  const kindPart = [...byKind.entries()].map(([kind, n]) => `${kind} ${n}`).join(', ');
  const longdescPart = `longdesc ${longdescStems.length}`
    + (longdescStems.length ? `: ${longdescStems.join(', ')}` : '');

  const bodySelfchecks = [...shortcodes(bodySrc, 'selfcheck')].filter((sc) => sc.closed).length;
  const practiceSelfchecks = [...shortcodes(practiceSrc, 'selfcheck')].filter((sc) => sc.closed).length;
  const multiplechoice = [...shortcodes(practiceSrc, 'multiplechoice')].filter((sc) => sc.closed).length;
  const textin = [...shortcodes(practiceSrc, 'textin')].length;
  const sortbins = [...shortcodes(practiceSrc, 'sortbins')].filter((sc) => sc.closed).length;
  const practiceTotal = multiplechoice + textin + practiceSelfchecks + sortbins;

  const keyTerms = src.match(/\n##[ \t]+Key terms\b([\s\S]*?)(?=\n##[ \t]|$)/);
  const keyTermsCount = keyTerms ? (keyTerms[1].match(/^-\s+\*\*/gm) || []).length : 0;

  const crossLinks = [...src.matchAll(/\[[^\]]*\]\((\/[^)\s]*)\)/g)].length;

  return `  facts: figures ${figures.length} (${kindPart}, ${longdescPart}), `
    + `body selfchecks ${bodySelfchecks}, `
    + `practice items ${practiceTotal} (multiplechoice ${multiplechoice}, textin ${textin}, `
    + `selfcheck ${practiceSelfchecks}, sortbins ${sortbins}), `
    + `key terms ${keyTermsCount}, `
    + `model answers author-written: selfchecks total ${bodySelfchecks + practiceSelfchecks}, `
    + `cross-links ${crossLinks}`;
}

for (const f of files) {
  console.log(`\n== ${f}`);
  currentFile = f;
  const src = readFileSync(f, 'utf8');
  const interactiveSrc = maskCode(src);

  if (!skipLint) {
    // 1. mechanical lints — every rule is an error, there is no warning level.
    //    The Knowledge Check duplicate-stem rule reads the book's section
    //    pages from `content/` under the working directory (so a scratch
    //    copy of a check at a mirrored path is compared with the real
    //    sections), through tools/lib/practice-index.mjs.
    lintHugo(src, f, { loadPracticeIndex: loadPracticeIndexForBook }).errors.forEach(bad);

    // 2. body math
    for (const { tex, display } of mathSpans(src, { maskCode: true })) {
      try { katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: 'ignore' }); }
      catch (e) {
        bad(display
          ? `display math fails KaTeX — ${e.message.slice(0, 70)}`
          : `inline math "$${tex.slice(0, 40)}$" fails KaTeX — ${e.message.slice(0, 60)}`);
      }
    }
  }

  // 3 + 4. fillin answers + prop math
  for (const { params: p } of shortcodes(interactiveSrc, 'fillin')) {
    const where = `fillin (${(p.question || '?').slice(0, 40)}…)`;
    if (p.answer != null) {
      let status;
      // Grading the authored answer under its own answerForm is what catches a
      // mistagged form: an answer that does not satisfy the shape it declares
      // is one no learner could ever submit, and it fails here rather than in
      // the browser.
      try { status = checkAnswer(p.answer, p.answer, { mode: p.answerMode, form: p.answerForm }); } catch (e) { status = 'threw: ' + e.message.slice(0, 40); }
      if (status === 'form') {
        bad(`${where}: answer ${JSON.stringify(p.answer)} is not written in its own answerForm ${JSON.stringify(p.answerForm)} — the exercise would reject its own answer`);
      } else if (status !== 'correct') {
        bad(`${where}: answer ${JSON.stringify(p.answer)} does not self-grade 'correct' (got ${status}) — malformed/ungradeable`);
      } else if (parsedAsNonsense(p.answer)) {
        bad(`${where}: answer ${JSON.stringify(p.answer)} parses as a nonsense product, not the value it spells — the exercise would accept only this literal notation. Write the value the question asks for.`);
      }
      // An angle-valued answer under evaluated-trig alone is degree-spoofable:
      // the predicate only bans trig functions, and the engine reads ^\circ as
      // an exact conversion factor, so 40° grades correct against 2π/9. The
      // radians (or degrees) token is what pins the written unit.
      const forms = (p.answerForm || '').split(/\s+/).filter(Boolean);
      if (forms.includes('evaluated-trig') && !forms.includes('radians') && !forms.includes('degrees')
        && /\\pi\b/.test(p.answer || '')) {
        bad(`${where}: answer ${JSON.stringify(p.answer)} is an angle in radians but declares only evaluated-trig — a degree-marked spelling of the same number (e.g. 40^\\circ for 2\\pi/9) would grade correct. Declare answerForm="evaluated-trig radians".`);
      }
    }
    for (const name of ['question', 'hint', 'answerDisplay']) propMath(where, name, p[name]);
  }

  // 5. multiplechoice text answers
  for (const { params: p, inner, closed } of shortcodes(interactiveSrc, 'multiplechoice')) {
    if (!closed) continue; // the lint reports the unclosed tag by name
    propMath('multiplechoice', 'question', p.question);
    propMath('multiplechoice', 'hint', p.hint);
    if (p.mode !== 'graph' && p.answer != null) {
      const opts = inner.split('\n').map((s) => s.trim()).filter(Boolean);
      if (opts.length && !opts.includes(p.answer)) bad(`multiplechoice: answer ${JSON.stringify(p.answer)} is not one of the options`);
    }
  }

  // 6. graphplot configuration follows the same schema used in the browser.
  for (const { params: p, inner, closed } of shortcodes(interactiveSrc, 'graphplot')) {
    if (!closed) continue; // the lint reports the unclosed tag by name
    try { parseGraphPlotConfig(inner.trim(), p.snap || 1); }
    catch (e) { bad(`graphplot: ${e.message}`); }
    for (const name of ['question', 'hint', 'answerDisplay']) propMath('graphplot', name, p[name]);
  }

  // 7. textin answers — the word grader (check-text.mjs), not the math
  // grader: the answer and every `|`-separated accept member must self-grade
  // 'correct' against the answer, exactly like a fillin's answer must
  // self-grade against itself.
  for (const { params: p } of shortcodes(interactiveSrc, 'textin')) {
    const where = `textin (${(p.question || '?').slice(0, 40)}…)`;
    if (p.answer != null) {
      if (checkText(p.answer, p.answer, { accept: p.accept }) !== 'correct') {
        bad(`${where}: answer ${JSON.stringify(p.answer)} does not self-grade 'correct'`);
      }
      for (const member of (p.accept || '').split('|').filter(Boolean)) {
        if (checkText(member, p.answer, { accept: p.accept }) !== 'correct') {
          bad(`${where}: accept member ${JSON.stringify(member)} does not grade 'correct' against the answer`);
        }
      }
    }
    for (const name of ['question', 'hint']) propMath(where, name, p[name]);
  }

  // 7b. sortbins — config through the REAL parser (the same module the
  // <sort-bins> component and the lint run), and the keyed assignment must
  // round-trip the grader to 'correct', exactly like a fillin's answer
  // self-grades against itself.
  for (const { params: p, inner, closed } of shortcodes(interactiveSrc, 'sortbins')) {
    if (!closed) continue; // the lint reports the unclosed tag by name
    const where = `sortbins (${(p.question || '?').slice(0, 40)}…)`;
    try {
      const cfg = parseSortbinsConfig(inner.trim());
      const graded = checkSortbins(cfg.items.map((item) => item.bin), cfg);
      if (graded.status !== 'correct') {
        bad(`${where}: keyed assignment does not self-grade 'correct' (got ${graded.status})`);
      }
    } catch (e) { bad(`sortbins: ${e.message}`); }
  }

  // 8. selfcheck — no key to grade, so the checkable content is structural:
  // the paired inner model answer must actually be there, and its
  // question/hint must render like any other learner-facing math.
  for (const { params: p, inner, closed } of shortcodes(interactiveSrc, 'selfcheck')) {
    if (!closed) continue; // the lint reports the unclosed tag by name
    const where = `selfcheck (${(p.question || '?').slice(0, 40)}…)`;
    if (!inner.trim()) bad(`${where}: inner model answer is empty`);
    for (const name of ['question', 'hint']) propMath(where, name, p[name]);
  }

  // 9. mediafigure — src must resolve to a vendored manifest entry, and alt
  // must be present. The shortcode template already refuses to build
  // without these (errorf) and the lint catches it before Hugo runs; this is
  // the same check made independently against the real manifest on disk.
  for (const { params: p, closed } of shortcodes(interactiveSrc, 'mediafigure')) {
    if (!closed) continue; // the lint reports the unclosed tag by name
    const src = p.src || '';
    const where = `mediafigure (${src || '?'})`;
    const parts = src.split('/');
    if (parts.length !== 2 || !parts[0] || !parts[1]) {
      bad(`${where}: src must be "<book>/<stem>"`);
    } else {
      const [book, stem] = parts;
      const manifestPath = join('data/media', `${book}.json`);
      if (!existsSync(manifestPath)) {
        bad(`${where}: no media manifest ${manifestPath}`);
      } else {
        let manifest = null;
        try { manifest = JSON.parse(readFileSync(manifestPath, 'utf8')); } catch { manifest = null; }
        if (!manifest || !manifest.figures || !manifest.figures[stem]) {
          bad(`${where}: ${JSON.stringify(stem)} is not in ${manifestPath}`);
        }
      }
    }
    if (!(p.alt || '').trim()) bad(`${where}: alt is empty`);
  }

  // Informational facts panel — never a failure, and only for section pages
  // (those with a `## Practice` heading); math and index pages print nothing.
  const facts = factsPanel(src, interactiveSrc);
  if (facts) console.log(facts);
}

if (fail) {
  console.error(`\n✖ ${fail} problem(s).`);
  process.exit(1);
}
// A success banner, so a passing run says so in the same shape as its siblings
// rather than ending in silence a reader has to interpret.
console.log(`\n✓ ${files.length} section(s) verified.`);
