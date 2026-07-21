"use client"

import Link from "next/link";
import { Navigation } from "@/components/common/navigation/navigation";
import { Reveal } from "@/components/common/reveal/reveal";
import * as S from './page.css';

export default function Inquisitive() {
    return (
        <S.PageRoot>
            <Navigation />

            {/* ── Hero — a marked sentence, and the question it raises ────── */}
            <S.Hero>
                <S.HeroArt />
                <S.TextArt aria-hidden>
                    <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
                        {/* lines of text */}
                        <g fill="#565068" opacity="0.8">
                            <rect x="760" y="180" width="420" height="10" rx="5" />
                            <rect x="760" y="212" width="500" height="10" rx="5" />
                            <rect x="760" y="244" width="150" height="10" rx="5" />
                            {/* the marked span */}
                            <rect x="922" y="244" width="230" height="10" rx="5" fill="#e6c94a" opacity="0.9" />
                            <rect x="1164" y="244" width="96" height="10" rx="5" />
                            <rect x="760" y="276" width="470" height="10" rx="5" />
                            <rect x="760" y="308" width="380" height="10" rx="5" />
                        </g>
                        {/* the question rising from the mark */}
                        <path d="M1037,232 C1037,190 1080,168 1080,132" stroke="#a394f0" strokeWidth="2" fill="none" opacity="0.7" strokeDasharray="2 6" />
                        <text x="1062" y="120" fontSize="64" fill="#a394f0" opacity="0.85" fontFamily="Georgia, serif" fontStyle="italic">?</text>
                    </svg>
                </S.TextArt>
                <S.HeroInner>
                    <S.HeroEyebrow>Research · NLP · EMNLP 2020</S.HeroEyebrow>
                    <S.HeroTitle>Teaching Models<br />to Wonder</S.HeroTitle>
                    <S.HeroTagline>INQUISITIVE: ~19K questions people asked while reading the news — and whether a model can learn to ask them too.</S.HeroTagline>
                </S.HeroInner>
            </S.Hero>

            <S.Wide>
                <Reveal>
                    <S.Stats>
                        <div className="cell"><div className="num hl">~19K</div><div className="lab">Questions elicited<br />while reading</div></div>
                        <div className="cell"><div className="num">EMNLP</div><div className="lab">2020 main<br />conference</div></div>
                        <div className="cell"><div className="num">GPT-2</div><div className="lab">Question-generation<br />models evaluated</div></div>
                        <div className="cell"><div className="num">2nd</div><div className="lab">Author, with<br />UT Austin NLP</div></div>
                    </S.Stats>
                </Reveal>
            </S.Wide>

            <S.Wrap>
                <Reveal>
                    <S.MetaGrid>
                        <div><S.MetaK>Year</S.MetaK><S.MetaV>2020 · UT Austin</S.MetaV></div>
                        <div><S.MetaK>With</S.MetaK><S.MetaV>Wei-Jen Ko, Yiyan Huang, Greg Durrett &amp; Junyi Jessy Li</S.MetaV></div>
                        <div><S.MetaK>My part</S.MetaK><S.MetaV>Crowdsourcing interface &amp; data quality</S.MetaV></div>
                        <div><S.MetaK>Published at</S.MetaK><S.MetaV>EMNLP 2020 (main)</S.MetaV></div>
                    </S.MetaGrid>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The idea</S.Eyebrow>
                        <S.H2>Real readers don&apos;t ask quiz questions. They wonder.</S.H2>
                        <S.Para>When you read a news article, questions surface on their own — <S.Mark>why did this happen?</S.Mark> <S.Mark>what&apos;s the background here?</S.Mark> They come naturally to humans, and they aim at something most QA datasets never touch: not facts you can highlight in the text, but the <strong>high-level, semantic and discourse-level comprehension</strong> of what you&apos;re reading.</S.Para>
                        <S.Quote>
                            Inquisitive probing questions come naturally to humans — but are a challenging task for automatic systems.
                            <cite>— from the paper</cite>
                        </S.Quote>
                        <S.Para>Models trained on existing datasets couldn&apos;t generate questions like these. So the first step wasn&apos;t a model at all — it was capturing what genuine curiosity looks like, at scale.</S.Para>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The dataset</S.Eyebrow>
                        <S.H2>INQUISITIVE: curiosity, caught in the act.</S.H2>
                        <S.Para>We collected <strong>~19,000 questions elicited while people read through news documents</strong> — asked mid-reading, at the exact sentence that triggered them, before the answer (if any) arrived later in the text.</S.Para>
                        <S.Kinds>
                            <div className="kindCard"><div className="k">What readers seek</div><h4>Gaps in knowledge</h4><p>Background information, deeper reasons behind events, elaborations on what&apos;s just been said — the questions target understanding, not retrieval.</p></div>
                            <div className="kindCard"><div className="k">What the data showed</div><h4>Pragmatic strategies</h4><p>Readers turn out to engage in a series of consistent pragmatic strategies to seek information — curiosity has structure, and now there was a dataset large enough to see it.</p></div>
                        </S.Kinds>
                        <S.Para>With the dataset in place, we evaluated question-generation models based on <strong>GPT-2</strong>: they could produce reasonable inquisitive questions — the task is genuinely hard — and the experiments highlighted how much <strong>context</strong> matters for asking a good one.</S.Para>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Panel>
                        <S.Eyebrow>My role</S.Eyebrow>
                        <S.PanelBig>19,000 clean questions don&apos;t collect themselves.</S.PanelBig>
                        <S.Para>I was the design technologist inside the NLP lab: I helped <strong>develop the crowdsourcing interface</strong> that annotators used to read articles and record their questions at the right sentence — and owned <strong>data cleanliness</strong>, making sure what reached the modeling experiments was consistent and trustworthy. In dataset papers, the instrument is the interface; if it lets in noise, every downstream result inherits it.</S.Para>
                    </S.Panel>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Publication</S.Eyebrow>
                        <S.H2>Published at EMNLP 2020.</S.H2>
                        <S.Pubs>
                            <div className="pub">
                                <div className="venue">Main conference · EMNLP 2020</div>
                                <p className="cite">Ko, W.-J., <b>Chen, T.-Y.</b>, Huang, Y., Durrett, G., &amp; Li, J. J. (2020). Inquisitive Question Generation for High Level Text Comprehension. In <em>Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP)</em>. Association for Computational Linguistics.</p>
                                <div className="links">
                                    <a href="https://aclanthology.org/2020.emnlp-main.530/" target="_blank" rel="noopener noreferrer">ACL Anthology →</a>
                                    <span>·</span>
                                    <a href="https://aclanthology.org/2020.emnlp-main.530.pdf" target="_blank" rel="noopener noreferrer">PDF →</a>
                                    <span>·</span>
                                    <a href="https://github.com/wjko2/INQUISITIVE" target="_blank" rel="noopener noreferrer">Dataset →</a>
                                </div>
                            </div>
                        </S.Pubs>
                        <S.Chips>
                            <S.Chip>NLP</S.Chip>
                            <S.Chip>Question generation</S.Chip>
                            <S.Chip>Dataset construction</S.Chip>
                            <S.Chip>Crowdsourcing</S.Chip>
                            <S.Chip>GPT-2</S.Chip>
                        </S.Chips>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Panel>
                        <S.Eyebrow>Where this went next</S.Eyebrow>
                        <S.PanelBig>Anticipating questions became a design skill.</S.PanelBig>
                        <S.Para>Studying what curious readers ask is the same muscle as designing what an AI product should offer to ask. Years later, that instinct shaped the <strong>Quick Queries</strong> system in Athena&apos;s AI chat — curated, contextual questions that give users a way in. <S.PanelLink><Link href="/projects/athena">See it in Athena →</Link></S.PanelLink></S.Para>
                    </S.Panel>
                </Reveal>

                <Reveal>
                    <S.Cta>
                        <S.H2>Read the paper.</S.H2>
                        <S.Btns>
                            <S.Btn href="https://aclanthology.org/2020.emnlp-main.530.pdf" target="_blank" rel="noopener noreferrer">Read the paper (PDF) →</S.Btn>
                            <S.Btn $ghost href="https://github.com/wjko2/INQUISITIVE" target="_blank" rel="noopener noreferrer">Explore the dataset</S.Btn>
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
