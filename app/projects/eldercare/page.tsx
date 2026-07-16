"use client"
import Image from "next/image";
import { Navigation } from "@/components/common/navigation/navigation";
import styles from './page.module.css';
import EldercareImg from '../../../public/Eldercare.png';

const C = {
  brand:     '#2ab8a6',         // teal brand — intentional, kept
  brandInk:  'var(--foreground)', // was #0e6358; dark teal invisible on dark --secondary bg
  brandSoft: 'var(--secondary)',
  brandMid:  'var(--secondary)',
  inkFade:   'var(--muted-foreground)',
  ink:       'var(--foreground)',
  ink2:      'var(--foreground)',
  ink3:      'var(--muted-foreground)',
  line:      'var(--border)',
  paper:     'var(--background)',
  white:     'var(--card)',
};

const serif = 'var(--font-fraunces), Georgia, serif';
const mono = 'var(--font-jetbrains-mono), monospace';

const links = [
  { label: 'Email', href: 'mailto:yuan0061@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/te-yuan-debbie-chen/' },
  { label: 'GitHub', href: 'https://github.com/yuan00611' },
];

const features = [
  { icon: <path d="M12 3v18M3 12h18"/>, title: 'Smart lighting', desc: 'Motion-activated path from bed to bathroom' },
  { icon: <><path d="M12 2a4 4 0 014 4v6a4 4 0 01-8 0V6a4 4 0 014-4z"/><path d="M6 12v2a6 6 0 0012 0v-2"/></>, title: 'Voice assistant', desc: 'Three detection zones with context-aware prompts' },
  { icon: <><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M3 14h18"/></>, title: 'Pressure mat', desc: 'Guidance lighting triggered by weight' },
  { icon: <path d="M12 2v6M12 22v-4M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M22 12h-6"/>, title: 'Water leak sensor', desc: 'Voice alert before the senior steps in' },
  { icon: <><path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/><path d="M12 22V12M2 7l10 5 10-5"/></>, title: 'Emergency alert', desc: 'Auto-notifies trusted contact on fall detection' },
  { icon: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></>, title: 'Full 24h cycle', desc: 'Morning wake → nighttime routine → emergency' },
];

const kanoData = [
  { label: 'Emergency notification', pct: 94 },
  { label: 'Smart lighting path', pct: 91 },
  { label: 'Voice wake/sleep prompts', pct: 88 },
  { label: 'Pressure mat guidance', pct: 72 },
  { label: 'Water leak voice alert', pct: 68 },
  { label: '"Wait before standing" prompt', pct: 34 },
];

const insights = [
  { num: 'INSIGHT 01', title: 'Trust comes from escalation, not prevention', desc: 'Seniors cared less about avoiding falls than knowing help would arrive if one happened. The emergency chain beat every preventive feature.' },
  { num: 'INSIGHT 02', title: 'Voice becomes noise past a threshold', desc: 'The "pause before standing" prompt tested worst. Users read patience as paternalism — a trust breaker, not a safety aid.' },
  { num: 'INSIGHT 03', title: 'Gender shifted acceptance more than age', desc: 'Women across all age bands trusted the system faster than men — a signal that later productization should segment by disposition, not demographic.' },
];

export default function Eldercare() {
  return (
    <>
      <Navigation />
      <div style={{ background: C.paper, minHeight: '100vh' }}>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className={styles.heroSection}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
            {['Eldercare', 'Safety-critical UX', 'VR prototyping'].map(t => (
              <span key={t} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: C.brandSoft, color: C.brandInk, fontWeight: 500, letterSpacing: '0.02em' }}>{t}</span>
            ))}
            <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: 'transparent', border: `1px solid ${C.line}`, color: C.ink3, fontWeight: 500, letterSpacing: '0.02em' }}>Solo UX engineer — 1 year</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(36px, 4.5vw, 52px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: 24, maxWidth: 820, color: C.ink }}>
            Can an 80-year-old trust a smart home to catch them when they <em style={{ fontStyle: 'italic', color: C.brandInk }}>fall</em>?
          </h1>

          <p style={{ fontSize: 18, color: C.ink2, maxWidth: 640, marginBottom: 56, lineHeight: 1.6, fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
            A 1-year master&apos;s thesis where I built a full VR smart home in Unity to let seniors experience a fall-prevention service before it existed — and ran the research to find out if they&apos;d actually trust it.
          </p>

          {/* Metrics bar */}
          <div className={styles.metricsBar} style={{ background: C.white, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
            {[{ num: '10', label: 'Seniors recruited\n(50+, no prior VR)' }, { num: '9', label: 'Service features\nvalidated via KANO' }, { num: '1', label: 'VR prototype\nmodeled & coded solo' }, { num: '100%', label: 'Participants felt\nsafer after trial' }].map((m, i) => (
              <div key={i} className={styles.metricsCell} style={{ borderRight: i < 3 ? `1px solid ${C.line}` : 'none' }}>
                <div style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 36, color: C.brandInk, letterSpacing: '-0.015em', marginBottom: 8, lineHeight: 1 }}>{m.num}</div>
                <div style={{ fontSize: 12, color: C.ink3, lineHeight: 1.45, whiteSpace: 'pre-line' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Hero image */}
        <div style={{ aspectRatio: '7/2', background: C.brandSoft, padding: '24px', overflow: 'hidden' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src={EldercareImg}
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
          <h2 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 28, maxWidth: 720, color: C.ink }}>
            Most falls happen at 3am. Most seniors won&apos;t trust a system they&apos;ve never seen.
          </h2>
          <p style={{ fontSize: 16, color: C.ink2, maxWidth: 680, marginBottom: 22, lineHeight: 1.7, fontFamily: 'var(--font-inter), sans-serif' }}>
            28% of Americans over 65 live alone. Falls during nighttime bathroom trips are the leading cause of serious injury — and isolation compounds the risk. Smart homes promise to solve this, but every pitch assumes the user will accept invisible sensors, voice assistants, and automated responses on faith.
          </p>
          <p style={{ fontSize: 16, color: C.ink2, maxWidth: 680, marginBottom: 22, lineHeight: 1.7, fontFamily: 'var(--font-inter), sans-serif' }}>
            I wanted to test that assumption with the people it actually affects — before anyone built a production system.
          </p>
          <div style={{ background: C.brandSoft, borderLeft: `3px solid ${C.brand}`, padding: '20px 24px', borderRadius: '0 8px 8px 0', margin: '28px 0', fontSize: 15, color: C.brandInk, maxWidth: 640, lineHeight: 1.65, fontFamily: 'var(--font-inter), sans-serif' }}>
            <strong style={{ fontWeight: 500, display: 'block', marginBottom: 6 }}>The real question wasn&apos;t &ldquo;does the tech work?&rdquo;</strong>
            It was: does a 75-year-old who&apos;s never used a smartphone feel safer with this system, or more anxious?
          </div>
        </section>

        {/* ── 02 Why VR ────────────────────────────────────────────────── */}
        <section className={styles.section} style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, letterSpacing: '0.14em', color: C.ink3, marginBottom: 14, textTransform: 'uppercase' }}>02 — Why VR</div>
          <h2 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 28, maxWidth: 720, color: C.ink }}>
            You can&apos;t A/B test a smart home. So I built one in <em style={{ fontStyle: 'italic', color: C.brandInk }}>Unity</em>.
          </h2>
          <p style={{ fontSize: 16, color: C.ink2, maxWidth: 680, marginBottom: 0, lineHeight: 1.7, fontFamily: 'var(--font-inter), sans-serif' }}>
            Traditional usability testing fails for service design — you can&apos;t hand a senior a wireframe and ask if they&apos;d trust it at 3am. I needed immersion without construction cost, so I modeled the full apartment in SketchUp and brought it into Unity as a walkable VR scenario covering five integrated systems.
          </p>

          <div className={styles.threeColGrid} style={{ marginTop: 32 }}>
            {features.map((f) => (
              <div key={f.title} style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 10, padding: 22 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: C.brandSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <svg viewBox="0 0 24 24" width={18} height={18} stroke={C.brandInk} fill="none" strokeWidth={1.5}>{f.icon}</svg>
                </div>
                <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 6, color: C.ink, fontFamily: 'var(--font-inter), sans-serif' }}>{f.title}</div>
                <div style={{ fontSize: 13, color: C.ink3, lineHeight: 1.5, fontFamily: 'var(--font-inter), sans-serif' }}>{f.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ background: C.brandSoft, borderLeft: `3px solid ${C.brand}`, padding: '20px 24px', borderRadius: '0 8px 8px 0', margin: '32px 0 0', fontSize: 15, color: C.brandInk, maxWidth: 640, lineHeight: 1.65, fontFamily: 'var(--font-inter), sans-serif' }}>
            Built the 3D environment, scripted the interactions in Unity, and ran the headset sessions myself. One person, one pipeline — from service blueprint to lived experience.
          </div>
        </section>

        {/* ── 03 Research ──────────────────────────────────────────────── */}
        <section className={styles.section} style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, letterSpacing: '0.14em', color: C.ink3, marginBottom: 14, textTransform: 'uppercase' }}>03 — What the research found</div>
          <h2 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 28, maxWidth: 720, color: C.ink }}>
            KANO analysis: not all safety features are created equal.
          </h2>
          <p style={{ fontSize: 16, color: C.ink2, maxWidth: 680, marginBottom: 0, lineHeight: 1.7, fontFamily: 'var(--font-inter), sans-serif' }}>
            I ran focus groups and participatory design sessions with 10 seniors across 3 cohorts. Every feature scored as &ldquo;Attractive&rdquo; on the KANO model — but the <em style={{ fontFamily: 'var(--font-fraunces), serif' }}>relative</em> ranking revealed something more useful than a binary pass/fail.
          </p>

          {/* KANO chart */}
          <div style={{ marginTop: 32, background: C.white, border: `1px solid ${C.line}`, borderRadius: 10, padding: '28px 32px' }}>
            {kanoData.map((row, i) => (
              <div key={i} className={styles.kanoRow} style={{ borderTop: i === 0 ? 'none' : `1px solid ${C.line}` }}>
                <div className={styles.kanoLabel} style={{ flex: 1, color: C.ink2, fontFamily: 'var(--font-inter), sans-serif' }}>{row.label}</div>
                <div className={styles.kanoBar} style={{ flex: 1.8, height: 8, background: C.line, borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ height: '100%', background: C.brand, borderRadius: 4, width: `${row.pct}%` }} />
                </div>
                <div style={{ width: 48, textAlign: 'right', color: C.ink3, fontSize: 13, fontFamily: 'var(--font-jetbrains-mono), monospace' }}>{row.pct}%</div>
              </div>
            ))}
          </div>

          {/* Insights */}
          <div className={styles.threeColGrid} style={{ marginTop: 32 }}>
            {insights.map((ins) => (
              <div key={ins.num} style={{ padding: 24, background: C.white, border: `1px solid ${C.line}`, borderRadius: 10 }}>
                <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, color: C.brandInk, fontWeight: 500, letterSpacing: '0.1em', marginBottom: 14 }}>{ins.num}</div>
                <div style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 18, fontWeight: 400, marginBottom: 8, lineHeight: 1.35, letterSpacing: '-0.01em', color: C.ink }}>{ins.title}</div>
                <div style={{ fontSize: 13, color: C.ink3, lineHeight: 1.55, fontFamily: 'var(--font-inter), sans-serif' }}>{ins.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 04 Reflection ────────────────────────────────────────────── */}
        <section className={styles.section} style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, letterSpacing: '0.14em', color: C.ink3, marginBottom: 28, textTransform: 'uppercase' }}>04 — Reflection</div>
          <div className={styles.reflectionCard} style={{ background: C.brandSoft }}>
            <p style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 26, fontWeight: 400, fontStyle: 'italic', color: C.brandInk, lineHeight: 1.35, marginBottom: 18, letterSpacing: '-0.01em', maxWidth: 640 }}>
              &ldquo;Safety-critical products aren&apos;t won on features. They&apos;re won when the user believes the system will be there at the worst moment — and leave them alone the rest of the time.&rdquo;
            </p>
            <p style={{ fontSize: 15, color: C.ink2, maxWidth: 580, lineHeight: 1.7, fontFamily: 'var(--font-inter), sans-serif' }}>
              That lesson — calibrating presence against trust — is what I carry into every complex interface I build now. Financial dashboards, healthcare sites, AI assistants: same problem, different skin.
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
