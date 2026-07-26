const finite = (value) => typeof value === 'number' && Number.isFinite(value);

function validateLine(line, where) {
  if (!line || typeof line !== 'object' || Array.isArray(line)) {
    throw new Error(`${where} must be an object`);
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
 * or interaction handler sees it.
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
    answer.quadratic !== undefined,
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
  } else if (answer.quadratic !== undefined) {
    const q = answer.quadratic;
    if (!q || typeof q !== 'object' || !finite(q.a) || q.a === 0
      || (q.b !== undefined && !finite(q.b)) || (q.c !== undefined && !finite(q.c))) {
      throw new Error('Quadratic answer needs finite a, b, and c values with a nonzero a');
    }
    mode = 'quadratic';
  } else {
    validateLine(answer, 'Line answer');
  }

  const grid = config.grid ?? {};
  if (!grid || typeof grid !== 'object' || Array.isArray(grid)) {
    throw new Error('Graph grid must be an object');
  }
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
  }

  const snap = Number(snapRaw);
  if (!Number.isFinite(snap) || snap <= 0) throw new Error('snap must be a positive number');
  const columns = Math.floor((xMax - xMin) / snap) + 2;
  const rows = Math.floor((yMax - yMin) / snap) + 2;
  if (columns * rows > 100_000) throw new Error('Graph snap creates too many selectable grid points');

  return { answer, grid, mode, snap, xMin, xMax, yMin, yMax };
}

function valuesInRange(min, max, snap) {
  const values = new Set([min, max]);
  const first = Math.ceil(min / snap);
  const last = Math.floor(max / snap);
  for (let index = first; index <= last; index += 1) {
    values.add(Math.min(max, Math.max(min, index * snap)));
  }
  return [...values];
}

/** Return a deterministic free snapped point, or null when the grid is full. */
export function findFreeGridPoint({ xMin, xMax, yMin, yMax, snap }, points) {
  const cx = (xMin + xMax) / 2;
  const cy = (yMin + yMax) / 2;
  const xs = valuesInRange(xMin, xMax, snap);
  const ys = valuesInRange(yMin, yMax, snap);
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
