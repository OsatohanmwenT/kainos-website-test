import { DatasetsListing } from "@/components/listings/DatasetsListing";
import { PageHeader } from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Datasets",
  description:
    "Access curated, validated datasets covering fiscal, monetary, and socioeconomic indicators with full documentation and methodology notes.",
  keywords: [
    "public datasets",
    "economic data",
    "fiscal indicators",
    "monetary data",
    "socioeconomic indicators",
    "Africa data",
    "Nigeria statistics",
    "open data",
    "KainosEdge",
  ],
  alternates: {
    canonical: "/data",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "KainosEdge",
    title: "Public Datasets | KainosEdge",
    description:
      "Access curated, validated datasets covering fiscal, monetary, and socioeconomic indicators with full documentation and methodology notes.",
    url: "https://www.kainosedge.com/data",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KainosEdge Public Datasets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@kainosedge",
    title: "Public Datasets | KainosEdge",
    description:
      "Access curated, validated datasets covering fiscal, monetary, and socioeconomic indicators with full documentation and methodology notes.",
    images: ["/opengraph-image"],
  },
};

export default function DataPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Public Datasets"
        description="Access curated, validated datasets covering fiscal, monetary, and socioeconomic indicators with full documentation and methodology notes."
        bg="bg-super-admin-accent-50"
      />
      <DatasetsListing />
    </div>
  );
}
