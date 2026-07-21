import { styled } from "styled-components";
import { theme } from '../../theme';

const serif = `var(--font-fraunces), "Songti SC", "Noto Serif TC", Georgia, serif`;
const sans = `var(--font-inter), "PingFang TC", system-ui, sans-serif`;
const mono = `var(--font-jetbrains-mono), ui-monospace, monospace`;

// ── Page root ─────────────────────────────────────────────────────────────────
// Annotation palette scoped to this page, following the site theme toggle:
// a clean manuscript in light mode, a late-night reading room in dark mode —
// quill violet + marker yellow accents in both. Site tokens are remapped so
// Navigation and any shared chrome inherit the page palette.

export const PageRoot = styled.div`
    /* light — the manuscript */
    --quill: #5a49c8;
    --marker: #a8860d;
    --ink: #232128;
    --ink-soft: #55525e;
    --ink-mute: #706d7a;
    --line: rgba(35, 33, 40, 0.12);
    --line-strong: rgba(35, 33, 40, 0.26);
    --bg: #faf8f2;
    --bg-soft: #f1eee5;
    --page-card: #fefdf9;
    --panel-tint: #e6e2f4;
    --btn-hover: #43359e;

    html.dark & {
        /* dark — the late-night reading room */
        --quill: #a394f0;
        --marker: #e6c94a;
        --ink: #edecf3;
        --ink-soft: #a7a4b6;
        --ink-mute: #6b6879;
        --line: rgba(255, 255, 255, 0.09);
        --line-strong: rgba(255, 255, 255, 0.18);
        --bg: #14121c;
        --bg-soft: #1a1725;
        --page-card: #1f1b2c;
        --panel-tint: #1f1a33;
        --btn-hover: #c9bef7;
    }

    --background: var(--bg);
    --foreground: var(--ink);
    --card: var(--page-card);
    --muted-foreground: var(--ink-soft);
    --border: var(--line);
    --stroke-1: var(--line);
    --stroke-2: var(--line);
    --stroke-3: var(--line-strong);
    --brand-teal: var(--quill);

    background: var(--bg);
    color: var(--ink);
    min-height: 100vh;
    font-family: ${sans};
    font-size: 16px;
    line-height: 1.75;
    overflow-x: clip;
    transition: background-color 0.35s ease, color 0.35s ease;

    *::selection { background: var(--quill); color: var(--bg); }

    a:focus-visible {
        outline: 2px solid var(--marker);
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
// Fixed art in both themes: lines of text, one span marked, and a question
// rising out of it.

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
        radial-gradient(36% 50% at 70% 30%, rgba(163, 148, 240, 0.18), transparent 70%),
        linear-gradient(176deg, #201c30 0%, #1a1728 50%, #151220 80%, var(--bg) 100%);

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(176deg, transparent 48%, rgba(20, 18, 28, 0.3) 76%, var(--bg) 99%);
    }
`

export const TextArt = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    opacity: 0.65;

    svg { width: 100%; height: 100%; }
`

export const HeroInner = styled(Wrap)`
    position: relative;
    z-index: 3;
    width: 100%;
`

/* Hero children use fixed colors — the reading-room art doesn't change with theme */
export const HeroEyebrow = styled.div`
    font-family: ${mono};
    font-size: 12px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #a394f0;
    margin-bottom: 22px;
`

export const HeroTitle = styled.h1`
    font-family: ${serif};
    font-size: clamp(40px, 6.8vw, 78px);
    line-height: 1.02;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #eef0f6;
`

export const HeroTagline = styled.p`
    font-family: ${serif};
    font-style: italic;
    font-size: clamp(19px, 2.4vw, 26px);
    color: #bcb8cc;
    max-width: 42ch;
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
    .num.hl { color: var(--quill); }
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
    color: var(--quill);
    margin-bottom: 26px;

    &::before { content: "?"; color: var(--marker); font-family: ${serif}; font-size: 14px; }
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

export const Mark = styled.span`
    background: color-mix(in oklch, var(--marker) 22%, transparent);
    color: var(--ink);
    padding: 0 3px;
    border-radius: 3px;
`

export const Quote = styled.blockquote`
    font-family: ${serif};
    font-style: italic;
    font-size: clamp(22px, 3vw, 32px);
    line-height: 1.42;
    color: var(--ink);
    border-left: 2px solid var(--quill);
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

// ── Question-type cards ───────────────────────────────────────────────────────

export const Kinds = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 44px 0;

    .kindCard {
        background: var(--card);
        border: 0.5px solid var(--line);
        border-radius: 14px;
        padding: 26px 22px;
    }
    .k { font-family: ${mono}; font-size: 11px; color: var(--marker); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 16px; font-weight: 500; }
    .kindCard h4 { font-family: ${serif}; font-size: 20px; font-weight: 500; color: var(--ink); margin-bottom: 10px; }
    .kindCard p { font-size: 14px; color: var(--ink-soft); margin: 0; line-height: 1.6; }

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
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

export const PanelLink = styled.span`
    a {
        color: var(--quill);
        text-decoration: none;
        border-bottom: 1px solid var(--line-strong);
        font-weight: 500;
    }
    a:hover { border-bottom-color: var(--quill); }
`

// ── Publications ──────────────────────────────────────────────────────────────

export const Pubs = styled.div`
    display: grid;
    gap: 16px;
    margin: 44px 0;

    .pub {
        background: var(--card);
        border: 0.5px solid var(--line);
        border-left: 2px solid var(--quill);
        border-radius: 0 14px 14px 0;
        padding: 24px 28px;
    }
    .venue { font-family: ${mono}; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--quill); margin-bottom: 12px; font-weight: 500; }
    .cite { font-size: 14.5px; color: var(--ink-soft); line-height: 1.7; margin: 0; }
    .cite b { color: var(--ink); font-weight: 500; }
    .links { margin-top: 12px; font-size: 13.5px; color: var(--ink-mute); display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
    .links a {
        color: var(--quill);
        text-decoration: none;
        border-bottom: 1px solid var(--line-strong);
        font-weight: 500;
    }
    .links a:hover { border-bottom-color: var(--quill); }
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
        background: var(--quill);
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
