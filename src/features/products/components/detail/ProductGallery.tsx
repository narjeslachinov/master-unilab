"use client";

import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/free-mode";

interface ProductGalleryProps {
  images: StaticImageData[] | string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState<StaticImageData | string>(
    images[0],
  );

  if (!images.length) {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      {/* Main Image */}
      <div className="relative h-96 w-full overflow-hidden rounded-2xl border border-white/40 bg-white/30 p-4 shadow-lg backdrop-blur-md">
        <Image
          src={mainImage}
          alt="تصویر محصول"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain"
        />
      </div>

      {/* Thumbnails */}
      <Swiper
        modules={[FreeMode]}
        spaceBetween={10}
        slidesPerView={6}
        freeMode
        watchSlidesProgress
        className="mt-5 w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={`${String(image)}-${index}`}
            className="cursor-pointer"
          >
            <button
              type="button"
              onClick={() => setMainImage(image)}
              className="block w-full"
              aria-label={`نمایش تصویر ${index + 1}`}
            >
              <Image
                src={image}
                alt={`تصویر ${index + 1} محصول`}
                width={120}
                height={80}
                className={cn(
                  "h-20 w-full rounded-lg border-2 object-contain",
                  mainImage === image ? "border-sky-600" : "border-transparent",
                )}
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
