import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { SectionEyebrow, SectionHeading } from "@/components/SectionHeading";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Focus Fitness — our mission, our values, and our approach to strength and performance training in Pune.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Focus Fitness"
        subtitle="A gym built on one simple belief: real strength is built one focused, disciplined day at a time."
        image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2000&q=80"
        alt="Focus Fitness gym interior"
      />

      {/* Mission */}
      <section className="container-fluid py-16 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <SectionEyebrow>Our Mission</SectionEyebrow>
            <SectionHeading size="md">
              Help People Become The Strongest Version Of Themselves.
            </SectionHeading>
          </Reveal>
          <Reveal delay={150} className="md:col-span-7 md:col-start-6">
            <p className="text-[17px] leading-8 text-ash">
              Focus Fitness exists to give people in New Sangavi, Pune a
              place to train with real intention. We combine modern
              equipment, expert coaching, and a genuinely supportive
              community so that every member — beginner or advanced — has
              exactly what they need to keep progressing.
            </p>
            <p className="mt-5 text-[17px] leading-8 text-ash">
              We measure success one way: are you stronger than you were
              yesterday? That question drives every program we build and
              every session we coach.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision / image break */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=80"
          alt="Focused athlete mid-lift at Focus Fitness"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="container-fluid absolute inset-0 flex items-center">
          <Reveal className="max-w-2xl">
            <p className="big-heading text-3xl leading-tight text-bone md:text-5xl">
              &ldquo;Our vision is a gym where discipline is shared, progress
              is visible, and every member feels genuinely supported.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="container-fluid mb-14">
          <Reveal>
            <SectionEyebrow>What We Stand For</SectionEyebrow>
            <SectionHeading size="lg">Our Values.</SectionHeading>
          </Reveal>
        </div>
        <div className="container-fluid grid gap-px border-t border-bone/10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal
              key={value.title}
              delay={i * 80}
              className="border-b border-bone/10 py-8 pr-6 sm:border-r"
            >
              <span className="big-heading text-2xl text-ember">
                0{i + 1}
              </span>
              <h3 className="big-heading mt-4 text-2xl text-bone">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ash">
                {value.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Approach / trainers */}
      <section className="container-fluid py-16 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal delay={100} className="order-2 md:order-1">
            <SectionEyebrow>Our Approach</SectionEyebrow>
            <SectionHeading size="md" className="mb-6">
              Coached, Not Just Supervised.
            </SectionHeading>
            <p className="max-w-md text-base leading-relaxed text-ash">
              Our certified trainers work with you to build a plan around
              your goals, correct your technique in real time, and keep you
              accountable to your own progress — not a generic routine off
              the wall.
            </p>
          </Reveal>
          <Reveal className="relative order-1 h-[340px] md:order-2 md:h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1600&q=80"
              alt="Focus Fitness trainer coaching a member"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Join The Community"
        title="Come Train With Us."
        subtitle="Book a free trial and see the Focus Fitness difference for yourself."
      />
    </>
  );
}
