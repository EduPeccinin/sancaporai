export const SANCA_WHATSAPP_NUMBER = "5516992312494";
export const SANCA_WHATSAPP_DISPLAY = "+55 16 99231-2494";

export function getSancaWhatsappUrl(message = "Olá! Gostaria de conversar sobre divulgação com o Sanca Por Aí.") {
  return `https://wa.me/${SANCA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
