# Portfolio Redesign Brief — Debbie Chen

> A complete spec for redesigning the homepage and adding two trust-themed case studies to `debbie-portfolio`. Written as a handoff document for Claude Code to implement against the existing Next.js codebase.

---

## 1. Positioning

### New tagline (hero h1)
**Frontend & UX engineer building trustworthy AI interfaces.**

### Supporting summary (hero lede)
> I work at the seam where machine intelligence meets human decisions — designing interfaces people trust to handle their money, their health, and their safety.

### Why this shift
The previous tagline ("I design and build interfaces that feel intuitive, scalable and accessible") is undifferentiated — every frontend engineer can claim it. The new version:
- Names a specific thesis (trust + AI)
- Uses three concrete domains (money, health, safety) that map to real portfolio work
- Positions Debbie as a thinker, not just a builder

---

## 2. Homepage architecture — three tiers

Replace the current flat "Featured Works" list with a three-tier structure:

### Tier 1 — Featured work
*Shipped at scale · what recruiters scan first*

| Project | Size on page | Key tags |
|---|---|---|
| Athena Advisory | Wide card (full width) | Fintech · AI · Startup 0 to 1 · Senior FE lead |
| Dell Network Graph | Half card | Data viz · UX engineering |
| LifeLong Medical Care | Half card | Healthcare · Accessibility · 1st place |

**Why Athena is wide**: it's the strongest shipped AI-adjacent work. Visual hierarchy should match narrative weight.

### Tier 2 — A point of view
*Thesis · research · exploration*

Section title: **"A point of view"** (not "Side projects" or "Explorations" — those words dilute senior positioning)

Section intro:
> **Trust in AI — three explorations**
> What does a trustworthy AI interface actually look like?
> Three projects, three versions of the same question — each testing a different aspect of how humans learn to trust systems that think for them.

Three pillars as small cards:

| Pillar | Project | One-line hook |
|---|---|---|
| REASONING | Career Copilot | When AI gives you a score, how do you earn the right to be believed? |
| CALIBRATION | Tesla Autonomous | When should the AI lead, and when does the human need to take over? |
| INVISIBILITY | Eldercare Smart Home | Can an 80-year-old trust a system they never see until it saves them? |

### Tier 3 — Archive
*Earlier work · side explorations*

Minimal table-style list. Examples: Unity VR experiments (2019), Empathy map studies (2019), Portfolio v1 (2020). Optional — skip if it clutters.

---

## 3. Color system — per case study, on a shared brand

### Brand color (home, nav, logo, connective tissue)
- Primary: `oklch(0.73 0.12 172)` — the teal you already use
- Ink: `oklch(0.32 0.08 172)` — dark teal for text on teal backgrounds
- Soft: `oklch(0.96 0.03 172)` — pale teal for backgrounds

### Eldercare Smart Home — uses brand teal
Rationale: it's the "home" project. Brand-aligned. Warm, caring.
- Main: `#2ab8a6` (brand teal)
- Ink: `#0e6358`
- Soft: `#e6f6f3`
- Paper: `#faf9f5`

### Tesla Autonomous — slate blue
Rationale: dashboard, clinical, technical. Cool contrast to Eldercare's warm teal — visually encodes the "active machine agency" vs "passive home presence" tension.
- Main: `#3b4a5a` (slate blue)
- Ink: `#1e2936`
- Soft: `#e4e8ed`
- Paper: `#f7f8fa`

### Career Copilot — keep existing warm orange
Rationale: already built. Editorial, paper-warm, serif-driven. Don't touch.
- Main: `#c04e1e`
- Ink: `#8a3812`
- Soft: `#f3e4da`
- Paper: `#faf8f3`

### Dark mode — all three must support
Every color variable needs a dark-mode fallback. See the LifeLong page's existing pattern.

---

## 4. Case study 1 — Eldercare Smart Home

**Route**: `/projects/eldercare`
**Brand accent**: teal (`#2ab8a6` family)

### Tags
- Eldercare
- Safety-critical UX
- VR prototyping
- Solo UX engineer — 1 year (role tag, neutral styling)

### Hero h1
> Can an 80-year-old trust a smart home to catch them when they fall?

### Hero lede
> A 1-year master's thesis where I built a full VR smart home in Unity to let seniors experience a fall-prevention service before it existed — and ran the research to find out if they'd actually trust it.

### Hero metrics (4 columns)
| Value | Label |
|---|---|
| 10 | Seniors recruited (50+, no prior VR) |
| 9 | Service features validated via KANO |
| 1 | VR prototype modeled & coded solo |
| 100% | Participants felt safer after trial |

### Hero visual (placeholder)
Gradient background (teal-soft → teal-mid) with abstract bedroom/bathroom diagram showing: bed, pressure mat, toilet, smart lamp, VR headset, sound waves. Replace with real screenshot or Unity capture when ready.

### Section 01 — The challenge
**Eyebrow**: 01 — The challenge
**h2**: Most falls happen at 3am. Most seniors won't trust a system they've never seen.

> 28% of Americans over 65 live alone. Falls during nighttime bathroom trips are the leading cause of serious injury — and isolation compounds the risk. Smart homes promise to solve this, but every pitch assumes the user will accept invisible sensors, voice assistants, and automated responses on faith.
>
> I wanted to test that assumption with the people it actually affects — before anyone built a production system.

**Callout**:
> **The real question wasn't "does the tech work?"**
> It was: does a 75-year-old who's never used a smartphone feel safer with this system, or more anxious?

### Section 02 — Why VR
**Eyebrow**: 02 — Why VR
**h2**: You can't A/B test a smart home. So I built one in Unity.

> Traditional usability testing fails for service design — you can't hand a senior a wireframe and ask if they'd trust it at 3am. I needed immersion without construction cost, so I modeled the full apartment in SketchUp and brought it into Unity as a walkable VR scenario covering five integrated systems.

Six feature cards (3x2 grid):

| Feature | Description |
|---|---|
| Smart lighting | Motion-activated path from bed to bathroom |
| Voice assistant | Three detection zones with context-aware prompts |
| Pressure mat | Guidance lighting triggered by weight |
| Water leak sensor | Voice alert before the senior steps in |
| Emergency alert | Auto-notifies trusted contact on fall detection |
| Full 24h cycle | Morning wake → nighttime routine → emergency |

**Callout**:
> Built the 3D environment, scripted the interactions in Unity, and ran the headset sessions myself. One person, one pipeline — from service blueprint to lived experience.

### Section 03 — What the research found
**Eyebrow**: 03 — What the research found
**h2**: KANO analysis: not all safety features are created equal.

> I ran focus groups and participatory design sessions with 10 seniors across 3 cohorts. Every feature scored as "Attractive" on the KANO model — but the *relative* ranking revealed something more useful than a binary pass/fail.

Horizontal bar chart (values estimated — replace with real data if available):

| Feature | Attractiveness |
|---|---|
| Emergency notification | 94% |
| Smart lighting path | 91% |
| Voice wake/sleep prompts | 88% |
| Pressure mat guidance | 72% |
| Water leak voice alert | 68% |
| "Wait before standing" prompt | 34% |

Three insight cards:

| # | Title | Description |
|---|---|---|
| INSIGHT 01 | Trust comes from escalation, not prevention | Seniors cared less about avoiding falls than knowing help would arrive if one happened. The emergency chain beat every preventive feature. |
| INSIGHT 02 | Voice becomes noise past a threshold | The "pause before standing" prompt tested worst. Users read patience as paternalism — a trust breaker, not a safety aid. |
| INSIGHT 03 | Gender shifted acceptance more than age | Women across all age bands trusted the system faster than men — a signal that later productization should segment by disposition, not demographic. |

### Section 04 — Reflection
**Eyebrow**: 04 — Reflection

Teal-soft background card containing:
> "Safety-critical products aren't won on features. They're won when the user believes the system will be there at the worst moment — and leave them alone the rest of the time."
>
> That lesson — calibrating presence against trust — is what I carry into every complex interface I build now. Financial dashboards, healthcare sites, AI assistants: same problem, different skin.

---

## 5. Case study 2 — Tesla Autonomous Car

**Route**: `/projects/tesla`
**Brand accent**: slate blue (`#3b4a5a` family)

### Tags
- Autonomous systems
- Trust calibration
- Iterative research
- Team of 4 — research & iteration lead (role tag, neutral)

### Hero h1
> When should a driver trust an AI — and when should they take the wheel back?

### Hero lede
> A UI system for Level 3+ autonomous cars, designed around a simple question every self-driving interface has to answer: which moments belong to the AI, which belong to the human, and who decides?

### Hero metrics (4 columns)
| Value | Label |
|---|---|
| 61 → 71 (+16%) | SUS usability score across 3 test rounds |
| −33 → 50 (+83) | NPS promoter delta from iteration 1 to 3 |
| 6 | Safety scenarios tested in simulation |
| 3.9/5 | Trust score introduced in round 2 |

### Hero visual (placeholder)
Slate gradient background with abstract Tesla-style dashboard showing: autopilot-engaged banner, car silhouette with radar pulse animation, map route preview, bottom tab row (Navigate/Park/Camera/Settings). Replace with real Figma screen when ready.

### Section 01 — The challenge
**Eyebrow**: 01 — The challenge
**h2**: 60% of drivers distrust autonomous cars. Only 16% will use even partial automation.

> Autonomous driving isn't just a technology problem — it's a handoff problem. At Level 3 and above, the AI drives most of the time but can hand control back at any moment. Every interview we ran surfaced the same anxiety: not of the AI's capability, but of the ambiguity about who's actually in charge.
>
> "The braking is too late. It also waits too long to change lanes." — that's not a complaint about performance. It's a complaint about trust calibration.

**Callout**:
> **The design question wasn't "how do we build a better autopilot UI?"**
> It was: how do we communicate, in real time, which decisions the AI owns and which still belong to the driver?

### Section 02 — The framework
**Eyebrow**: 02 — The framework
**h2**: Trust calibration as a spectrum, not a switch.

> After 6 user interviews and competitive analysis of Tesla, Waymo, and Audi A8, we mapped every interaction in the car onto a three-zone spectrum — shaped by how much authority the AI should hold versus how much belongs to the human.

**Spectrum visual** (gradient bar from slate to amber/warn):

| Zone | Label | Title | Example |
|---|---|---|---|
| AI leads | Confident autonomy | Highway cruise, lane centering, following distance | Minimal UI. AI acts, driver observes. |
| Collaborative | Transparent reasoning | Lane changes, auto-parking, traffic recognition | AI acts but shows its view — live camera, intent signals, countdown. |
| Human leads | Handoff moments | Construction, night driving, AI misjudgment | Peripheral alerts, haptic cues, explicit takeover prompts. |

**Callout**:
> Once we had this spectrum, every design choice became a question with a framework: **which zone are we in, and is the UI telling the driver that clearly?**

### Section 03 — Three rounds of iteration
**Eyebrow**: 03 — Three rounds of iteration
**h2**: From 61 to 71 SUS. More importantly, from fear to trust.

> We ran three testing rounds with 6 scenarios each: onboarding, traffic recognition, AI misjudgment, auto lane changing, charging, and auto-parking + trip summary. The quantitative arc tells the story — but the qualitative shift was the real win.

Three iteration cards (round 3 highlighted with accent border + soft-fill):

| Round | Title | SUS | Secondary | Notes |
|---|---|---|---|---|
| 01 | Too much information. Not enough trust. | 61 | NPS: −33% | "Notifications are too scary to feel safe." Alerts were wordy, scenarios unclear, and the UI assumed users already trusted the system. |
| 02 | Added a trust score. Fixed the noise. | 71 | NPS: 50% | Introduced trust score as a third metric — usability alone was hiding the emotional gap. Simplified alerts to peripheral color cues instead of modal text. |
| 03 (final) | Reaction time + scenario details locked. | 71 | Trust: 3.9 | Tightened handoff timing, added real-time camera feeds for collaborative zone scenarios. Trust score stabilized — drivers knew what was happening, and when it was their turn. |

### Section 04 — What we learned about trust in AI
**Eyebrow**: 04 — What we learned about trust in AI
**h2**: Three principles that outlasted the project.

| # | Title | Description |
|---|---|---|
| PRINCIPLE 01 | Transparency beats confidence | Drivers trusted the AI more when it showed what it was seeing — live camera feeds, detection boxes — than when it reassured them with "autopilot engaged" text. |
| PRINCIPLE 02 | Handoffs need physical cues, not words | Modal alerts created panic. Peripheral color changes and haptic pulses gave drivers time to re-orient before taking action — the difference between a warning and a whiplash. |
| PRINCIPLE 03 | Measure trust, not just usability | SUS told us the UI worked. The trust score we added in round 2 told us whether users believed it would keep them safe — a distinction every AI product team needs to make. |

### Section 05 — Reflection
**Eyebrow**: 05 — Reflection

Slate-soft background card containing:
> "The interfaces that move AI from novelty to trusted tool don't hide the AI — they show its reasoning, admit its limits, and make the handoff feel like a conversation."
>
> That principle carries through every AI-facing interface I've built since: financial copilots at Athena, healthcare tools, any system where the user is deciding whether to let the machine lead. Trust is a feature, and it has a UI.

---

## 6. Case study 3 — Career Copilot (HTML-to-tsx conversion)

**Route**: `/projects/career-copilot`
**Brand accent**: warm orange (`#c04e1e` family) — **do not change**
**Source**: `docs/mockups/04-career-copilot.html` — this is a **completed design**, not a concept

### Critical instruction for Claude Code
This case study already exists as polished HTML. The job is **conversion, not redesign**:

1. Read `docs/mockups/04-career-copilot.html` carefully — it uses Fraunces serif, warm paper background, editorial column layout
2. Preserve **every typographic choice, spacing, color, and copy word-for-word**
3. Port the inline CSS to whatever styling approach the rest of the codebase uses (Tailwind classes, CSS Modules, etc.)
4. Split into the same component structure as `app/projects/lifelong/page.tsx` (Hero, sections, etc.) — but the visual output must match the HTML mockup pixel-for-pixel
5. Only reorganize if necessary for Next.js conventions (e.g. swapping `<img>` for `<Image>`, extracting the mini-UI preview into a client component if it needs interactivity)

### Homepage linking
On the homepage "A point of view" section, the Career Copilot pillar card links to `/projects/career-copilot`.

### Where Debbie's input is needed
- [ ] Confirm the HTML mockup copy is final, or note any edits before conversion

---

## 7. Typography refactor — apply across all existing case studies

To achieve visual coherence across the portfolio without flattening each case study's identity, unify the typography system across **every** project page — both new (Eldercare, Tesla, Career Copilot) and existing (Athena, Dell, LifeLong).

### What to change

Apply the Fraunces + Inter + JetBrains Mono stack to:
- `app/page.tsx` (homepage)
- `app/projects/athena/page.tsx`
- `app/projects/athena-ai/page.tsx` (if separate)
- `app/projects/dell/page.tsx`
- `app/projects/lifelong/page.tsx`

### The typography system

| Use | Font | Weight | Notes |
|---|---|---|---|
| h1, h2 | Fraunces | 400 regular, `font-style: italic` for emphasis spans | Serif display |
| Hero metric numbers | Fraunces | 400 | Large serif numerals with `-0.015em` letter-spacing |
| Body text | Inter | 400 | Existing sans |
| Eyebrows, section counts, metadata | JetBrains Mono | 400 | 11px, uppercase, 0.14em letter-spacing |

### What NOT to change

- **Keep each existing case study's accent color.** Athena's teal, Dell's blue, LifeLong's accent — these reflect the real products. Do not unify these to the brand teal.
- **Keep each existing case study's narrative structure.** LifeLong's "Challenge → Research → IA → Design System → Outcome" sequence is correct for a shipped case study. Do not impose the "Challenge → Framework → Principles" structure from the new trust case studies onto it.
- **Keep existing copy untouched.** This is a typography refactor only, not a rewrite.

### Why this split matters

- Shipped work (Tier 1) documents what was built — process narrative serves that goal.
- Thesis work (Tier 2) documents how Debbie thinks — principle narrative serves that goal.
- The shared typography system is what makes them feel like the same author's portfolio, even when the narrative shape differs.

### Font loading

If fonts aren't already loaded in `app/layout.tsx`, add them via `next/font/google`:

```tsx
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-serif', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })
```

Then expose these CSS variables on the root layout and reference `var(--font-serif)` etc. in component styles.

---

## 8. Implementation notes for Claude Code

### Match existing conventions
- Use the same component patterns as `app/projects/lifelong/page.tsx`
- Keep Next.js `<Image>` for any real asset (use `/public/placeholder-*.png` as stand-ins)
- Reuse Nav and Footer components — don't duplicate

### Typography
- Home page: keep existing serif heads (looks like Fraunces or similar) + sans body
- Case study pages: same typography stack — consistency across pages is more important than variety

### Responsive breakpoints
- Metrics grid: 4 cols → 2 cols → 1 col at mobile
- Feature grids: 3 cols → 2 cols → 1 col
- Iteration cards: 3 cols → stack

### Don't forget
- `<meta>` tags for each case study (title, description for link previews)
- OG images if they exist elsewhere in the codebase
- Update the home page's featured-works data source to include the new structure
- Alt text on every image placeholder — even placeholders should model the correct behavior

### Where I need Debbie's input
- [ ] Real KANO percentages (current values are estimates)
- [ ] Real VR screenshots / Unity captures for Eldercare hero
- [ ] Real Figma screens for Tesla hero + section visuals
- [ ] Service Blueprint image for Eldercare (optional — can live in a later section)
- [ ] Team credits for Tesla (currently "Team of 4" — add names if wanted)

---

## 9. Trust pillar — a shared framing

If it helps the three case studies hang together, this is the shared framing that emerged across them:

- **Career Copilot — REASONING**: trust in how AI decides
- **Tesla Autonomous — CALIBRATION**: trust in when AI acts
- **Eldercare Smart Home — INVISIBILITY**: trust in AI you don't see

These words appear on the homepage pillar cards. Don't repeat them inside each case study — let each page earn its own angle organically.
