import Spinner from "@/components/Spinner";
import { LoadingLabel } from "@/components/NavSpinnerOverlay";

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 bg-light">
      <Spinner size={88} />
      <LoadingLabel />
    </div>
  );
}
