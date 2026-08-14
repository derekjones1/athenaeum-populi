#!/usr/bin/env node
// Static file server for the built `public/` directory.
//
// The accessibility suite is only meaningful against a production build.
// `hugo server` injects a livereload script and serves unfingerprinted CSS,
// so every colour, size, and contrast measured against it describes the dev
// server rather than the site that ships. This server has no build step, no
// livereload, and no rewriting: it returns exactly the bytes `npm run build`
// produced, which is what Cloudflare serves from `public/` as well.
//
// Deliberately dependency-free. AGENTS.md requires the dependency list stay
// deliberately small, and `node:http` is sufficient.

import { createReadStream, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = process.env.PUBLIC_DIR
  ? resolve(process.env.PUBLIC_DIR)
  : resolve(fileURLToPath(new URL('../public', import.meta.url)));
const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT || 1315);

const CONTENT_TYPES = new Map(
  Object.entries({
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.mjs': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.webmanifest': 'application/manifest+json; charset=utf-8',
    '.xml': 'application/xml; charset=utf-8',
    '.txt': 'text/plain; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.avif': 'image/avif',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf',
    '.wasm': 'application/wasm',
    '.pdf': 'application/pdf',
    '.map': 'application/json; charset=utf-8',
  }),
);

function statOrNull(path) {
  try {
    return statSync(path);
  } catch {
    return null;
  }
}

// Returns { file } to send, { redirect } to relocate, or null when the
// request escapes `public/` or matches nothing.
function resolveRequest(rawPath) {
  let decoded;
  try {
    decoded = decodeURIComponent(rawPath);
  } catch {
    return null;
  }

  const candidate = resolve(root, `.${decoded}`);
  if (candidate !== root && !candidate.startsWith(root + sep)) {
    return null;
  }

  const stats = statOrNull(candidate);

  if (stats?.isDirectory()) {
    // Hugo emits pretty URLs, so a directory means an `index.html`. Redirect
    // the slashless form first so relative asset URLs resolve correctly.
    if (!decoded.endsWith('/')) {
      return { redirect: `${decoded}/` };
    }
    const index = resolve(candidate, 'index.html');
    return statOrNull(index)?.isFile() ? { file: index } : null;
  }

  return stats?.isFile() ? { file: candidate } : null;
}

function sendFile(request, response, file, statusCode) {
  const type =
    CONTENT_TYPES.get(extname(file).toLowerCase()) || 'application/octet-stream';

  response.writeHead(statusCode, {
    'content-type': type,
    'content-length': statSync(file).size,
    // The suite rebuilds between runs; never let a browser reuse old assets.
    'cache-control': 'no-store',
  });

  if (request.method === 'HEAD') {
    response.end();
    return;
  }

  createReadStream(file).pipe(response);
}

const server = createServer((request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { allow: 'GET, HEAD' }).end('Method Not Allowed');
    return;
  }

  const requestPath = new URL(request.url, `http://${request.headers.host}`)
    .pathname;
  const resolved = resolveRequest(requestPath);

  if (resolved?.redirect) {
    response.writeHead(301, { location: resolved.redirect }).end();
    return;
  }

  if (resolved?.file) {
    sendFile(request, response, resolved.file, 200);
    return;
  }

  // Mirror the production 404: same page Cloudflare serves, 404 status.
  const notFound = resolve(root, '404.html');
  if (statOrNull(notFound)?.isFile()) {
    sendFile(request, response, notFound, 404);
    return;
  }

  response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
  response.end('Not Found');
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(
      `Port ${port} is already in use. Stop whatever is listening there ` +
        '(a stray `hugo server` or a previous run), or set PORT.',
    );
    process.exit(1);
  }
  throw error;
});

if (!statOrNull(root)?.isDirectory()) {
  console.error(
    `No build to serve: ${root} does not exist. Run \`npm run build\` first.`,
  );
  process.exit(1);
}

server.listen(port, host, () => {
  console.log(`Serving public/ at http://${host}:${port}/`);
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    // `close()` alone only stops accepting new connections — it leaves
    // existing keep-alive sockets open and waits for them to close on
    // their own, which a browser client may never do. That left this
    // process (and everything waiting on it, e.g. `npm run ci`) hanging
    // indefinitely after Playwright's webServer teardown sent SIGTERM.
    server.close(() => process.exit(0));
    server.closeAllConnections();
  });
}
