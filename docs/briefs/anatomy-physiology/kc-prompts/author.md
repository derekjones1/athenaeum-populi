# Author the Chapter __CH__ block of the Anatomy and Physiology Unit 5 Knowledge Check

You are one of five Opus authors writing the Unit 5 (chapters 22–26) cumulative Knowledge Check of OpenStax Anatomy and Physiology 2e, one chapter each. Your chapter is **Chapter __CH__: __TITLE__**. Work only on your own files; other agents share this scratchpad, so name any helper file `__CH__-*.py` and never run a git command.

## Read first, in this order
1. `docs/knowledge-check-playbook-life-sciences.md` — the sections **"Content rules"** and **"Source and answer audit"** (the "Placement" and "Verify" parts are the parent's).
2. `docs/subjects/life-sciences.md` — the section **"Exercises"** (the textin/multiplechoice/selfcheck/sortbins component rules; accept lists, rubric clauses, the hint and leak rules).
3. `docs/subjects/anatomy-physiology.md` — the section **"Knowledge checks"** (short).
4. The finished Unit 4 check, `content/life-health-sciences/anatomy-physiology/knowledge-check-18-21.md`, as the model of the block shape (`## Chapter N: Title`, then `### N.M Section Title` groups of exactly three items). Read one chapter of it, not all.

## Sources
- The pinned CNXML modules (the transcription authority) are under `sources/openstax/osbooks-anatomy-physiology/modules/<id>/index.cnxml`. Your sections and modules:
__SECTIONS__
- The authored section pages are in `content/life-health-sciences/anatomy-physiology/__DIR__/`.

## What you write
1. `__SCRATCH__` — a page whose body is exactly `$SP/kc/head.md`'s contents (copy it verbatim; the parent owns it), then your `## Chapter __CH__: __TITLE__` block, then `$SP/kc/foot.md` verbatim. The head and foot are only there so `verify-section` can run on your scratch page; the parent's assembler cuts just your `## Chapter` block. Three items per `### N.M`, every section of the chapter, each section with at least one auto-graded item (multiplechoice, textin, or sortbins; sortbins only when the module gives a clean bin set) and a rubric'd selfcheck pattern as the Unit 4 page shows. The three items of a section come from three different subsections of the module (feature boxes sit in whatever `<section>` the CNXML nests them in — check the nesting, not the box title; a module with fewer than three subsections gets a spread exception that you record in the ledger).
2. `$SP/kc/ch__CH__/ledger.md` — the source audit ("Source and answer audit"): per item, its module sentence(s), the subsection, the grep results below, and any spread exception.
3. `$SP/kc/ch__CH__/provenance.json` — `{"<item stem, verbatim as on the page>": "KC 5 __CH__.M § <subsection title>, m<module id>", …}`, one entry per item (36 stems is wrong; your chapter has 3 × its section count). Write it with `ensure_ascii=False` and indent 2.

## The rules the runs keep tripping on — apply every one before settling an item
- **Grep the section page first, in this order:** frontmatter `description`, objective headings and the learning-objectives callout, Practice stems, options, hints and rubrics, sortbins bins and labels, body self-checks and Interactive Link prompts — for the key AND its defining fact. A page that prints the key with its fact anywhere (a hint, a rubric clause, a distractor, a bin label, the description) makes that key a reverse recall: pick another.
- **A cloze blanks what the module sentence names, not its subject**, and a descriptive key's stem must not paraphrase the key's own words or roots ("two stimuli … on both sides" for "double simultaneous stimulation" fails).
- **No stem prints a word or root of its key**; no option set mixes categories or formats; no stem names or excludes its own options; no etymology or "despite its name" giveaways; the stem does not re-ask a section Practice item (the duplicate-stem lint catches exact matches only — judge paraphrases yourself).
- **Rubric clauses are copied from the model answer's sentences**, which are the module's own sentences; never restated. The stem of a selfcheck must ask for every clause the rubric grades, and nothing the rubric does not grade.
- **Vary key positions** across your multiplechoice items (the whole page is gated on key-position spread). Keep 3- and 4-option items balanced in their key slots.
- **Avoid keying the unit's headline names** that other chapters print (e.g. the diaphragm, alveoli, hemoglobin, bicarbonate, pH, the nephron, ADH, aldosterone, angiotensin, insulin, glucose, the liver, acidosis/alkalosis recur across chapters 22–26): a key used once on the whole page, by one item, for one fact. Prefer the module's second-tier terms.
- **Accept lists:** only module-printed variants (spelling, hyphen, abbreviation the module prints); never an ordinary word or a regular plural (the grader folds plurals); run every natural variant of each textin key through `verify-section`'s self-grade.
- **Key terms:** the module's `<glossary>` is the key-terms list; a textin key should be a term the module defines or prints verbatim.
- A page's `description` or objective heading printing the key with its fact is a reverse recall (the "eleven organ systems" case).
- Stems carry no referent ("the figure above", "this section") — a cumulative page has none; write the fact into the stem.
- **Grep the page for the SENTENCE, not only the key** (Unit 5): an item built on the sentence a page item already uses, with the blank moved, is the same reverse recall. Also grep for the **prefix-flipped mirror** of any page item (hypo-/hyper-, pre-/post-, dominant/recessive): a stem that mirrors a page cloze with the prefix flipped is a tell.
- **Numeric options are sorted ascending**, then recount key slots; a number stated in the stem must not bracket the key, and a range key among single-number options is a tell.
- **Options are all effects, all steps, or all structures** — an upstream step beside two effects is an arguable second key; a distractor the page assigns to something else, or that the item above settles, hands over the key by exclusion ("elimination by the page"). Every distractor is printed in the item's OWN module (Unit 6: a 28.1 term beside a 28.2 key failed the second checker).
- **A sibling section page's rubric printing the fact is a reverse recall too** (Unit 5): grep the neighbouring section pages of the unit, not only your own.
- **Grep every key and accept member against the whole BOOK's section pages** (Unit 6): `grep -rn 'answer="<key>"\|accept="[^"]*<key>' content/<book>/` — a fact an earlier unit's page already keys or accepts for the same fact (28.2 Wharton's jelly ↔ the 4.3 cloze; 28.2 apoptosis ↔ the 8.5 cloze) is a twin even across units, which the unit-scoped sweep cannot see.
- **Read the section page's footer before building a table item**: a sortbins the page's footer declined because its members "sort without the module" stays declined on the check (Unit 6, 27.3); the replacement may change type with the parent's say-so.
- **Errata:** grep `docs/openstax-errata.md` for each of your module ids before writing; a disclosed defect may carry a decision the check must follow (never key a corrected term unless the page's handling says so). Do not edit the errata file; report any new suspected source defect in your final message and in the ledger.

## Verify
From the repository root: `npm run verify-section -- __SCRATCH__ > $SP/kc/ch__CH__/verify.log 2>&1; tail -30 $SP/kc/ch__CH__/verify.log` until clean (the mirrored path gives the book's quota and duplicate-stem profile). Then re-read your whole block once more as a reader with the keys hidden, looking for the tells above.

## Reporting
Final message: ten lines at most — item counts by type, spread exceptions, any suspected erratum, and the verify-section result. Fix requests from the parent arrive later by message; apply them on the scratch page and record each in `$SP/kc/ch__CH__/fixes.md` (append; never overwrite a checker's report). Re-run verify-section after every fix and update `provenance.json` when a stem changes.
