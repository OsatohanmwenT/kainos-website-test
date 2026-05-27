import { PageHeader } from "@/components/PageHeader";
import { ReportsListing } from "@/components/listings/ReportsListing";

export const metadata = {
  title: "Research Reports",
  description:
    "Access our comprehensive library of institutional research reports covering economic policy, social indicators, and strategic analysis across Africa.",
  openGraph: {
    title: "Research Reports | KainosEdge",
    description:
      "Access our comprehensive library of institutional research reports covering economic policy, social indicators, and strategic analysis across Africa.",
    url: "https://www.kainosedge.com/reports",
  },
  twitter: {
    title: "Research Reports | KainosEdge",
    description:
      "Access our comprehensive library of institutional research reports covering economic policy, social indicators, and strategic analysis across Africa.",
  },
};

export default function ReportsPage() {
  return (
    <div className="flex flex-col h-full bg-primary-50 w-full">
      <PageHeader
        title="Research Reports"
        description="Access our comprehensive library of institutional research reports covering economic policy, social indicators, and strategic analysis."
        bg="bg-super-admin-accent-50"
      />
      <ReportsListing />
    </div>
  );
}
