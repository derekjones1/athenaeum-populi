#!/usr/bin/env node
/**
 * appendix-draft — write the Markdown tables of a reference page from the
 * pinned CNXML, so that no cell of a data table is typed by hand.
 *
 *   node tools/source/appendix-draft.mjs --book chemistry --appendix G [--groups column|headings|rows] [--unfold N]
 *   node tools/source/appendix-draft.mjs --module <path/to/index.cnxml> …
 *
 * It prints a DRAFT of the page body: each table's printed title as a bold
 * line, the header row, the data rows, and the table's footnotes as
 * sentences below it. The author finishes it — the frontmatter, the prose,
 * the figures, the footer — and `npm run verify:source-tables` then holds
 * every cell of the finished page to the CNXML, so a hand edit that changes
 * a value fails there. Lines the tool could not write in the house notation
 * are listed on stderr with their table row.
 *
 * What it writes (docs/subjects/chemistry.md "Notation" and "Appendices"):
 *   - a formula in a text cell in Unicode: `Al³⁺(*aq*)`, `BaC₂O₄·2H₂O`;
 *   - a MathML cell as `$\ce{…}$`: `$\ce{Ag2CrO4 + 2e^- -> 2Ag + CrO4^2-}$`;
 *   - a power of ten as math, with its coefficient: `$1.8 \times 10^{-5}$`;
 *   - a unit with a negative exponent as math: `$\text{J}\ \text{K}^{-1}$`;
 *   - a minus sign in a text cell as U+2212, whatever dash the source typed;
 *   - a table footnote as `*`, `†`, `‡`, `§` on the cell and a sentence
 *     below the table (a superscript numeral on a unit reads as a power);
 *   - a cell the source breaks across lines as one row per line, the row's
 *     other cells repeated (a `<br>` between math spans does not typeset);
 *   - a cell a `morerows` span carries down, repeated on each row;
 *   - a full-width group row (`--groups`): a `## heading` that starts a new
 *     table (`headings`, the default), a leading column repeated on each row
 *     (`column`), or a bold first cell on a row of its own (`rows`);
 *   - a table the print folds into side-by-side column sets (`--unfold 3`:
 *     six columns that are one three-column list set twice) as one list, the
 *     left set first.
 * An image in a cell is written `[img:<stem>]` for the author to resolve.
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseCliArgs } from '../lib/cli.mjs';
import {
  bundleSourceDirectory, descendants, loadSourceLock, localName, parseCollectionXml, parseXml,
} from '../lib/openstax-source.mjs';
import { mediaStem, moduleTables } from '../lib/source-tables.mjs';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

const SUBSCRIPT = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉', '+': '₊', '-': '₋' };
const SUPERSCRIPT = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', '+': '⁺', '-': '⁻' };
const ascii = (text) => text.replace(/[−–]/g, '-');
const unicodeRun = (text, table) => [...ascii(text)].map((char) => table[char] ?? null);
const STATES = new Set(['s', 'l', 'g', 'aq']);
const FOOTNOTE_MARKS = ['*', '†', '‡', '§'];

/** MathML → the body of a `\ce{…}`: a half-reaction, an equilibrium, a nuclide. */
export function mathToCe(node) {
  const flat = (current) => {
    if (typeof current === 'string') return current.trim();
    const name = localName(current);
    const kids = (current.children || []).filter((child) => typeof child !== 'string' || child.trim());
    if (name === 'mspace') return '';
    if (name === 'mo') {
      const symbol = kids.map(flat).join('');
      if (symbol === '⟶' || symbol === '→') return ' -> ';
      if (symbol === '⇌') return ' <=> ';
      if (symbol === '+') return ' + ';
      if (symbol === '−' || symbol === '–') return '-';
      return symbol;
    }
    if (name === 'mfrac') return `${flat(kids[0])}/${flat(kids[1])} `;
    if (name === 'msub') return `${flat(kids[0])}${flat(kids[1])}`;
    if (name === 'msup') return `${flat(kids[0])}^${ascii(flat(kids[1]).replace(/\s+/g, ''))}`;
    if (name === 'msubsup') {
      const base = flat(kids[0]);
      const sub = flat(kids[1]).replace(/\s+/g, '');
      const sup = ascii(flat(kids[2]).replace(/\s+/g, ''));
      return base ? `${base}${sub}^${sup}` : `^{${sup}}_{${sub}}`;
    }
    return kids.map(flat).join('');
  };
  return ascii(flat(node)).replace(/\s+/g, ' ').trim();
}

const isTimes = (node) => typeof node !== 'string' && localName(node) === 'math'
  && descendants(node, (child) => ['mi', 'mn', 'mtext', 'mfrac', 'msub', 'msup'].includes(localName(child))).length === 0;

/**
 * One cell → Markdown. Works on a linear string in which a sub- or
 * superscript is ⟦_…⟧ / ⟦^…⟧ and an italic run is ⟦i…⟧, so the house
 * notation can be decided by what stands NEXT to what.
 */
export function cellMarkdown(node, { warn = () => {}, footnoteMark = () => '*' } = {}) {
  const linear = (current) => {
    if (typeof current === 'string') return current.replace(/\s+/g, ' ');
    const name = localName(current);
    const inner = () => (current.children || []).map(linear).join('');
    if (name === 'newline') return '⟦BR⟧';
    if (name === 'footnote') return `⟦FN${footnoteMark(current)}⟧`;
    if (name === 'media') {
      const image = descendants(current, (child) => localName(child) === 'image')[0];
      return `[img:${mediaStem(image?.attributes.src)}]`;
    }
    if (name === 'math') return isTimes(current) ? '×' : `⟦ce:${mathToCe(current)}⟧`;
    if (name === 'sub') return `⟦_${inner()}⟧`;
    if (name === 'sup') return `⟦^${inner()}⟧`;
    if (name === 'emphasis') {
      if (current.attributes.class === 'emphasis-one' || current.attributes.effect === 'bold') return `⟦B:${inner()}⟧`;
      return `⟦I:${inner()}⟧`;
    }
    return inner();
  };
  // `HCO<sub>3</sub> <sup>–</sup>`: a space the source typed between a
  // formula and its charge is not part of the formula.
  let text = linear(node).trim().replace(/(⟦_[^⟧]+⟧) (⟦\^\d*[+−–-]⟧)/g, '$1$2');

  const exponent = (raw) => ascii(raw).replace(/^\+/, '');
  const grouped = (number) => number.replace(/,/g, '{,}');
  // a × 10ⁿ, and a bare 10ⁿ.
  text = text.replace(/(\d[\d.,]*)\s*×\s*10⟦\^([^⟧]+)⟧/g, (whole, a, n) => `$${grouped(a)} \\times 10^{${exponent(n)}}$`);
  text = text.replace(/(?<![\d.$])10⟦\^([^⟧]+)⟧/g, (whole, n) => `$10^{${exponent(n)}}$`);
  // A compound unit with a negative exponent: J K⁻¹, kg m⁻¹ s⁻², J∙g⁻¹∙°C⁻¹.
  text = text.replace(/((?:[A-Za-zμ°]+(?:⟦\^[^⟧]+⟧)?(?:[ ∙·](?=[A-Za-zμ°]))?)+)/g, (whole) => {
    if (!/⟦\^[−–-]\d+⟧/.test(whole)) return whole;
    const parts = [...whole.matchAll(/([A-Za-zμ°]+)(?:⟦\^([^⟧]+)⟧)?([ ∙·])?/g)];
    // A degree sign in math is ^\circ (lint): °C → {}^\circ\text{C}.
    const upright = (unit) => (unit.startsWith('°') ? `{}^\\circ\\text{${unit.slice(1)}}` : `\\text{${unit}}`);
    return `$${parts.map(([, unit, power, joiner]) => `${upright(unit)}${power ? `^{${exponent(power)}}` : ''}`
      + (joiner === ' ' ? '\\ ' : joiner ? '{\\cdot}' : '')).join('')}$`;
  });
  // An italic symbol with a subscript label: Kₐ, K_sp, pK_w, ΔH.
  text = text.replace(/⟦I:([^⟦⟧]*)⟦_([^⟧]+)⟧([^⟦⟧]*)⟧/g, (whole, base, sub, tail) => `$${base}_\\text{${sub}}${tail}$`);
  text = text.replace(/⟦I:([^⟦⟧]+)⟧⟦_([A-Za-z]+)⟧/g, (whole, base, sub) => `$${base}_\\text{${sub}}$`);
  // What is left of a superscript: a charge or a positive power, in Unicode.
  text = text.replace(/⟦\^([^⟧]+)⟧/g, (whole, raw) => {
    const chars = unicodeRun(raw.replace(/\s+/g, ''), SUPERSCRIPT);
    if (chars.includes(null)) { warn(`superscript ${JSON.stringify(raw)} has no Unicode form`); return `^${raw}`; }
    return chars.join('');
  });
  text = text.replace(/⟦_([^⟧]+)⟧/g, (whole, raw) => {
    const chars = unicodeRun(raw.replace(/\s+/g, ''), SUBSCRIPT);
    if (chars.includes(null)) { warn(`subscript ${JSON.stringify(raw)} has no Unicode form`); return `_${raw}`; }
    return chars.join('');
  });
  text = text.replace(/⟦B:([^⟦⟧]*)⟧/g, '**$1**');
  // Italics: a state symbol or a word (cis, trans, E.C.) is emphasis; a
  // one- or two-letter symbol of a quantity is math.
  text = text.replace(/⟦I:([^⟦⟧]*)⟧/g, (whole, inner) => (
    STATES.has(inner.trim()) || /^[A-Za-z.]{3,}$/.test(inner.trim()) ? `*${inner.trim()}*` : `$${inner.trim()}$`));
  // A complex's square brackets in a text cell: `[Co(en)₃](ClO₄)₃` is a
  // Markdown LINK to "ClO₄" unless the brackets are escaped.
  text = text.split(/(\$[^$]*\$|⟦ce:[^⟧]*⟧|\[img:[^\]]*\])/).map((part, index) => (
    index % 2 ? part : part.replace(/([[\]])/g, '\\$1'))).join('');
  text = text.replace(/⟦ce:([^⟧]*)⟧/g, (whole, body) => `$\\ce{${body}}$`);
  text = text.replace(/\s*⟦BR⟧\s*/g, '<br>');
  text = text.replace(/\s*⟦FN(.)⟧/g, (whole, mark) => (mark === '*' ? '\\*' : mark));
  // A minus sign in a sentence is U+2212, whatever dash the source typed.
  text = text.split(/(\$[^$]*\$)/).map((part, index) => (index % 2 ? part : part.replace(/(^|[\s(=])[\u2013\u2212-](?=\d)/g, '$1\u2212'))).join('');
  text = text.replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
  if (/[⟦⟧]/.test(text)) warn(`unresolved markup in ${JSON.stringify(text)}`);
  return text;
}

/** A module's tables as a Markdown draft. */
export function draftTables(xml, { groups = 'headings', unfold = 0, warn = () => {} } = {}) {
  const out = [];
  for (const [tableIndex, table] of moduleTables(xml).entries()) {
    // A table's notes are marked * † ‡ § in order of first appearance; a note
    // the source repeats word for word (a folded table's second column set)
    // keeps its first mark.
    const notes = [];
    const where = (row) => (message) => warn(`table ${tableIndex + 1} row ${row}: ${message}`);
    const footnoteMark = (footnote) => {
      const text = cellMarkdown({ name: 'entry', attributes: {}, children: footnote.children }, { warn: where('footnote') });
      let index = notes.indexOf(text);
      if (index === -1) { notes.push(text); index = notes.length - 1; }
      if (index >= FOOTNOTE_MARKS.length) warn(`table ${tableIndex + 1} has more than ${FOOTNOTE_MARKS.length} notes`);
      return FOOTNOTE_MARKS[index] ?? '?';
    };
    const cell = (entry, row) => (entry?.node ? cellMarkdown(entry.node, { warn: where(row), footnoteMark }) : '');
    const title = table.head.filter((row) => row.spanning).map((row) => cell(row.cells[0], 'title')).join(' ');
    const headRows = table.head.filter((row) => !row.spanning);
    let header = headRows.length ? headRows.at(-1).cells.map((entry) => cell(entry, 'header')) : [];
    let body = table.body.flatMap((row, index) => {
      const cells = row.cells.map((entry) => cell(entry, index + 1));
      const lines = Math.max(...cells.map((text) => text.split('<br>').length));
      if (row.spanning || lines === 1) return [{ spanning: row.spanning, cells }];
      // One row per printed line; a cell with a single line repeats.
      return Array.from({ length: lines }, (unused, line) => ({
        spanning: false,
        cells: cells.map((text) => { const parts = text.split('<br>'); return parts.length === 1 ? text : (parts[line] ?? ''); }),
      }));
    });
    if (unfold) {
      // Six columns that are one three-column list printed twice: the left
      // set top to bottom, then the right set.
      const sets = table.columns / unfold;
      header = header.slice(0, unfold);
      const unfolded = [];
      for (let set = 0; set < sets; set += 1) {
        for (const row of body) {
          const cells = row.cells.slice(set * unfold, (set + 1) * unfold);
          if (cells.some((text) => text)) unfolded.push({ spanning: false, cells });
        }
      }
      body = unfolded;
    }
    const rule = (cells) => `|${cells.map(() => '---').join('|')}|`;
    const line = (cells) => `| ${cells.join(' | ')} |`;
    const open = (cells) => { out.push(line(cells), rule(cells)); };
    if (title) out.push(`**${title}**`, '');
    if (groups === 'column' && body.some((row) => row.spanning)) {
      open(['Group', ...header]);
      let group = '';
      for (const row of body) {
        if (row.spanning) group = row.cells[0];
        else out.push(line([group, ...row.cells]));
      }
    } else if (groups === 'headings' && body.some((row) => row.spanning)) {
      let opened = false;
      for (const row of body) {
        if (row.spanning) { out.push('', `## ${row.cells[0]}`, ''); opened = false; continue; }
        if (!opened) { if (header.length) open(header); opened = true; }
        out.push(line(row.cells));
      }
    } else {
      if (header.length) open(header);
      else if (body.length) {
        // The source prints no column headings; a Markdown table needs them.
        open(body[0].cells.map(() => ''));
        warn(`table ${tableIndex + 1}: the source has no header row — name the columns`);
      }
      for (const row of body) out.push(line(row.spanning ? [`**${row.cells[0]}**`, ...row.cells.slice(1)] : row.cells));
    }
    out.push('');
    notes.forEach((text, index) => {
      const mark = FOOTNOTE_MARKS[index] ?? '?';
      out.push(`${mark === '*' ? '\\*' : mark} ${text}`, '');
    });
  }
  return out.join('\n');
}

function main(argv) {
  const cli = parseCliArgs(argv, { valueFlags: ['book', 'appendix', 'module', 'groups', 'unfold'] });
  const flags = { get: (name) => cli.flag(name) };
  let modulePath = flags.get('module');
  if (!modulePath) {
    const lock = loadSourceLock(repositoryRoot);
    const book = lock.books.get(flags.get('book'));
    if (!book) throw new Error('name a --book in the source lock (and an --appendix letter), or a --module path');
    const sourceRoot = bundleSourceDirectory(repositoryRoot, lock, book.bundleKey);
    const collection = parseCollectionXml(readFileSync(path.join(sourceRoot, book.collectionPath), 'utf8'));
    const letter = String(flags.get('appendix') || '').toUpperCase();
    const moduleId = collection.backMatterModuleIds[letter.charCodeAt(0) - 65];
    if (!/^[A-Z]$/.test(letter) || !moduleId) throw new Error(`${flags.get('book')} has no appendix ${JSON.stringify(letter)}`);
    modulePath = path.join(sourceRoot, 'modules', moduleId, 'index.cnxml');
  }
  const warnings = [];
  const draft = draftTables(parseXml(readFileSync(modulePath, 'utf8')), {
    groups: flags.get('groups') || 'headings',
    unfold: Number(flags.get('unfold') || 0),
    warn: (message) => warnings.push(message),
  });
  process.stdout.write(`${draft}\n`);
  for (const warning of warnings) console.error(`! ${warning}`);
  if (warnings.length) console.error(`${warnings.length} cell(s) need the author's hand`);
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error(`appendix-draft: ${error.message}`);
    process.exit(2);
  }
}
