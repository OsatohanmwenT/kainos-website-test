import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { WorkGrid } from "@/components/our-work/work-grid";
import { ClosingCta } from "@/components/ui/closing-cta";
import { getReports, getDatasets } from "@/lib/kidmp-api";

export const metadata: Metadata = {
  title: "Our work — KainosEdge",
  description:
    "Our work, from first question to final report. Not just what we published, but how we got there.",
};

export default async function OurWorkPage() {
  const [reports, datasets] = await Promise.all([getReports(), getDatasets()]);
  const items = [...reports, ...datasets];

  return (
    <>
      <PageHero
        kicker="Our work"
        heading="From first question to final report."
        subheading="Not just what we published, but how we got there."
        images={["/images/ourwork-1.jpg", "/images/ourwork-2.jpg"]}
      />
      <section className="bg-paper py-24 md:py-32">
        <div className="container-page">
          <WorkGrid items={items} />
        </div>
      </section>
      <ClosingCta kicker="Start a conversation" heading="Have a question our data can answer?" />
    </>
  );
}
