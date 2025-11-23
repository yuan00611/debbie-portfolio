import { styled}  from 'styled-components';
import { theme } from '../theme';

export const AboutPageLayout = styled.div`
    padding: 60px 120px;
    display: flex;
    flex-direction: column;

    @media (max-width: ${ theme.breakpoints.sm}) {
        padding: 20px;
        align-items: center;
    }
`

export const AboutTitle = styled.h1`
    font-size: 40px;
    font-weight: 600;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const AboutDeco = styled.div`
    width: 50px;
    height: 4px;
    background-color: #3DCAAE;

`

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 48px;

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
    gap: 40px;

     @media (max-width: ${ theme.breakpoints.md}) {
        flex-direction: column;
    }
`

export const SectionTitle = styled.h2`
    font-size: 22px;
    font-weight: 500;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const SectionSubtitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-bottom: -16px;
    margin-top: 4px;
`

export const SectionTextWrapper = styled.div`
    padding-left: 20px;
    border-left: 2px solid #9ddccf;
    max-width: 760px;
`

export const SectionText = styled.p`
    font-size: 16px;
    margin: 0;
    padding: 0;
    color: #333;
`

export const IconWrapper = styled.div`
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    border-radius: 30px;
    background-color: #e8faf6;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const SectionItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

`

export const SectionItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`

export const SectionItemContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const SectionItemContent1 = styled.h3`
    font-size: 16px;
    margin: 0;
    padding: 0;
`

export const SectionItemContent2 = styled.p`
    font-size: 16px;
    color: #888;
`

export const PublicationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const PublicationLinkWrapper = styled.div`
    display: flex;
    gap: 8px;
`

export const PublicationLink = styled.a`
    display: flex;
    gap: 4px;
    align-items: center;
    color: #3DCAAE;
    font-weight: 500;
`