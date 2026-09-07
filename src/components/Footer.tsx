"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { useNavigationStatus } from "@/components/NavigationProvider";

const FOOT_LINKS = [
  {
    heading: "Company",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/why-us", label: "Why us" },
      { href: "/pricing", label: "Pricing" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { href: "/contact", label: "Get started" },
      { href: "mailto:hello@getdailyleads.com", label: "hello@getdailyleads.com" },
      { href: "tel:+15550000000", label: "(555) 000-0000" },
    ],
  },
];

export default function Footer() {
  const { beginNavigation } = useNavigationStatus();

  return (
    <footer className="bg-navy-deep pb-8 pt-13 text-muted-navy">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <Logo />
            <p className="mt-3 max-w-[26ch] text-[.92rem]">
              Local leads, delivered daily — for plumbers, electricians &amp;
              cleaners.
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            {FOOT_LINKS.map((col) => (
              <div key={col.heading}>
                <b className="mb-3 block text-[.85rem] uppercase tracking-[.08em] text-white">
                  {col.heading}
                </b>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() =>
                      link.href.startsWith("/") && beginNavigation(link.href)
                    }
                    className="mb-2 block text-[.92rem] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9 flex flex-wrap justify-between gap-2 border-t border-white/10 pt-5 text-[.82rem]">
          <span>&copy; 2026 DailyLeads. All rights reserved.</span>
          <span>Built for local service businesses across the US.</span>
        </div>
      </div>
    </footer>
  );
}
