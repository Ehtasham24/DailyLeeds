"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { pageTransition } from "@/lib/motion";

/** Fades + lifts each route's content in/out on navigation, so moving
 *  between pages feels like one continuous app instead of hard cuts.
 *  No `initial={false}`: Framer propagates that to every descendant on
 *  a hard load, which freezes looping animations (the loader) and skips
 *  the hero's entrance on whichever page you land on first. */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
