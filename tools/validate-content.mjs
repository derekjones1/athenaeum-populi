/**
 * Content-structure validator — Hugo edition.
 * Hugo orders by frontmatter `weight`, so this checks weights, required
 * frontmatter, sequential numeric prefixes, source-number cross-checks,
 * landing-page inventories, and Knowledge Check coverage/ranges.
 *
 * Hierarchy: content/ (0) → subject/ (1) → book/ (2) → chapter/ (3).
 * Section landings are `_index.md`; sections are `NN-slug.md`.
 *
 * Zero deps. `npm run validate`. Exits non-zero with a list of problems.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, basename, dirname, relative } from 'node:path';
// The one objectives-callout parser, shared with the content lint and the
// source audit so the three tools never diagnose the callout differently.
import { parseObjectivesCallout } from './lib-openstax-source.mjs';

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
const rangeOf = (value) => {
  const match = String(value || '').match(/^(\d+)-(\d+)$/);
  if (!match) return null;
  const range = [Number(match[1]), Number(match[2])];
  return range[0] <= range[1] ? range : null;
};
const normalizedText = (value) => String(value || '').replace(/\s+/g, ' ').trim();

function orderedLandingTitles(src, heading) {
  const start = new RegExp(`^## ${heading}\\s*$`, 'm').exec(src);
  if (!start) return null;
  const remainder = src.slice(start.index + start[0].length);
  const nextHeading = /^##\s+/m.exec(remainder);
  const section = nextHeading ? remainder.slice(0, nextHeading.index) : remainder;
  return [...section.matchAll(/^-\s+\*\*([\s\S]*?)\*\*\s+—/gm)]
    .map((match) => normalizedText(match[1]));
}

function expectedChildTitles(dir, entries) {
  return entries
    .map((name) => {
      const file = name.endsWith('.md') ? join(dir, name) : join(dir, name, '_index.md');
      if (!existsSync(file)) return null;
      const fm = frontOf(readFileSync(file, 'utf8'));
      return { name, title: normalizedText(val(fm, 'title')) };
    })
    .filter((entry) => entry?.title)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((entry) => entry.title);
}

function checkKnowledgeCheck(file, fm, rel) {
  const sourceRange = rangeOf(val(fm, 'source_chapters'));
  if (!sourceRange) {
    errors.push(`${rel}: knowledge check needs \`source_chapters:\` like "1-6"`);
    return;
  }

  const filenameMatch = basename(file).match(/^knowledge-check-(\d{2})-(\d{2})\.md$/);
  const filenameRange = filenameMatch
    ? [Number(filenameMatch[1]), Number(filenameMatch[2])]
    : null;
  if (!filenameRange || filenameRange[0] !== sourceRange[0] || filenameRange[1] !== sourceRange[1]) {
    errors.push(`${rel}: filename range must match source_chapters "${sourceRange.join('-')}"`);
  }

  const title = val(fm, 'title') || '';
  const titleMatch = title.match(/Chapters?\s+(\d+)\s*[–-]\s*(\d+)/i);
  const titleRange = titleMatch ? [Number(titleMatch[1]), Number(titleMatch[2])] : null;
  if (!titleRange || titleRange[0] !== sourceRange[0] || titleRange[1] !== sourceRange[1]) {
    errors.push(`${rel}: title range must match source_chapters "${sourceRange.join('-')}"`);
  }

  const src = readFileSync(file, 'utf8');
  const chapterHeadings = [...src.matchAll(/^## Chapter\s+(\d+)\b/gm)].map((match) => Number(match[1]));
  const expectedChapters = Array.from(
    { length: sourceRange[1] - sourceRange[0] + 1 },
    (_, index) => sourceRange[0] + index,
  );
  if (JSON.stringify(chapterHeadings) !== JSON.stringify(expectedChapters)) {
    errors.push(`${rel}: chapter headings ${JSON.stringify(chapterHeadings)} must exactly cover ${JSON.stringify(expectedChapters)}`);
  }

  const sectionHeadings = [...src.matchAll(/^###\s+(\d+)\.(\d+)\s+(.+?)\s*$/gm)]
    .map((match) => ({
      id: `${Number(match[1])}.${Number(match[2])}`,
      title: normalizedText(match[3]),
    }));
  const expectedSections = [];
  const bookDir = dirname(file);
  for (const chapter of expectedChapters) {
    const chapterPrefix = String(chapter).padStart(2, '0') + '-';
    const chapterDir = readdirSync(bookDir, { withFileTypes: true })
      .find((entry) => entry.isDirectory() && entry.name.startsWith(chapterPrefix));
    if (!chapterDir) {
      errors.push(`${rel}: no authored chapter directory found for Chapter ${chapter}`);
      continue;
    }
    for (const page of readdirSync(join(bookDir, chapterDir.name)).sort()) {
      const match = page.match(/^(\d{2})-.*\.md$/);
      if (match) {
        const sectionFm = frontOf(readFileSync(join(bookDir, chapterDir.name, page), 'utf8'));
        expectedSections.push({
          id: `${chapter}.${Number(match[1])}`,
          title: normalizedText(val(sectionFm, 'title')),
        });
      }
    }
  }
  if (JSON.stringify(sectionHeadings) !== JSON.stringify(expectedSections)) {
    errors.push(`${rel}: section headings and titles must exactly match the authored sections in Chapters ${sourceRange.join('-')}`);
  }
}

function checkFront(file, { isBookRoot, isChapterIndex, isNumberedSection, isKnowledgeCheck }) {
  const rel = relative(ROOT, file);
  const src = readFileSync(file, 'utf8');
  const fm = frontOf(src);
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
  if (isKnowledgeCheck) checkKnowledgeCheck(file, fm, rel);
  if (isNumberedSection) {
    if (!/^source_section:\s*["']?\d+\.\d+["']?\s*$/m.test(fm)) errors.push(`${rel}: numbered section needs \`source_section:\` like "1.1"`);
    else {
      const ch = basename(dirname(file)).match(/^(\d+)-/)?.[1];
      const sec = basename(file).match(/^(\d+)-/)?.[1];
      const got = val(fm, 'source_section');
      if (ch && sec && got && got !== `${Number(ch)}.${Number(sec)}`) errors.push(`${rel}: source_section "${got}" ≠ path ${Number(ch)}.${Number(sec)}`);
    }
    // The opening callout states the objectives as a Markdown list, one item
    // per objective. The content lint keys the `## Practice` block's `### `
    // groups to that list, and prose objectives cannot be split reliably
    // because an objective may itself contain a comma.
    const objectives = parseObjectivesCallout(src);
    if (objectives === null) {
      errors.push(`${rel}: numbered section needs a \`**By the end of this section, you will be able to:**\` objectives callout`);
    } else if (!objectives.length) {
      errors.push(`${rel}: objectives callout must list one objective per Markdown list item`);
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

  // --- non-overlapping Knowledge Check ranges --------------------------------
  if (depth === 2) {
    const checks = pages
      .filter((page) => isKC(page, depth))
      .map((page) => {
        const file = join(dir, page + '.md');
        const fm = frontOf(readFileSync(file, 'utf8'));
        return {
          page,
          range: rangeOf(val(fm, 'source_chapters')),
          weight: Number(val(fm, 'weight')),
        };
      })
      .filter((entry) => entry.range)
      .sort((a, b) => a.range[0] - b.range[0]);
    for (let i = 1; i < checks.length; i++) {
      if (checks[i].range[0] <= checks[i - 1].range[1]) {
        errors.push(`${rel}: Knowledge Check ranges overlap (${checks[i - 1].page} and ${checks[i].page})`);
      }
    }
    for (const check of checks) {
      const endingPrefix = String(check.range[1]).padStart(2, '0') + '-';
      const endingChapter = folders.find((folder) => folder.startsWith(endingPrefix));
      if (!endingChapter) continue;
      const chapterFm = frontOf(readFileSync(join(dir, endingChapter, '_index.md'), 'utf8'));
      const chapterWeight = Number(val(chapterFm, 'weight'));
      if (Number.isFinite(chapterWeight)
        && Number.isFinite(check.weight)
        && check.weight !== chapterWeight + 1) {
        errors.push(`${rel}/${check.page}: weight ${check.weight} must place it immediately after Chapter ${check.range[1]} (weight ${chapterWeight})`);
      }
    }
  }

  // --- required frontmatter -------------------------------------------------
  for (const p of pages) checkFront(join(dir, p + '.md'), {
    isBookRoot: false,
    isChapterIndex: false,
    isNumberedSection: depth === 3 && /^\d{2}-/.test(p),
    isKnowledgeCheck: isKC(p, depth),
  });
  if (existsSync(join(dir, '_index.md'))) {
    const indexFile = join(dir, '_index.md');
    checkFront(indexFile, {
      isBookRoot: depth === 2,
      isChapterIndex: depth === 3,
      isNumberedSection: false,
      isKnowledgeCheck: false,
    });

    if (depth === 2 || depth === 3) {
      const src = readFileSync(indexFile, 'utf8');
      const heading = depth === 2 ? 'Chapters' : 'Sections';
      const listed = orderedLandingTitles(src, heading);
      const expected = depth === 2
        ? expectedChildTitles(dir, folders.filter((name) => /^\d{2}-/.test(name)))
        : expectedChildTitles(dir, entries
          .filter((entry) => entry.isFile() && /^\d{2}-.*\.md$/.test(entry.name))
          .map((entry) => entry.name));
      if (listed == null) {
        errors.push(`${rel}/_index.md: missing \`## ${heading}\` list`);
      } else if (JSON.stringify(listed) !== JSON.stringify(expected)) {
        errors.push(`${rel}/_index.md: ${heading.toLowerCase()} list ${JSON.stringify(listed)} must match authored titles ${JSON.stringify(expected)}`);
      }
    }
  }

  for (const fdr of folders) checkDir(join(dir, fdr), depth + 1);
}

checkDir(ROOT, START_DEPTH);
if (errors.length) {
  console.error(`✖ content validation failed (${errors.length}):\n`);
  for (const e of errors) console.error('  · ' + e);
  process.exit(1);
}
console.log('✓ content structure valid: weights sequential, prefixes sequential, frontmatter complete');
