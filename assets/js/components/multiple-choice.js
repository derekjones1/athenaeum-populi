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
 *
 * That swap is asynchronous and the engine can load late, so the options stay
 * in the shortcode's `disabled` state until their names settle — enabling a
 * control whose accessible name is still raw TeX just moves the defect one
 * step later. See _enableOptions() and LABEL_GATE_MS for the bound.
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

// How long the options may stay in their server-rendered `disabled` state
// waiting for spoken names. The serializer rides the ~1.9 MiB engine bundle,
// which can be slow — and a stalled response never rejects the import, so the
// catch below is not on its own a bound. At this deadline the options take the
// SAME fallback path a failed import takes (interim TeX names dropped) and
// enable, so the wait can never become a permanent lockout: the worst case is
// the pre-gate behaviour, reached ten seconds later with better names.
// 10 s is the suite's "an async step that has not finished by now has failed"
// interval (playwright.config.mjs `expect.timeout`, helpers.mjs' focus polls).
const LABEL_GATE_MS = 10_000;

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
      // Options render natively `disabled` (see multiplechoice.html): before
      // upgrade they are wired to nothing, and without JS they stay honestly
      // inert instead of enabled-looking and dead. Wire the handler now, but
      // leave `disabled` in place — _enableOptions() takes it off once the
      // accessible names have settled (below), because a control that is
      // clickable before its name is final is the same defect one step later:
      // the group announced itself as `Answer choices for: Which is true of
      // \sqrt{-196}?` while every option was already live. The completed-state
      // lock later uses aria-disabled, never native disabled — see _choose().
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
    if (mathOptions.length === 0 && !mathQuestion) {
      // Nothing to serialize: the server-rendered names are already final, so
      // there is nothing to wait for. Prose-only questions with prose or graph
      // options never touch the engine and enable at once.
      this.dataset.speech = 'ready';
      this._enableOptions();
    } else {
      // The mode is deliberately NOT part of this test. A graph-mode question
      // is still a question, and the group's server-rendered name is the
      // question with its `$` delimiters stripped — so "Which graph shows
      // $\tfrac{x^2}{16}+\tfrac{y^2}{81}=1$?" announced itself as raw TeX
      // until the knowledge-check conversion put math-bearing questions on
      // graph-mode options. Graph options carry no `data-value`, so
      // `mathOptions` is empty there and only the question is serialized.
      //
      // Which is why the gate is per-target, not per-widget: `disabled` exists
      // so no option is clickable before ITS OWN name is final, and an option
      // with no math has a final name already. Gating those on the question's
      // serialization left a page of graph questions — rendered graphs that
      // need no serialization at all — fully inert for the whole LABEL_GATE_MS
      // window whenever the engine fetch was slow or offline.
      if (mathOptions.length === 0) this._enableOptions();
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

  /**
   * Take the server-rendered `disabled` off every option — the one place the
   * attribute comes off, so "enabled" can only ever mean "named". Idempotent
   * and per-instance: each <multiple-choice> gates on its own labels, so a
   * page of 78 widgets opens them one settled question at a time rather than
   * all-or-nothing.
   */
  _enableOptions() {
    // Cancelling the deadline comes FIRST, before the idempotence guard: the
    // options can now be enabled before serialization is even started (a
    // graph-mode question with math in it has final option names already), so
    // a later call may be the one that settles the labels. Returning early
    // without clearing would leave the timer to fire after a SUCCESSFUL
    // serialization and overwrite the spoken question with the generic
    // fallback name.
    clearTimeout(this._labelGate);
    if (this._enabled) return;
    this._enabled = true;
    for (const btn of this.options) btn.disabled = false;
  }

  /**
   * The degraded names: drop each math option's interim aria-label so the
   * accessible name computes from the rendered content instead (the visual
   * KaTeX layer is aria-hidden, leaving the MathML layer's real glyphs —
   * "(−∞,−3]∪(6,∞)"), and give the group its generic name back. Imperfect for
   * stacked fractions, but math rather than TeX control sequences.
   *
   * Shared by the two ways serialization can fail to arrive — a rejected
   * import and a stalled one — so a slow engine and a broken engine degrade
   * identically. Re-running it is harmless, and a late success overwrites it
   * with the real spoken names.
   */
  _fallbackLabels(mathOptions, mathQuestion) {
    for (const btn of mathOptions) btn.removeAttribute('aria-label');
    if (mathQuestion && this.group) this.group.setAttribute('aria-label', 'Answer choices');
  }

  async _speakLabels(mathOptions, mathQuestion) {
    // The bound on the gate. A rejected import lands in the catch below within
    // a network error's time, but a response that never arrives never rejects,
    // so the deadline is what guarantees the options are not inert forever.
    // It deliberately does NOT settle `data-speech`: that attribute reports
    // what serialization actually did, whenever it finishes, and a settled
    // flag here would let the axe scans start measuring names still in flight.
    this._labelGate = setTimeout(() => {
      this._fallbackLabels(mathOptions, mathQuestion);
      this._enableOptions();
    }, LABEL_GATE_MS);

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
      // usable — but raw-TeX interim labels must not stay on live controls,
      // which is what _fallbackLabels() prevents. `failed` (vs `ready`)
      // records the truth so the label tests can assert the page actually
      // reached `ready`.
      console.warn('Multiple-choice spoken labels failed', error);
      this._fallbackLabels(mathOptions, mathQuestion);
      this.dataset.speech = 'failed';
    } finally {
      // Both outcomes end here, in the same synchronous block that settled
      // `data-speech` — so no observer can catch an option enabled before its
      // name is final, and no path leaves one disabled for good.
      this._enableOptions();
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
