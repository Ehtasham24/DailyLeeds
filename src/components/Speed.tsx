"use client";

import { Clock } from "lucide-react";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionHeading";

export default function Speed() {
  return (
    <section className="bg-white px-6 py-20">
      <Reveal className="relative isolate mx-auto max-w-[1120px] overflow-hidden rounded-[32px] bg-navy px-8 py-14 text-white md:px-16 md:py-16">
        <div
          aria-hidden
          className="bg-dots-dark pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(90deg,#000,transparent_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[360px] w-[360px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(27,180,122,.35), transparent 65%)" }}
        />

        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <div className="text-center md:text-left">
            <div className="text-gradient-light font-display text-[clamp(5rem,12vw,8.5rem)] font-extrabold leading-none tracking-[-0.05em]">
              <Counter to={10} suffix="×" />
            </div>
            <p className="mt-2 text-[.9rem] font-medium uppercase tracking-[.14em] text-muted-navy">
              more jobs won
            </p>
          </div>

          <div>
            <Eyebrow dark>Speed wins the work</Eyebrow>
            <h2 className="mt-4 text-balance text-[clamp(1.7rem,3.2vw,2.4rem)] font-extrabold leading-[1.12] tracking-[-0.03em]">
              Call a lead within 5 minutes and win up to 10× more jobs.
            </h2>
            <p className="mt-4 flex items-start gap-3 text-[1.02rem] leading-relaxed text-muted-navy">
              <Clock size={20} className="mt-0.5 shrink-0 text-green" />
              Leads go cold fast — we help you respond the moment one comes in.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
