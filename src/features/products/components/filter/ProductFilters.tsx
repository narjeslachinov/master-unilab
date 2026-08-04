"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";

import { PreferenceHorizontalIcon } from "@hugeicons/core-free-icons";
import ProductFilterAccordion from "./ProductFilterAccordion";

interface ProductFiltersProps {
  categories: string[];
  volumes: string[];
  brands: string[];

  selectedCategory: string;
  onCategoryChange: (category: string) => void;

  selectedVolumes: string[];
  onVolumeToggle: (volume: string) => void;

  selectedBrands: string[];
  onBrandToggle: (brand: string) => void;

  maxPrice: number;
  onMaxPriceChange: (price: number) => void;
}

interface OpenFiltersState {
  category: boolean;
  volume: boolean;
  brand: boolean;
  price: boolean;
}

export default function ProductFilters({
  categories,
  volumes,
  brands,
  selectedCategory,
  onCategoryChange,
  selectedVolumes,
  onVolumeToggle,
  selectedBrands,
  onBrandToggle,
  maxPrice,
  onMaxPriceChange,
}: ProductFiltersProps) {
  const [openFilters, setOpenFilters] = useState<OpenFiltersState>({
    category: true,
    volume: false,
    brand: false,
    price: true,
  });

  const toggleAccordion = (filter: keyof OpenFiltersState) => {
    setOpenFilters((current) => ({
      ...current,
      [filter]: !current[filter],
    }));
  };

  return (
    <aside className="ProductFiltersSidebar w-full rounded-2xl border border-white/40 bg-white/30 p-4 shadow-lg backdrop-blur-md lg:w-1/4">
      {/* Header */}
      <div className="text-primary flex items-center gap-2 font-bold">
        <HugeiconsIcon icon={PreferenceHorizontalIcon} size={20}  />

        <h2 className="heading5">فیلتر محصولات</h2>
      </div>

      {/* Category */}
      <ProductFilterAccordion
        title="دسته‌بندی"
        isOpen={openFilters.category}
        onToggle={() => toggleAccordion("category")}
      >
        <ul className="mt-3 space-y-2">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;

            return (
              <li key={category}>
                <button
                  type="button"
                  onClick={() => onCategoryChange(category)}
                  className={`customeSmallText block w-full rounded-lg px-3 py-2 text-right transition ${
                    isSelected
                      ? "bg-primary text-light shadow"
                      : "text-gray hover:bg-sky-100"
                  }`}
                >
                  {category}
                </button>
              </li>
            );
          })}
        </ul>
      </ProductFilterAccordion>

      {/* Volume */}
      <ProductFilterAccordion
        title="حجم شیشه"
        isOpen={openFilters.volume}
        onToggle={() => toggleAccordion("volume")}
      >
        <div className="mt-3 flex flex-wrap gap-2">
          {volumes.map((volume) => {
            const isSelected = selectedVolumes.includes(volume);

            return (
              <button
                key={volume}
                type="button"
                onClick={() => onVolumeToggle(volume)}
                className={`rounded-full border px-3 py-1 text-xs transition ${
                  isSelected
                    ? "border-primary bg-primary textLight"
                    : "text-gray border-gray-300 hover:border-sky-900"
                }`}
              >
                {volume}
              </button>
            );
          })}
        </div>
      </ProductFilterAccordion>

      {/* Brand */}
      <ProductFilterAccordion
        title="برند"
        isOpen={openFilters.brand}
        onToggle={() => toggleAccordion("brand")}
      >
        <div className="mt-3 space-y-2">
          {brands.map((brand) => {
            const isSelected = selectedBrands.includes(brand);

            return (
              <label
                key={brand}
                className="text-gray flex cursor-pointer items-center gap-2 text-sm"
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onBrandToggle(brand)}
                  className="accent-sky-900"
                />

                <span>{brand}</span>
              </label>
            );
          })}
        </div>
      </ProductFilterAccordion>

      {/* Price */}
      <ProductFilterAccordion
        title="محدوده قیمت"
        isOpen={openFilters.price}
        onToggle={() => toggleAccordion("price")}
      >
        <div className="mt-3">
          <input
            type="range"
            min={50_000}
            max={4_000_000}
            step={50_000}
            value={maxPrice}
            onChange={(event) => onMaxPriceChange(Number(event.target.value))}
            className="w-full accent-sky-900"
          />

          <div className="text-gray mt-1 flex justify-between text-xs">
            <span>۵۰٬۰۰۰</span>

            <span>{maxPrice.toLocaleString("fa-IR")} تومان</span>
          </div>
        </div>
      </ProductFilterAccordion>
    </aside>
  );
}
