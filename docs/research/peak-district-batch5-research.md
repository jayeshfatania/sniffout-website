# Peak District Batch 5 Walk Research
Date: 2026-04-09
Researcher: Sniffout Research
Purpose: Verify WALKS_DB data for Stanage Edge; research Dovedale, Mam Tor, and Kinder Scout for new walk pages

---

## CORRECTIONS SUMMARY

| Walk | Field | Current Value | Correction | Severity |
|------|-------|---------------|------------|----------|
| Stanage Edge (WALKS_DB) | livestock | false | WRONG - change to true. Sheep graze across the moor year-round. Walk page body text and dogSummary already acknowledge sheep. Hazards array already includes 'livestock' - this is the inconsistency that must be resolved. | CRITICAL |
| Stanage Edge (WALKS_DB) | difficulty | hard | REVIEW - website page says Moderate, WALKS_DB says hard. Path along the edge is well-made and not technical, but exposure and route length push it above easy. Moderate is the more accurate designation for most users. Recommend: change to 'moderate'. | MODERATE |
| Stanage Edge (WALKS_DB) | lat/lon | 53.3512, -1.6497 | MINOR DISCREPANCY - website page uses 53.3541, -1.6392. The WALKS_DB coordinates resolve closer to the road above Moscar; the website coordinates resolve closer to Hollin Bank car park. Hollin Bank car park (S32 1BR) is the most commonly cited start point. Recommend: update WALKS_DB to match website coordinates (53.3541, -1.6392) or use Hollin Bank specifically: 53.3533, -1.6367. | MINOR |
| Stanage Edge (WALKS_DB) | distance | 6.8 miles (10.9km) | MINOR DISCREPANCY - website page says 10.3km. Multiple sources quote 10-11km for the standard Hollin Bank circuit. 6.8 miles (10.9km) is plausible for a longer variant. No significant error; keep for PWA. | MINOR |

---

## WALK 1: Stanage Edge and Hathersage Moor

### WALKS_DB entry (current)

```
id: 'stanage-edge'
name: 'Stanage Edge & Hathersage Moor'
location: 'Hathersage, Derbyshire'
lat: 53.3512, lon: -1.6497
description: [see file]
distance: 6.8, duration: 175, difficulty: 'hard', terrain: 'rocky', environment: 'moorland'
offLead: 'full', enclosed: false, livestock: false, hasStiles: false, hasParking: true
badge: 'Popular', rating: 4.8, reviewCount: 334
hazards: ['adders', 'livestock', 'cliff']
```

**Critical inconsistency:** livestock: false while hazards includes 'livestock'. The walk page body text and dogSummary both mention sheep grazing across the moor. livestock should be true.

**Difficulty discrepancy:** WALKS_DB says 'hard'. Website walk page says 'Moderate'. The path along the gritstone edge is well-worn and not technical; the moorland return is rougher. The walk's challenge comes primarily from length and exposure, not terrain difficulty. 'Moderate' is the more accurate and less discouraging designation. Recommend changing WALKS_DB to 'moderate'.

### 2. Verified Data

| Field | App Says | Verified |
|-------|----------|----------|
| Distance | 6.8 miles | BROADLY CORRECT - the Hollin Bank circular is typically cited at 10-11km (approximately 6.2-6.8 miles). No significant error. |
| Off-lead | Full | CONFIRMED with caveats - CRoW open access land. Lead legally required 1 March to 31 July for ground-nesting birds. Sheep require leads near livestock. Off-lead is possible in practical terms outside these constraints, but 'full' overstates it. 'Partial' may be more honest given livestock presence year-round. |
| Livestock | False | WRONG - sheep graze the moor year-round. Hazards array also includes 'livestock', confirming the data is inconsistent. Change to true. |
| Hazards | adders, livestock, cliff | CONFIRMED CORRECT (once livestock field is fixed) - adders are confirmed on the Eastern Moors below the edge (designated adder habitat). The eastern gritstone face has significant drops where climbers operate. |
| hasStiles | false | CONFIRMED - the main edge path and moorland return do not use stiles. |
| Parking | true | CONFIRMED - Hollin Bank car park (National Trust, S32 1BR) and Dennis Knoll car park (S11 7TY) are the primary car parks. Seasonal charges apply. |

### 3. Access and Off-Lead Rules

Stanage Edge sits on CRoW open access land. Key requirements:

- **CRoW Act lead requirement:** 1 March to 31 July, dogs must be on a lead no longer than 2 metres on open access land to protect ground-nesting birds (curlew, golden plover, lapwing breed on these moors).
- **Livestock:** Sheep graze the moor broadly between the edge and Moscar. Lead required near livestock.
- **Grouse moor management:** The Eastern Moors below the edge (managed by the National Trust and RSPB as Eastern Moors Partnership) are active grouse moor. Shooting season begins 12 August. No formal access closure but local signage will indicate shooting activity. Keep dogs under close control during shooting days.
- **Climbing face:** The eastern face of the gritstone edge is one of the most popular climbing locations in the UK. The drops on the eastern side are significant (up to 15-20 metres in places). Dogs must not be allowed near the rim without a lead.

### 4. Practical Details

**Parking:**
- Hollin Bank car park (National Trust): S32 1BR. Primary car park, approximately 1km east of the southern end of the edge. NT members free, others pay. Open year-round.
- Dennis Knoll car park: S11 7TY. Approaching from the north/Sheffield side. Pay and display.
- Hooks Car: S32 1BR area (slightly east of Hollin Bank). Smaller layby-style parking.
- The Plantation car park near the A6187 is also used by walkers approaching from Hathersage.

**Nearest dog-friendly pub/cafe:**
- The Norfolk Arms, Ringinglow, Sheffield S11 7TS. Dog-friendly. Approximately 3km from the Dennis Knoll end of the edge. Traditional country pub.
- Hathersage village (2-3km from Hollin Bank) has several dog-friendly options including the George Hotel and Longlands Eating House.
- The Scotsman's Pack Inn, Hathersage, S32 1DD. Known dog-friendly pub in the village.

**Facilities:**
- No facilities on the edge itself.
- Hathersage village has cafes, pubs, shops, and a heated outdoor swimming pool (Hathersage Swimming Pool, dog-friendly car park area).
- Hathersage railway station (Sheffield to Manchester Hope Valley line) - 2-3km from the edge. Good public transport option.

### 5. Hazards for Walk Page

- **Adders:** Eastern Moors (below the edge, to the east) are designated adder habitat. Active April to September. Bracken and tussock areas on descent paths. Keep dogs out of deep undergrowth. See /guides/adder-bites-dogs-uk/.
- **Ticks:** Active March to October on heather and bracken moorland. Check dogs thoroughly after the walk. See /guides/ticks-dogs-uk/.
- **Cliff edge:** Eastern gritstone face - significant drops where climbers operate. Keep dogs on lead near the rim.
- **Grouse shooting:** Active from 12 August. No access restriction but close control required on shooting days.
- **Weather exposure:** The edge sits at approximately 450-458m. Conditions can change rapidly. Cloud, wind, and temperature drops are common even in summer.
- **Ground-nesting birds:** Curlew, golden plover, and lapwing breed on these moors. CRoW lead requirement applies 1 March to 31 July.
- **Grass seeds:** Heather and moorland grasses adjacent to paths from June onwards. See /guides/grass-seeds-dogs-uk/.

### 6. Ailsa Description Notes

Key details for the walk description:
- The edge runs roughly north-south for about 5km, gritstone throughout
- Eastern face is active climbing crag; western aspect drops more gradually toward the moorland
- The return via Hathersage Moor adds substantial distance and is rougher underfoot, especially after rain
- Hooks Car and Hollin Bank are the most practical car parks; Hollin Bank gives the cleaner approach
- The moorland has a real sense of remoteness despite being 20 minutes from Sheffield
- Dogs need good recall here - sheep are present and the edge drops are real
- Grouse butts visible across the Eastern Moors
- The view west from the edge across the Hope Valley to Win Hill and Lose Hill is the visual highlight
- Strong walkers will reach the trig point on High Neb (the northern high point of the edge) on a full circuit

### 7. SEO Notes

Primary keyword: "Stanage Edge dog walk" (estimated medium-high volume, popular specific route search)
Secondary: "dog walks Peak District", "Hathersage dog walk", "Peak District off lead dog walking"
The walk already has a live page at `/walks/stanage-edge-hathersage-moor/`. This research pack covers WALKS_DB corrections only for this walk; the website page content is already live.

---

## WALK 2: Dovedale and the Stepping Stones

Location: Thorpe, Ashbourne, Derbyshire (White Peak, Peak District National Park)
Status: New - no existing WALKS_DB entry, no website walk page

### 1. Walk Overview

Dovedale is a narrow limestone gorge on the Derbyshire/Staffordshire border, cut by the River Dove. The National Trust owns the core Dovedale estate. It is one of the most visited walking destinations in the Peak District, attracting approximately 1 million visitors per year. The walk from the Dovedale car park to the famous stepping stones is about 2km each way; longer routes continue up the valley to Milldale (approximately 6km one-way). For a circular walk, the hilltop return via Thorpe Cloud and the top of the dale is most popular.

The stepping stones are flat limestone slabs across the River Dove. They become impassable after sustained rainfall when the river rises.

### 2. Proposed WALKS_DB Entry

| Field | Proposed Value | Notes |
|-------|----------------|-------|
| id | dovedale-stepping-stones | |
| name | Dovedale and the Stepping Stones | |
| location | Thorpe, Ashbourne, Derbyshire | |
| lat | 53.0516 | Dovedale car park area |
| lon | -1.7777 | |
| distance | 4.2 | miles (6.7km) - Dovedale car park to stepping stones and return via dale |
| duration | 100 | minutes (allow more at weekends - crowds slow progress) |
| difficulty | easy | Flat valley floor paths, with optional ascent to hilltops if desired |
| terrain | mixed | Valley floor is smooth packed limestone paths; optional hilltop return is grassland |
| offLead | partial | Off-lead on open valley floor sections; lead required near the stepping stones and visitor hub (crowds), near livestock on the hilltop return |
| livestock | true | National Trust manages sheep on the hilltop sections and dale edges |
| hasStiles | true | The hilltop return route uses stiles |
| hasParking | true | NT Dovedale car park, DE6 2AY |
| hazards | ticks, livestock | Ticks active in grassland and scrub areas; livestock on hilltop return. Stepping stones are a drowning risk for small dogs in high water. |

### 3. Access and Dog Rules

National Trust Dovedale estate: dogs on leads in the immediate car park area and near the children's play area/visitor hub at the entrance. Dogs are welcome throughout the valley and hills but:

- Leads required near livestock (sheep on hilltop fields year-round).
- The valley is a **National Nature Reserve (NNR)** and a **Site of Special Scientific Interest (SSSI)**. No specific dog restrictions apply beyond standard NT/NNR conditions.
- No seasonal dog ban on the Dove valley floor (unlike some beaches). Dogs can access year-round.
- CRoW Act: Dovedale walks primarily follow public footpaths and NT permissive paths rather than open access land. CRoW 1 March to 31 July lead restriction applies only to designated open access land sections (the hilltops and some dale edges designated as access land).

**Stepping stones:** The stepping stones are a widely photographed landmark. They can be crowded on weekends and bank holidays. In flood conditions, they are completely submerged - check river levels before visiting in winter/spring. The National Trust sometimes installs a temporary footbridge at peak periods. The stepping stones themselves are slippery when wet; small dogs can be carried across or use the footbridge.

**Dove Holes and Reynard's Cave:** Two cave features in the dale. Dove Holes is low-lying with a shallow cave entrance; dogs can accompany owners past it. Reynard's Cave is approached via steep scrambling - not suitable for dogs.

### 4. Practical Details

**Parking:**
- Dovedale car park (National Trust): DE6 2AY. Pay and display (or NT membership). Approximately 400 spaces. The most-visited NT car park in the Midlands - fills entirely by 10am on warm weekends. Early arrival essential.
- Ilam Park car park (National Trust): DE6 2AZ. Approximately 1km west, across the Dove in Staffordshire. Alternative start via the suspension bridge from Ilam into the dale. Also popular.

**Nearest dog-friendly pub/cafe:**
- The Izaak Walton Hotel, Dovedale Road, Thorpe, DE6 2AY. Directly adjacent to the car park. Dog-friendly garden and bar. Named after the author of "The Compleat Angler" who fished the Dove.
- The Dog and Partridge Country Inn, Thorpe, DE6 2AT. Dog-friendly.
- Lathkil Hotel, Over Haddon. Further away but worth noting for White Peak dog-friendly options.
- Ilam Park NT cafe: open seasonally at Ilam Hall. Dog-friendly outdoors.

**Getting there:**
- No direct public transport to Dovedale car park. Car or cycling from Ashbourne (approximately 5km).
- Tissington Trail (rail trail, cycling and walking) passes through Tissington village approximately 5km away - can combine with a Tissington to Dovedale walk.

### 5. Hazards for Walk Page

- **Ticks:** Limestone grassland and valley-edge scrub are tick habitat. Active March to October. Particularly relevant on the hilltop return via Thorpe Cloud. See /guides/ticks-dogs-uk/.
- **Stepping stones flooding:** River Dove can rise substantially after heavy rain. Stepping stones can be submerged or dangerous in high water. Check conditions, especially October to March.
- **Crowds and stress:** Dovedale is extremely popular. On warm weekends, the path from the car park to the stepping stones is like a pavement. Dogs that find crowds stressful may find this route difficult in peak periods. Midweek or early morning visits are significantly quieter.
- **Livestock:** Sheep on the hilltop grassland sections and in some valley fields.
- **Adders:** The warm limestone grassland slopes are potential adder habitat in spring. Not a high-risk site by Peak District standards but worth noting April to June. See /guides/adder-bites-dogs-uk/.

### 6. Ailsa Description Notes

Key details for the walk description:
- Dovedale car park is large but fills fast on warm weekends - arrive before 9am or after 3pm
- The path from the car park to the stepping stones is a wide, smooth track alongside the River Dove - good for older dogs and those with mobility issues
- The stepping stones are the visual centrepiece; the valley above them, past Dove Holes, is quieter and more rewarding with a dog
- Thorpe Cloud (the distinctive conical hill at the valley entrance, 286m) can be climbed via a stepped path - steep but short, reasonable for most dogs, views down the dale
- The valley above the stepping stones to Milldale (the old hamlet at the northern end, approximately 4km from the car park) is the best walking with dogs - fewer crowds, several river crossing points, mature ash and sycamore woodland on the valley sides
- Ilam Park (across the river, Staffordshire side) adds a loop option with open parkland and the River Manifold confluence
- Reynard's Cave visible from the path (a natural arch high on the limestone cliff) - dogs cannot access it but it is a landmark to mention
- The Izaak Walton Hotel at the car park entrance is named after the father of fly fishing; the River Dove is one of England's most famous trout rivers

### 7. FAQ Suggestions

**Q: Are dogs allowed at Dovedale?**
A: Yes. Dogs are welcome throughout Dovedale year-round. Keep dogs on leads near livestock and near the car park entrance area. The valley floor path and hilltop options are all accessible with dogs.

**Q: Can dogs cross the Dovedale stepping stones?**
A: Most dogs can navigate the stepping stones, which are flat limestone slabs in the river. Small dogs can be carried across. In wet weather or after heavy rain, the stones may be submerged - a temporary footbridge is sometimes in place. Check conditions before visiting October to March.

**Q: How busy is Dovedale?**
A: Very. It is one of the most-visited walking sites in the Midlands - the car park can fill entirely by 10am on warm weekends. Midweek mornings are significantly quieter. If your dog finds crowds stressful, an early start or midweek visit is strongly recommended.

**Q: Where should I park for Dovedale?**
A: The main car park is the National Trust Dovedale car park (DE6 2AY), pay and display or free for NT members. Ilam Park (DE6 2AZ, over the river in Staffordshire) is an alternative start. Both fill quickly on weekends.

### 8. SEO Notes

Primary keyword: "Dovedale dog walk" (medium-high volume - popular specific destination search)
Secondary: "dog walks near Ashbourne", "Peak District dog walks", "Dovedale stepping stones dogs"
Content angle: address the stepping stones access question (it will be the most-asked FAQ), address crowds, confirm year-round access. These answer the top concerns for dog owners at this location.

---

## WALK 3: Mam Tor and the Great Ridge

Location: Castleton, Derbyshire (Peak District National Park)
Status: New - no existing WALKS_DB entry, no website walk page

### 1. Walk Overview

Mam Tor (517m) is the highest point on the Great Ridge, a narrow escarpment connecting Mam Tor to Lose Hill (476m) via Back Tor and Hollins Cross. The ridge forms the natural boundary between the Hope Valley to the north and the Vale of Edale to the south. The standard Great Ridge circuit from the National Trust Mam Nick car park takes in the full ridge and returns via the valley floor - a satisfying loop with panoramic views in both directions throughout.

Mam Tor is nicknamed "The Shivering Mountain" due to ongoing landslips on its unstable shale and gritstone face. The old A625 road over the summit was permanently closed in 1979 after repeated landslip damage; sections of the crumbled road surface are visible on the descent from the summit.

### 2. Proposed WALKS_DB Entry

| Field | Proposed Value | Notes |
|-------|----------------|-------|
| id | mam-tor-great-ridge | |
| name | Mam Tor and the Great Ridge | |
| location | Castleton, Derbyshire | |
| lat | 53.3476 | Mam Nick car park area |
| lon | -1.8026 | |
| distance | 5.0 | miles (8.0km) - Great Ridge circuit from Mam Nick |
| duration | 135 | minutes |
| difficulty | moderate | Good paths throughout, approximately 260m of ascent |
| terrain | mixed | Flagstone and paved paths on the ridge; grass and field paths on the return |
| offLead | partial | Off-lead on the open ridge (CRoW access land); lead required on approach paths near livestock and during CRoW lead period 1 March to 31 July |
| livestock | true | Sheep on lower approach fields and Edale valley floor return |
| hasStiles | true | Stiles and gates on the valley floor return section |
| hasParking | true | NT Mam Nick car park, S33 8WA |
| hazards | adders, ticks, livestock | Adders on moorland/heather slopes; ticks in bracken on descents; livestock on lower sections |

### 3. Access and Off-Lead Rules

Mam Tor and the Great Ridge are designated CRoW open access land. The NT manages significant land in this area.

- **CRoW Act lead requirement:** 1 March to 31 July on open access land, dogs on a lead no longer than 2 metres. Ground-nesting birds (curlew, lapwing, golden plover) breed on the moorland around the ridge.
- **Livestock:** Sheep in fields on the Edale valley floor return section (through Mam Farm and Greenlands Farm areas). Lead required when stock are present.
- **The ridge path itself:** The flagstone path along the crest of the Great Ridge is straightforward. Good recall is helpful given the open exposure and the drops on both sides of the ridge. The ridge is not fenced or enclosed.
- **National Trust land:** The NT manages the Mam Nick car park and much of the surrounding access land. No additional NT dog restrictions beyond standard livestock rules.

### 4. Practical Details

**Parking:**
- Mam Nick car park (National Trust): S33 8WA. On the A625 between Chapel-en-le-Frith and Castleton. Pay and display; NT members free. Small but sufficient for most days. Can fill on busy summer weekends.
- Castleton village car park: S33 8WN. Larger. Adds approximately 2km to the walk via the Winnats Pass road approach.
- Edale car park: S33 7ZD. Alternative start from the south/Edale valley side.

**Nearest dog-friendly pub/cafe:**
- The Cheshire Cheese Inn, Hope Village, S33 6ZF. Approximately 3km from Mam Nick. Confirmed dog-friendly (water bowls outside, dogs allowed in bar). Good food.
- The Castle Hotel, Castleton, S33 8WG. Dog-friendly. Central Castleton location.
- The Nag's Head, Edale, S33 7ZD. Dog-friendly pub at the start of the Pennine Way. If approaching from Edale.
- Seasonal ice cream and food vans at the Mam Nick car park on summer weekends.

**Getting there:**
- Hope railway station (Sheffield-Manchester Hope Valley line) is approximately 4km via footpath. The walk can be started from Hope station.
- Castleton is served by bus from Sheffield (Transpeak/TM Travel services from Castleton village).

### 5. Hazards for Walk Page

- **Adders:** Present on the heather and bracken moorland slopes around Mam Tor and Back Tor. Active April to September. Most concentrated in warm, sheltered slopes on south-facing ground. See /guides/adder-bites-dogs-uk/.
- **Ticks:** Active on bracken descent paths March to October. Check dogs thoroughly after the walk. See /guides/ticks-dogs-uk/.
- **Weather exposure:** The ridge sits at 400-517m. Wind speeds on the crest can be significantly higher than in the valley. No shelter on the ridge itself.
- **Livestock:** Lower valley fields on the return section. Lead required.
- **CRoW Act bird protection:** 1 March to 31 July lead requirement on all open access land sections of this route.
- **Cliff drops:** Mam Tor's shale face has unstable edges. Keep dogs away from the unfenced southern drop on the summit and Back Tor's rocky top.

### 6. Ailsa Description Notes

Key details for the walk description:
- The Mam Nick car park is the cleanest start - the path to the summit is well-paved and mostly straightforward, with a short steep section just below the top
- The ridge between Mam Tor and Lose Hill is the best part: narrow enough to feel like a proper ridge walk, with the Hope Valley on one side and the green plain of Edale on the other. One of the most distinctive ridge walks in the Peak District.
- Hollins Cross (the saddle mid-ridge) is a popular turnaround point for shorter visits - good for older or less fit dogs
- The crumbled A625 road surface near the foot of Mam Tor is visually striking - broken tarmac and crash barriers tilting at odd angles. Worth a mention as an unusual detail.
- Back Tor (469m), roughly halfway along the ridge toward Lose Hill, involves a short rocky scramble - manageable for most dogs but narrow
- Lose Hill at the eastern end of the ridge is the turnaround point before the descent to the valley floor
- The return via the Edale valley floor is quieter and passes through farmland - leads on through the farm sections

### 7. FAQ Suggestions

**Q: Can I let my dog off the lead on Mam Tor?**
A: On the open ridge (CRoW access land) dogs can be off-lead outside the bird protection period. From 1 March to 31 July, a lead of no more than 2 metres is legally required on open access land. On the lower valley sections of the return route, sheep are present and a lead is needed.

**Q: How hard is the Mam Tor walk?**
A: The Great Ridge circuit is moderate. The path to the summit is paved and steepest just below the top; the ridge walk itself is good going throughout. The full circuit from Mam Nick car park is approximately 8km (5 miles) with around 260m of ascent. Fit dogs of most sizes will manage it well.

**Q: Where do I park for Mam Tor?**
A: The Mam Nick National Trust car park (S33 8WA) is the standard start, directly on the A625. Pay and display, free for NT members.

**Q: Is Mam Tor suitable for families with dogs?**
A: Yes, it is one of the more accessible Peak District ridge walks. Good paths throughout and the ridge views are immediate. The ridge has exposed drops on both sides so dogs with no sense of height should be on a lead near the crests.

### 8. SEO Notes

Primary keyword: "Mam Tor dog walk" (medium volume, specific popular route)
Secondary: "dog walks near Castleton", "Peak District dog walks", "Great Ridge walk dogs", "Hope Valley walks dogs"
Content angle: confirm the CRoW access/off-lead situation clearly (this is the main question), cover the Great Ridge circuit as the recommended route rather than the summit-only approach.

---

## WALK 4: Kinder Scout from Edale

Location: Edale, Derbyshire (Peak District National Park)
Status: New - no existing WALKS_DB entry, no website walk page

### 1. Walk Overview

Kinder Scout (636m) is the highest point in the Peak District and one of the most significant walking destinations in England, site of the famous 1932 Mass Trespass that ultimately led to the CRoW Act 2000 and the legal right to roam. The plateau is a vast area of blanket peat moorland - desolate, challenging to navigate in mist, and completely exposed to weather. It demands more respect than most Peak District walks.

The approach from Edale is the classic route: up Jacob's Ladder (a stone staircase ascending a steep hillside) to the plateau edge, then along the plateau rim to Kinder Downfall (the waterfall on the plateau's western edge, a 30-metre drop that in high winds can blow upward - a famous phenomenon), returning via the southern plateau edge. A full Kinder Scout circuit from Edale is approximately 16-17km.

A shorter, more accessible alternative: the Grindsbrook Clough route from Edale to the southern plateau edge (approximately 10km return). This is the standard route for a first visit.

The Pennine Way starts at Edale's Old Nags Head pub. The Kinder Scout plateau is the first section.

### 2. Proposed WALKS_DB Entry

| Field | Proposed Value | Notes |
|-------|----------------|-------|
| id | kinder-scout-edale | |
| name | Kinder Scout from Edale | |
| location | Edale, Derbyshire | |
| lat | 53.3641 | Edale village/car park |
| lon | -1.8709 | |
| distance | 9.5 | miles (15.3km) - full Kinder Scout circuit from Edale via Jacob's Ladder, Kinder Downfall, Grindsbrook return |
| duration | 280 | minutes (approximately 4.5-5 hours) |
| difficulty | hard | 500m+ elevation gain, boggy and unmarked plateau, route-finding required |
| terrain | muddy | The plateau is deep peat bog after any rain; lower paths are mixed |
| offLead | partial | Off-lead on plateau (CRoW access land); lead required near livestock on lower farm approaches through Edale and Lee Farm |
| livestock | true | Sheep on approach paths through Edale village fields and Lee Farm |
| hasStiles | true | Stiles on the farm approach paths below the plateau |
| hasParking | true | Edale car park, S33 7ZD |
| hazards | adders, ticks, livestock | Adders on heather/moorland; ticks in bracken on lower slopes; livestock on approach paths |

### 3. Access and Off-Lead Rules

Kinder Scout is CRoW open access land throughout the plateau. This was one of the first areas formally designated as open access under the CRoW Act 2000, following decades of campaigning following the 1932 trespass.

- **CRoW Act lead requirement:** 1 March to 31 July on all open access sections. This covers the entire plateau. Ground-nesting birds including golden plover, dunlin, and short-eared owl breed on the plateau.
- **Farm approach paths:** The routes through Edale village and up through Lee Farm to the base of Jacob's Ladder use public footpaths through enclosed fields with sheep. Leads essential on these sections at all times.
- **Navigation:** The plateau itself is featureless in poor visibility. The peat hags (eroded peat formations) are disorienting. Map and compass are essential. GPS is useful but not a substitute for navigational skill. This is not a walk to attempt in mist without confident navigation.
- **Dogs on the plateau:** Off-lead on the open plateau outside the bird protection period. The distances involved mean reliable recall is essential. The plateau is large enough that a dog with poor recall could become separated in poor visibility.

### 4. Practical Details

**Parking:**
- Edale car park: S33 7ZD. Pay and display, operated by the Peak District National Park Authority. Approximately 150 spaces. Can fill on summer weekends.
- Roadside parking in Edale village: limited spaces along the lane.
- Upper Booth car park (smaller): S33 7ZJ. Used for the southern approach.

**Nearest dog-friendly pub/cafe:**
- The Old Nags Head, Edale, S33 7ZD. The official starting point of the Pennine Way. Historic pub, dog-friendly. Food and accommodation.
- The Rambler Inn, Edale, S33 7ZA. Dog-friendly.
- Penny Pot Cafe, Edale, S33 7ZD. Cafe in the village. Dog-friendly outside. Worth confirming current opening days (variable).
- Edale YHA: not a pub, but the YHA hostel in Edale is a popular base for Kinder Scout walks.

**Getting there:**
- Edale railway station: served by the Hope Valley line (Sheffield to Manchester). The walk starts from the village - approximately 5 minutes' walk from the station to the Nags Head. Excellent public transport access.

**Facilities:**
- Toilets at Edale car park.
- No facilities on the plateau.
- Carry sufficient water for dogs - plateau streams exist but can be peaty. No reliable clear water source on the upper plateau.

### 5. Hazards for Walk Page

- **Navigation hazard:** The Kinder Scout plateau is one of the most frequently used Mountain Rescue call-out sites in the Peak District. Featureless peat moorland in mist is genuinely disorienting. Do not attempt in poor visibility without map and compass skills.
- **Boggy terrain:** The plateau is deep peat bog after rain. Dogs (and owners) can sink to knee depth in the worst areas. The peat hags are physically exhausting to cross. Ticks live in the heather between peat formations.
- **Weather:** 636m summit is exposed to rapid weather changes. Temperature on the plateau can be 5-10°C colder than Edale village. Wind chill significant. A warm layer and waterproof are required regardless of forecast.
- **Adders:** Present in heather on the lower moorland slopes approaching the plateau. Active April to September. See /guides/adder-bites-dogs-uk/.
- **Ticks:** Active March to October on heather, bracken, and moorland grass on all approach routes. See /guides/ticks-dogs-uk/.
- **Livestock:** Sheep on farm approach paths in Edale valley. Lead required.
- **CRoW lead period:** 1 March to 31 July on open access land.
- **Fitness requirement:** This is a long, physically demanding walk. Not suitable for unfit dogs, elderly dogs, young puppies, or brachycephalic breeds. The descent from the plateau requires good joints - the peat bogs absorb impact but uneven terrain is continuous.

### 6. Ailsa Description Notes

Key details for the walk description:
- Edale village is a proper walkers' base - the Old Nags Head, the car park, the start of the Pennine Way, the train station. Good atmosphere before a big walk.
- Jacob's Ladder (the ascent from Edale to the plateau) is the key landmark. The stone staircase was built by Jacob Marshall in the 17th century to help packhorse trains up the hillside. It is steep and sustained but finite.
- The plateau rim along Kinder Edge is the highest and most dramatic section - views north toward the Dark Peak and south toward the Hope Valley when clear.
- Kinder Downfall (western edge of the plateau): 30-metre drop into a rocky bowl. In strong westerly winds the water blows back up the cliff and the waterfall effectively reverses. Worth timing a visit for windy conditions.
- The peat hags on the plateau are extraordinary terrain - metres of dark, eroded peat shaped by weather and centuries of footfall. Otherworldly in character.
- The Grindsbrook Clough descent (from the southern plateau edge) follows a stream gully down into the valley - dramatic and wet underfoot.
- The sense of space and remoteness on the plateau, so close to Sheffield and Manchester, is the walk's defining quality.
- This walk earns its difficulty badge. Mention it is not for casual walkers.

### 7. FAQ Suggestions

**Q: Is Kinder Scout suitable for dogs?**
A: Yes, but it demands more than most walks. The plateau is full open access land and dogs can be off-lead outside the bird protection period (1 March to 31 July). The challenges are navigation in poor visibility, deep peat bog, and exposed weather. Dogs need to be fit, used to rough terrain, and have reliable recall. Not suitable for puppies, elderly dogs, or flat-faced breeds in warm weather.

**Q: Can I get to Kinder Scout by train?**
A: Yes. Edale station is served by the Hope Valley line (Sheffield to Manchester). The walk starts directly from the village, approximately 5 minutes from the station. It is one of the best train-accessible mountain walks in the Peak District.

**Q: Where is the starting point for Kinder Scout?**
A: The most popular starting point is Edale village (S33 7ZD), usually from the Edale car park or the Old Nags Head pub - the official start of the Pennine Way. Hayfield village (SK22 2LE) is the alternative access point for the Kinder Downfall route.

**Q: What is the Kinder Scout Mass Trespass?**
A: On 24 April 1932, a group of ramblers deliberately trespassed on Kinder Scout to protest the exclusion of ordinary people from the open moorland. The event became a turning point in the campaign for the right to roam, eventually leading to the Countryside and Rights of Way Act 2000. Today, Kinder Scout is fully open access land.

**Q: How long does Kinder Scout take?**
A: The standard circuit from Edale via Jacob's Ladder, Kinder Downfall, and Grindsbrook Clough is 16-17km (approximately 10 miles). Allow 5-6 hours including stops. A shorter option is the Grindsbrook Clough approach to the plateau edge and back, approximately 10km (2.5-3.5 hours).

### 8. SEO Notes

Primary keyword: "Kinder Scout dog walk" (medium volume, specific popular route)
Secondary: "dog walks Edale", "Peak District walks dogs", "Kinder Scout with dogs", "Pennine Way dogs"
Content angle: confirm it is open access and dog-friendly, address the difficulty honestly, cover the train access angle (excellent public transport - strong USP for this route). The 1932 trespass story is a narrative hook worth a brief mention in the body.

---

## WALKS_DB Corrections Required

The following changes are required to the existing Stanage Edge entry in sniffout-v2.html:

| Field | Current | Correction |
|-------|---------|------------|
| livestock | false | true |
| difficulty | hard | moderate |
| lat | 53.3512 | 53.3541 (align with website page) |
| lon | -1.6497 | -1.6392 (align with website page) |

Note: The 'livestock' hazard entry in the hazards array is correct and should remain. The inconsistency is in the boolean livestock field, which should be changed to true.

---

## Notes for Developer

- Stanage Edge already has a website walk page (`/walks/stanage-edge-hathersage-moor/`). WALKS_DB corrections above are for the PWA file only.
- Dovedale, Mam Tor, and Kinder Scout are new walk pages for the website (content/walks/) and new WALKS_DB entries for the PWA.
- All four walks are within the Peak District National Park; area page `/areas/peak-district/` will need to be created or confirmed if not already live.
- Distances in the website walk page front matter should be in kilometres (per CLAUDE.md). The mile figures above are for WALKS_DB only.

---

## Summary

| Walk | Status | WALKS_DB | Website Page | Key Actions |
|------|--------|----------|--------------|-------------|
| Stanage Edge | Existing | Corrections required (livestock, difficulty, lat/lon) | Live | Fix WALKS_DB |
| Dovedale | New | Proposed entry above | None | Build walk page, add WALKS_DB entry |
| Mam Tor | New | Proposed entry above | None | Build walk page, add WALKS_DB entry |
| Kinder Scout | New | Proposed entry above | None | Build walk page, add WALKS_DB entry |
