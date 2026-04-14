"use client";

import { motion } from "framer-motion";
import { STACK } from "@/lib/constants";

const JOURNEY = [
  {
    year: "2018",
    title: "Primeiros passos",
    description: "Início da jornada no desenvolvimento web com HTML, CSS e JavaScript. Primeiros projetos freelancer.",
  },
  {
    year: "2020",
    title: "Stack moderna",
    description: "Transição para React e Node.js. Especialização em APIs REST e bancos de dados relacionais.",
  },
  {
    year: "2022",
    title: "Fundação da Weblooks",
    description: "Criação da Weblooks para atender demandas de sistemas web e automações com foco em resultado.",
  },
  {
    year: "2024",
    title: "W Multi Channel",
    description: "Lançamento do W Multi Channel, sistema de atendimento multicanal desenvolvido do zero.",
  },
  {
    year: "Hoje",
    title: "Full Stack & Produtos",
    description: "Construindo produtos próprios e atendendo clientes com tecnologia de ponta e suporte dedicado.",
  },
];

export function ValuesSection() {
  return (
    <>
      <section className="py-20 bg-gray-50 dark:bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#00E676] font-semibold text-sm tracking-widest uppercase">Trajetória</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0A0A0A] dark:text-white">
              Como cheguei até aqui
            </h2>
          </motion.div>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
            <div className="space-y-8">
              {JOURNEY.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#00E676]/10 border-2 border-[#00E676] flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-[#00E676]" />
                  </div>
                  <div className="pb-2">
                    <span className="text-[#00E676] text-xs font-bold uppercase tracking-widest">{item.year}</span>
                    <h3 className="text-base font-bold text-[#0A0A0A] dark:text-white mt-0.5">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#00E676] font-semibold text-sm tracking-widest uppercase">Tech Stack</span>
            <h2 className="mt-3 text-3xl font-bold text-[#0A0A0A] dark:text-white">
              Ferramentas que domino
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {STACK.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group flex flex-col items-center gap-1 bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-gray-700 rounded-xl px-5 py-3 hover:border-[#00E676]/50 transition-colors"
              >
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-[#00E676] transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wide">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
