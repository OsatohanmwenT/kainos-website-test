import type { ReactNode } from "react";
import { ControlsSearchInput } from "./ControlsSearchInput";
import { StatsSummaryRow, type ReviewStats } from "./StatsSummaryRow";

interface ListingControlsShellProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  stats: ReviewStats;
  children: ReactNode;
  searchPlaceholder?: string;
  className?: string;
}

export function ListingControlsShell({
  searchQuery,
  onSearchChange,
  stats,
  children,
  searchPlaceholder,
  className = "border-y",
}: ListingControlsShellProps) {
  return (
    <div className={`flex w-full flex-col bg-white border-neutral-200 ${className}`}>
      <div className="mx-auto flex w-full flex-col items-center justify-between gap-4 border-b border-neutral-200 px-6 py-4 md:flex-row lg:px-16">
        <ControlsSearchInput
          value={searchQuery}
          onValueChange={onSearchChange}
          placeholder={searchPlaceholder}
        />

        <div className="flex w-full items-center gap-3 overflow-x-auto px-1 py-1 pb-2 font-dm-sans md:w-auto md:pb-1">
          {children}
        </div>
      </div>

      <StatsSummaryRow stats={stats} />
    </div>
  );
}
