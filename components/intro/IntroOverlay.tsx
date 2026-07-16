"use client";

/**
 * IntroOverlay — the portfolio opening animation.
 *
 * Usage (app/page.tsx):
 *   import { IntroOverlay } from "@/components/intro/IntroOverlay";
 *   // first child inside the fragment:
 *   <IntroOverlay />
 *
 * Behavior:
 * - Plays once per session (sessionStorage), then dissolves to reveal the page.
 * - prefers-reduced-motion → renders nothing (page shows immediately).
 * - Esc or the Skip button ends it any time.
 * - The stage is always dark; the dissolve into the light site is intentional
 *   (ambiguity → clarity → trust). Spec: docs/design-tokens.md · Figma 04 · Storyboard.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE, EASE_ARR, PHASES, SESSION_KEY, STAGE } from "./intro-tokens";
import { SignalOrb } from "./SignalOrb";

const rise = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.5, ease: EASE_ARR },
};

// Floating elements: scatter → assembled positions (% of stage)
type El = {
  id: string;
  kind: "frame" | "header" | "dot" | "chip" | "bars" | "sparkle" | "prompt";
  scatter: { l: number; t: number; w?: number; h?: number; r?: number };
  asm: { l: number; t: number; w?: number; h?: number; r?: number };
  delay: number;
  hideInVignette?: boolean;
};

const ELEMENTS: El[] = [
  { id: "boxBig", kind: "frame", scatter: { l: 8, t: 16, w: 17, h: 16, r: -8 }, asm: { l: 29, t: 17, w: 42, h: 62, r: 0 }, delay: 0 },
  { id: "boxSmall", kind: "header", scatter: { l: 70, t: 10, w: 15, h: 6, r: 10 }, asm: { l: 29, t: 17, w: 42, h: 9, r: 0 }, delay: 80 },
  { id: "dot1", kind: "dot", scatter: { l: 28, t: 72 }, asm: { l: 31.5, t: 20.6 }, delay: 160 },
  { id: "dot2", kind: "dot", scatter: { l: 58, t: 80 }, asm: { l: 34, t: 20.6 }, delay: 220 },
  { id: "dot3", kind: "dot", scatter: { l: 84, t: 56 }, asm: { l: 36.5, t: 20.6 }, delay: 280 },
  { id: "prompt", kind: "prompt", scatter: { l: 60, t: 38, r: 6 }, asm: { l: 41, t: 19.4, r: 0 }, delay: 200, hideInVignette: true },
  { id: "chip", kind: "chip", scatter: { l: 22, t: 52, r: -14 }, asm: { l: 32, t: 66, r: 0 }, delay: 300, hideInVignette: true },
  { id: "bars", kind: "bars", scatter: { l: 44, t: 62, r: 10 }, asm: { l: 55, t: 56, r: 0 }, delay: 360, hideInVignette: true },
  { id: "sparkle", kind: "sparkle", scatter: { l: 47, t: 20 }, asm: { l: 66.5, t: 20 }, delay: 120 },
];

export function IntroOverlay({ force = false }: { force?: boolean }) {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [done, setDone] = useState(false);
  const [phase, setPhase] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const finish = useCallback(() => {
    timers.current.forEach(clearTimeout);
    try { sessionStorage.setItem(SESSION_KEY, "1"); } catch {}
    setDone(true);
  }, []);

  const playFrom = useCallback((idx: number) => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setPhase(idx);
    let acc = 0;
    for (let i = idx; i < PHASES.length; i++) {
      acc += PHASES[i].dur;
      const next = i + 1;
      timers.current.push(
        setTimeout(() => (next < PHASES.length ? setPhase(next) : finish()), acc)
      );
    }
  }, [finish]);

  useEffect(() => {
    let played = false;
    try { played = sessionStorage.getItem(SESSION_KEY) === "1"; } catch {}
    if (reduced || (played && !force)) return; // never mounts
    setMounted(true);
    playFrom(0);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && finish();
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      timers.current.forEach(clearTimeout);
    };
  }, [reduced, force, playFrom, finish]);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  if (!mounted) return null;

  const cur = PHASES[phase];
  const listening = cur.id === "listen";
  const inScatter = cur.id === "scatter";
  const assembled = phase >= 2;
  const hero = cur.id === "hero";
  const vignette = phase >= 3 && !hero;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="intro"
          role="dialog"
          aria-label="Intro animation. Press Escape to skip."
          exit={{ opacity: 0, scale: 1.015 }}
          transition={{ duration: 0.9, ease: EASE_ARR }}
          style={{
            position: "fixed", inset: 0, zIndex: 60,
            background: STAGE.page,
            display: "grid", placeItems: "center",
            fontFamily: "var(--font-inter), ui-sans-serif, system-ui",
          }}
        >
          <style>{`
            @keyframes intro-drift { 0%,100% { transform: translate(0,0);} 50% { transform: translate(4px,-7px);} }
            @keyframes intro-driftSlow { 0%,100% { transform: translate(0,0);} 50% { transform: translate(-6px,5px);} }
            @keyframes intro-blink { 0%,100% { opacity: 1;} 50% { opacity: .15;} }
            @keyframes intro-wave { 0%,100% { transform: scaleY(.25);} 50% { transform: scaleY(1);} }
            @keyframes intro-draw { from { stroke-dashoffset: 60;} to { stroke-dashoffset: 0;} }
            @keyframes intro-pop { from { opacity: 0; transform: scale(.4);} to { opacity: 1; transform: scale(1);} }
            @keyframes intro-riseIn { from { opacity: 0; transform: translateY(14px);} to { opacity: 1; transform: translateY(0);} }
            @keyframes intro-typeDots { 0%,100% { opacity:.2 } 40% { opacity:1 } }
            @keyframes intro-glow { 0%,100% { opacity:.25;} 50% { opacity:.75;} }
            @keyframes intro-gaze { 0% { transform: translate(0,0);} 60%,100% { transform: translate(-33px,16px);} }
            @keyframes intro-ring { from { stroke-dashoffset: 35.2;} to { stroke-dashoffset: 0;} }
            @keyframes intro-stream { from { width: 12%; } to { width: 88%; } }
          `}</style>

          {/* Skip */}
          <button
            onClick={finish}
            style={{
              position: "absolute", top: 20, right: 24, zIndex: 5,
              background: "transparent", border: `1px solid ${STAGE.strokeMid}`,
              color: STAGE.textMuted, borderRadius: 999, padding: "6px 14px",
              fontSize: 12, cursor: "pointer",
            }}
          >
            Skip →
          </button>

          {/* Stage */}
          <div
            style={{
              position: "relative", width: "min(92vw, 1040px)", aspectRatio: "16/10",
              maxHeight: "86vh", borderRadius: 16, overflow: "hidden",
              background: STAGE.stage, border: `1px solid ${STAGE.strokeSubtle}`,
              backgroundImage: "radial-gradient(rgba(67,192,159,0.10) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          >
            {/* Phase copy */}
            <AnimatePresence mode="wait">
              {cur.copy && (
                <motion.div key={cur.id} {...rise}
                  style={{ position: "absolute", top: "6%", width: "100%", textAlign: "center", zIndex: 5,
                    fontSize: "clamp(15px, 2.4vw, 22px)", fontWeight: 600, color: STAGE.textPrimary, letterSpacing: "-0.01em" }}>
                  {cur.copy}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Listening scene */}
            <div style={{ position: "absolute", inset: 0, zIndex: 4, pointerEvents: "none",
              opacity: listening ? 1 : 0, filter: listening ? "none" : "blur(4px)",
              transition: `opacity .7s ease, filter .7s ease` }}>
              <ListeningScene />
            </div>

            {/* Floating / assembling elements */}
            {ELEMENTS.map((el) => {
              const p = assembled ? el.asm : el.scatter;
              const hidden = (vignette || hero) && el.hideInVignette;
              return (
                <div key={el.id} style={{
                  position: "absolute", left: `${p.l}%`, top: `${p.t}%`,
                  width: p.w != null ? `${p.w}%` : undefined,
                  height: p.h != null ? `${p.h}%` : undefined,
                  transition: `left .8s ${EASE}, top .8s ${EASE}, width .8s ${EASE}, height .8s ${EASE}, opacity .5s ease`,
                  transitionDelay: assembled ? `${el.delay}ms` : "0ms",
                  opacity: listening ? 0 : hero ? 0 : hidden ? 0 : 1,
                  filter: inScatter ? "blur(1.2px)" : "none",
                  zIndex: el.kind === "frame" ? 1 : 2,
                }}>
                  <div style={{ width: "100%", height: "100%",
                    transform: `rotate(${p.r || 0}deg)`, transition: `transform .8s ${EASE}`,
                    animation: inScatter ? `${el.delay % 160 ? "intro-drift" : "intro-driftSlow"} ${3 + (el.delay % 3)}s ease-in-out infinite` : "none" }}>
                    <Glyph kind={el.kind} />
                  </div>
                </div>
              );
            })}

            {/* Vignettes */}
            <AnimatePresence mode="wait">
              {vignette && (
                <motion.div key={cur.id}
                  initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.35, ease: EASE_ARR }}
                  style={{ position: "absolute", left: "29%", top: "26%", width: "42%", height: "53%", zIndex: 3, padding: "3% 3.5%", boxSizing: "border-box" }}>
                  {cur.id === "chat" && <ChatVignette />}
                  {cur.id === "graph" && <GraphVignette />}
                  {cur.id === "system" && <SystemVignette />}
                  {cur.id === "spatial" && <SpatialVignette />}
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence mode="wait">
              {cur.caption && (
                <motion.div key={cur.caption} {...rise}
                  style={{ position: "absolute", bottom: "15%", width: "100%", textAlign: "center",
                    fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
                    fontSize: 12, letterSpacing: "0.12em", color: STAGE.textMuted }}>
                  {cur.caption}
                </motion.div>
              )}
            </AnimatePresence>

            {/* The trust signal — persistent across all beats, never unmounts */}
            <SignalOrb phase={cur.id} />

            {/* Hero beat — resolves, then the overlay dissolves into the real site */}
            {hero && (
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", textAlign: "center", zIndex: 6, padding: "0 8%" }}>
                <motion.div {...rise} transition={{ ...rise.transition, delay: 0.05 }}
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 12, letterSpacing: "0.18em", color: STAGE.signal, marginBottom: 12 }}>
                  UX · DESIGN · PROTOTYPE · ENGINEER
                </motion.div>
                <motion.div {...rise} transition={{ ...rise.transition, delay: 0.18 }}
                  style={{ fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.08, color: STAGE.textPrimary }}>
                  Debbie Chen
                </motion.div>
                <motion.div {...rise} transition={{ ...rise.transition, delay: 0.3 }}
                  style={{ fontSize: "clamp(14px, 2.2vw, 18px)", fontWeight: 500, color: STAGE.textSecondary, marginTop: 8 }}>
                  Design Technologist & Rapid Prototyper
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------- glyphs ---------------- */

function Glyph({ kind }: { kind: El["kind"] }) {
  switch (kind) {
    case "frame":
      return <div style={{ width: "100%", height: "100%", border: `1.5px solid ${STAGE.strokeStrong}`, borderRadius: 10, background: "rgba(19,27,22,0.75)" }} />;
    case "header":
      return <div style={{ width: "100%", height: "100%", border: `1.5px solid ${STAGE.strokeStrong}`, borderRadius: "10px 10px 0 0", background: STAGE.header }} />;
    case "dot":
      return <div style={{ width: 8, height: 8, borderRadius: 99, background: STAGE.signal, opacity: 0.85 }} />;
    case "prompt":
      return <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: STAGE.textMuted }}>&gt; prototype_<span style={{ animation: "intro-blink 1.1s step-end infinite" }}>▍</span></span>;
    case "chip":
      return (
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${STAGE.strokeStrong}`, borderRadius: 999, padding: "4px 10px", fontSize: 10, fontFamily: "var(--font-jetbrains-mono), monospace", color: STAGE.textSecondary, background: STAGE.surface }}>
          <span style={{ width: 7, height: 7, borderRadius: 99, background: STAGE.human, display: "inline-block" }} />token/primary
        </div>
      );
    case "bars":
      return (
        <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 26 }}>
          <div style={{ width: 7, height: "45%", background: STAGE.signal, borderRadius: 2, opacity: 0.8 }} />
          <div style={{ width: 7, height: "90%", background: STAGE.signalDeep, borderRadius: 2 }} />
          <div style={{ width: 7, height: "65%", background: STAGE.human, borderRadius: 2, opacity: 0.85 }} />
        </div>
      );
    case "sparkle":
      return <span style={{ color: STAGE.human, fontSize: 15 }}>✦</span>;
  }
}

/* ---------------- listening ---------------- */

function ListeningScene() {
  const mono = "var(--font-jetbrains-mono), ui-monospace, monospace";
  const pill = (label: string, pos: React.CSSProperties, delay: number, slow = false) => (
    <div style={{ position: "absolute", ...pos, animation: `intro-riseIn .6s ${EASE} both ${delay}s` }}>
      <div style={{ animation: `${slow ? "intro-driftSlow" : "intro-drift"} ${4 + delay}s ease-in-out infinite`, fontFamily: mono, fontSize: 11, color: STAGE.textMuted, border: `1px solid ${STAGE.strokeMid}`, borderRadius: 999, padding: "4px 11px", background: STAGE.surface }}>
        {label}
      </div>
    </div>
  );
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -52%)",
        display: "flex", gap: 12, alignItems: "center", background: STAGE.raised,
        border: `1px solid ${STAGE.strokeMid}`, borderRadius: 10, padding: "3.2% 3.6%",
        animation: `intro-riseIn .6s ${EASE} both .1s` }}>
        <div style={{ width: "clamp(26px,4.5vw,38px)", height: "clamp(26px,4.5vw,38px)", borderRadius: 99,
          border: `1.5px solid ${STAGE.signal}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <div style={{ width: "40%", height: "40%", borderRadius: 99, background: STAGE.signal, opacity: 0.8 }} />
        </div>
        <div>
          <div style={{ width: "clamp(60px,9vw,90px)", height: 7, borderRadius: 99, background: STAGE.strokeWire, marginBottom: 6 }} />
          <div style={{ width: "clamp(40px,6vw,60px)", height: 5, borderRadius: 99, background: STAGE.strokeSubtle }} />
          <div style={{ display: "flex", gap: 5, marginTop: 8 }}>
            {[0.15, 0.3, 0, 0.45, 0.2, 0.55, 0.1, 0.35, 0.25].map((d, i) => (
              <span key={i} style={{ width: 3, height: "clamp(10px,1.8vw,16px)", borderRadius: 99, background: STAGE.human,
                transformOrigin: "bottom", display: "inline-block", animation: `intro-wave 1.1s ease-in-out ${d}s infinite` }} />
            ))}
          </div>
        </div>
        <span style={{ position: "absolute", top: -9, right: 12, fontFamily: mono, fontSize: 9, letterSpacing: "0.1em",
          color: STAGE.signal, background: STAGE.stage, border: `1px solid ${STAGE.strokeMid}`, borderRadius: 999, padding: "2px 8px" }}>
          persona
        </span>
      </div>
      {pill("#context", { left: "17%", top: "28%" }, 0.35)}
      {pill("user interview", { right: "15%", top: "30%" }, 0.5, true)}
      {pill("a11y · screen reader", { left: "11%", top: "54%" }, 0.82, true)}
      <div style={{ position: "absolute", left: "20%", bottom: "20%", animation: `intro-riseIn .6s ${EASE} both .6s` }}>
        <div style={{ animation: "intro-drift 4.5s ease-in-out infinite", background: STAGE.header, border: `1px solid ${STAGE.strokeMid}`,
          borderRadius: "10px 10px 10px 3px", padding: "6px 12px", fontSize: 12, fontStyle: "italic", color: STAGE.textSecondary }}>
          “I never know if it saved.”
        </div>
      </div>
      <div style={{ position: "absolute", right: "20%", bottom: "24%", animation: `intro-riseIn .6s ${EASE} both .72s` }}>
        <div style={{ animation: "intro-driftSlow 4s ease-in-out infinite", fontFamily: mono, fontSize: 11, color: STAGE.human, opacity: 0.85 }}>
          pain point ↘
        </div>
      </div>
      <div style={{ position: "absolute", right: "11%", top: "55%", animation: `intro-riseIn .6s ${EASE} both .9s` }}>
        <div style={{ animation: "intro-drift 5.2s ease-in-out infinite", display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="34" height="14" viewBox="0 0 34 14">
            <polyline points="1,11 8,9 14,12 21,5 27,7 33,2" fill="none" stroke={STAGE.signal} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: mono, fontSize: 10, color: STAGE.textMuted }}>behavior</span>
        </div>
      </div>
      <div style={{ position: "absolute", left: "50%", bottom: "11%", transform: "translateX(-50%)", animation: `intro-riseIn .6s ${EASE} both 1s` }}>
        <div style={{ fontFamily: mono, fontSize: 10, color: STAGE.textMuted, opacity: 0.75 }}>
          obs: hesitates before submitting →
        </div>
      </div>
    </div>
  );
}

/* ---------------- vignettes ---------------- */

function ChatVignette() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8%", height: "100%", justifyContent: "center" }}>
      <div style={{ alignSelf: "flex-end", background: STAGE.bubbleUser, borderRadius: "10px 10px 3px 10px", padding: "5% 6%", fontSize: "clamp(9px,1.3vw,12px)", color: STAGE.textPrimary, animation: "intro-riseIn .4s ease both" }}>
        Show me the anomaly in Q3 →
      </div>
      <div style={{ alignSelf: "flex-start", background: STAGE.header, border: `1px solid ${STAGE.strokeMid}`, borderRadius: "10px 10px 10px 3px", padding: "5% 6%", width: "78%", animation: "intro-riseIn .4s ease both .25s" }}>
        <div style={{ overflow: "hidden", whiteSpace: "nowrap", fontSize: "clamp(9px,1.3vw,12px)", color: STAGE.textMuted, animation: "intro-stream 1s ease-out both .4s" }}>Streaming analysis of 4,120 events…</div>
        <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: 5, height: 5, borderRadius: 99, background: STAGE.signal, animation: `intro-typeDots 1s ease-in-out ${i * 0.18}s infinite` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function GraphVignette() {
  const nodes: [number, number][] = [[20, 30], [50, 18], [78, 34], [34, 66], [64, 72]];
  const edges: [number, number][] = [[0, 1], [1, 2], [0, 3], [1, 4], [3, 4], [2, 4]];
  return (
    <svg viewBox="0 0 100 90" style={{ width: "100%", height: "100%" }}>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke={STAGE.strokeWire} strokeWidth="0.8" strokeDasharray="60"
          style={{ animation: `intro-draw .7s ease-out both ${i * 0.09}s` }} />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i} style={{ animation: `intro-pop .45s ${EASE} both ${0.15 + i * 0.1}s`, transformOrigin: `${x}px ${y}px` }}>
          <circle cx={x} cy={y} r={i === 1 ? 5 : 3.6} fill={i === 1 ? STAGE.signal : STAGE.surface}
            stroke={i === 1 ? "none" : STAGE.signal} strokeWidth="1" />
        </g>
      ))}
      <circle cx={50} cy={18} r={8} fill="none" stroke={STAGE.human} strokeWidth="0.7" opacity="0.6"
        style={{ animation: "intro-pop .5s ease both .7s", transformOrigin: "50px 18px" }} />
    </svg>
  );
}

function SystemVignette() {
  const tiles = ["Button", "Toggle", "Input", "Card", "Tag", "Slider"];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6%", height: "100%", alignContent: "center" }}>
      {tiles.map((t, i) => (
        <div key={t} style={{ border: `1px solid ${STAGE.strokeMid}`, borderRadius: 8, background: STAGE.raised, padding: "8% 6%",
          display: "flex", flexDirection: "column", gap: 6, alignItems: "center", justifyContent: "center",
          animation: `intro-riseIn .45s ${EASE} both ${i * 0.08}s` }}>
          <TileGlyph i={i} />
          <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: "clamp(7px,1vw,10px)", color: STAGE.textMuted }}>{t}</span>
        </div>
      ))}
    </div>
  );
}

function TileGlyph({ i }: { i: number }) {
  const c = STAGE.signal, w = STAGE.human;
  switch (i) {
    case 0: return <div style={{ width: 30, height: 11, borderRadius: 6, background: c }} />;
    case 1: return <div style={{ width: 26, height: 13, borderRadius: 99, background: STAGE.strokeMid, position: "relative" }}><div style={{ position: "absolute", right: 2, top: 2, width: 9, height: 9, borderRadius: 99, background: w }} /></div>;
    case 2: return <div style={{ width: 32, height: 12, borderRadius: 4, border: `1px solid ${c}` }} />;
    case 3: return <div style={{ width: 28, height: 18, borderRadius: 4, border: `1px solid ${STAGE.strokeWire}`, background: STAGE.header }} />;
    case 4: return <div style={{ padding: "2px 8px", borderRadius: 99, border: `1px solid ${w}`, fontSize: 7, color: w, fontFamily: "var(--font-jetbrains-mono), monospace" }}>new</div>;
    case 5: return <div style={{ width: 30, height: 3, borderRadius: 99, background: STAGE.strokeMid, position: "relative" }}><div style={{ position: "absolute", left: "55%", top: -3, width: 9, height: 9, borderRadius: 99, background: c }} /></div>;
    default: return null;
  }
}

function SpatialVignette() {
  const Bracket = ({ cx, cy, s, delay }: { cx: number; cy: number; s: number; delay: number }) => (
    <g style={{ animation: `intro-pop .4s ${EASE} both ${delay}s`, transformOrigin: `${cx}px ${cy}px` }}>
      {[
        `M ${cx - s} ${cy - s + 3} L ${cx - s} ${cy - s} L ${cx - s + 3} ${cy - s}`,
        `M ${cx + s - 3} ${cy - s} L ${cx + s} ${cy - s} L ${cx + s} ${cy - s + 3}`,
        `M ${cx + s} ${cy + s - 3} L ${cx + s} ${cy + s} L ${cx + s - 3} ${cy + s}`,
        `M ${cx - s + 3} ${cy + s} L ${cx - s} ${cy + s} L ${cx - s} ${cy + s - 3}`,
      ].map((d, i) => (
        <path key={i} d={d} fill="none" stroke={STAGE.signal} strokeWidth="1" strokeLinecap="round" />
      ))}
    </g>
  );
  return (
    <svg viewBox="0 0 100 90" style={{ width: "100%", height: "100%" }}>
      <g style={{ animation: `intro-pop .5s ${EASE} both`, transformOrigin: "50px 45px" }}>
        <rect x="26" y="14" width="48" height="34" fill="none" stroke={STAGE.strokeWire} strokeWidth="0.8" />
        {([[4, 26], [16, 26], [96, 74], [84, 74]] as const).map(([fromX, toX], i) => (
          <line key={i} x1={fromX} y1="86" x2={toX} y2="48" stroke={STAGE.strokeWire} strokeWidth="0.7" strokeDasharray="60"
            style={{ animation: `intro-draw .8s ease-out both ${0.1 + i * 0.08}s` }} />
        ))}
        <line x1="16" y1="72" x2="84" y2="72" stroke={STAGE.strokeWire} strokeWidth="0.7" strokeDasharray="80"
          style={{ animation: "intro-draw .9s ease-out both .3s" }} />
      </g>
      <g style={{ animation: `intro-pop .45s ${EASE} both .35s`, transformOrigin: "16px 60px" }}>
        <circle cx="16" cy="58" r="7" fill={STAGE.human} opacity="0.18" style={{ animation: "intro-glow 2.4s ease-in-out infinite .8s" }} />
        <circle cx="16" cy="58" r="2.6" fill={STAGE.human} />
        <line x1="16" y1="60.5" x2="16" y2="70" stroke={STAGE.strokeStrong} strokeWidth="0.9" />
      </g>
      <g style={{ animation: `intro-pop .45s ${EASE} both .45s`, transformOrigin: "63px 24px" }}>
        <circle cx="63" cy="24" r="4" fill={STAGE.surface} stroke={STAGE.strokeStrong} strokeWidth="0.8" />
        <path d="M 60.2 25.6 A 3 3 0 0 1 65.5 22.5" fill="none" stroke={STAGE.human} strokeWidth="1" strokeLinecap="round" />
      </g>
      <Bracket cx={16} cy={58} s={9} delay={0.75} />
      <Bracket cx={63} cy={24} s={7} delay={0.9} />
      <line x1="25" y1="52" x2="34" y2="44" stroke={STAGE.signal} strokeWidth="0.5" strokeDasharray="20"
        style={{ animation: "intro-draw .5s ease-out both 1s" }} />
      <g style={{ animation: `intro-riseIn .4s ${EASE} both 1.1s` }}>
        <rect x="34" y="39" width="40" height="8" rx="2" fill="rgba(67,192,159,0.10)" stroke={STAGE.signal} strokeWidth="0.5" />
        <text x="37" y="44.4" fontSize="3.6" fontFamily="monospace" fill={STAGE.signal}>lamp · warm 40%</text>
      </g>
      <line x1="70" y1="21" x2="78" y2="16" stroke={STAGE.signal} strokeWidth="0.5" strokeDasharray="16"
        style={{ animation: "intro-draw .5s ease-out both 1.15s" }} />
      <g style={{ animation: `intro-riseIn .4s ${EASE} both 1.25s` }}>
        <rect x="78" y="12" width="15" height="8" rx="2" fill="rgba(67,192,159,0.10)" stroke={STAGE.signal} strokeWidth="0.5" />
        <text x="80.5" y="17.4" fontSize="3.6" fontFamily="monospace" fill={STAGE.signal}>72.3°</text>
      </g>
      <g style={{ animation: `intro-gaze 2s ${EASE} both .6s` }}>
        <circle cx="52" cy="40" r="4" fill="none" stroke={STAGE.textMuted} strokeWidth="0.7" opacity="0.9" />
        <circle cx="52" cy="40" r="1" fill={STAGE.signal} />
        <circle cx="52" cy="40" r="5.6" fill="none" stroke={STAGE.signal} strokeWidth="1"
          strokeDasharray="35.2" strokeLinecap="round" transform="rotate(-90 52 40)"
          style={{ animation: "intro-ring 1s ease-out both 1.7s" }} />
      </g>
    </svg>
  );
}
