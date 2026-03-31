# Developer Spec: Mobile Burger Menu Redesign
**Designer**
**Date:** 2026-03-31
**Source spec:** `docs/design/pagination-burger-spec-march-31.md` - Task 1
**Status:** Ready for implementation. No files modified.

---

## Overview of changes

The full-screen white overlay is replaced by two new elements: a scrim div and a slide-in panel div. All `.nav-mobile-*` CSS is rewritten. The open/close JavaScript is updated to target the new IDs and toggle the panel via `transform` rather than `display`. The existing `id="nav-hamburger"` stays unchanged.

---

## 1. CSS - classes to remove

Delete the following rules entirely from the stylesheet:

```
.nav-mobile-overlay
.nav-mobile-overlay.open
```

All other `.nav-mobile-*` rules are replaced by the new rules below.

---

## 2. CSS - full replacement ruleset

Add the following CSS in place of the removed rules. All values use existing tokens. No new tokens are introduced.

```css
/* --------------------------------------------------
   MOBILE NAV - SCRIM
   Full-viewport backdrop behind the panel.
   Fades in on open, fades out on close.
-------------------------------------------------- */
.nav-mobile-scrim {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 199;
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease;
}

.nav-mobile-scrim.open {
  opacity: 1;
  pointer-events: auto;
}

/* --------------------------------------------------
   MOBILE NAV - PANEL
   Slides in from the right edge.
   Always in the DOM. Hidden via transform, not display.
   Do NOT add display:none to this element.
-------------------------------------------------- */
.nav-mobile-panel {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80vw;
  max-width: 320px;
  background: var(--surface);
  border-left: 3px solid var(--brand);
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.12);
  z-index: 200;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 250ms cubic-bezier(0.32, 0.72, 0, 1);
  padding-bottom: env(safe-area-inset-bottom);
  overflow: hidden;
}

.nav-mobile-panel.open {
  transform: translateX(0);
}

/* --------------------------------------------------
   MOBILE NAV - CLOSE BUTTON
   Circular button, top-right of panel.
   Contains a Lucide X icon. See HTML section.
-------------------------------------------------- */
.nav-mobile-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--ink-2);
  padding: 0;
  flex-shrink: 0;
  z-index: 1;
  transition: transform 0.12s ease;
  -webkit-tap-highlight-color: transparent;
}

.nav-mobile-close:active {
  transform: scale(0.94);
}

/* --------------------------------------------------
   MOBILE NAV - LINKS CONTAINER
   Top margin clears the close button:
   16px (button top offset) + 40px (button height) + 16px (gap) = 72px
-------------------------------------------------- */
.nav-mobile-links {
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  flex: 1;
  overflow-y: auto;
}

/* --------------------------------------------------
   MOBILE NAV - PRIMARY LINKS
-------------------------------------------------- */
.nav-mobile-link {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 17px;
  font-weight: 600;
  color: var(--ink);
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  text-decoration: none;
  letter-spacing: 0.01em;
  display: block;
  transition: color 0.15s ease;
  -webkit-tap-highlight-color: transparent;
}

/* Active state: current page link */
.nav-mobile-link.active {
  color: var(--brand);
}

/* --------------------------------------------------
   MOBILE NAV - DIVIDER
   Separates primary nav links from utility links.
-------------------------------------------------- */
.nav-mobile-divider {
  height: 1px;
  background: var(--border);
  margin: 8px 20px;
  flex-shrink: 0;
}

/* --------------------------------------------------
   MOBILE NAV - UTILITY LINKS
   Smaller, secondary colour. Settings, About, etc.
   Applied as a modifier on .nav-mobile-link:
   class="nav-mobile-link nav-mobile-link--utility"
-------------------------------------------------- */
.nav-mobile-link--utility {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-2);
  padding: 14px 20px;
  border-bottom: none;
}

.nav-mobile-link--utility.active {
  color: var(--brand);
}
```

**Dark mode note:** No additional dark mode overrides are needed. All values reference CSS tokens (`var(--surface)`, `var(--bg)`, `var(--border)`, `var(--ink)`, `var(--ink-2)`, `var(--brand)`) that update automatically when `body.night` is applied.

---

## 3. HTML - structure replacement

### Old structure (remove this)

```html
<div id="nav-mobile-overlay" class="nav-mobile-overlay">
  <button id="nav-mobile-close" class="nav-mobile-close">x</button>
  <nav class="nav-mobile-links">
    <!-- links -->
  </nav>
</div>
```

### New structure (replace with this)

The scrim and panel are two sibling elements. Both must be present in the DOM at page load. The panel uses `transform` to hide - do not use `display: none` or `visibility: hidden` on either element.

```html
<!-- Scrim: sits behind the panel, covers the remaining 20% of viewport -->
<div id="nav-mobile-scrim" class="nav-mobile-scrim"></div>

<!-- Panel: slides in from right -->
<div id="nav-mobile-panel" class="nav-mobile-panel" role="dialog" aria-modal="true" aria-label="Navigation">

  <button id="nav-mobile-close" class="nav-mobile-close" aria-label="Close navigation">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </button>

  <nav class="nav-mobile-links" aria-label="Site navigation">
    <!-- Primary links - add class="active" to whichever matches the current page -->
    <a class="nav-mobile-link" href="/">Home</a>
    <a class="nav-mobile-link" href="/walks/">Walks</a>
    <a class="nav-mobile-link" href="/guides/">Guides</a>
    <a class="nav-mobile-link" href="/about/">About</a>

    <!-- Divider before utility links -->
    <div class="nav-mobile-divider" role="separator"></div>

    <!-- Utility links -->
    <a class="nav-mobile-link nav-mobile-link--utility" href="/contact/">Contact</a>
  </nav>

</div>
```

**Active link:** Add `class="nav-mobile-link active"` to the link matching the current page. In Hugo, use `{{ if eq .RelPermalink "/walks/" }}active{{ end }}` or equivalent inside the `class` attribute. The active class only changes the link colour - no other styles are applied.

**Link list:** Replace the placeholder links above with the actual site nav links. The utility link section (below the divider) should contain only secondary items like Contact. Keep the primary list to 4-5 items maximum.

---

## 4. JavaScript - open/close logic replacement

### What changes

- `#nav-mobile-overlay` is gone. Replace all references with `#nav-mobile-panel`.
- A new `#nav-mobile-scrim` element must be toggled in sync with the panel.
- Open/close now adds/removes the `.open` class. The panel shows/hides via CSS transform - no `display` toggling.
- Scrim click closes the panel.
- Body scroll is locked while the panel is open.
- Escape key closes the panel.

### Old logic to remove

Remove any existing event listeners or functions that reference `nav-mobile-overlay` or toggle `display` on the mobile nav.

### New logic to add

```javascript
(function () {
  var hamburger = document.getElementById('nav-hamburger');
  var panel     = document.getElementById('nav-mobile-panel');
  var scrim     = document.getElementById('nav-mobile-scrim');
  var closeBtn  = document.getElementById('nav-mobile-close');

  if (!hamburger || !panel || !scrim || !closeBtn) return;

  function openNav() {
    panel.classList.add('open');
    scrim.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeNav() {
    panel.classList.remove('open');
    scrim.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openNav);
  closeBtn.addEventListener('click', closeNav);
  scrim.addEventListener('click', closeNav);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      closeNav();
      hamburger.focus();
    }
  });
}());
```

**Implementation notes:**

- The IIFE wrapper keeps the variables out of global scope. If the existing codebase wraps its JS differently (e.g. a DOMContentLoaded listener or a module), match that pattern.
- `closeBtn.focus()` on open and `hamburger.focus()` on close are accessibility requirements for modal dialogs. Do not remove them.
- `document.body.style.overflow = 'hidden'` prevents the page from scrolling behind the open panel. `document.body.style.overflow = ''` restores default scrolling on close. If the site already manages body overflow elsewhere, check for conflicts.
- The guard `if (!hamburger || !panel || !scrim || !closeBtn) return;` prevents errors on pages where the nav is not present.

---

## 5. Summary of ID and class changes

| Old | New | Notes |
|---|---|---|
| `id="nav-mobile-overlay"` | `id="nav-mobile-panel"` | Element is now the panel only, not full-screen overlay |
| (none) | `id="nav-mobile-scrim"` | New element - must be added to HTML |
| `id="nav-mobile-close"` | `id="nav-mobile-close"` | ID unchanged. Element content changes from text "x" to Lucide SVG |
| `id="nav-hamburger"` | `id="nav-hamburger"` | No change |
| `.nav-mobile-overlay` | `.nav-mobile-panel` | CSS class renamed |
| `.nav-mobile-overlay.open` | `.nav-mobile-panel.open` + `.nav-mobile-scrim.open` | Open state now toggles two elements |
| (none) | `.nav-mobile-divider` | New class for separator between primary and utility links |
| (none) | `.nav-mobile-link--utility` | New modifier class for secondary nav items |

---

*Spec produced by Designer, 2026-03-31. No files modified.*
