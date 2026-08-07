"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import type { Product } from "../../types/product.types";
import ProductCard from "../listing/ProductCard";
import { Button } from "@/components/ui/Button";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products.length) {
    return null;
  }

  return (
    <section className="ProductCategoriesSection p-5 md:p-8 xl:p-10">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <h2 className="heading heading3">محصولات مرتبط</h2>

        <Button>مشاهده همه</Button>
      </div>

      <Swiper
        className="custom-swiper"

        modules={[Navigation, Pagination]}

        spaceBetween={20}

        navigation

        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },

          480: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 3,
          },

          1024: {
            slidesPerView: 4,
          },

          1400: {
            slidesPerView: 5,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
