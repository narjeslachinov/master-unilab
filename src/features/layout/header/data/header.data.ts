import { MenuItem } from "../type/header.type";
import { MegaSubMenu } from "../type/header.type";

export const menuItems: MenuItem[] = [
  {
    name: "دسته بندی",
    href: "/ProductsPage",
    subMenu: [
      { name: "محصول A", href: "/ProductDetails" },
      { name: "محصول B", href: "/ProductDetails" },
      { name: "محصول C", href: "/ProductDetails" },
      { name: "محصول D", href: "/ProductDetails" },
      { name: "محصول E", href: "/ProductDetails" },
      { name: "محصول F", href: "/ProductDetails" },
    ],
  },
  {
    name: "درباره ما",
    href: "/about",
  },
  {
    name: "محصولات",
    href: "/ProductsPage",
    subMenu: [
      { name: "محصول A", href: "/ProductDetails" },
      { name: "محصول B", href: "/ProductDetails" },
      { name: "محصول C", href: "/ProductDetails" },
    ],
  },
  {
    name: "خدمات",
    href: "/services",
    subMenu: [
      { name: "خدمت 1", href: "/services/1" },
      { name: "خدمت 2", href: "/services/2" },
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
export const megaSubMenu: MegaSubMenu = {
  "محصول A": [
    {
      name: "زیرمحصول A1",
      items: [
        { name: "محصول A1-1", href: "/ProductDetails" },
        { name: "محصول A1-2", href: "/ProductDetails" },
      ],
    },
    {
      name: "زیرمحصول A2",
      items: [
        { name: "محصول A2-1", href: "/ProductDetails" },
        { name: "محصول A2-2", href: "/ProductDetails" },
      ],
    },
    {
      name: "زیرمحصول A3",
      items: [
        { name: "محصول A3-1", href: "/ProductDetails" },
        { name: "محصول A3-2", href: "/ProductDetails" },
      ],
    },
  ],
  "محصول B": [
    {
      name: "زیرمحصول B1",
      items: [{ name: "محصول B1-1", href: "/ProductDetails" }],
    },
    {
      name: "زیرمحصول B2",
      items: [{ name: "محصول B2-1", href: "/ProductDetails" }],
    },
  ],
};
