"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import ProductCard from "./ProductCard";
import { Product } from "../../type/home.type";

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
          1100: { slidesPerView: 4.5 },
          1200: { slidesPerView: 5 },
          1300: { slidesPerView: 5.5 },
          1400: { slidesPerView: 6 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
