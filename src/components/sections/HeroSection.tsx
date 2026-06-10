"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const stats = [
  { value: "+97 mil", label: "seguidores fiéis" },
  { value: "+300 mil", label: "contas alcançadas por mês" },
  { value: "+2,5 mi", label: "impressões mensais" },
];

const gifs = [
  "/images/motion/hero-1.gif",
  "/images/motion/hero-2.gif",
  "/images/motion/hero-3.gif",
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[var(--color-sanca-dark)] py-24 text-white">
      <div className="absolute inset-0 opacity-35">
        <Image
          src="/images/about/joao-thalyta-secundaria-2.jpeg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-sanca-dark)] via-[var(--color-sanca-dark)]/82 to-black/20" />

      <Container className="relative z-10 mt-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-4 flex flex-col items-center md:mt-6"
        >
          <h1 className="sr-only">Sanca Por Aí</h1>
          <div className="p-2">
            <Image
              src="/images/brand/logo-sanca.svg"
              alt="Sanca Por Aí"
              width={520}
              height={520}
              priority
              className="h-auto w-[min(88vw,470px)] md:w-[580px]"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-0 max-w-3xl font-sans text-xl leading-relaxed text-gray-100 drop-shadow-md md:mt-1 md:text-2xl"
        >
          Conteúdo que gera desejo para o seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/contato"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-[var(--color-sanca-orange)] px-8 font-heading text-xl uppercase tracking-wide text-white transition-transform hover:-translate-y-1"
          >
            Quero divulgar meu negócio
          </Link>
          <a
            href="https://www.instagram.com/sancaporai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-lg border border-white/25 px-8 font-heading text-xl uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
          >
            Ver Instagram
          </a>
        </motion.div>

        <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/10 bg-black/35 p-4 backdrop-blur">
              <strong className="block font-heading text-4xl text-[var(--color-sanca-orange)]">
                {stat.value}
              </strong>
              <span className="font-sans text-xs font-bold uppercase tracking-wide text-white/75">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45 }}
          className="mt-10 flex justify-center gap-4 md:gap-6"
        >
          {gifs.map((src, index) => (
            <div
              key={src}
              className={`h-24 w-24 overflow-hidden rounded-full border-4 bg-black shadow-2xl md:h-32 md:w-32 ${
                index === 1 ? "border-[var(--color-sanca-orange)]" : "border-white/85"
              }`}
            >
              <Image
                src={src}
                alt=""
                width={128}
                height={128}
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
