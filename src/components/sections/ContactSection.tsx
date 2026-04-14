"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
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
      `Olá, Berg! Me chamo ${formState.name}.\n\nEmail: ${formState.email}\nTelefone: ${formState.phone || "—"}\n\nMensagem: ${formState.message}`
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
          <span className="text-[#00E676] font-semibold text-sm tracking-widest uppercase">
            Contato
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-[#0A0A0A] dark:text-white">
            Vamos trabalhar{" "}
            <span className="gradient-text">juntos?</span>
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
            Tem um projeto, uma ideia ou só quer bater um papo sobre tecnologia?
            Manda mensagem — respondo rápido.
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
                  <span className="inline-flex items-center gap-1 text-[#00E676] text-sm font-medium group-hover:gap-2 transition-all">
                    Enviar mensagem <ArrowRight size={14} />
                  </span>
                </div>
              </a>

              <a
                href="mailto:lindenberg@weblooks.com.br"
                className="flex items-start gap-4 mb-6"
              >
                <div className="w-12 h-12 bg-[#00E676]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-[#00E676]" />
                </div>
                <div>
                  <p className="font-semibold mb-1">E-mail</p>
                  <p className="text-gray-400 text-sm">lindenberg@weblooks.com.br</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00E676]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-[#00E676]" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Localização</p>
                  <p className="text-gray-400 text-sm">Fortaleza, CE — Brasil</p>
                  <p className="text-gray-500 text-xs mt-1">Atendimento remoto para todo o Brasil</p>
                </div>
              </div>
            </div>

            <div className="bg-[#00E676]/5 border border-[#00E676]/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
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
                  <p className="font-bold text-[#0A0A0A] dark:text-white text-sm">Berg Pinheiro</p>
                  <p className="text-xs text-gray-500">Dev Full Stack · Weblooks</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Fico feliz em conversar sobre projetos, tirar dúvidas técnicas ou
                simplesmente bater um papo sobre tecnologia e negócios.
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
                  <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-white mb-2">Mensagem enviada!</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                    Você foi redirecionado para o WhatsApp. Responderei em breve!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="mt-6 text-[#00E676] text-sm font-medium hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nome *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Seu nome"
                        className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">WhatsApp / Telefone</label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+55 85 99999-9999"
                      className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensagem *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Conta sobre seu projeto ou ideia..."
                      className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-[#00E676] focus:ring-1 focus:ring-[#00E676] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full group flex items-center justify-center gap-2 bg-[#00E676] hover:bg-[#00C853] text-[#0A0A0A] font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-95"
                  >
                    Enviar pelo WhatsApp
                    <Send size={18} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    Você será redirecionado para o WhatsApp com a mensagem formatada
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
