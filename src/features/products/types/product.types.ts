import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  name: string;
  price: number;
  volume: string;
  brand: string;
  images: StaticImageData[] | string[];
  category: string;
  available: boolean;
}
