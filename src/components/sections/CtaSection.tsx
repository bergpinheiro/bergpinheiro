"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F5C518]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5C518]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/20 text-[#F5C518] text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide uppercase">
            <MessageCircle size={12} />
            Pronto para começar?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
            Vamos transformar{" "}
            <span className="gradient-text">sua ideia</span>
            {" "}em realidade
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Entre em contato agora e descubra como a Weblooks pode acelerar o
            crescimento do seu negócio com tecnologia de ponta.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#F5C518] hover:bg-[#D4A017] text-[#0A0A0A] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-yellow-500/20"
            >
              Falar no WhatsApp agora
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <p className="mt-6 text-gray-600 text-sm">
            Resposta rápida · Sem compromisso · 100% gratuito
          </p>
        </motion.div>
      </div>
    </section>
  );
}
