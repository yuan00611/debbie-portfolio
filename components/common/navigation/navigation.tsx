"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Navigation({ onReplay }: { onReplay?: () => void }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = saved ? saved === "dark" : prefersDark;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const mono = "var(--font-jetbrains-mono), ui-monospace, monospace";

  return (
    <header style={{
      position: "fixed", top: 0, zIndex: 50, width: "100%",
      backgroundColor: "color-mix(in oklch, var(--background) 92%, transparent)",
      borderBottom: "1px solid var(--stroke-1)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      transition: "background-color 0.35s ease, border-color 0.35s ease",
    }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", height: 60, maxWidth: 1200, margin: "0 auto",
      }}>
        <Link href="/" style={{
          fontFamily: mono, fontSize: 13, letterSpacing: "0.08em",
          color: "var(--foreground)", textDecoration: "none",
        }}>
          debbie.chen<span style={{ color: "var(--brand-teal)" }}>_</span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Link href="/" style={{
            fontSize: 13.5, color: "var(--foreground)", textDecoration: "none",
          }}>
            Work
          </Link>
          <Link href="/about" style={{
            fontSize: 13.5, color: "var(--muted-foreground)", textDecoration: "none",
          }}>
            About
          </Link>

          {onReplay && (
            <button onClick={onReplay}
              title="Replay the intro animation"
              style={{
                fontFamily: mono, fontSize: 12, color: "var(--brand-teal)",
                background: "transparent", border: "1px solid var(--stroke-2)",
                borderRadius: 999, padding: "6px 14px", cursor: "pointer",
              }}>
              ↻ Intro Animation
            </button>
          )}

          <button onClick={toggleTheme} aria-label="Toggle color theme"
            style={{
              width: 34, height: 34, borderRadius: 99,
              border: "1px solid var(--stroke-2)", background: "transparent",
              color: "var(--muted-foreground)", cursor: "pointer", fontSize: 15,
            }}>
            {isDark ? "☀" : "☾"}
          </button>
        </div>
      </div>
    </header>
  );
}
