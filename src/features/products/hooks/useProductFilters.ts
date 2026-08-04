"use client";

import { useMemo, useState } from "react";

import type { Product } from "../types/product.types";
import type { ProductSortOption } from "../types/product-filter.types";

export function useProductFilters(products: Product[]) {
  const [selectedCategory, setSelectedCategory] = useState("همه");

  const [selectedVolumes, setSelectedVolumes] = useState<string[]>([]);

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const [maxPrice, setMaxPrice] = useState(4_000_000);

  const [sortBy, setSortBy] = useState<ProductSortOption>("newest");

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "همه" || product.category === selectedCategory;

      const matchesVolume =
        selectedVolumes.length === 0 ||
        selectedVolumes.includes(product.volume);

      const matchesBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);

      const matchesPrice = product.price <= maxPrice;

      return matchesCategory && matchesVolume && matchesBrand && matchesPrice;
    });

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "priceLow":
          return a.price - b.price;

        case "priceHigh":
          return b.price - a.price;

        case "newest":
        default:
          return b.id - a.id;
      }
    });
  }, [
    products,
    selectedCategory,
    selectedVolumes,
    selectedBrands,
    maxPrice,
    sortBy,
  ]);

  const toggleVolume = (volume: string) => {
    setSelectedVolumes((currentVolumes) => {
      if (currentVolumes.includes(volume)) {
        return currentVolumes.filter((item) => item !== volume);
      }

      return [...currentVolumes, volume];
    });
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((currentBrands) => {
      if (currentBrands.includes(brand)) {
        return currentBrands.filter((item) => item !== brand);
      }

      return [...currentBrands, brand];
    });
  };

  return {
    selectedCategory,
    selectedVolumes,
    selectedBrands,
    maxPrice,
    sortBy,

    filteredProducts,

    setSelectedCategory,
    setMaxPrice,
    setSortBy,

    toggleVolume,
    toggleBrand,
  };
}
