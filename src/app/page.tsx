import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Who from "@/components/Who";
import Steps from "@/components/Steps";
import Why from "@/components/Why";
import Pricing from "@/components/Pricing";
import Speed from "@/components/Speed";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="top">
        <Hero />
        <Who />
        <Steps />
        <Why />
        <Pricing />
        <Speed />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
