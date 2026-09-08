/**
 * The page context an exercise's answer depends on.
 *
 * "The graph above shows y = 2x - 1 … which point is not on the line?" has
 * an answer that lives half in the shortcode and half in the apfigure above
 * it. The answer ledger (tools/verify/answer-ledger.mjs) hashes the shortcode
 * to identify a verified exercise; without this module a reversed shading or
 * a moved intercept in the figure left the dependent question's verdict
 * standing, with the ledger still saying "ok" about an answer that was now
 * wrong. Every question that names a figure, graph, or table on the page is
 * bound here to the nearest such block in the direction it names, so that
 * block's source is part of the exercise's identity and travels with it in a
 * blind-solve packet.
 *
 * Three pieces, all pure:
 *   referencesContext — does the stem, hint, or option list name a figure,
 *                       graph, or table on the page, and in which direction?
 *   figureLikeBlocks  — every block an exercise can depend on, with offsets
 *   dependencyOf      — the block a reference resolves to, or null (which
 *                       the lint reports: a reference to nothing is a defect)
 */
import { blankPreservingOffsets, maskCode, shortcodes } from './content.mjs';

/** What a stem may call the thing it depends on. */
export const CONTEXT_NOUN = '(?:figure|graph|graphs|table|diagram|image|micrograph|photo|photograph|chart|plot|drawing|illustration|number line|scatter ?plot|histogram|tree|sketch|picture|data)';
/** The nouns that name a concrete page object even after a bare "in" or
 * "on": "points on the graph", "on the number line", "on the tree" are how
 * math and phylogeny prose talk about an abstraction, not a figure. */
const PICTURE_NOUN = '(?:figure|table|diagram|image|micrograph|photo|photograph|chart|drawing|illustration|picture|sketch)';

/**
 * Anchored phrases, not word co-occurrence: "which of the following
 * statements is shown to be true" must not bind. Each alternative is a way
 * a stem points at page context — "the graph above", "shown below",
 * "according to the table", "using the same figure".
 */
export const CONTEXT_PHRASE_RE = new RegExp(
  '\\b(?:'
  + `(?:the|this|that|each|both|these|those) (?:(?:same|two|three|bar|line|following) )?${CONTEXT_NOUN}s? (?:(?:shown|pictured|given|displayed|drawn|plotted) )?(?:above|below)\\b`
  + '|(?:shown|pictured) (?:above|below)\\b'
  + `|(?:above|below) ${CONTEXT_NOUN}s?\\b`
  + `|(?:using|use|from|refer to|according to|based on) (?:(?:the|this) )?(?:(?:same|following|preceding) )?${CONTEXT_NOUN}s?\\b(?! of| that| in)`
  + `|(?:in|on) (?:the|this) (?:(?:same|following|preceding) )?${PICTURE_NOUN}s?\\b(?! of| that| in)`
  + `|(?:the|this) same ${CONTEXT_NOUN}s?\\b`
  + ')',
  'i',
);

/** The kinds of block an exercise can depend on, in the order they are
 * searched for; a graphplot is a KEY the learner draws, never a figure. */
const BLOCK_PATTERNS = [
  ['svg', /<svg\b[\s\S]*?<\/svg>/gi],
  ['table', /(?:^[ \t]*\|[^\n]*(?:\n|$)){2,}/gm],
  ['image', /!\[[^\]]*\]\([^)]*\)/g],
  ['img', /<img\b[^>]*>/gi],
];

/**
 * Every figure-like block in `src`, sorted by offset: `{ kind, index, end,
 * raw }` for closed apfigure / mediafigure shortcodes, inline `<svg>`,
 * Markdown pipe tables, Markdown images, and `<img>` tags. Code and HTML
 * comments are masked first (a fenced example is documentation). A block
 * inside one of `exerciseSpans` belongs to that exercise (a table inside a
 * selfcheck's model answer) and is dropped; of two nested blocks (an image
 * in a table cell) only the outer survives.
 */
export function figureLikeBlocks(source, { exerciseSpans = [] } = {}) {
  const src = maskCode(source).replace(/<!--[\s\S]*?-->/g, blankPreservingOffsets);
  const found = [];
  for (const kind of ['apfigure', 'mediafigure']) {
    for (const sc of shortcodes(src, kind)) {
      if (sc.closed) found.push({ kind, index: sc.index, end: sc.end });
    }
  }
  for (const [kind, re] of BLOCK_PATTERNS) {
    for (const m of src.matchAll(re)) found.push({ kind, index: m.index, end: m.index + m[0].length });
  }
  found.sort((a, b) => a.index - b.index || b.end - a.end);
  const blocks = [];
  let coveredTo = -1;
  for (const block of found) {
    if (block.index < coveredTo) continue; // nested in the previous block
    if (exerciseSpans.some((span) => block.index >= span.index && block.end <= span.end)) continue;
    blocks.push({ ...block, raw: src.slice(block.index, block.end) });
    coveredTo = block.end;
  }
  return blocks;
}

/**
 * The phrase that binds an exercise to page context, with the direction it
 * points, or null. Reads the question, the hint, and — for a multiple
 * choice or selfcheck — the inner text, except a graph-mode multiple
 * choice's inner, which is figure-spec JSON whose `ariaLabel`s describe
 * the options, not the page. "below" wins only when nothing says "above":
 * "the table above lists … the values below" still reads from above.
 */
export function referencesContext({ kind, params = {}, inner = '' }) {
  const scanInner = (kind === 'multiplechoice' && params.mode !== 'graph') || kind === 'selfcheck';
  const text = [params.question || '', params.hint || '', scanInner ? inner : ''].join(' ');
  const m = CONTEXT_PHRASE_RE.exec(text);
  if (!m) return null;
  const direction = /\bbelow\b/i.test(text) && !/\babove\b/i.test(text) ? 'below' : 'above';
  return { phrase: m[0], direction };
}

/**
 * Which block kinds a noun can mean. A life-sciences "table" is often a
 * mediafigure image (the table-image rule), so a table noun admits images;
 * a "photograph" or "micrograph" is never a Markdown table, so a picture
 * noun refuses one — "in the photograph" used to bind to the nearer table
 * and skip the mediafigure it meant.
 */
const PICTURE_KINDS = new Set(['apfigure', 'mediafigure', 'svg', 'image', 'img']);
const kindsFor = (phrase) => {
  const noun = ((phrase || '').match(new RegExp(CONTEXT_NOUN, 'i')) || [''])[0].toLowerCase();
  if (!noun || /^(table|data|chart)$/.test(noun)) return null; // any kind: a table can be an image, data a figure
  return PICTURE_KINDS;
};

/**
 * The block a reference resolves to: the nearest one ending before the
 * exercise ("above") or starting after it ("below") whose kind the named
 * noun can mean, or null when there is none in that direction. Exercises
 * are never blocks, so a second "using the same graph" question skips the
 * question before it and binds to the figure both of them read.
 */
export function dependencyOf(exercise, blocks, reference) {
  if (!reference) return null;
  const kinds = kindsFor(reference.phrase);
  const admits = (block) => !kinds || kinds.has(block.kind);
  if (reference.direction === 'below') {
    return blocks.find((block) => block.index >= exercise.end && admits(block)) ?? null;
  }
  let nearest = null;
  for (const block of blocks) {
    if (block.end > exercise.index) break;
    if (admits(block)) nearest = block;
  }
  return nearest;
}
