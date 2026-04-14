"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Code2, Coffee, ExternalLink } from "lucide-react";

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-[#00E676] font-semibold text-sm tracking-widest uppercase">
              Sobre mim
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[#0A0A0A] dark:text-white leading-tight">
              Dev com paixão por{" "}
              <span className="gradient-text">resolver problemas</span>
            </h1>
            <p className="mt-6 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              Sou Berg Pinheiro, desenvolvedor Full Stack com mais de 5 anos de
              experiência criando soluções digitais que realmente funcionam. Sou
              fundador da <strong className="text-[#00E676]">Weblooks</strong>,
              empresa focada em desenvolvimento web e automações de alto impacto.
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed">
              Tenho obsessão por código limpo, entregas no prazo e projetos que
              escalam. Do backend ao frontend, das integrações ao deploy — cuido
              de toda a jornada técnica com atenção ao detalhe e foco em resultado.
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed">
              Quando não estou codando, estou estudando novas tecnologias,
              construindo produtos próprios ou ajudando outros devs a evoluírem.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: MapPin, text: "Fortaleza, CE — Brasil" },
                { icon: Code2, text: "+50 projetos entregues" },
                { icon: Coffee, text: "5+ anos de experiência" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-full px-4 py-2"
                >
                  <Icon size={14} className="text-[#00E676]" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/bergpinheiro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#00E676] transition-colors"
              >
                <ExternalLink size={14} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/bergpinheiro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#00E676] transition-colors"
              >
                <ExternalLink size={14} /> LinkedIn
              </a>
              <a
                href="https://weblooks.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#00E676] transition-colors"
              >
                <ExternalLink size={14} /> Weblooks
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/berg-pinheiro.png"
                alt="Berg Pinheiro — Dev Full Stack"
                width={600}
                height={700}
                className="w-full object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#00E676]/50 flex-shrink-0">
                  <Image
                    src="/berg-pinheiro.png"
                    alt="Berg Pinheiro"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover object-top"
                  />
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
