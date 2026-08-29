/**
 * Repository-wide content verification.
 *
 * Runs the real per-page verifier over every Markdown file, then checks
 * cross-file corpus invariants that a single-page pass cannot see:
 *   - published project docs cannot regress to MDX/Nextra instructions
 *   - every book landing lists every chapter
 *   - every chapter landing lists every regular section
 *
 * Usage: node tools/verify/verify-all.mjs [content-root]
 */
import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
} from 'node:fs';
import { walkMarkdown } from '../lib/content.mjs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.argv[2] || 'content';
if (!existsSync(root)) throw new Error(`Content root not found: ${root}`);

const files = walkMarkdown(root);
const verify = spawnSync(process.execPath, ['tools/verify/verify-section.mjs', ...files], {
  encoding: 'utf8',
  maxBuffer: 32 * 1024 * 1024,
});
if (verify.error) throw verify.error;
if (verify.status !== 0) {
  process.stdout.write(verify.stdout || '');
  process.stderr.write(verify.stderr || '');
  process.exit(verify.status ?? 1);
}

const failures = [];
const publishedDocs = join(root, 'docs');
if (existsSync(publishedDocs)) {
  const stale = [
    ['MDX file paths', /(?:^|[\s`'"])[\w./-]+\.mdx\b/im],
    ['Nextra imports', /\bfrom\s+['"]nextra\//i],
    ['Nextra metadata files', /\b_meta\.js\b/i],
    ['React component authoring', /<(?:FillIn|MultipleChoice|GraphPlot|Graph|Figure)\b/],
  ];
  for (const file of walkMarkdown(publishedDocs)) {
    const source = readFileSync(file, 'utf8');
    for (const [label, pattern] of stale) {
      if (pattern.test(source)) failures.push(`${file}: stale ${label}`);
    }
  }
}

function overviewCount(source, heading) {
  const match = new RegExp(`^## ${heading}[ \\t]*$`, 'm').exec(source);
  if (!match) return null;
  const tail = source.slice(match.index + match[0].length);
  const end = /^##\s/m.exec(tail);
  const block = tail.slice(0, end?.index ?? tail.length);
  return [...block.matchAll(/^- \*\*[^*]+\*\*/gm)].length;
}

const mathRoot = join(root, 'math');
if (existsSync(mathRoot)) {
  for (const bookName of readdirSync(mathRoot)) {
    const book = join(mathRoot, bookName);
    if (!statSync(book).isDirectory()) continue;
    const chapters = readdirSync(book)
      .filter((name) => /^\d{2}-/.test(name) && statSync(join(book, name)).isDirectory())
      .sort();
    const bookIndex = join(book, '_index.md');
    if (existsSync(bookIndex)) {
      const listed = overviewCount(readFileSync(bookIndex, 'utf8'), 'Chapters');
      if (listed !== null && listed !== chapters.length) {
        failures.push(`${bookIndex}: Chapters overview lists ${listed}; filesystem has ${chapters.length}`);
      }
    }

    for (const chapterName of chapters) {
      const chapter = join(book, chapterName);
      const sections = readdirSync(chapter)
        .filter((name) => /^\d{2}-.*\.md$/.test(name))
        .length;
      const chapterIndex = join(chapter, '_index.md');
      if (!existsSync(chapterIndex)) continue;
      const listed = overviewCount(readFileSync(chapterIndex, 'utf8'), 'Sections');
      if (listed !== null && listed !== sections) {
        failures.push(`${chapterIndex}: Sections overview lists ${listed}; filesystem has ${sections}`);
      }
    }
  }
}

if (failures.length) {
  console.error(`✖ corpus verification failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`  · ${failure}`));
  process.exit(1);
}

console.log(`✓ content verification: ${files.length} Markdown files self-grade and corpus overviews match`);
