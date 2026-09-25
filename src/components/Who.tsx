"use client";

import { motion } from "framer-motion";
import { Sparkles, Wrench, Zap, type LucideIcon } from "lucide-react";
import RevealGroup from "@/components/RevealGroup";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { fadeUp } from "@/lib/motion";

const CARDS: {
  icon: LucideIcon;
  color: string;
  title: string;
  text: string;
  jobs: string[];
}[] = [
  {
    icon: Wrench,
    color: "#2F7DE1",
    title: "Plumbers",
    text: "Leaks, installs, emergencies — homeowners searching for a plumber today.",
    jobs: ["Leaks", "Water heaters", "Drains"],
  },
  {
    icon: Zap,
    color: "#F5A623",
    title: "Electricians",
    text: "Repairs, panel upgrades, rewires — quote-ready local jobs delivered daily.",
    jobs: ["Panels", "Rewires", "EV chargers"],
  },
  {
    icon: Sparkles,
    color: "#1BB47A",
    title: "Cleaners",
    text: "Homes and offices near you looking to book a recurring or one-off clean.",
    jobs: ["Deep cleans", "Move-outs", "Offices"],
  },
];

export default function Who() {
  return (
    <section id="who" className="bg-white py-24">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Built for the trades"
          title={
            <>
              Made for <span className="text-gradient">local service</span> businesses
            </>
          }
          description="If you run jobs in your city, we fill your calendar with people nearby who need you right now."
        />

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} variants={fadeUp}>
                <SpotlightCard
                  spotlightColor="rgba(47,125,225,.08)"
                  tilt={5}
                  className="glow-card h-full rounded-3xl border border-line bg-white p-8 shadow-[0_1px_2px_rgba(18,53,127,.04)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-20px_rgba(18,53,127,.25)]"
                >
                  <span
                    className="grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                    style={{ background: `${card.color}14`, color: card.color }}
                  >
                    <Icon size={26} strokeWidth={2} />
                  </span>
                  <h3 className="mb-2 mt-6 text-[1.3rem] font-bold">{card.title}</h3>
                  <p className="text-[.98rem] leading-relaxed text-ink-soft">{card.text}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {card.jobs.map((job) => (
                      <li
                        key={job}
                        className="rounded-full border border-line bg-light px-3 py-1 text-[.78rem] font-medium text-ink-soft"
                      >
                        {job}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
