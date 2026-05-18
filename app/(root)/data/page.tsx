import { DatasetsListing } from "@/components/listings/DatasetsListing";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Public Datasets",
  description:
    "Access curated, validated datasets covering fiscal, monetary, and socioeconomic indicators with full documentation and methodology notes.",
  openGraph: {
    title: "Public Datasets | KainosEdge",
    description:
      "Access curated, validated datasets covering fiscal, monetary, and socioeconomic indicators with full documentation and methodology notes.",
    url: "https://kainosedge.org/data",
  },
  twitter: {
    title: "Public Datasets | KainosEdge",
    description:
      "Access curated, validated datasets covering fiscal, monetary, and socioeconomic indicators with full documentation and methodology notes.",
  },
};

export default function DataPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Public Datasets"
        description="Access curated, validated datasets covering fiscal, monetary, and socioeconomic indicators with full documentation and methodology notes."
        bg="bg-super-admin-accent-50"
      />
      <DatasetsListing />
    </div>
  );
}
