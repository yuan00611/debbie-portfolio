"use client"

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/common/navigation/navigation";
import { Reveal } from "@/components/common/reveal/reveal";
import * as S from './page.css';

export default function WhereWordsBegin() {
    return (
        <S.PageRoot>
            <Navigation />

            {/* ── Hero — ink-wash ridges, no image dependency ─────────────── */}
            <S.Hero>
                <S.HeroArt />
                <S.Ridge $bottom="30%" $opacity={0.28} aria-hidden>
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,80 C240,30 480,90 720,60 C960,30 1200,80 1440,50 L1440,120 L0,120 Z" fill="#8b9880" /></svg>
                </S.Ridge>
                <S.Ridge $bottom="18%" $opacity={0.34} aria-hidden>
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,70 C300,110 520,40 760,75 C1020,110 1200,50 1440,80 L1440,120 L0,120 Z" fill="#727f66" /></svg>
                </S.Ridge>
                <S.Ridge $bottom="6%" $opacity={0.42} aria-hidden>
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,90 C260,50 500,95 780,70 C1040,45 1240,90 1440,65 L1440,120 L0,120 Z" fill="#5c6650" /></svg>
                </S.Ridge>
                <S.HeroInner>
                    <S.HeroEyebrow>Playable case study · Game design</S.HeroEyebrow>
                    <S.HeroTitle>Where Words<br />Begin</S.HeroTitle>
                    <S.HeroZh>拾字旅人</S.HeroZh>
                    <S.HeroTagline>A game about how Chinese characters were born — and what it feels like to name the world.</S.HeroTagline>
                    <S.HeroPlay href="https://where-words-begin.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Play it in your browser →
                    </S.HeroPlay>
                </S.HeroInner>
            </S.Hero>

            <S.Wrap>
                <Reveal>
                    <S.MetaGrid>
                        <div><S.MetaK>Year</S.MetaK><S.MetaV>2026</S.MetaV></div>
                        <div><S.MetaK>Role</S.MetaK><S.MetaV>Solo — design, engineering &amp; art</S.MetaV></div>
                        <div><S.MetaK>Type</S.MetaK><S.MetaV>Narrative exploration game</S.MetaV></div>
                        <div><S.MetaK>Stack</S.MetaK><S.MetaV>Phaser 3 · TypeScript · Vite</S.MetaV></div>
                    </S.MetaGrid>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The premise</S.Eyebrow>
                        <S.H2>Most apps treat characters as symbols to memorize. I wanted the opposite.</S.H2>
                        <S.Para>Language-learning tools tend to hand you a character and ask you to remember it. <S.Zh>拾字旅人</S.Zh> starts somewhere quieter: in a world where things exist <em>before</em> they have names. You see a tree, a river, a mountain — but you don&apos;t yet hold the words for them.</S.Para>
                        <S.Para>You earn a character not by studying it, but by <strong>truly observing the thing itself</strong>. Watch how bamboo divides into segments, how it trembles in the wind — and the pictograph <S.Zh>竹</S.Zh> emerges from what you saw. Learning becomes noticing.</S.Para>
                        <S.Quote>I&apos;m not collecting characters. I&apos;m helping someone say what they couldn&apos;t before.</S.Quote>
                        <S.Figure>
                            <S.Frame>
                                <Image
                                    src="/WWB-valley.png"
                                    alt="A misty ink-wash valley: a small hut, stone path, pines and bamboo below layered mountains"
                                    width={1600}
                                    height={896}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 860px) 100vw, 804px"
                                />
                            </S.Frame>
                            <figcaption>The valley — things exist here before they have names.</figcaption>
                        </S.Figure>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The core loop</S.Eyebrow>
                        <S.H2>Observe, unlock, understand, help.</S.H2>
                        <S.Para>The whole game runs on one loop. Every design decision protects it — especially the choice to make observation take <em>effort</em>. You can&apos;t walk past a tree and collect a word; you look, you touch, you listen, and only then does the character reveal itself.</S.Para>
                        <S.Loop>
                            <div className="step"><div className="n">01</div><h4>Observe</h4><p>Look, touch, and listen to something in the valley.</p></div>
                            <div className="step"><div className="n">02</div><h4>Unlock</h4><p>Its shape simplifies into a pictograph.</p></div>
                            <div className="step"><div className="n">03</div><h4>Understand</h4><p>The new word unlocks hidden dialogue.</p></div>
                            <div className="step"><div className="n">04</div><h4>Help</h4><p>Use what you know to guide a lost child home.</p></div>
                        </S.Loop>
                        <S.Figure>
                            <S.Frame>
                                <Image
                                    src="/WWB-journal.png"
                                    alt="The journal's 竹 · zhú entry: bamboo grove, simplified strokes, then the character — with the observations that earned it"
                                    width={1600}
                                    height={900}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 860px) 100vw, 804px"
                                />
                            </S.Frame>
                            <figcaption>The journal records not just the character, but what the player observed to earn it.</figcaption>
                        </S.Figure>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Panel>
                        <S.Eyebrow>Technical signature</S.Eyebrow>
                        <S.PanelBig>Every pixel is painted in code.</S.PanelBig>
                        <S.Para>There are no sprite sheets. The ink-wash mountains, the paper-doll traveler, the calligraphy of each character — all of it is drawn procedurally at runtime onto canvas textures through a set of painter helpers. The only binary asset in the entire project is the music track.</S.Para>
                        <S.Para>This was the risk worth taking. It meant the art and the engineering couldn&apos;t be separated — the visual identity <em>is</em> the codebase. It&apos;s also what lets the whole valley stay under a few hundred kilobytes and load instantly in a browser.</S.Para>
                        <S.TwoUp>
                            <S.Frame>
                                <Image
                                    src="/WWB.png"
                                    alt="Title screen: layered ink-wash mountains in mist, with the game's name in serif type"
                                    width={1600}
                                    height={896}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 860px) 100vw, 392px"
                                />
                            </S.Frame>
                            <S.Frame>
                                <Image
                                    src="/WWB-night.png"
                                    alt="A lamplit hut interior at night: the traveler, an elder, scrolls and a low wooden table"
                                    width={1600}
                                    height={967}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 860px) 100vw, 392px"
                                />
                            </S.Frame>
                        </S.TwoUp>
                    </S.Panel>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Making it open to everyone</S.Eyebrow>
                        <S.H2>Designed for players who&apos;ve never seen a Chinese character.</S.H2>
                        <S.Para>The goal was discovery, not drilling — which meant the experience had to welcome someone with zero background. Accessibility here isn&apos;t a compliance checklist; it&apos;s the same commitment that ran through my healthcare redesign work, applied to a game.</S.Para>
                        <S.CleanList>
                            <li><b>No prior knowledge assumed</b> — every essential instruction is in plain English.</li>
                            <li><b>Fully keyboard-playable</b> — move, observe, browse the journal, advance dialogue.</li>
                            <li><b>Motion can be turned off</b> — the character-unlock animations are optional.</li>
                            <li><b>Never color alone</b> — no gameplay information is communicated by color by itself.</li>
                            <li><b>Honest about history</b> — a note reminds players that character origins are often debated, not simple pictures.</li>
                        </S.CleanList>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Under the hood</S.Eyebrow>
                        <S.H2>Built like a product, not a prototype.</S.H2>
                        <S.Para>Even as a 10–15 minute vertical slice, the project is structured to grow. Characters, dialogue, observations, and quests all live as typed data — never hardcoded into scenes — so adding a new <S.Zh>字</S.Zh> is a data change, not a rewrite.</S.Para>
                        <S.Chips>
                            <S.Chip>Phaser 3</S.Chip>
                            <S.Chip>TypeScript (strict)</S.Chip>
                            <S.Chip>Vite</S.Chip>
                            <S.Chip>Vitest</S.Chip>
                            <S.Chip>GitHub Actions CI</S.Chip>
                            <S.Chip>localStorage saves</S.Chip>
                        </S.Chips>
                        <S.Arch>
                            <summary>Architecture &amp; engineering discipline</summary>
                            <div className="body">
                                <S.Para>Scenes are thin; logic lives in systems (observation, dialogue, quests, save) and content lives in data files. Data-contract tests run in Vitest with no rendering, so the game&apos;s content can&apos;t drift out of sync with its types. Format → type-check → test → build runs on every push through GitHub Actions.</S.Para>
                                <S.Para>The repo also keeps its own working knowledge in versioned files — an engineering handbook, a bilingual dev diary, and reusable step-by-step procedures for tasks like adding a new character. It&apos;s a small game, but it&apos;s documented like something meant to last.</S.Para>
                            </div>
                        </S.Arch>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Reflection</S.Eyebrow>
                        <S.H2>The hardest part wasn&apos;t the code. It was the feeling.</S.H2>
                        <S.Para>Turning linguistics into <em>game feel</em> — making the moment a character emerges land as a small revelation rather than a quiz result — took more iteration than any system. This slice covers seven pictographs and one quest line; it&apos;s a proof of the loop, and the loop works.</S.Para>
                        <S.Para>What I keep coming back to is the ending: the first words the player finds don&apos;t just name the world. <strong>They help someone say where they belong.</strong> That&apos;s the whole thesis of the game, and the reason I built it.</S.Para>
                        <S.Figure>
                            <S.Frame>
                                <Image
                                    src="/WWB-stream.png"
                                    alt="The traveler meets the lost child beside a stream, a campfire burning nearby in the misty valley"
                                    width={1600}
                                    height={901}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 860px) 100vw, 804px"
                                />
                            </S.Frame>
                            <figcaption>By the stream: the words you found, helping someone find their way home.</figcaption>
                        </S.Figure>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Cta>
                        <S.H2>Play the vertical slice.</S.H2>
                        <S.Btns>
                            <S.Btn href="https://where-words-begin.vercel.app/" target="_blank" rel="noopener noreferrer">Play it in your browser →</S.Btn>
                            <S.Btn $ghost href="https://github.com/yuan00611/where-words-begin" target="_blank" rel="noopener noreferrer">View the code</S.Btn>
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
