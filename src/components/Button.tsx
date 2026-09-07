"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { buttonHover, buttonSpring, buttonTap } from "@/lib/motion";

const MotionLink = motion(Link);
const MotionButton = motion.button;

const VARIANTS = {
  primary:
    "bg-green text-white shadow-[0_8px_20px_rgba(27,180,122,.35)] transition-colors hover:bg-[#159a67]",
  ghost:
    "border-[1.5px] border-white/45 text-white transition-colors hover:border-white hover:bg-white/[.08]",
} as const;

const SIZES = {
  md: "rounded-xl px-6 py-[.85rem] font-bold",
  sm: "rounded-xl px-[1.15rem] py-[.6rem] text-[.9rem] font-bold",
} as const;

/** Every button/link across the site shares this one springy press —
 *  no cursor-following gimmicks, just a consistent, physical feel. */
export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const classes = `inline-block text-center ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <MotionLink
        href={href}
        onClick={onClick}
        whileHover={buttonHover}
        whileTap={buttonTap}
        transition={buttonSpring}
        className={classes}
      >
        {children}
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
      {children}
    </MotionButton>
  );
}
