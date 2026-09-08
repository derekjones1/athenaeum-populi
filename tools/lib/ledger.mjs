/**
 * The scaffolding the answer ledger is built from: a hash-keyed JSON file, a
 * `merge` that folds a batch of result files and refuses the whole batch on
 * a conflicting decision, a `prune` that retires records stranded by an
 * edit, and `--shard i/n` so a reading pass can be split.
 *
 * It is parameterized by path and record shape because a second ledger (the
 * graphplot-conversion queue, retired once every entry was adjudicated)
 * once shared it — and before that the machine existed TWICE, character for
 * character apart from the path constant, with the merge contract corrected
 * in one copy and not the other. Keep it one copy: a future adjudication
 * queue plugs in here rather than forking it.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/** A ledger file whose shape is wrong. Thrown, not printed: the caller
 * decides whether that is exit 1 (a CLI) or a test failure. */
export class LedgerFormatError extends Error {}

/**
 * Read a ledger. `required` is the difference between "there is no queue yet"
 * and "the queue is GONE", which is not a distinction to leave to inference:
 * a tool whose whole purpose is durability must not report the absence of
 * its own storage as a clean empty result. The commands that READ a ledger
 * insist the file exists; only `merge`, which creates it, does not.
 *
 * `validate(key, record)` returns an error string or null and is run over
 * EVERY entry on every read. The file is committed and hand-editable, so a
 * record that never passed through `merge` — `verdict: "typo"`, `solved: {}`
 * — used to be as good as a verified one to the gate: it existed, and it was
 * not literally 'defect'. Validation on read is what makes "the ledger says
 * so" mean something.
 */
export function readLedger(path, { required = false, validate = null } = {}) {
  if (!existsSync(path)) {
    if (required) {
      throw new Error(`no ledger at ${path} — an absent ledger file is lost adjudications, not an empty queue; restore it from git, or run \`merge <resultsDir>\` to create it from a reading pass`);
    }
    return { schemaVersion: 1, entries: {} };
  }
  const ledger = JSON.parse(readFileSync(path, 'utf8'));
  if (ledger?.schemaVersion !== 1 || typeof ledger.entries !== 'object' || ledger.entries === null || Array.isArray(ledger.entries)) {
    throw new LedgerFormatError(`${path}: schemaVersion must be 1 with an entries object`);
  }
  if (validate) {
    const problems = [];
    for (const [key, record] of Object.entries(ledger.entries)) {
      const problem = validate(key, record);
      if (problem) problems.push(`${key}: ${problem}`);
    }
    if (problems.length) {
      throw new LedgerFormatError(`${problems.length} malformed record(s) in ${path}:\n    ${problems.slice(0, 5).join('\n    ')}${problems.length > 5 ? `\n    …and ${problems.length - 5} more` : ''}`);
    }
  }
  return ledger;
}

export function writeLedger(ledger, path) {
  const ordered = Object.fromEntries(
    Object.entries(ledger.entries).sort(([a], [b]) => (a < b ? -1 : 1)),
  );
  writeFileSync(path, `${JSON.stringify({ ...ledger, entries: ordered }, null, 1)}\n`);
}

/**
 * Fold a directory of result files into the ledger at `path`.
 *
 * The contract both ledgers share: read the WHOLE batch first and refuse it
 * entirely when two result files disagree about one hash — one of those
 * passes read the exercise wrong, and no merge order can decide which, so
 * nothing is written until it is re-read. A batch decision that differs from
 * the LEDGER's existing entry is a different thing: that is how a re-read
 * updates a verdict, so it merges, visibly.
 *
 * `validate` returns an error string or null; `decisionOf` names the part of
 * a record two passes must agree on; `toRecord` keeps only what is stored;
 * `validateEntry` is the read-time check on the ledger itself (see
 * `readLedger`).
 */
export function mergeResults({ dir, path, validate, decisionOf, toRecord, validateEntry = null }) {
  const ledger = readLedger(path, { validate: validateEntry });
  const batch = new Map();
  let bad = 0;
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.json')).sort()) {
    const parsed = JSON.parse(readFileSync(join(dir, file), 'utf8'));
    for (const record of parsed.results ?? []) {
      const problem = validate(record);
      if (problem) {
        bad += 1;
        console.error(`  invalid record in ${file}: ${problem} (${record.hash ?? 'no hash'})`);
        continue;
      }
      const prior = batch.get(record.hash);
      if (prior && decisionOf(prior.record) !== decisionOf(record)) {
        bad += 1;
        console.error(`  conflict ${record.hash}: ${decisionOf(prior.record)} (${prior.file}) vs ${decisionOf(record)} (${file})`);
        continue; // keep reading so every conflict is reported in one run
      }
      batch.set(record.hash, { record: toRecord(record), file });
    }
  }
  if (bad) {
    console.error(`✖ ${bad} invalid/conflicting record(s) — nothing merged; fix the result files and rerun`);
    process.exit(1);
  }
  let updated = 0;
  for (const [hash, { record }] of batch) {
    const existing = ledger.entries[hash];
    if (existing && decisionOf(existing) !== decisionOf(record)) {
      updated += 1;
      console.log(`  updated ${hash}: ${decisionOf(existing)} → ${decisionOf(record)}`);
    }
    ledger.entries[hash] = record;
  }
  writeLedger(ledger, path);
  console.log(`merged ${batch.size} record(s) into ${path}; ${Object.keys(ledger.entries).length} total${updated ? `; ${updated} verdict(s) updated` : ''}`);
}

/**
 * Drop records whose hash matches nothing live. Editing an exercise strands
 * the verdict recorded against its old text; converting one removes the
 * source the verdict was about. Harmless to either gate, but a ledger full of
 * records for content that no longer exists makes a later reader trust the
 * wrong number — so dropping them is explicit, never a side effect of merge.
 */
export function pruneLedger({ path, live, validateEntry = null }) {
  const ledger = readLedger(path, { required: true, validate: validateEntry });
  const stale = Object.keys(ledger.entries).filter((hash) => !live.has(hash));
  for (const hash of stale) delete ledger.entries[hash];
  writeLedger(ledger, path);
  console.log(`pruned ${stale.length} stranded record(s); ${Object.keys(ledger.entries).length} remain`);
}

/**
 * Move records from one key to another when the identity scheme changes —
 * the one-off that carried every "the graph above" verdict forward when the
 * figure an exercise names became part of its hash. `moves` maps a legacy
 * key to the set of keys its record now lives under (a set, because the same
 * exercise text bound to two different figures is now two exercises);
 * `live` is every key the current corpus produces, so a legacy key that is
 * still live (nothing changed for it) is left alone.
 *
 * Refuses the whole run, writing nothing, if a target key already holds a
 * different decision: that is two readings disagreeing, the same refusal
 * `mergeResults` gives, and no key order can settle it. Once migrated, the
 * legacy key is gone, so this cannot launder a later edit: an exercise whose
 * figure changes afterwards has no legacy record to inherit from.
 */
export function rekeyLedger({ path, moves, live, decisionOf, validateEntry = null }) {
  const ledger = readLedger(path, { required: true, validate: validateEntry });
  const { entries } = ledger;
  const conflicts = [];
  let moved = 0;
  let alreadyCurrent = 0;
  let absent = 0;
  for (const [legacy, targets] of moves) {
    const record = entries[legacy];
    if (!record) { absent += 1; continue; }
    for (const target of targets) {
      if (target === legacy) continue;
      const existing = entries[target];
      if (existing && decisionOf(existing) !== decisionOf(record)) {
        conflicts.push(`${legacy} → ${target}: legacy record says ${decisionOf(record)}, target already says ${decisionOf(existing)}`);
      } else if (existing) {
        alreadyCurrent += 1;
      } else {
        entries[target] = record;
        moved += 1;
      }
    }
  }
  if (conflicts.length) {
    for (const line of conflicts) console.error(`  conflict ${line}`);
    console.error(`✖ ${conflicts.length} conflicting target(s) — nothing rekeyed; settle them by a re-read and rerun`);
    process.exit(1);
  }
  let retired = 0;
  for (const legacy of moves.keys()) {
    if (entries[legacy] && !live.has(legacy)) { delete entries[legacy]; retired += 1; }
  }
  writeLedger(ledger, path);
  console.log(`rekeyed ${moved} record(s) from ${moves.size} legacy key(s); ${alreadyCurrent} already current; ${absent} legacy record(s) absent (left for a reading pass); ${retired} legacy key(s) retired; ${Object.keys(entries).length} total`);
  return { moved, alreadyCurrent, absent, retired };
}

/** `--shard i/n` over an already-deduplicated list. */
export function shardSlice(items, spec) {
  const [i, n] = spec.split('/').map(Number);
  if (!Number.isInteger(i) || !Number.isInteger(n) || i < 1 || i > n) {
    throw new Error(`--shard must be i/n with 1 ≤ i ≤ n, got '${spec}'`);
  }
  const size = Math.ceil(items.length / n);
  return items.slice((i - 1) * size, i * size);
}
