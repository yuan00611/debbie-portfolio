import { styled } from "styled-components";
import { theme } from '../../theme';

const serif = `var(--font-fraunces), "Songti SC", "Noto Serif TC", Georgia, serif`;
const sans = `var(--font-inter), "PingFang TC", system-ui, sans-serif`;
const mono = `var(--font-jetbrains-mono), ui-monospace, monospace`;

// ── Page root ─────────────────────────────────────────────────────────────────
// Fleet-at-noon palette scoped to this page, following the site theme toggle:
// a cool blue-gray control room in light mode, the fleet at night in dark mode.
// Duo mirrors the app's own rule — cobalt is the record, sun is attention:
// yellow only ever marks what the reviewer selected. Site tokens are remapped
// so Navigation and shared chrome inherit the page palette.

export const PageRoot = styled.div`
    /* light — control room */
    --cobalt: #3563b5;
    --sun: #9c7a0e;
    --ink: #1c2333;
    --ink-soft: #4c566c;
    --ink-mute: #6d7688;
    --line: rgba(28, 35, 51, 0.12);
    --line-strong: rgba(28, 35, 51, 0.26);
    --bg: #f3f5f9;
    --bg-soft: #e9edf4;
    --page-card: #fcfdfe;
    --panel-tint: #dfe8f7;
    --btn-hover: #2a4f94;

    html.dark & {
        /* dark — the fleet at night */
        --cobalt: #6f97e8;
        --sun: #f2bb2e;
        --ink: #eef1f7;
        --ink-soft: #a8b0c2;
        --ink-mute: #6e7789;
        --line: rgba(255, 255, 255, 0.09);
        --line-strong: rgba(255, 255, 255, 0.18);
        --bg: #0f1420;
        --bg-soft: #151b2a;
        --page-card: #1a2233;
        --panel-tint: #1d2b4a;
        --btn-hover: #93b3f2;
    }

    --background: var(--bg);
    --foreground: var(--ink);
    --card: var(--page-card);
    --muted-foreground: var(--ink-soft);
    --border: var(--line);
    --stroke-1: var(--line);
    --stroke-2: var(--line);
    --stroke-3: var(--line-strong);
    --brand-teal: var(--cobalt);

    background: var(--bg);
    color: var(--ink);
    min-height: 100vh;
    font-family: ${sans};
    font-size: 16px;
    line-height: 1.75;
    overflow-x: clip;
    transition: background-color 0.35s ease, color 0.35s ease;

    *::selection { background: var(--cobalt); color: var(--bg); }

    a:focus-visible {
        outline: 2px solid var(--cobalt);
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
// Fixed night-navy art in both themes: the fleet as state bubbles on a faint
// graticule, one sun-yellow pin selected. Fades to var(--bg) at the bottom.

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
        radial-gradient(42% 56% at 72% 26%, rgba(242, 187, 46, 0.10), transparent 70%),
        radial-gradient(50% 60% at 30% 40%, rgba(111, 151, 232, 0.10), transparent 72%),
        linear-gradient(176deg, #1c2740 0%, #182238 52%, #131b2d 88%, var(--bg) 100%);

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(176deg, transparent 60%, rgba(15, 20, 32, 0.28) 86%, var(--bg) 99%);
    }
`

export const HeroMap = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    opacity: 0.85;

    svg { width: 100%; height: 100%; }
`

export const HeroInner = styled(Wrap)`
    position: relative;
    z-index: 3;
    width: 100%;
`

/* Hero children use fixed colors — the night-navy art doesn't change with theme */
export const HeroEyebrow = styled.div`
    font-family: ${mono};
    font-size: 12px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #f2bb2e;
    margin-bottom: 22px;
`

export const HeroTitle = styled.h1`
    font-family: ${serif};
    font-size: clamp(40px, 6.8vw, 78px);
    line-height: 1.02;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #f0f3f9;
`

export const HeroTagline = styled.p`
    font-family: ${serif};
    font-style: italic;
    font-size: clamp(19px, 2.4vw, 26px);
    color: #b9c2d6;
    max-width: 46ch;
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
    .num.hl { color: var(--cobalt); }
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
    color: var(--cobalt);
    margin-bottom: 26px;

    &::before { content: "⊙"; color: var(--sun); font-size: 13px; }
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
    border-left: 2px solid var(--sun);
    padding: 4px 0 4px 28px;
    margin: 44px 0;
    max-width: 34ch;
`

// ── Maya's five questions ─────────────────────────────────────────────────────

export const Questions = styled.ol`
    list-style: none;
    counter-reset: q;
    margin: 40px 0;
    padding: 0;
    display: grid;
    gap: 10px;

    li {
        counter-increment: q;
        display: flex;
        align-items: center;
        gap: 18px;
        background: var(--card);
        border: 0.5px solid var(--line);
        border-radius: 12px;
        padding: 16px 20px;
    }
    li::before {
        content: counter(q);
        font-family: ${mono};
        font-size: 13px;
        color: var(--bg);
        background: var(--cobalt);
        border-radius: 50%;
        min-width: 24px;
        height: 24px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .q { font-family: ${serif}; font-size: 18px; color: var(--ink); }
    .a { font-family: ${mono}; font-size: 12px; color: var(--ink-mute); margin-left: auto; text-align: right; white-space: nowrap; }

    @media (max-width: ${theme.breakpoints.md}) {
        li { flex-wrap: wrap; gap: 4px 18px; }
        .a { flex-basis: 100%; margin-left: 42px; text-align: left; }
    }
`

// ── Missing-rate bars ─────────────────────────────────────────────────────────

export const MissBars = styled.div`
    margin: 40px 0;
    display: grid;
    gap: 9px;

    .row {
        display: grid;
        grid-template-columns: 170px 1fr 92px;
        align-items: center;
        gap: 14px;
    }
    .f { font-family: ${mono}; font-size: 12px; color: var(--ink-soft); overflow-wrap: anywhere; }
    .track { height: 8px; background: var(--bg-soft); border-radius: 4px; overflow: hidden; }
    .fill { height: 100%; background: var(--sun); border-radius: 4px; opacity: 0.85; }
    .row.low .fill { background: var(--cobalt); }
    .v { font-family: ${mono}; font-size: 12px; color: var(--ink-mute); text-align: right; }

    @media (max-width: ${theme.breakpoints.md}) {
        .row { grid-template-columns: 118px 1fr 88px; gap: 10px; }
        .f { font-size: 11px; }
        .v { font-size: 11px; }
    }
`

// ── Two-track cards (score vs badges, utils vs components) ────────────────────

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
        border-top: 2px solid var(--cobalt);
    }
    .track.sun { border-top-color: var(--sun); }
    .kind { font-family: ${mono}; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 16px; font-weight: 500; color: var(--cobalt); }
    .track.sun .kind { color: var(--sun); }
    .track h4 { font-family: ${serif}; font-size: 20px; font-weight: 500; color: var(--ink); margin-bottom: 10px; }
    .track p { font-size: 14px; color: var(--ink-soft); margin: 0 0 10px; line-height: 1.6; }
    .track p:last-child { margin-bottom: 0; }

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

// ── Formula line ──────────────────────────────────────────────────────────────

export const Formula = styled.div`
    font-family: ${mono};
    font-size: clamp(14px, 2vw, 17px);
    color: var(--ink);
    background: var(--bg-soft);
    border: 0.5px solid var(--line);
    border-radius: 12px;
    padding: 18px 24px;
    margin: 36px 0;
    overflow-x: auto;
    white-space: nowrap;

    b { color: var(--cobalt); font-weight: 600; }
`

// ── AI workflow steps ─────────────────────────────────────────────────────────

export const Steps = styled.ol`
    list-style: none;
    counter-reset: s;
    margin: 40px 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;

    li {
        counter-increment: s;
        background: var(--card);
        border: 0.5px solid var(--line);
        border-radius: 12px;
        padding: 20px 18px;
    }
    li::before {
        content: "0" counter(s);
        font-family: ${mono};
        font-size: 11px;
        color: var(--sun);
        letter-spacing: 0.12em;
        display: block;
        margin-bottom: 10px;
    }
    h4 { font-family: ${serif}; font-size: 17px; font-weight: 500; color: var(--ink); margin-bottom: 6px; }
    p { font-size: 13px; color: var(--ink-soft); margin: 0; line-height: 1.55; }

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

// ── Retrospective list ────────────────────────────────────────────────────────

export const Catches = styled.ul`
    list-style: none;
    margin: 40px 0;
    padding: 0;
    display: grid;
    gap: 10px;

    li {
        display: flex;
        align-items: baseline;
        gap: 14px;
        border-bottom: 0.5px solid var(--line);
        padding: 0 2px 14px;
        font-size: 15px;
        color: var(--ink-soft);
    }
    li:last-child { border-bottom: none; }
    .tag {
        font-family: ${mono};
        font-size: 11px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--sun);
        min-width: 76px;
    }
    b { color: var(--ink); font-weight: 500; }
`

// ── Figures ───────────────────────────────────────────────────────────────────

export const Figure = styled.figure`
    margin: 44px 0;

    figcaption {
        font-size: 13px;
        color: var(--ink-mute);
        margin-top: 14px;
        padding-left: 2px;
    }
`

export const Frame = styled.div`
    border: 0.5px solid var(--line);
    border-radius: 14px;
    overflow: hidden;
    background: var(--bg-soft);

    img { display: block; width: 100%; height: auto; }
`

export const TwoUp = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 36px 0 8px;
    align-items: start;

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

/* Tall phone-like panel shots — capped column width, centered */
export const TwoUpTall = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 320px));
    justify-content: center;
    gap: 24px;
    margin: 36px 0 8px;
    align-items: start;

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: minmax(0, 320px);
    }
`

/* Tall form shot beside running text — image column capped */
export const FormSplit = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 320px) 1fr;
    gap: 36px;
    margin: 36px 0 8px;
    align-items: start;

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: minmax(0, 320px);
        justify-content: center;
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
        color: var(--cobalt);
        text-decoration: none;
        border-bottom: 1px solid var(--line-strong);
        font-weight: 500;
    }
    a:hover { border-bottom-color: var(--cobalt); }
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
        background: var(--cobalt);
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
