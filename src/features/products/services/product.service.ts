import { products } from "../data/products.data";
import { productDetails } from "../data/product-details.data";

import type { Product } from "../types/product.types";
import type { ProductDetail } from "../types/product-detail.types";

export interface ProductsResult {
  items: Product[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export function getProductsServer(): ProductsResult {
  return {
    items: products,
    pagination: {
      page: 1,
      limit: products.length,
      total: products.length,
      totalPages: 1,
    },
  };
}

export function getProductServer(id: number): ProductDetail | null {
  return productDetails.find((product) => product.id === id) ?? null;
}

export function getRelatedProductsServer(productId: number): ProductsResult {
  const currentProduct = products.find((product) => product.id === productId);

  if (!currentProduct) {
    return {
      items: [],
      pagination: {
        page: 1,
        limit: 0,
        total: 0,
        totalPages: 0,
      },
    };
  }

  const relatedProducts = products.filter(
    (product) =>
      product.category === currentProduct.category &&
      product.id !== currentProduct.id,
  );

  return {
    items: relatedProducts,
    pagination: {
      page: 1,
      limit: relatedProducts.length,
      total: relatedProducts.length,
      totalPages: 1,
    },
  };
}
