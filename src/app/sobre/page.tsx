import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça Berg Pinheiro — Dev e fundador da Weblooks, especialista em Next.js, Node.js, integrações e automações.",
};

export default function SobrePage() {
  return (
    <>
      <AboutHero />
      <ValuesSection />
      <CtaSection />
    </>
  );
}
