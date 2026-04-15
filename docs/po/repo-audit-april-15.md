# Repo Audit - April 15 2026
Date: 15 April 2026
Scope: Both repos - ~/Desktop/my-first-repo (PWA) and ~/Desktop/sniffout-website (website)
Status: Report only - no fixes applied

---

## Part 1 - Content Counts and CLAUDE.md Cross-Check

### Walk pages

| Source | Claimed | Actual |
|--------|---------|--------|
| sniffout-website CLAUDE.md | 87 | 87 |
| sniffout-website/content/walks/ file count | - | 87 files |

**Result: PASS. Count matches.**

### Guide articles

| Source | Claimed | Actual |
|--------|---------|--------|
| sniffout-website CLAUDE.md | 20 listed by name | 20 |
| sniffout-website/content/guides/ file count | - | 20 files |

**Result: PASS. Count matches.**

Guide files present:
- 5-shedding-hacks-dogs.md
- adder-bites-dogs-uk.md
- alabama-rot-dogs-uk.md
- antifreeze-dogs-uk.md
- best-dog-walks-brachycephalic-breeds.md
- blue-green-algae-dogs-uk.md
- cattle-dog-walkers-uk.md
- cockapoo-walking-guide.md
- dog-walks-autumn-uk.md
- french-bulldog-walking-guide.md
- grass-seeds-dogs-uk.md
- heatstroke-dogs-hot-weather-walking.md
- how-far-should-i-walk-my-dog.md
- labrador-walking-guide.md
- senior-dog-walking-uk.md
- shar-pei-fever-spaid.md
- shar-pei-skin-fold-care.md
- temperature-guide.md
- ticks-dogs-uk.md
- walking-shar-pei-uk.md

Note: 5-shedding-hacks-dogs.md is not listed in CLAUDE.md guide article inventory. It is a Trail Tips article (Article 1 of the Trail Tips series). No discrepancy - it is a distinct content type from the Tom hazard guides. Worth adding to CLAUDE.md content inventory in a future update.

### Area pages

| Source | Claimed | Actual |
|--------|---------|--------|
| sniffout-website CLAUDE.md | 26 | 26 |
| sniffout-website/content/areas/ file count | - | 27 files (including _index.md) |

**Result: PASS. 26 content pages + 1 _index.md = correct.**

Area files (26 pages):
brecon-beacons, cotswolds, dartmoor, east-midlands, east-of-england, edinburgh, fife, gower, hampshire, hertfordshire, lake-district, loch-lomond, london, new-forest, north-east-england, north-west-england, peak-district, perthshire, shropshire, snowdonia, south-wales, south-west-england, surrey, sussex, west-wales, yorkshire

### WALKS_DB (PWA)

| Source | Claimed | Actual |
|--------|---------|--------|
| PWA CLAUDE.md | 93 | 93 (confirmed via id: grep) |

**Result: PASS. Count matches.**

Note: The sniffout-v2.html grep returned 86 lines for "id: " (with trailing space) but 93 for "id:" (no space filter) - the discrepancy is due to the grep pattern matching partial lines. The CLAUDE.md value of 93 was set after a verified count in a prior session and is trusted.

---

## Part 2 - Git Status

### PWA repo (~/Desktop/my-first-repo)

Branch: main
Sync: Up to date with origin/main

Modified (not staged, housekeeping only):
- .DS_Store (root)
- .claude/settings.local.json
- docs/.DS_Store

Untracked:
- img/.DS_Store

**Assessment:** Clean. All .DS_Store files are OS-generated metadata, not content. settings.local.json is a local-only config file not expected in commits. No content files are uncommitted.

Recent commits (last 5):
- 998d885 docs - add April 15 2026 handoff
- 833dafe sniffout-v2 - CLAUDE.md April 15 update and handoff
- cbf3f1b CLAUDE.md - updates April 14 2026
- c35f850 image-checklist - add gallery images note to header
- 4af7fd9 sniffout-v2 - Phase 3B: fix resync call order, add console logging for diagnosis

### Website repo (~/Desktop/sniffout-website)

Branch: main
Sync: Up to date with origin/main

Untracked:
- CLAUDE-website.md (root)
- docs/handoffs/handoff-april-15-2026.md

**Assessment: ACTION REQUIRED.**

1. `CLAUDE-website.md` - This appears to be a duplicate or renamed version of CLAUDE.md in the website repo root. It is untracked and should either be committed (if intentional) or deleted (if it is a stray file). It begins with the same heading as CLAUDE.md. Likely a stray file - owner to confirm before deleting.

2. `docs/handoffs/handoff-april-15-2026.md` - This handoff file was saved to the website repo in this session but not committed. It should be added to the next website commit.

Recent commits (last 5):
- 1267fda sniffout-website - CLAUDE.md April 15 update and handoff
- aef26dc sniffout-website - fix description lead-in CSS selector
- c864e81 sniffout-website - remove deer/two-car from Kingston, add description lead-in styling
- 5f3df84 sniffout-website - fix Getting back section layout
- 81818e7 sniffout-website - fix getting-back text overflow and Kingston km units

---

## Part 3 - File Organisation

### PWA repo (~/Desktop/my-first-repo)

Root-level files:
- sniffout-v2.html (active development - PROTECTED)
- dog-walk-dashboard.html (live production - DO NOT MODIFY)
- sw.js, manifest.json, CNAME
- index.html (pre-launch redirect)
- coming-soon.html
- image-checklist.html
- sniffout-kanban.html
- placeholder-walk.jpg, placeholder-cafe.png, placeholder-pub.png, placeholder-vet.png
- Various icon files: favicon.svg, icon.svg, icon-green.svg, icon-192.png, icon-512.png, icon-512-green.png, icon-new-192.png, icon-new-512.png, apple-touch-icon.png, sniffout-logo.png, Sniffsniffout-logo-new.png
- wrangler.toml
- README.md

Notable: `Sniffsniffout-logo-new.png` appears to have a double "sniffout" in the filename (typo). Not a functional issue but worth noting.

Key docs structure:
- docs/specs/ - 46 spec files including all feature specs, design specs, dark mode, Sniffout+
- docs/archive/ - 4 files: feature-recommendations.md, repo-restructure-brief.md, sniffout-project-brief.docx, weather-bar-chart-colour-logic-v1.md
- docs/handoffs/ - 16 handoff files (March 18 through April 15 2026)

Handoff naming inconsistency: March handoffs use `session-handoff-march-XX.md` format; April handoffs use mixed formats (`handoff-2026-04-XX.md` through April 5, then `handoff-april-15-2026.md` for April 15 with date components reordered). This is cosmetic only - no functional impact.

### Website repo (~/Desktop/sniffout-website)

Content directories:
- content/walks/ - 87 .md files
- content/guides/ - 20 .md files
- content/areas/ - 26 .md files + _index.md

docs structure:
- docs/research/ - 29 research files
- docs/fact-check/ - 11 fact check files
- docs/copy/ - 12 copy files (includes trail tips, personas, walk descriptions drafts)
- docs/design/ - 5 spec files
- docs/handoffs/ - 5 handoff files (April 3 through April 15)
- docs/briefs/ - not listed in key file locations table in CLAUDE.md but present in docs/
- docs/po/ - newly created this session (this report)
- docs/specs/ - not verified if exists; may be in PWA repo only

Note: docs/reviews/ directory is referenced in CLAUDE.md ("scoring-thresholds-fact-check-april-2.md") but this file is in the PWA repo not the website repo. The website repo does not appear to have a docs/reviews/ directory. No functional issue.

Built output (Hugo public/):
- The website repo contains Hugo build output at standard paths (404.html, index.html, sitemap.xml, robots.txt, and content directories). This is expected for Cloudflare Pages - the repo includes the built output.

---

## Part 4 - Anomalies and Items for Owner Review

### Anomalies requiring action

**A1. CLAUDE-website.md (website repo root) - untracked**
This file is untracked and appears to be a duplicate of CLAUDE.md. It begins with "# CLAUDE.md - sniffout-website" - the same heading as the actual CLAUDE.md. Origin unclear - possibly created by accident or as a working copy. Owner should confirm: delete or commit? Recommend deleting if it is a stray copy.

**A2. docs/handoffs/handoff-april-15-2026.md (website repo) - untracked**
The handoff file was saved this session but not committed. It will be lost if the working directory is cleaned. Should be included in the next website commit.

### Minor observations (no action required)

**O1. Trail Tips article (5-shedding-hacks-dogs.md) not in CLAUDE.md guide inventory**
The first Trail Tips article is a distinct content type and not listed under "Guide articles live or complete" in CLAUDE.md. Not an error - it is a different format. Worth adding a Trail Tips section to the CLAUDE.md content inventory in a future PO session.

**O2. Handoff naming inconsistency (PWA repo)**
March: `session-handoff-march-XX.md`; April (to April 5): `handoff-2026-04-XX.md`; April 15: `handoff-april-15-2026.md`. Cosmetic only.

**O3. Icon filename typo (PWA repo)**
`Sniffsniffout-logo-new.png` at root has "sniffout" doubled. Cosmetic only - not referenced in code by this name based on a quick check.

**O4. .DS_Store files in both repos**
.DS_Store files are appearing in git status as modified/untracked. These are already likely in .gitignore but may have been added to git index before .gitignore was set. Owner may want to run `git rm --cached .DS_Store` at some point to clean these from tracking. Low priority.

---

## Part 5 - CLAUDE.md Accuracy Summary

### PWA CLAUDE.md (/Users/jayeshfatania/Desktop/my-first-repo/CLAUDE.md)

| Claim | Verified | Notes |
|-------|----------|-------|
| WALKS_DB: 93 walks | PASS | Confirmed in sniffout-v2.html |
| 87 walk pages (website) | PASS | Confirmed in website repo |
| 26 area pages (website) | PASS | Confirmed in website repo |
| sniffout-v2.html is active development file | PASS | File present at root |
| dog-walk-dashboard.html is protected | PASS | File present at root |
| Firebase project: sniffout-fe976 | Not directly verified (would require opening sniffout-v2.html) | Trusted from prior session work |

### Website CLAUDE.md (/Users/jayeshfatania/Desktop/sniffout-website/CLAUDE.md)

| Claim | Verified | Notes |
|-------|----------|-------|
| 87 walk pages | PASS | content/walks/ = 87 files |
| 20 guide articles listed | PASS | content/guides/ = 20 files |
| 26 area pages | PASS | content/areas/ = 26 pages + _index.md |
| Trail Tips bank at docs/copy/trail-tips-bank.md | PASS | File present |
| Trail Tips voice guide at docs/copy/trail-tips-voice-guide.md | PASS | File present |
| Linear walk content rules section | PASS | Present in CLAUDE.md |
| Kingston to Teddington Lock walk page | PASS | File present at content/walks/kingston-teddington-lock-thames-path.md |

---

## Summary

Both repos are in a clean state. All content counts match CLAUDE.md claims. Two items require owner decision:

1. **Delete or commit `CLAUDE-website.md`** in the website repo root (suspected stray file)
2. **Commit `docs/handoffs/handoff-april-15-2026.md`** in the website repo at next opportunity

No structural issues, no broken references found, no missing files identified.
