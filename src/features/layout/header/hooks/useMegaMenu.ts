"use client";

import { useEffect, useMemo, useState } from "react";

import type { Product } from "@/features/products/types/product.types";
import { getProducts } from "@/features/products/services/product.service";

import type { MegaMenuSection } from "../type/header.type";

export function useMegaMenu() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await getProducts();

        setProducts(response.data.items);
      } catch {
        setError("خطا در دریافت اطلاعات منو");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

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
    products,
    isLoading,
    error,
  };
}
