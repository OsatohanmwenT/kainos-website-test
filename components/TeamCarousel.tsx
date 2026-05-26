"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

interface TeamCarouselProps {
  members: TeamMember[];
}

export function TeamCarousel({ members }: TeamCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const card = container.querySelector<HTMLElement>("[data-team-card]");
    const distance = card
      ? card.offsetWidth + 32
      : Math.round(container.clientWidth * 0.8);

    container.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-10">
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] sm:gap-8 [&::-webkit-scrollbar]:hidden"
      >
        {members.map((member) => (
          <article
            key={member.name}
            data-team-card
            className="w-[68vw] max-w-70 shrink-0 snap-start sm:w-[42vw] sm:max-w-none lg:w-[23vw] xl:w-[21vw]"
          >
            <div className="relative aspect-5/6 overflow-hidden rounded-xl border border-border-default bg-white shadow-sm sm:aspect-4/5">
              <Image
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                fill
                sizes="(min-width: 1280px) 21vw, (min-width: 1024px) 23vw, (min-width: 640px) 42vw, 68vw"
                className="object-cover object-top"
              />
            </div>
            <h3 className="mt-5 truncate font-dm-sans text-lg font-bold text-text-header">
              {member.name}
            </h3>
            <p className="mt-1 font-dm-sans text-sm text-text-body">
              {member.role}
            </p>
          </article>
        ))}
      </div>

      <div className="mb-6 flex justify-end gap-3">
        <button
          type="button"
          aria-label="Show previous team members"
          onClick={() => scroll("left")}
          className="flex size-10 items-center justify-center rounded-full border border-border-default bg-white text-text-header shadow-sm transition-colors hover:bg-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Show next team members"
          onClick={() => scroll("right")}
          className="flex size-10 items-center justify-center rounded-full border border-border-default bg-white text-text-header shadow-sm transition-colors hover:bg-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        >
          <ChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  );
}
