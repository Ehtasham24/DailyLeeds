"use client";

import { type MouseEvent, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  BadgeCheck,
  Check,
  Droplets,
  Plug,
  Sparkles,
  TrendingUp,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/Button";
import LogoMark from "@/components/LogoMark";
import Marquee from "@/components/Marquee";
import { Eyebrow } from "@/components/SectionHeading";
import { fadeUp, stagger, wordReveal } from "@/lib/motion";

type Lead = {
  icon: LucideIcon;
  color: string;
  job: string;
  place: string;
  note: string;
};

// Illustrative leads for the hero mockup — it cycles to show the kind
// of requests that land in a customer's inbox.
const FEED: Lead[] = [
  { icon: Wrench, color: "#2F7DE1", job: "Burst pipe", place: "Dallas, TX", note: "Needs a plumber today" },
  { icon: Zap, color: "#F5A623", job: "Panel upgrade", place: "Austin, TX", note: "Quote requested" },
  { icon: Sparkles, color: "#1BB47A", job: "Deep clean", place: "Plano, TX", note: "Booking this week" },
  { icon: Droplets, color: "#2F7DE1", job: "Water heater install", place: "Houston, TX", note: "Wants two quotes" },
  { icon: Plug, color: "#F5A623", job: "EV charger install", place: "Frisco, TX", note: "Flexible on timing" },
  { icon: Sparkles, color: "#1BB47A", job: "Move-out clean", place: "Irving, TX", note: "Needs it by Friday" },
];

const AGES = ["Just now", "4 min ago", "11 min ago"];
const HEADLINE = ["Get", "every", "local", "lead", "in", "your", "area"];
const CHIPS = ["Ads on your own page", "1+ lead every day", "Cancel anytime"];
const JOBS = [
  "Burst pipes",
  "Panel upgrades",
  "Deep cleans",
  "Water heaters",
  "Rewiring",
  "Move-out cleans",
  "Drain unclogging",
  "EV chargers",
  "Office cleaning",
  "Leak repairs",
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setTick((t) => t + 1), 2800);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const visible = AGES.map((age, i) => {
    const n = tick - i;
    return {
      ...FEED[((n % FEED.length) + FEED.length) % FEED.length],
      age,
      key: n,
    };
  });

  // Normalized -1..1 pointer position, smoothed, drives a subtle
  // parallax across the hero's glow and the inbox card.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 50, damping: 20, mass: 0.5 });
  const py = useSpring(my, { stiffness: 50, damping: 20, mass: 0.5 });
  const glow = {
    x: useTransform(px, [-1, 1], [-30, 30]),
    y: useTransform(py, [-1, 1], [-30, 30]),
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
      data-hero
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate overflow-hidden bg-navy pt-32 text-white md:pt-40"
    >
      <div
        aria-hidden
        className="bg-dots-dark pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_100%)]"
      />
      <motion.div
        aria-hidden
        style={glow}
        className="pointer-events-none absolute -right-40 -top-40 -z-10"
      >
        <div
          className="animate-blob h-[620px] w-[620px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(47,125,225,.4), transparent 65%)" }}
        />
      </motion.div>
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -bottom-48 -left-48 -z-10 h-[520px] w-[520px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(27,180,122,.28), transparent 65%)",
          animationDelay: "4s",
        }}
      />

      <div className="mx-auto grid max-w-[1120px] items-center gap-16 px-6 md:grid-cols-[1.1fr_.9fr]">
        <motion.div initial="hidden" animate="show" variants={stagger(0.12, 0.05)}>
          <motion.div variants={fadeUp}>
            <Eyebrow dark>Local lead generation · USA</Eyebrow>
          </motion.div>

          <motion.h1
            variants={stagger(0.06, 0.15)}
            className="mt-6 text-[clamp(2.6rem,6vw,4.4rem)] font-extrabold leading-[1.02] tracking-[-0.04em]"
          >
            {HEADLINE.map((word) => (
              <motion.span
                key={word}
                variants={wordReveal}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span variants={wordReveal} className="inline-block">
              —&nbsp;<span className="grad-text-shimmer">first.</span>
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[40ch] text-[1.15rem] leading-relaxed text-muted-navy"
          >
            Done-for-you lead generation for plumbers, electricians &amp;
            cleaners. At least one qualified customer lead a day — you do the
            jobs, we keep your phone ringing.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact" arrow>
              Get my free week
            </Button>
            <Button href="/how-it-works" variant="ghost">
              See how it works
            </Button>
          </motion.div>

          <motion.ul variants={fadeUp} className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {CHIPS.map((chip) => (
              <li
                key={chip}
                className="flex items-center gap-2 text-[.88rem] font-medium text-[#DCE6FB]"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-green/20 text-green">
                  <Check size={12} strokeWidth={3} />
                </span>
                {chip}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div
            style={panel}
            className="relative rounded-3xl border border-white/10 bg-white/[.06] p-5 shadow-[0_40px_80px_-24px_rgba(4,14,40,.8)] backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center justify-between px-1">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10">
                  <LogoMark size={11} />
                </span>
                <span className="font-display text-[.95rem] font-bold">Lead inbox</span>
              </div>
              <span className="flex items-center gap-2 rounded-full bg-green/15 px-2.5 py-1 text-[.72rem] font-semibold text-green">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
                </span>
                Live
              </span>
            </div>

            <div className="flex h-[252px] flex-col gap-3 overflow-hidden">
              <AnimatePresence initial={false} mode="popLayout">
                {visible.map((lead, i) => {
                  const Icon = lead.icon;
                  return (
                    <motion.div
                      key={lead.key}
                      layout
                      initial={{ opacity: 0, y: -24, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 24, scale: 0.96 }}
                      transition={{ type: "spring", stiffness: 260, damping: 26 }}
                      className="flex items-center gap-3 rounded-2xl bg-white p-3 pr-4 text-ink shadow-[0_8px_20px_-8px_rgba(6,20,60,.35)]"
                    >
                      <span
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
                        style={{ background: `${lead.color}1A`, color: lead.color }}
                      >
                        <Icon size={19} strokeWidth={2.2} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[.92rem] font-semibold">
                          {lead.job} · {lead.place}
                        </p>
                        <p className="truncate text-[.78rem] text-ink-soft">{lead.note}</p>
                      </div>
                      {i === 0 ? (
                        <span className="shrink-0 rounded-full bg-green/10 px-2 py-0.5 text-[.68rem] font-bold uppercase tracking-wide text-green">
                          New
                        </span>
                      ) : (
                        <span className="shrink-0 text-[.72rem] text-ink-soft">{lead.age}</span>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="animate-float absolute -top-6 left-10 hidden items-center gap-2 rounded-2xl border border-white/15 bg-navy/70 px-3.5 py-2.5 text-[.8rem] font-medium shadow-xl backdrop-blur-xl sm:flex">
            <BadgeCheck size={16} className="text-green" />
            Runs on your own page
          </div>
          <div
            className="animate-float absolute -bottom-5 -right-3 hidden items-center gap-2 rounded-2xl border border-white/15 bg-navy/70 px-3.5 py-2.5 text-[.8rem] font-medium shadow-xl backdrop-blur-xl sm:flex"
            style={{ animationDelay: "1.5s" }}
          >
            <TrendingUp size={16} className="text-[#8DBBFA]" />
            1+ qualified lead daily
          </div>
        </motion.div>
      </div>

      <div className="mt-20 border-t border-white/10 py-6 text-[.9rem] font-medium text-muted-navy/80">
        <Marquee items={JOBS} />
      </div>
    </section>
  );
}
