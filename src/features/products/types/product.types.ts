import type { StaticImageData } from "next/image";

export interface Product {
  id: number;

  name: string;

  price: number;
  discount:number;

  volume: string;

  brand: string;

  images: StaticImageData[] | string[];

  category: string;

  available: boolean;

  rating: number;

  reviewCount: number;
}
