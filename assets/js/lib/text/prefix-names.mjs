/**
 * prefix-names — a metal's binary compound named with Greek counting
 * prefixes ("titanium tetrachloride"), read as the name the book asks for
 * ("titanium(IV) chloride").
 *
 * Chemistry 2e Section 2.7 names a compound of two nonmetals with prefixes
 * (carbon tetrachloride) and a compound of a metal as an ionic compound,
 * the metal's charge as a Roman numeral where the metal takes more than
 * one. A learner who carries the prefixes over to a metal has the compound
 * right — the name even counts its atoms — and has used the other naming
 * method. That is not the mistake of naming the wrong compound, so the text
 * grader answers it with its own message instead of "Not quite"
 * (check-text.mjs `gradeText`; November 14, 2026), exactly as it answers an
 * older -ous/-ic name (older-names.mjs). It is never an accepted answer:
 * the lint refuses one in `accept` (lints.mjs).
 *
 * The message does not call the name wrong, because it is not: IUPAC's
 * compositional nomenclature allows "titanium tetrachloride". It says which
 * of the section's two methods the item asks for.
 *
 * Read narrowly, like the older names. Only a two-element name is read —
 * metal word, then a monatomic -ide anion, either with a prefix — plus any
 * words after it (a hydrate's "hexahydrate"), carried as typed. The anion's
 * charge and the counts give the metal's charge, and the translated name is
 * only ever COMPARED with an item's key, never accepted on its own: so
 * "titanium trichloride" against "titanium(IV) chloride" is the name of
 * another compound and stays plainly incorrect.
 */

// Counting prefixes, with the spelling each takes before a vowel ("pentoxide",
// "monoxide", "tetroxide"): the final a or o may be dropped before oxide.
const PREFIXES = [
  ['mono', 1], ['di', 2], ['tri', 3], ['tetra', 4], ['penta', 5],
  ['hexa', 6], ['hepta', 7], ['octa', 8], ['nona', 9], ['deca', 10],
];

// Monatomic anions and the size of their charge.
const ANIONS = new Map([
  ['fluoride', 1], ['chloride', 1], ['bromide', 1], ['iodide', 1], ['hydride', 1],
  ['oxide', 2], ['sulfide', 2], ['selenide', 2], ['telluride', 2],
  ['nitride', 3], ['phosphide', 3], ['arsenide', 3],
]);

// The nonmetals and metalloids: a first word that is one of these is a
// molecular compound's, whose prefix name is its systematic name.
const NOT_METALS = new Set(('hydrogen helium boron carbon nitrogen oxygen fluorine neon silicon phosphorus sulfur chlorine argon '
  + 'germanium arsenic selenium bromine krypton antimony tellurium iodine xenon astatine radon').split(' '));

// Metals the book names with no numeral, and the one charge each takes
// (Section 2.6: groups 1 and 2, aluminum; 2.7 adds zinc, cadmium, silver).
const FIXED_CHARGE = new Map([
  ...'lithium sodium potassium rubidium cesium silver'.split(' ').map((metal) => [metal, 1]),
  ...'beryllium magnesium calcium strontium barium radium zinc cadmium'.split(' ').map((metal) => [metal, 2]),
  ['aluminum', 3],
]);

const ROMAN = ['', 'i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii'];

/** Split a counting prefix off a word: `{ count, rest, prefixed }`. */
function splitPrefix(word, isRoot) {
  for (const [prefix, count] of PREFIXES) {
    if (word.startsWith(prefix) && isRoot(word.slice(prefix.length))) {
      return { count, rest: word.slice(prefix.length), prefixed: true };
    }
    // "pentoxide", "monoxide": the prefix's last vowel dropped before a vowel.
    const elided = prefix.slice(0, -1);
    if (/[ao]$/.test(prefix) && word.startsWith(elided) && /^[aeiou]/.test(word.slice(elided.length)) && isRoot(word.slice(elided.length))) {
      return { count, rest: word.slice(elided.length), prefixed: true };
    }
  }
  return isRoot(word) ? { count: 1, rest: word, prefixed: false } : null;
}

// The first word of the name. No list of metals is kept: the translated name
// is compared with a key, and a key that prints a Roman numeral, or a metal
// of FIXED_CHARGE, is what makes the word a metal's.
const isElementWord = (word) => /^[a-z]{3,}$/.test(word) && !ANIONS.has(word);

/**
 * The ionic-compound readings of a NORMALIZED prefix name, or `null` when it
 * is not one: `{ numeral, bare, fixed }` — "titanium iv chloride", "titanium
 * chloride", and whether the metal is one the book names without a numeral
 * AND the name's counts give that metal's one charge. All normalized text.
 */
export function ionicName(normalized) {
  const [first, second, ...rest] = String(normalized ?? '').split(' ');
  if (!first || !second) return null;
  const anion = splitPrefix(second, (root) => ANIONS.has(root));
  if (!anion) return null;
  const metal = splitPrefix(first, isElementWord) ?? null;
  if (!metal || NOT_METALS.has(metal.rest)) return null;
  // A name with no prefix at all is not a prefix name.
  if (!anion.prefixed && !metal.prefixed) return null;
  const charge = (anion.count * ANIONS.get(anion.rest)) / metal.count;
  if (!Number.isInteger(charge) || charge < 1 || charge >= ROMAN.length) return null;
  const tail = rest.length ? ` ${rest.join(' ')}` : '';
  return {
    numeral: `${metal.rest} ${ROMAN[charge]} ${anion.rest}${tail}`,
    bare: `${metal.rest} ${anion.rest}${tail}`,
    fixed: FIXED_CHARGE.get(metal.rest) === charge,
  };
}
