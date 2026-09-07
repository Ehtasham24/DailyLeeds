"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { stagger, viewport } from "@/lib/motion";

export default function RevealGroup({
  children,
  className,
  staggerChildren = 0.12,
  delayChildren = 0,
}: {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={stagger(staggerChildren, delayChildren)}
    >
      {children}
    </motion.div>
  );
}
