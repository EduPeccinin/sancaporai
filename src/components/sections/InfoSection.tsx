"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, Camera, FileText } from "lucide-react";
import { Container } from "../ui/Container";

export function InfoSection() {
  return (
    <section id="informacoes" className="bg-white py-24 text-[var(--color-sanca-dark)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="font-sans text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-sanca-orange)]">
            Informações comerciais
          </p>
          <h2 className="mt-3 font-heading text-5xl uppercase md:text-7xl">
            Combinados importantes
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard icon={<AlertCircle />} title="Prazos e pagamentos">
            <li>Pagamento no ato da gravação.</li>
            <li>PIX, dinheiro, débito ou crédito em até 3x.</li>
            <li>Prazo de postagem do Reels entre 25 e 35 dias após a gravação.</li>
            <li>Todos os posts possuem valores dos serviços e produtos.</li>
            <li>Comentários do público são de responsabilidade da própria dinâmica da rede.</li>
          </InfoCard>

          <InfoCard dark icon={<Camera />} title="Uso de imagem">
            <li>Conteúdos com imagem ou voz de João ou Thalyta possuem regras de uso.</li>
            <li>Materiais produzidos pela página são de uso exclusivo do Sanca Por Aí.</li>
            <li>Veiculação sem autorização pode gerar medidas cabíveis.</li>
          </InfoCard>

          <InfoCard icon={<FileText />} title="Cobranças adicionais">
            <li>Uso em tráfego pago.</li>
            <li>Exibição em estabelecimentos físicos.</li>
            <li>Exibição em mídias offline, como outdoor e painéis de LED.</li>
            <li>Deslocamento fora de São Carlos e Ibaté pode ter taxa adicional.</li>
          </InfoCard>
        </div>
      </Container>
    </section>
  );
}

function InfoCard({
  title,
  icon,
  children,
  dark,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg p-7 shadow-sm ${
        dark
          ? "bg-[var(--color-sanca-dark)] text-white"
          : "border border-gray-100 bg-[var(--color-sanca-light)] text-[var(--color-sanca-dark)]"
      }`}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-sanca-orange)] text-white">
        {icon}
      </div>
      <h3 className="font-heading text-3xl uppercase">{title}</h3>
      <ul className={`mt-5 list-disc space-y-3 pl-5 font-sans text-sm leading-relaxed ${dark ? "text-white/72" : "text-gray-600"}`}>
        {children}
      </ul>
    </motion.article>
  );
}
