/**
 * lib-convert.mjs — the MDX→Hugo transformation, shared by convert-mdx.mjs
 * (single file) and convert-book.mjs (whole book). Pure string in / string out,
 * plus an instance count of every component it converted (for the verifier).
 *
 * Handles: nextra imports strip, leading-H1 drop, Callout, Cards, static
 * figures (Graph/NumberLine/Figure → inline SVG), MultipleChoice, GraphPlot,
 * FillIn, <small> collapse. Object/array props are parsed as literals without
 * executing source JavaScript.
 * Retained for controlled imports of legacy textbook source.
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
      while (i < n) {
        if (s[i] === '\\' && i + 1 < n) {
          val += s[i++] + s[i++];
          continue;
        }
        if (s[i] === q) break;
        val += s[i++];
      }
      i++;
      out[name] = { str: val };
    } else if (s[i] === '{') {
      let depth = 0, expr = '', str = null;
      for (; i < n; i++) {
        const c = s[i];
        expr += c;
        if (str) {
          let slashes = 0;
          for (let j = i - 1; j >= 0 && s[j] === '\\'; j--) slashes++;
          if (c === str && slashes % 2 === 0) str = null;
          continue;
        }
        if (c === '"' || c === "'" || c === '`') str = c;
        else if (c === '{') depth++;
        else if (c === '}') { depth--; if (depth === 0) { i++; break; } }
      }
      out[name] = { expr: expr.slice(1, -1) };
    }
  }
  return out;
}

/**
 * Parse the literal-only subset used by converter props. This intentionally
 * rejects identifiers, calls, member access, interpolation, and assignments;
 * importing a textbook must never execute its JavaScript.
 */
export function parseLiteralExpression(code) {
  let i = 0;
  const fail = (message) => {
    throw new Error(`unsupported converter expression at ${i}: ${message}`);
  };
  const ws = () => {
    while (i < code.length) {
      if (/\s/.test(code[i])) { i++; continue; }
      if (code.slice(i, i + 2) === '//') {
        i = code.indexOf('\n', i + 2);
        if (i === -1) i = code.length;
        continue;
      }
      if (code.slice(i, i + 2) === '/*') {
        const end = code.indexOf('*/', i + 2);
        if (end === -1) fail('unterminated comment');
        i = end + 2;
        continue;
      }
      break;
    }
  };
  const string = () => {
    const quote = code[i++];
    let value = '';
    while (i < code.length) {
      const char = code[i++];
      if (char === quote) return value;
      if (char !== '\\') {
        if (quote === '`' && char === '$' && code[i] === '{') fail('template interpolation is not allowed');
        value += char;
        continue;
      }
      if (i >= code.length) fail('unterminated string escape');
      const escaped = code[i++];
      const simple = { n: '\n', r: '\r', t: '\t', b: '\b', f: '\f', v: '\v', 0: '\0' };
      if (Object.hasOwn(simple, escaped)) value += simple[escaped];
      else if (escaped === '\n') { /* line continuation */ }
      else if (escaped === 'x') {
        const hex = code.slice(i, i + 2);
        if (!/^[\da-f]{2}$/i.test(hex)) fail('invalid hexadecimal escape');
        value += String.fromCharCode(Number.parseInt(hex, 16));
        i += 2;
      } else if (escaped === 'u') {
        const hex = code.slice(i, i + 4);
        if (!/^[\da-f]{4}$/i.test(hex)) fail('invalid Unicode escape');
        value += String.fromCharCode(Number.parseInt(hex, 16));
        i += 4;
      } else value += escaped;
    }
    fail('unterminated string');
  };
  const number = () => {
    const match = /^(?:0[xX][\da-fA-F]+|(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)/.exec(code.slice(i));
    if (!match) fail('expected a number');
    i += match[0].length;
    const value = Number(match[0]);
    if (!Number.isFinite(value)) fail('number must be finite');
    return value;
  };
  const identifier = () => {
    const match = /^[A-Za-z_$][\w$]*/.exec(code.slice(i));
    if (!match) fail('expected an identifier');
    i += match[0].length;
    return match[0];
  };

  let expression;
  const primary = () => {
    ws();
    const char = code[i];
    if (char === '"' || char === "'" || char === '`') return string();
    if (char === '[') {
      i++;
      const out = [];
      ws();
      while (code[i] !== ']') {
        out.push(expression());
        ws();
        if (code[i] === ',') { i++; ws(); if (code[i] === ']') break; }
        else if (code[i] !== ']') fail('expected comma or ]');
      }
      if (code[i++] !== ']') fail('unterminated array');
      return out;
    }
    if (char === '{') {
      i++;
      const out = {};
      ws();
      while (code[i] !== '}') {
        let key;
        if (code[i] === '"' || code[i] === "'" || code[i] === '`') key = string();
        else key = identifier();
        if (['__proto__', 'prototype', 'constructor'].includes(key)) fail('unsafe object key');
        ws();
        if (code[i++] !== ':') fail('expected colon');
        out[key] = expression();
        ws();
        if (code[i] === ',') { i++; ws(); if (code[i] === '}') break; }
        else if (code[i] !== '}') fail('expected comma or }');
      }
      if (code[i++] !== '}') fail('unterminated object');
      return out;
    }
    if (char === '(') {
      i++;
      const value = expression();
      ws();
      if (code[i++] !== ')') fail('expected )');
      return value;
    }
    if (/[\d.]/.test(char || '')) return number();
    const name = identifier();
    if (name === 'true') return true;
    if (name === 'false') return false;
    if (name === 'null') return null;
    fail(`identifier ${JSON.stringify(name)} is not a literal`);
  };
  const unary = () => {
    ws();
    if (code[i] === '+' || code[i] === '-') {
      const operator = code[i++];
      const value = unary();
      if (typeof value !== 'number') fail('unary arithmetic needs a number');
      return operator === '-' ? -value : value;
    }
    return primary();
  };
  const power = () => {
    let left = unary();
    ws();
    if (code.slice(i, i + 2) === '**') {
      i += 2;
      const right = power();
      if (typeof left !== 'number' || typeof right !== 'number') fail('arithmetic needs numbers');
      left **= right;
    }
    return left;
  };
  const product = () => {
    let left = power();
    while (true) {
      ws();
      const operator = code.slice(i, i + 2) === '**' ? '' : code[i];
      if (!['*', '/', '%'].includes(operator)) break;
      i++;
      const right = power();
      if (typeof left !== 'number' || typeof right !== 'number') fail('arithmetic needs numbers');
      left = operator === '*' ? left * right : operator === '/' ? left / right : left % right;
      if (!Number.isFinite(left)) fail('arithmetic result must be finite');
    }
    return left;
  };
  expression = () => {
    let left = product();
    while (true) {
      ws();
      const operator = code[i];
      if (operator !== '+' && operator !== '-') break;
      i++;
      const right = product();
      if (typeof left !== 'number' || typeof right !== 'number') fail('arithmetic needs numbers');
      left = operator === '+' ? left + right : left - right;
    }
    return left;
  };

  const value = expression();
  ws();
  if (i !== code.length) fail('unexpected trailing input');
  return value;
}

function resolveProps(attrs) {
  const p = {};
  for (const [k, v] of Object.entries(attrs)) {
    if (v === true) p[k] = true;
    else if ('str' in v) p[k] = v.str;
    else p[k] = parseLiteralExpression(v.expr);
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
      if (str) {
        let slashes = 0;
        for (let k = j - 1; k >= 0 && text[k] === '\\'; k--) slashes++;
        if (c === str && slashes % 2 === 0) str = null;
        continue;
      }
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
    // `options={[…]}` is a JavaScript string array (its `\\` escape represents
    // one backslash), but `answer="…"` is a literal attribute (which keeps `\\`).
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
