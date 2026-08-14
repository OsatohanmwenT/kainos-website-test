"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const videos = [
  { src: "/videos/lagos-1.mp4", poster: "/videos/lagos-1-poster.jpg" },
  { src: "/videos/lagos-2.mp4", poster: "/videos/lagos-2-poster.jpg" },
  { src: "/videos/lagos-3.mp4", poster: "/videos/lagos-3-poster.jpg" },
  { src: "/videos/lagos-4.mp4", poster: "/videos/lagos-4-poster.jpg" },
];

export function HeroVideo() {
  const [index, setIndex] = useState(0);
  const current = videos[index];

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-ink">
      <AnimatePresence>
        <motion.video
          key={current.src}
          ref={(el) => {
            el?.play().catch(() => {});
          }}
          className="absolute inset-0 h-full w-full object-cover"
          src={current.src}
          poster={current.poster}
          autoPlay
          muted
          loop={videos.length === 1}
          playsInline
          preload="auto"
          onEnded={() => setIndex((i) => (i + 1) % videos.length)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
}
