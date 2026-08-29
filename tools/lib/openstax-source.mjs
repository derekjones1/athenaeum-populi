import { createHash } from 'node:crypto';
import {
  existsSync,
  readFileSync,
  readdirSync,
} from 'node:fs';
import path from 'node:path';
import { mathSpans, parseFrontmatter, shortcodeParams, walkMarkdown } from './content.mjs';

// Re-exported because `validate-content` and the source audit both read local
// frontmatter through this module; the implementation now lives with the other
// content primitives so the structure validator and this audit cannot drift.
export { parseFrontmatter };

const EXCLUDED_CORE_SECTION_CLASSES = new Set([
  'key-concepts',
  'section-exercises',
  'writing',
]);

const MATCH_STOPWORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'each', 'for', 'from',
  'in', 'is', 'it', 'of', 'on', 'or', 'that', 'the', 'their', 'this', 'to',
  'use', 'using', 'with', 'you', 'your',
]);

export function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

export function decodeXmlEntities(value) {
  return value
    .replace(/&#x([\da-f]+);/gi, (_, digits) => String.fromCodePoint(Number.parseInt(digits, 16)))
    .replace(/&#(\d+);/g, (_, digits) => String.fromCodePoint(Number.parseInt(digits, 10)))
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
    .replaceAll('&amp;', '&')
    .replaceAll('&nbsp;', ' ')
    .replaceAll('&copy;', '©');
}

function findTagEnd(xml, start) {
  let quote = null;
  for (let index = start; index < xml.length; index++) {
    const character = xml[index];
    if (quote) {
      if (character === quote) quote = null;
    } else if (character === '"' || character === "'") {
      quote = character;
    } else if (character === '>') {
      return index;
    }
  }
  throw new Error(`unterminated XML tag starting at byte ${start - 1}`);
}

function parseAttributes(source) {
  const attributes = {};
  const nameMatch = source.match(/^\s*([^\s/>]+)/);
  if (!nameMatch) return { name: '', attributes };
  const name = nameMatch[1];
  let index = nameMatch[0].length;

  while (index < source.length) {
    while (/\s/.test(source[index] || '')) index++;
    if (index >= source.length || source[index] === '/') break;
    const attributeMatch = source.slice(index).match(/^([^\s=/>]+)/);
    if (!attributeMatch) break;
    const attributeName = attributeMatch[1];
    index += attributeMatch[0].length;
    while (/\s/.test(source[index] || '')) index++;
    if (source[index] !== '=') {
      attributes[attributeName] = '';
      continue;
    }
    index++;
    while (/\s/.test(source[index] || '')) index++;
    const quote = source[index];
    if (quote !== '"' && quote !== "'") {
      throw new Error(`unquoted XML attribute ${attributeName}`);
    }
    const end = source.indexOf(quote, index + 1);
    if (end === -1) throw new Error(`unterminated XML attribute ${attributeName}`);
    attributes[attributeName] = decodeXmlEntities(source.slice(index + 1, end));
    index = end + 1;
  }

  return { name, attributes };
}

/**
 * Parse the deliberately conservative XML used by OpenStax collections and
 * CNXML modules. The parser keeps namespace prefixes on element/attribute
 * names and does not perform DTD expansion or network access.
 */
export function parseXml(xml) {
  const document = { name: '#document', attributes: {}, children: [] };
  const stack = [document];
  let index = 0;

  while (index < xml.length) {
    const opening = xml.indexOf('<', index);
    if (opening === -1) {
      const tail = decodeXmlEntities(xml.slice(index));
      if (tail) stack.at(-1).children.push(tail);
      break;
    }
    if (opening > index) {
      const text = decodeXmlEntities(xml.slice(index, opening));
      if (text) stack.at(-1).children.push(text);
    }

    if (xml.startsWith('<!--', opening)) {
      const end = xml.indexOf('-->', opening + 4);
      if (end === -1) throw new Error(`unterminated XML comment at byte ${opening}`);
      index = end + 3;
      continue;
    }
    if (xml.startsWith('<![CDATA[', opening)) {
      const end = xml.indexOf(']]>', opening + 9);
      if (end === -1) throw new Error(`unterminated CDATA at byte ${opening}`);
      stack.at(-1).children.push(xml.slice(opening + 9, end));
      index = end + 3;
      continue;
    }
    if (xml.startsWith('<?', opening)) {
      const end = xml.indexOf('?>', opening + 2);
      if (end === -1) throw new Error(`unterminated XML processing instruction at byte ${opening}`);
      index = end + 2;
      continue;
    }
    if (xml.startsWith('<!', opening)) {
      const end = findTagEnd(xml, opening + 2);
      index = end + 1;
      continue;
    }

    const end = findTagEnd(xml, opening + 1);
    const tag = xml.slice(opening + 1, end);
    if (tag.startsWith('/')) {
      const closingName = tag.slice(1).trim();
      const current = stack.pop();
      if (!current || current.name !== closingName) {
        throw new Error(`mismatched XML closing tag </${closingName}> at byte ${opening}; expected </${current?.name || '?'}>`);
      }
    } else {
      const selfClosing = /\/\s*$/.test(tag);
      const source = selfClosing ? tag.replace(/\/\s*$/, '') : tag;
      const { name, attributes } = parseAttributes(source);
      if (!name) throw new Error(`empty XML element at byte ${opening}`);
      const element = { name, attributes, children: [] };
      stack.at(-1).children.push(element);
      if (!selfClosing) stack.push(element);
    }
    index = end + 1;
  }

  if (stack.length !== 1) {
    throw new Error(`unclosed XML element <${stack.at(-1).name}>`);
  }
  return document;
}

export function localName(nodeOrName) {
  const name = typeof nodeOrName === 'string' ? nodeOrName : nodeOrName?.name || '';
  return name.includes(':') ? name.slice(name.lastIndexOf(':') + 1) : name;
}

export function elementChildren(node, wantedName = null) {
  return (node?.children || []).filter((child) => (
    typeof child !== 'string' && (wantedName == null || localName(child) === wantedName)
  ));
}

export function firstElement(node, wantedName) {
  return elementChildren(node, wantedName)[0] || null;
}

export function textContent(node) {
  if (typeof node === 'string') return node;
  return (node?.children || []).map(textContent).join(' ');
}

export function descendants(node, predicate, { prune = () => false } = {}) {
  const matches = [];
  const visit = (candidate) => {
    if (typeof candidate === 'string') return;
    if (predicate(candidate)) matches.push(candidate);
    if (prune(candidate)) return;
    for (const child of candidate.children || []) visit(child);
  };
  visit(node);
  return matches;
}

export function normalizeText(value) {
  return decodeXmlEntities(String(value || ''))
    .normalize('NFKC')
    .toLocaleLowerCase('en-US')
    .replace(/[−–—]/g, '-')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\p{M}/gu, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

/** Preserve mathematical operators while normalizing prose/TeX for source
 * revision triage. This is deliberately stricter than normalizeText: a sign
 * change such as −3/5 → +3/5 must remain visible. */
export function normalizeSemanticText(value) {
  let normalized = decodeXmlEntities(String(value || '')).normalize('NFKC');
  let previous;
  do {
    previous = normalized;
    normalized = normalized.replace(
      /\\(?:tfrac|dfrac|cfrac|frac)\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g,
      '($1)/($2)',
    );
  } while (normalized !== previous);
  normalized = normalized
    .replace(/\\(?:leq|le)\b/g, '≤')
    .replace(/\\(?:geq|ge)\b/g, '≥')
    .replace(/\\(?:neq|ne)\b/g, '≠')
    .replace(/\\(?:cdot|times)\b/g, '*')
    .replace(/\\text\{([^{}]*)\}/g, '$1')
    .replace(/\\(?:left|right)\b/g, '')
    .replace(/\\[A-Za-z]+\*?/g, ' ')
    .replace(/[{}]/g, ' ')
    .toLocaleLowerCase('en-US')
    .replace(/[−–—]/g, '-')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[\u200b\u2060]/g, '')
    .replace(/[^\p{L}\p{N}+\-*\/^<>=≤≥≠().]+/gu, ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\s*([+\-*\/^<>=≤≥≠()])\s*/g, '$1');
  return normalized;
}

function significantTokens(value) {
  return normalizeText(value)
    .split(' ')
    .map((token) => ({
      solving: 'solve',
      graphing: 'graph',
      factoring: 'factor',
      dividing: 'divide',
      finding: 'find',
      evaluating: 'evaluate',
    })[token] || token)
    .map((token) => {
      if (token.length > 4 && token.endsWith('ies')) return `${token.slice(0, -3)}y`;
      if (token.length > 4 && token.endsWith('s') && !token.endsWith('ss')) return token.slice(0, -1);
      return token;
    })
    .filter((token) => token && (!MATCH_STOPWORDS.has(token) || /^\d+$/.test(token)));
}

export function tokenSimilarity(left, right) {
  const a = new Set(significantTokens(left));
  const b = new Set(significantTokens(right));
  if (!a.size && !b.size) return 1;
  if (!a.size || !b.size) return 0;
  let intersection = 0;
  for (const token of a) if (b.has(token)) intersection++;
  return intersection / (a.size + b.size - intersection);
}

export function phraseCoverage(needle, haystack) {
  const normalizedNeedle = normalizeText(needle);
  const normalizedHaystack = normalizeText(haystack);
  if (!normalizedNeedle) return 1;
  if (normalizedHaystack.includes(normalizedNeedle)) return 1;
  // MathML sometimes represents an italic word as adjacent one-letter <mi>
  // nodes (for example r-i-s-e). Those letters are formatting noise for prose
  // objective matching, while numbers remain meaningful.
  const useful = (token) => token && (!/^\p{L}$/u.test(token) || /^\d$/u.test(token));
  const needleTokens = new Set(normalizedNeedle.split(' ').filter(useful));
  const haystackTokens = new Set(normalizedHaystack.split(' ').filter(useful));
  let found = 0;
  for (const token of needleTokens) if (haystackTokens.has(token)) found++;
  return needleTokens.size ? found / needleTokens.size : 1;
}

function shingleCoverage(source, local, width = 5) {
  const sourceTokens = normalizeText(source).split(' ').filter(Boolean);
  const localTokens = normalizeText(local).split(' ').filter(Boolean);
  if (sourceTokens.length < width) return phraseCoverage(source, local);
  const sourceShingles = new Set();
  const localShingles = new Set();
  for (let index = 0; index <= sourceTokens.length - width; index++) {
    sourceShingles.add(sourceTokens.slice(index, index + width).join(' '));
  }
  for (let index = 0; index <= localTokens.length - width; index++) {
    localShingles.add(localTokens.slice(index, index + width).join(' '));
  }
  let found = 0;
  for (const shingle of sourceShingles) if (localShingles.has(shingle)) found++;
  return sourceShingles.size ? found / sourceShingles.size : 1;
}

function directText(node, childName) {
  const child = firstElement(node, childName);
  return child ? normalizeWhitespace(textContent(child)) : '';
}

export function normalizeWhitespace(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

export function parseCollectionXml(xml) {
  const document = parseXml(xml);
  const collection = firstElement(document, 'collection');
  if (!collection) throw new Error('collection XML has no <collection> root');
  const metadata = firstElement(collection, 'metadata');
  const content = firstElement(collection, 'content');
  if (!metadata || !content) throw new Error('collection XML needs metadata and content');

  const chapters = elementChildren(content, 'subcollection').map((subcollection, index) => {
    const chapterContent = firstElement(subcollection, 'content');
    const moduleIds = elementChildren(chapterContent, 'module').map((module) => module.attributes.document);
    if (moduleIds.some((moduleId) => !moduleId)) {
      throw new Error(`collection chapter ${index + 1} contains a module without a document id`);
    }
    return {
      chapter: index + 1,
      title: directText(subcollection, 'title'),
      moduleIds,
      introModuleId: moduleIds[0] || null,
      sectionModuleIds: moduleIds.slice(1),
    };
  });

  return {
    title: directText(metadata, 'title'),
    slug: directText(metadata, 'slug'),
    uuid: directText(metadata, 'uuid'),
    license: directText(metadata, 'license'),
    chapters,
  };
}

function isExcludedCoreSection(section) {
  const className = section.attributes.class || '';
  if (EXCLUDED_CORE_SECTION_CLASSES.has(className)) return true;
  const title = normalizeText(directText(section, 'title'));
  return title === 'self check'
    || /^chapter(?: \d+)? review exercises$/.test(title)
    || /^(?:chapter(?: \d+)? )?practice test$/.test(title);
}

function coreInstructionalSections(content) {
  return elementChildren(content, 'section').filter((section) => !isExcludedCoreSection(section));
}

function countWithin(nodes, wantedName, options = {}) {
  return nodes.reduce((count, node) => count + descendants(
    node,
    (candidate) => localName(candidate) === wantedName,
    options,
  ).length, 0);
}

function instructionalTextFromSections(sections) {
  const strings = [];
  const visit = (node) => {
    if (typeof node === 'string') {
      strings.push(node);
      return;
    }
    if (localName(node) === 'note' && node.attributes.class === 'try') return;
    for (const child of node.children || []) visit(child);
  };
  for (const section of sections) visit(section);
  return normalizeWhitespace(strings.join(' '));
}

function mathMlText(node) {
  if (typeof node === 'string') return node;
  const name = localName(node);
  const children = elementChildren(node);
  if (name === 'mfrac' && children.length >= 2) {
    return `(${mathMlText(children[0])})/(${mathMlText(children[1])})`;
  }
  if (name === 'msup' && children.length >= 2) {
    return `(${mathMlText(children[0])})^(${mathMlText(children[1])})`;
  }
  if (name === 'msub' && children.length >= 2) {
    return `(${mathMlText(children[0])})_(${mathMlText(children[1])})`;
  }
  if (name === 'msubsup' && children.length >= 3) {
    return `(${mathMlText(children[0])})_(${mathMlText(children[1])})^(${mathMlText(children[2])})`;
  }
  if (name === 'msqrt') return `sqrt(${(node.children || []).map(mathMlText).join('')})`;
  if (name === 'mroot' && children.length >= 2) {
    return `root(${mathMlText(children[1])},${mathMlText(children[0])})`;
  }
  if (name === 'mfenced') {
    return `${node.attributes.open || '('}${(node.children || []).map(mathMlText).join('')}${node.attributes.close || ')'}`;
  }
  if (['mi', 'mn', 'mo', 'mtext'].includes(name)) {
    return (node.children || []).map(mathMlText).join('');
  }
  return (node.children || []).map(mathMlText).join('');
}

function semanticTextContent(node) {
  if (typeof node === 'string') return node;
  if (localName(node) === 'math') return mathMlText(node);
  if (localName(node) === 'media' && node.attributes.alt) return node.attributes.alt;
  return (node?.children || []).map(semanticTextContent).join(' ');
}

export function parseModuleXml(xml) {
  const parsed = parseXml(xml);
  const document = firstElement(parsed, 'document');
  if (!document) throw new Error('CNXML has no <document> root');
  const metadata = firstElement(document, 'metadata');
  const content = firstElement(document, 'content');
  if (!metadata || !content) throw new Error('CNXML needs metadata and content');
  const abstract = firstElement(metadata, 'abstract');
  const objectives = abstract
    ? descendants(abstract, (node) => localName(node) === 'item').map((item) => normalizeWhitespace(textContent(item)))
    : [];
  const sections = coreInstructionalSections(content);
  const tryNotes = sections.flatMap((section) => descendants(
    section,
    (node) => localName(node) === 'note' && node.attributes.class === 'try',
  ));
  const tries = tryNotes.map((note) => {
    const problem = descendants(note, (node) => localName(node) === 'problem')[0];
    const solution = descendants(note, (node) => localName(node) === 'solution')[0];
    return {
      id: note.attributes.id || '',
      problem: normalizeWhitespace(semanticTextContent(problem || note)),
      solution: normalizeWhitespace(semanticTextContent(solution || '')),
      problemMath: problem
        ? descendants(problem, (node) => localName(node) === 'math')
          .map((math) => normalizeSemanticText(mathMlText(math)))
        : [],
      solutionMath: solution
        ? descendants(solution, (node) => localName(node) === 'math')
          .map((math) => normalizeSemanticText(mathMlText(math)))
        : [],
    };
  });

  return {
    moduleId: directText(metadata, 'content-id'),
    uuid: directText(metadata, 'uuid'),
    title: directText(document, 'title'),
    objectives,
    coreHeadings: sections.map((section) => directText(section, 'title')).filter(Boolean),
    instructionalText: instructionalTextFromSections(sections),
    tries,
    counts: {
      examples: countWithin(sections, 'example'),
      figures: countWithin(sections, 'figure'),
      tables: countWithin(sections, 'table'),
      terms: countWithin(sections, 'term'),
      tries: tries.length,
    },
  };
}

function localInteractions(body) {
  const interactions = [];
  for (const match of body.matchAll(/\{\{<\s*(fillin|multiplechoice|graphplot)\b([\s\S]*?)>\}\}/g)) {
    const params = shortcodeParams(match[2]);
    const question = params.question || '';
    const answer = params.answerDisplay || params.answer || '';
    interactions.push({
      type: match[1],
      question,
      answer,
      semanticQuestion: normalizeSemanticText(question),
      semanticAnswer: normalizeSemanticText(answer),
      // Through the shared extractor, which shields `\$`. Scanning raw meant an
      // authored money amount opened a span, so every later span in the same
      // string was sliced at the wrong delimiter and compared as garbage.
      questionMath: mathSpans(question, { allowNewlines: true }).map((span) => normalizeSemanticText(span.tex)),
      answerMath: mathSpans(answer, { allowNewlines: true }).map((span) => normalizeSemanticText(span.tex)),
    });
  }
  return interactions;
}

function markdownPlainText(markdown) {
  return decodeXmlEntities(markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, ' $1 ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, ' $1 ')
    .replace(/\{\{<\/?[^>]+>\}\}/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\\(?:tfrac|frac|dfrac|cfrac)\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, ' $1 over $2 ')
    .replace(/\\text\{([^{}]*)\}/g, ' $1 ')
    .replace(/\\[A-Za-z]+\*?/g, ' ')
    .replace(/[`*_~#$|>{}\[\]()]/g, ' '));
}

/**
 * Parse the section-opening objectives callout: the sentinel line
 * `**By the end of this section, you will be able to:**` followed by a
 * Markdown list, one item per objective, inside a `{{< callout >}}`.
 *
 * Returns null when the callout is absent, else the raw item texts (trimmed,
 * empty items dropped). This is the ONE parser for that construct — the
 * content lint, the structure validator, and the source audit all key off it,
 * so a grammar change lands in every diagnosis at once instead of drifting
 * across three private copies.
 */
export function parseObjectivesCallout(body) {
  const block = body.match(
    /\*\*By the end of this section, you will be able to:\*\*([\s\S]*?)\{\{<\s*\/callout\s*>\}\}/,
  );
  if (!block) return null;
  return [...block[1].matchAll(/^[ \t]*[-*] +(.+?)[ \t]*$/gm)]
    .map((match) => match[1].trim())
    .filter(Boolean);
}

export function parseLocalSection(markdown) {
  const { attributes, body } = parseFrontmatter(markdown);
  const headings = [...body.matchAll(/^#{2,6}\s+(.+?)\s*$/gm)]
    .map((match) => markdownPlainText(match[1]).trim())
    .filter(Boolean)
    .filter((heading) => normalizeText(heading) !== 'key terms');
  const interactions = localInteractions(body);
  const plainText = normalizeWhitespace(markdownPlainText(body));
  // The opening callout states the section's objectives as a Markdown list.
  // The count is what the audit compares against the CNXML abstract: wording
  // is allowed to differ (imperative vs gerund, KaTeX vs flattened MathML),
  // but a local list that silently merges two source objectives into one is a
  // fidelity defect — it is how section 1.1 lost "write whole numbers".
  const objectives = (parseObjectivesCallout(body) ?? [])
    .map((item) => markdownPlainText(item).trim())
    .filter(Boolean);
  return {
    title: attributes.title || '',
    sourceSection: attributes.source_section || '',
    headings,
    objectives,
    interactions,
    plainText,
    semanticText: normalizeSemanticText(body.replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')),
    counts: {
      fillins: (body.match(/\{\{<\s*fillin\b/g) || []).length,
      multipleChoice: (body.match(/\{\{<\s*multiplechoice\b/g) || []).length,
      graphPlots: (body.match(/\{\{<\s*graphplot\b/g) || []).length,
      inlineSvgs: (body.match(/<svg\b/g) || []).length,
      markdownTables: (body.match(/^\|.*\|\s*$/gm) || []).length,
    },
  };
}

const AUTHORING_STATUSES = new Set(['complete', 'in-progress', 'scaffolded']);
const MODULE_SCOPES = new Set(['bundle', 'mapped-collections']);

/**
 * Load the bundle-keyed source lock. Each bundle is one upstream OpenStax
 * publishing repository pinned at one reviewed commit; each book belongs to
 * exactly one bundle. Books may be `complete` (every upstream numbered section
 * is authored locally) or still `in-progress`/`scaffolded`.
 */
export function loadSourceLock(repositoryRoot) {
  const lockPath = path.join(repositoryRoot, 'data/openstax/source-lock.json');
  const relativeLock = path.relative(repositoryRoot, lockPath).split(path.sep).join('/');
  const lock = JSON.parse(readFileSync(lockPath, 'utf8'));
  if (lock.schemaVersion !== 2) {
    throw new Error(`${relativeLock} has unsupported schemaVersion ${JSON.stringify(lock.schemaVersion)}; expected 2`);
  }
  const bundleKeys = Object.keys(lock.bundles || {});
  if (!bundleKeys.length) throw new Error(`${relativeLock} declares no source bundles`);

  const books = new Map();
  for (const bundleKey of bundleKeys) {
    const bundle = lock.bundles[bundleKey];
    for (const field of ['repository', 'gitUrl', 'branch', 'sourceDir']) {
      if (!bundle[field]) throw new Error(`${relativeLock}: bundle ${bundleKey} is missing ${field}`);
    }
    if (!/^[0-9a-f]{40}$/.test(bundle.commit || '')) {
      throw new Error(`${relativeLock}: bundle ${bundleKey} has an invalid pinned commit`);
    }
    if (!MODULE_SCOPES.has(bundle.moduleScope)) {
      throw new Error(`${relativeLock}: bundle ${bundleKey} needs moduleScope ${[...MODULE_SCOPES].join(' or ')}`);
    }
    const bookKeys = Object.keys(bundle.books || {});
    if (!bookKeys.length) throw new Error(`${relativeLock}: bundle ${bundleKey} maps no books`);
    for (const bookKey of bookKeys) {
      if (books.has(bookKey)) {
        throw new Error(`${relativeLock}: book ${bookKey} is declared in more than one bundle`);
      }
      const book = bundle.books[bookKey];
      for (const field of ['sourceSlug', 'collectionId', 'collectionPath']) {
        if (!book[field]) throw new Error(`${relativeLock}: ${bundleKey}/${bookKey} is missing ${field}`);
      }
      if (!/^[0-9a-f]{40}$/.test(book.authoredBaselineCommit || '')) {
        throw new Error(`${relativeLock}: ${bundleKey}/${bookKey} has an invalid authoredBaselineCommit`);
      }
      if (!AUTHORING_STATUSES.has(book.authoringStatus)) {
        throw new Error(
          `${relativeLock}: ${bundleKey}/${bookKey} needs authoringStatus ${[...AUTHORING_STATUSES].join(', ')}`,
        );
      }
      books.set(bookKey, { ...book, book: bookKey, bundleKey });
    }
  }
  return { ...lock, bundleKeys, books };
}

export function bundleSourceDirectory(repositoryRoot, lock, bundleKey, overrides = {}) {
  const bundle = lock.bundles[bundleKey];
  if (!bundle) throw new Error(`unknown source bundle: ${bundleKey}`);
  return path.resolve(repositoryRoot, overrides[bundleKey] || bundle.sourceDir);
}

export function resolveSourceDirectories(repositoryRoot, lock, { bundles = lock.bundleKeys, overrides = {} } = {}) {
  const resolved = {};
  for (const bundleKey of bundles) {
    resolved[bundleKey] = bundleSourceDirectory(repositoryRoot, lock, bundleKey, overrides);
  }
  return resolved;
}

/** Every module referenced by a collection, including its preface and any
 * appendices. Used to scope a sparse checkout to one book inside a bundle that
 * also ships books this project does not use. */
export function collectionModuleIds(collectionXml) {
  return [...new Set(
    [...collectionXml.matchAll(/<[\w.-]*:?module\b[^>]*\bdocument="([^"]+)"/g)].map((match) => match[1]),
  )].sort();
}

function loadCollections(lock, sourceDirectories) {
  const collections = new Map();
  for (const [bookKey, config] of lock.books) {
    const sourceRoot = sourceDirectories[config.bundleKey];
    if (!sourceRoot) continue;
    const collectionPath = path.join(sourceRoot, config.collectionPath);
    if (!existsSync(collectionPath)) throw new Error(`missing OpenStax collection: ${collectionPath}`);
    const collection = parseCollectionXml(readFileSync(collectionPath, 'utf8'));
    if (collection.slug !== config.sourceSlug) {
      throw new Error(`${config.collectionPath} slug ${JSON.stringify(collection.slug)} does not match lock ${JSON.stringify(config.sourceSlug)}`);
    }
    collections.set(bookKey, { ...config, collection, sourceRoot });
  }
  return collections;
}

/** Authored chapter landings for a book, whether or not any section pages
 * inside them exist yet. A scaffolded book is exactly this: chapter landings
 * with no numbered sections. */
export function localChapterIndexes(repositoryRoot, bookKey) {
  const bookRoot = path.join(repositoryRoot, 'content/math', bookKey);
  if (!existsSync(bookRoot)) return [];
  return readdirSync(bookRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d{2}-/.test(entry.name))
    .map((entry) => {
      const localPath = `content/math/${bookKey}/${entry.name}/_index.md`;
      const absolute = path.join(repositoryRoot, localPath);
      const attributes = existsSync(absolute)
        ? parseFrontmatter(readFileSync(absolute, 'utf8')).attributes
        : {};
      return {
        directory: entry.name,
        localPath,
        title: attributes.title || '',
        authoringStatus: attributes.authoring_status || null,
        sourceChapter: attributes.source_chapter === undefined ? null : Number(attributes.source_chapter),
      };
    })
    .sort((left, right) => left.directory.localeCompare(right.directory));
}

export function buildSourceMap(repositoryRoot, sourceDirectories, lock = loadSourceLock(repositoryRoot)) {
  const contentRoot = path.join(repositoryRoot, 'content/math');
  const collections = loadCollections(lock, sourceDirectories);
  const entries = [];
  const errors = [];
  const chapterLocalCounts = new Map();

  for (const absolutePath of [...walkMarkdown(contentRoot)].sort()) {
    const relativePath = path.relative(repositoryRoot, absolutePath).split(path.sep).join('/');
    const book = relativePath.split('/')[2];
    const config = collections.get(book);
    if (!config) continue;
    const markdown = readFileSync(absolutePath, 'utf8');
    const local = parseLocalSection(markdown);
    if (!local.sourceSection) continue;
    const sectionMatch = local.sourceSection.match(/^(\d+)\.(\d+)$/);
    if (!sectionMatch) {
      errors.push(`${relativePath}: invalid source_section ${JSON.stringify(local.sourceSection)}`);
      continue;
    }
    const chapterNumber = Number(sectionMatch[1]);
    const sectionNumber = Number(sectionMatch[2]);
    const chapter = config.collection.chapters[chapterNumber - 1];
    if (!chapter) {
      errors.push(`${relativePath}: upstream collection has no chapter ${chapterNumber}`);
      continue;
    }
    const moduleId = chapter.sectionModuleIds[sectionNumber - 1];
    if (!moduleId) {
      errors.push(`${relativePath}: upstream chapter ${chapterNumber} has no section ${sectionNumber}`);
      continue;
    }
    const modulePath = path.join(config.sourceRoot, 'modules', moduleId, 'index.cnxml');
    if (!existsSync(modulePath)) {
      errors.push(`${relativePath}: missing modules/${moduleId}/index.cnxml`);
      continue;
    }
    const moduleXml = readFileSync(modulePath, 'utf8');
    const module = parseModuleXml(moduleXml);
    if (module.moduleId !== moduleId) {
      errors.push(`${relativePath}: ${modulePath} identifies itself as ${module.moduleId}, expected ${moduleId}`);
    }
    entries.push({
      localPath: relativePath,
      bundle: config.bundleKey,
      book,
      sourceSection: local.sourceSection,
      moduleId,
      sourceTitle: module.title,
      moduleSha256: sha256(moduleXml),
    });
    const chapterKey = `${book}:${chapterNumber}`;
    chapterLocalCounts.set(chapterKey, (chapterLocalCounts.get(chapterKey) || 0) + 1);
  }

  const books = {};
  for (const [bookKey, config] of collections) {
    const { collection } = config;
    const upstreamSections = collection.chapters.reduce((sum, chapter) => sum + chapter.sectionModuleIds.length, 0);
    const mappedSections = entries.filter((entry) => entry.book === bookKey).length;
    const chapterIndexes = localChapterIndexes(repositoryRoot, bookKey);
    const complete = config.authoringStatus === 'complete';

    for (const chapterIndex of chapterIndexes) {
      if (!Number.isInteger(chapterIndex.sourceChapter)) {
        errors.push(`${chapterIndex.localPath}: chapter landing needs a numeric source_chapter`);
        continue;
      }
      if (!collection.chapters[chapterIndex.sourceChapter - 1]) {
        errors.push(`${chapterIndex.localPath}: upstream collection has no chapter ${chapterIndex.sourceChapter}`);
      }
      // `authoring_status` exempts an empty chapter landing from the section
      // lints. It must disappear as soon as the chapter has section pages, so
      // an unwritten chapter can never be mistaken for a finished one.
      const authoredHere = chapterLocalCounts.get(`${bookKey}:${chapterIndex.sourceChapter}`) || 0;
      if (chapterIndex.authoringStatus && authoredHere) {
        errors.push(`${chapterIndex.localPath}: chapter has ${authoredHere} authored section(s); remove authoring_status`);
      }
      if (!chapterIndex.authoringStatus && !authoredHere) {
        errors.push(`${chapterIndex.localPath}: chapter landing has no authored sections; declare authoring_status: scaffolded`);
      }
      if (complete && chapterIndex.authoringStatus) {
        errors.push(`${chapterIndex.localPath}: ${bookKey} is complete, so no chapter landing may declare authoring_status`);
      }
    }
    if (complete && chapterIndexes.length !== collection.chapters.length) {
      errors.push(
        `${bookKey}: ${chapterIndexes.length} local chapter landings but ${collection.chapters.length} upstream chapters`,
      );
    }
    if (complete && !mappedSections) {
      errors.push(`${bookKey}: authoringStatus is complete but no local numbered sections are mapped`);
    }

    for (const chapter of collection.chapters) {
      const localCount = chapterLocalCounts.get(`${bookKey}:${chapter.chapter}`) || 0;
      if (complete && localCount !== chapter.sectionModuleIds.length) {
        errors.push(
          `${bookKey} chapter ${chapter.chapter}: ${localCount} local numbered sections but ${chapter.sectionModuleIds.length} upstream section modules`,
        );
      }
      if (!complete && localCount > chapter.sectionModuleIds.length) {
        errors.push(
          `${bookKey} chapter ${chapter.chapter}: ${localCount} local numbered sections exceed ${chapter.sectionModuleIds.length} upstream section modules`,
        );
      }
    }

    books[bookKey] = {
      bundle: config.bundleKey,
      authoringStatus: config.authoringStatus,
      upstreamChapters: collection.chapters.length,
      upstreamSections,
      localChapters: chapterIndexes.length,
      mappedSections,
    };
  }

  entries.sort((left, right) => left.localPath.localeCompare(right.localPath));
  const ids = new Set();
  for (const entry of entries) {
    const key = `${entry.bundle}:${entry.moduleId}`;
    if (ids.has(key)) errors.push(`duplicate upstream module mapping: ${entry.bundle} ${entry.moduleId}`);
    ids.add(key);
  }

  const bundles = {};
  for (const bundleKey of Object.keys(sourceDirectories)) {
    bundles[bundleKey] = {
      repository: lock.bundles[bundleKey].repository,
      commit: lock.bundles[bundleKey].commit,
    };
  }

  return {
    map: {
      schemaVersion: 2,
      sourceLock: 'data/openstax/source-lock.json',
      bundles,
      books,
      sections: entries,
    },
    errors,
    collections,
  };
}

export function verifyCommittedSourceMap(repositoryRoot, lock = loadSourceLock(repositoryRoot)) {
  const mapPath = path.join(repositoryRoot, 'data/openstax/source-map.json');
  if (!existsSync(mapPath)) return { errors: ['data/openstax/source-map.json is missing'], map: null };
  const map = JSON.parse(readFileSync(mapPath, 'utf8'));
  const errors = [];
  if (map.schemaVersion !== 2) errors.push('source map schemaVersion must be 2');

  const mappedBundleKeys = Object.keys(map.bundles || {}).sort();
  const lockBundleKeys = [...lock.bundleKeys].sort();
  if (JSON.stringify(mappedBundleKeys) !== JSON.stringify(lockBundleKeys)) {
    errors.push(`source map bundles ${JSON.stringify(mappedBundleKeys)} do not match lock ${JSON.stringify(lockBundleKeys)}`);
  }
  for (const bundleKey of lockBundleKeys) {
    const mapped = (map.bundles || {})[bundleKey];
    if (!mapped) continue;
    if (mapped.commit !== lock.bundles[bundleKey].commit) {
      errors.push(`source map commit ${mapped.commit} for ${bundleKey} does not match lock ${lock.bundles[bundleKey].commit}`);
    }
    if (mapped.repository !== lock.bundles[bundleKey].repository) {
      errors.push(`source map repository for ${bundleKey} does not match the source lock`);
    }
  }

  const expected = new Map();
  for (const absolutePath of [...walkMarkdown(path.join(repositoryRoot, 'content/math'))].sort()) {
    const relativePath = path.relative(repositoryRoot, absolutePath).split(path.sep).join('/');
    const book = relativePath.split('/')[2];
    if (!lock.books.has(book)) continue;
    const local = parseLocalSection(readFileSync(absolutePath, 'utf8'));
    if (local.sourceSection) expected.set(relativePath, { book, sourceSection: local.sourceSection, title: local.title });
  }
  const actual = new Map();
  for (const entry of map.sections || []) {
    if (actual.has(entry.localPath)) errors.push(`duplicate local path in source map: ${entry.localPath}`);
    actual.set(entry.localPath, entry);
    if (!/^[a-z]\d+$/i.test(entry.moduleId || '')) errors.push(`${entry.localPath}: invalid module id ${entry.moduleId}`);
    if (!/^[0-9a-f]{64}$/.test(entry.moduleSha256 || '')) errors.push(`${entry.localPath}: invalid module SHA-256`);
    const bookConfig = lock.books.get(entry.book);
    if (!bookConfig) errors.push(`${entry.localPath}: mapped book ${entry.book} is not in the source lock`);
    else if (entry.bundle !== bookConfig.bundleKey) {
      errors.push(`${entry.localPath}: mapped bundle ${entry.bundle} should be ${bookConfig.bundleKey}`);
    }
  }
  for (const [localPath, section] of expected) {
    const entry = actual.get(localPath);
    if (!entry) {
      errors.push(`${localPath}: missing from source map`);
      continue;
    }
    if (entry.book !== section.book) errors.push(`${localPath}: mapped book ${entry.book} should be ${section.book}`);
    if (entry.sourceSection !== section.sourceSection) {
      errors.push(`${localPath}: mapped source section ${entry.sourceSection} should be ${section.sourceSection}`);
    }
    if (tokenSimilarity(section.title, entry.sourceTitle) < 0.45) {
      errors.push(`${localPath}: local title and mapped source title are unexpectedly different`);
    }
  }
  for (const localPath of actual.keys()) {
    if (!expected.has(localPath)) errors.push(`${localPath}: stale source-map entry (no local numbered section)`);
  }
  const moduleIds = new Set();
  for (const entry of actual.values()) {
    const key = `${entry.bundle}:${entry.moduleId}`;
    if (moduleIds.has(key)) errors.push(`duplicate mapped module id: ${entry.bundle} ${entry.moduleId}`);
    moduleIds.add(key);
  }

  const mappedBooks = Object.keys(map.books || {}).sort();
  const lockBooks = [...lock.books.keys()].sort();
  if (JSON.stringify(mappedBooks) !== JSON.stringify(lockBooks)) {
    errors.push(`source map books ${JSON.stringify(mappedBooks)} do not match lock ${JSON.stringify(lockBooks)}`);
  }
  for (const bookKey of lockBooks) {
    const summary = (map.books || {})[bookKey];
    if (!summary) continue;
    const config = lock.books.get(bookKey);
    if (summary.bundle !== config.bundleKey) errors.push(`source map book ${bookKey} is attributed to bundle ${summary.bundle}`);
    if (summary.authoringStatus !== config.authoringStatus) {
      errors.push(`source map book ${bookKey} records authoringStatus ${summary.authoringStatus}, lock says ${config.authoringStatus}`);
    }
    const counted = [...actual.values()].filter((entry) => entry.book === bookKey).length;
    if (summary.mappedSections !== counted) {
      errors.push(`source map book ${bookKey} claims ${summary.mappedSections} mapped sections but lists ${counted}`);
    }
    if (config.authoringStatus === 'complete' && summary.mappedSections !== summary.upstreamSections) {
      errors.push(`source map book ${bookKey} is complete but maps ${summary.mappedSections} of ${summary.upstreamSections} upstream sections`);
    }
  }

  return { errors, map, expectedCount: expected.size, actualCount: actual.size };
}

function matchHeadings(sourceHeadings, localHeadings) {
  return sourceHeadings.map((sourceHeading) => {
    let best = { heading: '', score: 0 };
    for (const localHeading of localHeadings) {
      const score = tokenSimilarity(sourceHeading, localHeading);
      if (score > best.score) best = { heading: localHeading, score };
    }
    return { sourceHeading, localHeading: best.heading, score: best.score };
  });
}

function tryMatchScore(sourceProblem, localQuestion) {
  const sourceTokens = new Set(significantTokens(sourceProblem));
  const localTokens = new Set(significantTokens(markdownPlainText(localQuestion)));
  if (!sourceTokens.size || !localTokens.size) return 0;
  let intersection = 0;
  for (const token of sourceTokens) if (localTokens.has(token)) intersection++;
  const denominator = Math.min(sourceTokens.size, localTokens.size);
  const containment = denominator ? intersection / denominator : 0;
  const specificity = Math.min(1, intersection / 4);
  return containment * specificity;
}

function matchTries(sourceTries, localInteractionsList) {
  return sourceTries.map((sourceTry) => {
    let best = { index: -1, question: '', score: 0 };
    localInteractionsList.forEach((interaction, index) => {
      const score = tryMatchScore(sourceTry.problem, interaction.question);
      if (score > best.score) best = { index, question: interaction.question, score };
    });
    return { sourceTryId: sourceTry.id, sourceProblem: sourceTry.problem, ...best };
  });
}

export function auditExistingMath(
  repositoryRoot,
  sourceDirectories,
  lock = loadSourceLock(repositoryRoot),
) {
  const committed = verifyCommittedSourceMap(repositoryRoot, lock);
  if (committed.errors.length) {
    return { structuralErrors: committed.errors, sections: [], books: [], summary: null };
  }
  const current = buildSourceMap(repositoryRoot, sourceDirectories, lock);
  if (current.errors.length) {
    return { structuralErrors: current.errors, sections: [], books: [], summary: null };
  }
  const auditedBundles = new Set(Object.keys(sourceDirectories));
  const baselineByPath = new Map(committed.map.sections.map((entry) => [entry.localPath, entry]));
  const decisionsPath = path.join(repositoryRoot, 'data/openstax/reconciliation-decisions.json');
  const decisions = existsSync(decisionsPath)
    ? JSON.parse(readFileSync(decisionsPath, 'utf8'))
    : { targetCommits: {}, metadataDecisions: [] };
  for (const bundleKey of auditedBundles) {
    const target = (decisions.targetCommits || {})[bundleKey];
    if (target && target !== lock.bundles[bundleKey].commit) {
      return {
        structuralErrors: [
          `reconciliation decisions target ${target} for ${bundleKey} does not match source lock ${lock.bundles[bundleKey].commit}`,
        ],
        sections: [],
        books: [],
        summary: null,
      };
    }
  }
  const decisionsByPath = new Map();
  for (const decision of decisions.metadataDecisions || []) {
    const list = decisionsByPath.get(decision.localPath) || [];
    list.push(decision);
    decisionsByPath.set(decision.localPath, list);
  }
  const sections = [];

  for (const entry of current.map.sections) {
    if (!auditedBundles.has(entry.bundle)) continue;
    const baseline = baselineByPath.get(entry.localPath);
    const markdown = readFileSync(path.join(repositoryRoot, entry.localPath), 'utf8');
    const local = parseLocalSection(markdown);
    const moduleXml = readFileSync(
      path.join(sourceDirectories[entry.bundle], 'modules', entry.moduleId, 'index.cnxml'),
      'utf8',
    );
    const source = parseModuleXml(moduleXml);
    const titleScore = tokenSimilarity(source.title, local.title);
    const objectiveMatches = source.objectives.map((objective) => ({
      objective,
      coverage: phraseCoverage(objective, local.plainText),
    }));
    const headingMatches = matchHeadings(source.coreHeadings, local.headings);
    const tryMatches = matchTries(source.tries, local.interactions);
    const detectedFlags = [];

    if (!baseline) detectedFlags.push('missing-baseline');
    else {
      if (baseline.moduleId !== entry.moduleId) detectedFlags.push('upstream-module-remapped');
      if (baseline.moduleSha256 !== entry.moduleSha256) detectedFlags.push('upstream-module-changed');
    }
    if (titleScore < 0.75) detectedFlags.push('title-needs-review');
    if (objectiveMatches.some((match) => match.coverage < 0.82)) detectedFlags.push('objective-needs-review');
    // The local objectives list must enumerate the same objectives the source
    // does. A short list means the callout condensed two objectives into one
    // phrase, which then hides an objective from the Practice block's
    // per-objective coverage rule. Guarded so a section that also fails the
    // phrase-coverage check above doesn't emit the flag twice in the audit.
    if (local.objectives.length !== source.objectives.length
      && !detectedFlags.includes('objective-needs-review')) {
      detectedFlags.push('objective-needs-review');
    }
    if (headingMatches.some((match) => match.score < 0.60)) detectedFlags.push('heading-needs-review');
    const adjudications = (decisionsByPath.get(entry.localPath) || []).filter((decision) => {
      if (decision.moduleId !== entry.moduleId) return false;
      return (decision.covers || []).some((flag) => detectedFlags.includes(flag));
    });
    const coveredFlags = new Set(adjudications.flatMap((decision) => decision.covers || []));
    const reviewFlags = detectedFlags.filter((flag) => !coveredFlags.has(flag));

    sections.push({
      ...entry,
      localTitle: local.title,
      titleScore,
      objectives: {
        matched: objectiveMatches.filter((match) => match.coverage >= 0.82).length,
        total: objectiveMatches.length,
        details: objectiveMatches,
      },
      headings: {
        matched: headingMatches.filter((match) => match.score >= 0.60).length,
        total: headingMatches.length,
        details: headingMatches,
      },
      proseTraceability: shingleCoverage(source.instructionalText, local.plainText),
      sourceCounts: source.counts,
      localCounts: {
        ...local.counts,
        interactions: local.interactions.length,
      },
      tryMatches: {
        likely: tryMatches.filter((match) => match.score >= 0.55).length,
        total: tryMatches.length,
        details: tryMatches,
      },
      detectedFlags,
      adjudications,
      reviewFlags,
      status: reviewFlags.length
        ? 'needs-review'
        : detectedFlags.length
          ? 'adaptation-adjudicated'
          : 'metadata-matched',
    });
  }

  const books = Object.entries(current.map.books)
    .filter(([, summary]) => auditedBundles.has(summary.bundle))
    .map(([book, summary]) => ({ book, ...summary }))
    .sort((left, right) => left.book.localeCompare(right.book));

  const summary = {
    sections: sections.length,
    metadataMatched: sections.filter((section) => section.status === 'metadata-matched').length,
    adaptationsAdjudicated: sections.filter((section) => section.status === 'adaptation-adjudicated').length,
    needsReview: sections.filter((section) => section.status === 'needs-review').length,
    changedUpstream: sections.filter((section) => section.reviewFlags.includes('upstream-module-changed')).length,
    mappedBooks: books.filter((book) => book.mappedSections > 0).length,
    scaffoldedBooks: books.filter((book) => book.authoringStatus !== 'complete').map((book) => book.book),
    objectivesMatched: sections.reduce((sum, section) => sum + section.objectives.matched, 0),
    objectivesTotal: sections.reduce((sum, section) => sum + section.objectives.total, 0),
    headingsMatched: sections.reduce((sum, section) => sum + section.headings.matched, 0),
    headingsTotal: sections.reduce((sum, section) => sum + section.headings.total, 0),
    sourceTriesLikelyMatched: sections.reduce((sum, section) => sum + section.tryMatches.likely, 0),
    sourceTriesTotal: sections.reduce((sum, section) => sum + section.tryMatches.total, 0),
    localInteractions: sections.reduce((sum, section) => sum + section.localCounts.interactions, 0),
  };

  return { structuralErrors: [], sections, books, summary };
}
