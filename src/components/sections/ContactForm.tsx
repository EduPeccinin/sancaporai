"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AtSign, Mail, Send, MessageCircle } from "lucide-react";

const objetivos = [
  "Aumentar movimento",
  "Aumentar pedidos",
  "Fortalecer a marca",
  "Divulgação de evento",
  "Lançamento",
  "Outro",
];

const initialForm = {
  nome: "",
  empresa: "",
  email: "",
  whatsapp: "",
  instagram: "",
  faturamento: "",
  objetivo: "",
  objetivoOutro: "",
  marketingAtual: "",
  investimentoMensal: "",
  desafio: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const objetivoFinal =
      formData.objetivo === "Outro" && formData.objetivoOutro
        ? `Outro: ${formData.objetivoOutro}`
        : formData.objetivo;

    const message = `Olá! Gostaria de conversar sobre divulgação com o Sanca Por Aí.

Nome: ${formData.nome}
Empresa: ${formData.empresa}
E-mail: ${formData.email}
WhatsApp: ${formData.whatsapp}
Instagram: ${formData.instagram}
Faturamento médio mensal: ${formData.faturamento}
Principal objetivo: ${objetivoFinal}
Investimento atual em marketing: ${formData.marketingAtual}
Investimento mensal destinado ao marketing: ${formData.investimentoMensal}
Maior desafio do negócio: ${formData.desafio}

Aguardo o retorno da equipe.`;

    window.open(`https://wa.me/5516992312494?text=${encodeURIComponent(message)}`, "_blank");
  };

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 font-sans text-white outline-none transition-colors placeholder:text-white/35 focus:border-[var(--color-sanca-orange)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
    >
      <aside className="space-y-7">
        <div>
          <p className="font-sans text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-sanca-orange)]">
            Contato
          </p>
          <h1 className="mt-3 font-heading text-6xl uppercase leading-none text-white md:text-8xl">
            Vamos conversar sobre divulgação
          </h1>
        </div>
        <p className="font-sans text-lg leading-relaxed text-white/72">
          Conte um pouco sobre seu negócio e seus objetivos atuais. Assim conseguimos entender melhor o momento da sua marca e conversar sobre a melhor forma de divulgação com o Sanca Por Aí.
        </p>
        <p className="font-sans text-base leading-relaxed text-white/64">
          Se preferir, você também pode entrar em contato diretamente pelo nosso WhatsApp ou e-mail.
        </p>
        <div className="space-y-3 font-sans text-sm font-semibold text-white">
          <a className="flex items-center gap-3 rounded-lg border border-white/10 p-4 transition-colors hover:bg-white/10" href="https://wa.me/5516992312494" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5 text-[var(--color-sanca-orange)]" />
            +55 16 99231-2494
          </a>
          <a className="flex items-center gap-3 rounded-lg border border-white/10 p-4 transition-colors hover:bg-white/10" href="mailto:contatosancaporai@gmail.com">
            <Mail className="h-5 w-5 text-[var(--color-sanca-orange)]" />
            contatosancaporai@gmail.com
          </a>
          <a className="flex items-center gap-3 rounded-lg border border-white/10 p-4 transition-colors hover:bg-white/10" href="https://www.instagram.com/sancaporai/" target="_blank" rel="noopener noreferrer">
            <AtSign className="h-5 w-5 text-[var(--color-sanca-orange)]" />
            @sancaporai
          </a>
        </div>
      </aside>

      <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-white/[0.06] p-6 backdrop-blur md:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Seu nome" name="nome" value={formData.nome} onChange={handleChange} className={inputClass} />
          <Field label="Nome da empresa" name="empresa" value={formData.empresa} onChange={handleChange} className={inputClass} />
          <Field label="Melhor e-mail" name="email" type="email" value={formData.email} onChange={handleChange} className={inputClass} />
          <Field label="WhatsApp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className={inputClass} />
          <Field label="Instagram do estabelecimento" name="instagram" value={formData.instagram} onChange={handleChange} className={inputClass} placeholder="@seunegocio" />

          <Select label="Qual o faturamento médio mensal da empresa?" name="faturamento" value={formData.faturamento} onChange={handleChange} className={inputClass} options={["Até R$ 30 mil", "De R$ 30 mil a R$ 80 mil", "De R$ 80 mil a R$ 170 mil", "Acima de R$ 170 mil"]} />
          <Select label="Qual o principal objetivo da divulgação?" name="objetivo" value={formData.objetivo} onChange={handleChange} className={inputClass} options={objetivos} />
          <Select label="Você já investe em marketing atualmente?" name="marketingAtual" value={formData.marketingAtual} onChange={handleChange} className={inputClass} options={["Não", "Um pouco", "Sim, de forma estruturada"]} />
          <Select label="Qual seria o investimento mensal destinado ao marketing?" name="investimentoMensal" value={formData.investimentoMensal} onChange={handleChange} className={inputClass} options={["Até R$ 1.000", "De R$ 1.000 a R$ 4.000", "Acima de R$ 4.000", "Ainda não definido"]} />
        </div>

        {formData.objetivo === "Outro" && (
          <div className="mt-5">
            <Field label="Conte qual é o objetivo" name="objetivoOutro" value={formData.objetivoOutro} onChange={handleChange} className={inputClass} required />
          </div>
        )}

        <div className="mt-5">
          <label htmlFor="desafio" className="mb-2 block font-sans text-sm font-bold uppercase tracking-wide text-white/72">
            Qual o maior desafio do negócio atualmente?
          </label>
          <textarea required id="desafio" name="desafio" value={formData.desafio} onChange={handleChange} rows={5} className={inputClass} />
        </div>

        <button type="submit" className="mt-7 inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-sanca-orange)] px-8 font-heading text-xl uppercase tracking-wide text-white transition-transform hover:-translate-y-1">
          <Send className="h-5 w-5" />
          Enviar pelo WhatsApp
        </button>
      </form>
    </motion.div>
  );
}

function Field({
  label,
  className,
  required = true,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label htmlFor={props.name} className="mb-2 block font-sans text-sm font-bold uppercase tracking-wide text-white/72">
        {label}
      </label>
      <input required={required} id={props.name} className={className} {...props} />
    </div>
  );
}

function Select({
  label,
  options,
  className,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={props.name} className="mb-2 block font-sans text-sm font-bold uppercase tracking-wide text-white/72">
        {label}
      </label>
      <select required id={props.name} className={className} {...props}>
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
