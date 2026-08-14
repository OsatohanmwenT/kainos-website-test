"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/content";
import { PillButton } from "@/components/ui/pill-button";
import { Logo } from "@/components/ui/logo";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-paper/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link href="/" aria-label={site.name} className="shrink-0">
          <Logo variant={solid ? "dark" : "light"} className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium uppercase tracking-widest transition-opacity hover:opacity-70 ${
                solid ? "text-ink" : "text-paper"
              } ${pathname === link.href ? "opacity-100 underline underline-offset-4" : "opacity-80"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PillButton href="/contact" variant={solid ? "dark" : "light"}>
            {site.primaryCta}
          </PillButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
            solid ? "text-ink" : "text-paper"
          }`}
          aria-label="Toggle menu"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-[1.5px] w-full bg-current transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 block h-[1.5px] w-full bg-current transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-paper px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6">
            <PillButton href="/contact">{site.primaryCta}</PillButton>
          </div>
        </div>
      )}
    </header>
  );
}
