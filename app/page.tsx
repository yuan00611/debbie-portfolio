"use client"
import Link from "next/link";
import Image from "next/image";
import { Brush } from "@/components/animate-ui/icons/brush";
import { Navigation } from "@/components/common/navigation/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import * as S from './page.css';


export default function Home() {
  return (
  <>
   <Navigation />
   <S.HomePageLayout>
   <S.HeroWrapper>
    <S.HeroTextWrapper>
      <S.HeroText>Debbie Chen</S.HeroText>
      <S.HeroSubtext>Senior Front-End Engineer</S.HeroSubtext>
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
          <S.CaseBadgeWrapper>
            <Badge variant="outline" className="mx-auto mb-4">Startup</Badge>
            <Badge variant="outline" className="mx-auto mb-4">From 0 to 1</Badge>
            <Badge className="mx-auto mb-4 bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">Fintech</Badge>
            <Badge className="mx-auto mb-4 bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Senior FE Lead</Badge>
          </S.CaseBadgeWrapper>
          <S.HeroContent>
            Athena Advisory built a Financial Agentic AI that can help clients manage their financial situation.
          </S.HeroContent>
           <Link href="/projects/athena" scroll={true}>
            <Button className="mt-4" >View case study</Button>
           </Link>
          
        </S.FeatureWorkTextWrapper>
      </S.FeatureWorkWrapper>

      <S.FeatureWorkWrapperReverse>
        
        <S.FeatureWorkTextWrapper>
          <S.FeatureWorkTextTitle>
            Dell Network Graph
          </S.FeatureWorkTextTitle>
          <S.CaseBadgeWrapper>
            <Badge variant="outline" className="mx-auto mb-4">Capstone</Badge>
            <Badge variant="outline" className="mx-auto mb-4">3 Months</Badge>
            <Badge className="mx-auto mb-4 bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300">Data Visualization</Badge>
            <Badge className="mx-auto mb-4 bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">UX Engineering</Badge>
          </S.CaseBadgeWrapper>
          <S.HeroContent>
            Dell Network Graph is an interactive network graphs with React for their next-generation enterprise visualization platform.
          </S.HeroContent>
          <Link href="/projects/dell" scroll={true}>
            <Button className="mt-4">View case study</Button>
          </Link>
          
        </S.FeatureWorkTextWrapper>
        <Image
          src="/Dell.png"
          alt="Dell portfolio image"
          width={700}
          height={700}
          priority
        />
      </S.FeatureWorkWrapperReverse>

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
          <S.CaseBadgeWrapper>
            <Badge variant="outline" className="mx-auto mb-4">Healthcare</Badge>
            <Badge className="mx-auto mb-4 bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Accessibility</Badge>
            <Badge className="mx-auto mb-4 bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">1st Place — AIR-U Competition 🎉</Badge>
            
          </S.CaseBadgeWrapper>
          <S.HeroContent>
            Joined AirU Accessibility Competition and help LifeLong Medical Care redesigned their website and won the first place of the competition.
          </S.HeroContent>
          <Link href="/projects/lifelong" scroll={true}>
            <Button className="mt-4">View case study</Button>
          </Link>
        </S.FeatureWorkTextWrapper>
      </S.FeatureWorkWrapper>

   </S.FeatureWorkContainer>

    </S.HomePageLayout>


  </>
  );
}
