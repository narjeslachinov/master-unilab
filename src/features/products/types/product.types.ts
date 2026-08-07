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

export interface Feature {
  title: string;

  description: string;
}

export interface Specification {
  label: string;

  value: string;
}

export interface Download {
  id: number;

  name: string;

  url: string;

  type: string;
}

export interface Review {
  id: number;

  name: string;

  rating: number;

  comment: string;

  date: string;
}

export interface ProductDetail extends Product {
  description: string;

  features: Feature[];

  specifications: Specification[];

  downloads: Download[];

  rating: number;

  reviewCount: number;

  reviews: Review[];
}
