"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { MessageSquare, Quote } from "lucide-react";

const testimonials = [
  {
    client: "Conecta Horti",
    type: "WhatsApp",
    text: "Olá, Thalyta! Bom dia! Tudo bem?\n\nQueremos agradecer pelo vídeo que vocês fizeram, ajudou muito na divulgação da empresa e conseguimos muitos clientes novos.\n\nTemos o costume de realizar um pós-venda para saber se foi tudo certo com o pedido e recebemos muitos feedbacks positivos, com elogios aos produtos e ao atendimento!\n\nO alcance de vocês é sensacional! Muito obrigada!❤️❤️❤️❤️",
  },
  {
    client: "Salsicha's Hotdogueria",
    type: "WhatsApp",
    text: "muito pedido... sem condição de atender todo mundo\n\nse continuar assim iremos ter que fazer outra cozinha",
  },
  {
    client: "Botelho Bar",
    type: "WhatsApp",
    text: "João do céu meu deus vocês fazem milagre não é possível irmão\n\n8 meses tentando de todas as formas levarem público naquele bar e hoje dispensei mais de 30 pessoas por falta de lugar. Lotou a casa. Isso pq vocês postaram as 5 horas da tarde. Cara foi loucura de mais obrigado por TD aí",
  },
  {
    client: "Rei dos Lanches",
    type: "WhatsApp",
    text: "Manoooo\n\nOntem simplesmente batemos recorde\n\nFoi muito bom, sorte que estávamos bem preparados e foi redondinho\n\nVocês estão de parabéns, métricas de engajamento muuuuito bom",
  },
  {
    client: "Dra. Gabrielli Colassanto",
    type: "Feedback Oficial",
    text: "O trabalho do SancaPorAi foi impecável em relação ao consultório! Consegui receber muitas pessoas interessadas em meu trabalho! Percebi isso no aumento do número de seguidores que foi algo em torno de 500-600 dentro do período que estivemos em tratamento! Além dos novos pacientes e das avaliações que surgiram vindas diretamente do vídeo!\n\nObservei também que vários pacientes comentam que acompanharam a conta e que gostaram muito do que viram no perfil!\n\nSem dúvidas foi um resultado muito maior do que o esperado e de imensa gratidão!",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white text-[var(--color-sanca-dark)] overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl md:text-6xl text-[var(--color-sanca-dark)] uppercase">
            Depoimentos Reais
          </h2>
          <div className="w-24 h-1 bg-[var(--color-sanca-orange)] mx-auto mt-4" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Feedbacks de parceiros que viram suas vendas, seguidores e movimento explodirem após anunciarem conosco.
          </p>
        </motion.div>

        {/* Masonry-like Grid for Desktop, stack for mobile */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 [column-fill:_balance] w-full">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid-column bg-[var(--color-sanca-light)] rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative flex flex-col"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute right-6 top-6 opacity-10">
                <Quote className="w-10 h-10 text-[var(--color-sanca-orange)]" />
              </div>

              {/* Chat-style Bubble Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-sanca-orange)]/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-[var(--color-sanca-orange)]" />
                </div>
                <div>
                  <h4 className="font-heading text-xl text-gray-900 tracking-wide">
                    {t.client}
                  </h4>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-gray-400 bg-gray-200/50 px-2 py-0.5 rounded-full">
                    {t.type}
                  </span>
                </div>
              </div>

              {/* Message text with whitespace parsing */}
              <p className="font-sans text-gray-700 text-sm leading-relaxed whitespace-pre-line italic">
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
