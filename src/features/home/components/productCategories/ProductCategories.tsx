"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

import CategoryTabs from "./CategoryTabs";
import ProductSlider from "./ProductSlider";

import type { Product } from "@/features/products/types/product.types";
import Link from "next/link";

interface ProductCategoriesProps {
  products: Product[];
}

export default function ProductCategories({
  products,
}: ProductCategoriesProps) {
  const categories = useMemo(() => {
    return [
      {
        id: "all",
        name: "همه",
      },

      ...Array.from(
        new Map(
          products.map((product) => [
            product.category,
            {
              id: product.category,
              name: product.category,
            },
          ]),
        ).values(),
      ),
    ];
  }, [products]);

  const [activeCategory, setActiveCategory] = useState(
    categories[0]?.id ?? "all",
  );

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products.slice(0, 10);
    }

    return products.filter((product) => product.category === activeCategory);
  }, [products, activeCategory]);

  return (
    <Container>
      <section className="ProductCategoriesSection p-5 md:p-8 xl:p-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div>
              <h2 className="heading heading1">دسته‌بندی محصولات</h2>

              <p>لوازم و تجهیزات آزمایشگاهی در گروه‌های متنوع</p>
            </div>

            <Button asChild>
              <Link href="/products">مشاهده همه</Link>
            </Button>
          </div>

          <CategoryTabs
            categories={categories}

            activeCategory={activeCategory}

            onChange={setActiveCategory}
          />

          <ProductSlider products={filteredProducts} />
        </div>
      </section>
    </Container>
  );
}
