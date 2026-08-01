import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.webp";
import { Slide, ServiceItem } from "../type/home.type";

import {
  CheckmarkBadge03Icon,
  MicroscopeIcon,
  PackageIcon,
  TestTube01Icon,
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
