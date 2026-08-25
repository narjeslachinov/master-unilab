"use client";
import { useEffect, useState } from "react";
import type { Product } from "../types/product.types";
import { getProductsServer } from "../services/product.service";
export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        setError(null);
        const response = getProductsServer();
        setProducts(response.items);
      } catch (error) {
        setError(error instanceof Error ? error.message : "خطای نامشخص");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);
  return { products, isLoading, error };
}
