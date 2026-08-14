import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { PillButton } from "@/components/ui/pill-button";
import { ClosingCta } from "@/components/ui/closing-cta";
import { featuredWork, workStreams } from "@/lib/content";

export function generateStaticParams() {
  return workStreams.map((stream) => ({ slug: stream.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stream = workStreams.find((s) => s.slug === slug);
  if (!stream) return {};
  return {
    title: `${stream.name} — KainosEdge`,
    description: stream.description,
  };
}

export default async function WorkStreamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stream = workStreams.find((s) => s.slug === slug);
  if (!stream) notFound();

  const related = featuredWork.find((w) => w.slug === stream.relatedWorkSlug);

  return (
    <>
      <PageHero
        kicker="What we do"
        heading={stream.name}
        subheading={stream.description}
        images={related ? [related.image] : undefined}
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-page grid gap-12 md:grid-cols-[0.6fr_1fr]">
          <Reveal>
            <Kicker>What&apos;s included</Kicker>
            <h2 className="max-w-sm font-display text-2xl leading-snug sm:text-3xl">
              How we deliver this
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="space-y-4">
              {stream.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-base text-ink-soft/80">
                  <span aria-hidden className="mt-1 text-accent">
                    ●
                  </span>
                  {cap}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <PillButton href="/contact">{stream.cta ?? "Talk to us about this"}</PillButton>
            </div>
          </Reveal>
        </div>
      </section>

      {related && (
        <section className="bg-paper-soft py-24 md:py-32">
          <div className="container-page">
            <Reveal>
              <Kicker>Related work</Kicker>
              <Link
                href={`/our-work/${related.slug}`}
                className="group mt-4 flex flex-col justify-between gap-6 rounded-2xl border border-line bg-paper p-8 transition-colors hover:bg-paper-mute/40 sm:flex-row sm:items-center"
              >
                <div>
                  <span className="kicker text-ink-soft/40">{related.category}</span>
                  <h3 className="mt-3 font-display text-2xl leading-snug">{related.title}</h3>
                  <p className="mt-2 max-w-xl text-sm text-ink-soft/70">{related.summary}</p>
                </div>
                <span
                  aria-hidden
                  className="text-xl transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <ClosingCta kicker="Talk to us" heading="Ready to put this to work for you?" />
    </>
  );
}
