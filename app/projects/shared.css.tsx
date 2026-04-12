import { styled } from "styled-components";
import { theme } from '../theme';

//Whole page layout and background
export const PageWrapper = styled.div<{$bgColor?: string}>`
    padding: 80px 60px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.$bgColor || "oklch(0.985 0.006 172)"};

    @media (max-width: ${ theme.breakpoints.md}) {
        padding: 80px 24px 60px;
    }
`

// Case Title
export const CaseTitle = styled.h1`
    font-family: var(--font-gloock), Georgia, serif;
    font-size: clamp(32px, 4.5vw, 52px);
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.1;
    text-align: center;
    color: oklch(0.17 0.022 172);
`

export const CaseOverview = styled.p`
    max-width: 680px;
    font-family: var(--font-onest), system-ui, sans-serif;
    font-size: 17px;
    line-height: 1.65;
    color: oklch(0.44 0.022 172);
    text-align: center;
    margin-top: 16px;
    margin-bottom: 24px;
`

export const CaseBadgeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6px;
    justify-content: center;
    margin-top: 8px;
    flex-wrap: wrap;
`

// Small impact cards
export const ImpactContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    margin-top: 24px;
`

export const ImpactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-radius: 16px;
    border: 1px solid oklch(0.88 0.015 172);
    background-color: oklch(0.985 0.006 172);
    padding: 16px 24px;
    width: 220px;
`

export const ImpactTitle = styled.h2`
    font-family: var(--font-onest), system-ui, sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: oklch(0.50 0.022 172);
`

export const ImpactText = styled.p`
    font-family: var(--font-onest), system-ui, sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: oklch(0.17 0.022 172);
    line-height: 1.2;
`

// Different sections content
export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin-top: 56px;
    padding-left: 40px;
    padding-right: 40px;
    max-width: 960px;

    @media (max-width: ${ theme.breakpoints.md}) {
        padding: 0 4px;
    }
`

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const SectionSubTitle = styled.h2<{$mainColor?: string}>`
    font-family: var(--font-onest), system-ui, sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.$mainColor || "oklch(0.73 0.12 172)"};
    text-transform: uppercase;
    letter-spacing: 0.1em;
`

export const SectionTitle = styled.h2`
    font-family: var(--font-gloock), Georgia, serif;
    font-size: clamp(22px, 3vw, 30px);
    font-weight: 400;
    letter-spacing: -0.01em;
    color: oklch(0.17 0.022 172);
`

export const SectionTitle2 = styled.h3`
    font-family: var(--font-onest), system-ui, sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: oklch(0.22 0.022 172);
`

export const HighlightTitle = styled.p`
    font-family: var(--font-onest), system-ui, sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: oklch(0.22 0.022 172);
    margin-top: 16px;
`

export const HighLightList = styled.li`
    font-family: var(--font-onest), system-ui, sans-serif;
    list-style-type: disc;
    margin-left: 20px;
    color: oklch(0.35 0.022 172);
    padding-top: 4px;
    padding-bottom: 4px;
    font-size: 15px;
    line-height: 1.6;
`

export const SectionText = styled.p`
    font-family: var(--font-onest), system-ui, sans-serif;
    font-size: 15px;
    line-height: 1.7;
    color: oklch(0.35 0.022 172);
`

// Metric cards
export const MetricsContainer = styled.div`
    margin-top: 20px;
    max-width: 960px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
`

export const MetricWrapper = styled.div<{$bgColor?: string}>`
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    background-color: ${props => props.$bgColor || "oklch(0.93 0.035 172)"};
    padding: 20px 28px;

    @media (max-width: ${ theme.breakpoints.sm}) {
        width: 100%;
    }
`

export const MetricsNumber = styled.p<{$mainColor?: string}>`
    font-family: var(--font-onest), system-ui, sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: ${props => props.$mainColor || "oklch(0.73 0.12 172)"};
    line-height: 1.2;
`

export const MetricsText = styled.p`
    font-family: var(--font-onest), system-ui, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: oklch(0.40 0.022 172);
    text-align: center;
`

// Quote section — no border-left (banned); uses open-quote decoration instead
export const QuoteWrapper = styled.div<{$mainColor?: string}>`
    margin-top: 20px;
    background-color: oklch(0.975 0.01 172);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 24px 28px 20px;
    gap: 8px;
    position: relative;

    &::before {
        content: '"';
        font-family: var(--font-gloock), Georgia, serif;
        font-size: 56px;
        line-height: 0.75;
        color: ${props => props.$mainColor ? props.$mainColor + '55' : 'oklch(0.73 0.12 172 / 0.35)'};
        display: block;
        margin-bottom: 4px;
        user-select: none;
    }
`

export const QuoteContent = styled.blockquote`
    font-family: var(--font-onest), system-ui, sans-serif;
    color: oklch(0.28 0.022 172);
    font-size: 15px;
    line-height: 1.7;
    margin: 0;
`

export const QuoteName = styled.p`
    font-family: var(--font-onest), system-ui, sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: oklch(0.50 0.022 172);
    margin: 0;
`

// Summary / key insight section
export const SummaryWrapper = styled.div<{$bgColor?: string}>`
    margin-top: 20px;
    background-color: ${props => props.$bgColor || "oklch(0.93 0.035 172)"};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 20px 24px;
    gap: 8px;
`

export const SummaryContent = styled.p`
    font-family: var(--font-onest), system-ui, sans-serif;
    color: oklch(0.28 0.022 172);
    font-size: 15px;
    line-height: 1.7;
    margin: 0;
`

// Trade-off section
export const TradeoffTitle = styled.p`
    font-family: var(--font-onest), system-ui, sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: oklch(0.50 0.022 172);
    margin-bottom: 8px;
    margin-top: 16px;
`

export const TradeoffItems = styled.p`
    font-family: var(--font-onest), system-ui, sans-serif;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: oklch(0.35 0.022 172);
    line-height: 1.6;
`

export const TradeOffContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    gap: 12px;
    justify-content: space-between;

    @media (max-width: ${ theme.breakpoints.md}) {
        flex-direction: column;
    }
`

export const TradeOffWrapper = styled.div<{type: 'why' | 'tradeoff' | 'mitigate'}>`
    width: 32%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 12px;
    background-color: ${props => {
        if (props.type === 'why') return 'oklch(0.93 0.04 230)';
        if (props.type === 'tradeoff') return 'oklch(0.95 0.045 75)';
        if (props.type === 'mitigate') return 'oklch(0.93 0.04 148)';
        return 'oklch(0.93 0.015 172)';
    }};

    @media (max-width: ${ theme.breakpoints.md}) {
        width: 100%;
    }
`

export const TradeOffTitle = styled.p<{type: 'why' | 'tradeoff' | 'mitigate'}>`
    font-family: var(--font-onest), system-ui, sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${props => {
        if (props.type === 'why') return 'oklch(0.38 0.12 240)';
        if (props.type === 'tradeoff') return 'oklch(0.42 0.12 60)';
        if (props.type === 'mitigate') return 'oklch(0.32 0.10 148)';
        return 'oklch(0.25 0.022 172)';
    }};
`

export const TradeOffText = styled.p`
    font-family: var(--font-onest), system-ui, sans-serif;
    font-size: 14px;
    line-height: 1.65;
    color: oklch(0.35 0.022 172);
`

//Iframe
export const IframeContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;
