/**
 * convert-book.mjs — convert a whole Nextra book directory to Hugo.
 *
 * Walks the source book, reads each folder's `_meta.js` to assign Hugo
 * `weight` (reading order) and `linkTitle` (sidebar label), renames
 * `index.mdx` → `_index.md`, and adds `cascade: {type: docs}` to the book
 * root so every page inside gets the docs sidebar. Content transformation is
 * delegated to lib-convert.mjs. Read-only w.r.t. the source.
 *
 * Usage: node tools/convert-book.mjs <src-book-dir> <dest-book-dir>
 *   e.g. node tools/convert-book.mjs ../content/math/prealgebra content/math/prealgebra
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { convertMdx } from './lib-convert.mjs';

const [, , srcDir, destDir] = process.argv;
if (!srcDir || !destDir) {
  console.error('usage: node tools/convert-book.mjs <src-book-dir> <dest-book-dir>');
  process.exit(1);
}

async function loadMeta(dir) {
  const p = join(dir, '_meta.js');
  if (!existsSync(p)) return null;
  const mod = await import(pathToFileURL(resolve(p)).href + '?t=' + Date.now());
  return mod.default;
}

/** Insert keys into a `---\n…\n---\n` frontmatter block if not already set. */
function injectFront(front, lines) {
  const close = front.lastIndexOf('\n---');
  if (close === -1) return `---\n${lines.join('\n')}\n---\n`;
  return front.slice(0, close) + '\n' + lines.join('\n') + front.slice(close);
}

const frontTitle = (front) => {
  const m = front.match(/^title:\s*(.+)$/m);
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : '';
};

let filesOut = 0;
const totals = {};

async function convertFile(srcFile, destFile, { weight, linkTitle, cascade }) {
  const { front, body, counts } = convertMdx(readFileSync(srcFile, 'utf8'));
  for (const [k, v] of Object.entries(counts)) totals[k] = (totals[k] || 0) + v;
  const add = [];
  if (weight !== undefined) add.push(`weight: ${weight}`);
  if (linkTitle && linkTitle !== frontTitle(front)) add.push(`linkTitle: ${JSON.stringify(linkTitle)}`);
  if (cascade) add.push('cascade:', '  type: docs');
  const out = injectFront(front, add) + '\n' + body;
  mkdirSync(dirname(destFile), { recursive: true });
  writeFileSync(destFile, out);
  filesOut++;
}

async function walk(src, dest, isBookRoot) {
  const meta = await loadMeta(src);
  const keys = meta ? Object.keys(meta) : [];
  // index.mdx -> _index.md
  if (existsSync(join(src, 'index.mdx'))) {
    const idxTitle = meta && typeof meta.index === 'string' ? meta.index
      : meta && meta.index && meta.index.title ? meta.index.title : undefined;
    await convertFile(join(src, 'index.mdx'), join(dest, '_index.md'),
      { linkTitle: idxTitle, cascade: isBookRoot });
  }
  // ordered entries
  let weight = 0;
  for (const key of keys) {
    if (key === 'index') continue;
    weight++;
    const title = typeof meta[key] === 'string' ? meta[key] : meta[key]?.title;
    const subdir = join(src, key);
    if (existsSync(subdir) && statSync(subdir).isDirectory()) {
      // a chapter: its _index gets this weight; recurse
      await walkChapter(subdir, join(dest, key), weight, title);
    } else if (existsSync(join(src, key + '.mdx'))) {
      await convertFile(join(src, key + '.mdx'), join(dest, key + '.md'), { weight, linkTitle: title });
    } else {
      console.warn(`  ! _meta key "${key}" has no file or folder in ${src}`);
    }
  }
}

async function walkChapter(src, dest, weight, chapterTitle) {
  const meta = await loadMeta(src);
  const keys = meta ? Object.keys(meta) : [];
  // chapter index.mdx -> _index.md, carrying the chapter's own weight.
  // The chapter node is labelled by the CHAPTER name (the book's _meta value,
  // = the frontmatter title), NOT the chapter's own _meta `index` value
  // ("About This Chapter" — that was Nextra's label for the overview sub-item,
  // which Hugo folds into the chapter node itself).
  if (existsSync(join(src, 'index.mdx'))) {
    await convertFile(join(src, 'index.mdx'), join(dest, '_index.md'), { weight, linkTitle: chapterTitle });
  }
  let w = 0;
  for (const key of keys) {
    if (key === 'index') continue;
    w++;
    const title = typeof meta[key] === 'string' ? meta[key] : meta[key]?.title;
    if (existsSync(join(src, key + '.mdx'))) {
      await convertFile(join(src, key + '.mdx'), join(dest, key + '.md'), { weight: w, linkTitle: title });
    } else {
      console.warn(`  ! _meta key "${key}" has no file in ${src}`);
    }
  }
}

await walk(srcDir, destDir, true);
console.log(`\nconverted ${filesOut} files`);
console.log('component instances:', JSON.stringify(totals));
