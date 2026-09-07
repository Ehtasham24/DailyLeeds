export default function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2 text-[1.3rem] font-extrabold tracking-tight text-white">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path
          d="M12 2C7.9 2 4.5 5.4 4.5 9.5c0 5.3 7.5 12.5 7.5 12.5s7.5-7.2 7.5-12.5C19.5 5.4 16.1 2 12 2z"
          fill="url(#logo-grad)"
        />
        <circle cx="12" cy="9.5" r="3" fill="#fff" />
        <defs>
          <linearGradient id="logo-grad" x1="4" y1="2" x2="20" y2="22">
            <stop stopColor="#2F7DE1" />
            <stop offset="1" stopColor="#1BB47A" />
          </linearGradient>
        </defs>
      </svg>
      <span>
        <span className="text-[#7FB0F5]">Daily</span>
        <span className="text-green">Leads</span>
      </span>
    </a>
  );
}
