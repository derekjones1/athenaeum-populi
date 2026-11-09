/**
 * Accessible-name helpers for authored strings that mix prose with `$...$`
 * inline math (fill-in questions, multiple-choice options). Shared by the
 * components so the two never drift on how a label is derived.
 *
 * Two passes, matching the components' load order:
 *   - plainMathText()     — interim name: math delimiters stripped, raw TeX
 *                           may remain. Used only until the engine bundle
 *                           (MathLive) arrives.
 *   - speakableMathText() — final name: prose verbatim, each math segment
 *                           serialized to spoken math ("the fraction 42 over
 *                           54") by MathLive's convertLatexToSpeakableText.
 *
 * This module is tiny and dependency-free on purpose: it lives in the shared
 * components bundle, while the serializer it is handed stays in the lazy
 * engine bundle.
 */

// ---- chemistry ----------------------------------------------------------------
//
// MathLive does not read mhchem: convertLatexToSpeakableText of `\ce{CoCl2}`
// is the empty string, so "…the molarity of 6.52 g of $\ce{CoCl2}$" was named
// "…the molarity of 6.52 g of" — the compound the question is about, missing
// from the field's accessible name — and a multiple choice whose options
// were formulas kept its raw interim labels. A `\ce{…}` group is therefore
// spelled here, before the serializer sees the span, in the same Unicode a
// formula has in prose (`CoCl₂`, `SO₄²⁻`, `2H₂(g) + O₂(g) → 2H₂O(l)`), so a
// compound is voiced the same way in a sentence and in a label.

const SUBSCRIPT = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉' };
const SUPERSCRIPT = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', '+': '⁺', '-': '⁻' };
const subscript = (text) => [...text].map((c) => SUBSCRIPT[c] ?? c).join('');
const superscript = (text) => [...text].map((c) => SUPERSCRIPT[c] ?? c).join('');

const CE_ARROWS = [
  [/^<=>>?$|^<<=>$/, '⇌'],
  [/^<->$/, '↔'],
  [/^->$/, '→'],
  [/^<-$/, '←'],
];

/** One space-separated piece of a `\ce{…}` body, in Unicode. */
function ceToken(token) {
  // An arrow, with or without the conditions mhchem sets above and below it.
  const arrow = token.match(/^(<=>>?|<<=>|<->|->|<-)((?:\[[^\]]*\]){0,2})$/);
  if (arrow) {
    const glyph = CE_ARROWS.find(([re]) => re.test(arrow[1]))[1];
    const conditions = [...arrow[2].matchAll(/\[([^\]]*)\]/g)].map((m) => ceText(m[1])).filter(Boolean);
    return conditions.length ? `${glyph} (${conditions.join(', ')})` : glyph;
  }
  if (token === '^') return '↑';
  if (token === 'v') return '↓';
  if (token === '+' || token === '-' || token === '=') return token;
  let text = token;
  // A nuclide's leading mass and atomic numbers: `^{14}_{6}C`, `^{14}C`.
  let lead = '';
  const nuclide = text.match(/^\^\{?(\d+)\}?(?:_\{?(\d+)\}?)?(?=[A-Za-z])/);
  if (nuclide) {
    lead = superscript(nuclide[1]) + (nuclide[2] ? subscript(nuclide[2]) : '');
    text = text.slice(nuclide[0].length);
  }
  // A stoichiometric coefficient stays a plain number.
  const coefficient = text.match(/^(\d+(?:[./]\d+)?)(?=[A-Za-z([])/);
  if (coefficient) {
    lead = `${coefficient[1]}${lead}`;
    text = text.slice(coefficient[1].length);
  }
  return lead + text
    // an explicit charge, `^2-`, `^{3+}`, `^-`
    .replace(/\^\{?(\d*[+-])\}?/g, (m, charge) => superscript(charge))
    // a count after a symbol or a closing bracket
    .replace(/([A-Za-z)\]])(\d+)/g, (m, before, count) => before + subscript(count))
    // a bare sign closing the formula, or just before its state symbol, is
    // a charge: `Ag+`, `Cl-(aq)`, `MnO₄-`, `e-` (a bond, `CH3-CH3`, is not)
    .replace(/([A-Za-z₀-₉)\]])([+-])(?=$|\()/g, (m, before, sign) => before + superscript(sign))
    // a hydrate's dot
    .replace(/[*.](?=\d|[A-Z])/g, '·');
}

/** The body of one `\ce{…}` as Unicode text. */
function ceText(body) {
  return body
    .replace(/\\Delta(?![a-zA-Z])/g, 'Δ')
    .replace(/\\(?:text|mathrm)\s*\{([^{}]*)\}/g, '$1')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(ceToken)
    .join(' ');
}

/** Read the balanced `{…}` group opening at `open`; [inner, indexAfter] or null. */
function balancedGroup(text, open) {
  let depth = 0;
  for (let i = open; i < text.length; i += 1) {
    if (text[i] === '\\') { i += 1; continue; }
    if (text[i] === '{') depth += 1;
    else if (text[i] === '}') { depth -= 1; if (depth === 0) return [text.slice(open + 1, i), i + 1]; }
  }
  return null;
}

/**
 * One math span cut at its `\ce{…}` groups: `[{ chemistry, text }]`, the
 * chemistry pieces already in Unicode and the rest still TeX for the
 * serializer. A span with no `\ce` is one TeX piece.
 */
export function splitChemistry(latex) {
  const pieces = [];
  let rest = latex;
  for (;;) {
    const at = rest.search(/\\ce\s*\{/);
    if (at === -1) break;
    const group = balancedGroup(rest, rest.indexOf('{', at));
    if (!group) break;
    if (rest.slice(0, at).trim()) pieces.push({ chemistry: false, text: rest.slice(0, at) });
    pieces.push({ chemistry: true, text: ceText(group[0]) });
    rest = rest.slice(group[1]);
  }
  if (rest.trim()) pieces.push({ chemistry: false, text: rest });
  return pieces;
}

// Private-use stand-in so escaped money dollars (`\$81.50`) survive splitting
// on `$...$` math delimiters.
const ESCAPED_DOLLAR = '\uE000';

/** The text with math delimiters stripped — the pre-engine accessible name. */
export function plainMathText(text) {
  return text
    .replaceAll('\\$', ESCAPED_DOLLAR)
    .replaceAll('$', '')
    .replaceAll(ESCAPED_DOLLAR, '$')
    .trim();
}

/**
 * The text as a screen reader should hear it. A large share of the corpus'
 * prompts and options contain TeX control sequences (`\tfrac{2}{5}`,
 * `\cup`), which an accessible name must never expose.
 */
export function speakableMathText(text, convertLatexToSpeakableText) {
  const parts = text.replaceAll('\\$', ESCAPED_DOLLAR).split(/(\$[^$]*\$)/);
  const spoken = parts.map((part) => {
    if (part.length > 2 && part.startsWith('$') && part.endsWith('$')) {
      const latex = part.slice(1, -1).replaceAll(ESCAPED_DOLLAR, '\\$');
      // A formula is spelled here; everything else is the serializer's.
      return ` ${splitChemistry(latex).map((piece) => (
        piece.chemistry ? piece.text : convertLatexToSpeakableText(piece.text).trim()
      )).join(' ')} `;
    }
    return part.replaceAll(ESCAPED_DOLLAR, '$');
  });
  return spoken.join('').replace(/\s+/g, ' ').trim();
}
