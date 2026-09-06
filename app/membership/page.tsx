import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import { SectionEyebrow, SectionHeading } from "@/components/SectionHeading";
import { whatsappLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Discover Focus Fitness memberships, training support and a free trial in New Sangavi, Pune.",
};

const membershipHighlights = [
  {
    number: "01",
    title: "Flexible Memberships",
    text: "Choose a membership duration that fits your routine and training commitment. Our team will explain the current options when you visit or message us.",
  },
  {
    number: "02",
    title: "Expert Coaching",
    text: "Train with guidance from certified trainers who help you move better, train smarter and stay accountable.",
  },
  {
    number: "03",
    title: "A Complete Training Environment",
    text: "From strength work to conditioning and transformation-focused training, everything is built around consistent progress.",
  },
];

const includedFeatures = [
  "Access to the Focus Fitness training environment",
  "Professional trainer guidance",
  "Strength and conditioning focused equipment",
  "A supportive training community",
  "Membership options based on your goals",
  "Free trial session before you commit",
];

export default function MembershipPage() {
  const whatsappUrl = whatsappLink(
    "Hi Focus Fitness! I'd like to know about your current membership options and book a free trial."
  );

  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Invest In A Healthier You."
        subtitle="The right membership should fit your goals, routine and commitment. Come experience Focus Fitness first, then speak with our team about the best option for you."
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2000&q=80"
        alt="Athlete training at Focus Fitness"
      />

      <section className="container-fluid py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-end md:gap-16">
          <Reveal>
            <SectionEyebrow>Membership, Your Way</SectionEyebrow>
            <SectionHeading size="sm">
              Train With Purpose. Stay For The Progress.
            </SectionHeading>
          </Reveal>

          <Reveal delay={100} className="max-w-2xl md:ml-auto">
            <p className="text-sm leading-relaxed text-ash md:text-base">
              We keep membership flexible because every member has a different
              goal. Whether you are starting your fitness journey, getting back
              into training or chasing a serious transformation, our team can
              guide you through the current membership options.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl} external variant="primary">
                Message Us On WhatsApp
              </Button>
              <Button href="/contact" variant="secondary">
                Visit Focus Fitness
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal py-14 md:py-20">
        <div className="container-fluid">
          <div className="mb-9 max-w-2xl md:mb-12">
            <Reveal>
              <SectionEyebrow>Why Focus Fitness</SectionEyebrow>
              <SectionHeading size="sm">
                More Than A Membership.
              </SectionHeading>
            </Reveal>
          </div>

          <div className="grid border-l border-t border-bone/10 md:grid-cols-3">
            {membershipHighlights.map((item, index) => (
              <Reveal key={item.number} delay={index * 90} className="h-full">
                <article className="group h-full min-h-[250px] border-r border-b border-bone/10 p-7 transition-colors duration-500 hover:bg-graphite md:p-9">
                  <span className="eyebrow text-ember">{item.number}</span>
                  <h3 className="big-heading mt-8 text-3xl text-bone md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-ash">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-fluid py-14 md:py-20">
        <div className="mb-10 grid gap-8 md:mb-12 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-16">
          <Reveal>
            <SectionEyebrow>What You Get</SectionEyebrow>
            <SectionHeading size="sm">
              Everything You Need To Train Consistently.
            </SectionHeading>
          </Reveal>

          <Reveal delay={100} className="max-w-xl md:ml-auto">
            <p className="text-sm leading-relaxed text-ash md:text-base">
              A focused training environment, expert guidance and the equipment
              you need to keep showing up and making progress.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-stretch md:gap-12 lg:gap-16">
          <Reveal className="h-full">
            <div className="group relative h-full min-h-[360px] overflow-hidden border border-bone/10 bg-graphite md:min-h-[560px]">
              <img
                src="/images/membership-gym.png"
                alt="Premium Focus Fitness gym training environment"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/10" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <span className="eyebrow text-ember">More Than A Gym</span>
                <h3 className="big-heading mt-3 max-w-md text-3xl text-bone md:text-5xl">
                  A Stronger <span className="text-ember">You.</span>
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone/75 md:text-base">
                  A premium training environment built to help you build strength,
                  confidence and consistency.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ul className="divide-y divide-bone/10 border-y border-bone/10">
              {includedFeatures.map((feature, index) => (
                <li
                  key={feature}
                  className="flex items-start gap-5 py-5 text-sm text-ash md:py-6 md:text-base"
                >
                  <span className="pt-0.5 text-xs font-semibold tracking-[0.18em] text-ember">
                    0{index + 1}
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal py-16 md:py-24">
        <div className="container-fluid grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal>
            <SectionEyebrow>Current Membership Options</SectionEyebrow>
            <SectionHeading size="sm">
              Let&apos;s Find The Right Fit For You.
            </SectionHeading>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ash md:text-base">
              Memberships and promotional offers can change. Rather than showing
              outdated rates online, message our team for the current options,
              availability and offers.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <Button href={whatsappUrl} external variant="primary">
              Ask About Membership
            </Button>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Ready To Get Focused?"
        title="Your First Session Is Free."
        subtitle="No pressure, no commitment — come train, experience the atmosphere and decide when you are ready."
      />
    </>
  );
}
