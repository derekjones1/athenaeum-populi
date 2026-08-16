/**
 * The answer-verification ledger: a durable record that a HUMAN-EQUIVALENT
 * reading of each exercise re-derived its answer and agreed with it.
 *
 *   node tools/answer-ledger.mjs check content [--min-exercises N]
 *   node tools/answer-ledger.mjs list  content [--kind fillin] [--shard i/n]
 *   node tools/answer-ledger.mjs merge <resultsDir>
 *   node tools/answer-ledger.mjs stats content
 *
 * WHY THIS EXISTS. `verify-answers.mjs` re-derives an answer only when it can
 * mechanically recognize what the prompt asks for; 79% of what it skips is
 * skipped as "prompt class not mechanically checkable", and it never reads
 * `multiplechoice` or `graphplot` at all. That leaves word problems, table
 * reads, graph reads, and every multiple choice resting on nothing but the
 * author's own arithmetic — which is where the one wrong answer found in the
 * August 14, 2026 review lived (a 3x3 system whose declared triple satisfied
 * none of its three printed equations, shipped in a knowledge check).
 *
 * Reading a prompt is the thing a regex cannot do, so that pass is done by
 * reading rather than by parsing. This file makes the result DURABLE:
 *
 *   - identity is the sha256 of the exercise's own normalized source, so a
 *     verdict belongs to an exact question+answer pair and nothing else;
 *   - editing any semantic character of an exercise changes its hash, which
 *     drops it out of the ledger and fails the gate until it is re-read;
 *   - whitespace runs collapse first, so reflowing a shortcode does not
 *     invalidate a sound verdict;
 *   - the key is the hash alone, so the same exercise appearing in two books
 *     is verified once, and moving an exercise between files costs nothing.
 *
 * THE FLOOR IS NOT OPTIONAL. "Every exercise has an entry" passes vacuously if
 * extraction breaks and finds no exercises. `--min-exercises N` is the ratchet
 * against a gate that has quietly stopped reading the corpus, exactly as
 * `--min-verified` is for verify-answers.
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { walkMarkdown, shortcodes, blankPreservingOffsets } from './lib-content.mjs';

export const LEDGER_PATH = 'data/verification/answer-ledger.json';

/** The three shortcodes that carry a gradeable answer. */
export const EXERCISE_KINDS = Object.freeze(['fillin', 'multiplechoice', 'graphplot']);

/**
 * Exercise identity. Whitespace runs collapse to one space so that reflowing
 * a shortcode across lines is not a semantic change; everything else — every
 * character of the question, answer, options, hint and config — is identity.
 * Hashing the raw source rather than a chosen list of params is deliberate: a
 * field list would be a second copy of the shortcode grammar, free to drift
 * away from the templates that actually read it.
 */
export function exerciseHash(rawShortcode) {
  const normalized = rawShortcode.replace(/\s+/g, ' ').trim();
  return createHash('sha256').update(normalized).digest('hex').slice(0, 16);
}

/** Every answer-carrying exercise under `root`, in stable path order. */
export function extractExercises(root) {
  const found = [];
  for (const file of walkMarkdown(root)) {
    const source = readFileSync(file, 'utf8');
    // Code fences are documentation ABOUT shortcodes, not exercises. Blank
    // them in place so line numbers stay true to the file.
    const cleaned = source
      .replace(/```[\s\S]*?```/g, blankPreservingOffsets)
      .replace(/`[^`\n]*`/g, blankPreservingOffsets);
    for (const kind of EXERCISE_KINDS) {
      for (const sc of shortcodes(cleaned, kind)) {
        const raw = cleaned.slice(sc.index, sc.end);
        found.push({
          path: relative(process.cwd(), file),
          line: cleaned.slice(0, sc.index).split('\n').length,
          kind,
          hash: exerciseHash(raw),
          params: sc.params,
          inner: sc.inner,
          raw,
        });
      }
    }
  }
  return found.sort((a, b) => (a.path === b.path ? a.line - b.line : a.path < b.path ? -1 : 1));
}

export function readLedger(path = LEDGER_PATH) {
  if (!existsSync(path)) return { schemaVersion: 1, entries: {} };
  return JSON.parse(readFileSync(path, 'utf8'));
}

function writeLedger(ledger, path = LEDGER_PATH) {
  const ordered = Object.fromEntries(Object.entries(ledger.entries).sort(([a], [b]) => (a < b ? -1 : 1)));
  writeFileSync(path, `${JSON.stringify({ ...ledger, entries: ordered }, null, 1)}\n`);
}

function usage(code) {
  console.error('usage: node tools/answer-ledger.mjs <check|list|merge|prune|stats> [root|resultsDir] [flags]');
  process.exit(code);
}

function main() {
  const args = process.argv.slice(2);
  const mode = args[0];
  if (!mode || !['check', 'list', 'merge', 'prune', 'stats'].includes(mode)) usage(2);
  const positional = args.slice(1).filter((a) => !a.startsWith('--'));
  const flag = (name) => {
    const hit = args.find((a) => a === `--${name}` || a.startsWith(`--${name}=`));
    if (!hit) return null;
    return hit.includes('=') ? hit.split('=').slice(1).join('=') : args[args.indexOf(hit) + 1];
  };

  if (mode === 'merge') {
    const dir = positional[0];
    if (!dir) usage(2);
    const ledger = readLedger();
    // Fold the whole batch together BEFORE touching the ledger. Two result
    // files disagreeing about a hash means one of the passes read the
    // exercise wrong, and no merge order can decide which — so nothing is
    // written and the merge fails until the exercise is re-read. A verdict
    // that differs from the ledger's EXISTING entry is a different thing:
    // that is how a re-read updates a verdict (unverifiable → ok after a
    // --context pass), so it merges, visibly.
    const batch = new Map();
    let conflicted = 0;
    for (const file of readdirSync(dir).filter((f) => f.endsWith('.json')).sort()) {
      const parsed = JSON.parse(readFileSync(join(dir, file), 'utf8'));
      for (const record of parsed.results ?? []) {
        if (!record.hash || !record.verdict) continue;
        const prior = batch.get(record.hash);
        if (prior && prior.verdict !== record.verdict) {
          conflicted += 1;
          console.error(`  conflict ${record.hash}: ${prior.verdict} (${prior.file}) vs ${record.verdict} (${file})`);
          continue; // keep reading so every conflict is reported in one run
        }
        batch.set(record.hash, { verdict: record.verdict, note: record.note, file });
      }
    }
    if (conflicted) {
      console.error(`✖ ${conflicted} conflict(s) between result files — nothing merged; re-read those exercises and rerun`);
      process.exit(1);
    }
    let updated = 0;
    for (const [hash, record] of batch) {
      const existing = ledger.entries[hash];
      if (existing && existing.verdict !== record.verdict) {
        updated += 1;
        console.log(`  updated ${hash}: ${existing.verdict} → ${record.verdict}`);
      }
      ledger.entries[hash] = record.note
        ? { verdict: record.verdict, note: record.note }
        : { verdict: record.verdict };
    }
    writeLedger(ledger);
    console.log(`merged ${batch.size} record(s) into ${LEDGER_PATH}; ${Object.keys(ledger.entries).length} total${updated ? `; ${updated} verdict(s) updated` : ''}`);
    return;
  }

  const root = positional[0] || 'content';
  const exercises = extractExercises(resolve(root));

  if (mode === 'prune') {
    // Editing an exercise strands the verdict recorded against its old text.
    // That is harmless to the gate (a stranded hash matches nothing) but it
    // accumulates, and a ledger full of records for content that no longer
    // exists is the kind of true-but-not-load-bearing artifact that makes a
    // later reader trust the wrong number. Dropping them is explicit, never a
    // silent side effect of `merge`.
    const ledger = readLedger();
    const live = new Set(exercises.map((e) => e.hash));
    const stale = Object.keys(ledger.entries).filter((h) => !live.has(h));
    for (const hash of stale) delete ledger.entries[hash];
    writeLedger(ledger);
    console.log(`pruned ${stale.length} stranded record(s); ${Object.keys(ledger.entries).length} remain`);
    return;
  }

  if (mode === 'list') {
    const kind = flag('kind');
    const shard = flag('shard');
    let subset = kind ? exercises.filter((e) => e.kind === kind) : exercises;
    const unverifiedOnly = args.includes('--unverified');
    // `--verdict unverifiable` is the follow-up queue: the items a reader saw
    // but could not settle from the shortcode alone. Pair it with `--context N`
    // so the figure or table they name travels with them.
    const verdict = flag('verdict');
    if (unverifiedOnly || verdict) {
      const ledger = readLedger();
      subset = subset.filter((e) => (unverifiedOnly
        ? !ledger.entries[e.hash]
        : ledger.entries[e.hash]?.verdict === verdict));
    }
    // Deduplicate by hash BEFORE sharding: an exercise repeated across books
    // is one question, and splitting its copies across two shards would pay to
    // verify it twice while making the shard sizes lie.
    const seen = new Set();
    let unique = subset.filter((e) => (seen.has(e.hash) ? false : seen.add(e.hash)));
    if (shard) {
      const [i, n] = shard.split('/').map(Number);
      if (!Number.isInteger(i) || !Number.isInteger(n) || i < 1 || i > n) usage(2);
      const size = Math.ceil(unique.length / n);
      unique = unique.slice((i - 1) * size, i * size);
    }
    // A "read the graph above" exercise cannot be verified from the shortcode
    // alone — the figure it names is elsewhere on the page. `--context N`
    // attaches the N lines of page text before the shortcode so a follow-up
    // pass can see the inline SVG, table, or worked example it depends on.
    const contextLines = flag('context') === null ? 0 : Number(flag('context'));
    const pageCache = new Map();
    const contextFor = (e) => {
      if (!contextLines) return undefined;
      if (!pageCache.has(e.path)) pageCache.set(e.path, readFileSync(e.path, 'utf8').split('\n'));
      const lines = pageCache.get(e.path);
      return lines.slice(Math.max(0, e.line - 1 - contextLines), e.line - 1).join('\n');
    };
    process.stdout.write(`${JSON.stringify(unique.map((e) => ({
      hash: e.hash, kind: e.kind, path: e.path, line: e.line, params: e.params, inner: e.inner.trim(),
      ...(contextLines ? { pageContext: contextFor(e) } : {}),
    })), null, 1)}\n`);
    return;
  }

  const ledger = readLedger();
  const unique = new Map();
  for (const e of exercises) if (!unique.has(e.hash)) unique.set(e.hash, e);
  const missing = [...unique.values()].filter((e) => !ledger.entries[e.hash]);
  const defects = [...unique.values()].filter((e) => ledger.entries[e.hash]?.verdict === 'defect');

  if (mode === 'stats') {
    const byKind = {};
    for (const e of unique.values()) {
      byKind[e.kind] ??= { total: 0, verified: 0 };
      byKind[e.kind].total += 1;
      if (ledger.entries[e.hash]) byKind[e.kind].verified += 1;
    }
    console.log(`${exercises.length} exercise instance(s), ${unique.size} unique`);
    for (const [kind, s] of Object.entries(byKind)) {
      console.log(`  ${kind.padEnd(15)} ${String(s.verified).padStart(5)}/${String(s.total).padEnd(5)} verified`);
    }
    console.log(`  ledger entries: ${Object.keys(ledger.entries).length}`);
    return;
  }

  // check
  const min = Number(flag('min-exercises') ?? 0);
  const maxUnverifiable = flag('max-unverifiable') === null ? Infinity : Number(flag('max-unverifiable'));
  const unverifiable = [...unique.values()].filter((e) => ledger.entries[e.hash]?.verdict === 'unverifiable');
  const problems = [];
  if (unique.size < min) {
    problems.push(`found ${unique.size} unique exercises, below the --min-exercises floor of ${min} — extraction may have stopped reading the corpus`);
  }
  // "Read it and could not tell" is an honest verdict, but it is also the
  // cheapest one to reach for. A ceiling keeps it from quietly becoming the
  // whole corpus, which would leave the gate passing while proving nothing.
  if (unverifiable.length > maxUnverifiable) {
    problems.push(`${unverifiable.length} exercise(s) recorded 'unverifiable', over the --max-unverifiable ceiling of ${maxUnverifiable}`);
  }
  if (missing.length) {
    const sample = missing.slice(0, 5).map((e) => `${e.path}:${e.line} (${e.kind}, ${e.hash})`);
    problems.push(`${missing.length} exercise(s) have no current verification record:\n    ${sample.join('\n    ')}${missing.length > 5 ? `\n    …and ${missing.length - 5} more` : ''}`);
  }
  if (defects.length) {
    const sample = defects.slice(0, 5).map((e) => `${e.path}:${e.line} — ${ledger.entries[e.hash].note ?? 'recorded defect'}`);
    problems.push(`${defects.length} exercise(s) are recorded as DEFECTIVE and still shipped:\n    ${sample.join('\n    ')}`);
  }
  if (problems.length) {
    console.error(`✖ answer ledger: ${problems.join('\n  ')}`);
    process.exit(1);
  }
  const confirmed = unique.size - unverifiable.length;
  console.log(`✓ answer ledger: ${unique.size} unique exercises, every one carries a verification record (${confirmed} independently re-derived, ${unverifiable.length} unverifiable from the exercise text alone)`);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
