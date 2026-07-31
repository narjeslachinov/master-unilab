import { MenuItem } from "../type/header.type";
export const menuItems: MenuItem[] = [
  {
    name: "دسته بندی",
    href: "/ProductsPage",
  },
  {
    name: "درباره ما",
    href: "/about",
  },
  {
    name: "محصولات",
    href: "/ProductsPage",
    subMenu: [
      {
        name: "محصول A",
        href: "/ProductDetails",
        className: "header-nav-right-link",
      },
      {
        name: "محصول B",
        href: "/ProductDetails",
        className: "header-nav-right-link",
      },
      {
        name: "محصول C",
        href: "/ProductDetails",
        className: "header-nav-right-link",
      },
    ],
  },
  {
    name: "خدمات",
    href: "/services",
    subMenu: [
      {
        name: "خدمت 1",
        href: "/services/1",
        className: "header-nav-right-link",
      },
      {
        name: "خدمت 2",
        href: "/services/2",
        className: "header-nav-right-link",
      },
    ],
  },
  {
    name: "مقالات",
    href: "/ArticlesPage",
  },
  {
    name: "تماس با ما",
    href: "/contact",
  },
];
