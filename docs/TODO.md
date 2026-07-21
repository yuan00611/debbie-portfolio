# Engineering roadmap / TODO

Prioritized backlog for turning this portfolio into a full software-engineering showcase. Ordered by value-for-effort **in this repo's context** (solo, static-generated, content-heavy, Vercel-deployed).

## P0 — quality gates (cheap, do first)

- [ ] **CI on GitHub Actions**: lint + `tsc --noEmit` + `next build` on every push/PR. Vercel already handles CD (preview per branch, prod on main) — CI adds the quality gate in front of it.
- [ ] **Link checker (scheduled)**: many pages link to `yuan00611.github.io`, YouTube, ACM/IEEE, gov sites. A weekly CI job (e.g. lychee) catching dead links protects the site's credibility. *This repo's most portfolio-specific risk.*
- [ ] **Per-page SEO metadata + OG images**: every `/projects/*` currently shares one global title/description (pages are client components). Needs a small refactor — server `layout.tsx` or server-wrapper per route with `generateMetadata`, plus `next/og` share images and a sitemap. **Higher real-world value than any monitoring tool on this list.**

## P1 — testing & accessibility (on-brand)

- [ ] **Playwright smoke suite**: all 24 routes render, nav works, theme toggle flips `html.dark`, YouTube iframes present. The tests this repo actually needs — not unit tests for content pages.
- [ ] **Accessibility audit in CI**: axe-core via Playwright on every page, both themes. The portfolio claims WCAG expertise (LifeLong page) — the repo should prove it on itself.
- [ ] **Lighthouse CI with budgets**: perf/a11y/SEO/best-practices thresholds per PR. Watch LCP on image-heavy case pages.
- [ ] **Re-host archive images**: wind / carbon / vincent / hnd / museum / liberary assets still hotlink the old GitHub Pages site — single point of failure and a perf cost. Move to `public/`, drop `remotePatterns`.

## P2 — design system as artifact

- [ ] **Extract design tokens**: colors / type scale / spacing / the 12 case-study duo-palettes out of `globals.css` + `page.css.tsx` files into a tokens module. Prerequisite that makes both Storybook and Figma sync 10× easier.
- [ ] **Storybook**: scope it to shared primitives (`components/ui`, Reveal, Navigation, card/pillar/archive patterns) + a **palette gallery story** showing all 12 case-study palettes in both themes. Debbie cites Storybook practice at Athena — this shows it instead of telling it.
- [ ] **Chromatic or Storybook test-runner** (optional): visual regression on the primitives once Storybook exists.

## P3 — showcase experiments

- [ ] **Figma design-system sync (Figma MCP)**: push the extracted tokens + primitives into a Figma library. Low infra ROI for a solo site, **high value as a design-technologist showcase** — code→design bridging is literally the positioning. Do after token extraction.
- [ ] **Bundle analysis**: `@next/bundle-analyzer` pass; styled-components runtime and per-route JS are the things to look at.
- [ ] **Dependabot/Renovate**: automated dependency PRs (pairs with CI from P0).

## Deliberately skipped (with reasons)

- **Datadog**: RUM/APM for a static personal site is overkill and paid. `@vercel/analytics` is already installed; add **Vercel Speed Insights** for free web-vitals RUM instead. Revisit Datadog only as a deliberate learning lab, not as infrastructure this site needs.
- **Sentry / error monitoring**: a statically generated content site has almost no runtime error surface. Not worth the wiring.
- **Unit test coverage targets**: wrong tool for content pages; the Playwright + axe + Lighthouse stack above is the right pyramid for this repo.

## Content open items (carried from worklog)

- [ ] Confirm 輔具之友 gov link opens in a browser (curl-blocked)
- [ ] Swap WWB journal / homepage thumbs when newer screenshots exist
