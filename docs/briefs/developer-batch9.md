You are the Developer for Sniffout. Read CLAUDE.md at
~/Desktop/sniffout-website and ~/Desktop/my-first-repo
before starting.

Read the research pack:
docs/research/cotswolds-batch9-research.md

Read Ailsa descriptions:
docs/copy/cotswolds-descriptions-draft.md

DUPLICATE PREVENTION:
Before adding any new WALKS_DB entries, search for and
delete any existing entries matching these walk names
or old-style IDs:
- symonds-yat (if present)
- malvern-hills (if present)
- broadway-tower (if present)
- cleeve-hill (if present)
- bourton-on-the-water (if present)
- chipping-campden (if present)

Confirm each search result before deleting.

TASK 1 - Cotswolds area page
Check if content/areas/cotswolds.md exists in
~/Desktop/sniffout-website.
If not, create it:

---
title: "Dog walks in the Cotswolds"
description: "Dog-friendly walks across the Cotswolds
and Malvern Hills, from Dover's Hill and Broadway Tower
to the Wye Valley at Symonds Yat."
area: "Cotswolds"
---

Dog walks in the Cotswolds take in some of the best
ridge walking in England, from the escarpment at
Dover's Hill and Cleeve Hill to the deep wooded gorge
of the Wye Valley at Symonds Yat. The Malvern Hills
add an entirely different character to the mix.

TASK 2 - Build six walk pages
FILES TO CREATE:
- content/walks/chipping-campden-dovers-hill-dog-walk.md
- content/walks/bourton-on-the-water-dog-walk.md
- content/walks/broadway-tower-dog-walk.md
- content/walks/cleeve-hill-dog-walk.md
- content/walks/symonds-yat-dog-walk.md
- content/walks/malvern-hills-dog-walk.md

FRONT MATTER rules for every page:
- date: 2026-04-10
- type: walks
- heroImage: ""
- area: "Cotswolds"
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

TASK 3 - Add six WALKS_DB entries
File: sniffout-v2.html in ~/Desktop/my-first-repo
- Distances in miles (divide km by 1.609, round to 1dp)
- reviewCount: 0, no rating field
- offLead MUST start with "Full", "Partial", or "On-lead"
- Match exact format of existing Batch 6/7 entries
- Do not modify any existing entries

COMMIT - WEBSITE REPO:
cd ~/Desktop/sniffout-website && git add . && git commit -m "sniffout-website - add Batch 9 Cotswolds walk pages and area page" && git push
git log --oneline -3

COMMIT - PWA REPO:
cd ~/Desktop/my-first-repo && git add . && git commit -m "sniffout-v2 - add Batch 9 Cotswolds walks to WALKS_DB, remove old duplicate entries" && git push
git log --oneline -3

Confirm origin/main matches HEAD on both repos before
reporting back.

HANDOFF - run after both repos confirmed at HEAD:

Step 1: Write completion marker
echo "Batch 9 Developer complete. Both repos at HEAD." > ~/Desktop/sniffout-website/docs/briefs/dev-batch9-done.txt

Step 2: Trigger PO pane
tmux send-keys -t sniffout:2 "cat ~/Desktop/sniffout-website/docs/briefs/po-batch9.md" Enter

Report back confirming handoff commands were run.
