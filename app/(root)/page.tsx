import { HomePageContent } from "@/components/home/HomePageContent";
import { getArticles, getDatasets, getReports } from "@/lib/api";

export const metadata = {
  title: "Data-Driven Insights for Institutional Decision-Making",
  description:
    "Access evidence-based reports, curated datasets, and expert consultancy services designed for institutional decision-makers across Africa.",
  openGraph: {
    title: "KainosEdge | Data-Driven Insights",
    description:
      "Access evidence-based reports, curated datasets, and expert consultancy services designed for institutional decision-makers across Africa.",
    url: "https://kainosedge.org",
  },
  twitter: {
    title: "KainosEdge | Data-Driven Insights",
    description:
      "Access evidence-based reports, curated datasets, and expert consultancy services designed for institutional decision-makers across Africa.",
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
