# Design Spec: Burger Menu Refinement and Index Page Pagination
**Designer**
**Date:** 2026-03-31
**Status:** Recommendations only. No files modified.

---

## Task 1 - Mobile burger menu refinement

### Assessment

The current implementation reads as a landing page hero, not a utility navigation. 28px/700 is the kind of typographic weight used for page titles or hero headlines. In a navigation overlay it feels like the links are shouting. The full-screen white overlay with no visual anchoring makes it feel like the app has disappeared rather than a menu having opened. The plain text "x" close button has no affordance and no tap target.

The menu is a utility moment. It needs to feel considered and on-brand, but it should get out of the way quickly. It is not a showcase.

### Recommendation

**Panel format: slide-in from right**

Replace the full-screen overlay with a panel that slides in from the right edge of the screen. The panel should occupy 80% of screen width with a maximum width of 320px. The remaining 20% left side shows the page content underneath a semi-transparent scrim (`rgba(0,0,0,0.35)`), which reinforces that the user can tap outside to dismiss and maintains spatial context.

A slide-in panel is more deliberate than a full-screen cover. It signals a secondary layer rather than a page replacement. On a product that is trying to feel premium, that distinction matters.

**Animation:** `transform: translateX(100%)` to `translateX(0)` over `250ms` with `cubic-bezier(0.32, 0.72, 0, 1)` (a gentle deceleration). The scrim fades in simultaneously over `200ms`. Dismiss is the reverse.

**Panel background:** `var(--surface)` (white in light mode, `#1E1E1C` in dark mode). No texture, no gradient. Clean.

**Brand accent:** A single 3px left border on the panel at the top edge using `var(--brand)` (`#2C4A14`). This is enough to anchor the panel to the brand without being decorative. Do not add a logo or wordmark to the panel - the logo is already in the main header and repeating it inside the menu adds noise.

---

**Nav link values**

| Property | Current | Recommended |
|---|---|---|
| font-size | 28px | 17px |
| font-weight | 700 | 600 |
| padding | 20px 0 | 16px 20px |
| letter-spacing | (not set) | 0.01em |
| color (default) | (not specified) | `var(--ink)` |
| color (active/current page) | (not specified) | `var(--brand)` |
| border-bottom | 0.5px | 1px solid `rgba(0,0,0,0.06)` |

The padding moves from vertical-only to full `16px 20px` because the link now lives inside a panel with horizontal extent rather than centred on a full-screen overlay. 17px/600 is the same weight as a prominent body label - readable and clear without dominating.

Active state (current page link): colour shifts to `var(--brand)`. No bold increase. A small filled circle or dot `6px` diameter in `var(--brand)` to the left of the link text is optional but adds a clean active indicator without requiring a background highlight.

**Close button**

Replace the plain text "x" with a Lucide `X` icon (18px stroke) inside a circular container:
- Size: 40x40px
- Background: `var(--bg)` (`#F0EDE6` in light mode)
- Border: 1px solid `var(--border)`
- Border-radius: 50%
- Position: top-right of panel, `16px` from top and right edges
- Active state: `transform: scale(0.94)` at `transition: transform 0.12s ease`

The container gives the button a clear tap target and makes it look intentional. The `--bg` fill rather than white distinguishes it slightly from the panel surface.

**Tap-outside-to-dismiss:** Tapping the scrim area closes the panel. This is standard behaviour and reduces the reliance on the close button.

---

**Summary of panel structure (top to bottom)**

1. Close button in top-right corner of panel
2. 24px top padding before first link
3. Nav links in a vertical stack with 1px dividers
4. A secondary divider after main nav links, followed by any utility links (Settings, About) at a smaller size - 14px/500, `var(--ink-2)` colour
5. Bottom of panel: safe-area padding only, no footer content

---

## Task 2 - Guides and Walks index page pagination

### Assessment

Continuous scroll is fine when a page has 6-12 items. It starts to work against the user when the item count grows past 20-30, particularly on a filtered grid where the user may not know how much content lies below the fold. The filter chips at the top help, but if filters return 30+ results the page still becomes unwieldy.

Numbered pagination is the wrong approach for both pages. It is a desktop web pattern that breaks the browsing flow on mobile, creates artificial destination points ("I want page 3"), and feels at odds with a premium mobile-first product. It also does not interact well with filters - resetting to page 1 when a filter changes is a friction point.

The right approach is progressive disclosure: show a curated initial count, let the user request more. The filter chips do the heavy lifting; the load-more mechanism handles the long tail.

### Recommendation

**Use load-more on both pages. Do not use numbered pagination on either.**

The Guides and Walks pages serve different content types and should use different initial counts, but the same mechanism.

---

**Guides page**

Initial card count: **6**

Guides are slow-growing editorial content. At launch there are fewer than 10 published guides, meaning the load-more button may not appear at all initially - which is fine. When the count grows past 6, the button appears. An initial count of 6 fits naturally into a two-column grid (3 rows) without looking sparse or excessively truncated.

If all guides in a filtered category fit within 6 cards, the load-more button does not appear. No artificial truncation just for consistency.

---

**Walks page**

Initial card count: **12**

Walks are the product's core index. 12 cards fills a two-column grid to 6 rows - enough to give a sense of the range without overwhelming the page. The filter chips (off-lead, difficulty, terrain, distance) are the primary navigation tool and should be visually prominent above the grid. After filtering, 12 cards per load is still appropriate regardless of how narrow the filter is.

---

**Load-more button design**

The button sits centred below the card grid with `24px` margin above it and `32px` margin below (before the footer).

Style:
- Appearance: outlined pill, not filled
- Label: "Show more walks" / "Show more guides" (lowercase, not all-caps)
- Font: 14px/600, Plus Jakarta Sans
- Color: `var(--brand)` text, `var(--brand)` border at `1.5px`
- Background: transparent (light mode); transparent (dark mode)
- Border-radius: `var(--radius-pill)` (100px)
- Padding: `12px 28px`
- Active state: background fills to `var(--brand-tint)`, `transform: scale(0.97)`
- Width: auto (content-sized), centred

An outlined secondary style is intentional. The load-more action is a continuation, not a call to action. A filled brand-green button would compete with the card content and over-emphasise the action.

**Count label above the button**

Show a plain text count in `var(--ink-2)` at 13px/400 immediately above the button:

"Showing 12 of 47 walks" / "Showing 6 of 11 guides"

This tells the user how much content exists and how far through it they are. It resets correctly when filters change. When all content is shown, replace the button and label with a single line: "All [n] walks shown" in `var(--ink-2)` at 13px/400 - no button.

**Filter interaction**

When the user applies or removes a filter chip, the grid resets to the initial card count (12 for walks, 6 for guides) and the count label updates to reflect the filtered total. The load-more button reappears if the filtered result set exceeds the initial count. This is the expected behaviour and avoids the "I was on page 3, now I am back at page 1" problem that numbered pagination creates.

---

**Summary comparison**

| | Guides | Walks |
|---|---|---|
| Mechanism | Load more | Load more |
| Initial count | 6 | 12 |
| Button style | Outlined pill | Outlined pill |
| Button label | "Show more guides" | "Show more walks" |
| Count label | Yes | Yes |
| Filter resets count | Yes | Yes |
| End state | "All n guides shown" | "All n walks shown" |

---

*Recommendations produced by Designer, 2026-03-31. No files modified.*
