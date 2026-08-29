/**
 * Verify the search-listing surface of every built page: the composed
 * <title>, the canonical link, and the JSON-LD emitted by
 * layouts/_partials/seo-jsonld.html.
 *
 * Per page (all of public/, 404 excluded):
 *   - exactly one non-empty <title>, suffixed "| <site>" (home uses its own
 *     fixed form), and unique across the corpus — two pages sharing a title
 *     means the composition lost the context that disambiguates them;
 *   - a canonical <link> pointing at the page's own route;
 *   - every ld+json block parses, contains no leftover HTML entities
 *     (the plainify/htmlUnescape boundary regressing), and:
 *       · home carries a WebSite node;
 *       · every other page carries exactly one BreadcrumbList whose last
 *         item is the page itself, whose other items are real routes, and
 *         whose positions run 1..n;
 *       · book pages carry their entity node — Book on the book root,
 *         LearningResource / Quiz inside it.
 */
import { existsSync, readFileSync } from 'node:fs';
import { relative, sep } from 'node:path';
import { walkFiles } from './lib-content.mjs';

const outputDir = process.argv[2] || 'public';
if (!existsSync(outputDir)) throw new Error(`Built site not found: ${outputDir} (run npm run build first)`);

const SITE_TITLE = 'Athenaeum Populi';
const HOME_TITLE = `${SITE_TITLE} – Free Interactive Textbooks`;

function routeOf(file) {
  let path = '/' + relative(outputDir, file).split(sep).join('/');
  if (path === '/index.html') return '/';
  if (path.endsWith('/index.html')) return path.slice(0, -10);
  if (path.endsWith('.html')) return path.slice(0, -5) + '/';
  return null;
}

const decodeEntities = (s) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'");

const pages = walkFiles(outputDir)
  .filter((file) => file.endsWith('.html') && !file.endsWith(`${sep}404.html`))
  .map((file) => ({ file, route: routeOf(file) }))
  .filter((page) => page.route);

const routes = new Set(pages.map((page) => page.route));
const titles = new Map(); // title -> [routes]
const errors = [];
const fail = (route, message) => errors.push(`${route}  ${message}`);
let breadcrumbs = 0;
let entities = 0;

for (const { file, route } of pages) {
  const html = readFileSync(file, 'utf8');

  // Hugo alias stubs (renamed pages) are meta-refresh redirects whose
  // canonical deliberately points at the target; they carry no listing
  // surface of their own.
  if (/<meta http-equiv="?refresh"?/i.test(html)) continue;

  // --- <title> ---------------------------------------------------------
  const titleTags = [...html.matchAll(/<title>([^<]*)<\/title>/g)].map((m) => decodeEntities(m[1]).trim());
  if (titleTags.length !== 1) fail(route, `expected exactly one <title>, found ${titleTags.length}`);
  const title = titleTags[0] ?? '';
  if (route === '/') {
    if (title !== HOME_TITLE) fail(route, `home <title> is ${JSON.stringify(title)}, expected ${JSON.stringify(HOME_TITLE)}`);
  } else if (!title || !title.endsWith(` | ${SITE_TITLE}`) || title === ` | ${SITE_TITLE}`) {
    fail(route, `<title> ${JSON.stringify(title)} is not a non-empty "… | ${SITE_TITLE}"`);
  }
  if (title) titles.set(title, [...(titles.get(title) ?? []), route]);

  // --- canonical -------------------------------------------------------
  const canonical = html.match(/<link rel="?canonical"? href="?([^"\s>]+)"?/)?.[1];
  if (!canonical) {
    fail(route, 'missing canonical <link>');
  } else if (new URL(canonical).pathname !== route) {
    fail(route, `canonical ${canonical} does not match the page route`);
  }

  // --- JSON-LD ---------------------------------------------------------
  const blocks = [];
  for (const m of html.matchAll(/<script type="?application\/ld\+json"?>(.*?)<\/script>/gs)) {
    try {
      blocks.push(JSON.parse(m[1]));
    } catch (error) {
      fail(route, `ld+json block does not parse: ${error.message}`);
    }
    if (/&(?:#\d+|amp|lt|gt|quot|apos);/.test(m[1])) fail(route, 'ld+json contains leftover HTML entities');
  }
  const nodes = blocks.flatMap((block) => block['@graph'] ?? [block]);
  const typed = (type) => nodes.filter((node) => node['@type'] === type || (Array.isArray(node['@type']) && node['@type'].includes(type)));

  if (route === '/') {
    if (typed('WebSite').length !== 1) fail(route, 'home must carry exactly one WebSite node');
    continue;
  }

  const crumbs = typed('BreadcrumbList');
  if (crumbs.length !== 1) {
    fail(route, `expected exactly one BreadcrumbList, found ${crumbs.length}`);
  } else {
    breadcrumbs += 1;
    const items = crumbs[0].itemListElement ?? [];
    if (!items.length) fail(route, 'BreadcrumbList has no items');
    items.forEach((item, i) => {
      if (item.position !== i + 1) fail(route, `breadcrumb position ${item.position} at index ${i}`);
      if (!item.name) fail(route, `breadcrumb item ${i + 1} has an empty name`);
      const itemRoute = item.item ? new URL(item.item).pathname : null;
      if (!itemRoute || !routes.has(itemRoute)) fail(route, `breadcrumb item ${item.item} is not a built route`);
    });
    const last = items.at(-1);
    if (last && new URL(last.item).pathname !== route) fail(route, `breadcrumb trail ends at ${last.item}, not the page itself`);
  }

  // --- book-interior entities -----------------------------------------
  const bookMatch = route.match(/^\/[^/]+\/([^/]+)\/(.*)$/);
  if (bookMatch) {
    const expected = bookMatch[2] === '' ? ['Book'] : ['LearningResource', 'Quiz'];
    const found = expected.flatMap((type) => typed(type));
    if (found.length !== 1) {
      fail(route, `expected exactly one ${expected.join('/')} node, found ${found.length}`);
    } else {
      entities += 1;
      const entity = found[0];
      if (!entity.name || !entity.description) fail(route, 'entity node is missing name or description');
      if (new URL(entity.url ?? 'about:blank').pathname !== route) fail(route, `entity url ${entity.url} is not the page itself`);
    }
  }
}

for (const [title, where] of titles) {
  if (where.length > 1) fail(where.join(' '), `share the <title> ${JSON.stringify(title)}`);
}

if (errors.length) {
  console.error(`✖ seo check failed: ${errors.length} problem(s):`);
  errors.forEach((error) => console.error(`  · ${error}`));
  process.exit(1);
}

console.log(`✓ seo: ${pages.length} pages — unique composed titles, canonicals, ${breadcrumbs} breadcrumb trails, ${entities} book-entity nodes`);
