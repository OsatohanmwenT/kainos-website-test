import Link from "next/link";

export function CapsuleLink({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex w-full max-w-sm items-start gap-4 rounded-2xl border border-white/10 bg-ink/60 p-5 backdrop-blur-md transition-colors duration-300 hover:bg-ink/80 sm:w-auto"
    >
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-paper">
        {icon}
      </span>
      <span className="flex-1">
        <span className="flex items-center justify-between gap-2">
          <span className="font-medium text-paper">{title}</span>
          <span
            aria-hidden
            className="text-paper/70 transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
        <span className="mt-1 block text-sm text-paper/60">{description}</span>
      </span>
    </Link>
  );
}
