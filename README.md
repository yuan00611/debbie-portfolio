# Debbie Chen — Portfolio

> Technology is a medium, not the destination. I build interfaces that make complex systems easier to use, honest enough to trust — and leave people feeling more capable, even inspired.

**Live site:** [debbie-portfolio.vercel.app](https://debbie-portfolio.vercel.app)

The portfolio of Debbie Chen (陳德元, Te-Yuan Chen) — Frontend Engineer & Design Technologist. Twenty-plus case studies spanning AI interfaces, data visualization, VR/AR/games, accessibility, and published HCI/NLP research (EMNLP 2020, PNC 2017, TAICHI, 輔具之友).

## What's inside

The homepage tells the story in three tiers:

1. **Featured work** — shipped production systems: a $4B AUM AI fintech platform (Athena), Dell's enterprise network-graph visualization, a WCAG 2.0 AA healthcare redesign
2. **A point of view** — the trust thesis: four explorations of how humans learn to trust systems that think, or see, for them (Tesla autonomy UX, an eldercare research program with two publications, EMNLP 2020, 360° journalism research)
3. **Interactive & immersive** — a decade of designing for presence: games, VR news, AR exhibits — including [Where Words Begin (拾字旅人)](https://where-words-begin.vercel.app/), a playable game where every pixel is painted in code

## Tech

- **Next.js 16** (App Router) · TypeScript · deployed on Vercel
- **styled-components v6** with SSR registry; design tokens as oklch CSS variables with class-based light/dark theming
- **motion** for scroll reveals; `next/font` (Fraunces · Inter · JetBrains Mono)
- Media discipline: static images through `next/image`, animated clips as webm/mp4 `<video>` pairs (no multi-MB GIFs)

### A detail I'm fond of

Every case study carries its own scoped duo-accent palette — ink-wash moss for a Chinese-character game, deep-ocean tide for VR news, newsprint navy-and-proof-red for journalism research (the two colors literally encode the study's two methods). Each page defines its palette as CSS variables that remap the site's semantic tokens, so the shared navigation quietly adopts every world it enters — in both light and dark mode.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build (all routes statically generated)
pnpm lint
```

Project conventions live in [`CLAUDE.md`](./CLAUDE.md); the case-study authoring workflow is documented as a skill in `.claude/skills/case-study/`.

## Contact

[yuan0061@gmail.com](mailto:yuan0061@gmail.com) · [LinkedIn](https://www.linkedin.com/in/te-yuan-debbie-chen/) · [GitHub](https://github.com/yuan00611)

© 2026 Debbie Chen
