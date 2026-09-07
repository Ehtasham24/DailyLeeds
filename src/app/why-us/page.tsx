import type { Metadata } from "next";
import Why from "@/components/Why";
import StatsBand from "@/components/StatsBand";
import ComparisonTable from "@/components/ComparisonTable";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Why local plumbers, electricians and cleaners choose DailyLeads: leads you own, results you can see.",
};

const STATS = [
  { value: 1, suffix: "+", label: "Qualified lead delivered every day" },
  { value: 100, suffix: "%", label: "Of the ad page & leads stay yours" },
  { value: 5, suffix: " min", label: "Target callback window we help you hit" },
  { value: 3, label: "Local trades we specialize in" },
];

export default function WhyUsPage() {
  return (
    <>
      <main>
        <Why />
        <StatsBand stats={STATS} />
        <ComparisonTable />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
