import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { PillButton } from "@/components/ui/pill-button";

export function KaylaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper md:py-32">
      <img
        aria-hidden
        src="/images/kayla-banner.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/70"
      />
      <div className="container-page relative z-10">
        <Reveal>
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Kicker>Data portal & Kayla</Kicker>
              <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Ask Kayla. Nigeria&apos;s economic data, in plain language.
              </h2>
              <p className="mt-5 max-w-md text-sm text-paper/60 sm:text-base">
                Kayla is the AI assistant built into the data portal: ask a question in plain
                language and get the chart, the number, or the download you need.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <PillButton href="/kayla" variant="light">
                  Chat with Kayla
                </PillButton>
                <a
                  href="/data-portal"
                  className="text-sm font-medium text-paper/70 transition-colors hover:text-paper"
                >
                  See the data portal tiers →
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-paper/10 bg-paper/5 p-6 font-mono text-sm text-paper/80">
              <p className="kicker text-accent">Kayla</p>
              <p className="mt-3 leading-relaxed">
                &ldquo;What has happened to Nigeria&apos;s inflation rate since the fuel
                subsidy removal in 2023?&rdquo;
              </p>
              <div className="mt-6 h-24 rounded-lg bg-gradient-to-t from-accent/20 to-transparent" />
              <p className="mt-4 text-xs text-paper/40">
                Chart, indicator, and downloadable series generated on request.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
