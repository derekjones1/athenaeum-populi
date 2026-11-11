/**
 * Site chrome: a viewer that enlarges a vendored figure in place.
 *
 * A dense diagram — the periodic table, a metabolic map — is drawn for a
 * printed page and set here in a 44rem column, where its smallest labels are
 * a few pixels tall. The mediafigure shortcode puts an "Enlarge figure" link
 * under every figure whose file is wider than the column (or that the source
 * prints scaled down). The link is real: without this script it opens the
 * full-size file. With it, the link — and a plain click on the figure's own
 * image — opens ONE native <dialog>, built on first use, that shows the same
 * file at any size from "fits the window" to three times its pixels.
 *
 * The dialog is modal (`showModal`), so the browser supplies what the two
 * drawers here build by hand: the page behind is inert, Tab stays inside,
 * Escape closes, and focus returns to whatever opened it. What is ours:
 *
 *   - zoom by buttons, by `+`, `-` and `0`, and by clicking the image
 *     (fit ⇄ enlarged, about the point clicked);
 *   - pan by scrolling, by the arrow keys (the stage is focusable and takes
 *     focus on open), or by dragging with a mouse;
 *   - a click on the backdrop closes.
 *
 * Math figures are not included: they are vector drawings sized to be read
 * in the column.
 */

const LINK = '.ap-mediafigure-enlarge';
// CSS pixels per image pixel. "Fit" is wherever the window puts it, capped so
// a small file is not blown up on a large screen.
const LADDER = [0.25, 0.5, 0.75, 1, 1.5, 2, 3];
const MAX_ZOOM = LADDER[LADDER.length - 1];
const MAX_FIT = 2;
const DRAG_SLOP = 4;

let viewer = null;

function build() {
  const dialog = document.createElement('dialog');
  dialog.className = 'ap-figure-viewer';
  dialog.setAttribute('aria-labelledby', 'ap-figure-viewer-title');
  dialog.innerHTML = `
    <div class="ap-figure-viewer-bar">
      <p class="ap-figure-viewer-title" id="ap-figure-viewer-title"></p>
      <div class="ap-figure-viewer-tools" role="group" aria-label="Zoom">
        <button type="button" class="ap-figure-viewer-btn" data-zoom="out" aria-label="Zoom out">−</button>
        <span class="ap-figure-viewer-level" role="status" aria-live="polite"></span>
        <button type="button" class="ap-figure-viewer-btn" data-zoom="in" aria-label="Zoom in">+</button>
        <button type="button" class="ap-figure-viewer-btn" data-zoom="fit">Fit</button>
      </div>
      <button type="button" class="ap-figure-viewer-btn ap-figure-viewer-close">Close</button>
    </div>
    <div class="ap-figure-viewer-stage" tabindex="0" role="group" aria-label="Enlarged figure. Scroll, or use the arrow keys, to move around it." autofocus>
      <img class="ap-figure-viewer-image" alt="" decoding="async" draggable="false">
    </div>`;
  document.body.append(dialog);

  const state = {
    dialog,
    title: dialog.querySelector('.ap-figure-viewer-title'),
    level: dialog.querySelector('.ap-figure-viewer-level'),
    stage: dialog.querySelector('.ap-figure-viewer-stage'),
    image: dialog.querySelector('.ap-figure-viewer-image'),
    zoomIn: dialog.querySelector('[data-zoom="in"]'),
    zoomOut: dialog.querySelector('[data-zoom="out"]'),
    natural: { width: 1, height: 1 },
    zoom: 1,
    fitted: true,
  };

  dialog.querySelector('.ap-figure-viewer-close').addEventListener('click', () => dialog.close());
  // The dialog has no padding, so only the backdrop reports the dialog
  // itself as the click's target.
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { state.image.removeAttribute('src'); });
  dialog.querySelector('.ap-figure-viewer-tools').addEventListener('click', (event) => {
    const action = event.target.closest('[data-zoom]')?.dataset.zoom;
    if (action === 'in') step(state, 1);
    else if (action === 'out') step(state, -1);
    else if (action === 'fit') fit(state);
  });
  dialog.addEventListener('keydown', (event) => {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    if (event.key === '+' || event.key === '=') step(state, 1);
    else if (event.key === '-' || event.key === '−') step(state, -1);
    else if (event.key === '0') fit(state);
    else return;
    event.preventDefault();
  });
  window.addEventListener('resize', () => { if (dialog.open && state.fitted) fit(state); });
  wirePointer(state);
  return state;
}

/** The zoom at which the whole image is inside the stage. */
function fitZoom(state) {
  const { clientWidth, clientHeight } = state.stage;
  const room = Math.min(clientWidth / state.natural.width, clientHeight / state.natural.height);
  return Math.min(room, MAX_FIT);
}

/** The smallest zoom offered: the fit — or the file's own pixels, when the
 * fit has enlarged a small file past them. Smaller than the fit shows
 * nothing more. */
const floorZoom = (state) => Math.min(fitZoom(state), 1);

/** Set the zoom, keeping the image point under `anchor` (stage coordinates;
 * the centre by default) where it is. */
function setZoom(state, zoom, anchor) {
  const { stage, image } = state;
  const at = anchor ?? { x: stage.clientWidth / 2, y: stage.clientHeight / 2 };
  const box = image.getBoundingClientRect();
  const frame = stage.getBoundingClientRect();
  // Where the anchor falls on the image, as a share of its width and height.
  const share = {
    x: box.width ? (at.x + frame.left - box.left) / box.width : 0.5,
    y: box.height ? (at.y + frame.top - box.top) / box.height : 0.5,
  };
  state.zoom = zoom;
  const width = Math.max(1, Math.round(state.natural.width * zoom));
  const height = Math.max(1, Math.round(state.natural.height * zoom));
  image.style.width = `${width}px`;
  image.style.height = `${height}px`;
  stage.scrollLeft = share.x * width - at.x;
  stage.scrollTop = share.y * height - at.y;

  const lowest = floorZoom(state);
  state.zoomIn.disabled = zoom >= MAX_ZOOM - 0.001;
  state.zoomOut.disabled = zoom <= lowest + 0.001;
  state.level.textContent = `${Math.round(zoom * 100)}%`;
  stage.dataset.fitted = String(state.fitted);
}

function fit(state) {
  state.fitted = true;
  setZoom(state, fitZoom(state));
}

function step(state, direction, anchor) {
  const fitted = fitZoom(state);
  // The ladder, plus the fit itself, so "zoom out" from 100% can land on it.
  const stops = [...new Set([...LADDER, fitted])].filter((stop) => stop >= floorZoom(state) - 0.001).sort((a, b) => a - b);
  const next = direction > 0
    ? stops.find((stop) => stop > state.zoom + 0.001)
    : [...stops].reverse().find((stop) => stop < state.zoom - 0.001);
  if (next == null) return;
  state.fitted = Math.abs(next - fitted) < 0.001;
  setZoom(state, next, anchor);
}

/** A click on the image toggles fit ⇄ enlarged; a mouse drag pans. */
function wirePointer(state) {
  const { stage } = state;
  let drag = null;
  stage.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    drag = { x: event.clientX, y: event.clientY, left: stage.scrollLeft, top: stage.scrollTop, moved: false };
  });
  stage.addEventListener('pointermove', (event) => {
    if (!drag) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (!drag.moved && Math.hypot(dx, dy) < DRAG_SLOP) return;
    if (!drag.moved) {
      drag.moved = true;
      stage.setPointerCapture(event.pointerId);
      stage.dataset.dragging = 'true';
    }
    stage.scrollLeft = drag.left - dx;
    stage.scrollTop = drag.top - dy;
  });
  const end = () => {
    delete stage.dataset.dragging;
    // The click that ends a drag is not a request to zoom.
    const moved = drag?.moved;
    drag = null;
    if (moved) stage.addEventListener('click', (event) => event.stopPropagation(), { capture: true, once: true });
  };
  stage.addEventListener('pointerup', end);
  stage.addEventListener('pointercancel', () => { delete stage.dataset.dragging; drag = null; });
  state.image.addEventListener('click', (event) => {
    const frame = stage.getBoundingClientRect();
    const anchor = { x: event.clientX - frame.left, y: event.clientY - frame.top };
    if (state.fitted) {
      // To the file's own pixels, or one stop past the fit when the fit is
      // already at or beyond them.
      const fitted = fitZoom(state);
      const target = fitted < 1 - 0.001 ? 1 : LADDER.find((stop) => stop > fitted + 0.001);
      if (target == null) return;
      state.fitted = false;
      setZoom(state, target, anchor);
    } else {
      fit(state);
    }
  });
}

function open(figure, link) {
  const inline = figure.querySelector(':scope > img');
  if (!inline) return false;
  viewer ??= build();
  const state = viewer;
  state.natural = {
    width: Number(inline.getAttribute('width')) || inline.naturalWidth || 1,
    height: Number(inline.getAttribute('height')) || inline.naturalHeight || 1,
  };
  const caption = figure.querySelector(':scope > .ap-mediafigure-caption')?.textContent.replace(/\s+/g, ' ').trim();
  state.title.textContent = caption || 'Figure';
  state.image.alt = inline.alt;
  state.image.src = link.href;
  // The dark theme's light plate, for the figures that get one inline.
  state.stage.dataset.plate = String(figure.dataset.kind === 'diagram' || 'transparent' in figure.dataset);
  state.dialog.showModal();
  fit(state);
  state.stage.scrollTo(0, 0);
  return true;
}

document.addEventListener('click', (event) => {
  // A modified click is the browser's: open the file in a new tab or window.
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (typeof HTMLDialogElement !== 'function') return;
  const target = event.target instanceof Element ? event.target : null;
  const figure = target?.closest('.ap-mediafigure');
  if (!figure) return;
  const link = figure.querySelector(':scope > .ap-mediafigure-actions > ' + LINK);
  if (!link) return;
  const onLink = target.closest(LINK) === link;
  const onImage = target.matches('.ap-mediafigure > img');
  if (!onLink && !onImage) return;
  if (open(figure, link)) event.preventDefault();
});
