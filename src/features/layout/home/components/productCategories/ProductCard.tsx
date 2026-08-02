"use client";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Product } from "../../type/home.type";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card relative transform cursor-pointer overflow-hidden rounded-2xl border border-white/30 bg-white/20 shadow-lg backdrop-blur-md transition-transform hover:-translate-y-1">
      {/* Product Tag */}
      <span className="productTag customeSmallText absolute top-3 left-3 z-10 rounded-full px-2 py-1">
        {product.tag}
      </span>

      {/* Product Image */}
      <div className="product-image relative h-40 w-full overflow-hidden rounded-t-2xl">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="h-full w-full transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="product-info text-light flex flex-col items-center p-3 text-center">
        <h3 className="heading heading6 text-limit-2 mb-1">{product.name}</h3>

        <p className="customeSmallText text-limit-3 mb-2">{product.info}</p>

        <Button className="customeSmallText custome-link w-full">
          {product.price}
        </Button>
      </div>
    </div>
  );
}
