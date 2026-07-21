/**
 * <graph-plot> — "graph it yourself" exercise. Vanilla port of GraphPlot.jsx.
 * The student places/drags points; the component rebuilds the object those
 * points determine (via buildGraph) and grades the OBJECT (checkGraphPlot),
 * with diagnostic feedback. Geometry + grader load lazily from the graphplot
 * engine (no MathLive).
 *
 * Config arrives as JSON in a data-config attribute: { answer, grid }.
 */
import { graphplotEngineUrl } from '@params';

const SVGNS = 'http://www.w3.org/2000/svg';
const camelToKebab = (s) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
const fmt = (n) => String(n).replace(/-/g, '−');

const COLOR = {
  correct: 'var(--ap-success, #1a7f37)',
  incorrect: 'var(--ap-error, #b42318)',
  needMore: 'var(--ap-muted, #6f6e69)',
  slopeRight: 'var(--ap-warning, #9a6700)',
  interceptRight: 'var(--ap-warning, #9a6700)',
  systemPartial: 'var(--ap-warning, #9a6700)',
  vertexRight: 'var(--ap-warning, #9a6700)',
  shapeRight: 'var(--ap-warning, #9a6700)',
};
const INSTRUCTIONS = {
  line: 'Place two points on the line.',
  system: 'Place two points on each line — the first two make one line, the next two the other.',
  quadratic: 'Place the vertex first, then any other point on the parabola.',
};
const NEED_MORE = {
  line: 'Place two different points on the grid first.',
  system: 'Place four points — two for each line.',
  quadratic: 'Place the vertex, then a second point with a different x-value.',
};

class GraphPlotElement extends HTMLElement {
  connectedCallback() {
    if (this._built) return;
    this._built = true;

    const cfg = JSON.parse(this.dataset.config || '{}');
    this.answer = cfg.answer || {};
    this.grid = cfg.grid || {};
    this.ariaLabel = this.dataset.ariaLabel || '';
    this.snap = Number(this.dataset.snap || 1);
    this.mode = this.answer.system ? 'system' : this.answer.quadratic ? 'quadratic' : 'line';
    this.maxPoints = this.mode === 'system' ? 4 : 2;
    this.xMin = this.grid.xMin ?? -7; this.xMax = this.grid.xMax ?? 7;
    this.yMin = this.grid.yMin ?? -7; this.yMax = this.grid.yMax ?? 7;
    this.pts = [];
    this.status = 'idle';
    this.done = false;
    this.dragIndex = null;

    this.wrap = this.querySelector('.ap-graphplot');
    const adTpl = this.querySelector('template[data-slot="answer-display"]');
    this.answerDisplayHTML = adTpl ? adTpl.innerHTML : '';
    const hintTpl = this.querySelector('template[data-slot="hint"]');
    this.hintHTML = hintTpl ? hintTpl.innerHTML : '';

    this._buildShell();
    this._loadEngine();
  }

  _buildShell() {
    const instr = document.createElement('p');
    instr.className = 'ap-graphplot-instructions';
    instr.textContent = INSTRUCTIONS[this.mode];

    this.svg = document.createElementNS(SVGNS, 'svg');
    this.svg.setAttribute('role', 'application');
    this.svg.classList.add('ap-graphplot-svg');
    this.svg.style.touchAction = 'none';
    // Placeholder height until the engine renders the real grid.
    this.svg.style.minHeight = '260px';

    const row = document.createElement('div');
    row.className = 'ap-graphplot-row';
    this.checkBtn = this._btn('Check', () => this._check());
    this.clearBtn = this._btn('Clear', () => this._clear());
    this.addBtn = this._btn('Add point', () => this._addPointKeyboard());
    this.addBtn.classList.add('ap-graphplot-add');
    this.checkBtn.disabled = this.clearBtn.disabled = this.addBtn.disabled = true;
    row.append(this.checkBtn, this.clearBtn, this.addBtn);

    this.feedback = document.createElement('p');
    this.feedback.className = 'ap-fillin-feedback';
    this.feedback.setAttribute('role', 'status');
    this.feedback.setAttribute('aria-live', 'polite');

    this.wrap.append(instr, this.svg, row, this.feedback);

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
      this.wrap.append(hintBtn, hint);
    }
  }

  _btn(label, onClick) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'ap-graphplot-btn';
    b.textContent = label;
    b.addEventListener('click', onClick);
    return b;
  }

  async _loadEngine() {
    const eng = await import(graphplotEngineUrl);
    this.buildGraph = eng.buildGraph;
    this.checkGraphPlot = eng.checkGraphPlot;

    this.svg.addEventListener('pointerdown', (e) => this._onDown(e));
    this.svg.addEventListener('pointermove', (e) => this._onMove(e));
    this.svg.addEventListener('pointerup', () => (this.dragIndex = null));
    this.svg.addEventListener('pointercancel', () => (this.dragIndex = null));

    this.checkBtn.disabled = false;
    this.addBtn.disabled = false;
    this._render();
  }

  // --- geometry helpers -----------------------------------------------------
  _clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); }
  _snapPt([x, y]) {
    return [
      this._clamp(Math.round(x / this.snap) * this.snap, this.xMin, this.xMax),
      this._clamp(Math.round(y / this.snap) * this.snap, this.yMin, this.yMax),
    ];
  }
  _toMath(e) {
    const rect = this.svg.getBoundingClientRect();
    const X = ((e.clientX - rect.left) / rect.width) * this.g.width;
    const Y = ((e.clientY - rect.top) / rect.height) * this.g.height;
    return this.g.map.toMath([X, Y]);
  }

  _objects() {
    const lines = [], quadratics = [];
    if (this.mode === 'quadratic') {
      const [v, p] = this.pts;
      if (v && p && p[0] !== v[0]) {
        const a = (p[1] - v[1]) / (p[0] - v[0]) ** 2;
        quadratics.push({ a, b: -2 * a * v[0], c: a * v[0] * v[0] + v[1] });
      }
    } else {
      for (let i = 0; i + 1 < this.pts.length; i += 2) {
        const [p, q] = [this.pts[i], this.pts[i + 1]];
        if (p && q && (p[0] !== q[0] || p[1] !== q[1])) {
          lines.push(p[0] === q[0] ? { x: p[0] } : { through: [p, q] });
        }
      }
    }
    return { lines, quadratics };
  }

  _render() {
    const { lines, quadratics } = this._objects();
    this.g = this.buildGraph({
      xMin: this.xMin, xMax: this.xMax, yMin: this.yMin, yMax: this.yMax,
      tickLabels: true, tickStep: 2,
      ...this.grid,
      ariaLabel: this.ariaLabel,
      points: this.pts.map((at, i) => ({
        at, ...(this.mode === 'quadratic' && i === 0 ? { label: 'vertex' } : {}),
      })),
      lines, quadratics,
    });

    const g = this.g;
    this.svg.setAttribute('viewBox', g.viewBox);
    this.svg.style.maxWidth = g.maxWidth + 'px';
    this.svg.style.minHeight = '';
    this.svg.style.cursor = this.done ? 'default' : 'crosshair';
    this.svg.setAttribute('aria-label',
      `${this.ariaLabel} ${INSTRUCTIONS[this.mode]} Click or tap to place points; drag to adjust.`);

    // rebuild children
    while (this.svg.firstChild) this.svg.removeChild(this.svg.firstChild);
    for (const { tag, attrs, text } of g.els) {
      const el = document.createElementNS(SVGNS, tag);
      for (const [k, v] of Object.entries(attrs)) el.setAttribute(camelToKebab(k), v);
      if (text !== undefined) el.textContent = text;
      this.svg.appendChild(el);
    }
    // focusable grab handles
    this.pts.forEach((p, i) => {
      const [X, Y] = g.map.toPx(p);
      const c = document.createElementNS(SVGNS, 'circle');
      c.setAttribute('cx', X); c.setAttribute('cy', Y); c.setAttribute('r', 12);
      c.setAttribute('fill', 'transparent');
      c.setAttribute('role', 'button');
      c.setAttribute('tabindex', this.done ? -1 : 0);
      c.setAttribute('aria-label',
        `${this._handleName(i)} at (${fmt(p[0])}, ${fmt(p[1])}). Arrow keys move it; Delete removes it.`);
      c.style.cursor = this.done ? 'default' : 'grab';
      c.addEventListener('keydown', (e) => this._onKey(e, i));
      this.svg.appendChild(c);
    });

    this.clearBtn.disabled = this.done || this.pts.length === 0;
    this.addBtn.disabled = this.done || this.pts.length >= this.maxPoints;
  }

  _handleName(i) {
    if (this.mode === 'quadratic' && i === 0) return 'Vertex';
    if (this.mode === 'system') return `Point ${i + 1} (line ${i < 2 ? 1 : 2})`;
    return `Point ${i + 1}`;
  }

  // --- interaction ----------------------------------------------------------
  _onDown(e) {
    if (this.done || !this.g) return;
    e.preventDefault();
    const at = this._toMath(e);
    const grabbed = this.pts.findIndex((p) => Math.hypot(p[0] - at[0], p[1] - at[1]) < 0.6);
    if (grabbed >= 0) {
      this.dragIndex = grabbed;
    } else if (this.pts.length < this.maxPoints) {
      const p = this._snapPt(at);
      if (this.pts.some((q) => q[0] === p[0] && q[1] === p[1])) return;
      this.dragIndex = this.pts.length;
      this.pts.push(p);
      this._resetStatus();
      this._render();
    } else return;
    this.svg.setPointerCapture(e.pointerId);
  }
  _onMove(e) {
    if (this.dragIndex === null || this.done) return;
    this.pts[this.dragIndex] = this._snapPt(this._toMath(e));
    this._resetStatus();
    this._render();
  }
  _onKey(e, i) {
    if (this.done) return;
    const moves = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, 1], ArrowDown: [0, -1] };
    if (moves[e.key]) {
      e.preventDefault();
      const [dx, dy] = moves[e.key];
      this.pts[i] = this._snapPt([this.pts[i][0] + dx * this.snap, this.pts[i][1] + dy * this.snap]);
      this._resetStatus();
      this._render();
    } else if (e.key === 'Delete' || e.key === 'Backspace') {
      e.preventDefault();
      this.pts.splice(i, 1);
      this._resetStatus();
      this._render();
    }
  }
  _addPointKeyboard() {
    if (this.done || this.pts.length >= this.maxPoints) return;
    const cx = Math.round((this.xMin + this.xMax) / 2);
    const cy = Math.round((this.yMin + this.yMax) / 2);
    let p = this._snapPt([cx, cy]);
    while (this.pts.some((q) => q[0] === p[0] && q[1] === p[1])) p = this._snapPt([p[0] + this.snap, p[1]]);
    this.pts.push(p);
    this._resetStatus();
    this._render();
  }
  _clear() {
    if (this.done) return;
    this.pts = [];
    this.status = 'idle';
    this.feedback.textContent = '';
    this._render();
  }
  _resetStatus() {
    if (this.status !== 'idle') { this.status = 'idle'; this.feedback.textContent = ''; this.feedback.style.color = ''; }
  }

  _check() {
    if (this.done) return;
    const status = this.checkGraphPlot(this.pts, this.answer);
    this.status = status;
    if (status === 'correct') {
      this.done = true;
      this.checkBtn.disabled = this.clearBtn.disabled = this.addBtn.disabled = true;
      this.feedback.innerHTML = this.answerDisplayHTML ? `Correct — ${this.answerDisplayHTML}.` : 'Correct!';
    } else {
      this.feedback.textContent = this._message(status);
    }
    this.feedback.style.color = COLOR[status] || 'inherit';
    this._render();
  }

  _message(status) {
    return {
      needMore: NEED_MORE[this.mode],
      incorrect: 'Not quite — adjust your points and try again.',
      slopeRight: 'Your line has the right steepness — check where it crosses the y-axis.',
      interceptRight: 'It crosses the y-axis in the right place — check the slope.',
      systemPartial: 'One of your lines is correct — adjust the other.',
      vertexRight: 'The vertex is right — check how the parabola opens (move your second point).',
      shapeRight: 'The shape is right — move the vertex.',
    }[status] || '';
  }
}

if (!customElements.get('graph-plot')) {
  customElements.define('graph-plot', GraphPlotElement);
}
