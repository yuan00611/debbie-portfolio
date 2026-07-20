"use client";

import * as React from "react";
import { useInView } from "motion/react";

/**
 * Scroll-reveal wrapper: fades content up once when it enters the viewport.
 * Reduced-motion users are covered by the global kill-switch in globals.css.
 */
export function Reveal({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(22px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
