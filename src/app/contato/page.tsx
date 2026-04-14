import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Weblooks. Fale com Berg Pinheiro pelo WhatsApp ou preencha o formulário para iniciar seu projeto.",
};

export default function ContatoPage() {
  return <ContactSection />;
}
