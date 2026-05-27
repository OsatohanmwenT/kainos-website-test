import { BlogListing } from "@/components/listings/BlogListing";
import { PageHeader } from "@/components/PageHeader";
import { getArticles } from "@/lib/api";
import { PublicArticle } from "@/lib/api/types";

export const metadata = {
  title: "Blog & Insights",
  description:
    "Expert perspectives on economic policy, research methodology, and data analysis from our team of institutional researchers.",
  openGraph: {
    title: "Blog & Insights | KainosEdge",
    description:
      "Expert perspectives on economic policy, research methodology, and data analysis from our team of institutional researchers.",
    url: "https://www.kainosedge.com/blog",
  },
  twitter: {
    title: "Blog & Insights | KainosEdge",
    description:
      "Expert perspectives on economic policy, research methodology, and data analysis from our team of institutional researchers.",
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
