# Sniffout+ Subscription Research
**Produced:** April 12 2026
**Research scope:** Competitor pricing, UK subscription market, feature ideation, Walk Wrapped, pricing strategy
**Confidence notation:** HIGH = verified from primary/official sources; MEDIUM = cross-referenced secondary sources; LOW = single source or estimated

---

## 1. Executive Summary

### Top 10 Findings and Recommendations

1. **£29.99/year is well-positioned.** The outdoor app market in the UK clusters between £26.99 (Outdooractive) and £39.99 (OS Maps). £29.99/year sits at the accessible end of a credible peer group without being so cheap it signals low value. It is below the psychological pain point that triggered the Komoot backlash.

2. **Komoot is a cautionary tale, not a model.** In March 2025, Komoot paywalled core device-sync functionality for new users. The community reaction was overwhelmingly negative, the phrase "Komooted" entered cycling vocabulary as a synonym for extractive monetisation, and the company was subsequently sold to Bending Spoons with up to 85% staff layoffs. The lesson is that gating features users already expect free destroys trust permanently. Sniffout has already internalised this, but the Komoot case makes it a matter of commercial survival, not just taste.

3. **Offline walk data is the single most credible paid feature.** Every major competitor (AllTrails, OS Maps, HiiKER, Outdooractive) gates offline maps/content as the primary paid hook. UK walkers understand and accept this value exchange. For Sniffout's PWA architecture, this means offering downloadable walk cards (descriptions, hazard notes, photos, weather snapshot) as cached offline packs rather than interactive offline vector maps, which is technically complex on a PWA.

4. **Extended weather intelligence is a natural premium layer.** Sniffout's weather scoring is already the product differentiator. Gating 7-day detailed scoring (vs 24-hour free), historical walk conditions data, pollen/AQI overlays, and real-time ground conditions reports within a premium tier builds directly on the product's core strength. No competitor combines dog-specific weather intelligence at this depth -- this is a genuine gap.

5. **Walk Wrapped is a free acquisition asset, not a premium feature.** Spotify Wrapped generated 21% more app downloads in release week (2020) and 200 million engaged users within 24 hours of the 2025 launch. Strava's decision to paywall Year in Sport was widely criticised. Walk Wrapped should be free for all logged users, with enhanced shareable formats and extended historical data for Sniffout+ subscribers.

6. **Annual-first pricing with a monthly escape hatch.** Data shows annual subscribers have 2.5x higher retention than monthly (33.9% still active after 1 year vs 13.8%). Push annual hard. The monthly tier (£3.99/month = £47.88/year) should exist but should not be the primary pitch.

7. **A lifetime option at £69 is worth testing.** Standard guidance is 2.5-4x annual price. At £29.99/year, that suggests £75-120. £69 is deliberately below guidance to drive early adopter conversion and generate lump-sum cash during the pre-5,000 MAU phase. Cap availability or time-limit it to create urgency.

8. **The multi-dog plan is viable but not urgent.** Pet insurance routinely offers 5-10% multi-pet discounts. A "Pack Plan" at £44.99/year (two dogs) is worth testing at the 2,000+ MAU stage, but it should not delay the core Sniffout+ launch.

9. **Health and fitness tracking is the most defensible long-term moat.** Breed-specific exercise tracking, vet-recommended daily activity goals, and post-surgery recovery monitoring exist in no UK competitor today. The data Sniffout already collects (dog profile, walk log, breed, age, size) is sufficient to build a meaningful MVP of this category without new infrastructure.

10. **Break-even is achievable at low subscriber numbers.** At £29.99/year, covering the primary scaling cost (Google Places API at ~£100/month at 1,000 MAU) requires only 41 paying subscribers annually. At 5,000 MAU with even a 1% conversion rate, 50 subscribers generates ~£1,500/year. A 2% conversion rate at 5,000 MAU = 100 subscribers = ~£3,000/year, comfortably covering API costs and leaving margin.

---

## 2. Competitor Pricing Analysis (2026)

### 2a. AllTrails

AllTrails restructured its subscription tiers in May 2025, introducing a three-tier model.

| Tier | Price (USD) | Approx GBP | Key Features |
|------|------------|------------|--------------|
| Free | $0 | £0 | Trail discovery, basic maps, community reviews |
| Plus | $35.99/year | ~£28/year | Offline maps, wrong-turn alerts, 3D trail previews, live sharing |
| Peak | $79.99/year | ~£63/year | AI smart routes, trail condition forecasts, traffic heatmaps, plant/tree identification via camera |

**Subscriber base:** AllTrails has over 80 million registered users and more than 1 million paying subscribers, implying a freemium-to-paid conversion rate of approximately 1.25%.

**Churn rate:** AllTrails reportedly maintains a ~1% monthly churn rate on paid subscriptions -- exceptionally low for consumer apps and attributed to high feature utility and seasonal usage patterns (outdoor activity is year-round motivation).

**Key lesson:** The introduction of an AI tier at $79.99 is a deliberate premium signal. AllTrails is testing whether power users will pay more for intelligence features. The Plus tier at ~$36 is the workhorse conversion tier. Peak at ~$80 is aspirational and serves to anchor Plus as "reasonable."

**Confidence:** HIGH (TechCrunch May 2025, AllTrails support pages)

---

### 2b. Komoot

Komoot was acquired by Bending Spoons in March 2025 following widespread backlash at paywall expansion.

| Tier | Price | Key Features |
|------|-------|-------------|
| Free | £0 | Route planning, basic navigation, community routes |
| Premium | £59.99/year or £4.99/month | Offline maps, 3D maps, sport-specific mapping, multi-day planning, device sync (NEW users only), weather insights, live tracking |

**February 2025 change:** New users now require an active Premium subscription to sync routes to devices (Garmin, Wahoo, etc.). GPX file download also requires Premium or legacy map purchases. Existing users with map unlocks before February 27 2025 are grandfathered.

**Community reaction:** Described by critics as "ridiculous" and self-defeating. The 5K Runner blog headline: "Komoot confirms 'We don't want any new customers.'" Bikepacking.com coined "Komooted" as a verb. Users pointed out that competitors (Strava, RideWithGPS) do not gate device sync, making Komoot's choice commercially irrational.

**Acquisition consequence:** Komoot sold to Bending Spoons weeks after the paywall expansion, with reported staff layoffs of up to 85%. The correlation -- paywall backlash, user loss, distressed sale -- is the most important case study in outdoor app monetisation in 2025.

**Key lesson for Sniffout:** The Komoot lesson reinforces the existing hard rule. Never paywall existing features. The community memory is long and the reputation damage is disproportionate and persistent. Komoot's Trustpilot score collapsed following the change.

**Confidence:** HIGH (DC Rainmaker, BikeRadar, Cycling Weekly, March 2025)

---

### 2c. Strava

| Tier | UK Price | Key Features |
|------|----------|-------------|
| Free | £0 | Activity logging, basic stats, social feed, some segments |
| Subscription | £8.99/month or £54.99/year | Route planning, training dashboard, heart rate analysis, Beacon (live safety tracking), advanced metrics, Year in Sport |

**Price change history:** Strava raised monthly subscription by more than 25% in 2025. UK subscribers now pay £8.99/month vs the previous ~£7/month. Annual plan held at £54.99.

**Year in Sport controversy:** Strava paywalled its Year in Sport (equivalent of Spotify Wrapped) as a paid-only feature, generating significant negative press. Road.cc headline: "Want to see your Year in Sport on Strava? You'll now need to pay." This is the primary data point for the Walk Wrapped free/paid split decision -- Strava's approach is widely considered a mistake.

**User base:** 180 million users across 185 countries. Subscription conversion rate not publicly disclosed but estimated at under 5%.

**Feature driving conversions:** Route planning and Beacon (safety live tracking) are cited most frequently as conversion drivers by user forums.

**Confidence:** HIGH (Strava pricing page, Cycling Weekly, BikeRadar)

---

### 2d. OS Maps (Ordnance Survey)

The UK's most credible outdoor mapping subscription. Strong brand authority, institutional awareness.

| Tier | Price | Key Features |
|------|-------|-------------|
| Free | £0 | Limited map access |
| Premium | £39.99/year or £4.99/month | Full 1:25,000 and 1:50,000 OS maps, offline maps, route planning, augmented reality view, 3D terrain, route sharing |

**Promotional pricing:** Heavily discounted via partner organisations. The Caravan Club, Cycling UK (35% off), and other member organisations offer OS Maps Premium at ~£26-28/year. Seasonal discount codes frequently appear at 30-50% off. Effective paid rate for many UK users is £20-28/year.

**Significance for Sniffout:** OS Maps at £39.99 is the top of the UK outdoor app pricing band. £29.99 positions Sniffout+ as clearly more affordable than OS Maps while delivering a complementary (not competing) proposition -- Sniffout is about dog-specific intelligence, not cartography.

**Confidence:** HIGH (Ordnance Survey shop, partner organisation pages)

---

### 2e. Outdooractive (formerly ViewRanger)

ViewRanger was acquired by Outdooractive and fully migrated by 2023. ViewRanger users were offered complimentary Pro/Pro+ subscriptions for a minimum of 3 months.

| Tier | UK Price | Key Features |
|------|----------|-------------|
| Free | £0 | Basic route discovery, limited maps |
| Pro | ~£26.99/year (£2.23/month) | Offline maps, advanced navigation, route planning |
| Pro+ | ~£53.99/year (£4.45/month) | All Pro features plus premium map layers, weather, altitude profiles |

**Market position:** Less prominent in UK consumer market than AllTrails, OS Maps, or Komoot. Stronger with European hikers and cyclists. The ViewRanger brand had strong UK loyalty that partially transferred to Outdooractive.

**Confidence:** MEDIUM (Outdooractive FAQ, Pilot Plans review, single review sources)

---

### 2f. HiiKER

An Irish-founded hiking app with strong UK traction. Positioned explicitly against OS Maps' price rise (published a blog post in November 2023 about OS Maps' price increase as competitive positioning).

| Tier | Price | Key Features |
|------|-------|-------------|
| Free | £0 | Basic trail discovery, some mapping |
| PRO+ | ~£34.50/year or £5.60/month | OS Mapping, Harvey Maps, offline maps, 20+ UK/Europe/US map sets |

**Significance:** HiiKER competes directly with OS Maps on map quality at a lower price. Not dog-specific. Demonstrates appetite for sub-£40/year outdoor app subscriptions in the UK.

**Confidence:** MEDIUM (HiiKER website, Valley and Peak retailer listing; pricing may have updated since late 2023)

---

### 2g. New UK Dog Walking/Outdoor App Entrants (2024-2025)

**Biscuit Pet Care (UK, active 2025):** A loyalty/rewards app for dog owners. Free to start, "Biscuit Plus" subscription unlocks 5x faster Biscuit earning and exclusive perks. Revenue model: brand partnerships (Tesco, Amazon, Nando's), with Waggel pet insurance offering Biscuit Plus free to policyholders. This is a rewards play rather than a walk discovery play. Not a direct competitor but demonstrates UK dog owner appetite for subscription-adjacent pet apps.

**GoWalkies (UK):** An all-in-one dog walking, sitting, grooming, training, and boarding marketplace. Service fee model (like Rover), not a content/intelligence subscription. No walk discovery or weather intelligence.

**PlayDogs (France/Switzerland, 170k downloads):** Free, community-driven walk discovery. No subscription model. Directly confirmed as Sniffout's closest competitor in CLAUDE.md. PlayDogs' weakness -- empty content in new regions -- is Sniffout's structural advantage with curated content.

**The Walking Dog (AI concept, 2025):** An AI-powered app concept that suggests ideal walking distance and duration based on breed, age, and weather. Runs locally on device. No subscription noted. Validates the breed-intelligent walking feature category but appears to be a solo developer project, not a funded product.

**WoofTrax (US, available UK):** Free, ad-supported. Walks generate charitable donations. Brand sponsorship revenue model. Not a competitor in the intelligence/curation space.

**Key finding:** There is no UK app in 2026 that combines curated dog walk discovery + real-time dog-specific weather intelligence + a paid subscription tier. The Sniffout+ opportunity is genuinely unoccupied.

---

### Competitor Pricing Summary

| App | Free Tier | Annual Paid | Primary Paid Hook |
|-----|-----------|-------------|-------------------|
| AllTrails+ | Yes | ~£28 | Offline maps, wrong-turn alerts |
| AllTrails Peak | Yes | ~£63 | AI routes, condition forecasts |
| Komoot Premium | Yes | £59.99 | Offline maps, device sync |
| Strava | Yes | £54.99 | Route planning, advanced stats |
| OS Maps | Yes | £39.99 | Full OS mapping, offline |
| Outdooractive Pro | Yes | ~£26.99 | Offline maps, navigation |
| HiiKER PRO+ | Yes | ~£34.50 | OS + Harvey maps, offline |
| **Sniffout+ (proposed)** | **Yes** | **£29.99** | **Dog weather intelligence, offline walks, health tracking** |

---

## 3. UK Subscription Market Context

### 3a. Subscription Fatigue in 2026

UK household subscription spending jumped from £41.70/month in 2022 to £65.50/month in 2025 -- a 57% increase in three years. Total annual UK subscription spending (excluding TV/phone/broadband) now averages £696/year.

Despite this, fatigue is real: 45% of UK consumers recently cancelled a subscription due to price hikes. Citizens Advice estimates £688 million is lost annually to unused UK subscriptions, with 26% of UK adults having accidentally taken out a subscription in the last 12 months.

The critical dynamic for Sniffout: subscription fatigue disproportionately affects streaming, software tools, and services users feel they "should" cancel. Niche hobby subscriptions with clear utility (outdoor maps, fitness apps) are in the more defensible category -- users who are actively using the product retain better.

**Is £29.99/year a reasonable anchor?**
Yes. At £29.99/year, Sniffout+ equates to £2.50/month -- less than a single dog treat bag, less than one coffee per month, a third of the average dog insurance premium. This framing is central to conversion messaging. UK dog owners spend £20-50/month on dog insurance, £20-50/month on premium dog food (tails.com ranges from £20.30 to £49.40/month depending on size), and significant sums on vets, grooming, and accessories. £29.99/year is genuinely trivial relative to total pet spending.

**Confidence:** HIGH (MemberWise UK, Citizens Advice cited via readless.app, UK subscription statistics)

---

### 3b. Optimal Price Points for UK Outdoor/Hobby Apps

The credible UK outdoor app pricing band is £26-40/year for well-established products. For a pre-5,000 MAU product like Sniffout at subscription launch, the lower end of this band is safer:

- Below £25/year risks signalling low quality or unsustainability
- Above £40/year risks rejection without a proven brand and large content library
- £29.99/year sits in a credible mid-low position, with room to increase to £34.99 or £39.99 in future years as the product matures

**Annual vs monthly preference:** Annual subscriptions represent 41.43% of all app subscriptions (SOSA Report 2025), but critically, annual subscribers show 2.5x better 1-year retention (33.9% still active vs 13.8% for monthly). For a niche product, annual commitment also reduces the risk of seasonal churn (users who subscribe in summer when walking is frequent, then cancel in winter).

**Recommended pricing framing for UK dog owner audience:**
- Lead with annual: "£29.99/year -- less than £2.50/month"
- Monthly available: £3.99/month (deliberately set to make annual look like obvious value: £47.88/year monthly vs £29.99/year annual = 37% saving)
- Avoid showing monthly cost prominently; instead show annual cost with monthly equivalent in smaller text

**Confidence:** HIGH for pricing band; MEDIUM for exact optimal price (no Sniffout-specific A/B data available)

---

### 3c. Small Niche UK Apps That Converted Successfully

**BorrowMyDoggy:** UK dog-borrowing platform. Charges both owners and borrowers annual fees (approximately £14.99-19.99/year per side). Succeeded by making the subscription the access key to the community, not a feature upgrade. The subscription IS the product. Lesson: when the value proposition is clear and the alternative is nothing, conversion is easier.

**Hiiker:** Explicitly used OS Maps' price increase as a conversion argument. Published a blog post in November 2023 titled effectively "OS Maps just got more expensive -- here's why HiiKER is better value." Demonstrates price anchoring against a well-known benchmark works in the UK outdoor app market.

**Duolingo (global but instructive):** Family plan at a premium over individual. Push notifications for streaks. Personalised year-in-review. These three mechanics (social hooks, streak psychology, annual recap) are the gold standard for niche app retention and conversion.

**Key pattern across successful niche conversions:** The free tier must be genuinely useful (not crippled), the paid tier must add something the user actively wants, and the price must be framed relative to something the user already buys without thinking.

**Confidence:** MEDIUM (secondary sources, no access to conversion rate data for named UK apps)

---

### 3d. UK Dog Owner Subscription Tolerance

UK dog owners are already substantial subscribers:

| Category | Monthly Cost Range | Annual |
|----------|--------------------|--------|
| Pet insurance (lifetime, average) | £11-32/month | £132-384/year |
| tails.com personalised food (medium dog) | £36/month | £432/year |
| Vets for Pets/Healthy Pet Club vet plan | £10-20/month | £120-240/year |
| Biscuit Plus (loyalty app) | Small (undisclosed) | -- |

A UK dog owner with insurance + premium food is already spending £500-800/year on subscription-style services for their dog. £29.99/year for a walk app that actively improves their dog's wellbeing and safety is a rounding error in this context.

The strategic framing for Sniffout+ conversion messaging: do not position it as "just another subscription" -- position it as "the first thing you buy that makes every walk better."

**Confidence:** HIGH for pet insurance costs (NimbleFins, GoCompare, Petplan); HIGH for tails.com pricing (tails.com pricing page)

---

## 4. Proposed Sniffout+ Feature Set

### Scoring Methodology
- **Impact:** 1-5 (5 = directly drives subscription conversions; 1 = nice-to-have)
- **Complexity:** Low / Medium / High (for a single-file PWA with Firebase backend)
- **Competitor presence:** Y = exists in at least one competitor; N = no clear competitor equivalent

---

### Category A: Weather and Conditions Intelligence

**A1. 7-Day Detailed Weather Scoring**
What it does: Extends the current same-day hourly scoring to a 7-day forward view with per-day walk quality scores. Shows the best 2-3 walk windows across the next week.
Why people pay: Planning ahead for weekend walks is a core use case. Free tier stays at today + tomorrow. Premium unlocks the week.
Open-Meteo provides 7-day forecasts free of charge -- this is a display/logic change, not an API cost.
Impact: 5 | Complexity: Low | Competitor: Partial (AllTrails Peak has condition forecasts; no dog-specific equivalent)

**A2. Pollen Alert Layer**
What it does: Overlays daily pollen count (tree, grass, weed) on the weather view. Flags high-pollen days with a contextual note for dogs prone to seasonal allergies. Uses Open-Meteo's European AQI endpoint (already noted in CLAUDE.md Phase 3 additions as planned: `european_aqi`).
Why people pay: Brachycephalic breeds and dogs with known allergies have real pollen sensitivity. No competitor combines this with dog-specific context.
Impact: 3 | Complexity: Low (endpoint already identified) | Competitor: N (no dog-specific pollen in any competitor)

**A3. Air Quality Index (AQI) Walk Alerts**
What it does: Real-time AQI score for the user's location. Contextualises AQI for dogs specifically (dogs breathe 2-3x the volume of air per body weight vs humans when exercising). High AQI triggers a "consider a shorter walk" notice.
Impact: 3 | Complexity: Low | Competitor: N

**A4. Ground Conditions Intelligence**
What it does: Estimates current ground conditions (firm, soft, waterlogged) based on recent rainfall and temperature data. Shown as a simple pill on walk cards. "Likely muddy" vs "good underfoot."
Why people pay: Muddy walks require post-walk washing, which many urban dog owners actively want to avoid. A feature that predicts trail condition before driving to a walk has clear daily utility.
Impact: 4 | Complexity: Medium (requires rainfall accumulation modelling, not just point-in-time weather) | Competitor: N

**A5. Historical Walk Conditions**
What it does: Shows average weather scores for a given walk by month, over the last 12 months. "This walk is typically best in March-May and September-October."
Why people pay: Planning seasonal walks is underserved. Helps users decide when to attempt a harder walk or revisit a favourite.
Impact: 3 | Complexity: Medium (requires storing/aggregating historical weather data per walk location) | Competitor: Partial (AllTrails Peak has heatmap data)

**A6. Sunrise/Sunset Safety Window**
What it does: Shows civil twilight times at walk location. Flags walks where low light is a consideration (e.g. woodland walks or walks near roads). Particularly useful in winter months for UK dog owners walking before/after work.
Impact: 3 | Complexity: Low | Competitor: N

---

### Category B: Walk Planning and Navigation

**B1. Offline Walk Packs**
What it does: Premium subscribers can download walk cards for offline access. Each pack includes: walk description, distance/duration, hazard notes, weather context snapshot at time of download, photo, and a static map image. Stored in browser cache via service worker. Not interactive vector maps (too complex for PWA); rather, a structured HTML/JSON offline bundle per walk.
Why people pay: UK rural walks frequently have no signal. Being able to access walk details without data is a practical necessity that every user understands immediately.
Impact: 5 | Complexity: Medium (service worker extension; no vector map library required) | Competitor: Y (AllTrails, OS Maps, HiiKER all offer offline as primary paid feature)

**B2. Walk Difficulty Personalisation**
What it does: Re-scores walk difficulty based on the user's logged dog profile (breed, age, size). A walk rated "Moderate" in the base data may be re-rated "Easy" for a Border Collie or "Hard" for a French Bulldog. Shown as a secondary badge alongside the standard difficulty rating.
Why people pay: Walk difficulty is currently generic. A personalised difficulty score that accounts for a specific dog feels meaningfully more useful.
Impact: 4 | Complexity: Medium (requires breed-group difficulty modifier table) | Competitor: N

**B3. Estimated Duration by Breed**
What it does: Walk duration shown personalised: "About 45 min with a Labrador" vs "About 1h 15min with a Basset Hound." Based on breed average pace data.
Impact: 3 | Complexity: Low (extension of existing duration field; breed pace table needed) | Competitor: N

**B4. Multi-Walk Trip Planning**
What it does: String multiple walks into a day trip or weekend itinerary. Save a collection of walks as a "Trip" with total distance, estimated time, and nearby places between walks.
Impact: 2 | Complexity: High (new data model, UI, and planning logic) | Competitor: Partial (Komoot multi-day tours)

**B5. Walk Variations**
What it does: Where a walk has an obvious extension or shortcut, surfaced as a "shorter option" or "longer option" within the walk detail. Initially editorial (manually added by Jayesh); later community-contributed.
Impact: 3 | Complexity: Low (editorial; no algorithmic route generation) | Competitor: Partial (AllTrails Peak AI routes are the high-complexity version)

---

### Category C: Health and Fitness Tracking

**C1. Breed Exercise Goals and Daily Activity Tracker**
What it does: Sets a personalised daily/weekly exercise target based on breed group, age, and size. E.g. "Chester needs 90 minutes today" for an adult Labrador. Walk log entries count toward the goal. Progress shown as a simple daily ring/bar in the Me tab.
Why people pay: This is the feature that moves Sniffout from "walk directory" to "health companion." No UK competitor currently does this with the walk-intelligence integration that Sniffout can provide.
Impact: 5 | Complexity: Medium (exercise target table by breed group; UI component; goal-tracking logic against walk log) | Competitor: N

**C2. Vet-Recommended Activity Guidelines by Life Stage**
What it does: Contextualises exercise for puppies (5-minute rule per month of age), adults, and seniors. Shows a persistent note when a dog enters senior age range based on profile birth date. For puppies, flags walks that may be too long.
Impact: 4 | Complexity: Low (logic based on existing dog profile data; editorial content on guidelines) | Competitor: N

**C3. Post-Surgery/Recovery Walk Mode**
What it does: User flags "Chester is on restricted exercise (vet's orders)." App suppresses long-walk suggestions, adjusts daily targets to the restricted level, and surfaces short/flat walks with low-livestock and low-terrain-difficulty filters pre-applied.
Why people pay: Post-surgery exercise restriction is an emotionally loaded time for dog owners. A feature that actively helps them comply with vet advice and not accidentally overdo it has high perceived value.
Impact: 4 | Complexity: Low-Medium (filter mode on walk recommendations; flag in dog profile) | Competitor: N

**C4. Weight Management Walk Planner**
What it does: User enters current and target dog weight. App calculates weekly walk targets to support healthy weight loss/maintenance (based on breed basal metabolic rate). Not a diet tool -- focuses only on the exercise side.
Impact: 3 | Complexity: Medium (requires weight-change calorie modelling; medical caveat copy required) | Competitor: N

**C5. Multi-Dog Dashboard**
What it does: When a household has multiple dogs, the Me tab shows each dog's exercise progress separately and together. Walk log entries can be tagged to multiple dogs simultaneously.
Impact: 3 | Complexity: Medium (existing multi-dog data model exists in sniffout_dogs; requires UI update) | Competitor: N

---

### Category D: Community and Social Features

Note: CLAUDE.md flags community features as Phase 2/3 and deferred. These features are included for completeness and long-term roadmap planning. None should be implemented pre-Phase 2.

**D1. Walk Condition Reports**
What it does: Premium subscribers can post a short condition report on any walk after completing it. "Very muddy at the start, fine after the first mile." Shown to all users as "Recent condition report."
Why people pay: The ability to contribute is both a premium signal and a utility for the community. Free users see reports; only premium users post them.
Impact: 4 | Complexity: High (community content requires moderation, reporting, abuse prevention) | Competitor: Y (AllTrails community notes)

**D2. Breed-Specific Walk Reviews**
What it does: Reviews are tagged by dog breed/group. Users can filter community reviews to see how a walk performed for similar dogs.
Impact: 3 | Complexity: High | Competitor: N

**D3. Walk Buddy Matching**
What it does: Opt-in feature to find other dog owners walking the same route at a similar time. Safety and social angle.
Impact: 2 | Complexity: High | Competitor: N (PlayDogs has groups/events but not structured matching)

---

### Category E: Personalisation and Intelligence

**E1. AI Walk Recommendation Engine**
What it does: Weekly push notification (or Me tab surface) with a personalised walk recommendation: "The best walk for Poppy this weekend, based on Saturday's weather: Box Hill West." Combines: walk suitability score (terrain/distance for breed/age), weather forecast score for Saturday, and user's walk history (avoids recently walked routes).
Why people pay: This is the highest-effort personalisation feature and requires all lower-level data to be in place (dog profile, walk log, weather scoring). When it works well, it feels like having a personal dog walking guide.
Impact: 5 | Complexity: Medium-High (recommendation logic; push notifications are Phase 4 in CLAUDE.md) | Competitor: Partial (AllTrails Peak has AI routes; no dog-specific equivalent)

**E2. Personalised Hazard Alerts**
What it does: Based on user's dog breed, age, and location history, surface proactive hazard notes. "It's peak adder season and you regularly walk heathland routes -- here's what to watch for."
Impact: 4 | Complexity: Low-Medium (extension of existing hazard and breed sensitivity systems) | Competitor: N

**E3. Best Time to Walk Prediction**
What it does: For the user's most-used walk location, surface a "best walk window" for tomorrow based on the scoring model. Could be a widget in the Today tab.
Impact: 4 | Complexity: Low (extension of existing weather scoring; location-based) | Competitor: N (unique to Sniffout's weather-first positioning)

**E4. Seasonal Walk Suggestions**
What it does: Surfaced contextually: "Autumn is coming -- here are 5 walks with excellent leaf cover and minimal mud." Editorial initially, algorithm-assisted later.
Impact: 2 | Complexity: Low (editorial tags on walks; seasonal display logic) | Competitor: N

---

### Category F: Perks and Partnerships

**F1. Sniffout+ Member Badge**
What it does: A visual badge on the user's profile (visible if/when community features launch). Signals early supporter status.
Why people pay: Status within a community has genuine value for early adopters. This is low-cost to implement and high-value psychologically for the "founder supporter" cohort.
Impact: 2 | Complexity: Low | Competitor: Y (common across subscription apps)

**F2. Early Access to New Walks and Features**
What it does: New walks previewed to Sniffout+ members 2 weeks before public launch. New feature betas offered to subscribers first.
Impact: 3 | Complexity: Low (feature flag; subscriber check) | Competitor: Y (common)

**F3. Partner Discounts**
What it does: Negotiated discounts with aligned brands: pet insurance, dog food subscriptions, veterinary services, outdoor gear. Displayed in a dedicated Perks tab section.
Why people pay: A single redeemed discount (e.g. £20 off pet insurance) pays for the annual subscription. High perceived value at low operational cost.
Impact: 4 | Complexity: Low (affiliate links with subscriber-only access; extends existing AWIN affiliate strategy) | Competitor: Y (Strava has subscriber perks)

**F4. Ad-Free Experience**
What it does: If Sniffout ever introduces contextual affiliate content more prominently, subscribers get a cleaner interface. Given current hard rules (no display advertising ever), this is a future-proofing note.
Impact: 2 | Complexity: Low | Competitor: Y

---

### Category G: Content and Guides

**G1. Premium Downloadable Walk Packs by Region**
What it does: Curated PDF/offline packs: "The Sniffout Surrey Pack -- 15 walks, hazard notes, seasonal tips, dog-friendly pubs." Downloadable, designed for printing or offline reference.
Why people pay: A tangible, beautiful deliverable that subscribers receive. Doubles as a brand/quality signal. Can be sold individually as one-off purchases to non-subscribers.
Impact: 3 | Complexity: Low (editorial work; PDF design; no engineering) | Competitor: Partial (AllTrails has route collections; no dog-specific PDF packs)

**G2. Vet-Contributed Expert Articles**
What it does: Premium article series: "Walking with a senior dog -- a vet's guide." Content goes beyond the free safety guides on the website. Exclusive to subscribers.
Impact: 2 | Complexity: Low (editorial; content cost) | Competitor: N

**G3. Trail Tips by Founder (Subscriber Edition)**
What it does: Monthly founder note with walk recommendations, new features, behind-the-scenes content. Community newsletter feel.
Impact: 2 | Complexity: Low | Competitor: N

---

### Priority Matrix: Top 10 Features for Sniffout+ V1 Launch

Ranked by combined Impact x Feasibility score:

| Priority | Feature | Impact | Complexity | Why First |
|----------|---------|--------|------------|-----------|
| 1 | B1: Offline Walk Packs | 5 | Medium | Strongest universal paid hook; matches competitor standard |
| 2 | A1: 7-Day Weather Scoring | 5 | Low | Directly extends differentiator; Open-Meteo already available |
| 3 | C1: Breed Exercise Goals | 5 | Medium | Unique to market; uses existing data; health companion positioning |
| 4 | E1: AI Walk Recommendation | 5 | Medium-High | Highest-perceived-value feature; requires C1 to exist first |
| 5 | E3: Best Time to Walk | 4 | Low | Quick win; extends existing scoring; Today tab enhancement |
| 6 | B2: Walk Difficulty Personalisation | 4 | Medium | Unique value; uses breed sensitivity system already built |
| 7 | A4: Ground Conditions Intelligence | 4 | Medium | Practical daily utility; no competitor equivalent |
| 8 | F3: Partner Discounts (Perks tab) | 4 | Low | High perceived value; extends AWIN strategy; low engineering |
| 9 | C2: Vet-Recommended Activity Guidelines | 4 | Low | Builds on C1; adds credibility; editorial not engineering |
| 10 | F2: Early Access | 3 | Low | Easy to ship; valuable for early adopter cohort |

---

## 5. Walk Wrapped Analysis

### 5a. How Wrapped Products Perform

Spotify Wrapped is the defining benchmark for "data as engagement":

- 2020: 21% spike in mobile app downloads in release week; 60 million shares
- 2021: 120 million users accessed Wrapped; 60 million shared results -- 4x engagement increase vs 2017
- 2024: 2.1 million social media mentions in 48 hours; 400 million TikTok views in 3 days
- 2025: 200 million engaged users within the first 24 hours of launch

The mechanism: Wrapped turns passive usage data into a social identity statement. "I walked 147 miles with Chester in 2025" is shareable in a way that "Chester's daily step count" is not.

Strava's Year in Sport equivalent, when it was free, generated significant social sharing. Strava's decision to paywall it was near-universally criticised by users and cycling media -- this is the primary data point for Sniffout's approach.

**Key lesson:** Wrapped must be free for all users with logged walks. The viral mechanism requires all users to participate. Paywalling it (as Strava did) eliminates the acquisition effect and creates resentment among non-paying users.

---

### 5b. What Data Makes a Wrapped Feel Personal and Worth Sharing

From Spotify Wrapped analysis and user behaviour research, the data points that drive sharing are:

1. **Superlatives** -- "Your longest walk ever." "Your most visited location." These trigger pride and identity formation.
2. **Identity badges** -- "Top 10% of Sniffout users by distance walked." These create social status.
3. **Unexpected specificity** -- "You walked in 7 different counties." "You walked on 23 consecutive Saturdays." The data point has to be surprising to be shareable.
4. **Dog-first framing** -- Not "you walked 120 miles" but "Chester walked 120 miles with you." The dog is the hero of the story.
5. **Visual cards** -- Bright, bold, branded shareable images. The share asset must look good on Instagram Stories and WhatsApp.

**What UK dog owners would share from Walk Wrapped:**
- "Chester's biggest year yet -- 89 miles across 47 walks"
- "Our favourite walk: Box Hill, 12 times in 2025"
- "Best walking month: October (8 walks)"
- "Chester's most visited county: Surrey"
- "Walked in rain, sun, and snow -- Chester doesn't care" (weather variety card)
- "Hazards dodged this year: 3 high-pollen days avoided, 2 heatwave alerts headed off"

---

### 5c. Walk Wrapped as a Standalone Acquisition Channel

Yes -- with qualifications.

The acquisition mechanism works as follows: User shares their Wrapped card. Friends/followers see it. Some ask "what app is that?" or click through the branded card. This generates organic installs with zero acquisition cost.

For Walk Wrapped to work as acquisition:
1. The shareable card must include the Sniffout brand prominently but not obtrusively
2. There must be a QR code or URL on the card that deep-links to the app
3. The card must be beautiful enough to share voluntarily -- not a screenshot of a stats screen
4. The release timing must be deliberate: early December or early January

For a product at 5,000 MAU, even modest Wrapped sharing (10% of users share, each share reaches 200 people, 2% install rate) = 10,000 new installs from a single annual campaign. At 10,000 MAU, this would be significant.

**Walk Wrapped is the most cost-effective acquisition campaign Sniffout can run.**

---

### 5d. Free vs Premium Walk Wrapped Split

Recommendation: Walk Wrapped is free for all users who have logged at least 3 walks. This is the threshold because under 3 walks, the data is too sparse to feel personal.

| Feature | Free | Sniffout+ |
|---------|------|-----------|
| Annual walk count and total distance | Yes | Yes |
| Favourite walk (most visited) | Yes | Yes |
| Shareable visual card (1 design) | Yes | Yes |
| Monthly breakdown bar chart | No | Yes |
| "Chester's year" dog-first full story | No | Yes |
| Multi-year comparison ("Better than 2024?") | No | Yes (year 2+) |
| Premium shareable card designs (3 variants) | No | Yes |
| Badges and superlatives ("Top 10%") | No | Yes |
| Hazards avoided / weather score history | No | Yes |
| Download full PDF report | No | Yes |

The free Wrapped card must be beautiful and genuinely shareable. The premium version adds depth and multiple card designs -- but the free version is not a diminished experience.

---

### 5e. Brand Sponsorship of Walk Wrapped

Several brands have sponsored or participated in Wrapped-style campaigns:

- Spotify x FC Barcelona: spotlighted player listening habits
- Tesco: created personalised Year in Shopping summaries
- Xbox: personalised Year in Gaming
- Gymshark: parodied Wrapped with "You smiled at your gym crush 2,498 times and still never spoke to them"
- Duolingo: personalised language learning year-in-review

**For Sniffout's Walk Wrapped:**
A single relevant UK pet brand sponsoring the Wrapped experience could be a meaningful early revenue stream. For example:
- Benyfit Natural or Butternut Box sponsors the Walk Wrapped "Most Active Dog" award
- A pet insurance brand (Everypaw, ManyPets) sponsors the "Hazards Avoided" card
- Hills/Royal Canin sponsors the health/exercise achievement cards

A sponsor relationship provides: (1) upfront fee or CPM, (2) association with Sniffout's trusted brand, (3) reach to engaged UK dog owner audience. For Sniffout, it provides: (1) revenue during Phase 2, (2) brand credibility from association with established pet brands.

Estimated value: A single sponsor for one Walk Wrapped season at 5,000-10,000 MAU could realistically generate £500-2,000 in sponsorship fee from a small/medium pet brand. Not transformative, but meaningful at early scale.

---

## 6. Pricing Recommendations

### 6a. Recommended Pricing Structure

**Sniffout+ Individual Plan**

| Option | Price | Notes |
|--------|-------|-------|
| Annual | £29.99/year | Lead with this. Equivalent to £2.50/month. |
| Monthly | £3.99/month | Escape hatch; position as "try before committing." |
| Lifetime | £69 (time-limited launch offer) | Early adopter positioning. See 6d. |

**Pricing rationale:**
- £29.99/year: below OS Maps (£39.99), below Komoot (£59.99), below Strava (£54.99), clearly cheaper than any comparable UK outdoor app. Above the free tier without apology.
- £3.99/month: positions annual as 37% saving. Monthly-to-annual conversion is a significant lever for LTV improvement.
- Do not follow AllTrails' multi-tier model at launch. A single Sniffout+ tier is simpler, clearer, and avoids confusing messaging for a pre-traction product.

---

### 6b. Multi-Dog "Pack Plan"

A "Pack Plan" for households with multiple dogs:

**Sniffout+ Pack Plan: £44.99/year** (for up to 3 dogs in one household)

Framing: "One subscription, all your dogs."
Rationale: £44.99 is 50% more than the individual plan. The incremental revenue per paying household is meaningful, and multi-dog households have higher engagement (more walks, more diverse breed needs) making them higher-value users.

**Recommendation:** Do not launch Pack Plan at V1. Validate individual plan conversion first. Target Pack Plan launch at 1,000+ paying subscribers.

---

### 6c. Free vs Paid Feature Split

The hard rules from CLAUDE.md are non-negotiable: core walk discovery, core weather scoring, account creation are always free. The split below reflects these rules.

**Always Free (non-negotiable):**
- Walk library (full access, all 93+ walks)
- Today tab weather scoring (current day)
- Nearby dog-friendly places
- Walk journal (log walks, notes, ratings)
- Dog profile (breed, size, age)
- Saved walks (up to a reasonable limit, e.g. 20 walks)
- Account creation and cross-device sync
- Walk Wrapped (basic annual card, 3+ walks threshold)
- Basic breed-specific weather notes
- Hazard alerts (current day)

**Sniffout+ Exclusive:**
- 7-day detailed weather scoring
- Offline walk packs (downloadable walk cards)
- Ground conditions intelligence
- Breed exercise goals and daily activity tracker
- Walk difficulty personalised by dog profile
- Estimated duration by breed
- Post-surgery/recovery walk mode
- Best Time to Walk prediction
- Pollen and AQI alerts with dog context
- Extended Walk Wrapped (monthly breakdown, multi-year, premium cards, PDF)
- Partner perks and discounts
- Early access to new walks and features
- Sunrise/sunset safety window detail
- Historical walk conditions

---

### 6d. Lifetime Purchase Option

**Recommended price: £69 (launch offer, time-limited)**

Standard guidance: price lifetime access at 2.5-4x annual rate. At £29.99/year, formula suggests £75-120. £69 is deliberately below formula to:
1. Generate early cash during pre-revenue phase
2. Create a cohort of committed early adopters who become advocates
3. Signal founder-era accessibility ("we're not here to extract money")

**Risk mitigation:**
- Cap at 200-500 lifetime purchases to prevent long-term infrastructure liability
- Or time-limit: "Founder pricing available until [date] or first 200 purchases"
- Make clear lifetime = current app features + future updates for as long as the app operates

**Expected revenue from 200 lifetime sales at £69 = £13,800** -- meaningful early revenue with zero ongoing churn.

After the launch window, lifetime could be offered at £99-119 in line with the standard formula.

**Confidence:** MEDIUM (based on general lifetime pricing guidance; no Sniffout-specific data)

---

### 6e. Minimum Viable Subscriber Count

**Cost assumptions at 5,000 MAU:**
- Google Places API: ~£100/month = £1,200/year
- Firebase (Firestore, Storage): effectively £0 at 5,000 MAU on Spark plan
- Cloudflare (Workers, Pages): £0 on free plan at current scale
- Domain and email: ~£20/year
- Total infrastructure: ~£1,220/year

**Break-even calculation:**

| Conversion Rate | Subscribers (at 5,000 MAU) | Annual Revenue (£29.99) | Surplus/Deficit |
|-----------------|---------------------------|-------------------------|-----------------|
| 0.5% | 25 | £750 | -£470 (deficit) |
| 1% | 50 | £1,500 | +£280 (break-even) |
| 2% | 100 | £3,000 | +£1,780 |
| 3% | 150 | £4,498 | +£3,278 |
| 5% | 250 | £7,498 | +£6,278 |

**Conclusion:** At 5,000 MAU, a 1% conversion rate covers infrastructure costs. This is well below the AllTrails benchmark (~1.25% implied conversion) and the median freemium conversion rate (2.6-5.8% for well-executed freemium apps). The financial risk of launching Sniffout+ is genuinely low.

At Google Places API's scaling cost (~£200-600/month at 50,000 MAU), you need approximately 80-250 paying subscribers to cover costs -- achievable well before reaching 50,000 MAU if conversion fundamentals are solid.

**The subscription does not need to be transformative revenue at launch.** It needs to cover costs, signal product confidence, and build the paying user base that enables Phase 3 (sponsored venue listings) to be negotiated from a position of demonstrated monetisation.

---

## 7. Recommended Free vs Paid Feature Split (Summary)

### The Principle

The free tier must be genuinely excellent -- not a teaser for the paid tier. Users who pay should feel like they are getting more, not like they are getting back what was taken away. The Komoot lesson above is the clearest possible case study in what happens when this principle is violated.

### Free Tier: "Sniffout is free, and it's genuinely good"

The free product remains the full walk discovery, weather scoring, journal, nearby places, and dog profile product. This is the product that drives word-of-mouth, organic growth, and the 5,000+ MAU trigger for subscription launch.

Free tier is complete. It is not artificially limited. It competes directly with AllTrails' free tier on dog-specific features and wins.

### Sniffout+ Tier: "More of what you love, designed around your specific dog"

The paid tier builds exclusively on new features -- extended intelligence, offline utility, health tracking, personalisation. Nothing is removed from the free experience. Everything in Sniffout+ is additive.

This framing is the most important commercial decision in the Sniffout+ launch. If a single user ever says "I used to be able to do X for free and now I have to pay," the Komoot dynamic begins. The product brief for every Sniffout+ feature must start with: "Does this exist in the free product today? If yes, it cannot be gated."

### Feature Split at a Glance

```
FREE                              SNIFFOUT+ (additive)
─────────────────────────────     ──────────────────────────────────
Walk library (all walks)          Offline walk packs
Today weather scoring             7-day extended weather scoring
Nearby dog-friendly places        Ground conditions intelligence
Walk journal                      Pollen + AQI dog alerts
Dog profile                       Breed exercise goals + tracker
Saved walks (up to 20)           Walk difficulty personalisation
Account + cross-device sync       Post-surgery recovery mode
Basic hazard alerts               Best Time to Walk prediction
Walk Wrapped (basic card)         Walk Wrapped premium (full suite)
Breed weather notes               AI walk recommendation
                                  Historical conditions
                                  Partner perks and discounts
                                  Early access
                                  Sunrise/sunset safety window
```

---

## Appendix: Key Sources Used

- AllTrails pricing restructure: TechCrunch, May 2025
- AllTrails subscriber/churn data: Recurly case study, RevenueCat AllTrails analysis
- Komoot paywall backlash: DC Rainmaker March 2025, BikeRadar, Cycling Weekly, The 5K Runner
- Strava UK pricing and Year in Sport paywall: road.cc, BikeRadar, Strava pricing page
- OS Maps pricing: Ordnance Survey shop, partner organisation pages
- Outdooractive/ViewRanger: Outdooractive FAQ, Pilot Plans review
- HiiKER pricing: Valley and Peak retailer, HiiKER blog
- UK subscription fatigue statistics: MemberWise UK, readless.app, Citizens Advice (via Readless), Deloitte Digital Media Trends
- UK pet insurance costs: NimbleFins, GoCompare, Petplan, Statista
- tails.com subscription pricing: tails.com pricing page (verified April 2025)
- Freemium conversion benchmarks: RevenueCat State of Subscription Apps 2025, First Page Sage 2026
- Annual vs monthly retention split: SOSA Report 2025 via RevenueCat
- Spotify Wrapped engagement: Meltwater, NoGood, idomoo, SproutSocial
- Strava Year in Sport: Strava community hub, road.cc, SQ Magazine
- Lifetime pricing guidance: RevenueCat blog, Reasonable Product, Blog Marketing Academy
- Biscuit Pet Care UK: Google Play listing, Mumsnet, Trustpilot
- PlayDogs: Google Play listing, CLAUDE.md project context
- Dog exercise requirements by breed: Wisdom Panel, SpotOn, Company of Animals, Small Door Vet
- Brand Wrapped/Year in Review sponsorships: Modern Retail, Alt Marketing School, Radarr
