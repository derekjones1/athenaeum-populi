# Author the Chapter __CH__ block of the Chemistry Knowledge Check for Chapters __RANGE__

You are one of the authors writing the cumulative Knowledge Check for Chapters __RANGE__ of OpenStax Chemistry 2e, one chapter each. Your chapter is **Chapter __CH__: __TITLE__**. Work only on your own files; other agents share this scratchpad, so name any helper file `ch__CH2__-*.py`. **Never run a git command, not even a read-only one.** Repository root: `/Users/derek/GolandProjects/athenaeum-populi`; run every command from it.

## Read first, in this order — and only this
1. `docs/knowledge-check-playbook-chemistry.md` — **"Content rules"** (all of it) and **"Source and answer audit"**. "Placement" and "Verify" are the parent's.
2. `docs/subjects/chemistry.md` — in "Exercises": the table of components, **"Stems"**, **"Numeric keys"**, **"Added items"**, **"Selfchecks"**; then **"Notation"** and **"Graded items"** (the formula and equation forms, and "Measured quantities"). Not "Hints": a check has none.
3. `docs/knowledge-check-playbook-life-sciences.md` — in "Content rules", from the bullet **"A stem stands alone"** to **"No item may print another item's key on the same check"**. These bind every item you WRITE (a recall item, a selfcheck). Its quota, its "Exactly three items", and its "Author-written from the module" bullets are that shelf's, not yours.
4. `$SP/kc/run-facts.md` — the parent's facts for this block: your sections' objectives, the worked examples ruled NOT usable and why, the chapter's `tolerance` band, the errata and Source notes that touch your modules.
5. `$SP/kc/examples.txt` — every worked example of the block: title, CNXML id, question, the end of its Solution.

## Sources
- The pinned CNXML modules (the transcription authority): `sources/openstax/osbooks-chemistry-bundle/modules/<id>/index.cnxml`. Your sections:
__SECTIONS__
- The authored section pages: `content/physical-sciences/chemistry/__DIR__/`. A worked example is printed there as `**Example.** *Title.* question … **Solution.** …`.
- The periodic table every learner has: `content/physical-sciences/chemistry/appendices/a-the-periodic-table.md`. Take every atomic mass from it, as printed.

## What you write
1. `__SCRATCH__` — a page whose body is `$SP/kc/head.md` verbatim (the parent owns it), then your `## Chapter __CH__: __TITLE__` block, then `$SP/kc/foot.md` verbatim. Under the chapter heading, one `### N.M Title` per section, titles verbatim from the pages' frontmatter, and under each **two or three items, at least one auto-graded** (`fillin`, `multiplechoice`, `textin`, `sortbins`). Three where the section's content supports three. No `hint=` anywhere.
2. `$SP/kc/ch__CH2__/ledger.md` — the source audit, per item, exactly as "Source and answer audit" lists it. For a worked-example item that includes your own computation, run with `python3 -c` and shown unrounded, and each test of "A usable example".
3. `$SP/kc/ch__CH2__/provenance.json` — `{"<item stem, verbatim as on the page>": "KC __BLOCK__ <N.M> § Example: <example title>, m<module id>"}` for a worked-example item, `"KC __BLOCK__ <N.M> § <subsection title | summary | glossary>, m<module id>"` for a written one. One entry per item. Write it with `ensure_ascii=False` and indent 2.

## Choosing a section's items
- **Spread by objective.** Each item serves a different learning objective of the section (the page's objectives callout lists them). An objective with a usable worked example takes a worked-example item; a section with no worked example is recall items and at most one selfcheck.
- **A worked-example item** re-asks the example's own question — as the SECTION PAGE prints it, title dropped — and keys the value its Solution prints. Add only what "Stems" adds to a keyed exercise: the closing sentence naming the unit or the quantity where the question leaves it open ("Enter the molarity in mol/L."), the plain-words place for a section before 1.5, the typing sentence of a nuclide or a hydrate. A lettered example gives ONE part, its lead-in restated for the one. Never change a number.
- **Every `fillin`, and every `textin` with `answerForm="formula"` or `"equation"`, must be a worked-example item**: the gate below refuses any other. A count, a measured value, a formula, an equation that no worked example of the section answers is not asked on a check.
- **Test each example against "A usable example"** before you build on it, and against the run facts' list. Grep the section's `## Practice` block for the example's substance and data: an example a keyed exercise asks again, same substance and same answer, is not used (block 1: 2.3's iodine anion, 2.4's glucose), and neither is one that needs a conversion factor or a constant its stem does not print. In particular: its answer is printed in the Solution's TEXT; the section page did not correct it or note it; its answer is not a number its own question prints; and it neither gives nor takes another item's answer — yours or another chapter's (an example that says "in the previous example the concentration was determined to be …" is restating an answer: use one of the pair, never both).
- **Compute every numeric key yourself, by running the arithmetic, before you read the Solution's value.** If they differ beyond the item's `last-digit` or band, do NOT key your value: transcribe nothing, choose another example, and report the example to the parent as a suspected source defect.
- **`answerForm`** as for a keyed exercise ("Numeric keys"): `last-digit:0` when every number is printed in the stem or exact; `1` when the learner fetches a measured factor (a molar mass, a conversion factor) from a table; the chapter's `tolerance:<p>%` only where the table's value is more than one unit of the last digit from the printed key — and then the item is followed by the Source-note sentence of the playbook's "The page". Prefer an example that needs no band.
- **A written item** (a recall `textin`, a select-the-term `multiplechoice`, a `sortbins`, a rubric'd `selfcheck`) is built on ONE module sentence, definition, or table, under "Added items" and the life-sciences rules you read.

## The rules the runs keep tripping on — apply every one before settling a written item
- **Grep the section page first, in this order:** frontmatter `description`, objective headings and the objectives callout, Practice stems — SELF-CHECK STEMS INCLUDED — options, hints and rubrics, body self-checks and Check Your Learning items — for the key, its defining fact, AND every distractor. Block 1's six hard sweep findings were all here: an objective heading that pairs the key with its fact ("Represent the bonding arrangement … using structural formulas"), a self-check stem that rules out both distractors ("Considering that mass and volume are both extensive properties"), a page rubric that prints the selfcheck's clauses. This book's pages already spend glossary terms and summary sentences as fillers. A page that prints the key with its fact anywhere makes that key a reverse recall: pick another.
- **Then grep every section page of the book**: `grep -rn 'answer="<key>"\|accept="[^"]*<key>' content/physical-sciences/chemistry/`. A fact another page already keys or accepts is a twin.
- **Grep the page for the SENTENCE, not only the key**: an item built on a sentence a page item already uses, with the blank moved, is the same item.
- **A `textin` key is never a word of its section's title** (lint: on a check the heading above the item is `### N.M Title`), never one half of a contrast pair the stem prints, never the last item of an open list, never a word with a common synonym. Run the blank's likely rivals through the grader.
- **Each option comes from a different module clause.** Two distractors the module names in one breath ("such as density and color"; "Leucippus and Democritus") leave the key as the odd one out. And option names must not answer the stem by their own prefixes (protium, deuterium, tritium under "hydrogen-2": ask for the name as a text-in).
- **A section may stand at two items.** A third item that leaks is worse than none: when a module's unspent sentences run out, say so and stop.
- **No stem prints a word or root of its key**; no stem names or excludes its own options; no option set mixes categories or formats; every option is a term the item's OWN module prints; a two-option item only where the module's sentence prints exactly two terms of the kind.
- **A select-the-term multiple choice is a question** ("Which term names …?"), never opened by a blank; vary key positions across your block.
- **Rubric clauses are copied from the model answer**, which is the module's own sentences; the stem asks for every clause the rubric grades and nothing else.
- **Accept lists:** only another name or form the MODULE prints, or the key's own words spelled a way the grader does not fold ("An `accept` member is one of two things"). Never a regular plural, never an ordinary word.
- **Stems carry no referent** ("this section", "the figure above", "the previous example"): a cumulative page has none. A leaned-on datum is restated inline.
- **Notation**: formulas in prose are Unicode (`H₂PO₄⁻`), inside math `\ce{…}`; a four-digit number in math is grouped; never `\dfrac` — and if a fraction reads worse for it, say so in your report (the `\dfrac` watch).
- **Errata:** grep `docs/openstax-errata.md` for each of your module ids before writing. Do not edit that file; report any new suspected source defect in your final message and in the ledger.

## Verify
From the repository root, until all three are clean:
- `npm run verify-section -- __SCRATCH__ > $SP/kc/ch__CH2__/verify.log 2>&1; tail -30 $SP/kc/ch__CH2__/verify.log`
- `node tools/source/knowledge-check.mjs sources __SCRATCH__` — every fill-in and formula confirmed against its worked example.
- `node tools/source/knowledge-check.mjs leaks __SCRATCH__` — read each candidate.
Then grade through the real grader, for every fill-in: your own answer, the key, the value Appendix A's masses give, the unrounded readout, and every number the stem prints (`node -e 'import("./assets/js/lib/math/check-answer.mjs").then(m=>console.log(m.checkAnswer("<typed>","<key>",{form:"<form>"})))'`). Your answer and the key must be `correct`; a number retyped from the stem must never be. Then re-read your whole block once as a reader with the keys hidden.

## Reporting
Final message, ten lines at most: item counts by kind (worked-example fill-ins, formulas, multiple choices, recall text-ins, selfchecks), the sections with two items and why not three, any example you rejected that the run facts did not list, any suspected source defect, any `\dfrac` watch item, and the three verify results. Fix requests from the parent arrive later by message; apply them on the scratch page, record each in `$SP/kc/ch__CH2__/fixes.md` (append), list EVERY item you touched, re-run the three checks, and update `provenance.json` when a stem changes.
