"use client";

import { motion } from "framer-motion";
import LogoMark from "@/components/LogoMark";

// The same three colors used for the plumber/electrician/cleaner icons
// elsewhere on the site — three dots for three trades, bouncing in
// like leads arriving one after another.
const DOTS = [
  { color: "#2F7DE1", delay: 0 },
  { color: "#F5A623", delay: 0.12 },
  { color: "#1BB47A", delay: 0.24 },
];

const BOUNCE_EASE: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

export default function Spinner({ size = 56 }: { size?: number }) {
  const dot = Math.max(6, size * 0.16);

  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex flex-col items-center gap-4"
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <LogoMark size={size * 0.6} />
      </motion.div>

      <div className="flex items-end gap-[.5em]" style={{ height: size * 0.4 }}>
        {DOTS.map((d) => (
          <motion.span
            key={d.color}
            className="rounded-full"
            style={{ width: dot, height: dot, background: d.color }}
            animate={{ y: [0, -size * 0.32, 0], scale: [1, 1.2, 1] }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              delay: d.delay,
              ease: BOUNCE_EASE,
            }}
          />
        ))}
      </div>
    </div>
  );
}
