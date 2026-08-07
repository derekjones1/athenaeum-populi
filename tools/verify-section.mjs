/**
 * One-command verification for a section page (Hugo edition).
 *
 *   node tools/verify-section.mjs content/math/<book>/<ch>/<sec>.md [...]
 *
 * Runs, per file:
 *   1. mechanical lints (tools/lints.mjs)
 *   2. KaTeX render of every $…$ / $$…$$ math run (catches broken LaTeX)
 *   3. every {{< fillin >}} answer through the REAL grader (check-answer.mjs):
 *      it must self-grade 'correct' — a malformed/ungradeable answer fails here
 *   4. prop-math: question / hint / answerDisplay $…$ runs must render, no
 *      unpaired bare "$" (money must be \$)
 *   5. {{< multiplechoice >}} (text): answer must be one of the options
 *
 * Exit 0 + "ALL CLEAN" = passes. ⚠ = human glance and does not fail. Uses
 * KaTeX plus the production answer grader.
 */
import { readFileSync } from 'node:fs';
import katex from 'katex';
import { checkAnswer } from '../assets/js/lib/check-answer.mjs';
import { parseGraphPlotConfig } from '../assets/js/lib/graph-plot-config.mjs';
import { lintHugo } from './lints.mjs';
import { hasUnpairedDollar, mathSpans, shortcodes } from './lib-content.mjs';

const files = process.argv.slice(2);
if (!files.length) { console.error('usage: node tools/verify-section.mjs <file.md> [...]'); process.exit(2); }

let fail = 0, warn = 0;
// Failures go to stderr, like every other verifier in tools/: a caller that
// pipes stdout somewhere (or discards it) must still see why the run failed.
// `verify-all` relays both streams, so nothing downstream changes.
const bad = (m) => { fail++; console.error(`  ✗ ${m}`); };
const iffy = (m) => { warn++; console.error(`  ⚠ ${m}`); };

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

for (const f of files) {
  console.log(`\n== ${f}`);
  const src = readFileSync(f, 'utf8');
  const interactiveSrc = src
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`\n]*`/g, ' ');

  // 1. mechanical lints
  const { errors, warnings } = lintHugo(src, f);
  errors.forEach(bad); warnings.forEach(iffy);

  // 2. body math
  for (const { tex, display } of mathSpans(src, { maskCode: true })) {
    try { katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: 'ignore' }); }
    catch (e) {
      bad(display
        ? `display math fails KaTeX — ${e.message.slice(0, 70)}`
        : `inline math "$${tex.slice(0, 40)}$" fails KaTeX — ${e.message.slice(0, 60)}`);
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
}

if (fail) {
  console.error(`\n✖ ${fail} problem(s)${warn ? `, ${warn} warning(s)` : ''}.`);
  process.exit(1);
}
// A success banner, so a passing run says so in the same shape as its siblings
// rather than ending in silence a reader has to interpret.
console.log(`\n✓ ${files.length} section(s) verified${warn ? `, ${warn} warning(s)` : ''}.`);
