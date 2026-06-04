"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const metrics = [
  { value: "+300 mil", label: "contas alcançadas mensalmente" },
  { value: "+2,5 milhões", label: "impressões por mês" },
  { value: "+20 mil", label: "visualizações por story" },
  { value: "+60 mil", label: "visualizações em reels" },
];

const proofImages = [
  { src: "/images/metrics/views reels.png", title: "Views em reels" },
  { src: "/images/metrics/views story.png", title: "Views em stories" },
];

export function MetricsSection() {
  return (
    <section id="metricas" className="overflow-hidden bg-[var(--color-sanca-dark)] py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
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
              Alcance real para negócios que dependem de movimento
            </h2>
            <p className="mt-5 font-sans text-lg leading-relaxed text-white/70">
              Os dados do mídia kit mostram uma comunidade grande, recorrente e local. O valor aqui não é só aparecer: é aparecer para quem já procura onde comer, comprar e sair.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-lg border border-white/10 bg-white/[0.06] p-6"
              >
                <strong className="block font-heading text-5xl text-[var(--color-sanca-orange)] md:text-6xl">
                  {metric.value}
                </strong>
                <span className="mt-2 block font-sans text-sm font-semibold uppercase tracking-wide text-white/72">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {proofImages.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-lg border border-white/10 bg-white p-3 shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-black">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
