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
