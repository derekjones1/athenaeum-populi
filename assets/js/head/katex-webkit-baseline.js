/* WebKit lays out KaTeX's vlist-t2 inline-tables with their baseline at the
   table bottom in some zoom states (observed Safari 26.5: a 3-row cases brace
   sits a full depth below its rows), and separately fails to re-run layout
   after the KaTeX web fonts swap in, freezing fallback-metric positions until
   a zoom or resize. Both defects are invisible to the markup, so this shim
   measures instead of UA-sniffing: next to each vlist-t2 it drops a
   zero-size baseline strut, checks whether the element's bottom sits a depth
   below the local baseline (correct) or on it (the WebKit bug), and corrects
   only the elements that are actually wrong via vertical-align. Clearing and
   re-probing on every pass keeps it idempotent and lets it undo itself when
   an engine state change (zoom back to a healthy level) removes the bug; the
   style writes double as the reflow the font swap failed to trigger. On
   healthy engines every probe passes and the pass is a no-op. */
(function () {
  'use strict';
  var pending = false;

  function correct() {
    pending = false;
    var t2s = document.querySelectorAll('.katex .vlist-t2');
    if (!t2s.length) return;
    var entries = [];
    var i, el, depthRow, depthCell, strut, e;
    for (i = 0; i < t2s.length; i++) {
      t2s[i].style.verticalAlign = '';
    }
    for (i = 0; i < t2s.length; i++) {
      el = t2s[i];
      depthRow = el.children[1];
      depthCell = depthRow && depthRow.querySelector('.vlist');
      if (!depthCell) continue;
      strut = document.createElement('span');
      strut.style.cssText = 'display:inline-block;width:0;height:1px;vertical-align:baseline;';
      el.after(strut);
      entries.push({ el: el, depthCell: depthCell, strut: strut });
    }
    for (i = 0; i < entries.length; i++) {
      e = entries[i];
      e.depth = e.depthCell.getBoundingClientRect().height;
      e.bottom = e.el.getBoundingClientRect().bottom;
      e.baseline = e.strut.getBoundingClientRect().bottom;
    }
    for (i = 0; i < entries.length; i++) entries[i].strut.remove();
    for (i = 0; i < entries.length; i++) {
      e = entries[i];
      if (e.depth >= 2 && Math.abs(e.bottom - e.baseline) < e.depth / 2) {
        e.el.style.verticalAlign = -e.depth + 'px';
      }
    }
  }

  function schedule() {
    if (pending) return;
    pending = true;
    requestAnimationFrame(correct);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', schedule);
  } else {
    schedule();
  }
  window.addEventListener('load', schedule);
  window.addEventListener('resize', schedule);
  window.addEventListener('pageshow', schedule);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);
})();
