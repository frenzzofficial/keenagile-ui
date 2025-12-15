import Hero from "@/components/features/hero/Hero";
import HowItWorks from "@/components/features/hero/how-it-works";
import Testimonials from "@/components/features/hero/testimonails";
import TrustedBrands from "@/components/features/brandings/trusted-brands";
import FAQ from "@/components/features/hero/faq";

export default function Home() {
  return (
    <section>
      <Hero />
      <TrustedBrands />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </section>
  );
}
