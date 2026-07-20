"use client"

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/common/navigation/navigation";
import { Reveal } from "@/components/common/reveal/reveal";
import * as S from './page.css';

export default function Liberary() {
    return (
        <S.PageRoot>
            <Navigation />

            {/* ── Hero — the forbidden diagram, drawn in brass ────────────── */}
            <S.Hero>
                <S.HeroArt />
                <S.Orbits aria-hidden>
                    <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
                        {/* heliocentric chart */}
                        <g stroke="#c9a35f" fill="none" opacity="0.5">
                            <ellipse cx="1000" cy="230" rx="70" ry="26" strokeWidth="1.5" />
                            <ellipse cx="1000" cy="230" rx="140" ry="52" strokeWidth="1.5" />
                            <ellipse cx="1000" cy="230" rx="220" ry="82" strokeWidth="1.5" />
                            <ellipse cx="1000" cy="230" rx="310" ry="116" strokeWidth="1.5" opacity="0.7" />
                        </g>
                        {/* the sun */}
                        <circle cx="1000" cy="230" r="14" fill="#c9a35f" opacity="0.8" />
                        {/* planets on their orbits */}
                        <g fill="#e8d9bd" opacity="0.8">
                            <circle cx="932" cy="238" r="4" />
                            <circle cx="1128" cy="204" r="5" />
                            <circle cx="808" cy="262" r="4.5" />
                            <circle cx="1266" cy="180" r="4" />
                        </g>
                        {/* loose pages drifting lower-left */}
                        <g stroke="#8a7a66" strokeWidth="1.5" fill="none" opacity="0.45">
                            <rect x="180" y="330" width="60" height="80" rx="3" transform="rotate(-12 210 370)" />
                            <rect x="300" y="380" width="54" height="72" rx="3" transform="rotate(9 327 416)" />
                            <line x1="196" y1="352" x2="232" y2="346" opacity="0.7" />
                            <line x1="196" y1="366" x2="232" y2="360" opacity="0.7" />
                            <line x1="314" y1="402" x2="346" y2="406" opacity="0.7" />
                        </g>
                    </svg>
                </S.Orbits>
                <S.HeroInner>
                    <S.HeroEyebrow>Case study · RPG · Intellectual freedom</S.HeroEyebrow>
                    <S.HeroTitle>Liberary</S.HeroTitle>
                    <S.HeroTagline>A Galileo-era RPG about intellectual freedom — what the world loses when knowledge is locked away.</S.HeroTagline>
                </S.HeroInner>
            </S.Hero>

            <S.Wrap>
                <Reveal>
                    <S.MetaGrid>
                        <div><S.MetaK>Type</S.MetaK><S.MetaV>Narrative RPG</S.MetaV></div>
                        <div><S.MetaK>Role</S.MetaK><S.MetaV>Script · dialogue system · version control</S.MetaV></div>
                        <div><S.MetaK>Built with</S.MetaK><S.MetaV>Unity · Fungus · GitHub</S.MetaV></div>
                        <div><S.MetaK>Team</S.MetaK><S.MetaV>3 — all Library &amp; Information Science</S.MetaV></div>
                    </S.MetaGrid>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The premise</S.Eyebrow>
                        <S.H2>A game about why libraries exist at all.</S.H2>
                        <S.Para>Liberary is an RPG about <strong>intellectual freedom</strong>. We made it so players could feel the core value of the library — and see what Library and Information Science actually defends — rather than read a definition of it.</S.Para>
                        <S.Para>We set the story in the time of Galileo Galilei, when holding the wrong knowledge was a crime. Through the game, we showed how horrible the world becomes when intellectual freedom is taken away.</S.Para>
                        <S.Quote>
                            解放禁書,解放被綁架的思想。你有沒有勇氣站出來,為智識自由而戰?
                            <cite>— from the game&apos;s poster</cite>
                        </S.Quote>
                        <S.Figure>
                            <S.Frame>
                                <Image
                                    src="https://yuan00611.github.io/img/portfolio/g3_liberary.png"
                                    alt="Liberary poster: characters among flying books and a glowing heliocentric chart, with the call to fight for intellectual freedom"
                                    width={720}
                                    height={720}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 860px) 100vw, 804px"
                                />
                            </S.Frame>
                            <figcaption>The poster — banned books, a forbidden sky chart, and an invitation to stand up.</figcaption>
                        </S.Figure>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Panel>
                        <S.Eyebrow>My role</S.Eyebrow>
                        <S.PanelBig>Three librarians-in-training, one script, one repo.</S.PanelBig>
                        <S.Para>All three of us were students in the Department of Library and Information Science — which is exactly why we chose this theme. We decided the story and script together, so the game would say what our field actually believes.</S.Para>
                        <S.Para>In the implementation I was responsible for <strong>writing the script&apos;s details</strong>, introducing <strong>Fungus</strong> as the dialogue system that carries the branching conversations, and setting the team up on <strong>GitHub for version control</strong> throughout the build.</S.Para>
                    </S.Panel>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The reception</S.Eyebrow>
                        <S.H2>Praised for its substance — challenged on its storytelling.</S.H2>
                        <S.Receptions>
                            <div className="reception"><div className="kind">At the showcase</div><h4>&quot;The most content-oriented game&quot;</h4><p>When the final result was published, our game was praised as the most content-oriented game on the scene — the substance landed.</p></div>
                            <div className="reception"><div className="kind">From a professional</div><h4>The screenwriter&apos;s verdict</h4><p>The screenwriter of <em>Philosophic Love</em> played it and told us: the script may not be enticing enough — but it is a very meaningful game.</p></div>
                        </S.Receptions>
                        <S.Para>Both halves of that feedback mattered. The lesson I took away: <strong>meaning doesn&apos;t excuse a flat plot</strong> — a game with something to say still owes its players enticing storytelling, and that&apos;s the craft I&apos;ve worked on in every narrative project since.</S.Para>
                        <S.Figure>
                            <S.Frame>
                                <S.Video>
                                    <iframe src="https://www.youtube.com/embed/by7DDYwtthQ" title="Liberary promotional video" allowFullScreen loading="lazy" />
                                </S.Video>
                            </S.Frame>
                            <figcaption>Promotional video — into the stacks, back to Galileo&apos;s century.</figcaption>
                        </S.Figure>
                        <S.Chips>
                            <S.Chip>Unity</S.Chip>
                            <S.Chip>Fungus</S.Chip>
                            <S.Chip>Narrative design</S.Chip>
                            <S.Chip>Git workflow</S.Chip>
                            <S.Chip>Serious game</S.Chip>
                        </S.Chips>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Cta>
                        <S.H2>Step into the forbidden library.</S.H2>
                        <S.Btns>
                            <S.Btn href="https://www.youtube.com/watch?v=by7DDYwtthQ" target="_blank" rel="noopener noreferrer">Watch the promo →</S.Btn>
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
