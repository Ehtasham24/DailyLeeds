import { useId } from "react";

export default function LogoMark({ size = 22 }: { size?: number }) {
  const gradId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
      aria-hidden
    >
      <path
        d="M12 2C7.9 2 4.5 5.4 4.5 9.5c0 5.3 7.5 12.5 7.5 12.5s7.5-7.2 7.5-12.5C19.5 5.4 16.1 2 12 2z"
        fill={`url(#${gradId})`}
      />
      {/* A bolt, not a plain dot — the pin marks "local", the bolt says
          "fast": daily leads, delivered the moment they come in. */}
      <path d="M12.5 6 L10 10 L11.7 10 L11 13 L14 8.5 L12.3 8.5 Z" fill="#fff" />
      <defs>
        <linearGradient id={gradId} x1="4" y1="2" x2="20" y2="22">
          <stop stopColor="#2F7DE1" />
          <stop offset="1" stopColor="#1BB47A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
