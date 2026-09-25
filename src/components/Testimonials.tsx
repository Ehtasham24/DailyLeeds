"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import RevealGroup from "@/components/RevealGroup";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { fadeUp } from "@/lib/motion";

const TESTIMONIALS = [
  {
    initials: "MR",
    name: "Mike R.",
    role: "Plumber · Dallas, TX",
    quote:
      "Booked three jobs in my first week. The leads are actually local and ready to hire.",
  },
  {
    initials: "JL",
    name: "Jason L.",
    role: "Electrician · Austin, TX",
    quote:
      "My phone finally rings on the slow weeks. Wish I'd started this a year ago.",
  },
  {
    initials: "SP",
    name: "Sara P.",
    role: "Cleaning co. · Plano, TX",
    quote:
      "Filled half my calendar with recurring cleans. Simple and it just works.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-light py-24">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Results"
          title={
            <>
              What <span className="text-gradient">owners</span> say
            </>
          }
        />

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={fadeUp}>
              <SpotlightCard
                spotlightColor="rgba(245,166,35,.08)"
                tilt={5}
                className="glow-card flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-[0_1px_2px_rgba(18,53,127,.04)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-20px_rgba(18,53,127,.25)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5 text-[#F5A623]">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <Quote size={28} className="text-blue/15" />
                </div>
                <p className="mt-5 text-[1.02rem] leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue to-green font-display text-[.85rem] font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <b className="block text-[.92rem]">{t.name}</b>
                    <span className="text-[.8rem] text-ink-soft">{t.role}</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </RevealGroup>

        <p className="mt-8 text-center text-[.82rem] text-ink-soft/80">
          Sample testimonials — replace with your real client results.
        </p>
      </div>
    </section>
  );
}
