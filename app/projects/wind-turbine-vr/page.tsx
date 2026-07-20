"use client"

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/common/navigation/navigation";
import { Reveal } from "@/components/common/reveal/reveal";
import * as S from './page.css';

// Temporary image source: the 2018 archive site. Swap to /public assets later.
const ARCHIVE_IMG = "https://yuan00611.github.io/portfolio/g04_windturbine/img";

export default function WindTurbineVr() {
    return (
        <S.PageRoot>
            <Navigation />

            {/* ── Hero — wireframe turbines over the sea ──────────────────── */}
            <S.Hero>
                <S.HeroArt />
                <S.Turbines aria-hidden>
                    <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice">
                        <g stroke="#8fb4cf" strokeWidth="2" fill="none" opacity="0.55">
                            <line x1="300" y1="360" x2="300" y2="200" />
                            <g transform="translate(300,200)"><line x1="0" y1="0" x2="0" y2="-46" /><line x1="0" y1="0" x2="40" y2="24" /><line x1="0" y1="0" x2="-40" y2="24" /><circle r="4" fill="#8fb4cf" /></g>
                            <line x1="620" y1="380" x2="620" y2="150" />
                            <g transform="translate(620,150)"><line x1="0" y1="0" x2="0" y2="-64" /><line x1="0" y1="0" x2="56" y2="34" /><line x1="0" y1="0" x2="-56" y2="34" /><circle r="5" fill="#8fb4cf" /></g>
                            <line x1="1010" y1="360" x2="1010" y2="210" />
                            <g transform="translate(1010,210)"><line x1="0" y1="0" x2="0" y2="-42" /><line x1="0" y1="0" x2="38" y2="22" /><line x1="0" y1="0" x2="-38" y2="22" /><circle r="4" fill="#8fb4cf" /></g>
                            <line x1="1250" y1="400" x2="1250" y2="240" opacity="0.7" />
                            <g transform="translate(1250,240)" opacity="0.7"><line x1="0" y1="0" x2="0" y2="-34" /><line x1="0" y1="0" x2="30" y2="18" /><line x1="0" y1="0" x2="-30" y2="18" /></g>
                        </g>
                    </svg>
                </S.Turbines>
                <S.Sea aria-hidden>
                    <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
                        <path d="M0,70 C240,40 480,90 720,66 C960,42 1200,86 1440,58 L1440,140 L0,140 Z" fill="var(--sea-2)" opacity="0.9" />
                        <path d="M0,92 C300,120 560,60 800,88 C1060,118 1240,68 1440,96 L1440,140 L0,140 Z" fill="var(--bg)" />
                    </svg>
                </S.Sea>
                <S.HeroInner>
                    <S.HeroEyebrow>Case study · VR news · 2018</S.HeroEyebrow>
                    <S.HeroTitle>The Making<br />of Wind</S.HeroTitle>
                    <S.HeroZh>海造的風機</S.HeroZh>
                    <S.HeroTagline>Taiwan&apos;s first interactive VR news — putting you inside the debate over offshore wind.</S.HeroTagline>
                </S.HeroInner>
            </S.Hero>

            <S.Wide>
                <Reveal>
                    <S.Stats>
                        <div className="cell"><div className="num">1<span className="u">st</span></div><div className="lab">Interactive VR news<br />made in Taiwan</div></div>
                        <div className="cell"><div className="num">~400</div><div className="lab">Visitors experienced it<br />in 3 days</div></div>
                        <div className="cell"><div className="num">3</div><div className="lab">Acts — fishery,<br />engineering, ocean</div></div>
                        <div className="cell"><div className="num">TV</div><div className="lab">Covered on<br />national news</div></div>
                    </S.Stats>
                </Reveal>
            </S.Wide>

            <S.Wrap>
                <Reveal>
                    <S.MetaGrid>
                        <div><S.MetaK>Timeline</S.MetaK><S.MetaV>Jun – Dec 2018 · 6 months</S.MetaV></div>
                        <div><S.MetaK>Role</S.MetaK><S.MetaV>VR developer</S.MetaV></div>
                        <div><S.MetaK>Built with</S.MetaK><S.MetaV>Unity · HTC Vive · Arduino</S.MetaV></div>
                        <div><S.MetaK>With</S.MetaK><S.MetaV>Graduate Institute of Journalism, NTU</S.MetaV></div>
                    </S.MetaGrid>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The problem</S.Eyebrow>
                        <S.H2>Everyone agrees green energy is good. Almost no one sees its cost.</S.H2>
                        <S.Para>Offshore wind was a proud, trending story in Taiwan — clean power rising out of the sea. But behind the headline sat a harder truth most people never encountered: the impact of building those turbines on <strong>fisheries, the marine environment, and endangered wildlife</strong>.</S.Para>
                        <S.Para>A 2D news article can tell you that. We wanted to put you <em>there</em> — to use VR&apos;s first-person presence so the trade-offs weren&apos;t read about, but stood inside. The goal was never to argue a side; it was to let people feel the whole issue, pros and cons, from within.</S.Para>
                        <S.Quote>
                            Several visitors told us they changed their minds after playing — because they&apos;d seen, not just read.
                            <cite>— from the exhibition feedback</cite>
                        </S.Quote>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Experience design</S.Eyebrow>
                        <S.H2>One story, told in three descents.</S.H2>
                        <S.Para>We structured the piece as three connected acts, each moving the visitor deeper — from the shore, to the ship, to beneath the water. The descent was the argument: the further you go, the more of the trade-off you carry.</S.Para>
                        <S.Acts>
                            <div className="act"><div className="idx">ACT 01</div><span className="depth">shore</span><h4>The fishermen</h4><p>Observe daily life on the coast and hear how turbine installation will change the people who fish there.</p></div>
                            <div className="act"><div className="idx">ACT 02</div><span className="depth">deck</span><h4>The ship</h4><p>Board the engineering vessel and become part of the construction crew building the foundation.</p></div>
                            <div className="act"><div className="idx">ACT 03</div><span className="depth">−12m</span><h4>The ocean</h4><p>Dive below to witness the effect on the Chinese white dolphin — an endangered species losing quiet water.</p></div>
                        </S.Acts>
                        <S.Figure>
                            <S.Frame>
                                {/* TODO(Debbie): pick the best of g4_process01–10 for the three-act flow */}
                                <Image
                                    src={`${ARCHIVE_IMG}/g4_process01.png`}
                                    alt="In-VR menu showing the three acts: fishing with the fishermen, watching the pile driving, diving into the undersea world"
                                    width={864}
                                    height={481}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 860px) 100vw, 804px"
                                />
                            </S.Frame>
                            <figcaption>Storyboarding the three-act descent, from coast to seabed.</figcaption>
                        </S.Figure>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Panel>
                        <S.Eyebrow>My role</S.Eyebrow>
                        <S.PanelBig>I built the pile driver — the moment you become the construction.</S.PanelBig>
                        <S.Para>As a VR developer on the team, I owned the engineering-ship sequence: simulating the pile driver that sinks a turbine&apos;s foundation into the seabed. I mapped the rig&apos;s controls onto the HTC Vive controllers and authored the physical behavior and animation of the whole driving process, so the visitor didn&apos;t watch the work — they did it.</S.Para>
                        <S.Para>I also worked alongside instructors, fellow VR developers, and journalists to keep the simulation faithful to how the real engineering actually happens.</S.Para>
                    </S.Panel>
                </Reveal>

                <Reveal>
                    <S.Figure>
                        <S.Frame>
                            <S.Video>
                                <iframe src="https://www.youtube.com/embed/oQy1miNRbDE" title="Pile driver simulation" allowFullScreen loading="lazy" />
                            </S.Video>
                        </S.Frame>
                        <figcaption>Pile-driver simulation — HTC Vive controllers mapped to the rig, with authored physics and animation.</figcaption>
                    </S.Figure>
                </Reveal>

                <Reveal>
                    <S.Section style={{ paddingTop: 40 }}>
                        <S.Spark>
                            <div className="icon">≋<small>Arduino</small></div>
                            <div>
                                <S.H3>The wind didn&apos;t stay in the headset.</S.H3>
                                <S.Para>To close the gap between screen and body, I built physical turbine simulators from <strong>electric fans driven by Arduino</strong> — so when the virtual blades turned, visitors felt real wind on their skin. The piece lived in the room, not just the goggles.</S.Para>
                            </div>
                        </S.Spark>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The exhibition</S.Eyebrow>
                        <S.H2>Three days at Huashan. ~400 people. National news.</S.H2>
                        <S.Para>We took the finished piece to Huashan 1914 Creative Park and ran it as a public exhibition. Close to <strong>400 people experienced it across three days</strong>, the response was covered on national news, and — the result I care about most — visitors reported leaving with a changed view of a topic they thought they already understood.</S.Para>
                        <S.TwoUp>
                            {/* TODO(Debbie): pick the best of g4_result01–09 for these two slots */}
                            <S.Frame>
                                <Image
                                    src={`${ARCHIVE_IMG}/g4_result01.jpg`}
                                    alt="Guests posing with thumbs up in front of the exhibition wall at Huashan 1914 Creative Park"
                                    width={2048}
                                    height={1152}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 860px) 100vw, 392px"
                                />
                            </S.Frame>
                            <S.Frame>
                                <Image
                                    src={`${ARCHIVE_IMG}/g4_result03.jpg`}
                                    alt="Press conference at the exhibition, with a photo wall of visitors wearing VR headsets"
                                    width={2048}
                                    height={1152}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 860px) 100vw, 392px"
                                />
                            </S.Frame>
                        </S.TwoUp>
                        <S.Figure>
                            <S.Frame>
                                <S.Video>
                                    <iframe src="https://www.youtube.com/embed/ji0WStDKl0E" title="Promotional video" allowFullScreen loading="lazy" />
                                </S.Video>
                            </S.Frame>
                            <figcaption>Promotional video for the exhibition.</figcaption>
                        </S.Figure>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Reflection</S.Eyebrow>
                        <S.H2>VR turned out to be a real instrument for changing minds.</S.H2>
                        <S.Para>Research had suggested VR news lands deeper than 2D — but seeing it happen in a live room was different. When someone watched, in first person, how construction robs the white dolphin of peaceful water, the abstraction became personal, and some of them walked out believing something new.</S.Para>
                        <S.Para>That&apos;s the thread I&apos;ve followed ever since. Before I designed for AI, I was already asking the same question this project asked: <strong>when should a system lead a person&apos;s understanding, and how do you earn their trust while doing it?</strong> The wind turbines were where that line began.</S.Para>
                        <S.Chips>
                            <S.Chip>Unity</S.Chip>
                            <S.Chip>HTC Vive</S.Chip>
                            <S.Chip>Arduino</S.Chip>
                            <S.Chip>C#</S.Chip>
                            <S.Chip>Physical computing</S.Chip>
                        </S.Chips>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Cta>
                        <S.H2>See the piece in action.</S.H2>
                        <S.Btns>
                            <S.Btn href="https://www.youtube.com/watch?v=ji0WStDKl0E" target="_blank" rel="noopener noreferrer">Watch the video →</S.Btn>
                            <S.Btn $ghost href="https://yuan00611.github.io/portfolio/g04_windturbine/g04_windturbine.html" target="_blank" rel="noopener noreferrer">Original 2018 archive</S.Btn>
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
