import { Button } from "@/components/ui/button";
import { PublicReport } from "@/lib/api/types";
import { Calendar, Download, Lock, User } from "lucide-react";
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
  const downloadUrl = report.download_url ?? report.stored_items?.download_url ?? null;
  const accessHref = `mailto:info@kainosedge.com?subject=${encodeURIComponent(
    `Access request: ${report.public_title}`
  )}&body=${encodeURIComponent(
    `Hello KainosEdge team,\n\nI would like to request access to "${report.public_title}".\n\nThank you.`
  )}`;

  return (
    <div className="w-full bg-white border font-dm-sans border-border-default rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-shadow hover:shadow-sm">
      <div className="flex flex-col gap-3 max-w-3xl">
        {dataType && (
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 font-semibold text-xs rounded-full inline-block w-max">
              {dataType}
            </span>
          </div>
        )}

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
        {report.allow_download && downloadUrl ? (
          <Button asChild className="w-full h-13 px-6 cursor-pointer rounded-2xl bg-primary-500 hover:bg-primary-700 text-white">
            <a href={downloadUrl} download>
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </a>
          </Button>
        ) : report.allow_download ? (
          <Button asChild className="w-full h-13 px-6 cursor-pointer rounded-2xl bg-[#D4A017] hover:bg-[#b08513] text-white">
            <a href={accessHref}>
              Request Access
              <Lock className="w-4 h-4 ml-2" />
            </a>
          </Button>
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
  );
}
