import type { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DailyLeads collects, uses and protects personal information submitted through our website and Facebook/Instagram lead forms.",
};

export default function PrivacyPage() {
  return (
    <>
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  );
}
