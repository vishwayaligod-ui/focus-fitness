import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-4">{children}</p>;
}

export function SectionHeading({
  children,
  size = "lg",
  className = "",
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const sizes = {
    sm: "text-[2rem] md:text-4xl",
    md: "text-[3.6rem] leading-[0.96] md:text-6xl",
    lg: "text-[2.85rem] leading-[0.94] md:text-7xl",
    xl: "text-[3.35rem] leading-[0.92] md:text-8xl lg:text-9xl",
  };
  return (
    <h2 className={`big-heading text-bone ${sizes[size]} ${className}`}>
      {children}
    </h2>
  );
}
