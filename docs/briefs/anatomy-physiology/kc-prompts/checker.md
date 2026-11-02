# Check the Chapter __CH__ block of the Anatomy and Physiology Unit 5 Knowledge Check — report only

You are the independent Opus checker for **Chapter __CH__: __TITLE__** of the Unit 5 (chapters 22–26) cumulative Knowledge Check of OpenStax Anatomy and Physiology 2e. **Report only; do not edit any file except your report.** Other agents share this scratchpad: name any helper `__CH__-check-*.py`, never run a git command.

## Read first
1. `docs/re-review/brief-life-sciences.md` and `docs/re-review/brief-knowledge-check.md` — your standards.
2. `docs/knowledge-check-playbook-life-sciences.md` "Content rules" and "Source and answer audit" (the four reverse-recall cases, the spread rule, the rubric rule).

## What you check
- The block: `__SCRATCH__` (only the `## Chapter __CH__` block is the author's; the head and foot are the parent's). The author's audit: `$SP/kc/ch__CH__/ledger.md`, `$SP/kc/ch__CH__/provenance.json`.
- The pinned CNXML modules under `sources/openstax/osbooks-anatomy-physiology/modules/<id>/index.cnxml`:
__SECTIONS__
- The authored section pages in `content/life-health-sciences/anatomy-physiology/__DIR__/`.
- The sibling chapter blocks, for cross-block twins and keys (read them as they exist; some may still be in progress): `$SP/kc/ch22/…`, `$SP/kc/ch23/…`, `$SP/kc/ch24/…`, `$SP/kc/ch25/…`, `$SP/kc/ch26/…` (same relative path `content/life-health-sciences/anatomy-physiology/knowledge-check-22-26.md`).

## Method, per item
1. **Answer it first with the key covered**, then compare. Record your answer and whether a second option or reading is defensible.
2. Re-read it against the raw CNXML (not the page): the stem's fact and every option printed there; no second correct option; a textin key a term the module defines or prints; rubric clauses copied from the model answer, the model answer from the module's sentences; the stem asks everything the rubric grades and nothing else.
3. **Grep the section page in this order** for the key and its defining fact: frontmatter `description`, objective headings and callout, Practice stems, options, hints and rubrics, sortbins bins and labels, body self-checks and Interactive Link prompts. A hit that states the tested fact or singles out the key is a hard finding (reverse recall).
4. Tells: a stem printing a word or root of its key; a stem naming or excluding its own options; an option set mixing categories or formats; etymology or "despite its name" giveaways; a cloze that blanks the sentence's subject rather than what it names; a descriptive key whose stem paraphrases the key's roots; a stem that re-asks or paraphrases a section Practice item; an adjacent item on the block that gives this one away.
5. **Spread:** the three items of a section come from three different subsections by the CNXML `<section>` nesting (a feature box belongs to its host section). Flag a repeat the ledger does not record as an exception.
6. **Accept lists:** every member module-printed; no ordinary word, no regular plural; run each natural variant of the key through the grader's folding (`npm run verify-section -- __SCRATCH__` self-grades the keys; read its log, do not edit).
7. **Cross-block:** the key, keyed again in a sibling block (a double key), or the same fact asked in a sibling block (a twin), or a sibling block's stem printing this key with its fact.
8. **Key positions** across the block's multiplechoice items.
9. Grep `docs/openstax-errata.md` for each module id: an item must follow a disclosed decision.

## Report
Append findings as you go to `$SP/kc/check-ch__CH__.md` (never a shared name). Per finding: item (section, type, stem's first words), **hard** or **soft**, the evidence (the exact page line or module sentence), and a suggested fix in one line (replacement sentence candidate from a different subsection where a replacement is needed). End with a summary line: `N items read, H hard, S soft; answered N with the key covered, D disagreements`. Final message: ten lines at most.
