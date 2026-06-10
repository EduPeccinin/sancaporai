import { getSancaWhatsappUrl } from "@/lib/contact";
import { WhatsAppLogo } from "./WhatsAppLogo";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={getSancaWhatsappUrl("Olá! Gostaria de conversar sobre divulgação com o Sanca Por Aí.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chamar o Sanca Por Aí no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl ring-4 ring-white/85 transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-sanca-orange)]"
    >
      <WhatsAppLogo className="h-11 w-11 bg-transparent" />
    </a>
  );
}
