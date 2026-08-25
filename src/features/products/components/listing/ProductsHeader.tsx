import { HugeiconsIcon } from "@hugeicons/react";
import Select from "@/components/ui/Select";

import { PreferenceHorizontalIcon } from "@hugeicons/core-free-icons";

import type { ProductSortOption } from "../../types/product-filter.types";

interface ProductsHeaderProps {
  sortBy: ProductSortOption;
  onSortChange: (value: ProductSortOption) => void;
  total: number;
}

const sortOptions: {
  value: ProductSortOption;
  label: string;
}[] = [
  {
    value: "newest",
    label: "جدیدترین",
  },
  {
    value: "price-asc",
    label: "قیمت: کم به زیاد",
  },
  {
    value: "price-desc",
    label: "قیمت: زیاد به کم",
  },
  {
    value: "rating-desc",
    label: "بالاترین امتیاز",
  },
];

export default function ProductsHeader({
  sortBy,
  onSortChange,
  total,
}: ProductsHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-gray flex items-center gap-2 text-sm">
        <HugeiconsIcon icon={PreferenceHorizontalIcon} size={16} />

        <span>{total} مورد یافت شد</span>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <label htmlFor="product-sort" className="text-gray">
          مرتب‌سازی بر اساس:
        </label>

        <Select
          id="product-sort"
          value={sortBy}
          onChange={(event) =>
            onSortChange(event.target.value as ProductSortOption)
          }
          options={sortOptions}
        />
      </div>
    </div>
  );
}
