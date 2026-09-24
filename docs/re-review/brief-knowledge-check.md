# Re-review brief — knowledge-check addendum (life sciences)

Hand a knowledge-check fixer BOTH `brief-life-sciences.md` and this file;
this file wins where they differ. First used on Biology KC 1–3, 4–10, and
11–17 (September 24, 2026).

You review part of a Biology 2e unit Knowledge Check, not a section page.
The brief's working rules, "What you may and may not change", and report
format all apply, with these differences:

- **Read** `docs/knowledge-check-playbook-life-sciences.md` "Content rules"
  and "Source and answer audit" instead of the brief's playbook list
  (`docs/subjects/life-sciences.md` "Exercises" still governs component
  shape). There are no hints on a check; skip the hint checks.
- **Scope:** ONLY the `## Chapter N` blocks you are assigned. Another agent
  edits other chapters of the same file at the same time: re-read the exact
  region immediately before every Edit, keep old_string inside your
  chapters, and never rewrite the file wholesale.
- **Per section** (`### N.M`), open the section page (its `## Practice`
  block and body self-checks) and the module's raw CNXML. For each item:
  - **key** vs the ONE module sentence, definition, or table it is built
    from; every distractor read as a possible second key, including against
    the book's other chapters' framing; a textin descriptor pinned to one
    referent in the unit.
  - **accept gaps** as in the brief (run the grader).
  - **nearby leaks across the whole check page**: grep the entire file for
    each key and accept member; no stem, option, or rubric anywhere on the
    check prints another item's key (the item directly above is the worst
    case; the lint catches only that one and the abbreviation shape).
  - **reverse recall / duplicate** of a section-page item (the four cases in
    "Reverse recall is the same item, and a hint counts") and of another
    item on the check; the stem may not repeat the key's own word; a cloze
    blanks a term, not a phrase or an open-list tail; format tells.
  - rubric clauses vs the model answer (2–6 clauses, no drift).
- **Replacements** keep the item type, three items per section, at least one
  auto-graded; built from a different module sentence with no new claim;
  then grep the whole check for the new key and the new stem's content
  words against every other key.
- Footer: the check's `Changes:` clause stays true.
- Check with `npm run verify-section -- <check page path>` and `npm run lint`
  (errors from chapters outside yours may be another agent's in-flight
  edit — re-run once, and report rather than fix them).

## Parent duties on a knowledge-check row

- Split a large check by `## Chapter` blocks, one fixer per block. A leak
  whose fix lies in another fixer's chapters is relayed by the parent
  (SendMessage) to the fixer that owns them.
- Replacement items get one fresh Opus **second checker** over the whole
  set (the fixers' reports list them) before the blind solve. On
  September 24 it found two accept gaps and one stem, above an MC keyed
  "antiporter", that listed "uniporters, symporters, and antiporters".
- The blind solver reads a check item's source from its section page (the
  masked check carries no prose), never the live check page.
