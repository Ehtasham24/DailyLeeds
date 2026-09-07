"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

/** A card that tilts in 3D toward the cursor and reveals a soft light
 *  that tracks the pointer — the "premium SaaS card" hover treatment. */
export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255,255,255,.35)",
  tilt = 8,
}: {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  tilt?: number;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 200, damping: 20 });
  const spotlightBg = useMotionTemplate`radial-gradient(220px circle at ${mx}px ${my}px, ${spotlightColor}, transparent 75%)`;

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    mx.set(px);
    my.set(py);
    ry.set((px / rect.width - 0.5) * tilt);
    rx.set((py / rect.height - 0.5) * -tilt);
  }

  function handleLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`group relative [transform-style:preserve-3d] ${className}`}
    >
      <motion.div
        aria-hidden
        style={{ background: spotlightBg }}
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div style={{ transform: "translateZ(24px)" }}>{children}</div>
    </motion.div>
  );
}
