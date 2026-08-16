/**
 * <ap-figure> — spec-first static figure.
 *
 * Authored as `{{< apfigure kind="graph" >}}{ …spec JSON… }{{< /apfigure >}}`;
 * the shortcode validates the spec at build time and this component renders
 * it in the browser with the shared graph-core geometry — the same engine,
 * spec language, and house conventions as every prerendered `ap-figure` div,
 * with two upgrades hand-pasted SVG cannot have:
 *
 *  - layout comes from measured text metrics plus a viewBox fit pass, so no
 *    label can clip;
 *  - after first paint, a getBBox() net re-measures every text node against
 *    the REAL platform font and widens the viewBox again if some exotic
 *    fallback runs wider than the metrics table (its 10% safety already
 *    covers the common ones).
 *
 * The geometry engine loads lazily from the graphplot bundle, so pages
 * without figures or plots never fetch it.
 */
import { graphplotEngineUrl } from '@params';

const SVGNS = 'http://www.w3.org/2000/svg';
const camelToKebab = (s) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
const BUILDERS = { graph: 'buildGraph', numberline: 'buildNumberLine', figure: 'buildFigure' };

class ApFigureElement extends HTMLElement {
  connectedCallback() {
    if (this._built) return;
    this._built = true;
    this._render();
  }

  async _render() {
    let g;
    try {
      const spec = JSON.parse(this.dataset.spec || '{}');
      const kind = this.dataset.kind || 'graph';
      if (!BUILDERS[kind]) throw new Error(`unknown figure kind ${JSON.stringify(kind)}`);
      const engine = await import(graphplotEngineUrl);
      g = engine[BUILDERS[kind]](spec);
    } catch (error) {
      console.error('ap-figure failed to render', error);
      // A <span>, not a <p>: an ap-figure can sit inside a multiplechoice
      // option <button>, whose content model allows phrasing content only.
      const msg = document.createElement('span');
      msg.className = 'ap-figure-error';
      msg.setAttribute('role', 'alert');
      msg.textContent = 'This figure could not be drawn. Please reload the page and try again.';
      this.append(msg);
      return;
    }

    const svg = document.createElementNS(SVGNS, 'svg');
    svg.setAttribute('viewBox', g.viewBox);
    svg.setAttribute('width', g.width);
    svg.setAttribute('height', g.height);
    svg.setAttribute('font-family', 'Helvetica, Arial, sans-serif');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', g.ariaLabel);
    for (const { tag, attrs, text } of g.els) {
      const el = document.createElementNS(SVGNS, tag);
      for (const [k, v] of Object.entries(attrs)) el.setAttribute(camelToKebab(k), v);
      if (text !== undefined) el.textContent = text;
      svg.appendChild(el);
    }
    this.append(svg);
    // The SVG now carries the accessible name; keep the host's no-JS
    // fallback name off the tree so screen readers hear the figure once.
    this.removeAttribute('role');
    this.removeAttribute('aria-label');

    requestAnimationFrame(() => this._fitToRealFont(svg, g));
  }

  /** Re-measure against the platform's real font and widen if needed. */
  _fitToRealFont(svg, g) {
    let [x, y, w, h] = svg.getAttribute('viewBox').split(' ').map(Number);
    let x1 = x + w, y1 = y + h, grew = false;
    for (const t of svg.querySelectorAll('text')) {
      let b;
      try { b = t.getBBox(); } catch { return; } // display:none — nothing rendered
      if (b.width === 0 && b.height === 0) return;
      const pad = 2;
      if (b.x - pad < x) { x = Math.floor(b.x - pad); grew = true; }
      if (b.y - pad < y) { y = Math.floor(b.y - pad); grew = true; }
      if (b.x + b.width + pad > x1) { x1 = Math.ceil(b.x + b.width + pad); grew = true; }
      if (b.y + b.height + pad > y1) { y1 = Math.ceil(b.y + b.height + pad); grew = true; }
    }
    if (!grew) return;
    svg.setAttribute('viewBox', `${x} ${y} ${x1 - x} ${y1 - y}`);
    svg.setAttribute('width', x1 - x);
    svg.setAttribute('height', y1 - y);
  }
}

if (!customElements.get('ap-figure')) {
  customElements.define('ap-figure', ApFigureElement);
}
