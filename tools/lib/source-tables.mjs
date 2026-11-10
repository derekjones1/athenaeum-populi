/**
 * Source tables — one reading of a CNXML module's `<table>`s and of a page's
 * Markdown tables, reduced to the same comparable text.
 *
 * A reference page (Chemistry 2e's appendices: 403 rows of thermodynamic
 * data, 136 half-cell potentials, 121 solubility products) is data a keyed
 * exercise is worked from, so a digit that drifts in transcription is a wrong
 * answer three chapters away. Two tools read through this module:
 *
 *   tools/source/appendix-draft.mjs       writes a page's tables FROM the CNXML
 *   tools/verify/verify-source-tables.mjs compares a page's tables TO the CNXML
 *
 * They share the table STRUCTURE read here (rows, spans, carried cells) and
 * nothing else: the draft tool has its own Markdown emitter, and the gate
 * compares `sourceSkeleton` with `pageSkeleton`, neither of which the emitter
 * uses, so an emitter bug is not also a blind spot in the gate.
 *
 * A skeleton is the cell's characters with the typesetting taken away — tags,
 * `$…$`, `\ce{…}`, `\text{…}`, braces, spaces, emphasis — and the spellings
 * of one character folded together (the three minus signs, the arrows, the
 * multiplication dots). `1.6605402 <m:math>×</m:math> 10<sup>−27</sup> kg`
 * and `$1.6605402 \times 10^{-27}$ kg` are both `1.6605402×10-27kg`. With
 * `marks`, a sub- or superscript run keeps a `_` or `^` in front, so
 * `Al<sup>3+</sup>` and `Al³⁺` are both `Al^3+` while `Al₃₊` is not; marks
 * are compared only for a page cell that is not math, since MathML does not
 * say sub or super the way the text markup does.
 */
import {
  decodeXmlEntities, descendants, elementChildren, firstElement, localName, parseXml,
} from './openstax-source.mjs';

const SUB = '₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎ₐₑₒₓₕₖₗₘₙₚₛₜ';
const SUB_ASCII = '0123456789+-=()aeoxhklmnpst';
const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿⁱ';
const SUP_ASCII = '0123456789+-=()ni';

/** Fold the spellings of one character together and drop everything that is typesetting. */
function fold(text) {
  return text
    .replace(/[−–—‐‑-]/g, '-')
    .replace(/[⟶→]/g, '→')
    .replace(/[⇌⇄⟷↔]/g, '⇌')
    .replace(/[∙⋅•·]/g, '·')
    .replace(/[µμ]/g, 'μ')
    .replace(/[′’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/(\d),(?=\d{3}(?!\d))/g, '$1')
    .replace(/\s+/g, '');
}

/** The media stem an `<image src>` names: `../../media/CNX_x_img.jpg` → `CNX_x_img`. */
export function mediaStem(src) {
  return String(src || '').replace(/^.*\//, '').replace(/\.[a-z0-9]+$/i, '');
}

/**
 * A source cell's skeleton. `images` maps a media stem to the text the page
 * writes for it (a formula printed as an image) or to `''` (a drawing the
 * page shows as a figure outside the table); an image with no entry stays
 * visible as `[img:<stem>]`, so an unreviewed one cannot match anything.
 */
export function sourceSkeleton(node, { marks = false, images = {} } = {}) {
  const walk = (current) => {
    if (typeof current === 'string') return current;
    const name = localName(current);
    if (name === 'footnote') return '';
    if (name === 'newline') return ' ';
    if (name === 'media') {
      const image = descendants(current, (child) => localName(child) === 'image')[0];
      const stem = mediaStem(image?.attributes.src);
      // The listed text carries its `_`/`^` marks; a plain reading drops them.
      if (!Object.hasOwn(images, stem)) return `[img:${stem}]`;
      return marks ? images[stem] : images[stem].replace(/[_^]/g, '');
    }
    const kids = (current.children || []).filter((child) => typeof child !== 'string' || child.trim());
    // MathML that a flat reading would scramble: a fraction is num/den, and a
    // base with both scripts reads superscript first — the order the page's
    // LaTeX writes a nuclide (`^{14}_{6}C`) and a quantity (`H^\circ_\text{f}`).
    if (name === 'mfrac' && kids.length === 2) return `${walk(kids[0])}/${walk(kids[1])}`;
    if (name === 'msubsup' && kids.length === 3) return `${walk(kids[0])}${walk(kids[2])}${walk(kids[1])}`;
    const inner = (current.children || []).map(walk).join('');
    if (marks && name === 'sub') return `_${inner}`;
    if (marks && name === 'sup') return `^${inner}`;
    return inner;
  };
  return fold(walk(node));
}

/** The footnotes a source cell carries, each as its skeleton. */
export function sourceFootnotes(node) {
  return descendants(node, (child) => localName(child) === 'footnote')
    .map((footnote) => fold((footnote.children || []).map(function text(child) {
      return typeof child === 'string' ? child : (child.children || []).map(text).join('');
    }).join('')));
}

const LATEX_WORDS = Object.freeze({
  times: '×', cdot: '·', Delta: 'Δ', alpha: 'α', beta: 'β', gamma: 'γ', mu: 'μ', circ: '°', degree: '°',
  rightarrow: '→', longrightarrow: '→', rightleftharpoons: '⇌', pm: '±', approx: '≈', '%': '%',
  log: 'log', ln: 'ln', exp: 'exp', sin: 'sin', cos: 'cos', tan: 'tan',
});

/** A page cell's skeleton. `marks` asks for the `_`/`^` run marks (a non-math cell only). */
export function pageSkeleton(cell, { marks = false } = {}) {
  let text = cell
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/\\([|[\]])/g, '$1')
    .replace(/\\\*|[†‡§]/g, '')
    .replace(/<\/?(?:sub|sup|u|strong|em)>/gi, '');
  const isMath = /\$/.test(text);
  // Math: arrows and words first (mhchem's `->` and `<=>`), then the
  // typesetting. `\frac{1}{2}` and mhchem's `1/2` are both `1/2`.
  text = text
    .replace(/<=>/g, '⇌')
    .replace(/-->|->/g, '→')
    .replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, '$1/$2')
    .replace(/\\(?:text|ce|mathrm|mathit|textit|pu)\s*\{/g, '{')
    .replace(/\\([A-Za-z]+|%)/g, (whole, word) => LATEX_WORDS[word] ?? '')
    .replace(/\\[ ,;:!]/g, ' ')
    .replace(/\{,\}/g, '');
  // Inside a `$…$` span a `*` is mhchem's hydrate dot and `^`/`_` are
  // typesetting; outside one a `*` is emphasis.
  text = text.split(/(\$[^$]*\$)/).map((part, index) => (index % 2
    ? part.replace(/[\^_]/g, '').replace(/\*/g, '·')
    : part.replace(/\*/g, ''))).join('');
  text = text.replace(/[${}]/g, '');
  const run = (alphabet, ascii, mark) => {
    const pattern = new RegExp(`[${alphabet}]+`, 'g');
    text = text.replace(pattern, (chars) => (marks && !isMath ? mark : '')
      + [...chars].map((char) => ascii[alphabet.indexOf(char)]).join(''));
  };
  run(SUB, SUB_ASCII, '_');
  run(SUP, SUP_ASCII, '^');
  return fold(text);
}

/**
 * Every `<table>` in a module, in document order, with its rows laid on the
 * table's column grid: a cell a `morerows` span carries into the rows below
 * it appears there again, marked `carried`, so each row reads whole; a cell
 * spanning every column (`namest`…`nameend`) marks its row `spanning` — the
 * table's printed title in `<thead>`, a group heading in `<tbody>`.
 *
 * @returns {{ id: string, columns: number, head: Row[], body: Row[] }[]}
 *   Row = { cells: ({ node, colSpan, carried } | null)[], spanning: boolean }
 */
export function moduleTables(xml) {
  const document = typeof xml === 'string' ? parseXml(xml) : xml;
  return descendants(document, (node) => localName(node) === 'table').map((table) => {
    const tgroup = firstElement(table, 'tgroup');
    const columns = Number(tgroup?.attributes.cols || 0);
    const names = new Map(elementChildren(tgroup, 'colspec').map((spec, index) => [spec.attributes.colname, index]));
    const layout = (section) => {
      const carry = new Array(columns).fill(null);
      return elementChildren(firstElement(tgroup, section), 'row').map((row) => {
        const cells = new Array(columns).fill(null);
        for (let column = 0; column < columns; column += 1) {
          if (carry[column]) {
            cells[column] = { node: carry[column].node, colSpan: 1, carried: true };
            carry[column].rows -= 1;
            if (!carry[column].rows) carry[column] = null;
          }
        }
        let cursor = 0;
        for (const entry of elementChildren(row, 'entry')) {
          const start = names.has(entry.attributes.namest) ? names.get(entry.attributes.namest) : null;
          while (start === null && cells[cursor]) cursor += 1;
          const from = start ?? cursor;
          const to = names.has(entry.attributes.nameend) ? names.get(entry.attributes.nameend) : from;
          cells[from] = { node: entry, colSpan: to - from + 1, carried: false };
          for (let column = from + 1; column <= to; column += 1) cells[column] = { node: null, colSpan: 0, carried: false };
          const more = Number(entry.attributes.morerows || 0);
          if (more) carry[from] = { node: entry, rows: more };
          cursor = to + 1;
        }
        // A title or a group heading: one entry across every column — or, in
        // `<thead>`, a lone first entry (some tables omit the span).
        const filled = cells.filter((cell) => cell?.node).length;
        const spanning = columns > 1 && (cells[0]?.colSpan === columns || (section === 'thead' && filled === 1 && Boolean(cells[0]?.node)));
        return { cells, spanning };
      });
    };
    return { id: table.attributes.id || '', columns, head: layout('thead'), body: layout('tbody') };
  });
}

/** Split one Markdown table row into its cells; `\|` is a literal bar, and a bar inside `$…$` or a shortcode is not a separator. */
export function splitRow(line) {
  const cells = [];
  let current = '';
  let math = false;
  let shortcode = 0;
  const body = line.trim().replace(/^\|/, '').replace(/\|\s*$/, '');
  for (let index = 0; index < body.length; index += 1) {
    const char = body[index];
    if (char === '\\' && index + 1 < body.length) { current += char + body[index + 1]; index += 1; continue; }
    if (char === '$') math = !math;
    if (body.startsWith('{{<', index)) shortcode += 1;
    if (body.startsWith('>}}', index)) shortcode = Math.max(0, shortcode - 1);
    if (char === '|' && !math && !shortcode) { cells.push(current.trim()); current = ''; continue; }
    current += char;
  }
  cells.push(current.trim());
  return cells;
}

/**
 * A page's Markdown tables and the headings between them, in order.
 *
 * @returns {{ tables: { line: number, heading: string, title: string, header: string[], rows: string[][] }[] }}
 *   `heading` is the nearest `##`/`###` heading above the table and `title`
 *   the bold line directly above it, each '' when absent.
 */
export function pageTables(markdown) {
  const lines = markdown.split('\n');
  const tables = [];
  let heading = '';
  for (let index = 0; index < lines.length; index += 1) {
    const headingMatch = lines[index].match(/^#{2,4}\s+(.*?)\s*$/);
    if (headingMatch) { heading = headingMatch[1]; continue; }
    if (!/^\s*\|/.test(lines[index]) || !/^\s*\|?\s*:?-{3,}/.test(lines[index + 1] || '')) continue;
    let above = index - 1;
    while (above >= 0 && !lines[above].trim()) above -= 1;
    const titleMatch = above >= 0 ? lines[above].match(/^\*\*(.+?)\*\*\s*$/) : null;
    const header = splitRow(lines[index]);
    const rows = [];
    let cursor = index + 2;
    for (; cursor < lines.length && /^\s*\|/.test(lines[cursor]); cursor += 1) rows.push(splitRow(lines[cursor]));
    tables.push({ line: index + 1, heading, title: titleMatch ? titleMatch[1] : '', header, rows });
    index = cursor - 1;
  }
  return { tables };
}

export { decodeXmlEntities };
