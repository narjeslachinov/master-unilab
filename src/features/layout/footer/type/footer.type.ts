import { IconSvgElement } from "@hugeicons/react";

export interface FooterLink {
  id: number;
  title: string;
  href: string;
}

export interface FooterSocial {
  id: number;
  href: string;
  icon: IconSvgElement;
}
