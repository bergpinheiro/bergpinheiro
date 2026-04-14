import type { Metadata } from "next";
import Image from "next/image";
import { AboutHero } from "@/components/sections/AboutHero";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a Weblooks, empresa de tecnologia liderada por Berg Pinheiro, especializada em desenvolvimento web e soluções digitais.",
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
