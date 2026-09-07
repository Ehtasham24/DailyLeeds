import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your business and we'll set up your free first week of local leads.",
};

export default function ContactPage() {
  return (
    <>
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
