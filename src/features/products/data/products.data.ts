import type { ProductDetail } from "../types/product.types";

import glass from "../assets/glass2.webp";
import banner2 from "../assets/banner1.webp";

export const products: ProductDetail[] = [
  {
    id: 1,

    name: "پتری دیش 90mm",

    price: 120000,

    volume: "90mm",

    brand: "Pyrex",

    images: [glass, banner2],

    category: "ظروف شیشه‌ای",

    available: true,

    description:
      "پتری دیش 90 میلی‌متر مناسب کشت سلولی، نگهداری نمونه‌ها و انجام آزمایش‌های آزمایشگاهی.",

    features: [
      {
        title: "کیفیت ساخت بالا",
        description: "ساخته شده از شیشه با کیفیت مناسب آزمایشگاه.",
      },
      {
        title: "ابعاد استاندارد",
        description: "دارای قطر استاندارد 90 میلی‌متر.",
      },
    ],

    specifications: [
      {
        label: "قطر",
        value: "90mm",
      },
      {
        label: "برند",
        value: "Pyrex",
      },
      {
        label: "کشور سازنده",
        value: "آلمان",
      },
    ],

    downloads: [
      {
        id: 1,
        name: "کاتالوگ محصول",
        url: "/files/catalog.pdf",
        type: "pdf",
      },
    ],

    rating: 4.5,

    reviewCount: 24,

    reviews: [
      {
        id: 1,
        name: "علی رضایی",
        rating: 5,
        comment: "کیفیت محصول عالی بود.",
        date: "1403/07/12",
      },
    ],
  },

  {
    id: 2,

    name: "پیپت مدرج 10ml",

    price: 80000,

    volume: "10ml",

    brand: "BrandTech",

    images: [banner2],

    category: "ابزار اندازه‌گیری",

    available: false,

    description: "پیپت مدرج 10 میلی‌لیتر مناسب انتقال دقیق مایعات آزمایشگاهی.",

    features: [
      {
        title: "دقت بالا",
        description: "مناسب اندازه‌گیری حجم‌های آزمایشگاهی.",
      },
    ],

    specifications: [
      {
        label: "حجم",
        value: "10ml",
      },
      {
        label: "برند",
        value: "BrandTech",
      },
    ],

    downloads: [],

    rating: 4,

    reviewCount: 10,

    reviews: [],
  },

  {
    id: 3,

    name: "بالن ته گرد 250ml",

    price: 145000,

    volume: "250ml",

    brand: "Simax",

    images: [glass, banner2],

    category: "ظروف شیشه‌ای",

    available: true,

    description:
      "بالن ته گرد 250 میلی‌لیتر مناسب واکنش‌های شیمیایی و آزمایشگاهی.",

    features: [
      {
        title: "مقاومت حرارتی",
        description: "مناسب استفاده در شرایط دمایی مختلف.",
      },
    ],

    specifications: [
      {
        label: "حجم",
        value: "250ml",
      },
      {
        label: "برند",
        value: "Simax",
      },
    ],

    downloads: [],

    rating: 4.7,

    reviewCount: 15,

    reviews: [],
  },

  {
    id: 4,

    name: "ترازوی دیجیتال آزمایشگاهی",

    price: 3500000,

    volume: "-",

    brand: "Kern",

    images: [glass],

    category: "تجهیزات عمومی",

    available: true,

    description: "ترازوی دقیق آزمایشگاهی با قابلیت اندازه‌گیری وزن نمونه‌ها.",

    features: [
      {
        title: "دقت بالا",
        description: "مناسب اندازه‌گیری دقیق مواد آزمایشگاهی.",
      },
    ],

    specifications: [
      {
        label: "برند",
        value: "Kern",
      },
    ],

    downloads: [],

    rating: 4.8,

    reviewCount: 18,

    reviews: [],
  },

  {
    id: 5,

    name: "بشر 100ml",

    price: 60000,

    volume: "100ml",

    brand: "Pyrex",

    images: [glass, banner2],

    category: "ظروف شیشه‌ای",

    available: false,

    description: "بشر شیشه‌ای 100 میلی‌لیتر مناسب کارهای عمومی آزمایشگاهی.",

    features: [],

    specifications: [
      {
        label: "حجم",
        value: "100ml",
      },
    ],

    downloads: [],

    rating: 4.2,

    reviewCount: 8,

    reviews: [],
  },

  {
    id: 6,

    name: "ارلن مایر 250ml",

    price: 95000,

    volume: "250ml",

    brand: "Simax",

    images: [glass],

    category: "ظروف شیشه‌ای",

    available: true,

    description: "ارلن مایر مقاوم برای ترکیب و نگهداری محلول‌ها.",

    features: [],

    specifications: [
      {
        label: "حجم",
        value: "250ml",
      },
    ],

    downloads: [],

    rating: 4.4,

    reviewCount: 12,

    reviews: [],
  },

  {
    id: 7,

    name: "استوانه مدرج 100ml",

    price: 110000,

    volume: "100ml",

    brand: "Duran",

    images: [banner2],

    category: "ابزار اندازه‌گیری",

    available: true,

    description: "استوانه مدرج دقیق برای اندازه‌گیری حجم مایعات.",

    features: [],

    specifications: [
      {
        label: "حجم",
        value: "100ml",
      },
    ],

    downloads: [],

    rating: 4.6,

    reviewCount: 14,

    reviews: [],
  },

  {
    id: 8,

    name: "لام شیشه‌ای میکروسکوپ",

    price: 45000,

    volume: "Standard",

    brand: "Marienfeld",

    images: [glass],

    category: "مصرفی آزمایشگاهی",

    available: true,

    description: "لام شیشه‌ای با کیفیت برای بررسی نمونه‌های میکروسکوپی.",

    features: [],

    specifications: [
      {
        label: "نوع",
        value: "Microscope Slide",
      },
    ],

    downloads: [],

    rating: 4.3,

    reviewCount: 9,

    reviews: [],
  },
];
