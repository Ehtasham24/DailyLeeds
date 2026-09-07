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
                spotlightColor="rgba(47,125,225,.1)"
                className="h-full rounded-2xl border border-line bg-white p-9 shadow-sm transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(18,53,127,.08)]"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-r from-blue to-green text-[1.15rem] font-extrabold text-white"
                >
                  {step.num}
                </motion.div>
                <h3 className="mb-2 text-[1.15rem] font-bold">{step.title}</h3>
                <p className="text-[.98rem] text-ink-soft">{step.text}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
