import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { SectionEyebrow, SectionHeading } from "@/components/SectionHeading";
import { facilities, type Facility } from "@/lib/data";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Explore the Focus Fitness facilities in New Sangavi, Pune — strength, cardio, functional training, personal training, and locker rooms.",
};

function FacilityTile({
  facility,
  index,
  heightClass,
  large = false,
}: {
  facility: Facility;
  index: number;
  heightClass: string;
  large?: boolean;
}) {
  return (
    <div className={`group relative overflow-hidden bg-graphite ${heightClass}`}>
      <Image
        src={facility.image}
        alt={facility.title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7">
        <span className="big-heading text-sm text-ember">0{index + 1}</span>
        <h2
          className={`big-heading mt-1 text-bone ${
            large ? "text-3xl md:text-4xl" : "text-2xl"
          }`}
        >
          {facility.title}
        </h2>
        <p className="mt-2 max-w-sm text-xs leading-relaxed text-ash md:text-sm">
          {facility.description}
        </p>
      </div>
    </div>
  );
}

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Inside The Gym"
        title="Facilities"
        subtitle="Every corner of Focus Fitness is built with one goal in mind — helping you train better."
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80"
        alt="Focus Fitness strength training floor"
      />

      {/* Editorial masonry — one deliberate composition, explicitly placed
          (no CSS `order` tricks) so there is no risk of an isolated,
          orphaned tile. One large feature, paired mid-tiles, a closing
          full-width banner. */}
      <section className="container-fluid py-16 md:py-28">
        <div className="mb-10 md:mb-14">
          <Reveal>
            <SectionEyebrow>A Premium Facility Tour</SectionEyebrow>
            <SectionHeading size="lg">Step Onto The Floor.</SectionHeading>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
          {/* Row 1 — feature + support, same height */}
          <Reveal className="md:col-span-7">
            <FacilityTile facility={facilities[0]} index={0} heightClass="h-60 md:h-[520px]" large />
          </Reveal>
          <Reveal delay={80} className="md:col-span-5">
            <FacilityTile facility={facilities[1]} index={1} heightClass="h-64 md:h-[520px]" />
          </Reveal>

          {/* Row 2 — three equal tiles */}
          <Reveal delay={120} className="md:col-span-4">
            <FacilityTile facility={facilities[2]} index={2} heightClass="h-56 md:h-80" />
          </Reveal>
          <Reveal delay={160} className="md:col-span-4">
            <FacilityTile facility={facilities[3]} index={3} heightClass="h-56 md:h-80" />
          </Reveal>
          <Reveal delay={200} className="md:col-span-4">
            <FacilityTile facility={facilities[4]} index={4} heightClass="h-56 md:h-80" />
          </Reveal>

          {/* Row 3 — closing full-width banner */}
          <Reveal delay={240} className="md:col-span-12">
            <FacilityTile facility={facilities[5]} index={5} heightClass="h-56 md:h-72" large />
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Come See It Live"
        title="Tour The Gym In Person."
        subtitle="Book a free trial visit and walk the floor before you commit."
      />
    </>
  );
}
