"use client"
// import Link from "next/link";
import Image from "next/image";
import { Brush } from "@/components/animate-ui/icons/brush";
import { Navigation } from "@/components/common/navigation/navigation";
import { Button } from "@/components/ui/button";

import * as S from './page.css';


export default function Home() {
  return (
  <>
   <Navigation />
   <S.HomePageLayout>
   <S.HeroWrapper>
    <S.HeroTextWrapper>
      <S.HeroText>Debbie Chen</S.HeroText>
      <S.HeroSubtext>UX Engineer</S.HeroSubtext>
      <S.HeroContent>I design and build interfaces that feel intuitive, scalable and accessible.</S.HeroContent>
    </S.HeroTextWrapper>
    
    <Image
      src="/hiking.svg"
      alt="Hero logo"
      width={450}
      height={450}
      priority
    />
   </S.HeroWrapper>

   <S.FeatureWorkContainer>
      <S.FeatureWorkTitleWrapper>
        <Brush size={24} animateOnView loop loopDelay={1000} />
        <S.FeatureWorkTitle>Featured Works</S.FeatureWorkTitle>
      </S.FeatureWorkTitleWrapper>

      <S.FeatureWorkWrapper>
        <Image
          src="/Athena.png"
          alt="Athena portfolio image"
          width={700}
          height={700}
          priority
        />
        <S.FeatureWorkTextWrapper>
          <S.FeatureWorkTextTitle>
            Athena Advisory
          </S.FeatureWorkTextTitle>
          <S.HeroContent>
            Athena Advisory built a Financial Agentic AI that can help clients manage their financial situation.
          </S.HeroContent>
          <Button className="mt-4">View case study</Button>
        </S.FeatureWorkTextWrapper>
      </S.FeatureWorkWrapper>

      <S.FeatureWorkWrapper>
        
        <S.FeatureWorkTextWrapper>
          <S.FeatureWorkTextTitle>
            Dell Network Graph
          </S.FeatureWorkTextTitle>
          <S.HeroContent>
            Dell Network Graph is an interactive network graphs with React for their next-generation enterprise visualization platform.
          </S.HeroContent>
          <Button className="mt-4">View case study</Button>
        </S.FeatureWorkTextWrapper>
        <Image
          src="/Dell.png"
          alt="Dell portfolio image"
          width={700}
          height={700}
          priority
        />
      </S.FeatureWorkWrapper>

      <S.FeatureWorkWrapper>
        <Image
          src="/LifeLong.png"
          alt="LifeLong portfolio image"
          width={700}
          height={700}
          priority
        />
        <S.FeatureWorkTextWrapper>
          <S.FeatureWorkTextTitle>
            LifeLong Medical Care 
          </S.FeatureWorkTextTitle>
          <S.HeroContent>
            Joined AirU Accessibility Competition and help LifeLong Medical Care redesigned their website and won the first place of the competition.
          </S.HeroContent>
          <Button className="mt-4">View case study</Button>
        </S.FeatureWorkTextWrapper>
      </S.FeatureWorkWrapper>

   </S.FeatureWorkContainer>

    </S.HomePageLayout>


  </>
  );
}
