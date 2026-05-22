"use client";

import { getReports } from "@/lib/api";
import { PublicReport } from "@/lib/api/types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { EmptyState } from "./EmptyState";
import { ListingPagination } from "./ListingPagination";
import { ReportCard } from "./ReportCard";
import { ReportsControls } from "./ReportsControls";
import { ResultsCount } from "./ResultsCount";

const ITEMS_PER_PAGE = 5;

export function ReportsListing() {
  const [reports, setReports] = useState<PublicReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const requestInFlight = useRef(false);

  const fetchReports = useCallback(async () => {
    if (requestInFlight.current) {
      return;
    }

    requestInFlight.current = true;
    setLoading(true);
    setError(null);
    try {
      const data = await getReports();
      setReports(data.reports ?? []);
    } catch {
      setError("Failed to load reports. Please try again.");
    } finally {
      requestInFlight.current = false;
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      void fetchReports();
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [fetchReports]);

  const stats = useMemo(() => ({
    pending: 0,
    resubmitted: 0,
    overdue: 0,
    reviewedToday: reports.length,
  }), [reports.length]);

  const filteredReports = useMemo(() => {
    let result = [...reports];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (r) =>
          r.public_title.toLowerCase().includes(q) ||
          (r.summary ?? "").toLowerCase().includes(q) ||
          (Array.isArray(r.authors)
            ? r.authors.join(" ")
            : (r.authors ?? "")
          ).toLowerCase().includes(q)
      );
    }

    if (selectedType !== "all") {
      result = result.filter((r) => r.stored_items?.data_type === selectedType);
    }

    result.sort((a, b) => {
      const dateA = a.publication_date ? new Date(a.publication_date).getTime() : 0;
      const dateB = b.publication_date ? new Date(b.publication_date).getTime() : 0;
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [reports, searchQuery, selectedType, sortOrder]);

  const totalPages = Math.ceil(filteredReports.length / ITEMS_PER_PAGE);
  const activePage = totalPages === 0 ? 1 : Math.min(currentPage, totalPages);
  const currentReports = filteredReports.slice(
    (activePage - 1) * ITEMS_PER_PAGE,
    activePage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange =
    (setter: (value: string) => void) => (value: string) => {
      setter(value);
      setCurrentPage(1);
    };

  return (
    <div className="flex flex-col bg-primary-50 w-full">
      <ReportsControls
        searchQuery={searchQuery}
        setSearchQuery={handleFilterChange(setSearchQuery)}
        selectedType={selectedType}
        setSelectedType={handleFilterChange(setSelectedType)}
        selectedStatus={selectedStatus}
        setSelectedStatus={handleFilterChange(setSelectedStatus)}
        sortOrder={sortOrder}
        setSortOrder={handleFilterChange(setSortOrder)}
        stats={stats}
      />

      <section className="mx-auto flex w-full flex-col gap-4 px-6 py-8 lg:px-16">
        {loading ? (
          <div className="flex flex-col gap-6">
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
              <div
                key={i}
                className="w-full h-40 bg-white border border-border-default rounded-2xl animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <EmptyState
            icon="reports"
            title="Unable to load reports"
            description={error}
            action={{
              label: "Try again",
              onClick: fetchReports,
            }}
          />
        ) : (
          <>
            <ResultsCount
              currentPage={activePage}
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={filteredReports.length}
              label="reports"
            />

            <div className="flex flex-col gap-6">
              {currentReports.length > 0 ? (
                currentReports.map((report, i) => (
                  <div
                    key={report.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <ReportCard report={report} />
                  </div>
                ))
              ) : (
                <EmptyState
                  icon="reports"
                  title="No reports found"
                  description="Try adjusting your search or filters to find what you're looking for."
                  action={{
                    label: "Clear filters",
                    onClick: () => {
                      setSearchQuery("");
                      setSelectedType("all");
                      setSelectedStatus("all");
                      setSortOrder("newest");
                      setCurrentPage(1);
                    },
                  }}
                />
              )}
            </div>

            <ListingPagination
              currentPage={activePage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </section>
    </div>
  );
}
