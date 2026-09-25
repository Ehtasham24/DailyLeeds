"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import RevealGroup from "@/components/RevealGroup";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp } from "@/lib/motion";
import { STEPS } from "@/lib/content";

/** A compact preview of the full How It Works page, so Home doesn't
 *  have to duplicate the whole section to still explain the basics. */
export default function HowItWorksTeaser() {
  return (
    <section className="relative isolate overflow-hidden bg-light py-24">
      <div
        aria-hidden
        className="bg-dots pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_45%,#000,transparent)]"
      />
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From setup to your <span className="text-gradient">first lead</span>
            </>
          }
          description="Three steps. No dashboards to learn, no marketing homework."
        />

        <RevealGroup className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[17%] right-[17%] top-[46px] hidden h-px bg-gradient-to-r from-blue/0 via-blue/40 to-green/0 md:block"
          />
          {STEPS.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="glow-card relative rounded-3xl border border-line bg-white p-7 text-center shadow-[0_1px_2px_rgba(18,53,127,.04)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-20px_rgba(18,53,127,.25)]"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue to-green font-display text-[.95rem] font-bold text-white shadow-[0_10px_24px_-8px_rgba(47,125,225,.7)]">
                0{step.num}
              </span>
              <h3 className="mt-5 text-[1.15rem] font-bold">{step.title}</h3>
              <p className="mt-2 text-[.95rem] leading-relaxed text-ink-soft">{step.text}</p>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 text-center">
          <Button href="/how-it-works" variant="outline" arrow>
            See the full walkthrough
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
