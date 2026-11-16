/**
 * What a heat question asks for: an amount, or a signed quantity.
 *
 * "The question's words decide a heat key's sign" (docs/subjects/chemistry.md,
 * chapter 5). "How much heat is produced / released / evolved / given off"
 * asks an AMOUNT, which is positive: the verb already says which way the heat
 * goes. "q", "ΔH", "the enthalpy change", "the heat involved" ask a SIGNED
 * quantity. Chapter 5's benzene item was keyed −39.0 under "How much heat was
 * produced" because its source solution wrote q_rxn = −39.0 kJ, and three
 * more keys of 5.3 carried the sign of the enthalpy change they were read
 * from.
 *
 * Two readers share this: the content lint (a negative key on an amount, a
 * hint that leads to one) and the run-facts screen
 * (tools/source/chemistry-shapes.mjs --figures), which reads the SOURCE's
 * stem and key before a page exists.
 *
 * Only a clause that ASKS for the heat is an amount. "…3.14 kJ of heat are
 * produced. Determine the enthalpy change…" states its heat and asks ΔH, and
 * "the energy … of the photon produced" asks about a photon.
 */

const VERB = '(?:produced|released|evolved|given off|liberated)';
const AMOUNT = [
  // "How much heat is produced by …", "How much heat, in kilojoules, was released …"
  new RegExp(`\\bhow much (?:heat|energy|thermal energy)\\b[^.?!]{0,40}?\\b(?:is|was|are|were|will be|would be|can be)\\s+${VERB}\\b`, 'i'),
  // "How many kilojoules of heat will be released when …"
  new RegExp(`\\bhow many (?:kilo)?(?:joules|calories)\\b[^.?!]{0,20}?\\bof (?:heat|energy)\\b[^.?!]{0,30}?\\b${VERB}\\b`, 'i'),
  // "Calculate the heat released when …", "determine the amount of heat evolved …"
  new RegExp(`\\b(?:calculate|determine|find|estimate|compute)\\b[^.?!]{0,30}?\\b(?:the )?(?:(?:amount|quantity) of )?(?:heat|energy)\\b,? (?:that (?:is|was|will be) )?${VERB}\\b`, 'i'),
];
// A source stem prints the symbol plain ("What is q for the reaction?"); a page sets it in math.
const SIGNED = /\b(?:heat|energy)\b[^.?!]{0,25}\binvolved\b|\\Delta\s*H|Δ\s*H|\benthalp(?:y|ies) (?:change|of)\b|\bchange in enthalpy\b|\$q(?:_|\$|\b)|(?<![\w$])q(?![\w’'])/i;
// The closing sentence a page adds says which of two asks this item is.
const CLOSING_SIGNED = /^Enter\b[^.]*(?:\benthalpy\b|\\Delta\s*H|Δ\s*H|\$q(?:_|\$|\b))/i;

/**
 * `'amount'` when the question asks how much heat is produced, released,
 * evolved, or given off; `'signed'` when it asks q, ΔH, an enthalpy change,
 * or the heat involved; otherwise null.
 */
export function heatAsk(question) {
  const text = String(question ?? '').replace(/\s+/g, ' ').trim();
  if (!text) return null;
  const closing = text.split(/(?<=[.?!][)”’"]?)\s+/).pop();
  if (CLOSING_SIGNED.test(closing)) return 'signed';
  if (AMOUNT.some((pattern) => pattern.test(text))) return 'amount';
  return SIGNED.test(text) ? 'signed' : null;
}

/** Is this key, as a page or a source solution writes it, a negative number? */
export const isNegativeKey = (answer) => /^\s*(?:\$\s*)?[-−–]\s*(?:\d|\.\d)/.test(String(answer ?? ''));

/**
 * Why an amount item's hint leads to a negative answer — or null. A hint may
 * not do the item's arithmetic, so its equation cannot be evaluated; what can
 * be read is the form the chapter 5 ruling gives it: a hint that writes a
 * relation with a negative right side ("q_rxn = −q_soln") closes by saying
 * the heat produced is the size of that quantity, and no hint on an amount
 * item ends at a negative number.
 */
export function amountHintProblem(hint) {
  const text = String(hint ?? '');
  const maths = [...text.matchAll(/\$([^$]+)\$/g)].map((match) => match[1]);
  const negated = maths.find((tex) => /=\s*[-−]/.test(tex));
  if (negated && !/\bis the size of\b/i.test(text)) {
    return `it writes \`$${negated.slice(0, 50)}$\`, which comes out negative, and never says the heat asked for is the size of that quantity`;
  }
  const ending = /[-−–]\s?\d[\d.,]*(?:\s*\\times\s*10\^\{?[-−]?\d+\}?)?\s*\$?\s*(?:k?J(?:\/mol)?|k?cal)?\s*\.?\s*$/.exec(text);
  if (ending) return `it ends at a negative number ("${ending[0].trim()}")`;
  return null;
}
