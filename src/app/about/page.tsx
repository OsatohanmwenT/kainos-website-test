import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { WhoWeAre } from "@/components/about/who-we-are";
import { VisionMissionValues } from "@/components/about/vision-mission-values";
import { ApproachSection } from "@/components/about/approach-section";
import { PeopleCulture } from "@/components/about/people-culture";
import { TeamSection } from "@/components/about/team-section";
import { ClientLogoWall } from "@/components/about/client-logo-wall";
import { ClosingCta } from "@/components/ui/closing-cta";

export const metadata: Metadata = {
  title: "About us — KainosEdge",
  description:
    "KainosEdge Consulting Limited is an economics research and consulting company built to increase understanding, reduce uncertainty, and positively affect outcomes.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About us"
        heading="Knowledge, applied with integrity."
        subheading="An economics research and consulting company built to increase understanding, reduce uncertainty, and positively affect outcomes."
        images={["/images/about-1.jpg", "/images/about-2.jpg"]}
      />
      <WhoWeAre />
      <VisionMissionValues />
      <ApproachSection />
      <PeopleCulture />
      <TeamSection />
      <ClientLogoWall />
      <ClosingCta kicker="Work with us" heading="Ready to see how we work?" />
    </>
  );
}
