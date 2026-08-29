/**
 * The answer-verification ledger: a durable record that a HUMAN-EQUIVALENT
 * reading of each exercise re-derived its answer and agreed with it.
 *
 *   node tools/verify/answer-ledger.mjs check content [--min-exercises N]
 *   node tools/verify/answer-ledger.mjs list  content [--kind fillin] [--shard i/n]
 *   node tools/verify/answer-ledger.mjs merge <resultsDir>
 *   node tools/verify/answer-ledger.mjs stats content
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
import { readFileSync } from 'node:fs';
import { relative, resolve } from 'node:path';
import { walkMarkdown, shortcodes, blankPreservingOffsets } from '../lib/content.mjs';
import {
  mergeResults, parseLedgerArgs, pruneLedger, readLedger as readLedgerAt, shardSlice,
} from '../lib/ledger.mjs';

export const LEDGER_PATH = 'data/verification/answer-ledger.json';

/**
 * The shortcodes that carry a gradeable answer, plus the two non-graded
 * interactive forms whose content still deserves a durable human-equivalent
 * read: `textin` (a normalized-text key, checked in check-text.mjs, not the
 * math grader) and `selfcheck` (no key at all — its model answer, the paired
 * inner content, is the thing to verify, so its hash below has to include
 * that inner content or an edited model answer would keep its old verdict).
 */
export const EXERCISE_KINDS = Object.freeze(['fillin', 'multiplechoice', 'graphplot', 'textin', 'selfcheck']);

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
  return readLedgerAt(path);
}

function usage(detail) {
  console.error(`answer-ledger: ${detail}`);
  console.error('usage: node tools/verify/answer-ledger.mjs <check|list|merge|prune|stats> [root|resultsDir] [--kind k] [--verdict v] [--unverified] [--shard i/n] [--context N] [--min-exercises N] [--max-unverifiable N] [--ledger path]');
  process.exit(2);
}

function main() {
  let cli;
  try {
    cli = parseLedgerArgs(process.argv.slice(2), {
      commands: ['check', 'list', 'merge', 'prune', 'stats'],
      valueFlags: ['kind', 'verdict', 'shard', 'context', 'min-exercises', 'max-unverifiable'],
      boolFlags: ['unverified'],
    });
  } catch (error) {
    usage(error.message);
    return;
  }
  const { command, positional, flag, bool } = cli;
  const ledgerPath = flag('ledger') ?? LEDGER_PATH;

  if (command === 'merge') {
    const dir = positional[0];
    if (!dir) usage('merge needs a results directory');
    mergeResults({
      dir,
      path: ledgerPath,
      // A record missing its hash or verdict used to be skipped in silence,
      // which drops a reading pass's verdict without saying so. It is now the
      // same refusal the conversion ledger already gave — one merge contract,
      // in one place, for both queues.
      validate: (record) => (!record.hash ? 'missing hash'
        : !record.verdict ? 'missing verdict' : null),
      decisionOf: (record) => record.verdict,
      toRecord: (record) => (record.note
        ? { verdict: record.verdict, note: record.note }
        : { verdict: record.verdict }),
    });
    return;
  }

  const root = positional[0] || 'content';
  const exercises = extractExercises(resolve(root));

  if (command === 'prune') {
    pruneLedger({ path: ledgerPath, live: new Set(exercises.map((e) => e.hash)) });
    return;
  }

  if (command === 'list') {
    const kind = flag('kind');
    let subset = kind ? exercises.filter((e) => e.kind === kind) : exercises;
    const unverifiedOnly = bool('unverified');
    // `--verdict unverifiable` is the follow-up queue: the items a reader saw
    // but could not settle from the shortcode alone. Pair it with `--context N`
    // so the figure or table they name travels with them.
    const verdict = flag('verdict');
    if (unverifiedOnly || verdict) {
      const ledger = readLedgerAt(ledgerPath);
      subset = subset.filter((e) => (unverifiedOnly
        ? !ledger.entries[e.hash]
        : ledger.entries[e.hash]?.verdict === verdict));
    }
    // Deduplicate by hash BEFORE sharding: an exercise repeated across books
    // is one question, and splitting its copies across two shards would pay to
    // verify it twice while making the shard sizes lie.
    const seen = new Set();
    let unique = subset.filter((e) => (seen.has(e.hash) ? false : seen.add(e.hash)));
    const shard = flag('shard');
    if (shard) {
      try {
        unique = shardSlice(unique, shard);
      } catch (error) {
        usage(error.message);
      }
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

  const ledger = readLedgerAt(ledgerPath);
  const unique = new Map();
  for (const e of exercises) if (!unique.has(e.hash)) unique.set(e.hash, e);
  const missing = [...unique.values()].filter((e) => !ledger.entries[e.hash]);
  const defects = [...unique.values()].filter((e) => ledger.entries[e.hash]?.verdict === 'defect');

  if (command === 'stats') {
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
