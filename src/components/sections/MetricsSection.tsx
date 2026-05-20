"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import Image from "next/image";

export function MetricsSection() {
  const images = [
    "/images/metrics/numeros 1.png",
    "/images/metrics/numeros 2.png",
    "/images/metrics/numeros 3.png",
    "/images/metrics/numeros 4.png",
  ];

  const highlights = [
    { src: "/images/metrics/views reels.png", title: "Views em Reels" },
    { src: "/images/metrics/views story.png", title: "Views em Stories" },
  ];

  return (
    <section id="metricas" className="py-24 bg-white text-[var(--color-sanca-dark)] overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl md:text-6xl text-[var(--color-sanca-dark)] uppercase">
            Nossa Audiência e Alcance
          </h2>
          <div className="w-24 h-1 bg-[var(--color-sanca-orange)] mx-auto mt-4" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Números reais de quem vive e engaja com a gastronomia da região.
          </p>
        </motion.div>

        {/* Top metrics from numeros 1-4 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-full aspect-[4/5] bg-[var(--color-sanca-light)] rounded-2xl overflow-hidden shadow-md border border-gray-100 group"
            >
              <Image
                src={src}
                alt={`Métrica ${index + 1}`}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>

        {/* Highlighted Views (Reels and Stories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-[var(--color-sanca-dark)] rounded-3xl p-8 flex flex-col items-center shadow-xl relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[var(--color-sanca-orange)] rounded-full blur-3xl opacity-20"></div>
              
              <h3 className="font-heading text-3xl text-white uppercase mb-6 z-10">
                {item.title}
              </h3>
              
              <div className="relative w-full aspect-[9/16] sm:aspect-[3/4] md:aspect-square bg-black/50 rounded-xl overflow-hidden border border-white/10 z-10">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain p-2"
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
