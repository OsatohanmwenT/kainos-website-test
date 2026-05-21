import { FilterSelect, type FilterSelectOption } from "./FilterSelect";
import { ListingControlsShell } from "./ListingControlsShell";
import { sortOrderOptions, statusOptions } from "./listingOptions";
import type { ReviewStats } from "./StatsSummaryRow";

export interface BlogControlsProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  selectedStatus: string;
  setSelectedStatus: (val: string) => void;
  sortOrder: string;
  setSortOrder: (val: string) => void;
  stats: ReviewStats;
}

const categoryOptions: FilterSelectOption[] = [
  { value: "all", label: "All Types" },
  { value: "Analysis", label: "Analysis" },
  { value: "Markets", label: "Markets" },
  { value: "Policy", label: "Policy" },
  { value: "Sustainability", label: "Sustainability" },
  { value: "Technology", label: "Technology" },
];

export function BlogControls({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
  sortOrder,
  setSortOrder,
  stats,
}: BlogControlsProps) {
  return (
    <ListingControlsShell
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      stats={stats}
      searchPlaceholder="Search articles"
      className="border-b"
    >
      <FilterSelect
        value={selectedCategory}
        onValueChange={setSelectedCategory}
        placeholder="All Types"
        options={categoryOptions}
        className="w-40"
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
