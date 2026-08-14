import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — KainosEdge",
  description: "Let's talk about what you need to know.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        heading="Let's talk about what you need to know."
        images={["/images/contact-1.jpg", "/images/contact-2.jpg"]}
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-page grid gap-16 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-10">
              <div>
                <Kicker>Head office</Kicker>
                <p className="mt-2 max-w-xs text-base text-ink-soft/80">{site.address}</p>
              </div>
              <div>
                <Kicker>Email</Kicker>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block text-base text-ink-soft/80 hover:text-ink"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <Kicker>Phone</Kicker>
                <a
                  href={`tel:${site.phone}`}
                  className="mt-2 block text-base text-ink-soft/80 hover:text-ink"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
