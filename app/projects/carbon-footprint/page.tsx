"use client"

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/common/navigation/navigation";
import { Reveal } from "@/components/common/reveal/reveal";
import * as S from './page.css';

// Temporary image source: the 2019 archive site. Swap to /public assets later.
const ARCHIVE_IMG = "https://yuan00611.github.io/portfolio/g06_cfadventure/img";

export default function CarbonFootprint() {
    return (
        <S.PageRoot>
            <Navigation />

            {/* ── Hero — icy day over drifting floes ──────────────────────── */}
            <S.Hero>
                <S.HeroArt />
                <S.Floe $bottom="14%" $opacity={0.5} aria-hidden>
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,70 C240,44 480,92 720,68 C960,44 1200,88 1440,60 L1440,120 L0,120 Z" fill="#74c9c6" /></svg>
                </S.Floe>
                <S.Floe $bottom="7%" $opacity={0.75} aria-hidden>
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,95 L140,70 L300,92 L470,64 L640,90 L810,68 L980,94 L1150,66 L1310,88 L1440,72 L1440,120 L0,120 Z" fill="#dcebee" /></svg>
                </S.Floe>
                <S.Floe $bottom="0%" $opacity={0.9} aria-hidden>
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,100 L180,78 L360,98 L540,74 L720,96 L900,72 L1080,98 L1260,76 L1440,94 L1440,120 L0,120 Z" fill="#ffffff" /></svg>
                </S.Floe>
                <S.HeroInner>
                    <S.HeroEyebrow>Case study · VR · Oculus · 2019</S.HeroEyebrow>
                    <S.HeroTitle>Carbon Footprint<br />Adventure</S.HeroTitle>
                    <S.HeroTagline>Become a polar bear on the melting ice — VR that turns climate knowledge into climate empathy.</S.HeroTagline>
                </S.HeroInner>
            </S.Hero>

            <S.Wide>
                <Reveal>
                    <S.Stats>
                        <div className="cell"><div className="num gap">64%</div><div className="lab">of teens believe they can<br />make a difference</div></div>
                        <div className="cell"><div className="num">16%</div><div className="lab">have actually<br />recycled</div></div>
                        <div className="cell"><div className="num">8%</div><div className="lab">have used<br />less plastic</div></div>
                        <div className="cell"><div className="num">6%</div><div className="lab">have reduced<br />energy use</div></div>
                    </S.Stats>
                </Reveal>
            </S.Wide>

            <S.Wrap>
                <Reveal>
                    <S.MetaGrid>
                        <div><S.MetaK>Timeline</S.MetaK><S.MetaV>Sep – Nov 2019 · 1 semester</S.MetaV></div>
                        <div><S.MetaK>Role</S.MetaK><S.MetaV>VR developer</S.MetaV></div>
                        <div><S.MetaK>Built with</S.MetaK><S.MetaV>Unity · Oculus Rift</S.MetaV></div>
                        <div><S.MetaK>Team</S.MetaK><S.MetaV>With Chieh-An Tsai, Darian Gleghorn &amp; Grace Ko</S.MetaV></div>
                    </S.MetaGrid>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The problem</S.Eyebrow>
                        <S.H2>Teens believe in climate action. Almost none of them act.</S.H2>
                        <S.Para>Climate change is a serious issue in modern society — and most people already know it. The real problem is what researchers call the <strong>knowledge-action gap</strong> (Ahn, Bailenson &amp; Park, 2014): 64% of teens believed they could take action to make a difference on climate change, yet only 16% had recycled, 14% had limited driving, 8% had used less plastic, and 6% had reduced energy use.</S.Para>
                        <S.Para>Facts alone weren&apos;t closing that gap. So we aimed VR&apos;s first-person presence at it instead: give middle school students an immersive experience that builds <strong>empathy toward the species already living with the consequences</strong> — and let that empathy, not another chart, do the persuading.</S.Para>
                        <S.Quote>
                            You are a polar bear!
                            <cite>— Stage 2, where the perspective flips</cite>
                        </S.Quote>
                        <S.Figure>
                            <S.Frame>
                                <Image
                                    src={`${ARCHIVE_IMG}/g6_intro.png`}
                                    alt="In-game view: snow falls over low-poly ice floes as the stage card announces 'You are a polar bear!', with bears and a penguin nearby"
                                    width={1638}
                                    height={846}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 860px) 100vw, 804px"
                                />
                            </S.Frame>
                            <figcaption>Stage 2: the player becomes the bear — snow falling, ice thinning, family close by.</figcaption>
                        </S.Figure>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Experience design</S.Eyebrow>
                        <S.H2>Empathy, engineered as three kinds of presence.</S.H2>
                        <S.Para>The experience follows a simple arc: a crisis you can feel — the sea rising and the ice shrinking beneath the bears — built through three deliberate layers of presence, then grounded with short factual videos about the wider consequences of climate change.</S.Para>
                        <S.Presences>
                            <div className="presence"><div className="kind">Self-presence</div><h4>The mirror</h4><p>A mirror on the Arctic glacier shows your reflection — a polar bear. Seeing yourself in the body scaffolds self-presence.</p></div>
                            <div className="presence"><div className="kind">Social-presence</div><h4>The animals</h4><p>Penguins and other animals interact with you. For teenagers sensitive to social interaction, that connection deepens empathy and pro-environmental intent.</p></div>
                            <div className="presence"><div className="kind">Environmental-presence</div><h4>The glacier</h4><p>The Arctic scene itself — ice, water, snowfall, wildlife — surrounds the student until the crisis feels like a place, not a topic.</p></div>
                        </S.Presences>
                        <S.Figure>
                            <S.Frame>
                                <Image
                                    src={`${ARCHIVE_IMG}/g6_process03.png`}
                                    alt="In-game view from the ice: a polar bear stands upright as an orca surfaces in the rising teal water between shrinking floes"
                                    width={1718}
                                    height={962}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 860px) 100vw, 804px"
                                />
                            </S.Frame>
                            <figcaption>Crisis creation: the water rises, the floes shrink, and the orca circles closer.</figcaption>
                        </S.Figure>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Panel>
                        <S.Eyebrow>My role</S.Eyebrow>
                        <S.PanelBig>A team of four — and I stayed through every phase.</S.PanelBig>
                        <S.Para>As one of the project&apos;s VR developers I participated in the whole process: designing the educational environmental game with the team, then <strong>programming and implementing it in Unity for the Oculus Rift</strong> — from the story flow and stage logic to the moment the headset goes on.</S.Para>
                    </S.Panel>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The result</S.Eyebrow>
                        <S.H2>From storyboard to headset in one semester.</S.H2>
                        <S.Para>The semester ended with a finished, playable build of CF Adventure — demoed on video and put in front of real players during testing sessions.</S.Para>
                        <S.Figure>
                            <S.Frame>
                                <S.Video>
                                    <iframe src="https://www.youtube.com/embed/z4HR94tH9ho" title="Carbon Footprint Adventure demo video" allowFullScreen loading="lazy" />
                                </S.Video>
                            </S.Frame>
                            <figcaption>Demo video — the full experience, from the melting shore to the bear&apos;s-eye view.</figcaption>
                        </S.Figure>
                        <S.Figure>
                            <S.Frame>
                                <Image
                                    src={`${ARCHIVE_IMG}/g6_result01.png`}
                                    alt="A computer lab during playtesting: one student wears the Oculus headset while classmates watch and wait their turn"
                                    width={1904}
                                    height={1044}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 860px) 100vw, 804px"
                                />
                            </S.Frame>
                            <figcaption>Testing and playing — classmates trying the build during playtest sessions.</figcaption>
                        </S.Figure>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Reflection</S.Eyebrow>
                        <S.H2>Empathy they didn&apos;t have before.</S.H2>
                        <S.Para>Using virtual reality to teach middle school students about environmental education is an idea I really believe in. The immersive nature of VR can give students <strong>a sense of empathy they didn&apos;t have in the past</strong> — and that empathy might be what finally motivates a change in behavior.</S.Para>
                        <S.Para>Our goal for the future is to put the experience in front of real students and gather feedback. And the polar bear is just one example of what Carbon Footprint Adventure can hold — there are many more climate stories the same structure could carry.</S.Para>
                        <S.Chips>
                            <S.Chip>Unity</S.Chip>
                            <S.Chip>Oculus Rift</S.Chip>
                            <S.Chip>C#</S.Chip>
                            <S.Chip>VR storytelling</S.Chip>
                            <S.Chip>Environmental education</S.Chip>
                        </S.Chips>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Cta>
                        <S.H2>See the melting ice for yourself.</S.H2>
                        <S.Btns>
                            <S.Btn href="https://www.youtube.com/watch?v=z4HR94tH9ho" target="_blank" rel="noopener noreferrer">Watch the demo →</S.Btn>
                            <S.Btn $ghost href="https://yuan00611.github.io/portfolio/g06_cfadventure/g06_cfadventure.html" target="_blank" rel="noopener noreferrer">Original 2019 archive</S.Btn>
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
