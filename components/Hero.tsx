import Image from "next/image";
import Button from "./Button";
import { siteConfig } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-ink pt-28 md:pt-32">
      <Image
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=85"
        alt="Athlete lifting heavy weight in dramatic gym lighting at Focus Fitness"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-105"
      />
      {/* cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-rust/25" />
      <div className="grain-overlay" />

      {/* editorial vertical marquee, desktop only */}
      <div className="pointer-events-none absolute right-8 top-0 z-10 hidden h-full items-center lg:flex">
        <span
          className="whitespace-nowrap text-xs uppercase tracking-[0.5em] text-bone/40 animate-fadeUp"
          style={{
            writingMode: "vertical-rl",
            animationDelay: "0.9s",
            opacity: 0,
          }}
        >
          Train · Stronger · Live Better
        </span>
      </div>

      <div className="container-fluid relative z-10 w-full pb-16 md:pb-24">
        <p className="eyebrow mb-6 animate-fadeUp" style={{ animationDelay: "0.1s", opacity: 0 }}>
          #1 Gym in New Sangavi, Pune
        </p>

        <h1 className="big-heading text-bone">
          <span
            className="block text-[15vw] leading-[0.88] md:text-[8.5vw] animate-fadeUp"
            style={{ animationDelay: "0.25s", opacity: 0 }}
          >
            Stronger
          </span>
          <span
            className="block text-[15vw] leading-[0.88] md:text-[8.5vw] text-transparent animate-fadeUp"
            style={{
              WebkitTextStroke: "1.5px #f4efe9",
              animationDelay: "0.4s",
              opacity: 0,
            }}
          >
            Than
          </span>
          <span
            className="block text-[15vw] leading-[0.88] md:text-[8.5vw] text-ember animate-fadeUp"
            style={{ animationDelay: "0.55s", opacity: 0 }}
          >
            Yesterday.
          </span>
        </h1>

        <div
          className="mt-10 flex flex-col gap-6 md:mt-14 md:flex-row md:items-end md:justify-between animate-fadeUp"
          style={{ animationDelay: "0.75s", opacity: 0 }}
        >
          <p className="max-w-md text-sm leading-relaxed text-ash md:text-base">
            A premium strength &amp; performance studio in {siteConfig.city}.
            Modern equipment, expert coaching, and a community built to make
            you better than you were yesterday.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/membership" variant="primary">
              Start Free Trial
            </Button>
            <Button href="/facilities" variant="secondary">
              Watch Video
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="h-10 w-px animate-pulse bg-bone/40" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-ash">
          Scroll
        </span>
      </div>
    </section>
  );
}
