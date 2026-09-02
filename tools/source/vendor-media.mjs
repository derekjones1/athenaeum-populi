#!/usr/bin/env node
/**
 * vendor-media — copy the raster figures a book's modules reference out of
 * the pinned OpenStax checkout into `static/media/<book>/`, re-encoded once
 * as WebP at bounded widths, and record every one in `data/media/<book>.json`.
 *
 *   node tools/source/vendor-media.mjs --book biology --chapter 1 [--chapter 2 …]
 *   node tools/source/vendor-media.mjs --book biology --module m66427
 *   … [--dry-run]
 *
 * The manifest is the contract the rest of the pipeline reads:
 *   - the `mediafigure` shortcode resolves `src="<book>/<stem>"` against it
 *     (width/height/srcset) and fails the build on a stem it does not hold;
 *   - the content lint requires every `mediafigure` src to be in it;
 *   - the build audit allows exactly the files it lists under /media/** —
 *     nothing else file-backed ships (the math prohibition is unchanged).
 *
 * Source images are never committed. The sparse checkout (`source:fetch`)
 * deliberately excludes `media/`; this tool reads each blob straight from the
 * pinned commit with `git show <commit>:media/<file>`, which a blobless clone
 * fetches on demand — only the referenced files are ever downloaded.
 *
 * Encoding is local-only and macOS-shaped on purpose: `sips` resizes and
 * `cwebp` (Homebrew) encodes, both present on the authoring machine, and the
 * outputs are committed, so CI needs neither. The tool refuses to run without
 * them rather than degrade. Widths: ≤800 px and ≤1600 px variants, never
 * upscaled — a 430 px diagram ships once at 430 px, a 3000 px photo ships at
 * 800 and 1600. Idempotent: an entry whose source SHA-256 and files are all
 * present is skipped.
 */
import { execFileSync, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  bundleSourceDirectory, decodeXmlEntities, loadSourceLock, parseCollectionXml,
} from '../lib/openstax-source.mjs';

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const TARGET_WIDTHS = Object.freeze([800, 1600]);
export const WEBP_QUALITY = 82;

export function parseArgs(argv) {
  const options = { book: null, chapters: [], modules: [], dryRun: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--dry-run') options.dryRun = true;
    else if (arg === '--book') options.book = argv[++i];
    else if (arg === '--chapter') options.chapters.push(Number(argv[++i]));
    else if (arg === '--module') options.modules.push(argv[++i]);
    else throw new Error(`unknown option ${JSON.stringify(arg)}`);
  }
  if (!options.book) throw new Error('--book <key> is required');
  if (options.chapters.some((n) => !Number.isInteger(n) || n < 1)) throw new Error('--chapter takes a positive integer');
  if (!options.chapters.length && !options.modules.length) throw new Error('name at least one --chapter or --module');
  return options;
}

/** Plain text of a CNXML fragment: tags dropped, entities decoded, whitespace collapsed. */
export function plainXmlText(fragment) {
  return decodeXmlEntities(String(fragment || '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

/**
 * Every `<image src="../../media/…">` in a module, with the alt of its
 * enclosing `<media>` and the caption of its innermost enclosing `<figure>`.
 * Pure text scan (the module XML is well-formed but the lib's parser keeps no
 * offsets), so it is unit-testable on a fragment.
 */
export function extractModuleImages(moduleId, xml) {
  const figures = [];
  const stack = [];
  for (const m of xml.matchAll(/<(\/?)figure\b[^>]*>/g)) {
    if (m[1] === '/') {
      const start = stack.pop();
      if (start !== undefined) figures.push({ start, end: m.index + m[0].length });
    } else {
      stack.push(m.index);
    }
  }
  const images = [];
  for (const media of xml.matchAll(/<media\b([^>]*)>([\s\S]*?)<\/media>/g)) {
    const alt = plainXmlText((media[1].match(/\balt="([^"]*)"/) || [])[1] || '');
    for (const image of media[2].matchAll(/<image\b[^>]*\bsrc="([^"]+)"[^>]*>/g)) {
      const src = image[1].replace(/^(\.\.\/)+/, '');
      if (!src.startsWith('media/')) continue;
      const enclosing = figures
        .filter((f) => f.start <= media.index && media.index < f.end)
        .sort((a, b) => (a.end - a.start) - (b.end - b.start))[0];
      let caption = '';
      if (enclosing) {
        const block = xml.slice(enclosing.start, enclosing.end);
        const captions = [...block.matchAll(/<caption\b[^>]*>([\s\S]*?)<\/caption>/g)];
        if (captions.length) caption = plainXmlText(captions[captions.length - 1][1]);
      }
      images.push({ module: moduleId, source: src, alt, caption });
    }
  }
  return images;
}

/** Photos (JPEG sources) sit on the dark theme as they are; diagrams (PNG/GIF/SVG,
 * drawn for white paper) get a light plate. The manifest records the guess so
 * the shortcode can act on it, and an author can override it per figure. */
export function kindOf(source) {
  return /\.jpe?g$/i.test(source) ? 'photo' : 'diagram';
}

/** The manifest key and on-disk file prefix. Drops the extension and folds
 * whitespace to `_`: m66400 references `media/Figure 28.48ab.png.jpg`, and a
 * space in the stem would split the `srcset` entry (`Figure 28.48ab.png-800.webp
 * 800w` reads as two candidates) — the stem still traces to its source file. */
export function stemOf(source) {
  return path.basename(source).replace(/\.[^.]+$/, '').replace(/\s+/g, '_');
}

/** Key every referenced image by a stem unique within the run. Two different
 * source files can share a bare stem (m66555 references both
 * Figure_B23_03_07.jpg and Figure_B23_03_07.png, two unrelated figures); such a
 * stem gets its lower-cased extension appended (`Figure_B23_03_07-jpg`,
 * `Figure_B23_03_07-png`) so both survive in the manifest and on disk. A stem
 * referenced from one file only keeps its bare form, however many modules
 * reference it. */
export function assignStems(images) {
  const sourcesByStem = new Map();
  for (const image of images) {
    const stem = stemOf(image.source);
    if (!sourcesByStem.has(stem)) sourcesByStem.set(stem, new Set());
    sourcesByStem.get(stem).add(image.source);
  }
  const seen = new Map();
  for (const image of images) {
    const bare = stemOf(image.source);
    const stem = sourcesByStem.get(bare).size > 1
      ? `${bare}-${path.extname(image.source).slice(1).toLowerCase()}`
      : bare;
    const prior = seen.get(stem);
    if (prior && prior.source !== image.source) {
      throw new Error(`two different files share the stem ${stem}: ${prior.source} and ${image.source}`);
    }
    if (!prior) seen.set(stem, image);
  }
  return seen;
}

/** Variant widths for a source of width W: ≤800 and ≤1600, never upscaled, deduped. */
export function variantWidths(sourceWidth) {
  return [...new Set(TARGET_WIDTHS.map((w) => Math.min(w, sourceWidth)))].sort((a, b) => a - b);
}

function requireBinary(name) {
  const found = spawnSync('which', [name], { encoding: 'utf8' });
  if (found.status !== 0) {
    throw new Error(`${name} is not installed — vendor-media encodes locally (sips + cwebp); install it (brew install webp) before vendoring`);
  }
}

function sipsDimensions(file) {
  const out = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', file], { encoding: 'utf8' });
  const width = Number((out.match(/pixelWidth:\s*(\d+)/) || [])[1]);
  const height = Number((out.match(/pixelHeight:\s*(\d+)/) || [])[1]);
  if (!width || !height) throw new Error(`could not read dimensions of ${file}: ${out}`);
  return { width, height };
}

export function readManifest(manifestPath, { book, bundle, commit }) {
  if (existsSync(manifestPath)) return JSON.parse(readFileSync(manifestPath, 'utf8'));
  return { schemaVersion: 1, book, bundle, commit, figures: {} };
}

export function writeManifest(manifestPath, manifest) {
  const ordered = {
    ...manifest,
    figures: Object.fromEntries(Object.keys(manifest.figures).sort().map((k) => [k, manifest.figures[k]])),
  };
  mkdirSync(path.dirname(manifestPath), { recursive: true });
  writeFileSync(manifestPath, `${JSON.stringify(ordered, null, 2)}\n`);
}

function main(argv) {
  const options = parseArgs(argv);
  const lock = loadSourceLock(repositoryRoot);
  const book = lock.books.get(options.book);
  if (!book) throw new Error(`book ${JSON.stringify(options.book)} is not in the source lock`);
  const bundle = lock.bundles[book.bundleKey];
  const sourceDirectory = bundleSourceDirectory(repositoryRoot, lock, book.bundleKey);
  const collectionPath = path.join(sourceDirectory, book.collectionPath);
  if (!existsSync(collectionPath)) throw new Error(`${book.collectionPath} is not checked out — run npm run source:fetch -- --bundle ${book.bundleKey}`);
  const collection = parseCollectionXml(readFileSync(collectionPath, 'utf8'));

  const moduleIds = [...options.modules];
  for (const chapterNumber of options.chapters) {
    const chapter = collection.chapters[chapterNumber - 1];
    if (!chapter) throw new Error(`${options.book} has no upstream chapter ${chapterNumber}`);
    moduleIds.push(...chapter.moduleIds);
  }

  const images = [];
  for (const moduleId of [...new Set(moduleIds)]) {
    const modulePath = path.join(sourceDirectory, 'modules', moduleId, 'index.cnxml');
    if (!existsSync(modulePath)) throw new Error(`modules/${moduleId}/index.cnxml is not checked out`);
    images.push(...extractModuleImages(moduleId, readFileSync(modulePath, 'utf8')));
  }

  const manifestPath = path.join(repositoryRoot, 'data/media', `${options.book}.json`);
  const manifest = readManifest(manifestPath, { book: options.book, bundle: book.bundleKey, commit: bundle.commit });
  const outDir = path.join(repositoryRoot, 'static/media', options.book);
  const seen = assignStems(images);
  console.log(`${seen.size} image(s) referenced by ${new Set(images.map((i) => i.module)).size} module(s)`);
  if (options.dryRun) {
    for (const [stem, image] of seen) console.log(`  ${stem}  ←  ${image.source}  (${image.module})`);
    return;
  }

  requireBinary('sips');
  requireBinary('cwebp');
  mkdirSync(outDir, { recursive: true });
  const work = mkdtempSync(path.join(tmpdir(), 'vendor-media-'));
  let vendored = 0;
  let skipped = 0;
  try {
    for (const [stem, image] of seen) {
      const blob = execFileSync('git', ['-C', sourceDirectory, 'show', `${bundle.commit}:${image.source}`], { maxBuffer: 256 * 1024 * 1024 });
      const sourceSha256 = createHash('sha256').update(blob).digest('hex');
      const existing = manifest.figures[stem];
      if (existing && existing.sourceSha256 === sourceSha256
        && existing.variants.every((v) => existsSync(path.join(outDir, v.file)))) {
        skipped += 1;
        continue;
      }
      const sourceFile = path.join(work, path.basename(image.source));
      writeFileSync(sourceFile, blob);
      const { width, height } = sipsDimensions(sourceFile);
      const variants = [];
      for (const targetWidth of variantWidths(width)) {
        const file = `${stem}-${targetWidth}.webp`;
        const resized = path.join(work, `${stem}-${targetWidth}.png`);
        // sips resamples (or, at native width, just converts) to PNG; cwebp
        // encodes. Going through PNG keeps cwebp's input uniform (it does not
        // read GIF) and costs nothing at these sizes.
        execFileSync('sips', ['--resampleWidth', String(targetWidth), '-s', 'format', 'png', sourceFile, '--out', resized], { stdio: 'ignore' });
        execFileSync('cwebp', ['-quiet', '-q', String(WEBP_QUALITY), resized, '-o', path.join(outDir, file)], { stdio: 'ignore' });
        const dims = sipsDimensions(path.join(outDir, file));
        variants.push({ width: dims.width, height: dims.height, file });
      }
      manifest.figures[stem] = {
        source: image.source,
        sourceSha256,
        module: image.module,
        kind: kindOf(image.source),
        width,
        height,
        variants,
        alt: image.alt,
        caption: image.caption,
      };
      vendored += 1;
      console.log(`  vendored ${stem} (${width}×${height} → ${variants.map((v) => v.width).join('/')})`);
    }
  } finally {
    rmSync(work, { recursive: true, force: true });
  }
  writeManifest(manifestPath, manifest);
  console.log(`✓ ${vendored} vendored, ${skipped} already current → ${path.relative(repositoryRoot, manifestPath)}`);
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error(`vendor-media: ${error.message}`);
    process.exit(1);
  }
}
