"use client"

import Link from "next/link";
import { Navigation } from "@/components/common/navigation/navigation";
import { Reveal } from "@/components/common/reveal/reveal";
import * as S from './page.css';

export default function HumanAndDog() {
    return (
        <S.PageRoot>
            <Navigation />

            {/* ── Hero — two doors, two protagonists ──────────────────────── */}
            <S.Hero>
                <S.HeroArt />
                <S.Doors aria-hidden>
                    <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice">
                        {/* human's door — slate */}
                        <g stroke="#8fa3b8" strokeWidth="2" fill="none" opacity="0.55">
                            <rect x="180" y="220" width="150" height="240" rx="4" />
                            <line x1="255" y1="220" x2="255" y2="460" opacity="0.5" />
                            <circle cx="310" cy="345" r="4" fill="#8fa3b8" />
                        </g>
                        {/* dividing wall */}
                        <line x1="720" y1="140" x2="720" y2="470" stroke="#5a6068" strokeWidth="3" opacity="0.6" />
                        {/* dog's door — signal orange, slightly smaller */}
                        <g stroke="#e08a4d" strokeWidth="2" fill="none" opacity="0.55">
                            <rect x="1120" y="290" width="120" height="170" rx="4" />
                            <line x1="1180" y1="290" x2="1180" y2="460" opacity="0.5" />
                            <circle cx="1222" cy="380" r="4" fill="#e08a4d" />
                        </g>
                        {/* floor */}
                        <line x1="0" y1="460" x2="1440" y2="460" stroke="#5a6068" strokeWidth="2" opacity="0.45" />
                    </svg>
                </S.Doors>
                <S.HeroInner>
                    <S.HeroEyebrow>Case study · Asymmetric co-op · PC · 2016</S.HeroEyebrow>
                    <S.HeroTitle>Human<br />and Dog</S.HeroTitle>
                    <S.HeroTagline>An experiment on unequal communication — a co-op escape game where one of you is human, and one of you is a dog.</S.HeroTagline>
                </S.HeroInner>
            </S.Hero>

            <S.Wide>
                <Reveal>
                    <S.Stats>
                        <div className="cell"><div className="num hl">Top 3</div><div className="lab">Honor of Innovation in<br />Game Design</div></div>
                        <div className="cell"><div className="num">CHI &apos;16</div><div className="lab">Student Game<br />Competition</div></div>
                        <div className="cell"><div className="num">×2</div><div className="lab">Protagonists with<br />asymmetric abilities</div></div>
                        <div className="cell"><div className="num">NTU</div><div className="lab">Team project,<br />National Taiwan University</div></div>
                    </S.Stats>
                </Reveal>
            </S.Wide>

            <S.Wrap>
                <Reveal>
                    <S.MetaGrid>
                        <div><S.MetaK>Year</S.MetaK><S.MetaV>2016</S.MetaV></div>
                        <div><S.MetaK>Role</S.MetaK><S.MetaV>Programmer · puzzle design · user testing</S.MetaV></div>
                        <div><S.MetaK>Built with</S.MetaK><S.MetaV>Unity · PC</S.MetaV></div>
                        <div><S.MetaK>Type</S.MetaK><S.MetaV>Cooperative escape game</S.MetaV></div>
                    </S.MetaGrid>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The premise</S.Eyebrow>
                        <S.H2>Two players. Unequal abilities. One way out.</S.H2>
                        <S.Para>Human and Dog is a cooperative escape game inspired by a real-world relationship: two protagonists, <strong>one human and one dog</strong>, locked in the same room. Each has asymmetric advantages that unlock different parts of each task — and they can only coordinate through <strong>unequal communicative capabilities</strong>, just like a real person and a real dog.</S.Para>
                        <S.Para>Neither player can escape alone. The game&apos;s entire design question is how much two minds can share when their channels don&apos;t match.</S.Para>
                        <S.Quote>The dog can see the answer. The human can type it. Neither can leave without the other.</S.Quote>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Puzzle design</S.Eyebrow>
                        <S.H2>The answer is visible — just not to you.</S.H2>
                        <S.Para>We designed each level to force unequal ability and unequal information. In the signature puzzle, the level&apos;s answer can be seen by the dog but not by the human — and the only bridge between them is a clumsy, dog-sized vocabulary.</S.Para>
                        <S.Loop>
                            <div className="step"><div className="who dog">The dog · sees</div><h4>Only the dog sees it</h4><p>The level&apos;s answer is visible from the dog&apos;s side of the room — the human&apos;s view hides it completely.</p></div>
                            <div className="step"><div className="who dog">The dog · signals</div><h4>Cards for words</h4><p>The dog matches the periodic table of elements against playing cards — the only &quot;language&quot; it has to tell the human what it saw.</p></div>
                            <div className="step"><div className="who human">The human · solves</div><h4>The password</h4><p>The human decodes the signals and enters the password into the computer to clear the level.</p></div>
                        </S.Loop>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Panel>
                        <S.Eyebrow>My role</S.Eyebrow>
                        <S.PanelBig>Designing inequality carefully, then building it in Unity.</S.PanelBig>
                        <S.Para>Because the point was to study the unequal communication mode between people and dogs, we kept debating how each puzzle should distribute ability and information between the two roles. Once a design held up, I <strong>built the level in Unity</strong> — the split views, the card-matching interactions, and the password terminal.</S.Para>
                        <S.Para>After the build, I also helped run the user testing sessions.</S.Para>
                    </S.Panel>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>What testing revealed</S.Eyebrow>
                        <S.H2>Players invented languages we never designed.</S.H2>
                        <S.Para>In user testing, players kept finding <strong>their own creative ways to play and communicate</strong> — improvised signals and shorthand that went far beyond the channels we&apos;d built for them.</S.Para>
                        <S.Para>That was the real discovery for me: how people construct communication under constraints is a research topic in its own right. It&apos;s the question that pulled me toward studying human–computer interaction seriously.</S.Para>
                        <S.Figure>
                            <S.Frame>
                                <S.Video>
                                    <iframe src="https://www.youtube.com/embed/-uAuLb1WQFQ" title="Human and Dog promotional video" allowFullScreen loading="lazy" />
                                </S.Video>
                            </S.Frame>
                            <figcaption>Promotional video — the human&apos;s room, the dog&apos;s view, and the gap between them.</figcaption>
                        </S.Figure>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Honor</S.Eyebrow>
                        <S.H2>Top 3 at the CHI 2016 Student Game Competition.</S.H2>
                        <S.Honor>
                            <div className="icon">◧<small>CHI &apos;16</small></div>
                            <div>
                                <h3>Honor of Innovation in Game Design</h3>
                                <p>Human and Dog placed in the top 3 of the CHI 2016 Student Game Competition, recognized for innovation in game design — and was published as an extended abstract in the ACM digital library. <a href="https://dl.acm.org/citation.cfm?id=2851581.2890373" target="_blank" rel="noopener noreferrer">Read the article →</a></p>
                            </div>
                        </S.Honor>
                        <S.Figure>
                            <S.Frame>
                                <S.Video>
                                    <iframe src="https://www.youtube.com/embed/ToEe0hTAWnI?start=2633" title="CHI 2016 Student Game Competition session — Human and Dog presentation" allowFullScreen loading="lazy" />
                                </S.Video>
                            </S.Frame>
                            <figcaption>Presenting Human and Dog at CHI 2016 — the session recording, cued to our slot.</figcaption>
                        </S.Figure>
                        <S.Chips>
                            <S.Chip>Unity</S.Chip>
                            <S.Chip>C#</S.Chip>
                            <S.Chip>Asymmetric co-op</S.Chip>
                            <S.Chip>Game research</S.Chip>
                            <S.Chip>CHI publication</S.Chip>
                        </S.Chips>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Cta>
                        <S.H2>Watch the two rooms talk to each other.</S.H2>
                        <S.Btns>
                            <S.Btn href="https://www.youtube.com/watch?v=-uAuLb1WQFQ" target="_blank" rel="noopener noreferrer">Watch the promo →</S.Btn>
                            <S.Btn $ghost href="https://dl.acm.org/citation.cfm?id=2851581.2890373" target="_blank" rel="noopener noreferrer">Read the CHI article</S.Btn>
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
