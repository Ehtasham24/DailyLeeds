"use client";

import { LazyMotion } from "framer-motion";
import type { ReactNode } from "react";

const loadFeatures = () => import("@/lib/motionFeatures").then((mod) => mod.default);

/** Components use the slim `m` instead of `motion`, and the animation
 *  engine streams in behind the first paint — roughly 30 KB (gzipped)
 *  less JavaScript on every page's critical path. `strict` throws if a
 *  full `motion` component sneaks back in and undoes the saving. */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
