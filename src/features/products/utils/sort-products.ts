import type { Product } from "../types/product.types";
import type { ProductQueryParams } from "../types/product-filter.types";

export function sortProducts(
  products: Product[],
  query: ProductQueryParams,
): Product[] {
  const result = [...products];

  switch (query.sort) {
    case "price-asc":
      return result.sort((a, b) => a.price - b.price);

    case "price-desc":
      return result.sort((a, b) => b.price - a.price);

    case "rating-desc":
      return result.sort((a, b) => b.rating - a.rating);

    case "newest":
    default:
      return result.sort((a, b) => b.id - a.id);
  }
}
