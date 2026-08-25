import type { Product } from "../types/product.types";
import type { ProductQueryParams } from "../types/product-filter.types";

export interface ProductsResult {
  items: Product[];

  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export function paginateProducts(
  products: Product[],
  query: ProductQueryParams,
): ProductsResult {
  const page = query.page ?? 1;
  const limit = query.limit ?? 6;

  const total = products.length;

  const totalPages = Math.ceil(total / limit);

  const startIndex = (page - 1) * limit;

  const items = products.slice(startIndex, startIndex + limit);

  return {
    items,

    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
  };
}
