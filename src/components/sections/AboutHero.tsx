"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Code2, Coffee } from "lucide-react";

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#F5C518] font-semibold text-sm tracking-widest uppercase">
              Sobre a Weblooks
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[#0A0A0A] dark:text-white leading-tight">
              Tecnologia com{" "}
              <span className="gradient-text">propósito e precisão</span>
            </h1>
            <p className="mt-6 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              A Weblooks nasceu da paixão por criar soluções digitais que realmente
              funcionam. Com foco em qualidade, performance e resultados mensuráveis,
              ajudamos empresas a crescerem no ambiente digital.
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed">
              Cada projeto é tratado como único. Entendemos profundamente as
              necessidades do seu negócio antes de escrever a primeira linha de código,
              garantindo que a solução entregue gere valor real.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { icon: MapPin, text: "Fortaleza, CE — Brasil" },
                { icon: Code2, text: "+50 projetos entregues" },
                { icon: Coffee, text: "5+ anos de experiência" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-full px-4 py-2"
                >
                  <Icon size={14} className="text-[#F5C518]" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#F5C518]/10 to-transparent">
              <Image
                src="/berg-pinheiro.png"
                alt="Berg Pinheiro — Fundador da Weblooks"
                width={600}
                height={700}
                className="w-full object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F5C518] rounded-full flex items-center justify-center text-[#0A0A0A] font-bold">
                  BP
                </div>
                <div>
                  <p className="font-bold text-[#0A0A0A] dark:text-white text-sm">Berg Pinheiro</p>
                  <p className="text-xs text-gray-500">Fundador & Dev Full Stack</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
