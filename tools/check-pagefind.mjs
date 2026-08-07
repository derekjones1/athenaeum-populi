/** Verify one global Pagefind index covers every migrated textbook. */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { walkFiles } from './lib-content.mjs';
import { MAIN_CONTENT_RE } from './lib-html.mjs';
import { gunzipSync } from 'node:zlib';
import { join, relative, sep } from 'node:path';

/**
 * Every failure here used to be a raw `throw`, so this tool alone reported a
 * broken search index as an uncaught Node stack trace while its three
 * `check:build` siblings printed `✖ …` with `· …` detail. Same convention, same
 * exit-code discipline: 1 for "the thing being checked is wrong".
 */
function main() {
  const root = process.argv[2] || 'public';
  const pagefindDir = join(root, 'pagefind');
  const entryPath = join(pagefindDir, 'pagefind-entry.json');
  const fragmentDir = join(pagefindDir, 'fragment');
  const requiredBooks = ['prealgebra', 'elementary-algebra', 'intermediate-algebra'];

  if (!existsSync(entryPath)) throw new Error(`Pagefind index not found: ${entryPath}`);
  const entry = JSON.parse(readFileSync(entryPath, 'utf8'));
  const languages = Object.entries(entry.languages || {});
  if (languages.length !== 1 || languages[0][0] !== 'en') throw new Error('Expected one global English Pagefind index');

  const fragmentFiles = readdirSync(fragmentDir).filter((name) => name.endsWith('.pf_fragment'));
  const urls = fragmentFiles.map((name) => {
    const decoded = gunzipSync(readFileSync(join(fragmentDir, name))).toString('utf8');
    return JSON.parse(decoded.replace(/^pagefind_dcd/, '')).url;
  });
  const normalizedUrls = new Set(urls.map((url) => {
    const pathname = new URL(url, 'https://athenaeumpopuli.org').pathname;
    return pathname.endsWith('/') ? pathname : `${pathname}/`;
  }));
  const pageCount = languages[0][1].page_count;
  if (fragmentFiles.length !== pageCount) throw new Error(`Pagefind says ${pageCount} pages but emitted ${fragmentFiles.length} fragments`);

  for (const book of requiredBooks) {
    const prefix = `/math/${book}/`;
    const bookRoot = join(root, 'math', book);
    if (!existsSync(bookRoot)) throw new Error(`Built textbook directory missing: ${bookRoot}`);
    const expected = [];
    for (const file of walkFiles(bookRoot, { filter: (name) => name === 'index.html' })) {
      const html = readFileSync(file, 'utf8');
      if (!MAIN_CONTENT_RE.test(html)) continue;
      const rel = relative(root, file).split(sep).join('/').replace(/index\.html$/, '');
      expected.push(`/${rel}`);
    }
    const missing = expected.filter((url) => !normalizedUrls.has(url));
    if (missing.length) {
      throw new Error(`Global index is missing ${missing.length}/${expected.length} pages from ${prefix} (first: ${missing[0]})`);
    }
  }

  // Directory-shaped, so it stays a local recursion rather than a walkFiles
  // filter: it reports the offending DIRECTORY and prunes at the one legitimate
  // index instead of descending into thousands of fragment files.
  function findNestedPagefind(dir) {
    const found = [];
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (!entry.isDirectory()) continue;
      if (entry.name === 'pagefind' && path !== pagefindDir) found.push(path);
      else if (path !== pagefindDir) found.push(...findNestedPagefind(path));
    }
    return found;
  }
  const nested = findNestedPagefind(root);
  if (nested.length) throw new Error(`Found per-book Pagefind indexes: ${nested.join(', ')}`);

  console.log(`✓ Pagefind: one global index, ${pageCount} pages, all ${requiredBooks.length} books covered`);
}

try {
  main();
} catch (error) {
  console.error(`✖ Pagefind check failed:`);
  console.error(`  · ${error.message}`);
  process.exit(1);
}
