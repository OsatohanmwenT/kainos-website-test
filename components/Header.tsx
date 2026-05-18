"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setMenuOpen(false);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Reports", href: "/reports" },
    { name: "Data", href: "/data" },
    { name: "Blog", href: "/blog" },
    { name: "Consultancy", href: "/consultancy" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="h-18 px-6 lg:px-12 bg-background border-b border-neutral-200 sticky top-0 z-50 w-full">
        <div className="mx-auto flex h-full w-full items-center justify-between">
          <Link
            href="/"
            className="font-fraunces text-2xl font-semibold tracking-tight text-primary-700 relative z-[60]"
          >
            KIDMP
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-4 font-dm-sans">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors px-3 py-2 rounded-lg ${
                    isActive
                      ? "bg-primary-100 text-neutral-600"
                      : "text-neutral-600 hover:text-primary-500"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Hamburger / Close - mobile only */}
          <button
            id="mobile-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden relative z-[60] flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-neutral-700 transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-neutral-700 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-neutral-700 transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        id="mobile-nav-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-[55] flex flex-col bg-background lg:hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Spacer to sit below the sticky header */}
        {/* Header bar replica - close button lives here */}
        <div className="h-18 shrink-0 border-b border-neutral-200 flex items-center justify-end px-6">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold font-dm-sans text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
            Close
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 flex flex-col justify-center px-8 font-dm-sans overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{
                      transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms",
                    }}
                    className={`group flex items-center justify-between py-4 border-b border-neutral-100 transition-all duration-300 ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3"
                    }`}
                  >
                    <span
                      className={`text-2xl font-semibold tracking-tight transition-colors ${
                        isActive
                          ? "text-primary-500"
                          : "text-neutral-700 group-hover:text-primary-500"
                      }`}
                    >
                      {link.name}
                    </span>

                    {/* Arrow icon */}
                    <svg
                      className={`w-5 h-5 transition-all duration-200 ${
                        isActive
                          ? "text-primary-500"
                          : "text-neutral-300 group-hover:text-primary-400 group-hover:translate-x-1"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

      </div>
    </>
  );
}
