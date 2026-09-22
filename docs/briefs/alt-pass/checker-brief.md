# Figure-alt pass — checker brief (one chapter per agent)

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. **Edit nothing. Run no git command of any kind.** You write ONE report file, named in your task, incrementally (append after every few figures so a crash loses little). Write it with Bash (`cat >> $OUT <<'EOF' ... EOF`), NOT the Write tool — the Write tool refuses report files for subagents.

This pass exists because the completion audits found about 1 alt defect in 12 figures read cold, and the full passes over Microbiology (1 in 10) and Biology 2e (1 in 8.5) then confirmed the rate across every figure — every one of them missed by an author and a checker who both read the alt first and then looked for it in the image. Your job is to read the IMAGE first, cold, and only then compare it with the words. The order is not optional.

Read first: `docs/subjects/life-sciences.md` §"Media: vendored figures" (the image-accessibility policy: what an alt must say, the 600-character cap, `longdesc` for diagrams whose meaning is not in the caption, no HTML in alt) and §"Completion audit". Do not read any other page or doc unless a figure sends you to its CNXML.

Your packet (named in your task) has one line per figure: page path and line of the `{{< mediafigure ... >}}` opening tag, the vendored image file, the module id, and the manifest stem. The pinned CNXML of module mXXXXX is the path your packet header names (`sources/openstax/<checkout>/modules/mXXXXX/index.cnxml`); the source alt is the `<image ... alt="...">` or `<media alt="...">` there, and it is also in the media manifest your packet header names (`data/media/<book>.json`) under `figures[<stem>].alt`. Page footers (`Changes:` in the trailing `<small>` paragraph) disclose deliberate departures from the source alt; `docs/openstax-errata.md` records source defects already found (grep the module id).

## For EACH figure, in THIS order

1. **Open the image file with the Read tool** (it renders images). Before reading a word of the page, write a two-to-four-line description of what is drawn into your report as a scratch note: panels and their letters; the subject (a photograph of what, a diagram of what); every printed label, number, and legend entry you can read; colours of the named parts; arrows and their direction; counts of things the alt is likely to count (cells, panels, steps, stages, nodes); scale bars and their printed values; axis titles and the trend of any graph. Zoom mentally: if a label is too small to read, say so rather than guessing.
2. **Only then** open the page at the packet's line (read just that figure's lines, e.g. `sed -n '<line>,<line+3>p'`; never read a page file in blocks ahead of the images, which would put later alts in front of you before their images) and read the `alt`, the `longdesc` if any, and the caption (the text between the opening and closing shortcode tags). Then read the source alt in the manifest or CNXML.
3. **Compare, claim by claim.** Flag when:
   - the alt names a part, label, colour, arrow, number, count, scale value, or direction the image contradicts or does not show;
   - the alt says parts are "labeled", "numbered", or "lettered" and the image carries no such marks (or different ones);
   - the alt mislabels a part (calls the nucleus a vacuole, calls panel (a) what is in (b));
   - the alt describes a sequence, scan path, or flow backwards or in the wrong order;
   - the alt describes a different drawing altogether (a source alt inherited against a swapped or cropped image);
   - the alt describes the picture but not the relationship the figure exists to show, when the caption does not carry it either;
   - a drawn diagram (flow chart, labeled anatomy, phylogeny, graph with data, multi-step mechanism) has meaning that is in neither the caption nor a `longdesc`;
   - the `longdesc` contradicts the image in any of the ways above;
   - the alt is over 600 characters or contains an HTML tag (`<sub>`, `<i>`, `<br>`) — a bare `>` or `<` in prose is fine but note it.
   Do NOT flag: wording taste; an alt that is shorter than you would write if what it says is true; a diagram's colour scheme left undescribed when the colours carry no meaning; a photo's background details; a label the alt omits when the caption or `longdesc` carries it.
4. For every flagged claim, say whether it was **inherited from the source alt** (the same wrong claim is in the manifest/CNXML alt) or **page-introduced** (the page's alt says it and the source alt does not). Check the page footer `Changes:` and grep `docs/openstax-errata.md` for the module id before flagging: a DISCLOSED departure that matches the image is not a defect; an erratum already on file for that claim is not a new flag (say "already erratum NNN").

## Report format, `$OUT` (named in your task)

For each figure, the scratch description (indented, prefixed `desc:`) and then ONE verdict line:

- `page:line — clean`
- `page:line — <class> — alt says: <quote the claim> — image shows: <what you saw> — proposed: <the corrected alt sentence or longdesc sentence> — source-inherited: yes|no|partly`

Classes: `mislabel`, `count`, `colour`, `direction`, `missing-marks` (claimed labels/numbers absent), `different-drawing`, `sequence`, `unsupported` (claim the image cannot confirm), `missing-longdesc`, `length`, `html`, `other`.

Keep a figure's verdict on one line so the parent can grep `— clean` and `— [a-z-]* — `. Be concrete: "image shows: the third panel is a single gold ring on black, no green/red/blue" beats "does not match".

## Final message (at most ten lines)

Chapter number; figures read; verdict counts by class; the count of flags marked source-inherited; anything you could not settle (a label too small to read, an image you could not open) as its own line. No prose beyond that.
