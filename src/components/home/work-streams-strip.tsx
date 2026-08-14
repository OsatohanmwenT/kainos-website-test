import Link from "next/link";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { workStreams } from "@/lib/content";

export function WorkStreamsStrip() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <Kicker>What we do</Kicker>
          <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            Four ways we read Nigeria&apos;s economy, and put what we find to work.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {workStreams.map((stream, i) => (
            <Reveal key={stream.slug} delay={i * 0.08}>
              <Link
                href="/what-we-do"
                className="group flex h-full flex-col justify-between bg-paper p-8 transition-colors hover:bg-paper-soft"
              >
                <div>
                  <span className="kicker text-ink-soft/40">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl leading-snug">{stream.name}</h3>
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
      </div>
    </section>
  );
}
