/**
 * The one event an exercise component sends to the page: "this item has just
 * been answered correctly". It bubbles from the component's own element
 * (<multiple-choice>, <text-in>, <fill-in>) once, after the verdict is in the
 * item's live region. <ap-followup> listens for it on the item before it
 * (assets/js/components/shared/follow-up.js); nothing else does.
 *
 * The components keep no other shared state — nothing is stored, and a
 * reload starts every item over — so the event carries no detail.
 */
export const ITEM_CORRECT = 'ap-item-correct';

export function announceCorrect(element) {
  element.dispatchEvent(new CustomEvent(ITEM_CORRECT, { bubbles: true }));
}
