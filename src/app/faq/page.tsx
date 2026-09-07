import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the questions plumbers, electricians and cleaners ask most before starting with DailyLeads.",
};

export default function FAQPage() {
  return (
    <>
      <main>
        <FAQ />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
