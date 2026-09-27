#!/usr/bin/env node
/**
 * Give every life-sciences answer-ledger record a provenance note.
 *
 * A record's note says where its item came from — the source exercise, the
 * glossary term, the summary or body sentence, or, on a Knowledge Check,
 * `KC <n> <N.M> § <subsection>`. Two things replaced those notes with the
 * `solve-check.mjs compare` placeholder (SOLVE_NOTE), which says nothing:
 * a compare merged after the author results (merge used to replace records
 * whole; `combineRecords` now keeps the note), and an item re-hashed by a
 * sweep, whose new record came from its re-solve alone. This tool derives the
 * provenance again, mechanically, for every record under the root whose note
 * is a placeholder (`isPlaceholderNote`: absent, SOLVE_NOTE, or SOLVE_NOTE
 * plus carry history), and for every Knowledge Check record whose note lacks
 * its `KC` tie — never touching the verdict or `solved` — and
 * writes a merge-ready result file:
 *
 *   section page   a source match from `verify-source-keys` (the exercise
 *                  id, the glossary or bolded term, the summary or body
 *                  sentence that prints a textin key, the table a sortbins
 *                  matches); otherwise, for an author-built item, the module
 *                  sentence that shares the most of its words, with its
 *                  subsection
 *   Knowledge      `KC <n> <N.M> § …, m<module>`: <n> is the check's place
 *   Check          among the book's checks (its unit or block), <N.M> the
 *                  `### N.M` heading above the item, and § the glossary term
 *                  or the subsection of the best-matching sentence
 *
 * A best-sentence match below LOW_CONFIDENCE is marked "low confidence" in
 * the note and listed in `<out>/low-confidence.json` for a reader. Run it at
 * the close-out of any run or sweep, after the last solve is merged:
 *
 *   node tools/verify/ledger-provenance.mjs [root] --out <dir> [--date "Sep 26 2026"]
 *   npm run ledger:merge -- <dir>
 *
 * It needs the pinned checkouts (`npm run source:fetch`); a page whose module
 * is not checked out is skipped by name.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { parseCliArgs } from '../lib/cli.mjs';
import {
  parseXml, descendants, elementChildren, firstElement, textContent, localName,
  normalizeText, normalizeWhitespace, tokenSimilarity, phraseCoverage, loadSourceLock, bundleSourceDirectory,
} from '../lib/openstax-source.mjs';
import { SOLVE_NOTE, extractExercises, isPlaceholderNote, readLedger } from './answer-ledger.mjs';
import { checkText } from '../../assets/js/lib/text/check-text.mjs';
import {
  readModule, pageItems, judgeMultipleChoice, judgeTextin, judgeSortbins, judgeSelfcheck,
} from './verify-source-keys.mjs';

/** A best-sentence match whose word overlap is below this is reported for a
 * reader rather than trusted. */
export const LOW_CONFIDENCE = 0.2;

/** A book with no per-module glossary builds `## Key terms` from a book-wide
 * Glossary appendix (docs/subjects/microbiology.md §1); a key-term recall
 * item's prompt is that appendix entry's meaning. */
const GLOSSARY_APPENDIX = Object.freeze({ microbiology: 'm58950' });

// The end-matter sets and apparatus a provenance sentence never comes from.
const SKIPPED_SECTIONS = /\b(multiple-choice|free-response|interactive-exercise|references|fill-in-the-blank|short-answer|critical-thinking|true-false|matching|visual-exercise|learning-objectives|contrib-auth|sr-contrib-auth)\b/;
const SKIPPED_ELEMENTS = new Set(['exercise', 'glossary', 'metadata', 'title']);

const clip = (text, width = 140) => {
  const flat = normalizeWhitespace(text);
  return flat.length > width ? `${flat.slice(0, width - 1).trimEnd()}…` : flat;
};

/**
 * A module as provenance candidates: every body sentence with the title of
 * the subsection that holds it (the summary's as "summary", prose before the
 * first subsection as "introduction"), and every glossary definition.
 */
export function moduleOutline(xml) {
  const document = parseXml(xml);
  const sentences = [];
  const walk = (node, title) => {
    const name = localName(node);
    if (SKIPPED_ELEMENTS.has(name)) return;
    if (name === 'section') {
      const cls = node.attributes?.class || '';
      if (SKIPPED_SECTIONS.test(cls)) return;
      const heading = firstElement(node, 'title');
      title = cls === 'summary' ? 'summary' : normalizeWhitespace(heading ? textContent(heading) : title);
    }
    // A body question the page converted names its box, not just its subsection.
    if (name === 'note' && /check-your-understanding/.test(node.attributes?.class || '')) title = `${title}, Check Your Understanding`;
    if (name === 'para' || name === 'caption' || name === 'item' || name === 'entry') {
      for (const sentence of normalizeWhitespace(textContent(node)).split(/(?<=[.!?])\s+(?=[A-Z(])/)) {
        if (sentence.split(' ').length >= 4) sentences.push({ section: title, text: sentence });
      }
      return;
    }
    for (const child of elementChildren(node)) walk(child, title);
  };
  const body = descendants(document, (node) => localName(node) === 'content')[0] || document;
  walk(body, 'introduction');
  const glossary = descendants(document, (node) => localName(node) === 'definition').map((definition) => ({
    id: definition.attributes?.id || '',
    term: normalizeWhitespace(textContent(firstElement(definition, 'term') || '')),
    meaning: normalizeWhitespace(textContent(firstElement(definition, 'meaning') || '')),
  })).filter((entry) => entry.term);
  return { sentences, glossary };
}

/** A Glossary appendix (Microbiology's m58950): one list item per entry,
 * the headword in `<emphasis>`, the meaning after it. */
export function appendixGlossary(xml) {
  const document = parseXml(xml);
  const glossary = descendants(document, (node) => localName(node) === 'item').map((item) => {
    const head = elementChildren(item)[0];
    if (!head || localName(head) !== 'emphasis') return null;
    const term = normalizeWhitespace(textContent(head));
    const meaning = normalizeWhitespace(textContent(item)).slice(term.length).trim();
    return { id: item.attributes?.id || '', term, meaning };
  }).filter(Boolean);
  return { sentences: [], glossary };
}

/** The item's own words: what a provenance sentence must share. A multiple
 * choice's distractors come from OTHER sentences, so only its stem and key
 * count. */
function itemText(exercise) {
  const p = exercise.params || {};
  const parts = [p.question, p.answer, p.accept];
  if (exercise.kind === 'selfcheck') parts.push((exercise.inner || '').split(/^[ \t]*===CHECKS===/m)[0]);
  if (exercise.kind === 'sortbins') {
    try {
      const config = JSON.parse(exercise.inner);
      parts.push(...(config.bins || []), ...(config.items || []).map((item) => item.label));
    } catch { /* an unparseable config is the lint's to name */ }
  }
  return normalizeWhitespace(parts.filter(Boolean).join(' '));
}

/** The sentence of the module that shares the most of the item's words; a
 * sentence that prints the item's key wins a tie. */
export function bestSentence(exercise, outline, keep = () => true) {
  const text = itemText(exercise);
  const key = normalizeText(exercise.params?.answer || '');
  // A cloze is its sentence with a blank: score it by how much of the stem
  // the sentence reproduces, not by shared vocabulary.
  const question = exercise.params?.question || '';
  const cloze = exercise.kind === 'textin' && /_{3,}/.test(question)
    ? question.replace(/_{3,}/g, ' ')
    : null;
  let best = null;
  for (const sentence of outline.sentences.filter(keep)) {
    let score = cloze ? phraseCoverage(cloze, sentence.text) * 0.6 : tokenSimilarity(text, sentence.text);
    if (key && ` ${normalizeText(sentence.text)} `.includes(` ${key} `)) score += 0.05;
    if (!best || score > best.score) best = { ...sentence, score };
  }
  return best;
}

/** The glossary entry a textin recalls: its key grades as the entry's term
 * under the real text grader (plural fold, "X (Y)", case, hyphens). */
function glossaryEntry(exercise, outline) {
  if (exercise.kind !== 'textin') return null;
  const key = exercise.params?.answer || '';
  if (!normalizeText(key)) return null;
  return outline.glossary.find((entry) => checkText(key, entry.term) === 'correct'
    || checkText(entry.term, key) === 'correct') || null;
}

/** The page item `verify-source-keys` judges, found by its opening line. */
function judgedItem(exercise, items) {
  return items.find((item) => item.line === exercise.line && item.type === exercise.kind) || null;
}

/**
 * The provenance of one item on a mapped section page.
 * @returns {{ note: string, low: boolean }}
 */
export function sectionProvenance(exercise, { source, outline, items, appendix = null }) {
  const item = judgedItem(exercise, items);
  const verdict = item
    ? { multiplechoice: judgeMultipleChoice, textin: judgeTextin, sortbins: judgeSortbins, selfcheck: judgeSelfcheck }[item.type]?.(item, source)
    : null;
  const status = verdict?.status;
  if (verdict?.exercise && status !== 'unmatched') {
    return { note: `source exercise ${verdict.exercise.id} (${status})`, low: false };
  }
  if (verdict?.table && status !== 'unmatched') {
    return { note: `sortbins from table ${verdict.table.id || verdict.table.title || '(untitled)'}`, low: false };
  }
  const entry = glossaryEntry(exercise, outline);
  if (entry) return { note: `glossary recall: ${entry.term} (${entry.id})`, low: false };
  if (status === 'glossary' || status === 'glossary-completed') {
    return { note: `glossary recall: ${exercise.params?.answer}`, low: false };
  }
  const appendixEntry = appendix ? glossaryEntry(exercise, appendix) : null;
  if (appendixEntry && tokenSimilarity(exercise.params?.question || '', appendixEntry.meaning) >= 0.3) {
    return { note: `key-term recall from the Glossary appendix: ${appendixEntry.term} (${appendix.moduleId})`, low: false };
  }
  // A textin keyed to a phrase the module prints: the sentence that prints
  // it and shares the most of the prompt, summary or body — the summary
  // status only says the phrase is ALSO in the summary.
  // A cloze whose author added the keyed word ("Streptococcus is the ___ of
  // bacteria") comes from a sentence that does not print it: the best
  // sentence overall wins when it reads clearly better than the best one
  // that prints the key.
  const key = ` ${normalizeText(exercise.params?.answer || '')} `;
  const printsKey = (candidate) => ` ${normalizeText(candidate.text)} `.includes(key);
  const printed = ['summary', 'body', 'term'].includes(status);
  const overall = bestSentence(exercise, outline);
  const keyed = printed ? bestSentence(exercise, outline, printsKey) : null;
  const sentence = keyed && (!overall || overall.score <= keyed.score + 0.1) ? keyed : overall;
  if (!sentence) return { note: 'author-built; no module sentence found', low: true };
  const low = sentence.score < LOW_CONFIDENCE;
  const where = `§ ${sentence.section}: "${clip(sentence.text)}"`;
  const note = !printsKey(sentence) ? `author-built from ${where}`
    : status === 'term' ? `key-term recall: ${exercise.params?.answer}; printed in ${where}`
      : printed ? `${sentence.section === 'summary' ? 'summary' : 'body'} cloze from ${where}`
        : `author-built from ${where}`;
  return { note: `${note}${low ? ' (low confidence)' : ''}`, low };
}

/**
 * The provenance of one Knowledge Check item.
 * @returns {{ note: string, low: boolean }}
 */
export function checkProvenance(exercise, { checkIndex, sectionNumber, moduleId, outline }) {
  const head = `KC ${checkIndex} ${sectionNumber} §`;
  const entry = glossaryEntry(exercise, outline);
  if (entry) return { note: `${head} glossary ${entry.term} (${entry.id}), ${moduleId}`, low: false };
  const sentence = bestSentence(exercise, outline);
  if (!sentence) return { note: `${head} (no module sentence found), ${moduleId}`, low: true };
  const low = sentence.score < LOW_CONFIDENCE;
  return { note: `${head} ${sentence.section}, ${moduleId}${low ? ' (low confidence)' : ''}`, low };
}


/** The `### N.M` heading above a line of a Knowledge Check page. */
function sectionAbove(markdown, line) {
  const lines = markdown.split('\n').slice(0, line);
  for (let i = lines.length - 1; i >= 0; i -= 1) {
    const match = lines[i].match(/^###\s+(\d+\.\d+)\b/);
    if (match) return match[1];
  }
  return null;
}

export function planProvenance({ repositoryRoot, root, entries, date }) {
  const lock = loadSourceLock(repositoryRoot);
  const map = JSON.parse(readFileSync(path.join(repositoryRoot, 'data/openstax/source-map.json'), 'utf8'));
  const sectionByPath = new Map(map.sections.map((section) => [section.localPath, section]));
  const sectionByNumber = new Map(map.sections.map((section) => [`${section.book} ${section.sourceSection}`, section]));
  const modules = new Map();
  const moduleFor = (section) => {
    if (modules.has(section.moduleId)) return modules.get(section.moduleId);
    const file = path.join(bundleSourceDirectory(repositoryRoot, lock, section.bundle), 'modules', section.moduleId, 'index.cnxml');
    const loaded = existsSync(file)
      ? (() => { const xml = readFileSync(file, 'utf8'); return { source: readModule(xml), outline: moduleOutline(xml) }; })()
      : null;
    modules.set(section.moduleId, loaded);
    return loaded;
  };
  const appendices = new Map();
  const appendixFor = (section) => {
    const moduleId = GLOSSARY_APPENDIX[section.book];
    if (!moduleId) return null;
    if (!appendices.has(moduleId)) {
      const file = path.join(bundleSourceDirectory(repositoryRoot, lock, section.bundle), 'modules', moduleId, 'index.cnxml');
      appendices.set(moduleId, existsSync(file) ? { ...appendixGlossary(readFileSync(file, 'utf8')), moduleId } : null);
    }
    return appendices.get(moduleId);
  };
  const pages = new Map();
  const pageFor = (file) => {
    if (!pages.has(file)) pages.set(file, readFileSync(path.join(repositoryRoot, file), 'utf8'));
    return pages.get(file);
  };
  const results = [];
  const low = [];
  const skipped = new Set();
  const suffix = ` — provenance backfilled ${date} (ledger-provenance.mjs)`;
  for (const exercise of extractExercises(path.resolve(repositoryRoot, root))) {
    const record = entries[exercise.hash];
    if (!record) continue;
    const file = exercise.path;
    const check = path.basename(file).match(/^knowledge-check-(\d+)-(\d+)\.md$/);
    const placeholder = isPlaceholderNote(record.note);
    // A check record's note must open with its `KC <n> <N.M> §` tie (the
    // life-sciences KC playbook); a re-read note without it keeps its text
    // after the tie.
    if (!placeholder && !(check && !record.note.startsWith('KC '))) continue;
    let derived = null;
    if (check) {
      const markdown = pageFor(file);
      const number = sectionAbove(markdown, exercise.line);
      const bookDir = path.dirname(file);
      const book = path.basename(bookDir);
      const section = number ? sectionByNumber.get(`${book} ${number}`) : null;
      const loaded = section ? moduleFor(section) : null;
      if (!loaded) { skipped.add(file); continue; }
      const checks = readdirSync(path.join(repositoryRoot, bookDir)).filter((name) => /^knowledge-check-\d+-\d+\.md$/.test(name)).sort();
      derived = checkProvenance(exercise, {
        checkIndex: checks.indexOf(path.basename(file)) + 1, sectionNumber: number, moduleId: section.moduleId, outline: loaded.outline,
      });
    } else {
      const section = sectionByPath.get(file);
      const loaded = section ? moduleFor(section) : null;
      if (!loaded) { skipped.add(file); continue; }
      derived = sectionProvenance(exercise, { ...loaded, items: pageItems(pageFor(file)), appendix: appendixFor(section) });
    }
    // Keep ledger-carry's " | carried …" history, or a real note the tie was
    // missing from, after the new provenance.
    const history = !placeholder ? ` | ${record.note}`
      : record.note && record.note.startsWith(`${SOLVE_NOTE} |`) ? record.note.slice(SOLVE_NOTE.length) : '';
    const note = `${derived.note}${suffix}${history}`;
    results.push({ hash: exercise.hash, verdict: record.verdict, note, ...(record.solved ? { solved: record.solved } : {}) });
    if (derived.low) low.push({ hash: exercise.hash, path: file, line: exercise.line, kind: exercise.kind, question: clip(exercise.params?.question || '', 90), note: derived.note });
  }
  return { results, low, skipped: [...skipped] };
}

function main() {
  let cli;
  try {
    cli = parseCliArgs(process.argv.slice(2), { valueFlags: ['out', 'date', 'ledger'], positional: { max: 1, name: 'root' } });
  } catch (error) {
    console.error(`ledger-provenance: ${error.message}`);
    console.error('usage: node tools/verify/ledger-provenance.mjs [root] --out <dir> [--date text] [--ledger path]');
    process.exit(2);
  }
  const out = cli.flag('out');
  if (!out) {
    console.error('ledger-provenance: --out <dir> is required');
    process.exit(2);
  }
  const root = cli.positional[0] ?? 'content/life-health-sciences';
  const date = cli.flag('date') ?? new Date().toISOString().slice(0, 10);
  const ledger = readLedger(cli.flag('ledger') ?? undefined);
  const plan = planProvenance({ repositoryRoot: process.cwd(), root, entries: ledger.entries, date });
  mkdirSync(out, { recursive: true });
  writeFileSync(path.join(out, 'provenance.json'), `${JSON.stringify({ results: plan.results }, null, 1)}\n`);
  writeFileSync(path.join(out, 'low-confidence.json'), `${JSON.stringify(plan.low, null, 1)}\n`);
  for (const file of plan.skipped) console.error(`  skipped ${file}: its module is not checked out or not mapped`);
  console.log(`provenance for ${plan.results.length} record(s); ${plan.low.length} low confidence (${path.join(out, 'low-confidence.json')}); merge with npm run ledger:merge -- ${out}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) main();
