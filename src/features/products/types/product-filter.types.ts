export interface ProductFilterOptions {
  categories: string[];
  volumes: string[];
  brands: string[];
}

export interface ProductFilterState {
  selectedCategory: string;

  selectedVolumes: string[];

  selectedBrands: string[];

  maxPrice: number;
}

export type ProductSortOption = "newest" | "priceLow" | "priceHigh";

export interface ProductSortState {
  sortBy: ProductSortOption;
}
