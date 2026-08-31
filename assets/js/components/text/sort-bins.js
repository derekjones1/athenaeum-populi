/**
 * <sort-bins> — categorize-into-bins exercise with instant, client-side
 * feedback. Grading is the label→bin mapping through
 * assets/js/lib/text/check-sortbins.mjs (the same module the lint and
 * verify-section parse configs with). No MathLive, no lazy bundle: the
 * shortcode rejects `$` math everywhere (labels become button names, and a
 * button has no spoken-math name), so accessible names are final at render
 * time and every control enables as soon as the element upgrades.
 *
 * The shortcode (layouts/shortcodes/sortbins.html) renders the static shell:
 *   <sort-bins data-config='{"bins": […], "items": […]}'>
 *     <div class="ap-sortbins">
 *       <p class="ap-sortbins-question">…</p>
 *       <div class="ap-sortbins-tray">  <button class="ap-sortbins-item" …>
 *       <div class="ap-sortbins-bins">  per bin: title, empty <ul>, "Place here"
 *       <button class="ap-sortbins-check">
 *       <template data-slot="hint">…</template>
 *     </div>
 *   </sort-bins>
 * in AUTHORED item order (the lint's interleave rule keeps that order from
 * leaking the key), all buttons natively `disabled` until this element wires
 * them.
 *
 * Interaction is keyboard-first and pointer-free by construction — there is
 * no drag: click (or press) an item to pick it up (`aria-pressed`), click a
 * bin's "Place here" to put it there, click a placed item to pick it back
 * up and re-place it. "Check bins" grades; on a partial result the
 * misplaced items return to the tray (teach, don't just judge), and every
 * move or verdict is narrated through the `role=status` feedback line. The
 * completed-state lock uses aria-disabled, never native disabled, for
 * <multiple-choice>'s reason: a reader must still be able to review the
 * arrangement they built.
 */
import { checkSortbins, parseSortbinsConfig } from '../../lib/text/check-sortbins.mjs';

let hintSequence = 0;

// The `--ap-*` fallback hexes duplicate assets/css/custom.css (the palette's
// source of truth) for the moment before the stylesheet applies.
const COLOR = {
  correct: 'var(--ap-success, #1a7f37)',
  partial: 'var(--ap-warning, #9a6700)',
  incorrect: 'var(--ap-error, #b42318)',
  needMore: 'var(--ap-muted, #6f6e69)',
};

class SortBinsElement extends HTMLElement {
  connectedCallback() {
    if (this._built) return;
    this._built = true;

    try {
      this.config = parseSortbinsConfig(this.dataset.config || '');
    } catch (error) {
      // The lint parses every shipped config through the same function, so
      // this path is unreachable on a published page — but a dead component
      // must stay honestly inert (buttons keep their server `disabled`), not
      // half-wire itself.
      console.warn('sort-bins config rejected', error);
      return;
    }

    const wrap = this.querySelector('.ap-sortbins');
    this.wrap = wrap;
    this.tray = wrap.querySelector('.ap-sortbins-tray');
    this.itemButtons = Array.from(wrap.querySelectorAll('.ap-sortbins-item'));
    this.binLists = Array.from(wrap.querySelectorAll('.ap-sortbins-bin-items'));
    this.placeButtons = Array.from(wrap.querySelectorAll('.ap-sortbins-place'));
    this.checkButton = wrap.querySelector('.ap-sortbins-check');

    // placements[i] = bin index item i sits in, or null while in the tray.
    this.placements = this.config.items.map(() => null);
    this.selected = null;
    this.done = false;

    const feedback = document.createElement('p');
    feedback.className = 'ap-sortbins-feedback';
    feedback.setAttribute('role', 'status');
    feedback.setAttribute('aria-live', 'polite');
    this.feedback = feedback;
    this.checkButton.after(feedback);

    this.itemButtons.forEach((btn) => {
      btn.addEventListener('click', () => this._toggleItem(btn));
      btn.disabled = false;
    });
    this.placeButtons.forEach((btn) => {
      btn.addEventListener('click', () => this._place(Number(btn.dataset.bin)));
      btn.disabled = false;
    });
    this.checkButton.addEventListener('click', () => this._runCheck());
    this.checkButton.disabled = false;

    const hintTpl = this.querySelector('template[data-slot="hint"]');
    if (hintTpl) {
      const hintId = `ap-sortbins-hint-${++hintSequence}`;
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

  _toggleItem(btn) {
    if (this.done) return;
    const wasSelected = btn.getAttribute('aria-pressed') === 'true';
    this.itemButtons.forEach((b) => b.setAttribute('aria-pressed', 'false'));
    if (wasSelected) {
      this.selected = null;
      this._say(`Put down ${JSON.stringify(btn.textContent.trim())}.`, 'needMore');
      return;
    }
    btn.setAttribute('aria-pressed', 'true');
    this.selected = Number(btn.dataset.item);
    this._say(`Picked up ${JSON.stringify(btn.textContent.trim())} — choose a bin and press "Place here".`, 'needMore');
  }

  _place(bin) {
    if (this.done) return;
    if (this.selected === null) {
      this._say('Pick up an item first, then place it.', 'needMore');
      return;
    }
    const index = this.selected;
    const btn = this.itemButtons.find((b) => Number(b.dataset.item) === index);
    this._moveToBin(btn, bin);
    this.placements[index] = bin;
    btn.setAttribute('aria-pressed', 'false');
    this.selected = null;
    const placed = this.placements.filter((p) => p !== null).length;
    this._say(`Placed ${JSON.stringify(btn.textContent.trim())} in ${JSON.stringify(this.config.bins[bin])}. ${placed} of ${this.placements.length} items placed.`, 'needMore');
  }

  _moveToBin(btn, bin) {
    const li = document.createElement('li');
    li.append(btn);
    this.binLists[bin].append(li);
  }

  _returnToTray(index) {
    const btn = this.itemButtons.find((b) => Number(b.dataset.item) === index);
    const li = btn.closest('li');
    this.tray.append(btn);
    if (li) li.remove();
    this.placements[index] = null;
  }

  _runCheck() {
    if (this.done) return;
    const result = checkSortbins(this.placements, this.config);
    if (result.status === 'correct') {
      this.done = true;
      // One coherent completed-state model, from <multiple-choice>:
      // aria-disabled on every control, never native disabled, so a reader
      // can still review the arrangement; the `done` guards block
      // interaction.
      const hadFocus = this.contains(document.activeElement);
      [...this.itemButtons, ...this.placeButtons, this.checkButton].forEach((b) => {
        b.setAttribute('aria-disabled', 'true');
      });
      this._say('Correct!', 'correct');
      if (hadFocus) {
        this.feedback.setAttribute('tabindex', '-1');
        this.feedback.focus();
      }
      return;
    }
    if (result.status === 'needMore') {
      this._say(`Place all items first — ${result.placed} of ${result.total} placed.`, 'needMore');
      return;
    }
    if (result.status === 'partial') {
      for (let i = 0; i < this.placements.length; i += 1) {
        if (this.placements[i] !== null && this.placements[i] !== this.config.items[i].bin) {
          this._returnToTray(i);
        }
      }
      this._say(`${result.correctCount} of ${result.total} placed correctly — the misplaced items are back in the tray.`, 'partial');
      return;
    }
    this._say('Not quite — try again.', 'incorrect');
  }

  _say(message, status) {
    this.feedback.textContent = message;
    this.feedback.style.color = COLOR[status] || 'inherit';
  }
}

if (!customElements.get('sort-bins')) {
  customElements.define('sort-bins', SortBinsElement);
}
