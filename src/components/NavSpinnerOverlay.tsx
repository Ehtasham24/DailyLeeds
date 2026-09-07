"use client";

import { AnimatePresence, motion } from "framer-motion";
import Spinner from "@/components/Spinner";
import { useNavigationStatus } from "@/components/NavigationProvider";

export default function NavSpinnerOverlay() {
  const { isNavigating } = useNavigationStatus();

  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-light/70 backdrop-blur-sm"
        >
          <Spinner size={64} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
