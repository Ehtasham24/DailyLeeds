"use client";

import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import RevealGroup from "@/components/RevealGroup";
import { fadeUp } from "@/lib/motion";

export type Stat = { value: number; suffix?: string; label: string };

/** A row of count-up stat tiles — reused wherever a page needs a quick,
 *  scannable "by the numbers" moment. */
export default function StatsBand({
  stats,
  dark = true,
}: {
  stats: Stat[];
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-navy py-16 text-white" : "bg-light py-16"}>
      <RevealGroup
        className="mx-auto grid max-w-[900px] grid-cols-2 gap-x-6 gap-y-10 px-6 md:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div key={s.label} variants={fadeUp} className="text-center">
            <div className="text-[2.2rem] font-extrabold">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p
              className={`mt-1 text-[.85rem] ${
                dark ? "text-muted-navy" : "text-ink-soft"
              }`}
            >
              {s.label}
            </p>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}
