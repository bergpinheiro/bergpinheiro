"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ExternalLink } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#0A0A0A]">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#00E676]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00E676]/4 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div initial="hidden" animate="visible" className="flex flex-col">
            <motion.div variants={fadeUp} custom={0.1} className="flex items-center gap-2 mb-6">
              <MapPin size={14} className="text-[#00E676]" />
              <span className="text-sm text-gray-500 dark:text-gray-400">Fortaleza, CE — Brasil</span>
              <span className="ml-2 inline-flex items-center gap-1.5 bg-[#00E676]/10 border border-[#00E676]/20 text-[#00E676] text-xs font-semibold px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-[#00E676] rounded-full animate-pulse" />
                Disponível para projetos
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={0.2}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A0A0A] dark:text-white leading-[1.1] tracking-tight"
            >
              Olá, eu sou{" "}
              <span className="gradient-text">Berg Pinheiro</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={0.3}
              className="mt-4 text-xl sm:text-2xl font-medium text-gray-500 dark:text-gray-400"
            >
              Dev Full Stack &amp; Fundador da{" "}
              <a
                href="https://weblooks.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00E676] hover:underline"
              >
                Weblooks
              </a>
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={0.4}
              className="mt-6 text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg"
            >
              Transformo ideias em sistemas web robustos e experiências digitais
              de alto impacto. Especialista em Next.js, Node.js, integrações e
              automações que fazem o negócio crescer.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={0.5}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-[#00E676] hover:bg-[#00C853] text-[#0A0A0A] font-bold text-base px-7 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20"
              >
                Vamos conversar
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#0A0A0A] dark:hover:text-white font-medium text-base px-6 py-3.5 rounded-full border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all"
              >
                Saiba mais
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.6}
              className="mt-8 flex items-center gap-5"
            >
              <a
                href="https://github.com/bergpinheiro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-[#00E676] transition-colors text-sm"
              >
                <GithubSvg />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/bergpinheiro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-[#00E676] transition-colors text-sm"
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>
              <a
                href="mailto:lindenberg@weblooks.com.br"
                className="flex items-center gap-2 text-gray-500 hover:text-[#00E676] transition-colors text-sm"
              >
                lindenberg@weblooks.com.br
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.7}
              className="mt-10 grid grid-cols-3 gap-6 border-t border-gray-100 dark:border-gray-800 pt-8"
            >
              {[
                { value: "5+", label: "Anos de exp." },
                { value: "50+", label: "Projetos" },
                { value: "100%", label: "Comprometimento" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative w-80 xl:w-96">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E676]/20 to-transparent rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden border border-[#00E676]/15 shadow-2xl">
                <Image
                  src="/berg-pinheiro.png"
                  alt="Berg Pinheiro — Dev Full Stack"
                  width={500}
                  height={600}
                  className="w-full object-cover object-top"
                  priority
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -left-6 top-1/4 bg-white dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-xl"
              >
                <p className="text-xs text-gray-500 mb-1">Stack principal</p>
                <p className="text-sm font-bold text-[#0A0A0A] dark:text-white">Next.js + Node.js</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute -right-6 bottom-1/4 bg-white dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-xl"
              >
                <p className="text-xs text-gray-500 mb-1">Empresa</p>
                <p className="text-sm font-bold text-[#00E676]">Weblooks</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function GithubSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
