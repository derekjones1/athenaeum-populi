import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const fixture = mkdtempSync(join(tmpdir(), 'athenaeum-build-audit-'));
const validKatexCss = '.katex .katex-mathml{clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;width:1px}';
const katexPartial = readFileSync(
  new URL('../themes/hextra/layouts/_partials/scripts/katex.html', import.meta.url),
  'utf8',
);

assert.ok(
  /\$minSuffix\s*:=\s*"\.min"/.test(katexPartial)
    || existsSync(new URL('../static/katex/katex.css', import.meta.url)),
  'development must request a vendored KaTeX CSS filename that actually exists',
);

function prepare(body, extraFiles = [], { head = '', katexCss = validKatexCss } = {}) {
  rmSync(fixture, { recursive: true, force: true });
  mkdirSync(join(fixture, 'katex'), { recursive: true });
  mkdirSync(join(fixture, 'pagefind'), { recursive: true });
  writeFileSync(join(fixture, 'katex', 'katex.min.css'), katexCss);
  writeFileSync(join(fixture, 'pagefind', 'pagefind.js'), '');
  writeFileSync(join(fixture, '_headers'), [
    '/*',
    '  Strict-Transport-Security: max-age=31536000',
    '  X-Content-Type-Options: nosniff',
    '  X-Frame-Options: DENY',
    '  Referrer-Policy: strict-origin-when-cross-origin',
    '  Permissions-Policy: camera=(), microphone=(), geolocation=()',
    '  Cross-Origin-Opener-Policy: same-origin',
    '/js/*',
    '  Cache-Control: public, max-age=31536000, immutable',
    '/css/compiled/*',
    '  Cache-Control: public, max-age=31536000, immutable',
    '',
  ].join('\n'));
  writeFileSync(
    join(fixture, 'index.html'),
    `<!doctype html><head>${head}</head><nav><img src="/images/logo.svg" alt="Logo"></nav><main id="content">${body}</main>`,
  );
  for (const file of extraFiles) {
    const path = join(fixture, file);
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, 'fixture');
  }
}

function audit() {
  return spawnSync(process.execPath, ['tools/audit-build.mjs', fixture], {
    cwd: new URL('..', import.meta.url),
    encoding: 'utf8',
  });
}

try {
  prepare('<p>Semantic content.</p>');
  assert.equal(audit().status, 0, 'theme chrome outside main#content should be allowed');

  prepare('<p>placeholder</p>');
  writeFileSync(
    join(fixture, 'index.html'),
    '<!doctype html><head><link rel="canonical" href="/new/"><meta http-equiv="refresh" content="0; url=/new/"></head>',
  );
  assert.equal(audit().status, 0, 'a well-formed same-site Hugo alias redirect should pass without main#content');

  prepare('<p>placeholder</p>');
  writeFileSync(
    join(fixture, 'index.html'),
    '<!doctype html><head><link rel="canonical" href="/new/"><meta http-equiv="refresh" content="0; url=/elsewhere/"></head>',
  );
  assert.match(
    audit().stderr,
    /main#content missing or empty/,
    'an incomplete or inconsistent redirect must not bypass the content-shell audit',
  );

  prepare('<p>Semantic content.</p>', ['js/runtime.js']);
  writeFileSync(join(fixture, 'js/runtime.js'), 'import("https://cdn.jsdelivr.net/npm/example")');
  assert.match(
    audit().stderr,
    /CDN dependency/,
    'emitted JavaScript must be included in the runtime dependency audit',
  );

  prepare('<p>Semantic content.</p>', ['css/runtime.css']);
  writeFileSync(join(fixture, 'css/runtime.css'), '@import "https://unpkg.com/example/style.css";');
  assert.match(
    audit().stderr,
    /CDN dependency/,
    'emitted CSS must be included in the runtime dependency audit',
  );

  const remoteDependencies = [
    ['js/runtime.js', 'import thing from "https://modules.example.test/thing.js";'],
    ['js/runtime.js', 'fetch("https://cdn.skypack.dev/example");'],
    ['css/runtime.css', '@import url("https://cdnjs.cloudflare.com/ajax/libs/example.css");'],
    [null, '<script type="module" src="https://ga.jspm.io/npm:example"></script>'],
    [null, '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Example">'],
  ];
  for (const [file, source] of remoteDependencies) {
    prepare(file ? '<p>Semantic content.</p>' : source, file ? [file] : []);
    if (file) writeFileSync(join(fixture, file), source);
    assert.match(
      audit().stderr,
      /CDN dependency/,
      `runtime dependency must be rejected: ${source}`,
    );
  }

  prepare('<a href="https://cdnjs.cloudflare.com/">CDN project documentation</a>');
  assert.equal(
    audit().status,
    0,
    'an ordinary external hyperlink is navigation, not a runtime dependency',
  );

  {
    // Success-path fixture assets under /js/ must be content-hashed like the
    // real artifact (the audit couples the immutable cache prefix to
    // fingerprinted filenames), and the esm.run help string is only allowed
    // by PROVENANCE — inside the engine bundles built from the pinned
    // MathLive/Compute Engine dependencies, which is where it really lives.
    const inertHelp = 'console.error(`MathLive: Load the library, for example with:\\nimport "https://esm.run/@cortex-js/compute-engine"`);';
    prepare('<p>Semantic content.</p>');
    const digest = createHash('sha256').update(inertHelp).digest('hex');
    mkdirSync(join(fixture, 'js'), { recursive: true });
    writeFileSync(join(fixture, `js/fillin-engine.${digest}.js`), inertHelp);
    assert.equal(
      audit().status,
      0,
      'an import example embedded in inert template-literal help text is not a runtime dependency',
    );
    // The SAME string in a non-engine first-party bundle is not covered by
    // that provenance and must fail.
    prepare('<p>Semantic content.</p>');
    mkdirSync(join(fixture, 'js'), { recursive: true });
    writeFileSync(join(fixture, `js/runtime.${digest}.js`), inertHelp);
    assert.match(
      audit().stderr,
      /unexpected host\(s\): esm\.run/,
      'engine-only host allowances must not extend to other first-party bundles',
    );
  }

  prepare('<pre><code>url(/documentation.png) data:image/png;base64,AAAA</code></pre>');
  assert.equal(audit().status, 0, 'rendered documentation examples should not count as page media');

  const pairedMath = '<span class="katex"><span class="katex-mathml"><math></math></span><span class="katex-html">x</span></span>';
  const katexLink = '<link rel="stylesheet" href="/katex/katex.min.css">';
  prepare(pairedMath, [], { head: katexLink });
  assert.equal(audit().status, 0, 'paired KaTeX output with the vendored stylesheet should pass');

  prepare(pairedMath);
  assert.match(
    audit().stderr,
    /KaTeX stylesheet link missing/,
    'rendered math without its stylesheet must fail',
  );

  prepare(pairedMath, [], { head: '<link rel="stylesheet" href="/katex/katex.css">' });
  assert.match(
    audit().stderr,
    /stylesheet link does not resolve to a built file/,
    'a plausible KaTeX URL must still resolve to an emitted build artifact',
  );

  prepare('<span class="katex"><span class="katex-mathml"><math></math></span></span>', [], { head: katexLink });
  assert.match(
    audit().stderr,
    /visual\/accessibility render count mismatch/,
    'a missing KaTeX visual or accessibility layer must fail',
  );

  prepare('<p>Semantic content.</p>', [], { katexCss: '.katex{font-size:1em}' });
  assert.match(
    audit().stderr,
    /does not hide the duplicate visual accessibility layer/,
    'vendored KaTeX CSS must retain its hidden accessibility-layer contract',
  );

  const rejected = [
    ['<img src="/textbook.svg" alt="A textbook diagram">', [], 'file-backed content image markup'],
    ['<pre><img src="/textbook.svg" alt="A textbook diagram"></pre>', [], 'file-backed content image markup'],
    ['<pre><span style="background:url(https://example.test/art)">Art</span></pre>', [], 'file-backed content image URL'],
    ['<div style="background:url(https://example.test/art)">Art</div>', [], 'file-backed content image URL'],
    ['<svg role="img" aria-label="A plot"><use href="/textbook.svg#plot"></use></svg>', [], 'external SVG resource'],
    ['<object type="image/png" data="https://example.test/art"></object>', [], 'file-backed content image markup'],
    ['<div style="background:image-set(\'https://example.test/art\' 1x)">Art</div>', [], 'file-backed content image URL'],
    ['<p>Semantic content.</p>', ['chapter/diagram.jfif'], 'content image asset'],
  ];
  for (const [body, files, expected] of rejected) {
    prepare(body, files);
    const result = audit();
    assert.notEqual(result.status, 0, `expected build audit failure for ${JSON.stringify(body || files)}`);
    assert.match(result.stderr, new RegExp(expected), result.stderr);
  }
} finally {
  rmSync(fixture, { recursive: true, force: true });
}

console.log('build audit: content images and duplicate-math rendering regressions rejected');
