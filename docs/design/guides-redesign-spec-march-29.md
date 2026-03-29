# Guides Index Page Redesign Spec
**Date:** 2026-03-29
**Status:** Designer-approved. Ready for Developer implementation.
**Author:** Designer agent
**Scope:** Guides index page only (`/guides/`). Three elements: hero featured card, category filter chips, multi-column card grid.

---

## Design intent

The current guides index is a simple text list. The redesign introduces an editorial hierarchy: one featured article at the top given prominent visual treatment, filter chips for navigation, and a card grid below. The result should feel like a considered editorial page, not a generic blog template. Every detail draws from the existing Sniffout design language.

---

## Design tokens (from existing system)

All values reference the token set already in `main.css`. No new tokens are introduced.

```
--brand:        #2C4A14
--bg:           #F7F5F0
--surface:      #FFFFFF
--border:       rgba(0,0,0,0.08)
--ink:          #1A1A1A
--ink-2:        #555555
--ink-3:        #888888
--brand-light:  #E8F0DC
--brand-mid:    #F0F7E8
--brand-border: #9DC85A
--amber-bg:     #FFF8E8
--amber-border: #F5C842
--amber-text:   #7A5C00
```

---

## Page structure overview

```
site-header (sticky, existing)
walk-breadcrumb (desktop only, existing)

[guides-page]
  [guides-page-inner]       <- max-width 1200px, centred, padding 0 20px
    [guides-page-header]    <- H1 + intro sentence
    [guide-hero-card]       <- featured first guide
    [guide-filter-bar]      <- category chips (reuses filter-chip)
    [guide-grid]            <- 2-col card grid (all guides except the hero)

site-footer (existing)
```

---

## Element 1: Page header

The existing `.guides-hero` H1 and intro sentence are kept but moved inside the page container and given updated desktop spacing.

**Mobile:**
- Container: `padding: 20px 0 0`
- H1: existing `.guides-h1` (22px/800/ink, line-height 1.2)
- Intro: existing `.guides-intro` (14px/400/ink-2, line-height 1.6)
- Margin-bottom on intro: `16px`

**Desktop:**
- H1: `font-size: 26px`
- Padding: `32px 0 0`

No new classes needed. Reuse `.guides-h1` and `.guides-intro`.

---

## Element 2: Hero featured article card

**New class: `.guide-hero-card`**

### Visual

Full-width, brand green card. This is the first guide in `.Pages` order, given prominent display.

```
background:     #2C4A14 (var(--brand))
border-radius:  16px
overflow:       hidden
min-height:     220px (mobile) / 280px (desktop)
padding:        24px (mobile) / 32px (desktop)
display:        flex
flex-direction: column
justify-content:space-between
transition:     transform 0.15s ease
```

`:active { transform: scale(0.97) }`

The card is an `<a>` tag linking to the featured guide's permalink.

---

### Mobile layout (single column, stacked top to bottom)

**New class: `.guide-hero-body`**

```
display:        flex
flex-direction: column
gap:            10px
```

#### Category pill (inside hero)

**New class: `.guide-hero-pill`**

Reuses the `.category-pill` shape but with white background for contrast on the dark card.

```
font-size:      10px
font-weight:    600
padding:        3px 8px
border-radius:  20px
display:        inline-block
color:          #2C4A14
background:     rgba(255,255,255,0.9)
border:         none
```

No variant classes needed here - the white background works for all categories inside the hero.

#### Title

**New class: `.guide-hero-title`**

```
font-size:      22px
font-weight:    700
color:          white
line-height:    1.2
letter-spacing: -0.3px
margin:         0
```

Desktop: `font-size: 28px`

#### Description

**New class: `.guide-hero-desc`**

```
font-size:      14px
color:          rgba(255,255,255,0.75)
line-height:    1.6
margin:         0
overflow:       hidden
display:        -webkit-box
-webkit-line-clamp: 2
-webkit-box-orient: vertical
```

#### Read time

**New class: `.guide-hero-meta`**

```
font-size:      11px
color:          rgba(255,255,255,0.55)
margin:         0
```

#### CTA button

**New class: `.guide-hero-cta`**

```
display:        inline-flex
align-items:    center
background:     white
color:          #2C4A14
font-size:      13px
font-weight:    600
border-radius:  20px
padding:        8px 16px
text-decoration:none
align-self:     flex-start
margin-top:     4px
transition:     transform 0.15s ease
```

`:active { transform: scale(0.97) }`

Text: `Read guide`

---

### Desktop layout (two columns: text left 60%, visual right 40%)

At `min-width: 768px`, the hero card switches from column to row.

**New class: `.guide-hero-inner`**

```
display:        flex
gap:            32px
align-items:    center
```

`.guide-hero-body` becomes the left column:
```
flex: 0 0 60%
```

**New class: `.guide-hero-visual`**

Right column decorative element. Desktop only (hidden on mobile).

```
flex:           0 0 40%
display:        flex
align-items:    center
justify-content:center
```

Contains the Sniffout dog icon SVG at 96px x 96px, white fill, `opacity: 0.12`. This is a placeholder visual until real illustration assets exist. The same SVG path is already used in the header and footer.

```css
.guide-hero-visual { display: none; }
@media (min-width: 768px) {
  .guide-hero-visual { display: flex; }
}
```

---

### Full mobile CSS block

```css
.guide-hero-card {
  background: #2C4A14;
  border-radius: 16px;
  overflow: hidden;
  min-height: 220px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  transition: transform 0.15s ease;
  margin-bottom: 0;
}
.guide-hero-card:active { transform: scale(0.97); }

.guide-hero-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.guide-hero-inner {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

.guide-hero-pill {
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 20px;
  display: inline-block;
  color: #2C4A14;
  background: rgba(255,255,255,0.9);
  align-self: flex-start;
}

.guide-hero-title {
  font-size: 22px;
  font-weight: 700;
  color: white;
  line-height: 1.2;
  letter-spacing: -0.3px;
  margin: 0;
}

.guide-hero-desc {
  font-size: 14px;
  color: rgba(255,255,255,0.75);
  line-height: 1.6;
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.guide-hero-meta {
  font-size: 11px;
  color: rgba(255,255,255,0.55);
  margin: 0;
}

.guide-hero-cta {
  display: inline-flex;
  align-items: center;
  background: white;
  color: #2C4A14;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  padding: 8px 16px;
  text-decoration: none;
  align-self: flex-start;
  margin-top: 4px;
  transition: transform 0.15s ease;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
}

.guide-hero-cta:active { transform: scale(0.97); }

.guide-hero-visual {
  display: none;
}
```

### Desktop overrides

```css
@media (min-width: 768px) {
  .guide-hero-card {
    min-height: 280px;
    padding: 32px;
  }
  .guide-hero-inner {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
  .guide-hero-body {
    flex: 0 0 60%;
    gap: 12px;
  }
  .guide-hero-title {
    font-size: 28px;
  }
  .guide-hero-visual {
    display: flex;
    flex: 0 0 40%;
    align-items: center;
    justify-content: center;
    opacity: 0.12;
  }
}
```

---

## Element 3: Category filter chips

Reuses the existing `.filter-bar`, `.filter-chip`, and `.filter-chip--active` classes from the walks index. No new component CSS needed.

Add the bar below the hero card with `margin: 24px 0 20px`.

**Categories (matching guide frontmatter `category` field values):**
- All (default active, `data-category="all"`)
- Hazards (`data-category="Hazards"`)
- Seasonal (`data-category="Seasonal"`)
- Breed guides (`data-category="Breed guides"`)

**New utility class: `.guide-filter-chip`**

This is only used to scope the JS selector independently from the walks page filter chips. It is applied in addition to `.filter-chip`. No new CSS needed - it is a JS hook only.

HTML output example:
```html
<div class="filter-bar" style="margin:24px 0 20px;">
  <button class="filter-chip filter-chip--active guide-filter-chip" onclick="filterGuides('all', this)">All</button>
  <button class="filter-chip guide-filter-chip" onclick="filterGuides('Hazards', this)">Hazards</button>
  <button class="filter-chip guide-filter-chip" onclick="filterGuides('Seasonal', this)">Seasonal</button>
  <button class="filter-chip guide-filter-chip" onclick="filterGuides('Breed guides', this)">Breed guides</button>
</div>
```

---

## Element 4: Guide card grid

### Container

**New class: `.guide-grid`**

```css
.guide-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 768px) {
  .guide-grid {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
```

---

### Individual guide grid card

**New class: `.guide-grid-card`**

```css
.guide-grid-card {
  background: #FFFFFF;
  border: 0.5px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  overflow: hidden;
  display: block;
  text-decoration: none;
  color: #1A1A1A;
  transition: transform 0.15s ease;
}
.guide-grid-card:active { transform: scale(0.97); }
```

The card wraps three sections: a coloured band at the top, a body with text, and a footer row.

---

### Card colour band

**New class: `.guide-grid-card-band`**

A coloured header strip at the top of each card. No photography. The colour and icon indicate the article category at a glance.

```css
.guide-grid-card-band {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
```

**Variant classes (one applied per card based on category):**

```css
.guide-grid-card-band--hazard {
  background: #E8F0DC;
}
.guide-grid-card-band--seasonal {
  background: #FFF8E8;
}
.guide-grid-card-band--breed {
  background: #EEF0FF;
}
.guide-grid-card-band--general {
  background: #F7F5F0;
}
```

**Icons centred inside the band (Lucide SVG, 28x28px):**

| Category | Variant class | Icon name | Stroke colour |
|---|---|---|---|
| Hazards | `--hazard` | `triangle-alert` | `#2C4A14` |
| Seasonal | `--seasonal` | `sun` | `#D97706` |
| Breed guides | `--breed` | `heart` | `#6366F1` |
| General / other | `--general` | `book-open` | `#888888` |

Icon opacity: `0.6`. This prevents the icon from being too heavy against the tinted background.

---

### Card body

**New class: `.guide-grid-card-body`**

```css
.guide-grid-card-body {
  padding: 14px;
}
```

Contents (top to bottom):

**Category pill:** existing `.category-pill` component with existing variant classes (`.category-pill--hazard`, `.category-pill--seasonal`, `.category-pill--general`). `margin-bottom: 8px`.

**Title:**

**New class: `.guide-grid-card-title`**

```css
.guide-grid-card-title {
  font-size: 15px;
  font-weight: 600;
  color: #1A1A1A;
  line-height: 1.3;
  margin-bottom: 6px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

**Description:**

**New class: `.guide-grid-card-desc`**

```css
.guide-grid-card-desc {
  font-size: 13px;
  color: #555555;
  line-height: 1.55;
  margin-bottom: 10px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

---

### Card footer

**New class: `.guide-grid-card-footer`**

```css
.guide-grid-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px 12px;
}
```

Left: read time

**New class: `.guide-grid-card-time`**

```css
.guide-grid-card-time {
  font-size: 11px;
  color: #888888;
}
```

Right: Lucide `chevron-right` SVG, 14x14px, stroke `#2C4A14`, `flex-shrink: 0`.

---

## Page outer container

**New class: `.guides-page`**

Wrapper for all redesigned content below the breadcrumb.

```css
.guides-page {
  /* no base styles needed */
}
```

**New class: `.guides-page-inner`**

```css
.guides-page-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px 48px;
}

@media (min-width: 768px) {
  .guides-page-inner {
    padding: 0 28px 64px;
  }
}
```

---

## Full mobile layout (375px, top to bottom)

```
site-header                       sticky, 48px
walk-breadcrumb                   hidden on mobile
guides-page
  guides-page-inner
    guides-h1                     "Dog walking guides for UK owners", 22px/800, padding-top 20px
    guides-intro                  14px/400/ink-2, margin-bottom 16px
    guide-hero-card               220px min-height, full-width, brand green
      guide-hero-inner
        guide-hero-body
          guide-hero-pill         e.g. "Hazards"
          guide-hero-title        22px/700/white
          guide-hero-desc         2-line clamp, rgba(255,255,255,0.75)
          guide-hero-meta         "6 min read", rgba(255,255,255,0.55)
          guide-hero-cta          "Read guide", white bg
    filter-bar                    margin-top 24px, horizontal scroll chips
    guide-grid                    single column, gap 16px
      [guide-grid-card x N]
        guide-grid-card-band      80px coloured strip with icon
        guide-grid-card-body
          category-pill
          guide-grid-card-title
          guide-grid-card-desc
        guide-grid-card-footer
          guide-grid-card-time
          chevron-right svg
site-footer                       brand green
```

---

## Full desktop layout (768px+, top to bottom)

```
site-header                       sticky
walk-breadcrumb                   "Guides", padding 10px 28px, max-width 1200px centred
guides-page
  guides-page-inner               max-width 1200px, padding 0 28px 64px
    guides-h1                     26px/800, padding-top 32px
    guides-intro                  14px, margin-bottom 24px
    guide-hero-card               280px min-height, full-width, two-column
      guide-hero-inner            flex-direction: row
        guide-hero-body           flex 60%
          guide-hero-pill
          guide-hero-title        28px/700/white
          guide-hero-desc
          guide-hero-meta
          guide-hero-cta
        guide-hero-visual         flex 40%, Sniffout icon SVG 96px white opacity 0.12
    filter-bar                    margin-top 24px, full-width, chips do not scroll
    guide-grid                    2 columns, gap 20px
      [guide-grid-card x N]       same internal structure as mobile
site-footer
```

---

## New CSS class inventory

All new classes to be added in `main.css` under a new `/* --- Guides redesign --- */` section comment.

| Class | Purpose |
|---|---|
| `.guides-page` | Outer wrapper for redesigned page content |
| `.guides-page-inner` | Max-width container, centred |
| `.guide-hero-card` | Featured article card, brand green, full-width |
| `.guide-hero-inner` | Inner flex container (column mobile, row desktop) |
| `.guide-hero-body` | Left text column |
| `.guide-hero-pill` | White category pill variant for use on dark hero bg |
| `.guide-hero-title` | Article title inside hero card |
| `.guide-hero-desc` | Article description inside hero card, 2-line clamp |
| `.guide-hero-meta` | Read time inside hero card |
| `.guide-hero-cta` | "Read guide" button inside hero card |
| `.guide-hero-visual` | Right column decorative icon (desktop only) |
| `.guide-grid` | 1-col mobile / 2-col desktop card grid |
| `.guide-grid-card` | Individual card in the grid |
| `.guide-grid-card-band` | Coloured header strip at top of each card |
| `.guide-grid-card-band--hazard` | Green tinted band for Hazards category |
| `.guide-grid-card-band--seasonal` | Amber tinted band for Seasonal category |
| `.guide-grid-card-band--breed` | Blue tinted band for Breed guides category |
| `.guide-grid-card-band--general` | Neutral band for General / other categories |
| `.guide-grid-card-body` | Card body with 14px padding |
| `.guide-grid-card-title` | Card title, 15px/600, 2-line clamp |
| `.guide-grid-card-desc` | Card description, 13px, 2-line clamp |
| `.guide-grid-card-footer` | Row with read time and chevron |
| `.guide-grid-card-time` | Read time text in card footer |
| `.guide-filter-chip` | JS hook class added to chip buttons (no new CSS) |

**Existing classes reused with no changes:**
`.filter-bar`, `.filter-chip`, `.filter-chip--active`, `.category-pill`, `.category-pill--hazard`, `.category-pill--seasonal`, `.category-pill--general`, `.walk-breadcrumb`, `.guides-h1`, `.guides-intro`, `.site-header`, `.site-footer`

---

## Hugo template changes

Replace the entire `list.html` content with the following logic. This does not change any other template.

### Core pattern

```hugo
{{ define "main" }}

{{- $featured := index .Pages 0 -}}
{{- $rest := after 1 .Pages -}}

<!-- Breadcrumb (desktop only) -->
<nav class="walk-breadcrumb">
  <span class="walk-breadcrumb-current">Guides</span>
</nav>

<div class="guides-page">
  <div class="guides-page-inner">

    <!-- Page header -->
    <h1 class="guides-h1">Dog walking guides for UK owners</h1>
    <p class="guides-intro">Seasonal hazards, terrain advice, and breed-specific guidance. Written for UK dog owners, updated regularly.</p>

    <!-- Hero featured card (first guide) -->
    {{ with $featured }}
    <a href="{{ .Permalink }}" class="guide-hero-card">
      <div class="guide-hero-inner">
        <div class="guide-hero-body">
          <span class="guide-hero-pill">{{ .Params.category }}</span>
          <h2 class="guide-hero-title">{{ .Title }}</h2>
          <p class="guide-hero-desc">{{ .Params.description }}</p>
          <span class="guide-hero-meta">{{ .Params.readTime }}</span>
          <span class="guide-hero-cta">Read guide</span>
        </div>
        <div class="guide-hero-visual">
          <!-- Sniffout icon SVG at 96px, white, opacity 0.12 -->
          <svg width="96" height="96" viewBox="0 0 350 295" fill="white" xmlns="http://www.w3.org/2000/svg">
            [existing Sniffout icon path]
          </svg>
        </div>
      </div>
    </a>
    {{ end }}

    <!-- Category filter chips -->
    <div class="filter-bar" style="margin:24px 0 20px;">
      <button class="filter-chip filter-chip--active guide-filter-chip" onclick="filterGuides('all', this)">All</button>
      <button class="filter-chip guide-filter-chip" onclick="filterGuides('Hazards', this)">Hazards</button>
      <button class="filter-chip guide-filter-chip" onclick="filterGuides('Seasonal', this)">Seasonal</button>
      <button class="filter-chip guide-filter-chip" onclick="filterGuides('Breed guides', this)">Breed guides</button>
    </div>

    <!-- Guide card grid (all guides except the first) -->
    <div class="guide-grid" id="guide-grid">
      {{ range $rest }}
      <a href="{{ .Permalink }}" class="guide-grid-card" data-category="{{ .Params.category }}">

        <!-- Colour band with icon -->
        {{ $bandClass := "guide-grid-card-band--general" }}
        {{ if eq .Params.category "Hazards" }}{{ $bandClass = "guide-grid-card-band--hazard" }}{{ end }}
        {{ if eq .Params.category "Seasonal" }}{{ $bandClass = "guide-grid-card-band--seasonal" }}{{ end }}
        {{ if eq .Params.category "Breed guides" }}{{ $bandClass = "guide-grid-card-band--breed" }}{{ end }}

        <div class="guide-grid-card-band {{ $bandClass }}">
          {{ if eq .Params.category "Hazards" }}
          <!-- Lucide triangle-alert 28x28, stroke #2C4A14, opacity 0.6 -->
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2C4A14" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.6;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          {{ else if eq .Params.category "Seasonal" }}
          <!-- Lucide sun 28x28, stroke #D97706, opacity 0.6 -->
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.6;"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          {{ else if eq .Params.category "Breed guides" }}
          <!-- Lucide heart 28x28, stroke #6366F1, opacity 0.6 -->
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.6;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          {{ else }}
          <!-- Lucide book-open 28x28, stroke #888, opacity 0.6 -->
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#888888" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.6;"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          {{ end }}
        </div>

        <!-- Card body -->
        <div class="guide-grid-card-body">
          {{ if eq .Params.category "Hazards" }}
          <span class="category-pill category-pill--hazard">{{ .Params.category }}</span>
          {{ else if eq .Params.category "Seasonal" }}
          <span class="category-pill category-pill--seasonal">{{ .Params.category }}</span>
          {{ else }}
          <span class="category-pill category-pill--general">{{ .Params.category }}</span>
          {{ end }}
          <div class="guide-grid-card-title">{{ .Title }}</div>
          <div class="guide-grid-card-desc">{{ .Params.description }}</div>
        </div>

        <!-- Card footer -->
        <div class="guide-grid-card-footer">
          <span class="guide-grid-card-time">{{ .Params.readTime }}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2C4A14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </div>

      </a>
      {{ end }}
    </div><!-- /.guide-grid -->

  </div><!-- /.guides-page-inner -->
</div><!-- /.guides-page -->

{{ end }}
```

### Hugo logic notes

- `index .Pages 0` pulls the first guide in the section, sorted by Hugo's default order (by `date` descending unless overridden in `config.yaml`). To pin a specific guide as the featured one, set `weight: 1` in its frontmatter and ensure Hugo sorts by weight first.
- `after 1 .Pages` returns all pages except the first one. These populate the grid.
- `data-category="{{ .Params.category }}"` is the JS filter hook.
- The Hugo conditional `$bandClass` sets the correct band variant. Hugo does not support inline conditionals in class attributes, so a variable is assigned before the element.

---

## JavaScript spec

Add as a `<script>` block in the list template, or in a shared JS partial if one exists.

### Function: `filterGuides(category, el)`

Called when a filter chip is clicked.

**Behaviour:**
1. Removes `.filter-chip--active` from all `.guide-filter-chip` elements.
2. Adds `.filter-chip--active` to the clicked chip.
3. Iterates all `.guide-grid-card` elements.
4. If `category === 'all'`: removes `.hidden` from all cards.
5. Otherwise: shows cards where `card.dataset.category === category`, hides all others using `.hidden` class.
6. The hero card is not filtered. It is always visible.

```javascript
function filterGuides(category, el) {
  document.querySelectorAll('.guide-filter-chip').forEach(function(chip) {
    chip.classList.remove('filter-chip--active');
  });
  el.classList.add('filter-chip--active');

  document.querySelectorAll('.guide-grid-card').forEach(function(card) {
    if (category === 'all' || card.dataset.category === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}
```

The `.hidden` class (`display: none !important`) already exists in `main.css`.

### Empty state

When a filter is applied and no cards match (e.g. filtering by "Breed guides" when no breed guides exist), the grid is empty. The hero card remains visible. No empty state message is needed at this stage - an empty grid is acceptable. This can be added in a future round.

---

## Notes for Developer

1. **The existing `.guide-card` component is unchanged.** It continues to be used in the guide article sidebar for related guides. The new `.guide-grid-card` is a distinct component for the index page grid only.

2. **The existing `.guides-hero` div and its CSS are replaced by `.guides-page-inner` + inline heading/intro.** The old `.guides-hero`, `.guides-h1`, and `.guides-intro` classes stay in the CSS and are reused inside the new container.

3. **The old `.guides-layout` and `.guides-list` wrappers are removed from the list template.** Their CSS can be retained in `main.css` for now (they do not conflict) or removed in a future cleanup round.

4. **Hero card ordering.** By default, Hugo sorts section pages by `date` descending. The most recently dated guide will be the featured one. To change this without altering dates, add `weight: 1` to the desired featured guide's frontmatter, then update `config.yaml` to sort by weight (or use `{{ $featured := (where .Pages ".Params.featured" true) | first }}`).

5. **Adding a "Breed guides" filter.** The filter chip is specced now but no content yet has `category: "Breed guides"`. The chip will appear in the filter bar. Tapping it will show an empty grid (the chip stays active). This is intentional - the chip is forward-compatible.

---

*Spec produced by Designer agent, 2026-03-29. No code files were modified.*
