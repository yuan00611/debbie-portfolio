"use client"

import Link from "next/link";
import { Navigation } from "@/components/common/navigation/navigation";
import { Reveal } from "@/components/common/reveal/reveal";
import * as S from './page.css';

export default function Mbti() {
    return (
        <S.PageRoot>
            <Navigation />

            {/* ── Hero — the 16-type grid, one cell lit ───────────────────── */}
            <S.Hero>
                <S.HeroArt />
                <S.TypeGrid aria-hidden>
                    <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
                        <g>
                            {[0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => {
                                const lit = r === 1 && c === 2;
                                return (
                                    <rect
                                        key={`${r}-${c}`}
                                        x={880 + c * 92}
                                        y={110 + r * 92}
                                        width="76"
                                        height="76"
                                        rx="12"
                                        fill={lit ? "#b8d45e" : "#ce8ade"}
                                        opacity={lit ? 0.85 : 0.12 + ((r * 4 + c) % 5) * 0.06}
                                    />
                                );
                            }))}
                        </g>
                        <text x="918" y="212" fontSize="26" fill="#151116" fontFamily="Georgia, serif" fontStyle="italic" opacity="0" aria-hidden>?</text>
                    </svg>
                </S.TypeGrid>
                <S.HeroInner>
                    <S.HeroEyebrow>Research · NLP · UT Austin 2020</S.HeroEyebrow>
                    <S.HeroTitle>Sixteen Ways<br />of Writing</S.HeroTitle>
                    <S.HeroTagline>Can recurrent networks read your MBTI type from nothing but the way you use language?</S.HeroTagline>
                </S.HeroInner>
            </S.Hero>

            <S.Wide>
                <Reveal>
                    <S.Stats>
                        <div className="cell"><div className="num hl">0.938</div><div className="lab">Best prediction<br />accuracy</div></div>
                        <div className="cell"><div className="num">1st</div><div className="lab">Popular vote,<br />Best Project Award</div></div>
                        <div className="cell"><div className="num">3</div><div className="lab">Architectures —<br />GRU · LSTM · RNN</div></div>
                        <div className="cell"><div className="num">16</div><div className="lab">Personality types<br />to tell apart</div></div>
                    </S.Stats>
                </Reveal>
            </S.Wide>

            <S.Wrap>
                <Reveal>
                    <S.MetaGrid>
                        <div><S.MetaK>Year</S.MetaK><S.MetaV>Spring 2020 · UT Austin iSchool</S.MetaV></div>
                        <div><S.MetaK>With</S.MetaK><S.MetaV>Yiyan Huang</S.MetaV></div>
                        <div><S.MetaK>Built with</S.MetaK><S.MetaV>Python · Keras · Azure Text Analytics</S.MetaV></div>
                        <div><S.MetaK>Course</S.MetaK><S.MetaV>Intro to Machine Learning</S.MetaV></div>
                    </S.MetaGrid>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The question</S.Eyebrow>
                        <S.H2>Personality leaks into language. How much can a model recover?</S.H2>
                        <S.Para>MBTI sorts people into sixteen types along four dichotomies — introvert or extrovert, sensing or intuition, thinking or feeling, judging or perceiving. The premise of this project: those dispositions leave fingerprints in <strong>how people write</strong>, and a sequence model should be able to pick them up.</S.Para>
                        <S.Quote>You never told the model your type. Your sentences did.</S.Quote>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Method</S.Eyebrow>
                        <S.H2>Three architectures, and two bets that didn&apos;t pay.</S.H2>
                        <S.Para>We trained <strong>GRU, LSTM, and vanilla RNN</strong> models on an MBTI-labeled text dataset, sweeping hyperparameters — node counts, dropout regularization, epochs — until the best configuration reached <strong>0.938 accuracy</strong>.</S.Para>
                        <S.Experiments>
                            <div className="exp"><div className="k">Core</div><h4>Sequence models</h4><p>GRU vs. LSTM vs. RNN on the language itself — the sweep that produced the 0.938 winner.</p></div>
                            <div className="exp"><div className="k">Bet 1</div><h4>Azure sentiment</h4><p>Adding sentiment scores as an extra feature — it contributed less than we hoped. Tone alone isn&apos;t type.</p></div>
                            <div className="exp"><div className="k">Bet 2</div><h4>Twitter transfer</h4><p>Predicting types from real tweets — limited effectiveness. Short, noisy posts don&apos;t carry the same signal as forum-length text.</p></div>
                        </S.Experiments>
                        <S.Para>The negative results were the honest half of the report: the headline number lives on in-domain data, and the two extensions showed exactly where the signal thins out.</S.Para>
                        <S.Figure>
                            <S.Frame>
                                <S.Video>
                                    <iframe src="https://www.youtube.com/embed/e77I8k1fEk8" title="Predicting MBTI Personalities based on Language Usage — presentation" allowFullScreen loading="lazy" />
                                </S.Video>
                            </S.Frame>
                            <figcaption>The project presentation — the one that took the class&apos;s popular vote for Best Project.</figcaption>
                        </S.Figure>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Panel>
                        <S.Eyebrow>The award</S.Eyebrow>
                        <S.PanelBig>First place, by popular vote.</S.PanelBig>
                        <S.Para>Among all final projects in the Spring 2020 machine learning class, ours won the <strong>popular vote for the Best Project Award</strong> — partly for the number, mostly (I suspect) for a topic every classmate immediately wanted to test on themselves.</S.Para>
                    </S.Panel>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Reflection</S.Eyebrow>
                        <S.H2>A charming premise deserves honest caveats.</S.H2>
                        <S.Para>MBTI itself is a contested instrument, and a model this accurate on curated data says more about <strong>how distinctly people write in type-labeled communities</strong> than about psychology. That&apos;s the useful lesson: a great demo number always deserves the follow-up question — <em>on whose data, and would it survive the real world?</em> The Twitter experiment answered it honestly: not yet.</S.Para>
                        <S.Chips>
                            <S.Chip>NLP</S.Chip>
                            <S.Chip>GRU / LSTM / RNN</S.Chip>
                            <S.Chip>Hyperparameter tuning</S.Chip>
                            <S.Chip>Azure Text Analytics</S.Chip>
                        </S.Chips>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Cta>
                        <S.H2>Read the full report.</S.H2>
                        <S.Btns>
                            <S.Btn href="https://yuan00611.github.io/document/Predicting%20MBTI%20Personalities%20based%20on%20Language%20Usage.pdf" target="_blank" rel="noopener noreferrer">Read the paper (PDF) →</S.Btn>
                            <S.Btn $ghost href="https://yuan00611.github.io/document/Predicting%20MBTI%20Personalities%20based%20on%20Language%20Usage.html" target="_blank" rel="noopener noreferrer">Project report</S.Btn>
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
