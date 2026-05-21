import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { DM_Sans, Fraunces, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kainosedge.org"),
  title: {
    default: "KainosEdge | Institutional Data & Research Platform",
    template: "%s | KainosEdge",
  },
  description:
    "Evidence-based reports, curated datasets, and expert consultancy services powering institutional decision-making across Africa.",
  keywords: [
    "institutional research",
    "economic data",
    "policy analysis",
    "Africa",
    "Nigeria",
    "datasets",
    "research reports",
    "consultancy",
  ],
  authors: [{ name: "KainosEdge", url: "https://kainosedge.org" }],
  creator: "KainosEdge",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kainosedge.org",
    siteName: "KainosEdge",
    title: "KainosEdge | Institutional Data & Research Platform",
    description:
      "Evidence-based reports, curated datasets, and expert consultancy services powering institutional decision-making across Africa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KainosEdge | Institutional Data & Research Platform",
    description:
      "Evidence-based reports, curated datasets, and expert consultancy services powering institutional decision-making across Africa.",
    creator: "@kainosedge",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, fraunces.variable, dmSans.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
