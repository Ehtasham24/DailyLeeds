import type { Transition, Variants } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** The site-wide reveal: rise + un-blur, so content "focuses" into
 *  place rather than just fading. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE_OUT },
  },
};

/** Per-word headline reveal — pair with a stagger() parent. */
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "0.45em", filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export function stagger(staggerChildren = 0.12, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren, delayChildren },
    },
  };
}

export const viewport = { once: true, margin: "-80px" };

/** Springy hover/tap feel shared by every interactive button/link,
 *  replacing anything gimmicky (like cursor-following buttons) with a
 *  consistent, physical-feeling press. */
export const buttonTap = { scale: 0.97 };
export const buttonHover = { scale: 1.03, y: -2 };
export const buttonSpring = { type: "spring", stiffness: 420, damping: 24 } as const;

type PageFrame = { opacity: number; y: number; filter: string };

/** Page-transition timing shared by the route-change wrapper. */
export const pageTransition: {
  initial: PageFrame;
  animate: PageFrame;
  exit: PageFrame;
  transition: Transition;
} = {
  initial: { opacity: 0, y: 16, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -10, filter: "blur(6px)" },
  transition: { duration: 0.4, ease: EASE_OUT },
};
