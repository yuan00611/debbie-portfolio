"use client"

import { Navigation } from "@/components/common/navigation/navigation";
import { Badge } from "@/components/ui/badge";

import { BeforeAfterAPI } from "./components/api-design";
import { ArchDiagram } from "./components/arch-diagram";
import { CreditCardGrid } from "./components/card-api-grid";
import { CodeSplittingCards } from "./components/code-split";
import { Scorecard } from "./components/score-card";
import { StreamingFlow } from "./components/streaming-step";
import * as S from '../shared.css';



export default function AthenaAI() {
    const mainColor = '#407efc';
    const bgColor = '#f6f9ff';
    const metricBgColor = '#407efc1A';

    return (
        <>
            <Navigation />
            <S.PageWrapper $bgColor={bgColor}>
                <S.CaseBadgeWrapper>
                    <Badge variant="outline" className="mx-auto mb-4">Deep Dive</Badge>
                    <Badge variant="outline" className="mx-auto mb-4">System Design</Badge>
                    <Badge className="mx-auto mb-4 bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">AI Chat</Badge>
                </S.CaseBadgeWrapper>
                <S.CaseTitle>AI Chat — System Design Deep Dive</S.CaseTitle>
                <S.CaseOverview>A breakdown of the two-panel chat architecture, HTTP streaming pipeline, display registry pattern, and key engineering trade-offs</S.CaseOverview>

                <S.SectionContainer>
                    <S.SectionWrapper>
                        <S.SectionSubTitle $mainColor={mainColor}>01 — Architecture</S.SectionSubTitle>
                        <S.SectionTitle>Two-panel layout with independent error boundaries</S.SectionTitle>
                        <S.SectionText>The chat UI is split into two independently-bounded panels — the left handles conversation, the right handles dynamic data visualization and explanation. If one panel crashes, the other continues rendering.</S.SectionText>
                        <ArchDiagram />

                    </S.SectionWrapper>


                    <S.SectionWrapper>
                        <S.SectionSubTitle $mainColor={mainColor}>02 — Streaming data flow</S.SectionSubTitle>
                        <S.SectionTitle>From user input to incremental response</S.SectionTitle>
                        <S.SectionText>The streaming pipeline has four distinct phases — each updating the TanStack Query cache to trigger real-time UI updates across both panels.</S.SectionText>
                        <StreamingFlow />


                    </S.SectionWrapper>

                    <S.SectionWrapper>
                        <S.SectionSubTitle $mainColor={mainColor}>03 — API Redesign</S.SectionSubTitle>
                        <S.SectionTitle>From monolithic responses to per-card endpoints</S.SectionTitle>
                        <S.SectionText>During the chat migration, I collaborated with backend engineers to redesign the API from a monolithic page response to fine-grained, per-card endpoints — each mapped to a specific financial metric.</S.SectionText>
                        <S.SummaryWrapper $bgColor={metricBgColor} className="mb-4">
                            <S.SummaryContent $mainColor={mainColor}>
                                Decision: Each financial metric gets its own endpoint under /api/card/&#123;metric&#125;/&#123;household_id&#125; — enabling independent loading, caching, and error handling per card. A failing credit utilization API won&apos;t prevent the credit score from rendering.
                            </S.SummaryContent>
                        </S.SummaryWrapper>
                        <BeforeAfterAPI />
                        <CreditCardGrid />
                        <S.SummaryWrapper $bgColor={metricBgColor} className="mb-4">
                            <S.SummaryContent $mainColor={mainColor}>
                                Why this granularity makes sense <hr />
                                Each credit metric has a different data source, update frequency, and computational cost on the backend. Splitting them means the backend can optimize each independently — and the frontend can show fast metrics (score) while slow ones (history) are still loading.
                            </S.SummaryContent>
                        </S.SummaryWrapper>
                        <S.HighlightTitle>Frontend × Backend API contract</S.HighlightTitle>
                        <ul>
                            <S.HighLightList>Defined consistent URL pattern: /api/card/&#123;metric&#125;/&#123;household_id&#125; across all domains</S.HighLightList>
                            <S.HighLightList>Specified response schema per card — what fields the frontend needed to render each display component</S.HighLightList>
                            <S.HighLightList>Agreed on consistent error shape so all card ErrorBoundaries could handle failures uniformly</S.HighLightList>
                            <S.HighLightList>Used household_id as the universal path parameter — matching the backend&apos;s aggregate root design</S.HighLightList>
                        </ul>

                        <S.TradeoffTitle> Trade Off </S.TradeoffTitle>
                        <S.TradeOffContainer>
                            <S.TradeOffWrapper type="why">
                                <S.TradeOffTitle type="why">Why fine-grained</S.TradeOffTitle>
                                <S.TradeOffText> Credit metrics have different latency — score loads fast, history is slower. Splitting lets fast cards render immediately without waiting for slow ones. </S.TradeOffText>
                            </S.TradeOffWrapper>
                            <S.TradeOffWrapper type='tradeoff'>
                                <S.TradeOffTitle type="tradeoff">Cost</S.TradeOffTitle>
                                <S.TradeOffText> 7 parallel requests instead of 1. More API contract coordination with backend. Each new card requires defining a new endpoint and response schema. </S.TradeOffText>
                            </S.TradeOffWrapper>
                            <S.TradeOffWrapper type="mitigate">
                                <S.TradeOffTitle type="mitigate">Why worth it</S.TradeOffTitle>
                                <S.TradeOffText> TanStack Query deduplicates and caches each independently. Resilience gain is significant — one Experian API timeout no longer breaks the entire credit page. </S.TradeOffText>
                            </S.TradeOffWrapper>
                        </S.TradeOffContainer>

                    </S.SectionWrapper>

                    <S.SectionWrapper>
                        <S.SectionSubTitle $mainColor={mainColor}>04 — Display panel code splitting</S.SectionSubTitle>
                        <S.SectionTitle>24 lazy components, loaded on demand</S.SectionTitle>
                        <S.SectionText>Every display component is lazy-loaded via a registry pattern. The server response&apos;s display_item.id maps to the correct component — keeping the initial bundle small and only loading what&apos;s needed per conversation.</S.SectionText>
                        <CodeSplittingCards />
                    </S.SectionWrapper>

                    <S.SectionWrapper>
                        <S.SectionSubTitle $mainColor={mainColor}>05 — Key trade-offs</S.SectionSubTitle>
                        <S.SectionTitle>Engineering decisions that shaped the system</S.SectionTitle>
                        <S.TradeoffTitle> Trade Off 01 - Streaming transport </S.TradeoffTitle>
                        <S.TradeoffItems> <Badge className="bg-blue-100 text-blue-700"> HTTP Streaming (fetch) </Badge> vs WebSocket vs SSE</S.TradeoffItems>
                        <S.TradeOffContainer>
                            <S.TradeOffWrapper type="why">
                                <S.TradeOffTitle type="why">Why fetch streaming</S.TradeOffTitle>
                                <S.TradeOffText> Chat is request-response — no server push needed. One fetch per conversation, no infra changes, works naturally with load balancers. </S.TradeOffText>
                            </S.TradeOffWrapper>
                            <S.TradeOffWrapper type='tradeoff'>
                                <S.TradeOffTitle type="tradeoff">Trade-offs</S.TradeOffTitle>
                                <S.TradeOffText> No automatic reconnection. If the stream drops mid-response, users need to re-ask. No server-initiated push capability. </S.TradeOffText>
                            </S.TradeOffWrapper>
                            <S.TradeOffWrapper type="mitigate">
                                <S.TradeOffTitle type="mitigate">Why it&apos;s fine</S.TradeOffTitle>
                                <S.TradeOffText> LLM responses don&apos;t support resume — a full retry is the only sensible recovery anyway. WebSocket would be overkill for one-way streaming. </S.TradeOffText>
                            </S.TradeOffWrapper>
                        </S.TradeOffContainer>

                        <S.TradeoffTitle> Trade Off 02 - TanStack Query cache as streaming buffer </S.TradeoffTitle>
                        <S.TradeoffItems> <Badge className="bg-blue-100 text-blue-700"> RQ cache for everything </Badge> vs Separate streaming state</S.TradeoffItems>
                        <S.TradeOffContainer>
                            <S.TradeOffWrapper type="why">
                                <S.TradeOffTitle type="why">Why one store</S.TradeOffTitle>
                                <S.TradeOffText> Any component subscribed to the queryKey auto-updates. No need to sync between a streaming buffer and server cache. </S.TradeOffText>
                            </S.TradeOffWrapper>
                            <S.TradeOffWrapper type='tradeoff'>
                                <S.TradeOffTitle type="tradeoff">Trade-offs</S.TradeOffTitle>
                                <S.TradeOffText> query.setData() bypasses the fetch lifecycle. Debugging is harder — hard to tell if data came from the API or was written directly. </S.TradeOffText>
                            </S.TradeOffWrapper>
                            <S.TradeOffWrapper type="mitigate">
                                <S.TradeOffTitle type="mitigate">Mitigation</S.TradeOffTitle>
                                <S.TradeOffText> Clear code comments marking streaming-specific setData calls. Acceptable complexity for the simplicity gained. </S.TradeOffText>
                            </S.TradeOffWrapper>
                        </S.TradeOffContainer>

                        <S.TradeoffTitle> Trade Off 03 - Per-token cache updates </S.TradeoffTitle>
                        <S.TradeoffItems> <Badge className="bg-blue-100 text-blue-700"> setData on every token </Badge> vs rAF-batched updates</S.TradeoffItems>
                        <S.TradeOffContainer>
                            <S.TradeOffWrapper type="why">
                                <S.TradeOffTitle type="why">Why per-token</S.TradeOffTitle>
                                <S.TradeOffText> Zero-delay typewriter effect. React 18 automatic batching already reduces re-render overhead in practice. </S.TradeOffText>
                            </S.TradeOffWrapper>
                            <S.TradeOffWrapper type='tradeoff'>
                                <S.TradeOffTitle type="tradeoff">Trade-offs</S.TradeOffTitle>
                                <S.TradeOffText> 200 tokens = 200 cache updates. Long responses could cause dropped frames on low-end devices. </S.TradeOffText>
                            </S.TradeOffWrapper>
                            <S.TradeOffWrapper type="mitigate">
                                <S.TradeOffTitle type="mitigate">If needed</S.TradeOffTitle>
                                <S.TradeOffText> Add requestAnimationFrame batching — buffer tokens for 16ms then flush. Only worth it if profiling shows actual frame drops. </S.TradeOffText>
                            </S.TradeOffWrapper>
                        </S.TradeOffContainer>

                    </S.SectionWrapper>

                    <S.SectionWrapper>
                        <S.SectionSubTitle $mainColor={mainColor}>06 — Decision scorecard</S.SectionSubTitle>
                        <S.SectionTitle>Summary of key architectural choices</S.SectionTitle>
                        <Scorecard />

                    </S.SectionWrapper>


                </S.SectionContainer>
            
            
            </S.PageWrapper>
        </>
    )
}