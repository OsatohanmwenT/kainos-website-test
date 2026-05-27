import { PageHeader } from "@/components/PageHeader";
import { ReportsListing } from "@/components/listings/ReportsListing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Reports",
  description:
    "Access our comprehensive library of institutional research reports covering economic policy, social indicators, and strategic analysis across Africa.",
  keywords: [
    "research reports",
    "institutional research",
    "economic policy",
    "social indicators",
    "strategic analysis",
    "Africa",
    "Nigeria",
    "policy research",
    "KainosEdge",
  ],
  alternates: {
    canonical: "/reports",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "KainosEdge",
    title: "Research Reports | KainosEdge",
    description:
      "Access our comprehensive library of institutional research reports covering economic policy, social indicators, and strategic analysis across Africa.",
    url: "https://www.kainosedge.com/reports",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KainosEdge Research Reports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@kainosedge",
    title: "Research Reports | KainosEdge",
    description:
      "Access our comprehensive library of institutional research reports covering economic policy, social indicators, and strategic analysis across Africa.",
    images: ["/opengraph-image"],
  },
};

export default function ReportsPage() {
  return (
    <div className="flex flex-col h-full bg-primary-50 w-full">
      <PageHeader
        title="Research Reports"
        description="Access our comprehensive library of institutional research reports covering economic policy, social indicators, and strategic analysis."
        bg="bg-super-admin-accent-50"
      />
      <ReportsListing />
    </div>
  );
}
