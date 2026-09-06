import assert from 'node:assert/strict';
import test from 'node:test';
import { spawn } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The accessibility suite trusts this server to be a faithful stand-in for
// Cloudflare serving `public/`: pretty URLs resolve, misses return the real
// 404 page with a 404 status, and nothing outside the build is reachable.

const serverPath = fileURLToPath(new URL('serve-public.mjs', import.meta.url));

const root = mkdtempSync(join(tmpdir(), 'serve-public-'));
writeFileSync(join(root, 'index.html'), '<!doctype html><title>home</title>');
writeFileSync(join(root, '404.html'), '<!doctype html><title>missing</title>');
mkdirSync(join(root, 'math', 'prealgebra'), { recursive: true });
writeFileSync(
  join(root, 'math', 'prealgebra', 'index.html'),
  '<!doctype html><title>prealgebra</title>',
);
mkdirSync(join(root, 'css'));
writeFileSync(join(root, 'css', 'main.css'), 'body{color:#000}');
writeFileSync(join(root, '..', 'outside-the-build.txt'), 'secret');

// PORT=0 lets the kernel choose. Deriving a port from the pid once landed on
// 1720, which `fetch` refuses outright as a "bad port" (the Fetch spec
// blocklists 1719, 1720, and 1723 among others), so the test failed in CI
// with a bare 'fetch failed' while the server was serving fine.
const server = spawn(process.execPath, [serverPath], {
  env: { ...process.env, PUBLIC_DIR: root, PORT: '0' },
  stdio: ['ignore', 'pipe', 'inherit'],
});

const ready = new Promise((resolve, reject) => {
  const timer = setTimeout(
    () => reject(new Error('serve-public.mjs did not report readiness')),
    10_000,
  );
  server.stdout.on('data', (chunk) => {
    const match = String(chunk).match(/Serving public\/ at (http:\/\/[^/\s]+)\//);
    if (match) {
      clearTimeout(timer);
      resolve(match[1]);
    }
  });
  server.on('error', reject);
});

// undici reports every failure as 'fetch failed' and hides the reason in
// `cause`; surface it so the next flake explains itself.
async function fetchOrExplain(url, init) {
  try {
    return await fetch(url, init);
  } catch (error) {
    throw new Error(`${init?.method ?? 'GET'} ${url}: ${error.cause?.message ?? error.message}`, { cause: error });
  }
}

test('serve-public: pretty URLs, 404s, and build containment behave', async () => {
  try {
    const base = await ready;

    const home = await fetchOrExplain(`${base}/`);
    assert.equal(home.status, 200, 'the site root serves index.html');
    assert.equal(home.headers.get('content-type'), 'text/html; charset=utf-8');
    assert.match(await home.text(), /home/);

    const pretty = await fetchOrExplain(`${base}/math/prealgebra/`);
    assert.equal(pretty.status, 200, 'a pretty URL serves its index.html');
    assert.match(await pretty.text(), /prealgebra/);

    const slashless = await fetchOrExplain(`${base}/math/prealgebra`, { redirect: 'manual' });
    assert.equal(slashless.status, 301, 'a slashless directory redirects');
    assert.equal(slashless.headers.get('location'), '/math/prealgebra/');

    const stylesheet = await fetchOrExplain(`${base}/css/main.css`);
    assert.equal(stylesheet.status, 200);
    assert.equal(stylesheet.headers.get('content-type'), 'text/css; charset=utf-8');

    // The suite requests /404.html directly and expects a normal response, so
    // the status must come from the request, not from the filename.
    const explicit404 = await fetchOrExplain(`${base}/404.html`);
    assert.equal(explicit404.status, 200, '/404.html is a real page, not an error');

    const missing = await fetchOrExplain(`${base}/no/such/page/`);
    assert.equal(missing.status, 404, 'a miss reports 404');
    assert.match(await missing.text(), /missing/, 'a miss serves the built 404 page');

    for (const escape of ['/../outside-the-build.txt', '/%2e%2e/outside-the-build.txt']) {
      const denied = await fetchOrExplain(`${base}${escape}`, { redirect: 'manual' });
      assert.equal(denied.status, 404, `${escape} must not escape the build`);
    }

    const head = await fetchOrExplain(`${base}/`, { method: 'HEAD' });
    assert.equal(head.status, 200);
    assert.equal(await head.text(), '', 'HEAD returns headers only');

    console.log('serve-public: pretty URLs, 404s, and build containment behave');
  } finally {
    server.kill();
  }
});
