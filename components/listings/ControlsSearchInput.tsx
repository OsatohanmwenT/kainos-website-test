import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ControlsSearchInputProps {
  value: string;
  onValueChange: (val: string) => void;
  placeholder?: string;
}

export function ControlsSearchInput({
  value,
  onValueChange,
  placeholder = "Search Datasets, trials or reports",
}: ControlsSearchInputProps) {
  return (
    <div className="relative w-full md:max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-neutral-400" />
      </div>
      <Input
        type="text"
        className="w-full pl-10 pr-4 py-2 bg-neutral-100 border-none rounded-md text-sm font-dm-sans placeholder:text-text-placeholder focus:outline-none focus:ring-2 focus:ring-primary-500"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  );
}
