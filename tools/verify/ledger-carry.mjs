/**
 * Carry answer-ledger records across edits that re-hash an exercise without
 * changing what a solver answered or what the grader accepts.
 *
 *   node tools/verify/ledger-carry.mjs snapshot content > $SP/ledger-before.json
 *   …the sweep edits pages…
 *   node tools/verify/ledger-carry.mjs plan $SP/ledger-before.json content --out $SP/carry [--note "…"]
 *   npm run ledger:merge -- $SP/carry/results
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
 *     identical after whitespace collapse — the stem, the options, the key;
 *   - the same inner content (a multiple choice's options, a selfcheck's
 *     model answer);
 *   - the same dependency block — the figure or table the item names —
 *     byte for byte after whitespace collapse, since the solver read it;
 *   - for a textin, every form the old `answer`/`accept` graded still grades
 *     correct under the new ones (an accept ADDITION carries; a removal does
 *     not); any other kind carries only with `accept` unchanged;
 *   - exactly one pre-edit exercise with a ledger record matches.
 *
 * The snapshot is this tool's own format, not `ledger:list` output: `list`
 * prints a dependency's kind and line but not its source, and a hint edit
 * made together with a table edit would then carry a solve of the old table.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { acceptedForms, checkText } from '../../assets/js/lib/text/check-text.mjs';
import { parseCliArgs } from '../lib/cli.mjs';
import { LedgerFormatError } from '../lib/ledger.mjs';
import { LEDGER_PATH, exerciseHash, extractExercises, readLedger } from './answer-ledger.mjs';

const norm = (value) => String(value ?? '').replace(/\s+/g, ' ').trim();

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

/** Everything a solver reads except the hint, plus the key; `accept` is judged separately. */
function signature(item) {
  const { hint, accept, ...rest } = item.params ?? {};
  return JSON.stringify([
    item.path, item.kind, Object.keys(rest).sort().map((key) => [key, norm(rest[key])]), norm(item.inner),
  ]);
}

/** Does every form the old item graded still grade correct under the new one? */
export function acceptNeutral(before, now) {
  const oldAccept = before.params?.accept ?? '';
  const newAccept = now.params?.accept ?? '';
  if (norm(oldAccept) === norm(newAccept)) return true;
  if (now.kind !== 'textin') return false;
  const answer = now.params?.answer ?? '';
  return acceptedForms(before.params?.answer ?? '', oldAccept)
    .every((form) => checkText(form, answer, { accept: newAccept }) === 'correct');
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
    const neutral = sameContext.filter((m) => acceptNeutral(m, item));
    let why = null;
    if (!matches.length) why = 'changed';
    else if (!sameContext.length) why = 'dependency-changed';
    else if (!neutral.length) why = 'accept-narrowed';
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

function usage(detail) {
  console.error(`ledger-carry: ${detail}`);
  console.error('usage: node tools/verify/ledger-carry.mjs snapshot [root]\n       node tools/verify/ledger-carry.mjs plan <snapshot.json> [root] --out <dir> [--note text] [--ledger path]');
  process.exit(2);
}

function main() {
  let cli;
  try {
    cli = parseCliArgs(process.argv.slice(2), {
      commands: ['snapshot', 'plan'], valueFlags: ['out', 'note', 'ledger'], positional: { max: 2 },
    });
  } catch (error) {
    usage(error.message);
    return;
  }
  const { command, positional, flag } = cli;
  if (command === 'snapshot') {
    process.stdout.write(`${JSON.stringify(snapshot(positional[0] || 'content'))}\n`);
    return;
  }
  const [snapshotFile, root = 'content'] = positional;
  const out = flag('out');
  if (!snapshotFile) usage('plan needs the pre-edit snapshot file');
  if (!out) usage('plan needs --out <dir>');
  const date = new Date().toISOString().slice(0, 10);
  const note = norm(flag('note')) || `carried ${date} (ledger-carry): re-hashed by a hint/accept edit; stem, options, key, and dependency unchanged, every previously graded form still graded correct`;
  const { entries } = readLedger(flag('ledger') ?? LEDGER_PATH);
  const plan = planCarry({
    before: JSON.parse(readFileSync(snapshotFile, 'utf8')), now: snapshot(root), entries, note,
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
