import assert from 'node:assert/strict';
import test from 'node:test';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { isGraphTopic, recordProblem, CONVERT_MODES } from './graphplot-conversion.mjs';

const exercise = (kind, question, raw = '') => ({
  kind, params: { question }, raw: raw || question,
});

test('isGraphTopic admits the three candidate classes and nothing else', () => {
  // A multiple choice whose options are rendered graphs.
  assert.ok(isGraphTopic(exercise('multiplechoice', 'Which is the graph of $y=2x$?',
    'question="…" {{< apfigure kind="graph" >}}…')));
  assert.ok(isGraphTopic(exercise('multiplechoice', 'Which shows it?', 'options with <svg viewBox=…>')));
  // A prompt that asks to produce a graph.
  assert.ok(isGraphTopic(exercise('fillin', 'Graph the line $y=2x$ and find its slope.')));
  assert.ok(isGraphTopic(exercise('fillin', 'Sketch the parabola and give its vertex.')));
  assert.ok(isGraphTopic(exercise('multiplechoice', 'After graphing, which quadrant is crossed?')));
  // An asymptote prompt (the newest answer form).
  assert.ok(isGraphTopic(exercise('fillin', 'Find the vertical asymptotes of $f$.')));
  // Not graph-topic: plain algebra, and word stems that merely contain the
  // letters ("photograph", "plotted against" is fine to admit, "graphite" not
  // asked here) must not match on substrings.
  assert.equal(isGraphTopic(exercise('fillin', 'Solve $2x+1=7$.')), false);
  assert.equal(isGraphTopic(exercise('fillin', 'A photograph is enlarged by a scale factor of 3…')), false);
  // Already a graphplot: never a candidate.
  assert.equal(isGraphTopic(exercise('graphplot', 'Graph the line $y=2x$.')), false);
});

test('recordProblem enforces the adjudication contract', () => {
  assert.equal(recordProblem({ hash: 'a', verdict: 'keep', note: 'reads a shown graph' }), null);
  for (const mode of CONVERT_MODES) {
    assert.equal(recordProblem({
      hash: 'a', verdict: 'convert', mode, proposal: '{"answer":…}', note: 'why',
    }), null);
  }
  assert.match(recordProblem({ verdict: 'keep', note: 'n' }), /hash/);
  assert.match(recordProblem({ hash: 'a', verdict: 'maybe', note: 'n' }), /verdict/);
  assert.match(recordProblem({ hash: 'a', verdict: 'convert', mode: 'circle', proposal: 'p', note: 'n' }), /mode/);
  assert.match(recordProblem({ hash: 'a', verdict: 'convert', mode: 'line', note: 'n' }), /proposal/);
  assert.match(recordProblem({ hash: 'a', verdict: 'keep' }), /note/);
});

test('merge refuses a batch with conflicting verdicts for one exercise', () => {
  const dir = mkdtempSync(join(tmpdir(), 'graphable-'));
  writeFileSync(join(dir, 'a.json'), JSON.stringify({
    results: [{ hash: 'feedbeeffeedbeef', verdict: 'keep', note: 'reads a shown graph' }],
  }));
  writeFileSync(join(dir, 'b.json'), JSON.stringify({
    results: [{ hash: 'feedbeeffeedbeef', verdict: 'convert', mode: 'line', proposal: 'p', note: 'drawable' }],
  }));
  assert.throws(
    () => execFileSync('node', ['tools/graphplot-conversion.mjs', 'merge', dir], { stdio: 'pipe' }),
    (error) => {
      assert.match(String(error.stderr), /conflict feedbeeffeedbeef/);
      assert.match(String(error.stderr), /nothing merged/);
      return true;
    },
  );
});

test('merge refuses a batch that agrees on convert but disagrees on the mode', () => {
  // The verdict is not the whole decision — `mode` names the answer form the
  // converting session will author. Comparing verdicts alone let two passes
  // that had read the same exercise as a line and as a quadratic merge
  // cleanly, with the alphabetically-later result file picking, which is the
  // file-order resolution this refusal exists to prevent.
  const dir = mkdtempSync(join(tmpdir(), 'graphable-'));
  writeFileSync(join(dir, 'a.json'), JSON.stringify({
    results: [{
      hash: 'feedbeeffeedbeef', verdict: 'convert', mode: 'line', proposal: 'p', note: 'a line',
    }],
  }));
  writeFileSync(join(dir, 'b.json'), JSON.stringify({
    results: [{
      hash: 'feedbeeffeedbeef', verdict: 'convert', mode: 'quadratic', proposal: 'q', note: 'a parabola',
    }],
  }));
  assert.throws(
    () => execFileSync('node', ['tools/graphplot-conversion.mjs', 'merge', dir], { stdio: 'pipe' }),
    (error) => {
      assert.match(String(error.stderr), /conflict feedbeeffeedbeef: convert\/line .* vs convert\/quadratic/);
      assert.match(String(error.stderr), /nothing merged/);
      return true;
    },
  );
});
