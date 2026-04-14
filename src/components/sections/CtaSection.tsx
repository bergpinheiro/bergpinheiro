"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00E676]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00E676]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-[#00E676]/10 border border-[#00E676]/20 text-[#00E676] text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide uppercase">
            <MessageCircle size={12} />
            Vamos trabalhar juntos?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
            Tem um projeto em{" "}
            <span className="gradient-text">mente?</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Seja um sistema web do zero, uma integração complexa ou uma automação
            que vai mudar seu dia a dia — me conta e a gente faz acontecer.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#00E676] hover:bg-[#00C853] text-[#0A0A0A] font-bold text-base px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20"
            >
              Falar no WhatsApp
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:lindenberg@weblooks.com.br"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-medium text-base px-6 py-4 rounded-full border border-gray-700 hover:border-gray-500 transition-all"
            >
              Enviar e-mail
            </a>
          </div>

          <p className="mt-6 text-gray-600 text-sm">
            Resposta rápida · Sem compromisso · 100% transparente
          </p>
        </motion.div>
      </div>
    </section>
  );
}
