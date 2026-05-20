"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-[var(--color-sanca-light)] text-[var(--color-sanca-dark)] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-heading text-5xl md:text-6xl text-[var(--color-sanca-orange)] uppercase">
                Quem Somos
              </h2>
              <div className="w-20 h-2 bg-[var(--color-sanca-orange)] rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg font-sans leading-relaxed text-gray-700">
              <p>
                O <strong className="text-[var(--color-sanca-orange)] font-bold">Sanca Por Aí</strong> nasceu com o propósito de conectar as melhores experiências gastronômicas de São Carlos e região com um público engajado e apaixonado por novidades.
              </p>
              <p>
                Criado em abril de 2022, hoje o Sanca Por Aí conta com um público fiel de mais de 92 mil seguidores que utilizam a página como referência de busca de entretenimento. Por isso, nosso maior compromisso é agradar o público que nos acompanha, oferecendo dicas que sejam boas e verdadeiras, buscando também ajudar os comerciantes locais a terem uma maior visibilidade na região, apresentando seus produtos de forma natural e verídica.
              </p>
            </div>

            {/* Team Profiles */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Thalyta */}
              <div className="flex items-center space-x-4 bg-white/50 p-4 rounded-xl shadow-sm border border-gray-100 backdrop-blur-sm hover:shadow-md transition-shadow">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[var(--color-sanca-orange)]">
                  <Image
                    src="/images/about/thalyta-principal-1.jpeg"
                    alt="Thalyta Peccinin"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-gray-900">Thalyta</h3>
                  <a href="https://instagram.com/thalytapeccinin" target="_blank" rel="noopener noreferrer" className="text-sm font-sans text-[var(--color-sanca-orange)] hover:underline flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                    @thalytapeccinin
                  </a>
                </div>
              </div>

              {/* João */}
              <div className="flex items-center space-x-4 bg-white/50 p-4 rounded-xl shadow-sm border border-gray-100 backdrop-blur-sm hover:shadow-md transition-shadow">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[var(--color-sanca-orange)]">
                  <Image
                    src="/images/about/joao-principal-1.jpeg"
                    alt="João Gabriel"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-gray-900">João</h3>
                  <a href="https://instagram.com/gabrieljaoo" target="_blank" rel="noopener noreferrer" className="text-sm font-sans text-[var(--color-sanca-orange)] hover:underline flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                    @gabrieljaoo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mt-12 lg:mt-0"
          >
            {/* Decorator element behind image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--color-sanca-orange)]/20 to-transparent rounded-3xl transform rotate-3 z-0"></div>
            
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white bg-white">
              <Image
                src="/images/about/joao-thalyta-secundaria-2.jpeg"
                alt="João e Thalyta - Sanca Por Aí"
                fill
                className="object-cover object-[center_15%] hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* Secondary floating image */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-10 -left-10 w-48 h-48 rounded-xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden md:block bg-white"
            >
              <Image
                src="/images/about/joao-thalyta-secundaria-1.jpeg"
                alt="Sanca Por Aí Moments"
                fill
                className="object-cover object-top hover:scale-110 transition-transform duration-700"
                sizes="192px"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
