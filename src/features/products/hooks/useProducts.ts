"use client";

import { useEffect, useState } from "react";

import type { Product } from "../types/product.types";
import { getProducts } from "../services/product.service";


export function useProducts() {

  const [products, setProducts] = useState<Product[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);



  useEffect(() => {

    async function fetchProducts() {

      try {

        setIsLoading(true);

        const response = await getProducts();

        setProducts(response.data.items);

      } catch (error) {

        setError(
          error instanceof Error
            ? error.message
            : "خطای نامشخص"
        );

      } finally {

        setIsLoading(false);

      }

    }


    fetchProducts();

  }, []);



  return {
    products,
    isLoading,
    error,
  };

}