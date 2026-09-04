/**
 * Shared primitives for reading authored content.
 *
 * Four things were implemented once per tool and had drifted into four
 * different answers to the same question:
 *
 *   - **directory walking** — ten copies, six byte-identical, disagreeing on
 *     sorting and on whether `_index.md` counts;
 *   - **frontmatter parsing** — two, disagreeing on `title: ""` and on any
 *     value containing an apostrophe;
 *   - **shortcode params** — four, three accepting `\w+` and one `[\w-]+`;
 *   - **math spans** — three escape strategies, one of which was *no strategy
 *     at all*, so an authored `\$5` mis-sliced every later span in that string.
 *
 * None of those divergences was a decision; each was a copy that stopped being
 * updated. This module is the single answer, and the rule for changing it is
 * that a change here is a change to every tool — which is the point.
 *
 * Everything is offset-preserving: masking blanks characters in place rather
 * than deleting them, so a diagnostic still points at the right source line.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { basename, join } from 'node:path';

/** Replace every character except newlines with a space, keeping offsets. */
export const blankPreservingOffsets = (s) => s.replace(/[^\n]/g, ' ');

/* --------------------------------------------------------------- walking */

/**
 * Every file under `root`, depth-first, **sorted**.
 *
 * Sorted output is not cosmetic: an unsorted walk makes a failure list depend
 * on filesystem order, so the same defect reports differently on two machines
 * and a diff of two runs is unreadable.
 *
 * Directories are identified from `withFileTypes` rather than `statSync`,
 * which means a symlinked directory is NOT descended into. That is deliberate
 * — a content tree that grew a symlink would otherwise be walked twice or
 * infinitely — and it is not a behavior change for this repository, which has
 * no symlinks under `content/` or `public/`.
 */
export function walkFiles(root, { filter } = {}) {
  const found = [];
  // A single file is its own one-entry walk, so every tool that takes a
  // content root (`solve-check emit`, the ledger) also takes one page.
  if (statSync(root).isFile()) {
    const name = basename(root);
    return !filter || filter(name, root) ? [root] : [];
  }
  for (const entry of readdirSync(root, { withFileTypes: true }).sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))) {
    const path = join(root, entry.name);
    if (entry.isDirectory()) found.push(...walkFiles(path, { filter }));
    else if (!filter || filter(entry.name, path)) found.push(path);
  }
  return found;
}

/**
 * Every Markdown file under `root`, sorted.
 *
 * `includeIndex` is explicit because the callers genuinely differ and the
 * difference matters: the lint and the verifiers must see `_index.md` (a
 * chapter landing carries lintable frontmatter and section bullets), while the
 * structure validator walks landings separately through its own directory
 * recursion and would double-report them.
 */
export function walkMarkdown(root, { includeIndex = true } = {}) {
  return walkFiles(root, {
    filter: (name) => name.endsWith('.md') && (includeIndex || name !== '_index.md'),
  });
}

/**
 * "shelf/book" for a page inside a book — the two path segments after
 * `content/` — or '' for anything else: a shelf or site landing, a page
 * directly under a shelf, or a test fragment path with no `content/` segment.
 *
 * The one derivation for every per-book rule. The lint's practice floors and
 * Knowledge Check quotas keyed this with a path regex while the
 * multiple-choice distribution gate keyed it by splitting a relative path,
 * and the two agreed by luck rather than by construction.
 */
export function bookKeyOf(filePath) {
  const parts = String(filePath).split(/[\\/]+/).filter((part) => part && part !== '.');
  const at = parts.indexOf('content');
  // Shelf, book, and at least one more segment: the page inside the book.
  return at === -1 || parts.length < at + 4 ? '' : `${parts[at + 1]}/${parts[at + 2]}`;
}

/**
 * Every `<book>.json` media manifest under `dir`, keyed by book name. A
 * malformed manifest is treated as absent: the lint's "no manifest" error
 * and the build audit's empty allowlist both name the real fix (re-run
 * vendor-media) rather than a JSON parse trace. A missing directory is an
 * empty map — a book with no media has no manifest to load.
 */
export function loadMediaManifests(dir) {
  const manifests = new Map();
  if (!existsSync(dir)) return manifests;
  for (const file of readdirSync(dir).sort()) {
    if (!file.endsWith('.json')) continue;
    try {
      manifests.set(file.slice(0, -'.json'.length), JSON.parse(readFileSync(join(dir, file), 'utf8')));
    } catch {
      // Treated as absent — see above.
    }
  }
  return manifests;
}

/* ---------------------------------------------------------- frontmatter */

/**
 * Split a Markdown file into its YAML-ish frontmatter attributes and body.
 *
 * Deliberately a line parser rather than a YAML parser: the corpus writes flat
 * `key: value` frontmatter and nothing else, and a real YAML dependency would
 * be a new runtime dependency to keep pinned for no gain.
 *
 * Two edges the older regex trio in validate-content got wrong, both of which
 * this handles:
 *   - `title: ""` — an empty value is PRESENT-but-empty, which is an authoring
 *     defect. The old `val()` returned undefined (indistinguishable from a
 *     missing key) while `hasKey()` said it was there.
 *   - `title: Ohm's law` — the old `val()` regex was `["']?([^"'\n]+)["']?$`,
 *     so an apostrophe anywhere in the value made the whole match fail and the
 *     title silently read as absent.
 */
export function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) return { attributes: {}, body: markdown };
  const attributes = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z_][\w-]*):\s*(.*?)\s*$/);
    if (!field) continue;
    let value = field[2];
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    attributes[field[1]] = value;
  }
  return { attributes, body: markdown.slice(match[0].length) };
}

/* ------------------------------------------------------------ shortcodes */

// A double-quoted shortcode value, `\"` included. Hugo treats `\"` as an
// escaped quote and every other backslash as a literal — which is what makes
// `answer="$\lvert x-2\rvert$"` work — so only `\"` is unescaped here.
const PARAM_VALUE = String.raw`"((?:[^"\\]|\\.)*)"`;
const PARAM_RE = new RegExp(String.raw`(\w+)\s*=\s*${PARAM_VALUE}`, 'g');
export const unescapeParamValue = (value) => value.replace(/\\"/g, '"');

/**
 * The one shortcode param grammar: `name="value"`, name in `\w+`, value
 * double-quoted, `\"` escaped.
 *
 * This is not a lowest common denominator — it is what Hugo is actually handed
 * in this repository. No shortcode in `layouts/` reads a hyphenated param (the
 * `.Get` census is entirely camelCase) and no page in `content/` writes a
 * hyphenated, single-quoted, or unquoted one. Accepting more would mean the
 * four tools disagree about what a param is, which is how `hint='…'` could
 * once vanish from one tool's view while another still saw it.
 *
 * The `\"` clause is not decoration. All four copies of this regex used
 * `"([^"]*)"`, which stops at the first escaped quote: the two authored hints
 * that open with a quoted phrase (`hint="\"Subtract $A$ from $B$\" means …"`)
 * were read by the lint, the section verifier, and the answer cross-check as a
 * single backslash. Non-empty, so the missing-hint rule stayed quiet; the
 * actual hint text was checked by nothing.
 *
 * `lintHugo` errors on anything inside a recognized opening tag that this
 * grammar drops, so a param this cannot read fails the build rather than
 * silently disappearing.
 */
export function shortcodeParams(body) {
  const params = {};
  for (const match of body.matchAll(PARAM_RE)) params[match[1]] = unescapeParamValue(match[2]);
  return params;
}

/**
 * Where each param's value physically sits, as `{ [name]: { raw, index } }`
 * with `index` relative to `body` (add a shortcode's `openIndex` for a
 * file offset).
 *
 * `shortcodeParams` returns UNESCAPED values, which is what a checker wants to
 * read but not something it can find again: a caller locating the value with
 * `src.indexOf(params[key])` fails on exactly the params whose `\"` was
 * unescaped, and a checker that skips what it cannot locate then exempts them
 * without saying so. Offsets come from here instead, so a rule sees every
 * param or fails loudly.
 *
 * `raw` is the value as written. Escaping only ever turns `\"` into `"`, so a
 * rule about characters (unicode lookalikes, a degree glyph, whitespace) reads
 * the same verdict off either spelling — and off `raw` it reads exact offsets.
 */
export function shortcodeParamSpans(body) {
  const spans = {};
  for (const match of body.matchAll(PARAM_RE)) {
    // +1 for the opening quote that PARAM_RE's group excludes.
    spans[match[1]] = { raw: match[2], index: match.index + match[0].length - match[2].length - 1 };
  }
  return spans;
}

/** The shortcodes this repository defines, and whether they are paired. */
export const PAIRED_SHORTCODES = Object.freeze({
  fillin: false,
  multiplechoice: true,
  graphplot: true,
  apfigure: true,
  callout: true,
  textin: false,
  selfcheck: true,
  sortbins: true,
  mediafigure: true,
});

/**
 * Every parameter each template reads — the `.Get` census of
 * layouts/shortcodes/. A param outside this set is one Hugo accepts and
 * nobody reads, which is how an `accept=` on a multiple choice shipped
 * grading nothing. `callout` is Hextra's own shortcode and is not listed.
 */
export const SHORTCODE_PARAMS = Object.freeze({
  fillin: new Set(['question', 'answer', 'answerDisplay', 'answerForm', 'answerMode', 'hint', 'placeholder']),
  multiplechoice: new Set(['question', 'answer', 'answerIndex', 'hint', 'mode']),
  graphplot: new Set(['question', 'answerDisplay', 'ariaLabel', 'hint', 'snap']),
  apfigure: new Set(['kind']),
  textin: new Set(['question', 'answer', 'accept', 'hint']),
  selfcheck: new Set(['question', 'hint']),
  sortbins: new Set(['question', 'hint']),
  mediafigure: new Set(['src', 'alt', 'kind', 'longdesc', 'eager']),
});

/**
 * Iterate every `{{< name … >}}` shortcode in `src`.
 *
 * Yields `{ params, inner, index, end, open, closed }`:
 *   inner  — the body between the opening and closing tags (paired only)
 *   index  — offset of the opening tag, for diagnostics
 *   open   — the raw opening-tag body, so a caller can check its param syntax
 *   openIndex — file offset of `open`, so `shortcodeParamSpans(open)` offsets
 *            can be turned into file offsets
 *   closed — false when a paired shortcode has no closing tag. Callers must
 *            diagnose that as its own defect: an unclosed `multiplechoice`
 *            used to fall through to "at least two options are required",
 *            which names the wrong problem entirely.
 */
export function* shortcodes(src, name, { paired = PAIRED_SHORTCODES[name] ?? false } = {}) {
  const openRe = new RegExp(`\\{\\{<\\s*${name}\\b([\\s\\S]*?)>\\}\\}`, 'g');
  let m;
  while ((m = openRe.exec(src)) !== null) {
    let inner = '';
    let end = openRe.lastIndex;
    let closed = true;
    if (paired) {
      const closeRe = new RegExp(`\\{\\{<\\s*/${name}\\s*>\\}\\}`, 'g');
      closeRe.lastIndex = openRe.lastIndex;
      const c = closeRe.exec(src);
      if (c) {
        inner = src.slice(openRe.lastIndex, c.index);
        end = closeRe.lastIndex;
        openRe.lastIndex = end;
      } else {
        closed = false;
      }
    }
    // The opening tag is `prefix + m[1] + ">}}"`, so the body starts three
    // characters before the tag's end.
    const openIndex = m.index + m[0].length - 3 - m[1].length;
    yield {
      params: shortcodeParams(m[1]), inner, index: m.index, end, open: m[1], openIndex, closed,
    };
  }
}

/**
 * Param-shaped text inside a shortcode opening tag that `shortcodeParams`
 * silently drops. Returns the offending fragments.
 *
 * Single-quoted, unquoted, and hyphenated params all parse for Hugo and are
 * invisible to every tool here, so the value would be read by the template and
 * by nothing else — or, for a param the template does not define, by nobody at
 * all while looking authored.
 */
export function malformedShortcodeParams(open) {
  const bad = [];
  // Tokenize rather than "blank the good ones and look at the rest": a
  // hyphenated param is not left over, it is PARTIALLY eaten. The canonical
  // regex matches `mode="unordered"` inside `answer-mode="unordered"`, so the
  // value lands under a different key — a silent corruption that a
  // leftover-scan cannot see at all.
  const param = new RegExp(String.raw`([\w-]+)\s*=\s*(?:${PARAM_VALUE}|'([^']*)'|([^\s>'"]+))`, 'y');
  const space = /\s*/y;
  let pos = 0;
  while (pos < open.length) {
    space.lastIndex = pos;
    space.exec(open);
    pos = space.lastIndex;
    if (pos >= open.length) break;
    param.lastIndex = pos;
    const m = param.exec(open);
    if (!m) {
      // Not param-shaped at all — a stray token inside the opening tag.
      const junk = open.slice(pos).match(/^\S+/)?.[0] ?? '';
      bad.push(junk || open.slice(pos));
      pos += junk.length || 1;
      continue;
    }
    const [text, name, , singleQuoted, unquoted] = m;
    if (!/^\w+$/.test(name) || singleQuoted !== undefined || unquoted !== undefined) {
      bad.push(text.trim());
    }
    pos = param.lastIndex;
  }
  return bad;
}

/* ------------------------------------------------------------- masking */

/**
 * Blank fenced code blocks and inline code spans in place — offsets kept —
 * so a tool that reads exercises or math never sees documentation ABOUT
 * them. `svg: true` also blanks inline `<svg>…</svg>`, which is figure
 * markup rather than authored text.
 *
 * One masker for the whole toolchain: seven copies existed, and four of them
 * replaced with a single space, destroying every offset a diagnostic needs.
 * A single-backtick span, deliberately — the matched-run form
 * `maskDocumentation` uses would swallow a LaTeX left-double-quote (``…''
 * inside a \text{}) and blank real math along with it — and an inline span
 * never crosses a line break, or a stray backtick would mask half a page.
 */
export function maskCode(source, { svg = false } = {}) {
  const masked = source
    .replace(/```[\s\S]*?```/g, blankPreservingOffsets)
    .replace(/`[^`\n]*`/g, blankPreservingOffsets);
  return svg ? masked.replace(/<svg\b[\s\S]*?<\/svg>/gi, blankPreservingOffsets) : masked;
}

/* ----------------------------------------------------------- math spans */

// A single-character sentinel keeps offsets exact: `\$` (two characters)
// becomes `\` + NUL (two characters), so every reported index is still an
// index into the caller's own string.
const NUL = '\0';
const shieldEscapedDollars = (s) => s.replaceAll('\\$', `\\${NUL}`);

/**
 * Every `$…$` and `$$…$$` math run in `source`, in source order.
 *
 * ONE escape strategy for the whole toolchain, and it is the sentinel rather
 * than a `(?<!\\)` lookbehind, because the sentinel is what `mathtext.html`
 * does at build time — so what these tools see is what Hugo renders. (The
 * lookbehind agrees with it on every shape in the corpus; the sentinel wins on
 * being the same algorithm as the thing being checked.) The third strategy in
 * the tree was no strategy at all: `tools/lib/openstax-source.mjs` scanned `/\$([^$]+)\$/`
 * raw, so a single authored `\$5` shifted every later span in that string by
 * one delimiter.
 *
 * Options:
 *   maskCode      blank fenced code, inline code spans, and inline `<svg>`
 *                 before scanning — documentation and figure markup are not
 *                 authored math. Offsets are preserved.
 *   allowNewlines let an inline span cross a line break. Off for documents (a
 *                 stray `$` would otherwise swallow half a page); on for a
 *                 shortcode param, which is one logical line.
 *
 * Each run is `{ tex, display, index, length }`, where `index`/`length` locate
 * the whole run — delimiters included — inside `source`, and `tex` is sliced
 * back out of the caller's original string, escapes intact.
 */
export function mathSpans(source, { maskCode: mask = false, allowNewlines = false } = {}) {
  let scan = shieldEscapedDollars(source);
  if (mask) scan = maskCode(scan, { svg: true });
  const runs = [];
  let inlineScan = scan;
  for (const m of scan.matchAll(/\$\$([\s\S]+?)\$\$/g)) {
    runs.push({
      tex: source.slice(m.index + 2, m.index + m[0].length - 2),
      display: true,
      index: m.index,
      length: m[0].length,
    });
    inlineScan = inlineScan.slice(0, m.index)
      + blankPreservingOffsets(m[0])
      + inlineScan.slice(m.index + m[0].length);
  }
  const inlineRe = allowNewlines ? /\$([^$]+?)\$/g : /\$([^$\n]+?)\$/g;
  for (const m of inlineScan.matchAll(inlineRe)) {
    runs.push({
      tex: source.slice(m.index + 1, m.index + m[0].length - 1),
      display: false,
      index: m.index,
      length: m[0].length,
    });
  }
  return runs.sort((a, b) => a.index - b.index);
}

/**
 * True when `text` holds a `$` that opens a math span nothing closes — the
 * shape of unescaped money (`He paid $5`). Escaped `\$` is excluded.
 */
export function hasUnpairedDollar(text) {
  return shieldEscapedDollars(text).replace(/\$([^$]+)\$/g, ' ').includes('$');
}
