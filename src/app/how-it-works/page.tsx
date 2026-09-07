import type { Metadata } from "next";
import Steps from "@/components/Steps";
import WhatsIncluded from "@/components/WhatsIncluded";
import Rollout from "@/components/Rollout";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How DailyLeads turns your own Facebook & Instagram page into a steady stream of local, quote-ready leads.",
};

export default function HowItWorksPage() {
  return (
    <>
      <main>
        <Steps />
        <WhatsIncluded />
        <Rollout />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
