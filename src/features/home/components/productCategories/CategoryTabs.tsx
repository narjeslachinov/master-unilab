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
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onChange(category.id)}
          className={cn(
            "rounded-full px-6 py-3 transition",
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
