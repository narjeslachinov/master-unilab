"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import BrandCard from "./BrandCard";
import { Brand } from "../../type/home.type";

import "swiper/css";

interface BrandSliderProps {
  brands: Brand[];
}

export default function BrandSlider({ brands }: BrandSliderProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={4}
      breakpoints={{
        320: { slidesPerView: 4 },
        480: { slidesPerView: 5 },
        640: { slidesPerView: 6 },
        768: { slidesPerView: 7 },
        900: { slidesPerView: 8 },
        1200: { slidesPerView: 9 },
        1400: { slidesPerView: 10 },
      }}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={4000}
      loop
      className="w-full"
    >
      {brands.map((brand) => (
        <SwiperSlide key={brand.id}>
          <BrandCard brand={brand} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
