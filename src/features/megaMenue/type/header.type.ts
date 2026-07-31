export interface SubMenuItem {
  name: string;
  href: string;
}

export interface MenuItem {
  name: string;
  href: string;
  subMenu?: SubMenuItem[];
}

export type MegaSubMenuCategory = {
  name: string;
  items: SubMenuItem[];
};

export type MegaSubMenu = Record<string, MegaSubMenuCategory[]>;
