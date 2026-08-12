"use client"

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/common/navigation/navigation";
import { Reveal } from "@/components/common/reveal/reveal";
import * as S from './page.css';

export default function PvFleetExplorer() {
    return (
        <S.PageRoot>
            <Navigation />

            {/* ── Hero — the fleet at national zoom, one site selected ── */}
            <S.Hero>
                <S.HeroArt />
                <S.HeroMap aria-hidden>
                    <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
                        {/* faint graticule */}
                        <g stroke="#3a4a70" strokeWidth="1" opacity="0.28">
                            <path d="M0,150 L1440,130" fill="none" />
                            <path d="M0,300 L1440,290" fill="none" />
                            <path d="M0,450 L1440,450" fill="none" />
                            <path d="M240,0 L260,600" fill="none" />
                            <path d="M560,0 L570,600" fill="none" />
                            <path d="M880,0 L885,600" fill="none" />
                            <path d="M1200,0 L1195,600" fill="none" />
                        </g>
                        {/* state bubbles — real fleet counts, kept clear of the title */}
                        <g fontFamily="ui-monospace, monospace" textAnchor="middle">
                            <circle cx="170" cy="112" r="56" fill="#28355a" stroke="#6f97e8" strokeWidth="1.5" opacity="0.92" />
                            <text x="170" y="105" fontSize="13" fill="#8ea6da">CA</text>
                            <text x="170" y="128" fontSize="18" fill="#e9eef8">1,140</text>

                            <circle cx="880" cy="200" r="47" fill="#28355a" stroke="#6f97e8" strokeWidth="1.5" opacity="0.88" />
                            <text x="880" y="194" fontSize="12" fill="#8ea6da">IL</text>
                            <text x="880" y="215" fontSize="16" fill="#e9eef8">622</text>

                            <circle cx="1300" cy="440" r="40" fill="#28355a" stroke="#6f97e8" strokeWidth="1.5" opacity="0.85" />
                            <text x="1300" y="434" fontSize="11" fill="#8ea6da">TX</text>
                            <text x="1300" y="454" fontSize="15" fill="#e9eef8">333</text>

                            <circle cx="520" cy="100" r="40" fill="#28355a" stroke="#6f97e8" strokeWidth="1.5" opacity="0.85" />
                            <text x="520" y="94" fontSize="11" fill="#8ea6da">CO</text>
                            <text x="520" y="114" fontSize="15" fill="#e9eef8">352</text>

                            <circle cx="1120" cy="170" r="38" fill="#28355a" stroke="#6f97e8" strokeWidth="1.5" opacity="0.82" />
                            <text x="1120" y="164" fontSize="11" fill="#8ea6da">NY</text>
                            <text x="1120" y="184" fontSize="15" fill="#e9eef8">331</text>

                            <circle cx="1330" cy="270" r="38" fill="#28355a" stroke="#6f97e8" strokeWidth="1.5" opacity="0.82" />
                            <text x="1330" y="264" fontSize="11" fill="#8ea6da">FL</text>
                            <text x="1330" y="284" fontSize="15" fill="#e9eef8">331</text>
                        </g>
                        {/* the one selected pin — yellow is selection-only */}
                        <g>
                            <circle cx="1210" cy="330" r="17" fill="#f2bb2e" stroke="#1c2740" strokeWidth="3" />
                            <text x="1210" y="336" fontSize="15" fill="#1c2740" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">1</text>
                            <circle cx="1210" cy="330" r="26" fill="none" stroke="#f2bb2e" strokeWidth="1.5" opacity="0.5" />
                        </g>
                        {/* summary-bar line */}
                        <text x="1400" y="112" fontSize="13" fill="#8ea6da" fontFamily="ui-monospace, monospace" letterSpacing="1" textAnchor="end">10,000 sites · 9,860 mapped · 140 missing coordinates</text>
                    </svg>
                </S.HeroMap>
                <S.HeroInner>
                    <S.HeroEyebrow>Design engineering · Built with Claude Code · 2026</S.HeroEyebrow>
                    <S.HeroTitle>PV Fleet<br />Explorer</S.HeroTitle>
                    <S.HeroTagline>Triage 10,000 messy solar-site records — see the fleet, trust the data, act on the gaps.</S.HeroTagline>
                </S.HeroInner>
            </S.Hero>

            <S.Wide>
                <Reveal>
                    <S.Stats>
                        <div className="cell"><div className="num hl">10,000</div><div className="lab">PV site records<br />across 50 states</div></div>
                        <div className="cell"><div className="num">172</div><div className="lab">Vitest tests —<br />pure logic only</div></div>
                        <div className="cell"><div className="num">659</div><div className="lab">Records with a truly<br />implausible value</div></div>
                        <div className="cell"><div className="num">159 km</div><div className="lab">Median distance from<br />a site&apos;s own ZIP centroid</div></div>
                    </S.Stats>
                </Reveal>
            </S.Wide>

            <S.Wrap>
                <Reveal>
                    <S.MetaGrid>
                        <div><S.MetaK>Year</S.MetaK><S.MetaV>2026 · timeboxed take-home, US solar industry</S.MetaV></div>
                        <div><S.MetaK>Role</S.MetaK><S.MetaV>Solo — research, design, build &amp; walkthrough deck</S.MetaV></div>
                        <div><S.MetaK>Built with</S.MetaK><S.MetaV>Next.js · React 19 · TypeScript · Leaflet · Vitest</S.MetaV></div>
                        <div><S.MetaK>Method</S.MetaK><S.MetaV>Claude Code, phase by phase · Figma specs as the contract</S.MetaV></div>
                    </S.MetaGrid>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The brief</S.Eyebrow>
                        <S.H2>One analyst. One afternoon. Ten thousand records.</S.H2>
                        <S.Para>The brief — a take-home for a US renewable-energy company — hands you a CSV of 10,000 solar PV sites and asks for an explorer. I made every decision for one assumed user: <strong>Maya, an asset data analyst</strong>. Her job is triage, not repair — find the slice of the portfolio that will cause problems. She knows solar cold, lives in Excel today, and has an afternoon per portfolio, not a week.</S.Para>
                        <S.Para>The app answers her questions in the order she asks them:</S.Para>
                        <S.Questions>
                            <li><span className="q">What did we just get?</span><span className="a">the map</span></li>
                            <li><span className="q">Which ones are a problem?</span><span className="a">trust score</span></li>
                            <li><span className="q">Why is this one a problem?</span><span className="a">the breakdown</span></li>
                            <li><span className="q">Are these two the same?</span><span className="a">compare</span></li>
                            <li><span className="q">This one is missing.</span><span className="a">add site</span></li>
                        </S.Questions>
                        <S.Para>Maya is an explicit assumption, not user research — I hadn&apos;t interviewed anyone, and the open questions that would change the product are written down as such.</S.Para>
                        <S.Figure>
                            <S.Frame>
                                <Image
                                    src="/PVFleet-map.png"
                                    alt="PV Fleet Explorer at national zoom: navy state-aggregation bubbles with site counts on a desaturated US map, summary bar reading 10,000 sites, 9,860 mapped, 140 missing coordinates"
                                    width={1800}
                                    height={983}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 860px) 100vw, 804px"
                                />
                            </S.Frame>
                            <figcaption>National zoom aggregates by state — bubble area ∝ site count. The 140 sites with no coordinates stay in the summary bar: visible, not silent.</figcaption>
                        </S.Figure>
                        <div style={{ textAlign: 'center', marginTop: 8 }}>
                            <S.Btn href="https://pv-fleet-explorer.vercel.app/" target="_blank" rel="noopener noreferrer">Try the live demo →</S.Btn>
                        </div>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The data</S.Eyebrow>
                        <S.H2>Incomplete, not incorrect.</S.H2>
                        <S.Para>Missingness arrives in costume: <strong>-1, -9999, &quot;redacted&quot;, blanks</strong> — plus 1,168 ZIP codes stored as floats (&quot;32605.0&quot;). Six of fourteen fields are missing in over half the fleet. But only <strong>659 of 10,000 records</strong> contain a value that is actually implausible. The dataset is incomplete, not incorrect — and that one finding shaped the whole scoring model.</S.Para>
                        <S.MissBars>
                            <div className="row"><span className="f">tilt_1</span><div className="track"><div className="fill" style={{ width: '67.8%' }} /></div><span className="v">67.8% missing</span></div>
                            <div className="row"><span className="f">azimuth_1</span><div className="track"><div className="fill" style={{ width: '67.7%' }} /></div><span className="v">67.7%</span></div>
                            <div className="row"><span className="f">ground_mounted</span><div className="track"><div className="fill" style={{ width: '62.2%' }} /></div><span className="v">62.2%</span></div>
                            <div className="row"><span className="f">efficiency_1</span><div className="track"><div className="fill" style={{ width: '62.2%' }} /></div><span className="v">62.2%</span></div>
                            <div className="row"><span className="f">module_quantity_1</span><div className="track"><div className="fill" style={{ width: '58.6%' }} /></div><span className="v">58.6%</span></div>
                            <div className="row"><span className="f">tracking</span><div className="track"><div className="fill" style={{ width: '54.3%' }} /></div><span className="v">54.3%</span></div>
                            <div className="row"><span className="f">third_party_owned</span><div className="track"><div className="fill" style={{ width: '47%' }} /></div><span className="v">47.0%</span></div>
                            <div className="row low"><span className="f">zip_code</span><div className="track"><div className="fill" style={{ width: '9.7%' }} /></div><span className="v">9.7%</span></div>
                            <div className="row low"><span className="f">lat / longitude</span><div className="track"><div className="fill" style={{ width: '1.4%' }} /></div><span className="v">1.4%</span></div>
                            <div className="row low"><span className="f">installation_date</span><div className="track"><div className="fill" style={{ width: '0.2%' }} /></div><span className="v">0.0%</span></div>
                        </S.MissBars>
                        <S.Para><strong>Missingness is decided exactly once</strong>, at the normalization boundary. Below that line the domain is <strong>number | null</strong> — a sentinel never reaches a component, and an ESLint rule bans the -9999 literal outside the normalizer. &quot;Absent&quot; and &quot;broken&quot; never collapse into one: an azimuth of 400 is supplied and wrong, which costs points; a clean null does not.</S.Para>
                        <S.Para>And <strong>0 is a trap</strong>: azimuth 0 means north and tilt 0 means flat — both valid. Size 0 is not. Booleans are tri-state; unknown is first-class and never silently defaulted.</S.Para>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The rules system</S.Eyebrow>
                        <S.H2>Before a rule gets power, it gets graded.</S.H2>
                        <S.Para>The data surfaced <strong>24 candidate rules</strong> — and I can only be sure of physics. So every rule is graded by confidence first: <strong>physics</strong> (math and common sense — longitude beyond ±180, size ≤ 0), <strong>heuristic</strong> (the numbers are mine; an expert should tune them), and <strong>open questions</strong> (suspicion only interviews can ground). Confidence then decides where a rule is allowed to act:</S.Para>
                        <S.Tracks>
                            <div className="track"><div className="kind">Trust score · expensive</div><h4>One number that drives decisions.</h4><p><strong>Completeness</strong> asks &quot;is it there?&quot; — no domain knowledge needed, so it can carry weight safely. <strong>Validity</strong> admits only physics penalties plus the extreme end of two dials.</p><p>The score sorts and steers the reviewer&apos;s afternoon. A wrong penalty misleads at scale — admission requires certainty.</p></div>
                            <div className="track sun"><div className="kind">Badge system · cheap</div><h4>A request for human eyes.</h4><p><strong>Critical</strong> blocks (impossible values). <strong>Review</strong> is the only kind counted in &quot;needs attention&quot;. <strong>Info</strong> is context — never a warning, never counted.</p><p>A badge costs a glance, not a decision. Being wrong here is cheap — which is exactly why doubt can afford it.</p></div>
                        </S.Tracks>
                        <S.Formula>trust = <b>0.6</b> × completeness + <b>0.4</b> × validity</S.Formula>
                        <S.Para><strong>The weights were measured, not felt.</strong> On the real fleet, validity averages 99 — only 659 records lose any points — while completeness averages 73. Weighting validity higher pushed almost everything into the top band and the score stopped discriminating. At 0.6/0.4 the distribution lands at High 37% · Good 60% · Limited 2%, which tracks the problem this dataset actually has.</S.Para>
                        <S.Para>The call I&apos;d defend hardest: <strong>orientation only enters the completeness denominator for confirmed fixed-tilt systems</strong>. A tracking array has no single orientation, and unknown tracking must not be assumed fixed — without this rule, 54% of the fleet would be penalized for a field that is irrelevant or unassessable. And facts about an installation — age, ownership, mounting — are flags, never score penalties. A 25-year-old third-party-owned tracking array with every field populated scores 100, correctly.</S.Para>
                        <S.Quote>Under domain uncertainty: certainty scores, suspicion badges, hunches whisper.</S.Quote>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Geography</S.Eyebrow>
                        <S.H2>The moment I caught my own map lying.</S.H2>
                        <S.Para>I built geographic cross-validation — offline ZIP lookup, point-in-state tests — and <strong>measured it against the fleet before giving it power</strong>. The result: coordinates sit a median of <strong>159 km</strong> from their own ZIP centroid, and <strong>12.3% of mapped sites fall outside the state they declare</strong>. That is not measurement error. The coordinates are privacy-fuzzed, which is normal for public PV data.</S.Para>
                        <S.Para>So the same rule gets two severities. For <strong>imported records</strong>, geographic disagreement is informational — a flag that fires on an eighth of the fleet is noise, not signal. In the <strong>add-site form</strong>, where a human is typing real values, the same checks turn strict: an unrecognised ZIP blocks, a distance disagreement warns. <strong>Strict door, gentle door</strong> — the form blocks a human typing nonsense; imports get flags, not 1,214 alarms.</S.Para>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The detail panel</S.Eyebrow>
                        <S.H2>Every number explains itself.</S.H2>
                        <S.Para>The trust badge is a button. Its popover shows the formula, the weighted checklist, what filling each gap would add — and it renders the score engine&apos;s <strong>checks[] and penalties[] verbatim</strong>, so the UI cannot disagree with the math. A test asserts the breakdown reconciles with the score across all 10,000 records.</S.Para>
                        <S.TwoUpTall>
                            <S.Figure>
                                <S.Frame>
                                    <Image
                                        src="/PVFleet-detail-full.png"
                                        alt="Full site detail panel: trust ring at 76 labeled Good Trust, Location / Installation & Ownership / Scale sections, the 2.5D physical-configuration drawing of a tilted panel with compass and yellow facing arrow, and the needs-attention list"
                                        width={698}
                                        height={1931}
                                        style={{ width: '100%', height: 'auto' }}
                                        sizes="(max-width: 860px) 100vw, 320px"
                                    />
                                </S.Frame>
                                <figcaption>Four sections mirror the CSV&apos;s own taxonomy — capped by the 2.5D physical configuration. Missing renders as &quot;—&quot;, never blank. Flags sit next to the field they concern.</figcaption>
                            </S.Figure>
                            <S.Figure>
                                <S.Frame>
                                    <Image
                                        src="/PVFleet-score.png"
                                        alt="Why this score popover: 76 = completeness 60 × 0.6 + validity 100 × 0.4, a checklist of earned and missed points, and orientation marked not applicable because tracking type is unknown"
                                        width={762}
                                        height={1036}
                                        style={{ width: '100%', height: 'auto' }}
                                        sizes="(max-width: 860px) 100vw, 320px"
                                    />
                                </S.Frame>
                                <figcaption>&quot;Why this score?&quot; renders the math verbatim — note orientation leaving the denominator: not applicable, not missing.</figcaption>
                            </S.Figure>
                        </S.TwoUpTall>
                        <S.Para>The physical configuration is <strong>drawn, not tabulated</strong>: &quot;azimuth 210° · tilt 5°&quot; is precise and nearly unreadable, but a small 2.5D drawing of a nearly-flat panel facing southwest is something a reviewer <strong>recognises</strong> — and recognition is where her expertise lives. One hard rule: tracking systems are never drawn with a fixed orientation. Exact degrees always sit beside the drawing as text, and if the two disagree, the text wins.</S.Para>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Compare</S.Eyebrow>
                        <S.H2>The tray reads the data first.</S.H2>
                        <S.Para>Two to five sites, side by side. The summary pills — at most three, priority-ordered — are computed only from derived fields: <strong>&quot;Site 4 is the largest selected system. Sites 2 &amp; 3 &amp; 5 are rooftop installations.&quot;</strong> The reviewer starts with the differences that matter, not a wall of numbers.</S.Para>
                        <S.Figure>
                            <S.Frame>
                                <Image
                                    src="/PVFleet-compare.png"
                                    alt="Compare view: five numbered yellow pins on the map, insight pills above a tray of five site cards with trust rings, and metric bars comparing system size and modules"
                                    width={1800}
                                    height={974}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 860px) 100vw, 804px"
                                />
                            </S.Frame>
                            <figcaption>A site&apos;s number is identical on the map pin, the card, and the column — while comparing, everything unselected dims. Yellow is selection-only, everywhere in the app.</figcaption>
                        </S.Figure>
                        <S.Para>The metric bars are plain divs, deliberately: with 2–5 values per metric, a chart library adds bundle and configuration for no clarity gain. Recharts was evaluated and kept out.</S.Para>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The form</S.Eyebrow>
                        <S.H2>Errors are for the impossible.</S.H2>
                        <S.Para>The add-site form is the one place where being wrong has consequences, so its rules are the strictest in the app — and still split in two. <strong>Errors block</strong>: azimuth 360+, a future installation date, efficiency over 100%. <strong>Warnings submit</strong>: a fixed system with no angles, a 20-year-old installation, an implausible implied wattage. Blocking a plausible-but-odd value would force users to lie to the form.</S.Para>
                        <S.FormSplit>
                            <S.Figure>
                                <S.Frame>
                                    <Image
                                        src="/PVFleet-form-full.png"
                                        alt="Full add-site form: ZIP lookup filled from the Austin TX centroid, a future installation date blocked inline, tri-state segmented controls defaulting to Unknown, an amber worth-confirming warning, and the generated SITE_10001 ID beside Add site"
                                        width={728}
                                        height={2333}
                                        style={{ width: '100%', height: 'auto' }}
                                        sizes="(max-width: 860px) 100vw, 320px"
                                    />
                                </S.Frame>
                                <figcaption>ZIP lookup fills coordinates from the centroid — labelled approximate, never presented as the site. A future date is impossible, so it blocks.</figcaption>
                            </S.Figure>
                            <div>
                                <S.Para style={{ marginTop: 8 }}>The messy data designed this form. Ten thousand records where <strong>unknown is the honest answer</strong> for half the physical fields meant the three tri-states — tracking, mounting, ownership — default to Unknown via segmented controls. Never a checkbox, never silently &quot;fixed&quot;.</S.Para>
                                <S.Para>Site IDs are generated, not typed — removing a whole class of duplicate-ID errors instead of validating for them.</S.Para>
                                <S.Para>Submit runs the <strong>same pipeline as the CSV import</strong> — validate, generate ID, normalize, score, flag — so the site you typed lands on the map as a first-class record: scored, flagged, comparable, indistinguishable from an imported one.</S.Para>
                            </div>
                        </S.FormSplit>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>The build</S.Eyebrow>
                        <S.H2>The folder structure is the argument.</S.H2>
                        <S.Tracks>
                            <div className="track"><div className="kind">src/utils · pure logic</div><h4>Everything that decides what a value means.</h4><p>Normalization, the trust score, flags, form validation, geo checks, aggregation math — <strong>172 Vitest tests across 9 files</strong>, zero React imports. Every rule runs in a test, not a hook. A characterization suite pins exact fleet counts against the real CSV — and skips itself when the file is absent, so the suite stays green on any checkout.</p></div>
                            <div className="track sun"><div className="kind">src/components · thin views</div><h4>Only render what was already decided.</h4><p>Components receive resolved objects. Deliberately untested — the design pushes every correctness-bearing decision into the tested layer precisely so the untested layer only renders. If a number is wrong, the fix is in one folder.</p></div>
                        </S.Tracks>
                        <S.Para>Scale is handled by rendering at two levels instead of brute force: state bubbles at national zoom (area ∝ count via a sqrt scale), switching at zoom 6 to clustered markers — with <strong>one shared icon instance for all ~9,860 unselected markers</strong> and canvas rendering on. The basemap is CARTO&apos;s desaturated Positron: same OpenStreetMap data, but near-monochrome, so the trust colours and numbered pins carry the visual hierarchy instead of competing with road colours.</S.Para>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Working with AI</S.Eyebrow>
                        <S.H2>AI wrote the code. The judgment stayed manual.</S.H2>
                        <S.Steps>
                            <li><h4>Shape the idea</h4><p>Talk the concept through with ChatGPT — stress-test it, draft the first prompts.</p></li>
                            <li><h4>Prototype &amp; style</h4><p>Quick interactive prototypes with Claude — make the style and interaction calls early.</p></li>
                            <li><h4>Design in detail</h4><p>Tweak the chosen direction precisely in Figma — spec frames become the visual contract.</p></li>
                            <li><h4>Plan the build</h4><p>Break into phases; package specs + tokens + prompts + CLAUDE.md as a kit.</p></li>
                            <li><h4>Build, one phase at a time</h4><p>Claude Code builds against the kit — one phase per prompt, /clear between. Eight phases.</p></li>
                            <li><h4>Verify &amp; commit</h4><p>Read every diff, run the tests, click through, commit manually. Then loop.</p></li>
                        </S.Steps>
                        <S.Para>The specs went in as commit #1, so the contract predates the code. Every diff was read before it was committed — and the working rule was simple: <strong>anything I can&apos;t explain doesn&apos;t ship</strong>.</S.Para>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Panel>
                        <S.Eyebrow>Reflection</S.Eyebrow>
                        <S.PanelBig>What I&apos;m really proposing is a framework.</S.PanelBig>
                        <S.Para>Trust scores, flags, and review queues — with every threshold as a named, tunable dial. The thresholds, severities, and open questions are first-pass judgments, built to be corrected by people who know the field better than I do: a confirmed rule earns more power, a debunked one retires, and <strong>each move changes a named constant, never the logic</strong>. The structure is mine; the calibration belongs to the field.</S.Para>
                        <S.Para>It&apos;s the same trust instinct that runs through my work — from <S.PanelLink><Link href="/projects/vizwiz">VizWiz</Link></S.PanelLink>, where an AI that admits &quot;I can&apos;t answer this&quot; earns more trust than one that guesses, to <S.PanelLink><Link href="/projects/athena">Athena</Link></S.PanelLink>, where people had to trust an AI interface with their money. A system working under uncertainty should be useful without overclaiming.</S.Para>
                    </S.Panel>
                </Reveal>

                <Reveal>
                    <S.Section>
                        <S.Eyebrow>Retrospective</S.Eyebrow>
                        <S.H2>Caught in my own review.</S.H2>
                        <S.Para>None of these blocked the reviewer — which is exactly why they were easy to miss, and worth writing down.</S.Para>
                        <S.Catches>
                            <li><span className="tag">Process</span><span><b>Figma changed, code didn&apos;t.</b> Fix: one spec source, plus a visual check per phase.</span></li>
                            <li><span className="tag">Evidence</span><span><b>The badge design is a guess.</b> Fix: A/B it — measure time-to-correct-triage, not taste.</span></li>
                            <li><span className="tag">Craft</span><span><b>Raw decimals leak through.</b> Fix: format once, at the display boundary.</span></li>
                            <li><span className="tag">Craft</span><span><b>Northeast bubbles collide.</b> Fix: ~30 lines of pairwise repulsion.</span></li>
                            <li><span className="tag">Craft</span><span><b>The basemap desaturation filter was never applied.</b> Fix: one CSS rule.</span></li>
                        </S.Catches>
                        <S.Para>Next steps, in order: <strong>filter and search</strong> — the fastest path from 10,000 records to the subset worth an afternoon, and today&apos;s only missing route to the 140 unmapped sites; <strong>an LLM-written site brief</strong> that only phrases already-derived facts, so every sentence stays auditable; and <strong>measuring the badge system</strong> against a real decision metric instead of preference.</S.Para>
                        <S.Chips>
                            <S.Chip>Next.js</S.Chip>
                            <S.Chip>React 19</S.Chip>
                            <S.Chip>TypeScript</S.Chip>
                            <S.Chip>Leaflet</S.Chip>
                            <S.Chip>Vitest</S.Chip>
                            <S.Chip>Claude Code</S.Chip>
                            <S.Chip>Figma MCP</S.Chip>
                        </S.Chips>
                    </S.Section>
                </Reveal>

                <Reveal>
                    <S.Cta>
                        <S.H2>Explore the fleet yourself.</S.H2>
                        <S.Btns>
                            <S.Btn href="https://pv-fleet-explorer.vercel.app/" target="_blank" rel="noopener noreferrer">Launch the live app →</S.Btn>
                            <S.Btn $ghost href="/PVFleet-deck.pdf" target="_blank" rel="noopener noreferrer">Read the walkthrough deck</S.Btn>
                            <S.Btn $ghost href="https://github.com/yuan00611/pv-fleet-explorer" target="_blank" rel="noopener noreferrer">Read the code &amp; decisions</S.Btn>
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
