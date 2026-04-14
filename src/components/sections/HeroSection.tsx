"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0A0A0A]">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#F5C518]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#F5C518]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.span
            variants={fadeUp}
            custom={0.1}
            className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/20 text-[#D4A017] dark:text-[#F5C518] text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide uppercase"
          >
            <span className="w-1.5 h-1.5 bg-[#F5C518] rounded-full animate-pulse" />
            Soluções Digitais de Alto Impacto
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={0.2}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#0A0A0A] dark:text-white leading-[1.08] tracking-tight max-w-4xl"
          >
            Transformamos ideias em{" "}
            <span className="gradient-text">experiências digitais</span>{" "}
            que convertem
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.35}
            className="mt-8 text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed"
          >
            Desenvolvemos sistemas web, integrações e automações para empresas
            que querem crescer com tecnologia de ponta. Da ideia ao deploy em
            produção.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.5}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#F5C518] hover:bg-[#D4A017] text-[#0A0A0A] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-yellow-500/20"
            >
              Falar no WhatsApp
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-white font-medium text-base px-6 py-4 rounded-full border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
            >
              Ver serviços
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.65}
            className="mt-16 grid grid-cols-3 gap-8 sm:gap-16"
          >
            {[
              { value: "50+", label: "Projetos entregues" },
              { value: "100%", label: "Clientes satisfeitos" },
              { value: "5+", label: "Anos de experiência" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] dark:text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#servicos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-[#F5C518] transition-colors"
        aria-label="Scroll para baixo"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
