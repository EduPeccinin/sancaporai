"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Send } from "lucide-react";

const objetivos = [
  "Divulgação de inauguração",
  "Aumentar movimento do estabelecimento",
  "Divulgação de evento",
  "Lançamento de produto",
  "Fortalecimento da marca",
  "Divulgação sazonal/promocional",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    plano: "",
    dias: "",
    horarios: "",
    instagram: "",
    objetivo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { nome, empresa, plano, dias, horarios, instagram, objetivo } = formData;

    const message = `Olá! Tenho interesse em uma gravação com o Sanca Por Aí.

Nome: ${nome}
Empresa: ${empresa}
Plano desejado: ${plano}
Melhores dias: ${dias}
Melhores horários: ${horarios}
Instagram do estabelecimento: ${instagram}
Objetivo da divulgação: ${objetivo}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5516992312494?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-[var(--color-sanca-dark)] text-white relative">
      {/* Decoração de fundo opcional */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-sanca-orange)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl text-[var(--color-sanca-orange)] uppercase">
            Vem Anunciar Com A Gente!
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto font-sans">
            Preencha o formulário abaixo para nos ajudar a entender melhor o seu negócio e acelerar seu atendimento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="nome" className="block text-sm font-bold uppercase tracking-wider text-gray-300">Seu Nome</label>
                <input required type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-sanca-orange)] transition-colors" placeholder="Ex: João Silva" />
              </div>

              <div className="space-y-2">
                <label htmlFor="empresa" className="block text-sm font-bold uppercase tracking-wider text-gray-300">Nome da Empresa</label>
                <input required type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-sanca-orange)] transition-colors" placeholder="Ex: Restaurante Sabor" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="instagram" className="block text-sm font-bold uppercase tracking-wider text-gray-300">Instagram do Estabelecimento</label>
                <input required type="text" id="instagram" name="instagram" value={formData.instagram} onChange={handleChange} className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-sanca-orange)] transition-colors" placeholder="Ex: @restaurantesabor" />
              </div>

              <div className="space-y-2">
                <label htmlFor="plano" className="block text-sm font-bold uppercase tracking-wider text-gray-300">Plano Desejado (Opcional)</label>
                <input type="text" id="plano" name="plano" value={formData.plano} onChange={handleChange} className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-sanca-orange)] transition-colors" placeholder="Ex: Reels + Stories" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="dias" className="block text-sm font-bold uppercase tracking-wider text-gray-300">Melhores Dias para Gravação</label>
                <input required type="text" id="dias" name="dias" value={formData.dias} onChange={handleChange} className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-sanca-orange)] transition-colors" placeholder="Ex: Terça ou Quarta" />
              </div>

              <div className="space-y-2">
                <label htmlFor="horarios" className="block text-sm font-bold uppercase tracking-wider text-gray-300">Melhores Horários</label>
                <input required type="text" id="horarios" name="horarios" value={formData.horarios} onChange={handleChange} className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-sanca-orange)] transition-colors" placeholder="Ex: 14h às 16h" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="objetivo" className="block text-sm font-bold uppercase tracking-wider text-gray-300">Objetivo da Divulgação</label>
              <select required id="objetivo" name="objetivo" value={formData.objetivo} onChange={handleChange} className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-sanca-orange)] transition-colors appearance-none">
                <option value="" disabled>Selecione um objetivo</option>
                {objetivos.map((obj, idx) => (
                  <option key={idx} value={obj}>{obj}</option>
                ))}
              </select>
            </div>

            <div className="pt-6">
              <Button type="submit" size="lg" className="w-full text-lg h-14">
                <Send className="w-5 h-5 mr-2" />
                Enviar para o WhatsApp
              </Button>
              <p className="text-center text-xs text-gray-500 mt-4 font-sans">
                Você será redirecionado para o nosso WhatsApp para continuar o atendimento.
              </p>
            </div>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
