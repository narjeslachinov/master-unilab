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
      <section className="ProductCategoriesSection p-5  md:p-8 xl:p-10">
        <div className="mx-auto flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            <div className="">
              <h2 className="heading heading1">دسته‌بندی محصولات</h2>

              <p >
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
