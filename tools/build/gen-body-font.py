# /// script
# requires-python = ">=3.10"
# dependencies = ["fonttools==4.55.3", "brotli==1.1.0"]
# ///
"""One-off: build the site's text fonts from Inter 4.1 — the body face
"AP Body" (static/fonts/ap-body-v1.woff2 and ap-body-italic-v1.woff2) and the
superscript/subscript face "AP SupSub" (static/fonts/ap-supsub-v2.woff2).

WHY A BODY FONT. In the system sans font the site used before, capital I and
lowercase l are one shape: CaI₂ reads as "Cal₂" and AlF₃ as "AIF₃", and a
chemistry learner cannot tell the element from the letter. Inter ships an
alternate lowercase l with a tail (feature `cv05`) and an alternate capital I
with serifs (`cv08`). Those alternates are made the defaults here, so the two
letters differ wherever the face is used — in prose, in input fields, and in
any browser, with no `font-feature-settings` for a stylesheet to forget.

The source is Inter 4.1 by The Inter Project Authors (SIL Open Font License
1.1), pinned by release and SHA-256; static/fonts/OFL.txt is its licence,
copied verbatim from the release. What is changed:

  - DEFAULT LETTERS. For every code point whose glyph `cv05` or `cv08`
    substitutes — l and I, and every accented or related letter those two
    features cover (ĺ ļ ľ ŀ ł, Ì Í Î Ï Ĩ Ī Ĭ Į İ, …) — the character map points
    at the alternate glyph. (This is what `pyftfeatfreeze` does.) The build
    stops if either feature is missing or leaves U+006C or U+0049 alone.
  - LAYOUT FEATURES. Only kern, mark, mkmk, ccmp, locl, tnum, pnum and case
    are kept. Contextual alternates (`calt`) and the rest are dropped: this
    is a maths and chemistry site that prints literal typing examples —
    "2H2 + O2 -> 2H2O", "SO4^2-", "(NH4)2SO4" — and Inter's `calt` draws
    `->`, `<-` and `=>` as arrows and raises a parenthesis beside a capital,
    so the page would not show the characters a learner is to type.
  - AXES. Weight is limited to 400–700, the range the site sets. Optical size
    (14–32) is kept, so headings get Inter's display spacing; see OPSZ below.
  - CHARACTERS. A subset: the Unicode blocks in BLOCKS, intersected with what
    Inter has, plus every character Inter has that appears anywhere in the
    sources in CORPUS. The characters the corpus uses and Inter lacks are
    printed; they fall through to the next font in the stack.
  - NAMES. The family is renamed "AP Body" so a modified version does not
    present itself as Inter; the copyright, designer and licence records are
    kept. The fonts are unhinted, as the source is.

The superscript/subscript face keeps the job it had when it was cut from
Noto Sans (that history is in docs/history/chemistry.md): a body font draws
`⁺ ⁻ ₂ ₄` small, so a face limited by `unicode-range` to ¹²³ and the
Superscripts and Subscripts block leads the stack and draws them at the size
and height the theme gives a real `<sup>`/`<sub>`. Every assigned code point
of the block is kept, and the build fails when the source lacks a letter for
one. The changes are made in the font file, so the result is the same in
every browser (`size-adjust` and `ascent-override` are not universal):

  - GLYPHS. Each character is drawn by the body face's own glyph for its
    letter, digit or sign — "2" for ² and ₂, "−" (U+2212) for ⁻ and ₋, "ə"
    for ₔ — at 75% (SUP_SCALE), which is exactly what a real `<sup>2</sup>`
    is: the body "2" at the theme's 75% size. Each is a composite that
    scales the body glyph, so it has the body's stroke weight and spacing
    at every weight from 400 to 700. Inter's own superior figures were tried
    first: enlarged 1.38 times to the height of a real `<sup>`, they were
    visibly heavier and wider than the text around them (their strokes are
    drawn thick to survive at their own small size).
  - POSITION. The theme raises a `<sup>` by half of its own size and lowers
    a `<sub>` by a quarter of it, so a superscript's feet stand 0.375 em
    above the baseline and a subscript's 0.1875 em below it. The composites
    are placed there.
  - LINE METRICS. Ascent and descent are set to 0.90 and 0.21 em — no more
    than the body face's (0.97 and 0.24) or any system font's — so a line
    with a charge in it is never taller than a line without one.

    uv run tools/build/gen-body-font.py            # downloads the release (34 MB)
    uv run tools/build/gen-body-font.py Inter-4.1.zip

Rename an output (v2, …) when its glyph set or its source changes: the
stylesheet names the files, the page head preloads the upright one, and
`/fonts/*` is cached for a day.
"""
import hashlib
import io
import shutil
import sys
import tempfile
import unicodedata
import urllib.request
import zipfile
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.ttLib.tables.TupleVariation import TupleVariation
from fontTools.ttLib.tables._g_l_y_f import Glyph, GlyphComponent
from fontTools.varLib import instancer

RELEASE = "https://github.com/rsms/inter/releases/download/v4.1/Inter-4.1.zip"
SHA256 = "9883fdd4a49d4fb66bd8177ba6625ef9a64aa45899767dde3d36aa425756b11e"
UPRIGHT = "InterVariable.ttf"
ITALIC = "InterVariable-Italic.ttf"
LICENSE = "LICENSE.txt"

ROOT = Path(__file__).resolve().parents[2]
OUT_DIR = ROOT / "static" / "fonts"
OUT_BODY = OUT_DIR / "ap-body-v1.woff2"
OUT_BODY_ITALIC = OUT_DIR / "ap-body-italic-v1.woff2"
OUT_SUPSUB = OUT_DIR / "ap-supsub-v2.woff2"
OUT_LICENSE = OUT_DIR / "OFL.txt"

# ---- the body face ---------------------------------------------------------

FAMILY = "AP Body"
POSTSCRIPT_FAMILY = "APBody"
DEFAULT_LETTERS = ("cv05", "cv08")  # tailed l, seriffed I
REQUIRED_SUBSTITUTIONS = {"cv05": 0x006C, "cv08": 0x0049}
LAYOUT_FEATURES = ["kern", "mark", "mkmk", "ccmp", "locl", "tnum", "pnum", "case"]
WEIGHT = (400, 700)
# Optical size: kept over Inter's whole range. Pinning it to the 14-unit text
# default saves about a third of each file; the two together stay well under
# the 300 KB that would make the saving worth losing display spacing in
# headings (sizes in docs/history/chemistry.md).
OPSZ = (14, 32)
BLOCKS = [
    (0x0020, 0x007E),  # Basic Latin
    (0x00A0, 0x00FF),  # Latin-1 Supplement
    (0x0100, 0x017F),  # Latin Extended-A
    (0x0370, 0x03FF),  # Greek and Coptic
    (0x2000, 0x206F),  # General Punctuation
    (0x2070, 0x209F),  # Superscripts and Subscripts
    (0x20A0, 0x20CF),  # Currency Symbols
    (0x2100, 0x214F),  # Letterlike Symbols
    (0x2190, 0x21FF),  # Arrows
    (0x2200, 0x22FF),  # Mathematical Operators
    (0x25A0, 0x25FF),  # Geometric Shapes
]
# Everything that puts text on a page: the content, the site's and the
# theme's templates and strings, the media manifests (captions and alt
# text), and the interactive components' messages.
CORPUS = [
    "content",
    "layouts",
    "i18n",
    "data/media",
    "assets/js",
    "hugo.toml",
    "themes/hextra/layouts",
    "themes/hextra/i18n/en.yaml",
]
TEXT_SUFFIXES = {".md", ".html", ".js", ".mjs", ".json", ".toml", ".yaml", ".yml", ".txt"}

# ---- the superscript/subscript face ----------------------------------------

# ¹ ² ³ live in Latin-1; the rest is the Superscripts and Subscripts block,
# every assigned code point of it (U+2072, U+2073 and U+208F are unassigned),
# each with the character whose glyph draws it.
SUPERSCRIPTS = {0x00B9: "1", 0x00B2: "2", 0x00B3: "3", 0x2070: "0", 0x2071: "i",
                **{0x2074 + i: str(4 + i) for i in range(6)},
                0x207A: "+", 0x207B: "\u2212", 0x207C: "=", 0x207D: "(", 0x207E: ")", 0x207F: "n"}
SUBSCRIPTS = {**{0x2080 + i: str(i) for i in range(10)},
              0x208A: "+", 0x208B: "\u2212", 0x208C: "=", 0x208D: "(", 0x208E: ")",
              **dict(zip(range(0x2090, 0x209C + 1), "aeox\u0259hklmnpst"))}
SUP_SCALE = 0.75   # the theme's <sup>/<sub> font size
SUP_RAISE = 0.5    # a <sup> is raised by half of its own font size
SUB_LOWER = 0.25   # a <sub> is lowered by a quarter of it
LINE_ASCENT, LINE_DESCENT = 0.90, 0.21  # of the face's em


def read_release(argv: list[str]) -> zipfile.ZipFile:
    if len(argv) > 1:
        blob = Path(argv[1]).read_bytes()
    else:
        print(f"downloading {RELEASE}", file=sys.stderr)
        with urllib.request.urlopen(RELEASE) as response:
            blob = response.read()
    digest = hashlib.sha256(blob).hexdigest()
    if digest != SHA256:
        sys.exit(f"release archive SHA-256 is {digest}, expected {SHA256}")
    return zipfile.ZipFile(io.BytesIO(blob))


def corpus_codepoints() -> set[int]:
    found: set[int] = set()
    for entry in CORPUS:
        path = ROOT / entry
        files = [path] if path.is_file() else sorted(path.rglob("*")) if path.is_dir() else []
        for file in files:
            if file.is_file() and file.suffix in TEXT_SUFFIXES:
                found.update(map(ord, file.read_text(encoding="utf-8", errors="replace")))
    # Controls, format characters (joiners, variation selectors, the BOM) and
    # the replacement character are not drawn by a text face.
    return {cp for cp in found if unicodedata.category(chr(cp)) not in ("Cc", "Cf", "Cs", "Co", "Cn") and cp != 0xFFFD}


def single_substitutions(font: TTFont, tag: str) -> dict[str, str]:
    gsub = font["GSUB"].table
    indices = {i for record in gsub.FeatureList.FeatureRecord if record.FeatureTag == tag
               for i in record.Feature.LookupListIndex}
    if not indices:
        sys.exit(f"the source font has no `{tag}` feature")
    mapping: dict[str, str] = {}
    for index in sorted(indices):
        lookup = gsub.LookupList.Lookup[index]
        for table in lookup.SubTable:
            kind = lookup.LookupType
            if kind == 7:
                kind, table = table.ExtensionLookupType, table.ExtSubTable
            if kind != 1:
                sys.exit(f"`{tag}` uses a type-{kind} lookup; only single substitutions can become defaults")
            mapping.update(table.mapping)
    return mapping


def make_alternates_default(font: TTFont) -> list[int]:
    """Point the cmap at the cv05/cv08 glyphs; return the code points moved."""
    moved: set[int] = set()
    for tag in DEFAULT_LETTERS:
        mapping = single_substitutions(font, tag)
        changed = set()
        for table in font["cmap"].tables:
            if not table.isUnicode():
                continue
            for cp, glyph in list(table.cmap.items()):
                if glyph in mapping:
                    table.cmap[cp] = mapping[glyph]
                    changed.add(cp)
        if REQUIRED_SUBSTITUTIONS[tag] not in changed:
            sys.exit(f"`{tag}` substitutes nothing for U+{REQUIRED_SUBSTITUTIONS[tag]:04X}")
        moved |= changed
    return sorted(moved)


def subset_font(font: TTFont, unicodes: list[int], features: list[str], name_ids: list[int]) -> None:
    options = subset.Options()
    options.layout_features = features
    options.name_IDs = name_ids
    options.hinting = False
    options.notdef_outline = False
    subsetter = subset.Subsetter(options)
    subsetter.populate(unicodes=unicodes)
    subsetter.subset(font)


def rename(font: TTFont, italic: bool) -> None:
    style = "Italic" if italic else "Regular"
    names = font["name"]
    keep_as_is = {0, 9, 13, 14}  # copyright, designer, licence, licence URL
    for record in names.names:
        if record.nameID in keep_as_is:
            continue
        text = record.toUnicode()
        text = text.replace("InterVariable", POSTSCRIPT_FAMILY).replace("Inter Variable", FAMILY)
        record.string = text
    names.setName(FAMILY, 1, 3, 1, 0x409)
    names.setName(style, 2, 3, 1, 0x409)
    names.setName(f"{FAMILY} {style}" if italic else FAMILY, 4, 3, 1, 0x409)
    names.setName(f"{POSTSCRIPT_FAMILY}-{style}", 6, 3, 1, 0x409)
    names.setName(f"{POSTSCRIPT_FAMILY}{'Italic' if italic else ''}", 25, 3, 1, 0x409)
    names.setName("Modified from Inter 4.1 for Athenaeum Populi: a subset, with the "
                  "tailed l (cv05) and the seriffed I (cv08) as the default letters.", 10, 3, 1, 0x409)
    for record in names.names:
        if record.nameID not in keep_as_is | {10} and "Inter" in record.toUnicode():
            sys.exit(f"name record {record.nameID} still says Inter: {record.toUnicode()!r}")


def build_body(archive: zipfile.ZipFile, member: str, italic: bool, opsz, out: Path,
               corpus: set[int], report: bool) -> None:
    font = TTFont(io.BytesIO(archive.read(member)), recalcTimestamp=False)
    cmap = font.getBestCmap()
    blocks = {cp for low, high in BLOCKS for cp in range(low, high + 1)}
    wanted = sorted(cp for cp in blocks | corpus if cp in cmap)
    if report:
        lacking = sorted(cp for cp in corpus if cp not in cmap)
        print(f"{len(lacking)} corpus characters Inter lacks (they fall through to the system font):")
        for cp in lacking:
            print(f"  U+{cp:04X} {chr(cp)}  {unicodedata.name(chr(cp), '?')}")
    moved = make_alternates_default(font)
    subset_font(font, wanted, LAYOUT_FEATURES, [0, 1, 2, 3, 4, 5, 6, 9, 10, 13, 14])
    font = instancer.instantiateVariableFont(font, {"wght": WEIGHT, "opsz": opsz})
    rename(font, italic)
    kept = font.getBestCmap()
    lost = [f"U+{cp:04X}" for cp in wanted if cp not in kept]
    if lost:
        sys.exit(f"the subset lost: {', '.join(lost)}")
    if report:
        print(f"{len([cp for cp in moved if cp in kept])} characters draw the cv05/cv08 alternates by default")
    font.flavor = "woff2"
    font.save(out)


def build_supsub(archive: zipfile.ZipFile, out: Path) -> None:
    font = TTFont(io.BytesIO(archive.read(UPRIGHT)), recalcTimestamp=False)
    sources = sorted({ord(ch) for ch in [*SUPERSCRIPTS.values(), *SUBSCRIPTS.values()]})
    missing = [f"U+{cp:04X}" for cp in sources if cp not in font.getBestCmap()]
    if missing:
        sys.exit(f"the source font has no glyph for: {', '.join(missing)}")
    # The letters, digits and signs the composites draw, and nothing else: no
    # layout features (each character is one glyph, and a kept GSUB/GPOS
    # would pull in glyphs the unicode-range never asks for). Optical size is
    # pinned to the text default, the size these glyphs are drawn at.
    subset_font(font, sources, [], [0, 1, 2, 13, 14])
    font = instancer.instantiateVariableFont(font, {"wght": WEIGHT, "opsz": None})
    upm = font["head"].unitsPerEm
    cmap = font.getBestCmap()
    glyf, hmtx, gvar = font["glyf"], font["hmtx"], font["gvar"]
    drawn: dict[int, str] = {}
    for table, rise, suffix in ((SUPERSCRIPTS, SUP_SCALE * SUP_RAISE, "sup"),
                                (SUBSCRIPTS, -SUP_SCALE * SUB_LOWER, "sub")):
        for cp, character in table.items():
            source = cmap[ord(character)]
            name = f"{source}.{suffix}"
            component = GlyphComponent()
            component.glyphName, component.x, component.y = source, 0, round(rise * upm)
            component.flags = 0
            component.transform = [[SUP_SCALE, 0], [0, SUP_SCALE]]
            glyph = Glyph()
            glyph.numberOfContours, glyph.components = -1, [component]
            glyf[name] = glyph
            advance, lsb = hmtx[source]
            hmtx[name] = (round(advance * SUP_SCALE), round(lsb * SUP_SCALE))
            # The scaled component varies with weight through its own glyph;
            # the advance varies through the composite's four phantom points,
            # scaled from the source glyph's. (HVAR, which would otherwise
            # carry the advances, is dropped below.)
            gvar.variations[name] = [
                TupleVariation(variation.axes, [(0, 0)] + [
                    (round(point[0] * SUP_SCALE), round(point[1] * SUP_SCALE)) if point else (0, 0)
                    for point in variation.coordinates[-4:]
                ])
                for variation in gvar.variations.get(source, [])
            ]
            drawn[cp] = name
    font.setGlyphOrder(list(glyf.glyphOrder))
    for table in font["cmap"].tables:
        if table.isUnicode():
            table.cmap.clear()
            table.cmap.update(drawn)
    ascent, descent = round(LINE_ASCENT * upm), -round(LINE_DESCENT * upm)
    hhea, os2 = font["hhea"], font["OS/2"]
    hhea.ascent, hhea.descent, hhea.lineGap = ascent, descent, 0
    os2.sTypoAscender, os2.sTypoDescender, os2.sTypoLineGap = ascent, descent, 0
    os2.usWinAscent, os2.usWinDescent = ascent, -descent
    # MVAR varies the line metrics with weight; they are constants now.
    for table in ("HVAR", "MVAR", "GSUB", "GPOS", "GDEF"):
        if table in font:
            del font[table]
    font["name"].setName("AP SupSub", 1, 3, 1, 0x409)
    font.flavor = "woff2"
    font.save(out)
    kept = TTFont(out).getBestCmap()
    lost = [f"U+{cp:04X}" for cp in sorted({**SUPERSCRIPTS, **SUBSCRIPTS}) if cp not in kept]
    if lost:
        sys.exit(f"the subset lost: {', '.join(lost)}")


def main() -> None:
    archive = read_release(sys.argv)
    corpus = corpus_codepoints()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as tmp:
        staged = {out: Path(tmp) / out.name for out in (OUT_BODY, OUT_BODY_ITALIC, OUT_SUPSUB)}
        build_body(archive, UPRIGHT, False, OPSZ, staged[OUT_BODY], corpus, report=True)
        build_body(archive, ITALIC, True, OPSZ, staged[OUT_BODY_ITALIC], corpus, report=False)
        build_supsub(archive, staged[OUT_SUPSUB])
        for out, path in staged.items():
            shutil.copyfile(path, out)
    OUT_LICENSE.write_bytes(archive.read(LICENSE))
    for out in (OUT_BODY, OUT_BODY_ITALIC, OUT_SUPSUB):
        print(f"{out.relative_to(ROOT)}: {out.stat().st_size} bytes")


if __name__ == "__main__":
    main()
