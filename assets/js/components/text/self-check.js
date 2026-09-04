/**
 * <self-check> — free-response prompt with a model answer the learner
 * compares against. Nothing is graded and nothing is stored: a critical-
 * thinking question has no key a machine can hold, so the honest interaction
 * is write → reveal → judge yourself. The shortcode
 * (layouts/shortcodes/selfcheck.html) renders the whole thing statically —
 * the labelled <textarea>, a native <details> holding the model answer, and
 * two self-rating buttons that ship natively `disabled` — so without JS the
 * question, the writing space, and the reveal all still work. This element
 * only enables the rating buttons (and the rubric checkboxes, when the item
 * carries `===CHECKS===` checkpoints) and writes their result to the live
 * region — with a "You checked N of M points" count when a rubric exists.
 */
import { hintSlotHTML, mountHintToggle } from '../../lib/shared/hint-toggle.mjs';
import { TONE } from '../../lib/shared/colors.mjs';

const MESSAGES = {
  correct: 'Marked as correct.',
  review: 'Marked for review — reread the section, then try the question again.',
};

// Status → shared feedback tone (colors.mjs owns the palette fallbacks).
const COLOR = {
  correct: TONE.success,
  review: TONE.warning,
};

class SelfCheckElement extends HTMLElement {
  connectedCallback() {
    if (this._built) return;
    this._built = true;

    const wrap = this.querySelector('.ap-selfcheck');
    this.feedback = this.querySelector('.ap-selfcheck-feedback');
    this.marks = Array.from(this.querySelectorAll('.ap-selfcheck-mark'));

    this.marks.forEach((btn) => {
      btn.addEventListener('click', () => this._mark(btn));
      btn.disabled = false;
    });

    // Rubric checkpoints ship natively `disabled` like the marks: without
    // JS the rubric still reads as a checklist to compare against, and with
    // it each clause is individually tickable. Nothing is stored.
    this.checkpoints = Array.from(this.querySelectorAll('.ap-selfcheck-checkpoint input'));
    this.checkpoints.forEach((box) => { box.disabled = false; });

    const hintTpl = this.querySelector('template[data-slot="hint"]');
    if (wrap) mountHintToggle(wrap, hintSlotHTML(this));
  }

  _mark(btn) {
    const verdict = btn.dataset.verdict;
    this.marks.forEach((other) => other.setAttribute('aria-pressed', String(other === btn)));
    if (this.feedback) {
      let message = MESSAGES[verdict] || '';
      if (this.checkpoints.length) {
        const checked = this.checkpoints.filter((box) => box.checked).length;
        message += ` You checked ${checked} of ${this.checkpoints.length} points.`;
      }
      this.feedback.textContent = message;
      this.feedback.style.color = COLOR[verdict] || 'inherit';
    }
  }
}

if (!customElements.get('self-check')) {
  customElements.define('self-check', SelfCheckElement);
}
