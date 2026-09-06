/**
 * The orchestrator's own pass over a prose book's graded questions.
 *
 * A math fill-in's third reading is arithmetic (`verify-answers`). A prose
 * item has no equation, and `verify-source-keys` can only show that the page
 * keys what the SOURCE keys — it passed all four of the source's own wrong
 * keys in Biology unit 2. The reading that catches those is someone answering
 * the question. This tool makes that reading a recorded, required step:
 *
 *   emit     writes every solved-kind exercise (multiplechoice, textin,
 *            sortbins, fillin) under a root as a packet
 *            with the key, accept list, and hint STRIPPED — question and
 *            options only, plus the exercise hash — for the orchestrator to
 *            answer in writing before any key is looked at.
 *            `--residual-fillins` narrows a math root to the fill-ins
 *            neither mechanical reading could confirm: `verify-answers`
 *            could not parse the ask and `verify-source-keys` matched no
 *            printed source solution (or the item is on a page with no
 *            source module — a knowledge check) — and whose ledger record
 *            carries neither a derivation note nor a solve. That residual is
 *            the population a written solve is FOR; the rest already has a
 *            durable third reading.
 *   compare  grades those written answers against the live keys (an option
 *            match for multiplechoice; the real `check-text` grader for
 *            textin, so a right answer the accept list rejects surfaces as
 *            an accept-list gap; the real math grader for fillin, with the
 *            exercise's own answerMode and answerForm, so a solver's
 *            equivalent form counts and a value the form rule rejects still
 *            counts as agreeing on the value), prints every disagreement and every option
 *            the solver called "also defensible", and writes a ledger result
 *            file recording the outcome on each exercise
 *
 * The source is the authority. A disagreement is not a page defect; it is an
 * item the orchestrator must settle against the pinned CNXML and record as
 * `adjudicated` with the sentence that settles it — either by correcting the
 * key (an erratum, a DISCLOSED_DEVIATIONS line) or by recording why the key
 * stands. `compare` refuses to write a result for a disagreement that has no
 * adjudication, so the ledger can never say "solved" about an item nobody
 * resolved.
 *
 * The result lives on the answer-ledger record as
 *   solved: { by, result: 'agrees' | 'adjudicated', note? }
 * and `answer-ledger check --require-solved <prefix>` refuses a
 * multiplechoice or textin under that prefix without one, so a new prose
 * section cannot go green until the orchestrator has answered its questions.
 *
 * Answers file shape (what the orchestrator writes):
 *   { "by": "orchestrator", "answers": [
 *       { "hash": "…", "answer": "photosystem I",
 *         "alsoDefensible": "…optional other option…",
 *         "adjudicated": "…required when the answer disagrees with the key…" } ] }
 *
 *   residual lists every fill-in under a root that still lacks a third
 *            reading (the `--residual-fillins` population) and exits
 *            non-zero when there is one — the gate that keeps a new math
 *            fill-in from shipping on the author's arithmetic alone. It
 *            needs the pinned CNXML: with a bundle absent (CI, a fresh
 *            clone) it says so and applies no rule, exactly as
 *            verify-source-keys does.
 *
 * Usage:
 *   node tools/verify/solve-check.mjs emit <content-root-or-page> [--out packets-dir] [--residual-fillins] [--context N] [--only hashes.json]
 *   node tools/verify/solve-check.mjs compare <answers.json> [content-root] [--out results-dir]
 *   node tools/verify/solve-check.mjs residual <content-root>
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import { extractExercises, readLedger } from './answer-ledger.mjs';
import { maskCode } from '../lib/content.mjs';
import { checkText } from '../../assets/js/lib/text/check-text.mjs';
import { normalizeText } from '../lib/openstax-source.mjs';
import { checkSortbins, parseSortbinsConfig } from '../../assets/js/lib/text/check-sortbins.mjs';
import { checkAnswer } from '../../assets/js/lib/math/check-answer.mjs';
import { analyzeFillin } from './verify-answers.mjs';

export const SOLVED_KINDS = Object.freeze(['multiplechoice', 'textin', 'sortbins', 'fillin']);

const compact = (value) => normalizeText(value).replace(/\s+/g, '');

/** One packet item: what the solver sees. Keys, accepts, and hints never
 * enter the packet. */
export function packetItem(exercise) {
  const item = {
    hash: exercise.hash,
    kind: exercise.kind,
    path: exercise.path,
    line: exercise.line,
    question: exercise.params.question || '',
  };
  if (exercise.kind === 'multiplechoice') {
    item.options = exercise.inner.split('\n').map((line) => line.trim()).filter(Boolean);
  }
  if (exercise.kind === 'sortbins') {
    // The solver sees the bins and the item labels — never the assignments,
    // which ARE the key. The config is lint-guaranteed parseable, so a throw
    // here names a real corpus defect.
    const cfg = parseSortbinsConfig(exercise.inner.trim());
    item.bins = cfg.bins;
    item.items = cfg.items.map((entry) => entry.label);
  }
  if (exercise.kind === 'fillin') {
    // The answer's SHAPE is not the key: an unordered list, a required form
    // ("fraction", "solved:x") tell the solver how to write what they find.
    if (exercise.params.answerMode) item.answerMode = exercise.params.answerMode;
    if (exercise.params.answerForm) item.answerForm = exercise.params.answerForm;
  }
  return item;
}

/**
 * The fill-ins a written solve is for: out of `verify-answers`' reach, not
 * confirmed by `verify-source-keys` (`sourceStatus` maps `path:line` to that
 * gate's fillin verdict; a page absent from the map has no module to
 * confirm against), and recorded in the ledger with neither a derivation
 * note nor a solve. Everything else already carries a durable third reading.
 */
export function isResidualFillin(exercise, { sourceStatus, ledger }) {
  if (exercise.kind !== 'fillin') return false;
  if (analyzeFillin(exercise.params).status !== 'skip') return false;
  const status = sourceStatus.get(`${exercise.path}:${exercise.line}`);
  if (status === 'confirmed' || status === 'disclosed') return false;
  const record = ledger?.entries?.[exercise.hash];
  if (record && (record.note || record.solved)) return false;
  return true;
}

/**
 * Page text above an exercise with every key masked, for a question that
 * reads "the table above" or "that same line": the `answer`, `accept`,
 * `hint`, and `answerDisplay` params of every shortcode in the window are
 * blanked, a `selfcheck`'s model answer is dropped, and code fences are
 * masked. What is left is the page's prose, figures, tables, and earlier
 * QUESTIONS — never an answer.
 */
export function maskedContext(pageSource, line, lines) {
  const window = maskCode(pageSource).split('\n').slice(Math.max(0, line - 1 - lines), line - 1).join('\n');
  return window
    .replace(/\{\{<\s*selfcheck\b[\s\S]*?\{\{<\s*\/selfcheck\s*>\}\}/g, '{{< selfcheck (model answer removed) >}}')
    .replace(/\b(answer|accept|hint|answerDisplay)="(?:[^"\\]|\\.)*"/g, '$1="…"');
}

export function emitPackets(root, { residualFillins = null, context = 0, only = null } = {}) {
  const byPage = new Map();
  const seen = new Set();
  const pages = new Map();
  for (const exercise of extractExercises(root)) {
    if (!SOLVED_KINDS.includes(exercise.kind)) continue;
    if (residualFillins && !isResidualFillin(exercise, residualFillins)) continue;
    if (only && !only.has(exercise.hash)) continue;
    if (seen.has(exercise.hash)) continue;
    seen.add(exercise.hash);
    if (!byPage.has(exercise.path)) byPage.set(exercise.path, []);
    const item = packetItem(exercise);
    if (context > 0) {
      if (!pages.has(exercise.path)) pages.set(exercise.path, readFileSync(exercise.path, 'utf8'));
      item.pageContext = maskedContext(pages.get(exercise.path), exercise.line, context);
    }
    byPage.get(exercise.path).push(item);
  }
  return byPage;
}

/**
 * Grade one written answer against the live exercise. Returns
 *   { status: 'agrees' | 'disagrees' | 'unrecognized', detail }
 * — 'unrecognized' is a multiplechoice answer that names no option, which is
 * a solver slip to fix, not a finding about the key.
 */
export function gradeAnswer(exercise, written) {
  if (exercise.kind === 'multiplechoice') {
    const options = exercise.inner.split('\n').map((line) => line.trim()).filter(Boolean);
    const chosen = options.find((option) => compact(option) === compact(written));
    if (!chosen) return { status: 'unrecognized', detail: `"${written}" is not one of the options` };
    if (compact(chosen) === compact(exercise.params.answer || '')) return { status: 'agrees', detail: chosen };
    return { status: 'disagrees', detail: `solver: "${chosen}"; key: "${exercise.params.answer}"` };
  }
  if (exercise.kind === 'sortbins') {
    let cfg;
    try { cfg = parseSortbinsConfig(exercise.inner.trim()); }
    catch (error) { return { status: 'unrecognized', detail: `config unreadable: ${error.message}` }; }
    if (typeof written !== 'object' || written === null || Array.isArray(written)) {
      return { status: 'unrecognized', detail: 'a sortbins answer is an object mapping each item label to a bin label' };
    }
    const placements = [];
    const wrong = [];
    for (const [index, entry] of cfg.items.entries()) {
      const answeredKey = Object.keys(written).find((key) => compact(key) === compact(entry.label));
      if (answeredKey === undefined) return { status: 'unrecognized', detail: `no answer for item "${entry.label}"` };
      const bin = cfg.bins.findIndex((label) => compact(label) === compact(written[answeredKey]));
      if (bin === -1) return { status: 'unrecognized', detail: `"${written[answeredKey]}" is not one of the bins` };
      placements[index] = bin;
      if (bin !== entry.bin) wrong.push(`"${entry.label}" → solver: "${cfg.bins[bin]}"; key: "${cfg.bins[entry.bin]}"`);
    }
    if (checkSortbins(placements, cfg).status === 'correct') {
      return { status: 'agrees', detail: `all ${cfg.items.length} assignments` };
    }
    return { status: 'disagrees', detail: wrong.join('; ') };
  }
  if (exercise.kind === 'fillin') {
    if (typeof written !== 'string' || !written.trim()) return { status: 'unrecognized', detail: 'a fillin answer is the LaTeX a learner would type' };
    let verdict;
    try {
      verdict = checkAnswer(written, exercise.params.answer || '', { mode: exercise.params.answerMode, form: exercise.params.answerForm });
    } catch (error) {
      return { status: 'unrecognized', detail: `grader threw on "${written}": ${error.message.slice(0, 80)}` };
    }
    if (verdict === 'invalid' || verdict === 'empty') return { status: 'unrecognized', detail: `"${written}" does not parse (${verdict})` };
    // 'form' is the right VALUE in a form the exercise does not accept — the
    // key is confirmed; the form rule is the page's, not the solver's.
    if (verdict === 'correct' || verdict === 'form') return { status: 'agrees', detail: `${written}${verdict === 'form' ? ' (form differs)' : ''}` };
    return { status: 'disagrees', detail: `solver: "${written}"; key: "${exercise.params.answer}" (${verdict})` };
  }
  const verdict = checkText(written, exercise.params.answer || '', { accept: exercise.params.accept || '' });
  if (verdict === 'correct') return { status: 'agrees', detail: written };
  return {
    status: 'disagrees',
    detail: `solver: "${written}"; key: "${exercise.params.answer}"${exercise.params.accept ? ` (accept: ${exercise.params.accept})` : ''}`,
  };
}

/**
 * Compare a whole answers file against the live corpus. Returns the report
 * and the ledger result records that may be written (every agreement, and
 * every disagreement or flag that carries an adjudication).
 */
export function compareAnswers(answersFile, root, ledger) {
  const exercises = new Map();
  for (const exercise of extractExercises(root)) {
    if (SOLVED_KINDS.includes(exercise.kind) && !exercises.has(exercise.hash)) exercises.set(exercise.hash, exercise);
  }
  const by = answersFile.by || 'orchestrator';
  const report = { agrees: [], disagrees: [], flagged: [], unrecognized: [], missing: [], unanswered: [] };
  const results = [];
  const answered = new Set();

  for (const entry of answersFile.answers || []) {
    const exercise = exercises.get(entry.hash);
    if (!exercise) { report.missing.push(entry.hash); continue; }
    answered.add(entry.hash);
    const where = `${exercise.path}:${exercise.line}`;
    const graded = gradeAnswer(exercise, entry.answer || '');
    const existing = ledger?.entries?.[exercise.hash];
    // An exercise with no record yet (a re-hashed item, or a new section)
    // gets one from the solve itself: the orchestrator answering the
    // question and agreeing with the key — or settling the disagreement
    // against the source — is an independent re-derivation.
    const base = existing
      ? { hash: exercise.hash, verdict: existing.verdict, ...(existing.note ? { note: existing.note } : {}) }
      : { hash: exercise.hash, verdict: 'ok', note: 'orchestrator solve (solve-check.mjs)' };
    const flagged = Boolean(entry.alsoDefensible);

    if (graded.status === 'unrecognized') {
      report.unrecognized.push(`${where}: ${graded.detail}`);
      continue;
    }
    if (graded.status === 'agrees' && !flagged) {
      report.agrees.push(where);
      results.push({ ...base, solved: { by, result: 'agrees' } });
      continue;
    }
    // A disagreement, or an agreement with another option called defensible:
    // both need the orchestrator's adjudication before anything is recorded.
    const kind = graded.status === 'disagrees' ? 'disagrees' : 'flagged';
    const line = `${where}: ${graded.detail}${flagged ? ` — also defensible: "${entry.alsoDefensible}"` : ''}`;
    if (entry.adjudicated) {
      report[kind].push(`${line}\n    adjudicated: ${entry.adjudicated}`);
      results.push({ ...base, solved: { by, result: 'adjudicated', note: entry.adjudicated } });
    } else {
      report[kind].push(`${line}\n    NOT ADJUDICATED — settle it against the pinned CNXML and add "adjudicated"`);
    }
  }
  for (const [hash, exercise] of exercises) {
    if (!answered.has(hash) && (exercise.path.startsWith(answersFile.scope || ' '))) {
      report.unanswered.push(`${exercise.path}:${exercise.line}`);
    }
  }
  const unresolved = [...report.disagrees, ...report.flagged].filter((line) => line.includes('NOT ADJUDICATED')).length;
  return { report, results, unresolved };
}

/** What `isResidualFillin` needs: every mapped page's fill-in verdict from
 * the source-key gate and the ledger. The gate needs the pinned CNXML on
 * disk; a bundle it cannot read leaves its pages' fill-ins unconfirmed,
 * which lands them in the residual — the safe side — and the skip lines
 * say so. */
export async function residualContext() {
  const { checkCorpus, skipLines } = await import('./verify-source-keys.mjs');
  const { loadSourceLock } = await import('../lib/openstax-source.mjs');
  const corpus = checkCorpus(process.cwd(), { contentRoot: 'content' });
  const skipped = skipLines(process.cwd(), loadSourceLock(process.cwd()), corpus.skipped);
  for (const line of skipped) console.error(line);
  const sourceStatus = new Map(corpus.verdicts.map((v) => [`${v.page}:${v.line}`, v.status]));
  return { context: { sourceStatus, ledger: readLedger() }, skipped: skipped.length > 0 };
}

/* ---- CLI ------------------------------------------------------------------ */

if (process.argv[1] && resolve(process.argv[1]) === new URL(import.meta.url).pathname) {
  const [command, ...rest] = process.argv.slice(2);
  const valued = new Set(['--out', '--context', '--only']);
  const positional = rest.filter((a, i) => !a.startsWith('--') && !valued.has(rest[i - 1]));
  const outIndex = rest.indexOf('--out');
  const out = outIndex === -1 ? null : rest[outIndex + 1];

  if (command === 'emit') {
    const root = positional[0];
    if (!root || !existsSync(root)) {
      console.error('usage: node tools/verify/solve-check.mjs emit <content-root-or-page> [--out packets-dir] [--residual-fillins] [--context N] [--only hashes.json]');
      process.exit(2);
    }
    let residualFillins = null;
    if (rest.includes('--residual-fillins')) {
      const { context: residual } = await residualContext();
      residualFillins = residual;
    }
    const contextIndex = rest.indexOf('--context');
    const context = contextIndex === -1 ? 0 : Number(rest[contextIndex + 1]) || 0;
    // `--only <file>`: a JSON array of hashes, or one hash per line — the
    // follow-up pass for the items a solver marked UNSEEN.
    const onlyIndex = rest.indexOf('--only');
    let only = null;
    if (onlyIndex !== -1) {
      const text = readFileSync(rest[onlyIndex + 1], 'utf8');
      only = new Set(text.trim().startsWith('[') ? JSON.parse(text) : text.split(/\s+/).filter(Boolean));
    }
    const packets = emitPackets(root, { residualFillins, context, only });
    let items = 0;
    for (const list of packets.values()) items += list.length;
    if (out) {
      mkdirSync(out, { recursive: true });
      for (const [page, list] of packets) {
        const name = `${basename(page, '.md')}-${list[0].hash.slice(0, 6)}.json`;
        writeFileSync(join(out, name), `${JSON.stringify({ page, items: list }, null, 1)}\n`);
      }
      console.log(`emitted ${items} item(s) across ${packets.size} page(s) into ${out}/ — keys, accepts, and hints stripped`);
    } else {
      process.stdout.write(`${JSON.stringify([...packets].map(([page, list]) => ({ page, items: list })), null, 1)}\n`);
    }
    process.exit(0);
  }

  if (command === 'compare') {
    const file = positional[0];
    const root = positional[1] || 'content';
    if (!file || !existsSync(file)) {
      console.error('usage: node tools/verify/solve-check.mjs compare <answers.json> [content-root] [--out results-dir]');
      process.exit(2);
    }
    const answersFile = JSON.parse(readFileSync(file, 'utf8'));
    const { report, results, unresolved } = compareAnswers(answersFile, root, readLedger());
    for (const line of report.unrecognized) console.error(`? ${line}`);
    for (const line of report.disagrees) console.log(`✗ ${line}`);
    for (const line of report.flagged) console.log(`⚑ ${line}`);
    for (const hash of report.missing) console.error(`? no live exercise carries hash ${hash} (edited since the packet was emitted?)`);
    for (const line of report.unanswered) console.error(`· unanswered: ${line}`);
    console.log(`solve-check: ${report.agrees.length} agree, ${report.disagrees.length} disagree, ${report.flagged.length} flagged, `
      + `${report.unrecognized.length} unrecognized, ${report.missing.length} missing, ${report.unanswered.length} unanswered; `
      + `${unresolved} unresolved`);
    if (out) {
      if (unresolved || report.unrecognized.length || report.missing.length) {
        console.error(`✖ not writing results: ${unresolved} unresolved disagreement(s)/flag(s), ${report.unrecognized.length} unrecognized, ${report.missing.length} missing`);
        process.exit(1);
      }
      mkdirSync(out, { recursive: true });
      const target = join(out, `${basename(file, '.json')}-solved.json`);
      writeFileSync(target, `${JSON.stringify({ results }, null, 1)}\n`);
      console.log(`wrote ${results.length} ledger record(s) to ${target} — merge with \`npm run ledger:merge -- ${out}\``);
    }
    process.exit(unresolved ? 1 : 0);
  }

  if (command === 'residual') {
    const root = positional[0] || 'content';
    if (!existsSync(root)) {
      console.error('usage: node tools/verify/solve-check.mjs residual <content-root>');
      process.exit(2);
    }
    const { context, skipped } = await residualContext();
    const seen = new Set();
    const residual = [];
    for (const exercise of extractExercises(root)) {
      if (seen.has(exercise.hash) || !isResidualFillin(exercise, context)) continue;
      seen.add(exercise.hash);
      residual.push(exercise);
    }
    if (skipped) {
      console.log(`⊘ fill-in third-reading gate not applied: a source bundle is not checked out, so ${residual.length} fill-in(s) under ${root} could not be judged against a source solution`);
      process.exit(0);
    }
    for (const exercise of residual) console.error(`✗ ${exercise.path}:${exercise.line} fillin has no third reading: ${(exercise.params.question || '').slice(0, 80)}`);
    console.log(`${residual.length ? '✖' : '✓'} fill-in third reading: ${residual.length} fill-in(s) under ${root} that verify-answers cannot read, no source solution confirms, and no ledger note or solve explains`);
    if (residual.length) {
      console.error('  · derive each one and record a note, or answer it blind: `npm run solve:emit -- <root> --residual-fillins --out <dir>`, then `npm run solve:compare` and `npm run ledger:merge`');
    }
    process.exit(residual.length ? 1 : 0);
  }

  console.error('usage: node tools/verify/solve-check.mjs <emit|compare|residual> …');
  process.exit(2);
}
