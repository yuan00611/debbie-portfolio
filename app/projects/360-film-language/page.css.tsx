import { styled } from "styled-components";
import { theme } from '../../theme';

const serif = `var(--font-fraunces), "Songti SC", "Noto Serif TC", Georgia, serif`;
const sans = `var(--font-inter), "PingFang TC", system-ui, sans-serif`;
const mono = `var(--font-jetbrains-mono), ui-monospace, monospace`;

// ── Page root ─────────────────────────────────────────────────────────────────
// Newsprint palette scoped to this page, following the site theme toggle:
// fresh newsprint in light mode, the press room at night in dark mode.
// Two accents encode the study's two methods — press navy for film analysis,
// proof red for the user study. Site tokens are remapped so Navigation and
// any shared chrome inherit the page palette.

export const PageRoot = styled.div`
    /* light — newsprint */
    --press: #2b4d8c;
    --proof: #b3352b;
    --ink: #1e1f22;
    --ink-soft: #4f5459;
    --ink-mute: #6c7178;
    --line: rgba(30, 31, 34, 0.12);
    --line-strong: rgba(30, 31, 34, 0.26);
    --bg: #f8f7f3;
    --bg-soft: #efeee8;
    --page-card: #fdfcfa;
    --panel-tint: #e2e6ee;
    --btn-hover: #1c3766;

    html.dark & {
        /* dark — the press room at night */
        --press: #7da3e0;
        --proof: #e0766b;
        --ink: #eceef2;
        --ink-soft: #a3a9b3;
        --ink-mute: #676d78;
        --line: rgba(255, 255, 255, 0.09);
        --line-strong: rgba(255, 255, 255, 0.18);
        --bg: #121419;
        --bg-soft: #181b21;
        --page-card: #1c2027;
        --panel-tint: #1a2434;
        --btn-hover: #b9cdf0;
    }

    --background: var(--bg);
    --foreground: var(--ink);
    --card: var(--page-card);
    --muted-foreground: var(--ink-soft);
    --border: var(--line);
    --stroke-1: var(--line);
    --stroke-2: var(--line);
    --stroke-3: var(--line-strong);
    --brand-teal: var(--press);

    background: var(--bg);
    color: var(--ink);
    min-height: 100vh;
    font-family: ${sans};
    font-size: 16px;
    line-height: 1.75;
    overflow-x: clip;
    transition: background-color 0.35s ease, color 0.35s ease;

    *::selection { background: var(--press); color: var(--bg); }

    a:focus-visible {
        outline: 2px solid var(--proof);
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
// Fixed art in both themes: the viewer at the center of a 360° ring, with the
// guided cone of attention picked out in proof red.

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
        radial-gradient(40% 55% at 65% 30%, rgba(125, 163, 224, 0.16), transparent 70%),
        linear-gradient(176deg, #1b1e26 0%, #171a21 50%, #13151b 80%, var(--bg) 100%);

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(176deg, transparent 48%, rgba(18, 20, 25, 0.3) 76%, var(--bg) 99%);
    }
`

export const Ring = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    opacity: 0.6;

    svg { width: 100%; height: 100%; }
`

export const HeroInner = styled(Wrap)`
    position: relative;
    z-index: 3;
    width: 100%;
`

/* Hero children use fixed colors — the press-room art doesn't change with theme */
export const HeroEyebrow = styled.div`
    font-family: ${mono};
    font-size: 12px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #7da3e0;
    margin-bottom: 22px;
`

export const HeroTitle = styled.h1`
    font-family: ${serif};
    font-size: clamp(40px, 6.8vw, 78px);
    line-height: 1.02;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #eef1f5;
`

export const HeroTagline = styled.p`
    font-family: ${serif};
    font-style: italic;
    font-size: clamp(19px, 2.4vw, 26px);
    color: #b8c0cc;
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
        font-size: clamp(30px, 4vw, 44px);
        color: var(--ink);
        line-height: 1;
        margin-bottom: 8px;
        font-weight: 500;
    }
    .num.hl { color: var(--press); }
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
    color: var(--press);
    margin-bottom: 26px;

    &::before { content: "◎"; color: var(--ink-mute); font-size: 12px; }
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
    border-left: 2px solid var(--press);
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

// ── Method cards ──────────────────────────────────────────────────────────────

export const Methods = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 44px 0;

    .method {
        background: var(--card);
        border: 0.5px solid var(--line);
        border-radius: 14px;
        padding: 26px 22px;
        border-top: 2px solid var(--press);
    }
    .method.us { border-top-color: var(--proof); }
    .kind { font-family: ${mono}; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 16px; font-weight: 500; color: var(--press); }
    .method.us .kind { color: var(--proof); }
    .method h4 { font-family: ${serif}; font-size: 20px; font-weight: 500; color: var(--ink); margin-bottom: 10px; }
    .method p { font-size: 14px; color: var(--ink-soft); margin: 0; line-height: 1.6; }

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

// ── What transforms in 360 ────────────────────────────────────────────────────

export const TransformList = styled.ul`
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
    li::before { content: "→"; position: absolute; left: 0; color: var(--press); }
    li b { color: var(--ink); font-weight: 500; }
`

// ── Findings — six dimensions ─────────────────────────────────────────────────

export const Findings = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 44px 0;

    .finding {
        background: var(--card);
        border: 0.5px solid var(--line);
        border-radius: 14px;
        padding: 26px 22px;
    }
    .no { font-family: ${serif}; font-size: 15px; color: var(--press); margin-bottom: 12px; }
    .finding h4 { font-family: ${serif}; font-size: 21px; font-weight: 500; color: var(--ink); margin-bottom: 12px; }
    .finding p { font-size: 14px; color: var(--ink-soft); margin: 0 0 10px; line-height: 1.6; }
    .finding p:last-child { margin-bottom: 0; }
    .tag {
        display: inline-block;
        font-family: ${mono};
        font-size: 10px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-right: 8px;
        color: var(--press);
    }
    .tag.us { color: var(--proof); }
    .pq {
        font-family: ${serif};
        font-style: italic;
        color: var(--ink);
        border-left: 2px solid var(--proof);
        padding-left: 14px;
        margin-top: 12px;
        font-size: 14px;
        line-height: 1.55;
    }

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

// ── Publications ──────────────────────────────────────────────────────────────

export const Pubs = styled.div`
    display: grid;
    gap: 16px;
    margin: 44px 0;

    .pub {
        background: var(--card);
        border: 0.5px solid var(--line);
        border-left: 2px solid var(--press);
        border-radius: 0 14px 14px 0;
        padding: 24px 28px;
    }
    .venue { font-family: ${mono}; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--press); margin-bottom: 12px; font-weight: 500; }
    .cite { font-size: 14.5px; color: var(--ink-soft); line-height: 1.7; margin: 0; }
    .cite b { color: var(--ink); font-weight: 500; }
    .links { margin-top: 12px; font-size: 13.5px; color: var(--ink-mute); display: flex; gap: 10px; align-items: center; }
    .links a {
        color: var(--press);
        text-decoration: none;
        border-bottom: 1px solid var(--line-strong);
        font-weight: 500;
    }
    .links a:hover { border-bottom-color: var(--press); }
`

// ── Cross-link panel ──────────────────────────────────────────────────────────

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
        color: var(--press);
        text-decoration: none;
        border-bottom: 1px solid var(--line-strong);
        font-weight: 500;
    }
    a:hover { border-bottom-color: var(--press); }
`

// ── Open-questions list ───────────────────────────────────────────────────────

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
    li::before { content: "?"; position: absolute; left: 2px; color: var(--proof); font-family: ${serif}; }
    li b { color: var(--ink); font-weight: 500; }
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
        background: var(--press);
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
