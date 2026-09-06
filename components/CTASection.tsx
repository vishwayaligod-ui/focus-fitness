import Image from "next/image";
import Button from "./Button";
import Reveal from "./Reveal";

export default function CTASection({
  eyebrow = "Ready To Get Focused?",
  title = "Your Strongest Chapter Starts Today.",
  subtitle = "Book a free trial session and experience Focus Fitness for yourself.",
  image = "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2000&q=80",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-28">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-br from-crimson/10 via-transparent to-transparent" />
      <div className="grain-overlay" />
      <div className="container-fluid relative z-10 text-center">
        <Reveal>
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h2 className="big-heading mx-auto max-w-4xl text-[2.85rem] leading-[0.94] text-bone md:text-7xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[13px] leading-6 text-ash md:mt-6 md:text-base">
            {subtitle}
          </p>
          <div className="mt-8 flex justify-center md:mt-10">
            <Button href="/membership" variant="primary">
              Start Free Trial
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
