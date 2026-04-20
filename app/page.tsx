"use client"
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/common/navigation/navigation";
import * as S from './page.css';
import AthenaPng from '../public/Athena.png';
import DellPng from '../public/Dell.png';
import LifeLongPng from '../public/LifeLong.png';

export default function Home() {
  return (
    <>
      <Navigation />
      <S.PageRoot>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <S.HeroSection>
          <S.HeroEye>Frontend &amp; UX engineer · senior · based in austin</S.HeroEye>
          <S.HeroH1>
            Frontend &amp; UX engineer building <em>trustworthy</em> AI interfaces.
          </S.HeroH1>
          <S.HeroLede>
            I work at the seam where machine intelligence meets human decisions — designing
            interfaces people trust to handle their <em>money</em>, their <em>health</em>,
            and their <em>safety</em>.
          </S.HeroLede>
        </S.HeroSection>

        {/* ── Tier 1: Featured work ────────────────────────────────────── */}
        <S.PageSection>
          <S.SecHead>
            <S.SecTitle>Featured work</S.SecTitle>
            <S.SecMeta>Shipped · at scale</S.SecMeta>
          </S.SecHead>

          <S.FeaturedGrid>
            {/* Athena — wide: WideCardWrapper is the grid item with grid-column: 1/-1 */}
            <S.WideCardWrapper>
              <Link href="/projects/athena">
                <S.FeaturedCardWide>
                  <div style={{ aspectRatio: '21/9', borderRadius: '8px', marginBottom: '22px', overflow: 'hidden', background: 'oklch(0.93 0.015 172)', padding: '24px' }}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Image
                        src={AthenaPng}
                        alt="Athena Advisory dashboard"
                        fill
                        placeholder="blur"
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 820px) 100vw, 1024px"
                        priority
                      />
                    </div>
                  </div>
                  <S.CardTags>
                    <S.CardTag>Fintech · AI</S.CardTag>
                    <S.CardTag $neutral>Startup · 0 to 1</S.CardTag>
                    <S.CardTag $neutral>Senior FE lead</S.CardTag>
                  </S.CardTags>
                  <S.CardName>Athena Advisory</S.CardName>
                  <S.CardDesc>
                    Led front-end architecture for a $4B+ AUM AI financial platform — from design
                    system and data visualizations to a conversational AI chat interface.
                  </S.CardDesc>
                  <S.CardLink>View case study →</S.CardLink>
                </S.FeaturedCardWide>
              </Link>
            </S.WideCardWrapper>

            {/* Dell — half */}
            <S.HalfCardWrapper>
              <Link href="/projects/dell">
                <S.FeaturedCard>
                  <div style={{ aspectRatio: '4/3', borderRadius: '8px', marginBottom: '22px', overflow: 'hidden', background: 'oklch(0.93 0.015 172)', padding: '24px' }}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Image
                        src={DellPng}
                        alt="Dell network graph visualization"
                        fill
                        placeholder="blur"
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 820px) 100vw, 512px"
                        priority
                      />
                    </div>
                  </div>
                  <S.CardTags>
                    <S.CardTag>Data viz</S.CardTag>
                    <S.CardTag $neutral>UX engineering</S.CardTag>
                  </S.CardTags>
                  <S.CardName>Dell Network Graph</S.CardName>
                  <S.CardDesc>
                    Interactive network graphs built in React for Dell&apos;s next-gen enterprise
                    visualization platform.
                  </S.CardDesc>
                  <S.CardLink>View case study →</S.CardLink>
                </S.FeaturedCard>
              </Link>
            </S.HalfCardWrapper>

            {/* LifeLong — half */}
            <S.HalfCardWrapper>
              <Link href="/projects/lifelong">
                <S.FeaturedCard>
                  <div style={{ aspectRatio: '4/3', borderRadius: '8px', marginBottom: '22px', overflow: 'hidden', background: 'oklch(0.93 0.015 172)', padding: '24px' }}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Image
                        src={LifeLongPng}
                        alt="LifeLong Medical Care website redesign"
                        fill
                        placeholder="blur"
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 820px) 100vw, 512px"
                        priority
                      />
                    </div>
                  </div>
                  <S.CardTags>
                    <S.CardTag>Healthcare</S.CardTag>
                    <S.CardTag $neutral>Accessibility · 1st place</S.CardTag>
                  </S.CardTags>
                  <S.CardName>LifeLong Medical Care</S.CardName>
                  <S.CardDesc>
                    WCAG 2.0 AA redesign — from user interviews and card sorting to production
                    code. 1st place at AIR-U.
                  </S.CardDesc>
                  <S.CardLink>View case study →</S.CardLink>
                </S.FeaturedCard>
              </Link>
            </S.HalfCardWrapper>
          </S.FeaturedGrid>
        </S.PageSection>

        {/* ── Tier 2: A point of view ──────────────────────────────────── */}
        <S.PageSection>
          <S.SecHead>
            <S.SecTitle>A point of view</S.SecTitle>
            <S.SecMeta>Thesis · research · exploration</S.SecMeta>
          </S.SecHead>

          <S.ThesisBlock>
            <S.ThesisEye>Trust in AI — three explorations</S.ThesisEye>
            <S.ThesisTitle>
              What does a <em>trustworthy</em> AI interface actually look like?
            </S.ThesisTitle>
            <S.ThesisLede>
              Three projects, three versions of the same question — each testing a different
              aspect of how humans learn to trust systems that think for them.
            </S.ThesisLede>

            <S.PillarGrid>
              <Link href="/projects/career-copilot" style={{ textDecoration: 'none' }}>
                <S.PillarCard>
                  <S.PillarAngle>REASONING</S.PillarAngle>
                  <S.PillarName>Career Copilot</S.PillarName>
                  <S.PillarQ>
                    When AI gives you a score, how do you earn the right to be believed?
                  </S.PillarQ>
                </S.PillarCard>
              </Link>

              <Link href="/projects/tesla" style={{ textDecoration: 'none' }}>
                <S.PillarCard>
                  <S.PillarAngle>CALIBRATION</S.PillarAngle>
                  <S.PillarName>Tesla Autonomous</S.PillarName>
                  <S.PillarQ>
                    When should the AI lead, and when does the human need to take over?
                  </S.PillarQ>
                </S.PillarCard>
              </Link>

              <Link href="/projects/eldercare" style={{ textDecoration: 'none' }}>
                <S.PillarCard>
                  <S.PillarAngle>INVISIBILITY</S.PillarAngle>
                  <S.PillarName>Eldercare Smart Home</S.PillarName>
                  <S.PillarQ>
                    Can an 80-year-old trust a system they never see until it saves them?
                  </S.PillarQ>
                </S.PillarCard>
              </Link>
            </S.PillarGrid>
          </S.ThesisBlock>
        </S.PageSection>

        {/* ── Tier 3: Archive — hidden for now ─────────────────────────── */}

        {/* ── Footer ───────────────────────────────────────────────────── */}
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

      </S.PageRoot>
    </>
  );
}
