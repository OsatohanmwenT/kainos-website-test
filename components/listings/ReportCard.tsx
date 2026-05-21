import { Button } from "@/components/ui/button";
import { PublicationDownloadButton } from "@/components/publications/PublicationFile";
import { PublicReport } from "@/lib/api/types";
import { Calendar, Lock, User } from "lucide-react";
import Link from "next/link";

export function ReportCard({ report }: { report: PublicReport }) {
  const authors = Array.isArray(report.authors)
    ? report.authors.join(", ")
    : (report.authors ?? "Unknown Author");

  const formattedDate = report.publication_date
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(report.publication_date))
    : "-";

  const dataType = report.stored_items?.data_type ?? null;
  const fallbackDownloadUrl =
    report.download_url ?? report.stored_items?.download_url ?? null;
  const isRestricted = report.stored_items?.label === "restricted";
  const canDownload =
    report.is_visible !== false && report.allow_download && !isRestricted;
  const accessHref = `/contact?request=access&itemType=report&itemId=${encodeURIComponent(
    report.id
  )}&itemTitle=${encodeURIComponent(report.public_title)}#contact-form`;

  return (
    <div className="w-full bg-white border font-dm-sans border-border-default rounded-2xl p-6 flex flex-col gap-6 transition-shadow hover:shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            {dataType && (
              <span className="px-3 py-1 bg-primary-100 text-primary-700 font-semibold text-xs rounded-full inline-block w-max">
                {dataType}
              </span>
            )}
            {!canDownload && (
              <span className="inline-flex w-max items-center gap-1 rounded-full bg-[#FFF4D6] px-3 py-1 text-xs font-semibold text-[#8A6500]">
                <Lock className="size-3" />
                Restricted Access
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-text-header">
            {report.public_title}
          </h3>

          {report.summary && (
            <p className="text-text-body font-dm-sans text-sm md:text-base">
              {report.summary}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-2 font-dm-sans text-sm text-neutral-500">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span>{authors}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 min-w-40 shrink-0">
          {canDownload ? (
            <PublicationDownloadButton
              publicationId={report.id}
              label="Download Report"
              fallbackDownloadUrl={fallbackDownloadUrl}
              fallbackFileName={report.stored_items?.file_name}
              requestAccessHref={accessHref}
              className="w-full h-13 px-6 cursor-pointer rounded-2xl bg-primary-500 hover:bg-primary-700 text-white"
            />
          ) : (
            <Button asChild className="w-full h-13 px-6 cursor-pointer rounded-2xl bg-[#D4A017] hover:bg-[#b08513] text-white">
              <a href={accessHref}>
                Request Access
                <Lock className="w-4 h-4 ml-2" />
              </a>
            </Button>
          )}
          <Button
            asChild
            variant="outline"
            className="w-full h-13 px-6 cursor-pointer rounded-2xl border-primary-500 text-primary-500! hover:bg-primary-50"
          >
            <Link href={`/reports/${report.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
