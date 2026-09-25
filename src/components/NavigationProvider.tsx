"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type NavigationContextValue = {
  isNavigating: boolean;
  /** Call on click with the link's destination — shows the spinner
   *  only if it actually leads to a different page. */
  beginNavigation: (href: string) => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

// Long enough for the loader's fill animation to visibly read, short
// enough that navigation still feels quick.
const MIN_VISIBLE_MS = 800;
const SAFETY_TIMEOUT_MS = 4000;

/** Next's own loading.tsx only fires for real Suspense boundaries,
 *  which a fully static, prefetched site rarely hits — so navigation
 *  can feel instant with no feedback. This shows a brief, branded
 *  spinner on every route change instead, timed to the pathname
 *  actually changing (with a safety timeout in case it doesn't). */
export function NavigationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const startedAt = useRef<number | null>(null);
  const safetyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function beginNavigation(href: string) {
    if (href === pathname) return;
    startedAt.current = Date.now();
    setIsNavigating(true);
    if (safetyTimer.current) clearTimeout(safetyTimer.current);
    safetyTimer.current = setTimeout(() => setIsNavigating(false), SAFETY_TIMEOUT_MS);
  }

  useEffect(() => {
    if (!isNavigating) return;
    const elapsed = startedAt.current ? Date.now() - startedAt.current : MIN_VISIBLE_MS;
    const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
    const t = setTimeout(() => setIsNavigating(false), remaining);
    return () => clearTimeout(t);
    // Only re-run when the route actually changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <NavigationContext.Provider value={{ isNavigating, beginNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationStatus() {
  const ctx = useContext(NavigationContext);
  if (!ctx) {
    throw new Error("useNavigationStatus must be used within NavigationProvider");
  }
  return ctx;
}
