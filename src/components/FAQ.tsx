import FaqAccordion from "@/components/FaqAccordion";
import SectionHeading from "@/components/SectionHeading";
import { FAQ_CATEGORIES } from "@/lib/content";

export default function FAQ() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading eyebrow="Questions" title="Good to know" />

        <div className="mx-auto flex max-w-[760px] flex-col gap-11">
          {FAQ_CATEGORIES.map((cat, i) => (
            <div key={cat.category}>
              <h3 className="mb-4 text-[.78rem] font-bold uppercase tracking-[.12em] text-blue">
                {cat.category}
              </h3>
              <FaqAccordion
                items={cat.items}
                defaultOpenIndex={i === 0 ? 0 : null}
                className="flex flex-col gap-3"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
