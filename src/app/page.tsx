import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
