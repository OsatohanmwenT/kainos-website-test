import { Button } from "@/components/ui/button";
import { getReports } from "@/lib/api";
import { Calendar, Download, FileText, Lock, User } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ReportDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getReports({ limit: 100 });
  const report = data.reports?.find((item) => item.id === id);

  if (!report) {
    notFound();
  }

  const authors = Array.isArray(report.authors)
    ? report.authors.join(", ")
    : (report.authors ?? "Unknown Author");
  const formattedDate = report.publication_date
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(report.publication_date))
    : "Not dated";
  const downloadUrl = report.download_url ?? report.stored_items?.download_url ?? null;
  const accessHref = `mailto:info@kainosedge.com?subject=${encodeURIComponent(
    `Access request: ${report.public_title}`
  )}&body=${encodeURIComponent(
    `Hello KainosEdge team,\n\nI would like to request access to "${report.public_title}".\n\nThank you.`
  )}`;

  return (
    <div className="flex min-h-screen flex-col bg-primary-50">
      <section className="bg-[#FFFBF4] px-6 py-12 lg:px-16 lg:py-16">
        <div className="mx-auto w-full">
          <div>
            <Link
              href="/reports"
              className="font-dm-sans text-sm font-bold text-primary-700 hover:text-primary-500"
            >
              Back to reports
            </Link>
            {report.stored_items?.data_type && (
              <span className="mt-8 inline-flex rounded-full bg-primary-100 px-3 py-1 font-dm-sans text-xs font-bold uppercase text-primary-700">
                {report.stored_items.data_type}
              </span>
            )}
            <h1 className="mt-4 font-fraunces text-4xl font-semibold leading-tight text-text-header md:text-5xl">
              {report.public_title}
            </h1>
            {report.summary && (
              <p className="mt-5 max-w-3xl font-dm-sans text-base leading-7 text-text-body md:text-lg">
                {report.summary}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-4 font-dm-sans text-sm text-neutral-600">
              <span className="inline-flex items-center gap-2">
                <User className="size-4" />
                {authors}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="size-4" />
                {formattedDate}
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {report.allow_download && downloadUrl ? (
                <Button asChild className="h-12 rounded-2xl bg-primary-500 px-6 text-white hover:bg-primary-700">
                  <a href={downloadUrl} download>
                    <Download className="mr-2 size-4" />
                    Download Report
                  </a>
                </Button>
              ) : report.allow_download ? (
                <Button asChild className="h-12 rounded-2xl bg-[#D4A017] px-6 text-white hover:bg-[#b08513]">
                  <a href={accessHref}>
                    Request Access
                    <Lock className="ml-2 size-4" />
                  </a>
                </Button>
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
            <h2 className="text-lg font-bold text-text-header">Report Details</h2>
            <div className="mt-5 grid gap-4 text-sm">
              {report.stored_items?.file_name && (
                <div>
                  <p className="font-bold uppercase text-text-label">File</p>
                  <p className="mt-1 text-text-body">{report.stored_items.file_name}</p>
                </div>
              )}
              {report.stored_items?.year && (
                <div>
                  <p className="font-bold uppercase text-text-label">Year</p>
                  <p className="mt-1 text-text-body">{report.stored_items.year}</p>
                </div>
              )}
              {report.stored_items?.frequency && (
                <div>
                  <p className="font-bold uppercase text-text-label">Frequency</p>
                  <p className="mt-1 text-text-body">{report.stored_items.frequency}</p>
                </div>
              )}
              {report.stored_items?.indicator && (
                <div>
                  <p className="font-bold uppercase text-text-label">Indicator</p>
                  <p className="mt-1 text-text-body">{report.stored_items.indicator}</p>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-border-default bg-white p-6 font-dm-sans">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                <FileText className="size-5" />
              </div>
              <h2 className="text-lg font-bold text-text-header">View-only Preview</h2>
            </div>
            <p className="mt-5 leading-7 text-text-body">
              This page presents the public summary and metadata for the report
              in a read-only format. Full report files are only available when
              the backend provides a public download URL or access is granted by
              the KainosEdge team.
            </p>
            {report.citation_format && (
              <div className="mt-6 rounded-lg bg-primary-50 p-4">
                <p className="font-bold uppercase text-text-label">Citation</p>
                <p className="mt-2 text-sm leading-6 text-text-body">
                  {report.citation_format}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
