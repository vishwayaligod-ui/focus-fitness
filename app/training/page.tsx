import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import { SectionEyebrow, SectionHeading } from "@/components/SectionHeading";
import { trainingPrograms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Explore Focus Fitness training programs — strength training, muscle building, fat loss, personal training, functional training, and women's fitness.",
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Training"
        subtitle="Structured programming for every goal — coached by trainers who know how to get you there."
        image="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=2000&q=80"
        alt="Weight training at Focus Fitness"
      />

      {/* Editorial mosaic — each program is a tall reveal panel, not a card grid.
          Content is visible by default (mobile and tablets have no real hover),
          and becomes a hover-reveal only at lg, where a mouse is reliably present. */}
      <section className="container-fluid py-10 md:py-14">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trainingPrograms.map((program, i) => (
            <Reveal
              key={program.slug}
              delay={i * 60}
              className={i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
            >
              <div
                className={`group relative overflow-hidden bg-graphite ${
                  i === 0 ? "h-[400px] lg:h-[652px]" : "h-[300px]"
                }`}
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out lg:group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10 transition-opacity duration-500 lg:from-ink/90 lg:via-ink/40 lg:to-transparent lg:group-hover:from-ink/95 lg:group-hover:via-ink/60" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <span className="big-heading text-lg text-ember">
                    0{i + 1}
                  </span>
                  <h2
                    className={`big-heading mt-2 text-bone ${
                      i === 0 ? "text-4xl md:text-5xl" : "text-3xl"
                    }`}
                  >
                    {program.title}
                  </h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-ash transition-all duration-500 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                    {program.description}
                  </p>
                  <div className="mt-5 overflow-hidden transition-all duration-500 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-16 lg:group-hover:opacity-100">
                    <Button href="/contact" variant="secondary" className="!py-3 !px-5 text-xs">
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-fluid py-10 text-center md:py-14">
        <Reveal>
          <SectionEyebrow>Not Sure Where To Start?</SectionEyebrow>
          <SectionHeading size="md" className="mx-auto max-w-2xl">
            Our Trainers Will Build A Plan Around You.
          </SectionHeading>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="primary">
              Talk To A Trainer
            </Button>
          </div>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Ready To Get Focused?"
        title="Start Training With Purpose."
      />
    </>
  );
}
