import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { clients } from "@/lib/content";

function initials(name: string) {
  return name
    .split(/[\s/]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function ClientLogoWall() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <Kicker>Our clients</Kicker>
          <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            KainosEdge is built to deliver strategic insight, speed, and measurable impact.
          </h2>
          <p className="mt-5 max-w-xl text-sm text-ink-soft/70 sm:text-base">
            We see the world through the lens of our clients, navigating complexity with
            clarity and providing the solutions you need to lead, adapt, and thrive.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 md:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative flex h-24 items-center justify-center overflow-hidden bg-paper px-4 text-center transition-colors duration-300 hover:bg-paper-soft"
            >
              <span className="text-sm font-medium text-ink-soft/60 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:opacity-0">
                {client.name}
              </span>

              <span className="absolute inset-0 flex translate-y-2 flex-col items-center justify-center gap-1 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-8 max-w-[80%] object-contain"
                    style={client.invert ? { filter: "invert(1)" } : undefined}
                  />
                ) : (
                  <>
                    <span className="font-display text-lg text-ink">{initials(client.name)}</span>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-ink-soft/70">
                      {client.name}
                    </span>
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
