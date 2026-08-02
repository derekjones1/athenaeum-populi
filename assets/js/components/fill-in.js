/**
 * <fill-in> — free-response math question with instant, client-side feedback.
 * Vanilla Web Component for free-response grading. It keeps the interaction
 * framework-free and progressively enhances the build-time HTML shell.
 *
 * The shortcode (layouts/shortcodes/fillin.html) renders the static shell:
 *   <fill-in data-answer="\frac{5}{6}" data-require-expanded="false" ...>
 *     <div class="ap-fillin">
 *       <p class="ap-fillin-question"><!-- build-time KaTeX --></p>
 *       <template data-slot="answer-display">…</template>
 *       <template data-slot="hint">…</template>
 *     </div>
 *   </fill-in>
 * This element upgrades that shell with a MathLive field, a Check button and
 * feedback. If JS never loads, the question still renders — progressive
 * enhancement.
 *
 * MathLive and the answer checker (which pulls in the Compute Engine, ~1.9 MB)
 * live in a SEPARATE bundle (assets/js/fillin-engine.js). This element loads it
 * at runtime by URL — injected at build time via js.Build `params` (@params) —
 * so it never touches the shared components bundle and loads only on pages that
 * actually use a <fill-in>.
 */
import { engineUrl } from '@params';

let hintSequence = 0;

const MESSAGES = {
  idle: '',
  empty: 'Type an answer first.',
  invalid: 'Couldn’t read that as math — fill in any empty boxes.',
  // The requireExpanded default. An exercise with an `answerForm` overrides it
  // with a message naming the shape that form asks for.
  form: 'Expand your answer fully — no parentheses.',
  incorrect: 'Not quite — try again.',
  // `correct` is built per-instance (may include the answerDisplay).
};

const COLOR = {
  correct: 'var(--ap-success, #1a7f37)',
  incorrect: 'var(--ap-error, #b42318)',
  invalid: 'var(--ap-error, #b42318)',
  form: 'var(--ap-warning, #9a6700)',
  empty: 'var(--ap-muted, #6f6e69)',
};

class FillInElement extends HTMLElement {
  connectedCallback() {
    if (this._built) return;
    this._built = true;

    this.answer = this.dataset.answer || '';
    this.answerMode = this.dataset.answerMode || 'expression';
    this.answerForm = this.dataset.answerForm || '';
    this.requireExpanded = this.dataset.requireExpanded === 'true';
    this.placeholder = this.dataset.placeholder || 'Your answer';
    this.status = 'idle';
    this.done = false;

    const wrap = this.querySelector('.ap-fillin');
    this.wrap = wrap;

    // Pull optional slotted content out of <template>s.
    const adTpl = this.querySelector('template[data-slot="answer-display"]');
    this.answerDisplayHTML = adTpl ? adTpl.innerHTML : '';
    const hintTpl = this.querySelector('template[data-slot="hint"]');
    this.hintHTML = hintTpl ? hintTpl.innerHTML : '';

    // --- input row: math-field + Check button -----------------------------
    const form = document.createElement('form');
    form.className = 'ap-fillin-row';

    const field = document.createElement('math-field');
    field.className = 'ap-fillin-field';
    const fieldLabel = this.dataset.questionPlain || 'Your answer';
    field.setAttribute('aria-label', fieldLabel);
    // MathLive focuses a separate textbox inside its shadow root. Label that
    // sink when MathLive mounts so it has the same accessible name as the host.
    // Keep this listener for reconnects because MathLive can rebuild the sink.
    field.addEventListener('mount', () => {
      field.shadowRoot
        ?.querySelector('[part~="keyboard-sink"]')
        ?.setAttribute('aria-label', field.getAttribute('aria-label') || fieldLabel);
    });
    // MathLive reads the placeholder as LaTeX \text{...}.
    field.setAttribute('placeholder', `\\text{${this.placeholder}}`);
    this.field = field;

    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'ap-fillin-check';
    button.textContent = 'Check';
    button.disabled = true; // until MathLive + checker load
    this.button = button;

    form.append(field, button);

    const feedback = document.createElement('p');
    feedback.className = 'ap-fillin-feedback';
    feedback.setAttribute('role', 'status');
    feedback.setAttribute('aria-live', 'polite');
    this.feedback = feedback;

    wrap.append(form, feedback);

    // --- optional hint toggle --------------------------------------------
    if (this.hintHTML) {
      const hintId = `ap-fillin-hint-${++hintSequence}`;
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

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._runCheck();
    });

    this._loadEngine();
  }

  async _loadEngine() {
    // Runtime import of the separate engine bundle (MathLive + grader). The
    // URL is a build-time constant, so esbuild leaves this as a real import().
    try {
      const engine = await import(engineUrl);
      const { mathlive, checkAnswer, ce, describeAnswerForm } = engine;
      // The form requirement is phrased next to the predicates that enforce
      // it, so the feedback and the rule can never drift apart.
      if (this.answerForm) this._formMessage = describeAnswerForm(this.answerForm);
      // No sound assets are shipped — silence the virtual keyboard.
      mathlive.MathfieldElement.soundsDirectory = null;
      // Field and grader share ONE Compute Engine so they can never disagree
      // about how input parses.
      mathlive.MathfieldElement.computeEngine = ce;
      this._check = checkAnswer;

      // Enter inside the field (incl. virtual keyboard) fires an input event
      // with data "insertLineBreak" — route it to a check.
      this.field.addEventListener('input', (e) => {
        if (e.data === 'insertLineBreak') {
          this._runCheck();
          return;
        }
        if (this.status !== 'idle') this._setStatus('idle');
      });

      this.button.disabled = false;
    } catch (error) {
      console.error('Fill-in exercise failed to load', error);
      this.feedback.setAttribute('role', 'alert');
      this.feedback.textContent = 'This exercise could not load. Please reload the page and try again.';
      this.feedback.style.color = COLOR.invalid;
    }
  }

  _runCheck() {
    if (this.done || !this._check) return;
    const latex = this.field.value ?? '';
    if (this.requireExpanded && latex.includes('(')) {
      this._setStatus('form', MESSAGES.form);
      return;
    }
    this._setStatus(
      this._check(latex, this.answer, { mode: this.answerMode, form: this.answerForm }),
      this._formMessage,
    );
  }

  _setStatus(status, formMessage) {
    this.status = status;
    if (status === 'correct') {
      this.done = true;
      this.field.setAttribute('readonly', '');
      this.button.disabled = true;
      this.feedback.innerHTML = this.answerDisplayHTML
        ? `Correct — ${this.answerDisplayHTML}.`
        : 'Correct!';
    } else {
      this.feedback.textContent = (status === 'form' && formMessage) || MESSAGES[status] || '';
    }
    this.feedback.style.color = COLOR[status] || 'inherit';
  }
}

if (!customElements.get('fill-in')) {
  customElements.define('fill-in', FillInElement);
}
