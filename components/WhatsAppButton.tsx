import { whatsappLink } from "@/lib/config";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Focus Fitness on WhatsApp"
      className="focus-outline group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-3 z-30 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-110 sm:right-4 md:bottom-8 md:right-8 md:h-14 md:w-14"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-ink md:h-7 md:w-7"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.52 3.68-8.2 8.24-8.2a8.16 8.16 0 0 1 5.82 2.41 8.16 8.16 0 0 1 2.41 5.79c0 4.52-3.68 8.21-8.23 8.21Zm4.5-6.15c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.37-1.7-.14-.24-.02-.37.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.31s-.86.84-.86 2.05.88 2.38 1 2.55c.13.16 1.73 2.65 4.2 3.71.59.25 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
      </svg>
    </a>
  );
}
