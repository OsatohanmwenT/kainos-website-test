import { Calendar } from "lucide-react";
import { FilterSelect, type FilterSelectOption } from "./FilterSelect";
import { ListingControlsShell } from "./ListingControlsShell";
import { contentTypeOptions } from "./listingOptions";
import type { ReviewStats } from "./StatsSummaryRow";

export interface DatasetsControlsProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedType: string;
  setSelectedType: (val: string) => void;
  selectedIndicator: string;
  setSelectedIndicator: (val: string) => void;
  selectedYear: string;
  setSelectedYear: (val: string) => void;
  stats: ReviewStats;
}

const indicatorOptions: FilterSelectOption[] = [
  { value: "all", label: "All Indicators" },
  { value: "fiscal", label: "Fiscal" },
  { value: "monetary", label: "Monetary" },
];

const yearOptions: FilterSelectOption[] = [
  { value: "all", label: "All Years" },
  { value: "2025", label: "2025" },
  { value: "2024", label: "2024" },
];

export function DatasetsControls({
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  selectedIndicator,
  setSelectedIndicator,
  selectedYear,
  setSelectedYear,
  stats,
}: DatasetsControlsProps) {
  return (
    <ListingControlsShell
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      stats={stats}
    >
      <FilterSelect
        value={selectedType}
        onValueChange={setSelectedType}
        placeholder="All Types"
        options={contentTypeOptions}
        className="w-37.5"
      />

      <FilterSelect
        value={selectedIndicator}
        onValueChange={setSelectedIndicator}
        placeholder="All Indicators"
        options={indicatorOptions}
        className="w-37.5"
      />

      <FilterSelect
        value={selectedYear}
        onValueChange={setSelectedYear}
        placeholder="All Years"
        options={yearOptions}
        className="w-35"
        trailingIcon={<Calendar className="ml-auto h-4 w-4 opacity-50" />}
      />
    </ListingControlsShell>
  );
}
