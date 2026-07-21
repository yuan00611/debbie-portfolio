"use client"

import Link from "next/link";
import { Navigation } from "@/components/common/navigation/navigation";
import { Reveal } from "@/components/common/reveal/reveal";
import * as S from './page.css';

export default function VizWiz() {
    return (
        <S.PageRoot>
            <Navigation />

            {/* ── Hero — an out-of-focus photo, and the question it raises ── */}
            <S.Hero>
                <S.HeroArt />
                <S.Blur aria-hidden>
                    <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <filter id="oof" x="-40%" y="-40%" width="180%" height="180%">
                                <feGaussianBlur stdDeviation="18" />
                            </filter>
                        </defs>
                        {/* the photo frame */}
                        <rect x="820" y="120" width="420" height="280" rx="10" fill="none" stroke="#9aa5ad" strokeWidth="2" opacity="0.6" />
                        {/* the out-of-focus subject */}
                        <g filter="url(#oof)" opacity="0.7">
                            <ellipse cx="990" cy="250" rx="90" ry="60" fill="#e585ad" />
                            <ellipse cx="1120" cy="300" rx="70" ry="46" fill="#9aa5ad" />
                            <ellipse cx="1060" cy="190" rx="50" ry="34" fill="#c4bcc2" />
                        </g>
                        {/* focus marks trying to lock */}
                        <g stroke="#e585ad" strokeWidth="3" fill="none" opacity="0.85">
                            <path d="M850,166 L850,146 L870,146" />
                            <path d="M1190,146 L1210,146 L1210,166" />
                            <path d="M1210,354 L1210,374 L1190,374" />
                            <path d="M870,374 L850,374 L850,354" />
                        </g>
                        {/* the caption line, and its question */}
                        <rect x="820" y="428" width="240" height="10" rx="5" fill="#565058" opacity="0.8" />
                        <rect x="1072" y="428" width="80" height="10" rx="5" fill="#565058" opacity="0.5" />
                        <text x="1180" y="446" fontSize="46" fill="#e585ad" opacity="0.9" fontFamily="Georgia, serif" fontStyle="italic">?</text>
                    </svg>
                </S.Blur>
                <S.HeroInner>
                    <S.HeroEyebrow>Research · Multimodal ML · UT Austin 2020</S.HeroEyebrow>
                    <S.HeroTitle>Is This<br />Answerable?</S.HeroTitle>
                    <S.HeroTagline>Blind users photograph the world and ask questions. Can a model tell — before wasting their time — whether an answer is even possible?</S.HeroTagline>
                </S.HeroInner>
            </S.Hero>

            <S.Wide>
                <Reveal>
                    <S.Stats>
                        <div className="cell"><div className="num hl">2nd</div><div className="lab">Place in the class<br />ML competition</div></div>
                        <div className="cell"><div className="num">~58%</div><div className="lab">Test accuracy<br />with AdaBoost</div></div>
                        <div className="cell"><div className="num">7</div><div className="lab">Models compared<br />head-to-head</div></div>
                        <div className="cell"><div className="num">2,000</div><div className="lab">Training samples<br />from VizWiz</div></div>
                    </S.Stats>
                </Reveal>
            </S.Wide>

            <S.Wrap>
                <Reveal>
                    <S.MetaGrid>
                        <div><S.MetaK>Year</S.MetaK><S.MetaV>2020 · UT Austin iSchool</S.MetaV></div>
                        <div><S.MetaK>Role</S.MetaK><S.MetaV>Solo — features, models &amp; analysis</S.MetaV></div>
                        <div><S.MetaK>Built with</S.MetaK><S.MetaV>Python · Azure CV &amp; Text Analytics</S.MetaV></div>
                        <div><S.MetaK>Dataset</S.MetaK><S.MetaV>VizWiz — photos &amp; questions from blind users</S.MetaV></div>
                    </S.MetaGrid>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The problem</S.Eyebrow>
                        <S.H2>Some questions can&apos;t be answered. Say so early.</S.H2>
                        <S.Para>The <strong>VizWiz</strong> dataset collects real photos taken by blind users, paired with the spoken questions they asked about them — everyday visual challenges, from reading a label to identifying a color. But many of those photo-question pairs are <strong>unanswerable</strong>: the shot is blurred, the subject is out of frame, the light is gone.</S.Para>
                        <S.Para>A system that knows a question is unanswerable can say so immediately — and ask for a retake — instead of returning a confident wrong answer. The task: <strong>predict answerability</strong> from the image and the question together.</S.Para>
                        <S.Quote>For a sighted user, a failed photo costs a retake. For a blind user, it costs trust.</S.Quote>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Method</S.Eyebrow>
                        <S.H2>Two signals: what the camera saw, and what the person asked.</S.H2>
                        <S.Tracks>
                            <div className="track"><div className="kind">Signal 1 · The image</div><h4>How usable is the photo?</h4><p>Blur value, dominant foreground and background colors, and image tags — extracted with Azure Computer Vision — to estimate whether the picture holds enough to work with.</p></div>
                            <div className="track q"><div className="kind">Signal 2 · The question</div><h4>What is being asked?</h4><p>Sentiment, key phrases, and the question&apos;s opening word — from Azure Text Analytics — because &quot;what color…&quot; and &quot;when does this expire…&quot; fail in very different ways.</p></div>
                        </S.Tracks>
                        <S.Para>Categorical features were one-hot encoded, then PCA reduced the space to <strong>25 components</strong>. Seven classifiers went head-to-head on 2,000 training / 300 validation samples:</S.Para>
                        <S.Models>
                            <span className="model">KNN</span>
                            <span className="model">Decision Tree</span>
                            <span className="model">SVM</span>
                            <span className="model">Naive Bayes</span>
                            <span className="model">Neural Network</span>
                            <span className="model">Voting Classifier</span>
                            <span className="model win">AdaBoost ✓</span>
                        </S.Models>
                        <S.Para><strong>AdaBoost</strong> won at roughly 58% test accuracy — enough for <strong>second place</strong> in the class competition.</S.Para>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Panel>
                        <S.Eyebrow>Reflection</S.Eyebrow>
                        <S.PanelBig>What 58% taught me.</S.PanelBig>
                        <S.Para>Fifty-eight percent is an honest number: with 2020&apos;s hand-engineered features and classic classifiers, multimodal answerability is genuinely hard — the meaning lives <strong>between</strong> the image and the question, exactly where feature engineering struggles to reach. Today a vision-language model would eat this task; what survives is the framing.</S.Para>
                        <S.Para>Because the durable part was never the AdaBoost. It&apos;s the product instinct: <strong>an AI that admits &quot;I can&apos;t answer this&quot; earns more trust than one that guesses</strong> — the same principle I&apos;d later carry into designing AI interfaces.</S.Para>
                    </S.Panel>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The thread</S.Eyebrow>
                        <S.H2>One study, two running themes.</S.H2>
                        <S.Para>This project sits where two threads of my work cross: <strong>accessibility</strong> — designing for users the mainstream pipeline forgets, like the WCAG redesign in <S.PanelLink><Link href="/projects/lifelong">LifeLong Medical Care</Link></S.PanelLink> — and <strong>questions as data</strong>, the same instinct behind <S.PanelLink><Link href="/projects/inquisitive">INQUISITIVE</Link></S.PanelLink>, where we captured what curious readers ask at scale.</S.Para>
                        <S.Chips>
                            <S.Chip>Python</S.Chip>
                            <S.Chip>scikit-learn</S.Chip>
                            <S.Chip>Azure Computer Vision</S.Chip>
                            <S.Chip>PCA</S.Chip>
                            <S.Chip>Accessibility</S.Chip>
                        </S.Chips>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Cta>
                        <S.H2>Read the full report.</S.H2>
                        <S.Btns>
                            <S.Btn href="https://yuan00611.github.io/document/Answerability%20Classification%20with%20VizWiz%20Dataset.html" target="_blank" rel="noopener noreferrer">Read the report →</S.Btn>
                            <S.Btn $ghost href="https://vizwiz.org/tasks-and-datasets/vqa/" target="_blank" rel="noopener noreferrer">The VizWiz dataset</S.Btn>
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
