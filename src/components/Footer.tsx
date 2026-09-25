"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { useNavigationStatus } from "@/components/NavigationProvider";

const COMPANY = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/why-us", label: "Why us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

const CONTACT = [
  { href: "mailto:hello@getdailyleads.com", label: "hello@getdailyleads.com", icon: Mail },
  { href: "tel:+15550000000", label: "(555) 000-0000", icon: Phone },
];

export default function Footer() {
  const { beginNavigation } = useNavigationStatus();

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-muted-navy">
      <div className="mx-auto max-w-[1120px] px-6 pt-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[32ch] text-[.95rem] leading-relaxed">
              Local leads, delivered daily — for plumbers, electricians &amp;
              cleaners across the US.
            </p>
            <Link
              href="/contact"
              onClick={() => beginNavigation("/contact")}
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.05] px-4 py-2 text-[.85rem] font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get your free week
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div>
            <b className="mb-4 block font-display text-[.8rem] font-semibold uppercase tracking-[.14em] text-white">
              Company
            </b>
            <ul className="space-y-3">
              {COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => beginNavigation(link.href)}
                    className="text-[.93rem] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <b className="mb-4 block font-display text-[.8rem] font-semibold uppercase tracking-[.14em] text-white">
              Contact
            </b>
            <ul className="space-y-3">
              {CONTACT.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2.5 text-[.93rem] transition-colors hover:text-white"
                  >
                    <Icon size={15} className="text-[#8DBBFA]" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-2 border-t border-white/10 py-6 text-[.82rem]">
          <span>&copy; 2026 DailyLeads. All rights reserved.</span>
          <span>Built for local service businesses across the US.</span>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none -mb-[0.12em] select-none bg-gradient-to-b from-white/[.08] to-transparent bg-clip-text text-center font-display text-[clamp(4.5rem,18vw,15rem)] font-extrabold leading-[0.85] tracking-[-0.06em] text-transparent"
      >
        DailyLeads
      </div>
    </footer>
  );
}
