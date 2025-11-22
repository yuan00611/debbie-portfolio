"use client"

import { TentTreeIcon, GraduationCapIcon, ScrollTextIcon, ScrollIcon } from 'lucide-react';
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
            <S.SectionTextWrapper>            
            <S.SectionText>
                Transmitting and manipulating information with innovative technologies is the most exciting thing to me. I enjoyed using different media to produce straightforward and intriguing content to convey information. Also, embracing new technologies is my daily life. I can&apos;t help learning and dig into them, like XR, 3D printing, AI, robotic, etc.
            </S.SectionText>
            <S.SectionText>
                Listening is another superpower of mine. My curiosity and empathy for humans drive me to understand their behaviors, contexts, thoughts, and stories. The more I listen, the more I hope to be the bridge between people and technology.
            </S.SectionText>
            <S.SectionText>
                I am passionate about education, the environment, sustainability, healthcare, and accessibility. I hope my love of the world and people can bring everyone a better life.
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
            {/* <S.SectionTextWrapper>
                <S.SectionItemContainer>
                    <S.SectionItemWrapper>
                        <S.IconWrapper><ScrollTextIcon color={mainColor} /></S.IconWrapper>
                        <S.SectionItemContentWrapper>
                            <S.SectionItemContent1>Inquisitive Question Generation for High Level Text Comprehension</S.SectionItemContent1>
                            <S.SectionItemContent2>In Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP) (pp. 6544-6555). ACL.</S.SectionItemContent2>
                        </S.SectionItemContentWrapper>
                    </S.SectionItemWrapper>

                    <S.SectionItemWrapper>
                        <S.IconWrapper><ScrollTextIcon color={mainColor} /></S.IconWrapper>
                        <S.SectionItemContentWrapper>
                            <S.SectionItemContent1>導入防跌科技的高齡智慧住宅服務設計 </S.SectionItemContent1>
                            <S.SectionItemContent2>輔具之友(45)，1-8頁</S.SectionItemContent2>
                        </S.SectionItemContentWrapper>
                    </S.SectionItemWrapper>

                    <S.SectionItemWrapper>
                        <S.IconWrapper><ScrollTextIcon color={mainColor} /></S.IconWrapper>
                        <S.SectionItemContentWrapper>
                            <S.SectionItemContent1>Bachelor of Arts in Library and Information Science </S.SectionItemContent1>
                            <S.SectionItemContent2>National Taiwan University, 2017</S.SectionItemContent2>
                        </S.SectionItemContentWrapper>
                    </S.SectionItemWrapper>
                </S.SectionItemContainer>
            </S.SectionTextWrapper> */}
        </S.SectionWrapper>

    </S.AboutPageLayout>
  
  </>)
}