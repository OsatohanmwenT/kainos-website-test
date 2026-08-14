import { marketTicker } from "@/lib/content";

function CurrencyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8h4a2 2 0 0 1 0 4H9m0 0h4a2 2 0 0 1 0 4H9m3-10v12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9Z" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 10l9-6 9 6M4 10h16M5 10v9M9 10v9M15 10v9M19 10v9M3 21h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 19V9M10 19V5M16 19v-7M20 19H4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const icons = { currency: CurrencyIcon, globe: GlobeIcon, bank: BankIcon, chart: ChartIcon };

function TickerCell({ item }: { item: (typeof marketTicker)[number] }) {
  const Icon = icons[item.icon];
  return (
    <div className="flex shrink-0 items-center gap-3 border-r border-paper/10 px-6 py-4">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper/10 text-paper/70">
        <Icon />
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-paper/50">{item.label}</p>
        <p className="mt-0.5 flex items-baseline gap-2">
          <span className="font-display text-lg text-paper">{item.value}</span>
          <span
            className={`flex items-center gap-0.5 text-xs font-medium ${
              item.direction === "up" ? "text-accent" : "text-rose-400"
            }`}
          >
            {item.direction === "up" ? "▲" : "▼"} {item.change}
          </span>
        </p>
      </div>
    </div>
  );
}

export function MarketTicker() {
  const doubled = [...marketTicker, ...marketTicker];
  return (
    <div className="overflow-hidden border-y border-paper/10 bg-ink">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <TickerCell key={`${item.label}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}
