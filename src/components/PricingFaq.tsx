import FaqAccordion from "@/components/FaqAccordion";
import SectionHeading from "@/components/SectionHeading";
import { PRICING_FAQS } from "@/lib/content";

export default function PricingFaq() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading eyebrow="Billing" title="Pricing questions" />
        <FaqAccordion items={PRICING_FAQS} defaultOpenIndex={null} />
      </div>
    </section>
  );
}
