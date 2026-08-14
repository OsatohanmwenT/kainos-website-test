import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { PillButton } from "@/components/ui/pill-button";
import { marketNews } from "@/lib/content";

export function MarketNewsPreview() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <Kicker>Market news</Kicker>
          <h2 className="max-w-xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            What&apos;s moving markets today.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {marketNews.map((item, i) => (
            <Reveal key={item.headline} delay={i * 0.06}>
              <article className="h-full rounded-2xl border border-line p-6 transition-colors hover:bg-paper-soft">
                <h3 className="font-display text-lg leading-snug">{item.headline}</h3>
                <p className="mt-3 text-sm text-ink-soft/70">{item.take}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <PillButton href="/market-news">See the full scan</PillButton>
        </div>
      </div>
    </section>
  );
}
