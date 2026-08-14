import { Kicker } from "@/components/ui/kicker";
import { Marquee } from "@/components/ui/marquee";
import { clientLogos } from "@/lib/content";

export function CredibilityStrip() {
  return (
    <section className="border-y border-line bg-paper py-16">
      <div className="container-page mb-8 text-center">
        <Kicker>Trusted by the institutions shaping Nigeria&apos;s economy</Kicker>
      </div>
      <Marquee items={clientLogos} />
    </section>
  );
}
