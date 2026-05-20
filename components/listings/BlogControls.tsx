import { FilterSelect, type FilterSelectOption } from "./FilterSelect";
import { ListingControlsShell } from "./ListingControlsShell";
import { sortOrderOptions } from "./listingOptions";

export interface BlogControlsProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  sortOrder: string;
  setSortOrder: (val: string) => void;
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
  sortOrder,
  setSortOrder,
}: BlogControlsProps) {
  return (
    <ListingControlsShell
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      stats={{ pending: 0, resubmitted: 0, overdue: 0, reviewedToday: 0 }}
      searchPlaceholder="Search articles"
      className="border-b"
      showStats={false}
    >
      <FilterSelect
        value={selectedCategory}
        onValueChange={setSelectedCategory}
        placeholder="All Types"
        options={categoryOptions}
        className="w-40"
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
