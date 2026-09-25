"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { useNavigationStatus } from "@/components/NavigationProvider";
import { buttonHover, buttonSpring, buttonTap } from "@/lib/motion";

const MotionLink = motion.create(Link);
const MotionButton = motion.button;

const VARIANTS = {
  primary:
    "btn-shine bg-green text-white shadow-[0_10px_30px_-10px_rgba(27,180,122,.9)] hover:bg-[#17a36e]",
  ghost:
    "border border-white/20 bg-white/[.06] text-white backdrop-blur hover:border-white/40 hover:bg-white/[.12]",
  outline:
    "border border-navy/15 bg-white text-navy shadow-sm hover:border-navy/30",
} as const;

const SIZES = {
  md: "px-6 py-3 text-[.95rem]",
  sm: "px-4 py-2 text-[.85rem]",
} as const;

/** Every button/link across the site shares this one springy press, a
 *  light sweep on hover, and (optionally) an arrow that nudges forward. */
export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  disabled = false,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  arrow?: boolean;
  className?: string;
  disabled?: boolean;
}) {
  const classes = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-colors ${SIZES[size]} ${VARIANTS[variant]} ${
    disabled ? "pointer-events-none opacity-60" : ""
  } ${className}`;
  const { beginNavigation } = useNavigationStatus();

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          size={size === "sm" ? 15 : 17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <MotionLink
        href={href}
        onClick={() => {
          beginNavigation(href);
          onClick?.();
        }}
        whileHover={buttonHover}
        whileTap={buttonTap}
        transition={buttonSpring}
        className={classes}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      type={type}
      onClick={onClick}
      whileHover={buttonHover}
      whileTap={buttonTap}
      transition={buttonSpring}
      className={classes}
    >
      {content}
    </MotionButton>
  );
}
