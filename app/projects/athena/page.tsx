"use client"

import Image from "next/image";
import { Navigation } from "@/components/common/navigation/navigation";

import * as S from './page.css';

export default function Athena(){

    return(<>
        <Navigation />
        <S.PageWrapper>
            <S.CaseTitle>Athena Advisory Agentic AI Financial Platform</S.CaseTitle>
            <Image
              src="/Athena.png"
              alt="Athena portfolio image"
              width={400}
              height={400}
              priority
            />
            <S.ImpactContainer>
                <S.ImpactWrapper>
                    <S.ImpactTitle>Durations</S.ImpactTitle>
                    <S.ImpactText>4 Years</S.ImpactText>
                </S.ImpactWrapper>
                <S.ImpactWrapper>
                    <S.ImpactTitle>Features Shipped</S.ImpactTitle>
                    <S.ImpactText>15 ↑</S.ImpactText>
                </S.ImpactWrapper>
                <S.ImpactWrapper>
                    <S.ImpactTitle>AUM</S.ImpactTitle>
                    <S.ImpactText>$2B ↑</S.ImpactText>
                </S.ImpactWrapper>
                <S.ImpactWrapper>
                    <S.ImpactTitle>Active Users</S.ImpactTitle>
                    <S.ImpactText>50K ↑</S.ImpactText>
                </S.ImpactWrapper>
            </S.ImpactContainer>

            <S.SectionContainer>
                <S.SectionWrapper>
                    <S.SectionSubTitle>Introduction</S.SectionSubTitle>
                    <S.SectionTitle>Building Financial Service Platform from 0 to 1</S.SectionTitle>
                    <S.SectionText>Over four years, I helped transform a financial product from an early concept into a fully scalable, user-centered platform. I worked across design systems, core product features, performance engineering, and AI integration — often operating in ambiguous space where requirements were unclear and solutions needed to be designed from scratch.
This journey shaped my identity as an engineer who thrives at bringing clarity to complex systems, creating scalable foundations, and collaborating across disciplines to push products forward.</S.SectionText>
                </S.SectionWrapper>

                 <S.SectionWrapper>
                    <S.SectionSubTitle>My Role</S.SectionSubTitle>
                    <S.SectionTitle>UX-oriented frontend engineer</S.SectionTitle>
                    <S.SectionText>In this long-term, high-ownership environment, my role evolved from interface implementation to system building and product shaping. I contributed as a UX-oriented frontend engineer, design system owner, cross-functional partner, and quality advocate.</S.SectionText>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle>Process & Contribution</S.SectionSubTitle>
                    <S.SectionTitle>4 Phases Approach To Scaling</S.SectionTitle>
                    <br /><hr /><br />
                    <S.SectionTitle2>1. Foundation Development</S.SectionTitle2>
                    <S.SectionText>A strong foundation was essential for the product&apos;s long-term growth. I built tools and systems that aligned design, product, and engineering.</S.SectionText>
                    <S.HighlightTitle>Highlights </S.HighlightTitle>
                    <ul>
                        <S.HighLightList>Established a full <b> Design System </b> with tokens and layout patterns</S.HighLightList>
                        <S.HighLightList>Built a modular <b> Component Library </b> with MUI to reduce redundancy and accelerate development</S.HighLightList>
                        <S.HighLightList>Created a scalable <b> Data Visualization System </b> for financial charts and insights</S.HighLightList>
                    </ul>

                    <br /><hr /><br />
                    <S.SectionTitle2>2. Main Features Shipped</S.SectionTitle2>
                    <S.SectionText>As the platform matured, I worked across multiple product areas to develop features that supported complex financial journeys.</S.SectionText>
                    <S.HighlightTitle>Major Deliverables</S.HighlightTitle>
                    <ul>
                        <S.HighLightList>Authentication, onboarding, user profile management(multi-step forms, validations)</S.HighLightList>
                        <S.HighLightList>Comprehensive user dashboard & financial overview(Debt, Credit Score, Investment)</S.HighLightList>
                        <S.HighLightList>Financial calculators and analytical tools for retirement</S.HighLightList>
                        <S.HighLightList>Mortgage, Account Opening, Increase contribution rate service</S.HighLightList>
                        <S.HighLightList>Financial recommendation system & asset allocation suggestion</S.HighLightList>
                        <S.HighLightList>Subscription, and Plaid system integration</S.HighLightList>
                    </ul>
                    <S.SectionText>I collaborated closely with backend engineers, PMs, designers, and data teams to refine requirements and deliver complete, high-quality user experiences.</S.SectionText>
                    
                    <br /><hr /><br />
                    <S.SectionTitle2>3. Performance, Reliability & Documentation</S.SectionTitle2>
                    <S.SectionText>As product complexity increased, I focused on elevating the overall engineering quality.</S.SectionText>
                    <S.HighlightTitle>Improvements</S.HighlightTitle>
                    <ul>
                        <S.HighLightList>Set up CI/CD pipelines to streamline deployments</S.HighLightList>
                        <S.HighLightList>Added Playwright + Jest testing for stable financial logic and form flows</S.HighLightList>
                        <S.HighLightList>Implemented accessibility standards for compliance and usability</S.HighLightList>
                        <S.HighLightList>Established unified linting, folder structure, and code review guidelines</S.HighLightList>
                    </ul>
                    <S.SectionText>These improvements strengthened system reliability and made the codebase more maintainable for future growth.</S.SectionText>
                    
                    <br /><hr /><br />
                    <S.SectionTitle2>4. AI Chat Panel Migration and Integration</S.SectionTitle2>
                    <S.SectionText>I led the end-to-end frontend migration to build a next-generation AI chat platform, replacing the legacy system and enabling intelligent, agent-powered financial workflows.</S.SectionText>
                    <S.HighlightTitle>Key Contributions</S.HighlightTitle>
                    <ul>
                        <S.HighLightList>Built a new modular chat architecture to replace the legacy panel, supporting scalable features, message pipelines, and future extensions.</S.HighLightList>
                        <S.HighLightList>Integrated ChatGPT and agentic logic, enabling AI-powered financial recommendations, dynamic follow-up questions, and contextual guidance.</S.HighLightList>
                        <S.HighLightList>Designed highly flexible UI templates that handle multiple message types (AI actions, forms, alerts, financial insights, workflow steps, etc).</S.HighLightList>
                        <S.HighLightList>Led the migration of platform features into the chat system, helping the team transition from a multi-page product to a unified chat-first experience.</S.HighLightList>
                        <S.HighLightList>Integrated existing user data and financial history into AI conversations, enabling personalized responses and seamless workflow continuity.</S.HighLightList>
                    </ul>
                    <S.SectionText>This project represented a major shift in product direction—moving from static dashboards to an <b> AI-driven, agentic financial assistant </b> that acts, reasons, and guides users through complex decisions in real time.</S.SectionText>
                    <br /><hr />
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle>Outcome & Impact</S.SectionSubTitle>
                    <S.SectionTitle>Financial Enterprise Platform for 50K users</S.SectionTitle>
                    <S.SectionText> My contributions helped the platform evolve into a:</S.SectionText>
                    <ul>
                        <S.HighLightList>Reliable, scalable, and visually consistent financial product</S.HighLightList>
                        <S.HighLightList>Faster and more predictable engineering environment</S.HighLightList>
                        <S.HighLightList>System capable of supporting complex financial computations and AI guidance</S.HighLightList>
                    </ul>

                    <S.MetricsContainer>
                        <S.MetricWrapper>
                            <S.MetricsNumber>5-7x</S.MetricsNumber>
                            <S.MetricsText>Expansion in feature coverage </S.MetricsText>
                        </S.MetricWrapper>
                        <S.MetricWrapper>
                            <S.MetricsNumber>80%</S.MetricsNumber>
                            <S.MetricsText>Component reuse rate achieved</S.MetricsText>
                        </S.MetricWrapper>
                        <S.MetricWrapper>
                            <S.MetricsNumber>30%</S.MetricsNumber>
                            <S.MetricsText>Increase in development velocity</S.MetricsText>
                        </S.MetricWrapper>
                        <S.MetricWrapper>
                            <S.MetricsNumber>90%</S.MetricsNumber>
                            <S.MetricsText>Reduction in production errors</S.MetricsText>
                        </S.MetricWrapper>
                    </S.MetricsContainer>


                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle>What I Learned</S.SectionSubTitle>
                    <S.SectionTitle>Reflection on a Four-Year Journey</S.SectionTitle>
                    <S.SectionTitle2>1. Turning complexity into structure</S.SectionTitle2>
                    <S.SectionText>I learned to identify patterns in ambiguity and build scalable frameworks that support long-term growth.</S.SectionText>
                    <S.SectionTitle2>2. Leading with clarity in ambiguous environments</S.SectionTitle2>
                    <S.SectionText>When requirements lacked clarity, I learned to propose solutions, challenge assumptions, and drive alignment.</S.SectionText>
                    <S.SectionTitle2>3. Building for durability, not just delivery</S.SectionTitle2>
                    <S.SectionText>Documentation, modular design, testing, and accessibility became core parts of my engineering philosophy.</S.SectionText>
                    <S.SectionTitle2>4. Cross-functional collaboration as a superpower</S.SectionTitle2>
                    <S.SectionText>Working with PM, design, backend, compliance, and data teams strengthened my ability to communicate and shape holistic solutions.</S.SectionText>
                    <S.SectionTitle2>5. Staying consistent in a high-change environment</S.SectionTitle2>
                    <S.SectionText>Through shifting priorities and evolving constraints, I learned to maintain quality, output, and collaborative energy.</S.SectionText>
                </S.SectionWrapper>
            </S.SectionContainer>
            
        </S.PageWrapper>
        </>
    )
}