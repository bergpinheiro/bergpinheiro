import type { Metadata } from "next";
import { ServicesDetailSection } from "@/components/sections/ServicesDetailSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça todos os serviços da Weblooks: desenvolvimento web, integrações, soluções WhatsApp e infraestrutura cloud.",
};

export default function ServicosPage() {
  return (
    <>
      <ServicesDetailSection />
      <CtaSection />
    </>
  );
}
