You are the Developer for Sniffout. Read CLAUDE.md at
~/Desktop/sniffout-website and ~/Desktop/my-first-repo
before starting.

Read the research pack:
docs/research/shropshire-batch10-research.md

Read Ailsa descriptions:
docs/copy/shropshire-descriptions-draft.md

DUPLICATE PREVENTION:
Before adding any new WALKS_DB entries, search for and
delete any existing entries matching these names or IDs:
- stiperstones (if present)
- long-mynd (if present)
- wenlock-edge (if present)
- clent-hills (if present)
Confirm each search before deleting.

TASK 1 - Shropshire area page
Check if content/areas/shropshire.md exists.
If not, create it:

---
title: "Dog walks in Shropshire"
description: "Dog-friendly walks across Shropshire and
the West Midlands, from the rocky heights of Stiperstones
and the Long Mynd to the ancient limestone of Wenlock Edge."
area: "Shropshire"
---

Dog walks in Shropshire cover some of the most varied
terrain in the Midlands. Stiperstones and the Long Mynd
are proper hill walking, Wenlock Edge is ancient limestone
woodland, and Clent Hills offers accessible ridge walking
on the Birmingham doorstep.

TASK 2 - Build four walk pages
FILES TO CREATE:
- content/walks/stiperstones-dog-walk.md
- content/walks/long-mynd-carding-mill-dog-walk.md
- content/walks/wenlock-edge-dog-walk.md
- content/walks/clent-hills-dog-walk.md

FRONT MATTER rules for every page:
- date: 2026-04-10
- type: walks
- heroImage: ""
- area: "Shropshire"
- offLead MUST start with "Full", "Partial", or "On-lead"
- All distances in km
- reviewCount: 0, no rating field

BODY CONTENT per page:
- Ailsa description
- Practical info: parking, facilities, pub/cafe, transport
- Hazard notices
- FAQ block: 3-4 questions, schema.org markup matching
  existing walk pages
- Weather preview card using lat/lon from front matter

TASK 3 - Add four WALKS_DB entries
File: sniffout-v2.html in ~/Desktop/my-first-repo
- Distances in miles (divide km by 1.609, round to 1dp)
- reviewCount: 0, no rating field
- offLead MUST start with "Full", "Partial", or "On-lead"
- Match exact format of existing Batch 6/7 entries
- Do not modify any existing entries

COMMIT - WEBSITE REPO:
cd ~/Desktop/sniffout-website && git add . && git commit -m
"sniffout-website - add Batch 10 Shropshire walk pages and
area page" && git push
git log --oneline -3

COMMIT - PWA REPO:
cd ~/Desktop/my-first-repo && git add . && git commit -m
"sniffout-v2 - add Batch 10 Shropshire walks to WALKS_DB,
remove old duplicate entries" && git push
git log --oneline -3

Confirm origin/main matches HEAD on both repos.

HANDOFF - after both repos confirmed at HEAD:
echo "Batch 10 Developer complete. Both repos at HEAD." > ~/Desktop/sniffout-website/docs/briefs/dev-batch10-done.txt

Then print this message clearly:
HANDOFF READY: Paste this into bottom-left (PO) pane:
cat ~/Desktop/sniffout-website/docs/briefs/po-batch10.md

Report back confirming the handoff message was printed.
