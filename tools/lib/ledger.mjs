/**
 * The scaffolding both adjudication ledgers are built from.
 *
 * `answer-ledger.mjs` records that a reading pass re-derived an exercise's
 * answer; `graphplot-conversion.mjs` records whether a graph-topic exercise
 * should become an interactive graphplot. Different verdicts, same machine:
 * a hash-keyed JSON file, a `merge` that folds a batch of result files and
 * refuses the whole batch on a conflicting decision, a `prune` that retires
 * records stranded by an edit, and `--shard i/n` so a reading pass can be
 * split.
 *
 * That machine used to exist TWICE, character for character apart from the
 * path constant. The merge contract is the part that hurts: it was corrected
 * once already (comparing the mode as well as the verdict, so file order
 * could not silently pick an answer form), and a correction applied to one
 * copy and not the other leaves the two queues quietly disagreeing about what
 * counts as a conflict. One copy, parameterized by path and record shape.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * The command line, parsed rather than positionally assumed — the same lesson
 * `parseReplayArgs` records: a flag's VALUE is not a positional argument.
 * `graphplot-conversion.mjs candidates --shard 1/4` filtered out only tokens
 * beginning with `--`, so '1/4' became `positional[0]` and therefore the
 * content root, and the run died on `ENOENT: scandir '1/4'` — a path the
 * caller never typed, for an argument documented as optional.
 *
 * Unknown flags are an error rather than a silently ignored boolean, so a
 * misspelled `--verdcit convert` cannot look like a clean empty result.
 */
export function parseLedgerArgs(argv, { commands, valueFlags = [], boolFlags = [] }) {
  const wantsValue = new Set([...valueFlags, 'ledger']);
  const known = new Set([...wantsValue, ...boolFlags]);
  const command = argv[0];
  if (!command || !commands.includes(command)) {
    throw new Error(`command must be one of: ${commands.join(', ')}`);
  }
  const positional = [];
  const flags = new Map();
  for (let i = 1; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith('--')) {
      positional.push(token);
      continue;
    }
    const eq = token.indexOf('=');
    const name = eq === -1 ? token.slice(2) : token.slice(2, eq);
    if (!known.has(name)) throw new Error(`unknown flag --${name}`);
    if (eq !== -1) {
      flags.set(name, token.slice(eq + 1));
      continue;
    }
    if (!wantsValue.has(name)) {
      flags.set(name, true);
      continue;
    }
    const value = argv[i + 1];
    if (value === undefined || value.startsWith('--')) {
      throw new Error(`--${name} needs a value`);
    }
    flags.set(name, value);
    i += 1;
  }
  return {
    command,
    positional,
    flag: (name) => (flags.has(name) ? flags.get(name) : null),
    bool: (name) => flags.get(name) === true,
  };
}

/**
 * Read a ledger. `required` is the difference between "there is no queue yet"
 * and "the queue is GONE", which is not a distinction to leave to inference.
 *
 * The graphplot-conversion ledger was never committed: `readConversionLedger`
 * fell back to an empty ledger, so `stats` reported "0 adjudicated, 335
 * unread" and `list --verdict convert` printed `[]` — both indistinguishable
 * from a queue nobody had started, while every recorded convert/keep verdict
 * from the reading pass was gone. A tool whose whole purpose is durability
 * must not report the absence of its own storage as a clean empty result. So
 * the commands that READ a queue insist the file exists; only `merge`, which
 * creates it, does not.
 */
export function readLedger(path, { required = false } = {}) {
  if (!existsSync(path)) {
    if (required) {
      throw new Error(`no ledger at ${path} — an absent ledger file is lost adjudications, not an empty queue; restore it from git, or run \`merge <resultsDir>\` to create it from a reading pass`);
    }
    return { schemaVersion: 1, entries: {} };
  }
  return JSON.parse(readFileSync(path, 'utf8'));
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
 * a record two passes must agree on; `toRecord` keeps only what is stored.
 */
export function mergeResults({ dir, path, validate, decisionOf, toRecord }) {
  const ledger = readLedger(path);
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
export function pruneLedger({ path, live }) {
  const ledger = readLedger(path, { required: true });
  const stale = Object.keys(ledger.entries).filter((hash) => !live.has(hash));
  for (const hash of stale) delete ledger.entries[hash];
  writeLedger(ledger, path);
  console.log(`pruned ${stale.length} stranded record(s); ${Object.keys(ledger.entries).length} remain`);
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
