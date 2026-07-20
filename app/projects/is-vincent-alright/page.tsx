"use client"

import Link from "next/link";
import { Navigation } from "@/components/common/navigation/navigation";
import { Reveal } from "@/components/common/reveal/reveal";
import * as S from './page.css';

export default function IsVincentAlright() {
    return (
        <S.PageRoot>
            <Navigation />

            {/* ── Hero — starry night over the asylum garden ──────────────── */}
            <S.Hero>
                <S.HeroArt />
                <S.Swirls aria-hidden>
                    <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
                        <g stroke="#e3b341" strokeWidth="2" fill="none" opacity="0.5">
                            <path d="M120,180 C220,110 340,110 400,180 C450,238 400,300 330,290 C275,282 255,225 300,200 C332,182 365,205 358,235" />
                            <path d="M700,120 C840,60 1000,80 1060,160 C1108,224 1060,300 970,290 C900,282 875,215 925,185 C962,163 1005,190 995,228" opacity="0.7" />
                            <path d="M40,360 C240,320 440,400 640,360 C840,320 1040,400 1240,360 C1310,346 1380,352 1440,368" opacity="0.45" />
                        </g>
                        <g fill="#e3b341" opacity="0.75">
                            <circle cx="210" cy="120" r="3" />
                            <circle cx="520" cy="90" r="2.5" />
                            <circle cx="640" cy="210" r="2" />
                            <circle cx="900" cy="70" r="3" />
                            <circle cx="1190" cy="140" r="2.5" />
                            <circle cx="1330" cy="230" r="2" />
                        </g>
                        <circle cx="1152" cy="108" r="26" fill="#e3b341" opacity="0.55" />
                    </svg>
                </S.Swirls>
                <S.HeroInner>
                    <S.HeroEyebrow>Case study · VR escape · HTC Vive</S.HeroEyebrow>
                    <S.HeroTitle>Is Vincent<br />Alright?</S.HeroTitle>
                    <S.HeroZh>梵谷還好</S.HeroZh>
                    <S.HeroTagline>A VR escape room built from Van Gogh&apos;s letters and paintings — you escape by understanding him.</S.HeroTagline>
                </S.HeroInner>
            </S.Hero>

            <S.Wrap>
                <Reveal>
                    <S.MetaGrid>
                        <div><S.MetaK>Type</S.MetaK><S.MetaV>VR escape game</S.MetaV></div>
                        <div><S.MetaK>Role</S.MetaK><S.MetaV>Programmer &amp; game designer</S.MetaV></div>
                        <div><S.MetaK>Built with</S.MetaK><S.MetaV>Unity · HTC Vive</S.MetaV></div>
                        <div><S.MetaK>Research</S.MetaK><S.MetaV>Van Gogh&apos;s real letters, verified at the library</S.MetaV></div>
                    </S.MetaGrid>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The premise</S.Eyebrow>
                        <S.H2>An escape room where the mystery is a person.</S.H2>
                        <S.Para>Is Vincent Alright? is a VR escape game with one goal underneath the puzzles: our team wanted players to come away <strong>knowing Van Gogh&apos;s story</strong> — not from a museum placard, but from the inside of playing it.</S.Para>
                        <S.Para>Every escape room runs on locks and keys. Ours runs on him. The puzzles and hints are woven from Van Gogh&apos;s own paintings, and the story threaded between them comes from the letters he actually wrote.</S.Para>
                        <S.Quote>The puzzles are his paintings. The hints are his letters.</S.Quote>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Grounded in the source</S.Eyebrow>
                        <S.H2>We started in the library, not the game engine.</S.H2>
                        <S.Para>Before designing a single puzzle, we went to the library to check the true content of the letters Van Gogh wrote. The game earns its story by being faithful to it.</S.Para>
                        <S.Sources>
                            <div className="source"><div className="kind">The letters</div><h4>The story</h4><p>Van Gogh&apos;s real correspondence — checked against library sources — carries the narrative and surfaces as hints along the way.</p></div>
                            <div className="source"><div className="kind">The paintings</div><h4>The puzzles</h4><p>The rooms are built from his canvases: puzzles and hints hide inside the paintings themselves, so studying them is how you move forward.</p></div>
                        </S.Sources>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Panel>
                        <S.Eyebrow>My role</S.Eyebrow>
                        <S.PanelBig>My first time owning the code alone.</S.PanelBig>
                        <S.Para>This was the first project where I was <strong>individually in charge of the programming</strong> — building the escape-room logic, interactions, and VR controls in Unity for the HTC Vive. Alongside the code, I contributed to the game&apos;s design: how the puzzles, paintings, and letters fit together into one story.</S.Para>
                    </S.Panel>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The result</S.Eyebrow>
                        <S.H2>Step inside the painting.</S.H2>
                        <S.Figure>
                            <S.Frame>
                                <S.Video>
                                    <iframe src="https://www.youtube.com/embed/RsXp6hYUrVQ" title="Is Vincent Alright? demo video" allowFullScreen loading="lazy" />
                                </S.Video>
                            </S.Frame>
                            <figcaption>Demo video — escaping through Van Gogh&apos;s paintings, letter by letter.</figcaption>
                        </S.Figure>
                        <S.Chips>
                            <S.Chip>Unity</S.Chip>
                            <S.Chip>HTC Vive</S.Chip>
                            <S.Chip>C#</S.Chip>
                            <S.Chip>VR escape design</S.Chip>
                            <S.Chip>Narrative puzzles</S.Chip>
                        </S.Chips>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Cta>
                        <S.H2>See how the escape unfolds.</S.H2>
                        <S.Btns>
                            <S.Btn href="https://www.youtube.com/watch?v=RsXp6hYUrVQ" target="_blank" rel="noopener noreferrer">Watch the demo →</S.Btn>
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
