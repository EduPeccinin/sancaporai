"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import Image from "next/image";

const portfolioItems = [
  { id: 1, title: "Campanha A", category: "Restaurante", image: "/images/about/joao-thalyta-secundaria-1.jpeg" },
  { id: 2, title: "Campanha B", category: "Bar", image: "/images/about/joao-thalyta-secundaria-2.jpeg" },
  { id: 3, title: "Campanha C", category: "Cafeteria", image: "/images/about/joao-thalyta-secundaria-3.jpeg" },
  { id: 4, title: "Campanha D", category: "Hamburgueria", image: "/images/about/joao-secundaria-1.jpeg" },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-[var(--color-sanca-light)] text-[var(--color-sanca-dark)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl text-[var(--color-sanca-dark)] uppercase">
            Nosso Portfólio
          </h2>
          <div className="w-24 h-1 bg-[var(--color-sanca-orange)] mx-auto mt-4" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Marcas que confiaram no nosso trabalho para alavancar suas vendas e autoridade digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group rounded-2xl overflow-hidden aspect-[4/5] bg-gray-200 cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:via-black/50 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="text-[var(--color-sanca-orange)] font-sans text-sm font-bold tracking-wider uppercase mb-2 block drop-shadow-md">
                  {item.category}
                </span>
                <h3 className="text-white font-heading text-2xl uppercase drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
