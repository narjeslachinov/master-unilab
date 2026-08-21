"use client";

import { useEffect, useState } from "react";

import type { Product } from "../types/product.types";
import { getProducts } from "../services/products.service";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await getProducts();

        if (!isMounted) {
          return;
        }

        setProducts(response.data.items);
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setError(
          error instanceof Error
            ? error.message
            : "خطای نامشخص در دریافت محصولات",
        );
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    products,
    isLoading,
    error,
  };
}
