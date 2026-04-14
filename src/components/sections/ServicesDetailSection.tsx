"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Zap, Cloud, CheckCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_URL, SKILLS } from "@/lib/constants";

const ICONS = { Monitor, Server, Zap, Cloud };

export function ServicesDetailSection() {
  return (
    <section className="pt-32 pb-20 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00E676] font-semibold text-sm tracking-widest uppercase">
            O que faço
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[#0A0A0A] dark:text-white">
            Habilidades &{" "}
            <span className="gradient-text">especialidades</span>
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Do primeiro wireframe ao deploy em produção — cuido de toda a jornada
            técnica com atenção ao detalhe e foco em resultado.
          </p>
        </motion.div>

        <div className="space-y-8">
          {SKILLS.map((skill, i) => {
            const Icon = ICONS[skill.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-3xl p-8 lg:p-10"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 bg-[#00E676]/10 rounded-2xl flex items-center justify-center">
                        <Icon size={26} className="text-[#00E676]" />
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold text-[#0A0A0A] dark:text-white">
                        {skill.title}
                      </h2>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                      {skill.description}
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#00E676] hover:bg-[#00C853] text-[#0A0A0A] font-semibold text-sm px-6 py-3 rounded-full transition-all hover:scale-105 active:scale-95 group"
                    >
                      Conversar sobre isso
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {skill.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-[#00E676] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
