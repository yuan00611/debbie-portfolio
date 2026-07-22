"use client"

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/common/navigation/navigation";
import { Reveal } from "@/components/common/reveal/reveal";
import * as S from './page.css';
import BaseballPng from '../../../public/Baseball-map.png';

export default function BaseballPlayersTW() {
    return (
        <S.PageRoot>
            <Navigation />

            {/* ── Hero — the story the map tells: Taiwan → the majors ── */}
            <S.Hero>
                <S.HeroArt />
                <S.Art aria-hidden>
                    <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
                        {/* faint field / latitude lines */}
                        <g stroke="#5cc487" strokeWidth="1" opacity="0.08">
                            <path d="M0,200 H1440" />
                            <path d="M0,320 H1440" />
                            <path d="M0,440 H1440" />
                        </g>

                        {/* journeys — dotted arcs from Taiwan across the Pacific */}
                        <g fill="none" stroke="#5cc487" strokeWidth="2" strokeDasharray="2 9" strokeLinecap="round" opacity="0.5">
                            <path d="M250,392 C 470,150 720,110 892,214" />
                            <path d="M250,392 C 520,320 760,300 1010,262" />
                            <path d="M250,392 C 560,470 840,430 1112,330" />
                            <path d="M250,392 C 500,240 780,190 1188,196" />
                        </g>

                        {/* Taiwan — the home marker */}
                        <g>
                            <circle cx="250" cy="392" r="20" fill="#5cc487" opacity="0.16" />
                            <circle cx="250" cy="392" r="9" fill="#5cc487" />
                            <text x="250" y="438" fontSize="15" fill="#8fd8ad" opacity="0.9"
                                fontFamily="ui-monospace, monospace" letterSpacing="0.16em" textAnchor="middle">TW</text>
                        </g>

                        {/* US — a constellation of red pins (team locations) */}
                        <g>
                            {[
                                [892, 214, 11], [1010, 262, 9], [1112, 330, 10], [1188, 196, 8],
                                [948, 300, 7], [1070, 208, 8], [1150, 268, 7], [860, 262, 6],
                                [1006, 348, 7], [1226, 244, 6],
                            ].map(([cx, cy, r], i) => (
                                <g key={i}>
                                    <circle cx={cx} cy={cy} r={r * 2.1} fill="#ef6a5f" opacity="0.12" />
                                    <circle cx={cx} cy={cy} r={r} fill="#ef6a5f" />
                                </g>
                            ))}
                        </g>
                    </svg>
                </S.Art>
                <S.HeroInner>
                    <S.HeroEyebrow>Web platform · Data viz · 2026 · with 旅美幫</S.HeroEyebrow>
                    <S.HeroTitle>Where are our<br />players tonight?</S.HeroTitle>
                    <S.HeroTagline>Two dozen Taiwanese ballplayers, scattered from Rookie ball to the majors. One map that answers, at a glance — who&apos;s on tonight, and where.</S.HeroTagline>
                </S.HeroInner>
            </S.Hero>

            <S.Wide>
                <Reveal>
                    <S.Stats>
                        <div className="cell"><div className="num hl">28</div><div className="lab">Players mapped<br />Taiwan → the majors</div></div>
                        <div className="cell"><div className="num">6</div><div className="lab">League tiers<br />MLB · AAA · AA · A+ · A · R</div></div>
                        <div className="cell"><div className="num hl">$0</div><div className="lab">Map-API cost<br />pure D3 + SVG, server-side</div></div>
                        <div className="cell"><div className="num">4</div><div className="lab">Social feeds<br />one media wall</div></div>
                    </S.Stats>
                </Reveal>
            </S.Wide>

            <S.Wrap>
                <Reveal>
                    <S.MetaGrid>
                        <div><S.MetaK>Year</S.MetaK><S.MetaV>2026 · in progress</S.MetaV></div>
                        <div><S.MetaK>Role</S.MetaK><S.MetaV>Solo — design, engineering &amp; data architecture</S.MetaV></div>
                        <div><S.MetaK>Collaboration</S.MetaK><S.MetaV>Co-initiated with 旅美幫 (MLBTW)</S.MetaV></div>
                        <div><S.MetaK>Built with</S.MetaK><S.MetaV>Next.js 16 · React 19 · D3-geo · TypeScript</S.MetaV></div>
                    </S.MetaGrid>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The idea</S.Eyebrow>
                        <S.H2>The players are everywhere. The story was nowhere.</S.H2>
                        <S.Para>A Taiwanese baseball fan following the players who&apos;ve gone abroad has to keep two dozen tabs in their head: this one just got called up to <strong>Detroit</strong>, that one&apos;s in High-A ball somewhere in <strong>Pennsylvania</strong>, another&apos;s starting tonight in <strong>Houston</strong> — at 8am Taiwan time. The information exists; it&apos;s just scattered across box scores, team sites, and social posts in three time zones.</S.Para>
                        <S.Para><strong>旅美幫</strong> collapses all of that into a single glance. Open the map and the country lights up with where <em>our</em> players are — a red pin for every team, a tab to flip between <strong>who&apos;s playing today</strong> and <strong>where each player&apos;s club is based</strong>. It&apos;s built with the 旅美幫 fan community, whose readers already gather to follow exactly these players.</S.Para>
                        <S.Quote>Following from across an ocean, you want one feeling first: I can see them.</S.Quote>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Figure>
                        <S.Frame>
                            <Image
                                src={BaseballPng}
                                alt="旅美幫 map view — a dark map of the United States with red pins over Chicago, Houston and Boston, beside a live 今日賽程 (today's schedule) panel listing 李灝宇, 鄧愷威 and 鄭宗哲 with in-progress and postponed statuses"
                                placeholder="blur"
                                sizes="(max-width: 900px) 100vw, 860px"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </S.Frame>
                        <figcaption>The map view — today&apos;s games surfaced as pins, with the schedule (in-progress / postponed) reading straight down the side. Taiwan and Japan tabs are stubbed as “coming soon.”</figcaption>
                    </S.Figure>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The map</S.Eyebrow>
                        <S.H2>Precision from the boundary data — not a map engine.</S.H2>
                        <S.Para>The obvious way to draw a US map is to drop in Mapbox or Google Maps. But a tiled map engine is a heavy dependency, a metered API bill, and a lot of chrome you don&apos;t need when the whole job is <strong>“put a dot on the right city.”</strong> So there&apos;s no map engine here at all.</S.Para>
                        <S.Para>Instead the map is <strong>pure SVG, rendered on the server</strong> — a <strong>geoAlbersUsa</strong> projection from <strong>d3-geo</strong>, drawn over <strong>TopoJSON</strong> state boundaries (<strong>us-atlas</strong>). Team coordinates project into the same space, so a pin lands exactly where the ballpark is. The precision lives in the geography data, not in a rendering service.</S.Para>
                        <S.Tracks>
                            <div className="track"><div className="kind">Decision · Cost</div><h4>$0 to draw the country</h4><p>No tiles, no map-API key, no per-load bill — just vector paths the server already has. It stays free at any traffic, and ships almost no client JS for the map itself.</p></div>
                            <div className="track q"><div className="kind">Decision · Two questions</div><h4>Today, or home?</h4><p>One tab plots <em>今日賽程在哪</em> — where tonight&apos;s games are. The other plots <em>母隊在哪裡</em> — where each player&apos;s club is based. Same map, two questions a fan actually asks.</p></div>
                        </S.Tracks>
                        <S.Para>Each player also gets a profile with a <strong>journey map</strong> — the path from a hometown in Taiwan, through the minor-league towns, to wherever they are now. The same projection, told one player at a time.</S.Para>
                        <S.Stack>
                            <span className="pill key">d3-geo · geoAlbersUsa</span>
                            <span className="pill">TopoJSON</span>
                            <span className="pill">us-atlas</span>
                            <span className="pill">SVG · server-rendered</span>
                            <span className="pill">react-spring</span>
                        </S.Stack>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Honest data</S.Eyebrow>
                        <S.H2>Real scores, from the source, cached with care.</S.H2>
                        <S.Para>Live sports data is where hobby projects usually cut a corner — scraping a site, hammering an API on every page load. This one doesn&apos;t. It pulls only from the <strong>official MLB Stats API</strong> on its free tier, and the browser <strong>never calls that API directly</strong>: scheduled cron jobs fetch the data, write it to a cache, and every page re-renders from that cache with <strong>ISR</strong>.</S.Para>
                        <S.Para>That keeps the whole site as <strong>server-rendered HTML</strong> — fast, SEO-legible, and cheap to serve — while the scores stay fresh on their own clock. Honest sourcing was a design constraint, not an afterthought: a fan platform that outlives launch week can&apos;t be built on something that breaks the first time a page it scrapes changes its markup.</S.Para>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Panel>
                        <S.Eyebrow>Where it stands</S.Eyebrow>
                        <S.PanelBig>Shipped enough to be useful — honest about the rest.</S.PanelBig>
                        <S.Para>The foundation is live: the map, the player directory across all six tiers, the profiles and journey maps, and the schedule pipeline are all working. What&apos;s still open, I&apos;d rather name than hide — <strong>per-player stats</strong> (AVG/OPS) and the <strong>social media wall</strong> are wired up but not yet fully populated, the polish-and-motion pass (M6) is planned, and the launch-blocker I already know about: the cache lives in local JSON today and needs to move to a real KV store before this takes production traffic.</S.Para>
                        <S.Para>Building it with the <strong>旅美幫</strong> community changed how I work — there&apos;s a real audience and a real brand on the other side of the decisions, so “good enough for a demo” isn&apos;t the bar. It&apos;s the first project where the design, the engineering, and the data architecture were all mine, and all pointed at someone who&apos;d actually use it tomorrow morning.</S.Para>
                    </S.Panel>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The thread</S.Eyebrow>
                        <S.H2>A map is just data you can feel.</S.H2>
                        <S.Para>This sits on the same thread as my other data work — the 60K-node network graphs in <S.PanelLink><Link href="/projects/dell">Dell&apos;s visualization platform</Link></S.PanelLink>, where the job was also to make a sprawling system readable at a glance. Here the payload isn&apos;t nodes and edges; it&apos;s belonging. The technology — a D3 projection, an ISR cache — is the medium. The outcome is a fan, half a world away, opening a page and feeling their players close.</S.Para>
                        <S.Chips>
                            <S.Chip>Next.js 16</S.Chip>
                            <S.Chip>React 19</S.Chip>
                            <S.Chip>D3-geo</S.Chip>
                            <S.Chip>TopoJSON</S.Chip>
                            <S.Chip>TypeScript</S.Chip>
                            <S.Chip>ISR · SSR</S.Chip>
                            <S.Chip>Tailwind v4</S.Chip>
                            <S.Chip>Vercel</S.Chip>
                        </S.Chips>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Cta>
                        <S.H2>See tonight&apos;s map.</S.H2>
                        <S.Btns>
                            <S.Btn href="https://baseball-players-tw.vercel.app/" target="_blank" rel="noopener noreferrer">Open 旅美幫 →</S.Btn>
                            <S.Btn $ghost href="https://github.com/yuan00611/baseball-players-tw" target="_blank" rel="noopener noreferrer">View the code</S.Btn>
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
