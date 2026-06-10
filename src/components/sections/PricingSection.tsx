"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, PlusCircle } from "lucide-react";
import { Container } from "../ui/Container";
import { getSancaWhatsappUrl } from "@/lib/contact";

const plans = [
  {
    name: "Plano Reels",
    description: "Produção no estabelecimento ou retirada do produto, mostrando produtos, ambiente e diferenciais.",
    features: ["Gravação no local ou retirada", "Narração e edição", "Legenda com detalhes e promoções", "Foco em desejo e curiosidade"],
    addon: "Story ao vivo pode ser combinado como complemento do plano",
  },
  {
    name: "Reels em Dobro",
    description: "Duas postagens no feed para ampliar alcance, consistência e impacto da campanha.",
    features: ["1 reels principal", "1 reels extra com trend ou oferta", "Combinação do melhor momento de postagem", "Mais presença no feed"],
    addon: "Story ao vivo pode ser combinado como complemento do plano",
    featured: true,
  },
  {
    name: "Plano Story",
    description: "Vídeo curto de até 1 minuto, no ar por 24 horas, com média de 6 a 10 mil visualizações.",
    features: ["Gravação e edição premium", "Pode entrar nos destaques", "Bom para ações rápidas", "Perfeito para promoções pontuais"],
  },
  {
    name: "Plano Carrossel",
    description: "Até 10 imagens alternando produtos principais, ambiente e informações comerciais.",
    features: ["Fotos dos produtos", "Visita ou retirada", "Legenda estratégica", "Até 2.200 caracteres"],
  },
];

export function PricingSection() {
  return (
    <section id="planos" className="bg-[var(--color-sanca-light)] py-24 text-[var(--color-sanca-dark)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="font-sans text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-sanca-orange)]">
            Planos
          </p>
          <h2 className="mt-3 font-heading text-5xl uppercase md:text-7xl">
            Formatos comerciais para diferentes momentos da marca
          </h2>
          <p className="mt-5 font-sans text-lg leading-relaxed text-gray-600">
            Pontual, recorrente, lançamento, evento ou produto novo: a escolha do formato depende do objetivo da divulgação.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className={`flex min-h-full flex-col rounded-lg border-2 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 ${
                plan.featured ? "border-[var(--color-sanca-orange)]" : "border-transparent"
              }`}
            >
              {plan.featured && (
                <span className="mb-4 w-fit rounded-md bg-[var(--color-sanca-orange)] px-3 py-1 font-sans text-xs font-bold uppercase tracking-wide text-white">
                  Mais escolhido
                </span>
              )}
              <h3 className="font-heading text-4xl uppercase">{plan.name}</h3>
              <p className="mt-3 min-h-20 font-sans text-sm leading-relaxed text-gray-600">
                {plan.description}
              </p>
              <div className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3 font-sans text-sm text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-sanca-orange)]" />
                    {feature}
                  </div>
                ))}
              </div>

              {plan.addon && (
                <div className="mt-6 rounded-lg bg-[var(--color-sanca-light)] p-4 font-sans text-sm font-semibold text-gray-700">
                  <PlusCircle className="mb-2 h-5 w-5 text-[var(--color-sanca-orange)]" />
                  {plan.addon}
                </div>
              )}

              <div className="mt-6 grid gap-3">
                <Link
                  href="/contato"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-black px-5 font-heading text-lg uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-sanca-orange)]"
                >
                  Vamos conversar
                </Link>
                <a
                  href={getSancaWhatsappUrl(`Olá! Gostaria de conversar sobre o ${plan.name} do Sanca Por Aí.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-black/10 bg-[var(--color-sanca-light)] px-5 font-heading text-lg uppercase tracking-wide text-black transition-colors hover:border-[var(--color-sanca-orange)] hover:text-[var(--color-sanca-orange)]"
                >
                  WhatsApp
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
