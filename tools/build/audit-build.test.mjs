import assert from 'node:assert/strict';
import test from 'node:test';
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
  new URL('../../themes/hextra/layouts/_partials/scripts/katex.html', import.meta.url),
  'utf8',
);

assert.ok(
  /\$minSuffix\s*:=\s*"\.min"/.test(katexPartial)
    || existsSync(new URL('../../static/katex/katex.css', import.meta.url)),
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
  // The nine site-chrome icons/logos are a required floor (favicons.html and
  // the navbar reference them all); the baseline fixture ships the full set.
  for (const file of [
    'android-chrome-192x192.png',
    'android-chrome-512x512.png',
    'apple-touch-icon.png',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'favicon.ico',
    'favicon.svg',
    join('images', 'logo-dark.svg'),
    join('images', 'logo.svg'),
  ]) {
    const path = join(fixture, file);
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, 'fixture');
  }
  for (const file of extraFiles) {
    const path = join(fixture, file);
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, 'fixture');
  }
}

// A directory that `prepare()` never creates (it wipes and rebuilds the
// fixture root from scratch each call), so every test below gets an EMPTY
// media-manifest set by default — never the repository's real data/media —
// unless a test writes its own manifest here first.
const mediaManifestDir = join(fixture, 'media-manifests');

function audit() {
  return spawnSync(process.execPath, ['tools/build/audit-build.mjs', fixture, '--data-dir', mediaManifestDir], {
    cwd: new URL('../..', import.meta.url),
    encoding: 'utf8',
  });
}

function writeMediaManifest(book, figures) {
  mkdirSync(mediaManifestDir, { recursive: true });
  writeFileSync(join(mediaManifestDir, `${book}.json`), JSON.stringify({ schemaVersion: 1, book, figures }));
}

function writeMediaVariant(book, file, content = 'fixture') {
  const path = join(fixture, 'media', book, file);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
}

test('build audit: content images, duplicated chrome, and missing no-JavaScript notices rejected', () => {
  try {
    prepare('<p>Semantic content.</p>');
    assert.equal(audit().status, 0, 'theme chrome outside main#content should be allowed');

    // Inline math inside the article is the passthrough renderer's job, so a
    // $...$ run there is not the audit's concern; the same run in the rail's
    // heading list or the <title> is a heading/title that bypassed mathtext.
    prepare('<p>Simplify $x^2+bx+c$.</p><h2>Factor $x^2+bx+c$</h2>');
    assert.equal(audit().status, 0, 'raw TeX inside main#content is rendered by Hugo, not a chrome leak');
    prepare('<p>Semantic content.</p>');
    writeFileSync(
      join(fixture, 'index.html'),
      readFileSync(join(fixture, 'index.html'), 'utf8')
        .replace('</main>', '</main><nav class="hextra-toc"><a href="#f">Factor $x^2+bx+c$</a></nav>'),
    );
    assert.match(audit().stderr, /site chrome prints raw TeX/, 'a rail heading printed as TeX must fail the build');
    prepare('<h1>Factor $x^2+bx+c$</h1><p>Semantic content.</p>');
    assert.match(audit().stderr, /page <h1> prints raw TeX/, 'a front-matter title written in TeX must fail the build');

    prepare('<p>Semantic content.</p>');
    rmSync(join(fixture, 'images', 'logo-dark.svg'));
    assert.match(
      audit().stderr,
      /site-chrome icon\/logo file\(s\) missing/,
      'a missing navbar logo or favicon is a shipped 404, not an optional asset',
    );

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
    // The full preload contract: every face the corpus uses, each with
    // `crossorigin`, each resolving to an emitted font file. Safari repaints
    // swapped KaTeX fonts without re-laying-out the vlists, so math pages must
    // load real metrics before first layout.
    const katexFaces = [
      'KaTeX_Main-Regular', 'KaTeX_Main-Bold', 'KaTeX_Math-Italic', 'KaTeX_AMS-Regular',
      'KaTeX_Size1-Regular', 'KaTeX_Size2-Regular', 'KaTeX_Size3-Regular', 'KaTeX_Size4-Regular',
    ];
    const katexFontFiles = katexFaces.map((face) => join('katex', 'fonts', `${face}.woff2`));
    const katexPreloads = katexFaces
      .map((face) => `<link rel="preload" href="/katex/fonts/${face}.woff2" as="font" type="font/woff2" crossorigin>`)
      .join('');
    const katexHead = katexPreloads + katexLink;
    prepare(pairedMath, katexFontFiles, { head: katexHead });
    assert.equal(audit().status, 0, 'paired KaTeX output with the vendored stylesheet and font preloads should pass');

    prepare(pairedMath);
    assert.match(
      audit().stderr,
      /KaTeX stylesheet link missing/,
      'rendered math without its stylesheet must fail',
    );

    prepare(pairedMath, katexFontFiles, { head: katexPreloads + '<link rel="stylesheet" href="/katex/katex.css">' });
    assert.match(
      audit().stderr,
      /stylesheet link does not resolve to a built file/,
      'a plausible KaTeX URL must still resolve to an emitted build artifact',
    );

    prepare('<span class="katex"><span class="katex-mathml"><math></math></span></span>', katexFontFiles, { head: katexHead });
    assert.match(
      audit().stderr,
      /visual\/accessibility render count mismatch/,
      'a missing KaTeX visual or accessibility layer must fail',
    );

    prepare(pairedMath, katexFontFiles, { head: katexLink });
    assert.match(
      audit().stderr,
      /KaTeX font preload links missing/,
      'rendered math without the font preloads regresses the Safari first-layout fix and must fail',
    );

    prepare(pairedMath, katexFontFiles, {
      head: katexHead.replaceAll(' crossorigin', '').replace('as="font"', 'as="font" crossorigin'),
    });
    assert.match(
      audit().stderr,
      /font preload without crossorigin/,
      'a font preload without crossorigin double-fetches and must fail',
    );

    prepare(pairedMath, [], { head: katexHead });
    assert.match(
      audit().stderr,
      /font preload does not resolve to a built file/,
      'a font preload must point at an emitted font file',
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

    // ---- mediafigure: the one sanctioned file-backed image ------------------
    // A vendored raster figure's own <img>, inside its own
    // <figure class="ap-mediafigure">, naming a manifest variant with the full
    // accessibility/layout contract, is the ONLY <img> this audit allows
    // anywhere in main#content.
    const mediaImg = (attrs) => `<figure class="ap-mediafigure"><img src="/media/biology/fig-1-400.webp" alt="A labeled diagram of a cell." width="400" height="300" decoding="async"${attrs}><figcaption>A cell diagram.</figcaption></figure>`;

    prepare(mediaImg(''));
    writeMediaManifest('biology', { 'fig-1': { variants: [{ width: 400, height: 300, file: 'fig-1-400.webp' }] } });
    writeMediaVariant('biology', 'fig-1-400.webp');
    const wellFormed = audit();
    assert.equal(wellFormed.status, 0, `a well-formed mediafigure with a matching manifest and shipped variant should pass: ${wellFormed.stderr}`);

    prepare('<img src="/media/biology/fig-1-400.webp" alt="A labeled diagram of a cell." width="400" height="300" decoding="async">');
    writeMediaManifest('biology', { 'fig-1': { variants: [{ width: 400, height: 300, file: 'fig-1-400.webp' }] } });
    writeMediaVariant('biology', 'fig-1-400.webp');
    assert.match(
      audit().stderr,
      /file-backed content image markup/,
      'an <img> outside a <figure class="ap-mediafigure"> is still a banned file-backed image, even when it names a real manifest variant',
    );

    prepare(mediaImg('').replace(' width="400"', ''));
    writeMediaManifest('biology', { 'fig-1': { variants: [{ width: 400, height: 300, file: 'fig-1-400.webp' }] } });
    writeMediaVariant('biology', 'fig-1-400.webp');
    assert.match(
      audit().stderr,
      /mediafigure <img> is malformed/,
      'a mediafigure <img> missing width must fail — no layout shift is part of the contract',
    );

    prepare(mediaImg(''));
    writeMediaManifest('biology', { 'fig-1': { variants: [{ width: 400, height: 300, file: 'fig-1-400.webp' }] } });
    writeMediaVariant('biology', 'fig-1-400.webp');
    writeMediaVariant('biology', 'unlisted-extra.webp'); // built, but no manifest names it
    assert.match(
      audit().stderr,
      /content image asset\(s\) remain/,
      'a built /media/ file that no manifest variant names must still fail as an unexpected content image asset',
    );

    prepare(mediaImg(''));
    writeMediaManifest('biology', { 'fig-1': { variants: [{ width: 400, height: 300, file: 'fig-1-400.webp' }] } });
    // The manifest declares the variant, but it was never vendored into the
    // build — a mediafigure page would reference a broken image on production.
    assert.match(
      audit().stderr,
      /vendored media manifest variant file\(s\) missing from the build/,
      'a manifest variant absent from the built output must fail as a floor',
    );

    // ---- the duplicated-chrome budget, sabotaged ----------------------------
    // A gate that has never been seen to fail has not been tested. Each shape
    // below is a real duplication of navigation markup, and each must trip the
    // absolute per-page chrome budget. Two of the three are the point: a
    // sidebar duplicated as a SIBLING element leaves the sidebar-share ratio
    // looking better than the baseline, because that metric reads only the
    // first <aside> and divides by a page the duplication just made bigger.
    //
    // The lesson body is deliberately large so the control page's share stays
    // inside its own budget — otherwise the share gate fires on the fixture and
    // proves nothing about the chrome gate. The single sidebar is sized like a
    // real biology aside (~218 KiB at 32 chapters, September 2026), under the
    // 300 KiB budget on its own and well over it once duplicated. Keep it in
    // step with maxMeanChromeBytes: a fixture that doubles to less than the
    // budget proves nothing (the 2025 fixture, 132 KiB, doubled to 264 and
    // stopped tripping a 320 KiB budget; the 160 KiB fixture would double to
    // 320 against a 300 KiB budget, a 6% margin).
    const nav = `<a href="/s/">${'section '.repeat(40)}</a>`.repeat(665); // ~220 KiB
    const lesson = `<p>${'content '.repeat(80_000)}</p>`; // ~624 KiB, one element
    const page = (chrome) => `<!doctype html><head></head>${chrome}<main id="content">${lesson}</main>`;

    prepare('<p>placeholder</p>');
    writeFileSync(join(fixture, 'index.html'), page(`<aside>${nav}</aside>`));
    const control = audit();
    assert.equal(control.status, 0, `one sidebar is chrome, not a duplication regression: ${control.stderr}`);

    for (const [label, chrome, hidesFromShare] of [
      ['a sidebar emitted twice as sibling asides', `<aside>${nav}</aside><aside>${nav}</aside>`, true],
      ['the same contents duplicated inside one aside', `<aside>${nav}${nav}</aside>`, false],
      ['the nav duplicated into a sibling element', `<aside>${nav}</aside><nav>${nav}</nav>`, true],
    ]) {
      prepare('<p>placeholder</p>');
      writeFileSync(join(fixture, 'index.html'), page(chrome));
      const result = audit();
      assert.notEqual(result.status, 0, `expected a failure for ${label}`);
      assert.match(result.stderr, /outside main#content/, result.stderr);
      if (hidesFromShare) {
        assert.doesNotMatch(result.stderr, /sidebars are/,
          `${label} is invisible to the sidebar SHARE — which is why it is not the duplication gate`);
      }
    }

    // ---- the no-JavaScript notice, sabotaged --------------------------------
    // The assertion is per component, not per page: a page with two fill-ins
    // and one notice is the shape a partially-retrofitted shortcode produces.
    const fillin = (notice) => `<fill-in><div class="ap-fillin"><p>Q</p>${notice ? '<noscript><p class="ap-noscript-notice">Interactive practice requires JavaScript.</p></noscript>' : ''}</div></fill-in>`;
    prepare(`${fillin(true)}${fillin(true)}<graph-plot><div>${''}<noscript><p class=ap-noscript-notice>Interactive practice requires JavaScript.</p></noscript></div></graph-plot>`);
    assert.equal(audit().status, 0, 'one notice per component passes — unquoted class included, as --minify emits it');

    for (const [label, body] of [
      ['a fill-in with no notice', `${fillin(true)}${fillin(false)}`],
      ['a graph-plot with no notice', `${fillin(true)}<graph-plot><div><p>Q</p></div></graph-plot>`],
      ['a text-in with no notice', `${fillin(true)}<text-in><div class="ap-textin"><p>Q</p></div></text-in>`],
      ['a duplicated notice', `${fillin(true)}<p class="ap-noscript-notice">Interactive practice requires JavaScript.</p>`],
    ]) {
      prepare(body);
      const result = audit();
      assert.notEqual(result.status, 0, `expected a failure for ${label}`);
      assert.match(result.stderr, /no-JavaScript notice missing or duplicated/, result.stderr);
    }
  } finally {
    rmSync(fixture, { recursive: true, force: true });
  }

  console.log('build audit: content images, duplicated chrome, and missing no-JavaScript notices rejected');
});
