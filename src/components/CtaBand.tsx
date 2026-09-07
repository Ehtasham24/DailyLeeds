"use client";

import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function CtaBand({
  title = "Ready to get booked out?",
  subtitle = "Get your free first week of local leads — no commitment.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-navy py-16 text-center text-white">
      <Reveal className="mx-auto max-w-[560px] px-6">
        <h2 className="text-[clamp(1.4rem,3vw,1.9rem)] font-extrabold">
          {title}
        </h2>
        <p className="mt-2 text-muted-navy">{subtitle}</p>
        <Button href="/contact" className="mt-6">
          Get My Free Week
        </Button>
      </Reveal>
    </section>
  );
}
