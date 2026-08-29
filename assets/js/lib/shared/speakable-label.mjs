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
      return ` ${convertLatexToSpeakableText(latex).trim()} `;
    }
    return part.replaceAll(ESCAPED_DOLLAR, '$');
  });
  return spoken.join('').replace(/\s+/g, ' ').trim();
}
