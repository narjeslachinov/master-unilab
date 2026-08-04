export interface ProductFilters {
  category: string;
  volumes: string[];
  brands: string[];
  maxPrice: number;
}

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

export interface ProductSortState {
  sortBy: ProductSortOption;
}

export type ProductSortOption = "newest" | "priceLow" | "priceHigh";
