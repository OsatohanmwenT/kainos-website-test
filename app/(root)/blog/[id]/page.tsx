import { getArticles } from "@/lib/api";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200&h=700";

const sections = [
  {
    title: null,
    paragraphs: [
      "In the years following the global financial crisis and the COVID-19 pandemic, quantitative easing (QE) became one of the most powerful tools used by central banks to stabilize economies. By injecting liquidity into financial systems, primarily through large-scale asset purchases, QE helped lower interest rates, support lending, and boost economic activity. However, as global markets become increasingly fragmented, the effectiveness and future of QE are being called into question.",
    ],
  },
  {
    title: "Understanding Fragmented Markets",
    paragraphs: [
      "Market fragmentation refers to a condition where financial systems are no longer unified or smoothly interconnected. Instead, they are divided along lines such as geography, regulation, political alignment, or technological infrastructure. Today, fragmentation is being driven by factors like geopolitical tensions, regional monetary policies, differing regulatory frameworks, and even digital financial ecosystems.",
      "In such an environment, capital does not flow as freely or predictably as it once did. This creates uneven responses to global monetary policies, including QE.",
    ],
  },
  {
    title: "The Limits of QE in a Fragmented World",
    paragraphs: [
      "Traditionally, QE works through well-connected financial channels. When central banks purchase government bonds or other securities, liquidity should spread across markets, lowering borrowing costs and encouraging investment. But in fragmented markets, these transmission mechanisms weaken.",
      "For example:",
      "+ Liquidity injected in one region may not effectively reach others due to regulatory or political barriers.\n+ Asset purchases may inflate prices in specific sectors without stimulating broader economic growth.\n+ Diverging economic conditions mean that a one-size-fits-all QE approach may no longer be effective.",
      "This raises a critical issue: QE may still increase liquidity, but it may not distribute it efficiently.",
    ],
  },
  {
    title: "Rising Inequality and Asset Distortion",
    paragraphs: [
      "Another concern is that QE in fragmented markets can amplify inequality, both within and between economies. Financial assets tend to benefit the most from QE, meaning wealthier individuals and stronger markets gain disproportionately. In a fragmented system, weaker economies or sectors may see little benefit, widening existing gaps.",
      "Additionally, persistent QE can distort asset prices. When liquidity is concentrated in certain markets, it can create bubbles in stocks, real estate, or bonds, increasing financial instability over time.",
    ],
  },
  {
    title: "The Shift Toward Targeted Interventions",
    paragraphs: [
      "Looking ahead, central banks may need to evolve beyond traditional QE. Instead of broad asset purchases, we are likely to see more targeted monetary interventions. These could include:",
      "+ Direct lending programs to specific industries or sectors\n+ Coordination with fiscal policy to ensure money reaches the real economy\n+ Use of digital currencies to improve the precision of monetary policy transmission",
    ],
  },
  {
    title: "Conclusion",
    paragraphs: [
      "Quantitative easing is unlikely to disappear anytime soon, but its role is changing. In a fragmented financial world, its limitations are becoming more visible. The future of QE will depend on how well central banks adapt, shifting from broad, system-wide interventions to more precise, coordinated, and context-aware strategies.",
      "Ultimately, the challenge is no longer just about injecting liquidity, but about ensuring that liquidity flows where it is actually needed.",
    ],
  },
];

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getArticles({ limit: 100 });
  const article = data.articles?.find((item) => item.id === id);

  if (!article) {
    notFound();
  }

  const imageUrl = article.image_url ?? FALLBACK_IMAGE;
  const relatedArticles =
    data.articles
      ?.filter((item) => item.id !== article.id)
      .filter((item) => item.category === article.category)
      .slice(0, 2) ?? [];
  const fallbackRelated =
    data.articles
      ?.filter((item) => item.id !== article.id)
      .filter((item) => !relatedArticles.some((related) => related.id === item.id))
      .slice(0, 2 - relatedArticles.length) ?? [];
  const similarArticles = [...relatedArticles, ...fallbackRelated];
  const formattedDate = article.published_at
    ? new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date(article.published_at))
    : null;

  return (
    <div className="flex min-h-screen flex-col bg-primary-50">
      <section className="bg-super-admin-accent-50 px-6 py-10 lg:px-16">
        <div className="mx-auto w-full">
          <h1 className="font-fraunces text-4xl font-semibold leading-tight text-text-header md:text-5xl">
            Blog Insights & Analysis
          </h1>
          <p className="mt-4 max-w-4xl font-dm-sans text-base leading-7 text-text-body">
            Expert perspectives on economic policy, research methodology, and
            data analysis from our team of institutional researchers.
          </p>
        </div>
      </section>

      <article className="bg-[#fff7ec] px-6 py-12 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="font-dm-sans text-sm font-bold text-primary-700 hover:text-primary-500"
          >
            Back to blog
          </Link>

          <header className="mt-8">
            <h2 className="max-w-3xl font-fraunces text-4xl font-semibold leading-tight text-text-header md:text-5xl">
              {article.title}
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-2 font-dm-sans text-xs font-bold uppercase tracking-wide text-primary-700">
              {article.category && <span>{article.category}</span>}
              {formattedDate && (
                <>
                  <span className="size-1 rounded-full bg-primary-700" />
                  <span>{formattedDate}</span>
                </>
              )}
              {article.read_time && (
                <>
                  <span className="size-1 rounded-full bg-primary-700" />
                  <span>{article.read_time} min read</span>
                </>
              )}
            </div>
          </header>

          <div className="mt-10 overflow-hidden rounded-xl bg-neutral-100">
            <div
              className="aspect-[16/9] bg-cover bg-center"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          </div>

          <div className="mt-7 flex items-center justify-between border-b border-border-default pb-5 font-dm-sans text-sm text-text-label">
            <div className="flex items-center gap-5">
              <span className="inline-flex items-center gap-2">
                <Heart className="size-4" />
                1.2k
              </span>
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="size-4" />
                3.2k
              </span>
            </div>
            <Share2 className="size-4" />
          </div>

          <div className="mt-10 space-y-8 font-dm-sans text-base leading-8 text-text-body">
            {article.summary && <p>{article.summary}</p>}
            {sections.map((section) => (
              <section key={section.title ?? "intro"} className="space-y-3">
                {section.title && (
                  <h3 className="font-dm-sans text-base font-bold text-text-header">
                    {section.title}
                  </h3>
                )}
                {section.paragraphs.map((paragraph, i) => {
                  const lines = paragraph.split("\n");
                  const isBulletList = lines.every((line) =>
                    line.startsWith("+ ")
                  );
                  if (isBulletList) {
                    return (
                      <ul key={i} className="list-disc space-y-2 pl-5">
                        {lines.map((line, j) => (
                          <li key={j}>{line.slice(2)}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={i}>{paragraph}</p>;
                })}
              </section>
            ))}
          </div>
        </div>
      </article>

      {similarArticles.length > 0 && (
        <section className="border-t border-border-default bg-primary-50 px-6 py-16 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-fraunces text-3xl font-semibold text-text-header">
              Similar Articles
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {similarArticles.map((item) => (
                <Link
                  href={`/blog/${item.id}`}
                  key={item.id}
                  className="group flex flex-col gap-4"
                >
                  <div
                    className="aspect-[16/10] rounded-xl bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{
                      backgroundImage: `url(${item.image_url ?? FALLBACK_IMAGE})`,
                    }}
                  />
                  <div className="font-dm-sans">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-primary-700">
                      {item.category && <span>{item.category}</span>}
                      {item.read_time && (
                        <>
                          <span className="size-1 rounded-full bg-primary-700" />
                          <span>{item.read_time} min read</span>
                        </>
                      )}
                    </div>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-text-header group-hover:text-primary-700">
                      {item.title}
                    </h3>
                    {item.summary && (
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-text-body">
                        {item.summary}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
