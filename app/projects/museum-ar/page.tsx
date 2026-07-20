"use client"

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/common/navigation/navigation";
import { Reveal } from "@/components/common/reveal/reveal";
import * as S from './page.css';

export default function MuseumAr() {
    return (
        <S.PageRoot>
            <Navigation />

            {/* ── Hero — a display case, and an AR reticle on the egg ─────── */}
            <S.Hero>
                <S.HeroArt />
                <S.Vitrine aria-hidden>
                    <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice">
                        {/* display case */}
                        <g stroke="#8d7c5f" strokeWidth="2" fill="none" opacity="0.6">
                            <rect x="560" y="220" width="320" height="200" rx="6" />
                            <line x1="530" y1="420" x2="910" y2="420" strokeWidth="3" />
                            <line x1="560" y1="290" x2="880" y2="290" opacity="0.4" />
                        </g>
                        {/* the egg on its stand */}
                        <ellipse cx="720" cy="368" rx="26" ry="34" fill="#d9a05b" opacity="0.75" />
                        <line x1="700" y1="404" x2="740" y2="404" stroke="#8d7c5f" strokeWidth="3" opacity="0.7" />
                        {/* AR reticle corners locked on the egg */}
                        <g stroke="#63bfae" strokeWidth="3" fill="none" opacity="0.85">
                            <path d="M660,310 L660,290 L680,290" />
                            <path d="M760,290 L780,290 L780,310" />
                            <path d="M780,412 L780,432 L760,432" />
                            <path d="M680,432 L660,432 L660,412" />
                        </g>
                        <line x1="720" y1="255" x2="720" y2="272" stroke="#63bfae" strokeWidth="2" opacity="0.6" />
                    </svg>
                </S.Vitrine>
                <S.HeroInner>
                    <S.HeroEyebrow>Case study · AR · Exhibition</S.HeroEyebrow>
                    <S.HeroTitle>Museum<br />AR Game</S.HeroTitle>
                    <S.HeroTagline>A serious game about roosters and eggs — asking whether AR can let a museum case finally talk back.</S.HeroTagline>
                </S.HeroInner>
            </S.Hero>

            <S.Wrap>
                <Reveal>
                    <S.MetaGrid>
                        <div><S.MetaK>Type</S.MetaK><S.MetaV>Serious game · AR course project</S.MetaV></div>
                        <div><S.MetaK>Role</S.MetaK><S.MetaV>Research &amp; game design</S.MetaV></div>
                        <div><S.MetaK>Context</S.MetaK><S.MetaV>Museum exhibition</S.MetaV></div>
                        <div><S.MetaK>Deliverable</S.MetaK><S.MetaV>Playable prototype</S.MetaV></div>
                    </S.MetaGrid>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The question</S.Eyebrow>
                        <S.H2>What can AR do for a museum that a label can&apos;t?</S.H2>
                        <S.Para>This is a serious game about the knowledge of roosters and eggs, built in an AR course. The brief we set ourselves: think about how AR technology can serve <strong>the role of the museum itself</strong> — helping the exhibit&apos;s content interact more closely with the audience, instead of staying sealed behind glass and a caption card.</S.Para>
                        <S.Quote>The exhibit stays behind glass. The knowledge doesn&apos;t have to.</S.Quote>
                        <S.Figure>
                            <S.Frame>
                                <Image
                                    src="https://yuan00611.github.io/img/portfolio/g2_chicken.png"
                                    alt="A museum display case with taxidermy rooster and hen, scientific instruments, and a tablet overlaying an AR tray of eggs"
                                    width={720}
                                    height={720}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 860px) 100vw, 804px"
                                />
                            </S.Frame>
                            <figcaption>The exhibit case — and the AR layer bringing the egg tray out through the glass.</figcaption>
                        </S.Figure>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The research</S.Eyebrow>
                        <S.H2>Before the game: getting the chickens right.</S.H2>
                        <S.Para>We did a detailed study of pheasant and egg knowledge before designing anything — because in an educational game, being wrong is worse than being boring.</S.Para>
                        <S.Sources>
                            <div className="source"><div className="kind">Literature</div><h4>The papers</h4><p>Searching the published literature on poultry and egg science to ground every fact the game teaches.</p></div>
                            <div className="source"><div className="kind">Experts</div><h4>The scholars</h4><p>Asking experts and scholars directly — checking that what we&apos;d distilled was what a specialist would actually say.</p></div>
                            <div className="source"><div className="kind">Instruments</div><h4>The tools</h4><p>Understanding the relevant instruments in the exhibit, so the AR layer explains what visitors are really looking at.</p></div>
                        </S.Sources>
                        <S.Para>From that research we extracted the most important details and worked them into the game — aiming for something both <strong>educational and entertaining</strong> at once.</S.Para>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Panel>
                        <S.Eyebrow>What I learned</S.Eyebrow>
                        <S.PanelBig>My first educational game — and an honest verdict.</S.PanelBig>
                        <S.Para>This was the first time I used a game as a medium to convey knowledge. Honestly? It didn&apos;t reach the level of my ideal educational game — it wasn&apos;t interesting enough yet.</S.Para>
                        <S.Para>But it taught me something I&apos;ve kept ever since: in educational games, <strong>the details and the accuracy are not negotiable</strong>. Fun can be iterated; wrong facts poison the whole point. Every serious game I&apos;ve made after this one started from that rule.</S.Para>
                    </S.Panel>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The build</S.Eyebrow>
                        <S.H2>Try the prototype.</S.H2>
                        <S.Para>The final prototype is available as a downloadable build from the course archive.</S.Para>
                        <S.Chips>
                            <S.Chip>AR</S.Chip>
                            <S.Chip>Serious game</S.Chip>
                            <S.Chip>Museum exhibition</S.Chip>
                            <S.Chip>Educational design</S.Chip>
                        </S.Chips>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Cta>
                        <S.H2>Take the exhibit home.</S.H2>
                        <S.Btns>
                            <S.Btn href="https://yuan00611.github.io/download/g2_final.zip">Download the prototype (.zip)</S.Btn>
                            <S.Btn $ghost href="https://yuan00611.github.io/index.html" target="_blank" rel="noopener noreferrer">Original archive</S.Btn>
                        </S.Btns>
                    </S.Cta>
                </Reveal>

                <S.Footer>
                    <span>© 2026 Debbie Chen</span>
                    <span><Link href="/">All work</Link> · <a href="mailto:yuan0061@gmail.com">yuan0061@gmail.com</a></span>
                </S.Footer>
            </S.Wrap>
        </S.PageRoot>
    );
}
