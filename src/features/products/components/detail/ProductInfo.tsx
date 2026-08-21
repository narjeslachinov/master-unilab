"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";

import {
  CallRinging04Icon,
  Cancel01Icon,
  FavouriteIcon,
  ShoppingCart02Icon,
  StarIcon,
  Tick01Icon,
} from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useProductDetail } from "./context/ProductDetailContext";

export default function ProductInfo() {
  const { product } = useProductDetail();

  const [showFullDesc, setShowFullDesc] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState(false);

  const colors = [
    {
      name: "آبی تیره",
      className: "bg-sky-800",
      available: true,
    },
    {
      name: "آبی روشن",
      className: "bg-sky-400",
      available: false,
    },
    {
      name: "نارنجی",
      className: "bg-orange-400",
      available: true,
    },
  ];

  const finalPrice = product.price * (1 - (product.discount ?? 0) / 100);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="flex flex-col gap-5 text-right"
    >
      <h1 className="heading4 text-primary font-bold">{product.name}</h1>

      <p className="customeSmallText text-gray-1">برند: {product.brand}</p>

      <div className="flex items-center gap-3">
        <p className="heading5 text-secondary font-bold">
          {finalPrice.toLocaleString("fa-IR")} تومان
        </p>

        {product.discount && product.discount > 0 && (
          <span className="customeSmallText text-red-500 line-through">
            {product.price.toLocaleString("fa-IR")}
          </span>
        )}
      </div>

      <p
        className={cn(
          "customeSmallText font-medium",
          product.available ? "text-green-600" : "text-red-500",
        )}
      >
        {product.available ? "موجود در انبار" : "ناموجود"}
      </p>

      <div className="mb-4 flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <HugeiconsIcon
            icon={StarIcon}
            key={index}
            size={18}
            className={cn(
              index < Math.round(product.rating)
                ? "text-yellow-400"
                : "text-gray-12",
            )}
          />
        ))}

        <span className="customeSmallText text-gray-1">
          ({product.reviewCount} نظر)
        </span>
      </div>

      <p className="customeSmallText leading-7">
        {showFullDesc
          ? product.description
          : `${product.description.slice(0, 300)}...`}

        {product.description.length > 300 && (
          <button
            type="button"
            className="text-primary mr-2 font-semibold hover:underline"
            onClick={() => setShowFullDesc((previous) => !previous)}
          >
            {showFullDesc ? "کمتر" : "بیشتر"}
          </button>
        )}
      </p>

      <div className="flex items-center gap-3">
        <span className="customeSmallText text-gray-1">رنگ‌ها:</span>

        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              type="button"
              disabled={!color.available}
              onClick={() => color.available && setSelectedColor(color.name)}
              aria-label={color.name}
              className={cn(
                "relative h-7 w-7 rounded-full border-2 transition-transform",
                color.className,
                color.available
                  ? "border-gray-200 hover:scale-110"
                  : "cursor-not-allowed border-gray-100 opacity-40",
              )}
            >
              {selectedColor === color.name && color.available && (
                <HugeiconsIcon
                  icon={Tick01Icon}
                  className="textLight absolute inset-0 p-1"
                />
              )}

              {!color.available && (
                <HugeiconsIcon
                  icon={Cancel01Icon}
                  className="absolute inset-0 p-1 text-red-600"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          type="button"
          disabled={!product.available}
          className="flex flex-1 items-center gap-2"
        >
          <HugeiconsIcon icon={ShoppingCart02Icon} size={18} />
          افزودن به سبد خرید
        </Button>

        <button
          type="button"
          onClick={() => setWishlist((previous) => !previous)}
          aria-label="افزودن به علاقه‌مندی‌ها"
          className="rounded-2xl border border-white bg-white/30 p-3 shadow backdrop-blur-md transition hover:bg-gray-50"
        >
          <HugeiconsIcon
            icon={FavouriteIcon}
            size={20}
            className={cn(
              wishlist ? "fill-red-500 text-red-500" : "text-gray-1",
            )}
          />
        </button>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-sky-50 p-4">
        <HugeiconsIcon
          icon={CallRinging04Icon}
          className="h-5 w-5 text-sky-800"
        />

        <p className="customeSmallText text-primary leading-relaxed">
          برای مشاوره تخصصی یا استعلام قیمت تماس بگیرید:{" "}
          <span className="font-semibold">021-xxxxxxx</span>
        </p>
      </div>
    </motion.div>
  );
}
