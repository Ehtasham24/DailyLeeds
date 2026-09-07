import Hero from "@/components/Hero";
import Who from "@/components/Who";
import Speed from "@/components/Speed";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Who />
        <Speed />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
