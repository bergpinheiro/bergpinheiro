"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50 dark:bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00E676] font-semibold text-sm tracking-widest uppercase">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] dark:text-white">
            O que nossos{" "}
            <span className="gradient-text">clientes dizem</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white dark:bg-[#111111] border border-gray-100 dark:border-gray-800 rounded-2xl p-7 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-[#00E676] text-[#00E676]"
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="w-10 h-10 bg-[#00E676] rounded-full flex items-center justify-center text-[#0A0A0A] font-bold text-xs flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0A0A0A] dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
