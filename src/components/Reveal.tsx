"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewport } from "@/lib/motion";

export default function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
}: {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
