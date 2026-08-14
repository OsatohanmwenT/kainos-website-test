import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { approach } from "@/lib/content";

export function ApproachSection() {
  return (
    <section id="approach" className="scroll-mt-24 bg-ink py-24 text-paper md:py-32">
      <div className="container-page">
        <Reveal>
          <Kicker>The KainosEdge approach</Kicker>
          <h2 className="max-w-xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            Discover. Utilize. Succeed.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 md:grid-cols-3">
          {approach.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <div className="h-full bg-ink p-8">
                <span className="kicker text-accent">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl">{step.step}</h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/60">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
