# CLAUDE.md - sniffout-website

This file provides guidance for work in the sniffout-website Hugo static site repo.

## Repo overview

- Hugo static site, auto-deployed to Cloudflare Pages on every push to main
- Live: sniffout-website.pages.dev
- Custom domain: sniffout.co.uk - NOT yet connected. Do not change baseURL until domain is live.
- Separate repo from the PWA: github.com/jayeshfatania/sniffout-website

## File protection

Do not modify sniffout-v2.html or dog-walk-dashboard.html. Those files are in a different repo (~/Desktop/my-first-repo). This repo contains the companion website only.

## Key file locations

| Purpose | Path |
|---------|------|
| Main CSS | themes/sniffout/static/css/main.css |
| Guide article template | themes/sniffout/layouts/guides/single.html |
| Walk single template | themes/sniffout/layouts/walks/single.html |
| Area template | themes/sniffout/layouts/areas/single.html |
| Homepage template | themes/sniffout/layouts/index.html |
| Walk pages | content/walks/ |
| Guide articles | content/guides/ |
| Area pages | content/areas/ (flat files, e.g. surrey.md - not subdirectories) |
| Design specs | docs/design/ |
| Copy files | docs/copy/ |
| Fact check reports | docs/fact-check/ |
| Research reports | docs/research/ |
| Handoffs | docs/handoffs/ |

## Design decisions (locked)

- Typeface: Plus Jakarta Sans sole typeface throughout. Fraunces display serif permanently rejected.
- Brand colour: #2C4A14 (Woodland Green)
- Second accent: #B85C2C (Sienna) - applied to header CTA pill, difficulty badges, Sniffout Pick badge
- Background: #F4EFE6 (warm linen) - matches PWA
- Card treatment: overlay style (gradient from bottom). Separated card treatment rejected.
- Section labels: low-opacity brand green rgba(44,74,20,0.55)
- Pull quotes: italic, no quotation marks, sienna left border
- Guide article CSS classes: ga- prefix throughout
- Hover on cards: translateY(-2px) - not scale(). More subtle for a content site.
- baseURL: sniffout-website.pages.dev (do not change until sniffout.co.uk is live)

## Current site state

### Pages live
- Homepage
- Walks index + 14 individual walk pages (all with FAQ blocks and schema.org markup)
- Guides index + guide articles (see content/guides/)
- Area index pages: 7 live (Surrey, London, New Forest, Yorkshire, Sussex, Lake District, Dartmoor)
- Install page (/get)
- About page
- Privacy page (placeholder)

### Guide articles live or complete
- Ticks: content/guides/ticks-dogs-uk.md
- Heatstroke: content/guides/heatstroke-dogs-hot-weather-walking.md
- Alabama rot: content/guides/alabama-rot-dogs-uk.md
- Blue-green algae: content/guides/blue-green-algae-dogs-uk.md
- Cattle and dog walkers: content/guides/cattle-dog-walkers-uk.md
- Antifreeze: content/guides/antifreeze-dogs-uk.md
- Grass seeds: content/guides/grass-seeds-dogs-uk.md
- Adder bites: content/guides/adder-bites-dogs-uk.md (complete - research, written, fact-checked, images)
- Shar Pei walking: content/guides/walking-shar-pei-uk.md
- Senior dog walking: content/guides/senior-dog-walking-uk.md (article written - Fact Checker review pending)

### SEO infrastructure
- FAQ blocks on all 14 walk pages with schema.org FAQPage markup
- 7 area index pages capturing regional dog walk searches
- Pull quote frontmatter field on guide articles
- heroImage frontmatter field on guides and walks

## Content pipeline

Researcher - Copywriter (Tom/Ailsa/Saoirse/Ravi) - Fact Checker (mandatory for Tom) - fixes - Editor - Validator - Developer

Fact Checker is mandatory after every Tom article without exception.

### Copywriter personas

| Persona | Content type | Word count |
|---------|-------------|------------|
| Ailsa | Walk page descriptions | 150-200 words |
| Tom | Hazard and safety guide articles | 800-1,500 words |
| Saoirse | Area index page introductions | 50-80 words |
| Ravi | Editorial and homepage copy | Varies |

Full persona specs: docs/copy/website-personas.md

## Copy rules

- No em dashes in any user-facing copy. Hyphens only.
- No "free", "no account needed", "no sign-up", or "no login" anywhere on the website.
- Do not frame the absence of an account as a selling point.
- All hazard articles follow docs/specs/hazard-content-tone-guide.md (in PWA repo).
- Antifreeze and cattle are website articles only - they do not appear in the app in any form.

## Content backlog (priority order)

1. "Is it too hot to walk my dog" temperature guide - mid-May deadline for summer search peak
2. French Bulldog walking guide
3. Cockapoo walking guide
4. Labrador walking guide
5. "How far should I walk my dog" guide
6. Website methodology page (scoring sources - required before go-live, liability protection)
7. Website weather preview card on walk pages
8. Ailsa descriptions for all 14 live walk pages
9. Walk images: newlands-corner.jpg, ranmore-common.jpg still to source

## SEO reference

- Content gap analysis: docs/research/seo-content-gap-analysis-april-2.md
- 90-day content calendar in that file
- "Dog walks near me" = 49,500 monthly searches (highest volume single keyword)
- Breed guides have no competitor coverage - genuine white space
- Area index pages highest-return/lowest-effort content
- Seasonal content must be published 6-8 weeks before peak search period

## Developer push verification (mandatory)

Every Developer brief must end with:
```
cd ~/Desktop/sniffout-website && git add . && git commit -m "sniffout-website - description" && git push
git log --oneline -3
```
Confirm origin/main matches HEAD before saying the task is complete.

## Process rules

- Browser-verify-first: test any CSS visual change in browser console before writing a brief
- One CSS change per brief
- Rollback preferred over fixing forward when multiple things break
- Always grep main.css before writing any CSS rule to confirm current selector and value

## Affiliate strategy

Top programmes to join (in priority order):
1. Everypaw Pet Insurance via AWIN
2. Rover UK via Webgains
3. VioVet via AWIN
4. Petplan via Optimise Media Group
5. tails.com via AWIN

Network to join first: AWIN. Then Amazon Associates UK simultaneously.

Zero affiliate links on: Alabama rot, blue-green algae, cattle, antifreeze articles. Safety content only.
Walk pages: maximum 1 contextual link. No product rails.
Homepage and install page: no affiliate links.

Approved disclosure wording: "This article contains affiliate links, marked with (Ad) where they appear. If you buy through these links, Sniffout earns a small commission at no extra cost to you. We only link to products we would genuinely recommend to a fellow dog owner."
