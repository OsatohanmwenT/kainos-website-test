import { Hero } from "@/components/home/hero";
import { WorkStreamsStrip } from "@/components/home/work-streams-strip";
import { FeaturedWorkCarousel } from "@/components/home/featured-work-carousel";
import { MarketNewsPreview } from "@/components/home/market-news-preview";
import { KaylaBanner } from "@/components/home/kayla-banner";
import { CredibilityStrip } from "@/components/home/credibility-strip";
import { ClosingCta } from "@/components/ui/closing-cta";
import { getFeatured } from "@/lib/kidmp-api";

export default async function Home() {
  const featured = await getFeatured();
  const featuredItems = [...featured.featured_reports, ...featured.featured_datasets];

  return (
    <>
      <Hero />
      <WorkStreamsStrip />
      <FeaturedWorkCarousel items={featuredItems} />
      <MarketNewsPreview />
      <KaylaBanner />
      <CredibilityStrip />
      <ClosingCta
        kicker="Build smarter decisions"
        heading="Ready to see what your data isn't telling you?"
      />
    </>
  );
}
