import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ListingPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: "numbered" | "compact";
}

export function ListingPagination({
  currentPage,
  totalPages,
  onPageChange,
  variant = "numbered",
}: ListingPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  if (variant === "compact") {
    return (
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 py-4 font-dm-sans">
        <span className="min-w-30 text-sm font-medium text-text-label">
          Page {currentPage} of {totalPages}
        </span>
        <div className="order-last flex w-full justify-end gap-2 sm:order-0 sm:w-auto sm:justify-start">
          <button
            className="flex items-center gap-1 rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-text-body hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>
          <button
            className="flex items-center gap-1 rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-text-body hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8 mt-12 flex flex-wrap items-center justify-between gap-y-6 font-dm-sans">
      <Button
        variant="ghost"
        className="text-neutral-500 hover:text-neutral-800 focus:bg-transparent"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Previous
      </Button>

      <div className="order-3 flex w-full flex-wrap items-center justify-center gap-1 md:order-0 md:w-auto">
        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "ghost"}
              className={`h-10 w-10 shrink-0 rounded-md p-0 ${
                currentPage === page
                  ? "bg-primary-500 text-white hover:bg-primary-700"
                  : "text-neutral-600 hover:bg-neutral-100"
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          );
        })}
      </div>

      <Button
        variant="ghost"
        className="text-neutral-500 hover:text-neutral-800 focus:bg-transparent"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        Next
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
}
