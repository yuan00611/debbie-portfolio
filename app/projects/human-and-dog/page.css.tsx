import { styled } from "styled-components";
import { theme } from '../../theme';

const serif = `var(--font-fraunces), "Songti SC", "Noto Serif TC", Georgia, serif`;
const sans = `var(--font-inter), "PingFang TC", system-ui, sans-serif`;

// ── Page root ─────────────────────────────────────────────────────────────────
// Industrial palette scoped to this page, following the site theme toggle:
// concrete daylight in light mode, warehouse night in dark mode — signal
// orange (the dog) + slate blue (the human) accents in both. Site tokens are
// remapped so Navigation and any shared chrome inherit the page palette.

export const PageRoot = styled.div`
    /* light — concrete daylight */
    --signal: #b5591f;
    --slate: #4e6478;
    --ink: #24272a;
    --ink-soft: #52585e;
    --ink-mute: #6e757c;
    --line: rgba(30, 34, 38, 0.12);
    --line-strong: rgba(30, 34, 38, 0.26);
    --bg: #f4f4f1;
    --bg-soft: #ebebe6;
    --page-card: #fbfbf9;
    --panel-tint: #ece2d4;
    --btn-hover: #8c3f10;

    html.dark & {
        /* dark — warehouse night */
        --signal: #e08a4d;
        --slate: #8fa3b8;
        --ink: #eceff1;
        --ink-soft: #a6adb4;
        --ink-mute: #6d747c;
        --line: rgba(255, 255, 255, 0.09);
        --line-strong: rgba(255, 255, 255, 0.18);
        --bg: #15171a;
        --bg-soft: #1b1e22;
        --page-card: #1f2327;
        --panel-tint: #232019;
        --btn-hover: #f0b183;
    }

    --background: var(--bg);
    --foreground: var(--ink);
    --card: var(--page-card);
    --muted-foreground: var(--ink-soft);
    --border: var(--line);
    --stroke-1: var(--line);
    --stroke-2: var(--line);
    --stroke-3: var(--line-strong);
    --brand-teal: var(--signal);

    background: var(--bg);
    color: var(--ink);
    min-height: 100vh;
    font-family: ${sans};
    font-size: 16px;
    line-height: 1.75;
    overflow-x: clip;
    transition: background-color 0.35s ease, color 0.35s ease;

    *::selection { background: var(--signal); color: var(--bg); }

    a:focus-visible {
        outline: 2px solid var(--signal);
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
// Fixed warehouse-night art in both themes; two doors — the human's side lit
// slate, the dog's side lit signal orange.

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
        radial-gradient(50% 60% at 82% 60%, rgba(224, 138, 77, 0.16), transparent 70%),
        radial-gradient(50% 60% at 16% 55%, rgba(143, 163, 184, 0.14), transparent 70%),
        linear-gradient(176deg, #23272c 0%, #1d2125 52%, #17191d 82%, var(--bg) 100%);

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(176deg, transparent 48%, rgba(21, 23, 26, 0.3) 76%, var(--bg) 99%);
    }
`

export const Doors = styled.div`
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

/* Hero children use fixed colors — the warehouse art doesn't change with theme */
export const HeroEyebrow = styled.div`
    font-size: 12px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #e08a4d;
    margin-bottom: 22px;
    font-weight: 500;
`

export const HeroTitle = styled.h1`
    font-family: ${serif};
    font-size: clamp(42px, 7.4vw, 84px);
    line-height: 1.0;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #eceff1;
`

export const HeroTagline = styled.p`
    font-family: ${serif};
    font-style: italic;
    font-size: clamp(19px, 2.4vw, 26px);
    color: #b9bfc6;
    max-width: 40ch;
    margin-top: 26px;
    line-height: 1.4;
`

// ── Honor stat bar ────────────────────────────────────────────────────────────

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
    .num.hl { color: var(--signal); }
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
    color: var(--signal);
    margin-bottom: 26px;

    &::before { content: "◧"; color: var(--ink-mute); font-size: 11px; }
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
    border-left: 2px solid var(--signal);
    padding: 4px 0 4px 28px;
    margin: 44px 0;
    max-width: 28ch;
`

// ── The unequal loop ──────────────────────────────────────────────────────────

export const Loop = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 44px 0;

    .step {
        background: var(--card);
        border: 0.5px solid var(--line);
        border-radius: 14px;
        padding: 26px 22px;
        position: relative;
        overflow: hidden;
    }
    .who { font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 16px; font-weight: 500; }
    .who.dog { color: var(--signal); }
    .who.human { color: var(--slate); }
    .who.both { color: var(--ink-mute); }
    .step h4 { font-family: ${serif}; font-size: 20px; font-weight: 500; color: var(--ink); margin-bottom: 10px; }
    .step p { font-size: 14px; color: var(--ink-soft); margin: 0; line-height: 1.6; }

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

// ── Honor block ───────────────────────────────────────────────────────────────

export const Honor = styled.div`
    display: grid;
    grid-template-columns: 88px 1fr;
    gap: 26px;
    align-items: start;
    background: var(--card);
    border: 0.5px solid var(--line);
    border-left: 2px solid var(--signal);
    border-radius: 0 14px 14px 0;
    padding: 30px 32px;
    margin: 44px 0;

    .icon {
        font-family: ${serif};
        font-size: 46px;
        color: var(--signal);
        text-align: center;
        line-height: 1;
    }
    .icon small {
        display: block;
        font-size: 10px;
        letter-spacing: 0.14em;
        color: var(--ink-mute);
        margin-top: 10px;
        text-transform: uppercase;
    }
    h3 {
        font-family: ${serif};
        font-weight: 500;
        font-size: 24px;
        color: var(--ink);
        margin: 0 0 10px;
    }
    p { font-size: 15px; margin: 0; color: var(--ink-soft); }
    a { color: var(--signal); text-decoration: none; border-bottom: 1px solid var(--line-strong); }

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
        gap: 16px;
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
        background: var(--signal);
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
