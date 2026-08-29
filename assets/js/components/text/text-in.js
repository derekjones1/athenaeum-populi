/**
 * <text-in> — short TEXT answer (a term, a name, a short phrase) with instant,
 * client-side feedback. The word-grading counterpart of <fill-in>: the math
 * component cannot take words at all (MathLive parses `undefined` as
 * `def\in ed`), so a vocabulary item is graded here by normalized exact match
 * against the keyed answer and its author-listed alternates
 * (assets/js/lib/text/check-text.mjs). No MathLive, no Compute Engine, no lazy
 * bundle: everything this element needs is in the shared components bundle.
 *
 * The shortcode (layouts/shortcodes/textin.html) renders the static shell:
 *   <text-in data-answer="cell" data-accept="cells" data-question="…">
 *     <div class="ap-textin">
 *       <p class="ap-textin-question">…</p>
 *       <noscript>…</noscript>
 *       <template data-slot="answer-display">…</template>
 *       <template data-slot="hint">…</template>
 *     </div>
 *   </text-in>
 * and this element adds the input row, feedback, and hint toggle. The
 * accessibility contract is <fill-in>'s: a named control before it is
 * interactive, `role=status` feedback, and focus retained on success.
 */
import { checkText } from '../../lib/text/check-text.mjs';
import { plainMathText } from '../../lib/shared/speakable-label.mjs';

let hintSequence = 0;

const MESSAGES = {
  idle: '',
  empty: 'Type an answer first.',
  incorrect: 'Not quite — try again.',
};

// The `--ap-*` fallback hexes duplicate assets/css/custom.css (the palette's
// source of truth) for the moment before the stylesheet applies.
const COLOR = {
  correct: 'var(--ap-success, #1a7f37)',
  incorrect: 'var(--ap-error, #b42318)',
  empty: 'var(--ap-muted, #6f6e69)',
};

class TextInElement extends HTMLElement {
  connectedCallback() {
    if (this._built) return;
    this._built = true;

    this.answer = this.dataset.answer || '';
    this.accept = this.dataset.accept || '';
    this.placeholder = this.dataset.placeholder || 'Your answer';
    this.status = 'idle';
    this.done = false;

    const wrap = this.querySelector('.ap-textin');
    this.wrap = wrap;

    const adTpl = this.querySelector('template[data-slot="answer-display"]');
    this.answerDisplayHTML = adTpl ? adTpl.innerHTML : '';
    const hintTpl = this.querySelector('template[data-slot="hint"]');
    this.hintHTML = hintTpl ? hintTpl.innerHTML : '';

    const form = document.createElement('form');
    form.className = 'ap-textin-row';

    const field = document.createElement('input');
    field.type = 'text';
    field.className = 'ap-textin-field';
    field.autocomplete = 'off';
    field.autocapitalize = 'off';
    field.spellcheck = false;
    field.placeholder = this.placeholder;
    // The question names the control (a description of the box — "Your
    // answer" — is not a name). Questions are prose by lint, so the plain
    // form is the final name; no speech serializer is needed.
    field.setAttribute('aria-label', plainMathText(this.dataset.question || '') || 'Text answer');
    field.addEventListener('input', () => {
      if (this.status !== 'idle') this._setStatus('idle');
    });
    this.field = field;

    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'ap-textin-check';
    button.textContent = 'Check';
    this.button = button;

    form.append(field, button);

    const feedback = document.createElement('p');
    feedback.className = 'ap-textin-feedback';
    feedback.setAttribute('role', 'status');
    feedback.setAttribute('aria-live', 'polite');
    this.feedback = feedback;

    wrap.append(form, feedback);

    if (this.hintHTML) {
      const hintId = `ap-textin-hint-${++hintSequence}`;
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
      hint.innerHTML = this.hintHTML;
      hintBtn.addEventListener('click', () => {
        const show = hint.hidden;
        hint.hidden = !show;
        hintBtn.textContent = show ? 'Hide hint' : 'Show hint';
        hintBtn.setAttribute('aria-expanded', String(show));
      });
      wrap.append(hintBtn, hint);
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._runCheck();
    });
  }

  _runCheck() {
    if (this.done) return;
    this._setStatus(checkText(this.field.value, this.answer, { accept: this.accept }));
  }

  _setStatus(status) {
    this.status = status;
    if (status === 'correct') {
      this.done = true;
      // Disabling the control while focus sits inside the component would
      // drop focus to <body>; capture containment first, then move focus to
      // the feedback so a keyboard or screen-reader user stays put.
      const hadFocus = this.contains(document.activeElement);
      this.field.readOnly = true;
      this.field.setAttribute('aria-readonly', 'true');
      this.feedback.innerHTML = this.answerDisplayHTML
        ? `Correct — ${this.answerDisplayHTML}.`
        : 'Correct!';
      if (hadFocus) {
        this.feedback.setAttribute('tabindex', '-1');
        this.feedback.focus();
      }
      this.button.disabled = true;
    } else {
      this.feedback.textContent = MESSAGES[status] || '';
    }
    this.feedback.style.color = COLOR[status] || 'inherit';
  }
}

if (!customElements.get('text-in')) {
  customElements.define('text-in', TextInElement);
}
