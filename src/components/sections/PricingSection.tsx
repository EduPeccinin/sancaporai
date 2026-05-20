"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { CheckCircle2, PlusCircle } from "lucide-react";

const plans = [
  {
    id: "reels",
    name: "Plano Reels",
    price: "R$ 740,00",
    description: "Vamos até o estabelecimento ou retiramos o produto para gravar. Mostramos os produtos, ambiente e diferenciais.",
    features: [
      "Gravação no local ou retirada",
      "Narração profissional e edição",
      "Legenda com detalhes e promoções",
      "Ideal para gerar desejo e curiosidade",
    ],
    addon: {
      name: "Story ao Vivo",
      description: "Postado durante a visita, mostra bastidores e gera antecipação.",
      price: "R$ 1.190,00 (Total)",
    },
    popular: false,
  },
  {
    id: "reels-dobro",
    name: "Plano Reels em Dobro",
    price: "R$ 940,00",
    description: "Mais visibilidade, mais resultado! Duas postagens no feed para ampliar o seu alcance.",
    features: [
      "1 Reels Principal (vídeo completo)",
      "1 Reels Extra (foco em trend/oferta)",
      "Aprovação prévia de todo o material",
      "Maior impacto e consistência",
    ],
    addon: {
      name: "Story ao Vivo",
      description: "Postado durante a visita, mostra bastidores e gera antecipação.",
      price: "R$ 1.390,00 (Total)",
    },
    popular: true,
  },
  {
    id: "story",
    name: "Plano Story",
    price: "R$ 640,00",
    description: "Vídeo curto (até 1 min) que ficará no ar por 24h, com média de 6 a 10 mil visualizações.",
    features: [
      "Padrão premium de gravação e edição",
      "Pode ser inserido nos Destaques (recorrência)",
      "Ideal para quem está começando",
      "Perfeito para promoções por tempo limitado",
    ],
    popular: false,
  },
  {
    id: "carrossel",
    name: "Plano Carrossel",
    price: "R$ 590,00",
    description: "Até 10 imagens intercalando os principais produtos e o ambiente.",
    features: [
      "Visita ao estabelecimento ou retirada",
      "Fotos profissionais dos produtos",
      "Explicação detalhada concentrada na legenda",
      "Até 2.200 caracteres de informações",
    ],
    popular: false,
  },
];

export function PricingSection() {
  const scrollToContact = (planoName: string) => {
    // Optionally set the plan in the contact form
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="planos" className="py-24 bg-[var(--color-sanca-light)] text-[var(--color-sanca-dark)] overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl md:text-6xl text-[var(--color-sanca-dark)] uppercase">
            Nossos Planos
          </h2>
          <div className="w-24 h-1 bg-[var(--color-sanca-orange)] mx-auto mt-4" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Escolha o formato ideal para impulsionar a visibilidade do seu negócio e atrair novos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 flex flex-col shadow-lg border-2 transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular ? "border-[var(--color-sanca-orange)]" : "border-transparent"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-sanca-orange)] text-white font-sans font-bold text-sm px-4 py-1 rounded-full uppercase tracking-wider">
                  Mais Escolhido
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-heading text-3xl uppercase mb-2">{plan.name}</h3>
                <p className="text-gray-500 font-sans text-sm mb-6 min-h-[5.5rem]">{plan.description}</p>
                <div className="font-heading text-4xl text-[var(--color-sanca-orange)]">
                  {plan.price}
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-sanca-orange)] shrink-0 mt-0.5" />
                    <span className="font-sans text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {plan.addon && (
                <div className="mb-8 p-4 bg-[var(--color-sanca-light)] rounded-xl border border-orange-100">
                  <div className="flex items-center gap-2 mb-2 text-[var(--color-sanca-orange)] font-bold text-sm uppercase">
                    <PlusCircle className="w-4 h-4" /> Adicional
                  </div>
                  <h4 className="font-heading text-lg">{plan.addon.name}</h4>
                  <p className="text-xs text-gray-500 mb-2">{plan.addon.description}</p>
                  <div className="font-bold font-sans text-gray-900">{plan.addon.price}</div>
                </div>
              )}

              <button
                onClick={() => scrollToContact(plan.name)}
                className={`w-full py-4 rounded-xl font-heading text-xl uppercase tracking-wider transition-colors ${
                  plan.popular
                    ? "bg-[var(--color-sanca-orange)] text-white hover:bg-orange-600"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Quero este plano
              </button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
