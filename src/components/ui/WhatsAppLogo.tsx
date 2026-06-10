import Image from "next/image";

export function WhatsAppLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#25D366] ${className}`}>
      <Image
        src="/images/brand/whatsapp-logo.png"
        alt=""
        width={28}
        height={28}
        className="h-[68%] w-[68%] object-contain [filter:brightness(0)_invert(1)]"
      />
    </span>
  );
}
