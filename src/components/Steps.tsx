"use client";

import { motion } from "framer-motion";
import RevealGroup from "@/components/RevealGroup";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import StepsConnector from "@/components/StepsConnector";
import { fadeUp } from "@/lib/motion";
import { STEPS } from "@/lib/content";

export default function Steps() {
  return (
    <section className="bg-light py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="How it works"
          title="Leads in three simple steps"
          description="No dashboards to learn, no marketing to figure out. We handle everything."
        />

        <RevealGroup className="relative grid grid-cols-1 gap-7 md:grid-cols-3">
          <StepsConnector />
          {STEPS.map((step) => (
            <motion.div key={step.num} variants={fadeUp}>
              <SpotlightCard
                spotlightColor="rgba(47,125,225,.08)"
                tilt={5}
                className="glow-card h-full rounded-3xl border border-line bg-white p-8 shadow-[0_1px_2px_rgba(18,53,127,.04)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-20px_rgba(18,53,127,.25)]"
              >
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue to-green font-display text-[.95rem] font-bold text-white shadow-[0_10px_24px_-8px_rgba(47,125,225,.7)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  0{step.num}
                </span>
                <h3 className="mb-2 text-[1.2rem] font-bold">{step.title}</h3>
                <p className="text-[.98rem] leading-relaxed text-ink-soft">{step.text}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
