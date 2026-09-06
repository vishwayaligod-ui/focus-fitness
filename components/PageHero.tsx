import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative flex h-[62vh] min-h-[420px] w-full items-end overflow-hidden bg-ink pt-24 md:pt-28">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-rust/15 via-transparent to-transparent" />
      <div className="grain-overlay" />
      <div className="container-fluid relative z-10 pb-14">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="big-heading text-5xl text-bone md:text-8xl">{title}</h1>
        {subtitle && (
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-ash md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
