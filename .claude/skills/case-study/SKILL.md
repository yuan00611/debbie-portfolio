---
name: case-study
description: Add a new case-study page to the portfolio following the established pattern — scoped duo-accent palette, dual theme, fixed hero art, Reveal sections, homepage entry. Use when Debbie asks to migrate/add a project page.
---

# Add a case-study page

## 1. Gather content (never invent)

- Sources: old archive site pages (`yuan00611.github.io` — content often hides in Bootstrap modals on `index.html`; grep `sed -n '/id="<modal>"/,/class="modal fade"/p'`), her `document/*.html` reports, or content Debbie pastes directly.
- Verify every asset URL with `curl -s -o /dev/null -w "%{http_code}"` before wiring it (gov sites may block curl — note it and ask her to click-check).
- View images before choosing them (`Read` the file) — pick the shots that serve the story.
- If her specific role/contribution isn't stated, **ask** — never guess from author order.

## 2. Choose a palette (must be distinct from all existing)

Duo-accent, themed to the project's world. Registry of taken palettes:

| Page | Duo | Theme |
|---|---|---|
| where-words-begin | moss `#8ea084` + clay `#c98a63` | ink-wash / paper |
| wind-turbine-vr | tide `#4d97c4` + amber `#d9a24a` | deep ocean (mono labels) |
| carbon-footprint | glacier `#5fc0d4` + aurora `#a79be8` | ice fog / polar night |
| is-vincent-alright | gold `#e3b341` + rust `#d97a5a` | starry night / canvas |
| human-and-dog | signal `#e08a4d` + slate `#8fa3b8` | warehouse (duo = the two roles) |
| museum-ar | straw `#d9a05b` + vitrine `#63bfae` | exhibition hall |
| liberary | crimson `#d96a76` + brass `#c9a35f` | candlelit study |
| 360-film-language | press `#7da3e0` + proof `#e0766b` | newsprint (duo = two methods) |
| inquisitive | quill `#a394f0` + marker `#e6c94a` | annotation / reading room |
| mbti | plum `#ce8ade` + spark `#b8d45e` | dichotomy grid |
| image-captions | sepia `#cf9a67` + ash `#a49bb4` | old photograph |
| vizwiz | shutter `#e585ad` + silver `#9aa5ad` | darkroom |
| pv-fleet-explorer | cobalt `#6f97e8` + sun `#f2bb2e` | fleet at noon (duo = the record vs the reviewer's attention; yellow is selection-only, as in the app) |

(Dark-theme values shown; each has a darker light-theme counterpart tuned for contrast on the light bg.)

Bonus: encode meaning in the duo when possible (two methods, two roles, two verdicts).

## 3. Build `page.css.tsx`

Copy the structure from an existing research page (`app/projects/vizwiz/page.css.tsx` is the cleanest template):

- `PageRoot`: light vars default → `html.dark &` overrides → **remap site tokens** (`--background --foreground --card --muted-foreground --border --stroke-1/2/3 --brand-teal`) so Navigation inherits the palette. Include `*::selection`, `a:focus-visible`, color transitions.
- Standard exports: `Wrap` (860px) / `Wide` (1120px), `Hero` + `HeroArt` (fixed art, fades to `var(--bg)`) + art layer div, `HeroEyebrow/Title/Tagline` (hardcoded colors — art is theme-fixed), `Stats`, `MetaGrid/K/V`, `Section`, `Eyebrow` (unique `::before` glyph per page), `H2`, `Para`, `Quote`, content cards grid, `Figure/Frame/Video`, `Panel/PanelBig`, `Chips/Chip`, `Cta/Btns/Btn($ghost)`, `Footer`.

## 4. Build `page.tsx`

`"use client"` → `<S.PageRoot><Navigation />` → Hero with inline SVG art → `<Reveal>`-wrapped: Stats (if real numbers exist — **no stats bar without real numbers**) → Meta → story sections → role/reflection Panel → Publications (citations verbatim, her name bold) → CTA (primary + ghost) → Footer (`© 2026 Debbie Chen` / All work + mailto).

## 5. Homepage entry

By weight: **publication-grade** → pillar in "A point of view" (keep 2×2; requires displacing) · **shipped product** → Featured card · **game/VR/AR** → Interactive & immersive card/mini-card · **course project / secondary** → archive row (`ArchiveList/Row/Name/Meta`, internal `Link`).

## 6. Verify

```bash
pnpm exec next build && pnpm exec eslint app/projects/<slug> app/page.tsx
(pnpm exec next start -p 3457 &) ; sleep 3
curl -s -o /dev/null -w "%{http_code}" http://localhost:3457/projects/<slug>
# grep rendered HTML for key strings (embeds, links), then:
pkill -f "next start -p 3457"
```

Also eyeball light/dark toggle and mobile.
