/**
 * The Chemistry book's element data — `data/chemistry/elements.json` — and
 * the one arithmetic every tool does with it.
 *
 * The file is the book's periodic table: Appendix A's figure, Appendix A's
 * text table, and every molar mass an author, a checker, or a gate computes
 * are read from it, so the table a learner opens and the key a learner is
 * graded against cannot be two data sets. Its masses are IUPAC's abridged
 * standard atomic weights, copied digit for digit from the CIAAW page kept
 * beside the tests (`tools/fixtures/ciaaw/`); `tools/source/elements.test.mjs`
 * holds the file to that copy.
 *
 * A mass is a STRING. `1.0080` and `1.008` are different entries of a table
 * of measured values, and the number of decimal places a mass prints is what
 * the addition rule rounds a formula mass to.
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const ELEMENTS_PATH = 'data/chemistry/elements.json';

/** The data file, with a `bySymbol` map beside its rows. */
export function loadElements(root = repositoryRoot) {
  const data = JSON.parse(readFileSync(path.join(root, ELEMENTS_PATH), 'utf8'));
  return { ...data, bySymbol: new Map(data.elements.map((element) => [element.symbol, element])) };
}

/** A mass as the table prints it: `[97]` for a bracketed mass number. */
export const printedMass = (element) => (element.bracketed ? `[${element.mass}]` : element.mass);

/** A decimal string as `{ units, places }`: `12.011` is 12011 thousandths. */
export function readDecimal(text) {
  const match = /^(\d+)(?:\.(\d+))?$/.exec(String(text));
  if (!match) throw new Error(`not a plain decimal: ${JSON.stringify(text)}`);
  const places = match[2]?.length ?? 0;
  return { units: BigInt(match[1] + (match[2] ?? '')), places };
}

/** `{ units, places }` written out: 18015 thousandths is `18.015`. */
export function writeDecimal({ units, places }) {
  const digits = units.toString().padStart(places + 1, '0');
  return places ? `${digits.slice(0, -places)}.${digits.slice(-places)}` : digits;
}

/**
 * A value re-expressed at `places` decimal places, rounding half up when
 * places are dropped. `tie` says the dropped part was exactly one half — the
 * one case in which two honest calculators can disagree, so a caller that
 * keys the result should know.
 */
export function atPlaces({ units, places }, wanted) {
  if (wanted >= places) return { units: units * 10n ** BigInt(wanted - places), places: wanted, tie: false };
  const divisor = 10n ** BigInt(places - wanted);
  const quotient = units / divisor;
  const twice = (units % divisor) * 2n;
  return { units: twice >= divisor ? quotient + 1n : quotient, places: wanted, tie: twice === divisor };
}
