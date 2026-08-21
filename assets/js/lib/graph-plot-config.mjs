import { GRAPH_PLOT_RENDER_DEFAULTS } from './graph-core.mjs';
import { GEOMETRY_EPSILON } from './geometry-constants.mjs';

const finite = (value) => typeof value === 'number' && Number.isFinite(value);

// A readability ceiling, not an engine limit: past a dozen handles the grid is
// crowded enough that dragging and checking stop being instructive. Typical
// precalculus point-plotting exercises ask for about five.
export const MAX_ANSWER_POINTS = 12;

function validatePoints(points) {
  if (!Array.isArray(points) || points.length === 0) {
    throw new Error('A points answer must be a non-empty array of [x, y] pairs');
  }
  if (points.length > MAX_ANSWER_POINTS) {
    throw new Error(`A points answer supports at most ${MAX_ANSWER_POINTS} points`);
  }
  points.forEach((point, index) => {
    if (!Array.isArray(point) || point.length !== 2 || !point.every(finite)) {
      throw new Error(`Answer point ${index + 1} must be an [x, y] pair of finite numbers`);
    }
  });
  for (let i = 0; i < points.length; i += 1) {
    for (let j = i + 1; j < points.length; j += 1) {
      if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
        throw new Error(`Answer points ${i + 1} and ${j + 1} are the same point`);
      }
    }
  }
}

function validateLine(line, where) {
  if (!line || typeof line !== 'object' || Array.isArray(line)) {
    throw new Error(`${where} must be an object`);
  }
  if (where !== 'Line answer' && line.plotPoints !== undefined) {
    throw new Error(`${where} does not support plotPoints`);
  }
  const forms = ['x', 'y', 'slope'].filter((name) => line[name] !== undefined);
  if (forms.length !== 1) throw new Error(`${where} needs exactly one of x, y, or slope`);
  const form = forms[0];
  if (!finite(line[form])) throw new Error(`${where} ${form} must be a finite number`);
  if (form === 'slope' && line.intercept !== undefined && !finite(line.intercept)) {
    throw new Error(`${where} intercept must be a finite number`);
  }
}

/**
 * Parse and validate the authored GraphPlot contract before any geometry loop
 * or interaction handler sees it, and return the EFFECTIVE render config —
 * the author's grid with `<graph-plot>`'s own defaults already applied.
 *
 * Returning the effective config is the point. The component used to hold its
 * defaults inline (`tickLabels: true, tickStep: 2, ...this.grid`) while this
 * function validated the raw authored grid, where `tickLabels` was undefined
 * and `tickStep` defaulted to the grid step. So the tick-label ceiling below
 * only ever ran on a config that had opted in by hand, and an authored
 * `{"grid":{"xMin":-1e6,"xMax":1e6}}` passed `npm run lint` clean and then
 * asked the browser for about a million tick labels — where buildGraph's own
 * stepCount guard throws, outside the component's parse try/catch.
 */
export function parseGraphPlotConfig(raw, snapRaw = 1) {
  let config;
  try {
    config = typeof raw === 'string' ? JSON.parse(raw) : raw;
  } catch {
    throw new Error('Graph configuration is not valid JSON');
  }
  if (!config || typeof config !== 'object' || Array.isArray(config)) {
    throw new Error('Graph configuration must be an object');
  }

  const answer = config.answer;
  if (!answer || typeof answer !== 'object' || Array.isArray(answer)) {
    throw new Error('Graph answer must be an object');
  }
  const answerForms = [
    answer.system !== undefined,
    answer.asymptotes !== undefined,
    answer.quadratic !== undefined,
    answer.points !== undefined,
    answer.x !== undefined || answer.y !== undefined || answer.slope !== undefined,
  ].filter(Boolean).length;
  if (answerForms !== 1) throw new Error('Graph answer must use exactly one answer form');
  let mode = 'line';
  if (answer.system !== undefined) {
    if (!Array.isArray(answer.system) || answer.system.length !== 2) {
      throw new Error('A system answer must contain exactly two lines');
    }
    answer.system.forEach((line, index) => validateLine(line, `System line ${index + 1}`));
    mode = 'system';
  } else if (answer.asymptotes !== undefined) {
    if (!Array.isArray(answer.asymptotes)
      || answer.asymptotes.length < 1 || answer.asymptotes.length > 3) {
      throw new Error('An asymptotes answer must contain one to three lines');
    }
    answer.asymptotes.forEach((line, index) => validateLine(line, `Asymptote ${index + 1}`));
    // {y: 3} and {slope: 0, intercept: 3} are the same line, so duplicates are
    // compared on the normalized line, not the authored spelling.
    const lineKey = (l) => (l.x !== undefined
      ? `x:${l.x}` : `m:${l.slope ?? 0},b:${l.y ?? l.intercept ?? 0}`);
    for (let i = 0; i < answer.asymptotes.length; i += 1) {
      for (let j = i + 1; j < answer.asymptotes.length; j += 1) {
        if (lineKey(answer.asymptotes[i]) === lineKey(answer.asymptotes[j])) {
          throw new Error(`Asymptotes ${i + 1} and ${j + 1} are the same line`);
        }
      }
    }
    mode = 'asymptotes';
  } else if (answer.quadratic !== undefined) {
    const q = answer.quadratic;
    if (!q || typeof q !== 'object' || !finite(q.a) || q.a === 0
      || (q.b !== undefined && !finite(q.b)) || (q.c !== undefined && !finite(q.c))) {
      throw new Error('Quadratic answer needs finite a, b, and c values with a nonzero a');
    }
    mode = 'quadratic';
  } else if (answer.points !== undefined) {
    validatePoints(answer.points);
    mode = 'points';
  } else {
    validateLine(answer, 'Line answer');
  }
  if (mode === 'line' || mode === 'quadratic') {
    if (answer.plotPoints !== undefined
      && (!Number.isInteger(answer.plotPoints)
        || answer.plotPoints < 2 || answer.plotPoints > MAX_ANSWER_POINTS)) {
      throw new Error(`plotPoints must be an integer between 2 and ${MAX_ANSWER_POINTS}`);
    }
  } else if (answer.plotPoints !== undefined) {
    throw new Error('plotPoints applies only to a line or quadratic answer');
  }

  const authoredGrid = config.grid ?? {};
  if (!authoredGrid || typeof authoredGrid !== 'object' || Array.isArray(authoredGrid)) {
    throw new Error('Graph grid must be an object');
  }
  const grid = { ...GRAPH_PLOT_RENDER_DEFAULTS, ...authoredGrid };
  const xMin = grid.xMin ?? -7;
  const xMax = grid.xMax ?? 7;
  const yMin = grid.yMin ?? -7;
  const yMax = grid.yMax ?? 7;
  if (![xMin, xMax, yMin, yMax].every(finite) || xMin >= xMax || yMin >= yMax) {
    throw new Error('Graph bounds must be finite and each minimum must be less than its maximum');
  }
  for (const name of ['gridStep', 'xGridStep', 'yGridStep', 'tickStep', 'xTickStep', 'yTickStep']) {
    if (grid[name] !== undefined && (!finite(grid[name]) || grid[name] <= 0)) {
      throw new Error(`${name} must be a positive number`);
    }
  }
  for (const [axis, span] of [['x', xMax - xMin], ['y', yMax - yMin]]) {
    const step = grid[`${axis}GridStep`] ?? grid.gridStep ?? 1;
    if (Math.floor(span / step) + 1 > 10_000) {
      throw new Error(`${axis}GridStep would generate too many grid lines`);
    }
    const tickStep = grid[`${axis}TickStep`] ?? grid.tickStep ?? step;
    if (grid.tickLabels && Math.floor(span / tickStep) + 1 > 10_000) {
      throw new Error(`${axis}TickStep would generate too many tick labels`);
    }
    // Both ceilings now run against the effective grid, so a config that would
    // throw inside buildGraph at render time is rejected here instead.
  }

  const snap = Number(snapRaw);
  if (!Number.isFinite(snap) || snap <= 0) throw new Error('snap must be a positive number');
  const columns = Math.floor((xMax - xMin) / snap) + 2;
  const rows = Math.floor((yMax - yMin) / snap) + 2;
  if (columns * rows > 100_000) throw new Error('Graph snap creates too many selectable grid points');

  // Reachability is measured against what `snapToGrid` can actually PRODUCE:
  // the snap lattice, plus each bound, because snapping rounds and only then
  // clamps. Modelling it as "an exact multiple of snap" alone rejected targets
  // the learner reaches by dragging into a grid edge that is not itself on the
  // lattice — `{"points":[[6.5,0]]}` at snap 1 on a ±6.5 grid threw at author
  // time for a point every off-grid drag lands on.
  const xs = reachableValues(xMin, xMax, snap);
  const ys = reachableValues(yMin, yMax, snap);
  const reaches = (values, v) => values.some((u) => Math.abs(u - v) < GEOMETRY_EPSILON);
  const reachesX = (x) => reaches(xs, x);
  const reachesY = (y) => reaches(ys, y);

  if (mode === 'points') {
    // Every target must be a point the student can actually reach. An
    // unreachable target ships an unwinnable exercise, so it fails here (and
    // in npm test, which parses every authored config through this function).
    answer.points.forEach(([x, y], index) => {
      if (x < xMin - GEOMETRY_EPSILON || x > xMax + GEOMETRY_EPSILON
        || y < yMin - GEOMETRY_EPSILON || y > yMax + GEOMETRY_EPSILON) {
        throw new Error(`Answer point ${index + 1} lies outside the grid bounds`);
      }
      if (!reachesX(x) || !reachesY(y)) {
        throw new Error(`Answer point ${index + 1} is not reachable with snap ${snap}`);
      }
    });
  }

  // Same unwinnable-exercise guard as `points` targets: the student must find
  // distinct reachable points ON each answer object inside the grid, so enough
  // of them must exist — `plotPoints` (default 2) for a lone line or
  // quadratic, and two per member line of a system or asymptote set.
  const latticePointsOnLine = (line) => {
    if (line.x !== undefined) {
      // A vertical line's x must be a reachable column; then every row works.
      if (!reachesX(line.x)) return 0;
      return ys.length;
    }
    const valueAt = (x) => (line.y !== undefined ? line.y : line.slope * x + (line.intercept ?? 0));
    return xs.filter((x) => reachesY(valueAt(x))).length;
  };
  if (mode === 'line' || mode === 'quadratic') {
    const required = answer.plotPoints ?? 2;
    let reachable = 0;
    if (mode === 'quadratic') {
      const q = answer.quadratic;
      reachable = xs.filter((x) => reachesY(q.a * x * x + (q.b ?? 0) * x + (q.c ?? 0))).length;
      const [h, k] = [-(q.b ?? 0) / (2 * q.a), (q.c ?? 0) - (q.b ?? 0) ** 2 / (4 * q.a)];
      if (!reachesX(h) || !reachesY(k)) {
        throw new Error(`The parabola's vertex (${h}, ${k}) is not reachable with snap ${snap}`);
      }
    } else {
      reachable = latticePointsOnLine(answer);
    }
    if (reachable < required) {
      throw new Error(`The answer has only ${reachable} snap-${snap} point(s) inside the grid, but the exercise asks for ${required}`);
    }
    // Enough is not the bar — the ask must have SLACK. A grid admitting
    // exactly N reachable points is winnable but has a single admissible
    // solution set, so the learner has none of the choice `plotPoints` exists
    // to give. Eight exercises shipped that way while the rule lived only in
    // the playbook as "count them and surface it in the handoff", which is the
    // kind of rule nothing enforces; this is the gate.
    if (reachable === required) {
      throw new Error(`The answer has exactly ${required} reachable snap-${snap} point(s) inside the grid, so the ${required} placed points are forced and the learner has no choice of which to plot — widen the grid (doubling it is the usual fix, and costs only tick density) or lower plotPoints`);
    }
  }
  if (mode === 'system' || mode === 'asymptotes') {
    const members = answer.system ?? answer.asymptotes;
    const noun = mode === 'system' ? 'System line' : 'Asymptote';
    members.forEach((line, index) => {
      const reachable = latticePointsOnLine(line);
      if (reachable < 2) {
        throw new Error(`${noun} ${index + 1} has only ${reachable} snap-${snap} point(s) inside the grid — the student cannot draw it`);
      }
    });
  }

  // `grid` carries the resolved bounds too, so a caller can spread it straight
  // into buildGraph as the whole render config.
  return { answer, grid: { ...grid, xMin, xMax, yMin, yMax }, mode, snap, xMin, xMax, yMin, yMax };
}

/**
 * Where a raw math coordinate lands: rounded to the snap lattice, THEN clamped
 * to the grid bounds. The one snapping model in the component and in
 * validation — the parser used to model reachability as "an exact multiple of
 * snap" while the component also clamped, so the two disagreed about every
 * bound that is not itself on the lattice.
 */
export function snapToGrid([x, y], { xMin, xMax, yMin, yMax, snap }) {
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  return [
    clamp(Math.round(x / snap) * snap, xMin, xMax),
    clamp(Math.round(y / snap) * snap, yMin, yMax),
  ];
}

/** Every value `snapToGrid` can produce on one axis, ascending. */
export function reachableValues(min, max, snap) {
  const values = new Set();
  const first = Math.ceil(min / snap - GEOMETRY_EPSILON);
  const last = Math.floor(max / snap + GEOMETRY_EPSILON);
  for (let index = first; index <= last; index += 1) {
    values.add(Math.min(max, Math.max(min, index * snap)));
  }
  // Clamping happens after rounding, so each bound is reachable whether or not
  // it sits on the lattice: it is where every drag past the edge lands.
  const onLattice = (v) => Math.abs(v - Math.round(v / snap) * snap) < GEOMETRY_EPSILON;
  if (!onLattice(min)) values.add(min);
  if (!onLattice(max)) values.add(max);
  return [...values].sort((a, b) => a - b);
}

/**
 * What a pointer press at math coordinates `at` means — `{ grab: index }`,
 * `{ place: [x, y] }`, or null for a press that does nothing.
 *
 * A press resolves to the lattice point it SNAPS ONTO. Deciding by a fixed
 * 0.6-unit grab radius instead made the two actions overlap the moment the
 * corpus grew its first sub-unit snap: at snap 0.5 the neighbouring lattice
 * point is 0.5 away — inside that radius — so pressing an EMPTY neighbour
 * grabbed the placed point and dragged it there, silently moving a point the
 * learner had already put in the right place. (It also left a dead band at
 * snap 1: a diagonal press 0.57 units from a placed point snapped back onto
 * that point's own cell, was too far to grab, and did nothing at all.)
 *
 * Extracted from the component so both branches are unit-testable without a
 * DOM — the browser tests drive the keyboard path only, which is why neither
 * defect showed up there.
 */
export function resolveGraphPress(state, at) {
  const { mode, pts, maxPoints, snap } = state;
  const p = snapToGrid(at, state);
  const next = pts.length;
  let here = -1;
  pts.forEach((q, i) => { if (q[0] === p[0] && q[1] === p[1]) here = i; });

  // Two crossing asymptotes — or the two lines of a system — legitimately
  // share their intersection point, and check-graph grades that as correct;
  // only the two points WITHIN one pair must differ. So while points remain to
  // be placed, a press on a cell held by an EARLIER pair places the next point
  // there rather than grabbing. Without this the natural way to draw the
  // hyperbola asymptotes that both pass through the origin — press (0,0) for
  // each line — was refused with no feedback. Every other mode grades a
  // duplicate as 'needMore', so there a press on an occupied cell still grabs.
  const paired = mode === 'system' || mode === 'asymptotes';
  const shares = paired && here >= 0 && next < maxPoints
    && Math.floor(here / 2) !== Math.floor(next / 2);

  if (here >= 0 && !shares) return { grab: here };
  if (next < maxPoints) return { place: p };
  // Every point is placed, so nothing competes with grabbing: a near miss may
  // take the nearest handle instead of demanding its exact cell, which on a
  // dense lattice is a small target.
  let best = snap;
  let grab = -1;
  pts.forEach((q, i) => {
    const d = Math.hypot(q[0] - at[0], q[1] - at[1]);
    if (d < best) { best = d; grab = i; }
  });
  return grab >= 0 ? { grab } : null;
}

/** Return a deterministic free snapped point, or null when the grid is full. */
export function findFreeGridPoint({ xMin, xMax, yMin, yMax, snap }, points) {
  const cx = (xMin + xMax) / 2;
  const cy = (yMin + yMax) / 2;
  const xs = reachableValues(xMin, xMax, snap);
  const ys = reachableValues(yMin, yMax, snap);
  const candidates = [];
  for (const x of xs) {
    for (const y of ys) candidates.push([x, y]);
  }
  candidates.sort((a, b) => (
    Math.abs(a[0] - cx) + Math.abs(a[1] - cy)
    - Math.abs(b[0] - cx) - Math.abs(b[1] - cy)
  ) || a[1] - b[1] || a[0] - b[0]);
  return candidates.find(([x, y]) => !points.some((p) => p[0] === x && p[1] === y)) ?? null;
}
