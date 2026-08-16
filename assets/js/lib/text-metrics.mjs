/**
 * Measured text metrics for the figure font stack
 * ("Helvetica, Arial, sans-serif" at any size).
 *
 * Figures place and fit labels from these advance widths instead of a flat
 * per-character estimate. The table is per-character advances in units per
 * 1000 em, measured in a real browser (canvas measureText) against
 * Liberation Sans, which is metric-compatible with Arial; Helvetica shares
 * these advances for the Latin range. Regenerate with tools/gen-metrics.mjs
 * if the font stack ever changes.
 *
 * Two deliberate margins keep the numbers honest on platforms we did not
 * measure:
 *
 * - `measureTextWidth` is the EXACT advance sum — use it for placement
 *   scoring, where symmetric accuracy matters (a padded number would push
 *   labels off their natural side).
 * - `fitTextWidth` multiplies by FIT_SAFETY for the viewBox fit pass — a
 *   platform whose sans-serif fallback runs wider than Arial (DejaVu is the
 *   worst common case at ≈8%) must still land inside the expanded viewBox.
 *   The browser component adds a live getBBox() net on top for anything
 *   more exotic.
 */

const W = {
  ' ': 278, '!': 278, '"': 355, '#': 556, '$': 556, '%': 889, '&': 667,
  "'": 191, '(': 333, ')': 333, '*': 389, '+': 584, ',': 278, '-': 333,
  '.': 278, '/': 278, '0': 556, '1': 556, '2': 556, '3': 556, '4': 556,
  '5': 556, '6': 556, '7': 556, '8': 556, '9': 556, ':': 278, ';': 278,
  '<': 584, '=': 584, '>': 584, '?': 556, '@': 1015, 'A': 667, 'B': 667,
  'C': 722, 'D': 722, 'E': 667, 'F': 611, 'G': 778, 'H': 722, 'I': 278,
  'J': 500, 'K': 667, 'L': 556, 'M': 833, 'N': 722, 'O': 778, 'P': 667,
  'Q': 778, 'R': 722, 'S': 667, 'T': 611, 'U': 722, 'V': 667, 'W': 944,
  'X': 667, 'Y': 667, 'Z': 611, '[': 278, '\\': 278, ']': 278, '^': 469,
  '_': 556, '`': 333, 'a': 556, 'b': 556, 'c': 500, 'd': 556, 'e': 556,
  'f': 278, 'g': 556, 'h': 556, 'i': 222, 'j': 222, 'k': 500, 'l': 222,
  'm': 833, 'n': 556, 'o': 556, 'p': 556, 'q': 556, 'r': 333, 's': 500,
  't': 278, 'u': 556, 'v': 500, 'w': 722, 'x': 500, 'y': 500, 'z': 500,
  '{': 334, '|': 260, '}': 334, '~': 584,
  '°': 400, '±': 549, '²': 333, '³': 333, '·': 333, '×': 584, '÷': 549,
  'Δ': 668, 'θ': 556, 'π': 690, '–': 556, '—': 1000, '…': 1000,
  '′': 188, '″': 354, '←': 1000, '→': 1000, '∈': 871, '−': 584,
  '√': 549, '∞': 713, '∩': 719, '∪': 732, '≠': 549, '≤': 549, '≥': 549,
}

/** Unmeasured characters assume a wide 0.7 em so they can only over-reserve. */
const DEFAULT_ADVANCE = 700

/** Headroom for wider sans-serif fallbacks (DejaVu ≈ +8%) in the fit pass. */
export const FIT_SAFETY = 1.1

/** Exact advance-sum width of `text` at `fontSize` px (placement scoring). */
export function measureTextWidth(text, fontSize, { italic = false } = {}) {
  let units = 0
  for (const ch of String(text)) units += W[ch] ?? DEFAULT_ADVANCE
  // Faux-oblique advances match the upright ones; a true italic cut runs a
  // hair wider and overhangs its last glyph, so reserve a small slant pad.
  if (italic) units += 120
  return (units / 1000) * fontSize
}

/** Conservative width for the viewBox fit pass. */
export function fitTextWidth(text, fontSize, opts) {
  return measureTextWidth(text, fontSize, opts) * FIT_SAFETY
}

/**
 * Conservative [x0, y0, x1, y1] box of a rendered `<text>` element from its
 * attributes, for the fit pass. `y` is the baseline; ascent/descent bounds
 * (0.9 em over, 0.25 em under) cover the stack's real values with room.
 */
export function fitTextBox({ x, y, text, fontSize, textAnchor, italic }) {
  const size = Number(fontSize)
  const w = fitTextWidth(text, size, { italic })
  const X = Number(x), Y = Number(y)
  const x0 = textAnchor === 'middle' ? X - w / 2 : textAnchor === 'end' ? X - w : X
  return [x0, Y - 0.9 * size, x0 + w, Y + 0.25 * size]
}
