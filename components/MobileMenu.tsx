"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/data";
import { siteConfig, whatsappLink } from "@/lib/config";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-navigation"
      className={`fixed inset-0 z-50 lg:hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 h-full w-full bg-ink/80 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`absolute right-0 top-0 flex h-[100svh] w-[min(88vw,420px)] flex-col overflow-hidden border-l border-bone/10 bg-[#0b0b0b] shadow-2xl transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 grain-overlay opacity-30" aria-hidden="true" />

        <div className="relative flex h-full flex-col px-6 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-6">
          <div className="flex items-center justify-between border-b border-bone/10 pb-5">
            <Link
              href="/"
              onClick={onClose}
              className="focus-outline font-display text-xl uppercase tracking-tight text-bone"
            >
              Focus<span className="text-ember">Fitness</span>
            </Link>

            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="focus-outline flex h-11 w-11 items-center justify-center rounded-full border border-bone/15 text-2xl leading-none text-bone transition-colors hover:border-ember hover:text-ember"
            >
              ×
            </button>
          </div>

          <div className="mt-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ember">
            <span className="h-px w-8 bg-ember" />
            Navigate
          </div>

          <nav className="mt-5 flex flex-col" aria-label="Mobile navigation links">
            {navigationItems.map((item, index) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`focus-outline group flex items-center justify-between border-b border-bone/10 py-4 font-display text-[2.05rem] uppercase leading-none transition-all duration-300 sm:text-[2.3rem] ${
                    active ? "text-ember" : "text-bone hover:pl-2 hover:text-ember"
                  }`}
                  style={{ transitionDelay: open ? `${index * 45}ms` : "0ms" }}
                >
                  <span>{item.label}</span>
                  <span
                    className={`font-sans text-base transition-transform duration-300 ${
                      active ? "translate-x-0 text-ember" : "-translate-x-2 opacity-40 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto space-y-4 border-t border-bone/10 pt-5">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              onClick={onClose}
              className="focus-outline flex w-full items-center justify-between bg-ember px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-ink transition-transform duration-300 active:scale-[0.98]"
            >
              <span>Message on WhatsApp</span>
              <span aria-hidden="true">↗</span>
            </a>

            <Link
              href="/membership"
              onClick={onClose}
              className="focus-outline flex w-full items-center justify-between border border-bone/15 px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-bone transition-colors hover:border-ember hover:text-ember"
            >
              <span>Start Free Trial</span>
              <span aria-hidden="true">→</span>
            </Link>

            <div className="flex items-end justify-between gap-5 pt-1">
              <p className="max-w-[230px] text-[10px] uppercase leading-relaxed tracking-[0.16em] text-ash">
                {siteConfig.location}
              </p>
              <span className="font-display text-3xl text-bone/10" aria-hidden="true">
                FF
              </span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
