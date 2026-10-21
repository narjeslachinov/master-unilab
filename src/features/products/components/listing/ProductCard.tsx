"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import { ShoppingCart02Icon, ViewIcon } from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

import type { Product } from "../../types/product.types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const mainImage = product.images[0] ?? "/images/no-image.jpg";
  const hoverImage = product.images[1] ?? mainImage;

  const [currentImage, setCurrentImage] = useState(mainImage);

  const isAvailable = product.available;

  return (
    <article
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border p-3 sm:p-4",
        "transition-all duration-300",
        isAvailable
          ? "border-white/40 bg-white/30 shadow-md backdrop-blur-md hover:-translate-y-1 hover:shadow-xl"
          : "border-gray-200 bg-gray-100 opacity-80",
      )}
    >
      {/* Product image */}
      <div
        className="relative w-full shrink-0 overflow-hidden rounded-xl"
        onMouseEnter={() => isAvailable && setCurrentImage(hoverImage)}
        onMouseLeave={() => isAvailable && setCurrentImage(mainImage)}
      >
        <div className="relative aspect-4/3 w-full">
          <Image
            src={currentImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={cn(
              "object-contain transition-transform duration-500",
              isAvailable && "group-hover:scale-105",
              !isAvailable && "grayscale",
            )}
          />
        </div>

        {!isAvailable && (
          <span className="absolute top-2 left-2 rounded-md bg-red-600 px-2 py-1 text-xs font-bold text-white">
            ناموجود
          </span>
        )}

        {isAvailable && (
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center gap-3",
              "bg-black/30 opacity-0 transition-opacity duration-300",
              "group-hover:opacity-100",
            )}
          >
            <Link
              href={`/products/${product.id}`}
              aria-label={`مشاهده ${product.name}`}
              className="text-primary rounded-full bg-white p-2 shadow-md transition hover:scale-110"
            >
              <HugeiconsIcon icon={ViewIcon} size={18} />
            </Link>

            <button
              type="button"
              aria-label={`افزودن ${product.name} به سبد خرید`}
              className="bg-primary rounded-full p-2 text-white shadow-md transition hover:scale-110"
            >
              <HugeiconsIcon icon={ShoppingCart02Icon} size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Product information */}
      <div className="flex flex-1 flex-col pt-3 text-center sm:pt-4">
        <h3
          className={cn(
            "heading6 mb-2 line-clamp-2 min-h-12 font-bold",
            "wrap-break-words",
          )}
        >
          {product.name}
        </h3>

        <p className="customeSmallText text-gray mb-3 line-clamp-1 min-h-5">
          {product.brand} • {product.volume}
        </p>

        <div className="mb-3 flex min-h-6 items-center justify-center">
          {isAvailable ? (
            <p className="customeSmallText text-primary font-semibold">
              {product.price.toLocaleString("fa-IR")} تومان
            </p>
          ) : (
            <p className="customeSmallText font-semibold text-red-600">
              عدم موجودی
            </p>
          )}
        </div>

        {/* Keep the button at the bottom */}
        <div className="mt-auto pt-1">
          {isAvailable ? (
            <Button
              asChild
              className="customeSmallText block min-h-10 w-full rounded-md"
            >
              <Link href={`/products/${product.id}`}>مشاهده جزئیات</Link>
            </Button>
          ) : (
            <Button
              disabled
              className="customeSmallText block min-h-10 w-full rounded-md"
            >
              مشاهده جزئیات
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
