import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SegmentsSection } from "@/components/sections/SegmentsSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { InfoSection } from "@/components/sections/InfoSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <BrandsSection />
      <AboutSection />
      <SegmentsSection />
      <MetricsSection />
      <TestimonialsSection />
      <PricingSection />
      <ServicesSection />
      <InfoSection />

      <section className="bg-[var(--color-sanca-orange)] px-4 py-16 text-center text-white">
        <p className="font-sans text-sm font-bold uppercase tracking-[0.24em] text-white/80">
          Vamos colocar sua marca na conversa da cidade
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-heading text-5xl uppercase md:text-7xl">
          Quer divulgar seu negócio com o Sanca Por Aí?
        </h2>
        <Link
          href="/contato"
          className="mt-8 inline-flex h-14 items-center justify-center rounded-lg bg-black px-8 font-heading text-xl uppercase tracking-wide text-white transition-transform hover:-translate-y-1"
        >
          Falar com o Sanca Por Aí
        </Link>
      </section>

      <footer className="bg-black py-12 text-center text-gray-400">
        <p className="font-sans text-sm">
          © {new Date().getFullYear()} Sanca Por Aí. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
