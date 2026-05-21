"use client";

import { PublicArticle } from "@/lib/api/types";
import { useMemo, useState } from "react";
import { ArticleCard, FeaturedArticleCard } from "./ArticleCard";
import { BlogControls } from "./BlogControls";
import { EmptyState } from "./EmptyState";
import { ListingPagination } from "./ListingPagination";

interface BlogListingProps {
  articles: PublicArticle[];
}

const ITEMS_PER_PAGE = 12; // 3 columns * 4 rows

export function BlogListing({ articles }: BlogListingProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const isFiltering =
    searchQuery !== "" ||
    selectedCategory !== "all";

  const featuredArticle = useMemo(
    () => articles.find((article) => article.featured),
    [articles],
  );

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const result = articles
      .filter((article) => article.id !== featuredArticle?.id)
      .filter((article) => {
        const matchesQuery =
          query === "" ||
          article.title.toLowerCase().includes(query) ||
          (article.summary ?? "").toLowerCase().includes(query);
        const matchesCategory =
          selectedCategory === "all" || article.category === selectedCategory;

        return matchesQuery && matchesCategory;
      });

    return result.sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.published_at ?? 0).getTime() - new Date(a.published_at ?? 0).getTime();
      }

      if (sortOrder === "oldest") {
        return new Date(a.published_at ?? 0).getTime() - new Date(b.published_at ?? 0).getTime();
      }

      return 0;
    });
  }, [
    articles,
    featuredArticle?.id,
    searchQuery,
    selectedCategory,
    sortOrder,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / ITEMS_PER_PAGE),
  );

  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="flex flex-col bg-primary-50 min-h-screen">
      <BlogControls
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <div className="mx-auto flex w-full flex-col gap-12 bg-primary-50 px-6 py-8 lg:px-16">
        {!isFiltering && currentPage === 1 && featuredArticle && (
          <div className="animate-fade-up">
            <FeaturedArticleCard article={featuredArticle} />
          </div>
        )}

        {currentArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {currentArticles.map((article, i) => (
              <div
                key={article.id}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 55}ms` }}
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon="articles"
            title="No articles found"
            description="Try a different search term or browse all categories to discover our latest insights."
            action={{
              label: "Clear filters",
              onClick: () => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSortOrder("newest");
                setCurrentPage(1);
              },
            }}
          />
        )}

        {filteredArticles.length > 0 && (
          <ListingPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            variant="compact"
          />
        )}
      </div>
    </div>
  );
}
