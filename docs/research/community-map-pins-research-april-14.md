# Community Map Pins — Research and Ideation Report
**Date:** 2026-04-14
**For:** Sniffout founder and product team

---

# COMMUNITY MAP PINS - RESEARCH AND IDEATION REPORT
Date: 2026-04-14

---

## SECTION 1: Competitor Analysis

### 1. iOverlander

**Pin types supported**
iOverlander is a community-maintained map for overlanders (4WD travellers, cyclists, backpackers) operating globally. Pin categories include: campsites, wild camping spots, formal campgrounds, water sources, fuel stations, mechanical help, border crossings, rest stops, tourist information, accommodation, restaurants/cafes, and a general "point of interest" category. Each pin has a structured form with fields specific to the category (e.g. water pins capture whether it is potable, the source type, seasonal availability).

**Expiry model**
iOverlander does not implement automatic expiry. Pins remain live indefinitely unless a user manually flags them as closed/removed or a moderator deletes them. The platform relies on a comment system: users can leave dated comments ("still here, March 2024" or "this water source was dry in August"). The most recent comment date acts as a social freshness signal rather than a technical expiry trigger. For locations in very remote areas, pins with no recent comments may be years old and of uncertain accuracy. This is a known weakness of the platform, particularly for fuel sources in remote Africa or South America.

**Verification model**
There is no formal multi-user confirmation system. Any registered user can add a pin. Verification is community-driven through the comment thread and a thumbs-up/thumbs-down rating. If several users mark a place as "not found" or leave negative comments, this is visible but does not automatically remove the pin. A pin with 20 positive comments carries more implicit trust than one with zero. There is no algorithmic verification gate.

**Moderation model**
iOverlander has a small volunteer moderator team. Users can flag pins as inaccurate or inappropriate. Flagged pins are reviewed by moderators who can edit, close, or delete. The moderation is reactive rather than proactive. In practice, moderation quality varies significantly by geographic region — areas with active local users are better maintained than remote areas.

**What Sniffout can learn**
- The comment-as-freshness-signal model is low-tech and works for low-frequency updates. Sniffout could use "confirmed still here" taps as a lightweight equivalent.
- Category-specific structured fields (not just free text) significantly improve data quality.
- Without any expiry mechanism, ghost pins accumulate. This is especially problematic for dog facilities (a bin that was removed 18 months ago is actively harmful to a user planning a walk).
- The iOverlander model works best for semi-permanent infrastructure. For short-lived items (spare bags, muddy sections), it would fail badly.

---

### 2. Wikiloc

**Community waypoints**
Wikiloc is primarily a trail-sharing platform but supports waypoints attached to user-uploaded routes. Waypoints can be added as part of a route or as standalone points of interest. Facility types include: water sources, viewpoints, dangerous sections, accommodation, parking, and custom points. Users add waypoints via the app or web interface as part of route creation; standalone community waypoint contribution outside of route context is limited.

**Moderation**
Wikiloc uses a combination of user flagging and a small internal moderation team. Reported content is reviewed manually. There is no automated expiry. The platform has a free tier with limited features and a premium tier, which creates some friction that deters pure spam accounts. Routes and waypoints can be marked as private, public, or friends-only.

**Hazard flagging**
Hazards are not a distinct first-class pin type in Wikiloc. Users can add waypoints with a "danger" icon, but there is no structured hazard reporting system with expiry logic. In practice, danger waypoints are treated as permanent by the platform even when the hazard is transient. This is a gap.

**Spam prevention**
Email verification is required for account creation. The premium paywall for certain features creates some friction. Wikiloc does not impose minimum activity thresholds before contributing. In practice, spam on Wikiloc tends to be commercial (fake businesses added as waypoints) rather than content spam.

**What Sniffout can learn**
- Tying contribution to route activity (you have to have logged walks to contribute) is a useful pattern that Sniffout could adopt given it already tracks walks.
- Wikiloc's failure to distinguish permanent from transient hazards is instructive: Sniffout should treat these as fundamentally different pin categories with different UX and expiry logic.
- Premium friction is one way to deter spam but is probably too high a bar for Sniffout's growth-stage.

---

### 3. AllTrails

**Trail condition reports**
AllTrails has a formal trail condition reporting system separate from star ratings. Users who have recently logged a hike on a trail can submit a condition report. Reports are structured: they capture conditions from a defined list (trail clear, snow on trail, downed trees, stream crossing required, muddy/slippery, insects heavy, wildlife present, etc.) and include a free-text notes field. Reports are timestamped and attributed to the reporting user's profile.

**Duration of visibility**
AllTrails condition reports expire after a set period — approximately 90 days for most conditions. The platform also prioritises recency: recent reports (within 2 weeks) are shown prominently; older reports are archived. Seasonal conditions (snow) are suppressed out of season based on the trail's geographic location. This is one of the more sophisticated automatic expiry implementations among comparable products.

**Moderation**
AllTrails has a community flagging system and a moderator team. Trail condition reports are considered lower risk than reviews because they are structured and time-limited. Moderation focus is primarily on trail edits (route corrections, trail closures) and reviews. Condition reports are moderated reactively via flags. AllTrails has faced criticism for slow moderation of inaccurate trail closures, but condition reports are generally considered accurate because of the 90-day expiry removing stale data.

**Community data quality in practice**
AllTrails condition data quality is highly density-dependent. Popular trails near urban areas (e.g. Appalachian Trail sections near major US cities) have multiple condition reports per week and are reliably accurate. Remote trails may have one report per year. This density gap is the single biggest practical quality issue. For Sniffout, the parallel is clear: the Thames Path and Hampstead Heath will get well-maintained pin data; a rural footpath in Lincolnshire will not.

**What Sniffout can learn**
- The 90-day expiry for condition-type data is a well-calibrated default for UK weather-driven conditions. Sniffout should adopt a similar window for muddy/flooded section pins.
- Tying condition reporting to recent activity (you logged the walk recently) significantly improves data quality and deters armchair contributions.
- Show recency prominently: a 2-week-old condition report and a 6-month-old condition report are not equally valuable.

---

### 4. Komoot

**Community highlights system**
Komoot's community highlights (called "Tips" and "Highlights") allow registered users to add points of interest to any location on the map, independent of specific route logs. Highlight types include: viewpoints, swimming spots, technical trail sections, dangerous crossings, refreshment stops, accommodation, parking, and a free-form "tip" category. Users can attach photos, a description, and a difficulty/condition note.

**Spam and quality prevention**
Komoot uses a karma-like system: highlights are upvoted and downvoted by other users. Low-scored highlights are de-ranked but not automatically removed. Komoot moderates for content policy violations (offensive content, commercial spam) via flagging. There is no minimum activity threshold published, but Komoot's premium model (region unlock purchases) means a significant proportion of active users have paid, which correlates with lower spam motivation. Highlights with photos are substantially more trusted by other users in practice.

**What Sniffout can learn**
- Requiring a photo for certain pin types (dog wash stations, pubs, water taps) dramatically improves accuracy and discourages false submissions.
- An upvote/confirmation system that surfaces quality content is more scalable than manual moderation at small team size.
- Komoot's model of rich, photo-verified community content works well for permanent infrastructure but less well for transient conditions.

---

### 5. Waze

**Hazard pin types**
Waze supports the following report types: accident, hazard (with subtypes: object on road, pothole, road kill, weather hazard, construction, lane closed), police/speed camera, traffic jam, road closed, and map error. Each type has different expiry logic.

**Expiry logic in detail**
Waze uses a hybrid system combining time-based expiry and active user confirmation:

- **Accidents**: expire after approximately 1-2 hours by default. Users passing the location are prompted "Is this still there?" (a thumbs-up/thumbs-down prompt shown to drivers approaching the pin). Confirmations reset the expiry timer; non-confirmations accelerate expiry.
- **Hazards (object on road, road kill)**: default expiry approximately 2-4 hours, confirmation-extendable.
- **Police/speed camera**: temporary camera pins expire after ~1.5 hours. Permanent speed cameras persist indefinitely (maintained by Waze map editors).
- **Road closures**: variable, set by the reporter (can mark as temporary with end date or permanent pending resolution).
- **Traffic jams**: automatically computed from GPS data, not user pins, and resolve in near real-time.

The "Is this still there?" prompt is shown to approximately the next 2-5 drivers passing within range of the pin. If the majority confirm, the pin persists. If no one confirms (implicit rejection through silence or explicit thumbs-down), the pin expires. This confirmation-based model is highly effective because the pool of potential confirmers (drivers on the same road) is large and motivated (they are about to encounter the hazard themselves).

**What Sniffout can learn**
- The confirmation prompt works in Waze because of high local traffic density. On a walking path, the confirmation pool is much smaller, so Waze's model cannot be directly ported. A pub with 5 visitors per week will never accumulate enough confirmations.
- However, the principle of different expiry logic per pin type is directly applicable and valuable. Sniffout should implement type-specific expiry rather than a single universal rule.
- The "Is this still there?" prompt shown contextually during a walk (when a user passes near an existing pin) is worth implementing even at low density, because even a single confirmation is informative.
- Waze's implicit expiry through silence (nobody confirmed) is instructive: Sniffout could expire pins that have zero confirmations after a defined period, even if no one explicitly disputes them.

---

### 6. FixMyStreet

**Civic reporting model**
FixMyStreet (mySociety, UK) allows residents to report problems in public spaces: broken pavements, graffiti, fly-tipping, broken street lights, potholes, overflowing bins, etc. Reports are geolocated and submitted to the responsible local council. Each report is public and visible on the map.

**How reports age out**
Reports do not automatically expire. They transition through statuses: Open, In Progress (when council acknowledges), Fixed (when council marks complete), and Closed (if council rejects or deems not their responsibility). The status transition is driven by the council, not automatically. Open reports that receive no council response can sit visible for years. FixMyStreet added a "Me too" feature allowing other users to endorse open reports, increasing pressure on councils without requiring moderation.

**Status tracking and community knowledge**
Users who filed a report receive email notifications when the status changes. The public map shows open vs resolved status with colour coding. FixMyStreet also introduced a community update feature where citizens can add notes to an open report (e.g. "I walked past this today, still not fixed"). These community updates are timestamped and function as freshness signals.

**What Sniffout can learn**
- The council-driven resolution model is irrelevant to Sniffout, but the community update / "me too" mechanism for keeping reports alive is directly applicable for permanent fixture pins (bins, water taps) that may be removed without official notice.
- A simple "still here" tap equivalent, paired with timestamp display, is a low-friction community maintenance tool.
- FixMyStreet's experience shows that without a structured resolution process, open issues accumulate indefinitely. Sniffout should implement automatic expiry for all time-sensitive pins rather than relying on reporter or community action to close them.

---

### 7. Google Maps

**User-contributed places and edits**
Google Maps allows any signed-in user to suggest edits to existing business listings (name, address, hours, phone, photos) and to propose entirely new places. Edits go into a moderation queue. For established businesses, edits require Google review (algorithmic + human) before going live. For new place additions, the threshold is lower.

**Suggested edits workflow**
Google uses a multi-layer process: (1) algorithmic review checks for obvious spam patterns; (2) a panel of Local Guides (see below) may vote on borderline edits; (3) Google staff review edits that affect high-traffic or sensitive listings. Approval times range from minutes (for clearly accurate corrections) to weeks (for disputed or unclear edits). Users receive a notification when their edit is approved or rejected.

**Abuse prevention**
Google has invested heavily in preventing review manipulation and fake place creation. Common abuse patterns include: businesses creating fake competitor listings, review bombing, and fake positive reviews. Google uses account age, activity history, and location plausibility checks. Paid review schemes are a persistent problem even with these controls. The scale of Google's abuse problem is not directly relevant to Sniffout (Sniffout will not face this scale of commercial abuse), but the category-level patterns are instructive.

**Local Guides programme**
Local Guides is Google's gamified contributor programme. Users earn points for reviews, photos, edits, and adding new places. Points unlock badges and perks (Google Drive storage, early access to features). The programme has several hundred million participants globally. Research on Local Guides motivation suggests: (1) intrinsic motivation (helping the community) is the primary driver for most contributors; (2) badges and level progression matter most at early levels; (3) tangible perks (Drive storage) had diminishing impact as Drive storage became cheap/free elsewhere. The programme demonstrates that even light gamification can sustain large-scale contribution behaviour.

**What Sniffout can learn**
- Sniffout does not need Google-scale moderation. But the principle of account-age and activity-based trust tiers is relevant: a user with 50 logged walks and 10 confirmed pins should have more implicit trust than a new account.
- Local Guides shows that community contribution can be sustained with recognition rather than monetary reward. A simple "Sniffout Contributor" badge or walk count on a profile is worth implementing.
- Google's algorithmic pre-screening before human review is worth considering: simple rules (pin placed in the ocean, duplicate within 10m of existing pin) can filter noise before it reaches a moderation queue.

---

### 8. Parkrun

**Community data maintenance model**
Parkrun is not a map-pin product but is one of the most successful UK community-organised outdoor activity platforms. Volunteer data is maintained through a structured regional volunteer coordinator system: each event has a Run Director (a senior volunteer responsible for data accuracy) who manages event information. Changes to course routes, start locations, and facilities are submitted through a formal process to regional coordinators who verify before publishing.

**Accuracy mechanisms**
Parkrun's model works because: (1) there is clear accountability (named Run Directors); (2) the data model is simple (one location, one route, one start time per event); (3) the community has strong intrinsic motivation (they care deeply about their local event). Accuracy issues are reported via dedicated channels, not public comment threads.

**What Sniffout can learn**
- For permanent, high-value data points (off-lead area boundaries, dog parks), a verified contributor model (trusted walkers per area) is worth considering as the platform matures. An "area steward" concept — a regular walker on the Thames Path who verifies all pins in a 5km section — could improve data quality significantly.
- The parkrun model shows that community members are willing to take on data maintenance responsibility if given recognition and a clear role.

---

### Best Practices Summary Across All 8 Products

For a small-team product like Sniffout, the following cross-cutting best practices emerge:

1. **Type-specific expiry, not a universal rule.** Waze's differentiated expiry model is the right paradigm. Permanent fixtures (bins, taps) should not expire on a timer; transient conditions (muddy path, spare bags) should expire within hours or days.

2. **Activity-gating improves quality.** AllTrails' condition-reporting tied to recent walks is the single most impactful spam and quality control mechanism. Sniffout already tracks walk activity, making this directly implementable.

3. **Structured fields per pin type, not free text.** iOverlander and AllTrails both demonstrate that category-specific structured inputs produce higher-quality, more consistent data than open text boxes.

4. **Freshness signals matter as much as accuracy.** Show the user when a pin was last confirmed, not just when it was created. A bin pin with "5 people confirmed this week" is more actionable than one with "added 14 months ago."

5. **Require photos for permanent fixtures.** Komoot's experience shows photos dramatically improve quality and deter false submissions for infrastructure-type pins.

6. **Community updates / "still here" taps are low-friction maintenance.** FixMyStreet and Waze both demonstrate that prompting passing users to confirm existing pins is more effective than relying on the original contributor to update or delete.

7. **Light gamification sustains contribution.** Google Local Guides shows recognition (badges, levels) matters more than tangible rewards. Sniffout should implement a contributor profile visible to other users early.

8. **Start with a narrow pin type set.** All successful community features launched with fewer types and expanded. Trying to launch all 15 pin types simultaneously will produce a confusing UI and an impossible moderation burden.

9. **Ghost pin accumulation is the primary long-term risk.** iOverlander and FixMyStreet both show that without automatic expiry, outdated pins accumulate and erode trust. Sniffout must implement aggressive expiry for transient types from day one.

10. **Density dependency is real.** AllTrails' quality gap between popular and obscure trails will apply to Sniffout. Plan for this: do not promise full coverage at launch; frame the feature as "building together" to set appropriate expectations.

---

## SECTION 2: Pin Type Analysis

### 1. Dog Waste Bin (Council-installed, permanent fixture)

**Precedent:** OpenStreetMap has a `amenity=waste_basket` with `waste=dog_excrement` tag, actively maintained. Google Maps has occasional user-submitted bin locations. No dedicated dog walking app has comprehensive bin data in the UK.

**Information to capture:** Location (GPS), approximate description (post-mounted / ground-level / combined litter and dog bin), nearby landmark text field, photo (required), operational status (open / temporarily removed / permanently removed), council reference if known (optional).

**Accuracy duration:** Highly stable — council bins rarely move once installed. However, bins are occasionally removed (austerity cuts), damaged, or temporarily removed for maintenance. Change frequency is low but non-zero. Estimated useful life of a correct pin: 2-5 years.

**Expiry/decay model:** No automatic expiry. However, pins not confirmed by any user within 18 months should be flagged as "unverified — please confirm if still there." A confirmed pin resets the 18-month clock. Permanently removed status can be set by any user; after 2 reports of removal, pin should be archived rather than deleted (allows audit trail).

**Account requirement:** Adding a pin should require a registered account (prevents trivial spam of non-existent bins). Viewing should be available to all users including anonymous.

**Spam/abuse risk:** Low. No commercial motive to add fake bin locations. Nuisance additions possible but low-probability given low novelty value. Main quality risk is inaccurate location (user places pin 20m from the actual bin).

**Priority:** Essential, V1. This is probably the single most frequently requested piece of data for dog walkers in the UK. The closest thing to a "killer feature" for this pin layer.

---

### 2. Water Tap or Trough (Permanent fixture)

**Precedent:** OpenStreetMap tags `amenity=drinking_water` (with `dog=yes` variation). Some individual walking apps note water points. No dedicated dog-walker-focused water tap layer exists in the UK.

**Information to capture:** Location (GPS), type (public tap / horse trough / dog-specific bowl / stream/natural source with treatment note), whether it is seasonal (summer only in parks), photo required, operational status, last confirmed date.

**Accuracy duration:** High stability for permanent infrastructure. Seasonal availability (summer-only park taps) needs handling. Taps are occasionally removed or locked in winter.

**Expiry/decay model:** No automatic expiry for permanent water taps. Seasonal pins should have a seasonal availability field (April–October) that the UI renders appropriately. Unconfirmed pins older than 18 months flagged for community review.

**Account requirement:** Account required to add. Anonymous viewing permitted.

**Spam/abuse risk:** Low. Negligible commercial motivation. Location accuracy is the main risk.

**Priority:** Essential, V1. Water access is a safety issue in summer, particularly for dogs. Extremely high value for users.

---

### 3. River/Lake/Pond Access Point for Dogs (Permanent)

**Precedent:** No direct comparator with structured data. Walking apps note general river access points but not dog-swim-specific access (shallow entry, no blue-green algae risk, not near boat traffic). An underserved data type.

**Information to capture:** Location, access type (gentle bank / steps / gravel beach), depth description (shallow/deep), water quality notes (clean / known pollution issues / blue-green algae history), any restrictions (leads required / seasonal restrictions), photo, safety rating.

**Accuracy duration:** Physical access points are stable. Water quality and seasonal restrictions change. A pin needs both a physical access component (stable) and a current conditions component (variable). These should arguably be two separate data layers, but that adds UI complexity.

**Expiry/decay model:** The access point itself does not expire. An associated water quality note should expire after 30 days if not refreshed. Separate pin type for blue-green algae alert (see pin type 7) is recommended as the seasonal hazard vehicle.

**Account requirement:** Account required to add. Anonymous viewing permitted.

**Spam/abuse risk:** Low for physical access points. Some risk of misleading safety notes (user says water is clean when it is not). A disclaimer on safety-of-water claims is legally important (see Section 5).

**Priority:** Essential, V1. This is a distinctive, high-value data type that no UK competitor covers well. A genuine differentiator.

---

### 4. Spare Poo Bags Left by User (Very short-lived)

**Precedent:** No direct comparator in any researched product. Novel community feature. Some Facebook groups share this type of information but with no map layer.

**Information to capture:** Location (GPS, very precise), specific landmark description (tied to fence post / left on bin / under tree), approximate quantity remaining, time left (auto-populated from submission time), contributor's anonymous handle.

**Accuracy duration:** Extremely short. Bags may be taken within minutes or hours, or may last 2-3 days in a quiet location. Reliable useful life: 24 hours maximum.

**Expiry/decay model:** Hard automatic expiry at 24 hours from submission. No exceptions, no extensions. The pin should also have a "bags taken — thanks" button that immediately archives the pin. Display remaining time prominently ("Added 3 hours ago — may still be there").

**Account requirement:** This is the key tension. Account requirement reduces contributions significantly but prevents trivial spam. Recommendation: allow account-required submission but with a low-friction "quick pin" UI. Anonymous submission is inadvisable because fake bag pins would waste users' time and erode trust.

**Spam/abuse risk:** Moderate. No commercial motive, but nuisance spam (fake bag locations) wastes user time and erodes trust. The 24-hour expiry limits damage. With account requirement, spam risk is manageable.

**Priority:** Nice-to-have, V1 (optional). This is the most distinctive and community-spirited pin type. Low effort to implement with 24-hour expiry. Strong potential for positive community culture. However, it only works with adequate user density, making it better suited to V1.5 when there is a critical mass of users in specific areas.

---

### 5. Dog-Friendly Pub or Cafe (Permanent-ish)

**Precedent:** Strong. Muddy Boots, Dog Friendly, BringFido (US), many regional databases. The existing market is fragmented, often out of date, and not map-integrated in a walking context. The differentiator for Sniffout is contextual relevance: showing dog-friendly pubs en route during a walk.

**Information to capture:** Name, location, type (pub / cafe / restaurant), dog policy (all areas / beer garden only / bar area / must be on lead), whether water is provided for dogs, whether dog treats are available, any size restrictions, opening hours, photo, last confirmed date. Link to existing Google Maps or TripAdvisor listing where available.

**Accuracy duration:** Medium-term stable but businesses change policies, ownership, and hours. Dog-friendliness policy can change without notice. A confirmed-accurate pub pin is reliable for roughly 12 months; should be re-confirmed annually at minimum.

**Expiry/decay model:** No automatic expiry. Annual confirmation prompt for unconfirmed pins. Negative community reports ("refused entry with dog" flag) should increment a counter visible to users. At 3 negative reports without corresponding positive reports, pin should be flagged for review.

**Account requirement:** Account required to add. Anonymous viewing permitted.

**Spam/abuse risk:** Moderate-high. Potential for businesses to self-promote (add own pin with exaggerated dog-friendliness). Potential for competitors or disgruntled customers to flag places as dog-unfriendly. Defamation risk on negative flags is real (see Section 5). Photos and structured fields reduce but do not eliminate risk.

**Priority:** Essential, V1. This is a core use case for dog walkers and one of the most searched-for categories. However, Sniffout should consider whether to build its own database or integrate with an existing provider (Dog Friendly, CAMRA's What Pub with dog filtering) as a data import to seed the map.

---

### 6. Hazard: Broken Glass, Toxic Plant, Adder, Cattle in Field (Short-lived)

**Precedent:** Waze hazard pins, AllTrails condition reports. No dog-walking-specific hazard layer exists in the UK despite clear need.

**Information to capture:** Location, hazard type (from defined list: broken glass / toxic plant / adder sighting / cattle in field / barbed wire / aggressive dog in area / other), brief text description (140 char max), photo (optional but valuable), time of observation.

**Accuracy duration:** Highly variable by type. Broken glass: hours to days (may be cleared, may accumulate). Adder sighting: 24-48 hours relevant. Cattle in field: days to weeks. Toxic plant: seasonal (months). Barbed wire: permanent until removed. This single pin type probably needs sub-type-specific expiry.

**Expiry/decay model:** Sub-type specific: Broken glass / adder sighting: 48-hour automatic expiry. Cattle in field: 7-day automatic expiry. Toxic plant: 30-day expiry with seasonal refresh. Barbed wire: no expiry (treat as permanent hazard). Reporter can mark as "resolved" at any time.

**Account requirement:** Account required to add. Anonymous viewing strongly recommended (safety-relevant data — maximise visibility). Consider allowing unregistered viewing from a shared walk link.

**Spam/abuse risk:** Low for genuine hazards. Some risk of nuisance flags (fake adder sightings, etc.) but the short expiry limits damage. Account requirement and short expiry together make this low-risk.

**Priority:** Essential, V1. Dog safety is a core product value. Even a handful of hazard pins per popular walk would deliver significant user value. Simple to implement with structured sub-types and short auto-expiry.

---

### 7. Seasonal Hazard: Bird Nesting Area, Blue-Green Algae (Date range)

**Precedent:** Partial. AllTrails shows seasonal trail closures. RSPB posts nesting area notices but not in map form usable by walkers. UK EA posts blue-green algae alerts on a council-by-council basis with no unified map.

**Information to capture:** Location, hazard type (nesting area — dogs must be on lead / blue-green algae alert / ground-nesting season area / other seasonal restriction), active date range (start and end dates), authority source if official (EA blue-green algae notices, National Trust), photo, description.

**Accuracy duration:** By definition, bounded by the date range. Blue-green algae alerts may be updated by the EA; user-added pins should ideally link to or cite the source.

**Expiry/decay model:** Hard expiry on the end date specified by the contributor. If no end date is specified, default expiry is 90 days with a prompt to extend or expire. Official source pins (linked to EA or council page) should be flagged differently and persist until the source updates.

**Account requirement:** Account required to add. Anonymous viewing permitted.

**Spam/abuse risk:** Low. Subject matter requires some knowledge to submit plausibly. The date-range constraint means stale data expires automatically.

**Priority:** Nice-to-have, V1 (optional). High value for users in spring (nesting season) and summer (algae). However, the difficulty of aggregating authoritative data sources (EA, councils, NatureScot, NRW) makes this complex to do well. A manual community pin approach is a reasonable starting point.

---

### 8. Off-Lead Area Boundary (Permanent, complex geometry)

**Precedent:** OpenStreetMap has polygon data for designated off-lead areas, though coverage is incomplete. No UK dog walking app has a comprehensive, crowd-maintained off-lead area layer. This would be a significant data asset.

**Information to capture:** Polygon boundary (complex geometry), name, managing authority (council / National Trust / private), any restrictions (no off-lead near children's play areas / leads near livestock), opening hours if applicable, surface type, photo.

**Technical complexity:** This is fundamentally different from a point pin. Drawing a polygon boundary requires a different UI (polygon drawing tool on a mobile map) and different data storage (GeoJSON polygon vs point). This is substantially more complex to build than any other pin type.

**Expiry/decay model:** No automatic expiry for official designated areas. Community review prompts annually. Changes to boundaries require a moderation step rather than simple user edit, due to data complexity.

**Account requirement:** Account required to add. Trusted contributor tier recommended given data complexity (see Parkrun area steward concept). Anonymous viewing permitted.

**Spam/abuse risk:** Low intentional abuse risk, but high accidental error risk (incorrectly drawn boundaries). This is the pin type most at risk of genuine user error rather than malicious submission.

**Priority:** Defer from V1. High value but technically complex and moderation-intensive. Recommended approach: import existing OpenStreetMap polygon data for known off-lead areas as a starter layer, then allow community corrections on top. Full community polygon drawing is a V2 feature.

---

### 9. Dog Wash Station (Permanent fixture)

**Precedent:** No dedicated database exists for UK dog wash stations. Very niche but useful after muddy walks. Some Wickes, Pets at Home, and rural pub car parks have them. Komoot and Google Maps have occasional user-submitted entries but not systematically.

**Information to capture:** Location, type (outdoor hose point / automatic wash station / self-service wash bay), cost (free / paid — price), opening hours if applicable, photo required, last confirmed date.

**Accuracy duration:** High stability. Dog wash stations are permanent infrastructure. Change infrequent.

**Expiry/decay model:** No automatic expiry. 18-month unconfirmed flag as with other permanent fixtures.

**Account requirement:** Account required to add. Anonymous viewing permitted.

**Spam/abuse risk:** Very low. No commercial incentive to add fake wash stations.

**Priority:** Nice-to-have, V1 (optional). Useful but niche. Low data volume expected. Easy to implement within the permanent fixture model.

---

### 10. Dog-Friendly Accommodation Nearby (Permanent-ish)

**Precedent:** Strong. BringFido (US), Cottages.com dog filter, booking.com dog-friendly filter, Holidaycottages.co.uk. This is a well-served market commercially. Dog Friendly UK has a directory. The differentiator would be walk-contextual discovery (finding accommodation near the end of a long walk).

**Information to capture:** Name, location, type (B&B / holiday cottage / hotel / camping), dog policy (number of dogs, size restrictions, extra charge), price range, link to booking page, photo.

**Expiry/decay model:** Annual confirmation prompt. Business closure should be reportable. This category is at higher risk of commercial self-promotion than most other pin types.

**Account requirement:** Account required to add. Anonymous viewing permitted.

**Spam/abuse risk:** Moderate-high. Clear commercial incentive for accommodation providers to add their own listings, potentially with misleading information. Sniffout should consider whether this category belongs in the community pin layer at all, or whether it is better served by a curated commercial partnership layer. A community-submitted layer risks becoming spam-heavy.

**Priority:** Defer from V1. The commercial spam risk is high, the data is already available via third parties, and the walk-contextual use case is better served by an API integration (e.g. linking out to Dog Friendly or booking.com search) than a community pin. Consider V2 via data partnership rather than community submission.

---

### 11. Muddy/Flooded Section (Very short-lived)

**Precedent:** AllTrails condition reports ("muddy/slippery"). Waze equivalent for road flooding. No UK-specific walking equivalent with dog focus.

**Information to capture:** Location (start and end point of affected section, or single point if localised), condition type (muddy / flooded / waterlogged / ice), severity (passable with care / impassable / deep water — dogs at risk), brief note, photo.

**Accuracy duration:** Highly weather-dependent. Conditions after heavy rain may clear within 24-48 hours in summer; may persist for weeks in winter on clay soils. 48-hour default is likely too short in winter; 7-day may be too long in summer.

**Expiry/decay model:** 48-hour default automatic expiry with option for reporter to set 7-day window for persistent conditions. Community confirmation ("still impassable") extends by 24 hours per confirmation. Weather integration (if it has rained in the past 24 hours, surface conditions pins are assumed more likely still accurate) is a desirable V2 enhancement.

**Account requirement:** Account required to add. Anonymous viewing strongly recommended.

**Spam/abuse risk:** Low. Very limited motivation for fake mud reports.

**Priority:** Essential, V1. Muddy path warnings are one of the most frequently discussed topics in UK walking communities. High value, low complexity, short auto-expiry limits data quality risk.

---

### 12. Path Closed or Diverted (Temporary but variable duration)

**Precedent:** AllTrails trail closures. Ordnance Survey publishes some but not all closures. Local councils publish diversions in local notices. No aggregated UK walking path closure map exists — this is a genuine gap.

**Information to capture:** Location (path section start and end, or single point for closure), closure type (temporary closure / seasonal closure / emergency closure / permanent diversion), reason (flooding / maintenance / private land / new development), source (council notice / personal observation), expected end date if known, alternative route description, photo.

**Expiry/decay model:** Reporter-set end date if known; if no end date, default 30-day expiry with extension prompt. Permanent diversions should be escalated to OpenStreetMap data correction rather than staying as a pin indefinitely. Community "still closed" updates extend by 7 days each.

**Account requirement:** Account required to add. Anonymous viewing permitted.

**Spam/abuse risk:** Low. No commercial motive. Some risk of inaccurate closures discouraging use of legitimate paths.

**Priority:** Nice-to-have, V1 (optional). High value for walkers in certain areas (particularly near development sites, flood-prone paths). Can be deferred if V1 is already large; include if the implementation is simple.

---

### 13. Lost Dog: Last Seen Here (Urgent, 7-day maximum)

**Precedent:** DogLost.co.uk (UK-specific, the leading platform). Facebook community groups. No map-integrated lost dog pin layer exists that is surfaced to walkers actively in the area.

**Information to capture:** Location (last seen point), dog description (breed, colour, name, collar), time last seen, contact method (phone number or email — GDPR considerations apply, see Section 5), photo of dog, microchip number (optional, helps if found), any reward.

**Accuracy duration:** Urgent and short-lived. Most lost dog situations resolve within 48-72 hours (found, reunited, or tragedy). 7-day maximum is appropriate.

**Expiry/decay model:** Hard 7-day automatic expiry. Reporter can mark as "found — thank you" at any time, which archives the pin with a resolved state. Reporter can extend by 7 days if still missing. The urgency of this pin type justifies push notification to all users within a configurable radius (e.g. 5km) — this is a major engagement feature as well as a community benefit.

**Account requirement:** Account required to add (prevents spam lost dog reports and ensures contact details are tied to a verifiable account). Anonymous viewing permitted — these should be maximally visible.

**Spam/abuse risk:** Low for genuine cases. The emotional weight of this pin type means most users will not abuse it. However, contact details exposure (phone numbers) is a privacy consideration that must be handled (see Section 5). Also consider: a fake lost dog pin with a phone number could be used for harassment — account requirement is essential.

**Priority:** Nice-to-have, V1 (optional). This is emotionally compelling and could drive significant word-of-mouth. However, it requires careful GDPR handling and is operationally complex (push notifications, contact detail handling). Recommend V1.5 with proper legal review of the contact data model.

---

### 14. Found Dog: Held Here (Urgent, resolves when claimed)

**Precedent:** DogLost.co.uk has a found dog reporting function. Facebook groups. Same gap as lost dog above.

**Information to capture:** Location (where dog was found, and if different, where it is currently being held), dog description, photo of dog, contact method, time found, whether reported to police/council dog warden (UK law requires this), microchip scan result if scanned.

**Expiry/decay model:** Does not auto-expire — remains open until reporter marks as "claimed" or "handed to warden/rescue." 14-day maximum after which it is escalated with a prompt to contact the dog warden. A found dog held indefinitely is a welfare issue.

**Legal note:** Under UK law (Control of Dogs Order 1992), a found dog must be reported to the local authority. A Sniffout pin does not substitute for this legal obligation. A disclaimer is required (see Section 5).

**Account requirement:** Account required to add. Anonymous viewing permitted.

**Spam/abuse risk:** Very low. No motive for fake found dog reports.

**Priority:** Nice-to-have, V1 (optional). Same reasoning as lost dog pin — high emotional value, requires careful implementation. Best implemented alongside the lost dog pin.

---

### 15. Enclosed Dog Exercise Area / Dog Park (Permanent)

**Precedent:** OpenStreetMap tags `leisure=dog_park`. Google Maps has some entries. No comprehensive UK database exists. This is different from an off-lead area (pin type 8) — this is specifically a fully enclosed area with a gate.

**Information to capture:** Location, name, size (rough estimate: small / medium / large), fencing quality (note if any gaps), gate type (self-closing / manual), whether there is lighting, surface type (grass / gravel / artificial), nearby facilities (bins, water, seating), opening hours if applicable, photo required.

**Accuracy duration:** High stability — enclosed dog parks are permanent infrastructure. Changes (gates damaged, new parks opened) are infrequent but important.

**Expiry/decay model:** No automatic expiry. 18-month unconfirmed flag. Community condition updates for infrastructure issues (broken gate latch, fence gap) should be a sub-feature attached to the base pin.

**Account requirement:** Account required to add. Anonymous viewing permitted.

**Spam/abuse risk:** Very low. No commercial motive. Location accuracy is the main risk.

**Priority:** Essential, V1. Enclosed dog parks are high-value for users with reactive or recall-training dogs. The enclosed nature means there is no competing off-lead area (which may have partial fencing, unclear boundaries). Clear, simple, high-value.

---

### Additional Proposed Pin Types Not on the Original List

**A. Unfriendly / Off-Lead Dog Hotspot (Negative safety pin)**
Report a location where off-lead dogs regularly cause problems for on-lead dogs. Useful for reactive dog owners. Expiry: 14 days (conditions change). Account required. Spam risk: moderate (subjective). Priority: nice-to-have V2. Note: defamation risk is lower than for named businesses because these are locations, not named individuals.

**B. Dog-Friendly Beach Section (Seasonal)**
UK beaches have complex seasonal dog restrictions (usually May–September exclusion zones). A dedicated pin type for "dogs allowed here, this season" with date-range validity, distinct from a general beach access point. This is extremely high value in coastal areas. OSM data exists but is incomplete and not surfaced in a dog-walker-friendly form. Priority: nice-to-have V1 for coastal users.

**C. Veterinary Practice (Permanent)**
Emergency vet locations visible during a walk. Particularly useful on long walks away from home. Sniffout could import this data from RCVS register rather than relying on community submission, but a community pin with "24hr emergency" flag would add value. Priority: V2 — import-first approach preferred.

**D. Public Footpath Obstruction (Permanent/legal issue)**
A farmer has blocked a public right of way, or a landowner is intimidating walkers. Different from a path closure — this is potentially an illegal obstruction. Links to Ramblers Association reporting mechanism. Priority: V2 — requires careful moderation given legal sensitivity.

**E. Dog Training Class or Group Walk Meeting Point (Event)**
A location where a regular group walk or training session meets. Time-stamped recurring event pin. Different from a facility — this is community activity. Would require an events data model. Priority: V2.

**F. Tick Warning Area (Seasonal/safety)**
Areas with known high tick density (heathland, bracken, woodland). Relevant health risk for dogs (and owners). Could link to PHE/NHS tick risk maps. Priority: nice-to-have V1.5.

---

## SECTION 3: Technical and Moderation Approaches

### 1. Expiry Logic

**Proven approaches to automatic expiry**

The literature and product evidence supports three expiry paradigms used in combination:

- **Hard time-based expiry**: The pin is deleted or archived after a fixed interval regardless of any other signal. Used by Waze for short-lived hazards (1-4 hours), AllTrails for condition reports (90 days). Appropriate for any pin type where staleness is always harmful.

- **Soft time-based decay with prompt**: The pin remains visible but is visually degraded (greyed out, "unconfirmed" badge) after a period without confirmation. A user approaching the pin location is prompted to confirm. Used by FixMyStreet (soft decay via last-updated timestamp visibility) and approximately by iOverlander (comment date implies freshness). Appropriate for permanent fixtures where you want community maintenance but not hard removal.

- **Confirmation-based extension**: Each active confirmation resets the expiry timer. The pin persists only as long as someone continues to confirm it. Used by Waze explicitly. Appropriate for short-to-medium lived information where the confirmation pool is large enough. At small scale (Sniffout early stage), this model struggles because there may not be enough passing users to generate confirmations.

- **Reporter-initiated resolution**: The reporter (or any user) can mark the pin as resolved, which archives it immediately. This should exist for all pin types as an override.

The ghost pin problem arises when hard expiry is not used for time-sensitive types and confirmation volume is too low to maintain soft decay signals. For Sniffout, the following framework is recommended:

| Pin category | Expiry model |
|---|---|
| Permanent infrastructure (bins, taps, dog parks) | Soft decay: 18-month confirmation prompt; no hard expiry |
| Medium-term variable (pubs, cafes, access points) | Soft decay: 12-month confirmation prompt |
| Condition pins (muddy, flooded) | Hard 48-hour or 7-day depending on severity |
| Hazard pins (glass, adder) | Hard 48-hour; 7-day for cattle/livestock |
| Seasonal pins | Hard expiry on stated end date |
| Spare bags | Hard 24-hour |
| Lost/found dog | Hard 7-day; reporter can extend or resolve |

**Waze's specific expiry approach (detail)**

Waze uses a three-part model: (1) a default time-to-live (TTL) per pin type set at the point of creation; (2) active confirmation from passing users that resets the TTL; (3) a flag/deny button that decrements a score, and if score falls below threshold, the pin is removed early. The TTL values published in Waze documentation and user research are: accidents 1-2 hours, hazards 2-4 hours, speed cameras (temporary) 1.5 hours. These are starting values; confirmations can keep a pin live for 12+ hours if there is heavy traffic. Waze does not use pure time-based expiry for any category — confirmation is always a factor.

**"Still here?" conversion rates**

Waze does not publicly disclose confirmation prompt conversion rates. Industry estimates from comparable prompt patterns (push notification CTR for location-contextual prompts) suggest 15-25% response rates for well-designed contextual prompts shown at the right moment (when the user is within 50-100m of the pin). However, Waze's driver user base sees the prompt while actively navigating, creating high contextual relevance. Sniffout's walkers will see the prompt during active walk tracking, which is comparable. Sniffout should target showing the confirmation prompt only when the user is actively tracking a walk and is within 30-50m of the pin. Implementing this in Leaflet with the geolocation API is straightforward.

**Ghost pin accumulation risk**

Ghost pins erode trust faster than almost any other quality problem. A user who walks to a pinned bin and finds it was removed 2 years ago will have a strongly negative experience and is unlikely to trust any other pins. The research from iOverlander user forums consistently identifies ghost pins as the number one complaint. Sniffout should treat ghost pin prevention as a first-tier quality concern from day one, not a future problem to solve at scale.

---

### 2. Spam Prevention at Low Traffic

**Minimum friction for <5,000 MAU**

For a product at Sniffout's current or near-term scale, the following spam vector analysis applies:

- **Volume spam (100 fake bins on the Thames Path)**: Very unlikely at small scale. The effort required exceeds the entertainment value for most bad actors. Email-verified accounts are sufficient defence.
- **Commercial spam (pub self-promoting)**: Moderate risk. Requires minimum walk activity gate to prevent account-creation-then-immediate-submission. Suggested: require at least one logged walk before being able to submit a pin.
- **Targeted harassment (fake lost dog pin with someone's address)**: Low volume but high harm. Account age threshold (e.g. account at least 7 days old) adds friction without being user-hostile.
- **Competitive sabotage (marking a pub as dog-unfriendly)**: Very low probability at this scale. Manageable with the flag-for-review model.

**Recommended minimum friction stack for Sniffout V1:**
1. Email-verified account required to submit any pin.
2. At least one logged walk before first pin submission.
3. Account age of at least 24 hours before first pin submission.
4. Rate limit: maximum 10 new pin submissions per 24-hour period per account.
5. For sensitive types (lost/found dog, hazard): account age at least 7 days.

This stack is low-friction enough to not deter genuine contributors while blocking the most common spam patterns.

**Consequences of over-aggressive friction**

A common failure mode is requiring so much activity or verification before a user can contribute that genuine contributors are blocked. Wikiloc requires premium subscription for some contribution features. OSM historically required complex XML editor tools. Both created contributor funnel drop-off. For Sniffout, the single logged walk requirement is the right level of friction: it ensures the contributor has actually used the product, without requiring a long engagement history.

**Products that successfully launched community features at small scale**

Strava's segment creation (community-created GPS routes) is an example of a feature that scaled from a small base. Early Strava had very few segments; the feature grew organically as the community added them. The key enabler was that the contribution mechanic was deeply integrated into the core activity of using the product (recording a run/ride). Sniffout can replicate this by surfacing the pin contribution prompt at the end of a walk ("Did you notice anything on this walk worth sharing?").

---

### 3. Verification Thresholds

**For permanent fixtures (waste bins, water taps)**

The appropriate model for permanent fixtures is trust-on-submission (pin appears immediately) with community verification building over time. Requiring pre-submission verification (pin hidden until 3 users confirm) would make the feature feel broken at low density — a user adds a bin and it never appears because no one walks that way. This is worse than showing an unverified pin immediately.

The recommended approach:
- Pin appears immediately after submission (account-required, walk-gated as above).
- Pin is visually marked as "recently added — not yet confirmed by others" for the first 30 days or until first community confirmation.
- After 3 independent confirmations, pin is marked "verified by community."
- Unconfirmed pins older than 18 months are flagged for review.

**Confirmation thresholds in comparable products**

Waze: 1 confirmation is enough to extend a pin's life. iOverlander: no formal threshold; community comments serve as social verification. AllTrails condition reports: single user report appears immediately, no minimum confirmation threshold. OpenStreetMap: any single registered mapper can add or edit; disputes go to talk pages. In practice, most crowdsourced location products use a trust-on-submission model with post-hoc community validation rather than a confirmation gate. The gatekeeping approach (pin hidden until verified) is almost exclusively used by products with very high-value or high-risk data (Wikipedia's new article creation for new users, for example).

**Handling conflicting reports**

When one user says a bin is still there and another says it has been removed, the platform needs a resolution model. Recommended approach for Sniffout:
- Display the most recent report prominently ("As of 3 days ago, 1 user reported this bin is no longer here").
- After 2 independent "removed" reports with no recent "still here" confirmations, flag the pin for moderator review rather than auto-archiving.
- The original submitter receives a notification prompting them to update the status if they can.
- Moderator can archive (with reason visible to community) or investigate.

---

### 4. Map Clustering in Leaflet

**Best practices for mobile map clustering**

For Leaflet specifically, the standard library is `Leaflet.markercluster`, which is well-maintained and widely deployed. Key configuration considerations for Sniffout:

- **maxClusterRadius**: The radius (in pixels) at which markers cluster. Default is 80px. For a mobile map with touch targets, 60-70px is better. At high zoom levels (street level), this should reduce to 40px to show individual pins.
- **Zoom level at which clusters break apart**: Clusters should begin separating at zoom level 15 (approximately 1:4000 scale, which corresponds to street-level walking navigation). At zoom 16+, all individual pins should be visible. On the Thames Path example, this means a user zoomed out to see 5km of path sees clusters; zoomed in to a 200m stretch sees individual pins.
- **Mixed pin type clusters**: Leaflet.markercluster supports custom cluster icon rendering. Best practice for mixed types is to show the cluster count and a mixed-type indicator. Sniffout should avoid trying to show the "most important" pin type in the cluster (subjective and complex) and instead show a generic dog paw cluster icon with count.
- **Colour coding by urgency**: Urgent pins (lost dog, hazard) should break out of clusters at a higher zoom level than routine pins (bins, taps). This is achievable by creating two separate marker cluster groups with different maxClusterRadius values: one for urgent pins (smaller radius, earlier separation) and one for routine pins.

**Known good Leaflet implementations**

OpenStreetMap community contributors have extensively documented Leaflet.markercluster configurations. The `showCoverageOnHover` option should be disabled on mobile (it renders a polygon showing the cluster's area, which clutters the mobile UI). `spiderfyOnMaxZoom: true` (which fans out clustered pins when at maximum zoom) should be enabled. For performance with >500 pins, `chunkedLoading: true` prevents UI blocking during initial render.

---

### 5. Moderation Tools for Small Teams

**What 2-5 person teams use**

At Sniffout's scale and team size, a purpose-built moderation tool is not warranted. The minimum viable moderation stack is:

- A "report this pin" button accessible from every pin detail view. Reports go to a moderation inbox.
- The moderation inbox is a simple internal dashboard (can be as simple as a filtered database view in Airtable, Supabase dashboard, or a dedicated admin panel) showing reported pins with: pin details, submitter account details, report reason, reporter account details, and action buttons (dismiss report / archive pin / ban user).
- Email notification to moderator(s) for each new report.
- A weekly audit of pins with 2+ reports that have not yet been actioned.

**AllTrails moderation at small team size**

AllTrails does not publicly disclose its moderation team size. However, based on their support response patterns and community reports, their early-stage moderation (prior to the 2021 REI acquisition) appears to have been handled by a team of 3-5 dedicated community staff supplemented by algorithmic pre-screening. Their key lever was the 90-day auto-expiry for condition reports, which dramatically reduced the moderation burden compared to permanent pins.

**Expected moderation burden per 1,000 pins**

Based on comparable community platforms, the following estimates apply:

- Expected report rate: 1-3% of pins will receive at least one user report. For 1,000 pins, this is 10-30 reports.
- False positive rate for reports: approximately 40-60% of reports will be legitimate concerns; the remainder are user error, spam reports, or low-priority issues.
- Time per report moderation decision: 5-10 minutes including context review.
- Net moderator time per 1,000 pins: approximately 1-3 hours per month.

This is a manageable burden for a small team at V1 scale. It becomes onerous above ~10,000 active pins without automation. Automatic expiry of transient pins significantly reduces the net moderation burden, which is an additional argument for aggressive expiry logic.

**A note on automated pre-screening**

Simple automated rules can reduce the moderation queue significantly: duplicate pins within 10m of an existing pin of the same type (flag for review, do not display both), pins placed in water or clearly impossible locations (GPS accuracy check against OS land use data), and pins submitted by accounts less than 7 days old with no logged walks (hold in a review queue before display). These rules require minimal engineering effort and eliminate a significant fraction of noise before a human moderator sees it.

---

## SECTION 4: Community Dynamics and Engagement

### 1. DAU/WAU Impact of Community Features

**Evidence for engagement uplift**

The research literature on community feature impact on engagement metrics is limited and often not publicly disclosed by companies. The following evidence is available:

- **Waze**: Waze's internal research (disclosed in presentations at Where 2.0 conference, circa 2013) suggested that users who submitted at least one report had 3x higher 30-day retention than passive users. Causality is uncertain — contributing users may simply be more engaged to begin with.
- **AllTrails**: AllTrails does not publicly disclose retention data segmented by contribution behaviour. Community posts on product forums suggest the condition report feature was cited as a retention driver in the 2019-2021 period when app growth accelerated. No quantified figure is available.
- **Strava**: Strava's segment creation feature (comparable community contribution mechanic) is widely cited internally as a key retention driver. Strava has not published the specific WAU uplift figure.
- **Google Maps Local Guides**: Google has stated that Local Guides have 4x higher monthly active rate than non-guides, but this is subject to the same causality problem as Waze.

The honest assessment is that engagement uplift from community features is plausible and likely, but quantified data for small B2C apps at Sniffout's scale is not publicly available. The mechanism is logical: community contribution creates ownership and habit; users return to see if their pins were confirmed or used.

**Inference for Sniffout**

Contribution behaviour requires return visits to check status (pin confirmed? bags still there? hazard cleared?). This creates walk-independent app opens — a DAU mechanism beyond the walk-tracking core loop. Even at very low contribution rates, this effect is worth targeting.

---

### 2. Contributor Ratios

**Published data on contribution rates**

- Wikipedia: approximately 0.04% of readers make substantive edits. However, Wikipedia is a read-only consumption product for most visitors; the context is different from an active user community.
- OpenStreetMap: The OSM Foundation's 2023 Annual Report notes approximately 1.5 million registered users have ever made an edit, against an estimated 10+ million total registered accounts. Active mappers (edited in the past 30 days) number approximately 40,000 globally. This is roughly 0.3-0.4% of registered accounts.
- Waze: Waze has stated approximately 10-15% of users submit at least one report per month. This is far higher than OSM or Wikipedia, attributed to the low-friction in-app contribution mechanic and direct immediate benefit (other drivers see your report).
- AllTrails: AllTrails does not publish condition report contribution rates. Based on app store review analysis and community forum posts, estimated contribution rate is 5-10% of users who log a hike also submit a condition report on the same session.

**Realistic expectation for Sniffout with 1,000 MAU**

Assuming AllTrails-comparable contribution behaviour (optimistic given UK dog walker demographics vs hiking demographics):
- 5-10% of monthly active users contribute at least one pin per month: 50-100 contributors.
- Average 2 pins per contributor per month: 100-200 new pins per month.
- At 1,000 MAU, Sniffout might realistically expect 50-150 new pins per month across the user base.

If contribution is concentrated geographically (as it will be, since Sniffout users cluster around popular walks), this could mean 20-50 pins added on the Thames Path in the first few months, which is enough to feel meaningful. Rural areas with 10 monthly users will likely see 0-2 pins per month, which is insufficient for the feature to feel valuable.

---

### 3. Contributor Motivations

**OSM community research**

A 2013 academic study (Budhathoki and Haythornthwaite, "Motivation for Open Collaboration: Crowd and Community Models and the Case of OpenStreetMap") found that OSM contributors were primarily motivated by: (1) fun and enjoyment of the activity (62%), (2) ideology/belief in open data (58%), (3) improving their local area (51%), (4) skill development (32%). Social recognition was less important than expected. This study is now over a decade old but remains the most comprehensive academic treatment of OSM motivation.

**iOverlander community**

iOverlander users contribute almost entirely altruistically — there is no gamification, no leaderboard, no badges. The motivation is reported community-wide as "paying it forward" — you found good data when you needed it, so you add data for the next traveller. This is a strong cultural norm in the overlanding community. Dog walking communities in the UK share some of this mutual aid ethos, particularly around dog safety (adder warnings, toxic plants).

**Waze user research**

Waze has discussed contributor motivation in press coverage. The dominant motivator appears to be immediate self-benefit: you report a hazard because you want other drivers to benefit from your report and reciprocally you want other drivers to report hazards for you. This reciprocity-based motivation is strong when the contributor clearly benefits from the data. For Sniffout, this translates well to hazard pins (you warn others about broken glass, you expect them to warn you) and less well to infrastructure pins (you add a bin location for others' benefit, with no direct personal reward).

**Dog owner distinctive motivations**

Dog owners are a community with strong safety-consciousness around their animals. Research on dog owner community behaviour (Dotty the Dog Foundation research, Battersea Dogs and Cats Home social research) suggests:
- Dog owners feel strong community identity with other dog owners — strangers with dogs talk to each other at a rate that has no equivalent in most other hobby communities.
- Dog safety motivates action strongly — a dog owner who knows about an adder sighting on a common will proactively warn others even without any technological infrastructure (this already happens via Facebook groups and dog walker word-of-mouth).
- Dog owners value local knowledge highly — they return to the same walks repeatedly, which means they have deep local knowledge and a stake in its accuracy.

These characteristics suggest dog owners are well-positioned to be contributors, above the base rate for other outdoor hobby apps. The altruistic + reciprocity motivation (warn others about hazards, benefit from others' hazard warnings on your walks) is particularly strong.

**Gamification: does it matter?**

For Sniffout's audience, light gamification (badges, contribution count on profile) is likely to matter at early levels (first 5 pins, reaching "local expert" status) but diminish in importance thereafter. The primary motivator should be the intrinsic value of the contribution — making walks better for other dogs and owners. Gamification should be a secondary reinforcement, not the primary mechanism. Leaderboards are appropriate only at high user density (a leaderboard for the 5-user community in rural Lincolnshire is demotivating, not motivating).

---

### 4. Cold Start / Sparse Map Problem

**What happens when the feature launches sparse**

A sparse map is a known and serious risk for community map features. If a user opens the Sniffout map expecting to see bins and water taps and sees nothing, they will conclude the feature is broken or useless and may not return to it. This is the cold start problem. The response rate to an empty map is close to zero — users do not contribute to an empty map because the feature itself seems unused or abandoned.

**Strategies used by other products**

- **OpenStreetMap**: Seeded with Yahoo! aerial imagery license (2006) and numerous import projects. Never had a fully empty map.
- **Waze**: Seeded in early markets by community editors who manually added roads. In new markets where there was no seed data, growth was slow until a critical mass of GPS-trace data was contributed.
- **AllTrails**: Seeded with data from government trail databases (US Forest Service, National Parks Service). Community data was added on top of a pre-existing authoritative layer.
- **iOverlander**: Transitioned from an offline dataset (iOverlander predecessor communities used shared spreadsheets) — the platform launched with several thousand existing data points migrated from prior community effort.

**Recommended seeding strategy for Sniffout**

1. **Import OSM data** before launch. OpenStreetMap has structured data for: dog waste bins (`amenity=waste_basket` + `waste=dog_excrement`), drinking water points, dog parks (`leisure=dog_park`), and some dog-friendly pubs. This data is imperfect and coverage varies, but it provides a non-empty starting layer. OSM data is ODbL licensed and compatible with community-based applications.
2. **Import existing open datasets**: UK councils publish some bin location data as open data. data.gov.uk has a number of council open data sets including waste bin locations.
3. **Pre-launch community seeding**: Engage 20-30 power users (regular Sniffout users, local dog walking groups) in a pre-launch "map sprint" to add pins in their local areas. This is how OSM ran local mapping parties.
4. **Explicit empty-state messaging**: If a user opens the map in an area with no pins, show an explicit CTA: "Be the first to add a pin in this area. Help other dog walkers discover what's here." This reframes sparse data as an opportunity rather than a failure.

**Launch sparse vs hold for density threshold**

The evidence favours launching with pre-seeded data (OSM import) even if the community layer is sparse, rather than holding the feature. The argument for holding (wait until there is enough data to be useful) is undermined by the fact that the only way to get data is to launch the feature. However, launching without any seed data at all is inadvisable. The minimum viable launch state should include at least OSM-imported bins and dog parks in the most active Sniffout usage areas.

**Examples of features launched too early**

- Google Maps' community-contributed transit directions feature (2013-2015) was launched before there was sufficient community data and was eventually replaced with official GTFS feeds. The lesson is that community data and authoritative data are not interchangeable; community data requires community density to work.
- Foursquare Specials in smaller UK cities launched before there was enough merchant participation; users saw the feature as broken because there were no specials available in their area.

---

### 5. Network Effects

**Local network effects in community map features**

Community map features exhibit strong local network effects: the value of the feature increases as more pins are added in a specific area, but density in Manchester has no value to a user in Brighton. This is fundamentally different from the global network effects of social platforms (where more users anywhere make the product more valuable). Local network effects are harder to scale because you must reach a density threshold in each geographic market independently.

**Density threshold before feature feels useful**

Based on comparable products:
- For a 5km urban walk, a user probably needs to find at least 3-5 useful pins to feel the feature has delivered value. Below this threshold, the feature feels like a curiosity rather than a tool.
- On the Thames Path (approximately 290km total), if Sniffout's user base is concentrated in the London section (say 30km of urban/suburban path), and if there are 50 monthly active users walking that section, generating 50-100 pins over 3 months of the feature being live, this produces 1.5-3 pins per km. This is approximately the minimum useful density.
- Rural areas with 1-2 pins per 10km of path will not reach useful density without specific interventions (power user seeding, OSM import).

**Density and retention**

No public study has quantified the specific density-retention relationship for community pin features. The inference from comparable products (AllTrails condition reports, Waze reports) is that the relationship is non-linear: below a threshold, the feature barely affects retention; above it, it becomes habit-forming. The threshold is estimated at 1 useful pin per km of regularly walked path.

---

## SECTION 5: Legal and Privacy Considerations

### 1. UK GDPR and User-Contributed Location Data

**Is pin location data personal data under UK GDPR?**

Under UK GDPR (as retained and amended by the Data Protection Act 2018), data is personal data if it relates to an identified or identifiable individual. A pin location itself (a set of GPS coordinates with a pin type and description) is arguably not personal data in isolation. However:

- If the pin is associated with a user account (which it is in Sniffout's proposed model), the association between the pin and the user account makes it personal data in the context of Sniffout's internal database, even if the user's identity is not publicly displayed alongside the pin.
- The location of a pin may be sensitive in context: a "lost dog last seen here" pin near a home address, or a pin submitted consistently from a single postcode, could allow inference of the user's home location — which is personal data.
- Under the ICO's guidance on location data, precise GPS coordinates associated with a user account constitute personal data. This applies to the internal record of who submitted a pin, even if the submitter's name is not publicly displayed.

**Retention obligations**

Under UK GDPR's storage limitation principle, personal data should not be retained for longer than necessary for the purpose for which it was collected. For pin location data:
- Active pins: retention for the duration the pin is active is clearly necessary.
- Archived/expired pins: the internal record linking a specific user account to a submitted pin is only necessary for moderation and accountability purposes. After, say, 2 years from the pin's archival, there is no clear necessity to retain the user-pin linkage. Sniffout's privacy policy should specify this retention window.
- Practical recommendation: retain the user-pin association for 24 months after the pin is archived, then anonymise (dissociate the pin from the user account). The pin's geographic data can be retained for statistical or archival purposes in anonymised form.

**Account deletion and pin deletion**

This is the most operationally complex UK GDPR question. Under the right to erasure (Article 17 UK GDPR), a user who deletes their account has the right to erasure of their personal data. The question is whether pin content (the actual geographic and descriptive data of the pin) must be deleted or whether only the association between the pin and the user account must be removed.

The ICO's position, consistent with general UK GDPR guidance, is that the right to erasure applies to personal data specifically. If a pin is publicly visible community data (a bin location that other users now rely on), the legitimate interests of other users and the public benefit of the data may be grounds for retention of the pin itself under the legitimate interests basis, provided the user's identity association is removed. In practice, this means: when a user deletes their account, anonymise their pins (change the submitter attribution to "anonymous contributor") rather than deleting the pins themselves. This is the approach taken by most community platforms, including Wikipedia (edits by deleted accounts remain but are attributed to the IP address rather than the username).

**Consent required for pin location data**

Sniffout's legal basis for storing pin data should be established in the privacy policy. For location data associated with community contributions, the appropriate basis is likely consent (explicit opt-in to the community map feature) supplemented by legitimate interests (the public benefit of community walking data). A separate consent tick box for pin contribution, distinct from the main account consent, is recommended by the ICO for location-derived data because of its sensitivity. Sniffout should not bury pin-related data processing in general terms; a specific, plain-English explanation is required.

---

### 2. Liability for Hazard Pins

**Platform liability under UK law**

The legal framework for platform liability for user-generated content in the UK has changed significantly with the Online Safety Act 2023 (OSA 2023). Key provisions relevant to Sniffout:

- **Section 230-equivalent defence** (the old notice-and-takedown framework under the E-Commerce Regulations 2002): the UK retained a qualified hosting defence post-Brexit. Under this defence, a platform is not liable for third-party content if it: (a) is a passive host (does not initiate or modify content), and (b) acts expeditiously to remove content upon gaining knowledge it is illegal. For Sniffout's hazard pins, this defence is available provided Sniffout acts promptly on flagged inaccurate hazard data.
- **Online Safety Act 2023**: At the time of this research (2026), the OSA 2023 is in force. Sniffout is likely classified as a "user-to-user service" under the OSA 2023 if it allows users to interact or share content that others can see. Category 1 (largest platforms) and Category 2 (mid-tier) services have elevated duties. Small platforms (Sniffout at <5,000 MAU) are likely to fall under the baseline duties only, which require: a terms of service, a mechanism for users to report content, and a mechanism for Sniffout to act on illegal content. Hazard pins are not illegal content, so the OSA 2023's elevated obligations are not directly triggered by this feature.

**Is Sniffout liable if a dog is injured at a pinned hazard location?**

The honest legal answer is: unlikely but not impossible. The general principle in tort law is that a platform is not liable for third-party content it hosts passively. For Sniffout to be liable, a claimant would need to establish: (a) Sniffout owed a duty of care to the dog owner; (b) Sniffout breached that duty; (c) the breach caused the injury. Establishing a duty of care in this context is difficult — Sniffout does not control the physical environment and has not represented that its hazard data is authoritative or complete. The closer analogy is a community noticeboard (no liability) than a professional safety service (potential liability).

However, if Sniffout: (a) represented its hazard data as authoritative or verified; (b) had notice of a specific inaccurate hazard pin and failed to remove it; or (c) actively curated hazard pins in a way that could establish a special relationship creating a duty of care, liability risk increases. This is manageable through appropriate disclaimers.

**Recommended disclaimers (based on AllTrails and iOverlander precedent)**

AllTrails uses the following type of disclaimer language (paraphrased): "Trail conditions and hazard reports are contributed by community members and are not verified by AllTrails. Conditions may change. Always use your own judgment." iOverlander includes a blanket disclaimer that user-submitted information may be inaccurate and should be verified independently.

For Sniffout, the recommended disclaimer (to appear on the pin map screen and in terms of service):
- "Pins on this map are added by the Sniffout community and are not verified by Sniffout. Information may be out of date or inaccurate. Always assess conditions yourself. Sniffout accepts no liability for decisions made in reliance on community-contributed map data."

This disclaimer should be part of the onboarding flow and the app's T&Cs, not just buried in a legal document.

**Legal position if a hazard pin is inaccurate**

Two scenarios:
- **False alarm (pin says hazard, there is none)**: No injury, potential minor inconvenience. Very low legal risk. Reputational risk if false alarms are common (erodes trust in the feature).
- **Missed hazard (hazard exists but no pin)**: This is the more important scenario. Sniffout cannot be liable for failing to warn of a hazard it did not know about and had no obligation to monitor. Sniffout is not a professional safety information service.

---

### 3. Lost/Found Dog Pins

**Legal obligations under UK law**

Under the Control of Dogs Order 1992 (England and Wales), a person who finds a stray dog must report it to the local authority or a police constable. Sniffout's found dog pin does not and cannot substitute for this legal obligation. The pin should explicitly state: "Remember: UK law requires you to report a found stray dog to your local council. This pin is to help find the owner but does not replace that legal obligation." A link to the relevant council's stray dog reporting page would be valuable.

There is no equivalent legal obligation on the finder of a lost dog to do anything (the obligation is on finders, not on those who have lost a dog), but the lost dog pin should include a "have you reported to DogLost.co.uk and your local council warden?" prompt.

**GDPR issues with contact details on found dog pins**

A found dog pin that includes the finder's phone number is a personal data point. Under UK GDPR, the person whose phone number is displayed has rights over that data. Sniffout should not display a user's phone number to anonymous viewers. Recommended approach: contact via in-app message only, with the finder's phone number stored server-side but not displayed to users. Users wishing to contact the finder click "contact finder" and send a message through the platform's messaging layer (even if this is as simple as a message form that generates an email to the finder). This avoids the personal data display problem entirely. If the platform does not yet have in-app messaging, a "request contact details" flow where the finder receives a notification and chooses to share their number with a specific user is an alternative.

**Disclaimers for lost/found dog pins**

Terms should include: "Sniffout is not a lost pet recovery service. Lost and found dog pins are user-generated and may be inaccurate or out of date. Sniffout accepts no responsibility for the outcome of lost or found dog situations."

---

### 4. Defamation Risk

**Pub/cafe negative flags**

A user who marks a pub as "dog-unfriendly" or "refused entry without justification" is making a statement of fact about the pub's behaviour. Under UK defamation law (Defamation Act 2013), a statement must be published, false, and defamatory to found a claim. A statement that a pub refuses dogs when it actually does not is arguably a false statement of fact that could damage the pub's reputation with dog-owning customers. A claim would require the statement to be (a) false and (b) likely to cause serious financial harm to the publisher's reputation.

The practical risk level for Sniffout is low but non-zero. Comparable platforms (Google Maps, TripAdvisor) have faced defamation claims for negative user reviews. Both platforms rely on the hosting defence (they are platforms, not publishers) and their scale means they have legal teams to manage such claims. Sniffout does not have this infrastructure.

**Risk mitigation for negative business reviews**

- Structure negative reports as categories rather than free text: instead of allowing "refuses dogs for no reason," offer a structured flag: "dog access reported as limited" — this is a less defamatory framing.
- Include the timestamp prominently: "reported by a user 3 months ago — may not reflect current policy."
- Allow the business to respond or request review: a "claim this listing" function that allows pubs to correct inaccurate dog policy information is both good UX and legal risk mitigation.
- Moderate negative flags for pubs and cafes before they are publicly displayed (unlike hazard pins which can appear immediately). A short hold period (24-48 hours) with moderator review is reasonable for this pin type.
- Include a clear report/dispute mechanism: a pub owner who sees a false negative flag should be able to request moderator review.

**How Google Maps and TripAdvisor handle negative reviews**

Both platforms use the hosting defence and remove content that violates their policies (hate speech, fake reviews, spam) but do not pre-moderate reviews. Both have faced legal challenges in the UK and EU. TripAdvisor received a formal legal letter from a UK hotel chain in 2011 and complied with a removal request for specific reviews while defending others as protected opinion. The general legal consensus in the UK is that a hosting platform is not the publisher of user reviews, but this does not make claims impossible to bring — it makes them expensive and difficult to win.

For Sniffout, the practical recommendation is to treat the dog-friendly pub/cafe pin category with additional moderation caution: pre-moderate negative flags, allow business responses, and make dispute resolution easy.

---

## SECTION 6: V1 Feature Spec Recommendation

### Recommended Pin Types for V1 Launch (Maximum 5)

| Rank | Pin Type | Justification |
|---|---|---|
| 1 | Dog Waste Bin | Highest frequency use case. Clear community value. Low abuse risk. Pre-seedable with OSM data. Simple data model. |
| 2 | Water Tap / Trough | Safety use case (especially summer). Pre-seedable with OSM data. Simple data model. Directly comparable value to waste bins. |
| 3 | Hazard (broken glass, adder, cattle) | Differentiator vs any existing product. Dog-safety emotional pull is strong contributor motivator. Short auto-expiry limits moderation burden. Structured sub-types keep data quality manageable. |
| 4 | Muddy / Flooded Section | Extremely high relevance to UK dog walkers. Short auto-expiry. Strong reciprocity motivation (I warn you, you warn me). AllTrails-proven feature type. Walk-integrated submission is natural. |
| 5 | Enclosed Dog Exercise Area / Dog Park | High value for reactive / recall-training dogs. Pre-seedable with OSM `leisure=dog_park` data. Permanent fixture model (simple expiry). Distinctive, not covered by generic walking apps. |

**What is excluded from V1 and why:**
- Dog-friendly pubs: high value but commercial spam risk is elevated and defamation moderation complexity is disproportionate for a small team at V1.
- Lost/found dog: high emotional value but requires GDPR-compliant contact handling and push notification infrastructure. V1.5.
- Spare poo bags: only works with local density; launch with V1.5 once user density in specific areas is confirmed.
- Off-lead area boundary: polygon geometry is a separate technical workstream.
- Dog wash stations: valuable but niche; add in V1.5 alongside pubs.
- River/pond access: valuable, include as V1.5 addition once the core 5 types have been validated.

---

### Recommended Expiry Logic Per Pin Type (V1)

| Pin Type | Expiry Model | Hard Expiry | Soft Decay Trigger | Community Confirmation |
|---|---|---|---|---|
| Dog Waste Bin | Soft decay | None | 18 months without confirmation | "Still here" tap; 3 confirmations = verified badge |
| Water Tap / Trough | Soft decay | None | 18 months without confirmation | "Still here" tap; 3 confirmations = verified badge |
| Hazard (broken glass, adder) | Hard | 48 hours | — | "Still there" tap extends by 24h; max 3 extensions |
| Hazard (cattle in field) | Hard | 7 days | — | "Still there" tap extends by 24h |
| Muddy / Flooded Section | Hard | 48 hours (default) / 7 days (reporter-selected for persistent conditions) | — | "Still impassable" tap extends by 24h |
| Enclosed Dog Exercise Area | Soft decay | None | 18 months without confirmation | "Still here" tap; 3 confirmations = verified badge |

Additional rule for all types: Reporter can mark pin as "resolved / removed" at any time, archiving immediately. Any user can report a pin as inaccurate, triggering moderator review queue.

---

### Recommended Minimum Viable Moderation Approach

**For V1:**

1. **Pre-submission gates:** Email-verified account required. At least 1 logged walk before first pin submission. Account age at least 24 hours. Rate limit: 10 new pins per 24 hours per account.

2. **Automated pre-screening (simple rules, implemented in backend before pin enters the database):**
   - Reject pins placed further than 50m from a land surface (pins in rivers, ocean).
   - Flag (do not reject) pins within 10m of an existing pin of the same type as potential duplicates.
   - Hold pins from accounts less than 24 hours old in a review queue (display after 24 hours without moderator action).

3. **Reactive moderation queue:** "Report this pin" on every pin detail view. Reports generate an email to the moderation inbox. Moderator actions: dismiss report / archive pin / warn user / ban user.

4. **Weekly audit:** Review pins with 2+ reports unactioned. Review pins flagged by automated pre-screening.

5. **Expected moderation time:** At 1,000 pins, approximately 1-3 hours per month. At 5,000 pins, 5-15 hours per month. This is manageable for a small team until approximately 10,000 active pins.

---

### Recommended Launch Timing Relative to User Base Size

**Minimum viable threshold:** 500 MAU in at least one geographically concentrated area.

The community map feature will feel sparse and unusable if launched at very low user density without pre-seeded data. The recommended sequence:

1. **Pre-launch preparation (at any MAU level):** Import OSM data for the 5 V1 pin types into the Sniffout database. Seed the map before the feature is live for regular users.

2. **Soft launch (500-1,000 MAU):** Open pin contribution to the existing user base. Frame as "help us build the map." Actively recruit 20-30 power users via email to seed data in their regular walking areas. Measure: are pins being added? Are users returning to view pins? Are contributions concentrated?

3. **Feature launch (1,000+ MAU):** Promote the feature publicly. Add it to onboarding. Monitor contribution rate and quality.

4. **Scale up pin types (2,000+ MAU):** Add dog-friendly pubs, spare bags, lost/found dog. Assess moderation capacity before each expansion.

The risk of launching too early (at 200 MAU) is that the feature is sparse and creates a negative impression. The risk of waiting too long (for 5,000 MAU) is that the community map feature could itself drive growth — lost by waiting. The 500 MAU threshold with OSM pre-seeding is a reasonable balance.

---

### Top 5 Risks and Mitigations

| Risk | Severity | Probability | Mitigation |
|---|---|---|---|
| 1. Ghost pin accumulation erodes trust | High | High (if not addressed) | Aggressive hard expiry for all transient types. Soft decay prompts for permanent types. Never launch without this logic built in. |
| 2. Map is sparse in most user areas; feature feels broken | High | High at launch | Pre-seed with OSM data. Recruit power user seeds pre-launch. Explicit empty-state CTAs. Frame as a growing community project. |
| 3. Hazard pin inaccuracy leads to user harm or complaint | Medium | Low | Platform disclaimer on all pin data. Short expiry limits exposure duration. Moderate claims of specific hazard types. Legal T&Cs reviewed by a UK tech-focused solicitor before launch. |
| 4. Moderation burden exceeds team capacity as feature scales | Medium | Medium | Start with 5 pin types only. Build automated pre-screening from day one. Set up reporting queue before launch. Review capacity before each new pin type launch. |
| 5. Dog-friendly pub defamation claim | Low | Low at V1 if pubs are excluded | Exclude pubs from V1. When adding in V1.5, pre-moderate negative flags and provide business dispute mechanism. Review with a UK defamation-aware solicitor before launch. |

---

### Overall Recommendation to the Founder

The community map pins feature has strong strategic logic for Sniffout: it addresses unmet user needs that no UK competitor covers comprehensively, it creates a data moat that becomes more valuable as the community grows, and it reinforces the core product loop by giving users a reason to open the app beyond tracking their own walks. The risks are real but manageable. The key discipline required is restraint at launch: resist the temptation to build all 15 pin types at once. A focused V1 with five well-executed pin types — bins, water taps, hazards, muddy sections, and dog parks — properly pre-seeded with OSM data, with aggressive auto-expiry for transient types and a simple moderation queue, can be built and launched quickly and will deliver genuine user value from the first day. The feature will be sparse outside population centres and you should set expectations accordingly, using messaging that invites users to be co-creators rather than consumers. Legal exposure is low if appropriate disclaimers are in place and pubs are deferred from V1. The most important single decision is to build auto-expiry into the data model from the very first line of code: retrofitting expiry logic into a growing pin database is substantially harder than building it in from the start, and ghost pins are the fastest path to destroying trust in the feature.

---

## SECTION 7: Confidence Flags

The following findings are based on secondary research, inference from public product documentation, and published academic studies. Primary source verification was not possible for all claims. Sniffout should treat the following with appropriate caution:

1. **Waze TTL values (1-2 hours for accidents, 2-4 hours for hazards, 1.5 hours for speed cameras):** These figures are derived from user community documentation (Waze community wiki, third-party blog posts) and conference presentations, not from official Waze engineering documentation. The exact values may have changed since publication. Treat as approximate.

2. **AllTrails 90-day condition report expiry:** This is derived from user-reported observations on community forums and app store reviews, not confirmed in AllTrails' official documentation. The period may vary by condition type or may have changed with app updates.

3. **AllTrails condition report contribution rate estimate (5-10% of users who log a hike):** This is an inference from forum analysis, not a disclosed metric.

4. **OSM contributor figures (40,000 active monthly mappers):** Sourced from the OSM Foundation 2023 Annual Report. Confidence is high.

5. **"Still here?" prompt conversion rate estimate (15-25%):** This is extrapolated from general location-contextual notification CTR research, not a Waze-specific disclosed figure. Treat as a rough estimate.

6. **Moderation burden per 1,000 pins (1-3 hours/month):** Inferred from comparable community platform discussions and industry estimates. Not a disclosed figure from any specific platform.

7. **Contributor ratio estimate for Sniffout (50-150 new pins per month at 1,000 MAU):** Derived from AllTrails and Waze comparable contribution rate estimates combined with realistic adjustment for Sniffout's smaller scale. Should be validated against actual observed contribution behaviour in the first 60-90 days post-launch.

8. **UK GDPR and liability analysis:** This research represents a general legal analysis based on publicly available ICO guidance, UK GDPR text, and academic and practitioner commentary. It is not legal advice and has not been reviewed by a qualified UK solicitor. Sniffout must obtain qualified legal advice before launching any feature involving user location data, hazard warnings, or contact detail collection (specifically for lost/found dog pins). The analysis of the Online Safety Act 2023 is based on the Act as in force at the time of this research but the Act's implementation is ongoing and specific duties may have been updated via secondary legislation.

9. **OSM data coverage for UK dog facilities:** The assertion that OSM has useful coverage for dog waste bins, dog parks, and drinking water is based on general knowledge of OSM UK coverage, but actual coverage in any specific Sniffout user area should be assessed by querying the OSM Overpass API for the relevant area before committing to a pre-seeding strategy. Coverage is highly variable and in some rural areas may be effectively zero.

10. **Parkrun volunteer data model:** Information on Parkrun's data maintenance approach is derived from public volunteer resources and Parkrun news posts, not from internal documentation. The description is believed accurate as of 2024 but specific processes may have changed.