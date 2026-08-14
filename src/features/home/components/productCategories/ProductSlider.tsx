"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import ProductCard from "@/features/products/components/listing/ProductCard";

import type { Product } from "@/features/products/types/product.types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductSliderProps {
  products: Product[];
}

export default function ProductSlider({ products }: ProductSliderProps) {
  return (
    <div className="relative">
      <Swiper
        className="custom-swiper"
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          480: { slidesPerView: 2 },
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3 },
          900: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4 },
          1200: { slidesPerView: 4.5 },
          1400: { slidesPerView: 5 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
