# /// script
# requires-python = ">=3.10"
# dependencies = ["fonttools==4.55.3", "brotli==1.1.0"]
# ///
"""One-off: build static/fonts/ap-supsub-v1.woff2, the subset font that draws
Unicode superscripts and subscripts at a readable size.

The system body font draws `⁺ ⁻ ₂ ₄` very small (a lone ⁻ is two or three
pixels on a standard screen). assets/css/custom.css puts a face named
"AP SupSub" first in the body font stack and limits it by `unicode-range` to
these characters only; every other character still falls through to the
system font. Content keeps writing formulas and charges in Unicode
(docs/subjects/life-sciences.md).

The source is Noto Sans (SIL Open Font License 1.1), pinned by release and
SHA-256. The subset keeps the weight axis (400–700), so a bold heading gets a
bold subscript. The whole Superscripts and Subscripts block is kept, not only
the characters in use today, and the script fails when the source lacks a
glyph for any assigned code point — a later chapter's new subscript is
covered before it is written.

Three changes are made to the glyphs themselves, so the result is the same in
every browser (`size-adjust` and `ascent-override` are not universal):

  - SIZE. The em is cut from 1000 to 800 units with the outlines left alone,
    which draws every glyph 1.25 times as large. A superscript digit is then
    as tall as the theme's real `<sup>` digit (75% of the body size) —
    measured in the browser, 8.7 px against 8.7 px at a 16 px body.
  - POSITION. Scaling from the baseline would lift a superscript 2 px above
    where a real `<sup>` sits, so the superscript digits, signs and
    parentheses are moved down 116 units; their feet then stand at the height
    of `ⁿ` and of a real `<sup>`. The subscripts are composites of those
    glyphs and get the same amount back, so they do not move.
  - LINE METRICS. Ascent and descent are set to 0.90 and 0.21 em, no more
    than any system font's, so a line with a charge in it is never taller
    than a line without one, whatever the line-height.

    uv run tools/build/gen-supsub-font.py            # downloads the release (117 MB)
    uv run tools/build/gen-supsub-font.py NotoSans.zip

Rename the output (v2, …) when the glyph set or the source changes: the
stylesheet names the file, and `/fonts/*` is cached for a day.
"""
import hashlib
import io
import shutil
import sys
import tempfile
import urllib.request
import zipfile
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont

RELEASE = "https://github.com/notofonts/latin-greek-cyrillic/releases/download/NotoSans-v2.015/NotoSans-v2.015.zip"
SHA256 = "0c34df072a3fa7efbb7cbf34950e1f971a4447cffe365d3a359e2d4089b958f5"
MEMBER = "NotoSans/unhinted/slim-variable-ttf/NotoSans[wght].ttf"
LICENSE = "OFL.txt"

# ¹ ² ³ live in Latin-1; the rest is the Superscripts and Subscripts block,
# every assigned code point of it (U+2072, U+2073 and U+208F are unassigned).
CODEPOINTS = sorted(
    {0x00B9, 0x00B2, 0x00B3, 0x2070, 0x2071}
    | set(range(0x2074, 0x208E + 1))
    | set(range(0x2090, 0x209C + 1))
)

# The three glyph changes described above.
UNITS_PER_EM = 800            # the source's 1000, cut to enlarge by 1.25
SUPERSCRIPT_DROP = 116        # units; applied to the glyphs of RAISED
RAISED = (
    [0x00B9, 0x00B2, 0x00B3, 0x2070]
    + list(range(0x2074, 0x207E + 1))  # ⁴–⁹ ⁺ ⁻ ⁼ ⁽ ⁾ — not ⁱ or ⁿ, which sit lower already
)
ASCENT, DESCENT = 720, -168   # 0.90 and 0.21 of the 800-unit em


def reshape(font: TTFont) -> None:
    """Enlarge, lower the superscripts, and fix the line metrics (see above)."""
    if font["head"].unitsPerEm != 1000:
        sys.exit(f"the source em is {font['head'].unitsPerEm} units, expected 1000")
    cmap = font.getBestCmap()
    glyf = font["glyf"]
    raised = {cmap[cp] for cp in RAISED}
    for name in raised:
        glyph = glyf[name]
        if glyph.isComposite():
            sys.exit(f"{name} is a composite; the drop assumes a simple outline")
        glyph.coordinates.translate((0, -SUPERSCRIPT_DROP))
    for name in font.getGlyphOrder():
        glyph = glyf[name]
        if not glyph.isComposite():
            continue
        for component in glyph.components:
            if component.glyphName in raised:
                component.y += SUPERSCRIPT_DROP
    font["head"].unitsPerEm = UNITS_PER_EM
    hhea, os2 = font["hhea"], font["OS/2"]
    hhea.ascent, hhea.descent, hhea.lineGap = ASCENT, DESCENT, 0
    os2.sTypoAscender, os2.sTypoDescender, os2.sTypoLineGap = ASCENT, DESCENT, 0
    os2.usWinAscent, os2.usWinDescent = ASCENT, -DESCENT
    # MVAR varies the line metrics with weight; they are constants now.
    for table in ("MVAR", "GSUB", "GPOS", "GDEF"):
        if table in font:
            del font[table]


OUT_DIR = Path(__file__).resolve().parents[2] / "static" / "fonts"
OUT_FONT = OUT_DIR / "ap-supsub-v1.woff2"


def main() -> None:
    if len(sys.argv) > 1:
        blob = Path(sys.argv[1]).read_bytes()
    else:
        print(f"downloading {RELEASE}", file=sys.stderr)
        with urllib.request.urlopen(RELEASE) as response:
            blob = response.read()
    digest = hashlib.sha256(blob).hexdigest()
    if digest != SHA256:
        sys.exit(f"release archive SHA-256 is {digest}, expected {SHA256}")

    archive = zipfile.ZipFile(io.BytesIO(blob))
    with tempfile.TemporaryDirectory() as tmp:
        source = Path(tmp) / "source.ttf"
        source.write_bytes(archive.read(MEMBER))

        cmap = TTFont(source).getBestCmap()
        missing = [f"U+{cp:04X}" for cp in CODEPOINTS if cp not in cmap]
        if missing:
            sys.exit(f"the source font has no glyph for: {', '.join(missing)}")

        options = subset.Options()
        options.flavor = "woff2"
        # No layout features: these are single precomposed glyphs, and a kept
        # GSUB/GPOS would pull in glyphs the unicode-range never asks for.
        options.layout_features = []
        options.name_IDs = [1, 2, 13, 14]  # family, style, licence, licence URL
        options.notdef_outline = False
        font = subset.load_font(str(source), options)
        subsetter = subset.Subsetter(options)
        subsetter.populate(unicodes=CODEPOINTS)
        subsetter.subset(font)
        reshape(font)

        OUT_DIR.mkdir(parents=True, exist_ok=True)
        staged = Path(tmp) / OUT_FONT.name
        subset.save_font(font, str(staged), options)
        kept = TTFont(staged).getBestCmap()
        lost = [f"U+{cp:04X}" for cp in CODEPOINTS if cp not in kept]
        if lost:
            sys.exit(f"the subset lost: {', '.join(lost)}")
        shutil.copyfile(staged, OUT_FONT)

    (OUT_DIR / LICENSE).write_bytes(archive.read(LICENSE))
    print(f"{OUT_FONT.relative_to(OUT_DIR.parents[1])}: {OUT_FONT.stat().st_size} bytes, "
          f"{len(CODEPOINTS)} code points")


if __name__ == "__main__":
    main()
