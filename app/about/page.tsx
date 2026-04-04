"use client"

import Image from "next/image";
import { TentTreeIcon, GraduationCapIcon, ScrollIcon, ScrollTextIcon, PaintbrushIcon } from 'lucide-react';
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
                    I&apos;m a Senior Front-End Engineer with 5+ years building scalable, user-centered interfaces for data-intensive fintech applications. My background in Human-Conputer Interaction shapes how I approach engineering -- I think about systems holistically, prioritize accessibility, and care deeply about the real people using the products I build. 
                </S.SectionText>
                <S.SectionText>
                    Most recently, I led front-end architecture on a $4B+ AUM AI financial platform, where I built everything from design systems and data visualizations to AI chat interfaces — often in ambiguous, fast-moving environments where I had to bring both technical clarity and product thinking.
                </S.SectionText>
                <S.SectionText>
                   Outside of work, I care about accessibility, education, and building technology that genuinely improves people&apos;s lives.
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
  
  </>)
}