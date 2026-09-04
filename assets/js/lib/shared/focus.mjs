/**
 * Keep a keyboard or screen-reader user inside a component when it locks
 * itself on success.
 *
 * Disabling the focused Check button, or making the focused field readonly,
 * drops focus to <body> — stranding the user at the top of the document
 * right after they succeed. The fix is the same in every component that
 * grades: test containment BEFORE the lock (an Enter-key submission leaves
 * focus on the field or MathLive's shadow sink, not the button, so test the
 * whole host), lock, then move focus to the verdict's live region.
 *
 *   const restoreFocus = focusGuard(this);
 *   …lock the controls…
 *   restoreFocus(this.feedback);
 *
 * Four components carried this as two separated blocks each; one helper
 * keeps the capture-before-lock ordering a contract rather than a habit.
 */
export function focusGuard(host) {
  const hadFocus = host.contains(document.activeElement);
  return (target) => {
    if (!hadFocus || !target) return;
    target.setAttribute('tabindex', '-1');
    target.focus();
  };
}
