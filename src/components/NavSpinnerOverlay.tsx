"use client";

import { AnimatePresence, m } from "framer-motion";
import Spinner from "@/components/Spinner";
import { useNavigationStatus } from "@/components/NavigationProvider";

export function LoadingLabel() {
  return (
    <span className="font-display text-[.8rem] font-semibold uppercase tracking-[.2em] text-ink-soft/80">
      Loading
    </span>
  );
}

export default function NavSpinnerOverlay() {
  const { isNavigating } = useNavigationStatus();

  return (
    <AnimatePresence>
      {isNavigating && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-light/60 backdrop-blur-md"
        >
          <m.div
            initial={{ scale: 0.9, opacity: 0, filter: "blur(6px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-5"
          >
            <Spinner size={88} />
            <LoadingLabel />
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
