# Guide Article Page Redesign Spec
**Date:** 2026-03-30
**Status:** Specification only. No code changes.
**Author:** Designer agent
**Scope:** Complete redesign of `themes/sniffout/layouts/guides/single.html` and new CSS classes for the guide article page. Companion CSS block for `main.css`.

---

## Design intent

The redesigned guide article page should feel like a premium outdoor lifestyle editorial, not a generic blog post. The page header is open and warm on the `#F7F5F0` background. The hero image breathes on its own below the headline. The pull quote stops the reader immediately after the image. The article body is generous and comfortable. The sidebar TOC keeps the reader oriented on desktop. The related walks and guides at the bottom send the reader to the product.

Typography: Plus Jakarta Sans exclusively. No serifs. H2 headings in brand green `#2C4A14` signal section importance and reinforce brand identity throughout a long read.

---

## Frontmatter fields

The following fields are supported by the new template. Add these to any guide markdown file:

```yaml
---
title: "Ticks on dogs - what UK dog owners need to know"
description: "How to check for ticks, remove them safely, and protect your dog during tick season in the UK."
category: "Hazards"
author: "Tom"
readTime: "6 min read"
date: 2026-03-28
heroImage: "/img/guides/ticks-hero.jpg"
pullQuote: "A tick found and removed on the same day it attached carries a much lower disease risk than one that has been feeding for two days unnoticed."
relatedWalks:
  - "richmond-park-dog-walk"
  - "bushy-park-waterhouse-walk"
weight: 1
---
```

Field notes:
- `description` - subtitle rendered below H1 and used in meta tags
- `pullQuote` - required for the standfirst element. If absent, the pull quote block is hidden.
- `author` - rendered as "By [author]" in the metadata row. Defaults to "Sniffout editorial team" if not set.
- `relatedWalks` - array of walk slugs (not full paths). The template resolves these to walk pages using `$.Site.GetPage`. If the array is empty or absent, the related walks section is hidden.
- `heroImage` - path to the hero image. If absent, the hero image wrapper is hidden.

---

## New CSS class inventory

All new classes use the `ga-` prefix (Guide Article). No conflicts with existing classes.

| Class | Element |
|---|---|
| `ga-page` | Outer page wrapper |
| `ga-header` | Page header section (above hero image) |
| `ga-header-inner` | Centred container inside the header |
| `ga-category-pill` | Sienna category pill (article header only) |
| `ga-h1` | Display H1 heading |
| `ga-subtitle` | Description subtitle below H1 |
| `ga-meta` | Metadata row (author, read time, date) |
| `ga-meta-dot` | Separator dot between meta items |
| `ga-hero-wrap` | Hero image wrapper |
| `ga-hero-img` | Hero image element |
| `ga-layout` | Two-column grid wrapper (desktop) |
| `ga-content` | Left article column |
| `ga-body-outer` | Centred body wrapper (max-width 680px) |
| `ga-pull-quote` | Pull quote / standfirst block |
| `ga-body` | Article body typography |
| `ga-inline-cta` | Inline install CTA block |
| `ga-inline-cta-inner` | Flex inner for CTA layout |
| `ga-inline-cta-text` | Text section of CTA |
| `ga-inline-cta-btn` | White button inside CTA |
| `ga-sidebar` | Right sticky sidebar |
| `ga-sidebar-label` | Section label inside sidebar |
| `ga-toc` | TOC link list container |
| `ga-toc-link` | Individual TOC link |
| `ga-toc-link--active` | Active state for TOC link |
| `ga-sidebar-cta` | Compact install CTA card in sidebar |
| `ga-sidebar-cta-btn` | Button inside sidebar CTA |
| `ga-sidebar-divider` | Horizontal rule in sidebar |
| `ga-sidebar-guide-card` | Compact guide link in sidebar |
| `ga-walks-section` | Related walks section |
| `ga-walks-grid` | Walk cards grid |
| `ga-more-guides` | More guides section (below the layout grid) |
| `ga-more-guides-inner` | Centred inner container |
| `ga-more-guides-grid` | Guide cards grid |

Total: 33 new classes.

Existing classes reused without modification:
- `.walk-breadcrumb`, `.walk-breadcrumb-sep`, `.walk-breadcrumb-current` - breadcrumb nav
- `.guide-grid-card` and all `.guide-grid-card-*` variants - guide cards in "More guides" section
- `.walk-list-card` and all `.walk-list-card-*` variants - walk cards in related walks section
- `.walk-section-heading` - reused as fallback if needed

Existing classes that become unused on the article page (can be deprecated in a future CSS pass):
- `.guide-article-layout`, `.guide-article-content`, `.guide-article-hero`, `.guide-article-h1`, `.guide-article-meta`, `.guide-meta-dot`, `.guide-article-body`, `.article-body`, `.guide-article-sidebar`, `.guide-article-cta-desktop`, `.guide-related-mobile`

---

## Element 1 - Page header CSS

```css
/* ---- Guide article redesign (ga- prefix) ---- */

.ga-page {
  /* outer wrapper, inherits page background #F7F5F0 */
}

.ga-header {
  background: var(--bg);
  padding: 24px 16px 28px;
  text-align: center;
}

.ga-header-inner {
  max-width: 720px;
  margin: 0 auto;
}

.ga-category-pill {
  display: inline-block;
  background: var(--sienna);
  color: #FFFFFF;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 20px;
  margin-bottom: 14px;
}

.ga-h1 {
  font-size: 28px;
  font-weight: 800;
  color: var(--ink);
  line-height: 1.15;
  letter-spacing: -0.5px;
  margin: 0 0 14px;
}

.ga-subtitle {
  font-size: 16px;
  font-weight: 400;
  color: var(--ink-2);
  line-height: 1.6;
  max-width: 560px;
  margin: 0 auto 18px;
}

.ga-meta {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 13px;
  color: var(--ink-3);
}

.ga-meta-dot {
  width: 3px;
  height: 3px;
  background: var(--ink-3);
  border-radius: 50%;
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .ga-header {
    padding: 40px 28px 36px;
  }
  .ga-h1 {
    font-size: 44px;
    letter-spacing: -1px;
  }
}
```

---

## Element 2 - Hero image CSS

```css
.ga-hero-wrap {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
}

.ga-hero-img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 12px;
  display: block;
}

@media (min-width: 768px) {
  .ga-hero-wrap {
    padding: 0 28px;
  }
  .ga-hero-img {
    height: 420px;
  }
}
```

---

## Element 3 - Pull quote CSS

```css
.ga-pull-quote {
  font-size: 19px;
  font-weight: 600;
  color: var(--brand);
  line-height: 1.55;
  border-left: 4px solid var(--sienna);
  padding-left: 22px;
  margin: 32px 0 32px;
  font-style: normal;
}

@media (min-width: 768px) {
  .ga-pull-quote {
    font-size: 22px;
    margin: 36px 0;
  }
}
```

Note: `.ga-pull-quote` sits inside `.ga-body-outer` (max-width 680px, centred), so no additional max-width or margin override is needed on the element itself.

---

## Element 4 - Article body CSS

```css
.ga-body-outer {
  max-width: 680px;
  margin: 32px auto 0;
  padding: 0 16px;
}

.ga-body {
  font-size: 17px;
  font-weight: 400;
  color: var(--ink);
  line-height: 1.85;
}

.ga-body > p:first-child {
  font-size: 18px;
  color: var(--ink-2);
  line-height: 1.75;
}

.ga-body p {
  margin-bottom: 24px;
}

.ga-body h2 {
  font-size: 21px;
  font-weight: 700;
  color: var(--brand);
  margin: 48px 0 16px;
  line-height: 1.2;
  letter-spacing: -0.3px;
}

.ga-body h3 {
  font-size: 17px;
  font-weight: 600;
  color: var(--ink);
  margin: 32px 0 10px;
  line-height: 1.25;
}

.ga-body ul,
.ga-body ol {
  margin: 0 0 24px 0;
  padding-left: 22px;
}

.ga-body ul {
  list-style-type: disc;
}

.ga-body ol {
  list-style-type: decimal;
}

.ga-body ul li::marker {
  color: var(--brand);
}

.ga-body ol li::counter-style {
  color: var(--brand);
}

.ga-body li {
  font-size: 17px;
  color: var(--ink);
  line-height: 1.8;
  margin-bottom: 10px;
}

.ga-body hr {
  border: none;
  border-top: 1px solid rgba(0,0,0,0.07);
  margin: 48px 0;
}

.ga-body strong {
  font-weight: 700;
  color: var(--ink);
}

@media (min-width: 768px) {
  .ga-body-outer {
    padding: 0 28px;
    margin-top: 36px;
  }
}
```

---

## Element 5 - Inline install CTA CSS

The inline CTA is injected into the article body by JavaScript after the third H2. It is defined as a `<template>` element in the HTML and cloned into position at page load.

```css
.ga-inline-cta {
  background: var(--brand);
  border-radius: 12px;
  padding: 22px 20px;
  margin: 40px 0;
}

.ga-inline-cta-inner {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.ga-inline-cta-text {}

.ga-inline-cta-text strong {
  display: block;
  font-size: 17px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 5px;
}

.ga-inline-cta-text span {
  font-size: 13px;
  color: rgba(255,255,255,0.72);
  line-height: 1.5;
}

.ga-inline-cta-btn {
  display: inline-flex;
  align-items: center;
  background: #FFFFFF;
  color: var(--brand);
  font-size: 13px;
  font-weight: 700;
  padding: 9px 20px;
  border-radius: 20px;
  text-decoration: none;
  align-self: flex-start;
  transition: transform 0.15s ease;
}

.ga-inline-cta-btn:active {
  transform: scale(0.97);
}

@media (min-width: 768px) {
  .ga-inline-cta-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
  .ga-inline-cta-text {
    flex: 1;
  }
  .ga-inline-cta-btn {
    flex-shrink: 0;
  }
}
```

---

## Element 6 - Two-column layout and sidebar CSS

```css
.ga-layout {
  /* single column on mobile, becomes grid on desktop */
}

.ga-content {
  min-width: 0;
}

.ga-sidebar {
  display: none;
}

@media (min-width: 768px) {
  .ga-layout {
    display: grid;
    grid-template-columns: 1fr 260px;
    gap: 0;
    max-width: 1040px;
    margin: 0 auto;
    align-items: start;
  }
  .ga-content {
    border-right: 0.5px solid var(--border);
    padding-bottom: 48px;
  }
  .ga-sidebar {
    display: block;
    position: sticky;
    top: 80px;
    padding: 28px 20px;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
  }
}

/* Sidebar label */
.ga-sidebar-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: rgba(44,74,20,0.55);
  margin-bottom: 10px;
  display: block;
}

/* TOC */
.ga-toc {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
}

.ga-toc-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-2);
  text-decoration: none;
  line-height: 1.4;
  padding: 4px 0 4px 10px;
  border-left: 2px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.ga-toc-link:hover {
  color: var(--brand);
}

.ga-toc-link--active {
  color: var(--brand);
  font-weight: 600;
  border-left-color: var(--brand);
}

/* Sidebar divider */
.ga-sidebar-divider {
  height: 0.5px;
  background: var(--border);
  margin: 18px 0;
}

/* Sidebar compact CTA card */
.ga-sidebar-cta {
  background: var(--brand);
  border-radius: 10px;
  padding: 16px;
}

.ga-sidebar-cta p {
  font-size: 13px;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0 0 12px;
  line-height: 1.4;
}

.ga-sidebar-cta-btn {
  display: inline-flex;
  background: #FFFFFF;
  color: var(--brand);
  font-size: 12px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  transition: transform 0.15s ease;
}

.ga-sidebar-cta-btn:active {
  transform: scale(0.97);
}

/* Sidebar compact guide card */
.ga-sidebar-guide-card {
  display: block;
  text-decoration: none;
  padding: 10px 0;
  border-bottom: 0.5px solid var(--border);
  transition: transform 0.15s ease;
}

.ga-sidebar-guide-card:last-child {
  border-bottom: none;
}

.ga-sidebar-guide-card:active {
  transform: scale(0.98);
}

.ga-sidebar-guide-card .ga-sidebar-guide-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.35;
  margin-bottom: 3px;
}

.ga-sidebar-guide-card .ga-sidebar-guide-meta {
  font-size: 11px;
  color: var(--ink-3);
}
```

---

## Element 7 - Related walks section CSS

```css
.ga-walks-section {
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid rgba(0,0,0,0.06);
}

.ga-walks-heading {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: rgba(44,74,20,0.55);
  margin-bottom: 14px;
}

.ga-walks-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (min-width: 768px) {
  .ga-walks-grid {
    flex-direction: row;
    gap: 12px;
  }
  .ga-walks-grid .walk-list-card {
    flex: 1;
    margin-bottom: 0;
  }
}
```

Note: Walk cards use the existing `.walk-list-card` class and all sub-classes unchanged.

---

## Element 8 - More guides section CSS

```css
.ga-more-guides {
  background: var(--bg);
  padding: 40px 16px 48px;
  border-top: 1px solid rgba(0,0,0,0.06);
  margin-top: 48px;
}

.ga-more-guides-inner {
  max-width: 1040px;
  margin: 0 auto;
}

.ga-more-guides-heading {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: rgba(44,74,20,0.55);
  margin-bottom: 20px;
}

.ga-more-guides-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

@media (min-width: 768px) {
  .ga-more-guides {
    padding: 48px 28px 64px;
  }
  .ga-more-guides-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}
```

Note: Guide cards in `.ga-more-guides-grid` use the existing `.guide-grid-card` class and all sub-classes unchanged. The template excludes the current article using Hugo's `ne .Title $.Title`.

---

## Hugo template: `guides/single.html`

Complete replacement for the existing template. Paste this in full.

```html
{{ define "main" }}

{{ $pullQuote := .Params.pullQuote }}
{{ $author := .Params.author | default "Sniffout editorial team" }}

<div class="ga-page">

<!-- Breadcrumb -->
<nav class="walk-breadcrumb">
  <a href="/guides/">Guides</a>
  <span class="walk-breadcrumb-sep">&rsaquo;</span>
  {{ with .Params.category }}
  <span class="walk-breadcrumb-current">{{ . }}</span>
  {{ end }}
</nav>

<!-- Page header -->
<header class="ga-header">
  <div class="ga-header-inner">
    {{ with .Params.category }}
    <span class="ga-category-pill">{{ . }}</span>
    {{ end }}
    <h1 class="ga-h1">{{ .Title }}</h1>
    {{ with .Params.description }}
    <p class="ga-subtitle">{{ . }}</p>
    {{ end }}
    <div class="ga-meta">
      <span>By {{ $author }}</span>
      {{ with .Params.readTime }}
      <span class="ga-meta-dot"></span>
      <span>{{ . }}</span>
      {{ end }}
      <span class="ga-meta-dot"></span>
      <span>{{ .Date.Format "2 January 2006" }}</span>
    </div>
  </div>
</header>

<!-- Hero image -->
{{ with .Params.heroImage }}
<div class="ga-hero-wrap">
  <img class="ga-hero-img"
       src="{{ . }}"
       alt="{{ $.Title }}"
       loading="eager">
</div>
{{ end }}

<!-- Two-column layout wrapper -->
<div class="ga-layout">

  <!-- Left: article content -->
  <div class="ga-content">
    <div class="ga-body-outer">

      <!-- Pull quote -->
      {{ with $pullQuote }}
      <blockquote class="ga-pull-quote">{{ . }}</blockquote>
      {{ end }}

      <!-- Article body -->
      <div class="ga-body" id="ga-article-body">
        {{ .Content }}
      </div>

      <!-- Inline install CTA (injected by JS after 3rd H2) -->
      <template id="ga-inline-cta-tmpl">
        <div class="ga-inline-cta">
          <div class="ga-inline-cta-inner">
            <div class="ga-inline-cta-text">
              <strong>Plan this walk with live weather</strong>
              <span>Sniffout checks conditions before you go.</span>
            </div>
            <a href="/get" class="ga-inline-cta-btn">Open Sniffout</a>
          </div>
        </div>
      </template>

      <!-- Related walks -->
      {{ if .Params.relatedWalks }}
      <section class="ga-walks-section">
        <div class="ga-walks-heading">WALKS IN THIS GUIDE</div>
        <div class="ga-walks-grid">
          {{ range .Params.relatedWalks }}
          {{ $walkPage := $.Site.GetPage (printf "/walks/%s" .) }}
          {{ with $walkPage }}
          <a href="{{ .Permalink }}" class="walk-list-card">
            {{ if .Params.heroImage }}
            <div class="walk-list-card-img" style="background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url('{{ .Params.heroImage }}'); background-size: cover; background-position: center;">
            {{ else }}
            <div class="walk-list-card-img">
            {{ end }}
              {{ with .Params.difficulty }}
              <div class="walk-hero-badge walk-hero-badge--left">{{ . }}</div>
              {{ end }}
              {{ with .Params.offLead }}
              <div class="walk-hero-badge {{ if or (eq . "On-lead only") (eq . "On lead") }}walk-hero-badge--onlead{{ else }}walk-hero-badge--offlead{{ end }}">{{ . }}</div>
              {{ end }}
            </div>
            <div class="walk-list-card-body">
              <div class="walk-list-card-name">{{ .Title }}</div>
              <div class="walk-list-card-loc">{{ .Params.location }}</div>
              <p class="walk-list-card-teaser">{{ .Params.description | truncate 80 }}</p>
              <div class="walk-list-card-pills">
                {{ with .Params.distance }}<span class="meta-pill">{{ . }}</span>{{ end }}
                {{ with .Params.terrain }}<span class="meta-pill">{{ . }}</span>{{ end }}
              </div>
            </div>
          </a>
          {{ end }}
          {{ end }}
        </div>
        <a href="/walks/" style="display:inline-block;margin-top:14px;font-size:13px;color:var(--brand);font-weight:600;text-decoration:none;">Browse all dog walks &rsaquo;</a>
      </section>
      {{ end }}

    </div><!-- /.ga-body-outer -->
  </div><!-- /.ga-content -->

  <!-- Right: sidebar (desktop only) -->
  <aside class="ga-sidebar" aria-label="Article navigation">

    <span class="ga-sidebar-label">IN THIS GUIDE</span>
    <nav class="ga-toc" id="ga-toc" aria-label="Table of contents">
      <!-- Populated by JavaScript -->
    </nav>

    <div class="ga-sidebar-divider"></div>

    <div class="ga-sidebar-cta">
      <p>Get live weather for every walk.</p>
      <a href="/get" class="ga-sidebar-cta-btn">Open Sniffout</a>
    </div>

    {{ $guides := where .Site.RegularPages "Section" "guides" }}
    {{ $related := first 3 $guides }}
    {{ $hasRelated := false }}
    {{ range $related }}
      {{ if ne .Title $.Title }}{{ $hasRelated = true }}{{ end }}
    {{ end }}

    {{ if $hasRelated }}
    <div class="ga-sidebar-divider"></div>
    <span class="ga-sidebar-label">RELATED GUIDES</span>
    {{ range $related }}
    {{ if ne .Title $.Title }}
    <a href="{{ .Permalink }}" class="ga-sidebar-guide-card">
      <div class="ga-sidebar-guide-title">{{ .Title }}</div>
      <div class="ga-sidebar-guide-meta">{{ .Params.readTime }}</div>
    </a>
    {{ end }}
    {{ end }}
    {{ end }}

  </aside><!-- /.ga-sidebar -->

</div><!-- /.ga-layout -->

<!-- More guides (full width, below the grid) -->
{{ $allGuides := where .Site.RegularPages "Section" "guides" }}
{{ $moreGuides := first 3 $allGuides }}
{{ $hasMG := false }}
{{ range $moreGuides }}
  {{ if ne .Title $.Title }}{{ $hasMG = true }}{{ end }}
{{ end }}

{{ if $hasMG }}
<section class="ga-more-guides">
  <div class="ga-more-guides-inner">
    <div class="ga-more-guides-heading">MORE GUIDES</div>
    <div class="ga-more-guides-grid">
      {{ range $moreGuides }}
      {{ if ne .Title $.Title }}
      <a href="{{ .Permalink }}" class="guide-grid-card" data-category="{{ .Params.category }}">

        {{ $bandClass := "guide-grid-card-band--general" }}
        {{ if eq .Params.category "Hazards" }}{{ $bandClass = "guide-grid-card-band--hazard" }}{{ end }}
        {{ if eq .Params.category "Seasonal" }}{{ $bandClass = "guide-grid-card-band--seasonal" }}{{ end }}
        {{ if eq .Params.category "Breed guides" }}{{ $bandClass = "guide-grid-card-band--breed" }}{{ end }}

        {{ with .Params.heroImage }}
        <div class="guide-grid-card-band" style="background-image: linear-gradient(rgba(0,0,0,0.18), rgba(0,0,0,0.28)), url('{{ . }}'); background-size: cover; background-position: center;"></div>
        {{ else }}
        <div class="guide-grid-card-band {{ $bandClass }}">
          {{ if eq .Params.category "Hazards" }}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2C4A14" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.6;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          {{ else if eq .Params.category "Seasonal" }}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.6;"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          {{ else if eq .Params.category "Breed guides" }}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366F1" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.6;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          {{ else }}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#888888" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.6;"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          {{ end }}
        </div>
        {{ end }}

        <div style="position:absolute;top:10px;left:10px;z-index:2;">
          {{ if eq .Params.category "Hazards" }}
          <span class="category-pill category-pill--hazard">{{ .Params.category }}</span>
          {{ else if eq .Params.category "Seasonal" }}
          <span class="category-pill category-pill--seasonal">{{ .Params.category }}</span>
          {{ else }}
          <span class="category-pill category-pill--general">{{ .Params.category }}</span>
          {{ end }}
        </div>

        <div class="guide-grid-card-body">
          <div class="guide-grid-card-title">{{ .Title }}</div>
          <div class="guide-grid-card-footer">
            <span class="guide-grid-card-time">{{ .Params.readTime }}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </div>
        </div>

      </a>
      {{ end }}
      {{ end }}
    </div>
  </div>
</section>
{{ end }}

</div><!-- /.ga-page -->

<!-- JS: TOC builder + active state + inline CTA insertion -->
<script>
(function() {
  // Build sidebar TOC from H2 elements in article body
  var tocContainer = document.getElementById('ga-toc');
  var articleBody = document.getElementById('ga-article-body');
  if (!tocContainer || !articleBody) return;

  var headings = articleBody.querySelectorAll('h2');
  if (!headings.length) return;

  headings.forEach(function(h2) {
    // Ensure the H2 has an id - Hugo auto-generates these from markdown
    if (!h2.id) {
      h2.id = h2.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }
    var link = document.createElement('a');
    link.href = '#' + h2.id;
    link.className = 'ga-toc-link';
    link.textContent = h2.textContent;
    tocContainer.appendChild(link);
  });

  // Active state via IntersectionObserver
  var tocLinks = tocContainer.querySelectorAll('.ga-toc-link');
  if (!tocLinks.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        tocLinks.forEach(function(link) {
          link.classList.remove('ga-toc-link--active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('ga-toc-link--active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  });

  headings.forEach(function(h2) { observer.observe(h2); });

  // Insert inline CTA after the content following the 3rd H2
  var ctaTemplate = document.getElementById('ga-inline-cta-tmpl');
  if (ctaTemplate && headings.length >= 3) {
    var thirdH2 = headings[2];
    // Walk forward to find the last sibling before the 4th H2 (or end of body)
    var insertAfter = thirdH2;
    var cursor = thirdH2.nextElementSibling;
    while (cursor && cursor.tagName !== 'H2') {
      insertAfter = cursor;
      cursor = cursor.nextElementSibling;
    }
    var ctaNode = document.importNode(ctaTemplate.content, true);
    insertAfter.insertAdjacentElement('afterend', ctaNode.firstElementChild);
  }
})();
</script>

{{ end }}
```

---

## Mobile layout (top to bottom)

On mobile (below 768px), the page renders as a single column from top to bottom:

1. **Breadcrumb** -- `Guides > [Category]`, small muted text, full width
2. **Page header** (`.ga-header`) -- full width, `#F7F5F0` background, centred text
   - Sienna category pill (`.ga-category-pill`)
   - H1 at 28px / weight 800 (`.ga-h1`)
   - Subtitle at 16px / ink-2 (`.ga-subtitle`)
   - Metadata row at 13px / ink-3 (`.ga-meta`): "By Tom" dot "6 min read" dot "28 March 2026"
3. **Hero image** (`.ga-hero-wrap` > `.ga-hero-img`) -- padded 16px, 260px tall, `border-radius: 12px`
4. **Pull quote** (`.ga-pull-quote`) -- inside `.ga-body-outer`, 19px/600, brand green, left border in sienna
5. **Article body** (`.ga-body`) -- 17px/1.85 line-height, H2s in brand green, lists with brand green markers
6. **Inline install CTA** (`.ga-inline-cta`) -- inserted by JS after 3rd H2, stacked layout (text above, button below)
7. **Related walks** (`.ga-walks-section`) -- conditional, shows only if `relatedWalks` in frontmatter. Walk cards stack vertically.
8. **More guides** (`.ga-more-guides`) -- 1-column grid of guide grid cards
9. **Footer** -- existing site footer

The `.ga-sidebar` is `display: none` on mobile. There is no separate mobile-related-guides section -- the `.ga-more-guides` section serves both mobile and desktop.

---

## Desktop layout (top to bottom)

On desktop (768px and above), the layout switches to a two-column grid. The breadcrumb and page header remain full-width above the grid. The hero image is also full-width (max-width 900px, centred). The `.ga-layout` grid starts after the hero image.

1. **Breadcrumb** -- full width, max-width 1040px, centred
2. **Page header** (`.ga-header`) -- full width, centred; H1 scales to 44px
3. **Hero image** (`.ga-hero-wrap`) -- max-width 900px, centred, 420px tall
4. **`.ga-layout` grid begins** -- `grid-template-columns: 1fr 260px`, max-width 1040px, centred, `border-top: 0.5px solid var(--border)` implied by left-column right border
   - **Left column** (`.ga-content`):
     - `.ga-body-outer` (max-width 680px, centred, left-padded 28px):
       - Pull quote (`.ga-pull-quote`) -- 22px / 600 / brand green
       - Article body (`.ga-body`) -- H2 in brand green 21px
       - Inline install CTA (`.ga-inline-cta`) -- row layout (text left, button right)
       - Related walks (`.ga-walks-section`) -- 2 walk cards in a row (`.ga-walks-grid` flex row)
   - **Right column** (`.ga-sidebar`):
     - Sticky, top: 80px
     - "IN THIS GUIDE" label
     - TOC links (built by JS, active state tracked by IntersectionObserver)
     - Divider
     - Compact CTA card (green, "Open Sniffout" white button)
     - Divider (if related guides exist)
     - "RELATED GUIDES" label (if related guides exist)
     - Up to 2 compact guide link rows
5. **`.ga-layout` grid ends**
6. **More guides** (`.ga-more-guides`) -- full width, 3-column grid, `grid-template-columns: repeat(3, 1fr)`
7. **Footer** -- existing site footer

---

## CSS block to add to `main.css`

Add the following block immediately after the existing `/* --- Guide article page --- */` section (after line 2048 in the current file). The new block replaces all styling for the guide article page -- the old `.guide-article-*` rules can remain for now as they do not conflict (different class prefix), but should be removed in a future CSS cleanup pass.

```css
/* ---- Guide article redesign (ga- prefix) ---- */

.ga-page {}

.ga-header {
  background: var(--bg);
  padding: 24px 16px 28px;
  text-align: center;
}

.ga-header-inner {
  max-width: 720px;
  margin: 0 auto;
}

.ga-category-pill {
  display: inline-block;
  background: var(--sienna);
  color: #FFFFFF;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 20px;
  margin-bottom: 14px;
}

.ga-h1 {
  font-size: 28px;
  font-weight: 800;
  color: var(--ink);
  line-height: 1.15;
  letter-spacing: -0.5px;
  margin: 0 0 14px;
}

.ga-subtitle {
  font-size: 16px;
  font-weight: 400;
  color: var(--ink-2);
  line-height: 1.6;
  max-width: 560px;
  margin: 0 auto 18px;
}

.ga-meta {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 13px;
  color: var(--ink-3);
}

.ga-meta-dot {
  width: 3px;
  height: 3px;
  background: var(--ink-3);
  border-radius: 50%;
  flex-shrink: 0;
}

.ga-hero-wrap {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
}

.ga-hero-img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 12px;
  display: block;
}

.ga-layout {}

.ga-content {
  min-width: 0;
}

.ga-sidebar {
  display: none;
}

.ga-body-outer {
  max-width: 680px;
  margin: 32px auto 0;
  padding: 0 16px;
}

.ga-pull-quote {
  font-size: 19px;
  font-weight: 600;
  color: var(--brand);
  line-height: 1.55;
  border-left: 4px solid var(--sienna);
  padding-left: 22px;
  margin: 32px 0 32px;
  font-style: normal;
}

.ga-body {
  font-size: 17px;
  font-weight: 400;
  color: var(--ink);
  line-height: 1.85;
}

.ga-body > p:first-child {
  font-size: 18px;
  color: var(--ink-2);
  line-height: 1.75;
}

.ga-body p {
  margin-bottom: 24px;
}

.ga-body h2 {
  font-size: 21px;
  font-weight: 700;
  color: var(--brand);
  margin: 48px 0 16px;
  line-height: 1.2;
  letter-spacing: -0.3px;
}

.ga-body h3 {
  font-size: 17px;
  font-weight: 600;
  color: var(--ink);
  margin: 32px 0 10px;
  line-height: 1.25;
}

.ga-body ul,
.ga-body ol {
  margin: 0 0 24px 0;
  padding-left: 22px;
}

.ga-body ul { list-style-type: disc; }
.ga-body ol { list-style-type: decimal; }

.ga-body ul li::marker {
  color: var(--brand);
}

.ga-body li {
  font-size: 17px;
  color: var(--ink);
  line-height: 1.8;
  margin-bottom: 10px;
}

.ga-body hr {
  border: none;
  border-top: 1px solid rgba(0,0,0,0.07);
  margin: 48px 0;
}

.ga-body strong {
  font-weight: 700;
  color: var(--ink);
}

.ga-inline-cta {
  background: var(--brand);
  border-radius: 12px;
  padding: 22px 20px;
  margin: 40px 0;
}

.ga-inline-cta-inner {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.ga-inline-cta-text strong {
  display: block;
  font-size: 17px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 5px;
}

.ga-inline-cta-text span {
  font-size: 13px;
  color: rgba(255,255,255,0.72);
  line-height: 1.5;
}

.ga-inline-cta-btn {
  display: inline-flex;
  align-items: center;
  background: #FFFFFF;
  color: var(--brand);
  font-size: 13px;
  font-weight: 700;
  padding: 9px 20px;
  border-radius: 20px;
  text-decoration: none;
  align-self: flex-start;
  transition: transform 0.15s ease;
}

.ga-inline-cta-btn:active { transform: scale(0.97); }

.ga-walks-section {
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid rgba(0,0,0,0.06);
}

.ga-walks-heading {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: rgba(44,74,20,0.55);
  margin-bottom: 14px;
}

.ga-walks-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ga-sidebar-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: rgba(44,74,20,0.55);
  margin-bottom: 10px;
  display: block;
}

.ga-toc {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
}

.ga-toc-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-2);
  text-decoration: none;
  line-height: 1.4;
  padding: 4px 0 4px 10px;
  border-left: 2px solid transparent;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.ga-toc-link:hover { color: var(--brand); }

.ga-toc-link--active {
  color: var(--brand);
  font-weight: 600;
  border-left-color: var(--brand);
}

.ga-sidebar-divider {
  height: 0.5px;
  background: var(--border);
  margin: 18px 0;
}

.ga-sidebar-cta {
  background: var(--brand);
  border-radius: 10px;
  padding: 16px;
}

.ga-sidebar-cta p {
  font-size: 13px;
  font-weight: 600;
  color: #FFFFFF;
  margin: 0 0 12px;
  line-height: 1.4;
}

.ga-sidebar-cta-btn {
  display: inline-flex;
  background: #FFFFFF;
  color: var(--brand);
  font-size: 12px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  transition: transform 0.15s ease;
}

.ga-sidebar-cta-btn:active { transform: scale(0.97); }

.ga-sidebar-guide-card {
  display: block;
  text-decoration: none;
  padding: 10px 0;
  border-bottom: 0.5px solid var(--border);
  transition: transform 0.15s ease;
}

.ga-sidebar-guide-card:last-child { border-bottom: none; }
.ga-sidebar-guide-card:active { transform: scale(0.98); }

.ga-sidebar-guide-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.35;
  margin-bottom: 3px;
}

.ga-sidebar-guide-meta {
  font-size: 11px;
  color: var(--ink-3);
}

.ga-more-guides {
  background: var(--bg);
  padding: 40px 16px 48px;
  border-top: 1px solid rgba(0,0,0,0.06);
  margin-top: 48px;
}

.ga-more-guides-inner {
  max-width: 1040px;
  margin: 0 auto;
}

.ga-more-guides-heading {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: rgba(44,74,20,0.55);
  margin-bottom: 20px;
}

.ga-more-guides-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

@media (min-width: 768px) {
  .ga-header {
    padding: 40px 28px 36px;
  }
  .ga-h1 {
    font-size: 44px;
    letter-spacing: -1px;
  }
  .ga-hero-wrap {
    padding: 0 28px;
  }
  .ga-hero-img {
    height: 420px;
  }
  .ga-layout {
    display: grid;
    grid-template-columns: 1fr 260px;
    gap: 0;
    max-width: 1040px;
    margin: 0 auto;
    align-items: start;
    border-top: 0.5px solid var(--border);
  }
  .ga-content {
    border-right: 0.5px solid var(--border);
    padding-bottom: 48px;
  }
  .ga-body-outer {
    padding: 0 28px;
    margin-top: 36px;
  }
  .ga-pull-quote {
    font-size: 22px;
    margin: 36px 0;
  }
  .ga-inline-cta-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
  .ga-inline-cta-text { flex: 1; }
  .ga-inline-cta-btn { flex-shrink: 0; }
  .ga-walks-grid {
    flex-direction: row;
    gap: 12px;
  }
  .ga-walks-grid .walk-list-card {
    flex: 1;
    margin-bottom: 0;
  }
  .ga-sidebar {
    display: block;
    position: sticky;
    top: 80px;
    padding: 28px 20px;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
    align-self: start;
  }
  .ga-more-guides {
    padding: 48px 28px 64px;
  }
  .ga-more-guides-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}

/* ---- End guide article redesign ---- */
```

---

## Notes for the Developer

1. **Template file to replace:** `themes/sniffout/layouts/guides/single.html` -- replace the full contents with the Hugo template block above.

2. **CSS to add:** Append the CSS block above to `themes/sniffout/static/css/main.css` after the existing `/* --- Guide article page --- */` section. The old `.guide-article-*` rules do not need removing immediately -- they are inert once the template no longer uses those class names.

3. **No Hugo config change required** for the TOC -- the sidebar TOC is built entirely by JavaScript from H2 elements already in the DOM. Hugo's built-in `.TableOfContents` is not used.

4. **Frontmatter to update:** The existing ticks guide at `content/guides/ticks-dogs-uk.md` should have a `pullQuote` field added. Suggested value:
   ```yaml
   pullQuote: "A tick found and removed the same day it attached carries a much lower disease risk than one that has been feeding for two days unnoticed."
   ```
   And a `relatedWalks` array if the walk slugs are known.

5. **Image:** The `heroImage` field already exists in the ticks guide frontmatter (`/img/guides/ticks-hero.jpg`). The image must be present at that path in `static/img/guides/` for it to render.

6. **JavaScript placement:** The `<script>` block at the bottom of the template handles three things: building the TOC, tracking active section, and inserting the inline CTA. It is wrapped in an IIFE and runs on DOMContentLoaded (implicitly, since the script is at the bottom of the `{{ define "main" }}` block which renders before `</body>`). No external script files required.

7. **`ga-body > p:first-child` selector:** This targets the first paragraph of the rendered markdown content as a slightly larger introductory paragraph. Hugo renders markdown `<p>` tags directly inside the `ga-body` div. The selector will work as long as the markdown file does not begin with a heading.

---

*Spec produced by Designer agent, 2026-03-30. No code files were modified.*
