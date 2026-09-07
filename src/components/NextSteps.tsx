import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import { NEXT_STEPS_TIMELINE } from "@/lib/content";

export default function NextSteps() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading eyebrow="After you submit" title="What happens next" />
        <Timeline steps={NEXT_STEPS_TIMELINE} />
      </div>
    </section>
  );
}
