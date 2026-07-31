import { MenuItem, MegaMenu } from "../type/header.type";

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "دسته بندی",
    href: "/ProductsPage",
    megaMenuKey: "products",
  },
  {
    id: 2,
    name: "درباره ما",
    href: "/about",
  },
  {
    id: 3,
    name: "محصولات",
    href: "/ProductsPage",
    children: [
      {
        id: 1,

        name: "محصول A",
        href: "/ProductDetails",
        className: "header-nav-right-link",
      },
      {
        id: 2,

        name: "محصول B",
        href: "/ProductDetails",
        className: "header-nav-right-link",
      },
      {
        id: 3,

        name: "محصول C",
        href: "/ProductDetails",
        className: "header-nav-right-link",
      },
    ],
  },
  {
    id: 4,
    name: "خدمات",
    href: "/services",
    children: [
      {
        id: 1,

        name: "خدمت 1",
        href: "/services/1",
        className: "header-nav-right-link",
      },
      {
        id: 2,

        name: "خدمت 2",
        href: "/services/2",
        className: "header-nav-right-link",
      },
    ],
  },
  {
    id: 5,
    name: "مقالات",
    href: "/ArticlesPage",
  },
  {
    id: 6,
    name: "تماس با ما",
    href: "/contact",
  },
];

export const megaMenu: MegaMenu = {
  products: [
    {
      id: 1,
      name: "محصول A",
      href: "/ProductDetails",

      items: [
        {
          id: 1,
          name: "زیرمحصول A1",
          href: "/ProductDetails",
          children: [
            {
              id: 1,

              name: "محصول A1-1",
              href: "/ProductDetails",
            },
            {
              id: 2,

              name: "محصول A1-2",
              href: "/ProductDetails",
            },
          ],
        },
        {
          id: 1,

          name: "زیرمحصول A2",
          href: "/ProductDetails",
          children: [
            {
              id: 1,

              name: "محصول A2-1",
              href: "/ProductDetails",
            },
            {
              id: 2,

              name: "محصول A2-2",
              href: "/ProductDetails",
            },
          ],
        },
        {
          id: 1,

          name: "زیرمحصول A3",
          href: "/ProductDetails",
          children: [
            {
              id: 1,

              name: "محصول A3-1",
              href: "/ProductDetails",
            },
            {
              id: 2,

              name: "محصول A3-2",
              href: "/ProductDetails",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "محصول B",
      href: "/ProductDetails",

      items: [
        {
          id: 1,

          name: "زیرمحصول B1",
          href: "/ProductDetails",
          children: [
            {
              id: 1,

              name: "محصول B1-1",
              href: "/ProductDetails",
            },
          ],
        },
        {
          id: 2,

          name: "زیرمحصول B2",
          href: "/ProductDetails",
          children: [
            {
              id: 1,

              name: "محصول B2-1",
              href: "/ProductDetails",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "محصول C",
      href: "/ProductDetails",

      items: [],
    },
    {
      id: 4,
      name: "محصول D",
      href: "/ProductDetails",

      items: [],
    },
    {
      id: 5,
      name: "محصول E",
      href: "/ProductDetails",

      items: [],
    },
    {
      id: 6,
      name: "محصول F",
      href: "/ProductDetails",

      items: [],
    },
  ],
};
