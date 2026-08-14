"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import type { PublicPublication } from "@/lib/kidmp-api";

function formatYear(dateString: string) {
  const year = new Date(dateString).getFullYear();
  return Number.isNaN(year) ? "" : String(year);
}

const filters = ["All", "Reports", "Datasets"] as const;

export function WorkGrid({ items }: { items: PublicPublication[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered =
    active === "All"
      ? items
      : items.filter((item) => item.category === (active === "Reports" ? "report" : "dataset"));

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setActive(name)}
            className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors ${
              active === name
                ? "border-ink bg-ink text-paper"
                : "border-line bg-paper text-ink-soft/70 hover:border-ink-soft"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-line px-8 py-16 text-center">
          <p className="text-sm text-ink-soft/60">
            {items.length === 0
              ? "Published reports and datasets will appear here as they're released."
              : "Nothing in this category yet."}
          </p>
        </div>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={(i % 6) * 0.05}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-line p-6">
                <div className="flex items-center justify-between">
                  <span className="kicker text-ink-soft/40">{item.category}</span>
                  <span className="kicker text-ink-soft/40">{formatYear(item.published_at)}</span>
                </div>
                <h3 className="mt-6 font-display text-xl leading-snug">{item.public_title}</h3>
                {item.summary && <p className="mt-3 text-sm text-ink-soft/70">{item.summary}</p>}
                {item.authors && item.authors.length > 0 && (
                  <p className="mt-4 text-xs uppercase tracking-widest text-ink-soft/40">
                    {item.authors.join(", ")}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
