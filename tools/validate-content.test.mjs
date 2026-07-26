import assert from 'node:assert/strict';
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const fixture = mkdtempSync(join(tmpdir(), 'athenaeum-content-validator-'));
const validator = new URL('./validate-content.mjs', import.meta.url);

function write(path, source) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, source);
}

function frontmatter({
  title,
  weight,
  sourceChapter,
  sourceSection,
  sourceChapters,
  book = false,
}) {
  return [
    '---',
    `title: '${title}'`,
    `description: A description of ${title}.`,
    ...(weight == null ? [] : [`weight: ${weight}`]),
    ...(sourceChapter == null ? [] : [`source_chapter: "${sourceChapter}"`]),
    ...(sourceSection == null ? [] : [`source_section: "${sourceSection}"`]),
    ...(sourceChapters == null ? [] : [`source_chapters: "${sourceChapters}"`]),
    ...(book ? ['license: CC BY-NC-SA 4.0', 'source: https://example.test/book'] : []),
    '---',
    '',
  ].join('\n');
}

function prepare() {
  rmSync(fixture, { recursive: true, force: true });

  const book = join(fixture, 'math', 'sample-book');
  write(
    join(fixture, 'math', '_index.md'),
    `${frontmatter({ title: 'Mathematics' })}Subject landing.\n`,
  );
  write(
    join(book, '_index.md'),
    `${frontmatter({ title: 'Sample Book', book: true })}`
      + '## Chapters\n\n'
      + '- **One** — the first chapter.\n'
      + '- **Two** — the second chapter.\n',
  );

  for (const [number, title, weight] of [[1, 'One', 1], [2, 'Two', 3]]) {
    const prefix = String(number).padStart(2, '0');
    const chapter = join(book, `${prefix}-${title.toLowerCase()}`);
    write(
      join(chapter, '_index.md'),
      `${frontmatter({ title, weight, sourceChapter: number })}`
        + '## Sections\n\n'
        + `- **Topic ${number}** — a section description.\n`,
    );
    write(
      join(chapter, `01-topic-${number}.md`),
      `${frontmatter({
        title: `Topic ${number}`,
        weight: 1,
        sourceSection: `${number}.1`,
      })}Section body.\n`,
    );
  }

  write(
    join(book, 'knowledge-check-01-01.md'),
    `${frontmatter({
      title: 'Knowledge Check: Chapters 1–1',
      weight: 2,
      sourceChapters: '1-1',
    })}## Chapter 1: One\n\n### 1.1 Topic 1\n`,
  );
  write(
    join(book, 'knowledge-check-02-02.md'),
    `${frontmatter({
      title: 'Knowledge Check: Chapters 2–2',
      weight: 4,
      sourceChapters: '2-2',
    })}## Chapter 2: Two\n\n### 2.1 Topic 2\n`,
  );

  return book;
}

function validate() {
  return spawnSync(process.execPath, [validator.pathname, fixture, '0'], {
    encoding: 'utf8',
  });
}

try {
  const book = prepare();
  assert.equal(validate().status, 0, 'a synchronized hierarchy should validate');

  const secondCheck = join(book, 'knowledge-check-02-02.md');
  const validCheck = readFileSync(secondCheck, 'utf8');
  writeFileSync(
    secondCheck,
    validCheck
      .replace('Chapters 2–2', 'Chapters 1–2')
      .replace('source_chapters: "2-2"', 'source_chapters: "1-2"')
      .replace('## Chapter 2: Two', '## Chapter 1: One\n\n### 1.1 Topic 1\n\n## Chapter 2: Two'),
  );
  const overlap = validate();
  assert.notEqual(overlap.status, 0, 'overlapping Knowledge Checks must fail');
  assert.match(overlap.stderr, /Knowledge Check ranges overlap/);
  assert.match(overlap.stderr, /filename range must match source_chapters/);

  prepare();
  const bookIndex = join(book, '_index.md');
  writeFileSync(
    bookIndex,
    readFileSync(bookIndex, 'utf8').replace('- **Two**', '- **Stale title**'),
  );
  const staleLanding = validate();
  assert.notEqual(staleLanding.status, 0, 'a stale book landing must fail');
  assert.match(staleLanding.stderr, /chapters list .* must match authored titles/i);

  prepare();
  const chapterTwo = join(book, '02-two', '_index.md');
  writeFileSync(
    chapterTwo,
    readFileSync(chapterTwo, 'utf8').replace('weight: 3', 'weight: 4'),
  );
  const secondCheckForPlacement = join(book, 'knowledge-check-02-02.md');
  writeFileSync(
    secondCheckForPlacement,
    readFileSync(secondCheckForPlacement, 'utf8').replace('weight: 4', 'weight: 3'),
  );
  const misplacedCheck = validate();
  assert.notEqual(misplacedCheck.status, 0, 'a misplaced Knowledge Check must fail');
  assert.match(misplacedCheck.stderr, /must place it immediately after Chapter 2/);

  prepare();
  const firstCheck = join(book, 'knowledge-check-01-01.md');
  writeFileSync(
    firstCheck,
    readFileSync(firstCheck, 'utf8').replace('### 1.1 Topic 1\n', ''),
  );
  const missingCoverage = validate();
  assert.notEqual(missingCoverage.status, 0, 'missing section coverage must fail');
  assert.match(missingCoverage.stderr, /section headings and titles must exactly match/);
} finally {
  rmSync(fixture, { recursive: true, force: true });
}

console.log('content validator: Knowledge Check and landing drift regressions rejected');
