/**
 * <multiple-choice> — single-answer question with instant feedback. Vanilla
 * port of MultipleChoice.jsx. Grading is a plain comparison (string in text
 * mode, index in graph mode) — no heavy deps, so this lives in the shared
 * components bundle. Options are already rendered (build-time); this class just
 * wires clicks, feedback, and the hint toggle.
 */

const COLOR = {
  correct: 'var(--ap-success, #1a7f37)',
  incorrect: 'var(--ap-error, #b42318)',
};

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

    const hintTpl = this.querySelector('template[data-slot="hint"]');
    if (hintTpl) {
      const hintBtn = document.createElement('button');
      hintBtn.type = 'button';
      hintBtn.className = 'ap-fillin-hint-toggle';
      hintBtn.textContent = 'Show hint';
      hintBtn.setAttribute('aria-expanded', 'false');
      const hint = document.createElement('p');
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
      this.options.forEach((b) => { if (b !== btn) b.disabled = true; });
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
