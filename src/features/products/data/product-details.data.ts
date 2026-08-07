import type { ProductDetail } from "../types/product-detail.types";

import glass from "../assets/glass2.webp";
import banner2 from "../assets/banner1.webp";

export const productDetails: ProductDetail[] = [
  {
    id: 1,
    name: "پتری دیش 90mm",
    price: 120000,
    discount: 2,
    volume: "90mm",
    brand: "Pyrex",
    images: [glass, banner2],
    category: "ظروف شیشه‌ای",
    available: true,
    rating: 4.5,
    reviewCount: 24,

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

    reviews: [
      {
        id: 1,
        name: "علی رضایی",
        rating: 5,
        comment: "کیفیت محصول عالی بود.",
        date: "1403/07/12",
      },
      {
        id: 2,
        name: "سارا محمدی",
        rating: 4,
        comment: "برای کارهای آزمایشگاهی بسیار مناسب است.",
        date: "1403/08/05",
      },
    ],
  },

  {
    id: 2,
    name: "پیپت مدرج 10ml",
    price: 80000,
    discount: 1,
    volume: "10ml",
    brand: "BrandTech",
    images: [banner2],
    category: "ابزار اندازه‌گیری",
    available: false,
    rating: 4,
    reviewCount: 10,

    description:
      "پیپت مدرج 10 میلی‌لیتر مناسب انتقال و اندازه‌گیری دقیق مایعات آزمایشگاهی.",

    features: [
      {
        title: "دقت بالا",
        description: "مناسب اندازه‌گیری و انتقال دقیق حجم‌های آزمایشگاهی.",
      },
      {
        title: "طراحی استاندارد",
        description: "طراحی مناسب برای استفاده روزمره در آزمایشگاه.",
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
      {
        label: "نوع",
        value: "Graduated Pipette",
      },
    ],

    downloads: [
      {
        id: 2,
        name: "راهنمای استفاده",
        url: "/files/pipette-guide.pdf",
        type: "pdf",
      },
    ],

    reviews: [
      {
        id: 3,
        name: "محمد کریمی",
        rating: 4,
        comment: "دقت مناسبی دارد و استفاده از آن راحت است.",
        date: "1403/06/18",
      },
    ],
  },

  {
    id: 3,
    name: "بالن ته گرد 250ml",
    price: 145000,
    discount: 5,
    volume: "250ml",
    brand: "Simax",
    images: [glass, banner2],
    category: "ظروف شیشه‌ای",
    available: true,
    rating: 4.7,
    reviewCount: 15,

    description:
      "بالن ته گرد 250 میلی‌لیتر مناسب واکنش‌های شیمیایی، حرارت‌دهی و انجام آزمایش‌های مختلف آزمایشگاهی.",

    features: [
      {
        title: "مقاومت حرارتی",
        description: "مناسب استفاده در شرایط دمایی مختلف آزمایشگاهی.",
      },
      {
        title: "شیشه با کیفیت",
        description: "ساخته شده از شیشه مقاوم و مناسب استفاده آزمایشگاهی.",
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
      {
        label: "نوع",
        value: "Round Bottom Flask",
      },
    ],

    downloads: [
      {
        id: 3,
        name: "کاتالوگ بالن",
        url: "/files/flask-catalog.pdf",
        type: "pdf",
      },
    ],

    reviews: [
      {
        id: 4,
        name: "نگار احمدی",
        rating: 5,
        comment: "کیفیت شیشه بسیار خوب است.",
        date: "1403/07/21",
      },
      {
        id: 5,
        name: "رضا مرادی",
        rating: 4,
        comment: "برای کارهای آزمایشگاهی مناسب بود.",
        date: "1403/08/02",
      },
    ],
  },

  {
    id: 4,
    name: "ترازوی دیجیتال آزمایشگاهی",
    price: 3500000,
    discount: 10,
    volume: "-",
    brand: "Kern",
    images: [glass],
    category: "تجهیزات عمومی",
    available: true,
    rating: 4.8,
    reviewCount: 18,

    description:
      "ترازوی دیجیتال دقیق آزمایشگاهی مناسب اندازه‌گیری وزن نمونه‌ها و مواد با دقت بالا.",

    features: [
      {
        title: "دقت بالا",
        description: "مناسب اندازه‌گیری دقیق مواد و نمونه‌های آزمایشگاهی.",
      },
      {
        title: "نمایشگر دیجیتال",
        description: "دارای نمایشگر خوانا برای مشاهده سریع وزن.",
      },
    ],

    specifications: [
      {
        label: "برند",
        value: "Kern",
      },
      {
        label: "نوع",
        value: "Digital Laboratory Scale",
      },
      {
        label: "کاربرد",
        value: "اندازه‌گیری وزن نمونه‌ها",
      },
    ],

    downloads: [
      {
        id: 4,
        name: "دفترچه راهنمای ترازو",
        url: "/files/scale-manual.pdf",
        type: "pdf",
      },
    ],

    reviews: [
      {
        id: 6,
        name: "امیر حسینی",
        rating: 5,
        comment: "دقت و کیفیت ساخت بسیار خوبی دارد.",
        date: "1403/07/30",
      },
    ],
  },

  {
    id: 5,
    name: "بشر 100ml",
    price: 60000,
    discount: 3,
    volume: "100ml",
    brand: "Pyrex",
    images: [glass, banner2],
    category: "ظروف شیشه‌ای",
    available: false,
    rating: 4.2,
    reviewCount: 8,

    description:
      "بشر شیشه‌ای 100 میلی‌لیتر مناسب مخلوط کردن، نگهداری و انتقال محلول‌های آزمایشگاهی.",

    features: [
      {
        title: "شیشه با کیفیت",
        description: "ساخته شده از شیشه مناسب استفاده‌های آزمایشگاهی.",
      },
      {
        title: "طراحی کاربردی",
        description: "مناسب برای استفاده روزمره در آزمایشگاه.",
      },
    ],

    specifications: [
      {
        label: "حجم",
        value: "100ml",
      },
      {
        label: "برند",
        value: "Pyrex",
      },
      {
        label: "نوع",
        value: "Beaker",
      },
    ],

    downloads: [],

    reviews: [
      {
        id: 7,
        name: "مریم اکبری",
        rating: 4,
        comment: "برای استفاده‌های عمومی آزمایشگاهی مناسب است.",
        date: "1403/06/25",
      },
    ],
  },

  {
    id: 6,
    name: "ارلن مایر 250ml",
    price: 95000,
    discount: 4,
    volume: "250ml",
    brand: "Simax",
    images: [glass],
    category: "ظروف شیشه‌ای",
    available: true,
    rating: 4.4,
    reviewCount: 12,

    description:
      "ارلن مایر 250 میلی‌لیتر مقاوم برای ترکیب، نگهداری و آماده‌سازی محلول‌های آزمایشگاهی.",

    features: [
      {
        title: "مقاومت مناسب",
        description: "مناسب استفاده در محیط‌های مختلف آزمایشگاهی.",
      },
      {
        title: "طراحی ارگونومیک",
        description: "طراحی مناسب برای ترکیب و نگهداری محلول‌ها.",
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
      {
        label: "نوع",
        value: "Erlenmeyer Flask",
      },
    ],

    downloads: [
      {
        id: 6,
        name: "کاتالوگ محصول",
        url: "/files/erlenmeyer-catalog.pdf",
        type: "pdf",
      },
    ],

    reviews: [
      {
        id: 8,
        name: "حسین رضایی",
        rating: 5,
        comment: "محصول با کیفیت و کاربردی است.",
        date: "1403/07/15",
      },
    ],
  },

  {
    id: 7,
    name: "استوانه مدرج 100ml",
    price: 110000,
    discount: 6,
    volume: "100ml",
    brand: "Duran",
    images: [banner2],
    category: "ابزار اندازه‌گیری",
    available: true,
    rating: 4.6,
    reviewCount: 14,

    description:
      "استوانه مدرج 100 میلی‌لیتر با دقت مناسب برای اندازه‌گیری حجم مایعات آزمایشگاهی.",

    features: [
      {
        title: "اندازه‌گیری دقیق",
        description: "مناسب اندازه‌گیری دقیق حجم مایعات.",
      },
      {
        title: "خوانایی مناسب",
        description: "دارای درجه‌بندی واضح برای خواندن حجم.",
      },
    ],

    specifications: [
      {
        label: "حجم",
        value: "100ml",
      },
      {
        label: "برند",
        value: "Duran",
      },
      {
        label: "نوع",
        value: "Graduated Cylinder",
      },
    ],

    downloads: [],

    reviews: [
      {
        id: 9,
        name: "سینا محمودی",
        rating: 5,
        comment: "درجه‌بندی واضح و کیفیت خوبی دارد.",
        date: "1403/08/10",
      },
    ],
  },

  {
    id: 8,
    name: "لام شیشه‌ای میکروسکوپ",
    price: 45000,
    discount: 2,
    volume: "Standard",
    brand: "Marienfeld",
    images: [glass],
    category: "مصرفی آزمایشگاهی",
    available: true,
    rating: 4.3,
    reviewCount: 9,

    description:
      "لام شیشه‌ای با کیفیت مناسب برای آماده‌سازی و بررسی نمونه‌های میکروسکوپی.",

    features: [
      {
        title: "شفافیت بالا",
        description: "سطح شیشه‌ای شفاف برای مشاهده بهتر نمونه‌ها.",
      },
      {
        title: "سطح یکنواخت",
        description: "مناسب تهیه نمونه‌های میکروسکوپی دقیق.",
      },
    ],

    specifications: [
      {
        label: "نوع",
        value: "Microscope Slide",
      },
      {
        label: "برند",
        value: "Marienfeld",
      },
      {
        label: "کاربرد",
        value: "بررسی نمونه‌های میکروسکوپی",
      },
    ],

    downloads: [],

    reviews: [
      {
        id: 10,
        name: "الهام کریمی",
        rating: 4,
        comment: "برای کارهای میکروسکوپی کیفیت مناسبی دارد.",
        date: "1403/07/28",
      },
    ],
  },
];