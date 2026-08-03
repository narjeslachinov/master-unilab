
"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Category } from "../../type/home.type";
import { cn } from "@/lib/utils";

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: number;
  onChange: (id: number) => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onChange,
}: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center  gap-4 xl:gap-5">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={cn(
            "flex cursor-pointer flex-col items-center gap-2 rounded-full transition w-24",
            activeCategory === category.id
              ? "activeCategoriesBtn"
              : "categoriesBtn"
          )}
        >
          <HugeiconsIcon icon={category.icon} size={20} />

          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}

