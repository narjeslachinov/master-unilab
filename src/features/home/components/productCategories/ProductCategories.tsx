"use client";

import { useState } from "react";

import { categories, products } from "../../data/home.data";

import CategoryTabs from "./CategoryTabs";
import ProductSlider from "./ProductSlider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState<number>(
    categories[0].id,
  );

  return (
    <Container>
      <section className="ProductCategoriesSection my-10 px-5 pt-10 xl:px-10">
        <div className="mx-auto lg:px-4">
          {/* Header */}
          <div className="gap-3 flex flex-col items-center justify-between sm:flex-row">
            <div className="space-y-3">
              <h2 className="heading heading1">دسته‌بندی محصولات</h2>

              <p className="pb-4">
                لوازم و تجهیزات آزمایشگاهی در گروه‌های متنوع
              </p>
            </div>

            <Button>مشاهده بیشتر</Button>
          </div>

          {/* Tabs */}

          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />

          {/* Slider */}

          <ProductSlider products={products[activeCategory] ?? []} />
        </div>
      </section>
    </Container>
  );
}
