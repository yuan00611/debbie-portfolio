import { styled } from "styled-components";
import { theme } from '../../theme';

const serif = `var(--font-fraunces), "Songti SC", "Noto Serif TC", Georgia, serif`;
const sans = `var(--font-inter), "PingFang TC", system-ui, sans-serif`;

// ── Page root ─────────────────────────────────────────────────────────────────
// Van Gogh palette scoped to this page, following the site theme toggle:
// gallery canvas in light mode, starry night in dark mode — sunflower gold +
// rust accents in both (from the game's own logo). Site tokens are remapped so
// Navigation and any shared chrome rendered inside inherit the page palette.

export const PageRoot = styled.div`
    /* light — gallery canvas */
    --gold: #a87718;
    --rust: #b5452e;
    --ink: #2a2620;
    --ink-soft: #5b5548;
    --ink-mute: #766f60;
    --line: rgba(42, 38, 32, 0.12);
    --line-strong: rgba(42, 38, 32, 0.26);
    --bg: #f7f4ec;
    --bg-soft: #efeadd;
    --page-card: #fcfaf4;
    --panel-tint: #ece4d0;
    --btn-hover: #8a6212;

    html.dark & {
        /* dark — starry night */
        --gold: #e3b341;
        --rust: #d97a5a;
        --ink: #ecedf4;
        --ink-soft: #a4a9c0;
        --ink-mute: #666d8a;
        --line: rgba(255, 255, 255, 0.09);
        --line-strong: rgba(255, 255, 255, 0.18);
        --bg: #101426;
        --bg-soft: #161b30;
        --page-card: #1a2036;
        --panel-tint: #1d2138;
        --btn-hover: #e3b341;
    }

    --background: var(--bg);
    --foreground: var(--ink);
    --card: var(--page-card);
    --muted-foreground: var(--ink-soft);
    --border: var(--line);
    --stroke-1: var(--line);
    --stroke-2: var(--line);
    --stroke-3: var(--line-strong);
    --brand-teal: var(--gold);

    background: var(--bg);
    color: var(--ink);
    min-height: 100vh;
    font-family: ${sans};
    font-size: 16px;
    line-height: 1.75;
    overflow-x: clip;
    transition: background-color 0.35s ease, color 0.35s ease;

    *::selection { background: var(--gold); color: var(--bg); }

    a:focus-visible {
        outline: 2px solid var(--rust);
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
// Fixed starry-night art in both themes; fades into the active page background.

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
        radial-gradient(24% 30% at 80% 18%, rgba(227, 179, 65, 0.35), transparent 70%),
        radial-gradient(120% 90% at 30% 0%, rgba(58, 68, 120, 0.55), transparent 65%),
        linear-gradient(176deg, #1b2140 0%, #171c36 48%, #12162b 80%, var(--bg) 100%);

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(176deg, transparent 45%, rgba(16, 20, 38, 0.3) 75%, var(--bg) 99%);
    }
`

export const Swirls = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    opacity: 0.5;

    svg { width: 100%; height: 100%; }
`

export const HeroInner = styled(Wrap)`
    position: relative;
    z-index: 3;
    width: 100%;
`

/* Hero children use fixed colors — the starry-night art doesn't change with theme */
export const HeroEyebrow = styled.div`
    font-size: 12px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #e3b341;
    margin-bottom: 22px;
    font-weight: 500;
`

export const HeroTitle = styled.h1`
    font-family: ${serif};
    font-size: clamp(42px, 7.4vw, 84px);
    line-height: 1.0;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #eef0f8;
`

export const HeroZh = styled.div`
    font-family: ${serif};
    font-size: clamp(19px, 2.6vw, 27px);
    letter-spacing: 0.34em;
    color: #a9b0d6;
    margin-top: 16px;
    padding-left: 3px;
`

export const HeroTagline = styled.p`
    font-family: ${serif};
    font-style: italic;
    font-size: clamp(19px, 2.4vw, 26px);
    color: #c9cee6;
    max-width: 38ch;
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
    color: var(--gold);
    margin-bottom: 26px;

    &::before { content: "✶"; color: var(--ink-mute); font-size: 11px; }
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
    color: var(--ink);
    border-left: 2px solid var(--rust);
    padding: 4px 0 4px 28px;
    margin: 44px 0;
    max-width: 26ch;
`

// ── Source-material cards ─────────────────────────────────────────────────────

export const Sources = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 44px 0;

    .source {
        background: var(--card);
        border: 0.5px solid var(--line);
        border-radius: 14px;
        padding: 26px 22px;
    }
    .kind { font-size: 11px; color: var(--rust); letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 16px; font-weight: 500; }
    .source h4 { font-family: ${serif}; font-size: 20px; font-weight: 500; color: var(--ink); margin-bottom: 10px; }
    .source p { font-size: 14px; color: var(--ink-soft); margin: 0; line-height: 1.6; }

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
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
        background: var(--rust);
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
