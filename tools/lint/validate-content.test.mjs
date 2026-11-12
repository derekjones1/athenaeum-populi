import assert from 'node:assert/strict';
import test from 'node:test';
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

/** The list-formatted objectives callout every numbered section must carry. */
function objectives(items) {
  return [
    '{{< callout type="info" >}}',
    '**By the end of this section, you will be able to:**',
    '',
    ...items.map((item) => `- ${item}`),
    '{{< /callout >}}',
    '',
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
      })}${objectives([`Learn topic ${number}`, `Apply topic ${number}`])}Section body.\n`,
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

test('content validator: Knowledge Check and landing drift regressions rejected', () => {
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

    // Objectives must be a Markdown list: the content lint keys the Practice
    // block's `### ` groups to that list, and prose cannot be split on commas
    // because an objective may itself contain one.
    prepare();
    const topicOne = join(book, '01-one', '01-topic-1.md');
    const authoredTopic = readFileSync(topicOne, 'utf8');
    writeFileSync(
      topicOne,
      authoredTopic.replace(
        /\*\*By the end of this section, you will be able to:\*\*\n\n- .*\n- .*/,
        '**By the end of this section, you will be able to:** learn topic 1, and apply topic 1.',
      ),
    );
    const proseObjectives = validate();
    assert.notEqual(proseObjectives.status, 0, 'a prose objectives callout must fail');
    assert.match(proseObjectives.stderr, /one objective per Markdown list item/);

    prepare();
    writeFileSync(
      topicOne,
      authoredTopic.replace(/\{\{< callout type="info" >\}\}[\s\S]*?\{\{< \/callout >\}\}\n\n/, ''),
    );
    const noObjectives = validate();
    assert.notEqual(noObjectives.status, 0, 'a section with no objectives callout must fail');
    assert.match(noObjectives.stderr, /needs a .*objectives callout/);

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

    // A gap in chapter numbering (an unauthored middle chapter) fails a
    // finished book but passes a book whose cover carries `authoring_status:`
    // — Biology landed chapters 18–19 while 17 was still unwritten.
    prepare();
    const gapBook = join(fixture, 'math', 'gap-book');
    write(
      join(gapBook, '_index.md'),
      `${frontmatter({ title: 'Gap Book', book: true })}`
        + '## Chapters\n\n'
        + '- **One** — the first chapter.\n'
        + '- **Three** — a later chapter, its predecessor unwritten.\n',
    );
    for (const [number, title, weight] of [[1, 'One', 1], [3, 'Three', 3]]) {
      const prefix = String(number).padStart(2, '0');
      const chapter = join(gapBook, `${prefix}-${title.toLowerCase()}`);
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
      })}${objectives([`Learn topic ${number}`, `Apply topic ${number}`])}Section body.\n`,
      );
    }
    const gapWhileComplete = validate();
    assert.notEqual(gapWhileComplete.status, 0, 'a chapter gap in a finished book must fail');
    assert.match(gapWhileComplete.stderr, /expected sequential/);
    const gapIndex = join(gapBook, '_index.md');
    writeFileSync(
      gapIndex,
      readFileSync(gapIndex, 'utf8').replace("title: 'Gap Book'", "title: 'Gap Book'\nauthoring_status: in-progress"),
    );
    assert.equal(validate().status, 0, 'a chapter gap in an in-progress book must validate');
    // Still strictly increasing: a duplicate chapter number fails even in progress.
    const chapterThree = join(gapBook, '03-three', '_index.md');
    writeFileSync(
      chapterThree,
      readFileSync(chapterThree, 'utf8').replace('weight: 3', 'weight: 1'),
    );
    const duplicateWeight = validate();
    assert.notEqual(duplicateWeight.status, 0, 'a duplicate weight in an in-progress book must fail');
    assert.match(duplicateWeight.stderr, /strictly increasing/);

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
});

test('content validator: a book\'s appendices folder', () => {
  try {
    const book = prepare();
    const appendices = join(book, 'appendices');
    const landing = (weight, titles = ['Appendix A: The Periodic Table', 'Appendix B: Essential Mathematics']) => write(
      join(appendices, '_index.md'),
      `---\ntitle: Appendices\ndescription: The appendices.\nweight: ${weight}\n---\n\n## Appendices\n\n`
        + titles.map((title) => `- **${title}** — a reference page.\n`).join(''),
    );
    const appendix = (file, letter, title, weight) => write(
      join(appendices, file),
      `---\ntitle: "${title}"\ndescription: A reference page.\nsource_appendix: "${letter}"\nweight: ${weight}\n---\n\nBody.\n`,
    );
    landing(5);
    appendix('a-the-periodic-table.md', 'A', 'Appendix A: The Periodic Table', 1);
    appendix('b-essential-mathematics.md', 'B', 'Appendix B: Essential Mathematics', 2);
    const good = validate();
    assert.equal(good.status, 0, `appendices after the last check validate: ${good.stderr}`);

    landing(3);
    const early = validate();
    assert.notEqual(early.status, 0, 'appendices that do not come last must fail');
    assert.match(early.stderr, /appendices: weight 3 must be the book's last/);

    landing(5);
    appendix('b-essential-mathematics.md', 'C', 'Appendix B: Essential Mathematics', 2);
    const wrongLetter = validate();
    assert.notEqual(wrongLetter.status, 0, 'a page whose letter differs from its file name must fail');
    assert.match(wrongLetter.stderr, /appendix page needs `source_appendix: "B"`/);

    // `lookup: true` marks a table a section's link opens in place.
    const lookup = (value, body) => write(
      join(appendices, 'b-essential-mathematics.md'),
      `---\ntitle: "Appendix B: Essential Mathematics"\ndescription: A reference page.\nsource_appendix: "B"\nlookup: ${value}\nweight: 2\n---\n\n${body}\n`,
    );
    lookup('true', '| Unit | Value |\n|---|---|\n| 1 L | 1000 mL |');
    const table = validate();
    assert.equal(table.status, 0, `a lookup appendix that holds a table validates: ${table.stderr}`);
    lookup('true', 'Prose only.');
    const noTable = validate();
    assert.notEqual(noTable.status, 0, 'a lookup appendix with no table must fail');
    assert.match(noTable.stderr, /`lookup: true` marks a table to look values up in, and this page holds no table/);
    lookup('yes', '| Unit | Value |\n|---|---|\n| 1 L | 1000 mL |');
    const notTrue = validate();
    assert.notEqual(notTrue.status, 0, 'a lookup value other than true must fail');
    assert.match(notTrue.stderr, /`lookup:` is `true` or absent/);
    appendix('b-essential-mathematics.md', 'B', 'Appendix B: Essential Mathematics', 2);

    rmSync(join(appendices, 'b-essential-mathematics.md'));
    appendix('c-units.md', 'C', 'Appendix C: Units', 2);
    landing(5, ['Appendix A: The Periodic Table', 'Appendix C: Units']);
    const skipped = validate();
    assert.notEqual(skipped.status, 0, 'a skipped letter must fail');
    assert.match(skipped.stderr, /appendix letters \["a","c"\] — expected a, b, c/);

    rmSync(join(appendices, 'c-units.md'));
    appendix('b-essential-mathematics.md', 'B', 'Appendix B: Essential Mathematics', 2);
    landing(5, ['Appendix A: The Periodic Table']);
    const unlisted = validate();
    assert.notEqual(unlisted.status, 0, 'a landing that omits an appendix must fail');
    assert.match(unlisted.stderr, /appendices list .* must match authored titles/i);
  } finally {
    rmSync(fixture, { recursive: true, force: true });
  }
});
