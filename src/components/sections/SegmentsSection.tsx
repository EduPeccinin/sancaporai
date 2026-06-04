"use client";

import React from "react";
import { motion } from "framer-motion";
import { Beer, CakeSlice, CalendarHeart, Coffee, Hamburger, Pizza, PlaneTakeoff, Utensils } from "lucide-react";
import { Container } from "../ui/Container";

const segments = [
  { title: "Hamburguerias", icon: Hamburger },
  { title: "Cafeterias", icon: Coffee },
  { title: "Pizzarias", icon: Pizza },
  { title: "Restaurantes", icon: Utensils },
  { title: "Bares", icon: Beer },
  { title: "Docerias", icon: CakeSlice },
  { title: "Eventos", icon: CalendarHeart },
  { title: "Viagens", icon: PlaneTakeoff },
];

export function SegmentsSection() {
  return (
    <section className="bg-white py-24 text-[var(--color-sanca-dark)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="font-sans text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-sanca-orange)]">
            Segmentos
          </p>
          <h2 className="mt-3 font-heading text-5xl uppercase md:text-7xl">
            Mostrando o que há de melhor em São Carlos e região
          </h2>
          <p className="mt-5 font-sans text-lg leading-relaxed text-gray-600">
            Da comida rápida ao jantar especial, do evento ao café da tarde: a audiência do Sanca busca experiências para viver agora.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <motion.div
                key={segment.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="group rounded-lg border border-gray-100 bg-[var(--color-sanca-light)] p-6 transition-colors hover:bg-[var(--color-sanca-orange)]"
              >
                <Icon className="h-9 w-9 text-[var(--color-sanca-orange)] transition-colors group-hover:text-white" />
                <h3 className="mt-6 font-heading text-3xl uppercase leading-none text-black transition-colors group-hover:text-white">
                  {segment.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
