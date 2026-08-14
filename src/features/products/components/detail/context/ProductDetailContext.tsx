"use client";

import { createContext, useContext, type ReactNode } from "react";

import type { Product } from "../../../types/product.types";
import type { ProductDetail } from "../../../types/product-detail.types";

interface ProductDetailContextValue {
  product: ProductDetail;
  relatedProducts: Product[];
}

interface ProductDetailProviderProps {
  children: ReactNode;
  product: ProductDetail;
  relatedProducts: Product[];
}

const ProductDetailContext = createContext<
  ProductDetailContextValue | undefined
>(undefined);

export function ProductDetailProvider({
  children,
  product,
  relatedProducts,
}: ProductDetailProviderProps) {
  return (
    <ProductDetailContext.Provider
      value={{
        product,
        relatedProducts,
      }}
    >
      {children}
    </ProductDetailContext.Provider>
  );
}

export function useProductDetail() {
  const context = useContext(ProductDetailContext);

  if (!context) {
    throw new Error(
      "useProductDetail must be used inside ProductDetailProvider",
    );
  }

  return context;
}
