import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { ClosingCta } from "@/components/ui/closing-cta";
import { crossCuttingCapabilities, workStreams } from "@/lib/content";

export const metadata: Metadata = {
  title: "What we do — KainosEdge",
  description:
    "KainosEdge works across four lenses on Nigeria's economy. Each one draws on the same core skill: turning data into decisions.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        kicker="What we do"
        heading="Four lenses on Nigeria's economy."
        subheading="Each one draws on the same core skill: turning data into decisions."
        images={["/images/whatwedo-1.jpg", "/images/whatwedo-2.jpg"]}
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          {workStreams.map((stream, i) => (
            <Reveal key={stream.slug} delay={i * 0.08}>
              <Link
                href={`/what-we-do/${stream.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-line p-8 transition-colors hover:bg-paper-soft"
              >
                <div>
                  <span className="kicker text-ink-soft/40">0{i + 1}</span>
                  <h2 className="mt-4 font-display text-2xl leading-snug">{stream.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft/70">
                    {stream.description}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="mt-8 inline-block text-lg transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper-soft py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <Kicker>How we deliver</Kicker>
            <h2 className="max-w-xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              Cross-cutting capabilities that support all four streams.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-3">
            {crossCuttingCapabilities.map((cap) => (
              <span
                key={cap}
                className="rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-medium text-ink-soft/80"
              >
                {cap}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <ClosingCta kicker="Talk to us" heading="Ready to see what your data isn't telling you?" />
    </>
  );
}
