#!/usr/bin/env node
/**
 * molar-mass — a formula mass computed from the Chemistry book's own periodic
 * table, by the method the book teaches.
 *
 *   node tools/verify/molar-mass.mjs <formula>…        the sum and its terms
 *   node tools/verify/molar-mass.mjs --table <formula>  the calculation as a Markdown table
 *       [--label "Molecular mass"]   the words of the total row (default "Total")
 *       [--unit g/mol]               the unit in the default column heads (default amu)
 *       [--headers "A|B|C|D"]        the four column heads, when a figure words them its own way
 *   node tools/verify/molar-mass.mjs --page <file.md>   every fill-in of a page it can recompute
 *
 * The method (docs/subjects/chemistry.md "Numeric keys"): each element's
 * subtotal is its count times its atomic mass and keeps the mass's decimal
 * places (a count is exact); the sum is rounded to the place of its least
 * precise subtotal. `C₅H₁₂` is 5 × 12.011 + 12 × 1.0080 = 60.055 + 12.0960,
 * so 72.151.
 *
 * The arithmetic is exact (integers of the last decimal place), and the
 * masses are `data/chemistry/elements.json`, the file Appendix A is drawn
 * and tabulated from — so an author, a checker, and a gate that run this
 * get the number a learner gets from the table on the page.
 *
 * `--page` reads only what it can read without judgment: a fill-in whose
 * question asks for the formula, molecular, or molar mass of ONE formula it
 * names and gives no other number. Everything else — moles, grams, percent
 * composition, molarity — is an agent's calculation, not this tool's.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { readSpecies } from '../../assets/js/lib/text/check-chem.mjs';
import { parseCliArgs } from '../lib/cli.mjs';
import { shortcodes } from '../lib/content.mjs';
import { atPlaces, loadElements, readDecimal, writeDecimal } from '../lib/elements.mjs';

/**
 * The formula mass of `formula`: `{ formula, terms, sum, places, tie }`, each
 * term `{ symbol, count, mass, subtotal }` in the formula's own order.
 * Throws on text that is not one formula, on a charge-bearing or
 * isotope-labelled species, and on an element with no standard atomic weight.
 */
export function molarMass(formula, elements) {
  const readings = readSpecies(formula);
  const compositions = new Set(readings.map((species) => JSON.stringify(Object.entries(species.atoms).sort())));
  if (!readings.length) throw new Error(`${JSON.stringify(formula)} is not a formula`);
  if (compositions.size !== 1) throw new Error(`${JSON.stringify(formula)} reads more than one way — write its charge as a superscript`);
  const species = readings[0];
  if (species.mass !== null) throw new Error(`${JSON.stringify(formula)} names one isotope; a formula mass is of the element as found`);
  const terms = Object.entries(species.atoms).map(([symbol, count]) => {
    const element = elements.bySymbol.get(symbol);
    if (!element) throw new Error(`${symbol} is not an element of ${JSON.stringify(formula)}`);
    if (element.bracketed) throw new Error(`${element.name} has no standard atomic weight (the table prints the mass number [${element.mass}])`);
    if (!Number.isInteger(count)) throw new Error(`${JSON.stringify(formula)} counts ${count} atoms of ${symbol}`);
    const mass = readDecimal(element.mass);
    return { symbol, count, mass: element.mass, subtotal: writeDecimal({ units: mass.units * BigInt(count), places: mass.places }), places: mass.places };
  });
  const finest = Math.max(...terms.map((term) => term.places));
  const coarsest = Math.min(...terms.map((term) => term.places));
  const exact = terms.reduce((total, term) => total + atPlaces(readDecimal(term.subtotal), finest).units, 0n);
  const rounded = atPlaces({ units: exact, places: finest }, coarsest);
  return {
    formula,
    terms: terms.map(({ places, ...term }) => term),
    exact: writeDecimal({ units: exact, places: finest }),
    sum: writeDecimal(rounded),
    places: coarsest,
    tie: rounded.tie,
  };
}

/**
 * The calculation as the rows of a Markdown table: one row per element, then
 * the total. `headers` replaces the four column heads; `label` names the
 * total ("Molecular mass", "Formula mass", "Molar mass").
 */
export function calculationTable(result, { unit = 'amu', label = 'Total', headers = null } = {}) {
  const heads = headers ?? ['Element', 'Quantity', `Average atomic mass (${unit})`, `Subtotal (${unit})`];
  if (heads.length !== 4) throw new Error(`a calculation table has four columns, not ${heads.length}`);
  const lines = [
    `| ${heads.join(' | ')} |`,
    '|---|---|---|---|',
    ...result.terms.map((term) => `| ${term.symbol} | ${term.count} | ${term.mass} | ${term.subtotal} |`),
    `| | | **${label}** | **${result.sum}** |`,
  ];
  return lines.join('\n');
}

const SUBSCRIPT_DIGITS = '₀₁₂₃₄₅₆₇₈₉';
const MASS_ASK = /\b(?:molecular or formula|formula or molecular|formula|molecular|molar) mass\b/i;
// A formula in running text: it carries a count or a second capital, which
// no English word that is also a symbol run does ("In", "He", "No", "As").
const FORMULA_TOKEN = new RegExp(`(?<![A-Za-z])(?:[A-Z][a-z]?[0-9${SUBSCRIPT_DIGITS}]*|[([][A-Za-z0-9${SUBSCRIPT_DIGITS}()\\[\\]]*[)\\]][0-9${SUBSCRIPT_DIGITS}]*){1,}(?:[·.][0-9]*[A-Z][A-Za-z0-9${SUBSCRIPT_DIGITS}]*)?(?![a-z])`, 'g');

/**
 * The one formula a question asks the mass of, or null. Null whenever the
 * question is anything but that: no mass ask, no formula, two formulas, or a
 * number that is not part of the formula (a sample size, a count of moles).
 */
export function massAsk(question, elements) {
  const text = String(question ?? '').replace(/\$\\ce\{([^}]*)\}\$/g, '$1');
  if (!MASS_ASK.test(text)) return null;
  const found = [];
  let rest = text;
  for (const match of text.matchAll(FORMULA_TOKEN)) {
    const token = match[0];
    if (!/[0-9₀-₉]/.test(token) && (token.match(/[A-Z]/g) || []).length < 2) continue;
    let readable;
    try { molarMass(token, elements); readable = true; } catch { readable = false; }
    if (!readable) continue;
    found.push(token);
    rest = rest.replace(token, ' ');
  }
  const formulas = [...new Set(found)];
  if (formulas.length !== 1) return null;
  if (/[0-9₀-₉]/.test(rest)) return null;
  return formulas[0];
}

/**
 * Does the question give no number of its own — nothing but formulas and
 * words? Then every digit of its answer comes from the periodic table, and
 * the answer's count of figures is the table's, not the source key's: the
 * mass of carbon in C₅H₁₂ is 5 × 12.011 = 60.055, where a key worked from
 * 12.01 prints 60.05. True as well where the formula is a drawing ("the
 * compound shown in the figure above").
 */
export function statesNoNumber(question) {
  const text = String(question ?? '').replace(/\$\\ce\{([^}]*)\}\$/g, '$1');
  return !/[0-9₀-₉]/.test(text.replace(FORMULA_TOKEN, ' '));
}

/** Does the question ask a formula, molecular, or molar mass and give no number of its own? */
export const asksMassAlone = (question) => MASS_ASK.test(String(question ?? '')) && statesNoNumber(question);

/** Every fill-in of a page that `massAsk` reads, with the table's value beside its key. */
export function pageMasses(markdown, elements) {
  const rows = [];
  for (const item of shortcodes(markdown, 'fillin')) {
    const formula = massAsk(item.params.question, elements);
    if (!formula) continue;
    const result = molarMass(formula, elements);
    rows.push({
      line: markdown.slice(0, item.index).split('\n').length,
      formula,
      key: item.params.answer,
      table: result.sum,
      agrees: item.params.answer === result.sum,
      tie: result.tie,
    });
  }
  return rows;
}

function main(argv) {
  const cli = parseCliArgs(argv, { valueFlags: ['page', 'unit', 'label', 'headers'], boolFlags: ['table'] });
  const elements = loadElements();
  if (cli.flag('page')) {
    const rows = pageMasses(readFileSync(cli.flag('page'), 'utf8'), elements);
    for (const row of rows) {
      console.log(`${row.agrees ? '✓' : '✖'} line ${row.line}: ${row.formula} — key ${row.key}, table ${row.table}${row.tie ? ' (an exact tie, rounded up)' : ''}`);
    }
    console.log(`${rows.length} formula-mass fill-in(s) read, ${rows.filter((row) => !row.agrees).length} not the table's value`);
    process.exit(rows.some((row) => !row.agrees) ? 1 : 0);
  }
  if (!cli.positional.length) throw new Error('give a formula, or --page <file.md>');
  for (const formula of cli.positional) {
    const result = molarMass(formula, elements);
    if (cli.bool('table')) {
      console.log(calculationTable(result, {
        unit: cli.flag('unit') ?? 'amu',
        label: cli.flag('label') ?? 'Total',
        headers: cli.flag('headers') ? cli.flag('headers').split('|').map((head) => head.trim()) : null,
      }));
      continue;
    }
    const work = result.terms.map((term) => `${term.count} × ${term.mass} = ${term.subtotal}`).join('; ');
    console.log(`${formula}: ${result.sum}  (${work}; sum ${result.exact}${result.tie ? ', an exact tie rounded up' : ''})`);
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error(`molar-mass: ${error.message}`);
    process.exit(2);
  }
}
