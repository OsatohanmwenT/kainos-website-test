import Image from "next/image";
import { partnerLogos } from "./siteData";

interface PartnerLogosProps {
  className?: string;
}

export function PartnerLogos({ className = "bg-neutral-50" }: PartnerLogosProps) {
  const carouselLogos = [...partnerLogos, ...partnerLogos];

  return (
    <div
      className={`group mx-auto mt-10 max-w-5xl overflow-hidden rounded-[20px] border border-border-default px-8 py-6 shadow-sm ${className}`}
    >
      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max items-center gap-8 animate-partner-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
          {carouselLogos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex h-14 w-32 shrink-0 items-center justify-center"
            >
              <Image
                src={partner.src}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="max-h-11 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
