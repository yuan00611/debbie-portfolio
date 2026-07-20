import { styled } from "styled-components";
import { theme } from '../../theme';

const serif = `var(--font-fraunces), "Songti SC", "Noto Serif TC", Georgia, serif`;
const sans = `var(--font-inter), "PingFang TC", system-ui, sans-serif`;

// ── Page root ─────────────────────────────────────────────────────────────────
// Ink-wash palette scoped to this page, following the site theme toggle:
// warm ivory paper in light mode, deep ink in dark mode — moss + clay accents
// in both. Site tokens are remapped so Navigation and any shared chrome
// rendered inside inherit the page palette.

export const PageRoot = styled.div`
    /* light — ink on paper */
    --moss: #5f7055;
    --moss-deep: #55604f;
    --clay: #a96a42;
    --paper: #d6d3c4;
    --ink: #2b2e28;
    --ink-soft: #565b50;
    --ink-mute: #6d7267;
    --line: rgba(43, 46, 40, 0.12);
    --line-strong: rgba(43, 46, 40, 0.26);
    --bg: #f5f3ea;
    --bg-soft: #edeade;
    --page-card: #faf8ef;
    --panel-tint: #e3e8dc;

    html.dark & {
        /* dark — ink at night */
        --moss: #8ea084;
        --clay: #c98a63;
        --ink: #ecebe4;
        --ink-soft: #a9aca3;
        --ink-mute: #6d716a;
        --line: rgba(255, 255, 255, 0.09);
        --line-strong: rgba(255, 255, 255, 0.18);
        --bg: #14161a;
        --bg-soft: #1b1e23;
        --page-card: #1e2127;
        --panel-tint: #1c2620;
    }

    --background: var(--bg);
    --foreground: var(--ink);
    --card: var(--page-card);
    --muted-foreground: var(--ink-soft);
    --border: var(--line);
    --stroke-1: var(--line);
    --stroke-2: var(--line);
    --stroke-3: var(--line-strong);
    --brand-teal: var(--moss);

    background: var(--bg);
    color: var(--ink);
    min-height: 100vh;
    font-family: ${sans};
    font-size: 16px;
    line-height: 1.75;
    overflow-x: clip;
    transition: background-color 0.35s ease, color 0.35s ease;

    *::selection { background: var(--moss); color: var(--bg); }

    a:focus-visible {
        outline: 2px solid var(--clay);
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
        radial-gradient(120% 90% at 50% 8%, rgba(214, 211, 196, 0.30), transparent 60%),
        linear-gradient(178deg, #c9d2c8 0%, #cccec0 30%, #b7bfab 62%, #7f8a72 100%);

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(178deg, transparent 34%, rgba(20, 22, 26, 0.15) 66%, var(--bg) 99%);
    }
`

export const Ridge = styled.div<{ $bottom: string; $opacity: number }>`
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    bottom: ${p => p.$bottom};
    opacity: ${p => p.$opacity};

    svg { display: block; width: 100%; }
`

export const HeroInner = styled(Wrap)`
    position: relative;
    z-index: 3;
    width: 100%;
`

export const HeroEyebrow = styled.div`
    font-size: 12px;
    letter-spacing: 0.34em;
    text-transform: uppercase;
    color: var(--moss-deep);
    margin-bottom: 22px;
    font-weight: 500;
`

export const HeroTitle = styled.h1`
    font-family: ${serif};
    font-size: clamp(48px, 8.5vw, 96px);
    line-height: 0.98;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #2c352a;
`

export const HeroZh = styled.div`
    font-family: ${serif};
    font-size: clamp(20px, 3vw, 30px);
    letter-spacing: 0.4em;
    color: var(--moss-deep);
    margin-top: 14px;
    padding-left: 4px;
`

export const HeroTagline = styled.p`
    font-family: ${serif};
    font-style: italic;
    font-size: clamp(19px, 2.4vw, 26px);
    color: #3a4335;
    max-width: 34ch;
    margin-top: 26px;
    line-height: 1.4;
`

/* Fixed colors — sits on the hero art, which doesn't change with theme */
export const HeroPlay = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin-top: 34px;
    padding: 13px 26px;
    border-radius: 40px;
    font-size: 15px;
    text-decoration: none;
    background: #2c352a;
    color: #ecebe4;
    transition: all 0.25s;

    &:hover { background: #55604f; }
    &:focus-visible { outline: 2px solid #2c352a; outline-offset: 3px; }
`

// ── Meta strip ────────────────────────────────────────────────────────────────

export const MetaGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    padding: 40px 0;
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
    padding: 88px 0;

    @media (max-width: ${theme.breakpoints.md}) {
        padding: 64px 0;
    }
`

export const Eyebrow = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--moss);
    margin-bottom: 26px;

    &::before { content: "✦"; color: var(--ink-mute); font-size: 11px; }
`

export const H2 = styled.h2`
    font-family: ${serif};
    font-weight: 500;
    font-size: clamp(30px, 4.4vw, 46px);
    line-height: 1.1;
    letter-spacing: -0.005em;
    color: var(--ink);
    margin-bottom: 28px;
`

export const Para = styled.p`
    color: var(--ink-soft);
    margin-bottom: 20px;
    max-width: 62ch;

    strong { color: var(--ink); font-weight: 500; }
`

export const Zh = styled.span`
    font-family: ${serif};
    color: var(--moss);
    font-size: 1.1em;
`

export const Quote = styled.blockquote`
    font-family: ${serif};
    font-style: italic;
    font-size: clamp(22px, 3vw, 32px);
    line-height: 1.4;
    color: var(--ink);
    border-left: 2px solid var(--clay);
    padding: 4px 0 4px 28px;
    margin: 40px 0;
    max-width: 26ch;
`

// ── The core-loop diagram ─────────────────────────────────────────────────────

export const Loop = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin: 44px 0 12px;

    .step {
        background: var(--card);
        border: 0.5px solid var(--line);
        border-radius: 12px;
        padding: 22px 18px;
        position: relative;
    }
    .n {
        font-family: ${serif};
        font-size: 15px;
        color: var(--clay);
        margin-bottom: 12px;
    }
    .step h4 { font-size: 15px; font-weight: 500; color: var(--ink); margin-bottom: 6px; }
    .step p { font-size: 13px; color: var(--ink-soft); margin: 0; line-height: 1.55; }
    .step::after {
        content: "→";
        position: absolute;
        right: -11px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--ink-mute);
        font-size: 14px;
        z-index: 2;
    }
    .step:last-child::after {
        content: "↺";
        right: 50%;
        bottom: -34px;
        top: auto;
        transform: translateX(50%);
    }

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr 1fr;
        .step::after { display: none; }
    }
`

// ── Figures & placeholders ────────────────────────────────────────────────────

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

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

// ── Highlight panel (procedural art) ──────────────────────────────────────────

export const Panel = styled.div`
    background: linear-gradient(165deg, var(--panel-tint), var(--bg-soft));
    border: 0.5px solid var(--line);
    border-radius: 16px;
    padding: 48px 40px;
    margin: 44px 0;

    @media (max-width: ${theme.breakpoints.md}) {
        padding: 34px 24px;
    }
`

export const PanelBig = styled.div`
    font-family: ${serif};
    font-size: clamp(26px, 3.6vw, 40px);
    color: var(--ink);
    line-height: 1.15;
    margin-bottom: 20px;
    font-weight: 500;
`

// ── Accessibility list ────────────────────────────────────────────────────────

export const CleanList = styled.ul`
    list-style: none;
    margin: 22px 0;
    padding: 0;
    max-width: 62ch;

    li {
        padding: 12px 0 12px 26px;
        position: relative;
        color: var(--ink-soft);
        font-size: 15px;
        border-bottom: 0.5px solid var(--line);
    }
    li::before { content: "—"; position: absolute; left: 0; color: var(--moss); }
    li b { color: var(--ink); font-weight: 500; }
`

// ── Stack / architecture ──────────────────────────────────────────────────────

export const Chips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 8px 0 22px;
`

export const Chip = styled.span`
    font-size: 12px;
    color: var(--ink-soft);
    border: 0.5px solid var(--line-strong);
    padding: 5px 13px;
    border-radius: 30px;
`

export const Arch = styled.details`
    border: 0.5px solid var(--line);
    border-radius: 12px;
    padding: 4px 24px;
    margin: 30px 0;
    background: var(--bg-soft);

    summary {
        cursor: pointer;
        padding: 18px 0;
        font-size: 15px;
        color: var(--ink);
        list-style: none;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    summary::-webkit-details-marker { display: none; }
    summary::before { content: "+"; color: var(--clay); font-size: 18px; }
    &[open] summary::before { content: "–"; }
    summary:focus-visible {
        outline: 2px solid var(--clay);
        outline-offset: 3px;
        border-radius: 4px;
    }

    .body { padding: 0 0 24px; }
    .body p { font-size: 14px; }
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
    border-radius: 40px;
    text-decoration: none;
    font-size: 15px;
    transition: all 0.25s;

    ${p => p.$ghost ? `
        border: 0.5px solid var(--line-strong);
        color: var(--ink);
        &:hover { border-color: var(--ink); background: var(--bg-soft); }
    ` : `
        background: var(--ink);
        color: var(--bg);
        &:hover { background: var(--moss); }
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
