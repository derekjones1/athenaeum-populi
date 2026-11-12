# Second checker — every replacement and rewrite on the Chemistry Knowledge Check for Chapters __RANGE__ — report only

You are a fresh second checker. Replacements repeat the tells of the items they replace, so every replaced or rewritten item gets this read. **Report only; edit nothing but your report.** Name helpers `second-*.py`. **Never run a git command, not even a read-only one.** Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. Do not read `$SP/parent-only/` or any earlier report.

## Read first
`docs/knowledge-check-playbook-chemistry.md` "Content rules"; `docs/subjects/chemistry.md` "Exercises" ("Stems", "Numeric keys", "Added items"); `docs/knowledge-check-playbook-life-sciences.md` "Content rules" from "A stem stands alone" to "No item may print another item's key on the same check".

## The set
`$SP/kc/replacements.md` lists every item to read: section, kind, the stem's first words, why it was replaced, and the example or subsection the replacement claims. The page is the trial assembly `$SP/kc/trial/content/physical-sciences/chemistry/__FILE__`. CNXML: `sources/openstax/osbooks-chemistry-bundle/modules/<id>/index.cnxml`; section pages: `content/physical-sciences/chemistry/<chapter dir>/`; the periodic table: `content/physical-sciences/chemistry/appendices/a-the-periodic-table.md`.

## Method, per item
1. Answer it with the key covered — a number by running the arithmetic from the stem and the periodic table — then compare.
2. A worked-example item: the stem is the example's question as the page prints it; the key is the Solution's printed value, to its figures; `last-digit` or the band is what "Numeric keys" gives; every test of "A usable example" holds, the chain leak across the WHOLE trial page included. Grade your answer, the key, the table's value, and every number the stem prints through `check-answer.mjs`.
3. A written item: ONE module sentence fixes the key; every option printed in the item's own module; rubric clauses from the model answer; then grep the section page in order (description, objective headings, Practice stems, options, hints and rubrics, body self-checks) and every section page of the book for the key and its fact.
4. **Read the item's two neighbours on the page** — an adjacent stem, option, or rubric that gives this one away — and the section as it now stands: two or three items, one auto-graded, different objectives.
5. Tells: a key in the section title, a key's word or root in the stem, options naming or excluding, mixed categories, a contrast-pair half, an open list's tail.

## Report
Append to `$SP/kc/second-check.md`: per item PASS or FAIL with the evidence line and a one-line fix. Summary: `N read, P pass, F fail`. Final message: ten lines at most.
