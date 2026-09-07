"use client";

import { motion } from "framer-motion";
import RevealGroup from "@/components/RevealGroup";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp } from "@/lib/motion";

const CARDS = [
  {
    emoji: "🔧",
    title: "Plumbers",
    text: "Leaks, installs, emergencies — homeowners searching for a plumber today.",
  },
  {
    emoji: "⚡",
    title: "Electricians",
    text: "Repairs, panel upgrades, rewires — quote-ready local jobs delivered daily.",
  },
  {
    emoji: "🧹",
    title: "Cleaners",
    text: "Homes and offices near you looking to book a recurring or one-off clean.",
  },
];

export default function Who() {
  return (
    <section id="who" className="bg-white py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Built for the trades"
          title="Made for local service businesses"
          description="If you run jobs in your city, we fill your calendar with people nearby who need you right now."
        />

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-line p-8 text-center transition-shadow duration-300 hover:border-transparent hover:shadow-[0_18px_40px_rgba(18,53,127,.1)]"
            >
              <div className="text-[2.4rem]">{card.emoji}</div>
              <h3 className="mb-2 mt-3 text-[1.25rem] font-bold">
                {card.title}
              </h3>
              <p className="text-[.98rem] text-ink-soft">{card.text}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
