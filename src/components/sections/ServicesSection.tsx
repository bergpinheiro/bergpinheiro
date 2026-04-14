"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Zap, Cloud, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SKILLS } from "@/lib/constants";

const ICONS = { Monitor, Server, Zap, Cloud };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function ServicesSection() {
  return (
    <section id="habilidades" className="py-24 lg:py-32 bg-gray-50 dark:bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00E676] font-semibold text-sm tracking-widest uppercase">
            O que faço
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] dark:text-white">
            Habilidades &{" "}
            <span className="gradient-text">especialidades</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Do frontend ao deploy — cuido de toda a jornada técnica com atenção ao detalhe.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SKILLS.map((skill) => {
            const Icon = ICONS[skill.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={skill.id}
                variants={cardVariants}
                className="group relative bg-white dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-2xl p-8 card-hover"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00E676]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00E676]/20 transition-colors">
                    <Icon size={22} className="text-[#00E676]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-[#0A0A0A] dark:text-white mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
                      {skill.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-[#00E676] font-semibold hover:gap-3 transition-all"
          >
            Ver detalhes completos <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
