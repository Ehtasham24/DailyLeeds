"use client";

import { motion } from "framer-motion";
import RevealGroup from "@/components/RevealGroup";
import { fadeUp } from "@/lib/motion";

export type TimelineStep = { label: string; title: string; text: string };

/** A vertical, connected timeline — used for both the onboarding
 *  process (How It Works) and "what happens after you submit"
 *  (Contact), each with its own steps. */
export default function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <RevealGroup className="mx-auto flex max-w-[640px] flex-col">
      {steps.map((step, i) => (
        <motion.div key={step.label} variants={fadeUp} className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-r from-blue to-green text-sm font-bold text-white">
              {i + 1}
            </span>
            {i < steps.length - 1 && (
              <span className="my-1 w-px flex-1 bg-line" />
            )}
          </div>
          <div className={i < steps.length - 1 ? "pb-10" : ""}>
            <p className="text-[.72rem] font-bold uppercase tracking-[.1em] text-blue">
              {step.label}
            </p>
            <h3 className="mt-1 text-[1.05rem] font-bold">{step.title}</h3>
            <p className="mt-1 text-[.95rem] text-ink-soft">{step.text}</p>
          </div>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
