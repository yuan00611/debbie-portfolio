"use client"

import Image from "next/image";
import { TentTreeIcon, GraduationCapIcon, ScrollIcon, ScrollTextIcon, PaintbrushIcon, SparklesIcon, CompassIcon } from 'lucide-react';
import { Navigation } from "@/components/common/navigation/navigation";
import * as S from './page.css';

export default function About() {
    const mainColor = '#3DCAAE';

  return (<>
  <Navigation />
    <S.AboutPageLayout>
        <S.AboutTitle>About Me</S.AboutTitle>
        <S.AboutDeco />

        <S.SectionWrapper>
            <S.SectionTitleWrapper>
                <TentTreeIcon color={mainColor} />
                <S.SectionTitle>Summary</S.SectionTitle>
            </S.SectionTitleWrapper>
            <S.SummaryWrapper>
                <S.SectionTextWrapper> 
                    <S.SectionText>
                        I design and build interfaces that make complex technology easier to use, easier to understand, and worthy of trust.
                        Whether the medium is AI, data visualization, immersive media, or a design system, the question underneath is always the same: <strong>how can technology help people feel more capable, informed, and in control?</strong>
                    </S.SectionText>
                    <S.SectionText>
                        What I care about most:
                    </S.SectionText>
                    <S.SectionText>
                        🧭 <strong>Use with ease</strong> — intuitive, accessible interfaces that survive real-world complexity, from financial dashboards to WCAG-compliant healthcare sites
                    </S.SectionText>
                    <S.SectionText>
                        🔭 <strong>Open the imagination</strong> — data visualization, immersive media, and new interaction patterns that expand what people can see, ask, and think
                    </S.SectionText>
                    <S.SectionText>
                        🤝 <strong>Calibrate trust</strong> — helping people understand what an AI system knows, what it doesn&apos;t, why it recommends — and when their own judgment should stay in the loop
                    </S.SectionText>
                    <S.SectionText>
                        Most recently at Athena Advisory, I helped transform a traditional financial platform into an AI-first experience, working on real-time interfaces, streaming responses, and interaction patterns that connect language with data.
                    </S.SectionText>
                    <S.SectionText>
                        As AI becomes a more powerful amplifier of human knowledge, I want to build the interfaces that keep humans confident inside the loop — intuitive, transparent, and empowering.
                    </S.SectionText>

                </S.SectionTextWrapper>
                <Image
                    src="/0.jpg"
                    alt="Debbie photo"
                    width={240}
                    height={240}
                    priority
                    style={{borderRadius: '50%', maxWidth: '240px', maxHeight: '240px', minHeight: '240px', minWidth: '240px'}}
                />
            </S.SummaryWrapper>
        </S.SectionWrapper>

        <S.SectionWrapper>
            <S.SectionTitleWrapper>
                <SparklesIcon color={mainColor} />
                <S.SectionTitle>Where it started</S.SectionTitle>
            </S.SectionTitleWrapper>
            <S.SectionTextWrapper>
                <S.SectionText>
                    Randy Pausch was one of my earliest inspirations in Human-Computer Interaction. Watching <em>The Last Lecture</em>, what struck me wasn&apos;t only his passion for dreams — it was the way he connected technology, education, games, and creativity back to people. He convinced me that technology can be more than a tool for efficiency: it can be a medium for learning, imagination, and helping people pursue what matters to them.
                </S.SectionText>
                <S.SectionText>
                    Two beliefs from that lecture never left: pursue ambitious dreams, and build things real enough to change someone&apos;s life. I want to create technology that doesn&apos;t make people feel smaller in front of complexity — but more capable, more curious, and more able to imagine what&apos;s possible.
                </S.SectionText>
            </S.SectionTextWrapper>
        </S.SectionWrapper>

        <S.SectionWrapper>
            <S.SectionTitleWrapper>
                <CompassIcon color={mainColor} />
                <S.SectionTitle>Three threads</S.SectionTitle>
            </S.SectionTitleWrapper>
            <S.SectionTextWrapper>
                <S.SectionText>
                    My path looks winding on paper — library science, civil engineering, HCI. It was actually one question, pulled from three directions.
                </S.SectionText>
                <S.SectionText>
                    <strong>01 · Understanding people</strong> — Interviews, surveys, personas, contextual inquiry — and a cognitive science program on top of my HCI degree — because before designing anything, I wanted every possible way of understanding how people think, feel, and decide to trust.
                </S.SectionText>
                <S.SectionText>
                    <strong>02 · Making complexity visible</strong> — Library &amp; Information Science taught me how knowledge is organized; a knowledge management program taught me how it&apos;s kept alive. At Numeracy Lab (數感實驗室) I learned to turn math into data stories the public actually read — like verifying Three Kingdoms legends with mathematics, published on Books.com.tw (<a href="https://okapi.books.com.tw/article/9551" target="_blank" rel="noopener noreferrer" style={{ color: mainColor, textDecoration: 'none', borderBottom: '1px solid currentColor' }}>關雲長</a> · <a href="https://okapi.books.com.tw/article/9495" target="_blank" rel="noopener noreferrer" style={{ color: mainColor, textDecoration: 'none', borderBottom: '1px solid currentColor' }}>趙雲</a>). D3, WebGL, information architecture, and frontend craft are how I turn vast, abstract systems into something a person can see, navigate, and remember.
                </S.SectionText>
                <S.SectionText>
                    <strong>03 · Designing trustworthy intelligence</strong> — To me, ML and AI are amplifiers of collective human intelligence — and an amplifier also amplifies uncertainty, bias, and power gaps. From publishing NLP research at EMNLP to building Athena&apos;s AI chat, this thread is about interfaces that help people calibrate trust instead of demanding it.
                </S.SectionText>
                <S.SectionText>
                    Three threads, one job: bridge the gap between humans and technology — and make the crossing feel worth it.
                </S.SectionText>
            </S.SectionTextWrapper>
        </S.SectionWrapper>

          <S.SectionWrapper>
            <S.SectionTitleWrapper>
                <GraduationCapIcon color={mainColor} />
                <S.SectionTitle>Education</S.SectionTitle>
            </S.SectionTitleWrapper>
            <S.SectionTextWrapper>
                <S.SectionItemContainer>
                    <S.SectionItemWrapper>
                        <S.IconWrapper><GraduationCapIcon color={mainColor} /></S.IconWrapper>
                        <S.SectionItemContentWrapper>
                            <S.SectionItemContent1>Master of Science in Human-Computer Interaction (Information Studies)</S.SectionItemContent1>
                            <S.SectionItemContent2>University of Texas at Austin, 2021</S.SectionItemContent2>
                        </S.SectionItemContentWrapper>
                    </S.SectionItemWrapper>

                    <S.SectionItemWrapper>
                        <S.IconWrapper><GraduationCapIcon color={mainColor} /></S.IconWrapper>
                        <S.SectionItemContentWrapper>
                            <S.SectionItemContent1>Master of Science in Computer-Aided Engineering (Civil Engineering) </S.SectionItemContent1>
                            <S.SectionItemContent2>National Taiwan University, 2019</S.SectionItemContent2>
                        </S.SectionItemContentWrapper>
                    </S.SectionItemWrapper>

                    <S.SectionItemWrapper>
                        <S.IconWrapper><GraduationCapIcon color={mainColor} /></S.IconWrapper>
                        <S.SectionItemContentWrapper>
                            <S.SectionItemContent1>Bachelor of Arts in Library and Information Science </S.SectionItemContent1>
                            <S.SectionItemContent2>National Taiwan University, 2017</S.SectionItemContent2>
                        </S.SectionItemContentWrapper>
                    </S.SectionItemWrapper>
                </S.SectionItemContainer>
            </S.SectionTextWrapper>
        </S.SectionWrapper>

                <S.SectionWrapper>
            <S.SectionTitleWrapper>
                <ScrollIcon color={mainColor} />
                <S.SectionTitle>Publications</S.SectionTitle>
            </S.SectionTitleWrapper>
            <S.SectionText>
                During my HCI graduate studies, I contributed to research across NLP, accessibility, and human factors.
            </S.SectionText>
            <S.SectionSubtitle>Journal</S.SectionSubtitle>
            <hr />
            <S.PublicationWrapper>
                <p style={{margin:0, padding:0}}>陳俊杉，陳嘉懿，<b>陳德元</b>（2019年12月）。導入防跌科技的高齡智慧住宅服務設計。<i>輔具之友</i>(45)，1-8頁。</p>
                <S.PublicationLink target='_blank' href='https://newrepat.sfaa.gov.tw/home/repat-friend/detail/2c90e4c76ea5c720016ea6657e8a06de' > <ScrollTextIcon color={mainColor} /> Article</S.PublicationLink>
            </S.PublicationWrapper>

            <S.SectionSubtitle>Conference Paper</S.SectionSubtitle>
            <hr />
            <S.PublicationWrapper>
                <p style={{margin:0, padding:0}}>Ko, W. J., <b>Chen, T. Y. </b> , Huang, Y., Durrett, G., & Li, J. J. (2020). Inquisitive Question Generation for High Level Text Comprehension. In <i> Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP) </i> (pp. 6544-6555). ACL.</p>
                <S.PublicationLink target='_blank' href='https://aclanthology.org/2020.emnlp-main.530/' > <ScrollTextIcon color={mainColor} /> Article</S.PublicationLink>
            </S.PublicationWrapper>
            <S.PublicationWrapper>
                <p style={{margin:0, padding:0}}><b>Chen, T. Y.</b>, Liu, H. C., Hsu, C. Y.(2017, November). Film language analysis in society news-A case study of The New York Times. In <i> 2017 PNC Annual Conference and Joint Meetings </i>. Tainan, Taiwan. </p>
                <S.PublicationLink target='_blank' href='https://ieeexplore.ieee.org/abstract/document/8203523' > <ScrollTextIcon color={mainColor} /> Article</S.PublicationLink>
            </S.PublicationWrapper>
            <S.PublicationWrapper>
                <p style={{margin:0, padding:0}}>Chou, K. T., Hou, H., Shen, M., <b> Chen, T. Y. </b>, Liu, C., & Wu, P. J. (2016, May). Human and Dog: Explore the Game Design of Unequal Communicative Patterns. In <i> Proceedings of the 2016 CHI Conference Extended Abstracts on Human Factors in Computing Systems </i> (pp. 156-159). ACM.</p>
                <S.PublicationLink target='_blank' href='https://dl.acm.org/doi/10.1145/2851581.2890373' > <ScrollTextIcon color={mainColor} /> Article</S.PublicationLink>
            </S.PublicationWrapper>

            <S.SectionSubtitle>Government Publication</S.SectionSubtitle>
            <hr />
            <S.PublicationWrapper>
                <p style={{margin:0, padding:0}}>陳俊杉等（2019年1月）。智慧住宅高齡照護設計指引。內政部建築研究所。</p>
                <S.PublicationLink target='_blank' href='https://www.abri.gov.tw/News_Content_Table.aspx?n=862&s=39672' > <ScrollTextIcon color={mainColor} /> Article</S.PublicationLink>
            </S.PublicationWrapper>

            <S.SectionSubtitle>Poster</S.SectionSubtitle>
            <hr />
            <S.PublicationWrapper>
                <p style={{margin:0, padding:0}}>Hsu, C. Y., <b> Chen, T. Y. </b>, Liu, H. C.(2017, August). Film language analysis in society news-A case study of The New York Times. Paper accepted for Poster Presentation at TAICHI&apos;17. Tainan, Taiwan. </p>
                 <S.PublicationLinkWrapper>
                <S.PublicationLink target='_blank' href='https://yuan00611.github.io/document/TAICHI_2017paper.pdf' > <ScrollTextIcon color={mainColor} /> Article</S.PublicationLink>
                |
                <S.PublicationLink target='_blank' href='https://yuan00611.github.io/document/TAICHI_2017poster.pdf' > <PaintbrushIcon color={mainColor} /> Poster</S.PublicationLink> 
                </S.PublicationLinkWrapper>
                
            </S.PublicationWrapper>
            <S.PublicationWrapper>
                <p style={{margin:0, padding:0}}><b>Chen, T.-Y.</b>, Chou, W.-Y., Hsu, C.-Y., Wong, C.-A., Kuo, C.-J. & Lin, W. (2016, August). Cue Card - Bus Availability Reminder, Paper accepted for Poster Presentation at TAICHI&apos;16, Taipei, Taiwan.</p>
                <S.PublicationLinkWrapper>
                <S.PublicationLink target='_blank' href='https://yuan00611.github.io/document/TAICHI_2016paper.pdf' > <ScrollTextIcon color={mainColor} /> Article</S.PublicationLink> 
                |
                <S.PublicationLink target='_blank' href='https://yuan00611.github.io/document/TAICHI_2016poster.pdf' > <PaintbrushIcon color={mainColor} /> Poster</S.PublicationLink> 
                </S.PublicationLinkWrapper>
            </S.PublicationWrapper>
        </S.SectionWrapper>

    </S.AboutPageLayout>

    <S.HomeFooter>
        <div>© 2026 Debbie Chen</div>
        <div>
        <a href="mailto:yuan0061@gmail.com">yuan0061@gmail.com</a>
        {' · '}
        <a href="https://www.linkedin.com/in/te-yuan-debbie-chen/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {' · '}
        <a href="https://github.com/yuan00611" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
    </S.HomeFooter>
  
  </>)
}