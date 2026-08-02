import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.webp";
import glass from "../assets/glass2.webp";

import {
  Slide,
  ServiceItem,
  Category,
  ProductsByCategory,
  Brand,
} from "../type/home.type";

import {
  CheckmarkBadge03Icon,
  MicroscopeIcon,
  NanoTechnologyIcon,
  PackageIcon,
  TestTube01Icon,
  ToolsIcon,
} from "@hugeicons/core-free-icons";

export const slides: Slide[] = [
  {
    id: 1,
    imageDesktop: banner1,
    imageMobile: banner1,
    title: "تجهیزات آزمایشگاهی دقیق",
    subtitle: "راهکاری مطمئن برای تحقیقات علمی",
  },
  {
    id: 2,
    imageDesktop: banner2,
    imageMobile: banner2,
    title: "ابزارهای مدرن آزمایشگاهی",
    subtitle: "نوآوری و کیفیت در خدمت پژوهش",
  },
  {
    id: 3,
    imageDesktop: banner3,
    imageMobile: banner3,
    title: "راهکارهای علمی پیشرفته",
    subtitle: "همراه مطمئن دانشگاه‌ها و مراکز تحقیقاتی",
  },
];

export const services: ServiceItem[] = [
  {
    id: 1,
    title: "مواد و محلول‌ها",
    description:
      "تأمین مواد شیمیایی و محلول‌های استاندارد آزمایشگاهی با بهترین کیفیت.",
    icon: TestTube01Icon,
  },
  {
    id: 2,
    title: "تجهیزات آزمایشگاهی",
    description: "انواع میکروسکوپ‌ها و تجهیزات مدرن برای تحقیقات دقیق.",
    icon: MicroscopeIcon,
  },
  {
    id: 3,
    title: "ایمنی و حفاظت",
    description: "تجهیزات ایمنی برای حفظ سلامت پرسنل و محیط آزمایشگاه.",
    icon: CheckmarkBadge03Icon,
  },
  {
    id: 4,
    title: "لوازم مصرفی",
    description: "انواع شیشه‌آلات، کیت‌ها و محصولات مصرفی روزمره.",
    icon: PackageIcon,
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "شیشه‌آلات",
    icon: CheckmarkBadge03Icon,
  },
  {
    id: 2,
    name: "مواد شیمیایی",
    icon: NanoTechnologyIcon,
  },
  {
    id: 3,
    name: "ابزار اپتیکی",
    icon: MicroscopeIcon,
  },
  {
    id: 4,
    name: "تجهیزات",
    icon: ToolsIcon,
  },
];

export const products: ProductsByCategory = {
  1: [
    {
      name: "شیشه بالن",
      img: glass,
      info: "شیشه مقاوم در برابر حرارت",
      price: "۱۲,۰۰۰ تومان",
      tag: "جدید",
    },
    {
      name: "پیپت",
      img: glass,
      info: "اندازه‌گیری دقیق مایعات",
      price: "۸,۰۰۰ تومان",
      tag: "پرفروش",
    },
    {
      name: "پیپت",
      img: glass,
      info: "اندازه‌گیری دقیق مایعات",
      price: "۸,۰۰۰ تومان",
      tag: "پرفروش",
    },
    {
      name: "پیپت",
      img: glass,
      info: "اندازه‌گیری دقیق مایعات",
      price: "۸,۰۰۰ تومان",
      tag: "پرفروش",
    },
    {
      name: "پیپت",
      img: glass,
      info: "اندازه‌گیری دقیق مایعات",
      price: "۸,۰۰۰ تومان",
      tag: "پرفروش",
    },
    {
      name: "پیپت",
      img: glass,
      info: "اندازه‌گیری دقیق مایعات",
      price: "۸,۰۰۰ تومان",
      tag: "پرفروش",
    },
    {
      name: "پیپت",
      img: glass,
      info: "اندازه‌گیری دقیق مایعات",
      price: "۸,۰۰۰ تومان",
      tag: "پرفروش",
    },
    {
      name: "پیپت",
      img: glass,
      info: "اندازه‌گیری دقازه‌گیری دقازه‌گیری دقازه‌گیری دقازه‌گیری دقازه‌گیری دقیق مایعات",
      price: "۸,۰۰۰ تومان",
      tag: "پرفروش",
    },
  ],

  2: [
    {
      name: "اسید سولفوریک",
      img: "/images/logo.jpg",
      info: "محصول خالص با غلظت بالا",
      price: "۲۵,۰۰۰ تومان",
      tag: "ویژه",
    },
  ],

  3: [
    {
      name: "میکروسکوپ نوری",
      img: "/products/microscope.jpg",
      info: "بزرگنمایی بالا",
      price: "۱۵۰,۰۰۰ تومان",
      tag: "ویژه",
    },
  ],

  4: [
    {
      name: "سانتریفیوژ",
      img: "/products/centrifuge.jpg",
      info: "سرعت بالا",
      price: "۳۰۰,۰۰۰ تومان",
      tag: "ویژه",
    },
  ],
};

export const brands: Brand[] = [
  {
    id: 1,
    name: "Pyrex",
    logo: glass,
  },
  {
    id: 2,
    name: "Merck",
    logo: glass,
  },
  {
    id: 3,
    name: "Sigma-Aldrich",
    logo: glass,
  },
  {
    id: 4,
    name: "Sartorius",
    logo: glass,
  },
  {
    id: 5,
    name: "IKA",
    logo: glass,
  },
  {
    id: 6,
    name: "Fisher Scientific",
    logo: glass,
  },
  {
    id: 7,
    name: "Thermo Fisher",
    logo: glass,
  },
  {
    id: 8,
    name: "Agilent",
    logo: glass,
  },
  {
    id: 9,
    name: "Shimadzu",
    logo: glass,
  },
  {
    id: 10,
    name: "Hanna",
    logo: glass,
  },
  {
    id: 11,
    name: "Hanna",
    logo: glass,
  },
  {
    id: 12,
    name: "Hanna",
    logo: glass,
  },
];
