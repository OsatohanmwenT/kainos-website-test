import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { values } from "@/lib/content";

export function VisionMissionValues() {
  return (
    <section className="bg-paper-soft py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-line bg-paper p-8">
              <Kicker>Vision</Kicker>
              <p className="mt-3 font-display text-xl leading-snug sm:text-2xl">
                To lead transformative growth in Africa by empowering organisations through
                innovation, global standards, and a strong people culture.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-line bg-paper p-8">
              <Kicker>Mission</Kicker>
              <p className="mt-3 font-display text-xl leading-snug sm:text-2xl">
                To drive the growth of client organisations by building their capacity to
                take advantage of existing and emerging opportunities, using global best
                practices whilst building an enterprise whose people consider it an employer
                of choice.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="mt-16">
          <Kicker>Values — KIRI</Kicker>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {values.map((v) => (
              <div key={v.word} className="bg-paper p-8 text-center">
                <p className="font-display text-4xl text-accent">{v.letter}</p>
                <p className="mt-2 text-sm font-medium text-ink-soft/80">{v.word}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
