"use client";

import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import { useNavigationStatus } from "@/components/NavigationProvider";

export default function Logo() {
  const { beginNavigation } = useNavigationStatus();

  return (
    <Link
      href="/"
      onClick={() => beginNavigation("/")}
      className="flex items-center gap-2 font-display text-[1.25rem] font-extrabold tracking-[-0.03em] text-white"
    >
      <LogoMark size={18} />
      <span>
        <span className="text-[#7FB0F5]">Daily</span>
        <span className="text-green">Leads</span>
      </span>
    </Link>
  );
}
