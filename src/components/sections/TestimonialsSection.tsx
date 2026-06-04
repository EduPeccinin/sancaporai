"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "../ui/Container";

const testimonials = [
  {
    name: "Subway e Jah Açaí",
    text: "As divulgações com vocês foram muito positivas pra gente. Na última ação, junto com outros influenciadores, a promoção passou de 1.050 clientes na loja e teve um resultado excelente. Além disso, todas as outras parcerias que já fizemos também tiveram um retorno muito bom.",
  },
  {
    name: "Sorveteria Gela Boca",
    text: "Ter o Sanca Por Aí como parceiro foi umas das decisões mais acertadas da loja, de um jeito descontraído eles conseguem captar a essência do lugar e mostrar as principais qualidades desde o ambiente até os pratos servidos. Depois do sucesso da primeira publicação e o retorno que tivemos com novos clientes, chamamos a Thalyta e o João para toda campanha e lançamento que temos nas lojas.",
  },
  {
    name: "Dra. Gabrielli Colassanto",
    text: "O trabalho do SancaPorAi foi impecável em relação ao consultório! Consegui receber muitas pessoas interessadas em meu trabalho! Percebi isso no aumento do número de seguidores que foi algo em torno de 500-600 dentro do período que estivemos em tratamento! Além dos novos pacientes e das avaliações que surgiram vindas diretamente do vídeo! Observei também que vários pacientes comentam que acompanharam a conta e que gostaram muito do que viram no perfil! Sem dúvidas foi um resultado muito maior do que o esperado e de imensa gratidão!",
  },
];

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-white py-24 text-[var(--color-sanca-dark)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="font-sans text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-sanca-orange)]">
            Depoimentos
          </p>
          <h2 className="mt-3 font-heading text-5xl uppercase md:text-7xl">
            Resultados sentidos por quem já divulgou
          </h2>
          <p className="mt-5 font-sans text-lg leading-relaxed text-gray-600">
            Relatos reais de parceiros que viveram retorno, movimento e reconhecimento após as ações com o Sanca Por Aí.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-lg border border-gray-100 bg-[var(--color-sanca-light)] p-7 shadow-sm"
            >
              <Quote className="mb-6 h-8 w-8 text-[var(--color-sanca-orange)]" />
              <p className="font-sans text-base leading-relaxed text-gray-700">
                “{testimonial.text}”
              </p>
              <strong className="mt-6 block font-heading text-2xl uppercase text-[var(--color-sanca-orange)]">
                {testimonial.name}
              </strong>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
