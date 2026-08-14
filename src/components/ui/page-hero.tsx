import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { Slideshow } from "@/components/ui/slideshow";

export function PageHero({
  kicker,
  heading,
  subheading,
  images,
}: {
  kicker: string;
  heading: string;
  subheading?: string;
  images?: string[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-44 text-paper md:pb-28 md:pt-52">
      {images && images.length > 0 && (
        <>
          <Slideshow images={images} className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
        </>
      )}
      <div className="container-page relative z-10">
        <Reveal>
          <Kicker>{kicker}</Kicker>
          <h1 className="max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {heading}
          </h1>
          {subheading && (
            <p className="mt-6 max-w-xl text-base text-paper/60 sm:text-lg">{subheading}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
