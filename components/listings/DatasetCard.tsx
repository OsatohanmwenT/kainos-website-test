import { Button } from "@/components/ui/button";
import { PublicationDownloadButton } from "@/components/publications/PublicationFile";
import { PublicDataset } from "@/lib/api/types";
import { Lock } from "lucide-react";
import Link from "next/link";

export function DatasetCard({ dataset }: { dataset: PublicDataset }) {
  const dataType = dataset.stored_items?.data_type ?? null;
  const year = dataset.stored_items?.year?.toString() ?? null;
  const frequency = dataset.stored_items?.frequency ?? null;
  const label = dataset.stored_items?.label ?? null;
  const indicator = dataset.stored_items?.indicator ?? null;
  const fallbackDownloadUrl =
    dataset.download_url ?? dataset.stored_items?.download_url ?? null;
  const isRestricted = dataset.stored_items?.label === "restricted";
  const canDownload =
    dataset.is_visible !== false && dataset.allow_download && !isRestricted;
  const accessHref = `/contact?request=access&itemType=dataset&itemId=${encodeURIComponent(
    dataset.id
  )}&itemTitle=${encodeURIComponent(dataset.public_title)}#contact-form`;

  const formattedDate = dataset.publication_date
    ? new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(
        new Date(dataset.publication_date)
      )
    : null;

  return (
    <div className="w-full bg-white border border-border-default font-dm-sans rounded-xl p-6 md:p-8 flex flex-col gap-6 transition-shadow hover:shadow-sm">
      <div className="flex flex-col gap-3">
        {dataType && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 font-semibold text-xs rounded-full inline-block w-max">
              {dataType}
            </span>
            {!canDownload && (
              <span className="inline-flex w-max items-center gap-1 rounded-full bg-[#FFF4D6] px-3 py-1 text-xs font-semibold text-[#8A6500]">
                <Lock className="size-3" />
                Restricted Access
              </span>
            )}
          </div>
        )}
        {!dataType && !canDownload && (
          <span className="inline-flex w-max items-center gap-1 rounded-full bg-[#FFF4D6] px-3 py-1 text-xs font-semibold text-[#8A6500]">
            <Lock className="size-3" />
            Restricted Access
          </span>
        )}

        <h3 className="line-clamp-2 text-xl font-bold text-text-header">
          {dataset.public_title}
        </h3>

        {dataset.summary && (
          <p className="line-clamp-2 text-text-body font-dm-sans text-sm md:text-base">
            {dataset.summary}
          </p>
        )}

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-4 mt-2">
          {year && (
            <div className="flex min-w-0 flex-col">
              <span className="text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                Year
              </span>
              <span className="truncate text-sm font-semibold text-neutral-800">{year}</span>
            </div>
          )}
          {frequency && (
            <div className="flex min-w-0 flex-col">
              <span className="text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                Frequency
              </span>
              <span className="truncate text-sm font-semibold text-neutral-800">{frequency}</span>
            </div>
          )}
          {indicator && (
            <div className="flex min-w-0 flex-col">
              <span className="text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                Indicator
              </span>
              <span className="truncate text-sm font-semibold text-neutral-800">{indicator}</span>
            </div>
          )}
          {label && (
            <div className="flex min-w-0 flex-col">
              <span className="text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                Label
              </span>
              <span className="truncate text-sm font-semibold text-neutral-800">{label}</span>
            </div>
          )}
        </div>

        {formattedDate && (
          <div className="text-sm text-neutral-400 mt-2">
            Published: {formattedDate}
          </div>
        )}
      </div>

      <div className="border-t border-neutral-100 pt-4 flex flex-col sm:flex-row gap-3 mt-auto">
        {canDownload ? (
          <PublicationDownloadButton
            publicationId={dataset.id}
            label="Download Dataset"
            containerClassName="w-full sm:flex-1"
            fallbackDownloadUrl={fallbackDownloadUrl}
            fallbackFileName={dataset.stored_items?.file_name}
            requestAccessHref={accessHref}
            className="w-full h-13 px-6 cursor-pointer rounded-2xl bg-primary-500 hover:bg-primary-700 text-white"
          />
        ) : (
          <Button asChild className="w-full sm:flex-1 h-13 px-6 cursor-pointer rounded-2xl bg-[#D4A017] hover:bg-[#b08513] text-white">
            <a href={accessHref}>
              Request Access
              <Lock className="w-4 h-4 ml-2" />
            </a>
          </Button>
        )}
        <Button
          asChild
          variant="outline"
          className="w-full sm:w-auto h-13 px-6 cursor-pointer rounded-2xl border-primary-500 text-primary-500! hover:bg-primary-50"
        >
          <Link href={`/data/${dataset.id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  );
}
