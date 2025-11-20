import { styled } from "styled-components";
import { theme } from '../../theme';

export const PageWrapper = styled.div`
    padding: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6f9ff;
`

export const CaseTitle = styled.h1`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 40px;
    font-weight: 500;

`

export const ImpactContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;

`

export const ImpactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-radius: 20px;
    border: 1px solid #ddd;
    background-color: white;
    padding: 12px 24px;
    width: 180px;
`

export const ImpactTitle = styled.h2`
    /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
    font-size: 14px;
    font-weight: 500;
    color: #555;
`

export const ImpactText = styled.p`
    font-size: 20px;
    font-weight: 600;
`

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 60px;
    padding-left: 40px;
    padding-right: 40px;
    max-width: 800px;

    @media (max-width: ${ theme.breakpoints.md}) {
        padding: 20px;
    }
`

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

`

export const SectionSubTitle = styled.h2`
    font-size: 14px;
    font-weight: 600;
    color: #407efc;
    text-transform: uppercase;
`

export const SectionTitle = styled.h2`
    font-size: 28px;
    font-weight: 600;
`

export const SectionTitle2 = styled.h3`
    font-size: 18px;
    font-weight: 500;
`

export const HighlightTitle = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin-top: 12px;

`

export const HighLightList = styled.li`
    list-style-type: circle;
    margin-left: 20px;

`

export const SectionText = styled.p`
    font-size: 16px;
    color: #555;
`

export const MetricsContainer = styled.div`
    margin-top: 20px;
    max-width: 800px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;

`

export const MetricWrapper = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    background-color: #d5e1f9;
    padding: 12px 28px;
`

export const MetricsNumber = styled.p`
    font-size: 28px;
    font-weight: 700;
    color: #407efc;
`

export const MetricsText = styled.p`
    font-size: 14px;
    font-weight: 400;
`