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
import { mountHintToggle } from '../../lib/shared/hint-toggle.mjs';
import { TONE } from '../../lib/shared/colors.mjs';
import { focusGuard } from '../../lib/shared/focus.mjs';


const MESSAGES = {
  idle: '',
  empty: 'Type an answer first.',
  incorrect: 'Not quite — try again.',
};

// Status → shared feedback tone (colors.mjs owns the palette fallbacks).
const COLOR = {
  correct: TONE.success,
  incorrect: TONE.error,
  empty: TONE.muted,
};

class TextInElement extends HTMLElement {
  connectedCallback() {
    if (this._built) return;
    this._built = true;

    this.answer = this.dataset.answer || '';
    this.accept = this.dataset.accept || '';
    this.status = 'idle';
    this.done = false;

    const wrap = this.querySelector('.ap-textin');
    this.wrap = wrap;

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
    field.placeholder = 'Your answer';
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

    mountHintToggle(wrap, this.hintHTML);

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
      // Capture focus containment before the lock, then hand focus to the
      // verdict so a keyboard or screen-reader user stays put (focus.mjs).
      const restoreFocus = focusGuard(this);
      this.field.readOnly = true;
      this.field.setAttribute('aria-readonly', 'true');
      this.feedback.textContent = 'Correct!';
      restoreFocus(this.feedback);
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
