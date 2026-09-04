/**
 * The "Show hint" disclosure every exercise component mounts.
 *
 * Six components used to carry this block each — the same button, the same
 * `aria-expanded`/`aria-controls` wiring, the same click handler, six
 * module-level counters for the id — and all six already emitted the
 * `ap-fillin-hint-toggle` / `ap-fillin-hint` classes, so the CSS was shared
 * while the code was not. One copy: a change to how a hint discloses is a
 * change for every component, which is the point.
 *
 * The hint arrives as HTML (the shortcode renders it through `mathtext`, so
 * it may contain KaTeX markup); the toggle owns its own `<p>`. Returns the
 * pair, or null when there is no hint to mount.
 */
let sequence = 0;

/** The hint markup a shortcode slotted into the host, or '' when it has none. */
export function hintSlotHTML(host) {
  return host.querySelector('template[data-slot="hint"]')?.innerHTML ?? '';
}

export function mountHintToggle(container, hintHTML) {
  if (!hintHTML) return null;
  const id = `ap-hint-${++sequence}`;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'ap-fillin-hint-toggle';
  button.textContent = 'Show hint';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', id);

  const hint = document.createElement('p');
  hint.id = id;
  hint.className = 'ap-fillin-hint';
  hint.hidden = true;
  hint.innerHTML = hintHTML;

  button.addEventListener('click', () => {
    const show = hint.hidden;
    hint.hidden = !show;
    button.textContent = show ? 'Hide hint' : 'Show hint';
    button.setAttribute('aria-expanded', String(show));
  });
  container.append(button, hint);
  return { button, hint };
}
