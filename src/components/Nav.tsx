"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { scrollToId } from "@/lib/scroll";

const LINKS = [
  { href: "#how", label: "How It Works" },
  { href: "#why", label: "Why Us" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-navy/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_30px_rgba(6,20,60,0.25)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1120px] items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[.95rem] font-semibold text-muted-navy transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-blue to-green transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          onClick={() => scrollToId("contact")}
          className="hidden rounded-xl bg-green px-[1.15rem] py-[.6rem] text-[.9rem] font-bold text-white shadow-[0_8px_20px_rgba(27,180,122,.35)] transition-transform hover:-translate-y-0.5 hover:bg-[#159a67] md:inline-flex"
        >
          Get Started
        </button>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 font-semibold text-muted-navy hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  scrollToId("contact");
                }}
                className="mt-2 rounded-xl bg-green px-4 py-3 text-center font-bold text-white"
              >
                Get Started
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
