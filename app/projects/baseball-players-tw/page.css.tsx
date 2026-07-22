import { styled } from "styled-components";
import { theme } from '../../theme';

const serif = `var(--font-fraunces), "Songti SC", "Noto Serif TC", Georgia, serif`;
const sans = `var(--font-inter), "PingFang TC", system-ui, sans-serif`;
const mono = `var(--font-jetbrains-mono), ui-monospace, monospace`;

// ── Page root ─────────────────────────────────────────────────────────────────
// Night-game palette scoped to this page: chalk-white daylight in light mode,
// a deep-navy ballpark under the lights in dark mode (matching the live map).
// Duo = seam red (the pins / the ball) + turf green (the field). Site tokens are
// remapped so Navigation and shared chrome inherit the page palette.

export const PageRoot = styled.div`
    /* light — daylight / chalk */
    --seam: #c8443c;
    --turf: #3d8f5c;
    --ink: #1e2420;
    --ink-soft: #4b5852;
    --ink-mute: #6b766f;
    --line: rgba(30, 36, 32, 0.12);
    --line-strong: rgba(30, 36, 32, 0.26);
    --bg: #f6f7f4;
    --bg-soft: #eceee8;
    --page-card: #fdfefb;
    --panel-tint: #e4efe6;
    --btn-hover: #a8352f;

    html.dark & {
        /* dark — night game, deep navy */
        --seam: #ef6a5f;
        --turf: #5cc487;
        --ink: #eef2ee;
        --ink-soft: #aab4ac;
        --ink-mute: #6d7872;
        --line: rgba(255, 255, 255, 0.09);
        --line-strong: rgba(255, 255, 255, 0.18);
        --bg: #0d1319;
        --bg-soft: #141b21;
        --page-card: #171f26;
        --panel-tint: #15241c;
        --btn-hover: #f2897f;
    }

    --background: var(--bg);
    --foreground: var(--ink);
    --card: var(--page-card);
    --muted-foreground: var(--ink-soft);
    --border: var(--line);
    --stroke-1: var(--line);
    --stroke-2: var(--line);
    --stroke-3: var(--line-strong);
    --brand-teal: var(--seam);

    background: var(--bg);
    color: var(--ink);
    min-height: 100vh;
    font-family: ${sans};
    font-size: 16px;
    line-height: 1.75;
    overflow-x: clip;
    transition: background-color 0.35s ease, color 0.35s ease;

    *::selection { background: var(--seam); color: var(--bg); }

    a:focus-visible {
        outline: 2px solid var(--seam);
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

export const Wide = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 28px;
`

// ── Hero ──────────────────────────────────────────────────────────────────────
// Fixed art in both themes: a night sky over the field. A green Taiwan marker on
// the left, dotted journeys arcing across the Pacific to a constellation of red
// pins over the US — the story the map tells. Fades to var(--bg) at the bottom.

export const Hero = styled.header`
    position: relative;
    min-height: 76vh;
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
        radial-gradient(40% 46% at 74% 30%, rgba(239, 106, 95, 0.16), transparent 70%),
        radial-gradient(30% 40% at 18% 62%, rgba(92, 196, 135, 0.12), transparent 72%),
        linear-gradient(176deg, #0f1a22 0%, #0d151c 48%, #0c1218 78%, var(--bg) 100%);

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(176deg, transparent 46%, rgba(12, 18, 24, 0.32) 74%, var(--bg) 99%);
    }
`

export const Art = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    opacity: 0.9;

    svg { width: 100%; height: 100%; }
`

export const HeroInner = styled(Wrap)`
    position: relative;
    z-index: 3;
    width: 100%;
`

/* Hero children use fixed colors — the night-game art doesn't change with theme */
export const HeroEyebrow = styled.div`
    font-family: ${mono};
    font-size: 12px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #ef6a5f;
    margin-bottom: 22px;
`

export const HeroTitle = styled.h1`
    font-family: ${serif};
    font-size: clamp(40px, 6.8vw, 78px);
    line-height: 1.02;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #f1f4f0;
`

export const HeroTagline = styled.p`
    font-family: ${serif};
    font-style: italic;
    font-size: clamp(19px, 2.4vw, 26px);
    color: #bcc6bd;
    max-width: 44ch;
    margin-top: 26px;
    line-height: 1.4;
`

// ── Stat bar ──────────────────────────────────────────────────────────────────

export const Stats = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border: 0.5px solid var(--line);
    border-radius: 14px;
    overflow: hidden;
    margin: 46px 0 0;
    background: var(--bg-soft);

    .cell { padding: 26px 22px; border-right: 0.5px solid var(--line); }
    .cell:last-child { border-right: none; }
    .num {
        font-family: ${serif};
        font-size: clamp(28px, 3.6vw, 40px);
        color: var(--ink);
        line-height: 1;
        margin-bottom: 8px;
        font-weight: 500;
    }
    .num.hl { color: var(--seam); }
    .lab { font-size: 12px; color: var(--ink-mute); letter-spacing: 0.04em; line-height: 1.4; }

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr 1fr;
        .cell:nth-child(2) { border-right: none; }
        .cell:nth-child(1), .cell:nth-child(2) { border-bottom: 0.5px solid var(--line); }
    }
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
    font-family: ${mono};
    font-size: 11px;
    letter-spacing: 0.1em;
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
    font-family: ${mono};
    font-size: 12px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--seam);
    margin-bottom: 26px;

    &::before { content: "◆"; color: var(--turf); font-size: 11px; }
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
    line-height: 1.42;
    color: var(--ink);
    border-left: 2px solid var(--seam);
    padding: 4px 0 4px 28px;
    margin: 44px 0;
    max-width: 32ch;
`

// ── Feature-track cards ───────────────────────────────────────────────────────

export const Tracks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 44px 0;

    .track {
        background: var(--card);
        border: 0.5px solid var(--line);
        border-radius: 14px;
        padding: 26px 22px;
        border-top: 2px solid var(--turf);
    }
    .track.q { border-top-color: var(--seam); }
    .kind { font-family: ${mono}; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 16px; font-weight: 500; color: var(--turf); }
    .track.q .kind { color: var(--seam); }
    .track h4 { font-family: ${serif}; font-size: 20px; font-weight: 500; color: var(--ink); margin-bottom: 10px; }
    .track p { font-size: 14px; color: var(--ink-soft); margin: 0; line-height: 1.6; }

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

// ── Stack pills ───────────────────────────────────────────────────────────────

export const Stack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 26px 0 8px;

    .pill {
        font-family: ${mono};
        font-size: 12px;
        color: var(--ink-soft);
        border: 0.5px solid var(--line-strong);
        padding: 6px 14px;
        border-radius: 8px;
    }
    .pill.key {
        color: var(--bg);
        background: var(--turf);
        border-color: var(--turf);
        font-weight: 500;
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

// ── Role / reflection panels ──────────────────────────────────────────────────

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

export const PanelLink = styled.span`
    a {
        color: var(--seam);
        text-decoration: none;
        border-bottom: 1px solid var(--line-strong);
        font-weight: 500;
    }
    a:hover { border-bottom-color: var(--seam); }
`

// ── Chips ─────────────────────────────────────────────────────────────────────

export const Chips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 8px 0 0;
`

export const Chip = styled.span`
    font-family: ${mono};
    font-size: 12px;
    color: var(--ink-soft);
    border: 0.5px solid var(--line-strong);
    padding: 5px 13px;
    border-radius: 6px;
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
        background: var(--seam);
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
