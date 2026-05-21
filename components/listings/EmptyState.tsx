interface EmptyStateProps {
  icon?: "reports" | "datasets" | "articles" | "search";
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const icons = {
  reports: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <rect x="8" y="4" width="28" height="36" rx="3" fill="#fdebc8" />
      <rect x="8" y="4" width="28" height="36" rx="3" stroke="#c97b2a" strokeWidth="1.5" />
      <path d="M14 14h20M14 20h20M14 26h12" stroke="#c97b2a" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="36" cy="36" r="8" fill="#fff8ed" stroke="#c97b2a" strokeWidth="1.5" />
      <path d="M33 36h6M36 33v6" stroke="#c97b2a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  datasets: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <ellipse cx="24" cy="12" rx="16" ry="6" fill="#fdebc8" stroke="#c97b2a" strokeWidth="1.5" />
      <path d="M8 12v8c0 3.314 7.163 6 16 6s16-2.686 16-6v-8" stroke="#c97b2a" strokeWidth="1.5" />
      <path d="M8 20v8c0 3.314 7.163 6 16 6s16-2.686 16-6v-8" stroke="#c97b2a" strokeWidth="1.5" />
      <path d="M8 28v8c0 3.314 7.163 6 16 6s16-2.686 16-6v-8" stroke="#c97b2a" strokeWidth="1.5" />
      <circle cx="36" cy="36" r="8" fill="#fff8ed" stroke="#c97b2a" strokeWidth="1.5" />
      <path d="M33 36h6M36 33v6" stroke="#c97b2a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  articles: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <rect x="6" y="6" width="36" height="26" rx="3" fill="#fdebc8" stroke="#c97b2a" strokeWidth="1.5" />
      <path d="M12 14h24M12 20h24M12 26h16" stroke="#c97b2a" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="10" y="34" width="28" height="8" rx="2" fill="#fff8ed" stroke="#c97b2a" strokeWidth="1.5" />
      <path d="M18 38h12" stroke="#c97b2a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  search: (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <circle cx="21" cy="21" r="13" fill="#fdebc8" stroke="#c97b2a" strokeWidth="1.5" />
      <path d="M30 30l9 9" stroke="#c97b2a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 21h8M21 17v8" stroke="#c97b2a" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export function EmptyState({
  icon = "search",
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      {/* Decorative rings */}
      <div className="relative mb-8">
        <div className="absolute inset-0 -m-4 rounded-full bg-primary-100/50 blur-xl" />
        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-primary-50 border border-primary-100 shadow-sm">
          <div className="w-10 h-10">{icons[icon]}</div>
        </div>
      </div>

      <h3 className="font-fraunces text-2xl font-semibold text-text-header mb-2">
        {title}
      </h3>
      <p className="font-dm-sans text-sm text-text-body max-w-xs leading-6">
        {description}
      </p>

      {action && (
        <button
          type="button"
          onClick={action.onClick}
          className="mt-6 inline-flex items-center gap-2 font-dm-sans text-sm font-semibold text-primary-500 border border-primary-200 bg-primary-50 px-5 py-2.5 rounded-xl hover:bg-primary-100 transition-colors"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
