# Sniffout Session Handoff — April 13-14 2026

## Session summary

A high-output two-day session that significantly expanded the website's content and feature set. The main deliverables were: the first linear walk page (Kingston to Teddington Lock, Sniffout Pick, 5 photos), the Before you go and For your dog sections now live across all walk pages, walk photo gallery support, author bylines on all guide articles, a full set of Saoirse intros for all 26 area pages, Trail Tips voice guide and tip bank, and three research packs (underrated walks, waterside walks, community map pins). On the PWA side, Firebase Phase 3B multi-device sync was built and tested, with one minor gap parked as non-blocking.

---

## Current state (as of April 14 2026)

### PWA (sniffout.app)

- **Walk count in WALKS_DB:** 93 walks
- **Firebase Phase 3B status:** Largely complete. Multi-device merge built; this month stats sync correctly. 1 journal entry and 3km total distance gap remains — parked April 14, not a launch blocker. Email verification not yet implemented (required before public launch).
- **Key features live:** Smart weather scoring, breed sensitivity engine, walk log with journal, dog profiles, Firebase anonymous auth + email/password sign-in, account deletion (GDPR), saved walks, saved places, dark mode, multi-device sync (Phase 3B)
- **Pre-launch blockers remaining:** See section below.

### Website (sniffout-website.pages.dev)

- **Walk pages:** 87 (all with FAQ blocks, schema.org markup, weather preview cards, Before you go, For your dog sections)
- **Guide articles:** 20
- **Area pages:** 26 (all with Saoirse intros)
- **New features live this session:** Walk photo gallery, linear walk template, Before you go + For your dog sections, author bylines on all guide articles, weather chart timezone fix (UTC → Europe/London)

---

## Completed this session (April 13-14)

### Firebase / sync
- Firebase Phase 3B multi-device merge: BUILT and tested. This month stats sync. 1 journal entry + 3km gap parked as non-blocking.
- B2 beforeunload handler: closed. Owner confirmed not an issue, no fix required.

### Website features
- Before you go + For your dog sections: live on all walk pages (spec at docs/design/walk-page-sections-spec-april-13.md)
- Walk page photo gallery strip: gallery frontmatter array, captions, credits, lightbox on desktop
- Linear walk template: walkType, startPoint, endPoint, returnOptions, waterAccess, canalWater, tidal fields. Getting back section in Before you go sidebar. All blocks invisible on circular walks.
- Author bylines on all Tom guide articles: fact checked badge and methodology link included
- Website weather chart timezone fix: was showing UTC hour labels, now uses Europe/London

### Website content
- Kingston to Teddington Lock walk page: first linear walk page, Sniffout Pick, 5 personal photos
- Saoirse area intros: completed for all 26 area pages (final batch April 13-14)
- Trail Tips voice guide: docs/copy/trail-tips-voice-guide.md
- Trail Tips tip bank: docs/copy/trail-tips-bank.md
- Trail Tips Article 1: complete

### Research
- Underrated walks research: 20 new walks identified, docs/research/underrated-walks-research-april-14.md
- Waterside walks research: towpath and riverside focus, docs/research/waterside-walks-research-april-14.md
- Community map pins research: full competitor analysis, 15 pin types evaluated, V1 spec (5 types), docs/research/community-map-pins-research-april-14.md

### Documentation
- Walk page sections spec: docs/design/walk-page-sections-spec-april-13.md (committed April 13)
- App UI parity review: docs/design/app-ui-parity-review-april-10.md (my-first-repo)
- CLAUDE.md updates: both repos updated April 14
- This handoff document

---

## In progress / not yet complete

- **Waterside walk batch 1 (5 pages):** In progress at time of handoff. Batch includes pages from waterside-walks-research-april-14.md. Kingston to Teddington Lock is the first completed page.
- **Trail Tips Article 2 (hot weather hacks):** Not yet started. Article 1 complete.
- **Luna photo restoration:** In progress, not complete at time of handoff.
- **Firebase sync 1 missing entry + 3km distance gap:** Parked April 14. Not a launch blocker. Investigate in a future session if it grows.

---

## Next actions (prioritised)

1. **Legal — Sprintlaw call (most important owner action):** Blocks ICO registration, Privacy Policy finalisation, T&C consent screen (L5), and GDPR sign-off (L1). Nothing else unblocks until this is done.
2. **Waterside walk batch 1 — remaining pages:** Commission Ailsa descriptions and build walk pages for the remaining 4 walks in the batch (Cookham to Marlow, Teddington to Richmond, and others from the research pack).
3. **Trail Tips Article 2 — hot weather hacks:** Hot weather seasonal window opens May. Publish 6-8 weeks before peak. Commission now.
4. **Image sourcing — continue adding personal photos to walk pages:** Kingston to Teddington Lock has 5 photos. Other walk pages with zero images are next. Check Google Sheets tracker before sourcing.
5. **Affiliate — ManyPets response due:** Chase if no response. Rover UK and Booking.com (via CJ Affiliate) to join post-legal.
6. **AWIN — add payment details to dashboard:** Required before first commission can be paid. Everypaw, tails.com, VioVet applications pending approval.
7. **Community map pins V1 spec and build:** Research complete (April 14). V1 spec defines 5 pin types. Do not build without explicit PO brief. Post-500 MAU trigger.
8. **Firebase sync investigation:** 1 journal entry + 3km gap. Low priority — parked. Review if gap grows.
9. **Email verification flow:** Must be implemented before public launch (Firebase sendEmailVerification). Not a day-one issue if staying in closed beta.
10. **OSM data import scoping:** Community map pins research recommended OSM as the data source for V1 public pins. Scope the import before commissioning any build work.

---

## Key files created this session

| File | Description |
|------|-------------|
| docs/design/walk-page-sections-spec-april-13.md | Full Designer spec for Before you go + For your dog sections |
| docs/design/app-ui-parity-review-april-10.md (my-first-repo) | Designer/Editor review of app vs website visual parity |
| docs/copy/trail-tips-voice-guide.md | Jayesh founder voice guide for Trail Tips content |
| docs/copy/trail-tips-bank.md | Trail Tips tip bank (Article 1 source material) |
| docs/research/underrated-walks-research-april-14.md | 20 underrated UK dog walks identified |
| docs/research/waterside-walks-research-april-14.md | Towpath and riverside walk research, batch 1 scope |
| docs/research/community-map-pins-research-april-14.md | Community map pins competitor analysis and V1 spec |
| docs/handoffs/handoff-april-14-2026.md | This document |

---

## Hard rules established this session

- **Linear walk return options:** Always list "walk back the same route" first, before any transport options.
- **Off-lead accuracy:** Never assume off-lead access. Research and verify for every walk.
- **Transport options:** Verify accuracy before publishing. If unverified, omit. Always add note to check timetables.
- **Hero images:** Landscape orientation only. Portrait images will not render correctly in the hero banner.
- **Gallery images:** Numbered as [walk-slug]-2.jpg, [walk-slug]-3.jpg etc in static/img/walks/
- **Wikimedia Commons:** CC BY, CC BY-SA, CC0 and Public Domain only. Never NC or ND licenced images.

---

## Pre-launch blockers (still open)

In priority order:

1. **L1 — GDPR sign-off:** Required before real users can access email sign-in. Development/internal testing can proceed without it. Blocked on Sprintlaw call.
2. **L5 — T&C consent screen:** Blocked on Sprintlaw call (solicitor input required before T&Cs can be drafted).
3. **ICO registration:** Required before launch. Blocked on Sprintlaw call.
4. **T18 — Firebase config hardcoded in sniffout-v2.html:** Must move to Cloudflare Worker environment variables before launch.
5. **T17 — Firebase security review:** Firestore rules and auth config review. Not started.
6. **T12 — Pen test:** Auth flows and Firestore data access. Not started.
7. **Email verification:** Firebase sendEmailVerification must be implemented before public launch.
8. **T16 — Full end-to-end test pass:** Not started.
