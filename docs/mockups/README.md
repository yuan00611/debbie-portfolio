# Visual mockups — reference for Claude Code

Four standalone HTML files. Open any of them in a browser to see the exact visual target. These are the **primary visual reference** — the markdown brief tells you *what* and *why*, these files tell you *how it should look*.

## Files

| File | Purpose | Palette | Status |
|---|---|---|---|
| `01-homepage.html` | New homepage with three-tier architecture | Brand teal | New design — match |
| `02-eldercare.html` | Eldercare Smart Home case study | Brand teal | New design — match |
| `03-tesla.html` | Tesla Autonomous case study | Slate blue | New design — match |
| `04-career-copilot.html` | Career Copilot case study | Warm orange | **Completed design — convert only, do NOT redesign** |

## Usage

For each `.tsx` page you generate:
1. Open the corresponding HTML file in a browser
2. Match the layout, typography, spacing, and color exactly
3. Preserve all copy word-for-word
4. Only deviate where Next.js conventions require it (e.g. `<Image>` instead of `<img>`, client components for interactive pieces)

## Typography stack (all mockups)

- Serif: **Fraunces** (Google Fonts) — for headings, quotes, metric numbers
- Sans: **Inter** — for body text, UI labels
- Mono: **JetBrains Mono** — for eyebrows, section labels, metadata

Load these in the Next.js `next/font/google` way if they aren't already.

## Dark mode

All four mockups use light backgrounds. The case study widgets I showed in the original chat had dark-mode support using `@media (prefers-color-scheme: dark)` — **please add dark-mode variants for every color variable** when porting to `.tsx`. Use the existing `app/projects/lifelong/page.tsx` patterns for dark mode as the canonical reference.

## Asset placeholders

Hero images and any inline screenshots are currently gradient placeholders with a monospace caption describing what goes there. Replace with `<Image>` components pointing at `/public/` paths — Debbie will provide real assets to swap in later.
