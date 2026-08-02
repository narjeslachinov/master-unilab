import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.webp";
import glass from "../assets/glass2.webp";
import meeting from "../assets/businesspeople-meeting-office-working.jpg";
import discussion from "../assets/business-executives-having-discussion-digital-tablet.jpg";
import untitled from "../assets/Untitled.jpg";
import article from "../assets/laboratoryComposition.jpg";

import { GlobalIcon, Mail01Icon, UserIcon } from "@hugeicons/core-free-icons";
import { FooterLink, FooterSocial } from "../type/footer.type";
import { HugeiconsIcon } from "@hugeicons/react";

export const footerLinks: FooterLink[] = [
  {
    id: 1,
    title: "صفحه اصلی",
    href: "/",
  },
  {
    id: 2,
    title: "محصولات",
    href: "/products",
  },
  {
    id: 3,
    title: "مقالات",
    href: "/blog",
  },
  {
    id: 4,
    title: "درباره ما",
    href: "/about",
  },
];

export const footerSocials: FooterSocial[] = [
  {
    id: 1,
    href: "#",
    icon: GlobalIcon,
  },
  {
    id: 2,
    href: "#",
    icon: Mail01Icon,
  },
  {
    id: 3,
    href: "#",
    icon: UserIcon,
  },
];
