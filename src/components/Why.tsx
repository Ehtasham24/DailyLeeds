"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import RevealGroup from "@/components/RevealGroup";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp } from "@/lib/motion";

const ITEMS = [
  {
    title: "At least one lead a day",
    text: "A steady, predictable flow of local jobs — not feast or famine.",
  },
  {
    title: "Ads on your own page",
    text: "Genuine and trusted by your community — not some faceless agency page.",
  },
  {
    title: "You keep everything",
    text: "Your page, your pixel, your leads. If you ever leave, it all stays yours.",
  },
  {
    title: "Zero marketing work",
    text: "Done-for-you from setup to optimization. You just answer the phone.",
  },
];

export default function Why() {
  return (
    <section id="why" className="bg-white py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Why DailyLeads"
          title="Leads you own, results you can see"
        />

        <RevealGroup className="mx-auto grid max-w-[900px] grid-cols-1 gap-[22px] sm:grid-cols-2">
          {ITEMS.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex items-start gap-4 rounded-2xl border border-line bg-light p-[26px]"
            >
              <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-[9px] bg-green/[.14] text-green">
                <Check size={18} strokeWidth={2.5} />
              </span>
              <div>
                <h3 className="mb-1 text-[1.08rem] font-bold">
                  {item.title}
                </h3>
                <p className="text-[.95rem] text-ink-soft">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
