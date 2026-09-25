"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { useNavigationStatus } from "@/components/NavigationProvider";
import { fadeUp, stagger } from "@/lib/motion";

const LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/why-us", label: "Why Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  const pathname = usePathname();
  const { beginNavigation } = useNavigationStatus();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes (adjusted during
  // render, per React's guidance, rather than in an effect).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex max-w-[1120px] items-center justify-between rounded-2xl border border-white/10 bg-navy/85 px-4 backdrop-blur-xl transition-all duration-500 sm:px-5 ${
          scrolled
            ? "h-14 shadow-[0_18px_40px_-12px_rgba(6,20,60,.55)]"
            : "h-16 shadow-[0_10px_30px_-18px_rgba(6,20,60,.5)]"
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => beginNavigation(link.href)}
                className={`relative rounded-full px-4 py-2 text-[.9rem] font-medium transition-colors ${
                  active ? "text-white" : "text-muted-navy hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[.12] ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" size="sm" arrow>
            Get Started
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl text-white transition-colors hover:bg-white/10 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-[1120px] origin-top rounded-2xl border border-white/10 bg-navy/95 p-3 shadow-[0_24px_50px_-12px_rgba(6,20,60,.6)] backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger(0.05, 0.05)}
              className="flex flex-col"
            >
              {LINKS.map((link) => (
                <motion.div key={link.href} variants={fadeUp}>
                  <Link
                    href={link.href}
                    onClick={() => beginNavigation(link.href)}
                    className={`block rounded-xl px-4 py-3 font-medium transition-colors hover:bg-white/[.06] hover:text-white ${
                      pathname === link.href
                        ? "bg-white/[.08] text-white"
                        : "text-muted-navy"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={fadeUp} className="mt-2">
                <Button href="/contact" arrow className="w-full">
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
