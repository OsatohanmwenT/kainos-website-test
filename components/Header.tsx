"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type WorkLink = {
  name: string;
  href: string;
};

type NavLink =
  | {
      name: string;
      href: string;
    }
  | {
      name: string;
      children: WorkLink[];
    };

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [workMenuOpen, setWorkMenuOpen] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setMenuOpen(false);
      setWorkMenuOpen(false);
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

  const workLinks: WorkLink[] = [
    { name: "Research", href: "/reports" },
    { name: "Data", href: "/data" },
  ];

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Our Work", children: workLinks },
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
              if ("children" in link) {
                const isActive = link.children.some(
                  (item) =>
                    pathname === item.href || pathname.startsWith(`${item.href}/`)
                );

                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setWorkMenuOpen(true)}
                    onMouseLeave={() => setWorkMenuOpen(false)}
                    onFocus={() => setWorkMenuOpen(true)}
                    onBlur={(event) => {
                      const nextTarget = event.relatedTarget as Node | null;

                      if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
                        setWorkMenuOpen(false);
                      }
                    }}
                  >
                    <button
                      type="button"
                      aria-expanded={workMenuOpen}
                      aria-haspopup="true"
                      onClick={() => setWorkMenuOpen((v) => !v)}
                      className={`flex items-center gap-1 text-sm font-semibold transition-colors px-3 py-2 rounded-lg ${
                        isActive
                          ? "bg-primary-100 text-neutral-600"
                          : "text-neutral-600 hover:text-primary-500"
                      }`}
                    >
                      {link.name}
                      <svg
                        className={`size-4 transition-transform ${
                          workMenuOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m6 9 6 6 6-6"
                        />
                      </svg>
                    </button>
                    <div
                      className={`absolute left-0 top-full z-50 w-44 pt-2 transition-all duration-150 ${
                        workMenuOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-1 pointer-events-none"
                      }`}
                    >
                      <div className="rounded-xl border border-neutral-200 bg-white p-2 shadow-lg">
                        {link.children.map((item) => {
                          const childActive =
                            pathname === item.href ||
                            pathname.startsWith(`${item.href}/`);

                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setWorkMenuOpen(false)}
                              className={`block rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                                childActive
                                  ? "bg-primary-100 text-primary-700"
                                  : "text-neutral-600 hover:bg-primary-50 hover:text-primary-500"
                              }`}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

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
              if ("children" in link) {
                const isActive = link.children.some(
                  (item) =>
                    pathname === item.href || pathname.startsWith(`${item.href}/`)
                );

                return (
                  <li key={link.name}>
                    <button
                      type="button"
                      aria-expanded={workMenuOpen}
                      onClick={() => setWorkMenuOpen((v) => !v)}
                      style={{
                        transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms",
                      }}
                      className={`group flex w-full items-center justify-between py-4 border-b border-neutral-100 transition-all duration-300 ${
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

                      <svg
                        className={`w-5 h-5 transition-all duration-200 ${
                          workMenuOpen ? "rotate-90 text-primary-500" : ""
                        } ${
                          isActive
                            ? "text-primary-500"
                            : "text-neutral-300 group-hover:text-primary-400"
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
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        workMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col border-b border-neutral-100 py-2 pl-5">
                        {link.children.map((item) => {
                          const childActive =
                            pathname === item.href ||
                            pathname.startsWith(`${item.href}/`);

                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={`py-3 text-lg font-semibold transition-colors ${
                                childActive
                                  ? "text-primary-500"
                                  : "text-neutral-600 hover:text-primary-500"
                              }`}
                            >
                              {item.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                );
              }

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
