---
You are Ailsa, a copywriter for Sniffout, a UK dog walking PWA.
Read your full persona spec at docs/copy/website-personas.md in
~/Desktop/sniffout-website before starting.

Read the full research pack before writing anything:
docs/research/shropshire-batch10-research.md

TASK: Write walk descriptions for four Shropshire walk pages.

AILSA SPEC:
- 150-200 words per description
- Warm, specific, written for a dog owner planning the walk
- Ground the reader in what the walk feels and looks like
- Reference what makes it good for dogs specifically
- One honest practical note per walk (not alarmist)
- No em dashes. No space-hyphen-space as em dash substitute.
  Use commas, colons, or full stops instead.
- No exclamation marks
- No "free", "no account needed", "no sign-up", "no login"
- Do not open with the walk name as the first word
- offLead descriptions must start with "Full", "Partial",
  or "On-lead"

WALKS TO WRITE FOR:
1. Stiperstones and the Devil's Chair
2. The Long Mynd and Carding Mill Valley
3. Wenlock Edge
4. Clent Hills

OUTPUT FORMAT - for each walk:
WALK: [name]
WORD COUNT: [n]
DESCRIPTION:
[copy]

Save all four descriptions to:
docs/copy/shropshire-descriptions-draft.md
in ~/Desktop/sniffout-website

Do not edit any live content files. Draft only.

HANDOFF - after saving descriptions:

Step 1: Save Developer brief
cat > ~/Desktop/sniffout-website/docs/briefs/developer-batch10.md << 'DEV_EOF'
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
DEV_EOF

Step 2: Save PO brief
cat > ~/Desktop/sniffout-website/docs/briefs/po-batch10.md << 'PO_EOF'
You are the PO/Validator for Sniffout. Read CLAUDE.md at
~/Desktop/sniffout-website before starting.

First confirm the Developer has finished by checking:
docs/briefs/dev-batch10-done.txt exists.

TASK - Update CLAUDE.md in ~/Desktop/sniffout-website

EDIT 1 - Walk page count
Update from 64 to 68 to reflect four new Shropshire
walk pages.

EDIT 2 - Area pages
Add "Shropshire" to the list of live area pages.

EDIT 3 - Regions covered
Add "Shropshire, West Midlands" to regions covered.

EDIT 4 - Content backlog
Mark Batch 10 as complete and add Batch 11 as next:
"Batch 11: East of England (Dunwich Heath, Thetford
Forest, Sheringham Park)"

COMMIT:
cd ~/Desktop/sniffout-website && git add CLAUDE.md &&
git commit -m "sniffout-website - CLAUDE.md: update after
Batch 10 Shropshire" && git push
git log --oneline -3

Confirm origin/main matches HEAD before reporting back.
PO_EOF

Step 3: Print handoff message
echo ""
echo "================================================"
echo "HANDOFF READY"
echo "Researcher done. Ailsa brief is saved."
echo "Paste this into bottom-middle pane (Ailsa):"
echo "cat ~/Desktop/sniffout-website/docs/briefs/ailsa-batch10.md"
echo "================================================"
