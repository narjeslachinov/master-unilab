import { IconSvgElement } from "@hugeicons/react";

export interface MenuLink {
  id: string | number;
  name: string;
  href: string;
  className?: string;
  children?: MenuLink[];
}

export interface MenuItem extends MenuLink {
  megaMenuKey?: string;
}

export interface MegaMenuSection {
  id: string | number;
  name: string;
  href: string;
  items?: MenuLink[];
}

export type MegaMenu = Record<string, MegaMenuSection[]>;

export interface GetHeaderActionsProps {
  openAuth: () => void;
  openCart: () => void;
  openWishlist: () => void;
}

export interface MobileBottomNavProps extends GetHeaderActionsProps {
  openMenu: () => void;
  openSearch: () => void;
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
