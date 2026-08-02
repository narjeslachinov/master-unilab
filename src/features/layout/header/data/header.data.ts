import {
  FavouriteIcon,
  ShoppingCart02Icon,
  User03Icon,
} from "@hugeicons/core-free-icons";
import {
  MenuItem,
  MegaMenu,
  GetHeaderActionsProps,
  HeaderAction,
  language,
} from "../type/header.type";

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "دسته بندی",
    href: "/ProductsPage",
    megaMenuKey: "products",
  },
  {
    id: 2,
    name: "رباره ما",
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
    name: "خمات",
    href: "/services",
    children: [
      {
        id: 1,

        name: "خمت 1",
        href: "/services/1",
        className: "header-nav-right-link",
      },
      {
        id: 2,

        name: "خمت 2",
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
          id: 2,
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
          id: 3,
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
export const getHeaderActions = ({
  openAuth,
  openCart,
  openWishlist,
}: GetHeaderActionsProps): HeaderAction[] => [
  {
    id: 1,
    name: "wishlist",
    icon: FavouriteIcon,
    onClick: openWishlist,
  },
  {
    id: 2,
    name: "cart",
    icon: ShoppingCart02Icon,
    onClick: openCart,
  },
  {
    id: 3,
    name: "auth",
    icon: User03Icon,
    onClick: openAuth,
  },
];

export const languages: language[] = [
  {
    id: 1,
    code: "FA",
    label: "🇮🇷 فارسی",
    className: "header-nav-right-link",
  },
  {
    id: 2,
    code: "AR",
    label: "🇸🇦 العربية",
    className: "header-nav-right-link",
  },
  {
    id: 3,
    code: "EN",
    label: "🇬🇧 English",
    className: "header-nav-left-link",
  },
];
