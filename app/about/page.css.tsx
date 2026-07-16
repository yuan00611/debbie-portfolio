import { styled}  from 'styled-components';
import { theme } from '../theme';

export const AboutPageLayout = styled.div`
    padding: 96px 120px 96px;
    display: flex;
    flex-direction: column;
    background-color: var(--background);
    transition: background-color 0.35s ease;

    @media (max-width: ${ theme.breakpoints.md}) {
        padding: 80px 24px 64px;
    }
`

export const AboutTitle = styled.h1`
    font-size: clamp(40px, 5vw, 60px);
    font-weight: 400;
    font-family: var(--font-fraunces), Georgia, serif;
    letter-spacing: -0.02em;
    line-height: 1.1;
    color: var(--foreground);
    margin: 0 0 16px 0;
`

export const AboutDeco = styled.div`
    width: 40px;
    height: 3px;
    background-color: var(--brand-teal);
    border-radius: 2px;
`

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 56px;
`

export const SectionTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`

export const SummaryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 48px;

     @media (max-width: ${ theme.breakpoints.md}) {
        flex-direction: column;
        gap: 32px;
    }
`

export const SectionTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    font-family: var(--font-inter), system-ui, sans-serif;
    letter-spacing: -0.01em;
    color: var(--foreground);
`

export const SectionSubtitle = styled.h3`
    font-size: 13px;
    font-weight: 600;
    font-family: var(--font-inter), system-ui, sans-serif;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted-foreground);
    margin-bottom: -8px;
    margin-top: 16px;
`

export const SectionTextWrapper = styled.div`
    padding: 20px 24px;
    background-color: var(--muted);
    border-radius: 8px;
    max-width: 760px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: background-color 0.35s ease;
`

export const SectionText = styled.p`
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 16px;
    line-height: 1.7;
    margin: 0;
    padding: 0;
    color: var(--foreground);
`

export const IconWrapper = styled.div`
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    border-radius: 50%;
    background-color: var(--secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.35s ease;
`

export const SectionItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 760px;
`

export const SectionItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: flex-start;
`

export const SectionItemContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: 8px;
`

export const SectionItemContent1 = styled.h3`
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: var(--foreground);
    margin: 0;
    padding: 0;
`

export const SectionItemContent2 = styled.p`
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 14px;
    color: var(--muted-foreground);
    margin: 0;
`

export const PublicationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px 0;
    border-bottom: 1px solid var(--border);

    p {
        font-family: var(--font-inter), system-ui, sans-serif;
        font-size: 15px;
        line-height: 1.65;
        color: var(--foreground);
    }
`

export const PublicationLinkWrapper = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`

export const PublicationLink = styled.a`
    display: flex;
    gap: 4px;
    align-items: center;
    color: var(--brand-teal-dim);
    font-family: var(--font-inter), system-ui, sans-serif;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.15s ease;

    &:hover {
        color: var(--brand-teal);
    }
`

export const HomeFooter = styled.footer`
  padding: 48px;
  padding-top: 0px;
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
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
