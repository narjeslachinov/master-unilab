export interface SubMenuItem {
  name: string;
  href: string;
  className?: string;
}

export interface MenuItem {
  name: string;
  href: string;
  subMenu?: SubMenuItem[];
}
