import { IconSvgElement } from "@hugeicons/react";

export interface MenuLink {
  id: number;
  name: string;
  href: string;
  className?: string;
  children?: MenuLink[];
}

export interface MenuItem {
  id: number;
  name: string;
  href: string;
  children?: MenuLink[];
  megaMenuKey?: string;
}

export interface MegaMenuSection {
  id: number;
  name: string;
  href: string;
  items: MenuLink[];
}

export type MegaMenu = Record<string, MegaMenuSection[]>;

export interface GetHeaderActionsProps {
  openAuth: () => void;
  openCart: () => void;
  openWishlist: () => void;
}

export interface HeaderAction {
  id: number;
  name: string;
  icon: IconSvgElement;
  onClick: () => void;
}
export interface language {
  id: number;
  code: string;
  label: string;
  className: string;
}
