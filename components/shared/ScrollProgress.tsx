"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scaleX, setScaleX] = useState(0);

  useEffect(() => {
    let active = true;
    let frameId: number;

    const handleScroll = () => {
      if (!active) return;

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setScaleX(0);
        return;
      }

      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max(currentScroll / totalScroll, 0), 1);
      
      setScaleX(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial calculate
    handleScroll();

    return () => {
      active = false;
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      className="fixed left-0 right-0 top-0 z-50 h-[3px] bg-gradient-to-r from-primary-500 to-primary-700 origin-left pointer-events-none transition-transform duration-75 ease-out"
      style={{
        transform: `scaleX(${scaleX})`,
      }}
    />
  );
}
