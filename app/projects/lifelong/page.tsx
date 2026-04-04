"use client"

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/common/navigation/navigation";
import { ImageLightbox } from "@/components/common/image-lightbox/image-lightbox";

import * as S from '../shared.css';

export default function Lifelong() {
    const mainColor = '#365072';
    const bgColor = '#8db9f21a';
    const metricBgColor = '#3650721A';
    return (
        <>
        <Navigation />
        <S.PageWrapper $bgColor={bgColor}>
            <S.CaseBadgeWrapper>
               <Badge variant="outline" className="mx-auto mb-4">Healthcare</Badge>
                <Badge className="mx-auto mb-4 bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Accessibility</Badge>
                <Badge className="mx-auto mb-4 bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">1st Place — AIR-U Competition 🎉</Badge>  
            </S.CaseBadgeWrapper>
            <S.CaseTitle>Lifelong Medical Care - Accessibility Website Redesign</S.CaseTitle>
            <S.CaseOverview>Led user research and front-end implementation for a WCAG 2.0 AA-compliant redesign — from user interviews and card sorting to production code.</S.CaseOverview>
            <S.ImpactContainer>
                <S.ImpactWrapper>
                    <S.ImpactText>WCAG AA</S.ImpactText>
                    <S.ImpactTitle>Full compliance achieved</S.ImpactTitle>
                </S.ImpactWrapper>
                <S.ImpactWrapper>
                    <S.ImpactText>5</S.ImpactText>
                    <S.ImpactTitle>User interviews</S.ImpactTitle>
                </S.ImpactWrapper>
                <S.ImpactWrapper>
                    <S.ImpactText>50+</S.ImpactText>
                    <S.ImpactTitle>WCAG criteria audited</S.ImpactTitle>
                </S.ImpactWrapper>
                <S.ImpactWrapper>
                    <S.ImpactText>3 mo</S.ImpactText>
                    <S.ImpactTitle>Research to production</S.ImpactTitle>
                </S.ImpactWrapper>
            </S.ImpactContainer>
            <div className="flex items-center gap-4 rounded-lg border border-orange-200 bg-orange-50 px-6 py-4 dark:border-orange-800 dark:bg-orange-950 w-full max-w-[900px] mt-8">
                <span className="text-xl">🏆</span>
                <div>
                    <p className="text-md font-semibold text-orange-800 dark:text-orange-200">
                        1st Place — Knowbility AIR-U Accessibility Competition
                    </p>
                    <p className="text-sm font-medium text-orange-700 dark:text-orange-400">
                        Highest composite score across research rigor, design quality, and accessibility implementation
                    </p>
                </div>
            </div>
            <Image
                src="/LifeLong.png"
                alt="LifeLong portfolio image"
                width={600}
                height={600}
                priority
            />

            <S.SectionContainer>
                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>01 - The Challenge</S.SectionSubTitle>
                    <S.SectionTitle>A site that failed its most vulnerable users</S.SectionTitle>
                    <S.SectionText>
                        LifeLong Medical Care serves underserved communities — people who depend on clear, accessible information to find care. The original site made this nearly impossible.
                    </S.SectionText>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>02 - User Research</S.SectionSubTitle>
                    <S.SectionTitle>5 interviews to understand how people find healthcare</S.SectionTitle>
                    <S.SectionText>
                       Before touching the design, I conducted 5 user interviews to understand how real people navigate healthcare websites — what they search for, how they choose a clinic, and what information they expect to find.
                    </S.SectionText>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>03 - Information Architecture</S.SectionSubTitle>
                    <S.SectionTitle>Card sorting to rebuild navigation from the ground up</S.SectionTitle>
                    <S.SectionText>
                       Rather than guessing how to organize content, I ran card sorting sessions with participants — letting user mental models drive the new IA.
                    </S.SectionText>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>04 - Design System</S.SectionSubTitle>
                    <S.SectionTitle>Accessibility-first style guide and component library</S.SectionTitle>
                    <S.SectionText>
                       Before writing code, we defined a complete style guide — ensuring every color, typography choice, and interaction state met WCAG AA standards from the start.
                    </S.SectionText>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>05 - Hi-fi Prototypes</S.SectionSubTitle>
                    <S.SectionTitle>From insights to production-ready design</S.SectionTitle>
                    <S.SectionText>
                       With a solid foundation in place, we created high-fidelity prototypes that brought the design to life — ensuring a seamless transition from concept to implementation.
                    </S.SectionText>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>06 - Accessibility Implementation</S.SectionSubTitle>
                    <S.SectionTitle>50-point WCAG checklist as a shared team practice</S.SectionTitle>
                    <S.SectionText>
                       We built a shared spreadsheet to audit every WCAG 2.0 AA criterion — making accessibility a team-wide responsibility, not just a developer task.
                    </S.SectionText>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>07 - Outcome</S.SectionSubTitle>
                    <S.SectionTitle>Highest-scoring submission in the competition</S.SectionTitle>
                    
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>08 — Reflection</S.SectionSubTitle>
                    <S.SectionTitle>Accessibility is a research problem, not just a technical one</S.SectionTitle>
                    <S.SectionText>
                       The biggest lesson was that accessibility can&apos;t be retrofitted — it has to start in research. Understanding that our users included people with limited English, low digital literacy, and disabilities meant every decision, from IA to color choice, had to be made with those constraints in mind from day one.
                    </S.SectionText>
                    <S.SectionText>
                        Making the WCAG checklist a shared team artifact also changed how we worked. Accessibility became everyone&apos;s responsibility — not just the developer&apos;s job to fix at the end.
                    </S.SectionText>
                </S.SectionWrapper>

            </S.SectionContainer>

        </S.PageWrapper>
        </>
    )
}