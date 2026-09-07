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
    <section className="bg-light py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From setup to your first lead"
        />

        <RevealGroup className="mx-auto grid max-w-[900px] grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="text-center"
            >
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-r from-blue to-green font-bold text-white">
                {step.num}
              </div>
              <h3 className="font-bold">{step.title}</h3>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Button href="/how-it-works" variant="outline">
            See the full walkthrough
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
