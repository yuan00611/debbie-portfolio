"use client"
import Link from "next/link";
import Image from "next/image";
import { Brush } from "@/components/animate-ui/icons/brush";
import { Navigation } from "@/components/common/navigation/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import * as S from './page.css';

// Brand-cohesive badge style helpers (OKLCH, no dark mode needed — site is light-only)
const badgeTeal = { backgroundColor: 'oklch(0.93 0.05 172)', color: 'oklch(0.38 0.09 165)', border: 'none' };
const badgeForest = { backgroundColor: 'oklch(0.92 0.04 165)', color: 'oklch(0.32 0.09 165)', border: 'none' };
const badgeAmber = { backgroundColor: 'oklch(0.94 0.06 82)', color: 'oklch(0.42 0.12 60)', border: 'none' };
const badgeMuted = { backgroundColor: 'oklch(0.93 0.015 172)', color: 'oklch(0.42 0.022 172)', border: '1px solid oklch(0.88 0.015 172)' };

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
      alt="Illustrated figure hiking in a forest landscape"
      width={420}
      height={420}
      priority
    />
   </S.HeroWrapper>

   <S.FeatureWorkContainer>
      <S.FeatureWorkTitleWrapper>
        <Brush size={18} animateOnView loop loopDelay={1000} />
        <S.FeatureWorkTitle>Featured Works</S.FeatureWorkTitle>
      </S.FeatureWorkTitleWrapper>

      <S.FeatureWorkWrapper>
        <Image
          src="/Athena.png"
          alt="Athena Advisory dashboard screenshot"
          width={640}
          height={480}
          priority
          style={{ borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
        />
        <S.FeatureWorkTextWrapper>
          <S.FeatureWorkTextTitle>
            Athena Advisory
          </S.FeatureWorkTextTitle>
          <S.CaseBadgeWrapper>
            <Badge style={badgeMuted}>Startup</Badge>
            <Badge style={badgeMuted}>From 0 to 1</Badge>
            <Badge style={badgeTeal}>Fintech</Badge>
            <Badge style={badgeForest}>Senior FE Lead</Badge>
          </S.CaseBadgeWrapper>
          <S.HeroContent>
            Led front-end architecture for a $4B+ AUM AI financial platform — from design system and data visualizations to an AI chat interface.
          </S.HeroContent>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Link href="/projects/athena" scroll={true}>
              <Button>View case study</Button>
            </Link>
            <Link href="/projects/athena-ai" scroll={true}>
              <Button variant="outline">Deep dive AI chat</Button>
            </Link>
          </div>
        </S.FeatureWorkTextWrapper>
      </S.FeatureWorkWrapper>

      <S.FeatureWorkWrapperReverse>
        <S.FeatureWorkTextWrapper>
          <S.FeatureWorkTextTitle>
            Dell Network Graph
          </S.FeatureWorkTextTitle>
          <S.CaseBadgeWrapper>
            <Badge style={badgeMuted}>Capstone</Badge>
            <Badge style={badgeMuted}>3 Months</Badge>
            <Badge style={badgeTeal}>Data Visualization</Badge>
            <Badge style={badgeForest}>UX Engineering</Badge>
          </S.CaseBadgeWrapper>
          <S.HeroContent>
            Built interactive network graphs with React for Dell&apos;s next-generation enterprise visualization platform.
          </S.HeroContent>
          <Link href="/projects/dell" scroll={true}>
            <Button>View case study</Button>
          </Link>
        </S.FeatureWorkTextWrapper>
        <Image
          src="/Dell.png"
          alt="Dell network graph visualization screenshot"
          width={640}
          height={480}
          priority
          style={{ borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
        />
      </S.FeatureWorkWrapperReverse>

      <S.FeatureWorkWrapper>
        <Image
          src="/LifeLong.png"
          alt="LifeLong Medical Care website redesign screenshot"
          width={640}
          height={480}
          priority
          style={{ borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
        />
        <S.FeatureWorkTextWrapper>
          <S.FeatureWorkTextTitle>
            LifeLong Medical Care
          </S.FeatureWorkTextTitle>
          <S.CaseBadgeWrapper>
            <Badge style={badgeMuted}>Healthcare</Badge>
            <Badge style={badgeTeal}>Accessibility</Badge>
            <Badge style={badgeAmber}>1st Place — AIR-U Competition</Badge>
          </S.CaseBadgeWrapper>
          <S.HeroContent>
            Redesigned LifeLong Medical Care&apos;s website for the AirU Accessibility Competition — and won first place.
          </S.HeroContent>
          <Link href="/projects/lifelong" scroll={true}>
            <Button>View case study</Button>
          </Link>
        </S.FeatureWorkTextWrapper>
      </S.FeatureWorkWrapper>

   </S.FeatureWorkContainer>

    </S.HomePageLayout>
  </>
  );
}
