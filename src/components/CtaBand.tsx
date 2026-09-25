"use client";

import Button from "@/components/Button";
import LogoMark from "@/components/LogoMark";
import Reveal from "@/components/Reveal";

export default function CtaBand({
  title = "Ready to get booked out?",
  subtitle = "Get your free first week of local leads — no commitment.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-light px-6 py-20">
      <Reveal className="relative isolate mx-auto max-w-[1120px] overflow-hidden rounded-[32px] bg-navy px-8 py-16 text-center text-white md:py-20">
        <div
          aria-hidden
          className="bg-dots-dark pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 -z-10 h-[340px] w-[340px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(47,125,225,.45), transparent 65%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-28 -right-20 -z-10 h-[340px] w-[340px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(27,180,122,.35), transparent 65%)" }}
        />

        <span className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[.06] backdrop-blur">
          <LogoMark size={16} />
        </span>
        <h2 className="mx-auto max-w-[22ch] text-balance text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold leading-[1.06] tracking-[-0.035em]">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] text-[1.05rem] text-muted-navy">{subtitle}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/contact" arrow>
            Get my free week
          </Button>
          <Button href="/pricing" variant="ghost">
            See pricing
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
