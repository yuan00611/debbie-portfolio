import { styled } from "styled-components";
import { theme } from '../../theme';

/* Athena brand accent: blue-purple. Works on both light and dark bg. */
const ATHENA_ACCENT = 'oklch(0.58 0.17 264)';
const ATHENA_ACCENT_DARK = 'oklch(0.78 0.17 264)'; /* 4.93:1 on Athena surface, 5.01:1 on page bg */

export const PageWrapper = styled.div`
    padding: 80px 60px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--background);
    transition: background-color 0.35s ease;

    @media (max-width: ${ theme.breakpoints.md}) {
        padding: 80px 24px 60px;
    }
`

export const CaseTitle = styled.h1`
    font-family: var(--font-fraunces), Georgia, serif;
    font-size: clamp(32px, 4.5vw, 52px);
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.1;
    text-align: center;
    color: var(--foreground);
`

export const CaseOverview = styled.p`
    max-width: 680px;
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 17px;
    line-height: 1.65;
    color: var(--muted-foreground);
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
    border: 1px solid var(--border);
    background-color: var(--card);
    padding: 16px 24px;
    width: 220px;
    transition: background-color 0.35s ease, border-color 0.35s ease;
`

export const ImpactTitle = styled.h2`
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--muted-foreground);
`

export const ImpactText = styled.p`
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--foreground);
    line-height: 1.2;
`

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

export const SectionSubTitle = styled.h2`
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: ${ATHENA_ACCENT};
    text-transform: uppercase;
    letter-spacing: 0.1em;

    html.dark & {
        color: ${ATHENA_ACCENT_DARK};
    }
`

export const SectionTitle = styled.h2`
    font-family: var(--font-fraunces), Georgia, serif;
    font-size: clamp(22px, 3vw, 30px);
    font-weight: 400;
    letter-spacing: -0.01em;
    color: var(--foreground);
`

export const SectionTitle2 = styled.h3`
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: var(--foreground);
`

/* Blue-tinted summary block */
export const SummaryWrapper = styled.div`
    margin-top: 20px;
    background-color: oklch(0.93 0.06 255);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 20px 24px;
    gap: 8px;
    transition: background-color 0.35s ease;

    html.dark & {
        background-color: oklch(0.26 0.06 255);
    }
`

export const SummaryContent = styled.p`
    font-family: var(--font-inter), system-ui, sans-serif;
    color: var(--foreground);
    font-size: 15px;
    line-height: 1.7;
    margin: 0;
`

export const HighlightTitle = styled.p`
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: var(--foreground);
    margin-top: 16px;
`

export const HighLightList = styled.li`
    font-family: var(--font-inter), system-ui, sans-serif;
    list-style-type: disc;
    margin-left: 20px;
    color: var(--muted-foreground);
    padding-top: 4px;
    padding-bottom: 4px;
    font-size: 15px;
    line-height: 1.6;
`

export const SectionText = styled.p`
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 15px;
    line-height: 1.7;
    color: var(--muted-foreground);
`

export const TabTitle = styled.p`
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: var(--foreground);
`

export const MetricsContainer = styled.div`
    margin-top: 20px;
    max-width: 900px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
`

/* Blue-tinted metric cards */
export const MetricWrapper = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    background-color: oklch(0.93 0.06 255);
    padding: 20px 28px;
    transition: background-color 0.35s ease;

    html.dark & {
        background-color: oklch(0.26 0.06 255);
    }

    @media (max-width: ${ theme.breakpoints.sm}) {
        width: 100%;
    }
`

export const MetricsNumber = styled.p`
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: ${ATHENA_ACCENT};
    line-height: 1.2;

    html.dark & {
        color: ${ATHENA_ACCENT_DARK};
    }
`

export const MetricsText = styled.p`
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: var(--muted-foreground);
    text-align: center;
`

export const TradeoffTitle = styled.p`
    font-family: var(--font-inter), system-ui, sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: var(--muted-foreground);
    margin-bottom: 8px;
    margin-top: 16px;
`

export const TradeoffItems = styled.p`
    font-family: var(--font-inter), system-ui, sans-serif;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: var(--muted-foreground);
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
        if (props.type === 'why')      return 'var(--tradeoff-why-bg)';
        if (props.type === 'tradeoff') return 'var(--tradeoff-trade-bg)';
        if (props.type === 'mitigate') return 'var(--tradeoff-mitigate-bg)';
        return 'var(--secondary)';
    }};
    transition: background-color 0.35s ease;

    @media (max-width: ${ theme.breakpoints.md}) {
        width: 100%;
    }
`

export const TradeOffTitle = styled.p<{type: 'why' | 'tradeoff' | 'mitigate'}>`
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${props => {
        if (props.type === 'why')      return 'var(--tradeoff-why-text)';
        if (props.type === 'tradeoff') return 'var(--tradeoff-trade-text)';
        if (props.type === 'mitigate') return 'var(--tradeoff-mitigate-text)';
        return 'var(--foreground)';
    }};
`

export const TradeOffText = styled.p`
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 14px;
    line-height: 1.65;
    color: var(--muted-foreground);
`

export const HomeFooter = styled.footer`
  border-top: 1px solid var(--border);
  padding: 48px;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 13px;
  color: var(--muted-foreground);

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid var(--border);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: 12px;
    padding: 32px 24px;
  }
`;
