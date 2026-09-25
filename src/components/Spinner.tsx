"use client";

import { motion } from "framer-motion";
import LogoMark from "@/components/LogoMark";

const RING_MASK =
  "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))";

/** The brand mark fills with the blue -> green gradient like liquid
 *  (rising, then draining upward), while a comet orbits it on a faint
 *  track — a loader built from the logo itself. */
export default function Spinner({ size = 72 }: { size?: number }) {
  const mark = size * 0.3;

  return (
    <div
      role="status"
      aria-label="Loading"
      className="relative grid place-items-center"
      style={{ width: size, height: size }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-[14%] rounded-full bg-gradient-to-br from-blue to-green blur-2xl"
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1, 0.8] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <div aria-hidden className="absolute inset-0 rounded-full border-[3px] border-navy/[.08]" />

      <motion.div
        aria-hidden
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 140deg, rgba(47,125,225,.9) 290deg, #1BB47A 360deg)",
            WebkitMask: RING_MASK,
            mask: RING_MASK,
          }}
        />
        <span className="absolute left-1/2 top-[-2px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-green shadow-[0_0_12px_2px_rgba(27,180,122,.8)]" />
      </motion.div>

      <div className="relative leading-[0]">
        <LogoMark size={mark} className="bg-navy/15" />
        <motion.div
          aria-hidden
          className="absolute inset-0"
          animate={{
            clipPath: [
              "inset(100% 0% 0% 0%)",
              "inset(0% 0% 0% 0%)",
              "inset(0% 0% 100% 0%)",
            ],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <LogoMark size={mark} />
        </motion.div>
      </div>
    </div>
  );
}
