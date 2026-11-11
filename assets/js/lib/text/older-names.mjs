/**
 * older-names — the classical names of the metal ions that have more than
 * one charge, read as the systematic names that replaced them.
 *
 * Chemistry 2e Section 2.7 teaches "iron(II) chloride" and says of "ferrous
 * chloride" that the naming "has been largely abandoned by the scientific
 * community" though it "remains in use by some segments of industry". A
 * learner who types the older name has named the right compound in the form
 * the section retires — which is not the same mistake as naming the wrong
 * compound, so the text grader answers it with its own message instead of
 * "Not quite" (check-text.mjs `gradeText`; November 11, 2026). It is never an
 * accepted answer: the lint refuses one in `accept` (lints.mjs).
 *
 * The suffix alone does not give the charge — -ous is the LOWER of the two
 * charges the metal commonly takes and -ic the higher, and which two differs
 * by metal (tin and lead take 2 and 4; copper, mercury and gold start at 1) —
 * so the table is written out, one metal at a time, and holds only the pairs
 * in ordinary use. A word that is not in it is not read at all: "nitric",
 * "sulfuric", and "chromic acid" (chromium(VI), not the chromic ion) reach
 * no systematic name here, and a translated name is only ever COMPARED with
 * an item's key, never accepted on its own.
 */

// Keys and values are in check-text's normalized form: lowercase, the
// numeral a word of its own ("iron(II)" normalizes to "iron ii").
const CLASSICAL = new Map([
  ['ferrous', 'iron ii'], ['ferric', 'iron iii'],
  ['cuprous', 'copper i'], ['cupric', 'copper ii'],
  ['stannous', 'tin ii'], ['stannic', 'tin iv'],
  ['plumbous', 'lead ii'], ['plumbic', 'lead iv'],
  ['mercurous', 'mercury i'], ['mercuric', 'mercury ii'],
  ['cobaltous', 'cobalt ii'], ['cobaltic', 'cobalt iii'],
  ['chromous', 'chromium ii'], ['chromic', 'chromium iii'],
  ['manganous', 'manganese ii'], ['manganic', 'manganese iii'],
  ['aurous', 'gold i'], ['auric', 'gold iii'],
]);

/** Every classical word the table reads, for the tests that walk it. */
export const CLASSICAL_NAMES = [...CLASSICAL.keys()];

/**
 * The systematic reading of a NORMALIZED name that uses a classical metal
 * word — "ferrous chloride" → "iron ii chloride" — or `null` when it uses
 * none. The result is normalized text, to be compared with a normalized key.
 */
export function systematicName(normalized) {
  const words = String(normalized ?? '').split(' ');
  if (!words.some((word) => CLASSICAL.has(word))) return null;
  return words.map((word) => CLASSICAL.get(word) ?? word).join(' ');
}
