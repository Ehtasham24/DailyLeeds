"use client";

import { type MouseEvent, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/components/Button";
import { fadeUp, slideInRight, stagger } from "@/lib/motion";

const LEADS = [
  {
    icon: "🔧",
    color: "#2F7DE1",
    title: "Burst pipe — Dallas, TX",
    sub: "Homeowner · needs a plumber today",
  },
  {
    icon: "⚡",
    color: "#F5A623",
    title: "Panel upgrade — Austin, TX",
    sub: "Homeowner · quote requested",
  },
  {
    icon: "🧹",
    color: "#1BB47A",
    title: "Deep clean — Plano, TX",
    sub: "Homeowner · this week",
  },
];

const CHIPS = ["Ads on your own page", "1+ lead every day", "Cancel anytime"];

const headingReveal: Variants = {
  hidden: { opacity: 0, rotateX: -55, y: 36 },
  show: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Normalized -1..1 pointer position, smoothed, drives a subtle
  // multi-layer parallax across the hero's decor and visual panel.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 50, damping: 20, mass: 0.5 });
  const py = useSpring(my, { stiffness: 50, damping: 20, mass: 0.5 });

  const blob1 = {
    x: useTransform(px, [-1, 1], [-24, 24]),
    y: useTransform(py, [-1, 1], [-24, 24]),
  };
  const blob2 = {
    x: useTransform(px, [-1, 1], [18, -18]),
    y: useTransform(py, [-1, 1], [18, -18]),
  };
  const panel = {
    x: useTransform(px, [-1, 1], [-10, 10]),
    y: useTransform(py, [-1, 1], [-10, 10]),
  };

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-navy pb-24 pt-20 text-white md:pb-28 md:pt-24"
    >
      <motion.div
        aria-hidden
        style={blob1}
        className="pointer-events-none absolute -right-32 -top-32"
      >
        <div
          className="animate-blob h-[520px] w-[520px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(47,125,225,.35), transparent 68%)",
          }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={blob2}
        className="pointer-events-none absolute -left-40 bottom-0"
      >
        <div
          className="animate-blob h-[420px] w-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(27,180,122,.25), transparent 68%)",
            animationDelay: "3s",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1.15fr_.85fr]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.14, 0.1)}
        >
          <motion.p
            variants={fadeUp}
            className="text-[.72rem] font-bold uppercase tracking-[.16em] text-[#7FB0F5]"
          >
            Local lead generation · USA
          </motion.p>
          <motion.h1
            variants={headingReveal}
            style={{ transformPerspective: 700 }}
            className="mt-3 text-[clamp(2.3rem,5vw,3.7rem)] font-extrabold uppercase leading-[1.1] tracking-tight"
          >
            Get every local lead in your area —{" "}
            <span className="grad-text-shimmer">first</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[34ch] text-[1.18rem] text-muted-navy"
          >
            Done-for-you lead generation for plumbers, electricians &amp;
            cleaners. At least one qualified customer lead a day — you do the
            jobs, we keep your phone ringing.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact">Get My Free Week</Button>
            <Button href="/how-it-works" variant="ghost">
              See how it works
            </Button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-6">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="flex items-center gap-2 text-[.9rem] font-semibold text-[#DCE6FB]"
              >
                <Check size={16} className="shrink-0 text-green" />
                {chip}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" animate="show" variants={slideInRight}>
          <motion.div
            style={panel}
            className="rounded-[22px] border border-white/10 bg-gradient-to-br from-[#173d90] to-[#0f2c6b] p-6 shadow-[0_30px_60px_rgba(6,20,60,.45)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <b className="text-[.95rem]">Today&apos;s leads</b>
              <span className="flex items-center gap-[.4rem] text-[.72rem] font-bold text-green">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
                </span>
                Live
              </span>
            </div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger(0.15, 0.6)}
              className="flex flex-col gap-3"
            >
              {LEADS.map((lead, i) => (
                <motion.div
                  key={lead.title}
                  variants={fadeUp}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="animate-float flex items-center gap-[.85rem] rounded-xl bg-white p-[.85rem_1rem] text-ink shadow-[0_6px_14px_rgba(6,20,60,.18)]"
                  style={{ animationDelay: `${i * 0.6}s` }}
                >
                  <div
                    className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[10px] text-[1.1rem] text-white"
                    style={{ background: lead.color }}
                  >
                    {lead.icon}
                  </div>
                  <div className="min-w-0">
                    <b className="block text-[.95rem]">{lead.title}</b>
                    <span className="text-[.8rem] text-ink-soft">
                      {lead.sub}
                    </span>
                  </div>
                  <span className="ml-auto shrink-0 rounded-full bg-green/10 px-[.55rem] py-[.25rem] text-[.7rem] font-bold uppercase tracking-[.04em] text-green">
                    New
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
