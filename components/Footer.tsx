import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary-100 pt-16 pb-8 px-6 lg:px-16 w-full mt-auto">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col gap-4 lg:pr-8">
            <Image
              src="/LOGO.svg"
              alt="KainosEdge"
              width={240}
              height={120}
              className="h-20 w-auto self-start"
            />
            <p className="font-dm-sans text-neutral-600 text-base leading-relaxed">
              Data-driven research and insights for policy, strategy, and
              institutional decision-making.
            </p>
          </div>

          <div className="flex flex-col gap-8 font-dm-sans">
            <h3 className="font-bold text-text-header tracking-wide text-base uppercase">
              NAVIGATE
            </h3>
            <ul className="flex flex-col gap-5 *:hover:text-primary-500 text-neutral-600">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/reports"
                  className="hover:text-primary-600 transition-colors"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/data"
                  className="hover:text-primary-600 transition-colors"
                >
                  Data
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/consultancy"
                  className="hover:text-primary-600 transition-colors"
                >
                  Consultancy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8 font-dm-sans">
            <h3 className="font-bold text-text-header tracking-wide text-base uppercase">
              CONTACT
            </h3>
            <ul className="flex flex-col gap-5 *:hover:text-primary-500 text-neutral-600">
              <li>
                <a
                  href="mailto:info@kainosedge.com"
                  className="hover:text-primary-600 transition-colors"
                >
                  info@kainosedge.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2349034292848"
                  className="hover:text-primary-600 transition-colors"
                >
                  09034292848
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-neutral-300 mb-8" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 font-dm-sans text-neutral-600 text-base">
          <div>&copy; 2026 KainosEdge. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-primary-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary-600 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
