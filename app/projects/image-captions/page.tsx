"use client"

import Link from "next/link";
import { Navigation } from "@/components/common/navigation/navigation";
import { Reveal } from "@/components/common/reveal/reveal";
import * as S from './page.css';

export default function ImageCaptions() {
    return (
        <S.PageRoot>
            <Navigation />

            {/* ── Hero — one photograph, three diverging captions ─────────── */}
            <S.Hero>
                <S.HeroArt />
                <S.Captions aria-hidden>
                    <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
                        {/* the photograph */}
                        <g>
                            <rect x="900" y="90" width="300" height="200" rx="8" fill="none" stroke="#cf9a67" strokeWidth="2" opacity="0.7" />
                            <circle cx="1140" cy="130" r="18" fill="#cf9a67" opacity="0.55" />
                            <path d="M920,270 L1000,190 L1060,240 L1110,200 L1180,270 Z" fill="#cf9a67" opacity="0.35" />
                        </g>
                        {/* three caption cards, each describing it differently */}
                        <g fill="#8b8378" opacity="0.85">
                            <rect x="820" y="330" width="150" height="8" rx="4" />
                            <rect x="820" y="352" width="104" height="8" rx="4" />
                        </g>
                        <g fill="#8b8378" opacity="0.7">
                            <rect x="1020" y="330" width="90" height="8" rx="4" />
                            <rect x="1020" y="352" width="150" height="8" rx="4" />
                            <rect x="1020" y="374" width="60" height="8" rx="4" />
                        </g>
                        <g fill="#8b8378" opacity="0.55">
                            <rect x="1220" y="330" width="130" height="8" rx="4" />
                        </g>
                        {/* leader lines from photo to captions */}
                        <g stroke="#6e675d" strokeWidth="1.5" strokeDasharray="2 6" fill="none" opacity="0.6">
                            <path d="M980,292 C940,308 910,318 895,328" />
                            <path d="M1050,292 C1070,306 1085,316 1095,328" />
                            <path d="M1120,292 C1190,306 1250,318 1285,328" />
                        </g>
                    </svg>
                </S.Captions>
                <S.HeroInner>
                    <S.HeroEyebrow>Research · Crowdsourcing · UT Austin 2019</S.HeroEyebrow>
                    <S.HeroTitle>One Photo,<br />Many Truths</S.HeroTitle>
                    <S.HeroTagline>Ask a hundred people to caption the same image and they won&apos;t agree — so what do they think actually matters in a picture?</S.HeroTagline>
                </S.HeroInner>
            </S.Hero>

            <S.Wide>
                <Reveal>
                    <S.Stats>
                        <div className="cell"><div className="num hl">100</div><div className="lab">Images with varied<br />existing captions</div></div>
                        <div className="cell"><div className="num">5</div><div className="lab">Key elements ranked<br />per image by workers</div></div>
                        <div className="cell"><div className="num">MTurk</div><div className="lab">Amazon Mechanical Turk<br />workforce</div></div>
                        <div className="cell"><div className="num">1</div><div className="lab">Sample dataset of<br />caption key elements</div></div>
                    </S.Stats>
                </Reveal>
            </S.Wide>

            <S.Wrap>
                <Reveal>
                    <S.MetaGrid>
                        <div><S.MetaK>Year</S.MetaK><S.MetaV>2019 · UT Austin iSchool</S.MetaV></div>
                        <div><S.MetaK>With</S.MetaK><S.MetaV>Yiyan Huang</S.MetaV></div>
                        <div><S.MetaK>Course</S.MetaK><S.MetaV>Crowdsourcing &amp; Computer Vision</S.MetaV></div>
                        <div><S.MetaK>Deliverable</S.MetaK><S.MetaV>Study + interactive crowdsourcing framework</S.MetaV></div>
                    </S.MetaGrid>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The question</S.Eyebrow>
                        <S.H2>Caption datasets treat disagreement as noise. We treated it as data.</S.H2>
                        <S.Para>Image-captioning models are trained on human captions — but human captions of the same image <strong>vary wildly</strong>. One person names the objects; another describes the mood; a third mentions what everyone else skipped. If those differences aren&apos;t random, they tell you what people believe a description is <em>for</em>.</S.Para>
                        <S.Para>We designed a crowdsourcing study to find out: across annotators, <strong>which elements of an image do workers consider most important</strong> — and does knowing the captions will assist visually impaired users change what they write?</S.Para>
                        <S.Quote>Every caption is an opinion about what deserves to be said.</S.Quote>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Method</S.Eyebrow>
                        <S.H2>A hundred images, ranked element by element.</S.H2>
                        <S.Steps>
                            <div className="step"><div className="k">Step 1 · Collect</div><h4>Review the variants</h4><p>Amazon Mechanical Turk workers reviewed 100 images, each carrying existing caption variations from different annotators.</p></div>
                            <div className="step"><div className="k">Step 2 · Rank</div><h4>Name what matters</h4><p>For each image, workers identified and ranked the five elements they considered most important to a good description.</p></div>
                            <div className="step"><div className="k">Step 3 · Analyze</div><h4>Read the patterns</h4><p>We analyzed the rankings by word category and semantic content — including whether subjective descriptions get prioritized, and whether informed consent about the study&apos;s accessibility purpose shifted the annotations.</p></div>
                        </S.Steps>
                        <S.Para>The output: a <strong>sample dataset of key elements in image captions</strong> — a small map of what human describers actually value, built to inform how captioning data should be collected.</S.Para>
                        <S.Figure>
                            <S.Frame>
                                <S.Video>
                                    <iframe src="https://www.youtube.com/embed/MHpcgg2m5JY" title="Exploring Variances in Image Captions by Crowdsourcing Work — presentation" allowFullScreen loading="lazy" />
                                </S.Video>
                            </S.Frame>
                            <figcaption>The project presentation — study design, the MTurk pipeline, and what the rankings revealed.</figcaption>
                        </S.Figure>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Panel>
                        <S.Eyebrow>The thread</S.Eyebrow>
                        <S.PanelBig>This is where the crowdsourcing muscle got built.</S.PanelBig>
                        <S.Para>Designing this study — the task interface, the worker instructions, the quality checks — is the same craft I later brought to <S.PanelLink><Link href="/projects/inquisitive">INQUISITIVE</Link></S.PanelLink>&apos;s 19K-question collection, and the accessibility motivation (captions that serve visually impaired users) is the question <S.PanelLink><Link href="/projects/vizwiz">VizWiz</Link></S.PanelLink> picks up from the other side: when the image can&apos;t be described at all.</S.Para>
                    </S.Panel>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Try it</S.Eyebrow>
                        <S.H2>The framework still runs.</S.H2>
                        <S.Para>We built the crowdsourcing task as an interactive web framework — and it&apos;s still live, so you can walk through the exact flow our workers saw.</S.Para>
                        <S.Chips>
                            <S.Chip>Crowdsourcing</S.Chip>
                            <S.Chip>Computer vision</S.Chip>
                            <S.Chip>Mechanical Turk</S.Chip>
                            <S.Chip>Study design</S.Chip>
                            <S.Chip>Accessibility</S.Chip>
                        </S.Chips>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Cta>
                        <S.H2>See the study.</S.H2>
                        <S.Btns>
                            <S.Btn href="https://yuan00611.github.io/Crowdsourcing-Final-Project/" target="_blank" rel="noopener noreferrer">Try the live framework →</S.Btn>
                            <S.Btn $ghost href="https://yuan00611.github.io/document/Exploring_the_Variance_in_Image_Caption_by_Crowdsourcing_Work.pdf" target="_blank" rel="noopener noreferrer">Read the paper (PDF)</S.Btn>
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
