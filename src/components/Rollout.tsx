import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import { ONBOARDING_TIMELINE } from "@/lib/content";

export default function Rollout() {
  return (
    <section className="bg-light py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="The rollout"
          title="What the first month looks like"
        />
        <Timeline steps={ONBOARDING_TIMELINE} />
      </div>
    </section>
  );
}
