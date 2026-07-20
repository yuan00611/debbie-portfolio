import { styled } from "styled-components";
import { theme } from '../../theme';

const serif = `var(--font-fraunces), "Songti SC", "Noto Serif TC", Georgia, serif`;
const sans = `var(--font-inter), "PingFang TC", system-ui, sans-serif`;

// ── Page root ─────────────────────────────────────────────────────────────────
// Glacial palette scoped to this page, following the site theme toggle:
// ice fog in light mode, polar night in dark mode — glacier cyan + aurora
// violet accents in both. Site tokens are remapped so Navigation and any
// shared chrome rendered inside inherit the page palette.

export const PageRoot = styled.div`
    /* light — ice fog */
    --glacier: #1f7f95;
    --glacier-deep: #175d6d;
    --aurora: #6c5fbf;
    --quote-ink: #17404b;
    --ink: #1d272e;
    --ink-soft: #49575f;
    --ink-mute: #64737c;
    --line: rgba(18, 35, 43, 0.12);
    --line-strong: rgba(18, 35, 43, 0.26);
    --bg: #f1f6f8;
    --bg-soft: #e6eef1;
    --page-card: #fafdfe;
    --panel-tint: #d9e8ec;
    --btn-hover: #14505d;

    html.dark & {
        /* dark — polar night */
        --glacier: #5fc0d4;
        --aurora: #a79be8;
        --quote-ink: #d7ecf2;
        --ink: #e8eff2;
        --ink-soft: #9cabb3;
        --ink-mute: #5f7078;
        --line: rgba(255, 255, 255, 0.08);
        --line-strong: rgba(255, 255, 255, 0.17);
        --bg: #0e151a;
        --bg-soft: #131f26;
        --page-card: #16232b;
        --panel-tint: #12303a;
        --btn-hover: #d7ecf2;
    }

    --background: var(--bg);
    --foreground: var(--ink);
    --card: var(--page-card);
    --muted-foreground: var(--ink-soft);
    --border: var(--line);
    --stroke-1: var(--line);
    --stroke-2: var(--line);
    --stroke-3: var(--line-strong);
    --brand-teal: var(--glacier);

    background: var(--bg);
    color: var(--ink);
    min-height: 100vh;
    font-family: ${sans};
    font-size: 16px;
    line-height: 1.75;
    overflow-x: clip;
    transition: background-color 0.35s ease, color 0.35s ease;

    *::selection { background: var(--glacier); color: var(--bg); }

    a:focus-visible {
        outline: 2px solid var(--aurora);
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
// Fixed icy-day art (matching the game's look) in both themes; fades into the
// active page background at the bottom.

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
        radial-gradient(110% 80% at 72% 6%, rgba(255, 255, 255, 0.45), transparent 55%),
        linear-gradient(175deg, #7e90b4 0%, #a9bccd 34%, #d3e5ea 66%, #e8f3f5 100%);

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(175deg, transparent 42%, rgba(14, 21, 26, 0.12) 70%, var(--bg) 99%);
    }
`

export const Floe = styled.div<{ $bottom: string; $opacity: number }>`
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

/* Hero children use fixed colors — the icy hero art doesn't change with theme */
export const HeroEyebrow = styled.div`
    font-size: 12px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #2e5560;
    margin-bottom: 22px;
    font-weight: 500;
`

export const HeroTitle = styled.h1`
    font-family: ${serif};
    font-size: clamp(42px, 7.4vw, 84px);
    line-height: 1.0;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #1d3a42;
`

export const HeroTagline = styled.p`
    font-family: ${serif};
    font-style: italic;
    font-size: clamp(19px, 2.4vw, 26px);
    color: #2e4a54;
    max-width: 38ch;
    margin-top: 26px;
    line-height: 1.4;
`

// ── Knowledge-action-gap stat bar ─────────────────────────────────────────────

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
    .num.gap { color: var(--glacier); }
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
    color: var(--glacier);
    margin-bottom: 26px;

    &::before { content: "❄"; color: var(--ink-mute); font-size: 11px; }
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
    font-size: clamp(23px, 3.2vw, 34px);
    line-height: 1.38;
    color: var(--quote-ink);
    border-left: 2px solid var(--aurora);
    padding: 4px 0 4px 28px;
    margin: 44px 0;
    max-width: 26ch;

    cite {
        display: block;
        font-style: normal;
        font-family: ${sans};
        font-size: 14px;
        color: var(--ink-mute);
        margin-top: 18px;
    }
`

// ── Three kinds of presence ───────────────────────────────────────────────────

export const Presences = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 44px 0;

    .presence {
        background: var(--card);
        border: 0.5px solid var(--line);
        border-radius: 14px;
        padding: 26px 22px;
        position: relative;
        overflow: hidden;
    }
    .kind { font-size: 11px; color: var(--aurora); letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 16px; font-weight: 500; }
    .presence h4 { font-family: ${serif}; font-size: 20px; font-weight: 500; color: var(--ink); margin-bottom: 10px; }
    .presence p { font-size: 14px; color: var(--ink-soft); margin: 0; line-height: 1.6; }

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

// ── Figures, video & two-up ───────────────────────────────────────────────────

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

export const TwoUp = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 44px 0;

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
        background: var(--glacier);
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
