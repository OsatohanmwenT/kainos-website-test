import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { leadership, management } from "@/lib/content";

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

function TeamGrid({
  people,
}: {
  people: { name: string; title: string; photo?: string }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {people.map((person, i) => (
        <Reveal key={person.name} delay={i * 0.06}>
          <div className="overflow-hidden rounded-2xl border border-line">
            <div className="relative aspect-[4/5] w-full bg-paper-mute">
              {person.photo ? (
                <img
                  src={person.photo}
                  alt={person.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-display text-4xl text-ink-soft/30">
                    {initials(person.name)}
                  </span>
                </div>
              )}
            </div>
            <div className="p-6">
              <p className="font-display text-lg leading-snug">{person.name}</p>
              <p className="mt-1 text-sm text-ink-soft/60">{person.title}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function TeamSection() {
  return (
    <section className="bg-paper-soft py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <Kicker>Our team</Kicker>
          <h2 className="max-w-xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            Leadership and management.
          </h2>
        </Reveal>

        <div className="mt-14">
          <p className="kicker mb-6 text-ink-soft/40">Leadership</p>
          <TeamGrid people={leadership} />
        </div>

        <div className="mt-14">
          <p className="kicker mb-6 text-ink-soft/40">Management</p>
          <TeamGrid people={management} />
        </div>
      </div>
    </section>
  );
}
