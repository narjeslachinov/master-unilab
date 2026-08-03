"use client";

import Image from "next/image";
import Link from "next/link";

import { WishlistItemProps } from "../type/wishlist.type";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  Delete02Icon,
  EyeIcon,
  ShoppingCart02Icon,
} from "@hugeicons/core-free-icons";
export default function WishlistItem({ item, onRemove }: WishlistItemProps) {
  return (
    <div className="flex items-center gap-4 border-b pb-3">
      {/* Product Image */}
      <div className="border-gray-3 relative h-16 w-16 shrink-0 overflow-hidden rounded-md border">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      {/* Product Details */}
      <div className="min-w-0 flex-1 space-y-1">
        <h3 className="heading6 text-secondary truncate font-bold">
          {item.name}
        </h3>

        <p className="customeSmallText text-gray">
          {item.price.toLocaleString()} تومان
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href={`/products/${item.id}`}
            className="customeSmallText text-sky-600 transition hover:text-sky-700"
            aria-label={`مشاهده ${item.name}`}
          >
            <HugeiconsIcon icon={EyeIcon} size={18} />
          </Link>

          <button
            type="button"
            className="customeSmallText flex items-center gap-1 text-green-500 transition hover:text-green-700"
          >
            <HugeiconsIcon icon={ShoppingCart02Icon} size={18} />
            افزودن به سبد
          </button>
        </div>
      </div>

      {/* Remove */}
      <button
        type="button"
        onClick={() => onRemove(item.id)}
        className="shrink-0 text-red-500 transition hover:text-red-400"
        aria-label={`حذف ${item.name} از علاقه‌مندی‌ها`}
      >
        <HugeiconsIcon icon={Delete02Icon} size={18} />
      </button>
    </div>
  );
}
