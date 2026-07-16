"use client";

/**
 * SignalOrb — the persistent "trust signal" that travels through all beats.
 * One instance, never unmounts; each phase only feeds it waypoints + a role.
 *
 * Semantics (see docs/design-tokens.md, dual-accent system):
 *   the orb is WARM (--brand-warm = human signal); the structures it builds
 *   and lights up are TEAL (system). A human signal moving through systems.
 *
 * Identity table (= the motion system):
 *   listen: pulse · scatter: guiding spark · assemble: construction cursor
 *   chat: text cursor · graph: node · system: design token
 *   spatial: navigation beacon · hero: resting cursor (blink, then hands off)
 */

import { motion } from "motion/react";
import { EASE_ARR, STAGE, type PhaseId } from "./intro-tokens";

type Role = "pulse" | "spark" | "construct" | "cursor" | "node" | "token" | "beacon" | "rest";

interface OrbState {
  /** waypoint keyframes in % of the stage */
  x: number[];
  y: number[];
  role: Role;
  duration: number; // seconds for the travel within this phase
  delay?: number;
}

/** Three speeds: listening slow with pauses · building fast & springy · showing steady. */
const STATES: Record<PhaseId, OrbState> = {
  listen:   { x: [28, 72, 72], y: [12, 12, 12], role: "pulse", duration: 1.6, delay: 0.3 },
  scatter:  { x: [48.5, 30, 50, 58], y: [52.5, 42, 64, 42], role: "spark", duration: 1.1 },
  assemble: { x: [58, 29, 71, 71, 50], y: [42, 19, 19, 62, 72], role: "construct", duration: 1.2 },
  chat:     { x: [50, 56, 56], y: [72, 58, 58], role: "cursor", duration: 0.7 },
  graph:    { x: [44, 50, 63], y: [58, 37, 44], role: "node", duration: 0.9 },
  system:   { x: [63, 38, 52, 66, 52], y: [44, 46, 46, 46, 62], role: "token", duration: 1.0 },
  spatial:  { x: [52, 40, 36.5], y: [62, 64, 60.5], role: "beacon", duration: 1.5 },
  hero:     { x: [36.5, 64, 64], y: [60.5, 52, 52], role: "rest", duration: 1.0, delay: 0.15 },
};

const ROLE_SHAPE: Record<Role, { w: number; h: number; r: number; blink?: boolean; ring?: boolean }> = {
  pulse:     { w: 9, h: 9, r: 99, ring: true },
  spark:     { w: 8, h: 8, r: 99 },
  construct: { w: 7, h: 7, r: 2 },
  cursor:    { w: 3, h: 14, r: 1.5, blink: true },
  node:      { w: 11, h: 11, r: 99, ring: true },
  token:     { w: 10, h: 10, r: 3 },
  beacon:    { w: 9, h: 9, r: 99, ring: true },
  rest:      { w: 3, h: 16, r: 1.5, blink: true },
};

export function SignalOrb({ phase }: { phase: PhaseId }) {
  const s = STATES[phase];
  const shape = ROLE_SHAPE[s.role];
  const toPct = (arr: number[]) => arr.map((v) => `${v}%`);

  const travel = {
    left: toPct(s.x),
    top: toPct(s.y),
  };
  const transition = {
    duration: s.duration,
    delay: s.delay ?? 0,
    ease: EASE_ARR,
    times: s.x.length > 2 ? s.x.map((_, i) => i / (s.x.length - 1)) : undefined,
  };

  return (
    <>
      <style>{`
        @keyframes orb-blink { 0%,100% { opacity: 1; } 50% { opacity: .2; } }
        @keyframes orb-ring { 0% { transform: scale(.6); opacity: .6; } 100% { transform: scale(2.4); opacity: 0; } }
      `}</style>

      {/* trailing ghosts — same waypoints, lagged + dimmer (the "second thread") */}
      {[0.14, 0.28].map((lag, i) => (
        <motion.div
          key={`ghost-${i}`}
          animate={travel}
          transition={{ ...transition, delay: (s.delay ?? 0) + lag }}
          style={{
            position: "absolute", zIndex: 7, pointerEvents: "none",
            width: 6 - i * 2, height: 6 - i * 2, borderRadius: 99,
            marginLeft: -(6 - i * 2) / 2, marginTop: -(6 - i * 2) / 2,
            background: STAGE.human, opacity: 0.22 - i * 0.08,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* the signal itself */}
      <motion.div
        animate={travel}
        transition={transition}
        style={{ position: "absolute", zIndex: 8, pointerEvents: "none", width: 0, height: 0 }}
      >
        {shape.ring && (
          <span style={{
            position: "absolute", left: -11, top: -11, width: 22, height: 22, borderRadius: 99,
            border: `1px solid ${STAGE.human}`,
            animation: "orb-ring 1.6s ease-out infinite",
          }} />
        )}
        <motion.span
          animate={{ width: shape.w, height: shape.h, borderRadius: shape.r }}
          transition={{ duration: 0.45, ease: EASE_ARR }}
          style={{
            position: "absolute",
            left: 0, top: 0,
            transform: "translate(-50%, -50%)",
            display: "block",
            background: STAGE.human,
            boxShadow: `0 0 10px 3px rgba(255, 176, 124, 0.4), 0 0 22px 8px rgba(255, 176, 124, 0.12)`,
            animation: shape.blink ? "orb-blink 1.1s step-end infinite" : "none",
          }}
        />
      </motion.div>
    </>
  );
}
