import { CapsuleLink } from "@/components/ui/capsule-link";
import { PillButton } from "@/components/ui/pill-button";
import { HeroVideo } from "@/components/home/hero-video";

const valueStrip = ["Rigorous analysis", "Usable insight", "Measurable outcomes"];

function LineChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 17l6-7 4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-ink text-paper">
      <HeroVideo />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(239,108,35,0.18), transparent 45%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="absolute inset-0 bg-ink/20" />

      <div className="container-page relative z-10 pb-40 pt-48">
        <h1 className="max-w-4xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          We make knowledge work
          <br />
          for decision makers.
        </h1>
        <p className="mt-6 max-w-xl text-base text-paper/70 sm:text-lg">
          KainosEdge turns Africa&apos;s economic and market data into decisions you can act
          on, for governments, businesses and institutions.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <PillButton href="/about#approach" variant="light">
            See how we work
          </PillButton>
          <ExploreDataPortalLink />
        </div>

        <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-2">
          {valueStrip.map((item) => (
            <li key={item} className="kicker text-paper/90">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="container-page absolute inset-x-0 bottom-0 z-10 hidden -translate-y-10 flex-wrap gap-4 sm:flex">
        <CapsuleLink
          href="/about"
          icon={<LineChartIcon />}
          title="Need expert consultancy?"
          description="See how we work — About us / Approach"
        />
        <CapsuleLink
          href="/our-work"
          icon={<GridIcon />}
          title="View our work?"
          description="Research, case studies and reports"
        />
      </div>
    </section>
  );
}

function ExploreDataPortalLink() {
  return (
    <a
      href="/data-portal"
      className="group inline-flex items-center gap-2 text-sm font-medium text-paper/80 transition-colors hover:text-paper"
    >
      Explore the data portal
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
