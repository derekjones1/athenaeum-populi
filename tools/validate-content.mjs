/**
 * Content-structure validator — Hugo edition.
 * Retarget of the old scripts/validate-content.mjs. Nextra's `_meta.js` is gone;
 * Hugo orders by frontmatter `weight`, so this checks weights instead of _meta
 * sync. Everything else (required frontmatter, sequential numeric prefixes,
 * source-number cross-checks) carries over.
 *
 * Hierarchy: content/ (0) → subject/ (1) → book/ (2) → chapter/ (3).
 * Section landings are `_index.md`; sections are `NN-slug.md`.
 *
 * Zero deps. `npm run validate`. Exits non-zero with a list of problems.
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, basename, dirname, relative } from 'node:path';

// Roles are keyed off depth from the content root (content=0, subject=1,
// book=2, chapter=3). Pass a start-depth so a single book can be validated in
// isolation, e.g. `validate-content.mjs content/math/prealgebra 2`.
const ROOT = process.argv[2] || 'content';
const START_DEPTH = Number(process.argv[3] || 0);
const errors = [];
const IGNORED = new Set(['.DS_Store']);

const frontOf = (src) => (/^---\r?\n([\s\S]*?)\r?\n---/.exec(src) || [, null])[1];
const hasKey = (fm, k) => new RegExp(`^${k}:\\s*\\S`, 'm').test(fm ?? '');
const val = (fm, k) => (fm?.match(new RegExp(`^${k}:\\s*["']?([^"'\\n]+)["']?\\s*$`, 'm')) || [])[1];

function checkFront(file, { isBookRoot, isChapterIndex, isNumberedSection, isKnowledgeCheck }) {
  const rel = relative(ROOT, file);
  const fm = frontOf(readFileSync(file, 'utf8'));
  if (!fm) { errors.push(`${rel}: missing frontmatter`); return; }
  for (const k of ['title', 'description']) if (!hasKey(fm, k)) errors.push(`${rel}: missing \`${k}:\``);
  if (isBookRoot) for (const k of ['license', 'source']) if (!hasKey(fm, k)) errors.push(`${rel}: book index needs \`${k}:\``);
  if (isChapterIndex) {
    if (!hasKey(fm, 'source_chapter')) errors.push(`${rel}: chapter index needs \`source_chapter:\``);
    else {
      const dirCh = basename(dirname(file)).match(/^(\d+)-/)?.[1];
      const got = val(fm, 'source_chapter');
      if (dirCh && got && Number(got) !== Number(dirCh)) errors.push(`${rel}: source_chapter "${got}" ≠ folder number ${Number(dirCh)}`);
    }
  }
  if (isKnowledgeCheck && !/^source_chapters:\s*["']?\d+-\d+["']?\s*$/m.test(fm)) errors.push(`${rel}: knowledge check needs \`source_chapters:\` like "1-6"`);
  if (isNumberedSection) {
    if (!/^source_section:\s*["']?\d+\.\d+["']?\s*$/m.test(fm)) errors.push(`${rel}: numbered section needs \`source_section:\` like "1.1"`);
    else {
      const ch = basename(dirname(file)).match(/^(\d+)-/)?.[1];
      const sec = basename(file).match(/^(\d+)-/)?.[1];
      const got = val(fm, 'source_section');
      if (ch && sec && got && got !== `${Number(ch)}.${Number(sec)}`) errors.push(`${rel}: source_section "${got}" ≠ path ${Number(ch)}.${Number(sec)}`);
    }
  }
}

const isKC = (n, depth) => depth === 2 && /^knowledge-check-\d{2}-\d{2}$/.test(n);

function checkDir(dir, depth) {
  const rel = relative(ROOT, dir) || 'content';
  const entries = readdirSync(dir, { withFileTypes: true }).filter((e) => !IGNORED.has(e.name));
  const folders = entries.filter((e) => e.isDirectory()).map((e) => e.name);
  const pages = entries.filter((e) => e.isFile() && e.name.endsWith('.md') && e.name !== '_index.md').map((e) => e.name.replace(/\.md$/, ''));

  // --- numeric prefixes: all-or-none, zero-padded, sequential ---------------
  const nonIndex = [...folders, ...pages].filter((n) => !isKC(n, depth));
  const prefixed = nonIndex.filter((n) => /^\d+-/.test(n));
  if (prefixed.length) {
    for (const n of nonIndex) if (!/^\d{2}-/.test(n)) errors.push(`${rel}: '${n}' — siblings are numbered, so this needs a zero-padded prefix too`);
    const nums = prefixed.map((n) => parseInt(n.slice(0, 2), 10)).sort((a, b) => a - b);
    nums.forEach((num, i) => { if (num !== i + 1) errors.push(`${rel}: numeric prefixes ${JSON.stringify(nums)} — expected sequential 1…${nums.length}`); });
  }

  // --- weights present + sequential among ordered children ------------------
  if (depth === 2 || depth === 3) {
    const ordered = [];
    for (const fdr of folders) { const idx = join(dir, fdr, '_index.md'); if (existsSync(idx)) ordered.push({ name: fdr, w: Number(val(frontOf(readFileSync(idx, 'utf8')), 'weight')) }); }
    for (const p of pages) ordered.push({ name: p, w: Number(val(frontOf(readFileSync(join(dir, p + '.md'), 'utf8')), 'weight')) });
    const missing = ordered.filter((o) => Number.isNaN(o.w));
    for (const m of missing) errors.push(`${rel}/${m.name}: missing \`weight:\` (Hugo sidebar order)`);
    const weights = ordered.filter((o) => !Number.isNaN(o.w)).map((o) => o.w).sort((a, b) => a - b);
    weights.forEach((w, i) => { if (w !== i + 1) { errors.push(`${rel}: weights ${JSON.stringify(weights)} — expected sequential 1…${weights.length}`); } });
  }

  // --- required frontmatter -------------------------------------------------
  for (const p of pages) checkFront(join(dir, p + '.md'), {
    isBookRoot: false,
    isChapterIndex: false,
    isNumberedSection: depth === 3 && /^\d{2}-/.test(p),
    isKnowledgeCheck: isKC(p, depth),
  });
  if (existsSync(join(dir, '_index.md'))) checkFront(join(dir, '_index.md'), {
    isBookRoot: depth === 2,
    isChapterIndex: depth === 3,
    isNumberedSection: false,
    isKnowledgeCheck: false,
  });

  for (const fdr of folders) checkDir(join(dir, fdr), depth + 1);
}

checkDir(ROOT, START_DEPTH);
if (errors.length) {
  console.error(`✖ content validation failed (${errors.length}):\n`);
  for (const e of errors) console.error('  · ' + e);
  process.exit(1);
}
console.log('✓ content structure valid: weights sequential, prefixes sequential, frontmatter complete');
