/**
 * Carry answer-ledger records across edits that re-hash an exercise without
 * changing what a solver answered or what the grader accepts.
 *
 *   node tools/verify/ledger-carry.mjs snapshot content > $SP/ledger-before.json
 *   …the sweep edits pages…
 *   node tools/verify/ledger-carry.mjs plan $SP/ledger-before.json content --out $SP/carry [--note "…"]
 *   npm run ledger:merge -- $SP/carry/results
 *
 * and, for a change to the BINDING RULE (tools/lib/exercise-context.mjs),
 *
 *   node tools/verify/ledger-carry.mjs rebind $SP/ledger-before.json content            (lists, writes nothing)
 *   node tools/verify/ledger-carry.mjs rebind $SP/ledger-before.json content --out $SP/rebind
 *   npm run ledger:merge -- $SP/rebind/results && node tools/verify/answer-ledger.mjs prune content
 *
 * `plan` writes `<out>/results/carried.json` (a merge-ready result file) and
 * `<out>/resolve-list.json` (every unrecorded exercise it would not carry,
 * with the reason) — the resolve list is what gets re-solved or re-read.
 *
 * WHY THIS EXISTS. An exercise's identity covers every character of its
 * source (answer-ledger.mjs), so a sweep that rewrites leaking hints strands
 * thousands of sound records at once. The September 23, 2026 close-out wrote
 * this as a throwaway script and carried 2,620 records; the rule it applied
 * is AGENTS.md "The answer ledger" → "Re-solving after a sweep". A record
 * carries to the new hash only when all of these hold:
 *
 *   - same page, same kind, and every param except `hint` and `accept`
 *     identical after whitespace collapse — the stem, the options, the key
 *     (a link to a page of this site added around unchanged words, or taken
 *     off them, is not a change: `the table in [Section 5.1 Energy
 *     Basics](/…/01-energy-basics/)` asks what the plain words asked, and the
 *     solver read the words; November 14, 2026, when references to other
 *     sections became links);
 *   - the same inner content (a multiple choice's options, a selfcheck's
 *     model answer);
 *   - the same dependency block — the figure or table the item names —
 *     byte for byte after whitespace collapse, since the solver read it;
 *   - for a textin, every form the old `answer`/`accept` graded still grades
 *     correct under the new ones (an accept ADDITION carries; a removal does
 *     not); any other kind carries only with `accept` unchanged;
 *   - for a fill-in whose `answerForm` changed, the unchanged key still
 *     grades correct under the new form. A form is not what a reading
 *     checked: the key is the same value, and `solve:compare` counts a
 *     solver's answer as agreeing on value whatever its form, so a form-only
 *     edit cannot change either result (October 4, 2026, when the
 *     answerForm lint gave 101 already-solved fill-ins a form);
 *   - exactly one pre-edit exercise with a ledger record matches.
 *
 * The snapshot is this tool's own format, not `ledger:list` output: `list`
 * prints a dependency's kind and line but not its source, and a hint edit
 * made together with a table edit would then carry a solve of the old table.
 *
 * REBIND. An item's identity covers the block it is bound to, so a change to
 * which block a phrase binds re-hashes every item it moves, with not a
 * character of any page changed. `plan` refuses those (`dependency-changed`):
 * it cannot tell a new binding from an edited table. `rebind` can, because
 * the snapshot also holds every figure and table block of every page: it
 * carries a record to an item whose stem, options, and key are unchanged and
 * whose NEW block stood on the page, byte for byte, when the snapshot was
 * taken (or which is now bound to nothing). The solver read that page; only
 * the ledger's idea of which block the item names has moved. Each move is
 * printed with the block it now reads, to be read against the page before
 * `--out` writes anything (November 16, 2026: "the table above" stopped
 * binding to the nearest photograph, 47 items in five books).
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { checkAnswer, keyAsTyped } from '../../assets/js/lib/math/check-answer.mjs';
import { checkText } from '../../assets/js/lib/text/check-text.mjs';
import { parseCliArgs } from '../lib/cli.mjs';
import { maskCode, shortcodes, walkMarkdown } from '../lib/content.mjs';
import { figureLikeBlocks } from '../lib/exercise-context.mjs';
import { LedgerFormatError } from '../lib/ledger.mjs';
import { EXERCISE_KINDS, LEDGER_PATH, exerciseHash, extractExercises, readLedger } from './answer-ledger.mjs';

const norm = (value) => String(value ?? '').replace(/\s+/g, ' ').trim();
// A site-root Markdown link read as its words: the link is where the words
// lead, not part of what the item asks.
const SITE_LINK = /\[([^\]\[]+)\]\(\/[^()\s]*\)/g;
const words = (value) => norm(value).replace(SITE_LINK, '$1');

/** The comparable shape of every exercise under `root`. */
export function snapshot(root) {
  return extractExercises(resolve(root)).map((e) => ({
    hash: e.hash,
    kind: e.kind,
    path: e.path,
    line: e.line,
    params: e.params,
    inner: e.inner,
    dependency: e.dependency ? exerciseHash(e.dependency.raw) : null,
  }));
}

/**
 * Every figure and table block under `root`, as `{ <path>: [hash, …] }` —
 * the blocks `extractExercises` binds items to, found the same way. `rebind`
 * reads it to know a block an item is newly bound to was already on the page.
 */
export function pageBlocks(root) {
  const blocks = {};
  for (const file of walkMarkdown(resolve(root))) {
    const cleaned = maskCode(readFileSync(file, 'utf8'));
    const exercises = EXERCISE_KINDS.flatMap((kind) => [...shortcodes(cleaned, kind)]);
    const found = figureLikeBlocks(cleaned, { exerciseSpans: exercises });
    if (found.length) blocks[relative(process.cwd(), file)] = found.map((block) => exerciseHash(block.raw));
  }
  return blocks;
}

/** A snapshot file's exercises: the list itself (before November 16, 2026), or its `exercises`. */
const exercisesOf = (data) => (Array.isArray(data) ? data : data.exercises);

/** Everything a solver reads except the hint, plus the key; `accept` and `answerForm` are judged separately. */
function signature(item) {
  const { hint, accept, answerForm, ...rest } = item.params ?? {};
  return JSON.stringify([
    item.path, item.kind, Object.keys(rest).sort().map((key) => [key, words(rest[key])]), words(item.inner),
  ]);
}

/** Does every form the old item graded still grade correct under the new one? */
export function acceptNeutral(before, now) {
  const oldAccept = before.params?.accept ?? '';
  const newAccept = now.params?.accept ?? '';
  if (norm(oldAccept) === norm(newAccept)) return true;
  if (now.kind !== 'textin') return false;
  const answer = now.params?.answer ?? '';
  // The RAW old spellings, not their normalized forms: normalizing reads a
  // hyphen as a space, and the grader's closed fold (`fore-gut` ≡ `foregut`,
  // October 27, 2026) is only reachable from the spelling as listed.
  return [before.params?.answer ?? '', ...String(oldAccept).split('|')]
    .filter((raw) => raw.trim())
    .every((raw) => checkText(raw, answer, { accept: newAccept, form: now.params?.answerForm }) === 'correct');
}

/** Does the unchanged key still grade correct under a changed answerForm? */
export function formNeutral(before, now) {
  const form = now.params?.answerForm;
  if (norm(before.params?.answerForm) === norm(form)) return true;
  if (now.kind !== 'fillin') return false;
  const answer = now.params?.answer ?? '';
  try {
    return checkAnswer(keyAsTyped(answer, form), answer, { mode: now.params?.answerMode, form }) === 'correct';
  } catch {
    return false;
  }
}

/**
 * @returns {{ results: object[], resolve: object[] }} merge-ready records for
 * the carried hashes, and one entry per unrecorded exercise left to re-read.
 */
export function planCarry({ before, now, entries, note }) {
  const bySignature = new Map();
  for (const item of before) {
    if (!entries[item.hash]) continue;
    const key = signature(item);
    if (!bySignature.has(key)) bySignature.set(key, []);
    // One exercise duplicated across a page is one candidate, not two.
    if (!bySignature.get(key).some((other) => other.hash === item.hash)) bySignature.get(key).push(item);
  }
  const results = [];
  const toResolve = [];
  const seen = new Set();
  for (const item of now) {
    if (entries[item.hash] || seen.has(item.hash)) continue;
    seen.add(item.hash);
    const matches = bySignature.get(signature(item)) ?? [];
    const sameContext = matches.filter((m) => m.dependency === item.dependency);
    const acceptOk = sameContext.filter((m) => acceptNeutral(m, item));
    const neutral = acceptOk.filter((m) => formNeutral(m, item));
    let why = null;
    if (!matches.length) why = 'changed';
    else if (!sameContext.length) why = 'dependency-changed';
    else if (!acceptOk.length) why = 'accept-narrowed';
    else if (!neutral.length) why = 'form-rejects-key';
    else if (neutral.length > 1) why = 'ambiguous';
    if (why) {
      toResolve.push({
        hash: item.hash, path: item.path, line: item.line, kind: item.kind, question: norm(item.params?.question).slice(0, 90), why,
      });
      continue;
    }
    const old = entries[neutral[0].hash];
    results.push({
      hash: item.hash,
      verdict: old.verdict,
      note: old.note ? `${old.note} | ${note}` : note,
      ...(old.solved ? { solved: old.solved } : {}),
    });
  }
  return { results, resolve: toResolve };
}

/**
 * The records a changed binding rule moves: for each unrecorded exercise now
 * bound to a different block than the one recorded exercise it matches.
 * @returns {{ results: object[], moves: object[], refused: object[] }}
 */
export function planRebind({ before, blocks, now, entries, note }) {
  const bySignature = new Map();
  for (const item of before) {
    if (!entries[item.hash]) continue;
    const key = signature(item);
    if (!bySignature.has(key)) bySignature.set(key, []);
    if (!bySignature.get(key).some((other) => other.hash === item.hash)) bySignature.get(key).push(item);
  }
  const results = [];
  const moves = [];
  const refused = [];
  const seen = new Set();
  for (const item of now) {
    if (entries[item.hash] || seen.has(item.hash)) continue;
    seen.add(item.hash);
    const dependency = item.dependency ? exerciseHash(item.dependency.raw) : null;
    const matches = bySignature.get(signature(item)) ?? [];
    // The same block as before is `plan`'s case, not this one's.
    if (!matches.length || matches.some((m) => m.dependency === dependency)) continue;
    const neutral = matches.filter((m) => acceptNeutral(m, item) && formNeutral(m, item));
    const where = { hash: item.hash, path: item.path, line: item.line, kind: item.kind, phrase: item.reference?.phrase ?? null };
    let why = null;
    if (!neutral.length) why = 'accept-or-form-changed';
    else if (neutral.length > 1) why = 'ambiguous';
    else if (dependency && !(blocks[item.path] ?? []).includes(dependency)) why = 'block-edited';
    if (why) { refused.push({ ...where, why }); continue; }
    const old = entries[neutral[0].hash];
    moves.push({
      ...where,
      from: neutral[0].dependency ? 'another block' : 'nothing',
      to: item.dependency ? { kind: item.dependency.kind, line: item.dependency.line, opens: norm(item.dependency.raw).slice(0, 110) } : null,
    });
    results.push({
      hash: item.hash,
      verdict: old.verdict,
      note: old.note ? `${old.note} | ${note}` : note,
      ...(old.solved ? { solved: old.solved } : {}),
    });
  }
  return { results, moves, refused };
}

function usage(detail) {
  console.error(`ledger-carry: ${detail}`);
  console.error('usage: node tools/verify/ledger-carry.mjs snapshot [root]\n       node tools/verify/ledger-carry.mjs plan <snapshot.json> [root] --out <dir> [--note text] [--ledger path]\n       node tools/verify/ledger-carry.mjs rebind <snapshot.json> [root] [--out <dir>] [--note text] [--ledger path]');
  process.exit(2);
}

function main() {
  let cli;
  try {
    cli = parseCliArgs(process.argv.slice(2), {
      commands: ['snapshot', 'plan', 'rebind'], valueFlags: ['out', 'note', 'ledger'], positional: { max: 2 },
    });
  } catch (error) {
    usage(error.message);
    return;
  }
  const { command, positional, flag } = cli;
  if (command === 'snapshot') {
    const root = positional[0] || 'content';
    process.stdout.write(`${JSON.stringify({ exercises: snapshot(root), blocks: pageBlocks(root) })}\n`);
    return;
  }
  const [snapshotFile, root = 'content'] = positional;
  const out = flag('out');
  if (!snapshotFile) usage(`${command} needs the pre-edit snapshot file`);
  const date = new Date().toISOString().slice(0, 10);
  if (command === 'rebind') {
    const taken = JSON.parse(readFileSync(snapshotFile, 'utf8'));
    if (Array.isArray(taken) || !taken.blocks) usage('rebind needs a snapshot that holds each page\'s blocks (taken on or after November 16, 2026)');
    const note = norm(flag('note')) || `rebound ${date} (ledger-carry): the binding rule changed which block this item names; stem, options, key, and the page's blocks unchanged`;
    const { entries } = readLedger(flag('ledger') ?? LEDGER_PATH);
    const rebound = planRebind({ before: taken.exercises, blocks: taken.blocks, now: extractExercises(resolve(root)), entries, note });
    for (const move of rebound.moves) {
      console.log(`${move.path}:${move.line} ${move.kind} ${JSON.stringify(move.phrase)} — was bound to ${move.from}; now ${move.to ? `${move.to.kind} L${move.to.line}: ${move.to.opens}` : 'bound to nothing'}`);
    }
    for (const item of rebound.refused) console.log(`REFUSED (${item.why}) ${item.path}:${item.line} ${item.kind} ${JSON.stringify(item.phrase)}`);
    console.log(`${rebound.moves.length} record(s) to move; ${rebound.refused.length} refused`);
    if (!out) { console.log('  nothing written: read each move against its page, then rerun with --out <dir>'); return; }
    mkdirSync(join(out, 'results'), { recursive: true });
    writeFileSync(join(out, 'results', 'rebound.json'), `${JSON.stringify({ results: rebound.results }, null, 1)}\n`);
    console.log(`  merge: npm run ledger:merge -- ${join(out, 'results')}`);
    return;
  }
  if (!out) usage('plan needs --out <dir>');
  const note = norm(flag('note')) || `carried ${date} (ledger-carry): re-hashed by a hint/accept/answerForm edit; stem, options, key, and dependency unchanged, every previously graded form still graded correct, the key correct under its form`;
  const { entries } = readLedger(flag('ledger') ?? LEDGER_PATH);
  const plan = planCarry({
    before: exercisesOf(JSON.parse(readFileSync(snapshotFile, 'utf8'))), now: snapshot(root), entries, note,
  });
  mkdirSync(join(out, 'results'), { recursive: true });
  writeFileSync(join(out, 'results', 'carried.json'), `${JSON.stringify({ results: plan.results }, null, 1)}\n`);
  writeFileSync(join(out, 'resolve-list.json'), `${JSON.stringify(plan.resolve, null, 1)}\n`);
  const why = {};
  for (const r of plan.resolve) why[r.why] = (why[r.why] ?? 0) + 1;
  console.log(`carried ${plan.results.length}; left to re-read ${plan.resolve.length}${plan.resolve.length ? ` ${JSON.stringify(why)}` : ''}`);
  console.log(`  merge: npm run ledger:merge -- ${join(out, 'results')}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    main();
  } catch (error) {
    if (!(error instanceof LedgerFormatError)) throw error;
    console.error(`✖ ledger-carry: ${error.message}`);
    process.exit(1);
  }
}
