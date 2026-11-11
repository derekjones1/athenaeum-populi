/**
 * <ap-followup> — items that appear once the item before them is answered.
 *
 * Some exercises ask a second thing of only SOME of their parts: "state
 * whether the compound is ionic or covalent; if it is ionic, write the
 * symbols for the ions" (Chemistry 2.6). Rendered flat, the ion items stand
 * under the ionic compounds alone, and their being there answers the first
 * question before it is asked. The shortcode (layouts/shortcodes/followup.html)
 * wraps those further items; this element keeps them out of sight until the
 * item directly before it — the gate — reports a correct answer
 * (lib/shared/item-events.mjs), then shows them and says so in the gate's own
 * live region, where the learner's attention already is. Focus is not moved.
 *
 * It fails open. With no gate to wait for (the content lint forbids that, but
 * a page is not the lint), the items are simply shown: an item that can never
 * be reached is worse than a leak. Before this bundle runs, and without
 * JavaScript at all, the stylesheet hides the element
 * (`ap-followup:not(:defined)`): the items inside could not be answered then
 * anyway, and showing them would be the leak again.
 */
import { ITEM_CORRECT } from '../../lib/shared/item-events.mjs';

const GATES = 'multiple-choice, text-in, fill-in';
const ITEMS = `${GATES}, self-check, sort-bins, graph-plot`;
const COUNT_WORDS = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

class FollowUpElement extends HTMLElement {
  connectedCallback() {
    if (this._wired) return;
    this._wired = true;
    const gate = this._gate();
    if (!gate) {
      console.warn('<ap-followup> has no graded item before it; its items are shown', this);
      return;
    }
    this.hidden = true;
    gate.addEventListener(ITEM_CORRECT, (event) => {
      // An item inside another element's subtree bubbles through it; only the
      // gate's own verdict opens this.
      if (event.target !== gate) return;
      this._reveal(gate);
    });
  }

  /** The graded item directly before this element — or, should Markdown ever
   * wrap it, the last one inside the element directly before. */
  _gate() {
    const before = this.previousElementSibling;
    if (!before) return null;
    if (before.matches(GATES)) return before;
    const inside = before.querySelectorAll(GATES);
    return inside.length ? inside[inside.length - 1] : null;
  }

  _reveal(gate) {
    if (!this.hidden) return;
    this.hidden = false;
    const count = this.querySelectorAll(ITEMS).length;
    const status = gate.querySelector('[role="status"]');
    if (!status || status.querySelector('.ap-followup-note')) return;
    const note = document.createElement('span');
    note.className = 'ap-followup-note';
    note.textContent = count === 1
      ? ' One more question follows.'
      : ` ${COUNT_WORDS[count - 1] ?? count} more questions follow.`;
    status.append(note);
  }
}

if (!customElements.get('ap-followup')) {
  customElements.define('ap-followup', FollowUpElement);
}
