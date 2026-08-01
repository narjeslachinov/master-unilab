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
