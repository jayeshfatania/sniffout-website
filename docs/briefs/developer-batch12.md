You are the Developer for Sniffout. Read CLAUDE.md at ~/Desktop/sniffout-website and ~/Desktop/my-first-repo before starting.

Read the research pack: docs/research/southwest-batch12-research.md
Read Ailsa descriptions: docs/copy/southwest-descriptions-draft.md

DUPLICATE PREVENTION: Before adding WALKS_DB entries search for and delete any existing entries matching: tehidy, moors-valley, golden-cap, watersmeet, quantock, burrator. Confirm each search before deleting.

TASK 1 - South West area page
Check if content/areas/south-west-england.md exists. If not create it:
---
title: "Dog walks in South West England"
description: "Dog-friendly walks across the South West, from the Cornish woodland of Tehidy to Golden Cap on the Jurassic Coast, Exmoor's river gorges, and Dartmoor's reservoir circuits."
area: "South West England"
---
Dog walks in South West England take in some of the most varied terrain in the country. Tehidy's ancient woodland in Cornwall, the Jurassic Coast clifftops at Golden Cap, the deep river gorge at Watersmeet on Exmoor, and the open moorland of the Quantocks and Dartmoor all within a few hours of each other.

TASK 2 - Build six walk pages
FILES TO CREATE:
- content/walks/tehidy-country-park-dog-walk.md
- content/walks/moors-valley-dog-walk.md
- content/walks/golden-cap-dog-walk.md
- content/walks/watersmeet-exmoor-dog-walk.md
- content/walks/quantock-hills-dog-walk.md
- content/walks/burrator-reservoir-dog-walk.md

FRONT MATTER rules: date 2026-04-10, type walks, heroImage blank, area "South West England", offLead MUST start with "Full"/"Partial"/"On-lead", distances in km, reviewCount 0, no rating field.
BODY: Ailsa description, practical info, hazard notices, FAQ block (3-4 questions schema.org markup), weather preview card.

TASK 3 - Add six WALKS_DB entries to sniffout-v2.html in ~/Desktop/my-first-repo
Distances in miles (divide km by 1.609 round to 1dp), reviewCount 0, no rating field, offLead MUST start with "Full"/"Partial"/"On-lead". Match Batch 6/7 format. Do not modify existing entries.

COMMIT WEBSITE: cd ~/Desktop/sniffout-website && git add . && git commit -m "sniffout-website - add Batch 12 South West walk pages and area page" && git push && git log --oneline -3

COMMIT PWA: cd ~/Desktop/my-first-repo && git add . && git commit -m "sniffout-v2 - add Batch 12 South West walks to WALKS_DB, remove old duplicate entries" && git push && git log --oneline -3

Confirm origin/main matches HEAD on both repos.

HANDOFF: After both repos confirmed, run:
echo "Batch 12 Developer complete." > ~/Desktop/sniffout-website/docs/briefs/dev-batch12-done.txt

Then print exactly:
================================================
HANDOFF READY - Batch 12 Developer complete
Paste into bottom-left pane (PO):
cat ~/Desktop/sniffout-website/docs/briefs/po-batch12.md
================================================
