# Design Spec: Walk Single Page Redesign
**Designer**
**Date:** 2026-03-31
**Status:** Spec only. No files modified.
**Reference:** Guide article spec at `docs/design/guide-article-spec-march-30.md`

---

## Summary

The walk page redesign elevates it from a functional data sheet to an editorial destination. The core change is structural: the walk name, location, and stat strip move out of the sidebar and into the hero or immediately below it, so the visitor's first impression is immersive rather than administrative. Ailsa's 150-200 word description becomes the editorial centrepiece. A related guides section creates a useful content connection. The sidebar slims down to three purpose-built components. App Store buttons find a more natural home at the foot of the page.

The guide article page (`ga-` prefix) and walk page (`ws-` prefix) should feel like siblings from the same editorial system, not separate templates.

---

## New page structure (top to bottom)

Before getting into sections, here is the full recommended page order:

1. Hero - full-bleed image with walk name, location, and badges overlaid
2. Stat strip - distance, duration, difficulty, off-lead as a horizontal four-tile row
3. Two-column layout (desktop) / stacked (mobile):
   - **Content column (left):** Ailsa description + pull quote, seasonal notes, related guides, nearby walks
   - **Sidebar (right):** weather CTA, practical info table, For your dog card
4. App Store mini-CTA - full-width section, bottom of page

This order ensures: the hero delivers impact, the stat strip gives the key facts immediately, Ailsa's description is the first thing the reader reads in the body, and the sidebar is never seen before the content.

---

## Section 1 - Hero treatment

### Current state

Full-width hero image. Difficulty and off-lead badges overlaid (position not confirmed). Walk title and location tags are in the sidebar to the right, not on the hero. Hero height not specified but appears to be a standard ratio crop.

### Problem

The title and location sit in the sidebar, which means on desktop the hero is a wide image with no text identity, and on mobile the visitor has to scroll past the hero to learn where they are. The hero does no editorial work.

### Recommendation

**Move the walk title and location into the hero.** The walk name and location line should overlay the bottom of the hero image, anchored by a gradient. This is the most significant single change on the page.

**Hero height:**
- Mobile: `min-height: 380px`
- Desktop: `min-height: 500px`
- `object-fit: cover`, `object-position: center`

**Gradient overlay:**
`linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.68) 100%)`
Applied as a pseudo-element or a child div over the image. This makes title text legible on any photo.

**Walk title (overlaid, bottom of hero):**
- Font: `font-size: 28px` mobile / `font-size: 36px` desktop
- Weight: `font-weight: 700`
- Colour: `#ffffff`
- Letter-spacing: `-0.5px`
- Line-height: `1.2`
- Margin-bottom: `6px`

**Location line (below title, still in hero):**
- Format: "Richmond, London" or whatever the location tag text is
- Font: `font-size: 13px`, `font-weight: 500`
- Colour: `rgba(255, 255, 255, 0.80)`
- Letter-spacing: `0.02em`

**Hero badges (difficulty and off-lead):**
Move to the **bottom-right** of the hero, aligned with the bottom of the title on the left. Same pill style as current. This creates a clean bottom bar across the hero: title-left, badges-right, both sitting on the gradient.

- Badge font: `11px / 700`
- Badge padding: `4px 10px`
- Badge border-radius: `100px`
- Difficulty badge: colour-coded background (see Section 3)
- Off-lead badge: white background, brand green text (`#2C4A14`)
- Gap between badges: `6px`

**CSS class prefix:** `ws-hero`, `ws-hero-img`, `ws-hero-overlay`, `ws-hero-content`, `ws-hero-title`, `ws-hero-location`, `ws-hero-badges`

---

## Section 2 - Walk description (Ailsa's copy)

### Current state

A section labelled "About this walk" containing 2-3 lines of placeholder copy. The section label and short text do not give Ailsa's 150-200 word description room to breathe or feel like editorial content.

### Recommendation

**Remove the "About this walk" section label.** Ailsa's prose should open without a label - the same way a quality magazine piece does not begin with a heading that says "Article". The description is the body of the page.

**Pull quote:** Add a `pullQuote` field to the walk frontmatter (parallel to the same field on guide article pages). The pull quote should be extracted by Ailsa from her description - one sentence that captures the essential character of the walk. It renders as a styled block within the description column, positioned after the first two to three paragraphs of the description.

Pull quote treatment (same tokens as guide article pull quote):
- Font: `font-style: italic`, `font-size: 18px`, `font-weight: 400`, `line-height: 1.55`
- Left border: `3px solid #B85C2C` (Sienna)
- Padding-left: `20px`
- Margin: `28px 0`
- Colour: `var(--ink)`
- No quotation marks

**Description body text:**
- Font: `font-size: 16px`, `font-weight: 400`, `line-height: 1.75`
- Colour: `var(--ink)`
- Paragraph spacing: `margin-bottom: 18px`

**Section structure:**
- Description text (first 2-3 paragraphs)
- Pull quote
- Description text (remainder)

If the description is a single unbroken block (no paragraph breaks), the pull quote sits after approximately 80 words - roughly the midpoint of Ailsa's 150-200 word range.

If `pullQuote` is not set in frontmatter, the description renders as a single block without interruption.

**CSS class prefix:** `ws-description`, `ws-pull-quote`

---

## Section 3 - Stats presentation

### Current state

A stats grid in the sidebar showing distance, difficulty, terrain, and off-lead status. Specific visual treatment not confirmed but implied to be functional boxes.

### Problem

The stats are buried in the sidebar. A visitor scanning the page on mobile has to scroll past the hero to find the sidebar, which on mobile stacks below the content. The most important facts about a walk (how far, how hard, whether the dog can run free) should be immediately visible after the hero.

### Recommendation

**Pull the stats out of the sidebar entirely and place them in a full-width stat strip immediately below the hero**, spanning the full content width before the two-column split begins.

The stat strip is a horizontal row of four tiles, each showing one metric.

**Stat strip layout:**
- `display: grid; grid-template-columns: repeat(4, 1fr)`
- `gap: 1px` (the gaps show the background colour, creating subtle dividers without borders)
- Background on the strip itself: `var(--border)` colour (so the 1px gaps read as lines)
- Each tile background: `var(--surface)`
- Mobile: same 4-column grid (tiles are narrower but the layout holds for four short labels)
- If a tile's content is too long for the narrow mobile width, allow the label to wrap to two lines

**Each stat tile:**
- Padding: `14px 12px`
- Display: `flex; flex-direction: column; align-items: center; gap: 4px`
- Icon: Lucide icon, `20px`, colour: `var(--ink-2)` (neutral) except difficulty tile (see below)
- Value: `font-size: 16px`, `font-weight: 700`, `line-height: 1`, `color: var(--ink)`
- Label: `font-size: 11px`, `font-weight: 400`, `color: var(--ink-2)`, `letter-spacing: 0.02em`

**The four tiles:**

| Tile | Icon | Value example | Label |
|---|---|---|---|
| Distance | `map-pin` or `route` | 3.2 mi | Distance |
| Duration | `clock` | Approx 90 min | Duration |
| Terrain | `mountain` or `footprints` | Mixed | Terrain |
| Off-lead | `shield-check` or `dog` | Full off-lead | Off-lead |

**Difficulty treatment:** Difficulty is NOT a separate stat tile in this redesign - it is already displayed as a badge in the hero. Showing it again in the stat strip would repeat information. If the decision is made to include difficulty in the stat strip (replacing Duration, for example), apply a colour-coded background to that tile only: Easy = `var(--brand-tint)` / Moderate = `var(--amber-tint)` / Hard = `var(--red-tint)`. Icon and value colour should match the semantic colour in that case.

**Off-lead tile:** This is the highest-priority metric for a dog walker. The value text for off-lead status should use the brand colour `#2C4A14` when the status is "Full off-lead". Partial and on-lead use `var(--amber)` and `var(--ink-2)` respectively.

**CSS class prefix:** `ws-stat-strip`, `ws-stat-tile`, `ws-stat-icon`, `ws-stat-value`, `ws-stat-label`

---

## Section 4 - Sidebar refinements

### Current state

The sidebar contains: title, location tags, stats grid, weather CTA card, App Store/Google Play buttons, practical info table, "For your dog" card.

### Problem

The sidebar is doing too many different jobs. Title and location belong in the hero. Stats belong in the stat strip. App Store buttons are a marketing interrupt mid-content. After removing those three elements, what remains is coherent and genuinely useful to someone planning a visit.

### Recommendation

**Remove from sidebar:**
- Walk title (moved to hero)
- Location tags (moved to hero)
- Stats grid (moved to stat strip)
- App Store / Google Play buttons (moved to foot of page - see Section 6)

**Keep in sidebar:**
1. Weather CTA card
2. Practical info table
3. "For your dog" card

**Sidebar order (top to bottom):**
1. Weather CTA card
2. Practical info table
3. "For your dog" card

**Weather CTA card** - keep the current treatment. This card is genuinely contextual (the user is on a specific walk page, and checking weather for that walk's location is a useful next step). No visual changes needed to this card. It should sit at the very top of the sidebar so it is the first sidebar element seen.

**Practical info table** - keep. Parking, stiles, accessibility notes. No structural change. Possible visual refinement: replace the plain table with a stacked row list using Lucide icons for each item type (parking = `car`, stiles = `fence` or similar, accessibility = `accessibility`). Each row: icon in `var(--ink-2)` at 16px + label text at 14px/500 + value text at 14px/400. This is a visual improvement, not a structural one, and is optional for this release.

**"For your dog" card** - keep. Relevant contextual content. No structural change.

**Sidebar desktop position:** `position: sticky; top: 24px` - so it stays in view as the user scrolls the content column. This is a meaningful improvement for a tall content column.

**Sidebar width:** Keep at current or set explicitly to `260px` with `flex-shrink: 0` on the sidebar column.

**CSS class prefix:** Existing sidebar classes can be retained. New sticky rule applies to the sidebar wrapper.

---

## Section 5 - Related guides section

### Current state

None. No connection exists between walk pages and guide articles.

### Why this matters

A walk like Richmond Park has deer during the rut season - a user on that walk page would benefit from a link to the cattle/livestock guide. A summer walk near water should surface the blue-green algae guide. This connection is editorially valuable and drives guide article traffic from walk pages.

### Recommendation

**Add a `relatedGuides` frontmatter field** to each walk, containing an array of guide slugs. This is the same pattern used for `relatedWalks` on guide article pages.

```yaml
relatedGuides:
  - cattle-dog-walkers-uk
  - heatstroke-dogs-hot-weather-walking
```

The Developer should use `$.Site.GetPage` with the guide slug to resolve each entry, matching the pattern already used for walk references on guide article pages.

**Section placement:** In the content column, after the walk description and seasonal notes, before the nearby walks section. This is the natural reading position - the visitor has read about the walk and is now planning their visit. Guide links serve that planning intent.

**Section label:** "Good to know" - not "Related guides" or "See also". The label should feel editorial, not taxonomic.

**Maximum guides shown:** 3. If more than 3 slugs are provided in frontmatter, show only the first 3.

**Card treatment:**

Each guide card is a horizontal card - the full width of the content column, stacked vertically with `gap: 10px`.

- Height: auto (content-sized, typically around 64px)
- Background: `var(--surface)`
- Border: `1px solid var(--border)`
- Border-radius: `12px`
- Border-left: `3px solid var(--brand-tint)` - subtle brand anchor, not Sienna (Sienna is for pull quotes)
- Padding: `14px 16px`
- Layout: `display: flex; align-items: center; gap: 14px`
- Box-shadow: `0 1px 6px rgba(0,0,0,0.05)`
- Active/hover: `transform: scale(0.98)`, `transition: transform 0.15s ease`

Card contents (left to right):
- Category pill: `font-size: 11px`, `font-weight: 600`, `color: var(--brand)`, `background: var(--brand-tint)`, `padding: 3px 8px`, `border-radius: 100px` - pulled from guide's `category` frontmatter field
- Guide title: `font-size: 14px`, `font-weight: 600`, `color: var(--ink)`, `flex: 1`, single line with ellipsis overflow
- "Read guide" link text or a Lucide `arrow-right` icon at `16px`, `color: var(--ink-2)`, `flex-shrink: 0`

The entire card is a link (`<a>` element) pointing to the guide page permalink. No separate button needed.

**If `relatedGuides` is empty or not set:** The section does not render. No empty state or placeholder.

**CSS class prefix:** `ws-guides`, `ws-guides-label`, `ws-guide-card`, `ws-guide-category`, `ws-guide-title`

---

## Section 6 - App Store buttons

### Current state

App Store and Google Play buttons sit in the sidebar, mid-page, positioned after the stats grid and weather CTA.

### Problem

Mid-page app install prompts feel like an interrupt. The visitor is in the middle of reading about a walk. The buttons are a conversion ask at the wrong moment. They also break the sidebar's coherence as a planning tool.

### Recommendation

**Remove App Store buttons from the sidebar entirely.**

**New position:** A full-width CTA strip at the bottom of the page, after the nearby walks section and before the footer. This is the right conversion moment - the visitor has read the full walk page, seen the nearby walks, and is ready to decide whether to get the app.

**CTA strip design:**

- Background: `var(--brand-tint)` (`#EDF2E8`) - light brand green, not full brand green
- Border-top: `1px solid rgba(44, 74, 20, 0.15)`
- Padding: `32px 20px`
- Layout: centred column on mobile; can remain centred column on desktop (do not go full-bleed dark for this - it is secondary)
- Tagline: "Plan this walk with live weather and dog-safe route info" - 16px/600, `var(--brand)`, centred, `margin-bottom: 16px`
- Store badges: existing App Store and Google Play badge images, side by side, centred, `gap: 12px`
- Badge height: `40px`

**On mobile:** Same treatment. The strip sits naturally between nearby walks and the footer.

**Alternative:** If the App Store and Google Play badges are already in the site footer, consider whether this page-level CTA strip is even necessary. The footer badges serve the same function with less intrusion. Confirm with the PO whether the walk page should have its own App Store CTA or rely on the footer. This spec assumes the walk page should have its own CTA, but it should be confirmed before implementation.

**CSS class prefix:** `ws-app-cta`, `ws-app-cta-tagline`, `ws-app-cta-badges`

---

## Section 7 - Mobile layout

### Current state

Implied single-column stack: hero, then content, then sidebar elements stacked below.

### Specific mobile recommendations

**Hero (mobile):**
- `min-height: 380px` (shorter than desktop `500px`)
- Title font: `24px` (reduced from desktop `36px`) - Richmond Park is a long name; 24px is readable without wrapping badly
- Location line: `12px` (reduced from desktop `13px`)
- Badges: remain bottom-right, same as desktop

**Stat strip (mobile):**
- Keep the 4-column grid. At narrow widths (below 360px) the tiles become very narrow, but the content (icon + short value + short label) should hold. Tile value can drop to `14px` if needed. Label can be removed at very narrow widths with the value self-explanatory (e.g. "3.2 mi", "Full off-lead").
- If 4 columns prove too cramped in testing, use a 2x2 grid (`grid-template-columns: repeat(2, 1fr)`) at mobile breakpoint only.

**Two-column layout (mobile):**
The two-column split collapses to a single column. The recommended mobile stack order is:

1. Hero
2. Stat strip
3. Ailsa description + pull quote
4. Seasonal notes
5. Related guides (full width, stacked cards)
6. **Weather CTA card** (moved up from sidebar - this is the highest-value sidebar item on mobile and should not be buried)
7. Practical info table
8. "For your dog" card
9. Nearby walks
10. App Store CTA strip

The weather CTA card appears earlier in the mobile stack than its desktop sidebar position because on mobile it would otherwise appear very late in the page after all the content column items. A walk planner on mobile needs the weather context early.

**Related guide cards (mobile):**
Full width, same horizontal card treatment as desktop. Stack vertically with `gap: 10px`. No change to the card design.

**Typography (mobile):**
- Ailsa description: `15px` / `1.7` line-height (1px reduction from desktop is acceptable and gives more readable line lengths on narrow screens)
- Pull quote: `17px` / `1.55` (1px reduction)
- Section labels: `11px` / `600` / `letter-spacing: 0.06em` / `text-transform: uppercase` / `color: rgba(44,74,20,0.55)` (brand green at low opacity) - consistent with website section label treatment

**Nearby walks (mobile):**
Horizontal scroll carousel if more than 2 cards. Matches the current treatment.

---

## New frontmatter fields

Two new fields are needed on walk pages. Both are optional - pages without them render without those sections.

| Field | Type | Purpose |
|---|---|---|
| `pullQuote` | String | Single sentence from Ailsa's description, rendered as styled pull quote in description column |
| `relatedGuides` | Array of strings | Guide article slugs (max 3 rendered). E.g. `["cattle-dog-walkers-uk", "heatstroke-dogs-hot-weather-walking"]` |

---

## CSS class reference

All new classes use the `ws-` prefix (walk single) to distinguish from `ga-` (guide article).

| Class | Element |
|---|---|
| `ws-hero` | Hero wrapper |
| `ws-hero-img` | Hero `<img>` element |
| `ws-hero-overlay` | Gradient pseudo-element or div |
| `ws-hero-content` | Bottom bar containing title, location, badges |
| `ws-hero-title` | Walk name `<h1>` |
| `ws-hero-location` | Location line |
| `ws-hero-badges` | Badge group wrapper |
| `ws-stat-strip` | Full-width stat row below hero |
| `ws-stat-tile` | Individual stat cell |
| `ws-stat-icon` | Icon within tile |
| `ws-stat-value` | Metric value |
| `ws-stat-label` | Metric label |
| `ws-description` | Ailsa description wrapper |
| `ws-pull-quote` | Pull quote block |
| `ws-guides` | Related guides section wrapper |
| `ws-guides-label` | "Good to know" section label |
| `ws-guide-card` | Individual guide card (`<a>` element) |
| `ws-guide-category` | Category pill within card |
| `ws-guide-title` | Guide title within card |
| `ws-app-cta` | App Store CTA strip wrapper |
| `ws-app-cta-tagline` | Tagline text within CTA strip |
| `ws-app-cta-badges` | Badge row within CTA strip |

---

## What to leave unchanged

- Card overlay treatment on nearby walks cards - locked
- Filter chip design on walks index page - not in scope
- Walk card badge styles (Sniffout Pick, Hidden Gem) - not in scope
- Footer - not in scope
- Seasonal notes pills treatment - functional and appropriate, no changes needed

---

*Spec produced by Designer, 2026-03-31. No files modified.*
