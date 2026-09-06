"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { statistics } from "@/lib/data";

function CountUp({
  value,
  suffix,
  size = "md",
}: {
  value: number;
  suffix: string;
  size?: "md" | "xl";
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  const sizeClass =
    size === "xl"
      ? "text-7xl md:text-8xl lg:text-9xl"
      : "text-5xl md:text-6xl";

  return (
    <span ref={ref} className={`big-heading text-bone ${sizeClass}`}>
      {count}
      <span className="text-ember">{suffix}</span>
    </span>
  );
}

export default function StatSection() {
  const [lead, ...rest] = statistics;
  return (
    <section className="relative overflow-hidden border-y border-bone/10 bg-charcoal">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
      </div>
      <div className="relative container-fluid grid gap-0 py-0 md:grid-cols-12 md:items-center md:gap-6">
        {/* featured stat, oversized */}
        <div className="border-b border-bone/10 py-10 md:col-span-5 md:border-b-0 md:border-r md:py-20 md:pr-10">
          <CountUp value={lead.value} suffix={lead.suffix} size="xl" />
          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-ash">
            {lead.label}
          </p>
        </div>

        {/* remaining stats — a divided row-list on mobile (readable at 375px),
            opening into three balanced columns from sm upward */}
        <div className="divide-y divide-bone/10 sm:grid sm:grid-cols-3 sm:gap-6 sm:divide-y-0 md:col-span-7 md:py-20 md:pl-10">
          {rest.map((stat) => (
            <div
              key={stat.label}
              className="flex items-baseline justify-between gap-6 py-6 sm:block sm:py-0"
            >
              <CountUp value={stat.value} suffix={stat.suffix} size="md" />
              <p className="text-right text-[11px] uppercase leading-snug tracking-[0.15em] text-ash sm:mt-2 sm:text-left">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
