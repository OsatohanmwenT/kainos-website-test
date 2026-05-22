"use client";

import { Fragment, useEffect, useRef, useState } from "react";

interface TextAnimateProps {
  children: string;
  className?: string;
  /** ms between each word, mirrors MagicUI default */
  stagger?: number;
  /** initial delay before the first word in ms */
  delay?: number;
  threshold?: number;
}

export function TextAnimate({
  children,
  className = "",
  stagger = 50,
  delay = 0,
  threshold = 0.12,
}: TextAnimateProps) {
  const ref = useRef<HTMLSpanElement>(null);
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

  const words = children.split(/\s+/);

  return (
    <span ref={ref} className={`inline ${className}`} aria-label={children}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span
            aria-hidden="true"
            className={`inline-block will-change-[transform,opacity] ${
              visible ? "animate-word-up" : "opacity-0 translate-y-2.5"
            }`}
            style={visible ? { animationDelay: `${delay + i * stagger}ms` } : undefined}
          >
            {word}
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </span>
  );
}
