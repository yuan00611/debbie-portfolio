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


import * as S from '../shared.css';

export default function Athena(){
    const mainColor = '#0672CB';
    const bgColor = '#ebf0f4';
    const metricBgColor = '#c2e1fa';
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
            <S.CaseTitle>Dell Next-Generation Network Graph System</S.CaseTitle>
            <Image
              src="/Dell.png"
              alt="Dell portfolio image"
              width={400}
              height={400}
              priority
            />
            <S.ImpactContainer>
                <S.ImpactWrapper>
                    <S.ImpactTitle>Durations</S.ImpactTitle>
                    <S.ImpactText>3 months</S.ImpactText>
                </S.ImpactWrapper>
                <S.ImpactWrapper>
                    <S.ImpactTitle>Role</S.ImpactTitle>
                    <S.ImpactText>UX Engineer</S.ImpactText>
                </S.ImpactWrapper>
                <S.ImpactWrapper>
                    <S.ImpactTitle>Tools</S.ImpactTitle>
                    <S.ImpactText>Figma, React, D3</S.ImpactText>
                </S.ImpactWrapper>
                <S.ImpactWrapper>
                    <S.ImpactTitle>Date nodes</S.ImpactTitle>
                    <S.ImpactText>60K ↑</S.ImpactText>
                </S.ImpactWrapper>
            </S.ImpactContainer>

            <S.SectionContainer>
                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>01</S.SectionSubTitle>
                    <S.SectionTitle>Intro Summary</S.SectionTitle>
                    <S.SectionText>At Dell, the data science team maintained a GraphQL database containing over 60,000 interconnected nodes. While rich in information, it lacked a visual interface, forcing users to manually construct GraphQL queries to explore relationships.</S.SectionText>
                    <S.SectionText> I led the end-to-end design and development of an interactive graph explorer using React and D3.js. The tool allowed non-technical users to search, navigate, and understand complex data networks visually — making hidden patterns instantly discoverable.</S.SectionText>

                </S.SectionWrapper>

                 <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>02</S.SectionSubTitle>
                    <S.SectionTitle>Problem & Research</S.SectionTitle>
                    <S.SectionText>When I joined the project, our data science team had already built a powerful GraphQL knowledge graph containing more than <b> 60,000 interconnected nodes. </b> But despite its richness, the data remained locked behind text-based queries. Analysts had to write GraphQL requests manually just to discover relationships, and without visualization, validating assumptions or exploring connections became slow and error-prone.</S.SectionText>
                    <S.SectionText>I began by interviewing the core users — data scientists, PMs, and analytics engineers — to understand how they worked with the graph. Very quickly, a pattern emerged: they weren’t struggling with the data; they were struggling with the interface. They needed a way to visually trace relationships, zoom in and out smoothly, and search for specific nodes instantly. And above all, they needed performance — because any delay broke their analytical flow.</S.SectionText>
                    <br />
                    <S.SectionText>From this research, three essential requirements became clear:</S.SectionText>
                    <ul>
                        <S.HighLightList>The ability to freely explore the graph through zooming, panning, and intuitive navigation.</S.HighLightList>
                        <S.HighLightList>A detailed view for each node, revealing metadata, dependencies, and context.</S.HighLightList>
                        <S.HighLightList>A fast, global search mechanism that allowed them to jump directly to any node.</S.HighLightList>
                    </ul>
                    <S.SectionText>These insights became the foundation for the product direction.</S.SectionText>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>03</S.SectionSubTitle>
                    <S.SectionTitle>Design Process & Iterations</S.SectionTitle>
                    <S.SectionText>Throughout this project, I explored a wide range of interface layouts and interaction patterns to find the most intuitive way to navigate complex relational data. Early on, I experimented with multiple structural directions—from different search entry points to variations in how nodes, hierarchy, and spatial relationships should be visualized. These iterations helped me gradually refine a balance between visual clarity, information density, and user orientation.</S.SectionText>
                    <S.SectionText>Functionally, I also tested several interaction mechanisms to support deeper exploration. Features like <b> Node Exploration, Filter, and Degree Count </b> were introduced to let users control the scope of the graph and uncover patterns at their own pace. Meanwhile, the search interface went through its own evolution, eventually becoming a minimal and focused input panel that allows users to quickly type, randomize, and jump directly into the visualization.</S.SectionText>
                    <S.SectionText>Together, these design and functional explorations shaped the experience from an early, high-complexity prototype into a more structured and discoverable system—one that can handle enterprise-scale datasets while still feeling approachable and easy to explore. My goal was not only to make the interface usable, but to make it inviting—encouraging users to dive deeper, follow connections, and continuously uncover new insights.</S.SectionText>
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
                    <S.SectionSubTitle $mainColor={mainColor}>04</S.SectionSubTitle>
                    <S.SectionTitle>Solution & UI Design</S.SectionTitle>
                    <S.SectionText> The final solution took shape as a clean, highly interactive interface composed of three core components.</S.SectionText>

                    <S.SectionTitle2>Graph Visualization Panel</S.SectionTitle2>
                    <S.SectionText>This was the heart of the experience. The force-directed D3 graph supported smooth zooming, panning, and dragging, while dynamic highlighting made it easy to follow relational paths. Animated transitions helped users maintain orientation as they explored different clusters of data.</S.SectionText>

                    <S.SectionTitle2>Node Detail Table</S.SectionTitle2>
                    <S.SectionText>When a user clicked a node, the pop-up table revealed everything they needed:
                                    attributes, dependencies, parent/child relationships, and adjacent paths.
                                    This allowed analysts to inspect the graph deeply without losing their place.</S.SectionText>

                    <S.SectionTitle2>Global Search & Jump-to-Node</S.SectionTitle2>
                    <S.SectionText>To support fast entry points, I implemented an autocomplete search bar that instantly zoomed the canvas to the selected node. This feature dramatically reduced the time needed to begin an investigation, especially in such a large network.</S.SectionText>
                    <S.SectionText>All UI elements were designed to handle tens of thousands of nodes gracefully, keeping the interface clean, readable, and approachable.</S.SectionText>

                    <S.IframeContainer>
                        <S.ResponsiveIframe src="https://embed.figma.com/proto/C092QedLPB4S7uNfxRtPFE/Dell-Graph-Data-System?node-id=410-11471&scaling=contain&content-scaling=fixed&page-id=408%3A0&starting-point-node-id=410%3A11471&embed-host=share" allowFullScreen />
                    </S.IframeContainer>

                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>05</S.SectionSubTitle>
                    <S.SectionTitle>Tech Implementation</S.SectionTitle>
                    <S.SectionText>Although I used <i> react-d3-graph </i> as a starting point, the default library wasn’t built for datasets of our scale — so I customized much of its internal logic.</S.SectionText>
                    <br />
                    <S.SectionText>To keep the graph responsive with over 60,000 nodes, I implemented multiple layers of optimization:</S.SectionText>
                    <ul>
                        <S.HighLightList>Selective rendering ensured only visible nodes were updated.</S.HighLightList>
                        <S.HighLightList>Custom D3 tick logic reduced unnecessary React re-renders.</S.HighLightList>
                        <S.HighLightList>Virtualization techniques made the UI feel lightweight despite the dataset’s size.</S.HighLightList>
                    </ul>
                    <S.SectionText>Beyond performance improvements, I added interaction logic such as neighbor highlighting, dynamic tooltips, and animation sequencing for zoom-to-node transitions. In the end, the graph felt fluid and responsive — even with data volumes that would normally overwhelm browser-based tools.</S.SectionText>
                    <br />
                    <video
                        src="/Dell_video.mp4"
                        controls
                        autoPlay={true}
                        loop={false}
                    />
                   
                    
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>06</S.SectionSubTitle>
                    <S.SectionTitle>Outcome & Impact</S.SectionTitle>
                    <S.SectionText> The tool quickly became the default interface for the analytics team.</S.SectionText>
                    <ul>
                        <S.HighLightList>Recommended as a reusable visualization module for other enterprise products</S.HighLightList>
                        <S.HighLightList>Made complex datasets accessible to non-technical users</S.HighLightList>
                        <S.HighLightList>Accelerated decision-making for data science and PM teams</S.HighLightList>
                    </ul>

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


                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>07</S.SectionSubTitle>
                    <S.SectionTitle>Reflection </S.SectionTitle>
                    <S.SectionText>This project pushed me to <b> integrate user-centered thinking with advanced technical visualization work. </b> I learned how to bridge the gap between what users say they need and what complex data systems actually require. Through interviews and continuous feedback loops, I translated vague, evolving requests into concrete interaction models that analysts could adopt immediately.</S.SectionText>
                    <S.SectionText>Throughout the project, I collaborated closely with data scientists, product managers, backend engineers, and designers. Our iterative approach — weekly design–dev reviews, rapid prototyping, and technical feasibility discussions — helped refine both the UX and performance over time. This process taught me how to align cross-functional teams around a shared problem and guide a complex technical feature from concept to production.</S.SectionText>
                </S.SectionWrapper>
            </S.SectionContainer>
            
        </S.PageWrapper>
        </>
    )
}