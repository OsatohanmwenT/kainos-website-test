import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ClosingCta } from "@/components/ui/closing-cta";
import { getBlogPosts } from "@/lib/kidmp-api";

export const metadata: Metadata = {
  title: "Blog — KainosEdge",
  description: "Commentary and analysis from the KainosEdge team.",
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHero
        kicker="Blog"
        heading="Commentary and analysis from our team."
        subheading="Shorter reads on what's moving in the numbers, between the formal reports."
      />
      <section className="bg-paper py-24 md:py-32">
        <div className="container-page">
          {posts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-line px-8 py-16 text-center">
              <p className="text-sm text-ink-soft/60">New posts will appear here as they're published.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.id} delay={(i % 6) * 0.05}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line transition-colors hover:bg-paper-soft"
                  >
                    {post.cover_image_url && (
                      <div className="aspect-[16/10] w-full overflow-hidden bg-paper-mute">
                        <img
                          src={post.cover_image_url}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-3">
                        {post.category && <span className="kicker text-ink-soft/40">{post.category}</span>}
                        <span className="kicker text-ink-soft/40">{formatDate(post.published_at)}</span>
                      </div>
                      <h3 className="mt-4 font-display text-xl leading-snug">{post.title}</h3>
                      {post.summary && (
                        <p className="mt-3 text-sm text-ink-soft/70">{post.summary}</p>
                      )}
                      <div className="mt-auto pt-6 text-xs uppercase tracking-widest text-ink-soft/50">
                        {post.profiles?.full_name ?? "KainosEdge"}
                        {post.read_time_mins ? ` · ${post.read_time_mins} min read` : ""}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
      <ClosingCta kicker="Start a conversation" heading="Have a question our data can answer?" />
    </>
  );
}
