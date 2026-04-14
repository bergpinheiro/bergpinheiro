"use client";

import { motion } from "framer-motion";
import { Eye, Target, Heart } from "lucide-react";

const VALUES = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Desenvolver soluções digitais de alta qualidade que transformem a operação e os resultados dos nossos clientes, entregando tecnologia acessível e eficiente.",
    color: "from-[#00E676]/20 to-[#00E676]/5",
  },
  {
    icon: Eye,
    title: "Visão",
    description:
      "Ser referência em desenvolvimento web e automações no Nordeste brasileiro, reconhecidos pela excelência técnica, ética e compromisso com o cliente.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Transparência na comunicação, comprometimento com prazos, qualidade inegociável e foco genuíno no sucesso do projeto de cada cliente.",
    color: "from-purple-500/20 to-purple-500/5",
  },
];

const STACK = [
  "Next.js", "React", "TypeScript", "Node.js",
  "PostgreSQL", "MongoDB", "Docker", "AWS",
  "Tailwind CSS", "Prisma", "GraphQL", "Vercel",
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
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] dark:text-white">
              Missão, Visão e Valores
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-white dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-2xl p-8"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5`}
                  >
                    <Icon size={22} className="text-[#0A0A0A] dark:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
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
            <span className="text-[#00E676] font-semibold text-sm tracking-widest uppercase">
              Tech Stack
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#0A0A0A] dark:text-white">
              Tecnologias que dominamos
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {STACK.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium px-5 py-2.5 rounded-full hover:border-[#00E676]/50 hover:text-[#00E676] transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
