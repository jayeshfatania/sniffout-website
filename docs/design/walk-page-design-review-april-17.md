# Walk Page Design Review - April 17 2026

**Reviewer:** UX/UI Designer
**Pages reviewed:** Kingston to Teddington Lock (kingston-teddington-lock-thames-path), Teddington to Richmond (teddington-to-richmond-thames-path), Richmond Park (baseline - richmond-park-dog-walk)
**Status:** Review only - no fixes applied

---

## Summary

The upgraded linear walk pages (Kingston and Teddington) are substantially better than the baseline Richmond Park page and the core design system is well applied. The biggest issues are two functional bugs: a text concatenation in the For Your Dog section that renders "fullOff-lead throughout" and "partialOff-lead in sections" without a space, and a raw blockquote element in the Teddington body copy that has no walk-warning styling and renders as browser-default unstyled markup. Beyond those P1 issues, there are several P2 layout problems including the sidebar sticking at a top offset that conflicts with the visible sticky header, unstructured body copy for practical info sections, and the linear stat strip squeezing five tiles without a horizontal scroll affordance on narrow mobile screens.

---

## Layout and Spacing

### Issue 1
- **Priority:** P2
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** The sidebar has `position: sticky; top: 24px` in CSS (line 3752). The site header has `position: sticky; top: 0; z-index: 100`. On desktop the sidebar sticks 24px below the top of the viewport, which means it partially overlaps the fixed site header on scroll. The Before You Go label can disappear behind the header on shorter viewports. The `top` value should account for the header height (approximately 52px) plus a small gap.
- **Recommended fix:** Change the sidebar `top` value from `24px` to approximately `68px` to clear the sticky site header height.

### Issue 2
- **Priority:** P2
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** Practical information fields ("Seasonal notes:", "Dog-friendly stops:", "Parking:", "Dog waste bins:" on Teddington) are output as markdown bold headings (`**Heading:**`) inside the `ws-description` div and `ws-faq-outer` div. The CSS rule `.ws-content strong { display: block; margin-top: 24px; font-size: 15px; }` causes these to render as standalone block-level bold text in the content column. On Kingston this produces "Seasonal notes:" and "Dog-friendly stops:" as inline bold headings in a paragraph stream. On Teddington, "Parking:", "Dog waste bins:", and "Dog-friendly stops:" all appear as bold headers in the description body. This information belongs in structured sidebar rows, not as raw bold headings in body copy. The content is readable but looks unfinished compared to the card-based sidebar.
- **Recommended fix:** Move parking, dog waste, and dog-friendly stops content into dedicated frontmatter fields and render them via `ws-info-row` elements in the Before You Go or For Your Dog sidebar sections rather than as body copy.

### Issue 3
- **Priority:** P3
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** The section ordering in the content column is: description, founder's tip, route breakdown, gallery, weather card, mobile sidebar, FAQ. The walk warning partial is called at position 3 (after route breakdown) but Teddington's Petersham warning is in the description body as a blockquote rather than via the `ws-walk-warning` partial. This means the warning appears mid-description rather than at a visually prominent break point. On Kingston there is no walk warning at all, which is correct. The structural inconsistency between the two pages means the Teddington warning is buried.
- **Recommended fix:** Move the Teddington Petersham warning into the `walkWarning` frontmatter field so it renders via the `ws-walk-warning` partial with the correct red-bordered treatment.

### Issue 4
- **Priority:** P3
- **Pages affected:** Kingston
- **Description:** The seasonal notes section renders a hardcoded "Tick season - Mar-Oct - Check after every visit" green pill on every walk page regardless of terrain (line 146 of single.html template). Kingston's Thames Path route is almost entirely riverside paved and grassy - a blanket tick season pill here is not wrong but it is the same unsegmented pill as would appear on a woodland walk. The Ground-nesting birds seasonal note from the `hazards: [ground-nesting-birds]` field does not produce a dedicated seasonal pill - it only appears in the description body text. The seasonal pills section therefore shows one generic tick pill and nothing about the flagged ground-nesting bird hazard.
- **Recommended fix:** Add a conditional seasonal pill for `ground-nesting-birds` hazard type in the seasonal notes section to match how deer and ticks are handled.

---

## Typography

### Issue 5
- **Priority:** P1
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** In the For Your Dog section, both the sidebar (desktop) and the mobile info card render the off-lead value as a concatenated string with no space between the value and the sublabel. The template renders `{{ .Params.offLead }}` as a `<span class="ws-info-val">` immediately followed by the `<span class="ws-info-sublabel">` inside a `<div class="ws-info-val-wrap">`. The `ws-info-val` has `display: block` and `ws-info-sublabel` has `display: block`, so they sit on separate lines visually. However the live page renders "fullOff-lead throughout" and "partialOff-lead in sections" as a single string. The `ws-info-val` span is `display: block` but the raw value "full" or "partial" appears visually joined to the sublabel text. This is a P1 because it is unreadable and appears broken.
- **Recommended fix:** Either capitalise the offLead frontmatter value ("Full", "Partial") or add a text-transform rule, and ensure there is clear visual separation between the raw value and the sublabel. Consider whether the raw lowercase frontmatter value should be displayed to users at all, or whether it should be mapped to display-friendly text like "Full off-lead" before rendering.

### Issue 6
- **Priority:** P2
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** The `ws-stat-strip--linear` uses 5-column grid (`grid-template-columns: repeat(5, 1fr)`) with the Start and End stat values set to `font-size: 11px` (mobile) and `13px` (desktop above 768px). The Start and End values contain full postcodes and place names (e.g. "Canbury Gardens car park, Lower Ham Road, KT2 5AU"). At 11px these strings are below the 14px minimum readable size on mobile and will truncate or wrap unpredictably inside a narrow 20% column. There is no horizontal scroll on the stat strip, so all 5 tiles must compress.
- **Recommended fix:** Either truncate Start/End values to shorter display strings in frontmatter (e.g. "Lower Ham Road, KT2 5AU"), or allow the stat strip to scroll horizontally on mobile with `overflow-x: auto`, or reduce to 4 tiles on mobile by stacking Start and End into a single combined tile.

### Issue 7
- **Priority:** P3
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** The founder's tip paragraph text is set at `font-size: 14px; line-height: 1.65; color: var(--ink-2)` (lines 3553-3558 in CSS). The Kingston tip is 93 words. At 14px/1.65 inside a card with 24px padding this reads slightly small against the description body which is 15px (mobile) / 16px (desktop). The colour at `--ink-2` (#555555) is noticeably lighter than the body copy (#1A1A1A), which reinforces the secondary feel but makes the founder's personal tip harder to read than it should be given its editorial weight.
- **Recommended fix:** Increase founder tip body text to 15px to match the description body size, keeping the #555555 colour to preserve the tonal distinction.

### Issue 8
- **Priority:** P3
- **Pages affected:** All
- **Description:** The route breakdown section title uses `.ws-route-breakdown .ws-section-title` at `font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em` and colour `rgba(44,74,20,0.55)` (line 3568). This is the same visual treatment as the section labels elsewhere on the page. However the route breakdown title says "Route breakdown" in title case rendered as all-caps by the CSS - it reads fine but the font-size at 12px is on the small side for a card header. Most other cards use implicit labelling via section labels above them.
- **Recommended fix:** No change needed to the CSS itself but worth monitoring. The 12px all-caps label inside the card header could be bumped to 13px in a future polish pass.

---

## Icons

### Issue 9
- **Priority:** P3
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** The stat strip uses a `check-circle` style icon (Lucide checkmark in a circle) for the Off-lead tile. This communicates "approved" or "done" rather than off-lead walking status. For a "partial" off-lead walk the same icon is used but in amber, which creates a mixed signal (checkmark = approved, amber = caution). The icon communicates status inconsistently across off-lead states.
- **Recommended fix:** Consider a dog with a lead/unleash icon for this stat tile rather than a checkmark, to communicate the concept more directly. This is a polish note - the current implementation is functional.

### Issue 10
- **Priority:** P3
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** In the Before You Go sidebar, the Getting Back row uses a curved-back-arrow icon (polyline `9 10 4 15 9 20` + path `M20 4v7`). This communicates "return" or "undo" reasonably well. Within the `ws-return-list`, each option has a transport mode icon (train, bus, or a generic car shape). The generic "walk back" option uses a car-shaped icon (`M19 17H5a2 2 0 0 1-2-2l1-5h16l1 5`) which is a car body - not a walking figure. The walk-back return option shows a car icon, which is semantically incorrect and potentially misleading for the primary recommended option (walk back the same way).
- **Recommended fix:** Replace the default return option icon (currently car) with a footsteps or person-walking icon for the "walk" type return option.

---

## Gallery

### Issue 11
- **Priority:** P2
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** The gallery arrow buttons use `transform: translateY(-70%)` (line 3424 in CSS) rather than `-50%`. This means the arrows are positioned approximately 70% above their natural centre point relative to their parent wrapper, which places them near the top of the gallery rather than vertically centred on the image area. The gallery items have `padding: 16px 0` above and below, the image itself is `aspect-ratio: 4/3`, and captions sit below. The -70% offset will render the arrows noticeably higher than the visual centre of the images. On desktop at 380px wide cards this is more visible.
- **Recommended fix:** Change `transform: translateY(-70%)` to `transform: translateY(-50%)` to correctly centre the arrows on the image strip height.

### Issue 12
- **Priority:** P3
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** The gallery has no lightbox on mobile - the `ws-lightbox` overlay is present in the DOM but the WebFetch analysis confirmed the lightbox fires on image click. On mobile, the lightbox renders at full `100vw/100vh` with `padding: 24px` and the close button is `position: absolute; top: 16px; right: 20px`. The close button (`font-size: 28px; padding: 4px 8px`) meets the 44px minimum tap target requirement when counting both dimensions. However the lightbox nav buttons are `width: 44px; height: 44px` which exactly meets the 44px minimum with no margin. On smaller phones (375px wide) the left and right nav buttons (`left: 16px; right: 16px`) leave only 16px clearance from the viewport edge, which is acceptable but tight.
- **Recommended fix:** Increase lightbox nav button size to 48px on mobile for more comfortable tapping. Minor polish item.

### Issue 13
- **Priority:** P3
- **Pages affected:** Kingston (5 images), Teddington (6 images)
- **Description:** The gallery `scrollAmount` is hardcoded at `300` pixels in JavaScript (template line 203). The gallery card width is 280px mobile, 320px at 640px+, and 380px at 1024px+. At desktop sizes the scroll amount of 300px is less than one card width (380px), meaning one click of the next arrow advances less than one full card. Users expect the next click to advance one card width.
- **Recommended fix:** Calculate scrollAmount dynamically based on the first gallery item's `offsetWidth` rather than hardcoding 300.

---

## Jump Links Bar

### Issue 14
- **Priority:** P2
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** The jump bar is `position: sticky; top: 0; z-index: 80` (line 3209-3211). The site header is `position: sticky; top: 0; z-index: 100`. Both elements have `top: 0`. The site header should take precedence with z-index 100 vs 80, and both are sticky at top 0. When scrolling, the jump bar will attempt to stick at the very top of the viewport and will be covered by the site header which also sticks at top 0. The jump bar effectively disappears behind the header rather than stacking below it. This is a known conflict between two adjacent sticky elements both positioned at `top: 0`.
- **Recommended fix:** Set the jump bar to `top: 52px` (matching the site header height) so it sticks immediately below the header rather than behind it.

### Issue 15
- **Priority:** P3
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** The jump bar has no active state indicator (no `.active` class toggle). The `ws-jump-link:hover` state applies `border-bottom: 2px solid var(--brand)` on hover, but there is no JavaScript updating the active state as the user scrolls through sections. The "Description" link looks identical to "FAQ" whether the user is at the top or bottom of the page.
- **Recommended fix:** Add an IntersectionObserver that adds an `is-active` class to the corresponding jump link as sections scroll into view, with matching CSS for `.ws-jump-link.is-active`.

---

## Sticky Scroll Title

### Issue 16
- **Priority:** P1
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** The sticky title is `position: fixed; top: 0; z-index: 90`. The site header is `position: sticky; top: 0; z-index: 100`. When the sticky title slides in (class `is-visible` applied), it slides into a position at `top: 0`, which is the same position as the site header. The site header has z-index 100 and the sticky title has z-index 90, so the sticky title slides under the site header rather than replacing or stacking below it. The title is not visible at all when the header is present - it slides in behind the sticky header. This is confirmed by the WebFetch response which showed `class="is-visible"` on the sticky title on page load (before any scroll).
- **Recommended fix:** Either increase the sticky title z-index above 100 (if it should replace the header on scroll) and hide the site header when the sticky title is visible, or position the sticky title at `top: 52px` to display it immediately below the site header.

### Issue 17
- **Priority:** P2
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** The IntersectionObserver on the sticky title observes `.ws-hero` with `{ threshold: 0 }`. This means the sticky title becomes visible the instant any pixel of the hero leaves the viewport - i.e., immediately on any scroll. For a hero with `min-height: 380px` (mobile) or `500px` (desktop), this triggers very early. In practice the WebFetch confirmed `class="is-visible"` on page load itself, which suggests the observer may be triggering at zero scroll depth due to the hero not being fully in the viewport at paint time (possible if the page renders below the fold of a short device). The title would then appear stuck on screen from the start of the page visit.
- **Recommended fix:** Add a small threshold (e.g. `{ threshold: 0.1 }`) to delay the sticky title until the hero is substantially out of view, or observe the hero's bottom edge specifically.

---

## Founder's Tip

### Issue 18
- **Priority:** P3
- **Pages affected:** Kingston only (Teddington does not have a founderTip field)
- **Description:** The founder's tip card has `border-left: 4px solid #B85C2C` (sienna) as expected by the design system. The label uses `color: #B85C2C` and includes a heart SVG icon inline at `width: 16px; height: 16px`. The icon renders as an outline heart (Lucide heart path) in sienna. The card renders correctly against the design spec. The one observation is that Teddington has no founder tip - the `founderTip` frontmatter field is absent from `teddington-to-richmond-thames-path.md`. Given this is also described as a personal route (Jay and Luna walk this too, based on the gallery), the absence of a founder tip is a content gap rather than a design bug.
- **Recommended fix:** Content gap only - no CSS fix needed. Consider adding a `founderTip` to the Teddington page in a future content pass.

---

## Route Breakdown

### Issue 19
- **Priority:** P2
- **Pages affected:** Kingston only (Teddington has no routeLegs frontmatter)
- **Description:** On mobile viewports below 480px, the route leg layout switches to `flex-direction: column; align-items: flex-start; gap: 6px` (line 3643). The `ws-route-leg-right` div then takes `width: 100%`. This means the distance, time, and status pill stack below the leg name rather than sitting inline. For a leg like "Optional: Ham Lands detour" with `distance: 0.6 km+` and a long note, the stacked layout is fine. However the `ws-route-leg-right` has `gap: 10px` between meta items but no explicit width constraints on each `ws-route-leg-meta` span. At very narrow widths (320px devices) the three items (distance, time, status pill) all in a row at 100% width may not wrap gracefully.
- **Recommended fix:** On the mobile breakpoint, consider stacking the distance/time together and the status pill separately, or using a flex-wrap on the right column. Low-priority fix.

### Issue 20
- **Priority:** P3
- **Pages affected:** Teddington
- **Description:** The Teddington page has no `routeLegs` frontmatter, so no route breakdown renders. The walk is 6 km with meaningful waypoints (Teddington Lock, Ham Lands, Petersham diversion, Richmond Hill, Richmond Bridge). The absence of a route breakdown on a 6 km walk with multiple dog-rule changes (ban zone, off-lead area, lock lead zone) makes the page harder to navigate than the Kingston page. This is a content gap.
- **Recommended fix:** Add `routeLegs` to the Teddington frontmatter in a future content pass. Not a CSS or template issue.

---

## Walk Warning (Teddington)

### Issue 21
- **Priority:** P1
- **Pages affected:** Teddington
- **Description:** The Teddington page contains a critical dog-ban notice (Petersham Meadows PSPO, criminal offence) that is authored as a markdown blockquote in the main body content (`> **Important for dog walkers...`). The `ws-walk-warning` partial exists and renders with a red-bordered card, red title, and warning icon (line 3654 CSS). The blockquote element in the body has no dedicated CSS styling at all - there are zero `blockquote` selectors in `main.css`. The warning therefore renders as an unstyled browser-default blockquote: indented, no border colour, no background, no icon. This is a P1 because the most important safety information on the page has no visual distinction from body text. A user could easily miss it.
- **Recommended fix:** Move the Petersham warning from the markdown body into the `walkWarning` frontmatter block so it renders via the `ws-walk-warning` partial. Alternatively, add explicit blockquote CSS to the walk content area as a short-term fix, but the frontmatter route is cleaner and consistent with the template design.

---

## Hero Image

### Issue 22
- **Priority:** P3
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** The hero overlay is `linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.68) 100%)`. At 68% opacity black at the bottom, text contrast over the gradient is good. However the off-lead badge for "partial" status uses `background: rgba(255,255,255,0.85); color: #7A5C00` (line 3137). At 85% opacity white over a dark gradient, the badge is legible. The "Linear walk" badge uses `background: rgba(255,255,255,0.85); color: var(--ink)` where `--ink` is `#1A1A1A`. This is legible. The difficulty badge for "easy" uses `background: #2C4A14; color: #fff` which is a solid brand green and fully legible. The badge stack (difficulty + off-lead + linear) renders as three stacked pills on the right of the hero. On mobile at `min-height: 380px` and hero content `padding: 20px`, the three-badge stack is approximately 80px tall and could push the hero title text left into a narrow column. Worth monitoring with long walk titles.
- **Recommended fix:** Test with a long title plus three badges at 375px viewport width. If the title wraps to three lines, consider a max-height or badge limit.

---

## Overall Consistency

### Issue 23
- **Priority:** P2
- **Pages affected:** Kingston vs Teddington
- **Description:** The Kingston page has: founder's tip, route breakdown, 4-image gallery. The Teddington page has: no founder's tip, no route breakdown, 6-image gallery. The Teddington body copy contains structural content (parking, dog waste bins, dog-friendly stops as bold headings) that on Kingston would be in the sidebar or in structured frontmatter. The two "upgraded" pages use the same template but Teddington's content model is substantially less complete. This is visible to any user who visits both: Kingston feels like a finished editorial product, Teddington feels like a richer content page that was partially assembled.
- **Recommended fix:** Align Teddington to Kingston's content model - add founderTip, routeLegs, and move parking/dog waste content into frontmatter fields. Content task not a CSS task.

### Issue 24
- **Priority:** P2
- **Pages affected:** Kingston vs Richmond Park (baseline)
- **Description:** Richmond Park uses the older non-linear template path (no `ws-stat-strip--linear`, no Start/End tiles). Its stat strip shows Distance, Duration, Terrain, Off-lead across 4 tiles with `font-size: 14px` value text (mobile). The Kingston linear strip shows 5 tiles with `font-size: 11px`. The visual weight difference between the two pages is significant - Richmond Park's 4-tile strip feels more readable and appropriately weighted. The 11px stat values on the linear strip on small phones will be the smallest text on the page and may not meet readability standards for older users.
- **Recommended fix:** On mobile, either switch the linear strip to a 2-column Start/End layout (stacked pair) with the other 3 tiles in a separate row, or allow horizontal scroll on the stat strip.

---

## Accessibility

### Issue 25
- **Priority:** P2
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** The hero image renders as `<img class="ws-hero-img" src="..." alt="{{ .Title }}" />`. The alt text is the walk title, which is descriptive. However the hero image is purely decorative in context (the title is rendered as text over it). Using the walk title as alt text on the image means screen readers announce the title twice: once for the image alt and once for the `<h1>` immediately below. This is redundant and could be confusing.
- **Recommended fix:** Set `alt=""` on the hero image (empty alt for decorative images) and add `role="presentation"` or `aria-hidden="true"`.

### Issue 26
- **Priority:** P2
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** The gallery arrow buttons have `aria-label="Previous image"` and `aria-label="Next image"` which is correct. However the lightbox close button uses `font-size: 28px` text content (the `x` character) with no `aria-label`. This means a screen reader would announce the raw `x` character. The lightbox nav buttons also have no aria-labels.
- **Recommended fix:** Add `aria-label="Close"` to the lightbox close button and `aria-label="Previous photo"` / `aria-label="Next photo"` to the lightbox nav buttons.

### Issue 27
- **Priority:** P3
- **Pages affected:** Both (Kingston, Teddington)
- **Description:** The jump bar links (`ws-jump-link`) have no focus states defined in CSS beyond the hover state. The `ws-jump-link:hover` rule sets `color: var(--brand); border-bottom-color: var(--brand)`. There is no `:focus` or `:focus-visible` rule. Keyboard users tabbing through the page will see no visible focus indicator on these navigation links.
- **Recommended fix:** Add `:focus-visible { outline: 2px solid var(--brand); outline-offset: 2px; }` to the `ws-jump-link` selector.

---

## Summary Table

| Issue | Category | Priority | Pages | Description |
|-------|----------|----------|-------|-------------|
| 1 | Layout | P2 | Both | Sidebar `top: 24px` overlaps sticky site header |
| 2 | Layout | P2 | Both | Practical info fields rendered as raw bold headings in body copy |
| 3 | Layout | P3 | Teddington | Walk warning placed as blockquote in description instead of walkWarning frontmatter |
| 4 | Layout | P3 | Kingston | Ground-nesting birds hazard has no seasonal pill; tick pill is generic regardless of terrain |
| 5 | Typography | P1 | Both | Off-lead value and sublabel concatenated without space ("fullOff-lead throughout") |
| 6 | Typography | P2 | Both | Start/End stat values at 11px on mobile - below 14px minimum on narrow screens |
| 7 | Typography | P3 | Both | Founder's tip body text at 14px feels small relative to 15-16px description body |
| 8 | Typography | P3 | All | Route breakdown card title at 12px all-caps - borderline small |
| 9 | Icons | P3 | Both | Check-circle icon for off-lead stat communicates "approved" not "off-lead" |
| 10 | Icons | P3 | Both | Walk-back return option shows car icon instead of walking figure |
| 11 | Gallery | P2 | Both | Arrow buttons positioned with `translateY(-70%)` instead of `-50%` - misaligned |
| 12 | Gallery | P3 | Both | Lightbox nav buttons at exactly 44px minimum - tight on small phones |
| 13 | Gallery | P3 | Both | Gallery scroll amount hardcoded at 300px - less than one card width on desktop |
| 14 | Jump Bar | P2 | Both | Jump bar `top: 0` conflicts with site header `top: 0` - bar hidden behind header |
| 15 | Jump Bar | P3 | Both | No active state on jump links as user scrolls through sections |
| 16 | Sticky Title | P1 | Both | Sticky title z-index 90 slides under site header z-index 100 - title invisible |
| 17 | Sticky Title | P2 | Both | IntersectionObserver fires at `threshold: 0` - sticky title may appear too early |
| 18 | Founder's Tip | P3 | Teddington | No founderTip on Teddington - content gap |
| 19 | Route Breakdown | P2 | Kingston | Mobile stacked layout may not wrap gracefully at 320px devices |
| 20 | Route Breakdown | P3 | Teddington | No routeLegs - walk has meaningful waypoints and dog-rule changes |
| 21 | Walk Warning | P1 | Teddington | PSPO warning is unstyled blockquote with no CSS - critical safety notice invisible |
| 22 | Hero | P3 | Both | Three-badge stack on long titles may crowd hero title on narrow mobile |
| 23 | Consistency | P2 | Kingston vs Teddington | Teddington substantially less complete - no tip, no route breakdown, unstructured body |
| 24 | Consistency | P2 | Kingston vs Richmond Park | 11px linear strip stat values vs 14px on standard pages - noticeable regression |
| 25 | Accessibility | P2 | Both | Hero image alt duplicates the h1 title - announces walk name twice to screen readers |
| 26 | Accessibility | P2 | Both | Lightbox close button has no aria-label; lightbox nav buttons have no aria-labels |
| 27 | Accessibility | P3 | Both | Jump bar links have no :focus-visible state for keyboard navigation |

---

## Issue Count by Priority

| Priority | Count |
|----------|-------|
| P1 (broken) | 3 |
| P2 (poor) | 12 |
| P3 (polish) | 12 |
| **Total** | **27** |

---

*Review complete. No files modified.*
