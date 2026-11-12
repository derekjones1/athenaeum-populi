#!/usr/bin/env node
/**
 * The parent's tools for a Knowledge Check run
 * (docs/briefs/anatomy-physiology/kc-run.md, docs/briefs/chemistry/kc-run.md).
 * Every earlier check run rebuilt these in its scratchpad; they live here
 * now. `examples` and `sources` read a keyed-only book (Chemistry), whose
 * checks re-ask worked examples; the rest read any book.
 *
 *   weights <book-dir> [--write]
 *       Chapters and checks share one sequential weight order (the core
 *       playbook, "Where the file goes"): each chapter in number order, each
 *       `knowledge-check-XX-YY.md` right after chapter YY. The weights are
 *       DERIVED from which chapters and checks exist, so landing a check
 *       needs no shift range — the one step earlier runs got wrong (a shift
 *       started at the unit's first chapter instead of the chapter after its
 *       last). A book's `appendices/` landing takes the weight after every
 *       chapter and check, so landing a chapter moves it too. Prints every
 *       file whose weight differs; `--write` rewrites them. Exit 1 on a
 *       difference without `--write`.
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
 *       recurs across unrelated sections. A fill-in is read too: its stem as
 *       printed text, and its key as a NUMBER of three digits or more that
 *       another item's stem or options print (a worked example whose answer
 *       is the next example's given datum).
 *   examples <book-dir> <first>-<last>
 *       The worked examples of every mapped section of those chapters, from
 *       the pinned CNXML: title, question, the end of the Solution, the
 *       example its question leans on, the images it holds. The run facts'
 *       inventory for a keyed-only book's check.
 *   sources <page-or-dir>...
 *       The gate for "a graded item needs a source key" on a keyed-only
 *       book's check (docs/knowledge-check-playbook-chemistry.md, "Where the
 *       items come from"): every `fillin`, and every `textin` that declares
 *       `answerForm="formula"` or `"equation"`, must print a worked example's
 *       question from the module of the `### N.M` section it sits under, and
 *       its key must be what that example's Solution prints — to the
 *       significant figures a declared `sig-figs:<n>` names, and not a
 *       number the question itself gives. Exit 1 on any other item. A
 *       directory is walked for `knowledge-check-XX-YY.md`; a check of a
 *       book that is not keyed-only is passed over. An absent source bundle
 *       is skipped, and fails under ATHENAEUM_REQUIRE_SOURCES=1.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { parseCliArgs } from '../lib/cli.mjs';
import { bookKeyOf, parseFrontmatter, shortcodes } from '../lib/content.mjs';
import { KEYED_ONLY_BOOKS, glossaryAliases, printedNumerals, unitFor, unlinked, workedExampleUnits, workedExamples } from '../lib/keyed-units.mjs';
import { bundleSourceDirectory, loadSourceLock } from '../lib/openstax-source.mjs';
import { judgeKeyedUnit, keyNumeral, pageItems, sameNumeral } from '../verify/verify-source-keys.mjs';
import { normalizeStem } from '../lib/practice-index.mjs';
import { extractExercises, readLedger } from '../verify/answer-ledger.mjs';
import { chemCanon } from '../../assets/js/lib/text/check-chem.mjs';
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
  // A book's appendices follow its last chapter or check, whatever exists:
  // the sidebar lists them at the end, so their weight is always the last.
  if (names.some((entry) => entry.isDirectory() && entry.name === 'appendices')) {
    order.push(path.join(bookDir, 'appendices', '_index.md'));
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

/** A stem's numbers as `printedNumerals` reads them: TeX's `\times10^{n}` and `{,}` grouping written as print. */
const numeralText = (text) => String(text ?? '').replace(/\\times\s*/g, ' × ').replace(/\{,\}/g, '').replace(/\$/g, ' ').replace(/10\^(-?\d)/g, '10^{$1}');

const COUNT_KEY = /^(?:\d[\d ,.]*|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|twenty|hundred)$/;

/** Each item's keys and the text it prints, in page order. */
export function checkItems(markdown) {
  const items = [];
  const lineOf = (index) => markdown.slice(0, index).split('\n').length;
  for (const kind of ['multiplechoice', 'textin', 'selfcheck', 'sortbins', 'fillin']) {
    for (const sc of shortcodes(markdown, kind)) {
      const p = sc.params;
      const keys = kind === 'textin' ? [p.answer, ...String(p.accept ?? '').split('|')]
        : kind === 'multiplechoice' ? [p.answer] : [];
      // A fill-in's key is a number: it leaks where another item prints the
      // same VALUE, however it is written. Three digits or more — a count
      // or a two-figure datum recurs across a page by chance.
      const number = kind === 'fillin' ? keyNumeral(p.answer) : null;
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
        number: number && String(number.mantissa).length >= 3 ? { numeral: number, written: String(p.answer) } : null,
        numerals: Object.fromEntries(Object.entries(printed).map(([part, text]) => [part, printedNumerals(numeralText(text))])),
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
    if (owner.number) {
      for (const other of items) {
        if (other === owner) continue;
        for (const [part, numerals] of Object.entries(other.numerals)) {
          const same = numerals.find((numeral) => sameNumeral(numeral, owner.number.numeral));
          if (same) leaks.push({ key: owner.number.written, keyLine: owner.line, printedLine: other.line, part, as: same.printed, distance: Math.abs(other.index - owner.index) });
        }
      }
    }
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

/* ---- examples and sources: a keyed-only book's check ------------------------ */

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');

/**
 * The mapped sections of the book a path sits in, by section number, each
 * with the path of its pinned module: `{ book, sections: Map<"N.M",
 * { moduleId, modulePath, title, localPath }>, absent }`. The book is the
 * `content/<shelf>/<book>/` segment of the path, so a scratch copy of a
 * check at a mirrored path is read as the book it mirrors. `absent` is the
 * bundle's directory when the checkout is not there.
 */
export function bookSections(filePath, root = ROOT) {
  const bookKey = bookKeyOf(path.join(filePath, 'x'));
  const map = JSON.parse(readFileSync(path.join(root, 'data/openstax/source-map.json'), 'utf8'));
  const lock = loadSourceLock(root);
  const mapped = map.sections.filter((section) => section.localPath.startsWith(`content/${bookKey}/`));
  const sections = new Map();
  let absent = null;
  for (const section of mapped) {
    const directory = bundleSourceDirectory(root, lock, section.bundle);
    if (!existsSync(directory)) absent = directory;
    sections.set(section.sourceSection, {
      moduleId: section.moduleId, title: section.sourceTitle, localPath: section.localPath,
      modulePath: path.join(directory, 'modules', section.moduleId, 'index.cnxml'),
    });
  }
  return { book: mapped[0]?.book ?? '', sections, absent };
}

/** The `### N.M` section each line of a check sits under ('' above the first, and after a `## ` heading). */
function sectionAtLine(markdown) {
  const at = [];
  let current = '';
  for (const line of markdown.split('\n')) {
    const section = line.match(/^### (\d+\.\d+)\b/);
    if (section) current = section[1];
    else if (/^## /.test(line)) current = '';
    at.push(current);
  }
  return (line) => at[line - 1] ?? '';
}

const SOURCED_FORMS = /^(?:formula|equation)$/;
/** The items of a keyed-only book's check that must re-ask a worked example. */
const mustBeSourced = (item) => item.type === 'fillin' || (item.type === 'textin' && SOURCED_FORMS.test(item.form || ''));

/** The longest run of a Solution's words read as one formula, and as one equation. */
const WINDOW = { formula: 14, equation: 48 };

/**
 * Whether a worked Solution prints a formula or an equation. A Solution is
 * prose — "We designate this by … adding a subscript 2. The formula is
 * Ca(H _2 PO _4 ) _2 ." — so the key is looked for as any run of its words,
 * each run read by the grader's own parser (`chemCanon`), which reads the
 * source's spaced subscripts and the page's print as one formula.
 */
export function solutionPrints(solution, key, form) {
  const wanted = chemCanon(key, form);
  if (!wanted) return false;
  const words = String(solution).split(/\s+/).filter(Boolean);
  for (let from = 0; from < words.length; from += 1) {
    if (!/^[\[(]?[A-Z0-9]/.test(words[from])) continue;
    for (let to = from + 1; to <= Math.min(words.length, from + WINDOW[form]); to += 1) {
      if (chemCanon(words.slice(from, to).join(' ').replace(/[.,;:]+$/, ''), form) === wanted) return true;
    }
  }
  return false;
}

/**
 * `sources` for one page. `moduleOf(section)` returns the module's CNXML for
 * a section number, or null. @returns {{ confirmed: number, failures: { line: number, detail: string }[] }}
 */
export function checkSources(markdown, moduleOf) {
  const sectionOf = sectionAtLine(markdown);
  const read = new Map();
  const unitsOf = (section) => {
    if (!read.has(section)) {
      const xml = moduleOf(section);
      read.set(section, xml ? { units: workedExampleUnits(xml), aliases: glossaryAliases(xml) } : null);
    }
    return read.get(section);
  };
  const failures = [];
  let confirmed = 0;
  for (const item of pageItems(markdown).filter(mustBeSourced).sort((a, b) => a.line - b.line)) {
    const section = sectionOf(item.line);
    const what = `${item.type}${item.form ? ` (${item.form})` : ''} "${item.question.slice(0, 70)}…"`;
    const source = section ? unitsOf(section) : null;
    if (!source) {
      failures.push({ line: item.line, detail: `${what} sits under ${section ? `Section ${section}, which the source map does not hold` : 'no "### N.M" heading'}` });
      continue;
    }
    const notAnExample = `${what} is not the question of a worked example of Section ${section} — on this book's checks a fill-in, a formula, or an equation re-asks a worked example and keys what its Solution prints`;
    if (item.type === 'textin') {
      const unit = unitFor(unlinked(item.question), source.units, item);
      if (!unit) failures.push({ line: item.line, detail: notAnExample });
      else if (!solutionPrints(unit.answer, item.answer, item.form)) {
        failures.push({ line: item.line, detail: `${what} keys ${JSON.stringify(item.answer)}, which the Solution of worked example ${unit.id} does not print as one ${item.form}` });
      } else confirmed += 1;
      continue;
    }
    const verdict = judgeKeyedUnit(item, source.units, { aliases: source.aliases });
    if (!verdict) {
      failures.push({ line: item.line, detail: notAnExample });
      continue;
    }
    if (verdict.status !== 'confirmed') {
      const why = verdict.status === 'figures-differ' ? verdict.detail
        : `keys ${JSON.stringify(item.answer)}, which the Solution of worked example ${verdict.exercise.id} does not print (${verdict.status})`;
      failures.push({ line: item.line, detail: `${what} ${why}` });
      continue;
    }
    const unit = source.units.find((candidate) => candidate.id === verdict.exercise.id);
    const key = item.type === 'fillin' ? keyNumeral(item.answer) : null;
    if (key && unit && printedNumerals(unit.stem).some((numeral) => sameNumeral(numeral, key))) {
      failures.push({ line: item.line, detail: `${what} keys ${JSON.stringify(item.answer)}, a number worked example ${unit.id}'s own question prints — choose an example whose answer its question does not give` });
      continue;
    }
    confirmed += 1;
  }
  return { confirmed, failures };
}

/** Every `knowledge-check-XX-YY.md` at or under a path. */
function checkPages(target) {
  if (CHECK_FILE.test(path.basename(target))) return [target];
  if (!existsSync(target)) return [];
  return readdirSync(target, { withFileTypes: true, recursive: true })
    .filter((entry) => entry.isFile() && CHECK_FILE.test(entry.name))
    .map((entry) => path.join(entry.parentPath ?? entry.path, entry.name)).sort();
}

/* ---- CLI ------------------------------------------------------------------- */

function main() {
  let cli;
  try {
    cli = parseCliArgs(process.argv.slice(2), {
      commands: ['weights', 'assemble', 'notes', 'leaks', 'examples', 'sources'],
      valueFlags: ['head', 'foot', 'out'],
      boolFlags: ['write'],
    });
  } catch (error) {
    console.error(`knowledge-check: ${error.message}`);
    console.error('usage: node tools/source/knowledge-check.mjs <weights|assemble|notes|leaks|examples|sources> … (see the header)');
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
  if (command === 'examples') {
    const [bookDir, range] = positional;
    const [first, last = first] = String(range ?? '').split('-').map(Number);
    if (!bookDir || !Number.isInteger(first) || !Number.isInteger(last)) {
      console.error('usage: node tools/source/knowledge-check.mjs examples <book-dir> <first>-<last>');
      process.exit(2);
    }
    const { book, sections, absent } = bookSections(bookDir);
    if (!KEYED_ONLY_BOOKS.includes(book)) { console.error(`knowledge-check: ${bookDir} is not a keyed-only book (${KEYED_ONLY_BOOKS.join(', ')})`); process.exit(2); }
    if (absent) { console.error(`knowledge-check: the source bundle is not checked out at ${absent} — run npm run source:fetch`); process.exit(1); }
    let total = 0;
    for (const [number, section] of [...sections].sort((a, b) => a[0].localeCompare(b[0], 'en', { numeric: true }))) {
      const chapter = Number(number.split('.')[0]);
      if (chapter < first || chapter > last) continue;
      const examples = workedExamples(readFileSync(section.modulePath, 'utf8'));
      const titles = new Map(examples.map((example) => [example.id, example.title]));
      total += examples.length;
      console.log(`\n### ${number} ${section.title} (${section.moduleId}) — ${examples.length} worked example(s)`);
      for (const example of examples) {
        const notes = [
          example.leansOn ? `leans on "${titles.get(example.leansOn) ?? example.leansOn}"` : '',
          example.figures ? `${example.figures} image(s) in the question` : '',
        ].filter(Boolean).join('; ');
        console.log(`- ${example.title} [${example.id}]${notes ? ` — ${notes}` : ''}`);
        console.log(`    Q: ${example.stem}`);
        console.log(`    Solution ends: …${example.answer.slice(-220)}`);
      }
    }
    console.log(`\n${total} worked example(s) in chapters ${first}–${last}`);
  }
  if (command === 'sources') {
    if (!positional.length) {
      console.error('usage: node tools/source/knowledge-check.mjs sources <page-or-dir>...');
      process.exit(2);
    }
    const strict = Boolean(process.env.ATHENAEUM_REQUIRE_SOURCES);
    let confirmed = 0, failed = 0, pages = 0, passedOver = 0;
    const skipped = new Set();
    for (const page of positional.flatMap(checkPages)) {
      const { book, sections, absent } = bookSections(path.dirname(page));
      if (!KEYED_ONLY_BOOKS.includes(book)) { passedOver += 1; continue; }
      if (absent) { skipped.add(absent); continue; }
      pages += 1;
      const result = checkSources(readFileSync(page, 'utf8'), (section) => {
        const found = sections.get(section);
        return found && existsSync(found.modulePath) ? readFileSync(found.modulePath, 'utf8') : null;
      });
      confirmed += result.confirmed;
      failed += result.failures.length;
      for (const failure of result.failures) console.error(`✖ ${page}:${failure.line} ${failure.detail}`);
    }
    for (const directory of skipped) console.log(`  skipped: the source bundle is not checked out at ${directory}`);
    console.log(`${confirmed} worked-example item(s) confirmed on ${pages} keyed-only check(s); ${failed} failure(s)${passedOver ? `; ${passedOver} check(s) of other books passed over` : ''}`);
    if (skipped.size && strict) { console.error('✖ ATHENAEUM_REQUIRE_SOURCES is set and a bundle is absent — run npm run source:fetch'); process.exit(1); }
    process.exit(failed ? 1 : 0);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === new URL(import.meta.url).pathname) main();
