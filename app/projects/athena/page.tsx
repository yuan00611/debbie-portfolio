"use client"

import Image from "next/image";
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
                <Badge className="mx-auto mb-4 bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">Fintech</Badge>
                <Badge className="mx-auto mb-4 bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Senior FE Lead</Badge>
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
                        <TabsList className="grid grid-cols-4 bg-transparent gap-2 h-auto p-0">
                            <TabsTrigger
                                value="2a"
                                className="
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
                        </TabsContent>
                        <TabsContent value="2d" className="mt-3 border border-border rounded-lg p-5">
                            <S.TabTitle>2D - Engineering quality</S.TabTitle>
                            <S.SummaryWrapper>
                                <S.SummaryContent>
                                  Why: As the platform grew in complexity, reliability became critical. Enterprise clients couldn&apos;t afford production bugs in a financial product.
                                </S.SummaryContent>
                            </S.SummaryWrapper>
                            <ul className="mt-4">
                                <S.HighLightList>Lowered production issues by ~80%</S.HighLightList>
                                <S.HighLightList>Increased unit test coverage to ~70% with Jest</S.HighLightList>
                                <S.HighLightList>Reduced QA regression time by ~50% per sprint</S.HighLightList>
                                <S.HighLightList>Established unified linting, folder structure, and code review guidelines</S.HighLightList>
                            </ul>
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