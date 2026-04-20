"use client"
import Image from "next/image";
import { Navigation } from "@/components/common/navigation/navigation";
import styles from './page.module.css';
import TeslaImg from '../../../public/Tesla.png';

const C = {
  brand: '#3b4a5a',
  brandInk: '#1e2936',
  brandSoft: '#e4e8ed',
  brandMid: '#b8c2ce',
  inkFade: '#9a968e',
  warn: '#b77226',
  warnSoft: '#f3e5c8',
  ink: '#1a1918',
  ink2: '#3a3835',
  ink3: '#6e6b65',
  line: '#d9dce2',
  paper: '#f7f8fa',
  white: '#ffffff',
};

const principles = [
  { num: 'PRINCIPLE 01', title: 'Transparency beats confidence', desc: 'Drivers trusted the AI more when it showed what it was seeing — live camera feeds, detection boxes — than when it reassured them with "autopilot engaged" text.' },
  { num: 'PRINCIPLE 02', title: 'Handoffs need physical cues, not words', desc: 'Modal alerts created panic. Peripheral color changes and haptic pulses gave drivers time to re-orient before taking action — the difference between a warning and a whiplash.' },
  { num: 'PRINCIPLE 03', title: 'Measure trust, not just usability', desc: 'SUS told us the UI worked. The trust score we added in round 2 told us whether users believed it would keep them safe — a distinction every AI product team needs to make.' },
];

const serif = 'var(--font-fraunces), Georgia, serif';
const mono = 'var(--font-jetbrains-mono), monospace';

const links = [
  { label: 'Email', href: 'mailto:yuan0061@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/te-yuan-debbie-chen/' },
  { label: 'GitHub', href: 'https://github.com/yuan00611' },
];

export default function Tesla() {
  return (
    <>
      <Navigation />
      <div style={{ background: C.paper, minHeight: '100vh' }}>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className={styles.heroSection}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
            {['Autonomous systems', 'Trust calibration', 'Iterative research'].map(t => (
              <span key={t} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: C.brandSoft, color: C.brandInk, fontWeight: 500, letterSpacing: '0.02em' }}>{t}</span>
            ))}
            <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: 'transparent', border: `1px solid ${C.line}`, color: C.ink3, fontWeight: 500, letterSpacing: '0.02em' }}>Team of 4 — research &amp; iteration lead</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(36px, 4.5vw, 52px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: 24, maxWidth: 880, color: C.ink }}>
            When should a driver <em style={{ fontStyle: 'italic', color: C.brandInk }}>trust</em> an AI — and when should they take the wheel back?
          </h1>

          <p style={{ fontSize: 18, color: C.ink2, maxWidth: 660, marginBottom: 56, lineHeight: 1.6, fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
            A UI system for Level 3+ autonomous cars, designed around a simple question every self-driving interface has to answer: which moments belong to the AI, which belong to the human, and who decides?
          </p>

          {/* Metrics bar */}
          <div className={styles.metricsBar} style={{ background: C.white, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
            {[
              { num: '61 → 71', delta: '+16%', label: 'SUS usability score\nacross 3 test rounds' },
              { num: '−33 → 50', delta: '+83', label: 'NPS promoter delta\nfrom iteration 1 to 3' },
              { num: '6', delta: null, label: 'Safety scenarios\ntested in simulation' },
              { num: '3.9/5', delta: null, label: 'Trust score\nintroduced in round 2' },
            ].map((m, i) => (
              <div key={i} className={styles.metricsCell} style={{ borderRight: i < 3 ? `1px solid ${C.line}` : 'none' }}>
                <div style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 30, color: C.brandInk, letterSpacing: '-0.015em', marginBottom: 8, lineHeight: 1 }}>
                  {m.num}
                  {m.delta && <span style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 13, color: C.brand, marginLeft: 6 }}>{m.delta}</span>}
                </div>
                <div style={{ fontSize: 12, color: C.ink3, lineHeight: 1.45, whiteSpace: 'pre-line', fontFamily: 'var(--font-inter), sans-serif' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Hero image */}
        <div style={{ aspectRatio: '7/2', background: C.brandSoft, padding: '24px', overflow: 'hidden' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src={TeslaImg}
              alt="VR smart home built in Unity for eldercare thesis"
              fill
              placeholder="blur"
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 820px) 100vw, 1120px"
              priority
            />
          </div>
        </div>

        {/* ── 01 Challenge ─────────────────────────────────────────────── */}
        <section className={styles.section} style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, letterSpacing: '0.14em', color: C.ink3, marginBottom: 14, textTransform: 'uppercase' }}>01 — The challenge</div>
          <h2 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 28, maxWidth: 760, color: C.ink }}>
            60% of drivers distrust autonomous cars. Only 16% will use even partial automation.
          </h2>
          <p style={{ fontSize: 16, color: C.ink2, maxWidth: 680, marginBottom: 22, lineHeight: 1.7, fontFamily: 'var(--font-inter), sans-serif' }}>
            Autonomous driving isn&apos;t just a technology problem — it&apos;s a handoff problem. At Level 3 and above, the AI drives most of the time but can hand control back at any moment. Every interview we ran surfaced the same anxiety: not of the AI&apos;s capability, but of the ambiguity about who&apos;s actually in charge.
          </p>
          <p style={{ fontSize: 16, color: C.ink2, maxWidth: 680, marginBottom: 22, lineHeight: 1.7, fontFamily: 'var(--font-inter), sans-serif' }}>
            &ldquo;The braking is too late. It also waits too long to change lanes.&rdquo; — that&apos;s not a complaint about performance. It&apos;s a complaint about trust calibration.
          </p>
          <div style={{ background: C.brandSoft, borderLeft: `3px solid ${C.brand}`, padding: '20px 24px', borderRadius: '0 8px 8px 0', margin: '28px 0', fontSize: 15, color: C.brandInk, maxWidth: 640, lineHeight: 1.65, fontFamily: 'var(--font-inter), sans-serif' }}>
            <strong style={{ fontWeight: 500, display: 'block', marginBottom: 6 }}>The design question wasn&apos;t &ldquo;how do we build a better autopilot UI?&rdquo;</strong>
            It was: how do we communicate, in real time, which decisions the AI owns and which still belong to the driver?
          </div>
        </section>

        {/* ── 02 Framework ─────────────────────────────────────────────── */}
        <section className={styles.section} style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, letterSpacing: '0.14em', color: C.ink3, marginBottom: 14, textTransform: 'uppercase' }}>02 — The framework</div>
          <h2 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 28, maxWidth: 760, color: C.ink }}>
            Trust calibration as a <em style={{ fontStyle: 'italic', color: C.brandInk }}>spectrum</em>, not a switch.
          </h2>
          <p style={{ fontSize: 16, color: C.ink2, maxWidth: 680, marginBottom: 0, lineHeight: 1.7, fontFamily: 'var(--font-inter), sans-serif' }}>
            After 6 user interviews and competitive analysis of Tesla, Waymo, and Audi A8, we mapped every interaction in the car onto a three-zone spectrum — shaped by how much authority the AI should hold versus how much belongs to the human.
          </p>

          {/* Spectrum visualization */}
          <div style={{ marginTop: 36, background: C.white, border: `1px solid ${C.line}`, borderRadius: 12, padding: '36px 40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, color: C.ink3, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
              <span style={{ color: C.brandInk, fontWeight: 500 }}>AI owns the decision</span>
              <span style={{ color: C.warn, fontWeight: 500 }}>Human owns the decision</span>
            </div>
            <div style={{ height: 12, borderRadius: 6, background: `linear-gradient(90deg, ${C.brand} 0%, ${C.brandMid} 40%, ${C.warnSoft} 60%, ${C.warn} 100%)` }} />
            <div className={styles.spectrumGrid}>
              {[
                { zone: 'AI leads', color: C.brandInk, title: 'Confident autonomy', ex: 'Highway cruise, lane centering, following distance. Minimal UI. AI acts, driver observes.' },
                { zone: 'Collaborative', color: C.ink3, title: 'Transparent reasoning', ex: 'Lane changes, auto-parking, traffic recognition. AI acts but shows its view — live camera, intent signals, countdown.' },
                { zone: 'Human leads', color: C.warn, title: 'Handoff moments', ex: 'Construction, night driving, AI misjudgment. Peripheral alerts, haptic cues, explicit takeover prompts.' },
              ].map((z, i) => (
                <div key={i} style={{ padding: '20px 22px', borderRight: i < 2 ? `1px solid ${C.line}` : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10, color: z.color }}>{z.zone}</div>
                  <div style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 17, fontWeight: 400, marginBottom: 8, lineHeight: 1.35, letterSpacing: '-0.005em', color: C.ink }}>{z.title}</div>
                  <div style={{ fontSize: 13, color: C.ink3, lineHeight: 1.55, fontFamily: 'var(--font-inter), sans-serif' }}>{z.ex}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: C.brandSoft, borderLeft: `3px solid ${C.brand}`, padding: '20px 24px', borderRadius: '0 8px 8px 0', margin: '32px 0 0', fontSize: 15, color: C.brandInk, maxWidth: 640, lineHeight: 1.65, fontFamily: 'var(--font-inter), sans-serif' }}>
            Once we had this spectrum, every design choice became a question with a framework: <strong style={{ fontWeight: 500 }}>which zone are we in, and is the UI telling the driver that clearly?</strong>
          </div>
        </section>

        {/* ── 03 Iteration ─────────────────────────────────────────────── */}
        <section className={styles.section} style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, letterSpacing: '0.14em', color: C.ink3, marginBottom: 14, textTransform: 'uppercase' }}>03 — Three rounds of iteration</div>
          <h2 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 28, maxWidth: 760, color: C.ink }}>
            From 61 to 71 SUS. More importantly, from <em style={{ fontStyle: 'italic', color: C.brandInk }}>fear</em> to <em style={{ fontStyle: 'italic', color: C.brandInk }}>trust</em>.
          </h2>
          <p style={{ fontSize: 16, color: C.ink2, maxWidth: 680, marginBottom: 0, lineHeight: 1.7, fontFamily: 'var(--font-inter), sans-serif' }}>
            We ran three testing rounds with 6 scenarios each: onboarding, traffic recognition, AI misjudgment, auto lane changing, charging, and auto-parking + trip summary. The quantitative arc tells the story — but the qualitative shift was the real win.
          </p>

          <div className={styles.threeColGrid} style={{ marginTop: 32 }}>
            {[
              { num: 'ROUND 01', title: 'Too much information. Not enough trust.', scores: [{ val: '61', lbl: 'SUS' }, { val: '−33%', lbl: 'NPS' }], notes: '"Notifications are too scary to feel safe." Alerts were wordy, scenarios unclear, and the UI assumed users already trusted the system.', final: false },
              { num: 'ROUND 02', title: 'Added a trust score. Fixed the noise.', scores: [{ val: '71', lbl: 'SUS' }, { val: '50%', lbl: 'NPS' }], notes: 'Introduced trust score as a third metric — usability alone was hiding the emotional gap. Simplified alerts to peripheral color cues instead of modal text.', final: false },
              { num: 'ROUND 03 — FINAL', title: 'Reaction time + scenario details locked.', scores: [{ val: '71', lbl: 'SUS' }, { val: '3.9', lbl: 'TRUST' }], notes: 'Tightened handoff timing, added real-time camera feeds for collaborative zone scenarios. Trust score stabilized — drivers knew what was happening, and when it was their turn.', final: true },
            ].map((r) => (
              <div key={r.num} style={{ background: r.final ? C.brandSoft : C.white, border: `${r.final ? 2 : 1}px solid ${r.final ? C.brand : C.line}`, borderRadius: 10, padding: 24 }}>
                <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, color: r.final ? C.brandInk : C.ink3, letterSpacing: '0.1em', fontWeight: 500, marginBottom: 12 }}>{r.num}</div>
                <div style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 17, fontWeight: 400, marginBottom: 16, lineHeight: 1.3, letterSpacing: '-0.005em', color: r.final ? C.brandInk : C.ink }}>{r.title}</div>
                <div style={{ display: 'flex', gap: 18, marginBottom: 14, paddingBottom: 14, borderBottom: `1px solid ${r.final ? C.brandMid : C.line}` }}>
                  {r.scores.map(s => (
                    <div key={s.lbl} style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 26, fontWeight: 400, color: r.final ? C.brandInk : C.ink, lineHeight: 1, letterSpacing: '-0.015em' }}>{s.val}</div>
                      <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 10, color: C.ink3, letterSpacing: '0.1em', marginTop: 5 }}>{s.lbl}</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 13, color: C.ink2, lineHeight: 1.55, fontFamily: 'var(--font-inter), sans-serif' }}>{r.notes}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 04 Principles ────────────────────────────────────────────── */}
        <section className={styles.section} style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, letterSpacing: '0.14em', color: C.ink3, marginBottom: 14, textTransform: 'uppercase' }}>04 — What we learned about trust in AI</div>
          <h2 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 32, maxWidth: 760, color: C.ink }}>
            Three principles that outlasted the project.
          </h2>
          <div className={styles.threeColGrid}>
            {principles.map((p) => (
              <div key={p.num} style={{ padding: 24, background: C.white, border: `1px solid ${C.line}`, borderRadius: 10 }}>
                <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, color: C.brandInk, fontWeight: 500, letterSpacing: '0.1em', marginBottom: 14 }}>{p.num}</div>
                <div style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 18, fontWeight: 400, marginBottom: 8, lineHeight: 1.35, letterSpacing: '-0.01em', color: C.ink }}>{p.title}</div>
                <div style={{ fontSize: 13, color: C.ink3, lineHeight: 1.55, fontFamily: 'var(--font-inter), sans-serif' }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 05 Reflection ────────────────────────────────────────────── */}
        <section className={styles.section} style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, letterSpacing: '0.14em', color: C.ink3, marginBottom: 28, textTransform: 'uppercase' }}>05 — Reflection</div>
          <div className={styles.reflectionCard} style={{ background: C.brandSoft }}>
            <p style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 26, fontWeight: 400, fontStyle: 'italic', color: C.brandInk, lineHeight: 1.35, marginBottom: 18, letterSpacing: '-0.01em', maxWidth: 660 }}>
              &ldquo;The interfaces that move AI from novelty to trusted tool don&apos;t hide the AI — they show its reasoning, admit its limits, and make the handoff feel like a conversation.&rdquo;
            </p>
            <p style={{ fontSize: 15, color: C.ink2, maxWidth: 580, lineHeight: 1.7, fontFamily: 'var(--font-inter), sans-serif' }}>
              That principle carries through every AI-facing interface I&apos;ve built since: financial copilots at Athena, healthcare tools, any system where the user is deciding whether to let the machine lead. Trust is a feature, and it has a UI.
            </p>
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
