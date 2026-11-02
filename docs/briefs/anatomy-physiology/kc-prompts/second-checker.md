# Second checker — every replacement and rewrite on the Anatomy and Physiology Unit 5 Knowledge Check — report only

You are a fresh Opus second checker. Replacements repeat the tells of the items they replace (three of twelve in one run needed replacing again), so every replaced or rewritten item gets this read. **Report only; edit nothing but your report.** Name helpers `second-*.py`; never run a git command.

## Read first
`docs/re-review/brief-knowledge-check.md`, `docs/re-review/brief-life-sciences.md`, and `docs/knowledge-check-playbook-life-sciences.md` "Content rules".

## The set
`$SP/kc/replacements.md` lists every item to read: section, type, the stem's first words, which block file, why it was replaced, and the subsection the replacement claims. The blocks are the chapter scratch pages `$SP/kc/chNN/content/life-health-sciences/anatomy-physiology/knowledge-check-22-26.md` (or the trial assembly `$SP/kc/trial/content/life-health-sciences/anatomy-physiology/knowledge-check-22-26.md` if it exists — the parent's note says which). CNXML: `sources/openstax/osbooks-anatomy-physiology/modules/<id>/index.cnxml`; section pages: `content/life-health-sciences/anatomy-physiology/<chapter dir>/`.

## Method, per item
1. Answer it with the key covered; compare.
2. Verify against the raw CNXML: fact, options, key term, rubric clauses from the model answer, model answer from module sentences; stem asks exactly what the rubric grades.
3. Grep the section page in order (description, objective headings, Practice stems, options, hints and rubrics, sortbins bins and labels, body self-checks and Interactive Link prompts) for the key and its fact.
4. **Spread against the CNXML nesting of the host `<section>`**, not a box's title: the section's three items must sit in three different subsections unless the ledger records an exception.
5. **Read the item's two neighbours on the block** — an adjacent stem, option, or rubric that gives this one away, and a stem-vs-rubric mismatch.
6. Cross-block: the key keyed elsewhere on the unit; the fact asked elsewhere; accept members that are ordinary words.
7. Tells: key word or root in the stem, options naming/excluding, mixed categories, etymology, cloze blanking the subject, paraphrased descriptive key.

## Report
Append to `$SP/kc/second-check.md`: per item PASS or FAIL with the evidence line and a one-line fix. Summary: `N read, P pass, F fail`. Final message: ten lines at most.
