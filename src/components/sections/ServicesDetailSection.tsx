"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Zap,
  MessageCircle,
  Server,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const SERVICES_DETAIL = [
  {
    id: "web",
    icon: Monitor,
    title: "Desenvolvimento de Sistemas Web",
    description:
      "Criamos aplicações web completas, do frontend ao backend, com as melhores tecnologias do mercado. Nossa stack é moderna, escalável e pensada para performance desde o primeiro commit.",
    features: [
      "SPAs e SSR com Next.js & React",
      "APIs RESTful e GraphQL com Node.js",
      "Bancos de dados relacionais e NoSQL",
      "Autenticação e autorização seguras",
      "Painel administrativo personalizado",
      "Integração com sistemas de pagamento",
      "PWA e apps mobile com React Native",
      "Testes automatizados (unit, e2e)",
    ],
    highlight: "Mais popular",
  },
  {
    id: "integrations",
    icon: Zap,
    title: "Integrações & Automações",
    description:
      "Conectamos seu sistema a qualquer plataforma ou API. Automatizamos processos repetitivos para que sua equipe foque no que realmente importa: o crescimento do negócio.",
    features: [
      "Integração com APIs de terceiros",
      "Webhooks e eventos em tempo real",
      "Automações com n8n e Zapier",
      "Sincronização de dados entre sistemas",
      "Integração com ERPs e CRMs",
      "Pipelines de dados ETL",
      "Notificações automatizadas",
      "Relatórios e dashboards",
    ],
    highlight: null,
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "Soluções WhatsApp Business",
    description:
      "Transforme o WhatsApp em um poderoso canal de vendas e atendimento. Criamos chatbots inteligentes e fluxos automatizados que convertem e encantam seus clientes.",
    features: [
      "Chatbots com IA e respostas automáticas",
      "Integração com WhatsApp Business API",
      "Fluxos de atendimento personalizados",
      "Transferência para atendimento humano",
      "Funis de venda automatizados",
      "Integração com CRM e ERP",
      "Envio de campanhas e notificações",
      "Relatórios de atendimento",
    ],
    highlight: "Alta demanda",
  },
  {
    id: "infra",
    icon: Server,
    title: "Infraestrutura & Deploy",
    description:
      "Configuramos e gerenciamos toda a infraestrutura da sua aplicação para garantir alta disponibilidade, segurança e performance, com custos otimizados.",
    features: [
      "Deploy automatizado com CI/CD",
      "Configuração de ambientes (dev/staging/prod)",
      "Containerização com Docker e Kubernetes",
      "Hospedagem em Vercel, AWS, DigitalOcean",
      "Configuração de domínios e SSL",
      "Monitoramento e alertas em tempo real",
      "Backups automáticos e disaster recovery",
      "Otimização de performance e custos",
    ],
    highlight: null,
  },
];

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
            Nossos serviços
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[#0A0A0A] dark:text-white">
            Soluções completas para{" "}
            <span className="gradient-text">seu negócio</span>
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Cada serviço é pensado para gerar resultado real. Trabalhamos com
            tecnologia de ponta e foco total na sua necessidade.
          </p>
        </motion.div>

        <div className="space-y-8">
          {SERVICES_DETAIL.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-3xl p-8 lg:p-10"
              >
                {service.highlight && (
                  <span className="absolute top-6 right-6 bg-[#00E676] text-[#0A0A0A] text-xs font-bold px-3 py-1 rounded-full">
                    {service.highlight}
                  </span>
                )}

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 bg-[#00E676]/10 rounded-2xl flex items-center justify-center">
                        <Icon size={26} className="text-[#00E676]" />
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold text-[#0A0A0A] dark:text-white">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#00E676] hover:bg-[#00C853] text-[#0A0A0A] font-semibold text-sm px-6 py-3 rounded-full transition-all hover:scale-105 active:scale-95 group"
                    >
                      Solicitar este serviço
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle
                          size={16}
                          className="text-[#00E676] mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
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
