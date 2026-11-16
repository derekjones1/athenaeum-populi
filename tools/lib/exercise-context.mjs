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
  // A figure named by what it shows and placed AFTER its item: "the figure
  // of the photons a hydrogen atom absorbs and emits, below" (Chemistry
  // 6.2) — the form the Chemistry playbook gives a figure the source places
  // after its item. "Below" only: the same form with "above" (5.2's
  // calorimeter) would bind 18 finished items anew and strand their ledger
  // records, measured November 15, 2026.
  + `|(?:the|this) ${PICTURE_NOUN} of [^.?!;]{1,90}?,? below\\b`
  // A TABLE named by what it shows, above its item: "the table of specific
  // heats above" (Chemistry 5.1), "the table of formed elements above"
  // (Microbiology 17.3). The `(?! of)` guards above leave these unread, so
  // four items of 5.1 were bound to nothing; and on a page with several
  // tables the name is what says which one (`dependencyOf`).
  + '|(?:the|this) table of [^.?!;,]{1,60}? above\\b'
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
    // A Markdown table's title, where the page prints one: the bold line
    // directly above it ("**Bond Energies (kJ/mol)**"). It is what a
    // reference that names the table is matched against (`dependencyOf`);
    // it is not part of the block, so it is not part of an item's identity.
    const title = block.kind === 'table' ? (/(?:^|\n)\*\*([^\n]+?)\*\*[ \t]*\n\s*$/.exec(src.slice(Math.max(0, block.index - 400), block.index)) || [])[1] : undefined;
    blocks.push({ ...block, raw: src.slice(block.index, block.end), ...(title ? { title } : {}) });
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
  // "…from the following data: N₂(g) + 2O₂(g) ⟶ 2NO₂(g) ΔH° = 66.4 kJ; …"
  // (Chemistry 5.3): what follows the colon is the data, in the stem itself.
  // Read as page context it bound the item to a diagram 500 lines up.
  const m = [...text.matchAll(new RegExp(CONTEXT_PHRASE_RE.source, 'gi'))]
    .find((match) => !(/\bfollowing\b/i.test(match[0]) && text[match.index + match[0].length] === ':'));
  if (!m) return null;
  // A figure or table named with a describing phrase says its own direction,
  // whatever else the text says ("…, below" beside a hint's "the value of k given above").
  const named = /^(?:the|this) \S+ of .*?(above|below)$/i.exec(m[0]);
  const direction = named ? named[1].toLowerCase()
    : /\bbelow\b/i.test(text) && !/\babove\b/i.test(text) ? 'below' : 'above';
  return { phrase: m[0], direction };
}

/**
 * Which blocks a noun can mean. A "photograph" or "micrograph" is never a
 * Markdown table, so a picture noun refuses one — "in the photograph" used
 * to bind to the nearer table and skip the mediafigure it meant. "Data" and
 * "chart" can be a table or a figure, so they take whichever is nearest.
 *
 * A "table" is a Markdown table, or a picture whose description opens by
 * calling it one (the life-sciences table-image rule). It used to take the nearest block of any
 * kind, and "take each specific heat from the table above" bound eight items
 * of Chemistry 5.1 to the photograph of a solar plant that stands between
 * them and the table; 37 items in five books were bound to a picture with
 * the table they meant further up the page (measured November 16, 2026).
 * Where no table lies in the named direction the nearest block still
 * stands — a table printed as an image whose description does not call it
 * one — so the change un-binds nothing.
 */
const PICTURE_KINDS = new Set(['apfigure', 'mediafigure', 'svg', 'image', 'img']);
// The description opens "A table", "A three-column table". A file NAME is
// not read: Microbiology's `…_TaxaTable` is four pictures from one column of
// the Markdown table above it, and the table is what its items read.
const SAYS_TABLE = /\balt="(?:(?:a|an|the)\s+)?(?:[\w-]+\s+){0,2}table\b/i;
/** Is this block a table: a Markdown table, or a picture whose description opens by calling it one? */
export const isTableBlock = (block) => block.kind === 'table'
  || (PICTURE_KINDS.has(block.kind) && SAYS_TABLE.test(block.raw ?? ''));
const ANY_BLOCK = () => true;
const admittedBy = (phrase) => {
  const noun = ((phrase || '').match(new RegExp(CONTEXT_NOUN, 'i')) || [''])[0].toLowerCase();
  if (!noun || /^(data|chart)$/.test(noun)) return { admits: ANY_BLOCK };
  if (noun === 'table') return { admits: isTableBlock, orNearest: true };
  return { admits: (block) => PICTURE_KINDS.has(block.kind) };
};

/**
 * The block a reference resolves to: the nearest one ending before the
 * exercise ("above") or starting after it ("below") that the named noun can
 * mean, or null when there is none in that direction. Exercises are never
 * blocks, so a second "using the same graph" question skips the question
 * before it and binds to the figure both of them read.
 */
export function dependencyOf(exercise, blocks, reference) {
  if (!reference) return null;
  const { admits, orNearest } = admittedBy(reference.phrase);
  const nearest = (allowed) => {
    if (reference.direction === 'below') {
      return blocks.find((block) => block.index >= exercise.end && allowed(block)) ?? null;
    }
    let found = null;
    for (const block of blocks) {
      if (block.end > exercise.index) break;
      if (allowed(block)) found = block;
    }
    return found;
  };
  const name = TABLE_NAMED.exec(reference.phrase ?? '');
  return (name && namedTable(name[1], exercise, blocks, reference.direction))
    ?? nearest(admits) ?? (orNearest ? nearest(ANY_BLOCK) : null);
}

/**
 * "The table of bond energies above" on a page with several tables: the one
 * in that direction whose title and header row share the most words with the
 * name. Chemistry 7.5 prints "Bond Energies (kJ/mol)" and, below it,
 * "Average Bond Lengths and Bond Energies for Some Common Bonds"; both carry
 * the name's two words, so the title with the fewest words the name does not
 * say is the one named. A Markdown table is taken before a picture of it
 * (Microbiology prints the source's picture under its transcription), and
 * the nearest of what is left. Null when no table shares a word: the nearest
 * table then stands.
 *
 * Only the NAME is read, never the rest of the item. An item's other words
 * pick the wrong table as often as the right one (five math items under "the
 * table above" share a stray word with a table far up the page, measured
 * November 16, 2026), and a binding that moved with a reworded hint would
 * re-hash the item.
 */
const TABLE_NAMED = /^(?:the|this) table of (.+?),? (?:above|below)$/i;
const NAME_STOP = new Set(['the', 'and', 'for', 'each', 'its', 'their', 'this', 'that', 'with', 'from', 'some']);
const nameWords = (text) => new Set((String(text).toLowerCase().replace(/[’']s\b/g, '').match(/[a-z][a-z-]{2,}/g) || [])
  .map((word) => word.replace(/ies$/, 'y').replace(/s$/, '')).filter((word) => !NAME_STOP.has(word)));
function namedTable(name, exercise, blocks, direction) {
  const wanted = nameWords(name);
  const tables = blocks.filter((block) => isTableBlock(block)
    && (direction === 'below' ? block.index >= exercise.end : block.end <= exercise.index));
  // Nearest first, so of two equal candidates the nearer is kept.
  if (direction !== 'below') tables.reverse();
  let best = null;
  for (const table of tables) {
    const says = nameWords(`${table.title ?? ''} ${table.raw.split('\n')[0]}`);
    const shared = [...wanted].filter((word) => says.has(word)).length;
    if (!shared) continue;
    const titled = nameWords(table.title ?? table.raw.split('\n')[0]);
    const candidate = { table, shared, markdown: table.kind === 'table' ? 1 : 0, extra: [...titled].filter((word) => !wanted.has(word)).length };
    if (!best
      || candidate.shared > best.shared
      || (candidate.shared === best.shared && candidate.markdown > best.markdown)
      || (candidate.shared === best.shared && candidate.markdown === best.markdown && candidate.extra < best.extra)) best = candidate;
  }
  return best?.table ?? null;
}

/** The exercise shortcodes a page item can be, for `mediaBindings`. */
const EXERCISE_KINDS = ['multiplechoice', 'fillin', 'textin', 'selfcheck', 'sortbins'];

/**
 * The source image each exercise on a page is bound to, as a Map from
 * `"<kind>:<index>"` to the file stem of the `mediafigure` its stem points at
 * ("the figure above" under `src="chemistry/CNX_Chem_02_04_Question3a_img"`
 * gives `CNX_Chem_02_04_Question3a_img`). An exercise that names no figure,
 * or whose reference resolves to a table or a drawn figure, has no entry.
 *
 * The source gates read this for a lettered part that is ONLY an image
 * ("(a) [structure] (b) [structure]"): every such part's item prints the same
 * words, and the figure it is bound to is what tells the parts apart
 * (tools/lib/keyed-units.mjs `unitScore`).
 */
export function mediaBindings(source) {
  const exercises = EXERCISE_KINDS.flatMap((kind) => [...shortcodes(source, kind)].map((sc) => ({ kind, ...sc })));
  const blocks = figureLikeBlocks(source, { exerciseSpans: exercises });
  const bound = new Map();
  for (const exercise of exercises) {
    const block = dependencyOf(exercise, blocks, referencesContext(exercise));
    if (!block || block.kind !== 'mediafigure') continue;
    const src = /\bsrc="([^"]*)"/.exec(block.raw);
    if (src) bound.set(`${exercise.kind}:${exercise.index}`, src[1].split('/').pop());
  }
  return bound;
}
