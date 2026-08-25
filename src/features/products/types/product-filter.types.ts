// product-filter.types.ts

export type ProductSortOption =
  "newest" | "price-asc" | "price-desc" | "rating-desc";

export interface ProductQueryParams {
  search?: string;
  category?: string;
  brand?: string[];
  volume?: string[];
  minPrice?: number;
  maxPrice?: number;
  sort?: ProductSortOption;
  page?: number;
  limit?: number;
}

export interface ProductFilterOptions {
  categories: string[];
  volumes: string[];
  brands: string[];
}
