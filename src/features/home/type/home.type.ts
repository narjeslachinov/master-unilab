import type { StaticImageData } from "next/image";
import { IconSvgElement } from "@hugeicons/react";

export interface Slide {
  id: number;
  imageDesktop: StaticImageData | string;
  imageMobile: StaticImageData | string;
  title: string;
  subtitle: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: IconSvgElement;
}

export interface Category {
  id: number;
  name: string;
  icon: IconSvgElement;
}

export interface Product {
  name: string;
  img: StaticImageData | string;
  info: string;
  price: string;
  tag: string;
}

export type ProductsByCategory = Record<number, Product[]>;
export interface Brand {
  id: number;
  name: string;
  logo: StaticImageData | string;
}
export interface AboutImage {
  id: number;
  src: StaticImageData | string;
  alt: string;
  className: string;
}

export interface AboutStat {
  id: number;
  value: string;
  title: string;
}
export interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  image: StaticImageData | string;
  href: string;
}
