import { styled } from "styled-components";
import { theme } from '../../theme';

const serif = `var(--font-fraunces), "Songti SC", "Noto Serif TC", Georgia, serif`;
const sans = `var(--font-inter), "PingFang TC", system-ui, sans-serif`;

// ── Page root ─────────────────────────────────────────────────────────────────
// Candlelit-study palette scoped to this page, following the site theme
// toggle: parchment daylight in light mode, a candlelit stone study in dark
// mode — oxblood crimson + aged brass accents in both. Site tokens are
// remapped so Navigation and any shared chrome inherit the page palette.

export const PageRoot = styled.div`
    /* light — parchment daylight */
    --crimson: #a63446;
    --brass: #8a6d3b;
    --ink: #2c2422;
    --ink-soft: #5d534e;
    --ink-mute: #786d66;
    --line: rgba(44, 36, 34, 0.12);
    --line-strong: rgba(44, 36, 34, 0.26);
    --bg: #f6f1e5;
    --bg-soft: #ede6d5;
    --page-card: #fcf8ee;
    --panel-tint: #ecdfc8;
    --btn-hover: #7e2434;

    html.dark & {
        /* dark — the candlelit study */
        --crimson: #d96a76;
        --brass: #c9a35f;
        --ink: #f0eae1;
        --ink-soft: #b0a596;
        --ink-mute: #74695e;
        --line: rgba(255, 255, 255, 0.09);
        --line-strong: rgba(255, 255, 255, 0.18);
        --bg: #171012;
        --bg-soft: #1e1618;
        --page-card: #241a1c;
        --panel-tint: #2a1c1a;
        --btn-hover: #edb3ba;
    }

    --background: var(--bg);
    --foreground: var(--ink);
    --card: var(--page-card);
    --muted-foreground: var(--ink-soft);
    --border: var(--line);
    --stroke-1: var(--line);
    --stroke-2: var(--line);
    --stroke-3: var(--line-strong);
    --brand-teal: var(--crimson);

    background: var(--bg);
    color: var(--ink);
    min-height: 100vh;
    font-family: ${sans};
    font-size: 16px;
    line-height: 1.75;
    overflow-x: clip;
    transition: background-color 0.35s ease, color 0.35s ease;

    *::selection { background: var(--crimson); color: var(--bg); }

    a:focus-visible {
        outline: 2px solid var(--brass);
        outline-offset: 3px;
        border-radius: 4px;
    }
`

// ── Layout wrappers ───────────────────────────────────────────────────────────

export const Wrap = styled.div`
    max-width: 860px;
    margin: 0 auto;
    padding: 0 28px;
`

// ── Hero ──────────────────────────────────────────────────────────────────────
// Fixed candlelit art in both themes: a heliocentric chart — the forbidden
// diagram — drawn in brass, sun at the center.

export const Hero = styled.header`
    position: relative;
    min-height: 74vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 60px 0 64px;
    overflow: hidden;
`

export const HeroArt = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    background:
        radial-gradient(30% 44% at 70% 32%, rgba(201, 163, 95, 0.25), transparent 70%),
        linear-gradient(176deg, #241a1c 0%, #1e1517 50%, #191114 80%, var(--bg) 100%);

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(176deg, transparent 48%, rgba(23, 16, 18, 0.3) 76%, var(--bg) 99%);
    }
`

export const Orbits = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    opacity: 0.55;

    svg { width: 100%; height: 100%; }
`

export const HeroInner = styled(Wrap)`
    position: relative;
    z-index: 3;
    width: 100%;
`

/* Hero children use fixed colors — the candlelit art doesn't change with theme */
export const HeroEyebrow = styled.div`
    font-size: 12px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #c9a35f;
    margin-bottom: 22px;
    font-weight: 500;
`

export const HeroTitle = styled.h1`
    font-family: ${serif};
    font-size: clamp(42px, 7.4vw, 84px);
    line-height: 1.0;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #f0eae1;
`

export const HeroTagline = styled.p`
    font-family: ${serif};
    font-style: italic;
    font-size: clamp(19px, 2.4vw, 26px);
    color: #c8bcab;
    max-width: 40ch;
    margin-top: 26px;
    line-height: 1.4;
`

// ── Meta strip ────────────────────────────────────────────────────────────────

export const MetaGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    padding: 44px 0;
    border-bottom: 0.5px solid var(--line);

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr 1fr;
        gap: 22px;
    }
`

export const MetaK = styled.div`
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ink-mute);
    margin-bottom: 8px;
`

export const MetaV = styled.div`
    font-size: 14px;
    color: var(--ink);
    line-height: 1.5;
`

// ── Section rhythm ────────────────────────────────────────────────────────────

export const Section = styled.section`
    padding: 86px 0;

    @media (max-width: ${theme.breakpoints.md}) {
        padding: 62px 0;
    }
`

export const Eyebrow = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--crimson);
    margin-bottom: 26px;

    &::before { content: "☉"; color: var(--brass); font-size: 12px; }
`

export const H2 = styled.h2`
    font-family: ${serif};
    font-weight: 500;
    font-size: clamp(29px, 4.2vw, 44px);
    line-height: 1.12;
    letter-spacing: -0.01em;
    color: var(--ink);
    margin-bottom: 28px;
`

export const Para = styled.p`
    color: var(--ink-soft);
    margin-bottom: 20px;
    max-width: 62ch;

    strong { color: var(--ink); font-weight: 500; }
`

export const Quote = styled.blockquote`
    font-family: ${serif};
    font-style: italic;
    font-size: clamp(22px, 3vw, 32px);
    line-height: 1.5;
    color: var(--ink);
    border-left: 2px solid var(--crimson);
    padding: 4px 0 4px 28px;
    margin: 44px 0;
    max-width: 30ch;

    cite {
        display: block;
        font-style: normal;
        font-family: ${sans};
        font-size: 14px;
        color: var(--ink-mute);
        margin-top: 18px;
    }
`

// ── Figures & video ───────────────────────────────────────────────────────────

export const Figure = styled.figure`
    margin: 44px 0;

    figcaption { font-size: 13px; color: var(--ink-mute); margin-top: 14px; }
`

export const Frame = styled.div`
    border: 0.5px solid var(--line);
    border-radius: 14px;
    overflow: hidden;
    background: var(--bg-soft);

    img { display: block; width: 100%; height: auto; }
`

export const Video = styled.div`
    position: relative;
    aspect-ratio: 16 / 9;

    iframe {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
`

// ── Role panel ────────────────────────────────────────────────────────────────

export const Panel = styled.div`
    background: linear-gradient(160deg, var(--panel-tint), var(--bg-soft));
    border: 0.5px solid var(--line);
    border-radius: 16px;
    padding: 46px 40px;
    margin: 44px 0;

    @media (max-width: ${theme.breakpoints.md}) {
        padding: 34px 24px;
    }
`

export const PanelBig = styled.div`
    font-family: ${serif};
    font-size: clamp(25px, 3.4vw, 38px);
    color: var(--ink);
    line-height: 1.16;
    margin-bottom: 18px;
    font-weight: 500;
`

// ── Reception cards ───────────────────────────────────────────────────────────

export const Receptions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 44px 0;

    .reception {
        background: var(--card);
        border: 0.5px solid var(--line);
        border-radius: 14px;
        padding: 26px 22px;
    }
    .kind { font-size: 11px; color: var(--brass); letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 16px; font-weight: 500; }
    .reception h4 { font-family: ${serif}; font-size: 20px; font-weight: 500; color: var(--ink); margin-bottom: 10px; }
    .reception p { font-size: 14px; color: var(--ink-soft); margin: 0; line-height: 1.6; }

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

// ── Chips ─────────────────────────────────────────────────────────────────────

export const Chips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 8px 0 0;
`

export const Chip = styled.span`
    font-size: 12px;
    color: var(--ink-soft);
    border: 0.5px solid var(--line-strong);
    padding: 5px 13px;
    border-radius: 30px;
`

// ── CTA & footer ──────────────────────────────────────────────────────────────

export const Cta = styled.div`
    text-align: center;
    padding: 96px 0;
    border-top: 0.5px solid var(--line);

    h2 { margin-bottom: 34px; }
`

export const Btns = styled.div`
    display: inline-flex;
    gap: 14px;
    flex-wrap: wrap;
    justify-content: center;
`

export const Btn = styled.a<{ $ghost?: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 14px 28px;
    border-radius: 12px;
    text-decoration: none;
    font-size: 15px;
    transition: all 0.25s;

    ${p => p.$ghost ? `
        border: 0.5px solid var(--line-strong);
        color: var(--ink);
        &:hover { border-color: var(--ink); background: var(--bg-soft); }
    ` : `
        background: var(--crimson);
        color: var(--bg);
        &:hover { background: var(--btn-hover); }
    `}
`

export const Footer = styled.footer`
    border-top: 0.5px solid var(--line);
    padding: 40px 0;
    font-size: 13px;
    color: var(--ink-mute);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;

    a { color: var(--ink-soft); text-decoration: none; }
    a:hover { color: var(--ink); }
`
