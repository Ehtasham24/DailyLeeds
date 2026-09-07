"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp } from "@/lib/motion";

const FAQS = [
  {
    q: "How fast will I start getting leads?",
    a: "Most campaigns start delivering leads within the first few days once the ads are live and warmed up. The first week is setup and testing, then it gets more consistent from there.",
  },
  {
    q: "What if I don't get results?",
    a: "That's exactly why we offer a risk-free first week — you see real leads before you commit to a monthly plan. If it's not working, you don't continue.",
  },
  {
    q: "Do I need my own Facebook page?",
    a: "Yes, and that's a good thing. We run ads on your own business page so they look genuine and local — and you keep full ownership of the page and every lead.",
  },
  {
    q: "Who pays for the ad budget?",
    a: "You do, straight from your own ad account, so you're always in control of your spend. Our fee covers building, running, and optimizing the campaigns.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long lock-in contracts — you stay because it's working, not because you're stuck.",
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden rounded-xl border border-line bg-light"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[1.02rem] font-bold"
      >
        {q}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-blue"
        >
          <Plus size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[.98rem] text-ink-soft">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading eyebrow="Questions" title="Good to know" />

        <Reveal
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mx-auto flex max-w-[760px] flex-col gap-3"
        >
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
