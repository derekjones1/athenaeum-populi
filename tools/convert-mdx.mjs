/**
 * convert-mdx.mjs — convert ONE Nextra MDX file to Hugo Markdown.
 * Thin CLI over lib-convert.mjs. For a whole book use convert-book.mjs.
 *
 * Usage: node tools/convert-mdx.mjs <src.mdx> <dest.md>
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { convertMdx } from './lib-convert.mjs';

const [, , src, dest] = process.argv;
if (!src || !dest) {
  console.error('usage: node tools/convert-mdx.mjs <src.mdx> <dest.md>');
  process.exit(1);
}
const { front, body } = convertMdx(readFileSync(src, 'utf8'));
mkdirSync(dirname(dest), { recursive: true });
writeFileSync(dest, front + '\n' + body);
console.log(`converted ${src} -> ${dest}`);
