"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade-up"
  | "fade-in"
  | "scale-in"
  | "slide-right"
  | "slide-left"
  | "flip-up";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  /** Delay in ms */
  delay?: number;
  /** Duration in ms */
  duration?: number;
  /** IntersectionObserver threshold — how much of the element must be visible */
  threshold?: number;
}

const transitionStyles: Record<AnimationType, { from: string; to: string }> = {
  "fade-up": {
    from: "opacity-0 translate-y-10 scale-[0.98]",
    to: "opacity-100 translate-y-0 scale-100",
  },
  "flip-up": {
    from: "opacity-0 translate-y-8 [transform:rotateX(-12deg)]",
    to: "opacity-100 translate-y-0 [transform:rotateX(0deg)]",
  },
  "fade-in": {
    from: "opacity-0",
    to: "opacity-100",
  },
  "scale-in": {
    from: "opacity-0 scale-[0.95]",
    to: "opacity-100 scale-100",
  },
  "slide-right": {
    from: "opacity-0 -translate-x-8",
    to: "opacity-100 translate-x-0",
  },
  "slide-left": {
    from: "opacity-0 translate-x-8",
    to: "opacity-100 translate-x-0",
  },
};

export function FadeIn({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 500,
  threshold = 0.10,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const { from, to } = transitionStyles[animation];
  const activeClass = visible ? to : from;

  // Use global transition-premium class to handle timing functions
  const transitionClass = "transition-premium";

  // flip-up needs a perspective context so rotateX renders in 3D
  const perspectiveClass = animation === "flip-up" ? "perspective-hero" : "";

  return (
    <div
      ref={ref}
      className={`${perspectiveClass} ${transitionClass} ${activeClass} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
