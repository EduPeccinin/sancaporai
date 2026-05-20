"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Utensils, Beer, CalendarHeart, PlaneTakeoff } from "lucide-react";

const segments = [
  {
    id: "restaurantes",
    title: "Restaurantes",
    description: "Gastronomia local, pratos elaborados e experiências culinárias únicas.",
    icon: Utensils,
  },
  {
    id: "bares",
    title: "Bares",
    description: "Drinks, petiscos e os melhores points para o happy hour e diversão noturna.",
    icon: Beer,
  },
  {
    id: "eventos",
    title: "Eventos",
    description: "Cobertura de festas, festivais, shows e inaugurações na região.",
    icon: CalendarHeart,
  },
  {
    id: "viagens",
    title: "Viagens",
    description: "Dicas de turismo, passeios, hotéis e roteiros para sair da rotina.",
    icon: PlaneTakeoff,
  },
];

export function SegmentsSection() {
  return (
    <section className="py-24 bg-white text-[var(--color-sanca-dark)] overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl md:text-6xl text-[var(--color-sanca-dark)] uppercase">
            Nossos Segmentos
          </h2>
          <div className="w-24 h-1 bg-[var(--color-sanca-orange)] mx-auto mt-4" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Atuamos em diversos nichos para levar o melhor do entretenimento e gastronomia para a nossa comunidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[var(--color-sanca-light)] rounded-2xl p-8 hover:bg-[var(--color-sanca-orange)] transition-colors duration-300 shadow-sm hover:shadow-xl text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-[var(--color-sanca-orange)]" />
                </div>
                <h3 className="font-heading text-2xl uppercase text-[var(--color-sanca-dark)] group-hover:text-white transition-colors duration-300 mb-3">
                  {segment.title}
                </h3>
                <p className="font-sans text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  {segment.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
