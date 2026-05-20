"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import Image from "next/image";

export function BeforeAndAfterSection() {
  const images = [
    "/images/social-proof/antesedepois 1.png",
    "/images/social-proof/antesedepois 2.png",
    "/images/social-proof/antesedepois 3.png",
    "/images/social-proof/antesedepois 4.png",
  ];

  return (
    <section className="py-24 bg-[var(--color-sanca-dark)] text-white overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl md:text-6xl text-[var(--color-sanca-orange)] uppercase">
            Antes e Depois
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mt-4" />
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto font-sans">
            O impacto real do nosso trabalho nas contas dos clientes. Crescimento, alcance e resultados expressivos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900 group"
            >
              <Image
                src={src}
                alt={`Resultado e crescimento ${index + 1}`}
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Gradient overlay for better blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
