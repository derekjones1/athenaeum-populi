/**
 * Shared HTML-reading primitives.
 *
 * Three helpers were byte-identical across `tools/lints.mjs` (which reads
 * authored HTML in Markdown), `tools/audit-build.mjs` and
 * `tools/check-pagefind.mjs` (which read Hugo's output). Identical by luck: a
 * fix to one was a fix to one. They read the same markup for the same reasons,
 * so they read it with the same code.
 *
 * Regex rather than a parser on purpose — no HTML parser is a dependency here,
 * and each of these answers a narrow question about a single tag.
 */

/**
 * The value of one HTML attribute on a single tag, or `''`.
 *
 * Anchored on a word boundary the naive `name="` search does not have, so
 * `role` cannot match `data-role` — the distinction the inline-SVG
 * accessibility lint rests on. Accepts double-quoted, single-quoted, and
 * unquoted values because Hugo's minified output uses all three.
 */
export function htmlAttribute(tag, name) {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = tag.match(new RegExp(
    `(?:^|\\s)${escapedName}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
    'i',
  ));
  return match ? (match[1] ?? match[2] ?? match[3]) : '';
}

/**
 * A regex source matching ONE opening tag of `name`, quoted values and all.
 *
 * The obvious `<div\b[^>]*>` is wrong, and wrong in a way that only showed up
 * once a figure needed an inequality in its label: a `>` inside a quoted
 * attribute value does not end a tag. `tools/render-figure.mjs` emits its
 * provenance as `data-spec='{"ariaLabel":"… k > 0 …", …}'`, so `[^>]*` cut the
 * tag mid-JSON and the lint reported its own generator's verbatim output as
 * unparseable — a rule firing on sound content, which playbook §5 calls a bug
 * in the rule.
 *
 * The alternation walks quoted runs whole, so the `>` that terminates the
 * match is always the one outside quotes. Unquoted attribute values still
 * cannot contain `>`, which is true of HTML itself.
 */
export const openTagSource = (name) => `<${name}\\b(?:[^>'"]|"[^"]*"|'[^']*')*>`;

/** `openTagSource`, compiled — global and case-insensitive, for `matchAll`. */
export const openTagRe = (name) => new RegExp(openTagSource(name), 'gi');

/**
 * Does this CSS text pull in a file-backed image?
 *
 * `url(#gradient)` is an in-document SVG paint reference, not an image, and is
 * the one form that stays allowed — everything else names a file, which is the
 * authoring format this repository bans (illegible in dark mode, does not
 * scale like KaTeX, and duplicates content that should stay semantic).
 * `image-set()` is a file reference by construction.
 */
export function hasFileBackedCssImage(css) {
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

/**
 * `<main id="content">` — the element Pagefind is told to index
 * (`--root-selector 'main#content'` in `npm run search:index`) and the one the
 * build audit inspects authored output inside.
 *
 * Written out rather than `id="content"` because Hugo's minifier may drop the
 * quotes, and because a page whose main element is missing is silently absent
 * from search rather than broken — the failure this pattern exists to catch.
 */
export const MAIN_CONTENT_RE = /<main\b(?=[^>]*(?:^|\s)id\s*=\s*(?:"content"|'content'|content(?=[\s>])))[^>]*>/i;

/**
 * The five XML entities, decoded back to text.
 *
 * ONE pass, not five replaces, and that is the whole point: a figure spec is
 * written into `data-spec` with `&` escaped first, so `5 &lt; h` in the
 * attribute means a literal `<` while `&amp;lt;` means the four characters
 * `&lt;`. Sequential replaces decode the second into the first — the reader
 * then builds a figure whose tick label is the string `&lt;`. A single pass
 * consumes each entity exactly once and cannot double-decode.
 */
export const decodeHtmlEntities = (s) => String(s).replace(
  /&(quot|apos|lt|gt|amp|#34|#39);/g,
  (_, name) => ({
    quot: '"', '#34': '"', apos: "'", '#39': "'", lt: '<', gt: '>', amp: '&',
  }[name]),
);
