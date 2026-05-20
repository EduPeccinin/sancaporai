"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { PackageOpen, Camera, Video } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-white text-[var(--color-sanca-dark)] overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl md:text-6xl text-[var(--color-sanca-dark)] uppercase">
            Outros Serviços
          </h2>
          <div className="w-24 h-1 bg-[var(--color-sanca-orange)] mx-auto mt-4" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Soluções extras para impulsionar a sua marca na região.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Recebimento de Press Kits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 bg-[var(--color-sanca-light)] p-8 rounded-3xl items-start"
          >
            <div className="bg-white p-4 rounded-2xl shadow-sm shrink-0">
              <PackageOpen className="w-10 h-10 text-[var(--color-sanca-orange)]" />
            </div>
            <div>
              <h3 className="font-heading text-3xl uppercase mb-4">Recebimento de Press Kits</h3>
              <p className="font-sans text-gray-600 mb-4">
                Sua marca quer alcançar um público local, engajado e apaixonado por gastronomia? Enviar um Press Kit é uma ótima oportunidade!
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wider">O que oferecemos</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 font-sans">
                    <li>Divulgação espontânea nos Stories</li>
                    <li>Marcação do perfil da marca</li>
                    <li>Conteúdo autêntico 100% gastronômico</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wider">Condições</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 font-sans">
                    <li>Entrega gratuita no endereço informado</li>
                    <li>Divulgação espontânea baseada em relevância</li>
                    <li>Não garante review no Feed, apenas Stories</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cobertura de Eventos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col md:flex-row gap-8 bg-[var(--color-sanca-light)] p-8 rounded-3xl items-start"
          >
            <div className="bg-white p-4 rounded-2xl shadow-sm shrink-0">
              <Camera className="w-10 h-10 text-[var(--color-sanca-orange)]" />
            </div>
            <div>
              <h3 className="font-heading text-3xl uppercase mb-4">Cobertura de Eventos</h3>
              <p className="font-sans text-gray-600 mb-6">
                Quer que o seu evento ganhe visibilidade antes, durante e depois que ele acontece?
              </p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">1. Divulgação Prévia + Cobertura por Stories</h4>
                  <p className="text-sm text-gray-500 mb-3">Ideal para gerar expectativa e mostrar em tempo real os destaques. Inclui 1 post prévio e cobertura no dia com interações, destaques do ambiente e gastronômicos.</p>
                  <p className="text-xs font-bold text-[var(--color-sanca-orange)] uppercase">Indicado para eventos pontuais, inaugurações, festivais e feiras.</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">2. Pacote Completo (+ Vídeo Pós-Evento)</h4>
                  <p className="text-sm text-gray-500 mb-3">Tudo do pacote anterior + produção de um vídeo pós-evento (formato Reels) com edição dinâmica para impactar antes, durante e depois.</p>
                  <p className="text-xs font-bold text-[var(--color-sanca-orange)] uppercase">Indicado para eventos com grande investimento para repercutir a ação.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vídeo Institucional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-8 bg-[var(--color-sanca-light)] p-8 rounded-3xl items-start"
          >
            <div className="bg-white p-4 rounded-2xl shadow-sm shrink-0">
              <Video className="w-10 h-10 text-[var(--color-sanca-orange)]" />
            </div>
            <div className="w-full">
              <h3 className="font-heading text-3xl uppercase mb-4">Vídeo Institucional</h3>
              <p className="font-sans text-gray-600 mb-6">
                A produção é um processo criativo e estratégico que valoriza a identidade e produtos da sua empresa com profissionalismo. <strong>O vídeo será de uso da contratante e não será divulgado nas redes do Sanca Por Aí.</strong>
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 uppercase text-sm tracking-wider">Etapas de Produção</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 font-sans mb-4">
                    <li>Planejamento e Roteiro</li>
                    <li>Gravação em locações ou estúdio</li>
                    <li>Edição e Pós-produção</li>
                  </ul>
                  <div className="font-heading text-3xl text-[var(--color-sanca-orange)]">
                    R$ 640,00
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl border border-gray-100 text-sm font-sans text-gray-600">
                  <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wider">Uso em Campanhas Patrocinadas</h4>
                  <p className="mb-2">Taxa adicional conforme duração e alcance:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Até 1 mês:</strong> Valor mensal baseado no tempo e público.</li>
                    <li><strong>Acima de 1 mês:</strong> Desconto progressivo oferecido conforme escopo da campanha.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
