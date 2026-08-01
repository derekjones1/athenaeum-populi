#!/usr/bin/env python3
"""Render an OpenStax CNXML module as readable text with approximate LaTeX.

Authoring aid for the OpenStax source workflow: the pinned CNXML is the
semantic/transcription authority, but raw CNXML interleaves presentation
MathML that is hard to read while transcribing. This prints the module's
content with math converted to compact LaTeX-ish strings and the document
structure (sections, examples, Try Its, tables, figures) labelled.

Usage:
    python3 tools/cnxml-preview.py sources/openstax/<bundle>/modules/<id>/index.cnxml

The output is a *preview*, not an authority: always reconcile the authored
page against the actual CNXML and the PDF. Math conversion is approximate by
design (it exists so a human can read the source, not so a machine can copy
it). Uses only the Python standard library.
"""
import re
import sys
import xml.etree.ElementTree as ET

M = '{http://www.w3.org/1998/Math/MathML}'


def mml(e):
    """Presentation MathML -> approximate LaTeX."""
    t = e.tag.replace(M, '')
    kids = list(e)
    txt = (e.text or '').strip()

    def kid(i):
        return mml(kids[i]) if i < len(kids) else ''

    def all_kids():
        return ''.join(mml(k) for k in kids)

    if t in ('math', 'mrow', 'mstyle', 'semantics', 'mpadded'):
        return all_kids()
    if t in ('mi', 'mn'):
        return txt
    if t == 'mo':
        rep = {'−': '-', '⁢': '', '⁡': '', '×': r'\times',
               '≤': r'\le', '≥': r'\ge', '≠': r'\ne',
               '±': r'\pm', '→': r'\to', '∞': r'\infty',
               '≅': r'\approx', '≈': r'\approx', '÷': r'\div',
               '∈': r'\in', '∣': r'\mid', '′': "'"}
        return rep.get(txt, txt)
    if t == 'mtext':
        return r'\text{' + txt + '}'
    if t == 'mspace':
        return ' '
    if t == 'mfrac':
        return r'\tfrac{' + kid(0) + '}{' + kid(1) + '}'
    if t == 'msqrt':
        return r'\sqrt{' + all_kids() + '}'
    if t == 'mroot':
        return r'\sqrt[' + kid(1) + ']{' + kid(0) + '}'
    if t == 'msup':
        return kid(0) + '^{' + kid(1) + '}'
    if t == 'msub':
        return kid(0) + '_{' + kid(1) + '}'
    if t == 'msubsup':
        return kid(0) + '_{' + kid(1) + '}^{' + kid(2) + '}'
    if t == 'mover':
        return r'\overline{' + kid(0) + '}'
    if t == 'mfenced':
        op, cl = e.get('open', '('), e.get('close', ')')
        sep = e.get('separators', ',') or ','
        return op + sep.join(mml(k) for k in kids) + cl
    if t == 'mtable':
        return (r' \begin{array}{l} '
                + r' \\ '.join(mml(r) for r in kids)
                + r' \end{array} ')
    if t == 'mtr':
        return ' & '.join(mml(c) for c in kids)
    return all_kids()


def render(e):
    """CNXML element -> readable labelled text."""
    t = re.sub(r'\{[^}]*\}', '', e.tag)

    if e.tag.startswith(M):
        return ' $' + mml(e).strip() + '$ '

    def inner():
        return (e.text or '') + ''.join(render(k) + (k.tail or '') for k in e)

    if t == 'title':
        return '\n\n### ' + inner().strip() + '\n'
    if t == 'figure':
        alt = next((m.get('alt', '') for m in e.iter()
                    if re.sub(r'\{[^}]*\}', '', m.tag) == 'media'), '')
        cap = next((((c.text or '') + ''.join(render(k) + (k.tail or '') for k in c)).strip()
                    for c in e if re.sub(r'\{[^}]*\}', '', c.tag) == 'caption'), '')
        return f'\n[FIGURE {e.get("id", "")} | alt: {alt} | caption: {cap}]\n'
    if t == 'table':
        return (f'\n[TABLE {e.get("id", "")} | summary: {e.get("summary", "")}]\n'
                + inner() + '\n[/TABLE]\n')
    if t == 'entry':
        return ' | ' + inner().strip()
    if t == 'row':
        return '\n' + inner()
    if t == 'note':
        return (f'\n\n>>> NOTE[{e.get("class", "")}] id={e.get("id", "")}\n'
                + inner().strip() + '\n<<< /NOTE\n')
    if t == 'example':
        return (f'\n\n=== EXAMPLE id={e.get("id", "")} ===\n'
                + inner().strip() + '\n=== /EXAMPLE ===\n')
    if t == 'exercise':
        return f'\n[EXERCISE id={e.get("id", "")}]\n' + inner().strip() + '\n'
    if t == 'problem':
        return '\nPROBLEM: ' + inner().strip() + '\n'
    if t == 'solution':
        return '\nSOLUTION: ' + inner().strip() + '\n'
    if t == 'section':
        return '\n' + inner()
    if t in ('term', 'emphasis'):
        return '**' + inner().strip() + '**'
    if t == 'list':
        return '\n' + inner()
    if t == 'item':
        return '\n  - ' + inner().strip()
    if t == 'footnote':
        return ''
    if t == 'newline':
        return '\n'
    if t == 'para':
        return '\n' + inner().strip() + '\n'
    return inner()


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__.strip())
    root = ET.parse(sys.argv[1]).getroot()
    body = next((c for c in root if c.tag.endswith('content')), None)
    if body is None:
        sys.exit('no <content> element found — is this a CNXML module?')
    text = render(body)
    text = re.sub(r'\n{3,}', '\n\n', text)
    text = re.sub(r'[ \t]{2,}', ' ', text)
    print(text)


if __name__ == '__main__':
    main()
