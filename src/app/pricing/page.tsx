import type { Metadata } from "next";
import Pricing from "@/components/Pricing";
import PricingFaq from "@/components/PricingFaq";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One flat monthly plan, done for you — plus a risk-free first week where you only pay for ad spend.",
};

export default function PricingPage() {
  return (
    <>
      <main>
        <Pricing />
        <PricingFaq />
      </main>
      <Footer />
    </>
  );
}
