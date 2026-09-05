/**
 * The practice index: every interactive item on a book's section pages,
 * reduced to the signatures the Knowledge Check duplicate-stem rule compares.
 *
 * A life-sciences Knowledge Check is author-written from the module text,
 * and its playbook forbids a stem that duplicates a section Practice item —
 * the section pages already carry every source exercise, so re-asking one
 * tests recall of the page rather than the biology. The rule was prose only
 * ("check the section's Practice block before writing") until September
 * 2026; this module is what makes it mechanical. It is shared by the lint
 * (which reads the Knowledge Check side) and the two lint callers (which load
 * the section side), so both sides are reduced by the same function and can
 * never disagree about what "the same stem" means.
 *
 * What counts as the same item — decided against the corpus, not in the
 * abstract. Biology's 208 sections carry 2,877 items; the 20,161 pairs of
 * distinct items inside one section include "contrast twins" that differ by
 * a single word (exponential vs. logistic growth; before vs. after zygote
 * formation) and score up to 0.89 on a bigram-overlap measure, so no
 * similarity threshold separates a lazy paraphrase from a legitimate twin
 * without firing on sound content. The rule is therefore EXACT on three
 * signatures, each read after `normalizeStem`:
 *
 *   stem      the question text. Equal stems are the same item — except
 *             between two multiple choices with different option sets, since
 *             a generic stem ("Which of the following statements is true?")
 *             carries no content of its own and the playbook allows the same
 *             stem with a different keyed emphasis or option set.
 *   options   a multiple choice's option lines, sorted; the qualifier above.
 *   sentence  for a cloze (a blank plus a keyed answer): the stem with the
 *             answer written back into its blank. Two clozes on one summary
 *             sentence with the blank moved show the learner the same
 *             sentence — the corpus holds four such pairs inside sections,
 *             and zero twins collide this way, because a twin reconstructs
 *             to a different sentence.
 */
import { readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { shortcodes, walkMarkdown } from './content.mjs';

/** The interactive kinds whose `question` param is a stem. */
export const ITEM_KINDS = Object.freeze(['fillin', 'multiplechoice', 'textin', 'selfcheck', 'sortbins', 'graphplot']);

const BLANK_RE = /_{2,}/;

/**
 * Reduce a stem to the form two authors' spellings of one sentence share:
 * case-folded, blanks and every non-alphanumeric character (Markdown
 * emphasis, punctuation, math delimiters, TeX braces) read as spaces, TeX
 * control words dropped, whitespace collapsed. Letters and digits in every
 * script survive, so a Greek symbol or a subscripted formula still counts.
 */
export function normalizeStem(text) {
  return String(text ?? '')
    .toLowerCase()
    .replace(/_{2,}/g, ' ')
    .replace(/\\[a-z]+/g, ' ')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** The option lines of a multiple choice's inner body, sorted and normalized. */
const optionKey = (inner) => String(inner ?? '')
  .split('\n')
  .map((line) => normalizeStem(line))
  .filter(Boolean)
  .sort()
  .join('|');

/**
 * The three signatures of one item. `options` is '' for anything but a
 * multiple choice; `sentence` is '' unless the stem has a blank AND a keyed
 * answer (a selfcheck or sortbins blank has nothing to write back).
 */
export function itemSignature({ kind, question, answer, inner }) {
  const stem = normalizeStem(question);
  const options = kind === 'multiplechoice' ? optionKey(inner) : '';
  const sentence = BLANK_RE.test(String(question ?? '')) && answer
    ? normalizeStem(String(question).replace(BLANK_RE, ` ${answer} `))
    : '';
  return { stem, options, sentence };
}

/**
 * Is `a` the same item as `b`, under the rule above? Symmetric.
 */
export function sameItem(a, b) {
  if (a.stem && a.stem === b.stem) {
    const bothMultipleChoice = a.options !== '' && b.options !== '';
    return !(bothMultipleChoice && a.options !== b.options);
  }
  return Boolean(a.sentence) && a.sentence === b.sentence;
}

/**
 * Every interactive item in one page's source: `{ kind, question, index,
 * line, signature }`, in source order. `index` is the shortcode's offset in
 * `src`, so a lint can report the item's own line.
 */
export function practiceItems(src) {
  const items = [];
  for (const kind of ITEM_KINDS) {
    for (const sc of shortcodes(src, kind)) {
      const question = sc.params.question ?? '';
      if (!question.trim()) continue;
      items.push({
        kind,
        question,
        index: sc.index,
        line: src.slice(0, sc.index).split('\n').length,
        signature: itemSignature({ kind, question, answer: sc.params.answer, inner: sc.inner }),
      });
    }
  }
  return items.sort((a, b) => a.index - b.index);
}

/** A section page: `<book>/<NN-chapter>/<NN-section>.md`, never a landing or a Knowledge Check. */
const isSectionPage = (path) => /[\\/]\d{2}-[^\\/]+[\\/]\d{2}-[^\\/]+\.md$/.test(path);

/**
 * Index a list of `{ file, ...item }` records by stem and by sentence, so a
 * lookup is a Map hit rather than a scan. Exported so a test can build an
 * index from fixture items without a directory.
 */
export function buildPracticeIndex(items, { bookDir = '', pages = 0 } = {}) {
  const byStem = new Map();
  const bySentence = new Map();
  for (const item of items) {
    const { stem, sentence } = item.signature;
    if (stem) {
      if (!byStem.has(stem)) byStem.set(stem, []);
      byStem.get(stem).push(item);
    }
    if (sentence) {
      if (!bySentence.has(sentence)) bySentence.set(sentence, []);
      bySentence.get(sentence).push(item);
    }
  }
  return { bookDir, pages, items, byStem, bySentence };
}

/**
 * The items on `index` that are the same item as `signature`, in a stable
 * order (file, then line). Empty when there is no duplicate.
 */
export function duplicatesOf(index, signature) {
  const candidates = new Set([
    ...(index.byStem.get(signature.stem) ?? []),
    ...(index.bySentence.get(signature.sentence) ?? []),
  ]);
  return [...candidates]
    .filter((item) => sameItem(signature, item.signature))
    .sort((a, b) => (a.file < b.file ? -1 : a.file > b.file ? 1 : a.line - b.line));
}

const cache = new Map();

/**
 * Load (and cache) the practice index of one book directory —
 * `content/<shelf>/<book>` — from its section pages. Knowledge Check pages
 * and chapter landings are not indexed: a check must not be compared with
 * itself, and a landing carries no items.
 *
 * Throws when `bookDir` is not a directory: the lint callers derive it from
 * the page's book key and the working directory, and a Knowledge Check
 * verified from somewhere other than the repository root would otherwise be
 * compared against nothing and pass. Loud, not silent (AGENTS.md: a gate
 * that cannot read its input says so).
 */
export function loadPracticeIndex(bookDir) {
  if (cache.has(bookDir)) return cache.get(bookDir);
  let isDirectory = false;
  try { isDirectory = statSync(bookDir).isDirectory(); } catch { /* reported below */ }
  if (!isDirectory) {
    throw new Error(`practice index: ${bookDir} is not a directory — run from the repository root so content/<shelf>/<book> resolves`);
  }
  const items = [];
  let pages = 0;
  for (const file of walkMarkdown(bookDir, { includeIndex: false })) {
    if (!isSectionPage(file)) continue;
    pages++;
    const rel = relative(process.cwd(), file) || file;
    for (const item of practiceItems(readFileSync(file, 'utf8'))) items.push({ file: rel, ...item });
  }
  const index = buildPracticeIndex(items, { bookDir, pages });
  cache.set(bookDir, index);
  return index;
}

/**
 * The loader the lint callers hand to `lintHugo` as `options.loadPracticeIndex`:
 * a book key (`bookKeyOf`, "shelf/book") resolves to `content/<shelf>/<book>`
 * under the working directory — never to the page's own directory. That is
 * what lets an author verify a scratch copy of a Knowledge Check (at a path
 * that ends in `content/<shelf>/<book>/knowledge-check-XX-YY.md`, so the
 * book key resolves) against the real section pages.
 */
export function loadPracticeIndexForBook(bookKey, contentRoot = 'content') {
  if (!bookKey) throw new Error('practice index: the page has no book key — its path must contain content/<shelf>/<book>/');
  return loadPracticeIndex(join(contentRoot, bookKey));
}

/** Forget every cached index — for tests that rewrite a fixture book. */
export function clearPracticeIndexCache() {
  cache.clear();
}
