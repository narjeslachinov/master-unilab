"use client";

import type { SelectHTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";

import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  label?: string;
  containerClassName?: string;
}

export default function Select({
  options,
  label,
  className,
  containerClassName,
  ...props
}: SelectProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", containerClassName)}>
      {label && (
        <label htmlFor={props.id} className="text-gray">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          {...props}
          className={cn(
            "border-gray-1 h-10 w-full appearance-none rounded-lg border",
            "bg-neutral-2 px-3 pr-3 pl-9",
            "text-gray-3 text-sm",
            "cursor-pointer",
            "transition-colors duration-200",
            "hover:border-gray-2 hover:bg-neutral-3",
            "focus:border-accent-1 focus:outline-none",
            "focus:ring-accent-2 focus:ring-2",
            "disabled:bg-gray-1 disabled:text-gray-2 disabled:cursor-not-allowed",
            className,
          )}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <HugeiconsIcon
          icon={ArrowDown01Icon}
          size={16}
          className="text-gray-3 pointer-events-none absolute top-1/2 left-3 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
