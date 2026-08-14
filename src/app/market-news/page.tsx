import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { PillButton } from "@/components/ui/pill-button";
import { MarketTicker } from "@/components/market-news/market-ticker";
import { NewsView } from "@/components/market-news/news-view";
import { marketNews } from "@/lib/content";

export const metadata: Metadata = {
  title: "Market news — KainosEdge",
  description: "Global economic news, scanned and explained.",
};

export default function MarketNewsPage() {
  return (
    <>
      <PageHero
        kicker="Market news"
        heading="Global economic news, scanned and explained."
        images={["/images/marketnews-1.jpg", "/images/marketnews-2.jpg"]}
      />

      <MarketTicker />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <Kicker>What&apos;s moving markets today</Kicker>
            <h2 className="max-w-xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              KainosEdge&apos;s take.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {marketNews.map((item, i) => (
              <Reveal key={item.headline} delay={(i % 6) * 0.05}>
                <article className="h-full rounded-2xl border border-line p-6 transition-colors hover:bg-paper-soft">
                  <h3 className="font-display text-lg leading-snug">{item.headline}</h3>
                  <p className="mt-3 text-sm text-ink-soft/70">{item.take}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-soft py-24 md:py-32">
        <div className="container-page">
          <NewsView />
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 text-center text-paper md:py-32">
        <div className="container-page relative z-10">
          <Reveal className="mx-auto flex max-w-xl flex-col items-center">
            <Kicker>Bespoke feed</Kicker>
            <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              Want this tailored to your institution?
            </h2>
            <p className="mt-4 text-sm text-paper/60 sm:text-base">
              Bank- and organisation-specific news stays behind a request flow, built around
              what your institution actually needs to track.
            </p>
            <div className="mt-8">
              <PillButton href="/contact" variant="light">
                Request a bespoke market feed
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
