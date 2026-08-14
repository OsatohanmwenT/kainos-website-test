import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { ClosingCta } from "@/components/ui/closing-cta";
import { featuredWork } from "@/lib/content";

export function generateStaticParams() {
  return featuredWork.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = featuredWork.find((w) => w.slug === slug);
  if (!item) return {};
  return { title: `${item.title} — KainosEdge`, description: item.summary };
}

const metaFields = [
  ["Industry", "industry"],
  ["Client", "client"],
  ["Engagement Type", "engagementType"],
  ["Duration", "duration"],
] as const;

export default async function WorkItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = featuredWork.find((w) => w.slug === slug);
  if (!item) notFound();
  const cs = item.caseStudy;

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-24 pt-44 text-paper md:pb-32 md:pt-52">
        <img aria-hidden src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,8,8,0.95), rgba(8,8,8,0.75) 55%, rgba(8,8,8,0.55)), radial-gradient(circle at 20% 10%, rgba(239,108,35,0.3), transparent 50%)",
          }}
        />
        <div className="container-page relative z-10">
          <Reveal>
            <span className="kicker text-paper/50">{item.category}</span>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              {item.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1} className="mt-14 grid grid-cols-2 gap-8 border-t border-paper/10 pt-8 sm:grid-cols-4">
            {metaFields.map(([label, key]) => (
              <div key={key}>
                <p className="kicker text-paper/40">{label}</p>
                <p className="mt-2 text-sm text-paper/80">{cs[key]}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="container-page grid gap-16 md:grid-cols-[0.35fr_1fr]">
          <Reveal className="md:sticky md:top-32 md:self-start">
            <div className="rounded-2xl border border-line bg-paper-soft p-6">
              <p className="tabular-nums font-display text-5xl text-ink">
                +<CountUp target={item.stat} />
              </p>
              <p className="mt-2 text-sm text-ink-soft/60">{item.statLabel}</p>
            </div>
          </Reveal>

          <div className="space-y-16">
            <Reveal>
              <Kicker>The Challenge</Kicker>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft/80 sm:text-lg">
                {cs.challenge}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <Kicker>KainosEdge Approach</Kicker>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft/80 sm:text-lg">
                {cs.approach}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <Kicker>Core Features</Kicker>
              <ul className="mt-3 space-y-3">
                {cs.coreFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-base text-ink-soft/80">
                    <span aria-hidden className="mt-1 text-accent">
                      ●
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <Kicker>Value Delivered</Kicker>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft/80 sm:text-lg">
                {cs.valueDelivered}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Kicker>Results & Impact</Kicker>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft/80 sm:text-lg">
                {cs.results}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <ClosingCta kicker="Build smarter decisions" heading="Want a read like this on your own data?" />
    </>
  );
}
