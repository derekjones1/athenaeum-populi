# Cross-page consistency reading — reader brief (Chemistry 2e)

A chapter of OpenStax Chemistry 2e was authored as one page per section, by
one author per page, with rulings that may have changed mid-run. Each page
passed its own checker; nobody has read the pages together. Find where the
same thing is done two ways, where two pages contradict each other, and
where the rulebook contradicts itself or the pages.

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. `SP` is the
scratchpad directory named in your task. **Read-only: edit nothing in the
repository. Never run a git command, not even a read-only one. Do not build
or serve the site. Do not spawn sub-agents.**
**Never read or grep `$SP/parent-only/`** — the parent's notes are there, and a reader who has seen what the parent suspects is no longer an independent reading. Search the repository, never the scratchpad.

## Read in full

- The chapter's directory under `content/physical-sciences/chemistry/` —
  `_index.md` and every section page.
- `docs/subjects/chemistry.md` — all of it.
- `$SP/run-facts.md` (the parent's decisions) and the inventory named in
  your task (keyed and unkeyed counts per module).
- The last authored chapter's pages named in your task, for the forms this
  chapter should match.
- The CNXML when you need the source wording:
  `sources/openstax/osbooks-chemistry-bundle/modules/<id>/index.cnxml`.

## Axes (not exhaustive)

- Frontmatter, the objectives callout, heading skeleton and order.
- Worked examples: title form, Solution, how a Check Your Learning is built.
- Figures and tables: shortcode use, caption style, alt policy, table titles.
- Notation: units, ×, scientific notation, quantity symbols, temperatures,
  the minus sign, digit grouping, `\ce{…}` against Unicode formulas.
- Item form for the same keyed-answer shape. Same shape, two forms on two
  pages, is a finding.
- Stem wording for what to type; `last-digit` choices for like cases; a
  phrase that appears only on items with one kind of key (a contrast leak).
- Hints: read them against the allowed/forbidden pairs in the playbook's
  "Hints". A rule written from a page is checked on that page first.
- Selfcheck model answers and rubrics; Source notes (form, placement, never
  letting a key be worked out); the footer's wording and its counts checked
  against the inventory and the page; whether a footer prints a key.
- Order inside Practice groups; headings against objectives.
- A term defined on two pages in different words; a Key equation written
  two ways; a rule or fact one page teaches that another page's keys or
  worked examples apply differently (a key with more figures than the
  book's own rules give; an exact number rounded as if measured).
- The rulebook: a rule stated twice in different words, two rules that
  cannot both be followed, an example in the rulebook that the source
  contradicts, a stale sentence, a practice every page follows that the
  rulebook does not state.

## Output

Cite file:line for each side of every finding. Write the report to the path
in your task, appending as you go: findings ordered by how much a later
chapter would be damaged by copying the wrong variant; for each, which
pages do which, which variant the playbook supports, and your recommended
ruling. Then every cross-reference between sections (file:line, target).
Then `## What only this reading found`: what a per-page check cannot see,
and for each whether a lint could.

**Final message: at most ten lines.**
