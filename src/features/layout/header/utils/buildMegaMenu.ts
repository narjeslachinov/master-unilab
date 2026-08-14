import type { Product } from "@/features/products/types/product.types";

import type {
  MegaMenuSection,
  MenuLink,
} from "../type/header.type";

export function buildMegaMenu(
  products: Product[],
): MegaMenuSection[] {
  const categories = new Map<string, Product[]>();

  // Group products by category
  for (const product of products) {
    const categoryProducts =
      categories.get(product.category) ?? [];

    categories.set(product.category, [
      ...categoryProducts,
      product,
    ]);
  }

  return Array.from(categories.entries()).map(
    ([category, categoryProducts]) => {
      const brands = new Map<string, Product[]>();

      // Group products by brand
      for (const product of categoryProducts) {
        const brandProducts =
          brands.get(product.brand) ?? [];

        brands.set(product.brand, [
          ...brandProducts,
          product,
        ]);
      }

      const items: MenuLink[] = Array.from(
        brands.entries(),
      ).map(([brand, brandProducts]) => ({
        id: `${category}-${brand}`,
        name: brand,
        href: `/products?category=${encodeURIComponent(
          category,
        )}&brand=${encodeURIComponent(brand)}`,

        children: brandProducts.map((product) => ({
          id: String(product.id),
          name: product.name,
          href: `/products/${product.id}`,
        })),
      }));

      return {
        id: category,
        name: category,
        href: `/products?category=${encodeURIComponent(
          category,
        )}`,
        items,
      };
    },
  );
}