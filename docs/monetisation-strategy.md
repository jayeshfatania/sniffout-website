# Sniffout Monetisation Strategy
**Date:** 4 April 2026
**Source:** Full research at docs/research/monetisation-research-april-4.md
**Status:** Validated - ready for implementation

---

## Validated Three-Phase Roadmap

### Phase 1 - Affiliate Integration (Start Now, Pre-Launch)

The fastest and lowest-risk path to self-sufficiency. Running costs at pre-launch are under £50/month, and a single well-ranked pet insurance article generating 10 policy referrals per month at £20 CPA covers infrastructure costs with room to spare.

**Immediate actions:**
1. Join AWIN - apply to Everypaw (pet insurance), Zooplus, Purina Direct, Tailster
2. Join Amazon Associates UK - verify current pet category commission (approximately 8%) in Associates Central
3. Join Webgains - apply to Rover UK (15% per sale)
4. Apply to Booking.com affiliate programme for accommodation links on walk pages
5. Contact Canopy and Stars and Cool Camping directly (commission rates not publicly listed)

**Where to place links:**
- Heatstroke and temperature guides: pet insurance CTA ("Does your policy cover heatstroke treatment?")
- Breed walking guides: pet insurance CTA + gear (harnesses, cooling coats, tick removers)
- Each walk page: "Where to stay near this walk" section with 2-3 accommodation links
- Tick, grass seeds, Alabama rot... wait - no links on Alabama rot, blue-green algae, cattle, antifreeze. Safety content only.

**Hard rules (locked):**
- Zero affiliate links on: Alabama rot, blue-green algae, cattle, antifreeze articles
- Walk pages: maximum 1 contextual link. No product rails.
- Homepage and install page: no affiliate links
- All links must carry the approved disclosure: "This article contains affiliate links, marked with (Ad) where they appear. If you buy through these links, Sniffout earns a small commission at no extra cost to you. We only link to products we would genuinely recommend to a fellow dog owner."

**Revenue target:** cover monthly running costs (£20-120/month depending on scale) within 6 months of launch. Achievable at 2,000-3,000 monthly visitors to monetised guide pages.

---

### Phase 2 - Sniffout+ Subscription (12-18 Months Post-Launch)

**Pricing:** £29.99/year or £3.99/month. Default to annual in UI ("Save 37% with annual").

**Launch trigger:** 5,000+ active monthly users; users returning twice or more per month; users asking for features that fit naturally behind a paywall.

**What to gate (new features only - never existing free ones):**
- Offline walk maps (the primary conversion driver at AllTrails and Komoot)
- 7-day detailed hourly weather scoring on walk pages (free users see today only)
- Saved and favourited walks synced across devices
- Enhanced breed-specific scoring personalised to registered dog profile
- Walk history and distance log

**What must stay free:**
- All curated walk discovery and basic walk pages
- Current weather quality score for today
- All safety guide articles and breed guides
- Hazard alerts
- Basic location-based walk finding

**Critical rule:** never move existing free features behind a paywall. Komoot did this in 2025 for route sync (previously free). The backlash - described by major cycling publications as "we don't want new customers" - damaged their reputation and review scores persistently. Design the paywall upfront; be transparent; grandfather existing free features.

**Revenue projections at £29.99/year:**
- 10,000 registered users at 2% conversion: £5,998 ARR
- 50,000 registered users at 3% conversion: £44,985 ARR
- 100,000 registered users at 3% conversion: £89,970 ARR

Industry median freemium conversion: 2.18% (RevenueCat 2025). Annual subscribers show 40% lower churn than monthly.

---

### Phase 3 - Sponsored Venue Listings (18-24 Months Post-Launch)

**Pricing:** £59 + VAT per year per Featured listing.

Validated by DogFriendly.co.uk's live pricing (£54.95 Featured, confirmed on their advertisers page). Market-rate for UK dog-friendly directories.

**Model:** self-serve only. No account manager. Email outreach to venues near high-traffic walk pages. Automate invoice and renewal.

**Launch trigger:** Nearby tab has 50+ venues across covered regions; some venues asking unprompted about increasing their visibility.

**Basic listings:** always free. Directory has no value without venue coverage; venues will not contribute without free access.

**Revenue at steady state:**
- 50 venues: £2,950/year
- 100 venues: £5,900/year
- 200 venues: £11,800/year

Supplemental rather than primary revenue, but strategically valuable: venue relationships improve product quality through confirmed opening hours, dog policies, and special offers.

---

## Key Market Numbers

| Fact | Figure | Source |
|---|---|---|
| UK per-dog annual spend | £1,486/year | Opinium 2024 |
| UK dogs insured | 25% (75% uninsured) | GlobalData 2024 |
| Pet insurance affiliate CPA | £20-40 per completed policy sale | AWIN / ManyPets |
| Amazon Associates pet category | approximately 8% | Associates Central |
| Rover UK affiliate commission | 15% per sale | Webgains |
| Booking.com affiliate yield | approximately 3.75-6% of booking value | AWIN |
| Sniffout+ pricing | £29.99/year | validated vs AllTrails £35.99/year |
| Featured venue listing | £59/year | validated vs DogFriendly.co.uk £54.95 |
| Monthly running costs (pre-launch) | under £50/month | infrastructure estimate |
| Monthly running costs (10,000 MAU) | £30-120/month | infrastructure estimate |

---

## Infrastructure Warning - Google Maps

Google Maps Platform is the primary infrastructure scaling risk. At 50,000 MAU, interactive map loads could cost £200-600/month if every session loads a full interactive map.

**Mitigation (must implement before traffic scales):**
- Serve static map images on walk overview and walk card pages
- Load the full interactive Google Maps only when users tap "Navigate" or "Start walk"
- This single change can reduce the Maps API bill by 80%+ at scale

---

## New Opportunity - Dog-Friendly Accommodation Affiliates

Walk pages are a natural placement for dog-friendly accommodation links. Someone planning a specific walk in the New Forest or Dartmoor is a high-intent accommodation prospect.

Recommended approach: affiliate integration (not a directory). Add a "Where to stay near this walk" section on walk pages with 2-4 accommodation links. Earns commission passively per booking.

Priority programmes:
- Booking.com via AWIN (3.75-6% of booking value, approximately £15-24 per weekend stay)
- Canopy and Stars (contact directly - no published rate)
- Cool Camping (contact directly - no published rate)

---

## What Not to Do

- No display advertising ever. Incompatible with the product's clean design and the trust required in safety-adjacent content.
- No affiliate links on safety-only articles (Alabama rot, blue-green algae, cattle, antifreeze).
- Never paywall existing free features.
- Do not launch subscriptions before demonstrable retention data (users returning twice or more per month).
- Do not invest in B2B/data licensing before subscription is profitable (Phase 4+ only).
- Do not pursue merchandise before Phase 5 - margins are thin and volume requirements are high.
