"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { siteStats } from "./siteData";

interface StatsBandProps {
  className?: string;
  style?: CSSProperties;
}

const defaultStyle = {
  background:
    "radial-gradient(ellipse 55% 140% at 100% 0%, #C97B2A 0%, transparent 65%), #1a0f04",
};

function parseStatValue(value: string) {
  const suffix = value.replace(/[\d,.]/g, "");
  const numericValue = Number(value.replace(/[^\d.]/g, ""));

  return {
    numericValue: Number.isFinite(numericValue) ? numericValue : 0,
    suffix,
    hasDecimal: value.includes("."),
  };
}

function formatStatValue(value: number, hasDecimal: boolean, suffix: string) {
  const formatted = hasDecimal
    ? value.toFixed(1)
    : Math.round(value).toLocaleString("en-US");

  return `${formatted}${suffix}`;
}

function AnimatedStatValue({ value, delay = 0 }: { value: string; delay?: number }) {
  const { numericValue, suffix, hasDecimal } = parseStatValue(value);
  const [displayValue, setDisplayValue] = useState(() =>
    formatStatValue(0, hasDecimal, suffix)
  );
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      frameRef.current = window.requestAnimationFrame(() => {
        setDisplayValue(value);
      });
      return () => window.cancelAnimationFrame(frameRef.current);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const duration = 1400;

        const start = () => {
          const startTime = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = numericValue * eased;

            setDisplayValue(formatStatValue(current, hasDecimal, suffix));

            if (progress < 1) {
              frameRef.current = window.requestAnimationFrame(animate);
            }
          };

          frameRef.current = window.requestAnimationFrame(animate);
        };

        timerRef.current = setTimeout(start, delay);
        observer.unobserve(el);
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [delay, hasDecimal, numericValue, suffix, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export function StatsBand({ className = "bg-text-header", style }: StatsBandProps) {
  return (
    <section className={`w-full px-6 py-8 lg:px-16 ${className}`} style={style ?? defaultStyle}>
      <div className="mx-auto grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
        {siteStats.map((stat, index) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center text-center lg:border-r lg:border-white/70 last:lg:border-r-0"
          >
            <strong className="font-dm-sans text-3xl font-extrabold text-white md:text-4xl">
              <AnimatedStatValue value={stat.value} delay={index * 120} />
            </strong>
            <span className="mt-3 font-dm-sans text-sm text-primary-50">
              {stat.label}
            </span>
            {index === siteStats.length - 1 ? null : (
              <span className="mt-4 h-px w-14 bg-primary-500 lg:hidden" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
