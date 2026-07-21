// Site-wide search powered by one Pagefind index at /pagefind/.
//
// This intentionally reuses Hextra's search markup and CSS classes, but not
// its FlexSearch index. The Pagefind bundle is generated after Hugo builds and
// is loaded lazily only when a reader focuses or uses the search box.

(() => {
  const PAGEFIND_BUNDLE = '/pagefind/pagefind.js';
  const MAX_RESULTS = 15;
  const wrappers = [...document.querySelectorAll('.hextra-search-wrapper')];
  const state = new WeakMap();
  let pagefindPromise;

  const labels = {
    math: 'Math',
    biology: 'Biology',
    chemistry: 'Chemistry',
    physics: 'Physics',
    prealgebra: 'Prealgebra',
    'elementary-algebra': 'Elementary Algebra',
    'intermediate-algebra': 'Intermediate Algebra',
  };

  function loadPagefind() {
    if (!pagefindPromise) {
      pagefindPromise = import(PAGEFIND_BUNDLE).then(async (pagefind) => {
        await pagefind.options({ excerptLength: 24 });
        return pagefind;
      });
    }
    return pagefindPromise;
  }

  function visibleWrapper() {
    return wrappers.find((wrapper) => wrapper.clientHeight > 0);
  }

  function parts(wrapper) {
    return {
      input: wrapper.querySelector('.hextra-search-input'),
      results: wrapper.querySelector('.hextra-search-results'),
      status: wrapper.querySelector('.hextra-search-status'),
      shortcut: wrapper.querySelector('kbd'),
    };
  }

  function hide(wrapper, clear = false) {
    const { input, results, shortcut } = parts(wrapper);
    results.classList.add('hx:hidden');
    results.replaceChildren();
    results.dataset.count = '0';
    if (clear) {
      input.value = '';
      input.dispatchEvent(new Event('input'));
    }
    if (shortcut) shortcut.style.opacity = input.value ? 0 : 100;
  }

  function contextFor(url) {
    let segments;
    try {
      segments = new URL(url, window.location.origin).pathname
        .split('/')
        .filter(Boolean)
        .slice(0, 2);
    } catch {
      return '';
    }
    return segments.map((segment) => labels[segment] || titleCase(segment)).join(' › ');
  }

  function titleCase(slug) {
    return decodeURIComponent(slug)
      .replace(/^\d+-/, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  function textFromHtml(html) {
    const node = document.createElement('div');
    node.innerHTML = html || '';
    return node.textContent || '';
  }

  function appendHighlighted(container, text, query) {
    const terms = query.trim().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      container.textContent = text;
      return;
    }
    const escaped = terms.map((term) => term.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&'));
    const matcher = new RegExp(`(${escaped.join('|')})`, 'gi');
    for (const part of text.split(matcher)) {
      if (!part) continue;
      if (matcher.test(part)) {
        matcher.lastIndex = 0;
        const mark = document.createElement('span');
        mark.className = 'hextra-search-match';
        mark.textContent = part;
        container.appendChild(mark);
      } else {
        matcher.lastIndex = 0;
        container.appendChild(document.createTextNode(part));
      }
    }
  }

  function setActive(results, index) {
    results.querySelector('.hextra-search-active')?.classList.remove('hextra-search-active');
    const next = results.querySelector(`[data-index="${index}"]`);
    if (next) {
      next.classList.add('hextra-search-active');
      next.scrollIntoView({ block: 'nearest' });
    }
  }

  function activeIndex(results) {
    const active = results.querySelector('.hextra-search-active');
    return active ? Number.parseInt(active.dataset.index, 10) : -1;
  }

  function render(wrapper, records, query, total) {
    const { results, status } = parts(wrapper);
    results.replaceChildren();
    results.classList.remove('hx:hidden');
    results.dataset.count = String(records.length);

    if (!records.length) {
      const empty = document.createElement('span');
      empty.className = 'hextra-search-no-result';
      empty.textContent = 'No results found.';
      results.appendChild(empty);
      status.textContent = 'No results found.';
      return;
    }

    const fragment = document.createDocumentFragment();
    let previousContext = null;
    records.forEach((record, index) => {
      if (record.context !== previousContext) {
        const prefix = document.createElement('div');
        prefix.className = 'hextra-search-prefix';
        prefix.textContent = record.context || 'Athenaeum Populi';
        fragment.appendChild(prefix);
        previousContext = record.context;
      }

      const item = document.createElement('li');
      const link = document.createElement('a');
      link.dataset.index = String(index);
      link.href = record.url;
      if (index === 0) link.classList.add('hextra-search-active');

      const title = document.createElement('div');
      title.className = 'hextra-search-title';
      appendHighlighted(title, record.title, query);
      link.appendChild(title);

      if (record.excerpt) {
        const excerpt = document.createElement('div');
        excerpt.className = 'hextra-search-excerpt';
        appendHighlighted(excerpt, record.excerpt, query);
        link.appendChild(excerpt);
      }

      link.addEventListener('click', () => hide(wrapper, true));
      item.addEventListener('mouseenter', () => setActive(results, index));
      item.appendChild(link);
      fragment.appendChild(item);
    });
    results.appendChild(fragment);
    status.textContent = `${Math.min(records.length, total)} of ${total} results shown.`;
  }

  async function search(wrapper) {
    const { input, results, status } = parts(wrapper);
    const query = input.value.trim();
    const current = (state.get(wrapper)?.sequence || 0) + 1;
    state.set(wrapper, { sequence: current });
    if (!query) {
      hide(wrapper);
      return;
    }

    results.classList.remove('hx:hidden');
    results.innerHTML = '<span class="hextra-search-no-result">Searching…</span>';
    status.textContent = 'Searching…';

    try {
      const pagefind = await loadPagefind();
      const response = await pagefind.debouncedSearch(query, {}, 120);
      if (!response || state.get(wrapper)?.sequence !== current) return;

      const data = await Promise.all(response.results.slice(0, MAX_RESULTS).map((result) => result.data()));
      if (state.get(wrapper)?.sequence !== current) return;
      const records = data.map((page) => {
        const section = page.sub_results?.[0];
        return {
          url: section?.url || page.url,
          title: section?.title || page.meta?.title || titleCase(page.url),
          excerpt: textFromHtml(section?.excerpt || page.excerpt),
          context: contextFor(page.url),
        };
      });
      render(wrapper, records, query, response.unfilteredResultCount);
    } catch (error) {
      console.error('Pagefind search failed', error);
      results.innerHTML = '<span class="hextra-search-no-result">Search is temporarily unavailable.</span>';
      status.textContent = 'Search is temporarily unavailable.';
    }
  }

  function handleKeys(wrapper, event) {
    const { input, results } = parts(wrapper);
    const count = Number.parseInt(results.dataset.count || '0', 10);
    const index = activeIndex(results);
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (count) setActive(results, Math.min(index + 1, count - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (count) setActive(results, Math.max(index - 1, 0));
    } else if (event.key === 'Enter') {
      const active = results.querySelector('.hextra-search-active');
      if (active) {
        event.preventDefault();
        active.click();
      }
    } else if (event.key === 'Escape') {
      event.preventDefault();
      hide(wrapper, true);
      input.blur();
    }
  }

  for (const wrapper of wrappers) {
    const { input, shortcut } = parts(wrapper);
    let timer;
    input.addEventListener('focus', loadPagefind);
    input.addEventListener('input', () => {
      if (shortcut) shortcut.style.opacity = input.value ? 0 : 100;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => search(wrapper), 80);
    });
    input.addEventListener('keydown', (event) => handleKeys(wrapper, event));
  }

  document.addEventListener('keydown', (event) => {
    const wrapper = visibleWrapper();
    if (!wrapper) return;
    const { input } = parts(wrapper);
    const active = document.activeElement;
    const editing = active && (['INPUT', 'SELECT', 'BUTTON', 'TEXTAREA'].includes(active.tagName) || active.isContentEditable);
    if (!editing && (event.key === '/' || (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)))) {
      event.preventDefault();
      input.focus();
    }
  });

  document.addEventListener('mousedown', (event) => {
    wrappers.forEach((wrapper) => {
      if (!wrapper.contains(event.target)) hide(wrapper);
    });
  });

  if (/iPad|iPhone|Macintosh/.test(navigator.userAgent)) {
    wrappers.forEach((wrapper) => {
      const key = wrapper.querySelector('kbd');
      if (key) key.innerHTML = '<span class="hx:text-xs">⌘</span>K';
    });
  }
})();
