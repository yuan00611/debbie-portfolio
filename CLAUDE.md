# Debbie's Portfolio — project conventions

Next.js 16 (App Router) portfolio for Debbie Chen (陳德元, Te-Yuan Chen). Frontend Engineer & Design Technologist positioning, targeting AI-interface roles.

## Stack

- **Styling**: styled-components v6 (SSR registry in `lib/styled-components-registry.tsx`) is the primary system. Tailwind v4 utilities appear only in shadcn/ui components (`components/ui/`). Design tokens are CSS variables in `app/globals.css` (oklch), with light/dark via the `html.dark` class (toggled by `Navigation`).
- **Fonts**: `next/font` — Fraunces (serif headings), Inter (body), JetBrains Mono (labels/data). For Chinese text add `"Songti SC", "Noto Serif TC"` fallbacks after Fraunces.
- **Motion**: `motion` package. Scroll reveals use `components/common/reveal/reveal.tsx` (fade-up once, `useInView`). Reduced-motion is handled globally by the kill-switch in `globals.css` — never add per-component handling.
- **Images**: flat in `public/`, PascalCase project prefix (`WWB-journal.png`, `Eldercare-vr01.webm`). Homepage cards use static imports + `placeholder="blur"`. Remote images from the old archive site are allowed via `remotePatterns` (`yuan00611.github.io`) — these are temporary until re-hosted. Animated media: convert GIFs to webm+mp4 `<video autoPlay muted loop playsInline>` pairs (ffmpeg), never ship multi-MB GIFs.

## Case-study page pattern

Every project is a bespoke page: `app/projects/<slug>/page.tsx` + `page.css.tsx`, whole page `"use client"`. Use the `/case-study` skill for the full procedure and the palette registry. Key rules:

- Each page has a **scoped duo-accent palette** defined as CSS vars on `PageRoot` — light values default, `html.dark &` overrides — and **remaps site tokens** (`--background`, `--foreground`, `--card`, `--muted-foreground`, `--stroke-1/2/3`, `--brand-teal`) so `Navigation` inherits the page palette.
- **Hero art is fixed** (doesn't change with theme); hero children use hardcoded colors; the art fades to `var(--bg)` at the bottom so it blends with either theme.
- Structure: Navigation → Hero (eyebrow/title/tagline + SVG art) → optional Stats bar → Meta strip → Sections wrapped in `<Reveal>` → role/reflection Panel → optional Publications → CTA (primary + ghost `Btn`) → Footer.
- YouTube embeds: `Video` wrapper (aspect-ratio 16/9) inside `Frame`, `loading="lazy"`.
- Links: `next/link` internal, `target="_blank" rel="noopener noreferrer"` external. Every page needs `:focus-visible` outlines on links.

## Content rules

- **Never invent facts.** Stats, dates, team names, and publication citations come verbatim from the old archive site (`yuan00611.github.io`) or from Debbie directly. Honest reflections ("it wasn't interesting enough yet", "58% is an honest number") are a feature — keep them.
- **Narrative axes** (see memory `debbie-narrative-axes`): technology is a medium, not the destination. Every piece of copy should name a human outcome — easier to **use**, opens the **imagination**, or calibrates **trust** — not just list deliverables.
- Homepage structure is settled: Hero → Featured work → A point of view (4 pillars + archive rows) → Interactive & immersive (2 cards + 4 mini cards + archive row). Don't restructure the tiers; the narrative lives in the section ledes.
- Publication-grade work gets pillars/citation cards; course projects get archive rows (which may link to native pages).

## Verify before finishing

```bash
pnpm exec next build          # must pass
pnpm exec eslint <changed>    # must be clean
pnpm exec next start -p 3457  # smoke-test routes + grep key strings, then pkill
```

Check both themes (fixed-dark hero pages especially) and mobile breakpoints (`theme.breakpoints.md`).
