import { styled } from "styled-components";
import { theme } from '../theme';

//Whole page layout and background
export const PageWrapper = styled.div<{$bgColor: string}>`
    padding: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.$bgColor || "#f6f9ff"};
`

// Case Title
export const CaseTitle = styled.h1`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 40px;
    font-weight: 500;

`

// Small impact cards
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
    width: 220px;
`

export const ImpactTitle = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #555;
`

export const ImpactText = styled.p`
    font-size: 20px;
    font-weight: 600;
`

// Different sections content
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

export const SectionSubTitle = styled.h2<{$mainColor: string}>`
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.$mainColor || "#407efc"};
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

// Metric cards
export const MetricsContainer = styled.div`
    margin-top: 20px;
    max-width: 800px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
`

export const MetricWrapper = styled.div<{$bgColor: string}>`
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    background-color: ${props => props.$bgColor || "#d5e1f9"}; 
    padding: 12px 28px;
`

export const MetricsNumber = styled.p<{$mainColor: string}>`
    font-size: 28px;
    font-weight: 700;
    color: ${props => props.$mainColor || "#407efc"};
`

export const MetricsText = styled.p`
    font-size: 14px;
    font-weight: 400;
`

// Quote section

export const QuoteWrapper = styled.div<{$mainColor: string}>`
    margin-top: 20px;
    background-color: white;
    border-radius: 0px 20px 20px 0px;
    border-left: 2px solid ${props => props.$mainColor || "#407efc"};
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 12px;
`

export const QuoteContent = styled.blockquote`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
    color: #444;
    font-style: italic;
     font-size: 18px;
`

export const QuoteName = styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
    font-size: 14px;

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