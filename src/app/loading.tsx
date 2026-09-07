import LogoMark from "@/components/LogoMark";
import Spinner from "@/components/Spinner";

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 bg-light">
      <div className="relative grid place-items-center">
        <Spinner size={56} />
        <div className="absolute animate-pulse">
          <LogoMark size={22} />
        </div>
      </div>
      <p className="text-sm font-semibold text-ink-soft">Loading…</p>
    </div>
  );
}
