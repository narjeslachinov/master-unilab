import type { Product } from "../types/product.types";
import type { ProductQueryParams } from "../types/product-filter.types";

export function filterProducts(
  products: Product[],
  query: ProductQueryParams,
): Product[] {
  return products.filter((product) => {
    const matchesSearch =
      !query.search ||
      product.name.toLowerCase().includes(query.search.toLowerCase());

    const matchesCategory =
      !query.category ||
      query.category === "همه" ||
      product.category === query.category;

    const matchesBrand =
      !query.brand ||
      query.brand.length === 0 ||
      query.brand.includes(product.brand);

    const matchesVolume =
      !query.volume ||
      query.volume.length === 0 ||
      query.volume.includes(product.volume);

    const matchesMinPrice =
      query.minPrice === undefined || product.price >= query.minPrice;

    const matchesMaxPrice =
      query.maxPrice === undefined || product.price <= query.maxPrice;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesBrand &&
      matchesVolume &&
      matchesMinPrice &&
      matchesMaxPrice
    );
  });
}
