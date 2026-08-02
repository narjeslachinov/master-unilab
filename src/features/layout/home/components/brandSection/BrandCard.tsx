"use client";
import Image from "next/image";

import { Brand } from "../../type/home.type";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex h-32 w-full items-center justify-center">
        <Image
          src={brand.logo}
          alt={brand.name}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
