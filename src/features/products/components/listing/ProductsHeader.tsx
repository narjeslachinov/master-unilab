import { HugeiconsIcon } from "@hugeicons/react";
import { PreferenceHorizontalIcon } from "@hugeicons/core-free-icons";

import type { ProductSortOption } from "../../types/product-filter.types";

interface ProductsHeaderProps {
  sortBy: ProductSortOption;
  onSortChange: (value: ProductSortOption) => void;
  total: number;
}

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

        <select
          id="product-sort"
          value={sortBy}
          onChange={(event) =>
            onSortChange(event.target.value as ProductSortOption)
          }
          className="text-gray rounded-lg border px-2 py-1 focus:border-sky-900 focus:outline-none"
        >
          <option value="newest">جدیدترین</option>
          <option value="priceLow">قیمت: کم به زیاد</option>
          <option value="priceHigh">قیمت: زیاد به کم</option>
        </select>
      </div>
    </div>
  );
}
