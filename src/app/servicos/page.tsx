import type { Metadata } from "next";
import { ServicesDetailSection } from "@/components/sections/ServicesDetailSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Habilidades",
  description:
    "Conheça as habilidades e especialidades de Berg Pinheiro: frontend, backend, integrações, automações e DevOps.",
};

export default function ServicosPage() {
  return (
    <>
      <ServicesDetailSection />
      <CtaSection />
    </>
  );
}
