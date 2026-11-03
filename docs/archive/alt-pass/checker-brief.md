# Figure-alt pass — checker brief (one chapter per agent)

Repository root: `/Users/derek/GolandProjects/athenaeum-populi`. **Edit nothing. Run no git command of any kind.** You write ONE report file, named in your task, incrementally (append after every few figures so a crash loses little). Write it with Bash (`cat >> $OUT <<'EOF' ... EOF`), NOT the Write tool — the Write tool refuses report files for subagents.

Authors and checkers who read the alt first and then looked for it in the image missed about 1 alt defect in 10. Your job is to read the IMAGE first, cold, and only then compare it with the words. The order is not optional — and it is not enough: image-first checkers who did not trace every edge still missed arrows joined to the wrong box or pointing the wrong way, a missing panel row, a misplaced subunit, a bracket endpoint off on a scale, a structure the art does not draw, and printed labels left out *(September 22, 2026)*. So step 1 is an inventory, not a sketch.

Read first: `docs/subjects/life-sciences.md` §"Media: vendored figures" (the image-accessibility policy: what an alt must say, the 600-character cap, `longdesc` for diagrams whose meaning is not in the caption, no HTML in alt) and §"Completion audit". Do not read any other page or doc unless a figure sends you to its CNXML.

Your packet (named in your task) has one line per figure: page path and line of the `{{< mediafigure ... >}}` opening tag, the vendored image file, the module id, and the manifest stem. The pinned CNXML of module mXXXXX is the path your packet header names (`sources/openstax/<checkout>/modules/mXXXXX/index.cnxml`); the source alt is the `<image ... alt="...">` or `<media alt="...">` there, and it is also in the media manifest your packet header names (`data/media/<book>.json`) under `figures[<stem>].alt`. Page footers (`Changes:` in the trailing `<small>` paragraph) disclose deliberate departures from the source alt; `docs/openstax-errata.md` records source defects already found (grep the module id).

## For EACH figure, in THIS order

1. **Open the image file with the Read tool** (it renders images). Before reading a word of the page, write an inventory of what is drawn into your report as scratch `desc:` lines: panels and rows with their letters; the subject (a photograph of what, a diagram of what); **every** printed label, number, and legend entry; colours of the named parts; counts of boxes, steps, stages, nodes, cells, and panels; scale bars and bracket endpoints with their printed values; axis titles and the trend of any graph; and **every arrow or connector as `source → target`**, with arrowheads at both ends noted and dashed versus solid where it matters. Do not guess at small print or an arrow's far end: crop and upscale it with PIL into your report's directory (never the repository; name every crop and helper script with your packet's prefix, `<packet>-*`, since sibling agents share that directory and overwrite generic names) and Read the crop — `python3 -c "from PIL import Image; im=Image.open('<webp>'); im.crop((x0,y0,x1,y1)).resize(((x1-x0)*3,(y1-y0)*3)).save('<png>')"` — zooming BOTH ends of every arrow. A photograph needs only the short description; a diagram with a `longdesc` needs the whole inventory.
2. **Only then** open the page at the packet's line (read just that figure's lines, e.g. `sed -n '<line>,<line+3>p'`; never read a page file in blocks ahead of the images, which would put later alts in front of you before their images) and read the `alt`, the `longdesc` if any, and the caption (the text between the opening and closing shortcode tags). Then read the source alt in the manifest or CNXML.
3. **Compare, claim by claim, against the inventory.** For a `longdesc`: (a) every connection it asserts matches a `source → target` line, and every arrow in the art that carries the figure's meaning is described ("each X connects to every Y" means each edge checked); (b) every count matches; (c) every printed label is found in the alt, `longdesc`, caption, or an adjacent Markdown table — list any that are not, and flag those a learner needs; (d) positions (say whose left and right), meaningful colours, scale values and bracket endpoints, and panel order match. Flag when:
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

Classes: `connection` (an arrow or line joined to the wrong part), `direction`, `position`, `count`, `mislabel`, `missing-label` (a printed label a learner needs is in none of alt, longdesc, caption, table), `not-drawn` (a structure the art does not show), `scale`, `colour`, `missing-marks` (claimed labels/numbers absent), `different-drawing`, `sequence`, `unsupported` (claim the image cannot confirm), `missing-longdesc`, `length`, `html`, `other`. `connection`, `position`, and `count` are the commonest, then `mislabel` and `missing-label`.

Keep a figure's verdict on one line so the parent can grep `— clean` and `— [a-z-]* — `. Be concrete: "image shows: the third panel is a single gold ring on black, no green/red/blue" beats "does not match".

## Final message (at most ten lines)

Chapter number; figures read; verdict counts by class; the count of flags marked source-inherited; anything you could not settle (a label too small to read, an image you could not open) as its own line. No prose beyond that.
