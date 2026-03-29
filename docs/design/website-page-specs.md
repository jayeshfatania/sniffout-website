# Sniffout Website — Page Design Specs
**Date:** 2026-03-28
**Status:** Designer-approved. Ready for Developer implementation.
**Author:** Designer agent
**Scope:** Six page types covering the full companion website at sniffout.co.uk.

---

## Design system reference

All pages share the tokens and components established on the approved walk page. This document references those by name rather than re-speccing them.

### Tokens

```
--brand: #2C4A14
--bg: #F7F5F0
--surface: #FFFFFF
--border: rgba(0,0,0,0.08)
--ink: #1A1A1A
--ink-2: #555555
--ink-3: #888888
--amber-bg: #FFF8E8
--amber-border: #F5C842
--amber-text: #7A5C00
--brand-light: #E8F0DC
--brand-mid: #F0F7E8
--brand-border: #9DC85A
```

### Existing components (reference from walk page CSS)

| Class | Description |
|---|---|
| `.site-header` | Sticky header, `#F7F5F0` bg, 0.5px bottom border |
| `.header-logo` / `.header-wordmark` / `.header-cta-pill` | Logo lockup and Get the app pill |
| `.header-nav` | Desktop nav, hidden on mobile |
| `.walk-breadcrumb` | Small 12px breadcrumb, hidden on mobile, visible desktop |
| `.walk-section-heading` | 10px/600/uppercase/#888/letter-spacing:0.06em section labels |
| `.chip--location` | Brand-green location pill, `#E8F0DC` bg |
| `.stat-pill` | 11px inline stat chip, white bg, 0.5px border |
| `.stat-cell` / `.stat-label` / `.stat-value` | Desktop 2x2 stat grid cells |
| `.walk-cta-inner` / `.cta-headline` / `.cta-subtext` / `.cta-pill-btn` | Mobile primary CTA (flex row) |
| `.walk-cta-stacked` / `.cta-headline--desktop` / `.cta-subtext--desktop` / `.cta-btn-full` | Desktop sidebar stacked CTA |
| `.walk-dog-box` / `.dog-box-label` / `.dog-box-body` | Green tinted info box |
| `.seasonal-pill--amber` / `.seasonal-pill--green` | Inline hazard/seasonal note chips |
| `.practical-card` / `.practical-card-row` | Mobile white-card practical info table |
| `.nearby-walk-row` / `.nearby-walk-name` / `.nearby-walk-meta` | Single-col walk list row |
| `.btn-secondary` | Outline brand-green button, `border-radius: 14px` |
| `.walk-store-badges` / `.badge-store` / `.badge-label` / `.badge-name` | App store badge pair |
| `.site-footer` | Brand green footer with brand, links, copy |

### Typography scale

| Use | Size | Weight |
|---|---|---|
| Display headline | 28-32px | 800 |
| Page H1 | 21-24px | 700 |
| Section H2 | 18px | 700 |
| Section H3 | 15px | 600 |
| Section label | 10px uppercase | 600 |
| Body | 14-16px | 400 |
| Supporting | 13px | 400/500 |
| Small / meta | 11-12px | 400/500 |
| Micro | 9-10px | 600 |

### Spacing rhythm

4px base unit. Used multiples: 4 8 12 14 16 20 24 28 32 40 48 64.

### Interaction rule

Every tappable element: `transition: transform 0.15s ease`, `:active { transform: scale(0.97) }`.

---

---

# Page 1 — Homepage (sniffout.co.uk/)

## Purpose

Answer three questions immediately: what is Sniffout, why should I use it, how do I get it. The homepage is an install funnel, not a directory. Walk count and live weather are the two strongest trust signals.

---

## Mobile layout

### Header
Same `.site-header` as walk page. Sticky.

---

### Hero section

**Container:** Full-bleed, `background: #2C4A14`, `padding: 48px 20px 40px`.

**Content (centred):**

Sniffout icon SVG at 36x36px, white fill. Centred above headline. `margin-bottom: 16px`.

**H1 headline:**
```
Dog walks and live weather,
built for UK dog owners.
```
- `font-size: 28px`
- `font-weight: 800`
- `color: white`
- `line-height: 1.2`
- `letter-spacing: -0.5px`
- `text-align: center`
- `margin-bottom: 12px`

**Supporting sentence:**
```
[walk-count] handpicked UK walks. Know the weather before you go.
```
- `font-size: 15px`
- `font-weight: 400`
- `color: rgba(255,255,255,0.75)`
- `text-align: center`
- `margin-bottom: 28px`
- Walk count is dynamic from Hugo data: render the actual number from `WALKS_DB` equivalent (use Hugo `len` on the walks collection).

**Primary CTA button:**
```
Get Sniffout free
```
- `background: white`
- `color: #2C4A14`
- `font-size: 15px`
- `font-weight: 700`
- `border-radius: 14px`
- `padding: 14px 28px`
- `display: block`
- `width: 100%`
- `max-width: 280px`
- `margin: 0 auto 12px`
- `text-align: center`
- `text-decoration: none`
- Links to `/get`

**Social proof strip (below button):**
```
Free · No account needed · iOS and Android
```
- `font-size: 11px`
- `color: rgba(255,255,255,0.5)`
- `text-align: center`

No photography in the hero. The brand green + white typography is the visual.

---

### What you get section

**Container:** `background: var(--bg)`, `padding: 40px 20px`.

**Section label:** `.walk-section-heading` style: `WHY SNIFFOUT`

**Three benefit blocks, stacked vertically on mobile:**

Each block:
- `margin-bottom: 24px`
- Icon: simple 24x24px SVG in `#2C4A14`. Developer uses Lucide icons. Suggested: `cloud-sun` (weather), `map-pin` (walks), `heart` (dog-first).
- `margin-bottom: 8px` below icon
- Benefit title: `font-size: 15px`, `font-weight: 700`, `color: var(--ink)`, `margin-bottom: 4px`
- Benefit body: `font-size: 13px`, `font-weight: 400`, `color: var(--ink-2)`, `line-height: 1.55`

**Content:**

Block 1 — icon: `cloud-sun`
Title: `Know before you go`
Body: `Live weather verdict for every walk. Heat warnings, storm alerts, best window of the day. Built around what dogs need, not just what the forecast says.`

Block 2 — icon: `map-pin`
Title: `Handpicked UK walks`
Body: `[walk-count] curated dog walks across the UK. Distance, terrain, off-lead status, and parking for every one.`

Block 3 — icon: `notebook-pen`
Title: `Your walk journal`
Body: `Every walk logged, searchable, and remembered. No account required. Your data stays on your device.`

---

### Featured walks section

**Container:** `background: var(--surface)`, `padding: 32px 0 32px 20px` (left pad only, allowing horizontal scroll to reach edge).

**Section label:** `.walk-section-heading` style inside standard `padding: 0 20px`, text: `FEATURED WALKS`

**Section heading:** `font-size: 18px`, `font-weight: 700`, `color: var(--ink)`, `margin-bottom: 16px`, `padding: 0 20px`

**Walk card row:** `display: flex`, `gap: 12px`, `overflow-x: auto`, `-webkit-overflow-scrolling: touch`, `padding-bottom: 16px`, `padding-right: 20px`. No scrollbar visible (use `::-webkit-scrollbar { display: none }`).

**New component: `.walk-card-h` (horizontal scroll walk card)**

This is a new component not on the walk page.

```
width: 200px
flex-shrink: 0
background: var(--surface)
border-radius: 12px
border: 0.5px solid var(--border)
overflow: hidden
text-decoration: none
color: var(--ink)
display: block
transition: transform 0.15s ease
```

`:active { transform: scale(0.97) }`

Image area:
```
height: 110px
background: linear-gradient(135deg, #C8D8B0 0%, #A8C088 40%, #8BAD68 70%, #6E9048 100%)
position: relative
overflow: hidden
```
If `heroImage` is set, render `<img>` with `object-fit: cover; width: 100%; height: 100%`.

Difficulty badge (top-left of image): `.walk-hero-badge` style but positioned `top: 8px; left: 8px`.

Card body: `padding: 10px 12px`

Walk name: `font-size: 13px`, `font-weight: 600`, `color: var(--ink)`, `margin-bottom: 3px`, single-line, `overflow: hidden; text-overflow: ellipsis; white-space: nowrap`

Walk location: `font-size: 11px`, `color: var(--ink-3)`, `margin-bottom: 6px`

Stat pills row: flex, gap 4px. Two pills max (distance + difficulty). Same `.stat-pill` style but `font-size: 10px; padding: 3px 8px`.

**See all walks link:**
- `padding: 12px 20px 0`
- `font-size: 13px`
- `font-weight: 600`
- `color: var(--brand)`
- `text-decoration: none`
- `border-bottom: 1px solid rgba(44,74,20,0.25)`
- `padding-bottom: 1px`
- Text: `Browse all walks`

---

### Hazard awareness strip

**Container:** `background: var(--brand-mid)`, `border-top: 0.5px solid var(--brand-border)`, `border-bottom: 0.5px solid var(--brand-border)`, `padding: 28px 20px`.

**Purpose:** One confident, warm paragraph. Not a feature list. Not alarming.

**Section label:** `.walk-section-heading` text: `BUILT FOR DOG SAFETY`

**Heading:** `font-size: 16px`, `font-weight: 700`, `color: var(--brand)`, `margin-bottom: 8px`
Text: `Weather that matters to dogs, not just humans.`

**Body:** `font-size: 13px`, `color: var(--brand)`, `line-height: 1.6`, `opacity: 0.85`
Text: `Sniffout checks for heat risk, storm warnings, paw-burning pavements, and the best window in the day to walk. It understands that a 28°C day is very different for a Husky than a Labrador.`

No icons, no bullet points. Just warm editorial text in the green-tinted box.

---

### Final install CTA

**Container:** `padding: 20px 16px 32px`.

Use the same `.walk-cta-inner` component from the walk page.

Headline: `Get live weather for every walk`
Subtext: `Free. No account needed.`
Button: `Get Sniffout` - links to `/get`

Below the CTA block, centred store badges using `.walk-store-badges` (same component, `justify-content: center`).

---

### Footer
Same `.site-footer` as walk page.

---

## Desktop layout

Desktop breakpoint: `min-width: 768px`.

### Hero section (desktop)
`padding: 80px 20px 72px`. Max-width container: `max-width: 560px; margin: 0 auto`. Headline `font-size: 40px`. Supporting sentence `font-size: 16px`. CTA button `max-width: 240px`. All still centred.

### What you get section (desktop)
Three benefit blocks switch from stacked column to 3-column grid: `display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; max-width: 900px; margin: 0 auto`. Padding `padding: 56px 40px`.

### Featured walks section (desktop)
Remove horizontal scroll. Switch to `display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; max-width: 1200px; margin: 0 auto; padding: 40px 40px`. Show 4 walk cards. Walk card `.walk-card-h` becomes full-width within its grid cell (width: auto, flex-shrink unset).

### Hazard awareness strip (desktop)
`max-width: 720px; margin: 0 auto; padding: 48px 40px`. Heading `font-size: 18px`.

### Final install CTA (desktop)
Same as mobile but inside a `max-width: 480px; margin: 0 auto` container. The CTA block switches to stacked layout (`.walk-cta-stacked` pattern). Store badges below, centred.

---

## New components introduced

- `.walk-card-h` — horizontal scroll walk card. 200px wide, image top, name/location/pills below.
- `.home-hero` — brand green full-bleed hero with centred content and 40px safe-area padding.
- `.benefit-block` — icon + title + body benefit card (borderless on mobile, grid item on desktop).
- `.hazard-strip` — brand-mid tinted full-bleed section with green editorial text.

---

---

# Page 2 — Area Index Page (sniffout.co.uk/walks/london/)

## Purpose

Rank for "[region] dog walks" queries. Let the visitor scan the full walk list and narrow it quickly. Convert browsers to walk-page visitors, then to installs.

---

## Mobile layout

### Header
Same `.site-header`.

### Breadcrumb
`.walk-breadcrumb` style (visible desktop only): `Walks › London`

### Region hero

**Container:** `background: var(--surface)`, `padding: 20px 16px 16px`, `border-bottom: 0.5px solid var(--border)`.

**H1:** `font-size: 22px`, `font-weight: 800`, `color: var(--ink)`, `margin-bottom: 6px`, `line-height: 1.2`
Example: `London dog walks`

**Intro sentence:** `font-size: 14px`, `color: var(--ink-2)`, `line-height: 1.55`, `margin-bottom: 12px`
Example: `[n] handpicked dog walks across London. Updated regularly.`

**Walk count chip:** New component `.count-chip`.
```
display: inline-flex
align-items: center
gap: 5px
font-size: 11px
font-weight: 600
color: var(--brand)
background: var(--brand-light)
padding: 4px 10px
border-radius: 20px
```
Text: `[n] walks`

---

### Filter chips

**New component: `.filter-bar`**

```
padding: 12px 16px
background: var(--surface)
border-bottom: 0.5px solid var(--border)
overflow-x: auto
-webkit-overflow-scrolling: touch
white-space: nowrap
display: flex
gap: 8px
```
No scrollbar visible.

**New component: `.filter-chip`**

Default (inactive) state:
```
display: inline-flex
align-items: center
font-size: 12px
font-weight: 500
color: var(--ink-2)
background: var(--bg)
border: 0.5px solid rgba(0,0,0,0.12)
padding: 6px 12px
border-radius: 20px
white-space: nowrap
cursor: pointer
transition: all 0.15s ease
```

Active state:
```
background: var(--brand)
color: white
border-color: var(--brand)
```

`:active { transform: scale(0.97) }`

**Filter groups:**

Row 1 (always visible): `All` (default active), `Easy`, `Moderate`, `Hard`

Row 2 (same bar, continuing): `Off-lead`, `Parkland`, `Woodland`, `Coastal`

These are client-side JS filters only. They toggle `.hidden` class on walk list items. No URL changes. No page reload. The `All` chip deactivates all other chips and shows all walks.

Each chip calls a JS function `filterWalks(type, value)` on click.

---

### Walk list

Walk cards are displayed in a single column on mobile.

**New component: `.walk-list-card`**

```
background: var(--surface)
border-radius: 12px
border: 0.5px solid var(--border)
overflow: hidden
display: block
text-decoration: none
color: var(--ink)
margin-bottom: 10px
transition: transform 0.15s ease
```

`:active { transform: scale(0.97) }`

**Image area:**
```
height: 140px
background: linear-gradient(135deg, #C8D8B0 0%, #A8C088 40%, #8BAD68 70%, #6E9048 100%)
position: relative
overflow: hidden
```
If `heroImage` is set: `<img object-fit: cover; width: 100%; height: 100%>`.

Badges (same `.walk-hero-badge` style from walk page):
- Top-left: difficulty badge
- Top-right: off-lead status badge (`color: var(--brand)` for off-lead, `color: #b45309` for on-lead)

**Card body:** `padding: 12px 14px`

Walk name: `font-size: 15px`, `font-weight: 700`, `color: var(--ink)`, `margin-bottom: 3px`, `line-height: 1.2`

Location: `font-size: 11px`, `color: var(--ink-3)`, `margin-bottom: 8px`

Teaser: `font-size: 13px`, `color: var(--ink-2)`, `line-height: 1.5`, `margin-bottom: 10px`. Single-sentence summary from `description` field, truncated at ~90 characters with ellipsis if over.

Pill row: flex, gap 6px.

**New component: `.meta-pill`**

```
font-size: 11px
color: var(--ink-2)
background: var(--bg)
border: 0.5px solid rgba(0,0,0,0.08)
padding: 3px 9px
border-radius: 20px
```

Show: distance pill, terrain pill. Maximum two pills.

---

### Install CTA insertion

After the 5th walk card in the list, insert the walk-page primary CTA block (`.walk-cta-inner` pattern) with:

Headline: `Get live weather for every walk`
Subtext: `Live conditions, hazard alerts, best window of the day.`
Button: `Open in Sniffout` — links to `/get`

Container: `margin: 16px 0`. Same green block, same styling.

Continue walk list below the CTA.

---

### Footer
Same `.site-footer`.

---

## Desktop layout

### Desktop two-column layout

`display: grid; grid-template-columns: 1fr 320px; max-width: 1200px; margin: 0 auto; padding: 0; align-items: start`.

Left column: walk list (2-col grid of `.walk-list-card`).
Right column: sticky sidebar with install CTA and area context.

### Left column (walk list, desktop)

Walk cards switch to 2-column grid: `display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding: 20px 28px`.

Remove the in-list CTA after card 5. The sidebar CTA handles this on desktop.

### Region hero (desktop)

Full-width above the grid. `padding: 24px 28px 20px; max-width: 1200px; margin: 0 auto`. H1 `font-size: 26px`. Filter bar sits below the hero, full-width.

### Right sidebar (desktop)

`background: var(--surface); padding: 20px; position: sticky; top: 56px; border-left: 0.5px solid var(--border)`.

Contents (top to bottom):
1. `.walk-cta-stacked` install CTA block.
2. `margin-bottom: 20px` gap.
3. `.walk-section-heading` label: `ABOUT THIS AREA`
4. Short area description: `font-size: 13px; color: var(--ink-2); line-height: 1.55`. One short paragraph contextualising the region.
5. `.walk-store-badges--sidebar` badge pair.

---

## New components introduced

- `.count-chip` — small brand-light pill showing walk count.
- `.filter-bar` — horizontal scroll chip row for client-side filtering.
- `.filter-chip` / `.filter-chip--active` — toggleable filter chip with brand active state.
- `.walk-list-card` — full-width listing card with image, name, location, teaser, pills.
- `.meta-pill` — neutral secondary info pill (distance, terrain etc).

---

---

# Page 3 — Guides Index Page (sniffout.co.uk/guides/)

## Purpose

Entry point for all editorial and hazard guide content. Ranks for "[hazard] dogs UK" queries. Builds topical authority. Converts readers to app users through inline CTAs.

---

## Mobile layout

### Header
Same `.site-header`.

### Breadcrumb
`.walk-breadcrumb` style (desktop only): `Guides`

### Page hero

`background: var(--surface)`, `padding: 20px 16px 16px`, `border-bottom: 0.5px solid var(--border)`.

**H1:** `font-size: 22px`, `font-weight: 800`, `color: var(--ink)`, `margin-bottom: 8px`, `line-height: 1.2`
Text: `Dog walking guides for UK owners`

**Intro:** `font-size: 14px`, `color: var(--ink-2)`, `line-height: 1.6`, `margin-bottom: 0`
Text: `Seasonal hazards, terrain advice, and breed-specific guidance. Written for UK dog owners, updated regularly.`

---

### Guide card list

Single column on mobile.

**New component: `.guide-card`**

```
background: var(--surface)
border-radius: 12px
border: 0.5px solid var(--border)
padding: 14px 16px
margin-bottom: 10px
display: block
text-decoration: none
color: var(--ink)
transition: transform 0.15s ease
```

`:active { transform: scale(0.97) }`

No image on guide cards. Text-only.

**Category pill (top of card):**

New component `.category-pill`. Three variants:

Hazard:
```
font-size: 10px; font-weight: 600; color: var(--amber-text);
background: var(--amber-bg); border: 0.5px solid var(--amber-border);
padding: 3px 8px; border-radius: 20px; margin-bottom: 10px; display: inline-block
```

Seasonal (green variant):
```
font-size: 10px; font-weight: 600; color: var(--brand);
background: var(--brand-mid); border: 0.5px solid var(--brand-border);
padding: 3px 8px; border-radius: 20px; margin-bottom: 10px; display: inline-block
```

General (neutral variant):
```
font-size: 10px; font-weight: 600; color: var(--ink-3);
background: var(--bg); border: 0.5px solid rgba(0,0,0,0.10);
padding: 3px 8px; border-radius: 20px; margin-bottom: 10px; display: inline-block
```

**Article title:** `font-size: 15px`, `font-weight: 700`, `color: var(--ink)`, `margin-bottom: 4px`, `line-height: 1.25`

**One-line description:** `font-size: 13px`, `color: var(--ink-2)`, `line-height: 1.5`, `margin-bottom: 8px`

**Read time:** `font-size: 11px`, `color: var(--ink-3)`. Format: `5 min read`

**Right chevron:** `position: absolute` is not needed. Use `display: flex; justify-content: space-between; align-items: flex-start` on the card and place the chevron SVG (14x14px, stroke `var(--brand)`) as the rightmost element beside the text group.

**Card internal layout:**

```
display: flex
gap: 12px
align-items: flex-start
```

Left: text group (category pill, title, description, read time). `flex: 1`.
Right: Lucide `chevron-right` 14x14px, `color: var(--brand)`, `margin-top: 4px`, `flex-shrink: 0`.

---

### Footer
Same `.site-footer`.

---

## Desktop layout

Two-column guide card grid: `display: grid; grid-template-columns: 1fr 1fr; gap: 12px; max-width: 1200px; margin: 0 auto; padding: 32px 40px`. Page hero above the grid: `max-width: 1200px; margin: 0 auto; padding: 32px 40px 0`.

Guide cards on desktop: same component, chevron remains.

---

## New components introduced

- `.guide-card` — text-only card with category pill, title, description, read time, chevron.
- `.category-pill` / `.category-pill--hazard` / `.category-pill--seasonal` / `.category-pill--general` — category label with three colour variants.

---

---

# Page 4 — Individual Guide Page (sniffout.co.uk/guides/ticks-dogs-uk)

## Purpose

Long-form editorial authority. Ranks for "[hazard] dogs UK" queries. Converts readers mid-article via install CTA. Internally links to relevant walk pages. Feels like expert advice from someone who has actually been on a tick-covered hillside with a dog.

---

## Mobile layout

### Header
Same `.site-header`.

### Breadcrumb
`.walk-breadcrumb` style (desktop only): `Guides › Ticks`

---

### Article hero

`background: var(--surface)`, `padding: 20px 16px 16px`, `border-bottom: 0.5px solid var(--border)`.

**Category pill:** `.category-pill--hazard` (or seasonal/general depending on article).

**H1:** `font-size: 22px`, `font-weight: 800`, `color: var(--ink)`, `margin: 8px 0 10px`, `line-height: 1.2`

**Meta row:** `display: flex; gap: 12px; align-items: center; flex-wrap: wrap`
- Last updated: `font-size: 11px; color: var(--ink-3)`. Format: `Updated March 2026`
- Separator: `width: 3px; height: 3px; background: var(--ink-3); border-radius: 50%`
- Read time: `font-size: 11px; color: var(--ink-3)`. Format: `6 min read`

---

### Article body

**Container:** `padding: 20px 16px`.

All body content uses a new set of article-specific typography classes.

**New component: `.article-body`**

```
font-size: 16px
font-weight: 400
color: var(--ink)
line-height: 1.7
```

All article text lives inside `.article-body`. The class sets the base type. Children override specific elements.

**Body paragraph:** `margin-bottom: 18px`. No extra class needed — default `<p>` inside `.article-body`.

**H2 subheading:**

New component `.article-h2`:
```
font-size: 18px
font-weight: 700
color: var(--ink)
margin: 28px 0 10px
line-height: 1.25
letter-spacing: -0.2px
```

**H3 subheading:**

New component `.article-h3`:
```
font-size: 15px
font-weight: 600
color: var(--ink)
margin: 20px 0 8px
line-height: 1.3
```

**Bullet list:**

```
margin: 0 0 18px 0
padding-left: 20px
```

List item:
```
font-size: 16px
color: var(--ink)
line-height: 1.65
margin-bottom: 8px
```

Use `list-style-type: disc` with `::marker { color: var(--brand) }`.

**Warning callout box:**

New component `.callout--warning`:
```
background: var(--amber-bg)
border: 0.5px solid var(--amber-border)
border-left: 3px solid var(--amber-border)
border-radius: 8px
padding: 12px 14px
margin: 20px 0
```

Label: `font-size: 10px; font-weight: 600; color: var(--amber-text); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 5px`
Body: `font-size: 14px; color: var(--amber-text); line-height: 1.55`

**Tip callout box:**

New component `.callout--tip`:
```
background: var(--brand-mid)
border: 0.5px solid var(--brand-border)
border-left: 3px solid var(--brand-border)
border-radius: 8px
padding: 12px 14px
margin: 20px 0
```

Label: `font-size: 10px; font-weight: 600; color: var(--brand); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 5px`
Body: `font-size: 14px; color: var(--brand); line-height: 1.55`

---

### In-article install CTA

Placed mid-article, naturally breaking the content at a logical section boundary (not mid-paragraph). Uses the full-width `.walk-cta-inner` pattern from the walk page, set within `margin: 28px 0`.

Headline: `Plan your next walk with live weather`
Subtext: `Get the Sniffout app. Free, no account needed.`
Button: `Open in Sniffout` — links to `/get`

On mobile: flex row (headline/subtext left, pill button right), same as walk page CTA.
On desktop: stacked block (`.walk-cta-stacked` pattern).

---

### Related walks section

Follows the article body.

**Section label:** `.walk-section-heading` text: `WALKS MENTIONED IN THIS GUIDE`

Two or three `.nearby-walk-row` cards (same component as walk page), linking to relevant walk pages. Gap: 8px.

**See more link:** `font-size: 13px; color: var(--brand); font-weight: 600`. Text: `Browse all [region] dog walks`

---

### Related guides section

**Section label:** `.walk-section-heading` text: `RELATED GUIDES`

Two or three `.guide-card` cards (same component as Guides Index). Stacked column.

---

### Footer
Same `.site-footer`.

---

## Desktop layout

### Desktop two-column layout

`display: grid; grid-template-columns: 1fr 300px; gap: 0; max-width: 1200px; margin: 0 auto; border-top: 0.5px solid var(--border)`.

Left column: article hero + article body + related walks + related guides.
Right sidebar: sticky, white background, `padding: 24px 20px`.

**Right sidebar contents (top to bottom):**

1. `.walk-cta-stacked` install CTA block.

2. `margin-bottom: 20px` gap.

3. `.walk-section-heading` label: `IN THIS GUIDE`

4. **Table of contents links:** `display: flex; flex-direction: column; gap: 8px`. Each link:
   ```
   font-size: 13px
   color: var(--ink-2)
   font-weight: 500
   text-decoration: none
   line-height: 1.3
   ```
   On hover: `color: var(--brand)`. Links to `#section-anchor` on the page.

5. `margin-bottom: 20px` gap below TOC.

6. `.walk-section-heading` label: `RELATED GUIDES`

7. Two `.guide-card` links.

### Left column (desktop)

`padding: 28px; border-right: 0.5px solid var(--border)`.

Article hero: `padding-bottom: 20px; border-bottom: 0.5px solid var(--border); margin-bottom: 24px`.

Article body: `.article-body` with wider line-length feels comfortable at this width. No changes to type sizes.

In-article CTA: switches to stacked pattern (`.walk-cta-stacked`) on desktop.

---

## New components introduced

- `.article-body` — base container for article typography.
- `.article-h2` — 18px/700 section heading within articles.
- `.article-h3` — 15px/600 sub-heading within articles.
- `.callout--warning` — amber tinted callout box.
- `.callout--tip` — green tinted callout box.
- Table of contents link list (no new class needed beyond `<a>` styling in the sidebar context).

---

---

# Page 5 — Install Page (sniffout.co.uk/get)

## Purpose

Convert intent to install. Platform-detection surfaces the most relevant option first. No jargon. No technical language. Feels like a friend explaining how to get the app.

---

## Mobile layout

### Header
Same `.site-header`.

---

### Hero

**Container:** `background: var(--brand)`, `padding: 48px 20px 40px`.

**H1:**
```
Dog walks and live weather,
always in your pocket.
```
- `font-size: 26px`
- `font-weight: 800`
- `color: white`
- `line-height: 1.2`
- `letter-spacing: -0.3px`
- `text-align: center`
- `margin-bottom: 8px`

**Supporting:** `font-size: 14px; color: rgba(255,255,255,0.7); text-align: center; margin-bottom: 0`
Text: `Free. No account. Works on any phone.`

---

### Platform-detected primary CTA

Immediately below the hero. `background: var(--surface)`, `padding: 24px 20px`, `border-bottom: 0.5px solid var(--border)`.

**New component: `.install-primary`**

```
border-radius: 14px
border: 0.5px solid var(--border)
padding: 16px
background: var(--bg)
margin-bottom: 16px
```

The container holds different content based on platform detection JavaScript.

**iOS variant (default for iPhone/iPad):**

Label: `.walk-section-heading` text: `ON IPHONE`

App Store badge: standard Apple badge SVG or image. `height: 44px; display: block; margin: 8px 0`.

Note below badge: `font-size: 12px; color: var(--ink-3); line-height: 1.5`
Text: `Download from the App Store. Tap the icon to launch.`

Separator: `0.5px solid var(--border)`, `margin: 16px 0`.

Label: `.walk-section-heading` text: `OR ADD TO HOME SCREEN`

Brief note: `font-size: 12px; color: var(--ink-2)`. Text: `In Safari, tap the Share button (the box with an arrow), then tap Add to Home Screen.`

**Android variant (Chrome on Android):**

Label: `.walk-section-heading` text: `ON ANDROID`

Google Play badge: standard badge SVG or image. `height: 44px; display: block; margin: 8px 0`.

Note: `font-size: 12px; color: var(--ink-3); line-height: 1.5`

Separator: `0.5px solid var(--border)`, `margin: 16px 0`.

Label: `.walk-section-heading` text: `OR INSTALL DIRECTLY`

Note: `font-size: 12px; color: var(--ink-2)`. Text: `In Chrome, tap the three-dot menu (top right), then Install app.`

**Desktop variant:**

Label: `.walk-section-heading` text: `GET SNIFFOUT ON YOUR PHONE`

QR code block:
```
display: flex
align-items: center
gap: 16px
background: white
border-radius: 12px
padding: 16px
border: 0.5px solid var(--border)
margin: 12px 0
```

QR code image: 80x80px. Links to `https://sniffout.co.uk/get`. Developer generates this with a QR library at build time.

Text alongside QR: `font-size: 13px; color: var(--ink-2); line-height: 1.5`
Text: `Scan with your phone camera to open on your device.`

---

### Step-by-step guide

`background: var(--surface)`, `padding: 24px 20px`.

**Section label:** `.walk-section-heading` text: `HOW TO INSTALL`

**Platform tabs:**

New component `.platform-tabs`:
```
display: flex
gap: 0
margin-bottom: 20px
border-radius: 8px
overflow: hidden
border: 0.5px solid var(--border)
```

Each tab `.platform-tab`:
```
flex: 1
text-align: center
padding: 10px
font-size: 12px
font-weight: 600
color: var(--ink-2)
background: var(--bg)
cursor: pointer
```

Active tab `.platform-tab--active`:
```
background: var(--brand)
color: white
```

Two tabs: `iPhone` and `Android`.

**Step list (new component `.install-steps`):**

```
display: flex
flex-direction: column
gap: 16px
```

Each step `.install-step`:
```
display: flex
gap: 12px
align-items: flex-start
```

Step number bubble:
```
width: 24px
height: 24px
border-radius: 50%
background: var(--brand)
color: white
font-size: 12px
font-weight: 700
display: flex
align-items: center
justify-content: center
flex-shrink: 0
```

Step content:
```
flex: 1
```

Step heading: `font-size: 13px; font-weight: 600; color: var(--ink); margin-bottom: 2px`

Step body: `font-size: 12px; color: var(--ink-2); line-height: 1.5`

**iPhone steps (3 steps):**

1. `Open Safari` / `Sniffout works best when added from Safari. Open this page in Safari if you haven't already.`
2. `Tap the Share button` / `The Share button is the box with an upward arrow at the bottom of the screen.`
3. `Tap Add to Home Screen` / `Scroll down in the share sheet and tap Add to Home Screen. Then tap Add in the top right.`

**Android steps (3 steps):**

1. `Open in Chrome` / `Sniffout works best when installed from Chrome.`
2. `Tap the menu` / `Tap the three-dot menu in the top-right corner of Chrome.`
3. `Tap Install app` / `Tap Install app (or Add to Home Screen). Sniffout will appear on your home screen.`

---

### Why Sniffout section

`background: var(--bg)`, `padding: 28px 20px`.

**Section label:** `.walk-section-heading` text: `WHY SNIFFOUT`

Three benefit statements. Each:

```
display: flex
gap: 10px
align-items: flex-start
margin-bottom: 16px
```

Icon: Lucide icon 20x20px, `color: var(--brand)`.
Text:
- Title: `font-size: 13px; font-weight: 600; color: var(--ink); margin-bottom: 2px`
- Body: `font-size: 12px; color: var(--ink-2); line-height: 1.5`

Three statements:
1. Icon `cloud-sun` / `Know before you go` / `Live weather verdict, heat warnings, and best window of the day for every walk.`
2. Icon `map-pin` / `[n] handpicked UK walks` / `Curated dog walks with off-lead status, terrain, and parking for each one.`
3. Icon `notebook-pen` / `Every walk remembered` / `Log walks, add notes, build a record. No account needed. Data stays on your device.`

---

### Footer
Same `.site-footer`.

---

## Desktop layout

Two columns: `display: grid; grid-template-columns: 1fr 1fr; gap: 40px; max-width: 900px; margin: 0 auto; padding: 48px 40px`.

Left: Hero + Platform-detected CTA.
Right: Step-by-step guide + Why Sniffout.

Hero on desktop: not full-bleed. `background: var(--brand); border-radius: 16px; padding: 40px 32px`. H1 `font-size: 28px`.

The platform tabs and install steps sit in the right column on desktop.

---

## New components introduced

- `.install-primary` — platform-detected CTA container, holds badge or QR code depending on device.
- `.platform-tabs` / `.platform-tab` / `.platform-tab--active` — two-tab iOS/Android switcher.
- `.install-steps` / `.install-step` — numbered step list with circle number badge.

---

---

# Page 6 — 404 Page

## Purpose

Warm and on-brand. The user is lost. Acknowledge that honestly, give them two clear exits, and make them feel the site is looked after. Slightly playful but not gimmicky.

---

## Mobile layout

### Header
Same `.site-header`.

---

### 404 visual block

**Container:** `background: var(--brand)`, `padding: 64px 20px 56px`, `text-align: center`.

**Visual treatment:** The Sniffout icon SVG at 48x48px, white fill, `opacity: 0.3`. Below it, three dots or a simple paw pattern as an abstract decoration — use three circles in a rough diagonal, matching rough paw placement, `width: 8px; height: 8px; background: rgba(255,255,255,0.25); border-radius: 50%`. This is the only decorative element on the whole site. Keep it small and subtle.

**"404" label:**
```
font-size: 11px
font-weight: 600
color: rgba(255,255,255,0.45)
text-transform: uppercase
letter-spacing: 0.08em
margin-bottom: 12px
display: block
```

**Headline:** `font-size: 24px; font-weight: 800; color: white; line-height: 1.2; margin-bottom: 10px`
Text: `That lead went somewhere unexpected.`

**Supporting sentence:** `font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.55; margin-bottom: 0`
Text: `The page you were looking for has either moved or doesn't exist.`

---

### CTA block

`background: var(--bg)`, `padding: 32px 20px`.

**Two CTA buttons, stacked:**

Primary (solid brand):

```
display: block
background: var(--brand)
color: white
font-size: 14px
font-weight: 700
border-radius: 14px
padding: 14px
text-align: center
margin-bottom: 10px
text-decoration: none
transition: transform 0.15s ease
```

`:active { transform: scale(0.97) }`

Text: `Browse dog walks` — links to `/walks/`

Secondary (outline):

Use `.btn-secondary` component from walk page.

Text: `Go to homepage` — links to `/`

**Below the buttons:**

`font-size: 12px; color: var(--ink-3); text-align: center; margin-top: 16px`
Text: `Or try searching for a walk in the Sniffout app.`

---

### Footer
Same `.site-footer`.

---

## Desktop layout

Centre the 404 content within a `max-width: 480px; margin: 0 auto` container. The brand green visual block becomes a card with `border-radius: 16px; overflow: hidden` inside a `padding: 48px 20px` wrapper on the `var(--bg)` page background. The CTA buttons sit below the card in the same container, not full-width — `max-width: 320px; margin: 24px auto 0`.

---

## New components introduced

- `.error-visual` — brand green block with large icon, decorative dots, 404 label, headline, supporting text.
- The paw decoration (three small circles) can be implemented with a single `<span>` and CSS `::before`/`::after` pseudo-elements. No additional class needed.

---

---

## Component inventory summary

| Component | Page first used | New or existing |
|---|---|---|
| `.site-header` | All pages | Existing |
| `.walk-breadcrumb` | All pages (desktop only) | Existing |
| `.site-footer` | All pages | Existing |
| `.walk-cta-inner` / `.walk-cta-stacked` | All pages | Existing |
| `.walk-section-heading` | All pages | Existing |
| `.chip--location` | Homepage, Area index | Existing |
| `.stat-pill` | Homepage, Area index | Existing |
| `.nearby-walk-row` | Guide page | Existing |
| `.walk-store-badges` | Homepage, Install | Existing |
| `.btn-secondary` | 404 | Existing |
| `.walk-hero-badge` | Area index walk card | Existing |
| `.dog-box-label` / `.dog-box-body` style | Various | Existing |
| `.count-chip` | Area index | **New** |
| `.filter-bar` / `.filter-chip` | Area index | **New** |
| `.walk-list-card` | Area index | **New** |
| `.meta-pill` | Area index | **New** |
| `.walk-card-h` | Homepage | **New** |
| `.guide-card` | Guides index, Guide page | **New** |
| `.category-pill` (3 variants) | Guides index, Guide page | **New** |
| `.article-body` | Guide page | **New** |
| `.article-h2` / `.article-h3` | Guide page | **New** |
| `.callout--warning` / `.callout--tip` | Guide page | **New** |
| `.install-primary` | Install page | **New** |
| `.platform-tabs` / `.platform-tab` | Install page | **New** |
| `.install-steps` / `.install-step` | Install page | **New** |
| `.error-visual` | 404 page | **New** |

---

## Developer notes

**Filter chip JavaScript:** The filter chips on the Area Index page require a small JS function. Suggested API: `filterWalks(type, value)` where type is one of `difficulty`, `terrain`, `offLead` and value matches the Hugo front-matter field value. The function adds/removes a `.hidden` class on `.walk-list-card` elements. Hidden cards use `display: none`. The `All` chip calls `filterWalks('all', null)` which removes all `.hidden` classes. This requires all walk cards to have `data-difficulty`, `data-terrain`, `data-offlead` attributes set in the Hugo template.

**Platform detection JavaScript:** The Install page requires a small JS snippet that runs on load and shows the relevant `.install-primary` variant. Detection logic: check `navigator.userAgent` for `iPhone`, `iPad`, `Android`. On desktop (none match), show the QR code variant. The three platform variants can be rendered in the HTML as sibling divs with `.hidden` applied by JS to the irrelevant two.

**QR code:** Generate a static QR code image at build time pointing to `https://sniffout.co.uk/get`. A 300x300px SVG or PNG. Developer can use `go-qrcode` (Hugo compatible) or a third-party service to pre-generate the image.

**404 page in Hugo:** Hugo uses `layouts/404.html` for the 404 page. This overrides the default 404 template. No content file needed — the text is hardcoded in the layout.

**Walk count on homepage and install page:** Use Hugo's `len (where .Site.RegularPages "Section" "walks")` to get the live walk count and pass it to the template. Never hardcode a number.

---

*Spec produced by Designer agent, 2026-03-28. No code files were modified.*
