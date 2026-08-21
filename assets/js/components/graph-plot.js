/**
 * <graph-plot> — framework-free "graph it yourself" exercise.
 * The student places or drags points; the component rebuilds the object those
 * points determine (via buildGraph) and grades the OBJECT (checkGraphPlot),
 * with diagnostic feedback. In `points` mode the placed set IS the object:
 * the answer lists up to 12 target points and every one must be placed. Geometry + grader load lazily from the graphplot
 * engine (no MathLive).
 *
 * Config arrives as JSON in a data-config attribute: { answer, grid }.
 */
import { graphplotEngineUrl } from '@params';
import {
  findFreeGridPoint, parseGraphPlotConfig, resolveGraphPress, snapToGrid,
} from '../lib/graph-plot-config.mjs';
// The one U+2212 formatter. This file used to carry its own copy, so a change
// to the shared one silently missed the point-handle labels.
import { mathMinus as fmt } from '../lib/graph-core.mjs';

const SVGNS = 'http://www.w3.org/2000/svg';
const camelToKebab = (s) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());

// The `--ap-*` fallback hexes below duplicate assets/css/custom.css, which is
// the source of truth for the palette. They exist only for the moment before
// the stylesheet applies; keep them in step with custom.css when it changes.
const COLOR = {
  correct: 'var(--ap-success, #1a7f37)',
  incorrect: 'var(--ap-error, #b42318)',
  needMore: 'var(--ap-muted, #6f6e69)',
  slopeRight: 'var(--ap-warning, #9a6700)',
  interceptRight: 'var(--ap-warning, #9a6700)',
  systemPartial: 'var(--ap-warning, #9a6700)',
  vertexRight: 'var(--ap-warning, #9a6700)',
  shapeRight: 'var(--ap-warning, #9a6700)',
  pointsPartial: 'var(--ap-warning, #9a6700)',
  asymptotePartial: 'var(--ap-warning, #9a6700)',
  notCollinear: 'var(--ap-warning, #9a6700)',
  notOnParabola: 'var(--ap-warning, #9a6700)',
};
// Instruction sentences spell counts out ("three points"), matching the prose
// register of the fixed strings below. plotPoints is capped at 12, so the
// list is complete.
const COUNT_WORDS = [, , 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
// `points` mode phrases its instructions from the answer's point count, so it
// lives in _instructionsText/_message rather than these fixed maps.
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
// One counter for every generated id in this component (instructions, hints).
let idSequence = 0;

class GraphPlotElement extends HTMLElement {
  connectedCallback() {
    if (this._built) return;
    this._built = true;

    let cfg;
    try {
      cfg = parseGraphPlotConfig(this.dataset.config || '{}', this.dataset.snap || 1);
    } catch (error) {
      this.querySelector('.ap-graphplot')?.append(this._errorMessage(error.message));
      return;
    }
    this.answer = cfg.answer;
    this.grid = cfg.grid;
    this.ariaLabel = this.dataset.ariaLabel || '';
    this.snap = cfg.snap;
    this.mode = cfg.mode;
    this.maxPoints = this.mode === 'system' ? 4
      : this.mode === 'asymptotes' ? this.answer.asymptotes.length * 2
        : this.mode === 'points' ? this.answer.points.length
          : (this.answer.plotPoints ?? 2);
    this.xMin = cfg.xMin; this.xMax = cfg.xMax;
    this.yMin = cfg.yMin; this.yMax = cfg.yMax;
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
    instr.textContent = this._instructionsText();
    // The same sentence was also concatenated into the SVG's aria-label, so a
    // screen reader read the instructions twice — once as visible prose and
    // again as part of the figure's name. Reference the prose instead.
    idSequence += 1;
    instr.id = `ap-graphplot-instructions-${idSequence}`;
    this._instructionsId = instr.id;

    this.svg = document.createElementNS(SVGNS, 'svg');
    this.svg.setAttribute('role', 'application');
    this.svg.setAttribute('aria-describedby', this._instructionsId);
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
      const hintId = `ap-graphplot-hint-${++idSequence}`;
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
      this.wrap.append(hintBtn, hint);
    }
  }

  _instructionsText() {
    if (this.mode === 'points') {
      return this.maxPoints === 1
        ? 'Place the point asked for in the question.'
        : `Place all ${this.maxPoints} points asked for in the question.`;
    }
    if (this.mode === 'line' && this.maxPoints > 2) {
      return `Place ${COUNT_WORDS[this.maxPoints]} points on the line.`;
    }
    if (this.mode === 'quadratic' && this.maxPoints > 2) {
      return `Place the vertex first, then ${COUNT_WORDS[this.maxPoints - 1]} more points on the parabola.`;
    }
    if (this.mode === 'asymptotes') {
      const n = this.answer.asymptotes.length;
      if (n === 1) return 'Place two points on the asymptote.';
      if (n === 2) return 'Place two points on each asymptote — the first two make one asymptote, the next two the other.';
      return `Place two points on each of the ${COUNT_WORDS[n]} asymptotes — each pair of points in turn makes one asymptote.`;
    }
    return INSTRUCTIONS[this.mode];
  }

  _btn(label, onClick) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'ap-graphplot-btn';
    b.textContent = label;
    b.addEventListener('click', onClick);
    return b;
  }

  _errorMessage(detail = '') {
    const error = document.createElement('p');
    error.className = 'ap-fillin-feedback';
    error.setAttribute('role', 'alert');
    error.style.color = COLOR.incorrect;
    error.textContent = detail
      ? `This graph exercise is unavailable: ${detail}.`
      : 'This graph exercise could not load. Please reload the page and try again.';
    return error;
  }

  async _loadEngine() {
    try {
      const eng = await import(graphplotEngineUrl);
      this.buildGraph = eng.buildGraph;
      this.checkGraphPlot = eng.checkGraphPlot;
      this.correctPointCount = eng.correctPointCount;
      this.correctAsymptoteCount = eng.correctAsymptoteCount;

      this.svg.addEventListener('pointerdown', (e) => this._onDown(e));
      this.svg.addEventListener('pointermove', (e) => this._onMove(e));
      this.svg.addEventListener('pointerup', () => (this.dragIndex = null));
      this.svg.addEventListener('pointercancel', () => (this.dragIndex = null));

      this.checkBtn.disabled = false;
      this.addBtn.disabled = false;
      this._render();
    } catch (error) {
      console.error('Graph exercise failed to load', error);
      this.feedback.replaceWith(this._errorMessage());
    }
  }

  // --- geometry helpers -----------------------------------------------------
  // Snapping lives in graph-plot-config so validation measures reachability
  // against the same rounding-then-clamping the component performs.
  _snapPt(at) { return snapToGrid(at, this); }
  _toMath(e) {
    const rect = this.svg.getBoundingClientRect();
    // The viewBox origin is no longer always 0 0: the fit pass shifts it
    // whenever a label (e.g. a dragged vertex's) pokes past the natural box.
    const box = this.g.box || { x: 0, y: 0, w: this.g.width, h: this.g.height };
    const X = box.x + ((e.clientX - rect.left) / rect.width) * box.w;
    const Y = box.y + ((e.clientY - rect.top) / rect.height) * box.h;
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
    } else if (this.mode === 'line') {
      // One line only, previewed through the first two points — with
      // plotPoints > 2 the later points are dots on (or off) that line, never
      // the start of a second line.
      const [p, q] = this.pts;
      if (p && q && (p[0] !== q[0] || p[1] !== q[1])) {
        lines.push(p[0] === q[0] ? { x: p[0] } : { through: [p, q] });
      }
    } else if (this.mode === 'system' || this.mode === 'asymptotes') {
      // Asymptote pairs preview dashed — guide-ink convention for asymptotes
      // everywhere else in the book's figures.
      for (let i = 0; i + 1 < this.pts.length; i += 2) {
        const [p, q] = [this.pts[i], this.pts[i + 1]];
        if (p && q && (p[0] !== q[0] || p[1] !== q[1])) {
          lines.push({
            ...(p[0] === q[0] ? { x: p[0] } : { through: [p, q] }),
            ...(this.mode === 'asymptotes' ? { dashed: true } : {}),
          });
        }
      }
    }
    return { lines, quadratics };
  }

  _render(focusIndex = null) {
    const { lines, quadratics } = this._objects();
    // `this.grid` is the EFFECTIVE config parseGraphPlotConfig returned —
    // render defaults and resolved bounds included. Do not reintroduce inline
    // defaults here: what is validated has to be what is rendered.
    this.g = this.buildGraph({
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
    // The mode instructions live in the visible <p> this SVG is described by;
    // the name is the figure plus the interaction affordance only.
    this.svg.setAttribute('aria-label',
      `${this.ariaLabel} Click or tap to place points; drag to adjust.`);

    // rebuild children
    while (this.svg.firstChild) this.svg.removeChild(this.svg.firstChild);
    for (const { tag, attrs, text } of g.els) {
      const el = document.createElementNS(SVGNS, tag);
      for (const [k, v] of Object.entries(attrs)) el.setAttribute(camelToKebab(k), v);
      if (text !== undefined) el.textContent = text;
      this.svg.appendChild(el);
    }
    // focusable grab handles
    this.handles = [];
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
      this.handles.push(c);
    });

    this.clearBtn.disabled = this.done || this.pts.length === 0;
    this.addBtn.disabled = this.done || this.pts.length >= this.maxPoints;
    if (focusIndex !== null && this.handles[focusIndex]) this.handles[focusIndex].focus();
  }

  _handleName(i) {
    if (this.mode === 'quadratic' && i === 0) return 'Vertex';
    if (this.mode === 'system') return `Point ${i + 1} (line ${i < 2 ? 1 : 2})`;
    if (this.mode === 'asymptotes' && this.answer.asymptotes.length > 1) {
      return `Point ${i + 1} (asymptote ${Math.floor(i / 2) + 1})`;
    }
    return `Point ${i + 1}`;
  }

  // --- interaction ----------------------------------------------------------
  _onDown(e) {
    if (this.done || !this.g) return;
    e.preventDefault();
    // Grab-or-place is decided in graph-plot-config, against the snapped cell
    // rather than a fixed radius — see resolveGraphPress for why.
    const action = resolveGraphPress(this, this._toMath(e));
    if (!action) return;
    if (action.grab !== undefined) {
      this.dragIndex = action.grab;
    } else {
      this.dragIndex = this.pts.length;
      this.pts.push(action.place);
      this._resetStatus();
      this._render();
    }
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
      this._render(i);
    } else if (e.key === 'Delete' || e.key === 'Backspace') {
      e.preventDefault();
      this.pts.splice(i, 1);
      this._resetStatus();
      this._render();
      if (this.handles.length) this.handles[Math.min(i, this.handles.length - 1)].focus();
      else this.addBtn.focus();
    }
  }
  _addPointKeyboard() {
    if (this.done || this.pts.length >= this.maxPoints) return;
    const p = findFreeGridPoint(this, this.pts);
    if (!p) {
      this.feedback.textContent = 'No unused grid points are available.';
      this.feedback.style.color = COLOR.needMore;
      this.addBtn.disabled = true;
      return;
    }
    this.pts.push(p);
    this._resetStatus();
    this._render(this.pts.length - 1);
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
      // Disabling the focused Check button drops focus to <body>. Move focus
      // to the result first whenever it is anywhere inside the component.
      const hadFocus = this.contains(document.activeElement);
      this.feedback.innerHTML = this.answerDisplayHTML ? `Correct — ${this.answerDisplayHTML}.` : 'Correct!';
      if (hadFocus) {
        this.feedback.setAttribute('tabindex', '-1');
        this.feedback.focus();
      }
      this.checkBtn.disabled = this.clearBtn.disabled = this.addBtn.disabled = true;
    } else {
      this.feedback.textContent = this._message(status);
    }
    this.feedback.style.color = COLOR[status] || 'inherit';
    this._render();
  }

  _message(status) {
    if (status === 'needMore' && this.mode === 'points') {
      return this.maxPoints === 1
        ? 'Place the point on the grid first.'
        : `Place all ${this.maxPoints} points on the grid first.`;
    }
    if (status === 'needMore' && this.mode === 'line' && this.maxPoints > 2) {
      return `Place ${COUNT_WORDS[this.maxPoints]} different points on the grid first.`;
    }
    if (status === 'needMore' && this.mode === 'quadratic' && this.maxPoints > 2) {
      return `Place the vertex and ${COUNT_WORDS[this.maxPoints - 1]} more points, each at a different x-value.`;
    }
    if (status === 'needMore' && this.mode === 'asymptotes') {
      const n = this.answer.asymptotes.length;
      return n === 1 ? 'Place two different points on the grid first.'
        : `Place ${COUNT_WORDS[2 * n]} points — two for each asymptote.`;
    }
    if (status === 'pointsPartial') {
      const n = this.correctPointCount(this.pts, this.answer.points);
      return `${n} of the ${this.maxPoints} points ${n === 1 ? 'is' : 'are'} placed correctly — adjust the others.`;
    }
    if (status === 'asymptotePartial') {
      const k = this.answer.asymptotes.length;
      const n = this.correctAsymptoteCount(this.pts, this.answer.asymptotes);
      return `${n} of the ${k} asymptotes ${n === 1 ? 'is' : 'are'} placed correctly — adjust the ${k - n === 1 ? 'other' : 'others'}.`;
    }
    return {
      needMore: NEED_MORE[this.mode],
      incorrect: 'Not quite — adjust your points and try again.',
      slopeRight: 'Your line has the right steepness — check where it crosses the y-axis.',
      interceptRight: 'It crosses the y-axis in the right place — check the slope.',
      systemPartial: 'One of your lines is correct — adjust the other.',
      vertexRight: this.maxPoints > 2
        ? 'The vertex is right — check how the parabola opens (move your other points).'
        : 'The vertex is right — check how the parabola opens (move your second point).',
      shapeRight: 'The shape is right — move the vertex.',
      notCollinear: 'Your points do not all lie on one straight line — line them up first.',
      notOnParabola: 'Your points do not all lie on one parabola — adjust them so every point sits on the curve.',
    }[status] || '';
  }
}

if (!customElements.get('graph-plot')) {
  customElements.define('graph-plot', GraphPlotElement);
}
