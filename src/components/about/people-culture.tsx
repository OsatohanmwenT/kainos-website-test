import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";

export function PeopleCulture() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-page grid gap-12 md:grid-cols-[0.6fr_1fr]">
        <Reveal>
          <Kicker>People & culture</Kicker>
          <h2 className="max-w-sm font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            Our people are our greatest asset.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-base leading-relaxed text-ink-soft/80 sm:text-lg">
            At KainosEdge, our people are our greatest asset. We bring together a diverse
            team united by a shared commitment to excellence, integrity, and impact. Every
            team member is empowered to take ownership, think critically, and contribute
            meaningfully to client success. We don&apos;t just build teams, we build a
            values-driven community shaping the future of consulting in Africa.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
