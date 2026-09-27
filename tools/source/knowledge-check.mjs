#!/usr/bin/env node
/**
 * The parent's tools for a life-sciences Knowledge Check run
 * (docs/briefs/anatomy-physiology/kc-run.md). Every earlier check run rebuilt
 * these in its scratchpad; they live here now.
 *
 *   weights <book-dir> [--write]
 *       Chapters and checks share one sequential weight order (the core
 *       playbook, "Where the file goes"): each chapter in number order, each
 *       `knowledge-check-XX-YY.md` right after chapter YY. The weights are
 *       DERIVED from which chapters and checks exist, so landing a check
 *       needs no shift range — the one step earlier runs got wrong (a shift
 *       started at the unit's first chapter instead of the chapter after its
 *       last). Prints every file whose weight differs; `--write` rewrites
 *       them. Exit 1 on a difference without `--write`.
 *   assemble <out-page> --head <file> --foot <file> <chapter-scratch>...
 *       Concatenates the head (frontmatter and the opening callout), the
 *       `## Chapter N` blocks cut from each author's scratch page, and the
 *       foot (the attribution footer, last). Refuses chapters out of order, a
 *       `### N.M` heading under the wrong chapter, and a head whose
 *       `source_chapters` does not name exactly the chapters assembled.
 *   notes <page> <provenance.json>... --out <dir>
 *       Turns the authors' provenance files — `{ "<item stem>": "KC <n>
 *       <N.M> § <subsection>, m<module>", … }` — into a merge-ready ledger
 *       result for every item on the assembled page (matched by the stem with
 *       Markdown and HTML stripped), keeping any verdict and `solved` the
 *       ledger already holds. Lists items with no provenance and provenance
 *       that matched no item; exit 1 on either.
 *   leaks <page>
 *       Report only: every item whose key or accept member (or its regular
 *       plural or singular) is printed in ANOTHER item's stem, options,
 *       rubric, or sortbins labels anywhere on the page. (A root match, which
 *       the textin hint lint uses on a neighbour, drowns a whole page in
 *       "cyclin"/"cycle" hits, so it is left to the reader.) The KC playbook's
 *       whole-page grep, run after every replacement round; a hit is a
 *       candidate for the parent's read, not a verdict — ordinary vocabulary
 *       recurs across unrelated sections.
 */
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { parseCliArgs } from '../lib/cli.mjs';
import { parseFrontmatter, shortcodes } from '../lib/content.mjs';
import { normalizeStem } from '../lib/practice-index.mjs';
import { extractExercises, readLedger } from '../verify/answer-ledger.mjs';
import { foldedForms, normalizeText } from '../../assets/js/lib/text/check-text.mjs';

const CHECK_FILE = /^knowledge-check-(\d+)-(\d+)\.md$/;
const CHAPTER_DIR = /^(\d+)-/;

/* ---- weights --------------------------------------------------------------- */

/** @returns {{ file: string, current: number|null, target: number }[]} in weight order */
export function plannedWeights(bookDir) {
  const names = readdirSync(bookDir, { withFileTypes: true });
  const chapters = names
    .filter((entry) => entry.isDirectory() && CHAPTER_DIR.test(entry.name))
    .map((entry) => ({ number: Number(entry.name.match(CHAPTER_DIR)[1]), file: path.join(bookDir, entry.name, '_index.md') }))
    .sort((a, b) => a.number - b.number);
  const checks = names
    .filter((entry) => entry.isFile() && CHECK_FILE.test(entry.name))
    .map((entry) => ({ last: Number(entry.name.match(CHECK_FILE)[2]), file: path.join(bookDir, entry.name) }));
  const order = [];
  for (const chapter of chapters) {
    order.push(chapter.file);
    for (const check of checks.filter((c) => c.last === chapter.number)) order.push(check.file);
  }
  const placed = new Set(order);
  const orphans = checks.filter((check) => !placed.has(check.file));
  if (orphans.length) {
    throw new Error(`no chapter ends where ${orphans.map((o) => path.basename(o.file)).join(', ')} does — author the chapter first`);
  }
  return order.map((file, index) => {
    const weight = parseFrontmatter(readFileSync(file, 'utf8')).attributes.weight;
    return { file, current: weight === undefined ? null : Number(weight), target: index + 1 };
  });
}

function writeWeight(file, target) {
  const text = readFileSync(file, 'utf8');
  const end = text.indexOf('\n---', 4);
  const head = text.slice(0, end);
  if (!/^weight:\s*\S+/m.test(head)) throw new Error(`${file} has no weight line in its frontmatter`);
  writeFileSync(file, head.replace(/^weight:\s*\S+/m, `weight: ${target}`) + text.slice(end));
}

/* ---- assemble -------------------------------------------------------------- */

/** The `## Chapter N` blocks of one scratch page: from the first chapter
 * heading to the footer (a `<small>` paragraph, with its `---` rule). */
export function chapterBlocks(scratch) {
  const start = scratch.search(/^## Chapter \d+/m);
  if (start === -1) return '';
  let body = scratch.slice(start);
  const foot = body.search(/^(?:---\s*\n\s*)?<small>/m);
  if (foot !== -1) body = body.slice(0, foot);
  return body.trimEnd();
}

export function assemble(head, scratches, foot) {
  const blocks = scratches.map(chapterBlocks);
  const chapters = [];
  for (const [index, block] of blocks.entries()) {
    if (!block) throw new Error(`scratch page ${index + 1} holds no "## Chapter N" block`);
    let current = null;
    for (const line of block.split('\n')) {
      const chapter = line.match(/^## Chapter (\d+)\b/);
      if (chapter) {
        current = Number(chapter[1]);
        if (chapters.length && current <= chapters[chapters.length - 1]) {
          throw new Error(`Chapter ${current} is out of order after Chapter ${chapters[chapters.length - 1]}`);
        }
        chapters.push(current);
      }
      const section = line.match(/^### (\d+)\.\d+\b/);
      if (section && Number(section[1]) !== current) throw new Error(`"${line.trim()}" sits under Chapter ${current}`);
    }
  }
  const range = parseFrontmatter(head).attributes.source_chapters;
  const [first, last] = String(range ?? '').split('-').map(Number);
  const expected = Number.isInteger(first) && Number.isInteger(last)
    ? Array.from({ length: last - first + 1 }, (_, i) => first + i) : [];
  if (expected.join(',') !== chapters.join(',')) {
    throw new Error(`source_chapters "${range}" does not match the chapters assembled (${chapters.join(', ')})`);
  }
  return `${head.trimEnd()}\n\n${blocks.join('\n\n')}\n\n${foot.trim()}\n`;
}

/* ---- notes ----------------------------------------------------------------- */

const stemKey = (question) => normalizeStem(String(question ?? '').replace(/<[^>]+>/g, ' '));

/** @returns {{ results: object[], missing: object[], unused: string[] }} */
export function provenanceResults(exercises, provenance, entries = {}) {
  const byStem = new Map(Object.entries(provenance).map(([stem, note]) => [stemKey(stem), { stem, note }]));
  const used = new Set();
  const results = [];
  const missing = [];
  for (const exercise of exercises) {
    const found = byStem.get(stemKey(exercise.params?.question));
    if (!found) {
      missing.push({ line: exercise.line, kind: exercise.kind, question: exercise.params?.question ?? '' });
      continue;
    }
    if (!/^KC \d+ \d+\.\d+ § /.test(found.note)) throw new Error(`provenance for "${found.stem}" does not open "KC <n> <N.M> § …": ${found.note}`);
    used.add(found.stem);
    const existing = entries[exercise.hash];
    results.push({
      hash: exercise.hash,
      verdict: existing?.verdict ?? 'ok',
      note: found.note,
      ...(existing?.solved ? { solved: existing.solved } : {}),
    });
  }
  const unused = [...byStem.values()].filter((entry) => !used.has(entry.stem)).map((entry) => entry.stem);
  return { results, missing, unused };
}

/* ---- leaks ----------------------------------------------------------------- */

const COUNT_KEY = /^(?:\d[\d ,.]*|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|twenty|hundred)$/;

/** Each item's keys and the text it prints, in page order. */
export function checkItems(markdown) {
  const items = [];
  const lineOf = (index) => markdown.slice(0, index).split('\n').length;
  for (const kind of ['multiplechoice', 'textin', 'selfcheck', 'sortbins']) {
    for (const sc of shortcodes(markdown, kind)) {
      const p = sc.params;
      const keys = kind === 'textin' ? [p.answer, ...String(p.accept ?? '').split('|')]
        : kind === 'multiplechoice' ? [p.answer] : [];
      // Where each printed run sits, so a reader can weigh the hit: a stem
      // that states the tested fact is the leak; an option or a revealed
      // rubric clause rarely is.
      const printed = { stem: p.question ?? '', option: '', rubric: '', label: '' };
      if (kind === 'multiplechoice') printed.option = sc.inner ?? '';
      if (kind === 'selfcheck') printed.rubric = (sc.inner ?? '').split(/^[ \t]*===CHECKS===[ \t]*$/m)[1] ?? '';
      if (kind === 'sortbins') {
        try {
          const config = JSON.parse(sc.inner);
          printed.label = [...(config.bins ?? []), ...(config.items ?? []).map((item) => item.label)].join(' ');
        } catch { /* the lint names an unparseable config */ }
      }
      items.push({
        kind, line: lineOf(sc.index), index: sc.index,
        // A count key ("three") shares its option list with every other count
        // item on the page; it is never the leak this report is for.
        keys: keys.map((key) => normalizeText(key ?? '')).filter((key) => key.length >= 3 && !COUNT_KEY.test(key)),
        printed: Object.fromEntries(Object.entries(printed).map(([part, text]) => [part, ` ${normalizeText(text)} `])),
      });
    }
  }
  return items.sort((a, b) => a.index - b.index);
}

export function findLeaks(markdown) {
  const items = checkItems(markdown);
  const leaks = [];
  for (const owner of items) {
    for (const key of owner.keys) {
      const forms = [key, ...foldedForms(key)];
      for (const other of items) {
        if (other === owner) continue;
        // Another multiple choice offering this key as an option is a leak
        // too; an item's own key among its own options is not (owner skipped).
        for (const [part, text] of Object.entries(other.printed)) {
          const form = forms.find((f) => text.includes(` ${f} `));
          if (form) leaks.push({ key, keyLine: owner.line, printedLine: other.line, part, as: form, distance: Math.abs(other.index - owner.index) });
        }
      }
    }
  }
  return leaks.sort((a, b) => a.distance - b.distance);
}

/* ---- CLI ------------------------------------------------------------------- */

function main() {
  let cli;
  try {
    cli = parseCliArgs(process.argv.slice(2), {
      commands: ['weights', 'assemble', 'notes', 'leaks'],
      valueFlags: ['head', 'foot', 'out'],
      boolFlags: ['write'],
    });
  } catch (error) {
    console.error(`knowledge-check: ${error.message}`);
    console.error('usage: node tools/source/knowledge-check.mjs <weights|assemble|notes|leaks> … (see the header)');
    process.exit(2);
  }
  const { command, positional, flag, bool } = cli;
  if (command === 'weights') {
    const plan = plannedWeights(positional[0]);
    const off = plan.filter((entry) => entry.current !== entry.target);
    for (const entry of off) console.log(`  ${entry.file}: weight ${entry.current} → ${entry.target}`);
    if (bool('write')) {
      for (const entry of off) writeWeight(entry.file, entry.target);
      console.log(`rewrote ${off.length} weight(s) in ${positional[0]}`);
      return;
    }
    console.log(off.length ? `${off.length} weight(s) out of order; rerun with --write` : `weights in order (${plan.length} entries)`);
    process.exit(off.length ? 1 : 0);
  }
  if (command === 'assemble') {
    const [out, ...scratches] = positional;
    if (!out || !scratches.length || !flag('head') || !flag('foot')) {
      console.error('usage: node tools/source/knowledge-check.mjs assemble <out-page> --head <file> --foot <file> <chapter-scratch>...');
      process.exit(2);
    }
    const page = assemble(readFileSync(flag('head'), 'utf8'), scratches.map((file) => readFileSync(file, 'utf8')), readFileSync(flag('foot'), 'utf8'));
    writeFileSync(out, page);
    console.log(`assembled ${scratches.length} chapter block(s) into ${out}`);
    return;
  }
  if (command === 'notes') {
    const [page, ...files] = positional;
    if (!page || !files.length || !flag('out')) {
      console.error('usage: node tools/source/knowledge-check.mjs notes <page> <provenance.json>... --out <dir>');
      process.exit(2);
    }
    const provenance = Object.assign({}, ...files.map((file) => JSON.parse(readFileSync(file, 'utf8'))));
    const wanted = path.relative(process.cwd(), path.resolve(page));
    const exercises = extractExercises(path.dirname(path.resolve(page))).filter((exercise) => exercise.path === wanted);
    const { results, missing, unused } = provenanceResults(exercises, provenance, readLedger().entries);
    mkdirSync(flag('out'), { recursive: true });
    writeFileSync(path.join(flag('out'), 'kc-notes.json'), `${JSON.stringify({ results }, null, 1)}\n`);
    for (const item of missing) console.error(`  no provenance: ${page}:${item.line} (${item.kind}) ${item.question.slice(0, 80)}`);
    for (const stem of unused) console.error(`  provenance matched no item: ${stem.slice(0, 80)}`);
    console.log(`${results.length} note(s) written to ${path.join(flag('out'), 'kc-notes.json')}; ${missing.length} item(s) without provenance, ${unused.length} unused`);
    process.exit(missing.length || unused.length ? 1 : 0);
  }
  if (command === 'leaks') {
    const leaks = findLeaks(readFileSync(positional[0], 'utf8'));
    for (const leak of leaks) console.log(`  key "${leak.key}" (line ${leak.keyLine}) printed as "${leak.as}" in the ${leak.part} at line ${leak.printedLine}`);
    console.log(`${leaks.length} candidate leak(s) — read each; this is not a verdict`);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) main();
