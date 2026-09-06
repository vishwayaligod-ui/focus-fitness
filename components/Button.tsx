import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "focus-outline group relative inline-flex items-center gap-3 overflow-hidden px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-500";

  const styles = {
    primary:
      "bg-ember text-ink hover:shadow-[0_0_40px_-6px_rgba(255,77,28,0.7)] hover:-translate-y-0.5",
    secondary:
      "border border-bone/30 text-bone hover:border-ember hover:text-ember",
    ghost: "text-bone hover:text-ember",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {content}
    </Link>
  );
}
