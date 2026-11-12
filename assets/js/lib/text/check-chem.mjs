/**
 * check-chem — grading for a typed chemical FORMULA or EQUATION.
 *
 * Chemistry 2e keys about 60 answers that are a formula ("Mn₃(PO₄)₂",
 * "FeCl₃·2H₂O", "Se²⁻") and about 200 that are an equation ("2Na(s) +
 * 2H₂O(l) ⟶ 2NaOH(aq) + H₂(g)"), from chapter 2 on. Neither grader could
 * take them. The text grader lowercases and drops punctuation, so `CO`
 * would pass for `Co`, `No` for `NO`, and a hydrate for its anhydrous salt;
 * the math grader cannot take words at all, and MathLive has no formula
 * input. This module reads what a learner can type on a plain keyboard —
 * `Mn3(PO4)2`, `SO4^2-`, `2H2 + O2 -> 2H2O` — into the same structure the
 * key has, and compares structures.
 *
 * WHAT IS COMPARED
 *
 *   formula   correct   the same symbols, counts, grouping, charge, hydrate,
 *                       and mass number, in the same order
 *             form      the same atoms and charge, arranged differently
 *                       (`ClNa`, `Mn3P2O8`) — or the right letters with the
 *                       wrong capitals (`nacl`, `CO` typed as `Co`)
 *   equation  correct   the same species with the same coefficients on each
 *                       side, in any order within a side
 *             form      the same species, balanced by a multiple of the key's
 *                       coefficients (`4H2 + 2O2 -> 4H2O`), or with a state
 *                       symbol the key does not print
 *             incorrect anything else; the message says when the substances
 *                       are right and the equation is not balanced
 *
 * State symbols are optional in a response: `(s)`, `(l)`, `(g)`, `(aq)` are
 * compared only where the learner typed one.
 *
 * WHAT A LEARNER MAY TYPE
 *
 *   subscripts   plain digits, `_2`, or Unicode: `H2O`, `H_2O`, `H₂O`
 *   charges      after `^`, in Unicode, or bare at the end of the species,
 *                number or sign first: `SO4^2-`, `SO₄²⁻`, `SO42-`, `SO4-2`
 *   hydrate dot  `·`, `•`, `*`, or a full stop: `CuSO4.5H2O`
 *   arrows       `->`, `-->`, `→`, `⟶`, `=`; `<=>`, `⇌` for an equilibrium
 *   electrons    `e-`, `e^-`, `e⁻`
 *   mass number  before the symbol: `^14C`, `¹⁴C`, `14C` (a formula only)
 *
 * A bare `SO42-` is ambiguous on its face (four oxygens and 2−, or forty-two
 * and 1−). The KEY is never ambiguous — the lint requires its charges as
 * superscripts — so a response is read every way its characters allow and
 * is right when one reading is the key's.
 *
 * Not read here: an electron configuration (`[Kr]4d¹⁰5s²`), a nuclide symbol
 * with both numbers stacked, a condensed structural formula with bonds
 * drawn. docs/subjects/chemistry.md "Exercises" gives each its component.
 */

const ELEMENTS = new Set(('H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr '
  + 'Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg '
  + 'Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og').split(' '));

/** An element's atomic number: its place in the list above. */
const ATOMIC_NUMBER = new Map([...ELEMENTS].map((symbol, index) => [symbol, index + 1]));

const SUBSCRIPTS = '₀₁₂₃₄₅₆₇₈₉';
const SUPERSCRIPTS = '⁰¹²³⁴⁵⁶⁷⁸⁹';
const ARROW = /<=>|<->|⇌|⇄|⟷|↔|-->|->|→|⟶|=/g;
const EQUILIBRIUM = /<=>|<->|⇌|⇄|⟷|↔/;
const STATES = new Set(['s', 'l', 'g', 'aq']);

export const CHEM_FORMS = Object.freeze(['formula', 'equation']);

/** One spelling for every way the characters of a formula are typed or printed. */
function prepare(raw) {
  return String(raw ?? '').normalize('NFC')
    .replace(/[‐‑‒–—−]/g, '-')
    .replace(/[₀-₉]+/g, (run) => `_${[...run].map((c) => SUBSCRIPTS.indexOf(c)).join('')}`)
    .replace(/[⁰¹²³⁴-⁹⁺⁻]+/g, (run) => `^${[...run].map((c) => (c === '⁺' ? '+' : c === '⁻' ? '-' : SUPERSCRIPTS.indexOf(c))).join('')}`)
    .replace(/\\(?:ce|text|mathrm)\b|[{}$]/g, '')
    // The source's MathML prints a fractional coefficient as "( 1 )/( 2 )".
    .replace(/\(\s*(\d+)\s*\)\s*\/\s*\(\s*(\d+)\s*\)/g, '$1/$2')
    // Heat over the arrow is a condition, not a species.
    .replace(/(->|→|⟶)\s*Δ|Δ\s*(->|→|⟶)/g, '$1$2')
    .replace(/[·•∙⋅*]/g, '·');
}

/** Parse a run of symbols, groups, and counts from `text[start]`; null when it does not read. */
function parseBody(text, start, closer) {
  const items = [];
  let i = start;
  while (i < text.length) {
    const c = text[i];
    if (closer && c === closer) return { items, end: i + 1 };
    let item = null;
    if (c === '(' || c === '[') {
      const inner = parseBody(text, i + 1, c === '(' ? ')' : ']');
      if (!inner || !inner.items.length) return null;
      item = { group: inner.items, bracket: c === '[' };
      i = inner.end;
    } else if (/[A-Z]/.test(c)) {
      const two = text.slice(i, i + 2);
      const symbol = /^[A-Z][a-z]$/.test(two) && ELEMENTS.has(two) ? two : c;
      if (!ELEMENTS.has(symbol)) return null;
      item = { el: symbol };
      i += symbol.length;
    } else {
      break;
    }
    const count = /^(_?)(\d+)/.exec(text.slice(i));
    if (count) {
      item.n = Number(count[2]);
      item.digits = count[2];
      item.marked = count[1] === '_';
      i += count[0].length;
      if (!item.n) return null;
    } else {
      item.n = 1;
    }
    items.push(item);
  }
  return closer ? null : { items, end: i };
}

const serialize = (items) => items.map((item) => `${item.el ?? `(${serialize(item.group)})`}${item.n > 1 ? item.n : ''}`).join('');
/** As typed, square brackets kept: what the field shows back. */
const serializeShown = (items) => items.map((item) => `${item.el ?? (item.bracket ? `[${serializeShown(item.group)}]` : `(${serializeShown(item.group)})`)}${item.n > 1 ? item.n : ''}`).join('');

/**
 * A group taken once is only grouping INSIDE AN EQUATION: `[Ag(NH₃)₂]⁺` is
 * `Ag(NH₃)₂⁺`, and `(NH₄)₂(Cr₂O₇)` is `(NH₄)₂Cr₂O₇` (Chemistry 2e 4.37(b)
 * prints the complex ion in brackets; it is as often written without them).
 * This is the `loose` spelling, used only where an equation's response
 * species is matched to the key's. `canon` keeps every group: a formula item
 * grades how the formula is written (`Ag(NH3)2+` for `[Ag(NH₃)₂]⁺` is "form",
 * the usual-grouping message), and the gates that read `chemCanon` must not
 * take the first words of "Ca(H₂PO₄)₂" for a key "CaH₂PO₄".
 */
const flatten = (items) => items.flatMap((item) => (item.group && item.n === 1 ? flatten(item.group) : [item.group ? { ...item, group: flatten(item.group) } : item]));

function addAtoms(items, times, atoms) {
  for (const item of items) {
    if (item.el) atoms[item.el] = (atoms[item.el] || 0) + item.n * times;
    else addAtoms(item.group, item.n * times, atoms);
  }
  return atoms;
}

/** A species' sorted atom counts and charge as one comparable string. */
const compositionKey = (species) => `${Object.keys(species.atoms).sort().map((el) => `${el}${species.atoms[el]}`).join(' ')}|${species.charge}|${species.mass ?? ''}`;

const fraction = (text) => {
  const [top, bottom] = text.split('/').map(Number);
  return bottom ? top / bottom : top;
};

/**
 * Every reading of one species: `[{ canon, atoms, charge, mass, state, coef }]`,
 * empty when the text is not a formula. `equation` reads a leading number as
 * a coefficient; a formula reads it as a mass number.
 */
export function readSpecies(raw, { equation = false } = {}) {
  let text = prepare(raw).replace(/\s+/g, '');
  if (!text) return [];
  let state = null;
  // "(s, graphite)": the allotrope rides with the state.
  // A state typed in capitals, (S) or (AQ), is the same state.
  const stateMatch = /\((s|l|g|aq)(?:,[a-z]+)?\)$/i.exec(text);
  if (stateMatch && STATES.has(stateMatch[1].toLowerCase())) {
    state = stateMatch[1].toLowerCase();
    text = text.slice(0, stateMatch.index);
  }
  let coef = 1;
  let mass = null;
  if (equation) {
    const leading = /^(\d+\/\d+|\d+)/.exec(text);
    if (leading) {
      coef = fraction(leading[1]);
      text = text.slice(leading[0].length);
      if (!coef) return [];
    }
  }
  // An electron: e-, e^-, e⁻.
  if (equation && /^e\^?-$/.test(text)) return [{ canon: 'e^-', loose: 'e^-', atoms: {}, charge: -1, mass: null, state, coef }];
  // A nuclide's prescripts: the mass number, and below it the atomic number
  // where one is written (`^23_11Na`, `²³₁₁Na`).
  let atomic = null;
  const isotope = (equation ? /^\^(\d+)(?:_(\d+))?/ : /^\^?(\d+)(?:_(\d+))?(?=[A-Z([])/).exec(text);
  if (isotope) {
    mass = Number(isotope[1]);
    atomic = isotope[2] === undefined ? null : Number(isotope[2]);
    text = text.slice(isotope[0].length);
  }
  const body = parseBody(text, 0, null);
  if (!body || !body.items.length) return [];
  let rest = text.slice(body.end);
  // A hydrate: ·5H2O. A full stop is the same dot when a formula follows it.
  let hydrate = null;
  const dot = /^[·.](\d*)(?=[A-Z(])/.exec(rest);
  if (dot) {
    const water = parseBody(rest, dot[0].length, null);
    if (!water || !water.items.length) return [];
    hydrate = { coef: Number(dot[1] || 1), items: water.items };
    rest = rest.slice(water.end);
    if (!hydrate.coef) return [];
  }
  // The charge, and the two ways a bare tail of digits and a sign can be read.
  const tails = [];
  const last = body.items[body.items.length - 1];
  const marked = /^\^(?:(\d*)([+-])|([+-])(\d*))$/.exec(rest);
  const signFirst = /^([+-])(\d+)$/.exec(rest);
  const bareSign = /^([+-])$/.exec(rest);
  if (!rest) {
    tails.push({ charge: 0 });
  } else if (marked) {
    const sign = marked[2] || marked[3];
    tails.push({ charge: Number(marked[1] || marked[4] || 1) * (sign === '+' ? 1 : -1) });
  } else if (signFirst && !hydrate) {
    tails.push({ charge: Number(signFirst[2]) * (signFirst[1] === '+' ? 1 : -1) });
  } else if (bareSign && !hydrate) {
    const sign = bareSign[1] === '+' ? 1 : -1;
    tails.push({ charge: sign });
    // "SO42-": the last digit of an unmarked count may be the charge's size.
    // The likelier reading goes first, for the preview: two digits split
    // (SO₄²⁻, Hg₂²⁺), and one digit after a lone symbol is its charge
    // (Fe³⁺, O²⁻) where after a group of atoms it is a count (MnO₄⁻, NH₄⁺).
    if (last.digits && !last.marked && /[1-9]$/.test(last.digits)) {
      const split = { charge: Number(last.digits.slice(-1)) * sign, lastCount: Number(last.digits.slice(0, -1) || 1) };
      const lone = body.items.length === 1 && Boolean(last.el);
      if (last.digits.length > 1 || lone) tails.unshift(split); else tails.push(split);
    }
  } else {
    return [];
  }
  return tails.map((tail) => {
    const items = tail.lastCount === undefined ? body.items
      : [...body.items.slice(0, -1), { ...last, n: tail.lastCount }];
    const atoms = addAtoms(items, 1, {});
    if (hydrate) addAtoms(hydrate.items, hydrate.coef, atoms);
    const charge = tail.charge;
    const spell = (write, flat) => `${mass === null ? '' : `^${mass}`}${write(flat(items))}`
      + `${hydrate ? `·${hydrate.coef > 1 ? hydrate.coef : ''}${write(flat(hydrate.items))}` : ''}`
      + `${charge ? `^${Math.abs(charge) > 1 ? Math.abs(charge) : ''}${charge > 0 ? '+' : '-'}` : ''}`;
    const canon = spell(serialize, (list) => list);
    const loose = spell(serialize, flatten);
    const shown = spell(serializeShown, (list) => list);
    // The atomic number the species' one element has, when it is one
    // element: what a written atomic number is held to.
    const symbols = Object.keys(atoms);
    const expected = symbols.length === 1 ? ATOMIC_NUMBER.get(symbols[0]) ?? null : null;
    return { canon, loose, shown, atoms, charge, mass, atomic, expected, state, coef };
  });
}

/** A reading in the book's own print: `Mn₃(PO₄)₂`, `SO₄²⁻`, `¹⁴C`. */
export function prettySpecies(species) {
  const sub = (digits) => [...String(digits)].map((d) => SUBSCRIPTS[d]).join('');
  const sup = (text) => [...String(text)].map((c) => (c === '+' ? '⁺' : c === '-' ? '⁻' : SUPERSCRIPTS[c])).join('');
  const body = (species.shown ?? species.canon)
    .replace(/^\^(\d+)/, (_, mass) => `${sup(mass)}${species.atomic === null || species.atomic === undefined ? '' : sub(species.atomic)}`)
    .replace(/\^(\d*[+-])$/, (_, charge) => sup(charge))
    .replace(/·(\d*)/, (_, n) => `·\u0000${n}\u0000`)
    .replace(/(?<![\u0000\d])(\d+)(?!\d*\u0000)/g, (_, n) => sub(n))
    .replace(/\u0000/g, '');
  const coef = species.coef === 1 ? '' : Number.isInteger(species.coef) ? String(species.coef) : String(species.coef);
  return `${coef}${species.canon === 'e^-' ? 'e⁻' : body}${species.state ? `(${species.state})` : ''}`;
}

const flatLetters = (text) => prepare(text).replace(/[\s_^()[\]·.]/g, '').toLowerCase();

/** @returns {{ status: 'empty'|'correct'|'form'|'incorrect', message?: string }} */
export function checkFormula(input, answer, { accept = '' } = {}) {
  if (!String(input ?? '').trim()) return { status: 'empty' };
  const keys = [answer, ...String(accept || '').split('|')].map((member) => member.trim()).filter(Boolean);
  const keyReadings = keys.flatMap((member) => readSpecies(member).slice(0, 1));
  const readings = readSpecies(input);
  if (!readings.length) {
    if (keys.some((member) => flatLetters(member) === flatLetters(input))) {
      return { status: 'form', message: 'Those are the right letters — now fix the capitals: an element’s symbol is one capital letter, or a capital and a small letter.' };
    }
    return { status: 'incorrect', message: 'That does not read as a formula. Type element symbols with their capitals and subscripts as plain numbers, like Ca3(PO4)2.' };
  }
  const matched = readings.flatMap((reading) => keyReadings.filter((key) => key.canon === reading.canon).map((key) => ({ reading, key })));
  if (matched.length) {
    // A nuclide's atomic number is its element's. One typed wrong is wrong
    // whatever the key prints; one left out is the right nuclide, short of
    // what a key that prints both numbers asks for.
    const sound = matched.filter(({ reading }) => reading.atomic === null || reading.expected === null || reading.atomic === reading.expected);
    if (!sound.length) return { status: 'incorrect', message: 'The atomic number you typed is not this element’s — find the element in the periodic table.' };
    if (sound.some(({ reading, key }) => key.atomic === null || reading.atomic !== null)) return { status: 'correct' };
    return { status: 'form', message: 'That is the right nuclide — now include its atomic number as well: type it after an underscore, as in ^14_6C.' };
  }
  if (readings.some((reading) => keyReadings.some((key) => compositionKey(key) === compositionKey(reading)))) {
    return { status: 'form', message: 'That has the right atoms — now write the formula in its usual order and grouping.' };
  }
  // The right atoms without what the key's symbol carries beside them — an
  // ion typed without its charge, a nuclide typed without its mass number.
  // Still wrong (the charge or the mass number is what the item asks for),
  // but said: a bare "incorrect" sent learners back to the atoms they had
  // right (Chemistry 2.3, 2.5, 2.6). Neither message gives the number.
  const atomsOf = (species) => Object.keys(species.atoms).sort().map((el) => `${el}${species.atoms[el]}`).join(' ');
  const bare = (test) => readings.some((reading) => keyReadings.some((key) => atomsOf(key) === atomsOf(reading) && test(reading, key)));
  if (bare((reading, key) => key.mass !== null && reading.mass === null)) {
    return { status: 'incorrect', message: 'A symbol for one isotope carries its mass number: type it before the symbol, as in 14C.' };
  }
  if (bare((reading, key) => Boolean(key.charge) && !reading.charge && (key.mass === null) === (reading.mass === null))) {
    return { status: 'incorrect', message: 'An ion’s symbol ends with its charge: type it after the symbol, as in Ca2+ or Cl-.' };
  }
  return { status: 'incorrect' };
}

/** Split one side of an equation into species texts, every way its plus signs allow. */
function sideSplits(side) {
  const spaced = side.split(/\s+\+\s+/).map((part) => part.trim());
  const splits = [spaced];
  // No spaces typed: a plus followed by the start of a species separates,
  // unless the next character is another plus (then it is a charge).
  const compact = side.replace(/\s+/g, '');
  if (spaced.length === 1 && compact.includes('+')) {
    const parts = [];
    let current = '';
    for (let i = 0; i < compact.length; i += 1) {
      const c = compact[i];
      const next = compact[i + 1] ?? '';
      if (c === '+' && current && /[\dA-Z([e]/.test(next) && !/^\d*$/.test(compact.slice(i + 1))) {
        parts.push(current);
        current = '';
      } else {
        current += c;
      }
    }
    parts.push(current);
    if (parts.length > 1) splits.push(parts);
  }
  return splits;
}

/** `{ sides: [[readings…], [readings…]], equilibrium }` for every way the text splits; [] when it is not an equation. */
function readEquation(raw) {
  const text = prepare(raw);
  const arrows = text.match(ARROW) || [];
  if (arrows.length !== 1) return [];
  const at = text.indexOf(arrows[0]);
  const equilibrium = EQUILIBRIUM.test(arrows[0]);
  // "OH-->2H2O" typed without spaces: the first hyphen of "-->" may be the
  // charge of the species before a "->".
  const cuts = [[text.slice(0, at), text.slice(at + arrows[0].length)]];
  if (arrows[0] === '-->') cuts.push([text.slice(0, at + 1), text.slice(at + 3)]);
  const out = [];
  for (const [left, right] of cuts) {
    for (const leftParts of sideSplits(left)) {
      for (const rightParts of sideSplits(right)) {
        const sides = [leftParts, rightParts].map((parts) => parts.map((part) => readSpecies(part, { equation: true })));
        if (sides.every((side) => side.length && side.every((readings) => readings.length))) out.push({ sides, equilibrium });
      }
    }
  }
  return out;
}

/** Assign each key species one response species that can be read as it; null when the side differs. */
function matchSide(keySide, responseSide) {
  if (keySide.length !== responseSide.length) return null;
  const used = new Set();
  const pairs = [];
  const place = (index) => {
    if (index === keySide.length) return true;
    const key = keySide[index][0];
    for (let j = 0; j < responseSide.length; j += 1) {
      if (used.has(j)) continue;
      const reading = responseSide[j].find((candidate) => (candidate.loose ?? candidate.canon) === (key.loose ?? key.canon));
      if (!reading) continue;
      used.add(j);
      pairs.push({ key, reading });
      if (place(index + 1)) return true;
      used.delete(j);
      pairs.pop();
    }
    return false;
  };
  return place(0) ? pairs : null;
}

/** Atom and charge totals of one side, coefficients applied. */
function sideTotals(side) {
  const totals = { charge: 0 };
  for (const [species] of side) {
    totals.charge += species.charge * species.coef;
    for (const [el, n] of Object.entries(species.atoms)) totals[el] = (totals[el] || 0) + n * species.coef;
  }
  return totals;
}

const sameTotals = (a, b) => [...new Set([...Object.keys(a), ...Object.keys(b)])].every((k) => Math.abs((a[k] || 0) - (b[k] || 0)) < 1e-9);

/*
 * H⁺ and H₃O⁺ are one hydrogen ion (Chemistry 2e 4.2, decided for chapter 4).
 * The half-reaction method balances hydrogen "by adding H⁺ ions", and the
 * answer key prints H₃O⁺ in some answers and H⁺ in others, so a learner who
 * follows the module writes the other notation from the key's. Where the key
 * or the response holds either ion, both are compared after each H₃O⁺ is read
 * as H⁺ + H₂O on its own side, the hydrogen ions and waters of a side are
 * added up, and water common to both sides is cancelled. Nothing else is
 * cancelled: a complete ionic equation keeps its spectator ions.
 */
const PROTON = 'H^+';
const HYDRONIUM = 'H3O^+';
const WATER = 'H2O';
const single = (readings, canon) => readings.length === 1 && readings[0].canon === canon;
const holdsHydrogenIon = (equation) => equation.sides.some((side) => side.some((readings) => single(readings, PROTON) || single(readings, HYDRONIUM)));

function asProtons(equation) {
  const sides = equation.sides.map((side) => {
    const out = [];
    const held = new Map();
    const add = (species) => {
      const same = held.get(species.canon);
      if (same) {
        same.coef += species.coef;
        same.state = same.state ?? species.state;
        return;
      }
      const copy = { ...species };
      held.set(copy.canon, copy);
      out.push([copy]);
    };
    for (const readings of side) {
      if (single(readings, HYDRONIUM)) {
        const [ion] = readings;
        add({ ...ion, canon: PROTON, loose: PROTON, shown: PROTON, atoms: { H: 1 }, expected: 1 });
        // The water's state is not printed with the ion: it is left free.
        add({ ...ion, canon: WATER, loose: WATER, shown: WATER, atoms: { H: 2, O: 1 }, charge: 0, expected: null, state: null });
      } else if (single(readings, PROTON) || single(readings, WATER)) {
        add(readings[0]);
      } else {
        out.push(readings);
      }
    }
    return out;
  });
  const [left, right] = sides.map((side) => side.find((readings) => single(readings, WATER))?.[0]);
  if (left && right) {
    const common = Math.min(left.coef, right.coef);
    left.coef -= common;
    right.coef -= common;
  }
  return { ...equation, sides: sides.map((side) => side.filter((readings) => readings[0].coef > 1e-9)) };
}

/** The equation with H₃O⁺ renamed H⁺ and no water added or cancelled: the substances as typed, in one notation. */
const renamedProtons = (equation) => ({
  ...equation,
  sides: equation.sides.map((side) => side.map((readings) => readings.map((r) => (r.canon === HYDRONIUM ? { ...r, canon: PROTON, loose: PROTON } : r)))),
});

/** Whether some reading of each species makes the response balance as typed. */
function balances(response) {
  const pick = (side, choices) => side.map((readings, i) => [readings[choices[i]]]);
  const options = (side) => side.reduce((all, readings) => all.flatMap((choice) => readings.map((_, j) => [...choice, j])), [[]]).slice(0, 64);
  return options(response.sides[0]).some((l) => options(response.sides[1]).some((r) => sameTotals(sideTotals(pick(response.sides[0], l)), sideTotals(pick(response.sides[1], r)))));
}

/*
 * The other solution (Chemistry 2e 4.2, chapter 4). The half-reaction method
 * balances with H⁺ and converts to a basic solution last (adding OH⁻ to both
 * sides, H⁺ + OH⁻ ⟶ H₂O, cancelling water), so a learner who stops early
 * writes the right reaction in acid against a key in base, or the reverse.
 * Each side is split into its other species, which must be the key's, side
 * for side, in one ratio (spectators never cancel), and the medium species:
 * with H⁺ written as H₂O − OH⁻, the net water and the net hydroxide across
 * the arrow must be the key's in the same ratio. Only when one equation holds
 * OH⁻ and the other H⁺ or H₃O⁺ in its place, and only for a response that
 * balances; never `correct`.
 */
const HYDROXIDE = 'OH^-';
const MEDIUM_SPECIES = new Set([PROTON, HYDROXIDE, WATER]);
const OTHER_SOLUTION = 'That is balanced — now write it for the solution the question names: an acidic solution has H⁺ (or H₃O⁺), a basic solution OH⁻.';

/** Every choice of one reading per species (at most 64), as plain species lists. */
function choices(equation) {
  const side = (readings) => readings.reduce((all, options) => all.flatMap((chosen) => options.map((option) => [...chosen, option])), [[]]).slice(0, 64);
  return side(equation.sides[0]).flatMap((left) => side(equation.sides[1]).map((right) => [left, right]));
}

/** `{ core: [Map, Map], water, hydroxide, acid, base }` of sides already read as H⁺ (asProtons). */
function mediumView(sides) {
  const core = [new Map(), new Map()];
  let water = 0;
  let hydroxide = 0;
  let acid = false;
  let base = false;
  sides.forEach((side, i) => {
    const sign = i ? 1 : -1;
    for (const species of side) {
      const id = species.loose ?? species.canon;
      if (!MEDIUM_SPECIES.has(id)) {
        core[i].set(id, (core[i].get(id) || 0) + species.coef);
      } else if (id === PROTON) {
        acid = true;
        water += sign * species.coef;
        hydroxide -= sign * species.coef;
      } else if (id === HYDROXIDE) {
        base = true;
        hydroxide += sign * species.coef;
      } else {
        water += sign * species.coef;
      }
    }
  });
  return { core, water, hydroxide, acid, base };
}

function otherSolution(key, responses) {
  const keyView = mediumView(asProtons(key).sides.map((side) => side.map(([species]) => species)));
  // A key whose H⁺ (or OH⁻) is only a spectator, the same on both sides, has no medium to convert.
  if (keyView.acid === keyView.base || Math.abs(keyView.hydroxide) < 1e-9) return false;
  return responses.some((response) => {
    const read = asProtons(response);
    return choices(read).some((sides) => {
      const view = mediumView(sides);
      if (view.acid === view.base || view.acid === keyView.acid) return false;
      // Balanced as typed, in the reading chosen.
      if (!sameTotals(sideTotals(sides[0].map((s) => [s])), sideTotals(sides[1].map((s) => [s])))) return false;
      let ratio = null;
      for (let i = 0; i < 2; i += 1) {
        if (view.core[i].size !== keyView.core[i].size) return false;
        for (const [id, coef] of keyView.core[i]) {
          if (!view.core[i].has(id)) return false;
          const r = view.core[i].get(id) / coef;
          if (ratio === null) ratio = r;
          else if (Math.abs(r - ratio) > 1e-9) return false;
        }
      }
      if (ratio === null) return false;
      return Math.abs(view.water - keyView.water * ratio) < 1e-9 && Math.abs(view.hydroxide - keyView.hydroxide * ratio) < 1e-9;
    });
  });
}

/*
 * The arrow is part of the equation (decided after chapter 4, for chapter
 * 13): `⟶` says the reaction is written as going to completion, `⇌` that it
 * reaches equilibrium. A response with the key's substances, coefficients,
 * and states under the other arrow is not `correct`; it is told which arrow,
 * and nothing about the reaction that the key's own arrow does not say.
 * `=` is the one-way arrow, as it is everywhere else.
 */
const ONE_WAY_ARROW = 'Those are the right substances and coefficients — now write the equation with a single arrow (->). The double arrow is for a reaction that reaches equilibrium.';
const EQUILIBRIUM_ARROW = 'Those are the right substances and coefficients — now write the equation with the equilibrium arrow (<=>): this reaction does not go to completion.';

/*
 * A formula written as the simplest ratio of its atoms (Chemistry 2e 4.2:
 * P₄ + 5O₂ ⟶ 2P₂O₅ against the key's P₄O₁₀). The response balances, and its
 * species are the key's, side for side, except that one or more is the key's
 * formula divided through by a whole number — atoms and charge alike, so
 * 2Hg⁺ for Hg₂²⁺ is the same slip. Never `correct`: the chapter prints the
 * molecular formula, and Section 3.2 is where the two are told apart. The
 * sentence names no substance.
 */
const SIMPLEST_RATIO = 'That balances, but one formula is an empirical formula — the simplest ratio of its atoms. Write that substance’s molecular formula, a whole-number multiple of it.';
// The same slip on an element (4P for P₄, 2O for O₂) is not an empirical
// formula, and is told as what it is.
const SEPARATE_ATOMS = 'That balances, but one element is written as separate atoms. Write it as the molecule it exists as.';

/** The whole number n ≥ 2 with `whole` = n × `part` in every atom and in charge, or 0. */
function multipleOf(whole, part) {
  const elements = Object.keys(whole.atoms);
  if (!elements.length || elements.length !== Object.keys(part.atoms).length) return 0;
  if ((whole.mass ?? null) !== (part.mass ?? null)) return 0;
  const n = whole.atoms[elements[0]] / (part.atoms[elements[0]] || NaN);
  if (!Number.isInteger(n) || n < 2) return 0;
  if (!elements.every((el) => part.atoms[el] * n === whole.atoms[el])) return 0;
  return part.charge * n === whole.charge ? n : 0;
}

/** The sentence for a response that is the key with a formula divided through, or null. */
function simplestRatioFormula(key, responses) {
  const keySides = key.sides.map((side) => side.map(([species]) => species));
  let compound = false;
  const found = responses.some((response) => choices(response).some((sides) => {
    if (!sameTotals(sideTotals(sides[0].map((s) => [s])), sideTotals(sides[1].map((s) => [s])))) return false;
    let divided = false;
    let dividedCompound = false;
    const matched = [0, 1].every((i) => {
      if (sides[i].length !== keySides[i].length) return false;
      const used = new Set();
      const place = (index) => {
        if (index === keySides[i].length) return true;
        const wanted = keySides[i][index];
        for (let j = 0; j < sides[i].length; j += 1) {
          if (used.has(j)) continue;
          const typed = sides[i][j];
          const same = (typed.loose ?? typed.canon) === (wanted.loose ?? wanted.canon);
          const part = !same && multipleOf(wanted, typed) > 0;
          if (!same && !part) continue;
          used.add(j);
          if (place(index + 1)) {
            if (part) {
              divided = true;
              // A polyatomic ion of one element (Hg₂²⁺) is a formula, not a gas's molecule.
              if (Object.keys(wanted.atoms).length > 1 || wanted.charge !== 0) dividedCompound = true;
            }
            return true;
          }
          used.delete(j);
        }
        return false;
      };
      return place(0);
    });
    if (matched && divided && dividedCompound) compound = true;
    return matched && divided;
  }));
  if (!found) return null;
  return compound ? SIMPLEST_RATIO : SEPARATE_ATOMS;
}

/*
 * Electrons (Chemistry 2e 4.2, the half-reaction method). A bare `e` or `2e`
 * is not a species, so the line did not read as an equation and the learner
 * was sent to the arrow; and a half-reaction typed with every substance and
 * no electrons was plainly wrong. Each is told what is missing.
 */
const ELECTRON = 'e^-';
const BARE_ELECTRON = 'An electron carries its charge: type it as e-, as in 2e-.';
const NO_ELECTRONS = 'Those are the right substances, but a half-reaction also shows the electrons transferred: add e- to the side that balances the charge.';

const typedBareElectron = (input) => prepare(input)
  .split(/<=>|<->|⇌|⇄|⟷|↔|-->|->|→|⟶|=|\+/)
  .some((part) => /^\s*\d*\s*e\s*$/.test(part));

function missingElectrons(key, responses) {
  const isElectron = ([species]) => species.canon === ELECTRON;
  if (!key.sides.some((side) => side.some(isElectron))) return false;
  const bare = key.sides.map((side) => side.filter((readings) => !isElectron(readings)));
  return responses.some((response) => !response.sides.some((side) => side.some((readings) => readings.some((r) => r.canon === ELECTRON)))
    && [0, 1].every((i) => matchSide(bare[i], response.sides[i]) !== null));
}

/** @returns {{ status: 'empty'|'correct'|'form'|'incorrect', message?: string }} */
export function checkEquation(input, answer) {
  if (!String(input ?? '').trim()) return { status: 'empty' };
  const key = readEquation(answer)[0];
  if (!key) return { status: 'incorrect' };
  const responses = readEquation(input);
  if (!responses.length) {
    if (typedBareElectron(input)) return { status: 'incorrect', message: BARE_ELECTRON };
    return { status: 'incorrect', message: 'That does not read as an equation. Type it on one line with a plus sign between substances and -> for the arrow, like 2H2 + O2 -> 2H2O.' };
  }
  const hydrogenIon = holdsHydrogenIon(key) || responses.some(holdsHydrogenIon);
  const comparedKey = hydrogenIon ? asProtons(key) : key;
  let best = { status: 'incorrect' };
  for (const typed of responses) {
    const response = hydrogenIon ? asProtons(typed) : typed;
    const left = matchSide(comparedKey.sides[0], response.sides[0]);
    const right = matchSide(comparedKey.sides[1], response.sides[1]);
    // The right substances: the same species on each side, read in one
    // notation before water is cancelled, or in the compared form after.
    const sameSubstances = Boolean(left && right)
      || (hydrogenIon && [0, 1].every((i) => matchSide(renamedProtons(key).sides[i], renamedProtons(typed).sides[i]) !== null));
    if (left && right) {
      const pairs = [...left, ...right];
      const ratios = pairs.map(({ key: k, reading }) => reading.coef / k.coef);
      const statesAgree = pairs.every(({ key: k, reading }) => !reading.state || !k.state || reading.state === k.state);
      if (ratios.every((ratio) => Math.abs(ratio - 1) < 1e-9)) {
        if (statesAgree && typed.equilibrium !== key.equilibrium) {
          return { status: 'form', message: key.equilibrium ? EQUILIBRIUM_ARROW : ONE_WAY_ARROW };
        }
        if (statesAgree) return { status: 'correct' };
        best = { status: 'form', message: 'The equation is balanced — now check the state symbols, or leave them out.' };
        continue;
      }
      if (ratios.every((ratio) => Math.abs(ratio - ratios[0]) < 1e-9)) {
        if (best.status !== 'form') best = { status: 'form', message: 'That is balanced — now write it with the smallest whole-number coefficients.' };
        continue;
      }
    }
    // Said only of a response that does not balance: one balanced with
    // other coefficients is not the key's, and is not told it is unbalanced.
    if (sameSubstances && best.status === 'incorrect' && !balances(typed)) {
      best = { status: 'incorrect', message: 'Those are the right substances, but the equation is not balanced: count each element, and the charge, on both sides.' };
    }
  }
  if (best.status === 'incorrect' && otherSolution(key, responses)) return { status: 'form', message: OTHER_SOLUTION };
  if (best.status === 'incorrect' && !best.message) {
    const divided = simplestRatioFormula(key, responses);
    if (divided) return { status: 'form', message: divided };
    if (missingElectrons(key, responses)) return { status: 'incorrect', message: NO_ELECTRONS };
  }
  return best;
}

/**
 * A response without the sentence punctuation typed after it. Every stem
 * ends in a period and the typing guide under the field ends "SO4^2-.", so
 * learners type "MgSe." — and a period is also how a hydrate's dot is typed,
 * so the reader took the last one for a dot with nothing after it and
 * answered "now fix the capitals" to a formula whose capitals were right
 * (found by the rendered-page reading of November 11, 2026). No formula or
 * equation ends in a period, comma, or semicolon, so they are dropped from
 * the end of what was typed; a key is never passed through this.
 */
const withoutClosingPunctuation = (input) => String(input ?? '').replace(/[\s.,;]+$/u, '');

/** Grade a response under a chemistry form. */
export function checkChem(input, answer, { accept = '', form } = {}) {
  const typed = withoutClosingPunctuation(input);
  return form === 'equation' ? checkEquation(typed, answer) : checkFormula(typed, answer, { accept });
}

/** What the field shows a learner it has read, or '' when it reads nothing yet. */
export function previewChem(rawInput, form) {
  const input = withoutClosingPunctuation(rawInput);
  if (form === 'equation') {
    const equation = readEquation(input)[0];
    if (!equation) return '';
    return equation.sides.map((side) => side.map((readings) => prettySpecies(readings[0])).join(' + ')).join(equation.equilibrium ? ' ⇌ ' : ' ⟶ ');
  }
  const readings = readSpecies(input);
  return readings.length ? prettySpecies(readings[0]) : '';
}

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

/**
 * Why a KEY cannot be graded under its form, or null. The lint calls this: a
 * key is one unambiguous reading (charges written as superscripts), and an
 * equation key is balanced in atoms and charge with coefficients in lowest
 * terms.
 */
export function chemKeyProblem(answer, form, accept = '') {
  if (!CHEM_FORMS.includes(form)) return `answerForm "${form}" is not a text form — use ${CHEM_FORMS.map((f) => `"${f}"`).join(' or ')}`;
  if (form === 'formula') {
    for (const member of [answer, ...String(accept || '').split('|').map((m) => m.trim()).filter(Boolean)]) {
      const readings = readSpecies(member);
      if (!readings.length) return `${JSON.stringify(member)} does not read as a formula`;
      if (readings.length > 1) return `${JSON.stringify(member)} reads two ways — write its charge as a superscript (SO₄²⁻) or after ^ (SO4^2-)`;
      const [nuclide] = readings;
      if (nuclide.atomic !== null && nuclide.expected !== null && nuclide.atomic !== nuclide.expected) {
        return `${JSON.stringify(member)} prints the atomic number ${nuclide.atomic}, and ${Object.keys(nuclide.atoms)[0]} is element ${nuclide.expected}`;
      }
    }
    return null;
  }
  if (accept) return 'an equation takes no accept list: species order and state symbols are already free';
  const equations = readEquation(answer);
  if (!equations.length) return `${JSON.stringify(answer)} does not read as an equation with one arrow`;
  const equation = equations[0];
  if (equation.sides.some((side) => side.some((readings) => readings.length > 1))) {
    return 'a species reads two ways — write each charge as a superscript (Fe³⁺) or after ^ (Fe^3+)';
  }
  if (!sameTotals(sideTotals(equation.sides[0]), sideTotals(equation.sides[1]))) {
    return 'the equation is not balanced in atoms and charge';
  }
  const coefs = equation.sides.flat().map(([species]) => species.coef);
  if (coefs.every(Number.isInteger) && coefs.reduce(gcd) > 1) return 'the coefficients are not in lowest terms';
  return null;
}

/** The key's canonical spelling, for a gate comparing a page key with a source answer. */
export function chemCanon(text, form) {
  if (form === 'equation') {
    const equation = readEquation(text)[0];
    if (!equation) return null;
    // The arrow is part of the key: an equilibrium is another equation.
    return equation.sides.map((side) => side.map(([species]) => `${species.coef}${species.canon}`).sort().join(' + ')).join(equation.equilibrium ? ' <=> ' : ' -> ');
  }
  const readings = readSpecies(text);
  if (readings.length !== 1) return null;
  // A printed atomic number is part of what a key prints: `²³₁₁Na` and
  // `²³Na` are one nuclide and two keys.
  const [{ canon, atomic }] = readings;
  return atomic === null ? canon : canon.replace(/^\^(\d+)/, `^$1_${atomic}`);
}
