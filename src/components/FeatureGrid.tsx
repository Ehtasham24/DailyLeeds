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
            tilt={5}
            className="glow-card h-full rounded-3xl border border-line bg-white p-7 shadow-[0_1px_2px_rgba(18,53,127,.04)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-20px_rgba(18,53,127,.25)]"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue/15 to-green/15 text-green transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              <div>
                <h3 className="mb-1.5 text-[1.08rem] font-bold">{item.title}</h3>
                <p className="text-[.95rem] leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
