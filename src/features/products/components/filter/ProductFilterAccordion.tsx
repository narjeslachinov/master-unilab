"use client";

import { HugeiconsIcon } from "@hugeicons/react";

import { ArrowDown01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons";
interface ProductFilterAccordionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export default function ProductFilterAccordion({
  title,
  isOpen,
  onToggle,
  children,
}: ProductFilterAccordionProps) {
  return (
    <div className="border-b py-3">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between text-right text-sm font-semibold text-dark"
      >
        {title}

        {isOpen ? (
          <HugeiconsIcon icon={ArrowUp01Icon} size={16} />
        ) : (
          <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
        )}
      </button>

      {isOpen && <div className="animate-fadeIn">{children}</div>}
    </div>
  );
}
