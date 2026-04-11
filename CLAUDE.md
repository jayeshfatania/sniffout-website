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
| Page layout template | themes/sniffout/layouts/pages/single.html (use type: "pages" in front matter) |
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
- Walks index + 77 individual walk pages (all with FAQ blocks and schema.org markup, weather preview card with lat/lng front matter)
- Guides index + guide articles (see content/guides/)
- Area index pages: 26 live (Surrey, London, New Forest, Yorkshire, Sussex, Lake District, Dartmoor, Hampshire, Hertfordshire, Edinburgh, Brecon Beacons, Snowdonia, Gower, South Wales, West Wales, Peak District, North East England, North West England, East Midlands, Shropshire, East of England, Fife, Loch Lomond, Perthshire, Cotswolds, South West England)
- Regions covered: Surrey, London, New Forest, Yorkshire, Sussex, Lake District, Dartmoor, Hampshire, Hertfordshire, Edinburgh and Lothians, Brecon Beacons, Snowdonia, Gower, South Wales, West Wales, Peak District, North East England, North West England, East Midlands, Shropshire, East of England, Suffolk, Norfolk, Fife, Loch Lomond, Perthshire, Cotswolds, Gloucestershire, Worcestershire, Herefordshire, Malvern Hills, South West England, Cornwall, Dorset, Devon, Somerset
- Install page (/get)
- About page
- Privacy page (placeholder)
- Methodology page (/methodology/) - uses page layout template (themes/sniffout/layouts/pages/single.html, type: pages in front matter)

### Guide articles live or complete
- Ticks: content/guides/ticks-dogs-uk.md (Editor pass complete)
- Heatstroke: content/guides/heatstroke-dogs-hot-weather-walking.md
- Alabama rot: content/guides/alabama-rot-dogs-uk.md
- Blue-green algae: content/guides/blue-green-algae-dogs-uk.md
- Cattle and dog walkers: content/guides/cattle-dog-walkers-uk.md
- Antifreeze: content/guides/antifreeze-dogs-uk.md
- Grass seeds: content/guides/grass-seeds-dogs-uk.md
- Adder bites: content/guides/adder-bites-dogs-uk.md (complete - research, written, fact-checked, images)
- Shar Pei walking: content/guides/walking-shar-pei-uk.md (Editor pass complete)
- Brachycephalic breeds dog walks: content/guides/best-dog-walks-brachycephalic-breeds.md
- Autumn dog walks UK: content/guides/dog-walks-autumn-uk.md
- Shar Pei fever (SPAID): content/guides/shar-pei-fever-spaid.md
- Shar Pei skin fold care: content/guides/shar-pei-skin-fold-care.md
- Senior dog walking: content/guides/senior-dog-walking-uk.md (fact-checked, PASS)
- French Bulldog walking guide: content/guides/french-bulldog-walking-guide.md (fact-checked, PASS)
- Cockapoo walking guide: content/guides/cockapoo-walking-guide.md (fact-checked, PASS with one correction applied)
- Temperature guide "Is it too hot to walk my dog?": content/guides/temperature-guide.md (fact-checked, PASS, flagship seasonal article)
- Labrador walking guide: content/guides/labrador-walking-guide.md (fact-checked, PASS WITH CORRECTIONS applied, Editor pass complete)
- How far should I walk my dog: content/guides/how-far-should-i-walk-my-dog.md (fact-checked, PASS WITH CORRECTIONS applied, Editor pass complete)

### SEO infrastructure
- FAQ blocks on all 77 walk pages with schema.org FAQPage markup
- 26 area index pages capturing regional dog walk searches
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

1. Labrador walking guide (next breed guide)
2. "How far should I walk my dog" guide (5,000-10,000 monthly searches)
3. Trail Tips: first batch - short practical hacks in Jayesh's founder voice (walk pages, standalone articles, social)
4. Walk page enrichment: "Before you go" and "For your dog" sections (Designer task - spec needed)
5. Contextual product links in existing guides (after AWIN setup - affiliate Phase 1)
6. Walk images: newlands-corner.jpg, ranmore-common.jpg - PNG placeholders saved but need replacing (Google Maps screenshots are copyrighted, source proper photos)

**All 12 walk batches complete. 77 walk pages live.**

**Recently completed (not to re-do):**
- Temperature guide "Is it too hot to walk my dog?": DONE (fact-checked PASS)
- French Bulldog walking guide: DONE
- Cockapoo walking guide: DONE
- Senior dog walking article: DONE
- Methodology page: DONE
- Ailsa descriptions for original 14 walks: DONE (committed to walk pages)
- Weather preview card on walk pages: DONE
- Batch 6: North East England walks DONE (Hadrian's Wall, Bamburgh Beach, Alnmouth to Warkworth, Kielder Forest, Durham Riverside, Plessey Woods - 6 walk pages + North East England area page)
- Batch 7: North West England walks DONE (Formby Beach, Beacon Fell, Rivington Pike, Lyme Park - 4 walk pages + North West England area page)
- Batch 8: East Midlands walks DONE (Bradgate Park, Calke Abbey, Cannock Chase, Sherwood Forest, Clumber Park, Lickey Hills - 6 walk pages + East Midlands area page)
- Batch 9: Cotswolds walks DONE (Chipping Campden, Bourton-on-the-Water, Broadway Tower, Cleeve Hill, Symonds Yat, Malvern Hills - 6 walk pages + Cotswolds area page)
- Batch 10: Shropshire walks DONE (Stiperstones, Long Mynd, Wenlock Edge, Clent Hills - 4 walk pages + Shropshire area page)
- Batch 11: East of England walks DONE (Dunwich Heath, Thetford Forest, Sheringham Park - 3 walk pages + East of England area page)
- Batch 12: South West walks DONE (Tehidy Country Park, Moors Valley, Golden Cap, Watersmeet Exmoor, Quantock Hills, Burrator Reservoir - 6 walk pages + South West England area page)
- Saoirse area intros: DONE (Batches 5-12: Peak District, North East England, North West England, East Midlands, Cotswolds, Shropshire, East of England, South West England)

## SEO reference

- Content gap analysis: docs/research/seo-content-gap-analysis-april-2.md
- 90-day content calendar in that file
- "Dog walks near me" = 49,500 monthly searches (highest volume single keyword)
- Breed guides have no competitor coverage - genuine white space
- Area index pages highest-return/lowest-effort content
- Seasonal content must be published 6-8 weeks before peak search period

## Analytics

- GA4 live on app and website. Measurement ID: G-B1GQG1KWD3
- Guide scroll tracking: guide_read event fires at 50% scroll depth
- Weather card events tracked on homepage and guide pages
- CTA click tracking on install CTAs
- Custom events on PWA: tab_view, walk_card_tap, walk_detail_open, weather_check, nearby_search, app_install_prompt, app_installed
- Beta source tracking via ?src= URL parameter

## Developer push verification (mandatory)

Every Developer brief must end with:
```
cd ~/Desktop/sniffout-website && git add . && git commit -m "sniffout-website - description" && git push
git log --oneline -3
```
Confirm origin/main matches HEAD before saying the task is complete.

## Walk page pipeline

Researcher verifies facts (distances, access rules, livestock, off-lead status) - Ailsa writes description (150-200 words) - Developer builds page.

No Fact Checker required for walk pages unless health or safety claims are made. Fact Checker is mandatory for Tom hazard articles only.

All distances on the website are in kilometres (not miles). Convert from miles in app data when building walk pages.

## Image tracking

Owner maintains a Google Sheets tracker for all walk and guide images. Check the tracker before sourcing new images.

- Geograph images (geograph.org.uk): free to use under CC BY-SA licence. Must include credit: "Photo: [Photographer name] / Geograph, CC BY-SA 2.0"
- Pexels images: free to use, no attribution required
- Google Maps screenshots: copyrighted, do not use
- OS map extracts: copyrighted, do not use without licence
- AI-generated images: not approved for the website

## Process rules

- Browser-verify-first: test any CSS visual change in browser console before writing a brief
- One CSS change per brief
- Rollback preferred over fixing forward when multiple things break
- Always grep main.css before writing any CSS rule to confirm current selector and value

## Affiliate strategy

Top programmes to join (in priority order):
1. Everypaw Pet Insurance via AWIN (CPA up to £20/policy - highest individual value)
2. Rover UK via Webgains (15% per sale)
3. VioVet via AWIN
4. Petplan via Optimise Media Group (approximately £10/policy)
5. tails.com via AWIN
6. Booking.com via AWIN (approximately 3.75-6% of booking value - high per-conversion value)
7. Canopy and Stars (contact directly - premium dog-friendly accommodation)
8. Cool Camping (contact directly - premium dog-friendly accommodation)

Network to join first: AWIN. Then Amazon Associates UK and Webgains simultaneously.

### Dog-friendly accommodation affiliates (new - high value)
Walk pages near dog-friendly accommodation destinations (New Forest, Lake District, Dartmoor, Surrey Hills) are a natural placement for accommodation affiliate links. "Where to stay near this walk" section: 2-3 links. Earn per booking passively. Booking.com per-conversion yield: approximately £15-24 on a 2-night weekend stay. Higher yield than most product affiliates.

Pet insurance CPAs £20-40/sale are highest per-transaction value. Best pairing: heatstroke guide + insurance CTA; breed guides + breed-specific insurance mention (French Bulldog BOAS cover).

Zero affiliate links on: Alabama rot, blue-green algae, cattle, antifreeze articles. Safety content only.
Walk pages: maximum 1 contextual link. No product rails.
Homepage and install page: no affiliate links.

Approved disclosure wording: "This article contains affiliate links, marked with (Ad) where they appear. If you buy through these links, Sniffout earns a small commission at no extra cost to you. We only link to products we would genuinely recommend to a fellow dog owner."
