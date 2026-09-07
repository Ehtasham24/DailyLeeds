import type { Metadata } from "next";
import Why from "@/components/Why";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Why local plumbers, electricians and cleaners choose DailyLeads: leads you own, results you can see.",
};

export default function WhyUsPage() {
  return (
    <>
      <main>
        <Why />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
