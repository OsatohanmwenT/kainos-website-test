interface ResultsCountProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  label: string;
  className?: string;
}

export function ResultsCount({
  currentPage,
  itemsPerPage,
  totalItems,
  label,
  className = "font-semibold text-text-disabled",
}: ResultsCountProps) {
  const firstItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const lastItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className={`mb-4 font-dm-sans text-sm ${className}`}>
      Showing <span className="font-bold text-text-body">{firstItem}</span> -{" "}
      <span className="font-bold text-text-body">{lastItem}</span> of{" "}
      <span className="font-bold text-text-body">{totalItems}</span> {label}
    </div>
  );
}
