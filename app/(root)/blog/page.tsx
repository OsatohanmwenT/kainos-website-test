import { BlogListing } from "@/components/listings/BlogListing";
import { PageHeader } from "@/components/PageHeader";
import { getArticles } from "@/lib/api";
import { PublicArticle } from "@/lib/api/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Expert perspectives on economic policy, research methodology, and data analysis from our team of institutional researchers.",
  keywords: [
    "economic policy",
    "research methodology",
    "data analysis",
    "institutional research",
    "Africa",
    "KainosEdge blog",
    "policy insights",
    "market analysis",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "KainosEdge",
    title: "Blog & Insights | KainosEdge",
    description:
      "Expert perspectives on economic policy, research methodology, and data analysis from our team of institutional researchers.",
    url: "https://www.kainosedge.com/blog",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KainosEdge Blog & Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@kainosedge",
    title: "Blog & Insights | KainosEdge",
    description:
      "Expert perspectives on economic policy, research methodology, and data analysis from our team of institutional researchers.",
    images: ["/opengraph-image"],
  },
};

export default async function BlogPage() {
  let articles: PublicArticle[] = [];

  try {
    const data = await getArticles({ limit: 100 });
    articles = data.articles ?? [];
  } catch {
    // Fall back to empty list - BlogListing handles the empty state
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Blog Insights & Analysis"
        description="Expert perspectives on economic policy, research methodology, and data analysis from our team of institutional researchers."
        bg="bg-super-admin-accent-50"
      />
      <BlogListing articles={articles} />
    </div>
  );
}
