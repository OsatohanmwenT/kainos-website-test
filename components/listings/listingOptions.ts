import type { FilterSelectOption } from "./FilterSelect";

export const statusOptions: FilterSelectOption[] = [
  { value: "all", label: "All Status" },
  { value: "pending", label: "Pending" },
  { value: "resubmitted", label: "Resubmitted" },
  { value: "overdue", label: "Overdue" },
  { value: "approved", label: "Approved" },
];

export const sortOrderOptions: FilterSelectOption[] = [
  { value: "oldest", label: "Oldest First" },
  { value: "newest", label: "Newest First" },
];

export const contentTypeOptions: FilterSelectOption[] = [
  { value: "all", label: "All Types" },
  { value: "Economic Analysis", label: "Economic Analysis" },
  { value: "Social Indicators", label: "Social Indicators" },
  { value: "Strategic Analysis", label: "Strategic Analysis" },
  { value: "Market Research", label: "Market Research" },
];
