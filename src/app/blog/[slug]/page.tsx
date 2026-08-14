import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { ClosingCta } from "@/components/ui/closing-cta";
import { getBlogPost } from "@/lib/kidmp-api";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — KainosEdge`,
    description: post.summary ?? undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-20 pt-44 text-paper md:pb-28 md:pt-52">
        {post.cover_image_url && (
          <>
            <img
              src={post.cover_image_url}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
          </>
        )}
        <div className="container-page relative z-10">
          <Reveal>
            <Kicker>{post.category ?? "Blog"}</Kicker>
            <h1 className="max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-sm text-paper/60">
              {post.profiles?.full_name ?? "KainosEdge"} · {formatDate(post.published_at)}
              {post.read_time_mins ? ` · ${post.read_time_mins} min read` : ""}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="container-page max-w-3xl">
          <Reveal>
            <div
              className="prose prose-neutral max-w-none prose-headings:font-display prose-a:text-accent"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Reveal>

          {post.similar_posts.length > 0 && (
            <div className="mt-20 border-t border-line pt-12">
              <Kicker>Related posts</Kicker>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {post.similar_posts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="group rounded-2xl border border-line p-5 transition-colors hover:bg-paper-soft"
                  >
                    <h3 className="font-display text-lg leading-snug">{related.title}</h3>
                    {related.summary && (
                      <p className="mt-2 text-sm text-ink-soft/70">{related.summary}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ClosingCta kicker="Start a conversation" heading="Have a question our data can answer?" />
    </>
  );
}
