/** Production artifact guardrails, including Cloudflare's 20,000-file cap. */
import { existsSync, readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, relative, sep } from 'node:path';
import { walkFiles } from '../lib/content.mjs';
import { htmlAttribute, hasFileBackedCssImage, MAIN_CONTENT_RE } from '../lib/html.mjs';

const root = process.argv[2] || 'public';
// Cloudflare Pages/Workers static assets: 20,000 files on the Free plan,
// 100,000 on Paid (Wrangler >= 4.34.0; CI pins 4.112.0, so the tooling
// qualifies either way). The repository cannot know which plan the account
// holds, so the budget is the FREE-plan provider limit — the one that cannot
// be wrong by being too generous. The artifact ships 673 files and grows at
// roughly 2.1 per page, so the cap is ~9,200 pages away; this gate is a
// tripwire against a generator that starts emitting per-page assets, not a
// number the corpus is approaching.
const maxFiles = 20_000;
const filesWarnAt = 0.9;
// Size/DOM ratchets. These are regression budgets, not aspirations: each sits
// above the value measured on the completed three-book corpus
// (275 documents, 132.1 MiB total HTML, 1.21 MiB largest page, 30,802 tags on
// the largest lesson, 35.6% sidebar share, 191.9 KiB mean outside
// main#content). If a change trips one, either the change reintroduced a
// duplication bug or the corpus legitimately grew — raise the budget
// consciously in this file, with the new measurement.
//
// The total is budgeted against the PROJECTED corpus rather than today's,
// because Precalculus is scaffolded and will roughly double the page count:
// 62 more sections (73 - 11), and their sidebars grow with the book's own nav
// (aside bytes fit 16001 + 2306 x navEntries within 2% across the three
// finished books, so a complete Precalculus sidebar lands near 207 KiB rather
// than today's 67 KiB). That projects 337 documents / ~182 MiB — which the
// previous 150 MiB budget would have breached at about +23 pages, mid-book,
// on an ordinary authoring commit. 220 MiB keeps ~21% headroom over the
// finished corpus.
const maxTotalHtmlBytes = 220 * 1024 * 1024;
const maxPageBytes = 1.5 * 1024 * 1024;
const maxPageElements = 35_000;
// Duplicated non-content markup, as an ABSOLUTE mean per page.
//
// `maxSidebarShare` below is kept — it is cheap and it matches the historical
// bug it was written for, a sidebar whose CONTENTS were emitted twice inside
// the one <aside> — but it is not the duplication gate, for two measured
// reasons. It is a RATIO, so duplication outside the first <aside> improves
// it: a sidebar emitted twice as sibling <aside> elements moves the score
// from 35.6% to 26.3%, and the same nav duplicated into a sibling <nav> moves
// it to 26.3% too, both of them 47 MiB regressions that score BETTER than the
// baseline. And `document.match(/<aside…/)` is non-global, so it only ever
// sees the first one.
//
// Bytes outside main#content have neither weakness: the metric is absolute,
// so it cannot be diluted by growth, and it counts every byte of chrome
// wherever it sits. All three duplication shapes take it from 191.9 KiB to
// ~368 KiB. 240 KiB is ~25% over today's mean and above the current per-page
// maximum (233.9 KiB); a complete Precalculus lifts the mean to ~208 KiB,
// still inside it.
const maxSidebarShare = 0.45;
const maxMeanChromeBytes = 240 * 1024;
if (!existsSync(root)) throw new Error(`Built site not found: ${root} (run npm run build first)`);
const built = walkFiles(root);
const bytes = built.reduce((sum, file) => sum + statSync(file).size, 0);
const htmlFiles = built.filter((file) => file.endsWith('.html'));
const htmlDocuments = htmlFiles.map((file) => readFileSync(file, 'utf8'));
const html = htmlDocuments.join('\n');
const runtimeFiles = built.filter((file) => /\.(?:html|css|m?js)$/i.test(file));
const runtimeSources = runtimeFiles.map((file) => ({ file, text: readFileSync(file, 'utf8') }));
const runtimeText = runtimeSources.map(({ text }) => text).join('\n');
// Pagefind internally constructs fragment URLs against example.com before
// replacing the origin. That string is library implementation, not site
// configuration; placeholder checks still cover every first-party asset.
const firstPartyRuntimeText = runtimeFiles
  .filter((file) => !file.startsWith(join(root, 'pagefind') + '/'))
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');
const forbidden = [
  ['FlexSearch', /flexsearch/i, runtimeText],
  ['placeholder production URL', /https:\/\/example\.com/i, firstPartyRuntimeText],
];
const problems = forbidden.filter(([, pattern, source]) => pattern.test(source)).map(([label]) => label);

// Inspect authored page output inside main#content. Hextra's pinned light/dark
// navbar logos live outside this element and remain ordinary theme chrome.

const siteOrigin = 'https://athenaeumpopuli.org';
const knownCdnHosts = [
  'ajax.googleapis.com',
  'cdn.jsdelivr.net',
  'cdn.skypack.dev',
  'cdn.tailwindcss.com',
  'cdnjs.cloudflare.com',
  'code.jquery.com',
  'deno.land',
  'esm.run',
  'esm.sh',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'ga.jspm.io',
  'jspm.dev',
  'jsr.io',
  'kit.fontawesome.com',
  'maxcdn.bootstrapcdn.com',
  'stackpath.bootstrapcdn.com',
  'static.cloudflareinsights.com',
  'unpkg.com',
  'use.typekit.net',
];

function parsedRemoteUrl(raw) {
  const value = raw.trim().replace(/^(['"])([\s\S]*)\1$/, '$2').replace(/\\\//g, '/');
  try {
    const url = new URL(value, siteOrigin);
    return (url.protocol === 'http:' || url.protocol === 'https:') && url.origin !== siteOrigin
      ? url
      : null;
  } catch {
    return null;
  }
}

function isKnownCdn(url) {
  const host = url.hostname.toLowerCase();
  return host.startsWith('cdn.')
    || host.startsWith('cdnjs.')
    || host.endsWith('.cloudfront.net')
    || host.endsWith('.azureedge.net')
    || host.endsWith('.akamaized.net')
    || knownCdnHosts.some((known) => host === known || host.endsWith(`.${known}`));
}

function decodeJavaScriptEscapes(value) {
  return value
    .replace(/\\x([\da-f]{2})/gi, (_match, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/\\u\{([\da-f]+)\}/gi, (_match, hex) => {
      try { return String.fromCodePoint(Number.parseInt(hex, 16)); } catch { return _match; }
    })
    .replace(/\\u([\da-f]{4})/gi, (_match, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/\\\r?\n/g, '')
    .replace(/\\([\\/'"`])/g, '$1');
}

/**
 * Minimal lexical pass for dependency auditing. It ignores comments and keeps
 * template literals as one string token, so documentation embedded in a
 * library error message (for example, “import https://…”) is not mistaken for
 * executable module syntax.
 */
function javascriptTokens(source) {
  const tokens = [];
  let index = 0;
  const readQuoted = (quote) => {
    let raw = '';
    index += 1;
    while (index < source.length) {
      const char = source[index++];
      if (char === quote) break;
      if (char === '\\' && index < source.length) {
        raw += char + source[index++];
      } else {
        raw += char;
      }
    }
    tokens.push({ type: 'string', value: decodeJavaScriptEscapes(raw) });
  };
  const canStartRegex = () => {
    const previous = tokens.at(-1);
    if (!previous) return true;
    if (previous.type === 'punctuation') return /[([{=,:;!?&|~+\-*%^<>]/.test(previous.value);
    return previous.type === 'identifier'
      && /^(?:return|throw|case|delete|void|typeof|instanceof|in|of|yield|await)$/.test(previous.value);
  };
  const readRegex = () => {
    index += 1;
    let inClass = false;
    while (index < source.length) {
      const char = source[index++];
      if (char === '\\') {
        index += 1;
      } else if (char === '[') {
        inClass = true;
      } else if (char === ']') {
        inClass = false;
      } else if (char === '/' && !inClass) {
        while (/[A-Za-z]/.test(source[index] || '')) index += 1;
        break;
      }
    }
    tokens.push({ type: 'regex', value: '' });
  };
  let scanCode;
  const readTemplate = () => {
    index += 1;
    let raw = '';
    const emit = () => {
      if (raw) tokens.push({ type: 'string', value: decodeJavaScriptEscapes(raw) });
      raw = '';
    };
    while (index < source.length) {
      const char = source[index++];
      if (char === '\\' && index < source.length) {
        raw += char + source[index++];
      } else if (char === '`') {
        emit();
        return;
      } else if (char === '$' && source[index] === '{') {
        emit();
        index += 1;
        scanCode(true);
      } else {
        raw += char;
      }
    }
    emit();
  };
  scanCode = (stopAtTemplateBrace = false) => {
    let braceDepth = 0;
    while (index < source.length) {
      if (/\s/.test(source[index])) { index += 1; continue; }
      if (source.slice(index, index + 2) === '//') {
        const end = source.indexOf('\n', index + 2);
        index = end === -1 ? source.length : end + 1;
        continue;
      }
      if (source.slice(index, index + 2) === '/*') {
        const end = source.indexOf('*/', index + 2);
        index = end === -1 ? source.length : end + 2;
        continue;
      }
      if (source[index] === '}' && stopAtTemplateBrace) {
        if (braceDepth === 0) {
          index += 1;
          return;
        }
        braceDepth -= 1;
        tokens.push({ type: 'punctuation', value: source[index++] });
        continue;
      }
      if (source[index] === '{' && stopAtTemplateBrace) {
        braceDepth += 1;
        tokens.push({ type: 'punctuation', value: source[index++] });
        continue;
      }
      const quote = source[index];
      if (quote === '"' || quote === "'") {
        readQuoted(quote);
        continue;
      }
      if (quote === '`') {
        readTemplate();
        continue;
      }
      if (quote === '/' && canStartRegex()) {
        readRegex();
        continue;
      }
      const identifier = /^[A-Za-z_$][\w$]*/.exec(source.slice(index));
      if (identifier) {
        tokens.push({ type: 'identifier', value: identifier[0] });
        index += identifier[0].length;
        continue;
      }
      tokens.push({ type: 'punctuation', value: source[index++] });
    }
  };
  scanCode();
  return tokens;
}

function hasJavaScriptRemoteDependency(source) {
  const tokens = javascriptTokens(source);
  for (const token of tokens) {
    if (token.type !== 'string') continue;
    const url = parsedRemoteUrl(token.value);
    if (url && isKnownCdn(url)) return true;
  }
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (token.type !== 'identifier' || (token.value !== 'import' && token.value !== 'from')) continue;
    let next = index + 1;
    if (token.value === 'import' && tokens[next]?.value === '(') next += 1;
    if (tokens[next]?.type === 'string' && parsedRemoteUrl(tokens[next].value)) return true;
  }
  return false;
}

const hasRemoteCss = (source) => {
  const normalized = source.replace(/\\\//g, '/');
  return /(?:@import\s+(?:url\(\s*)?|url\(\s*)["']?\s*(?:https?:)?\/\//i.test(normalized);
};

function hasRemoteHtmlDependency(document) {
  for (const match of document.matchAll(/<([A-Za-z][\w:-]*)\b[^>]*>/g)) {
    const tag = match[0];
    const name = match[1].toLowerCase();
    let targets = [];
    if (name === 'script' || name === 'iframe' || name === 'embed' || name === 'audio') {
      targets = [htmlAttribute(tag, 'src')];
    } else if (name === 'object') {
      targets = [htmlAttribute(tag, 'data')];
    } else if (name === 'video') {
      targets = [htmlAttribute(tag, 'src'), htmlAttribute(tag, 'poster')];
    } else if (name === 'img' || name === 'source') {
      targets = [htmlAttribute(tag, 'src')];
      const srcset = htmlAttribute(tag, 'srcset');
      if (srcset) targets.push(...srcset.split(',').map((candidate) => candidate.trim().split(/\s+/, 1)[0]));
    } else if (name === 'link') {
      const rel = htmlAttribute(tag, 'rel').toLowerCase().split(/\s+/);
      if (rel.some((value) => [
        'stylesheet',
        'modulepreload',
        'preload',
        'prefetch',
        'preconnect',
        'dns-prefetch',
        'icon',
        'manifest',
      ].includes(value))) {
        targets = [htmlAttribute(tag, 'href')];
      }
    }
    if (targets.some((target) => target && parsedRemoteUrl(target))) return true;
    if (hasRemoteCss(htmlAttribute(tag, 'style'))) return true;
  }
  for (const match of document.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
    if (hasRemoteCss(match[1])) return true;
  }
  for (const match of document.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const type = htmlAttribute(`<script ${match[1]}>`, 'type').toLowerCase();
    if (type === 'application/ld+json') continue;
    if (hasJavaScriptRemoteDependency(match[2])) return true;
  }
  return false;
}

const emittedJavaScript = runtimeSources.filter(({ file }) => /\.m?js$/i.test(file));
const emittedCss = runtimeSources.filter(({ file }) => /\.css$/i.test(file));
if (
  emittedJavaScript.some(({ text }) => hasJavaScriptRemoteDependency(text))
  || emittedCss.some(({ text }) => hasRemoteCss(text))
  || htmlDocuments.some(hasRemoteHtmlDependency)
) {
  problems.push('CDN dependency');
}

function mainContent(document) {
  const opening = MAIN_CONTENT_RE.exec(document);
  if (!opening) return '';
  const start = opening.index + opening[0].length;
  const end = document.indexOf('</main>', start);
  return end === -1 ? '' : document.slice(start, end);
}
function sameSiteRedirect(document) {
  let canonical = '';
  let refresh = '';
  for (const match of document.matchAll(/<(?:link|meta)\b[^>]*>/gi)) {
    const tag = match[0];
    if (/^<link\b/i.test(tag) && htmlAttribute(tag, 'rel').toLowerCase().split(/\s+/).includes('canonical')) {
      canonical = htmlAttribute(tag, 'href');
    } else if (htmlAttribute(tag, 'http-equiv').toLowerCase() === 'refresh') {
      refresh = htmlAttribute(tag, 'content').match(/^\s*0\s*;\s*url\s*=\s*(.+?)\s*$/i)?.[1] || '';
    }
  }
  if (!canonical || !refresh) return false;
  try {
    const canonicalUrl = new URL(canonical, 'https://athenaeumpopuli.org');
    const refreshUrl = new URL(refresh, 'https://athenaeumpopuli.org');
    return canonicalUrl.origin === 'https://athenaeumpopuli.org'
      && refreshUrl.origin === canonicalUrl.origin
      && refreshUrl.pathname === canonicalUrl.pathname
      && refreshUrl.search === canonicalUrl.search
      && refreshUrl.hash === canonicalUrl.hash;
  } catch {
    return false;
  }
}
function katexCssHref(document) {
  for (const match of document.matchAll(/<link\b[^>]*>/gi)) {
    const rel = htmlAttribute(match[0], 'rel').toLowerCase().split(/\s+/);
    const href = htmlAttribute(match[0], 'href');
    if (rel.includes('stylesheet') && /\/katex\/katex(?:\.min)?\.css(?:[?#]|$)/i.test(href)) return href;
  }
  return '';
}
const mathDocuments = htmlDocuments.filter((document) => /\bkatex-(?:mathml|html)\b/.test(document));
if (mathDocuments.some((document) => !katexCssHref(document))) {
  problems.push('KaTeX stylesheet link missing on a rendered math page');
}
if (mathDocuments.some((document) => {
  const href = katexCssHref(document);
  if (!href || /^(?:[a-z]+:)?\/\//i.test(href)) return false;
  const relativePath = href.split(/[?#]/, 1)[0].replace(/^\/+/, '');
  return !existsSync(join(root, relativePath));
})) {
  problems.push('KaTeX stylesheet link does not resolve to a built file');
}
// KaTeX loads fonts with font-display:swap, and Safari repaints the swapped
// glyphs without re-running layout on KaTeX's absolutely-positioned vlists,
// leaving e.g. a \begin{cases} brace where fallback-font metrics put it until
// a zoom or resize forces a reflow. Every rendered math page must therefore
// preload the faces the corpus uses so first layout sees real metrics — and
// each preload must carry `crossorigin`, or the CORS-mode font fetch cannot
// reuse it and the browser downloads the file twice.
const KATEX_PRELOAD_FACES = [
  'KaTeX_Main-Regular', 'KaTeX_Main-Bold', 'KaTeX_Math-Italic', 'KaTeX_AMS-Regular',
  'KaTeX_Size1-Regular', 'KaTeX_Size2-Regular', 'KaTeX_Size3-Regular', 'KaTeX_Size4-Regular',
];
function katexFontPreloads(document) {
  const preloads = [];
  for (const match of document.matchAll(/<link\b[^>]*>/gi)) {
    const rel = htmlAttribute(match[0], 'rel').toLowerCase().split(/\s+/);
    if (!rel.includes('preload') || htmlAttribute(match[0], 'as').toLowerCase() !== 'font') continue;
    preloads.push({ href: htmlAttribute(match[0], 'href'), crossorigin: /(?:^|\s)crossorigin\b/i.test(match[0]) });
  }
  return preloads;
}
for (const document of mathDocuments) {
  const preloads = katexFontPreloads(document);
  if (KATEX_PRELOAD_FACES.some((face) => !preloads.some(({ href }) => href.endsWith(`/${face}.woff2`)))) {
    problems.push('KaTeX font preload links missing on a rendered math page');
    break;
  }
}
if (mathDocuments.some((document) => katexFontPreloads(document).some(({ crossorigin }) => !crossorigin))) {
  problems.push('KaTeX font preload without crossorigin (font fetch cannot reuse it)');
}
if (mathDocuments.some((document) => katexFontPreloads(document).some(({ href }) => {
  if (!href || /^(?:[a-z]+:)?\/\//i.test(href)) return false;
  return !existsSync(join(root, href.split(/[?#]/, 1)[0].replace(/^\/+/, '')));
}))) {
  problems.push('KaTeX font preload does not resolve to a built file');
}
if (mathDocuments.some((document) => {
  const mathml = (document.match(/\bkatex-mathml\b/g) || []).length;
  const visual = (document.match(/\bkatex-html\b/g) || []).length;
  return mathml !== visual;
})) {
  problems.push('KaTeX visual/accessibility render count mismatch');
}
const contentDocuments = htmlDocuments.map((document) => ({
  content: mainContent(document),
  redirect: sameSiteRedirect(document),
}));
if (contentDocuments.some(({ content, redirect }) => !content && !redirect)) {
  problems.push('main#content missing or empty');
}
const contentHtml = contentDocuments.map(({ content }) => content).filter(Boolean).join('\n');
// Media elements remain active even when nested in raw <pre>/<code>.
if (/<(?:img|picture|object|embed)\b|<source\b[^>]*\bsrcset\s*=|<image\b/i.test(contentHtml)) {
  problems.push('file-backed content image markup');
}
for (const match of contentHtml.matchAll(/<(?:input|video)\b[^>]*>/gi)) {
  if (htmlAttribute(match[0], 'type').toLowerCase() === 'image' || htmlAttribute(match[0], 'poster')) {
    problems.push('file-backed content image markup');
  }
}
for (const match of contentHtml.matchAll(/<(?:use|feImage)\b[^>]*>/gi)) {
  const target = htmlAttribute(match[0], 'href') || htmlAttribute(match[0], 'xlink:href');
  if (target && !target.trim().startsWith('#')) problems.push('external SVG resource');
}
for (const match of contentHtml.matchAll(/<[^>]+>/g)) {
  if (hasFileBackedCssImage(htmlAttribute(match[0], 'style'))) problems.push('file-backed content image URL');
}
for (const match of contentHtml.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
  if (hasFileBackedCssImage(match[1])) problems.push('file-backed content image URL');
}

// Rendered documentation text is inert. Remove it only for URL-like strings,
// after active HTML elements above have already been audited.
const auditableContentHtml = contentHtml
  .replace(/<pre\b[\s\S]*?<\/pre>/gi, '')
  .replace(/<code\b[\s\S]*?<\/code>/gi, '');
if (/data:image\//i.test(auditableContentHtml)) {
  problems.push('file-backed content image markup');
}
if (hasFileBackedCssImage(auditableContentHtml)) problems.push('file-backed content image URL');

const imageAssetPattern = /\.(?:apng|avif|bmp|cur|gif|heic|heif|ico|jfif|jpe?g|jxl|png|svgz?|tiff?|webp)$/i;
const allowedSiteChrome = new Set([
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'apple-touch-icon.png',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon.ico',
  'favicon.svg',
  join('images', 'logo-dark.svg'),
  join('images', 'logo.svg'),
].map((file) => join(root, file)));
const contentImageAssets = built.filter((file) => imageAssetPattern.test(file) && !allowedSiteChrome.has(file));
if (contentImageAssets.length) {
  problems.push(`${contentImageAssets.length} content image asset(s) remain (only the nine explicit site-chrome icons/logos are allowed)`);
}
// The same nine are also a floor: favicons.html, site.webmanifest, and the
// navbar reference every one of them unconditionally, so a missing file is a
// shipped 404 (the navbar logo shipped that way once, silently).
const builtSet = new Set(built);
const missingSiteChrome = [...allowedSiteChrome].filter((file) => !builtSet.has(file));
if (missingSiteChrome.length) {
  problems.push(`${missingSiteChrome.length} site-chrome icon/logo file(s) missing (favicons.html and the navbar reference all nine)`);
}
// The provider rejects an artifact ABOVE the cap, so the gate draws its line
// where the provider does. The warning is what gives advance notice: a hard
// failure at the wall is a failure discovered on the deploy that needed to
// ship, not on the commit that made it inevitable.
if (built.length > maxFiles) problems.push(`${built.length} files exceeds the ${maxFiles} provider cap`);
else if (built.length >= maxFiles * filesWarnAt) {
  console.warn(`! build audit: ${built.length} files is ${(100 * built.length / maxFiles).toFixed(0)}% of the ${maxFiles} provider cap`);
}
{
  // Any absolute URL inside executable code is a potential runtime fetch the
  // static CDN pattern check cannot see (a dynamically created
  // script.src = "https://…" passed it — sabotage-proven). Scan bundled JS
  // and inline <script> bodies for URL hosts against a small allowlist of
  // known-inert strings; a NEW host is a build failure to be explained, not
  // silently shipped.
  // Host allowances are scoped by BUNDLE PROVENANCE, not global: a global
  // allowlist let first-party code fetch("https://www.npmjs.com/…")
  // (sabotage-proven). The doc-string hosts below appear only inside the
  // engine bundles, whose contents come from the pinned, npm-audited
  // MathLive/Compute Engine dependencies — first-party bundles and inline
  // scripts get the base list only.
  const BASE_INERT_HOSTS = ['www.w3.org', 'athenaeumpopuli.org'];
  const ENGINE_INERT_HOSTS = [
    ...BASE_INERT_HOSTS,
    'esm.run', // MathLive fallback string; fonts/sounds are self-hosted and soundsDirectory is null
    'www.npmjs.com', // package doc strings inside the compute-engine bundle
    'oeis.org', // sequence doc strings inside the compute-engine bundle
  ];
  // Pagefind's own bundle (worker, UI, highlight) is excluded: it is a
  // pinned, npm-audited dependency whose license headers and internal
  // example.com templates are full of URL strings, and the pattern-based CDN
  // check above still covers it.
  const scriptSources = [
    ...built
      .filter((file) => /\.m?js$/i.test(file) && !relative(root, file).split(sep).includes('pagefind'))
      .map((file) => ({
        label: relative(root, file),
        allowed: /(?:^|\/)(?:fillin|graphplot)-engine\./.test(relative(root, file)) ? ENGINE_INERT_HOSTS : BASE_INERT_HOSTS,
        text: readFileSync(file, 'utf8'),
      })),
    ...htmlDocuments.flatMap((document, index) => [...document.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
      // JSON-LD blocks are inert data the browser never executes — the same
      // exemption the CDN dependency check applies. Their schema.org /
      // creativecommons.org URLs are the point, and check-seo.mjs already
      // requires every such block to parse as JSON.
      .filter((match) => htmlAttribute(`<script ${match[1]}>`, 'type').toLowerCase() !== 'application/ld+json')
      .map((match) => ({ label: `inline script (document ${index})`, allowed: BASE_INERT_HOSTS, text: match[2] }))),
  ];
  // Absolute AND protocol-relative forms: on the HTTPS site,
  // src="//host/x.js" loads executable HTTPS code exactly like
  // src="https://host/x.js" (sabotage-proven bypass of the https?-only
  // pattern). JSON-style escaped slashes are normalized first so
  // "\/\/host" cannot slip through, which also collapses the regex-literal
  // text "\/\//i.test(…)" into a harmless triple slash. Protocol-relative
  // matches require a dotted host so "//"-comment prose does not
  // false-positive.
  const offenders = new Map();
  for (const { label, allowed, text } of scriptSources) {
    const allowedSet = new Set(allowed);
    const normalized = text.replace(/\\\//g, '/');
    for (const match of normalized.matchAll(/(?:https?:|[^:\w/])\/\/([a-z0-9-]+(?:\.[a-z0-9-]+)+)/gi)) {
      const host = match[1].toLowerCase();
      if (!allowedSet.has(host)) offenders.set(host, label);
    }
  }
  if (offenders.size) {
    const detail = [...offenders.entries()].sort().map(([host, label]) => `${host} (${label})`).join(', ');
    problems.push(`executable code references unexpected host(s): ${detail}`);
  }
}
{
  // Artifact size/DOM ratchets (see the budget constants at the top).
  const totalHtmlBytes = htmlDocuments.reduce((sum, document) => sum + Buffer.byteLength(document), 0);
  if (totalHtmlBytes > maxTotalHtmlBytes) {
    problems.push(`total HTML ${(totalHtmlBytes / 1048576).toFixed(1)} MiB exceeds the ${(maxTotalHtmlBytes / 1048576).toFixed(0)} MiB budget`);
  }
  let sidebarBytes = 0;
  let chromeBytes = 0;
  let largestPageBytes = 0;
  let largestPageElements = 0;
  for (const [index, document] of htmlDocuments.entries()) {
    largestPageBytes = Math.max(largestPageBytes, Buffer.byteLength(document));
    largestPageElements = Math.max(largestPageElements, (document.match(/<[a-zA-Z]/g) || []).length);
    const aside = document.match(/<aside\b[\s\S]*?<\/aside>/);
    if (aside) sidebarBytes += Buffer.byteLength(aside[0]);
    // Everything the page ships that is not the lesson. Page bytes correlate
    // with main#content at r = 0.99, so what is left is chrome and is
    // essentially independent of how long the lesson is — which is what makes
    // an absolute per-page mean a meaningful budget rather than a proxy for
    // corpus growth.
    chromeBytes += Buffer.byteLength(document)
      - Buffer.byteLength(contentDocuments[index]?.content ?? '');
  }
  if (largestPageBytes > maxPageBytes) {
    problems.push(`largest page ${(largestPageBytes / 1048576).toFixed(2)} MiB exceeds the ${(maxPageBytes / 1048576).toFixed(2)} MiB budget`);
  }
  if (largestPageElements > maxPageElements) {
    problems.push(`largest page has ${largestPageElements} elements, over the ${maxPageElements} budget`);
  }
  const sidebarShare = totalHtmlBytes ? sidebarBytes / totalHtmlBytes : 0;
  if (sidebarShare > maxSidebarShare) {
    problems.push(`sidebars are ${(sidebarShare * 100).toFixed(1)}% of HTML, over the ${(maxSidebarShare * 100).toFixed(0)}% budget (duplicated navigation regression)`);
  }
  const meanChromeBytes = htmlDocuments.length ? chromeBytes / htmlDocuments.length : 0;
  if (meanChromeBytes > maxMeanChromeBytes) {
    problems.push(`${(meanChromeBytes / 1024).toFixed(1)} KiB of markup per page sits outside main#content, over the ${(maxMeanChromeBytes / 1024).toFixed(0)} KiB budget (duplicated chrome regression)`);
  }
}
{
  // A duplicated `id` is invalid HTML and silently breaks the "Permalink for
  // this section" links the theme puts on every heading: both permalinks
  // resolve to the first match, so the second heading becomes unreachable by
  // its own link. It reached production because Hugo's anchor slug drops
  // inline math, so two headings differing only inside `$…$` — "…with Center
  // $(0,0)$" and "…with Center $(h,k)$" — collapsed to one id with no
  // de-duplicating suffix. Minification strips attribute quotes, so both
  // spellings have to be read.
  const duplicates = [];
  for (const [index, document] of htmlDocuments.entries()) {
    const seen = new Set();
    const repeated = new Set();
    for (const match of document.matchAll(/\sid=(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g)) {
      const id = match[1] ?? match[2] ?? match[3];
      if (!id) continue;
      if (seen.has(id)) repeated.add(id); else seen.add(id);
    }
    if (repeated.size) {
      duplicates.push(`${relative(root, htmlFiles[index])} (${[...repeated].join(', ')})`);
    }
  }
  if (duplicates.length) {
    problems.push(`duplicate id attribute(s) on ${duplicates.length} page(s): ${duplicates.slice(0, 3).join('; ')}`);
  }
}
{
  // Every interactive component ships exactly one no-JavaScript notice.
  //
  // This is asserted here, over all 275 built documents, rather than in the
  // browser suite: a Playwright run proves it for the one route it loads, and
  // the fact is about the corpus. `<noscript>` children serialize as TEXT in
  // the DOM, so a browser cannot count them from the parsed page at all —
  // only their visibility distinguishes the two modes, which is the half the
  // browser test keeps.
  // `--minify` strips attribute quotes, so the class is matched unquoted too —
  // a quoted-only pattern found zero notices on every page and would have
  // reported the whole corpus as broken (or, with the comparison the other
  // way round, nothing at all).
  const NOSCRIPT_NOTICE = /class=(?:"[^"]*\bap-noscript-notice\b[^"]*"|'[^']*\bap-noscript-notice\b[^']*'|ap-noscript-notice\b)/g;
  const missing = [];
  for (const [index, document] of htmlDocuments.entries()) {
    const components = (document.match(/<(?:fill-in|graph-plot)\b/g) || []).length;
    const notices = (document.match(NOSCRIPT_NOTICE) || []).length;
    if (components !== notices) {
      missing.push(`${htmlFiles[index]}: ${components} interactive component(s), ${notices} noscript notice(s)`);
    }
  }
  if (missing.length) {
    problems.push(`no-JavaScript notice missing or duplicated on ${missing.length} page(s): ${missing.slice(0, 3).join('; ')}`);
  }
}
const katexCssPath = join(root, 'katex', 'katex.min.css');
if (!existsSync(katexCssPath)) {
  problems.push('vendored KaTeX CSS missing');
} else {
  const katexCss = readFileSync(katexCssPath, 'utf8');
  const hidingRule = /\.katex\s+\.katex-mathml\s*\{([^}]*)\}/.exec(katexCss)?.[1]
    .replace(/\s+/g, '') ?? '';
  const hidesAccessibilityLayer = [
    'clip:rect(1px,1px,1px,1px)',
    'height:1px',
    'overflow:hidden',
    'position:absolute',
    'width:1px',
  ].every((declaration) => hidingRule.includes(declaration));
  if (!hidesAccessibilityLayer) {
    problems.push('KaTeX CSS does not hide the duplicate visual accessibility layer');
  }
}
if (!existsSync(join(root, 'pagefind', 'pagefind.js'))) problems.push('Pagefind browser bundle missing');
// The security/caching header contract ships as a static asset. Existence
// alone proved sabotage-able (an empty _headers passed), so parse the file
// and assert the actual contract BEFORE deploy — the post-deploy smoke test
// only confirms the edge served what this already validated.
{
  const headersPath = join(root, '_headers');
  if (!existsSync(headersPath)) {
    problems.push('_headers file missing from the artifact');
  } else {
    const rules = new Map();
    let currentPath = null;
    for (const line of readFileSync(headersPath, 'utf8').split('\n')) {
      if (!line.trim() || line.trim().startsWith('#')) continue;
      if (!/^\s/.test(line)) {
        currentPath = line.trim();
        if (!rules.has(currentPath)) rules.set(currentPath, new Map());
      } else if (currentPath) {
        const [name, ...rest] = line.trim().split(':');
        rules.get(currentPath).set(name.trim().toLowerCase(), rest.join(':').trim());
      }
    }
    const requireHeader = (path, name, pattern, describe) => {
      const value = rules.get(path)?.get(name.toLowerCase());
      if (value === undefined) problems.push(`_headers: ${path} is missing ${name}`);
      else if (pattern && !pattern.test(value)) problems.push(`_headers: ${path} ${name} is "${value}", expected ${describe || pattern}`);
    };
    // Values are asserted SEMANTICALLY, not just for presence: a syntactic
    // gate accepted max-age=1000 HSTS, unsafe-url referrers, and camera=*
    // permissions (sabotage-proven weak substitutions).
    const hstsStrong = (value) => {
      const maxAge = Number(/max-age=(\d+)/.exec(value)?.[1] ?? 0);
      return maxAge >= 31536000;
    };
    requireHeader('/*', 'Strict-Transport-Security', { test: hstsStrong }, 'max-age of at least one year');
    requireHeader('/*', 'X-Content-Type-Options', /^nosniff$/i);
    // Exactly the canonical value, not merely "not obviously unsafe":
    // SAMEORIGIN would be a silent policy downgrade from DENY.
    requireHeader('/*', 'X-Frame-Options', /^DENY$/i, 'exactly DENY');
    requireHeader('/*', 'Referrer-Policy', /^(no-referrer|same-origin|strict-origin|strict-origin-when-cross-origin)$/i, 'a strict policy (never unsafe-url / origin-when-cross-origin)');
    // Every directive must have an EMPTY allowlist (camera=() blocks;
    // camera=* grants), AND the canonical directive set must be present — a
    // policy containing only accelerometer=() otherwise passed while
    // silently dropping the camera/microphone/geolocation blocks.
    const permissionsCanonical = (value) => {
      if (!/^[a-z-]+=\(\)(?:\s*,\s*[a-z-]+=\(\))*$/i.test(value)) return false;
      const directives = new Set(value.toLowerCase().match(/[a-z-]+(?==\(\))/g) || []);
      return ['camera', 'microphone', 'geolocation'].every((name) => directives.has(name));
    };
    requireHeader('/*', 'Permissions-Policy', { test: permissionsCanonical }, 'directive=() entries including camera, microphone, and geolocation');
    requireHeader('/*', 'Cross-Origin-Opener-Policy', /^same-origin$/i);
    const immutableYear = (value) => /(?:^|\b)immutable\b/.test(value)
      && /\bpublic\b/.test(value)
      && Number(/max-age=(\d+)/.exec(value)?.[1] ?? 0) >= 31536000;
    requireHeader('/js/*', 'Cache-Control', { test: immutableYear }, 'public, immutable, max-age of at least one year');
    requireHeader('/css/compiled/*', 'Cache-Control', { test: immutableYear }, 'public, immutable, max-age of at least one year');

    // Year-long immutable caching is only safe because those URLs change
    // with their content. Couple the two: every asset under an immutable
    // prefix must carry its own sha256 in its filename — a fingerprinting
    // regression would otherwise pin stale JavaScript in browsers for a
    // year. (VERSION and directories are not cached responses.)
    for (const prefix of ['js', join('css', 'compiled')]) {
      for (const file of built.filter((f) => f.startsWith(join(root, prefix) + sep))) {
        const name = file.slice(file.lastIndexOf(sep) + 1);
        if (name === 'VERSION') continue;
        const hash = /\.([0-9a-f]{64})\.[a-z]+$/.exec(name)?.[1];
        if (!hash) {
          problems.push(`immutable-cached asset is not content-hashed: ${relative(root, file)}`);
          continue;
        }
        const actual = createHash('sha256').update(readFileSync(file)).digest('hex');
        if (actual !== hash) problems.push(`content hash mismatch on ${relative(root, file)} (name says ${hash.slice(0, 12)}…, content is ${actual.slice(0, 12)}…)`);
      }
    }
  }
}
if (problems.length) {
  console.error(`✖ build audit failed: ${problems.join('; ')}`);
  process.exit(1);
}
console.log(`✓ build audit: ${built.length}/${maxFiles} files, ${(bytes / 1024 / 1024).toFixed(1)} MiB, no runtime CDN/FlexSearch references`);
