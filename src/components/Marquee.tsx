import type { ReactNode } from "react";

/** An infinitely scrolling row. The list renders twice and slides by
 *  exactly half its width, so the loop is seamless; each item carries
 *  its own trailing padding (not flex `gap`) to keep both halves equal. */
export default function Marquee({
  items,
  className = "",
  duration = 40,
}: {
  items: ReactNode[];
  className?: string;
  duration?: number;
}) {
  return (
    <div
      className={`relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] ${className}`}
    >
      <div
        className="animate-marquee flex w-max"
        style={{ animationDuration: `${duration}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length || undefined}
            className="flex items-center gap-8 whitespace-nowrap pr-8"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-current opacity-40" />
          </span>
        ))}
      </div>
    </div>
  );
}
