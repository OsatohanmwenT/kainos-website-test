"use client";

import { Button } from "@/components/ui/button";
import {
  PublicationDownloadButton,
  PublicationPreviewFrame,
} from "@/components/publications/PublicationFile";
import { PublicReport } from "@/lib/api/types";
import { Calendar, FileText, Lock, User } from "lucide-react";
import { useState } from "react";

export function ReportCard({ report }: { report: PublicReport }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

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
  const canDownload = report.is_visible !== false && report.allow_download;
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
            type="button"
            variant="outline"
            onClick={() => setDetailsOpen((open) => !open)}
            className="w-full h-13 px-6 cursor-pointer rounded-2xl border-primary-500 text-primary-500! hover:bg-primary-50"
          >
            {detailsOpen ? "Hide Details" : "View Details"}
          </Button>
        </div>
      </div>

      {detailsOpen && (
        <div className="border-t border-neutral-100 pt-6">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1fr]">
            <div>
              <h4 className="font-bold text-text-header">Report Details</h4>
              <div className="mt-4 grid gap-4 text-sm">
                {canDownload && report.stored_items?.file_name && (
                  <div>
                    <p className="font-bold uppercase text-text-label">File</p>
                    <p className="mt-1 text-text-body">
                      {report.stored_items.file_name}
                    </p>
                  </div>
                )}
                {report.stored_items?.year && (
                  <div>
                    <p className="font-bold uppercase text-text-label">Year</p>
                    <p className="mt-1 text-text-body">
                      {report.stored_items.year}
                    </p>
                  </div>
                )}
                {report.stored_items?.frequency && (
                  <div>
                    <p className="font-bold uppercase text-text-label">
                      Frequency
                    </p>
                    <p className="mt-1 text-text-body">
                      {report.stored_items.frequency}
                    </p>
                  </div>
                )}
                {report.stored_items?.indicator && (
                  <div>
                    <p className="font-bold uppercase text-text-label">
                      Indicator
                    </p>
                    <p className="mt-1 text-text-body">
                      {report.stored_items.indicator}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2 font-bold text-text-header">
                <FileText className="size-5 text-primary-700" />
                Document Preview
              </div>
              {canDownload ? (
                <PublicationPreviewFrame
                  publicationId={report.id}
                  title={`${report.public_title} preview`}
                  className="h-96 w-full rounded-xl border border-neutral-200 bg-white"
                />
              ) : (
                <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-primary-50 p-6 text-center">
                  <Lock className="size-8 text-[#8A6500]" />
                  <p className="mt-3 font-bold text-text-header">
                    Restricted Access
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-text-body">
                    Request access through the contact form and the KainosEdge
                    team will follow up.
                  </p>
                </div>
              )}
            </div>
          </div>
          {report.citation_format && (
            <div className="mt-6 rounded-lg bg-primary-50 p-4">
              <p className="font-bold uppercase text-text-label">Citation</p>
              <p className="mt-2 text-sm leading-6 text-text-body">
                {report.citation_format}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
