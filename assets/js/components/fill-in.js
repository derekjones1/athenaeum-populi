/**
 * <fill-in> — free-response math question with instant, client-side feedback.
 * Vanilla Web Component port of the old FillIn.jsx (React). Same grading, same
 * UX, no framework.
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
 * actually use a <fill-in>, exactly as the old site did.
 */
import { engineUrl } from '@params';

const MESSAGES = {
  idle: '',
  empty: 'Type an answer first.',
  invalid: 'Couldn’t read that as math — fill in any empty boxes.',
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
    field.setAttribute('aria-label', this.dataset.questionPlain || 'Your answer');
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
      const hintBtn = document.createElement('button');
      hintBtn.type = 'button';
      hintBtn.className = 'ap-fillin-hint-toggle';
      hintBtn.textContent = 'Show hint';
      hintBtn.setAttribute('aria-expanded', 'false');

      const hint = document.createElement('p');
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
    const engine = await import(engineUrl);
    const { mathlive, checkAnswer, ce } = engine;
    // No sound assets are shipped — silence the virtual keyboard.
    mathlive.MathfieldElement.soundsDirectory = null;
    // Field and grader share ONE Compute Engine so they can never disagree
    // about how input parses.
    mathlive.MathfieldElement.computeEngine = ce;
    this._check = checkAnswer;

    // Enter inside the field (incl. virtual keyboard) fires an input event
    // with data "insertLineBreak" — route it to a check, like the old site.
    this.field.addEventListener('input', (e) => {
      if (e.data === 'insertLineBreak') {
        this._runCheck();
        return;
      }
      if (this.status !== 'idle') this._setStatus('idle');
    });

    this.button.disabled = false;
  }

  _runCheck() {
    if (this.done || !this._check) return;
    const latex = this.field.value ?? '';
    if (this.requireExpanded && latex.includes('(')) {
      this._setStatus('form');
      return;
    }
    this._setStatus(this._check(latex, this.answer));
  }

  _setStatus(status) {
    this.status = status;
    if (status === 'correct') {
      this.done = true;
      this.field.setAttribute('readonly', '');
      this.button.disabled = true;
      this.feedback.innerHTML = this.answerDisplayHTML
        ? `Correct — ${this.answerDisplayHTML}.`
        : 'Correct!';
    } else {
      this.feedback.textContent = MESSAGES[status] || '';
    }
    this.feedback.style.color = COLOR[status] || 'inherit';
  }
}

if (!customElements.get('fill-in')) {
  customElements.define('fill-in', FillInElement);
}
