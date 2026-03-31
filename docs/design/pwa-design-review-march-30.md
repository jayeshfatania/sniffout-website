# PWA Design Review - March 2026
**Reviewer:** Designer
**Date:** 2026-03-30
**Scope:** sniffout-v2.html - visual quality gap assessment vs sniffout.co.uk

---

## Summary

The PWA core design language is solid: Plus Jakarta Sans is consistent throughout, the colour-coded difficulty system is already in place, the card radius and shadow system feel cohesive, and the frosted-glass tab bar is well-executed. The quality gap vs the website is concentrated in two areas: placeholder imagery (dark green gradient blocks appearing where real images should be) and a handful of secondary treatments that look unfinished by comparison. None of the gaps require structural rework. The highest-priority items are all visual surface changes that will have a disproportionate impact on perceived quality.

---

## Recommendations (prioritised)

---

**P1 - Replace Today tab Hidden Gems gradient placeholders**

What's wrong: Portrait cards in the Hidden Gems carousel show a dark solid gradient at 148px tall when no image is loaded, making an entire section of the Today tab look like a broken prototype.

Recommendation: Assess which Hidden Gems walks have confirmed images in the website asset library and supply those images. For any Hidden Gems walk with no image available, remove that specific card from the carousel rather than showing the gradient placeholder. If fewer than two cards have images, hide the Hidden Gems section entirely until a minimum of two real images can be shown. A section title above empty gradient blocks erodes trust in the whole tab.

Effort: Low (image audit and conditional render toggle)

---

**P2 - Replace green space list placeholder thumbnails**

What's wrong: The "Other nearby green spaces" list shows a 44x44px dark green gradient square for each item with no image, which reads as a broken image rather than a deliberate design choice.

Recommendation: Replace the dark gradient placeholder with a category icon (for example, a Lucide `trees` or `map-pin` icon) centred on a brand-tint background (`#EDF2E8`), using the brand colour (`#2C4A14`) for the icon itself. This is the same tint used on active nav icons and badge backgrounds, so it stays within the existing token set and looks deliberate. Walk images from the website asset library should be used where a named walk match exists; the icon-on-tint treatment covers cases where no image is available.

Effort: Low

---

**P3 - Move walk name from below image to overlaid on Today tab portrait cards**

What's wrong: Portrait cards in the Today tab (Sniffout Picks and Hidden Gems) place the walk name in a text block beneath the image, while the Walks tab trail cards use a name overlay gradient on the image. The two cards use similar proportions but different treatments, creating an inconsistency that undermines the overlay-first design language locked in CLAUDE.md.

Recommendation: Add an overlay gradient and name label to portrait cards, matching the treatment already implemented on `.trail-card-name-overlay`. The name sits at the bottom of the image on a `linear-gradient(to bottom, transparent, rgba(0,0,0,0.65))` strip. Remove the `.portrait-name` element from the body below. Retain `.portrait-meta` (distance and difficulty) in the card body below the image - this is a narrower card than the Walks tab trail card and the body gives it room to breathe.

Effort: Low

---

**P4 - Show walk distance as plain text, not a pill badge**

What's wrong: Distance appears as a pill badge in the tag row alongside the off-lead status and difficulty badges, adding a fourth badge that creates visual clutter and dilutes the signal value of the colour-coded difficulty badge.

Recommendation: Move distance out of the `.trail-card-tags` row entirely. Display it as plain secondary text in `.trail-card-meta` above the tag row, formatted as "2.4 mi" or "2.4 km" according to the user's units setting. The tag row then contains a maximum of two badges: off-lead status and difficulty. This matches the website's typographic hierarchy where distance is descriptive text and difficulty is the only colour-coded signal.

Effort: Low

---

**P5 - Colour-code Me tab entry icon backgrounds**

What's wrong: Me tab entry row icons use a plain off-white square (`--bg` fill with `--border` outline), which looks flat against the white card surface and reads as an unfinished placeholder rather than a deliberate treatment.

Recommendation: Assign a distinct background colour to each entry row icon container based on its category. Use tints already in the token set where possible - brand-tint (`#EDF2E8`) for walk-related entries (Journal, Saved Walks), amber-tint (`#FEF3E2`) for health or alert entries, and a neutral warm tint for Settings. The icon itself should use the corresponding mid-tone colour (brand, amber, ink-2). This is a one-line CSS change per entry type and moves the Me tab from functional-but-flat to a finish consistent with the rest of the app.

Effort: Low

---

**P6 - Verify Weather tab is rendering wx-tile components, not condition-cell**

What's wrong: The codebase contains two CSS treatments for weather metric cards: an older `.condition-cell` pattern (12px radius, no shadow, small value text) and a newer `.wx-tile` pattern (20px radius, box shadow, 32px bold value, colour-coded descriptor text). If any metric card is still rendering with the older pattern, it will look noticeably weaker than the surrounding UI.

Recommendation: Audit which CSS class is being applied to the Rain, Wind, UV, and Humidity tiles at runtime. If any tile is using `.condition-cell`, migrate it to `.wx-tile`. The `.wx-tile` treatment is already well-executed and no visual changes to it are needed beyond confirming it is in use everywhere.

Effort: Low (audit only; fix is a class swap if needed)

---

**P7 - Sniffout Pick badge - increase contrast on image overlay**

What's wrong: The Sniffout Pick badge uses brand-tint (`#EDF2E8`) background with brand (`#2C4A14`) text. On a light-coloured photograph this reads cleanly; on a darker image the light green badge can become hard to distinguish from the image underneath because it lacks sufficient contrast with dark backgrounds.

Recommendation: Add a subtle `box-shadow: 0 1px 4px rgba(0,0,0,0.2)` to `.trail-card-badge.badge-pick` and `.portrait-badge.badge-pick` to lift the badge off any image background. Alternatively, add a 1px white border. Do not change the badge colours themselves - the brand-tint/brand combination is intentional and correct. This is a one-line shadow addition.

Effort: Low

---

## What's working well

**Difficulty colour system.** Easy (green), Moderate (amber), Hard (red) is already implemented correctly in `.trail-tag.diff-*` classes and matches the website treatment. No changes needed.

**Typography.** Plus Jakarta Sans is applied consistently at the correct weights (400 through 800) throughout all tabs. The type scale is clean and the letter-spacing on large display numbers (dog name, stat numbers) is well-judged.

**Card radius and shadow system.** The graduated radius system (`--radius-sm` through `--radius-xl`) is applied coherently. Card shadows are light and consistent. The 20px card radius on trail cards matches the website card treatment.

**Tab bar.** Frosted glass, active-state brand-tint pill on icon, brand-coloured active label. This is a strong execution and consistent with the wider design language.

**Tap feedback.** `scale(0.97)` on `:active` applied consistently across cards, rows, and buttons. No gaps observed.

**Me tab dog card.** The large display-weight dog name, centred avatar with brand border, and gear button in the corner is a confident, premium treatment that does not need changes.

**Stats dashboard.** Brand-coloured numbers, clean dividers, and the three-column layout in `.me-stats-dashboard` is well-balanced.

**Walk card proportions.** 240px width and 140px image height on trail cards gives a strong image-to-content ratio. Do not revisit.

---

## What to leave alone

**Card overlay treatment.** Locked per CLAUDE.md. Walk name over image with gradient is the correct treatment and should not be revisited.

**Dark mode token system.** The Scheme B (Dark Slate) overrides are well-implemented. No design changes needed.

**Weather tab wx-tile value size.** The 32px bold value with colour-coded descriptor text (`--good`, `--caution`, `--bad`) is a strong and functional pattern. Do not reduce the value size or add decorative elements.

**Nearby tab.** Not reviewed in this round. The Google Places integration and map view are functional-first components that sit outside the design uplift scope.

**Walk card description text.** The two-line clamped description at 12px below the tag row adds useful context without cluttering the card. Leave it.

---

*Design review produced by Designer, 2026-03-30. No files modified.*
