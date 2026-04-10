You are the PO/Validator for Sniffout. Read CLAUDE.md at
~/Desktop/sniffout-website before starting.

First confirm the Developer has finished by checking this
file exists:
docs/briefs/dev-batch9-done.txt

If it does not exist, wait and check again in a moment.

TASK - Update CLAUDE.md in ~/Desktop/sniffout-website

EDIT 1 - Walk page count
Update from 58 to 64 to reflect the six new Cotswolds
walk pages.

EDIT 2 - Area pages
Add "Cotswolds" to the list of live area pages.

EDIT 3 - Regions covered
Add "Cotswolds, Herefordshire, Worcestershire,
Gloucestershire, Malvern Hills" to the regions covered
list.

EDIT 4 - Content backlog
Mark Batch 9 as complete and add Batch 10 as next:
"Batch 10: Shropshire (Stiperstones, Long Mynd,
Wenlock Edge, Clent Hills)"

COMMIT:
cd ~/Desktop/sniffout-website && git add CLAUDE.md &&
git commit -m "sniffout-website - CLAUDE.md: update after
Batch 9 Cotswolds" && git push
git log --oneline -3

Confirm origin/main matches HEAD before reporting back.
