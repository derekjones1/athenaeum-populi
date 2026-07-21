# Knowledge Check Playbook (Hugo edition)

A Knowledge Check is a cumulative, book-level self-test — not a section. It is
the one deliberate departure from section-page exercise patterns: **quizzes have
no hints.**

## Placement

- File: `content/<subject>/<book>/knowledge-check-XX-YY.md` (book level, next to
  the chapter folders), where `XX-YY` is the chapter range (e.g.
  `knowledge-check-01-06.md`).
- Frontmatter: `title`, `description`, `source_chapters: "1-6"`, and a `weight`
  that slots it between the right chapters in the sidebar/pager (e.g. after
  chapter 6 → weight one past chapter 6). Knowledge checks are exempt from the
  numeric-prefix rule; the validator knows this.

## Content rules

- **Cumulative:** questions cover every chapter in the range, grouped by the
  section they come from, so a miss points the reader to the exact section.
- **No hints.** Never add a `hint=` to a `{{< fillin >}}` or
  `{{< multiplechoice >}}` on a Knowledge Check — the lint rejects it.
- Every question comes from the source textbook's chapter Practice Tests (or
  Review Exercises), graded against the book's official Answer Key. Prefer the
  **odd-numbered** source items (their answers are in the public Answer Key).
- Same shortcodes as sections (`{{< fillin >}}`, `{{< multiplechoice >}}`), just
  without hints. `answer` LaTeX is single-backslash; the grader must self-grade
  each answer `correct` (run `npm run verify-section`).

## Verify

Same workflow as a section — `npm run verify-section content/.../knowledge-check-XX-YY.md`
additionally fails on any `hint=`. Then `npm run validate` and `npm test`.
