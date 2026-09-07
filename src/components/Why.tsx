"use client";

import { Check } from "lucide-react";
import FeatureGrid from "@/components/FeatureGrid";
import SectionHeading from "@/components/SectionHeading";

const ITEMS = [
  {
    icon: <Check size={18} strokeWidth={2.5} />,
    title: "At least one lead a day",
    text: "A steady, predictable flow of local jobs — not feast or famine.",
  },
  {
    icon: <Check size={18} strokeWidth={2.5} />,
    title: "Ads on your own page",
    text: "Genuine and trusted by your community — not some faceless agency page.",
  },
  {
    icon: <Check size={18} strokeWidth={2.5} />,
    title: "You keep everything",
    text: "Your page, your pixel, your leads. If you ever leave, it all stays yours.",
  },
  {
    icon: <Check size={18} strokeWidth={2.5} />,
    title: "Zero marketing work",
    text: "Done-for-you from setup to optimization. You just answer the phone.",
  },
];

export default function Why() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Why DailyLeads"
          title="Leads you own, results you can see"
        />
        <FeatureGrid items={ITEMS} spotlightColor="rgba(27,180,122,.12)" />
      </div>
    </section>
  );
}
