import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[.72rem] font-semibold uppercase tracking-[.14em] ${
        dark
          ? "border-white/15 bg-white/[.06] text-[#9CC2F7]"
          : "border-blue/15 bg-blue/[.06] text-blue"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue to-green" />
      {children}
    </span>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={`mx-auto mb-14 max-w-[680px] text-center ${className}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 text-balance text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.08] tracking-[-0.03em] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-[56ch] text-[1.08rem] leading-relaxed ${
            dark ? "text-muted-navy" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
