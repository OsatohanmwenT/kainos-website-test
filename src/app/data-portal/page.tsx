import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { PillButton } from "@/components/ui/pill-button";
import { ClosingCta } from "@/components/ui/closing-cta";
import { dataPortalTiers, examplePrompts } from "@/lib/content";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Data portal & Kayla — KainosEdge",
  description:
    "Nigeria's macroeconomic data, structured and ready to use, with Kayla as the way you talk to it.",
};

export default function DataPortalPage() {
  return (
    <>
      <PageHero
        kicker="Data portal & Kayla"
        heading="Nigeria's data, structured. Kayla, the way you talk to it."
        subheading="Kayla isn't a separate product, it's the AI assistant built into the data portal: ask a question in plain language and get the chart, the number, or the download you need."
        images={["/images/dataportal-1.jpg", "/images/dataportal-2.jpg"]}
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <Kicker>Pick your tier</Kicker>
            <h2 className="max-w-xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              One data portal, three ways in.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {dataPortalTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.08}>
                <div
                  className={clsx(
                    "flex h-full flex-col rounded-2xl border p-8",
                    tier.emphasized
                      ? "border-ink bg-ink text-paper shadow-xl"
                      : "border-line bg-paper",
                  )}
                >
                  <p
                    className={clsx(
                      "kicker",
                      tier.emphasized ? "text-accent" : "text-ink-soft/40",
                    )}
                  >
                    {tier.emphasized ? "Most popular" : "Tier"}
                  </p>
                  <h3 className="mt-3 font-display text-2xl">{tier.name}</h3>
                  <p
                    className={clsx(
                      "mt-1 text-sm",
                      tier.emphasized ? "text-paper/60" : "text-ink-soft/60",
                    )}
                  >
                    {tier.audience}
                  </p>

                  <ul className="mt-8 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className={clsx(
                          "flex items-start gap-3 text-sm",
                          tier.emphasized ? "text-paper/80" : "text-ink-soft/80",
                        )}
                      >
                        <span aria-hidden className="mt-0.5 text-accent">
                          ●
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <PillButton
                      href="/contact"
                      variant={tier.emphasized ? "light" : "dark"}
                      className="w-full justify-center"
                    >
                      {tier.cta}
                    </PillButton>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-soft py-24 md:py-32">
        <div className="container-page">
          <Reveal>
            <Kicker>Try Kayla</Kicker>
            <h2 className="max-w-xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              Ask in plain language.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {examplePrompts.map((prompt, i) => (
              <Reveal key={prompt} delay={i * 0.08}>
                <Link
                  href={`/kayla?q=${encodeURIComponent(prompt)}`}
                  className="block h-full rounded-2xl border border-line bg-paper p-6 font-mono text-sm leading-relaxed text-ink-soft/80 transition-colors hover:bg-paper-mute/40"
                >
                  &ldquo;{prompt}&rdquo;
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24} className="mt-10">
            <PillButton href="/kayla">Chat with Kayla</PillButton>
          </Reveal>
        </div>
      </section>

      <ClosingCta kicker="Talk to us" heading="Ready to see what your data can tell you?" />
    </>
  );
}
