import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

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
    <Reveal className={`mx-auto mb-13 max-w-[640px] text-center ${className}`}>
      <p
        className={`text-[.72rem] font-bold uppercase tracking-[.16em] ${
          dark ? "text-[#7FB0F5]" : "text-blue"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2 text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold uppercase tracking-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[1.08rem] ${
            dark ? "text-muted-navy" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
