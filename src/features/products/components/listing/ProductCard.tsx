"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";

import { ShoppingCart02Icon, ViewIcon } from "@hugeicons/core-free-icons";
import type { Product } from "../../types/product.types";
import { Button } from "@/components/ui/Button";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState(
    product.images[0] ?? "/images/no-image.jpg",
  );

  const isAvailable = product.available;

  const mainImage = product.images[0] ?? "/images/no-image.jpg";

  const hoverImage = product.images[1] ?? mainImage;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border p-4 shadow-md transition-all duration-300 w-full ${
        isAvailable
          ? "border-white/40 bg-white/30 backdrop-blur-md hover:-translate-y-1 hover:shadow-2xl"
          : "border-gray-200 bg-gray-100 opacity-80"
      }`}
    >
      <div
        className="relative w-full"
        onMouseEnter={() => isAvailable && setCurrentImage(hoverImage)}
        onMouseLeave={() => isAvailable && setCurrentImage(mainImage)}
      > 
        <Image
          src={currentImage}
          alt={product.name}
          className={`h-48 w-full  transition-transform duration-500 ${
            isAvailable ? "" : "grayscale"
          }`}
        />

        {!isAvailable && (
          <div className="text-light absolute top-3 left-3 rounded-md bg-red-600 px-2 py-1 text-xs font-bold">
            ناموجود
          </div>
        )}

        {isAvailable && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
            <Link
              href={`/productDetails/${product.id}`}
              aria-label={`مشاهده ${product.name}`}
              className="text-primary rounded-full bg-white p-2 shadow-md transition hover:scale-110"
            >
              <HugeiconsIcon icon={ViewIcon} size={18} />
            </Link>

            <button
              type="button"
              aria-label={`افزودن ${product.name} به سبد خرید`}
              className="bg-primary text-light rounded-full p-2 shadow-md transition hover:scale-110"
            >
              <HugeiconsIcon icon={ShoppingCart02Icon} size={18} />
            </button>
          </div>
        )}
      </div>

      <div className="p-4 text-center">
        <h3 className="heading6 mb-1 font-bold">{product.name}</h3>

        <p className="customeSmallText text-gray mb-3">
          {product.brand} • {product.volume}
        </p>

        {isAvailable ? (
          <p className="text-primary customeSmallText mb-3 font-semibold">
            {product.price.toLocaleString()} تومان
          </p>
        ) : (
          <p className="customeSmallText mb-3 font-semibold text-red-600">
            عدم موجودی
          </p>
        )}

        <Button
          className={`customeSmallText block w-full rounded-md py-1 transition-all duration-300 ${
            isAvailable
              ? "custome-link"
              : "text-gray cursor-not-allowed border border-gray-400 bg-gray-100"
          }`}
          aria-disabled={!isAvailable}
        >
          مشاهده جزئیات
        </Button>
      </div>
    </article>
  );
}
