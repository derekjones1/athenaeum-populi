/**
 * <multiple-choice> — framework-free single-answer question with instant
 * feedback. Grading is a plain comparison (string in text mode, index in
 * graph mode), so this lives in the shared
 * components bundle. Options are already rendered (build-time); this class just
 * wires clicks, feedback, the hint toggle, and spoken option labels.
 *
 * Spoken labels: option buttons render with an interim aria-label (the raw
 * option minus `$` delimiters, from the shortcode). For options that contain
 * math, that interim name is raw TeX (`\cup`, `\tfrac{2}{5}`), so the
 * component swaps in MathLive's spoken serialization. The serializer lives in
 * the lazy fill-in engine bundle; importing it here is effectively free
 * because every page with a <multiple-choice> also has a <fill-in> (the
 * import dedupes to the one already in flight). A future MC-only page would
 * pull the engine just for labels — acceptable, but worth noticing in review.
 * Prose-only questions never trigger the import.
 */
import { engineUrl } from '@params';
import { plainMathText, speakableMathText } from '../lib/speakable-label.mjs';

// The `--ap-*` fallback hexes below duplicate assets/css/custom.css, which is
// the source of truth for the palette. They exist only for the moment before
// the stylesheet applies; keep them in step with custom.css when it changes.
const COLOR = {
  correct: 'var(--ap-success, #1a7f37)',
  incorrect: 'var(--ap-error, #b42318)',
};
let hintSequence = 0;

class MultipleChoiceElement extends HTMLElement {
  connectedCallback() {
    if (this._built) return;
    this._built = true;

    this.mode = this.dataset.mode || 'text';
    this.answer = this.dataset.answer;
    this.answerIndex = this.dataset.answerIndex;
    this.done = false;

    const wrap = this.querySelector('.ap-mc');
    this.feedback = this.querySelector('.ap-mc-feedback');
    this.options = Array.from(this.querySelectorAll('.ap-mc-option'));

    this.options.forEach((btn) => {
      btn.addEventListener('click', () => this._choose(btn));
    });

    // `data-speech` records whether the accessible names settled: "ready"
    // means spoken math was substituted for any raw TeX; "failed" means the
    // engine import broke and interim (TeX-bearing) labels remain. The two
    // are distinct so a test that waits for settling can still assert the
    // page actually reached "ready" — a single flag would mask the failure.
    this.group = this.querySelector('.ap-mc-options');
    const mathOptions = this.options.filter((btn) => (btn.dataset.value || '').includes('$'));
    const mathQuestion = (this.dataset.question || '').includes('$');
    if (this.mode !== 'text' || (mathOptions.length === 0 && !mathQuestion)) {
      this.dataset.speech = 'ready';
    } else {
      this._speakLabels(mathOptions, mathQuestion);
    }

    const hintTpl = this.querySelector('template[data-slot="hint"]');
    if (hintTpl) {
      const hintId = `ap-mc-hint-${++hintSequence}`;
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

  async _speakLabels(mathOptions, mathQuestion) {
    try {
      const { mathlive } = await import(engineUrl);
      for (const btn of mathOptions) {
        const spoken = speakableMathText(
          btn.dataset.value || '',
          mathlive.convertLatexToSpeakableText,
        );
        if (spoken) btn.setAttribute('aria-label', `Answer choice: ${spoken}`);
      }
      if (mathQuestion && this.group) {
        const spokenQuestion = speakableMathText(
          this.dataset.question || '',
          mathlive.convertLatexToSpeakableText,
        );
        if (spokenQuestion) this.group.setAttribute('aria-label', `Answer choices for: ${spokenQuestion}`);
      }
      this.dataset.speech = 'ready';
    } catch (error) {
      // Grading never depends on the engine here, so the exercise stays
      // usable — but raw-TeX interim labels must not stay on live controls.
      // Dropping the aria-label lets each button's accessible name compute
      // from its rendered content: the visual KaTeX layer is aria-hidden,
      // so what remains is the hidden MathML layer's real math glyphs
      // ("(−∞,−3]∪(6,∞)") — imperfect for stacked fractions, but math, not
      // TeX control sequences. The group falls back to its generic name for
      // the same reason. `failed` (vs `ready`) records the truth so the
      // label tests can assert the page actually reached `ready`.
      console.warn('Multiple-choice spoken labels failed', error);
      for (const btn of mathOptions) btn.removeAttribute('aria-label');
      if (mathQuestion && this.group) this.group.setAttribute('aria-label', 'Answer choices');
      this.dataset.speech = 'failed';
    }
  }

  _choose(btn) {
    if (this.done) return;
    const correct =
      this.mode === 'graph'
        ? btn.dataset.index === String(this.answerIndex)
        : btn.dataset.value === this.answer;

    this.options.forEach((b) => b.classList.remove('is-selected'));
    btn.classList.add('is-selected');
    btn.classList.toggle('is-correct', correct);
    btn.classList.toggle('is-incorrect', !correct);

    if (correct) {
      this.done = true;
      // One coherent completed-state model: aria-disabled on EVERY option
      // (including the chosen one — activating it again also does nothing),
      // and never native `disabled`. Native disabled removes a button from
      // the tab order and, in some screen-reader/browser pairs, from the
      // accessibility tree — so a reader could no longer review the options
      // they chose among. Interaction is blocked by the `done` guard above,
      // not by the attribute.
      this.options.forEach((b) => {
        b.setAttribute('aria-disabled', 'true');
      });
      this.feedback.textContent = 'Correct!';
      this.feedback.style.color = COLOR.correct;
    } else {
      this.feedback.textContent = 'Not quite — try again.';
      this.feedback.style.color = COLOR.incorrect;
    }
  }
}

if (!customElements.get('multiple-choice')) {
  customElements.define('multiple-choice', MultipleChoiceElement);
}
