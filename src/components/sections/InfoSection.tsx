"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { AlertCircle, FileText, Camera } from "lucide-react";

export function InfoSection() {
  return (
    <section id="informacoes" className="py-24 bg-gray-50 text-[var(--color-sanca-dark)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl md:text-6xl text-[var(--color-sanca-dark)] uppercase">
            Informações Importantes
          </h2>
          <div className="w-24 h-1 bg-[var(--color-sanca-orange)] mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informações Gerais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full"
          >
            <AlertCircle className="w-10 h-10 text-[var(--color-sanca-orange)] mb-6" />
            <h3 className="font-heading text-2xl uppercase mb-6 tracking-wide">Prazos e Pagamentos</h3>
            <ul className="space-y-4 font-sans text-gray-600 text-sm list-disc list-inside flex-1">
              <li>O pagamento deve ser feito no ato da gravação.</li>
              <li><strong>Formas de Pagamento:</strong> PIX, Dinheiro, Débito ou Crédito em até 3x.</li>
              <li>O prazo de postagem do Reels é de 25 e 35 dias após a gravação.</li>
              <li>O vídeo para aprovação só será enviado no dia que foi combinado a postagem.</li>
              <li>Todos os posts obrigatoriamente possuem os valores sobre os serviços e produtos.</li>
              <li>Não nos responsabilizamos por comentários e críticas negativas no vídeo.</li>
            </ul>
          </motion.div>

          {/* Cobranças Adicionais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full"
          >
            <FileText className="w-10 h-10 text-[var(--color-sanca-orange)] mb-6" />
            <h3 className="font-heading text-2xl uppercase mb-6 tracking-wide text-[var(--color-sanca-orange)]">Atenção (Cobranças Extras)</h3>
            <div className="space-y-4 font-sans text-gray-600 text-sm flex-1">
              <p>Haverá cobrança extra dependendo do tempo de exibição e do local onde será exibido o material produzido pela equipe Sanca Por Aí, tais como:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Uso orgânico do conteúdo nas redes sociais;</li>
                <li>Tráfego pago;</li>
                <li>Exibição em estabelecimentos físicos;</li>
                <li>Exibição em mídias offline (outdoor, painéis de LED, etc).</li>
              </ul>
              <p className="mt-4">
                <strong>Deslocamento:</strong> Caso a cidade para gravação seja diferente de São Carlos e Ibaté, será cobrada uma taxa adicional de combustível.
              </p>
            </div>
          </motion.div>

          {/* Uso de Imagem */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 bg-[var(--color-sanca-dark)] text-white rounded-3xl shadow-xl flex flex-col h-full"
          >
            <Camera className="w-10 h-10 text-[var(--color-sanca-orange)] mb-6" />
            <h3 className="font-heading text-2xl uppercase mb-6 tracking-wide text-white">Uso de Imagem (Direitos)</h3>
            <div className="space-y-4 font-sans text-gray-300 text-sm leading-relaxed flex-1">
              <p>
                O uso de qualquer conteúdo produzido pela página Sanca Por Aí, contendo a imagem e/ou semelhança de João ou Thalyta, seja em formato de vídeo ou imagem, está sujeito ao pagamento de uma taxa mensal pelo "Uso de Imagem".
              </p>
              <p>
                Os materiais produzidos (fotos e vídeos) são de uso exclusivo da página Sanca Por Aí.
              </p>
              <p className="text-red-300 font-bold mt-4 bg-red-950/30 p-3 rounded-lg border border-red-900/50">
                A veiculação do conteúdo sem a devida autorização ou pagamento constituirá violação dos direitos de imagem (Art. 20 da Lei nº 9.610/98), podendo resultar em medidas legais cabíveis.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
