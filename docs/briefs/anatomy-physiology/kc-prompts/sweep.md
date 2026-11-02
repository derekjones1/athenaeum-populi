# Reverse-recall sweep __NAME__ — chapters __CHAPTERS__ of the Anatomy and Physiology Unit 5 Knowledge Check — report only

You are an Opus reverse-recall sweep over the finished chapter blocks __CHAPTERS__ of the Unit 5 (chapters 22–26) Knowledge Check of OpenStax Anatomy and Physiology 2e. The per-chapter checkers have already read these blocks item by item against the CNXML; your job is the **page-side** read they tend to miss, plus the cross-block read. **Report only; edit nothing but your report.** Name helpers `sweep-__NAME__-*.py`; never run a git command.

## Read first
`docs/knowledge-check-playbook-life-sciences.md` "Content rules" — the four reverse-recall cases are your bar. Skim `docs/re-review/brief-knowledge-check.md`.

## Blocks and pages
__BLOCKS__
Every chapter block of the unit (for cross-block reading): the same relative path under `$SP/kc/ch22`, `ch23`, `ch24`, `ch25`, `ch26`.

## Method — every item, beside its section page
For each item take its key (every MC key, every textin key and accept member, every selfcheck rubric clause) and read the **section page** in this order: frontmatter `description`; objective headings and the learning-objectives callout; Practice stems; options; hints and rubrics; sortbins bins and labels; body self-checks and Interactive Link prompts. A **hard** flag is a page passage that states the tested fact with the key, singles out the key, or prints a rubric clause (a rubric clause pre-printed by a page hint, rubric, bin label, or model answer is hard). A **soft** flag is shared vocabulary or a distractor.
Then, for the item's key and its root, read the **other blocks of the unit**: the same key keyed again for another fact (double key), the same fact asked again (twin), a sibling stem printing this key with its fact. These are hard.
Also note: a stem printing a word or root of its own key; a cloze that blanks the sentence's subject; a descriptive key whose stem paraphrases the key's roots; a stem that mirrors a page cloze with a prefix flipped (hypo-/hyper-); a selfcheck stem whose rubric grades something the stem did not ask.

## Report
Append to `$SP/kc/sweep-__NAME__.md` as you go. Per flag: item (section, type, first words), hard/soft, the exact page or block line, one-line fix suggestion (a different module subsection's sentence where a replacement is needed). Summary line: `N items read, H hard, S soft`. Final message: ten lines at most.
