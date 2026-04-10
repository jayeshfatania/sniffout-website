# WALKS_DB Audit Report — April 9 2026

Cross-reference of 84 old-style WALKS_DB IDs against live website walk pages and planned batches.

---

## Summary Table

| Category | Count | Description | Action |
|----------|-------|-------------|--------|
| A — Live page exists | 44 | Old ID has a matching website walk page | Extract corrected front matter data for WALKS_DB sync |
| B — Planned batch, no page yet | 8 | No page live but in planned Batch 7 or Batch 8 | Await batch build; note region |
| C — No page, not in planned batch | 32 | No page, not in any confirmed batch | Flag as candidates for future batches |

---

## CATEGORY A — Live Website Pages (44 matches)

For each entry: old WALKS_DB ID → website file → key front matter fields.

Note: website distances are in km. WALKS_DB stores miles. Conversion needed before syncing these values to the app.

---

### 1. box-hill-loop
**Website file:** `content/walks/box-hill-summit-loop.md`
- id (slug): `box-hill-summit-loop`
- name: Box Hill Summit Loop
- location: Dorking, Surrey
- lat: 51.2533 / lon: -0.3039
- distance: 5.1 km *(app uses miles — convert: ~3.2 miles)*
- difficulty: Moderate
- terrain: Woodland and chalk downland
- offLead: Partial
- livestock: not stated as boolean in front matter (implied seasonal from body text)
- hasParking: true (Box Hill National Trust car park)
- hazards: implied ticks, cliff (from body and related guides)

---

### 2. richmond-park
**Website file:** `content/walks/richmond-park-dog-walk.md`
- id (slug): `richmond-park-dog-walk`
- name: Richmond Park Dog Walk
- location: Richmond, London
- lat: 51.4411 / lon: -0.2749
- distance: 7.2 km *(~4.5 miles)*
- difficulty: Easy
- terrain: Flat parkland
- offLead: On-lead only
- livestock: false (deer present but not livestock in traditional sense)
- hasParking: true (Richmond Gate car park, free)
- hazards: deer (from body text)

---

### 3. isabella-plantation
**Website file:** `content/walks/isabella-plantation.md`
- id (slug): `isabella-plantation`
- name: Isabella Plantation
- location: Richmond Park, London
- lat: 51.4368 / lon: -0.2780
- distance: 3.2 km *(~2.0 miles)*
- difficulty: Easy
- terrain: Woodland and parkland
- offLead: Partial
- livestock: false
- hasParking: true (Broomfield Hill car park, Richmond Park)
- hazards: none stated

---

### 4. leith-hill
**Website file:** `content/walks/leith-hill-coldharbour.md`
- id (slug): `leith-hill-coldharbour`
- name: Leith Hill and Coldharbour
- location: Coldharbour, Surrey
- lat: 51.1792 / lon: -0.3726
- distance: 6.1 km *(~3.8 miles)*
- difficulty: Moderate
- terrain: Woodland and heathland
- offLead: Full
- livestock: false (none on this route per dogSummary)
- hasParking: true (National Trust Leith Hill car park)
- hazards: ticks (from dogSummary)

---

### 5. frensham-common
**Website file:** `content/walks/frensham-great-pond.md`
- id (slug): `frensham-great-pond`
- name: Frensham Great Pond
- location: Frensham, Surrey
- lat: 51.1549 / lon: -0.7944
- distance: 4.8 km *(~3.0 miles)*
- difficulty: Easy
- terrain: Heathland and lakeside
- offLead: Partial
- livestock: false
- hasParking: true (Frensham Great Pond car park, National Trust)
- hazards: algae, adders (from dogSummary and body text)

---

### 6. hindhead-common
**Website file:** `content/walks/hindhead-common-devils-punch-bowl.md`
- id (slug): `hindhead-common-devils-punch-bowl`
- name: Hindhead Common and Devils Punch Bowl
- location: Hindhead, Surrey
- lat: 51.1097 / lon: -0.7246
- distance: 7.8 km *(~4.9 miles)*
- difficulty: Moderate
- terrain: Heathland and woodland
- offLead: Full
- livestock: false (no livestock on main circuit per dogSummary)
- hasParking: true (National Trust Hindhead car park)
- hazards: adders, ground-nesting-birds (from body text)

---

### 7. seven-sisters
**Website file:** `content/walks/seven-sisters-cliffs.md`
- id (slug): `seven-sisters-cliffs`
- name: Seven Sisters Cliffs
- location: Seaford, East Sussex
- lat: 50.7717 / lon: 0.1634
- distance: 11.2 km *(~7.0 miles)*
- difficulty: Moderate
- terrain: Coastal clifftop
- offLead: Partial
- livestock: true (livestock graze the South Downs per body text)
- hasParking: true (Birling Gap National Trust car park)
- hazards: cliff, livestock, flooding (from body text)

---

### 8. ashridge-estate
**Website file:** `content/walks/ashridge-estate-dog-walk.md`
- id (slug): `ashridge-estate-dog-walk`
- name: Ashridge Estate Bluebell Walk
- location: Berkhamsted, Hertfordshire
- lat: 51.8071 / lon: -0.5591
- distance: 5.5 km *(~3.4 miles)*
- difficulty: Easy
- terrain: Woodland paths
- offLead: Partial (off-lead in woodland, on-lead in bluebell areas and near sheep on Ivinghoe Hills)
- livestock: true (300 sheep on Ivinghoe Hills)
- hasParking: true (Bridgewater Monument car park)
- hazards: ticks, livestock, deer (from body text)

---

### 9. hampstead-heath
**Website file:** `content/walks/hampstead-heath-ponds.md`
- id (slug): `hampstead-heath-ponds`
- name: Hampstead Heath and Ponds
- location: Hampstead, London
- lat: 51.5625 / lon: -0.1644
- distance: 5.8 km *(~3.6 miles)*
- difficulty: Easy
- terrain: Parkland and woodland
- offLead: Full
- livestock: false
- hasParking: false (limited street parking only)
- hazards: ticks (from related guides)

---

### 10. wimbledon-common
**Website file:** `content/walks/wimbledon-common-loop.md`
- id (slug): `wimbledon-common-loop`
- name: Wimbledon Common Loop
- location: Wimbledon, London
- lat: 51.4346 / lon: -0.2207
- distance: 5.2 km *(~3.2 miles)*
- difficulty: Easy
- terrain: Heathland and woodland
- offLead: Full
- livestock: false
- hasParking: true (Windmill Road car park)
- hazards: ticks (from dogSummary)

---

### 11. headley-heath
**Website file:** `content/walks/headley-heath-dog-walk.md`
- id (slug): `headley-heath-dog-walk`
- name: Headley Heath
- location: Headley, Surrey
- lat: 51.2843 / lon: -0.2513
- distance: 4.2 km *(~2.6 miles)*
- difficulty: Easy
- terrain: Heathland and sandy paths
- offLead: Partial (leads near cattle and 1 Mar-31 Aug for ground-nesting birds)
- livestock: true (belted Galloway cattle)
- hasParking: true (Headley Common Road car park)
- hazards: adders, livestock, ground-nesting-birds (from body text)

---

### 12. bookham-common
**Website file:** `content/walks/bookham-common-dog-walk.md`
- id (slug): `bookham-common-dog-walk`
- name: Bookham Common and Fetcham Downs
- location: Great Bookham, Surrey
- lat: 51.2972 / lon: -0.3760
- distance: 5.0 km *(~3.1 miles)*
- difficulty: Easy
- terrain: Woodland and grassland
- offLead: Partial (leads near cattle on The Plains and 1 Mar-31 Jul in heathland)
- livestock: true (cattle on The Plains)
- hasParking: true (Tunnel Car Park)
- hazards: livestock, ground-nesting-birds, ticks (from body text)

---

### 13. st-marthas-hill
**Website file:** `content/walks/st-marthas-hill-dog-walk.md`
- id (slug): `st-marthas-hill-dog-walk`
- name: St Martha's Hill and Chilworth
- location: Guildford, Surrey
- lat: 51.2131 / lon: -0.5002
- distance: 6.0 km *(~3.7 miles)*
- difficulty: Moderate
- terrain: Sandy paths and woodland
- offLead: Partial (close control on paths, leads in churchyard)
- livestock: false
- hasParking: true (Halfpenny Lane car park, Chilworth)
- hazards: mountain-bikers (from body text — Chantries section)

---

### 14. the-hurtwood
**Website file:** `content/walks/hurtwood-ridge-dog-walk.md`
- id (slug): `hurtwood-ridge-dog-walk`
- name: The Hurtwood Ridge Walk
- location: Ewhurst, Surrey
- lat: 51.1645 / lon: -0.4391
- distance: 6.9 km *(~4.3 miles)*
- difficulty: Moderate
- terrain: Woodland and heathland ridge
- offLead: Full
- livestock: false (no livestock on this route per body text)
- hasParking: true (Hurtwood Car Park 1, near Peaslake, free)
- hazards: mountain-bikers, adders (from body text)

---

### 15. epsom-common
**Website file:** `content/walks/epsom-common-dog-walk.md`
- id (slug): `epsom-common-dog-walk`
- name: Epsom Common and Stew Ponds
- location: Epsom, Surrey
- lat: 51.3354 / lon: -0.2713
- distance: 3.9 km *(~2.4 miles)*
- difficulty: Easy
- terrain: Woodland and heathland
- offLead: Partial (close control throughout SSSI; leads near cattle)
- livestock: true (cattle for conservation grazing)
- hasParking: true (Stew Lane entrance or Christ Church Road entrance, free)
- hazards: algae (July-September per body text), livestock

---

### 16. shere-village
**Website file:** `content/walks/shere-abinger-roughs-dog-walk.md`
- id (slug): `shere-abinger-roughs-dog-walk`
- name: Shere Village and Abinger Roughs
- location: Shere, Surrey
- lat: 51.2148 / lon: -0.4467
- distance: 5.6 km *(~3.5 miles)*
- difficulty: Moderate
- terrain: Woodland and village lanes
- offLead: Partial (off-lead in woodland, leads in village and near livestock)
- livestock: true (livestock grazing enclosures in Abinger Roughs)
- hasParking: true (Abinger Roughs NT car park, White Down Lane, free)
- hazards: livestock (from body text)

---

### 17. cuckmere-haven
**Website file:** `content/walks/cuckmere-haven-dog-walk.md`
- id (slug): `cuckmere-haven-dog-walk`
- name: Cuckmere Haven and Litlington
- location: Seaford, East Sussex
- lat: 50.7733 / lon: 0.1588
- distance: 7.4 km *(~4.6 miles)*
- difficulty: Easy
- terrain: Chalk downland and riverside paths
- offLead: Partial (on-lead near livestock across most fields)
- livestock: true (700-ewe flock and Sussex beef cattle per body text)
- hasParking: true (Seven Sisters Country Park, Exceat, pay and display)
- hazards: livestock, flooding, adders (from body text)

---

### 18. cissbury-ring
**Website file:** `content/walks/cissbury-ring-dog-walk.md`
- id (slug): `cissbury-ring-dog-walk`
- name: Cissbury Ring
- location: Worthing, West Sussex
- lat: 50.8678 / lon: -0.3782
- distance: 4.7 km *(~2.9 miles)*
- difficulty: Easy
- terrain: Chalk grassland and flint paths
- offLead: Partial (on-lead near ponies and cattle; Mar-Aug for ground-nesting birds)
- livestock: true (New Forest ponies and Belted Galloway cattle)
- hasParking: true (Storrington Rise car park, free)
- hazards: livestock, ground-nesting-birds (from body text)

---

### 19. arthurs-seat-holyrood
**Website file:** `content/walks/arthurs-seat-dog-walk.md`
- id (slug): `arthurs-seat-dog-walk`
- name: Arthur's Seat and Holyrood Park
- location: Edinburgh
- lat: 55.9441 / lon: -3.1615
- distance: 5.6 km *(~3.5 miles)*
- difficulty: Moderate
- terrain: Volcanic hill and parkland paths
- offLead: Partial (leads near lochs and Salisbury Crags Apr-Jul)
- livestock: false (occasional short-term conservation grazing only)
- hasParking: true (Holyrood Palace car park or street parking)
- hazards: cliff (Salisbury Crags per body text)

---

### 20. threipmuir-pentland-hills
**Website file:** `content/walks/threipmuir-harlaw-dog-walk.md`
- id (slug): `threipmuir-harlaw-dog-walk`
- name: Threipmuir and Harlaw Reservoirs
- location: Balerno, Edinburgh
- lat: 55.866 / lon: -3.361
- distance: 6.8 km *(~4.2 miles)*
- difficulty: Easy
- terrain: Reservoir paths and hillside tracks
- offLead: Partial (leads near cattle; no swimming in reservoirs)
- livestock: true (cattle and sheep graze hillside sections)
- hasParking: true (Bavelaw car park, small charge)
- hazards: ticks, livestock (from body text)

---

### 21. dunkeld-hermitage
**Website file:** `content/walks/hermitage-dunkeld-dog-walk.md`
- id (slug): `hermitage-dunkeld-dog-walk`
- name: The Hermitage and Black Linn Falls
- location: Dunkeld, Perthshire
- lat: 56.561 / lon: -3.609
- distance: 5.6 km *(~3.5 miles)*
- difficulty: Easy
- terrain: Woodland paths
- offLead: Partial (leads on gorge path and at falls viewpoint)
- livestock: false
- hasParking: true (The Hermitage car park, NTS members free)
- hazards: cliff (sheer gorge drops per body text)

---

### 22. tentsmuir-forest-fife
**Website file:** `content/walks/tentsmuir-forest-dog-walk.md`
- id (slug): `tentsmuir-forest-dog-walk`
- name: Tentsmuir Forest and Beach
- location: Leuchars, Fife
- lat: 56.387 / lon: -2.826
- distance: 7.7 km *(~4.8 miles)*
- difficulty: Easy
- terrain: Forest paths and sandy beach
- offLead: Partial (leads in NNR sections near seal colony year-round)
- livestock: false
- hasParking: true (Tentsmuir Forest car park, small charge)
- hazards: flooding/tidal (tidal sand risk per body text)

---

### 23. balmaha-loch-lomond
**Website file:** `content/walks/balmaha-loch-lomond-dog-walk.md`
- id (slug): `balmaha-loch-lomond-dog-walk`
- name: Balmaha and Loch Lomond Shore
- location: Balmaha, Loch Lomond
- lat: 55.988 / lon: -4.524
- distance: 4.0 km *(~2.5 miles)*
- difficulty: Easy
- terrain: Lochside paths
- offLead: Partial (close control in village, off-lead on lochside)
- livestock: false
- hasParking: true (Balmaha car park, pay and display, 177 spaces)
- hazards: none stated

---

### 24. pen-y-fan-brecon
**Website file:** `content/walks/pen-y-fan-dog-walk.md`
- id (slug): `pen-y-fan-dog-walk`
- name: Pen y Fan and Corn Du Circuit
- location: Libanus, Powys
- lat: 51.8791 / lon: -3.4369
- distance: 9.3 km *(~5.8 miles)*
- difficulty: Hard
- terrain: Mountain paths, steep and eroded
- offLead: None (leads required year-round — livestock and CRoW Act)
- livestock: true (Welsh Mountain sheep year-round)
- hasParking: true (Pont ar Daf car park)
- hazards: livestock, ground-nesting-birds (from body text)

---

### 25. llyn-padarn-llanberis
**Website file:** `content/walks/llyn-padarn-dog-walk.md`
- id (slug): `llyn-padarn-dog-walk`
- name: Llyn Padarn Lake Circuit
- location: Llanberis, Gwynedd
- lat: 53.1175 / lon: -4.1193
- distance: 9.0 km *(~5.6 miles)*
- difficulty: Easy
- terrain: Lakeside paths and woodland
- offLead: Partial (off-lead on lakeside paths, leads near roads)
- livestock: false
- hasParking: true (Llanberis village car parks, pay and display)
- hazards: none stated (note: paw hazard from slate fragments per body text — not in approved hazard list)

---

### 26. rhossili-gower
**Website file:** `content/walks/rhossili-bay-dog-walk.md`
- id (slug): `rhossili-bay-dog-walk`
- name: Rhossili Bay and Worms Head
- location: Rhossili, Swansea
- lat: 51.5689 / lon: -4.2893
- distance: 6.4 km *(~4.0 miles)*
- difficulty: Moderate
- terrain: Beach and cliff path
- offLead: Partial (off-lead on beach year-round, leads on headland near livestock)
- livestock: true (cattle, ponies, and sheep on headland common land)
- hasParking: true (Rhossili NT car park)
- hazards: livestock, cliff (Worms Head causeway per body text)

---

### 27. stanage-edge
**Website file:** `content/walks/stanage-edge-hathersage-moor.md`
- id (slug): `stanage-edge-hathersage-moor`
- name: Stanage Edge and Hathersage Moor
- location: Hathersage, Derbyshire
- lat: 53.3541 / lon: -1.6392
- distance: 10.3 km *(~6.4 miles)*
- difficulty: Moderate
- terrain: Moorland and gritstone edge
- offLead: Full
- livestock: true (sheep on the moor per dogSummary)
- hasParking: true (Hooks Car car park, Stanage Edge)
- hazards: adders, cliff (drops on eastern climbing face per body text)

---

### 28. dovedale-stepping-stones
**Website file:** `content/walks/dovedale-dog-walk.md`
- id (slug): `dovedale-dog-walk`
- name: Dovedale and the Stepping Stones
- location: Thorpe, Ashbourne, Derbyshire
- lat: 53.0516 / lon: -1.7777
- distance: 6.7 km *(~4.2 miles)*
- difficulty: Easy
- terrain: Valley paths and grassland
- offLead: Partial (valley floor off-lead, leads near car park and hilltop livestock)
- livestock: true (hilltop return fields per body text)
- hasParking: true (NT Dovedale car park, pay and display)
- hazards: adders, ticks (from relatedGuides)

---

### 29. mam-tor-great-ridge
**Website file:** `content/walks/mam-tor-dog-walk.md`
- id (slug): `mam-tor-dog-walk`
- name: Mam Tor and the Great Ridge
- location: Castleton, Derbyshire
- lat: 53.3476 / lon: -1.8026
- distance: 8.0 km *(~5.0 miles)*
- difficulty: Moderate
- terrain: Ridge path and valley fields
- offLead: Partial (off-lead on ridge, leads on valley return and near livestock)
- livestock: true (sheep in valley fields per body text)
- hasParking: true (Mam Nick car park, National Trust)
- hazards: adders, ticks (from relatedGuides)

---

### 30. kinder-scout-edale
**Website file:** `content/walks/kinder-scout-dog-walk.md`
- id (slug): `kinder-scout-dog-walk`
- name: Kinder Scout from Edale
- location: Edale, Derbyshire
- lat: 53.3641 / lon: -1.8709
- distance: 15.3 km *(~9.5 miles)*
- difficulty: Hard
- terrain: Peat moorland and valley paths
- offLead: Partial (off-lead on plateau, leads on farm approach paths)
- livestock: true (farmland approach paths per body text)
- hasParking: true (Edale car park, pay and display)
- hazards: adders, ticks (from relatedGuides)

---

### 31. malham-cove
**Website file:** `content/walks/malham-cove-gordale.md`
- id (slug): `malham-cove-gordale`
- name: Malham Cove and Gordale Scar
- location: Malham, North Yorkshire
- lat: 54.0697 / lon: -2.1563
- distance: 9.1 km *(~5.7 miles)*
- difficulty: Moderate
- terrain: Limestone and moorland
- offLead: Partial
- livestock: true (sheep throughout farmland sections per body text)
- hasParking: true (Malham National Park car park)
- hazards: livestock (from body text)

---

### 32. grasmere-lake
**Website file:** `content/walks/grasmere-lake-circuit.md`
- id (slug): `grasmere-lake-circuit`
- name: Grasmere Lake Circuit
- location: Grasmere, Cumbria
- lat: 54.4592 / lon: -3.0237
- distance: 7.2 km *(~4.5 miles)*
- difficulty: Easy
- terrain: Lakeside and woodland
- offLead: Partial
- livestock: true (sheep on surrounding lower fells per body text)
- hasParking: true (Grasmere village car parks)
- hazards: livestock (from body text)

---

### 33. elterwater-langdale
**Website file:** `content/walks/elterwater-langdale-dog-walk.md`
- id (slug): `elterwater-langdale-dog-walk`
- name: Elterwater and Langdale Valley
- location: Elterwater, Cumbria
- lat: 54.424 / lon: -3.037
- distance: 6.4 km *(~4.0 miles)*
- difficulty: Easy
- terrain: Riverside paths and woodland
- offLead: Partial (leads near livestock and 1 Mar-31 Jul on open access land)
- livestock: true (sheep throughout valley including village common)
- hasParking: true (Elterwater village car park, National Trust, pay and display)
- hazards: livestock (from body text)

---

### 34. kinnoull-hill
**Website file:** `content/walks/kinnoull-hill-dog-walk.md`
- id (slug): `kinnoull-hill-dog-walk`
- name: Kinnoull Hill and Tay Valley Views
- location: Perth, Perth and Kinross
- lat: 56.3889 / lon: -3.4036
- distance: 4.8 km *(~3.0 miles)*
- difficulty: Moderate
- terrain: Woodland paths
- offLead: Partial (leads essential near cliff edges and tower)
- livestock: false
- hasParking: true (Jubilee car park or Corsiehill car park, free)
- hazards: cliff (150 m drop per body text)

---

### 35. rhossili-down
**Website file:** `content/walks/rhossili-down-dog-walk.md`
- id (slug): `rhossili-down-dog-walk`
- name: Rhossili Down Ridge Walk
- location: Rhossili, Gower, Swansea
- lat: 51.5752 / lon: -4.2878
- distance: 6.4 km *(~4.0 miles)*
- difficulty: Moderate
- terrain: Ridge and beach
- offLead: Partial (leads 1 Mar-31 Jul CRoW Act and near ponies year-round)
- livestock: true (semi-feral Welsh Mountain ponies year-round)
- hasParking: true (Rhossili NT car park)
- hazards: livestock, ticks (from body text)

---

### 36. penllergare-valley-woods
**Website file:** `content/walks/penllergare-valley-dog-walk.md`
- id (slug): `penllergare-valley-dog-walk`
- name: Penllergare Valley Woods and Waterfall
- location: Penllergaer, Swansea
- lat: 51.6811 / lon: -3.9653
- distance: 4.0 km *(~2.5 miles)*
- difficulty: Easy
- terrain: Woodland paths
- offLead: Partial (leads March to August, leads near all water year-round)
- livestock: false
- hasParking: true (Penllergare Valley Woods car park, free)
- hazards: none stated (flooding risk per body text)

---

### 37. llansteffan-castle
**Website file:** `content/walks/llansteffan-castle-dog-walk.md`
- id (slug): `llansteffan-castle-dog-walk`
- name: Llansteffan Castle and Estuary Walk
- location: Llansteffan, Carmarthenshire
- lat: 51.7694 / lon: -4.3871
- distance: 7.4 km *(~4.6 miles)*
- difficulty: Moderate
- terrain: Coastal path and farmland
- offLead: Partial (leads near livestock and at castle; northern beach dog ban May-Sep)
- livestock: true (Lord's Park Farm and farmland sections)
- hasParking: true (Llansteffan beach car park)
- hazards: livestock, flooding (tidal estuary currents per body text)

---

### 38. bute-park-cardiff
**Website file:** `content/walks/bute-park-dog-walk.md`
- id (slug): `bute-park-dog-walk`
- name: Bute Park and Taff Trail
- location: Cardiff
- lat: 51.4846 / lon: -3.1853
- distance: 4.8 km *(~3.0 miles)*
- difficulty: Easy
- terrain: Park paths and riverside trail
- offLead: Partial (off-lead in park, leads near roads and on Taff Trail)
- livestock: false
- hasParking: false (Cardiff city centre car parks — not park-specific)
- hazards: none stated (mountain-bikers on Taff Trail per body text — not in approved hazard list)

---

### 39. formby-beach-pinewoods
**Website file:** `content/walks/formby-beach-dog-walk.md`
- id (slug): `formby-beach-dog-walk`
- name: Formby Beach Dog Walk
- location: Formby, Merseyside
- lat: 53.5504 / lon: -3.0966
- distance: 4.5 km *(~2.8 miles)*
- difficulty: Moderate
- terrain: Sandy beach, sand dunes, compacted pinewood paths
- offLead: Full on beach year-round except Cafe Cove to Kingsway sea defences (1 May - 30 Sep); on leads on the Squirrel Walk
- livestock: false
- hasParking: true (National Trust Formby car park)
- hazards: ticks (from FAQ body text)

---

### 40. beacon-fell
**Website file:** `content/walks/beacon-fell-dog-walk.md`
- id (slug): `beacon-fell-dog-walk`
- name: Beacon Fell Dog Walk
- location: Beacon Fell, Lancashire
- lat: 53.8785 / lon: -2.6634
- distance: 3.4 km *(~2.1 miles)*
- difficulty: Easy
- terrain: Woodland paths, moorland summit, compacted stone tracks
- offLead: Off-lead through most of the park; on leads near seasonal livestock, farmland fringes, and wildlife ponds
- livestock: true (seasonal livestock)
- hasParking: true (Beacon Fell Country Park car park, pay and display)
- hazards: ticks (from body text)

---

### 41. rivington-pike
**Website file:** `content/walks/rivington-pike-dog-walk.md`
- id (slug): `rivington-pike-dog-walk`
- name: Rivington Pike Dog Walk
- location: Rivington, Lancashire
- lat: 53.6193 / lon: -2.5413
- distance: 9 km *(~5.6 miles)*
- difficulty: Moderate
- terrain: Moorland, stone steps, reservoir paths, woodland, terraced gardens
- offLead: Partial (open moor off-lead outside 1 Mar to 31 Jul CRoW restriction; sheep grazing year-round)
- livestock: true (sheep graze the moor year-round)
- hasParking: true (Hall Barn car park, Lever Park, no charge)
- hazards: livestock (from body text)

---

### 42. lyme-park
**Website file:** `content/walks/lyme-park-dog-walk.md`
- id (slug): `lyme-park-dog-walk`
- name: Lyme Park Dog Walk
- location: Disley, Cheshire
- lat: 53.3538 / lon: -2.0544
- distance: 7.2 km *(~4.5 miles)*
- difficulty: Moderate
- terrain: Estate tracks, moorland, ancient woodland, formal parkland
- offLead: Partial (Knightslow Wood year-round off-lead; estate on leads April to July; leads wherever deer, cattle, or sheep visible)
- livestock: true (deer, cattle, sheep across estate)
- hasParking: true (Lyme Park National Trust car park)
- hazards: deer, livestock (from body text)

---

### 43. farley-mount
**Website file:** `content/walks/farley-mount-dog-walk.md`
- id (slug): `farley-mount-dog-walk`
- name: Farley Mount Country Park
- location: Sparsholt, Hampshire
- lat: 51.0534 / lon: -1.3651
- distance: 6.4 km *(~4.0 miles)*
- difficulty: Easy
- terrain: Woodland and chalk downland
- offLead: Full (on-lead near cattle on downland sections)
- livestock: true (seasonal cattle grazing on chalk downland)
- hasParking: true (Farley Mount car park, free)
- hazards: ticks, livestock (from body text)

---

### 44. lepe-country-park
**Website file:** `content/walks/lepe-beach-dog-walk.md`
- id (slug): `lepe-beach-dog-walk`
- name: Lepe Beach and Solent Shore
- location: Exbury, Hampshire
- lat: 50.7871 / lon: -1.3577
- distance: 4.8 km *(~3.0 miles)*
- difficulty: Easy
- terrain: Coastal path and shingle beach
- offLead: Partial (family beach closed to dogs May-Sep; year-round alternative route available)
- livestock: false
- hasParking: true (Lepe Country Park car park, pay and display)
- hazards: none stated (strong currents at Lepe Spit per body text)

---

### Additional Category A notes for haytor-dartmoor and burley-new-forest

These two old IDs also have live pages under different slug patterns:

**haytor-dartmoor** → `content/walks/haytor-and-hound-tor.md`
- id (slug): `haytor-and-hound-tor`
- name: Haytor and Hound Tor
- location: Dartmoor, Devon
- lat: 50.5784 / lon: -3.7417
- distance: 8.4 km *(~5.2 miles)*
- difficulty: Moderate
- terrain: Moorland and granite tor
- offLead: Full
- livestock: true (ponies, cattle, sheep across moorland)
- hasParking: true (Haytor car park, free)
- hazards: adders, livestock (from body and dogSummary)

**burley-new-forest** → `content/walks/burley-village-forest.md`
- id (slug): `burley-village-forest`
- name: Burley Village and Forest Walks
- location: Burley, Hampshire
- lat: 50.8492 / lon: -1.6578
- distance: 6.4 km *(~4.0 miles)*
- difficulty: Easy
- terrain: Forest and heathland
- offLead: Partial
- livestock: true (free-roaming ponies, cattle, deer throughout)
- hasParking: true (Burley village car park, free)
- hazards: adders, livestock (from body text)

---

**Revised Category A count: 46 entries** (44 initially listed + haytor-dartmoor + burley-new-forest)

---

## CATEGORY B — Planned Batch, No Page Yet (8 entries)

These old IDs correspond to walks already planned for Batch 7 (in research/done) or Batch 8 (Midlands/East Midlands, confirmed in CLAUDE.md backlog).

| Old ID | Likely match | Batch | Region | Status |
|--------|-------------|-------|--------|--------|
| hardcastle-crags-hebden | Hardcastle Crags, Hebden Bridge | Batch 6 or 7 area | North West / Yorkshire border | Not in either completed batch — likely B |
| clumber-park-nottinghamshire | Clumber Park | Batch 8 | East Midlands | Listed in Batch 8 in CLAUDE.md backlog |
| sherwood-forest-major-oak | Sherwood Forest | Batch 8 | East Midlands | Listed in Batch 8 in CLAUDE.md backlog |
| cannock-chase-birches-valley | Cannock Chase | Batch 8 | East Midlands | Listed in Batch 8 in CLAUDE.md backlog |
| bradgate-park | Bradgate Park | Batch 8 | East Midlands | Listed in Batch 8 in CLAUDE.md backlog |
| calke-abbey | Calke Abbey | Batch 8 | East Midlands | Listed in Batch 8 in CLAUDE.md backlog |
| lickey-hills | Lickey Hills | Batch 8 | East Midlands | Listed in Batch 8 in CLAUDE.md backlog |
| roseberry-topping | Roseberry Topping | Batch 6 area | North East England | Not in completed Batch 6 list — likely B (candidate for separate North East batch) |

**Note on Batch 8:** CLAUDE.md explicitly lists "Batch 8: East Midlands (Bradgate Park, Calke Abbey, Cannock Chase, Sherwood Forest, Clumber Park, Lickey Hills)" as a confirmed backlog item. All six of those appear in the 84 old IDs and are Category B.

**Note on hardcastle-crags-hebden and roseberry-topping:** These were in the original WALKS_DB but did not make it into Batch 6 (North East: Hadrian's Wall, Bamburgh Beach, Alnmouth-Warkworth, Kielder Forest, Durham Riverside, Plessey Woods). They are strong candidates for a future North East batch or a Yorkshire/Pennines batch.

---

## CATEGORY C — No Page, Not in Planned Batch (30 entries)

These old IDs have no live website page and are not mentioned in any confirmed future batch in CLAUDE.md. Grouped by region with recommendation.

### North East England / Yorkshire / Pennines
| Old ID | Location | Region | Recommendation |
|--------|----------|--------|----------------|
| newtondale-levisham | Levisham, North York Moors | North Yorkshire | Strong candidate — North York Moors walk batch |
| robin-hoods-bay | Robin Hood's Bay, N. Yorkshire | North Yorkshire | Strong candidate — coastal North Yorkshire batch |
| dovestone-reservoir | Greenfield, Greater Manchester | Peak District fringes / North West | Candidate — extends North West coverage |

### Scotland
| Old ID | Location | Region | Recommendation |
|--------|----------|--------|----------------|
| loch-ard-aberfoyle | Aberfoyle, Stirlingshire | Scotland — Trossachs | Strong candidate — Trossachs/Loch Lomond expansion |
| loch-morlich-glenmore | Glenmore, Cairngorms | Scotland — Cairngorms | Strong candidate — Cairngorms batch |

### Wales / South West
| Old ID | Location | Region | Recommendation |
|--------|----------|--------|----------------|
| newlands-corner | Albury, Surrey | Surrey Hills | Candidate — Surrey expansion (research file exists: surrey-walks-expansion-april-5.md) |
| ranmore-common | Ranmore, Surrey | Surrey Hills | Candidate — Surrey expansion (image placeholder already noted in CLAUDE.md) |
| savernake-forest | Marlborough, Wiltshire | South West / Cotswolds | Candidate — Cotswolds/South West batch |
| valley-of-rocks-lynton | Lynton, Devon | South West | Candidate — Devon/Exmoor batch |
| quantock-hills-staple-plain | Somerset | South West | Candidate — South West batch |
| mallards-pike-forest-of-dean | Forest of Dean, Gloucestershire | South West / Cotswolds | Candidate — Forest of Dean / Cotswolds batch |
| symonds-yat | Herefordshire | South West / Wales border | Candidate — Wye Valley batch |
| baggy-point-croyde | Croyde, Devon | South West | Candidate — Devon coastal batch |
| golden-cap-seatown | Seatown, Dorset | South West | Strong candidate — Dorset coastal batch |
| tehidy-country-park | Camborne, Cornwall | South West | Candidate — Cornwall batch |
| moors-valley | Ringwood, Hampshire/Dorset | South West | Candidate — Hampshire/Dorset batch |
| compton-bay-iow | Isle of Wight | South West | Candidate — Isle of Wight walk |

### Northern Ireland
| Old ID | Location | Region | Recommendation |
|--------|----------|--------|----------------|
| cave-hill-belfast | Belfast, Northern Ireland | Northern Ireland | Candidate — Northern Ireland batch (new territory) |
| tollymore-forest | Newcastle, Co. Down | Northern Ireland | Candidate — Northern Ireland batch |
| white-park-bay | Ballycastle, Co. Antrim | Northern Ireland | Candidate — Northern Ireland coastal batch |
| crawfordsburn-country-park | County Down | Northern Ireland | Candidate — Northern Ireland batch |

### East of England
| Old ID | Location | Region | Recommendation |
|--------|----------|--------|----------------|
| dunwich-heath-suffolk | Dunwich, Suffolk | East of England | Strong candidate — East of England batch (mentioned in CLAUDE.md future batches) |
| thetford-forest-high-lodge | Thetford, Norfolk | East of England | Strong candidate — East of England batch |
| sheringham-park | Sheringham, Norfolk | East of England | Candidate — East of England batch |
| epping-forest-chingford | Chingford, Essex/London | East of England / London fringe | Candidate — East of England batch |
| gibraltar-point-lincolnshire | Skegness, Lincolnshire | East of England | Candidate — East of England batch |
| uffington-white-horse | Oxfordshire | Cotswolds / South East | Candidate — Cotswolds batch |

### Yorkshire / Pennines
| Old ID | Location | Region | Recommendation |
|--------|----------|--------|----------------|
| dalby-forest | Thornton-le-Dale, N. Yorkshire | North Yorkshire | Strong candidate — North Yorkshire batch |

---

## Revised Final Counts

After reviewing all 84 IDs:

| Category | Count |
|----------|-------|
| A — Live page match found | 46 |
| B — No page, planned batch | 8 |
| C — No page, not in planned batch | 30 |
| **Total** | **84** |

---

## Action Points

1. **WALKS_DB sync (Category A):** 46 old IDs now have corrected website front matter data above. All website distances are in km — convert to miles before syncing to WALKS_DB. Key slug changes (old ID → new site slug) are noted per entry.

2. **Batch 8 (East Midlands):** 6 IDs confirmed — Bradgate Park, Calke Abbey, Cannock Chase, Sherwood Forest, Clumber Park, Lickey Hills. Pages to be built in Batch 8.

3. **Batch 9 candidates (recommended priority order):**
   - North Yorkshire (Dalby Forest, Robin Hood's Bay, Newtondale/Levisham) — natural extension of existing Yorkshire coverage
   - East of England (Dunwich Heath, Thetford Forest, Sheringham Park, Gibraltar Point, Epping Forest) — confirmed in CLAUDE.md future batches
   - Cotswolds / South West (Savernake, Golden Cap, Quantock Hills, Mallards Pike)

4. **Northern Ireland:** 4 IDs (Cave Hill, Tollymore, White Park Bay, Crawfordsburn) represent an entirely new territory with no coverage. Flag for PO decision on whether to expand into NI.

5. **Surrey expansion:** newlands-corner and ranmore-common are well-established Surrey walks with no page. Research file exists (surrey-walks-expansion-april-5.md). Note: CLAUDE.md already flags ranmore-common.jpg as a placeholder image needing replacing.

6. **Scotland gaps:** loch-ard-aberfoyle and loch-morlich-glenmore are both strong walks with no pages. Consider adding to a Scotland batch 2 (Trossachs + Cairngorms).

---

*Report prepared: April 9 2026. Researcher role.*
