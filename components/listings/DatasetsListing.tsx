"use client";

import { getDatasets } from "@/lib/api";
import { PublicDataset } from "@/lib/api/types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DatasetCard } from "./DatasetCard";
import { DatasetsControls } from "./DatasetsControls";
import { EmptyState } from "./EmptyState";
import { ListingPagination } from "./ListingPagination";
import { ResultsCount } from "./ResultsCount";

const ITEMS_PER_PAGE = 4;

export function DatasetsListing() {
  const [datasets, setDatasets] = useState<PublicDataset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedIndicator, setSelectedIndicator] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const requestInFlight = useRef(false);

  const fetchDatasets = useCallback(async () => {
    if (requestInFlight.current) {
      return;
    }

    requestInFlight.current = true;
    setLoading(true);
    setError(null);
    try {
      const data = await getDatasets();
      setDatasets(data.datasets ?? []);
    } catch {
      setError("Failed to load datasets. Please try again.");
    } finally {
      requestInFlight.current = false;
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      void fetchDatasets();
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [fetchDatasets]);

  const stats = useMemo(() => ({
    pending: 0,
    resubmitted: 0,
    overdue: 0,
    reviewedToday: datasets.length,
  }), [datasets.length]);

  const filteredDatasets = useMemo(() => {
    let result = [...datasets];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (d) =>
          d.public_title.toLowerCase().includes(q) ||
          (d.summary ?? "").toLowerCase().includes(q)
      );
    }

    if (selectedType !== "all") {
      result = result.filter((d) => d.stored_items?.data_type === selectedType);
    }

    if (selectedYear !== "all") {
      result = result.filter(
        (d) => d.stored_items?.year?.toString() === selectedYear
      );
    }

    return result;
  }, [datasets, searchQuery, selectedType, selectedYear]);

  const totalPages = Math.ceil(filteredDatasets.length / ITEMS_PER_PAGE);
  const activePage = totalPages === 0 ? 1 : Math.min(currentPage, totalPages);
  const currentDatasets = filteredDatasets.slice(
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
    <div className="flex flex-col w-full">
      <DatasetsControls
        searchQuery={searchQuery}
        setSearchQuery={handleFilterChange(setSearchQuery)}
        selectedType={selectedType}
        setSelectedType={handleFilterChange(setSelectedType)}
        selectedIndicator={selectedIndicator}
        setSelectedIndicator={handleFilterChange(setSelectedIndicator)}
        selectedYear={selectedYear}
        setSelectedYear={handleFilterChange(setSelectedYear)}
        stats={stats}
      />

      <section className="mx-auto flex w-full flex-col gap-4 px-6 py-8 lg:px-16">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
              <div
                key={i}
                className="w-full h-64 bg-white border border-border-default rounded-xl animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <div className="md:col-span-2">
            <EmptyState
              icon="datasets"
              title="Unable to load datasets"
              description={error}
              action={{
                label: "Try again",
                onClick: fetchDatasets,
              }}
            />
          </div>
        ) : (
          <>
            <ResultsCount
              currentPage={activePage}
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={filteredDatasets.length}
              label="datasets"
              className="text-neutral-500"
            />

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {currentDatasets.length > 0 ? (
                currentDatasets.map((dataset, i) => (
                  <div
                    key={dataset.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${i * 70}ms` }}
                  >
                    <DatasetCard dataset={dataset} />
                  </div>
                ))
              ) : (
                <div className="md:col-span-2">
                  <EmptyState
                    icon="datasets"
                    title="No datasets found"
                    description="Try adjusting your search term, type, or year filter to find what you need."
                    action={{
                      label: "Clear filters",
                      onClick: () => {
                        setSearchQuery("");
                        setSelectedType("all");
                        setSelectedIndicator("all");
                        setSelectedYear("all");
                        setCurrentPage(1);
                      },
                    }}
                  />
                </div>
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
