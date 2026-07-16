"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IntroOverlay } from "@/components/intro/IntroOverlay";
import { Navigation } from "@/components/common/navigation/navigation";
import { CapabilityStrip } from "@/components/hero/CapabilityStrip";
import * as S from './page.css';
import AthenaPng from '../public/Athena.png';
import DellPng from '../public/Dell.png';
import LifeLongPng from '../public/LifeLong.png';

const mono = "var(--font-jetbrains-mono), ui-monospace, monospace";
const rise = (d: number): React.CSSProperties => ({
  animation: `hero-riseIn .7s cubic-bezier(0.22,1,0.36,1) both ${d}s`,
});

export default function Home() {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <>
      <IntroOverlay />
      {replayKey > 0 && <IntroOverlay key={replayKey} force />}
      <Navigation onReplay={() => setReplayKey(k => k + 1)} />
      <S.PageRoot>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <S.HeroWrapper>
          {/* ambient dots */}
          <div aria-hidden style={{ position: "absolute", left: "13%", top: "22%", width: 6, height: 6, borderRadius: 99, background: "var(--brand-teal)", opacity: .35, animation: "k-drift 6s ease-in-out infinite" }} />
          <div aria-hidden style={{ position: "absolute", right: "12%", bottom: "30%", width: 8, height: 8, borderRadius: 99, border: "1px solid var(--brand-warm)", opacity: .3, animation: "k-driftSlow 7s ease-in-out infinite" }} />
          <div aria-hidden style={{ position: "absolute", right: "22%", top: "18%", color: "var(--brand-warm)", opacity: .4, fontSize: 13, animation: "k-drift 5s ease-in-out infinite" }}>✦</div>

          {/* replay orb — flies across the strip to the name */}
          {replayKey > 0 && (
            <div key={replayKey} aria-hidden style={{
              position: "absolute", width: 9, height: 9, borderRadius: 99,
              background: "var(--brand-warm)", zIndex: 6,
              boxShadow: "0 0 10px 3px rgba(255,176,124,0.4)",
              animation: "hero-orbFly 2.4s cubic-bezier(0.22,1,0.36,1) both .2s",
            }} />
          )}

          <div style={{ ...rise(0.05), fontFamily: mono, fontSize: 12, letterSpacing: "0.2em", color: "var(--brand-teal)", marginBottom: 14 }}>
            DESIGN · PROTOTYPE · ENGINEER
          </div>

          <h1 style={{
            ...rise(0.16),
            fontSize: "clamp(44px, 6vw, 64px)", fontWeight: 700,
            letterSpacing: "-0.02em", margin: 0, lineHeight: 1.05,
            color: "var(--foreground)",
            fontFamily: "var(--font-fraunces), Georgia, serif",
          }}>
            Debbie Chen
            <span aria-hidden style={{
              display: "inline-block", width: 4, height: "0.72em",
              marginLeft: 10, borderRadius: 2, background: "var(--brand-warm)",
              verticalAlign: "-0.06em", animation: "k-blink 1.1s step-end infinite",
            }} />
          </h1>

          <div style={{ ...rise(0.26), fontSize: "clamp(15px, 2.2vw, 19px)", fontWeight: 500, color: "var(--muted-foreground)", marginTop: 10 }}>
            Design Engineer &amp; Rapid Prototyper
          </div>

          <p style={{
            ...rise(0.36),
            fontSize: "clamp(13px, 1.8vw, 15px)", color: "var(--muted-foreground)",
            maxWidth: 560, margin: "14px auto 0", lineHeight: 1.65,
          }}>
            I turn human needs, emerging technology, and complex systems into clear,
            trustworthy, production-ready experiences.
          </p>

          <div style={rise(0.6)}>
            <CapabilityStrip />
          </div>
        </S.HeroWrapper>

        {/* ── Tier 1: Featured work ────────────────────────────────────── */}
        <S.PageSection>
          <S.SecHead>
            <S.SecTitle>Featured work</S.SecTitle>
            <S.SecMeta>Shipped · at scale</S.SecMeta>
          </S.SecHead>

          <S.FeaturedGrid>
            {/* Athena — wide */}
            <S.WideCardWrapper>
              <Link href="/projects/athena">
                <S.FeaturedCardWide>
                  <div style={{ aspectRatio: '21/9', borderRadius: '8px', marginBottom: '22px', overflow: 'hidden', background: 'var(--raised-2)', padding: '24px' }}>
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
                  <div style={{ aspectRatio: '4/3', borderRadius: '8px', marginBottom: '22px', overflow: 'hidden', background: 'var(--raised-2)', padding: '24px' }}>
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
                  <div style={{ aspectRatio: '4/3', borderRadius: '8px', marginBottom: '22px', overflow: 'hidden', background: 'var(--raised-2)', padding: '24px' }}>
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
