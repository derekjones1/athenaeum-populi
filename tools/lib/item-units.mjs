/**
 * The unit a fill-in's stem asks for, and the unit its answer display shows.
 *
 * A Chemistry fill-in closes with "Enter the <quantity> in <unit>." and shows
 * its key with a unit in `answerDisplay`. Chapter 5's consistency reading
 * found the two disagreeing (5.1: "Enter the heat capacity in cal/°C." over a
 * display of cal °C⁻¹), and chapter 1 still carried "Enter the length of one
 * cubit in feet." over `1.5 ft/cubit`. The learner types a bare number, so
 * the closing is the only place the unit is asked and the display the only
 * place it is confirmed: they have to say the same thing.
 *
 * Both readers return null for what they cannot read, and the lint is silent
 * then ("Enter the number of protons in an atom of cobalt–60." names no
 * unit). `closingUnit` in keyed-units.mjs stays as it is: the source gates
 * depend on its reading of energy units alone.
 */

/** Unit names a closing sentence uses, to the symbol a display prints. Longest names first. */
const NAMES = [
  ['atomic mass units', 'amu'], ['degrees celsius', '°C'], ['degrees fahrenheit', '°F'], ['square centimeters', 'cm²'],
  ['cubic centimeters', 'cm³'], ['electron volts', 'eV'], ['kilowatt-hours', 'kWh'], ['moles per liter', 'M'],
  ['kilocalories', 'kcal'], ['kilojoules', 'kJ'], ['kilograms', 'kg'], ['kilometers', 'km'], ['milligrams', 'mg'],
  ['milliliters', 'mL'], ['millimeters', 'mm'], ['centimeters', 'cm'], ['nanometers', 'nm'], ['picometers', 'pm'],
  ['angstroms', 'Å'], ['calories', 'cal'], ['joules', 'J'], ['grams', 'g'], ['liters', 'L'], ['meters', 'm'],
  ['pounds', 'lb'], ['ounces', 'oz'], ['inches', 'in.'], ['feet', 'ft'], ['yards', 'yd'], ['miles', 'mi'],
  ['kelvin', 'K'], ['kelvins', 'K'], ['moles', 'mol'], ['seconds', 's'], ['hertz', 'Hz'], ['percent', '%'],
  ['atmospheres', 'atm'], ['pascals', 'Pa'], ['kilopascals', 'kPa'], ['torr', 'torr'],
];
// The food Calorie is the one name whose capital is its meaning.
const CASED_NAMES = [['Calories', 'Cal']];

/** Symbols a closing may print as they are ("in kJ/mol", "in J/g °C"). */
const SYMBOLS = new Set([
  'g', 'kg', 'mg', 'µg', 'lb', 'oz', 'L', 'mL', 'm', 'cm', 'km', 'nm', 'pm', 'mm', 'µm', 'in.', 'ft', 'yd', 'mi', 'Å', 'J', 'kJ', 'cal', 'Cal',
  'kcal', 'kWh', 'eV', 'K', '°C', '°F', 'mol', 'mmol', 'amu', 'M', 's', 'min', 'h', 'Hz', '%', 'ppm', 'ppb', 'atm', 'torr', 'Pa', 'kPa',
  'mmHg', 'bar', 'fl oz', 'qt', 'gal', 'dL', 'W', 'V', 'C', 'N',
]);
const POWER = '(?:⁻¹|⁻²|⁻³|²|³)?';
const isSymbol = (part) => SYMBOLS.has(part.replace(new RegExp(`${POWER}$`), ''));
/** Is this text built only of unit symbols: "kJ/mol", "J/g °C", "s⁻¹", "L/fl oz"? */
const isUnitExpression = (text) => text !== '' && text.split('/').every((side) => {
  const trimmed = side.trim();
  return trimmed !== '' && (isSymbol(trimmed) || trimmed.split(' ').every(isSymbol));
});

/** A unit written in TeX or in prose, as the plain characters a reader sees. */
function plainUnit(text) {
  return String(text ?? '')
    .replace(/\\ce\{((?:[^{}]|\{[^{}]*\})*)\}/g, ' $1 ')
    .replace(/\{\}\s*\^\s*\\circ/g, ' °')
    .replace(/\^\s*\{?\s*\\circ\s*\}?/g, ' °')
    .replace(/\\(?:text|mathrm|textrm)\s*\{([^{}]*)\}/g, '$1')
    .replace(/\^\s*\{?\s*[-−]\s*1\s*\}?/g, '⁻¹')
    .replace(/\^\s*\{?\s*[-−]\s*2\s*\}?/g, '⁻²')
    .replace(/\^\s*\{?\s*[-−]\s*3\s*\}?/g, '⁻³')
    .replace(/\^\s*\{?\s*2\s*\}?/g, '²')
    .replace(/\^\s*\{?\s*3\s*\}?/g, '³')
    .replace(/\\%/g, '%')
    .replace(/\\[ ,;!]|~/g, ' ')
    .replace(/[${}]/g, '')
    .replace(/°\s+(?=[CF]\b)/g, '°')
    .replace(/\/\s+°/g, '/°')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * The unit the closing sentence asks for, as a display would print it
 * ("kilojoules" → "kJ", "mol/L" → "M", "J/g °C"), or null when the closing
 * names no unit this reads.
 */
export function askedUnit(question) {
  const text = String(question ?? '').trim();
  // The closing is the last sentence, and it opens with "Enter" whatever
  // ends the sentence before it: "…(1 Å = $1 \times 10^{-8}$ cm) Enter the
  // length of one cubit in feet." (1.6) follows a parenthesis, not a period.
  const at = text.lastIndexOf('Enter ');
  if (at < 0 || /[.?!]\s+\S/.test(text.slice(at).replace(/\.$/, ''))) return null;
  // The LAST "in": "Enter the mass of phosphorus in the 122 g of AlPO₄, in grams."
  const named = /^Enter\b.*\bin\s+(\S.*?)\.?$/.exec(text.slice(at));
  if (!named) return null;
  // "…in grams, to the nearest tenth of a gram."
  return unitOf(plainUnit(named[1].replace(/,.*$/, '')));
}

/** A unit phrase as the symbol a display prints, or null when it is not a unit. */
function unitOf(phrase) {
  const cased = CASED_NAMES.find(([name]) => phrase === name);
  if (cased) return cased[1];
  const found = NAMES.find(([name]) => phrase.toLowerCase() === name);
  if (found) return found[1];
  if (phrase === 'mol/L') return 'M';
  // Molality, as molarity: "Enter the molality in mol/kg." over the book's `$0.399\ m$` (11.4).
  if (phrase === 'mol/kg') return 'm';
  return isUnitExpression(phrase) ? phrase : null;
}

// What an answer display opens with before its unit: an optional "ΔH = ",
// the number, and an optional power of ten.
const DISPLAY_NUMBER = /^\$?\s*(?:[^=$]{1,40}=\s*)?[+\-−]?\s*(?:\d[\d,.]*|\.\d+)(?:\{,\}\d+)*\s*(?:\\times\s*10\s*\^\s*(?:\{[^{}]*\}|[-−]?\d+))?/;

/**
 * What an answer display prints after its number, as plain text
 * ("g/mol", "J/g °C", "g O2", "ft/cubit"), or null when it prints nothing
 * there or does not open with a number.
 */
export function shownUnit(answerDisplay) {
  const display = String(answerDisplay ?? '');
  const number = DISPLAY_NUMBER.exec(display);
  if (!number) return null;
  // The display's own math only: "$1500\ \text{g}$ ($1.5\ \text{kg}$)" shows grams.
  const rest = display.slice(number[0].length).split('$')[0];
  const unit = plainUnit(rest);
  // A display that spells the unit out shows that unit: "1.4 × 10² Calories".
  return unit === '' ? null : (unitOf(unit) ?? unit);
}

/**
 * Does the display show the unit the closing asks for? A substance after the
 * unit is not a second unit ("g" asked, "g O2" shown); a longer unit is
 * ("g" asked, "g/mol" shown; "ft" asked, "ft/cubit" shown).
 */
export function showsAskedUnit(asked, shown) {
  if (shown === asked) return true;
  if (!shown.startsWith(asked)) return false;
  return shown[asked.length] === ' ' && !isSymbol(shown.slice(asked.length + 1).split(/[ /]/)[0]);
}
