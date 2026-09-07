"use client";

import { motion } from "framer-motion";
import RevealGroup from "@/components/RevealGroup";
import SectionHeading from "@/components/SectionHeading";
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
    <section className="bg-light py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading eyebrow="Results" title="What owners say" />

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-line bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(18,53,127,.08)]"
            >
              <div className="mb-3 tracking-[.1em] text-[#F5A623]">
                {"★".repeat(5)}
              </div>
              <p className="italic text-ink">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-[.7rem]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-r from-blue to-green font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <b className="block text-[.92rem]">{t.name}</b>
                  <span className="text-[.8rem] text-ink-soft">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealGroup>

        <p className="mt-7 text-center text-[.85rem] italic text-ink-soft">
          Sample testimonials — replace with your real client results.
        </p>
      </div>
    </section>
  );
}
