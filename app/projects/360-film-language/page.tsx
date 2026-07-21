"use client"

import Link from "next/link";
import { Navigation } from "@/components/common/navigation/navigation";
import { Reveal } from "@/components/common/reveal/reveal";
import * as S from './page.css';

export default function FilmLanguage360() {
    return (
        <S.PageRoot>
            <Navigation />

            {/* ── Hero — the viewer inside the 360° ring ──────────────────── */}
            <S.Hero>
                <S.HeroArt />
                <S.Ring aria-hidden>
                    <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
                        {/* the 360° ring around the viewer, ticked like a film strip */}
                        <g fill="none" opacity="0.7">
                            <ellipse cx="880" cy="300" rx="420" ry="120" stroke="#7da3e0" strokeWidth="2" />
                            <ellipse cx="880" cy="300" rx="420" ry="120" stroke="#7da3e0" strokeWidth="10" strokeDasharray="3 34" opacity="0.5" />
                            <ellipse cx="880" cy="300" rx="300" ry="84" stroke="#7da3e0" strokeWidth="1.5" opacity="0.4" />
                        </g>
                        {/* the cone of guided attention */}
                        <path d="M880,300 L1180,208 A420,120 0 0 1 1276,282 Z" fill="#e0766b" opacity="0.22" />
                        <path d="M880,300 L1180,208 M880,300 L1276,282" stroke="#e0766b" strokeWidth="1.5" opacity="0.6" fill="none" />
                        {/* the viewer */}
                        <circle cx="880" cy="300" r="7" fill="#eef1f5" opacity="0.9" />
                    </svg>
                </S.Ring>
                <S.HeroInner>
                    <S.HeroEyebrow>Research · Immersive journalism · 2017</S.HeroEyebrow>
                    <S.HeroTitle>Film Language<br />of 360° News</S.HeroTitle>
                    <S.HeroTagline>When the audience can look anywhere, how does a news story still make them understand? A study of The New York Times&apos; VR journalism.</S.HeroTagline>
                </S.HeroInner>
            </S.Hero>

            <S.Wide>
                <Reveal>
                    <S.Stats>
                        <div className="cell"><div className="num">6</div><div className="lab">NYT society-news<br />360° films analyzed</div></div>
                        <div className="cell"><div className="num hl">6</div><div className="lab">Dimensions of<br />film language</div></div>
                        <div className="cell"><div className="num">6</div><div className="lab">Participants in<br />the user study</div></div>
                        <div className="cell"><div className="num hl">2</div><div className="lab">Publications —<br />PNC &amp; TAICHI&apos;17</div></div>
                    </S.Stats>
                </Reveal>
            </S.Wide>

            <S.Wrap>
                <Reveal>
                    <S.MetaGrid>
                        <div><S.MetaK>Year</S.MetaK><S.MetaV>2017 · National Taiwan University</S.MetaV></div>
                        <div><S.MetaK>With</S.MetaK><S.MetaV>Hsuan-Chi Liu &amp; Chia-Yu Hsu</S.MetaV></div>
                        <div><S.MetaK>Method</S.MetaK><S.MetaV>Film analysis + user study</S.MetaV></div>
                        <div><S.MetaK>Published at</S.MetaK><S.MetaV>PNC 2017 · TAICHI&apos;17</S.MetaV></div>
                    </S.MetaGrid>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The question</S.Eyebrow>
                        <S.H2>News doesn&apos;t just report reality. It builds it.</S.H2>
                        <S.Para>Mass communication constructs our shared social reality (Berger &amp; Luckmann) — and 360° video hands journalism a new instrument: instead of portraying the facts, it can place you inside them.</S.Para>
                        <S.Quote>
                            Immersive journalism does not aim solely to present the facts, but rather the opportunity to experience the facts.
                            <cite>— De la Peña et al., 2010</cite>
                        </S.Quote>
                        <S.Para>But the instrument came with real challenges — stitching, interaction, dizziness, and above all a <strong>film language problem</strong>: a century of framing, cuts, and camera movement assumes a rectangle the director controls. In 360°, the audience is the director. So we asked:</S.Para>
                        <S.Para><strong>How do you shoot a 360° news video that helps people both understand and immerse?</strong></S.Para>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Method</S.Eyebrow>
                        <S.H2>Two tracks: read the films, then watch the watchers.</S.H2>
                        <S.Methods>
                            <div className="method"><div className="kind">Track 1 · Film analysis</div><h4>Six NYT films, shot by shot</h4><p>We coded six society-news 360° films from The New York Times — including <em>Fleeing Boko Haram</em> — timestamp by timestamp: surroundings, subtitles, shot size, guidance, angle, and perspective. The patterns became our hypotheses.</p></div>
                            <div className="method us"><div className="kind">Track 2 · User study</div><h4>Six first-time viewers</h4><p>Six NTU students with no prior 360° news experience watched the films, then sat for semi-structured interviews — how did it feel, what differed from traditional news, and why (or why not)?</p></div>
                        </S.Methods>
                        <S.Para>First we mapped how traditional film language — composition, shot size, movement, angles, perspectives — transforms when the frame disappears:</S.Para>
                        <S.TransformList>
                            <li><b>Composition</b> becomes surroundings and subtitle placement — there is no single frame to compose.</li>
                            <li><b>Camera movement</b> becomes guidance — you can&apos;t cut to the point, you have to lead eyes to it.</li>
                            <li><b>The audience becomes the director</b> — the fundamental power shift of the medium.</li>
                            <li><b>Shot size and angles</b> carry over — mostly intact, but with new side effects.</li>
                        </S.TransformList>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Findings</S.Eyebrow>
                        <S.H2>Six dimensions, six verdicts.</S.H2>
                        <S.Findings>
                            <div className="finding">
                                <div className="no">01</div>
                                <h4>Surroundings</h4>
                                <p><span className="tag">Film analysis</span>Traditional news holds one focus; 360° can stage multiple foci around the viewer.</p>
                                <p><span className="tag us">User study</span>Multi-foci scenes felt more immersive and more informative — though half the viewers still watched with a single-focus habit.</p>
                            </div>
                            <div className="finding">
                                <div className="no">02</div>
                                <h4>Subtitles</h4>
                                <p><span className="tag">Film analysis</span>Films scatter two or three subtitle positions around the sphere.</p>
                                <p><span className="tag us">User study</span>Viewers couldn&apos;t find them quickly — some assumed each position said something different. What matters most: subtitles that last long enough to read, placed near the main point. Some wanted gaze-following subtitles, despite the occlusion worry.</p>
                            </div>
                            <div className="finding">
                                <div className="no">03</div>
                                <h4>Perspectives</h4>
                                <p><span className="tag">Film analysis</span>First vs. third person; eye contact from subjects reads as direct address.</p>
                                <p><span className="tag us">User study</span>First person — feeling like a character in the story — is more immersive; communication cues (eye contact, talk, motion, emotion) create it. Eye contact helps but isn&apos;t strictly necessary.</p>
                                <p className="pq">&quot;He seemed to be as confused and helpless as I was. He also pointed at the remains he wanted to show me, which indeed enhanced emotion.&quot;</p>
                            </div>
                            <div className="finding">
                                <div className="no">04</div>
                                <h4>Shot size</h4>
                                <p><span className="tag">Film analysis</span>Close-up, middle distance, and long shot all appear across the six films.</p>
                                <p><span className="tag us">User study</span>The surprise null result: shot size turned out <strong>not to be related to immersion</strong> at all.</p>
                            </div>
                            <div className="finding">
                                <div className="no">05</div>
                                <h4>Guidance</h4>
                                <p><span className="tag">Film analysis</span>Arrows, motion, and staging try to steer where the audience looks.</p>
                                <p><span className="tag us">User study</span>Binary outcome: successful guidance leads the eye straight to the point; failed guidance is ignored — or actively misunderstood.</p>
                            </div>
                            <div className="finding">
                                <div className="no">06</div>
                                <h4>Angles</h4>
                                <p><span className="tag">Film analysis</span>Look-up, eye-level, and overlook angles all survive the jump to 360°.</p>
                                <p><span className="tag us">User study</span>360° amplifies an angle&apos;s effect — height differences felt real. But it breaks when the body is missing:</p>
                                <p className="pq">&quot;I expected to see my feet when I looked down, but I wasn&apos;t. So I was very confused about where I was standing.&quot;</p>
                            </div>
                        </S.Findings>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Discussion</S.Eyebrow>
                        <S.H2>Every answer opened a better question.</S.H2>
                        <S.CleanList>
                            <li><b>Surroundings</b> — what happens at two foci? Three?</li>
                            <li><b>Subtitles</b> — how do you make them findable, and connect them to the environment?</li>
                            <li><b>Perspectives</b> — can emotion and motion alone manufacture first person?</li>
                            <li><b>Shot size</b> — different directions, different sizes: does the concept need redefining in 360°?</li>
                            <li><b>Guidance</b> — what other ways can a story lead the eye? (The foveated image — Fadi &amp; James, 2012 — points one way.)</li>
                            <li><b>Angles</b> — how do you keep the virtual body rational, so looking down doesn&apos;t break the world?</li>
                            <li><b>Life experience</b> — how do you build immersion in environments the viewer has never lived?</li>
                        </S.CleanList>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Publications</S.Eyebrow>
                        <S.H2>Where this was presented.</S.H2>
                        <S.Pubs>
                            <div className="pub">
                                <div className="venue">Conference talk · PNC 2017</div>
                                <p className="cite"><b>Chen, T. Y.</b>, Liu, H. C., Hsu, C. Y. (2017, November). Film language analysis in society news — A case study of The New York Times. In <em>2017 PNC Annual Conference and Joint Meetings</em>. Tainan, Taiwan.</p>
                                <div className="links">
                                    <a href="https://ieeexplore.ieee.org/abstract/document/8203523" target="_blank" rel="noopener noreferrer">Article (IEEE Xplore) →</a>
                                </div>
                            </div>
                            <div className="pub">
                                <div className="venue">Poster · TAICHI&apos;17</div>
                                <p className="cite">Hsu, C. Y., <b>Chen, T. Y.</b>, Liu, H. C. (2017, August). Film language analysis in society news — A case study of The New York Times. Poster presentation at <em>TAICHI&apos;17</em>. Tainan, Taiwan.</p>
                                <div className="links">
                                    <a href="https://yuan00611.github.io/document/TAICHI_2017paper.pdf" target="_blank" rel="noopener noreferrer">Article (PDF) →</a>
                                    <span>·</span>
                                    <a href="https://yuan00611.github.io/document/TAICHI_2017poster.pdf" target="_blank" rel="noopener noreferrer">Poster (PDF) →</a>
                                </div>
                            </div>
                        </S.Pubs>
                        <S.Chips>
                            <S.Chip>360° video</S.Chip>
                            <S.Chip>Immersive journalism</S.Chip>
                            <S.Chip>Film analysis</S.Chip>
                            <S.Chip>Qualitative research</S.Chip>
                        </S.Chips>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Panel>
                        <S.Eyebrow>From theory to practice</S.Eyebrow>
                        <S.PanelBig>A year later, this thinking went into a headset.</S.PanelBig>
                        <S.Para>The questions this study opened — guidance, presence, the viewer as director — became the working vocabulary for <strong>The Making of Wind</strong>, Taiwan&apos;s first interactive VR news, built with NTU&apos;s Graduate Institute of Journalism in 2018. <S.PanelLink><Link href="/projects/wind-turbine-vr">See the practice →</Link></S.PanelLink></S.Para>
                    </S.Panel>
                </Reveal>

                <Reveal>
                    <S.Cta>
                        <S.H2>Read the full study.</S.H2>
                        <S.Btns>
                            <S.Btn href="https://yuan00611.github.io/document/film-language.pptx">Download the slides (.pptx)</S.Btn>
                            <S.Btn $ghost as={Link} href="/projects/wind-turbine-vr">The Making of Wind →</S.Btn>
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
