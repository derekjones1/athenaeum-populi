/** Production artifact guardrails, including Cloudflare's 20,000-file cap. */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.argv[2] || 'public';
const maxFiles = 20_000;
function files(dir) {
  const found = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) found.push(...files(path));
    else found.push(path);
  }
  return found;
}
if (!existsSync(root)) throw new Error(`Built site not found: ${root} (run npm run build first)`);
const built = files(root);
const bytes = built.reduce((sum, file) => sum + statSync(file).size, 0);
const htmlDocuments = built.filter((file) => file.endsWith('.html')).map((file) => readFileSync(file, 'utf8'));
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
function attribute(tag, name) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = tag.match(new RegExp(
    `(?:^|\\s)${escapedName}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
    'i',
  ));
  return match ? (match[1] ?? match[2] ?? match[3]) : '';
}

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
      targets = [attribute(tag, 'src')];
    } else if (name === 'object') {
      targets = [attribute(tag, 'data')];
    } else if (name === 'video') {
      targets = [attribute(tag, 'src'), attribute(tag, 'poster')];
    } else if (name === 'img' || name === 'source') {
      targets = [attribute(tag, 'src')];
      const srcset = attribute(tag, 'srcset');
      if (srcset) targets.push(...srcset.split(',').map((candidate) => candidate.trim().split(/\s+/, 1)[0]));
    } else if (name === 'link') {
      const rel = attribute(tag, 'rel').toLowerCase().split(/\s+/);
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
        targets = [attribute(tag, 'href')];
      }
    }
    if (targets.some((target) => target && parsedRemoteUrl(target))) return true;
    if (hasRemoteCss(attribute(tag, 'style'))) return true;
  }
  for (const match of document.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
    if (hasRemoteCss(match[1])) return true;
  }
  for (const match of document.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const type = attribute(`<script ${match[1]}>`, 'type').toLowerCase();
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

function hasFileBackedCssImage(css) {
  if (/(?:-webkit-)?image-set\s*\(/i.test(css)) return true;
  for (const match of css.matchAll(/url\(\s*([^)]*?)\s*\)/gi)) {
    let target = match[1].trim();
    if ((target.startsWith('"') && target.endsWith('"')) || (target.startsWith("'") && target.endsWith("'"))) {
      target = target.slice(1, -1).trim();
    }
    if (target && !target.startsWith('#')) return true;
  }
  return false;
}
function mainContent(document) {
  const opening = /<main\b(?=[^>]*(?:^|\s)id\s*=\s*(?:"content"|'content'|content(?=[\s>])))[^>]*>/i.exec(document);
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
    if (/^<link\b/i.test(tag) && attribute(tag, 'rel').toLowerCase().split(/\s+/).includes('canonical')) {
      canonical = attribute(tag, 'href');
    } else if (attribute(tag, 'http-equiv').toLowerCase() === 'refresh') {
      refresh = attribute(tag, 'content').match(/^\s*0\s*;\s*url\s*=\s*(.+?)\s*$/i)?.[1] || '';
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
    const rel = attribute(match[0], 'rel').toLowerCase().split(/\s+/);
    const href = attribute(match[0], 'href');
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
  if (attribute(match[0], 'type').toLowerCase() === 'image' || attribute(match[0], 'poster')) {
    problems.push('file-backed content image markup');
  }
}
for (const match of contentHtml.matchAll(/<(?:use|feImage)\b[^>]*>/gi)) {
  const target = attribute(match[0], 'href') || attribute(match[0], 'xlink:href');
  if (target && !target.trim().startsWith('#')) problems.push('external SVG resource');
}
for (const match of contentHtml.matchAll(/<[^>]+>/g)) {
  if (hasFileBackedCssImage(attribute(match[0], 'style'))) problems.push('file-backed content image URL');
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
if (built.length >= maxFiles) problems.push(`${built.length} files meets/exceeds ${maxFiles}`);
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
if (problems.length) {
  console.error(`✖ build audit failed: ${problems.join('; ')}`);
  process.exit(1);
}
console.log(`✓ build audit: ${built.length}/${maxFiles} files, ${(bytes / 1024 / 1024).toFixed(1)} MiB, no runtime CDN/FlexSearch references`);
