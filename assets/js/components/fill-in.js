/**
 * <fill-in> — free-response math question with instant, client-side feedback.
 * Vanilla Web Component for free-response grading. It keeps the interaction
 * framework-free and progressively enhances the build-time HTML shell.
 *
 * The shortcode (layouts/shortcodes/fillin.html) renders the static shell:
 *   <fill-in data-answer="\frac{5}{6}" data-answer-form="lowest-terms" ...>
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
import { plainMathText, speakableMathText } from '../lib/speakable-label.mjs';

let hintSequence = 0;

const MESSAGES = {
  idle: '',
  empty: 'Type an answer first.',
  invalid: 'Couldn’t read that as math — fill in any empty boxes.',
  // `form` carries no default: the wording always comes from
  // describeAnswerForm(), so it names the shape the exercise actually asks for.
  form: '',
  incorrect: 'Not quite — try again.',
  // `correct` is built per-instance (may include the answerDisplay).
};

// The `--ap-*` fallback hexes below duplicate assets/css/custom.css, which is
// the source of truth for the palette. They exist only for the moment before
// the stylesheet applies; keep them in step with custom.css when it changes.
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
    // The template always emits data-question, so this fallback should
    // never be reached. It used to reuse the PLACEHOLDER string, which would
    // have labelled the field "Your answer" — a description of the box, not of
    // what it is for. Name the control instead.
    const fieldLabel = plainMathText(this.dataset.question || '') || 'Math answer';
    field.setAttribute('aria-label', fieldLabel);
    // MathLive focuses a separate textbox inside its shadow root. Label that
    // sink when MathLive mounts so it has the same accessible name as the host.
    // Keep this listener for reconnects because MathLive can rebuild the sink.
    field.addEventListener('mount', () => this._labelKeyboardSink());
    // ...and again on focus, because MathLive BLANKS the sink's aria-label as
    // it takes focus — the same reaction it has to `readonly` below. Labelling
    // only at mount left the element that actually receives the caret unnamed
    // from the first click onward, and it never self-healed on blur: a screen
    // reader announced an unnamed edit box for the rest of the session, on the
    // site's primary exercise type. `focusin` (not `focus`) because the event
    // is retargeted to the host as it crosses the shadow boundary, and after a
    // microtask so the re-label lands after MathLive's own handler has run.
    field.addEventListener('focusin', () => {
      queueMicrotask(() => this._labelKeyboardSink());
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

      // Replace the interim label (raw TeX minus delimiters) with spoken
      // math now the serializer is here — BEFORE the Check button enables,
      // so "ready" implies the accessible name is final.
      try {
        const spoken = speakableMathText(
          this.dataset.question || '',
          mathlive.convertLatexToSpeakableText,
        );
        if (spoken) {
          this.field.setAttribute('aria-label', spoken);
          this._labelKeyboardSink();
        }
      } catch (error) {
        // The interim label is imperfect but present; never block grading
        // on speech serialization.
        console.warn('Fill-in spoken label failed', error);
      }

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
    // Shape is judged only after value equality, inside checkAnswer. An earlier
    // short-circuit here (the retired `requireExpanded`) reported 'form' before
    // the value was ever compared, so a learner with a WRONG answer containing
    // parentheses was told "That value is right". Keep the ordering in one
    // place.
    this._setStatus(
      this._check(latex, this.answer, { mode: this.answerMode, form: this.answerForm }),
      this._formMessage,
    );
  }

  /**
   * Give MathLive's shadow keyboard sink the same accessible name as the host.
   * MathLive focuses that separate span rather than the host, so without this
   * the thing that actually takes focus is unnamed.
   */
  _labelKeyboardSink() {
    const label = this.field?.getAttribute('aria-label');
    if (!label) return;
    this.field.shadowRoot
      ?.querySelector('[part~="keyboard-sink"]')
      ?.setAttribute('aria-label', label);
    this._labelShadowControls();
  }

  /**
   * MathLive's two icon buttons inside the shadow root — the virtual-keyboard
   * toggle and the menu — carry `role="button"` and no accessible name at
   * all: no text, no `aria-label`, no `title`. Their tooltip lives in a custom
   * `data-tooltip` attribute, which the accessible-name computation does not
   * read, so assistive tech announced an unnamed button. They are out of the
   * desktop tab order (`tabindex="-1"`), but they are visible 34x34 controls
   * that grow on touch, where the keyboard toggle is the only way to open the
   * math keyboard — exactly the population that needs the name. Borrow the
   * tooltip MathLive already localized rather than inventing a second string.
   */
  _labelShadowControls() {
    for (const part of ['virtual-keyboard-toggle', 'menu-toggle']) {
      const control = this.field?.shadowRoot?.querySelector(`[part~="${part}"]`);
      const tooltip = control?.getAttribute('data-tooltip');
      if (control && tooltip && !control.getAttribute('aria-label')) {
        control.setAttribute('aria-label', tooltip);
      }
    }
  }

  /**
   * Turn the answered field from an input into a rendered result.
   *
   * `readonly` alone leaves MathLive in an incoherent accessible state, and it
   * was never scanned because no axe run had ever graded an exercise first:
   *
   *   - the host `<math-field>` carries no role of its own, so once it is no
   *     longer editable its `aria-label` is a prohibited attribute and the
   *     name is dropped entirely;
   *   - MathLive BLANKS the shadow keyboard sink's `aria-label` in reaction to
   *     `readonly`, leaving a `role="textbox"` with no accessible name exactly
   *     where the learner had been typing.
   *
   * A finished exercise is a rendered answer, not an input: name the host with
   * `role="math"`, and take the sink out of the accessibility tree and the tab
   * order so the host is not a non-interactive element wrapping a focusable
   * one. Re-applied on the next frame because MathLive's own reaction to
   * `readonly` lands after this synchronous call.
   */
  _lockFieldForDisplay() {
    const apply = () => {
      if (!this.field) return;
      this.field.setAttribute('role', 'math');
      const sink = this.field.shadowRoot?.querySelector('[part~="keyboard-sink"]');
      if (!sink) return;
      sink.setAttribute('contenteditable', 'false');
      sink.removeAttribute('role');
      sink.removeAttribute('tabindex');
      // Every ARIA attribute MathLive put there describes a textbox
      // (`aria-autocomplete`, `aria-multiline`, the blanked `aria-label`).
      // With the role gone they are all prohibited, so drop the set rather
      // than chase the members one by one as MathLive changes them.
      for (const attribute of [...sink.attributes]) {
        if (attribute.name.startsWith('aria-')) sink.removeAttribute(attribute.name);
      }
    };
    apply();
    requestAnimationFrame(apply);
  }

  _setStatus(status, formMessage) {
    this.status = status;
    if (status === 'correct') {
      this.done = true;
      // Locking the field (or disabling the button) while focus is ANYWHERE
      // inside the component drops focus to <body>, stranding a keyboard or
      // screen-reader user at the top of the document right after they
      // succeed. An Enter-key submission leaves focus on the math-field host
      // (MathLive's shadow sink), not the button, so test containment — not
      // just the button — and capture it BEFORE readonly/lock tears the
      // focused sink down.
      const hadFocus = this.contains(document.activeElement);
      this.field.setAttribute('readonly', '');
      this._lockFieldForDisplay();
      this.feedback.innerHTML = this.answerDisplayHTML
        ? `Correct — ${this.answerDisplayHTML}.`
        : 'Correct!';
      if (hadFocus) {
        this.feedback.setAttribute('tabindex', '-1');
        this.feedback.focus();
      }
      this.button.disabled = true;
    } else {
      this.feedback.textContent = (status === 'form' && formMessage) || MESSAGES[status] || '';
    }
    this.feedback.style.color = COLOR[status] || 'inherit';
  }
}

if (!customElements.get('fill-in')) {
  customElements.define('fill-in', FillInElement);
}
