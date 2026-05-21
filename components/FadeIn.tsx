"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  /** Which animation to use */
  animation?: "fade-up" | "fade-in" | "scale-in" | "slide-right";
  /** Delay in ms */
  delay?: number;
  /** IntersectionObserver threshold — how much of the element must be visible */
  threshold?: number;
}

export function FadeIn({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.12,
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

  const animClass = visible ? `animate-${animation}` : "opacity-0";

  return (
    <div
      ref={ref}
      className={`${animClass} ${className}`}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
