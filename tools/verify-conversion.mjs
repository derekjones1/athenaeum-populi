/**
 * verify-conversion.mjs — proves a converted book accounts for every source
 * construct. Walks the SOURCE book, maps each .mdx to its converted .md, and
 * per file checks:
 *   - instance counts by component type match exactly (source vs output)
 *     (Graph + NumberLine + Figure are compared as one "figure" bucket, since
 *      they all become inline <div class="ap-figure"> SVGs)
 *   - no unconverted construct leaks (capitalized <JSX>, nextra import)
 *   - every FillIn answer round-trips into the output
 *   - prose word-count delta within tolerance (warning only)
 *
 * Exit non-zero if any file fails a hard check. This is the Phase 3 gate.
 *
 * Usage: node tools/verify-conversion.mjs <src-book-dir> <dest-book-dir>
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { lintSource } from './lints-source.mjs';

const [, , srcDir, destDir] = process.argv;
if (!srcDir || !destDir) {
  console.error('usage: node tools/verify-conversion.mjs <src-book-dir> <dest-book-dir>');
  process.exit(1);
}

const count = (s, re) => (s.match(re) || []).length;

// Component mentions inside code (fences / inline `<Figure />`) are prose, not
// instances — strip code before counting so a documented tag isn't miscounted.
const stripCode = (s) => s.replace(/```[\s\S]*?```/g, ' ').replace(/`[^`\n]*`/g, ' ');

function sourceCounts(raw) {
  const s = stripCode(raw);
  return {
    fillin: count(s, /<FillIn\b/g),
    callout: count(s, /<Callout\b/g),
    figure: count(s, /<Graph(?![A-Za-z])/g) + count(s, /<NumberLine\b/g) + count(s, /<Figure\b/g),
    multiplechoice: count(s, /<MultipleChoice\b/g),
    graphplot: count(s, /<GraphPlot\b/g),
    cards: count(s, /<Cards\.Card\b/g),
  };
}
function outputCounts(s) {
  return {
    fillin: count(s, /\{\{<\s*fillin\b/g),
    callout: count(s, /\{\{<\s*callout\b/g),
    figure: count(s, /<div class="ap-figure">/g),
    multiplechoice: count(s, /\{\{<\s*multiplechoice\b/g),
    graphplot: count(s, /\{\{<\s*graphplot\b/g),
    cards: count(s, /\{\{<\s*card\s/g),
  };
}

/** Narrative-prose word count (keeps headings + Callout prose; drops
 *  component internals, math, code, SVG). Source and output are stripped to
 *  the same residue so the counts are comparable — a real delta means the
 *  converter dropped or duplicated prose. */
function proseWords(s, isSource) {
  s = s.replace(/^---\n[\s\S]*?\n---\n/, '');
  s = s.replace(/```[\s\S]*?```/g, ' ').replace(/`[^`]*`/g, ' ');   // code
  s = s.replace(/\$\$[\s\S]*?\$\$/g, ' ').replace(/\$[^$\n]*\$/g, ' '); // math
  if (isSource) {
    s = s.replace(/^\s*import .*$/gm, ' ');
    // self-closing components (each anchored on its own name — no cross-match)
    for (const n of ['FillIn', 'GraphPlot', 'MultipleChoice', 'NumberLine', 'Figure', 'Graph']) {
      s = s.replace(new RegExp(`<${n}[\\s\\S]*?/>`, 'g'), ' ');
    }
    s = s.replace(/<Cards\.Card[\s\S]*?<\/Cards\.Card>|<Cards\.Card[\s\S]*?\/>/g, ' ');
    s = s.replace(/<\/?Callout[^>]*>|<\/?Cards>/g, ' ');            // keep Callout inner
  } else {
    // paired interactive shortcodes: drop entirely (their inner is options/JSON)
    s = s.replace(/\{\{<\s*multiplechoice[\s\S]*?\{\{<\s*\/multiplechoice\s*>\}\}/g, ' ');
    s = s.replace(/\{\{<\s*graphplot[\s\S]*?\{\{<\s*\/graphplot\s*>\}\}/g, ' ');
    s = s.replace(/\{\{<\s*fillin[\s\S]*?>\}\}/g, ' ');
    s = s.replace(/<div class="ap-figure">[\s\S]*?<\/div>/g, ' ').replace(/<svg[\s\S]*?<\/svg>/g, ' ');
    s = s.replace(/\{\{<\s*\/?callout[^}]*>\}\}/g, ' ');            // keep callout inner
    s = s.replace(/\{\{<\s*\/?cards?[^}]*>\}\}/g, ' ');
  }
  s = s.replace(/<[^>]+>/g, ' ');                                   // stray html
  s = s.replace(/[#*_>`|[\]()-]/g, ' ');
  return (s.match(/[A-Za-z0-9]+/g) || []).length;
}

function fillinAnswers(src) {
  const out = [];
  for (const m of src.matchAll(/<FillIn\b([\s\S]*?)\/>/g)) {
    const a = m[1].match(/answer="([^"]*)"/);
    if (a) out.push(a[1].replace(/\\\\/g, '\\'));
  }
  return out;
}

// map source .mdx -> output .md
function destFor(srcFile) {
  const rel = relative(srcDir, srcFile);
  if (rel.endsWith('index.mdx')) return join(destDir, rel.replace(/index\.mdx$/, '_index.md'));
  return join(destDir, rel.replace(/\.mdx$/, '.md'));
}

function mdxFiles(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) out.push(...mdxFiles(p));
    else if (e.endsWith('.mdx')) out.push(p);
  }
  return out;
}

let hardFails = 0, warns = 0, filesChecked = 0;
const grand = { source: {}, output: {} };

for (const srcFile of mdxFiles(srcDir).sort()) {
  const dest = destFor(srcFile);
  const rel = relative(srcDir, srcFile);
  if (!existsSync(dest)) { console.error(`MISSING OUTPUT: ${rel}`); hardFails++; continue; }
  filesChecked++;
  const src = readFileSync(srcFile, 'utf8');
  const out = readFileSync(dest, 'utf8');
  const sc = sourceCounts(src), oc = outputCounts(out);
  const problems = [];

  for (const k of Object.keys(sc)) {
    grand.source[k] = (grand.source[k] || 0) + sc[k];
    grand.output[k] = (grand.output[k] || 0) + oc[k];
    if (sc[k] !== oc[k]) problems.push(`${k}: source ${sc[k]} ≠ output ${oc[k]}`);
  }
  // leftover unconverted constructs (ignore tags mentioned inside code spans)
  const leftover = stripCode(out).match(/<(FillIn|Callout|Graph|NumberLine|Figure|MultipleChoice|GraphPlot|Cards)\b/g);
  if (leftover) problems.push(`leftover JSX: ${[...new Set(leftover)].join(', ')}`);
  if (/^\s*import .*nextra/m.test(out)) problems.push('leftover nextra import');
  // FillIn answers round-trip
  const missing = fillinAnswers(src).filter((a) => !out.includes(a));
  if (missing.length) problems.push(`${missing.length} FillIn answer(s) missing in output (e.g. ${JSON.stringify(missing[0])})`);
  // prose word delta (warning)
  const ws = proseWords(src, true), wo = proseWords(out, false);
  const delta = ws ? Math.abs(ws - wo) / ws : 0;
  if (delta > 0.1) { warns++; console.warn(`~ ${rel}: prose words ${ws} → ${wo} (${(delta * 100).toFixed(0)}% delta)`); }

  // source hygiene: the source must be lint-clean going in (mechanical rules
  // in lints-source.mjs). A source error would convert into a latent bug, so
  // it is a hard fail. (Lints get retargeted to shortcode syntax in Phase 5.)
  const lint = lintSource(src, srcFile);
  if (lint.errors.length) { hardFails++; console.error(`LINT ${rel}\n    ${lint.errors.join('\n    ')}`); }
  if (lint.warnings.length) { warns += lint.warnings.length; }

  if (problems.length) { hardFails++; console.error(`FAIL ${rel}\n    ${problems.join('\n    ')}`); }
}

console.log(`\n${filesChecked} files checked.`);
console.log('source totals:', JSON.stringify(grand.source));
console.log('output totals:', JSON.stringify(grand.output));
const accounted = Object.keys(grand.source).every((k) => grand.source[k] === grand.output[k]);
console.log(`instance accounting: ${accounted ? '100% ✓' : 'MISMATCH ✗'}`);
console.log(`${hardFails} hard failure(s), ${warns} word-count warning(s).`);
process.exit(hardFails === 0 && accounted ? 0 : 1);
