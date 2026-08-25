import { products } from "../data/products.data";

import type { ProductQueryParams } from "../types/product-filter.types";

import { filterProducts } from "../utils/filter-products";
import { sortProducts } from "../utils/sort-products";
import { paginateProducts } from "../utils/paginate-products";

export function getProducts(query: ProductQueryParams) {
  const filteredProducts = filterProducts(products, query);

  const sortedProducts = sortProducts(filteredProducts, query);

  const paginatedProducts = paginateProducts(sortedProducts, query);

  return paginatedProducts;
}
