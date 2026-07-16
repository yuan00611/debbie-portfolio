"use client"
import { Navigation } from "@/components/common/navigation/navigation";
import styles from './page.module.css';

const C = {
  ink:        'var(--foreground)',
  inkSoft:    'var(--foreground)',
  inkMuted:   'var(--muted-foreground)',
  inkFade:    'var(--muted-foreground)',
  paper:      'var(--background)',
  paperWarm:  'var(--card)',
  rule:       'var(--border)',
  ruleSoft:   'var(--stroke-1)',
  accent:     '#c04e1e',        // brand red — intentional, kept
  accentSoft: 'var(--secondary)',
  success:    '#5a7d3a',        // brand green — intentional, kept
  successSoft:'var(--secondary)',
  warn:       '#a06a1e',        // brand amber — intentional, kept
  warnSoft:   'var(--secondary)',
  white:      'var(--card)',
};

const serif = 'var(--font-fraunces), Georgia, serif';
const sans = 'var(--font-inter), system-ui, sans-serif';
const mono = 'var(--font-jetbrains-mono), monospace';

const narrow: React.CSSProperties = { maxWidth: 680, margin: '0 auto' };

const links = [
  { label: 'Email', href: 'mailto:yuan0061@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/te-yuan-debbie-chen/' },
  { label: 'GitHub', href: 'https://github.com/yuan00611' },
];

export default function CareerCopilot() {
  return (
    <>
      <Navigation />
      <div style={{ background: C.paper, color: C.ink, fontFamily: sans, lineHeight: 1.65, WebkitFontSmoothing: 'antialiased' }}>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className={styles.sectionHero} style={{ borderBottom: `1px solid ${C.rule}` }}>
          <div className={styles.container}>
            <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.inkMuted, display: 'block', marginBottom: 28 }}>
              Case study — AI interface design — 2026
            </span>
            <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(56px, 8vw, 88px)', lineHeight: 0.95, letterSpacing: '-0.035em', color: C.ink, marginBottom: 20 }}>
              Career <em style={{ fontStyle: 'italic', color: C.accent }}>Copilot</em>
            </h1>
            <p style={{ fontFamily: serif, fontSize: 'clamp(17px, 2.2vw, 22px)', lineHeight: 1.4, color: C.inkSoft, fontWeight: 300, maxWidth: 640, marginBottom: 56 }}>
              Designing AI interfaces for decision clarity, not match confidence. A two-week exploration into what job search looks like when you optimize for interview probability instead of match score.
            </p>
            <div className={styles.heroMeta} style={{ paddingTop: 28, borderTop: `1px solid ${C.rule}` }}>
              {[
                { label: 'Role', value: 'Product & interface design, prototype engineering' },
                { label: 'Scope', value: 'Concept, UX, four-page prototype, written case study' },
                { label: 'Timeline', value: 'Two weeks, part-time, weekend prototype sprint' },
                { label: 'Status', value: 'Weekend sketch — not a shipped product' },
              ].map(cell => (
                <div key={cell.label}>
                  <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.inkFade, marginBottom: 8 }}>{cell.label}</div>
                  <div style={{ fontSize: 14, color: C.inkSoft, lineHeight: 1.45 }}>{cell.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hero Visual ──────────────────────────────────────────────── */}
        <section style={{ padding: '56px 0 96px', background: C.paperWarm }}>
          <div className={styles.container}>
            <div style={{ background: C.white, border: `1px solid ${C.rule}`, borderRadius: 4, padding: 24, boxShadow: '0 1px 2px rgba(0,0,0,0.02), 0 8px 24px rgba(0,0,0,0.04)' }}>
              {/* Mini UI */}
              <div style={{ fontSize: 12, lineHeight: 1.5 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 12, borderBottom: `1px solid ${C.rule}`, marginBottom: 16 }}>
                  <span style={{ fontFamily: serif, fontSize: 15, fontStyle: 'italic' }}>Career Copilot — Job decision</span>
                  <span style={{ fontFamily: mono, fontSize: 13, color: C.inkMuted }}>today · 4 jobs</span>
                </div>
                <div className={styles.heroVisualGrid}>
                  {/* Job list */}
                  <div className={styles.heroJobList}>
                    {[
                      { co: 'Carta', role: 'Design systems engineer', meta: 'today · 47 · Seattle', score: '7.2', scoreClass: 'mid', active: true },
                      { co: 'Vercel', role: 'Senior frontend, DX', meta: 'today · 89 · Remote', score: '6.8', scoreClass: 'high', active: false },
                      { co: 'Linear', role: 'Product engineer', meta: '3d · 312 · Remote', score: '5.4', scoreClass: 'mid', active: false },
                      { co: 'Stripe', role: 'Software engineer', meta: 'stale · 540 · Seattle', score: '3.1', scoreClass: 'low', active: false },
                    ].map(job => (
                      <div key={job.co} style={{ padding: '10px 12px', border: `1px solid ${job.active ? C.ink : C.rule}`, borderRadius: 4, marginBottom: 6, background: job.active ? C.paperWarm : 'transparent' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
                          <span style={{ fontWeight: 500, fontSize: 12 }}>{job.co}</span>
                          <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 500, color: job.scoreClass === 'high' ? C.success : job.scoreClass === 'mid' ? C.warn : C.inkFade }}>{job.score}</span>
                        </div>
                        <div style={{ fontSize: 11, color: C.inkMuted, marginBottom: 4 }}>{job.role}</div>
                        <div style={{ fontFamily: mono, fontSize: 10, color: C.inkFade }}>{job.meta}</div>
                      </div>
                    ))}
                  </div>
                  {/* Job detail */}
                  <div>
                    <div style={{ paddingBottom: 12, borderBottom: `1px solid ${C.rule}`, marginBottom: 14 }}>
                      <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.inkFade, marginBottom: 4 }}>Carta</div>
                      <div style={{ fontFamily: serif, fontSize: 16, lineHeight: 1.3, marginBottom: 2 }}>Senior software engineer II, design systems (ink)</div>
                      <div style={{ fontFamily: mono, fontSize: 11, color: C.inkMuted }}>Seattle, WA · $201K – $250K</div>
                    </div>
                    <div style={{ background: C.accentSoft, borderRadius: 4, padding: '12px 14px', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 14, alignItems: 'center', marginBottom: 14 }}>
                      <div>
                        <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.inkMuted, marginBottom: 2 }}>Interview probability</div>
                        <div style={{ fontFamily: mono, fontSize: 24, fontWeight: 500, color: C.accent, lineHeight: 1 }}>7.2<span style={{ fontSize: 12, color: C.inkFade }}> / 10</span></div>
                      </div>
                      <div style={{ fontSize: 11, lineHeight: 1.4, color: C.inkSoft }}><strong>Worth tailoring.</strong> Strong archetype fit with fintech transfer, but competitive senior pool.</div>
                      <div style={{ display: 'flex', gap: 4 }}>
                        <span style={{ background: C.ink, color: C.paper, padding: '5px 10px', borderRadius: 3, fontSize: 10, fontWeight: 500 }}>Apply</span>
                        <span style={{ border: `1px solid ${C.rule}`, padding: '5px 10px', borderRadius: 3, fontSize: 10 }}>Tailor</span>
                      </div>
                    </div>
                    {[
                      { label: 'Archetype fit', status: 'Strong', cls: 'good', w: 90 },
                      { label: 'Timing', status: 'Fresh', cls: 'good', w: 80 },
                      { label: 'Competition', status: 'Medium', cls: 'mid', w: 50 },
                      { label: 'Logistics', status: 'Aligned', cls: 'good', w: 70 },
                      { label: 'Referral', status: 'None', cls: 'weak', w: 30 },
                    ].map(f => (
                      <div key={f.label} style={{ display: 'grid', gridTemplateColumns: '90px 55px 1fr', gap: 10, padding: '7px 0', borderBottom: `1px solid ${C.ruleSoft}`, alignItems: 'center', fontSize: 11 }}>
                        <span style={{ color: C.inkSoft }}>{f.label}</span>
                        <span style={{ fontFamily: mono, fontSize: 10, color: f.cls === 'good' ? C.success : f.cls === 'mid' ? C.warn : C.inkFade }}>{f.status}</span>
                        <div style={{ height: 2, background: C.rule, borderRadius: 1, overflow: 'hidden' }}>
                          <div style={{ height: '100%', borderRadius: 1, background: f.cls === 'good' ? C.success : f.cls === 'mid' ? C.warn : C.inkFade, width: `${f.w}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TL;DR ────────────────────────────────────────────────────── */}
        <section className={styles.sectionMd} style={{ background: C.paperWarm }}>
          <div className={styles.container}>
            <div className={styles.tldr}>
              {[
                { eye: 'The problem', h3: 'Match answers the wrong question.', p: 'Most AI job tools optimize for profile-to-requirements alignment. But the question users actually have is different: given my limited time and energy, which jobs are worth tailoring for this week? That\'s an interview probability question.' },
                { eye: 'The insight', h3: 'Interview probability isn\'t one number.', p: 'It\'s the interaction of five factors — archetype fit, timing, competition, logistics, and referral advantage. A single match score collapses all five into one, hiding exactly the reasoning users need to decide and to trust.' },
                { eye: 'The design', h3: 'Four stages, one coherent journey.', p: 'Conversational onboarding. Decision-first job evaluation. Tracking that manages emotion, not just state. Interview strategy that separates understanding from preparation. Every score decomposes into reasoning; every unknown is surfaced, not hidden.' },
              ].map(col => (
                <div key={col.eye}>
                  <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.inkMuted, display: 'block', marginBottom: 16 }}>{col.eye}</span>
                  <h3 style={{ fontFamily: serif, fontSize: 26, lineHeight: 1.2, fontWeight: 400, letterSpacing: '-0.015em', marginBottom: 16, color: C.ink }}>{col.h3}</h3>
                  <p style={{ fontSize: 15, color: C.inkSoft, lineHeight: 1.65 }}>{col.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Context ──────────────────────────────────────────────────── */}
        <section style={{ padding: '96px 0 48px' }}>
          <div className={styles.container}>
            <div style={narrow}>
              <h2 style={{ fontFamily: serif, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 36, color: C.ink }}>Context</h2>
              <p style={{ fontFamily: serif, fontSize: 'clamp(16px, 2vw, 19px)', lineHeight: 1.6, color: C.inkSoft, fontWeight: 300, marginBottom: 24 }}>
                I was using an AI-powered job search tool as my daily driver — partly because I was actively job searching, partly because I work on AI interfaces and wanted to see what AI-native job search looks like when someone else builds it.
              </p>
              <p style={{ fontFamily: serif, fontSize: 'clamp(16px, 2vw, 19px)', lineHeight: 1.6, color: C.inkSoft, fontWeight: 300, marginBottom: 24 }}>
                The tool was capable. It generated reasonable matches, pulled listings from multiple sources, and scored them against my resume. But after two weeks of using it, I noticed I was quietly ignoring most of its recommendations. That&apos;s when I got curious — not at the tool, but at myself. Why was I ignoring outputs that were technically correct?
              </p>
              <p style={{ fontFamily: serif, fontSize: 'clamp(16px, 2vw, 19px)', lineHeight: 1.6, color: C.inkSoft, fontWeight: 300, marginBottom: 24 }}>
                This case study is the answer to that question, and the design experiment it led to.
              </p>
            </div>
          </div>
        </section>

        {/* ── Pull quote ───────────────────────────────────────────────── */}
        <section className={styles.sectionSm} style={{ background: C.paperWarm }}>
          <div className={styles.container}>
            <div className={styles.pullQuote}>
              <div>
                <blockquote style={{ fontFamily: serif, fontSize: 'clamp(26px, 3.5vw, 44px)', lineHeight: 1.15, fontWeight: 300, letterSpacing: '-0.02em', fontStyle: 'italic', color: C.ink }}>
                  <span style={{ display: 'block', width: 40, height: 1, background: C.accent, marginBottom: 28 }} />
                  Match tells you where you fit. It doesn&apos;t tell you where you have a chance.
                </blockquote>
              </div>
              <div>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: C.inkSoft, marginBottom: 18 }}>
                  The gap I kept noticing was this: the tool was answering <em>&ldquo;does my profile align with this job&apos;s requirements?&rdquo;</em> — a retrieval problem, fully computable. What I actually needed was: <em>&ldquo;if I spend three hours tailoring for this job, am I likely to get an interview?&rdquo;</em> — a decision problem under uncertainty.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: C.inkSoft, marginBottom: 18 }}>
                  These produce different answers. A high-match role at a saturated company with no referral can have a much lower interview probability than a medium-match role that&apos;s fresh, niche, and has a connection path.
                </p>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${C.rule}` }}>
                  {[
                    { n: '01', name: 'Archetype fit', desc: 'Role-type alignment beyond keywords' },
                    { n: '02', name: 'Timing', desc: 'Posting freshness and active review window' },
                    { n: '03', name: 'Competition', desc: 'Pool density and your position in it' },
                    { n: '04', name: 'Logistics', desc: 'Location, comp, sponsorship gates' },
                    { n: '05', name: 'Referral advantage', desc: 'Signal that bypasses the cold pile' },
                  ].map(item => (
                    <div key={item.n} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 12, padding: '10px 0', fontSize: 14, alignItems: 'baseline' }}>
                      <span style={{ fontFamily: mono, fontSize: 11, color: C.inkFade }}>{item.n}</span>
                      <div>
                        <span style={{ fontWeight: 500, color: C.ink }}>{item.name}</span>
                        <div style={{ color: C.inkMuted, fontSize: 13, marginTop: 2 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stage 01 ─────────────────────────────────────────────────── */}
        <section className={styles.sectionStd} style={{ borderTop: `1px solid ${C.rule}` }}>
          <div className={styles.container}>
            <div className={styles.stageHeader}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.accent, paddingTop: 8 }}>01 / Stage one</div>
              <div>
                <h3 style={{ fontFamily: serif, fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 12, color: C.ink }}>Conversational <em style={{ fontStyle: 'italic' }}>onboarding</em></h3>
                <p style={{ fontFamily: serif, fontSize: 19, color: C.inkMuted, fontWeight: 300, lineHeight: 1.5 }}>Let the system translate you. Don&apos;t make users fill out a schema.</p>
              </div>
            </div>
            <div style={{ background: C.white, border: `1px solid ${C.rule}`, borderRadius: 4, padding: 24, marginBottom: 48 }}>
              <div className={styles.stage01Grid}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 12, borderBottom: `1px solid ${C.rule}`, marginBottom: 16 }}>
                    <span style={{ fontFamily: serif, fontSize: 15, fontStyle: 'italic' }}>Career strategist</span>
                    <span style={{ fontFamily: mono, fontSize: 10, color: C.inkMuted }}>active</span>
                  </div>
                  {[
                    { type: 'ai', text: 'Upload your resume or share your LinkedIn — I\'ll map your archetype, market position, and where to focus first.' },
                    { type: 'user', text: 'Uploaded: resume.pdf' },
                    { type: 'ai', text: 'You\'re strongest at the intersection of frontend engineering, design systems, and AI-native interfaces. Your differentiator isn\'t years — it\'s the combination of HCI sensibility and fintech domain depth.' },
                  ].map((b, i) => (
                    <div key={i} style={{ padding: '8px 12px', borderRadius: 6, marginBottom: 10, maxWidth: '90%', fontSize: 12, lineHeight: 1.45, background: b.type === 'ai' ? C.paperWarm : C.accentSoft, color: b.type === 'ai' ? C.inkSoft : C.ink, marginLeft: b.type === 'user' ? 'auto' : 0 }}>{b.text}</div>
                  ))}
                </div>
                <div>
                  {[
                    { label: 'Archetype', title: 'AI · Frontend · Design Systems', rows: [{ k: 'Core', v: 'Interface engineer' }, { k: 'Adjacent', v: 'UX Engineer' }, { k: 'Stretch', v: 'Staff Frontend' }] },
                    { label: 'Market', title: null, rows: [{ k: 'Seattle', v: 'high · high' }, { k: 'Austin', v: 'mod · lower' }, { k: 'Remote', v: 'highest comp' }] },
                  ].map(card => (
                    <div key={card.label} style={{ border: `1px solid ${C.rule}`, borderRadius: 4, padding: '12px 14px', marginBottom: 8, fontSize: 11 }}>
                      <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.inkFade, marginBottom: 6 }}>{card.label}</div>
                      {card.title && <div style={{ fontFamily: serif, fontSize: 14, marginBottom: 8, lineHeight: 1.3 }}>{card.title}</div>}
                      {card.rows.map(r => (
                        <div key={r.k} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', fontSize: 11 }}>
                          <span style={{ color: C.inkMuted }}>{r.k}</span>
                          <span style={{ color: C.ink }}>{r.v}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.whyGrid}>
              {[
                { why: 'Why conversation, not a form.', p: 'Forms ask users to translate themselves into a schema. Conversation lets the system do that translation. For an AI product, this sets the right expectation up front — the system understands you before it shows you things.' },
                { why: 'Why visualization alongside chat.', p: 'Pure chat is hard to scan. Pure dashboard feels cold. The split screen lets the conversation build context while the right panel lets users act on it — the best of both modes.' },
                { why: 'Why output an "archetype," not a job list.', p: 'Starting with role type instead of matches keeps the user\'s self-concept in the driver\'s seat. It also makes the subsequent job list interpretable — you\'re matching jobs to a defined positioning, not keywords.' },
              ].map(d => (
                <div key={d.why}>
                  <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 17, color: C.ink, marginBottom: 10, lineHeight: 1.35 }}>{d.why}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.inkSoft }}>{d.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stage 02 ─────────────────────────────────────────────────── */}
        <section className={styles.sectionStd} style={{ borderTop: `1px solid ${C.rule}` }}>
          <div className={styles.container}>
            <div className={styles.stageHeader}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.accent, paddingTop: 8 }}>02 / Stage two</div>
              <div>
                <h3 style={{ fontFamily: serif, fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 12, color: C.ink }}>Job <em style={{ fontStyle: 'italic' }}>decision</em></h3>
                <p style={{ fontFamily: serif, fontSize: 19, color: C.inkMuted, fontWeight: 300, lineHeight: 1.5 }}>The core surface. A single screen that reframes what a score is supposed to do.</p>
              </div>
            </div>
            
            <div style={{ background: C.white, border: `1px solid ${C.rule}`, borderRadius: 4, padding: 24, boxShadow: '0 1px 2px rgba(0,0,0,0.02), 0 8px 24px rgba(0,0,0,0.04)', marginBottom: 48 }}>
              {/* Mini UI */}
              <div style={{ fontSize: 12, lineHeight: 1.5 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 12, borderBottom: `1px solid ${C.rule}`, marginBottom: 16 }}>
                  <span style={{ fontFamily: serif, fontSize: 15, fontStyle: 'italic' }}>Career Copilot — Job decision</span>
                  <span style={{ fontFamily: mono, fontSize: 13, color: C.inkMuted }}>today · 4 jobs</span>
                </div>
                <div className={styles.heroVisualGrid}>
                  {/* Job list */}
                  <div className={styles.heroJobList}>
                    {[
                      { co: 'Carta', role: 'Design systems engineer', meta: 'today · 47 · Seattle', score: '7.2', scoreClass: 'mid', active: true },
                      { co: 'Vercel', role: 'Senior frontend, DX', meta: 'today · 89 · Remote', score: '6.8', scoreClass: 'high', active: false },
                      { co: 'Linear', role: 'Product engineer', meta: '3d · 312 · Remote', score: '5.4', scoreClass: 'mid', active: false },
                      { co: 'Stripe', role: 'Software engineer', meta: 'stale · 540 · Seattle', score: '3.1', scoreClass: 'low', active: false },
                    ].map(job => (
                      <div key={job.co} style={{ padding: '10px 12px', border: `1px solid ${job.active ? C.ink : C.rule}`, borderRadius: 4, marginBottom: 6, background: job.active ? C.paperWarm : 'transparent' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
                          <span style={{ fontWeight: 500, fontSize: 12 }}>{job.co}</span>
                          <span style={{ fontFamily: mono, fontSize: 12, fontWeight: 500, color: job.scoreClass === 'high' ? C.success : job.scoreClass === 'mid' ? C.warn : C.inkFade }}>{job.score}</span>
                        </div>
                        <div style={{ fontSize: 11, color: C.inkMuted, marginBottom: 4 }}>{job.role}</div>
                        <div style={{ fontFamily: mono, fontSize: 10, color: C.inkFade }}>{job.meta}</div>
                      </div>
                    ))}
                  </div>
                  {/* Job detail */}
                  <div>
                    <div style={{ paddingBottom: 12, borderBottom: `1px solid ${C.rule}`, marginBottom: 14 }}>
                      <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.inkFade, marginBottom: 4 }}>Carta</div>
                      <div style={{ fontFamily: serif, fontSize: 16, lineHeight: 1.3, marginBottom: 2 }}>Senior software engineer II, design systems (ink)</div>
                      <div style={{ fontFamily: mono, fontSize: 11, color: C.inkMuted }}>Seattle, WA · $201K – $250K</div>
                    </div>
                    <div style={{ background: C.accentSoft, borderRadius: 4, padding: '12px 14px', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 14, alignItems: 'center', marginBottom: 14 }}>
                      <div>
                        <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.inkMuted, marginBottom: 2 }}>Interview probability</div>
                        <div style={{ fontFamily: mono, fontSize: 24, fontWeight: 500, color: C.accent, lineHeight: 1 }}>7.2<span style={{ fontSize: 12, color: C.inkFade }}> / 10</span></div>
                      </div>
                      <div style={{ fontSize: 11, lineHeight: 1.4, color: C.inkSoft }}><strong>Worth tailoring.</strong> Strong archetype fit with fintech transfer, but competitive senior pool.</div>
                      <div style={{ display: 'flex', gap: 4 }}>
                        <span style={{ background: C.ink, color: C.paper, padding: '5px 10px', borderRadius: 3, fontSize: 10, fontWeight: 500 }}>Apply</span>
                        <span style={{ border: `1px solid ${C.rule}`, padding: '5px 10px', borderRadius: 3, fontSize: 10 }}>Tailor</span>
                      </div>
                    </div>
                    {[
                      { label: 'Archetype fit', status: 'Strong', cls: 'good', w: 90 },
                      { label: 'Timing', status: 'Fresh', cls: 'good', w: 80 },
                      { label: 'Competition', status: 'Medium', cls: 'mid', w: 50 },
                      { label: 'Logistics', status: 'Aligned', cls: 'good', w: 70 },
                      { label: 'Referral', status: 'None', cls: 'weak', w: 30 },
                    ].map(f => (
                      <div key={f.label} style={{ display: 'grid', gridTemplateColumns: '90px 55px 1fr', gap: 10, padding: '7px 0', borderBottom: `1px solid ${C.ruleSoft}`, alignItems: 'center', fontSize: 11 }}>
                        <span style={{ color: C.inkSoft }}>{f.label}</span>
                        <span style={{ fontFamily: mono, fontSize: 10, color: f.cls === 'good' ? C.success : f.cls === 'mid' ? C.warn : C.inkFade }}>{f.status}</span>
                        <div style={{ height: 2, background: C.rule, borderRadius: 1, overflow: 'hidden' }}>
                          <div style={{ height: '100%', borderRadius: 1, background: f.cls === 'good' ? C.success : f.cls === 'mid' ? C.warn : C.inkFade, width: `${f.w}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        
            {/* <div style={{ background: C.white, border: `1px solid ${C.rule}`, borderRadius: 4, padding: '24px', marginBottom: 48 }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.inkFade, padding: '8px 4px' }}>See hero visual above — this is the primary surface</div>
            </div> */}
            <div className={styles.whyGrid}>
              {[
                { why: 'Why two columns, not three.', p: 'Three columns (list, details, actions) split attention. Two columns create a clear narrative: scan, then decide. Actions live at the top of the detail panel, next to the probability — not in a side rail.' },
                { why: 'Why decompose the score.', p: 'A single score demands trust without giving reasoning. Decomposing into five factors with one-line explanations lets users glance and skim, or interrogate if they want. The score is the headline; the factors are the evidence.' },
                { why: 'Why surface what we don\'t know.', p: 'Most AI UIs hide uncertainty. Acknowledging what the system doesn\'t know — team size, hiring urgency, pool size — is what makes users trust what the system does claim. It\'s trust-building, not weakness.' },
                { why: 'Why interview probability leads.', p: 'This is the core reframe of the whole product. Match answers the wrong question. Leading with interview probability forces every downstream design decision into alignment with what users actually care about.' },
              ].map(d => (
                <div key={d.why}>
                  <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 17, color: C.ink, marginBottom: 10, lineHeight: 1.35 }}>{d.why}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.inkSoft }}>{d.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stage 03 ─────────────────────────────────────────────────── */}
        <section className={styles.sectionStd} style={{ borderTop: `1px solid ${C.rule}` }}>
          <div className={styles.container}>
            <div className={styles.stageHeader}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.accent, paddingTop: 8 }}>03 / Stage three</div>
              <div>
                <h3 style={{ fontFamily: serif, fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 12, color: C.ink }}>Application <em style={{ fontStyle: 'italic' }}>tracking</em></h3>
                <p style={{ fontFamily: serif, fontSize: 19, color: C.inkMuted, fontWeight: 300, lineHeight: 1.5 }}>Not just where you are, but what to do about it.</p>
              </div>
            </div>
            <div style={{ background: C.white, border: `1px solid ${C.rule}`, borderRadius: 4, padding: 24, marginBottom: 48 }}>
              {[
                { stage: 'Early stage', dot: C.warn, stageClass: 'early', age: '· applied 1d ago', co: 'Ramp', role: 'Product Engineer', guide: '→ Start building your pipeline', window: 'window: 3–7d', cta: null },
                { stage: 'Response window', dot: C.success, stageClass: 'response', age: '· applied 5d ago', co: 'Closinglock', role: 'Senior Frontend Engineer', guide: '→ Sweet spot for hearing back', window: null, cta: 'Got an interview' },
                { stage: 'Low probability', dot: C.inkFade, stageClass: 'low', age: '· applied 12d ago', co: 'Retool', role: 'UX Engineer', guide: '→ Time to move on', window: null, cta: null },
              ].map(card => (
                <div key={card.co} style={{ border: `1px solid ${card.stageClass === 'response' ? C.ink : C.rule}`, borderRadius: 4, padding: '14px 16px', marginBottom: 10, display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'center' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, marginBottom: 4 }}>
                      <div style={{ width: 7, height: 7, borderRadius: '50%', background: card.dot }} />
                      <span style={{ fontWeight: 500, color: card.dot }}>{card.stage}</span>
                      <span style={{ fontFamily: mono, fontSize: 10, color: C.inkFade }}>{card.age}</span>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 2 }}>{card.co}</div>
                    <div style={{ fontSize: 11, color: C.inkMuted, marginBottom: 6 }}>{card.role}</div>
                    <div style={{ fontSize: 12, color: C.inkSoft }}>{card.guide}</div>
                  </div>
                  <div>
                    {card.cta && <span style={{ background: C.ink, color: C.paper, padding: '6px 12px', borderRadius: 3, fontSize: 11, fontWeight: 500, whiteSpace: 'nowrap' }}>{card.cta}</span>}
                    {card.window && <span style={{ fontFamily: mono, fontSize: 10, color: C.inkFade }}>{card.window}</span>}
                  </div>
                </div>
              ))}
              <div style={{ background: C.paperWarm, borderRadius: 4, padding: '10px 12px', fontSize: 11, color: C.inkSoft, lineHeight: 1.55, marginTop: 12 }}>
                <strong style={{ color: C.ink, fontWeight: 500 }}>Expectation windows are calibrated from real data, not just elapsed time.</strong> A 10-day silence from a competitive role with no referral is functionally a no — keeping you waiting isn&apos;t kindness.
              </div>
            </div>
            <div className={styles.whyGrid}>
              {[
                { why: 'Why emotional stage labels.', p: '"Early stage / Response window / Low probability" is the same information as "1 day / 5 days / 12 days" — but the first framing tells users what to do about it. That\'s the difference between tracking state and managing expectations.' },
                { why: 'Why the CTA only in one window.', p: 'Showing "Got an interview" in every state creates noise. Showing it only in the 3–7 day window makes it feel earned and timely, and reinforces the emotional calibration of the page.' },
                { why: 'Why the footnote is blunt.', p: '"Keeping you waiting isn\'t kindness" is deliberately direct. Tracking tools that always leave a door open are crueler than ones that help users let go. Emotional UX sometimes means being honest.' },
              ].map(d => (
                <div key={d.why}>
                  <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 17, color: C.ink, marginBottom: 10, lineHeight: 1.35 }}>{d.why}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.inkSoft }}>{d.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stage 04 ─────────────────────────────────────────────────── */}
        <section className={styles.sectionStd} style={{ borderTop: `1px solid ${C.rule}` }}>
          <div className={styles.container}>
            <div className={styles.stageHeader}>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.accent, paddingTop: 8 }}>04 / Stage four</div>
              <div>
                <h3 style={{ fontFamily: serif, fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 12, color: C.ink }}>Interview <em style={{ fontStyle: 'italic' }}>strategy</em></h3>
                <p style={{ fontFamily: serif, fontSize: 19, color: C.inkMuted, fontWeight: 300, lineHeight: 1.5 }}>Turning company research into a plan you can actually execute under pressure.</p>
              </div>
            </div>
            <div style={{ background: C.white, border: `1px solid ${C.rule}`, borderRadius: 4, padding: 24, marginBottom: 48, fontSize: 12 }}>
              <div style={{ display: 'flex', gap: 2, borderBottom: `1px solid ${C.rule}`, marginBottom: 16 }}>
                {['Company context', 'Your strategy'].map((tab, i) => (
                  <span key={tab} style={{ padding: '8px 14px', fontSize: 12, color: i === 1 ? C.ink : C.inkMuted, borderBottom: i === 1 ? `1.5px solid ${C.ink}` : '1.5px solid transparent', fontWeight: i === 1 ? 500 : 400 }}>{tab}</span>
                ))}
              </div>
              <div style={{ background: C.paperWarm, borderRadius: 4, padding: 14, marginBottom: 14 }}>
                <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.inkFade, marginBottom: 10 }}>Your strategy</div>
                {['Lead with design systems + legacy migration', 'Position yourself as a frontend systems owner', 'Address Vue gap briefly and move on'].map(item => (
                  <div key={item} style={{ display: 'grid', gridTemplateColumns: '14px 1fr', gap: 8, padding: '4px 0', fontSize: 12, alignItems: 'baseline' }}>
                    <span style={{ fontFamily: mono, color: C.inkFade, fontSize: 10 }}>→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.inkFade, marginBottom: 10 }}>Story mapping</div>
              {[
                { req: 'Legacy modernization', st: 'TanStack Query migration' },
                { req: 'Testing culture', st: '0 → 70% coverage rollout' },
                { req: 'Documentation', st: 'Storybook onboarding system' },
              ].map(row => (
                <div key={row.req} className={styles.storyMapRow} style={{ borderBottom: `1px solid ${C.ruleSoft}` }}>
                  <span style={{ color: C.inkMuted }}>{row.req}</span>
                  <span style={{ fontWeight: 500, color: C.ink }}>{row.st}</span>
                </div>
              ))}
            </div>
            <div className={styles.whyGrid}>
              {[
                { why: 'Why two tabs, not one dashboard.', p: 'Interview prep is two mental tasks — understanding the terrain and planning your moves. Cramming them into one view creates cognitive overload. Separating them mirrors how preparation actually works.' },
                { why: 'Why highlight the Glassdoor signal.', p: 'A 25% positive rate isn\'t just data — it\'s a signal that needs interpretation. Pulling it into a warning card with an explicit "what this might mean" panel turns raw numbers into actionable insight.' },
                { why: 'Why story mapping is a table.', p: 'Prose suggestions for how to tell your story are hard to execute under interview pressure. A table pairing job requirements with your specific stories is something you can actually scan the night before.' },
              ].map(d => (
                <div key={d.why}>
                  <div style={{ fontFamily: serif, fontStyle: 'italic', fontSize: 17, color: C.ink, marginBottom: 10, lineHeight: 1.35 }}>{d.why}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: C.inkSoft }}>{d.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Principles ───────────────────────────────────────────────── */}
        <section className={styles.sectionLg} style={{ borderTop: `1px solid ${C.rule}` }}>
          <div className={styles.container}>
            <div style={{ marginBottom: 56 }}>
              <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.inkMuted, display: 'block', marginBottom: 16 }}>Design principles</span>
              <h2 style={{ fontFamily: serif, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: C.ink }}>
                Four principles that shaped <em style={{ fontStyle: 'italic' }}>every decision</em>.
              </h2>
            </div>
            <div className={styles.principles}>
              {[
                { num: '01', h: 'Decompose, don\'t simplify.', p: 'A single score hides the reasoning users need to trust it. Every aggregate in this product is always one click or one glance from its components.' },
                { num: '02', h: 'Surface uncertainty.', p: 'The system\'s unknowns are first-class UI citizens. What we don\'t know is shown as clearly as what we do. Confidence without reasoning is just noise.' },
                { num: '03', h: 'Decision first, analysis second.', p: 'Actions sit at the top of every page. Analysis supports the recommendation rather than requiring the user to synthesize it themselves.' },
                { num: '04', h: 'Design for emotion, not just state.', p: 'In a high-stakes, uncertain workflow, UX isn\'t just about information — it\'s about what the user should feel empowered to do next.' },
              ].map(p => (
                <div key={p.num}>
                  <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', color: C.accent, marginBottom: 12 }}>{p.num}</div>
                  <h4 style={{ fontFamily: serif, fontSize: 24, fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.015em', marginBottom: 12, fontStyle: 'italic', color: C.ink }}>{p.h}</h4>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: C.inkSoft }}>{p.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Next steps ───────────────────────────────────────────────── */}
        <section className={styles.sectionStd} style={{ background: C.paperWarm }}>
          <div className={styles.container}>
            <div style={narrow}>
              <h2 style={{ fontFamily: serif, fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: 36, fontStyle: 'italic', color: C.ink }}>If I kept building this.</h2>
              {[
                { n: '01', title: 'Validate with users other than me.', p: 'The entire insight came from one user\'s behavior — mine. The next step is structured interviews with 5–10 other job seekers to test whether interview probability resonates as a framing outside my specific situation.' },
                { n: '02', title: 'Connect real data sources.', p: 'The prototype uses mock data. A production version would need job ingestion, competitive pool estimation (hard), and freshness tracking (easier). The trust design would need to adapt to the noise real data introduces.' },
                { n: '03', title: 'Close the decision loop.', p: 'Applications that don\'t convert should feed back into future archetype tuning. The system should get smarter about a user\'s actual market over time — not just better at the first match.' },
              ].map(item => (
                <div key={item.n} style={{ padding: '20px 0', borderBottom: `1px solid ${C.rule}`, display: 'grid', gridTemplateColumns: '40px 1fr', gap: 24, alignItems: 'start' }}>
                  <div style={{ fontFamily: mono, fontSize: 11, color: C.inkFade, paddingTop: 4 }}>{item.n}</div>
                  <div>
                    <div style={{ fontFamily: serif, fontSize: 'clamp(16px, 2vw, 19px)', fontStyle: 'italic', marginBottom: 8, lineHeight: 1.3, color: C.ink }}>{item.title}</div>
                    <p style={{ fontSize: 14, color: C.inkSoft, lineHeight: 1.65 }}>{item.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reflection ───────────────────────────────────────────────── */}
        <section className={styles.sectionStd}>
          <div className={styles.container}>
            <div style={narrow}>
              <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.inkMuted, display: 'block', marginBottom: 24 }}>A note</span>
              <p style={{ fontFamily: serif, fontSize: 'clamp(18px, 2.5vw, 22px)', lineHeight: 1.5, fontStyle: 'italic', fontWeight: 300, color: C.inkSoft, marginBottom: 24 }}>
                This is a weekend sketch, not a product. I built it because using someone else&apos;s AI job tool made me notice a gap I couldn&apos;t stop thinking about — and because the fastest way to test a design intuition is to build it.
              </p>
              <p style={{ fontFamily: serif, fontSize: 'clamp(18px, 2.5vw, 22px)', lineHeight: 1.5, fontStyle: 'italic', fontWeight: 300, color: C.inkSoft, marginBottom: 24 }}>
                What I take from the exercise isn&apos;t the prototype. It&apos;s a clearer view of what I want to work on: the interface layer between AI outputs and human decisions, particularly in contexts where trust matters more than automation. If that&apos;s the kind of work your team does, I&apos;d love to talk.
              </p>
            </div>
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────────────────── */}
        <footer style={{ padding: '72px 0 48px', background: C.ink, color: C.paper }}>
          <div className={styles.container}>
            <div className={styles.footerGrid}>
              <div>
                <h5 style={{ fontFamily: serif, fontSize: 'clamp(20px, 2.5vw, 28px)', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.25, marginBottom: 16 }}>Let&apos;s build the trust layer for AI products, together.</h5>
                <p style={{ fontSize: 15, color: C.inkFade, lineHeight: 1.6 }}>Currently looking for UX Engineer and AI Interface roles in Seattle, Austin, or remote US.</p>
              </div>
              {/* <div>
                <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.inkFade, marginBottom: 14 }}>Read further</div>
                <ul style={{ listStyle: 'none' }}>
                  {['Full essay on Medium →', 'Interactive prototype →', 'More writing →'].map(l => (
                    <li key={l} style={{ padding: '6px 0', fontSize: 14 }}>{l}</li>
                  ))}
                </ul>
              </div> */}
              <div>
                <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.inkFade, marginBottom: 14 }}>Get in touch</div>
                <ul style={{ listStyle: 'none' }}>
                  {links.map(({ label, href }) => (
                    <li key={label} style={{ padding: '6px 0', fontSize: 14 }}>
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.footerBottom} style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)', fontFamily: mono, fontSize: 11, color: C.inkFade, letterSpacing: '0.05em' }}>
              <span>Debbie Chen · 2026</span>
              <span>Designed and built with Claude Code ❤️ in two days</span>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
