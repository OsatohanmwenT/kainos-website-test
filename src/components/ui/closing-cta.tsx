import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { PillButton } from "@/components/ui/pill-button";

export function ClosingCta({
  kicker,
  heading,
  ctaLabel = "See how we work",
  ctaHref = "/contact",
}: {
  kicker: string;
  heading: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-center text-paper">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(239,108,35,0.25), transparent 60%)",
        }}
      />
      <div className="container-page relative z-10">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
          <Kicker>{kicker}</Kicker>
          <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-5xl">
            {heading}
          </h2>
          <div className="mt-10">
            <PillButton href={ctaHref} variant="light">
              {ctaLabel}
            </PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
