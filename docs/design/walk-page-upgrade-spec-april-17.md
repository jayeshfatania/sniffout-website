# Walk Page Upgrade Spec - April 17 2026

Four targeted improvements to the walk single page template. Each section is self-contained and can be implemented independently.

---

## 1. Jump links / anchor navigation bar

### Recommended approach

A static horizontal bar of anchor links that sits between the stat strip and the description. Each link smooth-scrolls to a named section on the page.

### Why static, not sticky

The site header (`.site-header`) is already sticky at z-index 100. Adding a second sticky bar below it would leave only a thin band of readable content on a typical mobile viewport (375px height minus ~52px header minus ~44px jump bar = under 280px for content). The sticky title (Section 2) will serve as persistent navigation context once scrolling starts. Two competing sticky elements on a long-form page create visual clutter and reduce effective reading area. Static is the right call here.

### Which anchors to include

Based on the actual sections present in the live template (confirmed from the Kingston to Teddington Lock page):

| Link label | Target anchor ID | Notes |
|------------|-----------------|-------|
| Description | `#description` | Walk prose, founder tip, route breakdown |
| Weather | `#weather` | The `ws-weather-card` element |
| Before you go | `#before-you-go` | Practical info card |
| For your dog | `#for-your-dog` | Dog-specific info card |
| FAQ | `#faq` | The `ws-faq-outer` element |

The gallery strip is above the stat strip and does not need a jump link - it is visible immediately on page load. The nearby walks section is also excluded; it is discovery content rather than pre-trip decision content.

The route breakdown is inside the description zone and does not warrant its own anchor at this stage.

### Position in page

Immediately below the stat strip (`.ws-stat-strip`), outside the `.ws-layout` grid, spanning full viewport width. The bar must appear before the `.ws-layout` div, not inside `.ws-content`.

### CSS values

Bar container (`.ws-jump-bar`):
- background: var(--surface)
- border-bottom: 1px solid var(--border)
- overflow-x: auto
- -webkit-overflow-scrolling: touch
- scrollbar-width: none
- padding: 0 (padding lives on the inner flex row, not the container)
- No border-radius - the bar runs edge to edge like the stat strip

Inner flex row (`.ws-jump-bar-inner`):
- display: flex
- gap: 0
- padding: 0 16px
- white-space: nowrap

Individual link (`.ws-jump-link`):
- font-size: 13px
- font-weight: 600
- color: var(--ink-2)
- padding: 12px 14px
- text-decoration: none
- border-bottom: 2px solid transparent
- transition: color 0.15s ease, border-color 0.15s ease
- display: inline-block

Link hover state:
- color: var(--brand)
- border-bottom-color: var(--brand)

Active state (JS-driven, optional for v1):
- color: var(--brand)
- border-bottom-color: var(--brand)

### Scrollbar hiding

- scrollbar-width: none (Firefox)
- `.ws-jump-bar::-webkit-scrollbar { display: none }` (Chrome, Safari)

### smooth scroll

`html { scroll-behavior: smooth; }` is already set at line 27 of main.css. No additional work needed.

### Mobile vs desktop

- Mobile: horizontal scroll, links overflow naturally, first 4-5 links visible with the last partially peeking to signal scrollability
- Desktop (min-width: 768px): links fit comfortably without scroll. Set `.ws-jump-bar` to `max-width: 1200px; margin: 0 auto` to match the `.ws-layout` container. The bar should span only the content area width, not bleed beyond it. On desktop, links can spread with `gap: 4px` to use available space.

### Trade-offs

The bar requires anchor IDs to be added to the corresponding section elements in the Hugo template. The weather card already has `id="ws-weather-card"` - this should be updated to `id="weather"` for consistency, or a wrapper div with the correct id should be added.

---

## 2. Parallax hero image and sticky scroll title

### 2a - Parallax hero

#### Recommended approach

CSS-only parallax using `background-attachment: fixed` on desktop. The current hero uses an `<img>` tag (`.ws-hero-img`) positioned with `position: absolute; inset: 0; object-fit: cover`. To implement parallax, the hero image must be switched to a CSS `background-image` on the container instead of an `<img>` element.

#### Mobile: parallax disabled

`background-attachment: fixed` must be disabled entirely on mobile. Mobile browsers (iOS Safari in particular) do not implement fixed backgrounds correctly in a scrollable page - the background either fails to move at all, or snaps and jumps on scroll, causing significant jank. The simplest and most reliable fix is:

- Mobile (default): `background-attachment: scroll`
- Desktop only (min-width: 768px): `background-attachment: fixed`

State this clearly in any Developer brief. No exceptions for specific devices. The fix is unconditional on mobile.

#### Hero container values

`.ws-hero` - updated values:

| Property | Mobile | Desktop (min-width: 768px) |
|----------|--------|---------------------------|
| height | 380px | 480px |
| background-size | cover | cover |
| background-position | center | center |
| background-attachment | scroll | fixed |
| position | relative | relative |
| overflow | hidden | hidden |

Note: switching from `<img>` to `background-image` means the Hugo template must render the image URL as an inline style on the container: `style="background-image: url('{{ .Params.heroImage }}')"`. The `.ws-hero-img` element and its CSS rule can be removed once this is implemented.

#### Overlay gradient

The current overlay (`linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.68) 100%)`) is already close to the spec. For parallax, increase the top opacity slightly to ensure text legibility as the image shifts:

- linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)

This is applied to `.ws-hero-overlay`, which already exists in the template.

#### No JavaScript needed

No scroll event listeners. The CSS-only approach is sufficient and has no performance cost.

#### Trade-off

The `<img>` element provides better SEO image indexing than a CSS background image. If SEO image indexing for hero photos is a priority, retain the `<img>` and keep parallax off. The parallax effect adds visual interest but is not a core product requirement. This is a product decision, not a design decision - flag to PO before implementing.

---

### 2b - Sticky title bar

#### Recommended approach

A fixed-position bar that slides in from the top when the user scrolls past the hero image. Uses IntersectionObserver on the `.ws-hero` element to trigger the transition. No scroll event listeners.

#### Trigger behaviour

IntersectionObserver watches `.ws-hero`. When the hero leaves the viewport (threshold: 0), the sticky title slides in. When the hero re-enters the viewport, the title slides back out.

#### CSS values

`.ws-sticky-title`:
- position: fixed
- top: 0
- left: 0
- right: 0
- height: 52px
- background: #FFFFFF
- border-bottom: 1px solid rgba(0,0,0,0.10)
- display: flex
- align-items: center
- padding: 0 16px
- gap: 12px
- z-index: 90
- transform: translateY(-100%)
- transition: transform 200ms ease-out
- box-sizing: border-box

Active state (`.ws-sticky-title.is-visible`):
- transform: translateY(0)

#### Walk name text (`.ws-sticky-name`):
- font-size: 15px
- font-weight: 600
- color: #1A1A1A
- white-space: nowrap
- overflow: hidden
- text-overflow: ellipsis
- flex: 1
- max-width: calc(100% - 120px)

#### Back button (`.ws-sticky-back`):
- Placed on the left side of the bar
- font-size: 13px
- font-weight: 600
- color: var(--brand)
- text-decoration: none
- flex-shrink: 0
- display: flex
- align-items: center
- gap: 4px

#### Optional: difficulty badge on right (`.ws-sticky-badge`):
- Same visual treatment as `.ws-hero-badge` - pill with difficulty colour
- flex-shrink: 0
- Allows users to recall the walk's difficulty at a glance without scrolling back up
- Populated from the same frontmatter `difficulty` field as the hero badge

#### z-index relationship

The sticky title is z-index 90. The site header is z-index 100. The sticky title appears below the site header in the stacking context. If the jump links bar from Section 1 were made sticky (not recommended), it would sit at z-index 80, below both the header and the sticky title. Since the jump links bar is static, no z-index management is needed for it.

#### Desktop behaviour

On desktop, constrain the bar content to match the content column:

`.ws-sticky-title-inner`:
- max-width: 1200px
- margin: 0 auto
- width: 100%
- display: flex
- align-items: center
- gap: 12px
- padding: 0 32px

The bar itself spans full viewport width (background and border). Only the inner content is constrained. This matches the visual pattern of the site header.

#### Mobile vs desktop differences

| Aspect | Mobile | Desktop |
|--------|--------|---------|
| Back button label | Arrow only or "Walks" | "Back to walks" |
| Walk name max-width | calc(100% - 100px) | calc(100% - 160px) |
| Difficulty badge | Show | Show |
| Bar padding | 0 16px | 0 32px (on inner element) |

---

## 3. Icon audit and replacements

All icons use the existing stroke spec:
- stroke-width: 1.75
- stroke-linecap: round
- stroke-linejoin: round
- fill: none

### Stat tiles (`.ws-stat-tile`)

Icon size: 20x20px

| Tile | Current icon | Recommended replacement | Lucide name | Rationale |
|------|-------------|------------------------|-------------|-----------|
| Start / End | `map-pin` | Keep `map-pin` | `map-pin` | Correct for a location anchor. No change needed. |
| Duration | `clock` | Keep `clock` | `clock` | Universally understood. No change needed. |
| Terrain | Custom path | `footprints` | `footprints` | Directly communicates walking surface better than the current hatched path icon. |
| Off-lead | Shield path | Keep current shield | existing | The shield is contextually correct for a safety/permission concept. No change. |
| Distance (circular walks) | `map-pin` | `route` | `route` | A path/road shape explicitly communicates a measured walking route. |
| Difficulty (if added as tile) | None | `bar-chart-2` | `bar-chart-2` | Ascending bars communicate levels/grades clearly. |
| Walk type - circular | None | `rotate-ccw` | `rotate-ccw` | Circular arrow communicates a loop route immediately. |
| Walk type - linear | Arrow SVG (existing) | `arrow-right` | `arrow-right` | Already present in template. Keep as is. |

### Before you go section (`.ws-info-card`)

Icon size: 16x16px. Default colour: `var(--ink-2)` (#555555)

| Row | Recommended icon | Lucide name | Rationale |
|-----|-----------------|-------------|-----------|
| Parking | `car` | `car` | `square-parking` does not exist in Lucide. `car` is the clearest unambiguous parking signal available. |
| Getting there | `train` | `train` | Most common public transport mode for UK countryside walks. Rail is the primary PT indicator. |
| Nearest town | `map-pin` | `map-pin` | Standard location anchor. Distinct from Start/End stat tiles because it carries a different semantic (navigation origin, not walk endpoint). |
| Facilities | `utensils` | `utensils` | Fork and knife communicates cafe/pub presence clearly. Default facilities icon. |
| Wet weather | `cloud-rain` | `cloud-rain` | Direct. No ambiguity. |
| Summer | `sun` | `sun` | Standard warm weather signal. |
| Access notes | `alert-triangle` | `alert-triangle` | Colour: `var(--amber)` (#D97706) - the access notes row should signal something to be aware of, not a neutral note. This is the one row in Before you go that should use the amber colour treatment. |
| Getting back (linear walks only) | `corner-down-left` | `corner-down-left` | A return/reverse arrow communicates the return journey concept. |

### For your dog section (`.ws-info-card`)

Icon size: 16x16px

| Row | Recommended icon | Lucide name | Colour | Rationale |
|-----|-----------------|-------------|--------|-----------|
| Off-lead | Existing shield (keep) | existing | `var(--brand)` when full, `#D97706` when partial, `var(--ink-2)` when none | Already implemented correctly in the template. |
| Livestock (present) | `alert-triangle` | `alert-triangle` | `var(--amber)` | Warning context is appropriate when livestock are confirmed. Matches the existing `ws-info-icon--amber` class. |
| Livestock (absent) | `check-circle` | `check-circle` | `var(--brand)` | Positive confirmation. The check-circle communicates "cleared, no concern here." |
| Water on route | `waves` | `waves` | `var(--brand)` | Swimming and water presence clearly communicated. |
| Shade | `trees` | `trees` | `var(--brand)` | Woodland cover is the primary shade source on UK walks. Immediately legible. |
| Dog facilities | `utensils` | `utensils` | `var(--ink-2)` | Default facilities. Use `coffee` specifically when frontmatter specifies a cafe. |
| Stiles (present) | `alert-triangle` | `alert-triangle` | `var(--amber)` | A stile warrants attention for owners of large dogs. |
| Stiles (absent) | `check-circle` | `check-circle` | `var(--brand)` | Positive confirmation. |
| Breed note | `info` | `info` | `var(--ink-2)` | Informational, not a warning. |

### Colour treatment summary

| Use case | Icon colour | CSS value |
|----------|------------|-----------|
| Default / neutral | ink-2 | #555555 |
| Warning / attention needed | amber | #D97706 |
| Positive / good for dogs | brand green | #2C4A14 |
| Partial / caution | amber | #D97706 |

---

## 4. Image gallery treatment

### Gallery position

**Recommended: move the gallery to below the description, above the FAQ.**

The current template places the gallery above the stat strip, immediately after the hero. This creates a photo dump before the user has any context about the walk. The description, founder tip, and route breakdown set the scene - the photos then illustrate what the user has just read.

Revised content column order (inside `.ws-content`):
1. ws-description
2. ws-founder-tip
3. ws-route-breakdown
4. Seasonal notes
5. ws-weather-card
6. **ws-gallery (moved here)**
7. Before you go (mobile only)
8. For your dog (mobile only)
9. ws-faq-outer
10. ws-app-cta

On mobile, this means the gallery appears after the weather card and before the FAQ, well down the page. On desktop, the gallery sits in the content column at the same position, not in the sidebar. The sidebar does not include gallery images.

### Hero vs gallery: keep separate

The hero (`ws-hero`) and the gallery strip (`ws-gallery`) serve different purposes. The hero is a full-bleed immersive cover image that establishes the walk's visual identity and carries the title overlay. The gallery is a curated supplementary collection showing specific moments, landmarks, and features. Merging them into a single carousel would remove the cover image treatment and dilute the gallery's editorial function. Keep them as two distinct elements.

### Card dimensions

| Viewport | Width | Rationale |
|----------|-------|-----------|
| Mobile (default) | 280px | Allows the right edge of the next card to peek, signalling scrollability. Matches existing implementation. |
| Small tablet (min-width: 640px) | 320px | Existing breakpoint, keep as is. |
| Desktop (min-width: 1024px) | 380px | At full 1200px layout width, 320px cards leave significant dead space. 380px uses available width without requiring forced scroll on desktop for a small gallery (3-4 images). |

CSS values to update at min-width: 1024px:
- `.ws-gallery-item`: width: 380px
- `.ws-gallery-img`: height: 285px (maintains 4:3 aspect ratio at 380px width)

### Aspect ratio

Enforce `aspect-ratio: 4/3` on `.ws-gallery-img`. Current implementation uses fixed pixel heights (200px mobile, 220px at 640px). Switching to `aspect-ratio: 4/3` with `width: 100%` on the image element allows the card width to drive the height, producing consistent proportions across all source image ratios.

Updated values for `.ws-gallery-img`:
- width: 100%
- height: auto (remove fixed pixel height)
- aspect-ratio: 4/3
- object-fit: cover
- display: block

Rationale: mixed natural aspect ratios (portrait walk photos, wide landscape shots) produce a jagged strip with the current fixed heights. Enforcing 4:3 applies a consistent crop to all images and makes the strip look like a curated set rather than a collection of arbitrary crops.

### Caption treatment

Current: `.ws-gallery-caption-text` at 13px, `.ws-gallery-credit` at 11px.

Updated values:
- `.ws-gallery-caption-text`: font-size: 12px, color: #555555, max 2 lines via `-webkit-line-clamp: 2`
- `.ws-gallery-credit`: font-size: 11px, color: #888888 (use existing `var(--ink-3)` token which is already `#888888` in the root variables)

Add `-webkit-line-clamp` to `.ws-gallery-caption-text`:
- display: -webkit-box
- -webkit-box-orient: vertical
- -webkit-line-clamp: 2
- overflow: hidden

Caption padding: keep at `8px 12px` (no change needed).

### Mobile scroll behaviour

Keep horizontal scroll. Do not switch to vertical stack on mobile. A vertical stack on mobile would push the FAQ and app CTA far below the fold, hurting SEO scroll depth signals and making the page feel much longer than it is. The horizontal scroll pattern is established and familiar.

Add or confirm these values on `.ws-gallery`:
- -webkit-overflow-scrolling: touch (already present, confirm not removed)
- scrollbar-width: none (already present)
- scroll-snap-type: x mandatory (already present)

`.ws-gallery::-webkit-scrollbar { display: none }` is already in main.css at line 3244. No change needed.

### Parallax on gallery images

None. Gallery images must be static. The hero already carries the motion effect. Applying parallax to multiple images in a horizontal scroll strip would create visual chaos and conflict with the scroll-snap behaviour. This is a hard no.

### Lightbox

Keep the existing lightbox implementation. It is already active (`ws-lightbox`, `ws-lightbox-img`, nav arrows). One adjustment for mobile:

Add a 150ms tap delay before opening the lightbox on mobile. This prevents the lightbox from triggering during what the user intended as the start of a horizontal scroll gesture. Implementation: in the gallery tap handler, use `setTimeout(openLightbox, 150)` on mobile (detect via `window.matchMedia('(pointer: coarse)')`). Cancel the timeout if a `touchmove` event fires within that 150ms window.

This is a small but important UX improvement - without it, a user attempting to scroll the gallery will occasionally trigger the lightbox mid-gesture on slower devices.

---

## Implementation order (recommended)

Implement in this sequence to minimise risk and allow incremental testing:

1. **Section 3 (icon replacements)** - CSS and SVG changes only. Low risk. No structural changes. Easiest to verify and roll back if any icon is missing from Lucide.

2. **Section 4 (gallery)** - Two separable sub-tasks: (a) move the gallery position in the template, then (b) update card dimensions and aspect ratio. Do these as separate commits. Confirm gallery position looks correct before touching CSS.

3. **Section 1 (jump links bar)** - Requires adding anchor IDs to existing sections in the template plus a new HTML block. Static position means no JS required. Low interaction with other elements.

4. **Section 2b (sticky title)** - Requires JavaScript (IntersectionObserver). Implement and test on a real device, not just browser desktop simulation. iOS Safari viewport behaviour during scroll can differ from Chrome DevTools mobile emulation.

5. **Section 2a (parallax hero)** - Highest risk due to the `<img>` to `background-image` switch. Implement last. Test on iOS Safari specifically. Confirm the mobile `background-attachment: scroll` fallback is in place before merging. Consider whether the SEO trade-off (background images are less indexable than `<img>` elements) is acceptable before proceeding.
