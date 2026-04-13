# Walk Page Sections Spec: "Before you go" and "For your dog"
**Date:** 13 April 2026
**Author:** Designer
**Status:** Ready for Developer

---

## Context and goals

Walk pages currently have two thin information blocks: a "Practical info" key-value card (3 rows: Parking, Getting there, Facilities) and a "For your dog" card that renders a single `dogSummary` prose paragraph. Both live in the sidebar on desktop and repeat inline for mobile.

These sections are under-serving two primary user intents:
1. Pre-trip logistics: Can I get there by train? Is parking free? What are the seasonal access rules?
2. Suitability assessment: Will this work for my dog specifically? Are there stiles? Is there water on the route?

This spec replaces the current thin implementations with two fuller, structured sections. The existing `practical info` sidebar block and `dogSummary` card are deprecated in favour of the new sections specified here.

**CSS class prefix for all new elements: `ws-`** (already established convention for walk single template). New classes introduced here follow the same prefix.

---

## Current page structure (reference)

Top to bottom, as rendered:

1. Header / nav
2. Breadcrumb
3. Hero image with overlay (title, location, difficulty badge, off-lead badge)
4. Stat strip (Distance, Duration, Terrain, Off-lead)
5. Walk description (Ailsa copy, pull quote woven in)
6. Seasonal notes pills
7. "Good to know" related guide cards
8. Live weather card (Open-Meteo)
9. [Mobile only] Weather CTA pill
10. [Mobile only] Practical info (3 rows)
11. [Mobile only] For your dog card (dogSummary prose)
12. Nearby walks rows
13. FAQ block
14. App CTA strip
15. Sidebar (desktop): Weather CTA + Practical info + For your dog card

---

## New page structure (after implementation)

The two new sections replace items 10-11 (mobile) and the sidebar Practical info + For your dog card (desktop). The sidebar gains the two new structured sections. No other sections move.

**Content column, mobile insert order:**

... (weather card)
→ **Before you go** (new - full-width on mobile)
→ **For your dog** (new - full-width on mobile)
→ Nearby walks
→ FAQ block

**Sidebar, desktop:**

Weather CTA
→ **Before you go** (new)
→ **For your dog** (new)

The sections appear together, in this order (Before you go first, For your dog second), in both mobile and desktop positions.

---

## Section 1: "Before you go"

### Purpose

Practical logistics a dog owner needs before they drive to a walk. Everything that answers "can I actually do this, and how do I get there?" before leaving home.

### Field evaluation and recommendations

| Field | Recommendation | Rationale |
|-------|---------------|-----------|
| Parking | **Include** | Already exists as `parking` frontmatter. The most-asked logistics question. |
| Nearest town or village | **Include** | Useful for sat nav. Derivable from `location` in most cases but worth a dedicated `nearestTown` field for clarity. |
| OS grid reference / what3words | **Exclude** | OS grid refs are unfamiliar to most users. what3words requires an API dependency and licence. The weather card already uses lat/lng for positioning. Excluded until there is clear user demand. |
| Public transport options | **Include (as `gettingThere`)** | Already exists in some walk files. Rename intent to be explicit about public transport where available. Keep field name `gettingThere`. |
| Best time of year to visit | **Include (as `bestSeason`)** | High value for walk discovery. A short plain-English phrase. Not a seasonal calendar - a single line like "Year-round, best spring and autumn". |
| Terrain underfoot | **Include (conditional)** | Render `wetNote` as a "Wet weather" row when the field is populated. Render `hotNote` as a "Summer" row when populated. These are existing fields - no new frontmatter needed, just new rendering. |
| Access restrictions | **Include (as `accessNotes`)** | Seasonal closures, conservation grazing periods, stile warnings. Currently buried in prose or absent. Worth surfacing as a dedicated row. Only render if populated - most walks will not have this. |
| Estimated driving time from nearest city | **Exclude** | Highly variable by origin, becomes incorrect fast, no good way to keep accurate. Drop this entirely. |

### Fields rendered in this section

| Row label | Source frontmatter | Render condition |
|-----------|-------------------|-----------------|
| Parking | `parking` | Always render if value exists |
| Getting there | `gettingThere` | Always render if value exists |
| Nearest town | `nearestTown` | Render if value exists (falls back gracefully if absent) |
| Facilities | `facilities` | Always render if value exists |
| Wet weather | `wetNote` | Render only if `wetNote` is populated |
| Summer | `hotNote` | Render only if `hotNote` is populated |
| Access notes | `accessNotes` | Render only if `accessNotes` is populated |

**Minimum viable:** A walk that only has `parking`, `gettingThere`, and `facilities` still renders a usable section. The section should never appear empty - if none of these fields are populated, suppress the entire section.

### Visual treatment

**Structure:** Vertical list of icon + label + value rows, contained in a white card with 16px border radius and 1px `var(--border)` border. This extends the existing `ws-practical-rows` / `ws-practical-row` pattern already in use, with one addition: a leading icon per row.

**Section header label:** "Before you go" in the existing `ws-section-label` style (11px, 600 weight, uppercase, `rgba(44,74,20,0.55)`). This sits above the card, flush to the card's top.

**Row anatomy (icon + label + value):**

```
[icon 16x16]  [key label, 13px 600 ink-2]     [value, 13px ink, right-aligned]
```

On mobile, if the value is long (over ~30 chars) the value wraps below the key rather than right-aligning. See layout note below.

**Icons:** Inline SVG, 16x16, stroke style consistent with existing `ws-stat-icon` (stroke-width 1.75, stroke-linecap round, stroke-linejoin round), colour `var(--ink-2)`. Icons are decorative - they aid scannability, not convey unique information.

Recommended icon assignments:

| Row | Icon |
|-----|------|
| Parking | Simple P-in-square or car outline. Use: `<path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>` (car outline, existing Lucide `car`) |
| Getting there | Train or map-pin. Recommend train: `<rect x="4" y="3" width="16" height="16" rx="2"/>` with inner lines (Lucide `train`) |
| Nearest town | Map pin: `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>` |
| Facilities | Coffee cup or fork-knife. Use: fork-knife (Lucide `utensils`) |
| Wet weather | Cloud with rain drop: two short paths descending from a cloud arc |
| Summer | Sun: circle with radiating lines |
| Access notes | Info circle: `<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>` |

All icons use `currentColor` so they inherit `var(--ink-2)` from the row context.

### Layout on mobile

Single column. Full width of the content column. Card spans edge to edge of the content column with standard horizontal padding (16px from viewport edge, matching other cards on the page). Rows stack vertically. Long values wrap naturally.

### Layout on desktop (sidebar)

Full width of the sidebar column. Rows behave the same as mobile - key left, value right, wrapping if needed.

---

## Section 2: "For your dog"

### Purpose

Dog-specific information that helps owners decide if this walk suits their dog before they drive there. Replaces the single-paragraph `dogSummary` with structured, scannable items.

### Field evaluation and recommendations

| Field | Recommendation | Rationale |
|-------|---------------|-----------|
| Off-lead status | **Include** | Already in `offLead` frontmatter. Currently shown in stat strip but worth restating in plain English with context. Most important field for most dog owners. |
| Livestock present | **Include** | Already in `livestock` boolean. Currently not surfaced on website at all. Directly affects whether to attend with a reactive dog. |
| Water sources on the route | **Include (as `waterOnRoute`)** | High value, especially in warm weather. New frontmatter field needed. Simple boolean or short description string. |
| Shade availability | **Include (as `shadeOnRoute`)** | Useful for brachycephalic breed owners and summer walking. New frontmatter field. Simple boolean or short description. |
| Difficulty for dogs | **Exclude** | Too subjective. Human difficulty rating (`difficulty`) is already surfaced. Adding a parallel "dog difficulty" rating would require consistent criteria the content team does not yet have. Revisit in Phase 2. |
| Known hazards from `hazards` array | **Include** | The `hazards` array exists in WALKS_DB and should be used. Approved values: deer, adders, ticks, algae, livestock, ground-nesting-birds, cliff, flooding, paw-burn, mountain-bikers. Surface as plain-English hazard chips below the main rows. |
| Dog-friendly facilities nearby | **Include** | Absorbed into the `facilities` field in "Before you go" above, but dog-specific facilities (water tap, outdoor seating, dog-friendly cafe) warrant a dedicated `dogFacilities` row here. |
| Suitable breeds/sizes note | **Optional (as `breedNote`)** | Include only when there is a genuine, meaningful call-out (e.g. Rhossili causeway: short-legged dogs, not recommended). Do not pad walks without a genuine note. Render only if `breedNote` is populated. |
| Stiles | **Include (derived from `hasStiles`)** | `hasStiles` boolean already exists in WALKS_DB schema. New frontmatter field needed for website. Map to a plain-English row: "No stiles" / "Stiles present - check before going with a large dog." |

### Fields rendered in this section

| Row label | Source frontmatter | Render condition |
|-----------|-------------------|-----------------|
| Off-lead | `offLead` + plain English mapping | Always render |
| Livestock | `livestock` boolean | Always render ("Livestock present" or "No livestock recorded") |
| Water on route | `waterOnRoute` | Always render if field exists; suppress section row if field absent |
| Shade | `shadeOnRoute` | Render only if `shadeOnRoute` is populated |
| Dog facilities | `dogFacilities` | Render only if populated |
| Stiles | `hasStiles` boolean | Render only if `hasStiles` is populated in frontmatter |
| Breed note | `breedNote` | Render only if `breedNote` is populated |
| Hazards | `hazards` array | Render hazard chips block if array is non-empty |

**Minimum viable:** A walk that only has `offLead` and `livestock` still renders a useful section. The section must never appear completely empty - `offLead` should always be present.

### Off-lead plain English mapping

The `offLead` frontmatter value is used verbatim in the stat strip. In the "For your dog" section, add a one-line plain English description below the value:

| `offLead` value | Display value | Plain English note |
|-----------------|--------------|-------------------|
| `Full` | Full off-lead | Dogs can run off lead for the entire route. |
| `Partial` | Partial off-lead | Off-lead on open sections. Leads needed in some areas - see description. |
| `None` / `On-lead only` | On-lead only | Dogs must be kept on lead for the full route. |

### Hazard chips

If the `hazards` array is populated, render a row of small chips below the structured rows. These are informative, not warnings.

**Plain English hazard labels:**

| hazards value | Chip label |
|---------------|-----------|
| `adders` | Adders |
| `ticks` | Ticks |
| `algae` | Algae risk |
| `livestock` | Livestock |
| `deer` | Deer present |
| `ground-nesting-birds` | Ground-nesting birds |
| `cliff` | Unfenced drops |
| `flooding` | Flood risk |
| `paw-burn` | Paw burn risk |
| `mountain-bikers` | Shared with cyclists |

**Chip style:** Small pill, 11px text, 600 weight, `rgba(44,74,20,0.55)` text colour, `rgba(44,74,20,0.08)` background, 6px border radius, 6px 10px padding. Identical pattern to the section label colour treatment but used as a chip rather than a heading. No icons inside chips - chips are text-only. Chips wrap naturally onto multiple lines on narrow viewports.

**Chip block placement:** Below the last structured row, separated by 12px top margin. No section sub-label above the chips.

### Visual treatment

**Structure:** Identical card treatment to "Before you go" - white surface, 16px border radius, 1px `var(--border)`, same row anatomy (icon + key + value). The two sections should read as a matched pair when stacked in the sidebar.

**Section header label:** "For your dog" using the same `ws-section-label` style.

**Icons for this section:**

| Row | Icon |
|-----|------|
| Off-lead | Shield with checkmark or paw outline. Recommend: shield path already used in stat strip - `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>` |
| Livestock | Simple sheep/cattle silhouette is complex - use an alert triangle for "yes" and a checkmark for "no": toggle between `<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94..."/>` (triangle, amber) and `<polyline points="20 6 9 17 4 12"/>` (check, brand green) |
| Water on route | Water drop: `<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>` |
| Shade | Tree: `<path d="M17 22v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="13" r="4"/><path d="M12 3v2M4.22 5.22l1.42 1.42M1 12h2M4.22 18.78l1.42-1.42M12 21v2M17.78 18.78l1.42 1.42M23 12h-2M17.78 5.22l-1.42 1.42"/>` - or simplify to a sun-with-cloud |
| Dog facilities | Cup or building: `<path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/>` (coffee) |
| Stiles | Fence section: two vertical posts and two horizontal rails |
| Breed note | Info circle (same as Access notes above) |

### Layout

Same as Section 1. Single column mobile, full sidebar width on desktop.

---

## Design recommendations: combined view

### Where sections appear on the page

**Placement decision:** Both sections belong in the sidebar on desktop and inline in the content column on mobile. This matches the existing pattern for Practical info and For your dog. The sections appear after the live weather card and before the Nearby walks rows.

**Order:** "Before you go" appears first, "For your dog" second. Rationale: users are scanning to decide whether the walk is accessible to them at all before they ask if it suits their dog specifically.

**Combined vs. separate:** Keep them as **two separate sections** with distinct labels. Combining them into a single card would make the section too long to scan quickly. The two-section structure also reflects two distinct mental models: logistics vs. dog suitability.

### Section spacing

12px gap between the two sections when stacked. Both sections sit naturally within the existing sidebar rhythm (24px bottom margin on each card).

### Mobile: no duplication

The current template duplicates Practical info and For your dog (once inline, once in the sidebar). The new implementation must follow the same pattern: use `ws-mobile-only` class on the inline mobile blocks and allow the sidebar blocks to show naturally on desktop. This is the established convention in the template.

### Icons: consistency rule

All icons in both sections must use the same stroke spec as the existing `ws-stat-icon` rule:
```css
stroke-width: 1.75;
stroke-linecap: round;
stroke-linejoin: round;
fill: none;
```

Icon size: 16x16 (slightly smaller than the 20x20 stat strip icons, appropriate for the denser row layout).

### Row layout: key-value with icon

Desktop and mobile rows follow this structure:
```
[icon 16x16]  [key 13px 600 ink-2]  [value 13px ink]
```

Use `display: flex; align-items: flex-start; gap: 10px` on the row. The icon and key label are left-aligned and stay on the same line. The value right-aligns on desktop when the combined key+value fits on one line. On mobile, allow value to wrap below key rather than right-align (prevents very long values from crushing the layout).

Suggest a `ws-byf-row` class (Before You Go row) and `ws-fyd-row` class (For Your Dog row) - or unify as `ws-info-row` since the anatomy is identical. A single shared `ws-info-row` class is preferable to avoid duplication.

### Livestock icon: colour coding

The livestock row is the only row that changes colour based on its value:
- `livestock: true` - icon colour `var(--amber)` (`#D97706`), key text `var(--amber)` - signals attention needed
- `livestock: false` or absent - icon colour `var(--brand)` with lower opacity, key text `var(--ink-2)` - neutral

This is the only colour exception in either section. All other icons are `var(--ink-2)`.

---

## Frontmatter additions

### New fields required

The following fields are new to the website walk frontmatter schema. They do not need to match the PWA `WALKS_DB` schema exactly - the website schema can extend it independently.

```yaml
# Logistics
nearestTown: string
# "Dorking" — plain town or village name, no county. Used as sat nav anchor for users.
# Optional. Falls back gracefully if absent (row not rendered).

accessNotes: string
# "Conservation grazing on upper slopes April-October. Leads required when cattle present."
# Optional. Only add when there is a genuine seasonal or permanent restriction beyond
# the standard livestock/off-lead fields. Do not pad.

# Dog-specific
waterOnRoute: string
# Short description: "River crossing at the base. Pond at the midpoint."
# Or simply: "Yes - river at start" / "No water on route"
# Optional but high value. Populate for all walks where known.

shadeOnRoute: string
# "Good shade in the woodland sections. Open downland is exposed."
# Or: "Limited shade - mostly open heathland."
# Optional. Most useful for summer walking context. Populate where meaningful.

dogFacilities: string
# "Dog-friendly terrace at the NT cafe at the summit."
# Optional. Only populate if there is a specific, verified dog-friendly facility.
# Do not guess. Leave blank if unknown.

hasStiles: boolean
# true / false
# Optional on website (may not be verified for all walks).
# When true: renders "Stiles present" row with note about large dogs.
# When false: renders "No stiles on this route."

breedNote: string
# "The Worms Head causeway is not suitable for short-legged or arthritic dogs."
# Optional. Use sparingly. Only when there is a genuine, meaningful call-out.
# Do not add generic notes like "suitable for all breeds" - leave blank instead.

hazards: array of strings
# Carries over from PWA WALKS_DB schema.
# Website-specific: add this field to walk pages where the data is known.
# Approved values only: deer, adders, ticks, algae, livestock, ground-nesting-birds,
# cliff, flooding, paw-burn, mountain-bikers
# Example: hazards: [ticks, adders]
```

### Existing fields already in use (no change needed)

```yaml
parking: string        # Already present in most walks
gettingThere: string   # Already present in most walks
facilities: string     # Already present in most walks
offLead: string        # Already present - full / partial / none
livestock: boolean     # Already present in some walks (needs adding to more)
wetNote: string        # Already in PWA schema - add to website frontmatter
hotNote: string        # Already in PWA schema - add to website frontmatter
```

Note: `wetNote` and `hotNote` exist in the PWA WALKS_DB but are not currently used in website walk frontmatter. Adding them to the website walk files is part of the enrichment work.

### Full example frontmatter block (additions only)

```yaml
# New fields - add to existing frontmatter
nearestTown: "Dorking"
accessNotes: "Conservation grazing on upper slopes April to October. Leads required when cattle are present."
waterOnRoute: "River Mole at the base. Stepping stones accessible in most conditions."
shadeOnRoute: "Good shade in the mixed woodland. Open chalk downland above the treeline is exposed."
dogFacilities: "Dog-friendly terrace at the National Trust cafe at the summit viewpoint."
hasStiles: false
breedNote: ""
hazards: [ticks, deer]
wetNote: "The chalk zigzag path becomes loose and slippery in wet weather. Consider the longer path around the hill on wet days."
hotNote: "The open chalk downland offers no shade. Walk early morning or late afternoon in summer. Water available at the cafe."
```

---

## Example content: Box Hill Summit Loop

This is the reference example for the Developer showing exactly how both sections render with real content.

### Frontmatter state (after enrichment)

```yaml
title: "Box Hill Summit Loop"
lat: 51.2533
lng: -0.3039
location: "Dorking, Surrey"
county: "Surrey"
area: "Box Hill"
distance: "5.1 km"
difficulty: "Moderate"
terrain: "Woodland and chalk downland"
offLead: "Partial"
duration: "~1h 30m"
parking: "Box Hill National Trust car park"
nearestTown: "Dorking"
gettingThere: "Box Hill and Westhumble station, 1.5 miles from the car park"
facilities: "Cafe at summit viewpoint"
accessNotes: "Conservation grazing on the upper slopes April to October. Leads required when cattle are present."
waterOnRoute: "River Mole at the base. Stepping stones accessible in most conditions."
shadeOnRoute: "Good shade in the woodland sections. The upper chalk downland is exposed."
dogFacilities: "Dog-friendly terrace at the National Trust cafe at the summit."
hasStiles: false
breedNote: ""
hazards: [ticks, deer]
wetNote: "The chalk zigzag path becomes loose and slippery when wet. Take the longer path around the hill on wet days."
hotNote: "The open downland has no shade. Walk early morning or late afternoon in summer. Water at the summit cafe."
```

### How "Before you go" renders

**Section label:** BEFORE YOU GO

**Card rows:**

```
[car icon]        Parking        Box Hill National Trust car park
[train icon]      Getting there  Box Hill and Westhumble station, 1.5 miles from the car park
[pin icon]        Nearest town   Dorking
[utensils icon]   Facilities     Cafe at summit viewpoint
[rain icon]       Wet weather    The chalk zigzag path becomes loose and slippery when wet. Take the longer path around the hill on wet days.
[sun icon]        Summer         The open downland has no shade. Walk early morning or late afternoon in summer. Water at the summit cafe.
[info icon]       Access notes   Conservation grazing on the upper slopes April to October. Leads required when cattle are present.
```

### How "For your dog" renders

**Section label:** FOR YOUR DOG

**Card rows:**

```
[shield icon]    Off-lead          Partial off-lead
                                   Off-lead on open sections. Leads needed in some areas - see description.
[check icon]     Livestock         No livestock recorded
[drop icon]      Water on route    River Mole at the base. Stepping stones accessible in most conditions.
[shade icon]     Shade             Good shade in the woodland sections. The upper chalk downland is exposed.
[coffee icon]    Dog facilities    Dog-friendly terrace at the National Trust cafe at the summit.
[check icon]     Stiles            No stiles on this route.
```

**Hazard chips (below rows):**

```
[Ticks]  [Deer present]
```

---

## CSS classes introduced

The Developer should introduce the following new CSS classes in `themes/sniffout/static/css/main.css`. All follow the `ws-` prefix convention.

```
ws-info-section          Wrapper for each section (before-you-go or for-your-dog)
ws-info-card             The white surface card (border-radius 16px, border, surface bg)
ws-info-row              Individual row inside the card (flex, icon + key + value)
ws-info-row--last        Last row variant (removes bottom border)
ws-info-icon             The 16x16 inline SVG icon (ink-2 colour)
ws-info-icon--amber      Amber variant for livestock=true
ws-info-key              Label text (13px, 600, ink-2)
ws-info-val              Value text (13px, ink)
ws-info-val--note        Value text for wetNote/hotNote/accessNotes/breedNote rows
                         (slightly lighter, 13px, ink-2, italic optional - designer's call)
ws-info-sublabel         The plain-English off-lead expansion line (12px, ink-2, line-height 1.5)
                         Sits below the main value in the off-lead row only.
ws-hazard-chips          Flex-wrap container for hazard chips
ws-hazard-chip           Individual chip (pill style, brand green tint)
```

### Shared card style (ws-info-card)

Identical to the existing `.ws-practical-rows` treatment:
```css
background: var(--surface);
border: 1px solid var(--border);
border-radius: 16px;
overflow: hidden;
margin-bottom: 24px;
```

### Row style (ws-info-row)

Extends `.ws-practical-row` with icon column added:
```css
display: flex;
align-items: flex-start;
gap: 10px;
padding: 12px 16px;
border-bottom: 1px solid var(--border);
```

**Icon column:** `flex-shrink: 0; margin-top: 1px` (optical alignment with text cap height).

**Key column:** `flex-shrink: 0; min-width: 100px` (prevents key labels wrapping on most mobile sizes).

**Value column:** `flex: 1; text-align: right` on desktop. On mobile (`max-width: 480px`): `text-align: left`.

### Hazard chip style (ws-hazard-chip)

```css
display: inline-flex;
align-items: center;
font-size: 11px;
font-weight: 600;
letter-spacing: 0.03em;
color: rgba(44,74,20,0.65);
background: rgba(44,74,20,0.08);
border-radius: 6px;
padding: 4px 8px;
```

---

## Hugo template changes

The Developer will update `themes/sniffout/layouts/_default/single.html` to:

1. Replace the existing `ws-practical-rows` + `ws-dog-card` blocks (in both mobile inline and sidebar positions) with the new `ws-info-section` blocks.
2. Add Hugo conditionals for optional fields (`{{ if .Params.wetNote }}`, `{{ if .Params.accessNotes }}`, etc.) so rows only render when the field is populated.
3. Build the hazard chips block from the `hazards` array using a `range` loop with a lookup map for plain-English labels.
4. Add the off-lead sublabel using the mapping table above (a Hugo `if/else if/else` chain on `offLead` value).
5. Use `ws-mobile-only` on the inline mobile section blocks, consistent with existing pattern.

The `ws-practical-rows`, `ws-practical-row`, `ws-practical-key`, `ws-practical-val`, `ws-dog-card`, `ws-dog-label`, and `ws-dog-body` CSS classes and HTML blocks are deprecated by this spec. The Developer should remove them from the template and may optionally remove the CSS rules (or leave them dormant - no functional impact either way).

---

## Content enrichment scope

Once the template is updated, the content team will need to enrich walk frontmatter with the new fields. Priority order for enrichment:

1. The 14 original walk pages (Box Hill, Frensham, Frensham Little Pond, Hindhead, Leith Hill, Ranmore Common, Newlands Corner, Cissbury Ring, Seven Sisters, South Downs Way Alfriston, Dartmoor Haytor, New Forest Bolderwood, Richmond Park, Wimbledon Common) - these have Ailsa descriptions and are the most fully realised pages.
2. High-traffic area walks (Lake District, Yorkshire, Dartmoor) as identified by GA4.
3. Remaining 63 walks progressively.

The new fields are optional - pages that have not been enriched will still render correctly, showing only the rows that have data. The `offLead` row always renders (it is already populated on all walks). The sections will never appear completely empty.

---

## Out of scope for this spec

- Walk route maps (Phase 2, separate spec needed)
- Dog-friendly accommodation affiliate section (Phase 2, AWIN setup needed first)
- User-submitted tips or reviews (Phase 3, community features deferred)
- "Where to stay" section (separate spec, affiliate dependency)
- Trail Tips contextual section on walk pages (separate spec, Trail Tips pipeline needed first)
