# Sweep __NAME__ — chapters __CHAPTERS__ of the Chemistry Knowledge Check for Chapters __RANGE__ — report only

You are a sweep over the finished chapter blocks __CHAPTERS__ of the cumulative Knowledge Check for Chapters __RANGE__ of OpenStax Chemistry 2e. The per-chapter checkers have read these blocks item by item against the CNXML; your job is the **page-side** read they tend to miss, and the read **across blocks**. **Report only; edit nothing but your report.** Name helpers `sweep-__NAME__-*.py`. **Never run a git command, not even a read-only one.** Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. Do not read `$SP/parent-only/` or any checker's report.

## Read first
`docs/knowledge-check-playbook-chemistry.md` "Content rules", and `docs/knowledge-check-playbook-life-sciences.md` "Content rules" from "The stem may not repeat the key's own word" to "No item may print another item's key on the same check" — the four reverse-recall cases are your bar for a written item.

## Blocks and pages
__BLOCKS__
The section pages are under `content/physical-sciences/chemistry/`, one directory per chapter.

## Method — every WRITTEN item (recall text-in, multiple choice, sortbins, selfcheck), beside its section page
Take its key (every multiple-choice key, every text-in key and accept member, every rubric clause) and read the **section page** in this order: frontmatter `description`; objective headings and the objectives callout; Practice stems; options; hints and rubrics; body self-checks and Check Your Learning items. A **hard** flag is a page passage that states the tested fact with the key, singles out the key, prints a rubric clause, or uses the item's own sentence with the blank elsewhere. A **soft** flag is shared vocabulary or a distractor. Then grep **every section page of the book** for the key as an `answer=` or `accept=` member, and read the **other blocks** for the same key keyed again, the same fact asked again, or a stem that prints this key with its fact — hard.
Also note: a key that is a word of its `### N.M` title; a stem printing a word or root of its key; a cloze blanking one half of a contrast pair the stem prints; options the page assigns to other things, so the key is left by elimination; a selfcheck whose rubric grades something its stem did not ask.

## Method — every WORKED-EXAMPLE item (fill-in, formula or equation text-in, or a provenance note that says "Example:")
1. Find its example on the section page (`**Example.** *Title.*`). The stem is that question with only a closing sentence added. A changed number, a dropped datum, or a surviving referent ("the previous example") is hard.
2. **The chain leak**, across every block of the check: the item's key printed as a datum in another item's stem, or a datum of this stem that is another item's key. `node tools/source/knowledge-check.mjs leaks <block>` lists the candidates within one block; across blocks the read is yours.
3. **A page correction**: the section page carries a `*Source note:*` on or directly after this example, or its numbers differ from the item's. Hard: a corrected example is not used.
4. The same example asked twice on the check, or an example item and a written item asking one fact. Hard.
5. The section page's own Check Your Learning or Practice item with the same numbers as this item (not merely the same method): hard — that is the duplicate the lint reads only word for word.

## Report
Append to `$SP/kc/sweep-__NAME__.md` as you go. Per flag: item (section, kind, first words), hard or soft, the exact page or block line, and a one-line fix. Summary line: `N items read (W worked-example, R written), H hard, S soft`. Final message: ten lines at most.
