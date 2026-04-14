"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/constants";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Me chamo ${formState.name}.\n\nEmail: ${formState.email}\nTelefone: ${formState.phone || "—"}\n\nMensagem: ${formState.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="pt-32 pb-24 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#F5C518] font-semibold text-sm tracking-widest uppercase">
            Entre em contato
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[#0A0A0A] dark:text-white">
            Vamos conversar sobre{" "}
            <span className="gradient-text">seu projeto</span>
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
            Respondo em menos de 24 horas. Sem burocracia, só resultado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-[#0A0A0A] dark:bg-[#111111] rounded-2xl p-7 text-white">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 mb-6"
              >
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={22} className="text-white fill-white" />
                </div>
                <div>
                  <p className="font-semibold mb-1">WhatsApp (mais rápido)</p>
                  <p className="text-gray-400 text-sm mb-2">+55 85 99120-3123</p>
                  <span className="inline-flex items-center gap-1 text-[#F5C518] text-sm font-medium group-hover:gap-2 transition-all">
                    Enviar mensagem <ArrowRight size={14} />
                  </span>
                </div>
              </a>

              <a
                href="mailto:contato@weblooks.com.br"
                className="flex items-start gap-4 mb-6"
              >
                <div className="w-12 h-12 bg-[#F5C518]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-[#F5C518]" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-gray-400 text-sm">contato@weblooks.com.br</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5C518]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-[#F5C518]" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Localização</p>
                  <p className="text-gray-400 text-sm">Fortaleza, CE — Brasil</p>
                  <p className="text-gray-500 text-xs mt-1">Atendimento remoto para todo o Brasil</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5C518]/5 border border-[#F5C518]/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#F5C518] rounded-full flex items-center justify-center text-[#0A0A0A] font-bold text-sm">
                  BP
                </div>
                <div>
                  <p className="font-bold text-[#0A0A0A] dark:text-white text-sm">Berg Pinheiro</p>
                  <p className="text-xs text-gray-500">Fundador & Dev Full Stack</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Fico feliz em conversar sobre o seu projeto, tirar dúvidas técnicas e
                ajudar a encontrar a melhor solução para o seu negócio.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-50 dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-3xl p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white mb-2">
                    Mensagem enviada!
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                    Sua mensagem foi redirecionada para o WhatsApp. Responderei em breve!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="mt-6 text-[#F5C518] text-sm font-medium hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Seu nome completo"
                        className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="seu@email.com"
                        className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      WhatsApp / Telefone
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      placeholder="+55 85 99999-9999"
                      className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Conte sobre seu projeto ou necessidade..."
                      className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 bg-[#F5C518] hover:bg-[#D4A017] text-[#0A0A0A] font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-95"
                  >
                    Enviar pelo WhatsApp
                    <Send
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Ao enviar, você será redirecionado para o WhatsApp
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
