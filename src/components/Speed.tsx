"use client";

import Reveal from "@/components/Reveal";
import { fadeUp } from "@/lib/motion";

export default function Speed() {
  return (
    <section className="animate-shimmer bg-[linear-gradient(90deg,#2F7DE1,#1BB47A,#2F7DE1)] py-14 text-center text-white">
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal variants={fadeUp}>
          <h2 className="mx-auto max-w-[760px] text-[clamp(1.5rem,3vw,2.1rem)] font-extrabold">
            Call a lead within 5 minutes and win up to 10&times; more jobs.
          </h2>
          <p className="mt-3 text-[1.05rem] text-white/90">
            Speed wins the work — we help you respond the moment a lead comes
            in.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
