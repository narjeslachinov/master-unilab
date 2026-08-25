export type ProductSortOption =
  "default" | "price-asc" | "price-desc" | "rating-desc";

export interface ProductQueryParams {
  search?: string;
  category?: string;
  brand?: string;
  volume?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: ProductSortOption;
  page?: number;
  limit?: number;
}
