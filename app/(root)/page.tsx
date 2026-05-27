import { HomePageContent } from "@/components/home/HomePageContent";
import { getArticles, getDatasets, getReports } from "@/lib/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research, Data & Policy Consulting for Institutions",
  description:
    "Access KainosEdge research reports, curated datasets, and expert policy consulting built for institutional decision-makers across Africa.",
  keywords: [
    "KainosEdge",
    "institutional research",
    "economic data",
    "policy consulting",
    "research reports",
    "Africa",
    "Nigeria",
    "data analytics",
    "policy advisory",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "KainosEdge",
    title: "KainosEdge | Research, Data & Policy Consulting",
    description:
      "Access research reports, curated datasets, and expert policy consulting built for institutional decision-makers across Africa.",
    url: "https://www.kainosedge.com",
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
    creator: "@kainosedge",
    title: "KainosEdge | Research, Data & Policy Consulting",
    description:
      "Access research reports, curated datasets, and expert policy consulting built for institutional decision-makers across Africa.",
    images: ["/opengraph-image"],
  },
};

export default async function Home() {
  const [reportsData, datasetsData, articlesData] = await Promise.allSettled([
    getReports({ limit: 3 }),
    getDatasets({ limit: 3 }),
    getArticles({ limit: 3 }),
  ]);

  const featuredReports =
    reportsData.status === "fulfilled" ? (reportsData.value.reports ?? []) : [];
  const featuredDatasets =
    datasetsData.status === "fulfilled" ? (datasetsData.value.datasets ?? []) : [];
  const latestArticles =
    articlesData.status === "fulfilled" ? (articlesData.value.articles ?? []) : [];

  return (
    <HomePageContent
      featuredReports={featuredReports}
      featuredDatasets={featuredDatasets}
      latestArticles={latestArticles}
    />
  );
}
