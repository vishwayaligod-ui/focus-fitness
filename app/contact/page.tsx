import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { SectionEyebrow, SectionHeading } from "@/components/SectionHeading";
import { siteConfig, whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Focus Fitness in New Sangavi, Pune. Call us or message us directly on WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Talk"
        subtitle="Have a question about membership, training, or a free trial? Talk to the Focus Fitness team directly."
        image="https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=2000&q=80"
        alt="Focus Fitness gym"
      />

      <section className="container-fluid py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <SectionEyebrow>Reach Us Directly</SectionEyebrow>
            <SectionHeading size="md" className="mb-8">
              Your next session starts here.
            </SectionHeading>

            <div className="border-t border-bone/10">
              <div className="border-b border-bone/10 py-6">
                <p className="eyebrow mb-3">Location</p>
                <p className="max-w-xl text-sm leading-7 text-bone/80">
                  {siteConfig.fullAddress}
                </p>
              </div>

              <div className="border-b border-bone/10 py-6">
                <p className="eyebrow mb-3">Phone</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="focus-outline w-fit text-lg font-semibold text-bone transition-colors hover:text-ember"
                  >
                    {siteConfig.phone}
                  </a>
                  {siteConfig.phoneAlt && (
                    <a
                      href={`tel:${siteConfig.phoneAlt}`}
                      className="focus-outline w-fit text-lg font-semibold text-bone transition-colors hover:text-ember"
                    >
                      {siteConfig.phoneAlt}
                    </a>
                  )}
                </div>
              </div>

              <div className="py-6">
                <p className="eyebrow mb-3">Best Way To Reach Us</p>
                <p className="max-w-xl text-sm leading-7 text-ash">
                  For membership questions, trial sessions, training enquiries,
                  or anything else, message the team directly on WhatsApp.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="md:col-span-6 md:col-start-7">
            <div className="relative overflow-hidden border border-bone/10 bg-charcoal p-8 md:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-ember/15 blur-3xl" />

              <div className="relative">
                <div className="mb-10 flex items-center justify-between gap-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ember">
                    Direct Line
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-ash">
                    WhatsApp
                  </span>
                </div>

                <p className="big-heading max-w-lg text-4xl leading-[0.95] text-bone md:text-5xl">
                  Ready to get started?
                </p>
                <p className="mt-6 max-w-md text-sm leading-7 text-ash">
                  Skip the forms. Send us a message and the Focus Fitness team
                  can help you with membership, training, pricing, and your free
                  trial.
                </p>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-outline mt-10 inline-flex w-full items-center justify-between gap-6 bg-ember px-6 py-5 text-sm font-bold uppercase tracking-[0.18em] text-ink transition-transform hover:-translate-y-1 md:px-7"
                >
                  <span>Message Us On WhatsApp</span>
                  <span aria-hidden="true" className="text-xl">
                    →
                  </span>
                </a>

                <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-ash">
                  <span className="h-2 w-2 rounded-full bg-ember" />
                  Fastest way to connect with us
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-bone/10 bg-charcoal/40">
        <div className="container-fluid grid md:grid-cols-2">
          <div className="border-b border-bone/10 px-0 py-10 md:border-b-0 md:border-r md:py-14 md:pr-14">
            <p className="eyebrow mb-4">New Sangavi</p>
            <h2 className="big-heading max-w-xl text-4xl text-bone md:text-5xl">
              Find us. Train hard. Get stronger.
            </h2>
          </div>

          <div className="flex items-end px-0 py-10 md:py-14 md:pl-14">
            <p className="max-w-xl text-sm leading-7 text-ash">
              Focus Fitness is located in Kirti Nagar, New Sangavi. Come in,
              see the space, meet the team, and take the first step toward
              becoming stronger than yesterday.
            </p>
          </div>
        </div>
      </section>

      <section className="h-[420px] w-full border-t border-bone/10 md:h-[480px]">
        <iframe
          title="Focus Fitness location map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            `${siteConfig.name}, ${siteConfig.fullAddress}`
          )}&output=embed`}
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "grayscale(1) invert(0.92) contrast(0.9)",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
