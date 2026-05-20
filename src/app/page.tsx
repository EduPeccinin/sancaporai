import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SegmentsSection } from "@/components/sections/SegmentsSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { BeforeAndAfterSection } from "@/components/sections/BeforeAndAfterSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { InfoSection } from "@/components/sections/InfoSection";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <SegmentsSection />
      <MetricsSection />
      <BeforeAndAfterSection />
      <TestimonialsSection />
      <PricingSection />
      <ServicesSection />
      <InfoSection />
      <ContactForm />

      {/* Footer Simples */}
      <footer className="bg-black py-12 text-center text-gray-400">
        <p className="font-sans text-sm">
          © {new Date().getFullYear()} Sanca Por Aí. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
