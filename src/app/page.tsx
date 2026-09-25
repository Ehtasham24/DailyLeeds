import Hero from "@/components/Hero";
import Who from "@/components/Who";
import HowItWorksTeaser from "@/components/HowItWorksTeaser";
import Speed from "@/components/Speed";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Who />
        <HowItWorksTeaser />
        <Speed />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
