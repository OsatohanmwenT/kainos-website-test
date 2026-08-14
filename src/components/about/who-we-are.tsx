import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";

export function WhoWeAre() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-page grid gap-12 md:grid-cols-[0.6fr_1fr]">
        <Reveal>
          <Kicker>Who we are</Kicker>
          <h2 className="max-w-sm font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            An economics research and consulting company, since 2014.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-base leading-relaxed text-ink-soft/80 sm:text-lg">
            KainosEdge Consulting Limited is an economics research and consulting company.
            Established in 2014, we started by gathering data to build databases that help
            organisations understand the economic environment and opportunities in Africa,
            covering market characteristics and company performance. In recent years
            we&apos;ve added analytical and research capacity to serve clients better. Our
            value lies in using the principles of economics to increase understanding, reduce
            uncertainty, and positively affect outcomes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
