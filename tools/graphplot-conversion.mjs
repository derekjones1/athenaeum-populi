/**
 * The graphplot-conversion ledger: a durable, adjudicated queue of the
 * multiplechoice and fillin exercises that COULD be authored as interactive
 * `graphplot` exercises instead, so a future session can convert them without
 * re-reading the corpus first.
 *
 *   node tools/graphplot-conversion.mjs candidates content   the unread queue
 *   node tools/graphplot-conversion.mjs list content [--verdict convert]
 *   node tools/graphplot-conversion.mjs merge <resultsDir>
 *   node tools/graphplot-conversion.mjs stats content
 *   node tools/graphplot-conversion.mjs prune content
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
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { extractExercises } from './answer-ledger.mjs';

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
  if (!existsSync(path)) return { schemaVersion: 1, entries: {} };
  return JSON.parse(readFileSync(path, 'utf8'));
}

function writeConversionLedger(ledger, path = CONVERSION_LEDGER_PATH) {
  const ordered = Object.fromEntries(Object.entries(ledger.entries).sort(([a], [b]) => (a < b ? -1 : 1)));
  writeFileSync(path, `${JSON.stringify({ ...ledger, entries: ordered }, null, 1)}\n`);
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

function usage(code) {
  console.error('usage: node tools/graphplot-conversion.mjs <candidates|list|merge|prune|stats> [root|resultsDir] [flags]');
  process.exit(code);
}

function main() {
  const args = process.argv.slice(2);
  const mode = args[0];
  if (!mode || !['candidates', 'list', 'merge', 'prune', 'stats'].includes(mode)) usage(2);
  const positional = args.slice(1).filter((a) => !a.startsWith('--'));
  const flag = (name) => {
    const hit = args.find((a) => a === `--${name}` || a.startsWith(`--${name}=`));
    if (!hit) return null;
    return hit.includes('=') ? hit.split('=').slice(1).join('=') : args[args.indexOf(hit) + 1];
  };

  if (mode === 'merge') {
    const dir = positional[0];
    if (!dir) usage(2);
    const ledger = readConversionLedger();
    // Same contract as the answer ledger's merge: fold the whole batch first,
    // refuse it entirely on a conflicting DECISION for one hash (one of those
    // passes read the exercise wrong — re-read it, never let file order pick),
    // and let a batch decision that differs from the LEDGER's update it
    // visibly (that is the legitimate re-adjudication flow).
    //
    // The decision is the verdict AND the mode: two passes that both say
    // 'convert' but disagree on `line` vs `quadratic` have read the exercise
    // differently, and comparing only the verdict let the alphabetically-later
    // result file pick the answer form silently — exactly the file-order
    // resolution this refusal exists to prevent. `note` and `proposal` are
    // free prose (the proposal is explicitly a hypothesis the converter
    // re-derives), so differing wording is not a conflict; first file wins.
    const batch = new Map();
    let bad = 0;
    const decisionOf = (r) => `${r.verdict}${r.mode ? `/${r.mode}` : ''}`;
    for (const file of readdirSync(dir).filter((f) => f.endsWith('.json')).sort()) {
      const parsed = JSON.parse(readFileSync(join(dir, file), 'utf8'));
      for (const record of parsed.results ?? []) {
        const problem = recordProblem(record);
        if (problem) {
          bad += 1;
          console.error(`  invalid record in ${file}: ${problem} (${record.hash ?? 'no hash'})`);
          continue;
        }
        const prior = batch.get(record.hash);
        if (prior && decisionOf(prior) !== decisionOf(record)) {
          bad += 1;
          console.error(`  conflict ${record.hash}: ${decisionOf(prior)} (${prior.file}) vs ${decisionOf(record)} (${file})`);
          continue;
        }
        batch.set(record.hash, {
          verdict: record.verdict,
          ...(record.mode ? { mode: record.mode } : {}),
          ...(record.proposal ? { proposal: record.proposal } : {}),
          note: record.note,
          file,
        });
      }
    }
    if (bad) {
      console.error(`✖ ${bad} invalid/conflicting record(s) — nothing merged; fix the result files and rerun`);
      process.exit(1);
    }
    let updated = 0;
    for (const [hash, { file, ...record }] of batch) {
      const existing = ledger.entries[hash];
      if (existing && decisionOf(existing) !== decisionOf(record)) {
        updated += 1;
        console.log(`  updated ${hash}: ${decisionOf(existing)} → ${decisionOf(record)}`);
      }
      ledger.entries[hash] = record;
    }
    writeConversionLedger(ledger);
    console.log(`merged ${batch.size} record(s) into ${CONVERSION_LEDGER_PATH}; ${Object.keys(ledger.entries).length} total${updated ? `; ${updated} verdict(s) updated` : ''}`);
    return;
  }

  const root = positional[0] || 'content';
  const exercises = graphTopicExercises(resolve(root));
  const ledger = readConversionLedger();

  if (mode === 'prune') {
    // A converted exercise's MC/fillin source is gone, so its hash matches
    // nothing — pruning is how conversions burn the queue down. Stale entries
    // from ordinary edits are also dropped; the next `candidates` run
    // resurfaces the edited exercise for re-adjudication.
    const live = new Set(exercises.map((e) => e.hash));
    const stale = Object.keys(ledger.entries).filter((h) => !live.has(h));
    for (const hash of stale) delete ledger.entries[hash];
    writeConversionLedger(ledger);
    console.log(`pruned ${stale.length} stranded record(s); ${Object.keys(ledger.entries).length} remain`);
    return;
  }

  if (mode === 'stats') {
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
  if (mode === 'candidates') {
    const shard = flag('shard');
    subset = exercises.filter((e) => !ledger.entries[e.hash]);
    if (shard) {
      const [i, n] = shard.split('/').map(Number);
      if (!Number.isInteger(i) || !Number.isInteger(n) || i < 1 || i > n) usage(2);
      const size = Math.ceil(subset.length / n);
      subset = subset.slice((i - 1) * size, i * size);
    }
  } else {
    const verdict = flag('verdict');
    subset = exercises.filter((e) => (verdict
      ? ledger.entries[e.hash]?.verdict === verdict
      : Boolean(ledger.entries[e.hash])));
  }
  process.stdout.write(`${JSON.stringify(subset.map((e) => ({
    hash: e.hash, kind: e.kind, path: e.path, line: e.line, params: e.params, inner: e.inner.trim(),
    ...(mode === 'list' && ledger.entries[e.hash] ? { adjudication: ledger.entries[e.hash] } : {}),
  })), null, 1)}\n`);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
