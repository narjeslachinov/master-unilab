export type MenuItem = {
  id: number;
  name: string;
  href: string;
  children?: MenuLink[];
  megaMenuKey?: string;
};

export type MenuLink = {
  id: number;
  name: string;
  href: string;
  className?: string;
  children?: MenuLink[];
};

export type MegaMenuSection = {
  id: number;
  name: string;
  href: string;
  items: MenuLink[];
};

export type MegaMenu = Record<string, MegaMenuSection[]>;
