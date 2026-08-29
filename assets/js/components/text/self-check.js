/**
 * <self-check> — free-response prompt with a model answer the learner
 * compares against. Nothing is graded and nothing is stored: a critical-
 * thinking question has no key a machine can hold, so the honest interaction
 * is write → reveal → judge yourself. The shortcode
 * (layouts/shortcodes/selfcheck.html) renders the whole thing statically —
 * the labelled <textarea>, a native <details> holding the model answer, and
 * two self-rating buttons that ship natively `disabled` — so without JS the
 * question, the writing space, and the reveal all still work. This element
 * only enables the rating buttons and writes their result to the live region.
 */
let hintSequence = 0;

const MESSAGES = {
  correct: 'Marked as correct.',
  review: 'Marked for review — reread the section, then try the question again.',
};

const COLOR = {
  correct: 'var(--ap-success, #1a7f37)',
  review: 'var(--ap-warning, #9a6700)',
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

    const hintTpl = this.querySelector('template[data-slot="hint"]');
    if (hintTpl && wrap) {
      const hintId = `ap-selfcheck-hint-${++hintSequence}`;
      const hintBtn = document.createElement('button');
      hintBtn.type = 'button';
      hintBtn.className = 'ap-fillin-hint-toggle';
      hintBtn.textContent = 'Show hint';
      hintBtn.setAttribute('aria-expanded', 'false');
      hintBtn.setAttribute('aria-controls', hintId);
      const hint = document.createElement('p');
      hint.id = hintId;
      hint.className = 'ap-fillin-hint';
      hint.hidden = true;
      hint.innerHTML = hintTpl.innerHTML;
      hintBtn.addEventListener('click', () => {
        const show = hint.hidden;
        hint.hidden = !show;
        hintBtn.textContent = show ? 'Hide hint' : 'Show hint';
        hintBtn.setAttribute('aria-expanded', String(show));
      });
      wrap.append(hintBtn, hint);
    }
  }

  _mark(btn) {
    const verdict = btn.dataset.verdict;
    this.marks.forEach((other) => other.setAttribute('aria-pressed', String(other === btn)));
    if (this.feedback) {
      this.feedback.textContent = MESSAGES[verdict] || '';
      this.feedback.style.color = COLOR[verdict] || 'inherit';
    }
  }
}

if (!customElements.get('self-check')) {
  customElements.define('self-check', SelfCheckElement);
}
