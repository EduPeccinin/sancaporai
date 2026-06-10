"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { getSancaWhatsappUrl } from "@/lib/contact";

export function AboutSection() {
  return (
    <section id="sobre" className="overflow-hidden bg-[var(--color-sanca-light)] py-24 text-[var(--color-sanca-dark)]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <p className="font-sans text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-sanca-orange)]">
              Quem somos
            </p>
            <h2 className="font-heading text-5xl uppercase md:text-7xl">
              Uma página que virou referência para escolher onde comer e sair
            </h2>
            <div className="space-y-5 font-sans text-lg leading-relaxed text-gray-700">
              <p>
                O <strong className="text-[var(--color-sanca-orange)]">Sanca Por Aí</strong> nasceu em abril de 2022 com o propósito de conectar as melhores experiências gastronômicas de São Carlos e região a um público engajado e apaixonado por novidades.
              </p>
              <p>
                Hoje, João Gabriel e Thalyta Peccinin conduzem uma comunidade com mais de 97 mil seguidores que usa a página como referência de entretenimento, gastronomia e descoberta de marcas locais.
              </p>
              <p>
                O compromisso é simples e valioso: indicar experiências boas e verdadeiras, ajudando comerciantes a ganharem visibilidade com conteúdo natural, verídico e visualmente forte.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: "João Gabriel", handle: "@gabrieljaoo", image: "/images/about/joao-principal-1.jpeg", href: "https://instagram.com/gabrieljaoo" },
                { name: "Thalyta Peccinin", handle: "@thalytapeccinin", image: "/images/about/thalyta-principal-1.jpeg", href: "https://instagram.com/thalytapeccinin" },
              ].map((person) => (
                <a
                  key={person.handle}
                  href={person.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm transition-transform hover:-translate-y-1"
                >
                  <span className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[var(--color-sanca-orange)]">
                    <Image src={person.image} alt={person.name} fill className="object-cover object-top" />
                  </span>
                  <span>
                    <strong className="block font-heading text-2xl">{person.name}</strong>
                    <span className="flex items-center gap-1 font-sans text-sm font-semibold text-[var(--color-sanca-orange)]">
                      {person.handle}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <a
              href={getSancaWhatsappUrl("Olá! Gostaria de entender como o Sanca Por Aí pode divulgar meu negócio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-[var(--color-sanca-dark)] px-8 font-heading text-xl uppercase tracking-wide text-white transition-transform hover:-translate-y-1"
            >
              Conversar pelo WhatsApp
              <MessageCircle className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <div className="relative h-[590px] overflow-hidden rounded-lg bg-white shadow-2xl">
              <Image
                src="/images/about/joao-thalyta-principal.jpeg"
                alt="João e Thalyta, criadores do Sanca Por Aí"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
                <p className="max-w-sm font-sans text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                  Autoridade local com rosto, voz e presença
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
