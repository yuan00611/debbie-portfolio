import { styled } from "styled-components";
import { theme } from '../../theme';

const serif = `var(--font-fraunces), "Songti SC", "Noto Serif TC", Georgia, serif`;
const sans = `var(--font-inter), "PingFang TC", system-ui, sans-serif`;

// ── Page root ─────────────────────────────────────────────────────────────────
// Museum palette scoped to this page, following the site theme toggle:
// gallery paper in light mode, dim exhibition hall in dark mode — straw amber
// (the feathers) + vitrine teal (the glass) accents in both. Site tokens are
// remapped so Navigation and any shared chrome inherit the page palette.

export const PageRoot = styled.div`
    /* light — gallery paper */
    --straw: #9b6b25;
    --vitrine: #2e8674;
    --ink: #2b2620;
    --ink-soft: #5c554a;
    --ink-mute: #776f61;
    --line: rgba(43, 38, 32, 0.12);
    --line-strong: rgba(43, 38, 32, 0.26);
    --bg: #f8f4ed;
    --bg-soft: #f0eade;
    --page-card: #fdfaf4;
    --panel-tint: #ede3cf;
    --btn-hover: #7a5115;

    html.dark & {
        /* dark — exhibition hall after hours */
        --straw: #d9a05b;
        --vitrine: #63bfae;
        --ink: #f0ece4;
        --ink-soft: #aca394;
        --ink-mute: #6f695e;
        --line: rgba(255, 255, 255, 0.09);
        --line-strong: rgba(255, 255, 255, 0.18);
        --bg: #17130e;
        --bg-soft: #1e1913;
        --page-card: #231d16;
        --panel-tint: #2a2013;
        --btn-hover: #ecc493;
    }

    --background: var(--bg);
    --foreground: var(--ink);
    --card: var(--page-card);
    --muted-foreground: var(--ink-soft);
    --border: var(--line);
    --stroke-1: var(--line);
    --stroke-2: var(--line);
    --stroke-3: var(--line-strong);
    --brand-teal: var(--straw);

    background: var(--bg);
    color: var(--ink);
    min-height: 100vh;
    font-family: ${sans};
    font-size: 16px;
    line-height: 1.75;
    overflow-x: clip;
    transition: background-color 0.35s ease, color 0.35s ease;

    *::selection { background: var(--straw); color: var(--bg); }

    a:focus-visible {
        outline: 2px solid var(--vitrine);
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
// Fixed after-hours exhibition art in both themes: a spotlight, a display
// case, and an AR reticle locked onto the egg.

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
        radial-gradient(34% 52% at 72% 34%, rgba(217, 160, 91, 0.22), transparent 70%),
        linear-gradient(176deg, #241d13 0%, #1e1810 50%, #191410 80%, var(--bg) 100%);

    &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(176deg, transparent 48%, rgba(23, 19, 14, 0.3) 76%, var(--bg) 99%);
    }
`

export const Vitrine = styled.div`
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

/* Hero children use fixed colors — the exhibition art doesn't change with theme */
export const HeroEyebrow = styled.div`
    font-size: 12px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #d9a05b;
    margin-bottom: 22px;
    font-weight: 500;
`

export const HeroTitle = styled.h1`
    font-family: ${serif};
    font-size: clamp(42px, 7.4vw, 84px);
    line-height: 1.0;
    font-weight: 500;
    letter-spacing: -0.01em;
    color: #f0ece4;
`

export const HeroTagline = styled.p`
    font-family: ${serif};
    font-style: italic;
    font-size: clamp(19px, 2.4vw, 26px);
    color: #c6bda9;
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
    color: var(--straw);
    margin-bottom: 26px;

    &::before { content: "⌖"; color: var(--vitrine); font-size: 12px; }
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
    border-left: 2px solid var(--vitrine);
    padding: 4px 0 4px 28px;
    margin: 44px 0;
    max-width: 28ch;
`

// ── Research-source cards ─────────────────────────────────────────────────────

export const Sources = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin: 44px 0;

    .source {
        background: var(--card);
        border: 0.5px solid var(--line);
        border-radius: 14px;
        padding: 26px 22px;
    }
    .kind { font-size: 11px; color: var(--vitrine); letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 16px; font-weight: 500; }
    .source h4 { font-family: ${serif}; font-size: 20px; font-weight: 500; color: var(--ink); margin-bottom: 10px; }
    .source p { font-size: 14px; color: var(--ink-soft); margin: 0; line-height: 1.6; }

    @media (max-width: ${theme.breakpoints.md}) {
        grid-template-columns: 1fr;
    }
`

// ── Figures ───────────────────────────────────────────────────────────────────

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

// ── Reflection panel ──────────────────────────────────────────────────────────

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
        background: var(--straw);
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
