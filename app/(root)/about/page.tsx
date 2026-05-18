import { PageHeader } from "@/components/PageHeader";
import { TeamCarousel } from "@/components/TeamCarousel";
import { values, team } from "@/components/about/aboutData";
import { PartnerLogos } from "@/components/shared/PartnerLogos";
import { StatsBand } from "@/components/shared/StatsBand";
import Image from "next/image";

export const metadata = {
  title: "About KainosEdge",
  description:
    "Learn about KainosEdge — our mission to drive institutional growth across Africa, our values, research story, team, and partners.",
  openGraph: {
    title: "About KainosEdge",
    description:
      "Learn about KainosEdge — our mission to drive institutional growth across Africa, our values, research story, team, and partners.",
    url: "https://kainosedge.org/about",
  },
  twitter: {
    title: "About KainosEdge",
    description:
      "Learn about KainosEdge — our mission to drive institutional growth across Africa, our values, research story, team, and partners.",
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-primary-50">
      <PageHeader
        title="About KainosEdge"
        description="We are a dedicated research platform dedicated to providing evidence-based insights for policy, strategy, and decision-making."
        bg="bg-super-admin-accent-50"
      />

      {/* Mission & Vision Section */}
      <section className="w-full px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto grid w-full items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="relative aspect-4/3 overflow-hidden rounded-[20px] border border-border-default bg-white shadow-sm md:aspect-16/10 lg:aspect-auto lg:min-h-107.5">
            <Image
              src="/about/office-collaboration.png"
              alt="KainosEdge researchers collaborating around data dashboards"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-9">
            <div>
              <h2 className="font-fraunces text-2xl font-semibold text-text-header md:text-3xl">
                Our Mission
              </h2>
              <p className="mt-4 font-dm-sans text-base leading-8 text-text-body">
                To drive the growth of client organisations by building their
                capacity to take advantage of existing and emerging
                opportunities using global best practices, whilst building an
                enterprise whose people consider it an employer of choice.
              </p>
            </div>

            <div>
              <h2 className="font-fraunces text-2xl font-semibold text-text-header md:text-3xl">
                Our Vision
              </h2>
              <p className="mt-4 font-dm-sans text-base leading-8 text-text-body">
                To lead transformative growth in Africa by empowering
                organisations through innovation, global standards, and a strong
                people culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsBand />

      {/* Story Section */}
      <section className="w-full bg-primary-50 px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto grid w-full items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <h2 className="font-fraunces text-2xl font-semibold text-text-header md:text-3xl">
              Our Story
            </h2>
            <div className="mt-6 space-y-6 font-dm-sans text-base leading-8 text-text-body">
              <p>
                KainosEdge was established in 2014 in response to a growing need
                for reliable, institutional-grade economic data in Africa. With
                a team of economists, policy analysts, and data scientists, we
                recognise that many government agencies and research
                institutions lacked the infrastructure to produce and manage
                high-quality data internally.
              </p>
              <p>
                What began as a small consultancy focused on fiscal policy
                analysis has since grown into a comprehensive research platform.
                Today, we serve dozens of institutional clients, publish
                hundreds of datasets annually, and maintain one of the most
                comprehensive collections of economic data in the region.
              </p>
              <p>
                Our team has grown from a founding chairman to over 25
                researchers, analysts, and data professionals. We have published
                more than 300 research reports, built custom data solutions for
                government institutions and think-tanks, and trained hundreds of
                institutional staff in data governance and economic research
                methodology.
              </p>
            </div>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-[20px] border border-border-default bg-white shadow-sm md:aspect-16/10 lg:aspect-auto lg:min-h-107.5">
            <Image
              src="/about/researcher-laptop.png"
              alt="KainosEdge researcher working on economic data analysis"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-white px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto w-full">
          <h2 className="text-center font-fraunces text-2xl font-semibold text-text-header md:text-3xl">
            Our Values
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="rounded-xl border border-border-default bg-primary-50 px-6 py-8 text-center shadow-sm transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="mx-auto flex size-11 items-center justify-center rounded-full bg-primary-500 text-white">
                    <Icon aria-hidden="true" size={19} strokeWidth={2.4} />
                  </div>
                  <h3 className="mt-7 font-dm-sans text-lg font-bold text-text-header">
                    {value.title}
                  </h3>
                  <p className="mt-3 font-dm-sans text-sm leading-6 text-text-body">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-primary-50 px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto w-full">
          <h2 className="text-center font-fraunces text-2xl font-semibold text-text-header md:text-3xl">
            Meet the Team
          </h2>

          <TeamCarousel members={team} />
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full bg-white px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto w-full">
          <h2 className="text-center font-fraunces text-2xl font-semibold text-text-header md:text-3xl">
            Our Partners
          </h2>

          <PartnerLogos />
        </div>
      </section>
    </div>
  );
}
