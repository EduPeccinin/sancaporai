import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Contato | Sanca Por Aí",
  description: "Converse com o Sanca Por Aí sobre divulgação para o seu negócio gastronômico.",
};

export default function ContatoPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--color-sanca-dark)] text-white">
      <div className="absolute inset-0 opacity-18">
        <Image
          src="/images/motion/hero-1.gif"
          alt=""
          fill
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#111_0%,rgba(17,17,17,.96)_45%,rgba(17,17,17,.82)_100%)]" />

      <Container className="relative z-10 py-8">
        <Link href="/" className="inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wide text-white/70 transition-colors hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Voltar para o site
        </Link>
      </Container>

      <Container className="relative z-10 pb-20 pt-10">
        <ContactForm />
      </Container>
    </main>
  );
}
