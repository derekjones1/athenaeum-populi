// Geometry tests for the chapter-10 double-cone schematics.
//
// October 13, 2026: a hidden (dashed) trace run is dashed by keeping alternate
// sample segments, and an even segment count dropped the last one, so the
// hidden parabola branch stopped a whole sample (~7 px) short of the rim — and
// the hyperbola's and the crossing lines' hidden ends likewise. Every branch
// end must now land ON the base rim it reaches.

import test from 'node:test';
import assert from 'node:assert/strict';
import { panel, compose } from './cone-schematic.mjs';

const H = 3, R = 1.6, k = R / H;
const P = ([x, y, z]) => [x + 0.42 * y, z + 0.28 * y];
const key = ([x, y]) => `${x},${y}`;

/** distance of a projected point from the rim circle at height zc (0 = on it) */
const rimMiss = ([X, Z], zc) => {
  const y = (Z - zc) / 0.28, x = X - 0.42 * y;
  return Math.abs(Math.hypot(x, y) - R);
};
const onRim = (p) => Math.min(rimMiss(p, -H), rimMiss(p, H)) < 0.002;

/** trace segments: neither a rim chord nor a silhouette generator from the apex */
function trace(segments) {
  return segments.filter((s) => !(onRim(s.from) && onRim(s.to)) && !(s.from[0] === 0 && s.from[1] === 0));
}

/** every point a trace segment ends at, rounded the way the tool rounds */
const endpoints = (segs) => new Set(segs.flatMap((s) => [key(s.from), key(s.to)]));
const fx = (p) => p.map((v) => +v.toFixed(3));

test('the hidden parabola branch reaches the rim at its exact intersection', () => {
  const d = 1.0, Y = Math.sqrt(2 * k * d * H - d * d); // the trace's own rim crossing
  for (const opts of [{}, { rimSamples: 60, traceSamples: 40 }]) {
    const ends = endpoints(trace(panel('parabola', 0, opts).segments));
    // y = +Y is behind the cone (dashed); y = −Y in front (solid)
    assert.ok(ends.has(key(fx(P([-k * H + d, Y, -H])))), `hidden end on the rim ${JSON.stringify(opts)}`);
    assert.ok(ends.has(key(fx(P([-k * H + d, -Y, -H])))), `front end on the rim ${JSON.stringify(opts)}`);
  }
});

test('every open trace touches the rim once per branch end', () => {
  // hyperbola: two branches × two ends; parabola: one branch × two ends;
  // crossing lines: two generators × two rim ends
  for (const [kind, want] of [['hyperbola', 4], ['parabola', 2], ['lines', 4]]) {
    for (const opts of [{}, { traceSamples: 40 }, { traceSamples: 41 }]) {
      const segs = trace(panel(kind, 0, opts).segments);
      const rimEnds = [...endpoints(segs)].map((s) => s.split(',').map(Number)).filter(onRim);
      assert.equal(rimEnds.length, want, `${kind} ${JSON.stringify(opts)}`);
    }
  }
});

test('a closed trace keeps no rim contact, and the sample options set the counts', () => {
  for (const kind of ['ellipse', 'circle']) {
    assert.equal(trace(panel(kind, 0, {}).segments).filter((s) => onRim(s.from) || onRim(s.to)).length, 0);
  }
  // per rim: a solid front half of rimSamples chords + every other chord of the back half
  const rimChords = (o) => panel('point', 0, o).segments.filter((s) => onRim(s.from) && onRim(s.to)).length;
  assert.equal(rimChords({}), 2 * (24 + 12));
  assert.equal(rimChords({ rimSamples: 60 }), 2 * (60 + 30));
  const out = compose([{ kind: 'parabola', rimSamples: 60, traceSamples: 40 }], 'x', 44);
  assert.equal(out.segments.length, 215, 'the 10.3 figure as emitted');
});
