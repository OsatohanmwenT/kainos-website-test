import { Button } from "@/components/ui/button";
import { PublicationDownloadButton } from "@/components/publications/PublicationFile";
import { getDatasets } from "@/lib/api";
import { Calendar, Database, Lock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const data = await getDatasets({ limit: 100 });
  const dataset = data.datasets?.find((item) => item.id === id);

  if (!dataset) {
    return { title: "Dataset Not Found" };
  }

  const description =
    dataset.summary ??
    `Access the dataset: ${dataset.public_title} — curated, validated data from KainosEdge Consulting.`;

  return {
    title: dataset.public_title,
    description,
    alternates: { canonical: `/data/${id}` },
    openGraph: {
      type: "article",
      locale: "en_US",
      siteName: "KainosEdge",
      title: `${dataset.public_title} | KainosEdge`,
      description,
      url: `https://www.kainosedge.com/data/${id}`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: dataset.public_title }],
      ...(dataset.publication_date && { publishedTime: dataset.publication_date }),
    },
    twitter: {
      card: "summary_large_image",
      creator: "@kainosedge",
      title: `${dataset.public_title} | KainosEdge`,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function DatasetDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getDatasets({ limit: 100 });
  const dataset = data.datasets?.find((item) => item.id === id);

  if (!dataset) {
    notFound();
  }

  const formattedDate = dataset.publication_date
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(dataset.publication_date))
    : "Not dated";
  const fallbackDownloadUrl =
    dataset.download_url ?? dataset.stored_items?.download_url ?? null;
  const isRestricted = dataset.stored_items?.label === "restricted";
  const canDownload =
    dataset.is_visible !== false && dataset.allow_download && !isRestricted;
  const accessHref = `/contact?request=access&itemType=dataset&itemId=${encodeURIComponent(
    dataset.id
  )}&itemTitle=${encodeURIComponent(dataset.public_title)}#contact-form`;

  return (
    <div className="flex min-h-screen flex-col bg-primary-50">
      <section className="bg-[#FFFBF4] px-6 py-12 lg:px-16 lg:py-16">
        <div className="mx-auto w-full">
          <div>
            <Link
              href="/data"
              className="font-dm-sans text-sm font-bold text-primary-700 hover:text-primary-500"
            >
              Back to datasets
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {dataset.stored_items?.data_type && (
                <span className="inline-flex rounded-full bg-admin-accent-50 px-3 py-1 font-dm-sans text-xs font-bold uppercase text-admin-accent-500">
                  {dataset.stored_items.data_type}
                </span>
              )}
              {!canDownload && (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF4D6] px-3 py-1 font-dm-sans text-xs font-bold uppercase text-[#8A6500]">
                  <Lock className="size-3" />
                  Restricted Access
                </span>
              )}
            </div>
            <h1 className="mt-4 font-fraunces text-4xl font-semibold leading-tight text-text-header md:text-5xl">
              {dataset.public_title}
            </h1>
            {dataset.summary && (
              <p className="mt-5 max-w-3xl font-dm-sans text-base leading-7 text-text-body md:text-lg">
                {dataset.summary}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-4 font-dm-sans text-sm text-neutral-600">
              <span className="inline-flex items-center gap-2">
                <Calendar className="size-4" />
                {formattedDate}
              </span>
              {canDownload && dataset.stored_items?.file_name && (
                <span className="inline-flex items-center gap-2">
                  <Database className="size-4" />
                  {dataset.stored_items.file_name}
                </span>
              )}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {canDownload ? (
                <PublicationDownloadButton
                  publicationId={dataset.id}
                  label="Download Dataset"
                  fallbackDownloadUrl={fallbackDownloadUrl}
                  fallbackFileName={dataset.stored_items?.file_name}
                  requestAccessHref={accessHref}
                  className="h-12 rounded-2xl bg-primary-500 px-6 text-white hover:bg-primary-700"
                />
              ) : (
                <Button asChild className="h-12 rounded-2xl bg-[#D4A017] px-6 text-white hover:bg-[#b08513]">
                  <a href={accessHref}>
                    Request Access
                    <Lock className="ml-2 size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-16 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1fr]">
          <div className="rounded-xl border border-border-default bg-white p-6 font-dm-sans">
            <h2 className="text-lg font-bold text-text-header">Dataset Details</h2>
            <div className="mt-5 grid gap-4 text-sm">
              {canDownload && dataset.stored_items?.file_name && (
                <div>
                  <p className="font-bold uppercase text-text-label">File</p>
                  <p className="mt-1 text-text-body">{dataset.stored_items.file_name}</p>
                </div>
              )}
              {dataset.stored_items?.year && (
                <div>
                  <p className="font-bold uppercase text-text-label">Year</p>
                  <p className="mt-1 text-text-body">{dataset.stored_items.year}</p>
                </div>
              )}
              {dataset.stored_items?.frequency && (
                <div>
                  <p className="font-bold uppercase text-text-label">Frequency</p>
                  <p className="mt-1 text-text-body">{dataset.stored_items.frequency}</p>
                </div>
              )}
              {dataset.stored_items?.indicator && (
                <div>
                  <p className="font-bold uppercase text-text-label">Indicator</p>
                  <p className="mt-1 text-text-body">{dataset.stored_items.indicator}</p>
                </div>
              )}
              {dataset.stored_items?.label && (
                <div>
                  <p className="font-bold uppercase text-text-label">Label</p>
                  <p className="mt-1 text-text-body">{dataset.stored_items.label}</p>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-border-default bg-white p-6 font-dm-sans">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-admin-accent-50 text-admin-accent-500">
                <Database className="size-5" />
              </div>
              <h2 className="text-lg font-bold text-text-header">View-only Preview</h2>
            </div>
            <p className="mt-5 leading-7 text-text-body">
              This page recreates the public dashboard-style view for the
              dataset. It shows the available metadata and access state without
              exposing internal editing or review controls.
            </p>
            {canDownload && dataset.stored_items?.file_name && (
              <div className="mt-6 rounded-lg bg-primary-50 p-4">
                <p className="font-bold uppercase text-text-label">Source File</p>
                <p className="mt-2 text-sm leading-6 text-text-body">
                  {dataset.stored_items.file_name}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
