import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface FilterSelectOption {
  value: string;
  label: string;
}

interface FilterSelectProps {
  value: string;
  onValueChange: (val: string) => void;
  placeholder: string;
  options: FilterSelectOption[];
  className?: string;
  trailingIcon?: ReactNode;
}

export function FilterSelect({
  value,
  onValueChange,
  placeholder,
  options,
  className,
  trailingIcon,
}: FilterSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className={cn(
          "shadow-none text-neutral-600 border-neutral-500 bg-neutral-50",
          trailingIcon && "[&>svg:last-child]:hidden",
          className,
        )}
      >
        <SelectValue placeholder={placeholder} />
        {trailingIcon}
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
