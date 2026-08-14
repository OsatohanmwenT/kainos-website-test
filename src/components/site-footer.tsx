"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/content";
import { Logo } from "@/components/ui/logo";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X", href: "https://www.x.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
];

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/kayla") return null;

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink text-paper">
      <div className="container-page relative z-10 py-24">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-paper/60">
              We turn Africa&apos;s economic and market data into decisions you can act on.
            </p>
            <form className="mt-8 flex max-w-xs items-center gap-2 border-b border-paper/20 pb-2">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-transparent text-sm text-paper placeholder:text-paper/40 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 text-xs font-medium uppercase tracking-widest text-paper/80 hover:text-paper"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <p className="kicker text-paper/50">Pages</p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-paper/70 hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker text-paper/50">Follow</p>
            <ul className="mt-4 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-paper/70 hover:text-paper"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <p className="kicker text-paper/50">Head office</p>
              <p className="mt-2 text-sm text-paper/70">{site.address}</p>
            </div>
            <div>
              <p className="kicker text-paper/50">Email</p>
              <a href={`mailto:${site.email}`} className="mt-2 block text-sm text-paper/70 hover:text-paper">
                {site.email}
              </a>
            </div>
            <div>
              <p className="kicker text-paper/50">Phone</p>
              <a href={`tel:${site.phone}`} className="mt-2 block text-sm text-paper/70 hover:text-paper">
                {site.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-paper/10 pt-8 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <a
              href="https://tech.scribblegreen.com"
              target="_blank"
              rel="noreferrer"
              className="text-paper/40 hover:text-paper/70"
            >
              Powered by Scribble Green Technology
            </a>
            <a
              href="https://scribblegreen.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Scribble Green Technology"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 transition-transform hover:scale-125"
            />
          </div>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none absolute -bottom-16 left-1/2 z-0 -translate-x-1/2 whitespace-nowrap font-display text-[16vw] leading-none text-paper/10"
      >
        {site.name}
      </p>
    </footer>
  );
}
