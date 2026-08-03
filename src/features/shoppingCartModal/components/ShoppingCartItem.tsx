"use client";

import Image from "next/image";

import { CartItemProps } from "../type/shoppingCart.type";
import { HugeiconsIcon } from "@hugeicons/react";

import { Delete02Icon } from "@hugeicons/core-free-icons";
export default function ShoppingCartItem({
  item,
  onRemove,
  onQuantityChange,
}: CartItemProps) {
  return (
    <div className="flex items-center gap-4 border-b pb-3">
      {/* Product Image */}
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border border-gray-400">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      {/* Product Details */}
      <div className="min-w-0 flex-1">
        <h3 className="heading6 secondaryColor truncate font-bold">
          {item.name}
        </h3>

        <p className="customeSmallText textGray mt-1">
          {(item.price * item.quantity).toLocaleString()} تومان
        </p>

        {/* Quantity */}
        <div className="textGray2 mt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onQuantityChange(item.id, "decrease")}
            className="flex h-6 w-6 items-center justify-center rounded-full border transition hover:bg-gray-100"
            aria-label={`کاهش تعداد ${item.name}`}
          >
            -
          </button>

          <span className="customeSmallText w-4 text-center font-semibold">
            {item.quantity}
          </span>

          <button
            type="button"
            onClick={() => onQuantityChange(item.id, "increase")}
            className="flex h-6 w-6 items-center justify-center rounded-full border transition hover:bg-gray-100"
            aria-label={`افزایش تعداد ${item.name}`}
          >
            +
          </button>
        </div>
      </div>

      {/* Remove */}
      <button
        type="button"
        onClick={() => onRemove(item.id)}
        className="shrink-0 text-red-500 transition hover:text-red-400"
        aria-label={`حذف ${item.name} از سبد خرید`}
      >
        <HugeiconsIcon icon={Delete02Icon} size={18} />
      </button>
    </div>
  );
}
