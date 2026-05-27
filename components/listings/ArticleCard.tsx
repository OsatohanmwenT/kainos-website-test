import { PublicArticle } from "@/lib/api/types";
import { Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500";

export function FeaturedArticleCard({ article }: { article: PublicArticle }) {
  const formattedDate = article.published_at
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(article.published_at))
    : null;

  const imageUrl = article.image_url ?? FALLBACK_IMAGE;

  return (
    <Link
      href={`/blog/${article.id}`}
      className="relative block w-full h-75.75 rounded-2xl overflow-hidden group cursor-pointer"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end text-white">
        <div className="flex flex-col flex-wrap gap-3 mb-4">
          <span className="px-3 w-fit py-1 bg-neutral-100 text-text-body font-dm-sans font-bold text-[10px] tracking-wider uppercase rounded-full">
            Featured Post
          </span>
          {(article.category || article.read_time) && (
            <span className="text-white/90 text-[11px] font-semibold tracking-wider uppercase flex items-center gap-2">
              {article.category}
              {article.category && article.read_time && (
                <span className="w-1 h-1 rounded-full bg-white/50" />
              )}
              {article.read_time && `${article.read_time} MIN READ`}
            </span>
          )}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold font-dm-sans mb-4 leading-tight">
          {article.title}
        </h2>

        {article.summary && (
          <p className="text-lg md:text-xl text-white/90 font-dm-sans mb-6 line-clamp-2 max-w-3xl">
            {article.summary}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-6 font-dm-sans text-sm text-white/80">
          {article.author && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium">{article.author}</span>
            </div>
          )}
          {formattedDate && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
          )}
          {article.read_time && (
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.read_time} min read</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export function ArticleCard({ article }: { article: PublicArticle }) {
  const imageUrl = article.image_url ?? FALLBACK_IMAGE;

  return (
    <Link
      href={`/blog/${article.id}`}
      className="w-full flex flex-col group cursor-pointer gap-4"
    >
      {/* Image */}
      <div className="w-full aspect-16/10 rounded-2xl overflow-hidden relative bg-neutral-100">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        {(article.category || article.read_time) && (
          <div className="flex items-center gap-2 text-primary-700 text-[10px] font-bold tracking-wider uppercase font-dm-sans mt-2">
            {article.category && (
              <span className="text-[#a45e1c]">{article.category}</span>
            )}
            {article.category && article.read_time && (
              <span className="w-1 h-1 rounded-full bg-primary-700" />
            )}
            {article.read_time && (
              <span className="text-[#a45e1c]">{article.read_time} MIN READ</span>
            )}
          </div>
        )}

        <h3 className="text-xl font-bold text-text-header font-dm-sans leading-snug group-hover:text-primary-600 transition-colors">
          {article.title}
        </h3>

        {article.summary && (
          <p className="text-text-body font-dm-sans text-sm line-clamp-2 mt-1">
            {article.summary}
          </p>
        )}
      </div>
    </Link>
  );
}
