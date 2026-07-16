"use client";

import { useState } from "react";

type Tilt = { x: number; y: number };

function CapCard({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{
        background: "var(--surface-2)", border: "1px solid var(--stroke-2)",
        borderRadius: 12, height: 128,
        display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
      }}>
        {children}
      </div>
      <div style={{
        fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace",
        fontSize: 11, letterSpacing: "0.16em", color: "var(--muted-foreground)",
        marginTop: 12, textAlign: "left",
      }}>
        {label}
      </div>
    </div>
  );
}

function AiMotif({ d = 0 }: { d?: number }) {
  const dl = (off: number): React.CSSProperties => ({ animationDelay: `${d + off}s` });
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, width: "74%" }}>
      <div style={{
        alignSelf: "flex-end", width: "52%", height: 11,
        borderRadius: "7px 7px 2px 7px", background: "var(--bubble-user)",
        animation: "k-bubble 12s ease infinite", ...dl(0),
      }} />
      <div style={{
        alignSelf: "flex-start", width: "82%", minHeight: 22, padding: "6px 9px",
        borderRadius: "7px 7px 7px 2px", background: "var(--header-2)",
        border: "1px solid var(--stroke-2)", position: "relative",
        animation: "k-bubble2 12s ease infinite", ...dl(0),
      }}>
        <span style={{ display: "flex", gap: 4, animation: "k-dots 12s linear infinite", ...dl(0) }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              width: 4.5, height: 4.5, borderRadius: 99,
              background: "var(--brand-teal)",
              animation: `k-typing 1.1s ease-in-out ${i * 0.18}s infinite`,
            }} />
          ))}
        </span>
        <span style={{
          position: "absolute", left: 9, top: 8, height: 5, borderRadius: 3,
          background: "var(--muted-foreground)",
          animation: "k-line 12s ease-out infinite", ...dl(0),
        }} />
        <span style={{
          position: "absolute", right: 6, top: 5, color: "var(--brand-warm)", fontSize: 10,
          animation: "k-ping 12s ease-out infinite", ...dl(0),
        }}>✦</span>
      </div>
      <span style={{
        width: 2.5, height: 12, background: "var(--brand-warm)", borderRadius: 1,
        animation: "k-blink 1.1s step-end infinite",
      }} />
    </div>
  );
}

function DataMotif({ d = 0 }: { d?: number }) {
  return (
    <div style={{ position: "relative", width: "74%", height: 64, display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 7 }}>
      {[26, 42, 32].map((h, i) => (
        <div key={i} style={{
          width: 9, height: h, borderRadius: 2.5, transformOrigin: "bottom",
          background: i === 2 ? "var(--brand-warm)" : i === 1 ? "var(--brand-teal)" : "var(--primary)",
          animation: `k-breathe 4s ease-in-out ${i * 0.5}s infinite`,
        }} />
      ))}
      <svg viewBox="0 0 90 60" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <polyline points="6,46 26,38 45,42 64,16 84,24" fill="none"
          stroke="var(--brand-teal)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="60" style={{ animation: `k-spark 12s ease-in-out ${d}s infinite` }} />
        <circle cx="64" cy="16" r="6" fill="none" stroke="var(--brand-warm)" strokeWidth="1.2"
          style={{ animation: `k-ring 12s ease-out ${d}s infinite`, transformOrigin: "64px 16px" }} />
      </svg>
    </div>
  );
}

function SystemMotif({ d = 0 }: { d?: number }) {
  return (
    <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(3, 26px)", gridAutoRows: "26px", gap: 7 }}>
      {[0, 1, 2, 3, 4, 5].map(i => (
        <div key={i} style={{
          borderRadius: 5, border: "1px solid var(--stroke-2)",
          background: "var(--raised-2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: i === 0 ? "none" : "k-cell 12s ease infinite",
          animationDelay: i === 0 ? "0s" : `${d + i * 0.35}s`,
          opacity: i === 0 ? 1 : undefined,
        }}>
          <div style={{
            width: 12, height: 4.5, borderRadius: 3,
            background: i === 4 ? "var(--brand-warm)" : "var(--brand-teal)", opacity: .9,
          }} />
        </div>
      ))}
    </div>
  );
}

function SpatialMotif({ d = 0, tilt = { x: 0, y: 0 } }: { d?: number; tilt?: Tilt }) {
  const RINGS = [0, 1.75, 3.5, 5.25];
  return (
    <div style={{ position: "relative", width: 100, height: 80, perspective: 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{
        position: "relative", width: "100%", height: "100%",
        display: "flex", alignItems: "center", justifyContent: "center",
        transform: `rotateX(${5 - tilt.y * 6}deg) rotateY(${tilt.x * 8}deg)`,
        transformStyle: "preserve-3d", transition: "transform .18s ease-out",
      }}>
        {RINGS.map((delay, i) => (
          <div key={i} aria-hidden style={{
            position: "absolute", width: 88, height: 64, borderRadius: 10,
            border: "1px solid var(--brand-teal)",
            animation: `k-tunnel 7s linear ${delay}s infinite`,
          }} />
        ))}
        <div style={{
          position: "relative", width: 7, height: 7,
          transform: `translate(${tilt.x * -5}px, ${tilt.y * -4}px)`,
          transition: "transform .18s ease-out",
        }}>
          <div style={{
            position: "absolute", inset: 0, borderRadius: 99,
            background: "var(--brand-warm)",
            boxShadow: "0 0 9px 3px rgba(255,176,124,0.35)",
            animation: "k-beacon 3.2s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", left: -9, top: -9, width: 25, height: 25, borderRadius: 99,
            border: "1.4px solid var(--brand-warm)",
            animation: `k-ring 12s ease-out ${d}s infinite`,
          }} />
        </div>
      </div>
    </div>
  );
}

export function CapabilityStrip() {
  const [tilt, setTilt] = useState<Tilt>({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - r.left) / r.width - 0.5) * 2,
      y: ((e.clientY - r.top) / r.height - 0.5) * 2,
    });
  };

  return (
    <div onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ position: "relative", maxWidth: 940, margin: "44px auto 0" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16,
      }}
        className="hero-strip"
      >
        <CapCard label="AI INTERFACES"><AiMotif d={0} /></CapCard>
        <CapCard label="DATA-RICH"><DataMotif d={3} /></CapCard>
        <CapCard label="DESIGN SYSTEM"><SystemMotif d={6} /></CapCard>
        <CapCard label="IMMERSIVE EXPERIENCE"><SpatialMotif d={9} tilt={tilt} /></CapCard>
      </div>
      {/* traveling signal — dwells under whichever card is performing */}
      <div aria-hidden style={{
        position: "absolute", bottom: 26, width: 7, height: 7, borderRadius: 99,
        background: "var(--brand-warm)",
        boxShadow: "0 0 8px 2px rgba(255,176,124,0.35)",
        animation: "k-travel 12s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      }} />
    </div>
  );
}
