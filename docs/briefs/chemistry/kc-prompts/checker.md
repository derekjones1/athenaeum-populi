# Check the Chapter __CH__ block of the Chemistry Knowledge Check for Chapters __RANGE__ — report only

You are the independent checker for **Chapter __CH__: __TITLE__** of the cumulative Knowledge Check for Chapters __RANGE__ of OpenStax Chemistry 2e. **Report only; edit no file but your report.** Other agents share this scratchpad: name any helper `ch__CH2__-check-*.py`. **Never run a git command, not even a read-only one.** Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. Do not read `$SP/parent-only/` or any other agent's report.

## Read first
1. `docs/knowledge-check-playbook-chemistry.md` — "Content rules" and "Source and answer audit".
2. `docs/subjects/chemistry.md` — in "Exercises": the table of components, "Stems", "Numeric keys", "Added items", "Selfchecks"; and "Graded items".
3. `docs/knowledge-check-playbook-life-sciences.md` — "Content rules" from "A stem stands alone" to "No item may print another item's key on the same check" (the bar for every WRITTEN item).
4. `$SP/kc/run-facts.md` — the examples the parent ruled unusable, the chapter's band, the errata and Source notes of your modules.

## What you check
- The block: `__SCRATCH__` (only the `## Chapter __CH__` block is the author's; the head and foot are the parent's). The author's audit: `$SP/kc/ch__CH2__/ledger.md`, `$SP/kc/ch__CH2__/provenance.json`.
- The pinned CNXML modules, `sources/openstax/osbooks-chemistry-bundle/modules/<id>/index.cnxml`:
__SECTIONS__
- The authored section pages in `content/physical-sciences/chemistry/__DIR__/`, and the periodic table at `content/physical-sciences/chemistry/appendices/a-the-periodic-table.md`.
- The sibling chapter blocks, for twins and leaks across the check (read them as they exist; some may be in progress):
__BLOCKS__

## Method — a worked-example item (every fill-in, every formula or equation text-in, and any item whose provenance says "Example:")
1. **Answer it first, key covered**: from the stem and the periodic table alone, running the arithmetic (`python3 -c`), carrying every digit and rounding once. Only then read the key, and then the example's Solution in the raw CNXML. Compare all three.
2. The stem is the example's question as the section page prints it, title dropped, with nothing changed and only what "Stems" allows added. Every datum the question leans on is restated inline; no referent ("the previous example") survives.
3. The key is the Solution's final value as printed, to its figures. `sig-figs:<n>` is the key's own count; `last-digit` is what "Numeric keys" gives for where the numbers come from (say which numbers are measured factors); a `tolerance:<p>%` is the chapter's band, declared only where the table's value is more than one unit of the last digit from the key, and followed by its Source-note sentence.
4. **"A usable example"**, each test: stands alone; one auto-gradable answer; the answer in the Solution's text; not corrected or Source-noted on the section page (grep the page for `*Source note`); the key not a number the question prints; the answer not another item's datum, and no datum another item's answer — on this block or a sibling's.
5. Grade through the real grader: your answer, the key, the value the periodic table gives, the unrounded readout, the answer with its unit, and every number the stem prints. Your answer and the key must be `correct`; a number retyped from the stem must never be. (`node -e 'import("./assets/js/lib/math/check-answer.mjs").then(m=>console.log(m.checkAnswer("<typed>","<key>",{form:"<form>"})))'`; a formula through `check-text.mjs` `checkText("<typed>","<key>",{form:"formula"})`.)
6. A worked-example item that is a `multiplechoice` or a plain `textin` (a choice, a name) is read against the Solution by you alone — no gate reads it: the options are the question's own set, the key the Solution's.

## Method — a written item (a recall text-in, a select-the-term multiple choice, a sortbins, a selfcheck)
1. **Answer it first with the key covered**, then compare. Record whether a second answer or option is defensible.
2. Against the raw CNXML: ONE module sentence, definition, or table fixes the key; every option is a term the item's OWN module prints; no second correct option; rubric clauses copied from the model answer, the model answer from the module's sentences; the stem asks everything the rubric grades and nothing else.
3. **Grep the section page in this order** for the key and its defining fact: frontmatter `description`, objective headings and callout, Practice stems, options, hints and rubrics, body self-checks and Check Your Learning items. A hit that states the tested fact or singles out the key is a hard finding (reverse recall). Then grep every section page of the book for the key as an `answer=` or `accept=` member (a twin).
4. Tells: a key that is a word of its section title; a stem printing a word or root of its key; a stem naming or excluding its own options; mixed categories or formats; a cloze blanking a contrast-pair half, an open list's tail, or a word with a common synonym (run the rivals through `check-text.mjs` `checkText`, `accept` passed as the `|`-separated string); the item re-asking or paraphrasing a section item; an adjacent item on the block that gives this one away.
5. Accept lists: every member module-printed or a spelling the grader does not fold; no regular plural, no ordinary word.

## The block as a whole
- Each section has two or three items, at least one auto-graded; its items serve different objectives; a section with a usable worked example for an objective did not spend that objective on a recall item without a reason in the ledger.
- Key positions across the block's multiple choices; numeric options ascending.
- Cross-block: a key keyed again in a sibling block, the same fact asked there, a sibling stem printing this key with its fact.
- Run and read (do not edit): `npm run verify-section -- __SCRATCH__`, `node tools/source/knowledge-check.mjs sources __SCRATCH__`, `node tools/source/knowledge-check.mjs leaks __SCRATCH__`.
- Grep `docs/openstax-errata.md` for each module id: an item must follow a disclosed decision. A worked example whose arithmetic you cannot reach is a suspected source defect: report it with your computation, and say that the section page prints it too.

## Report
Append findings as you go to `$SP/kc/check-ch__CH2__.md` (never a shared name). Per finding: item (section, kind, the stem's first words), **hard** or **soft**, the evidence (the exact page line, module sentence, or your arithmetic), and a one-line fix — for a replacement, a candidate example or module sentence. End with: `N items read (W worked-example, R written), H hard, S soft; answered N key-covered, D disagreements`. Final message: ten lines at most.
