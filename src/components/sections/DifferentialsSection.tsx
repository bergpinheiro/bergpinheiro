"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Rocket, Shield, Headphones, TrendingUp } from "lucide-react";

const ICONS = { Rocket, Shield, HeadphonesIcon: Headphones, TrendingUp };

const TRAITS = [
  {
    icon: "Rocket",
    title: "Entrega no prazo",
    description: "Metodologia ágil e comunicação proativa. Você sempre sabe em que estágio o projeto está.",
  },
  {
    icon: "Shield",
    title: "Código limpo",
    description: "Clean code, TypeScript estrito, testes e documentação. Projeto escalável desde o dia 1.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Suporte real",
    description: "Não sumo depois da entrega. Estou disponível para evoluir e manter o que construí.",
  },
  {
    icon: "TrendingUp",
    title: "Foco em resultado",
    description: "Cada decisão técnica é pensada para gerar impacto real no seu negócio.",
  },
];

export function DifferentialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#00E676] font-semibold text-sm tracking-widest uppercase">
              Como trabalho
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] dark:text-white leading-tight">
              Compromisso com{" "}
              <span className="gradient-text">qualidade real</span>
            </h2>
            <p className="mt-5 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              Não sou mais um dev que apenas escreve código. Sou parceiro no
              sucesso do projeto — do primeiro alinhamento ao último deploy.
            </p>

            <div className="mt-10 p-6 bg-[#00E676]/5 border border-[#00E676]/20 rounded-2xl">
              <blockquote className="text-[#0A0A0A] dark:text-white font-medium text-lg italic leading-relaxed">
                &ldquo;Código bom é aquele que resolve o problema certo, da
                forma mais simples possível — e ainda está funcionando daqui
                a dois anos.&rdquo;
              </blockquote>
              <footer className="mt-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#00E676]/40 flex-shrink-0">
                  <Image
                    src="/berg-pinheiro.png"
                    alt="Berg Pinheiro"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0A0A0A] dark:text-white">Berg Pinheiro</p>
                  <p className="text-xs text-gray-500">Dev · Fundador, Weblooks</p>
                </div>
              </footer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {TRAITS.map((item, i) => {
              const Icon = ICONS[item.icon as keyof typeof ICONS];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-2xl p-6"
                >
                  <div className="w-11 h-11 bg-[#00E676]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#00E676]" />
                  </div>
                  <h3 className="font-bold text-[#0A0A0A] dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
