/**
 * check-sortbins — config validation and grading for <sort-bins>, the
 * categorize-into-bins exercise. The text counterpart of check-graph.mjs's
 * arrangement: ONE validator, two callers (the lint and verify-section parse
 * with it at author time; the component parses with it at runtime), and a
 * grader that returns a DIAGNOSTIC status plus counts so the component can
 * teach ("5 of 7 placed correctly") instead of only judging.
 *
 * Config (the sortbins shortcode ships this as JSON in its inner content):
 *   {
 *     "bins":  ["Prokaryotes", "Eukaryotes"],          2–4, unique, non-empty
 *     "items": [ { "label": "…", "bin": 0 }, … ]       4–12; bin indexes bins
 *   }
 *
 * Validation is deliberately opinionated beyond shape:
 *   - every bin owns at least one item, and none owns more than ⌈2n/3⌉ —
 *     a bin that owns (almost) everything turns the exercise into "dump it
 *     all in one place";
 *   - the authored item order must interleave bins. The server-rendered
 *     no-JS shell prints items in authored order, so a list grouped by bin
 *     IS the answer key in reading order. Interleaving is checked as: the
 *     items must form MORE contiguous same-bin runs than there are bins
 *     (grouped-by-bin order produces exactly one run per bin). There is no
 *     runtime shuffle on purpose — shuffling would make the JS-free shell
 *     dishonest about what the interactive form asks.
 *
 * The answer is the label→bin MAPPING, which never appears as prose in the
 * prompt, so sortbins has no verify-replay population: the prompt text
 * cannot encode an assignment. It IS subject to the blind-solve gate
 * (solve-check ships bins + item labels, assignments stripped).
 */

const MIN_BINS = 2;
const MAX_BINS = 4;
const MIN_ITEMS = 4;
const MAX_ITEMS = 12;

/** Loose label fold for uniqueness checks only — grading never normalizes
 * (the component round-trips the config's own label strings). */
const foldLabel = (s) => String(s).toLowerCase().replace(/\s+/g, ' ').trim();

/**
 * Parse and validate a sortbins config. Returns `{ bins, items }` or throws
 * an Error whose message names the defect — the lint and the Hugo template
 * surface it at author time, so the runtime caller never sees a throw on a
 * shipped page.
 */
export function parseSortbinsConfig(text) {
  let config;
  try {
    config = JSON.parse(text);
  } catch (cause) {
    throw new Error(`config is not valid JSON: ${cause.message}`);
  }
  if (typeof config !== 'object' || config === null || Array.isArray(config)) {
    throw new Error('config must be a JSON object with "bins" and "items"');
  }
  const unknown = Object.keys(config).filter((k) => k !== 'bins' && k !== 'items');
  if (unknown.length) {
    throw new Error(`config has unknown key(s) ${JSON.stringify(unknown)} — only "bins" and "items" exist`);
  }

  const { bins, items } = config;
  if (!Array.isArray(bins) || bins.length < MIN_BINS || bins.length > MAX_BINS) {
    throw new Error(`"bins" must be an array of ${MIN_BINS}–${MAX_BINS} labels`);
  }
  bins.forEach((bin, i) => {
    if (typeof bin !== 'string' || !bin.trim()) {
      throw new Error(`bin ${i} must be a non-empty string`);
    }
  });
  if (new Set(bins.map(foldLabel)).size !== bins.length) {
    throw new Error('bin labels must be unique');
  }

  if (!Array.isArray(items) || items.length < MIN_ITEMS || items.length > MAX_ITEMS) {
    throw new Error(`"items" must be an array of ${MIN_ITEMS}–${MAX_ITEMS} { "label", "bin" } objects`);
  }
  items.forEach((item, i) => {
    if (typeof item !== 'object' || item === null || Array.isArray(item)) {
      throw new Error(`item ${i} must be an object { "label", "bin" }`);
    }
    const extra = Object.keys(item).filter((k) => k !== 'label' && k !== 'bin');
    if (extra.length) {
      throw new Error(`item ${i} has unknown key(s) ${JSON.stringify(extra)} — only "label" and "bin" exist`);
    }
    if (typeof item.label !== 'string' || !item.label.trim()) {
      throw new Error(`item ${i} must have a non-empty string "label"`);
    }
    if (!Number.isInteger(item.bin) || item.bin < 0 || item.bin >= bins.length) {
      throw new Error(`item ${i} (${JSON.stringify(item.label)}) has bin ${JSON.stringify(item.bin)} — "bin" must be an integer index into "bins" (0–${bins.length - 1})`);
    }
  });
  if (new Set(items.map((item) => foldLabel(item.label))).size !== items.length) {
    throw new Error('item labels must be unique (case/whitespace-insensitively) — a duplicate label makes two placements indistinguishable');
  }

  const owned = bins.map(() => 0);
  for (const item of items) owned[item.bin] += 1;
  const empty = owned.findIndex((n) => n === 0);
  if (empty !== -1) {
    throw new Error(`bin ${JSON.stringify(bins[empty])} owns no items — every bin must own at least one`);
  }
  const cap = Math.ceil((2 * items.length) / 3);
  const fat = owned.findIndex((n) => n > cap);
  if (fat !== -1) {
    throw new Error(`bin ${JSON.stringify(bins[fat])} owns ${owned[fat]} of ${items.length} items — no bin may own more than ${cap} (dump-everything-in-one-bin is not an exercise)`);
  }

  let runs = 0;
  for (let i = 0; i < items.length; i += 1) {
    if (i === 0 || items[i].bin !== items[i - 1].bin) runs += 1;
  }
  if (runs <= bins.length) {
    throw new Error('items are grouped by bin — the no-JS shell prints authored order, so grouping leaks the key; interleave the items');
  }

  return { bins: [...bins], items: items.map(({ label, bin }) => ({ label, bin })) };
}

/**
 * Grade the learner's placements against the config.
 *
 * `placements` is an array aligned with `config.items`: the bin index the
 * learner placed that item in, or null/undefined while it is still in the
 * tray.
 *
 * Statuses:
 *   'needMore'   at least one item is still unplaced
 *   'correct'    every item is in its keyed bin
 *   'partial'    all placed, at least one right, at least one wrong
 *   'incorrect'  all placed, none right
 *
 * @returns {{status: 'needMore'|'correct'|'partial'|'incorrect',
 *            placed: number, correctCount: number, total: number}}
 */
export function checkSortbins(placements, config) {
  const total = config.items.length;
  let placed = 0;
  let correctCount = 0;
  for (let i = 0; i < total; i += 1) {
    const at = placements[i];
    if (at === null || at === undefined) continue;
    placed += 1;
    if (at === config.items[i].bin) correctCount += 1;
  }
  const status = placed < total ? 'needMore'
    : correctCount === total ? 'correct'
      : correctCount > 0 ? 'partial'
        : 'incorrect';
  return { status, placed, correctCount, total };
}
