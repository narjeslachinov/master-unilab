"use client";

import { useMemo } from "react";

import type { Product } from "@/features/products/types/product.types";

import type { MegaMenuSection } from "../type/header.type";

export function useMegaMenu(products: Product[]) {
  const sections = useMemo<MegaMenuSection[]>(() => {
    const categories = Array.from(
      new Set(products.map((product) => product.category)),
    );

    return categories.map((category) => {
      const categoryProducts = products.filter(
        (product) => product.category === category,
      );

      const brands = Array.from(
        new Set(categoryProducts.map((product) => product.brand)),
      );

      return {
        id: category,
        name: category,
        href: `/products?category=${encodeURIComponent(category)}`,

        items: brands.map((brand) => {
          const brandProducts = categoryProducts.filter(
            (product) => product.brand === brand,
          );

          return {
            id: `${category}-${brand}`,
            name: brand,
            href: `/products?category=${encodeURIComponent(
              category,
            )}&brand=${encodeURIComponent(brand)}`,

            children: brandProducts.map((product) => ({
              id: product.id,
              name: product.name,
              href: `/products/${product.id}`,
            })),
          };
        }),
      };
    });
  }, [products]);

  return {
    sections,
  };
}
