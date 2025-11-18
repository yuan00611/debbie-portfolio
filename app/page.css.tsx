import { styled}  from 'styled-components';
import { theme } from './theme';

export const HomePageLayout = styled.div`
    padding: 60px;

`

export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    @media (max-width: ${ theme.breakpoints.md}) {
        padding: 20px;
        flex-direction: column;
        gap: 40px;
        align-items: center;
    }
`

export const HeroTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`

export const HeroText = styled.h1`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 40px;
`

export const HeroSubtext = styled.h2`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 24px;
    color: #3DCAAE;
`

export const HeroContent = styled.p`
    margin-top: 4px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    color: gray;
`

export const FeatureWorkContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const FeatureWorkTitleWrapper = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`

export const FeatureWorkTitle = styled.h3`
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const FeatureWorkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    @media (max-width: ${ theme.breakpoints.lg}) {
        padding: 20px;
        flex-direction: column;
        align-items: center;
    }
`

export const FeatureWorkWrapperReverse = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    @media (max-width: ${ theme.breakpoints.lg}) {
        padding: 20px;
        flex-direction: column-reverse;
        align-items: center;
    }
`

export const FeatureWorkTextWrapper = styled.div`
    width: 360px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: left;
    justify-content: center;
`

export const FeatureWorkTextTitle = styled.h4`
    font-size: 24px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
    padding: 0;

`