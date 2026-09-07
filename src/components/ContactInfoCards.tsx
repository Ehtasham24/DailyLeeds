"use client";

import { motion } from "framer-motion";
import { Clock, Mail, Phone } from "lucide-react";
import RevealGroup from "@/components/RevealGroup";
import SpotlightCard from "@/components/SpotlightCard";
import { fadeUp } from "@/lib/motion";

const CARDS = [
  {
    icon: <Phone size={20} />,
    title: "Call us",
    text: "(555) 000-0000",
    sub: "Mon–Fri, 9am–6pm",
  },
  {
    icon: <Mail size={20} />,
    title: "Email us",
    text: "hello@getdailyleads.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: <Clock size={20} />,
    title: "Response time",
    text: "Under 24 hours",
    sub: "From submission to first contact",
  },
];

export default function ContactInfoCards() {
  return (
    <RevealGroup className="mx-auto mb-14 grid max-w-[900px] grid-cols-1 gap-5 sm:grid-cols-3">
      {CARDS.map((c) => (
        <motion.div key={c.title} variants={fadeUp}>
          <SpotlightCard
            spotlightColor="rgba(47,125,225,.1)"
            className="h-full rounded-2xl border border-line bg-white p-6 text-center shadow-sm"
          >
            <span className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-xl bg-blue/10 text-blue">
              {c.icon}
            </span>
            <h3 className="font-bold">{c.title}</h3>
            <p className="mt-1 text-[.95rem]">{c.text}</p>
            <p className="mt-1 text-[.8rem] text-ink-soft">{c.sub}</p>
          </SpotlightCard>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
