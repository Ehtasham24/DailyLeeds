"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import RevealGroup from "@/components/RevealGroup";
import SpotlightCard from "@/components/SpotlightCard";
import { fadeUp } from "@/lib/motion";

export type Feature = { icon: ReactNode; title: string; text: string };

const COLS = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 md:grid-cols-3",
} as const;

/** A grid of icon + title + text cards — the "checklist of benefits"
 *  pattern reused across Why-us and the How It Works "what's included"
 *  section, each with its own copy and icon set. */
export default function FeatureGrid({
  items,
  columns = 2,
  spotlightColor = "rgba(47,125,225,.1)",
  maxWidth = "900px",
}: {
  items: Feature[];
  columns?: keyof typeof COLS;
  spotlightColor?: string;
  maxWidth?: string;
}) {
  return (
    <RevealGroup
      className={`mx-auto grid grid-cols-1 gap-[22px] ${COLS[columns]}`}
      style={{ maxWidth }}
    >
      {items.map((item) => (
        <motion.div key={item.title} variants={fadeUp}>
          <SpotlightCard
            spotlightColor={spotlightColor}
            className="flex h-full items-start gap-4 rounded-2xl border border-line bg-light p-[26px]"
          >
            <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-[9px] bg-green/[.14] text-green">
              {item.icon}
            </span>
            <div>
              <h3 className="mb-1 text-[1.08rem] font-bold">{item.title}</h3>
              <p className="text-[.95rem] text-ink-soft">{item.text}</p>
            </div>
          </SpotlightCard>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
