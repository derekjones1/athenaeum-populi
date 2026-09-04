/** Verify one global Pagefind index covers every rendered textbook. */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { parseCliArgs } from '../lib/cli.mjs';
import { parseFrontmatter, shortcodes, walkFiles } from '../lib/content.mjs';
import { MAIN_CONTENT_RE } from '../lib/html.mjs';
import { gunzipSync } from 'node:zlib';
import { join, relative, sep } from 'node:path';

/** Graded-state control text no exercise should contribute to a search excerpt. */
const CONTROL_TEXT = ['Mark as correct', 'Review again', 'Check bins', 'Place here', 'Show model answer'];

/**
 * The first self-check in the corpus whose model answer opens with a phrase
 * the page prints nowhere else — so finding that phrase in the page's index
 * fragment can only mean the model answer leaked. A model answer that
 * restates its section's own sentence is skipped: the phrase would be page
 * prose as well as key, and prove nothing either way.
 */
function selfcheckProbe(files, routeOf) {
  for (const file of files) {
    const source = readFileSync(file, 'utf8');
    const checks = [...shortcodes(source, 'selfcheck')].filter((sc) => sc.closed);
    if (!checks.length) continue;
    let prose = source;
    for (const sc of checks) prose = prose.slice(0, sc.index) + ' '.repeat(sc.end - sc.index) + prose.slice(sc.end);
    for (const sc of checks) {
      const model = sc.inner.split(/^[ \t]*===CHECKS===[ \t]*$/m)[0];
      const words = model.replace(/<[^>]+>/g, ' ').replace(/[*_`]/g, '').split(/\s+/).filter(Boolean);
      if (words.length < 6) continue;
      const phrase = words.slice(0, 6).join(' ');
      if (prose.includes(phrase)) continue;
      return { route: routeOf(file), title: parseFrontmatter(source).attributes.title, phrase };
    }
  }
  return null;
}

/**
 * Every failure here used to be a raw `throw`, so this tool alone reported a
 * broken search index as an uncaught Node stack trace while its three
 * `check:build` siblings printed `✖ …` with `· …` detail. Same convention, same
 * exit-code discipline: 1 for "the thing being checked is wrong".
 */
function main() {
  const cli = parseCliArgs(process.argv.slice(2), { positional: { max: 2, name: 'build root' } });
  const root = cli.positional[0] ?? 'public';
  const contentRoot = cli.positional[1] ?? 'content';
  const pagefindDir = join(root, 'pagefind');
  const entryPath = join(pagefindDir, 'pagefind-entry.json');
  const fragmentDir = join(pagefindDir, 'fragment');
  // The book list (reporting + sanity floor) also derives from SOURCE. A
  // hardcoded allowlist silently stopped covering Precalculus the day it
  // was published; the coverage contract itself is the all-routes check
  // below. Every shelf's every book, not just content/math — a shelf with
  // no books yet (a new subject area whose landing page exists but has no
  // authored textbook) is fine and contributes none, not a failure.
  const shelves = readdirSync(contentRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  if (!shelves.length) throw new Error(`No content shelves found under ${contentRoot}`);
  const requiredBooks = shelves.flatMap((shelfName) => readdirSync(join(contentRoot, shelfName), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => `${shelfName}/${entry.name}`))
    .sort();
  if (!requiredBooks.length) throw new Error(`No authored textbook directories under ${contentRoot}`);

  if (!existsSync(entryPath)) throw new Error(`Pagefind index not found: ${entryPath}`);
  const entry = JSON.parse(readFileSync(entryPath, 'utf8'));
  const languages = Object.entries(entry.languages || {});
  if (languages.length !== 1 || languages[0][0] !== 'en') throw new Error('Expected one global English Pagefind index');

  const fragmentFiles = readdirSync(fragmentDir).filter((name) => name.endsWith('.pf_fragment'));
  const normalizeUrl = (url) => {
    const pathname = new URL(url, 'https://athenaeumpopuli.org').pathname;
    return pathname.endsWith('/') ? pathname : `${pathname}/`;
  };
  // Each fragment is a gzipped `pagefind_dcd` + JSON record whose `content`
  // is the indexed text of one page — the text the exclusion list below is
  // supposed to have shaped.
  const contentByUrl = new Map(fragmentFiles.map((name) => {
    const decoded = gunzipSync(readFileSync(join(fragmentDir, name))).toString('utf8');
    const fragment = JSON.parse(decoded.replace(/^pagefind_dcd/, ''));
    return [normalizeUrl(fragment.url), fragment.content ?? ''];
  }));
  const normalizedUrls = new Set(contentByUrl.keys());
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
  const routeOf = (file) => {
    const rel = relative(contentRoot, file).split(sep).join('/');
    return rel === '_index.md'
      ? '/'
      : rel.endsWith('/_index.md')
        ? `/${rel.slice(0, -'/_index.md'.length)}/`
        : `/${rel.slice(0, -'.md'.length)}/`;
  };
  const authored = walkFiles(contentRoot, { filter: (name) => name.endsWith('.md') });
  const expected = authored.map(routeOf);
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

  // The exclusion list in package.json's `search:index` is a claim about
  // what the index does NOT hold, and until this check nothing read the
  // index to see. Two things it must keep out: the graded-state control
  // text every exercise prints (the self-check marks, the sort-bins buttons)
  // and, above all, a self-check's model answer — a leak that would put
  // every critical-thinking key into search excerpts. And one thing it must
  // keep IN: the page's own body text, or an over-broad selector has eaten
  // the content the index exists to serve.
  for (const [url, content] of contentByUrl) {
    for (const phrase of CONTROL_TEXT) {
      if (content.includes(phrase)) {
        throw new Error(`${url} indexes control text "${phrase}" — add its selector to search:index --exclude-selectors in package.json`);
      }
    }
  }
  const probe = selfcheckProbe(authored, routeOf);
  if (probe) {
    const indexed = contentByUrl.get(probe.route) ?? '';
    if (indexed.includes(probe.phrase)) {
      throw new Error(`${probe.route} indexes a self-check model answer ("${probe.phrase}…") — .ap-selfcheck-answer must stay in search:index --exclude-selectors`);
    }
    if (probe.title && !indexed.includes(probe.title)) {
      throw new Error(`${probe.route} is indexed without its own body text (title "${probe.title}" not found) — an exclusion selector is eating page content`);
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

  console.log(`✓ Pagefind: one global index, ${pageCount} pages, all ${expected.length} authored routes covered across ${requiredBooks.length} books (${requiredBooks.join(', ')})`);
}

try {
  main();
} catch (error) {
  console.error(`✖ Pagefind check failed:`);
  console.error(`  · ${error.message}`);
  process.exit(1);
}
