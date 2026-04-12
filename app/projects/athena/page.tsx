"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/common/navigation/navigation";
import { ImageLightbox } from "@/components/common/image-lightbox/image-lightbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import * as S from './page.css';

export default function Athena(){

    return(<>
        <Navigation />
        <S.PageWrapper>
            <S.CaseBadgeWrapper>
                <Badge variant="outline" className="mx-auto mb-4">Startup</Badge>
                <Badge variant="outline" className="mx-auto mb-4">From 0 to 1</Badge>
                <Badge className="mx-auto mb-4" style={{backgroundColor:"oklch(0.92 0.04 165)",color:"oklch(0.32 0.09 165)",border:"none"}}>Fintech</Badge>
                <Badge className="mx-auto mb-4" style={{backgroundColor:"oklch(0.93 0.06 255)",color:"oklch(0.42 0.15 256)",border:"none"}}>Senior FE Lead</Badge>
            </S.CaseBadgeWrapper>
            <S.CaseTitle>Athena Advisory - Agentic AI Financial Platform</S.CaseTitle>
            <S.CaseOverview>Building a $4B+ AUM fintech platform from 0 to 1 — design systems, data visualization, and AI-driven product transformation.</S.CaseOverview>
            <S.ImpactContainer>
                <S.ImpactWrapper>
                    <S.ImpactText>$4B+</S.ImpactText>
                    <S.ImpactTitle>AUM</S.ImpactTitle>
                </S.ImpactWrapper>
                 <S.ImpactWrapper>
                    <S.ImpactText>50K+</S.ImpactText>
                    <S.ImpactTitle>Active Users</S.ImpactTitle>
                </S.ImpactWrapper>
                <S.ImpactWrapper>
                    <S.ImpactText>~75%</S.ImpactText>
                    <S.ImpactTitle>Faster UI build time</S.ImpactTitle>
                </S.ImpactWrapper>
                <S.ImpactWrapper>
                    <S.ImpactText>3-4</S.ImpactText>
                    <S.ImpactTitle>Enterprise clients signed</S.ImpactTitle>
                </S.ImpactWrapper>
            </S.ImpactContainer>
            <Image
              src="/Athena.png"
              alt="Athena portfolio image"
              width={600}
              height={600}
              priority
            />

            <S.SectionContainer>
                <S.SectionWrapper>
                    <S.SectionSubTitle>01 - Problem Discovery</S.SectionSubTitle>
                    <S.SectionTitle>How might we persuade people to save more money?</S.SectionTitle>
                    <S.SectionText>
                        When I joined Athena, the product was an early-stage concept. There was no design system, no established patterns, and requirements were often unclear. My first challenge wasn&apos;t to build — it was to understand.
                    </S.SectionText>
                    <S.SectionText> 
                        Working closely with the founder and early stakeholders, I explored the core question: how do you design a financial product that actually changes user behavior? This shaped everything I built afterward.
                    </S.SectionText>
                    <S.SummaryWrapper>
                        <S.SummaryContent>
                            Decision: Early user research revealed that most financial dashboards overwhelm users with data. We decided to prioritize clarity and progressive disclosure over feature density — a principle that guided the entire design system.
                        </S.SummaryContent>
                    </S.SummaryWrapper>
                </S.SectionWrapper>

                 <S.SectionWrapper>
                    <S.SectionSubTitle>02 — System Building</S.SectionSubTitle>
                    <S.SectionTitle>Designing a foundation for scale</S.SectionTitle>
                    <S.SectionText>Before building features, I focused on building the right foundations — a design system and data visualization layer that would support the product for years.</S.SectionText>
                    <Tabs className="mt-4" defaultValue="2a">
                        <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-transparent gap-2 h-auto p-0">
                            <TabsTrigger
                                value="2a"
                                className="
                                    cursor-pointer
                                    flex flex-col items-start justify-start p-3 rounded-lg border border-border
                                    bg-background text-left h-[90px] 
                                    overflow-hidden
                                    data-[state=active]:border-blue-500
                                    data-[state=active]:border-2
                                    data-[state=active]:bg-background
                                    data-[state=inactive]:opacity-60
                                    whitespace-normal  

                                "
                            >
                                <span className="text-xs text-muted-foreground mb-1 block">2A</span>
                                <span className="text-sm font-medium block">Design system + white-label</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="2b"
                                className="
                                    cursor-pointer
                                    flex flex-col items-start justify-start p-3 rounded-lg border border-border
                                    bg-background text-left h-[90px] 
                                    overflow-hidden
                                    data-[state=active]:border-blue-500
                                    data-[state=active]:border-2
                                    data-[state=active]:bg-background
                                    data-[state=inactive]:opacity-60
                                    whitespace-normal  
                                "
                            >
                                <span className="text-xs text-muted-foreground mb-1 ">2B</span>
                                <span className="text-sm font-medium">Data Visualization</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="2c"
                                className="
                                    cursor-pointer
                                    flex flex-col items-start justify-start p-3 rounded-lg border border-border
                                    bg-background text-left h-[90px] 
                                    overflow-hidden
                                    data-[state=active]:border-blue-500
                                    data-[state=active]:border-2
                                    data-[state=active]:bg-background
                                    data-[state=inactive]:opacity-60
                                    whitespace-normal  
                                "
                            >
                                <span className="text-xs text-muted-foreground mb-1">2C</span>
                                <span className="text-sm font-medium">Core Features Shipped</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="2d"
                                className="
                                    cursor-pointer
                                    flex flex-col items-start justify-start p-3 rounded-lg border border-border
                                    bg-background text-left h-[90px] 
                                    overflow-hidden
                                    data-[state=active]:border-blue-500
                                    data-[state=active]:border-2
                                    data-[state=active]:bg-background
                                    data-[state=inactive]:opacity-60
                                    whitespace-normal  
                                "
                            >
                                <span className="text-xs text-muted-foreground mb-1">2D</span>
                                <span className="text-sm font-medium">Engineering quality</span>
                            </TabsTrigger>
                            
                        </TabsList>

                        <TabsContent value="2a" className="mt-3 border border-border rounded-lg p-5">
                            <S.TabTitle>2A - Design system + white-label architecture</S.TabTitle>
                            <S.SummaryWrapper>
                                <S.SummaryContent>
                                    Why: Multiple enterprise clients meant the UI needed to support different brand identities without duplicating code. I designed a white-label token system from the start.
                                </S.SummaryContent>
                            </S.SummaryWrapper>
                            <ul className="mt-4">
                                <S.HighLightList>Built modular component library with MUI — reducing redundancy across teams</S.HighLightList>
                                <S.HighLightList>Introduced Storybook documentation, enabling new engineers to contribute within 1 week</S.HighLightList>
                                <S.HighLightList>Cut new UI build time from ~2 weeks to 3–4 days (~75% faster)</S.HighLightList>
                            </ul>
                            <ImageLightbox
                                images={[
                                    { src: "/Athena-whitelabel.svg", alt: "White-label design", label: "White-label architecture" },
                                    { src: "/Athena-designsystem.png", alt: "Design system", label: "Design system" },
                                ]}
                            />
                            <S.TradeoffTitle> Trade Offs</S.TradeoffTitle>
                            <S.TradeoffItems> <Badge style={{backgroundColor:"oklch(0.93 0.04 230)",color:"oklch(0.38 0.12 240)",border:"none"}}> Token system </Badge> vs Per-client codebase + <Badge style={{backgroundColor:"oklch(0.93 0.04 230)",color:"oklch(0.38 0.12 240)",border:"none"}}> Styled-components </Badge> vs Tailwind</S.TradeoffItems>
                            <S.TradeOffContainer>
                                <S.TradeOffWrapper type="why">
                                    <S.TradeOffTitle type="why">Why we chose this</S.TradeOffTitle>
                                    <S.TradeOffText> Per-client codebases would cause features to diverge across 3–4 enterprise accounts shipping simultaneously. </S.TradeOffText>
                                </S.TradeOffWrapper>
                                <S.TradeOffWrapper type='tradeoff'>
                                    <S.TradeOffTitle type="tradeoff">Trade-offs</S.TradeOffTitle>
                                    <S.TradeOffText> Stricter component API design + styled-components runtime CSS-in-JS cost and React 19 compatibility risk. </S.TradeOffText>
                                </S.TradeOffWrapper>
                                <S.TradeOffWrapper type="mitigate">
                                    <S.TradeOffTitle type="mitigate">How we mitigated</S.TradeOffTitle>
                                    <S.TradeOffText> Storybook documentation gave engineers confidence to work within the system without breaking brand contracts. </S.TradeOffText>
                                </S.TradeOffWrapper>
                            </S.TradeOffContainer>
                        </TabsContent>
                        <TabsContent value="2b" className="mt-3 border border-border rounded-lg p-5">
                            <S.TabTitle>2B - Data Visualization Library</S.TabTitle>
                            <S.SummaryWrapper>
                                <S.SummaryContent>
                                    Why: Financial data is complex and often anxiety-inducing. I explored multiple approaches — including designs that were later removed — to find the right balance between information density and clarity.
                                </S.SummaryContent>
                            </S.SummaryWrapper>
                            <ul className="mt-4">
                                <S.HighLightList>Built interactive financial charts with Victory.js for dashboards and AI agent tools</S.HighLightList>
                                <S.HighLightList>Explored multiple visualization patterns before settling on progressive disclosure</S.HighLightList>
                                <S.HighLightList>Enabled real-time portfolio insights for 50K+ users</S.HighLightList>
                            </ul>
                            <ImageLightbox
                                images={[
                                    { src: "/Athena-dataviz1.svg", alt: "Athena Data visualization", label: "Data Visualization 01" },
                                    { src: "/Athena-dataviz2.svg", alt: "Athena Data visualization", label: "Data Visualization 02" },
                                ]}
                            />
                            <S.TradeoffTitle> Trade Offs</S.TradeoffTitle>
                            <S.TradeoffItems> <Badge style={{backgroundColor:"oklch(0.93 0.04 230)",color:"oklch(0.38 0.12 240)",border:"none"}}> Victory.js (SVG) </Badge> vs Canvas (Chart.js) vs D3.js</S.TradeoffItems>
                            <S.TradeOffContainer>
                                <S.TradeOffWrapper type="why">
                                    <S.TradeOffTitle type="why">Why SVG</S.TradeOffTitle>
                                    <S.TradeOffText> Declarative and React-friendly. Financial dashboards rarely exceed 1,000 data points — well within SVG&apos;s performance range.</S.TradeOffText>
                                </S.TradeOffWrapper>
                                <S.TradeOffWrapper type='tradeoff'>
                                    <S.TradeOffTitle type="tradeoff">Trade-offs</S.TradeOffTitle>
                                    <S.TradeOffText> SVG degrades with large datasets. Canvas would be necessary for real-time tick data or 10K+ data points. </S.TradeOffText>
                                </S.TradeOffWrapper>
                                <S.TradeOffWrapper type="mitigate">
                                    <S.TradeOffTitle type="mitigate">If we needed more</S.TradeOffTitle>
                                    <S.TradeOffText> Would migrate chart-heavy pages to Canvas or WebGL — but this threshold was never reached in production. </S.TradeOffText>
                                </S.TradeOffWrapper>
                            </S.TradeOffContainer>
                        </TabsContent>
                        <TabsContent value="2c" className="mt-3 border border-border rounded-lg p-5">
                            <S.TabTitle>2C - Core Financial Features Shipped</S.TabTitle>
                            <S.SummaryWrapper>
                                <S.SummaryContent>
                                  Why: With a stable design system in place, the team could ship features much faster — authentication, onboarding, dashboards, financial calculators, and more.
                                </S.SummaryContent>
                            </S.SummaryWrapper>
                            <ul className="mt-4">
                                <S.HighLightList>Authentication, onboarding, user profile management</S.HighLightList>
                                <S.HighLightList>Financial overview dashboards (debt, credit score, investments)</S.HighLightList>
                                <S.HighLightList>Retirement calculators and asset allocation tools</S.HighLightList>
                                <S.HighLightList>Mortgage, Account Opening, Increase contribution rate service</S.HighLightList>
                            </ul>
                            <ImageLightbox
                                images={[
                                    { src: "/Athena-features01.svg", alt: "Athena Features 01", label: "Features 01" },
                                    { src: "/Athena-features02.png", alt: "Athena Features 02", label: "Features 02" },
                                ]}
                            />
                            <S.TradeoffTitle> Trade Offs</S.TradeoffTitle>
                            <S.TradeoffItems> <Badge style={{backgroundColor:"oklch(0.93 0.04 230)",color:"oklch(0.38 0.12 240)",border:"none"}}> TanStack Query + Redux </Badge> vs Redux only</S.TradeoffItems>
                            <S.TradeOffContainer>
                                <S.TradeOffWrapper type="why">
                                    <S.TradeOffTitle type="why">Why two systems</S.TradeOffTitle>
                                    <S.TradeOffText> Redux alone required manual loading/error state management for every API call — creating inconsistent patterns across features. </S.TradeOffText>
                                </S.TradeOffWrapper>
                                <S.TradeOffWrapper type='tradeoff'>
                                    <S.TradeOffTitle type="tradeoff">Trade-offs</S.TradeOffTitle>
                                    <S.TradeOffText> Two coexisting state systems new engineers need to learn, with a boundary that isn&apos;t always obvious. </S.TradeOffText>
                                </S.TradeOffWrapper>
                                <S.TradeOffWrapper type="mitigate">
                                    <S.TradeOffTitle type="mitigate">How we mitigated</S.TradeOffTitle>
                                    <S.TradeOffText> Clear rule: RQ owns anything from the API, Redux owns ephemeral client-side state only (form drafts, UI flows). </S.TradeOffText>
                                </S.TradeOffWrapper>
                            </S.TradeOffContainer>

                        </TabsContent>
                        <TabsContent value="2d" className="mt-3 border border-border rounded-lg p-5">
                            <S.TabTitle>2D - Engineering quality</S.TabTitle>
                            <S.SummaryWrapper>
                                <S.SummaryContent>
                                  Why: As the platform grew in complexity, reliability became critical. Enterprise clients couldn&apos;t afford production bugs in a financial product.
                                </S.SummaryContent>
                            </S.SummaryWrapper>
                            <S.SectionText className="mt-4 mx-2">
                                As the platform grew in complexity and onboarded enterprise clients, 
                                reliability became non-negotiable. I shifted focus from shipping new 
                                features to hardening the foundation — establishing testing practices, 
                                standardizing code quality, and making the system more maintainable 
                                for the whole team.
                            </S.SectionText>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                                <div className="border border-border rounded-lg p-4">
                                    <div className="text-2xl font-medium">~70%</div>
                                    <div className="text-sm text-muted-foreground mt-1">Unit test coverage with Jest</div>
                                </div>
                                <div className="border border-border rounded-lg p-4">
                                    <div className="text-2xl font-medium">~40%</div>
                                    <div className="text-sm text-muted-foreground mt-1">Reduction in QA regression time per sprint</div>
                                </div>
                                <div className="border border-border rounded-lg p-4">
                                    <div className="text-2xl font-medium">~80%</div>
                                    <div className="text-sm text-muted-foreground mt-1">Fewer release-related production issues</div>
                                </div>
                            </div>
                            <S.TradeoffTitle> Trade Offs</S.TradeoffTitle>
                            <S.TradeoffItems> <Badge style={{backgroundColor:"oklch(0.93 0.04 230)",color:"oklch(0.38 0.12 240)",border:"none"}}> Unit tests (Jest ~70%) </Badge> Full E2E coverage</S.TradeoffItems>
                            <S.TradeOffContainer>
                                <S.TradeOffWrapper type="why">
                                    <S.TradeOffTitle type="why">Why unit first</S.TradeOffTitle>
                                    <S.TradeOffText> E2E tests broke constantly with UI changes and were too slow to maintain during rapid feature iteration. </S.TradeOffText>
                                </S.TradeOffWrapper>
                                <S.TradeOffWrapper type='tradeoff'>
                                    <S.TradeOffTitle type="tradeoff">Trade-offs</S.TradeOffTitle>
                                    <S.TradeOffText> Less confidence in full user flows. Some integration bugs only caught in QA rather than automated testing. </S.TradeOffText>
                                </S.TradeOffWrapper>
                                <S.TradeOffWrapper type="mitigate">
                                    <S.TradeOffTitle type="mitigate">How we mitigated</S.TradeOffTitle>
                                    <S.TradeOffText> Focused coverage on critical financial logic (calculators, form validation) where bugs carry the highest user impact. </S.TradeOffText>
                                </S.TradeOffWrapper>
                            </S.TradeOffContainer>
                        </TabsContent>
                    </Tabs>
                    
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle>03 -  Product Transformation </S.SectionSubTitle>
                    <S.SectionTitle>Migrating to an AI-driven, chat-first experience</S.SectionTitle>
                    <S.SectionText>
                        The biggest shift in the platform&apos;s history was moving from a multi-page dashboard to a unified AI chat interface. I led the end-to-end frontend display migration.
                    </S.SectionText>
                    
                    <S.SummaryWrapper>
                        <S.SummaryContent>
                           Decision: Rather than patching the legacy dashboard, I proposed a full architectural rebuild — a new modular message pipeline with two display panels that could handle AI actions, forms, financial insights, and workflow steps as composable UI templates.
                        </S.SummaryContent>
                    </S.SummaryWrapper>
                    <ImageLightbox
                        images={[
                            { src: "/Athena-dashboard.png", alt: "Legacy dashboard", label: "Before" },
                            { src: "/Athena-chat.png", alt: "AI chat interface", label: "After" },
                        ]}
                    />
                    <ul>
                        <S.HighLightList>Built new modular chat architecture replacing the legacy dashboard</S.HighLightList>
                        <S.HighLightList>Integrated agentic AI logic with personalized financial recommendations</S.HighLightList>
                        <S.HighLightList>Integrated existing user financial data into AI conversations seamlessly</S.HighLightList>
                        <S.HighLightList>Designed flexible UI templates handling multiple message types</S.HighLightList>
                    </ul>
                    <p className="text-lg mt-2 font-medium">Bridging AI capability and user behavior</p>
                    <S.SectionText>
                       Migrating to chat-first introduced a product risk: users unfamiliar with AI wouldn&apos;t know what to ask, leading to blank-input paralysis. We addressed this with two mechanisms:
                    </S.SectionText>
                    <ul>
                        <S.HighLightList><b>Quick Queries</b> — a curated question list covering each service area (debt, credit, investments, retirement), giving users a path in without requiring financial expertise</S.HighLightList>
                        <S.HighLightList><b>Personalized recommendations</b> — surfacing the most contextually relevant question based on each user&apos;s financial profile and roadmap data. A user with high debt-to-income ratio would see &quot;How can I reduce my monthly payments?&quot; rather than a generic list</S.HighLightList>
                    </ul>
                    <div className="flex justify-center">
                    <Link href="/projects/athena-ai" scroll={true}>
                        <Button className="mt-4" >Deep dive AI chat</Button>
                    </Link>
                    </div>
                </S.SectionWrapper>


                <S.SectionWrapper>
                    <S.SectionSubTitle>04 - Outcome & Impact</S.SectionSubTitle>
                    <S.SectionTitle>Enterprise-ready platform that closed deals</S.SectionTitle>
                    <S.MetricsContainer>
                        <S.MetricWrapper>
                            <S.MetricsNumber>~75%</S.MetricsNumber>
                            <S.MetricsText>Reduction in UI build time — from 2 weeks to 3–4 days </S.MetricsText>
                        </S.MetricWrapper>
                        <S.MetricWrapper>
                            <S.MetricsNumber>~80%</S.MetricsNumber>
                            <S.MetricsText>Fewer production issues after improving test coverage to 70%</S.MetricsText>
                        </S.MetricWrapper>
                        <S.MetricWrapper>
                            <S.MetricsNumber>3–4</S.MetricsNumber>
                            <S.MetricsText>Enterprise clients signed after demos and investor pitches</S.MetricsText>
                        </S.MetricWrapper>
                        <S.MetricWrapper>
                            <S.MetricsNumber>30%</S.MetricsNumber>
                            <S.MetricsText>Faster dashboard load time via TanStack Query migration</S.MetricsText>
                        </S.MetricWrapper>
                    </S.MetricsContainer>


                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle>05 - Reflection</S.SectionSubTitle>
                    <S.SectionText>
                        The most important lesson was knowing when not to build. Early on I wanted to solve every UI inconsistency immediately — but I learned to prioritize ruthlessly, focusing on the systems that would unblock the whole team rather than perfecting individual components.
                    </S.SectionText>
                    <S.SectionText>
                        Working in an ambiguous, fast-moving environment also taught me that clarity is a product in itself. Writing clear component APIs, documentation, and design decisions saved more time than any individual feature I shipped.
                    </S.SectionText>
                </S.SectionWrapper>
            </S.SectionContainer>
            
        </S.PageWrapper>
        </>
    )
}