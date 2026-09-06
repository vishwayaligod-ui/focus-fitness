import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import StatSection from "@/components/StatSection";
import TransformationSection from "@/components/TransformationSection";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { SectionEyebrow, SectionHeading } from "@/components/SectionHeading";
import { coreBenefits, trainingPrograms, facilities } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatSection />

      {/* Brand introduction */}
      <section className="container-fluid py-10 md:py-16">
        <div className="grid items-start gap-8 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-4">
            <SectionEyebrow>Who We Are</SectionEyebrow>
            <SectionHeading size="md">
              Built For People Who Refuse To Stay The Same.
            </SectionHeading>
          </Reveal>
          <Reveal
            delay={80}
            className="relative hidden h-44 overflow-hidden md:col-span-1 md:col-start-5 md:block"
          >
            <Image
              src={facilities[2].image}
              alt=""
              fill
              sizes="8vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={150} className="md:col-span-6 md:col-start-7">
            <p className="text-[17px] leading-8 text-ash md:text-xl">
              Focus Fitness is a strength and performance studio in New
              Sangavi, Pune — built around one idea: real progress comes from
              consistent, focused work. Modern equipment, expert coaching,
              and a community that holds you to your best, every single day.
            </p>
            <div className="mt-7 md:mt-8">
              <Button href="/about" variant="ghost">
                Our Story →
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Focus Fitness — editorial benefits */}
      <section className="bg-charcoal py-10 md:py-16">
        <div className="container-fluid mb-5 md:mb-8">
          <Reveal>
            <SectionEyebrow>Why Focus Fitness</SectionEyebrow>
            <SectionHeading size="lg">
              Everything You Need.
              <br />
              Nothing You Don&apos;t.
            </SectionHeading>
          </Reveal>
        </div>

        <div className="space-y-px">
          {coreBenefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 80}>
              <div className="group container-fluid grid items-center gap-6 border-t border-bone/10 py-5 md:grid-cols-12 md:gap-8 md:py-8">
                <div className="flex items-baseline gap-6 md:col-span-5">
                  <span className="big-heading text-3xl text-bone/20">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="big-heading text-3xl text-bone md:text-4xl">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-ash">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <div className="relative h-44 overflow-hidden md:col-span-6 md:col-start-7 md:h-56">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Training philosophy */}
      <section className="relative overflow-hidden py-12 md:py-24">
        <div className="container-fluid grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal className="relative h-[380px] md:h-[560px]">
            <Image
              src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&w=1600&q=80"
              alt="Coach guiding an athlete through strength training"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={150}>
            <SectionEyebrow>Our Philosophy</SectionEyebrow>
            <SectionHeading size="md" className="mb-6">
              Train With Purpose.
            </SectionHeading>
            <p className="max-w-md text-base leading-relaxed text-ash">
              We don&apos;t believe in random workouts or generic plans.
              Every session at Focus Fitness is intentional — built on
              proven programming, guided by trainers who study your
              movement, and measured against your own progress, not anyone
              else&apos;s.
            </p>
            <ul className="mt-8 space-y-3 text-sm uppercase tracking-[0.15em] text-bone/80">
              <li className="border-t border-bone/10 py-3">
                Progressive, structured programming
              </li>
              <li className="border-t border-bone/10 py-3">
                Coaching on every lift, every session
              </li>
              <li className="border-t border-bone/10 py-3 border-b">
                Accountability that keeps you consistent
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Facilities preview */}
      <section className="bg-charcoal py-12 md:py-24">
        <div className="container-fluid mb-8 flex flex-col items-start justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <Reveal>
            <SectionEyebrow>Inside The Gym</SectionEyebrow>
            <SectionHeading size="lg">A Space Built To Perform.</SectionHeading>
          </Reveal>
          <Reveal delay={150}>
            <Button href="/facilities" variant="secondary">
              View Facilities
            </Button>
          </Reveal>
        </div>

        <div className="container-fluid grid gap-3 md:grid-cols-12">
          {facilities.slice(0, 4).map((facility, i) => (
            <Reveal
              key={facility.title}
              delay={i * 80}
              className={`relative h-64 overflow-hidden sm:h-72 md:h-[360px] ${
                i === 0
                  ? "md:col-span-7"
                  : i === 1
                    ? "md:col-span-5"
                    : i === 2
                      ? "md:col-span-5"
                      : "md:col-span-7"
              }`}
            >
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.15em] text-bone md:bottom-6 md:left-6">
                {facility.title}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Training programs preview */}
      <section className="py-12 md:py-24">
        <div className="container-fluid mb-8 flex flex-col items-start justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <Reveal>
            <SectionEyebrow>Programs</SectionEyebrow>
            <SectionHeading size="lg">Train Toward A Goal.</SectionHeading>
          </Reveal>
          <Reveal delay={150}>
            <Button href="/training" variant="secondary">
              All Programs
            </Button>
          </Reveal>
        </div>

        <div className="container-fluid grid gap-px overflow-hidden border border-bone/10 sm:grid-cols-2 lg:grid-cols-3">
          {trainingPrograms.slice(0, 6).map((program, i) => (
            <Reveal key={program.slug} delay={i * 60}>
              <Link
                href="/training"
                className="focus-outline group relative block h-72 overflow-hidden bg-graphite"
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="big-heading text-2xl text-bone">
                    {program.title}
                  </h3>
                  <p className="mt-2 max-w-[85%] text-xs leading-relaxed text-ash opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {program.short}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <TransformationSection />

      {/* Cinematic motivational statement */}
      <section className="relative overflow-hidden border-y border-bone/10 bg-ink py-12 md:py-20">
        <div className="container-fluid text-center">
          <Reveal>
            <SectionEyebrow>The Focus Fitness Standard</SectionEyebrow>
            <h2 className="big-heading mx-auto max-w-4xl text-[2.85rem] leading-[0.94] text-bone md:text-8xl">
              Discipline Builds{" "}
              <span className="text-ember">Everything</span> Else.
            </h2>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
