"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { scrollToId } from "@/lib/scroll";

const FEATURES = [
  "Targeted Facebook & Instagram ads",
  "At least one qualified lead per day",
  "Runs on your own business page",
  "Full ad management & optimization",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-navy py-20 text-white">
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(47,125,225,.25), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1120px] px-6">
        <SectionHeading
          dark
          eyebrow="Simple pricing"
          title="One flat plan. Done for you."
        />

        <Reveal
          delay={0.1}
          className="mx-auto max-w-[560px] rounded-3xl border border-white/10 bg-gradient-to-br from-[#193f92] to-[#102c6d] p-10 shadow-[0_30px_70px_rgba(6,20,60,.5)]"
        >
          <h3 className="text-[1.05rem] uppercase tracking-[.1em] text-muted-navy">
            Monthly Plan
          </h3>
          <div className="mb-6 mt-2 text-[2.2rem] font-extrabold">
            $<span className="opacity-50">___</span>
            <span className="text-base font-semibold opacity-70">/month</span>
          </div>

          <ul className="mb-7 flex flex-col gap-[.85rem]">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-[.7rem] text-[#E3ECFC]">
                <Check size={20} className="shrink-0 text-green" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mb-6 rounded-xl border border-dashed border-green/60 bg-green/[.15] px-4 py-3.5 text-[.95rem] text-[#D9F5E9]">
            🎁 <strong>Risk-free first week.</strong> You only pay for ad
            spend. Love the results? Then we continue.
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToId("contact")}
            className="w-full rounded-xl bg-green px-6 py-[.85rem] text-center font-bold text-white shadow-[0_8px_20px_rgba(27,180,122,.35)] transition-colors hover:bg-[#159a67]"
          >
            Start my free week
          </motion.button>
          <p className="mt-4 text-center text-[.82rem] text-muted-navy">
            Ad budget billed separately, straight from your own account.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
