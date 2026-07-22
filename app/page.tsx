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
import WwbPng from '../public/WWB.png';
import BaseballPng from '../public/Baseball-map.png';
import type { StaticImageData } from 'next/image';

const mono = "var(--font-jetbrains-mono), ui-monospace, monospace";
const rise = (d: number): React.CSSProperties => ({
  animation: `hero-riseIn .7s cubic-bezier(0.22,1,0.36,1) both ${d}s`,
});

export default function Home() {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <>
      {/* <IntroOverlay /> */}
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
            UX · DESIGN · PROTOTYPE · MOTION
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
            Frontend Engineer &amp; Design Technologist
          </div>

          <p style={{
            ...rise(0.36),
            fontSize: "clamp(13px, 1.8vw, 15px)", color: "var(--muted-foreground)",
            maxWidth: 560, margin: "14px auto 0", lineHeight: 1.65,
          }}>
            I build interfaces that make complex systems easier to use, honest enough to
            trust — and leave people feeling more capable, even inspired. Technology is
            a medium, not the destination.
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

          <S.SecLede>
            Production systems where clarity had to survive scale — a $4B fintech
            platform, enterprise data graphs, and healthcare access.
          </S.SecLede>

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
                    system and data visualizations to a conversational AI interface people trust
                    with their money.
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
                    Network graphs that make 60K-node enterprise systems readable — built in
                    React and D3 for Dell&apos;s next-gen visualization platform.
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
            <S.ThesisEye>Trust in systems — four explorations</S.ThesisEye>
            <S.ThesisTitle>
              What does a <em>trustworthy</em> interface actually look like?
            </S.ThesisTitle>
            <S.ThesisLede>
              AI amplifies human knowledge — and amplifies its own uncertainty with it.
              Four explorations of calibrated trust: helping people lean on a system when
              it&apos;s right, and take over when it isn&apos;t.
            </S.ThesisLede>

            <S.PillarGrid>
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

              <Link href="/projects/inquisitive" style={{ textDecoration: 'none' }}>
                <S.PillarCard>
                  <S.PillarAngle>CURIOSITY</S.PillarAngle>
                  <S.PillarName>INQUISITIVE (EMNLP &apos;20)</S.PillarName>
                  <S.PillarQ>
                    Can a model learn to wonder — to ask what a curious reader would ask?
                  </S.PillarQ>
                </S.PillarCard>
              </Link>

              <Link href="/projects/360-film-language" style={{ textDecoration: 'none' }}>
                <S.PillarCard>
                  <S.PillarAngle>GUIDANCE</S.PillarAngle>
                  <S.PillarName>360° Film Language</S.PillarName>
                  <S.PillarQ>
                    When the audience can look anywhere, how does the story make sure they understand?
                  </S.PillarQ>
                </S.PillarCard>
              </Link>
            </S.PillarGrid>

            <S.ArchiveList style={{ marginTop: 28 }}>
              <Link href="/projects/career-copilot" style={{ textDecoration: 'none' }}>
                <S.ArchiveRow>
                  <S.ArchiveName>Career Copilot — when AI gives you a score, how do you earn the right to be believed?</S.ArchiveName>
                  <S.ArchiveMeta>AI · UX case study → </S.ArchiveMeta>
                </S.ArchiveRow>
              </Link>
              <Link href="/projects/vizwiz" style={{ textDecoration: 'none' }}>
                <S.ArchiveRow>
                  <S.ArchiveName>VizWiz Answerability — can a model tell when a blind user&apos;s question can&apos;t be answered?</S.ArchiveName>
                  <S.ArchiveMeta>Multimodal ML · 2nd place → </S.ArchiveMeta>
                </S.ArchiveRow>
              </Link>
              <Link href="/projects/mbti" style={{ textDecoration: 'none' }}>
                <S.ArchiveRow>
                  <S.ArchiveName>MBTI from Language — RNNs guessing personality from how you write</S.ArchiveName>
                  <S.ArchiveMeta>NLP · Best-project vote → </S.ArchiveMeta>
                </S.ArchiveRow>
              </Link>
              <Link href="/projects/image-captions" style={{ textDecoration: 'none' }}>
                <S.ArchiveRow>
                  <S.ArchiveName>Image Caption Variance — asking the crowd what matters in a picture</S.ArchiveName>
                  <S.ArchiveMeta>Crowdsourcing · CV → </S.ArchiveMeta>
                </S.ArchiveRow>
              </Link>
            </S.ArchiveList>
          </S.ThesisBlock>
        </S.PageSection>

        {/* ── Tier 3: Interactive & immersive ──────────────────────────── */}
        <S.PageSection>
          <S.SecHead>
            <S.SecTitle>Interactive &amp; immersive</S.SecTitle>
            <S.SecMeta>Data viz · Games · VR · AR — 2016–now</S.SecMeta>
          </S.SecHead>

          <S.SecLede>
            Before I designed for AI, I was designing for presence — VR, AR, and games
            that put people inside an idea. New media are how interfaces learn new patterns.
          </S.SecLede>

          <S.FeaturedGrid>
            {/* Taiwan Players Abroad — half */}
            <S.HalfCardWrapper>
              <Link href="/projects/baseball-players-tw">
                <S.FeaturedCard>
                  <div style={{ aspectRatio: '4/3', borderRadius: '8px', marginBottom: '22px', overflow: 'hidden', background: 'var(--raised-2)' }}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Image
                        src={BaseballPng}
                        alt="Taiwan Players Abroad — a dark US map under night-game lighting, with a green Taiwan marker on the left and dotted arcs crossing the Pacific to a constellation of red pins marking where Taiwanese ballplayers are playing"
                        fill
                        placeholder="blur"
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 820px) 100vw, 512px"
                      />
                    </div>
                  </div>
                  <S.CardTags>
                    <S.CardTag>Data viz</S.CardTag>
                    <S.CardTag $neutral>D3 map</S.CardTag>
                    <S.CardTag $neutral>Live data</S.CardTag>
                  </S.CardTags>
                  <S.CardName>Taiwan Players Abroad (旅美幫)</S.CardName>
                  <S.CardDesc>
                    Two dozen Taiwanese ballplayers, scattered from Rookie ball to the majors —
                    one live map that answers, at a glance, who&apos;s on tonight and where.
                  </S.CardDesc>
                  <S.CardLink>View case study →</S.CardLink>
                </S.FeaturedCard>
              </Link>
            </S.HalfCardWrapper>

            {/* Where Words Begin — half */}
            <S.HalfCardWrapper>
              <Link href="/projects/where-words-begin">
                <S.FeaturedCard>
                  <div style={{ aspectRatio: '4/3', borderRadius: '8px', marginBottom: '22px', overflow: 'hidden', background: 'var(--raised-2)' }}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      <Image
                        src={WwbPng}
                        alt="Where Words Begin title screen — ink-wash mountains in mist"
                        fill
                        placeholder="blur"
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 820px) 100vw, 512px"
                      />
                    </div>
                  </div>
                  <S.CardTags>
                    <S.CardTag>Game design</S.CardTag>
                    <S.CardTag $neutral>Immersive</S.CardTag>
                    <S.CardTag $neutral>Procedural art</S.CardTag>
                  </S.CardTags>
                  <S.CardName>Where Words Begin (拾字旅人)</S.CardName>
                  <S.CardDesc>
                    A game about how Chinese characters were born — earn each word by truly
                    observing the world, in a valley where every pixel is painted in code.
                  </S.CardDesc>
                  <S.CardLink>View case study →</S.CardLink>
                </S.FeaturedCard>
              </Link>
            </S.HalfCardWrapper>

          </S.FeaturedGrid>

          <S.MiniGrid>
            {([
              {
                name: 'The Making of Wind (海造的風機)', tag: 'VR news · HTC Vive', href: '/projects/wind-turbine-vr',
                img: 'https://yuan00611.github.io/portfolio/g04_windturbine/img/g4_intro.png',
                alt: 'The Making of Wind — VR headset key art at the exhibition entrance',
              },
              {
                name: 'Is Vincent Alright (梵谷還好)', tag: 'VR escape · HTC Vive', href: '/projects/is-vincent-alright',
                img: 'https://yuan00611.github.io/img/portfolio/g5_vangogh.png',
                alt: 'Is Vincent Alright — 梵谷還好 game logo with a grey question mark',
              },
              {
                name: 'Carbon Footprint Adventure', tag: 'VR · Oculus', href: '/projects/carbon-footprint',
                img: 'https://yuan00611.github.io/portfolio/g06_cfadventure/img/g6_intro.png',
                alt: 'Carbon Footprint Adventure — low-poly Arctic scene with polar bears on ice floes',
              },
              {
                name: 'Human and Dog', tag: 'Asymmetric · PC', href: '/projects/human-and-dog',
                img: 'https://yuan00611.github.io/img/portfolio/g1_hnd.png',
                alt: 'Human and Dog title card — a man and a dog in an industrial escape room',
              },
            ] as { name: string; tag: string; href: string; external?: boolean; thumb?: string; img?: string | StaticImageData; alt?: string }[]).map((p) => (
              /* '#' links are placeholders — those projects get case-study pages later */
              <S.MiniCard
                key={p.name}
                as={p.external ? 'a' : Link}
                href={p.href}
                {...(p.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <S.MiniThumb>
                  {p.img ? (
                    typeof p.img === 'string' ? (
                      <Image src={p.img} alt={p.alt ?? p.name} fill style={{ objectFit: 'cover' }} sizes="(max-width: 820px) 50vw, 256px" />
                    ) : (
                      <Image src={p.img} alt={p.alt ?? p.name} fill placeholder="blur" style={{ objectFit: 'cover' }} sizes="(max-width: 820px) 50vw, 256px" />
                    )
                  ) : p.thumb}
                </S.MiniThumb>
                <S.MiniName>{p.name}</S.MiniName>
                <S.MiniTag>{p.tag}</S.MiniTag>
              </S.MiniCard>
            ))}
          </S.MiniGrid>

          <S.ArchiveList style={{ marginTop: 32 }}>
            <Link href="/projects/museum-ar" style={{ textDecoration: 'none' }}>
              <S.ArchiveRow>
                <S.ArchiveName>Museum AR Game — bringing a museum display case to life on a visitor&apos;s tablet</S.ArchiveName>
                <S.ArchiveMeta>AR · Exhibition → </S.ArchiveMeta>
              </S.ArchiveRow>
            </Link>
            <Link href="/projects/liberary" style={{ textDecoration: 'none' }}>
              <S.ArchiveRow>
                <S.ArchiveName>Liberary — a Galileo-era RPG about intellectual freedom</S.ArchiveName>
                <S.ArchiveMeta>RPG · Narrative → </S.ArchiveMeta>
              </S.ArchiveRow>
            </Link>
          </S.ArchiveList>
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
