"use client";

import { useMemo, useState } from "react";
import {
  newsFeed,
  newsFeedCategories,
  newsFeedContinents,
  newsFeedCountries,
  newsFeedIndicators,
} from "@/lib/content";

export function NewsView() {
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState(newsFeedContinents[0]);
  const [country, setCountry] = useState(newsFeedCountries[0]);
  const [indicator, setIndicator] = useState(newsFeedIndicators[0]);
  const [category, setCategory] = useState(newsFeedCategories[0]);

  const filtered = useMemo(() => {
    return newsFeed.filter((item) => {
      if (search && !item.headline.toLowerCase().includes(search.toLowerCase())) return false;
      if (continent !== newsFeedContinents[0] && item.continent !== continent) return false;
      if (country !== newsFeedCountries[0] && item.country !== country) return false;
      if (indicator !== "All" && item.indicator !== indicator) return false;
      if (category !== "All" && item.category !== category) return false;
      return true;
    });
  }, [search, continent, country, indicator, category]);

  return (
    <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
      <aside>
        <h2 className="font-display text-2xl">News View</h2>
        <p className="mt-2 text-sm text-ink-soft/60">
          The raw feed underneath KainosEdge&apos;s commentary.
        </p>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search headlines…"
          className="mt-6 w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/40 focus:border-ink focus:outline-none"
        />

        <div className="mt-6">
          <p className="kicker mb-2 text-ink-soft/40">Continent</p>
          <select
            value={continent}
            onChange={(e) => setContinent(e.target.value)}
            className="w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
          >
            {newsFeedContinents.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <p className="kicker mb-2 text-ink-soft/40">Country</p>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
          >
            {newsFeedCountries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6">
          <p className="kicker mb-3 text-ink-soft/40">Indicator</p>
          <div className="flex flex-col gap-2">
            {newsFeedIndicators.map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndicator(i)}
                className={`rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors ${
                  indicator === i ? "bg-ink text-paper" : "text-ink-soft/70 hover:bg-paper-soft"
                }`}
              >
                {i}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="kicker mb-3 text-ink-soft/40">Category</p>
          <div className="flex flex-wrap gap-2">
            {newsFeedCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
                  category === c
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-ink-soft/70 hover:border-ink-soft"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <div className="min-w-0">
        <p className="kicker text-ink-soft/40">
          {filtered.length} {filtered.length === 1 ? "headline" : "headlines"}
        </p>

        {filtered.length === 0 ? (
          <p className="mt-8 text-sm text-ink-soft/60">No headlines match these filters.</p>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filtered.map((item, i) => (
              <article
                key={`${item.headline}-${i}`}
                className="flex h-full min-w-0 flex-col rounded-2xl border border-line bg-paper p-6 transition-colors hover:bg-paper-soft"
              >
                <p className="min-w-0 truncate text-xs text-ink-soft/50">
                  {item.source} · {item.country} · {item.timeAgo}
                </p>
                <h3 className="mt-4 min-w-0 break-words font-display text-base leading-snug">
                  {item.headline}
                </h3>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
