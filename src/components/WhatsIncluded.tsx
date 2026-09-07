import FeatureGrid from "@/components/FeatureGrid";
import SectionHeading from "@/components/SectionHeading";
import { WHATS_INCLUDED } from "@/lib/content";

export default function WhatsIncluded() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="What's included"
          title="Everything, done for you"
          description="One flat plan covers the whole campaign — nothing extra to buy or figure out."
        />
        <FeatureGrid items={WHATS_INCLUDED} columns={3} maxWidth="1040px" />
      </div>
    </section>
  );
}
