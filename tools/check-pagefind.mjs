/** Verify one global Pagefind index covers every rendered textbook. */
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
  const contentRoot = process.argv[3] || 'content';
  const pagefindDir = join(root, 'pagefind');
  const entryPath = join(pagefindDir, 'pagefind-entry.json');
  const fragmentDir = join(pagefindDir, 'fragment');
  // The book list (reporting + sanity floor) also derives from SOURCE. A
  // hardcoded allowlist silently stopped covering Precalculus the day it
  // was published; the coverage contract itself is the all-routes check
  // below.
  const contentMath = join(contentRoot, 'math');
  if (!existsSync(contentMath)) throw new Error(`Content subject directory missing: ${contentMath}`);
  const requiredBooks = readdirSync(contentMath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  if (!requiredBooks.length) throw new Error(`No authored textbook directories under ${contentMath}`);

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

  // Expected PAGE routes come from source content — ALL of it, not just the
  // math books. Walking public/ was one half of the self-reference (a page
  // dropped from both the build and the index also dropped from the
  // expectations); scoping expectations to content/math was the other (the
  // homepage, About, or a future subject could vanish from search without
  // failing). Every authored Markdown file renders at its path-derived
  // route: no slug/url front-matter overrides exist in this corpus, and the
  // derived set was verified route-for-route against a real build when this
  // landed. The 404 page is layouts-generated, not authored, so it carries
  // no expectation.
  const expected = [];
  for (const file of walkFiles(contentRoot, { filter: (name) => name.endsWith('.md') })) {
    const rel = relative(contentRoot, file).split(sep).join('/');
    const route = rel === '_index.md'
      ? '/'
      : rel.endsWith('/_index.md')
        ? `/${rel.slice(0, -'/_index.md'.length)}/`
        : `/${rel.slice(0, -'.md'.length)}/`;
    expected.push(route);
  }
  if (!expected.length) throw new Error(`No authored pages found under ${contentRoot}`);
  const missingBuilt = expected.filter((url) => {
    const builtPage = join(root, url.slice(1), 'index.html');
    return !existsSync(builtPage) || !MAIN_CONTENT_RE.test(readFileSync(builtPage, 'utf8'));
  });
  if (missingBuilt.length) {
    throw new Error(`Build is missing ${missingBuilt.length}/${expected.length} authored pages (first: ${missingBuilt[0]})`);
  }
  const missing = expected.filter((url) => !normalizedUrls.has(url));
  if (missing.length) {
    throw new Error(`Global index is missing ${missing.length}/${expected.length} authored pages (first: ${missing[0]})`);
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

  console.log(`✓ Pagefind: one global index, ${pageCount} pages, all ${expected.length} authored routes covered across ${requiredBooks.length} books (${requiredBooks.join(', ')})`);
}

try {
  main();
} catch (error) {
  console.error(`✖ Pagefind check failed:`);
  console.error(`  · ${error.message}`);
  process.exit(1);
}
