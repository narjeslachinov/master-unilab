"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { slides } from "../../data/home.data";
import HeroSlide from "./HeroSlide";

export default function HeroSlider() {
  return (
    <section className="relative h-96 w-full md:h-128">
      <Swiper
        direction="vertical"

        modules={[Autoplay, Pagination, Navigation]}

        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
        }}

        loop

        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
