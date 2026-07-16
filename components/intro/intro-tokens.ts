/**
 * Intro animation tokens.
 * The stage is ALWAYS dark regardless of site theme (the dark→light dissolve
 * into the real homepage is the point: ambiguity → clarity → trust).
 * Values mirror docs/tokens.json (forest/sage/mist ramp + brand accents).
 * Brand accents intentionally match --brand-teal / --brand-warm in globals.css.
 */

export const STAGE = {
  page: "#0E1411",
  stage: "#111814",
  surface: "#131B16",
  raised: "#16211B",
  header: "#1A271F",
  bubbleUser: "#1E3A2C",
  strokeSubtle: "#223129",
  strokeMid: "#2A3D33",
  strokeWire: "#3A5346",
  strokeStrong: "#6E8B7C",
  textPrimary: "#E8F0EB",
  textSecondary: "#B7C8BF",
  textMuted: "#8CA094",
  signal: "#43C09F", // = --brand-teal
  signalDeep: "#379A7F", // = --brand-teal-dim
  human: "#FFB07C", // = --brand-warm-soft
} as const;

export const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
export const EASE_ARR = [0.22, 1, 0.36, 1] as const;

export type PhaseId =
  | "listen"
  | "scatter"
  | "assemble"
  | "chat"
  | "graph"
  | "system"
  | "spatial"
  | "hero";

export interface Phase {
  id: PhaseId;
  dur: number; // ms; hero's dur is how long it holds before dissolving
  copy?: string;
  caption?: string;
}

export const PHASES: Phase[] = [
  { id: "listen", dur: 2000, copy: "Trust starts with understanding people." },
  { id: "scatter", dur: 1500, copy: "Ideas begin ambiguous." },
  { id: "assemble", dur: 1500, copy: "I make them tangible." },
  { id: "chat", dur: 1800, caption: "01 / AI INTERFACES" },
  { id: "graph", dur: 1800, caption: "02 / DATA-RICH EXPERIENCES" },
  { id: "system", dur: 1800, caption: "03 / DESIGN SYSTEMS" },
  { id: "spatial", dur: 2200, caption: "04 / SPATIAL COMPUTING & AR/VR/MR" },
  { id: "hero", dur: 2500 },
];

export const SESSION_KEY = "intro-played";

/**
 * Same-structure rounded-rect path builder — the morph primitive.
 * Any two calls to rr() produce paths with identical command sequences,
 * so they interpolate cleanly (bubble → node = radius → w/2).
 */
export function rr(
  x: number, y: number, w: number, h: number,
  tl: number, tr: number, br: number, bl: number
): string {
  return (
    `M${x + tl},${y} L${x + w - tr},${y} Q${x + w},${y} ${x + w},${y + tr}` +
    ` L${x + w},${y + h - br} Q${x + w},${y + h} ${x + w - br},${y + h}` +
    ` L${x + bl},${y + h} Q${x},${y + h} ${x},${y + h - bl}` +
    ` L${x},${y + tl} Q${x},${y} ${x + tl},${y} Z`
  );
}
