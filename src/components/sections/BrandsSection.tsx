"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const brands = [
  { name: "Bauducco", logo: "/images/brand/bauducco.png" },
  { name: "Coco Bambu", logo: "/images/brand/coco-bambu.png" },
  { name: "Oba Hortifruti", logo: "/images/brand/oba-hortifruti.png" },
  { name: "Havan", logo: "/images/brand/havan.png" },
  { name: "Growth Supplements", logo: "/images/brand/growth-supplements.png" },
  { name: "Senac", logo: "/images/brand/senac.png" },
  { name: "Outback", logo: "/images/brand/outback-steakhouse-seeklogo.png" },
  { name: "99", logo: "/images/brand/99-seeklogo.png" },
  { name: "MRV", logo: "/images/brand/mrv-logo-2019.svg" },
];

export function BrandsSection() {
  return (
    <section className="bg-[var(--color-sanca-dark)] py-20 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
          >
            <p className="font-sans text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-sanca-orange)]">
              Prova social
            </p>
            <h2 className="mt-3 font-heading text-5xl uppercase md:text-7xl">
              Marcas que já passaram pelo Sanca Por Aí
            </h2>
            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-white/70">
              De negócios locais a marcas nacionais, o Sanca Por Aí aproxima produtos, experiências e lançamentos de uma audiência regional pronta para consumir.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group flex h-28 items-center justify-center rounded-lg border border-white/10 bg-white p-5 transition-transform hover:-translate-y-1"
              >
                <Image
                  src={brand.logo}
                  alt={`Logo ${brand.name}`}
                  width={180}
                  height={84}
                  className="max-h-16 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
