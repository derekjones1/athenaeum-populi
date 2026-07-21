/**
 * lib-convert.mjs — the MDX→Hugo transformation, shared by convert-mdx.mjs
 * (single file) and convert-book.mjs (whole book). Pure string in / string out,
 * plus an instance count of every component it converted (for the verifier).
 *
 * Handles: nextra imports strip, leading-H1 drop, Callout, Cards, static
 * figures (Graph/NumberLine/Figure → inline SVG), MultipleChoice, GraphPlot,
 * FillIn, <small> collapse. Object/array props are parsed and evaluated.
 * See MIGRATION.md "Converter spec".
 */
import { toSvgString, buildGraph, buildNumberLine, buildFigure } from '../assets/js/lib/graph-core.mjs';

const escAttr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Shortcode string params must be single-line (Hugo can't parse a quoted
// param that spans lines) and can't contain a bare double quote. JSX attribute
// values often wrap across lines with indentation — collapse that to spaces.
const sp = (s) => String(s).replace(/\s*\n\s*/g, ' ').trim().replace(/"/g, '&quot;');
const escShortcodeAttr = sp;

export function parseJsxAttrs(s) {
  const out = {};
  let i = 0;
  const n = s.length;
  const isNameChar = (c) => /[A-Za-z0-9_]/.test(c);
  while (i < n) {
    while (i < n && /\s/.test(s[i])) i++;
    if (i >= n) break;
    let name = '';
    while (i < n && isNameChar(s[i])) name += s[i++];
    if (!name) { i++; continue; }
    while (i < n && /\s/.test(s[i])) i++;
    if (s[i] !== '=') { out[name] = true; continue; }
    i++;
    while (i < n && /\s/.test(s[i])) i++;
    if (s[i] === '"' || s[i] === "'") {
      const q = s[i++];
      let val = '';
      while (i < n && s[i] !== q) val += s[i++];
      i++;
      out[name] = { str: val };
    } else if (s[i] === '{') {
      let depth = 0, expr = '', str = null;
      for (; i < n; i++) {
        const c = s[i];
        expr += c;
        if (str) { if (c === str && s[i - 1] !== '\\') str = null; continue; }
        if (c === '"' || c === "'" || c === '`') str = c;
        else if (c === '{') depth++;
        else if (c === '}') { depth--; if (depth === 0) { i++; break; } }
      }
      out[name] = { expr: expr.slice(1, -1) };
    }
  }
  return out;
}

const evalExpr = (code) => Function('"use strict";return (' + code + ')')();

function resolveProps(attrs) {
  const p = {};
  for (const [k, v] of Object.entries(attrs)) {
    if (v === true) p[k] = true;
    else if ('str' in v) p[k] = v.str;
    else p[k] = evalExpr(v.expr);
  }
  return p;
}

/** Replace every self-closing <Name …/>; handler(props) -> string. Counts hits. */
function replaceSelfClosing(text, name, handler, counter) {
  let out = '', i = 0;
  const tag = '<' + name;
  while (true) {
    const start = text.indexOf(tag, i);
    if (start === -1) { out += text.slice(i); break; }
    const after = text[start + tag.length];
    if (after && /[A-Za-z0-9_]/.test(after)) { out += text.slice(i, start + tag.length); i = start + tag.length; continue; }
    out += text.slice(i, start);
    let j = start + tag.length, str = null, depth = 0;
    for (; j < text.length; j++) {
      const c = text[j];
      if (str) { if (c === str && text[j - 1] !== '\\') str = null; continue; }
      if (c === '"' || c === "'" || c === '`') str = c;
      else if (c === '{') depth++;
      else if (c === '}') depth--;
      else if (c === '/' && text[j + 1] === '>' && depth === 0) break;
    }
    out += handler(parseJsxAttrs(text.slice(start + tag.length, j)));
    if (counter) counter();
    i = j + 2;
  }
  return out;
}

function figureSvg(props, builder) {
  let svg = toSvgString(props, { builder });
  const aria = props.ariaLabel ? ` role="img" aria-label="${escAttr(props.ariaLabel)}"` : ' role="img"';
  // graph-core hardcodes style="color:#111" (currentColor drives the strokes),
  // which is invisible in dark mode. Strip it so the figure inherits the page
  // text color and flips with the theme.
  svg = svg.replace(' style="color:#111"', '').replace('<svg ', `<svg${aria} `);
  return `<div class="ap-figure">\n${svg}\n</div>`;
}

/** Convert MDX body+frontmatter string → Hugo markdown. Returns {text, counts}. */
export function convertMdx(input) {
  const counts = { fillin: 0, callout: 0, graph: 0, numberline: 0, figure: 0, multiplechoice: 0, graphplot: 0, cards: 0 };
  let text = input;

  // frontmatter
  let front = '';
  const fm = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (fm) { front = fm[0]; text = text.slice(fm[0].length); }
  const titleMatch = front.match(/^title:\s*(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim().replace(/^["']|["']$/g, '') : '';

  text = text.replace(/^\s*import\s+.*from\s+['"]nextra\/[^'"]+['"]\s*;?\s*$/gm, '');
  text = text.replace(/^\s*#\s+(.+?)\s*$/m, (m, h) => (h.trim() === title ? '' : m));

  // Mask code (fences + inline) so component/shortcode conversion never touches
  // literal markup inside it — e.g. an attribution that mentions `<Figure />`.
  const codeStore = [];
  const mask = (re) => { text = text.replace(re, (m) => { codeStore.push(m); return `@@CODE${codeStore.length - 1}@@`; }); };
  mask(/```[\s\S]*?```/g);
  mask(/`[^`\n]*`/g);

  // Callout
  text = text.replace(/<Callout\s+type="([^"]+)"\s*>/g, (_m, t) => { counts.callout++; return `{{< callout type="${t}" >}}`; });
  text = text.replace(/<\/Callout>/g, '{{< /callout >}}');

  // Cards / Cards.Card  ->  {{< cards >}} / {{< card … >}}
  text = text.replace(/<Cards>/g, '{{< cards >}}').replace(/<\/Cards>/g, '{{< /cards >}}');
  text = text.replace(/<Cards\.Card\b([\s\S]*?)(?:\/>|>([\s\S]*?)<\/Cards\.Card>)/g, (_m, attrs, inner) => {
    counts.cards++;
    const p = resolveProps(parseJsxAttrs(attrs));
    const parts = [`  {{< card`];
    if (p.href) parts.push(`link="${escShortcodeAttr(p.href)}"`);
    if (p.title) parts.push(`title="${escShortcodeAttr(p.title)}"`);
    const sub = (inner || '').trim();
    if (sub) parts.push(`subtitle="${escShortcodeAttr(sub)}"`);
    return parts.join(' ') + ` >}}`;
  });

  // Static figures -> inline SVG
  text = replaceSelfClosing(text, 'Graph', (a) => figureSvg(resolveProps(a), buildGraph), () => counts.graph++);
  text = replaceSelfClosing(text, 'NumberLine', (a) => figureSvg(resolveProps(a), buildNumberLine), () => counts.numberline++);
  text = replaceSelfClosing(text, 'Figure', (a) => figureSvg(resolveProps(a), buildFigure), () => counts.figure++);

  // MultipleChoice
  text = replaceSelfClosing(text, 'MultipleChoice', (a) => {
    const p = resolveProps(a);
    const params = [`  question="${escShortcodeAttr(p.question)}"`];
    if (p.hint) params.push(`  hint="${escShortcodeAttr(p.hint)}"`);
    if (p.graphOptions) {
      params.push(`  mode="graph"`, `  answerIndex="${p.answerIndex}"`);
      const opts = p.graphOptions.map((spec) => {
        const s = { unit: 13, tickLabels: true, tickStep: 2, maxWidth: 190, ...spec };
        return toSvgString(s, { builder: buildGraph })
          .replace(' style="color:#111"', '')
          .replace('<svg ', `<svg role="img" aria-label="${escAttr(spec.ariaLabel || '')}" `);
      });
      return `{{< multiplechoice\n${params.join('\n')}\n>}}\n${opts.join('\n===OPT===\n')}\n{{< /multiplechoice >}}`;
    }
    // `options={[…]}` is a JS array (its `\\` collapses to one backslash on
    // eval), but `answer="…"` is a literal string attribute (JSX keeps `\\`).
    // Collapse the answer so it matches its evaluated option — otherwise the
    // exact-string grade never fires (a latent source bug; the old lint compared
    // raw source and missed it). Same normalization FillIn does.
    const mcAnswer = String(p.answer ?? '').replace(/\\\\/g, '\\');
    params.push(`  answer="${escShortcodeAttr(mcAnswer)}"`);
    return `{{< multiplechoice\n${params.join('\n')}\n>}}\n${(p.options || []).join('\n')}\n{{< /multiplechoice >}}`;
  }, () => counts.multiplechoice++);

  // GraphPlot
  text = replaceSelfClosing(text, 'GraphPlot', (a) => {
    const p = resolveProps(a);
    const { question, answer, answerDisplay, hint, snap, ariaLabel, ...grid } = p;
    const params = [`  question="${escShortcodeAttr(question)}"`, `  ariaLabel="${escShortcodeAttr(ariaLabel)}"`];
    if (answerDisplay) params.push(`  answerDisplay="${escShortcodeAttr(answerDisplay)}"`);
    if (hint) params.push(`  hint="${escShortcodeAttr(hint)}"`);
    if (snap !== undefined) params.push(`  snap="${snap}"`);
    return `{{< graphplot\n${params.join('\n')}\n>}}\n${JSON.stringify({ answer, grid })}\n{{< /graphplot >}}`;
  }, () => counts.graphplot++);

  // FillIn
  text = replaceSelfClosing(text, 'FillIn', (a) => {
    const p = resolveProps(a);
    const params = [];
    for (const [k, v] of Object.entries(p)) {
      if (v === true) { params.push(`  ${k}="true"`); continue; }
      let val = String(v);
      if (k === 'answer') val = val.replace(/\\\\/g, '\\');
      params.push(`  ${k}="${escShortcodeAttr(val)}"`);
    }
    return `{{< fillin\n${params.join('\n')}\n>}}`;
  }, () => counts.fillin++);

  // Long-division arrays pack rows with \\[-1pt] — fine for numeric division,
  // but the superscripts in POLYNOMIAL division (x^2, a^3, …) then collide with
  // the row above and clip. Give exponent-bearing long-division arrays a little
  // more room; numeric ones (no ^) stay compact. Normalize-while-converting.
  text = text.replace(/\\begin\{array\}[\s\S]*?\\end\{array\}/g, (block) => {
    if (block.includes('\\smash{)}') && block.includes('^')) {
      counts.longDivLoosened = (counts.longDivLoosened || 0) + 1;
      return block.replace(/\\\\\[-1pt\]/g, '\\\\[2pt]');
    }
    return block;
  });

  // collapse multi-line <small>
  text = text.replace(/<small>([\s\S]*?)<\/small>/g, (_m, inner) => `<small>${inner.replace(/\s*\n\s*/g, ' ').trim()}</small>`);

  // restore masked code
  text = text.replace(/@@CODE(\d+)@@/g, (_m, i) => codeStore[+i]);
  text = text.replace(/\n{3,}/g, '\n\n').replace(/^\n+/, '');
  return { front, body: text.trimEnd() + '\n', counts };
}
