/**
 * The graphplot-conversion ledger: a durable, adjudicated queue of the
 * multiplechoice and fillin exercises that COULD be authored as interactive
 * `graphplot` exercises instead, so a future session can convert them without
 * re-reading the corpus first.
 *
 *   node tools/graphplot-conversion.mjs init                  create the queue
 *   node tools/graphplot-conversion.mjs candidates content   the unread queue
 *   node tools/graphplot-conversion.mjs list content [--verdict convert]
 *   node tools/graphplot-conversion.mjs merge <resultsDir>
 *   node tools/graphplot-conversion.mjs stats content
 *   node tools/graphplot-conversion.mjs prune content
 *
 * `--ledger <path>` points every command at a different ledger file, which is
 * how the tests exercise `merge` without writing the repo's own.
 *
 * WHY THIS EXISTS. The GraphPlot engine grades lines, systems, parabolas,
 * point sets, and asymptote sets — but most graph-topic exercises predate
 * those forms and were authored as multiple choice (four rendered graphs) or
 * fillin. Whether one converts is a READING judgment: the prompt must ask for
 * a drawable object, the answer must be reachable on a snap lattice, and the
 * graphical form must not lose what the exercise actually tests (a
 * dashed-vs-solid boundary judgment, a domain in interval notation). A regex
 * cannot make that call, so — exactly like the answer ledger this file
 * mirrors — a mechanical scan builds the queue and a reading pass records the
 * verdicts durably.
 *
 * Identity is the answer ledger's exercise hash, so editing any semantic
 * character of an exercise drops its adjudication (re-read it), reflowing
 * keeps it, and CONVERTING an exercise strands its entry — `prune` retires
 * those, which is how the queue burns down to zero.
 *
 * Verdicts:
 *   'convert'  it should become a graphplot; `mode` names the answer form
 *              (line | system | quadratic | points | asymptotes) and
 *              `proposal` sketches the answer/grid so the converting session
 *              starts from a concrete plan, not a blank page. The proposal is
 *              a HYPOTHESIS: the converter still derives the answer
 *              independently and records it in the answer ledger.
 *   'keep'     read, and staying MC/fillin on purpose; `note` says why, so
 *              the next sweep does not re-litigate it.
 */
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { extractExercises } from './answer-ledger.mjs';
import {
  mergeResults, parseLedgerArgs, pruneLedger, readLedger, shardSlice, writeLedger,
} from './lib-ledger.mjs';

export const CONVERSION_LEDGER_PATH = 'data/verification/graphplot-conversion-ledger.json';

export const CONVERT_MODES = Object.freeze(['line', 'system', 'quadratic', 'points', 'asymptotes']);

/**
 * The mechanical half of the queue: is this exercise about producing or
 * recognizing a graph at all? Three deliberately conservative signals — a
 * multiple choice whose options are rendered graphs, a prompt that asks to
 * graph/sketch/plot, or a prompt about asymptotes (the newest answer form).
 * Widening this list is cheap and safe: anything it admits still goes through
 * the reading pass before the ledger says 'convert'.
 */
export function isGraphTopic(exercise) {
  if (exercise.kind === 'graphplot') return false;
  const question = exercise.params.question || '';
  if (exercise.kind === 'multiplechoice' && /apfigure|<svg/i.test(exercise.raw)) return true;
  if (/\b(graphs?|graphed|graphing|sketch|plot)\b/i.test(question)) return true;
  return /asymptote/i.test(question);
}

/** Unique graph-topic MC/fillin exercises under `root`, stable order. */
export function graphTopicExercises(root) {
  const seen = new Set();
  return extractExercises(root)
    .filter((e) => (seen.has(e.hash) ? false : seen.add(e.hash)))
    .filter(isGraphTopic);
}

export function readConversionLedger(path = CONVERSION_LEDGER_PATH) {
  return readLedger(path);
}

/** Validate one adjudication record; returns an error string or null. */
export function recordProblem(record) {
  if (!record.hash) return 'missing hash';
  if (!['convert', 'keep'].includes(record.verdict)) return `unknown verdict '${record.verdict}'`;
  if (record.verdict === 'convert') {
    if (!CONVERT_MODES.includes(record.mode)) return `convert needs a mode from: ${CONVERT_MODES.join(', ')}`;
    if (!record.proposal) return 'convert needs a proposal sketching answer and grid';
  }
  if (!record.note) return 'every verdict needs a note';
  return null;
}

function usage(detail) {
  console.error(`graphplot-conversion: ${detail}`);
  console.error('usage: node tools/graphplot-conversion.mjs <init|candidates|list|merge|prune|stats> [root|resultsDir] [--verdict v] [--shard i/n] [--ledger path]');
  process.exit(2);
}

// The decision two reading passes must AGREE on. `note` and `proposal` are
// free prose (the proposal is explicitly a hypothesis the converter
// re-derives), so differing wording is not a conflict; first file wins. The
// mode is part of it because two passes that both say 'convert' but disagree
// on `line` vs `quadratic` have read the exercise differently, and comparing
// only the verdict let the alphabetically-later result file pick the answer
// form in silence.
const decisionOf = (record) => `${record.verdict}${record.mode ? `/${record.mode}` : ''}`;

function main() {
  let cli;
  try {
    cli = parseLedgerArgs(process.argv.slice(2), {
      commands: ['init', 'candidates', 'list', 'merge', 'prune', 'stats'],
      valueFlags: ['verdict', 'shard'],
    });
  } catch (error) {
    usage(error.message);
    return;
  }
  const { command, positional, flag } = cli;
  const ledgerPath = flag('ledger') ?? CONVERSION_LEDGER_PATH;

  if (command === 'init') {
    // Creating the queue is a deliberate act, so that every OTHER command can
    // treat a missing ledger as loss rather than as a fresh start.
    if (existsSync(ledgerPath)) {
      console.error(`✖ ${ledgerPath} already exists — init would discard ${Object.keys(readLedger(ledgerPath).entries).length} adjudication(s)`);
      process.exit(1);
    }
    writeLedger({ schemaVersion: 1, entries: {} }, ledgerPath);
    console.log(`created ${ledgerPath}; every graph-topic exercise is unread until a pass merges verdicts`);
    return;
  }

  if (command === 'merge') {
    const dir = positional[0];
    if (!dir) usage('merge needs a results directory');
    mergeResults({
      dir,
      path: ledgerPath,
      validate: recordProblem,
      decisionOf,
      toRecord: (record) => ({
        verdict: record.verdict,
        ...(record.mode ? { mode: record.mode } : {}),
        ...(record.proposal ? { proposal: record.proposal } : {}),
        note: record.note,
      }),
    });
    return;
  }

  const root = positional[0] || 'content';
  const exercises = graphTopicExercises(resolve(root));
  // Required, not defaulted: see readLedger. An absent conversion ledger is
  // the reading pass's verdicts lost, and this queue has already been lost
  // once by being reported as empty.
  let ledger;
  try {
    ledger = readLedger(ledgerPath, { required: true });
  } catch (error) {
    console.error(`✖ graphplot-conversion: ${error.message}`);
    process.exit(1);
  }

  if (command === 'prune') {
    // A converted exercise's MC/fillin source is gone, so its hash matches
    // nothing — pruning is how conversions burn the queue down.
    pruneLedger({ path: ledgerPath, live: new Set(exercises.map((e) => e.hash)) });
    return;
  }

  if (command === 'stats') {
    const live = new Set(exercises.map((e) => e.hash));
    const entries = Object.entries(ledger.entries);
    const liveEntries = entries.filter(([hash]) => live.has(hash));
    const byMode = {};
    for (const [, entry] of liveEntries) {
      if (entry.verdict !== 'convert') continue;
      byMode[entry.mode] = (byMode[entry.mode] ?? 0) + 1;
    }
    console.log(`${exercises.length} graph-topic mc/fillin exercise(s); ${liveEntries.length} adjudicated, ${exercises.length - liveEntries.length} unread`);
    console.log(`  convert: ${liveEntries.filter(([, e]) => e.verdict === 'convert').length}`);
    for (const [answerMode, count] of Object.entries(byMode).sort()) {
      console.log(`    ${answerMode.padEnd(12)} ${count}`);
    }
    console.log(`  keep:    ${liveEntries.filter(([, e]) => e.verdict === 'keep').length}`);
    if (entries.length > liveEntries.length) {
      console.log(`  stranded: ${entries.length - liveEntries.length} (run prune)`);
    }
    return;
  }

  // candidates / list — both emit the same JSON shape ledger:list uses, so
  // the same reading/conversion briefs work on either.
  let subset;
  if (command === 'candidates') {
    subset = exercises.filter((e) => !ledger.entries[e.hash]);
    const shard = flag('shard');
    if (shard) {
      try {
        subset = shardSlice(subset, shard);
      } catch (error) {
        usage(error.message);
      }
    }
  } else {
    const verdict = flag('verdict');
    subset = exercises.filter((e) => (verdict
      ? ledger.entries[e.hash]?.verdict === verdict
      : Boolean(ledger.entries[e.hash])));
  }
  process.stdout.write(`${JSON.stringify(subset.map((e) => ({
    hash: e.hash, kind: e.kind, path: e.path, line: e.line, params: e.params, inner: e.inner.trim(),
    ...(command === 'list' && ledger.entries[e.hash] ? { adjudication: ledger.entries[e.hash] } : {}),
  })), null, 1)}\n`);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
