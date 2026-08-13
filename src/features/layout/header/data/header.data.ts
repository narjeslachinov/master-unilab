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
    name: "محصولات",
    href: "/ProductsPage",
    children: [
      {
        id: 1,

        name: "محصول A",
        href: "/products",
        className: "header-nav-right-link",
      },
      {
        id: 2,

        name: "محصول B",
        href: "/products",
        className: "header-nav-right-link",
      },
      {
        id: 3,

        name: "محصول C",
        href: "/products",
        className: "header-nav-right-link",
      },
    ],
  },
  {
    id: 3,
    name: "مقالات",
    href: "/services",
    children: [
      {
        id: 1,

        name: "مقالات 1",
        href: "/services/1",
        className: "header-nav-right-link",
      },
      {
        id: 2,

        name: "مقالات 2",
        href: "/services/2",
        className: "header-nav-right-link",
      },
    ],
  },
  {
    id: 4,
    name: "درباره ما",
    href: "/about",
  },
  {
    id: 5,
    name: "تماس با ما",
    href: "/contact",
  },
];

export const megaMenu: MegaMenu = {
  products: [
    {
      id: 1,
      name: "محصول A",
      href: "/products",

      items: [
        {
          id: 1,
          name: "زیرمحصول A1",
          href: "/products",
          children: [
            {
              id: 1,
              name: "محصول A1-1",
              href: "/products",
            },
            {
              id: 2,
              name: "محصول A1-2",
              href: "/products",
            },
          ],
        },
        {
          id: 2,
          name: "زیرمحصول A2",
          href: "/products",
          children: [
            {
              id: 1,
              name: "محصول A2-1",
              href: "/products",
            },
            {
              id: 2,
              name: "محصول A2-2",
              href: "/products",
            },
          ],
        },
        {
          id: 3,
          name: "زیرمحصول A3",
          href: "/products",
          children: [
            {
              id: 1,
              name: "محصول A3-1",
              href: "/products",
            },
            {
              id: 2,
              name: "محصول A3-2",
              href: "/products",
            },
          ],
        },
      ],
    },

    {
      id: 2,
      name: "محصول B",
      href: "/products",

      items: [
        {
          id: 1,
          name: "زیرمحصول B1",
          href: "/products",
          children: [
            {
              id: 1,
              name: "محصول B1-1",
              href: "/products",
            },
          ],
        },
        {
          id: 2,
          name: "زیرمحصول B2",
          href: "/products",
          children: [
            {
              id: 1,
              name: "محصول B2-1",
              href: "/products",
            },
          ],
        },
      ],
    },

    {
      id: 3,
      name: "محصول C",
      href: "/products",
      items: [],
    },
    {
      id: 4,
      name: "محصول D",
      href: "/products",
      items: [],
    },
    {
      id: 5,
      name: "محصول E",
      href: "/products",
      items: [],
    },
    {
      id: 6,
      name: "محصول F",
      href: "/products",
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
    name: "علاقمندی ها",
    icon: FavouriteIcon,
    onClick: openWishlist,
  },
  {
    id: 2,
    name: "سبد خرید",
    icon: ShoppingCart02Icon,
    onClick: openCart,
  },
  {
    id: 3,
    name: "حساب کاربری",
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
