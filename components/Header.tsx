"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationItems } from "@/lib/data";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-bone/10 bg-ink/90 py-3 backdrop-blur-xl"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="container-fluid flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Focus Fitness home"
            className="focus-outline shrink-0 font-display text-[1.15rem] uppercase tracking-tight text-bone sm:text-xl md:text-2xl"
          >
            Focus<span className="text-ember">Fitness</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-9" aria-label="Main navigation">
            {navigationItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`focus-outline group relative text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                    active ? "text-ember" : "text-bone/80 hover:text-bone"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-ember transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/membership" variant="primary" className="!px-5 !py-3 text-xs xl:!px-6">
              Start Free Trial
            </Button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="focus-outline relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-bone/15 bg-ink/40 backdrop-blur-md transition-colors duration-300 hover:border-ember/60 hover:bg-ink/70 lg:hidden"
          >
            <span className="relative block h-4 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-px w-6 bg-bone transition-all duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-4 bg-bone transition-all duration-300 ${
                  menuOpen ? "translate-x-2 opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 right-0 h-px w-6 bg-bone transition-all duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
