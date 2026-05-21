export interface ReviewStats {
  pending: number;
  resubmitted: number;
  overdue: number;
  reviewedToday: number;
}

interface StatsSummaryRowProps {
  stats: ReviewStats;
}

const statItems = [
  {
    key: "pending",
    label: "Pending Review",
    dotClassName: "bg-semantic-warning-500",
    valueClassName: "text-semantic-warning-500",
  },
  {
    key: "resubmitted",
    label: "Resubmitted",
    dotClassName: "bg-admin-accent-500",
    valueClassName: "text-admin-accent-500",
  },
  {
    key: "overdue",
    label: "Overdue",
    dotClassName: "bg-semantic-error-500",
    valueClassName: "text-semantic-error-500",
  },
  {
    key: "reviewedToday",
    label: "Reviewed Today",
    dotClassName: "bg-semantic-success-500",
    valueClassName: "text-semantic-success-500",
  },
] satisfies {
  key: keyof ReviewStats;
  label: string;
  dotClassName: string;
  valueClassName: string;
}[];

export function StatsSummaryRow({ stats }: StatsSummaryRowProps) {
  return (
    <div className="mx-auto flex w-full flex-wrap items-center gap-8 px-6 py-4 font-dm-sans text-sm lg:px-16">
      {statItems.map((item) => (
        <div key={item.key} className="flex items-center gap-2">
          <div className={`w-1.5 h-1.5 rounded-full ${item.dotClassName}`} />
          <span className="text-text-label font-medium">{item.label}</span>
          <span className={`${item.valueClassName} font-bold`}>
            {stats[item.key]}
          </span>
        </div>
      ))}
    </div>
  );
}
