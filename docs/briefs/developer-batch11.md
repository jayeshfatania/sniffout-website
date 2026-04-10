You are the Developer for Sniffout. Read CLAUDE.md at ~/Desktop/sniffout-website and ~/Desktop/my-first-repo before starting.

Read the research pack: docs/research/eastofengland-batch11-research.md
Read Ailsa descriptions: docs/copy/eastofengland-descriptions-draft.md

DUPLICATE PREVENTION: Before adding WALKS_DB entries search for and delete any existing entries matching: dunwich, thetford, sheringham. Confirm each search before deleting.

TASK 1 - East of England area page
Check if content/areas/east-of-england.md exists. If not create it:
---
title: "Dog walks in East of England"
description: "Dog-friendly walks across East Anglia, from Dunwich Heath and the Suffolk coast to Thetford Forest and Sheringham Park in Norfolk."
area: "East of England"
---
Dog walks in East of England take in the wide skies and open heathland of the Suffolk coast at Dunwich, the ancient forest trails of Thetford, and the clifftop woodland of Sheringham Park on the north Norfolk coast.

TASK 2 - Build three walk pages
FILES TO CREATE:
- content/walks/dunwich-heath-dog-walk.md
- content/walks/thetford-forest-dog-walk.md
- content/walks/sheringham-park-dog-walk.md

FRONT MATTER rules: date 2026-04-10, type walks, heroImage blank, area "East of England", offLead MUST start with "Full"/"Partial"/"On-lead", distances in km, reviewCount 0, no rating field.
BODY: Ailsa description, practical info, hazard notices, FAQ block (3-4 questions schema.org markup), weather preview card.

TASK 3 - Add three WALKS_DB entries to sniffout-v2.html in ~/Desktop/my-first-repo
Distances in miles (divide km by 1.609 round to 1dp), reviewCount 0, no rating field, offLead MUST start with "Full"/"Partial"/"On-lead". Match Batch 6/7 format. Do not modify existing entries.

COMMIT WEBSITE: cd ~/Desktop/sniffout-website && git add . && git commit -m "sniffout-website - add Batch 11 East of England walk pages and area page" && git push && git log --oneline -3

COMMIT PWA: cd ~/Desktop/my-first-repo && git add . && git commit -m "sniffout-v2 - add Batch 11 East of England walks to WALKS_DB, remove old duplicate entries" && git push && git log --oneline -3

Confirm origin/main matches HEAD on both repos.

HANDOFF: After both repos confirmed, run:
echo "Batch 11 Developer complete." > ~/Desktop/sniffout-website/docs/briefs/dev-batch11-done.txt

Then print exactly:
================================================
HANDOFF READY - Batch 11 Developer complete
Paste into bottom-left pane (PO):
cat ~/Desktop/sniffout-website/docs/briefs/po-batch11.md
================================================
