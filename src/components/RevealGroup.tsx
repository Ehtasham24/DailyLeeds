"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { stagger, viewport } from "@/lib/motion";

export default function RevealGroup({
  children,
  className,
  style,
  staggerChildren = 0.12,
  delayChildren = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  staggerChildren?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={stagger(staggerChildren, delayChildren)}
    >
      {children}
    </motion.div>
  );
}
