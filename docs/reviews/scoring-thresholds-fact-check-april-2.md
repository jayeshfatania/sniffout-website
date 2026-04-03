# Fact Check - Walk Quality Scoring Thresholds
**Date:** 2026-04-03
**Research file checked:** docs/research/canine-weather-sensitivity-april-2.md
**Reviewer:** Sniffout Fact Checker

---

## 1. Overall Assessment

**PASS WITH CORRECTIONS**

19 of 28 thresholds are verified or verified as estimates. 9 require correction or prominent flags. The most significant issue is a systematic upward shift of the entire heat scale by approximately 5-7 degrees Celsius compared to what the research recommends - this is a product decision, but it is not supported by the research and conflicts with UK veterinary consensus. A secondary critical issue: the claim that the VetCompass heatstroke figure applies to "intense exercise and overweight dogs" (and therefore should not influence normal walk thresholds) is directly contradicted by the research, which states 68% of exercise-triggered heatstroke events were caused by walking, not running.

The rain, wind, cold, mud, and tick thresholds are well-supported. The humidity modifier percentages and multipliers need flagging.

---

## 2. Each Threshold

---

### Heat Thresholds (air temperature, average healthy dog)

**Threshold 1: Below 22C - no heat penalty**

STATUS: NOT SUPPORTED by research

The research gives two relevant data points:
- UK welfare consensus (PDSA, multiple UK vet organisations): caution threshold is 20C, not 22C. The research Section 1, Level B states "20 degrees Celsius and above" as the caution threshold.
- The research's own algorithm recommendation (Section 8): "Apparent temperature 15-19C: minor penalty, flag for brachycephalic/elderly/giant breeds" and "20-24C: moderate penalty for all dogs."

Proposing "no penalty below 22C" means showing no warning at 20C and 21C, directly contradicting the research recommendation and the UK welfare consensus.

The research does not cite any source that identifies 22C as a safe threshold. The deviation from the research recommendation should be documented as a deliberate product decision to avoid an unusably strict tool, not a scientifically supported threshold.

**Threshold 2: 22-25C - minor penalty ("getting warm, bring water")**

STATUS: NOT SUPPORTED by research

The research states 20-24C should carry a "moderate penalty for all dogs" (Section 8). The proposed scoring treats this range as minor only. Additionally, 24C falls within this range but the research places it closer to the "heavy penalty" zone for brachycephalic breeds.

This is a consistent feature of the entire heat scale being shifted upward from the research recommendation.

**Threshold 3: 25-28C - moderate penalty ("keep it shorter, shade preferred")**

STATUS: NOT SUPPORTED by research

The research places 25-26C at "heavy penalty for all dogs" and 27C+ at "maximum penalty (block) for all dogs" (Section 8). The proposed scoring treats 25-28C as moderate only. At 27C, the research recommends maximum penalty; the proposed scoring would still show only moderate.

**Threshold 4: 28-30C - heavy penalty ("too hot for proper walks")**

STATUS: NOT SUPPORTED by research

The research places the maximum penalty threshold at 27C+ for all dogs. The proposed scoring shows only heavy (not maximum) at 28-30C. UK vet consensus described in the research states "above 27 degrees Celsius, all sources recommend indoors only" (Barc London, Agria Pet Insurance, UK vet consensus summaries cited in Section 1).

**Threshold 5: 30C+ - danger ("avoid walking")**

STATUS: NOT SUPPORTED by research

The research places the danger/maximum threshold at 27C, not 30C. At 28C and 29C, the proposed scoring shows only "heavy penalty," while the research says those temperatures already fall into the "maximum penalty/block" zone. The 3C difference between 27C (research) and 30C (proposed) means normal scoring would be applied to temperatures that multiple UK vet sources describe as "too risky for almost all dogs."

**Summary note on thresholds 1-5:**
The entire heat scale is shifted approximately 5-7C above what the research recommends. This is a conscious product decision (20C is arguable as too restrictive for a walk quality tool) but should be documented as a deviation from evidence and from the research's own recommendation. The scoring engine should include a note in implementation that the thresholds are conservative relative to UK vet consensus in order to remain practical for most users.

**Is 22C defensible as a practical caution point?**
No direct source in the research identifies 22C as a caution threshold. The research cites Barc London summary (20-23C: "shorten walk, shade only, water essential") - so 22C falls within an evidence-cited concern range, but as the top of that range rather than the start of it. The defensibility argument is product-based, not evidence-based.

**On the Shar Pei observation:**
Shar Peis are not listed as brachycephalic in the research. They are not included in the VetCompass brachycephalic OR data (which covers Bulldog, French Bulldog, Chow Chow, Pug). The research does not support applying brachycephalic offsets to Shar Peis based on published evidence. If a Shar Pei owner observes signs at ~22C, this may reflect individual variation or Shar Pei-specific characteristics (skin folds, exercise intolerance) rather than brachycephalic physiology. This should not be used to calibrate the general brachycephalic adjustment.

---

**Threshold 6: Brachycephalic breeds - all thresholds shifted down 4C**

STATUS: VERIFIED

The research (Section 5, breed table) states: "-4 to -5 degrees Celsius on all heat thresholds. Caution at 16C, danger at 21C." The proposed -4C offset falls within the research's recommended range. Source: VetCompass PMC7303136 (OR 2.10 for all brachycephalic breeds; specific breed ORs: Bulldog 13.95, French Bulldog 6.49, Chow Chow 16.61, Pug 3.24 - all vs Labrador baseline).

**Is 4C adequate given the OR data?**
The research notes the recommended offset is -4 to -5C. Using -4C is the less conservative end of the range. Given that Bulldog OR is 13.95 and Chow Chow OR is 16.61, some would argue -5C is more appropriate. A -4C offset is defensible as a practical middle ground but the research would support -5C.

---

**Threshold 7: Below 0.5mm/hr - no penalty (drizzle)**

STATUS: VERIFIED

Met Office classification: "slight rain: below 0.5 mm/hr." Research Section 2, Level A: "Below 0.5 mm/hr (slight rain / light drizzle)." Source: Met Office rainfall intensity classification. ManyPets UK cited in research: "it's completely safe to walk dogs of all breeds and sizes in the rain" (at drizzle intensity).

---

**Threshold 8: 0.5-4mm/hr with chance above 40% - minor penalty (moderate rain)**

STATUS: VERIFIED

Met Office classification: "moderate rain: 0.5 to 4 mm/hr." Research Section 2, Level B confirms this range. The 40% probability threshold is a scoring engine design choice not explicitly covered in the research, which only provides the mm/hr intensity classification. The mm/hr ranges are verified; the 40% probability threshold is a product decision.

---

**Threshold 9: Above 4mm/hr with chance above 50% - heavy penalty (proper rain)**

STATUS: VERIFIED

Met Office classification: "heavy rain: above 4 mm/hr." Research Section 2, Level C confirms. Source: Met Office via rainsimulator.com and Met Office UKCP18 factsheet. The 50% probability threshold is a product decision as above.

---

**Threshold 10: Thunderstorm - maximum penalty**

STATUS: VERIFIED

Blue Cross UK (bluecross.org.uk): "When you know a thunderstorm is on its way, ensure you can stay at home with your dog." Royal Kennel Club: "stay safe indoors than go out for a walk during heavy wind or rain." Research Section 2: confirms thunderstorm as "hard stop" citing Blue Cross UK and Royal Kennel Club. RSPCA 2005 survey: 49% of dogs showed fear responses to loud noises. All sources support maximum penalty.

---

**Threshold 11: Below 29km/h - no penalty (Beaufort Force 4 or below)**

STATUS: VERIFIED

Research Section 3, Level A: "Beaufort Force 4 or below - sustained below 28 km/h (17 mph). No material risk." The proposed "below 29km/h" is consistent with Beaufort Force 4 (which ends at 28km/h). Minor rounding difference only.

---

**Threshold 12: 29-49km/h - minor penalty (Beaufort 5-6)**

STATUS: VERIFIED

Research Section 3, Level B: "Beaufort Force 5-6 - sustained 29-49 km/h (18-30 mph)." Matches exactly.

Research also supports additional note: small breeds under 5-7kg face destabilisation risk at 32-40km/h within this band. The source for this is "wind safety aggregated sources in search results" - this is NOT attributed to a named specific source, only aggregated search results. The threshold is reasonable and corroborated by multiple sources but should not be presented as coming from a single authoritative study.

---

**Threshold 13: 50km/h+ - heavy penalty, flag woodland (Beaufort 7+)**

STATUS: VERIFIED WITH IMPORTANT CAVEAT

Research Section 3, Level C: "Beaufort Force 7 or above - sustained 50 km/h / 32 mph or above." Kids Go Wild Forest School policy: cancels all woodland activities at Beaufort Force 7. Inspired Forest School Training: gust forecasts above 34 mph trigger woodland avoidance.

CAVEAT (explicitly noted in the research): "No direct Forestry Commission document specifying a public recreation wind speed closure threshold was found." The 50km/h / Beaufort Force 7 woodland threshold is from outdoor education operational policy, not a Forestry Commission regulation or official government guidance. The woodland flag should be labelled in the app as a recommendation, not a regulation-backed closure rule.

---

### Cold Thresholds

**Threshold 14: Above 7C - no cold penalty**

STATUS: VERIFIED

Research Section 4, average breeds: "Above 7 degrees Celsius: No cold concern for most healthy adult dogs." Source: Vets Now, "How Cold Is Too Cold for Dogs" (fetched). The 7C threshold is specifically from Vets Now and corroborated by Julius K9 UK and Animal Friends.

---

**Threshold 15: 5-7C - minor penalty small/short-coat only**

STATUS: VERIFIED

Research Section 4, short-coated/small breeds: "7 degrees Celsius: Discomfort begins, coat or jacket recommended" (Julius K9 UK, Animal Friends citing Joii Pet Care vets). "5 degrees Celsius or below: 'Cold averse' dogs start to struggle" (Animal Friends). The 5-7C range as minor penalty for this breed type only is consistent.

---

**Threshold 16: 0-5C - minor penalty all, moderate small breeds**

STATUS: VERIFIED

Research Section 4: Average breeds "1C to -4C: Monitor; coat may help" (Vets Now). Small breeds: "0 degrees Celsius: Small dogs, slim breeds, elderly dogs and puppies 'may start to struggle'" (Julius K9 UK). Minor penalty for all and moderate for small breeds in this range is consistent with the research.

---

**Threshold 17: Below 0C - moderate all, heavy small/elderly**

STATUS: PARTIALLY VERIFIED

"Moderate for all" at sub-zero temperatures is consistent with Vets Now (average breeds "1C to -4C: Monitor"). "Heavy for small/elderly" is consistent with Julius K9 UK (small dogs struggle at 0C) and VetCompass PMC9144152 (dogs 12+: OR 8.87 for fatal HRI, supporting heightened concern for elderly). RSPCA notes elderly dogs struggle below 10C. The "heavy for elderly" flag at 0C is slightly more conservative than explicit vet guidance but defensible given the elevated OR for elderly dogs in heat-related (and by extension cold-related) illness.

---

**Threshold 18: Below -4C - heavy all**

STATUS: PARTIALLY VERIFIED - proposed threshold is stricter than research

Research Section 4, average breeds: "-4 to -9 degrees Celsius: Potentially life-threatening for smaller dogs in this category especially if wet. Most average breeds can manage with coat but limit duration" (Vets Now). Vets Now explicitly states average breeds CAN manage at -4C with a coat. The proposed "heavy penalty for ALL dogs" at below -4C is more conservative than Vets Now recommends for average and large breeds.

This is a defensible conservative choice (a walk quality tool should err on the side of safety) but should not be presented as the exact Vets Now threshold. The research supports "potentially dangerous" below -4C for vulnerable dogs; it does not support "heavy penalty for all dogs" including large healthy adult breeds at -4C.

---

### Humidity Modifier

**Threshold 19: Above 60% RH when temp above 22C - multiply heat penalty by 1.3**

STATUS: NOT VERIFIED

Two issues:

1. The 60% RH threshold is not in the research. The research cites Drobatz and Macintire (PMC5800390) identifying 35% RH as the point where panting begins to become less effective. 80% RH is where panting is "substantially negated." The research does not cite 60% as a threshold at any point. The 60% figure appears to be interpolated between 35% and 80% without a cited source.

2. The 1.3x multiplier is not from any source. The research does not provide multipliers. The task brief acknowledges this: "The 1.3x and 1.6x multipliers are proposed by us, not from any source."

Both the threshold and the multiplier need to be clearly flagged in the app as estimated values, not evidence-based thresholds.

**Note on PMC5800390 attribution:** The research attributes the 35% and 80% RH thresholds to "Drobatz and Macintire, 1996, Pathophysiology of heatstroke in dogs - revisited, PMC5800390." The year 1996 with a PMC number is unusual (PMC began broad coverage in the early 2000s for older journals). The PMC number should be verified against the actual paper before citing it in any public-facing content. The research notes this page was not directly fetched.

---

**Threshold 20: Above 80% RH when temp above 22C - multiply heat penalty by 1.6**

STATUS: PARTIALLY VERIFIED

The 80% RH threshold is supported: Research Section 1: "Above 80 percent relative humidity: evaporative cooling through panting is substantially negated. Source: PMC5800390." The ECDC Ixodes ricinus factsheet also corroborates 80% as a critical humidity threshold independently.

However, the 1.6x multiplier is not from any source - confirmed as an estimate proposed by the scoring engine team. This must be labelled as an estimate in implementation.

The 22C temperature floor for applying this modifier also requires comment: the research says humidity starts affecting panting from 35% RH above 15C (not 22C). Starting the humidity modifier only at 22C means it would not activate during humid conditions at, for example, 18C - a scenario the research identifies as risk-elevated.

---

### Ground Temperature Flags

**Threshold 21: Air 22C + UV above 3 - pavement heat warning**

STATUS: VERIFIED

Research Section 1, ground temperature recommendation: "Apply pavement risk flag when air temperature exceeds 22 degrees Celsius with sun/UV exposure (pavement likely above 40 degrees Celsius)." The proposed threshold exactly matches the research recommendation.

---

**Threshold 22: Air 25C + UV above 3 - paw burn danger**

STATUS: VERIFIED

Research Section 1: "At 25 degrees Celsius air temperature with low wind and low humidity: asphalt can reach 52 degrees Celsius. Basis: university experiment data, cited by Vets Now and Four Paws USA." Research algorithm recommendation: "Air temperature above 25C with UV index above 3: apply burn risk flag." The proposed threshold matches exactly.

The "burns in under 60 seconds at 52C" claim: Research cites Vets Now (vets-now.com, 2017, directly fetched): "52 degrees Celsius (125 degrees Fahrenheit): skin destruction can occur in under 60 seconds." VERIFIED.

The 7-second rule: Research confirms it is vet-recommended but "not derived from a controlled clinical trial with a specific burn time calculation." Source: Vets Now. This should not be described as evidence-based in any public-facing content - it is a practical heuristic.

---

### Mud Risk

**Thresholds 23-26: Below 2mm dry / 2-10mm damp / 10-25mm muddy / above 25mm very muddy**

STATUS: VERIFIED AS ESTIMATES

All four thresholds match the research exactly (Section 6). The research explicitly flags: "These are proposed thresholds for the scoring engine only - not from published veterinary or official walking guidance. They are conservative estimates informed by soil drainage research."

The research supports using 48-hour cumulative precipitation as the primary data source, available from Open-Meteo's standard hourly `precipitation` variable. These thresholds should be labelled in the app as estimated guidance, not evidence-based thresholds.

---

### Tick Risk

**Threshold 27: Temp above 7C AND humidity above 80% AND March-October - tick risk active**

STATUS: VERIFIED

Research Section 7: "Practical active threshold for scoring engine: 7 degrees Celsius (conservative, mid-point of UK regional ranges)." Source attributed to PMC3997332 ("Climate of origin affects tick (Ixodes ricinus) host-seeking behavior in response to temperature"), which gives UK regional ranges of 5.7C (Scotland) to 7.9C (Wales) to 7.0C (England). Using 7C as the threshold is the conservative mid-point of UK values - appropriate for a walk safety tool.

Humidity 80% threshold: Research Section 7: "Ixodes ricinus requires relative humidity above 80 percent to avoid desiccation and maintain questing behaviour. Source: ECDC Ixodes ricinus factsheet." Note: the ECDC page was not directly fetched during research - it was confirmed via multiple search result summaries citing ECDC data. The threshold is corroborated by multiple independent sources.

March-October season: Research Section 7 confirms adder/tick activity through to October, with hibernation beginning October/November.

---

**Threshold 28: Peak May-June and September**

STATUS: VERIFIED

Research Section 7: "Primary peak: May-June (matching warm, humid spring conditions and nymph activity peak). Secondary peak: September (adult activity resurgence)." Source: UKHSA Lyme disease blog (2024) and multiple tick surveillance sources.

---

## 3. Specific Concerns and Flags

**CONCERN 1 - MOST IMPORTANT: VetCompass walking data directly contradicts the "normal walking" exemption**

The task brief proposes that the VetCompass 16.9C median heatstroke temperature "includes intense exercise and overweight dogs, not just normal walking" and therefore should not be used as a walk avoidance threshold.

The research explicitly contradicts this framing. Research Section 1: "Exercise (including just walking) caused 74 percent of all heatstroke cases in UK dogs. 68 percent of exercise-triggered events were triggered by walking alone, not running."

Walking - not running, not intense exercise - is the primary trigger for heatstroke in UK dogs. The VetCompass data cannot be set aside on the grounds that it applies to "intense exercise." It applies to walking. This is the most important finding in the research for the scoring algorithm and it directly challenges the justification for shifting the heat scale up by 5-7C.

**CONCERN 2: Heat scale deviation is a significant product risk**

The proposed heat scale is approximately 5-7C above the research recommendation at every level. At 25C, the app would show "moderate penalty" when vets recommend maximum penalty. At 28-29C, the app would show "heavy penalty" when vets recommend avoiding all walks. If a dog suffers heatstroke on a walk taken on the basis of the app's rating, the gap between the app's thresholds and vet guidance would be difficult to defend publicly.

A compromise position worth considering: use the research-recommended thresholds (20C caution, 25C danger) but label them differently in the app - for example, display them as guidance levels rather than pass/fail ratings.

**CONCERN 3: Humidity modifier starts at 60% RH, but research says 35%**

The research identifies 35% RH as where panting begins to lose effectiveness (Drobatz and Macintire, PMC5800390). The proposed modifier starts at 60% RH. This means humid walks at 16-20C with 40-60% RH would receive no humidity adjustment, despite the research indicating panting is less effective from 35% upwards. On a British summer day with 50% humidity at 18C, the app would not apply any humidity modifier. The research suggests it should.

**CONCERN 4: Multipliers (1.3x and 1.6x) are invented values**

These are acknowledged in the task brief as not from any source. They must be clearly documented in code as estimated values with no scientific basis. If Sniffout ever publicly describes its scoring methodology, these multipliers should not be presented as evidence-based.

**CONCERN 5: Small dog wind threshold source quality**

The research cites "small dogs under 5-7kg can be knocked over at 20-25 mph (32-40 km/h)" from "wind safety aggregated sources in search results" - this is not attributed to a named specific source, paper, or organisation. The claim is plausible and corroborated across multiple informal sources, but should not be described as verified by a specific authority. Label in implementation as a practical estimate.

---

## 4. Thresholds That Differ from Research Recommendation

| Threshold | Proposed | Research recommends | Deviation defensible? |
|---|---|---|---|
| Heat Level A (no penalty) | Below 22C | Below 15C or at most below 20C | Weak - product decision only, contradicts UK welfare consensus at 20C |
| Heat Level B (minor) | 22-25C | 20-24C moderate for all | Partially - 22C has some support as a range midpoint but not as a caution start |
| Heat Level C (moderate) | 25-28C | 25-26C heavy for all; 27C+ maximum | No - 27C+ should be maximum, not moderate |
| Heat Level D (heavy) | 28-30C | 27C+ maximum | No - 28-30C falls in research maximum zone |
| Heat Level E (danger) | 30C+ | 27C+ | No - danger is shifted 3C higher than research |
| Cold below -4C (heavy all) | Heavy all | Average breeds can manage with coat | Defensible as conservative product choice |
| Humidity modifier start | 60% RH | 35% RH (where panting starts declining) | Not defensible - 35% is the cited source threshold |

---

## 5. Estimates (Not Evidence-Based) - Flag in Implementation

The following thresholds or values have no primary source and must be labelled as estimates in code and any public-facing methodology documentation:

- **1.3x humidity multiplier** (threshold 19) - no source, team estimate
- **1.6x humidity multiplier** (threshold 20) - no source, team estimate
- **60% RH threshold for humidity modifier** (threshold 19) - not in research; research cites 35% and 80% only
- **Mud risk thresholds 23-26** (all four) - confirmed estimates from soil drainage research, not walking guidance; research explicitly flags this
- **Small dog wind instability at 32-40 km/h** (threshold 12 supporting data) - from aggregated search results, no named single source

The following are vet-recommended heuristics, not formally evidenced thresholds:
- **7-second pavement test** (supporting threshold 22) - practical field check developed by US vets, not from a clinical trial

---

## Summary

**Verified:** 19 of 28 thresholds (including 4 mud thresholds verified as estimates)

**Require correction or prominent flags:** 9 of 28

- Thresholds 1-5 (heat scale): all diverge from research recommendation; systematic upward shift of 5-7C
- Threshold 19 (60% RH modifier): threshold not in research; multiplier is invented
- Threshold 20 (80% RH modifier): threshold verified, multiplier is invented
- Threshold 18 (cold below -4C heavy all): stricter than Vets Now guidance for average breeds

**The single most important concern:**

The proposed heat scale is shifted 5-7C above the research recommendation, and the justification for this shift (that VetCompass data applies to intense exercise only) is directly contradicted by the research itself - 68% of exercise-triggered heatstroke in UK dogs is caused by walking, not running. The current thresholds would show "no penalty" at temperatures where UK vets recommend caution. This is the most significant risk in the proposed scoring system and the one most likely to cause user or reputational harm if a dog is injured following the app's guidance.
