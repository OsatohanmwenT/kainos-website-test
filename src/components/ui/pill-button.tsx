import Link from "next/link";
import clsx from "clsx";

export function PillButton({
  href,
  children,
  variant = "dark",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        variant === "dark"
          ? "bg-ink text-paper hover:bg-ink-soft"
          : "bg-paper text-ink hover:bg-paper-soft",
        "hover:scale-[1.02] active:scale-[0.98]",
        className,
      )}
    >
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
