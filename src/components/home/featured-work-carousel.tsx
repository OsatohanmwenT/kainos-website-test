"use client";

import { useRef } from "react";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import type { PublicPublication } from "@/lib/kidmp-api";

function formatYear(dateString: string) {
  const year = new Date(dateString).getFullYear();
  return Number.isNaN(year) ? "" : String(year);
}

export function FeaturedWorkCarousel({ items }: { items: PublicPublication[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section className="bg-paper-soft py-24 md:py-32">
      <div className="container-page flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <Kicker>Featured work</Kicker>
          <h2 className="max-w-xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            Strategic thinking, practical execution, measurable growth.
          </h2>
        </Reveal>

        {items.length > 0 && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scrollBy(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scrollBy(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              →
            </button>
          </div>
        )}
      </div>

      {items.length === 0 ? (
        <div className="container-page mt-14">
          <div className="rounded-2xl border border-dashed border-line px-8 py-16 text-center">
            <p className="text-sm text-ink-soft/60">
              Published reports and datasets will appear here as they're released.
            </p>
          </div>
        </div>
      ) : (
        <div
          ref={trackRef}
          className="mt-14 flex gap-6 overflow-x-auto px-6 pb-4 [scrollbar-width:none] md:px-[calc((100vw-1280px)/2+40px)] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative flex h-[420px] w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-ink p-6 text-paper transition-transform duration-300 hover:-translate-y-1 sm:w-[360px]"
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(8,8,8,1), rgba(8,8,8,0.85) 55%, rgba(239,108,35,0.25))",
                }}
              />
              <div className="relative z-10 flex items-start justify-between">
                <span className="kicker text-paper/50">{item.category}</span>
                <span className="kicker text-paper/50">{formatYear(item.published_at)}</span>
              </div>

              <div className="relative z-10">
                <h3 className="font-display text-xl leading-snug">{item.public_title}</h3>
                {item.summary && <p className="mt-2 text-sm text-paper/60">{item.summary}</p>}
                {item.authors && item.authors.length > 0 && (
                  <p className="mt-3 text-xs uppercase tracking-widest text-paper/40">
                    {item.authors.join(", ")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
