"use client";

import { motion } from "framer-motion";
import LogoMark from "@/components/LogoMark";

/** The pin spins in place on its vertical axis, like a coin or a
 *  weathervane — with a shadow beneath that squashes in sync to sell
 *  the 3D flip. Inspired by Dribbble's "LittlePin Spinner". */
export default function Spinner({ size = 64 }: { size?: number }) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex flex-col items-center gap-3"
    >
      <motion.div
        style={{ transformPerspective: 300 }}
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
      >
        <LogoMark size={size} />
      </motion.div>
      <motion.div
        aria-hidden
        className="rounded-full bg-navy/15"
        style={{ width: size * 0.5, height: size * 0.11 }}
        animate={{ scaleX: [1, 0.2, 1], opacity: [0.8, 0.4, 0.8] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
