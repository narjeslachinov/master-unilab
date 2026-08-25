"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { Product } from "../types/product.types";
import type { ProductSortOption } from "../types/product-filter.types";

export function useProductFilters(products: Product[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category") ?? "همه";

  const selectedBrands =
    searchParams.get("brand")?.split(",").filter(Boolean) ?? [];

  const selectedVolumes =
    searchParams.get("volume")?.split(",").filter(Boolean) ?? [];

  const maxPrice = Number(searchParams.get("maxPrice") ?? 4_000_000);

  const sortBy = (searchParams.get("sort") as ProductSortOption) ?? "newest";

  const filterOptions = useMemo(() => {
    const categories = [
      "همه",
      ...new Set(products.map((product) => product.category)),
    ];

    const volumes = [...new Set(products.map((product) => product.volume))];

    const brands = [...new Set(products.map((product) => product.brand))];

    return {
      categories,
      volumes,
      brands,
    };
  }, [products]);

  function updateUrl(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams);

    if (value === null || value === "") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    // با تغییر Filter به صفحه اول برمی‌گردیم
    params.set("page", "1");

    router.push(`${pathname}?${params.toString()}`);
  }

  function setSelectedCategory(category: string) {
    if (category === "همه") {
      updateUrl("category", null);
      return;
    }

    updateUrl("category", category);
  }

  function setMaxPrice(price: number) {
    updateUrl("maxPrice", price.toString());
  }

  function setSortBy(sort: ProductSortOption) {
    updateUrl("sort", sort);
  }

  function toggleBrand(brand: string) {
    const current = new Set(selectedBrands);

    if (current.has(brand)) {
      current.delete(brand);
    } else {
      current.add(brand);
    }

    const value = Array.from(current).join(",");

    updateUrl("brand", value || null);
  }

  function toggleVolume(volume: string) {
    const current = new Set(selectedVolumes);

    if (current.has(volume)) {
      current.delete(volume);
    } else {
      current.add(volume);
    }

    const value = Array.from(current).join(",");

    updateUrl("volume", value || null);
  }

  function setPage(page: number) {
    const params = new URLSearchParams(searchParams);

    params.set("page", page.toString());

    router.push(`${pathname}?${params.toString()}`);
  }

  return {
    filterOptions,

    selectedCategory,
    selectedVolumes,
    selectedBrands,

    maxPrice,
    sortBy,

    setSelectedCategory,
    setMaxPrice,
    setSortBy,

    toggleVolume,
    toggleBrand,

    setPage,
  };
}
