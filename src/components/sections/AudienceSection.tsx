"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const audienceData = [
  { label: "Mulheres", percentage: 64.4, color: "bg-[var(--color-sanca-orange)]" },
  { label: "Homens", percentage: 35.6, color: "bg-[var(--color-sanca-dark)]" },
];

const ageData = [
  { range: "18-24", percentage: 13.7 },
  { range: "25-34", percentage: 35.7 },
  { range: "35-44", percentage: 24.6 },
  { range: "45-54", percentage: 14.8 },
  { range: "55+", percentage: 11.2 },
];

export function AudienceSection() {
  return (
    <section id="audiencia" className="py-24 bg-[var(--color-sanca-dark)] text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl text-[var(--color-sanca-orange)] uppercase mb-6">
              Nossa Audiência
            </h2>
            <p className="text-gray-300 text-lg font-sans leading-relaxed mb-10">
              Conectamos sua marca com um público fiel, altamente engajado e com poder de consumo. Nosso perfil alcança as pessoas certas, no momento certo.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl mb-4 tracking-wide">Gênero</h3>
                <div className="flex flex-col gap-4">
                  {audienceData.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm font-bold uppercase tracking-wider mb-2">
                        <span>{item.label}</span>
                        <span>{item.percentage}%</span>
                      </div>
                      <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full ${item.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 rounded-3xl p-8 border border-white/10"
          >
            <h3 className="font-heading text-2xl mb-8 tracking-wide text-center">Faixa Etária</h3>
            <div className="flex flex-col gap-6">
              {ageData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="w-16 font-sans font-bold text-gray-400">{item.range}</span>
                  <div className="flex-1 h-8 bg-gray-800 rounded-md overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className="h-full bg-[var(--color-sanca-orange)] absolute left-0 top-0"
                    />
                  </div>
                  <span className="w-12 text-right font-bold">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
