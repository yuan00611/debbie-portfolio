"use client"

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/common/navigation/navigation";
import { ImageLightbox } from "@/components/common/image-lightbox/image-lightbox";

import * as S from '../shared.css';
import { Button } from "@/components/ui/button";

const cardSortData = [
  { category: "Locations", items: "Health Center Locations, Dental Care Locations, Immediate/Urgent Care Centers" },
  { category: "Services", items: "Dental Care, Centering, General Health Care, Prenatal Care, Supportive Housing" },
  { category: "Eligibility", items: "Get Care / Becoming a Patient, Patient Resources, Insurance info" },
  { category: "Providers", items: "Doctor Profile, Board of Directors" },
  { category: "About us", items: "History, Mission, Diversity, Advocacy, Partnerships, AmeriCorps" },
]

const wcagData = [
  { criterion: "1.1.1 Non-text content", level: "A", notes: "All images have alt text" },
  { criterion: "1.3.1 Info & relationships", level: "A", notes: "Semantic HTML landmarks" },
  { criterion: "1.4.3 Contrast minimum", level: "AA", notes: "4.5:1 ratio verified" },
  { criterion: "2.1.1 Keyboard accessible", level: "A", notes: "Full keyboard navigation" },
  { criterion: "2.4.3 Focus order", level: "A", notes: "Logical focus management" },
  { criterion: "2.4.7 Focus visible", level: "AA", notes: "Orange focus ring on all elements" },
]

const outcomes = [
  {
    value: "WCAG AA",
    desc: "Full compliance across 50 audited criteria — keyboard, screen reader, contrast, and focus management",
  },
  {
    value: "1st Place",
    desc: "Highest composite score across research depth, design quality, and implementation accuracy",
  },
]

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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                        {/* Before */}
                        <div className="rounded-lg border border-red-200 dark:border-red-800 overflow-hidden">
                            <div className="px-4 py-2 bg-red-50 dark:bg-red-950 text-sm font-medium text-red-700 dark:text-red-300">
                            Before — Original site
                            </div>
                            <div className="relative aspect-video bg-muted">
                            <Image src="/LifeLong-before.png" alt="Original LifeLong site" fill className="object-cover object-top" />
                            </div>
                            <div className="p-4 space-y-2 bg-white">
                            {[
                                "ALL CAPS nav — screen readers spell letter by letter",
                                "15-item hover-only dropdown — no keyboard access",
                                "Red text on white — fails contrast ratio",
                                "8 vague nav labels (OPPORTUNITIES?)",
                            ].map((issue) => (
                                <div key={issue} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0" />
                                {issue}
                                </div>
                            ))}
                            </div>
                        </div>

                        {/* After */}
                        <div className="rounded-lg border border-green-200 dark:border-green-800 overflow-hidden">
                            <div className="px-4 py-2 bg-green-50 dark:bg-green-950 text-sm font-medium text-green-700 dark:text-green-300">
                            After — Redesigned site
                            </div>
                            <div className="relative aspect-video bg-muted">
                            <Image src="/LifeLong-after.png" alt="Redesigned LifeLong site" fill className="object-cover object-top" />
                            </div>
                            <div className="p-4 space-y-2 bg-white">
                            {[
                                "Title case nav — screen reader friendly",
                                "6 user-centered nav items, fully keyboard accessible",
                                "WCAG AA contrast across all components",
                                "4 primary actions surfaced on homepage",
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0" />
                                {item}
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>02 - User Research</S.SectionSubTitle>
                    <S.SectionTitle>5 interviews to understand how people find healthcare</S.SectionTitle>
                    <S.SectionText>
                       Before touching the design, I conducted 5 user interviews to understand how real people navigate healthcare websites — what they search for, how they choose a clinic, and what information they expect to find.
                    </S.SectionText>
                    <div className="relative w-full my-4 ">
                        <Image
                            src="/LifeLong-interview.png"
                            alt="LifeLong user interviews result"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                        />
                    </div>
                    <Button variant="outline" className="mx-auto mb-4" onClick={() => window.open("https://app.mural.co/t/utaustin8762/m/utaustin8762/1584813922350/f4e9ce4de18aaa8fa458700d9de36d4059b94480", "_blank")}>
                        View interview details
                    </Button>
                    <S.SectionSubTitle className="text-center" $mainColor={mainColor}>Key Insights</S.SectionSubTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                        <div className="border border-sky-700 rounded-lg p-4">
                            <div className="text-md text-sky-900 font-medium">Finding a clinic</div>
                            <div className="text-sm text-gray-700 mt-1">Users&apos; #1 goal. They expected location + insurance info on the same page — not split across sections.</div>
                        </div>
                        <div className="border border-sky-700 rounded-lg p-4">
                            <div className="text-md text-sky-900 font-medium">Insurance eligibility</div>
                            <div className="text-sm text-gray-700 mt-1">A major pain point — users didn&apos;t know where to look and often gave up before finding the answer.</div>
                        </div>
                        <div className="border border-sky-700 rounded-lg p-4">
                            <div className="text-md text-sky-900 font-medium">Booking appointments</div>
                            <div className="text-sm text-gray-700 mt-1">Users expected a direct path from the homepage — not buried under &quot;Programs & Services.&quot;</div>
                        </div>
                    </div>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>03 - Information Architecture</S.SectionSubTitle>
                    <S.SectionTitle>Card sorting to rebuild navigation from the ground up</S.SectionTitle>
                    <S.SectionText>
                       Rather than guessing how to organize content, I ran card sorting sessions with participants — letting user mental models drive the new IA.
                    </S.SectionText>

                    <div className="relative w-full max-w-[600px] my-4 mx-auto">
                        <Image
                            src="/LifeLong-cardsort.png"
                            alt="LifeLong user interviews result"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="rounded-lg border border-border overflow-hidden mt-4">
                        <div className="grid grid-cols-[1fr_2fr] px-4 py-2 bg-muted text-xs text-muted-foreground font-medium">
                            <span>New nav category</span>
                            <span>Content items mapped from card sort</span>
                        </div>
                        {cardSortData.map((row, i) => (
                            <div key={row.category} className={`grid grid-cols-[1fr_2fr] bg-white px-4 py-3 text-sm ${i !== 0 ? "border-t border-border" : ""}`}>
                                <span className="font-medium text-foreground">{row.category}</span>
                                <span className="text-muted-foreground">{row.items}</span>
                            </div>
                        ))}
                    </div>

                    <S.SummaryWrapper $bgColor={metricBgColor} className="mb-4">
                        <S.SummaryContent $mainColor={mainColor}>
                            Result: 8 vague nav items → 5 user-centered labels that matched how participants actually think about healthcare information.
                        </S.SummaryContent>
                    </S.SummaryWrapper>

                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>04 - Design System</S.SectionSubTitle>
                    <S.SectionTitle>Accessibility-first style guide and component library</S.SectionTitle>
                    <S.SectionText>
                       Before writing code, we defined a complete style guide — ensuring every color, typography choice, and interaction state met WCAG AA standards from the start.
                    </S.SectionText>

                    <S.SummaryWrapper $bgColor={metricBgColor} className="mb-4">
                        <S.SummaryContent $mainColor={mainColor}>
                            Key decision: Designed explicit focus states for every interactive element — a visible orange outline that keyboard users can follow as they navigate the page.
                        </S.SummaryContent>
                    </S.SummaryWrapper>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>05 - Hi-fi Prototypes</S.SectionSubTitle>
                    <S.SectionTitle>From insights to production-ready design</S.SectionTitle>
                    <S.SectionText>
                       With a solid foundation in place, we created high-fidelity prototypes that brought the design to life — ensuring a seamless transition from concept to implementation.
                    </S.SectionText>
                    <S.IframeContainer>
                        <S.ResponsiveIframe src="https://embed.figma.com/design/91HuUax60OxPU6XfIU1sUb/LifeLong-Medical-Care_Hi-fi-prototype_April-22--after-client-s-feedback-?node-id=359-475&embed-host=share" allowFullScreen />
                    </S.IframeContainer>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>06 - Accessibility Implementation</S.SectionSubTitle>
                    <S.SectionTitle>50-point WCAG checklist as a shared team practice</S.SectionTitle>
                    <S.SectionText>
                       We built a shared spreadsheet to audit every WCAG 2.0 AA criterion — making accessibility a team-wide responsibility, not just a developer task.
                    </S.SectionText>
                    <div className="rounded-lg border border-border overflow-hidden mt-4">
                        <div className="grid grid-cols-[1.8fr_0.8fr_0.8fr] sm:grid-cols-[2fr_0.6fr_0.8fr_1.5fr] px-4 py-2 bg-muted text-xs text-muted-foreground font-medium">
                            <span>Criterion</span>
                            <span>Level</span>
                            <span>Status</span>
                            <span className="hidden sm:block">Notes</span>
                        </div>
                        {wcagData.map((row, i) => (
                            <div key={row.criterion} className={`grid grid-cols-[2fr_0.6fr_0.8fr] sm:grid-cols-[2fr_0.6fr_0.8fr_1.5fr] px-4 py-3 text-sm items-center bg-white ${i !== 0 ? "border-t border-border" : ""}`}>
                            <span className="text-foreground">{row.criterion}</span>
                            <span className="text-muted-foreground">{row.level}</span>
                            <span>
                                <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">
                                    Pass
                                </span>
                            </span>
                            <span className="hidden sm:block text-muted-foreground">{row.notes}</span>
                            </div>
                        ))}
                        <div className="px-4 py-3 border-t border-border text-xs text-muted-foreground bg-white  italic">
                            + 44 more criteria audited across all pages
                        </div>
                    </div>
                </S.SectionWrapper>

                <S.SectionWrapper>
                    <S.SectionSubTitle $mainColor={mainColor}>07 - Outcome</S.SectionSubTitle>
                    <S.SectionTitle>Highest-scoring submission in the competition</S.SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                    {outcomes.map((item) => (
                        <div key={item.value} className="rounded-lg border border-border p-5 bg-white text-center">
                        <div className="text-2xl font-medium text-foreground mb-2">{item.value}</div>
                        <div className="text-sm text-muted-foreground leading-relaxed">{item.desc}</div>
                        </div>
                    ))}
                    </div>
                    <Button variant="outline" className="mx-auto mb-4" onClick={() => window.open("https://yuan00611.github.io/AirU_Website/index.html", "_blank")}>
                        View live site
                    </Button>
                    
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