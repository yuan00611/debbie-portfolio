import { styled}  from 'styled-components';
import { theme } from './theme';

export const HomePageLayout = styled.div`
    padding: 72px 60px 80px;

    @media (max-width: ${ theme.breakpoints.md}) {
        padding: 72px 24px 48px;
    }
`

export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;

    @media (max-width: ${ theme.breakpoints.md}) {
        flex-direction: column;
        gap: 40px;
        align-items: center;
        padding-top: 24px;
    }
`

export const HeroTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 520px;
    gap: 12px;
`

export const HeroText = styled.h1`
    font-family: var(--font-gloock), Georgia, serif;
    font-size: clamp(40px, 5vw, 64px);
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: oklch(0.17 0.022 172);
    margin: 0;
`

export const HeroSubtext = styled.h2`
    font-family: var(--font-onest), system-ui, sans-serif;
    font-size: clamp(16px, 2vw, 20px);
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: oklch(0.73 0.12 172);
    margin: 0;
`

export const HeroContent = styled.p`
    font-family: var(--font-onest), system-ui, sans-serif;
    font-size: 18px;
    line-height: 1.65;
    color: oklch(0.42 0.022 172);
    max-width: 65ch;
    margin: 0;
`

export const FeatureWorkContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    gap: 0;
`

export const FeatureWorkTitleWrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 48px;
`

export const FeatureWorkTitle = styled.h3`
    font-size: 13px;
    font-family: var(--font-onest), system-ui, sans-serif;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: oklch(0.50 0.022 172);
`

export const FeatureWorkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
    padding: 48px 0;
    border-top: 1px solid oklch(0.88 0.015 172);

    @media (max-width: ${ theme.breakpoints.lg}) {
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
    }
`

export const FeatureWorkWrapperReverse = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
    padding: 48px 0;
    border-top: 1px solid oklch(0.88 0.015 172);

    @media (max-width: ${ theme.breakpoints.lg}) {
        flex-direction: column;
        align-items: flex-start;
        gap: 32px;
    }
`

export const FeatureWorkTextWrapper = styled.div`
    width: 360px;
    min-width: 280px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;

    @media (max-width: ${ theme.breakpoints.lg}) {
        width: 100%;
    }
`

export const FeatureWorkTextTitle = styled.h4`
    font-size: clamp(22px, 3vw, 30px);
    font-family: var(--font-gloock), Georgia, serif;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 1.15;
    color: oklch(0.17 0.022 172);
    margin: 0;
    padding: 0;
`

export const CaseBadgeWrapper = styled.div`
    margin-top: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
    width: fit-content;
`
