"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/** A horizontal line that draws itself in behind the step cards as the
 *  section scrolls into view — desktop only. */
export default function StepsConnector() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 60%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-[54px] hidden px-[16.5%] md:block"
    >
      <svg width="100%" height="4" viewBox="0 0 100 1" preserveAspectRatio="none">
        <line
          x1="0"
          y1="0.5"
          x2="100"
          y2="0.5"
          stroke="var(--color-line)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <motion.line
          x1="0"
          y1="0.5"
          x2="100"
          y2="0.5"
          stroke="url(#steps-grad)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
        <defs>
          <linearGradient id="steps-grad" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#2F7DE1" />
            <stop offset="1" stopColor="#1BB47A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
