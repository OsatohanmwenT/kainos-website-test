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
  metadataBase: new URL("https://www.kainosedge.com"),
  title: {
    default: "KainosEdge | Research, Data & Policy Consulting",
    template: "%s | KainosEdge",
  },
  description:
    "KainosEdge provides evidence-based research reports, curated datasets, and policy consulting for institutions making data-driven decisions across Africa.",
  applicationName: "KainosEdge",
  keywords: [
    "KainosEdge",
    "institutional research",
    "economic data",
    "policy analysis",
    "data consulting",
    "research consultancy",
    "Africa",
    "Nigeria",
    "datasets",
    "research reports",
    "consultancy",
  ],
  authors: [{ name: "KainosEdge", url: "https://www.kainosedge.com" }],
  creator: "KainosEdge",
  publisher: "KainosEdge",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kainosedge.com",
    siteName: "KainosEdge",
    title: "KainosEdge | Research, Data & Policy Consulting",
    description:
      "Evidence-based reports, curated datasets, and expert consulting for institutions making data-driven decisions across Africa.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KainosEdge research, data, and policy consulting preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KainosEdge | Research, Data & Policy Consulting",
    description:
      "Evidence-based reports, curated datasets, and expert consulting for institutions making data-driven decisions across Africa.",
    creator: "@kainosedge",
    images: ["/opengraph-image"],
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
