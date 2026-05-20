import { Button } from "@/components/ui/button";
import { PublicDataset } from "@/lib/api/types";
import { Download, Lock } from "lucide-react";
import Link from "next/link";

export function DatasetCard({ dataset }: { dataset: PublicDataset }) {
  const dataType = dataset.stored_items?.data_type ?? null;
  const year = dataset.stored_items?.year?.toString() ?? null;
  const frequency = dataset.stored_items?.frequency ?? null;
  const label = dataset.stored_items?.label ?? null;
  const indicator = dataset.stored_items?.indicator ?? null;
  const downloadUrl = dataset.download_url ?? dataset.stored_items?.download_url ?? null;
  const accessHref = `mailto:info@kainosedge.com?subject=${encodeURIComponent(
    `Dataset access request: ${dataset.public_title}`
  )}&body=${encodeURIComponent(
    `Hello KainosEdge team,\n\nI would like to request access to "${dataset.public_title}".\n\nThank you.`
  )}`;

  const formattedDate = dataset.publication_date
    ? new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(
        new Date(dataset.publication_date)
      )
    : null;

  return (
    <div className="w-full bg-white border border-border-default font-dm-sans rounded-xl p-6 md:p-8 flex flex-col gap-6 transition-shadow hover:shadow-sm">
      <div className="flex flex-col gap-3">
        {dataType && (
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 font-semibold text-xs rounded-full inline-block w-max">
              {dataType}
            </span>
          </div>
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
        {dataset.allow_download && downloadUrl ? (
          <Button asChild className="w-full sm:flex-1 h-13 px-6 cursor-pointer rounded-2xl bg-primary-500 hover:bg-primary-700 text-white">
            <a href={downloadUrl} download>
              <Download className="w-4 h-4 mr-2" />
              Download Dataset
            </a>
          </Button>
        ) : dataset.allow_download ? (
          <Button asChild className="w-full sm:flex-1 h-13 px-6 cursor-pointer rounded-2xl bg-[#D4A017] hover:bg-[#b08513] text-white">
            <a href={accessHref}>
              Request Access
              <Lock className="w-4 h-4 ml-2" />
            </a>
          </Button>
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
