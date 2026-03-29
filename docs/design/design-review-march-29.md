# Design Review - sniffout-website.pages.dev
**Date:** 2026-03-29
**Reviewer:** Designer agent
**Scope:** All seven page types reviewed against approved mockup and website-page-specs.md

---

## How this review was conducted

All HTML templates, the complete CSS, and live page content were read in full. Pages were fetched and their structure analysed. Issues are compared against the approved mockup (`sniffout_website_mockups_with_icon.html`) and the spec (`website-page-specs.md`).

---

## Page reviews

---

### Page 1 - Homepage
**URL:** https://sniffout-website.pages.dev/
**Verdict: Needs work**

#### Issues

**Issue HP-1 - Walk count grammar broken (Critical)**
The Hugo template outputs `{{ $walkCount }} handpicked UK walks` without a singular/plural conditional. With one walk, the page reads "1 handpicked UK walks" - grammatically wrong and will confuse visitors.
This string appears in three places:
- Hero subtext: `1 handpicked UK walks. Know the weather before you go.`
- Benefit block 2 body: `1 curated dog walks across the UK.`
- On the install page benefit: title reads `1 handpicked UK walks`

Fix: In `index.html` and `get.html`, replace each `{{ $walkCount }} ... walks` occurrence with a conditional:
```
{{ $walkCount }} {{ if eq $walkCount 1 }}walk{{ else }}walks{{ end }}
```
Apply to all three locations.

**Issue HP-2 - Homepage final CTA does not switch to stacked layout on desktop (Major)**
The spec says the final install CTA on the homepage should switch to the `.walk-cta-stacked` pattern on desktop (`max-width: 480px; margin: 0 auto`). Currently the template uses `.walk-cta-inner` (flex row) at all breakpoints with no desktop override. On wide screens, the green flex-row CTA runs nearly full-width of the viewport and the button is pinned to the right edge.

Fix: In `index.html`, replace the `walk-cta-row` block in the final CTA with a pattern that uses `.walk-cta-stacked` on desktop. Add to CSS:
```css
@media (min-width: 768px) {
  .home-final-cta .walk-cta-row { display: none; }
  .home-final-cta-desktop { display: block; }
}
.home-final-cta-desktop { display: none; }
```
Add a `.walk-cta-stacked` block inside `.home-final-cta` alongside the existing mobile row block, hidden on mobile and shown on desktop.

**Issue HP-3 - Hazard strip degree symbol missing (Minor)**
The body copy reads `a 28C day` instead of `a 28°C day`. The degree symbol is missing.

Fix: In `index.html` line 76, change `28C` to `28&deg;C`.

**Issue HP-4 - Dead CSS classes from generic template (Minor)**
The following classes exist in `main.css` but are not used in any Hugo template: `.hero-section`, `.regions-section`, `.region-chips`, `.region-chip`. These are leftovers from an earlier template iteration.

Fix: Remove all four unused class blocks from `main.css` (approximately lines 780-859).

---

### Page 2 - Walk page (single)
**URL:** https://sniffout-website.pages.dev/walks/richmond-park-dog-walk/
**Verdict: Needs work**

#### Issues

**Issue WP-1 - Invalid CSS property in desktop hero media query (Minor)**
In `main.css` inside the `@media (min-width: 768px)` block for `.walk-hero-svg`, there is:
```css
viewBox: 0 0 700 340;
```
`viewBox` is an SVG HTML attribute, not a CSS property. It is silently ignored. The SVG will retain its original `viewBox="0 0 375 200"` at all breakpoints, meaning the road overlay paths - designed for a 375x200 canvas - will scale incorrectly when the hero is 340px tall on desktop.

Fix: Remove the `viewBox: 0 0 700 340;` line from the desktop media query. To fix the SVG scaling properly, update the `viewBox` attribute directly on the `<svg>` element in `single.html` based on the viewport (or leave the current SVG as is - the scaling difference is subtle and the gradient background reads fine).

**Issue WP-2 - Breadcrumb county link loops back to walks index (Minor)**
The breadcrumb in `single.html` renders: `Walks › London › Richmond Park Dog Walk` where "London" links to `/walks/`. When a user taps "London" expecting London-specific walks, they land on the full walks index. This is acceptable for now since area pages do not yet exist, but should be noted.

Fix (temporary): Make the county span non-linked until area pages exist. Change `<a href="/walks/">{{ .Params.county }}</a>` to `<span class="walk-breadcrumb-current">{{ .Params.county }}</span>`. When area pages are built, restore as a proper link to `/walks/[county-slug]/`.

**Issue WP-3 - Conflicting text-decoration declarations on area-link (Minor)**
In `main.css`, the `.area-link` class has two `text-decoration` declarations:
```css
text-decoration: underline;   /* line 696 - dead, overridden */
text-underline-offset: 2px;   /* line 697 - dangling, has no effect */
margin-bottom: 32px;
text-decoration: none;        /* line 699 - wins */
```
The first `text-decoration: underline` and `text-underline-offset: 2px` are dead. The link correctly uses a `border-bottom` instead.

Fix: Remove lines 696-697 from `.area-link`. Keep `text-decoration: none` and the `border-bottom` treatment.

---

### Page 3 - Walks index
**URL:** https://sniffout-website.pages.dev/walks/
**Verdict: Fail**

#### Issues

**Issue WI-1 - H1 reads "Walks dog walks" (Critical)**
The template in `list.html` generates the H1 as `{{ .Title }} dog walks`. Hugo's section title for `/walks/` is "Walks", so the rendered H1 is "Walks dog walks" - a doubled, nonsensical heading visible on first look.

Fix: In `list.html`, replace the H1 with hardcoded copy:
```html
<h1 class="area-h1">Dog walks across the UK</h1>
```
This matches the intent of the spec and removes the dependency on Hugo's section title.

**Issue WI-2 - Breadcrumb shows "Walks > Walks" (Major)**
The breadcrumb in `list.html` is:
```html
<a href="/walks/">Walks</a> › <span class="walk-breadcrumb-current">{{ .Title }}</span>
```
On the walks index page, `.Title` is "Walks", so this renders "Walks › Walks" - redundant.

Fix: On the walks index page, the breadcrumb should show nothing or just "Walks" with no separator. Either suppress the breadcrumb entirely on the list page, or simplify it to:
```html
<nav class="walk-breadcrumb">
  <span class="walk-breadcrumb-current">Walks</span>
</nav>
```

---

### Page 4 - Guides index
**URL:** https://sniffout-website.pages.dev/guides/
**Verdict: Pass**

The page structure matches the spec. H1 is correct, intro text is correct, the single guide card renders with category pill, title, description, read time, and chevron. The component is clean and consistent with the walk page design language.

#### Notes (not blocking)

**Issue GI-1 - Only one guide card (content gap, Minor)**
One guide exists. On desktop, the 2-column grid shows one half-width card. This is a content gap, not a design bug. No CSS fix needed. As more guides are added, the grid will fill naturally.

---

### Page 5 - Guide article (ticks)
**URL:** https://sniffout-website.pages.dev/guides/ticks-dogs-uk/
**Verdict: Needs work**

#### Issues

**Issue GA-1 - No related guides section on mobile (Major)**
The spec requires a "Related guides" section to appear in the main article flow on mobile (below the article body). Currently, related guides are only rendered inside `.guide-article-sidebar`, which is `display: none` on mobile. On mobile, the article ends with related walks and a "Browse all dog walks" link, then goes straight to the footer. There is no way to discover other guides on mobile.

Fix: In `guides/single.html`, add a related guides block inside `.guide-article-content`, after the related walks rows and before `</div><!-- /.guide-article-content -->`. Mark it as mobile-only with `.walk-mobile-only`. Example:
```html
<div class="walk-mobile-only" style="margin-top:20px;">
  <div class="walk-section-heading">RELATED GUIDES</div>
  {{ range first 2 (where .Site.RegularPages "Section" "guides") }}
  {{ if ne .Title $.Title }}
  <a href="{{ .Permalink }}" class="guide-card" style="margin-bottom:8px;">
    ... (same structure as sidebar)
  </a>
  {{ end }}
  {{ end }}
</div>
```

**Issue GA-2 - TOC links and related walks are hardcoded (Minor)**
The sidebar TOC links (`#where-to-check-after-a-walk`, `#lungworm-and-tick-prevention`) and related walk names (Richmond Park, Bushy Park) are hardcoded in the template rather than driven by frontmatter. Every future guide will show the same TOC entries and same walk links. This is a template architecture issue.

Fix: Add `tocLinks` and `relatedWalks` arrays to guide frontmatter. Loop over them in the template. Or, at minimum, document this as a known limitation that requires manual template editing per guide.

---

### Page 6 - Install page
**URL:** https://sniffout-website.pages.dev/get/
**Verdict: Needs work**

#### Issues

**Issue IP-1 - Desktop layout missing entirely (Major)**
The spec defines a two-column desktop layout: `grid-template-columns: 1fr 1fr` with the hero and platform CTA on the left, and the step guide plus why section on the right. This layout does not exist in `main.css` or `get.html`. On desktop, all sections stack vertically full-width. The install-hero gets `border-radius: 16px` on desktop (correct) but it remains full-bleed without a container.

Fix: In `main.css`, add a desktop wrapper for the install page:
```css
@media (min-width: 768px) {
  .install-page-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    max-width: 900px;
    margin: 0 auto;
    padding: 48px 40px;
    background: var(--bg);
  }
}
```
In `get.html`, wrap `.install-hero` + `.install-platform-section` inside a left column div, and `.install-steps-section` + `.install-why` inside a right column div, both inside `.install-page-inner`.

**Issue IP-2 - QR code is a placeholder (Major)**
The desktop platform variant shows a grey box with text "Scan to install Sniffout" instead of a real QR code. The install page is the primary conversion page. Desktop visitors who come here see a broken experience.

Fix: Generate a QR code image pointing to `https://sniffout.co.uk/get`. Use an online QR generator to create a 300x300 PNG and save it to `static/img/qr-install.png`. Then in `get.html`, replace:
```html
<div class="install-qr-placeholder">
  <span style="...">Scan to install<br>Sniffout</span>
</div>
```
with:
```html
<img src="/img/qr-install.png" alt="QR code - scan to install Sniffout" width="80" height="80" style="border-radius:6px;">
```

**Issue IP-3 - Walk count grammar (Critical - shared with HP-1)**
The Why Sniffout benefit reads "1 handpicked UK walks" - same grammar issue as the homepage. Fix documented in HP-1.

---

### Page 7 - 404 page
**URL:** https://sniffout-website.pages.dev/this-does-not-exist/
**Verdict: Pass**

The 404 page is well-executed. Brand green visual block, icon at opacity 0.3, decorative dots with paw-like offset via CSS transforms, "404" label, headline, supporting text, two CTA buttons, and hint text below. All spec-correct. The footer renders correctly on 404.

#### Notes (not blocking)

**Issue 404-1 - Canonical URL hardcoded (Minor)**
The `<head>` partial outputs `<link rel="canonical" href="https://sniffout.co.uk/404.html">` on the 404 page. This should be dynamic. The hardcoded domain is not critical until the custom domain goes live, but it should be confirmed the head partial uses Hugo's `.Permalink` variable and not a hardcoded string.

Fix: Confirm `partials/head.html` uses `{{ .Permalink }}` for the canonical tag. If it is hardcoded to `sniffout.co.uk` for non-existent pages, the 404 page canonical should either be omitted or set dynamically.

---

### Global issues (all pages)

**Issue GL-1 - Missing About and Privacy pages (Critical)**
The footer on every page links to `/about/` and `/privacy/`. Neither content file exists in `content/`. Both URLs 404. This must be resolved before connecting the custom domain.

Fix: Create `content/about.md` and `content/privacy.md` with minimal content. These do not need full design at this stage - a simple page with header, a paragraph, and footer is sufficient. Add `layout: simple` frontmatter and create `layouts/simple.html` as a minimal body template. Alternatively, add `_default/single.html` rendering for basic markdown pages.

**Issue GL-2 - Header nav active state is always "Walks" (Major)**
The CSS applies an active underline style unconditionally to the first nav link:
```css
.header-nav a:first-child {
  color: #2C4A14;
  font-weight: 500;
  border-bottom: 2px solid #2C4A14;
  padding-bottom: 2px;
}
```
Since the nav order is Walks, Guides, About, "Walks" is always highlighted regardless of current page. On the Guides page, "Walks" appears selected. On About, same. This is visually incorrect.

Fix: Remove the `:first-child` active selector from the global CSS. Instead, use Hugo's `.IsSection` or `.Section` variable in `partials/header.html` to conditionally apply an active class:
```html
<a href="/walks/" {{ if or (eq .Section "walks") (eq .URL "/walks/") }}class="nav-active"{{ end }}>Walks</a>
```
Add `.nav-active` class in CSS with the active styling.

---

## Prioritised fix list

### Critical - must fix before connecting sniffout.co.uk

| ID | Page | Issue | Fix location |
|---|---|---|---|
| GL-1 | All pages | Missing /about/ and /privacy/ content - footer links 404 | Create content files |
| WI-1 | Walks index | H1 reads "Walks dog walks" | `list.html` line 14 |
| HP-1 / IP-3 | Homepage, Install | Walk count grammar "1 walks" (3 locations) | `index.html`, `get.html` |

### Major - fix in same round

| ID | Page | Issue | Fix location |
|---|---|---|---|
| GL-2 | All pages | Nav always shows "Walks" as active | `header.html`, `main.css` |
| WI-2 | Walks index | Breadcrumb reads "Walks > Walks" | `list.html` |
| HP-2 | Homepage | Final CTA uses flex row on desktop (should be stacked) | `index.html`, `main.css` |
| IP-1 | Install | Desktop two-column layout missing | `get.html`, `main.css` |
| IP-2 | Install | QR code is placeholder grey box | `get.html`, static asset |
| GA-1 | Guide article | Related guides missing on mobile | `guides/single.html` |

### Minor - polish, can be batched

| ID | Page | Issue | Fix location |
|---|---|---|---|
| WP-1 | Walk page | Invalid CSS `viewBox` property in desktop media query | `main.css` line 241 |
| WP-3 | Walk page | Dead `text-decoration` declarations in `.area-link` | `main.css` |
| HP-3 | Homepage | "28C" should be "28°C" | `index.html` |
| HP-4 | Homepage | Dead CSS classes from generic template | `main.css` |
| GA-2 | Guide article | TOC and related walks hardcoded in template | `guides/single.html` |
| 404-1 | 404 | Canonical URL may be hardcoded in head partial | `partials/head.html` |

---

## Overall assessment

**The site is not ready to connect sniffout.co.uk.**

Three critical issues block launch: the About and Privacy pages 404 (every visitor who clicks these footer links gets an error), the walks index H1 is broken text visible on first load, and the walk count grammar error appears in multiple locations. These must be fixed first.

After the critical issues are resolved, the major issues should be fixed in the same Developer round. The install page in particular is important: the conversion funnel page has no desktop layout and a placeholder QR code, making it near-useless for desktop visitors. The nav active state looks sloppy on any non-Walks page.

The core walk page, guides index, guide article, and 404 page are all well-built and close to spec. The CSS token system is correctly implemented, spacing is consistent, tap feedback is applied to interactive elements, and the component library (CTAs, badges, seasonal pills, dog box, practical info) matches the approved mockup.

Once the critical and major issues listed above are fixed, the site will be ready for domain connection.

---

*Review produced by Designer agent, 2026-03-29. No code files were modified.*
