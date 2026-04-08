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

export const CaseOverview = styled.p`
    max-width: 720px;
    font-size: 18px;
    color: #777;
    text-align: center;
    margin-top: 12px;
    margin-bottom: 24px;
`

export const CaseBadgeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    justify-content: center;
    margin-top: 8px;
    
     @media (max-width: ${ theme.breakpoints.sm}) {
        flex-wrap: wrap;
    }
`

// Small impact cards
export const ImpactContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
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
    font-size: 24px;
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
    max-width: 960px;

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
    color: #555;
`

export const SectionText = styled.p`
    font-size: 16px;
    color: #555;
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

export const MetricWrapper = styled.div<{$bgColor: string}>`
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    background-color: ${props => props.$bgColor || "#d5e1f9"}; 
    padding: 12px 28px;

    @media (max-width: ${ theme.breakpoints.sm}) {
        width: 100%;
    }
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

// Summary section
export const SummaryWrapper = styled.div<{$bgColor: string}>`
    margin-top: 20px;
    background-color: ${props => props.$bgColor || "#0672CB1A"};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 12px;
`

export const SummaryContent = styled.p<{$mainColor: string}>`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
    color: ${props => props.$mainColor || "#0672CB"};
    font-style: italic;
    font-size: 18px;
`

// Trade-off section
export const TradeoffTitle = styled.p`
    text-transform: uppercase;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
    margin-top: 12px;
`

export const TradeoffItems = styled.p`
    text-align: center;
    font-size: 14px;
    font-weight: 500; 
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
    gap: 12px;
    padding: 20px;
    border-radius: 12px;
    background-color: ${props => {
        if (props.type === 'why') return '#E6F1FB';
        if (props.type === 'tradeoff') return '#FAEEDA';
        if (props.type === 'mitigate') return '#dbfae7';
        return '#ddd';
    }};

    @media (max-width: ${ theme.breakpoints.md}) {
        width: 100%;
    }
`

export const TradeOffTitle = styled.p<{type: 'why' | 'tradeoff' | 'mitigate'}>`
    font-size: 16px;
    font-weight: 600;
    color: ${props => {
        if (props.type === 'why') return '#185FA5';
        if (props.type === 'tradeoff') return '#854F0B';
        if (props.type === 'mitigate') return '#3B6D11';
        return '#333';
    }};
`

export const TradeOffText = styled.p`
    font-size: 14px;
    color: #555;
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