import Link from "next/link";
import LogoMark from "@/components/LogoMark";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-[1.3rem] font-extrabold tracking-tight text-white"
    >
      <LogoMark />
      <span>
        <span className="text-[#7FB0F5]">Daily</span>
        <span className="text-green">Leads</span>
      </span>
    </Link>
  );
}
