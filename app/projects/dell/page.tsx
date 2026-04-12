"use client"

import Image from "next/image";
import { Navigation } from "@/components/common/navigation/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge";


import * as S from '../shared.css';

export default function Dell(){
    const mainColor = 'oklch(0.54 0.16 256)';
    const bgColor = 'oklch(0.978 0.010 225)';
    const metricBgColor = 'oklch(0.93 0.05 225)';
    const images = [
        "/Dell01.png",
        "/Dell02.png",
        "/Dell03.png",
        "/Dell04.png",
        "/Dell05.png",
    ];

    return(<>
        <Navigation />
        <S.PageWrapper $bgColor={bgColor}>
            <S.CaseBadgeWrapper>
                <Badge variant="outline" className="mx-auto mb-0 sm:mb-4">Capstone</Badge>
                <Badge variant="outline" className="mx-auto mb-0 sm:mb-4">3 Months</Badge>
                <Badge className="mx-auto mb-0 sm:mb-4" style={{backgroundColor:"oklch(0.93 0.045 172)",color:"oklch(0.35 0.09 165)",border:"none"}}>Data Visualization</Badge>
                <Badge className="mx-auto mb-0 sm:mb-4" style={{backgroundColor:"oklch(0.93 0.06 255)",color:"oklch(0.42 0.15 256)",border:"none"}}>UX Engineering</Badge>
            </S.CaseBadgeWrapper>
            <S.CaseTitle>Dell Next-Generation Network Graph System</S.CaseTitle>
            <S.CaseOverview>
                Replacing manual GraphQL queries with an interactive visual graph explorer — making 60K+ enterprise data nodes accessible to non-technical users.
            </S.CaseOverview>
            
            <S.ImpactContainer>
                <S.ImpactWrapper>
                    <S.ImpactText>60K+</S.ImpactText>
                    <S.ImpactTitle>Dataset nodes</S.ImpactTitle>
                </S.ImpactWrapper>
                <S.ImpactWrapper>
                    <S.ImpactText>70%</S.ImpactText>
                    <S.ImpactTitle>Faster insight discovery</S.ImpactTitle>
                </S.ImpactWrapper>
                <S.ImpactWrapper>
                    <S.ImpactText>2-3x</S.ImpactText>
                    <S.ImpactTitle>Relationship-mapping efficiency</S.ImpactTitle>
                </S.ImpactWrapper>
                <S.ImpactWrapper>
                    <S.ImpactText>3 mo</S.ImpactText>
                    <S.ImpactTitle>Research to production</S.ImpactTitle>
                </S.ImpactWrapper>
            </S.ImpactContainer>
            <Image
              src="/Dell.png"
              alt="Dell portfolio image"
              width={600}
              height={600}
              priority
            />

            <S.SectionContainer>
                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>01 - Problem & Research</S.SectionSubTitle>
                    <S.SectionTitle>The data was rich. The interface was nonexistent.</S.SectionTitle>
                    <S.SectionText>
                        The data science team had built a powerful GraphQL knowledge graph with 60,000+ interconnected nodes — but the data remained locked behind manual text queries. Analysts couldn&apos;t explore relationships without writing GraphQL requests by hand.
                    </S.SectionText>
                    <S.SectionText>
                        I interviewed data scientists, PMs, and analytics engineers to understand their workflow. The pattern was immediate: they weren&apos;t struggling with the data — they were struggling with the interface.
                    </S.SectionText>
                    <S.SectionText>From this research, three essential requirements became clear:</S.SectionText>
                    <div className="grid  grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                        <div className="border border-blue-500 rounded-lg p-4">
                            <div className="text-md font-medium">Visual exploration</div>
                            <div className="text-sm text-gray-700 mt-1">Zoom, pan, and drag to freely navigate the graph structure</div>
                        </div>
                        <div className="border border-blue-500 rounded-lg p-4">
                            <div className="text-md font-medium">Node detail</div>
                            <div className="text-sm text-gray-700 mt-1">Click any node to reveal metadata, dependencies, and relationships</div>
                        </div>
                        <div className="border border-blue-500 rounded-lg p-4">
                            <div className="text-md font-medium">Global search</div>
                            <div className="text-sm text-gray-700 mt-1">Jump directly to any node instantly without manual traversal</div>
                        </div>
                    </div>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>02 - Design process</S.SectionSubTitle>
                    <S.SectionTitle>Iterating toward clarity at scale</S.SectionTitle>
                    <S.SectionText>
                        I explored multiple layout directions and interaction patterns — from different search entry points to variations in how nodes and spatial relationships should be visualized. Each iteration brought the interface closer to feeling approachable despite the dataset&apos;s complexity.
                    </S.SectionText>
                    <S.SummaryWrapper $bgColor={metricBgColor} className="mb-4">
                        <S.SummaryContent>
                            Key features introduced through iteration: neighbor highlighting to trace relationships, filter and degree count to control graph scope, and a minimal search panel with randomize and jump-to-node.
                        </S.SummaryContent>
                    </S.SummaryWrapper>
                     <Carousel className="w-full">
                        <CarouselContent>
                            {images.map((src, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <div className="relative w-full h-128">
                                    <Image
                                        src={src}
                                        alt={`Dell ${index + 1}`}
                                        fill
                                        className="object-contain rounded-lg"
                                    />
                                    </div>
                                </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>03 - Solution</S.SectionSubTitle>
                    <S.SectionTitle>Three components, one coherent experience</S.SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                        <div className="border border-blue-500 rounded-lg p-4">
                            <div className="text-md font-medium">Graph Visualization Panel</div>
                            <div className="text-sm text-gray-700 mt-1">Force-directed D3 graph with zoom, pan, drag, and animated transitions for orientation</div>
                        </div>
                        <div className="border border-blue-500 rounded-lg p-4">
                            <div className="text-md font-medium">Node Detail Table</div>
                            <div className="text-sm text-gray-700 mt-1">Click to reveal attributes, dependencies, parent/child relationships, and adjacent paths</div>
                        </div>
                        <div className="border border-blue-500 rounded-lg p-4">
                            <div className="text-md font-medium">Global search</div>
                            <div className="text-sm text-gray-700 mt-1">Autocomplete that instantly zooms the canvas to the selected node</div>
                        </div>
                    </div>
                    <S.IframeContainer>
                        <S.ResponsiveIframe src="https://embed.figma.com/proto/C092QedLPB4S7uNfxRtPFE/Dell-Graph-Data-System?node-id=410-11471&scaling=contain&content-scaling=fixed&page-id=408%3A0&starting-point-node-id=410%3A11471&embed-host=share" allowFullScreen />
                    </S.IframeContainer>

                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>04 - Tech Implementation</S.SectionSubTitle>
                    <S.SectionTitle>Customizing D3 for enterprise-scale data</S.SectionTitle>
                    <S.SectionText>
                        The default react-d3-graph library wasn&apos;t built for 60K+ nodes — so I customized much of its internal logic to maintain performance at this scale.
                    </S.SectionText>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                        <div className="border border-blue-500 rounded-lg p-4">
                            <div className="text-sm text-blue-500 font-medium">RENDERING</div>
                            <div className="text-sm text-gray-800 mt-1">Selective rendering — only visible nodes updated on each tick</div>
                        </div>
                        <div className="border border-blue-500 rounded-lg p-4">
                            <div className="text-sm text-blue-500 font-medium">PERFORMANCE</div>
                            <div className="text-sm text-gray-800 mt-1">Custom D3 tick logic to reduce unnecessary React re-renders</div>
                        </div>
                        <div className="border border-blue-500 rounded-lg p-4">
                            <div className="text-sm text-blue-500 font-medium">SCALE</div>
                            <div className="text-sm text-gray-800 mt-1">Virtualization techniques to keep UI lightweight at 60K+ nodes</div>
                        </div>
                    </div>
                    <ul className="mb-4">
                        <S.HighLightList>Neighbor highlighting and dynamic tooltips for relational tracing</S.HighLightList>
                        <S.HighLightList>Animation sequencing for smooth zoom-to-node transitions</S.HighLightList>
                        
                    </ul>
                    <video
                        src="/Dell_video.mp4"
                        controls
                        autoPlay={true}
                        loop={false}
                    />
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>05 - Outcome & Impact</S.SectionSubTitle>
                    <S.SectionTitle>Default tool for the analytics team</S.SectionTitle>

                    <S.MetricsContainer>
                        <S.MetricWrapper $bgColor={metricBgColor}>
                            <S.MetricsNumber $mainColor={mainColor}>70% faster</S.MetricsNumber>
                            <S.MetricsText>insight discovery </S.MetricsText>
                        </S.MetricWrapper>
                        <S.MetricWrapper $bgColor={metricBgColor}>
                            <S.MetricsNumber $mainColor={mainColor}>2–3× increase</S.MetricsNumber>
                            <S.MetricsText>in relationship-mapping efficiency</S.MetricsText>
                        </S.MetricWrapper>
                    </S.MetricsContainer>

                    <S.QuoteWrapper $mainColor={mainColor}>
                        <S.QuoteContent>&quot;Debbie did an amazing job right out of the gate with both understanding, conceptualizing
and then creating a mock-up visual of what we were looking for. We were all very impressed
with the great job she did in such a short time and very little guidance.
<br/>
Debbie has had to learn a lot of new components around our specific use case which meant
that she needed to do some self-exploration and learning. Despite her other commitments she
has been a quick learner and great contributor to our project.&quot;</S.QuoteContent>
                        <S.QuoteName> --- Michael Shepherd, Sr Distinguished Engineer, Dell Technologies</S.QuoteName>
                    </S.QuoteWrapper>
                    
                    <ul className="mt-4">
                        <S.HighLightList>Recommended as a reusable visualization module for other enterprise products</S.HighLightList>
                        <S.HighLightList>Made complex datasets accessible to non-technical stakeholders</S.HighLightList>
                    </ul>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>06 - Reflection</S.SectionSubTitle>
                    <S.SectionTitle>Research and engineering are inseparable </S.SectionTitle>
                    <S.SectionText>This project pushed me to <b> integrate user-centered thinking with advanced technical visualization work. </b> I learned how to bridge the gap between what users say they need and what complex data systems actually require. Through interviews and continuous feedback loops, I translated vague, evolving requests into concrete interaction models that analysts could adopt immediately.</S.SectionText>
                    <S.SectionText>Throughout the project, I collaborated closely with data scientists, product managers, backend engineers, and designers. Our iterative approach — weekly design–dev reviews, rapid prototyping, and technical feasibility discussions — helped refine both the UX and performance over time. This process taught me how to align cross-functional teams around a shared problem and guide a complex technical feature from concept to production.</S.SectionText>
                </S.SectionWrapper>
            </S.SectionContainer>
            
        </S.PageWrapper>
        </>
    )
}