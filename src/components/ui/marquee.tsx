export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 shrink-0 whitespace-nowrap text-lg font-medium text-ink-soft/50"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
