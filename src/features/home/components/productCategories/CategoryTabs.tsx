"use client";

import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
}

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onChange: (id: string) => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onChange,
}: CategoryTabsProps) {
  return (
    <div
      className={cn(
        "flex gap-2 overflow-x-auto pb-1 whitespace-nowrap",
        "scrollbar-none [&::-webkit-scrollbar]:hidden",
        "md:flex-wrap md:justify-center md:gap-4 md:overflow-visible md:pb-0",
      )}
    >
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onChange(category.id)}
          className={cn(
            "shrink-0 rounded-full px-4 py-2 transition md:px-6 md:py-3",
            activeCategory === category.id
              ? "activeCategoriesBtn"
              : "categoriesBtn",
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
