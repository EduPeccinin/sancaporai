"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export function MetricsSection() {
  return (
    <section id="metricas" className="overflow-hidden bg-[var(--color-sanca-dark)] py-24 text-white">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-10 text-center lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
          >
            <p className="font-sans text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-sanca-orange)]">
              Números e audiência
            </p>
            <h2 className="mt-3 font-heading text-5xl uppercase md:text-7xl">
              Alcance mensal que coloca sua marca em evidência
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-lg border border-white/10 bg-white/[0.06] p-8 shadow-2xl md:p-10"
          >
            <strong className="block font-heading text-7xl text-[var(--color-sanca-orange)] md:text-8xl">
              +1,5 milhão
            </strong>
            <span className="mt-4 block font-sans text-base font-bold uppercase tracking-wide text-white/75 md:text-lg">
              de visualizações por mês
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
