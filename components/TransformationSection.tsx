import Image from "next/image";
import Reveal from "./Reveal";
import Button from "./Button";

export default function TransformationSection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2200&q=85"
          alt="Athlete completing a heavy lift, mid-transformation at Focus Fitness"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-crimson/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/60" />
        <div className="grain-overlay" />
      </div>

      <div className="container-fluid relative z-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-6">Transform Your Life</p>
          <h2 className="big-heading text-5xl leading-[0.95] text-bone md:text-7xl">
            The Body Changes.
            <br />
            The Mindset Changes{" "}
            <span className="text-ember">First.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ash">
            Transformation at Focus Fitness isn&apos;t a before-and-after
            photo — it&apos;s the discipline you build session after session,
            the confidence that follows, and the version of yourself that
            shows up ready to keep going.
          </p>
          <div className="mt-10">
            <Button href="/about" variant="secondary">
              Our Approach
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
