"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import Image from "next/image";

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[var(--color-sanca-dark)] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image 
          src="/images/about/joao-thalyta-principal.jpeg" 
          alt="Sanca Por Aí Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-sanca-dark)] via-[var(--color-sanca-dark)]/80 to-transparent" />

      <Container className="relative z-10 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-heading text-6xl md:text-8xl tracking-wider text-[var(--color-sanca-orange)] mb-4 uppercase drop-shadow-xl">
            Sanca Por Aí
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="font-sans text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-200 drop-shadow-md">
            Muito mais que um perfil, a vitrine definitiva para a gastronomia de São Carlos e região.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" onClick={scrollToContact}>
            Solicitar Orçamento
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
