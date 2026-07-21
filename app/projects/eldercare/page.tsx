"use client"
import Image from "next/image";
import { Navigation } from "@/components/common/navigation/navigation";
import styles from './page.module.css';
import EldercareImg from '../../../public/Eldercare.png';
import WebsitePng from '../../../public/Eldercare-website.png';

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
            {['Eldercare', 'Safety-critical UX', 'VR prototyping', 'Published research'].map(t => (
              <span key={t} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: C.brandSoft, color: C.brandInk, fontWeight: 500, letterSpacing: '0.02em' }}>{t}</span>
            ))}
            <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: 'transparent', border: `1px solid ${C.line}`, color: C.ink3, fontWeight: 500, letterSpacing: '0.02em' }}>NTU iNsight · 1-year program</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(36px, 4.5vw, 52px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: 24, maxWidth: 820, color: C.ink }}>
            Can an 80-year-old trust a smart home to catch them when they <em style={{ fontStyle: 'italic', color: C.brandInk }}>fall</em>?
          </h1>

          <p style={{ fontSize: 18, color: C.ink2, maxWidth: 640, marginBottom: 56, lineHeight: 1.6, fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
            A 1-year research program with NTU&apos;s iNsight UX team. We helped author Taiwan&apos;s national design guideline for smart eldercare housing — then I translated it into a collaboration website, an animated explainer, and a full VR smart home built in Unity, so seniors could experience the fall-prevention service before it existed. The research was published twice.
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

        {/* ── The program at a glance ──────────────────────────────────── */}
        <section className={styles.section} style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', color: C.ink3, marginBottom: 22, textTransform: 'uppercase' }}>One research program · five outcomes</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {[
              { t: '2018.08', l: 'Thesis research begins', d: 'NTU iNsight UX team' },
              { t: '2019.01', l: 'National guideline', d: 'Architecture & Building Research Institute, MOI' },
              { t: '2019', l: 'Collaboration website', d: 'Laravel tool for designers & clients' },
              { t: '2019', l: 'Animated explainer', d: '2D guideline animation' },
              { t: '2019.12', l: 'Journal publication', d: '輔具之友 (45), 1–8' },
            ].map((s, i) => (
              <div key={i} style={{ flex: '1 1 170px', background: C.white, border: `1px solid ${C.line}`, borderRadius: 10, padding: '16px 18px' }}>
                <div style={{ fontFamily: mono, fontSize: 11, color: C.brandInk, letterSpacing: '0.08em', marginBottom: 8 }}>{s.t}</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: C.ink, marginBottom: 4, fontFamily: 'var(--font-inter), sans-serif' }}>{s.l}</div>
                <div style={{ fontSize: 12, color: C.ink3, lineHeight: 1.45, fontFamily: 'var(--font-inter), sans-serif' }}>{s.d}</div>
              </div>
            ))}
          </div>
        </section>

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

        {/* ── 02 The foundation ────────────────────────────────────────── */}
        <section className={styles.section} style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', color: C.ink3, marginBottom: 14, textTransform: 'uppercase' }}>02 — The foundation</div>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 28, maxWidth: 720, color: C.ink }}>
            First, the nation needed a guideline.
          </h2>
          <p style={{ fontSize: 16, color: C.ink2, maxWidth: 680, marginBottom: 22, lineHeight: 1.7, fontFamily: 'var(--font-inter), sans-serif' }}>
            Before any prototype, the program produced <strong style={{ fontWeight: 500, color: C.ink }}>《智慧住宅高齡照護設計指引》</strong> — a design guideline for smart eldercare housing, published by the Architecture and Building Research Institute, Ministry of the Interior (January 2019). I contributed to the guideline research alongside my advisors; it defined the technologies, spatial requirements, and care scenarios that everything else in this project builds on.
          </p>
          <div style={{ background: C.white, border: `1px solid ${C.line}`, borderLeft: `3px solid ${C.brand}`, padding: '20px 24px', borderRadius: '0 8px 8px 0', maxWidth: 680, fontFamily: 'var(--font-inter), sans-serif' }}>
            <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.brandInk, marginBottom: 10, fontWeight: 500 }}>National design guideline</div>
            <p style={{ fontSize: 14.5, color: C.ink2, lineHeight: 1.7, margin: 0 }}>陳俊杉等(2019年1月)。智慧住宅高齡照護設計指引。內政部建築研究所。</p>
            <a href="https://www.abri.gov.tw/News_Content_Table.aspx?n=862&s=39672" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 10, fontSize: 13.5, color: C.brandInk, fontWeight: 500, textDecoration: 'none', borderBottom: `1px solid ${C.line}` }}>View on ABRI →</a>
          </div>
        </section>

        {/* ── 03 Translations ──────────────────────────────────────────── */}
        <section className={styles.section} style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', color: C.ink3, marginBottom: 14, textTransform: 'uppercase' }}>03 — From guideline to tools</div>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 28, maxWidth: 720, color: C.ink }}>
            A guideline nobody can use is just a PDF.
          </h2>
          <p style={{ fontSize: 16, color: C.ink2, maxWidth: 680, marginBottom: 36, lineHeight: 1.7, fontFamily: 'var(--font-inter), sans-serif' }}>
            So I translated it twice — once for the professionals who would apply it, once for the families it was written to protect — and a third time into VR, below. Same guideline, three media: the medium is the means, never the point.
          </p>

          {/* Translation 1 — the website */}
          <div style={{ fontFamily: mono, fontSize: 11, color: C.brandInk, fontWeight: 500, letterSpacing: '0.1em', marginBottom: 12 }}>TRANSLATION 01 · WEB</div>
          <h3 style={{ fontFamily: serif, fontSize: 22, fontWeight: 400, color: C.ink, marginBottom: 12, letterSpacing: '-0.01em' }}>A shared canvas for designers and clients</h3>
          <p style={{ fontSize: 15, color: C.ink2, maxWidth: 680, marginBottom: 20, lineHeight: 1.7, fontFamily: 'var(--font-inter), sans-serif' }}>
            I built a web platform in <strong style={{ fontWeight: 500, color: C.ink }}>Laravel + MySQL</strong> where interior designers and their clients communicate through the guideline itself: browse smart technologies by care need — each with its expected effect, cost, and recommended quantity — and place them together onto the client&apos;s actual floor plan.
          </p>
          <div style={{ border: `1px solid ${C.line}`, borderRadius: 10, overflow: 'hidden', background: C.white, maxWidth: 820 }}>
            <Image
              src={WebsitePng}
              alt="The collaboration website: a sidebar of smart technologies with cost and effect, placed onto an interior floor plan"
              placeholder="blur"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              sizes="(max-width: 860px) 100vw, 820px"
            />
          </div>
          <a href="https://github.com/yuan00611/ElderlySmartHomeCollaborationTool" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 14, fontSize: 13.5, color: C.brandInk, fontWeight: 500, textDecoration: 'none', borderBottom: `1px solid ${C.line}`, fontFamily: 'var(--font-inter), sans-serif' }}>View the code on GitHub →</a>

          {/* Translation 2 — the animation */}
          <div style={{ fontFamily: mono, fontSize: 11, color: C.brandInk, fontWeight: 500, letterSpacing: '0.1em', margin: '44px 0 12px' }}>TRANSLATION 02 · MOTION</div>
          <h3 style={{ fontFamily: serif, fontSize: 22, fontWeight: 400, color: C.ink, marginBottom: 12, letterSpacing: '-0.01em' }}>The guideline, explained in two minutes</h3>
          <p style={{ fontSize: 15, color: C.ink2, maxWidth: 680, marginBottom: 20, lineHeight: 1.7, fontFamily: 'var(--font-inter), sans-serif' }}>
            For seniors and their families, I produced a 2D animated explainer of the smart home guideline — built in Powtoon, trading the document&apos;s precision for a story anyone can follow.
          </p>
          <div style={{ border: `1px solid ${C.line}`, borderRadius: 10, overflow: 'hidden', background: C.white, maxWidth: 820, position: 'relative', aspectRatio: '16/9' }}>
            <iframe
              src="https://www.youtube.com/embed/Q3SWFWFvju4"
              title="Smart home guideline for elderly — 2D animation"
              allowFullScreen
              loading="lazy"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>
        </section>

        {/* ── 04 Why VR ────────────────────────────────────────────────── */}
        <section className={styles.section} style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, letterSpacing: '0.14em', color: C.ink3, marginBottom: 14, textTransform: 'uppercase' }}>04 — Why VR</div>
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

          {/* In-headset clips — the 3am scenario */}
          <div className={styles.threeColGrid} style={{ marginTop: 32, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div style={{ border: `1px solid ${C.line}`, borderRadius: 10, overflow: 'hidden', background: C.white }}>
              <video autoPlay muted loop playsInline preload="metadata" width={854} height={480} style={{ width: '100%', height: 'auto', display: 'block' }} aria-label="In-VR view: the bedroom at night, nearly dark, as the senior wakes">
                <source src="/Eldercare-vr01.webm" type="video/webm" />
                <source src="/Eldercare-vr01.mp4" type="video/mp4" />
              </video>
            </div>
            <div style={{ border: `1px solid ${C.line}`, borderRadius: 10, overflow: 'hidden', background: C.white }}>
              <video autoPlay muted loop playsInline preload="metadata" width={854} height={480} style={{ width: '100%', height: 'auto', display: 'block' }} aria-label="In-VR view: motion-activated guidance lighting glowing along the path to the bathroom">
                <source src="/Eldercare-vr02.webm" type="video/webm" />
                <source src="/Eldercare-vr02.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <p style={{ fontSize: 13, color: C.ink3, marginTop: 12, fontFamily: 'var(--font-inter), sans-serif' }}>
            Inside the headset: the 3am scenario — waking in the dark, and the guidance lighting waking up with you.
          </p>

          <div style={{ background: C.brandSoft, borderLeft: `3px solid ${C.brand}`, padding: '20px 24px', borderRadius: '0 8px 8px 0', margin: '32px 0 0', fontSize: 15, color: C.brandInk, maxWidth: 640, lineHeight: 1.65, fontFamily: 'var(--font-inter), sans-serif' }}>
            Built the 3D environment, scripted the interactions in Unity, and ran the headset sessions myself. One person, one pipeline — from service blueprint to lived experience.
          </div>
        </section>

        {/* ── 05 Research ──────────────────────────────────────────────── */}
        <section className={styles.section} style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, letterSpacing: '0.14em', color: C.ink3, marginBottom: 14, textTransform: 'uppercase' }}>05 — What the research found</div>
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

        {/* ── 06 Publications ──────────────────────────────────────────── */}
        <section className={styles.section} style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', color: C.ink3, marginBottom: 14, textTransform: 'uppercase' }}>06 — Publications</div>
          <h2 style={{ fontFamily: serif, fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: 28, maxWidth: 720, color: C.ink }}>
            The research left the lab twice.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 720 }}>
            <div style={{ background: C.white, border: `1px solid ${C.line}`, borderLeft: `3px solid ${C.brand}`, padding: '20px 24px', borderRadius: '0 8px 8px 0', fontFamily: 'var(--font-inter), sans-serif' }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.brandInk, marginBottom: 10, fontWeight: 500 }}>National design guideline · Jan 2019</div>
              <p style={{ fontSize: 14.5, color: C.ink2, lineHeight: 1.7, margin: 0 }}>陳俊杉等(2019年1月)。智慧住宅高齡照護設計指引。內政部建築研究所。</p>
              <a href="https://www.abri.gov.tw/News_Content_Table.aspx?n=862&s=39672" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 10, fontSize: 13.5, color: C.brandInk, fontWeight: 500, textDecoration: 'none', borderBottom: `1px solid ${C.line}` }}>View on ABRI →</a>
            </div>
            <div style={{ background: C.white, border: `1px solid ${C.line}`, borderLeft: `3px solid ${C.brand}`, padding: '20px 24px', borderRadius: '0 8px 8px 0', fontFamily: 'var(--font-inter), sans-serif' }}>
              <div style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.brandInk, marginBottom: 10, fontWeight: 500 }}>Journal article · Dec 2019</div>
              <p style={{ fontSize: 14.5, color: C.ink2, lineHeight: 1.7, margin: 0 }}>陳俊杉、陳嘉懿、<strong style={{ fontWeight: 600, color: C.ink }}>陳德元</strong>(2019年12月)。導入防跌科技的高齡智慧住宅服務設計。輔具之友(45),1–8頁。</p>
              <a href="https://newrepat.sfaa.gov.tw/home/repat-friend/detail/2c90e4c76ea5c720016ea6657e8a06de" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 10, fontSize: 13.5, color: C.brandInk, fontWeight: 500, textDecoration: 'none', borderBottom: `1px solid ${C.line}` }}>Read in 輔具之友 →</a>
            </div>
          </div>
          <p style={{ fontSize: 14, color: C.ink3, marginTop: 22, fontFamily: 'var(--font-inter), sans-serif' }}>
            The full thesis write-up — method, blueprints, and prototype detail — lives in the original case study:{' '}
            <a href="https://yuan00611.github.io/portfolio/u07_smarthome/u07_smarthome.html" target="_blank" rel="noopener noreferrer" style={{ color: C.brandInk, fontWeight: 500, textDecoration: 'none', borderBottom: `1px solid ${C.line}` }}>2019 archive →</a>
          </p>
        </section>

        {/* ── 07 Reflection ────────────────────────────────────────────── */}
        <section className={styles.section} style={{ borderTop: `1px solid ${C.line}` }}>
          <div style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: 11, letterSpacing: '0.14em', color: C.ink3, marginBottom: 28, textTransform: 'uppercase' }}>07 — Reflection</div>
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
              <span>NTU iNsight UX · 2018–2019</span>
            </div>
          </div>
        </footer>


      </div>
    </>
  );
}
