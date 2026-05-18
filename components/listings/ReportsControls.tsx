import { FilterSelect } from "./FilterSelect";
import { ListingControlsShell } from "./ListingControlsShell";
import { contentTypeOptions, sortOrderOptions, statusOptions } from "./listingOptions";
import type { ReviewStats } from "./StatsSummaryRow";

export interface ReportsControlsProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedType: string;
  setSelectedType: (val: string) => void;
  selectedStatus: string;
  setSelectedStatus: (val: string) => void;
  sortOrder: string;
  setSortOrder: (val: string) => void;
  stats: ReviewStats;
}

export function ReportsControls({
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  selectedStatus,
  setSelectedStatus,
  sortOrder,
  setSortOrder,
  stats,
}: ReportsControlsProps) {
  return (
    <ListingControlsShell
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      stats={stats}
      className="border"
    >
      <FilterSelect
        value={selectedType}
        onValueChange={setSelectedType}
        placeholder="All Types"
        options={contentTypeOptions}
        className="w-45"
      />

      <FilterSelect
        value={selectedStatus}
        onValueChange={setSelectedStatus}
        placeholder="Status"
        options={statusOptions}
        className="w-35"
      />

      <FilterSelect
        value={sortOrder}
        onValueChange={setSortOrder}
        placeholder="Oldest First"
        options={sortOrderOptions}
        className="w-40"
      />
    </ListingControlsShell>
  );
}
